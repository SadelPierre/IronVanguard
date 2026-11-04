// Environment: sky, sun & shadows, image-based lighting, terrain, building helpers
import * as THREE from 'three';
import { loadHDR, pbr, loadTexture, addGrime } from './assets.js';
import { worldBoxGeometry } from './world.js';
import { setAtmosphere } from './scenery.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

// small value-noise for terrain
function hash(x, z) { const s = Math.sin(x * 127.1 + z * 311.7) * 43758.5453; return s - Math.floor(s); }
function vnoise(x, z) {
  const xi = Math.floor(x), zi = Math.floor(z), xf = x - xi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf), v = zf * zf * (3 - 2 * zf);
  const a = hash(xi, zi), b = hash(xi + 1, zi), c = hash(xi, zi + 1), d = hash(xi + 1, zi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
export function fbm(x, z, o = 4) { let s = 0, a = 0.5, f = 1; for (let i = 0; i < o; i++) { s += vnoise(x * f, z * f) * a; a *= 0.5; f *= 2.03; } return s; }

export function setupEnvironment(G, o) {
  const { scene, engine } = G;
  const r = engine.renderer;
  r.toneMappingExposure = o.exposure ?? 1;
  // IBL
  const pmrem = new THREE.PMREMGenerator(r);
  const hdr = loadHDR(o.hdri);
  // "puresky" HDRIs have no ground, so composite a sunlit ground hemisphere for realistic bounce light
  const envScene = new THREE.Scene();
  const gcol = new THREE.Color(o.bounceColor ?? o.groundColor ?? 0x6b5a45).multiplyScalar((o.sunIntensity ?? 3) * Math.max(0.15, o.sunDir.clone().normalize().y) * (o.bounce ?? 0.32));
  const envMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    uniforms: { map: { value: hdr }, ground: { value: gcol }, skyMul: { value: o.skyEnvMul ?? 1 } },
    vertexShader: 'varying vec3 vD; void main(){ vD = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: `uniform sampler2D map; uniform vec3 ground; uniform float skyMul; varying vec3 vD;
      void main(){ vec3 d = normalize(vD); vec2 uv = vec2(atan(d.z, d.x) * 0.15915494 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5);
        vec3 c = texture2D(map, uv).rgb * skyMul; float g = smoothstep(0.03, -0.06, d.y); gl_FragColor = vec4(mix(c, ground, g), 1.0); }`,
  });
  envScene.add(new THREE.Mesh(new THREE.SphereGeometry(10, 64, 32), envMat));
  const envTex = pmrem.fromScene(envScene, 0, 0.1, 100).texture;
  hdr.dispose(); envMat.dispose(); pmrem.dispose();
  scene.environment = envTex;
  scene.environmentIntensity = o.envIntensity ?? 1;
  engine.vmScene.environment = envTex;
  engine.vmScene.environmentIntensity = (o.envIntensity ?? 1) * (o.vmEnv ?? 1.25);
  // sky
  const sunDir = o.sunDir.clone().normalize();
  if (o.night) {
    scene.background = nightSky(o);
  } else {
    const sky = makeSky(o, sunDir);
    scene.add(sky); G.sky = sky;
    scene.background = null;
  }
  // sun / moon
  const sun = new THREE.DirectionalLight(o.sunColor ?? 0xfff1dc, o.sunIntensity ?? 3);
  sun.position.copy(sunDir).multiplyScalar(100);
  sun.castShadow = true;
  const q = engine.quality;
  const sz = { low: 1024, medium: 2048, high: 4096, ultra: 4096 }[q] || 2048;
  sun.shadow.mapSize.set(sz, sz);
  const ext = o.shadowExtent ?? 55;
  Object.assign(sun.shadow.camera, { left: -ext, right: ext, top: ext, bottom: -ext, near: 1, far: 250 });
  sun.shadow.bias = -0.0003; sun.shadow.normalBias = 0.03; sun.shadow.radius = 3; sun.shadow.blurSamples = 12;
  scene.add(sun); scene.add(sun.target);
  G.sun = sun; G.sunDir = sunDir; G.shadowExt = ext;
  const hemi = new THREE.HemisphereLight(o.skyColor ?? 0xbfd6ff, o.groundColor ?? 0x6b5a45, o.hemi ?? 0.25); scene.add(hemi);
  // viewmodel lighting mirrors the sun in camera space
  const vmSun = new THREE.DirectionalLight(o.sunColor ?? 0xfff1dc, (o.sunIntensity ?? 3) * 0.75);
  engine.vmScene.add(vmSun); engine.vmScene.add(vmSun.target); G.vmSun = vmSun;
  // constant key/fill from the upper left so the weapon always reads (it lives in camera space)
  const vmFill = new THREE.DirectionalLight(o.night ? 0x9db4ff : 0xffffff, o.night ? 0.35 : Math.max(0.6, (o.sunIntensity ?? 3) * 0.28));
  vmFill.position.set(-1.2, 1.4, 0.6); engine.vmScene.add(vmFill);
  engine.vmScene.add(new THREE.HemisphereLight(o.skyColor ?? 0xbfd6ff, o.groundColor ?? 0x6b5a45, (o.hemi ?? 0.25) * 1.2));
  // fog
  scene.fog = new THREE.FogExp2(o.fogColor ?? 0xc9d6e2, o.fogDensity ?? 0.0045);
  // height-falloff fog that glows toward the sun (aerial perspective)
  setAtmosphere({ sunDir, sunColor: new THREE.Color(o.sunColor ?? 0xfff1dc).multiplyScalar(o.night ? 0.15 : 0.55), scatter: o.scatter ?? (o.night ? 0.4 : 0.9), heightFalloff: o.fogFalloff ?? 0.03, baseY: 0 });
  G.grade = o.grade || {};
}

// Custom analytic sky dome: gradient + sun glow/disc + procedural clouds (direction-only, very robust)
function makeSky(o, sunDir) {
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: {
      zenith: { value: new THREE.Color(o.skyTop ?? 0x2f5f9e).multiplyScalar(o.skyBright ?? 1.4) },
      horizon: { value: new THREE.Color(o.skyHorizon ?? 0xc6d4e0).multiplyScalar(o.skyBright ?? 1.4) },
      ground: { value: new THREE.Color(o.skyGround ?? 0x6b6258).multiplyScalar(0.6) },
      sunDir: { value: sunDir.clone() },
      sunCol: { value: new THREE.Color(o.sunColor ?? 0xfff1dc) },
      cover: { value: o.clouds ?? 0.45 },
      cloudCol: { value: new THREE.Color(o.cloudColor ?? 0xffffff) },
      time: { value: 0 },
    },
    vertexShader: `varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p; }`,
    fragmentShader: `
      uniform vec3 zenith, horizon, ground, sunDir, sunCol, cloudCol; uniform float cover, time; varying vec3 vDir;
      float h21(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
      float n2(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      float fbm(vec2 p){ float s=0.0,a=0.5; for(int i=0;i<6;i++){ s+=n2(p)*a; p=p*2.03+vec2(1.7,9.2); a*=0.5; } return s; }
      void main(){
        vec3 d = normalize(vDir); float h = d.y;
        vec3 col = mix(horizon, zenith, pow(clamp(h,0.0,1.0), 0.45));
        col = mix(col, ground, smoothstep(0.0, -0.08, h));
        float c = max(dot(d, normalize(sunDir)), 0.0);
        col += sunCol * (pow(c, 6.0) * 0.35 + pow(c, 48.0) * 0.9) * (0.6 + 0.4 * (1.0 - clamp(h*2.0,0.0,1.0)));
        float disc = smoothstep(0.99955, 0.99975, c);
        col += sunCol * disc * 40.0;
        if (h > 0.0 && cover > 0.0) {
          vec2 uv = d.xz / (h + 0.12) * 1.6 + vec2(time * 0.004, time * 0.0015);
          float n = fbm(uv);
          float m = smoothstep(1.0 - cover, 1.0 - cover + 0.32, n) * smoothstep(0.0, 0.15, h);
          float lit = clamp(0.55 + (n - 0.5) * 1.3 + pow(c, 4.0) * 0.6, 0.0, 1.4);
          vec3 cc = cloudCol * mix(horizon * 0.55, vec3(1.0) * length(horizon) * 0.62, lit) + sunCol * pow(c, 8.0) * 0.8 * m;
          col = mix(col, cc, m * 0.92);
        }
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(1000, 48, 24), mat);
  sky.frustumCulled = false; sky.renderOrder = -10;
  return sky;
}

function nightSky(o) {
  const c = document.createElement('canvas'); c.width = 2048; c.height = 1024; const g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, 1024);
  gr.addColorStop(0, '#02040a'); gr.addColorStop(0.42, '#0a1426'); gr.addColorStop(0.5, '#1a2436'); gr.addColorStop(0.52, '#0b0d12'); gr.addColorStop(1, '#050505');
  g.fillStyle = gr; g.fillRect(0, 0, 2048, 1024);
  for (let i = 0; i < 2500; i++) { const y = Math.random() * 500; const b = Math.random(); g.fillStyle = `rgba(255,255,255,${b * b * (1 - y / 520)})`; g.fillRect(Math.random() * 2048, y, b > 0.95 ? 2 : 1, b > 0.95 ? 2 : 1); }
  // moon
  const mx = 1300, my = 260; const mg = g.createRadialGradient(mx, my, 0, mx, my, 90); mg.addColorStop(0, 'rgba(220,230,255,0.35)'); mg.addColorStop(1, 'rgba(200,210,255,0)');
  g.fillStyle = mg; g.fillRect(mx - 90, my - 90, 180, 180); g.fillStyle = '#e8ecf5'; g.beginPath(); g.arc(mx, my, 16, 0, 7); g.fill();
  // city glow on horizon
  const cg = g.createLinearGradient(0, 470, 0, 530); cg.addColorStop(0, 'rgba(255,140,60,0)'); cg.addColorStop(0.7, 'rgba(255,140,60,0.12)'); cg.addColorStop(1, 'rgba(255,140,60,0)');
  g.fillStyle = cg; g.fillRect(0, 470, 2048, 60);
  const t = new THREE.CanvasTexture(c); t.mapping = THREE.EquirectangularReflectionMapping; t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// follow the player with the shadow frustum (texel-snapped to avoid shimmering)
export function updateSun(G) {
  const sun = G.sun; if (!sun) return;
  const p = G.player.pos;
  const ext = G.shadowExt, ms = sun.shadow.mapSize.x, texel = (2 * ext) / ms;
  const c = V(Math.round(p.x / texel) * texel, 0, Math.round(p.z / texel) * texel);
  sun.target.position.copy(c); sun.position.copy(c).addScaledVector(G.sunDir, 120);
  sun.target.updateMatrixWorld();
  if (G.vmSun) {
    const cam = G.engine.camera; const d = G.sunDir.clone().applyQuaternion(cam.quaternion.clone().invert());
    G.vmSun.position.copy(d).multiplyScalar(5); G.vmSun.target.position.set(0, 0, 0);
  }
  if (G.sky) { G.sky.position.copy(G.engine.camera.position); G.sky.material.uniforms.time.value = G.time; }
}

// big terrain: flat inside play area, rolling hills outside
export async function terrain(G, { tex, texSize = 4, size = 700, flat = 90, hills = 25, color, seed = 0, mat: matName = 'dirt', rough }) {
  const segs = 160;
  const geo = new THREE.PlaneGeometry(size, size, segs, segs); geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position, uv = geo.attributes.uv;
  const cols = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const d = Math.max(Math.abs(x), Math.abs(z));
    const t = THREE.MathUtils.smoothstep(d, flat, flat + 70);
    const h = t * (fbm(x * 0.012 + seed, z * 0.012) * hills + fbm(x * 0.05, z * 0.05 + seed) * 4) - (1 - t) * 0;
    pos.setY(i, h + (d < flat ? 0 : 0));
    uv.setXY(i, x / texSize, z / texSize);
    const n = 0.82 + fbm(x * 0.03 + 5, z * 0.03) * 0.36;
    cols[i * 3] = cols[i * 3 + 1] = cols[i * 3 + 2] = n;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
  geo.computeVertexNormals();
  const m = (await pbr(tex)).clone();
  addGrime(m, 0.0);
  m.vertexColors = true; if (color) m.color.set(color);
  if (rough !== undefined) m.roughness = rough;
  const mesh = new THREE.Mesh(geo, m); mesh.receiveShadow = true;
  G.scene.add(mesh); G.world.groundMat = matName;
  return mesh;
}

// wall with openings: openings = [{at:0..1, w, y0, y1}]
export function wallOpen(world, x1, z1, x2, z2, h, thick, mat, openings = [], opts = {}) {
  const horiz = Math.abs(x2 - x1) >= Math.abs(z2 - z1);
  const a = horiz ? Math.min(x1, x2) : Math.min(z1, z2), len = horiz ? Math.abs(x2 - x1) : Math.abs(z2 - z1);
  const fixed = horiz ? z1 : x1;
  const seg = (s, e, y0, y1) => {
    if (e - s < 0.02 || y1 - y0 < 0.02) return;
    const c = (s + e) / 2;
    if (horiz) world.box(c, y0 + (opts.y || 0), fixed, e - s, y1 - y0, thick, mat, opts);
    else world.box(fixed, y0 + (opts.y || 0), c, thick, y1 - y0, e - s, mat, opts);
  };
  const ops = openings.map(o => ({ s: a + len * o.at - o.w / 2, e: a + len * o.at + o.w / 2, y0: o.y0 ?? 0, y1: o.y1 ?? 2.3 })).sort((p, q) => p.s - q.s);
  let cur = a;
  for (const o of ops) {
    seg(cur, o.s, 0, h);
    seg(o.s, o.e, 0, o.y0);
    seg(o.s, o.e, o.y1, h);
    cur = o.e;
  }
  seg(cur, a + len, 0, h);
}

// rectangular building with doors/windows on each side. sides: n (z-), s (z+), w (x-), e (x+)
export function building(world, cx, cz, w, d, h, wallMat, { roofMat, floorMat, thick = 0.3, doors = {}, windows = {}, roof = true, parapet = 0.6, trim } = {}) {
  const x0 = cx - w / 2, x1 = cx + w / 2, z0 = cz - d / 2, z1 = cz + d / 2;
  const ops = side => [...(doors[side] || []).map(at => ({ at, w: 1.3, y0: 0, y1: 2.3 })), ...(windows[side] || []).map(at => ({ at, w: 1.2, y0: 1.0, y1: 2.0 }))];
  wallOpen(world, x0, z0, x1, z0, h, thick, wallMat, ops('n'));
  wallOpen(world, x0, z1, x1, z1, h, thick, wallMat, ops('s'));
  wallOpen(world, x0, z0 + thick / 2, x0, z1 - thick / 2, h, thick, wallMat, ops('w'));
  wallOpen(world, x1, z0 + thick / 2, x1, z1 - thick / 2, h, thick, wallMat, ops('e'));
  if (roof) {
    world.box(cx, h, cz, w + 0.2, 0.25, d + 0.2, roofMat || wallMat, { texSize: 3 });
    if (parapet) {
      world.box(cx, h + 0.25, z0 - 0.05, w + 0.2, parapet, 0.2, wallMat, { collide: false });
      world.box(cx, h + 0.25, z1 + 0.05, w + 0.2, parapet, 0.2, wallMat, { collide: false });
      world.box(x0 - 0.05, h + 0.25, cz, 0.2, parapet, d, wallMat, { collide: false });
      world.box(x1 + 0.05, h + 0.25, cz, 0.2, parapet, d, wallMat, { collide: false });
    }
  }
  if (floorMat) world.box(cx, 0, cz, w - thick, 0.04, d - thick, floorMat, { collide: false, cast: false });
  // dim interior light so rooms are not lit like the outdoors
  return { x0, x1, z0, z1 };
}

export async function containerMat(color) {
  const m = (await pbr('container_side')).clone();
  m.color.set(color); return m;
}

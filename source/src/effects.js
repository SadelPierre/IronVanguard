// Visual effects: particles, tracers, decals, muzzle flashes, explosions, shell casings
import * as THREE from 'three';

function canvasTex(size, draw) {
  const c = document.createElement('canvas'); c.width = c.height = size; const g = c.getContext('2d'); draw(g, size);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
const softTex = () => canvasTex(64, (g, s) => { const gr = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.4, 'rgba(255,255,255,0.5)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, s, s); });
const smokeTex = () => canvasTex(128, (g, s) => {
  for (let i = 0; i < 40; i++) {
    const x = s / 2 + (Math.random() - 0.5) * s * 0.45, y = s / 2 + (Math.random() - 0.5) * s * 0.45, r = s * (0.12 + Math.random() * 0.2);
    const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, 'rgba(255,255,255,0.18)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, s, s);
  }
});
const flashTex = () => canvasTex(128, (g, s) => {
  g.translate(s / 2, s / 2);
  const gr = g.createRadialGradient(0, 0, 0, 0, 0, s / 2); gr.addColorStop(0, 'rgba(255,250,220,1)'); gr.addColorStop(0.2, 'rgba(255,200,90,0.9)'); gr.addColorStop(0.5, 'rgba(255,120,30,0.3)'); gr.addColorStop(1, 'rgba(255,80,0,0)');
  g.fillStyle = gr;
  for (let i = 0; i < 7; i++) { g.rotate(Math.PI * 2 / 7 + Math.random() * 0.3); g.beginPath(); g.moveTo(0, -s * 0.06); g.lineTo(s * 0.5 * (0.6 + Math.random() * 0.4), 0); g.lineTo(0, s * 0.06); g.fill(); }
  g.beginPath(); g.arc(0, 0, s * 0.18, 0, 7); g.fill();
});
const holeTex = () => canvasTex(64, (g, s) => {
  const c = s / 2;
  const gr = g.createRadialGradient(c, c, 0, c, c, c); gr.addColorStop(0, 'rgba(10,8,6,1)'); gr.addColorStop(0.18, 'rgba(15,12,10,0.95)'); gr.addColorStop(0.35, 'rgba(40,35,30,0.55)'); gr.addColorStop(1, 'rgba(60,55,50,0)');
  g.fillStyle = gr; g.fillRect(0, 0, s, s);
  g.strokeStyle = 'rgba(20,18,15,0.6)'; g.lineWidth = 1;
  for (let i = 0; i < 6; i++) { const a = Math.random() * 7; g.beginPath(); g.moveTo(c, c); g.lineTo(c + Math.cos(a) * c * (0.5 + Math.random() * 0.4), c + Math.sin(a) * c * (0.5 + Math.random() * 0.4)); g.stroke(); }
});
const scorchTex = () => canvasTex(128, (g, s) => { const c = s / 2; const gr = g.createRadialGradient(c, c, 0, c, c, c); gr.addColorStop(0, 'rgba(5,5,5,0.95)'); gr.addColorStop(0.5, 'rgba(15,12,10,0.6)'); gr.addColorStop(1, 'rgba(20,20,20,0)'); g.fillStyle = gr; g.fillRect(0, 0, s, s); });

const PVERT = `
attribute float aSize; attribute vec4 aColor; attribute float aRot; varying vec4 vColor; varying float vRot;
uniform float uScale;
void main(){ vColor=aColor; vRot=aRot; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*uScale/-mv.z; gl_Position=projectionMatrix*mv; }`;
const PFRAG = `
uniform sampler2D map; varying vec4 vColor; varying float vRot;
void main(){ vec2 p=gl_PointCoord-0.5; float c=cos(vRot), s=sin(vRot); p=vec2(c*p.x-s*p.y, s*p.x+c*p.y)+0.5; vec4 t=texture2D(map,p); gl_FragColor=vec4(vColor.rgb*t.rgb, vColor.a*t.a); if(gl_FragColor.a<0.004) discard; }`;

class ParticleSystem {
  constructor(scene, max, tex, additive) {
    this.max = max; this.n = 0;
    this.pos = new Float32Array(max * 3); this.col = new Float32Array(max * 4); this.size = new Float32Array(max); this.rot = new Float32Array(max);
    this.vel = new Float32Array(max * 3); this.life = new Float32Array(max); this.maxLife = new Float32Array(max);
    this.grow = new Float32Array(max); this.drag = new Float32Array(max); this.grav = new Float32Array(max); this.a0 = new Float32Array(max); this.spin = new Float32Array(max);
    this.base = new Float32Array(max * 3); this.fade = new Uint8Array(max);
    const geo = this.geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aColor', new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aRot', new THREE.BufferAttribute(this.rot, 1).setUsage(THREE.DynamicDrawUsage));
    this.mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: tex }, uScale: { value: 600 } }, vertexShader: PVERT, fragmentShader: PFRAG,
      transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(geo, this.mat); this.points.frustumCulled = false; this.points.renderOrder = additive ? 11 : 10;
    scene.add(this.points);
  }
  spawn(p, v, { life = 1, size = 0.2, color = [1, 1, 1], alpha = 1, grow = 0, drag = 0, grav = 0, spin = 0, fade = 1 } = {}) {
    let i = this.n < this.max ? this.n++ : (Math.random() * this.max) | 0;
    this.pos.set([p.x, p.y, p.z], i * 3); this.vel.set([v.x, v.y, v.z], i * 3);
    this.col.set([color[0], color[1], color[2], alpha], i * 4); this.base.set(color, i * 3);
    this.size[i] = size; this.life[i] = life; this.maxLife[i] = life; this.grow[i] = grow; this.drag[i] = drag; this.grav[i] = grav; this.a0[i] = alpha;
    this.rot[i] = Math.random() * 6.28; this.spin[i] = spin * (Math.random() - 0.5); this.fade[i] = fade;
  }
  update(dt) {
    let n = this.n;
    for (let i = 0; i < n; i++) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        n--; // swap remove
        const cp = (a, s) => { for (let k = 0; k < s; k++) a[i * s + k] = a[n * s + k]; };
        cp(this.pos, 3); cp(this.vel, 3); cp(this.col, 4); cp(this.base, 3);
        for (const a of [this.size, this.life, this.maxLife, this.grow, this.drag, this.grav, this.a0, this.rot, this.spin, this.fade]) a[i] = a[n];
        i--; continue;
      }
      const d = Math.max(0, 1 - this.drag[i] * dt);
      this.vel[i * 3] *= d; this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * d - this.grav[i] * dt; this.vel[i * 3 + 2] *= d;
      this.pos[i * 3] += this.vel[i * 3] * dt; this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      if (this.pos[i * 3 + 1] < 0.01 && this.grav[i] > 0) { this.pos[i * 3 + 1] = 0.01; this.vel[i * 3 + 1] *= -0.3; this.vel[i * 3] *= 0.6; this.vel[i * 3 + 2] *= 0.6; }
      this.size[i] += this.grow[i] * dt; this.rot[i] += this.spin[i] * dt;
      const t = this.life[i] / this.maxLife[i];
      this.col[i * 4 + 3] = this.a0[i] * (this.fade[i] === 2 ? Math.min(1, t * 3) * Math.min(1, (1 - t) * 8 + 0.2) : t);
    }
    this.n = n;
    this.geo.setDrawRange(0, n);
    for (const k of ['position', 'aColor', 'aSize', 'aRot']) this.geo.attributes[k].needsUpdate = true;
  }
  clear() { this.n = 0; this.geo.setDrawRange(0, 0); }
}

export class Effects {
  constructor(scene, vmScene) {
    this.scene = scene; this.vmScene = vmScene;
    this.tex = { soft: softTex(), smoke: smokeTex(), flash: flashTex(), hole: holeTex(), scorch: scorchTex() };
    this.add = new ParticleSystem(scene, 1500, this.tex.soft, true);
    this.smoke = new ParticleSystem(scene, 900, this.tex.smoke, false);
    this.dust = new ParticleSystem(scene, 1200, this.tex.soft, false);
    // pooled lights (never added/removed → no shader recompiles)
    this.lights = [];
    for (let i = 0; i < 4; i++) { const l = new THREE.PointLight(0xffb060, 0, 12, 2); l.userData.t = 0; scene.add(l); this.lights.push(l); }
    this.bigLight = new THREE.PointLight(0xff8a3a, 0, 40, 2); scene.add(this.bigLight);
    // decals
    this.decalGeo = new THREE.PlaneGeometry(1, 1);
    this.holeMat = new THREE.MeshStandardMaterial({ map: this.tex.hole, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, roughness: 0.9 });
    this.scorchMat = new THREE.MeshStandardMaterial({ map: this.tex.scorch, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, roughness: 1 });
    this.decals = [];
    // tracers
    this.tracers = [];
    this.tracerMat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false }); this.tracerMat.color.setRGB(4, 3.2, 2);
    this.tracerGeo = new THREE.CylinderGeometry(0.008, 0.008, 1, 4, 1, true); this.tracerGeo.rotateX(Math.PI / 2);
    // world muzzle flash sprites (enemies)
    this.flashMat = new THREE.SpriteMaterial({ map: this.tex.flash, blending: THREE.AdditiveBlending, depthWrite: false }); this.flashMat.color.setRGB(5, 4, 3);
    this.flashes = [];
    // shell casings
    const sg = new THREE.CylinderGeometry(0.0045, 0.0045, 0.03, 8); sg.rotateZ(Math.PI / 2);
    this.shellMesh = new THREE.InstancedMesh(sg, new THREE.MeshStandardMaterial({ color: 0xc9a046, metalness: 1, roughness: 0.3 }), 60);
    this.shellMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage); this.shellMesh.frustumCulled = false; this.shellMesh.count = 0;
    scene.add(this.shellMesh); this.shells = [];
    this.smokeClouds = []; // LOS blockers {pos, r, t}
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._e = new THREE.Euler();
    this.shake = 0;
  }

  flashLight(pos, intensity = 6, color = 0xffb060, dur = 0.05) {
    const l = this.lights.reduce((a, b) => (a.userData.t < b.userData.t ? a : b));
    l.position.copy(pos); l.color.set(color); l.intensity = intensity; l.userData.t = dur; l.userData.i0 = intensity; l.userData.d = dur;
  }

  muzzleWorld(pos, dir, scale = 1) {
    const s = new THREE.Sprite(this.flashMat); s.position.copy(pos); s.scale.setScalar(0.5 * scale * (0.7 + Math.random() * 0.6)); s.material.rotation = Math.random() * 6;
    s.userData.t = 0.05; this.scene.add(s); this.flashes.push(s);
    this.flashLight(pos, 4 * scale);
    for (let i = 0; i < 3; i++) this.smoke.spawn(pos, dir.clone().multiplyScalar(1 + Math.random()).add(new THREE.Vector3(0, 0.3, 0)), { life: 0.8, size: 0.25, grow: 0.6, color: [0.75, 0.75, 0.75], alpha: 0.12, drag: 2 });
  }

  tracer(from, to, speed = 350) {
    const m = new THREE.Mesh(this.tracerGeo, this.tracerMat);
    const dir = to.clone().sub(from); const len = dir.length(); dir.normalize();
    m.position.copy(from); m.lookAt(to); m.scale.set(1, 1, Math.min(4, len));
    m.userData = { dir, dist: 0, len, speed };
    this.scene.add(m); this.tracers.push(m);
  }

  impact(point, normal, mat) {
    const n = normal;
    const dirt = mat === 'dirt' || mat === 'sand' || mat === 'grass' || mat === 'ground';
    const col = mat === 'sand' ? [0.75, 0.65, 0.48] : dirt ? [0.45, 0.38, 0.3] : mat === 'wood' ? [0.5, 0.36, 0.22] : [0.62, 0.6, 0.57];
    for (let i = 0; i < (dirt ? 10 : 6); i++) {
      const v = n.clone().multiplyScalar(1.5 + Math.random() * 3).add(new THREE.Vector3((Math.random() - 0.5) * 2, Math.random() * 2, (Math.random() - 0.5) * 2));
      this.dust.spawn(point, v, { life: 0.5 + Math.random() * 0.6, size: 0.05 + Math.random() * 0.05, color: col, alpha: 0.9, grav: 9, drag: 1 });
    }
    for (let i = 0; i < 3; i++) this.smoke.spawn(point.clone().addScaledVector(n, 0.05), n.clone().multiplyScalar(0.6 + Math.random()).add(new THREE.Vector3(0, 0.2, 0)), { life: 1.2 + Math.random(), size: 0.25, grow: 0.7, color: col, alpha: 0.35, drag: 2.5, spin: 1 });
    if (mat === 'metal' || mat === 'concrete') {
      for (let i = 0; i < (mat === 'metal' ? 10 : 4); i++) {
        const v = n.clone().multiplyScalar(2 + Math.random() * 4).add(new THREE.Vector3((Math.random() - 0.5) * 6, Math.random() * 4, (Math.random() - 0.5) * 6));
        this.add.spawn(point, v, { life: 0.15 + Math.random() * 0.25, size: 0.04, color: [1, 0.7, 0.3], alpha: 1, grav: 12 });
      }
    }
    if (!dirt || Math.random() < 0.5) this.decal(point, n, 0.07 + Math.random() * 0.03, this.holeMat);
  }

  blood(point, dir) {
    for (let i = 0; i < 8; i++) {
      const v = dir.clone().multiplyScalar(1 + Math.random() * 2).add(new THREE.Vector3((Math.random() - 0.5) * 1.5, Math.random() * 1.2, (Math.random() - 0.5) * 1.5));
      this.dust.spawn(point, v, { life: 0.35 + Math.random() * 0.3, size: 0.06, color: [0.35, 0.02, 0.02], alpha: 0.9, grav: 9 });
    }
    this.smoke.spawn(point, dir.clone().multiplyScalar(0.5), { life: 0.5, size: 0.25, grow: 0.8, color: [0.4, 0.03, 0.03], alpha: 0.5, drag: 3 });
  }

  decal(point, normal, size, mat) {
    const d = new THREE.Mesh(this.decalGeo, mat);
    d.position.copy(point).addScaledVector(normal, 0.004);
    d.lookAt(point.clone().add(normal));
    d.rotateZ(Math.random() * 6.28);
    d.scale.setScalar(size);
    d.receiveShadow = true;
    this.scene.add(d); this.decals.push(d);
    if (this.decals.length > 160) { const o = this.decals.shift(); this.scene.remove(o); }
  }

  explosion(pos, big = 1) {
    this.bigLight.position.copy(pos).add(new THREE.Vector3(0, 1, 0)); this.bigLight.intensity = 400 * big; this._bigT = 0.35;
    for (let i = 0; i < 40 * big; i++) {
      const v = new THREE.Vector3((Math.random() - 0.5), Math.random() * 0.9 + 0.1, (Math.random() - 0.5)).normalize().multiplyScalar(2 + Math.random() * 6);
      this.add.spawn(pos.clone().add(new THREE.Vector3(0, 0.3, 0)), v, { life: 0.25 + Math.random() * 0.35, size: 1.2 + Math.random() * 1.5, grow: 3, color: [1, 0.55 + Math.random() * 0.2, 0.2], alpha: 0.9, drag: 4 });
    }
    for (let i = 0; i < 50; i++) {
      const v = new THREE.Vector3((Math.random() - 0.5), Math.random(), (Math.random() - 0.5)).normalize().multiplyScalar(8 + Math.random() * 18);
      this.add.spawn(pos.clone().add(new THREE.Vector3(0, 0.3, 0)), v, { life: 0.4 + Math.random() * 0.8, size: 0.06, color: [1, 0.7, 0.35], alpha: 1, grav: 14, drag: 0.5 });
    }
    for (let i = 0; i < 26 * big; i++) {
      const v = new THREE.Vector3((Math.random() - 0.5) * 2, Math.random() * 2.5 + 0.5, (Math.random() - 0.5) * 2).multiplyScalar(1.5);
      this.smoke.spawn(pos.clone().add(new THREE.Vector3((Math.random() - 0.5), 0.5 + Math.random(), (Math.random() - 0.5))), v, { life: 3 + Math.random() * 3, size: 1.5 + Math.random(), grow: 1.5, color: [0.18, 0.17, 0.16], alpha: 0.7, drag: 1.2, spin: 0.6, fade: 2 });
    }
    for (let i = 0; i < 30; i++) {
      const v = new THREE.Vector3((Math.random() - 0.5), Math.random(), (Math.random() - 0.5)).normalize().multiplyScalar(4 + Math.random() * 8);
      this.dust.spawn(pos.clone().add(new THREE.Vector3(0, 0.2, 0)), v, { life: 1 + Math.random(), size: 0.08 + Math.random() * 0.06, color: [0.3, 0.26, 0.22], alpha: 1, grav: 10 });
    }
    const sc = new THREE.Mesh(this.decalGeo, this.scorchMat); sc.rotation.x = -Math.PI / 2; sc.position.set(pos.x, 0.02, pos.z); sc.scale.setScalar(3.5 * big); this.scene.add(sc); this.decals.push(sc);
  }

  smokeGrenade(pos) {
    const cloud = { pos: pos.clone().add(new THREE.Vector3(0, 1.2, 0)), r: 0.5, t: 22, emit: 14 };
    this.smokeClouds.push(cloud);
  }

  ejectShell(pos, vel) {
    if (this.shells.length >= 60) this.shells.shift();
    this.shells.push({ p: pos.clone(), v: vel.clone(), r: new THREE.Euler(Math.random() * 6, Math.random() * 6, 0), w: new THREE.Vector3(Math.random() * 20, Math.random() * 20, 0), t: 4, bounced: 0 });
  }

  update(dt, cam) {
    this.add.update(dt); this.smoke.update(dt); this.dust.update(dt);
    const scale = window.innerHeight * 0.9;
    for (const s of [this.add, this.smoke, this.dust]) s.mat.uniforms.uScale.value = scale / Math.tan(THREE.MathUtils.degToRad(cam.fov / 2)) * 0.5;
    for (const l of this.lights) if (l.userData.t > 0) { l.userData.t -= dt; l.intensity = Math.max(0, l.userData.i0 * (l.userData.t / l.userData.d)); } else l.intensity = 0;
    if (this._bigT > 0) { this._bigT -= dt; this.bigLight.intensity = Math.max(0, this._bigT / 0.35) * 400; } else this.bigLight.intensity = 0;
    for (let i = this.flashes.length - 1; i >= 0; i--) { const f = this.flashes[i]; f.userData.t -= dt; if (f.userData.t <= 0) { this.scene.remove(f); this.flashes.splice(i, 1); } }
    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const t = this.tracers[i], u = t.userData; const step = u.speed * dt;
      t.position.addScaledVector(u.dir, step); u.dist += step;
      if (u.dist > u.len) { this.scene.remove(t); this.tracers.splice(i, 1); }
    }
    // shells
    let k = 0;
    for (let i = this.shells.length - 1; i >= 0; i--) {
      const s = this.shells[i]; s.t -= dt; if (s.t <= 0) { this.shells.splice(i, 1); continue; }
      s.v.y -= 9.8 * dt; s.p.addScaledVector(s.v, dt);
      if (s.p.y < 0.005) { s.p.y = 0.005; if (s.v.y < -0.5) { s.v.y *= -0.35; s.v.x *= 0.5; s.v.z *= 0.5; s.w.multiplyScalar(0.5); if (s.bounced++ < 1 && this.onShellBounce) this.onShellBounce(s.p); } else { s.v.set(0, 0, 0); s.w.set(0, 0, 0); } }
      s.r.x += s.w.x * dt; s.r.y += s.w.y * dt;
      this._q.setFromEuler(s.r); this._m.compose(s.p, this._q, new THREE.Vector3(1, 1, 1)); this.shellMesh.setMatrixAt(k++, this._m);
    }
    this.shellMesh.count = k; this.shellMesh.instanceMatrix.needsUpdate = true;
    // smoke grenades
    for (let i = this.smokeClouds.length - 1; i >= 0; i--) {
      const c = this.smokeClouds[i]; c.t -= dt; c.r = Math.min(5, c.r + dt * 1.5);
      if (c.t > 4) {
        c.acc = (c.acc || 0) + dt * c.emit;
        while (c.acc > 1) {
          c.acc--;
          const a = Math.random() * 6.28, rr = Math.random() * c.r * 0.7;
          this.smoke.spawn(new THREE.Vector3(c.pos.x + Math.cos(a) * rr, 0.4 + Math.random() * 2.5, c.pos.z + Math.sin(a) * rr), new THREE.Vector3((Math.random() - 0.5) * 0.4, 0.15, (Math.random() - 0.5) * 0.4), { life: 6 + Math.random() * 3, size: 3 + Math.random() * 1.5, grow: 0.4, color: [0.78, 0.78, 0.76], alpha: 0.55, drag: 0.5, spin: 0.2, fade: 2 });
        }
      }
      if (c.t <= 0) this.smokeClouds.splice(i, 1);
    }
  }

  // does a line pass through a smoke cloud?
  smokeBlocks(a, b) {
    for (const c of this.smokeClouds) {
      if (c.t < 2) continue;
      const ab = b.clone().sub(a), t = Math.max(0, Math.min(1, c.pos.clone().sub(a).dot(ab) / ab.lengthSq()));
      if (a.clone().addScaledVector(ab, t).distanceTo(c.pos) < c.r) return true;
    }
    return false;
  }

  clear() {
    for (const d of this.decals) this.scene.remove(d); this.decals = [];
    for (const t of this.tracers) this.scene.remove(t); this.tracers = [];
    for (const f of this.flashes) this.scene.remove(f); this.flashes = [];
    this.shells = []; this.smokeClouds = [];
    this.add.clear(); this.smoke.clear(); this.dust.clear();
  }
}

// High-detail scenery: instanced ISO shipping containers, lattice gantry cranes, quay dressing,
// chain-link fences, road paint, wet asphalt, distant cargo ship, vehicle wrecks and instanced
// foliage/rock scatter. Everything is procedural or built from CC0 Poly Haven models, and drawn
// with as few draw calls as possible so it stays fast in the browser.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { loadModel, loadTexture } from './assets.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(1, 1, 1), _p = new THREE.Vector3();

// ------------------------------------------------------------------ geometry helpers
function boxAt(w, h, d, x, y, z, rotY = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  if (rotY) g.rotateY(rotY);
  g.translate(x, y, z);
  return g;
}
// box-section member from a to b (for trusses)
function beam(a, b, w, h = w) {
  const dir = _p.subVectors(b, a); const len = dir.length();
  const g = new THREE.BoxGeometry(w, h, len);
  _q.setFromUnitVectors(V(0, 0, 1), dir.normalize());
  _m.compose(a.clone().add(b).multiplyScalar(0.5), _q, _s);
  g.applyMatrix4(_m);
  return g;
}
function cable(a, b, r = 0.035) {
  const dir = _p.subVectors(b, a); const len = dir.length();
  const g = new THREE.CylinderGeometry(r, r, len, 5, 1, true);
  _q.setFromUnitVectors(V(0, 1, 0), dir.normalize());
  _m.compose(a.clone().add(b).multiplyScalar(0.5), _q, _s);
  g.applyMatrix4(_m);
  return g;
}
function merge(list) {
  const clean = list.map(g => { const n = g.index ? g.toNonIndexed() : g; for (const k of Object.keys(n.attributes)) if (!['position', 'normal', 'uv'].includes(k)) n.deleteAttribute(k); return n; });
  return mergeGeometries(clean, false);
}

// Trapezoidal corrugated sheet in the XY plane (x: 0..len, y: 0..h), ridges pushed out along +Z.
function corrugated(len, h, depth = 0.04, period = 0.28, uvScale = 2.5) {
  const pts = [];
  const n = Math.max(1, Math.round(len / period)), p = len / n;
  for (let i = 0; i < n; i++) {
    const x = i * p;
    pts.push([x, depth], [x + p * 0.3, depth], [x + p * 0.45, 0], [x + p * 0.8, 0], [x + p * 0.95, depth]);
  }
  pts.push([len, depth]);
  const pos = [], uv = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, z0] = pts[i], [x1, z1] = pts[i + 1];
    const q = [[x0, 0, z0], [x1, 0, z1], [x1, h, z1], [x0, 0, z0], [x1, h, z1], [x0, h, z0]];
    for (const v of q) { pos.push(...v); uv.push(v[0] / uvScale, v[1] / uvScale); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.computeVertexNormals();
  return g;
}

// ------------------------------------------------------------------ shipping containers
const CL = 6.06, CW = 2.44, CH = 2.59;
let _containerGeo = null;
function containerGeometry() {
  if (_containerGeo) return _containerGeo;
  const parts = [];
  const post = 0.16, rail = 0.15;
  // corner posts + castings
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    parts.push(boxAt(post, CH, post, sx * (CL / 2 - post / 2), CH / 2, sz * (CW / 2 - post / 2)));
    for (const y of [0.09, CH - 0.09]) parts.push(boxAt(0.18, 0.18, 0.18, sx * (CL / 2 - 0.09), y, sz * (CW / 2 - 0.09)));
  }
  // side rails (bottom/top) and end rails
  for (const sz of [-1, 1]) { parts.push(boxAt(CL, rail, 0.12, 0, rail / 2, sz * (CW / 2 - 0.06))); parts.push(boxAt(CL, 0.11, 0.12, 0, CH - 0.055, sz * (CW / 2 - 0.06))); }
  for (const sx of [-1, 1]) { parts.push(boxAt(0.12, 0.2, CW, sx * (CL / 2 - 0.06), 0.1, 0)); parts.push(boxAt(0.12, 0.16, CW, sx * (CL / 2 - 0.06), CH - 0.08, 0)); }
  // corrugated long sides
  const sideLen = CL - 2 * post, sideH = CH - rail - 0.11;
  for (const sz of [-1, 1]) {
    const g = corrugated(sideLen, sideH);
    g.translate(-sideLen / 2, rail, 0);
    if (sz < 0) g.rotateY(Math.PI);
    g.translate(0, 0, sz * (CW / 2 - 0.075));
    parts.push(g);
  }
  // corrugated front end (+X)
  { const endLen = CW - 2 * post; const g = corrugated(endLen, CH - 0.36, 0.035, 0.3); g.translate(-endLen / 2, 0.2, 0); g.rotateY(Math.PI / 2); g.translate(CL / 2 - 0.07, 0, 0); parts.push(g); }
  // door end (-X): two leaves with shallow ribs, 4 locking bars + handles + hinges
  { const endLen = CW - 2 * post; const g = corrugated(endLen, CH - 0.36, 0.018, 0.4); g.translate(-endLen / 2, 0.2, 0); g.rotateY(-Math.PI / 2); g.translate(-CL / 2 + 0.06, 0, 0); parts.push(g); }
  parts.push(boxAt(0.02, CH - 0.36, 0.02, -CL / 2 + 0.04, CH / 2, 0)); // door seam
  for (const z of [-0.95, -0.42, 0.42, 0.95]) {
    const bar = new THREE.CylinderGeometry(0.019, 0.019, CH - 0.3, 8); bar.translate(-CL / 2 + 0.015, CH / 2, z); parts.push(bar);
    parts.push(boxAt(0.05, 0.05, 0.3, -CL / 2 + 0.0, 1.15, z + (z > 0 ? -0.12 : 0.12)));
    for (const y of [0.32, CH - 0.32]) parts.push(boxAt(0.06, 0.08, 0.07, -CL / 2 + 0.02, y, z));
  }
  for (const sz of [-1, 1]) for (const y of [0.55, 1.3, 2.05]) parts.push(boxAt(0.05, 0.14, 0.05, -CL / 2 + 0.02, y, sz * (CW / 2 - 0.12)));
  // roof (slightly dished)
  parts.push(boxAt(CL - 0.2, 0.03, CW - 0.2, 0, CH - 0.03, 0));
  // fork pockets
  for (const x of [-1.0, 1.0]) for (const sz of [-1, 1]) parts.push(boxAt(0.36, 0.12, 0.02, x, 0.16, sz * (CW / 2 - 0.005)));
  _containerGeo = merge(parts);
  return _containerGeo;
}

let _containerMat = null;
async function containerMaterial() {
  if (_containerMat) return _containerMat;
  const [rust, nor] = await Promise.all([loadTexture('tex/rusty_metal_02_diff.jpg', { srgb: true }), loadTexture('tex/rusty_metal_02_nor.jpg')]);
  const m = new THREE.MeshStandardMaterial({ map: rust, normalMap: nor, normalScale: new THREE.Vector2(0.6, 0.6), roughness: 0.62, metalness: 0.35 });
  m.onBeforeCompile = sh => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vCW;')
      .replace('#include <project_vertex>', `#include <project_vertex>
        { vec4 cw = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            cw = instanceMatrix * cw;
          #endif
          vCW = (modelMatrix * cw).xyz; }`);
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
      varying vec3 vCW;
      float kh(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      float kn(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(kh(i), kh(i + vec3(1,0,0)), f.x), mix(kh(i + vec3(0,1,0)), kh(i + vec3(1,1,0)), f.x), f.y),
                   mix(mix(kh(i + vec3(0,0,1)), kh(i + vec3(1,0,1)), f.x), mix(kh(i + vec3(0,1,1)), kh(i + vec3(1,1,1)), f.x), f.y), f.z); }`)
      .replace('#include <color_fragment>', `
        vec3 tex = diffuseColor.rgb;
        float rustMask = clamp((tex.r - tex.b) * 3.0, 0.0, 1.0);
        float amt = kn(vCW * 0.35) * 0.7 + kn(vCW * 1.7) * 0.3;
        float low = smoothstep(0.7, 0.0, mod(vCW.y + 0.02, 2.6));
        float streak = kn(vec3(vCW.x * 4.0, vCW.y * 0.25, vCW.z * 4.0));
        float r = smoothstep(0.55, 0.85, rustMask * (amt * 0.75 + low * 0.45 + streak * 0.3));
        #if defined( USE_INSTANCING_COLOR ) || defined( USE_COLOR )
          vec3 paint = vColor.rgb;
        #else
          vec3 paint = vec3(0.5);
        #endif
        paint *= 0.85 + 0.25 * kn(vCW * 0.8) - 0.15 * low;
        diffuseColor.rgb = mix(paint, tex * vec3(0.72, 0.5, 0.36), r);`)
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor, 0.92, r * 0.8);')
      .replace('#include <metalnessmap_fragment>', '#include <metalnessmap_fragment>\nmetalnessFactor = mix(metalnessFactor, 0.15, r);');
  };
  m.customProgramCacheKey = () => 'iso-container';
  _containerMat = m;
  return m;
}

export const CONTAINER_COLORS = [0x8c2f24, 0x2a4e7a, 0x3b6b3a, 0x9a6b23, 0x6b6e70, 0x7a3550, 0x2e6a6b, 0xb3aea4, 0x1f3550, 0xa3451d];

// Collects containers, then draws them all in one instanced draw call.
export class ContainerYard {
  constructor(G) { this.G = G; this.items = []; }
  // x,z centre; along: 'x' (length along X) or 'z'; level = stack tier
  add(x, z, along = 'x', level = 0, color = null, flip = false) {
    const y = level * CH;
    const col = color ?? CONTAINER_COLORS[(Math.abs(Math.round(x * 7.3 + z * 3.1 + level * 11)) % CONTAINER_COLORS.length)];
    this.items.push({ x, y, z, along, color: col, flip });
    const w = along === 'x' ? CL : CW, d = along === 'x' ? CW : CL;
    this.G.world.addCollider(V(x - w / 2, y, z - d / 2), V(x + w / 2, y + CH, z + d / 2), 'metal');
  }
  async finish() {
    if (!this.items.length) return null;
    const mesh = new THREE.InstancedMesh(containerGeometry(), await containerMaterial(), this.items.length);
    const c = new THREE.Color();
    this.items.forEach((it, i) => {
      const ry = (it.along === 'x' ? 0 : Math.PI / 2) + (it.flip ? Math.PI : 0);
      _q.setFromAxisAngle(V(0, 1, 0), ry);
      _m.compose(V(it.x, it.y, it.z), _q, _s);
      mesh.setMatrixAt(i, _m);
      mesh.setColorAt(i, c.set(it.color));
    });
    mesh.castShadow = mesh.receiveShadow = true;
    mesh.computeBoundingSphere();
    this.G.scene.add(mesh);
    return mesh;
  }
}

// ------------------------------------------------------------------ ship-to-shore gantry crane
let _craneMats = null;
function craneMats() {
  if (_craneMats) return _craneMats;
  const grime = m => { m.onBeforeCompile = sh => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vCP;').replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvCP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
      varying vec3 vCP; float ch(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      float cn(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(ch(i), ch(i + vec3(1,0,0)), f.x), mix(ch(i + vec3(0,1,0)), ch(i + vec3(1,1,0)), f.x), f.y),
                   mix(mix(ch(i + vec3(0,0,1)), ch(i + vec3(1,0,1)), f.x), mix(ch(i + vec3(0,1,1)), ch(i + vec3(1,1,1)), f.x), f.y), f.z); }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        float d = cn(vCP * 0.6) * 0.6 + cn(vec3(vCP.x * 3.0, vCP.y * 0.3, vCP.z * 3.0)) * 0.4;
        diffuseColor.rgb *= 0.78 + 0.32 * d;
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.16, 0.09, 0.05), smoothstep(0.72, 0.9, d) * 0.6);`);
  }; m.customProgramCacheKey = () => 'cranegrime'; return m; };
  _craneMats = {
    paint: grime(new THREE.MeshStandardMaterial({ color: 0xa47c22, roughness: 0.62, metalness: 0.25 })),
    dark: grime(new THREE.MeshStandardMaterial({ color: 0x3b3e41, roughness: 0.5, metalness: 0.6 })),
  };
  return _craneMats;
}

// Legs at (cx±6, zA) and (cx±6, zB); boom runs along Z out over the water.
export function gantryCrane(G, M, cx, zA = -51, zB = -60, { boomFrom = -18, boomTo = -95 } = {}) {
  const W = G.world, S = [], D = [], C = [];
  const legH = 24, hw = 6;
  // legs: tapered box columns with sill beams and bogies
  for (const sx of [-1, 1]) for (const z of [zA, zB]) {
    S.push(beam(V(cx + sx * hw, 1.2, z), V(cx + sx * hw * 0.92, legH, z), 1.0, 1.0));
    D.push(boxAt(1.3, 1.0, 3.2, cx + sx * hw, 0.6, z)); // wheel bogie
    for (const dz of [-1.1, 0, 1.1]) { const w = new THREE.CylinderGeometry(0.38, 0.38, 0.25, 14); w.rotateZ(Math.PI / 2); w.translate(cx + sx * hw, 0.38, z + dz); D.push(w); }
    W.addCollider(V(cx + sx * hw - 0.7, 0, z - 1.6), V(cx + sx * hw + 0.7, legH, z + 1.6), 'metal');
  }
  for (const sx of [-1, 1]) { S.push(boxAt(1.0, 1.3, Math.abs(zA - zB) + 1.2, cx + sx * hw * 0.92, legH, (zA + zB) / 2)); S.push(boxAt(0.8, 0.9, Math.abs(zA - zB), cx + sx * hw, 2.0, (zA + zB) / 2)); }
  for (const z of [zA, zB]) {
    S.push(boxAt(hw * 2 + 0.8, 1.5, 1.1, cx, legH + 0.2, z));
    S.push(boxAt(hw * 2, 0.8, 0.8, cx, 12, z));
    // K-bracing in the portal frame
    S.push(beam(V(cx - hw, 12.4, z), V(cx, legH - 0.5, z), 0.45)); S.push(beam(V(cx + hw, 12.4, z), V(cx, legH - 0.5, z), 0.45));
    S.push(beam(V(cx - hw, 12, z), V(cx - hw * 0.4, 3, z), 0.35)); S.push(beam(V(cx + hw, 12, z), V(cx + hw * 0.4, 3, z), 0.35));
  }
  // boom: two vertical trusses
  const bTop = legH + 5.5, bBot = legH + 2.2, bx = 1.7, step = 3.0;
  for (const sx of [-1, 1]) {
    const x = cx + sx * bx;
    S.push(beam(V(x, bTop, boomFrom), V(x, bTop, boomTo), 0.42));
    S.push(boxAt(0.5, 0.9, boomFrom - boomTo, x, bBot, (boomFrom + boomTo) / 2)); // I-beam rail for the trolley
    let k = 0;
    for (let z = boomFrom; z > boomTo + 0.1; z -= step, k++) {
      const z2 = Math.max(boomTo, z - step);
      S.push(beam(V(x, bBot, z), V(x, bTop, z), 0.22));
      S.push(k % 2 ? beam(V(x, bBot, z), V(x, bTop, z2), 0.18) : beam(V(x, bTop, z), V(x, bBot, z2), 0.18));
    }
    S.push(beam(V(x, bBot, boomTo), V(x, bTop, boomTo), 0.22));
  }
  for (let z = boomFrom; z >= boomTo; z -= step) { S.push(boxAt(bx * 2, 0.2, 0.2, cx, bTop, z)); S.push(boxAt(bx * 2, 0.25, 0.25, cx, bBot - 0.3, z)); }
  // A-frame apex + stays
  const apex = V(cx, legH + 17, (zA + zB) / 2 + 1);
  for (const sx of [-1, 1]) for (const z of [zA, zB]) S.push(beam(V(cx + sx * hw * 0.85, legH + 0.8, z), apex.clone().add(V(sx * 1.2, 0, 0)), 0.55));
  S.push(boxAt(3.2, 0.8, 0.8, cx, apex.y, apex.z));
  for (const sx of [-1, 1]) {
    for (const zt of [boomTo + 1, boomTo + 18, boomTo + 32]) C.push(cable(apex.clone().add(V(sx * 1.2, 0, 0)), V(cx + sx * bx, bTop, zt), 0.05));
    C.push(cable(apex.clone().add(V(sx * 1.2, 0, 0)), V(cx + sx * bx, bTop, boomFrom + 1), 0.05));
  }
  // machinery house, operator cab, trolley + spreader
  D.push(boxAt(5.2, 3.2, 7, cx, bTop + 1.8, boomFrom + 4));
  D.push(boxAt(2.4, 2.2, 2.6, cx - 0.4, bBot - 2.2, zB - 4));
  const tz = boomTo + 22;
  D.push(boxAt(3.8, 1.3, 4.2, cx, bBot - 0.9, tz));
  const sy = 14;
  D.push(boxAt(2.6, 0.35, 6.2, cx, sy, tz)); D.push(boxAt(1.4, 0.8, 2.0, cx, sy + 0.6, tz));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) C.push(cable(V(cx + sx * 0.9, bBot - 1.5, tz + sz * 1.6), V(cx + sx * 0.5, sy + 1.0, tz + sz * 0.8), 0.03));
  // walkway handrails along the boom
  for (const sx of [-1, 1]) C.push(cable(V(cx + sx * (bx + 0.6), bTop + 1.0, boomFrom), V(cx + sx * (bx + 0.6), bTop + 1.0, boomTo), 0.03));
  const yellow = craneMats().paint, dark = craneMats().dark;
  const cabGlass = new THREE.MeshStandardMaterial({ color: 0x223038, metalness: 0.9, roughness: 0.05, emissive: 0x332211, emissiveIntensity: 0.3 });
  const mk = (geo, mat) => { const me = new THREE.Mesh(geo, mat); me.castShadow = true; me.receiveShadow = true; G.scene.add(me); return me; };
  mk(merge(S), yellow); mk(merge(D), dark);
  mk(merge(C), new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.6, metalness: 0.6 })).castShadow = false;
  const glass = mk(boxAt(2.45, 1.2, 2.65, cx - 0.4, bBot - 2.0, zB - 4), cabGlass); glass.castShadow = false;
  // red aircraft warning light at the apex
  const warn = new THREE.Mesh(new THREE.SphereGeometry(0.25, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff2010 }));
  warn.position.copy(apex).add(V(0, 0.7, 0)); G.scene.add(warn);
}

// ------------------------------------------------------------------ quay dressing
export async function quaySide(G, M, { edgeZ = -56, x0 = -72, x1 = 72, skip = [[35.5, 44.5]], railZ = [-51, -60] } = {}) {
  const W = G.world;
  const free = x => !skip.some(([a, b]) => x > a && x < b);
  // concrete coping + painted safety edge
  const cop = []; const paint = [];
  for (const [a, b] of [[x0, skip[0][0]], [skip[0][1], x1]]) {
    cop.push(boxAt(b - a, 0.12, 0.7, (a + b) / 2, 0.06, edgeZ - 0.35));
    paint.push(boxAt(b - a, 0.005, 0.18, (a + b) / 2, 0.123, edgeZ - 0.12));
  }
  const coping = new THREE.Mesh(merge(cop), M.concrete); coping.receiveShadow = coping.castShadow = true; G.scene.add(coping);
  const paintM = new THREE.MeshStandardMaterial({ color: 0xd8b21c, roughness: 0.75 });
  G.scene.add(new THREE.Mesh(merge(paint), paintM));
  // mooring bollards
  const prof = [[0, 0], [0.26, 0], [0.26, 0.06], [0.19, 0.1], [0.17, 0.42], [0.27, 0.5], [0.27, 0.58], [0, 0.6]].map(([r, y]) => new THREE.Vector2(r, y));
  const bGeo = new THREE.LatheGeometry(prof, 16);
  const bMat = new THREE.MeshStandardMaterial({ color: 0x1d1e1f, roughness: 0.55, metalness: 0.6 });
  const xs = []; for (let x = x0 + 4; x < x1 - 2; x += 9) if (free(x)) xs.push(x);
  const bol = new THREE.InstancedMesh(bGeo, bMat, xs.length);
  xs.forEach((x, i) => { _m.makeTranslation(x, 0.12, edgeZ - 0.55); bol.setMatrixAt(i, _m); W.addCollider(V(x - 0.27, 0, edgeZ - 0.82), V(x + 0.27, 0.72, edgeZ - 0.28), 'metal'); });
  bol.castShadow = bol.receiveShadow = true; G.scene.add(bol);
  // rubber tyre fenders hanging on the quay wall
  const tGeo = new THREE.TorusGeometry(0.42, 0.17, 10, 20);
  const tMat = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.92 });
  const tx = []; for (let x = x0 + 6; x < x1 - 2; x += 7) if (free(x)) tx.push(x);
  const ty = new THREE.InstancedMesh(tGeo, tMat, tx.length);
  tx.forEach((x, i) => { _q.setFromEuler(new THREE.Euler(0.15, 0, 0)); _m.compose(V(x, -1.3, edgeZ - 2.18), _q, _s); ty.setMatrixAt(i, _m); });
  ty.castShadow = true; G.scene.add(ty);
  // crane rails across the apron
  const rails = [];
  for (const z of railZ) for (const dz of [-0.6, 0.6]) rails.push(boxAt(x1 - x0, 0.07, 0.09, (x0 + x1) / 2, 0.035, z + dz));
  const rm = new THREE.Mesh(merge(rails), new THREE.MeshStandardMaterial({ color: 0x6d6a66, roughness: 0.35, metalness: 0.95 })); rm.receiveShadow = true; G.scene.add(rm);
}

// ------------------------------------------------------------------ chain-link fence
let _fenceTex = null;
function fenceTexture() {
  if (_fenceTex) return _fenceTex;
  const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d');
  g.clearRect(0, 0, 128, 128); g.strokeStyle = '#c8ccd0'; g.lineWidth = 4;
  for (let i = -128; i < 256; i += 32) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i + 128, 128); g.stroke(); g.beginPath(); g.moveTo(i + 128, 0); g.lineTo(i, 128); g.stroke(); }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  _fenceTex = t; return t;
}
export function chainFence(G, segments, { h = 2.6, collide = false } = {}) {
  const mesh = [], posts = [], wire = [];
  for (const [x1, z1, x2, z2] of segments) {
    const a = V(x1, 0, z1), b = V(x2, 0, z2), len = a.distanceTo(b);
    const ang = Math.atan2(z2 - z1, x2 - x1);
    const p = new THREE.PlaneGeometry(len, h - 0.1); const uv = p.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * len / 0.6, uv.getY(i) * (h - 0.1) / 0.6);
    p.rotateY(-ang); p.translate((x1 + x2) / 2, h / 2, (z1 + z2) / 2); mesh.push(p);
    const n = Math.ceil(len / 3);
    for (let i = 0; i <= n; i++) {
      const t = i / n, x = x1 + (x2 - x1) * t, z = z1 + (z2 - z1) * t;
      const c = new THREE.CylinderGeometry(0.035, 0.035, h + 0.35, 6); c.translate(x, (h + 0.35) / 2, z); posts.push(c);
      // barbed-wire outrigger
      const arm = beam(V(x, h + 0.3, z), V(x + Math.sin(ang) * 0.35, h + 0.6, z - Math.cos(ang) * 0.35), 0.03); posts.push(arm);
    }
    posts.push(cable(V(x1, h, z1), V(x2, h, z2), 0.022));
    for (const k of [0.12, 0.24]) wire.push(cable(V(x1 + Math.sin(ang) * k * 1.4, h + 0.2 + k, z1 - Math.cos(ang) * k * 1.4), V(x2 + Math.sin(ang) * k * 1.4, h + 0.2 + k, z2 - Math.cos(ang) * k * 1.4), 0.008));
    if (collide) G.world.addCollider(V(Math.min(x1, x2) - 0.05, 0, Math.min(z1, z2) - 0.05), V(Math.max(x1, x2) + 0.05, h, Math.max(z1, z2) + 0.05), 'metal', { noRay: true });
  }
  const fm = new THREE.MeshStandardMaterial({ map: fenceTexture(), alphaTest: 0.5, side: THREE.DoubleSide, metalness: 0.8, roughness: 0.45, color: 0x9a9fa3 });
  const fence = new THREE.Mesh(merge(mesh), fm); fence.castShadow = true; G.scene.add(fence);
  // alpha-tested shadows
  fence.customDepthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: fm.map, alphaTest: 0.5 });
  const pm = new THREE.MeshStandardMaterial({ color: 0x8a8e91, metalness: 0.85, roughness: 0.4 });
  const pmesh = new THREE.Mesh(merge([...posts, ...wire]), pm); pmesh.castShadow = true; G.scene.add(pmesh);
}

// ------------------------------------------------------------------ painted road markings
let _paintTex = null;
function paintTexture() {
  if (_paintTex) return _paintTex;
  const c = document.createElement('canvas'); c.width = 64; c.height = 512; const g = c.getContext('2d');
  g.fillStyle = '#fff'; g.fillRect(0, 0, 64, 512);
  // wear: speckles and cracks knocked out of the paint
  for (let i = 0; i < 2600; i++) { g.fillStyle = `rgba(0,0,0,${Math.random() * 0.9})`; const s = Math.random() * 3 + 0.5; g.fillRect(Math.random() * 64, Math.random() * 512, s, s * (1 + Math.random() * 3)); }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; _paintTex = t; return t;
}
// lines: [x1,z1,x2,z2, width, dashed]
export function roadPaint(G, lines, color = 0xd9b21e) {
  const geos = [];
  for (const [x1, z1, x2, z2, w = 0.15, dash = false] of lines) {
    const len = Math.hypot(x2 - x1, z2 - z1), ang = Math.atan2(z2 - z1, x2 - x1);
    const segs = dash ? Math.floor(len / 6) : 1;
    for (let i = 0; i < segs; i++) {
      const sl = dash ? 3 : len, t0 = dash ? i * 6 : 0;
      const p = new THREE.PlaneGeometry(sl, w); p.rotateX(-Math.PI / 2);
      const uv = p.attributes.uv; for (let k = 0; k < uv.count; k++) uv.setXY(k, uv.getY(k) * 0.5 + i * 0.37, uv.getX(k) * sl / 8 + i * 0.21);
      p.rotateY(-ang);
      const cx = x1 + Math.cos(ang) * (t0 + sl / 2), cz = z1 + Math.sin(ang) * (t0 + sl / 2);
      p.translate(cx, 0.012, cz); geos.push(p);
    }
  }
  const m = new THREE.MeshStandardMaterial({ color, roughness: 0.7, alphaMap: paintTexture(), transparent: true, opacity: 0.85, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
  const mesh = new THREE.Mesh(merge(geos), m); mesh.receiveShadow = true; mesh.renderOrder = 1; G.scene.add(mesh);
  return mesh;
}

// ------------------------------------------------------------------ wet ground (reflective puddles)
// Adds world-space puddles to a ground material: darker albedo, mirror-smooth and flat where wet.
export function addWetness(mat, { amount = 0.5, scale = 0.07, dampness = 0.25 } = {}) {
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (sh, r) => {
    prev?.call(mat, sh, r);
    if (!sh.vertexShader.includes('vWPos')) {
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWPos;')
        .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vWPos;');
    }
    sh.uniforms.wetAmt = { value: amount };
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
      uniform float wetAmt;
      float wh2(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
      float wn2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(wh2(i), wh2(i + vec2(1, 0)), f.x), mix(wh2(i + vec2(0, 1)), wh2(i + vec2(1, 1)), f.x), f.y); }
      float wetMask(vec3 p){ vec2 q = p.xz * ${scale.toFixed(4)}; float n = wn2(q) * 0.55 + wn2(q * 2.7 + 7.1) * 0.3 + wn2(q * 7.9) * 0.15; return smoothstep(1.0 - wetAmt * 0.62, 1.0 - wetAmt * 0.62 + 0.05, n); }`)
      .replace('#include <map_fragment>', `#include <map_fragment>
        float wet = wetMask(vWPos) * step(vWPos.y, 0.2);
        float damp = max(wet, ${dampness.toFixed(3)});
        diffuseColor.rgb *= mix(1.0, 0.55, damp);`)
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor * (1.0 - ' + dampness.toFixed(3) + ' * 0.5), 0.04, wet);')
      .replace('#include <normal_fragment_maps>', '#include <normal_fragment_maps>\nnormal = normalize(mix(normal, nonPerturbedNormal, wet));');
  };
  const prevKey = mat.customProgramCacheKey?.bind(mat);
  mat.customProgramCacheKey = () => (prevKey ? prevKey() : '') + '|wet' + amount + scale;
  mat.needsUpdate = true;
}

// ------------------------------------------------------------------ distant cargo ship (backdrop)
export function cargoShip(G, x, z, rotY = 0, len = 190) {
  const g = new THREE.Group();
  const beamW = 30, hullH = 16;
  const shape = new THREE.Shape();
  shape.moveTo(-len / 2, 0); shape.lineTo(len / 2 - 22, 0); shape.quadraticCurveTo(len / 2, 0, len / 2 + 4, hullH); shape.lineTo(-len / 2 + 2, hullH); shape.lineTo(-len / 2, 4); shape.closePath();
  const hull = new THREE.ExtrudeGeometry(shape, { depth: beamW, bevelEnabled: true, bevelSize: 1.5, bevelThickness: 3, bevelSegments: 2 });
  hull.translate(0, -6, -beamW / 2);
  const hullM = new THREE.MeshStandardMaterial({ color: 0x1d2a35, roughness: 0.6, metalness: 0.4 });
  const hm = new THREE.Mesh(hull, hullM); g.add(hm);
  const boot = new THREE.Mesh(boxAt(len - 10, 3, beamW + 3.4, 0, -4.5, 0), new THREE.MeshStandardMaterial({ color: 0x6b1e17, roughness: 0.7 })); g.add(boot);
  // bridge / superstructure at the stern
  const sup = new THREE.Mesh(boxAt(16, 22, beamW - 4, -len / 2 + 14, hullH - 6 + 11, 0), new THREE.MeshStandardMaterial({ color: 0xd8d6d0, roughness: 0.6 })); g.add(sup);
  const bridge = new THREE.Mesh(boxAt(10, 3, beamW + 4, -len / 2 + 15, hullH - 6 + 23.5, 0), new THREE.MeshStandardMaterial({ color: 0xd8d6d0, roughness: 0.6 })); g.add(bridge);
  const funnel = new THREE.Mesh(boxAt(6, 9, 7, -len / 2 + 6, hullH - 6 + 26, 0), new THREE.MeshStandardMaterial({ color: 0x8c2f24, roughness: 0.6 })); g.add(funnel);
  // windows strip (emissive)
  const winM = new THREE.MeshStandardMaterial({ color: 0x111111, emissive: 0xffd9a0, emissiveIntensity: 1.6 });
  for (let k = 0; k < 6; k++) { const w = new THREE.Mesh(boxAt(0.2, 1.1, beamW - 6, -len / 2 + 22.05, hullH - 2 + k * 3.4, 0), winM); g.add(w); }
  // deck cargo: container stacks
  const n = Math.floor((len - 40) / 13) * 6 * 4;
  const cg = new THREE.BoxGeometry(12.2, 2.6, 2.44);
  const inst = new THREE.InstancedMesh(cg, new THREE.MeshStandardMaterial({ roughness: 0.7, metalness: 0.3 }), n);
  const c = new THREE.Color(); let i = 0;
  for (let bx = -len / 2 + 30; bx < len / 2 - 18 && i < n; bx += 13) for (let row = -5; row <= 5 && i < n; row += 2) {
    const tiers = 2 + ((bx * 7 + row * 13) & 3);
    for (let t = 0; t < tiers && i < n; t++) { _m.makeTranslation(bx, hullH - 6 + 1.3 + t * 2.6, row * 1.35); inst.setMatrixAt(i, _m); inst.setColorAt(i, c.set(CONTAINER_COLORS[(i * 7 + t) % CONTAINER_COLORS.length])); i++; }
  }
  inst.count = i; g.add(inst);
  // nav lights
  const red = new THREE.Mesh(new THREE.SphereGeometry(0.6, 6, 4), new THREE.MeshBasicMaterial({ color: 0xff3020 })); red.position.set(-len / 2 + 15, hullH + 21, -beamW / 2 - 2); g.add(red);
  const grn = new THREE.Mesh(new THREE.SphereGeometry(0.6, 6, 4), new THREE.MeshBasicMaterial({ color: 0x30ff60 })); grn.position.set(-len / 2 + 15, hullH + 21, beamW / 2 + 2); g.add(grn);
  g.position.set(x, -1.5, z); g.rotation.y = rotY;
  g.traverse(o => { if (o.isMesh) { o.receiveShadow = false; o.castShadow = false; } });
  G.scene.add(g);
  return g;
}

// ------------------------------------------------------------------ vehicle wrecks
function sideShape(pts) { const s = new THREE.Shape(); s.moveTo(pts[0][0], pts[0][1]); for (const p of pts.slice(1)) s.lineTo(p[0], p[1]); s.closePath(); return s; }
const CAR_BODY = [[-2.2, 0.36], [2.15, 0.36], [2.22, 0.62], [2.12, 0.86], [1.05, 0.98], [0.42, 1.42], [-0.85, 1.42], [-1.35, 1.0], [-2.12, 0.94], [-2.22, 0.7]];
const CAR_WIN = [[0.95, 1.0], [0.4, 1.36], [-0.82, 1.36], [-1.25, 1.0]];
const TRUCK_CAB = [[1.4, 0.55], [3.0, 0.55], [3.05, 1.35], [2.9, 2.45], [1.4, 2.6]];
const TRUCK_WIN = [[2.95, 1.6], [2.85, 2.35], [2.0, 2.4], [2.0, 1.6]];

// A burnt-out car or flatbed truck. Colliders are sliced along the body so rotated wrecks stay tight.
export function vehicleWreck(G, M, x, z, rotY = 0, truck = false, { burnt = true } = {}) {
  const W = G.world, g = new THREE.Group();
  const width = truck ? 2.3 : 1.78, L = truck ? 6.2 : 4.45;
  if (!M._burnt) { M._burnt = M.rust.clone(); M._burnt.color.set(0x6b5a50); M._burnt.roughness = 1; }
  const body = burnt ? M._burnt : M.darkMetal;
  const ext = (pts, w, mat) => {
    const geo = new THREE.ExtrudeGeometry(sideShape(pts), { depth: w, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.05, bevelSegments: 2 });
    geo.translate(0, 0, -w / 2);
    // world-scale UVs for the rust texture
    const uv = geo.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 0.5, uv.getY(i) * 0.5);
    const me = new THREE.Mesh(geo, mat); g.add(me); return me;
  };
  const glassM = new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.9, metalness: 0 }); // windows blown out = dark interior
  const tyreM = new THREE.MeshStandardMaterial({ color: 0x0e0e0e, roughness: 0.95 });
  const rimM = new THREE.MeshStandardMaterial({ color: 0x4a3b30, roughness: 0.6, metalness: 0.7 });
  const wheel = (wx, wz, r = 0.36) => {
    const rr = burnt ? r * 0.92 : r; // charred, deflated tyres
    const t = new THREE.Mesh(new THREE.CylinderGeometry(rr, rr, 0.26, 18), tyreM); t.rotation.x = Math.PI / 2; t.position.set(wx, rr, wz); g.add(t);
    const h = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.5, r * 0.5, 0.26, 12), rimM); h.rotation.x = Math.PI / 2; h.position.set(wx, rr, wz); g.add(h);
  };
  if (!truck) {
    ext(CAR_BODY, width, body);
    ext(CAR_WIN, width + 0.02, glassM);
    for (const [wx, s] of [[1.35, 1], [-1.35, 1], [1.35, -1], [-1.35, -1]]) wheel(wx, s * (width / 2 - 0.05), 0.34);
    // sagging, slightly tilted on flat tyres
    g.children.forEach(c => { c.position.y -= burnt ? 0.08 : 0; });
  } else {
    ext(TRUCK_CAB, width, body); ext(TRUCK_WIN, width + 0.02, glassM);
    const bed = new THREE.Mesh(boxAt(4.4, 0.2, width, -0.85, 1.05, 0), body); g.add(bed);
    const chassis = new THREE.Mesh(boxAt(6.0, 0.35, 0.9, 0.0, 0.75, 0), M.darkMetal); g.add(chassis);
    for (const s of [-1, 1]) { const rail = new THREE.Mesh(boxAt(4.4, 0.5, 0.06, -0.85, 1.4, s * (width / 2 - 0.03)), body); g.add(rail); }
    const back = new THREE.Mesh(boxAt(0.06, 0.6, width, -3.02, 1.45, 0), body); g.add(back);
    const front = new THREE.Mesh(boxAt(0.12, 0.25, width + 0.1, 3.08, 0.6, 0), M.darkMetal); g.add(front);
    for (const [wx, s] of [[2.3, 1], [2.3, -1], [-1.6, 1], [-1.6, -1], [-2.5, 1], [-2.5, -1]]) wheel(wx, s * (width / 2 - 0.1), 0.42);
  }
  g.rotation.y = rotY; g.position.set(x, 0, z);
  // body was modelled along X; game convention for these wrecks was length along Z
  g.rotation.y += Math.PI / 2;
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  G.scene.add(g); g.updateMatrixWorld(true);
  // sliced colliders along the length
  const ax = V(1, 0, 0).applyAxisAngle(V(0, 1, 0), g.rotation.y), side = V(0, 0, 1).applyAxisAngle(V(0, 1, 0), g.rotation.y);
  const xMin = truck ? -3.05 : -2.22, xMax = truck ? 3.08 : 2.22, nS = Math.ceil((xMax - xMin) / 0.9);
  for (let i = 0; i < nS; i++) {
    const a = xMin + (xMax - xMin) * i / nS, b = xMin + (xMax - xMin) * (i + 1) / nS, mid = (a + b) / 2;
    const top = truck ? (mid > 1.4 ? 2.6 : 1.9) : (mid > -1.0 && mid < 0.6 ? 1.38 : 0.95);
    const c = V(x, 0, z).addScaledVector(ax, mid);
    const hx = Math.abs(ax.x) * (b - a) / 2 + Math.abs(side.x) * width / 2, hz = Math.abs(ax.z) * (b - a) / 2 + Math.abs(side.z) * width / 2;
    W.addCollider(V(c.x - hx * 0.92, 0, c.z - hz * 0.92), V(c.x + hx * 0.92, top, c.z + hz * 0.92), 'metal');
  }
  return g;
}

// ------------------------------------------------------------------ instanced model scatter
// items: [{x, z, y?, rotY?, scale?}]. One draw call per sub-mesh of the model.
export async function scatter(G, name, items, { collide = false, colRadius = 0.4, colHeight = 1.2, cast = true, mat = 'concrete', sink = 0 } = {}) {
  if (!items.length) return;
  const gltf = await loadModel(name);
  const root = gltf.scene; root.updateMatrixWorld(true);
  const meshes = []; root.traverse(o => { if (o.isMesh) meshes.push(o); });
  const T = new THREE.Matrix4(), q = new THREE.Quaternion();
  for (const me of meshes) {
    const inst = new THREE.InstancedMesh(me.geometry, me.material, items.length);
    items.forEach((it, i) => {
      q.setFromAxisAngle(V(0, 1, 0), it.rotY || 0);
      const sc = it.scale || 1;
      T.compose(V(it.x, (it.y || 0) - sink * sc, it.z), q, V(sc, sc, sc)).multiply(me.matrixWorld);
      inst.setMatrixAt(i, T);
    });
    inst.castShadow = cast; inst.receiveShadow = true; inst.computeBoundingSphere();
    G.scene.add(inst);
  }
  if (collide) {
    const bb = new THREE.Box3().setFromObject(root), sz = bb.getSize(V());
    for (const it of items) {
      const sc = it.scale || 1, r = colRadius === 'auto' ? Math.max(sz.x, sz.z) * sc * 0.36 : colRadius * sc, h = colHeight === 'auto' ? sz.y * sc * 0.85 : colHeight * sc;
      G.world.addCollider(V(it.x - r, it.y || 0, it.z - r), V(it.x + r, (it.y || 0) + h, it.z + r), mat);
    }
  }
}

// ------------------------------------------------------------------ atmosphere: height fog + sun in-scattering
// Patches three's fog chunks once. Uniforms are shared objects (clone() returns itself) so every material
// sees the same live values without per-material bookkeeping.
class SharedVec3 extends THREE.Vector3 { clone() { return this; } }
class SharedColor extends THREE.Color { clone() { return this; } }
class SharedVec4 extends THREE.Vector4 { clone() { return this; } }
export const ATMOS = { sunDir: new SharedVec3(0, 1, 0), sunColor: new SharedColor(0, 0, 0), params: new SharedVec4(0, 0, 0, 0) };
let _atmosInstalled = false;
export function installAtmosphere() {
  if (_atmosInstalled) return; _atmosInstalled = true;
  const C = THREE.ShaderChunk;
  C.fog_pars_vertex = '#ifdef USE_FOG\n varying float vFogDepth;\n varying vec3 vFogView;\n#endif\n';
  C.fog_vertex = '#ifdef USE_FOG\n vFogDepth = - mvPosition.z;\n vFogView = mvPosition.xyz;\n#endif\n';
  C.fog_pars_fragment = `#ifdef USE_FOG
    uniform vec3 fogColor; varying float vFogDepth; varying vec3 vFogView;
    uniform vec3 fogSunDir; uniform vec3 fogSunColor; uniform vec4 fogParams;
    #ifdef FOG_EXP2
      uniform float fogDensity;
    #else
      uniform float fogNear; uniform float fogFar;
    #endif
  #endif\n`;
  C.fog_fragment = `#ifdef USE_FOG
    vec3 fogDirW = normalize((vec4(vFogView, 0.0) * viewMatrix).xyz);
    float fogDist = length(vFogView);
    #ifdef FOG_EXP2
      float fogK = max(fogParams.x, 1e-4);
      float fogH0 = max(cameraPosition.y - fogParams.z, 0.0);
      float fogDy = fogDirW.y * fogDist;
      float fogHF = abs(fogDy) > 0.05 ? (exp(-fogK * fogH0) - exp(-fogK * max(fogH0 + fogDy, 0.0))) / (fogK * fogDy) : exp(-fogK * fogH0);
      fogHF = mix(1.0, clamp(fogHF, 0.0, 1.0), step(1e-4, fogParams.x));
      float fogFactor = 1.0 - exp(- fogDensity * fogDensity * fogDist * fogDist * fogHF);
    #else
      float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
    #endif
    float fogSun = pow(max(dot(fogDirW, fogSunDir), 0.0), 6.0);
    vec3 fogCol = fogColor + fogSunColor * fogSun * fogParams.y;
    gl_FragColor.rgb = mix(gl_FragColor.rgb, fogCol, fogFactor);
  #endif\n`;
  const add = u => { if (u && u.fogColor && !u.fogSunDir) { u.fogSunDir = { value: ATMOS.sunDir }; u.fogSunColor = { value: ATMOS.sunColor }; u.fogParams = { value: ATMOS.params }; } };
  add(THREE.UniformsLib.fog);
  for (const k of Object.keys(THREE.ShaderLib)) add(THREE.ShaderLib[k].uniforms);
}
// heightFalloff: 1/m (0 = uniform fog); scatter: strength of the sun glow in the fog; baseY: fog floor height
export function setAtmosphere({ sunDir, sunColor, scatter = 0.6, heightFalloff = 0.035, baseY = 0 }) {
  ATMOS.sunDir.copy(sunDir).normalize();
  ATMOS.sunColor.set(sunColor ?? 0xffffff);
  ATMOS.params.set(heightFalloff, scatter, baseY, 0);
}

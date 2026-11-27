// Missions & level geometry
import * as THREE from 'three';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { pbr, loadTexture } from './assets.js';
import { setupEnvironment, terrain, building, wallOpen, containerMat, fbm } from './env.js';
import { audio } from './audio.js';
import { Skydive } from './skydive.js';
import { ContainerYard, CONTAINER_COLORS, gantryCrane, quaySide, chainFence, roadPaint, addWetness, cargoShip, vehicleWreck, scatter } from './scenery.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

// Deterministic level layout: every load of a mission builds exactly the same map,
// so checkpoint positions always land in the same free space.
let _seed = 1;
const rnd = () => { _seed |= 0; _seed = (_seed + 0x6D2B79F5) | 0; let t = Math.imul(_seed ^ (_seed >>> 15), 1 | _seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
export function seedLevel(id) { let h = 2166136261; for (const c of id) h = Math.imul(h ^ c.charCodeAt(0), 16777619); _seed = h >>> 0; }

async function mats() {
  const [plaster, beige, brick, concrete, patterned, floor, asphalt, rust, corr, wood, plate, rock, sandstone] = await Promise.all([
    pbr('plastered_wall_04'), pbr('beige_wall_001'), pbr('red_brick_03'), pbr('brushed_concrete'), pbr('patterned_concrete_wall'),
    pbr('concrete_floor_worn_001'), pbr('asphalt_02'), pbr('rusty_metal_02'), pbr('corrugated_iron'), pbr('brown_planks_03'), pbr('metal_plate'), pbr('rocky_terrain_02'), pbr('dry_ground_01'),
  ]);
  const sandbag = new THREE.MeshStandardMaterial({ color: 0x8f7d5c, roughness: 0.95, normalMap: plaster.normalMap, normalScale: new THREE.Vector2(1.5, 1.5) });
  const yellow = plate.clone(); yellow.color.set(0xd9a420); yellow.metalness = 0.6;
  const darkMetal = plate.clone(); darkMetal.color.set(0x3a3d40);
  return { plaster, beige, brick, concrete, patterned, floor, asphalt, rust, corr, wood, plate, rock, sandstone, sandbag, yellow, darkMetal };
}

// ---------------------------------------------------------------- shared helpers
function enemy(G, x, z, o = {}) {
  return G.enemies.spawn({ pos: V(x, o.y || 0, z), yaw: o.yaw ?? Math.PI, tint: o.tint ?? G.level.tint, zone: o.zone, state: o.state, patrol: o.patrol?.map(p => V(p[0], 0, p[1])), hold: o.hold, hp: o.hp, hostage: o.hostage });
}

// friendly squadmate: fights beside you, follows a scripted route (stopping at holdAt) or the player
function ally(G, x, z, o = {}) {
  const e = G.enemies.spawn({ pos: V(x, 0, z), yaw: o.yaw ?? Math.PI, tint: o.tint || 'woodland', friendly: true, name: o.name, route: o.route, hp: 99999 });
  Object.assign(e, { holdAt: o.holdAt, stopToFight: o.stopToFight ?? true, routeSpeed: o.speed || 3, accuracy: o.accuracy ?? 0.24, squadSlot: o.slot || 0, engageRange: o.range || 60 });
  return e;
}
function sandbagWall(W, M, x, z, len, horiz = true, h = 0.9) {
  const g = new THREE.Group();
  const rows = Math.round(h / 0.22), per = Math.ceil(len / 0.6);
  const geo = new THREE.CapsuleGeometry(0.13, 0.36, 4, 8); geo.rotateZ(Math.PI / 2); geo.scale(1, 0.75, 1.3);
  const inst = new THREE.InstancedMesh(geo, M.sandbag, rows * (per + 1));
  let k = 0; const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(1, 1, 1);
  for (let r = 0; r < rows; r++) for (let i = 0; i <= per; i++) {
    const off = (i + (r % 2) * 0.5) * 0.6 - len / 2; if (off > len / 2) continue;
    const p = horiz ? V(x + off, 0.12 + r * 0.2, z) : V(x, 0.12 + r * 0.2, z + off);
    q.setFromEuler(new THREE.Euler(0, (horiz ? 0 : Math.PI / 2) + (rnd() - 0.5) * 0.15, 0));
    m.compose(p, q, s); inst.setMatrixAt(k++, m);
  }
  inst.count = k; inst.castShadow = inst.receiveShadow = true; W.scene.add(inst);
  if (horiz) W.addCollider(V(x - len / 2, 0, z - 0.3), V(x + len / 2, h, z + 0.3), 'dirt');
  else W.addCollider(V(x - 0.3, 0, z - len / 2), V(x + 0.3, h, z + len / 2), 'dirt');
}

// burnt-out vehicle shell usable as hard cover
function wreck(G, M, x, z, rotY = 0, truck = false) {
  return vehicleWreck(G, M, x, z, rotY, truck);
}

// random scatter positions that avoid existing geometry and keep-out circles
function spots(G, n, { x0, x1, z0, z1, keep = [], clear = 1.2, scale = [1, 1] }) {
  const out = []; let guard = 0;
  while (out.length < n && guard++ < n * 40) {
    const x = x0 + rnd() * (x1 - x0), z = z0 + rnd() * (z1 - z0);
    if (keep.some(([kx, kz, r]) => (x - kx) ** 2 + (z - kz) ** 2 < r * r)) continue;
    if (G.world.overlaps(V(x, 0, z), clear, 3)) continue;
    if (out.some(o => (o.x - x) ** 2 + (o.z - z) ** 2 < clear * clear * 4)) continue;
    out.push({ x, z, rotY: rnd() * 6.283, scale: scale[0] + rnd() * (scale[1] - scale[0]) });
  }
  return out;
}

function laptop(G, x, y, z, rotY = 0) {
  const g = new THREE.Group();
  const base = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.02, 0.24), new THREE.MeshStandardMaterial({ color: 0x222326, metalness: 0.6, roughness: 0.4 }));
  const c = document.createElement('canvas'); c.width = 256; c.height = 160; const x2 = c.getContext('2d');
  x2.fillStyle = '#031'; x2.fillRect(0, 0, 256, 160); x2.fillStyle = '#3f8'; x2.font = '12px monospace';
  for (let i = 0; i < 11; i++) x2.fillText(['> ACCESS GRANTED', '> DECRYPTING...', 'NODE 7 :: ' + Math.random().toString(16).slice(2, 10), 'COORD 34.51N 69.18E', '> TRANSFER 42%', 'CACHE: SECTOR-4', '██▓▒░ ▒▓█', 'EXFIL ROUTE B', 'PAYLOAD ARMED', 'USER: vanguard', '> _'][i], 8, 16 + i * 13);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const scr = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.22, 0.012), [0, 0, 0, 0, new THREE.MeshStandardMaterial({ color: 0x111111, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 2.5, map: tex }), 0].map(m => m || base.material));
  scr.position.set(0, 0.11, -0.12); scr.rotation.x = -0.25;
  base.position.y = 0.01; g.add(base, scr); g.position.set(x, y, z); g.rotation.y = rotY;
  G.scene.add(g);
  const l = new THREE.PointLight(0x55ff99, 1.5, 3, 2); l.position.set(x, y + 0.3, z); G.scene.add(l);
  return g;
}

function table(G, M, x, z, w = 1.4, d = 0.8) {
  G.world.box(x, 0.74, z, w, 0.05, d, M.wood, { texSize: 1.5 });
  for (const [dx, dz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) G.world.box(x + dx * (w / 2 - 0.06), 0, z + dz * (d / 2 - 0.06), 0.06, 0.74, 0.06, M.wood, { collide: false });
  G.world.addCollider(V(x - w / 2, 0, z - d / 2), V(x + w / 2, 0.79, z + d / 2), 'wood');
}

// ---------------------------------------------------------------- vehicles & aircraft (procedural)
// Military vehicle facing local +Z. kind: 'apc' | 'truck' | 'technical'
function convoyVehicle(G, kind) {
  const g = new THREE.Group();
  const paint = new THREE.MeshStandardMaterial({ color: kind === 'technical' ? 0xb8ab90 : 0x4d5440, roughness: 0.75, metalness: 0.25 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x1b1c1a, roughness: 0.9 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x1a2228, roughness: 0.15, metalness: 0.6 });
  const tarp = new THREE.MeshStandardMaterial({ color: 0x5d5a44, roughness: 0.95 });
  const box = (w, h, d, x, y, z, m) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(x, y, z); g.add(b); return b; };
  const wheels = (zs, r = 0.5, half = 1.15) => { for (const z of zs) for (const x of [-half, half]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.38, 14), dark); w.rotation.z = Math.PI / 2; w.position.set(x, r, z); g.add(w); } };
  if (kind === 'apc') {
    box(2.6, 1.5, 6.4, 0, 1.45, 0, paint); box(2.4, 0.5, 2, 0, 2.45, 1.9, paint);
    const slope = box(2.6, 0.9, 1.4, 0, 1.6, 3.4, paint); slope.rotation.x = 0.6;
    box(1.2, 0.5, 1.4, 0, 2.5, -0.6, paint); const gun = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2, 8), dark); gun.rotation.x = Math.PI / 2; gun.position.set(0, 2.6, 0.9); g.add(gun);
    wheels([-2.2, -0.7, 0.8, 2.3], 0.55, 1.25);
  } else {
    box(2.3, 1.7, 2, 0, 1.75, 2.6, paint); box(2.1, 0.7, 0.06, 0, 2.15, 3.62, glass);
    box(2.4, 0.4, 5.6, 0, 0.95, -0.6, dark);
    if (kind === 'truck') { box(2.4, 0.6, 4.8, 0, 1.45, -1.0, paint); box(2.42, 1.8, 4.6, 0, 2.6, -1.0, tarp); }
    else { box(2.2, 0.5, 3.6, 0, 1.4, -1.3, paint); const mg = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.4, 8), dark); mg.rotation.x = Math.PI / 2; mg.position.set(0, 2.5, -0.4); g.add(mg); box(0.3, 0.8, 0.3, 0, 2.0, -1.0, dark); }
    wheels([2.5, -1.4, -2.7], 0.5, 1.15);
  }
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  G.scene.add(g);
  return { g, kind, speed: 6, hp: kind === 'apc' ? 3 : 2 };
}
function burnVehicle(v) {
  const burnt = new THREE.MeshStandardMaterial({ color: 0x1d1b19, roughness: 1 });
  v.g.traverse(o => { if (o.isMesh) o.material = burnt; });
  v.g.rotation.z = (Math.random() - 0.5) * 0.12;
}

// Four-engine cargo plane, nose toward local +X. Returns engine positions (local) and propellers.
function cargoPlane(G) {
  const g = new THREE.Group();
  const grey = new THREE.MeshStandardMaterial({ color: 0x6b7075, roughness: 0.55, metalness: 0.5 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x222426, roughness: 0.7, metalness: 0.4 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x0e1418, roughness: 0.1, metalness: 0.8, emissive: 0x6a8aa0, emissiveIntensity: 0.25 });
  const fus = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 26, 24), grey); fus.rotation.z = Math.PI / 2; fus.position.set(0, 3.4, 0); g.add(fus);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(2.4, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2), grey); nose.rotation.z = -Math.PI / 2; nose.scale.set(1, 1.6, 1); nose.position.set(13, 3.4, 0); g.add(nose);
  const tail = new THREE.Mesh(new THREE.ConeGeometry(2.4, 9, 24), grey); tail.rotation.z = Math.PI / 2; tail.position.set(-17.5, 4.2, 0); g.add(tail);
  const cock = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.7, 3), glass); cock.position.set(15.6, 4.7, 0); g.add(cock);
  const wing = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.35, 40), grey); wing.position.set(2, 5.7, 0); g.add(wing);
  const fin = new THREE.Mesh(new THREE.BoxGeometry(4.5, 7, 0.35), grey); fin.position.set(-19, 8.5, 0); g.add(fin);
  const stab = new THREE.Mesh(new THREE.BoxGeometry(3, 0.25, 14), grey); stab.position.set(-19.5, 5.6, 0); g.add(stab);
  const engines = [], props = [];
  for (const z of [-13, -6.5, 6.5, 13]) {
    const n = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1, 4, 16), dark); n.rotation.z = Math.PI / 2; n.position.set(3.6, 5.2, z); g.add(n);
    const pr = new THREE.Group(); pr.position.set(5.7, 5.2, z);
    for (let b = 0; b < 4; b++) { const bl = new THREE.Mesh(new THREE.BoxGeometry(0.08, 3.6, 0.3), dark); bl.rotation.x = b * Math.PI / 4; pr.add(bl); }
    g.add(pr); props.push(pr); engines.push(V(3.6, 5.2, z));
  }
  for (const [x, z] of [[9, 0], [-1, -2.6], [-1, 2.6]]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.5, 14), dark); w.rotation.x = Math.PI / 2; w.position.set(x, 0.6, z); g.add(w); const s = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.3, 0.2), dark); s.position.set(x, 1.4, z); g.add(s); }
  const ramp = new THREE.Mesh(new THREE.BoxGeometry(5, 0.2, 3.6), dark); ramp.position.set(-14, 1.0, 0); ramp.rotation.z = -0.35; g.add(ramp);
  for (const z of [-20, 20]) { const l = new THREE.Mesh(new THREE.SphereGeometry(0.2), new THREE.MeshBasicMaterial({ color: z < 0 ? 0xff2020 : 0x20ff40 })); l.position.set(2, 5.8, z); g.add(l); }
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  G.scene.add(g);
  return { g, engines, props };
}

function helicopter(G) {
  const g = new THREE.Group();
  const paint = new THREE.MeshStandardMaterial({ color: 0x2b2f2a, roughness: 0.6, metalness: 0.4 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x111a20, roughness: 0.1, metalness: 0.8 });
  const body = new THREE.Mesh(new THREE.SphereGeometry(1.4, 20, 14), paint); body.scale.set(1.9, 1, 1); body.position.set(0, 1.6, 0); g.add(body);
  const can = new THREE.Mesh(new THREE.SphereGeometry(1.2, 20, 14, 0, Math.PI * 2, 0, Math.PI / 2), glass); can.scale.set(1.2, 0.8, 0.95); can.position.set(1.6, 1.75, 0); can.rotation.z = -0.5; g.add(can);
  const boom = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.4, 5.5, 10), paint); boom.rotation.z = Math.PI / 2; boom.position.set(-4.2, 1.9, 0); g.add(boom);
  const tfin = new THREE.Mesh(new THREE.BoxGeometry(1, 1.4, 0.12), paint); tfin.position.set(-6.8, 2.5, 0); g.add(tfin);
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.6, 8), paint); mast.position.set(0, 3.1, 0); g.add(mast);
  for (let b = 0; b < 4; b++) { const bl = new THREE.Mesh(new THREE.BoxGeometry(11, 0.05, 0.35), paint); bl.position.set(0, 3.4, 0); bl.rotation.y = b * Math.PI / 4 + 0.3; g.add(bl); }
  for (const z of [-1, 1]) { const sk = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 4, 8), paint); sk.rotation.z = Math.PI / 2; sk.position.set(0.2, 0.1, z); g.add(sk); }
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  G.scene.add(g);
  return g;
}

function greenSmoke(G, pos, color = [0.35, 0.95, 0.4]) {
  return dt => {
    G._gs = (G._gs || 0) + dt * 10;
    while (G._gs > 1) { G._gs--; G.effects.smoke.spawn(pos.clone().add(V((Math.random() - 0.5) * 0.4, 0.2, (Math.random() - 0.5) * 0.4)), V(0.6 + Math.random() * 0.5, 1.2 + Math.random(), (Math.random() - 0.5) * 0.4), { life: 5 + Math.random() * 2, size: 0.8, grow: 1.6, color, alpha: 0.5, drag: 0.4, spin: 0.4, fade: 2 }); }
  };
}

function popTarget(G, M, x, z, yaw = 0, opts = {}) {
  const g = new THREE.Group(); g.position.set(x, opts.y || 0, z); g.rotation.y = yaw;
  const steel = new THREE.MeshStandardMaterial({ color: opts.color ?? 0x7d8274, metalness: 0.7, roughness: 0.55, normalMap: M.plate.normalMap });
  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.75, 0.025), steel); torso.position.y = 1.0;
  const head = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.025, 20), steel); head.rotation.x = Math.PI / 2; head.position.y = 1.52;
  const post = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.65, 0.06), M.darkMetal); post.position.y = 0.32;
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.015, 6, 20), new THREE.MeshBasicMaterial({ color: 0xff3020 })); ring.position.set(0, 1.0, 0.02);
  g.add(torso, head, post, ring);
  g.traverse(o => { if (o.isMesh) o.castShadow = true; });
  G.scene.add(g);
  const pivot = new THREE.Group(); // fall around base: torso etc already relative to base
  const c = G.world.addCollider(V(x - 0.3, (opts.y || 0) + 0.6, z - 0.3), V(x + 0.3, (opts.y || 0) + 1.68, z + 0.3), 'metal', { mesh: g, target: true, lane: opts.lane });
  // base stand
  G.world.box(x, opts.y || 0, z, 0.6, 0.08, 0.4, M.darkMetal, { collide: false });
  return c;
}

// ---------------------------------------------------------------- DESERT VILLAGE (shared by Dust Devil + Last Stand)
async function desertVillage(G, M) {
  const W = G.world;
  W.bounds = { minX: -68, maxX: 68, minZ: -84, maxZ: 68 };
  await terrain(G, { tex: 'dry_ground_01', texSize: 5, flat: 85, hills: 32, mat: 'sand', seed: 3 });
  // perimeter berm / rocks outside bounds
  for (let i = 0; i < 26; i++) {
    const a = i / 26 * Math.PI * 2; const r = 95 + rnd() * 15;
    await W.prop('boulder_01', Math.cos(a) * r * 0.75, Math.sin(a) * r * 0.85, { rotY: rnd() * 6, scale: 3 + rnd() * 4, collide: false });
  }
  // village outer wall (z=30) with gate & breaches
  const wm = M.plaster;
  wallOpen(W, -42, 30, 42, 30, 2.8, 0.5, wm, [{ at: 0.5, w: 4, y0: 0, y1: 9 }, { at: 0.2, w: 2.2, y0: 0, y1: 9 }, { at: 0.8, w: 2.2, y0: 0, y1: 9 }], { texSize: 3 });
  W.wall(-42, 30, -42, -20, 2.8, 0.5, wm, { texSize: 3 }); W.wall(42, 30, 42, -20, 2.8, 0.5, wm, { texSize: 3 });
  // buildings
  const B = (x, z, w, d, h, o) => building(W, x, z, w, d, h, o.mat || M.plaster, { roofMat: M.concrete, floorMat: M.floor, ...o });
  B(-25, 16, 10, 8, 3.4, { doors: { s: [0.3] }, windows: { e: [0.5], w: [0.5], n: [0.7] } });
  B(-8, 12, 8, 8, 3.2, { doors: { s: [0.5], e: [0.5] }, windows: { n: [0.5] }, mat: M.beige });
  B(12, 16, 12, 8, 3.6, { doors: { s: [0.25] }, windows: { n: [0.3, 0.7], w: [0.5], s: [0.75] } });
  B(29, 9, 8, 10, 3.2, { doors: { w: [0.5] }, windows: { s: [0.5], n: [0.5] }, mat: M.beige });
  B(-28, -8, 10, 10, 3.4, { doors: { e: [0.5] }, windows: { n: [0.5], s: [0.5] } });
  B(25, -12, 10, 8, 3.4, { doors: { w: [0.5], s: [0.6] }, windows: { e: [0.5] }, mat: M.beige });
  B(-10, -14, 7, 7, 3.0, { doors: { s: [0.5], e: [0.4] }, windows: { w: [0.5] } });
  // HVT compound
  wallOpen(W, -16, -24, 16, -24, 3, 0.5, M.patterned, [{ at: 0.5, w: 3.5, y0: 0, y1: 9 }], { texSize: 3 });
  W.wall(-16, -24, -16, -52, 3, 0.5, M.patterned, { texSize: 3 }); W.wall(16, -24, 16, -52, 3, 0.5, M.patterned, { texSize: 3 });
  wallOpen(W, -16, -52, 16, -52, 3, 0.5, M.patterned, [{ at: 0.75, w: 3, y0: 0, y1: 9 }], { texSize: 3 });
  B(0, -40, 16, 12, 4, { doors: { s: [0.5], n: [0.2] }, windows: { s: [0.15, 0.85], e: [0.5], w: [0.3] }, mat: M.beige });
  // interior divider in HVT house
  wallOpen(W, -8, -40, 8, -40, 4, 0.25, M.beige, [{ at: 0.65, w: 1.3, y0: 0, y1: 2.3 }]);
  // market stalls in courtyard
  for (const [x, z] of [[-6, 0], [4, 2], [10, -4]]) {
    W.box(x, 0, z, 3, 0.9, 1.4, M.wood, { mat: 'wood', texSize: 1.5 });
    for (const [dx, dz] of [[-1.4, -0.7], [1.4, -0.7], [-1.4, 0.7], [1.4, 0.7]]) W.box(x + dx, 0.9, z + dz, 0.08, 1.6, 0.08, M.wood, { collide: false });
    W.box(x, 2.5, z, 3.4, 0.05, 1.8, M.corr, { collide: false, texSize: 2 });
  }
  // props
  const P = (n, x, z, o = {}) => W.prop(n, x, z, o);
  await Promise.all([
    P('wooden_crate_01', -3, 6, { rotY: 0.3, mat: 'wood' }), P('wooden_crate_01', -3, 6.8, { rotY: 0.1, mat: 'wood', y: 0 }),
    P('old_military_crate', 6, 8, { rotY: 1.2, mat: 'wood' }), P('Barrel_01', 7.5, 7, { mat: 'metal' }), P('barrel_03', 8.2, 7.6, { mat: 'metal' }),
    P('metal_jerrycan_green', 2, -6, { explosive: true }), P('propane_tank', 15, -2, { explosive: true }), P('propane_tank', -16, 4, { explosive: true }),
    P('covered_car', -16, 38, { rotY: 0.4 }), P('covered_car', 20, 24, { rotY: -1.2 }),
    P('concrete_road_barrier', -4, 44, { rotY: 0.1 }), P('concrete_road_barrier', 3, 46, { rotY: -0.2 }), P('concrete_road_barrier', 0, -20, { rotY: 0 }),
    P('old_tyre', -12, 25, { rotY: 1, y: 0.3 }), P('cardboard_box_01', -22, 4), P('cardboard_box_01', -21.5, 4.5, { rotY: 0.7 }),
    P('wooden_crate_01', 18, 3, { rotY: 0.8, mat: 'wood' }), P('Barrel_01', -30, 2), P('Barrel_01', -30.7, 2.6), P('barrel_03', 31, -2),
    P('utility_box_01', 34, 18, { rotY: Math.PI / 2 }), P('portable_generator', -6, -28, { rotY: 0.5 }), P('old_military_crate', 8, -30, { mat: 'wood' }),
    P('ammo_box', 8, -30.3, { y: 0.3 }), P('medical_box', -5, -45),
  ]);
  for (let i = 0; i < 8; i++) {
    const x = (rnd() - 0.5) * 110, z = 40 + rnd() * 25;
    if (Math.abs(x) < 30) continue;
    await P('boulder_01', x, z, { rotY: rnd() * 6, scale: 0.8 + rnd() * 0.9, mat: 'concrete' });
  }
  for (let i = 0; i < 40; i++) await P('rock_07', (rnd() - 0.5) * 120, (rnd() - 0.5) * 150, { rotY: rnd() * 6, scale: 1 + rnd() * 2, collide: false, cast: false });
  sandbagWall(W, M, -3, 36, 4); sandbagWall(W, M, 4, 36, 3);
  // approach cover (spawn is at z=62): leapfrog positions all the way to the wall
  wreck(G, M, -5, 55, 0.35, true); wreck(G, M, 9, 49, -0.5); wreck(G, M, -14, 43, 1.2); wreck(G, M, 17, 40, 0.2, true);
  sandbagWall(W, M, 3, 58, 3.5); sandbagWall(W, M, -10, 50, 3.5); sandbagWall(W, M, 0, 46, 3); sandbagWall(W, M, 22, 50, 3.5, false); sandbagWall(W, M, -22, 52, 3.5, false);
  await Promise.all([[-18, 58], [13, 60], [-28, 46], [27, 44], [6, 40]].map(([x, z], i) => W.prop('boulder_01', x, z, { rotY: i * 1.7, scale: 1.6, mat: 'concrete' })));
  sandbagWall(W, M, -6, -20, 3); sandbagWall(W, M, 6, -20, 3);
  sandbagWall(W, M, 0, -60, 6);
  // natural desert dressing: CC0 Namaqualand boulders, quiver trees, rooibos scrub and dead branches (instanced)
  const keep = [[0, 62, 7], [0, 26, 6], [0, -74, 9], [3, -44.5, 4], [-6, 33.5, 3], [-31, 0, 3], [20, -26, 3]];
  const out = { keep, clear: 2.2 };
  await scatter(G, 'namaqualand_boulder_04', [
    ...spots(G, 6, { ...out, x0: -60, x1: 60, z0: 36, z1: 66, scale: [0.45, 0.8] }),
    ...spots(G, 10, { ...out, x0: -66, x1: -46, z0: -80, z1: 64, scale: [0.6, 1.3] }), ...spots(G, 10, { ...out, x0: 46, x1: 66, z0: -80, z1: 64, scale: [0.6, 1.3] }),
    ...spots(G, 6, { ...out, x0: -40, x1: 40, z0: -82, z1: -58, scale: [0.5, 1.1] })], { collide: true, colRadius: 'auto', colHeight: 'auto', sink: 0.12 });
  await scatter(G, 'namaqualand_boulder_02', [
    ...spots(G, 8, { ...out, x0: -60, x1: 60, z0: 34, z1: 64, scale: [0.9, 1.3] }), ...spots(G, 8, { ...out, x0: -66, x1: 66, z0: -82, z1: -22, scale: [0.9, 1.4] })],
    { collide: true, colRadius: 'auto', colHeight: 'auto', sink: 0.05 });
  await scatter(G, 'quiver_tree_02', [...spots(G, 5, { ...out, x0: -66, x1: -44, z0: -70, z1: 60, scale: [2.2, 3.4] }), ...spots(G, 5, { ...out, x0: 44, x1: 66, z0: -70, z1: 60, scale: [2.2, 3.4] }), ...spots(G, 3, { ...out, x0: -40, x1: 40, z0: 40, z1: 66, scale: [2.4, 3.0] })],
    { collide: true, colRadius: 0.1, colHeight: 1.4 });
  await scatter(G, 'wild_rooibos_bush', spots(G, 34, { keep, clear: 1.0, x0: -66, x1: 66, z0: -82, z1: 66, scale: [0.7, 1.4] }), { cast: true });
  await scatter(G, 'dry_branches_medium_01', spots(G, 22, { keep, clear: 0.8, x0: -66, x1: 66, z0: -82, z1: 66, scale: [0.8, 1.5] }), { cast: false });
  G._supplies = [V(-6, 0, 33.5), V(-31, 0, 0), V(20, 0, -26)];
  table(G, M, 3, -44.5, 1.6, 0.8);
  laptop(G, 3, 0.79, -44.5, 0.2);
  // interior lights
  for (const [x, z] of [[0, -44], [0, -36], [12, 16], [-28, -8]]) { const l = new THREE.PointLight(0xffd9a0, 4, 9, 2); l.position.set(x, 2.8, z); G.scene.add(l); }
}

// ---------------------------------------------------------------- LEVELS
// Old Town (Zagoria): two rows of brick blocks on a long street with the safehouse at the north end
async function oldTown(G, M, prog = () => {}) {
  const W = G.world;
  // sidewalks
  W.box(-9, 0, -22, 6, 0.15, 124, M.floor, { texSize: 2, cast: false }); W.box(9, 0, -22, 6, 0.15, 124, M.floor, { texSize: 2, cast: false });
  // row buildings left (x<-12) and right (x>12)
  const blocks = [[-50, -32, 12], [-26, -12, 10], [-10, 8, 12], [12, 32, 10]];
  let bi = 0;
  for (const side of [-1, 1]) {
    for (const [z0, z1] of [[-80, -58], [-56, -36], [-24, -6], [-2, 18], [22, 38]]) {
      const cx = side * 22, cz = (z0 + z1) / 2, d = z1 - z0, h = 6.5 + ((bi++ * 37) % 3);
      const mat = bi % 3 === 0 ? M.plaster : M.brick;
      building(W, cx, cz, 18, d, h, mat, { roofMat: M.concrete, floorMat: M.floor, doors: { [side < 0 ? 'e' : 'w']: [0.5] }, windows: { [side < 0 ? 'e' : 'w']: [0.2, 0.8] }, parapet: 0.8 });
      // upper floor windows (decorative glow)
      for (let k = 0; k < 3; k++) {
        const wz = z0 + d * (0.2 + k * 0.3), lit = rnd() < 0.35;
        const win = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.3), new THREE.MeshStandardMaterial({ color: 0x111111, emissive: lit ? 0xffb066 : 0x0a0d12, emissiveIntensity: lit ? 2.2 : 1, roughness: 0.2, metalness: 0.5 }));
        win.position.set(cx - side * 9.02 * 1, 4.5, wz); win.rotation.y = side < 0 ? Math.PI / 2 : -Math.PI / 2; G.scene.add(win);
      }
    }
  }
  // cross street at z=-46/-30 handled by gaps; end wall north & south
  W.wall(-40, -84, 40, -84, 4, 0.5, M.brick); W.wall(-40, 40, 40, 40, 4, 0.5, M.brick);
  // safehouse (north end, across the street)
  prog(0.55, 'Fortifying the safehouse');
  building(W, 0, -72, 16, 12, 4, M.plaster, { roofMat: M.concrete, floorMat: M.wood, doors: { s: [0.5] }, windows: { s: [0.15, 0.85], e: [0.5], w: [0.5] } });
  wallOpen(W, -8, -72, 8, -72, 4, 0.25, M.plaster, [{ at: 0.25, w: 1.3, y0: 0, y1: 2.3 }, { at: 0.75, w: 1.3, y0: 0, y1: 2.3 }]);
  wallOpen(W, 0, -78, 0, -72, 4, 0.25, M.plaster, []);
  // cars & props on street
  await Promise.all([
    W.prop('covered_car', -4, 20, { rotY: 0.05 }), W.prop('covered_car', 4.5, -12, { rotY: Math.PI + 0.1 }), W.prop('covered_car', -4.2, -40, { rotY: -0.1 }), W.prop('covered_car', 4, -55, { rotY: 3.0 }),
    W.prop('concrete_road_barrier', -2, -60, { rotY: 0.2 }), W.prop('concrete_road_barrier', 2.5, -61, { rotY: -0.3 }), W.prop('metal_jerrycan_green', 3, -58, { explosive: true }), W.prop('propane_tank', -7, -28, { explosive: true }),
    W.prop('Barrel_01', 8, 4), W.prop('barrel_03', -8, -18), W.prop('cardboard_box_01', 7, -32), W.prop('wooden_crate_01', -7.5, -50), W.prop('utility_box_01', 7.5, 10),
    W.prop('old_tyre', -6, 2, { y: 0.3, rotY: 1.2 }), W.prop('medical_box', 3, -75), W.prop('old_military_crate', -4, -76, { mat: 'wood' }),
  ]);
  // burnt-out car shells
  for (const [x, z, r] of [[3.5, 8, 0.2], [-3.8, -26, 2.9]]) vehicleWreck(G, M, x, z, r);
  // street dressing on the facades and sidewalks (CC0 Poly Haven)
  const street = [];
  for (const side of [-1, 1]) for (const [z0, z1] of [[-80, -58], [-56, -36], [-24, -6], [-2, 18], [22, 38]]) {
    const fx = side * 12.84, ry = side < 0 ? Math.PI / 2 : -Math.PI / 2, d = z1 - z0;
    street.push(W.prop('rollershutter_door', fx, z0 + d * 0.33, { rotY: ry, y: 0.15, collide: false }));
    street.push(W.prop('exterior_aircon_unit', fx, z0 + d * 0.66, { rotY: ry, y: 3.3, collide: false }));
    street.push(W.prop('security_light', fx - side * 0.1, (z0 + z1) / 2, { rotY: ry, y: 2.75, collide: false }));
    if ((z0 + 80) % 3 === 0) street.push(W.prop('metal_trash_can', side * 11.4, z0 + d * 0.15, { rotY: ry, y: 0.15 }));
    street.push(W.prop('fire_hydrant', side * 6.6, z0 + d * 0.8, { y: 0.15, rotY: ry, collide: false }));
  }
  street.push(W.prop('utility_box_02', 12.2, -44, { rotY: -Math.PI / 2, y: 0.15 }), W.prop('utility_box_02', -12.2, 20, { rotY: Math.PI / 2, y: 0.15 }),
    W.prop('water_manhole_cover', 1.5, 0, { collide: false, cast: false }), W.prop('water_manhole_cover', -1.2, -48, { collide: false, cast: false }),
    W.prop('concrete_road_barrier_02', -1, -66, { rotY: 0.1 }), W.prop('plastic_crate_03', 8.5, -20, { y: 0.15 }), W.prop('plastic_crate_03', 8.6, -20, { y: 0.42, rotY: 0.4 }));
  await Promise.all(street);
  roadPaint(G, [[0, 38, 0, -80, 0.12, true]], 0xd8d8d0);
  // spawn-side cover (spawn at 0,32)
  await Promise.all([W.prop('concrete_road_barrier', -2.5, 26, { rotY: 0.15 }), W.prop('concrete_road_barrier', 3, 22, { rotY: -0.2 }), W.prop('concrete_road_barrier', -3, 4, { rotY: 0.3 }), W.prop('concrete_road_barrier', 2.5, -22, { rotY: -0.1 }), W.prop('wooden_crate_01', 4, 27, { mat: 'wood' })]);
  sandbagWall(W, M, 0, -3, 3); sandbagWall(W, M, -1, -44, 3.5);
  wreck(G, M, -3.5, 14, 0.1);
  G._supplies = [V(7.5, 0, 28), V(-7.5, 0, -34), V(7.5, 0, -62)];
  // street lamps
  for (const [x, z] of [[-6.5, 30], [6.5, 10], [-6.5, -10], [6.5, -34], [-6.5, -54]]) {
    await W.prop('street_lamp_01', x, z, { rotY: x < 0 ? -Math.PI / 2 : Math.PI / 2 });
    const l = new THREE.PointLight(0xffb36b, 30, 20, 2); l.position.set(x + (x < 0 ? 1.3 : -1.3), 3.7, z); G.scene.add(l);
  }
  // safehouse interior light + fire barrel
  { const l = new THREE.PointLight(0xff9d5c, 6, 10, 2); l.position.set(0, 3, -75); G.scene.add(l); }
  const fireP = V(-5.5, 0, -64); await W.prop('barrel_03', fireP.x, fireP.z);
  const fireL = new THREE.PointLight(0xff7a2a, 12, 12, 2); fireL.position.set(fireP.x, 1.6, fireP.z); G.scene.add(fireL);
  return { fireP, fireL };
}

export const LEVELS = [
  {
    id: 'bootcamp', name: 'BOOT CAMP', location: 'Camp Hornet, Nevada', time: '09:20 Local', reverb: 'outdoor',
    briefing: 'Sgt. Reyes, welcome back to the 1st Vanguard Battalion. Colonel Kessler wants every operator requalified before the Al-Qadir deployment: hip-fire, long-range marksmanship, grenades and close-quarters clearing. Sgt. Okafor is running the course. Somewhere out there a man called The Jackal is buying weapons with money that isn\'t his. You leave tomorrow.',
    dogtag: V(10.6, 0, -53.6),
    radio: [
      { at: 0, who: 'OKAFOR', text: 'Morning, Ghost. Kessler wants you requalified before wheels-up. Let\'s make it quick.', delay: 2.5 },
      { at: 1, who: 'OKAFOR', text: 'Lane one. Don\'t overthink it, just put rounds on steel.' },
      { at: 3, who: 'VOSS', text: 'Long targets are mine to grade. Breathe out, then squeeze.' },
      { at: 5, who: 'OKAFOR', text: 'Grenade in the pit. Cook it, throw it, get down.' },
      { at: 7, who: 'OKAFOR', text: 'Shoot house. Check your corners and use the knife if they get close.' },
      { at: 8, who: 'KESSLER', text: 'Good work, Sergeant. You ship out at dawn. Al-Qadir Province.' },
    ],
    objectivesPreview: ['Hip-fire qualification', 'Long-range marksmanship', 'Grenade handling', 'Clear the shoot house', 'Sprint to the finish'],
    intro: ['ACT I — BOOT CAMP', 'Camp Hornet, Nevada', 'Sgt. "Ghost" Reyes — 1st Vanguard Battalion', 'Day 1, 09:20'],
    hint: 'Move: <b>WASD</b> &nbsp; Look: <b>Mouse/Arrows</b> &nbsp; Fire: <b>Click or Enter</b> &nbsp; Aim: <b>RMB or Z</b> &nbsp; Sprint: <b>Shift</b> &nbsp; Reload: <b>R</b>',
    ambience: [['wind', 0.25]],
    async build(G, prog) {
      setupEnvironment(G, { hdri: 'kloofendal_48d_partly_cloudy_puresky', sunDir: V(-0.5, 0.9, 0.35), sunIntensity: 3.2, sunColor: 0xfff0dc, envIntensity: 0.9, fogColor: 0xbcd0e6, fogDensity: 0.0032, exposure: 1.0, skyTop: 0x2a5aa0, skyHorizon: 0xbfd2e4, clouds: 0.5, hemi: 0.2, groundColor: 0x5a6a40, grade: { saturation: 1.05 } });
      G.envExposure = 1.0;
      const M = await mats(); const W = G.world; G.level.tint = 'woodland';
      W.bounds = { minX: -46, maxX: 46, minZ: -70, maxZ: 46 };
      await terrain(G, { tex: 'sparse_grass', texSize: 4, flat: 80, hills: 30, mat: 'grass', seed: 7 });
      prog(0.45, 'Building range');
      // perimeter wall
      for (const [a, b, c, d] of [[-46, -70, 46, -70], [-46, 46, 46, 46], [-46, -70, -46, 46], [46, -70, 46, 46]]) W.wall(a, b, c, d, 2.6, 0.4, M.patterned, { texSize: 3 });
      // start area: weapons tables + tent
      table(G, M, -3, 38, 2, 0.9); table(G, M, 3, 38, 2, 0.9);
      await Promise.all([W.prop('ammo_box', -3.4, 38, { y: 0.79 }), W.prop('ammo_box', -2.6, 38.1, { y: 0.79, rotY: 0.4 }), W.prop('medical_box', 3, 38, { y: 0.79 }), W.prop('old_military_crate', 8, 40, { mat: 'wood' }), W.prop('wooden_crate_01', 9, 37, { mat: 'wood' }), W.prop('portable_generator', -9, 40)]);
      // Lane 1 (hip fire, close)
      sandbagWall(W, M, -12, 16, 10);
      for (let i = 0; i < 4; i++) popTarget(G, M, -16 + i * 2.7, 2 - (i % 2) * 3, 0, { lane: 1 });
      W.box(-12, 0, 20, 0.3, 0.02, 0.3, M.concrete, { collide: false });
      // Lane 2 (long range)
      sandbagWall(W, M, 12, 16, 10);
      for (let i = 0; i < 3; i++) popTarget(G, M, 8 + i * 4, -26 - i * 6, 0, { lane: 2 });
      for (const z of [0, -10, -20, -30]) { W.box(5, 0, z, 0.15, 1.2, 0.15, M.wood, { collide: false }); W.box(19, 0, z, 0.15, 1.2, 0.15, M.wood, { collide: false }); }
      // grenade pit
      const pit = V(-28, 0, -6);
      for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2; sandbagWall(W, M, pit.x + Math.cos(a) * 3.2, pit.z + Math.sin(a) * 3.2, 4.5, i % 2 === 1, 0.6); }
      sandbagWall(W, M, -28, 8, 5);
      // shoot house
      prog(0.6, 'Building shoot house');
      const sh = { x: 0, z: -45 };
      building(W, sh.x, sh.z, 18, 14, 3.2, M.concrete, { roof: false, floorMat: M.floor, doors: { s: [0.5], n: [0.8] }, windows: { e: [0.3], w: [0.6] } });
      wallOpen(W, -9, -45, 3, -45, 3.2, 0.25, M.concrete, [{ at: 0.35, w: 1.3, y0: 0, y1: 2.3 }]);
      wallOpen(W, 3, -52, 3, -38, 3.2, 0.25, M.concrete, [{ at: 0.25, w: 1.3, y0: 0, y1: 2.3 }, { at: 0.75, w: 1.3, y0: 0, y1: 2.3 }]);
      for (const [x, z, y] of [[-6, -41, 0], [-2, -40, 0], [6, -41, 0], [7, -49, 0], [-5, -50, 0], [-1, -49.5, 0]]) popTarget(G, M, x, z, Math.PI * (rnd() < 0.5 ? 0 : 0), { lane: 3, color: 0x8c5a4a });
      await Promise.all([W.prop('wooden_crate_01', -7, -48, { mat: 'wood' }), W.prop('Barrel_01', 5, -43), W.prop('cardboard_box_01', 1, -50)]);
      // finish line
      const finish = V(0, 0, -63);
      W.box(-4, 0, -63, 0.3, 3, 0.3, M.yellow, { collide: false }); W.box(4, 0, -63, 0.3, 3, 0.3, M.yellow, { collide: false }); W.box(0, 2.9, -63, 8.3, 0.3, 0.3, M.yellow, { collide: false });
      // watch towers
      for (const [x, z] of [[-40, 40], [40, 40], [-40, -64], [40, -64]]) {
        for (const [dx, dz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) W.box(x + dx, 0, z + dz, 0.2, 5, 0.2, M.wood, { mat: 'wood' });
        W.box(x, 5, z, 2.6, 0.15, 2.6, M.wood); W.box(x, 5.15, z, 2.6, 1, 0.1, M.wood, { collide: false }); W.box(x, 6.4, z, 3, 0.1, 3, M.corr, { collide: false });
      }
      G._supplies = [V(6, 0, 36)];
      const lanes = { 1: 0, 2: 0, 3: 0 };
      G.onTargetHit = c => { lanes[c.lane] = (lanes[c.lane] || 0) + 1; };
      let pitDone = false;
      const L = {
        spawn: V(0, 0, 40), spawnYaw: 0, exposure: 1.0,
        onExplosion: (p, t) => { if (t === 'frag' && Math.hypot(p.x - pit.x, p.z - pit.z) < 4.5) pitDone = true; },
        objectives: [
          { type: 'reach', text: 'Move to the firing line at Lane 1', pos: V(-12, 0, 18), radius: 3 },
          { type: 'custom', text: 'Hip-fire: knock down the 4 targets in Lane 1', waypointPos: V(-12, 1, 0), check: (G, dt, o) => { G.hud.setObjectiveCount(`${lanes[1]}/4`); return lanes[1] >= 4; }, onStart: G => G.hud.showHint('Hip-fire is fastest up close. Aim with <b>RMB</b> for precision.', 6) },
          { type: 'reach', text: 'Move to the firing line at Lane 2', pos: V(12, 0, 18), radius: 3 },
          { type: 'custom', text: 'Aim down sights (RMB) and drop the 3 long-range targets', waypointPos: V(12, 1, -32), check: () => { G.hud.setObjectiveCount(`${lanes[2]}/3`); return lanes[2] >= 3; }, onStart: G => G.hud.showHint('Hold <b>RMB</b> to aim. Crouch (<b>C</b>) to steady your shots.', 6) },
          { type: 'reach', text: 'Proceed to the grenade range', pos: V(-28, 0, 10), radius: 3 },
          { type: 'custom', text: 'Throw a grenade (G) into the sandbagged pit', waypointPos: V(-28, 0.5, -6), check: G => { if (G.player.grenades.lethal === 0 && !pitDone && !G.grenades.length) G.player.grenades.lethal = 1; return pitDone; }, onStart: G => G.hud.showHint('Press <b>G</b> to throw a frag grenade. Aim high to lob it further.', 6) },
          { type: 'reach', text: 'Enter the shoot house', pos: V(0, 0, -38), radius: 2.5, onStart: G => { G.player.grenades.lethal = 2; G.player.grenades.tactical = 2; } },
          { type: 'custom', text: 'Clear the shoot house: drop all 6 targets', check: () => { G.hud.setObjectiveCount(`${lanes[3]}/6`); return lanes[3] >= 6; }, onStart: G => G.hud.showHint('Check your corners. Switch weapons with <b>1</b>/<b>2</b>. Get close and press <b>F</b> to use your knife.', 6) },
          { type: 'reach', text: 'Sprint (Shift) through the finish gate', pos: finish, radius: 3 },
        ],
      };
      return L;
    },
  },
  {
    id: 'dustdevil', enemyWeapon: 'ak47', name: 'OPERATION DUST DEVIL', location: 'Al-Qadir Province', time: '13:05 Local', reverb: 'outdoor',
    briefing: 'The insurgent commander known as The Jackal is running attacks out of a walled village in Al-Qadir Province. His fighters carry brand-new rifles nobody in this region can afford. Infiltrate from the south, clear the village, and pull the intelligence off the laptop in his compound. Somebody is paying for this war, and we want to know who. Exfil by helicopter at the northern LZ.',
    dogtag: V(-31, 0, -11.5),
    radio: [
      { at: 0, who: 'KESSLER', text: 'Ghost, Kessler. Drone has eyes on the village. Use the wrecks for cover on your approach.', delay: 3 },
      { at: 1, who: 'OKAFOR', text: 'You\'re inside the wall. Clear it house by house. Jackal\'s men will fight hard.' },
      { at: 2, who: 'VOSS', text: 'Village is quiet. The laptop should be in the big compound to the north.' },
      { at: 3, who: 'HAYES', text: 'Ghost, Hayes in intelligence. Those files... payments to a private military company. Black Tide.', delay: 1 },
      { at: 3, who: 'KESSLER', text: 'Enemy reinforcements inbound. Get to the LZ now, and keep that intel safe.', delay: 7 },
    ],
    objectivesPreview: ['Infiltrate the village', 'Eliminate hostile forces', 'Recover the intel', 'Reach the LZ for extraction'],
    intro: ['ACT I — OPERATION DUST DEVIL', 'Al-Qadir Province', 'Sgt. "Ghost" Reyes — 1st Vanguard Battalion', 'Day 4, 13:05'],
    ambience: [['wind', 0.45]],
    async build(G, prog) {
      setupEnvironment(G, { hdri: 'qwantani_noon_puresky', sunDir: V(0.6, 0.78, 0.5), sunIntensity: 4.0, sunColor: 0xfff2dc, envIntensity: 1.0, fogColor: 0xd9cdb5, fogDensity: 0.005, exposure: 0.85, skyTop: 0x2d5c9c, skyHorizon: 0xe2d6c0, skyGround: 0xb39a78, clouds: 0.22, hemi: 0.25, groundColor: 0x9a7f5c, grade: { tint: 0xfff3e2, saturation: 1.0, contrast: 1.14 } });
      G.envExposure = 0.85; G.level.tint = 'desert';
      const M = await mats();
      prog(0.4, 'Building village');
      await desertVillage(G, M);
      prog(0.7, 'Deploying hostiles');
      const z = 'village';
      enemy(G, -20, 36, { zone: z, patrol: [[-30, 36], [-8, 36]] }); enemy(G, 22, 36, { zone: z, patrol: [[12, 36], [32, 38]] });
      enemy(G, -3, 31.5, { zone: z, yaw: Math.PI }); enemy(G, 3, 32, { zone: z, yaw: Math.PI });
      enemy(G, -25, 16, { zone: z, yaw: Math.PI }); enemy(G, 12, 17, { zone: z, yaw: 0.5 }); enemy(G, -8, 12, { zone: z, yaw: 2 });
      enemy(G, 0, 2, { zone: z, patrol: [[0, 6], [-12, 0], [0, -8], [14, -2]] }); enemy(G, 22, 0, { zone: z, yaw: 1.5 }); enemy(G, -28, -8, { zone: z, yaw: -1.5 });
      enemy(G, 25, -12, { zone: z, yaw: 2.5 }); enemy(G, -10, -14, { zone: z });
      enemy(G, -3, -22, { zone: z, yaw: Math.PI }); enemy(G, 3, -21.5, { zone: z, yaw: Math.PI });
      enemy(G, -5, -36, { zone: z }); enemy(G, 5, -46, { zone: z, yaw: 0.8 }); enemy(G, -10, -48, { zone: z, patrol: [[-12, -48], [12, -48]] });
      const lz = V(0, 0, -74);
      const smoke = greenSmoke(G, lz);
      let reinf = false;
      return {
        spawn: V(0, 0, 62), spawnYaw: 0, exposure: 0.85,
        update: (G, dt) => { if (G.objIdx >= 3) smoke(dt); },
        objectives: [
          { type: 'reach', text: 'Infiltrate the village', pos: V(0, 0, 26), radius: 6 },
          { type: 'kill', text: 'Eliminate all hostile forces in the village', filter: e => e.zone === 'village' },
          { type: 'interact', text: "Recover the intel from The Jackal's compound", pos: V(3, 0, -44.5), radius: 1.6, label: 'Hold <b>[F]</b> to download the intel', time: 4 },
          {
            type: 'reach', text: 'Reach the LZ for extraction', pos: lz, radius: 5,
            onStart: G => {
              G.hud.toast('ENEMY REINFORCEMENTS INBOUND', 3);
              for (const [x, zz] of [[-60, -40], [-58, -30], [60, -45], [58, -35], [-30, -78], [30, -78]]) { const e = enemy(G, x, zz, { state: 'combat', zone: 'reinf' }); e.lastSeen = G.player.pos.clone(); e.lastSeenT = G.time; e.awareness = 1; }
            },
          },
        ],
      };
    },
  },
  {
    id: 'ironharbor', enemyWeapon: 'm4a1', name: 'OPERATION IRON HARBOR', location: 'Port of Kaliningrad Sector 9', time: '19:42 Local', reverb: 'urban',
    briefing: 'The Jackal\'s laptop names Black Tide, a private army run by former General Viktor Rask. Rask is moving weapons through a Baltic dockyard, and the manifest lists more than rifles. Two arms caches are hidden among the containers. Plant charges on both, get clear of the blast and fight your way to the extraction boat at the pier. Rask\'s contractors are professionals. Expect them to flank.',
    dogtag: V(60, 0, -27.5),
    radio: [
      { at: 0, who: 'KESSLER', text: 'Ghost, this is Black Tide\'s main supply hub. Plant both charges and get out.', delay: 3 },
      { at: 1, who: 'VOSS', text: 'Alpha\'s rigged. Bravo is in the container yard to the west.' },
      { at: 2, who: 'OKAFOR', text: 'Both charges set. Move, move, move! Fifteen seconds!' },
      { at: 3, who: 'HAYES', text: 'Ghost... those crates were stamped for missile guidance kits. Rask is building something.', delay: 2 },
      { at: 3, who: 'RASK', text: 'Vanguard. Your colonel told me you would come. Enjoy the swim.', delay: 9 },
    ],
    objectivesPreview: ['Plant C4 on cache Alpha', 'Plant C4 on cache Bravo', 'Get clear before detonation', 'Fight to the extraction boat'],
    intro: ['ACT II — OPERATION IRON HARBOR', 'Port Sector 9, Baltic Coast', 'Sgt. "Ghost" Reyes — 1st Vanguard Battalion', 'Day 6, 19:42'],
    ambience: [['waves', 0.35], ['wind', 0.2]],
    async build(G, prog) {
      setupEnvironment(G, { hdri: 'belfast_sunset_puresky', sunDir: V(-1, 0.16, -0.35), sunIntensity: 3.6, sunColor: 0xffb070, envIntensity: 0.9, fogColor: 0xa08878, fogDensity: 0.0065, exposure: 1.0, skyTop: 0x3b4f78, skyHorizon: 0xf0a070, skyGround: 0x40362f, clouds: 0.55, cloudColor: 0xffd0b0, skyBright: 1.2, hemi: 0.2, skyColor: 0xffc49a, groundColor: 0x40362f, shadowExtent: 60, grade: { tint: 0xfff0e0, saturation: 1.05, contrast: 1.1 } });
      G.envExposure = 1.0; G.level.tint = 'urban';
      const M = await mats(); const W = G.world;
      W.bounds = { minX: -72, maxX: 72, minZ: -78, maxZ: 70 };
      const ter = await terrain(G, { tex: 'asphalt_02', texSize: 6, flat: 85, hills: 18, mat: 'concrete', seed: 11 });
      addWetness(ter.material, { amount: 0.5, scale: 0.06, dampness: 0.3 });
      // carve the water: drop terrain north of the quay
      { const p = ter.geometry.attributes.position; for (let i = 0; i < p.count; i++) if (p.getZ(i) < -56) p.setY(i, -8); p.needsUpdate = true; ter.geometry.computeVertexNormals(); }
      prog(0.4, 'Flooding the harbour');
      const wn = await loadTexture('tex/waternormals.jpg'); wn.wrapS = wn.wrapT = THREE.RepeatWrapping;
      const water = new Water(new THREE.PlaneGeometry(1200, 700), { textureWidth: 512, textureHeight: 512, waterNormals: wn, sunDirection: G.sunDir.clone(), sunColor: 0xffb070, waterColor: 0x0e2a33, distortionScale: 2.6, fog: true });
      water.rotation.x = -Math.PI / 2; water.position.set(0, -1.6, -405); G.scene.add(water); G.water = water;
      // quay wall
      W.box(0, -6, -57, 400, 6, 2, M.concrete, { texSize: 3, collide: false });
      W.addCollider(V(-200, -6, -59), V(36.5, 3, -56.5), 'concrete', { noRay: true });
      W.addCollider(V(43.5, -6, -59), V(200, 3, -56.5), 'concrete', { noRay: true });
      // pier
      W.box(40, -0.25, -67, 7, 0.25, 22, M.wood, { mat: 'wood', texSize: 2 });
      for (let z = -58; z > -78; z -= 4) for (const x of [36.8, 43.2]) W.box(x, -4, z, 0.4, 3.8, 0.4, M.wood, { collide: false });
      W.addCollider(V(35.5, -6, -78.5), V(36.6, 3, -56), 'wood', { noRay: true }); W.addCollider(V(43.4, -6, -78.5), V(44.5, 3, -56), 'wood', { noRay: true });
      // boat
      const boat = new THREE.Group();
      const hullM = new THREE.MeshStandardMaterial({ color: 0x2b3a33, roughness: 0.6, metalness: 0.3 });
      const hull = new THREE.Mesh(new THREE.BoxGeometry(3.4, 1.4, 9), hullM); hull.position.y = -0.9; boat.add(hull);
      const bow = new THREE.Mesh(new THREE.ConeGeometry(1.7, 3, 4), hullM); bow.rotation.set(-Math.PI / 2, Math.PI / 4, 0); bow.scale.set(1, 1, 0.45); bow.position.set(0, -0.9, -5.8); boat.add(bow);
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.6, 2.6), new THREE.MeshStandardMaterial({ color: 0xb8bdb5, roughness: 0.5 })); cabin.position.set(0, 0.6, 1.2); boat.add(cabin);
      boat.position.set(47, 0, -70); boat.traverse(o => { if (o.isMesh) { o.castShadow = o.receiveShadow = true; } }); G.scene.add(boat); G.boat = boat;
      prog(0.5, 'Stacking containers');
      // containers (instanced ISO 20ft boxes with corrugated walls, doors and weathering)
      const yard = new ContainerYard(G);
      const cont = (x, z, rot = false, stack = 1, ci) => { for (let k = 0; k < stack; k++) yard.add(x, z, rot ? 'z' : 'x', k, ci !== undefined ? CONTAINER_COLORS[ci] : null, rnd() < 0.5); };
      for (let r = 0; r < 5; r++) for (let c = 0; c < 6; c++) {
        const x = -44 + c * 13 + (r % 2) * 3, z = -38 + r * 14;
        if (r === 2 && c === 1) continue; // Bravo clearing
        const st = rnd() < 0.45 ? 2 : 1;
        cont(x, z, false, st); if (rnd() < 0.7) cont(x, z + 2.5, false, rnd() < 0.4 ? 2 : 1);
        if (rnd() < 0.3) cont(x + 7.5, z + 1, true, 1);
      }
      // warehouses
      building(W, 50, 30, 24, 16, 7, M.corr, { roofMat: M.rust, floorMat: M.floor, doors: { w: [0.5], s: [0.3, 0.7], n: [0.5] }, windows: {}, parapet: 0, thick: 0.3 });
      W.box(50, 0, 30, 24, 0.01, 0.01, M.corr, { collide: false });
      building(W, 52, -22, 20, 14, 6.5, M.corr, { roofMat: M.rust, floorMat: M.floor, doors: { w: [0.4], n: [0.6] }, windows: {}, parapet: 0 });
      building(W, -52, 40, 14, 10, 4, M.brick, { roofMat: M.concrete, floorMat: M.floor, doors: { e: [0.5] }, windows: { s: [0.3, 0.7], n: [0.5] } });
      // ship-to-shore gantry cranes, quayside, perimeter fence, road markings
      for (const cx of [-22, 8]) gantryCrane(G, M, cx, -51, -60);
      await quaySide(G, M, { edgeZ: -56, x0: -72, x1: 72, skip: [[36.5, 43.5]], railZ: [-51, -60] });
      chainFence(G, [[-71.6, -55, -71.6, 69.6], [71.6, -55, 71.6, 69.6], [-71.6, 69.6, -12, 69.6], [-4, 69.6, 71.6, 69.6]]);
      roadPaint(G, [[-70, -45.5, 70, -45.5, 0.2], [-70, -55.2, 35, -55.2, 0.12], [45, -55.2, 70, -55.2, 0.12],
        ...[-29.7, -15.7, -1.7, 12.2, 26].map(z => [-62, z, 50, z, 0.15, true])]);
      roadPaint(G, [...[0, 1, 2, 3, 4, 5].map(k => [56 + k * 2.6, 44, 56 + k * 2.6, 50, 0.1]), [56, 50, 69, 50, 0.1]], 0xd8d8d0);
      cargoShip(G, -30, -235, 0.06); cargoShip(G, 210, -330, -0.25, 150);
      // lamps with lights
      for (const [x, z] of [[-60, 20], [-30, 52], [10, 52], [30, -48], [62, 5], [-60, -45]]) {
        await W.prop('street_lamp_01', x, z, { rotY: rnd() * 6 });
        const l = new THREE.PointLight(0xffc27a, 25, 22, 2); l.position.set(x, 3.6, z); G.scene.add(l);
      }
      // caches
      const alpha = V(52, 0, 33), bravo = V(-31, 0, -9);
      await Promise.all([
        W.prop('old_military_crate', alpha.x, alpha.z, { mat: 'wood' }), W.prop('old_military_crate', alpha.x, alpha.z, { y: 0.3, rotY: 0.2, mat: 'wood' }), W.prop('ammo_box', alpha.x + 1.2, alpha.z), W.prop('ammo_box', alpha.x + 1.5, alpha.z + 0.4, { rotY: 1 }),
        W.prop('old_military_crate', bravo.x, bravo.z, { mat: 'wood', rotY: 1.57 }), W.prop('old_military_crate', bravo.x, bravo.z, { y: 0.3, rotY: 1.4, mat: 'wood' }), W.prop('ammo_box', bravo.x + 1, bravo.z - 1.2),
        W.prop('propane_tank', 20, 10, { explosive: true }), W.prop('propane_tank', -10, -30, { explosive: true }), W.prop('metal_jerrycan_green', 44, 22, { explosive: true }),
        W.prop('Barrel_01', 46, 24), W.prop('barrel_03', 47, 24.6), W.prop('portable_generator', 58, -18), W.prop('utility_box_01', -40, 55), W.prop('covered_car', -45, 58, { rotY: 1.6 }),
        W.prop('concrete_road_barrier', -58, 50, { rotY: 0.4 }), W.prop('concrete_road_barrier', -50, 48, { rotY: -0.3 }), W.prop('wooden_crate_01', 25, 45), W.prop('cardboard_box_01', 26, 44),
      ]);
      sandbagWall(W, M, 38, 30, 3, false); sandbagWall(W, M, -24, -14, 3);
      // spawn-side cover (spawn at -62,62)
      cont(-54, 50, false, 1, 4); cont(-62, 44, true, 2, 1); cont(-46, 56, true, 1, 3);
      wreck(G, M, -56, 58, 0.8, true); wreck(G, M, -40, 50, -0.3);
      sandbagWall(W, M, -50, 62, 3.5); sandbagWall(W, M, -58, 52, 3); sandbagWall(W, M, -36, 44, 3.5, false);
      await Promise.all([W.prop('wooden_crate_01', -52, 46, { mat: 'wood' }), W.prop('wooden_crate_01', -51.3, 46.6, { rotY: 0.5, mat: 'wood' }), W.prop('old_military_crate', -44, 46, { mat: 'wood', rotY: 1.2 })]);
      await yard.finish();
      // dockside dressing (CC0 Poly Haven props)
      const PP = (n, x, z, o = {}) => W.prop(n, x, z, o);
      await Promise.all([
        PP('rollershutter_door', 62.2, 26, { rotY: Math.PI / 2, collide: false }), PP('rollershutter_door', 62.2, 34, { rotY: Math.PI / 2, collide: false }),
        PP('rollershutter_door', 62.2, -25, { rotY: Math.PI / 2, collide: false }), PP('rollershutter_door', 46, -29.2, { rotY: Math.PI, collide: false }),
        PP('exterior_aircon_unit', 42, -16, { rotY: -Math.PI / 2, y: 2.2, collide: false }), PP('exterior_aircon_unit', 57, 38.2, { y: 2.6, collide: false }),
        PP('security_light', 38.2, 31.6, { y: 3.0, rotY: -Math.PI / 2, collide: false }), PP('security_light', 50, 21.8, { y: 3.0, rotY: Math.PI, collide: false }), PP('security_light', 52, -14.8, { y: 3.0, collide: false }),
        PP('metal_trash_can', -45, 31, { rotY: 0.4 }), PP('metal_trash_can', 20, 48.5, { rotY: 2.1 }), PP('metal_trash_can', 36.5, 14, { rotY: -0.6 }),
        PP('concrete_road_barrier_02', -8, 64, { rotY: 0.05 }), PP('concrete_road_barrier_02', -6.2, 64.4, { rotY: -0.1 }), PP('concrete_road_barrier_02', 30, -44, { rotY: 0.2 }), PP('concrete_road_barrier_02', 31.8, -44.3, { rotY: 0.05 }),
        PP('utility_box_02', -15, -46.5), PP('utility_box_02', 15, -46.5, { rotY: 0.1 }), PP('fire_hydrant', 37, 18, { collide: false }), PP('fire_hydrant', -50, 33.5, { collide: false }),
        PP('wooden_military_crate', 53.5, 31.5, { mat: 'wood', rotY: 0.3 }), PP('wooden_military_crate', -32.5, -7.5, { mat: 'wood', rotY: 1.2 }), PP('wooden_military_crate', -29.4, -10.4, { mat: 'wood', y: 0, rotY: 2.7 }),
        PP('plastic_crate_03', 24, 46, { rotY: 0.2 }), PP('plastic_crate_03', 24.1, 46, { y: 0.27, rotY: 0.35 }), PP('plastic_crate_03', 24.6, 46.5, { rotY: 1.4 }),
        PP('lifebuoy', 35.4, -56.6, { collide: false }), PP('lifebuoy', -20, -56.4, { collide: false }), PP('water_manhole_cover', -5, 40, { collide: false, cast: false }), PP('water_manhole_cover', 22, -10.5, { collide: false, cast: false }),
        PP('ocean_buoy', 20, -97, { y: -2.2, collide: false }), PP('ocean_buoy', -45, -125, { y: -2.2, collide: false, rotY: 1 }), PP('lateral_sea_marker', 70, -112, { y: -2.6, collide: false }),
      ]);
      G._supplies = [V(-58, 0, 58), V(30, 0, 40), V(-5, 0, -25), V(50, 0, -12)];
      prog(0.7, 'Deploying hostiles');
      const z = 'yard';
      const E = (x, zz, o = {}) => enemy(G, x, zz, { zone: z, ...o });
      E(-40, 45, { patrol: [[-40, 45], [-10, 45], [-10, 30]] }); E(-15, 52, { yaw: 2.5 }); E(0, 30, { yaw: 1 }); E(-30, 28, { patrol: [[-30, 28], [-30, 0]] });
      E(10, 15, { yaw: -1 }); E(-8, 3, { patrol: [[-8, 3], [20, 3]] }); E(-31, -5, { yaw: 0.3 }); E(-26, -11, { yaw: 2 }); E(-36, -12, { yaw: -2 });
      E(46, 26, { yaw: 1.4 }); E(56, 36, { yaw: 2.2 }); E(52, 22, {}); E(40, 40, { patrol: [[40, 40], [40, 12]] });
      E(50, -22, { yaw: 1 }); E(30, -30, { patrol: [[30, -30], [0, -40], [-30, -40]] }); E(15, -45, { yaw: 3 }); E(-45, -30, { yaw: 1.2 });
      let planted = 0; let blown = false;
      const smoke = greenSmoke(G, V(40, 0.1, -74), [0.95, 0.3, 0.25]);
      return {
        spawn: V(-62, 0, 62), spawnYaw: -Math.PI / 4, exposure: 1.0, far: 1400,
        update: (G, dt) => { water.material.uniforms.time.value += dt * 0.6; if (G.objIdx >= 3) smoke(dt); boat.position.y = Math.sin(G.time * 0.8) * 0.12; boat.rotation.z = Math.sin(G.time * 0.6) * 0.03; },
        objectives: [
          { type: 'interact', text: 'Plant C4 on weapons cache ALPHA (warehouse)', pos: alpha, radius: 2, label: 'Hold <b>[F]</b> to plant C4', time: 3, onDone: () => { planted++; G.hud.toast('CHARGE PLANTED', 2); } },
          { type: 'interact', text: 'Plant C4 on weapons cache BRAVO (container yard)', pos: bravo, radius: 2, label: 'Hold <b>[F]</b> to plant C4', time: 3, onDone: () => { planted++; G.hud.toast('CHARGE PLANTED', 2); } },
          {
            type: 'custom', text: 'Get clear! Detonation in 15 seconds', waypoint: false,
            check: (G, dt, o) => {
              const r = Math.max(0, 15 - o.t); G.hud.setObjectiveCount(`${Math.ceil(r)}s`);
              if (Math.floor(o.t) !== o._b && r > 0) { o._b = Math.floor(o.t); audio.play('beep', { vol: 0.25 }); }
              if (r <= 0 && !blown) { blown = true; G.explode(alpha.clone().add(V(0, 0.5, 0)), 'frag', true, 2.2); setTimeout(() => G.explode(bravo.clone().add(V(0, 0.5, 0)), 'frag', true, 2.2), 600); }
              return blown;
            },
          },
          {
            type: 'reach', text: 'Fight your way to the extraction boat', pos: V(40, 0, -73), radius: 4,
            onStart: G => {
              G.hud.toast('HOSTILE QRF INBOUND', 3);
              const sp = [[-65, 60], [-60, -40], [65, 60], [0, 65], [65, -50], [20, -50], [-20, -50]];
              let k = 0; const wave = () => { if (G.completed || G.failed) return; for (let i = 0; i < 3; i++) { const s = sp[(k++) % sp.length]; const e = enemy(G, s[0] + Math.random() * 3, s[1], { state: 'combat', zone: 'qrf' }); e.lastSeen = G.player.pos.clone(); e.lastSeenT = G.time; e.awareness = 1; } };
              wave(); setTimeout(wave, 12000); setTimeout(wave, 25000);
            },
          },
        ],
      };
    },
  },
  {
    id: 'midnight', enemyWeapon: 'mp5', name: 'OPERATION MIDNIGHT', location: 'Old Town, Zagoria', time: '02:15 Local', night: true, reverb: 'urban',
    briefing: 'Three days after Iron Harbor, Lt. Hayes went dark. She was digging into how Rask knew we were coming. Black Tide snatched her and is holding her in a safehouse at the north end of Old Town. Move up the street under cover of darkness, clear the safehouse and free Hayes. Do NOT shoot the hostage. Escort her back to the extraction vehicle. Night vision (N) and flashlight (T) are available.',
    dogtag: V(-28, 0, 10),
    radio: [
      { at: 0, who: 'OKAFOR', text: 'Ghost, Okafor. Streetlights are hot, so stay in the shadows. Night vision is on N.', delay: 3 },
      { at: 1, who: 'VOSS', text: 'Thermal shows six inside the safehouse. Hayes is in the back room.' },
      { at: 2, who: 'HAYES', text: 'Ghost? Thank God. Get me out of these cuffs.' },
      { at: 3, who: 'HAYES', text: 'Listen. Rask has a source in Vanguard Command, someone senior. They gave him our routes.', delay: 2 },
      { at: 3, who: 'HAYES', text: 'Only three people had the Iron Harbor plan. One of them is Kessler.', delay: 9 },
    ],
    objectivesPreview: ['Locate the safehouse', 'Clear the safehouse', 'Free Lt. Hayes', 'Escort Hayes to the vehicle'],
    intro: ['ACT III — OPERATION MIDNIGHT', 'Old Town, Zagoria', 'Sgt. "Ghost" Reyes — 1st Vanguard Battalion', 'Day 9, 02:15'],
    hint: 'Night vision: <b>N</b> &nbsp; Flashlight: <b>T</b> &nbsp; Lights give away your position.',
    ambience: [['crickets', 0.25], ['wind', 0.15]],
    async build(G, prog) {
      setupEnvironment(G, { hdri: 'qwantani_night_puresky', night: true, sunDir: V(0.3, 0.7, -0.6), sunIntensity: 0.45, sunColor: 0x9db4ff, envIntensity: 0.45, vmEnv: 1.6, fogColor: 0x0b0f18, fogDensity: 0.02, exposure: 1.35, hemi: 0.06, skyColor: 0x3b4a70, groundColor: 0x111111, shadowExtent: 45, grade: { tint: 0xd8e2ff, saturation: 0.8, contrast: 1.12, vignette: 0.5 } });
      G.envExposure = 1.35; G.level.tint = 'night';
      const M = await mats(); const W = G.world;
      W.bounds = { minX: -40, maxX: 40, minZ: -84, maxZ: 40 };
      const nterr = await terrain(G, { tex: 'asphalt_02', texSize: 5, flat: 70, hills: 15, mat: 'concrete', seed: 5 });
      addWetness(nterr.material, { amount: 0.75, scale: 0.09, dampness: 0.55 });
      prog(0.4, 'Building Old Town');
      const { fireP, fireL } = await oldTown(G, M, prog);
      prog(0.7, 'Deploying hostiles');
      const E = (x, z, o = {}) => enemy(G, x, z, { zone: 'street', ...o });
      E(-4, 0, { patrol: [[-4, 0], [-4, -20]] }); E(5, -16, { yaw: 0 }); E(-8, -30, { yaw: 0.3 }); E(8, -40, { patrol: [[8, -40], [8, -20]] });
      E(-12, -47, { yaw: -0.5 }); E(12, -46, { yaw: 0.5 }); E(0, -50, { yaw: 0 });
      E(-2, -62, { yaw: 0, zone: 'safehouse' }); E(3, -63, { yaw: 0.2, zone: 'safehouse' });
      E(-5, -69, { zone: 'safehouse', yaw: 0.4 }); E(5, -68, { zone: 'safehouse', yaw: -0.5 }); E(-4, -75, { zone: 'safehouse', hold: true }); E(6, -76, { zone: 'safehouse', hold: true });
      const hostage = enemy(G, 4, -76.5, { hostage: true, tint: 0x8a8070, yaw: Math.PI });
      G.hostage = hostage;
      const truck = V(0, 0, 34);
      const smoke = greenSmoke(G, truck);
      return {
        spawn: V(0, 0, 32), spawnYaw: 0, exposure: 1.35, deathText: 'You were killed in action.',
        update: (G, dt) => { fireL.intensity = 10 + Math.sin(G.time * 13) * 2 + Math.sin(G.time * 7.3) * 2; if (Math.random() < dt * 20) G.effects.add.spawn(fireP.clone().add(V((Math.random() - 0.5) * 0.4, 1, (Math.random() - 0.5) * 0.4)), V(0, 1.5, 0), { life: 0.5, size: 0.4, grow: -0.5, color: [1, 0.5, 0.15], alpha: 0.8 }); if (G.objIdx >= 3) smoke(dt); },
        objectives: [
          { type: 'reach', text: 'Move up the street to the safehouse', pos: V(0, 0, -56), radius: 5 },
          { type: 'kill', text: 'Clear the safehouse', filter: e => e.zone === 'safehouse' },
          { type: 'interact', text: 'Free Lt. Hayes', pos: V(4, 0, -76.5), radius: 1.6, label: 'Hold <b>[F]</b> to cut Hayes loose', time: 2.5, onDone: G => { hostage.follow = true; G.hud.toast('HAYES: "About time, Ghost. Let\'s move."', 3); } },
          {
            type: 'reach', text: 'Escort Lt. Hayes to the extraction vehicle', pos: truck, radius: 5, cond: G => hostage.pos.distanceTo(truck) < 9,
            onStart: G => {
              G.hud.toast('ENEMY REINFORCEMENTS', 3);
              for (const [x, z] of [[-30, -40], [30, -38], [-30, -8], [30, 0], [-30, 20]]) { const e = enemy(G, x, z, { state: 'alert', zone: 'reinf' }); e.investigate = V(0, 0, -30); }
            },
          },
        ],
      };
    },
  },
  {
    id: 'overwatch', enemyWeapon: 'ak47', name: 'OPERATION OVERWATCH', location: 'Al-Qadir Province', time: '05:40 Local', reverb: 'outdoor',
    loadout: { primary: 'bolt762', secondary: 'm9' },
    briefing: 'The Jackal slipped away at Dust Devil, but Lt. Hayes followed the Black Tide money to his paymaster, a contractor called Marek. Marek is meeting Jackal\'s men in the same village at dawn. Sgt. Okafor\'s team will hit the compound and take him alive. You are their overwatch: hold the ridge south of the village with a bolt-action rifle, clear the rooftops and keep the squad alive. Past 100 metres your rounds drop and drift with the crosswind.',
    dogtag: V(-30.5, 0, 2.5),
    radio: [
      { at: 0, who: 'OKAFOR', text: 'Ghost, you\'re our eyes. Three lookouts on the rooftops. Drop them and we move.', delay: 3 },
      { at: 0, who: 'VOSS', text: 'Wind is left to right. Hold a little into it on the long shots.', delay: 10 },
      { at: 1, who: 'OKAFOR', text: 'Rooftops are clear. Moving to the gate. Watch the street for us.' },
      { at: 2, who: 'VOSS', text: 'Glint on the compound roof. Sniper. He has Okafor pinned at the gate.' },
      { at: 3, who: 'OKAFOR', text: 'Sniper down. Ghost, they\'re flanking your ridge. Hold that position!' },
      { at: 4, who: 'OKAFOR', text: 'We\'re in the compound. Marek is gone. Somebody tipped him off.', delay: 2 },
      { at: 4, who: 'HAYES', text: 'Ghost, Marek left his phone behind. His last call went to a number inside Vanguard Command.', delay: 10 },
    ],
    objectivesPreview: ['Eliminate the rooftop lookouts', 'Cover the squad at the gate', 'Kill the enemy sniper', 'Hold the ridge', 'Regroup with the squad'],
    intro: ['ACT I — OPERATION OVERWATCH', 'Al-Qadir Province', 'Sgt. "Ghost" Reyes — 1st Vanguard Battalion', 'Day 5, 05:40'],
    hint: 'Hold <b>RMB</b> to scope and <b>Shift</b> to steady your breath. Past 100 m bullets drop and drift with the wind.',
    ambience: [['wind', 0.5]],
    async build(G, prog) {
      setupEnvironment(G, { hdri: 'kloofendal_48d_partly_cloudy_puresky', sunDir: V(0.85, 0.2, -0.45), sunIntensity: 2.8, sunColor: 0xffb47a, envIntensity: 0.7, fogColor: 0xc9a88a, fogDensity: 0.0042, exposure: 1.05, skyTop: 0x3a5784, skyHorizon: 0xf1b98a, skyGround: 0x8a6f58, clouds: 0.35, cloudColor: 0xffd2b0, skyBright: 1.1, hemi: 0.2, skyColor: 0xffc8a0, groundColor: 0x8a6f58, grade: { tint: 0xfff0e0, saturation: 1.0, contrast: 1.1 } });
      G.envExposure = 1.05; G.level.tint = 'desert';
      const M = await mats(); const W = G.world;
      prog(0.4, 'Building village');
      await desertVillage(G, M);
      W.bounds.maxZ = 92;
      // sniper ridge: rock shelf south of the village, low lip for cover, stairs down the back
      prog(0.6, 'Climbing the ridge');
      const ridgeM = M.sandstone.clone(); ridgeM.color.set(0xa08468);
      W.box(0, 0, 78, 30, 6, 10, ridgeM, { mat: 'concrete', texSize: 4 });
      W.box(0, 6, 73.35, 24, 0.55, 0.5, ridgeM, { mat: 'concrete', texSize: 2 });
      for (const [x, z, s] of [[-11, 75, 1.1], [9, 77, 0.9], [-4, 81, 1.3]]) await W.prop('boulder_01', x, z, { y: 6, rotY: x, scale: s, mat: 'concrete' });
      for (let i = 0; i < 14; i++) W.box(12.5, 0, 83.3 + i * 0.6, 3, 5.6 - i * 0.4, 0.6, ridgeM, { mat: 'concrete', texSize: 2 });
      G.pickups.add('ammo', V(-2, 6, 79)); G.pickups.add('ammo', V(2, 6, 79.5));
      prog(0.75, 'Deploying hostiles');
      // lookouts on the rooftops
      enemy(G, -25, 14, { y: 3.65, zone: 'lookout', hold: true, yaw: Math.PI });
      enemy(G, 14, 15, { y: 3.85, zone: 'lookout', hold: true, yaw: Math.PI + 0.3 });
      enemy(G, 29, 7, { y: 3.45, zone: 'lookout', hold: true, yaw: Math.PI - 0.4 });
      // gate patrol
      for (const [x, z, o] of [[-3, 31.5, {}], [3, 32, {}], [-12, 26, { patrol: [[-12, 26], [-24, 26]] }], [10, 24, { yaw: 2.6 }], [-6, 20, {}], [6, 18, { patrol: [[6, 18], [16, 22]] }]]) enemy(G, x, z, { zone: 'patrol1', yaw: Math.PI, ...o });
      // sniper team on the HVT roof
      enemy(G, 0, -36, { y: 4.25, zone: 'sniper', hold: true, yaw: Math.PI, hp: G.diff.hp * 0.8 });
      enemy(G, -5, -37, { y: 4.25, zone: 'sniper', hold: true, yaw: Math.PI + 0.3 });
      // compound guards (the squad deals with these)
      for (const [x, z] of [[-5, -30], [6, -32], [-8, -46], [8, -48]]) enemy(G, x, z, { zone: 'compound', yaw: Math.PI });
      // the squad
      const route = [[0, 50], [0, 40], [0, 33], [0, 20], [0, -10], [0, -22], [0, -30]];
      const squad = [ally(G, -4, 60, { name: 'OKAFOR', route, slot: 0 }), ally(G, 4, 60, { route, slot: 1 }), ally(G, -6, 57, { route, slot: 2 }), ally(G, 6, 57, { route, slot: 3 })];
      const hold = n => squad.forEach(a => { a.holdAt = n; });
      hold(0);
      return {
        spawn: V(0, 6, 76.5), spawnYaw: 0, exposure: 1.05, wind: V(1.5, 0, 0),
        objectives: [
          { type: 'kill', text: 'Eliminate the 3 rooftop lookouts', filter: e => e.zone === 'lookout' },
          { type: 'kill', text: 'Cover the squad: kill the patrol at the gate', filter: e => e.zone === 'patrol1', onStart: () => hold(3), restore: () => hold(3) },
          { type: 'kill', text: 'Kill the enemy sniper on the compound roof', filter: e => e.zone === 'sniper', onStart: () => hold(3) },
          {
            type: 'kill', text: 'Hold the ridge: hostiles flanking your position', filter: e => e.zone === 'ridge',
            onStart: G => {
              G.hud.toast('HOSTILES FLANKING THE RIDGE', 3);
              for (const [x, z] of [[-50, 48], [50, 48], [-40, 56], [42, 58], [-28, 64], [30, 64]]) { const e = enemy(G, x, z, { state: 'combat', zone: 'ridge' }); e.lastSeen = G.player.pos.clone(); e.lastSeenT = G.time; e.awareness = 1; }
            },
          },
          { type: 'reach', text: 'Regroup with the squad at the compound', pos: V(0, 0, -20), radius: 6, onStart: () => hold(7) },
        ],
      };
    },
  },
  {
    id: 'deepfreeze', enemyWeapon: 'm4a1', name: 'OPERATION DEEP FREEZE', location: 'Kola Peninsula', time: '23:10 Local', night: true, reverb: 'outdoor',
    loadout: { primary: 'mp5', secondary: 'm9', att: { mp5: { optic: 'holo', muzzle: 'suppressor', under: 'none', mag: 'ext' }, m9: { optic: 'iron', muzzle: 'suppressor', under: 'none', mag: 'std' } } },
    briefing: 'The guidance kits from Iron Harbor were flown north to a Black Tide radar station on the Kola Peninsula. A blizzard is coming in, and it is the only cover you will get. Go in quietly with suppressed weapons. Jam their comms mast, pull the flight logs from the control building, then destroy the radar dish on your way out. If the alarm goes up, the hangar will empty on top of you.',
    dogtag: V(-27, 0, -42.8),
    radio: [
      { at: 0, who: 'VOSS', text: 'Ghost, Voss. The storm is covering you. Black Tide runs this station, so keep it quiet.', delay: 3 },
      { at: 1, who: 'VOSS', text: 'You\'re through the fence. Put the jammer on the comms mast and they can\'t call for help.' },
      { at: 2, who: 'VOSS', text: 'Jammer is live. The flight logs are in the control building. Breach and clear.' },
      { at: 4, who: 'HAYES', text: 'Pull everything off that terminal. I want every flight Rask has made.' },
      { at: 5, who: 'HAYES', text: 'Ghost, these flights all land on a ship in the North Sea. It\'s called the Black Tide.', delay: 1 },
      { at: 5, who: 'VOSS', text: 'Put charges on the dish. Then we vanish.', delay: 9 },
      { at: 6, who: 'VOSS', text: 'Charges set. Twenty seconds. Get back to the treeline.' },
    ],
    objectivesPreview: ['Slip through the perimeter fence', 'Jam the comms mast', 'Breach the control building', 'Download the flight logs', 'Destroy the radar dish', 'Exfil to the treeline'],
    intro: ['ACT II — OPERATION DEEP FREEZE', 'Black Tide Radar Station, Kola Peninsula', 'Sgt. "Ghost" Reyes — 1st Vanguard Battalion', 'Day 7, 23:10'],
    hint: 'Stay quiet: your weapons are suppressed. Night vision: <b>N</b>. If an enemy raises the alarm, reinforcements pour out of the hangar.',
    ambience: [['wind', 0.55]],
    async build(G, prog) {
      setupEnvironment(G, { hdri: 'qwantani_night_puresky', night: true, sunDir: V(-0.3, 0.6, -0.5), sunIntensity: 0.55, sunColor: 0xb0c4ff, envIntensity: 0.55, vmEnv: 1.6, fogColor: 0x1d2635, fogDensity: 0.024, exposure: 1.45, hemi: 0.14, skyColor: 0x5a6c90, groundColor: 0x7d8a9a, shadowExtent: 45, grade: { tint: 0xdde8ff, saturation: 0.7, contrast: 1.1, vignette: 0.45 } });
      G.envExposure = 1.45; G.level.tint = 'urban';
      const M = await mats(); const W = G.world;
      W.bounds = { minX: -60, maxX: 60, minZ: -62, maxZ: 70 };
      await terrain(G, { tex: 'brushed_concrete', texSize: 6, flat: 75, hills: 45, mat: 'dirt', seed: 13, color: 0xeef3fa, rough: 0.85 });
      prog(0.4, 'Building the station');
      chainFence(G, [[-45, 40, -22, 40], [-18, 40, 45, 40], [45, 40, 45, -55], [-45, -55, 45, -55], [-45, -55, -45, 40]], { collide: true });
      const B = (x, z, w, d, h, mat, o) => building(W, x, z, w, d, h, mat, { roofMat: M.concrete, floorMat: M.floor, ...o });
      B(-25, 10, 14, 8, 3.2, M.corr, { doors: { s: [0.5], e: [0.5] }, windows: { n: [0.3, 0.7], w: [0.5] }, parapet: 0 });
      B(15, -5, 10, 8, 3.2, M.concrete, { doors: { s: [0.5] }, windows: { e: [0.5], w: [0.5], n: [0.5] } });
      B(-20, -35, 20, 14, 6, M.corr, { roofMat: M.rust, doors: { e: [0.5], s: [0.3, 0.7] }, windows: {}, parapet: 0 });
      // radar dome
      W.box(25, 0, -40, 13, 2, 13, M.concrete, { texSize: 3 });
      const dome = new THREE.Mesh(new THREE.SphereGeometry(6.2, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2 + 0.35), new THREE.MeshStandardMaterial({ color: 0xe6eaee, roughness: 0.45 }));
      dome.position.set(25, 3.6, -40); dome.castShadow = dome.receiveShadow = true; G.scene.add(dome);
      W.addCollider(V(19, 2, -46), V(31, 9.5, -34), 'metal');
      // comms mast with a blinking beacon
      W.box(-5, 0, 20, 1.6, 0.4, 1.6, M.concrete);
      for (const [dx, dz] of [[-0.55, -0.55], [0.55, -0.55], [-0.55, 0.55], [0.55, 0.55]]) W.box(-5 + dx, 0.4, 20 + dz, 0.1, 22, 0.1, M.darkMetal, { collide: false });
      for (let y = 2; y < 22; y += 2.5) W.box(-5, y, 20, 1.2, 0.06, 1.2, M.darkMetal, { collide: false });
      W.addCollider(V(-5.8, 0, 19.2), V(-4.2, 22, 20.8), 'metal');
      const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.22), new THREE.MeshBasicMaterial({ color: 0xff2a1a })); beacon.position.set(-5, 22.6, 20); G.scene.add(beacon);
      // cover & dressing
      for (const [x, z, r, t] of [[-32, -6, 0.4, true], [6, 12, -0.5, false], [30, 18, 1.4, true], [-2, -28, 0.2, false]]) wreck(G, M, x, z, r, t);
      sandbagWall(W, M, -20, 34, 3); sandbagWall(W, M, 5, -14, 3.5); sandbagWall(W, M, 20, -24, 3);
      await Promise.all([
        W.prop('old_military_crate', -12, 28, { mat: 'wood' }), W.prop('wooden_crate_01', -11, 29.2, { mat: 'wood', rotY: 0.5 }), W.prop('Barrel_01', 8, 6), W.prop('barrel_03', 8.8, 6.6),
        W.prop('portable_generator', 10, -1, { rotY: 1.2 }), W.prop('propane_tank', -14, -26, { explosive: true }), W.prop('propane_tank', 30, -28, { explosive: true }),
        W.prop('covered_car', 34, 0, { rotY: 1.5 }), W.prop('utility_box_01', -4, 17), W.prop('wooden_military_crate', -28, -20, { mat: 'wood' }), W.prop('ammo_box', -27.4, -20.2, { y: 0.45 }),
        W.prop('security_light', 15, -0.9, { y: 2.8, collide: false }), W.prop('security_light', -25, 14.1, { y: 2.8, collide: false }),
      ]);
      for (const [x, z] of [[-5, 22], [15, 0], [-20, -27], [25, -32], [-25, 15]]) { const l = new THREE.PointLight(0xcfe0ff, 14, 16, 2); l.position.set(x, 3.4, z); G.scene.add(l); }
      // treeline beyond the fence (spawn side)
      await scatter(G, 'dry_branches_medium_01', spots(G, 30, { keep: [[-20, 60, 6]], clear: 1.0, x0: -58, x1: 58, z0: 44, z1: 68, scale: [1, 2] }), { cast: false });
      await scatter(G, 'namaqualand_boulder_02', spots(G, 10, { keep: [[-20, 60, 6], [-20, 42, 4]], clear: 2, x0: -58, x1: 58, z0: 44, z1: 68, scale: [0.8, 1.3] }), { collide: true, colRadius: 'auto', colHeight: 'auto', sink: 0.05 });
      table(G, M, 15, -7.4, 1.6, 0.8); laptop(G, 15, 0.79, -7.4, 0);
      G._supplies = [V(-12, 0, 30), V(-27, 0, -22)];
      prog(0.7, 'Deploying hostiles');
      const E = (x, z, o = {}) => enemy(G, x, z, { zone: 'base', ...o });
      E(-30, 30, { patrol: [[-36, 30], [10, 30]] }); E(-3, 23, { yaw: 0.8 }); E(-8, 16, { patrol: [[-8, 16], [-8, 2], [6, 2]] });
      E(-25, 4, { patrol: [[-32, 4], [-16, 4]] }); E(-22, 12, { hold: true, yaw: 2 });
      E(-24, -32, { yaw: 1 }); E(-16, -37, {}); E(-20, -25, { patrol: [[-20, -25], [2, -25], [2, -45]] });
      E(22, -31, { yaw: 0.3 }); E(30, -30, { patrol: [[32, -30], [36, -50], [14, -50]] }); E(35, 15, { patrol: [[36, 15], [36, -15]] });
      for (const [x, z, y] of [[13, -6, 0.5], [17.5, -3.5, -0.4], [12.5, -8, 0]]) enemy(G, x, z, { zone: 'control', yaw: y });
      let alarm = false, jammed = false, blown = false, blowT = -1, breachDoor = null;
      return {
        spawn: V(-20, 0, 62), spawnYaw: 0, exposure: 1.45,
        weather: { type: 'snow', intensity: 1, wind: V(3.5, 0, 1.2) },
        update: (G, dt) => {
          beacon.visible = (G.time % 1.4) < 0.25;
          const quietBreach = G.objIdx === 3 && G.objectives[3].t < 8; // a fast, clean breach doesn't raise the alarm
          if (!alarm && G.enemies.list.some(e => e.alive && !e.friendly && !e.hostage && e.state === 'combat' && !(quietBreach && e.zone === 'control'))) {
            alarm = true; G.hud.toast('ALARM — THE BASE IS ON ALERT', 3); G.radio('VOSS', 'They\'ve spotted you. Go loud!');
            for (let i = 0; i < 4; i++) setTimeout(() => audio.play('beep', { vol: 0.35, rate: 0.6 }), i * 500);
            const n = jammed ? 3 : 6;
            for (let i = 0; i < n; i++) { const e = enemy(G, -20 + (i % 3) * 3, -33 + ((i / 3) | 0) * 3, { state: 'alert', zone: 'qrf' }); e.investigate = G.player.pos.clone(); }
          }
          if (blowT > 0) { blowT -= dt; if (blowT <= 0 && !blown) { blown = true; dome.visible = false; G.explode(V(25, 4, -40), 'frag', true, 3); setTimeout(() => G.explode(V(23, 2.5, -37), 'frag', true, 1.5), 500); } }
        },
        objectives: [
          { type: 'reach', text: 'Slip through the gap in the perimeter fence', pos: V(-20, 0, 40), radius: 3 },
          { type: 'interact', text: 'Plant the jammer on the comms mast', pos: V(-5, 0, 21.6), radius: 1.6, label: 'Hold <b>[F]</b> to plant the jammer', time: 3, onDone: G => { jammed = true; G.hud.toast('COMMS JAMMED', 2); } },
          { type: 'custom', text: 'Breach the control building', pos: V(15, 0, 0.2), check: () => breachDoor?.done, onStart: G => { breachDoor = G.addBreach({ x: 15, z: -1, horiz: true, zone: 'control', out: [0, 1.2] }); } },
          { type: 'kill', text: 'Clear the control room', filter: e => e.zone === 'control' },
          { type: 'interact', text: 'Download the flight logs', pos: V(15, 0, -7.4), radius: 1.6, label: 'Hold <b>[F]</b> to download the flight logs', time: 4 },
          { type: 'interact', text: 'Plant charges on the radar dome', pos: V(25, 0, -32.4), radius: 2, label: 'Hold <b>[F]</b> to plant charges', time: 3, onDone: () => { blowT = 20; } },
          {
            type: 'reach', text: 'Exfil to the treeline before the charges blow', pos: V(-20, 0, 58), radius: 6, cond: () => blown,
            onStart: G => { if (blowT < 0) blowT = 20; if (!alarm) G.hud.toast('UNDETECTED — THEY NEVER KNEW YOU WERE THERE', 3.5); },
          },
        ],
      };
    },
  },
  {
    id: 'angel', enemyWeapon: 'ak47', name: 'ANGEL OF DEATH', location: 'Al-Qadir Province', time: '01:30 Local', night: true, reverb: 'outdoor',
    briefing: 'Marek\'s phone led Okafor\'s team back to Al-Qadir to recover the Black Tide servers, and Jackal\'s militia has them surrounded. You are aboard the AC-130 gunship "Warhammer", 9,000 feet above the village. Clear a path for the squad from the south wall to the extraction LZ. Your squad wears IR strobes: they flash white on the thermal camera. Hit them three times and the mission is over.',
    dogtag: null,
    radio: [
      { at: 0, who: 'OVERLORD', text: 'Overlord to Warhammer. Ground team is pinned at the south wall. You are cleared hot.', delay: 3 },
      { at: 0, who: 'OKAFOR', text: 'Ghost, it\'s Okafor! We need that gate cleared, now!', delay: 10 },
      { at: 1, who: 'OKAFOR', text: 'Gate\'s clear. Pushing into the village. Watch for our strobes.' },
      { at: 2, who: 'OVERLORD', text: 'Vehicles closing fast from the east and west. Technicals. Take them out.' },
      { at: 3, who: 'OKAFOR', text: 'Compound ahead. Lots of heat in there. Light it up!' },
      { at: 4, who: 'OKAFOR', text: 'We have the servers. Moving to the LZ. Keep them off us.' },
      { at: 4, who: 'OVERLORD', text: 'Good effect on target. The bird is two minutes out.', delay: 9 },
    ],
    objectivesPreview: ['Clear the south gate', 'Cover the squad through the village', 'Destroy the technicals', 'Clear the compound', 'Cover the squad to the LZ'],
    intro: ['ACT II — ANGEL OF DEATH', 'AC-130 "Warhammer", over Al-Qadir', 'Sgt. "Ghost" Reyes — Fire Control Officer', 'Day 8, 01:30'],
    hint: 'Aim: <b>Mouse/Arrows</b> &nbsp; Fire: <b>Click</b> &nbsp; Guns: <b>1</b> 25mm · <b>2</b> 40mm · <b>3</b> 105mm (or wheel). Flashing white strobes are your squad.',
    ambience: [['wind', 0.15]],
    async build(G, prog) {
      setupEnvironment(G, { hdri: 'qwantani_night_puresky', night: true, sunDir: V(0.3, 0.7, -0.6), sunIntensity: 0.5, sunColor: 0x9db4ff, envIntensity: 0.5, vmEnv: 1.6, fogColor: 0x0b0f18, fogDensity: 0.0018, exposure: 1.6, hemi: 0.1, skyColor: 0x3b4a70, groundColor: 0x222222, shadowExtent: 90, grade: { saturation: 0.6, contrast: 1.1 } });
      G.envExposure = 1.6; G.level.tint = 'desert';
      const M = await mats();
      prog(0.4, 'Building village');
      await desertVillage(G, M);
      prog(0.7, 'Deploying hostiles');
      const route = [[0, 50], [0, 40], [0, 33], [0, 20], [-2, 4], [0, -12], [0, -22], [0, -30], [8, -56], [0, -72]];
      const squad = [ally(G, -3, 64, { name: 'OKAFOR', route, slot: 0, speed: 2.6 }), ally(G, 3, 64, { route, slot: 1, speed: 2.6 }), ally(G, -5, 61, { route, slot: 2, speed: 2.6 }), ally(G, 5, 61, { route, slot: 3, speed: 2.6 })];
      const hold = n => squad.forEach(a => { a.holdAt = n; });
      hold(2);
      const wave = (zone, pts) => pts.forEach(([x, z, o]) => { const e = enemy(G, x, z, { zone, state: 'combat', ...(o || {}) }); e.lastSeen = squad[0].pos.clone(); e.lastSeenT = G.time; e.awareness = 1; });
      wave('w1', [[-6, 31], [6, 31.5], [-16, 34], [14, 35], [-24, 28], [22, 27], [-3, 24], [4, 22], [-30, 33], [28, 34]]);
      // technicals
      const techs = [];
      const tmat = new THREE.MeshStandardMaterial({ color: 0x8a7a60, roughness: 0.8, emissive: 0xffffff, emissiveIntensity: 0.9 });
      const dark = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.9 });
      const technical = (path) => {
        const g = new THREE.Group();
        const body = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.9, 4.6), tmat); body.position.y = 0.95; g.add(body);
        const cab = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.9, 1.6), tmat); cab.position.set(0, 1.8, -1.0); g.add(cab);
        const gun = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.4, 6), dark); gun.rotation.x = Math.PI / 2; gun.position.set(0, 2.3, 1.0); g.add(gun);
        for (const [x, z] of [[-0.95, -1.5], [0.95, -1.5], [-0.95, 1.5], [0.95, 1.5]]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.3, 12), dark); w.rotation.z = Math.PI / 2; w.position.set(x, 0.42, z); g.add(w); }
        g.traverse(o => { if (o.isMesh) o.castShadow = true; });
        const p = path.map(q => V(q[0], 0, q[1])); g.position.copy(p[0]); G.scene.add(g);
        const t = { g, path: p, i: 1, alive: true, hp: 2, cd: 2 + Math.random() * 2 };
        techs.push(t); return t;
      };
      const smoke = greenSmoke(G, V(0, 0, -72));
      return {
        spawn: V(0, 0, 70), spawnYaw: 0, exposure: 1.6,
        gunship: { center: [0, -10], radius: 230, altitude: 300 },
        deathText: 'The ground team was overrun.',
        onExplosion: (pos) => {
          for (const t of techs) if (t.alive && t.g.position.distanceTo(pos) < 4.5) {
            t.hp--;
            if (t.hp <= 0) {
              t.alive = false; t.g.traverse(o => { if (o.isMesh) o.material = dark; });
              const at = t.g.position.clone().add(V(0, 1, 0)); setTimeout(() => G.explode(at, 'frag', true, 1.2), 50);
              G.hud.pickupMsg('TECHNICAL DESTROYED');
            }
          }
        },
        update: (G, dt) => {
          if (G.objIdx >= 4) smoke(dt);
          for (const t of techs) {
            if (!t.alive) { if (Math.random() < dt * 12) G.effects.add.spawn(t.g.position.clone().add(V((Math.random() - 0.5) * 1.5, 1.5, (Math.random() - 0.5) * 3)), V(0, 2, 0), { life: 0.6, size: 0.8, grow: -0.6, color: [1, 0.55, 0.2], alpha: 0.9 }); continue; }
            const wp = t.path[t.i];
            if (wp) {
              const d = wp.clone().sub(t.g.position); d.y = 0;
              if (d.length() < 1) t.i++;
              else { d.normalize(); t.g.position.addScaledVector(d, 7 * dt); t.g.rotation.y = Math.atan2(d.x, d.z); }
            } else {
              t.cd -= dt;
              if (t.cd <= 0) {
                t.cd = 0.12; t.burst = (t.burst || 0) + 1; if (t.burst > 8) { t.burst = 0; t.cd = 1.8; }
                const from = t.g.position.clone().add(V(0, 2.3, 0)), a = squad[(Math.random() * squad.length) | 0];
                const to = a.pos.clone().add(V((Math.random() - 0.5) * 6, 1, (Math.random() - 0.5) * 6));
                G.effects.tracer(from, to); audio.shot('lmg', from, false);
              }
            }
          }
        },
        objectives: [
          { type: 'kill', text: 'Clear the hostiles at the south gate', filter: e => e.zone === 'w1' },
          {
            type: 'kill', text: 'Cover the squad as they push into the village', filter: e => e.zone === 'w2',
            onStart: () => { hold(5); wave('w2', [[-14, 10], [12, 12], [-22, 2], [20, 0], [-8, -6], [8, -2], [-26, -12], [24, -8], [-12, -16], [14, -14], [0, 6], [-30, 12]]); },
          },
          {
            type: 'custom', text: 'Destroy the 3 technicals', waypoint: false,
            onStart: () => { technical([[90, -2], [46, -2]]); technical([[-90, -18], [-48, -18]]); technical([[80, -75], [30, -64], [22, -62]]); },
            check: G => { const left = techs.filter(t => t.alive).length; G.hud.setObjectiveCount(`${left} remaining`); return techs.length && left === 0; },
          },
          { type: 'kill', text: 'Clear the compound', filter: e => e.zone === 'w3', onStart: () => { hold(7); wave('w3', [[-8, -30], [8, -30], [-12, -42], [10, -44], [0, -50], [-6, -56], [6, -60], [-12, -28], [12, -36], [3, -38]]); } },
          { type: 'custom', text: 'Cover the squad to the LZ', waypoint: false, onStart: () => { hold(10); wave('w4', [[-40, -70], [40, -70], [-30, -80], [30, -80], [-50, -55], [50, -55]]); }, check: () => squad[0].routeIdx >= 10 || squad[0].pos.distanceTo(V(0, 0, -72)) < 6 },
        ],
      };
    },
  },
  {
    id: 'burnnotice', enemyWeapon: 'mp5', name: 'BURN NOTICE', location: 'Old Town, Zagoria', time: '05:05 Local', reverb: 'urban',
    loadout: { primary: 'mp5', secondary: 'm9' },
    briefing: 'Hayes went to Vanguard Command with what she knew about the mole. Six hours later your safehouse in Old Town is on fire and a Black Tide kill team is waiting outside. Your rifle is empty and the building is coming down. Grab what you can, breach the front door and fight your way down the street to Okafor\'s car. Trust nobody wearing a Vanguard patch.',
    dogtag: V(-7.5, 0, -50.6),
    radio: [
      { at: 0, who: 'HAYES', text: 'Ghost! Wake up! They firebombed the safehouse! Get out of there!', delay: 1.5 },
      { at: 0, who: 'OKAFOR', text: 'Ghost, Okafor. I\'m at the end of the street with a car. Grab a weapon and get out!', delay: 8 },
      { at: 1, who: 'OKAFOR', text: 'Kill team at the door! Black Tide contractors!' },
      { at: 2, who: 'OKAFOR', text: 'Come on, Ghost! I\'m at the car. Move!' },
      { at: 2, who: 'KESSLER', text: 'Sergeant Reyes. As of oh-five-hundred, you are disavowed. Stand down and wait for pickup.', delay: 14 },
      { at: 2, who: 'REYES', text: 'Kessler. It was you. You sold us to Rask.', delay: 24 },
    ],
    objectivesPreview: ['Escape the burning safehouse', 'Take out the kill team', 'Fight down the street to Okafor'],
    intro: ['ACT III — BURN NOTICE', 'Old Town, Zagoria', 'Sgt. "Ghost" Reyes — Disavowed', 'Day 11, 05:05'],
    hint: 'Your rifle is empty. Grab the shotgun, then hold <b>[F]</b> at the front door to breach. Fallen enemies drop weapons and ammo.',
    ambience: [['wind', 0.2]],
    async build(G, prog) {
      setupEnvironment(G, { hdri: 'kloofendal_48d_partly_cloudy_puresky', sunDir: V(0.6, 0.25, -0.4), sunIntensity: 0.9, sunColor: 0xc8d4e8, envIntensity: 0.45, fogColor: 0x4a5260, fogDensity: 0.014, exposure: 1.15, skyTop: 0x3a4250, skyHorizon: 0x6a7280, skyGround: 0x2a2c30, clouds: 0.95, cloudColor: 0x6a707a, skyBright: 0.6, hemi: 0.18, skyColor: 0x8a94a8, groundColor: 0x202224, shadowExtent: 45, grade: { tint: 0xe4ecf8, saturation: 0.72, contrast: 1.12, vignette: 0.45 } });
      G.envExposure = 1.15; G.level.tint = 'urban';
      const M = await mats(); const W = G.world;
      W.bounds = { minX: -40, maxX: 40, minZ: -84, maxZ: 40 };
      const ter = await terrain(G, { tex: 'asphalt_02', texSize: 5, flat: 70, hills: 15, mat: 'concrete', seed: 5 });
      addWetness(ter.material, { amount: 0.95, scale: 0.09, dampness: 0.8 });
      prog(0.4, 'Building Old Town');
      const { fireP, fireL } = await oldTown(G, M, prog);
      // fire inside the safehouse
      const fires = [V(-5, 0, -76), V(5.5, 0, -74.5), V(-6, 0, -68.5), V(5.8, 0, -69.5), V(-1.5, 0, -77.2)];
      const fl = fires.map(p => { const l = new THREE.PointLight(0xff6a20, 9, 9, 2); l.position.copy(p).add(V(0, 1.2, 0)); G.scene.add(l); return l; });
      G.pickups.add('weapon', V(-2.5, 0, -69), { id: 'm870', ammo: 6, reserve: 18 });
      G.pickups.add('ammo', V(2.6, 0, -70));
      prog(0.7, 'Deploying hostiles');
      for (const [x, z] of [[-4, -60], [4, -58.5], [-7, -55.5], [6.5, -62]]) enemy(G, x, z, { zone: 'ambush', yaw: 0, state: 'alert' });
      for (const [x, z, o] of [[-5, -46, {}], [5, -40, {}], [-8, -30, {}], [6, -20, {}], [-4, -8, {}], [5, 2, {}], [-6, 14, {}], [4, 24, {}], [-9, -36, { hp: G.diff.hp * 2 }], [8, -4, {}]]) enemy(G, x, z, { zone: 'street', yaw: 0, ...o });
      const okafor = ally(G, 2, 36, { name: 'OKAFOR', slot: 0 }); okafor.stayPut = true; okafor.yaw = Math.PI;
      let door = null, smokeT = 0;
      return {
        spawn: V(0, 0, -75.5), spawnYaw: Math.PI, exposure: 1.15, deathText: 'You were killed in action.',
        weather: { type: 'rain', intensity: 1, wind: V(1.5, 0, 0.6), lightning: true },
        update: (G, dt) => {
          fireL.intensity = 10 + Math.sin(G.time * 13) * 2;
          const burning = !door?.done || G.objIdx < 1;
          fl.forEach((l, i) => { l.intensity = 8 + Math.sin(G.time * (11 + i)) * 2.5 + Math.random(); });
          smokeT += dt;
          while (smokeT > 0.05) {
            smokeT -= 0.05;
            const p = fires[(Math.random() * fires.length) | 0];
            G.effects.add.spawn(p.clone().add(V((Math.random() - 0.5) * 0.8, 0.3, (Math.random() - 0.5) * 0.8)), V(0, 1.6 + Math.random(), 0), { life: 0.7, size: 0.7, grow: -0.6, color: [1, 0.5, 0.15], alpha: 0.85 });
            if (Math.random() < 0.4) G.effects.smoke.spawn(p.clone().add(V(0, 1.5, 0)), V((Math.random() - 0.5) * 0.4, 0.9, (Math.random() - 0.5) * 0.4), { life: 4, size: 0.9, grow: 1.4, color: [0.12, 0.11, 0.1], alpha: 0.55, drag: 0.5, spin: 0.3, fade: 2 });
          }
          const P = G.player;
          if (P.alive && P.pos.z < -66.2 && P.pos.z > -78 && Math.abs(P.pos.x) < 8) {
            for (const f of fires) if (Math.hypot(P.pos.x - f.x, P.pos.z - f.z) < 1.3) P.damage(40 * dt, f);
            const o = G.objectives[G.objIdx];
            if (burning && o && G.objIdx === 0 && o.t > 30) P.damage(6 * dt, P.pos.clone().add(V(0, 0, 1)));
          }
        },
        objectives: [
          {
            type: 'custom', text: 'Get out! Grab the shotgun and breach the front door', pos: V(0, 0, -67.2),
            onStart: G => {
              const P = G.player, w = P.weapons[0]; if (w) { w.ammo = 0; w.reserve = 0; }
              P.pendingSwitch = 1; P.switchT = 0.5;
              door = G.addBreach({ x: 0, z: -66, horiz: true, zone: 'ambush', out: [0, -1.2] });
            },
            check: (G, dt, o) => { const r = Math.max(0, 30 - o.t); G.hud.setObjectiveCount(r > 0 ? `Smoke: ${Math.ceil(r)}s` : 'CHOKING'); return door?.done; },
          },
          { type: 'kill', text: 'Take out the kill team', filter: e => e.zone === 'ambush' },
          { type: 'reach', text: 'Fight down the street to Okafor\'s car', pos: V(0, 0, 34), radius: 4 },
        ],
      };
    },
  },
  {
    id: 'blacktide', enemyWeapon: 'm4a1', name: 'BLACK TIDE', location: 'North Sea', time: '02:10 Local', night: true, reverb: 'outdoor',
    briefing: 'Disavowed, you now work for nobody but each other. Hayes tracked Rask\'s cargo ship, the Black Tide, into a North Sea storm. The warheads from the radar station flights are supposed to be aboard. Board her from the bow, search the cargo hold, take the bridge and pull the navigation log. Then sink her. Kessler\'s people will be watching for you, so do it fast.',
    dogtag: V(11.5, 0, -8),
    radio: [
      { at: 1, who: 'OKAFOR', text: 'Bow is clear. The hold hatch is midships. Move.' },
      { at: 2, who: 'VOSS', text: 'Hold is clear. Check the crates, Ghost.' },
      { at: 3, who: 'HAYES', text: 'Empty. They\'re stencilled for Zagoria. Rask moved them off this ship.', delay: 0.5 },
      { at: 3, who: 'RASK', text: 'You are always one step behind, Sergeant. Kill them all.', delay: 7 },
      { at: 4, who: 'OKAFOR', text: 'Bridge door is sealed. Set a breach.' },
      { at: 6, who: 'HAYES', text: 'I need that navigation log. Every port, every waypoint.' },
      { at: 7, who: 'VOSS', text: 'Got it. Now the fuel tanks on the starboard side. Let\'s sink her.' },
      { at: 8, who: 'OKAFOR', text: 'Charges are live! Over the port rail, the boat is waiting!' },
    ],
    objectivesPreview: ['Secure the bow', 'Clear the cargo hold', 'Search the warhead crates', 'Fight aft to the bridge', 'Breach the bridge', 'Download the navigation log', 'Plant charges on the fuel tanks', 'Get off the ship'],
    intro: ['ACT III — BLACK TIDE', 'Cargo ship "Black Tide", North Sea', 'Sgt. "Ghost" Reyes — Disavowed', 'Day 12, 02:10'],
    hint: 'The deck rolls with the storm. Use the container rows for cover and watch the stacks above you.',
    ambience: [['waves', 0.5], ['wind', 0.45]],
    async build(G, prog) {
      setupEnvironment(G, { hdri: 'qwantani_night_puresky', night: true, sunDir: V(0.4, 0.55, -0.6), sunIntensity: 0.4, sunColor: 0x9db4ff, envIntensity: 0.45, vmEnv: 1.5, fogColor: 0x10161e, fogDensity: 0.016, exposure: 1.5, hemi: 0.12, skyColor: 0x4a5a78, groundColor: 0x101418, shadowExtent: 45, grade: { tint: 0xdce6f4, saturation: 0.7, contrast: 1.12, vignette: 0.5 } });
      G.envExposure = 1.5; G.level.tint = 'night';
      const M = await mats(); const W = G.world;
      W.bounds = { minX: -13, maxX: 13, minZ: -73, maxZ: 64 };
      prog(0.3, 'Raising the sea');
      const wn = await loadTexture('tex/waternormals.jpg'); wn.wrapS = wn.wrapT = THREE.RepeatWrapping;
      const water = new Water(new THREE.PlaneGeometry(1600, 1600), { textureWidth: 512, textureHeight: 512, waterNormals: wn, sunDirection: V(0.4, 0.55, -0.6).normalize(), sunColor: 0x6070a0, waterColor: 0x061218, distortionScale: 6, fog: true });
      water.rotation.x = -Math.PI / 2; water.position.set(0, -9, 0); G.scene.add(water); G.water = water;
      // hull & deck (the deck is the ground plane at y = 0)
      const deckM = M.plate.clone(); deckM.color.set(0x4b4f48);
      const hullM = new THREE.MeshStandardMaterial({ color: 0x1b2833, roughness: 0.6, metalness: 0.4 });
      const redM = new THREE.MeshStandardMaterial({ color: 0x5e1c16, roughness: 0.7 });
      W.box(0, -0.35, -4.5, 28, 0.35, 140, deckM, { texSize: 3, collide: false });
      W.box(0, -9.5, -4.5, 29, 9.1, 141, hullM, { collide: false, cast: false });
      W.box(0, -10.5, -4.5, 29.4, 1.6, 141.4, redM, { collide: false, cast: false });
      { // pointed bow: triangular prism hull + deck cap
        const sh = new THREE.Shape(); sh.moveTo(-14.5, 0); sh.lineTo(14.5, 0); sh.quadraticCurveTo(9, -8, 0, -16); sh.quadraticCurveTo(-9, -8, -14.5, 0);
        const hullG = new THREE.ExtrudeGeometry(sh, { depth: 9.6, bevelEnabled: false }); hullG.rotateX(Math.PI / 2); hullG.translate(0, 0, -74.6);
        const bowM = new THREE.Mesh(hullG, hullM); bowM.position.y = -0.05; G.scene.add(bowM);
        const capG = new THREE.ShapeGeometry(sh); capG.rotateX(Math.PI / 2); capG.translate(0, 0, -74.6);
        const capM = deckM.clone(); capM.side = THREE.DoubleSide; const cap = new THREE.Mesh(capG, capM); cap.position.y = 0.002; cap.receiveShadow = true; G.scene.add(cap);
        W.box(0, 0, -75, 28, 1.1, 0.12, M.yellow, { collide: true });
      }
      // rails
      for (const x of [-13.85, 13.85]) { W.box(x, 0, -4.5, 0.12, 1.1, 139, M.yellow, { texSize: 1 }); for (let z = -73; z < 65; z += 2.5) W.box(x, 0, z, 0.12, 1.1, 0.12, M.yellow, { collide: false }); }
      W.box(0, 0, 65.5, 28, 1.1, 0.12, M.yellow);
      prog(0.45, 'Loading the containers');
      const yard = new ContainerYard(G);
      for (const [z, t] of [[-56, 2], [-48.5, 1], [-38, 2], [-4, 2], [3.5, 1], [14, 2], [21.5, 2], [32, 1]]) for (const [x, k] of [[-5.6, 0], [-3.1, 1], [3.1, 2], [5.6, 3]]) {
        const tiers = Math.max(1, t - ((k + Math.round(z)) % 2 === 0 && t > 1 ? 1 : 0));
        for (let lv = 0; lv < tiers; lv++) yard.add(x, z, 'z', lv, CONTAINER_COLORS[(k * 3 + Math.abs(Math.round(z)) + lv) % CONTAINER_COLORS.length], rnd() < 0.5);
      }
      for (const z of [-60, 26]) for (const x of [-10.5, 10.5]) yard.add(x, z, 'z', 0, null, rnd() < 0.5);
      await yard.finish?.();
      // cargo hold access housing
      building(W, 0, -20, 12, 10, 3.2, M.rust, { roofMat: M.darkMetal, floorMat: M.darkMetal, doors: { n: [0.5], s: [0.5] }, windows: {}, parapet: 0 });
      W.box(0, 3.2, -20, 13, 0.4, 11, M.yellow, { collide: false });
      // superstructure + bridge deck
      const whiteM = M.concrete.clone(); whiteM.color.set(0xd8d6d0);
      building(W, 0, 56, 24, 14, 3.4, whiteM, { roofMat: whiteM, floorMat: M.floor, doors: { n: [0.5] }, windows: { n: [0.18, 0.82], e: [0.4], w: [0.4] }, parapet: 0 });
      W.box(0, 3.4, 57.5, 20, 13, 10, whiteM, { collide: false });
      W.box(0, 16.4, 56, 26, 3, 6, whiteM, { collide: false });
      W.box(-4, 16.4, 62, 5, 9, 4, redM, { collide: false });
      const winM = new THREE.MeshStandardMaterial({ color: 0x111111, emissive: 0xffd9a0, emissiveIntensity: 1.5 });
      for (let k = 0; k < 3; k++) W.box(0, 5 + k * 3.6, 52.45, 17, 1, 0.1, winM, { collide: false, cast: false });
      W.box(0, 17.2, 52.95, 24, 1.2, 0.1, winM, { collide: false, cast: false });
      for (const [x, z, w, d] of [[-6, 60.5, 8, 1], [6, 60.5, 8, 1], [0, 57, 3, 1.2]]) W.box(x, 0, z, w, 1.05, d, M.darkMetal, { mat: 'metal' });
      laptop(G, 0, 1.06, 57, Math.PI); laptop(G, -6, 1.06, 60.5, Math.PI);
      // fuel tanks (starboard)
      const tankM = new THREE.MeshStandardMaterial({ color: 0x8a8f86, roughness: 0.5, metalness: 0.6 });
      for (const z of [40, 44.5]) { const t = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 4, 20), tankM); t.rotation.x = Math.PI / 2; t.position.set(10.5, 1.7, z); t.castShadow = true; G.scene.add(t); W.addCollider(V(8.9, 0, z - 2), V(12.1, 3.3, z + 2), 'metal'); }
      // masts & deck lights
      for (const z of [-76, -30, 10, 44]) { W.box(0, 0, z, 0.5, 11, 0.5, M.darkMetal, { mat: 'metal' }); const l = new THREE.PointLight(0xffe2b0, 22, 26, 2); l.position.set(0, 9, z); G.scene.add(l); }
      for (const [x, z] of [[-12, -40], [12, -10], [-12, 20], [12, 50]]) { const l = new THREE.PointLight(0xff9a50, 6, 10, 2); l.position.set(x, 2.4, z); G.scene.add(l); }
      await Promise.all([W.prop('wooden_military_crate', -10, -50, { mat: 'wood' }), W.prop('old_military_crate', 10, -34, { mat: 'wood' }), W.prop('Barrel_01', -11.5, 5), W.prop('barrel_03', -11, 6.2), W.prop('lifebuoy', -13.5, 18, { collide: false }), W.prop('lifebuoy', 13.5, -48, { collide: false })]);
      // the empty warhead crates in the hold
      for (const [x, z] of [[-2.5, -21], [0, -22.6], [2.5, -21]]) await W.prop('old_military_crate', x, z, { mat: 'wood', scale: 1.3 });
      G._supplies = [V(-10, 0, -50), V(10, 0, -34)];
      G.pickups.add('ammo', V(-11.4, 0, -10)); G.pickups.add('ammo', V(11.4, 0, 28));
      prog(0.7, 'Crewing the ship');
      const E = (x, z, zone, o = {}) => enemy(G, x, z, { zone, yaw: 0, ...o });
      E(-2, -52, 'bow'); E(9, -50, 'bow', { patrol: [[9, -50], [9, -30]] }); E(-9, -43, 'bow'); E(3.1, -48.5, 'bow', { y: 2.6, hold: true }); E(1, -42, 'bow');
      E(-3, -21, 'hold', { yaw: Math.PI }); E(3, -18.5, 'hold', { yaw: Math.PI }); E(0, -17, 'hold', { yaw: Math.PI });
      for (const [x, z, o] of [[-9, -2, {}], [9, 1, {}], [0, 8, {}], [-3.1, 3.5, { y: 2.6, hold: true }], [-10, 18, {}], [10, 22, {}], [0, 26, {}], [5.6, 32, { y: 2.6, hold: true }], [-8, 38, {}], [3, 44, {}]]) E(x, z, 'deck', o);
      for (const [x, z] of [[-6, 54], [5, 55.5], [0, 61], [9, 58]]) E(x, z, 'bridge', { yaw: 0 });
      const route = [[0, -62], [0, -50], [8.5, -36], [8.5, -26], [8.5, -10], [0, 0], [9, 14], [0, 38], [-4, 46]];
      const squad = [ally(G, -2, -69, { name: 'OKAFOR', route, slot: 1, tint: 'night' }), ally(G, 2, -69, { name: 'VOSS', route, slot: 2, tint: 'night' })];
      const hold = n => squad.forEach(a => { a.holdAt = n; });
      hold(2);
      let blowT = -1, blown = false;
      const blasts = [V(10.5, 2, 40), V(10.5, 2, 44.5), V(4, 2, 50), V(-6, 2, 30), V(6, 2, 10)];
      return {
        spawn: V(0, 0, -70), spawnYaw: Math.PI, exposure: 1.5,
        weather: { type: 'rain', intensity: 1.2, wind: V(4, 0, -1), lightning: true },
        update: (G, dt) => {
          water.material.uniforms.time.value += dt * 0.8;
          G.camRoll = Math.sin(G.time * 0.45) * 0.03 + Math.sin(G.time * 0.21) * 0.015;
          if (blowT > 0 && !G.completed) {
            blowT -= dt; if (G.objIdx === 8) G.hud.setObjectiveCount(`${Math.ceil(Math.max(0, blowT))}s`);
            if (blowT <= 0 && !blown) { blown = true; blasts.forEach((p, i) => setTimeout(() => G.explode(p, 'frag', true, 2), i * 450)); setTimeout(() => { if (!G.completed) G.failMission('You went down with the ship.'); }, 1200); }
          }
        },
        introScene: {
          title: ['BLACK TIDE', 'North Sea · 02:10'],
          shots: [
            { from: [-34, 16, -108], to: [-24, 11, -90], look: [0, 2, -40], lookTo: [0, 1, -30], dur: 7, fov: 55 },
            { from: [-17, -7, -70], to: [-15.2, 1.2, -69], look: [0, 1, -66], dur: 4.5, fov: 60 },
            { from: [4, 1.8, -64], to: [1, 1.7, -67], look: [0, 1.4, -70], lookTo: [0, 1.6, -50], dur: 4, fov: 62 },
          ],
          lines: [
            { at: 1.5, who: 'HAYES', text: 'There she is. The Black Tide. Rask\'s floating armoury.' },
            { at: 7.5, who: 'OKAFOR', text: 'We\'re on deck. No flag, no friends. Just like old times, Ghost.' },
          ],
        },
        outro: {
          live: false,
          shots: [
            { from: [-30, 6, 40], to: [-44, 9, 10], look: [0, 3, 30], lookTo: [0, 4, 18], dur: 9, fov: 55 },
          ],
          lines: [
            { at: 0.5, who: 'RASK', text: 'Clever, Sergeant. But the warheads are already in the mountains.' },
            { at: 5.5, who: 'HAYES', text: 'The nav log shows a convoy route through the Zagoria pass.' },
            { at: 9, who: 'OKAFOR', text: 'Then that\'s where we hit him.' },
          ],
          update: (G, t) => { if (!G._obx) G._obx = 0; const k = Math.floor(t / 1.4); if (k > G._obx && k < 7) { G._obx = k; G.explode(V((Math.random() - 0.5) * 20, 2, -40 + k * 14), 'frag', false, 2.4); } },
        },
        objectives: [
          { type: 'kill', text: 'Secure the bow', filter: e => e.zone === 'bow' },
          { type: 'kill', text: 'Clear the cargo hold', filter: e => e.zone === 'hold', onStart: () => hold(4), restore: () => hold(4) },
          { type: 'interact', text: 'Search the warhead crates', pos: V(0, 0, -21.2), radius: 2, label: 'Hold <b>[F]</b> to open the crates', time: 2.5 },
          { type: 'kill', text: 'Fight aft to the bridge', filter: e => e.zone === 'deck', onStart: () => hold(8), restore: () => hold(8) },
          { type: 'custom', text: 'Breach the bridge door', pos: V(0, 0, 48), check: () => G._btDoor?.done, onStart: G => { G._btDoor = G.addBreach({ x: 0, z: 49, horiz: true, zone: 'bridge', out: [0, -1.2] }); } },
          { type: 'kill', text: 'Clear the bridge', filter: e => e.zone === 'bridge', onStart: () => hold(9) },
          { type: 'interact', text: 'Download the navigation log', pos: V(0, 0, 55.6), radius: 1.8, label: 'Hold <b>[F]</b> to download the navigation log', time: 4 },
          { type: 'interact', text: 'Plant charges on the fuel tanks', pos: V(8.4, 0, 42.2), radius: 2, label: 'Hold <b>[F]</b> to plant charges', time: 3, onDone: G => { if (!G._restoring) { blowT = 40; G.hud.toast('CHARGES SET — 40 SECONDS', 3); } } },
          { type: 'reach', text: 'Get over the port rail to the boat', pos: V(-12.6, 0, 20), radius: 2.6 },
        ],
      };
    },
  },
  {
    id: 'convoy', enemyWeapon: 'ak47', name: 'CONVOY', location: 'Zagoria Pass', time: '18:20 Local', reverb: 'outdoor',
    briefing: 'Rask\'s warheads are moving by road through the Zagoria pass, escorted by an armoured truck, two cargo trucks and a technical. Plant an IED on the road, take the ridge above it, and blow the lead vehicle when it rolls over the charge. Then kill the escort and secure the warhead truck before Rask\'s reinforcements arrive. If the convoy gets past the IED, it\'s gone.',
    dogtag: V(-30, 0, -26),
    radio: [
      { at: 0, who: 'HAYES', text: 'Convoy is ten minutes out. Plant the IED in the culvert on the road.', delay: 2 },
      { at: 1, who: 'OKAFOR', text: 'IED is set. Up on the ridge with us, Ghost.' },
      { at: 2, who: 'VOSS', text: 'Here they come. Armoured lead, two trucks, a gun truck at the rear. Wait for the lead.', delay: 2 },
      { at: 3, who: 'OKAFOR', text: 'Lead is burning! Kill the escort, weapons free!' },
      { at: 4, who: 'HAYES', text: 'More trucks coming from the east. Rask\'s quick reaction force.' },
      { at: 5, who: 'VOSS', text: 'Road\'s clear. Get to the second cargo truck and secure that warhead.' },
    ],
    objectivesPreview: ['Plant the IED', 'Take the ridge', 'Ambush the convoy', 'Kill the escort', 'Stop the reinforcements', 'Secure the warhead'],
    intro: ['ACT IV — CONVOY', 'Zagoria Pass', 'Sgt. "Ghost" Reyes — Disavowed', 'Day 13, 18:20'],
    hint: 'Hold <b>[E]</b> to plant the IED, then press <b>[E]</b> again to detonate when the lead truck is on top of it.',
    ambience: [['wind', 0.6]],
    async build(G, prog) {
      setupEnvironment(G, { hdri: 'belfast_sunset_puresky', sunDir: V(-1, 0.14, 0.25), sunIntensity: 3.2, sunColor: 0xffa060, envIntensity: 0.85, fogColor: 0x9a8a88, fogDensity: 0.006, exposure: 1.0, skyTop: 0x3b4f78, skyHorizon: 0xf0a070, skyGround: 0x5a4e46, clouds: 0.4, cloudColor: 0xffc8a0, skyBright: 1.05, hemi: 0.22, skyColor: 0xffc4a0, groundColor: 0x5a4e46, grade: { tint: 0xfff0e4, saturation: 1.0, contrast: 1.1 } });
      G.envExposure = 1.0; G.level.tint = 'woodland';
      const M = await mats(); const W = G.world;
      W.bounds = { minX: -74, maxX: 74, minZ: -42, maxZ: 30 };
      await terrain(G, { tex: 'rocky_terrain_02', texSize: 7, flat: 62, hills: 70, mat: 'dirt', seed: 21, color: 0xb0a898 });
      prog(0.35, 'Cutting the road');
      W.box(0, 0.005, 1, 400, 0.02, 7.5, M.asphalt, { collide: false, texSize: 5 });
      roadPaint(G, [[-200, 1, 200, 1, 0.14, true], [-200, -2.6, 200, -2.6, 0.1], [-200, 4.6, 200, 4.6, 0.1]], 0xd8d0b0);
      const rockM = M.rock.clone(); rockM.color.set(0x9a8f84);
      // ambush ridge north of the road, with steps down its east end
      W.box(-4, 0, -21, 34, 4, 9, rockM, { mat: 'concrete', texSize: 4 });
      W.box(-4, 4, -16.9, 26, 0.6, 0.6, rockM, { mat: 'concrete' });
      for (let i = 0; i < 9; i++) W.box(14.5, 0, -18 + i * 0.6, 3, 3.6 - i * 0.4, 0.6, rockM, { mat: 'concrete', texSize: 2 });
      // outcrops and cover along the road
      for (const [x, z, sc] of [[-40, -14, 2.6], [36, -12, 2.8], [-26, 14, 2.4], [22, 16, 2.2], [52, 12, 3], [-58, -10, 3], [58, -22, 3.4], [-12, 20, 1.8], [-22, -26, 3.2], [12, -26, 3], [-4, -27, 2.6]]) await W.prop('boulder_01', x, z, { scale: sc, rotY: x * 0.7, mat: 'concrete' });
      vehicleWreck(G, M, -48, 7, 0.4); vehicleWreck(G, M, 44, -6, 2.6, true);
      await scatter(G, 'namaqualand_boulder_02', spots(G, 26, { keep: [[0, 1, 6], [-4, -21, 18], [14, -14, 4]], clear: 2, x0: -72, x1: 72, z0: -40, z1: 28, scale: [0.8, 1.6] }), { collide: true, colRadius: 'auto', colHeight: 'auto', sink: 0.05 });
      await scatter(G, 'dry_branches_medium_01', spots(G, 40, { keep: [[0, 1, 5]], clear: 1, x0: -72, x1: 72, z0: -40, z1: 28, scale: [1, 2.2] }), { cast: false });
      G._supplies = [V(-14, 0, -14), V(30, 0, -8)];
      G.pickups.add('ammo', V(-8, 4, -22)); G.pickups.add('ammo', V(2, 4, -22)); G.pickups.add('grenade', V(-4, 4, -23));
      prog(0.6, 'Fuelling the convoy');
      const ied = V(8, 0, 1.5);
      const iedMesh = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.2, 0.35), new THREE.MeshStandardMaterial({ color: 0x4a4a3a, roughness: 0.9 })); iedMesh.position.set(8, 0.1, 4.2); iedMesh.visible = false; G.scene.add(iedMesh);
      const vehicles = [];
      const mkV = (kind, x) => { const v = convoyVehicle(G, kind); v.g.position.set(x, 0, 1.5); v.g.rotation.y = Math.PI / 2; vehicles.push(v); return v; };
      const lead = mkV('apc', -120), truck1 = mkV('truck', -134), truck2 = mkV('truck', -148), tech = mkV('technical', -162);
      truck2.warhead = true;
      let rolling = false, stopped = false, detonated = false, qrf = null, qrfArrived = false;
      const squad = [ally(G, -10, -22, { name: 'OKAFOR', slot: 1 }), ally(G, 0, -22, { name: 'VOSS', slot: 2 })];
      squad.forEach(a => { a.stayPut = true; a.yaw = Math.PI; a.pos.y = 4; a.hold = true; });
      const route = [[14.5, -12], [8, -6], [0, -4]];
      const unleash = () => squad.forEach((a, i) => { a.stayPut = false; a.route = route.map(p => [p[0] - i * 3, p[1]]); a.routeIdx = 0; a.holdAt = 3; });
      const dismount = () => {
        if (stopped) return; stopped = true;
        const pts = [];
        for (const v of [truck1, truck2]) { const p = v.g.position; for (const dz of [-3.5, 4.5]) for (const dx of [-2, 2]) pts.push([p.x + dx, p.z + dz]); }
        pts.push([lead.g.position.x + 6, -3], [tech.g.position.x - 3, 6]);
        for (const [x, z] of pts) { const e = enemy(G, x, z, { zone: 'escort', state: 'combat' }); e.lastSeen = G.player.pos.clone(); e.lastSeenT = G.time; e.awareness = 1; }
        const gun = enemy(G, tech.g.position.x - 0.8, 1.5, { zone: 'escort', y: 1.3, hold: true, state: 'combat', yaw: Math.PI }); gun.lastSeen = G.player.pos.clone(); gun.awareness = 1; tech.gunner = gun;
      };
      const detonate = () => {
        if (detonated) return; detonated = true; iedMesh.visible = false;
        G.explode(ied.clone().add(V(0, 0.4, 0)), 'frag', true, 2.6);
        if (lead.g.position.distanceTo(ied) < 10) { lead.dead = true; burnVehicle(lead); G.hud.toast('DIRECT HIT', 2); }
        else G.hud.toast('MISSED — CONVOY HALTED', 2.5);
        for (const v of vehicles) v.speed = 0;
        dismount(); unleash();
      };
      return {
        spawn: V(4, 0, 12), spawnYaw: Math.PI * 0.9, exposure: 1.0,
        weather: { type: 'sand', intensity: 0.25, wind: V(3, 0, 0) },
        onExplosion: (pos) => { for (const v of vehicles) if (!v.dead && v.g.position.distanceTo(pos) < 4.5 && detonated) { v.hp = (v.hp ?? 2) - 1; if (v.hp <= 0) { v.dead = true; burnVehicle(v); } } },
        update: (G, dt) => {
          for (const v of vehicles) {
            if (v.dead) { if (Math.random() < dt * 14) G.effects.add.spawn(v.g.position.clone().add(V((Math.random() - 0.5) * 2, 1.6, (Math.random() - 0.5) * 1.5)), V(0, 2.2, 0), { life: 0.7, size: 1, grow: -0.6, color: [1, 0.55, 0.2], alpha: 0.9 }); if (Math.random() < dt * 4) G.effects.smoke.spawn(v.g.position.clone().add(V(0, 2.5, 0)), V(0.4, 1.4, 0), { life: 6, size: 1.2, grow: 1.6, color: [0.08, 0.08, 0.08], alpha: 0.5, drag: 0.3, spin: 0.3, fade: 2 }); continue; }
            if (rolling && v.speed !== 0) v.g.position.x += (v.speed ?? 6) * dt;
            if (v === tech && stopped && tech.gunner?.alive) {
              v.cd = (v.cd ?? 1) - dt;
              if (v.cd <= 0) { v.cd = 0.11; v.burst = (v.burst || 0) + 1; if (v.burst > 10) { v.burst = 0; v.cd = 2.2; }
                const from = v.g.position.clone().add(V(0, 2.3, 0)), to = G.player.eyePos(V()).add(V((Math.random() - 0.5) * 5, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 5));
                G.effects.tracer(from, to); audio.shot('lmg', from, false);
                if (Math.random() < 0.15 * G.diff.acc && G.world.lineOfSight(from, G.player.eyePos(V()))) G.player.damage(9, from);
              }
            }
          }
          if (rolling && !detonated && lead.g.position.x > 30) G.failMission('The convoy got through.');
          if (qrf && !qrfArrived) { qrf.g.position.x -= 9 * dt; if (qrf.g.position.x <= 46) { qrfArrived = true; for (let i = 0; i < 6; i++) { const e = enemy(G, 46 + (i % 3) * 2, -4 + ((i / 3) | 0) * 9, { zone: 'qrf', state: 'combat' }); e.lastSeen = G.player.pos.clone(); e.awareness = 1; } } }
        },
        introScene: {
          title: ['CONVOY', 'Zagoria Pass · 18:20'],
          shots: [
            { from: [-120, 40, 60], to: [-60, 22, 40], look: [0, 0, 0], lookTo: [10, 0, -6], dur: 7, fov: 50 },
            { from: [-4, 6, -14], to: [-4, 5.2, -12], look: [8, 0, 2], lookTo: [10, 0, 1.5], dur: 4.5, fov: 55 },
          ],
          lines: [
            { at: 1, who: 'HAYES', text: 'One road through the pass. Rask\'s convoy has to come this way.' },
            { at: 6.5, who: 'VOSS', text: 'Good ground. We hit them from the ridge.' },
          ],
        },
        outro: {
          shots: [{ from: [truck2.g.position.x - 5, 2.2, 7], to: [truck2.g.position.x - 3, 2.6, 5], look: [truck2.g.position.x - 2, 1.6, 1.5], dur: 11, fov: 50 }],
          lines: [
            { at: 0.5, who: 'HAYES', text: 'One warhead. Only one. The second one isn\'t here.' },
            { at: 4.5, who: 'RASK', text: 'Looking for this, Sergeant? It is on my plane at Krasnaya airfield. Wheels up at midnight.' },
            { at: 10, who: 'OKAFOR', text: 'Then we go in from the sky.' },
          ],
        },
        objectives: [
          { type: 'interact', text: 'Plant the IED in the culvert', pos: V(8, 0, 4.2), radius: 1.8, label: 'Hold <b>[F]</b> to plant the IED', time: 3, onDone: () => { iedMesh.visible = true; } },
          { type: 'reach', text: 'Take the ambush position on the ridge', pos: V(-4, 4, -20), radius: 5, cond: G => G.player.pos.y > 3 },
          {
            type: 'custom', text: 'Ambush the convoy: detonate when the lead truck is on the IED', pos: ied, waypoint: false,
            onStart: () => { rolling = true; },
            restore: () => { rolling = true; lead.g.position.x = 8; truck1.g.position.x = -6; truck2.g.position.x = -20; tech.g.position.x = -34; detonate(); },
            check: (G) => {
              const d = lead.g.position.x - ied.x;
              G.hud.setObjectiveCount(d < -60 ? 'Convoy approaching' : d < -10 ? `Lead vehicle ${Math.round(-d)} m out` : d < 10 ? 'NOW!' : 'Too late!');
              if (G.input.actHit('interact')) detonate();
              return detonated;
            },
          },
          { type: 'kill', text: 'Kill the convoy escort', filter: e => e.zone === 'escort' },
          { type: 'custom', text: 'Stop the reinforcements', pos: V(46, 0, 0), check: G => { const left = G.enemies.list.filter(e => e.alive && e.zone === 'qrf').length; G.hud.setObjectiveCount(qrfArrived ? `${left} remaining` : 'Truck inbound'); return qrfArrived && left === 0; }, onStart: () => { qrf = convoyVehicle(G, 'truck'); qrf.g.position.set(110, 0, -2); qrf.g.rotation.y = -Math.PI / 2; vehicles.push(qrf); qrf.speed = 0; G.hud.toast('ENEMY TRUCK INBOUND', 2.5); } },
          { type: 'interact', text: 'Secure the warhead', pos: V(-20, 0, 1.5), radius: 2.2, label: 'Hold <b>[F]</b> to secure the warhead', time: 4, onStart: (G, o) => { o.pos = truck2.g.position.clone().add(V(-3.6, 0, 0)); } },
        ],
      };
    },
  },
  {
    id: 'skyfall', enemyWeapon: 'm4a1', name: 'SKYFALL', location: 'Krasnaya Airfield', time: '23:40 Local', night: true, reverb: 'outdoor',
    briefing: 'Rask has the second warhead aboard a cargo plane at Krasnaya airfield, wheels up at midnight. You will HALO jump in from 700 metres: steer for Voss\'s green smoke and open your chute low. Clear the hangar, kill the runway lights, then stop that plane before it leaves the ground. Its engines are its weak point. Rask is aboard. We want him alive.',
    dogtag: V(-62, 0, 40),
    radio: [
      { at: 1, who: 'VOSS', text: 'You\'re down. Good jump, Ghost. Hangar first.' },
      { at: 2, who: 'OKAFOR', text: 'Hangar is clear. Kill the runway lights at the tower and they\'re flying blind.' },
      { at: 3, who: 'HAYES', text: 'The plane is moving! Shoot out the engines! Two of them and it can\'t take off!' },
      { at: 4, who: 'VOSS', text: 'She\'s down! Get to the cargo door. Rask is inside.' },
    ],
    objectivesPreview: ['HALO jump to the landing zone', 'Clear the hangar', 'Kill the runway lights', 'Stop Rask\'s plane', 'Take Rask'],
    intro: ['ACT IV — SKYFALL', 'Krasnaya Airfield', 'Sgt. "Ghost" Reyes — Disavowed', 'Day 13, 23:40'],
    hint: 'Steer with <b>WASD</b> and the mouse. Press <b>SPACE</b> to open your chute below 650 m.',
    ambience: [['wind', 0.4]],
    async build(G, prog) {
      setupEnvironment(G, { hdri: 'qwantani_night_puresky', night: true, sunDir: V(0.3, 0.65, 0.5), sunIntensity: 0.45, sunColor: 0xa8bcff, envIntensity: 0.5, vmEnv: 1.6, fogColor: 0x0d121a, fogDensity: 0.0045, exposure: 1.5, hemi: 0.12, skyColor: 0x46557a, groundColor: 0x1a1c20, shadowExtent: 60, grade: { tint: 0xdde6f6, saturation: 0.72, contrast: 1.1, vignette: 0.45 } });
      G.envExposure = 1.5; G.level.tint = 'night';
      const M = await mats(); const W = G.world;
      W.bounds = { minX: -88, maxX: 88, minZ: -60, maxZ: 58 };
      await terrain(G, { tex: 'dry_ground_01', texSize: 7, flat: 95, hills: 35, mat: 'dirt', seed: 31, size: 1400, color: 0x9a9482 });
      { const far = new THREE.Mesh(new THREE.PlaneGeometry(9000, 9000), new THREE.MeshStandardMaterial({ color: 0x2a2a26, roughness: 1 })); far.rotation.x = -Math.PI / 2; far.position.y = -2; G.scene.add(far); }
      prog(0.3, 'Paving the runway');
      W.box(0, 0.005, -22, 400, 0.02, 22, M.asphalt, { collide: false, texSize: 6 });
      W.box(-30, 0.006, -2, 14, 0.02, 20, M.asphalt, { collide: false, texSize: 6 });
      W.box(0, 0.006, 10, 150, 0.02, 12, M.asphalt, { collide: false, texSize: 6 });
      roadPaint(G, [[-200, -22, 200, -22, 0.3, true], [-200, -32.5, 200, -32.5, 0.2], [-200, -11.5, 200, -11.5, 0.2]], 0xe8e8e0);
      // runway lights
      const lightsG = new THREE.Group(); G.scene.add(lightsG);
      const bulbM = new THREE.MeshBasicMaterial({ color: 0xfff0c0 }), blueM = new THREE.MeshBasicMaterial({ color: 0x4a8aff });
      for (let x = -180; x <= 180; x += 12) for (const z of [-33.2, -10.8]) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.18, 6, 4), bulbM); b.position.set(x, 0.25, z); lightsG.add(b); }
      for (let x = -70; x <= 70; x += 10) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.14, 6, 4), blueM); b.position.set(x, 0.2, 3.6); lightsG.add(b); }
      const rlights = [];
      for (const x of [-60, -20, 20, 60]) { const l = new THREE.PointLight(0xffe8c0, 16, 30, 2); l.position.set(x, 6, -22); G.scene.add(l); rlights.push(l); }
      prog(0.45, 'Building hangars');
      building(W, -40, 32, 28, 20, 8, M.corr, { roofMat: M.rust, floorMat: M.floor, doors: { s: [0.3, 0.5, 0.7], e: [0.5] }, windows: {}, parapet: 0 });
      building(W, 0, 34, 20, 16, 7, M.corr, { roofMat: M.rust, floorMat: M.floor, doors: { s: [0.5], w: [0.5] }, windows: {}, parapet: 0 });
      building(W, 40, 26, 10, 8, 3.4, M.concrete, { roofMat: M.concrete, floorMat: M.floor, doors: { s: [0.5] }, windows: { e: [0.5], w: [0.5] } });
      const towerM = M.concrete.clone(); towerM.color.set(0xb8b4aa);
      W.box(40, 3.4, 26, 5, 12, 5, towerM, { collide: false });
      W.box(40, 15.4, 26, 8, 3.4, 8, new THREE.MeshStandardMaterial({ color: 0x182028, emissive: 0x8ad0ff, emissiveIntensity: 0.5, roughness: 0.2, metalness: 0.5 }), { collide: false });
      const beacon = new THREE.PointLight(0xffffff, 0, 60, 2); beacon.position.set(40, 20, 26); G.scene.add(beacon);
      for (const [x, z, l] of [[-40, 21, 1], [0, 25.5, 1], [40, 21.5, 0.6]]) { const p = new THREE.PointLight(0xffd8a0, 14 * l, 18, 2); p.position.set(x, 4, z); G.scene.add(p); }
      // fuel trucks, crates, sandbags
      vehicleWreck(G, M, -14, 14, 1.4, true, { burnt: false }); vehicleWreck(G, M, 22, 12, -0.3, false, { burnt: false });
      sandbagWall(W, M, 30, 18, 4); sandbagWall(W, M, -56, 18, 4); sandbagWall(W, M, 10, -2, 4);
      await Promise.all([W.prop('old_military_crate', -24, 20, { mat: 'wood' }), W.prop('wooden_crate_01', -22.8, 21, { mat: 'wood' }), W.prop('Barrel_01', 16, 22), W.prop('barrel_03', 17, 22.8), W.prop('propane_tank', -8, 22, { explosive: true }), W.prop('portable_generator', 44, 21.5, { rotY: 1.2 }), W.prop('utility_box_01', 44.6, 22.2)]);
      G._supplies = [V(-24, 0, 20), V(30, 0, 21)];
      G.pickups.add('ammo', V(-36, 0, 28)); G.pickups.add('grenade', V(-44, 0, 30));
      prog(0.6, 'Fuelling the plane');
      const plane = cargoPlane(G); plane.g.position.set(-64, 0, -22);
      const engines = plane.engines.map(local => {
        const c = W.addCollider(V(), V(), 'metal'); c.explosive = true; c.hp = 230; W.dynamic.push(c); c.local = local; c.fire = 0; return c;
      });
      const syncEngines = () => { for (const c of engines) { if (c.exploded) continue; const p = c.local.clone().applyMatrix4(plane.g.matrixWorld); c.min.set(p.x - 1.3, p.y - 1.1, p.z - 1.1); c.max.set(p.x + 1.3, p.y + 1.1, p.z + 1.1); } };
      plane.g.updateMatrixWorld(true); syncEngines();
      let planeT = -1, planeStopped = false, landed = false;
      // enemies
      const E = (x, z, zone, o = {}) => enemy(G, x, z, { zone, ...o });
      for (const [x, z, o] of [[-46, 30, {}], [-34, 34, {}], [-40, 24, { patrol: [[-50, 18], [-26, 18]] }], [-30, 38, { hold: true }], [-50, 36, {}], [-20, 24, {}]]) E(x, z, 'hangar', o);
      for (const [x, z, o] of [[38, 18, {}], [44, 20, {}], [40, 26, { hold: true }], [26, 16, { patrol: [[26, 16], [26, 0]] }]]) E(x, z, 'tower', o);
      for (const [x, z] of [[-50, -8], [-40, -14], [-60, -30], [-30, -28], [-20, -10]]) E(x, z, 'runway');
      const voss = ally(G, 60, 46, { name: 'VOSS', slot: 1, tint: 'night' }); voss.stayPut = true;
      const smoke = greenSmoke(G, V(60, 0, 45));
      const startHalo = G => {
        G.controller = new Skydive(G, { start: [-30, 700, -40], target: [60, 45], chuteAt: 170, onLand: (G, d) => { landed = true; voss.stayPut = false; voss.pos.set(G.player.pos.x + 2, 0, G.player.pos.z + 2); G.hud.toast(d < 15 ? 'PERFECT LANDING' : 'ON THE GROUND', 2); } });
      };
      return {
        spawn: V(60, 0, 42), spawnYaw: Math.PI * 0.6, exposure: 1.5,
        update: (G, dt) => {
          if (!landed || G.objIdx < 2) smoke(dt);
          beacon.intensity = lightsG.visible && (G.time % 1.6) < 0.15 ? 30 : 0;
          if (planeT >= 0 && !planeStopped) {
            planeT += dt;
            const x = -64 + 0.9 * planeT + 0.07 * planeT * planeT;
            plane.g.position.x = x;
            for (const p of plane.props) p.rotation.x += dt * 30;
            if (x > 86) { plane.g.position.y = (x - 86) * 0.4; if (!G.failed) G.failMission('Rask\'s plane took off with the warhead.'); }
          }
          plane.g.updateMatrixWorld(true); syncEngines();
          const dead = engines.filter(c => c.exploded);
          for (const c of dead) { const p = c.local.clone().applyMatrix4(plane.g.matrixWorld); if (Math.random() < dt * 20) G.effects.add.spawn(p.clone().add(V((Math.random() - 0.5), 0, (Math.random() - 0.5))), V(-2, 1.5, 0), { life: 0.6, size: 0.9, grow: -0.5, color: [1, 0.5, 0.15], alpha: 0.9 }); if (Math.random() < dt * 5) G.effects.smoke.spawn(p, V(-1, 1.6, 0), { life: 5, size: 1, grow: 1.5, color: [0.07, 0.07, 0.07], alpha: 0.5, drag: 0.3, spin: 0.3, fade: 2 }); }
        },
        introScene: {
          title: ['SKYFALL', 'Krasnaya Airfield · 23:40'],
          shots: [
            { from: [-120, 760, -120], to: [-60, 720, -70], look: [0, 0, 0], lookTo: [20, 0, 10], dur: 6, fov: 55 },
            { from: [-33, 704, -44], to: [-31, 701, -42], look: [60, 0, 45], dur: 3, fov: 70 },
          ],
          lines: [
            { at: 0.8, who: 'OVERLORD', text: 'Jumpmaster. Green light, green light. Go, go, go.' },
            { at: 4.5, who: 'VOSS', text: 'I\'m on the ground. Green smoke marks the LZ. Come to me, Ghost.' },
          ],
        },
        onIntroDone: G => { if (G.objIdx === 0 && !G.controller && !landed) startHalo(G); },
        outro: {
          shots: [
            { from: [plane.g.position.x - 14, 2.2, -16], to: [plane.g.position.x - 10, 1.9, -15], look: [plane.g.position.x - 4, 1.2, -20], dur: 8, fov: 48 },
            { from: [plane.g.position.x - 10, 1.9, -15], to: [plane.g.position.x - 9, 1.6, -15.5], look: [plane.g.position.x - 4, 0.6, -19.5], dur: 6, fov: 40 },
          ],
          lines: [
            { at: 0.5, who: 'RASK', text: 'Too late, Sergeant. Kessler has the other one. Iron Dawn, at the old Vanguard fortress.' },
            { at: 6, who: 'RASK', text: 'At sunrise it goes off, and the world will blame Vanguard for it.' },
            { at: 10.5, who: 'KESSLER', text: 'Loose ends, Viktor.' },
            { at: 13, who: 'OKAFOR', text: 'Sniper! Rask is down! Kessler is cleaning house.' },
          ],
          update: (G, t) => {
            if (!G._rask) { G._rask = enemy(G, plane.g.position.x - 4, -19.5, { zone: 'rask', hold: true, yaw: Math.PI / 2, tint: 'urban' }); G._rask.rifle && (G._rask.rifle.visible = false); }
            if (t > 11.2 && G._rask.alive) { audio.shot('sniper', V(plane.g.position.x + 60, 10, -60), false); G._rask.takeDamage(9999, V(-1, 0, 0.3).normalize(), { point: G._rask.headPos(V()), force: 5 }); }
          },
        },
        objectives: [
          { type: 'custom', text: 'HALO jump: steer to the green smoke', pos: V(60, 0, 45), restore: () => { landed = true; voss.stayPut = false; }, check: () => landed },
          { type: 'kill', text: 'Clear the hangar', filter: e => e.zone === 'hangar' },
          { type: 'interact', text: 'Kill the runway lights (tower power)', pos: V(42, 0, 24), radius: 2, label: 'Hold <b>[F]</b> to cut the power', time: 2.5, onDone: G => { lightsG.visible = false; rlights.forEach(l => { l.intensity = 0; }); if (!G._restoring) { G.hud.toast('RUNWAY DARK — NIGHT VISION [N]', 3); G.alertEnemies(V(0, 0, 0), 300); } } },
          {
            type: 'custom', text: 'Stop Rask\'s plane: destroy 2 engines', pos: plane.g.position, waypoint: false,
            onStart: G => { planeT = 0; G.hud.toast('RASK\'S PLANE IS ROLLING!', 3); },
            check: (G) => { const n = engines.filter(c => c.exploded).length; G.hud.setObjectiveCount(`Engines ${n}/2`); if (n >= 2) { planeStopped = true; return true; } return false; },
          },
          { type: 'reach', text: 'Take Rask at the cargo door', pos: V(0, 0, 0), radius: 4, onStart: (G, o) => { o.pos = V(plane.g.position.x - 6, 0, -17.5); } },
        ],
      };
    },
  },
  {
    id: 'irondawn', enemyWeapon: 'm4a1', name: 'IRON DAWN', location: 'Fort Varga, Zagoria', time: '05:12 Local', reverb: 'outdoor',
    briefing: 'Kessler has the last warhead inside Fort Varga, an old Vanguard training fortress. At sunrise he detonates it and the world blames Vanguard. Okafor, Voss and Hayes are with you. Blow the gate, silence the machine-gun towers and breach the keep. When the gate goes, the clock starts: you have five minutes to reach and disarm the warhead. Then find Kessler.',
    dogtag: V(30, 0, 18),
    radio: [
      { at: 0, who: 'HAYES', text: 'Gate charge first, Ghost. Once it blows, Kessler will start the timer.', delay: 2 },
      { at: 1, who: 'KESSLER', text: 'Reyes. You should have stayed dead.', delay: 1 },
      { at: 2, who: 'OKAFOR', text: 'Machine guns on both towers! Take them out!' },
      { at: 3, who: 'VOSS', text: 'Towers are down. The warhead is in the keep. Breach it.' },
      { at: 5, who: 'HAYES', text: 'There it is. Red wire, then blue. Don\'t rush it.' },
      { at: 6, who: 'OKAFOR', text: 'Warhead is safe. Kessler is at the helipad. His pilot is down. He\'s got nowhere to go.' },
    ],
    objectivesPreview: ['Blow the gate', 'Take the courtyard', 'Silence the machine-gun towers', 'Breach the keep', 'Clear the keep', 'Disarm the warhead', 'Confront Kessler'],
    intro: ['ACT IV — IRON DAWN', 'Fort Varga, Zagoria', 'Sgt. "Ghost" Reyes — Disavowed', 'Day 14, 05:12'],
    hint: 'Once the gate blows you have five minutes. Watch the timer above the objective.',
    ambience: [['wind', 0.45]],
    async build(G, prog) {
      setupEnvironment(G, { hdri: 'kloofendal_48d_partly_cloudy_puresky', sunDir: V(0.9, 0.12, 0.35), sunIntensity: 3.0, sunColor: 0xff9a5a, envIntensity: 0.7, fogColor: 0xb89c8a, fogDensity: 0.006, exposure: 1.05, skyTop: 0x4a5f88, skyHorizon: 0xffb080, skyGround: 0x6a5a50, clouds: 0.45, cloudColor: 0xffc0a0, skyBright: 1.1, hemi: 0.2, skyColor: 0xffc8a8, groundColor: 0x6a5a50, grade: { tint: 0xfff0e2, saturation: 1.02, contrast: 1.12 } });
      G.envExposure = 1.05; G.level.tint = 'urban';
      const M = await mats(); const W = G.world;
      W.bounds = { minX: -60, maxX: 60, minZ: -62, maxZ: 70 };
      await terrain(G, { tex: 'rocky_terrain_02', texSize: 6, flat: 80, hills: 55, mat: 'dirt', seed: 41, color: 0xb3a998 });
      prog(0.35, 'Building Fort Varga');
      const wallM = M.concrete.clone(); wallM.color.set(0xa8a49a);
      const WH = 6;
      // perimeter wall with a south gate (x = 0, width 5)
      W.box(-19, 0, 25, 33, WH, 1.6, wallM, { texSize: 3 }); W.box(19, 0, 25, 33, WH, 1.6, wallM, { texSize: 3 });
      W.box(0, 0, -45, 72, WH, 1.6, wallM, { texSize: 3 });
      W.box(-35.2, 0, -10, 1.6, WH, 70, wallM, { texSize: 3 }); W.box(35.2, 0, -10, 1.6, WH, 70, wallM, { texSize: 3 });
      W.box(0, WH - 1.4, 25, 5.5, 1.4, 1.8, wallM, { texSize: 2 });
      const gateM = M.rust.clone();
      const gate = new THREE.Mesh(new THREE.BoxGeometry(5, WH - 1.4, 0.3), gateM); gate.position.set(0, (WH - 1.4) / 2, 25); gate.castShadow = true; G.scene.add(gate);
      const gateCol = W.addCollider(V(-2.5, 0, 24.7), V(2.5, WH - 1.4, 25.3), 'metal');
      // machine-gun towers (NW and NE corners, plus gate towers)
      for (const [x, z] of [[-31, -41], [31, -41]]) { W.box(x, 0, z, 6, 9, 6, wallM, { texSize: 3 }); W.box(x, 9, z + 2.6, 6, 1, 0.4, wallM, { collide: false }); W.box(x, 9, z - 2.6, 6, 1, 0.4, wallM, { collide: false }); }
      for (const x of [-5.5, 5.5]) W.box(x, 0, 25, 4, 8, 4, wallM, { texSize: 3 });
      // the keep
      building(W, 0, -26, 22, 14, 4.2, wallM, { roofMat: M.concrete, floorMat: M.floor, doors: { s: [0.5] }, windows: { e: [0.5], w: [0.5], s: [0.2, 0.8] } });
      wallOpen(W, -11, -27, 11, -27, 4.2, 0.3, wallM, [{ at: 0.5, w: 1.6 }]);
      const bombM = new THREE.MeshStandardMaterial({ color: 0x3d4a3a, roughness: 0.5, metalness: 0.6 });
      const bomb = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 2.2, 16), bombM); bomb.rotation.z = Math.PI / 2; bomb.position.set(0, 0.9, -30.5); bomb.castShadow = true; G.scene.add(bomb);
      const bombLight = new THREE.PointLight(0xff2010, 4, 6, 2); bombLight.position.set(0, 1.6, -30.5); G.scene.add(bombLight);
      W.box(0, 0, -30.5, 2.6, 0.45, 1.2, M.darkMetal, { mat: 'metal' });
      table(G, M, 6, -31, 1.6, 0.8); laptop(G, 6, 0.79, -31, 0);
      // helipad with Kessler's helicopter
      W.box(22, 0.01, -30, 12, 0.04, 12, M.asphalt, { collide: false });
      roadPaint(G, [[19, -27, 19, -33, 0.4], [25, -27, 25, -33, 0.4], [19, -30, 25, -30, 0.4]], 0xf0f0e8);
      const heli = helicopter(G); heli.position.set(22, 0, -30); heli.rotation.y = -0.6; W.addCollider(V(19.5, 0, -32.5), V(24.5, 2.8, -27.5), 'metal');
      // courtyard cover
      sandbagWall(W, M, -12, 10, 4); sandbagWall(W, M, 12, 6, 4); sandbagWall(W, M, -20, -8, 3.5, false); sandbagWall(W, M, 18, -6, 3.5, false); sandbagWall(W, M, 0, -6, 5);
      vehicleWreck(G, M, -22, 12, 0.5, true, { burnt: false }); vehicleWreck(G, M, 24, 14, -1.2, false, { burnt: false });
      await Promise.all([W.prop('old_military_crate', -6, 14, { mat: 'wood' }), W.prop('wooden_military_crate', 8, 16, { mat: 'wood' }), W.prop('propane_tank', -26, -16, { explosive: true }), W.prop('propane_tank', 28, -14, { explosive: true }), W.prop('Barrel_01', 14, -18), W.prop('barrel_03', -14, -20)]);
      // approach outside the gate
      for (const [x, z, w, h, d] of [[-14, 46, 7, 2, 4], [12, 40, 6, 2.4, 5], [-4, 34, 5, 1.4, 3], [20, 56, 7, 2.6, 5], [-24, 58, 8, 3, 6]]) W.box(x, 0, z, w, h, d, M.rock, { mat: 'concrete', texSize: 3 });
      await scatter(G, 'namaqualand_boulder_02', spots(G, 14, { keep: [[0, 55, 6], [0, 30, 5]], clear: 2, x0: -58, x1: 58, z0: 30, z1: 68, scale: [0.8, 1.4] }), { collide: true, colRadius: 'auto', colHeight: 'auto', sink: 0.05 });
      G._supplies = [V(-6, 0, 14), V(8, 0, 16)];
      G.pickups.add('ammo', V(-4, 0, 36)); G.pickups.add('grenade', V(4, 0, 38));
      prog(0.6, 'Garrisoning the fort');
      const E = (x, z, zone, o = {}) => enemy(G, x, z, { zone, ...o });
      for (const [x, z] of [[-4, 30], [4, 31], [-14, 34]]) E(x, z, 'outer', { yaw: Math.PI });
      for (const [x, z, o] of [[-12, 8, {}], [12, 4, {}], [-20, -4, {}], [18, -2, {}], [0, -4, {}], [-26, 14, {}], [26, 10, {}], [-8, -12, {}], [8, -14, {}], [-4, 18, { hold: true }]]) E(x, z, 'courtyard', o);
      for (const [x, z] of [[-31, -40], [31, -40]]) E(x, z, 'nest', { y: 9, hold: true, hp: G.diff.hp * 3, yaw: Math.PI });
      for (const [x, z, y] of [[-6, -24, 0], [6, -23, 0], [0, -29, 0], [-7, -30, 0], [8, -28.5, 0]]) E(x, z, 'keep', { yaw: y });
      const route = [[0, 40], [0, 30], [0, 22], [0, 10], [0, -2], [0, -12], [0, -19], [18, -24]];
      const squad = [ally(G, -3, 56, { name: 'OKAFOR', route, slot: 1 }), ally(G, 3, 56, { name: 'VOSS', route, slot: 2 }), ally(G, 5, 58, { name: 'HAYES', route, slot: 3 })];
      const hold = n => squad.forEach(a => { a.holdAt = n; });
      hold(1);
      let gateBlown = false, clock = -1, kessler = null, choice = null;
      const blowGate = (quiet) => {
        if (gateBlown) return; gateBlown = true; W.removeCollider(gateCol); gate.visible = false;
        if (!quiet) { G.explode(V(0, 1.2, 25.6), 'frag', true, 2.2); G.alertEnemies(V(0, 0, 0), 200); }
        clock = 300;
      };
      const showChoice = on => {
        let el = document.getElementById('choice');
        if (!el) { el = document.createElement('div'); el.id = 'choice'; el.innerHTML = '<div class="q">KESSLER IS UNARMED</div><div class="opts"><span><b>1</b> ARREST HIM</span><span><b>2</b> PULL THE TRIGGER</span></div>'; G.hud.el.appendChild(el); }
        el.style.display = on ? 'block' : 'none';
      };
      G.ending = null;
      return {
        spawn: V(0, 0, 60), spawnYaw: 0, exposure: 1.05,
        update: (G, dt) => {
          bombLight.intensity = clock > 0 && !G.objectives[5]?.done && G.objIdx <= 5 ? ((G.time % 1) < 0.5 ? 6 : 0.5) : 0;
          if (clock > 0 && G.objIdx <= 5 && !G.completed) {
            clock -= dt;
            const m = Math.floor(Math.max(0, clock) / 60), s = Math.floor(Math.max(0, clock) % 60);
            G.hud.setObjectiveCount(`DETONATION ${m}:${String(s).padStart(2, '0')}`);
            if (clock <= 0 && !G.failed) { G.flashWhite?.(); G.failMission('The warhead detonated.'); }
          }
        },
        introScene: {
          title: ['IRON DAWN', 'Fort Varga · 05:12'],
          shots: [
            { from: [60, 30, 90], to: [30, 20, 70], look: [0, 4, -10], lookTo: [0, 4, 0], dur: 7, fov: 48 },
            { from: [-4, 1.7, 64], to: [-2, 1.7, 61], look: [0, 3, 25], dur: 4.5, fov: 55 },
          ],
          lines: [
            { at: 1, who: 'HAYES', text: 'Fort Varga. Where every one of us learned to be a soldier.' },
            { at: 6, who: 'OKAFOR', text: 'And where Kessler taught us. Let\'s finish this, Ghost.' },
          ],
        },
        outro: G => {
          const k = kessler, kp = k ? k.pos.clone() : V(20, 0, -26);
          const cam = kp.clone().add(V(-3.4, 1.7, 3.2));
          if (G.ending === 'execute') return {
            title: ['ENDING: IRON DAWN', 'Ghost disappeared. Black Tide never surfaced again.'],
            shots: [{ from: cam.toArray(), to: cam.clone().add(V(-1.5, 0.4, 1.5)).toArray(), look: kp.clone().add(V(0, 1, 0)).toArray(), dur: 12, fov: 45 }],
            lines: [
              { at: 1, who: 'OKAFOR', text: 'Ghost. It\'s done.' },
              { at: 4, who: 'HAYES', text: 'They\'ll call it murder. We\'ll call it Iron Dawn.' },
              { at: 8.5, who: 'VOSS', text: 'Come on. There\'s nobody left to go home to anyway.' },
            ],
          };
          return {
            title: ['ENDING: JUSTICE', 'Colonel Kessler was convicted of treason. Black Tide was dismantled.'],
            shots: [{ from: cam.toArray(), to: cam.clone().add(V(-1.5, 0.4, 1.5)).toArray(), look: kp.clone().add(V(0, 1, 0)).toArray(), dur: 14, fov: 45 }],
            lines: [
              { at: 1, who: 'KESSLER', text: 'You think a court will hold me, Sergeant?' },
              { at: 4.5, who: 'HAYES', text: 'It will. I have every flight, every payment, every call you ever made.' },
              { at: 10, who: 'OKAFOR', text: 'It\'s over, Ghost. Let\'s go home.' },
            ],
          };
        },
        objectives: [
          { type: 'interact', text: 'Plant the breaching charge on the main gate', pos: V(0, 0, 27), radius: 2, label: 'Hold <b>[F]</b> to plant the charge', time: 3, onDone: G => { if (G._restoring) blowGate(true); else { G.hud.toast('CHARGE SET — GET BACK', 2.5); setTimeout(() => blowGate(false), 3000); } } },
          { type: 'kill', text: 'Take the courtyard', filter: e => e.zone === 'courtyard' || e.zone === 'outer', onStart: () => hold(5), restore: () => { hold(5); blowGate(true); } },
          { type: 'kill', text: 'Silence the machine-gun towers', filter: e => e.zone === 'nest' },
          { type: 'custom', text: 'Breach the keep', pos: V(0, 0, -17.5), check: () => G._idDoor?.done, onStart: G => { hold(6); G._idDoor = G.addBreach({ x: 0, z: -19, horiz: true, zone: 'keep', out: [0, 1.2] }); } },
          { type: 'kill', text: 'Clear the keep', filter: e => e.zone === 'keep', onStart: () => hold(7) },
          { type: 'interact', text: 'Disarm the warhead', pos: V(0, 0, -29.4), radius: 1.8, label: 'Hold <b>[F]</b> to disarm the warhead', time: 8, onDone: G => { clock = -1; if (!G._restoring) G.hud.toast('WARHEAD DISARMED', 3); } },
          {
            type: 'custom', text: 'Confront Kessler at the helipad', pos: V(19, 0, -26),
            onStart: G => {
              hold(8);
              kessler = ally(G, 18.5, -26.5, { tint: 'urban', accuracy: 0, range: 0 });
              kessler.stayPut = true; kessler.yaw = Math.PI * 0.75; if (kessler.rifle) kessler.rifle.visible = false; kessler.isVIP = true;
            },
            check: (G) => {
              const near = G.player.pos.distanceTo(kessler.pos) < 6;
              showChoice(near && !choice);
              if (near && !choice) {
                if (G.input.pressed.has('Digit1') || G.input.pressed.has('Numpad1')) choice = 'arrest';
                if (G.input.pressed.has('Digit2') || G.input.pressed.has('Numpad2')) choice = 'execute';
                if (choice) {
                  showChoice(false); G.ending = choice;
                  if (choice === 'execute') { audio.shot('pistol', G.player.pos, true); kessler.friendly = false; kessler.takeDamage(9999, kessler.pos.clone().sub(G.player.pos).normalize(), { point: kessler.headPos(V()), force: 4 }); }
                  else { kessler.crouched = true; kessler.preferCrouch = true; }
                }
              }
              return !!choice;
            },
          },
        ],
      };
    },
  },
  {
    id: 'laststand', bonus: true, noSave: true, enemyWeapon: 'ak47', name: 'LAST STAND', location: 'Al-Qadir Province', time: '18:50 Local', reverb: 'outdoor',
    briefing: 'Your extraction helicopter went down. Hold the village until the QRF arrives. Survive five waves of increasingly aggressive hostiles. Resupply ammunition at the crate in the courtyard.',
    objectivesPreview: ['Survive 5 waves', 'Resupply at the ammo crate'],
    intro: ['LAST STAND', 'Al-Qadir Province', 'Sgt. "Ghost" Reyes — 1st Vanguard Battalion', 'Day 4, 18:50'],
    hint: 'Hold <b>[E]</b> at the glowing supply crate in the courtyard to resupply. Fallen enemies drop weapons and ammo.',
    ambience: [['wind', 0.35]],
    async build(G, prog) {
      setupEnvironment(G, { hdri: 'belfast_sunset_puresky', sunDir: V(0.9, 0.14, -0.4), sunIntensity: 3.4, sunColor: 0xff9a55, envIntensity: 0.8, fogColor: 0xa47f68, fogDensity: 0.006, exposure: 1.05, skyTop: 0x34466e, skyHorizon: 0xf29a60, skyGround: 0x5a4030, clouds: 0.4, cloudColor: 0xffc8a0, skyBright: 1.2, hemi: 0.2, skyColor: 0xffb48a, groundColor: 0x5a4030, grade: { tint: 0xffeedd, saturation: 1.05, contrast: 1.1 } });
      G.envExposure = 1.05; G.level.tint = 'desert';
      const M = await mats();
      prog(0.4, 'Building village');
      await desertVillage(G, M);
      const crate = V(-1, 0, 4);
      const W = { n: 0, active: false, spawned: 0, total: 5 };
      const sp = [[-60, 55], [60, 55], [-60, -70], [60, -70], [0, 66], [0, -80], [-62, 0], [62, 0]];
      const startWave = () => {
        W.n++; W.active = true; const count = 3 + W.n * 2;
        G.hud.toast(`WAVE ${W.n} / ${W.total}`, 3);
        for (let i = 0; i < count; i++) setTimeout(() => {
          if (G.completed || G.failed) return;
          const s = sp[(Math.random() * sp.length) | 0];
          const e = enemy(G, s[0] + (Math.random() - 0.5) * 6, s[1] + (Math.random() - 0.5) * 6, { state: 'combat', zone: 'wave' + W.n, hp: G.diff.hp * (1 + W.n * 0.08) });
          e.lastSeen = G.player.pos.clone(); e.lastSeenT = G.time; e.awareness = 1; e.speedMul = 1 + W.n * 0.06;
        }, i * 900);
        W.pending = count;
      };
      const addResupply = () => {};
      G.pickups.add('supply', crate);
      let breakT = 0;
      return {
        spawn: V(0, 0, 8), spawnYaw: 0, exposure: 1.05,
        objectives: [
          {
            type: 'custom', text: 'Survive the assault', waypointPos: null, waypoint: false,
            onStart: G => { addResupply(); setTimeout(startWave, 6000); breakT = 0; },
            check: (G, dt, o) => {
              const alive = G.enemies.list.filter(e => e.alive && e.zone && e.zone.startsWith('wave')).length;
              if (W.active) {
                G.hud.setObjectiveCount(`Wave ${W.n}/${W.total} — ${alive + Math.max(0, (W.pending || 0) - G.enemies.list.filter(e => e.zone === 'wave' + W.n).length)} hostiles`);
                const spawnedAll = G.enemies.list.filter(e => e.zone === 'wave' + W.n).length >= W.pending;
                if (spawnedAll && alive === 0) { W.active = false; breakT = 12; if (W.n < W.total) G.hud.toast(`WAVE ${W.n} CLEARED — RESUPPLY`, 3); }
              } else if (W.n > 0 && W.n < W.total) {
                breakT -= dt; G.hud.setObjectiveCount(`Next wave in ${Math.ceil(breakT)}s`);
                if (breakT <= 0) startWave();
              }
              return W.n >= W.total && !W.active;
            },
          },
        ],
      };
    },
  },
];

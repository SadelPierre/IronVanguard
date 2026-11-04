// Missions & level geometry
import * as THREE from 'three';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { pbr, loadTexture } from './assets.js';
import { setupEnvironment, terrain, building, wallOpen, containerMat, fbm } from './env.js';
import { audio } from './audio.js';
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
export const LEVELS = [
  {
    id: 'bootcamp', name: 'BOOT CAMP', location: 'Camp Hornet, Nevada', time: '09:20 Local', reverb: 'outdoor',
    briefing: 'Before you deploy, prove you can handle your loadout. Run the qualification course: hip-fire, long-range marksmanship, grenade handling and close-quarters clearing. The clock is running, soldier.',
    objectivesPreview: ['Hip-fire qualification', 'Long-range marksmanship', 'Grenade handling', 'Clear the shoot house', 'Sprint to the finish'],
    intro: ['BOOT CAMP', 'Camp Hornet, Nevada', 'Sgt. "Ghost" Reyes — 1st Vanguard Battalion', 'Day 1, 09:20'],
    hint: 'Move: <b>WASD</b> &nbsp; Look: <b>Mouse/Arrows</b> &nbsp; Fire: <b>Click or E</b> &nbsp; Aim: <b>RMB or Z</b> &nbsp; Sprint: <b>Shift</b> &nbsp; Reload: <b>R</b>',
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
    briefing: 'Insurgent commander "The Jackal" is coordinating attacks from a walled village in the desert. Infiltrate the village from the south, eliminate all hostile forces, and recover the intelligence laptop from his compound. Exfil by helicopter at the northern LZ.',
    objectivesPreview: ['Infiltrate the village', 'Eliminate hostile forces', 'Recover the intel', 'Reach the LZ for extraction'],
    intro: ['OPERATION DUST DEVIL', 'Al-Qadir Province', 'Sgt. "Ghost" Reyes — 1st Vanguard Battalion', 'Day 4, 13:05'],
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
    briefing: 'Intel from the Jackal\'s laptop points to a weapons smuggling ring operating out of a dockyard. Two arms caches are hidden among the containers. Plant charges on both, get clear of the blast and fight your way to the extraction boat at the pier.',
    objectivesPreview: ['Plant C4 on cache Alpha', 'Plant C4 on cache Bravo', 'Get clear before detonation', 'Fight to the extraction boat'],
    intro: ['OPERATION IRON HARBOR', 'Port Sector 9, Baltic Coast', 'Sgt. "Ghost" Reyes — 1st Vanguard Battalion', 'Day 6, 19:42'],
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
    briefing: 'A captured Vanguard intelligence officer, Lt. Hayes, is being held in a safehouse at the north end of Old Town. Move up the street under cover of darkness, clear the safehouse and free the hostage. Do NOT shoot the hostage. Escort Hayes back to the extraction vehicle. Night vision (N) and flashlight (T) are available.',
    objectivesPreview: ['Locate the safehouse', 'Clear the safehouse', 'Free Lt. Hayes', 'Escort Hayes to the vehicle'],
    intro: ['OPERATION MIDNIGHT', 'Old Town, Zagoria', 'Sgt. "Ghost" Reyes — 1st Vanguard Battalion', 'Day 9, 02:15'],
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
    id: 'laststand', noSave: true, enemyWeapon: 'ak47', name: 'LAST STAND', location: 'Al-Qadir Province', time: '18:50 Local', reverb: 'outdoor',
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

// Weapon definitions, attachments and first-person viewmodels
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { loadModel, loadTexture } from './assets.js';

export const WEAPONS = {
  m4a1: { name: 'M4A1', type: 'Assault Rifle', slot: 'primary', sound: 'ar', damage: [32, 22], range: [30, 70], head: 2.0, rpm: 800, mag: 30, reserve: 180, reload: 2.1, reloadEmpty: 2.6, auto: true, modes: ['auto', 'semi'], ads: 0.22, zoom: 1.25, hip: 3.2, adsSpread: 0.15, recoil: [0.9, 0.35], kick: 0.022, move: 0.95, model: 'm4', sightY: 0.092, desc: 'Versatile 5.56 carbine. Controllable recoil, fast handling.' },
  ak47: { name: 'AK-47', type: 'Assault Rifle', slot: 'primary', sound: 'ak', damage: [40, 28], range: [28, 65], head: 2.0, rpm: 600, mag: 30, reserve: 150, reload: 2.4, reloadEmpty: 2.9, auto: true, modes: ['auto', 'semi'], ads: 0.26, zoom: 1.25, hip: 3.6, adsSpread: 0.2, recoil: [1.35, 0.55], kick: 0.03, move: 0.93, model: 'ak', sightY: 0.08, desc: 'Hard-hitting 7.62. Heavy recoil, rewards burst fire.' },
  mp5: { name: 'MP5', type: 'Submachine Gun', slot: 'primary', sound: 'smg', damage: [28, 16], range: [15, 40], head: 1.8, rpm: 850, mag: 30, reserve: 210, reload: 1.8, reloadEmpty: 2.3, auto: true, modes: ['auto', 'semi'], ads: 0.16, zoom: 1.15, hip: 2.4, adsSpread: 0.25, recoil: [0.55, 0.3], kick: 0.016, move: 1.05, model: 'mp5', sightY: 0.085, desc: 'Fast and accurate up close. Great on the move.' },
  m870: { name: 'M870', type: 'Shotgun', slot: 'primary', sound: 'shotgun', damage: [22, 5], range: [7, 22], head: 1.3, rpm: 70, mag: 6, reserve: 36, reload: 0.55, reloadEmpty: 0.55, shellReload: true, pellets: 9, pelletSpread: 4.0, auto: false, modes: ['pump'], ads: 0.22, zoom: 1.1, hip: 4.0, adsSpread: 3.0, recoil: [4.0, 1.0], kick: 0.07, move: 0.97, model: 'shotgun', sightY: 0.07, desc: 'Pump-action 12 gauge. Devastating in close quarters.' },
  m249: { name: 'M249', type: 'Light Machine Gun', slot: 'primary', sound: 'lmg', damage: [34, 25], range: [35, 80], head: 1.8, rpm: 750, mag: 100, reserve: 200, reload: 4.5, reloadEmpty: 5.0, auto: true, modes: ['auto'], ads: 0.38, zoom: 1.25, hip: 4.5, adsSpread: 0.3, recoil: [0.95, 0.6], kick: 0.025, move: 0.85, model: 'lmg', sightY: 0.137, desc: 'Belt-fed suppression. Huge capacity, slow handling.' },
  bolt762: { name: 'Bolt-Action 7.62', type: 'Sniper Rifle', slot: 'primary', sound: 'sniper', damage: [120, 95], range: [80, 200], head: 3.0, rpm: 45, mag: 5, reserve: 30, reload: 3.0, reloadEmpty: 3.4, bolt: true, auto: false, modes: ['bolt'], ads: 0.4, zoom: 5.5, hip: 7, adsSpread: 0.0, recoil: [4.5, 0.8], kick: 0.08, move: 0.88, model: 'sniper', scope: true, sightY: 0.075, desc: 'One shot, one kill. Scoped 7.62 with breath control (hold Shift).' },
  // secondaries
  m9: { name: 'P38 Service Pistol', type: 'Pistol', slot: 'secondary', sound: 'pistol', damage: [34, 20], range: [15, 35], head: 2.0, rpm: 400, mag: 8, reserve: 48, reload: 1.5, reloadEmpty: 1.9, auto: false, modes: ['semi'], ads: 0.14, zoom: 1.1, hip: 2.4, adsSpread: 0.3, recoil: [1.6, 0.4], kick: 0.04, move: 1.08, model: 'pistol', sightY: 0.064, desc: 'Reliable 9mm sidearm. Quick to draw.' },
  d50: { name: 'D50 Magnum', type: 'Pistol', slot: 'secondary', sound: 'magnum', damage: [70, 40], range: [18, 40], head: 2.0, rpm: 180, mag: 7, reserve: 28, reload: 1.9, reloadEmpty: 2.3, auto: false, modes: ['semi'], ads: 0.18, zoom: 1.15, hip: 3.2, adsSpread: 0.4, recoil: [4.0, 0.9], kick: 0.08, move: 1.04, model: 'magnum', sightY: 0.078, desc: '.50 calibre hand cannon. Brutal recoil.' },
};

export const ATTACHMENTS = {
  optic: { iron: { name: 'Iron Sights' }, reddot: { name: 'Red Dot', zoom: 1.1 }, holo: { name: 'Holographic', zoom: 1.12 }, acog: { name: '4x ACOG', zoom: 2.4, adsMul: 1.25 } },
  muzzle: { none: { name: 'None' }, suppressor: { name: 'Suppressor', quiet: true, rangeMul: 0.8 }, compensator: { name: 'Compensator', recoilSide: 0.6 } },
  under: { none: { name: 'None' }, grip: { name: 'Vertical Grip', recoilMul: 0.78 }, laser: { name: 'Laser Sight', hipMul: 0.6 } },
  mag: { std: { name: 'Standard Mag' }, ext: { name: 'Extended Mag', magMul: 1.5, reloadMul: 1.12 } },
};

export const LETHALS = { frag: { name: 'Frag Grenade', count: 2 }, c4: { name: 'Semtex', count: 2, sticky: true } };
export const TACTICALS = { flash: { name: 'Flashbang', count: 2 }, smoke: { name: 'Smoke Grenade', count: 1 } };
export const PERKS = {
  stopping: { name: 'Stopping Power', desc: '+25% bullet damage' },
  sleight: { name: 'Sleight of Hand', desc: '35% faster reloads' },
  jugg: { name: 'Juggernaut', desc: '+40% max health' },
  lightweight: { name: 'Lightweight', desc: '+12% movement speed, faster sprint-out' },
  steady: { name: 'Steady Aim', desc: '35% tighter hip-fire spread' },
  scavenger: { name: 'Scavenger', desc: 'Pick up ammo from fallen enemies' },
};

export function allowedAttachments(id) {
  const w = WEAPONS[id];
  if (w.scope) return { optic: [], muzzle: ['none', 'suppressor'], under: [], mag: ['std', 'ext'] };
  if (w.slot === 'secondary') return { optic: ['iron', 'reddot'], muzzle: ['none', 'suppressor'], under: ['none', 'laser'], mag: ['std', 'ext'] };
  if (w.model === 'shotgun') return { optic: ['iron', 'reddot', 'holo'], muzzle: ['none'], under: ['none', 'grip', 'laser'], mag: ['std', 'ext'] };
  return { optic: ['iron', 'reddot', 'holo', 'acog'], muzzle: ['none', 'suppressor', 'compensator'], under: ['none', 'grip', 'laser'], mag: ['std', 'ext'] };
}

// final stats after attachments + perks
export function computeStats(id, att = {}, perks = []) {
  const w = { ...WEAPONS[id], id };
  const A = ATTACHMENTS;
  const o = A.optic[att.optic] || {}, mz = A.muzzle[att.muzzle] || {}, u = A.under[att.under] || {}, mg = A.mag[att.mag] || {};
  w.zoom = w.scope ? w.zoom : (o.zoom || 1) * w.zoom;
  w.ads *= o.adsMul || 1;
  w.suppressed = !!mz.quiet;
  if (mz.rangeMul) w.range = w.range.map(v => v * mz.rangeMul);
  w.recoil = [w.recoil[0] * (u.recoilMul || 1), w.recoil[1] * (u.recoilMul || 1) * (mz.recoilSide || 1)];
  w.hip *= (u.hipMul || 1) * (perks.includes('steady') ? 0.65 : 1);
  w.laser = att.under === 'laser';
  w.mag = Math.round(w.mag * (mg.magMul || 1));
  const rm = (mg.reloadMul || 1) * (perks.includes('sleight') ? 0.65 : 1);
  w.reload *= rm; w.reloadEmpty *= rm;
  w.dmgMul = perks.includes('stopping') ? 1.25 : 1;
  w.optic = w.scope ? 'scope' : (att.optic || 'iron');
  return w;
}

// ---------------------------------------------------------------- materials
let MATS = null;
export async function gunMaterials() {
  if (MATS) return MATS;
  const [nor, arm, wood, woodN] = await Promise.all([
    loadTexture('tex/metal_plate_nor.jpg'), loadTexture('tex/metal_plate_arm.jpg'),
    loadTexture('tex/brown_planks_03_diff.jpg', { srgb: true }), loadTexture('tex/brown_planks_03_nor.jpg'),
  ]);
  const n2 = nor.clone(); n2.repeat.set(3, 3); n2.needsUpdate = true;
  MATS = {
    metal: new THREE.MeshStandardMaterial({ color: 0x232528, metalness: 0.85, roughness: 0.38, normalMap: n2, normalScale: new THREE.Vector2(0.15, 0.15) }),
    metalWorn: new THREE.MeshStandardMaterial({ color: 0x3a3b3d, metalness: 0.9, roughness: 0.3, normalMap: n2, normalScale: new THREE.Vector2(0.2, 0.2) }),
    polymer: new THREE.MeshStandardMaterial({ color: 0x18191b, metalness: 0.05, roughness: 0.62, normalMap: n2, normalScale: new THREE.Vector2(0.35, 0.35) }),
    tan: new THREE.MeshStandardMaterial({ color: 0x8a7656, metalness: 0.05, roughness: 0.7, normalMap: n2, normalScale: new THREE.Vector2(0.3, 0.3) }),
    wood: new THREE.MeshStandardMaterial({ color: 0xb06a3a, map: wood, normalMap: woodN, normalScale: new THREE.Vector2(0.4, 0.4), metalness: 0, roughness: 0.45 }),
    brass: new THREE.MeshStandardMaterial({ color: 0xc9a046, metalness: 1, roughness: 0.25 }),
    glass: new THREE.MeshStandardMaterial({ color: 0x1b2a33, metalness: 1, roughness: 0.04, transparent: true, opacity: 0.35 }),
    sleeve: new THREE.MeshStandardMaterial({ map: camoTexture(), metalness: 0, roughness: 0.92, normalMap: n2, normalScale: new THREE.Vector2(0.8, 0.8) }),
    glove: new THREE.MeshStandardMaterial({ color: 0x2a2724, metalness: 0, roughness: 0.75 }),
    skin: new THREE.MeshStandardMaterial({ color: 0xa87a5a, metalness: 0, roughness: 0.6 }),
    laser: new THREE.MeshBasicMaterial({ color: 0xff2020, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }),
  };
  return MATS;
}

function camoTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 256; const g = c.getContext('2d');
  g.fillStyle = '#5b5a44'; g.fillRect(0, 0, 256, 256);
  const cols = ['#3f4430', '#6d6648', '#2c2a22', '#7a7458'];
  for (let i = 0; i < 90; i++) {
    g.fillStyle = cols[i % cols.length]; g.beginPath();
    const x = Math.random() * 256, y = Math.random() * 256, r = 8 + Math.random() * 22;
    for (let k = 0; k < 9; k++) { const a = k / 9 * Math.PI * 2, rr = r * (0.6 + Math.random() * 0.6); g.lineTo(x + Math.cos(a) * rr * 1.6, y + Math.sin(a) * rr * 0.7); }
    g.fill();
  }
  for (let i = 0; i < 4000; i++) { g.fillStyle = `rgba(0,0,0,${Math.random() * 0.12})`; g.fillRect(Math.random() * 256, Math.random() * 256, 1, 2); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(1, 2); return t;
}

function reticleTexture(kind) {
  const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d');
  g.translate(64, 64);
  const glow = (r, a) => { const gr = g.createRadialGradient(0, 0, 0, 0, 0, r); gr.addColorStop(0, `rgba(255,60,40,${a})`); gr.addColorStop(1, 'rgba(255,0,0,0)'); g.fillStyle = gr; g.beginPath(); g.arc(0, 0, r, 0, 7); g.fill(); };
  g.strokeStyle = 'rgba(255,50,30,1)'; g.fillStyle = 'rgba(255,80,60,1)';
  if (kind === 'reddot') { glow(10, 1); g.beginPath(); g.arc(0, 0, 3, 0, 7); g.fill(); }
  else if (kind === 'holo') { g.lineWidth = 3; g.beginPath(); g.arc(0, 0, 40, 0, 7); g.stroke(); glow(8, 1); g.beginPath(); g.arc(0, 0, 3, 0, 7); g.fill(); for (const a of [0, 1, 2, 3]) { g.save(); g.rotate(a * Math.PI / 2); g.fillRect(-2, 40, 4, 12); g.restore(); } }
  else if (kind === 'acog') { g.lineWidth = 4; g.beginPath(); g.moveTo(-18, 14); g.lineTo(0, -4); g.lineTo(18, 14); g.stroke(); g.fillRect(-1.5, -4, 3, 60); glow(6, 0.8); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

// geometry helpers (barrel along -Z)
function rb(w, h, l, m, x, y, z, rad = 0.006) { const me = new THREE.Mesh(new RoundedBoxGeometry(w, h, l, 2, rad), m); me.position.set(x, y, z); return me; }
function bx(w, h, l, m, x, y, z) { const me = new THREE.Mesh(new THREE.BoxGeometry(w, h, l), m); me.position.set(x, y, z); return me; }
function cy(r, len, m, x, y, z, seg = 20, r2) { const me = new THREE.Mesh(new THREE.CylinderGeometry(r2 ?? r, r, len, seg), m); me.rotation.x = Math.PI / 2; me.position.set(x, y, z); return me; }
function add(g, ...ms) { for (const m of ms) g.add(m); return ms[0]; }

function curvedMag(m, len, w, d, curve, segs = 6) {
  const g = new THREE.Group(); const sl = len / segs; let y = 0, z = 0, a = 0;
  for (let i = 0; i < segs; i++) {
    const s = bx(w, sl * 1.06, d, m, 0, y - Math.cos(a) * sl / 2, z - Math.sin(a) * sl / 2);
    s.rotation.x = a; g.add(s);
    y -= Math.cos(a) * sl; z -= Math.sin(a) * sl; a += curve / segs;
  }
  return g;
}

function buildArms(M, rightHand, leftHand) {
  const g = new THREE.Group();
  const limb = (a, b, r1, r2, mat) => {
    const len = a.distanceTo(b);
    const me = new THREE.Mesh(new THREE.CylinderGeometry(r2, r1, len, 14), mat);
    me.position.copy(a).add(b).multiplyScalar(0.5);
    me.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
    g.add(me);
  };
  const hand = (p, mat, rotZ) => { const h = new THREE.Mesh(new RoundedBoxGeometry(0.05, 0.085, 0.095, 2, 0.02), mat); h.position.copy(p); h.rotation.z = rotZ; g.add(h); return h; };
  // right arm: hand at grip, elbow down/back/right
  const rE = new THREE.Vector3(0.16, -0.22, 0.28), rW = rightHand.clone().add(new THREE.Vector3(0.02, -0.03, 0.06));
  limb(rW, rE, 0.034, 0.04, M.sleeve); limb(rE, rE.clone().add(new THREE.Vector3(0.12, -0.12, 0.35)), 0.05, 0.055, M.sleeve);
  limb(rW, rightHand, 0.03, 0.032, M.glove);
  hand(rightHand, M.glove, 0.1);
  if (leftHand) {
    const lE = new THREE.Vector3(-0.16, -0.22, leftHand.z + 0.28), lW = leftHand.clone().add(new THREE.Vector3(-0.02, -0.035, 0.06));
    limb(lW, lE, 0.034, 0.04, M.sleeve); limb(lE, lE.clone().add(new THREE.Vector3(-0.1, -0.15, 0.35)), 0.05, 0.055, M.sleeve);
    limb(lW, leftHand, 0.03, 0.032, M.glove);
    hand(leftHand, M.glove, -0.3);
  }
  return g;
}

// returns { group, muzzle, eject, mag, slide, sightY, railY, railZ, leftHand }
async function buildModel(id, att) {
  const w = WEAPONS[id]; const M = await gunMaterials();
  const g = new THREE.Group(); const P = { group: g, sightY: w.sightY, railY: 0.075, railZ: -0.02 };
  const muzzle = new THREE.Object3D(), eject = new THREE.Object3D(); g.add(muzzle, eject);
  let leftHand = new THREE.Vector3(0, -0.035, -0.3), rightHand = new THREE.Vector3(0, -0.07, 0.07);
  switch (w.model) {
    case 'm4': {
      add(g, rb(0.052, 0.058, 0.25, M.metal, 0, 0.035, -0.05));
      add(g, rb(0.048, 0.05, 0.19, M.metal, 0, -0.012, -0.02));
      add(g, bx(0.024, 0.012, 0.23, M.metal, 0, 0.069, -0.045));
      for (let i = 0; i < 12; i++) add(g, bx(0.026, 0.004, 0.008, M.metal, 0, 0.076, -0.15 + i * 0.019));
      add(g, rb(0.06, 0.062, 0.31, M.polymer, 0, 0.032, -0.33, 0.012));
      add(g, bx(0.024, 0.01, 0.3, M.metal, 0, 0.068, -0.33));
      add(g, cy(0.0105, 0.26, M.metal, 0, 0.03, -0.6));
      add(g, cy(0.016, 0.07, M.metal, 0, 0.03, -0.75));
      add(g, bx(0.02, 0.05, 0.02, M.metal, 0, 0.075, -0.47)); add(g, bx(0.004, 0.02, 0.004, M.metal, 0, 0.098, -0.47));
      add(g, cy(0.017, 0.18, M.metal, 0, 0.03, 0.16));
      add(g, rb(0.045, 0.085, 0.17, M.polymer, 0, 0.005, 0.29, 0.01));
      const grip = add(g, rb(0.03, 0.11, 0.045, M.polymer, 0, -0.075, 0.075, 0.008)); grip.rotation.x = -0.3;
      add(g, bx(0.006, 0.006, 0.07, M.metal, 0, -0.045, 0.02));
      add(g, bx(0.012, 0.012, 0.03, M.metal, 0, 0.06, 0.09)); // charging handle
      P.mag = curvedMag(M.metal, 0.17, 0.024, 0.062, 0.32); P.mag.position.set(0, -0.035, -0.075); g.add(P.mag);
      if (att.optic === 'iron') { add(g, bx(0.024, 0.03, 0.03, M.metal, 0, 0.088, 0.06)); add(g, bx(0.006, 0.012, 0.006, M.metal, 0, 0.105, 0.06)); }
      P.railY = 0.076; P.railZ = -0.02; muzzle.position.set(0, 0.03, -0.79); eject.position.set(0.03, 0.04, -0.02);
      leftHand.set(0, -0.025, -0.33);
      break;
    }
    case 'ak': {
      add(g, rb(0.05, 0.065, 0.3, M.metal, 0, 0.02, -0.04));
      add(g, rb(0.046, 0.025, 0.28, M.metalWorn, 0, 0.06, -0.03, 0.01));
      add(g, rb(0.055, 0.055, 0.22, M.wood, 0, 0.018, -0.33, 0.012));
      add(g, rb(0.035, 0.03, 0.2, M.wood, 0, 0.065, -0.31, 0.01));
      add(g, cy(0.011, 0.3, M.metal, 0, 0.022, -0.58));
      add(g, cy(0.01, 0.25, M.metal, 0, 0.065, -0.42));
      add(g, bx(0.018, 0.045, 0.018, M.metal, 0, 0.05, -0.68)); add(g, bx(0.004, 0.02, 0.004, M.metal, 0, 0.08, -0.68));
      add(g, cy(0.015, 0.05, M.metal, 0, 0.022, -0.74));
      add(g, bx(0.02, 0.02, 0.06, M.metal, 0, 0.075, -0.17)); add(g, bx(0.012, 0.008, 0.01, M.metal, 0, 0.087, -0.17));
      const st = add(g, rb(0.042, 0.075, 0.26, M.wood, 0, -0.01, 0.24, 0.012)); st.rotation.x = 0.12;
      const grip = add(g, rb(0.03, 0.1, 0.045, M.wood, 0, -0.06, 0.07, 0.008)); grip.rotation.x = -0.35;
      add(g, bx(0.006, 0.006, 0.07, M.metal, 0, -0.03, 0.02));
      P.mag = curvedMag(M.metalWorn, 0.2, 0.026, 0.07, 0.65, 8); P.mag.position.set(0, -0.012, -0.08); g.add(P.mag);
      P.railY = 0.074; P.railZ = -0.05; muzzle.position.set(0, 0.022, -0.78); eject.position.set(0.03, 0.04, -0.02);
      leftHand.set(0, -0.02, -0.33);
      break;
    }
    case 'mp5': {
      add(g, rb(0.045, 0.06, 0.32, M.metal, 0, 0.03, -0.1, 0.012));
      add(g, rb(0.05, 0.05, 0.17, M.polymer, 0, 0.028, -0.32, 0.02));
      add(g, cy(0.01, 0.08, M.metal, 0, 0.03, -0.44));
      add(g, cy(0.014, 0.03, M.metal, 0, 0.03, -0.475));
      add(g, cy(0.006, 0.08, M.metal, 0, 0.073, -0.38)); add(g, cy(0.012, 0.012, M.metal, 0, 0.083, -0.4));
      add(g, bx(0.03, 0.03, 0.03, M.metal, 0, 0.075, 0.03)); add(g, bx(0.006, 0.012, 0.004, M.metal, 0, 0.096, 0.035));
      add(g, bx(0.014, 0.012, 0.25, M.metal, 0.02, -0.0, 0.17)); add(g, bx(0.014, 0.012, 0.25, M.metal, -0.02, -0.0, 0.17));
      add(g, rb(0.045, 0.07, 0.025, M.polymer, 0, -0.01, 0.3));
      const grip = add(g, rb(0.03, 0.1, 0.045, M.polymer, 0, -0.06, 0.04, 0.008)); grip.rotation.x = -0.25;
      P.mag = curvedMag(M.metal, 0.17, 0.02, 0.045, 0.45); P.mag.position.set(0, 0.0, -0.14); g.add(P.mag);
      P.railY = 0.074; P.railZ = -0.08; muzzle.position.set(0, 0.03, -0.5); eject.position.set(0.03, 0.04, -0.1);
      leftHand.set(0, -0.012, -0.32); rightHand.set(0, -0.055, 0.04);
      break;
    }
    case 'shotgun': {
      add(g, rb(0.048, 0.06, 0.22, M.metal, 0, 0.025, -0.04));
      add(g, cy(0.013, 0.55, M.metal, 0, 0.04, -0.42));
      add(g, cy(0.012, 0.45, M.metal, 0, 0.006, -0.36));
      P.pump = add(g, rb(0.05, 0.045, 0.17, M.wood, 0, 0.008, -0.32, 0.014));
      add(g, bx(0.006, 0.01, 0.006, M.brass, 0, 0.06, -0.68));
      const st = add(g, rb(0.042, 0.08, 0.3, M.wood, 0, -0.02, 0.24, 0.015)); st.rotation.x = 0.15;
      const grip = add(g, rb(0.03, 0.09, 0.05, M.wood, 0, -0.04, 0.09, 0.01)); grip.rotation.x = -0.6;
      add(g, bx(0.006, 0.006, 0.06, M.metal, 0, -0.02, 0.02));
      P.mag = new THREE.Object3D(); g.add(P.mag);
      P.railY = 0.056; P.railZ = -0.05; muzzle.position.set(0, 0.04, -0.7); eject.position.set(0.03, 0.03, -0.03);
      leftHand.set(0, -0.02, -0.32); rightHand.set(0, -0.06, 0.09);
      break;
    }
    case 'lmg': {
      add(g, rb(0.07, 0.08, 0.34, M.metal, 0, 0.03, -0.05));
      add(g, rb(0.075, 0.03, 0.25, M.metal, 0, 0.085, -0.03, 0.008));
      add(g, rb(0.07, 0.06, 0.2, M.polymer, 0, 0.03, -0.3, 0.01));
      add(g, cy(0.013, 0.4, M.metal, 0, 0.03, -0.55));
      add(g, cy(0.02, 0.07, M.metal, 0, 0.03, -0.77));
      add(g, bx(0.012, 0.1, 0.02, M.metal, 0.012, -0.02, -0.6)); add(g, bx(0.012, 0.1, 0.02, M.metal, -0.012, -0.02, -0.6));
      add(g, bx(0.02, 0.04, 0.02, M.metal, 0, 0.11, -0.62)); add(g, bx(0.005, 0.015, 0.005, M.metal, 0, 0.13, -0.62));
      add(g, bx(0.03, 0.035, 0.03, M.metal, 0, 0.12, 0.08)); add(g, bx(0.008, 0.012, 0.005, M.metal, 0, 0.141, 0.08));
      add(g, cy(0.04, 0.03, M.metal, 0, 0.11, -0.1)); // carry handle hint
      add(g, rb(0.05, 0.09, 0.22, M.polymer, 0, 0.0, 0.25));
      const grip = add(g, rb(0.032, 0.11, 0.045, M.polymer, 0, -0.06, 0.08, 0.008)); grip.rotation.x = -0.3;
      P.mag = new THREE.Group(); P.mag.add(rb(0.09, 0.12, 0.13, M.tan, -0.03, -0.07, 0, 0.015)); P.mag.position.set(0, 0, -0.09); g.add(P.mag);
      P.railY = 0.1; P.railZ = -0.05; muzzle.position.set(0, 0.03, -0.81); eject.position.set(0.04, 0.04, -0.05);
      leftHand.set(0, -0.03, -0.3); rightHand.set(0, -0.06, 0.085);
      break;
    }
    case 'sniper': {
      const gl = await loadModel('bolt_action_rifle_7_62');
      const m = gl.scene.clone(true); m.rotation.y = Math.PI / 2; m.scale.setScalar(1.0);
      m.position.set(0, -0.01, -0.12);
      m.traverse(o => { if (o.isMesh) { o.castShadow = false; o.material = o.material.clone(); o.material.envMapIntensity = 1.2; } });
      g.add(m);
      P.mag = new THREE.Object3D(); P.mag.position.set(0, -0.06, -0.15); g.add(P.mag);
      P.bolt = new THREE.Object3D(); g.add(P.bolt);
      muzzle.position.set(0, 0.04, -0.73); eject.position.set(0.03, 0.05, -0.1);
      leftHand.set(0, -0.03, -0.32); rightHand.set(0, -0.07, 0.12);
      P.sightY = 0.075;
      break;
    }
    case 'pistol': {
      const gl = await loadModel('service_pistol');
      const src = gl.scene;
      const keep = ['service_pistol_pistol_a', 'service_pistol_slide_a', 'service_pistol_hammer_a', 'service_pistol_trigger_a', 'service_pistol_magazine_loaded'];
      const holder = new THREE.Group(); holder.rotation.y = Math.PI / 2; holder.position.set(0, -0.03, -0.05);
      src.updateMatrixWorld(true);
      for (const n of keep) {
        const o = src.getObjectByName(n); if (!o) continue;
        const c = o.clone(); c.applyMatrix4(o.parent.matrixWorld); holder.add(c);
        if (n.includes('slide')) P.slide = c;
        if (n.includes('magazine')) { c.position.x += 0.08; c.position.y += 0.0; P.mag = c; }
      }
      g.add(holder);
      muzzle.position.set(0, 0.035, -0.23); eject.position.set(0.02, 0.04, -0.06);
      leftHand = new THREE.Vector3(-0.025, -0.05, -0.02); rightHand.set(0.0, -0.06, 0.02);
      P.sightY = 0.053; P.railY = 0.05; P.railZ = -0.08; P.pistol = true;
      break;
    }
    case 'magnum': {
      P.slide = add(g, rb(0.032, 0.035, 0.27, M.metalWorn, 0, 0.045, -0.08, 0.006));
      add(g, rb(0.03, 0.03, 0.22, M.metal, 0, 0.015, -0.06));
      add(g, bx(0.006, 0.012, 0.006, M.metal, 0, 0.069, -0.2)); add(g, bx(0.02, 0.012, 0.006, M.metal, 0, 0.069, 0.04));
      const grip = add(g, rb(0.033, 0.12, 0.055, M.polymer, 0, -0.05, 0.03, 0.01)); grip.rotation.x = -0.2;
      add(g, bx(0.005, 0.005, 0.05, M.metal, 0, -0.012, -0.02));
      P.mag = bx(0.02, 0.09, 0.03, M.metal, 0, -0.05, 0.03); g.add(P.mag); P.mag.visible = false;
      muzzle.position.set(0, 0.045, -0.23); eject.position.set(0.02, 0.05, -0.05);
      leftHand = new THREE.Vector3(-0.025, -0.06, 0.0); rightHand.set(0.0, -0.065, 0.04);
      P.sightY = 0.077; P.railY = 0.063; P.railZ = -0.12; P.pistol = true;
      break;
    }
  }
  // ---------- attachments ----------
  if (!w.scope && att.optic && att.optic !== 'iron') {
    const o = new THREE.Group(); o.position.set(0, P.railY, P.railZ);
    let h;
    const ret = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: reticleTexture(att.optic), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
    if (att.optic === 'reddot') {
      h = 0.03; o.add(bx(0.024, 0.012, 0.04, M.metal, 0, 0.006, 0));
      const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.017, 0.017, 0.045, 24, 1, true), M.metal); tube.rotation.x = Math.PI / 2; tube.position.set(0, h, 0); o.add(tube);
      const tm = M.metal.clone(); tm.side = THREE.DoubleSide; tube.material = tm;
      ret.scale.setScalar(0.03); ret.position.set(0, h, -0.02);
    } else if (att.optic === 'holo') {
      h = 0.034; o.add(rb(0.035, 0.02, 0.07, M.polymer, 0, 0.01, 0.01, 0.005));
      o.add(bx(0.006, 0.04, 0.05, M.polymer, 0.023, 0.035, -0.01)); o.add(bx(0.006, 0.04, 0.05, M.polymer, -0.023, 0.035, -0.01)); o.add(bx(0.052, 0.006, 0.05, M.polymer, 0, 0.056, -0.01));
      ret.scale.setScalar(0.05); ret.position.set(0, h, -0.03);
    } else if (att.optic === 'acog') {
      h = 0.042; o.add(bx(0.024, 0.02, 0.06, M.metal, 0, 0.01, 0));
      const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.019, 0.022, 0.13, 24, 1, true), M.metal.clone()); tube.material.side = THREE.DoubleSide; tube.rotation.x = Math.PI / 2; tube.position.set(0, h, 0); o.add(tube);
      const lens = new THREE.Mesh(new THREE.CircleGeometry(0.019, 24), M.glass); lens.position.set(0, h, -0.06); o.add(lens);
      ret.scale.setScalar(0.03); ret.position.set(0, h, -0.055);
    }
    o.add(ret); g.add(o); P.sightY = P.railY + h; P.reticle = ret;
  }
  if (att.muzzle === 'suppressor') {
    const s = cy(0.02, 0.17, M.metal, 0, muzzle.position.y, muzzle.position.z - 0.08, 24); g.add(s); muzzle.position.z -= 0.17;
  } else if (att.muzzle === 'compensator') {
    const s = cy(0.017, 0.05, M.metalWorn, 0, muzzle.position.y, muzzle.position.z - 0.02, 8); g.add(s); muzzle.position.z -= 0.04;
  }
  if (att.under === 'grip' && !P.pistol) {
    const gr = rb(0.026, 0.08, 0.03, M.polymer, 0, -0.025, leftHand.z - 0.04, 0.008); g.add(gr);
    leftHand.set(0, -0.065, leftHand.z - 0.04);
  }
  if (att.under === 'laser') {
    const lz = P.pistol ? -0.15 : leftHand.z - 0.1;
    g.add(rb(0.025, 0.025, 0.05, M.polymer, 0.0, P.pistol ? -0.005 : -0.02, lz, 0.005));
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.0012, 0.0012, 30, 6, 1, true), M.laser);
    beam.rotation.x = Math.PI / 2; beam.position.set(0, P.pistol ? -0.005 : -0.02, lz - 15); g.add(beam); P.laser = beam;
  }
  if (att.mag === 'ext' && P.mag && w.model !== 'lmg' && w.model !== 'shotgun') P.mag.scale.y = 1.35;
  P.arms = buildArms(M, rightHand, leftHand);
  g.add(P.arms);
  P.muzzle = muzzle; P.eject = eject; P.leftHand = leftHand;
  P.magHome = P.mag ? P.mag.position.clone() : null;
  P.slideHome = P.slide ? P.slide.position.clone() : null;
  P.pumpHome = P.pump ? P.pump.position.clone() : null;
  g.traverse(o => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; o.frustumCulled = false; } });
  return P;
}

export async function buildViewmodel(id, att) { return buildModel(id, att || {}); }

// simple third-person rifle used by enemies (barrel along -Z, origin at grip)
export async function buildThirdPersonRifle(kind = 'ak') {
  const M = await gunMaterials(); const g = new THREE.Group();
  if (kind === 'ak') {
    g.add(rb(0.05, 0.07, 0.32, M.metal, 0, 0.03, -0.08), rb(0.055, 0.055, 0.22, M.wood, 0, 0.025, -0.36), cy(0.011, 0.3, M.metal, 0, 0.03, -0.6), rb(0.04, 0.08, 0.26, M.wood, 0, 0.0, 0.2));
    const mag = curvedMag(M.metalWorn, 0.18, 0.024, 0.06, 0.6, 5); mag.position.set(0, 0.0, -0.12); g.add(mag);
  } else {
    g.add(rb(0.05, 0.07, 0.32, M.metal, 0, 0.03, -0.08), rb(0.058, 0.06, 0.26, M.polymer, 0, 0.03, -0.36), cy(0.011, 0.25, M.metal, 0, 0.03, -0.6), rb(0.045, 0.085, 0.2, M.polymer, 0, 0.0, 0.2));
    const mag = curvedMag(M.metal, 0.16, 0.022, 0.055, 0.3, 4); mag.position.set(0, 0.0, -0.1); g.add(mag);
  }
  g.add(rb(0.03, 0.1, 0.04, M.polymer, 0, -0.05, 0.02));
  const muzzle = new THREE.Object3D(); muzzle.position.set(0, 0.03, -0.76); g.add(muzzle);
  g.userData.muzzle = muzzle;
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; } });
  return g;
}

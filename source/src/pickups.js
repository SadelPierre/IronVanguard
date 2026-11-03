// Battlefield pickups: dropped enemy weapons, ammo, grenades and resupply crates
import * as THREE from 'three';
import { WEAPONS } from './weapons.js';
import { loadModel } from './assets.js';
import { audio } from './audio.js';
import { keyName } from './input.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const COLORS = { ammo: 0xffd34d, grenade: 0xff8a3d, weapon: 0xe8f2ff, supply: 0x7dff9a };

export class Pickups {
  constructor(G) {
    this.G = G; this.list = []; this.hold = 0; this.focus = null;
    this.glowMat = {};
    for (const [k, c] of Object.entries(COLORS)) {
      const m = new THREE.SpriteMaterial({ map: G.effects.tex.soft, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.55 });
      m.color.set(c).multiplyScalar(1.6); this.glowMat[k] = m;
    }
  }

  async init() {
    this.ammoModel = (await loadModel('ammo_box')).scene;
    this.crateModel = (await loadModel('old_military_crate')).scene;
    const gm = new THREE.MeshStandardMaterial({ color: 0x3b4530, roughness: 0.6, metalness: 0.4 });
    const nade = new THREE.Group();
    for (const dx of [-0.06, 0.06]) { const s = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 10), gm); s.scale.set(1, 1.25, 1); s.position.set(dx, 0.055, 0); s.castShadow = true; nade.add(s); }
    this.nadeModel = nade;
  }

  add(type, pos, data = {}) {
    const g = new THREE.Group(); g.position.copy(pos); g.position.y = Math.max(pos.y, 0);
    let model;
    if (type === 'ammo') { model = this.ammoModel.clone(true); model.scale.setScalar(1.4); }
    else if (type === 'grenade') model = this.nadeModel.clone(true);
    else if (type === 'supply') { model = this.crateModel.clone(true); model.scale.setScalar(0.8); }
    else if (type === 'weapon') {
      model = this.G.enemies.rifleTemplate.clone(true);
      model.rotation.set(0, Math.random() * 6.28, Math.PI / 2); model.position.y = 0.06;
    }
    model.traverse(o => { if (o.isMesh) { o.castShadow = true; } });
    g.add(model);
    const glow = new THREE.Sprite(this.glowMat[type]); glow.scale.setScalar(type === 'supply' ? 2.2 : 1.1); glow.position.y = 0.25; g.add(glow);
    this.G.scene.add(g);
    const p = { type, g, model, glow, pos: g.position, data, t: Math.random() * 6, life: type === 'supply' ? Infinity : 90, cooldown: 0 };
    this.list.push(p);
    // cap loose drops
    const loose = this.list.filter(q => q.type !== 'supply');
    if (loose.length > 40) this.remove(loose[0]);
    return p;
  }

  remove(p) { const i = this.list.indexOf(p); if (i >= 0) this.list.splice(i, 1); this.G.scene.remove(p.g); if (this.focus === p) this.focus = null; }

  // called when an enemy dies
  dropFrom(e) {
    if (e.hostage || e.friendly) return;
    const base = e.pos.clone();
    const id = this.G.enemies.weaponId;
    const w = WEAPONS[id];
    this.add('weapon', base.clone().add(V((Math.random() - 0.5) * 0.8, 0, (Math.random() - 0.5) * 0.8)), { id, ammo: Math.ceil(w.mag * (0.4 + Math.random() * 0.6)), reserve: w.mag * (1 + ((Math.random() * 2) | 0)) });
    const r = Math.random();
    if (r < 0.45) this.add('ammo', base.clone().add(V(0.7, 0, 0.3)));
    else if (r < 0.65) this.add('grenade', base.clone().add(V(-0.6, 0, 0.4)));
  }

  canUseAmmo(P) { return P.weapons.some(w => w.reserve < Math.floor(w.st.reserve * 1.5)); }

  update(dt, interactShown) {
    const G = this.G, P = G.player, I = G.input;
    let best = null, bd = 1.7;
    for (let i = this.list.length - 1; i >= 0; i--) {
      const p = this.list[i];
      p.t += dt; p.life -= dt; p.cooldown = Math.max(0, p.cooldown - dt);
      if (p.life <= 0) { this.remove(p); continue; }
      if (p.type !== 'weapon' && p.type !== 'supply') { p.model.rotation.y += dt * 1.2; p.model.position.y = 0.08 + Math.sin(p.t * 2.5) * 0.04; }
      p.glow.material.opacity = (p.type === 'supply' && p.cooldown > 0) ? 0.1 : 0.4 + Math.sin(p.t * 3) * 0.15;
      if (!P.alive) continue;
      const d = Math.hypot(P.pos.x - p.pos.x, P.pos.z - p.pos.z);
      if (Math.abs(P.pos.y - p.pos.y) > 1.6) continue;
      // auto-collect small items
      if (d < 1.3 && p.type === 'ammo' && this.canUseAmmo(P)) {
        for (const w of P.weapons) w.reserve = Math.min(Math.floor(w.st.reserve * 1.5), w.reserve + w.st.mag * (w.st.pellets ? 2 : 1));
        audio.play('magIn', { vol: 0.7 }); G.hud.pickupMsg('+ AMMO'); this.remove(p); continue;
      }
      if (d < 1.3 && p.type === 'grenade' && (P.grenades.lethal < 4 || P.grenades.tactical < 3)) {
        P.grenades.lethal = Math.min(4, P.grenades.lethal + 1); P.grenades.tactical = Math.min(3, P.grenades.tactical + 1);
        audio.play('pin', { vol: 0.6 }); G.hud.pickupMsg('+ GRENADES'); this.remove(p); continue;
      }
      if (p.type === 'weapon') {
        const own = P.weapons.find(w => w.id === p.data.id);
        if (own && d < 1.3) {
          if (own.reserve < Math.floor(own.st.reserve * 1.5)) {
            own.reserve = Math.min(Math.floor(own.st.reserve * 1.5), own.reserve + p.data.ammo + p.data.reserve);
            audio.play('magIn', { vol: 0.7 }); G.hud.pickupMsg(`+ ${WEAPONS[p.data.id].name} AMMO`); this.remove(p);
          }
          continue;
        }
      }
      if ((p.type === 'weapon' || (p.type === 'supply' && p.cooldown <= 0)) && d < bd) { bd = d; best = p; }
    }
    // hold-to-use for weapon swaps and supply crates
    if (best !== this.focus) { this.focus = best; this.hold = 0; }
    if (best && !interactShown) {
      const key = keyName(I.binds.interact?.[0]);
      const label = best.type === 'weapon' ? `Hold <b>[${key}]</b> to swap for <b>${WEAPONS[best.data.id].name}</b>` : `Hold <b>[${key}]</b> to resupply ammo &amp; grenades`;
      if (I.act('interact')) this.hold += dt; else this.hold = 0;
      const need = best.type === 'weapon' ? 0.35 : 1.0;
      G.hud.setInteract(label, Math.min(1, this.hold / need));
      if (this.hold >= need) {
        this.hold = 0;
        if (best.type === 'supply') {
          P.refillAmmo(99); P.grenades.lethal = Math.max(P.grenades.lethal, 2); P.grenades.tactical = Math.max(P.grenades.tactical, 2);
          best.cooldown = 25; audio.play('magIn', { vol: 0.8 }); audio.play('pin', { vol: 0.4 }); G.hud.pickupMsg('RESUPPLIED');
        } else {
          const b = best; this.remove(b);
          P.swapWeapon(b.data.id, b.data.ammo, b.data.reserve).then(old => {
            if (old) this.add('weapon', P.pos.clone().add(V(0, 0, 0)), { id: old.id, ammo: old.ammo, reserve: old.reserve, playerDrop: true });
          });
        }
      }
    }
    return !!best;
  }

  clear() { for (const p of [...this.list]) this.remove(p); }
}

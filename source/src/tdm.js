// Team Deathmatch vs bots: you + 4 Vanguard squadmates against 6 Black Tide contractors.
// Everyone respawns. First team to the score limit (or the higher score when time runs out) wins.
import * as THREE from 'three';
import { audio } from './audio.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

export class TDM {
  constructor(G, cfg) {
    this.G = G; this.cfg = cfg;
    this.limit = cfg.limit || 40; this.time = cfg.time || 600;
    this.score = { a: 0, b: 0 }; this.done = false; this.winner = null;
    this.spawnA = cfg.spawnA.map(p => V(p[0], 0, p[1])); this.spawnB = cfg.spawnB.map(p => V(p[0], 0, p[1]));
    this.queue = []; this.thinkT = 0; this.deathsP = 0; this.respawnT = 0;
    G.enemies.tdm = true;
    for (let i = 0; i < (cfg.allies ?? 4); i++) this.spawnAlly(i, true);
    for (let i = 0; i < (cfg.enemies ?? 6); i++) this.spawnEnemy(true);
  }

  // pick the spawn point farthest from the other team
  pickSpawn(list, foes) {
    let best = list[0], bd = -1;
    for (const p of list) {
      let d = 1e9; for (const f of foes) d = Math.min(d, f.distanceTo(p));
      d += Math.random() * 8;
      if (d > bd) { bd = d; best = p; }
    }
    return best.clone().add(V((Math.random() - 0.5) * 3, 0, (Math.random() - 0.5) * 3));
  }
  foesOfA() { return this.G.enemies.list.filter(e => e.alive && !e.friendly && !e.hostage).map(e => e.pos); }
  foesOfB() { const P = this.G.player; return [...(P.alive ? [P.pos] : []), ...this.G.enemies.list.filter(e => e.alive && e.friendly).map(e => e.pos)]; }

  spawnAlly(i, first) {
    const p = first ? this.spawnA[i % this.spawnA.length].clone().add(V(2 * (i - 2), 0, 1.5)) : this.pickSpawn(this.spawnA, this.foesOfA());
    const e = this.G.enemies.spawn({ pos: p, yaw: this.cfg.yawA ?? 0, tint: 'woodland', friendly: true, name: null, hp: 100 });
    Object.assign(e, { stopToFight: true, routeSpeed: 4.2, accuracy: 0.12, dmgMul: 0.6, squadSlot: i % 4, engageRange: 60, tdmSlot: i });
    e._tdm = true;
    return e;
  }
  spawnEnemy(first) {
    const G = this.G, p = first ? this.spawnB[(Math.random() * this.spawnB.length) | 0].clone().add(V((Math.random() - 0.5) * 6, 0, (Math.random() - 0.5) * 6)) : this.pickSpawn(this.spawnB, this.foesOfB());
    const e = G.enemies.spawn({ pos: p, yaw: this.cfg.yawB ?? Math.PI, tint: G.level.tint, zone: 'tdm', state: 'combat' });
    e.awareness = 1; e._tdm = true;
    return e;
  }

  // keep bots moving toward the fight
  think() {
    const G = this.G, P = G.player, E = G.enemies.list;
    const enemies = E.filter(e => e.alive && !e.friendly && !e.hostage), allies = E.filter(e => e.alive && e.friendly);
    const targetsB = [...(P.alive ? [P] : []), ...allies];
    for (const e of enemies) {
      if (e.seesPlayer || e.allyTarget || !targetsB.length) continue;
      let t = targetsB[0], bd = 1e9; for (const c of targetsB) { const d = c.pos.distanceTo(e.pos); if (d < bd) { bd = d; t = c; } }
      e.state = 'combat'; e.awareness = 1;
      e.lastSeen = t.pos.clone().add(V((Math.random() - 0.5) * 10, 0, (Math.random() - 0.5) * 10)); e.lastSeenT = G.time - 2;
    }
    for (const a of allies) {
      if (!enemies.length) break;
      let t = enemies[0], bd = 1e9; for (const c of enemies) { const d = c.pos.distanceTo(a.pos); if (d < bd) { bd = d; t = c; } }
      const goal = t.pos.clone().add(V((Math.random() - 0.5) * 8, 0, (Math.random() - 0.5) * 8));
      a.stayPut = false; a.route = [[goal.x, goal.z]]; a.routeIdx = 0; a.holdAt = 1;
    }
  }

  onPlayerDeath() {
    if (this.done) return;
    this.score.b++; this.deathsP++; this.respawnT = 4;
    this.G.hud.toast('KILLED — RESPAWNING', 3);
    this.checkEnd();
  }

  respawnPlayer() {
    const G = this.G, P = G.player;
    const p = this.pickSpawn(this.spawnA, this.foesOfA());
    P.spawn(p, this.cfg.yawA ?? 0); P.damageFlash = 0; P.flash = 0;
    for (const w of P.weapons) { w.ammo = w.st.mag; w.reserve = w.st.reserve; }
    P.grenades.lethal = 2; P.grenades.tactical = 2;
    P.godMode = true; setTimeout(() => { P.godMode = false; }, 2500);
    audio.play('objective', { vol: 0.4, reverb: 0 });
  }

  update(dt) {
    if (this.done) return;
    const G = this.G, P = G.player;
    this.time -= dt;
    // score deaths
    for (const e of G.enemies.list) {
      if (e.alive || e._counted || !e._tdm) continue;
      e._counted = true; e._deadT = 0;
      if (e.friendly) { this.score.b++; this.queue.push({ t: 5, ally: true, slot: e.tdmSlot }); }
      else { this.score.a++; this.queue.push({ t: 4.5, ally: false }); }
    }
    // clear old bodies so the scene doesn't fill up
    for (const e of G.enemies.list) if (!e.alive && e._counted) { e._deadT += dt; if (e._deadT > 12 && !e._gone) { e._gone = true; G.scene.remove(e.model); if (e.rifle) G.scene.remove(e.rifle); } }
    G.enemies.list = G.enemies.list.filter(e => !e._gone);
    if (G.enemies.allies) G.enemies.allies = G.enemies.allies.filter(e => !e._gone);
    // respawns
    for (const q of this.queue) q.t -= dt;
    for (const q of this.queue.filter(q => q.t <= 0)) { if (q.ally) this.spawnAlly(q.slot ?? 0); else this.spawnEnemy(); }
    this.queue = this.queue.filter(q => q.t > 0);
    if (!P.alive && this.respawnT > 0) { this.respawnT -= dt; G.hud.setObjectiveCount(`Respawning in ${Math.ceil(this.respawnT)}…`); if (this.respawnT <= 0) this.respawnPlayer(); }
    this.thinkT -= dt; if (this.thinkT <= 0) { this.thinkT = 2.5; this.think(); }
    if (P.alive) {
      const m = Math.floor(Math.max(0, this.time) / 60), s = Math.floor(Math.max(0, this.time) % 60);
      G.hud.setObjectiveCount(`VANGUARD ${this.score.a}  ·  BLACK TIDE ${this.score.b}  ·  ${m}:${String(s).padStart(2, '0')}`);
    }
    this.checkEnd();
  }

  checkEnd() {
    if (this.done) return;
    if (this.score.a >= this.limit || this.score.b >= this.limit || this.time <= 0) {
      this.done = true;
      this.winner = this.score.a > this.score.b ? 'a' : this.score.b > this.score.a ? 'b' : 'draw';
    }
  }
}

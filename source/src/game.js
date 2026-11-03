// Game controller: level lifecycle, combat resolution, grenades, objectives
import * as THREE from 'three';
import { World } from './world.js';
import { Effects } from './effects.js';
import { Player } from './player.js';
import { EnemyManager, DIFFICULTY } from './enemies.js';
import { updateSun } from './env.js';
import { audio } from './audio.js';
import { LEVELS } from './levels.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

export class Game {
  constructor(engine, input, hud, ui, settings) {
    this.engine = engine; this.input = input; this.hud = hud; this.ui = ui; this.settings = settings;
    this.state = 'menu'; this.time = 0; this.paused = false;
    this.grenades = []; this.interactables = []; this.objectives = []; this.objIdx = 0;
    hud.G = this;
  }

  async loadLevel(id, loadout, difficulty, onProgress = () => {}) {
    const def = LEVELS.find(l => l.id === id);
    this.levelDef = def; this.loadout = loadout;
    this.diff = DIFFICULTY[difficulty] || DIFFICULTY.regular; this.diffName = difficulty;
    this.disposeLevel();
    onProgress(0.05, 'Preparing battlefield');
    const scene = this.scene = new THREE.Scene();
    // fresh viewmodel scene (lights/env are per level)
    this.engine.vmScene = new THREE.Scene();
    this.world = new World(scene);
    this.effects = new Effects(scene, this.engine.vmScene);
    this.effects.onShellBounce = p => { if (p.distanceTo(this.player.pos) < 6) audio.play('shell', { pos: p, vol: 0.25, rate: 1.6, reverb: 0 }); };
    this.enemies = new EnemyManager(this);
    this.player = new Player(this);
    this.grenades = []; this.interactables = []; this.objIdx = 0; this.time = 0; this.levelTime = 0;
    this.failed = false; this.completed = false; this.killCount = 0; this.godMode = false;
    this.level = { night: !!def.night, def };
    onProgress(0.15, 'Loading soldiers');
    await this.enemies.init();
    onProgress(0.3, 'Building ' + def.name);
    const L = await def.build(this, onProgress);
    this.level = { ...this.level, ...L };
    this.objectives = L.objectives;
    this.world.buildNav(0.8);
    onProgress(0.85, 'Issuing equipment');
    await this.player.setLoadout(loadout);
    this.player.spawn(L.spawn, L.spawnYaw || 0);
    this.engine.setScene(scene);
    this.engine.camera.fov = this.settings.fov; this.engine.camera.far = L.far || 1500; this.engine.camera.updateProjectionMatrix();
    // night extras
    if (def.night) {
      const fl = this.flashlight = new THREE.SpotLight(0xfff2dd, 0, 45, 0.42, 0.45, 1.6);
      fl.castShadow = this.engine.quality !== 'low'; fl.shadow.mapSize.set(1024, 1024); fl.shadow.bias = -0.0005;
      scene.add(fl); scene.add(fl.target);
    } else this.flashlight = null;
    // pre-compile shaders so first shots don't hitch
    onProgress(0.95, 'Compiling shaders');
    this.player.updateCamera(0.016);
    try { await this.engine.renderer.compileAsync(scene, this.engine.camera); } catch (e) {}
    this.engine.render(0.016);
    try {
      audio.setEnvironment(def.reverb || 'outdoor');
      audio.stopLoops();
      for (const [n, v] of def.ambience || []) audio.loop(n, v);
    } catch (e) { console.warn('audio setup failed', e); }
    this.startObjective(0);
    this.state = 'playing';
    onProgress(1, 'Ready');
  }

  disposeLevel() {
    if (this.enemies) this.enemies.clear();
    if (this.scene) {
      this.scene.traverse(o => { if (o.geometry && !o.isSkinnedMesh) o.geometry.dispose?.(); });
    }
    this.scene = null; this.sky = null; this.sun = null;
  }

  // ---------------------------------------------------------------- combat
  bullet(origin, dir, st, isPlayer) {
    const wh = this.world.raycast(origin, dir, 400);
    const maxD = wh ? wh.dist : 400;
    const eh = this.enemies.raycast(origin, dir, maxD);
    if (eh) {
      const e = eh.enemy;
      if (e.hostage) { this.effects.blood(eh.point, dir); this.failMission('You shot the hostage.'); return { point: eh.point }; }
      const [r0, r1] = st.range, d = eh.dist;
      const fall = d <= r0 ? 1 : d >= r1 ? 0 : 1 - (d - r0) / (r1 - r0);
      let dmg = (st.damage[1] + (st.damage[0] - st.damage[1]) * fall) * (st.dmgMul || 1);
      const head = eh.part === 'head';
      dmg *= head ? st.head : eh.part === 'leg' || eh.part === 'arm' ? 0.8 : 1;
      const killed = this.damageEnemy(e, dmg, head, dir, eh.point);
      return { enemy: e, head, killed, point: eh.point };
    }
    if (wh) {
      this.effects.impact(wh.point, wh.normal, wh.mat);
      const m = wh.mat === 'metal' ? 'metal' : wh.mat === 'wood' ? 'wood' : ['dirt', 'sand', 'grass', 'ground'].includes(wh.mat) ? 'dirt' : 'concrete';
      if (wh.dist < 60) audio.play('hit_' + m, { pos: wh.point, vol: 0.45, reverb: 0.1 });
      const c = wh.collider;
      if (c.target && !c.down) this.hitTarget(c);
      if (c.explosive && !c.exploded) { c.hp -= st.damage[0]; if (c.hp <= 0) this.explodeProp(c); }
      return { point: wh.point };
    }
    return null;
  }

  damageEnemy(e, dmg, head, dir, point) {
    this.effects.blood(point, dir);
    audio.play('hit_flesh', { pos: point, vol: 0.7, reverb: 0 });
    const killed = e.takeDamage(dmg, dir);
    if (killed) {
      this.killCount++; this.player.stats.kills++; if (head) this.player.stats.headshots++;
      this.hud.killfeed(head ? 'HEADSHOT' : 'KILL', head ? 150 : 100);
      audio.play('kill', { vol: 0.35, reverb: 0 });
      if (this.player.perks.includes('scavenger')) this.player.refillAmmo(0.5);
      this.onEnemyKilled?.(e);
    }
    return killed;
  }

  alertEnemies(pos, radius, source) { this.enemies.alert(pos, radius, source); }

  hitTarget(c) {
    c.down = true; this.targetHits = (this.targetHits || 0) + 1;
    audio.play('hit_metal', { pos: c.mesh.position, vol: 0.9 });
    this.hud.hitmarker(false, true);
    c.noRay = true; c.noCollide = true;
    const m = c.mesh; m.userData.fall = 0;
    this.fallingTargets = this.fallingTargets || []; this.fallingTargets.push(m);
    this.onTargetHit?.(c);
  }

  explodeProp(c) {
    c.exploded = true; this.world.removeCollider(c);
    if (c.mesh) c.mesh.visible = false;
    this.explode(c.mesh ? c.mesh.position.clone() : c.min.clone().add(c.max).multiplyScalar(0.5), 'frag', true, 1.3);
  }

  spawnGrenade(type, pos, vel, byPlayer) {
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 10), new THREE.MeshStandardMaterial({ color: type === 'flash' ? 0x555a50 : type === 'smoke' ? 0x707a70 : type === 'c4' ? 0x6b6650 : 0x3b4530, roughness: 0.6, metalness: 0.4 }));
    body.scale.set(1, 1.25, 1); g.add(body);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.03, 8), new THREE.MeshStandardMaterial({ color: 0x777777, metalness: 1, roughness: 0.3 })); cap.position.y = 0.06; g.add(cap);
    g.traverse(o => { if (o.isMesh) o.castShadow = true; });
    g.position.copy(pos); this.scene.add(g);
    this.grenades.push({ type, mesh: g, pos: pos.clone(), vel: vel.clone(), fuse: type === 'flash' ? 1.6 : type === 'smoke' ? 1.8 : type === 'c4' ? 2.5 : 3.0, byPlayer, stuck: false, bounces: 0 });
  }

  updateGrenades(dt) {
    for (let i = this.grenades.length - 1; i >= 0; i--) {
      const g = this.grenades[i];
      g.fuse -= dt;
      if (!g.stuck) {
        g.vel.y -= 20 * dt * 0.75;
        const step = g.vel.length() * dt;
        if (step > 0) {
          const dir = g.vel.clone().normalize();
          const hit = this.world.raycast(g.pos, dir, step + 0.05);
          if (hit) {
            g.pos.copy(hit.point).addScaledVector(hit.normal, 0.05);
            if (g.type === 'c4') { g.stuck = true; g.vel.set(0, 0, 0); }
            else {
              const vn = hit.normal.clone().multiplyScalar(g.vel.dot(hit.normal));
              g.vel.sub(vn.multiplyScalar(1.45)).multiplyScalar(0.55);
              if (g.bounces++ < 4 && g.vel.length() > 1) audio.play('bounce', { pos: g.pos, vol: 0.5 });
              if (hit.normal.y > 0.5 && g.vel.length() < 0.8) { g.vel.set(0, 0, 0); g.stuck = true; }
            }
          } else g.pos.addScaledVector(g.vel, dt);
        }
        g.mesh.position.copy(g.pos); g.mesh.rotation.x += dt * 8; g.mesh.rotation.z += dt * 5;
      }
      if (!g.byPlayer && g.pos.distanceTo(this.player.pos) < 9) this.hud.grenadeIndicator(g.pos);
      if (g.fuse <= 0) {
        this.scene.remove(g.mesh); this.grenades.splice(i, 1);
        this.explode(g.pos, g.type, g.byPlayer);
      }
    }
  }

  explode(pos, type, byPlayer, scale = 1) {
    const P = this.player;
    if (type === 'smoke') { this.effects.smokeGrenade(pos); audio.play('bounce', { pos, vol: 0.6, rate: 0.5 }); return; }
    if (type === 'flash') {
      audio.play('flashbang', { pos, vol: 1.2, reverb: 0.5 });
      this.effects.flashLight(pos.clone().add(V(0, 0.5, 0)), 300, 0xffffff, 0.15);
      for (let i = 0; i < 12; i++) this.effects.smoke.spawn(pos, V((Math.random() - 0.5) * 2, Math.random(), (Math.random() - 0.5) * 2), { life: 2.5, size: 1, grow: 1, color: [0.85, 0.85, 0.85], alpha: 0.35, drag: 1.5, fade: 2 });
      this.enemies.flash(pos, 16);
      const eye = P.eyePos(V()); const d = eye.distanceTo(pos);
      if (d < 18 && this.world.lineOfSight(eye, pos.clone().add(V(0, 0.2, 0)))) {
        const facing = P.forward(V()).dot(pos.clone().sub(eye).normalize());
        const amt = (1 - d / 18) * (facing > 0.3 ? 1 : 0.45);
        P.flash = Math.max(P.flash, amt * 1.6); audio.play('tinnitus', { vol: amt * 0.5, reverb: 0 }); this.muffleT = amt * 4;
      }
      this.alertEnemies(pos, 30);
      if (this.level.onExplosion) this.level.onExplosion(pos, type, byPlayer);
      return;
    }
    this.effects.explosion(pos, scale);
    audio.play('explosion', { pos, vol: 2.0 * scale, reverb: 0.8, lowpass: Math.max(1500, 18000 - pos.distanceTo(P.pos) * 120) });
    const R = 8 * scale;
    for (const e of this.enemies.list) {
      if (!e.alive || (e.hostage && !this.hitHostages)) continue;
      const d = e.pos.distanceTo(pos);
      if (d < R && this.world.lineOfSight(pos.clone().add(V(0, 0.4, 0)), e.pos.clone().add(V(0, 1, 0)))) {
        const dmg = 160 * (1 - d / R) + 20;
        if (e.hostage) { this.failMission('The hostage was killed.'); continue; }
        if (e.takeDamage(dmg, e.pos.clone().sub(pos).normalize()) && byPlayer) { this.killCount++; P.stats.kills++; this.hud.killfeed('GRENADE KILL', 100); this.onEnemyKilled?.(e); }
      }
    }
    const pd = P.pos.distanceTo(pos);
    if (pd < R && this.world.lineOfSight(pos.clone().add(V(0, 0.4, 0)), P.eyePos(V()))) P.damage(120 * (1 - pd / R) * (byPlayer ? 0.8 : 1), pos);
    P.shake = Math.min(1, P.shake + Math.max(0, 1 - pd / 30));
    if (pd < 12) this.muffleT = Math.max(this.muffleT || 0, (1 - pd / 12) * 2.5);
    // chain reactions
    for (const c of [...this.world.dynamic]) if (c.explosive && !c.exploded) {
      const cp = c.min.clone().add(c.max).multiplyScalar(0.5);
      if (cp.distanceTo(pos) < R * 0.7) { c.exploded = true; setTimeout(() => { c.exploded = false; this.explodeProp(c); }, 150 + Math.random() * 250); }
    }
    this.alertEnemies(pos, 50);
    if (this.level.onExplosion) this.level.onExplosion(pos, type, byPlayer);
  }

  // ---------------------------------------------------------------- objectives
  startObjective(i) {
    this.objIdx = i;
    const o = this.objectives[i];
    if (!o) { this.completeMission(); return; }
    o.t = 0; o.progress = 0;
    o.onStart?.(this, o);
    if (o.type === 'interact') {
      this.interactables.push({ pos: o.pos, radius: o.radius || 2, label: o.label || 'Hold [F] to interact', time: o.time || 2.5, progress: 0, obj: o });
    }
    this.hud.setObjective(o.text, i > 0);
    if (i > 0) audio.play('objective', { vol: 0.5, reverb: 0, bus: audio.music });
  }

  updateObjective(dt) {
    const o = this.objectives[this.objIdx]; if (!o) return;
    o.t += dt;
    let done = false;
    const P = this.player;
    switch (o.type) {
      case 'reach': done = Math.hypot(P.pos.x - o.pos.x, P.pos.z - o.pos.z) < (o.radius || 4) && (!o.cond || o.cond(this)); break;
      case 'kill': { const left = this.enemies.list.filter(e => e.alive && !e.hostage && (!o.filter || o.filter(e))).length; o.left = left; done = left === 0; this.hud.setObjectiveCount(left > 0 ? `${left} remaining` : ''); break; }
      case 'interact': done = o.done; break;
      case 'survive': { const r = Math.max(0, o.time - o.t); this.hud.setObjectiveCount(`${Math.ceil(r)}s`); done = r <= 0 && (!o.cond || o.cond(this)); break; }
      case 'custom': done = o.check(this, dt, o); break;
    }
    if (done) { o.onComplete?.(this, o); this.hud.setObjectiveCount(''); this.startObjective(this.objIdx + 1); }
  }

  waypoint() {
    const o = this.objectives[this.objIdx]; if (!o) return null;
    if (o.waypoint === false) return null;
    if (o.pos) return o.pos;
    if (o.type === 'kill' && o.left !== undefined && o.left <= 3) {
      const e = this.enemies.list.find(e => e.alive && !e.hostage && (!o.filter || o.filter(e)));
      return e ? e.pos.clone().add(V(0, 1.9, 0)) : null;
    }
    return o.waypointPos || null;
  }

  updateInteract(dt) {
    const P = this.player; let shown = null;
    for (let i = this.interactables.length - 1; i >= 0; i--) {
      const it = this.interactables[i];
      if (P.pos.distanceTo(it.pos) < it.radius + 0.5 && Math.abs(P.pos.y - it.pos.y) < 2) {
        shown = it;
        if (this.input.down('KeyF')) {
          if (it.progress === 0) audio.play('beep', { vol: 0.3 });
          it.progress += dt / it.time;
          if (it.progress >= 1) {
            this.interactables.splice(i, 1); audio.play('beep', { vol: 0.5, rate: 1.5 });
            if (it.obj) { it.obj.done = true; it.obj.onDone?.(this); } else it.onDone?.(this);
            shown = null;
          }
        } else it.progress = Math.max(0, it.progress - dt * 2);
      } else it.progress = 0;
    }
    this.hud.setInteract(shown ? shown.label : null, shown ? shown.progress : 0);
  }

  // ---------------------------------------------------------------- flow
  onPlayerDeath() {
    if (this.failed || this.completed) return;
    this.failMission(this.level.deathText || 'You were killed in action.');
  }

  failMission(reason) {
    if (this.failed || this.completed) return;
    this.failed = true; audio.play('fail', { vol: 0.6, reverb: 0, bus: audio.music });
    this.player.alive = false;
    setTimeout(() => { this.state = 'over'; this.input.unlock(); this.ui.missionFailed(reason, this.summary()); }, 2200);
  }

  completeMission() {
    if (this.completed || this.failed) return;
    this.completed = true;
    audio.play('objective', { vol: 0.7, reverb: 0, bus: audio.music });
    this.hud.setObjective('MISSION COMPLETE', true);
    setTimeout(() => { this.state = 'over'; this.input.unlock(); this.ui.missionComplete(this.summary()); }, 2500);
  }

  summary() {
    const s = this.player.stats;
    return { time: this.levelTime, kills: s.kills, shots: s.shots, hits: s.hits, headshots: s.headshots, acc: s.shots ? Math.round(s.hits / s.shots * 100) : 0, level: this.levelDef, difficulty: this.diff.name };
  }

  update(dt) {
    if (this.state !== 'playing' || this.paused) return;
    this.time += dt; this.levelTime += dt;
    const input = this.input;
    this.player.update(dt, input);
    this.enemies.update(dt);
    this.updateGrenades(dt);
    if (!this.failed && !this.completed) { this.updateObjective(dt); this.updateInteract(dt); }
    this.level.update?.(this, dt);
    // falling targets
    if (this.fallingTargets) for (const m of this.fallingTargets) { if (m.userData.fall < 1) { m.userData.fall = Math.min(1, m.userData.fall + dt * 4); m.rotation.x = -m.userData.fall * Math.PI / 2 * 0.95; } }
    const cam = this.engine.camera;
    this.effects.update(dt, cam);
    updateSun(this);
    audio.setListener(cam);
    this.muffleT = Math.max(0, (this.muffleT || 0) - dt);
    audio.setMuffle(Math.min(1, this.muffleT / 2));
    // flashlight
    if (this.flashlight) {
      const f = this.flashlight; f.intensity = this.player.flashlightOn ? 60 : 0;
      f.position.copy(cam.position).add(V(0.15, -0.15, 0).applyQuaternion(cam.quaternion));
      f.target.position.copy(cam.position).add(this.player.forward(V()).multiplyScalar(10)); f.target.updateMatrixWorld();
    }
    // post fx
    const gr = this.engine.grade.uniforms, P = this.player;
    gr.damage.value = Math.max(P.damageFlash * 0.8, 1 - P.health / P.maxHealth) * (P.alive ? 1 : 1);
    gr.flash.value = Math.min(1, P.flash);
    gr.aberr.value = P.damageFlash * 1.5 + P.shake * 0.6;
    gr.nvg.value = P.nvg ? 1 : 0;
    const G = this.grade || {};
    gr.vignette.value = (G.vignette ?? 0.35) + (P.w?.st.scope && P.ads > 0.9 ? 0 : 0);
    gr.contrast.value = G.contrast ?? 1.06; gr.saturation.value = (G.saturation ?? 1.0) * (P.alive ? 1 : 0.3);
    gr.tint.value.set(G.tint ?? 0xffffff);
    if (P.nvg) this.engine.renderer.toneMappingExposure = (this.level.exposure || 1) * 2.2; else this.engine.renderer.toneMappingExposure = this.level.exposure || 1;
    this.hud.update(dt);
  }
}

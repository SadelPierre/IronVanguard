// First-person player: movement, camera, health, weapons, grenades
import * as THREE from 'three';
import { computeStats, buildViewmodel } from './weapons.js';
import { audio } from './audio.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const damp = (a, b, k, dt) => a + (b - a) * (1 - Math.exp(-k * dt));
const _d = V(), _o = V(), _r = V(), _u = V();

export class Player {
  constructor(G) {
    this.G = G;
    this.pos = V(); this.vel = V();
    this.yaw = 0; this.pitch = 0;
    this.eye = 1.65; this.height = 1.8;
    this.onGround = true; this.crouch = false; this.sprint = false; this.slide = 0;
    this.maxHealth = 100; this.health = 100; this.lastHit = 0; this.alive = true;
    this.recoil = { p: 0, y: 0 }; this.shake = 0; this.bobT = 0; this.stepDist = 0;
    this.weapons = []; this.cur = 0; this.switchT = 0; this.pendingSwitch = -1;
    this.ads = 0; this.reloadT = 0; this.reloading = false; this.fireCd = 0; this.cycleT = 0; this.boltPending = false;
    this.bloom = 0; this.sway = V(); this.swayVel = V(); this.kick = 0; this.kickRot = 0;
    this.grenades = { lethal: 0, tactical: 0 }; this.throwT = 0; this.meleeT = 0;
    this.flash = 0; this.damageFlash = 0; this.time = 0;
    this.stats = { shots: 0, hits: 0, kills: 0, headshots: 0, targets: 0 };
    this.vm = new THREE.Group(); G.engine.vmScene.add(this.vm);
    this.holdBreath = 0; this.breath = 1;
    this.nvg = false; this.flashlightOn = false;
  }

  async setLoadout(L) {
    this.loadout = L;
    const perks = L.perks || [];
    this.perks = perks;
    this.maxHealth = perks.includes('jugg') ? 140 : 100; this.health = this.maxHealth;
    this.speedMul = perks.includes('lightweight') ? 1.12 : 1;
    this.weapons = [];
    for (const slot of ['primary', 'secondary']) {
      const id = L[slot], att = L.att?.[id] || {};
      const st = computeStats(id, att, perks);
      const model = await buildViewmodel(id, att);
      model.group.visible = false; this.vm.add(model.group);
      this.weapons.push({ id, st, model, ammo: st.mag, reserve: st.reserve, mode: 0 });
    }
    this.grenades.lethal = L.lethal === 'c4' ? 2 : 2; this.grenades.tactical = L.tactical === 'smoke' ? 1 : 2;
    this.cur = 0; this.weapons[0].model.group.visible = true; this.switchT = 0.5; this.drawT = 0.5;
    // muzzle flash sprite in viewmodel scene
    if (!this.vmFlash) {
      this.vmFlash = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.G.effects.tex.flash, blending: THREE.AdditiveBlending, depthWrite: false })); this.vmFlash.material.color.setRGB(4, 3.4, 2.6);
      this.vmFlash.visible = false; this.G.engine.vmScene.add(this.vmFlash);
      this.vmFlashLight = new THREE.PointLight(0xffaa55, 0, 2, 2); this.G.engine.vmScene.add(this.vmFlashLight);
    }
  }

  get w() { return this.weapons[this.cur]; }

  spawn(p, yaw = 0) { this.pos.copy(p); this.vel.set(0, 0, 0); this.yaw = yaw; this.pitch = 0; this.alive = true; this.health = this.maxHealth; }

  damage(amount, fromPos) {
    if (!this.alive || this.G.godMode) return;
    this.health -= amount; this.lastHit = this.time; this.damageFlash = Math.min(1, this.damageFlash + amount / 60);
    this.shake = Math.min(1, this.shake + amount / 80);
    if (fromPos) this.G.hud.damageDir(fromPos, this);
    audio.play('hurt', { vol: 0.6 });
    if (this.health <= 0) { this.health = 0; this.alive = false; this.G.onPlayerDeath(); }
  }

  eyePos(out = V()) { return out.set(this.pos.x, this.pos.y + this.eye, this.pos.z); }

  forward(out = V()) {
    const cp = Math.cos(this.pitch + this.recoil.p);
    return out.set(-Math.sin(this.yaw + this.recoil.y) * cp, Math.sin(this.pitch + this.recoil.p), -Math.cos(this.yaw + this.recoil.y) * cp);
  }

  update(dt, input) {
    const G = this.G; this.time += dt;
    // keyboard-friendly controls (touchpad players): E = fire, Z = toggle aim, arrow keys = look
    this.fireHeld = input.mouse.left || input.down('KeyE') || input.down('Enter');
    this.firePressed = input.mouse.leftPressed || input.hit('KeyE') || input.hit('Enter');
    if (input.hit('KeyZ')) this.adsToggled = !this.adsToggled;
    if (input.mouse.rightPressed && G.settings.aimToggle) this.adsToggled = !this.adsToggled;
    this.aimHeld = this.adsToggled || (input.mouse.right && !G.settings.aimToggle);
    const S = G.settings;
    if (!this.alive) { this.updateCamera(dt); return; }
    const w = this.w;
    // ---------- look ----------
    const sens = 0.0022 * S.sensitivity * (1 - this.ads * (1 - 1 / Math.max(1, w.st.zoom * 0.7)));
    this.yaw -= input.mouse.dx * sens;
    const ak = 2.4 * (S.sensitivity || 1) * (1 - this.ads * 0.6) * dt;
    if (input.down('ArrowLeft')) this.yaw += ak; if (input.down('ArrowRight')) this.yaw -= ak;
    if (input.down('ArrowUp')) this.pitch += ak * 0.7; if (input.down('ArrowDown')) this.pitch -= ak * 0.7;
    this.pitch -= input.mouse.dy * sens * (S.invertY ? -1 : 1);
    this.pitch = Math.max(-1.5, Math.min(1.5, this.pitch));
    this.swayVel.x += input.mouse.dx * 0.00004; this.swayVel.y += input.mouse.dy * 0.00004;

    // ---------- movement ----------
    const fwd = (input.down('KeyW') ? 1 : 0) - (input.down('KeyS') ? 1 : 0);
    const str = (input.down('KeyD') ? 1 : 0) - (input.down('KeyA') ? 1 : 0);
    const moving = fwd || str;
    const wantCrouch = input.down('KeyC') || input.down('ControlLeft');
    if (input.hit('KeyC') || input.hit('ControlLeft')) {
      if (this.sprint && this.onGround && this.slide <= 0) { this.slide = 0.75; this.slideDir = V(-Math.sin(this.yaw), 0, -Math.cos(this.yaw)); audio.play('step_dirt', { vol: 0.8, rate: 0.6 }); }
    }
    this.crouch = wantCrouch;
    const ceilingLow = this._ceiling !== undefined && this._ceiling - this.pos.y < 1.8;
    if (ceilingLow) this.crouch = true;
    this.sprint = input.down('ShiftLeft') && fwd > 0 && !this.crouch && this.ads < 0.3 && !(w.st.scope && this.aimHeld);
    if (this.sprint && this.fireHeld) this.sprint = false;
    if (this.sprint && this.reloading && !this.perks.includes('lightweight')) { /* allowed, CoD style */ }
    let speed = this.crouch ? 2.3 : this.sprint ? 7.0 : 4.5;
    speed *= w.st.move * this.speedMul * (1 - this.ads * 0.45);
    const sy = Math.sin(this.yaw), cyw = Math.cos(this.yaw);
    _d.set(-sy * fwd + cyw * str, 0, -cyw * fwd - sy * str);
    if (_d.lengthSq() > 0) _d.normalize().multiplyScalar(speed);
    if (this.slide > 0) {
      this.slide -= dt; this.crouch = true;
      const sv = this.slideDir.clone().multiplyScalar(9 * Math.max(0, this.slide / 0.75) + 2);
      _d.copy(sv);
      if (this.slide <= 0) this.slide = 0;
    }
    const accel = this.onGround ? 12 : 2.5;
    this.vel.x = damp(this.vel.x, _d.x, accel, dt); this.vel.z = damp(this.vel.z, _d.z, accel, dt);
    if (input.hit('Space') && this.onGround && !ceilingLow) { this.vel.y = 6.2; this.onGround = false; this.slide = 0; }
    this.vel.y -= 20 * dt;
    this.pos.x += this.vel.x * dt; this.pos.z += this.vel.z * dt; this.pos.y += this.vel.y * dt;
    const h = this.crouch ? 1.15 : 1.8;
    const res = G.world.collideCylinder(this.pos, 0.33, h, this.vel);
    this._ceiling = res.ceiling;
    if (this.pos.y + h > res.ceiling && this.vel.y > 0) { this.vel.y = 0; this.pos.y = res.ceiling - h; }
    const wasAir = !this.onGround;
    if (this.pos.y <= res.groundY + 0.001) {
      if (wasAir && this.vel.y < -6) { audio.play('land', { vol: 0.6 }); this.landKick = 0.08; }
      this.pos.y = res.groundY; this.vel.y = 0; this.onGround = true; this.groundMat = res.groundMat;
    } else if (this.onGround && this.pos.y - res.groundY < 0.5 && this.vel.y <= 0) {
      this.pos.y = res.groundY; this.vel.y = 0; // step down
    } else this.onGround = false;
    this.eye = damp(this.eye, this.crouch ? (this.slide > 0 ? 0.85 : 1.05) : 1.65, 10, dt);

    // footsteps
    const hs = Math.hypot(this.vel.x, this.vel.z);
    if (this.onGround && hs > 0.5 && this.slide <= 0) {
      this.stepDist += hs * dt; this.bobT += hs * dt * (this.sprint ? 1.25 : 1.6);
      const stride = this.sprint ? 2.2 : this.crouch ? 1.2 : 1.7;
      if (this.stepDist > stride) { this.stepDist = 0; const m = this.surface(); audio.play('step_' + m, { vol: this.crouch ? 0.15 : this.sprint ? 0.5 : 0.32, reverb: 0.1 }); }
    }
    this.moveAmount = Math.min(1, hs / 5);

    // ---------- weapon actions ----------
    this.updateWeapon(dt, input);
    // gadgets
    if (input.hit('KeyG')) this.throwGrenade('lethal');
    if (input.hit('KeyQ')) this.throwGrenade('tactical');
    if (input.hit('KeyV')) this.melee();
    if (input.hit('KeyN') && G.level?.night) { this.nvg = !this.nvg; audio.play('beep', { vol: 0.4 }); }
    if (input.hit('KeyT')) { this.flashlightOn = !this.flashlightOn; audio.play('dry', { vol: 0.4 }); }

    // health regen (CoD style)
    if (this.health < this.maxHealth && this.time - this.lastHit > 4) this.health = Math.min(this.maxHealth, this.health + 40 * dt);
    this.damageFlash = damp(this.damageFlash, 0, 2.2, dt);
    this.flash = Math.max(0, this.flash - dt * 0.35);
    this.updateCamera(dt);
  }

  surface() {
    // what are we standing on?
    if (this.pos.y > 0.05) {
      for (const c of this.G.world.colliders) if (Math.abs(c.max.y - this.pos.y) < 0.05 && this.pos.x > c.min.x && this.pos.x < c.max.x && this.pos.z > c.min.z && this.pos.z < c.max.z) return ['metal', 'wood', 'concrete'].includes(c.mat) ? c.mat : 'concrete';
    }
    const g = this.G.world.groundMat;
    return g === 'sand' ? 'sand' : g === 'grass' ? 'grass' : g === 'concrete' || g === 'asphalt' ? 'concrete' : 'dirt';
  }

  updateCamera(dt) {
    const cam = this.G.engine.camera, S = this.G.settings;
    // recoil recovery
    this.recoil.p = damp(this.recoil.p, 0, 5.5, dt); this.recoil.y = damp(this.recoil.y, 0, 5.5, dt);
    this.shake = Math.max(0, this.shake - dt * 1.5);
    const bobAmt = this.onGround ? this.moveAmount * (1 - this.ads * 0.85) : 0;
    const bobY = Math.sin(this.bobT * 2) * 0.035 * bobAmt, bobX = Math.cos(this.bobT) * 0.025 * bobAmt;
    this.landKick = damp(this.landKick || 0, 0, 8, dt);
    cam.position.set(this.pos.x, this.pos.y + this.eye + bobY - this.landKick, this.pos.z);
    const sh = this.shake * this.shake * 0.04;
    cam.rotation.order = 'YXZ';
    cam.rotation.y = this.yaw + this.recoil.y + (Math.random() - 0.5) * sh + bobX * 0.15;
    cam.rotation.x = this.pitch + this.recoil.p + (Math.random() - 0.5) * sh;
    cam.rotation.z = (this.slide > 0 ? 0.06 : 0) + bobX * 0.2;
    // FOV
    const w = this.w; const base = S.fov;
    const zoom = w ? 1 + (w.st.zoom - 1) * this.ads : 1;
    const target = (this.sprint ? base + 6 : base) / zoom;
    cam.fov = damp(cam.fov, target, 18, dt); cam.updateProjectionMatrix();
    const vc = this.G.engine.vmCamera; vc.fov = damp(vc.fov, w?.st.scope ? 55 : 55 - this.ads * 12, 18, dt); vc.updateProjectionMatrix();
  }

  // ---------------------------------------------------------------- weapons
  updateWeapon(dt, input) {
    const w = this.w, st = w.st, P = w.model, G = this.G;
    this.fireCd -= dt; this.switchT = Math.max(0, this.switchT - dt); this.throwT = Math.max(0, this.throwT - dt); this.meleeT = Math.max(0, this.meleeT - dt);
    // switching
    if ((input.hit('Digit1') && this.cur !== 0) || (input.hit('Digit2') && this.cur !== 1) || input.mouse.wheel || input.hit('KeyX')) {
      const next = input.hit('Digit1') ? 0 : input.hit('Digit2') ? 1 : 1 - this.cur;
      if (next !== this.cur && this.switchT <= 0.25) { this.pendingSwitch = next; this.switchT = 0.5; this.adsToggled = false; this.reloading = false; this.boltPending = false; audio.play('switch', { vol: 0.5 }); }
    }
    if (this.pendingSwitch >= 0 && this.switchT <= 0.25) {
      w.model.group.visible = false; this.cur = this.pendingSwitch; this.pendingSwitch = -1; this.w.model.group.visible = true; this.ads = 0;
    }
    const busy = this.switchT > 0 || this.throwT > 0 || this.meleeT > 0;
    // fire mode
    if (input.hit('KeyB') && st.modes.length > 1) { w.mode = (w.mode + 1) % st.modes.length; audio.play('dry', { vol: 0.5 }); G.hud.toast(st.modes[w.mode].toUpperCase()); }
    // ADS
    const wantAds = this.aimHeld && !this.sprint && !busy && !(this.reloading && st.scope);
    this.ads = Math.max(0, Math.min(1, this.ads + (wantAds ? 1 : -1) * dt / st.ads));
    // breath (sniper)
    const scoped = st.scope && this.ads > 0.95;
    if (scoped && input.down('ShiftLeft') && this.breath > 0) { this.holdBreath = 1; this.breath = Math.max(0, this.breath - dt / 4); }
    else { this.holdBreath = 0; this.breath = Math.min(1, this.breath + dt / 5); }
    // reload
    if (input.hit('KeyR') && !this.reloading && w.ammo < st.mag && w.reserve > 0 && !busy) this.startReload();
    if (this.reloading) {
      this.reloadT -= dt;
      const total = this.reloadTotal, t = 1 - this.reloadT / total;
      if (!st.shellReload) {
        if (!this._rs1 && t > 0.2) { this._rs1 = true; audio.play('magOut', { vol: 0.7 }); }
        if (!this._rs2 && t > 0.6) { this._rs2 = true; audio.play('magIn', { vol: 0.8 }); }
        if (!this._rs3 && this.reloadEmpty && t > 0.82) { this._rs3 = true; audio.play(P.pistol ? 'slide' : 'bolt', { vol: 0.7 }); }
      }
      if (this.reloadT <= 0) {
        if (st.shellReload) {
          w.ammo++; w.reserve--; audio.play('shell', { vol: 0.7 });
          if (w.ammo < st.mag && w.reserve > 0 && !this.fireHeld) { this.reloadT = st.reload; this.reloadTotal = st.reload; }
          else { this.reloading = false; audio.play('pump', { vol: 0.7 }); this.fireCd = 0.3; }
        } else {
          const need = st.mag - w.ammo, take = Math.min(need, w.reserve); w.ammo += take; w.reserve -= take; this.reloading = false;
        }
      }
      if (st.shellReload && this.firePressed && w.ammo > 0) { this.reloading = false; this.fireCd = 0.15; }
    }
    // bolt / pump cycling
    if (this.boltPending && this.fireCd <= 0.25 && !this._boltSound) { this._boltSound = true; audio.play(st.model === 'shotgun' ? 'pump' : 'bolt', { vol: 0.8 }); }
    // firing
    const mode = st.modes[w.mode];
    const trigger = (mode === 'auto') ? this.fireHeld : this.firePressed;
    if (trigger && !busy && !this.reloading && this.fireCd <= 0) {
      if (w.ammo > 0) this.fire();
      else if (this.firePressed) { audio.play('dry', { vol: 0.6 }); if (w.reserve > 0) this.startReload(); this.fireCd = 0.25; }
    }
    if (w.ammo === 0 && w.reserve > 0 && !this.reloading && !busy && this.fireCd <= 0 && G.settings.autoReload) this.startReload();
    this.bloom = damp(this.bloom, 0, 4.5, dt);
    this.updateViewmodel(dt);
  }

  startReload() {
    const w = this.w, st = w.st;
    this.reloading = true; this.reloadEmpty = w.ammo === 0;
    this.reloadTotal = this.reloadT = st.shellReload ? st.reload : (this.reloadEmpty ? st.reloadEmpty : st.reload);
    this._rs1 = this._rs2 = this._rs3 = false; this.ads = Math.min(this.ads, 0.3);
  }

  spread() {
    const st = this.w.st;
    const base = st.hip * (1 - this.ads) + st.adsSpread * this.ads;
    const move = this.moveAmount * (1 - this.ads * 0.7) * 2.5 + (this.onGround ? 0 : 4);
    const crouch = this.crouch ? 0.8 : 1;
    return (base + move + this.bloom) * crouch * (st.scope && this.ads > 0.95 ? (this.holdBreath ? 0.02 : 0.15) : 1);
  }

  fire() {
    const w = this.w, st = w.st, G = this.G, P = w.model;
    w.ammo--; if (!this.G.completed && !this.G.failed) this.stats.shots++;
    this.fireCd = 60 / st.rpm;
    if (st.bolt || st.model === 'shotgun') { this.boltPending = true; this._boltSound = false; this.fireCd = 60 / st.rpm; }
    const eye = this.eyePos(_o), dir = this.forward(V());
    const pellets = st.pellets || 1;
    let anyHit = false, head = false, killed = false;
    const spreadDeg = this.spread() * (st.pellets ? 1 : 1);
    for (let i = 0; i < pellets; i++) {
      const d = dir.clone();
      const sp = THREE.MathUtils.degToRad(st.pellets ? st.pelletSpread * (1 - this.ads * 0.3) + spreadDeg * 0.3 : spreadDeg) * 0.5;
      const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * Math.tan(sp);
      _r.set(1, 0, 0).applyEuler(G.engine.camera.rotation); _u.set(0, 1, 0).applyEuler(G.engine.camera.rotation);
      d.addScaledVector(_r, Math.cos(a) * r).addScaledVector(_u, Math.sin(a) * r).normalize();
      const res = G.bullet(eye, d, st, true);
      if (res?.enemy) { anyHit = true; if (res.head) head = true; if (res.killed) killed = true; }
      else if (res?.target) anyHit = true;
      if (i === 0 && (this.stats.shots % 3 === 0 || st.pellets)) G.effects.tracer(this.muzzleWorld(), res ? res.point : eye.clone().addScaledVector(d, 120));
    }
    if (anyHit) { if (!this.G.completed && !this.G.failed) this.stats.hits++; G.hud.hitmarker(head, killed); audio.play(head ? 'headshot' : 'hitmarker', { vol: 0.5, reverb: 0 }); }
    // sound + alert
    audio.shot(st.suppressed ? 'suppressed' : st.sound, null, true);
    G.alertEnemies(this.pos, st.suppressed ? 12 : 70);
    // muzzle flash
    if (!st.suppressed) {
      const mw = this.muzzleWorld();
      G.effects.flashLight(mw, 3, 0xffb060, 0.05);
      this.vmFlash.visible = true; this.vmFlashT = 0.04;
      this.vmFlash.material.rotation = Math.random() * 6.28;
      this.vmFlash.scale.setScalar((st.model === 'shotgun' || st.scope ? 0.35 : 0.22) * (0.8 + Math.random() * 0.4));
      this.vmFlashLight.intensity = 1.5;
    }
    // shell ejection (world)
    if (!st.shellReload || true) {
      const cam = G.engine.camera; const right = V(1, 0, 0).applyQuaternion(cam.quaternion), up = V(0, 1, 0).applyQuaternion(cam.quaternion);
      const ep = eye.clone().addScaledVector(dir, 0.35).addScaledVector(right, 0.15).addScaledVector(up, -0.12);
      if (!st.bolt && st.model !== 'shotgun') G.effects.ejectShell(ep, right.multiplyScalar(2 + Math.random()).addScaledVector(up, 1.5 + Math.random()).add(this.vel));
    }
    // recoil
    const ar = this.ads > 0.5 ? 0.7 : 1, cr = this.crouch ? 0.85 : 1;
    this.recoil.p += THREE.MathUtils.degToRad(st.recoil[0]) * ar * cr * (0.8 + Math.random() * 0.4);
    this.recoil.y += THREE.MathUtils.degToRad(st.recoil[1]) * ar * cr * (Math.random() - 0.35);
    // part of recoil sticks (pull down to compensate)
    this.pitch += THREE.MathUtils.degToRad(st.recoil[0]) * 0.35 * ar * cr;
    this.kick = Math.min(this.kick + st.kick, 0.12); this.kickRot = Math.min(this.kickRot + st.kick * 1.8, 0.25);
    this.bloom = Math.min(this.bloom + (st.pellets ? 0 : 0.6 + st.recoil[0] * 0.4), 6);
    if (P.slide) this.slideKick = 1;
  }

  muzzleWorld(out = V()) {
    const cam = this.G.engine.camera;
    // approximate muzzle position in world space from the viewmodel's camera-space muzzle
    const P = this.w.model; P.muzzle.updateWorldMatrix(true, false);
    const mp = V().setFromMatrixPosition(P.muzzle.matrixWorld); // in vm camera space (camera at origin)
    mp.multiplyScalar(1.0);
    return out.copy(mp).applyQuaternion(cam.quaternion).add(cam.position);
  }

  updateViewmodel(dt) {
    const w = this.w, st = w.st, P = w.model, g = P.group;
    // sway spring
    this.swayVel.x -= this.sway.x * 60 * dt; this.swayVel.y -= this.sway.y * 60 * dt;
    this.swayVel.multiplyScalar(Math.exp(-10 * dt));
    this.sway.x += this.swayVel.x; this.sway.y += this.swayVel.y;
    this.sway.x = Math.max(-0.06, Math.min(0.06, this.sway.x)); this.sway.y = Math.max(-0.06, Math.min(0.06, this.sway.y));
    this.kick = damp(this.kick, 0, 14, dt); this.kickRot = damp(this.kickRot, 0, 12, dt);
    const a = this.ads, ia = 1 - a;
    const hip = P.pistol ? V(0.16, -0.17, -0.38) : V(0.17, -0.19, -0.42);
    const adsP = V(0, -P.sightY, P.pistol ? -0.34 : -0.3);
    const pos = hip.lerp(adsP, a * a * (3 - 2 * a));
    const bob = this.onGround ? this.moveAmount : 0;
    const t = this.bobT;
    pos.x += Math.cos(t) * 0.012 * bob * (ia * 0.9 + 0.1) - this.sway.x * (ia + 0.15);
    pos.y += Math.abs(Math.sin(t)) * 0.012 * bob * (ia * 0.9 + 0.1) + this.sway.y * (ia + 0.15) + Math.sin(this.time * 1.5) * 0.002 * ia;
    pos.z += this.kick;
    let rx = this.kickRot * (ia * 0.7 + 0.3), ry = 0, rz = 0;
    // sprint pose
    this._sp = damp(this._sp || 0, this.sprint ? 1 : 0, 10, dt);
    const sp = this._sp;
    pos.x += sp * (P.pistol ? 0.0 : -0.05); pos.y += sp * -0.05; pos.z += sp * 0.03;
    rx += sp * (P.pistol ? -0.6 : -0.25); ry += sp * (P.pistol ? 0 : 0.9); rz += sp * 0.25;
    pos.x += Math.cos(t) * 0.03 * sp; pos.y += Math.abs(Math.sin(t)) * 0.02 * sp;
    // reload animation
    if (this.reloading && !st.shellReload) {
      const r = 1 - this.reloadT / this.reloadTotal;
      const e = Math.sin(Math.min(1, r * 1.1) * Math.PI);
      rx += e * 0.35; rz += e * 0.6; pos.y -= e * 0.06; pos.x -= e * 0.03;
      if (P.mag && P.magHome) {
        const m = r < 0.2 ? 0 : r < 0.4 ? (r - 0.2) / 0.2 : r < 0.55 ? 1 : r < 0.68 ? 1 - (r - 0.55) / 0.13 : 0;
        P.mag.position.copy(P.magHome); P.mag.position.y -= m * 0.35; P.mag.position.z += m * 0.05;
        P.mag.visible = m < 0.98;
      }
    } else if (this.reloading && st.shellReload) {
      const r = 1 - this.reloadT / this.reloadTotal; rz += 0.45; rx += 0.15 + Math.sin(r * Math.PI) * 0.06; pos.y -= 0.03;
    } else if (P.mag && P.magHome) { P.mag.position.copy(P.magHome); P.mag.visible = true; }
    // bolt / pump animation
    if (this.boltPending) {
      const total = 60 / st.rpm, r = 1 - Math.max(0, this.fireCd) / total;
      const e = r > 0.25 ? Math.sin((r - 0.25) / 0.75 * Math.PI) : 0;
      if (st.bolt) { rz += e * 0.35 * ia; rx += e * 0.1; pos.y -= e * 0.03 * ia; }
      if (P.pump) { P.pump.position.z = P.pumpHome.z + e * 0.09; }
      if (r >= 1) this.boltPending = false;
    }
    // pistol slide
    if (P.slide) { this.slideKick = damp(this.slideKick || 0, 0, 25, dt); P.slide.position.copy(P.slideHome); const ax = P.pistol && st.model === 'pistol' ? 'x' : 'z'; P.slide.position[ax] += (ax === 'x' ? -1 : 1) * (this.slideKick * 0.03 + (this.w.ammo === 0 ? 0.03 : 0)); }
    // switch / throw / melee
    const sw = this.switchT > 0 ? Math.sin(Math.min(1, this.switchT / 0.5) * Math.PI) : 0;
    pos.y -= sw * 0.3; rx -= sw * 0.6;
    if (this.throwT > 0) { const e = Math.sin(this.throwT / 0.6 * Math.PI); pos.y -= e * 0.25; rx -= e * 0.4; }
    if (this.meleeT > 0) { const r = 1 - this.meleeT / 0.5; const e = Math.sin(Math.min(1, r * 2) * Math.PI); pos.z -= e * 0.18; pos.x -= e * 0.12; ry += e * 0.5; rz -= e * 0.4; }
    g.position.copy(pos); g.rotation.set(rx, ry, rz);
    // scope overlay: hide model
    const scoped = st.scope && this.ads > 0.92;
    g.visible = !scoped;
    if (P.laser) P.laser.visible = this.ads < 0.5;
    this.G.hud.setScope(scoped, this.holdBreath);
    // breathing sway while scoped
    if (scoped && !this.holdBreath) { this.recoil.p += Math.sin(this.time * 1.3) * 0.00025; this.recoil.y += Math.cos(this.time * 0.9) * 0.0002; }
    // muzzle flash sprite
    if (this.vmFlashT > 0) {
      this.vmFlashT -= dt; P.muzzle.updateWorldMatrix(true, false);
      this.vmFlash.position.setFromMatrixPosition(P.muzzle.matrixWorld); this.vmFlashLight.position.copy(this.vmFlash.position);
      this.vmFlash.visible = !scoped;
      if (this.vmFlashT <= 0) { this.vmFlash.visible = false; this.vmFlashLight.intensity = 0; }
    }
  }

  // ---------------------------------------------------------------- gadgets
  throwGrenade(kind) {
    if (this.throwT > 0 || this.switchT > 0 || this.grenades[kind] <= 0) return;
    this.grenades[kind]--; this.throwT = 0.6; this.reloading = false;
    audio.play('pin', { vol: 0.6 });
    const type = kind === 'lethal' ? (this.loadout.lethal || 'frag') : (this.loadout.tactical || 'flash');
    setTimeout(() => {
      const dir = this.forward(V()); const p = this.eyePos(V()).addScaledVector(dir, 0.5);
      const v = dir.multiplyScalar(16).add(V(0, 3.5, 0)).add(this.vel);
      this.G.spawnGrenade(type, p, v, true);
    }, 220);
  }

  melee() {
    if (this.meleeT > 0 || this.switchT > 0) return;
    this.meleeT = 0.5; audio.play('melee', { vol: 0.6, rate: 1.4 });
    setTimeout(() => {
      const hit = this.G.enemies.meleeTarget(this.pos, this.forward(V()), 2.2);
      if (hit) { this.G.damageEnemy(hit, 150, false, this.forward(V()), hit.pos.clone().add(V(0, 1.3, 0))); audio.play('hit_flesh', { vol: 1 }); this.G.hud.hitmarker(false, true); }
    }, 150);
  }

  refillAmmo(frac = 1) {
    for (const w of this.weapons) w.reserve = Math.min(w.st.reserve * 1.5, w.reserve + Math.ceil(w.st.mag * frac));
  }
}

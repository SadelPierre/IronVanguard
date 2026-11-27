// AC-130 gunship mode: orbiting thermal camera with 25mm / 40mm / 105mm cannons.
import * as THREE from 'three';
import { audio } from './audio.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const GUNS = [
  { name: '25mm GAU-12', fov: 24, rate: 9, reload: 0, mag: 60, travel: 700, scale: 0.28, spread: 1.2, sound: 'lmg', shake: 0.03 },
  { name: '40mm BOFORS', fov: 15, rate: 1.4, reload: 0, mag: 8, travel: 550, scale: 0.6, spread: 0.6, sound: 'sniper', shake: 0.12 },
  { name: '105mm HOWITZER', fov: 9, rate: 0.2, reload: 0, mag: 1, travel: 420, scale: 1.5, spread: 0.2, sound: 'explosion', shake: 0.35 },
];

export class Gunship {
  constructor(G, o) {
    this.G = G; this.center = V(o.center?.[0] || 0, 0, o.center?.[1] || 0);
    this.radius = o.radius || 230; this.alt = o.altitude || 300; this.angle = 0; this.speed = o.speed || 0.045;
    this.yaw = 0; this.pitch = 0; this.gun = 0; this.cd = 0; this.ammo = GUNS.map(g => g.mag); this.reloadT = GUNS.map(() => 0);
    this.shells = []; this.ffCount = 0;
    const P = G.player; P.pos.set(0, -400, 0); P.vm.visible = false; P.godMode = true;
    G.godMode = true;
    // thermal: everything warm (people, engines) glows
    for (const e of G.enemies.list) this.heat(e);
    this.el = document.getElementById('gunship');
    this.el.style.display = 'block';
    document.getElementById('hud').classList.add('gunshipmode');
    G.engine.grade.uniforms.thermal && (G.engine.grade.uniforms.thermal.value = 1);
    this.drone = audio.loop('engine', 0.35);
    // IR strobes over friendlies
    this.strobeMat = new THREE.SpriteMaterial({ map: G.effects.tex.soft, blending: THREE.AdditiveBlending, depthWrite: false }); this.strobeMat.color.setRGB(6, 6, 6);
    G.onFriendlyFire = e => { if (this.ffT > 0) return; this.ffT = 3; this.ffCount++; G.hud.toast('CHECK FIRE! FRIENDLIES IN THE BLAST!', 2.5); G.radio('OKAFOR', 'Check fire! Check fire! That was on top of us!'); if (this.ffCount >= 3) G.failMission('Friendly fire: you hit your own squad.'); };
    this.ffT = 0;
  }

  heat(e) {
    e._heated = true;
    e.model.traverse(o => { if (o.isMesh) { o.material = o.material.clone(); o.material.emissive = new THREE.Color(1, 1, 1); o.material.emissiveIntensity = e.friendly ? 1.6 : 1.3; } });
    if (e.friendly && !e.strobe) { e.strobe = new THREE.Sprite(this.strobeMat); e.strobe.scale.setScalar(2.2); this.G.scene.add(e.strobe); }
  }

  update(dt, input) {
    const G = this.G, cam = G.engine.camera, S = G.settings;
    this.ffT = Math.max(0, this.ffT - dt);
    for (const e of G.enemies.list) if (!e._heated && e.alive) this.heat(e);
    this.angle += this.speed * dt;
    const pos = V(this.center.x + Math.cos(this.angle) * this.radius, this.alt, this.center.z + Math.sin(this.angle) * this.radius);
    // aim: relative to the line toward the orbit centre
    const sens = 0.0016 * (S.sensitivity || 1) * (GUNS[this.gun].fov / 24);
    this.yaw -= input.mouse.dx * sens; this.pitch -= input.mouse.dy * sens;
    const ak = 0.6 * dt * (GUNS[this.gun].fov / 24);
    if (input.act('lookLeft')) this.yaw += ak; if (input.act('lookRight')) this.yaw -= ak; if (input.act('lookUp')) this.pitch += ak; if (input.act('lookDown')) this.pitch -= ak;
    this.yaw = THREE.MathUtils.clamp(this.yaw, -0.6, 0.6); this.pitch = THREE.MathUtils.clamp(this.pitch, -0.45, 0.45);
    const toC = this.center.clone().sub(pos).normalize();
    const baseYaw = Math.atan2(-toC.x, -toC.z), basePitch = Math.asin(toC.y);
    cam.position.copy(pos); cam.rotation.order = 'YXZ';
    const shake = this.shake = Math.max(0, (this.shake || 0) - dt * 2);
    cam.rotation.y = baseYaw + this.yaw + (Math.random() - 0.5) * shake * 0.02; cam.rotation.x = basePitch + this.pitch + (Math.random() - 0.5) * shake * 0.02; cam.rotation.z = 0;
    cam.fov += (GUNS[this.gun].fov - cam.fov) * Math.min(1, dt * 6); cam.updateProjectionMatrix();
    // weapon select
    if (input.actHit('weapon1')) this.gun = 0; else if (input.actHit('weapon2')) this.gun = 1; else if (input.hit('Digit3')) this.gun = 2;
    if (input.mouse.wheel || input.actHit('swap')) this.gun = (this.gun + (input.mouse.wheel < 0 ? 2 : 1)) % 3;
    // reloads
    GUNS.forEach((g, i) => { if (this.ammo[i] <= 0) { this.reloadT[i] += dt; const need = i === 0 ? 2.5 : i === 1 ? 3 : 5; if (this.reloadT[i] >= need) { this.ammo[i] = g.mag; this.reloadT[i] = 0; } } });
    // fire
    this.cd -= dt; const g = GUNS[this.gun];
    const trig = this.gun === 0 ? input.act('fire') : input.actHit('fire');
    if (trig && this.cd <= 0 && this.ammo[this.gun] > 0) {
      this.cd = 1 / g.rate; this.ammo[this.gun]--;
      const dir = new THREE.Vector3(0, 0, -1).applyEuler(cam.rotation);
      const sp = THREE.MathUtils.degToRad(g.spread) * 0.5;
      dir.x += (Math.random() - 0.5) * sp; dir.z += (Math.random() - 0.5) * sp; dir.normalize();
      const hit = G.world.raycast(cam.position, dir, 900);
      const at = hit ? hit.point : cam.position.clone().addScaledVector(dir, (cam.position.y) / Math.max(0.05, -dir.y));
      this.shells.push({ at, t: cam.position.distanceTo(at) / g.travel, g, tracer: this.gun < 2 });
      audio.play(g.sound === 'explosion' ? 'explosion' : 'shot_' + g.sound, { vol: g.sound === 'explosion' ? 0.5 : 0.35, rate: g.sound === 'explosion' ? 1.8 : 0.6, lowpass: 2500, reverb: 0.6 });
      this.shake = Math.min(1, this.shake + g.shake);
    }
    for (let i = this.shells.length - 1; i >= 0; i--) {
      const s = this.shells[i]; s.t -= dt;
      if (s.t <= 0) {
        this.shells.splice(i, 1);
        G.explode(s.at, 'frag', true, s.g.scale);
        if (s.g.scale < 0.4) G.effects.impact(s.at, V(0, 1, 0), 'dirt');
      }
    }
    // strobes blink over friendlies
    for (const a of G.enemies.allies || []) if (a.strobe) { a.strobe.position.copy(a.pos).add(V(0, 2.4, 0)); a.strobe.visible = (G.time * 2) % 1 < 0.18; }
    this.hud();
  }

  hud() {
    const g = GUNS[this.gun], a = this.ammo[this.gun];
    const r = this.reloadT[this.gun];
    this.el.querySelector('.gn').textContent = g.name;
    this.el.querySelector('.am').textContent = a > 0 ? `${a} / ${g.mag}` : 'RELOADING ' + '█'.repeat(Math.min(10, Math.ceil(r * 3)));
    this.el.querySelector('.ret').className = 'ret g' + this.gun;
    this.el.querySelector('.alt').textContent = `ALT ${Math.round(this.alt * 3.28)} FT   ·   ORBIT ${Math.round((this.angle * 180 / Math.PI) % 360)}°`;
  }

  dispose() {
    this.el.style.display = 'none'; document.getElementById('hud').classList.remove('gunshipmode');
    if (this.G.engine.grade?.uniforms.thermal) this.G.engine.grade.uniforms.thermal.value = 0;
    this.G.godMode = false; this.G.onFriendlyFire = null;
  }
}

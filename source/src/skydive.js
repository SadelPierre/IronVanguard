// HALO jump: free-fall from altitude, steer with WASD + mouse, open the chute with Space (auto-opens low).
// Takes over from the player controller until touchdown.
import * as THREE from 'three';
import { audio } from './audio.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

export class Skydive {
  constructor(G, { start, target, chuteAt = 160, onLand }) {
    this.G = G; this.onLand = onLand;
    this.pos = V(...start); this.vel = V(0, -20, 0);
    this.target = V(target[0], 0, target[1]);
    const d = this.target.clone().sub(this.pos); this.yaw = Math.atan2(-d.x, -d.z); this.pitch = -0.75;
    this.chute = false; this.chuteAt = chuteAt; this.t = 0;
    const P = G.player; P.vm.visible = false; P.godMode = true; P.pos.set(this.pos.x, -300, this.pos.z); // keep the real body out of sight lines until touchdown
    this.el = document.createElement('div'); this.el.id = 'halo';
    this.el.innerHTML = '<div class="alt"></div><div class="spd"></div><div class="tip"></div>';
    G.hud.el.appendChild(this.el); G.hud.el.classList.add('halomode');
    this.wind = audio.loop('wind', 0.0);
  }

  update(dt, input) {
    const G = this.G, P = G.player, cam = G.engine.camera, S = G.settings;
    this.t += dt;
    const sens = (S.sensitivity || 1) * 0.0022;
    this.yaw -= input.mouse.dx * sens; this.pitch -= input.mouse.dy * sens;
    if (input.act('lookLeft')) this.yaw += dt * 1.6; if (input.act('lookRight')) this.yaw -= dt * 1.6;
    if (input.act('lookUp')) this.pitch += dt * 1.2; if (input.act('lookDown')) this.pitch -= dt * 1.2;
    this.pitch = Math.max(-1.5, Math.min(0.3, this.pitch));
    const fx = -Math.sin(this.yaw), fz = -Math.cos(this.yaw), rx = Math.cos(this.yaw), rz = -Math.sin(this.yaw);
    let ax = 0, az = 0;
    if (input.act('forward')) { ax += fx; az += fz; } if (input.act('back')) { ax -= fx; az -= fz; }
    if (input.act('right')) { ax += rx; az += rz; } if (input.act('left')) { ax -= rx; az -= rz; }
    ax += fx * input.axis.y + rx * input.axis.x; az += fz * input.axis.y + rz * input.axis.x;
    this.yaw -= input.look.x * dt; this.pitch += input.look.y * dt * 0.8;
    const alt = this.pos.y;
    if (!this.chute && (alt < this.chuteAt * 0.45 || (alt < 650 && input.actHit('jump')))) {
      this.chute = true; this.chuteT = 0; audio.play('switch', { vol: 1, rate: 0.5 }); audio.play('bounce', { vol: 0.6, rate: 0.4 }); P.shake = 0.8;
    }
    const maxH = this.chute ? 8 : 24, acc = this.chute ? 6 : 14;
    this.vel.x += ax * acc * dt; this.vel.z += az * acc * dt;
    const h = Math.hypot(this.vel.x, this.vel.z); if (h > maxH) { this.vel.x *= maxH / h; this.vel.z *= maxH / h; }
    if (!ax && !az) { this.vel.x *= 1 - dt * 0.4; this.vel.z *= 1 - dt * 0.4; }
    const term = this.chute ? -6 : -52;
    this.vel.y += (term - this.vel.y) * Math.min(1, dt * (this.chute ? 2.2 : 0.35));
    this.pos.addScaledVector(this.vel, dt);
    const B = G.world.bounds; if (B) { this.pos.x = Math.max(B.minX + 2, Math.min(B.maxX - 2, this.pos.x)); this.pos.z = Math.max(B.minZ + 2, Math.min(B.maxZ - 2, this.pos.z)); }
    // camera
    const speed = this.vel.length();
    const sh = this.chute ? 0.002 : Math.min(0.012, speed * 0.0002);
    cam.position.copy(this.pos);
    cam.rotation.order = 'YXZ';
    cam.rotation.set(this.pitch + (Math.random() - 0.5) * sh, this.yaw + (Math.random() - 0.5) * sh, this.chute ? Math.sin(this.t * 0.9) * 0.03 : -ax * 0.0);
    if (cam.fov !== S.fov + (this.chute ? 0 : 8)) { cam.fov = S.fov + (this.chute ? 0 : 8); cam.updateProjectionMatrix(); }
    if (this.wind) this.wind.gain.value = Math.min(0.9, speed / 60);
    // HUD
    const dist = Math.hypot(this.pos.x - this.target.x, this.pos.z - this.target.z);
    this.el.querySelector('.alt').textContent = `ALT ${Math.max(0, Math.round(alt))} m`;
    this.el.querySelector('.spd').textContent = `${Math.round(-this.vel.y * 3.6)} km/h   ·   LZ ${Math.round(dist)} m`;
    this.el.querySelector('.tip').innerHTML = this.chute ? 'Steer to the green smoke' : alt < 650 ? 'Press <b>SPACE</b> to open your chute' : 'Free fall · steer with <b>WASD</b>';
    // touchdown
    if (this.pos.y <= 1.7) this.land();
  }

  land() {
    const G = this.G, P = G.player;
    P.pos.set(this.pos.x, 0, this.pos.z); P.vel?.set(0, 0, 0); P.yaw = this.yaw; P.pitch = 0;
    P.vm.visible = true; P.godMode = false; P.landKick = 0.35; P.shake = 0.5;
    audio.play('step_dirt', { vol: 1 }); audio.play('bounce', { vol: 0.5, rate: 0.6 });
    G.engine.camera.fov = G.settings.fov; G.engine.camera.updateProjectionMatrix();
    this.dispose(); G.controller = null;
    this.onLand?.(G, this.pos.distanceTo(this.target));
  }

  dispose() {
    this.el?.remove(); this.G.hud.el.classList.remove('halomode');
    if (this.wind) { try { this.wind.gain.value = 0; } catch (e) {} }
  }
}

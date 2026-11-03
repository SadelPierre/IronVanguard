// Enemy soldiers: animated skinned characters with aim IK, perception, cover & squad-ish behaviour
import * as THREE from 'three';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { loadModel } from './assets.js';
import { buildThirdPersonRifle } from './weapons.js';
import { audio } from './audio.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const _a = V(), _b = V(), _c = V(), _t = V(), _q = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _q3 = new THREE.Quaternion();
const UP = V(0, 1, 0);

export const DIFFICULTY = {
  recruit:  { name: 'Recruit',  acc: 0.22, dmg: 7,  react: 1.1, hp: 80,  awareness: 0.7 },
  regular:  { name: 'Regular',  acc: 0.32, dmg: 10, react: 0.8, hp: 100, awareness: 1.0 },
  hardened: { name: 'Hardened', acc: 0.42, dmg: 14, react: 0.6, hp: 110, awareness: 1.3 },
  veteran:  { name: 'Veteran',  acc: 0.55, dmg: 20, react: 0.4, hp: 120, awareness: 1.6 },
};

function bone(root, name) { return root.getObjectByName('mixamorig' + name) || root.getObjectByName('mixamorig:' + name); }

// rotate a bone so that the world vector `from` maps to `to`
function rotateBoneWorld(b, from, to) {
  _q.setFromUnitVectors(from.clone().normalize(), to.clone().normalize());
  b.getWorldQuaternion(_q2);
  b.parent.getWorldQuaternion(_q3);
  b.quaternion.copy(_q3.invert().multiply(_q.multiply(_q2)));
  b.updateMatrixWorld(true);
}

function twoBoneIK(upper, lower, end, target, pole) {
  const a = upper.getWorldPosition(V()), b = lower.getWorldPosition(V()), c = end.getWorldPosition(V());
  const lab = a.distanceTo(b), lbc = b.distanceTo(c);
  const at = target.clone().sub(a); let lat = at.length();
  lat = Math.min(lat, lab + lbc - 0.002); at.normalize();
  const cosA = THREE.MathUtils.clamp((lab * lab + lat * lat - lbc * lbc) / (2 * lab * lat), -1, 1), sinA = Math.sqrt(1 - cosA * cosA);
  const pd = pole.clone().sub(a); pd.addScaledVector(at, -pd.dot(at)).normalize();
  const elbow = a.clone().addScaledVector(at, lab * cosA).addScaledVector(pd, lab * sinA);
  rotateBoneWorld(upper, b.clone().sub(a), elbow.clone().sub(a));
  const c2 = end.getWorldPosition(V()), b2 = lower.getWorldPosition(V());
  rotateBoneWorld(lower, c2.clone().sub(b2), target.clone().sub(b2));
}

// closest distance between ray (o,d) and segment (p,q); returns [dist, tRay]
function raySeg(o, d, p, q) {
  const u = d, v = _c.subVectors(q, p), w = _t.subVectors(o, p);
  const a = 1, b = u.dot(v), c = v.dot(v), dd = u.dot(w), e = v.dot(w);
  const D = a * c - b * b; let sc, tc;
  if (D < 1e-8) { sc = 0; tc = b > c ? dd / b : e / c; } else { sc = (b * e - c * dd) / D; tc = (a * e - b * dd) / D; }
  tc = THREE.MathUtils.clamp(tc, 0, 1);
  sc = Math.max(0, u.dot(_a.copy(p).addScaledVector(v, tc).sub(o)));
  const pr = _a.copy(o).addScaledVector(u, sc), ps = _b.copy(p).addScaledVector(v, tc);
  return [pr.distanceTo(ps), sc];
}

let template = null;
export async function loadSoldier() {
  if (!template) template = await loadModel('Soldier');
  return template;
}

export class Enemy {
  constructor(mgr, opts) {
    this.mgr = mgr; this.G = mgr.G;
    this.pos = opts.pos.clone(); this.yaw = opts.yaw ?? Math.random() * 6.28; this.bodyYaw = this.yaw;
    this.vel = V();
    const D = this.G.diff;
    this.hp = opts.hp ?? D.hp; this.alive = true;
    this.state = opts.state || 'idle'; // idle, patrol, alert, combat, dead
    this.patrol = opts.patrol || null; this.patrolIdx = 0;
    this.awareness = 0; this.lastSeen = null; this.lastSeenT = -99; this.seesPlayer = false;
    this.fireCd = Math.random(); this.burst = 0; this.react = 0; this.thinkT = Math.random() * 0.3;
    this.path = null; this.pathIdx = 0; this.repathT = 0; this.moveTarget = null;
    this.strafe = Math.random() < 0.5 ? -1 : 1; this.strafeT = 0;
    this.grenadeCd = 10 + Math.random() * 15; this.stun = 0;
    this.friendly = !!opts.friendly; this.hostage = !!opts.hostage; this.follow = false;
    this.zone = opts.zone || null; this.tag = opts.tag || null;
    this.aimPitch = 0; this.aimBlend = 0; this.deathT = 0;
    this.speedMul = opts.speed || 1;
    this.holdPosition = !!opts.hold;
    this.build(opts);
  }

  build(opts) {
    const src = template;
    const m = this.model = SkeletonUtils.clone(src.scene);
    m.traverse(o => {
      if (o.isMesh) {
        o.castShadow = true; o.receiveShadow = true; o.frustumCulled = false;
        o.material = o.material.clone();
        if (opts.tint && !o.name.includes('visor')) o.material.color.set(opts.tint);
        if (o.name.includes('visor')) { o.material.color.set(this.friendly ? 0x334455 : 0x111111); o.material.roughness = 0.15; o.material.metalness = 0.8; }
      }
    });
    this.G.scene.add(m);
    this.mixer = new THREE.AnimationMixer(m);
    this.actions = {};
    for (const clip of src.animations) this.actions[clip.name] = this.mixer.clipAction(clip);
    for (const k of ['Idle', 'Walk', 'Run']) { const a = this.actions[k]; a.enabled = true; a.setEffectiveWeight(k === 'Idle' ? 1 : 0); a.play(); }
    this.actions.Idle.time = Math.random() * 3;
    this.weights = { Idle: 1, Walk: 0, Run: 0 };
    this.b = {};
    for (const n of ['Hips', 'Spine', 'Spine1', 'Spine2', 'Neck', 'Head', 'RightShoulder', 'RightArm', 'RightForeArm', 'RightHand', 'LeftArm', 'LeftForeArm', 'LeftHand', 'LeftUpLeg', 'LeftFoot', 'RightUpLeg', 'RightFoot']) this.b[n] = bone(m, n);
    if (!this.hostage) {
      this.rifle = this.mgr.rifleTemplate.clone(true); this.G.scene.add(this.rifle);
      this.muzzle = this.rifle.getObjectByName('muzzle') || this.rifle.children.find(c => c.userData.isMuzzle);
    }
    this.syncModel(0);
  }

  get eye() { return _t.set(this.pos.x, this.pos.y + (this.crouched ? 1.1 : 1.62), this.pos.z); }
  headPos(out = V()) { return this.b.Head ? this.b.Head.getWorldPosition(out).add(V(0, 0.09, 0)) : out.copy(this.pos).add(V(0, 1.7, 0)); }

  setAnim(dt, speed) {
    const target = this.alive ? (speed > 3.5 ? 'Run' : speed > 0.3 ? 'Walk' : 'Idle') : 'Idle';
    for (const k of ['Idle', 'Walk', 'Run']) {
      this.weights[k] += ((k === target ? 1 : 0) - this.weights[k]) * Math.min(1, dt * 6);
      this.actions[k].setEffectiveWeight(this.weights[k]);
    }
    this.actions.Walk.timeScale = Math.max(0.6, speed / 1.6);
    this.actions.Run.timeScale = Math.max(0.7, speed / 5.2);
  }

  syncModel(dt) {
    const m = this.model;
    m.position.copy(this.pos);
    let d = this.yaw - this.bodyYaw; d = Math.atan2(Math.sin(d), Math.cos(d));
    this.bodyYaw += d * Math.min(1, dt * 8);
    m.rotation.set(0, this.bodyYaw + Math.PI, 0);
    if (!this.alive) { this.updateDeath(dt); return; }
    // animation LOD: distant soldiers animate at ~10 Hz
    if (this.G.player.pos.distanceToSquared(this.pos) > 2000 && !this.hostage) {
      this._sacc = (this._sacc || 0) + dt;
      if (this._sacc < 0.1 && this._lastSync) {
        if (this.rifle) this.rifle.position.add(_a.subVectors(this.pos, this._lastSync));
        this._lastSync.copy(this.pos); m.updateMatrixWorld(true); return;
      }
      dt = this._sacc; this._sacc = 0;
    }
    (this._lastSync ||= V()).copy(this.pos);
    this.mixer.update(dt);
    m.updateMatrixWorld(true);
    if (this.hostage) return;
    // ---- aim pose: twist spine toward aim, place rifle, IK both arms ----
    const aim = this.aimBlend;
    const fwd = V(-Math.sin(this.bodyYaw), 0, -Math.cos(this.bodyYaw));
    const right = V(Math.cos(this.bodyYaw), 0, -Math.sin(this.bodyYaw));
    if (this.b.Spine2) {
      const sp = this.b.Spine1; // lean forward slightly & pitch to aim
      _q.setFromAxisAngle(right, -this.aimPitch * 0.5 * aim + 0.05);
      sp.getWorldQuaternion(_q2); sp.parent.getWorldQuaternion(_q3);
      sp.quaternion.copy(_q3.invert().multiply(_q.multiply(_q2))); sp.updateMatrixWorld(true);
    }
    const sh = this.b.RightArm.getWorldPosition(V());
    const aimDir = fwd.clone().multiplyScalar(Math.cos(this.aimPitch)).add(V(0, Math.sin(this.aimPitch), 0)).normalize();
    // lowered (patrol) vs raised (combat)
    const low = 1 - aim;
    const gripPos = sh.clone().addScaledVector(aimDir, 0.22 + 0.02 * low).addScaledVector(right, -0.06 - 0.05 * low).add(V(0, -0.1 - 0.18 * low, 0));
    const rifleDir = aimDir.clone().lerp(fwd.clone().add(V(0, -0.5, 0)).addScaledVector(right, -0.4).normalize(), low * 0.8).normalize();
    this.rifle.position.copy(gripPos);
    this.rifle.quaternion.setFromUnitVectors(V(0, 0, -1), rifleDir);
    // roll so the rifle is upright
    this.rifle.updateMatrixWorld(true);
    const handR = gripPos.clone().add(V(0, -0.03, 0));
    const handL = gripPos.clone().addScaledVector(rifleDir, 0.36).add(V(0, -0.0, 0));
    twoBoneIK(this.b.RightArm, this.b.RightForeArm, this.b.RightHand, handR, sh.clone().addScaledVector(right, 0.6).add(V(0, -0.8, 0)).addScaledVector(fwd, -0.2));
    const shL = this.b.LeftArm.getWorldPosition(V());
    twoBoneIK(this.b.LeftArm, this.b.LeftForeArm, this.b.LeftHand, handL, shL.clone().addScaledVector(right, -0.5).add(V(0, -0.9, 0)));
    // head looks along aim
    if (this.b.Head) {
      _q.setFromAxisAngle(right, -this.aimPitch * 0.4 * aim);
      const h = this.b.Head; h.getWorldQuaternion(_q2); h.parent.getWorldQuaternion(_q3);
      h.quaternion.copy(_q3.invert().multiply(_q.multiply(_q2))); h.updateMatrixWorld(true);
    }
  }

  // ---------------- hit testing ----------------
  raycast(o, d, maxDist) {
    if (!this.alive) return null;
    // broad phase
    const c = this.pos.clone().add(V(0, 1, 0));
    const [bd] = raySeg(o, d, c.clone().add(V(0, -1, 0)), c.clone().add(V(0, 0.9, 0)));
    if (bd > 0.8) return null;
    let best = null;
    const test = (p, q, r, part) => {
      const [dist, t] = raySeg(o, d, p, q);
      if (dist < r && t < maxDist && (!best || t < best.t)) best = { t, part };
    };
    const head = this.headPos(V());
    test(head, head.clone().add(V(0, 0.02, 0)), 0.14, 'head');
    const hips = this.b.Hips.getWorldPosition(V()), neck = this.b.Neck.getWorldPosition(V());
    test(hips, neck, 0.2, 'body');
    test(this.b.LeftUpLeg.getWorldPosition(V()), this.b.LeftFoot.getWorldPosition(V()), 0.11, 'leg');
    test(this.b.RightUpLeg.getWorldPosition(V()), this.b.RightFoot.getWorldPosition(V()), 0.11, 'leg');
    test(this.b.RightArm.getWorldPosition(V()), this.b.RightHand.getWorldPosition(V()), 0.08, 'arm');
    test(this.b.LeftArm.getWorldPosition(V()), this.b.LeftHand.getWorldPosition(V()), 0.08, 'arm');
    if (!best) return null;
    return { enemy: this, dist: best.t, part: best.part, point: o.clone().addScaledVector(d, best.t) };
  }

  takeDamage(dmg, dir) {
    if (!this.alive) return false;
    this.hp -= dmg;
    // getting shot = instant awareness
    this.awareness = 1; this.lastSeen = this.G.player.pos.clone(); this.lastSeenT = this.G.time;
    if (this.state !== 'combat') { this.state = 'combat'; this.react = 0.25; }
    this.flinch = 0.25;
    if (this.hp <= 0) { this.die(dir); return true; }
    return false;
  }

  die(dir) {
    this.alive = false; this.state = 'dead'; this.deathT = 0;
    this.deathDir = dir ? Math.atan2(dir.x, dir.z) : this.bodyYaw;
    this.deathFall = V(dir?.x || 0, 0, dir?.z || 0).normalize();
    this.mixer.stopAllAction();
    if (this.rifle) { this.rifleVel = V(this.deathFall.x * 1.5, 1.5, this.deathFall.z * 1.5); this.rifleSpin = V(Math.random() * 4, Math.random() * 4, 0); }
  }

  updateDeath(dt) {
    this.deathT += dt;
    const t = Math.min(1, this.deathT / 0.6), e = t * t;
    // crumple: knees then fall in hit direction
    const m = this.model;
    const axis = V(-this.deathFall.z, 0, this.deathFall.x); if (axis.lengthSq() < 0.01) axis.set(1, 0, 0);
    m.quaternion.setFromAxisAngle(axis.normalize(), e * Math.PI / 2 * 0.98);
    m.quaternion.multiply(_q.setFromEuler(new THREE.Euler(0, this.bodyYaw + Math.PI, 0)));
    m.position.copy(this.pos).add(V(0, 0.12 * Math.sin(t * Math.PI), 0)).addScaledVector(this.deathFall, e * 0.25);
    if (this.b.Spine1 && t < 1) { this.b.Spine1.rotation.x += dt * 0.6; }
    if (this.b.LeftUpLeg && t < 1) { this.b.LeftUpLeg.rotation.x -= dt * 1.2; this.b.LeftLeg = this.b.LeftLeg; }
    m.updateMatrixWorld(true);
    if (this.rifle && this.rifleVel) {
      this.rifleVel.y -= 9.8 * dt; this.rifle.position.addScaledVector(this.rifleVel, dt);
      this.rifle.rotation.x += this.rifleSpin.x * dt; this.rifle.rotation.z += this.rifleSpin.y * dt;
      if (this.rifle.position.y < this.groundY + 0.05) { this.rifle.position.y = this.groundY + 0.05; this.rifleVel = null; this.rifle.rotation.set(0, this.rifle.rotation.y, Math.PI / 2); }
    }
  }

  // ---------------- AI ----------------
  update(dt) {
    if (!this.alive) { this.syncModel(dt); return; }
    const G = this.G, P = G.player, D = G.diff;
    this.stun = Math.max(0, this.stun - dt); this.flinch = Math.max(0, (this.flinch || 0) - dt);
    let desiredSpeed = 0, moveDir = null, wantAim = this.state === 'combat' || this.state === 'alert' ? 1 : 0;
    this.groundY = 0;

    if (this.hostage) { this.updateHostage(dt); return; }

    // perception (throttled)
    this.thinkT -= dt;
    if (this.thinkT <= 0) {
      this.thinkT = 0.15 + Math.random() * 0.1;
      this.perceive(0.2);
    }
    if (this.stun > 0) { wantAim = 0; desiredSpeed = 0; }
    else if (this.state === 'idle' || this.state === 'patrol') {
      if (this.patrol && this.patrol.length) {
        const tgt = this.patrol[this.patrolIdx];
        if (this.pos.distanceTo(tgt) < 0.8) { this.patrolIdx = (this.patrolIdx + 1) % this.patrol.length; this.waitT = 2 + Math.random() * 3; }
        if ((this.waitT -= dt) <= 0) { moveDir = this.steer(tgt); desiredSpeed = 1.4; }
      } else {
        this.idleLookT = (this.idleLookT || 0) - dt;
        if (this.idleLookT <= 0) { this.idleLookT = 3 + Math.random() * 4; this.yawTarget = this.yaw + (Math.random() - 0.5) * 2; }
        if (this.yawTarget !== undefined) this.yaw += (this.yawTarget - this.yaw) * Math.min(1, dt * 1.5);
      }
    } else if (this.state === 'alert') {
      // investigate a noise / last known position
      const tgt = this.investigate;
      if (tgt && this.pos.distanceTo(tgt) > 2 && !this.holdPosition) { moveDir = this.followPath(tgt, dt); desiredSpeed = 3.0; }
      else { this.alertT = (this.alertT || 6) - dt; this.yaw += Math.sin(G.time * 0.8 + this.pos.x) * dt * 0.8; if (this.alertT <= 0) { this.state = 'patrol'; this.alertT = 6; } }
    } else if (this.state === 'combat') {
      const pEye = P.eyePos(V()), dist = this.pos.distanceTo(P.pos);
      if (this.seesPlayer) {
        // face & aim at player
        this.faceTo(P.pos, dt, 10);
        const dy = pEye.y - 0.25 - (this.pos.y + 1.45);
        this.aimPitch = Math.atan2(dy, Math.hypot(P.pos.x - this.pos.x, P.pos.z - this.pos.z));
        // move: strafe / advance / hold
        this.strafeT -= dt;
        if (this.strafeT <= 0) { this.strafeT = 1.5 + Math.random() * 2.5; this.strafe = Math.random() < 0.3 ? 0 : (Math.random() < 0.5 ? -1 : 1); this.advance = dist > 28 ? 1 : dist < 7 ? -1 : (Math.random() < 0.3 ? 1 : 0); }
        if (!this.holdPosition && this.flinch <= 0) {
          const f = V(P.pos.x - this.pos.x, 0, P.pos.z - this.pos.z).normalize(), r = V(-f.z, 0, f.x);
          const md = r.multiplyScalar(this.strafe).addScaledVector(f, this.advance * 0.8);
          if (md.lengthSq() > 0.01) {
            md.normalize();
            // don't walk off into walls
            const probe = this.pos.clone().addScaledVector(md, 1.2); const [cx, cz] = G.world.navCell(probe);
            if (G.world.navFree(cx, cz)) { moveDir = md; desiredSpeed = 1.6; }
          }
        }
        this.crouched = this.preferCrouch && !moveDir;
        // shoot
        this.react -= dt;
        if (this.react <= 0) this.shootLogic(dt, dist);
        // occasionally relocate to cover when hurt
        if (this.hp < D.hp * 0.45 && !this.coverTarget && !this.holdPosition) this.pickCover(P.pos);
      } else {
        this.crouched = false;
        const since = G.time - this.lastSeenT;
        // grenade on a camping player
        this.grenadeCd -= dt;
        if (this.grenadeCd <= 0 && since > 2 && since < 8 && this.lastSeen && this.pos.distanceTo(this.lastSeen) < 25 && this.pos.distanceTo(this.lastSeen) > 8) {
          this.grenadeCd = 18 + Math.random() * 15; this.throwGrenade(this.lastSeen);
        }
        if (this.lastSeen && !this.holdPosition) {
          if (this.pos.distanceTo(this.lastSeen) > 2.5) { moveDir = this.followPath(this.lastSeen, dt); desiredSpeed = since > 4 ? 3.2 : 2.2; this.faceTo(this.lastSeen, dt, 5); }
          else if (since > 12) { this.state = 'alert'; this.investigate = null; this.alertT = 8; }
        } else if (this.lastSeen) this.faceTo(this.lastSeen, dt, 5);
      }
      if (this.coverTarget) {
        if (this.pos.distanceTo(this.coverTarget) > 0.8) { moveDir = this.followPath(this.coverTarget, dt); desiredSpeed = 3.5; }
        else { this.coverTarget = null; this.preferCrouch = true; }
      }
    }
    if (this.stun > 0) { moveDir = null; this.yaw += Math.sin(G.time * 7) * dt; }

    // movement integration
    const sp = desiredSpeed * this.speedMul;
    const tv = moveDir ? moveDir.clone().multiplyScalar(sp) : V();
    this.vel.x += (tv.x - this.vel.x) * Math.min(1, dt * 8); this.vel.z += (tv.z - this.vel.z) * Math.min(1, dt * 8);
    this.pos.x += this.vel.x * dt; this.pos.z += this.vel.z * dt;
    // separation
    for (const o of this.mgr.list) if (o !== this && o.alive) {
      const dx = this.pos.x - o.pos.x, dz = this.pos.z - o.pos.z, d2 = dx * dx + dz * dz;
      if (d2 < 0.5 && d2 > 1e-4) { const d = Math.sqrt(d2), p = (0.7 - d) * 0.5; this.pos.x += dx / d * p; this.pos.z += dz / d * p; }
    }
    const res = G.world.collideCylinder(this.pos, 0.32, 1.7, this.vel, 0.4);
    this.pos.y = res.groundY; this.groundY = res.groundY;
    if (moveDir && !(this.state === 'combat' && this.seesPlayer)) this.faceTo(this.pos.clone().add(moveDir), dt, 6);
    const hs = Math.hypot(this.vel.x, this.vel.z);
    this.setAnim(dt, hs);
    this.aimBlend += ((wantAim ? 1 : 0) - this.aimBlend) * Math.min(1, dt * 5);
    if (!(this.state === 'combat' && this.seesPlayer)) this.aimPitch *= 1 - Math.min(1, dt * 3);
    // footsteps (audible when close)
    if (hs > 1) { this.stepD = (this.stepD || 0) + hs * dt; if (this.stepD > 1.8) { this.stepD = 0; if (P.pos.distanceTo(this.pos) < 18) audio.play('step_' + (G.world.groundMat === 'sand' ? 'sand' : 'dirt'), { pos: this.pos, vol: hs > 3 ? 0.9 : 0.5, reverb: 0.1 }); } }
    this.syncModel(dt);
  }

  perceive(dt) {
    const G = this.G, P = G.player, D = G.diff;
    if (!P.alive) { this.seesPlayer = false; return; }
    const pEye = P.eyePos(V()), eye = this.eye.clone();
    const toP = pEye.clone().sub(eye); const dist = toP.length(); toP.divideScalar(dist);
    const fwd = V(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const cone = toP.dot(fwd);
    const night = G.level?.night;
    let range = night ? (P.flashlightOn ? 60 : 32) : 85;
    if (this.state === 'combat') range *= 1.6;
    let can = dist < range && (cone > 0.2 || dist < 4 || this.state === 'combat');
    if (can) {
      // check head and chest
      const chest = P.pos.clone().add(V(0, P.crouch ? 0.7 : 1.2, 0));
      can = (G.world.lineOfSight(eye, pEye) || G.world.lineOfSight(eye, chest)) && !G.effects.smokeBlocks(eye, pEye);
    }
    this.seesPlayer = can && this.awareness >= 1;
    if (can) {
      const rate = D.awareness * (1.6 - dist / range) * (P.crouch ? 0.6 : 1) * (P.sprint ? 1.4 : 1) * (this.state === 'alert' ? 2.5 : 1) * (cone > 0.7 ? 1.4 : 0.7);
      this.awareness = Math.min(1, this.awareness + rate * dt * 1.4);
      if (this.awareness >= 1) {
        if (this.state !== 'combat') { this.state = 'combat'; this.react = D.react * (0.7 + Math.random() * 0.6); this.mgr.callout(this); }
        this.seesPlayer = true; this.lastSeen = P.pos.clone(); this.lastSeenT = G.time;
      }
    } else {
      if (this.state !== 'combat') this.awareness = Math.max(0, this.awareness - dt * 0.15);
    }
  }

  shootLogic(dt, dist) {
    const G = this.G, P = G.player, D = G.diff;
    this.fireCd -= dt;
    if (this.fireCd > 0) return;
    if (this.burst <= 0) { this.burst = 2 + ((Math.random() * 4) | 0); }
    this.burst--;
    this.fireCd = this.burst > 0 ? 0.1 + Math.random() * 0.03 : 0.5 + Math.random() * 0.9;
    if (dist > 110) return;
    // hit chance
    let chance = D.acc * Math.max(0.25, 1 - dist / 90) * (P.crouch ? 0.8 : 1) * (1 - P.moveAmount * 0.35) * (P.sprint ? 0.7 : 1) * Math.min(1, 0.45 + (G.time - this.lastSeenT + 1) * 0.0) ;
    this.shotsAtPlayer = (this.shotsAtPlayer || 0) + 1;
    if (this.shotsAtPlayer < 3) chance *= 0.4; // first shots warn
    if (this.stun > 0) chance = 0;
    const muzzle = this.muzzleWorld();
    const pChest = P.pos.clone().add(V(0, P.crouch ? 0.8 : 1.25, 0));
    G.effects.muzzleWorld(muzzle, pChest.clone().sub(muzzle).normalize(), 0.8);
    audio.shot(this.weaponSound || 'ak', muzzle, false);
    G.alertEnemies(this.pos, 35, this);
    if (Math.random() < chance) {
      P.damage(D.dmg * (0.8 + Math.random() * 0.4), this.pos);
      if (Math.random() < 0.3) G.effects.tracer(muzzle, pChest);
    } else {
      // miss: bullet lands near the player
      const off = V((Math.random() - 0.5) * 2.5, (Math.random() - 0.4) * 1.6, (Math.random() - 0.5) * 2.5);
      const tgt = pChest.clone().add(off); const dir = tgt.clone().sub(muzzle).normalize();
      const hit = G.world.raycast(muzzle, dir, 200);
      if (hit && hit.dist < muzzle.distanceTo(tgt) + 15) { G.effects.impact(hit.point, hit.normal, hit.mat); if (hit.point.distanceTo(P.pos) < 12) audio.play('hit_' + (hit.mat === 'metal' ? 'metal' : hit.mat === 'wood' ? 'wood' : hit.mat === 'dirt' || hit.mat === 'sand' || hit.mat === 'grass' ? 'dirt' : 'concrete'), { pos: hit.point, vol: 0.6 }); }
      if (Math.random() < 0.35) G.effects.tracer(muzzle, hit ? hit.point : tgt);
      // whiz if passing close
      const [cd] = raySeg(muzzle, dir, P.eyePos(V()), P.eyePos(V()).add(V(0, 0.01, 0)));
      if (cd < 2.0) { audio.play('whiz', { pos: P.eyePos(V()).addScaledVector(dir, -1), vol: 0.9, reverb: 0 }); P.shake = Math.min(1, P.shake + 0.08); G.hud.suppress(); }
    }
  }

  muzzleWorld() {
    if (this.rifle) { this.rifle.updateMatrixWorld(true); return V(0, 0.03, -0.78).applyMatrix4(this.rifle.matrixWorld); }
    return this.pos.clone().add(V(0, 1.4, 0));
  }

  throwGrenade(target) {
    const from = this.pos.clone().add(V(0, 1.7, 0));
    const d = target.clone().sub(from); const flat = Math.hypot(d.x, d.z);
    const t = Math.max(0.8, flat / 13);
    const v = V(d.x / t, (d.y + 0.5 * 20 * t * t * 0.5) / t, d.z / t);
    this.G.spawnGrenade('frag', from, v, false);
    this.G.hud.grenadeWarning();
  }

  faceTo(p, dt, k) {
    const want = Math.atan2(-(p.x - this.pos.x), -(p.z - this.pos.z));
    let d = want - this.yaw; d = Math.atan2(Math.sin(d), Math.cos(d));
    this.yaw += d * Math.min(1, dt * k);
  }

  steer(tgt) { const d = V(tgt.x - this.pos.x, 0, tgt.z - this.pos.z); return d.lengthSq() > 0.01 ? d.normalize() : null; }

  followPath(tgt, dt) {
    const G = this.G;
    this.repathT -= dt;
    if (!this.path || this.repathT <= 0 || (this.pathGoal && this.pathGoal.distanceTo(tgt) > 2)) {
      this.repathT = 1.5 + Math.random();
      this.path = G.world.findPath(this.pos, tgt); this.pathIdx = 0; this.pathGoal = tgt.clone();
      if (!this.path) return this.steer(tgt);
    }
    while (this.pathIdx < this.path.length && this.pos.distanceTo(_a.set(this.path[this.pathIdx].x, this.pos.y, this.path[this.pathIdx].z)) < 0.6) this.pathIdx++;
    if (this.pathIdx >= this.path.length) return this.steer(tgt);
    return this.steer(this.path[this.pathIdx]);
  }

  pickCover(threat) {
    const G = this.G; let best = null, bs = Infinity;
    for (const c of G.world.coverPoints) {
      const d = c.distanceTo(this.pos); if (d > 14 || d < 1.5) continue;
      // cover should be between me and threat-ish: from cover, threat not visible at crouch height
      const lowEye = c.clone().add(V(0, 1.0, 0)); const te = threat.clone().add(V(0, 1.4, 0));
      if (G.world.lineOfSight(lowEye, te)) continue;
      const s = d + c.distanceTo(threat) * 0.2;
      if (s < bs) { bs = s; best = c; }
    }
    if (best) this.coverTarget = best.clone();
  }

  updateHostage(dt) {
    const G = this.G, P = G.player;
    let speed = 0, dir = null;
    if (this.follow) {
      const d = this.pos.distanceTo(P.pos);
      if (d > 2.5) { dir = d > 4 ? this.followPath(P.pos, dt) : this.steer(P.pos); speed = d > 8 ? 5.2 : 2.8; }
      // stuck recovery: if we barely moved for a while while far behind, hop to a free cell near the player
      this.stuckT = (this.stuckT || 0) + dt;
      if (this.stuckT > 3) {
        const moved = this._lastP ? this._lastP.distanceTo(this.pos) : 99; this._lastP = this.pos.clone(); this.stuckT = 0;
        if (moved < 1.5 && d > 10) {
          const back = P.pos.clone().addScaledVector(P.forward(V()).setY(0).normalize(), -3);
          const [cx, cz] = G.world.navCell(back); const f = G.world.nearestFree(cx, cz);
          if (f) { this.pos.copy(G.world.cellPos(f[0], f[1])); this.path = null; }
        }
      }
    }
    if (dir) { this.vel.x = dir.x * speed; this.vel.z = dir.z * speed; } else { this.vel.x *= 0.8; this.vel.z *= 0.8; }
    this.pos.x += this.vel.x * dt; this.pos.z += this.vel.z * dt;
    const res = G.world.collideCylinder(this.pos, 0.32, 1.7, this.vel, 0.4); this.pos.y = res.groundY;
    if (dir) this.faceTo(this.pos.clone().add(dir), dt, 6); else if (this.follow) this.faceTo(P.pos, dt, 3);
    this.setAnim(dt, Math.hypot(this.vel.x, this.vel.z));
    this.syncModel(dt);
  }

  dispose() { this.G.scene.remove(this.model); if (this.rifle) this.G.scene.remove(this.rifle); }
}

export class EnemyManager {
  constructor(G) { this.G = G; this.list = []; }
  async init() {
    await loadSoldier();
    if (!this.rifleTemplate) this.rifleTemplate = await buildThirdPersonRifle('ak');
  }
  spawn(opts) { const e = new Enemy(this, opts); this.list.push(e); return e; }
  get alive() { return this.list.filter(e => e.alive && !e.hostage && !e.friendly); }
  update(dt) { for (const e of this.list) e.update(dt); }
  raycast(o, d, maxDist) {
    let best = null;
    for (const e of this.list) { if (e.hostage && !this.G.hitHostages) { const h = e.raycast(o, d, maxDist); if (h && (!best || h.dist < best.dist)) best = h; continue; } const h = e.raycast(o, d, maxDist); if (h && (!best || h.dist < best.dist)) best = h; }
    return best;
  }
  meleeTarget(pos, fwd, range) {
    let best = null, bd = range;
    for (const e of this.list) {
      if (!e.alive || e.hostage) continue; const d = e.pos.distanceTo(pos);
      if (d < bd && V(e.pos.x - pos.x, 0, e.pos.z - pos.z).normalize().dot(V(fwd.x, 0, fwd.z).normalize()) > 0.5) { bd = d; best = e; }
    }
    return best;
  }
  alert(pos, radius, source) {
    for (const e of this.list) {
      if (!e.alive || e.hostage || e === source) continue;
      if (e.pos.distanceTo(pos) < radius && e.state !== 'combat') {
        e.state = 'alert'; e.investigate = pos.clone(); e.alertT = 8; e.awareness = Math.max(e.awareness, 0.5);
      }
    }
  }
  callout(src) {
    // squad mates nearby are told where the player is
    for (const e of this.list) if (e !== src && e.alive && !e.hostage && e.pos.distanceTo(src.pos) < 25 && e.state !== 'combat') {
      e.state = 'alert'; e.investigate = this.G.player.pos.clone(); e.awareness = Math.max(e.awareness, 0.7);
    }
  }
  flash(pos, radius) {
    for (const e of this.list) {
      if (!e.alive) continue; const d = e.pos.distanceTo(pos);
      if (d < radius && this.G.world.lineOfSight(e.eye.clone(), pos.clone().add(V(0, 0.3, 0)))) e.stun = 4 * (1 - d / radius) + 1.5;
    }
  }
  clear() { for (const e of this.list) e.dispose(); this.list = []; }
}

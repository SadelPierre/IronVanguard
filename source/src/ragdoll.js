// Verlet-integrated ragdoll for the Mixamo soldier skeleton.
// Joints are point masses joined by rigid distance constraints (with torso cross-braces),
// they collide with the ground and every world AABB, and the skeleton's bones are re-aimed
// at the simulated joints each frame. Impulses from bullets/explosions push individual joints.
import * as THREE from 'three';

const V = () => new THREE.Vector3();
const _q = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _q3 = new THREE.Quaternion(), _a = V(), _b = V(), _c = V();

// joints: [name, bone, radius]
const JOINTS = [
  ['hips', 'Hips', 0.14], ['chest', 'Spine2', 0.16], ['head', 'Head', 0.12],
  ['lArm', 'LeftArm', 0.07], ['lFore', 'LeftForeArm', 0.06], ['lHand', 'LeftHand', 0.05],
  ['rArm', 'RightArm', 0.07], ['rFore', 'RightForeArm', 0.06], ['rHand', 'RightHand', 0.05],
  ['lUp', 'LeftUpLeg', 0.09], ['lKnee', 'LeftLeg', 0.08], ['lFoot', 'LeftFoot', 0.06],
  ['rUp', 'RightUpLeg', 0.09], ['rKnee', 'RightLeg', 0.08], ['rFoot', 'RightFoot', 0.06],
];
// constraints (pairs); torso is braced so it behaves like a semi-rigid box
const LINKS = [
  ['hips', 'chest'], ['chest', 'head'],
  ['chest', 'lArm'], ['chest', 'rArm'], ['lArm', 'rArm'], ['hips', 'lArm'], ['hips', 'rArm'],
  ['lArm', 'lFore'], ['lFore', 'lHand'], ['rArm', 'rFore'], ['rFore', 'rHand'],
  ['hips', 'lUp'], ['hips', 'rUp'], ['lUp', 'rUp'], ['chest', 'lUp'], ['chest', 'rUp'], ['lArm', 'lUp'], ['rArm', 'rUp'],
  ['lUp', 'lKnee'], ['lKnee', 'lFoot'], ['rUp', 'rKnee'], ['rKnee', 'rFoot'],
  ['head', 'lArm', 'soft'], ['head', 'rArm', 'soft'],
];
// angular limits approximated with minimum-distance constraints (stop knees/elbows bending backwards through the body)
const MIN = [['lUp', 'lFoot', 0.55], ['rUp', 'rFoot', 0.55], ['lArm', 'lHand', 0.2], ['rArm', 'rHand', 0.2], ['hips', 'head', 0.55], ['lFoot', 'rFoot', 0.12], ['lKnee', 'rKnee', 0.1]];

function bone(root, n) { return root.getObjectByName('mixamorig' + n) || root.getObjectByName('mixamorig:' + n); }

function aimBone(b, childWorld, target) {
  // rotate bone b (world space) so that the direction b->child points at target
  const bp = b.getWorldPosition(_a);
  const from = _b.subVectors(childWorld, bp), to = _c.subVectors(target, bp);
  if (from.lengthSq() < 1e-8 || to.lengthSq() < 1e-8) return;
  _q.setFromUnitVectors(from.normalize(), to.normalize());
  b.getWorldQuaternion(_q2); b.parent.getWorldQuaternion(_q3);
  b.quaternion.copy(_q3.invert().multiply(_q.multiply(_q2)));
  b.updateMatrixWorld(true);
}

export class Ragdoll {
  constructor(model, world) {
    this.model = model; this.world = world; this.t = 0; this.asleep = false;
    model.updateMatrixWorld(true);
    this.bones = {}; this.p = {}; this.prev = {}; this.r = {};
    for (const [k, bn, r] of JOINTS) {
      const b = bone(model, bn); if (!b) continue;
      this.bones[k] = b; this.p[k] = b.getWorldPosition(V()); this.prev[k] = this.p[k].clone(); this.r[k] = r;
    }
    // child bones used to aim each segment
    this.child = {
      Spine: bone(model, 'Neck'), Neck: bone(model, 'Head'),
    };
    this.spine = bone(model, 'Spine'); this.neck = bone(model, 'Neck');
    this.links = LINKS.filter(([a, b]) => this.p[a] && this.p[b]).map(([a, b, soft]) => [a, b, this.p[a].distanceTo(this.p[b]), soft ? 0.3 : 1]);
    this.mins = MIN.filter(([a, b]) => this.p[a] && this.p[b]);
    // nearby colliders only (perf)
    const c = this.p.hips;
    this.cols = world.colliders.filter(o => !o.noCollide && o.max.x > c.x - 4 && o.min.x < c.x + 4 && o.max.z > c.z - 4 && o.min.z < c.z + 4);
    this.groundY = world.groundY;
  }

  // velocity impulse (m/s) on one joint, or every joint when name is null
  push(name, vel, falloff = 0.35) {
    for (const k in this.p) {
      const f = name == null ? 1 : k === name ? 1 : falloff;
      this.prev[k].addScaledVector(vel, -f / 60); // verlet: velocity = p - prev
    }
    this.asleep = false; this.t = Math.min(this.t, 2);
  }

  nearestJoint(point) {
    let best = 'chest', bd = Infinity;
    for (const k in this.p) { const d = this.p[k].distanceToSquared(point); if (d < bd) { bd = d; best = k; } }
    return best;
  }

  update(dt) {
    if (this.asleep) return;
    this.t += dt;
    const steps = 2, h = Math.min(dt, 1 / 30) / steps;
    for (let s = 0; s < steps; s++) {
      // integrate
      for (const k in this.p) {
        const p = this.p[k], pr = this.prev[k];
        const vx = (p.x - pr.x) * 0.995, vy = (p.y - pr.y) * 0.995, vz = (p.z - pr.z) * 0.995;
        pr.copy(p);
        p.x += vx; p.y += vy - 9.8 * h * h; p.z += vz;
      }
      for (let it = 0; it < 6; it++) {
        for (const [a, b, len, stiff] of this.links) {
          const pa = this.p[a], pb = this.p[b];
          _a.subVectors(pb, pa); const d = _a.length() || 1e-6;
          const diff = (d - len) / d * 0.5 * stiff;
          pa.addScaledVector(_a, diff); pb.addScaledVector(_a, -diff);
        }
        for (const [a, b, m] of this.mins) {
          const pa = this.p[a], pb = this.p[b];
          _a.subVectors(pb, pa); const d = _a.length() || 1e-6;
          if (d < m) { const diff = (d - m) / d * 0.5; pa.addScaledVector(_a, diff); pb.addScaledVector(_a, -diff); }
        }
        this.collide();
      }
    }
    // sleep once settled
    let e = 0; for (const k in this.p) e += this.p[k].distanceToSquared(this.prev[k]);
    if ((this.t > 1.2 && e < 2e-7) || this.t > 8) this.asleep = true;
    this.pose();
  }

  collide() {
    for (const k in this.p) {
      const p = this.p[k], r = this.r[k], pr = this.prev[k];
      if (p.y < this.groundY + r) {
        p.y = this.groundY + r;
        // ground friction
        pr.x = p.x - (p.x - pr.x) * 0.55; pr.z = p.z - (p.z - pr.z) * 0.55; if (pr.y < p.y) pr.y = p.y + (pr.y - p.y) * -0.1;
      }
      for (const c of this.cols) {
        if (p.x < c.min.x - r || p.x > c.max.x + r || p.y < c.min.y - r || p.y > c.max.y + r || p.z < c.min.z - r || p.z > c.max.z + r) continue;
        // push out along the shallowest axis
        const dx1 = p.x - (c.min.x - r), dx2 = (c.max.x + r) - p.x, dy1 = p.y - (c.min.y - r), dy2 = (c.max.y + r) - p.y, dz1 = p.z - (c.min.z - r), dz2 = (c.max.z + r) - p.z;
        const m = Math.min(dx1, dx2, dy1, dy2, dz1, dz2);
        if (m === dy2) { p.y = c.max.y + r; pr.x = p.x - (p.x - pr.x) * 0.55; pr.z = p.z - (p.z - pr.z) * 0.55; }
        else if (m === dx1) p.x = c.min.x - r; else if (m === dx2) p.x = c.max.x + r;
        else if (m === dz1) p.z = c.min.z - r; else if (m === dz2) p.z = c.max.z + r;
        else p.y = c.min.y - r;
      }
    }
  }

  // drive the skeleton from the simulated joints
  pose() {
    const B = this.bones, P = this.p, hips = B.hips;
    if (!hips) return;
    // hips: place at joint and orient from (hips->chest, left->right thigh)
    const parent = hips.parent; parent.updateMatrixWorld(true);
    hips.position.copy(parent.worldToLocal(P.hips.clone()));
    hips.updateMatrixWorld(true);
    if (B.chest) aimBone(hips, B.chest.getWorldPosition(V()), P.chest);
    if (B.lUp && B.rUp) {
      // twist about the spine axis so the thighs line up
      const axis = V().subVectors(P.chest, P.hips).normalize();
      const cur = V().subVectors(B.rUp.getWorldPosition(V()), B.lUp.getWorldPosition(V())); cur.addScaledVector(axis, -cur.dot(axis));
      const want = V().subVectors(P.rUp, P.lUp); want.addScaledVector(axis, -want.dot(axis));
      if (cur.lengthSq() > 1e-6 && want.lengthSq() > 1e-6) {
        _q.setFromUnitVectors(cur.normalize(), want.normalize());
        hips.getWorldQuaternion(_q2); hips.parent.getWorldQuaternion(_q3);
        hips.quaternion.copy(_q3.invert().multiply(_q.multiply(_q2))); hips.updateMatrixWorld(true);
      }
    }
    if (this.spine && B.chest) aimBone(this.spine, B.chest.getWorldPosition(V()), P.chest);
    if (this.neck && B.head) aimBone(this.neck, B.head.getWorldPosition(V()), P.head);
    const chain = [['lArm', 'lFore'], ['lFore', 'lHand'], ['rArm', 'rFore'], ['rFore', 'rHand'], ['lUp', 'lKnee'], ['lKnee', 'lFoot'], ['rUp', 'rKnee'], ['rKnee', 'rFoot']];
    for (const [a, b] of chain) if (B[a] && B[b]) aimBone(B[a], B[b].getWorldPosition(V()), P[b]);
  }

  center() { return this.p.hips; }
}

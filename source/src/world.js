// Collision world, raycasting, navigation grid and level-building helpers
import * as THREE from 'three';
import { loadModel } from './assets.js';

const _v = new THREE.Vector3();

export function worldBoxGeometry(w, h, d, texSize = 2) {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv;
  // face order: +x, -x, +y, -y, +z, -z (4 verts each)
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let f = 0; f < 6; f++) {
    const [su, sv] = dims[f];
    for (let i = 0; i < 4; i++) {
      const idx = f * 4 + i;
      uv.setXY(idx, uv.getX(idx) * su / texSize, uv.getY(idx) * sv / texSize);
    }
  }
  uv.needsUpdate = true;
  return g;
}

export class World {
  constructor(scene) {
    this.scene = scene;
    this.colliders = [];
    this.dynamic = [];   // destructible/explosive things
    this.bounds = { minX: -100, maxX: 100, minZ: -100, maxZ: 100 };
    this.groundY = 0;
    this.groundMat = 'dirt';
    this.nav = null;
    this.coverPoints = [];
    this.lights = [];
  }

  addCollider(min, max, mat = 'concrete', extra = {}) {
    const c = { min: min.clone(), max: max.clone(), mat, ...extra };
    this.colliders.push(c);
    return c;
  }

  // Solid textured box: centre x,z on ground (y = bottom)
  box(x, y, z, w, h, d, material, { mat = 'concrete', texSize = 2, cast = true, receive = true, collide = true, rotY = 0 } = {}) {
    const mesh = new THREE.Mesh(worldBoxGeometry(w, h, d, texSize), material);
    mesh.position.set(x, y + h / 2, z);
    mesh.rotation.y = rotY;
    mesh.castShadow = cast; mesh.receiveShadow = receive;
    this.scene.add(mesh);
    if (collide) {
      if (rotY) {
        mesh.updateMatrixWorld();
        const b = new THREE.Box3().setFromObject(mesh);
        this.addCollider(b.min, b.max, mat, { mesh });
      } else {
        this.addCollider(new THREE.Vector3(x - w / 2, y, z - d / 2), new THREE.Vector3(x + w / 2, y + h, z + d / 2), mat, { mesh });
      }
    }
    return mesh;
  }

  // Wall segment from (x1,z1) to (x2,z2), axis aligned only
  wall(x1, z1, x2, z2, h, thick, material, opts = {}) {
    const cx = (x1 + x2) / 2, cz = (z1 + z2) / 2;
    const w = Math.abs(x2 - x1) || thick, d = Math.abs(z2 - z1) || thick;
    return this.box(cx, opts.y || 0, cz, w, h, d, material, opts);
  }

  // Wall with a door gap (axis aligned). gapAt is 0..1 along the wall
  wallWithDoor(x1, z1, x2, z2, h, thick, material, gapAt = 0.5, gapW = 1.4, gapH = 2.3, opts = {}) {
    const horiz = Math.abs(x2 - x1) > Math.abs(z2 - z1);
    const len = horiz ? Math.abs(x2 - x1) : Math.abs(z2 - z1);
    const a = horiz ? Math.min(x1, x2) : Math.min(z1, z2);
    const g0 = a + len * gapAt - gapW / 2, g1 = g0 + gapW;
    const fixed = horiz ? z1 : x1;
    const seg = (s, e) => {
      if (e - s < 0.05) return;
      if (horiz) this.wall(s, fixed, e, fixed, h, thick, material, opts);
      else this.wall(fixed, s, fixed, e, h, thick, material, opts);
    };
    seg(a, g0); seg(g1, a + len);
    // lintel
    if (h > gapH) {
      if (horiz) this.box((g0 + g1) / 2, gapH, fixed, gapW, h - gapH, thick, material, opts);
      else this.box(fixed, gapH, (g0 + g1) / 2, thick, h - gapH, gapW, material, opts);
    }
  }

  // Load a Poly Haven prop, place it, and give it an AABB collider
  async prop(name, x, z, { y = 0, rotY = 0, scale = 1, collide = true, mat = 'metal', cast = true, explosive = false, onlyVisual = false } = {}) {
    const gltf = await loadModel(name);
    const obj = gltf.scene.clone(true);
    obj.position.set(x, y, z);
    obj.rotation.y = rotY;
    obj.scale.setScalar(scale);
    obj.traverse(o => { if (o.isMesh) { o.castShadow = cast; o.receiveShadow = true; } });
    this.scene.add(obj);
    obj.updateMatrixWorld(true);
    let col = null;
    if (collide && !onlyVisual) {
      const b = new THREE.Box3().setFromObject(obj);
      col = this.addCollider(b.min, b.max, mat, { mesh: obj, prop: name });
      if (explosive) { col.explosive = true; col.hp = 40; this.dynamic.push(col); }
    }
    return obj;
  }

  removeCollider(c) {
    const i = this.colliders.indexOf(c);
    if (i >= 0) this.colliders.splice(i, 1);
  }

  // Ray vs all AABBs. Returns nearest hit or null
  raycast(origin, dir, maxDist = 500, ignore = null) {
    let best = maxDist, hit = null, nAxis = 0, nSign = 0;
    const ox = origin.x, oy = origin.y, oz = origin.z;
    const ix = 1 / (dir.x || 1e-9), iy = 1 / (dir.y || 1e-9), iz = 1 / (dir.z || 1e-9);
    for (let i = 0, n = this.colliders.length; i < n; i++) {
      const c = this.colliders[i];
      if (c === ignore || c.noRay) continue;
      let t1 = (c.min.x - ox) * ix, t2 = (c.max.x - ox) * ix;
      let tmin = Math.min(t1, t2), tmax = Math.max(t1, t2), ax = 0, sg = t1 < t2 ? -1 : 1;
      t1 = (c.min.y - oy) * iy; t2 = (c.max.y - oy) * iy;
      let a = Math.min(t1, t2), b = Math.max(t1, t2);
      if (a > tmin) { tmin = a; ax = 1; sg = t1 < t2 ? -1 : 1; }
      if (b < tmax) tmax = b;
      t1 = (c.min.z - oz) * iz; t2 = (c.max.z - oz) * iz;
      a = Math.min(t1, t2); b = Math.max(t1, t2);
      if (a > tmin) { tmin = a; ax = 2; sg = t1 < t2 ? -1 : 1; }
      if (b < tmax) tmax = b;
      if (tmax >= Math.max(tmin, 0) && tmin < best && tmin > 0) { best = tmin; hit = c; nAxis = ax; nSign = sg; }
    }
    // ground plane
    if (dir.y < 0) {
      const tg = (this.groundY - oy) / dir.y;
      if (tg > 0 && tg < best) { best = tg; hit = { ground: true, mat: this.groundMat }; nAxis = 1; nSign = 1; }
    }
    if (!hit) return null;
    const normal = new THREE.Vector3();
    normal.setComponent(nAxis, nSign);
    return { dist: best, point: origin.clone().addScaledVector(dir, best), normal, collider: hit, mat: hit.mat };
  }

  lineOfSight(a, b) {
    _v.subVectors(b, a); const d = _v.length(); _v.divideScalar(d);
    const h = this.raycast(a, _v, d);
    return !h || h.dist >= d - 0.05;
  }

  // Player/actor collision: cylinder (radius r, feet y, height h)
  // Returns { onGround, groundY }
  collideCylinder(pos, r, h, vel, stepH = 0.45) {
    let groundY = this.groundY;
    const feet = pos.y;
    for (const c of this.colliders) {
      if (c.noCollide) continue;
      if (c.max.y <= feet + stepH || c.min.y >= feet + h) continue;
      // closest point on rect
      const cx = Math.max(c.min.x, Math.min(pos.x, c.max.x));
      const cz = Math.max(c.min.z, Math.min(pos.z, c.max.z));
      let dx = pos.x - cx, dz = pos.z - cz;
      const d2 = dx * dx + dz * dz;
      if (d2 >= r * r) continue;
      if (d2 > 1e-8) {
        const d = Math.sqrt(d2), push = r - d;
        pos.x += dx / d * push; pos.z += dz / d * push;
        const nx = dx / d, nz = dz / d, vn = vel.x * nx + vel.z * nz;
        if (vn < 0) { vel.x -= vn * nx; vel.z -= vn * nz; }
      } else {
        // centre inside: push along min axis
        const pl = pos.x - c.min.x, pr = c.max.x - pos.x, pb = pos.z - c.min.z, pf = c.max.z - pos.z;
        const m = Math.min(pl, pr, pb, pf);
        if (m === pl) { pos.x = c.min.x - r; vel.x = Math.min(vel.x, 0); }
        else if (m === pr) { pos.x = c.max.x + r; vel.x = Math.max(vel.x, 0); }
        else if (m === pb) { pos.z = c.min.z - r; vel.z = Math.min(vel.z, 0); }
        else { pos.z = c.max.z + r; vel.z = Math.max(vel.z, 0); }
      }
    }
    // ground / step
    let ceiling = Infinity;
    for (const c of this.colliders) {
      if (c.noCollide) continue;
      if (pos.x + r * 0.7 < c.min.x || pos.x - r * 0.7 > c.max.x || pos.z + r * 0.7 < c.min.z || pos.z - r * 0.7 > c.max.z) continue;
      if (c.max.y <= feet + stepH + 0.001 && c.max.y > groundY) groundY = c.max.y;
      else if (c.min.y >= feet + 0.2 && c.min.y < ceiling) ceiling = c.min.y;
    }
    // bounds
    const B = this.bounds;
    pos.x = Math.max(B.minX + r, Math.min(B.maxX - r, pos.x));
    pos.z = Math.max(B.minZ + r, Math.min(B.maxZ - r, pos.z));
    return { groundY, ceiling };
  }

  // ---------- Navigation grid ----------
  buildNav(cell = 0.8) {
    const B = this.bounds;
    const w = Math.ceil((B.maxX - B.minX) / cell), h = Math.ceil((B.maxZ - B.minZ) / cell);
    const grid = new Uint8Array(w * h);
    const pad = 0.35;
    for (const c of this.colliders) {
      if (c.noCollide || c.max.y < 0.5 || c.min.y > 1.7) continue;
      const x0 = Math.max(0, Math.floor((c.min.x - pad - B.minX) / cell)), x1 = Math.min(w - 1, Math.floor((c.max.x + pad - B.minX) / cell));
      const z0 = Math.max(0, Math.floor((c.min.z - pad - B.minZ) / cell)), z1 = Math.min(h - 1, Math.floor((c.max.z + pad - B.minZ) / cell));
      for (let z = z0; z <= z1; z++) for (let x = x0; x <= x1; x++) grid[z * w + x] = 1;
    }
    this.nav = { cell, w, h, grid };
    // cover points: free cells adjacent to blocked cells with low/high cover
    this.coverPoints = [];
    for (let z = 1; z < h - 1; z += 2) for (let x = 1; x < w - 1; x += 2) {
      if (grid[z * w + x]) continue;
      if (grid[z * w + x + 1] || grid[z * w + x - 1] || grid[(z + 1) * w + x] || grid[(z - 1) * w + x]) {
        this.coverPoints.push(new THREE.Vector3(B.minX + (x + 0.5) * cell, 0, B.minZ + (z + 0.5) * cell));
      }
    }
  }

  navCell(p) {
    const n = this.nav, B = this.bounds;
    return [Math.max(0, Math.min(n.w - 1, Math.floor((p.x - B.minX) / n.cell))), Math.max(0, Math.min(n.h - 1, Math.floor((p.z - B.minZ) / n.cell)))];
  }
  navFree(x, z) { const n = this.nav; return x >= 0 && z >= 0 && x < n.w && z < n.h && !n.grid[z * n.w + x]; }
  cellPos(x, z) { const n = this.nav, B = this.bounds; return new THREE.Vector3(B.minX + (x + 0.5) * n.cell, 0, B.minZ + (z + 0.5) * n.cell); }

  nearestFree(cx, cz) {
    if (this.navFree(cx, cz)) return [cx, cz];
    for (let r = 1; r < 8; r++) for (let dz = -r; dz <= r; dz++) for (let dx = -r; dx <= r; dx++) {
      if (Math.abs(dx) !== r && Math.abs(dz) !== r) continue;
      if (this.navFree(cx + dx, cz + dz)) return [cx + dx, cz + dz];
    }
    return null;
  }

  findPath(from, to, maxIter = 30000) {
    const n = this.nav; if (!n) return null;
    let s = this.navCell(from), e = this.navCell(to);
    s = this.nearestFree(s[0], s[1]); e = this.nearestFree(e[0], e[1]);
    if (!s || !e) return null;
    const W = n.w, N = n.w * n.h, start = s[1] * W + s[0], goal = e[1] * W + e[0];
    if (!this._g || this._g.length !== N) { this._g = new Float32Array(N); this._came = new Int32Array(N); this._stamp = new Uint32Array(N); this._closed = new Uint32Array(N); this._run = 0; }
    const g = this._g, came = this._came, stamp = this._stamp, closed = this._closed; const run = ++this._run;
    const hfn = i => { const x = i % W, z = (i / W) | 0; const dx = Math.abs(x - e[0]), dz = Math.abs(z - e[1]); return Math.max(dx, dz) + 0.414 * Math.min(dx, dz); };
    // binary heap of [f, idx]
    const hf = [], hi = [];
    const push = (f, i) => { let k = hf.length; hf.push(f); hi.push(i); while (k > 0) { const p = (k - 1) >> 1; if (hf[p] <= hf[k]) break; [hf[p], hf[k]] = [hf[k], hf[p]]; [hi[p], hi[k]] = [hi[k], hi[p]]; k = p; } };
    const pop = () => { const r = hi[0]; const lf = hf.pop(), li = hi.pop(); if (hf.length) { hf[0] = lf; hi[0] = li; let k = 0; for (;;) { const l = 2 * k + 1, rr = l + 1; let m = k; if (l < hf.length && hf[l] < hf[m]) m = l; if (rr < hf.length && hf[rr] < hf[m]) m = rr; if (m === k) break; [hf[m], hf[k]] = [hf[k], hf[m]]; [hi[m], hi[k]] = [hi[k], hi[m]]; k = m; } } return r; };
    stamp[start] = run; g[start] = 0; came[start] = -1; push(hfn(start), start);
    let it = 0, found = start === goal;
    while (hf.length && it++ < maxIter) {
      const cur = pop();
      if (cur === goal) { found = true; break; }
      if (closed[cur] === run) continue; closed[cur] = run;
      const cx = cur % W, cz = (cur / W) | 0, gc = g[cur];
      for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) {
        if (!dx && !dz) continue;
        const nx = cx + dx, nz = cz + dz;
        if (!this.navFree(nx, nz)) continue;
        if (dx && dz && (!this.navFree(cx + dx, cz) || !this.navFree(cx, cz + dz))) continue;
        const ni = nz * W + nx, cost = gc + (dx && dz ? 1.414 : 1);
        if (stamp[ni] !== run || cost < g[ni]) { stamp[ni] = run; g[ni] = cost; came[ni] = cur; push(cost + hfn(ni), ni); }
      }
    }
    if (!found) return null;
    const path = []; let c = goal;
    while (c !== start && c >= 0) { path.push(this.cellPos(c % W, (c / W) | 0)); c = came[c]; }
    path.reverse();
    const out = []; let anchor = from.clone(); let i = 0;
    while (i < path.length) {
      let j = path.length - 1;
      for (; j > i; j--) if (this.clearWalk(anchor, path[j])) break;
      out.push(path[j]); anchor = path[j]; i = j + 1;
    }
    return out;
  }

  clearWalk(a, b) {
    const steps = Math.ceil(a.distanceTo(b) / (this.nav.cell * 0.5));
    for (let k = 1; k <= steps; k++) {
      const t = k / steps; _v.lerpVectors(a, b, t);
      const [x, z] = this.navCell(_v);
      if (!this.navFree(x, z)) return false;
    }
    return true;
  }
}

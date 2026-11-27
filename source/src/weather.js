// Weather: rain (streaks + splashes + lightning), blizzard snow and sandstorm.
// Particles live in a box that follows the camera, so it is cheap at any map size.
import * as THREE from 'three';
import { audio } from './audio.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

export class Weather {
  constructor(G, { type = 'rain', intensity = 1, wind = V(2, 0, 1), lightning = false } = {}) {
    this.G = G; this.type = type; this.intensity = intensity; this.wind = wind.clone(); this.lightning = lightning;
    this.box = type === 'rain' ? V(36, 22, 36) : V(44, 24, 44);
    const q = G.engine.quality;
    const base = { low: 0.35, medium: 0.6, high: 1, ultra: 1.3 }[q] || 0.8;
    const N = this.N = Math.floor((type === 'rain' ? 9000 : type === 'snow' ? 9000 : 7000) * intensity * base);
    this.p = new Float32Array(N * 3); this.v = new Float32Array(N);
    for (let i = 0; i < N; i++) { this.p[i * 3] = (Math.random() - 0.5) * this.box.x; this.p[i * 3 + 1] = Math.random() * this.box.y; this.p[i * 3 + 2] = (Math.random() - 0.5) * this.box.z; this.v[i] = 0.75 + Math.random() * 0.5; }
    if (type === 'rain') {
      const pos = new Float32Array(N * 6);
      this.geo = new THREE.BufferGeometry(); this.geo.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
      const m = new THREE.LineBasicMaterial({ color: 0xa8b8c8, transparent: true, opacity: 0.32 * Math.min(1, intensity + 0.2), depthWrite: false });
      this.mesh = new THREE.LineSegments(this.geo, m);
      this.fall = 13;
      audio.loopRain = audio.loop('rain', 0.32 * intensity);
    } else {
      const c = document.createElement('canvas'); c.width = c.height = 32; const g = c.getContext('2d');
      const gr = g.createRadialGradient(16, 16, 0, 16, 16, 16); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.5, 'rgba(255,255,255,0.5)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 32, 32);
      const tex = new THREE.CanvasTexture(c);
      this.geo = new THREE.BufferGeometry(); this.geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3).setUsage(THREE.DynamicDrawUsage));
      const col = type === 'snow' ? 0xffffff : 0xc9a777;
      const m = new THREE.PointsMaterial({ map: tex, color: col, size: type === 'snow' ? 0.09 : 0.06, transparent: true, opacity: type === 'snow' ? 0.85 : 0.55, depthWrite: false, sizeAttenuation: true });
      this.mesh = new THREE.Points(this.geo, m);
      this.fall = type === 'snow' ? 1.6 : 0.4;
      audio.loop('wind', (type === 'snow' ? 0.55 : 0.7) * intensity);
    }
    this.mesh.frustumCulled = false; this.mesh.renderOrder = 12;
    G.scene.add(this.mesh);
    this.flashT = 0; this.nextBolt = 6 + Math.random() * 10;
    this.envBase = G.scene.environmentIntensity;
  }

  update(dt) {
    const G = this.G, cam = G.engine.camera.position, N = this.N, p = this.p, B = this.box;
    const wx = this.wind.x, wz = this.wind.z;
    const gust = 1 + Math.sin(G.time * 0.7) * 0.35 + Math.sin(G.time * 2.3) * 0.15;
    for (let i = 0; i < N; i++) {
      const s = this.v[i];
      p[i * 3 + 1] -= this.fall * s * dt;
      p[i * 3] += wx * gust * dt * (this.type === 'rain' ? 0.6 : 1) + (this.type !== 'rain' ? Math.sin(G.time * 1.3 + i) * 0.3 * dt : 0);
      p[i * 3 + 2] += wz * gust * dt * (this.type === 'rain' ? 0.6 : 1);
      if (p[i * 3 + 1] < 0) { p[i * 3 + 1] += B.y; }
      if (p[i * 3] > B.x / 2) p[i * 3] -= B.x; else if (p[i * 3] < -B.x / 2) p[i * 3] += B.x;
      if (p[i * 3 + 2] > B.z / 2) p[i * 3 + 2] -= B.z; else if (p[i * 3 + 2] < -B.z / 2) p[i * 3 + 2] += B.z;
    }
    // under a roof? fade the precipitation out so it doesn't fall indoors
    this._inT = (this._inT || 0) - dt;
    if (this._inT <= 0) { this._inT = 0.25; this.indoor = !!G.world.raycast(cam.clone(), V(0, 1, 0), 14); }
    const m = this.mesh.material; m._base ??= m.opacity;
    m.opacity += ((this.indoor ? 0 : m._base) - m.opacity) * Math.min(1, dt * 5); this.mesh.visible = m.opacity > 0.02;
    const a = this.geo.attributes.position.array;
    const ox = cam.x, oy = Math.max(0, cam.y - 6), oz = cam.z;
    if (this.type === 'rain') {
      const sx = wx * 0.045, sz = wz * 0.045;
      for (let i = 0; i < N; i++) {
        const x = p[i * 3] + ox, y = p[i * 3 + 1] + oy, z = p[i * 3 + 2] + oz, l = 0.55 * this.v[i];
        a[i * 6] = x; a[i * 6 + 1] = y; a[i * 6 + 2] = z; a[i * 6 + 3] = x - sx; a[i * 6 + 4] = y + l; a[i * 6 + 5] = z - sz;
      }
      // splashes near the player
      this._sp = (this._sp || 0) + dt * 60 * this.intensity;
      if (this.indoor) this._sp = 0;
      while (this._sp > 1) {
        this._sp--;
        const x = ox + (Math.random() - 0.5) * 16, z = oz + (Math.random() - 0.5) * 16;
        G.effects.dust.spawn(V(x, 0.02, z), V((Math.random() - 0.5) * 0.6, 0.9 + Math.random() * 0.6, (Math.random() - 0.5) * 0.6), { life: 0.18, size: 0.035, color: [0.7, 0.75, 0.8], alpha: 0.5, grav: 9 });
      }
    } else {
      for (let i = 0; i < N; i++) { a[i * 3] = p[i * 3] + ox; a[i * 3 + 1] = p[i * 3 + 1] + oy; a[i * 3 + 2] = p[i * 3 + 2] + oz; }
    }
    this.geo.attributes.position.needsUpdate = true;
    // lightning
    if (this.lightning) {
      this.nextBolt -= dt;
      if (this.nextBolt <= 0) {
        this.nextBolt = 8 + Math.random() * 16; this.flashT = 0.45;
        const dist = 400 + Math.random() * 1500;
        setTimeout(() => audio.play('explosion', { vol: Math.max(0.3, 1.4 - dist / 1500), rate: 0.45, lowpass: 900, reverb: 1 }), dist / 343 * 1000);
      }
      if (this.flashT > 0) {
        this.flashT -= dt;
        const f = this.flashT > 0.32 ? 1 : this.flashT > 0.22 ? 0.2 : this.flashT > 0.12 ? 0.8 : Math.max(0, this.flashT / 0.12) * 0.5;
        G.scene.environmentIntensity = this.envBase + f * 2.5;
        if (G.engine.grade) G.engine.grade.uniforms.flash.value = Math.max(G.engine.grade.uniforms.flash.value, f * 0.12);
      } else G.scene.environmentIntensity = this.envBase;
    }
  }

  dispose() { this.G.scene?.remove(this.mesh); this.geo.dispose(); }
}

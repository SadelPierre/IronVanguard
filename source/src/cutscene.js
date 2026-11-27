// In-engine cinematics: camera moves along scripted shots with letterbox bars and voiced subtitles.
// def = {
//   shots: [{ from:[x,y,z], to:[x,y,z], look:[x,y,z], lookTo:[x,y,z], dur, fov, fovTo, roll }],
//   lines: [{ at, who, text }],          // radio lines (recorded voices) fired at time `at`
//   live: false,                          // true = soldiers keep running their AI during the shot
//   update(G, t, dt),                     // optional per-frame hook (move actors, trigger effects)
//   title: ['BIG LINE', 'small line'],    // optional caption card in the middle of the screen
// }
import * as THREE from 'three';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const ease = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
const arr = a => Array.isArray(a) ? V(a[0], a[1], a[2]) : a.clone();

export class Cutscene {
  constructor(G, def, onDone) {
    this.G = G; this.def = def; this.onDone = onDone; this.t = 0; this.li = 0; this.live = !!def.live;
    this.shots = def.shots.map(s => ({ ...s, from: arr(s.from), to: arr(s.to || s.from), look: arr(s.look), lookTo: arr(s.lookTo || s.look) }));
    this.total = this.shots.reduce((a, s) => a + s.dur, 0);
    this.lines = (def.lines || []).slice().sort((a, b) => a.at - b.at);
    this.baseFov = G.engine.camera.fov;
    G.hud.cinematic(true, def.title);
    if (G.player.vm) G.player.vm.visible = false;
    this.wasGod = G.player.godMode; G.player.godMode = true;
    this._look = V(0, 0, 0);
  }

  update(dt, input) {
    const G = this.G, cam = G.engine.camera;
    this.t += dt;
    // which shot?
    let start = 0, s = this.shots[this.shots.length - 1];
    for (const sh of this.shots) { if (this.t < start + sh.dur) { s = sh; break; } start += sh.dur; }
    const k = ease(Math.min(1, Math.max(0, (this.t - start) / s.dur)));
    cam.position.lerpVectors(s.from, s.to, k);
    this._look.lerpVectors(s.look, s.lookTo, k);
    cam.up.set(0, 1, 0); cam.lookAt(this._look);
    if (s.roll) cam.rotateZ(s.roll * (1 - k * 0.5));
    const fov = s.fov ? s.fov + ((s.fovTo ?? s.fov) - s.fov) * k : this.baseFov;
    if (Math.abs(cam.fov - fov) > 0.01) { cam.fov = fov; cam.updateProjectionMatrix(); }
    while (this.lines[this.li] && this.lines[this.li].at <= this.t) { const l = this.lines[this.li++]; G.radio(l.who, l.text); }
    this.def.update?.(G, this.t, dt);
    const skip = this.t > 0.8 && input && (input.pressed.has('Space') || input.pressed.has('Enter') || input.pressed.has('NumpadEnter'));
    if (skip) { G.stopRadio?.(); this.end(); return; }
    if (this.t >= this.total) this.end();
  }

  end() {
    if (this.done) return; this.done = true;
    const G = this.G, cam = G.engine.camera;
    G.hud.cinematic(false);
    if (G.player.vm && !G.gunship) G.player.vm.visible = true;
    G.player.godMode = this.wasGod;
    cam.fov = this.baseFov; cam.updateProjectionMatrix();
    G.cutscene = null;
    this.def.onEnd?.(G);
    this.onDone?.();
  }
}

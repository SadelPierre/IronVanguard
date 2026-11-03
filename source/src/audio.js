// Fully synthesized, physically-inspired audio. No external files needed.
// Gunshots = transient crack + filtered body + low-frequency boom + mechanical clack,
// soft-clipped, then sent through a generated convolution reverb for the environment.

let SR = 44100; // set to the audio device's real rate at init

function rnd(seed) { let s = seed >>> 0 || 1; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }

// Simple RBJ biquad on a Float32Array (in-place)
function biquad(buf, type, f, q = 0.707, gainDb = 0) {
  const w = 2 * Math.PI * f / SR, cs = Math.cos(w), sn = Math.sin(w), al = sn / (2 * q), A = Math.pow(10, gainDb / 40);
  let b0, b1, b2, a0, a1, a2;
  switch (type) {
    case 'lp': b0 = (1 - cs) / 2; b1 = 1 - cs; b2 = b0; a0 = 1 + al; a1 = -2 * cs; a2 = 1 - al; break;
    case 'hp': b0 = (1 + cs) / 2; b1 = -(1 + cs); b2 = b0; a0 = 1 + al; a1 = -2 * cs; a2 = 1 - al; break;
    case 'bp': b0 = al; b1 = 0; b2 = -al; a0 = 1 + al; a1 = -2 * cs; a2 = 1 - al; break;
    case 'peak': b0 = 1 + al * A; b1 = -2 * cs; b2 = 1 - al * A; a0 = 1 + al / A; a1 = -2 * cs; a2 = 1 - al / A; break;
  }
  b0 /= a0; b1 /= a0; b2 /= a0; a1 /= a0; a2 /= a0;
  let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
  for (let i = 0; i < buf.length; i++) {
    const x = buf[i], y = b0 * x + b1 * x1 + b2 * x2 - a1 * y1 - a2 * y2;
    x2 = x1; x1 = x; y2 = y1; y1 = y; buf[i] = y;
  }
  return buf;
}

function noise(n, r) { const b = new Float32Array(n); for (let i = 0; i < n; i++) b[i] = r() * 2 - 1; return b; }
function env(buf, attack, decay, start = 0) {
  for (let i = 0; i < buf.length; i++) {
    const t = i / SR - start;
    buf[i] *= t < 0 ? 0 : t < attack ? t / attack : Math.exp(-(t - attack) / decay);
  }
  return buf;
}
function mix(dst, src, g = 1, offset = 0) { const o = Math.floor(offset * SR); for (let i = 0; i < src.length && i + o < dst.length; i++) dst[i + o] += src[i] * g; return dst; }
function norm(buf, peak = 0.95) { let m = 0; for (const v of buf) m = Math.max(m, Math.abs(v)); if (m > 0) for (let i = 0; i < buf.length; i++) buf[i] *= peak / m; return buf; }
function clip(buf, drive = 2) { const k = Math.tanh(drive); for (let i = 0; i < buf.length; i++) buf[i] = Math.tanh(buf[i] * drive) / k; return buf; }
function sine(n, f0, f1, decay, r, phaseNoise = 0) {
  const b = new Float32Array(n); let ph = 0;
  for (let i = 0; i < n; i++) { const t = i / SR; const f = f1 + (f0 - f1) * Math.exp(-t / (decay * 0.5)); ph += 2 * Math.PI * f / SR + (phaseNoise ? (r() - 0.5) * phaseNoise : 0); b[i] = Math.sin(ph) * Math.exp(-t / decay); }
  return b;
}

function gunshot(p, seed) {
  const r = rnd(seed); const n = Math.floor(SR * (p.len || 0.7));
  const out = new Float32Array(n);
  // 1. supersonic crack / muzzle blast transient
  const crack = env(biquad(noise(n, r), 'hp', p.crackHP || 2000, 0.8), 0.0004, p.crackDecay || 0.006);
  mix(out, crack, p.crack ?? 1.0);
  // 2. body (combustion gases)
  const body = env(biquad(biquad(noise(n, r), 'lp', p.bodyLP || 3500), 'hp', 150), 0.001, p.bodyDecay || 0.06);
  mix(out, body, p.body ?? 1.2);
  // 3. low boom
  const boom = sine(n, p.boomF0 || 150, p.boomF1 || 48, p.boomDecay || 0.12, r, 0.02);
  mix(out, boom, p.boom ?? 0.9);
  // 4. mechanical action
  if (p.mech) {
    const m = env(biquad(noise(Math.floor(SR * 0.05), r), 'bp', p.mechF || 3200, 3), 0.0005, 0.006);
    mix(out, m, p.mech, p.mechT || 0.045);
  }
  // 5. rumbly tail
  const tail = env(biquad(noise(n, r), 'lp', p.tailLP || 600), 0.01, p.tailDecay || 0.25);
  mix(out, tail, p.tail ?? 0.35);
  clip(out, p.drive || 2.5);
  biquad(out, 'peak', 2500, 1, p.presence || 2);
  return norm(out, 0.98);
}

const SHOTS = {
  ar:      { crack: 1.0, body: 1.2, boomF0: 160, boomF1: 50, boomDecay: 0.10, bodyDecay: 0.055, mech: 0.25, drive: 3, tail: 0.4 },
  ak:      { crack: 0.9, body: 1.5, bodyLP: 2800, boomF0: 140, boomF1: 42, boomDecay: 0.14, bodyDecay: 0.07, mech: 0.3, mechF: 2400, drive: 3.4, tail: 0.5 },
  smg:     { crack: 0.7, body: 1.0, bodyLP: 4200, boomF0: 180, boomF1: 70, boomDecay: 0.06, bodyDecay: 0.035, mech: 0.35, mechF: 3800, mechT: 0.03, drive: 2.5, tail: 0.25, len: 0.45 },
  shotgun: { crack: 1.2, body: 2.0, bodyLP: 2200, boomF0: 120, boomF1: 35, boomDecay: 0.2, bodyDecay: 0.11, drive: 4, tail: 0.7, tailDecay: 0.4, len: 1.0 },
  sniper:  { crack: 1.6, crackDecay: 0.009, body: 1.8, bodyLP: 3000, boomF0: 110, boomF1: 32, boomDecay: 0.22, bodyDecay: 0.09, drive: 4.5, tail: 0.8, tailDecay: 0.6, len: 1.3 },
  pistol:  { crack: 0.8, body: 0.9, bodyLP: 4500, boomF0: 200, boomF1: 80, boomDecay: 0.06, bodyDecay: 0.04, mech: 0.3, mechF: 4200, mechT: 0.025, drive: 2.2, tail: 0.2, len: 0.45 },
  magnum:  { crack: 1.3, body: 1.6, bodyLP: 3000, boomF0: 130, boomF1: 45, boomDecay: 0.15, bodyDecay: 0.08, drive: 3.8, tail: 0.55, len: 0.9 },
  lmg:     { crack: 1.0, body: 1.4, bodyLP: 3000, boomF0: 140, boomF1: 45, boomDecay: 0.12, bodyDecay: 0.06, mech: 0.3, mechF: 2600, drive: 3.4, tail: 0.5 },
  suppressed: { crack: 0.12, crackHP: 3000, body: 0.6, bodyLP: 1400, boomF0: 110, boomF1: 60, boom: 0.25, boomDecay: 0.04, bodyDecay: 0.03, mech: 0.9, mechF: 3000, mechT: 0.01, drive: 1.4, tail: 0.05, len: 0.3, presence: -3 },
};

function clickSound(seed, f = 3000, q = 4, dec = 0.008, n2 = 0, f2 = 1500, gap = 0.02) {
  const r = rnd(seed); const n = Math.floor(SR * 0.25); const out = new Float32Array(n);
  mix(out, env(biquad(noise(n, r), 'bp', f, q), 0.0003, dec));
  if (n2) mix(out, env(biquad(noise(n, r), 'bp', f2, q * 0.7), 0.0005, dec * 1.5), n2, gap);
  return norm(out, 0.8);
}

function rattle(seed, dur = 0.25, f = 2200) {
  const r = rnd(seed); const n = Math.floor(SR * dur); const out = new Float32Array(n);
  for (let k = 0; k < 7; k++) mix(out, env(biquad(noise(Math.floor(SR * 0.05), r), 'bp', f * (0.7 + r() * 0.8), 3), 0.0005, 0.006), 0.4 + r() * 0.6, r() * dur * 0.8);
  return norm(out, 0.6);
}

function footstep(seed, surf) {
  const r = rnd(seed); const n = Math.floor(SR * 0.18); const out = new Float32Array(n);
  const lp = surf === 'metal' ? 4000 : surf === 'concrete' ? 2600 : surf === 'wood' ? 1500 : 1200;
  mix(out, env(biquad(noise(n, r), 'lp', lp), 0.003, 0.025), 1);
  mix(out, env(biquad(noise(n, r), 'bp', surf === 'dirt' ? 600 : 900, 1.2), 0.002, 0.04), 0.8, 0.012);
  if (surf === 'dirt' || surf === 'sand') mix(out, env(biquad(noise(n, r), 'hp', 3000), 0.01, 0.05), 0.25, 0.02);
  if (surf === 'metal') mix(out, sine(n, 900, 820, 0.05, r), 0.15, 0.003);
  return norm(out, 0.5);
}

function explosion(seed, big = 1) {
  const r = rnd(seed); const n = Math.floor(SR * 3.0); const out = new Float32Array(n);
  mix(out, env(biquad(noise(n, r), 'lp', 5000), 0.0005, 0.03), 1.0);
  mix(out, env(biquad(noise(n, r), 'lp', 900), 0.003, 0.35 * big), 1.6);
  mix(out, sine(n, 90, 28, 0.6, r, 0.05), 1.4);
  mix(out, env(biquad(noise(n, r), 'lp', 250), 0.05, 0.9 * big), 1.2);
  // debris patter
  for (let k = 0; k < 30; k++) mix(out, env(biquad(noise(Math.floor(SR * 0.04), r), 'bp', 1500 + r() * 3000, 2), 0.0005, 0.01), 0.06 + r() * 0.08, 0.3 + r() * 1.6);
  clip(out, 2.5);
  return norm(out, 0.98);
}

function whiz(seed) {
  const r = rnd(seed); const n = Math.floor(SR * 0.25); const out = new Float32Array(n);
  const b = noise(n, r);
  // doppler sweep via moving bandpass approximated by segments
  for (let s = 0; s < 6; s++) {
    const seg = b.slice(Math.floor(n * s / 6), Math.floor(n * (s + 1) / 6));
    biquad(seg, 'bp', 4200 - s * 500, 4);
    for (let i = 0; i < seg.length; i++) out[Math.floor(n * s / 6) + i] = seg[i];
  }
  for (let i = 0; i < n; i++) { const t = i / n; out[i] *= Math.sin(Math.PI * t) ** 2; }
  mix(out, env(biquad(noise(n, r), 'hp', 3000), 0.0003, 0.004), 0.7, 0.1);
  return norm(out, 0.7);
}

function impact(seed, mat) {
  const r = rnd(seed); const n = Math.floor(SR * 0.3); const out = new Float32Array(n);
  if (mat === 'metal') { mix(out, env(biquad(noise(n, r), 'hp', 2500), 0.0003, 0.004), 0.6); mix(out, sine(n, 2600 + r() * 1500, 2400, 0.12, r), 0.5); mix(out, sine(n, 4100 + r() * 900, 3900, 0.07, r), 0.3); }
  else if (mat === 'wood') { mix(out, env(biquad(noise(n, r), 'bp', 900, 2), 0.0005, 0.02), 1); mix(out, sine(n, 300, 220, 0.04, r), 0.4); }
  else if (mat === 'flesh') { mix(out, env(biquad(noise(n, r), 'lp', 700), 0.001, 0.03), 1); mix(out, sine(n, 120, 70, 0.05, r), 0.6); }
  else if (mat === 'dirt' || mat === 'sand' || mat === 'grass') { mix(out, env(biquad(noise(n, r), 'lp', 1800), 0.001, 0.025), 1); mix(out, env(biquad(noise(n, r), 'hp', 2500), 0.004, 0.04), 0.3, 0.01); }
  else { mix(out, env(biquad(noise(n, r), 'bp', 2400, 1.2), 0.0003, 0.012), 1); mix(out, env(biquad(noise(n, r), 'hp', 5000), 0.003, 0.05), 0.3, 0.005); }
  return norm(out, 0.6);
}

function tone(freqs, dur, type = 'sine', decay = 0.3, gap = 0) {
  const n = Math.floor(SR * dur); const out = new Float32Array(n);
  freqs.forEach((f, k) => {
    for (let i = 0; i < n; i++) {
      const t = i / SR - k * gap; if (t < 0) continue;
      const ph = 2 * Math.PI * f * t;
      const w = type === 'sine' ? Math.sin(ph) : type === 'tri' ? 2 / Math.PI * Math.asin(Math.sin(ph)) : Math.sign(Math.sin(ph)) * 0.4;
      out[i] += w * Math.exp(-t / decay) * Math.min(1, t * 200);
    }
  });
  return norm(out, 0.5);
}

function loopNoise(seed, dur, lp, hp, lfo = 0.1, depth = 0.5) {
  const r = rnd(seed); const n = Math.floor(SR * dur);
  const b = noise(n, r); biquad(b, 'lp', lp); if (hp) biquad(b, 'hp', hp);
  for (let i = 0; i < n; i++) { const t = i / SR; b[i] *= 1 - depth + depth * (0.5 + 0.5 * Math.sin(2 * Math.PI * lfo * t + Math.sin(t * 0.37) * 2)); }
  // crossfade ends for seamless loop
  const xf = Math.floor(SR * 0.5);
  for (let i = 0; i < xf; i++) { const a = i / xf; b[i] = b[i] * a + b[n - xf + i] * (1 - a); }
  return norm(b.subarray(0, n - xf), 0.5);
}

function crickets(seed, dur) {
  const r = rnd(seed); const n = Math.floor(SR * dur); const out = new Float32Array(n);
  for (let c = 0; c < 5; c++) {
    const f = 4200 + r() * 1200, rate = 2 + r() * 3, off = r();
    for (let i = 0; i < n; i++) {
      const t = i / SR; const chirp = (Math.sin(2 * Math.PI * rate * t + off * 6) > 0.6 ? 1 : 0) * (0.5 + 0.5 * Math.sin(2 * Math.PI * 30 * t));
      out[i] += Math.sin(2 * Math.PI * f * t) * chirp * 0.15;
    }
  }
  const xf = Math.floor(SR * 0.3);
  for (let i = 0; i < xf; i++) { const a = i / xf; out[i] = out[i] * a + out[n - xf + i] * (1 - a); }
  return norm(out.subarray(0, n - xf), 0.25);
}

function impulse(seed, dur, decay, early = []) {
  const r = rnd(seed); const n = Math.floor(SR * dur);
  const L = new Float32Array(n), R = new Float32Array(n);
  for (let i = 0; i < n; i++) { const t = i / SR; const e = Math.exp(-t / decay); L[i] = (r() * 2 - 1) * e; R[i] = (r() * 2 - 1) * e; }
  biquad(L, 'lp', 3500); biquad(R, 'lp', 3500);
  for (const [t, g] of early) { const i = Math.floor(t * SR); if (i < n) { L[i] += g; R[Math.min(n - 1, i + 40)] += g * 0.9; } }
  return [L, R];
}

export class Audio {
  constructor() {
    this.ctx = null; this.buffers = {}; this.ready = false;
    this.volume = { master: 0.8, sfx: 1, music: 0.5 };
    this.loops = [];
  }

  init() {
    if (this.ctx) { this.ctx.resume?.(); return; }
    const C = window.AudioContext || window.webkitAudioContext;
    if (!C) return;
    let ctx; try { ctx = new C({ sampleRate: SR }); } catch (e) { ctx = new C(); }
    this.ctx = ctx;
    SR = ctx.sampleRate; // generate every sound at the context's native rate -> no mismatch possible
    this.master = ctx.createGain(); this.master.gain.value = this.volume.master;
    const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -10; comp.knee.value = 8; comp.ratio.value = 6; comp.attack.value = 0.002; comp.release.value = 0.15;
    this.master.connect(comp).connect(ctx.destination);
    this.sfx = ctx.createGain(); this.sfx.connect(this.master);
    this.music = ctx.createGain(); this.music.gain.value = this.volume.music; this.music.connect(this.master);
    this.ambient = ctx.createGain(); this.ambient.gain.value = 0.5; this.ambient.connect(this.master);
    // muffle filter used for flashbang / explosions near player
    this.muffle = ctx.createBiquadFilter(); this.muffle.type = 'lowpass'; this.muffle.frequency.value = 20000;
    this.sfx.disconnect(); this.sfx.connect(this.muffle).connect(this.master);
    this.reverb = ctx.createConvolver(); this.reverbGain = ctx.createGain(); this.reverbGain.gain.value = 0.35;
    this.reverb.connect(this.reverbGain).connect(this.muffle);
    this.setEnvironment('outdoor');
    this.generate();
    this.ready = true;
  }

  buf(data) { const b = this.ctx.createBuffer(1, data.length, SR); b.copyToChannel(data, 0); return b; }

  generate() {
    const B = this.buffers;
    for (const [k, p] of Object.entries(SHOTS)) B['shot_' + k] = [0, 1, 2].map(i => this.buf(gunshot(p, 1000 + i * 77 + k.length * 13)));
    B.magOut = [this.buf(clickSound(11, 1800, 3, 0.01, 0.6, 900, 0.03))];
    B.magIn = [this.buf(clickSound(12, 2400, 4, 0.006, 1.0, 1300, 0.05))];
    B.bolt = [this.buf(clickSound(13, 3200, 5, 0.008, 1.0, 2000, 0.09))];
    B.slide = [this.buf(clickSound(14, 4000, 4, 0.007, 0.9, 2600, 0.07))];
    B.shell = [this.buf(clickSound(15, 1500, 2, 0.015, 0.8, 2500, 0.06))];
    B.pump = [this.buf(clickSound(16, 1200, 2, 0.02, 1.0, 900, 0.14))];
    B.dry = [this.buf(clickSound(17, 5000, 6, 0.004))];
    B.switch = [this.buf(rattle(18, 0.3))];
    B.pin = [this.buf(clickSound(19, 6000, 8, 0.01, 0.5, 4000, 0.08))];
    B.bounce = [0, 1].map(i => this.buf(impact(20 + i, 'metal')));
    for (const s of ['dirt', 'concrete', 'metal', 'wood', 'sand', 'grass']) B['step_' + s] = [0, 1, 2, 3].map(i => this.buf(footstep(100 + i * 7 + s.length, s)));
    B.land = [this.buf(footstep(222, 'dirt'))];
    B.explosion = [0, 1].map(i => this.buf(explosion(300 + i)));
    B.flashbang = [this.buf(explosion(310, 0.3))];
    B.tinnitus = [this.buf(tone([3800], 4, 'sine', 1.6))];
    B.whiz = [0, 1, 2].map(i => this.buf(whiz(400 + i)));
    for (const m of ['concrete', 'metal', 'wood', 'flesh', 'dirt']) B['hit_' + m] = [0, 1, 2].map(i => this.buf(impact(500 + i * 5 + m.length, m)));
    B.hitmarker = [this.buf(tone([1900], 0.08, 'tri', 0.02))];
    B.headshot = [this.buf(tone([2600, 3400], 0.25, 'tri', 0.05, 0.03))];
    B.kill = [this.buf(tone([1200, 1800], 0.2, 'tri', 0.05, 0.05))];
    B.ui = [this.buf(tone([900], 0.06, 'tri', 0.015))];
    B.uiHover = [this.buf(tone([1500], 0.04, 'sine', 0.01))];
    B.objective = [this.buf(tone([523, 659, 784, 1046], 1.2, 'tri', 0.35, 0.12))];
    B.fail = [this.buf(tone([392, 330, 262], 1.4, 'tri', 0.5, 0.2))];
    B.beep = [this.buf(tone([1400], 0.12, 'sine', 0.04))];
    B.melee = [this.buf(footstep(600, 'wood'))];
    B.hurt = [0, 1].map(i => this.buf(impact(700 + i, 'flesh')));
    B.wind = [this.buf(loopNoise(800, 12, 500, 60, 0.07, 0.7))];
    B.waves = [this.buf(loopNoise(801, 14, 900, 120, 0.12, 0.85))];
    B.crickets = [this.buf(crickets(802, 8))];
    B.hum = [this.buf(loopNoise(803, 8, 200, 40, 0.05, 0.3))];
  }

  setEnvironment(type) {
    if (!this.ctx) return;
    try { this._setEnv(type); } catch (e) { console.warn('reverb disabled', e); }
  }
  _setEnv(type) {
    const [L, R] = type === 'indoor' ? impulse(9, 1.0, 0.25) : type === 'urban' ? impulse(9, 2.2, 0.5, [[0.08, 0.5], [0.15, 0.35], [0.23, 0.25]]) : impulse(9, 2.6, 0.55, [[0.12, 0.3], [0.31, 0.2], [0.6, 0.12]]);
    const b = this.ctx.createBuffer(2, L.length, SR); b.copyToChannel(L, 0); b.copyToChannel(R, 1);
    this.reverb.normalize = true;
    this.reverb.buffer = b;
  }

  setListener(cam) {
    if (!this.ctx) return;
    const l = this.ctx.listener, p = cam.position, t = this.ctx.currentTime;
    const f = cam.getWorldDirection(this._f || (this._f = new cam.position.constructor()));
    if (l.positionX) {
      l.positionX.setValueAtTime(p.x, t); l.positionY.setValueAtTime(p.y, t); l.positionZ.setValueAtTime(p.z, t);
      l.forwardX.setValueAtTime(f.x, t); l.forwardY.setValueAtTime(f.y, t); l.forwardZ.setValueAtTime(f.z, t);
      l.upX.setValueAtTime(0, t); l.upY.setValueAtTime(1, t); l.upZ.setValueAtTime(0, t);
    } else { l.setPosition(p.x, p.y, p.z); l.setOrientation(f.x, f.y, f.z, 0, 1, 0); }
    this.listenerPos = p;
  }

  play(name, { pos = null, vol = 1, rate = 1, reverb = 0.3, lowpass = 0, bus = null, detune = 0.04 } = {}) {
    if (!this.ready) return null;
    const list = this.buffers[name]; if (!list) return null;
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = list[(Math.random() * list.length) | 0];
    src.playbackRate.value = rate * (1 + (Math.random() - 0.5) * detune);
    let node = src;
    const g = ctx.createGain(); g.gain.value = vol;
    if (lowpass) { const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = lowpass; node.connect(f); node = f; }
    node.connect(g); node = g;
    if (pos) {
      const p = ctx.createPanner();
      p.panningModel = 'HRTF'; p.distanceModel = 'inverse'; p.refDistance = 3; p.rolloffFactor = 1.1; p.maxDistance = 400;
      if (p.positionX) { p.positionX.value = pos.x; p.positionY.value = pos.y; p.positionZ.value = pos.z; } else p.setPosition(pos.x, pos.y, pos.z);
      node.connect(p); node = p;
    }
    node.connect(bus || this.sfx);
    if (reverb > 0) { const rs = ctx.createGain(); rs.gain.value = reverb; node.connect(rs).connect(this.reverb); }
    src.start();
    return src;
  }

  // distant gunfire gets darker with distance
  shot(kind, pos, isPlayer) {
    if (isPlayer) return this.play('shot_' + kind, { vol: 0.9, reverb: 0.45 });
    const d = this.listenerPos ? pos.distanceTo(this.listenerPos) : 20;
    const lp = Math.max(900, 16000 - d * 160);
    return this.play('shot_' + kind, { pos, vol: 1.3, reverb: 0.6, lowpass: lp });
  }

  loop(name, vol = 0.4, bus) {
    if (!this.ready) return;
    const src = this.ctx.createBufferSource(); src.buffer = this.buffers[name][0]; src.loop = true;
    const g = this.ctx.createGain(); g.gain.value = vol; src.connect(g).connect(bus || this.ambient); src.start();
    this.loops.push(src); return g;
  }
  stopLoops() { for (const s of this.loops) { try { s.stop(); } catch (e) {} } this.loops = []; }

  setMuffle(amount) { // 0..1
    if (!this.ctx) return;
    this.muffle.frequency.setTargetAtTime(20000 * Math.pow(1 - amount * 0.97, 2) + 200, this.ctx.currentTime, 0.05);
  }

  setVolumes(master, music) {
    this.volume.master = master; this.volume.music = music;
    if (this.master) { this.master.gain.value = master; this.music.gain.value = music; }
  }

  // procedural music: ominous drone + pulse for menus / tension
  startMusic(mood = 'menu') {
    if (!this.ready) return;
    this.stopMusic();
    const ctx = this.ctx, t = ctx.currentTime, out = ctx.createGain(); out.gain.value = 0; out.gain.linearRampToValueAtTime(0.25, t + 3); out.connect(this.music);
    const nodes = [];
    const root = mood === 'menu' ? 55 : 49;
    [1, 1.5, 2, 2.997].forEach((m, i) => {
      const o = ctx.createOscillator(); o.type = i % 2 ? 'sawtooth' : 'triangle'; o.frequency.value = root * m; o.detune.value = (i - 1.5) * 7;
      const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 400 + i * 120; f.Q.value = 2;
      const lfo = ctx.createOscillator(); lfo.frequency.value = 0.05 + i * 0.03; const lg = ctx.createGain(); lg.gain.value = 250; lfo.connect(lg).connect(f.frequency); lfo.start();
      const g = ctx.createGain(); g.gain.value = 0.12 / (i + 1);
      o.connect(f).connect(g).connect(out); o.start(); nodes.push(o, lfo);
    });
    // heartbeat-like pulse
    const pulse = () => {
      if (!this._music) return;
      const now = ctx.currentTime;
      for (const dt of [0, 0.22]) {
        const o = ctx.createOscillator(); o.frequency.setValueAtTime(70, now + dt); o.frequency.exponentialRampToValueAtTime(40, now + dt + 0.25);
        const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, now + dt); g.gain.exponentialRampToValueAtTime(0.35, now + dt + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, now + dt + 0.3);
        o.connect(g).connect(out); o.start(now + dt); o.stop(now + dt + 0.35);
      }
      this._pulseT = setTimeout(pulse, 1700);
    };
    this._music = { out, nodes };
    pulse();
  }
  stopMusic() {
    if (!this._music) return;
    const { out, nodes } = this._music; this._music = null; clearTimeout(this._pulseT);
    const t = this.ctx.currentTime; out.gain.cancelScheduledValues(t); out.gain.setValueAtTime(out.gain.value, t); out.gain.linearRampToValueAtTime(0, t + 1.5);
    setTimeout(() => nodes.forEach(n => { try { n.stop(); } catch (e) {} }), 1700);
  }
}

export const audio = new Audio();

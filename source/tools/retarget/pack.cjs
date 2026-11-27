const fs = require('fs');
const OUT = JSON.parse(fs.readFileSync('out.json'));
const ints = []; const meta = { clips: [] };
for (const [name, c] of Object.entries(OUT.clips)) {
  if (name === 'Death') continue; // ragdolls handle deaths
  const cm = { name, fps: c.fps, frames: c.frames, bones: [] };
  for (const b of c.bones) {
    const a = c.q[b];
    let constant = true;
    for (let i = 4; i < a.length && constant; i++) if (Math.abs(a[i] - a[i % 4]) > 0.004) constant = false;
    const off = ints.length;
    const n = constant ? 4 : a.length;
    for (let i = 0; i < n; i++) ints.push(Math.round(Math.max(-1, Math.min(1, a[i])) * 32767));
    cm.bones.push([b, off, constant ? 1 : 0]);
  }
  cm.hip = ints.length;
  for (const v of c.hip) ints.push(Math.round(v * 100)); // hips local units are cm (parent is scaled 0.01)
  meta.clips.push(cm);
}
const maxHip = Math.max(...Object.values(OUT.clips).flatMap(c => c.hip.map(Math.abs)));
console.log('max hip local', maxHip);
const js = Buffer.from(JSON.stringify(meta));
const head = Buffer.alloc(4); head.writeUInt32LE(js.length);
let pad = (4 + js.length) % 2 ? Buffer.alloc(1) : Buffer.alloc(0);
const data = Buffer.from(new Int16Array(ints).buffer);
fs.writeFileSync('soldier_anims.bin', Buffer.concat([head, js, pad, data]));
console.log('ints', ints.length, 'bytes', fs.statSync('soldier_anims.bin').size);

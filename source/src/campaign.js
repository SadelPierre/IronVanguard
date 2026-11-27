// "Iron Vanguard: Black Tide" campaign: story, acts, Ironman lives
const store = {
  get(k, d) { try { const v = localStorage.getItem('iv_' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('iv_' + k, JSON.stringify(v)); } catch (e) {} },
  del(k) { try { localStorage.removeItem('iv_' + k); } catch (e) {} },
};

export const LIVES = { recruit: 9, regular: 7, hardened: 5, veteran: 3 };

export const ACTS = [
  { n: 'I', name: 'IGNITION', tag: 'A routine hunt for an insurgent commander lights the fuse.' },
  { n: 'II', name: 'THE NETWORK', tag: 'The trail leads to Black Tide — and to stolen missiles.' },
  { n: 'III', name: 'BETRAYAL', tag: 'Someone inside Vanguard Command is protecting General Rask.' },
  { n: 'IV', name: 'ENDGAME', tag: 'Burned, hunted and out of time. One last move.' },
];

// Story order. Missions that are not built yet are listed so the campaign map shows what is coming.
export const STORY = [
  { id: 'bootcamp', act: 0, title: 'Boot Camp' },
  { id: 'dustdevil', act: 0, title: 'Dust Devil' },
  { id: 'overwatch', act: 0, title: 'Overwatch', soon: true },
  { id: 'ironharbor', act: 1, title: 'Iron Harbor' },
  { id: 'deepfreeze', act: 1, title: 'Deep Freeze', soon: true },
  { id: 'angel', act: 1, title: 'Angel of Death', soon: true },
  { id: 'midnight', act: 2, title: 'Midnight' },
  { id: 'burnnotice', act: 2, title: 'Burn Notice', soon: true },
  { id: 'blacktide', act: 2, title: 'Black Tide', soon: true },
  { id: 'convoy', act: 3, title: 'Convoy', soon: true },
  { id: 'skyfall', act: 3, title: 'Skyfall', soon: true },
  { id: 'irondawn', act: 3, title: 'Iron Dawn', soon: true },
];

export const CAST = {
  REYES: { name: 'Sgt. "Ghost" Reyes', role: 'You' },
  KESSLER: { name: 'Col. Kessler', role: 'Vanguard Command' },
  OKAFOR: { name: 'Sgt. Okafor', role: 'Squad lead' },
  VOSS: { name: 'Cpl. Voss', role: 'Marksman' },
  HAYES: { name: 'Lt. Hayes', role: 'Intelligence' },
  RASK: { name: 'Gen. Rask', role: 'Black Tide' },
  OVERLORD: { name: 'Overlord', role: 'Air support' },
};

export function playable() { return STORY.filter(m => !m.soon); }

export class Campaign {
  constructor() { this.s = store.get('campaign', null); }
  get active() { return !!(this.s && this.s.active); }
  get state() { return this.s; }
  save() { store.set('campaign', this.s); }

  start(difficulty) {
    const max = LIVES[difficulty] || 7;
    this.s = { active: true, difficulty, lives: max, maxLives: max, idx: 0, deathsHere: 0, deaths: 0, kills: 0, headshots: 0, time: 0, tags: [], flawless: 0, startedAt: Date.now() };
    store.del('save'); this.save();
  }
  currentId() { return playable()[this.s.idx]?.id; }
  missionNumber(id) { return STORY.findIndex(m => m.id === id) + 1; }
  actOf(id) { return ACTS[STORY.find(m => m.id === id)?.act ?? 0]; }

  // returns 'respawn' or 'gameover'
  loseLife() {
    this.s.lives = Math.max(0, this.s.lives - 1); this.s.deaths++; this.s.deathsHere++;
    if (this.s.lives <= 0) { this.s.active = false; this.save(); this.recordRun(false); store.del('save'); return 'gameover'; }
    this.save(); return 'respawn';
  }
  addLife(reason) {
    if (this.s.lives >= this.s.maxLives) return false;
    this.s.lives++; this.save(); return reason || true;
  }
  foundTag(levelId) {
    if (this.s.tags.includes(levelId)) return false;
    this.s.tags.push(levelId); this.save(); return this.addLife('DOG TAG');
  }
  // mission done: returns { bonus, finished, nextId, newAct }
  complete(levelId, stats) {
    const out = {};
    this.s.kills += stats.kills || 0; this.s.headshots += stats.headshots || 0; this.s.time += stats.time || 0;
    if (this.s.deathsHere === 0 && levelId !== 'bootcamp') { this.s.flawless++; out.bonus = this.addLife('FLAWLESS') ? 'FLAWLESS MISSION: +1 LIFE' : null; }
    this.s.deathsHere = 0;
    const list = playable();
    const cur = list.findIndex(m => m.id === levelId);
    const prevAct = STORY.find(m => m.id === levelId)?.act;
    this.s.idx = cur + 1;
    const next = list[this.s.idx];
    if (!next) { out.finished = true; this.s.active = false; this.recordRun(true); }
    else { out.nextId = next.id; out.newAct = next.act !== prevAct ? ACTS[STORY.find(m => m.id === next.id).act] : null; }
    this.save();
    return out;
  }
  recordRun(won) {
    const hof = store.get('halloffame', []);
    const s = this.s, reached = playable()[Math.min(s.idx, playable().length - 1)]?.title || '';
    hof.push({ won, difficulty: s.difficulty, missions: s.idx, reached, kills: s.kills, deaths: s.deaths, time: Math.round(s.time), date: Date.now() });
    hof.sort((a, b) => (b.won - a.won) || (b.missions - a.missions) || (b.kills - a.kills));
    store.set('halloffame', hof.slice(0, 10));
  }
  hallOfFame() { return store.get('halloffame', []); }
  abandon() { if (this.s) { this.s.active = false; this.save(); } store.del('save'); }
}

export const campaign = new Campaign();

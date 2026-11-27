// Career progression: XP, 20 ranks, weapon/attachment/perk unlocks, lifetime challenges and mission scores.
// Everything is stored locally (localStorage 'iv_career'). Online leaderboards live in leaderboard.js.
const KEY = 'iv_career';

export const RANKS = [
  [0, 'Private'], [1500, 'Private First Class'], [3500, 'Specialist'], [6000, 'Corporal'], [9000, 'Sergeant'],
  [13000, 'Staff Sergeant'], [18000, 'Sergeant First Class'], [24000, 'Master Sergeant'], [31000, 'First Sergeant'], [39000, 'Sergeant Major'],
  [48000, 'Second Lieutenant'], [58000, 'First Lieutenant'], [70000, 'Captain'], [84000, 'Major'], [100000, 'Lieutenant Colonel'],
  [120000, 'Colonel'], [145000, 'Brigadier General'], [175000, 'Major General'], [210000, 'Lieutenant General'], [250000, 'General'],
];
export const RANK_SHORT = ['PVT', 'PFC', 'SPC', 'CPL', 'SGT', 'SSG', 'SFC', 'MSG', '1SG', 'SGM', '2LT', '1LT', 'CPT', 'MAJ', 'LTC', 'COL', 'BG', 'MG', 'LTG', 'GEN'];

// rank index (0-based) at which each item unlocks
export const UNLOCKS = {
  weapon: { m4a1: 0, m9: 0, mp5: 1, m870: 2, ak47: 3, bolt762: 4, d50: 5, m249: 7 },
  optic: { iron: 0, reddot: 1, holo: 3, acog: 8 },
  muzzle: { none: 0, suppressor: 2, compensator: 6 },
  under: { none: 0, grip: 4, laser: 9 },
  mag: { std: 0, ext: 5 },
  perk: { stopping: 0, sleight: 0, steady: 1, jugg: 3, lightweight: 5, scavenger: 6 },
  lethal: { frag: 0, c4: 2 },
  tactical: { flash: 0, smoke: 1 },
};
const NAMES = {
  weapon: { mp5: 'MP5', m870: 'M870 shotgun', ak47: 'AK-47', bolt762: 'Bolt-Action 7.62', d50: 'D50 Magnum', m249: 'M249 LMG' },
  optic: { reddot: 'Red Dot sight', holo: 'Holographic sight', acog: '4x ACOG' },
  muzzle: { suppressor: 'Suppressor', compensator: 'Compensator' },
  under: { grip: 'Vertical Grip', laser: 'Laser Sight' },
  mag: { ext: 'Extended Mag' },
  perk: { steady: 'Steady Aim perk', jugg: 'Juggernaut perk', lightweight: 'Lightweight perk', scavenger: 'Scavenger perk' },
  lethal: { c4: 'Semtex' }, tactical: { smoke: 'Smoke grenade' },
};

export const CHALLENGES = [
  { id: 'kills100', name: 'Rifleman', desc: 'Get 100 kills', stat: 'kills', goal: 100, xp: 2500 },
  { id: 'kills500', name: 'Warfighter', desc: 'Get 500 kills', stat: 'kills', goal: 500, xp: 7500 },
  { id: 'hs50', name: 'Marksman', desc: 'Get 50 headshots', stat: 'headshots', goal: 50, xp: 3000 },
  { id: 'hs250', name: 'Deadeye', desc: 'Get 250 headshots', stat: 'headshots', goal: 250, xp: 8000 },
  { id: 'missions10', name: 'Operator', desc: 'Complete 10 missions', stat: 'missions', goal: 10, xp: 3000 },
  { id: 'flawless5', name: 'Untouchable', desc: 'Finish 5 missions without dying', stat: 'flawless', goal: 5, xp: 5000 },
  { id: 'veteran', name: 'Veteran', desc: 'Complete a mission on Veteran', stat: 'veteranWins', goal: 1, xp: 4000 },
  { id: 'campaign', name: 'Black Tide', desc: 'Finish the campaign', stat: 'campaigns', goal: 1, xp: 10000 },
  { id: 'endings', name: 'Both Sides', desc: 'See both endings', stat: 'endings', goal: 2, xp: 6000 },
];

export const DIFF_MULT = { recruit: 0.75, regular: 1, hardened: 1.4, veteran: 2 };
const PAR = { bootcamp: 360, dustdevil: 600, overwatch: 600, ironharbor: 660, deepfreeze: 600, angel: 540, midnight: 600, burnnotice: 480, blacktide: 720, convoy: 600, skyfall: 600, irondawn: 720, laststand: 900 };

// leaderboard score for one mission run
export function missionScore(s, diffKey) {
  const par = PAR[s.level?.id] || 600;
  const base = 1000 + (s.kills || 0) * 100 + (s.headshots || 0) * 50 + (s.acc || 0) * 20 + Math.max(0, par - (s.time || 0)) * 3;
  return Math.round(base * (DIFF_MULT[diffKey] || 1));
}

class Career {
  constructor() {
    let d = null; try { d = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
    if (!d) d = this.migrate();
    this.d = Object.assign({ xp: 0, kills: 0, headshots: 0, missions: 0, flawless: 0, veteranWins: 0, campaigns: 0, endingsSeen: [], done: [], best: {}, callsign: '' }, d);
  }
  // players from before ranks existed start with XP for what they've already finished
  migrate() {
    let prog = {}, camp = null;
    try { prog = JSON.parse(localStorage.getItem('iv_settings') || '{}').progress || JSON.parse(localStorage.getItem('iv_progress') || '{}'); } catch (e) {}
    try { camp = JSON.parse(localStorage.getItem('iv_campaign') || 'null'); } catch (e) {}
    const n = Object.keys(prog || {}).length, kills = camp?.kills || 0;
    return { xp: n * 2500 + kills * 100, kills };
  }
  save() { try { localStorage.setItem(KEY, JSON.stringify(this.d)); } catch (e) {} }

  get xp() { return this.d.xp; }
  rankOf(xp = this.d.xp) { let r = 0; for (let i = 0; i < RANKS.length; i++) if (xp >= RANKS[i][0]) r = i; return r; }
  get rank() { return this.rankOf(); }
  rankName(r = this.rank) { return RANKS[r][1]; }
  // 0..1 progress to the next rank
  rankProgress(xp = this.d.xp) { const r = this.rankOf(xp); if (r >= RANKS.length - 1) return 1; return (xp - RANKS[r][0]) / (RANKS[r + 1][0] - RANKS[r][0]); }
  nextRankXP(r = this.rank) { return RANKS[Math.min(RANKS.length - 1, r + 1)][0]; }

  unlocked(cat, id) { const need = UNLOCKS[cat]?.[id]; return need === undefined || this.rank >= need; }
  needRank(cat, id) { return UNLOCKS[cat]?.[id] ?? 0; }

  // swap anything locked in a loadout for the default
  sanitize(L) {
    if (!this.unlocked('weapon', L.primary)) L.primary = 'm4a1';
    if (!this.unlocked('weapon', L.secondary)) L.secondary = 'm9';
    for (const id of Object.keys(L.att || {})) for (const cat of ['optic', 'muzzle', 'under', 'mag']) {
      const a = L.att[id]?.[cat]; if (a && !this.unlocked(cat, a)) L.att[id][cat] = { optic: 'iron', muzzle: 'none', under: 'none', mag: 'std' }[cat];
    }
    L.perks = (L.perks || []).filter(p => this.unlocked('perk', p));
    if (L.perks.length < 2) for (const p of ['stopping', 'sleight']) if (L.perks.length < 2 && !L.perks.includes(p)) L.perks.push(p);
    if (!this.unlocked('lethal', L.lethal)) L.lethal = 'frag';
    if (!this.unlocked('tactical', L.tactical)) L.tactical = 'flash';
    return L;
  }

  unlocksBetween(r0, r1) {
    const out = [];
    for (const [cat, map] of Object.entries(UNLOCKS)) for (const [id, r] of Object.entries(map)) if (r > r0 && r <= r1 && NAMES[cat]?.[id]) out.push(NAMES[cat][id]);
    return out;
  }

  // Called after every finished mission. Returns what happened for the results screen.
  award(s, { win, diffKey, mode, flawless = false, campaignDone = false }) {
    const before = this.d.xp, r0 = this.rank;
    const lines = [];
    const killXP = (s.kills || 0) * 100 + (s.headshots || 0) * 50;
    if (killXP) lines.push(['Kills & headshots', killXP]);
    this.d.kills += s.kills || 0; this.d.headshots += s.headshots || 0;
    let score = 0;
    if (win) {
      const mult = DIFF_MULT[diffKey] || 1;
      const first = !this.d.done.includes(s.level.id);
      const bonus = Math.round((first ? 2000 : 800) * mult);
      lines.push([first ? 'Mission complete (first time)' : 'Mission complete', bonus]);
      if (flawless) { lines.push(['Flawless', 500]); this.d.flawless++; }
      if ((s.acc || 0) >= 60 && (s.shots || 0) >= 20) lines.push(['Accuracy 60%+', 400]);
      this.d.missions++; if (diffKey === 'veteran') this.d.veteranWins++;
      if (first) this.d.done.push(s.level.id);
      if (campaignDone) { this.d.campaigns++; lines.push(['Campaign complete', 5000]); }
      if (s.ending && !this.d.endingsSeen.includes(s.ending)) this.d.endingsSeen.push(s.ending);
      score = missionScore(s, diffKey);
      const b = this.d.best[s.level.id];
      if (!b || score > b.score) this.d.best[s.level.id] = { score, diff: diffKey, time: Math.round(s.time), date: Date.now() };
    }
    // challenges
    const stats = { ...this.d, endings: this.d.endingsSeen.length };
    const doneCh = this.d.challenges || (this.d.challenges = []);
    const newCh = [];
    for (const c of CHALLENGES) if (!doneCh.includes(c.id) && (stats[c.stat] || 0) >= c.goal) { doneCh.push(c.id); newCh.push(c); lines.push([`Challenge: ${c.name}`, c.xp]); }
    const gained = lines.reduce((a, l) => a + l[1], 0);
    this.d.xp += gained;
    const r1 = this.rank;
    this.save();
    return { gained, lines, before, after: this.d.xp, rankUp: r1 > r0, r0, r1, unlocks: this.unlocksBetween(r0, r1), challenges: newCh, score, best: this.d.best[s.level?.id] };
  }

  challengeState() { const stats = { ...this.d, endings: this.d.endingsSeen.length }; return CHALLENGES.map(c => ({ ...c, have: Math.min(c.goal, stats[c.stat] || 0), done: (this.d.challenges || []).includes(c.id) })); }

  get callsign() { return this.d.callsign; }
  set callsign(v) { this.d.callsign = String(v || '').replace(/[^A-Za-z0-9 _.-]/g, '').trim().slice(0, 16); this.save(); }
}

export const career = new Career();

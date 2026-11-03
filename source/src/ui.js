// Menus: main, campaign, loadout, settings, pause, loading, results
import { WEAPONS, ATTACHMENTS, LETHALS, TACTICALS, PERKS, allowedAttachments, computeStats } from './weapons.js';
import { DIFFICULTY } from './enemies.js';
import { LEVELS } from './levels.js';
import { audio } from './audio.js';

const $ = s => document.querySelector(s);
const store = {
  get(k, d) { try { const v = localStorage.getItem('iv_' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('iv_' + k, JSON.stringify(v)); } catch (e) {} },
};

export const DEFAULT_SETTINGS = { quality: 'high', renderScale: 1, sensitivity: 1, fov: 78, invertY: false, master: 0.8, music: 0.5, showFps: false, autoReload: true, difficulty: 'regular' };
export const DEFAULT_LOADOUT = {
  primary: 'm4a1', secondary: 'm9', lethal: 'frag', tactical: 'flash', perks: ['stopping', 'sleight'],
  att: { m4a1: { optic: 'reddot', muzzle: 'none', under: 'grip', mag: 'std' }, ak47: { optic: 'iron', muzzle: 'none', under: 'none', mag: 'std' }, mp5: { optic: 'holo', muzzle: 'suppressor', under: 'none', mag: 'std' }, m870: { optic: 'iron', muzzle: 'none', under: 'none', mag: 'std' }, m249: { optic: 'iron', muzzle: 'none', under: 'none', mag: 'std' }, bolt762: { muzzle: 'none', mag: 'std' }, m9: { optic: 'iron', muzzle: 'none', under: 'none', mag: 'std' }, d50: { optic: 'iron', muzzle: 'none', under: 'none', mag: 'std' } },
};

function fmtTime(t) { const m = Math.floor(t / 60), s = Math.floor(t % 60); return `${m}:${String(s).padStart(2, '0')}`; }

export class UI {
  constructor() {
    this.root = $('#menu');
    this.settings = { ...DEFAULT_SETTINGS, ...store.get('settings', {}) };
    const L = store.get('loadout', null);
    this.loadout = L ? { ...DEFAULT_LOADOUT, ...L, att: { ...DEFAULT_LOADOUT.att, ...(L.att || {}) } } : structuredClone(DEFAULT_LOADOUT);
    this.progress = store.get('progress', {});
    this.selectedLevel = LEVELS[0].id;
    this.root.addEventListener('mouseover', e => { if (e.target.closest('button,.card,.opt')) audio.play('uiHover', { vol: 0.15, reverb: 0 }); });
    this.root.addEventListener('click', e => { if (e.target.closest('button,.card,.opt')) audio.play('ui', { vol: 0.3, reverb: 0 }); });
  }

  save() { store.set('settings', this.settings); store.set('loadout', this.loadout); store.set('progress', this.progress); }
  show(on) { this.root.style.display = on ? 'flex' : 'none'; }

  screen(html, cls = '') {
    this.show(true);
    this.root.className = cls;
    this.root.innerHTML = `<div class="bg"></div><div class="screen">${html}</div>`;
  }

  main() {
    audio.startMusic('menu');
    this.screen(`
      <div class="title"><div class="t1">IRON VANGUARD</div><div class="t2">MODERN OPERATIONS</div></div>
      <div class="mainnav">
        <button data-a="campaign" class="primary">CAMPAIGN</button>
        <button data-a="loadoutMain">LOADOUT</button>
        <button data-a="settingsMain">SETTINGS</button>
        <button data-a="controls">CONTROLS</button>
      </div>
      <div class="foot">Built with three.js • CC0 art from Poly Haven • Fully synthesized audio</div>`, 'main');
    this.root.querySelectorAll('[data-a]').forEach(b => b.onclick = () => this[b.dataset.a]());
  }

  campaign() {
    const lv = LEVELS.find(l => l.id === this.selectedLevel);
    const cards = LEVELS.map((l, i) => {
      const p = this.progress[l.id];
      return `<div class="card ${l.id === lv.id ? 'sel' : ''}" data-l="${l.id}"><div class="num">${String(i).padStart(2, '0')}</div><div><div class="cn">${l.name}</div><div class="cs">${l.location}</div></div>${p ? `<div class="done">✔ ${fmtTime(p.best)}</div>` : ''}</div>`;
    }).join('');
    const diffs = Object.entries(DIFFICULTY).map(([k, d]) => `<div class="opt ${this.settings.difficulty === k ? 'sel' : ''}" data-d="${k}">${d.name}</div>`).join('');
    this.screen(`
      <div class="hdr"><button class="back">‹ BACK</button><h1>CAMPAIGN</h1></div>
      <div class="cols">
        <div class="list">${cards}</div>
        <div class="brief">
          <div class="op">${lv.name}</div>
          <div class="loc">${lv.location} — ${lv.time}</div>
          <p>${lv.briefing}</p>
          <ul class="objs">${lv.objectivesPreview.map(o => `<li>${o}</li>`).join('')}</ul>
          <div class="lbl">DIFFICULTY</div><div class="opts">${diffs}</div>
          <div class="lo">LOADOUT: <b>${WEAPONS[this.loadout.primary].name}</b> + <b>${WEAPONS[this.loadout.secondary].name}</b> <button class="small" data-a="loadout">EDIT</button></div>
          <button class="primary deploy">DEPLOY ›</button>
        </div>
      </div>`);
    this.root.querySelector('.back').onclick = () => this.main();
    this.root.querySelectorAll('.card').forEach(c => c.onclick = () => { this.selectedLevel = c.dataset.l; this.campaign(); });
    this.root.querySelectorAll('[data-d]').forEach(c => c.onclick = () => { this.settings.difficulty = c.dataset.d; this.save(); this.campaign(); });
    this.root.querySelector('[data-a=loadout]').onclick = () => this.loadoutScreen(() => this.campaign());
    this.root.querySelector('.deploy').onclick = () => this.onDeploy(this.selectedLevel);
  }

  loadoutMain() { this.loadoutScreen(() => this.main()); }

  loadoutScreen(back) {
    const L = this.loadout;
    const bars = id => {
      const s = computeStats(id, L.att[id] || {}, L.perks);
      const dmg = Math.min(1, (s.damage[0] * (s.pellets || 1)) / 130), rof = Math.min(1, s.rpm / 900), rng = Math.min(1, s.range[1] / 120), mob = Math.min(1, (s.move - 0.8) / 0.3), ctl = Math.max(0.05, 1 - s.recoil[0] / 4.5);
      return [['DAMAGE', dmg], ['FIRE RATE', rof], ['RANGE', rng], ['MOBILITY', mob], ['CONTROL', ctl]].map(([n, v]) => `<div class="stat"><span>${n}</span><div><i style="width:${Math.round(v * 100)}%"></i></div></div>`).join('') + `<div class="stat"><span>MAGAZINE</span><b>${s.mag}</b></div>`;
    };
    const wlist = slot => Object.entries(WEAPONS).filter(([, w]) => w.slot === slot).map(([id, w]) => `<div class="opt w ${L[slot] === id ? 'sel' : ''}" data-slot="${slot}" data-w="${id}"><b>${w.name}</b><small>${w.type}</small></div>`).join('');
    const attSel = id => {
      const allow = allowedAttachments(id); const cur = L.att[id] || (L.att[id] = {});
      return Object.entries(allow).filter(([, list]) => list.length).map(([cat, list]) => `<div class="attrow"><span>${{ optic: 'OPTIC', muzzle: 'MUZZLE', under: 'UNDERBARREL', mag: 'MAGAZINE' }[cat]}</span>${list.map(a => `<div class="opt a ${(cur[cat] || list[0]) === a ? 'sel' : ''}" data-id="${id}" data-cat="${cat}" data-att="${a}">${ATTACHMENTS[cat][a].name}</div>`).join('')}</div>`).join('');
    };
    const sel = (obj, key) => Object.entries(obj).map(([k, v]) => `<div class="opt g ${L[key] === k ? 'sel' : ''}" data-key="${key}" data-v="${k}">${v.name}</div>`).join('');
    const perks = Object.entries(PERKS).map(([k, p]) => `<div class="opt p ${L.perks.includes(k) ? 'sel' : ''}" data-perk="${k}"><b>${p.name}</b><small>${p.desc}</small></div>`).join('');
    this.screen(`
      <div class="hdr"><button class="back">‹ BACK</button><h1>LOADOUT</h1></div>
      <div class="lgrid">
        <section><h2>PRIMARY</h2><div class="wl">${wlist('primary')}</div><div class="desc">${WEAPONS[L.primary].desc}</div><div class="stats">${bars(L.primary)}</div><h3>ATTACHMENTS</h3>${attSel(L.primary)}</section>
        <section><h2>SECONDARY</h2><div class="wl">${wlist('secondary')}</div><div class="desc">${WEAPONS[L.secondary].desc}</div><div class="stats">${bars(L.secondary)}</div><h3>ATTACHMENTS</h3>${attSel(L.secondary)}</section>
        <section><h2>EQUIPMENT</h2><h3>LETHAL</h3><div class="opts">${sel(LETHALS, 'lethal')}</div><h3>TACTICAL</h3><div class="opts">${sel(TACTICALS, 'tactical')}</div><h2 style="margin-top:22px">PERKS <small>(choose 2)</small></h2><div class="perks">${perks}</div></section>
      </div>`, 'loadout');
    this.root.querySelector('.back').onclick = () => { this.save(); back(); };
    const re = () => { this.save(); this.loadoutScreen(back); };
    this.root.querySelectorAll('.opt.w').forEach(o => o.onclick = () => { L[o.dataset.slot] = o.dataset.w; re(); });
    this.root.querySelectorAll('.opt.a').forEach(o => o.onclick = () => { (L.att[o.dataset.id] ||= {})[o.dataset.cat] = o.dataset.att; re(); });
    this.root.querySelectorAll('.opt.g').forEach(o => o.onclick = () => { L[o.dataset.key] = o.dataset.v; re(); });
    this.root.querySelectorAll('.opt.p').forEach(o => o.onclick = () => {
      const k = o.dataset.perk; if (L.perks.includes(k)) L.perks = L.perks.filter(p => p !== k); else { L.perks.push(k); if (L.perks.length > 2) L.perks.shift(); }
      re();
    });
  }

  settingsScreen(back) {
    const S = this.settings;
    const q = ['low', 'medium', 'high', 'ultra'].map(k => `<div class="opt ${S.quality === k ? 'sel' : ''}" data-q="${k}">${k.toUpperCase()}</div>`).join('');
    const rng = (k, min, max, step, label, fmt = v => v) => `<div class="srow"><span>${label}</span><input type="range" min="${min}" max="${max}" step="${step}" value="${S[k]}" data-k="${k}"><b>${fmt(S[k])}</b></div>`;
    const tg = (k, label) => `<div class="srow"><span>${label}</span><div class="opt tg ${S[k] ? 'sel' : ''}" data-t="${k}">${S[k] ? 'ON' : 'OFF'}</div></div>`;
    this.screen(`
      <div class="hdr"><button class="back">‹ BACK</button><h1>SETTINGS</h1></div>
      <div class="settings">
        <h2>GRAPHICS</h2>
        <div class="srow"><span>Quality preset</span><div class="opts">${q}</div></div>
        <p class="note">High/Ultra enable 4K shadow maps, ambient occlusion (GTAO), bloom and SMAA. Use Medium/Low on laptops.</p>
        ${rng('renderScale', 0.5, 1.5, 0.05, 'Render scale', v => Math.round(v * 100) + '%')}
        ${rng('fov', 60, 100, 1, 'Field of view')}
        ${tg('showFps', 'Show FPS')}
        <h2>CONTROLS</h2>
        ${rng('sensitivity', 0.2, 3, 0.05, 'Mouse sensitivity', v => (+v).toFixed(2))}
        ${tg('invertY', 'Invert Y')}
        ${tg('autoReload', 'Auto reload')}
        <h2>AUDIO</h2>
        ${rng('master', 0, 1, 0.05, 'Master volume', v => Math.round(v * 100))}
        ${rng('music', 0, 1, 0.05, 'Music volume', v => Math.round(v * 100))}
      </div>`, 'settingsS');
    this.root.querySelector('.back').onclick = () => { this.save(); this.onSettings?.(); back(); };
    this.root.querySelectorAll('[data-q]').forEach(o => o.onclick = () => { S.quality = o.dataset.q; this.save(); this.onSettings?.(); this.settingsScreen(back); });
    this.root.querySelectorAll('[data-t]').forEach(o => o.onclick = () => { S[o.dataset.t] = !S[o.dataset.t]; this.save(); this.onSettings?.(); this.settingsScreen(back); });
    this.root.querySelectorAll('input[type=range]').forEach(r => r.oninput = () => {
      S[r.dataset.k] = parseFloat(r.value); r.nextElementSibling.textContent = r.dataset.k === 'renderScale' ? Math.round(r.value * 100) + '%' : ['master', 'music'].includes(r.dataset.k) ? Math.round(r.value * 100) : r.dataset.k === 'sensitivity' ? (+r.value).toFixed(2) : r.value;
      this.save(); this.onSettings?.(true);
    });
  }
  settingsMain() { this.settingsScreen(() => this.main()); }

  controls(back) {
    const rows = [['W A S D', 'Move'], ['Mouse', 'Look'], ['Left click', 'Fire'], ['Right click', 'Aim down sights'], ['Shift', 'Sprint / hold breath (scoped)'], ['Space', 'Jump'], ['C / Ctrl', 'Crouch (while sprinting: slide)'], ['R', 'Reload'], ['1 / 2 / Mouse wheel / X', 'Switch weapon'], ['B', 'Toggle fire mode'], ['G', 'Lethal grenade'], ['Q', 'Tactical grenade'], ['V', 'Melee'], ['F (hold)', 'Interact / plant / free hostage'], ['T', 'Flashlight'], ['N', 'Night vision (night missions)'], ['Esc', 'Pause']];
    this.screen(`<div class="hdr"><button class="back">‹ BACK</button><h1>CONTROLS</h1></div>
      <div class="controls">${rows.map(([k, v]) => `<div class="crow"><kbd>${k}</kbd><span>${v}</span></div>`).join('')}</div>`);
    this.root.querySelector('.back').onclick = () => (typeof back === 'function' ? back() : this.main());
  }

  loading(level) {
    const tips = ['Crouching makes you harder to spot and steadies your aim.', 'Enemies show up on your radar when they fire at you.', 'Headshots deal double damage or more.', 'Flashbangs stun everyone who looks at them — including you.', 'Suppressors keep you off the radar but reduce range.', 'Explosive tanks and jerrycans can be shot to detonate them.', 'Hold Shift while scoped with the sniper rifle to steady your breath.', 'Sprint then press C to slide into cover.'];
    this.screen(`<div class="loading">
      <div class="op">${level.name}</div><div class="loc">${level.location} — ${level.time}</div>
      <p class="briefing">${level.briefing}</p>
      <div class="pbar"><div></div></div><div class="pstat">Loading…</div>
      <div class="tip">TIP: ${tips[(Math.random() * tips.length) | 0]}</div></div>`, 'loadingS');
  }
  progressBar(p, txt) { const b = this.root.querySelector('.pbar div'); if (b) b.style.width = (p * 100) + '%'; const s = this.root.querySelector('.pstat'); if (s) s.textContent = txt; }
  readyToStart(cb) {
    const s = this.root.querySelector('.pstat'); if (s) s.innerHTML = '<button class="primary go">CLICK TO BEGIN</button>';
    const go = this.root.querySelector('.go'); go.onclick = cb; go.focus();
  }

  pause(handlers) {
    this.screen(`<div class="pause"><h1>PAUSED</h1>
      <button class="primary" data-a="resume">RESUME</button>
      <button data-a="restart">RESTART MISSION</button>
      <button data-a="settings">SETTINGS</button>
      <button data-a="controls">CONTROLS</button>
      <button data-a="quit">QUIT TO MENU</button></div>`, 'pauseS');
    this.root.querySelectorAll('[data-a]').forEach(b => b.onclick = () => {
      const a = b.dataset.a;
      if (a === 'settings') this.settingsScreen(() => this.pause(handlers));
      else if (a === 'controls') this.controls(() => this.pause(handlers));
      else handlers[a]();
    });
  }

  results(win, s, reason) {
    if (win) {
      const p = this.progress[s.level.id];
      if (!p || s.time < p.best) this.progress[s.level.id] = { best: s.time, diff: s.difficulty };
      this.save();
    }
    const idx = LEVELS.findIndex(l => l.id === s.level.id), next = LEVELS[idx + 1];
    this.screen(`<div class="results ${win ? 'win' : 'lose'}">
      <h1>${win ? 'MISSION COMPLETE' : 'MISSION FAILED'}</h1>
      <div class="op">${s.level.name}</div>
      ${reason ? `<p class="reason">${reason}</p>` : ''}
      <div class="rs">
        <div><b>${fmtTime(s.time)}</b><span>TIME</span></div>
        <div><b>${s.kills}</b><span>KILLS</span></div>
        <div><b>${s.headshots}</b><span>HEADSHOTS</span></div>
        <div><b>${s.acc}%</b><span>ACCURACY</span></div>
        <div><b>${s.difficulty}</b><span>DIFFICULTY</span></div>
      </div>
      <div class="btns">
        ${win && next ? `<button class="primary" data-a="next">NEXT MISSION ›</button>` : ''}
        <button class="${win && next ? '' : 'primary'}" data-a="retry">${win ? 'REPLAY' : 'RETRY'}</button>
        <button data-a="menu">CAMPAIGN</button>
      </div></div>`, 'resultsS');
    this.root.querySelectorAll('[data-a]').forEach(b => b.onclick = () => {
      if (b.dataset.a === 'next') { this.selectedLevel = next.id; this.onDeploy(next.id); }
      else if (b.dataset.a === 'retry') this.onDeploy(s.level.id);
      else this.campaign();
    });
  }
  missionComplete(s) { this.results(true, s); }
  missionFailed(reason, s) { this.results(false, s, reason); }
}

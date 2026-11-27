// Menus: main, campaign, loadout, settings, pause, loading, results
import { WEAPONS, ATTACHMENTS, LETHALS, TACTICALS, PERKS, allowedAttachments, computeStats } from './weapons.js';
import { DIFFICULTY } from './enemies.js';
import { LEVELS } from './levels.js';
import { audio } from './audio.js';
import { ACTIONS, defaultBinds, keyName } from './input.js';
import { campaign, STORY, ACTS, LIVES, playable } from './campaign.js';

const $ = s => document.querySelector(s);
const store = {
  get(k, d) { try { const v = localStorage.getItem('iv_' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('iv_' + k, JSON.stringify(v)); } catch (e) {} },
};

export const DEFAULT_SETTINGS = { quality: 'high', renderScale: 1, sensitivity: 1, fov: 78, invertY: false, master: 0.8, music: 0.5, showFps: false, autoReload: true, aimToggle: false, difficulty: 'regular', gore: 'full', voices: true };
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

  readSave() { return store.get('save', null); }
  writeSave(d) { store.set('save', d); }
  clearSave() { try { localStorage.removeItem('iv_save'); } catch (e) {} }
  save() { store.set('settings', this.settings); store.set('loadout', this.loadout); store.set('progress', this.progress); }
  show(on) { this.root.style.display = on ? 'flex' : 'none'; }

  screen(html, cls = '') {
    this.show(true);
    this.root.className = cls;
    this.root.innerHTML = `<div class="bg"></div><div class="screen">${html}</div>`;
  }

  main() {
    audio.startMusic('menu');
    const C = campaign.state, act = campaign.active;
    const cur = act ? STORY.find(m => m.id === campaign.currentId()) : null;
    const tags = n => Array.from({ length: C.maxLives }, (_, i) => `<i class="${i < n ? 'on' : ''}"></i>`).join('');
    this.screen(`
      <div class="title"><div class="t1">IRON VANGUARD</div><div class="t2">BLACK TIDE</div></div>
      <div class="mainnav">
        ${act ? `<button data-a="cont" class="primary">CONTINUE CAMPAIGN<small>Mission ${campaign.missionNumber(cur.id)} — ${cur.title} &nbsp;·&nbsp; <span class="tags">${tags(C.lives)}</span> ${C.lives} ${C.lives === 1 ? 'life' : 'lives'}</small></button>` : ''}
        <button data-a="newCampaign" class="${act ? '' : 'primary'}">NEW CAMPAIGN<small>Ironman: lose every life and you start over</small></button>
        <button data-a="campaign">MISSION SELECT<small>Replay missions for practice — no lives at risk</small></button>
        <button data-a="bonus">BONUS: LAST STAND</button>
        <button data-a="loadoutMain">LOADOUT</button>
        <button data-a="settingsMain">SETTINGS</button>
        <button data-a="controlsMain">CONTROLS</button>
        <button data-a="hof">HALL OF FAME</button>
      </div>
      <div class="foot">Built with three.js • CC0 art from Poly Haven • Fully synthesized audio</div>`, 'main');
    this.root.querySelectorAll('[data-a]').forEach(b => b.onclick = () => {
      const a = b.dataset.a;
      if (a === 'cont') this.continueCampaign();
      else if (a === 'bonus') this.onDeploy('laststand', 'bonus');
      else this[a]();
    });
  }

  continueCampaign() {
    const id = campaign.currentId(); const sv = this.readSave();
    if (sv && sv.levelId === id) this.onContinue(sv, 'campaign'); else this.onDeploy(id, 'campaign');
  }

  newCampaign() {
    const opts = Object.entries(LIVES).map(([k, n]) => `<div class="card diffc ${this.settings.difficulty === k ? 'sel' : ''}" data-d="${k}"><div><div class="cn">${DIFFICULTY[k].name}</div><div class="cs">${n} lives · ${k === 'recruit' ? 'Forgiving enemies' : k === 'regular' ? 'The intended experience' : k === 'hardened' ? 'Accurate, aggressive enemies' : 'Lethal. Every mistake counts.'}</div></div><div class="done">${'▮'.repeat(n)}</div></div>`).join('');
    const warn = campaign.active ? `<p class="warn">Starting a new campaign will erase your current campaign (${campaign.state.lives} lives left).</p>` : '';
    this.screen(`
      <div class="hdr"><button class="back">‹ BACK</button><h1>NEW CAMPAIGN</h1></div>
      <div class="cols"><div class="list">${opts}</div>
      <div class="brief">
        <div class="op">IRON VANGUARD: BLACK TIDE</div><div class="loc">IRONMAN CAMPAIGN</div>
        <p>A routine hunt for an insurgent commander drags the 1st Vanguard Battalion into a war against <b>Black Tide</b>, a private army selling stolen missiles. Somebody inside your own command is helping them.</p>
        <ul class="objs"><li>Your lives carry across the whole campaign. Every death costs one.</li><li>Respawn at your last checkpoint while you have lives left.</li><li><b>Lose your last life and the campaign is over.</b> You restart from Mission 1.</li><li>Earn lives back: finish a mission without dying, or find the hidden dog tag in each level (up to your maximum).</li></ul>
        ${warn}
        <div class="lo">LOADOUT: <b>${WEAPONS[this.loadout.primary].name}</b> + <b>${WEAPONS[this.loadout.secondary].name}</b> <button class="small" data-a="loadout">EDIT</button></div>
        <button class="primary deploy">BEGIN CAMPAIGN ›</button>
      </div></div>`);
    this.root.querySelector('.back').onclick = () => this.main();
    this.root.querySelectorAll('.diffc').forEach(c => c.onclick = () => { this.settings.difficulty = c.dataset.d; this.save(); this.newCampaign(); });
    this.root.querySelector('[data-a=loadout]').onclick = () => this.loadoutScreen(() => this.newCampaign());
    this.root.querySelector('.deploy').onclick = () => { campaign.start(this.settings.difficulty); window.ivTrack?.('campaign_start', { difficulty: this.settings.difficulty }); this.actCard(playable()[0].id, () => this.onDeploy(playable()[0].id, 'campaign')); };
  }

  actCard(id, then) {
    const m = STORY.find(x => x.id === id), A = ACTS[m.act];
    this.screen(`<div class="actcard"><div class="an">ACT ${A.n}</div><div class="at">${A.name}</div><p>${A.tag}</p></div>`, 'actS');
    const go = () => { clearTimeout(t); removeEventListener('keydown', go); then(); };
    const t = setTimeout(go, 4200); this.root.onclick = () => { this.root.onclick = null; go(); }; addEventListener('keydown', go, { once: true });
  }

  hof() {
    const H = campaign.hallOfFame();
    const rows = H.length ? H.map((r, i) => `<tr><td>${i + 1}</td><td>${r.won ? '<b class="won">CAMPAIGN COMPLETE</b>' : 'Fell at ' + r.reached}</td><td>${DIFFICULTY[r.difficulty]?.name || ''}</td><td>${r.missions}</td><td>${r.kills}</td><td>${r.deaths}</td><td>${fmtTime(r.time)}</td><td>${new Date(r.date).toLocaleDateString()}</td></tr>`).join('') : '<tr><td colspan="8">No campaign runs yet. Your finished and failed Ironman runs appear here.</td></tr>';
    this.screen(`<div class="hdr"><button class="back">‹ BACK</button><h1>HALL OF FAME</h1></div>
      <table class="hof"><tr><th>#</th><th>Result</th><th>Difficulty</th><th>Missions</th><th>Kills</th><th>Deaths</th><th>Time</th><th>Date</th></tr>${rows}</table>`);
    this.root.querySelector('.back').onclick = () => this.main();
  }

  campaign() {
    const lv = LEVELS.find(l => l.id === this.selectedLevel);
    const order = [...playable().map(m => LEVELS.find(l => l.id === m.id)), ...LEVELS.filter(l => l.bonus)];
    const cards = order.map((l, i) => {
      const p = this.progress[l.id];
      return `<div class="card ${l.id === lv.id ? 'sel' : ''}" data-l="${l.id}"><div class="num">${String(i).padStart(2, '0')}</div><div><div class="cn">${l.name}</div><div class="cs">${l.location}</div></div>${p ? `<div class="done">✔ ${fmtTime(p.best)}</div>` : ''}</div>`;
    }).join('');
    const diffs = Object.entries(DIFFICULTY).map(([k, d]) => `<div class="opt ${this.settings.difficulty === k ? 'sel' : ''}" data-d="${k}">${d.name}</div>`).join('');
    this.screen(`
      <div class="hdr"><button class="back">‹ BACK</button><h1>MISSION SELECT</h1><span class="note">Practice mode — no lives are used and nothing is saved</span></div>
      <div class="cols">
        <div class="list">${cards}${STORY.filter(m => m.soon).map(m => `<div class="card soon"><div class="num">${String(campaign.missionNumber(m.id)).padStart(2, '0')}</div><div><div class="cn">${m.title.toUpperCase()}</div><div class="cs">Act ${ACTS[m.act].n} — coming soon</div></div></div>`).join('')}</div>
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
    this.root.querySelectorAll('.card[data-l]').forEach(c => c.onclick = () => { this.selectedLevel = c.dataset.l; this.campaign(); });
    this.root.querySelectorAll('[data-d]').forEach(c => c.onclick = () => { this.settings.difficulty = c.dataset.d; this.save(); this.campaign(); });
    this.root.querySelector('[data-a=loadout]').onclick = () => this.loadoutScreen(() => this.campaign());
    this.root.querySelector('.deploy').onclick = () => this.onDeploy(this.selectedLevel, LEVELS.find(l => l.id === this.selectedLevel).bonus ? 'bonus' : 'practice');
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
        <div class="srow"><span>Blood &amp; gore</span><div class="opts">${['full', 'reduced', 'off'].map(k => `<div class="opt ${S.gore === k ? 'sel' : ''}" data-g="${k}">${k.toUpperCase()}</div>`).join('')}</div></div>
        <h2>CONTROLS</h2>
        ${rng('sensitivity', 0.2, 3, 0.05, 'Mouse sensitivity', v => (+v).toFixed(2))}
        ${tg('invertY', 'Invert Y')}
        ${tg('aimToggle', 'Aim toggle (tap right-click once to aim; good for touchpads)')}
        ${tg('autoReload', 'Auto reload')}
        <h2>AUDIO</h2>
        ${rng('master', 0, 1, 0.05, 'Master volume', v => Math.round(v * 100))}
        ${rng('music', 0, 1, 0.05, 'Music volume', v => Math.round(v * 100))}
        ${tg('voices', 'Radio voices (spoken dialogue)')}
      </div>`, 'settingsS');
    this.root.querySelector('.back').onclick = () => { this.save(); this.onSettings?.(); back(); };
    this.root.querySelectorAll('[data-q]').forEach(o => o.onclick = () => { S.quality = o.dataset.q; this.save(); this.onSettings?.(); this.settingsScreen(back); });
    this.root.querySelectorAll('[data-g]').forEach(o => o.onclick = () => { S.gore = o.dataset.g; this.save(); this.onSettings?.(); this.settingsScreen(back); });
    this.root.querySelectorAll('[data-t]').forEach(o => o.onclick = () => { S[o.dataset.t] = !S[o.dataset.t]; this.save(); this.onSettings?.(); this.settingsScreen(back); });
    this.root.querySelectorAll('input[type=range]').forEach(r => r.oninput = () => {
      S[r.dataset.k] = parseFloat(r.value); r.nextElementSibling.textContent = r.dataset.k === 'renderScale' ? Math.round(r.value * 100) + '%' : ['master', 'music'].includes(r.dataset.k) ? Math.round(r.value * 100) : r.dataset.k === 'sensitivity' ? (+r.value).toFixed(2) : r.value;
      this.save(); this.onSettings?.(true);
    });
  }
  settingsMain() { this.settingsScreen(() => this.main()); }

  controlsMain() { this.controls(() => this.main()); }
  controls(back) {
    const B = this.settings.binds = { ...defaultBinds(), ...(this.settings.binds || {}) };
    const rows = ACTIONS.map(([a, label]) => `<div class="crow"><span>${label}</span>${[0, 1].map(i => `<div class="bind" data-a="${a}" data-i="${i}">${keyName(B[a][i])}</div>`).join('')}</div>`).join('');
    this.screen(`<div class="hdr"><button class="back">‹ BACK</button><h1>CONTROLS</h1><button class="small reset">RESET TO DEFAULTS</button></div>
      <p class="note">Click a box, then press a key or mouse button. Press <b>Esc</b> to cancel, <b>Backspace</b> to clear. Mouse wheel always swaps weapons; Esc always pauses.</p>
      <div class="controls">${rows}</div>`);
    const back2 = () => { this.save(); this.onSettings?.(); (typeof back === 'function' ? back() : this.main()); };
    this.root.querySelector('.back').onclick = back2;
    this.root.querySelector('.reset').onclick = () => { this.settings.binds = defaultBinds(); this.save(); this.onSettings?.(); this.controls(back); };
    this.root.querySelectorAll('.bind').forEach(el => el.onclick = ev => {
      ev.stopPropagation();
      this.root.querySelectorAll('.bind.wait').forEach(x => { x.classList.remove('wait'); x.textContent = keyName(B[x.dataset.a][+x.dataset.i]); });
      el.classList.add('wait'); el.textContent = 'press a key…';
      const inp = this.input;
      setTimeout(() => {
        inp.capture = code => {
          inp.capture = null;
          if (code !== 'Escape') {
            const a = el.dataset.a, i = +el.dataset.i;
            if (code === 'Backspace') B[a][i] = '';
            else {
              // a key can only do one thing: remove it from other actions
              for (const k of Object.keys(B)) B[k] = B[k].map(c => (c === code ? '' : c));
              B[a][i] = code;
            }
            this.save(); this.onSettings?.();
          }
          this.controls(back);
        };
      }, 50);
    });
  }

  loading(level, mode = 'practice') {
    const C = campaign.state, camp = mode === 'campaign' && C;
    const head = camp ? `<div class="mnum">ACT ${campaign.actOf(level.id).n} · MISSION ${campaign.missionNumber(level.id)} &nbsp; ${this.livesRow(C.lives, C.maxLives)}</div>` : mode === 'practice' ? '<div class="mnum">PRACTICE — NO LIVES AT RISK</div>' : '';
    const tips = ['Crouching makes you harder to spot and steadies your aim.', 'Enemies show up on your radar when they fire at you.', 'Headshots deal double damage or more.', 'Flashbangs stun everyone who looks at them — including you.', 'Suppressors keep you off the radar but reduce range.', 'Explosive tanks and jerrycans can be shot to detonate them.', 'Hold Shift while scoped with the sniper rifle to steady your breath.', 'Sprint then press C to slide into cover.'];
    this.screen(`<div class="loading">${head}
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
      ${handlers.canSave ? '<button data-a="save">SAVE GAME</button>' : ''}
      ${handlers.hasSave ? '<button data-a="load">LOAD LAST SAVE</button>' : ''}
      <button data-a="restart">RESTART MISSION</button>
      <button data-a="settings">SETTINGS</button>
      <button data-a="controls">CONTROLS</button>
      <button data-a="quit">QUIT TO MENU</button></div>`, 'pauseS');
    this.root.querySelectorAll('[data-a]').forEach(b => b.onclick = () => {
      const a = b.dataset.a;
      if (a === 'settings') this.settingsScreen(() => this.pause(handlers));
      else if (a === 'controls') this.controls(() => this.pause(handlers));
      else if (a === 'save') { handlers.save(); this.pause({ ...handlers, hasSave: true }); }
      else handlers[a]();
    });
  }

  statsBlock(s) {
    return `<div class="rs">
        <div><b>${fmtTime(s.time)}</b><span>TIME</span></div>
        ${s.targets ? `<div><b>${s.targets}</b><span>TARGETS</span></div>` : `<div><b>${s.kills}</b><span>KILLS</span></div>`}
        <div><b>${s.headshots}</b><span>HEADSHOTS</span></div>
        <div><b>${s.acc}%</b><span>ACCURACY</span></div>
        <div><b>${s.hits}/${s.shots}</b><span>HITS / SHOTS</span></div>
        <div><b>${s.difficulty}</b><span>DIFFICULTY</span></div>
      </div>`;
  }
  livesRow(n, max, lost) {
    return `<div class="livesbig">${Array.from({ length: max }, (_, i) => `<i class="${i < n ? 'on' : ''} ${lost && i === n ? 'lost' : ''}"></i>`).join('')}</div>`;
  }

  results(win, s, reason, mode = 'practice') {
    if (win) {
      const p = this.progress[s.level.id];
      if (!p || s.time < p.best) this.progress[s.level.id] = { best: s.time, diff: s.difficulty };
      this.save();
    }
    if (mode === 'campaign') return win ? this.campaignWin(s) : this.campaignDeath(s, reason);
    this.screen(`<div class="results ${win ? 'win' : 'lose'}">
      <h1>${win ? 'MISSION COMPLETE' : 'MISSION FAILED'}</h1>
      <div class="op">${s.level.name} ${mode === 'practice' ? '<small>(practice)</small>' : ''}</div>
      ${reason ? `<p class="reason">${reason}</p>` : ''}
      ${this.statsBlock(s)}
      <div class="btns">
        <button class="primary" data-a="retry">${win ? 'REPLAY' : 'RETRY'}</button>
        <button data-a="menu">MISSION SELECT</button>
        <button data-a="main">MAIN MENU</button>
      </div></div>`, 'resultsS');
    this.root.querySelectorAll('[data-a]').forEach(b => b.onclick = () => {
      if (b.dataset.a === 'retry') this.onDeploy(s.level.id, mode); else if (b.dataset.a === 'main') this.main(); else this.campaign();
    });
  }

  campaignDeath(s, reason) {
    const r = campaign.loseLife(), C = campaign.state;
    if (r === 'gameover') return this.gameOver(s, reason);
    const sv = this.readSave();
    this.screen(`<div class="results lose">
      <h1>KILLED IN ACTION</h1>
      <div class="op">${s.level.name}</div>
      ${reason ? `<p class="reason">${reason}</p>` : ''}
      ${this.livesRow(C.lives, C.maxLives, true)}
      <p class="lifeleft">${C.lives} ${C.lives === 1 ? 'LIFE' : 'LIVES'} REMAINING</p>
      <div class="btns">
        <button class="primary" data-a="respawn">${sv && !sv.fresh && sv.levelId === s.level.id ? 'RESPAWN AT CHECKPOINT' : 'RESTART MISSION'} ›</button>
        <button data-a="main">MAIN MENU</button>
      </div></div>`, 'resultsS');
    this.root.querySelector('[data-a=respawn]').onclick = () => this.continueCampaign();
    this.root.querySelector('[data-a=main]').onclick = () => this.main();
  }

  gameOver(s, reason) {
    const C = campaign.state;
    window.ivTrack?.('game_over', { mission: s.level.id, difficulty: C.difficulty, missions_cleared: C.idx });
    this.screen(`<div class="results lose gameover">
      <h1>GAME OVER</h1>
      <div class="op">ALL ${C.maxLives} LIVES LOST</div>
      ${reason ? `<p class="reason">${reason}</p>` : ''}
      ${this.livesRow(0, C.maxLives)}
      <p>Your campaign ended on <b>Mission ${campaign.missionNumber(s.level.id)}: ${s.level.name}</b>. The campaign has been reset to Mission 1.</p>
      <div class="rs"><div><b>${C.idx}</b><span>MISSIONS CLEARED</span></div><div><b>${C.kills + (s.kills || 0)}</b><span>TOTAL KILLS</span></div><div><b>${C.deaths}</b><span>DEATHS</span></div><div><b>${DIFFICULTY[C.difficulty]?.name}</b><span>DIFFICULTY</span></div></div>
      <div class="btns"><button class="primary" data-a="new">START NEW CAMPAIGN</button><button data-a="hof">HALL OF FAME</button><button data-a="main">MAIN MENU</button></div></div>`, 'resultsS');
    this.root.querySelector('[data-a=new]').onclick = () => this.newCampaign();
    this.root.querySelector('[data-a=hof]').onclick = () => this.hof();
    this.root.querySelector('[data-a=main]').onclick = () => this.main();
  }

  campaignWin(s) {
    const out = campaign.complete(s.level.id, s), C = campaign.state;
    this.clearSave();
    const nextM = out.nextId ? STORY.find(m => m.id === out.nextId) : null;
    this.screen(`<div class="results win">
      <h1>${out.finished ? 'CAMPAIGN COMPLETE' : 'MISSION COMPLETE'}</h1>
      <div class="op">${s.level.name}</div>
      ${out.bonus ? `<p class="bonus">${out.bonus}</p>` : ''}
      ${this.livesRow(C.lives, C.maxLives)}
      ${this.statsBlock(s)}
      ${out.finished ? `<p>You have completed every available mission of <b>Black Tide</b>. New missions are on the way — your run is recorded in the Hall of Fame.</p>` : `<p class="nextm">NEXT: Mission ${campaign.missionNumber(nextM.id)} — ${nextM.title}</p>`}
      <div class="btns">
        ${out.finished ? '<button class="primary" data-a="hof">HALL OF FAME</button>' : '<button class="primary" data-a="next">NEXT MISSION ›</button>'}
        <button data-a="main">MAIN MENU</button>
      </div></div>`, 'resultsS');
    const n = this.root.querySelector('[data-a=next]'); if (n) n.onclick = () => out.newAct ? this.actCard(out.nextId, () => this.onDeploy(out.nextId, 'campaign')) : this.onDeploy(out.nextId, 'campaign');
    const h = this.root.querySelector('[data-a=hof]'); if (h) h.onclick = () => this.hof();
    this.root.querySelector('[data-a=main]').onclick = () => this.main();
  }

  missionComplete(s, mode) { this.results(true, s, null, mode); }
  missionFailed(reason, s, mode) { this.results(false, s, reason, mode); }
}

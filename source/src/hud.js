// In-game HUD (DOM overlay)
import * as THREE from 'three';

const $ = s => document.querySelector(s);
const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

export class HUD {
  constructor() {
    this.el = $('#hud');
    this.el.innerHTML = `
      <div id="xhair"><i class="t"></i><i class="b"></i><i class="l"></i><i class="r"></i><b></b></div>
      <div id="hitm"><i></i><i></i><i></i><i></i></div>
      <div id="dmgdirs"></div>
      <div id="compass"><div class="strip"></div><div class="obj">◆</div><div class="center"></div></div>
      <div id="radarwrap"><canvas id="radar" width="180" height="180"></canvas></div>
      <div id="objp"><div class="h">OBJECTIVE</div><div class="t"></div><div class="c"></div></div>
      <div id="waypoint"><div class="d">◆</div><div class="m"></div></div>
      <div id="ammo"><div class="wn"></div><div class="row"><span class="mag"></span><span class="res"></span></div><div class="mode"></div><div class="nades"><span class="l"></span><span class="tac"></span></div></div>
      <div id="hp"><div class="bar"><div></div></div></div>
      <div id="feed"></div>
      <div id="interact"><div class="lbl"></div><div class="bar"><div></div></div></div>
      <div id="toast"></div>
      <div id="pickmsg"></div>
      <div id="nade"><div class="ic">💣</div></div>
      <div id="scope"><div class="mask"></div><div class="lines"></div><div class="breath"></div></div>
      <div id="intro"></div>
      <div id="fps"></div>
      <div id="hint"></div>`;
    this.x = $('#xhair'); this.hm = $('#hitm'); this.cmp = $('#compass .strip'); this.cmpObj = $('#compass .obj');
    this.objT = $('#objp .t'); this.objC = $('#objp .c'); this.wp = $('#waypoint'); this.wpM = $('#waypoint .m');
    this.radar = $('#radar').getContext('2d');
    this.dd = $('#dmgdirs'); this.feed = $('#feed'); this.ia = $('#interact'); this.toastEl = $('#toast');
    this.nade = $('#nade'); this.scope = $('#scope'); this.intro = $('#intro'); this.fps = $('#fps'); this.hint = $('#hint');
    this.hitT = 0; this.dirs = []; this.nadeT = 0; this.frames = 0; this.fpsT = 0; this.suppT = 0;
    // compass ticks
    let s = '';
    const labels = { 0: 'N', 45: 'NE', 90: 'E', 135: 'SE', 180: 'S', 225: 'SW', 270: 'W', 315: 'NW' };
    for (let k = -1; k <= 1; k++) for (let d = 0; d < 360; d += 15) { const L = labels[d]; s += `<span style="left:${(k * 360 + d) * 4}px" class="${L ? 'lb' : ''}">${L || '|'}</span>`; }
    this.cmp.innerHTML = s;
  }

  show(on) { this.el.style.display = on ? 'block' : 'none'; }

  setObjective(text, flash) {
    this.objT.textContent = text; this.objC.textContent = '';
    if (flash) { const p = $('#objp'); p.classList.remove('flash'); void p.offsetWidth; p.classList.add('flash'); this.toast(text === 'MISSION COMPLETE' ? text : 'NEW OBJECTIVE', 2.2); }
  }
  setObjectiveCount(t) { this.objC.textContent = t; }

  hitmarker(head, kill) {
    this.hitT = 0.25; this.hm.className = kill ? 'kill on' : head ? 'head on' : 'on';
  }
  killfeed(text, pts) {
    const d = document.createElement('div'); d.className = 'k'; d.innerHTML = `<b>+${pts}</b> ${text}`;
    this.feed.prepend(d); setTimeout(() => d.remove(), 2200);
  }
  pickupMsg(text) { const d = document.createElement('div'); d.textContent = text; const el = document.getElementById('pickmsg'); el.appendChild(d); setTimeout(() => d.remove(), 1600); }
  toast(text, t = 1.5) { this.toastEl.textContent = text; this.toastEl.style.opacity = 1; clearTimeout(this._tt); this._tt = setTimeout(() => this.toastEl.style.opacity = 0, t * 1000); }
  showHint(text, t = 6) { this.hint.innerHTML = text; this.hint.style.opacity = 1; clearTimeout(this._ht); this._ht = setTimeout(() => this.hint.style.opacity = 0, t * 1000); }

  damageDir(from, P) {
    const el = document.createElement('div'); el.className = 'dd'; this.dd.appendChild(el);
    this.dirs.push({ el, from: from.clone(), t: 1.6 });
  }
  suppress() { this.suppT = 0.4; }
  grenadeWarning() { }
  grenadeIndicator(pos) { this.nadeT = 0.15; this.nadePos = pos; }

  setInteract(label, p) {
    if (!label) { this.ia.style.display = 'none'; return; }
    this.ia.style.display = 'block'; this.ia.querySelector('.lbl').innerHTML = label; this.ia.querySelector('.bar div').style.width = (p * 100) + '%';
  }
  setScope(on, breath) {
    this.scope.style.display = on ? 'block' : 'none';
    this.scope.querySelector('.breath').textContent = on ? (breath ? 'BREATH HELD' : 'Hold [SHIFT] to steady') : '';
  }

  playIntro(lines) {
    const el = this.intro; el.innerHTML = ''; el.style.opacity = 1;
    let delay = 300;
    lines.forEach((line, i) => {
      const d = document.createElement('div'); d.className = i === 0 ? 'big' : ''; el.appendChild(d);
      setTimeout(() => {
        let k = 0; const it = setInterval(() => { d.textContent = line.slice(0, ++k) + (k < line.length ? '█' : ''); if (k >= line.length) clearInterval(it); }, 28);
      }, delay);
      delay += line.length * 28 + 350;
    });
    setTimeout(() => el.style.opacity = 0, delay + 2500);
  }

  update(dt) {
    const G = this.G, P = G.player; if (!P || !P.w) return;
    const cam = G.engine.camera;
    // crosshair
    const st = P.w.st;
    const sp = P.spread(); const px = 4 + sp * 7;
    const hideX = P.ads > 0.4 || P.sprint || !P.alive || P.reloading && false;
    this.x.style.opacity = hideX ? 0 : (P.reloading ? 0.4 : 0.9);
    this.x.style.setProperty('--s', px + 'px');
    // hitmarker
    if (this.hitT > 0) { this.hitT -= dt; if (this.hitT <= 0) this.hm.className = ''; }
    // ammo
    const w = P.w;
    $('#ammo .wn').textContent = st.name + (st.suppressed ? ' ▪ SUPP' : '');
    const mag = $('#ammo .mag'); mag.textContent = w.ammo; mag.className = 'mag' + (w.ammo <= Math.ceil(st.mag * 0.25) ? ' low' : '');
    $('#ammo .res').textContent = '/ ' + w.reserve;
    $('#ammo .mode').textContent = P.reloading ? 'RELOADING' : (w.ammo === 0 ? (w.reserve ? 'PRESS [R] TO RELOAD' : 'NO AMMO') : st.modes[w.mode].toUpperCase());
    const L = P.loadout;
    $('#ammo .l').textContent = `[G] ${L.lethal === 'c4' ? 'SEMTEX' : 'FRAG'} ×${P.grenades.lethal}`;
    $('#ammo .tac').textContent = `[Q] ${L.tactical === 'smoke' ? 'SMOKE' : 'FLASH'} ×${P.grenades.tactical}`;
    $('#hp .bar div').style.width = (P.health / P.maxHealth * 100) + '%';
    // compass
    const yawDeg = ((-P.yaw * 180 / Math.PI) % 360 + 360) % 360;
    this.cmp.style.transform = `translateX(${-(yawDeg + 360) * 4}px)`;
    const wp = G.waypoint();
    if (wp) {
      const ang = Math.atan2(wp.x - P.pos.x, -(wp.z - P.pos.z)) * 180 / Math.PI;
      let rel = ((ang - yawDeg) % 360 + 540) % 360 - 180;
      this.cmpObj.style.display = Math.abs(rel) < 75 ? 'block' : 'none'; this.cmpObj.style.transform = `translateX(${rel * 4}px)`;
      // world marker
      const p = wp.clone().project(cam);
      const behind = p.z > 1;
      let sx = (p.x * 0.5 + 0.5) * innerWidth, sy = (-p.y * 0.5 + 0.5) * innerHeight;
      if (behind) { sx = innerWidth - sx; sy = innerHeight - 40; }
      sx = Math.max(40, Math.min(innerWidth - 40, sx)); sy = Math.max(60, Math.min(innerHeight - 60, sy));
      this.wp.style.display = P.ads > 0.5 ? 'none' : 'block'; this.wp.style.transform = `translate(${sx}px,${sy}px)`;
      this.wpM.textContent = Math.round(Math.hypot(wp.x - P.pos.x, wp.z - P.pos.z)) + 'm';
    } else { this.wp.style.display = 'none'; this.cmpObj.style.display = 'none'; }
    // damage direction indicators
    for (let i = this.dirs.length - 1; i >= 0; i--) {
      const d = this.dirs[i]; d.t -= dt;
      if (d.t <= 0) { d.el.remove(); this.dirs.splice(i, 1); continue; }
      const ang = Math.atan2(d.from.x - P.pos.x, -(d.from.z - P.pos.z)) * 180 / Math.PI - yawDeg;
      d.el.style.transform = `translate(-50%,-50%) rotate(${ang}deg)`; d.el.style.opacity = Math.min(1, d.t);
    }
    // grenade indicator
    if (this.nadeT > 0) {
      this.nadeT -= dt; this.nade.style.display = 'block';
      const ang = Math.atan2(this.nadePos.x - P.pos.x, -(this.nadePos.z - P.pos.z)) - yawDeg * Math.PI / 180;
      this.nade.style.transform = `translate(${innerWidth / 2 + Math.sin(ang) * 110 - 22}px,${innerHeight / 2 - Math.cos(ang) * 110 - 22}px)`;
    } else this.nade.style.display = 'none';
    this.drawRadar(P, G, yawDeg);
    // fps
    this.frames++; this.fpsT += dt;
    if (this.fpsT > 0.5) { this.fps.textContent = G.settings.showFps ? Math.round(this.frames / this.fpsT) + ' FPS' : ''; this.frames = 0; this.fpsT = 0; }
  }

  drawRadar(P, G, yawDeg) {
    const c = this.radar, S = 180, R = 40; // metres radius
    c.clearRect(0, 0, S, S);
    c.save(); c.beginPath(); c.arc(S / 2, S / 2, S / 2 - 2, 0, 7); c.clip();
    c.fillStyle = 'rgba(10,16,12,0.55)'; c.fillRect(0, 0, S, S);
    c.translate(S / 2, S / 2); c.rotate(-yawDeg * Math.PI / 180);
    const k = (S / 2) / R;
    // walls
    c.fillStyle = 'rgba(160,190,170,0.25)';
    for (const col of G.world.colliders) {
      if (col.max.y < 1.2 || col.noRay) continue;
      const x0 = (col.min.x - P.pos.x) * k, z0 = (col.min.z - P.pos.z) * k, w = (col.max.x - col.min.x) * k, d = (col.max.z - col.min.z) * k;
      if (x0 > S || z0 > S || x0 + w < -S || z0 + d < -S) continue;
      c.fillRect(x0, z0, w, d);
    }
    // enemies visible on radar when firing recently (or spotted) — CoD style
    for (const e of G.enemies.list) {
      if (!e.alive) continue;
      const show = e.hostage || e.friendly || (e.state === 'combat' && e.fireCd > 0 && e.seesPlayer);
      if (!show) continue;
      c.fillStyle = e.hostage ? '#4cf' : '#ff3b30';
      c.beginPath(); c.arc((e.pos.x - P.pos.x) * k, (e.pos.z - P.pos.z) * k, 4, 0, 7); c.fill();
    }
    const wp = G.waypoint();
    if (wp) { c.fillStyle = '#ffd34d'; const x = Math.max(-80, Math.min(80, (wp.x - P.pos.x) * k)), z = Math.max(-80, Math.min(80, (wp.z - P.pos.z) * k)); c.fillRect(x - 4, z - 4, 8, 8); }
    c.restore();
    // player
    c.fillStyle = '#fff'; c.beginPath(); c.moveTo(S / 2, S / 2 - 8); c.lineTo(S / 2 - 6, S / 2 + 6); c.lineTo(S / 2 + 6, S / 2 + 6); c.fill();
    c.strokeStyle = 'rgba(200,230,210,0.5)'; c.lineWidth = 2; c.beginPath(); c.arc(S / 2, S / 2, S / 2 - 2, 0, 7); c.stroke();
  }
}

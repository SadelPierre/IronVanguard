// Touch-screen controls for phones and tablets: floating move stick on the left, drag-to-look on the right,
// buttons for fire / aim / jump / crouch / reload / grenade / swap / use / knife. Only appears on touch devices.
const BUTTONS = [
  // id, label, action, kind (hold | tap | toggle), css position (right/bottom in vmin)
  ['fire', 'FIRE', 'fire', 'hold', 6, 10, 'big'],
  ['aim', 'AIM', 'aim', 'toggle', 26, 6, ''],
  ['jump', 'JUMP', 'jump', 'tap', 6, 34, ''],
  ['crouch', 'CROUCH', 'crouch', 'toggle', 22, 26, ''],
  ['reload', 'RELOAD', 'reload', 'tap', 40, 8, ''],
  ['use', 'USE', 'interact', 'hold', 40, 24, ''],
  ['nade', 'NADE', 'lethal', 'tap', 20, 44, 'sm'],
  ['swap', 'SWAP', 'swap', 'tap', 34, 40, 'sm'],
  ['knife', 'KNIFE', 'melee', 'tap', 6, 54, 'sm'],
  ['nvg', 'NVG', 'nvg', 'tap', 48, 40, 'sm'],
];

export function isTouchDevice() {
  return ('ontouchstart' in window || navigator.maxTouchPoints > 0) && matchMedia('(pointer: coarse)').matches;
}

export function setupTouch({ input, ui, game, pause }) {
  if (!isTouchDevice() && !location.hash.includes('touch=1')) return null;
  document.body.classList.add('touchmode');
  input.touchActive = true; input.fallback = true;
  // lighter defaults for phones on first launch
  try { if (!localStorage.getItem('iv_settings')) { ui.settings.quality = 'low'; ui.settings.renderScale = 0.85; ui.save(); ui.onSettings?.(false); } } catch (e) {}

  const root = document.createElement('div'); root.id = 'touch';
  root.innerHTML = `<div class="stick"><i></i></div>
    ${BUTTONS.map(([id, label, , , r, b, cls]) => `<div class="tb ${cls}" data-id="${id}" style="right:${r}vmin;bottom:${b}vmin">${label}</div>`).join('')}
    <div class="tb sm pausebtn" data-id="pause">II</div>`;
  document.body.appendChild(root);
  const rot = document.createElement('div'); rot.id = 'rotate'; rot.innerHTML = '<div>⟳</div>Turn your device sideways to play'; document.body.appendChild(rot);
  const stick = root.querySelector('.stick'), knob = stick.querySelector('i');
  const ptrs = new Map(); // pointerId -> { kind, x, y, id }
  let aimOn = false;
  const R = () => Math.min(innerWidth, innerHeight) * 0.13;

  const btnDown = (id, el) => {
    const def = BUTTONS.find(b => b[0] === id);
    if (id === 'pause') { pause(); return; }
    if (!def) return;
    const [, , act, kind] = def;
    el.classList.add('on');
    if (kind === 'hold') input.vdown(act);
    else if (kind === 'tap') input.vtap(act);
    else if (id === 'aim') { aimOn = !aimOn; if (aimOn) input.vdown('aim'); else input.vup('aim'); el.classList.toggle('latched', aimOn); }
    else if (id === 'crouch') { input.crouchLatch = !input.crouchLatch; }
  };
  const btnUp = (id, el) => {
    const def = BUTTONS.find(b => b[0] === id); el?.classList.remove('on');
    if (def && def[3] === 'hold') input.vup(def[2]);
  };

  root.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse' && !location.hash.includes('touch=1')) return;
    e.preventDefault();
    if (game.cutscene) { input.press('Space'); setTimeout(() => input.release('Space'), 50); return; }
    const el = e.target.closest('.tb');
    if (el) { ptrs.set(e.pointerId, { kind: 'btn', id: el.dataset.id, el, x: e.clientX, y: e.clientY }); btnDown(el.dataset.id, el); if (el.dataset.id === 'fire') ptrs.get(e.pointerId).look = true; return; }
    if (e.clientX < innerWidth * 0.42) {
      ptrs.set(e.pointerId, { kind: 'stick', ox: e.clientX, oy: e.clientY });
      stick.style.left = e.clientX + 'px'; stick.style.top = e.clientY + 'px'; stick.classList.add('on'); knob.style.transform = 'translate(-50%,-50%)';
    } else ptrs.set(e.pointerId, { kind: 'look', x: e.clientX, y: e.clientY });
    root.setPointerCapture?.(e.pointerId);
  }, { passive: false });

  root.addEventListener('pointermove', e => {
    const p = ptrs.get(e.pointerId); if (!p) return;
    e.preventDefault();
    if (p.kind === 'stick') {
      let dx = e.clientX - p.ox, dy = e.clientY - p.oy; const r = R(), m = Math.hypot(dx, dy);
      if (m > r) { dx *= r / m; dy *= r / m; }
      knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
      input.axis.x = dx / r; input.axis.y = -dy / r;
      if (m > r * 1.15 && -dy / r > 0.7) input.vdown('sprint'); else input.vup('sprint');
    } else if (p.kind === 'look' || p.look) {
      const k = 1.9;
      input.mouse.dx += (e.clientX - p.x) * k; input.mouse.dy += (e.clientY - p.y) * k;
      p.x = e.clientX; p.y = e.clientY;
    }
  }, { passive: false });

  const end = e => {
    const p = ptrs.get(e.pointerId); if (!p) return;
    ptrs.delete(e.pointerId);
    if (p.kind === 'stick') { input.axis.x = input.axis.y = 0; input.vup('sprint'); stick.classList.remove('on'); }
    if (p.kind === 'btn') btnUp(p.id, p.el);
  };
  root.addEventListener('pointerup', end); root.addEventListener('pointercancel', end);

  // go full screen + landscape when a mission starts
  addEventListener('click', e => {
    if (!e.target.closest?.('.go, .deploy, [data-a=cont], [data-a=resume]')) return;
    try { if (!document.fullscreenElement) document.documentElement.requestFullscreen?.({ navigationUI: 'hide' }).then(() => screen.orientation?.lock?.('landscape').catch(() => {})).catch(() => {}); } catch (err) {}
  }, true);

  // show the overlay only during gameplay
  const tick = () => {
    const on = game.state === 'playing' && !game.paused && !game.failed && !game.completed;
    root.classList.toggle('show', on); root.classList.toggle('cine', !!game.cutscene);
    if (!on && ptrs.size) { for (const [id] of ptrs) end({ pointerId: id }); aimOn = false; input.vup('aim'); }
    if (!on) { input.crouchLatch = false; root.querySelector('[data-id=aim]')?.classList.remove('latched'); }
    root.querySelector('[data-id=crouch]')?.classList.toggle('latched', input.crouchLatch);
    requestAnimationFrame(tick);
  };
  tick();
  return { root };
}

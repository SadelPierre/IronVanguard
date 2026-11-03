// Keyboard / mouse input with pointer lock, rebindable actions (2 slots each)
export const ACTIONS = [
  ['forward', 'Move forward', ['KeyW', '']],
  ['back', 'Move back', ['KeyS', '']],
  ['left', 'Strafe left', ['KeyA', '']],
  ['right', 'Strafe right', ['KeyD', '']],
  ['fire', 'Fire', ['Mouse0', 'Enter']],
  ['aim', 'Aim (hold)', ['Mouse2', '']],
  ['aimToggle', 'Aim (toggle)', ['KeyZ', '']],
  ['sprint', 'Sprint / hold breath', ['ShiftLeft', '']],
  ['jump', 'Jump', ['Space', '']],
  ['crouch', 'Crouch / slide', ['KeyC', 'ControlLeft']],
  ['reload', 'Reload', ['KeyR', '']],
  ['melee', 'Knife (melee)', ['KeyF', 'KeyV']],
  ['interact', 'Interact / pick up (hold)', ['KeyE', '']],
  ['lethal', 'Lethal grenade', ['KeyG', '']],
  ['tactical', 'Tactical grenade', ['KeyQ', '']],
  ['weapon1', 'Primary weapon', ['Digit1', '']],
  ['weapon2', 'Secondary weapon', ['Digit2', '']],
  ['swap', 'Swap weapon', ['KeyX', '']],
  ['firemode', 'Fire mode', ['KeyB', '']],
  ['flashlight', 'Flashlight', ['KeyT', '']],
  ['nvg', 'Night vision', ['KeyN', '']],
  ['lookLeft', 'Look left', ['ArrowLeft', '']],
  ['lookRight', 'Look right', ['ArrowRight', '']],
  ['lookUp', 'Look up', ['ArrowUp', '']],
  ['lookDown', 'Look down', ['ArrowDown', '']],
];
export function defaultBinds() {
  const b = {}; for (const [a, , k] of ACTIONS) b[a] = [...k]; return b;
}
export function keyName(code) {
  if (!code) return '—';
  const map = { Mouse0: 'Left Click', Mouse1: 'Middle Click', Mouse2: 'Right Click', Mouse3: 'Mouse 4', Mouse4: 'Mouse 5', Space: 'Space', ShiftLeft: 'L-Shift', ShiftRight: 'R-Shift', ControlLeft: 'L-Ctrl', ControlRight: 'R-Ctrl', AltLeft: 'L-Alt', AltRight: 'R-Alt', Enter: 'Enter', Tab: 'Tab', CapsLock: 'Caps', Backquote: '`', ArrowLeft: '←', ArrowRight: '→', ArrowUp: '↑', ArrowDown: '↓' };
  if (map[code]) return map[code];
  if (code.startsWith('Key')) return code.slice(3);
  if (code.startsWith('Digit')) return code.slice(5);
  if (code.startsWith('Numpad')) return 'Num ' + code.slice(6);
  return code;
}

export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = new Set(); this.pressed = new Set(); this.released = new Set();
    this.mouse = { dx: 0, dy: 0, left: false, right: false, leftPressed: false, rightPressed: false, wheel: 0 };
    this.locked = false; this.enabled = false; this.fallback = false;
    this.binds = defaultBinds();
    addEventListener('keydown', e => {
      if (this.capture) { e.preventDefault(); this.capture(e.code); return; }
      if (!this.enabled) return;
      if (e.code !== 'Escape' && e.code !== 'F5' && e.code !== 'F11' && e.code !== 'F12') e.preventDefault();
      this.press(e.code);
    });
    addEventListener('keyup', e => this.release(e.code));
    addEventListener('mousemove', e => {
      if (!this.enabled) return;
      if (this.locked || this.fallback) { this.mouse.dx += e.movementX || 0; this.mouse.dy += e.movementY || 0; }
    });
    addEventListener('mousedown', e => {
      if (this.capture && e.target.closest?.('.bind')) { e.preventDefault(); this.capture('Mouse' + e.button); return; }
      if (!this.enabled) return;
      if (!this.locked && !this.fallback) this.lock();
      if (e.button === 0) { this.mouse.left = true; this.mouse.leftPressed = true; }
      if (e.button === 2) { this.mouse.right = true; this.mouse.rightPressed = true; }
      this.press('Mouse' + e.button);
    });
    addEventListener('mouseup', e => { if (e.button === 0) this.mouse.left = false; if (e.button === 2) this.mouse.right = false; this.release('Mouse' + e.button); });
    addEventListener('contextmenu', e => { if (this.enabled || this.capture) e.preventDefault(); });
    addEventListener('wheel', e => { if (this.enabled) this.mouse.wheel += Math.sign(e.deltaY); }, { passive: true });
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.canvas;
      if (!this.locked && this.enabled && !this.fallback && this.onUnlock) this.onUnlock();
    });
    document.addEventListener('pointerlockerror', () => { this.fallback = true; document.body.classList.add('nocursor'); });
    addEventListener('blur', () => { this.keys.clear(); this.mouse.left = this.mouse.right = false; });
  }
  press(code) { if (!this.keys.has(code)) this.pressed.add(code); this.keys.add(code); }
  release(code) { this.keys.delete(code); this.released.add(code); }
  setBinds(b) { this.binds = { ...defaultBinds(), ...(b || {}) }; }
  // action queries
  act(a) { const b = this.binds[a]; return !!b && b.some(k => k && this.keys.has(k)); }
  actHit(a) { const b = this.binds[a]; return !!b && b.some(k => k && this.pressed.has(k)); }
  lock() {
    try {
      const p = this.canvas.requestPointerLock({ unadjustedMovement: true });
      if (p && p.catch) p.catch(() => { try { const p2 = this.canvas.requestPointerLock(); if (p2 && p2.catch) p2.catch(() => { this.fallback = true; document.body.classList.add('nocursor'); }); } catch (e) { this.fallback = true; } });
    } catch (e) { this.fallback = true; document.body.classList.add('nocursor'); }
  }
  unlock() { if (document.pointerLockElement) document.exitPointerLock(); document.body.classList.remove('nocursor'); }
  down(code) { return this.keys.has(code); }
  hit(code) { return this.pressed.has(code); }
  endFrame() { this.pressed.clear(); this.released.clear(); this.mouse.dx = this.mouse.dy = 0; this.mouse.leftPressed = this.mouse.rightPressed = false; this.mouse.wheel = 0; }
}

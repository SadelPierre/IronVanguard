// Keyboard / mouse input with pointer lock (and a fallback when lock is unavailable)
export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = new Set(); this.pressed = new Set(); this.released = new Set();
    this.mouse = { dx: 0, dy: 0, left: false, right: false, leftPressed: false, rightPressed: false, wheel: 0 };
    this.locked = false; this.enabled = false; this.fallback = false;
    addEventListener('keydown', e => {
      if (!this.enabled) return;
      if (['Tab', 'Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter'].includes(e.code)) e.preventDefault();
      if (e.ctrlKey && e.code !== 'ControlLeft') e.preventDefault();
      if (!this.keys.has(e.code)) this.pressed.add(e.code);
      this.keys.add(e.code);
    });
    addEventListener('keyup', e => { this.keys.delete(e.code); this.released.add(e.code); });
    addEventListener('mousemove', e => {
      if (!this.enabled) return;
      if (this.locked || this.fallback) { this.mouse.dx += e.movementX || 0; this.mouse.dy += e.movementY || 0; }
    });
    addEventListener('mousedown', e => {
      if (!this.enabled) return;
      if (!this.locked && !this.fallback) this.lock();
      if (e.button === 0) { this.mouse.left = true; this.mouse.leftPressed = true; }
      if (e.button === 2) { this.mouse.right = true; this.mouse.rightPressed = true; }
    });
    addEventListener('mouseup', e => { if (e.button === 0) this.mouse.left = false; if (e.button === 2) this.mouse.right = false; });
    addEventListener('contextmenu', e => { if (this.enabled) e.preventDefault(); });
    addEventListener('wheel', e => { if (this.enabled) this.mouse.wheel += Math.sign(e.deltaY); }, { passive: true });
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.canvas;
      if (!this.locked && this.enabled && !this.fallback && this.onUnlock) this.onUnlock();
    });
    document.addEventListener('pointerlockerror', () => { this.fallback = true; document.body.classList.add('nocursor'); });
    addEventListener('blur', () => { this.keys.clear(); this.mouse.left = this.mouse.right = false; });
  }
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

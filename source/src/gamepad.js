// Xbox / PlayStation controller support (standard Gamepad API mapping).
// In game: left stick move, right stick look, RT fire, LT aim, A jump, B crouch (toggle), X reload (hold: interact),
// Y switch weapon, RB lethal, LB tactical, L3 sprint, R3 knife, D-pad: up NVG, down flashlight, left fire mode.
// Start pauses. In menus: D-pad / left stick to move, A to select, B to go back.
const DZ = 0.18;
const BTN = { A: 0, B: 1, X: 2, Y: 3, LB: 4, RB: 5, LT: 6, RT: 7, BACK: 8, START: 9, L3: 10, R3: 11, UP: 12, DOWN: 13, LEFT: 14, RIGHT: 15 };

export class Gamepad {
  constructor({ input, ui, game, pause }) {
    this.input = input; this.ui = ui; this.game = game; this.pause = pause;
    this.prev = []; this.xT = 0; this.sprintLatch = false; this.navT = 0; this.connected = false;
    addEventListener('gamepadconnected', e => { this.connected = true; this.ui.toastMenu?.(`Controller connected: ${e.gamepad.id.split('(')[0].trim()}`); });
    addEventListener('gamepaddisconnected', () => { this.connected = false; this.reset(); });
  }

  pad() { const ps = navigator.getGamepads ? navigator.getGamepads() : []; for (const p of ps) if (p && p.connected) return p; return null; }

  reset() {
    const I = this.input; I.axis.x = I.axis.y = 0; I.look.x = I.look.y = 0;
    for (const a of ['fire', 'aim', 'sprint', 'interact']) I.vup(a);
    I.padActive = false;
  }

  poll(dt) {
    const p = this.pad(); if (!p) { if (this.input.padActive) this.reset(); return; }
    const b = i => { const x = p.buttons[i]; return !!x && (x.pressed || x.value > 0.35); };
    const hit = i => b(i) && !this.prev[i];
    const rel = i => !b(i) && this.prev[i];
    const G = this.game, I = this.input;
    const inGame = G.state === 'playing' && !G.paused;
    const any = p.buttons.some((x, i) => x && x.pressed) || p.axes.some(v => Math.abs(v) > 0.4);
    if (any) I.padActive = true;

    if (inGame && !G.cutscene) {
      // sticks
      const st = (x, y) => { const m = Math.hypot(x, y); if (m < DZ) return [0, 0]; const k = Math.min(1, (m - DZ) / (1 - DZ)) / m; return [x * k, y * k]; };
      const [mx, my] = st(p.axes[0] || 0, p.axes[1] || 0);
      I.axis.x = mx; I.axis.y = -my;
      const [lx, ly] = st(p.axes[2] || 0, p.axes[3] || 0);
      const curve = v => Math.sign(v) * Math.pow(Math.abs(v), 1.7);
      I.look.x = curve(lx) * 3.4; I.look.y = -curve(ly) * 2.4;
      // buttons
      const hold = (i, a) => { if (b(i)) I.vdown(a); else I.vup(a); };
      hold(BTN.RT, 'fire'); hold(BTN.LT, 'aim');
      if (hit(BTN.A)) I.vtap('jump');
      if (hit(BTN.B)) { if (G.player.sprint) I.vtap('crouch'); else I.crouchLatch = !I.crouchLatch; }
      if (hit(BTN.X)) this.xT = 0;
      if (b(BTN.X)) { this.xT += dt; if (this.xT > 0.25) I.vdown('interact'); }
      if (rel(BTN.X)) { if (this.xT <= 0.25) I.vtap('reload'); I.vup('interact'); }
      if (hit(BTN.Y)) I.vtap('swap');
      if (hit(BTN.RB)) I.vtap('lethal');
      if (hit(BTN.LB)) I.vtap('tactical');
      if (hit(BTN.R3)) I.vtap('melee');
      if (hit(BTN.L3)) this.sprintLatch = !this.sprintLatch;
      if (I.axis.y < 0.3) this.sprintLatch = false;
      if (this.sprintLatch) I.vdown('sprint'); else I.vup('sprint');
      if (hit(BTN.UP)) I.vtap('nvg');
      if (hit(BTN.DOWN)) I.vtap('flashlight');
      if (hit(BTN.LEFT)) I.vtap('firemode');
      if (hit(BTN.START)) { this.reset(); this.pause(); }
      // gunship / HALO controllers read mouse deltas: feed the right stick there too
      if (G.gunship) { G.input.mouse.dx += lx * 900 * dt; G.input.mouse.dy += ly * 700 * dt; }
    } else {
      if (inGame && G.cutscene && (hit(BTN.A) || hit(BTN.START))) I.press('Space');
      if (!inGame) this.reset();
      // menu navigation
      this.navT -= dt;
      const ax = p.axes[0] || 0, ay = p.axes[1] || 0;
      let dir = null;
      if (hit(BTN.UP) || (ay < -0.6 && this.navT <= 0)) dir = 'up';
      else if (hit(BTN.DOWN) || (ay > 0.6 && this.navT <= 0)) dir = 'down';
      else if (hit(BTN.LEFT) || (ax < -0.6 && this.navT <= 0)) dir = 'left';
      else if (hit(BTN.RIGHT) || (ax > 0.6 && this.navT <= 0)) dir = 'right';
      if (dir) { this.navT = 0.22; this.ui.padNav(dir); }
      if (Math.abs(ax) < 0.3 && Math.abs(ay) < 0.3) this.navT = 0;
      if (hit(BTN.A)) this.ui.padSelect();
      if (hit(BTN.B)) this.ui.padBack();
      if (hit(BTN.START) && G.state === 'playing' && G.paused) this.ui.padBack();
    }
    this.prev = p.buttons.map((x, i) => b(i));
  }
}

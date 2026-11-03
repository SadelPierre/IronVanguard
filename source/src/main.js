// Entry point: wires engine, input, UI and game together and runs the main loop
import { Engine } from './engine.js';
import { Input } from './input.js';
import { HUD } from './hud.js';
import { UI } from './ui.js';
import { Game } from './game.js';
import { audio } from './audio.js';
import { LEVELS } from './levels.js';

const canvas = document.getElementById('game');
const engine = new Engine(canvas);
const input = new Input(canvas);
const hud = new HUD();
const ui = new UI();
engine.setQuality(ui.settings.quality, ui.settings.renderScale);
const game = new Game(engine, input, hud, ui, ui.settings);
window.__game = game; // handy for debugging from the console

ui.input = input;
input.setBinds(ui.settings.binds);
function applySettings(live) {
  const S = ui.settings;
  input.setBinds(S.binds);
  audio.setVolumes(S.master, S.music);
  if (!live || engine.quality !== S.quality || engine.renderScale !== S.renderScale) {
    engine.setQuality(S.quality, S.renderScale);
    if (game.scene && !live) engine.setScene(game.scene);
  }
}
ui.onSettings = live => applySettings(live);

async function deploy(levelId, save = null) {
  audio.init(); audio.stopMusic();
  const def = LEVELS.find(l => l.id === levelId);
  hud.show(false);
  ui.loading(def);
  game.state = 'loading';
  try {
    await game.loadLevel(levelId, structuredClone(save?.loadout || ui.loadout), save?.difficulty || ui.settings.difficulty, (p, t) => ui.progressBar(p, t), save);
  } catch (e) {
    console.error(e);
    ui.progressBar(0, 'Failed to load: ' + e.message);
    return;
  }
  game.paused = true;
  ui.readyToStart(() => {
    ui.show(false); hud.show(true);
    input.enabled = true; input.lock();
    game.paused = false;
    hud.playIntro(def.intro);
    if (def.hint) setTimeout(() => hud.showHint(def.hint, 9), 1200);
  });
}
ui.onDeploy = id => deploy(id);
ui.onContinue = sv => { if (sv) { ui.selectedLevel = sv.levelId; deploy(sv.levelId, sv); } };

function pause() {
  if (game.state !== 'playing' || game.paused) return;
  game.paused = true; input.enabled = false; input.unlock();
  ui.pause({
    resume: () => { ui.show(false); input.enabled = true; input.lock(); game.paused = false; },
    restart: () => deploy(game.levelDef.id),
    canSave: !game.levelDef.noSave,
    hasSave: ui.readSave()?.levelId === game.levelDef.id && !ui.readSave()?.fresh,
    save: () => game.saveCheckpoint(true),
    load: () => ui.onContinue(ui.readSave()),
    quit: () => { game.state = 'menu'; hud.show(false); audio.stopLoops(); ui.campaign(); },
  });
}
input.onUnlock = () => { if (game.state === 'playing' && !game.failed && !game.completed) pause(); };
addEventListener('keydown', e => { if (e.code === 'Escape' || e.code === 'KeyP') { if (game.state === 'playing' && !game.paused) pause(); } });

// first interaction unlocks audio
addEventListener('pointerdown', () => { audio.init(); applySettings(true); if (game.state === 'menu' && !audio._music) audio.startMusic('menu'); }, { once: true });

let last = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  if (window.__manual) return;
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (game.state === 'playing') {
    if (!game.paused) { game.update(dt); input.endFrame(); }
    engine.render(dt);
  } else if (game.state === 'over' && game.scene) {
    engine.render(dt);
  }
}
requestAnimationFrame(frame);

hud.show(false);
ui.main();
document.getElementById('boot')?.remove();

// debug/test hook: index.html#play=<levelId>&q=<quality>
const auto = new URLSearchParams(location.hash.slice(1));
if (auto.get('q')) { ui.settings.quality = auto.get('q'); engine.setQuality(auto.get('q'), 1); }
if (auto.get('play')) deploy(auto.get('play')).then(() => document.querySelector('.go')?.click());

if (auto.get('test')) {
  window.__manual = true;
  window.__step = (n = 1, dt = 1 / 30, render = true) => { for (let i = 0; i < n; i++) { if (game.state === 'playing' && !game.paused) { game.update(dt); input.endFrame(); } } if (render) engine.render(dt); return game.state; };
}

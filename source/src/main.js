// Entry point: wires engine, input, UI and game together and runs the main loop
import { installAtmosphere } from './scenery.js';
installAtmosphere();
import { Engine } from './engine.js';
import { Input } from './input.js';
import { HUD } from './hud.js';
import { UI } from './ui.js';
import { Game } from './game.js';
import { career } from './progression.js';
import { Gamepad } from './gamepad.js';
import { setupTouch } from './touch.js';
import { audio } from './audio.js';
import { LEVELS } from './levels.js';
import { campaign } from './campaign.js';

const canvas = document.getElementById('game');
const engine = new Engine(canvas);
const input = new Input(canvas);
const hud = new HUD();
const ui = new UI();
engine.setQuality(ui.settings.quality, ui.settings.renderScale);
const game = new Game(engine, input, hud, ui, ui.settings);
window.__game = game; window.__audio = audio; window.__ui = ui; // handy for debugging from the console

ui.input = input;
input.setBinds(ui.settings.binds);
function applySettings(live) {
  const S = ui.settings;
  input.setBinds(S.binds);
  audio.setVolumes(S.master, S.music);
  if (game.effects) game.effects.gore = S.gore; hud.gore = S.gore;
  if (!live || engine.quality !== S.quality || engine.renderScale !== S.renderScale) {
    engine.setQuality(S.quality, S.renderScale);
    if (game.scene && !live) engine.setScene(game.scene);
  }
}
ui.onSettings = live => applySettings(live);

async function deploy(levelId, save = null, mode = 'practice') {
  audio.init(); audio.stopMusic();
  const def = LEVELS.find(l => l.id === levelId);
  hud.show(false);
  ui.loading(def, mode);
  game.state = 'loading';
  try {
    await game.loadLevel(levelId, structuredClone(save?.loadout || career.sanitize(ui.loadout)), save?.difficulty || ui.settings.difficulty, (p, t) => ui.progressBar(p, t), save, mode);
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
    hud.setLives(mode === 'campaign' ? campaign.state.lives : null, campaign.state?.maxLives);
    const go = () => { hud.playIntro(def.intro); if (def.hint) setTimeout(() => hud.showHint(def.hint, 9), 1200); };
    const scene = !save && game.level.introScene;
    if (scene && !window.__skipCine) game.playCutscene(typeof scene === 'function' ? scene(game) : scene, () => { game.level.onIntroDone?.(game); go(); });
    else { if (scene) game.level.onIntroDone?.(game); go(); }
  });
}
ui.onDeploy = (id, mode = 'practice') => deploy(id, null, mode);
ui.onContinue = (sv, mode = 'campaign') => { if (sv) { ui.selectedLevel = sv.levelId; deploy(sv.levelId, sv, mode); } };

function pause() {
  if (game.state !== 'playing' || game.paused) return;
  game.paused = true; input.enabled = false; input.unlock();
  ui.pause({
    resume: () => { ui.show(false); input.enabled = true; input.lock(); game.paused = false; },
    restart: () => deploy(game.levelDef.id, null, game.mode),
    mode: game.mode,
    canSave: game.mode === 'campaign' && !game.levelDef.noSave,
    hasSave: game.mode === 'campaign' && ui.readSave()?.levelId === game.levelDef.id && !ui.readSave()?.fresh,
    save: () => game.saveCheckpoint(true),
    load: () => ui.onContinue(ui.readSave(), 'campaign'),
    quit: () => { game.state = 'menu'; game.stopRadio(); hud.show(false); audio.stopLoops(); ui.main(); },
  });
}
input.onUnlock = () => { if (game.state === 'playing' && !game.failed && !game.completed) pause(); };
addEventListener('keydown', e => { if (e.code === 'Escape' || e.code === 'KeyP') { if (game.state === 'playing' && !game.paused) pause(); } });

// first interaction unlocks audio
addEventListener('pointerdown', () => { audio.init(); applySettings(true); if (game.state === 'menu' && !audio._music) audio.startMusic('menu'); }, { once: true });

const pad = new Gamepad({ input, ui, game, pause: () => pause() });
const touch = setupTouch({ input, ui, game, pause: () => pause() });
window.__pad = pad;
let last = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  if (window.__manual) return;
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  pad.poll(dt);
  if (game.state === 'playing') {
    if (!game.paused) { game.update(dt * (game.timeScale || 1)); input.endFrame(); }
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
window.__skipCine = !!auto.get('test') && !auto.get('cine');
if (auto.get('q')) { ui.settings.quality = auto.get('q'); engine.setQuality(auto.get('q'), 1); }
if (auto.get('play')) deploy(auto.get('play'), null, auto.get('mode') || 'practice').then(() => document.querySelector('.go')?.click());

if (auto.get('test')) {
  window.__manual = true;
  window.__step = (n = 1, dt = 1 / 30, render = true) => { for (let i = 0; i < n; i++) { if (game.state === 'playing' && !game.paused) { game.update(dt); input.endFrame(); } } if (render) engine.render(dt); return game.state; };
}

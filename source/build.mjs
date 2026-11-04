// Build: bundle JS with esbuild and pack all binary assets into classic <script> files
// so that index.html works straight from disk (file://) with no web server.
import * as esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

const OPT = '/home/claude/opt';
const DIST = process.argv[2] || '/home/claude/dist';
const entry = process.argv[3] || 'src/main.js';
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST + '/assets', { recursive: true });

const groups = { textures: [], models: [], hdri: [] };
for (const f of fs.readdirSync(OPT + '/tex')) groups.textures.push(['tex/' + f, OPT + '/tex/' + f]);
for (const f of fs.readdirSync(OPT + '/models')) groups.models.push(['model/' + f, OPT + '/models/' + f]);
for (const f of fs.readdirSync(OPT + '/hdri')) groups.hdri.push(['hdri/' + f, OPT + '/hdri/' + f]);

const packs = [];
for (const [g, files] of Object.entries(groups)) {
  let part = 0, cur = [], size = 0;
  const flush = () => {
    if (!cur.length) return;
    const name = `assets/${g}${part++}.v3.js`;
    fs.writeFileSync(path.join(DIST, name), 'window.__A=window.__A||{};\n' + cur.join('\n'));
    packs.push(name); cur = []; size = 0;
  };
  for (const [key, file] of files) {
    const b64 = fs.readFileSync(file).toString('base64');
    cur.push(`__A[${JSON.stringify(key)}]="${b64}";`);
    size += b64.length;
    if (size > 6e6) flush();
  }
  flush();
}

await esbuild.build({
  entryPoints: [entry], bundle: true, minify: true, format: 'iife', target: 'es2020',
  outfile: DIST + '/game.v3.js', legalComments: 'none', logLevel: 'warning',
});

const html = fs.readFileSync('src/index.html', 'utf8')
  .replace('<!--ASSETS-->', packs.map(p => `<script src="${p}"></script>`).join('\n'))
  .replace('<!--GAME-->', '<script src="game.v3.js"></script>');
fs.writeFileSync(DIST + '/index.html', html);
let total = 0; for (const p of [...packs, 'game.v3.js', 'index.html']) total += fs.statSync(path.join(DIST, p)).size;
console.log('built', DIST, (total / 1e6).toFixed(1) + ' MB', packs.length + ' packs');

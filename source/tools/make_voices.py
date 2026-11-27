"""Pre-record every line of game dialogue with the Kokoro neural TTS model (Apache-2.0).
Run:  python tools/make_voices.py  (needs kokoro-onnx + model files; see README)
Writes Opus files to ../opt/voice/<key>.ogg; the build packs them into assets/voice*.js.
"""
import re, os, sys, json, subprocess, tempfile, hashlib
import soundfile as sf, numpy as np
from kokoro_onnx import Kokoro

SRC = os.path.join(os.path.dirname(__file__), '..', 'src')
OUT = sys.argv[1] if len(sys.argv) > 1 else '/home/claude/opt/voice'
MODELS = os.environ.get('KOKORO_DIR', '/home/claude/ttsmodels')
os.makedirs(OUT, exist_ok=True)

# character -> (voice, lang, speed, pitch semitones)
CAST = {
  'KESSLER': ('am_onyx', 'en-us', 0.95, -1.0),
  'OKAFOR': ('bm_lewis', 'en-gb', 1.02, 0.0),
  'VOSS': ('bf_emma', 'en-gb', 1.05, 0.0),
  'HAYES': ('af_sarah', 'en-us', 1.0, 0.0),
  'RASK': ('bm_george', 'en-gb', 0.88, -2.5),
  'OVERLORD': ('am_echo', 'en-us', 1.08, 0.0),
  'REYES': ('am_michael', 'en-us', 1.0, -0.5),
}
ENEMY = [('am_fenrir', 'en-us', 1.15, -1.5), ('am_puck', 'en-us', 1.18, -2.0), ('bm_daniel', 'en-gb', 1.15, -2.5), ('am_eric', 'en-us', 1.12, -1.0)]

def key(who, text):  # must match voiceKey() in audio.js (djb2 over "WHO|text")
    h = 5381
    for ch in f'{who}|{text}':
        h = ((h * 33) ^ ord(ch)) & 0xFFFFFFFF
    return format(h, '08x')

def unesc(s): return s.replace("\\'", "'").replace('\\"', '"')

lines = []
lv = open(os.path.join(SRC, 'levels.js'), encoding='utf8').read()
for m in re.finditer(r"who: '([A-Z]+)', text: '((?:[^'\\]|\\.)*)'", lv):
    lines.append((m.group(1), unesc(m.group(2))))
# extra one-off lines that are spoken through G.radio(...) elsewhere
for f in os.listdir(SRC):
    if f.endswith('.js'):
        for m in re.finditer(r"radio\('([A-Z]+)', '((?:[^'\\]|\\.)*)'", open(os.path.join(SRC, f), encoding='utf8').read()):
            lines.append((m.group(1), unesc(m.group(2))))
en = open(os.path.join(SRC, 'enemies.js'), encoding='utf8').read()
blocks = re.findall(r"const L = \{(.*?)\}\[kind\]", en, re.S)
# squadmate callouts (allies with a name speak through the radio as OKAFOR)
for x in re.findall(r"'((?:[^'\\]|\\.)*)'", blocks[0]):
    if not re.fullmatch(r'[a-z]+', x): lines.append(('OKAFOR', unesc(x)))
block = blocks[-1]
callouts = [unesc(x) for x in re.findall(r"'((?:[^'\\]|\\.)*)'", block) if not re.fullmatch(r'[a-z]+', x)]
for i, t in enumerate(callouts):
    for vi in range(len(ENEMY)):
        lines.append((f'ENEMY{vi}', t))
lines = list(dict.fromkeys(lines))

k = Kokoro(os.path.join(MODELS, 'kokoro-v1.0.onnx'), os.path.join(MODELS, 'voices-v1.0.bin'))
manifest = {}
made = 0
for who, text in lines:
    kk = key(who, text); path = os.path.join(OUT, kk + '.ogg'); manifest[kk] = [who, text]
    if os.path.exists(path): continue
    voice, lang, speed, semi = ENEMY[int(who[5:])] if who.startswith('ENEMY') else CAST.get(who, CAST['OKAFOR'])
    spoken = text.replace('Ghost,', 'Ghost —').replace('...', ',')
    s, sr = k.create(spoken, voice=voice, speed=speed, lang=lang)
    s = np.concatenate([np.zeros(int(sr * 0.05)), s, np.zeros(int(sr * 0.12))]).astype(np.float32)
    with tempfile.NamedTemporaryFile(suffix='.wav', delete=False) as tf: sf.write(tf.name, s, sr)
    af = []
    if semi: r = 2 ** (semi / 12); af.append(f'asetrate={int(sr * r)},aresample={sr},atempo={1 / r:.4f}')
    af.append('loudnorm=I=-16:TP=-1.5')
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', tf.name, '-af', ','.join(af), '-ac', '1', '-ar', '24000', '-c:a', 'libopus', '-b:a', '28k', path], check=True)
    os.unlink(tf.name); made += 1
json.dump(manifest, open(os.path.join(OUT, '..', 'voice_manifest.json'), 'w'), indent=1)
print(f'{len(lines)} lines ({made} new) -> {OUT}')

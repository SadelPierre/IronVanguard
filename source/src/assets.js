// Asset loading. All assets are embedded as base64 in classic <script> packs
// (window.__A) so the game runs from file:// with a double-click — no server needed.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

const store = () => (window.__A || {});

function b64ToBytes(b64) {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

export function hasAsset(key) { return !!store()[key]; }

export function getBytes(key) {
  const s = store()[key];
  if (!s) throw new Error('Missing asset ' + key);
  return b64ToBytes(s);
}

const texCache = new Map();
export async function loadTexture(key, { srgb = false, repeat = 1, aniso = 8 } = {}) {
  const ck = key + (srgb ? ':s' : ':l');
  if (!texCache.has(ck)) {
    const p = (async () => {
      const bytes = getBytes(key);
      const mime = key.endsWith('.png') ? 'image/png' : key.endsWith('.webp') ? 'image/webp' : 'image/jpeg';
      const bmp = await createImageBitmap(new Blob([bytes], { type: mime }), { imageOrientation: 'flipY' });
      const t = new THREE.Texture(bmp);
      t.flipY = false;
      t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
      t.anisotropy = aniso;
      t.generateMipmaps = true;
      t.minFilter = THREE.LinearMipmapLinearFilter;
      t.needsUpdate = true;
      return t;
    })();
    texCache.set(ck, p);
  }
  const base = await texCache.get(ck);
  if (repeat === 1) return base;
  const t = base.clone();
  t.repeat.set(repeat, repeat);
  t.needsUpdate = true;
  return t;
}

let gltfLoader;
const modelCache = new Map();
export async function loadModel(name) {
  if (!modelCache.has(name)) {
    if (!gltfLoader) {
      gltfLoader = new GLTFLoader();
      gltfLoader.setMeshoptDecoder(MeshoptDecoder);
    }
    const p = (async () => {
      await MeshoptDecoder.ready;
      const bytes = getBytes('model/' + name + '.glb');
      return await new Promise((res, rej) => gltfLoader.parse(bytes.buffer, '', res, rej));
    })();
    modelCache.set(name, p);
  }
  return modelCache.get(name);
}

export function loadHDR(name) {
  const bytes = getBytes('hdri/' + name + '.hdr');
  const loader = new HDRLoader();
  const data = loader.parse(bytes.buffer);
  const t = new THREE.DataTexture(data.data, data.width, data.height, THREE.RGBAFormat, data.type);
  t.colorSpace = THREE.LinearSRGBColorSpace;
  t.mapping = THREE.EquirectangularReflectionMapping;
  t.minFilter = THREE.LinearFilter; t.magFilter = THREE.LinearFilter;
  t.generateMipmaps = false; t.flipY = true;
  t.needsUpdate = true;
  return t;
}

// ---------- PBR material library (Poly Haven CC0 sets: diff / nor_gl / arm) ----------
const matCache = new Map();
export async function pbr(name, { repeat = 1, color, roughMul, metal, normalScale = 1, envInt } = {}) {
  const key = name + '|' + repeat + '|' + (color ?? '') + '|' + (roughMul ?? '') + '|' + (metal ?? '') + '|' + normalScale;
  if (matCache.has(key)) return matCache.get(key);
  const [map, nor, arm] = await Promise.all([
    loadTexture(`tex/${name}_diff.jpg`, { srgb: true }),
    loadTexture(`tex/${name}_nor.jpg`),
    loadTexture(`tex/${name}_arm.jpg`),
  ]);
  const m = new THREE.MeshStandardMaterial({
    map, normalMap: nor, aoMap: arm, roughnessMap: arm, metalnessMap: arm,
    roughness: roughMul ?? 1, metalness: metal ?? 1,
    normalScale: new THREE.Vector2(normalScale, normalScale),
  });
  m.aoMapIntensity = 1;
  if (color) m.color.set(color);
  addGrime(m);
  if (envInt !== undefined) m.envMapIntensity = envInt;
  // world-scale UVs are generated on geometry; 'repeat' multiplies them
  if (repeat !== 1) {
    for (const t of [m.map, m.normalMap, m.aoMap]) { /* shared */ }
    m.userData.uvScale = repeat;
  }
  matCache.set(key, m);
  return m;
}

// world-space macro variation + ground grime: breaks up texture tiling and grounds walls visually
export function addGrime(m, amount = 1) {
  m.onBeforeCompile = sh => {
    sh.uniforms.grimeAmt = { value: amount };
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWPos;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
      varying vec3 vWPos; uniform float grimeAmt;
      float gh(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      float gn(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(gh(i), gh(i + vec3(1,0,0)), f.x), mix(gh(i + vec3(0,1,0)), gh(i + vec3(1,1,0)), f.x), f.y),
                   mix(mix(gh(i + vec3(0,0,1)), gh(i + vec3(1,0,1)), f.x), mix(gh(i + vec3(0,1,1)), gh(i + vec3(1,1,1)), f.x), f.y), f.z); }`)
      .replace('#include <map_fragment>', `#include <map_fragment>
      { float macro = gn(vWPos * 0.12) * 0.6 + gn(vWPos * 0.45) * 0.4;
        float base = 1.0 - smoothstep(0.0, 1.1, vWPos.y) * 1.0;
        float streak = gn(vec3(vWPos.x * 2.5, vWPos.y * 0.15, vWPos.z * 2.5));
        float g = clamp(base * 0.35 + (macro - 0.5) * 0.35 + (streak - 0.5) * 0.12 * smoothstep(3.5, 0.5, vWPos.y), -0.25, 0.5) * grimeAmt;
        diffuseColor.rgb *= 1.0 - g; }`);
  };
  m.customProgramCacheKey = () => 'grime' + amount;
}

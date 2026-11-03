// Renderer + post-processing pipeline
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';

export const QUALITY = {
  low:    { shadow: 1024, pixelRatio: 0.75, bloom: false, ao: false, smaa: false, shadowsOn: true, aniso: 2 },
  medium: { shadow: 2048, pixelRatio: 1.0,  bloom: true,  ao: false, smaa: true,  shadowsOn: true, aniso: 4 },
  high:   { shadow: 4096, pixelRatio: 1.0,  bloom: true,  ao: true,  smaa: true,  shadowsOn: true, aniso: 8 },
  ultra:  { shadow: 4096, pixelRatio: 1.5,  bloom: true,  ao: true,  smaa: true,  shadowsOn: true, aniso: 16 },
};

// Final grade: vignette, film grain, damage tint, flashbang, chromatic aberration, night vision
const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    time: { value: 0 },
    damage: { value: 0 },     // 0..1 red edges
    flash: { value: 0 },      // 0..1 white out
    vignette: { value: 0.35 },
    grain: { value: 0.035 },
    aberr: { value: 0.0 },
    nvg: { value: 0 },
    scope: { value: 0 },
    contrast: { value: 1.06 },
    saturation: { value: 1.0 },
    tint: { value: new THREE.Color(1, 1, 1) },
    aspect: { value: 1.7 },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float time, damage, flash, vignette, grain, aberr, nvg, scope, contrast, saturation, aspect;
    uniform vec3 tint; varying vec2 vUv;
    float rand(vec2 c){ return fract(sin(dot(c, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 uv=vUv; vec2 d=uv-0.5; float r=length(d*vec2(aspect,1.0))/aspect*1.6;
      float ab=aberr*0.012*r;
      vec3 col;
      col.r=texture2D(tDiffuse, uv + d*ab).r;
      col.g=texture2D(tDiffuse, uv).g;
      col.b=texture2D(tDiffuse, uv - d*ab).b;
      // grade
      col = (col-0.5)*contrast+0.5;
      float l=dot(col, vec3(0.299,0.587,0.114));
      col = mix(vec3(l), col, saturation) * tint;
      if(nvg>0.5){
        float L=pow(dot(col, vec3(0.3,0.59,0.11)),0.8)*1.6+0.02;
        col = vec3(0.18,0.85,0.3)*L;
        col += (rand(uv*vec2(913.0,577.0)+time)-0.5)*0.22;
        col *= 1.0-smoothstep(0.55,0.95,length(d*vec2(aspect*0.62,1.0))*1.15);
        float scan=0.92+0.08*sin(uv.y*900.0);
        col*=scan;
      }
      // vignette
      float v=smoothstep(0.85,0.2,length(d*vec2(1.0,0.85)));
      col*=mix(1.0, v, vignette);
      // damage
      float edge=smoothstep(0.25,0.75,length(d*vec2(1.0,0.9))*1.35);
      col=mix(col, vec3(0.45,0.0,0.0)+col*0.25, clamp(damage*edge*1.4,0.0,0.92));
      col=mix(col, col*vec3(1.0,0.6,0.6), damage*0.25);
      // grain
      col += (rand(uv*vec2(1231.0,977.0)+fract(time))-0.5)*grain;
      // flash bang
      col = mix(col, vec3(1.0), clamp(flash,0.0,1.0));
      gl_FragColor=vec4(col,1.0);
    }`,
};

export class Engine {
  constructor(canvas) {
    this.canvas = canvas;
    const r = this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.0;
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFShadowMap;
    r.setClearColor(0x000000);
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.05, 1500);
    this.vmCamera = new THREE.PerspectiveCamera(55, 1, 0.01, 10);
    this.vmScene = new THREE.Scene(); // first-person weapon scene
    this.scene = new THREE.Scene();
    this.quality = 'high';
    this.renderScale = 1;
    this.composer = null;
    this.clock = new THREE.Clock();
    window.addEventListener('resize', () => this.resize());
  }

  setScene(scene) {
    this.scene = scene;
    this.buildComposer();
  }

  buildComposer() {
    const q = QUALITY[this.quality];
    const r = this.renderer;
    if (this.composer) this.composer.dispose?.();
    const comp = this.composer = new EffectComposer(r);
    const main = this.mainPass = new RenderPass(this.scene, this.camera);
    comp.addPass(main);
    if (q.ao) {
      const ao = this.aoPass = new GTAOPass(this.scene, this.camera, 1, 1);
      ao.output = GTAOPass.OUTPUT.Default;
      ao.blendIntensity = 0.85;
      ao.updateGtaoMaterial({ radius: 0.6, distanceExponent: 1.4, thickness: 1.5, scale: 1.0, samples: 12 });
      ao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 12 });
      comp.addPass(ao);
    } else this.aoPass = null;
    const vm = this.vmPass = new RenderPass(this.vmScene, this.vmCamera);
    vm.clear = false; vm.clearDepth = true;
    comp.addPass(vm);
    if (q.bloom) {
      this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.5, 0.3, 8.0);
      comp.addPass(this.bloom);
    } else this.bloom = null;
    comp.addPass(new OutputPass());
    if (q.smaa) comp.addPass(new SMAAPass());
    this.grade = new ShaderPass(GradeShader);
    comp.addPass(this.grade);
    r.shadowMap.enabled = q.shadowsOn;
    this.resize();
  }

  setQuality(name, renderScale = 1) {
    this.quality = QUALITY[name] ? name : 'high';
    this.renderScale = renderScale;
    if (this.scene) this.buildComposer();
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    const q = QUALITY[this.quality];
    const pr = Math.min(window.devicePixelRatio || 1, 2) * q.pixelRatio * this.renderScale;
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(w, h, false);
    this.canvas.style.width = w + 'px'; this.canvas.style.height = h + 'px';
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
    this.vmCamera.aspect = w / h; this.vmCamera.updateProjectionMatrix();
    if (this.composer) {
      this.composer.setPixelRatio(pr);
      this.composer.setSize(w, h);
      if (this.grade) this.grade.uniforms.aspect.value = w / h;
    }
  }

  render(dt) {
    if (this.grade) this.grade.uniforms.time.value += dt;
    this.composer.render(dt);
  }
}

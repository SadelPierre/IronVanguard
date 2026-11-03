(()=>{var xf=0,Ph=1,bf=2;var zs=1,vf=2,Dr=3,Yi=0,ai=1,Di=2,oi=0,us=1,ki=2,Dh=3,Ih=4,Al=5;var Ki=100,yf=101,_f=102,Mf=103,Sf=104,Hs=200,wf=201,Tf=202,Ef=203,Lh=204,Nh=205,za=206,Af=207,Ha=208,Rf=209,Cf=210,Pf=211,Df=212,If=213,Lf=214,il=0,nl=1,sl=2,xr=3,rl=4,al=5,ol=6,ll=7,Fh=0,Nf=1,Ff=2,gn=0,Ga=1,Va=2,Wa=3,Gs=4,qa=5,Xa=6,ja=7,_h="attached",Uf="detached",Uh=300,Vs=301,Ir=302,fs=303,Rl=304,Yt=1e3,Ni=1001,br=1002,Tt=1003,Cl=1004;var Ws=1005;var ut=1006,Lr=1007;var Ii=1008;var Si=1009,Oh=1010,Bh=1011,Nr=1012,Pl=1013,cn=1014,wi=1015,gt=1016,Dl=1017,Il=1018,Yn=1020,kh=35902,zh=35899,Hh=1021,Gh=1022,Ti=1023,kn=1026,hn=1027,Ll=1028,Nl=1029,ps=1030,Fl=1031;var Ul=1033,Ya=33776,Ka=33777,Ja=33778,Za=33779,Ol=35840,Bl=35841,kl=35842,zl=35843,Hl=36196,Gl=37492,Vl=37496,Wl=37488,ql=37489,Qa=37490,Xl=37491,jl=37808,Yl=37809,Kl=37810,Jl=37811,Zl=37812,Ql=37813,$l=37814,ec=37815,tc=37816,ic=37817,nc=37818,sc=37819,rc=37820,ac=37821,oc=36492,lc=36494,cc=36495,hc=36283,dc=36284,$a=36285,uc=36286,Of=2200,Bf=2201,kf=2202,Rs=2300,Cs=2301,el=2302,Mh=2303,Ts=2400,Es=2401,da=2402,fc=2500,zf=2501,Vh=0,eo=1,Fr=2,Hf=3200;var to=0,Gf=1,dn="",rt="srgb",Kt="srgb-linear",ua="linear",at="srgb";var tl=7680;var Vf=519,Wf=512,qf=513,Xf=514,Wh=515,jf=516,Yf=517,qh=518,Xh=519,jh=35044,qs=35048;var Yh="300 es",Xi=2e3,vr=2001;function bm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function vm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function yr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Kf(){let r=yr("canvas");return r.style.display="block",r}var Ru={},_r=null;function fa(...r){let e="THREE."+r.shift();_r?_r("log",e,...r):console.log(e,...r)}function Jf(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Pe(...r){r=Jf(r);let e="THREE."+r.shift();if(_r)_r("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function ze(...r){r=Jf(r);let e="THREE."+r.shift();if(_r)_r("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function As(...r){let e=r.join(" ");e in Ru||(Ru[e]=!0,Pe(...r))}function Zf(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var Qf={[il]:il,[sl]:ol,[rl]:rl,[xr]:al,[nl]:nl,[ol]:sl,[ll]:ll,[al]:xr},rn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}},vi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cu=1234567,ca=Math.PI/180,Ps=180/Math.PI;function xn(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vi[r&255]+vi[r>>8&255]+vi[r>>16&255]+vi[r>>24&255]+"-"+vi[e&255]+vi[e>>8&255]+"-"+vi[e>>16&15|64]+vi[e>>24&255]+"-"+vi[t&63|128]+vi[t>>8&255]+"-"+vi[t>>16&255]+vi[t>>24&255]+vi[i&255]+vi[i>>8&255]+vi[i>>16&255]+vi[i>>24&255]).toLowerCase()}function Ke(r,e,t){return Math.max(e,Math.min(t,r))}function Kh(r,e){return(r%e+e)%e}function ym(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function _m(r,e,t){return r!==e?(t-r)/(e-r):0}function ha(r,e,t){return(1-t)*r+t*e}function Mm(r,e,t,i){return ha(r,e,1-Math.exp(-t*i))}function Sm(r,e=1){return e-Math.abs(Kh(r,e*2)-e)}function wm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Tm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Em(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Am(r,e){return r+Math.random()*(e-r)}function Rm(r){return r*(.5-Math.random())}function Cm(r){r!==void 0&&(Cu=r);let e=Cu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pm(r){return r*ca}function Dm(r){return r*Ps}function Im(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Lm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Jh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Nm(r,e,t,i,n){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),f=s((i-e)/2),m=a((i-e)/2);switch(n){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*m,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*m,o*c);break;case"ZYZ":r.set(l*m,l*f,o*h,o*c);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function pc(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Zh(r,e){if(e.constructor===Float32Array)return r;let t=pc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function Qh(r,e){if(e.constructor===Float32Array)return r;let t=pc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}var Ei={DEG2RAD:ca,RAD2DEG:Ps,generateUUID:xn,clamp:Ke,euclideanModulo:Kh,mapLinear:ym,inverseLerp:_m,lerp:ha,damp:Mm,pingpong:Sm,smoothstep:wm,smootherstep:Tm,randInt:Em,randFloat:Am,randFloatSpread:Rm,seededRandom:Cm,degToRad:Pm,radToDeg:Dm,isPowerOfTwo:Im,ceilPowerOfTwo:Lm,floorPowerOfTwo:Jh,setQuaternionFromProperEuler:Nm,normalize:Qh,denormalize:Zh},nd=class nd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nd.prototype.isVector2=!0;var ue=nd,Dt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=s[a+0],f=s[a+1],m=s[a+2],b=s[a+3];if(d!==b||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*b;g<0&&(u=-u,f=-f,m=-m,b=-b,g=-g);let p=1-o;if(g<.9995){let v=Math.acos(g),_=Math.sin(v);p=Math.sin(p*v)/_,o=Math.sin(o*v)/_,l=l*p+u*o,c=c*p+f*o,h=h*p+m*o,d=d*p+b*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+m*o,d=d*p+b*o;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[a],u=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+h*d+l*f-c*u,e[t+1]=l*m+h*u+c*d-o*f,e[t+2]=c*m+h*f+o*u-l*d,e[t+3]=h*m-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(s/2),u=l(i/2),f=l(n/2),m=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},sd=class sd{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-s*n),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=n+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jc.copy(this).projectOnVector(e),this.sub(Jc)}reflect(e){return this.sub(Jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sd.prototype.isVector3=!0;var D=sd,Jc=new D,Pu=new Dt,rd=class rd{constructor(e,t,i,n,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],m=i[8],b=n[0],g=n[3],p=n[6],v=n[1],_=n[4],y=n[7],w=n[2],E=n[5],x=n[8];return s[0]=a*b+o*v+l*w,s[3]=a*g+o*_+l*E,s[6]=a*p+o*y+l*x,s[1]=c*b+h*v+d*w,s[4]=c*g+h*_+d*E,s[7]=c*p+h*y+d*x,s[2]=u*b+f*v+m*w,s[5]=u*g+f*_+m*E,s[8]=u*p+f*y+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,m=t*d+i*u+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=d*b,e[1]=(n*c-h*i)*b,e[2]=(o*i-n*a)*b,e[3]=u*b,e[4]=(h*t-n*l)*b,e[5]=(n*s-o*t)*b,e[6]=f*b,e[7]=(i*l-c*t)*b,e[8]=(a*t-i*s)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return As("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zc.makeScale(e,t)),this}rotate(e){return As("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zc.makeRotation(-e)),this}translate(e,t){return As("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};rd.prototype.isMatrix3=!0;var He=rd,Zc=new He,Du=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iu=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fm(){let r={enabled:!0,workingColorSpace:Kt,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(n.r=Bn(n.r),n.g=Bn(n.g),n.b=Bn(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(n.r=gr(n.r),n.g=gr(n.g),n.b=gr(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===dn?ua:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Kt]:{primaries:e,whitePoint:i,transfer:ua,toXYZ:Du,fromXYZ:Iu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rt},outputColorSpaceConfig:{drawingBufferColorSpace:rt}},[rt]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Du,fromXYZ:Iu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rt}}}),r}var We=Fm();function Bn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function gr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Qs,cl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qs===void 0&&(Qs=yr("canvas")),Qs.width=e.width,Qs.height=e.height;let n=Qs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Qs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Bn(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bn(t[i]/255)*255):t[i]=Bn(t[i]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Um=0,Mr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=xn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Qc(n[a].image)):s.push(Qc(n[a]))}else s=Qc(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function Qc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?cl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}var Om=0,$c=new D,Lt=class r extends rn{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=Ni,n=Ni,s=ut,a=Ii,o=Ti,l=Si,c=r.DEFAULT_ANISOTROPY,h=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=xn(),this.name="",this.source=new Mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize($c).x}get height(){return this.source.getSize($c).y}get depth(){return this.source.getSize($c).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yt:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case br:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yt:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case br:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Uh;Lt.DEFAULT_ANISOTROPY=1;var ad=class ad{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],b=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+b)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(f+1)/2,w=(p+1)/2,E=(h+u)/4,x=(d+b)/4,M=(m+g)/4;return _>y&&_>w?_<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(_),n=E/i,s=x/i):y>w?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=E/n,s=M/n):w<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(w),i=x/s,n=M/s),this.set(i,n,s,t),this}let v=Math.sqrt((g-m)*(g-m)+(d-b)*(d-b)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-b)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ad.prototype.isVector4=!0;var ot=ad,hl=class extends rn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t),this.textures=[];let n=i.count;for(let s=0;s<n;s++)this.textures[s]=new Lt({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Mr(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Et=class extends hl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},pa=class extends Lt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var dl=class extends Lt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var El=class El{constructor(e,t,i,n,s,a,o,l,c,h,d,u,f,m,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,h,d,u,f,m,b,g)}set(e,t,i,n,s,a,o,l,c,h,d,u,f,m,b,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new El().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/$s.setFromMatrixColumn(e,0).length(),s=1/$s.setFromMatrixColumn(e,1).length(),a=1/$s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,f=a*d,m=o*h,b=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=u-b*c,t[9]=-o*l,t[2]=b-u*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,m=c*h,b=c*d;t[0]=u+b*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=b+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,m=c*h,b=c*d;t[0]=u-b*o,t[4]=-a*d,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=b-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,m=o*h,b=o*d;t[0]=l*h,t[4]=m*c-f,t[8]=u*c+b,t[1]=l*d,t[5]=b*c+u,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,m=o*l,b=o*c;t[0]=l*h,t[4]=b-u*d,t[8]=m*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+m,t[10]=u-b*d}else if(e.order==="XZY"){let u=a*l,f=a*c,m=o*l,b=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+b,t[5]=a*h,t[9]=f*d-m,t[2]=m*d-f,t[6]=o*h,t[10]=b*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bm,e,km)}lookAt(e,t,i){let n=this.elements;return Hi.subVectors(e,t),Hi.lengthSq()===0&&(Hi.z=1),Hi.normalize(),$n.crossVectors(i,Hi),$n.lengthSq()===0&&(Math.abs(i.z)===1?Hi.x+=1e-4:Hi.z+=1e-4,Hi.normalize(),$n.crossVectors(i,Hi)),$n.normalize(),Eo.crossVectors(Hi,$n),n[0]=$n.x,n[4]=Eo.x,n[8]=Hi.x,n[1]=$n.y,n[5]=Eo.y,n[9]=Hi.y,n[2]=$n.z,n[6]=Eo.z,n[10]=Hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],m=i[2],b=i[6],g=i[10],p=i[14],v=i[3],_=i[7],y=i[11],w=i[15],E=n[0],x=n[4],M=n[8],R=n[12],A=n[1],I=n[5],L=n[9],O=n[13],P=n[2],U=n[6],B=n[10],H=n[14],Z=n[3],z=n[7],X=n[11],ee=n[15];return s[0]=a*E+o*A+l*P+c*Z,s[4]=a*x+o*I+l*U+c*z,s[8]=a*M+o*L+l*B+c*X,s[12]=a*R+o*O+l*H+c*ee,s[1]=h*E+d*A+u*P+f*Z,s[5]=h*x+d*I+u*U+f*z,s[9]=h*M+d*L+u*B+f*X,s[13]=h*R+d*O+u*H+f*ee,s[2]=m*E+b*A+g*P+p*Z,s[6]=m*x+b*I+g*U+p*z,s[10]=m*M+b*L+g*B+p*X,s[14]=m*R+b*O+g*H+p*ee,s[3]=v*E+_*A+y*P+w*Z,s[7]=v*x+_*I+y*U+w*z,s[11]=v*M+_*L+y*B+w*X,s[15]=v*R+_*O+y*H+w*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],m=e[3],b=e[7],g=e[11],p=e[15],v=l*f-c*u,_=o*f-c*d,y=o*u-l*d,w=a*f-c*h,E=a*u-l*h,x=a*d-o*h;return t*(b*v-g*_+p*y)-i*(m*v-g*w+p*E)+n*(m*_-b*w+p*x)-s*(m*y-b*E+g*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(s*h-o*l)+n*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],m=e[12],b=e[13],g=e[14],p=e[15],v=t*o-i*a,_=t*l-n*a,y=t*c-s*a,w=i*l-n*o,E=i*c-s*o,x=n*c-s*l,M=h*b-d*m,R=h*g-u*m,A=h*p-f*m,I=d*g-u*b,L=d*p-f*b,O=u*p-f*g,P=v*O-_*L+y*I+w*A-E*R+x*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/P;return e[0]=(o*O-l*L+c*I)*U,e[1]=(n*L-i*O-s*I)*U,e[2]=(b*x-g*E+p*w)*U,e[3]=(u*E-d*x-f*w)*U,e[4]=(l*A-a*O-c*R)*U,e[5]=(t*O-n*A+s*R)*U,e[6]=(g*y-m*x-p*_)*U,e[7]=(h*x-u*y+f*_)*U,e[8]=(a*L-o*A+c*M)*U,e[9]=(i*A-t*L-s*M)*U,e[10]=(m*E-b*y+p*v)*U,e[11]=(d*y-h*E-f*v)*U,e[12]=(o*R-a*I-l*M)*U,e[13]=(t*I-i*R+n*M)*U,e[14]=(b*_-m*w-g*v)*U,e[15]=(h*w-d*_+u*v)*U,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,m=s*d,b=a*h,g=a*d,p=o*d,v=l*c,_=l*h,y=l*d,w=i.x,E=i.y,x=i.z;return n[0]=(1-(b+p))*w,n[1]=(f+y)*w,n[2]=(m-_)*w,n[3]=0,n[4]=(f-y)*E,n[5]=(1-(u+p))*E,n[6]=(g+v)*E,n[7]=0,n[8]=(m+_)*x,n[9]=(g-v)*x,n[10]=(1-(u+b))*x,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=$s.set(n[0],n[1],n[2]).length(),o=$s.set(n[4],n[5],n[6]).length(),l=$s.set(n[8],n[9],n[10]).length();s<0&&(a=-a),tn.copy(this);let c=1/a,h=1/o,d=1/l;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=d,tn.elements[9]*=d,tn.elements[10]*=d,t.setFromRotationMatrix(tn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,n,s,a,o=Xi,l=!1){let c=this.elements,h=2*s/(t-e),d=2*s/(i-n),u=(t+e)/(t-e),f=(i+n)/(i-n),m,b;if(l)m=s/(a-s),b=a*s/(a-s);else if(o===Xi)m=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===vr)m=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=Xi,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-n),u=-(t+e)/(t-e),f=-(i+n)/(i-n),m,b;if(l)m=1/(a-s),b=a/(a-s);else if(o===Xi)m=-2/(a-s),b=-(a+s)/(a-s);else if(o===vr)m=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};El.prototype.isMatrix4=!0;var De=El,$s=new D,tn=new De,Bm=new D(0,0,0),km=new D(1,1,1),$n=new D,Eo=new D,Hi=new D,Lu=new De,Nu=new Dt,_i=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nu.setFromEuler(this),this.setFromQuaternion(Nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_i.DEFAULT_ORDER="XYZ";var ma=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zm=0,Fu=new D,er=new Dt,Pn=new De,Ao=new D,Zr=new D,Hm=new D,Gm=new Dt,Uu=new D(1,0,0),Ou=new D(0,1,0),Bu=new D(0,0,1),ku={type:"added"},Vm={type:"removed"},tr={type:"childadded",child:null},eh={type:"childremoved",child:null},lt=class r extends rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new D,t=new _i,i=new Dt,n=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new De},normalMatrix:{value:new He}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(Uu,e)}rotateY(e){return this.rotateOnAxis(Ou,e)}rotateZ(e){return this.rotateOnAxis(Bu,e)}translateOnAxis(e,t){return Fu.copy(e).applyQuaternion(this.quaternion),this.position.add(Fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uu,e)}translateY(e){return this.translateOnAxis(Ou,e)}translateZ(e){return this.translateOnAxis(Bu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ao.copy(e):Ao.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Zr,Ao,this.up):Pn.lookAt(Ao,Zr,this.up),this.quaternion.setFromRotationMatrix(Pn),n&&(Pn.extractRotation(n.matrixWorld),er.setFromRotationMatrix(Pn),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ku),tr.child=e,this.dispatchEvent(tr),tr.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vm),eh.child=e,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ku),tr.child=e,this.dispatchEvent(tr),tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,e,Hm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,Gm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*n,s[13]+=i-s[1]*t-s[5]*i-s[9]*n,s[14]+=n-s[2]*t-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};lt.DEFAULT_UP=new D(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dt=class extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wm={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,i),p=this._getHandJoint(c,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},$f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function th(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=We.workingColorSpace){return this.r=e,this.g=t,this.b=i,We.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=We.workingColorSpace){if(e=Kh(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=th(a,s,e+1/3),this.g=th(a,s,e),this.b=th(a,s,e-1/3)}return We.colorSpaceToWorking(this,n),this}setStyle(e,t=rt){function i(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rt){let i=$f[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rt){return We.workingToColorSpace(yi.copy(this),e),Math.round(Ke(yi.r*255,0,255))*65536+Math.round(Ke(yi.g*255,0,255))*256+Math.round(Ke(yi.b*255,0,255))}getHexString(e=rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(yi.copy(this),t);let i=yi.r,n=yi.g,s=yi.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(yi.copy(this),t),e.r=yi.r,e.g=yi.g,e.b=yi.b,e}getStyle(e=rt){We.workingToColorSpace(yi.copy(this),e);let t=yi.r,i=yi.g,n=yi.b;return e!==rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(Ro);let i=ha(es.h,Ro.h,t),n=ha(es.s,Ro.s,t),s=ha(es.l,Ro.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yi=new be;be.NAMES=$f;var ga=class r{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var an=class extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},nn=new D,Dn=new D,ih=new D,In=new D,ir=new D,nr=new D,zu=new D,nh=new D,sh=new D,rh=new D,ah=new ot,oh=new ot,lh=new ot,Un=class r{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),nn.subVectors(e,t),n.cross(nn);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){nn.subVectors(n,t),Dn.subVectors(i,t),ih.subVectors(e,t);let a=nn.dot(nn),o=nn.dot(Dn),l=nn.dot(ih),c=Dn.dot(Dn),h=Dn.dot(ih),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,m=(a*h-o*l)*u;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l)}static getInterpolatedAttribute(e,t,i,n,s,a){return ah.setScalar(0),oh.setScalar(0),lh.setScalar(0),ah.fromBufferAttribute(e,t),oh.fromBufferAttribute(e,i),lh.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(ah,s.x),a.addScaledVector(oh,s.y),a.addScaledVector(lh,s.z),a}static isFrontFacing(e,t,i,n){return nn.subVectors(i,t),Dn.subVectors(e,t),nn.cross(Dn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),nn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;ir.subVectors(n,i),nr.subVectors(s,i),nh.subVectors(e,i);let l=ir.dot(nh),c=nr.dot(nh);if(l<=0&&c<=0)return t.copy(i);sh.subVectors(e,n);let h=ir.dot(sh),d=nr.dot(sh);if(h>=0&&d<=h)return t.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(ir,a);rh.subVectors(e,s);let f=ir.dot(rh),m=nr.dot(rh);if(m>=0&&f<=m)return t.copy(s);let b=f*c-l*m;if(b<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(nr,o);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return zu.subVectors(s,n),o=(d-h)/(d-h+(f-m)),t.copy(n).addScaledVector(zu,o);let p=1/(g+b+u);return a=b*p,o=u*p,t.copy(i).addScaledVector(ir,a).addScaledVector(nr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ri=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(s,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Co.copy(i.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),Po.subVectors(this.max,Qr),sr.subVectors(e.a,Qr),rr.subVectors(e.b,Qr),ar.subVectors(e.c,Qr),ts.subVectors(rr,sr),is.subVectors(ar,rr),_s.subVectors(sr,ar);let t=[0,-ts.z,ts.y,0,-is.z,is.y,0,-_s.z,_s.y,ts.z,0,-ts.x,is.z,0,-is.x,_s.z,0,-_s.x,-ts.y,ts.x,0,-is.y,is.x,0,-_s.y,_s.x,0];return!ch(t,sr,rr,ar,Po)||(t=[1,0,0,0,1,0,0,0,1],!ch(t,sr,rr,ar,Po))?!1:(Do.crossVectors(ts,is),t=[Do.x,Do.y,Do.z],ch(t,sr,rr,ar,Po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ln=[new D,new D,new D,new D,new D,new D,new D,new D],sn=new D,Co=new ri,sr=new D,rr=new D,ar=new D,ts=new D,is=new D,_s=new D,Qr=new D,Po=new D,Do=new D,Ms=new D;function ch(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Ms.fromArray(r,s);let o=n.x*Math.abs(Ms.x)+n.y*Math.abs(Ms.y)+n.z*Math.abs(Ms.z),l=e.dot(Ms),c=t.dot(Ms),h=i.dot(Ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var On=qm();function qm(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}function Xm(r){Math.abs(r)>65504&&Pe("DataUtils.toHalfFloat(): Value out of range."),r=Ke(r,-65504,65504),On.floatView[0]=r;let e=On.uint32View[0],t=e>>23&511;return On.baseTable[t]+((e&8388607)>>On.shiftTable[t])}function jm(r){let e=r>>10;return On.uint32View[0]=On.mantissaTable[On.offsetTable[e]+(r&1023)]+On.exponentTable[e],On.floatView[0]}var rs=class{static toHalfFloat(e){return Xm(e)}static fromHalfFloat(e){return jm(e)}},jt=new D,Io=new ue,Ym=0,It=class extends rn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ym++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=jh,this.updateRanges=[],this.gpuType=wi,this.version=0,this._normalizationScale=e!==void 0?pc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Io.fromBufferAttribute(this,t),Io.applyMatrix3(e),this.setXY(t,Io.x,Io.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Zh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Qh(e,this.array)}};var xa=class extends It{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ba=class extends It{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var st=class extends It{constructor(e,t,i){super(new Float32Array(e),t,i)}},Km=new ri,$r=new D,hh=new D,Fi=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Km.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$r.subVectors(e,this.center);let t=$r.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector($r,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($r.copy(e.center).add(hh)),this.expandByPoint($r.copy(e.center).sub(hh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Jm=0,qi=new De,dh=new lt,or=new D,Gi=new ri,ea=new ri,si=new D,Nt=class r extends rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bm(e)?ba:xa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qi.makeRotationFromQuaternion(e),this.applyMatrix4(qi),this}rotateX(e){return qi.makeRotationX(e),this.applyMatrix4(qi),this}rotateY(e){return qi.makeRotationY(e),this.applyMatrix4(qi),this}rotateZ(e){return qi.makeRotationZ(e),this.applyMatrix4(qi),this}translate(e,t,i){return qi.makeTranslation(e,t,i),this.applyMatrix4(qi),this}scale(e,t,i){return qi.makeScale(e,t,i),this.applyMatrix4(qi),this}lookAt(e){return dh.lookAt(e),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];Gi.setFromBufferAttribute(s),this.morphTargetsRelative?(si.addVectors(this.boundingBox.min,Gi.min),this.boundingBox.expandByPoint(si),si.addVectors(this.boundingBox.max,Gi.max),this.boundingBox.expandByPoint(si)):(this.boundingBox.expandByPoint(Gi.min),this.boundingBox.expandByPoint(Gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(Gi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ea.setFromBufferAttribute(o),this.morphTargetsRelative?(si.addVectors(Gi.min,ea.min),Gi.expandByPoint(si),si.addVectors(Gi.max,ea.max),Gi.expandByPoint(si)):(Gi.expandByPoint(ea.min),Gi.expandByPoint(ea.max))}Gi.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)si.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(si));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)si.fromBufferAttribute(o,c),l&&(or.fromBufferAttribute(e,c),si.add(or)),n=Math.max(n,i.distanceToSquared(si))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new It(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let R=0;R<i.count;R++)o[R]=new D,l[R]=new D;let h=new D,d=new D,u=new D,f=new ue,m=new ue,b=new ue,g=new D,p=new D;function v(R,A,I){c[R]=c[A]=c[I]=1,h.fromBufferAttribute(i,R),d.fromBufferAttribute(i,A),u.fromBufferAttribute(i,I),f.fromBufferAttribute(s,R),m.fromBufferAttribute(s,A),b.fromBufferAttribute(s,I),d.sub(h),u.sub(h),m.sub(f),b.sub(f);let L=1/(m.x*b.y-b.x*m.y);isFinite(L)&&(g.copy(d).multiplyScalar(b.y).addScaledVector(u,-m.y).multiplyScalar(L),p.copy(u).multiplyScalar(m.x).addScaledVector(d,-b.x).multiplyScalar(L),o[R].add(g),o[A].add(g),o[I].add(g),l[R].add(p),l[A].add(p),l[I].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,A=_.length;R<A;++R){let I=_[R],L=I.start,O=I.count;for(let P=L,U=L+O;P<U;P+=3)v(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let y=new D,w=new D,E=new D,x=new D;function M(R){E.fromBufferAttribute(n,R),x.copy(E);let A=o[R];y.copy(A),y.sub(E.multiplyScalar(E.dot(A))).normalize(),w.crossVectors(x,A);let L=w.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,L)}for(let R=0,A=i.count;R<A;++R)c[R]&&M(R);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new D,s=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let u=0,f=e.count;u<f;u+=3){let m=e.getX(u+0),b=e.getX(u+1),g=e.getX(u+2);n.fromBufferAttribute(t,m),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)si.fromBufferAttribute(e,t),si.normalize(),e.setXYZ(t,si.x,si.y,si.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new It(u,h,d)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=e(l,i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ds=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jh,this.updateRanges=[],this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Hu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Hu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Hu(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=xn()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}var Ci=new D,as=class r{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n,this._normalizationScale=e!==void 0?pc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ci.fromBufferAttribute(this,t),Ci.applyMatrix4(e),this.setXYZ(t,Ci.x,Ci.y,Ci.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ci.fromBufferAttribute(this,t),Ci.applyNormalMatrix(e),this.setXYZ(t,Ci.x,Ci.y,Ci.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ci.fromBufferAttribute(this,t),Ci.transformDirection(e),this.setXYZ(t,Ci.x,Ci.y,Ci.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){fa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){fa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Zh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Qh(e,this.data.array)}},uh=new D,Zm=new D,Qm=new He,Vi=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=uh.subVectors(i,t).cross(Zm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(uh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Qm.getNormalMatrix(e),n=this.coplanarPoint(uh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},$m=0,Mi=class extends rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=xn(),this.name="",this.type="Material",this.blending=us,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Nh,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tl,this.stencilZFail=tl,this.stencilZPass=tl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Vi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ue().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ue().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},os=class extends Mi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lr,ta=new D,cr=new D,hr=new D,dr=new ue,ia=new ue,ep=new De,Lo=new D,na=new D,No=new D,Gu=new ue,fh=new ue,Vu=new ue,Is=class extends lt{constructor(e=new os){if(super(),this.isSprite=!0,this.type="Sprite",lr===void 0){lr=new Nt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ds(t,5);lr.setIndex([0,1,2,0,2,3]),lr.setAttribute("position",new as(i,3,0,!1)),lr.setAttribute("uv",new as(i,2,3,!1))}this.geometry=lr,this.material=e,this.center=new ue(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cr.setFromMatrixScale(this.matrixWorld),ep.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),hr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cr.multiplyScalar(-hr.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;Fo(Lo.set(-.5,-.5,0),hr,a,cr,n,s),Fo(na.set(.5,-.5,0),hr,a,cr,n,s),Fo(No.set(.5,.5,0),hr,a,cr,n,s),Gu.set(0,0),fh.set(1,0),Vu.set(1,1);let o=e.ray.intersectTriangle(Lo,na,No,!1,ta);if(o===null&&(Fo(na.set(-.5,.5,0),hr,a,cr,n,s),fh.set(0,1),o=e.ray.intersectTriangle(Lo,No,na,!1,ta),o===null))return;let l=e.ray.origin.distanceTo(ta);l<e.near||l>e.far||t.push({distance:l,point:ta.clone(),uv:Un.getInterpolation(ta,Lo,na,No,Gu,fh,Vu,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Fo(r,e,t,i,n,s){dr.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(ia.x=s*dr.x-n*dr.y,ia.y=n*dr.x+s*dr.y):ia.copy(dr),r.copy(e),r.x+=ia.x,r.y+=ia.y,r.applyMatrix4(ep)}var Nn=new D,ph=new D,Uo=new D,Oo=new D,Ls=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){ph.copy(e).add(t).multiplyScalar(.5),Uo.copy(t).sub(e).normalize(),Oo.copy(this.origin).sub(ph);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Uo),o=Oo.dot(this.direction),l=-Oo.dot(Uo),c=Oo.lengthSq(),h=Math.abs(1-a*a),d,u,f,m;if(h>0)if(d=a*l-o,u=a*o-l,m=s*h,d>=0)if(u>=-m)if(u<=m){let b=1/h;d*=b,u*=b,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(ph).addScaledVector(Uo,u),f}intersectSphere(e,t){if(e.radius<0)return null;Nn.subVectors(e.center,this.origin);let i=Nn.dot(this.direction),n=Nn.dot(Nn)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,i,n,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,m=t.x-a.x,b=t.y-a.y,g=t.z-a.z,p=i.x-a.x,v=i.y-a.y,_=i.z-a.z,y=Math.abs(l),w=Math.abs(c),E=Math.abs(h),x,M,R,A,I,L,O,P,U,B,H,Z;if(y>=w&&y>=E?(R=l,L=d,U=m,Z=p,l>=0?(x=c,M=h,A=u,I=f,O=b,P=g,B=v,H=_):(x=h,M=c,A=f,I=u,O=g,P=b,B=_,H=v)):w>=E?(R=c,L=u,U=b,Z=v,c>=0?(x=h,M=l,A=f,I=d,O=g,P=m,B=_,H=p):(x=l,M=h,A=d,I=f,O=m,P=g,B=p,H=_)):(R=h,L=f,U=g,Z=_,h>=0?(x=l,M=c,A=d,I=u,O=m,P=b,B=p,H=v):(x=c,M=l,A=u,I=d,O=b,P=m,B=v,H=p)),R===0)return null;let z=x/R,X=M/R,ee=1/R,pe=A-z*L,Ae=I-X*L,K=O-z*U,me=P-X*U,Me=B-z*Z,Re=H-X*Z,he=Me*me-Re*K,Oe=pe*Re-Ae*Me,pt=K*Ae-me*pe;if(n){if(he<0||Oe<0||pt<0)return null}else if((he<0||Oe<0||pt<0)&&(he>0||Oe>0||pt>0))return null;let Be=he+Oe+pt;if(Be===0)return null;let it=ee*(he*L+Oe*U+pt*Z);return(Be>0?it<0:it>0)?null:this.at(it/Be,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Wu=new De,Ss=new Ls,Bo=new Fi,qu=new D,ko=new D,zo=new D,Ho=new D,mh=new D,Go=new D,Xu=new D,Vo=new D,Fe=class extends lt{constructor(e=new Nt,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){Go.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(mh.fromBufferAttribute(d,e),a?Go.addScaledVector(mh,h):Go.addScaledVector(mh.sub(t),h))}t.add(Go)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(s),Ss.copy(e.ray).recast(e.near),!(Bo.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Bo,qu)===null||Ss.origin.distanceToSquared(qu)>(e.far-e.near)**2))&&(Wu.copy(s).invert(),Ss.copy(e.ray).applyMatrix4(Wu),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=u.length;m<b;m++){let g=u[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,w=_;y<w;y+=3){let E=o.getX(y),x=o.getX(y+1),M=o.getX(y+2);n=Wo(this,p,e,i,c,h,d,E,x,M),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{let m=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let v=o.getX(g),_=o.getX(g+1),y=o.getX(g+2);n=Wo(this,a,e,i,c,h,d,v,_,y),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,b=u.length;m<b;m++){let g=u[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,w=_;y<w;y+=3){let E=y,x=y+1,M=y+2;n=Wo(this,p,e,i,c,h,d,E,x,M),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{let m=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let v=g,_=g+1,y=g+2;n=Wo(this,a,e,i,c,h,d,v,_,y),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}}};function e0(r,e,t,i,n,s,a,o){let l;if(e.side===ai?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,e.side===Yi,o),l===null)return null;Vo.copy(o),Vo.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Vo);return c<t.near||c>t.far?null:{distance:c,point:Vo.clone(),object:r}}function Wo(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,ko),r.getVertexPosition(l,zo),r.getVertexPosition(c,Ho);let h=e0(r,e,t,i,ko,zo,Ho,Xu);if(h){let d=new D;Un.getBarycoord(Xu,ko,zo,Ho,d),n&&(h.uv=Un.getInterpolatedAttribute(n,o,l,c,d,new ue)),s&&(h.uv1=Un.getInterpolatedAttribute(s,o,l,c,d,new ue)),a&&(h.normal=Un.getInterpolatedAttribute(a,o,l,c,d,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};Un.getNormal(ko,zo,Ho,u.normal),h.face=u,h.barycoord=d}return h}var sa=new ot,ju=new ot,Yu=new ot,t0=new ot,Ku=new De,qo=new D,gh=new Fi,Ju=new De,xh=new Ls,va=class extends Fe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_h,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ri),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,qo),this.boundingBox.expandByPoint(qo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,qo),this.boundingSphere.expandByPoint(qo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gh.copy(this.boundingSphere),gh.applyMatrix4(n),e.ray.intersectsSphere(gh)!==!1&&(Ju.copy(n).invert(),xh.copy(e.ray).applyMatrix4(Ju),!(this.boundingBox!==null&&xh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ot,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_h?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Uf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Pe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;ju.fromBufferAttribute(n.attributes.skinIndex,e),Yu.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(sa.copy(t),t.set(0,0,0,0)):(sa.set(t.x,t.y,t.z,1),t.set(0,0,0)),sa.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=Yu.getComponent(s);if(a!==0){let o=ju.getComponent(s);Ku.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(t0.copy(sa).applyMatrix4(Ku),a)}}return t.isVector4&&(t.w=sa.w),t.applyMatrix4(this.bindMatrixInverse)}},wr=class extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ui=class extends Lt{constructor(e=null,t=1,i=1,n,s,a,o,l,c=Tt,h=Tt,d,u){super(null,a,o,l,c,h,n,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zu=new De,i0=new De,ya=class r{constructor(e=[],t=[]){this.uuid=xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Pe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new De;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:i0;Zu.multiplyMatrices(o,t[s]),Zu.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Ui(t,e,e,Ti,wi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let s=e.bones[i],a=t[s];a===void 0&&(Pe("Skeleton: No bone found with UUID:",s),a=new wr),this.bones.push(a),this.boneInverses.push(new De().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){let a=t[n];e.bones.push(a.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}},zn=class extends It{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ur=new De,Qu=new De,Xo=[],$u=new ri,n0=new De,ra=new Fe,aa=new Fi,Hn=class extends Fe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,n0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ur),$u.copy(e.boundingBox).applyMatrix4(ur),this.boundingBox.union($u)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ur),aa.copy(e.boundingSphere).applyMatrix4(ur),this.boundingSphere.union(aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(ra.geometry=this.geometry,ra.material=this.material,ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),aa.copy(this.boundingSphere),aa.applyMatrix4(i),e.ray.intersectsSphere(aa)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,ur),Qu.multiplyMatrices(i,ur),ra.matrixWorld=Qu,ra.raycast(e,Xo);for(let a=0,o=Xo.length;a<o;a++){let l=Xo[a];l.instanceId=s,l.object=this,t.push(l)}Xo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new zn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ui(new Float32Array(n*this.count),n,this.count,Ll,wi));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ws=new Fi,s0=new ue(.5,.5),jo=new D,ls=class{constructor(e=new Vi,t=new Vi,i=new Vi,n=new Vi,s=new Vi,a=new Vi){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xi,i=!1){let n=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],m=s[8],b=s[9],g=s[10],p=s[11],v=s[12],_=s[13],y=s[14],w=s[15];if(n[0].setComponents(c-a,f-h,p-m,w-v).normalize(),n[1].setComponents(c+a,f+h,p+m,w+v).normalize(),n[2].setComponents(c+o,f+d,p+b,w+_).normalize(),n[3].setComponents(c-o,f-d,p-b,w-_).normalize(),i)n[4].setComponents(l,u,g,y).normalize(),n[5].setComponents(c-l,f-u,p-g,w-y).normalize();else if(n[4].setComponents(c-l,f-u,p-g,w-y).normalize(),t===Xi)n[5].setComponents(c+l,f+u,p+g,w+y).normalize();else if(t===vr)n[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);let t=s0.distanceTo(e.center);return ws.radius=.7071067811865476+t,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(jo.x=n.normal.x>0?e.max.x:e.min.x,jo.y=n.normal.y>0?e.max.y:e.min.y,jo.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(jo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ef=new De,ul=class r{constructor(){this.coordinateSystem=Xi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let s=t[n];ef.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[n]===void 0&&(i[n]=new ls),i[n].setFromProjectionMatrix(ef,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new ls),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new r().copy(this)}};var Tr=class extends Mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},fl=new D,pl=new D,tf=new De,oa=new Ls,Yo=new Fi,bh=new D,nf=new D,Ns=class extends lt{constructor(e=new Nt,t=new Tr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)fl.fromBufferAttribute(t,n-1),pl.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=fl.distanceTo(pl);e.setAttribute("lineDistance",new st(i,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(n),Yo.radius+=s,e.ray.intersectsSphere(Yo)===!1)return;tf.copy(n).invert(),oa.copy(e.ray).applyMatrix4(tf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=c){let p=h.getX(b),v=h.getX(b+1),_=Ko(this,e,oa,l,p,v,b);_&&t.push(_)}if(this.isLineLoop){let b=h.getX(m-1),g=h.getX(f),p=Ko(this,e,oa,l,b,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=c){let p=Ko(this,e,oa,l,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){let b=Ko(this,e,oa,l,m-1,f,m-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Ko(r,e,t,i,n,s,a){let o=r.geometry.attributes.position;if(fl.fromBufferAttribute(o,n),pl.fromBufferAttribute(o,s),t.distanceSqToSegment(fl,pl,bh,nf)>i)return;bh.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(bh);if(!(c<e.near||c>e.far))return{distance:c,point:nf.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var sf=new D,rf=new D,_a=class extends Ns{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)sf.fromBufferAttribute(t,n),rf.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+sf.distanceTo(rf);e.setAttribute("lineDistance",new st(i,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ma=class extends Ns{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Er=class extends Mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},af=new De,Sh=new Ls,Jo=new Fi,Zo=new D,Fs=class extends lt{constructor(e=new Nt,t=new Er){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(n),Jo.radius+=s,e.ray.intersectsSphere(Jo)===!1)return;af.copy(n).invert(),Sh.copy(e.ray).applyMatrix4(af);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=u,b=f;m<b;m++){let g=c.getX(m);Zo.fromBufferAttribute(d,g),of(Zo,g,l,n,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,b=f;m<b;m++)Zo.fromBufferAttribute(d,m),of(Zo,m,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function of(r,e,t,i,n,s,a){let o=Sh.distanceSqToPoint(r);if(o<t){let l=new D;Sh.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Sa=class extends Lt{constructor(e=[],t=Vs,i,n,s,a,o,l,c,h){super(e,t,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ji=class extends Lt{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var on=class extends Lt{constructor(e,t,i=cn,n,s,a,o=Tt,l=Tt,c,h=kn,d=1){if(h!==kn&&h!==hn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},wa=class extends on{constructor(e,t=cn,i=Vs,n,s,a=Tt,o=Tt,l,c=kn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,n,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ta=class extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},qt=class r extends Nt{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,n,a,2),m("x","z","y",1,-1,e,i,-t,n,a,3),m("x","y","z",1,-1,e,t,i,n,s,4),m("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(d,2));function m(b,g,p,v,_,y,w,E,x,M,R){let A=y/x,I=w/M,L=y/2,O=w/2,P=E/2,U=x+1,B=M+1,H=0,Z=0,z=new D;for(let X=0;X<B;X++){let ee=X*I-O;for(let pe=0;pe<U;pe++){let Ae=pe*A-L;z[b]=Ae*v,z[g]=ee*_,z[p]=P,c.push(z.x,z.y,z.z),z[b]=0,z[g]=0,z[p]=E>0?1:-1,h.push(z.x,z.y,z.z),d.push(pe/x),d.push(1-X/M),H+=1}}for(let X=0;X<M;X++)for(let ee=0;ee<x;ee++){let pe=u+ee+U*X,Ae=u+ee+U*(X+1),K=u+(ee+1)+U*(X+1),me=u+(ee+1)+U*X;l.push(pe,Ae,me),l.push(Ae,K,me),Z+=6}o.addGroup(f,Z,R),f+=Z,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ea=class r extends Nt{constructor(e=1,t=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,m=i*2+s,b=n+1,g=new D,p=new D;for(let v=0;v<=m;v++){let _=0,y=0,w=0,E=0;if(v<=i){let R=v/i,A=R*Math.PI/2;y=-h-e*Math.cos(A),w=e*Math.sin(A),E=-e*Math.cos(A),_=R*d}else if(v<=i+s){let R=(v-i)/s;y=-h+R*t,w=e,E=0,_=d+R*u}else{let R=(v-i-s)/i,A=R*Math.PI/2;y=h+e*Math.sin(A),w=e*Math.cos(A),E=e*Math.sin(A),_=d+u+R*d}let x=Math.max(0,Math.min(1,_/f)),M=0;v===0?M=.5/n:v===m&&(M=-.5/n);for(let R=0;R<=n;R++){let A=R/n,I=A*Math.PI*2,L=Math.sin(I),O=Math.cos(I);p.x=-w*O,p.y=y,p.z=w*L,o.push(p.x,p.y,p.z),g.set(-w*O,E,w*L),g.normalize(),l.push(g.x,g.y,g.z),c.push(A+M,x)}if(v>0){let R=(v-1)*b;for(let A=0;A<n;A++){let I=R+A,L=R+A+1,O=v*b+A,P=v*b+A+1;a.push(I,L,O),a.push(L,P,O)}}}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Aa=class r extends Nt{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new D,h=new ue;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ci=class r extends Nt{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],d=[],u=[],f=[],m=0,b=[],g=i/2,p=0;v(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new st(d,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(f,2));function v(){let y=new D,w=new D,E=0,x=(t-e)/i;for(let M=0;M<=s;M++){let R=[],A=M/s,I=A*(t-e)+e;for(let L=0;L<=n;L++){let O=L/n,P=O*l+o,U=Math.sin(P),B=Math.cos(P);w.x=I*U,w.y=-A*i+g,w.z=I*B,d.push(w.x,w.y,w.z),y.set(U,x,B).normalize(),u.push(y.x,y.y,y.z),f.push(O,1-A),R.push(m++)}b.push(R)}for(let M=0;M<n;M++)for(let R=0;R<s;R++){let A=b[R][M],I=b[R+1][M],L=b[R+1][M+1],O=b[R][M+1];(e>0||R!==0)&&(h.push(A,I,O),E+=3),(t>0||R!==s-1)&&(h.push(I,L,O),E+=3)}c.addGroup(p,E,0),p+=E}function _(y){let w=m,E=new ue,x=new D,M=0,R=y===!0?e:t,A=y===!0?1:-1;for(let L=1;L<=n;L++)d.push(0,g*A,0),u.push(0,A,0),f.push(.5,.5),m++;let I=m;for(let L=0;L<=n;L++){let P=L/n*l+o,U=Math.cos(P),B=Math.sin(P);x.x=R*B,x.y=g*A,x.z=R*U,d.push(x.x,x.y,x.z),u.push(0,A,0),E.x=U*.5+.5,E.y=B*.5*A+.5,f.push(E.x,E.y),m++}for(let L=0;L<n;L++){let O=w+L,P=I+L;y===!0?h.push(P,P+1,O):h.push(P+1,P,O),M+=3}c.addGroup(p,M,y===!0?1:2),p+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ra=class r extends ci{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Oi=class r extends Nt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=e/o,u=t/l,f=[],m=[],b=[],g=[];for(let p=0;p<h;p++){let v=p*u-a;for(let _=0;_<c;_++){let y=_*d-s;m.push(y,-v,0),b.push(0,0,1),g.push(_/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let _=v+c*p,y=v+c*(p+1),w=v+1+c*(p+1),E=v+1+c*p;f.push(_,y,E),f.push(y,w,E)}this.setIndex(f),this.setAttribute("position",new st(m,3)),this.setAttribute("normal",new st(b,3)),this.setAttribute("uv",new st(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var cs=class r extends Nt{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new D,u=new D,f=[],m=[],b=[],g=[];for(let p=0;p<=i;p++){let v=[],_=p/i,y=a+_*o,w=e*Math.cos(y),E=Math.sqrt(e*e-w*w),x=0;p===0&&a===0?x=.5/t:p===i&&l===Math.PI&&(x=-.5/t);for(let M=0;M<=t;M++){let R=M/t,A=n+R*s;d.x=-E*Math.cos(A),d.y=w,d.z=E*Math.sin(A),m.push(d.x,d.y,d.z),u.copy(d).normalize(),b.push(u.x,u.y,u.z),g.push(R+x,1-_),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){let _=h[p][v+1],y=h[p][v],w=h[p+1][v],E=h[p+1][v+1];(p!==0||a>0)&&f.push(_,y,E),(p!==i-1||l<Math.PI)&&f.push(y,w,E)}this.setIndex(f),this.setAttribute("position",new st(m,3)),this.setAttribute("normal",new st(b,3)),this.setAttribute("uv",new st(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ca=class r extends Nt{constructor(e=1,t=.4,i=12,n=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],d=[],u=new D,f=new D,m=new D;for(let b=0;b<=i;b++){let g=a+b/i*o;for(let p=0;p<=n;p++){let v=p/n*s;f.x=(e+t*Math.cos(g))*Math.cos(v),f.y=(e+t*Math.cos(g))*Math.sin(v),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(p/n),d.push(b/i)}}for(let b=1;b<=i;b++)for(let g=1;g<=n;g++){let p=(n+1)*b+g-1,v=(n+1)*(b-1)+g-1,_=(n+1)*(b-1)+g,y=(n+1)*b+g;l.push(p,v,y),l.push(v,_,y)}this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Xs(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];if(lf(n))n.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(lf(n[0])){let s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();e[t][i]=s}else e[t][i]=n.slice();else e[t][i]=n}}return e}function Ai(r){let e={};for(let t=0;t<r.length;t++){let i=Xs(r[t]);for(let n in i)e[n]=i[n]}return e}function lf(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function r0(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function $h(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}var Gt={clone:Xs,merge:Ai},a0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,et=class extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a0,this.fragmentShader=o0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=r0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new be().setHex(n.value);break;case"v2":this.uniforms[i].value=new ue().fromArray(n.value);break;case"v3":this.uniforms[i].value=new D().fromArray(n.value);break;case"v4":this.uniforms[i].value=new ot().fromArray(n.value);break;case"m3":this.uniforms[i].value=new He().fromArray(n.value);break;case"m4":this.uniforms[i].value=new De().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ar=class extends et{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},tt=class extends Mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=to,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Pi=class extends tt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return As('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){As('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Pa=class extends Mi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=to,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var ml=class extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},gl=class extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ss(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function la(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function l0(r){function e(n,s){return r[n]-r[s]}let t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function cf(r,e,t){let i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){let o=t[s]*e;for(let l=0;l!==e;++l)n[a++]=r[o+l]}return n}function c0(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=r[n++];while(s!==void 0)}var mn=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break t}a=t.length;break i}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break t}a=i,i=0;break i}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xl=class extends mn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ts,endingEnd:Ts}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Es:s=e,o=2*t-i;break;case da:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Es:a=e,l=2*i-t;break;case da:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-t)/(n-t),b=m*m,g=b*m,p=-u*g+2*u*b-u*m,v=(1+u)*g+(-1.5-2*u)*b+(-.5+u)*m+1,_=(-1-f)*g+(1.5+f)*b+.5*m,y=f*g-f*b;for(let w=0;w!==o;++w)s[w]=p*a[h+w]+v*a[c+w]+_*a[l+w]+y*a[d+w];return s}},Da=class extends mn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},bl=class extends mn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},vl=class extends mn{interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(i-t)/(n-t),b=1-m;for(let g=0;g!==o;++g)s[g]=a[c+g]*b+a[l+g]*m;return s}let u=o*2,f=e-1;for(let m=0;m!==o;++m){let b=a[c+m],g=a[l+m],p=f*u+m*2,v=d[p],_=d[p+1],y=e*u+m*2,w=h[y],E=h[y+1],x=d0(i,t,v,w,n);s[m]=tp(x,b,_,E,g)}return s}};function tp(r,e,t,i,n){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*i+r*r*r*n}function h0(r,e,t,i,n){let s=1-r;return 3*s*s*(t-e)+6*s*r*(i-t)+3*r*r*(n-i)}function d0(r,e,t,i,n){let s=(r-e)/(n-e);for(let a=0;a<8;a++){let o=tp(s,e,t,i,n)-r;if(Math.abs(o)<1e-10)break;let l=h0(s,e,t,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var Bi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ss(t,this.TimeBufferType),this.values=ss(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ss(e.times,Array),values:ss(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),la(e.settings)&&(i.settings={inTangents:ss(e.settings.inTangents,Array),outTangents:ss(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new vl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Rs:t=this.InterpolantFactoryMethodDiscrete;break;case Cs:t=this.InterpolantFactoryMethodLinear;break;case el:t=this.InterpolantFactoryMethodSmooth;break;case Mh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Pe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rs;case this.InterpolantFactoryMethodLinear:return Cs;case this.InterpolantFactoryMethodSmooth:return el;case this.InterpolantFactoryMethodBezier:return Mh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;la(this.settings)&&(hf(this.settings.inTangents,e),hf(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;la(this.settings)&&(df(this.settings.inTangents,e),df(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&vm(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===el,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let m=0;m!==i;++m){let b=t[d+m];if(b!==t[u+m]||b!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,la(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function hf(r,e){for(let t=0,i=r.length;t!==i;t+=2)r[t]+=e}function df(r,e){for(let t=0,i=r.length;t!==i;t+=2)r[t]*=e}Bi.prototype.ValueTypeName="";Bi.prototype.TimeBufferType=Float32Array;Bi.prototype.ValueBufferType=Float32Array;Bi.prototype.DefaultInterpolation=Cs;var Gn=class extends Bi{constructor(e,t,i){super(e,t,i)}};Gn.prototype.ValueTypeName="bool";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=Rs;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends Bi{constructor(e,t,i,n){super(e,t,i,n)}};Ia.prototype.ValueTypeName="color";var Vn=class extends Bi{constructor(e,t,i,n){super(e,t,i,n)}};Vn.prototype.ValueTypeName="number";var yl=class extends mn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)Dt.slerpFlat(s,0,a,c-o,a,c,l);return s}},Wn=class extends Bi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new yl(this.times,this.values,this.getValueSize(),e)}};Wn.prototype.ValueTypeName="quaternion";Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var qn=class extends Bi{constructor(e,t,i){super(e,t,i)}};qn.prototype.ValueTypeName="string";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=Rs;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends Bi{constructor(e,t,i,n){super(e,t,i,n)}};hs.prototype.ValueTypeName="vector";var Us=class{constructor(e="",t=-1,i=[],n=fc){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=xn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(f0(i[a]).scale(n));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=i.length;s!==a;++s)t.push(Bi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let h=l0(l);l=cf(l,1,h),c=cf(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Vn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(s);if(h&&h.length>1){let d=h[1],u=n[d];u||(n[d]=u=[]),u.push(c)}}let a=[];for(let o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function u0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vn;case"vector":case"vector2":case"vector3":case"vector4":return hs;case"color":return Ia;case"quaternion":return Wn;case"bool":case"boolean":return Gn;case"string":return qn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function f0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=u0(r.type);if(r.times===void 0){let i=[],n=[];c0(r.keys,i,n,"value"),r.times=i,r.values=n}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),la(r.settings)&&(t.settings={inTangents:ss(r.settings.inTangents,Float32Array),outTangents:ss(r.settings.outTangents,Float32Array)}),t}var pn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(uf(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!uf(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function uf(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var _l=class{constructor(e,t,i){let n=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ip=new _l,ln=class{constructor(e){this.manager=e!==void 0?e:ip,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ln.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fn={},wh=class extends Error{constructor(e,t){super(e),this.response=t}},Os=class extends ln{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=pn.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Fn[e]!==void 0){Fn[e].push({onLoad:t,onProgress:i,onError:n});return}Fn[e]=[],Fn[e].push({onLoad:t,onProgress:i,onError:n});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Pe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Fn[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,m=f!==0,b=0,g=new ReadableStream({start(p){v();function v(){d.read().then(({done:_,value:y})=>{if(_)p.close();else{b+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:f});for(let E=0,x=h.length;E<x;E++){let M=h[E];M.onProgress&&M.onProgress(w)}p.enqueue(y),v()}},_=>{p.error(_)})}}});return new Response(g)}else throw new wh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{pn.add(`file:${e}`,c);let h=Fn[e];delete Fn[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Fn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Fn[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var fr=new WeakMap,Ml=class extends ln{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=pn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=fr.get(a);d===void 0&&(d=[],fr.set(a,d)),d.push({onLoad:t,onError:n})}return a}let o=yr("img");function l(){h(),t&&t(this);let d=fr.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}fr.delete(this),s.manager.itemEnd(e)}function c(d){h(),n&&n(d),pn.remove(`image:${e}`);let u=fr.get(this)||[];for(let f=0;f<u.length;f++){let m=u[f];m.onError&&m.onError(d)}fr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),pn.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var La=class extends ln{constructor(e){super(e)}load(e,t,i,n){let s=this,a=new Ui,o=new Os(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){n!==void 0?n(h):ze(h);return}s._applyTexData(a,c),t&&t(a,c)},i,n),a}createDataTexture(e){let t=new Ui;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Ni,e.wrapT=t.wrapT!==void 0?t.wrapT:Ni,e.magFilter=t.magFilter!==void 0?t.magFilter:ut,e.minFilter=t.minFilter!==void 0?t.minFilter:ut,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Ii),t.mipmapCount===1&&(e.minFilter=ut),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},Na=class extends ln{constructor(e){super(e)}load(e,t,i,n){let s=new Lt,a=new Ml(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}},Bs=class extends lt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Rr=class extends Bs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},vh=new De,ff=new D,pf=new D,Cr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ls,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ff.setFromMatrixPosition(e.matrixWorld),t.position.copy(ff),pf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){vh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(vh,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=n?n.z/s.x:1,o=n?n.w/s.y:1,l=n?n.x/s.x:0,c=n?n.y/s.y:0;e.coordinateSystem===vr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(vh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Qo=new D,$o=new Dt,fn=new D,Fa=class extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qo,$o,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,$o,fn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Qo,$o,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,$o,fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ns=new D,mf=new ue,gf=new ue,Ht=class extends Fa{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,mf,gf),t.subVectors(gf,mf)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ca*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Th=class extends Cr{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Ps*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ks=class extends Bs{constructor(e,t,i=0,n=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Th}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Eh=class extends Cr{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0}},hi=class extends Bs{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Eh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Xn=class extends Fa{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ah=class extends Cr{constructor(){super(new Xn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ds=class extends Bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new Ah}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var jn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var yh=new WeakMap,Ua=class extends ln{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Pe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Pe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=pn.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{yh.has(a)===!0?(n&&n(yh.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return pn.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){n&&n(c),yh.set(l,c),pn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});pn.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var pr=-90,mr=1,Pr=class extends lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ht(pr,mr,e,t);n.layers=this.layers,this.add(n);let s=new Ht(pr,mr,e,t);s.layers=this.layers,this.add(s);let a=new Ht(pr,mr,e,t);a.layers=this.layers,this.add(a);let o=new Ht(pr,mr,e,t);o.layers=this.layers,this.add(o);let l=new Ht(pr,mr,e,t);l.layers=this.layers,this.add(l);let c=new Ht(pr,mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=b,e.setRenderTarget(i,5,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Sl=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Oa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=p0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function p0(){this._document.hidden===!1&&this.reset()}var wl=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,s,a;switch(t){case"quaternion":n=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,n=this.valueSize,s=e*n+n,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[s+o]=i[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(i,s,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,a=n;s!==a;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let a=0;a!==s;++a)e[t+a]=e[i+a]}_slerp(e,t,i,n){Dt.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){let a=this._workIndex*s;Dt.multiplyQuaternionsFlat(e,a,e,t,e,i),Dt.slerpFlat(e,t,e,t,e,a,n)}_lerp(e,t,i,n,s){let a=1-n;for(let o=0;o!==s;++o){let l=t+o;e[l]=e[l]*a+e[i+o]*n}}_lerpAdditive(e,t,i,n,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[i+a]*n}}},ed="\\[\\]\\.:\\/",m0=new RegExp("["+ed+"]","g"),td="[^"+ed+"]",g0="[^"+ed.replace("\\.","")+"]",x0=/((?:WC+[\/:])*)/.source.replace("WC",td),b0=/(WCOD+)?/.source.replace("WCOD",g0),v0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",td),y0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",td),_0=new RegExp("^"+x0+b0+v0+y0+"$"),M0=["material","materials","bones","map"],Rh=class{constructor(e,t,i){let n=i||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},_t=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(m0,"")}static parseTrackName(e){let t=_0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);M0.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=Rh;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tl=class{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;let s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Ts,endingEnd:Ts};for(let c=0;c!==a;++c){let h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Bf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){let n=this._clip.duration,s=e._clip.duration,a=s/n,o=n/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let n=this._mixer,s=n.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case zf:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case fc:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(n,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,n=this.time+e,s=this._loopCount,a=i===kf;if(e===0)return s===-1?n:a&&(s&1)===1?t-n:n;if(i===Of){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=t||n<0){let o=Math.floor(n/t);n-=t*o,s+=Math.abs(o);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=n;if(a&&(s&1)===1)return t-n}return n}_setEndings(e,t,i){let n=this._interpolantSettings;i?(n.endingStart=Es,n.endingEnd=Es):(e?n.endingStart=this.zeroSlopeAtStart?Es:Ts:n.endingStart=da,t?n.endingEnd=this.zeroSlopeAtEnd?Es:Ts:n.endingEnd=da)}_scheduleFading(e,t,i){let n=this._mixer,s=n.time,a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=i,this}},S0=new Float32Array(1),Ba=class extends rn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==s;++d){let u=n[d],f=u.name,m=h[f];if(m!==void 0)++m.referenceCount,a[d]=m;else{if(m=a[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}let b=t&&t._propertyBindings[d].binding.parsedPath;m=new wl(_t.create(i,f,b),u.ValueTypeName,u.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[d]=m}o[d].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let n=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){let n=this._bindingsByRootAndName,s=this._bindings,a=n[t];a===void 0&&(a={},n[t]=a),a[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,a=this._bindingsByRootAndName,o=a[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[n]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new Da(new Float32Array(2),new Float32Array(2),1,S0),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){let n=t||this._root,s=n.uuid,a=typeof e=="string"?Us.findByName(n,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=fc),l!==void 0){let d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===i)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new Tl(this,a,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){let i=t||this._root,n=i.uuid,s=typeof e=="string"?Us.findByName(i,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,s,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){let a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let a in i){let o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let n=this._bindingsByRootAndName,s=n[t];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};var ka=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Pe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var od=class od{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=n,this}};od.prototype.isMatrix2=!0;var Ch=od;function id(r,e,t,i){let n=w0(i);switch(t){case Hh:return r*e;case Ll:return r*e/n.components*n.byteLength;case Nl:return r*e/n.components*n.byteLength;case ps:return r*e*2/n.components*n.byteLength;case Fl:return r*e*2/n.components*n.byteLength;case Gh:return r*e*3/n.components*n.byteLength;case Ti:return r*e*4/n.components*n.byteLength;case Ul:return r*e*4/n.components*n.byteLength;case Ya:case Ka:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ja:case Za:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bl:case zl:return Math.max(r,16)*Math.max(e,8)/4;case Ol:case kl:return Math.max(r,8)*Math.max(e,8)/2;case Hl:case Gl:case Wl:case ql:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Qa:case Xl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case $l:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ec:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case tc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ic:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case nc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case sc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case rc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ac:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case oc:case lc:case cc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case hc:case dc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case $a:case uc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function w0(r){switch(r){case Si:case Oh:return{byteLength:1,components:1};case Nr:case Bh:case gt:return{byteLength:2,components:1};case Dl:case Il:return{byteLength:2,components:4};case cn:case Pl:case wi:return{byteLength:4,components:1};case kh:case zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function wp(){let r=null,e=!1,t=null,i=null;function n(s,a){i=r.requestAnimationFrame(n),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function E0(r){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],b=d[f];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++u,d[u]=b)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let b=d[f];r.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var A0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,C0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,N0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,U0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,O0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,z0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,H0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,J0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Z0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",ng=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,bg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_g=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Cg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ug=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ex=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ox=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ux=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,px=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_x=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ax=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Nx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ox=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$x=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ib=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:A0,alphahash_pars_fragment:R0,alphamap_fragment:C0,alphamap_pars_fragment:P0,alphatest_fragment:D0,alphatest_pars_fragment:I0,aomap_fragment:L0,aomap_pars_fragment:N0,batching_pars_vertex:F0,batching_vertex:U0,begin_vertex:O0,beginnormal_vertex:B0,bsdfs:k0,iridescence_fragment:z0,bumpmap_pars_fragment:H0,clipping_planes_fragment:G0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:W0,clipping_planes_vertex:q0,color_fragment:X0,color_pars_fragment:j0,color_pars_vertex:Y0,color_vertex:K0,common:J0,defaultnormal_vertex:Z0,displacementmap_pars_vertex:Q0,displacementmap_vertex:$0,emissivemap_fragment:eg,emissivemap_pars_fragment:tg,colorspace_fragment:ig,colorspace_pars_fragment:ng,envmap_fragment:sg,envmap_common_pars_fragment:rg,envmap_pars_fragment:ag,envmap_pars_vertex:og,envmap_physical_pars_fragment:bg,envmap_vertex:lg,fog_vertex:cg,fog_pars_vertex:hg,fog_fragment:dg,fog_pars_fragment:ug,gradientmap_pars_fragment:fg,lightmap_pars_fragment:pg,lights_lambert_fragment:mg,lights_lambert_pars_fragment:gg,lights_pars_begin:xg,lights_toon_fragment:vg,lights_toon_pars_fragment:yg,lights_phong_fragment:_g,lights_phong_pars_fragment:Mg,lights_physical_fragment:Sg,lights_physical_pars_fragment:wg,lights_fragment_begin:Tg,lights_fragment_maps:Eg,lights_fragment_end:Ag,lightprobes_pars_fragment:Rg,logdepthbuf_fragment:Cg,logdepthbuf_pars_fragment:Pg,logdepthbuf_pars_vertex:Dg,logdepthbuf_vertex:Ig,map_fragment:Lg,map_pars_fragment:Ng,map_particle_fragment:Fg,map_particle_pars_fragment:Ug,metalnessmap_fragment:Og,metalnessmap_pars_fragment:Bg,morphinstance_vertex:kg,morphcolor_vertex:zg,morphnormal_vertex:Hg,morphtarget_pars_vertex:Gg,morphtarget_vertex:Vg,normal_fragment_begin:Wg,normal_fragment_maps:qg,normal_pars_fragment:Xg,normal_pars_vertex:jg,normal_vertex:Yg,normalmap_pars_fragment:Kg,clearcoat_normal_fragment_begin:Jg,clearcoat_normal_fragment_maps:Zg,clearcoat_pars_fragment:Qg,iridescence_pars_fragment:$g,opaque_fragment:ex,packing:tx,premultiplied_alpha_fragment:ix,project_vertex:nx,dithering_fragment:sx,dithering_pars_fragment:rx,roughnessmap_fragment:ax,roughnessmap_pars_fragment:ox,shadowmap_pars_fragment:lx,shadowmap_pars_vertex:cx,shadowmap_vertex:hx,shadowmask_pars_fragment:dx,skinbase_vertex:ux,skinning_pars_vertex:fx,skinning_vertex:px,skinnormal_vertex:mx,specularmap_fragment:gx,specularmap_pars_fragment:xx,tonemapping_fragment:bx,tonemapping_pars_fragment:vx,transmission_fragment:yx,transmission_pars_fragment:_x,uv_pars_fragment:Mx,uv_pars_vertex:Sx,uv_vertex:wx,worldpos_vertex:Tx,background_vert:Ex,background_frag:Ax,backgroundCube_vert:Rx,backgroundCube_frag:Cx,cube_vert:Px,cube_frag:Dx,depth_vert:Ix,depth_frag:Lx,distance_vert:Nx,distance_frag:Fx,equirect_vert:Ux,equirect_frag:Ox,linedashed_vert:Bx,linedashed_frag:kx,meshbasic_vert:zx,meshbasic_frag:Hx,meshlambert_vert:Gx,meshlambert_frag:Vx,meshmatcap_vert:Wx,meshmatcap_frag:qx,meshnormal_vert:Xx,meshnormal_frag:jx,meshphong_vert:Yx,meshphong_frag:Kx,meshphysical_vert:Jx,meshphysical_frag:Zx,meshtoon_vert:Qx,meshtoon_frag:$x,points_vert:eb,points_frag:tb,shadow_vert:ib,shadow_frag:nb,sprite_vert:sb,sprite_frag:rb},ge={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},vn={basic:{uniforms:Ai([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Ai([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Ai([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Ai([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Ai([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new be(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Ai([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Ai([ge.points,ge.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Ai([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Ai([ge.common,ge.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Ai([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Ai([ge.sprite,ge.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Ai([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Ai([ge.lights,ge.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};vn.physical={uniforms:Ai([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var mc={r:0,b:0,g:0},ab=new De,Tp=new He;Tp.set(-1,0,0,0,1,0,0,0,1);function ob(r,e,t,i,n,s){let a=new be(0),o=n===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let _=v.isScene===!0?v.background:null;if(_&&_.isTexture){let y=v.backgroundBlurriness>0;_=e.get(_,y)}return _}function m(v){let _=!1,y=f(v);y===null?g(a,o):y&&y.isColor&&(g(y,1),_=!0);let w=r.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(v,_){let y=f(_);y&&y.isCubeTexture?(c===void 0&&(c=new Fe(new qt(1,1,1),new et({name:"BackgroundCubeMaterial",uniforms:Xs(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ab.makeRotationFromEuler(_.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Tp),c.material.toneMapped=We.getTransfer(y.colorSpace)!==at,(h!==y||d!==y.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Fe(new Oi(2,2),new et({name:"BackgroundMaterial",uniforms:Xs(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=We.getTransfer(y.colorSpace)!==at,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,_){v.getRGB(mc,$h(r)),t.buffers.color.setClear(mc.r,mc.g,mc.b,_,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),o=_,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:m,addToRenderList:b,dispose:p}}function lb(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null),s=n,a=!1;function o(I,L,O,P,U){let B=!1,H=d(I,P,O,L);s!==H&&(s=H,c(s.object)),B=f(I,P,O,U),B&&m(I,P,O,U),U!==null&&e.update(U,r.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,y(I,L,O,P),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return r.createVertexArray()}function c(I){return r.bindVertexArray(I)}function h(I){return r.deleteVertexArray(I)}function d(I,L,O,P){let U=P.wireframe===!0,B=i[L.id];B===void 0&&(B={},i[L.id]=B);let H=I.isInstancedMesh===!0?I.id:0,Z=B[H];Z===void 0&&(Z={},B[H]=Z);let z=Z[O.id];z===void 0&&(z={},Z[O.id]=z);let X=z[U];return X===void 0&&(X=u(l()),z[U]=X),X}function u(I){let L=[],O=[],P=[];for(let U=0;U<t;U++)L[U]=0,O[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:P,object:I,attributes:{},index:null}}function f(I,L,O,P){let U=s.attributes,B=L.attributes,H=0,Z=O.getAttributes();for(let z in Z)if(Z[z].location>=0){let ee=U[z],pe=B[z];if(pe===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(pe=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(pe=I.instanceColor)),ee===void 0||ee.attribute!==pe||pe&&ee.data!==pe.data)return!0;H++}return s.attributesNum!==H||s.index!==P}function m(I,L,O,P){let U={},B=L.attributes,H=0,Z=O.getAttributes();for(let z in Z)if(Z[z].location>=0){let ee=B[z];ee===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor));let pe={};pe.attribute=ee,ee&&ee.data&&(pe.data=ee.data),U[z]=pe,H++}s.attributes=U,s.attributesNum=H,s.index=P}function b(){let I=s.newAttributes;for(let L=0,O=I.length;L<O;L++)I[L]=0}function g(I){p(I,0)}function p(I,L){let O=s.newAttributes,P=s.enabledAttributes,U=s.attributeDivisors;O[I]=1,P[I]===0&&(r.enableVertexAttribArray(I),P[I]=1),U[I]!==L&&(r.vertexAttribDivisor(I,L),U[I]=L)}function v(){let I=s.newAttributes,L=s.enabledAttributes;for(let O=0,P=L.length;O<P;O++)L[O]!==I[O]&&(r.disableVertexAttribArray(O),L[O]=0)}function _(I,L,O,P,U,B,H){H===!0?r.vertexAttribIPointer(I,L,O,U,B):r.vertexAttribPointer(I,L,O,P,U,B)}function y(I,L,O,P){b();let U=P.attributes,B=O.getAttributes(),H=L.defaultAttributeValues;for(let Z in B){let z=B[Z];if(z.location>=0){let X=U[Z];if(X===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){let ee=X.normalized,pe=X.itemSize,Ae=e.get(X);if(Ae===void 0)continue;let K=Ae.buffer,me=Ae.type,Me=Ae.bytesPerElement,Re=me===r.INT||me===r.UNSIGNED_INT||X.gpuType===Pl;if(X.isInterleavedBufferAttribute){let he=X.data,Oe=he.isInterleavedBuffer===!0?he.stride:he.itemSize,pt=X.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let Be=0;Be<z.locationSize;Be++)p(z.location+Be,he.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Be=0;Be<z.locationSize;Be++)g(z.location+Be);r.bindBuffer(r.ARRAY_BUFFER,K);for(let Be=0;Be<z.locationSize;Be++)_(z.location+Be,pe/z.locationSize,me,ee,Oe*Me,(pt+pe/z.locationSize*Be)*Me,Re)}else{if(X.isInstancedBufferAttribute){for(let he=0;he<z.locationSize;he++)p(z.location+he,X.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let he=0;he<z.locationSize;he++)g(z.location+he);r.bindBuffer(r.ARRAY_BUFFER,K);for(let he=0;he<z.locationSize;he++)_(z.location+he,pe/z.locationSize,me,ee,pe*Me,pe/z.locationSize*he*Me,Re)}}else if(H!==void 0){let ee=H[Z];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(z.location,ee);break;case 3:r.vertexAttrib3fv(z.location,ee);break;case 4:r.vertexAttrib4fv(z.location,ee);break;default:r.vertexAttrib1fv(z.location,ee)}}}}v()}function w(){R();for(let I in i){let L=i[I];for(let O in L){let P=L[O];for(let U in P){let B=P[U];for(let H in B)h(B[H].object),delete B[H];delete P[U]}}delete i[I]}}function E(I){if(i[I.id]===void 0)return;let L=i[I.id];for(let O in L){let P=L[O];for(let U in P){let B=P[U];for(let H in B)h(B[H].object),delete B[H];delete P[U]}}delete i[I.id]}function x(I){for(let L in i){let O=i[L];for(let P in O){let U=O[P];if(U[I.id]===void 0)continue;let B=U[I.id];for(let H in B)h(B[H].object),delete B[H];delete U[I.id]}}}function M(I){for(let L in i){let O=i[L],P=I.isInstancedMesh===!0?I.id:0,U=O[P];if(U!==void 0){for(let B in U){let H=U[B];for(let Z in H)h(H[Z].object),delete H[Z];delete U[B]}delete O[P],Object.keys(O).length===0&&delete i[L]}}}function R(){A(),a=!0,s!==n&&(s=n,c(s.object))}function A(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:b,enableAttribute:g,disableUnusedAttributes:v}}function cb(r,e,t){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function hb(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(x){return!(x!==Ti&&i.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let M=x===gt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Si&&x!==wi&&!M&&i.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Pe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Pe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,maxSamples:w,samples:E}}function db(r){let e=this,t=null,i=0,n=!1,s=!1,a=new Vi,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,b=d.clipIntersection,g=d.clipShadows,p=r.get(d);if(!n||m===null||m.length===0||s&&!g)s?h(null):c();else{let v=s?0:i,_=v*4,y=p.clippingState||null;l.value=y,y=h(m,u,_,f);for(let w=0;w!==_;++w)y[w]=t[w];p.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,m){let b=d!==null?d.length:0,g=null;if(b!==0){if(g=l.value,m!==!0||g===null){let p=f+b*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,y=f;_!==b;++_,y+=4)a.copy(d[_]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}var so=class extends Et{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Sa(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new qt(5,5,5),s=new et({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ai,blending:oi});s.uniforms.tEquirect.value=t;let a=new Fe(n,s),o=t.minFilter;return t.minFilter===Ii&&(t.minFilter=ut),new Pr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}},np=256,ub=3,fb=20,Ep=256,Ap=16,pb=3,mb=new D,gb=new be,Or=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Pr(1,10,null),this._boxMesh=new Fe(new qt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){let{size:a=256,position:o=mb}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,b=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(e.background=l.getClearColor(gb));let g=new Pr(i,n,h);return g.position.copy(o),g.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=m,e.background=b,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(np,Jh(e))}_fromTexture(e,t){e.mapping===Vs||e.mapping===Ir?this._setSize(e.image.length===0?np:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=sp(e,!1,!1),i=Math.log2(e)-ub;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=sp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,s=this._cubeCamera;n.material=i,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Vs||e.mapping===Ir?(this._cubemapMaterial===null&&(this._cubemapMaterial=ap()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=rp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=xb(),this._integrationMaterial=bb());let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Ap);for(let a=0;a<=i;a++){let o=r.lodToRoughness(a,i);if(a>i-pb)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Ep*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=vb());let i=this._blurMaterial,n=i.uniforms,s=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=s.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(s,0,i)}};function sp(r,e,t){return new so(r,{minFilter:Ii,generateMipmaps:e,type:gt,colorSpace:Kt,depthBuffer:t})}function ro(r,e,t){return new et({name:r,uniforms:e,vertexShader:je.cube_vert,fragmentShader:t,side:ai,blending:oi,depthTest:!1,depthWrite:!1})}function xb(){return ro("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ep}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function bb(){return ro("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ap}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function vb(){return ro("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fb}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function rp(){return ro("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ap(){return ro("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function yb(r){let e=new WeakMap,t=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===fs||f===Rl)if(e.has(u)){let m=e.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let b=new so(m.height);return b.fromEquirectangularTexture(r,u),e.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===fs||f===Rl,b=f===Vs||f===Ir;if(m||b){let g=t.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Or(r)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let v=u.image;return m&&v&&v.height>0||b&&v&&l(v)?(i===null&&(i=new Or(r)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===fs?u.mapping=Vs:f===Rl&&(u.mapping=Ir),u}function l(u){let f=0,m=6;for(let b=0;b<m;b++)u[b]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function _b(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=r.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&As("WebGLRenderer: "+i+" extension not supported."),n}}}function Mb(r,e,t,i){let n={},s=new WeakMap,a=new FinalizationRegistry(m=>delete n[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete n[m.id],a.unregister(m);let b=s.get(m);b&&(e.remove(b),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,b){return n[b.id]!==void 0||(b.addEventListener("dispose",o),n[b.id]=new WeakRef(b),a.register(b,b.id,b),t.memory.geometries++),b}function h(m){let b=m.attributes;for(let g in b)e.update(b[g],r.ARRAY_BUFFER)}function d(m){let b=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let v=b!==null?b.array.length:g.array.length/3-1,_=g.count>=65535?ba:xa,y=new _(Math.ceil(v/3)*6,1),w=y.array;if(b!==null){let x=b.array;p=b.version;for(let M=0,R=0;M<v;M+=3){let A=x[M+0],I=x[M+1],L=x[M+2];w[R++]=A,w[R++]=I,w[R++]=I,w[R++]=L,w[R++]=L,w[R++]=A}}else{p=g.version;for(let x=0,M=0;x<v;x+=3){let R=x+0,A=x+1,I=x+2;w[M++]=R,w[M++]=A,w[M++]=A,w[M++]=I,w[M++]=I,w[M++]=R}}y.version=p;let E=s.get(m);E&&e.remove(E),s.set(m,y)}function u(m){let b=s.get(m);if(b){let g=m.index;g!==null&&b.version<g.version&&d(m)}else d(m);return s.get(m)}function f(){for(let m in n){let b=n[m].deref();b!==void 0&&l(b)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Sb(r,e,t){let i;function n(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){r.drawElements(i,u,s,d*a),t.update(u,i,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(i,u,s,d*a,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,f);let b=0;for(let g=0;g<f;g++)b+=u[g];t.update(b,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function wb(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:ze("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Tb(r,e,t){let i=new WeakMap,n=new ot;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let R=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],_=0;f===!0&&(_=1),m===!0&&(_=2),b===!0&&(_=3);let y=o.attributes.position.count*_,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*w*4*d),x=new pa(E,y,w,d);x.type=wi,x.needsUpdate=!0;let M=_*4;for(let A=0;A<d;A++){let I=g[A],L=p[A],O=v[A],P=y*w*4*A;for(let U=0;U<I.count;U++){let B=U*M;f===!0&&(n.fromBufferAttribute(I,U),E[P+B+0]=n.x,E[P+B+1]=n.y,E[P+B+2]=n.z,E[P+B+3]=0),m===!0&&(n.fromBufferAttribute(L,U),E[P+B+4]=n.x,E[P+B+5]=n.y,E[P+B+6]=n.z,E[P+B+7]=0),b===!0&&(n.fromBufferAttribute(O,U),E[P+B+8]=n.x,E[P+B+9]=n.y,E[P+B+10]=n.z,E[P+B+11]=O.itemSize===4?n.w:1)}}u={count:d,texture:x,size:new ue(y,w)},i.set(o,u),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Eb(r,e,t,i,n){let s=new WeakMap;function a(c){let h=n.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Ab={[Ga]:"LINEAR_TONE_MAPPING",[Va]:"REINHARD_TONE_MAPPING",[Wa]:"CINEON_TONE_MAPPING",[Gs]:"ACES_FILMIC_TONE_MAPPING",[Xa]:"AGX_TONE_MAPPING",[ja]:"NEUTRAL_TONE_MAPPING",[qa]:"CUSTOM_TONE_MAPPING"};function Rb(r,e,t,i,n,s){let a=new Et(e,t,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Nt;h.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new st([0,2,0,0,2,0],2));let d=new Ar({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Fe(h,d),f=new Xn(-1,1,1,-1,0,1),m=null,b=null,g=!1,p,v=null,_=[],y=!1;this.setSize=function(w,E){a.setSize(w,E),o!==null&&o.setSize(w,E),l!==null&&l.setSize(w,E);for(let x=0;x<_.length;x++){let M=_[x];M.setSize&&M.setSize(w,E)}},this.setEffects=function(w){_=w,y=_.length>0&&_[0].isRenderPass===!0;let E=a.width,x=a.height;_.length>0&&o===null&&(o=new Et(E,x,{type:gt,depthBuffer:!1,stencilBuffer:!1}),l=new Et(E,x,{type:gt,depthBuffer:!1,stencilBuffer:!1}));let M=n===!0&&_.some(R=>R.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new on(E,x),s===!0&&(c.format=hn,c.type=Yn)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let R=0;R<_.length;R++){let A=_[R];A.setSize&&A.setSize(E,x),M&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(w,E){if(g||w.toneMapping===gn&&_.length===0)return!1;if(v=E,E!==null){let x=E.width,M=E.height;(a.width!==x||a.height!==M)&&this.setSize(x,M)}return y===!1&&w.setRenderTarget(a),p=w.toneMapping,w.toneMapping=gn,!0},this.hasRenderPass=function(){return y},this.end=function(w,E){w.toneMapping=p,g=!0;let x=a,M=o;for(let R=0;R<_.length;R++){let A=_[R];A.enabled!==!1&&(A.render(w,M,x,E),A.needsSwap!==!1&&(x=M,M=M===o?l:o))}if(m!==w.outputColorSpace||b!==w.toneMapping){m=w.outputColorSpace,b=w.toneMapping,d.defines={},We.getTransfer(m)===at&&(d.defines.SRGB_TRANSFER="");let R=Ab[b];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,w.setRenderTarget(v),w.render(u,f),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Rp=new Lt,Cp=new on(1,1),Pp=new wa(1),Dp=new pa,Ip=new dl,Lp=new Sa,op=[],lp=[],cp=new Float32Array(16),hp=new Float32Array(9),dp=new Float32Array(4);function Br(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=op[n];if(s===void 0&&(s=new Float32Array(n),op[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Zt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Qt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function bc(r,e){let t=lp[e];t===void 0&&(t=new Int32Array(e),lp[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Cb(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Pb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2fv(this.addr,e),Qt(t,e)}}function Db(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;r.uniform3fv(this.addr,e),Qt(t,e)}}function Ib(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4fv(this.addr,e),Qt(t,e)}}function Lb(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,i))return;dp.set(i),r.uniformMatrix2fv(this.addr,!1,dp),Qt(t,i)}}function Nb(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,i))return;hp.set(i),r.uniformMatrix3fv(this.addr,!1,hp),Qt(t,i)}}function Fb(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,i))return;cp.set(i),r.uniformMatrix4fv(this.addr,!1,cp),Qt(t,i)}}function Ub(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ob(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2iv(this.addr,e),Qt(t,e)}}function Bb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3iv(this.addr,e),Qt(t,e)}}function kb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4iv(this.addr,e),Qt(t,e)}}function zb(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Hb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2uiv(this.addr,e),Qt(t,e)}}function Gb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3uiv(this.addr,e),Qt(t,e)}}function Vb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4uiv(this.addr,e),Qt(t,e)}}function vc(r){return r.version===0&&(r.compareFunction=Xh,r.needsUpdate=!0),r}function Wb(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?s=vc(Cp):s=Rp,t.setTexture2D(e||s,n)}function qb(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Ip,n)}function Xb(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=vc(Pp):s=Lp,t.setTextureCube(e||s,n)}function jb(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Dp,n)}function Yb(r){switch(r){case 5126:return Cb;case 35664:return Pb;case 35665:return Db;case 35666:return Ib;case 35674:return Lb;case 35675:return Nb;case 35676:return Fb;case 5124:case 35670:return Ub;case 35667:case 35671:return Ob;case 35668:case 35672:return Bb;case 35669:case 35673:return kb;case 5125:return zb;case 36294:return Hb;case 36295:return Gb;case 36296:return Vb;case 35678:case 36198:case 36298:case 36306:case 35682:return Wb;case 35679:case 36299:case 36307:return qb;case 35680:case 36300:case 36308:case 36293:return Xb;case 36289:case 36303:case 36311:case 36292:return jb}}function Kb(r,e){r.uniform1fv(this.addr,e)}function Jb(r,e){let t=Br(e,this.size,2);r.uniform2fv(this.addr,t)}function Zb(r,e){let t=Br(e,this.size,3);r.uniform3fv(this.addr,t)}function Qb(r,e){let t=Br(e,this.size,4);r.uniform4fv(this.addr,t)}function $b(r,e){let t=Br(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ev(r,e){let t=Br(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function tv(r,e){let t=Br(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function iv(r,e){r.uniform1iv(this.addr,e)}function nv(r,e){r.uniform2iv(this.addr,e)}function sv(r,e){r.uniform3iv(this.addr,e)}function rv(r,e){r.uniform4iv(this.addr,e)}function av(r,e){r.uniform1uiv(this.addr,e)}function ov(r,e){r.uniform2uiv(this.addr,e)}function lv(r,e){r.uniform3uiv(this.addr,e)}function cv(r,e){r.uniform4uiv(this.addr,e)}function hv(r,e,t){let i=this.cache,n=e.length,s=bc(t,n);Zt(i,s)||(r.uniform1iv(this.addr,s),Qt(i,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=vc(Cp):a=Rp;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,s[o])}function dv(r,e,t){let i=this.cache,n=e.length,s=bc(t,n);Zt(i,s)||(r.uniform1iv(this.addr,s),Qt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Ip,s[a])}function uv(r,e,t){let i=this.cache,n=e.length,s=bc(t,n);Zt(i,s)||(r.uniform1iv(this.addr,s),Qt(i,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=vc(Pp):a=Lp;for(let o=0;o!==n;++o)t.setTextureCube(e[o]||a,s[o])}function fv(r,e,t){let i=this.cache,n=e.length,s=bc(t,n);Zt(i,s)||(r.uniform1iv(this.addr,s),Qt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Dp,s[a])}function pv(r){switch(r){case 5126:return Kb;case 35664:return Jb;case 35665:return Zb;case 35666:return Qb;case 35674:return $b;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return iv;case 35667:case 35671:return nv;case 35668:case 35672:return sv;case 35669:case 35673:return rv;case 5125:return av;case 36294:return ov;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return fv}}var hd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Yb(t.type)}},dd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pv(t.type)}},ud=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},ld=/(\w+)(\])?(\[|\.)?/g;function up(r,e){r.seq.push(e),r.map[e.id]=e}function mv(r,e,t){let i=r.name,n=i.length;for(ld.lastIndex=0;;){let s=ld.exec(i),a=ld.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){up(t,c===void 0?new hd(o,r,e):new dd(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new ud(o),up(t,d)),t=d}}}var Ur=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);mv(o,l,this)}let n=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function fp(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var gv=37297,xv=0;function bv(r,e){let t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var pp=new He;function vv(r){We._getMatrix(pp,We.workingColorSpace,r);let e=`mat3( ${pp.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(r)){case ua:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function mp(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+bv(r.getShaderSource(e),o)}else return s}function yv(r,e){let t=vv(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var _v={[Ga]:"Linear",[Va]:"Reinhard",[Wa]:"Cineon",[Gs]:"ACESFilmic",[Xa]:"AgX",[ja]:"Neutral",[qa]:"Custom"};function Mv(r,e){let t=_v[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var gc=new D;function Sv(){We.getLuminanceCoefficients(gc);let r=gc.x.toFixed(4),e=gc.y.toFixed(4),t=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function Tv(r){let e=[];for(let t in r){let i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ev(r,e){let t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(e,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function no(r){return r!==""}function gp(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function xp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Av=/^[ \t]*#include +<([\w\d./]+)>/gm;function fd(r){return r.replace(Av,Rv)}function Rv(r,e){let t=je[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return fd(t)}var Cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bp(r){return r.replace(Cv,Pv)}function Pv(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function vp(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Dv={[zs]:"SHADOWMAP_TYPE_PCF",[Dr]:"SHADOWMAP_TYPE_VSM"};function Iv(r){return Dv[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Lv={[Ir]:"ENVMAP_MODE_REFRACTION"};function Nv(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Lv[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Fv={[Fh]:"ENVMAP_BLENDING_MULTIPLY",[Nf]:"ENVMAP_BLENDING_MIX",[Ff]:"ENVMAP_BLENDING_ADD"};function Uv(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Fv[r.combine]||"ENVMAP_BLENDING_NONE"}function Ov(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Iv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Nv(t),d=Uv(t),u=wv(t),f=Tv(s),m=n.createProgram(),b,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(no).join(`
`),b.length>0&&(b+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(no).join(`
`),g.length>0&&(g+=`
`)):(b=[vp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),g=[vp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?je.tonemapping_pars_fragment:"",t.toneMapping!==gn?Mv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,yv("linearToOutputTexel",t.outputColorSpace),Sv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(no).join(`
`)),a=fd(a),a=gp(a,t),a=xp(a,t),o=fd(o),o=gp(o,t),o=xp(o,t),a=bp(a),o=bp(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,b=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,g=["#define varying in",t.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=p+b+a,_=p+g+o,y=fp(n,n.VERTEX_SHADER,v),w=fp(n,n.FRAGMENT_SHADER,_);n.attachShader(m,y),n.attachShader(m,w),t.index0AttributeName!==void 0?n.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function E(A){if(r.debug.checkShaderErrors){let I=n.getProgramInfoLog(m)||"",L=n.getShaderInfoLog(y)||"",O=n.getShaderInfoLog(w)||"",P=I.trim(),U=L.trim(),B=O.trim(),H=!0,Z=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,m,y,w);else{let z=mp(n,y,"vertex"),X=mp(n,w,"fragment");ze("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+P+`
`+z+`
`+X)}else P!==""?Pe("WebGLProgram: Program Info Log:",P):(U===""||B==="")&&(Z=!1);Z&&(A.diagnostics={runnable:H,programLog:P,vertexShader:{log:U,prefix:b},fragmentShader:{log:B,prefix:g}})}n.deleteShader(y),n.deleteShader(w),x=new Ur(n,m),M=Ev(n,m)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=n.getProgramParameter(m,gv)),R},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xv++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=w,this}var Bv=0,pd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new md(e),t.set(e,i)),i}},md=class{constructor(e){this.id=Bv++,this.code=e,this.usedTimes=0}};function kv(r){return r===ps||r===Qa||r===$a}function zv(r,e,t,i,n,s){let a=new ma,o=new pd,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,M,R,A,I,L){let O=A.fog,P=I.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||U,B),Z=u[x.type],z=i.precision;x.precision!==null&&(z=i.getMaxPrecision(x.precision),z!==x.precision&&Pe("WebGLProgram.getParameters:",x.precision,"not supported, using",z,"instead."));let X=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ee=X!==void 0?X.length:0,pe=0;P.morphAttributes.position!==void 0&&(pe=1),P.morphAttributes.normal!==void 0&&(pe=2),P.morphAttributes.color!==void 0&&(pe=3);let Ae,K,me,Me;if(Z){let xe=vn[Z];Ae=xe.vertexShader,K=xe.fragmentShader}else{Ae=x.vertexShader,K=x.fragmentShader;let xe=o.getVertexShaderStage(x),mt=o.getFragmentShaderStage(x);o.update(x,xe,mt),me=xe.id,Me=mt.id}let Re=r.getRenderTarget(),he=r.state.buffers.depth.getReversed(),Oe=I.isInstancedMesh===!0,pt=I.isBatchedMesh===!0,Be=!!x.map,it=!!x.matcap,ct=!!H,qe=ct&&H.isPMREMTexture===!0,Wt=!!x.aoMap,Ot=!!x.lightMap,ti=!!x.bumpMap&&x.wireframe===!1,St=!!x.normalMap,Li=!!x.displacementMap,zt=!!x.emissiveMap,fi=!!x.metalnessMap,pi=!!x.roughnessMap,mi=x.anisotropy>0,k=x.clearcoat>0,gi=x.diffuseRoughness>0,vt=x.dispersion>0,yt=x.retroreflectivity>0,oe=x.iridescence>0,Ct=x.sheen>0,Le=x.transmission>0,ke=mi&&!!x.anisotropyMap,C=k&&!!x.clearcoatMap,S=k&&!!x.clearcoatNormalMap,G=k&&!!x.clearcoatRoughnessMap,te=gi&&!!x.diffuseRoughnessMap,$=oe&&!!x.iridescenceMap,ne=oe&&!!x.iridescenceThicknessMap,ae=Ct&&!!x.sheenColorMap,j=Ct&&!!x.sheenRoughnessMap,J=!!x.specularMap,se=!!x.specularColorMap,N=!!x.specularIntensityMap,Q=Le&&!!x.transmissionMap,Y=Le&&!!x.thicknessMap,ce=!!x.gradientMap,re=!!x.alphaMap,le=x.alphaTest>0,Ne=!!x.alphaHash,Xe=!!x.extensions,ie=gn;x.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(ie=r.toneMapping);let Ue=qe?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Ve={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:Ae,fragmentShader:K,defines:x.defines,customVertexShaderID:me,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:z,batching:pt,batchingColor:pt&&I._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&I.instanceColor!==null,instancingMorph:Oe&&I.morphTexture!==null,outputColorSpace:Re===null?r.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Be,matcap:it,envMap:ct,envMapMode:ct&&H.mapping,envMapPMREM:qe,envMapMaxLod:qe?Ue.length-1:null,envMapSize:qe?Ue[0].width:null,aoMap:Wt,lightMap:Ot,bumpMap:ti,normalMap:St,displacementMap:Li,emissiveMap:zt,normalMapObjectSpace:St&&x.normalMapType===Gf,normalMapTangentSpace:St&&x.normalMapType===to,packedNormalMap:St&&x.normalMapType===to&&kv(x.normalMap.format),metalnessMap:fi,roughnessMap:pi,anisotropy:mi,anisotropyMap:ke,clearcoat:k,clearcoatMap:C,clearcoatNormalMap:S,clearcoatRoughnessMap:G,diffuseRoughness:gi,diffuseRoughnessMap:te,dispersion:vt,retroreflection:yt,iridescence:oe,iridescenceMap:$,iridescenceThicknessMap:ne,sheen:Ct,sheenColorMap:ae,sheenRoughnessMap:j,specularMap:J,specularColorMap:se,specularIntensityMap:N,transmission:Le,transmissionMap:Q,thicknessMap:Y,gradientMap:ce,opaque:x.transparent===!1&&x.blending===us&&x.alphaToCoverage===!1,alphaMap:re,alphaTest:le,alphaHash:Ne,combine:x.combine,mapUv:Be&&f(x.map.channel),aoMapUv:Wt&&f(x.aoMap.channel),lightMapUv:Ot&&f(x.lightMap.channel),bumpMapUv:ti&&f(x.bumpMap.channel),normalMapUv:St&&f(x.normalMap.channel),displacementMapUv:Li&&f(x.displacementMap.channel),emissiveMapUv:zt&&f(x.emissiveMap.channel),metalnessMapUv:fi&&f(x.metalnessMap.channel),roughnessMapUv:pi&&f(x.roughnessMap.channel),anisotropyMapUv:ke&&f(x.anisotropyMap.channel),clearcoatMapUv:C&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:$&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:j&&f(x.sheenRoughnessMap.channel),specularMapUv:J&&f(x.specularMap.channel),specularColorMapUv:se&&f(x.specularColorMap.channel),specularIntensityMapUv:N&&f(x.specularIntensityMap.channel),transmissionMapUv:Q&&f(x.transmissionMap.channel),thicknessMapUv:Y&&f(x.thicknessMap.channel),alphaMapUv:re&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(St||mi),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&(Be||re),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&St===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:he,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:pe,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:L.filter(xe=>xe.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:ie,decodeVideoTexture:Be&&x.map.isVideoTexture===!0&&We.getTransfer(x.map.colorSpace)===at,decodeVideoTextureEmissive:zt&&x.emissiveMap.isVideoTexture===!0&&We.getTransfer(x.emissiveMap.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Di,flipSided:x.side===ai,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Xe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&x.extensions.multiDraw===!0||pt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function b(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)M.push(R),M.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(g(M,x),p(M,x),M.push(r.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function g(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function p(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let M=u[x.type],R;if(M){let A=vn[M];R=Gt.clone(A.uniforms)}else R=x.uniforms;return R}function _(x,M){let R=h.get(M);return R!==void 0?++R.usedTimes:(R=new Ov(r,M,x,n),c.push(R),h.set(M,R)),R}function y(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function E(){o.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:v,acquireProgram:_,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:E}}function Hv(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function Gv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function yp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function _p(){let r=[],e=0,t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,b,g,p){let v=r[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:b,renderOrder:u.renderOrder,z:g,group:p},r[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=m,v.materialVariant=a(u),v.groupOrder=b,v.renderOrder=u.renderOrder,v.z=g,v.group=p),e++,v}function l(u,f,m,b,g,p,v){v.reversedDepth===!0&&(g=-g);let _=o(u,f,m,b,g,p);m.transmission>0?i.push(_):m.transparent===!0?n.push(_):t.push(_)}function c(u,f,m,b,g,p){let v=o(u,f,m,b,g,p);m.transmission>0?i.unshift(v):m.transparent===!0?n.unshift(v):t.unshift(v)}function h(u,f){t.length>1&&t.sort(u||Gv),i.length>1&&i.sort(f||yp),n.length>1&&n.sort(f||yp)}function d(){for(let u=e,f=r.length;u<f;u++){let m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:d,sort:h}}function Vv(){let r=new WeakMap;function e(i,n){let s=r.get(i),a;return s===void 0?(a=new _p,r.set(i,[a])):n>=s.length?(a=new _p,s.push(a)):a=s[n],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Wv(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new be};break;case"SpotLight":t={position:new D,direction:new D,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function qv(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var Xv=0;function jv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Yv(r){let e=new Wv,t=qv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let n=new D,s=new De,a=new De;function o(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let f=0,m=0,b=0,g=0,p=0,v=0,_=0,y=0,w=0,E=0,x=0,M=0,R=0,A=0;c.sort(jv);for(let L=0,O=c.length;L<O;L++){let P=c[L],U=P.color,B=P.intensity,H=P.distance,Z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ps?Z=P.shadow.map.texture:Z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=U.r*B,d+=U.g*B,u+=U.b*B;else if(P.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(P.sh.coefficients[z],B);A++}else if(P.isSunLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let X=P.shadow,ee=t.get(P);ee.shadowIntensity=X.intensity,ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[m]=ee,i.sunShadowMap[m]=Z;let pe=X.getViewportCount();for(let Ae=0;Ae<pe;Ae++)i.sunShadowMatrix[b+Ae]=X.getMatrix(Ae),i.sunShadowCascade[b+Ae]=X._cascadeData[Ae];b+=pe,m++}i.sun[f]=z,f++}else if(P.isDirectionalLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let X=P.shadow,ee=t.get(P);ee.shadowIntensity=X.intensity,ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,i.directionalShadow[g]=ee,i.directionalShadowMap[g]=Z,i.directionalShadowMatrix[g]=P.shadow.matrix,w++}i.directional[g]=z,g++}else if(P.isSpotLight){let z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(U).multiplyScalar(B),z.distance=H,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,i.spot[v]=z;let X=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,X.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[v]=X.matrix,P.castShadow){let ee=t.get(P);ee.shadowIntensity=X.intensity,ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,i.spotShadow[v]=ee,i.spotShadowMap[v]=Z,x++}v++}else if(P.isRectAreaLight){let z=e.get(P);z.color.copy(U).multiplyScalar(B),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),i.rectArea[_]=z,_++}else if(P.isPointLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){let X=P.shadow,ee=t.get(P);ee.shadowIntensity=X.intensity,ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,ee.shadowCameraNear=X.camera.near,ee.shadowCameraFar=X.camera.far,i.pointShadow[p]=ee,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=P.shadow.matrix,E++}i.point[p]=z,p++}else if(P.isHemisphereLight){let z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(B),z.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[y]=z,y++}}_>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let I=i.hash;(I.sunLength!==f||I.directionalLength!==g||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==_||I.hemiLength!==y||I.numSunShadows!==m||I.numDirectionalShadows!==w||I.numPointShadows!==E||I.numSpotShadows!==x||I.numSpotMaps!==M||I.numLightProbes!==A)&&(i.sun.length=f,i.directional.length=g,i.spot.length=v,i.rectArea.length=_,i.point.length=p,i.hemi.length=y,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+M-R,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,I.sunLength=f,I.directionalLength=g,I.pointLength=p,I.spotLength=v,I.rectAreaLength=_,I.hemiLength=y,I.numSunShadows=m,I.numDirectionalShadows=w,I.numPointShadows=E,I.numSpotShadows=x,I.numSpotMaps=M,I.numLightProbes=A,i.version=Xv++)}function l(c,h){let d=0,u=0,f=0,m=0,b=0,g=0,p=h.matrixWorldInverse;for(let v=0,_=c.length;v<_;v++){let y=c[v];if(y.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let w=i.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(p),u++}else if(y.isSpotLight){let w=i.spot[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let w=i.rectArea[b];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),b++}else if(y.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let w=i.hemi[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function Mp(r){let e=new Yv(r),t=[],i=[],n=[];function s(d){h.camera=d,t.length=0,i.length=0,n.length=0}function a(d){d.isLightProbeGrid?n.push(d):t.push(d)}function o(d){i.push(d)}function l(){e.setup(t),n.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Kv(r){let e=new WeakMap;function t(n,s=0){let a=e.get(n),o;return a===void 0?(o=new Mp(r),e.set(n,[o])):s>=a.length?(o=new Mp(r),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Qv=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],$v=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Sp=new De,io=new D,cd=new D;function ey(r,e,t){let i=new ls,n=new ue,s=new ue,a=new ot,o=new ml,l=new gl,c={},h=t.maxTextureSize,d={[Yi]:ai,[ai]:Yi,[Di]:Di},u=new et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Jv,fragmentShader:Zv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Nt;m.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Fe(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zs;let p=this.type;this.render=function(E,x,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===vf&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zs);let R=r.getRenderTarget(),A=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),L=r.state;L.setBlending(oi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let O=p!==this.type;O&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(U=>U.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,U=E.length;P<U;P++){let B=E[P],H=B.shadow;if(H===void 0){Pe("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);let Z=H.getFrameExtents();n.multiply(Z),s.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/Z.x),n.x=s.x*Z.x,H.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/Z.y),n.y=s.y*Z.y,H.mapSize.y=s.y));let z=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=z,H.map===null||O===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Dr){if(B.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Et(n.x,n.y,{format:ps,type:gt,minFilter:ut,magFilter:ut,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new on(n.x,n.y,wi),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=kn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Tt,H.map.depthTexture.magFilter=Tt}else B.isPointLight?(H.map=new so(n.x),H.map.depthTexture=new wa(n.x,cn)):(H.map=new Et(n.x,n.y),H.map.depthTexture=new on(n.x,n.y,cn)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=kn,this.type===zs?(H.map.depthTexture.compareFunction=z?qh:Wh,H.map.depthTexture.minFilter=ut,H.map.depthTexture.magFilter=ut):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Tt,H.map.depthTexture.magFilter=Tt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==n.x||H.map.height!==n.y)&&H.map.setSize(n.x,n.y);let X=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();B.isPointLight!==!0&&H.updateMatrices(B,M);let ee=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:M.layers;for(let pe=0;pe<X;pe++){let Ae=H.getCamera(pe);if(B.isPointLight){let K=H.camera,me=H.matrix,Me=B.distance||K.far;Me!==K.far&&(K.far=Me,K.updateProjectionMatrix()),io.setFromMatrixPosition(B.matrixWorld),K.position.copy(io),cd.copy(K.position),cd.add(Qv[pe]),K.up.copy($v[pe]),K.lookAt(cd),K.updateMatrixWorld(),me.makeTranslation(-io.x,-io.y,-io.z),Sp.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Sp,K.coordinateSystem,K.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,pe),r.clear();else{pe===0&&(r.setRenderTarget(H.map),r.clear());let K=H.getViewport(pe);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),L.viewport(a)}i=H.getFrustum(pe),y(x,M,Ae,B,ee,this.type)}H.isPointLightShadow!==!0&&this.type===Dr&&v(H,M),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(R,A,I)};function v(E,x){let M=e.update(b);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Et(n.x,n.y,{format:ps,type:gt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(x,null,M,u,b,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(x,null,M,f,b,null)}function _(E,x,M,R){let A=null,I=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)A=I;else if(A=M.isPointLight===!0?l:o,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let L=A.uuid,O=x.uuid,P=c[L];P===void 0&&(P={},c[L]=P);let U=P[O];U===void 0&&(U=A.clone(),P[O]=U,x.addEventListener("dispose",w)),A=U}if(A.visible=x.visible,A.wireframe=x.wireframe,R===Dr?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:d[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=r.properties.get(A);L.light=M}return A}function y(E,x,M,R,A,I){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===Dr)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let P=e.update(E),U=E.material;if(Array.isArray(U)){let B=P.groups;for(let H=0,Z=B.length;H<Z;H++){let z=B[H],X=U[z.materialIndex];if(X&&X.visible){let ee=_(E,X,R,I);E.onBeforeShadow(r,E,x,M,P,ee,z),r.renderBufferDirect(M,null,P,ee,E,z),E.onAfterShadow(r,E,x,M,P,ee,z)}}}else if(U.visible){let B=_(E,U,R,I);E.onBeforeShadow(r,E,x,M,P,B,null),r.renderBufferDirect(M,null,P,B,E,null),E.onAfterShadow(r,E,x,M,P,B,null)}}let O=E.children;for(let P=0,U=O.length;P<U;P++)y(O[P],x,M,R,A,I)}function w(E){E.target.removeEventListener("dispose",w);for(let M in c){let R=c[M],A=E.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function ty(r,e){function t(){let N=!1,Q=new ot,Y=null,ce=new ot(0,0,0,0);return{setMask:function(re){Y!==re&&!N&&(r.colorMask(re,re,re,re),Y=re)},setLocked:function(re){N=re},setClear:function(re,le,Ne,Xe,ie){ie===!0&&(re*=Xe,le*=Xe,Ne*=Xe),Q.set(re,le,Ne,Xe),ce.equals(Q)===!1&&(r.clearColor(re,le,Ne,Xe),ce.copy(Q))},reset:function(){N=!1,Y=null,ce.set(-1,0,0,0)}}}function i(){let N=!1,Q=!1,Y=null,ce=null,re=null;return{setReversed:function(le){if(Q!==le){let Ne=e.get("EXT_clip_control");le?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),Q=le;let Xe=re;re=null,this.setClear(Xe)}},getReversed:function(){return Q},setTest:function(le){le?he(r.DEPTH_TEST):Oe(r.DEPTH_TEST)},setMask:function(le){Y!==le&&!N&&(r.depthMask(le),Y=le)},setFunc:function(le){if(Q&&(le=Qf[le]),ce!==le){switch(le){case il:r.depthFunc(r.NEVER);break;case nl:r.depthFunc(r.ALWAYS);break;case sl:r.depthFunc(r.LESS);break;case xr:r.depthFunc(r.LEQUAL);break;case rl:r.depthFunc(r.EQUAL);break;case al:r.depthFunc(r.GEQUAL);break;case ol:r.depthFunc(r.GREATER);break;case ll:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ce=le}},setLocked:function(le){N=le},setClear:function(le){re!==le&&(re=le,Q&&(le=1-le),r.clearDepth(le))},reset:function(){N=!1,Y=null,ce=null,re=null,Q=!1}}}function n(){let N=!1,Q=null,Y=null,ce=null,re=null,le=null,Ne=null,Xe=null,ie=null;return{setTest:function(Ue){N||(Ue?he(r.STENCIL_TEST):Oe(r.STENCIL_TEST))},setMask:function(Ue){Q!==Ue&&!N&&(r.stencilMask(Ue),Q=Ue)},setFunc:function(Ue,Ve,xe){(Y!==Ue||ce!==Ve||re!==xe)&&(r.stencilFunc(Ue,Ve,xe),Y=Ue,ce=Ve,re=xe)},setOp:function(Ue,Ve,xe){(le!==Ue||Ne!==Ve||Xe!==xe)&&(r.stencilOp(Ue,Ve,xe),le=Ue,Ne=Ve,Xe=xe)},setLocked:function(Ue){N=Ue},setClear:function(Ue){ie!==Ue&&(r.clearStencil(Ue),ie=Ue)},reset:function(){N=!1,Q=null,Y=null,ce=null,re=null,le=null,Ne=null,Xe=null,ie=null}}}let s=new t,a=new i,o=new n,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],b=null,g=!1,p=null,v=null,_=null,y=null,w=null,E=null,x=null,M=new be(0,0,0),R=0,A=!1,I=null,L=null,O=null,P=null,U=null,B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Z=0,z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=Z>=1):z.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=Z>=2);let X=null,ee={},pe=r.getParameter(r.SCISSOR_BOX),Ae=r.getParameter(r.VIEWPORT),K=new ot().fromArray(pe),me=new ot().fromArray(Ae);function Me(N,Q,Y,ce){let re=new Uint8Array(4),le=r.createTexture();r.bindTexture(N,le),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ne=0;Ne<Y;Ne++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(Q,0,r.RGBA,1,1,ce,0,r.RGBA,r.UNSIGNED_BYTE,re):r.texImage2D(Q+Ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,re);return le}let Re={};Re[r.TEXTURE_2D]=Me(r.TEXTURE_2D,r.TEXTURE_2D,1),Re[r.TEXTURE_CUBE_MAP]=Me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[r.TEXTURE_2D_ARRAY]=Me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Re[r.TEXTURE_3D]=Me(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(r.DEPTH_TEST),a.setFunc(xr),ti(!1),St(Ph),he(r.CULL_FACE),Wt(oi);function he(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function Oe(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function pt(N,Q){return u[N]!==Q?(r.bindFramebuffer(N,Q),u[N]=Q,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Q),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Q),!0):!1}function Be(N,Q){let Y=m,ce=!1;if(N){Y=f.get(Q),Y===void 0&&(Y=[],f.set(Q,Y));let re=N.textures;if(Y.length!==re.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let le=0,Ne=re.length;le<Ne;le++)Y[le]=r.COLOR_ATTACHMENT0+le;Y.length=re.length,ce=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,ce=!0);ce&&r.drawBuffers(Y)}function it(N){return b!==N?(r.useProgram(N),b=N,!0):!1}let ct={[Ki]:r.FUNC_ADD,[yf]:r.FUNC_SUBTRACT,[_f]:r.FUNC_REVERSE_SUBTRACT};ct[Mf]=r.MIN,ct[Sf]=r.MAX;let qe={[Hs]:r.ZERO,[wf]:r.ONE,[Tf]:r.SRC_COLOR,[Lh]:r.SRC_ALPHA,[Cf]:r.SRC_ALPHA_SATURATE,[Ha]:r.DST_COLOR,[za]:r.DST_ALPHA,[Ef]:r.ONE_MINUS_SRC_COLOR,[Nh]:r.ONE_MINUS_SRC_ALPHA,[Rf]:r.ONE_MINUS_DST_COLOR,[Af]:r.ONE_MINUS_DST_ALPHA,[Pf]:r.CONSTANT_COLOR,[Df]:r.ONE_MINUS_CONSTANT_COLOR,[If]:r.CONSTANT_ALPHA,[Lf]:r.ONE_MINUS_CONSTANT_ALPHA};function Wt(N,Q,Y,ce,re,le,Ne,Xe,ie,Ue){if(N===oi){g===!0&&(Oe(r.BLEND),g=!1);return}if(g===!1&&(he(r.BLEND),g=!0),N!==Al){if(N!==p||Ue!==A){if((v!==Ki||w!==Ki)&&(r.blendEquation(r.FUNC_ADD),v=Ki,w=Ki),Ue)switch(N){case us:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ki:r.blendFunc(r.ONE,r.ONE);break;case Dh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ih:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ze("WebGLState: Invalid blending: ",N);break}else switch(N){case us:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ki:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Dh:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ih:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",N);break}_=null,y=null,E=null,x=null,M.set(0,0,0),R=0,p=N,A=Ue}return}re=re||Q,le=le||Y,Ne=Ne||ce,(Q!==v||re!==w)&&(r.blendEquationSeparate(ct[Q],ct[re]),v=Q,w=re),(Y!==_||ce!==y||le!==E||Ne!==x)&&(r.blendFuncSeparate(qe[Y],qe[ce],qe[le],qe[Ne]),_=Y,y=ce,E=le,x=Ne),(Xe.equals(M)===!1||ie!==R)&&(r.blendColor(Xe.r,Xe.g,Xe.b,ie),M.copy(Xe),R=ie),p=N,A=!1}function Ot(N,Q){N.side===Di?Oe(r.CULL_FACE):he(r.CULL_FACE);let Y=N.side===ai;Q&&(Y=!Y),ti(Y),N.blending===us&&N.transparent===!1?Wt(oi):Wt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);let ce=N.stencilWrite;o.setTest(ce),ce&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),zt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):Oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function ti(N){I!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),I=N)}function St(N){N!==xf?(he(r.CULL_FACE),N!==L&&(N===Ph?r.cullFace(r.BACK):N===bf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Oe(r.CULL_FACE),L=N}function Li(N){N!==O&&(H&&r.lineWidth(N),O=N)}function zt(N,Q,Y){N?(he(r.POLYGON_OFFSET_FILL),(P!==Q||U!==Y)&&(P=Q,U=Y,a.getReversed()&&(Q=-Q,Y=-Y),r.polygonOffset(Q,Y))):Oe(r.POLYGON_OFFSET_FILL)}function fi(N){N?he(r.SCISSOR_TEST):Oe(r.SCISSOR_TEST)}function pi(N){N===void 0&&(N=r.TEXTURE0+B-1),X!==N&&(r.activeTexture(N),X=N)}function mi(N,Q,Y){Y===void 0&&(X===null?Y=r.TEXTURE0+B-1:Y=X);let ce=ee[Y];ce===void 0&&(ce={type:void 0,texture:void 0},ee[Y]=ce),(ce.type!==N||ce.texture!==Q)&&(X!==Y&&(r.activeTexture(Y),X=Y),r.bindTexture(N,Q||Re[N]),ce.type=N,ce.texture=Q)}function k(){let N=ee[X];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function gi(){try{r.compressedTexImage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function vt(){try{r.compressedTexImage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function yt(){try{r.texSubImage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function oe(){try{r.texSubImage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function Ct(){try{r.compressedTexSubImage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function Le(){try{r.compressedTexSubImage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function ke(){try{r.texStorage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function C(){try{r.texStorage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function S(){try{r.texImage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function G(){try{r.texImage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function te(N){return d[N]!==void 0?d[N]:r.getParameter(N)}function $(N,Q){d[N]!==Q&&(r.pixelStorei(N,Q),d[N]=Q)}function ne(N){K.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),K.copy(N))}function ae(N){me.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),me.copy(N))}function j(N,Q){let Y=c.get(Q);Y===void 0&&(Y=new WeakMap,c.set(Q,Y));let ce=Y.get(N);ce===void 0&&(ce=r.getUniformBlockIndex(Q,N.name),r.uniformBlockBinding(Q,ce,ce),Y.set(N,ce))}function J(N,Q,Y){let re=c.get(Q).get(N);l[re]!==Y&&(r.bindBufferBase(r.UNIFORM_BUFFER,re,Y),l[re]=Y)}function se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},X=null,ee={},u={},l={},f=new WeakMap,m=[],b=null,g=!1,p=null,v=null,_=null,y=null,w=null,E=null,x=null,M=new be(0,0,0),R=0,A=!1,I=null,L=null,O=null,P=null,U=null,K.set(0,0,r.canvas.width,r.canvas.height),me.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:he,disable:Oe,bindFramebuffer:pt,drawBuffers:Be,useProgram:it,setBlending:Wt,setMaterial:Ot,setFlipSided:ti,setCullFace:St,setLineWidth:Li,setPolygonOffset:zt,setScissorTest:fi,activeTexture:pi,bindTexture:mi,unbindTexture:k,compressedTexImage2D:gi,compressedTexImage3D:vt,texImage2D:S,texImage3D:G,pixelStorei:$,getParameter:te,updateUBOMapping:j,uniformBlockBinding:J,texStorage2D:ke,texStorage3D:C,texSubImage2D:yt,texSubImage3D:oe,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Le,scissor:ne,viewport:ae,reset:se}}function iy(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,b=new FinalizationRegistry(C=>m.delete(C)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,S){return g?new OffscreenCanvas(C,S):yr("canvas")}function v(C,S,G){let te=1,$=ke(C);if(($.width>G||$.height>G)&&(te=G/Math.max($.width,$.height)),te<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ne=Math.floor(te*$.width),ae=Math.floor(te*$.height);u===void 0&&(u=p(ne,ae));let j=S?p(ne,ae):u;return j.width=ne,j.height=ae,j.getContext("2d").drawImage(C,0,0,ne,ae),Pe("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ne+"x"+ae+")."),j}else return"data"in C&&Pe("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function _(C){return C.generateMipmaps}function y(C){r.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(C,S,G,te,$,ne=!1){if(C!==null){if(r[C]!==void 0)return r[C];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ae;te&&(ae=e.get("EXT_texture_norm16"),ae||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=S;if(S===r.RED&&(G===r.FLOAT&&(j=r.R32F),G===r.HALF_FLOAT&&(j=r.R16F),G===r.UNSIGNED_BYTE&&(j=r.R8),G===r.UNSIGNED_SHORT&&ae&&(j=ae.R16_EXT),G===r.SHORT&&ae&&(j=ae.R16_SNORM_EXT)),S===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.R8UI),G===r.UNSIGNED_SHORT&&(j=r.R16UI),G===r.UNSIGNED_INT&&(j=r.R32UI),G===r.BYTE&&(j=r.R8I),G===r.SHORT&&(j=r.R16I),G===r.INT&&(j=r.R32I)),S===r.RG&&(G===r.FLOAT&&(j=r.RG32F),G===r.HALF_FLOAT&&(j=r.RG16F),G===r.UNSIGNED_BYTE&&(j=r.RG8),G===r.UNSIGNED_SHORT&&ae&&(j=ae.RG16_EXT),G===r.SHORT&&ae&&(j=ae.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RG8UI),G===r.UNSIGNED_SHORT&&(j=r.RG16UI),G===r.UNSIGNED_INT&&(j=r.RG32UI),G===r.BYTE&&(j=r.RG8I),G===r.SHORT&&(j=r.RG16I),G===r.INT&&(j=r.RG32I)),S===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RGB8UI),G===r.UNSIGNED_SHORT&&(j=r.RGB16UI),G===r.UNSIGNED_INT&&(j=r.RGB32UI),G===r.BYTE&&(j=r.RGB8I),G===r.SHORT&&(j=r.RGB16I),G===r.INT&&(j=r.RGB32I)),S===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),G===r.UNSIGNED_INT&&(j=r.RGBA32UI),G===r.BYTE&&(j=r.RGBA8I),G===r.SHORT&&(j=r.RGBA16I),G===r.INT&&(j=r.RGBA32I)),S===r.RGB&&(G===r.UNSIGNED_SHORT&&ae&&(j=ae.RGB16_EXT),G===r.SHORT&&ae&&(j=ae.RGB16_SNORM_EXT),G===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(j=r.R11F_G11F_B10F)),S===r.RGBA){let J=ne?ua:We.getTransfer($);G===r.FLOAT&&(j=r.RGBA32F),G===r.HALF_FLOAT&&(j=r.RGBA16F),G===r.UNSIGNED_BYTE&&(j=J===at?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT&&ae&&(j=ae.RGBA16_EXT),G===r.SHORT&&ae&&(j=ae.RGBA16_SNORM_EXT),G===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(C,S){let G;return C?S===null||S===cn||S===Yn?G=r.DEPTH24_STENCIL8:S===wi?G=r.DEPTH32F_STENCIL8:S===Nr&&(G=r.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===cn||S===Yn?G=r.DEPTH_COMPONENT24:S===wi?G=r.DEPTH_COMPONENT32F:S===Nr&&(G=r.DEPTH_COMPONENT16),G}function M(C,S){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==Tt&&C.minFilter!==ut?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function R(C){let S=new WeakRef(C);i.get(C).__ref=S,m.add(S),b.register(C,S,S)}function A(C){let S=i.get(C).__ref;S!==void 0&&(m.delete(S),b.unregister(S))}function I(C){O(C.target)}function L(C){P(C.target)}function O(C){C.removeEventListener("dispose",I),A(C),B(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function P(C){C.removeEventListener("dispose",L),A(C),Z(C)}function U(){for(let C of m){let S=C.deref();S!==void 0&&(S.isRenderTarget===!0?P(S):O(S))}m.clear(),d.clear()}function B(C){let S=i.get(C);if(S.__webglInit===void 0)return;let G=C.source,te=f.get(G);if(te){let $=te[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&H(C),Object.keys(te).length===0&&f.delete(G)}i.remove(C)}function H(C){let S=i.get(C);r.deleteTexture(S.__webglTexture);let G=C.source,te=f.get(G);delete te[S.__cacheKey],a.memory.textures--}function Z(C){let S=i.get(C);S.__depthDisposeCallback&&S.__depthDisposeCallback();let G=C.depthTexture;if(G&&G.renderTarget===C&&O(G),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let ne=0;ne<S.__webglFramebuffer[$].length;ne++)r.deleteFramebuffer(S.__webglFramebuffer[$][ne]);else r.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)r.deleteFramebuffer(S.__webglFramebuffer[$]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let te=C.textures;for(let $=0,ne=te.length;$<ne;$++){let ae=i.get(te[$]);ae.__webglTexture&&(r.deleteTexture(ae.__webglTexture),a.memory.textures--),i.remove(te[$])}i.remove(C)}let z=0;function X(){z=0}function ee(){return z}function pe(C){z=C}function Ae(){let C=z;return C>=n.maxTextures&&Pe("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+n.maxTextures),z+=1,C}function K(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.mipmapsAutoUpdate),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function me(C,S){let G=i.get(C);if(C.isVideoTexture&&Ct(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){let te=C.image;if(te===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ot(G,C,S);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+S)}function Me(C,S){let G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){Ot(G,C,S);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+S)}function Re(C,S){let G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){Ot(G,C,S);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+S)}function he(C,S){let G=i.get(C);if(C.version>0&&G.__version!==C.version){ti(G,C,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+S)}let Oe={[Yt]:r.REPEAT,[Ni]:r.CLAMP_TO_EDGE,[br]:r.MIRRORED_REPEAT},pt={[Tt]:r.NEAREST,[Cl]:r.NEAREST_MIPMAP_NEAREST,[Ws]:r.NEAREST_MIPMAP_LINEAR,[ut]:r.LINEAR,[Lr]:r.LINEAR_MIPMAP_NEAREST,[Ii]:r.LINEAR_MIPMAP_LINEAR},Be={[Wf]:r.NEVER,[Xh]:r.ALWAYS,[qf]:r.LESS,[Wh]:r.LEQUAL,[Xf]:r.EQUAL,[qh]:r.GEQUAL,[jf]:r.GREATER,[Yf]:r.NOTEQUAL};function it(C,S){if(S.type===wi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ut||S.magFilter===Lr||S.magFilter===Ws||S.magFilter===Ii||S.minFilter===ut||S.minFilter===Lr||S.minFilter===Ws||S.minFilter===Ii)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Oe[S.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Oe[S.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Oe[S.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,pt[S.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,pt[S.minFilter]),S.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Be[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Tt||S.minFilter!==Ws&&S.minFilter!==Ii||S.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ct(C,S){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",I),R(S));let te=S.source,$=f.get(te);$===void 0&&($={},f.set(te,$));let ne=K(S);if(ne!==C.__cacheKey){$[ne]===void 0&&($[ne]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),$[ne].usedTimes++;let ae=$[C.__cacheKey];ae!==void 0&&($[C.__cacheKey].usedTimes--,ae.usedTimes===0&&H(S)),C.__cacheKey=ne,C.__webglTexture=$[ne].texture}return G}function qe(C,S,G){return Math.floor(Math.floor(C/G)/S)}function Wt(C,S,G,te){let ne=C.updateRanges;if(ne.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,G,te,S.data);else{ne.sort((N,Q)=>N.start-Q.start);let ae=0;for(let N=1;N<ne.length;N++){let Q=ne[ae],Y=ne[N],ce=Q.start+Q.count,re=qe(Y.start,S.width,4),le=qe(Q.start,S.width,4);Y.start<=ce+1&&re===le&&qe(Y.start+Y.count-1,S.width,4)===re?Q.count=Math.max(Q.count,Y.start+Y.count-Q.start):(++ae,ne[ae]=Y)}ne.length=ae+1;let j=t.getParameter(r.UNPACK_ROW_LENGTH),J=t.getParameter(r.UNPACK_SKIP_PIXELS),se=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let N=0,Q=ne.length;N<Q;N++){let Y=ne[N],ce=Math.floor(Y.start/4),re=Math.ceil(Y.count/4),le=ce%S.width,Ne=Math.floor(ce/S.width),Xe=re,ie=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,le),t.pixelStorei(r.UNPACK_SKIP_ROWS,Ne),t.texSubImage2D(r.TEXTURE_2D,0,le,Ne,Xe,ie,G,te,S.data)}C.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,j),t.pixelStorei(r.UNPACK_SKIP_PIXELS,J),t.pixelStorei(r.UNPACK_SKIP_ROWS,se)}}function Ot(C,S,G){let te=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=r.TEXTURE_3D);let $=ct(C,S),ne=S.source;t.bindTexture(te,C.__webglTexture,r.TEXTURE0+G);let ae=i.get(ne);if(ne.version!==ae.__version||$===!0){if(t.activeTexture(r.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ie=We.getPrimaries(We.workingColorSpace),Ue=S.colorSpace===dn?null:We.getPrimaries(S.colorSpace),Ve=S.colorSpace===dn||ie===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let J=v(S.image,!1,n.maxTextureSize);J=Le(S,J);let se=s.convert(S.format,S.colorSpace),N=s.convert(S.type),Q=E(S.internalFormat,se,N,S.normalized,S.colorSpace,S.isVideoTexture);it(te,S);let Y,ce=S.mipmaps,re=S.isVideoTexture!==!0,le=ae.__version===void 0||$===!0,Ne=ne.dataReady,Xe=M(S,J);if(S.isDepthTexture)Q=x(S.format===hn,S.type),le&&(re?t.texStorage2D(r.TEXTURE_2D,1,Q,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,Q,J.width,J.height,0,se,N,null));else if(S.isDataTexture)if(ce.length>0){re&&le&&t.texStorage2D(r.TEXTURE_2D,Xe,Q,ce[0].width,ce[0].height);for(let ie=0,Ue=ce.length;ie<Ue;ie++)Y=ce[ie],re?Ne&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,Y.width,Y.height,se,N,Y.data):t.texImage2D(r.TEXTURE_2D,ie,Q,Y.width,Y.height,0,se,N,Y.data);S.generateMipmaps=!1}else re?(le&&t.texStorage2D(r.TEXTURE_2D,Xe,Q,J.width,J.height),Ne&&Wt(S,J,se,N)):t.texImage2D(r.TEXTURE_2D,0,Q,J.width,J.height,0,se,N,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){re&&le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Xe,Q,ce[0].width,ce[0].height,J.depth);for(let ie=0,Ue=ce.length;ie<Ue;ie++)if(Y=ce[ie],S.format!==Ti)if(se!==null)if(re){if(Ne)if(S.layerUpdates.size>0){let Ve=id(Y.width,Y.height,S.format,S.type);for(let xe of S.layerUpdates){let mt=Y.data.subarray(xe*Ve/Y.data.BYTES_PER_ELEMENT,(xe+1)*Ve/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,xe,Y.width,Y.height,1,se,mt)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,Y.width,Y.height,J.depth,se,Y.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ie,Q,Y.width,Y.height,J.depth,0,Y.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?Ne&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,Y.width,Y.height,J.depth,se,N,Y.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ie,Q,Y.width,Y.height,J.depth,0,se,N,Y.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{re&&le&&t.texStorage2D(r.TEXTURE_2D,Xe,Q,ce[0].width,ce[0].height);for(let ie=0,Ue=ce.length;ie<Ue;ie++)Y=ce[ie],S.format!==Ti?se!==null?re?Ne&&t.compressedTexSubImage2D(r.TEXTURE_2D,ie,0,0,Y.width,Y.height,se,Y.data):t.compressedTexImage2D(r.TEXTURE_2D,ie,Q,Y.width,Y.height,0,Y.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?Ne&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,Y.width,Y.height,se,N,Y.data):t.texImage2D(r.TEXTURE_2D,ie,Q,Y.width,Y.height,0,se,N,Y.data)}else if(S.isDataArrayTexture)if(re){if(le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Xe,Q,J.width,J.height,J.depth),Ne)if(S.layerUpdates.size>0){let ie=id(J.width,J.height,S.format,S.type);for(let Ue of S.layerUpdates){let Ve=J.data.subarray(Ue*ie/J.data.BYTES_PER_ELEMENT,(Ue+1)*ie/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ue,J.width,J.height,1,se,N,Ve)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,se,N,J.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Q,J.width,J.height,J.depth,0,se,N,J.data);else if(S.isData3DTexture)re?(le&&t.texStorage3D(r.TEXTURE_3D,Xe,Q,J.width,J.height,J.depth),Ne&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,se,N,J.data)):t.texImage3D(r.TEXTURE_3D,0,Q,J.width,J.height,J.depth,0,se,N,J.data);else if(S.isFramebufferTexture){if(le)if(re)t.texStorage2D(r.TEXTURE_2D,Xe,Q,J.width,J.height);else{let ie=J.width,Ue=J.height;for(let Ve=0;Ve<Xe;Ve++)t.texImage2D(r.TEXTURE_2D,Ve,Q,ie,Ue,0,se,N,null),ie>>=1,Ue>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){let ie=r.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),J.parentNode!==ie){ie.appendChild(J),d.add(S),ie.onpaint=Ue=>{let Ve=Ue.changedElements;for(let xe of d)Ve.includes(xe.image)&&(xe.needsUpdate=!0)},ie.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,J);else{let Ve=r.RGBA,xe=r.RGBA,mt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ve,xe,mt,J)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ce.length>0){if(re&&le){let ie=ke(ce[0]);t.texStorage2D(r.TEXTURE_2D,Xe,Q,ie.width,ie.height)}for(let ie=0,Ue=ce.length;ie<Ue;ie++)Y=ce[ie],re?Ne&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,se,N,Y):t.texImage2D(r.TEXTURE_2D,ie,Q,se,N,Y);S.generateMipmaps=!1}else if(re){if(le){let ie=ke(J);t.texStorage2D(r.TEXTURE_2D,Xe,Q,ie.width,ie.height)}Ne&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se,N,J)}else t.texImage2D(r.TEXTURE_2D,0,Q,se,N,J);_(S)&&S.mipmapsAutoUpdate===!0&&y(te),ae.__version=ne.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ti(C,S,G){if(S.image.length!==6)return;let te=ct(C,S),$=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+G);let ne=i.get($);if($.version!==ne.__version||te===!0){t.activeTexture(r.TEXTURE0+G);let ae=We.getPrimaries(We.workingColorSpace),j=S.colorSpace===dn?null:We.getPrimaries(S.colorSpace),J=S.colorSpace===dn||ae===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let se=S.isCompressedTexture||S.image[0].isCompressedTexture,N=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let xe=0;xe<6;xe++)!se&&!N?Q[xe]=v(S.image[xe],!0,n.maxCubemapSize):Q[xe]=N?S.image[xe].image:S.image[xe],Q[xe]=Le(S,Q[xe]);let Y=Q[0],ce=s.convert(S.format,S.colorSpace),re=s.convert(S.type),le=E(S.internalFormat,ce,re,S.normalized,S.colorSpace),Ne=S.isVideoTexture!==!0,Xe=ne.__version===void 0||te===!0,ie=$.dataReady,Ue=M(S,Y);it(r.TEXTURE_CUBE_MAP,S);let Ve;if(S.isDepthTexture){if(le=x(S.format===hn,S.type),Xe)if(Ne)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,le,Y.width,Y.height);else for(let xe=0;xe<6;xe++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,le,Y.width,Y.height,0,ce,re,null)}else if(se){Ne&&Xe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,le,Y.width,Y.height);for(let xe=0;xe<6;xe++){Ve=Q[xe].mipmaps;for(let mt=0;mt<Ve.length;mt++){let ii=Ve[mt];S.format!==Ti?ce!==null?Ne?ie&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,mt,0,0,ii.width,ii.height,ce,ii.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,mt,le,ii.width,ii.height,0,ii.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,mt,0,0,ii.width,ii.height,ce,re,ii.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,mt,le,ii.width,ii.height,0,ce,re,ii.data)}}}else{if(Ve=S.mipmaps,Ne&&Xe){Ve.length>0&&Ue++;let xe=ke(Q[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,le,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(N){Ne?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Q[xe].width,Q[xe].height,ce,re,Q[xe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,le,Q[xe].width,Q[xe].height,0,ce,re,Q[xe].data);for(let mt=0;mt<Ve.length;mt++){let Zn=Ve[mt].image[xe].image;Ne?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,mt+1,0,0,Zn.width,Zn.height,ce,re,Zn.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,mt+1,le,Zn.width,Zn.height,0,ce,re,Zn.data)}}else{Ne?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ce,re,Q[xe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,le,ce,re,Q[xe]);for(let mt=0;mt<Ve.length;mt++){let ii=Ve[mt];Ne?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,mt+1,0,0,ce,re,ii.image[xe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,mt+1,le,ce,re,ii.image[xe])}}}_(S)&&S.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),ne.__version=$.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function St(C,S,G,te,$,ne){let ae=s.convert(G.format,G.colorSpace),j=s.convert(G.type),J=E(G.internalFormat,ae,j,G.normalized,G.colorSpace),se=i.get(S),N=i.get(G);if(N.__renderTarget=S,!se.__hasExternalTextures){let Q=Math.max(1,S.width>>ne),Y=Math.max(1,S.height>>ne);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,ne,J,Q,Y,S.depth,0,ae,j,null):t.texImage2D($,ne,J,Q,Y,0,ae,j,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),oe(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,$,N.__webglTexture,0,yt(S)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,$,N.__webglTexture,ne),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Li(C,S,G){if(r.bindRenderbuffer(r.RENDERBUFFER,C),S.depthBuffer){let te=S.depthTexture,$=te&&te.isDepthTexture?te.type:null,ne=x(S.stencilBuffer,$),ae=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;oe(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,yt(S),ne,S.width,S.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,yt(S),ne,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ne,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,C)}else{let te=S.textures;for(let $=0;$<te.length;$++){let ne=te[$],ae=s.convert(ne.format,ne.colorSpace),j=s.convert(ne.type),J=E(ne.internalFormat,ae,j,ne.normalized,ne.colorSpace);oe(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,yt(S),J,S.width,S.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,yt(S),J,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,J,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function zt(C,S,G){let te=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=i.get(S.depthTexture);$.__renderTarget=S;let ne=te?S.depthTexture.image[0]:S.depthTexture.image;(!$.__webglTexture||ne.width!==S.width||ne.height!==S.height)&&(ne.width=S.width,ne.height=S.height,S.depthTexture.needsUpdate=!0),te?he(S.depthTexture,0):me(S.depthTexture,0);let ae=$.__webglTexture,j=yt(S),J=te?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,se=S.depthTexture.format===hn?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===kn)oe(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,J,ae,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,se,J,ae,0);else if(S.depthTexture.format===hn)oe(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,J,ae,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,se,J,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fi(C){let S=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let te=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),te){let $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,te.removeEventListener("dispose",$)};te.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=te}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let te=0;te<6;te++)zt(S.__webglFramebuffer[te],C,te);else C.texture.mipmaps.length>0?zt(S.__webglFramebuffer[0],C,0):zt(S.__webglFramebuffer,C,0);else if(G){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]===void 0)S.__webglDepthbuffer[te]=r.createRenderbuffer(),Li(S.__webglDepthbuffer[te],C,!1);else{let $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer[te];r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ne)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Li(S.__webglDepthbuffer,C,!1);else{let $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ne)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function pi(C,S,G){let te=i.get(C);S!==void 0&&St(te.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&fi(C)}function mi(C){let S=C.texture,G=i.get(C),te=i.get(S);C.addEventListener("dispose",L),R(C);let $=C.textures,ne=C.isWebGLCubeRenderTarget===!0,ae=$.length>1;if(ae||(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=S.version,a.memory.textures++),ne){G.__webglFramebuffer=[];for(let j=0;j<6;j++)if(S.mipmaps.length>0){G.__webglFramebuffer[j]=[];for(let J=0;J<S.mipmaps.length;J++)G.__webglFramebuffer[j][J]=r.createFramebuffer()}else G.__webglFramebuffer[j]=r.createFramebuffer()}else{if(S.mipmaps.length>0){G.__webglFramebuffer=[];for(let j=0;j<S.mipmaps.length;j++)G.__webglFramebuffer[j]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(ae)for(let j=0,J=$.length;j<J;j++){let se=i.get($[j]);se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&oe(C)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let j=0;j<$.length;j++){let J=$[j];G.__webglColorRenderbuffer[j]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[j]);let se=s.convert(J.format,J.colorSpace),N=s.convert(J.type),Q=E(J.internalFormat,se,N,J.normalized,J.colorSpace,C.isXRRenderTarget===!0),Y=yt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Y,Q,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+j,r.RENDERBUFFER,G.__webglColorRenderbuffer[j])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Li(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ne){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),it(r.TEXTURE_CUBE_MAP,S);for(let j=0;j<6;j++)if(S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)St(G.__webglFramebuffer[j][J],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,J);else St(G.__webglFramebuffer[j],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);_(S)?y(r.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(ae){for(let j=0,J=$.length;j<J;j++){let se=$[j],N=i.get(se),Q=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Q,N.__webglTexture),it(Q,se),St(G.__webglFramebuffer,C,se,r.COLOR_ATTACHMENT0+j,Q,0),_(se)&&y(Q)}t.unbindTexture()}else{let j=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(j,te.__webglTexture),it(j,S),S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)St(G.__webglFramebuffer[J],C,S,r.COLOR_ATTACHMENT0,j,J);else St(G.__webglFramebuffer,C,S,r.COLOR_ATTACHMENT0,j,0);_(S)?y(j):S.mipmaps.length>0&&r.texParameteri(j,r.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&fi(C)}function k(C){let S=C.textures;for(let G=0,te=S.length;G<te;G++){let $=S[G];if(_($)&&$.mipmapsAutoUpdate===!0){let ne=w(C),ae=i.get($).__webglTexture;t.bindTexture(ne,ae),y(ne),t.unbindTexture()}}}let gi=[];function vt(C){if(C.samples>0){if(oe(C)===!1){let S=C.textures,G=C.width,te=C.height,$=r.COLOR_BUFFER_BIT,ne=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=i.get(C),j=S.length>1;if(j)for(let se=0;se<S.length;se++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let se=0;se<S.length;se++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),j){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[se]);let N=i.get(S[se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,N,0)}r.blitFramebuffer(0,0,G,te,0,0,G,te,$,r.NEAREST),l===!0&&(gi.length=0,gi.push(r.COLOR_ATTACHMENT0+se),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&gi.push(ne),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,gi))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),j)for(let se=0;se<S.length;se++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,ae.__webglColorRenderbuffer[se]);let N=i.get(S[se]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,N,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let S=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function yt(C){return Math.min(n.maxSamples,C.samples)}function oe(C){let S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ct(C){let S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Le(C,S){let G=C.colorSpace,te=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Kt&&G!==dn&&(We.getTransfer(G)===at?(te!==Ti||$!==Si)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",G)),S}function ke(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Ae,this.resetTextureUnits=X,this.getTextureUnits=ee,this.setTextureUnits=pe,this.setTexture2D=me,this.setTexture2DArray=Me,this.setTexture3D=Re,this.setTextureCube=he,this.rebindTextures=pi,this.setupRenderTarget=mi,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=fi,this.setupFrameBufferTexture=St,this.useMultisampledRTT=oe,this.dispose=U}function ny(r,e){function t(i,n=dn){let s,a=We.getTransfer(n);if(i===Si)return r.UNSIGNED_BYTE;if(i===Dl)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Il)return r.UNSIGNED_SHORT_5_5_5_1;if(i===kh)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===zh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Oh)return r.BYTE;if(i===Bh)return r.SHORT;if(i===Nr)return r.UNSIGNED_SHORT;if(i===Pl)return r.INT;if(i===cn)return r.UNSIGNED_INT;if(i===wi)return r.FLOAT;if(i===gt)return r.HALF_FLOAT;if(i===Hh)return r.ALPHA;if(i===Gh)return r.RGB;if(i===Ti)return r.RGBA;if(i===kn)return r.DEPTH_COMPONENT;if(i===hn)return r.DEPTH_STENCIL;if(i===Ll)return r.RED;if(i===Nl)return r.RED_INTEGER;if(i===ps)return r.RG;if(i===Fl)return r.RG_INTEGER;if(i===Ul)return r.RGBA_INTEGER;if(i===Ya||i===Ka||i===Ja||i===Za)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ya)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ya)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Za)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ol||i===Bl||i===kl||i===zl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ol)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hl||i===Gl||i===Vl||i===Wl||i===ql||i===Qa||i===Xl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Hl||i===Gl)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Wl)return s.COMPRESSED_R11_EAC;if(i===ql)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Qa)return s.COMPRESSED_RG11_EAC;if(i===Xl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jl||i===Yl||i===Kl||i===Jl||i===Zl||i===Ql||i===$l||i===ec||i===tc||i===ic||i===nc||i===sc||i===rc||i===ac)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===jl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ql)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$l)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ec)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ic)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ac)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oc||i===lc||i===cc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===oc)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hc||i===dc||i===$a||i===uc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===hc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$a)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Yn?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}var sy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ry=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,gd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ta(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new et({vertexShader:sy,fragmentShader:ry,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new Oi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xd=class extends rn{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,b=typeof XRWebGLBinding<"u",g=new gd,p={},v=t.getContextAttributes(),_=null,y=null,w=[],E=[],x=new ue,M=null,R=null,A=new Ht;A.viewport=new ot;let I=new Ht;I.viewport=new ot;let L=[A,I],O=new Sl,P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let me=w[K];return me===void 0&&(me=new Sr,w[K]=me),me.getTargetRaySpace()},this.getControllerGrip=function(K){let me=w[K];return me===void 0&&(me=new Sr,w[K]=me),me.getGripSpace()},this.getHand=function(K){let me=w[K];return me===void 0&&(me=new Sr,w[K]=me),me.getHandSpace()};function B(K){let me=E.indexOf(K.inputSource);if(me===-1)return;let Me=w[me];Me!==void 0&&(Me.update(K.inputSource,K.frame,c||a),Me.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",Z);for(let K=0;K<w.length;K++){let me=E[K];me!==null&&(E[K]=null,w[K].disconnect(me))}P=null,U=null,g.reset();for(let K in p)delete p[K];if(e.setRenderTarget(_),f=null,u=null,d=null,n=null,y=null,Ae.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(x.width,x.height,!1),R!==null){let K=R.camera;K.fov=R.fov,K.zoom=R.zoom,K.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(n,t)),d},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(_=e.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",H),n.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(x),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Re=null,he=null;v.depth&&(he=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=v.stencil?hn:kn,Re=v.stencil?Yn:cn);let Oe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Oe),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Et(u.textureWidth,u.textureHeight,{format:Ti,type:Si,depthTexture:new on(u.textureWidth,u.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Me={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,Me),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Et(f.framebufferWidth,f.framebufferHeight,{format:Ti,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Ae.setContext(n),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(K){for(let me=0;me<K.removed.length;me++){let Me=K.removed[me],Re=E.indexOf(Me);Re>=0&&(E[Re]=null,w[Re].disconnect(Me))}for(let me=0;me<K.added.length;me++){let Me=K.added[me],Re=E.indexOf(Me);if(Re===-1){for(let Oe=0;Oe<w.length;Oe++)if(Oe>=E.length){E.push(Me),Re=Oe;break}else if(E[Oe]===null){E[Oe]=Me,Re=Oe;break}if(Re===-1)break}let he=w[Re];he&&he.connect(Me)}}function z(K,me){me===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(me.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let me=K.near,Me=K.far;g.texture!==null&&(g.depthNear>0&&(me=g.depthNear),g.depthFar>0&&(Me=g.depthFar)),O.near=I.near=A.near=me,O.far=I.far=A.far=Me,(P!==O.near||U!==O.far)&&(n.updateRenderState({depthNear:O.near,depthFar:O.far}),P=O.near,U=O.far),O.layers.mask=K.layers.mask|6,A.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;let Re=K.parent,he=O.cameras;z(O,Re);for(let Oe=0;Oe<he.length;Oe++)z(he[Oe],Re);O.projectionMatrix.copy(A.projectionMatrix),O.projectionMatrixInverse.copy(A.projectionMatrixInverse),R===null&&K.isPerspectiveCamera&&(R={camera:K,fov:K.fov,zoom:K.zoom}),X(K,O,Re)};function X(K,me,Me){Me===null?K.matrix.copy(me.matrixWorld):(K.matrix.copy(Me.matrixWorld),K.matrix.invert(),K.matrix.multiply(me.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(me.projectionMatrix),K.projectionMatrixInverse.copy(me.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ps*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(K){return p[K]};let ee=null;function pe(K,me){if(h=me.getViewerPose(c||a),m=me,h!==null){let Me=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Re=!1;Me.length!==O.cameras.length&&(O.cameras.length=0,Re=!0);for(let Be=0;Be<Me.length;Be++){let it=Me[Be],ct=null;if(f!==null)ct=f.getViewport(it);else{let Wt=d.getViewSubImage(u,it);ct=Wt.viewport,Be===0&&(e.setRenderTargetTextures(y,Wt.colorTexture,Wt.depthStencilTexture),e.setRenderTarget(y))}let qe=L[Be];qe===void 0&&(qe=new Ht,qe.layers.enable(Be),qe.viewport=new ot,L[Be]=qe),qe.matrix.fromArray(it.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(it.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ct.x,ct.y,ct.width,ct.height),Be===0&&(O.matrix.copy(qe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Re===!0&&O.cameras.push(qe)}let he=n.enabledFeatures;if(he&&he.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&b){d=i.getBinding();let Be=d.getDepthInformation(Me[0]);Be&&Be.isValid&&Be.texture&&g.init(Be,n.renderState)}if(he&&he.includes("camera-access")&&b){e.state.unbindTexture(),d=i.getBinding();for(let Be=0;Be<Me.length;Be++){let it=Me[Be].camera;if(it){let ct=p[it];ct||(ct=new Ta,p[it]=ct);let qe=d.getCameraImage(it);ct.sourceTexture=qe}}}}for(let Me=0;Me<w.length;Me++){let Re=E[Me],he=w[Me];Re!==null&&he!==void 0&&he.update(Re,me,c||a)}ee&&ee(K,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),m=null}let Ae=new wp;Ae.setAnimationLoop(pe),this.setAnimationLoop=function(K){ee=K},this.dispose=function(){}}},ay=new De,Np=new He;Np.set(-1,0,0,0,1,0,0,0,1);function oy(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,$h(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,v,_,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),b(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,v,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ai&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ai&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),_=v.envMap,y=v.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(ay.makeRotationFromEuler(y)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Np),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ai&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function ly(r,e,t,i){let n={},s={};function a(v,_){let y=_.program;i.uniformBlockBinding(v,y,n[v.id])}function o(v,_){let y=n[v.id];y===void 0&&(m(v),y=l(v),n[v.id]=y,v.addEventListener("dispose",g));let w=_.program;i.updateUBOMapping(v,w);let E=e.render.frame;s[v.id]!==E&&(c(v),s[v.id]=E)}function l(v){let _=r.createBuffer(),y=v.__size,w=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,y,w),r.bindBuffer(r.UNIFORM_BUFFER,null),_}function c(v){let _=n[v.id],y=v.uniforms,w=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let E=0,x=y.length;E<x;E++){let M=y[E];if(Array.isArray(M))for(let R=0,A=M.length;R<A;R++)h(M[R],E,R,w);else h(M,E,0,w)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(v,_,y,w){if(u(v,_,y,w)===!0){let E=v.__offset,x=v.value;if(Array.isArray(x)){let M=0;for(let R=0;R<x.length;R++){let A=x[R],I=b(A,!0);d(A,v.__data,M),M+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,v.__data)}}function d(v,_,y){typeof v=="number"||typeof v=="boolean"?_[y]=v:v.isMatrix3?(_[y]=v.elements[0],_[y+1]=v.elements[1],_[y+2]=v.elements[2],_[y+3]=0,_[y+4]=v.elements[3],_[y+5]=v.elements[4],_[y+6]=v.elements[5],_[y+7]=0,_[y+8]=v.elements[6],_[y+9]=v.elements[7],_[y+10]=v.elements[8],_[y+11]=0):ArrayBuffer.isView(v)?_.set(v.subarray(0,_.length-y),y):v.toArray(_,y)}function u(v,_,y,w){let E=v.value,x=_+"_"+y;if(Array.isArray(E)){w[x]===void 0&&(w[x]=[]);let M=w[x],R=!1;for(let A=0;A<E.length;A++)f(E[A],M,A)===!0&&(R=!0);return R}return f(E,w,x)}function f(v,_,y){if(_[y]===void 0)return typeof v=="number"||typeof v=="boolean"?_[y]=v:ArrayBuffer.isView(v)?_[y]=v.slice():_[y]=v.clone(),!0;{let w=_[y];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return _[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function m(v){let _=v.uniforms,y=0,w=16;for(let x=0,M=_.length;x<M;x++){let R=Array.isArray(_[x])?_[x]:[_[x]];for(let A=0,I=R.length;A<I;A++){let L=R[A],O=Array.isArray(L.value)?L.value:[L.value],P=Array.isArray(_[x])||Array.isArray(L.value),U=y;for(let H=0,Z=O.length;H<Z;H++){let z=O[H],X=b(z,P),ee=y%w,pe=ee%X.boundary,Ae=ee+pe;y+=pe,Ae!==0&&w-Ae<X.storage&&(y+=w-Ae),H===0&&(U=y),y+=X.storage}let B=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new B((y-U)/Float32Array.BYTES_PER_ELEMENT),L.__offset=U}}let E=y%w;return E>0&&(y+=w-E),v.__size=y,v.__cache={},this}function b(v,_){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",v),_===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(v){let _=v.target;_.removeEventListener("dispose",g),r.deleteBuffer(n[_.id]),delete n[_.id],delete s[_.id]}function p(){for(let v in n)r.deleteBuffer(n[v]);n={},s={}}return{bind:a,update:o,dispose:p}}var cy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bn=null;function hy(){return bn===null&&(bn=new Ui(cy,16,16,ps,gt),bn.name="DFG_LUT",bn.minFilter=ut,bn.magFilter=ut,bn.wrapS=Ni,bn.wrapT=Ni,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}var xc=class{constructor(e={}){let{canvas:t=Kf(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Si}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let b=f,g=new Set([Ul,Fl,Nl]),p=new Set([Si,cn,Nr,Yn,Dl,Il]),v=new Uint32Array(4),_=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},w=null,E=null,x=[],M=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,L=null,O=null,P=null,U=null;this._outputColorSpace=rt;let B=0,H=0,Z=null,z=-1,X=null,ee=new ot,pe=new ot,Ae=null,K=new be(0),me=0,Me=t.width,Re=t.height,he=1,Oe=null,pt=null,Be=new ot(0,0,Me,Re),it=new ot(0,0,Me,Re),ct=!1,qe=new ls,Wt=new ul,Ot=!1,ti=!1,St=new De,Li=new D,zt=new ot,fi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pi=!1;function mi(){return Z===null?he:1}let k=i;function gi(T,F){return t.getContext(T,F)}let vt,yt,oe,Ct,Le,ke,C,S,G,te,$,ne,ae,j,J,se,N,Q,Y,ce,re,le,Ne;try{let T={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",xe,!1),k===null){let F="webgl2";if(k=gi(F,T),k===null)throw gi(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(T){throw t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),ze("WebGLRenderer: "+T.message),T}function Xe(){vt=new _b(k),vt.init(),re=new ny(k,vt),yt=new hb(k,vt,e,re),oe=new ty(k,vt),yt.reversedDepthBuffer&&u&&oe.buffers.depth.setReversed(!0),O=k.createFramebuffer(),P=k.createFramebuffer(),U=k.createFramebuffer(),Ct=new wb(k),Le=new Hv,ke=new iy(k,vt,oe,Le,yt,re,Ct),C=new yb(A),S=new E0(k),le=new lb(k,S),G=new Mb(k,S,Ct,le),te=new Eb(k,G,S,le,Ct),Q=new Tb(k,yt,ke),J=new db(Le),$=new zv(A,C,vt,yt,le,J),ne=new oy(A,Le),ae=new Vv,j=new Kv(vt),N=new ob(A,C,oe,te,m,l),se=new ey(A,te,yt),Ne=new ly(k,Ct,yt,oe),Y=new cb(k,vt,Ct),ce=new Sb(k,vt,Ct),Ct.programs=$.programs,A.capabilities=yt,A.extensions=vt,A.properties=Le,A.renderLists=ae,A.shadowMap=se,A.state=oe,A.info=Ct}b!==Si&&(R=new Rb(b,t.width,t.height,o,n,s));let ie=new xd(A,k);this.xr=ie,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let T=vt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=vt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(T){T!==void 0&&(he=T,this.setSize(Me,Re,!1))},this.getSize=function(T){return T.set(Me,Re)},this.setSize=function(T,F,q=!0){if(ie.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=T,Re=F,t.width=Math.floor(T*he),t.height=Math.floor(F*he),q===!0&&(t.style.width=T+"px",t.style.height=F+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(Me*he,Re*he).floor()},this.setDrawingBufferSize=function(T,F,q){Me=T,Re=F,he=q,t.width=Math.floor(T*q),t.height=Math.floor(F*q),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(b===Si){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ee)},this.getViewport=function(T){return T.copy(Be)},this.setViewport=function(T,F,q,V){T.isVector4?Be.set(T.x,T.y,T.z,T.w):Be.set(T,F,q,V),oe.viewport(ee.copy(Be).multiplyScalar(mi()).round())},this.getScissor=function(T){return T.copy(it)},this.setScissor=function(T,F,q,V){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,F,q,V),oe.scissor(pe.copy(it).multiplyScalar(mi()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(T){oe.setScissorTest(ct=T)},this.setOpaqueSort=function(T){Oe=T},this.setTransparentSort=function(T){pt=T},this.getClearColor=function(T){return T.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,q=!0){let V=0;if(T){let W=!1;if(Z!==null){let fe=Z.texture.format;W=g.has(fe)}if(W){let fe=Z.texture.type,Se=p.has(fe),de=N.getClearColor(),ve=N.getClearAlpha(),Ce=de.r,Ge=de.g,Ze=de.b;Se?(v[0]=Ce,v[1]=Ge,v[2]=Ze,v[3]=ve,k.clearBufferuiv(k.COLOR,0,v)):(_[0]=Ce,_[1]=Ge,_[2]=Ze,_[3]=ve,k.clearBufferiv(k.COLOR,0,_))}else V|=k.COLOR_BUFFER_BIT}F&&(V|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&k.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),N.dispose(),ae.dispose(),j.dispose(),ke.dispose(),Le.dispose(),C.dispose(),te.dispose(),G.dispose(),le.dispose(),Ne.dispose(),$.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",bu),ie.removeEventListener("sessionend",vu),bs.stop()};function Ue(T){T.preventDefault(),fa("WebGLRenderer: Context Lost."),I=!0}function Ve(){fa("WebGLRenderer: Context Restored."),I=!1;let T=Ct.autoReset,F=se.enabled,q=se.autoUpdate,V=se.needsUpdate,W=se.type;Xe(),Ct.autoReset=T,se.enabled=F,se.autoUpdate=q,se.needsUpdate=V,se.type=W}function xe(T){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function mt(T){let F=T.target;F.removeEventListener("dispose",mt),ii(F)}function ii(T){Zn(T),Le.remove(T)}function Zn(T){let F=Le.get(T).programs;F!==void 0&&(F.forEach(function(q){$.releaseProgram(q)}),T.isShaderMaterial&&$.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,q,V,W,fe){F===null&&(F=fi);let Se=W.isMesh&&W.matrixWorld.determinantAffine()<0,de=mm(T,F,q,V,W);oe.setMaterial(V,Se);let ve=q.index,Ce=1;if(V.wireframe===!0){if(ve=G.getWireframeAttribute(q),ve===void 0)return;Ce=2}let Ge=q.drawRange,Ze=q.attributes.position,Te=Ge.start*Ce,Qe=(Ge.start+Ge.count)*Ce;fe!==null&&(Te=Math.max(Te,fe.start*Ce),Qe=Math.min(Qe,(fe.start+fe.count)*Ce)),ve!==null?(Te=Math.max(Te,0),Qe=Math.min(Qe,ve.count)):Ze!=null&&(Te=Math.max(Te,0),Qe=Math.min(Qe,Ze.count));let Xt=Qe-Te;if(Xt<0||Xt===1/0)return;le.setup(W,V,de,q,ve);let Rt,wt=Y;if(ve!==null&&(Rt=S.get(ve),wt=ce,wt.setIndex(Rt)),W.isMesh)V.wireframe===!0?(oe.setLineWidth(V.wireframeLinewidth*mi()),wt.setMode(k.LINES)):wt.setMode(k.TRIANGLES);else if(W.isLine){let xi=V.linewidth;xi===void 0&&(xi=1),oe.setLineWidth(xi*mi()),W.isLineSegments?wt.setMode(k.LINES):W.isLineLoop?wt.setMode(k.LINE_LOOP):wt.setMode(k.LINE_STRIP)}else W.isPoints?wt.setMode(k.POINTS):W.isSprite&&wt.setMode(k.TRIANGLES);if(W.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))wt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let xi=W._multiDrawStarts,Ee=W._multiDrawCounts,Ri=W._multiDrawCount,ht=ve?S.get(ve).bytesPerElement:1,vs=Le.get(V).currentProgram.getUniforms();for(let bi=0;bi<Ri;bi++)vs.setValue(k,"_gl_DrawID",bi),wt.render(xi[bi]/ht,Ee[bi])}else if(W.isInstancedMesh)wt.renderInstances(Te,Xt,W.count);else if(q.isInstancedBufferGeometry){let xi=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ee=Math.min(q.instanceCount,xi);wt.renderInstances(Te,Xt,Ee)}else wt.render(Te,Xt)};function xu(T,F,q,V){L!==null&&T.isNodeMaterial&&L.setObject(V,T),Ot===!0&&J.setState(T,q,!1),T.transparent===!0&&T.side===Di&&T.forceSinglePass===!1?(T.side=ai,T.needsUpdate=!0,Jr(T,F,V),T.side=Yi,T.needsUpdate=!0,Jr(T,F,V),T.side=Di):Jr(T,F,V)}this.compile=function(T,F,q=null){q===null&&(q=T),L!==null&&L.renderStart(T,F,q),E=j.get(q),E.init(F),M.push(E),q.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),T!==q&&T.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),ti=this.localClippingEnabled,Ot=J.init(this.clippingPlanes,ti),Ot===!0&&J.setGlobalState(this.clippingPlanes,F),L!==null&&se.render(E.state.shadowsArray,q,F);let V=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let fe=W.material;if(fe)if(Array.isArray(fe))for(let Se=0;Se<fe.length;Se++){let de=fe[Se];xu(de,q,F,W),V.add(de)}else xu(fe,q,F,W),V.add(fe)}),E=M.pop(),L!==null&&L.renderEnd(),V},this.compileAsync=function(T,F,q=null){let V=this.compile(T,F,q);return new Promise(W=>{function fe(){if(V.forEach(function(Se){let ve=Le.get(Se).currentProgram;(ve===void 0||ve.isReady())&&V.delete(Se)}),V.size===0){W(T);return}setTimeout(fe,10)}vt.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Yc=null;function fm(T){Yc&&Yc(T)}function bu(){bs.stop()}function vu(){bs.start()}let bs=new wp;bs.setAnimationLoop(fm),typeof self<"u"&&bs.setContext(self),this.setAnimationLoop=function(T){Yc=T,ie.setAnimationLoop(T),T===null?bs.stop():bs.start()},ie.addEventListener("sessionstart",bu),ie.addEventListener("sessionend",vu),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(T,F);let q=ie.enabled===!0&&ie.isPresenting===!0,V=R!==null&&(Z===null||q)&&R.begin(A,Z);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(F),F=ie.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,F,Z),E=j.get(T,M.length),E.init(F),E.state.textureUnits=ke.getTextureUnits(),M.push(E),St.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?Wt.setFromArrayCamera(F):qe.setFromProjectionMatrix(St,Xi,F.reversedDepth),ti=this.localClippingEnabled,Ot=J.init(this.clippingPlanes,ti),w=ae.get(T,x.length),w.init(),x.push(w),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){let Se=A.xr.getDepthSensingMesh();Se!==null&&Kc(Se,F,-1/0,A.sortObjects)}Kc(T,F,0,A.sortObjects),w.finish(),L!==null&&L.updateLights(E.state.lightsArray),A.sortObjects===!0&&w.sort(Oe,pt),pi=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,pi&&N.addToRenderList(w,T),this.info.autoReset===!0&&this.info.reset(),Ot===!0&&J.beginShadows();let W=E.state.shadowsArray;if(se.render(W,T,F),Ot===!0&&J.endShadows(),(V&&R.hasRenderPass())===!1){let Se=w.opaque,de=w.transmissive;if(E.setupLights(),F.isArrayCamera){let ve=F.cameras;if(de.length>0)for(let Ce=0,Ge=ve.length;Ce<Ge;Ce++){let Ze=ve[Ce];_u(Se,de,T,Ze)}pi&&N.render(T);for(let Ce=0,Ge=ve.length;Ce<Ge;Ce++){let Ze=ve[Ce];yu(w,T,Ze,Ze.viewport)}}else de.length>0&&_u(Se,de,T,F),pi&&N.render(T),yu(w,T,F)}Z!==null&&H===0&&(ke.updateMultisampleRenderTarget(Z),ke.updateRenderTargetMipmap(Z)),V&&R.end(A),T.isScene===!0&&T.onAfterRender(A,T,F),le.resetDefaultState(),z=-1,X=null,M.pop(),M.length>0?(E=M[M.length-1],ke.setTextureUnits(E.state.textureUnits),Ot===!0&&J.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?w=x[x.length-1]:w=null,L!==null&&L.renderEnd()};function Kc(T,F,q,V){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){let Se=F.isArrayCamera?Wt:qe;if(!T.frustumCulled||T.intersectsFrustum(Se)){V&&zt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(St);let de=te.update(T),ve=T.material;ve.visible&&w.push(T,de,ve,q,zt.z,null,F)}}else if(T.isMesh||T.isLine||T.isPoints){let Se=F.isArrayCamera?Wt:qe;if(!T.frustumCulled||T.intersectsFrustum(Se)){let de=te.update(T),ve=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),zt.copy(T.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),zt.copy(de.boundingSphere.center)),zt.applyMatrix4(T.matrixWorld).applyMatrix4(St)),Array.isArray(ve)){let Ce=de.groups;for(let Ge=0,Ze=Ce.length;Ge<Ze;Ge++){let Te=Ce[Ge],Qe=ve[Te.materialIndex];Qe&&Qe.visible&&w.push(T,de,Qe,q,zt.z,Te,F)}}else ve.visible&&w.push(T,de,ve,q,zt.z,null,F)}}}let fe=T.children;for(let Se=0,de=fe.length;Se<de;Se++)Kc(fe[Se],F,q,V)}function yu(T,F,q,V){let{opaque:W,transmissive:fe,transparent:Se}=T;E.setupLightsView(q),Ot===!0&&J.setGlobalState(A.clippingPlanes,q),V&&oe.viewport(ee.copy(V)),W.length>0&&wo(W,F,q),fe.length>0&&wo(fe,F,q),Se.length>0&&wo(Se,F,q),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function _u(T,F,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let Te=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new Et(1,1,{generateMipmaps:!0,type:Te?gt:Si,minFilter:Ii,samples:Math.max(4,yt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}let fe=E.state.transmissionRenderTarget[V.id],Se=V.viewport||ee;fe.setSize(Se.z*A.transmissionResolutionScale,Se.w*A.transmissionResolutionScale);let de=A.getRenderTarget(),ve=A.getActiveCubeFace(),Ce=A.getActiveMipmapLevel();A.setRenderTarget(fe),A.getClearColor(K),me=A.getClearAlpha(),me<1&&A.setClearColor(16777215,.5),A.clear(),pi&&N.render(q);let Ge=A.toneMapping;A.toneMapping=gn;let Ze=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),Ot===!0&&J.setGlobalState(A.clippingPlanes,V),wo(T,q,V),ke.updateMultisampleRenderTarget(fe),ke.updateRenderTargetMipmap(fe),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Qe=0,Xt=F.length;Qe<Xt;Qe++){let Rt=F[Qe],{object:wt,geometry:xi,material:Ee,group:Ri}=Rt;if(Ee.side===Di&&wt.layers.test(V.layers)){let ht=Ee.side;Ee.side=ai,Ee.needsUpdate=!0,Mu(wt,q,V,xi,Ee,Ri),Ee.side=ht,Ee.needsUpdate=!0,Te=!0}}Te===!0&&(ke.updateMultisampleRenderTarget(fe),ke.updateRenderTargetMipmap(fe))}A.setRenderTarget(de,ve,Ce),A.setClearColor(K,me),Ze!==void 0&&(V.viewport=Ze),A.toneMapping=Ge}function wo(T,F,q){let V=F.isScene===!0?F.overrideMaterial:null;for(let W=0,fe=T.length;W<fe;W++){let Se=T[W],{object:de,geometry:ve,group:Ce}=Se,Ge=Se.material;Ge.allowOverride===!0&&V!==null&&(Ge=V),de.layers.test(q.layers)&&Mu(de,F,q,ve,Ge,Ce)}}function Mu(T,F,q,V,W,fe){L!==null&&W.isNodeMaterial&&L.setObject(T,W),T.onBeforeRender(A,F,q,V,W,fe),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(A,F,q,V,T,fe),W.transparent===!0&&W.side===Di&&W.forceSinglePass===!1?(W.side=ai,W.needsUpdate=!0,A.renderBufferDirect(q,F,V,W,T,fe),W.side=Yi,W.needsUpdate=!0,A.renderBufferDirect(q,F,V,W,T,fe),W.side=Di):A.renderBufferDirect(q,F,V,W,T,fe),T.onAfterRender(A,F,q,V,W,fe)}function Su(T){let F=0;for(let q of T)q.texture!==null&&F++;return F}function Jr(T,F,q){F.isScene!==!0&&(F=fi);let V=Le.get(T),W=E.state.lights,fe=E.state.shadowsArray,Se=W.state.version,de=$.getParameters(T,W.state,fe,F,q,E.state.lightProbeGridArray),ve=$.getProgramCacheKey(de),Ce=V.programs;V.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let Ge=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;V.envMap=C.get(T.envMap||V.environment,Ge),V.envMapRotation=V.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ce===void 0&&(T.addEventListener("dispose",mt),Ce=new Map,V.programs=Ce,V.programVariants=new Map);let Ze=Ce.get(ve);if(Ze!==void 0){if(V.currentProgram===Ze&&V.lightsStateVersion===Se)return Tu(T,de),Ze}else de.uniforms=$.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,q,de),T.onBeforeCompile(de,A),Ze=$.acquireProgram(de,ve),Ce.set(ve,Ze),V.uniforms=de.uniforms;let Te=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Te.clippingPlanes=J.uniform),Tu(T,de),V.needsLights=xm(T),V.lightsStateVersion=Se,V.needsLights&&(Te.ambientLightColor.value=W.state.ambient,Te.lightProbe.value=W.state.probe,Te.sunLights.value=W.state.sun,Te.sunLightShadows.value=W.state.sunShadow,Te.directionalLights.value=W.state.directional,Te.directionalLightShadows.value=W.state.directionalShadow,Te.spotLights.value=W.state.spot,Te.spotLightShadows.value=W.state.spotShadow,Te.rectAreaLights.value=W.state.rectArea,Te.ltc_1.value=W.state.rectAreaLTC1,Te.ltc_2.value=W.state.rectAreaLTC2,Te.pointLights.value=W.state.point,Te.pointLightShadows.value=W.state.pointShadow,Te.hemisphereLights.value=W.state.hemi,Te.sunShadowMatrix.value=W.state.sunShadowMatrix,Te.sunShadowCascade.value=W.state.sunShadowCascade,Te.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Te.spotLightMatrix.value=W.state.spotLightMatrix,Te.spotLightMap.value=W.state.spotLightMap,Te.pointShadowMatrix.value=W.state.pointShadowMatrix),V.numLightProbeGrids=Su(E.state.lightProbeGridArray),V.currentProgram=Ze,V.uniformsList=null,Ze}function pm(T,F,q,V,W){let fe=Le.get(T),Se=fe.currentProgram.id+","+V+","+W,de=fe.programVariants.get(Se);return de===void 0?(de=Jr(T,F,q),fe.programVariants.set(Se,de)):(fe.currentProgram=de,fe.uniformsList=null,fe.outputColorSpace=V,fe.toneMapping=W),de}function wu(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=Ur.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Tu(T,F){let q=Le.get(T);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function mm(T,F,q,V,W){F.isScene!==!0&&(F=fi),ke.resetTextureUnits();let fe=F.fog,Se=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,de=Z===null?A.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:We.workingColorSpace,ve=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ce=C.get(V.envMap||Se,ve),Ge=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ze=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Te=!!q.morphAttributes.position,Qe=!!q.morphAttributes.normal,Xt=!!q.morphAttributes.color,Rt=gn;V.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Rt=A.toneMapping);let wt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xi=wt!==void 0?wt.length:0,Ee=Le.get(V),Ri=E.state.lights;if(Ot===!0&&(ti===!0||T!==X)){let Bt=T===X&&V.id===z;J.setState(V,T,Bt)}let ht=!1,vs=!1;V.version===Ee.__version?Ee.needsLights&&Ee.lightsStateVersion!==Ri.state.version||W.isBatchedMesh&&Ee.batching===!1||!W.isBatchedMesh&&Ee.batching===!0||W.isBatchedMesh&&Ee.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ee.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ee.instancing===!1||!W.isInstancedMesh&&Ee.instancing===!0||W.isSkinnedMesh&&Ee.skinning===!1||!W.isSkinnedMesh&&Ee.skinning===!0||W.isInstancedMesh&&Ee.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ee.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ee.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ee.instancingMorph===!1&&W.morphTexture!==null||Ee.envMap!==Ce||V.fog===!0&&Ee.fog!==fe||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==J.numPlanes||Ee.numIntersection!==J.numIntersection)||Ee.vertexAlphas!==Ge||Ee.vertexTangents!==Ze||Ee.morphTargets!==Te||Ee.morphNormals!==Qe||Ee.morphColors!==Xt||Ee.morphTargetsCount!==xi||Ee.numLightProbeGrids!==Su(E.state.lightProbeGridArray)?ht=!0:(Ee.outputColorSpace!==de||Ee.toneMapping!==Rt)&&(vs=!0):(ht=!0,Ee.__version=V.version);let bi=Ee.currentProgram;(ht===!0||vs===!0)&&(bi=vs===!0?pm(V,F,W,de,Rt):Jr(V,F,W),L&&V.isNodeMaterial&&L.onUpdateProgram(V,bi,Ee));let To=!1,Qn=!1,ys=!1,nt=bi.getUniforms(),li=Ee.uniforms;if(oe.useProgram(bi.program)&&(To=!0,Qn=!0,ys=!0),V.id!==z&&(z=V.id,Qn=!0),To||X!==T){oe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),nt.setValue(k,"projectionMatrix",T.projectionMatrix),nt.setValue(k,"viewMatrix",T.matrixWorldInverse);let ni=nt.map.cameraPosition;ni!==void 0&&ni.setValue(k,Li.setFromMatrixPosition(T.matrixWorld)),yt.logarithmicDepthBuffer&&nt.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&nt.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),X!==T&&(X=T,Qn=!0,ys=!0)}if(Ee.needsLights&&(Ri.state.sunShadowMap.length>0&&nt.setValue(k,"sunShadowMap",Ri.state.sunShadowMap,ke),Ri.state.directionalShadowMap.length>0&&nt.setValue(k,"directionalShadowMap",Ri.state.directionalShadowMap,ke),Ri.state.spotShadowMap.length>0&&nt.setValue(k,"spotShadowMap",Ri.state.spotShadowMap,ke),Ri.state.pointShadowMap.length>0&&nt.setValue(k,"pointShadowMap",Ri.state.pointShadowMap,ke)),W.isSkinnedMesh){nt.setOptional(k,W,"bindMatrix"),nt.setOptional(k,W,"bindMatrixInverse");let Bt=W.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),nt.setValue(k,"boneTexture",Bt.boneTexture,ke))}W.isBatchedMesh&&(nt.setOptional(k,W,"batchingTexture"),nt.setValue(k,"batchingTexture",W._matricesTexture,ke),nt.setOptional(k,W,"batchingIdTexture"),nt.setValue(k,"batchingIdTexture",W._indirectTexture,ke),nt.setOptional(k,W,"batchingColorTexture"),W._colorsTexture!==null&&nt.setValue(k,"batchingColorTexture",W._colorsTexture,ke));let en=q.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&Q.update(W,q,bi),(Qn||Ee.receiveShadow!==W.receiveShadow)&&(Ee.receiveShadow=W.receiveShadow,nt.setValue(k,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(li.envMapIntensity.value=F.environmentIntensity),li.dfgLUT!==void 0&&(li.dfgLUT.value=hy()),Qn){if(nt.setValue(k,"toneMappingExposure",A.toneMappingExposure),Ee.needsLights&&gm(li,ys),fe&&V.fog===!0&&ne.refreshFogUniforms(li,fe),ne.refreshMaterialUniforms(li,V,he,Re,E.state.transmissionRenderTarget[T.id]),Ee.needsLights&&Ee.numLightProbeGrids>0){let Bt=y,ni=0;for(let Cn of E.state.lightProbeGridArray)Cn.texture!==null&&(Bt.textures[ni]=Cn.texture,Bt.min[ni]=Cn.boundingBox.min,Bt.max[ni]=Cn.boundingBox.max,Bt.resolution[ni]=Cn.resolution,ni++);for(let Cn in Bt)Bt[Cn].length=ni;li.probesSH.value=Bt.textures,li.probesMin.value=Bt.min,li.probesMax.value=Bt.max,li.probesResolution.value=Bt.resolution}Ur.upload(k,wu(Ee),li,ke)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ur.upload(k,wu(Ee),li,ke),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&nt.setValue(k,"center",W.center),nt.setValue(k,"modelViewMatrix",W.modelViewMatrix),nt.setValue(k,"normalMatrix",W.normalMatrix),nt.setValue(k,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let Bt=V.uniformsGroups;for(let ni=0,Cn=Bt.length;ni<Cn;ni++){let Au=Bt[ni];Ne.update(Au,bi),Ne.bind(Au,bi)}}return bi}function gm(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function xm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(T,F,q){let V=Le.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Le.get(T.texture).__webglTexture=F,Le.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){let q=Le.get(T);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,q=0){Z=T,B=F,H=q;let V=null,W=!1,fe=!1;if(T){let de=Le.get(T);if(de.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(k.FRAMEBUFFER,de.__webglFramebuffer),ee.copy(T.viewport),pe.copy(T.scissor),Ae=T.scissorTest,oe.viewport(ee),oe.scissor(pe),oe.setScissorTest(Ae),z=-1;return}else if(de.__webglFramebuffer===void 0)ke.setupRenderTarget(T);else if(de.__hasExternalTextures)ke.rebindTextures(T,Le.get(T.texture).__webglTexture,Le.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ge=T.depthTexture;if(de.__boundDepthTexture!==Ge){if(Ge!==null&&Le.has(Ge)&&(T.width!==Ge.image.width||T.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(T)}}let ve=T.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(fe=!0);let Ce=Le.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ce[F])?V=Ce[F][q]:V=Ce[F],W=!0):T.samples>0&&ke.useMultisampledRTT(T)===!1?V=Le.get(T).__webglMultisampledFramebuffer:Array.isArray(Ce)?V=Ce[q]:V=Ce,ee.copy(T.viewport),pe.copy(T.scissor),Ae=T.scissorTest}else ee.copy(Be).multiplyScalar(he).floor(),pe.copy(it).multiplyScalar(he).floor(),Ae=ct;if(q!==0&&(V=O),oe.bindFramebuffer(k.FRAMEBUFFER,V)&&oe.drawBuffers(T,V),oe.viewport(ee),oe.scissor(pe),oe.setScissorTest(Ae),W){let de=Le.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,de.__webglTexture,q)}else if(fe){let de=F;for(let ve=0;ve<T.textures.length;ve++){let Ce=Le.get(T.textures[ve]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+ve,Ce.__webglTexture,q,de)}}else if(T!==null&&q!==0){let de=Le.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,de.__webglTexture,q)}z=-1};function Eu(T){let F=Le.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=yt.textureFormatReadable(T.format),F.__typeReadable=yt.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,q,V,W,fe,Se,de=0){if(!(T&&T.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(ve=ve[Se],Array.isArray(ve)&&(ve=ve[0])),ve){oe.bindFramebuffer(k.FRAMEBUFFER,ve);try{let Ce=T.textures[de],Ge=Ce.format,Ze=Ce.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+de);let Te=Eu(Ce);if(Te.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-V&&q>=0&&q<=T.height-W&&k.readPixels(F,q,V,W,re.convert(Ge),re.convert(Ze),fe)}finally{let Ce=Z!==null?Le.get(Z).__webglFramebuffer:null;oe.bindFramebuffer(k.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,F,q,V,W,fe,Se,de=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(ve=ve[Se],Array.isArray(ve)&&(ve=ve[0])),ve)if(F>=0&&F<=T.width-V&&q>=0&&q<=T.height-W){oe.bindFramebuffer(k.FRAMEBUFFER,ve);let Ce=T.textures[de],Ge=Ce.format,Ze=Ce.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+de);let Te=Eu(Ce);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Qe),k.bufferData(k.PIXEL_PACK_BUFFER,fe.byteLength,k.STREAM_READ),k.readPixels(F,q,V,W,re.convert(Ge),re.convert(Ze),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Xt=Z!==null?Le.get(Z).__webglFramebuffer:null;oe.bindFramebuffer(k.FRAMEBUFFER,Xt);let Rt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Zf(k,Rt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Qe),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,fe),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Qe),k.deleteSync(Rt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,q=0){let V=Math.pow(2,-q),W=Math.floor(T.image.width*V),fe=Math.floor(T.image.height*V),Se=F!==null?F.x:0,de=F!==null?F.y:0;ke.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,q,0,0,Se,de,W,fe),oe.unbindTexture()},this.copyTextureToTexture=function(T,F,q=null,V=null,W=0,fe=0){let Se,de,ve,Ce,Ge,Ze,Te,Qe,Xt,Rt=T.isCompressedTexture?T.mipmaps[fe]:T.image;if(q!==null)Se=q.max.x-q.min.x,de=q.max.y-q.min.y,ve=q.isBox3?q.max.z-q.min.z:1,Ce=q.min.x,Ge=q.min.y,Ze=q.isBox3?q.min.z:0;else{let nt=Math.pow(2,-W);Se=Math.floor(Rt.width*nt),de=Math.floor(Rt.height*nt),T.isDataArrayTexture?ve=Rt.depth:T.isData3DTexture?ve=Math.floor(Rt.depth*nt):ve=1,Ce=0,Ge=0,Ze=0}V!==null?(Te=V.x,Qe=V.y,Xt=V.z):(Te=0,Qe=0,Xt=0);let wt=re.convert(F.format),xi=re.convert(F.type),Ee;F.isData3DTexture?(ke.setTexture3D(F,0),Ee=k.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ke.setTexture2DArray(F,0),Ee=k.TEXTURE_2D_ARRAY):(ke.setTexture2D(F,0),Ee=k.TEXTURE_2D),oe.activeTexture(k.TEXTURE0),oe.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),oe.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),oe.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment);let Ri=oe.getParameter(k.UNPACK_ROW_LENGTH),ht=oe.getParameter(k.UNPACK_IMAGE_HEIGHT),vs=oe.getParameter(k.UNPACK_SKIP_PIXELS),bi=oe.getParameter(k.UNPACK_SKIP_ROWS),To=oe.getParameter(k.UNPACK_SKIP_IMAGES);oe.pixelStorei(k.UNPACK_ROW_LENGTH,Rt.width),oe.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Rt.height),oe.pixelStorei(k.UNPACK_SKIP_PIXELS,Ce),oe.pixelStorei(k.UNPACK_SKIP_ROWS,Ge),oe.pixelStorei(k.UNPACK_SKIP_IMAGES,Ze);let Qn=T.isDataArrayTexture||T.isData3DTexture,ys=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){let nt=Le.get(T),li=Le.get(F),en=Le.get(nt.__renderTarget),Bt=Le.get(li.__renderTarget);oe.bindFramebuffer(k.READ_FRAMEBUFFER,en.__webglFramebuffer),oe.bindFramebuffer(k.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let ni=0;ni<ve;ni++)Qn&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Le.get(T).__webglTexture,W,Ze+ni),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Le.get(F).__webglTexture,fe,Xt+ni)),k.blitFramebuffer(Ce,Ge,Ce+Se,Ge+de,Te,Qe,Te+Se,Qe+de,k.DEPTH_BUFFER_BIT,k.NEAREST);oe.bindFramebuffer(k.READ_FRAMEBUFFER,null),oe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||Le.has(T)){let nt=Le.get(T),li=Le.get(F);oe.bindFramebuffer(k.READ_FRAMEBUFFER,P),oe.bindFramebuffer(k.DRAW_FRAMEBUFFER,U);for(let en=0;en<ve;en++)Qn?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,nt.__webglTexture,W,Ze+en):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,nt.__webglTexture,W),ys?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,li.__webglTexture,fe,Xt+en):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,li.__webglTexture,fe),W!==0?k.blitFramebuffer(Ce,Ge,Ce+Se,Ge+de,Te,Qe,Te+Se,Qe+de,k.COLOR_BUFFER_BIT,k.NEAREST):ys?k.copyTexSubImage3D(Ee,fe,Te,Qe,Xt+en,Ce,Ge,Se,de):k.copyTexSubImage2D(Ee,fe,Te,Qe,Ce,Ge,Se,de);oe.bindFramebuffer(k.READ_FRAMEBUFFER,null),oe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ys?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(Ee,fe,Te,Qe,Xt,Se,de,ve,wt,xi,Rt.data):F.isCompressedArrayTexture?k.compressedTexSubImage3D(Ee,fe,Te,Qe,Xt,Se,de,ve,wt,Rt.data):k.texSubImage3D(Ee,fe,Te,Qe,Xt,Se,de,ve,wt,xi,Rt):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,fe,Te,Qe,Se,de,wt,xi,Rt.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,fe,Te,Qe,Rt.width,Rt.height,wt,Rt.data):k.texSubImage2D(k.TEXTURE_2D,fe,Te,Qe,Se,de,wt,xi,Rt);oe.pixelStorei(k.UNPACK_ROW_LENGTH,Ri),oe.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ht),oe.pixelStorei(k.UNPACK_SKIP_PIXELS,vs),oe.pixelStorei(k.UNPACK_SKIP_ROWS,bi),oe.pixelStorei(k.UNPACK_SKIP_IMAGES,To),fe===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&k.generateMipmap(Ee),oe.unbindTexture()},this.initRenderTarget=function(T){Le.get(T).__webglFramebuffer===void 0&&ke.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ke.setTextureCube(T,0):T.isData3DTexture?ke.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ke.setTexture2DArray(T,0):ke.setTexture2D(T,0),oe.unbindTexture()},this.resetState=function(){B=0,H=0,Z=null,oe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}};var _n={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var di=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},dy=new Xn(-1,1,1,-1,0,1),bd=class extends Nt{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}},uy=new bd,Ji=class{constructor(e){this._mesh=new Fe(uy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,dy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var kr=class extends di{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof et?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Gt.clone(e.uniforms),this.material=new et({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ji(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ao=class extends di{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},yc=class extends di{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var _c=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ue);this._width=i.width,this._height=i.height,t=new Et(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new kr(_n),this.copyPass.material.blending=oi,this.timer=new Oa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ao!==void 0&&(a instanceof ao?i=!0:a instanceof yc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var oo=class extends di{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new be}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}};var Fp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new be(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var zr=class r extends di{constructor(e,t=1,i,n){super(),this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new be(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Et(s,a,{type:gt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Et(s,a,{type:gt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Et(s,a,{type:gt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),a=Math.round(a/2)}let o=Fp;this.highPassUniforms=Gt.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new et({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ue(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Gt.clone(_n.uniforms),this.blendMaterial=new et({uniforms:this.copyUniforms,vertexShader:_n.vertexShader,fragmentShader:_n.fragmentShader,premultipliedAlpha:!0,blending:ki,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new be,this._oldClearAlpha=1,this._basic=new Jt,this._fsQuad=new Ji(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new ue(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let n=[],s=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;n.push((a*o+(a+1)*l)/c),s.push(c)}return new et({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:n},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new et({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};zr.BlurDirectionX=new ue(1,0);zr.BlurDirectionY=new ue(0,1);var lo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Mc=class extends di{constructor(){super(),this.isOutputPass=!0,this.uniforms=Gt.clone(lo.uniforms),this.material=new Ar({name:lo.name,uniforms:this.uniforms,vertexShader:lo.vertexShader,fragmentShader:lo.fragmentShader}),this._fsQuad=new Ji(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},We.getTransfer(this._outputColorSpace)===at&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ga?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Va?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Gs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ja?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===qa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var co={name:"SMAAEdgesShader",defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new ue(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},ho={name:"SMAAWeightsShader",defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new ue(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Sc={name:"SMAABlendShader",uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new ue(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};var wc=class extends di{constructor(){super(),this._edgesRT=new Et(1,1,{depthBuffer:!1,type:gt}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new Et(1,1,{depthBuffer:!1,type:gt}),this._weightsRT.texture.name="SMAAPass.weights";let e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new Lt,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=ut,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;let i=new Image;i.src=this._getSearchTexture(),i.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new Lt,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=i,this._searchTexture.magFilter=Tt,this._searchTexture.minFilter=Tt,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=Gt.clone(co.uniforms),this._materialEdges=new et({defines:Object.assign({},co.defines),uniforms:this._uniformsEdges,vertexShader:co.vertexShader,fragmentShader:co.fragmentShader}),this._uniformsWeights=Gt.clone(ho.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new et({defines:Object.assign({},ho.defines),uniforms:this._uniformsWeights,vertexShader:ho.vertexShader,fragmentShader:ho.fragmentShader}),this._uniformsBlend=Gt.clone(Sc.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new et({uniforms:this._uniformsBlend,vertexShader:Sc.vertexShader,fragmentShader:Sc.fragmentShader}),this._fsQuad=new Ji(null)}render(e,t,i){this._uniformsEdges.tDiffuse.value=i.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=i.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAIwCAIAAACOVPcQAACBeklEQVR42u39W4xlWXrnh/3WWvuciIzMrKxrV8/0rWbY0+SQFKcb4owIkSIFCjY9AC1BT/LYBozRi+EX+cV+8IMsYAaCwRcBwjzMiw2jAWtgwC8WR5Q8mDFHZLNHTarZGrLJJllt1W2qKrsumZWZcTvn7L3W54e1vrXX3vuciLPPORFR1XE2EomorB0nVuz//r71re/y/1eMvb4Cb3N11xV/PP/2v4UBAwJG/7H8urx6/25/Gf8O5hypMQ0EEEQwAqLfoN/Z+97f/SW+/NvcgQk4sGBJK6H7N4PFVL+K+e0N11yNfkKvwUdwdlUAXPHHL38oa15f/i/46Ih6SuMSPmLAYAwyRKn7dfMGH97jaMFBYCJUgotIC2YAdu+LyW9vvubxAP8kAL8H/koAuOKP3+q6+xGnd5kdYCeECnGIJViwGJMAkQKfDvB3WZxjLKGh8VSCCzhwEWBpMc5/kBbjawT4HnwJfhr+pPBIu7uu+OOTo9vsmtQcniMBGkKFd4jDWMSCRUpLjJYNJkM+IRzQ+PQvIeAMTrBS2LEiaiR9b/5PuT6Ap/AcfAFO4Y3dA3DFH7/VS+M8k4baEAQfMI4QfbVDDGIRg7GKaIY52qAjTAgTvGBAPGIIghOCYAUrGFNgzA7Q3QhgCwfwAnwe5vDejgG44o/fbm1C5ZlYQvQDARPAIQGxCWBM+wWl37ZQESb4gImexGMDouhGLx1Cst0Saa4b4AqO4Hk4gxo+3DHAV/nx27p3JziPM2pVgoiia5MdEzCGULprIN7gEEeQ5IQxEBBBQnxhsDb5auGmAAYcHMA9eAAz8PBol8/xij9+C4Djlim4gJjWcwZBhCBgMIIYxGAVIkH3ZtcBuLdtRFMWsPGoY9rN+HoBji9VBYdwD2ZQg4cnO7OSq/z4rU5KKdwVbFAjNojCQzTlCLPFSxtamwh2jMUcEgg2Wm/6XgErIBhBckQtGN3CzbVacERgCnfgLswhnvqf7QyAq/z4rRZm1YglYE3affGITaZsdIe2FmMIpnOCap25I6jt2kCwCW0D1uAD9sZctNGXcQIHCkINDQgc78aCr+zjtw3BU/ijdpw3zhCwcaONwBvdeS2YZKkJNJsMPf2JKEvC28RXxxI0ASJyzQCjCEQrO4Q7sFArEzjZhaFc4cdv+/JFdKULM4px0DfUBI2hIsy06BqLhGTQEVdbfAIZXYMPesq6VoCHICzUyjwInO4Y411//LYLs6TDa9wvg2CC2rElgAnpTBziThxaL22MYhzfkghz6GAs2VHbbdM91VZu1MEEpupMMwKyVTb5ij9+u4VJG/5EgEMMmFF01cFai3isRbKbzb+YaU/MQbAm2XSMoUPAmvZzbuKYRIFApbtlrfFuUGd6vq2hXNnH78ZLh/iFhsQG3T4D1ib7k5CC6vY0DCbtrohgLEIClXiGtl10zc0CnEGIhhatLBva7NP58Tvw0qE8yWhARLQ8h4+AhQSP+I4F5xoU+VilGRJs6wnS7ruti/4KvAY/CfdgqjsMy4pf8fodQO8/gnuX3f/3xi3om1/h7THr+co3x93PP9+FBUfbNUjcjEmhcrkT+8K7ml7V10Jo05mpIEFy1NmCJWx9SIKKt+EjAL4Ez8EBVOB6havuT/rByPvHXK+9zUcfcbb254+9fydJknYnRr1oGfdaiAgpxu1Rx/Rek8KISftx3L+DfsLWAANn8Hvw0/AFeAGO9DFV3c6D+CcWbL8Dj9e7f+T1k8AZv/d7+PXWM/Z+VvdCrIvuAKO09RpEEQJM0Ci6+B4xhTWr4cZNOvhktabw0ta0rSJmqz3Yw5/AKXwenod7cAhTmBSPKf6JBdvH8IP17h95pXqw50/+BFnj88fev4NchyaK47OPhhtI8RFSvAfDSNh0Ck0p2gLxGkib5NJj/JWCr90EWQJvwBzO4AHcgztwAFN1evHPUVGwfXON+0debT1YeGON9Yy9/63X+OguiwmhIhQhD7l4sMqlG3D86Suc3qWZ4rWjI1X7u0Ytw6x3rIMeIOPDprfe2XzNgyj6PahhBjO4C3e6puDgXrdg+/5l948vF3bqwZetZ+z9Rx9zdIY5pInPK4Nk0t+l52xdK2B45Qd87nM8fsD5EfUhIcJcERw4RdqqH7Yde5V7m1vhNmtedkz6EDzUMF/2jJYWbC+4fzzA/Y+/8PPH3j9dcBAPIRP8JLXd5BpAu03aziOL3VVHZzz3CXWDPWd+SH2AnxIqQoTZpo9Ckc6HIrFbAbzNmlcg8Ag8NFDDAhbJvTBZXbC94P7t68EXfv6o+21gUtPETU7bbkLxvNKRFG2+KXzvtObonPP4rBvsgmaKj404DlshFole1Glfh02fE7bYR7dZ82oTewIBGn1Md6CG6YUF26X376oevOLzx95vhUmgblI6LBZwTCDY7vMq0op5WVXgsObOXJ+1x3qaBl9j1FeLxbhU9w1F+Wiba6s1X/TBz1LnUfuYDi4r2C69f1f14BWfP+p+W2GFKuC9phcELMYRRLur9DEZTUdEH+iEqWdaM7X4WOoPGI+ZYD2+wcQ+y+ioHUZ9dTDbArzxmi/bJI9BND0Ynd6lBdve/butBw8+f/T9D3ABa3AG8W3VPX4hBin+bj8dMMmSpp5pg7fJ6xrBFE2WQQEWnV8Qg3FbAWzYfM1rREEnmvkN2o1+acG2d/9u68GDzx91v3mAjb1zkpqT21OipPKO0b9TO5W0nTdOmAQm0TObts3aBKgwARtoPDiCT0gHgwnbArzxmtcLc08HgF1asN0C4Ms/fvD5I+7PhfqyXE/b7RbbrGyRQRT9ARZcwAUmgdoz0ehJ9Fn7QAhUjhDAQSw0bV3T3WbNa59jzmiP6GsWbGXDX2ytjy8+f9T97fiBPq9YeLdBmyuizZHaqXITnXiMUEEVcJ7K4j3BFPurtB4bixW8wTpweL8DC95szWMOqucFYGsWbGU7p3TxxxefP+r+oTVktxY0v5hbq3KiOKYnY8ddJVSBxuMMVffNbxwIOERShst73HZ78DZrHpmJmH3K6sGz0fe3UUj0eyRrSCGTTc+rjVNoGzNSv05srAxUBh8IhqChiQgVNIIBH3AVPnrsnXQZbLTm8ammv8eVXn/vWpaTem5IXRlt+U/LA21zhSb9cye6jcOfCnOwhIAYXAMVTUNV0QhVha9xjgA27ODJbLbmitt3tRN80lqG6N/khgot4ZVlOyO4WNg3OIMzhIZQpUEHieg2im6F91hB3I2tubql6BYNN9Hj5S7G0G2tahslBWKDnOiIvuAEDzakDQKDNFQT6gbn8E2y4BBubM230YIpBnDbMa+y3dx0n1S0BtuG62lCCXwcY0F72T1VRR3t2ONcsmDjbmzNt9RFs2LO2hQNyb022JisaI8rAWuw4HI3FuAIhZdOGIcdjLJvvObqlpqvWTJnnQbyi/1M9O8UxWhBs//H42I0q1Yb/XPGONzcmm+ri172mHKvZBpHkJaNJz6v9jxqiklDj3U4CA2ugpAaYMWqNXsdXbmJNd9egCnJEsphXNM+MnK3m0FCJ5S1kmJpa3DgPVbnQnPGWIDspW9ozbcO4K/9LkfaQO2KHuqlfFXSbdNzcEcwoqNEFE9zcIXu9/6n/ym/BC/C3aJLzEKPuYVlbFnfhZ8kcWxV3dbv4bKl28566wD+8C53aw49lTABp9PWbsB+knfc/Li3eVizf5vv/xmvnPKg5ihwKEwlrcHqucuVcVOxEv8aH37E3ZqpZypUulrHEtIWKUr+txHg+ojZDGlwnqmkGlzcVi1dLiNSJiHjfbRNOPwKpx9TVdTn3K05DBx4psIk4Ei8aCkJahRgffk4YnEXe07T4H2RR1u27E6wfQsBDofUgjFUFnwC2AiVtA+05J2zpiDK2Oa0c5fmAecN1iJzmpqFZxqYBCYhFTCsUNEmUnIcZ6aEA5rQVhEywG6w7HSW02XfOoBlQmjwulOFQAg66SvJblrTEX1YtJ3uG15T/BH1OfOQeuR8g/c0gdpT5fx2SKbs9EfHTKdM8A1GaJRHLVIwhcGyydZsbifAFVKl5EMKNU2Hryo+06BeTgqnxzYjThVySDikbtJPieco75lYfKAJOMEZBTjoITuWHXXZVhcUDIS2hpiXHV9Ku4u44bN5OYLDOkJo8w+xJSMbhBRHEdEs9JZUCkQrPMAvaHyLkxgkEHxiNkx/x2YB0mGsQ8EUWj/stW5YLhtS5SMu+/YBbNPDCkGTUybN8krRLBGPlZkVOA0j+a1+rkyQKWGaPHPLZOkJhioQYnVZ2hS3zVxMtgC46KuRwbJNd9nV2PHgb36F194ecf/Yeu2vAFe5nm/bRBFrnY4BauE8ERmZRFUn0k8hbftiVYSKMEme2dJCJSCGYAlNqh87bXOPdUkGy24P6d1ll21MBqqx48Fvv8ZHH8HZFY7j/uAq1xMJUFqCSUlJPmNbIiNsmwuMs/q9CMtsZsFO6SprzCS1Z7QL8xCQClEelpjTduDMsmWD8S1PT152BtvmIGvUeDA/yRn83u/x0/4qxoPHjx+PXY9pqX9bgMvh/Nz9kpP4pOe1/fYf3axUiMdHLlPpZCNjgtNFAhcHEDxTumNONhHrBduW+vOyY++70WWnPXj98eA4kOt/mj/5E05l9+O4o8ePx67HFqyC+qSSnyselqjZGaVK2TadbFLPWAQ4NBhHqDCCV7OTpo34AlSSylPtIdd2AJZlyzYQrDJ5lcWGNceD80CunPLGGzsfD+7wRb95NevJI5docQ3tgCyr5bGnyaPRlmwNsFELViOOx9loebGNq2moDOKpHLVP5al2cymWHbkfzGXL7kfRl44H9wZy33tvt+PB/Xnf93e+nh5ZlU18wCiRUa9m7kib9LYuOk+hudQNbxwm0AQqbfloimaB2lM5fChex+ylMwuTbfmXQtmWlenZljbdXTLuOxjI/fDDHY4Hjx8/Hrse0zXfPFxbUN1kKqSCCSk50m0Ajtx3ub9XHBKHXESb8iO6E+qGytF4nO0OG3SXzbJlhxBnKtKyl0NwybjvYCD30aMdjgePHz8eu56SVTBbgxJMliQ3Oauwg0QHxXE2Ez/EIReLdQj42Gzb4CLS0YJD9xUx7bsi0vJi5mUbW1QzL0h0PFk17rtiIPfJk52MB48fPx67npJJwyrBa2RCCQRTbGZSPCxTPOiND4G2pYyOQ4h4jINIJh5wFU1NFZt+IsZ59LSnDqBjZ2awbOku+yInunLcd8VA7rNnOxkPHj9+PGY9B0MWJJNozOJmlglvDMXDEozdhQWbgs/U6oBanGzLrdSNNnZFjOkmbi5bNt1lX7JLLhn3vXAg9/h4y/Hg8ePHI9dzQMEkWCgdRfYykYKnkP7D4rIujsujaKPBsB54vE2TS00ccvFY/Tth7JXeq1hz+qgVy04sAJawTsvOknHfCwdyT062HA8eP348Zj0vdoXF4pilKa2BROed+9fyw9rWRXeTFXESMOanvDZfJuJaSXouQdMdDJZtekZcLLvEeK04d8m474UDuaenW44Hjx8/Xns9YYqZpszGWB3AN/4VHw+k7WSFtJ3Qicuqb/NlVmgXWsxh570xg2UwxUw3WfO6B5nOuO8aA7lnZxuPB48fPx6znm1i4bsfcbaptF3zNT78eFPtwi1OaCNOqp1x3zUGcs/PN++AGD1+fMXrSVm2baTtPhPahbPhA71wIHd2bXzRa69nG+3CraTtPivahV/55tXWg8fyRY/9AdsY8VbSdp8V7cKrrgdfM//z6ILQFtJ2nxHtwmuoB4/kf74+gLeRtvvMaBdeSz34+vifx0YG20jbfTa0C6+tHrwe//NmOG0L8EbSdp8R7cLrrQe/996O+ai3ujQOskpTNULa7jOjXXj99eCd8lHvoFiwsbTdZ0a78PrrwTvlo966pLuRtB2fFe3Cm6oHP9kNH/W2FryxtN1nTLvwRurBO+Kj3pWXHidtx2dFu/Bm68Fb81HvykuPlrb7LGkX3mw9eGs+6h1Y8MbSdjegXcguQLjmevDpTQLMxtJ2N6NdyBZu9AbrwVvwUW+LbteULUpCdqm0HTelXbhNPe8G68Gb8lFvVfYfSNuxvrTdTWoXbozAzdaDZzfkorOj1oxVxlIMlpSIlpLrt8D4hrQL17z+c3h6hU/wv4Q/utps4+bm+6P/hIcf0JwQ5oQGPBL0eKPTYEXTW+eL/2DKn73J9BTXYANG57hz1cEMviVf/4tf5b/6C5pTQkMIWoAq7hTpOJjtAM4pxKu5vg5vXeUrtI09/Mo/5H+4z+Mp5xULh7cEm2QbRP2tFIKR7WM3fPf/jZ3SWCqLM2l4NxID5zB72HQXv3jj/8mLR5xXNA5v8EbFQEz7PpRfl1+MB/hlAN65qgDn3wTgH13hK7T59bmP+NIx1SHHU84nLOITt3iVz8mNO+lPrjGAnBFqmioNn1mTyk1ta47R6d4MrX7tjrnjYUpdUbv2rVr6YpVfsGG58AG8Ah9eyUN8CX4WfgV+G8LVWPDGb+Zd4cU584CtqSbMKxauxTg+dyn/LkVgA+IR8KHtejeFKRtTmLLpxN6mYVLjYxwXf5x2VofiZcp/lwKk4wGOpYDnoIZPdg/AAbwMfx0+ge9dgZvYjuqKe4HnGnykYo5TvJbG0Vj12JagRhwKa44H95ShkZa5RyLGGdfYvG7aw1TsF6iapPAS29mNS3NmsTQZCmgTzFwgL3upCTgtBTRwvGMAKrgLn4evwin8+afJRcff+8izUGUM63GOOuAs3tJkw7J4kyoNreqrpO6cYLQeFUd7TTpr5YOTLc9RUUogUOVJQ1GYJaFLAW0oTmKyYS46ZooP4S4EON3xQ5zC8/CX4CnM4c1PE8ApexpoYuzqlP3d4S3OJP8ZDK7cKWNaTlqmgDiiHwl1YsE41w1zT4iRTm3DBqxvOUsbMKKDa/EHxagtnta072ejc3DOIh5ojvh8l3tk1JF/AV6FU6jh3U8HwEazLgdCLYSQ+MYiAI2ltomkzttUb0gGHdSUUgsIYjTzLG3mObX4FBRaYtpDVNZrih9TgTeYOBxsEnN1gOCTM8Bsw/ieMc75w9kuAT6A+/AiHGvN/+Gn4KRkiuzpNNDYhDGFndWRpE6SVfm8U5bxnSgVV2jrg6JCKmneqey8VMFgq2+AM/i4L4RUbfSi27lNXZ7R7W9RTcq/q9fk4Xw3AMQd4I5ifAZz8FcVtm9SAom/dyN4lczJQW/kC42ZrHgcCoIf1oVMKkVItmMBi9cOeNHGLqOZk+QqQmrbc5YmYgxELUUN35z2iohstgfLIFmcMV7s4CFmI74L9+EFmGsi+tGnAOD4Yk9gIpo01Y4cA43BWGygMdr4YZekG3OBIUXXNukvJS8tqa06e+lSDCtnqqMFu6hWHXCF+WaYt64m9QBmNxi7Ioy7D+fa1yHw+FMAcPt7SysFLtoG4PXAk7JOA3aAxBRqUiAdU9Yp5lK3HLSRFtOim0sa8euEt08xvKjYjzeJ2GU7YawexrnKI9tmobInjFXCewpwriY9+RR4aaezFhMhGCppKwom0ChrgFlKzyPKkGlTW1YQrE9HJqu8hKGgMc6hVi5QRq0PZxNfrYNgE64utmRv6KKHRpxf6VDUaOvNP5jCEx5q185My/7RKz69UQu2im5k4/eownpxZxNLwiZ1AZTO2ZjWjkU9uaB2HFn6Q3u0JcsSx/qV9hTEApRzeBLDJQXxYmTnq7bdLa3+uqFrxLJ5w1TehnNHx5ECvCh2g2c3hHH5YsfdaSKddztfjQ6imKFGSyFwlLzxEGPp6r5IevVjk1AMx3wMqi1NxDVjLBiPs9tbsCkIY5we5/ML22zrCScFxnNtzsr9Wcc3CnD+pYO+4VXXiDE0oc/vQQ/fDK3oPESJMYXNmJa/DuloJZkcTpcYE8lIH8Dz8DJMiynNC86Mb2lNaaqP/+L7f2fcE/yP7/Lde8xfgSOdMxvOixZf/9p3+M4hT1+F+zApxg9XfUvYjc8qX2lfOOpK2gNRtB4flpFu9FTKCp2XJRgXnX6olp1zyYjTKJSkGmLE2NjUr1bxFM4AeAAHBUFIeSLqXR+NvH/M9fOnfHzOD2vCSyQJKzfgsCh+yi/Mmc35F2fUrw7miW33W9hBD1vpuUojFphIyvg7aTeoymDkIkeW3XLHmguMzbIAJejN6B5MDrhipE2y6SoFRO/AK/AcHHZHNIfiWrEe/C6cr3f/yOvrQKB+zMM55/GQdLDsR+ifr5Fiuu+/y+M78LzOE5dsNuXC3PYvYWd8NXvphLSkJIasrlD2/HOqQ+RjcRdjKTGWYhhVUm4yxlyiGPuMsZR7sMCHUBeTuNWA7if+ifXgc/hovftHXs/DV+Fvwe+f8shzMiMcweFgBly3//vwJfg5AN4450fn1Hd1Rm1aBLu22Dy3y3H2+OqMemkbGZ4jozcDjJf6596xOLpC0eMTHbKnxLxH27uZ/bMTGs2jOaMOY4m87CfQwF0dw53oa1k80JRuz/XgS+8fX3N9Af4qPIMfzKgCp4H5TDGe9GGeFPzSsZz80SlPTxXjgwJmC45njzgt2vbQ4b4OAdUK4/vWhO8d8v6EE8fMUsfakXbPpFJeLs2ubM/qdm/la3WP91uWhxXHjoWhyRUq2iJ/+5mA73zwIIo+LoZ/SgvIRjAd1IMvvn98PfgOvAJfhhm8scAKVWDuaRaK8aQ9f7vuPDH6Bj47ZXau7rqYJ66mTDwEDU6lLbCjCK0qTXyl5mnDoeNRxanj3FJbaksTk0faXxHxLrssgPkWB9LnA/MFleXcJozzjwsUvUG0X/QCve51qkMDXp9mtcyOy3rwBfdvVJK7D6/ACSzg3RoruIq5UDeESfEmVclDxnniU82vxMLtceD0hGZWzBNPMM/jSPne2OVatiTKUpY5vY7gc0LdUAWeWM5tH+O2I66AOWw9xT2BuyRVLGdoDHUsVRXOo/c+ZdRXvFfnxWyIV4upFLCl9eAL7h8Zv0QH8Ry8pA2cHzQpGesctVA37ZtklBTgHjyvdSeKY/RZw/kJMk0Y25cSNRWSigQtlULPTw+kzuJPeYEkXjQRpoGZobYsLF79pyd1dMRHInbgFTZqNLhDqiIsTNpoex2WLcy0/X6rHcdMMQvFSd5dWA++4P7xv89deACnmr36uGlL69bRCL6BSZsS6c0TU2TKK5gtWCzgAOOwQcurqk9j8whvziZSMLcq5hbuwBEsYjopUBkqw1yYBGpLA97SRElEmx5MCInBY5vgLk94iKqSWmhIGmkJ4Bi9m4L645J68LyY4wsFYBfUg5feP/6gWWm58IEmKQM89hq7KsZNaKtP5TxxrUZZVkNmMJtjbKrGxLNEbHPJxhqy7lAmbC32ZqeF6lTaknRWcYaFpfLUBh/rwaQycCCJmW15Kstv6jRHyJFry2C1ahkkIW0LO75s61+owxK1y3XqweX9m5YLM2DPFeOjn/iiqCKJ+yKXF8t5Yl/kNsqaSCryxPq5xWTFIaP8KSW0RYxqupaUf0RcTNSSdJZGcKYdYA6kdtrtmyBckfKXwqk0pHpUHlwWaffjNRBYFPUDWa8e3Lt/o0R0CdisKDM89cX0pvRHEfM8ca4t0s2Xx4kgo91MPQJ/0c9MQYq0co8MBh7bz1fio0UUHLR4aAIOvOmoYO6kwlEVODSSTliWtOtH6sPkrtctF9ZtJ9GIerBskvhdVS5cFNv9s1BU0AbdUgdK4FG+dRnjFmDTzniRMdZO1QhzMK355vigbdkpz9P6qjUGE5J2qAcXmwJ20cZUiAD0z+pGMx6xkzJkmEf40Hr4qZfVg2XzF9YOyoV5BjzVkUJngKf8lgNYwKECEHrCNDrWZzMlflS3yBhr/InyoUgBc/lKT4pxVrrC6g1YwcceK3BmNxZcAtz3j5EIpqguh9H6wc011YN75cKDLpFDxuwkrPQmUwW4KTbj9mZTwBwLq4aQMUZbHm1rylJ46dzR0dua2n3RYCWZsiHROeywyJGR7mXKlpryyCiouY56sFkBWEnkEB/raeh/Sw4162KeuAxMQpEkzy5alMY5wamMsWKKrtW2WpEWNnReZWONKWjrdsKZarpFjqCslq773PLmEhM448Pc3+FKr1+94vv/rfw4tEcu+lKTBe4kZSdijBrykwv9vbCMPcLQTygBjzVckSLPRVGslqdunwJ4oegtFOYb4SwxNgWLCmD7T9kVjTv5YDgpo0XBmN34Z/rEHp0sgyz7lngsrm4lvMm2Mr1zNOJYJ5cuxuQxwMGJq/TP5emlb8fsQBZviK4t8hFL+zbhtlpwaRSxQRWfeETjuauPsdGxsBVdO7nmP4xvzSoT29pRl7kGqz+k26B3Oy0YNV+SXbbQas1ctC/GarskRdFpKczVAF1ZXnLcpaMuzVe6lZ2g/1ndcvOVgRG3sdUAY1bKD6achijMPdMxV4muKVorSpiDHituH7rSTs7n/4y5DhRXo4FVBN4vO/zbAcxhENzGbHCzU/98Mcx5e7a31kWjw9FCe/zNeYyQjZsWb1uc7U33pN4Mji6hCLhivqfa9Ss6xLg031AgfesA/l99m9fgvnaF9JoE6bYKmkGNK3aPbHB96w3+DnxFm4hs0drLsk7U8kf/N/CvwQNtllna0rjq61sH8L80HAuvwH1tvBy2ChqWSCaYTaGN19sTvlfzFD6n+iKTbvtayfrfe9ueWh6GJFoxLdr7V72a5ZpvHcCPDzma0wTO4EgbLyedxstO81n57LYBOBzyfsOhUKsW1J1BB5vr/tz8RyqOFylQP9Tvst2JALsC5lsH8PyQ40DV4ANzYa4dedNiKNR1s+x2wwbR7q4/4cTxqEk4LWDebfisuo36JXLiWFjOtLrlNWh3K1rRS4xvHcDNlFnNmWBBAl5SWaL3oPOfnvbr5pdjVnEaeBJSYjuLEkyLLsWhKccadmOphZkOPgVdalj2QpSmfOsADhMWE2ZBu4+EEJI4wKTAuCoC4xwQbWXBltpxbjkXJtKxxabo9e7tyhlgb6gNlSbUpMh+l/FaqzVwewGu8BW1Zx7pTpQDJUjb8tsUTW6+GDXbMn3mLbXlXJiGdggxFAoUrtPS3wE4Nk02UZG2OOzlk7fRs7i95QCLo3E0jtrjnM7SR3uS1p4qtS2nJ5OwtQVHgOvArLBFijZUV9QtSl8dAY5d0E0hM0w3HS2DpIeB6m/A1+HfhJcGUq4sOxH+x3f5+VO+Ds9rYNI7zPXOYWPrtf8bYMx6fuOAX5jzNR0PdsuON+X1f7EERxMJJoU6GkTEWBvVolVlb5lh3tKCg6Wx1IbaMDdJ+9sUCc5KC46hKGCk3IVOS4TCqdBNfUs7Kd4iXf2RjnT/LLysJy3XDcHLh/vde3x8DoGvwgsa67vBk91G5Pe/HbOe7xwym0NXbtiuuDkGO2IJDh9oQvJ4cY4vdoqLDuoH9Zl2F/ofsekn8lkuhIlhQcffUtSjytFyp++p6NiE7Rqx/lodgKVoceEp/CP4FfjrquZaTtj2AvH5K/ywpn7M34K/SsoYDAdIN448I1/0/wveW289T1/lX5xBzc8N5IaHr0XMOQdHsIkDuJFifj20pBm5jzwUv9e2FhwRsvhAbalCIuIw3bhJihY3p6nTFFIZgiSYjfTf3aXuOjmeGn4bPoGvwl+CFzTRczBIuHBEeImHc37/lGfwZR0cXzVDOvaKfNHvwe+suZ771K/y/XcBlsoN996JpBhoE2toYxOznNEOS5TJc6Id5GEXLjrWo+LEWGNpPDU4WAwsIRROu+1vM+0oW37z/MBN9kqHnSArwPfgFJ7Cq/Ai3Ie7g7ncmI09v8sjzw9mzOAEXoIHxURueaAce5V80f/DOuuZwHM8vsMb5wBzOFWM7wymTXPAEvm4vcFpZ2ut0VZRjkiP2MlmLd6DIpbGSiHOjdnUHN90hRYmhTnmvhzp1iKDNj+b7t5hi79lWGwQ+HN9RsfFMy0FXbEwhfuczKgCbyxYwBmcFhhvo/7a44v+i3XWcwDP86PzpGQYdWh7csP5dBvZ1jNzdxC8pBGuxqSW5vw40nBpj5JhMwvOzN0RWqERHMr4Lv1kWX84xLR830G3j6yqZ1a8UstTlW+qJPOZ+sZ7xZPKTJLhiNOAFd6tk+jrTH31ncLOxid8+nzRb128HhUcru/y0Wn6iT254YPC6FtVSIMoW2sk727AhvTtrWKZTvgsmckfXYZWeNRXx/3YQ2OUxLDrbHtN11IwrgXT6c8dATDwLniYwxzO4RzuQqTKSC5gAofMZ1QBK3zQ4JWobFbcvJm87FK+6JXrKahLn54m3p+McXzzYtP8VF/QpJuh1OwieElEoI1pRxPS09FBrkq2tWCU59+HdhNtTIqKm8EBrw2RTOEDpG3IKo2Y7mFdLm3ZeVjYwVw11o/oznceMve4CgMfNym/utA/d/ILMR7gpXzRy9eDsgLcgbs8O2Va1L0zzIdwGGemTBuwROHeoMShkUc7P+ISY3KH5ZZeWqO8mFTxQYeXTNuzvvK5FGPdQfuu00DwYFY9dyhctEt+OJDdnucfpmyhzUJzfsJjr29l8S0bXBfwRS9ZT26tmMIdZucch5ZboMz3Nio3nIOsYHCGoDT4kUA9MiXEp9Xsui1S8th/kbWIrMBxDGLodWUQIWcvnXy+9M23xPiSMOiRPqM+YMXkUN3gXFrZJwXGzUaMpJfyRS9ZT0lPe8TpScuRlbMHeUmlaKDoNuy62iWNTWNFYjoxFzuJs8oR+RhRx7O4SVNSXpa0ZJQ0K1LAHDQ+D9IepkMXpcsq5EVCvClBUIzDhDoyKwDw1Lc59GbTeORivugw1IcuaEOaGWdNm+Ps5fQ7/tm0DjMegq3yM3vb5j12qUId5UZD2oxDSEWOZMSqFl/W+5oynWDa/aI04tJRQ2eTXusg86SQVu/nwSYwpW6wLjlqIzwLuxGIvoAvul0PS+ZNz0/akp/pniO/8JDnGyaCkzbhl6YcqmK/69prxPqtpx2+Km9al9sjL+rwMgHw4jE/C8/HQ3m1vBuL1fldbzd8mOueVJ92syqdEY4KJjSCde3mcRw2TA6szxedn+zwhZMps0XrqEsiUjnC1hw0TELC2Ek7uAAdzcheXv1BYLagspxpzSAoZZUsIzIq35MnFQ9DOrlNB30jq3L4pkhccKUAA8/ocvN1Rzx9QyOtERs4CVsJRK/DF71kPYrxYsGsm6RMh4cps5g1DOmM54Ly1ii0Hd3Y/BMk8VWFgBVmhqrkJCPBHAolwZaWzLR9Vb7bcWdX9NyUYE+uB2BKfuaeBUcjDljbYVY4DdtsVWvzRZdWnyUzDpjNl1Du3aloAjVJTNDpcIOVVhrHFF66lLfJL1zJr9PQ2nFJSBaKoDe+sAvLufZVHVzYh7W0h/c6AAZ+7Tvj6q9j68G/cTCS/3n1vLKHZwNi+P+pS0WkZNMBMUl+LDLuiE4omZy71r3UFMwNJV+VJ/GC5ixVUkBStsT4gGKh0Gm4Oy3qvq7Lbmq24nPdDuDR9deR11XzP4vFu3TYzfnIyiSVmgizUYGqkIXNdKTY9pgb9D2Ix5t0+NHkVzCdU03suWkkVZAoCONCn0T35gAeW38de43mf97sMOpSvj4aa1KYUm58USI7Wxxes03bAZdRzk6UtbzMaCQ6IxO0dy7X+XsjoD16hpsBeGz9dfzHj+R/Hp8nCxZRqkEDTaCKCSywjiaoMJ1TITE9eg7Jqnq8HL6gDwiZb0u0V0Rr/rmvqjxKuaLCX7ZWXTvAY+uvm3z8CP7nzVpngqrJpZKwWnCUjIviYVlirlGOzPLI3SMVyp/elvBUjjDkNhrtufFFErQ8pmdSlbK16toBHlt/HV8uHMX/vEGALkV3RJREiSlopxwdMXOZPLZ+ix+kAHpMKIk8UtE1ygtquttwxNhphrIZ1IBzjGF3IIGxGcBj6q8bHJBG8T9vdsoWrTFEuebEZuVxhhClH6P5Zo89OG9fwHNjtNQTpD0TG9PJLEYqvEY6Rlxy+ZZGfL0Aj62/bnQCXp//eeM4KzfQVJbgMQbUjlMFIm6TpcfWlZje7NBSV6IsEVmumWIbjiloUzQX9OzYdo8L1wjw2PrrpimONfmfNyzKklrgnEkSzT5QWYQW40YShyzqsRmMXbvVxKtGuYyMKaU1ugenLDm5Ily4iT14fP11Mx+xJv+zZ3MvnfdFqxU3a1W/FTB4m3Qfsyc1XUcdVhDeUDZXSFHHLQj/Y5jtC7ZqM0CXGwB4bP11i3LhOvzPGygYtiUBiwQV/4wFO0majijGsafHyRLu0yG6q35cL1rOpVxr2s5cM2jJYMCdc10Aj6q/blRpWJ//+dmm5psMl0KA2+AFRx9jMe2WbC4jQxnikd4DU8TwUjRVacgdlhmr3bpddzuJ9zXqr2xnxJfzP29RexdtjDVZqzkqa6PyvcojGrfkXiJ8SEtml/nYskicv0ivlxbqjemwUjMw5evdg8fUX9nOiC/lf94Q2i7MURk9nW1MSj5j8eAyV6y5CN2S6qbnw3vdA1Iwq+XOSCl663udN3IzLnrt+us25cI1+Z83SXQUldqQq0b5XOT17bGpLd6ssN1VMPf8c+jG8L3NeCnMdF+Ra3fRa9dft39/LuZ/3vwHoHrqGmQFafmiQw6eyzMxS05K4bL9uA+SKUQzCnSDkqOGokXyJvbgJ/BHI+qvY69//4rl20NsmK2ou2dTsyIALv/91/8n3P2Aao71WFGi8KKv1fRC5+J67Q/507/E/SOshqN5TsmYIjVt+kcjAx98iz/4SaojbIV1rexE7/C29HcYD/DX4a0rBOF5VTu7omsb11L/AWcVlcVZHSsqGuXLLp9ha8I//w3Mv+T4Ew7nTBsmgapoCrNFObIcN4pf/Ob/mrvHTGqqgAupL8qWjWPS9m/31jAe4DjA+4+uCoQoT/zOzlrNd3qd4SdphFxsUvYwGWbTWtISc3wNOWH+kHBMfc6kpmpwPgHWwqaSUG2ZWWheYOGQGaHB+eQ/kn6b3pOgLV+ODSn94wDvr8Bvb70/LLuiPPEr8OGVWfDmr45PZyccEmsVXZGe1pRNX9SU5+AVQkNTIVPCHF/jGmyDC9j4R9LfWcQvfiETmgMMUCMN1uNCakkweZsowdYobiMSlnKA93u7NzTXlSfe+SVbfnPQXmg9LpYAQxpwEtONyEyaueWM4FPjjyjG3uOaFmBTWDNgBXGEiQpsaWhnAqIijB07Dlsy3fUGeP989xbWkyf+FF2SNEtT1E0f4DYYVlxFlbaSMPIRMk/3iMU5pME2SIWJvjckciebkQuIRRyhUvkHg/iUljG5kzVog5hV7vIlCuBrmlhvgPfNHQM8lCf+FEGsYbMIBC0qC9a0uuy2wLXVbLBaP5kjHokCRxapkQyzI4QEcwgYHRZBp+XEFTqXFuNVzMtjXLJgX4gAid24Hjwc4N3dtVSe+NNiwTrzH4WVUOlDobUqr1FuAgYllc8pmzoVrELRHSIW8ViPxNy4xwjBpyR55I6J220qQTZYR4guvUICJiSpr9gFFle4RcF/OMB7BRiX8sSfhpNSO3lvEZCQfLUVTKT78Ek1LRLhWN+yLyTnp8qWUZ46b6vxdRGXfHVqx3eI75YaLa4iNNiK4NOW7wPW6lhbSOF9/M9qw8e/aoB3d156qTzxp8pXx5BKAsYSTOIIiPkp68GmTq7sZtvyzBQaRLNxIZ+paozHWoLFeExIhRBrWitHCAHrCF7/thhD8JhYz84wg93QRV88wLuLY8zF8sQ36qF1J455bOlgnELfshKVxYOXKVuKx0jaj22sczTQqPqtV/XDgpswmGTWWMSDw3ssyUunLLrVPGjYRsH5ggHeHSWiV8kT33ycFSfMgkoOK8apCye0J6VW6GOYvffgU9RWsukEi2kUV2nl4dOYUzRik9p7bcA4ggdJ53LxKcEe17B1R8eqAd7dOepV8sTXf5lhejoL85hUdhDdknPtKHFhljOT+bdq0hxbm35p2nc8+Ja1Iw+tJykgp0EWuAAZYwMVwac5KzYMslhvgHdHRrxKnvhTYcfKsxTxtTETkjHO7rr3zjoV25lAQHrqpV7bTiy2aXMmUhTBnKS91jhtR3GEoF0oLnWhWNnYgtcc4N0FxlcgT7yz3TgNIKkscx9jtV1ZKpWW+Ub1tc1eOv5ucdgpx+FJy9pgbLE7xDyXb/f+hLHVGeitHOi6A7ybo3sF8sS7w7cgdk0nJaOn3hLj3uyD0Zp5pazFIUXUpuTTU18d1EPkDoX8SkmWTnVIozEdbTcZjoqxhNHf1JrSS/AcvHjZ/SMHhL/7i5z+POsTUh/8BvNfYMTA8n+yU/MlTZxSJDRStqvEuLQKWwDctMTQogUDyQRoTQG5Kc6oQRE1yV1jCA7ri7jdZyK0sYTRjCR0Hnnd+y7nHxNgTULqw+8wj0mQKxpYvhjm9uSUxg+TTy7s2GtLUGcywhXSKZN275GsqlclX90J6bRI1aouxmgL7Q0Nen5ziM80SqMIo8cSOo+8XplT/5DHNWsSUr/6lLN/QQ3rDyzLruEW5enpf7KqZoShEduuSFOV7DLX7Ye+GmXb6/hnNNqKsVXuMDFpb9Y9eH3C6NGEzuOuI3gpMH/I6e+zDiH1fXi15t3vA1czsLws0TGEtmPEJdiiFPwlwKbgLHAFk4P6ZyPdymYYHGE0dutsChQBl2JcBFlrEkY/N5bQeXQ18gjunuMfMfsBlxJSx3niO485fwO4fGD5T/+3fPQqkneWVdwnw/3bMPkW9Wbqg+iC765Zk+xcT98ibKZc2EdgHcLoF8cSOo/Oc8fS+OyEULF4g4sJqXVcmfMfsc7A8v1/yfGXmL9I6Fn5pRwZhsPv0TxFNlAfZCvG+Oohi82UC5f/2IsJo0cTOm9YrDoKhFPEUr/LBYTUNht9zelHXDqwfPCIw4owp3mOcIQcLttWXFe3VZ/j5H3cIc0G6oPbCR+6Y2xF2EC5cGUm6wKC5tGEzhsWqw5hNidUiKX5gFWE1GXh4/Qplw4sVzOmx9QxU78g3EF6wnZlEN4FzJ1QPSLEZz1KfXC7vd8ssGdIbNUYpVx4UapyFUHzJoTOo1McSkeNn1M5MDQfs4qQuhhX5vQZFw8suwWTcyYTgioISk2YdmkhehG4PkE7w51inyAGGaU+uCXADabGzJR1fn3lwkty0asIo8cROm9Vy1g0yDxxtPvHDAmpu+PKnM8Ix1wwsGw91YJqhteaWgjYBmmQiebmSpwKKzE19hx7jkzSWOm66oPbzZ8Yj6kxVSpYjVAuvLzYMCRo3oTQecOOjjgi3NQ4l9K5/hOGhNTdcWVOTrlgYNkEXINbpCkBRyqhp+LdRB3g0OU6rMfW2HPCFFMV9nSp+uB2woepdbLBuJQyaw/ZFysXrlXwHxI0b0LovEkiOpXGA1Ijagf+KUNC6rKNa9bQnLFqYNkEnMc1uJrg2u64ELPBHpkgWbmwKpJoDhMwNbbGzAp7Yg31wS2T5rGtzit59PrKhesWG550CZpHEzpv2NGRaxlNjbMqpmEIzygJqQfjypycs2pg2cS2RY9r8HUqkqdEgKTWtWTKoRvOBPDYBltja2SO0RGjy9UHtxwRjA11ujbKF+ti5cIR9eCnxUg6owidtyoU5tK4NLji5Q3HCtiyF2IqLGYsHViOXTXOYxucDqG0HyttqYAKqYo3KTY1ekyDXRAm2AWh9JmsVh/ccg9WJ2E8YjG201sPq5ULxxX8n3XLXuMInbft2mk80rRGjCGctJ8/GFdmEQ9Ug4FlE1ll1Y7jtiraqm5Fe04VV8lvSVBL8hiPrfFVd8+7QH3Qbu2ipTVi8cvSGivc9cj8yvH11YMHdNSERtuOslM97feYFOPKzGcsI4zW0YGAbTAOaxCnxdfiYUmVWslxiIblCeAYr9VYR1gM7GmoPrilunSxxeT3DN/2eBQ9H11+nk1adn6VK71+5+Jfct4/el10/7KBZfNryUunWSCPxPECk1rdOv1WVSrQmpC+Tl46YD3ikQYcpunSQgzVB2VHFhxHVGKDgMEY5GLlQnP7FMDzw7IacAWnO6sBr12u+XanW2AO0wQ8pknnFhsL7KYIqhkEPmEXFkwaN5KQphbkUmG72wgw7WSm9RiL9QT925hkjiVIIhphFS9HKI6/8QAjlpXqg9W2C0apyaVDwKQwrwLY3j6ADR13ZyUNByQXHQu6RY09Hu6zMqXRaNZGS/KEJs0cJEe9VH1QdvBSJv9h09eiRmy0V2uJcqHcShcdvbSNg5fxkenkVprXM9rDVnX24/y9MVtncvbKY706anNl3ASll9a43UiacVquXGhvq4s2FP62NGKfQLIQYu9q1WmdMfmUrDGt8eDS0cXozH/fjmUH6Jruvm50hBDSaEU/2Ru2LEN/dl006TSc/g7tfJERxGMsgDUEr104pfWH9lQaN+M4KWQjwZbVc2rZVNHsyHal23wZtIs2JJqtIc/WLXXRFCpJkfE9jvWlfFbsNQ9pP5ZBS0zKh4R0aMFj1IjTcTnvi0Zz2rt7NdvQb2mgbju1plsH8MmbnEk7KbK0b+wC2iy3aX3szW8xeZvDwET6hWZYwqTXSSG+wMETKum0Dq/q+x62gt2ua2ppAo309TRk9TPazfV3qL9H8z7uhGqGqxNVg/FKx0HBl9OVUORn8Q8Jx9gFttGQUDr3tzcXX9xGgN0EpzN9mdZ3GATtPhL+CjxFDmkeEU6x56kqZRusLzALXVqkCN7zMEcqwjmywDQ6OhyUe0Xao1Qpyncrg6wKp9XfWDsaZplElvQ/b3sdweeghorwBDlHzgk1JmMc/wiERICVy2VJFdMjFuLQSp3S0W3+sngt2njwNgLssFGVQdJ0tu0KH4ky1LW4yrbkuaA6Iy9oz/qEMMXMMDWyIHhsAyFZc2peV9hc7kiKvfULxCl9iddfRK1f8kk9qvbdOoBtOg7ZkOZ5MsGrSHsokgLXUp9y88smniwWyuFSIRVmjplga3yD8Uij5QS1ZiM4U3Qw5QlSm2bXjFe6jzzBFtpg+/YBbLAWG7OPynNjlCw65fukGNdkJRf7yM1fOxVzbxOJVocFoYIaGwH22mIQkrvu1E2nGuebxIgW9U9TSiukPGU+Lt++c3DJPKhyhEEbXCQLUpae2exiKy6tMPe9mDRBFCEMTWrtwxN8qvuGnt6MoihKWS5NSyBhbH8StXoAz8PLOrRgLtOT/+4vcu+7vDLnqNvztOq7fmd8sMmY9Xzn1zj8Dq8+XVdu2Nv0IIySgEdQo3xVHps3Q5i3fLFsV4aiqzAiBhbgMDEd1uh8qZZ+lwhjkgokkOIv4xNJmyncdfUUzgB4oFMBtiu71Xumpz/P+cfUP+SlwFExwWW62r7b+LSPxqxn/gvMZ5z9C16t15UbNlq+jbGJtco7p8wbYlL4alSyfWdeuu0j7JA3JFNuVAwtst7F7FhWBbPFNKIUORndWtLraFLmMu7KFVDDOzqkeaiN33YAW/r76wR4XDN/yN1z7hejPau06EddkS/6XThfcz1fI/4K736fO48vlxt2PXJYFaeUkFS8U15XE3428xdtn2kc8GQlf1vkIaNRRnOMvLTWrZbElEHeLWi1o0dlKPAh1MVgbbVquPJ5+Cr8LU5/H/+I2QlHIU2ClXM9G8v7Rr7oc/hozfUUgsPnb3D+I+7WF8kNO92GY0SNvuxiE+2Bt8prVJTkzE64sfOstxuwfxUUoyk8VjcTlsqe2qITSFoSj6Epd4KsT6BZOWmtgE3hBfir8IzZDwgV4ZTZvD8VvPHERo8v+vL1DASHTz/i9OlKueHDjK5Rnx/JB1Vb1ioXdBra16dmt7dgik10yA/FwJSVY6XjA3oy4SqM2frqDPPSRMex9qs3XQtoWxMj7/Er8GWYsXgjaVz4OYumP2+9kbxvny/6kvWsEBw+fcb5bInc8APdhpOSs01tEqIkoiZjbAqKMruLbJYddHuHFRIyJcbdEdbl2sVLaySygunutBg96Y2/JjKRCdyHV+AEFtTvIpbKIXOamknYSiB6KV/0JetZITgcjjk5ZdaskBtWO86UF0ap6ozGXJk2WNiRUlCPFir66lzdm/SLSuK7EUdPz8f1z29Skq6F1fXg8+5UVR6bszncP4Tn4KUkkdJ8UFCY1zR1i8RmL/qQL3rlei4THG7OODlnKko4oI01kd3CaM08Ia18kC3GNoVaO9iDh+hWxSyTXFABXoau7Q6q9OxYg/OVEMw6jdbtSrJ9cBcewGmaZmg+bvkUnUUaGr+ZfnMH45Ivevl61hMcXsxYLFTu1hTm2zViCp7u0o5l+2PSUh9bDj6FgYypufBDhqK2+oXkiuHFHR3zfj+9PtA8oR0xnqX8qn+sx3bFODSbbF0X8EUvWQ8jBIcjo5bRmLOljDNtcqNtOe756h3l0VhKa9hDd2l1eqmsnh0MNMT/Cqnx6BInumhLT8luljzQ53RiJeA/0dxe5NK0o2fA1+GLXr6eNQWHNUOJssQaTRlGpLHKL9fD+IrQzTOMZS9fNQD4AnRNVxvTdjC+fJdcDDWQcyB00B0t9BDwTxXgaAfzDZ/DBXzRnfWMFRwuNqocOmX6OKNkY63h5n/fFcB28McVHqnXZVI27K0i4rDLNE9lDKV/rT+udVbD8dFFu2GGZ8mOt0kAXcoX3ZkIWVtw+MNf5NjR2FbivROHmhV1/pj2egv/fMGIOWTIWrV3Av8N9imV9IWml36H6cUjqEWNv9aNc+veb2sH46PRaHSuMBxvtW+twxctq0z+QsHhux8Q7rCY4Ct8lqsx7c6Sy0dl5T89rIeEuZKoVctIk1hNpfavER6yyH1Vvm3MbsUHy4ab4hWr/OZPcsRBphnaV65/ZcdYPNNwsjN/djlf9NqCw9U5ExCPcdhKxUgLSmfROpLp4WSUr8ojdwbncbvCf+a/YzRaEc6QOvXcGO256TXc5Lab9POvB+AWY7PigWYjzhifbovuunzRawsO24ZqQQAqguBtmpmPB7ysXJfyDDaV/aPGillgz1MdQg4u5MYaEtBNNHFjkRlSpd65lp4hd2AVPTfbV7FGpyIOfmNc/XVsPfg7vzaS/3nkvLL593ANLvMuRMGpQIhiF7kUEW9QDpAUbTWYBcbp4WpacHHY1aacqQyjGZS9HI3yCBT9kUZJhVOD+zUDvEH9ddR11fzPcTDQ5TlgB0KwqdXSavk9BC0pKp0WmcuowSw07VXmXC5guzSa4p0UvRw2lbDiYUx0ExJJRzWzi6Gm8cnEkfXXsdcG/M/jAJa0+bmCgdmQ9CYlNlSYZOKixmRsgiFxkrmW4l3KdFKv1DM8tk6WxPYJZhUUzcd8Kdtgrw/gkfXXDT7+avmfVak32qhtkg6NVdUS5wgkru1YzIkSduTW1FDwVWV3JQVJVuieTc0y4iDpFwc7/BvSalvKdQM8sv662cevz/+8sQVnjVAT0W2wLllw1JiMhJRxgDjCjLQsOzSFSgZqx7lAW1JW0e03yAD3asC+GD3NbQhbe+mN5GXH1F83KDOM4n/e5JIuH4NpdQARrFPBVptUNcjj4cVMcFSRTE2NpR1LEYbYMmfWpXgP9KejaPsLUhuvLCsVXznAG9dfx9SR1ud/3hZdCLHb1GMdPqRJgqDmm76mHbvOXDtiO2QPUcKo/TWkQ0i2JFXpBoo7vij1i1Lp3ADAo+qvG3V0rM//vFnnTE4hxd5Ka/Cor5YEdsLVJyKtDgVoHgtW11pWSjolPNMnrlrVj9Fv2Qn60twMwKPqr+N/wvr8z5tZcDsDrv06tkqyzESM85Ycv6XBWA2birlNCXrI6VbD2lx2L0vQO0QVTVVLH4SE67fgsfVXv8n7sz7/85Z7cMtbE6f088wSaR4kCkCm10s6pKbJhfqiUNGLq+0gLWC6eUAZFPnLjwqtKd8EwGvWX59t7iPW4X/eAN1svgRVSY990YZg06BD1ohLMtyFTI4pKTJsS9xREq9EOaPWiO2gpms7397x6nQJkbh+Fz2q/rqRROX6/M8bJrqlVW4l6JEptKeUFuMYUbtCQ7CIttpGc6MY93x1r1vgAnRXvY5cvwWPqb9uWQm+lP95QxdNMeWhOq1x0Db55C7GcUv2ZUuN6n8iKzsvOxibC//Yfs9Na8r2Rlz02vXXDT57FP/zJi66/EJSmsJKa8QxnoqW3VLQ+jZVUtJwJ8PNX1NQCwfNgdhhHD9on7PdRdrdGPF28rJr1F+3LBdeyv+8yYfLoMYet1vX4upNAjVvwOUWnlNXJXlkzk5Il6kqeoiL0C07qno+/CYBXq/+utlnsz7/Mzvy0tmI4zm4ag23PRN3t/CWryoUVJGm+5+K8RJ0V8Hc88/XHUX/HfiAq7t+BH+x6v8t438enWmdJwFA6ZINriLGKv/95f8lT9/FnyA1NMVEvQyaXuu+gz36f/DD73E4pwqpLcvm/o0Vle78n//+L/NPvoefp1pTJye6e4A/D082FERa5/opeH9zpvh13cNm19/4v/LDe5xMWTi8I0Ta0qKlK27AS/v3/r+/x/2GO9K2c7kVMonDpq7//jc5PKCxeNPpFVzaRr01wF8C4Pu76hXuX18H4LduTr79guuFD3n5BHfI+ZRFhY8w29TYhbbLi/bvBdqKE4fUgg1pBKnV3FEaCWOWyA+m3WpORZr/j+9TKJtW8yBTF2/ZEODI9/QavHkVdGFp/Pjn4Q+u5hXapsP5sOH+OXXA1LiKuqJxiMNbhTkbdJTCy4llEt6NnqRT4dhg1V3nbdrm6dYMecA1yTOL4PWTE9L5VzPFlLBCvlG58AhehnN4uHsAYinyJ+AZ/NkVvELbfOBUuOO5syBIEtiqHU1k9XeISX5bsimrkUUhnGDxourN8SgUsCZVtKyGbyGzHXdjOhsAvOAswSRyIBddRdEZWP6GZhNK/yjwew9ehBo+3jEADu7Ay2n8mDc+TS7awUHg0OMzR0LABhqLD4hJEh/BEGyBdGlSJoXYXtr+3HS4ijzVpgi0paWXtdruGTknXBz+11qT1Q2inxaTzQCO46P3lfLpyS4fou2PH/PupwZgCxNhGlj4IvUuWEsTkqMWm6i4xCSMc9N1RDQoCVcuGItJ/MRWefais+3synowi/dESgJjkilnWnBTGvRWmaw8oR15257t7CHmCf8HOn7cwI8+NQBXMBEmAa8PMRemrNCEhLGEhDQKcGZWS319BX9PFBEwGTbRBhLbDcaV3drFcDqk5kCTd2JF1Wp0HraqBx8U0wwBTnbpCadwBA/gTH/CDrcCs93LV8E0YlmmcyQRQnjBa8JESmGUfIjK/7fkaDJpmD2QptFNVJU1bbtIAjjWQizepOKptRjbzR9Kag6xZmMLLjHOtcLT3Tx9o/0EcTT1XN3E45u24AiwEypDJXihKjQxjLprEwcmRKclaDNZCVqr/V8mYWyFADbusiY5hvgFoU2vio49RgJLn5OsReRFN6tabeetiiy0V7KFHT3HyZLx491u95sn4K1QQSPKM9hNT0wMVvAWbzDSVdrKw4zRjZMyJIHkfq1VAVCDl/bUhNKlGq0zGr05+YAceXVPCttVk0oqjVwMPt+BBefx4yPtGVkUsqY3CHDPiCM5ngupUwCdbkpd8kbPrCWHhkmtIKLEetF2499eS1jZlIPGYnlcPXeM2KD9vLS0bW3ktYNqUllpKLn5ZrsxlIzxvDu5eHxzGLctkZLEY4PgSOg2IUVVcUONzUDBEpRaMoXNmUc0tFZrTZquiLyKxrSm3DvIW9Fil+AkhXu5PhEPx9mUNwqypDvZWdKlhIJQY7vn2OsnmBeOWnYZ0m1iwbbw1U60by5om47iHRV6fOgzjMf/DAZrlP40Z7syxpLK0lJ0gqaAK1c2KQKu7tabTXkLFz0sCftuwX++MyNeNn68k5Buq23YQhUh0SNTJa1ioQ0p4nUG2y0XilF1JqODqdImloPS4Bp111DEWT0jJjVv95uX9BBV7eB3bUWcu0acSVM23YZdd8R8UbQUxJ9wdu3oMuhdt929ME+mh6JXJ8di2RxbTi6TbrDquqV4aUKR2iwT6aZbyOwEXN3DUsWr8Hn4EhwNyHuXHh7/pdaUjtR7vnDh/d8c9xD/s5f501eQ1+CuDiCvGhk1AN/4Tf74RfxPwD3toLarR0zNtsnPzmS64KIRk861dMWCU8ArasG9T9H0ZBpsDGnjtAOM2+/LuIb2iIUGXNgl5ZmKD/Tw8TlaAuihaFP5yrw18v4x1898zIdP+DDAX1bM3GAMvPgRP/cJn3zCW013nrhHkrITyvYuwOUkcHuKlRSW5C6rzIdY4ppnF7J8aAJbQepgbJYBjCY9usGXDKQxq7RZfh9eg5d1UHMVATRaD/4BHK93/1iAgYZ/+jqPn8Dn4UExmWrpa3+ZOK6MvM3bjwfzxNWA2dhs8+51XHSPJiaAhGSpWevEs5xHLXcEGFXYiCONySH3fPWq93JIsBiSWvWyc3CAN+EcXoT7rCSANloPPoa31rt/5PUA/gp8Q/jDD3hyrjzlR8VkanfOvB1XPubt17vzxAfdSVbD1pzAnfgyF3ycadOTOTXhpEUoLC1HZyNGW3dtmjeXgr2r56JNmRwdNNWaQVBddd6rh4MhviEB9EFRD/7RGvePvCbwAL4Mx/D6M541hHO4D3e7g6PafdcZVw689z7NGTwo5om7A8sPhccT6qKcl9NJl9aM/9kX+e59Hh1yPqGuCCZxuITcsmNaJ5F7d0q6J3H48TO1/+M57085q2icdu2U+W36Ldllz9Agiv4YGljoEN908EzvDOrBF98/vtJwCC/BF2AG75xxEmjmMIcjxbjoaxqOK3/4hPOZzhMPBpYPG44CM0dTVm1LjLtUWWVz1Bcf8tEx0zs8O2A2YVHRxKYOiy/aOVoAaMu0i7ubu43njjmd4ibMHU1sIDHaQNKrZND/FZYdk54oCXetjq7E7IVl9eAL7t+oHnwXXtLx44czzoRFHBztYVwtH1d+NOMkupZ5MTM+gUmq90X+Bh9zjRlmaQ+m7YMqUL/veemcecAtOJ0yq1JnVlN27di2E0+Klp1tAJ4KRw1eMI7aJjsO3R8kPSI3fUFXnIOfdQe86sIIVtWDL7h//Ok6vj8vwDk08NEcI8zz7OhBy+WwalzZeZ4+0XniRfst9pAJqQHDGLzVQ2pheZnnv1OWhwO43/AgcvAEXEVVpa4db9sGvNK8wjaENHkfFQ4Ci5i7dqnQlPoLQrHXZDvO3BIXZbJOBrOaEbML6sFL798I4FhKihjHMsPjBUZYCMFr6nvaArxqXPn4lCa+cHfSa2cP27g3Z3ziYTRrcbQNGLQmGF3F3cBdzzzX7AILx0IB9rbwn9kx2G1FW3Inic+ZLIsVvKR8Zwfj0l1fkqo8LWY1M3IX14OX3r9RKTIO+d9XzAI8qRPGPn/4NC2n6o4rN8XJ82TOIvuVA8zLKUHRFgBCetlDZlqR1gLKjS39xoE7Bt8UvA6BxuEDjU3tFsEijgA+615tmZkXKqiEENrh41iLDDZNq4pKTWR3LZfnos81LOuNa15cD956vLMsJd1rqYp51gDUQqMYm2XsxnUhD2jg1DM7SeuJxxgrmpfISSXVIJIS5qJJSvJPEQ49DQTVIbYWJ9QWa/E2+c/oPK1drmC7WSfJRNKBO5Yjvcp7Gc3dmmI/Xh1kDTEuiSnWqQf37h+fTMhGnDf6dsS8SQfQWlqqwXXGlc/PEZ/SC5mtzIV0nAshlQdM/LvUtYutrEZ/Y+EAFtq1k28zQhOwLr1AIeANzhF8t9qzTdZf2qRKO6MWE9ohBYwibbOmrFtNmg3mcS+tB28xv2uKd/agYCvOP+GkSc+0lr7RXzyufL7QbkUpjLjEWFLqOIkAGu2B0tNlO9Eau2W1qcOUvVRgKzypKIQZ5KI3q0MLzqTNRYqiZOqmtqloIRlmkBHVpHmRYV6/HixbO6UC47KOFJnoMrVyr7wYz+SlW6GUaghYbY1I6kkxA2W1fSJokUdSh2LQ1GAimRGm0MT+uu57H5l7QgOWxERpO9moLRPgTtquWCfFlGlIjQaRly9odmzMOWY+IBO5tB4sW/0+VWGUh32qYk79EidWKrjWuiLpiVNGFWFRJVktyeXWmbgBBzVl8anPuXyNJlBJOlKLTgAbi/EYHVHxWiDaVR06GnHQNpJcWcK2jJtiCfG2sEHLzuI66sGrMK47nPIInPnu799935aOK2cvmvubrE38ZzZjrELCmXM2hM7UcpXD2oC3+ECVp7xtIuxptJ0jUr3sBmBS47TVxlvJ1Sqb/E0uLdvLj0lLr29ypdd/eMX3f6lrxGlKwKQxEGvw0qHbkbwrF3uHKwVENbIV2wZ13kNEF6zD+x24aLNMfDTCbDPnEikZFyTNttxWBXDaBuM8KtI2rmaMdUY7cXcUPstqTGvBGSrFWIpNMfbdea990bvAOC1YX0qbc6smDS1mPxSJoW4fwEXvjMmhlijDRq6qale6aJEuFGoppYDoBELQzLBuh/mZNx7jkinv0EtnUp50lO9hbNK57lZaMAWuWR5Yo9/kYwcYI0t4gWM47Umnl3YmpeBPqSyNp3K7s2DSAS/39KRuEN2bS4xvowV3dFRMx/VFcp2Yp8w2nTO9hCXtHG1kF1L4KlrJr2wKfyq77R7MKpFKzWlY9UkhYxyHWW6nBWPaudvEAl3CGcNpSXPZ6R9BbBtIl6cHL3gIBi+42CYXqCx1gfGWe7Ap0h3luyXdt1MKy4YUT9xSF01G16YEdWsouW9mgDHd3veyA97H+Ya47ZmEbqMY72oPztCGvK0onL44AvgC49saZKkWRz4veWljE1FHjbRJaWv6ZKKtl875h4CziFCZhG5rx7tefsl0aRT1bMHZjm8dwL/6u7wCRysaQblQoG5yAQN5zpatMNY/+yf8z+GLcH/Qn0iX2W2oEfXP4GvwQHuIL9AYGnaO3zqAX6946nkgqZNnUhx43DIdQtMFeOPrgy/y3Yd85HlJWwjLFkU3kFwq28xPnuPhMWeS+tDLV9Otllq7pQCf3uXJDN9wFDiUTgefHaiYbdfi3b3u8+iY6TnzhgehI1LTe8lcd7s1wJSzKbahCRxKKztTLXstGAiu3a6rPuQs5pk9TWAan5f0BZmGf7Ylxzzk/A7PAs4QPPPAHeFQ2hbFHszlgZuKZsJcUmbDC40sEU403cEjczstOEypa+YxevL4QBC8oRYqWdK6b7sK25tfE+oDZgtOQ2Jg8T41HGcBE6fTWHn4JtHcu9S7uYgU5KSCkl/mcnq+5/YBXOEr6lCUCwOTOM1taOI8mSxx1NsCXBEmLKbMAg5MkwbLmpBaFOPrNSlO2HnLiEqW3tHEwd8AeiQLmn+2gxjC3k6AxREqvKcJbTEzlpLiw4rNZK6oJdidbMMGX9FULKr0AkW+2qDEPBNNm5QAt2Ik2nftNWHetubosHLo2nG4vQA7GkcVCgVCgaDixHqo9UUn1A6OshapaNR/LPRYFV8siT1cCtJE0k/3WtaNSuUZYKPnsVIW0xXWnMUxq5+En4Kvw/MqQmVXnAXj9Z+9zM98zM/Agy7F/qqj2Nh67b8HjFnPP3iBn/tkpdzwEJX/whIcQUXOaikeliCRGUk7tiwF0rItwMEhjkZ309hikFoRAmLTpEXWuHS6y+am/KB/fM50aLEhGnSMwkpxzOov4H0AvgovwJ1iGzDLtJn/9BU+fAINfwUe6FHSLhu83viV/+/HrOePX+STT2B9uWGbrMHHLldRBlhS/CJQmcRxJFqZica01XixAZsYiH1uolZxLrR/SgxVIJjkpQP4PE9sE59LKLr7kltSBogS5tyszzH8Fvw8/AS8rNOg0xUS9fIaHwb+6et8Q/gyvKRjf5OusOzGx8evA/BP4IP11uN/grca5O0lcsPLJ5YjwI4QkJBOHa0WdMZYGxPbh2W2nR9v3WxEWqgp/G3+6VZbRLSAAZ3BhdhAaUL33VUSw9yjEsvbaQ9u4A/gGXwZXoEHOuU1GSj2chf+Mo+f8IcfcAxfIKVmyunRbYQVnoevwgfw3TXXcw++xNuP4fhyueEUNttEduRVaDttddoP0eSxLe2LENk6itYxlrxBNBYrNNKSQmeaLcm9c8UsaB5WyO6675yyQIAWSDpBVoA/gxmcwEvwoDv0m58UE7gHn+fJOa8/Ywan8EKRfjsopF83eCglX/Sfr7OeaRoQfvt1CGvIDccH5BCvw1sWIzRGC/66t0VTcLZQZtm6PlAasbOJ9iwWtUo7biktTSIPxnR24jxP1ZKaqq+2RcXM9OrBAm/AAs7hDJ5bNmGb+KIfwCs8a3jnjBrOFeMjHSCdbKr+2uOLfnOd9eiA8Hvvwwq54VbP2OqwkB48Ytc4YEOiH2vTXqodabfWEOzso4qxdbqD5L6tbtNPECqbhnA708DZH4QOJUXqScmUlks7Ot6FBuZw3n2mEbaUX7kDzxHOOQk8nKWMzAzu6ZZ8sOFw4RK+6PcuXo9tB4SbMz58ApfKDXf3szjNIIbGpD5TKTRxGkEMLjLl+K3wlWXBsCUxIDU+jbOiysESqAy1MGUJpXgwbTWzNOVEziIXZrJ+VIztl1PUBxTSo0dwn2bOmfDRPD3TRTGlfbCJvO9KvuhL1hMHhB9wPuPRLGHcdOWG2xc0U+5bQtAJT0nRTewXL1pgk2+rZAdeWmz3jxAqfNQQdzTlbF8uJ5ecEIWvTkevAHpwz7w78QujlD/Lr491bD8/1vhM2yrUQRrWXNQY4fGilfctMWYjL72UL/qS9eiA8EmN88nbNdour+PBbbAjOjIa4iBhfFg6rxeKdEGcL6p3EWR1Qq2Qkhs2DrnkRnmN9tG2EAqmgPw6hoL7Oza7B+3SCrR9tRftko+Lsf2F/mkTndN2LmzuMcKTuj/mX2+4Va3ki16+nnJY+S7MefpkidxwnV+4wkXH8TKnX0tsYzYp29DOOoSW1nf7nTh2akYiWmcJOuTidSaqESrTYpwjJJNVGQr+rLI7WsqerHW6Kp/oM2pKuV7T1QY9gjqlZp41/WfKpl56FV/0kvXQFRyeQ83xaTu5E8p5dNP3dUF34ihyI3GSpeCsywSh22ZJdWto9winhqifb7VRvgktxp13vyjrS0EjvrRfZ62uyqddSWaWYlwTPAtJZ2oZ3j/Sgi/mi+6vpzesfAcWNA0n8xVyw90GVFGuZjTXEQy+6GfLGLMLL523f5E0OmxVjDoOuRiH91RKU+vtoCtH7TgmvBLvtFXWLW15H9GTdVw8ow4IlRLeHECN9ym1e9K0I+Cbnhgv4Yu+aD2HaQJ80XDqOzSGAV4+4yCqBxrsJAX6ZTIoX36QnvzhhzzMfFW2dZVLOJfo0zbce5OvwXMFaZ81mOnlTVXpDZsQNuoYWveketKb5+6JOOsgX+NTm7H49fUTlx+WLuWL7qxnOFh4BxpmJx0p2gDzA/BUARuS6phR+pUsY7MMboAHx5xNsSVfVZcYSwqCKrqon7zM+8ecCkeS4nm3rINuaWvVNnMRI1IRpxTqx8PZUZ0Br/UEduo3B3hNvmgZfs9gQPj8vIOxd2kndir3awvJ6BLvoUuOfFWNYB0LR1OQJoUySKb9IlOBx74q1+ADC2G6rOdmFdJcD8BkfualA+BdjOOzP9uUhGUEX/TwhZsUduwRr8wNuXKurCixLBgpQI0mDbJr9dIqUuV+92ngkJZ7xduCk2yZKbfWrH1VBiTg9VdzsgRjW3CVXCvAwDd+c1z9dWw9+B+8MJL/eY15ZQ/HqvTwVdsZn5WQsgRRnMaWaecu3jFvMBEmgg+FJFZsnSl0zjB9OqPYaBD7qmoVyImFvzi41usesV0julaAR9dfR15Xzv9sEruRDyk1nb+QaLU67T885GTls6YgcY+UiMa25M/pwGrbCfzkvR3e0jjtuaFtnwuagHTSb5y7boBH119HXhvwP487jJLsLJ4XnUkHX5sLbS61dpiAXRoZSCrFJ+EjpeU3puVfitngYNo6PJrAigKktmwjyQdZpfq30mmtulaAx9Zfx15Xzv+cyeuiBFUs9zq8Kq+XB9a4PVvph3GV4E3y8HENJrN55H1X2p8VyqSKwVusJDKzXOZzplWdzBUFK9e+B4+uv468xvI/b5xtSAkBHQaPvtqWzllVvEOxPbuiE6+j2pvjcKsbvI7txnRErgfH7LdXqjq0IokKzga14GzQ23SSbCQvO6r+Or7SMIr/efOkkqSdMnj9mBx2DRsiY29Uj6+qK9ZrssCKaptR6HKURdwUYeUWA2kPzVKQO8ku2nU3Anhs/XWkBx3F/7wJtCTTTIKftthue1ty9xvNYLY/zo5KSbIuKbXpbEdSyeRyYdAIwKY2neyoc3+k1XUaufYga3T9daMUx/r8z1s10ITknIO0kuoMt+TB8jK0lpayqqjsJ2qtXAYwBU932zinimgmd6mTRDnQfr88q36NAI+tv24E8Pr8zxtasBqx0+xHH9HhlrwsxxNUfKOHQaZBITNf0uccj8GXiVmXAuPEAKSdN/4GLHhs/XWj92dN/uetNuBMnVR+XWDc25JLjo5Mg5IZIq226tmCsip2zZliL213YrTlL2hcFjpCduyim3M7/eB16q/blQsv5X/esDRbtJeabLIosWy3ycavwLhtxdWzbMmHiBTiVjJo6lCLjXZsi7p9PEPnsq6X6wd4bP11i0rD5fzPm/0A6brrIsllenZs0lCJlU4abakR59enZKrKe3BZihbTxlyZ2zl1+g0wvgmA166/bhwDrcn/7Ddz0eWZuJvfSESug6NzZsox3Z04FIxz0mUjMwVOOVTq1CQ0AhdbBGVdjG/CgsfUX7esJl3K/7ytWHRv683praW/8iDOCqWLLhpljDY1ZpzK75QiaZoOTpLKl60auHS/97oBXrv+umU9+FL+5+NtLFgjqVLCdbmj7pY5zPCPLOHNCwXGOcLquOhi8CmCWvbcuO73XmMUPab+ug3A6/A/78Bwe0bcS2+tgHn4J5pyS2WbOck0F51Vq3LcjhLvZ67p1ABbaL2H67bg78BfjKi/jr3+T/ABV3ilLmNXTI2SpvxWBtt6/Z//D0z/FXaGbSBgylzlsEGp+5//xrd4/ae4d8DUUjlslfIYS3t06HZpvfQtvv0N7AHWqtjP2pW08QD/FLy//da38vo8PNlKHf5y37Dxdfe/oj4kVIgFq3koLReSR76W/bx//n9k8jonZxzWTANVwEniDsg87sOSd/z7//PvMp3jQiptGVWFX2caezzAXwfgtzYUvbr0iozs32c3Uge7varH+CNE6cvEYmzbPZ9hMaYDdjK4V2iecf6EcEbdUDVUARda2KzO/JtCuDbNQB/iTeL0EG1JSO1jbXS+nLxtPMDPw1fh5+EPrgSEKE/8Gry5A73ui87AmxwdatyMEBCPNOCSKUeRZ2P6Myb5MRvgCHmA9ywsMifU+AYXcB6Xa5GibUC5TSyerxyh0j6QgLVpdyhfArRTTLqQjwe4HOD9s92D4Ap54odXAPBWLAwB02igG5Kkc+piN4lvODIFGAZgT+EO4Si1s7fjSR7vcQETUkRm9O+MXyo9OYhfe4xt9STQ2pcZRLayCV90b4D3jR0DYAfyxJ+eywg2IL7NTMXna7S/RpQ63JhWEM8U41ZyQGjwsVS0QBrEKLu8xwZsbi4wLcCT+OGidPIOCe1PiSc9Qt+go+vYqB7cG+B9d8cAD+WJPz0Am2gxXgU9IneOqDpAAXOsOltVuMzpdakJXrdPCzXiNVUpCeOos5cxnpQT39G+XVLhs1osQVvJKPZyNq8HDwd4d7pNDuWJPxVX7MSzqUDU6gfadKiNlUFTzLeFHHDlzO4kpa7aiKhBPGKwOqxsBAmYkOIpipyXcQSPlRTf+Tii0U3EJGaZsDER2qoB3h2hu0qe+NNwUooYU8y5mILbJe6OuX+2FTKy7bieTDAemaQyQ0CPthljSWO+xmFDIYiESjM5xKd6Ik5lvLq5GrQ3aCMLvmCA9wowLuWJb9xF59hVVP6O0CrBi3ZjZSNOvRy+I6klNVRJYRBaEzdN+imiUXQ8iVF8fsp+W4JXw7WISW7fDh7lptWkCwZ4d7QTXyBPfJMYK7SijjFppGnlIVJBJBYj7eUwtiP1IBXGI1XCsjNpbjENVpSAJ2hq2LTywEly3hUYazt31J8w2+aiLx3g3fohXixPfOMYm6zCGs9LVo9MoW3MCJE7R5u/WsOIjrqBoHUO0bJE9vxBpbhsd3+Nb4/vtPCZ4oZYCitNeYuC/8UDvDvy0qvkiW/cgqNqRyzqSZa/s0mqNGjtKOoTm14zZpUauiQgVfqtQiZjq7Q27JNaSK5ExRcrGCXO1FJYh6jR6CFqK7bZdQZ4t8g0rSlPfP1RdBtqaa9diqtzJkQ9duSryi2brQXbxDwbRUpFMBHjRj8+Nt7GDKgvph9okW7LX47gu0SpGnnFQ1S1lYldOsC7hYteR574ZuKs7Ei1lBsfdz7IZoxzzCVmmVqaSySzQbBVAWDek+N4jh9E/4VqZrJjPwiv9BC1XcvOWgO8275CVyBPvAtTVlDJfZkaZGU7NpqBogAj/xEHkeAuJihWYCxGN6e8+9JtSegFXF1TrhhLGP1fak3pebgPz192/8gB4d/6WT7+GdYnpH7hH/DJzzFiYPn/vjW0SgNpTNuPIZoAEZv8tlGw4+RLxy+ZjnKa5NdFoC7UaW0aduoYse6+bXg1DLg6UfRYwmhGEjqPvF75U558SANrElK/+MdpXvmqBpaXOa/MTZaa1DOcSiLaw9j0NNNst3c+63c7EKTpkvKHzu6bPbP0RkuHAVcbRY8ijP46MIbQeeT1mhA+5PV/inyDdQipf8LTvMXbwvoDy7IruDNVZKTfV4CTSRUYdybUCnGU7KUTDxLgCknqUm5aAW6/1p6eMsOYsphLzsHrE0Y/P5bQedx1F/4yPHnMB3/IOoTU9+BL8PhtjuFKBpZXnYNJxTuv+2XqolKR2UQgHhS5novuxVySJhBNRF3SoKK1XZbbXjVwWNyOjlqWJjrWJIy+P5bQedyldNScP+HZ61xKSK3jyrz+NiHG1hcOLL/+P+PDF2gOkekKGiNWKgJ+8Z/x8Iv4DdQHzcpZyF4v19I27w9/yPGDFQvmEpKtqv/TLiWMfn4sofMm9eAH8Ao0zzh7h4sJqYtxZd5/D7hkYPneDzl5idlzNHcIB0jVlQ+8ULzw/nc5/ojzl2juE0apD7LRnJxe04dMz2iOCFNtGFpTuXA5AhcTRo8mdN4kz30nVjEC4YTZQy4gpC7GlTlrePKhGsKKgeXpCYeO0MAd/GH7yKQUlXPLOasOH3FnSphjHuDvEu4gB8g66oNbtr6eMbFIA4fIBJkgayoXriw2XEDQPJrQeROAlY6aeYOcMf+IVYTU3XFlZufMHinGywaW3YLpObVBAsbjF4QJMsVUSayjk4voPsHJOQfPWDhCgDnmDl6XIRerD24HsGtw86RMHOLvVSHrKBdeVE26gKB5NKHzaIwLOmrqBWJYZDLhASG16c0Tn+CdRhWDgWXnqRZUTnPIHuMJTfLVpkoYy5CzylHVTGZMTwkGAo2HBlkQplrJX6U+uF1wZz2uwS1SQ12IqWaPuO4baZaEFBdukksJmkcTOm+YJSvoqPFzxFA/YUhIvWxcmSdPWTWwbAKVp6rxTtPFUZfKIwpzm4IoMfaYQLWgmlG5FME2gdBgm+J7J+rtS/XBbaVLsR7bpPQnpMFlo2doWaVceHk9+MkyguZNCJ1He+kuHTWyQAzNM5YSUg/GlTk9ZunAsg1qELVOhUSAK0LABIJHLKbqaEbHZLL1VA3VgqoiOKXYiS+HRyaEKgsfIqX64HYWbLRXy/qWoylIV9gudL1OWBNgBgTNmxA6b4txDT4gi3Ri7xFSLxtXpmmYnzAcWDZgY8d503LFogz5sbonDgkKcxGsWsE1OI+rcQtlgBBCSOKD1mtqYpIU8cTvBmAT0yZe+zUzeY92fYjTtGipXLhuR0ePoHk0ofNWBX+lo8Z7pAZDk8mEw5L7dVyZZoE/pTewbI6SNbiAL5xeygW4xPRuLCGbhcO4RIeTMFYHEJkYyEO9HmJfXMDEj/LaH781wHHZEtqSQ/69UnGpzH7LKIAZEDSPJnTesJTUa+rwTepI9dLJEawYV+ZkRn9g+QirD8vF8Mq0jFQ29js6kCS3E1+jZIhgPNanHdHFqFvPJLHqFwQqbIA4jhDxcNsOCCQLDomaL/dr5lyJaJU6FxPFjO3JOh3kVMcROo8u+C+jo05GjMF3P3/FuDLn5x2M04xXULPwaS6hBYki+MrMdZJSgPHlcB7nCR5bJ9Kr5ACUn9jk5kivdd8tk95SOGrtqu9lr2IhK65ZtEl7ZKrp7DrqwZfRUSN1el7+7NJxZbywOC8neNKTch5vsTEMNsoCCqHBCqIPRjIPkm0BjvFODGtto99rCl+d3wmHkW0FPdpZtC7MMcVtGFQjJLX5bdQ2+x9ypdc313uj8xlsrfuLgWXz1cRhZvJYX0iNVBRcVcmCXZs6aEf3RQF2WI/TcCbKmGU3IOoDJGDdDub0+hYckt6PlGu2BcxmhbTdj/klhccLGJMcqRjMJP1jW2ETqLSWJ/29MAoORluJ+6LPffBZbi5gqi5h6catQpmOT7/OFf5UorRpLzCqcMltBLhwd1are3kztrSzXO0LUbXRQcdLh/RdSZ+swRm819REDrtqzC4es6Gw4JCKlSnjYVpo0xeq33PrADbFLL3RuCmObVmPN+24kfa+AojDuM4umKe2QwCf6EN906HwjujaitDs5o0s1y+k3lgbT2W2i7FJdnwbLXhJUBq/9liTctSmFC/0OqUinb0QddTWamtjbHRFuWJJ6NpqZ8vO3fZJ37Db+2GkaPYLGHs7XTTdiFQJ68SkVJFVmY6McR5UycflNCsccHFaV9FNbR4NttLxw4pQ7wJd066Z0ohVbzihaxHVExd/ay04oxUKWt+AsdiQ9OUyZ2krzN19IZIwafSTFgIBnMV73ADj7V/K8u1MaY2sJp2HWm0f41tqwajEvdHWOJs510MaAqN4aoSiPCXtN2KSi46dUxHdaMquar82O1x5jqhDGvqmoE9LfxcY3zqA7/x3HA67r9ZG4O6Cuxu12/+TP+eLP+I+HErqDDCDVmBDO4larujNe7x8om2rMug0MX0rL1+IWwdwfR+p1TNTyNmVJ85ljWzbWuGv8/C7HD/izjkHNZNYlhZcUOKVzKFUxsxxN/kax+8zPWPSFKw80rJr9Tizyj3o1gEsdwgWGoxPezDdZ1TSENE1dLdNvuKL+I84nxKesZgxXVA1VA1OcL49dFlpFV5yJMhzyCmNQ+a4BqusPJ2bB+xo8V9u3x48VVIEPS/mc3DvAbXyoYr6VgDfh5do5hhHOCXMqBZUPhWYbWZECwVJljLgMUWOCB4MUuMaxGNUQDVI50TQ+S3kFgIcu2qKkNSHVoM0SHsgoZxP2d5HH8B9woOk4x5bPkKtAHucZsdykjxuIpbUrSILgrT8G7G5oCW+K0990o7E3T6AdW4TilH5kDjds+H64kS0mz24grtwlzDHBJqI8YJQExotPvoC4JBq0lEjjQkyBZ8oH2LnRsQ4Hu1QsgDTJbO8fQDnllitkxuVskoiKbRF9VwzMDvxHAdwB7mD9yCplhHFEyUWHx3WtwCbSMMTCUCcEmSGlg4gTXkHpZXWQ7kpznK3EmCHiXInqndkQjunG5kxTKEeGye7jWz9cyMR2mGiFQ15ENRBTbCp+Gh86vAyASdgmJq2MC6hoADQ3GosP0QHbnMHjyBQvQqfhy/BUbeHd5WY/G/9LK/8Ka8Jd7UFeNWEZvzPb458Dn8DGLOe3/wGL/4xP+HXlRt+M1PE2iLhR8t+lfgxsuh7AfO2AOf+owWhSZRYQbd622hbpKWKuU+XuvNzP0OseRDa+mObgDHJUSc/pKx31QdKffQ5OIJpt8GWjlgTwMc/w5MPCR/yl1XC2a2Yut54SvOtMev55Of45BOat9aWG27p2ZVORRvnEk1hqWMVUmqa7S2YtvlIpspuF1pt0syuZS2NV14mUidCSfzQzg+KqvIYCMljIx2YK2AO34fX4GWdu5xcIAb8MzTw+j/lyWM+Dw/gjs4GD6ehNgA48kX/AI7XXM/XAN4WHr+9ntywqoCakCqmKP0rmQrJJEErG2Upg1JObr01lKQy4jskWalKYfJ/EDLMpjNSHFEUAde2fltaDgmrNaWQ9+AAb8I5vKjz3L1n1LriB/BXkG/wwR9y/oRX4LlioHA4LzP2inzRx/DWmutRweFjeP3tNeSGlaE1Fde0OS11yOpmbIp2u/jF1n2RRZviJM0yBT3IZl2HWImKjQOxIyeU325b/qWyU9Moj1o07tS0G7qJDoGHg5m8yeCxMoEH8GU45tnrNM84D2l297DQ9t1YP7jki/7RmutRweEA77/HWXOh3HCxkRgldDQkAjNTMl2Iloc1qN5JfJeeTlyTRzxURTdn1Ixv2uKjs12AbdEWlBtmVdk2k7FFwj07PCZ9XAwW3dG+8xKzNFr4EnwBZpy9Qzhh3jDXebBpYcpuo4fQ44u+fD1dweEnHzI7v0xuuOALRUV8rXpFyfSTQYkhd7IHm07jpyhlkCmI0ALYqPTpUxXS+z4jgDj1Pflvmz5ecuItpIBxyTHpSTGWd9g1ApfD/bvwUhL4nT1EzqgX7cxfCcNmb3mPL/qi9SwTHJ49oj5ZLjccbTG3pRmlYi6JCG0mQrAt1+i2UXTZ2dv9IlQpN5naMYtviaXlTrFpoMsl3bOAFEa8sqPj2WCMrx3Yjx99qFwO59Aw/wgx+HlqNz8oZvA3exRDvuhL1jMQHPaOJ0+XyA3fp1OfM3qObEVdhxjvynxNMXQV4+GJyvOEFqeQBaIbbO7i63rpxCltdZShPFxkjM2FPVkn3TG+Rp9pO3l2RzFegGfxGDHIAh8SteR0C4HopXzRF61nheDw6TFN05Ebvq8M3VKKpGjjO6r7nhudTEGMtYM92HTDaR1FDMXJ1eThsbKfywyoWwrzRSXkc51flG3vIid62h29bIcFbTGhfV+faaB+ohj7dPN0C2e2lC96+XouFByen9AsunLDJZ9z7NExiUc0OuoYW6UZkIyx2YUR2z6/TiRjyKMx5GbbjLHvHuf7YmtKghf34LJfx63Yg8vrvN2zC7lY0x0tvKezo4HmGYDU+Gab6dFL+KI761lDcNifcjLrrr9LWZJctG1FfU1uwhoQE22ObjdfkSzY63CbU5hzs21WeTddH2BaL11Gi7lVdlxP1nkxqhnKhVY6knS3EPgVGg1JpN5cP/hivujOelhXcPj8HC/LyI6MkteVjlolBdMmF3a3DbsuAYhL44dxzthWSN065xxUd55Lmf0wRbOYOqH09/o9WbO2VtFdaMb4qBgtFJoT1SqoN8wPXMoXLb3p1PUEhxfnnLzGzBI0Ku7FxrKsNJj/8bn/H8fPIVOd3rfrklUB/DOeO+nkghgSPzrlPxluCMtOnDL4Yml6dK1r3vsgMxgtPOrMFUZbEUbTdIzii5beq72G4PD0DKnwjmBULUVFmy8t+k7fZ3pKc0Q4UC6jpVRqS9Umv8bxw35flZVOU1X7qkjnhZlsMbk24qQ6Hz7QcuL6sDC0iHHki96Uh2UdvmgZnjIvExy2TeJdMDZNSbdZyAHe/Yd1xsQhHiKzjh7GxQ4yqMPaywPkjMamvqrYpmO7Knad+ZQC5msCuAPWUoxrxVhrGv7a+KLXFhyONdTMrZ7ke23qiO40ZJUyzgYyX5XyL0mV7NiUzEs9mjtbMN0dERqwyAJpigad0B3/zRV7s4PIfXSu6YV/MK7+OrYe/JvfGMn/PHJe2fyUdtnFrKRNpXV0Y2559aWPt/G4BlvjTMtXlVIWCnNyA3YQBDmYIodFz41PvXPSa6rq9lWZawZ4dP115HXV/M/tnFkkrBOdzg6aP4pID+MZnTJ1SuuB6iZlyiox4HT2y3YBtkUKWooacBQUDTpjwaDt5poBHl1/HXltwP887lKKXxNUEyPqpGTyA699UqY/lt9yGdlUKra0fFWS+36iylVWrAyd7Uw0CZM0z7xKTOduznLIjG2Hx8cDPLb+OvK6Bv7n1DYci4CxUuRxrjBc0bb4vD3rN5Zz36ntLb83eVJIB8LiIzCmn6SMPjlX+yNlTjvIGjs+QzHPf60Aj62/jrzG8j9vYMFtm1VoRWCJdmw7z9N0t+c8cxZpPeK4aTRicS25QhrVtUp7U578chk4q04Wx4YoQSjFryUlpcQ1AbxZ/XVMknIU//OGl7Q6z9Zpxi0+3yFhSkjUDpnCIUhLWVX23KQ+L9vKvFKI0ZWFQgkDLvBoylrHNVmaw10zwCPrr5tlodfnf94EWnQ0lFRWy8pW9LbkLsyUVDc2NSTHGDtnD1uMtchjbCeb1mpxFP0YbcClhzdLu6lfO8Bj6q+bdT2sz/+8SZCV7VIxtt0DUn9L7r4cLYWDSXnseEpOGFuty0qbOVlS7NNzs5FOGJUqQpl2Q64/yBpZf90sxbE+//PGdZ02HSipCbmD6NItmQ4Lk5XUrGpDMkhbMm2ZVheNYV+VbUWTcv99+2NyX1VoafSuC+AN6q9bFIMv5X/eagNWXZxEa9JjlMwNWb00akGUkSoepp1/yRuuqHGbUn3UdBSTxBU6SEVklzWRUkPndVvw2PrrpjvxOvzPmwHc0hpmq82npi7GRro8dXp0KXnUQmhZbRL7NEVp1uuZmO45vuzKsHrktS3GLWXODVjw+vXXLYx4Hf7njRPd0i3aoAGX6W29GnaV5YdyDj9TFkakje7GHYzDoObfddHtOSpoi2SmzJHrB3hM/XUDDEbxP2/oosszcRlehWXUvzHv4TpBVktHqwenFo8uLVmy4DKLa5d3RtLrmrM3aMFr1183E4sewf+85VWeg1c5ag276NZrM9IJVNcmLEvDNaV62aq+14IAOGFsBt973Ra8Xv11YzXwNfmft7Jg2oS+XOyoC8/cwzi66Dhmgk38kUmP1CUiYWOX1bpD2zWXt2FCp7uq8703APAa9dfNdscR/M/bZLIyouVxqJfeWvG9Je+JVckHQ9+CI9NWxz+blX/KYYvO5n2tAP/vrlZ7+8/h9y+9qeB/Hnt967e5mevX10rALDWK//FaAT5MXdBXdP0C/BAes792c40H+AiAp1e1oH8HgH94g/Lttx1gp63op1eyoM/Bvw5/G/7xFbqJPcCXnmBiwDPb/YKO4FX4OjyCb289db2/Noqicw4i7N6TVtoz8tNwDH+8x/i6Ae7lmaQVENzJFb3Di/BFeAwz+Is9SjeQySpPqbLFlNmyz47z5a/AF+AYFvDmHqibSXTEzoT4Gc3OALaqAP4KPFUJ6n+1x+rGAM6Zd78bgJ0a8QN4GU614vxwD9e1Amy6CcskNrczLx1JIp6HE5UZD/DBHrFr2oNlgG4Odv226BodoryjGJ9q2T/AR3vQrsOCS0ctXZi3ruLlhpFDJYl4HmYtjQCP9rhdn4suySLKDt6wLcC52h8xPlcjju1fn+yhuw4LZsAGUuo2b4Fx2UwQu77uqRHXGtg92aN3tQCbFexc0uk93vhTXbct6y7MulLycoUljx8ngDMBg1tvJjAazpEmOtxlzclvj1vQf1Tx7QlPDpGpqgtdSKz/d9/hdy1vTfFHSmC9dGDZbLiezz7Ac801HirGZsWjydfZyPvHXL/Y8Mjzg8BxTZiuwKz4Eb8sBE9zznszmjvFwHKPIWUnwhqfVRcd4Ck0K6ate48m1oOfrX3/yOtvAsJ8zsPAM89sjnddmuLuDPjX9Bu/L7x7xpMzFk6nWtyQfPg278Gn4Aekz2ZgOmU9eJ37R14vwE/BL8G3aibCiWMWWDQ0ZtkPMnlcGeAu/Ag+8ZyecU5BPuy2ILD+sQqyZhAKmn7XZd+jIMTN9eBL7x95xVLSX4On8EcNlXDqmBlqS13jG4LpmGbkF/0CnOi3H8ETOIXzmnmtb0a16Tzxj1sUvQCBiXZGDtmB3KAefPH94xcUa/6vwRn80GOFyjEXFpba4A1e8KQfFF+259tx5XS4egYn8fQsLGrqGrHbztr+uByTahWuL1NUGbDpsnrwBfePPwHHIf9X4RnM4Z2ABWdxUBlqQ2PwhuDxoS0vvqB1JzS0P4h2nA/QgTrsJFn+Y3AOjs9JFC07CGWX1oNX3T/yHOzgDjwPn1PM3g9Jk9lZrMEpxnlPmBbjyo2+KFXRU52TJM/2ALcY57RUzjObbjqxVw++4P6RAOf58pcVsw9Daje3htriYrpDOonre3CudSe6bfkTEgHBHuDiyu5MCsc7BHhYDx7ePxLjqigXZsw+ijMHFhuwBmtoTPtOxOrTvYJDnC75dnUbhfwu/ZW9AgYd+peL68HD+0emKquiXHhWjJg/UrkJYzuiaL3E9aI/ytrCvAd4GcYZMCkSQxfUg3v3j8c4e90j5ZTPdvmJJGHnOCI2nHS8081X013pHuBlV1gB2MX1YNmWLHqqGN/TWmG0y6clJWthxNUl48q38Bi8vtMKyzzpFdSDhxZ5WBA5ZLt8Jv3895DduBlgbPYAj8C4B8hO68FDkoh5lydC4FiWvBOVqjYdqjiLv92t8yPDjrDaiHdUD15qkSURSGmXJwOMSxWAXYwr3zaAufJ66l+94vv3AO+vPcD7aw/w/toDvL/2AO+vPcD7aw/wHuD9tQd4f+0B3l97gPfXHuD9tQd4f+0B3l97gG8LwP8G/AL8O/A5OCq0Ys2KIdv/qOIXG/4mvFAMF16gZD+2Xvu/B8as5+8bfllWyg0zaNO5bfXj6vfhhwD86/Aq3NfRS9t9WPnhfnvCIw/CT8GLcFTMnpntdF/z9V+PWc/vWoIH+FL3Znv57PitcdGP4R/C34avw5fgRVUInCwbsn1yyA8C8zm/BH8NXoXnVE6wVPjdeCI38kX/3+Ct9dbz1pTmHFRu+Hm4O9Ch3clr99negxfwj+ER/DR8EV6B5+DuQOnTgUw5rnkY+FbNU3gNXh0o/JYTuWOvyBf9FvzX663HH/HejO8LwAl8Hl5YLTd8q7sqA3wbjuExfAFegQdwfyDoSkWY8swzEf6o4Qyewefg+cHNbqMQruSL/u/WWc+E5g7vnnEXgDmcDeSGb/F4cBcCgT+GGRzDU3hZYburAt9TEtHgbM6JoxJ+6NMzzTcf6c2bycv2+KK/f+l6LBzw5IwfqZJhA3M472pWT/ajKxnjv4AFnMEpnBTPND6s2J7qHbPAqcMK74T2mZ4VGB9uJA465It+/eL1WKhYOD7xHOkr1ajK7d0C4+ke4Hy9qXZwpgLr+Znm/uNFw8xQOSy8H9IzjUrd9+BIfenYaylf9FsXr8fBAadnPIEDna8IBcwlxnuA0/Wv6GAWPd7dDIKjMdSWueAsBj4M7TOd06qBbwDwKr7oleuxMOEcTuEZTHWvDYUO7aHqAe0Bbq+HEFRzOz7WVoTDQkVds7A4sIIxfCQdCefFRoIOF/NFL1mPab/nvOakSL/Q1aFtNpUb/nFOVX6gzyg/1nISyDfUhsokIzaBR9Kxm80s5mK+6P56il1jXic7nhQxsxSm3OwBHl4fFdLqi64nDQZvqE2at7cWAp/IVvrN6/BFL1mPhYrGMBfOi4PyjuSGf6wBBh7p/FZTghCNWGgMzlBbrNJoPJX2mW5mwZfyRffXo7OFi5pZcS4qZUrlViptrXtw+GQoyhDPS+ANjcGBNRiLCQDPZPMHuiZfdFpPSTcQwwKYdRNqpkjm7AFeeT0pJzALgo7g8YYGrMHS0iocy+YTm2vyRUvvpXCIpQ5pe666TJrcygnScUf/p0NDs/iAI/nqDHC8TmQT8x3NF91l76oDdQGwu61Z6E0ABv7uO1dbf/37Zlv+Zw/Pbh8f1s4Avur6657/+YYBvur6657/+YYBvur6657/+YYBvur6657/+aYBvuL6657/+VMA8FXWX/f8zzcN8BXXX/f8zzcNMFdbf93zP38KLPiK6697/uebtuArrr/u+Z9vGmCusP6653/+1FjwVdZf9/zPN7oHX339dc//fNMu+irrr3v+50+Bi+Zq6697/uebA/jz8Pudf9ht/fWv517J/XUzAP8C/BAeX9WCDrUpZ3/dEMBxgPcfbtTVvsYV5Yn32u03B3Ac4P3b8I+vxNBKeeL9dRMAlwO83959qGO78sT769oB7g3w/vGVYFzKE++v6wV4OMD7F7tckFkmT7y/rhHgpQO8b+4Y46XyxPvrugBeNcB7BRiX8sT767oAvmCA9woAHsoT76+rBJjLBnh3txOvkifeX1dswZcO8G6N7sXyxPvr6i340gHe3TnqVfLE++uKAb50gHcXLnrX8sR7gNdPRqwzwLu7Y/FO5Yn3AK9jXCMGeHdgxDuVJ75VAI8ljP7PAb3/RfjcZfePHBB+79dpfpH1CanN30d+mT1h9GqAxxJGM5LQeeQ1+Tb+EQJrElLb38VHQ94TRq900aMIo8cSOo+8Dp8QfsB8zpqE1NO3OI9Zrj1h9EV78PqE0WMJnUdeU6E+Jjyk/hbrEFIfeWbvId8H9oTRFwdZaxJGvziW0Hn0gqYB/wyZ0PwRlxJST+BOw9m77Amj14ii1yGM/txYQudN0qDzGe4EqfA/5GJCagsHcPaEPWH0esekSwmjRxM6b5JEcZ4ww50ilvAOFxBSx4yLW+A/YU8YvfY5+ALC6NGEzhtmyZoFZoarwBLeZxUhtY4rc3bKnjB6TKJjFUHzJoTOozF2YBpsjcyxDgzhQ1YRUse8+J4wenwmaylB82hC5w0zoRXUNXaRBmSMQUqiWSWkLsaVqc/ZE0aPTFUuJWgeTei8SfLZQeMxNaZSIzbII4aE1Nmr13P2hNHjc9E9guYNCZ032YlNwESMLcZiLQHkE4aE1BFg0yAR4z1h9AiAGRA0jyZ03tyIxWMajMPWBIsxYJCnlITU5ShiHYdZ94TR4wCmSxg9jtB5KyPGYzymAYexWEMwAPIsAdYdV6aObmNPGD0aYLoEzaMJnTc0Ygs+YDw0GAtqxBjkuP38bMRWCHn73xNGjz75P73WenCEJnhwyVe3AEe8TtKdJcYhBl97wuhNAObK66lvD/9J9NS75v17wuitAN5fe4D31x7g/bUHeH/tAd5fe4D3AO+vPcD7aw/w/toDvL/2AO+vPcD7aw/w/toDvAd4f/24ABzZ8o+KLsSLS+Pv/TqTb3P4hKlQrTGh+fbIBT0Axqznnb+L/V2mb3HkN5Mb/nEHeK7d4IcDld6lmDW/iH9E+AH1MdOw/Jlu2T1xNmY98sv4wHnD7D3uNHu54WUuOsBTbQuvBsPT/UfzNxGYzwkP8c+Yz3C+r/i6DcyRL/rZ+utRwWH5PmfvcvYEt9jLDS/bg0/B64DWKrQM8AL8FPwS9beQCe6EMKNZYJol37jBMy35otdaz0Bw2H/C2Smc7+WGB0HWDELBmOByA3r5QONo4V+DpzR/hFS4U8wMW1PXNB4TOqYz9urxRV++ntWCw/U59Ty9ebdWbrgfRS9AYKKN63ZokZVygr8GZ/gfIhZXIXPsAlNjPOLBby5c1eOLvmQ9lwkOy5x6QV1j5TYqpS05JtUgUHUp5toHGsVfn4NX4RnMCe+AxTpwmApTYxqMxwfCeJGjpXzRF61nbcHhUBPqWze9svwcHJ+S6NPscKrEjug78Dx8Lj3T8D4YxGIdxmJcwhi34fzZUr7olevZCw5vkOhoClq5zBPZAnygD/Tl9EzDh6kl3VhsHYcDEb+hCtJSvuiV69kLDm+WycrOTArHmB5/VYyP6jOVjwgGawk2zQOaTcc1L+aLXrKeveDwZqlKrw8U9Y1p66uK8dEzdYwBeUQAY7DbyYNezBfdWQ97weEtAKYQg2xJIkuveAT3dYeLGH+ShrWNwZgN0b2YL7qznr3g8JYAo5bQBziPjx7BPZ0d9RCQp4UZbnFdzBddor4XHN4KYMrB2qHFRIzzcLAHQZ5the5ovui94PCWAPefaYnxIdzRwdHCbuR4B+tbiy96Lzi8E4D7z7S0mEPd+eqO3cT53Z0Y8SV80XvB4Z0ADJi/f7X113f+7p7/+UYBvur6657/+YYBvur6657/+aYBvuL6657/+aYBvuL6657/+aYBvuL6657/+aYBvuL6657/+VMA8FXWX/f8z58OgK+y/rrnf75RgLna+uue//lTA/CV1V/3/M837aKvvv6653++UQvmauuve/7nTwfAV1N/3fM/fzr24Cuuv+75nz8FFnxl9dc9//MOr/8/glixwRuUfM4AAAAASUVORK5CYII="}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}};var uo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ue},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new De},cameraProjectionMatrixInverse:{value:new De},cameraWorldMatrix:{value:new De},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				#if PERSPECTIVE_CAMERA == 1
					vec3 viewDir = normalize(-viewPos.xyz);
				#else
					vec3 viewDir = vec3(0., 0., 1.);
				#endif
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},fo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Tc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Up(r=5){let e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=fy(e),i=t.length,n=new Uint8Array(i*4);for(let a=0;a<i;++a){let o=t[a],l=2*Math.PI*o/i,c=new D(Math.cos(l),Math.sin(l),0).normalize();n[a*4]=(c.x*.5+.5)*255,n[a*4+1]=(c.y*.5+.5)*255,n[a*4+2]=127,n[a*4+3]=255}let s=new Ui(n,e,e);return s.wrapS=Yt,s.wrapT=Yt,s.needsUpdate=!0,s}function fy(r){let e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=e*e,i=Array(t).fill(0),n=Math.floor(e/2),s=e-1;for(let a=1;a<=t;){if(n===-1&&s===e?(s=e-2,n=0):(s===e&&(s=0),n<0&&(n=e-1)),i[n*e+s]!==0){s-=2,n++;continue}else i[n*e+s]=a++;s++,n--}return i}var po={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:vd(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ue},cameraProjectionMatrixInverse:{value:new De},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function vd(r,e,t){let i=py(r,e,t),n="vec3[SAMPLES](";for(let s=0;s<r;s++){let a=i[s];n+=`vec3(${a.x}, ${a.y}, ${a.z})${s<r-1?",":")"}`}return n}function py(r,e,t){let i=[];for(let n=0;n<r;n++){let s=2*Math.PI*e*n/r,a=Math.pow(n/(r-1),t);i.push(new D(Math.cos(s),Math.sin(s),a))}return i}var Ec=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let i,n,s,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,m=e-u,b=t-f,g,p;m>b?(g=1,p=0):(g=0,p=1);let v=m-g+h,_=b-p+h,y=m-1+2*h,w=b-1+2*h,E=l&255,x=c&255,M=this.perm[E+this.perm[x]]%12,R=this.perm[E+g+this.perm[x+p]]%12,A=this.perm[E+1+this.perm[x+1]]%12,I=.5-m*m-b*b;I<0?i=0:(I*=I,i=I*I*this._dot(this.grad3[M],m,b));let L=.5-v*v-_*_;L<0?n=0:(L*=L,n=L*L*this._dot(this.grad3[R],v,_));let O=.5-y*y-w*w;return O<0?s=0:(O*=O,s=O*O*this._dot(this.grad3[A],y,w)),70*(i+n+s)}noise3d(e,t,i){let n,s,a,o,c=(e+t+i)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),u=Math.floor(i+c),f=1/6,m=(h+d+u)*f,b=h-m,g=d-m,p=u-m,v=e-b,_=t-g,y=i-p,w,E,x,M,R,A;v>=_?_>=y?(w=1,E=0,x=0,M=1,R=1,A=0):v>=y?(w=1,E=0,x=0,M=1,R=0,A=1):(w=0,E=0,x=1,M=1,R=0,A=1):_<y?(w=0,E=0,x=1,M=0,R=1,A=1):v<y?(w=0,E=1,x=0,M=0,R=1,A=1):(w=0,E=1,x=0,M=1,R=1,A=0);let I=v-w+f,L=_-E+f,O=y-x+f,P=v-M+2*f,U=_-R+2*f,B=y-A+2*f,H=v-1+3*f,Z=_-1+3*f,z=y-1+3*f,X=h&255,ee=d&255,pe=u&255,Ae=this.perm[X+this.perm[ee+this.perm[pe]]]%12,K=this.perm[X+w+this.perm[ee+E+this.perm[pe+x]]]%12,me=this.perm[X+M+this.perm[ee+R+this.perm[pe+A]]]%12,Me=this.perm[X+1+this.perm[ee+1+this.perm[pe+1]]]%12,Re=.6-v*v-_*_-y*y;Re<0?n=0:(Re*=Re,n=Re*Re*this._dot3(this.grad3[Ae],v,_,y));let he=.6-I*I-L*L-O*O;he<0?s=0:(he*=he,s=he*he*this._dot3(this.grad3[K],I,L,O));let Oe=.6-P*P-U*U-B*B;Oe<0?a=0:(Oe*=Oe,a=Oe*Oe*this._dot3(this.grad3[me],P,U,B));let pt=.6-H*H-Z*Z-z*z;return pt<0?o=0:(pt*=pt,o=pt*pt*this._dot3(this.grad3[Me],H,Z,z)),32*(n+s+a+o)}noise4d(e,t,i,n){let s=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,f,m,b=(e+t+i+n)*l,g=Math.floor(e+b),p=Math.floor(t+b),v=Math.floor(i+b),_=Math.floor(n+b),y=(g+p+v+_)*c,w=g-y,E=p-y,x=v-y,M=_-y,R=e-w,A=t-E,I=i-x,L=n-M,O=R>A?32:0,P=R>I?16:0,U=A>I?8:0,B=R>L?4:0,H=A>L?2:0,Z=I>L?1:0,z=O+P+U+B+H+Z,X=a[z][0]>=3?1:0,ee=a[z][1]>=3?1:0,pe=a[z][2]>=3?1:0,Ae=a[z][3]>=3?1:0,K=a[z][0]>=2?1:0,me=a[z][1]>=2?1:0,Me=a[z][2]>=2?1:0,Re=a[z][3]>=2?1:0,he=a[z][0]>=1?1:0,Oe=a[z][1]>=1?1:0,pt=a[z][2]>=1?1:0,Be=a[z][3]>=1?1:0,it=R-X+c,ct=A-ee+c,qe=I-pe+c,Wt=L-Ae+c,Ot=R-K+2*c,ti=A-me+2*c,St=I-Me+2*c,Li=L-Re+2*c,zt=R-he+3*c,fi=A-Oe+3*c,pi=I-pt+3*c,mi=L-Be+3*c,k=R-1+4*c,gi=A-1+4*c,vt=I-1+4*c,yt=L-1+4*c,oe=g&255,Ct=p&255,Le=v&255,ke=_&255,C=o[oe+o[Ct+o[Le+o[ke]]]]%32,S=o[oe+X+o[Ct+ee+o[Le+pe+o[ke+Ae]]]]%32,G=o[oe+K+o[Ct+me+o[Le+Me+o[ke+Re]]]]%32,te=o[oe+he+o[Ct+Oe+o[Le+pt+o[ke+Be]]]]%32,$=o[oe+1+o[Ct+1+o[Le+1+o[ke+1]]]]%32,ne=.6-R*R-A*A-I*I-L*L;ne<0?h=0:(ne*=ne,h=ne*ne*this._dot4(s[C],R,A,I,L));let ae=.6-it*it-ct*ct-qe*qe-Wt*Wt;ae<0?d=0:(ae*=ae,d=ae*ae*this._dot4(s[S],it,ct,qe,Wt));let j=.6-Ot*Ot-ti*ti-St*St-Li*Li;j<0?u=0:(j*=j,u=j*j*this._dot4(s[G],Ot,ti,St,Li));let J=.6-zt*zt-fi*fi-pi*pi-mi*mi;J<0?f=0:(J*=J,f=J*J*this._dot4(s[te],zt,fi,pi,mi));let se=.6-k*k-gi*gi-vt*vt-yt*yt;return se<0?m=0:(se*=se,m=se*se*this._dot4(s[$],k,gi,vt,yt)),27*(h+d+u+f+m)}_dot(e,t,i){return e[0]*t+e[1]*i}_dot3(e,t,i,n){return e[0]*t+e[1]*i+e[2]*n}_dot4(e,t,i,n,s){return e[0]*t+e[1]*i+e[2]*n+e[3]*s}};var Hr=class r extends di{constructor(e,t,i=512,n=512,s,a,o){super(),this.width=i,this.height=n,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Up(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Et(this.width,this.height,{type:gt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new et({defines:Object.assign({},uo.defines),uniforms:Gt.clone(uo.uniforms),vertexShader:uo.vertexShader,fragmentShader:uo.fragmentShader,blending:oi,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Pa,this.normalMaterial.blending=oi,this.pdMaterial=new et({defines:Object.assign({},po.defines),uniforms:Gt.clone(po.uniforms),vertexShader:po.vertexShader,fragmentShader:po.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new et({defines:Object.assign({},fo.defines),uniforms:Gt.clone(fo.uniforms),vertexShader:fo.vertexShader,fragmentShader:fo.fragmentShader,blending:oi}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new et({uniforms:Gt.clone(_n.uniforms),vertexShader:_n.vertexShader,fragmentShader:_n.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ha,blendDst:Hs,blendEquation:Ki,blendSrcAlpha:za,blendDstAlpha:Hs,blendEquationAlpha:Ki}),this.blendMaterial=new et({uniforms:Gt.clone(Tc.uniforms),vertexShader:Tc.vertexShader,fragmentShader:Tc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Al,blendSrc:Ha,blendDst:Hs,blendEquation:Ki,blendSrcAlpha:za,blendDstAlpha:Hs,blendEquationAlpha:Ki}),this._fsQuad=new Ji(null),this._originalClearColor=new be,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let n=new on;n.format=hn,n.type=Yn,this.normalRenderTarget=new Et(this.width,this.height,{minFilter:Tt,magFilter:Tt,type:gt,depthTexture:n})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let i=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=vd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case r.OUTPUT.Off:break;case r.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=oi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=oi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=oi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=oi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=oi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,i,n,s){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,n!=null&&(e.setClearColor(n),e.setClearAlpha(s||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,i,n,s){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,n=t.clearColor||n,s=t.clearAlpha||s,n!=null&&(e.setClearColor(n),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){(i.isPoints||i.isLine||i.isLine2)&&i.visible&&(i.visible=!1,t.push(i))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Ec,i=e*e*4,n=new Uint8Array(i);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;n[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,n[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,n[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,n[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let s=new Ui(n,e,e,Ti,Si);return s.wrapS=Yt,s.wrapT=Yt,s.needsUpdate=!0,s}};Hr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var yd={low:{shadow:1024,pixelRatio:.75,bloom:!1,ao:!1,smaa:!1,shadowsOn:!0,aniso:2},medium:{shadow:2048,pixelRatio:1,bloom:!0,ao:!1,smaa:!0,shadowsOn:!0,aniso:4},high:{shadow:4096,pixelRatio:1,bloom:!0,ao:!0,smaa:!0,shadowsOn:!0,aniso:8},ultra:{shadow:4096,pixelRatio:1.5,bloom:!0,ao:!0,smaa:!0,shadowsOn:!0,aniso:16}},my={uniforms:{tDiffuse:{value:null},time:{value:0},damage:{value:0},flash:{value:0},vignette:{value:.35},grain:{value:.035},aberr:{value:0},nvg:{value:0},scope:{value:0},contrast:{value:1.06},saturation:{value:1},tint:{value:new be(1,1,1)},aspect:{value:1.7}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
    }`},Ac=class{constructor(e){this.canvas=e;let t=this.renderer=new xc({canvas:e,antialias:!1,powerPreference:"high-performance",stencil:!1});t.outputColorSpace=rt,t.toneMapping=Gs,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=zs,t.setClearColor(0),this.camera=new Ht(75,1,.05,1500),this.vmCamera=new Ht(55,1,.01,10),this.vmScene=new an,this.scene=new an,this.quality="high",this.renderScale=1,this.composer=null,this.clock=new ka,window.addEventListener("resize",()=>this.resize())}setScene(e){this.scene=e,this.buildComposer()}buildComposer(){let e=yd[this.quality],t=this.renderer;this.composer&&this.composer.dispose?.();let i=this.composer=new _c(t),n=this.mainPass=new oo(this.scene,this.camera);if(i.addPass(n),e.ao){let a=this.aoPass=new Hr(this.scene,this.camera,1,1);a.output=Hr.OUTPUT.Default,a.blendIntensity=.85,a.updateGtaoMaterial({radius:.6,distanceExponent:1.4,thickness:1.5,scale:1,samples:12}),a.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),i.addPass(a)}else this.aoPass=null;let s=this.vmPass=new oo(this.vmScene,this.vmCamera);s.clear=!1,s.clearDepth=!0,i.addPass(s),e.bloom?(this.bloom=new zr(new ue(256,256),.5,.3,8),i.addPass(this.bloom)):this.bloom=null,i.addPass(new Mc),e.smaa&&i.addPass(new wc),this.grade=new kr(my),i.addPass(this.grade),t.shadowMap.enabled=e.shadowsOn,this.resize()}setQuality(e,t=1){this.quality=yd[e]?e:"high",this.renderScale=t,this.scene&&this.buildComposer()}resize(){let e=window.innerWidth,t=window.innerHeight,i=yd[this.quality],n=Math.min(window.devicePixelRatio||1,2)*i.pixelRatio*this.renderScale;this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.canvas.style.width=e+"px",this.canvas.style.height=t+"px",this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.vmCamera.aspect=e/t,this.vmCamera.updateProjectionMatrix(),this.composer&&(this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.grade&&(this.grade.uniforms.aspect.value=e/t))}render(e){this.grade&&(this.grade.uniforms.time.value+=e),this.composer.render(e)}};var Rc=class{constructor(e){this.canvas=e,this.keys=new Set,this.pressed=new Set,this.released=new Set,this.mouse={dx:0,dy:0,left:!1,right:!1,leftPressed:!1,rightPressed:!1,wheel:0},this.locked=!1,this.enabled=!1,this.fallback=!1,addEventListener("keydown",t=>{this.enabled&&(["Tab","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Enter"].includes(t.code)&&t.preventDefault(),t.ctrlKey&&t.code!=="ControlLeft"&&t.preventDefault(),this.keys.has(t.code)||this.pressed.add(t.code),this.keys.add(t.code))}),addEventListener("keyup",t=>{this.keys.delete(t.code),this.released.add(t.code)}),addEventListener("mousemove",t=>{this.enabled&&(this.locked||this.fallback)&&(this.mouse.dx+=t.movementX||0,this.mouse.dy+=t.movementY||0)}),addEventListener("mousedown",t=>{this.enabled&&(!this.locked&&!this.fallback&&this.lock(),t.button===0&&(this.mouse.left=!0,this.mouse.leftPressed=!0),t.button===2&&(this.mouse.right=!0,this.mouse.rightPressed=!0))}),addEventListener("mouseup",t=>{t.button===0&&(this.mouse.left=!1),t.button===2&&(this.mouse.right=!1)}),addEventListener("contextmenu",t=>{this.enabled&&t.preventDefault()}),addEventListener("wheel",t=>{this.enabled&&(this.mouse.wheel+=Math.sign(t.deltaY))},{passive:!0}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,!this.locked&&this.enabled&&!this.fallback&&this.onUnlock&&this.onUnlock()}),document.addEventListener("pointerlockerror",()=>{this.fallback=!0,document.body.classList.add("nocursor")}),addEventListener("blur",()=>{this.keys.clear(),this.mouse.left=this.mouse.right=!1})}lock(){try{let e=this.canvas.requestPointerLock({unadjustedMovement:!0});e&&e.catch&&e.catch(()=>{try{let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{this.fallback=!0,document.body.classList.add("nocursor")})}catch{this.fallback=!0}})}catch{this.fallback=!0,document.body.classList.add("nocursor")}}unlock(){document.pointerLockElement&&document.exitPointerLock(),document.body.classList.remove("nocursor")}down(e){return this.keys.has(e)}hit(e){return this.pressed.has(e)}endFrame(){this.pressed.clear(),this.released.clear(),this.mouse.dx=this.mouse.dy=0,this.mouse.leftPressed=this.mouse.rightPressed=!1,this.mouse.wheel=0}};var At=r=>document.querySelector(r);var Cc=class{constructor(){this.el=At("#hud"),this.el.innerHTML=`
      <div id="xhair"><i class="t"></i><i class="b"></i><i class="l"></i><i class="r"></i><b></b></div>
      <div id="hitm"><i></i><i></i><i></i><i></i></div>
      <div id="dmgdirs"></div>
      <div id="compass"><div class="strip"></div><div class="obj">\u25C6</div><div class="center"></div></div>
      <div id="radarwrap"><canvas id="radar" width="180" height="180"></canvas></div>
      <div id="objp"><div class="h">OBJECTIVE</div><div class="t"></div><div class="c"></div></div>
      <div id="waypoint"><div class="d">\u25C6</div><div class="m"></div></div>
      <div id="ammo"><div class="wn"></div><div class="row"><span class="mag"></span><span class="res"></span></div><div class="mode"></div><div class="nades"><span class="l"></span><span class="tac"></span></div></div>
      <div id="hp"><div class="bar"><div></div></div></div>
      <div id="feed"></div>
      <div id="interact"><div class="lbl"></div><div class="bar"><div></div></div></div>
      <div id="toast"></div>
      <div id="nade"><div class="ic">\u{1F4A3}</div></div>
      <div id="scope"><div class="mask"></div><div class="lines"></div><div class="breath"></div></div>
      <div id="intro"></div>
      <div id="fps"></div>
      <div id="hint"></div>`,this.x=At("#xhair"),this.hm=At("#hitm"),this.cmp=At("#compass .strip"),this.cmpObj=At("#compass .obj"),this.objT=At("#objp .t"),this.objC=At("#objp .c"),this.wp=At("#waypoint"),this.wpM=At("#waypoint .m"),this.radar=At("#radar").getContext("2d"),this.dd=At("#dmgdirs"),this.feed=At("#feed"),this.ia=At("#interact"),this.toastEl=At("#toast"),this.nade=At("#nade"),this.scope=At("#scope"),this.intro=At("#intro"),this.fps=At("#fps"),this.hint=At("#hint"),this.hitT=0,this.dirs=[],this.nadeT=0,this.frames=0,this.fpsT=0,this.suppT=0;let e="",t={0:"N",45:"NE",90:"E",135:"SE",180:"S",225:"SW",270:"W",315:"NW"};for(let i=-1;i<=1;i++)for(let n=0;n<360;n+=15){let s=t[n];e+=`<span style="left:${(i*360+n)*4}px" class="${s?"lb":""}">${s||"|"}</span>`}this.cmp.innerHTML=e}show(e){this.el.style.display=e?"block":"none"}setObjective(e,t){if(this.objT.textContent=e,this.objC.textContent="",t){let i=At("#objp");i.classList.remove("flash"),i.offsetWidth,i.classList.add("flash"),this.toast(e==="MISSION COMPLETE"?e:"NEW OBJECTIVE",2.2)}}setObjectiveCount(e){this.objC.textContent=e}hitmarker(e,t){this.hitT=.25,this.hm.className=t?"kill on":e?"head on":"on"}killfeed(e,t){let i=document.createElement("div");i.className="k",i.innerHTML=`<b>+${t}</b> ${e}`,this.feed.prepend(i),setTimeout(()=>i.remove(),2200)}toast(e,t=1.5){this.toastEl.textContent=e,this.toastEl.style.opacity=1,clearTimeout(this._tt),this._tt=setTimeout(()=>this.toastEl.style.opacity=0,t*1e3)}showHint(e,t=6){this.hint.innerHTML=e,this.hint.style.opacity=1,clearTimeout(this._ht),this._ht=setTimeout(()=>this.hint.style.opacity=0,t*1e3)}damageDir(e,t){let i=document.createElement("div");i.className="dd",this.dd.appendChild(i),this.dirs.push({el:i,from:e.clone(),t:1.6})}suppress(){this.suppT=.4}grenadeWarning(){}grenadeIndicator(e){this.nadeT=.15,this.nadePos=e}setInteract(e,t){if(!e){this.ia.style.display="none";return}this.ia.style.display="block",this.ia.querySelector(".lbl").innerHTML=e,this.ia.querySelector(".bar div").style.width=t*100+"%"}setScope(e,t){this.scope.style.display=e?"block":"none",this.scope.querySelector(".breath").textContent=e?t?"BREATH HELD":"Hold [SHIFT] to steady":""}playIntro(e){let t=this.intro;t.innerHTML="",t.style.opacity=1;let i=300;e.forEach((n,s)=>{let a=document.createElement("div");a.className=s===0?"big":"",t.appendChild(a),setTimeout(()=>{let o=0,l=setInterval(()=>{a.textContent=n.slice(0,++o)+(o<n.length?"\u2588":""),o>=n.length&&clearInterval(l)},28)},i),i+=n.length*28+350}),setTimeout(()=>t.style.opacity=0,i+2500)}update(e){let t=this.G,i=t.player;if(!i||!i.w)return;let n=t.engine.camera,s=i.w.st,o=4+i.spread()*7,l=i.ads>.4||i.sprint||!i.alive||i.reloading&&!1;this.x.style.opacity=l?0:i.reloading?.4:.9,this.x.style.setProperty("--s",o+"px"),this.hitT>0&&(this.hitT-=e,this.hitT<=0&&(this.hm.className=""));let c=i.w;At("#ammo .wn").textContent=s.name+(s.suppressed?" \u25AA SUPP":"");let h=At("#ammo .mag");h.textContent=c.ammo,h.className="mag"+(c.ammo<=Math.ceil(s.mag*.25)?" low":""),At("#ammo .res").textContent="/ "+c.reserve,At("#ammo .mode").textContent=i.reloading?"RELOADING":c.ammo===0?c.reserve?"PRESS [R] TO RELOAD":"NO AMMO":s.modes[c.mode].toUpperCase();let d=i.loadout;At("#ammo .l").textContent=`[G] ${d.lethal==="c4"?"SEMTEX":"FRAG"} \xD7${i.grenades.lethal}`,At("#ammo .tac").textContent=`[Q] ${d.tactical==="smoke"?"SMOKE":"FLASH"} \xD7${i.grenades.tactical}`,At("#hp .bar div").style.width=i.health/i.maxHealth*100+"%";let u=(-i.yaw*180/Math.PI%360+360)%360;this.cmp.style.transform=`translateX(${-(u+360)*4}px)`;let f=t.waypoint();if(f){let b=((Math.atan2(f.x-i.pos.x,-(f.z-i.pos.z))*180/Math.PI-u)%360+540)%360-180;this.cmpObj.style.display=Math.abs(b)<75?"block":"none",this.cmpObj.style.transform=`translateX(${b*4}px)`;let g=f.clone().project(n),p=g.z>1,v=(g.x*.5+.5)*innerWidth,_=(-g.y*.5+.5)*innerHeight;p&&(v=innerWidth-v,_=innerHeight-40),v=Math.max(40,Math.min(innerWidth-40,v)),_=Math.max(60,Math.min(innerHeight-60,_)),this.wp.style.display=i.ads>.5?"none":"block",this.wp.style.transform=`translate(${v}px,${_}px)`,this.wpM.textContent=Math.round(Math.hypot(f.x-i.pos.x,f.z-i.pos.z))+"m"}else this.wp.style.display="none",this.cmpObj.style.display="none";for(let m=this.dirs.length-1;m>=0;m--){let b=this.dirs[m];if(b.t-=e,b.t<=0){b.el.remove(),this.dirs.splice(m,1);continue}let g=Math.atan2(b.from.x-i.pos.x,-(b.from.z-i.pos.z))*180/Math.PI-u;b.el.style.transform=`translate(-50%,-50%) rotate(${g}deg)`,b.el.style.opacity=Math.min(1,b.t)}if(this.nadeT>0){this.nadeT-=e,this.nade.style.display="block";let m=Math.atan2(this.nadePos.x-i.pos.x,-(this.nadePos.z-i.pos.z))-u*Math.PI/180;this.nade.style.transform=`translate(${innerWidth/2+Math.sin(m)*110-22}px,${innerHeight/2-Math.cos(m)*110-22}px)`}else this.nade.style.display="none";this.drawRadar(i,t,u),this.frames++,this.fpsT+=e,this.fpsT>.5&&(this.fps.textContent=t.settings.showFps?Math.round(this.frames/this.fpsT)+" FPS":"",this.frames=0,this.fpsT=0)}drawRadar(e,t,i){let n=this.radar,s=180,a=40;n.clearRect(0,0,s,s),n.save(),n.beginPath(),n.arc(s/2,s/2,s/2-2,0,7),n.clip(),n.fillStyle="rgba(10,16,12,0.55)",n.fillRect(0,0,s,s),n.translate(s/2,s/2),n.rotate(-i*Math.PI/180);let o=s/2/a;n.fillStyle="rgba(160,190,170,0.25)";for(let c of t.world.colliders){if(c.max.y<1.2||c.noRay)continue;let h=(c.min.x-e.pos.x)*o,d=(c.min.z-e.pos.z)*o,u=(c.max.x-c.min.x)*o,f=(c.max.z-c.min.z)*o;h>s||d>s||h+u<-s||d+f<-s||n.fillRect(h,d,u,f)}for(let c of t.enemies.list)!c.alive||!(c.hostage||c.friendly||c.state==="combat"&&c.fireCd>0&&c.seesPlayer)||(n.fillStyle=c.hostage?"#4cf":"#ff3b30",n.beginPath(),n.arc((c.pos.x-e.pos.x)*o,(c.pos.z-e.pos.z)*o,4,0,7),n.fill());let l=t.waypoint();if(l){n.fillStyle="#ffd34d";let c=Math.max(-80,Math.min(80,(l.x-e.pos.x)*o)),h=Math.max(-80,Math.min(80,(l.z-e.pos.z)*o));n.fillRect(c-4,h-4,8,8)}n.restore(),n.fillStyle="#fff",n.beginPath(),n.moveTo(s/2,s/2-8),n.lineTo(s/2-6,s/2+6),n.lineTo(s/2+6,s/2+6),n.fill(),n.strokeStyle="rgba(200,230,210,0.5)",n.lineWidth=2,n.beginPath(),n.arc(s/2,s/2,s/2-2,0,7),n.stroke()}};var mo=new D;function Zi(r,e,t,i,n,s){let a=2*Math.PI*n/4,o=Math.max(s-2*n,0),l=Math.PI/4;mo.copy(e),mo[i]=0,mo.normalize();let c=.5*a/(a+o),h=1-mo.angleTo(r)/l;return Math.sign(mo[t])===1?h*c:o/(a+o)+c+c*(1-h)}var go=class r extends qt{constructor(e=1,t=1,i=1,n=2,s=.1){let a=n*2+1;if(s=Math.min(e/2,t/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:n,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new D,c=new D,h=new D(e,t,i).divideScalar(2).subScalar(s),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,m=d.length/6,b=new D,g=.5/a;for(let p=0,v=0;p<d.length;p+=3,v+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*s,d[p+1]=h.y*Math.sign(l.y)+c.y*s,d[p+2]=h.z*Math.sign(l.z)+c.z*s,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:b.set(1,0,0),f[v+0]=Zi(b,c,"z","y",s,i),f[v+1]=1-Zi(b,c,"y","z",s,t);break;case 1:b.set(-1,0,0),f[v+0]=1-Zi(b,c,"z","y",s,i),f[v+1]=1-Zi(b,c,"y","z",s,t);break;case 2:b.set(0,1,0),f[v+0]=1-Zi(b,c,"x","z",s,e),f[v+1]=Zi(b,c,"z","x",s,i);break;case 3:b.set(0,-1,0),f[v+0]=1-Zi(b,c,"x","z",s,e),f[v+1]=1-Zi(b,c,"z","x",s,i);break;case 4:b.set(0,0,1),f[v+0]=1-Zi(b,c,"x","y",s,e),f[v+1]=1-Zi(b,c,"y","x",s,t);break;case 5:b.set(0,0,-1),f[v+0]=Zi(b,c,"x","y",s,e),f[v+1]=1-Zi(b,c,"y","x",s,t);break}}static fromJSON(e){return new r(e.width,e.height,e.depth,e.segments,e.radius)}};function _d(r,e){if(e===Vh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Fr||e===eo){let t=r.getIndex();if(t===null){let s=[],a=r.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let i=t.count-2,n=[];if(e===Fr)for(let s=1;s<=i;s++)n.push(t.getX(0)),n.push(t.getX(s)),n.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(n.push(t.getX(s)),n.push(t.getX(s+1)),n.push(t.getX(s+2))):(n.push(t.getX(s+2)),n.push(t.getX(s+1)),n.push(t.getX(s)));return n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(n),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function Pc(r){let e=new Map,t=new Map,i=r.clone();return Op(r,i,function(n,s){e.set(s,n),t.set(n,s)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;let s=n,a=e.get(n),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function Op(r,e,t){t(r,e);for(let i=0;i<r.children.length;i++)Op(r.children[i],e.children[i],t)}var Dc=class extends ln{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Rd(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new Pd(t)}),this.register(function(t){return new kd(t)}),this.register(function(t){return new zd(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new Id(t)}),this.register(function(t){return new Ld(t)}),this.register(function(t){return new Nd(t)}),this.register(function(t){return new Fd(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new Ud(t)}),this.register(function(t){return new Dd(t)}),this.register(function(t){return new Bd(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new Ic(t,Ye.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ic(t,Ye.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Gd(t)})}load(e,t,i,n){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=jn.extractUrlBase(e);a=jn.resolveURL(c,this.path)}else a=jn.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){n?n(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Os(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let s,a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Gp){try{a[Ye.KHR_BINARY_GLTF]=new Vd(e)}catch(d){n&&n(d);return}s=JSON.parse(a[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Jd(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let d=s.extensionsUsed[h],u=s.extensionsRequired||[];switch(d){case Ye.KHR_MATERIALS_UNLIT:a[d]=new Ed;break;case Ye.KHR_DRACO_MESH_COMPRESSION:a[d]=new Wd(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:a[d]=new qd;break;case Ye.KHR_MESH_QUANTIZATION:a[d]=new Xd;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){let i=this;return new Promise(function(n,s){i.parse(e,t,n,s)})}};function xy(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function kt(r,e,t){let i=r.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Td=class{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){let s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,n=t.cache.get(i);if(n)return n;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,h=new be(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Kt);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ds(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new hi(h),c.distance=d;break;case"spot":c=new ks(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Mn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},Ed=class{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Jt}extendParams(e,t,i){let n=[];e.color=new be(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Kt),e.opacity=a[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",s.baseColorTexture,rt))}return Promise.all(n)}},Ad=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=kt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},Rd=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Pi:null}extendMaterialParams(e,t){let i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(n.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(s,s)}return Promise.all(n)}},Cd=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Pi:null}extendMaterialParams(e,t){let i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(n)}},Pd=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Pi:null}extendMaterialParams(e,t){let i=kt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},Dd=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Pi:null}extendMaterialParams(e,t){let i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(n)}},Id=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Pi:null}extendMaterialParams(e,t){let i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.sheenColor=new be(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Kt)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,rt)),i.sheenRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(n)}},Ld=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Pi:null}extendMaterialParams(e,t){let i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&n.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(n)}},Nd=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Pi:null}extendMaterialParams(e,t){let i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let s=i.attenuationColor||[1,1,1];return t.attenuationColor=new be().setRGB(s[0],s[1],s[2],Kt),Promise.all(n)}},Fd=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Pi:null}extendMaterialParams(e,t){let i=kt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Ud=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Pi:null}extendMaterialParams(e,t){let i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let s=i.specularColorFactor||[1,1,1];return t.specularColor=new be().setRGB(s[0],s[1],s[2],Kt),i.specularColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,rt)),Promise.all(n)}},Od=class{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Pi:null}extendMaterialParams(e,t){let i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&n.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(n)}},Bd=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Pi:null}extendMaterialParams(e,t){let i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&n.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(n)}},kd=class{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let s=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},zd=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=n.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},Hd=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=n.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},Ic=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=n.byteOffset||0,c=n.byteLength||0,h=n.count,d=n.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,n.mode,n.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,n.mode,n.filter),f})})}else return null}},Gd=class{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=t.meshes[i.mesh];for(let c of n.primitives)if(c.mode!==Qi.TRIANGLES&&c.mode!==Qi.TRIANGLE_STRIP&&c.mode!==Qi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(let m of d){let b=new De,g=new D,p=new Dt,v=new D(1,1,1),_=new Hn(m.geometry,m.material,u);for(let w=0;w<u;w++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,w),l.SCALE&&v.fromBufferAttribute(l.SCALE,w),_.setMatrixAt(w,b.compose(g,p,v));let y=null;for(let w in l)if(w==="_COLOR_0"){let E=l[w];_.instanceColor=new zn(E.array,E.itemSize,E.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(y===null){let x=_.geometry;y=new Nt,y.name=x.name;for(let M in x.attributes)y.setAttribute(M,x.attributes[M]);for(let M in x.morphAttributes)y.morphAttributes[M]=x.morphAttributes[M];x.index!==null&&y.setIndex(x.index),y.morphTargetsRelative=x.morphTargetsRelative;for(let M of x.groups)y.addGroup(M.start,M.count,M.materialIndex);x.boundingBox!==null&&(y.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(y.boundingSphere=x.boundingSphere.clone()),y.drawRange.start=x.drawRange.start,y.drawRange.count=x.drawRange.count,y.userData=Object.assign({},x.userData),_.geometry=y}let E=l[w];y.setAttribute(w,new zn(E.array,E.itemSize,E.normalized))}lt.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Gp="glTF",xo=12,Bp={JSON:1313821514,BIN:5130562},Vd=class{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,xo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-xo,s=new DataView(e,xo),a=0;for(;a<n;){let o=s.getUint32(a,!0);a+=4;let l=s.getUint32(a,!0);if(a+=4,l===Bp.JSON){let c=new Uint8Array(e,xo+a,o);this.content=i.decode(c)}else if(l===Bp.BIN){let c=xo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Wd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,n=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let d=Yd[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=Yd[h]||h.toLowerCase();if(a[h]!==void 0){let u=i.accessors[e.attributes[h]],f=Gr[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d,u){n.decodeDracoFile(h,function(f){for(let m in f.attributes){let b=f.attributes[m],g=l[m];g!==void 0&&(b.normalized=g)}d(f)},o,c,Kt,u)})})}},qd=class{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Xd=class{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}},Lc=class extends mn{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n*3+n;for(let a=0;a!==n;a++)t[a]=i[s+a];return t}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,d=(i-t)/h,u=d*d,f=u*d,m=e*c,b=m-c,g=-2*f+3*u,p=f-u,v=1-g,_=p-u+d;for(let y=0;y!==o;y++){let w=a[b+y+o],E=a[b+y+l]*h,x=a[m+y+o],M=a[m+y]*h;s[y]=v*w+_*E+g*x+p*M}return s}},by=new Dt,jd=class extends Lc{interpolate_(e,t,i,n){let s=super.interpolate_(e,t,i,n);return by.fromArray(s).normalize().toArray(s),s}},Qi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Gr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},kp={9728:Tt,9729:ut,9984:Cl,9985:Lr,9986:Ws,9987:Ii},zp={33071:Ni,33648:br,10497:Yt},Md={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vy={CUBICSPLINE:void 0,LINEAR:Cs,STEP:Rs},Sd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yy(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new tt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yi})),r.DefaultMaterial}function js(r,e,t){for(let i in t.extensions)r[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Mn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _y(r,e,t){let i=!1,n=!1,s=!1;for(let c=0,h=e.length;c<h;c++){let d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(n=!0),d.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(r);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let d=e[c];if(i){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):r.attributes.position;a.push(u)}if(n){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):r.attributes.normal;o.push(u)}if(s){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):r.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],d=c[1],u=c[2];return i&&(r.morphAttributes.position=h),n&&(r.morphAttributes.normal=d),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function My(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)r.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Sy(r){let e,t=r.extensions&&r.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wd(t.attributes):e=r.indices+":"+wd(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,n=r.targets.length;i<n;i++)e+=":"+wd(r.targets[i]);return e}function wd(r){let e="",t=Object.keys(r).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+r[t[i]]+";";return e}function Kd(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wy(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Ty=new De,Jd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||s&&a<98?(this.textureLoader=new Na(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Ua(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Os(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return js(s,o,n),Mn(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=t.length;n<s;n++){let a=t[n].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let n=0,s=e.length;n<s;n++){let a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let n=i.clone(),s=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())s(h,o.children[c])};return s(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let n=e(t[i]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let n=0;n<t.length;n++){let s=e(t[n]);s&&i.push(s)}return i}getDependency(e,t){let i=e+":"+t,n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(s,a){i.load(jn.resolveURL(t.uri,n.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let n=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(e){let t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){let a=Md[n.type],o=Gr[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new It(c,a,l))}let s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],l=Md[n.type],c=Gr[n.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,m=n.normalized===!0,b,g;if(f&&f!==d){let p=Math.floor(u/f),v="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count,_=t.cache.get(v);_||(b=new c(o,p*f,n.count*f/h),_=new Ds(b,f/h),t.cache.add(v,_)),g=new as(_,l,u%f/h,m)}else o===null?b=new c(n.count*l):b=new c(o,u,n.count*l),g=new It(b,l,m);if(n.sparse!==void 0){let p=Md.SCALAR,v=Gr[n.sparse.indices.componentType],_=n.sparse.indices.byteOffset||0,y=n.sparse.values.byteOffset||0,w=new v(a[1],_,n.sparse.count*p),E=new c(a[2],y,n.sparse.count*l);o!==null&&(g=new It(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let x=0,M=w.length;x<M;x++){let R=w[x];if(g.setX(R,E[x*l]),l>=2&&g.setY(R,E[x*l+1]),l>=3&&g.setZ(R,E[x*l+2]),l>=4&&g.setW(R,E[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,i=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){let n=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(s.samplers||{})[a.sampler]||{};return h.magFilter=kp[u.magFilter]||ut,h.minFilter=kp[u.minFilter]||Ii,h.wrapS=zp[u.wrapS]||Yt,h.wrapT=zp[u.wrapT]||Yt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Tt&&h.minFilter!==ut,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,n=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=n.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=i.getDependency("bufferView",a.bufferView).then(function(u){return new Promise(function(f,m){t.parse(u,f,m)})});else{if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(u){return new Promise(function(f,m){let b=f;t.isImageBitmapLoader===!0&&(b=function(g){let p=new Lt(g);p.needsUpdate=!0,f(p)}),t.load(jn.resolveURL(u,s.path),b,void 0,m)})})}let d=h.then(function(u){return c===!0&&o.revokeObjectURL(l),Mn(u,a),u.userData.mimeType=a.mimeType||wy(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=d,d}assignTexture(e,t,i,n){let s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(a);a=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,n=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Er,Mi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Tr,Mi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||s||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return tt}loadMaterial(e){let t=this,i=this.json,n=this.extensions,s=i.materials[e],a,o={},l=s.extensions||{},c=[];if(l[Ye.KHR_MATERIALS_UNLIT]){let d=n[Ye.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,s,t))}else{let d=s.pbrMetallicRoughness||{};if(o.color=new be(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Kt),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,rt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Di);let h=s.alphaMode||Sd.OPAQUE;if(h===Sd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Sd.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Jt&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ue(1,1),s.normalTexture.scale!==void 0)){let d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&a!==Jt&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Jt){let d=s.emissiveFactor;o.emissive=new be().setRGB(d[0],d[1],d[2],Kt)}return s.emissiveTexture!==void 0&&a!==Jt&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,rt)),Promise.all(c).then(function(){let d=new a(o);return s.name&&(d.name=s.name),Mn(d,s),t.associations.set(d,{materials:e}),s.extensions&&js(n,d,s),d})}createUniqueName(e){let t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,n=this.primitiveCache;function s(o){return i[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Hp(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Sy(c),d=n[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=Hp(new Nt,c,t),c.mode===Qi.TRIANGLE_STRIP?u=u.then(f=>_d(f,eo)):c.mode===Qi.TRIANGLE_FAN&&(u=u.then(f=>_d(f,Fr))),n[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,n=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?yy(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,m=h.length;f<m;f++){let b=h[f],g=a[f],p,v=c[f];if(g.mode===Qi.TRIANGLES||g.mode===Qi.TRIANGLE_STRIP||g.mode===Qi.TRIANGLE_FAN||g.mode===void 0){let _=s.isSkinnedMesh===!0,y=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");_&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=_&&y?new va(b,v):new Fe(b,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===Qi.LINES)p=new _a(b,v);else if(g.mode===Qi.LINE_STRIP)p=new Ns(b,v);else if(g.mode===Qi.LINE_LOOP)p=new Ma(b,v);else if(g.mode===Qi.POINTS)p=new Fs(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&My(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Mn(p,s),g.extensions&&js(n,p,g),t.assignFinalMaterial(p),d.push(p)}for(let f=0,m=d.length;f<m;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&js(n,d[0],s),d[0];let u=new dt;s.extensions&&js(n,u,s),t.associations.set(u,{meshes:e});for(let f=0,m=d.length;f<m;f++)u.add(d[f]);return u})}loadCamera(e){let t,i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ht(Ei.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Xn(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Mn(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let n=0,s=t.joints.length;n<s;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let s=n.pop(),a=n,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let d=a[c];if(d){o.push(d);let u=new De;s!==null&&u.fromArray(s.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ya(o,l)})}loadAnimation(e){let t=this.json,i=this,n=t.animations[e],s=n.name?n.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,u=n.channels.length;d<u;d++){let f=n.channels[d],m=n.samplers[f.sampler],b=f.target,g=b.node,p=n.parameters!==void 0?n.parameters[m.input]:m.input,v=n.parameters!==void 0?n.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(m),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],m=d[2],b=d[3],g=d[4],p=[];for(let _=0,y=u.length;_<y;_++){let w=u[_],E=f[_],x=m[_],M=b[_],R=g[_];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let A=i._createAnimationTracks(w,E,x,M,R);if(A)for(let I=0;I<A.length;I++)p.push(A[I])}let v=new Us(s,void 0,p);return Mn(v,n),v})}createNodeMesh(e){let t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){let a=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(e){let t=this.json,i=this,n=t.nodes[e],s=i._loadNodeShallow(e),a=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));let l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){let h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,Ty)});for(let f=0,m=d.length;f<m;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){let f=h.userData.pivot,m=d[0];h.pivot=new D().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?n.createUniqueName(s.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new wr:c.length>1?h=new dt:c.length===1?h=c[0]:h=new lt,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(s.name&&(h.userData.name=s.name,h.name=a),Mn(h,s),s.extensions&&js(i,h,s),s.matrix!==void 0){let d=new De;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(s.mesh!==void 0&&n.meshCache.refs[s.mesh]>1){let d=n.associations.get(h);n.associations.set(h,{...d})}return n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],n=this,s=new dt;i.name&&(s.name=n.createUniqueName(i.name)),Mn(s,i),i.extensions&&js(t,s,i);let a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++){let u=l[h];u.parent!==null?s.add(Pc(u)):s.add(u)}let c=h=>{let d=new Map;for(let[u,f]of n.associations)(u instanceof Mi||u instanceof Lt)&&d.set(u,f);return h.traverse(u=>{let f=n.associations.get(u);f!=null&&d.set(u,f)}),d};return n.associations=c(s),s})}_createAnimationTracks(e,t,i,n,s){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}ms[s.path]===ms.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(ms[s.path]){case ms.weights:h=Vn;break;case ms.rotation:h=Wn;break;case ms.translation:case ms.scale:h=hs;break;default:i.itemSize===1?h=Vn:h=hs;break}let d=n.interpolation!==void 0?vy[n.interpolation]:Cs,u=this._getArrayFromAccessor(i);for(let f=0,m=l.length;f<m;f++){let b=new h(l[f]+"."+ms[s.path],t.array,u,d);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Kd(t.constructor),n=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)n[s]=t[s]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let n=this instanceof Wn?jd:Lc;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Ey(r,e,t){let i=e.attributes,n=new ri;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){let h=Kd(Gr[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new D,l=new D;for(let c=0,h=s.length;c<h;c++){let d=s[c];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,m=u.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),u.normalized){let b=Kd(Gr[u.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}r.boundingBox=n;let a=new Fi;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=a}function Hp(r,e,t){let i=e.attributes,n=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(let a in i){let o=Yd[a]||a.toLowerCase();o in r.attributes||n.push(s(i[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});n.push(a)}return We.workingColorSpace!==Kt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),Mn(r,e),Ey(r,e,t),Promise.all(n).then(function(){return e.targets!==void 0?_y(r,e.targets,t):r})}var Nc=class extends La{constructor(e){super(e),this.type=gt}parse(e){let a=function(M,R){switch(M){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(R||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(R||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(R||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(R||""))}},d=function(M,R,A){R=R||1024;let L=M.pos,O=-1,P=0,U="",B=String.fromCharCode.apply(null,new Uint16Array(M.subarray(L,L+128)));for(;0>(O=B.indexOf(`
`))&&P<R&&L<M.byteLength;)U+=B,P+=B.length,L+=128,B=String.fromCharCode.apply(null,new Uint16Array(M.subarray(L,L+128)));return-1<O?(A!==!1&&(M.pos+=P+O+1),U+B.slice(0,O)):!1},u=function(M){let R=/^#\?(\S+)/,A=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*FORMAT=(\S+)\s*$/,O=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},U,B;for((M.pos>=M.byteLength||!(U=d(M)))&&a(1,"no header found"),(B=U.match(R))||a(3,"bad initial token"),P.valid|=1,P.programtype=B[1],P.string+=U+`
`;U=d(M),U!==!1;){if(P.string+=U+`
`,U.charAt(0)==="#"){P.comments+=U+`
`;continue}if((B=U.match(A))&&(P.gamma=parseFloat(B[1])),(B=U.match(I))&&(P.exposure=parseFloat(B[1])),(B=U.match(L))&&(P.valid|=2,P.format=B[1]),(B=U.match(O))&&(P.valid|=4,P.height=parseInt(B[1],10),P.width=parseInt(B[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||a(3,"missing format specifier"),P.valid&4||a(3,"missing image size specifier"),P},f=function(M,R,A){let I=R;if(I<8||I>32767||M[0]!==2||M[1]!==2||M[2]&128)return new Uint8Array(M);I!==(M[2]<<8|M[3])&&a(3,"wrong scanline width");let L=new Uint8Array(4*R*A);L.length||a(4,"unable to allocate buffer space");let O=0,P=0,U=4*I,B=new Uint8Array(4),H=new Uint8Array(U),Z=A;for(;Z>0&&P<M.byteLength;){P+4>M.byteLength&&a(1),B[0]=M[P++],B[1]=M[P++],B[2]=M[P++],B[3]=M[P++],(B[0]!=2||B[1]!=2||(B[2]<<8|B[3])!=I)&&a(3,"bad rgbe scanline format");let z=0,X;for(;z<U&&P<M.byteLength;){X=M[P++];let pe=X>128;if(pe&&(X-=128),(X===0||z+X>U)&&a(3,"bad scanline data"),pe){let Ae=M[P++];for(let K=0;K<X;K++)H[z++]=Ae}else H.set(M.subarray(P,P+X),z),z+=X,P+=X}let ee=I;for(let pe=0;pe<ee;pe++){let Ae=0;L[O]=H[pe+Ae],Ae+=I,L[O+1]=H[pe+Ae],Ae+=I,L[O+2]=H[pe+Ae],Ae+=I,L[O+3]=H[pe+Ae],O+=4}Z--}return L},m=function(M,R,A,I){let L=M[R+3],O=Math.pow(2,L-128)/255;A[I+0]=M[R+0]*O,A[I+1]=M[R+1]*O,A[I+2]=M[R+2]*O,A[I+3]=1},b=function(M,R,A,I){let L=M[R+3],O=Math.pow(2,L-128)/255;A[I+0]=rs.toHalfFloat(Math.min(M[R+0]*O,65504)),A[I+1]=rs.toHalfFloat(Math.min(M[R+1]*O,65504)),A[I+2]=rs.toHalfFloat(Math.min(M[R+2]*O,65504)),A[I+3]=rs.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;let p=u(g),v=p.width,_=p.height,y=f(g.subarray(g.pos),v,_),w,E,x;switch(this.type){case wi:x=y.length/4;let M=new Float32Array(x*4);for(let A=0;A<x;A++)m(y,A*4,M,A*4);w=M,E=wi;break;case gt:x=y.length/4;let R=new Uint16Array(x*4);for(let A=0;A<x;A++)b(y,A*4,R,A*4);w=R,E=gt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:v,height:_,data:w,header:p.string,gamma:p.gamma,exposure:p.exposure,type:E,colorSpace:Kt,minFilter:ut,magFilter:ut,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var Zd=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var n=WebAssembly.validate(t)?o(e):o(r),s,a=WebAssembly.instantiate(n,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),_=0;_<p.length;++_){var y=p.charCodeAt(_);v[_]=y>96?y-97:y>64?y-39:y+4}for(var w=0,_=0;_<p.length;++_)v[w++]=v[_]<60?i[v[_]]:(v[_]-60)*64+v[++_];return v.buffer.slice(0,w)}function l(p,v,_,y,w,E,x){var M=p.exports.sbrk,R=y+3&-4,A=M(R*w),I=M(E.length),L=new Uint8Array(p.exports.memory.buffer);L.set(E,I);var O=v(A,y,w,I,E.length);if(O==0&&x&&x(A,R,w),_.set(L.subarray(A,A+y*w)),M(A-M(0)),O!=0)throw new Error("Malformed buffer data: "+O)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function f(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(_){var y=_.data;v.pending-=y.count,v.requests[y.id][y.action](y.value),delete v.requests[y.id]},v}function m(p){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(n)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+l.toString()+g.toString(),_=new Blob([v],{type:"text/javascript"}),y=URL.createObjectURL(_),w=d.length;w<p;++w)d[w]=f(y);for(var w=p;w<d.length;++w)d[w].object.postMessage({});d.length=p,URL.revokeObjectURL(y)}function b(p,v,_,y,w){for(var E=d[0],x=1;x<d.length;++x)d[x].pending<E.pending&&(E=d[x]);return new Promise(function(M,R){var A=new Uint8Array(_),I=++u;E.pending+=p,E.requests[I]={resolve:M,reject:R},E.object.postMessage({id:I,count:p,size:v,source:A,mode:y,filter:w},[A.buffer])})}function g(p){var v=p.data;self.ready.then(function(_){if(!v.id)return self.close();try{var y=new Uint8Array(v.count*v.size);l(_,_.exports[v.mode],y,v.count,v.size,v.source,_.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:y},[y.buffer])}catch(w){self.postMessage({id:v.id,count:v.count,action:"reject",value:w})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,v,_,y,w){l(s,s.exports.meshopt_decodeVertexBuffer,p,v,_,y,s.exports[c[w]])},decodeIndexBuffer:function(p,v,_,y){l(s,s.exports.meshopt_decodeIndexBuffer,p,v,_,y)},decodeIndexSequence:function(p,v,_,y){l(s,s.exports.meshopt_decodeIndexSequence,p,v,_,y)},decodeGltfBuffer:function(p,v,_,y,w,E){l(s,s.exports[h[w]],p,v,_,y,s.exports[c[E]])},decodeGltfBufferAsync:function(p,v,_,y,w){return d.length>0?b(p,v,_,h[y],c[w]):a.then(function(){var E=new Uint8Array(p*v);return l(s,s.exports[h[y]],E,p,v,_,s.exports[c[w]]),E})}}})();var Ay=()=>window.__A||{};function Ry(r){let e=atob(r),t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}function tu(r){let e=Ay()[r];if(!e)throw new Error("Missing asset "+r);return Ry(e)}var Qd=new Map;async function Sn(r,{srgb:e=!1,repeat:t=1,aniso:i=8}={}){let n=r+(e?":s":":l");if(!Qd.has(n)){let o=(async()=>{let l=tu(r),c=r.endsWith(".png")?"image/png":r.endsWith(".webp")?"image/webp":"image/jpeg",h=await createImageBitmap(new Blob([l],{type:c}),{imageOrientation:"flipY"}),d=new Lt(h);return d.flipY=!1,d.wrapS=d.wrapT=Yt,d.colorSpace=e?rt:dn,d.anisotropy=i,d.generateMipmaps=!0,d.minFilter=Ii,d.needsUpdate=!0,d})();Qd.set(n,o)}let s=await Qd.get(n);if(t===1)return s;let a=s.clone();return a.repeat.set(t,t),a.needsUpdate=!0,a}var Fc,$d=new Map;async function Ys(r){if(!$d.has(r)){Fc||(Fc=new Dc,Fc.setMeshoptDecoder(Zd));let e=(async()=>{await Zd.ready;let t=tu("model/"+r+".glb");return await new Promise((i,n)=>Fc.parse(t.buffer,"",i,n))})();$d.set(r,e)}return $d.get(r)}function Vp(r){let e=tu("hdri/"+r+".hdr"),i=new Nc().parse(e.buffer),n=new Ui(i.data,i.width,i.height,Ti,i.type);return n.colorSpace=Kt,n.mapping=fs,n.minFilter=ut,n.magFilter=ut,n.generateMipmaps=!1,n.flipY=!0,n.needsUpdate=!0,n}var eu=new Map;async function ui(r,{repeat:e=1,color:t,roughMul:i,metal:n,normalScale:s=1,envInt:a}={}){let o=r+"|"+e+"|"+(t??"")+"|"+(i??"")+"|"+(n??"")+"|"+s;if(eu.has(o))return eu.get(o);let[l,c,h]=await Promise.all([Sn(`tex/${r}_diff.jpg`,{srgb:!0}),Sn(`tex/${r}_nor.jpg`),Sn(`tex/${r}_arm.jpg`)]),d=new tt({map:l,normalMap:c,aoMap:h,roughnessMap:h,metalnessMap:h,roughness:i??1,metalness:n??1,normalScale:new ue(s,s)});if(d.aoMapIntensity=1,t&&d.color.set(t),iu(d),a!==void 0&&(d.envMapIntensity=a),e!==1){for(let u of[d.map,d.normalMap,d.aoMap]);d.userData.uvScale=e}return eu.set(o,d),d}function iu(r,e=1){r.onBeforeCompile=t=>{t.uniforms.grimeAmt={value:e},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vWPos; uniform float grimeAmt;
      float gh(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      float gn(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(gh(i), gh(i + vec3(1,0,0)), f.x), mix(gh(i + vec3(0,1,0)), gh(i + vec3(1,1,0)), f.x), f.y),
                   mix(mix(gh(i + vec3(0,0,1)), gh(i + vec3(1,0,1)), f.x), mix(gh(i + vec3(0,1,1)), gh(i + vec3(1,1,1)), f.x), f.y), f.z); }`).replace("#include <map_fragment>",`#include <map_fragment>
      { float macro = gn(vWPos * 0.12) * 0.6 + gn(vWPos * 0.45) * 0.4;
        float base = 1.0 - smoothstep(0.0, 1.1, vWPos.y) * 1.0;
        float streak = gn(vec3(vWPos.x * 2.5, vWPos.y * 0.15, vWPos.z * 2.5));
        float g = clamp(base * 0.35 + (macro - 0.5) * 0.35 + (streak - 0.5) * 0.12 * smoothstep(3.5, 0.5, vWPos.y), -0.25, 0.5) * grimeAmt;
        diffuseColor.rgb *= 1.0 - g; }`)},r.customProgramCacheKey=()=>"grime"+e}var Kn={m4a1:{name:"M4A1",type:"Assault Rifle",slot:"primary",sound:"ar",damage:[32,22],range:[30,70],head:2,rpm:800,mag:30,reserve:180,reload:2.1,reloadEmpty:2.6,auto:!0,modes:["auto","semi"],ads:.22,zoom:1.25,hip:3.2,adsSpread:.15,recoil:[.9,.35],kick:.022,move:.95,model:"m4",sightY:.092,desc:"Versatile 5.56 carbine. Controllable recoil, fast handling."},ak47:{name:"AK-47",type:"Assault Rifle",slot:"primary",sound:"ak",damage:[40,28],range:[28,65],head:2,rpm:600,mag:30,reserve:150,reload:2.4,reloadEmpty:2.9,auto:!0,modes:["auto","semi"],ads:.26,zoom:1.25,hip:3.6,adsSpread:.2,recoil:[1.35,.55],kick:.03,move:.93,model:"ak",sightY:.08,desc:"Hard-hitting 7.62. Heavy recoil, rewards burst fire."},mp5:{name:"MP5",type:"Submachine Gun",slot:"primary",sound:"smg",damage:[28,16],range:[15,40],head:1.8,rpm:850,mag:30,reserve:210,reload:1.8,reloadEmpty:2.3,auto:!0,modes:["auto","semi"],ads:.16,zoom:1.15,hip:2.4,adsSpread:.25,recoil:[.55,.3],kick:.016,move:1.05,model:"mp5",sightY:.085,desc:"Fast and accurate up close. Great on the move."},m870:{name:"M870",type:"Shotgun",slot:"primary",sound:"shotgun",damage:[22,5],range:[7,22],head:1.3,rpm:70,mag:6,reserve:36,reload:.55,reloadEmpty:.55,shellReload:!0,pellets:9,pelletSpread:4,auto:!1,modes:["pump"],ads:.22,zoom:1.1,hip:4,adsSpread:3,recoil:[4,1],kick:.07,move:.97,model:"shotgun",sightY:.07,desc:"Pump-action 12 gauge. Devastating in close quarters."},m249:{name:"M249",type:"Light Machine Gun",slot:"primary",sound:"lmg",damage:[34,25],range:[35,80],head:1.8,rpm:750,mag:100,reserve:200,reload:4.5,reloadEmpty:5,auto:!0,modes:["auto"],ads:.38,zoom:1.25,hip:4.5,adsSpread:.3,recoil:[.95,.6],kick:.025,move:.85,model:"lmg",sightY:.137,desc:"Belt-fed suppression. Huge capacity, slow handling."},bolt762:{name:"Bolt-Action 7.62",type:"Sniper Rifle",slot:"primary",sound:"sniper",damage:[120,95],range:[80,200],head:3,rpm:45,mag:5,reserve:30,reload:3,reloadEmpty:3.4,bolt:!0,auto:!1,modes:["bolt"],ads:.4,zoom:5.5,hip:7,adsSpread:0,recoil:[4.5,.8],kick:.08,move:.88,model:"sniper",scope:!0,sightY:.075,desc:"One shot, one kill. Scoped 7.62 with breath control (hold Shift)."},m9:{name:"P38 Service Pistol",type:"Pistol",slot:"secondary",sound:"pistol",damage:[34,20],range:[15,35],head:2,rpm:400,mag:8,reserve:48,reload:1.5,reloadEmpty:1.9,auto:!1,modes:["semi"],ads:.14,zoom:1.1,hip:2.4,adsSpread:.3,recoil:[1.6,.4],kick:.04,move:1.08,model:"pistol",sightY:.064,desc:"Reliable 9mm sidearm. Quick to draw."},d50:{name:"D50 Magnum",type:"Pistol",slot:"secondary",sound:"magnum",damage:[70,40],range:[18,40],head:2,rpm:180,mag:7,reserve:28,reload:1.9,reloadEmpty:2.3,auto:!1,modes:["semi"],ads:.18,zoom:1.15,hip:3.2,adsSpread:.4,recoil:[4,.9],kick:.08,move:1.04,model:"magnum",sightY:.078,desc:".50 calibre hand cannon. Brutal recoil."}},nu={optic:{iron:{name:"Iron Sights"},reddot:{name:"Red Dot",zoom:1.1},holo:{name:"Holographic",zoom:1.12},acog:{name:"4x ACOG",zoom:2.4,adsMul:1.25}},muzzle:{none:{name:"None"},suppressor:{name:"Suppressor",quiet:!0,rangeMul:.8},compensator:{name:"Compensator",recoilSide:.6}},under:{none:{name:"None"},grip:{name:"Vertical Grip",recoilMul:.78},laser:{name:"Laser Sight",hipMul:.6}},mag:{std:{name:"Standard Mag"},ext:{name:"Extended Mag",magMul:1.5,reloadMul:1.12}}},Wp={frag:{name:"Frag Grenade",count:2},c4:{name:"Semtex",count:2,sticky:!0}},qp={flash:{name:"Flashbang",count:2},smoke:{name:"Smoke Grenade",count:1}},Xp={stopping:{name:"Stopping Power",desc:"+25% bullet damage"},sleight:{name:"Sleight of Hand",desc:"35% faster reloads"},jugg:{name:"Juggernaut",desc:"+40% max health"},lightweight:{name:"Lightweight",desc:"+12% movement speed, faster sprint-out"},steady:{name:"Steady Aim",desc:"35% tighter hip-fire spread"},scavenger:{name:"Scavenger",desc:"Pick up ammo from fallen enemies"}};function jp(r){let e=Kn[r];return e.scope?{optic:[],muzzle:["none","suppressor"],under:[],mag:["std","ext"]}:e.slot==="secondary"?{optic:["iron","reddot"],muzzle:["none","suppressor"],under:["none","laser"],mag:["std","ext"]}:e.model==="shotgun"?{optic:["iron","reddot","holo"],muzzle:["none"],under:["none","grip","laser"],mag:["std","ext"]}:{optic:["iron","reddot","holo","acog"],muzzle:["none","suppressor","compensator"],under:["none","grip","laser"],mag:["std","ext"]}}function Oc(r,e={},t=[]){let i={...Kn[r],id:r},n=nu,s=n.optic[e.optic]||{},a=n.muzzle[e.muzzle]||{},o=n.under[e.under]||{},l=n.mag[e.mag]||{};i.zoom=i.scope?i.zoom:(s.zoom||1)*i.zoom,i.ads*=s.adsMul||1,i.suppressed=!!a.quiet,a.rangeMul&&(i.range=i.range.map(h=>h*a.rangeMul)),i.recoil=[i.recoil[0]*(o.recoilMul||1),i.recoil[1]*(o.recoilMul||1)*(a.recoilSide||1)],i.hip*=(o.hipMul||1)*(t.includes("steady")?.65:1),i.laser=e.under==="laser",i.mag=Math.round(i.mag*(l.magMul||1));let c=(l.reloadMul||1)*(t.includes("sleight")?.65:1);return i.reload*=c,i.reloadEmpty*=c,i.dmgMul=t.includes("stopping")?1.25:1,i.optic=i.scope?"scope":e.optic||"iron",i}var Uc=null;async function Yp(){if(Uc)return Uc;let[r,e,t,i]=await Promise.all([Sn("tex/metal_plate_nor.jpg"),Sn("tex/metal_plate_arm.jpg"),Sn("tex/brown_planks_03_diff.jpg",{srgb:!0}),Sn("tex/brown_planks_03_nor.jpg")]),n=r.clone();return n.repeat.set(3,3),n.needsUpdate=!0,Uc={metal:new tt({color:2303272,metalness:.85,roughness:.38,normalMap:n,normalScale:new ue(.15,.15)}),metalWorn:new tt({color:3816253,metalness:.9,roughness:.3,normalMap:n,normalScale:new ue(.2,.2)}),polymer:new tt({color:1579291,metalness:.05,roughness:.62,normalMap:n,normalScale:new ue(.35,.35)}),tan:new tt({color:9074262,metalness:.05,roughness:.7,normalMap:n,normalScale:new ue(.3,.3)}),wood:new tt({color:11561530,map:t,normalMap:i,normalScale:new ue(.4,.4),metalness:0,roughness:.45}),brass:new tt({color:13213766,metalness:1,roughness:.25}),glass:new tt({color:1780275,metalness:1,roughness:.04,transparent:!0,opacity:.35}),sleeve:new tt({map:Cy(),metalness:0,roughness:.92,normalMap:n,normalScale:new ue(.8,.8)}),glove:new tt({color:2762532,metalness:0,roughness:.75}),skin:new tt({color:11041370,metalness:0,roughness:.6}),laser:new Jt({color:16719904,transparent:!0,opacity:.5,blending:ki,depthWrite:!1})},Uc}function Cy(){let r=document.createElement("canvas");r.width=r.height=256;let e=r.getContext("2d");e.fillStyle="#5b5a44",e.fillRect(0,0,256,256);let t=["#3f4430","#6d6648","#2c2a22","#7a7458"];for(let n=0;n<90;n++){e.fillStyle=t[n%t.length],e.beginPath();let s=Math.random()*256,a=Math.random()*256,o=8+Math.random()*22;for(let l=0;l<9;l++){let c=l/9*Math.PI*2,h=o*(.6+Math.random()*.6);e.lineTo(s+Math.cos(c)*h*1.6,a+Math.sin(c)*h*.7)}e.fill()}for(let n=0;n<4e3;n++)e.fillStyle=`rgba(0,0,0,${Math.random()*.12})`,e.fillRect(Math.random()*256,Math.random()*256,1,2);let i=new ji(r);return i.colorSpace=rt,i.wrapS=i.wrapT=Yt,i.repeat.set(1,2),i}function Py(r){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.translate(64,64);let i=(s,a)=>{let o=t.createRadialGradient(0,0,0,0,0,s);o.addColorStop(0,`rgba(255,60,40,${a})`),o.addColorStop(1,"rgba(255,0,0,0)"),t.fillStyle=o,t.beginPath(),t.arc(0,0,s,0,7),t.fill()};if(t.strokeStyle="rgba(255,50,30,1)",t.fillStyle="rgba(255,80,60,1)",r==="reddot")i(10,1),t.beginPath(),t.arc(0,0,3,0,7),t.fill();else if(r==="holo"){t.lineWidth=3,t.beginPath(),t.arc(0,0,40,0,7),t.stroke(),i(8,1),t.beginPath(),t.arc(0,0,3,0,7),t.fill();for(let s of[0,1,2,3])t.save(),t.rotate(s*Math.PI/2),t.fillRect(-2,40,4,12),t.restore()}else r==="acog"&&(t.lineWidth=4,t.beginPath(),t.moveTo(-18,14),t.lineTo(0,-4),t.lineTo(18,14),t.stroke(),t.fillRect(-1.5,-4,3,60),i(6,.8));let n=new ji(e);return n.colorSpace=rt,n}function Je(r,e,t,i,n,s,a,o=.006){let l=new Fe(new go(r,e,t,2,o),i);return l.position.set(n,s,a),l}function $e(r,e,t,i,n,s,a){let o=new Fe(new qt(r,e,t),i);return o.position.set(n,s,a),o}function $t(r,e,t,i,n,s,a=20,o){let l=new Fe(new ci(o??r,r,e,a),t);return l.rotation.x=Math.PI/2,l.position.set(i,n,s),l}function ye(r,...e){for(let t of e)r.add(t);return e[0]}function bo(r,e,t,i,n,s=6){let a=new dt,o=e/s,l=0,c=0,h=0;for(let d=0;d<s;d++){let u=$e(t,o*1.06,i,r,0,l-Math.cos(h)*o/2,c-Math.sin(h)*o/2);u.rotation.x=h,a.add(u),l-=Math.cos(h)*o,c-=Math.sin(h)*o,h+=n/s}return a}function Dy(r,e,t){let i=new dt,n=(l,c,h,d,u)=>{let f=l.distanceTo(c),m=new Fe(new ci(d,h,f,14),u);m.position.copy(l).add(c).multiplyScalar(.5),m.quaternion.setFromUnitVectors(new D(0,1,0),c.clone().sub(l).normalize()),i.add(m)},s=(l,c,h)=>{let d=new Fe(new go(.05,.085,.095,2,.02),c);return d.position.copy(l),d.rotation.z=h,i.add(d),d},a=new D(.16,-.22,.28),o=e.clone().add(new D(.02,-.03,.06));if(n(o,a,.034,.04,r.sleeve),n(a,a.clone().add(new D(.12,-.12,.35)),.05,.055,r.sleeve),n(o,e,.03,.032,r.glove),s(e,r.glove,.1),t){let l=new D(-.16,-.22,t.z+.28),c=t.clone().add(new D(-.02,-.035,.06));n(c,l,.034,.04,r.sleeve),n(l,l.clone().add(new D(-.1,-.15,.35)),.05,.055,r.sleeve),n(c,t,.03,.032,r.glove),s(t,r.glove,-.3)}return i}async function Iy(r,e){let t=Kn[r],i=await Yp(),n=new dt,s={group:n,sightY:t.sightY,railY:.075,railZ:-.02},a=new lt,o=new lt;n.add(a,o);let l=new D(0,-.035,-.3),c=new D(0,-.07,.07);switch(t.model){case"m4":{ye(n,Je(.052,.058,.25,i.metal,0,.035,-.05)),ye(n,Je(.048,.05,.19,i.metal,0,-.012,-.02)),ye(n,$e(.024,.012,.23,i.metal,0,.069,-.045));for(let d=0;d<12;d++)ye(n,$e(.026,.004,.008,i.metal,0,.076,-.15+d*.019));ye(n,Je(.06,.062,.31,i.polymer,0,.032,-.33,.012)),ye(n,$e(.024,.01,.3,i.metal,0,.068,-.33)),ye(n,$t(.0105,.26,i.metal,0,.03,-.6)),ye(n,$t(.016,.07,i.metal,0,.03,-.75)),ye(n,$e(.02,.05,.02,i.metal,0,.075,-.47)),ye(n,$e(.004,.02,.004,i.metal,0,.098,-.47)),ye(n,$t(.017,.18,i.metal,0,.03,.16)),ye(n,Je(.045,.085,.17,i.polymer,0,.005,.29,.01));let h=ye(n,Je(.03,.11,.045,i.polymer,0,-.075,.075,.008));h.rotation.x=-.3,ye(n,$e(.006,.006,.07,i.metal,0,-.045,.02)),ye(n,$e(.012,.012,.03,i.metal,0,.06,.09)),s.mag=bo(i.metal,.17,.024,.062,.32),s.mag.position.set(0,-.035,-.075),n.add(s.mag),e.optic==="iron"&&(ye(n,$e(.024,.03,.03,i.metal,0,.088,.06)),ye(n,$e(.006,.012,.006,i.metal,0,.105,.06))),s.railY=.076,s.railZ=-.02,a.position.set(0,.03,-.79),o.position.set(.03,.04,-.02),l.set(0,-.025,-.33);break}case"ak":{ye(n,Je(.05,.065,.3,i.metal,0,.02,-.04)),ye(n,Je(.046,.025,.28,i.metalWorn,0,.06,-.03,.01)),ye(n,Je(.055,.055,.22,i.wood,0,.018,-.33,.012)),ye(n,Je(.035,.03,.2,i.wood,0,.065,-.31,.01)),ye(n,$t(.011,.3,i.metal,0,.022,-.58)),ye(n,$t(.01,.25,i.metal,0,.065,-.42)),ye(n,$e(.018,.045,.018,i.metal,0,.05,-.68)),ye(n,$e(.004,.02,.004,i.metal,0,.08,-.68)),ye(n,$t(.015,.05,i.metal,0,.022,-.74)),ye(n,$e(.02,.02,.06,i.metal,0,.075,-.17)),ye(n,$e(.012,.008,.01,i.metal,0,.087,-.17));let h=ye(n,Je(.042,.075,.26,i.wood,0,-.01,.24,.012));h.rotation.x=.12;let d=ye(n,Je(.03,.1,.045,i.wood,0,-.06,.07,.008));d.rotation.x=-.35,ye(n,$e(.006,.006,.07,i.metal,0,-.03,.02)),s.mag=bo(i.metalWorn,.2,.026,.07,.65,8),s.mag.position.set(0,-.012,-.08),n.add(s.mag),s.railY=.074,s.railZ=-.05,a.position.set(0,.022,-.78),o.position.set(.03,.04,-.02),l.set(0,-.02,-.33);break}case"mp5":{ye(n,Je(.045,.06,.32,i.metal,0,.03,-.1,.012)),ye(n,Je(.05,.05,.17,i.polymer,0,.028,-.32,.02)),ye(n,$t(.01,.08,i.metal,0,.03,-.44)),ye(n,$t(.014,.03,i.metal,0,.03,-.475)),ye(n,$t(.006,.08,i.metal,0,.073,-.38)),ye(n,$t(.012,.012,i.metal,0,.083,-.4)),ye(n,$e(.03,.03,.03,i.metal,0,.075,.03)),ye(n,$e(.006,.012,.004,i.metal,0,.096,.035)),ye(n,$e(.014,.012,.25,i.metal,.02,-0,.17)),ye(n,$e(.014,.012,.25,i.metal,-.02,-0,.17)),ye(n,Je(.045,.07,.025,i.polymer,0,-.01,.3));let h=ye(n,Je(.03,.1,.045,i.polymer,0,-.06,.04,.008));h.rotation.x=-.25,s.mag=bo(i.metal,.17,.02,.045,.45),s.mag.position.set(0,0,-.14),n.add(s.mag),s.railY=.074,s.railZ=-.08,a.position.set(0,.03,-.5),o.position.set(.03,.04,-.1),l.set(0,-.012,-.32),c.set(0,-.055,.04);break}case"shotgun":{ye(n,Je(.048,.06,.22,i.metal,0,.025,-.04)),ye(n,$t(.013,.55,i.metal,0,.04,-.42)),ye(n,$t(.012,.45,i.metal,0,.006,-.36)),s.pump=ye(n,Je(.05,.045,.17,i.wood,0,.008,-.32,.014)),ye(n,$e(.006,.01,.006,i.brass,0,.06,-.68));let h=ye(n,Je(.042,.08,.3,i.wood,0,-.02,.24,.015));h.rotation.x=.15;let d=ye(n,Je(.03,.09,.05,i.wood,0,-.04,.09,.01));d.rotation.x=-.6,ye(n,$e(.006,.006,.06,i.metal,0,-.02,.02)),s.mag=new lt,n.add(s.mag),s.railY=.056,s.railZ=-.05,a.position.set(0,.04,-.7),o.position.set(.03,.03,-.03),l.set(0,-.02,-.32),c.set(0,-.06,.09);break}case"lmg":{ye(n,Je(.07,.08,.34,i.metal,0,.03,-.05)),ye(n,Je(.075,.03,.25,i.metal,0,.085,-.03,.008)),ye(n,Je(.07,.06,.2,i.polymer,0,.03,-.3,.01)),ye(n,$t(.013,.4,i.metal,0,.03,-.55)),ye(n,$t(.02,.07,i.metal,0,.03,-.77)),ye(n,$e(.012,.1,.02,i.metal,.012,-.02,-.6)),ye(n,$e(.012,.1,.02,i.metal,-.012,-.02,-.6)),ye(n,$e(.02,.04,.02,i.metal,0,.11,-.62)),ye(n,$e(.005,.015,.005,i.metal,0,.13,-.62)),ye(n,$e(.03,.035,.03,i.metal,0,.12,.08)),ye(n,$e(.008,.012,.005,i.metal,0,.141,.08)),ye(n,$t(.04,.03,i.metal,0,.11,-.1)),ye(n,Je(.05,.09,.22,i.polymer,0,0,.25));let h=ye(n,Je(.032,.11,.045,i.polymer,0,-.06,.08,.008));h.rotation.x=-.3,s.mag=new dt,s.mag.add(Je(.09,.12,.13,i.tan,-.03,-.07,0,.015)),s.mag.position.set(0,0,-.09),n.add(s.mag),s.railY=.1,s.railZ=-.05,a.position.set(0,.03,-.81),o.position.set(.04,.04,-.05),l.set(0,-.03,-.3),c.set(0,-.06,.085);break}case"sniper":{let d=(await Ys("bolt_action_rifle_7_62")).scene.clone(!0);d.rotation.y=Math.PI/2,d.scale.setScalar(1),d.position.set(0,-.01,-.12),d.traverse(u=>{u.isMesh&&(u.castShadow=!1,u.material=u.material.clone(),u.material.envMapIntensity=1.2)}),n.add(d),s.mag=new lt,s.mag.position.set(0,-.06,-.15),n.add(s.mag),s.bolt=new lt,n.add(s.bolt),a.position.set(0,.04,-.73),o.position.set(.03,.05,-.1),l.set(0,-.03,-.32),c.set(0,-.07,.12),s.sightY=.075;break}case"pistol":{let d=(await Ys("service_pistol")).scene,u=["service_pistol_pistol_a","service_pistol_slide_a","service_pistol_hammer_a","service_pistol_trigger_a","service_pistol_magazine_loaded"],f=new dt;f.rotation.y=Math.PI/2,f.position.set(0,-.03,-.05),d.updateMatrixWorld(!0);for(let m of u){let b=d.getObjectByName(m);if(!b)continue;let g=b.clone();g.applyMatrix4(b.parent.matrixWorld),f.add(g),m.includes("slide")&&(s.slide=g),m.includes("magazine")&&(g.position.x+=.08,g.position.y+=0,s.mag=g)}n.add(f),a.position.set(0,.035,-.23),o.position.set(.02,.04,-.06),l=new D(-.025,-.05,-.02),c.set(0,-.06,.02),s.sightY=.053,s.railY=.05,s.railZ=-.08,s.pistol=!0;break}case"magnum":{s.slide=ye(n,Je(.032,.035,.27,i.metalWorn,0,.045,-.08,.006)),ye(n,Je(.03,.03,.22,i.metal,0,.015,-.06)),ye(n,$e(.006,.012,.006,i.metal,0,.069,-.2)),ye(n,$e(.02,.012,.006,i.metal,0,.069,.04));let h=ye(n,Je(.033,.12,.055,i.polymer,0,-.05,.03,.01));h.rotation.x=-.2,ye(n,$e(.005,.005,.05,i.metal,0,-.012,-.02)),s.mag=$e(.02,.09,.03,i.metal,0,-.05,.03),n.add(s.mag),s.mag.visible=!1,a.position.set(0,.045,-.23),o.position.set(.02,.05,-.05),l=new D(-.025,-.06,0),c.set(0,-.065,.04),s.sightY=.077,s.railY=.063,s.railZ=-.12,s.pistol=!0;break}}if(!t.scope&&e.optic&&e.optic!=="iron"){let h=new dt;h.position.set(0,s.railY,s.railZ);let d,u=new Fe(new Oi(1,1),new Jt({map:Py(e.optic),transparent:!0,blending:ki,depthWrite:!1,toneMapped:!1}));if(e.optic==="reddot"){d=.03,h.add($e(.024,.012,.04,i.metal,0,.006,0));let f=new Fe(new ci(.017,.017,.045,24,1,!0),i.metal);f.rotation.x=Math.PI/2,f.position.set(0,d,0),h.add(f);let m=i.metal.clone();m.side=Di,f.material=m,u.scale.setScalar(.03),u.position.set(0,d,-.02)}else if(e.optic==="holo")d=.034,h.add(Je(.035,.02,.07,i.polymer,0,.01,.01,.005)),h.add($e(.006,.04,.05,i.polymer,.023,.035,-.01)),h.add($e(.006,.04,.05,i.polymer,-.023,.035,-.01)),h.add($e(.052,.006,.05,i.polymer,0,.056,-.01)),u.scale.setScalar(.05),u.position.set(0,d,-.03);else if(e.optic==="acog"){d=.042,h.add($e(.024,.02,.06,i.metal,0,.01,0));let f=new Fe(new ci(.019,.022,.13,24,1,!0),i.metal.clone());f.material.side=Di,f.rotation.x=Math.PI/2,f.position.set(0,d,0),h.add(f);let m=new Fe(new Aa(.019,24),i.glass);m.position.set(0,d,-.06),h.add(m),u.scale.setScalar(.03),u.position.set(0,d,-.055)}h.add(u),n.add(h),s.sightY=s.railY+d,s.reticle=u}if(e.muzzle==="suppressor"){let h=$t(.02,.17,i.metal,0,a.position.y,a.position.z-.08,24);n.add(h),a.position.z-=.17}else if(e.muzzle==="compensator"){let h=$t(.017,.05,i.metalWorn,0,a.position.y,a.position.z-.02,8);n.add(h),a.position.z-=.04}if(e.under==="grip"&&!s.pistol){let h=Je(.026,.08,.03,i.polymer,0,-.025,l.z-.04,.008);n.add(h),l.set(0,-.065,l.z-.04)}if(e.under==="laser"){let h=s.pistol?-.15:l.z-.1;n.add(Je(.025,.025,.05,i.polymer,0,s.pistol?-.005:-.02,h,.005));let d=new Fe(new ci(.0012,.0012,30,6,1,!0),i.laser);d.rotation.x=Math.PI/2,d.position.set(0,s.pistol?-.005:-.02,h-15),n.add(d),s.laser=d}return e.mag==="ext"&&s.mag&&t.model!=="lmg"&&t.model!=="shotgun"&&(s.mag.scale.y=1.35),s.arms=Dy(i,c,l),n.add(s.arms),s.muzzle=a,s.eject=o,s.leftHand=l,s.magHome=s.mag?s.mag.position.clone():null,s.slideHome=s.slide?s.slide.position.clone():null,s.pumpHome=s.pump?s.pump.position.clone():null,n.traverse(h=>{h.isMesh&&(h.castShadow=!1,h.receiveShadow=!1,h.frustumCulled=!1)}),s}async function Kp(r,e){return Iy(r,e||{})}async function Jp(r="ak"){let e=await Yp(),t=new dt;if(r==="ak"){t.add(Je(.05,.07,.32,e.metal,0,.03,-.08),Je(.055,.055,.22,e.wood,0,.025,-.36),$t(.011,.3,e.metal,0,.03,-.6),Je(.04,.08,.26,e.wood,0,0,.2));let n=bo(e.metalWorn,.18,.024,.06,.6,5);n.position.set(0,0,-.12),t.add(n)}else{t.add(Je(.05,.07,.32,e.metal,0,.03,-.08),Je(.058,.06,.26,e.polymer,0,.03,-.36),$t(.011,.25,e.metal,0,.03,-.6),Je(.045,.085,.2,e.polymer,0,0,.2));let n=bo(e.metal,.16,.022,.055,.3,4);n.position.set(0,0,-.1),t.add(n)}t.add(Je(.03,.1,.04,e.polymer,0,-.05,.02));let i=new lt;return i.position.set(0,.03,-.76),t.add(i),t.userData.muzzle=i,t.traverse(n=>{n.isMesh&&(n.castShadow=!0)}),t}var ft=44100;function wn(r){let e=r>>>0||1;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function bt(r,e,t,i=.707,n=0){let s=2*Math.PI*t/ft,a=Math.cos(s),o=Math.sin(s),l=o/(2*i),c=Math.pow(10,n/40),h,d,u,f,m,b;switch(e){case"lp":h=(1-a)/2,d=1-a,u=h,f=1+l,m=-2*a,b=1-l;break;case"hp":h=(1+a)/2,d=-(1+a),u=h,f=1+l,m=-2*a,b=1-l;break;case"bp":h=l,d=0,u=-l,f=1+l,m=-2*a,b=1-l;break;case"peak":h=1+l*c,d=-2*a,u=1-l*c,f=1+l/c,m=-2*a,b=1-l/c;break}h/=f,d/=f,u/=f,m/=f,b/=f;let g=0,p=0,v=0,_=0;for(let y=0;y<r.length;y++){let w=r[y],E=h*w+d*g+u*p-m*v-b*_;p=g,g=w,_=v,v=E,r[y]=E}return r}function Ft(r,e){let t=new Float32Array(r);for(let i=0;i<r;i++)t[i]=e()*2-1;return t}function Vt(r,e,t,i=0){for(let n=0;n<r.length;n++){let s=n/ft-i;r[n]*=s<0?0:s<e?s/e:Math.exp(-(s-e)/t)}return r}function xt(r,e,t=1,i=0){let n=Math.floor(i*ft);for(let s=0;s<e.length&&s+n<r.length;s++)r[s+n]+=e[s]*t;return r}function Tn(r,e=.95){let t=0;for(let i of r)t=Math.max(t,Math.abs(i));if(t>0)for(let i=0;i<r.length;i++)r[i]*=e/t;return r}function Qp(r,e=2){let t=Math.tanh(e);for(let i=0;i<r.length;i++)r[i]=Math.tanh(r[i]*e)/t;return r}function Ks(r,e,t,i,n,s=0){let a=new Float32Array(r),o=0;for(let l=0;l<r;l++){let c=l/ft,h=t+(e-t)*Math.exp(-c/(i*.5));o+=2*Math.PI*h/ft+(s?(n()-.5)*s:0),a[l]=Math.sin(o)*Math.exp(-c/i)}return a}function Ly(r,e){let t=wn(e),i=Math.floor(ft*(r.len||.7)),n=new Float32Array(i),s=Vt(bt(Ft(i,t),"hp",r.crackHP||2e3,.8),4e-4,r.crackDecay||.006);xt(n,s,r.crack??1);let a=Vt(bt(bt(Ft(i,t),"lp",r.bodyLP||3500),"hp",150),.001,r.bodyDecay||.06);xt(n,a,r.body??1.2);let o=Ks(i,r.boomF0||150,r.boomF1||48,r.boomDecay||.12,t,.02);if(xt(n,o,r.boom??.9),r.mech){let c=Vt(bt(Ft(Math.floor(ft*.05),t),"bp",r.mechF||3200,3),5e-4,.006);xt(n,c,r.mech,r.mechT||.045)}let l=Vt(bt(Ft(i,t),"lp",r.tailLP||600),.01,r.tailDecay||.25);return xt(n,l,r.tail??.35),Qp(n,r.drive||2.5),bt(n,"peak",2500,1,r.presence||2),Tn(n,.98)}var Ny={ar:{crack:1,body:1.2,boomF0:160,boomF1:50,boomDecay:.1,bodyDecay:.055,mech:.25,drive:3,tail:.4},ak:{crack:.9,body:1.5,bodyLP:2800,boomF0:140,boomF1:42,boomDecay:.14,bodyDecay:.07,mech:.3,mechF:2400,drive:3.4,tail:.5},smg:{crack:.7,body:1,bodyLP:4200,boomF0:180,boomF1:70,boomDecay:.06,bodyDecay:.035,mech:.35,mechF:3800,mechT:.03,drive:2.5,tail:.25,len:.45},shotgun:{crack:1.2,body:2,bodyLP:2200,boomF0:120,boomF1:35,boomDecay:.2,bodyDecay:.11,drive:4,tail:.7,tailDecay:.4,len:1},sniper:{crack:1.6,crackDecay:.009,body:1.8,bodyLP:3e3,boomF0:110,boomF1:32,boomDecay:.22,bodyDecay:.09,drive:4.5,tail:.8,tailDecay:.6,len:1.3},pistol:{crack:.8,body:.9,bodyLP:4500,boomF0:200,boomF1:80,boomDecay:.06,bodyDecay:.04,mech:.3,mechF:4200,mechT:.025,drive:2.2,tail:.2,len:.45},magnum:{crack:1.3,body:1.6,bodyLP:3e3,boomF0:130,boomF1:45,boomDecay:.15,bodyDecay:.08,drive:3.8,tail:.55,len:.9},lmg:{crack:1,body:1.4,bodyLP:3e3,boomF0:140,boomF1:45,boomDecay:.12,bodyDecay:.06,mech:.3,mechF:2600,drive:3.4,tail:.5},suppressed:{crack:.12,crackHP:3e3,body:.6,bodyLP:1400,boomF0:110,boomF1:60,boom:.25,boomDecay:.04,bodyDecay:.03,mech:.9,mechF:3e3,mechT:.01,drive:1.4,tail:.05,len:.3,presence:-3}};function gs(r,e=3e3,t=4,i=.008,n=0,s=1500,a=.02){let o=wn(r),l=Math.floor(ft*.25),c=new Float32Array(l);return xt(c,Vt(bt(Ft(l,o),"bp",e,t),3e-4,i)),n&&xt(c,Vt(bt(Ft(l,o),"bp",s,t*.7),5e-4,i*1.5),n,a),Tn(c,.8)}function Fy(r,e=.25,t=2200){let i=wn(r),n=Math.floor(ft*e),s=new Float32Array(n);for(let a=0;a<7;a++)xt(s,Vt(bt(Ft(Math.floor(ft*.05),i),"bp",t*(.7+i()*.8),3),5e-4,.006),.4+i()*.6,i()*e*.8);return Tn(s,.6)}function su(r,e){let t=wn(r),i=Math.floor(ft*.18),n=new Float32Array(i),s=e==="metal"?4e3:e==="concrete"?2600:e==="wood"?1500:1200;return xt(n,Vt(bt(Ft(i,t),"lp",s),.003,.025),1),xt(n,Vt(bt(Ft(i,t),"bp",e==="dirt"?600:900,1.2),.002,.04),.8,.012),(e==="dirt"||e==="sand")&&xt(n,Vt(bt(Ft(i,t),"hp",3e3),.01,.05),.25,.02),e==="metal"&&xt(n,Ks(i,900,820,.05,t),.15,.003),Tn(n,.5)}function Zp(r,e=1){let t=wn(r),i=Math.floor(ft*3),n=new Float32Array(i);xt(n,Vt(bt(Ft(i,t),"lp",5e3),5e-4,.03),1),xt(n,Vt(bt(Ft(i,t),"lp",900),.003,.35*e),1.6),xt(n,Ks(i,90,28,.6,t,.05),1.4),xt(n,Vt(bt(Ft(i,t),"lp",250),.05,.9*e),1.2);for(let s=0;s<30;s++)xt(n,Vt(bt(Ft(Math.floor(ft*.04),t),"bp",1500+t()*3e3,2),5e-4,.01),.06+t()*.08,.3+t()*1.6);return Qp(n,2.5),Tn(n,.98)}function Uy(r){let e=wn(r),t=Math.floor(ft*.25),i=new Float32Array(t),n=Ft(t,e);for(let s=0;s<6;s++){let a=n.slice(Math.floor(t*s/6),Math.floor(t*(s+1)/6));bt(a,"bp",4200-s*500,4);for(let o=0;o<a.length;o++)i[Math.floor(t*s/6)+o]=a[o]}for(let s=0;s<t;s++){let a=s/t;i[s]*=Math.sin(Math.PI*a)**2}return xt(i,Vt(bt(Ft(t,e),"hp",3e3),3e-4,.004),.7,.1),Tn(i,.7)}function ru(r,e){let t=wn(r),i=Math.floor(ft*.3),n=new Float32Array(i);return e==="metal"?(xt(n,Vt(bt(Ft(i,t),"hp",2500),3e-4,.004),.6),xt(n,Ks(i,2600+t()*1500,2400,.12,t),.5),xt(n,Ks(i,4100+t()*900,3900,.07,t),.3)):e==="wood"?(xt(n,Vt(bt(Ft(i,t),"bp",900,2),5e-4,.02),1),xt(n,Ks(i,300,220,.04,t),.4)):e==="flesh"?(xt(n,Vt(bt(Ft(i,t),"lp",700),.001,.03),1),xt(n,Ks(i,120,70,.05,t),.6)):e==="dirt"||e==="sand"||e==="grass"?(xt(n,Vt(bt(Ft(i,t),"lp",1800),.001,.025),1),xt(n,Vt(bt(Ft(i,t),"hp",2500),.004,.04),.3,.01)):(xt(n,Vt(bt(Ft(i,t),"bp",2400,1.2),3e-4,.012),1),xt(n,Vt(bt(Ft(i,t),"hp",5e3),.003,.05),.3,.005)),Tn(n,.6)}function Jn(r,e,t="sine",i=.3,n=0){let s=Math.floor(ft*e),a=new Float32Array(s);return r.forEach((o,l)=>{for(let c=0;c<s;c++){let h=c/ft-l*n;if(h<0)continue;let d=2*Math.PI*o*h,u=t==="sine"?Math.sin(d):t==="tri"?2/Math.PI*Math.asin(Math.sin(d)):Math.sign(Math.sin(d))*.4;a[c]+=u*Math.exp(-h/i)*Math.min(1,h*200)}}),Tn(a,.5)}function au(r,e,t,i,n=.1,s=.5){let a=wn(r),o=Math.floor(ft*e),l=Ft(o,a);bt(l,"lp",t),i&&bt(l,"hp",i);for(let h=0;h<o;h++){let d=h/ft;l[h]*=1-s+s*(.5+.5*Math.sin(2*Math.PI*n*d+Math.sin(d*.37)*2))}let c=Math.floor(ft*.5);for(let h=0;h<c;h++){let d=h/c;l[h]=l[h]*d+l[o-c+h]*(1-d)}return Tn(l.subarray(0,o-c),.5)}function Oy(r,e){let t=wn(r),i=Math.floor(ft*e),n=new Float32Array(i);for(let a=0;a<5;a++){let o=4200+t()*1200,l=2+t()*3,c=t();for(let h=0;h<i;h++){let d=h/ft,u=(Math.sin(2*Math.PI*l*d+c*6)>.6?1:0)*(.5+.5*Math.sin(2*Math.PI*30*d));n[h]+=Math.sin(2*Math.PI*o*d)*u*.15}}let s=Math.floor(ft*.3);for(let a=0;a<s;a++){let o=a/s;n[a]=n[a]*o+n[i-s+a]*(1-o)}return Tn(n.subarray(0,i-s),.25)}function ou(r,e,t,i=[]){let n=wn(r),s=Math.floor(ft*e),a=new Float32Array(s),o=new Float32Array(s);for(let l=0;l<s;l++){let c=l/ft,h=Math.exp(-c/t);a[l]=(n()*2-1)*h,o[l]=(n()*2-1)*h}bt(a,"lp",3500),bt(o,"lp",3500);for(let[l,c]of i){let h=Math.floor(l*ft);h<s&&(a[h]+=c,o[Math.min(s-1,h+40)]+=c*.9)}return[a,o]}var lu=class{constructor(){this.ctx=null,this.buffers={},this.ready=!1,this.volume={master:.8,sfx:1,music:.5},this.loops=[]}init(){if(this.ctx){this.ctx.resume?.();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t;try{t=new e({sampleRate:ft})}catch{t=new e}this.ctx=t,ft=t.sampleRate,this.master=t.createGain(),this.master.gain.value=this.volume.master;let i=t.createDynamicsCompressor();i.threshold.value=-10,i.knee.value=8,i.ratio.value=6,i.attack.value=.002,i.release.value=.15,this.master.connect(i).connect(t.destination),this.sfx=t.createGain(),this.sfx.connect(this.master),this.music=t.createGain(),this.music.gain.value=this.volume.music,this.music.connect(this.master),this.ambient=t.createGain(),this.ambient.gain.value=.5,this.ambient.connect(this.master),this.muffle=t.createBiquadFilter(),this.muffle.type="lowpass",this.muffle.frequency.value=2e4,this.sfx.disconnect(),this.sfx.connect(this.muffle).connect(this.master),this.reverb=t.createConvolver(),this.reverbGain=t.createGain(),this.reverbGain.gain.value=.35,this.reverb.connect(this.reverbGain).connect(this.muffle),this.setEnvironment("outdoor"),this.generate(),this.ready=!0}buf(e){let t=this.ctx.createBuffer(1,e.length,ft);return t.copyToChannel(e,0),t}generate(){let e=this.buffers;for(let[t,i]of Object.entries(Ny))e["shot_"+t]=[0,1,2].map(n=>this.buf(Ly(i,1e3+n*77+t.length*13)));e.magOut=[this.buf(gs(11,1800,3,.01,.6,900,.03))],e.magIn=[this.buf(gs(12,2400,4,.006,1,1300,.05))],e.bolt=[this.buf(gs(13,3200,5,.008,1,2e3,.09))],e.slide=[this.buf(gs(14,4e3,4,.007,.9,2600,.07))],e.shell=[this.buf(gs(15,1500,2,.015,.8,2500,.06))],e.pump=[this.buf(gs(16,1200,2,.02,1,900,.14))],e.dry=[this.buf(gs(17,5e3,6,.004))],e.switch=[this.buf(Fy(18,.3))],e.pin=[this.buf(gs(19,6e3,8,.01,.5,4e3,.08))],e.bounce=[0,1].map(t=>this.buf(ru(20+t,"metal")));for(let t of["dirt","concrete","metal","wood","sand","grass"])e["step_"+t]=[0,1,2,3].map(i=>this.buf(su(100+i*7+t.length,t)));e.land=[this.buf(su(222,"dirt"))],e.explosion=[0,1].map(t=>this.buf(Zp(300+t))),e.flashbang=[this.buf(Zp(310,.3))],e.tinnitus=[this.buf(Jn([3800],4,"sine",1.6))],e.whiz=[0,1,2].map(t=>this.buf(Uy(400+t)));for(let t of["concrete","metal","wood","flesh","dirt"])e["hit_"+t]=[0,1,2].map(i=>this.buf(ru(500+i*5+t.length,t)));e.hitmarker=[this.buf(Jn([1900],.08,"tri",.02))],e.headshot=[this.buf(Jn([2600,3400],.25,"tri",.05,.03))],e.kill=[this.buf(Jn([1200,1800],.2,"tri",.05,.05))],e.ui=[this.buf(Jn([900],.06,"tri",.015))],e.uiHover=[this.buf(Jn([1500],.04,"sine",.01))],e.objective=[this.buf(Jn([523,659,784,1046],1.2,"tri",.35,.12))],e.fail=[this.buf(Jn([392,330,262],1.4,"tri",.5,.2))],e.beep=[this.buf(Jn([1400],.12,"sine",.04))],e.melee=[this.buf(su(600,"wood"))],e.hurt=[0,1].map(t=>this.buf(ru(700+t,"flesh"))),e.wind=[this.buf(au(800,12,500,60,.07,.7))],e.waves=[this.buf(au(801,14,900,120,.12,.85))],e.crickets=[this.buf(Oy(802,8))],e.hum=[this.buf(au(803,8,200,40,.05,.3))]}setEnvironment(e){if(this.ctx)try{this._setEnv(e)}catch(t){console.warn("reverb disabled",t)}}_setEnv(e){let[t,i]=e==="indoor"?ou(9,1,.25):e==="urban"?ou(9,2.2,.5,[[.08,.5],[.15,.35],[.23,.25]]):ou(9,2.6,.55,[[.12,.3],[.31,.2],[.6,.12]]),n=this.ctx.createBuffer(2,t.length,ft);n.copyToChannel(t,0),n.copyToChannel(i,1),this.reverb.normalize=!0,this.reverb.buffer=n}setListener(e){if(!this.ctx)return;let t=this.ctx.listener,i=e.position,n=this.ctx.currentTime,s=e.getWorldDirection(this._f||(this._f=new e.position.constructor));t.positionX?(t.positionX.setValueAtTime(i.x,n),t.positionY.setValueAtTime(i.y,n),t.positionZ.setValueAtTime(i.z,n),t.forwardX.setValueAtTime(s.x,n),t.forwardY.setValueAtTime(s.y,n),t.forwardZ.setValueAtTime(s.z,n),t.upX.setValueAtTime(0,n),t.upY.setValueAtTime(1,n),t.upZ.setValueAtTime(0,n)):(t.setPosition(i.x,i.y,i.z),t.setOrientation(s.x,s.y,s.z,0,1,0)),this.listenerPos=i}play(e,{pos:t=null,vol:i=1,rate:n=1,reverb:s=.3,lowpass:a=0,bus:o=null,detune:l=.04}={}){if(!this.ready)return null;let c=this.buffers[e];if(!c)return null;let h=this.ctx,d=h.createBufferSource();d.buffer=c[Math.random()*c.length|0],d.playbackRate.value=n*(1+(Math.random()-.5)*l);let u=d,f=h.createGain();if(f.gain.value=i,a){let m=h.createBiquadFilter();m.type="lowpass",m.frequency.value=a,u.connect(m),u=m}if(u.connect(f),u=f,t){let m=h.createPanner();m.panningModel="HRTF",m.distanceModel="inverse",m.refDistance=3,m.rolloffFactor=1.1,m.maxDistance=400,m.positionX?(m.positionX.value=t.x,m.positionY.value=t.y,m.positionZ.value=t.z):m.setPosition(t.x,t.y,t.z),u.connect(m),u=m}if(u.connect(o||this.sfx),s>0){let m=h.createGain();m.gain.value=s,u.connect(m).connect(this.reverb)}return d.start(),d}shot(e,t,i){if(i)return this.play("shot_"+e,{vol:.9,reverb:.45});let n=this.listenerPos?t.distanceTo(this.listenerPos):20,s=Math.max(900,16e3-n*160);return this.play("shot_"+e,{pos:t,vol:1.3,reverb:.6,lowpass:s})}loop(e,t=.4,i){if(!this.ready)return;let n=this.ctx.createBufferSource();n.buffer=this.buffers[e][0],n.loop=!0;let s=this.ctx.createGain();return s.gain.value=t,n.connect(s).connect(i||this.ambient),n.start(),this.loops.push(n),s}stopLoops(){for(let e of this.loops)try{e.stop()}catch{}this.loops=[]}setMuffle(e){this.ctx&&this.muffle.frequency.setTargetAtTime(2e4*Math.pow(1-e*.97,2)+200,this.ctx.currentTime,.05)}setVolumes(e,t){this.volume.master=e,this.volume.music=t,this.master&&(this.master.gain.value=e,this.music.gain.value=t)}startMusic(e="menu"){if(!this.ready)return;this.stopMusic();let t=this.ctx,i=t.currentTime,n=t.createGain();n.gain.value=0,n.gain.linearRampToValueAtTime(.25,i+3),n.connect(this.music);let s=[],a=e==="menu"?55:49;[1,1.5,2,2.997].forEach((l,c)=>{let h=t.createOscillator();h.type=c%2?"sawtooth":"triangle",h.frequency.value=a*l,h.detune.value=(c-1.5)*7;let d=t.createBiquadFilter();d.type="lowpass",d.frequency.value=400+c*120,d.Q.value=2;let u=t.createOscillator();u.frequency.value=.05+c*.03;let f=t.createGain();f.gain.value=250,u.connect(f).connect(d.frequency),u.start();let m=t.createGain();m.gain.value=.12/(c+1),h.connect(d).connect(m).connect(n),h.start(),s.push(h,u)});let o=()=>{if(!this._music)return;let l=t.currentTime;for(let c of[0,.22]){let h=t.createOscillator();h.frequency.setValueAtTime(70,l+c),h.frequency.exponentialRampToValueAtTime(40,l+c+.25);let d=t.createGain();d.gain.setValueAtTime(1e-4,l+c),d.gain.exponentialRampToValueAtTime(.35,l+c+.01),d.gain.exponentialRampToValueAtTime(1e-4,l+c+.3),h.connect(d).connect(n),h.start(l+c),h.stop(l+c+.35)}this._pulseT=setTimeout(o,1700)};this._music={out:n,nodes:s},o()}stopMusic(){if(!this._music)return;let{out:e,nodes:t}=this._music;this._music=null,clearTimeout(this._pulseT);let i=this.ctx.currentTime;e.gain.cancelScheduledValues(i),e.gain.setValueAtTime(e.gain.value,i),e.gain.linearRampToValueAtTime(0,i+1.5),setTimeout(()=>t.forEach(n=>{try{n.stop()}catch{}}),1700)}},we=new lu;var _e=(r=0,e=0,t=0)=>new D(r,e,t),kc=_e(),By=_e(),ky=_e(),tm=_e(),Js=new Dt,Vr=new Dt,Wr=new Dt,fw=_e(0,1,0),vo={recruit:{name:"Recruit",acc:.22,dmg:7,react:1.1,hp:80,awareness:.7},regular:{name:"Regular",acc:.32,dmg:10,react:.8,hp:100,awareness:1},hardened:{name:"Hardened",acc:.42,dmg:14,react:.6,hp:110,awareness:1.3},veteran:{name:"Veteran",acc:.55,dmg:20,react:.4,hp:120,awareness:1.6}};function zy(r,e){return r.getObjectByName("mixamorig"+e)||r.getObjectByName("mixamorig:"+e)}function $p(r,e,t){Js.setFromUnitVectors(e.clone().normalize(),t.clone().normalize()),r.getWorldQuaternion(Vr),r.parent.getWorldQuaternion(Wr),r.quaternion.copy(Wr.invert().multiply(Js.multiply(Vr))),r.updateMatrixWorld(!0)}function em(r,e,t,i,n){let s=r.getWorldPosition(_e()),a=e.getWorldPosition(_e()),o=t.getWorldPosition(_e()),l=s.distanceTo(a),c=a.distanceTo(o),h=i.clone().sub(s),d=h.length();d=Math.min(d,l+c-.002),h.normalize();let u=Ei.clamp((l*l+d*d-c*c)/(2*l*d),-1,1),f=Math.sqrt(1-u*u),m=n.clone().sub(s);m.addScaledVector(h,-m.dot(h)).normalize();let b=s.clone().addScaledVector(h,l*u).addScaledVector(m,l*f);$p(r,a.clone().sub(s),b.clone().sub(s));let g=t.getWorldPosition(_e()),p=e.getWorldPosition(_e());$p(e,g.clone().sub(p),i.clone().sub(p))}function cu(r,e,t,i){let n=e,s=ky.subVectors(i,t),a=tm.subVectors(r,t),o=1,l=n.dot(s),c=s.dot(s),h=n.dot(a),d=s.dot(a),u=o*c-l*l,f,m;u<1e-8?(f=0,m=l>c?h/l:d/c):(f=(l*d-c*h)/u,m=(o*d-l*h)/u),m=Ei.clamp(m,0,1),f=Math.max(0,n.dot(kc.copy(t).addScaledVector(s,m).sub(r)));let b=kc.copy(r).addScaledVector(n,f),g=By.copy(t).addScaledVector(s,m);return[b.distanceTo(g),f]}var Bc=null;async function Hy(){return Bc||(Bc=await Ys("Soldier")),Bc}var hu=class{constructor(e,t){this.mgr=e,this.G=e.G,this.pos=t.pos.clone(),this.yaw=t.yaw??Math.random()*6.28,this.bodyYaw=this.yaw,this.vel=_e();let i=this.G.diff;this.hp=t.hp??i.hp,this.alive=!0,this.state=t.state||"idle",this.patrol=t.patrol||null,this.patrolIdx=0,this.awareness=0,this.lastSeen=null,this.lastSeenT=-99,this.seesPlayer=!1,this.fireCd=Math.random(),this.burst=0,this.react=0,this.thinkT=Math.random()*.3,this.path=null,this.pathIdx=0,this.repathT=0,this.moveTarget=null,this.strafe=Math.random()<.5?-1:1,this.strafeT=0,this.grenadeCd=10+Math.random()*15,this.stun=0,this.friendly=!!t.friendly,this.hostage=!!t.hostage,this.follow=!1,this.zone=t.zone||null,this.tag=t.tag||null,this.aimPitch=0,this.aimBlend=0,this.deathT=0,this.speedMul=t.speed||1,this.holdPosition=!!t.hold,this.build(t)}build(e){let t=Bc,i=this.model=Pc(t.scene);i.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,n.frustumCulled=!1,n.material=n.material.clone(),e.tint&&!n.name.includes("visor")&&n.material.color.set(e.tint),n.name.includes("visor")&&(n.material.color.set(this.friendly?3359829:1118481),n.material.roughness=.15,n.material.metalness=.8))}),this.G.scene.add(i),this.mixer=new Ba(i),this.actions={};for(let n of t.animations)this.actions[n.name]=this.mixer.clipAction(n);for(let n of["Idle","Walk","Run"]){let s=this.actions[n];s.enabled=!0,s.setEffectiveWeight(n==="Idle"?1:0),s.play()}this.actions.Idle.time=Math.random()*3,this.weights={Idle:1,Walk:0,Run:0},this.b={};for(let n of["Hips","Spine","Spine1","Spine2","Neck","Head","RightShoulder","RightArm","RightForeArm","RightHand","LeftArm","LeftForeArm","LeftHand","LeftUpLeg","LeftFoot","RightUpLeg","RightFoot"])this.b[n]=zy(i,n);this.hostage||(this.rifle=this.mgr.rifleTemplate.clone(!0),this.G.scene.add(this.rifle),this.muzzle=this.rifle.getObjectByName("muzzle")||this.rifle.children.find(n=>n.userData.isMuzzle)),this.syncModel(0)}get eye(){return tm.set(this.pos.x,this.pos.y+(this.crouched?1.1:1.62),this.pos.z)}headPos(e=_e()){return this.b.Head?this.b.Head.getWorldPosition(e).add(_e(0,.09,0)):e.copy(this.pos).add(_e(0,1.7,0))}setAnim(e,t){let i=this.alive?t>3.5?"Run":t>.3?"Walk":"Idle":"Idle";for(let n of["Idle","Walk","Run"])this.weights[n]+=((n===i?1:0)-this.weights[n])*Math.min(1,e*6),this.actions[n].setEffectiveWeight(this.weights[n]);this.actions.Walk.timeScale=Math.max(.6,t/1.6),this.actions.Run.timeScale=Math.max(.7,t/5.2)}syncModel(e){let t=this.model;t.position.copy(this.pos);let i=this.yaw-this.bodyYaw;if(i=Math.atan2(Math.sin(i),Math.cos(i)),this.bodyYaw+=i*Math.min(1,e*8),t.rotation.set(0,this.bodyYaw+Math.PI,0),!this.alive){this.updateDeath(e);return}if(this.G.player.pos.distanceToSquared(this.pos)>2e3&&!this.hostage){if(this._sacc=(this._sacc||0)+e,this._sacc<.1&&this._lastSync){this.rifle&&this.rifle.position.add(kc.subVectors(this.pos,this._lastSync)),this._lastSync.copy(this.pos),t.updateMatrixWorld(!0);return}e=this._sacc,this._sacc=0}if((this._lastSync||(this._lastSync=_e())).copy(this.pos),this.mixer.update(e),t.updateMatrixWorld(!0),this.hostage)return;let n=this.aimBlend,s=_e(-Math.sin(this.bodyYaw),0,-Math.cos(this.bodyYaw)),a=_e(Math.cos(this.bodyYaw),0,-Math.sin(this.bodyYaw));if(this.b.Spine2){let b=this.b.Spine1;Js.setFromAxisAngle(a,-this.aimPitch*.5*n+.05),b.getWorldQuaternion(Vr),b.parent.getWorldQuaternion(Wr),b.quaternion.copy(Wr.invert().multiply(Js.multiply(Vr))),b.updateMatrixWorld(!0)}let o=this.b.RightArm.getWorldPosition(_e()),l=s.clone().multiplyScalar(Math.cos(this.aimPitch)).add(_e(0,Math.sin(this.aimPitch),0)).normalize(),c=1-n,h=o.clone().addScaledVector(l,.22+.02*c).addScaledVector(a,-.06-.05*c).add(_e(0,-.1-.18*c,0)),d=l.clone().lerp(s.clone().add(_e(0,-.5,0)).addScaledVector(a,-.4).normalize(),c*.8).normalize();this.rifle.position.copy(h),this.rifle.quaternion.setFromUnitVectors(_e(0,0,-1),d),this.rifle.updateMatrixWorld(!0);let u=h.clone().add(_e(0,-.03,0)),f=h.clone().addScaledVector(d,.36).add(_e(0,-0,0));em(this.b.RightArm,this.b.RightForeArm,this.b.RightHand,u,o.clone().addScaledVector(a,.6).add(_e(0,-.8,0)).addScaledVector(s,-.2));let m=this.b.LeftArm.getWorldPosition(_e());if(em(this.b.LeftArm,this.b.LeftForeArm,this.b.LeftHand,f,m.clone().addScaledVector(a,-.5).add(_e(0,-.9,0))),this.b.Head){Js.setFromAxisAngle(a,-this.aimPitch*.4*n);let b=this.b.Head;b.getWorldQuaternion(Vr),b.parent.getWorldQuaternion(Wr),b.quaternion.copy(Wr.invert().multiply(Js.multiply(Vr))),b.updateMatrixWorld(!0)}}raycast(e,t,i){if(!this.alive)return null;let n=this.pos.clone().add(_e(0,1,0)),[s]=cu(e,t,n.clone().add(_e(0,-1,0)),n.clone().add(_e(0,.9,0)));if(s>.8)return null;let a=null,o=(d,u,f,m)=>{let[b,g]=cu(e,t,d,u);b<f&&g<i&&(!a||g<a.t)&&(a={t:g,part:m})},l=this.headPos(_e());o(l,l.clone().add(_e(0,.02,0)),.14,"head");let c=this.b.Hips.getWorldPosition(_e()),h=this.b.Neck.getWorldPosition(_e());return o(c,h,.2,"body"),o(this.b.LeftUpLeg.getWorldPosition(_e()),this.b.LeftFoot.getWorldPosition(_e()),.11,"leg"),o(this.b.RightUpLeg.getWorldPosition(_e()),this.b.RightFoot.getWorldPosition(_e()),.11,"leg"),o(this.b.RightArm.getWorldPosition(_e()),this.b.RightHand.getWorldPosition(_e()),.08,"arm"),o(this.b.LeftArm.getWorldPosition(_e()),this.b.LeftHand.getWorldPosition(_e()),.08,"arm"),a?{enemy:this,dist:a.t,part:a.part,point:e.clone().addScaledVector(t,a.t)}:null}takeDamage(e,t){return this.alive?(this.hp-=e,this.awareness=1,this.lastSeen=this.G.player.pos.clone(),this.lastSeenT=this.G.time,this.state!=="combat"&&(this.state="combat",this.react=.25),this.flinch=.25,this.hp<=0?(this.die(t),!0):!1):!1}die(e){this.alive=!1,this.state="dead",this.deathT=0,this.deathDir=e?Math.atan2(e.x,e.z):this.bodyYaw,this.deathFall=_e(e?.x||0,0,e?.z||0).normalize(),this.mixer.stopAllAction(),this.rifle&&(this.rifleVel=_e(this.deathFall.x*1.5,1.5,this.deathFall.z*1.5),this.rifleSpin=_e(Math.random()*4,Math.random()*4,0))}updateDeath(e){this.deathT+=e;let t=Math.min(1,this.deathT/.6),i=t*t,n=this.model,s=_e(-this.deathFall.z,0,this.deathFall.x);s.lengthSq()<.01&&s.set(1,0,0),n.quaternion.setFromAxisAngle(s.normalize(),i*Math.PI/2*.98),n.quaternion.multiply(Js.setFromEuler(new _i(0,this.bodyYaw+Math.PI,0))),n.position.copy(this.pos).add(_e(0,.12*Math.sin(t*Math.PI),0)).addScaledVector(this.deathFall,i*.25),this.b.Spine1&&t<1&&(this.b.Spine1.rotation.x+=e*.6),this.b.LeftUpLeg&&t<1&&(this.b.LeftUpLeg.rotation.x-=e*1.2,this.b.LeftLeg=this.b.LeftLeg),n.updateMatrixWorld(!0),this.rifle&&this.rifleVel&&(this.rifleVel.y-=9.8*e,this.rifle.position.addScaledVector(this.rifleVel,e),this.rifle.rotation.x+=this.rifleSpin.x*e,this.rifle.rotation.z+=this.rifleSpin.y*e,this.rifle.position.y<this.groundY+.05&&(this.rifle.position.y=this.groundY+.05,this.rifleVel=null,this.rifle.rotation.set(0,this.rifle.rotation.y,Math.PI/2)))}update(e){if(!this.alive){this.syncModel(e);return}let t=this.G,i=t.player,n=t.diff;this.stun=Math.max(0,this.stun-e),this.flinch=Math.max(0,(this.flinch||0)-e);let s=0,a=null,o=this.state==="combat"||this.state==="alert"?1:0;if(this.groundY=0,this.hostage){this.updateHostage(e);return}if(this.thinkT-=e,this.thinkT<=0&&(this.thinkT=.15+Math.random()*.1,this.perceive(.2)),this.stun>0)o=0,s=0;else if(this.state==="idle"||this.state==="patrol")if(this.patrol&&this.patrol.length){let u=this.patrol[this.patrolIdx];this.pos.distanceTo(u)<.8&&(this.patrolIdx=(this.patrolIdx+1)%this.patrol.length,this.waitT=2+Math.random()*3),(this.waitT-=e)<=0&&(a=this.steer(u),s=1.4)}else this.idleLookT=(this.idleLookT||0)-e,this.idleLookT<=0&&(this.idleLookT=3+Math.random()*4,this.yawTarget=this.yaw+(Math.random()-.5)*2),this.yawTarget!==void 0&&(this.yaw+=(this.yawTarget-this.yaw)*Math.min(1,e*1.5));else if(this.state==="alert"){let u=this.investigate;u&&this.pos.distanceTo(u)>2&&!this.holdPosition?(a=this.followPath(u,e),s=3):(this.alertT=(this.alertT||6)-e,this.yaw+=Math.sin(t.time*.8+this.pos.x)*e*.8,this.alertT<=0&&(this.state="patrol",this.alertT=6))}else if(this.state==="combat"){let u=i.eyePos(_e()),f=this.pos.distanceTo(i.pos);if(this.seesPlayer){this.faceTo(i.pos,e,10);let m=u.y-.25-(this.pos.y+1.45);if(this.aimPitch=Math.atan2(m,Math.hypot(i.pos.x-this.pos.x,i.pos.z-this.pos.z)),this.strafeT-=e,this.strafeT<=0&&(this.strafeT=1.5+Math.random()*2.5,this.strafe=Math.random()<.3?0:Math.random()<.5?-1:1,this.advance=f>28?1:f<7?-1:Math.random()<.3?1:0),!this.holdPosition&&this.flinch<=0){let b=_e(i.pos.x-this.pos.x,0,i.pos.z-this.pos.z).normalize(),p=_e(-b.z,0,b.x).multiplyScalar(this.strafe).addScaledVector(b,this.advance*.8);if(p.lengthSq()>.01){p.normalize();let v=this.pos.clone().addScaledVector(p,1.2),[_,y]=t.world.navCell(v);t.world.navFree(_,y)&&(a=p,s=1.6)}}this.crouched=this.preferCrouch&&!a,this.react-=e,this.react<=0&&this.shootLogic(e,f),this.hp<n.hp*.45&&!this.coverTarget&&!this.holdPosition&&this.pickCover(i.pos)}else{this.crouched=!1;let m=t.time-this.lastSeenT;this.grenadeCd-=e,this.grenadeCd<=0&&m>2&&m<8&&this.lastSeen&&this.pos.distanceTo(this.lastSeen)<25&&this.pos.distanceTo(this.lastSeen)>8&&(this.grenadeCd=18+Math.random()*15,this.throwGrenade(this.lastSeen)),this.lastSeen&&!this.holdPosition?this.pos.distanceTo(this.lastSeen)>2.5?(a=this.followPath(this.lastSeen,e),s=m>4?3.2:2.2,this.faceTo(this.lastSeen,e,5)):m>12&&(this.state="alert",this.investigate=null,this.alertT=8):this.lastSeen&&this.faceTo(this.lastSeen,e,5)}this.coverTarget&&(this.pos.distanceTo(this.coverTarget)>.8?(a=this.followPath(this.coverTarget,e),s=3.5):(this.coverTarget=null,this.preferCrouch=!0))}this.stun>0&&(a=null,this.yaw+=Math.sin(t.time*7)*e);let l=s*this.speedMul,c=a?a.clone().multiplyScalar(l):_e();this.vel.x+=(c.x-this.vel.x)*Math.min(1,e*8),this.vel.z+=(c.z-this.vel.z)*Math.min(1,e*8),this.pos.x+=this.vel.x*e,this.pos.z+=this.vel.z*e;for(let u of this.mgr.list)if(u!==this&&u.alive){let f=this.pos.x-u.pos.x,m=this.pos.z-u.pos.z,b=f*f+m*m;if(b<.5&&b>1e-4){let g=Math.sqrt(b),p=(.7-g)*.5;this.pos.x+=f/g*p,this.pos.z+=m/g*p}}let h=t.world.collideCylinder(this.pos,.32,1.7,this.vel,.4);this.pos.y=h.groundY,this.groundY=h.groundY,a&&!(this.state==="combat"&&this.seesPlayer)&&this.faceTo(this.pos.clone().add(a),e,6);let d=Math.hypot(this.vel.x,this.vel.z);this.setAnim(e,d),this.aimBlend+=((o?1:0)-this.aimBlend)*Math.min(1,e*5),this.state==="combat"&&this.seesPlayer||(this.aimPitch*=1-Math.min(1,e*3)),d>1&&(this.stepD=(this.stepD||0)+d*e,this.stepD>1.8&&(this.stepD=0,i.pos.distanceTo(this.pos)<18&&we.play("step_"+(t.world.groundMat==="sand"?"sand":"dirt"),{pos:this.pos,vol:d>3?.9:.5,reverb:.1}))),this.syncModel(e)}perceive(e){let t=this.G,i=t.player,n=t.diff;if(!i.alive){this.seesPlayer=!1;return}let s=i.eyePos(_e()),a=this.eye.clone(),o=s.clone().sub(a),l=o.length();o.divideScalar(l);let c=_e(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),h=o.dot(c),u=t.level?.night?i.flashlightOn?60:32:85;this.state==="combat"&&(u*=1.6);let f=l<u&&(h>.2||l<4||this.state==="combat");if(f){let m=i.pos.clone().add(_e(0,i.crouch?.7:1.2,0));f=(t.world.lineOfSight(a,s)||t.world.lineOfSight(a,m))&&!t.effects.smokeBlocks(a,s)}if(this.seesPlayer=f&&this.awareness>=1,f){let m=n.awareness*(1.6-l/u)*(i.crouch?.6:1)*(i.sprint?1.4:1)*(this.state==="alert"?2.5:1)*(h>.7?1.4:.7);this.awareness=Math.min(1,this.awareness+m*e*1.4),this.awareness>=1&&(this.state!=="combat"&&(this.state="combat",this.react=n.react*(.7+Math.random()*.6),this.mgr.callout(this)),this.seesPlayer=!0,this.lastSeen=i.pos.clone(),this.lastSeenT=t.time)}else this.state!=="combat"&&(this.awareness=Math.max(0,this.awareness-e*.15))}shootLogic(e,t){let i=this.G,n=i.player,s=i.diff;if(this.fireCd-=e,this.fireCd>0||(this.burst<=0&&(this.burst=2+(Math.random()*4|0)),this.burst--,this.fireCd=this.burst>0?.1+Math.random()*.03:.5+Math.random()*.9,t>110))return;let a=s.acc*Math.max(.25,1-t/90)*(n.crouch?.8:1)*(1-n.moveAmount*.35)*(n.sprint?.7:1)*Math.min(1,.45+(i.time-this.lastSeenT+1)*0);this.shotsAtPlayer=(this.shotsAtPlayer||0)+1,this.shotsAtPlayer<3&&(a*=.4),this.stun>0&&(a=0);let o=this.muzzleWorld(),l=n.pos.clone().add(_e(0,n.crouch?.8:1.25,0));if(i.effects.muzzleWorld(o,l.clone().sub(o).normalize(),.8),we.shot(this.weaponSound||"ak",o,!1),i.alertEnemies(this.pos,35,this),Math.random()<a)n.damage(s.dmg*(.8+Math.random()*.4),this.pos),Math.random()<.3&&i.effects.tracer(o,l);else{let c=_e((Math.random()-.5)*2.5,(Math.random()-.4)*1.6,(Math.random()-.5)*2.5),h=l.clone().add(c),d=h.clone().sub(o).normalize(),u=i.world.raycast(o,d,200);u&&u.dist<o.distanceTo(h)+15&&(i.effects.impact(u.point,u.normal,u.mat),u.point.distanceTo(n.pos)<12&&we.play("hit_"+(u.mat==="metal"?"metal":u.mat==="wood"?"wood":u.mat==="dirt"||u.mat==="sand"||u.mat==="grass"?"dirt":"concrete"),{pos:u.point,vol:.6})),Math.random()<.35&&i.effects.tracer(o,u?u.point:h);let[f]=cu(o,d,n.eyePos(_e()),n.eyePos(_e()).add(_e(0,.01,0)));f<2&&(we.play("whiz",{pos:n.eyePos(_e()).addScaledVector(d,-1),vol:.9,reverb:0}),n.shake=Math.min(1,n.shake+.08),i.hud.suppress())}}muzzleWorld(){return this.rifle?(this.rifle.updateMatrixWorld(!0),_e(0,.03,-.78).applyMatrix4(this.rifle.matrixWorld)):this.pos.clone().add(_e(0,1.4,0))}throwGrenade(e){let t=this.pos.clone().add(_e(0,1.7,0)),i=e.clone().sub(t),n=Math.hypot(i.x,i.z),s=Math.max(.8,n/13),a=_e(i.x/s,(i.y+.5*20*s*s*.5)/s,i.z/s);this.G.spawnGrenade("frag",t,a,!1),this.G.hud.grenadeWarning()}faceTo(e,t,i){let s=Math.atan2(-(e.x-this.pos.x),-(e.z-this.pos.z))-this.yaw;s=Math.atan2(Math.sin(s),Math.cos(s)),this.yaw+=s*Math.min(1,t*i)}steer(e){let t=_e(e.x-this.pos.x,0,e.z-this.pos.z);return t.lengthSq()>.01?t.normalize():null}followPath(e,t){let i=this.G;if(this.repathT-=t,(!this.path||this.repathT<=0||this.pathGoal&&this.pathGoal.distanceTo(e)>2)&&(this.repathT=1.5+Math.random(),this.path=i.world.findPath(this.pos,e),this.pathIdx=0,this.pathGoal=e.clone(),!this.path))return this.steer(e);for(;this.pathIdx<this.path.length&&this.pos.distanceTo(kc.set(this.path[this.pathIdx].x,this.pos.y,this.path[this.pathIdx].z))<.6;)this.pathIdx++;return this.pathIdx>=this.path.length?this.steer(e):this.steer(this.path[this.pathIdx])}pickCover(e){let t=this.G,i=null,n=1/0;for(let s of t.world.coverPoints){let a=s.distanceTo(this.pos);if(a>14||a<1.5)continue;let o=s.clone().add(_e(0,1,0)),l=e.clone().add(_e(0,1.4,0));if(t.world.lineOfSight(o,l))continue;let c=a+s.distanceTo(e)*.2;c<n&&(n=c,i=s)}i&&(this.coverTarget=i.clone())}updateHostage(e){let t=this.G,i=t.player,n=0,s=null;if(this.follow){let o=this.pos.distanceTo(i.pos);if(o>2.5&&(s=o>4?this.followPath(i.pos,e):this.steer(i.pos),n=o>8?5.2:2.8),this.stuckT=(this.stuckT||0)+e,this.stuckT>3){let l=this._lastP?this._lastP.distanceTo(this.pos):99;if(this._lastP=this.pos.clone(),this.stuckT=0,l<1.5&&o>10){let c=i.pos.clone().addScaledVector(i.forward(_e()).setY(0).normalize(),-3),[h,d]=t.world.navCell(c),u=t.world.nearestFree(h,d);u&&(this.pos.copy(t.world.cellPos(u[0],u[1])),this.path=null)}}}s?(this.vel.x=s.x*n,this.vel.z=s.z*n):(this.vel.x*=.8,this.vel.z*=.8),this.pos.x+=this.vel.x*e,this.pos.z+=this.vel.z*e;let a=t.world.collideCylinder(this.pos,.32,1.7,this.vel,.4);this.pos.y=a.groundY,s?this.faceTo(this.pos.clone().add(s),e,6):this.follow&&this.faceTo(i.pos,e,3),this.setAnim(e,Math.hypot(this.vel.x,this.vel.z)),this.syncModel(e)}dispose(){this.G.scene.remove(this.model),this.rifle&&this.G.scene.remove(this.rifle)}},zc=class{constructor(e){this.G=e,this.list=[]}async init(){await Hy(),this.rifleTemplate||(this.rifleTemplate=await Jp("ak"))}spawn(e){let t=new hu(this,e);return this.list.push(t),t}get alive(){return this.list.filter(e=>e.alive&&!e.hostage&&!e.friendly)}update(e){for(let t of this.list)t.update(e)}raycast(e,t,i){let n=null;for(let s of this.list){if(s.hostage&&!this.G.hitHostages){let o=s.raycast(e,t,i);o&&(!n||o.dist<n.dist)&&(n=o);continue}let a=s.raycast(e,t,i);a&&(!n||a.dist<n.dist)&&(n=a)}return n}meleeTarget(e,t,i){let n=null,s=i;for(let a of this.list){if(!a.alive||a.hostage)continue;let o=a.pos.distanceTo(e);o<s&&_e(a.pos.x-e.x,0,a.pos.z-e.z).normalize().dot(_e(t.x,0,t.z).normalize())>.5&&(s=o,n=a)}return n}alert(e,t,i){for(let n of this.list)!n.alive||n.hostage||n===i||n.pos.distanceTo(e)<t&&n.state!=="combat"&&(n.state="alert",n.investigate=e.clone(),n.alertT=8,n.awareness=Math.max(n.awareness,.5))}callout(e){for(let t of this.list)t!==e&&t.alive&&!t.hostage&&t.pos.distanceTo(e.pos)<25&&t.state!=="combat"&&(t.state="alert",t.investigate=this.G.player.pos.clone(),t.awareness=Math.max(t.awareness,.7))}flash(e,t){for(let i of this.list){if(!i.alive)continue;let n=i.pos.distanceTo(e);n<t&&this.G.world.lineOfSight(i.eye.clone(),e.clone().add(_e(0,.3,0)))&&(i.stun=4*(1-n/t)+1.5)}}clear(){for(let e of this.list)e.dispose();this.list=[]}};var Hc=class extends Fe{constructor(e,t={}){super(e),this.isWater=!0;let i=this,n=t.textureWidth!==void 0?t.textureWidth:512,s=t.textureHeight!==void 0?t.textureHeight:512,a=t.clipBias!==void 0?t.clipBias:0,o=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new D(.70707,.70707,0),d=new be(t.sunColor!==void 0?t.sunColor:16777215),u=new be(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new D(0,0,0),m=t.distortionScale!==void 0?t.distortionScale:20,b=t.side!==void 0?t.side:Yi,g=t.fog!==void 0?t.fog:!1,p=new Vi,v=new D,_=new D,y=new D,w=new De,E=new D(0,0,-1),x=new ot,M=new D,R=new D,A=new ot,I=new De,L=new Ht,O=new Et(n,s,{type:gt}),P={name:"MirrorShader",uniforms:Gt.merge([ge.fog,ge.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new De},sunColor:{value:new be(8355711)},sunDirection:{value:new D(.70707,.70707,0)},eye:{value:new D},waterColor:{value:new be(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.02;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), reflectionSample + specularLight, reflectance );
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},U=new et({name:P.name,uniforms:Gt.clone(P.uniforms),vertexShader:P.vertexShader,fragmentShader:P.fragmentShader,lights:!0,side:b,fog:g});U.uniforms.mirrorSampler.value=O.texture,U.uniforms.textureMatrix.value=I,U.uniforms.alpha.value=o,U.uniforms.time.value=l,U.uniforms.normalSampler.value=c,U.uniforms.sunColor.value=d,U.uniforms.waterColor.value=u,U.uniforms.sunDirection.value=h,U.uniforms.distortionScale.value=m,U.uniforms.eye.value=f,i.material=U,i.onBeforeRender=function(B,H,Z){if(_.setFromMatrixPosition(i.matrixWorld),y.setFromMatrixPosition(Z.matrixWorld),w.extractRotation(i.matrixWorld),v.set(0,0,1),v.applyMatrix4(w),M.subVectors(_,y),M.dot(v)>0)return;M.reflect(v).negate(),M.add(_),w.extractRotation(Z.matrixWorld),E.set(0,0,-1),E.applyMatrix4(w),E.add(y),R.subVectors(_,E),R.reflect(v).negate(),R.add(_),L.position.copy(M),L.up.set(0,1,0),L.up.applyMatrix4(w),L.up.reflect(v),L.lookAt(R),L.far=Z.far,L.updateMatrixWorld(),L.projectionMatrix.copy(Z.projectionMatrix),I.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),I.multiply(L.projectionMatrix),I.multiply(L.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(v,_),p.applyMatrix4(L.matrixWorldInverse),x.set(p.normal.x,p.normal.y,p.normal.z,p.constant);let z=L.projectionMatrix;A.x=(Math.sign(x.x)+z.elements[8])/z.elements[0],A.y=(Math.sign(x.y)+z.elements[9])/z.elements[5],A.z=-1,A.w=(1+z.elements[10])/z.elements[14],x.multiplyScalar(2/x.dot(A)),z.elements[2]=x.x,z.elements[6]=x.y,z.elements[10]=x.z+1-a,z.elements[14]=x.w,f.setFromMatrixPosition(Z.matrixWorld);let X=B.getRenderTarget(),ee=B.xr.enabled,pe=B.shadowMap.autoUpdate;i.visible=!1,B.xr.enabled=!1,B.shadowMap.autoUpdate=!1,B.setRenderTarget(O),B.state.buffers.depth.setMask(!0),B.autoClear===!1&&B.clear(),B.render(H,L),i.visible=!0,B.xr.enabled=ee,B.shadowMap.autoUpdate=pe,B.setRenderTarget(X);let Ae=Z.viewport;Ae!==void 0&&B.state.viewport(Ae)}}};var qr=new D;function Gy(r,e,t,i=2){let n=new qt(r,e,t),s=n.attributes.uv,a=[[t,e],[t,e],[r,t],[r,t],[r,e],[r,e]];for(let o=0;o<6;o++){let[l,c]=a[o];for(let h=0;h<4;h++){let d=o*4+h;s.setXY(d,s.getX(d)*l/i,s.getY(d)*c/i)}}return s.needsUpdate=!0,n}var Gc=class{constructor(e){this.scene=e,this.colliders=[],this.dynamic=[],this.bounds={minX:-100,maxX:100,minZ:-100,maxZ:100},this.groundY=0,this.groundMat="dirt",this.nav=null,this.coverPoints=[],this.lights=[]}addCollider(e,t,i="concrete",n={}){let s={min:e.clone(),max:t.clone(),mat:i,...n};return this.colliders.push(s),s}box(e,t,i,n,s,a,o,{mat:l="concrete",texSize:c=2,cast:h=!0,receive:d=!0,collide:u=!0,rotY:f=0}={}){let m=new Fe(Gy(n,s,a,c),o);if(m.position.set(e,t+s/2,i),m.rotation.y=f,m.castShadow=h,m.receiveShadow=d,this.scene.add(m),u)if(f){m.updateMatrixWorld();let b=new ri().setFromObject(m);this.addCollider(b.min,b.max,l,{mesh:m})}else this.addCollider(new D(e-n/2,t,i-a/2),new D(e+n/2,t+s,i+a/2),l,{mesh:m});return m}wall(e,t,i,n,s,a,o,l={}){let c=(e+i)/2,h=(t+n)/2,d=Math.abs(i-e)||a,u=Math.abs(n-t)||a;return this.box(c,l.y||0,h,d,s,u,o,l)}wallWithDoor(e,t,i,n,s,a,o,l=.5,c=1.4,h=2.3,d={}){let u=Math.abs(i-e)>Math.abs(n-t),f=Math.abs(u?i-e:n-t),m=u?Math.min(e,i):Math.min(t,n),b=m+f*l-c/2,g=b+c,p=u?t:e,v=(_,y)=>{y-_<.05||(u?this.wall(_,p,y,p,s,a,o,d):this.wall(p,_,p,y,s,a,o,d))};v(m,b),v(g,m+f),s>h&&(u?this.box((b+g)/2,h,p,c,s-h,a,o,d):this.box(p,h,(b+g)/2,a,s-h,c,o,d))}async prop(e,t,i,{y:n=0,rotY:s=0,scale:a=1,collide:o=!0,mat:l="metal",cast:c=!0,explosive:h=!1,onlyVisual:d=!1}={}){let f=(await Ys(e)).scene.clone(!0);f.position.set(t,n,i),f.rotation.y=s,f.scale.setScalar(a),f.traverse(b=>{b.isMesh&&(b.castShadow=c,b.receiveShadow=!0)}),this.scene.add(f),f.updateMatrixWorld(!0);let m=null;if(o&&!d){let b=new ri().setFromObject(f);m=this.addCollider(b.min,b.max,l,{mesh:f,prop:e}),h&&(m.explosive=!0,m.hp=40,this.dynamic.push(m))}return f}removeCollider(e){let t=this.colliders.indexOf(e);t>=0&&this.colliders.splice(t,1)}raycast(e,t,i=500,n=null){let s=i,a=null,o=0,l=0,c=e.x,h=e.y,d=e.z,u=1/(t.x||1e-9),f=1/(t.y||1e-9),m=1/(t.z||1e-9);for(let g=0,p=this.colliders.length;g<p;g++){let v=this.colliders[g];if(v===n||v.noRay)continue;let _=(v.min.x-c)*u,y=(v.max.x-c)*u,w=Math.min(_,y),E=Math.max(_,y),x=0,M=_<y?-1:1;_=(v.min.y-h)*f,y=(v.max.y-h)*f;let R=Math.min(_,y),A=Math.max(_,y);R>w&&(w=R,x=1,M=_<y?-1:1),A<E&&(E=A),_=(v.min.z-d)*m,y=(v.max.z-d)*m,R=Math.min(_,y),A=Math.max(_,y),R>w&&(w=R,x=2,M=_<y?-1:1),A<E&&(E=A),E>=Math.max(w,0)&&w<s&&w>0&&(s=w,a=v,o=x,l=M)}if(t.y<0){let g=(this.groundY-h)/t.y;g>0&&g<s&&(s=g,a={ground:!0,mat:this.groundMat},o=1,l=1)}if(!a)return null;let b=new D;return b.setComponent(o,l),{dist:s,point:e.clone().addScaledVector(t,s),normal:b,collider:a,mat:a.mat}}lineOfSight(e,t){qr.subVectors(t,e);let i=qr.length();qr.divideScalar(i);let n=this.raycast(e,qr,i);return!n||n.dist>=i-.05}collideCylinder(e,t,i,n,s=.45){let a=this.groundY,o=e.y;for(let h of this.colliders){if(h.noCollide||h.max.y<=o+s||h.min.y>=o+i)continue;let d=Math.max(h.min.x,Math.min(e.x,h.max.x)),u=Math.max(h.min.z,Math.min(e.z,h.max.z)),f=e.x-d,m=e.z-u,b=f*f+m*m;if(!(b>=t*t))if(b>1e-8){let g=Math.sqrt(b),p=t-g;e.x+=f/g*p,e.z+=m/g*p;let v=f/g,_=m/g,y=n.x*v+n.z*_;y<0&&(n.x-=y*v,n.z-=y*_)}else{let g=e.x-h.min.x,p=h.max.x-e.x,v=e.z-h.min.z,_=h.max.z-e.z,y=Math.min(g,p,v,_);y===g?(e.x=h.min.x-t,n.x=Math.min(n.x,0)):y===p?(e.x=h.max.x+t,n.x=Math.max(n.x,0)):y===v?(e.z=h.min.z-t,n.z=Math.min(n.z,0)):(e.z=h.max.z+t,n.z=Math.max(n.z,0))}}let l=1/0;for(let h of this.colliders)h.noCollide||e.x+t*.7<h.min.x||e.x-t*.7>h.max.x||e.z+t*.7<h.min.z||e.z-t*.7>h.max.z||(h.max.y<=o+s+.001&&h.max.y>a?a=h.max.y:h.min.y>=o+.2&&h.min.y<l&&(l=h.min.y));let c=this.bounds;return e.x=Math.max(c.minX+t,Math.min(c.maxX-t,e.x)),e.z=Math.max(c.minZ+t,Math.min(c.maxZ-t,e.z)),{groundY:a,ceiling:l}}buildNav(e=.8){let t=this.bounds,i=Math.ceil((t.maxX-t.minX)/e),n=Math.ceil((t.maxZ-t.minZ)/e),s=new Uint8Array(i*n),a=.35;for(let o of this.colliders){if(o.noCollide||o.max.y<.5||o.min.y>1.7)continue;let l=Math.max(0,Math.floor((o.min.x-a-t.minX)/e)),c=Math.min(i-1,Math.floor((o.max.x+a-t.minX)/e)),h=Math.max(0,Math.floor((o.min.z-a-t.minZ)/e)),d=Math.min(n-1,Math.floor((o.max.z+a-t.minZ)/e));for(let u=h;u<=d;u++)for(let f=l;f<=c;f++)s[u*i+f]=1}this.nav={cell:e,w:i,h:n,grid:s},this.coverPoints=[];for(let o=1;o<n-1;o+=2)for(let l=1;l<i-1;l+=2)s[o*i+l]||(s[o*i+l+1]||s[o*i+l-1]||s[(o+1)*i+l]||s[(o-1)*i+l])&&this.coverPoints.push(new D(t.minX+(l+.5)*e,0,t.minZ+(o+.5)*e))}navCell(e){let t=this.nav,i=this.bounds;return[Math.max(0,Math.min(t.w-1,Math.floor((e.x-i.minX)/t.cell))),Math.max(0,Math.min(t.h-1,Math.floor((e.z-i.minZ)/t.cell)))]}navFree(e,t){let i=this.nav;return e>=0&&t>=0&&e<i.w&&t<i.h&&!i.grid[t*i.w+e]}cellPos(e,t){let i=this.nav,n=this.bounds;return new D(n.minX+(e+.5)*i.cell,0,n.minZ+(t+.5)*i.cell)}nearestFree(e,t){if(this.navFree(e,t))return[e,t];for(let i=1;i<8;i++)for(let n=-i;n<=i;n++)for(let s=-i;s<=i;s++)if(!(Math.abs(s)!==i&&Math.abs(n)!==i)&&this.navFree(e+s,t+n))return[e+s,t+n];return null}findPath(e,t,i=3e4){let n=this.nav;if(!n)return null;let s=this.navCell(e),a=this.navCell(t);if(s=this.nearestFree(s[0],s[1]),a=this.nearestFree(a[0],a[1]),!s||!a)return null;let o=n.w,l=n.w*n.h,c=s[1]*o+s[0],h=a[1]*o+a[0];(!this._g||this._g.length!==l)&&(this._g=new Float32Array(l),this._came=new Int32Array(l),this._stamp=new Uint32Array(l),this._closed=new Uint32Array(l),this._run=0);let d=this._g,u=this._came,f=this._stamp,m=this._closed,b=++this._run,g=L=>{let O=L%o,P=L/o|0,U=Math.abs(O-a[0]),B=Math.abs(P-a[1]);return Math.max(U,B)+.414*Math.min(U,B)},p=[],v=[],_=(L,O)=>{let P=p.length;for(p.push(L),v.push(O);P>0;){let U=P-1>>1;if(p[U]<=p[P])break;[p[U],p[P]]=[p[P],p[U]],[v[U],v[P]]=[v[P],v[U]],P=U}},y=()=>{let L=v[0],O=p.pop(),P=v.pop();if(p.length){p[0]=O,v[0]=P;let U=0;for(;;){let B=2*U+1,H=B+1,Z=U;if(B<p.length&&p[B]<p[Z]&&(Z=B),H<p.length&&p[H]<p[Z]&&(Z=H),Z===U)break;[p[Z],p[U]]=[p[U],p[Z]],[v[Z],v[U]]=[v[U],v[Z]],U=Z}}return L};f[c]=b,d[c]=0,u[c]=-1,_(g(c),c);let w=0,E=c===h;for(;p.length&&w++<i;){let L=y();if(L===h){E=!0;break}if(m[L]===b)continue;m[L]=b;let O=L%o,P=L/o|0,U=d[L];for(let B=-1;B<=1;B++)for(let H=-1;H<=1;H++){if(!H&&!B)continue;let Z=O+H,z=P+B;if(!this.navFree(Z,z)||H&&B&&(!this.navFree(O+H,P)||!this.navFree(O,P+B)))continue;let X=z*o+Z,ee=U+(H&&B?1.414:1);(f[X]!==b||ee<d[X])&&(f[X]=b,d[X]=ee,u[X]=L,_(ee+g(X),X))}}if(!E)return null;let x=[],M=h;for(;M!==c&&M>=0;)x.push(this.cellPos(M%o,M/o|0)),M=u[M];x.reverse();let R=[],A=e.clone(),I=0;for(;I<x.length;){let L=x.length-1;for(;L>I&&!this.clearWalk(A,x[L]);L--);R.push(x[L]),A=x[L],I=L+1}return R}clearWalk(e,t){let i=Math.ceil(e.distanceTo(t)/(this.nav.cell*.5));for(let n=1;n<=i;n++){let s=n/i;qr.lerpVectors(e,t,s);let[a,o]=this.navCell(qr);if(!this.navFree(a,o))return!1}return!0}};var Vy=(r=0,e=0,t=0)=>new D(r,e,t);function Vc(r,e){let t=Math.sin(r*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function Wy(r,e){let t=Math.floor(r),i=Math.floor(e),n=r-t,s=e-i,a=n*n*(3-2*n),o=s*s*(3-2*s),l=Vc(t,i),c=Vc(t+1,i),h=Vc(t,i+1),d=Vc(t+1,i+1);return l+(c-l)*a+(h-l)*o+(l-c-h+d)*a*o}function du(r,e,t=4){let i=0,n=.5,s=1;for(let a=0;a<t;a++)i+=Wy(r*s,e*s)*n,n*=.5,s*=2.03;return i}function Xr(r,e){let{scene:t,engine:i}=r,n=i.renderer;n.toneMappingExposure=e.exposure??1;let s=new Or(n),a=Vp(e.hdri),o=new an,l=new be(e.bounceColor??e.groundColor??7035461).multiplyScalar((e.sunIntensity??3)*Math.max(.15,e.sunDir.clone().normalize().y)*(e.bounce??.32)),c=new et({side:ai,depthWrite:!1,uniforms:{map:{value:a},ground:{value:l},skyMul:{value:e.skyEnvMul??1}},vertexShader:"varying vec3 vD; void main(){ vD = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D map; uniform vec3 ground; uniform float skyMul; varying vec3 vD;
      void main(){ vec3 d = normalize(vD); vec2 uv = vec2(atan(d.z, d.x) * 0.15915494 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5);
        vec3 c = texture2D(map, uv).rgb * skyMul; float g = smoothstep(0.03, -0.06, d.y); gl_FragColor = vec4(mix(c, ground, g), 1.0); }`});o.add(new Fe(new cs(10,64,32),c));let h=s.fromScene(o,0,.1,100).texture;a.dispose(),c.dispose(),s.dispose(),t.environment=h,t.environmentIntensity=e.envIntensity??1,i.vmScene.environment=h,i.vmScene.environmentIntensity=(e.envIntensity??1)*(e.vmEnv??1.25);let d=e.sunDir.clone().normalize();if(e.night)t.background=Xy(e);else{let v=qy(e,d);t.add(v),r.sky=v,t.background=null}let u=new ds(e.sunColor??16773596,e.sunIntensity??3);u.position.copy(d).multiplyScalar(100),u.castShadow=!0;let f=i.quality,m={low:1024,medium:2048,high:4096,ultra:4096}[f]||2048;u.shadow.mapSize.set(m,m);let b=e.shadowExtent??55;Object.assign(u.shadow.camera,{left:-b,right:b,top:b,bottom:-b,near:1,far:250}),u.shadow.bias=-3e-4,u.shadow.normalBias=.03,u.shadow.radius=3,u.shadow.blurSamples=12,t.add(u),t.add(u.target),r.sun=u,r.sunDir=d,r.shadowExt=b;let g=new Rr(e.skyColor??12572415,e.groundColor??7035461,e.hemi??.25);t.add(g);let p=new ds(e.sunColor??16773596,(e.sunIntensity??3)*.75);i.vmScene.add(p),i.vmScene.add(p.target),r.vmSun=p,i.vmScene.add(new Rr(e.skyColor??12572415,e.groundColor??7035461,(e.hemi??.25)*1.2)),t.fog=new ga(e.fogColor??13227746,e.fogDensity??.0045),r.grade=e.grade||{}}function qy(r,e){let t=new et({side:ai,depthWrite:!1,fog:!1,uniforms:{zenith:{value:new be(r.skyTop??3104670).multiplyScalar(r.skyBright??1.4)},horizon:{value:new be(r.skyHorizon??13030624).multiplyScalar(r.skyBright??1.4)},ground:{value:new be(r.skyGround??7037528).multiplyScalar(.6)},sunDir:{value:e.clone()},sunCol:{value:new be(r.sunColor??16773596)},cover:{value:r.clouds??.45},cloudCol:{value:new be(r.cloudColor??16777215)},time:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p; }",fragmentShader:`
      uniform vec3 zenith, horizon, ground, sunDir, sunCol, cloudCol; uniform float cover, time; varying vec3 vDir;
      float h21(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
      float n2(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      float fbm(vec2 p){ float s=0.0,a=0.5; for(int i=0;i<6;i++){ s+=n2(p)*a; p=p*2.03+vec2(1.7,9.2); a*=0.5; } return s; }
      void main(){
        vec3 d = normalize(vDir); float h = d.y;
        vec3 col = mix(horizon, zenith, pow(clamp(h,0.0,1.0), 0.45));
        col = mix(col, ground, smoothstep(0.0, -0.08, h));
        float c = max(dot(d, normalize(sunDir)), 0.0);
        col += sunCol * (pow(c, 6.0) * 0.35 + pow(c, 48.0) * 0.9) * (0.6 + 0.4 * (1.0 - clamp(h*2.0,0.0,1.0)));
        float disc = smoothstep(0.99955, 0.99975, c);
        col += sunCol * disc * 40.0;
        if (h > 0.0 && cover > 0.0) {
          vec2 uv = d.xz / (h + 0.12) * 1.6 + vec2(time * 0.004, time * 0.0015);
          float n = fbm(uv);
          float m = smoothstep(1.0 - cover, 1.0 - cover + 0.32, n) * smoothstep(0.0, 0.15, h);
          float lit = clamp(0.55 + (n - 0.5) * 1.3 + pow(c, 4.0) * 0.6, 0.0, 1.4);
          vec3 cc = cloudCol * mix(horizon * 0.55, vec3(1.0) * length(horizon) * 0.62, lit) + sunCol * pow(c, 8.0) * 0.8 * m;
          col = mix(col, cc, m * 0.92);
        }
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),i=new Fe(new cs(1e3,48,24),t);return i.frustumCulled=!1,i.renderOrder=-10,i}function Xy(r){let e=document.createElement("canvas");e.width=2048,e.height=1024;let t=e.getContext("2d"),i=t.createLinearGradient(0,0,0,1024);i.addColorStop(0,"#02040a"),i.addColorStop(.42,"#0a1426"),i.addColorStop(.5,"#1a2436"),i.addColorStop(.52,"#0b0d12"),i.addColorStop(1,"#050505"),t.fillStyle=i,t.fillRect(0,0,2048,1024);for(let c=0;c<2500;c++){let h=Math.random()*500,d=Math.random();t.fillStyle=`rgba(255,255,255,${d*d*(1-h/520)})`,t.fillRect(Math.random()*2048,h,d>.95?2:1,d>.95?2:1)}let n=1300,s=260,a=t.createRadialGradient(n,s,0,n,s,90);a.addColorStop(0,"rgba(220,230,255,0.35)"),a.addColorStop(1,"rgba(200,210,255,0)"),t.fillStyle=a,t.fillRect(n-90,s-90,180,180),t.fillStyle="#e8ecf5",t.beginPath(),t.arc(n,s,16,0,7),t.fill();let o=t.createLinearGradient(0,470,0,530);o.addColorStop(0,"rgba(255,140,60,0)"),o.addColorStop(.7,"rgba(255,140,60,0.12)"),o.addColorStop(1,"rgba(255,140,60,0)"),t.fillStyle=o,t.fillRect(0,470,2048,60);let l=new ji(e);return l.mapping=fs,l.colorSpace=rt,l}function im(r){let e=r.sun;if(!e)return;let t=r.player.pos,i=r.shadowExt,n=e.shadow.mapSize.x,s=2*i/n,a=Vy(Math.round(t.x/s)*s,0,Math.round(t.z/s)*s);if(e.target.position.copy(a),e.position.copy(a).addScaledVector(r.sunDir,120),e.target.updateMatrixWorld(),r.vmSun){let o=r.engine.camera,l=r.sunDir.clone().applyQuaternion(o.quaternion.clone().invert());r.vmSun.position.copy(l).multiplyScalar(5),r.vmSun.target.position.set(0,0,0)}r.sky&&(r.sky.position.copy(r.engine.camera.position),r.sky.material.uniforms.time.value=r.time)}async function yo(r,{tex:e,texSize:t=4,size:i=700,flat:n=90,hills:s=25,color:a,seed:o=0,mat:l="dirt",rough:c}){let d=new Oi(i,i,160,160);d.rotateX(-Math.PI/2);let u=d.attributes.position,f=d.attributes.uv,m=new Float32Array(u.count*3);for(let p=0;p<u.count;p++){let v=u.getX(p),_=u.getZ(p),y=Math.max(Math.abs(v),Math.abs(_)),w=Ei.smoothstep(y,n,n+70),E=w*(du(v*.012+o,_*.012)*s+du(v*.05,_*.05+o)*4)-(1-w)*0;u.setY(p,E+(y<n,0)),f.setXY(p,v/t,_/t);let x=.82+du(v*.03+5,_*.03)*.36;m[p*3]=m[p*3+1]=m[p*3+2]=x}d.setAttribute("color",new It(m,3)),d.computeVertexNormals();let b=(await ui(e)).clone();iu(b,0),b.vertexColors=!0,a&&b.color.set(a),c!==void 0&&(b.roughness=c);let g=new Fe(d,b);return g.receiveShadow=!0,r.scene.add(g),r.world.groundMat=l,g}function Wi(r,e,t,i,n,s,a,o,l=[],c={}){let h=Math.abs(i-e)>=Math.abs(n-t),d=h?Math.min(e,i):Math.min(t,n),u=Math.abs(h?i-e:n-t),f=h?t:e,m=(p,v,_,y)=>{if(v-p<.02||y-_<.02)return;let w=(p+v)/2;h?r.box(w,_+(c.y||0),f,v-p,y-_,a,o,c):r.box(f,_+(c.y||0),w,a,y-_,v-p,o,c)},b=l.map(p=>({s:d+u*p.at-p.w/2,e:d+u*p.at+p.w/2,y0:p.y0??0,y1:p.y1??2.3})).sort((p,v)=>p.s-v.s),g=d;for(let p of b)m(g,p.s,0,s),m(p.s,p.e,0,p.y0),m(p.s,p.e,p.y1,s),g=p.e;m(g,d+u,0,s)}function xs(r,e,t,i,n,s,a,{roofMat:o,floorMat:l,thick:c=.3,doors:h={},windows:d={},roof:u=!0,parapet:f=.6,trim:m}={}){let b=e-i/2,g=e+i/2,p=t-n/2,v=t+n/2,_=y=>[...(h[y]||[]).map(w=>({at:w,w:1.3,y0:0,y1:2.3})),...(d[y]||[]).map(w=>({at:w,w:1.2,y0:1,y1:2}))];return Wi(r,b,p,g,p,s,c,a,_("n")),Wi(r,b,v,g,v,s,c,a,_("s")),Wi(r,b,p+c/2,b,v-c/2,s,c,a,_("w")),Wi(r,g,p+c/2,g,v-c/2,s,c,a,_("e")),u&&(r.box(e,s,t,i+.2,.25,n+.2,o||a,{texSize:3}),f&&(r.box(e,s+.25,p-.05,i+.2,f,.2,a,{collide:!1}),r.box(e,s+.25,v+.05,i+.2,f,.2,a,{collide:!1}),r.box(b-.05,s+.25,t,.2,f,n,a,{collide:!1}),r.box(g+.05,s+.25,t,.2,f,n,a,{collide:!1}))),l&&r.box(e,0,t,i-c,.04,n-c,l,{collide:!1,cast:!1}),{x0:b,x1:g,z0:p,z1:v}}async function nm(r){let e=(await ui("container_side")).clone();return e.color.set(r),e}var Ie=(r=0,e=0,t=0)=>new D(r,e,t);async function _o(){let[r,e,t,i,n,s,a,o,l,c,h,d,u]=await Promise.all([ui("plastered_wall_04"),ui("beige_wall_001"),ui("red_brick_03"),ui("brushed_concrete"),ui("patterned_concrete_wall"),ui("concrete_floor_worn_001"),ui("asphalt_02"),ui("rusty_metal_02"),ui("corrugated_iron"),ui("brown_planks_03"),ui("metal_plate"),ui("rocky_terrain_02"),ui("dry_ground_01")]),f=new tt({color:9403740,roughness:.95,normalMap:r.normalMap,normalScale:new ue(1.5,1.5)}),m=h.clone();m.color.set(14263328),m.metalness=.6;let b=h.clone();return b.color.set(3816768),{plaster:r,beige:e,brick:t,concrete:i,patterned:n,floor:s,asphalt:a,rust:o,corr:l,wood:c,plate:h,rock:d,sandstone:u,sandbag:f,yellow:m,darkMetal:b}}function Ut(r,e,t,i={}){return r.enemies.spawn({pos:Ie(e,i.y||0,t),yaw:i.yaw??Math.PI,tint:i.tint??r.level.tint,zone:i.zone,state:i.state,patrol:i.patrol?.map(n=>Ie(n[0],0,n[1])),hold:i.hold,hp:i.hp,hostage:i.hostage})}function un(r,e,t,i,n,s=!0,a=.9){let o=new dt,l=Math.round(a/.22),c=Math.ceil(n/.6),h=new Ea(.13,.36,4,8);h.rotateZ(Math.PI/2),h.scale(1,.75,1.3);let d=new Hn(h,e.sandbag,l*(c+1)),u=0,f=new De,m=new Dt,b=new D(1,1,1);for(let g=0;g<l;g++)for(let p=0;p<=c;p++){let v=(p+g%2*.5)*.6-n/2;if(v>n/2)continue;let _=s?Ie(t+v,.12+g*.2,i):Ie(t,.12+g*.2,i+v);m.setFromEuler(new _i(0,(s?0:Math.PI/2)+(Math.random()-.5)*.15,0)),f.compose(_,m,b),d.setMatrixAt(u++,f)}d.count=u,d.castShadow=d.receiveShadow=!0,r.scene.add(d),s?r.addCollider(Ie(t-n/2,0,i-.3),Ie(t+n/2,a,i+.3),"dirt"):r.addCollider(Ie(t-.3,0,i-n/2),Ie(t+.3,a,i+n/2),"dirt")}function jy(r,e,t,i,n=0){let s=new dt,a=new Fe(new qt(.34,.02,.24),new tt({color:2237222,metalness:.6,roughness:.4})),o=document.createElement("canvas");o.width=256,o.height=160;let l=o.getContext("2d");l.fillStyle="#031",l.fillRect(0,0,256,160),l.fillStyle="#3f8",l.font="12px monospace";for(let u=0;u<11;u++)l.fillText(["> ACCESS GRANTED","> DECRYPTING...","NODE 7 :: "+Math.random().toString(16).slice(2,10),"COORD 34.51N 69.18E","> TRANSFER 42%","CACHE: SECTOR-4","\u2588\u2588\u2593\u2592\u2591 \u2592\u2593\u2588","EXFIL ROUTE B","PAYLOAD ARMED","USER: vanguard","> _"][u],8,16+u*13);let c=new ji(o);c.colorSpace=rt;let h=new Fe(new qt(.34,.22,.012),[0,0,0,0,new tt({color:1118481,emissive:16777215,emissiveMap:c,emissiveIntensity:2.5,map:c}),0].map(u=>u||a.material));h.position.set(0,.11,-.12),h.rotation.x=-.25,a.position.y=.01,s.add(a,h),s.position.set(e,t,i),s.rotation.y=n,r.scene.add(s);let d=new hi(5635993,1.5,3,2);return d.position.set(e,t+.3,i),r.scene.add(d),s}function pu(r,e,t,i,n=1.4,s=.8){r.world.box(t,.74,i,n,.05,s,e.wood,{texSize:1.5});for(let[a,o]of[[-1,-1],[1,-1],[-1,1],[1,1]])r.world.box(t+a*(n/2-.06),0,i+o*(s/2-.06),.06,.74,.06,e.wood,{collide:!1});r.world.addCollider(Ie(t-n/2,0,i-s/2),Ie(t+n/2,.79,i+s/2),"wood")}function uu(r,e,t=[.35,.95,.4]){return i=>{for(r._gs=(r._gs||0)+i*10;r._gs>1;)r._gs--,r.effects.smoke.spawn(e.clone().add(Ie((Math.random()-.5)*.4,.2,(Math.random()-.5)*.4)),Ie(.6+Math.random()*.5,1.2+Math.random(),(Math.random()-.5)*.4),{life:5+Math.random()*2,size:.8,grow:1.6,color:t,alpha:.5,drag:.4,spin:.4,fade:2})}}function fu(r,e,t,i,n=0,s={}){let a=new dt;a.position.set(t,s.y||0,i),a.rotation.y=n;let o=new tt({color:s.color??8225396,metalness:.7,roughness:.55,normalMap:e.plate.normalMap}),l=new Fe(new qt(.5,.75,.025),o);l.position.y=1;let c=new Fe(new ci(.12,.12,.025,20),o);c.rotation.x=Math.PI/2,c.position.y=1.52;let h=new Fe(new qt(.06,.65,.06),e.darkMetal);h.position.y=.32;let d=new Fe(new Ca(.13,.015,6,20),new Jt({color:16724e3}));d.position.set(0,1,.02),a.add(l,c,h,d),a.traverse(m=>{m.isMesh&&(m.castShadow=!0)}),r.scene.add(a);let u=new dt,f=r.world.addCollider(Ie(t-.3,(s.y||0)+.6,i-.3),Ie(t+.3,(s.y||0)+1.68,i+.3),"metal",{mesh:a,target:!0,lane:s.lane});return r.world.box(t,s.y||0,i,.6,.08,.4,e.darkMetal,{collide:!1}),f}async function sm(r,e){let t=r.world;t.bounds={minX:-68,maxX:68,minZ:-84,maxZ:68},await yo(r,{tex:"dry_ground_01",texSize:5,flat:85,hills:32,mat:"sand",seed:3});for(let a=0;a<26;a++){let o=a/26*Math.PI*2,l=95+Math.random()*15;await t.prop("boulder_01",Math.cos(o)*l*.75,Math.sin(o)*l*.85,{rotY:Math.random()*6,scale:3+Math.random()*4,collide:!1})}let i=e.plaster;Wi(t,-42,30,42,30,2.8,.5,i,[{at:.5,w:4,y0:0,y1:9},{at:.2,w:2.2,y0:0,y1:9},{at:.8,w:2.2,y0:0,y1:9}],{texSize:3}),t.wall(-42,30,-42,-20,2.8,.5,i,{texSize:3}),t.wall(42,30,42,-20,2.8,.5,i,{texSize:3});let n=(a,o,l,c,h,d)=>xs(t,a,o,l,c,h,d.mat||e.plaster,{roofMat:e.concrete,floorMat:e.floor,...d});n(-25,16,10,8,3.4,{doors:{s:[.3]},windows:{e:[.5],w:[.5],n:[.7]}}),n(-8,12,8,8,3.2,{doors:{s:[.5],e:[.5]},windows:{n:[.5]},mat:e.beige}),n(12,16,12,8,3.6,{doors:{s:[.25]},windows:{n:[.3,.7],w:[.5],s:[.75]}}),n(29,9,8,10,3.2,{doors:{w:[.5]},windows:{s:[.5],n:[.5]},mat:e.beige}),n(-28,-8,10,10,3.4,{doors:{e:[.5]},windows:{n:[.5],s:[.5]}}),n(25,-12,10,8,3.4,{doors:{w:[.5],s:[.6]},windows:{e:[.5]},mat:e.beige}),n(-10,-14,7,7,3,{doors:{s:[.5],e:[.4]},windows:{w:[.5]}}),Wi(t,-16,-24,16,-24,3,.5,e.patterned,[{at:.5,w:3.5,y0:0,y1:9}],{texSize:3}),t.wall(-16,-24,-16,-52,3,.5,e.patterned,{texSize:3}),t.wall(16,-24,16,-52,3,.5,e.patterned,{texSize:3}),Wi(t,-16,-52,16,-52,3,.5,e.patterned,[{at:.75,w:3,y0:0,y1:9}],{texSize:3}),n(0,-40,16,12,4,{doors:{s:[.5],n:[.2]},windows:{s:[.15,.85],e:[.5],w:[.3]},mat:e.beige}),Wi(t,-8,-40,8,-40,4,.25,e.beige,[{at:.65,w:1.3,y0:0,y1:2.3}]);for(let[a,o]of[[-6,0],[4,2],[10,-4]]){t.box(a,0,o,3,.9,1.4,e.wood,{mat:"wood",texSize:1.5});for(let[l,c]of[[-1.4,-.7],[1.4,-.7],[-1.4,.7],[1.4,.7]])t.box(a+l,.9,o+c,.08,1.6,.08,e.wood,{collide:!1});t.box(a,2.5,o,3.4,.05,1.8,e.corr,{collide:!1,texSize:2})}let s=(a,o,l,c={})=>t.prop(a,o,l,c);await Promise.all([s("wooden_crate_01",-3,6,{rotY:.3,mat:"wood"}),s("wooden_crate_01",-3,6.8,{rotY:.1,mat:"wood",y:0}),s("old_military_crate",6,8,{rotY:1.2,mat:"wood"}),s("Barrel_01",7.5,7,{mat:"metal"}),s("barrel_03",8.2,7.6,{mat:"metal"}),s("metal_jerrycan_green",2,-6,{explosive:!0}),s("propane_tank",15,-2,{explosive:!0}),s("propane_tank",-16,4,{explosive:!0}),s("covered_car",-16,38,{rotY:.4}),s("covered_car",20,24,{rotY:-1.2}),s("concrete_road_barrier",-4,44,{rotY:.1}),s("concrete_road_barrier",3,46,{rotY:-.2}),s("concrete_road_barrier",0,-20,{rotY:0}),s("old_tyre",-12,25,{rotY:1,y:.3}),s("cardboard_box_01",-22,4),s("cardboard_box_01",-21.5,4.5,{rotY:.7}),s("wooden_crate_01",18,3,{rotY:.8,mat:"wood"}),s("Barrel_01",-30,2),s("Barrel_01",-30.7,2.6),s("barrel_03",31,-2),s("utility_box_01",34,18,{rotY:Math.PI/2}),s("portable_generator",-6,-28,{rotY:.5}),s("old_military_crate",8,-30,{mat:"wood"}),s("ammo_box",8,-30.3,{y:.3}),s("medical_box",-5,-45)]);for(let a=0;a<14;a++){let o=(Math.random()-.5)*110,l=40+Math.random()*25;Math.abs(o)<6||await s("boulder_01",o,l,{rotY:Math.random()*6,scale:.8+Math.random()*.9,mat:"concrete"})}for(let a=0;a<40;a++)await s("rock_07",(Math.random()-.5)*120,(Math.random()-.5)*150,{rotY:Math.random()*6,scale:1+Math.random()*2,collide:!1,cast:!1});un(t,e,-3,36,4),un(t,e,4,36,3),un(t,e,-6,-20,3),un(t,e,6,-20,3),un(t,e,0,-60,6),pu(r,e,3,-44.5,1.6,.8),jy(r,3,.79,-44.5,.2);for(let[a,o]of[[0,-44],[0,-36],[12,16],[-28,-8]]){let l=new hi(16767392,4,9,2);l.position.set(a,2.8,o),r.scene.add(l)}}var En=[{id:"bootcamp",name:"BOOT CAMP",location:"Camp Hornet, Nevada",time:"09:20 Local",reverb:"outdoor",briefing:"Before you deploy, prove you can handle your loadout. Run the qualification course: hip-fire, long-range marksmanship, grenade handling and close-quarters clearing. The clock is running, soldier.",objectivesPreview:["Hip-fire qualification","Long-range marksmanship","Grenade handling","Clear the shoot house","Sprint to the finish"],intro:["BOOT CAMP","Camp Hornet, Nevada",'Sgt. "Ghost" Reyes \u2014 1st Vanguard Battalion',"Day 1, 09:20"],hint:"Move: <b>WASD</b> &nbsp; Look: <b>Mouse/Arrows</b> &nbsp; Fire: <b>Click or E</b> &nbsp; Aim: <b>RMB or Z</b> &nbsp; Sprint: <b>Shift</b> &nbsp; Reload: <b>R</b>",ambience:[["wind",.25]],async build(r,e){Xr(r,{hdri:"kloofendal_48d_partly_cloudy_puresky",sunDir:Ie(-.5,.9,.35),sunIntensity:3.2,sunColor:16773340,envIntensity:.9,fogColor:12374246,fogDensity:.0032,exposure:1,skyTop:2775712,skyHorizon:12571364,clouds:.5,hemi:.2,groundColor:5925440,grade:{saturation:1.05}}),r.envExposure=1;let t=await _o(),i=r.world;r.level.tint=7173217,i.bounds={minX:-46,maxX:46,minZ:-70,maxZ:46},await yo(r,{tex:"sparse_grass",texSize:4,flat:80,hills:30,mat:"grass",seed:7}),e(.45,"Building range");for(let[h,d,u,f]of[[-46,-70,46,-70],[-46,46,46,46],[-46,-70,-46,46],[46,-70,46,46]])i.wall(h,d,u,f,2.6,.4,t.patterned,{texSize:3});pu(r,t,-3,38,2,.9),pu(r,t,3,38,2,.9),await Promise.all([i.prop("ammo_box",-3.4,38,{y:.79}),i.prop("ammo_box",-2.6,38.1,{y:.79,rotY:.4}),i.prop("medical_box",3,38,{y:.79}),i.prop("old_military_crate",8,40,{mat:"wood"}),i.prop("wooden_crate_01",9,37,{mat:"wood"}),i.prop("portable_generator",-9,40)]),un(i,t,-12,16,10);for(let h=0;h<4;h++)fu(r,t,-16+h*2.7,2-h%2*3,0,{lane:1});i.box(-12,0,20,.3,.02,.3,t.concrete,{collide:!1}),un(i,t,12,16,10);for(let h=0;h<3;h++)fu(r,t,8+h*4,-26-h*6,0,{lane:2});for(let h of[0,-10,-20,-30])i.box(5,0,h,.15,1.2,.15,t.wood,{collide:!1}),i.box(19,0,h,.15,1.2,.15,t.wood,{collide:!1});let n=Ie(-28,0,-6);for(let h=0;h<4;h++){let d=h*Math.PI/2;un(i,t,n.x+Math.cos(d)*3.2,n.z+Math.sin(d)*3.2,4.5,h%2===1,.6)}un(i,t,-28,8,5),e(.6,"Building shoot house");let s={x:0,z:-45};xs(i,s.x,s.z,18,14,3.2,t.concrete,{roof:!1,floorMat:t.floor,doors:{s:[.5],n:[.8]},windows:{e:[.3],w:[.6]}}),Wi(i,-9,-45,3,-45,3.2,.25,t.concrete,[{at:.35,w:1.3,y0:0,y1:2.3}]),Wi(i,3,-52,3,-38,3.2,.25,t.concrete,[{at:.25,w:1.3,y0:0,y1:2.3},{at:.75,w:1.3,y0:0,y1:2.3}]);for(let[h,d,u]of[[-6,-41,0],[-2,-40,0],[6,-41,0],[7,-49,0],[-5,-50,0],[-1,-49.5,0]])fu(r,t,h,d,Math.PI*(Math.random()<.5,0),{lane:3,color:9198154});await Promise.all([i.prop("wooden_crate_01",-7,-48,{mat:"wood"}),i.prop("Barrel_01",5,-43),i.prop("cardboard_box_01",1,-50)]);let a=Ie(0,0,-63);i.box(-4,0,-63,.3,3,.3,t.yellow,{collide:!1}),i.box(4,0,-63,.3,3,.3,t.yellow,{collide:!1}),i.box(0,2.9,-63,8.3,.3,.3,t.yellow,{collide:!1});for(let[h,d]of[[-40,40],[40,40],[-40,-64],[40,-64]]){for(let[u,f]of[[-1,-1],[1,-1],[-1,1],[1,1]])i.box(h+u,0,d+f,.2,5,.2,t.wood,{mat:"wood"});i.box(h,5,d,2.6,.15,2.6,t.wood),i.box(h,5.15,d,2.6,1,.1,t.wood,{collide:!1}),i.box(h,6.4,d,3,.1,3,t.corr,{collide:!1})}let o={1:0,2:0,3:0};r.onTargetHit=h=>{o[h.lane]=(o[h.lane]||0)+1};let l=!1;return{spawn:Ie(0,0,40),spawnYaw:0,exposure:1,onExplosion:(h,d)=>{d==="frag"&&Math.hypot(h.x-n.x,h.z-n.z)<4.5&&(l=!0)},objectives:[{type:"reach",text:"Move to the firing line at Lane 1",pos:Ie(-12,0,18),radius:3},{type:"custom",text:"Hip-fire: knock down the 4 targets in Lane 1",waypointPos:Ie(-12,1,0),check:(h,d,u)=>(h.hud.setObjectiveCount(`${o[1]}/4`),o[1]>=4),onStart:h=>h.hud.showHint("Hip-fire is fastest up close. Aim with <b>RMB</b> for precision.",6)},{type:"reach",text:"Move to the firing line at Lane 2",pos:Ie(12,0,18),radius:3},{type:"custom",text:"Aim down sights (RMB) and drop the 3 long-range targets",waypointPos:Ie(12,1,-32),check:()=>(r.hud.setObjectiveCount(`${o[2]}/3`),o[2]>=3),onStart:h=>h.hud.showHint("Hold <b>RMB</b> to aim. Crouch (<b>C</b>) to steady your shots.",6)},{type:"reach",text:"Proceed to the grenade range",pos:Ie(-28,0,10),radius:3},{type:"custom",text:"Throw a grenade (G) into the sandbagged pit",waypointPos:Ie(-28,.5,-6),check:h=>(h.player.grenades.lethal===0&&!l&&!h.grenades.length&&(h.player.grenades.lethal=1),l),onStart:h=>h.hud.showHint("Press <b>G</b> to throw a frag grenade. Aim high to lob it further.",6)},{type:"reach",text:"Enter the shoot house",pos:Ie(0,0,-38),radius:2.5,onStart:h=>{h.player.grenades.lethal=2,h.player.grenades.tactical=2}},{type:"custom",text:"Clear the shoot house: drop all 6 targets",check:()=>(r.hud.setObjectiveCount(`${o[3]}/6`),o[3]>=6),onStart:h=>h.hud.showHint("Check your corners. Switch weapons with <b>1</b>/<b>2</b>, melee with <b>V</b>.",6)},{type:"reach",text:"Sprint (Shift) through the finish gate",pos:a,radius:3}]}}},{id:"dustdevil",name:"OPERATION DUST DEVIL",location:"Al-Qadir Province",time:"13:05 Local",reverb:"outdoor",briefing:'Insurgent commander "The Jackal" is coordinating attacks from a walled village in the desert. Infiltrate the village from the south, eliminate all hostile forces, and recover the intelligence laptop from his compound. Exfil by helicopter at the northern LZ.',objectivesPreview:["Infiltrate the village","Eliminate hostile forces","Recover the intel","Reach the LZ for extraction"],intro:["OPERATION DUST DEVIL","Al-Qadir Province",'Sgt. "Ghost" Reyes \u2014 1st Vanguard Battalion',"Day 4, 13:05"],ambience:[["wind",.45]],async build(r,e){Xr(r,{hdri:"qwantani_noon_puresky",sunDir:Ie(.6,.78,.5),sunIntensity:4,sunColor:16773852,envIntensity:1,fogColor:14273973,fogDensity:.005,exposure:.85,skyTop:2972828,skyHorizon:14866112,skyGround:11770488,clouds:.22,hemi:.25,groundColor:10125148,grade:{tint:16774114,saturation:1,contrast:1.14}}),r.envExposure=.85,r.level.tint=12101253;let t=await _o();e(.4,"Building village"),await sm(r,t),e(.7,"Deploying hostiles");let i="village";Ut(r,-20,36,{zone:i,patrol:[[-30,36],[-8,36]]}),Ut(r,22,36,{zone:i,patrol:[[12,36],[32,38]]}),Ut(r,-3,31.5,{zone:i,yaw:Math.PI}),Ut(r,3,32,{zone:i,yaw:Math.PI}),Ut(r,-25,16,{zone:i,yaw:Math.PI}),Ut(r,12,17,{zone:i,yaw:.5}),Ut(r,-8,12,{zone:i,yaw:2}),Ut(r,0,2,{zone:i,patrol:[[0,6],[-12,0],[0,-8],[14,-2]]}),Ut(r,22,0,{zone:i,yaw:1.5}),Ut(r,-28,-8,{zone:i,yaw:-1.5}),Ut(r,25,-12,{zone:i,yaw:2.5}),Ut(r,-10,-14,{zone:i}),Ut(r,-3,-22,{zone:i,yaw:Math.PI}),Ut(r,3,-21.5,{zone:i,yaw:Math.PI}),Ut(r,-5,-36,{zone:i}),Ut(r,5,-46,{zone:i,yaw:.8}),Ut(r,-10,-48,{zone:i,patrol:[[-12,-48],[12,-48]]});let n=Ie(0,0,-74),s=uu(r,n),a=!1;return{spawn:Ie(0,0,62),spawnYaw:0,exposure:.85,update:(o,l)=>{o.objIdx>=3&&s(l)},objectives:[{type:"reach",text:"Infiltrate the village",pos:Ie(0,0,26),radius:6},{type:"kill",text:"Eliminate all hostile forces in the village",filter:o=>o.zone==="village"},{type:"interact",text:"Recover the intel from The Jackal's compound",pos:Ie(3,0,-44.5),radius:1.6,label:"Hold <b>[F]</b> to download the intel",time:4},{type:"reach",text:"Reach the LZ for extraction",pos:n,radius:5,onStart:o=>{o.hud.toast("ENEMY REINFORCEMENTS INBOUND",3);for(let[l,c]of[[-60,-40],[-58,-30],[60,-45],[58,-35],[-30,-78],[30,-78]]){let h=Ut(o,l,c,{state:"combat",zone:"reinf"});h.lastSeen=o.player.pos.clone(),h.lastSeenT=o.time,h.awareness=1}}}]}}},{id:"ironharbor",name:"OPERATION IRON HARBOR",location:"Port of Kaliningrad Sector 9",time:"19:42 Local",reverb:"urban",briefing:"Intel from the Jackal's laptop points to a weapons smuggling ring operating out of a dockyard. Two arms caches are hidden among the containers. Plant charges on both, get clear of the blast and fight your way to the extraction boat at the pier.",objectivesPreview:["Plant C4 on cache Alpha","Plant C4 on cache Bravo","Get clear before detonation","Fight to the extraction boat"],intro:["OPERATION IRON HARBOR","Port Sector 9, Baltic Coast",'Sgt. "Ghost" Reyes \u2014 1st Vanguard Battalion',"Day 6, 19:42"],ambience:[["waves",.35],["wind",.2]],async build(r,e){Xr(r,{hdri:"belfast_sunset_puresky",sunDir:Ie(-1,.16,-.35),sunIntensity:3.6,sunColor:16756848,envIntensity:.9,fogColor:10520696,fogDensity:.0065,exposure:1,skyTop:3886968,skyHorizon:15769712,skyGround:4208175,clouds:.55,cloudColor:16765104,skyBright:1.2,hemi:.2,skyColor:16762010,groundColor:4208175,shadowExtent:60,grade:{tint:16773344,saturation:1.05,contrast:1.1}}),r.envExposure=1,r.level.tint=7304552;let t=await _o(),i=r.world;i.bounds={minX:-72,maxX:72,minZ:-78,maxZ:70};let n=await yo(r,{tex:"asphalt_02",texSize:6,flat:85,hills:18,mat:"concrete",seed:11});{let x=n.geometry.attributes.position;for(let M=0;M<x.count;M++)x.getZ(M)<-56&&x.setY(M,-8);x.needsUpdate=!0,n.geometry.computeVertexNormals()}e(.4,"Flooding the harbour");let s=await Sn("tex/waternormals.jpg");s.wrapS=s.wrapT=Yt;let a=new Hc(new Oi(1200,700),{textureWidth:512,textureHeight:512,waterNormals:s,sunDirection:r.sunDir.clone(),sunColor:16756848,waterColor:928307,distortionScale:2.6,fog:!0});a.rotation.x=-Math.PI/2,a.position.set(0,-1.6,-405),r.scene.add(a),r.water=a,i.box(0,-6,-57,400,6,2,t.concrete,{texSize:3,collide:!1}),i.addCollider(Ie(-200,-6,-59),Ie(36.5,3,-56.5),"concrete",{noRay:!0}),i.addCollider(Ie(43.5,-6,-59),Ie(200,3,-56.5),"concrete",{noRay:!0}),i.box(40,-.25,-67,7,.25,22,t.wood,{mat:"wood",texSize:2});for(let x=-58;x>-78;x-=4)for(let M of[36.8,43.2])i.box(M,-4,x,.4,3.8,.4,t.wood,{collide:!1});i.addCollider(Ie(35.5,-6,-78.5),Ie(36.6,3,-56),"wood",{noRay:!0}),i.addCollider(Ie(43.4,-6,-78.5),Ie(44.5,3,-56),"wood",{noRay:!0});let o=new dt,l=new tt({color:2832947,roughness:.6,metalness:.3}),c=new Fe(new qt(3.4,1.4,9),l);c.position.y=-.9,o.add(c);let h=new Fe(new Ra(1.7,3,4),l);h.rotation.set(-Math.PI/2,Math.PI/4,0),h.scale.set(1,1,.45),h.position.set(0,-.9,-5.8),o.add(h);let d=new Fe(new qt(2.4,1.6,2.6),new tt({color:12107189,roughness:.5}));d.position.set(0,.6,1.2),o.add(d),o.position.set(47,0,-70),o.traverse(x=>{x.isMesh&&(x.castShadow=x.receiveShadow=!0)}),r.scene.add(o),r.boat=o,e(.5,"Stacking containers");let u=[9187108,2772602,3894074,10119971,7040624,8009040,3041899],f=await Promise.all(u.map(x=>nm(x))),m=(x,M,R=!1,A=1,I)=>{for(let L=0;L<A;L++){let O=f[I??Math.random()*f.length|0],P=R?2.44:6.06,U=R?6.06:2.44;i.box(x,L*2.6,M,P,2.59,U,O,{mat:"metal",texSize:2.6})}},b=[];for(let x=0;x<5;x++)for(let M=0;M<6;M++){let R=-44+M*13+x%2*3,A=-38+x*14;if(x===2&&M===1)continue;let I=Math.random()<.45?2:1;m(R,A,!1,I),Math.random()<.7&&m(R,A+2.5,!1,Math.random()<.4?2:1),Math.random()<.3&&m(R+7.5,A+1,!0,1)}xs(i,50,30,24,16,7,t.corr,{roofMat:t.rust,floorMat:t.floor,doors:{w:[.5],s:[.3,.7],n:[.5]},windows:{},parapet:0,thick:.3}),i.box(50,0,30,24,.01,.01,t.corr,{collide:!1}),xs(i,52,-22,20,14,6.5,t.corr,{roofMat:t.rust,floorMat:t.floor,doors:{w:[.4],n:[.6]},windows:{},parapet:0}),xs(i,-52,40,14,10,4,t.brick,{roofMat:t.concrete,floorMat:t.floor,doors:{e:[.5]},windows:{s:[.3,.7],n:[.5]}});for(let x of[-22,8]){for(let[M,R]of[[-6,-1],[6,-1],[-6,-10],[6,-10]])i.box(x+M,0,-50+R,1,26,1,t.yellow,{mat:"metal"});i.box(x,26,-55,14,2,1.4,t.yellow,{collide:!1}),i.box(x,26,-45,14,2,1.4,t.yellow,{collide:!1}),i.box(x,28,-50,3,2,60,t.yellow,{collide:!1}),i.box(x,24,-62,2.5,3,3,t.darkMetal,{collide:!1})}for(let[x,M]of[[-60,20],[-30,52],[10,52],[30,-48],[62,5],[-60,-45]]){await i.prop("street_lamp_01",x,M,{rotY:Math.random()*6});let R=new hi(16761466,25,22,2);R.position.set(x,3.6,M),r.scene.add(R)}let g=Ie(52,0,33),p=Ie(-31,0,-9);await Promise.all([i.prop("old_military_crate",g.x,g.z,{mat:"wood"}),i.prop("old_military_crate",g.x,g.z,{y:.3,rotY:.2,mat:"wood"}),i.prop("ammo_box",g.x+1.2,g.z),i.prop("ammo_box",g.x+1.5,g.z+.4,{rotY:1}),i.prop("old_military_crate",p.x,p.z,{mat:"wood",rotY:1.57}),i.prop("old_military_crate",p.x,p.z,{y:.3,rotY:1.4,mat:"wood"}),i.prop("ammo_box",p.x+1,p.z-1.2),i.prop("propane_tank",20,10,{explosive:!0}),i.prop("propane_tank",-10,-30,{explosive:!0}),i.prop("metal_jerrycan_green",44,22,{explosive:!0}),i.prop("Barrel_01",46,24),i.prop("barrel_03",47,24.6),i.prop("portable_generator",58,-18),i.prop("utility_box_01",-40,55),i.prop("covered_car",-45,58,{rotY:1.6}),i.prop("concrete_road_barrier",-58,50,{rotY:.4}),i.prop("concrete_road_barrier",-50,48,{rotY:-.3}),i.prop("wooden_crate_01",25,45),i.prop("cardboard_box_01",26,44)]),un(i,t,38,30,3,!1),un(i,t,-24,-14,3),e(.7,"Deploying hostiles");let v="yard",_=(x,M,R={})=>Ut(r,x,M,{zone:v,...R});_(-40,45,{patrol:[[-40,45],[-10,45],[-10,30]]}),_(-15,52,{yaw:2.5}),_(0,30,{yaw:1}),_(-30,28,{patrol:[[-30,28],[-30,0]]}),_(10,15,{yaw:-1}),_(-8,3,{patrol:[[-8,3],[20,3]]}),_(-31,-5,{yaw:.3}),_(-26,-11,{yaw:2}),_(-36,-12,{yaw:-2}),_(46,26,{yaw:1.4}),_(56,36,{yaw:2.2}),_(52,22,{}),_(40,40,{patrol:[[40,40],[40,12]]}),_(50,-22,{yaw:1}),_(30,-30,{patrol:[[30,-30],[0,-40],[-30,-40]]}),_(15,-45,{yaw:3}),_(-45,-30,{yaw:1.2});let y=0,w=!1,E=uu(r,Ie(40,.1,-74),[.95,.3,.25]);return{spawn:Ie(-62,0,62),spawnYaw:-Math.PI/4,exposure:1,far:1400,update:(x,M)=>{a.material.uniforms.time.value+=M*.6,x.objIdx>=3&&E(M),o.position.y=Math.sin(x.time*.8)*.12,o.rotation.z=Math.sin(x.time*.6)*.03},objectives:[{type:"interact",text:"Plant C4 on weapons cache ALPHA (warehouse)",pos:g,radius:2,label:"Hold <b>[F]</b> to plant C4",time:3,onDone:()=>{y++,r.hud.toast("CHARGE PLANTED",2)}},{type:"interact",text:"Plant C4 on weapons cache BRAVO (container yard)",pos:p,radius:2,label:"Hold <b>[F]</b> to plant C4",time:3,onDone:()=>{y++,r.hud.toast("CHARGE PLANTED",2)}},{type:"custom",text:"Get clear! Detonation in 15 seconds",waypoint:!1,check:(x,M,R)=>{let A=Math.max(0,15-R.t);return x.hud.setObjectiveCount(`${Math.ceil(A)}s`),Math.floor(R.t)!==R._b&&A>0&&(R._b=Math.floor(R.t),we.play("beep",{vol:.25})),A<=0&&!w&&(w=!0,x.explode(g.clone().add(Ie(0,.5,0)),"frag",!0,2.2),setTimeout(()=>x.explode(p.clone().add(Ie(0,.5,0)),"frag",!0,2.2),600)),w}},{type:"reach",text:"Fight your way to the extraction boat",pos:Ie(40,0,-73),radius:4,onStart:x=>{x.hud.toast("HOSTILE QRF INBOUND",3);let M=[[-65,60],[-60,-40],[65,60],[0,65],[65,-50],[20,-50],[-20,-50]],R=0,A=()=>{if(!(x.completed||x.failed))for(let I=0;I<3;I++){let L=M[R++%M.length],O=Ut(x,L[0]+Math.random()*3,L[1],{state:"combat",zone:"qrf"});O.lastSeen=x.player.pos.clone(),O.lastSeenT=x.time,O.awareness=1}};A(),setTimeout(A,12e3),setTimeout(A,25e3)}}]}}},{id:"midnight",name:"OPERATION MIDNIGHT",location:"Old Town, Zagoria",time:"02:15 Local",night:!0,reverb:"urban",briefing:"A captured Vanguard intelligence officer, Lt. Hayes, is being held in a safehouse at the north end of Old Town. Move up the street under cover of darkness, clear the safehouse and free the hostage. Do NOT shoot the hostage. Escort Hayes back to the extraction vehicle. Night vision (N) and flashlight (T) are available.",objectivesPreview:["Locate the safehouse","Clear the safehouse","Free Lt. Hayes","Escort Hayes to the vehicle"],intro:["OPERATION MIDNIGHT","Old Town, Zagoria",'Sgt. "Ghost" Reyes \u2014 1st Vanguard Battalion',"Day 9, 02:15"],hint:"Night vision: <b>N</b> &nbsp; Flashlight: <b>T</b> &nbsp; Lights give away your position.",ambience:[["crickets",.25],["wind",.15]],async build(r,e){Xr(r,{hdri:"qwantani_night_puresky",night:!0,sunDir:Ie(.3,.7,-.6),sunIntensity:.45,sunColor:10335487,envIntensity:.45,vmEnv:1.6,fogColor:724760,fogDensity:.02,exposure:1.35,hemi:.06,skyColor:3885680,groundColor:1118481,shadowExtent:45,grade:{tint:14213887,saturation:.8,contrast:1.12,vignette:.5}}),r.envExposure=1.35,r.level.tint=5593955;let t=await _o(),i=r.world;i.bounds={minX:-40,maxX:40,minZ:-84,maxZ:40},await yo(r,{tex:"asphalt_02",texSize:5,flat:70,hills:15,mat:"concrete",seed:5}),e(.4,"Building Old Town"),i.box(-9,0,-22,6,.15,124,t.floor,{texSize:2,cast:!1}),i.box(9,0,-22,6,.15,124,t.floor,{texSize:2,cast:!1});let n=[[-50,-32,12],[-26,-12,10],[-10,8,12],[12,32,10]],s=0;for(let u of[-1,1])for(let[f,m]of[[-80,-58],[-56,-36],[-24,-6],[-2,18],[22,38]]){let b=u*22,g=(f+m)/2,p=m-f,v=6.5+s++*37%3,_=s%3===0?t.plaster:t.brick;xs(i,b,g,18,p,v,_,{roofMat:t.concrete,floorMat:t.floor,doors:{[u<0?"e":"w"]:[.5]},windows:{[u<0?"e":"w"]:[.2,.8]},parapet:.8});for(let y=0;y<3;y++){let w=f+p*(.2+y*.3),E=Math.random()<.35,x=new Fe(new Oi(1.1,1.3),new tt({color:1118481,emissive:E?16756838:658706,emissiveIntensity:E?2.2:1,roughness:.2,metalness:.5}));x.position.set(b-u*9.02*1,4.5,w),x.rotation.y=u<0?Math.PI/2:-Math.PI/2,r.scene.add(x)}}i.wall(-40,-84,40,-84,4,.5,t.brick),i.wall(-40,40,40,40,4,.5,t.brick),e(.55,"Fortifying the safehouse"),xs(i,0,-72,16,12,4,t.plaster,{roofMat:t.concrete,floorMat:t.wood,doors:{s:[.5]},windows:{s:[.15,.85],e:[.5],w:[.5]}}),Wi(i,-8,-72,8,-72,4,.25,t.plaster,[{at:.25,w:1.3,y0:0,y1:2.3},{at:.75,w:1.3,y0:0,y1:2.3}]),Wi(i,0,-78,0,-72,4,.25,t.plaster,[]),await Promise.all([i.prop("covered_car",-4,20,{rotY:.05}),i.prop("covered_car",4.5,-12,{rotY:Math.PI+.1}),i.prop("covered_car",-4.2,-40,{rotY:-.1}),i.prop("covered_car",4,-55,{rotY:3}),i.prop("concrete_road_barrier",-2,-60,{rotY:.2}),i.prop("concrete_road_barrier",2.5,-61,{rotY:-.3}),i.prop("metal_jerrycan_green",3,-58,{explosive:!0}),i.prop("propane_tank",-7,-28,{explosive:!0}),i.prop("Barrel_01",8,4),i.prop("barrel_03",-8,-18),i.prop("cardboard_box_01",7,-32),i.prop("wooden_crate_01",-7.5,-50),i.prop("utility_box_01",7.5,10),i.prop("old_tyre",-6,2,{y:.3,rotY:1.2}),i.prop("medical_box",3,-75),i.prop("old_military_crate",-4,-76,{mat:"wood"})]);for(let[u,f,m]of[[3.5,8,.2],[-3.8,-26,2.9]]){let b=new dt,g=t.rust,p=new Fe(new qt(1.8,.7,4.3),g);p.position.y=.6,b.add(p);let v=new Fe(new qt(1.6,.6,2.2),g);v.position.set(0,1.2,-.2),b.add(v),b.position.set(u,0,f),b.rotation.y=m,b.traverse(y=>{y.isMesh&&(y.castShadow=y.receiveShadow=!0)}),r.scene.add(b),b.updateMatrixWorld(!0);let _=new ri().setFromObject(b);i.addCollider(_.min,_.max,"metal")}for(let[u,f]of[[-6.5,30],[6.5,10],[-6.5,-10],[6.5,-34],[-6.5,-54]]){await i.prop("street_lamp_01",u,f,{rotY:u<0?-Math.PI/2:Math.PI/2});let m=new hi(16757611,30,20,2);m.position.set(u+(u<0?1.3:-1.3),3.7,f),r.scene.add(m)}{let u=new hi(16751964,6,10,2);u.position.set(0,3,-75),r.scene.add(u)}let a=Ie(-5.5,0,-64);await i.prop("barrel_03",a.x,a.z);let o=new hi(16742954,12,12,2);o.position.set(a.x,1.6,a.z),r.scene.add(o),e(.7,"Deploying hostiles");let l=(u,f,m={})=>Ut(r,u,f,{zone:"street",...m});l(-4,0,{patrol:[[-4,0],[-4,-20]]}),l(5,-16,{yaw:0}),l(-8,-30,{yaw:.3}),l(8,-40,{patrol:[[8,-40],[8,-20]]}),l(-12,-47,{yaw:-.5}),l(12,-46,{yaw:.5}),l(0,-50,{yaw:0}),l(-2,-62,{yaw:0,zone:"safehouse"}),l(3,-63,{yaw:.2,zone:"safehouse"}),l(-5,-69,{zone:"safehouse",yaw:.4}),l(5,-68,{zone:"safehouse",yaw:-.5}),l(-4,-75,{zone:"safehouse",hold:!0}),l(6,-76,{zone:"safehouse",hold:!0});let c=Ut(r,4,-76.5,{hostage:!0,tint:9076848,yaw:Math.PI});r.hostage=c;let h=Ie(0,0,34),d=uu(r,h);return{spawn:Ie(0,0,32),spawnYaw:0,exposure:1.35,deathText:"You were killed in action.",update:(u,f)=>{o.intensity=10+Math.sin(u.time*13)*2+Math.sin(u.time*7.3)*2,Math.random()<f*20&&u.effects.add.spawn(a.clone().add(Ie((Math.random()-.5)*.4,1,(Math.random()-.5)*.4)),Ie(0,1.5,0),{life:.5,size:.4,grow:-.5,color:[1,.5,.15],alpha:.8}),u.objIdx>=3&&d(f)},objectives:[{type:"reach",text:"Move up the street to the safehouse",pos:Ie(0,0,-56),radius:5},{type:"kill",text:"Clear the safehouse",filter:u=>u.zone==="safehouse"},{type:"interact",text:"Free Lt. Hayes",pos:Ie(4,0,-76.5),radius:1.6,label:"Hold <b>[F]</b> to cut Hayes loose",time:2.5,onDone:u=>{c.follow=!0,u.hud.toast(`HAYES: "About time, Ghost. Let's move."`,3)}},{type:"reach",text:"Escort Lt. Hayes to the extraction vehicle",pos:h,radius:5,cond:u=>c.pos.distanceTo(h)<9,onStart:u=>{u.hud.toast("ENEMY REINFORCEMENTS",3);for(let[f,m]of[[-30,-40],[30,-38],[-30,-8],[30,0],[-30,20]]){let b=Ut(u,f,m,{state:"alert",zone:"reinf"});b.investigate=Ie(0,0,-30)}}}]}}},{id:"laststand",name:"LAST STAND",location:"Al-Qadir Province",time:"18:50 Local",reverb:"outdoor",briefing:"Your extraction helicopter went down. Hold the village until the QRF arrives. Survive five waves of increasingly aggressive hostiles. Resupply ammunition at the crate in the courtyard.",objectivesPreview:["Survive 5 waves","Resupply at the ammo crate"],intro:["LAST STAND","Al-Qadir Province",'Sgt. "Ghost" Reyes \u2014 1st Vanguard Battalion',"Day 4, 18:50"],hint:"Hold <b>[F]</b> at the ammo crate in the courtyard to resupply.",ambience:[["wind",.35]],async build(r,e){Xr(r,{hdri:"belfast_sunset_puresky",sunDir:Ie(.9,.14,-.4),sunIntensity:3.4,sunColor:16751189,envIntensity:.8,fogColor:10780520,fogDensity:.006,exposure:1.05,skyTop:3425902,skyHorizon:15899232,skyGround:5914672,clouds:.4,cloudColor:16763040,skyBright:1.2,hemi:.2,skyColor:16757898,groundColor:5914672,grade:{tint:16772829,saturation:1.05,contrast:1.1}}),r.envExposure=1.05,r.level.tint=12101253;let t=await _o();e(.4,"Building village"),await sm(r,t);let i=Ie(-1,0,4);await r.world.prop("old_military_crate",i.x,i.z,{mat:"wood"});let n={n:0,active:!1,spawned:0,total:5},s=[[-60,55],[60,55],[-60,-70],[60,-70],[0,66],[0,-80],[-62,0],[62,0]],a=()=>{n.n++,n.active=!0;let c=3+n.n*2;r.hud.toast(`WAVE ${n.n} / ${n.total}`,3);for(let h=0;h<c;h++)setTimeout(()=>{if(r.completed||r.failed)return;let d=s[Math.random()*s.length|0],u=Ut(r,d[0]+(Math.random()-.5)*6,d[1]+(Math.random()-.5)*6,{state:"combat",zone:"wave"+n.n,hp:r.diff.hp*(1+n.n*.08)});u.lastSeen=r.player.pos.clone(),u.lastSeenT=r.time,u.awareness=1,u.speedMul=1+n.n*.06},h*900);n.pending=c},o=()=>r.interactables.push({pos:i,radius:2,label:"Hold <b>[F]</b> to resupply ammo &amp; grenades",time:1.5,progress:0,onDone:c=>{c.player.refillAmmo(10),c.player.grenades.lethal=2,c.player.grenades.tactical=2,c.hud.toast("RESUPPLIED",1.5),setTimeout(o,1500)}}),l=0;return{spawn:Ie(0,0,8),spawnYaw:0,exposure:1.05,objectives:[{type:"custom",text:"Survive the assault",waypointPos:null,waypoint:!1,onStart:c=>{o(),setTimeout(a,6e3),l=0},check:(c,h,d)=>{let u=c.enemies.list.filter(f=>f.alive&&f.zone&&f.zone.startsWith("wave")).length;return n.active?(c.hud.setObjectiveCount(`Wave ${n.n}/${n.total} \u2014 ${u+Math.max(0,(n.pending||0)-c.enemies.list.filter(m=>m.zone==="wave"+n.n).length)} hostiles`),c.enemies.list.filter(m=>m.zone==="wave"+n.n).length>=n.pending&&u===0&&(n.active=!1,l=12,n.n<n.total&&c.hud.toast(`WAVE ${n.n} CLEARED \u2014 RESUPPLY`,3))):n.n>0&&n.n<n.total&&(l-=h,c.hud.setObjectiveCount(`Next wave in ${Math.ceil(l)}s`),l<=0&&a()),n.n>=n.total&&!n.active}}]}}}];var Yy=r=>document.querySelector(r),jr={get(r,e){try{let t=localStorage.getItem("iv_"+r);return t?JSON.parse(t):e}catch{return e}},set(r,e){try{localStorage.setItem("iv_"+r,JSON.stringify(e))}catch{}}},Ky={quality:"high",renderScale:1,sensitivity:1,fov:78,invertY:!1,master:.8,music:.5,showFps:!1,autoReload:!0,aimToggle:!1,difficulty:"regular"},mu={primary:"m4a1",secondary:"m9",lethal:"frag",tactical:"flash",perks:["stopping","sleight"],att:{m4a1:{optic:"reddot",muzzle:"none",under:"grip",mag:"std"},ak47:{optic:"iron",muzzle:"none",under:"none",mag:"std"},mp5:{optic:"holo",muzzle:"suppressor",under:"none",mag:"std"},m870:{optic:"iron",muzzle:"none",under:"none",mag:"std"},m249:{optic:"iron",muzzle:"none",under:"none",mag:"std"},bolt762:{muzzle:"none",mag:"std"},m9:{optic:"iron",muzzle:"none",under:"none",mag:"std"},d50:{optic:"iron",muzzle:"none",under:"none",mag:"std"}}};function rm(r){let e=Math.floor(r/60),t=Math.floor(r%60);return`${e}:${String(t).padStart(2,"0")}`}var Wc=class{constructor(){this.root=Yy("#menu"),this.settings={...Ky,...jr.get("settings",{})};let e=jr.get("loadout",null);this.loadout=e?{...mu,...e,att:{...mu.att,...e.att||{}}}:structuredClone(mu),this.progress=jr.get("progress",{}),this.selectedLevel=En[0].id,this.root.addEventListener("mouseover",t=>{t.target.closest("button,.card,.opt")&&we.play("uiHover",{vol:.15,reverb:0})}),this.root.addEventListener("click",t=>{t.target.closest("button,.card,.opt")&&we.play("ui",{vol:.3,reverb:0})})}save(){jr.set("settings",this.settings),jr.set("loadout",this.loadout),jr.set("progress",this.progress)}show(e){this.root.style.display=e?"flex":"none"}screen(e,t=""){this.show(!0),this.root.className=t,this.root.innerHTML=`<div class="bg"></div><div class="screen">${e}</div>`}main(){we.startMusic("menu"),this.screen(`
      <div class="title"><div class="t1">IRON VANGUARD</div><div class="t2">MODERN OPERATIONS</div></div>
      <div class="mainnav">
        <button data-a="campaign" class="primary">CAMPAIGN</button>
        <button data-a="loadoutMain">LOADOUT</button>
        <button data-a="settingsMain">SETTINGS</button>
        <button data-a="controls">CONTROLS</button>
      </div>
      <div class="foot">Built with three.js \u2022 CC0 art from Poly Haven \u2022 Fully synthesized audio</div>`,"main"),this.root.querySelectorAll("[data-a]").forEach(e=>e.onclick=()=>this[e.dataset.a]())}campaign(){let e=En.find(n=>n.id===this.selectedLevel),t=En.map((n,s)=>{let a=this.progress[n.id];return`<div class="card ${n.id===e.id?"sel":""}" data-l="${n.id}"><div class="num">${String(s).padStart(2,"0")}</div><div><div class="cn">${n.name}</div><div class="cs">${n.location}</div></div>${a?`<div class="done">\u2714 ${rm(a.best)}</div>`:""}</div>`}).join(""),i=Object.entries(vo).map(([n,s])=>`<div class="opt ${this.settings.difficulty===n?"sel":""}" data-d="${n}">${s.name}</div>`).join("");this.screen(`
      <div class="hdr"><button class="back">\u2039 BACK</button><h1>CAMPAIGN</h1></div>
      <div class="cols">
        <div class="list">${t}</div>
        <div class="brief">
          <div class="op">${e.name}</div>
          <div class="loc">${e.location} \u2014 ${e.time}</div>
          <p>${e.briefing}</p>
          <ul class="objs">${e.objectivesPreview.map(n=>`<li>${n}</li>`).join("")}</ul>
          <div class="lbl">DIFFICULTY</div><div class="opts">${i}</div>
          <div class="lo">LOADOUT: <b>${Kn[this.loadout.primary].name}</b> + <b>${Kn[this.loadout.secondary].name}</b> <button class="small" data-a="loadout">EDIT</button></div>
          <button class="primary deploy">DEPLOY \u203A</button>
        </div>
      </div>`),this.root.querySelector(".back").onclick=()=>this.main(),this.root.querySelectorAll(".card").forEach(n=>n.onclick=()=>{this.selectedLevel=n.dataset.l,this.campaign()}),this.root.querySelectorAll("[data-d]").forEach(n=>n.onclick=()=>{this.settings.difficulty=n.dataset.d,this.save(),this.campaign()}),this.root.querySelector("[data-a=loadout]").onclick=()=>this.loadoutScreen(()=>this.campaign()),this.root.querySelector(".deploy").onclick=()=>this.onDeploy(this.selectedLevel)}loadoutMain(){this.loadoutScreen(()=>this.main())}loadoutScreen(e){let t=this.loadout,i=c=>{let h=Oc(c,t.att[c]||{},t.perks),d=Math.min(1,h.damage[0]*(h.pellets||1)/130),u=Math.min(1,h.rpm/900),f=Math.min(1,h.range[1]/120),m=Math.min(1,(h.move-.8)/.3),b=Math.max(.05,1-h.recoil[0]/4.5);return[["DAMAGE",d],["FIRE RATE",u],["RANGE",f],["MOBILITY",m],["CONTROL",b]].map(([g,p])=>`<div class="stat"><span>${g}</span><div><i style="width:${Math.round(p*100)}%"></i></div></div>`).join("")+`<div class="stat"><span>MAGAZINE</span><b>${h.mag}</b></div>`},n=c=>Object.entries(Kn).filter(([,h])=>h.slot===c).map(([h,d])=>`<div class="opt w ${t[c]===h?"sel":""}" data-slot="${c}" data-w="${h}"><b>${d.name}</b><small>${d.type}</small></div>`).join(""),s=c=>{let h=jp(c),d=t.att[c]||(t.att[c]={});return Object.entries(h).filter(([,u])=>u.length).map(([u,f])=>`<div class="attrow"><span>${{optic:"OPTIC",muzzle:"MUZZLE",under:"UNDERBARREL",mag:"MAGAZINE"}[u]}</span>${f.map(m=>`<div class="opt a ${(d[u]||f[0])===m?"sel":""}" data-id="${c}" data-cat="${u}" data-att="${m}">${nu[u][m].name}</div>`).join("")}</div>`).join("")},a=(c,h)=>Object.entries(c).map(([d,u])=>`<div class="opt g ${t[h]===d?"sel":""}" data-key="${h}" data-v="${d}">${u.name}</div>`).join(""),o=Object.entries(Xp).map(([c,h])=>`<div class="opt p ${t.perks.includes(c)?"sel":""}" data-perk="${c}"><b>${h.name}</b><small>${h.desc}</small></div>`).join("");this.screen(`
      <div class="hdr"><button class="back">\u2039 BACK</button><h1>LOADOUT</h1></div>
      <div class="lgrid">
        <section><h2>PRIMARY</h2><div class="wl">${n("primary")}</div><div class="desc">${Kn[t.primary].desc}</div><div class="stats">${i(t.primary)}</div><h3>ATTACHMENTS</h3>${s(t.primary)}</section>
        <section><h2>SECONDARY</h2><div class="wl">${n("secondary")}</div><div class="desc">${Kn[t.secondary].desc}</div><div class="stats">${i(t.secondary)}</div><h3>ATTACHMENTS</h3>${s(t.secondary)}</section>
        <section><h2>EQUIPMENT</h2><h3>LETHAL</h3><div class="opts">${a(Wp,"lethal")}</div><h3>TACTICAL</h3><div class="opts">${a(qp,"tactical")}</div><h2 style="margin-top:22px">PERKS <small>(choose 2)</small></h2><div class="perks">${o}</div></section>
      </div>`,"loadout"),this.root.querySelector(".back").onclick=()=>{this.save(),e()};let l=()=>{this.save(),this.loadoutScreen(e)};this.root.querySelectorAll(".opt.w").forEach(c=>c.onclick=()=>{t[c.dataset.slot]=c.dataset.w,l()}),this.root.querySelectorAll(".opt.a").forEach(c=>c.onclick=()=>{var h,d;((h=t.att)[d=c.dataset.id]||(h[d]={}))[c.dataset.cat]=c.dataset.att,l()}),this.root.querySelectorAll(".opt.g").forEach(c=>c.onclick=()=>{t[c.dataset.key]=c.dataset.v,l()}),this.root.querySelectorAll(".opt.p").forEach(c=>c.onclick=()=>{let h=c.dataset.perk;t.perks.includes(h)?t.perks=t.perks.filter(d=>d!==h):(t.perks.push(h),t.perks.length>2&&t.perks.shift()),l()})}settingsScreen(e){let t=this.settings,i=["low","medium","high","ultra"].map(a=>`<div class="opt ${t.quality===a?"sel":""}" data-q="${a}">${a.toUpperCase()}</div>`).join(""),n=(a,o,l,c,h,d=u=>u)=>`<div class="srow"><span>${h}</span><input type="range" min="${o}" max="${l}" step="${c}" value="${t[a]}" data-k="${a}"><b>${d(t[a])}</b></div>`,s=(a,o)=>`<div class="srow"><span>${o}</span><div class="opt tg ${t[a]?"sel":""}" data-t="${a}">${t[a]?"ON":"OFF"}</div></div>`;this.screen(`
      <div class="hdr"><button class="back">\u2039 BACK</button><h1>SETTINGS</h1></div>
      <div class="settings">
        <h2>GRAPHICS</h2>
        <div class="srow"><span>Quality preset</span><div class="opts">${i}</div></div>
        <p class="note">High/Ultra enable 4K shadow maps, ambient occlusion (GTAO), bloom and SMAA. Use Medium/Low on laptops.</p>
        ${n("renderScale",.5,1.5,.05,"Render scale",a=>Math.round(a*100)+"%")}
        ${n("fov",60,100,1,"Field of view")}
        ${s("showFps","Show FPS")}
        <h2>CONTROLS</h2>
        ${n("sensitivity",.2,3,.05,"Mouse sensitivity",a=>(+a).toFixed(2))}
        ${s("invertY","Invert Y")}
        ${s("aimToggle","Aim toggle (tap right-click once to aim; good for touchpads)")}
        ${s("autoReload","Auto reload")}
        <h2>AUDIO</h2>
        ${n("master",0,1,.05,"Master volume",a=>Math.round(a*100))}
        ${n("music",0,1,.05,"Music volume",a=>Math.round(a*100))}
      </div>`,"settingsS"),this.root.querySelector(".back").onclick=()=>{this.save(),this.onSettings?.(),e()},this.root.querySelectorAll("[data-q]").forEach(a=>a.onclick=()=>{t.quality=a.dataset.q,this.save(),this.onSettings?.(),this.settingsScreen(e)}),this.root.querySelectorAll("[data-t]").forEach(a=>a.onclick=()=>{t[a.dataset.t]=!t[a.dataset.t],this.save(),this.onSettings?.(),this.settingsScreen(e)}),this.root.querySelectorAll("input[type=range]").forEach(a=>a.oninput=()=>{t[a.dataset.k]=parseFloat(a.value),a.nextElementSibling.textContent=a.dataset.k==="renderScale"?Math.round(a.value*100)+"%":["master","music"].includes(a.dataset.k)?Math.round(a.value*100):a.dataset.k==="sensitivity"?(+a.value).toFixed(2):a.value,this.save(),this.onSettings?.(!0)})}settingsMain(){this.settingsScreen(()=>this.main())}controls(e){let t=[["W A S D","Move"],["Mouse","Look"],["Left click / E / Enter","Fire (hold for automatic)"],["Right click (hold) / Z (toggle)","Aim down sights"],["Arrow keys","Look around without a mouse"],["Shift","Sprint / hold breath (scoped)"],["Space","Jump"],["C / Ctrl","Crouch (while sprinting: slide)"],["R","Reload"],["1 / 2 / Mouse wheel / X","Switch weapon"],["B","Toggle fire mode"],["G","Lethal grenade"],["Q","Tactical grenade"],["V","Melee"],["F (hold)","Interact / plant / free hostage"],["T","Flashlight"],["N","Night vision (night missions)"],["Esc","Pause"]];this.screen(`<div class="hdr"><button class="back">\u2039 BACK</button><h1>CONTROLS</h1></div>
      <div class="controls">${t.map(([i,n])=>`<div class="crow"><kbd>${i}</kbd><span>${n}</span></div>`).join("")}</div>`),this.root.querySelector(".back").onclick=()=>typeof e=="function"?e():this.main()}loading(e){let t=["Crouching makes you harder to spot and steadies your aim.","Enemies show up on your radar when they fire at you.","Headshots deal double damage or more.","Flashbangs stun everyone who looks at them \u2014 including you.","Suppressors keep you off the radar but reduce range.","Explosive tanks and jerrycans can be shot to detonate them.","Hold Shift while scoped with the sniper rifle to steady your breath.","Sprint then press C to slide into cover."];this.screen(`<div class="loading">
      <div class="op">${e.name}</div><div class="loc">${e.location} \u2014 ${e.time}</div>
      <p class="briefing">${e.briefing}</p>
      <div class="pbar"><div></div></div><div class="pstat">Loading\u2026</div>
      <div class="tip">TIP: ${t[Math.random()*t.length|0]}</div></div>`,"loadingS")}progressBar(e,t){let i=this.root.querySelector(".pbar div");i&&(i.style.width=e*100+"%");let n=this.root.querySelector(".pstat");n&&(n.textContent=t)}readyToStart(e){let t=this.root.querySelector(".pstat");t&&(t.innerHTML='<button class="primary go">CLICK TO BEGIN</button>');let i=this.root.querySelector(".go");i.onclick=e,i.focus()}pause(e){this.screen(`<div class="pause"><h1>PAUSED</h1>
      <button class="primary" data-a="resume">RESUME</button>
      <button data-a="restart">RESTART MISSION</button>
      <button data-a="settings">SETTINGS</button>
      <button data-a="controls">CONTROLS</button>
      <button data-a="quit">QUIT TO MENU</button></div>`,"pauseS"),this.root.querySelectorAll("[data-a]").forEach(t=>t.onclick=()=>{let i=t.dataset.a;i==="settings"?this.settingsScreen(()=>this.pause(e)):i==="controls"?this.controls(()=>this.pause(e)):e[i]()})}results(e,t,i){if(e){let a=this.progress[t.level.id];(!a||t.time<a.best)&&(this.progress[t.level.id]={best:t.time,diff:t.difficulty}),this.save()}let n=En.findIndex(a=>a.id===t.level.id),s=En[n+1];this.screen(`<div class="results ${e?"win":"lose"}">
      <h1>${e?"MISSION COMPLETE":"MISSION FAILED"}</h1>
      <div class="op">${t.level.name}</div>
      ${i?`<p class="reason">${i}</p>`:""}
      <div class="rs">
        <div><b>${rm(t.time)}</b><span>TIME</span></div>
        ${t.targets?`<div><b>${t.targets}</b><span>TARGETS</span></div>`:`<div><b>${t.kills}</b><span>KILLS</span></div>`}
        <div><b>${t.headshots}</b><span>HEADSHOTS</span></div>
        <div><b>${t.acc}%</b><span>ACCURACY</span></div>
        <div><b>${t.hits}/${t.shots}</b><span>HITS / SHOTS</span></div>
        <div><b>${t.difficulty}</b><span>DIFFICULTY</span></div>
      </div>
      <div class="btns">
        ${e&&s?'<button class="primary" data-a="next">NEXT MISSION \u203A</button>':""}
        <button class="${e&&s?"":"primary"}" data-a="retry">${e?"REPLAY":"RETRY"}</button>
        <button data-a="menu">CAMPAIGN</button>
      </div></div>`,"resultsS"),this.root.querySelectorAll("[data-a]").forEach(a=>a.onclick=()=>{a.dataset.a==="next"?(this.selectedLevel=s.id,this.onDeploy(s.id)):a.dataset.a==="retry"?this.onDeploy(t.level.id):this.campaign()})}missionComplete(e){this.results(!0,e)}missionFailed(e,t){this.results(!1,t,e)}};function So(r,e){let t=document.createElement("canvas");t.width=t.height=r;let i=t.getContext("2d");e(i,r);let n=new ji(t);return n.colorSpace=rt,n}var Jy=()=>So(64,(r,e)=>{let t=r.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,0.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=t,r.fillRect(0,0,e,e)}),Zy=()=>So(128,(r,e)=>{for(let t=0;t<40;t++){let i=e/2+(Math.random()-.5)*e*.45,n=e/2+(Math.random()-.5)*e*.45,s=e*(.12+Math.random()*.2),a=r.createRadialGradient(i,n,0,i,n,s);a.addColorStop(0,"rgba(255,255,255,0.18)"),a.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=a,r.fillRect(0,0,e,e)}}),Qy=()=>So(128,(r,e)=>{r.translate(e/2,e/2);let t=r.createRadialGradient(0,0,0,0,0,e/2);t.addColorStop(0,"rgba(255,250,220,1)"),t.addColorStop(.2,"rgba(255,200,90,0.9)"),t.addColorStop(.5,"rgba(255,120,30,0.3)"),t.addColorStop(1,"rgba(255,80,0,0)"),r.fillStyle=t;for(let i=0;i<7;i++)r.rotate(Math.PI*2/7+Math.random()*.3),r.beginPath(),r.moveTo(0,-e*.06),r.lineTo(e*.5*(.6+Math.random()*.4),0),r.lineTo(0,e*.06),r.fill();r.beginPath(),r.arc(0,0,e*.18,0,7),r.fill()}),$y=()=>So(64,(r,e)=>{let t=e/2,i=r.createRadialGradient(t,t,0,t,t,t);i.addColorStop(0,"rgba(10,8,6,1)"),i.addColorStop(.18,"rgba(15,12,10,0.95)"),i.addColorStop(.35,"rgba(40,35,30,0.55)"),i.addColorStop(1,"rgba(60,55,50,0)"),r.fillStyle=i,r.fillRect(0,0,e,e),r.strokeStyle="rgba(20,18,15,0.6)",r.lineWidth=1;for(let n=0;n<6;n++){let s=Math.random()*7;r.beginPath(),r.moveTo(t,t),r.lineTo(t+Math.cos(s)*t*(.5+Math.random()*.4),t+Math.sin(s)*t*(.5+Math.random()*.4)),r.stroke()}}),e_=()=>So(128,(r,e)=>{let t=e/2,i=r.createRadialGradient(t,t,0,t,t,t);i.addColorStop(0,"rgba(5,5,5,0.95)"),i.addColorStop(.5,"rgba(15,12,10,0.6)"),i.addColorStop(1,"rgba(20,20,20,0)"),r.fillStyle=i,r.fillRect(0,0,e,e)}),t_=`
attribute float aSize; attribute vec4 aColor; attribute float aRot; varying vec4 vColor; varying float vRot;
uniform float uScale;
void main(){ vColor=aColor; vRot=aRot; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*uScale/-mv.z; gl_Position=projectionMatrix*mv; }`,i_=`
uniform sampler2D map; varying vec4 vColor; varying float vRot;
void main(){ vec2 p=gl_PointCoord-0.5; float c=cos(vRot), s=sin(vRot); p=vec2(c*p.x-s*p.y, s*p.x+c*p.y)+0.5; vec4 t=texture2D(map,p); gl_FragColor=vec4(vColor.rgb*t.rgb, vColor.a*t.a); if(gl_FragColor.a<0.004) discard; }`,Mo=class{constructor(e,t,i,n){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.size=new Float32Array(t),this.rot=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grow=new Float32Array(t),this.drag=new Float32Array(t),this.grav=new Float32Array(t),this.a0=new Float32Array(t),this.spin=new Float32Array(t),this.base=new Float32Array(t*3),this.fade=new Uint8Array(t);let s=this.geo=new Nt;s.setAttribute("position",new It(this.pos,3).setUsage(qs)),s.setAttribute("aColor",new It(this.col,4).setUsage(qs)),s.setAttribute("aSize",new It(this.size,1).setUsage(qs)),s.setAttribute("aRot",new It(this.rot,1).setUsage(qs)),this.mat=new et({uniforms:{map:{value:i},uScale:{value:600}},vertexShader:t_,fragmentShader:i_,transparent:!0,depthWrite:!1,blending:n?ki:us}),this.points=new Fs(s,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=n?11:10,e.add(this.points)}spawn(e,t,{life:i=1,size:n=.2,color:s=[1,1,1],alpha:a=1,grow:o=0,drag:l=0,grav:c=0,spin:h=0,fade:d=1}={}){let u=this.n<this.max?this.n++:Math.random()*this.max|0;this.pos.set([e.x,e.y,e.z],u*3),this.vel.set([t.x,t.y,t.z],u*3),this.col.set([s[0],s[1],s[2],a],u*4),this.base.set(s,u*3),this.size[u]=n,this.life[u]=i,this.maxLife[u]=i,this.grow[u]=o,this.drag[u]=l,this.grav[u]=c,this.a0[u]=a,this.rot[u]=Math.random()*6.28,this.spin[u]=h*(Math.random()-.5),this.fade[u]=d}update(e){let t=this.n;for(let i=0;i<t;i++){if(this.life[i]-=e,this.life[i]<=0){t--;let a=(o,l)=>{for(let c=0;c<l;c++)o[i*l+c]=o[t*l+c]};a(this.pos,3),a(this.vel,3),a(this.col,4),a(this.base,3);for(let o of[this.size,this.life,this.maxLife,this.grow,this.drag,this.grav,this.a0,this.rot,this.spin,this.fade])o[i]=o[t];i--;continue}let n=Math.max(0,1-this.drag[i]*e);this.vel[i*3]*=n,this.vel[i*3+1]=this.vel[i*3+1]*n-this.grav[i]*e,this.vel[i*3+2]*=n,this.pos[i*3]+=this.vel[i*3]*e,this.pos[i*3+1]+=this.vel[i*3+1]*e,this.pos[i*3+2]+=this.vel[i*3+2]*e,this.pos[i*3+1]<.01&&this.grav[i]>0&&(this.pos[i*3+1]=.01,this.vel[i*3+1]*=-.3,this.vel[i*3]*=.6,this.vel[i*3+2]*=.6),this.size[i]+=this.grow[i]*e,this.rot[i]+=this.spin[i]*e;let s=this.life[i]/this.maxLife[i];this.col[i*4+3]=this.a0[i]*(this.fade[i]===2?Math.min(1,s*3)*Math.min(1,(1-s)*8+.2):s)}this.n=t,this.geo.setDrawRange(0,t);for(let i of["position","aColor","aSize","aRot"])this.geo.attributes[i].needsUpdate=!0}clear(){this.n=0,this.geo.setDrawRange(0,0)}},qc=class{constructor(e,t){this.scene=e,this.vmScene=t,this.tex={soft:Jy(),smoke:Zy(),flash:Qy(),hole:$y(),scorch:e_()},this.add=new Mo(e,1500,this.tex.soft,!0),this.smoke=new Mo(e,900,this.tex.smoke,!1),this.dust=new Mo(e,1200,this.tex.soft,!1),this.lights=[];for(let n=0;n<4;n++){let s=new hi(16756832,0,12,2);s.userData.t=0,e.add(s),this.lights.push(s)}this.bigLight=new hi(16747066,0,40,2),e.add(this.bigLight),this.decalGeo=new Oi(1,1),this.holeMat=new tt({map:this.tex.hole,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,roughness:.9}),this.scorchMat=new tt({map:this.tex.scorch,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,roughness:1}),this.decals=[],this.tracers=[],this.tracerMat=new Jt({transparent:!0,opacity:.85,blending:ki,depthWrite:!1}),this.tracerMat.color.setRGB(4,3.2,2),this.tracerGeo=new ci(.008,.008,1,4,1,!0),this.tracerGeo.rotateX(Math.PI/2),this.flashMat=new os({map:this.tex.flash,blending:ki,depthWrite:!1}),this.flashMat.color.setRGB(5,4,3),this.flashes=[];let i=new ci(.0045,.0045,.03,8);i.rotateZ(Math.PI/2),this.shellMesh=new Hn(i,new tt({color:13213766,metalness:1,roughness:.3}),60),this.shellMesh.instanceMatrix.setUsage(qs),this.shellMesh.frustumCulled=!1,this.shellMesh.count=0,e.add(this.shellMesh),this.shells=[],this.smokeClouds=[],this._m=new De,this._q=new Dt,this._e=new _i,this.shake=0}flashLight(e,t=6,i=16756832,n=.05){let s=this.lights.reduce((a,o)=>a.userData.t<o.userData.t?a:o);s.position.copy(e),s.color.set(i),s.intensity=t,s.userData.t=n,s.userData.i0=t,s.userData.d=n}muzzleWorld(e,t,i=1){let n=new Is(this.flashMat);n.position.copy(e),n.scale.setScalar(.5*i*(.7+Math.random()*.6)),n.material.rotation=Math.random()*6,n.userData.t=.05,this.scene.add(n),this.flashes.push(n),this.flashLight(e,4*i);for(let s=0;s<3;s++)this.smoke.spawn(e,t.clone().multiplyScalar(1+Math.random()).add(new D(0,.3,0)),{life:.8,size:.25,grow:.6,color:[.75,.75,.75],alpha:.12,drag:2})}tracer(e,t,i=350){let n=new Fe(this.tracerGeo,this.tracerMat),s=t.clone().sub(e),a=s.length();s.normalize(),n.position.copy(e),n.lookAt(t),n.scale.set(1,1,Math.min(4,a)),n.userData={dir:s,dist:0,len:a,speed:i},this.scene.add(n),this.tracers.push(n)}impact(e,t,i){let n=t,s=i==="dirt"||i==="sand"||i==="grass"||i==="ground",a=i==="sand"?[.75,.65,.48]:s?[.45,.38,.3]:i==="wood"?[.5,.36,.22]:[.62,.6,.57];for(let o=0;o<(s?10:6);o++){let l=n.clone().multiplyScalar(1.5+Math.random()*3).add(new D((Math.random()-.5)*2,Math.random()*2,(Math.random()-.5)*2));this.dust.spawn(e,l,{life:.5+Math.random()*.6,size:.05+Math.random()*.05,color:a,alpha:.9,grav:9,drag:1})}for(let o=0;o<3;o++)this.smoke.spawn(e.clone().addScaledVector(n,.05),n.clone().multiplyScalar(.6+Math.random()).add(new D(0,.2,0)),{life:1.2+Math.random(),size:.25,grow:.7,color:a,alpha:.35,drag:2.5,spin:1});if(i==="metal"||i==="concrete")for(let o=0;o<(i==="metal"?10:4);o++){let l=n.clone().multiplyScalar(2+Math.random()*4).add(new D((Math.random()-.5)*6,Math.random()*4,(Math.random()-.5)*6));this.add.spawn(e,l,{life:.15+Math.random()*.25,size:.04,color:[1,.7,.3],alpha:1,grav:12})}(!s||Math.random()<.5)&&this.decal(e,n,.07+Math.random()*.03,this.holeMat)}blood(e,t){for(let i=0;i<8;i++){let n=t.clone().multiplyScalar(1+Math.random()*2).add(new D((Math.random()-.5)*1.5,Math.random()*1.2,(Math.random()-.5)*1.5));this.dust.spawn(e,n,{life:.35+Math.random()*.3,size:.06,color:[.35,.02,.02],alpha:.9,grav:9})}this.smoke.spawn(e,t.clone().multiplyScalar(.5),{life:.5,size:.25,grow:.8,color:[.4,.03,.03],alpha:.5,drag:3})}decal(e,t,i,n){let s=new Fe(this.decalGeo,n);if(s.position.copy(e).addScaledVector(t,.004),s.lookAt(e.clone().add(t)),s.rotateZ(Math.random()*6.28),s.scale.setScalar(i),s.receiveShadow=!0,this.scene.add(s),this.decals.push(s),this.decals.length>160){let a=this.decals.shift();this.scene.remove(a)}}explosion(e,t=1){this.bigLight.position.copy(e).add(new D(0,1,0)),this.bigLight.intensity=400*t,this._bigT=.35;for(let n=0;n<40*t;n++){let s=new D(Math.random()-.5,Math.random()*.9+.1,Math.random()-.5).normalize().multiplyScalar(2+Math.random()*6);this.add.spawn(e.clone().add(new D(0,.3,0)),s,{life:.25+Math.random()*.35,size:1.2+Math.random()*1.5,grow:3,color:[1,.55+Math.random()*.2,.2],alpha:.9,drag:4})}for(let n=0;n<50;n++){let s=new D(Math.random()-.5,Math.random(),Math.random()-.5).normalize().multiplyScalar(8+Math.random()*18);this.add.spawn(e.clone().add(new D(0,.3,0)),s,{life:.4+Math.random()*.8,size:.06,color:[1,.7,.35],alpha:1,grav:14,drag:.5})}for(let n=0;n<26*t;n++){let s=new D((Math.random()-.5)*2,Math.random()*2.5+.5,(Math.random()-.5)*2).multiplyScalar(1.5);this.smoke.spawn(e.clone().add(new D(Math.random()-.5,.5+Math.random(),Math.random()-.5)),s,{life:3+Math.random()*3,size:1.5+Math.random(),grow:1.5,color:[.18,.17,.16],alpha:.7,drag:1.2,spin:.6,fade:2})}for(let n=0;n<30;n++){let s=new D(Math.random()-.5,Math.random(),Math.random()-.5).normalize().multiplyScalar(4+Math.random()*8);this.dust.spawn(e.clone().add(new D(0,.2,0)),s,{life:1+Math.random(),size:.08+Math.random()*.06,color:[.3,.26,.22],alpha:1,grav:10})}let i=new Fe(this.decalGeo,this.scorchMat);i.rotation.x=-Math.PI/2,i.position.set(e.x,.02,e.z),i.scale.setScalar(3.5*t),this.scene.add(i),this.decals.push(i)}smokeGrenade(e){let t={pos:e.clone().add(new D(0,1.2,0)),r:.5,t:22,emit:14};this.smokeClouds.push(t)}ejectShell(e,t){this.shells.length>=60&&this.shells.shift(),this.shells.push({p:e.clone(),v:t.clone(),r:new _i(Math.random()*6,Math.random()*6,0),w:new D(Math.random()*20,Math.random()*20,0),t:4,bounced:0})}update(e,t){this.add.update(e),this.smoke.update(e),this.dust.update(e);let i=window.innerHeight*.9;for(let s of[this.add,this.smoke,this.dust])s.mat.uniforms.uScale.value=i/Math.tan(Ei.degToRad(t.fov/2))*.5;for(let s of this.lights)s.userData.t>0?(s.userData.t-=e,s.intensity=Math.max(0,s.userData.i0*(s.userData.t/s.userData.d))):s.intensity=0;this._bigT>0?(this._bigT-=e,this.bigLight.intensity=Math.max(0,this._bigT/.35)*400):this.bigLight.intensity=0;for(let s=this.flashes.length-1;s>=0;s--){let a=this.flashes[s];a.userData.t-=e,a.userData.t<=0&&(this.scene.remove(a),this.flashes.splice(s,1))}for(let s=this.tracers.length-1;s>=0;s--){let a=this.tracers[s],o=a.userData,l=o.speed*e;a.position.addScaledVector(o.dir,l),o.dist+=l,o.dist>o.len&&(this.scene.remove(a),this.tracers.splice(s,1))}let n=0;for(let s=this.shells.length-1;s>=0;s--){let a=this.shells[s];if(a.t-=e,a.t<=0){this.shells.splice(s,1);continue}a.v.y-=9.8*e,a.p.addScaledVector(a.v,e),a.p.y<.005&&(a.p.y=.005,a.v.y<-.5?(a.v.y*=-.35,a.v.x*=.5,a.v.z*=.5,a.w.multiplyScalar(.5),a.bounced++<1&&this.onShellBounce&&this.onShellBounce(a.p)):(a.v.set(0,0,0),a.w.set(0,0,0))),a.r.x+=a.w.x*e,a.r.y+=a.w.y*e,this._q.setFromEuler(a.r),this._m.compose(a.p,this._q,new D(1,1,1)),this.shellMesh.setMatrixAt(n++,this._m)}this.shellMesh.count=n,this.shellMesh.instanceMatrix.needsUpdate=!0;for(let s=this.smokeClouds.length-1;s>=0;s--){let a=this.smokeClouds[s];if(a.t-=e,a.r=Math.min(5,a.r+e*1.5),a.t>4)for(a.acc=(a.acc||0)+e*a.emit;a.acc>1;){a.acc--;let o=Math.random()*6.28,l=Math.random()*a.r*.7;this.smoke.spawn(new D(a.pos.x+Math.cos(o)*l,.4+Math.random()*2.5,a.pos.z+Math.sin(o)*l),new D((Math.random()-.5)*.4,.15,(Math.random()-.5)*.4),{life:6+Math.random()*3,size:3+Math.random()*1.5,grow:.4,color:[.78,.78,.76],alpha:.55,drag:.5,spin:.2,fade:2})}a.t<=0&&this.smokeClouds.splice(s,1)}}smokeBlocks(e,t){for(let i of this.smokeClouds){if(i.t<2)continue;let n=t.clone().sub(e),s=Math.max(0,Math.min(1,i.pos.clone().sub(e).dot(n)/n.lengthSq()));if(e.clone().addScaledVector(n,s).distanceTo(i.pos)<i.r)return!0}return!1}clear(){for(let e of this.decals)this.scene.remove(e);this.decals=[];for(let e of this.tracers)this.scene.remove(e);this.tracers=[];for(let e of this.flashes)this.scene.remove(e);this.flashes=[],this.shells=[],this.smokeClouds=[],this.add.clear(),this.smoke.clear(),this.dust.clear()}};var Pt=(r=0,e=0,t=0)=>new D(r,e,t),zi=(r,e,t,i)=>r+(e-r)*(1-Math.exp(-t*i)),Yr=Pt(),n_=Pt(),am=Pt(),om=Pt(),Xc=class{constructor(e){this.G=e,this.pos=Pt(),this.vel=Pt(),this.yaw=0,this.pitch=0,this.eye=1.65,this.height=1.8,this.onGround=!0,this.crouch=!1,this.sprint=!1,this.slide=0,this.maxHealth=100,this.health=100,this.lastHit=0,this.alive=!0,this.recoil={p:0,y:0},this.shake=0,this.bobT=0,this.stepDist=0,this.weapons=[],this.cur=0,this.switchT=0,this.pendingSwitch=-1,this.ads=0,this.reloadT=0,this.reloading=!1,this.fireCd=0,this.cycleT=0,this.boltPending=!1,this.bloom=0,this.sway=Pt(),this.swayVel=Pt(),this.kick=0,this.kickRot=0,this.grenades={lethal:0,tactical:0},this.throwT=0,this.meleeT=0,this.flash=0,this.damageFlash=0,this.time=0,this.stats={shots:0,hits:0,kills:0,headshots:0,targets:0},this.vm=new dt,e.engine.vmScene.add(this.vm),this.holdBreath=0,this.breath=1,this.nvg=!1,this.flashlightOn=!1}async setLoadout(e){this.loadout=e;let t=e.perks||[];this.perks=t,this.maxHealth=t.includes("jugg")?140:100,this.health=this.maxHealth,this.speedMul=t.includes("lightweight")?1.12:1,this.weapons=[];for(let i of["primary","secondary"]){let n=e[i],s=e.att?.[n]||{},a=Oc(n,s,t),o=await Kp(n,s);o.group.visible=!1,this.vm.add(o.group),this.weapons.push({id:n,st:a,model:o,ammo:a.mag,reserve:a.reserve,mode:0})}this.grenades.lethal=(e.lethal==="c4",2),this.grenades.tactical=e.tactical==="smoke"?1:2,this.cur=0,this.weapons[0].model.group.visible=!0,this.switchT=.5,this.drawT=.5,this.vmFlash||(this.vmFlash=new Is(new os({map:this.G.effects.tex.flash,blending:ki,depthWrite:!1})),this.vmFlash.material.color.setRGB(4,3.4,2.6),this.vmFlash.visible=!1,this.G.engine.vmScene.add(this.vmFlash),this.vmFlashLight=new hi(16755285,0,2,2),this.G.engine.vmScene.add(this.vmFlashLight))}get w(){return this.weapons[this.cur]}spawn(e,t=0){this.pos.copy(e),this.vel.set(0,0,0),this.yaw=t,this.pitch=0,this.alive=!0,this.health=this.maxHealth}damage(e,t){!this.alive||this.G.godMode||(this.health-=e,this.lastHit=this.time,this.damageFlash=Math.min(1,this.damageFlash+e/60),this.shake=Math.min(1,this.shake+e/80),t&&this.G.hud.damageDir(t,this),we.play("hurt",{vol:.6}),this.health<=0&&(this.health=0,this.alive=!1,this.G.onPlayerDeath()))}eyePos(e=Pt()){return e.set(this.pos.x,this.pos.y+this.eye,this.pos.z)}forward(e=Pt()){let t=Math.cos(this.pitch+this.recoil.p);return e.set(-Math.sin(this.yaw+this.recoil.y)*t,Math.sin(this.pitch+this.recoil.p),-Math.cos(this.yaw+this.recoil.y)*t)}update(e,t){let i=this.G;this.time+=e,this.fireHeld=t.mouse.left||t.down("KeyE")||t.down("Enter"),this.firePressed=t.mouse.leftPressed||t.hit("KeyE")||t.hit("Enter"),t.hit("KeyZ")&&(this.adsToggled=!this.adsToggled),t.mouse.rightPressed&&i.settings.aimToggle&&(this.adsToggled=!this.adsToggled),this.aimHeld=this.adsToggled||t.mouse.right&&!i.settings.aimToggle;let n=i.settings;if(!this.alive){this.updateCamera(e);return}let s=this.w,a=.0022*n.sensitivity*(1-this.ads*(1-1/Math.max(1,s.st.zoom*.7)));this.yaw-=t.mouse.dx*a;let o=2.4*(n.sensitivity||1)*(1-this.ads*.6)*e;t.down("ArrowLeft")&&(this.yaw+=o),t.down("ArrowRight")&&(this.yaw-=o),t.down("ArrowUp")&&(this.pitch+=o*.7),t.down("ArrowDown")&&(this.pitch-=o*.7),this.pitch-=t.mouse.dy*a*(n.invertY?-1:1),this.pitch=Math.max(-1.5,Math.min(1.5,this.pitch)),this.swayVel.x+=t.mouse.dx*4e-5,this.swayVel.y+=t.mouse.dy*4e-5;let l=(t.down("KeyW")?1:0)-(t.down("KeyS")?1:0),c=(t.down("KeyD")?1:0)-(t.down("KeyA")?1:0),h=l||c,d=t.down("KeyC")||t.down("ControlLeft");(t.hit("KeyC")||t.hit("ControlLeft"))&&this.sprint&&this.onGround&&this.slide<=0&&(this.slide=.75,this.slideDir=Pt(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),we.play("step_dirt",{vol:.8,rate:.6})),this.crouch=d;let u=this._ceiling!==void 0&&this._ceiling-this.pos.y<1.8;u&&(this.crouch=!0),this.sprint=t.down("ShiftLeft")&&l>0&&!this.crouch&&this.ads<.3&&!(s.st.scope&&this.aimHeld),this.sprint&&this.fireHeld&&(this.sprint=!1),this.sprint&&this.reloading&&this.perks.includes("lightweight");let f=this.crouch?2.3:this.sprint?7:4.5;f*=s.st.move*this.speedMul*(1-this.ads*.45);let m=Math.sin(this.yaw),b=Math.cos(this.yaw);if(Yr.set(-m*l+b*c,0,-b*l-m*c),Yr.lengthSq()>0&&Yr.normalize().multiplyScalar(f),this.slide>0){this.slide-=e,this.crouch=!0;let w=this.slideDir.clone().multiplyScalar(9*Math.max(0,this.slide/.75)+2);Yr.copy(w),this.slide<=0&&(this.slide=0)}let g=this.onGround?12:2.5;this.vel.x=zi(this.vel.x,Yr.x,g,e),this.vel.z=zi(this.vel.z,Yr.z,g,e),t.hit("Space")&&this.onGround&&!u&&(this.vel.y=6.2,this.onGround=!1,this.slide=0),this.vel.y-=20*e,this.pos.x+=this.vel.x*e,this.pos.z+=this.vel.z*e,this.pos.y+=this.vel.y*e;let p=this.crouch?1.15:1.8,v=i.world.collideCylinder(this.pos,.33,p,this.vel);this._ceiling=v.ceiling,this.pos.y+p>v.ceiling&&this.vel.y>0&&(this.vel.y=0,this.pos.y=v.ceiling-p);let _=!this.onGround;this.pos.y<=v.groundY+.001?(_&&this.vel.y<-6&&(we.play("land",{vol:.6}),this.landKick=.08),this.pos.y=v.groundY,this.vel.y=0,this.onGround=!0,this.groundMat=v.groundMat):this.onGround&&this.pos.y-v.groundY<.5&&this.vel.y<=0?(this.pos.y=v.groundY,this.vel.y=0):this.onGround=!1,this.eye=zi(this.eye,this.crouch?this.slide>0?.85:1.05:1.65,10,e);let y=Math.hypot(this.vel.x,this.vel.z);if(this.onGround&&y>.5&&this.slide<=0){this.stepDist+=y*e,this.bobT+=y*e*(this.sprint?1.25:1.6);let w=this.sprint?2.2:this.crouch?1.2:1.7;if(this.stepDist>w){this.stepDist=0;let E=this.surface();we.play("step_"+E,{vol:this.crouch?.15:this.sprint?.5:.32,reverb:.1})}}this.moveAmount=Math.min(1,y/5),this.updateWeapon(e,t),t.hit("KeyG")&&this.throwGrenade("lethal"),t.hit("KeyQ")&&this.throwGrenade("tactical"),t.hit("KeyV")&&this.melee(),t.hit("KeyN")&&i.level?.night&&(this.nvg=!this.nvg,we.play("beep",{vol:.4})),t.hit("KeyT")&&(this.flashlightOn=!this.flashlightOn,we.play("dry",{vol:.4})),this.health<this.maxHealth&&this.time-this.lastHit>4&&(this.health=Math.min(this.maxHealth,this.health+40*e)),this.damageFlash=zi(this.damageFlash,0,2.2,e),this.flash=Math.max(0,this.flash-e*.35),this.updateCamera(e)}surface(){if(this.pos.y>.05){for(let t of this.G.world.colliders)if(Math.abs(t.max.y-this.pos.y)<.05&&this.pos.x>t.min.x&&this.pos.x<t.max.x&&this.pos.z>t.min.z&&this.pos.z<t.max.z)return["metal","wood","concrete"].includes(t.mat)?t.mat:"concrete"}let e=this.G.world.groundMat;return e==="sand"?"sand":e==="grass"?"grass":e==="concrete"||e==="asphalt"?"concrete":"dirt"}updateCamera(e){let t=this.G.engine.camera,i=this.G.settings;this.recoil.p=zi(this.recoil.p,0,5.5,e),this.recoil.y=zi(this.recoil.y,0,5.5,e),this.shake=Math.max(0,this.shake-e*1.5);let n=this.onGround?this.moveAmount*(1-this.ads*.85):0,s=Math.sin(this.bobT*2)*.035*n,a=Math.cos(this.bobT)*.025*n;this.landKick=zi(this.landKick||0,0,8,e),t.position.set(this.pos.x,this.pos.y+this.eye+s-this.landKick,this.pos.z);let o=this.shake*this.shake*.04;t.rotation.order="YXZ",t.rotation.y=this.yaw+this.recoil.y+(Math.random()-.5)*o+a*.15,t.rotation.x=this.pitch+this.recoil.p+(Math.random()-.5)*o,t.rotation.z=(this.slide>0?.06:0)+a*.2;let l=this.w,c=i.fov,h=l?1+(l.st.zoom-1)*this.ads:1,d=(this.sprint?c+6:c)/h;t.fov=zi(t.fov,d,18,e),t.updateProjectionMatrix();let u=this.G.engine.vmCamera;u.fov=zi(u.fov,l?.st.scope?55:55-this.ads*12,18,e),u.updateProjectionMatrix()}updateWeapon(e,t){let i=this.w,n=i.st,s=i.model,a=this.G;if(this.fireCd-=e,this.switchT=Math.max(0,this.switchT-e),this.throwT=Math.max(0,this.throwT-e),this.meleeT=Math.max(0,this.meleeT-e),t.hit("Digit1")&&this.cur!==0||t.hit("Digit2")&&this.cur!==1||t.mouse.wheel||t.hit("KeyX")){let u=t.hit("Digit1")?0:t.hit("Digit2")?1:1-this.cur;u!==this.cur&&this.switchT<=.25&&(this.pendingSwitch=u,this.switchT=.5,this.adsToggled=!1,this.reloading=!1,this.boltPending=!1,we.play("switch",{vol:.5}))}this.pendingSwitch>=0&&this.switchT<=.25&&(i.model.group.visible=!1,this.cur=this.pendingSwitch,this.pendingSwitch=-1,this.w.model.group.visible=!0,this.ads=0);let o=this.switchT>0||this.throwT>0||this.meleeT>0;t.hit("KeyB")&&n.modes.length>1&&(i.mode=(i.mode+1)%n.modes.length,we.play("dry",{vol:.5}),a.hud.toast(n.modes[i.mode].toUpperCase()));let l=this.aimHeld&&!this.sprint&&!o&&!(this.reloading&&n.scope);if(this.ads=Math.max(0,Math.min(1,this.ads+(l?1:-1)*e/n.ads)),n.scope&&this.ads>.95&&t.down("ShiftLeft")&&this.breath>0?(this.holdBreath=1,this.breath=Math.max(0,this.breath-e/4)):(this.holdBreath=0,this.breath=Math.min(1,this.breath+e/5)),t.hit("KeyR")&&!this.reloading&&i.ammo<n.mag&&i.reserve>0&&!o&&this.startReload(),this.reloading){this.reloadT-=e;let u=this.reloadTotal,f=1-this.reloadT/u;if(n.shellReload||(!this._rs1&&f>.2&&(this._rs1=!0,we.play("magOut",{vol:.7})),!this._rs2&&f>.6&&(this._rs2=!0,we.play("magIn",{vol:.8})),!this._rs3&&this.reloadEmpty&&f>.82&&(this._rs3=!0,we.play(s.pistol?"slide":"bolt",{vol:.7}))),this.reloadT<=0)if(n.shellReload)i.ammo++,i.reserve--,we.play("shell",{vol:.7}),i.ammo<n.mag&&i.reserve>0&&!this.fireHeld?(this.reloadT=n.reload,this.reloadTotal=n.reload):(this.reloading=!1,we.play("pump",{vol:.7}),this.fireCd=.3);else{let m=n.mag-i.ammo,b=Math.min(m,i.reserve);i.ammo+=b,i.reserve-=b,this.reloading=!1}n.shellReload&&this.firePressed&&i.ammo>0&&(this.reloading=!1,this.fireCd=.15)}this.boltPending&&this.fireCd<=.25&&!this._boltSound&&(this._boltSound=!0,we.play(n.model==="shotgun"?"pump":"bolt",{vol:.8})),(n.modes[i.mode]==="auto"?this.fireHeld:this.firePressed)&&!o&&!this.reloading&&this.fireCd<=0&&(i.ammo>0?this.fire():this.firePressed&&(we.play("dry",{vol:.6}),i.reserve>0&&this.startReload(),this.fireCd=.25)),i.ammo===0&&i.reserve>0&&!this.reloading&&!o&&this.fireCd<=0&&a.settings.autoReload&&this.startReload(),this.bloom=zi(this.bloom,0,4.5,e),this.updateViewmodel(e)}startReload(){let e=this.w,t=e.st;this.reloading=!0,this.reloadEmpty=e.ammo===0,this.reloadTotal=this.reloadT=t.shellReload?t.reload:this.reloadEmpty?t.reloadEmpty:t.reload,this._rs1=this._rs2=this._rs3=!1,this.ads=Math.min(this.ads,.3)}spread(){let e=this.w.st,t=e.hip*(1-this.ads)+e.adsSpread*this.ads,i=this.moveAmount*(1-this.ads*.7)*2.5+(this.onGround?0:4),n=this.crouch?.8:1;return(t+i+this.bloom)*n*(e.scope&&this.ads>.95?this.holdBreath?.02:.15:1)}fire(){let e=this.w,t=e.st,i=this.G,n=e.model;e.ammo--,!this.G.completed&&!this.G.failed&&this.stats.shots++,this.fireCd=60/t.rpm,(t.bolt||t.model==="shotgun")&&(this.boltPending=!0,this._boltSound=!1,this.fireCd=60/t.rpm);let s=this.eyePos(n_),a=this.forward(Pt()),o=t.pellets||1,l=!1,c=!1,h=!1,d=this.spread()*(t.pellets,1);for(let m=0;m<o;m++){let b=a.clone(),g=Ei.degToRad(t.pellets?t.pelletSpread*(1-this.ads*.3)+d*.3:d)*.5,p=Math.random()*Math.PI*2,v=Math.sqrt(Math.random())*Math.tan(g);am.set(1,0,0).applyEuler(i.engine.camera.rotation),om.set(0,1,0).applyEuler(i.engine.camera.rotation),b.addScaledVector(am,Math.cos(p)*v).addScaledVector(om,Math.sin(p)*v).normalize();let _=i.bullet(s,b,t,!0);_?.enemy?(l=!0,_.head&&(c=!0),_.killed&&(h=!0)):_?.target&&(l=!0),m===0&&(this.stats.shots%3===0||t.pellets)&&i.effects.tracer(this.muzzleWorld(),_?_.point:s.clone().addScaledVector(b,120))}if(l&&(!this.G.completed&&!this.G.failed&&this.stats.hits++,i.hud.hitmarker(c,h),we.play(c?"headshot":"hitmarker",{vol:.5,reverb:0})),we.shot(t.suppressed?"suppressed":t.sound,null,!0),i.alertEnemies(this.pos,t.suppressed?12:70),!t.suppressed){let m=this.muzzleWorld();i.effects.flashLight(m,3,16756832,.05),this.vmFlash.visible=!0,this.vmFlashT=.04,this.vmFlash.material.rotation=Math.random()*6.28,this.vmFlash.scale.setScalar((t.model==="shotgun"||t.scope?.35:.22)*(.8+Math.random()*.4)),this.vmFlashLight.intensity=1.5}t.shellReload;{let m=i.engine.camera,b=Pt(1,0,0).applyQuaternion(m.quaternion),g=Pt(0,1,0).applyQuaternion(m.quaternion),p=s.clone().addScaledVector(a,.35).addScaledVector(b,.15).addScaledVector(g,-.12);!t.bolt&&t.model!=="shotgun"&&i.effects.ejectShell(p,b.multiplyScalar(2+Math.random()).addScaledVector(g,1.5+Math.random()).add(this.vel))}let u=this.ads>.5?.7:1,f=this.crouch?.85:1;this.recoil.p+=Ei.degToRad(t.recoil[0])*u*f*(.8+Math.random()*.4),this.recoil.y+=Ei.degToRad(t.recoil[1])*u*f*(Math.random()-.35),this.pitch+=Ei.degToRad(t.recoil[0])*.35*u*f,this.kick=Math.min(this.kick+t.kick,.12),this.kickRot=Math.min(this.kickRot+t.kick*1.8,.25),this.bloom=Math.min(this.bloom+(t.pellets?0:.6+t.recoil[0]*.4),6),n.slide&&(this.slideKick=1)}muzzleWorld(e=Pt()){let t=this.G.engine.camera,i=this.w.model;i.muzzle.updateWorldMatrix(!0,!1);let n=Pt().setFromMatrixPosition(i.muzzle.matrixWorld);return n.multiplyScalar(1),e.copy(n).applyQuaternion(t.quaternion).add(t.position)}updateViewmodel(e){let t=this.w,i=t.st,n=t.model,s=n.group;this.swayVel.x-=this.sway.x*60*e,this.swayVel.y-=this.sway.y*60*e,this.swayVel.multiplyScalar(Math.exp(-10*e)),this.sway.x+=this.swayVel.x,this.sway.y+=this.swayVel.y,this.sway.x=Math.max(-.06,Math.min(.06,this.sway.x)),this.sway.y=Math.max(-.06,Math.min(.06,this.sway.y)),this.kick=zi(this.kick,0,14,e),this.kickRot=zi(this.kickRot,0,12,e);let a=this.ads,o=1-a,l=n.pistol?Pt(.16,-.17,-.38):Pt(.17,-.19,-.42),c=Pt(0,-n.sightY,n.pistol?-.34:-.3),h=l.lerp(c,a*a*(3-2*a)),d=this.onGround?this.moveAmount:0,u=this.bobT;h.x+=Math.cos(u)*.012*d*(o*.9+.1)-this.sway.x*(o+.15),h.y+=Math.abs(Math.sin(u))*.012*d*(o*.9+.1)+this.sway.y*(o+.15)+Math.sin(this.time*1.5)*.002*o,h.z+=this.kick;let f=this.kickRot*(o*.7+.3),m=0,b=0;this._sp=zi(this._sp||0,this.sprint?1:0,10,e);let g=this._sp;if(h.x+=g*(n.pistol?0:-.05),h.y+=g*-.05,h.z+=g*.03,f+=g*(n.pistol?-.6:-.25),m+=g*(n.pistol?0:.9),b+=g*.25,h.x+=Math.cos(u)*.03*g,h.y+=Math.abs(Math.sin(u))*.02*g,this.reloading&&!i.shellReload){let _=1-this.reloadT/this.reloadTotal,y=Math.sin(Math.min(1,_*1.1)*Math.PI);if(f+=y*.35,b+=y*.6,h.y-=y*.06,h.x-=y*.03,n.mag&&n.magHome){let w=_<.2?0:_<.4?(_-.2)/.2:_<.55?1:_<.68?1-(_-.55)/.13:0;n.mag.position.copy(n.magHome),n.mag.position.y-=w*.35,n.mag.position.z+=w*.05,n.mag.visible=w<.98}}else if(this.reloading&&i.shellReload){let _=1-this.reloadT/this.reloadTotal;b+=.45,f+=.15+Math.sin(_*Math.PI)*.06,h.y-=.03}else n.mag&&n.magHome&&(n.mag.position.copy(n.magHome),n.mag.visible=!0);if(this.boltPending){let _=60/i.rpm,y=1-Math.max(0,this.fireCd)/_,w=y>.25?Math.sin((y-.25)/.75*Math.PI):0;i.bolt&&(b+=w*.35*o,f+=w*.1,h.y-=w*.03*o),n.pump&&(n.pump.position.z=n.pumpHome.z+w*.09),y>=1&&(this.boltPending=!1)}if(n.slide){this.slideKick=zi(this.slideKick||0,0,25,e),n.slide.position.copy(n.slideHome);let _=n.pistol&&i.model==="pistol"?"x":"z";n.slide.position[_]+=(_==="x"?-1:1)*(this.slideKick*.03+(this.w.ammo===0?.03:0))}let p=this.switchT>0?Math.sin(Math.min(1,this.switchT/.5)*Math.PI):0;if(h.y-=p*.3,f-=p*.6,this.throwT>0){let _=Math.sin(this.throwT/.6*Math.PI);h.y-=_*.25,f-=_*.4}if(this.meleeT>0){let _=1-this.meleeT/.5,y=Math.sin(Math.min(1,_*2)*Math.PI);h.z-=y*.18,h.x-=y*.12,m+=y*.5,b-=y*.4}s.position.copy(h),s.rotation.set(f,m,b);let v=i.scope&&this.ads>.92;s.visible=!v,n.laser&&(n.laser.visible=this.ads<.5),this.G.hud.setScope(v,this.holdBreath),v&&!this.holdBreath&&(this.recoil.p+=Math.sin(this.time*1.3)*25e-5,this.recoil.y+=Math.cos(this.time*.9)*2e-4),this.vmFlashT>0&&(this.vmFlashT-=e,n.muzzle.updateWorldMatrix(!0,!1),this.vmFlash.position.setFromMatrixPosition(n.muzzle.matrixWorld),this.vmFlashLight.position.copy(this.vmFlash.position),this.vmFlash.visible=!v,this.vmFlashT<=0&&(this.vmFlash.visible=!1,this.vmFlashLight.intensity=0))}throwGrenade(e){if(this.throwT>0||this.switchT>0||this.grenades[e]<=0)return;this.grenades[e]--,this.throwT=.6,this.reloading=!1,we.play("pin",{vol:.6});let t=e==="lethal"?this.loadout.lethal||"frag":this.loadout.tactical||"flash";setTimeout(()=>{let i=this.forward(Pt()),n=this.eyePos(Pt()).addScaledVector(i,.5),s=i.multiplyScalar(16).add(Pt(0,3.5,0)).add(this.vel);this.G.spawnGrenade(t,n,s,!0)},220)}melee(){this.meleeT>0||this.switchT>0||(this.meleeT=.5,we.play("melee",{vol:.6,rate:1.4}),setTimeout(()=>{let e=this.G.enemies.meleeTarget(this.pos,this.forward(Pt()),2.2);e&&(this.G.damageEnemy(e,150,!1,this.forward(Pt()),e.pos.clone().add(Pt(0,1.3,0))),we.play("hit_flesh",{vol:1}),this.G.hud.hitmarker(!1,!0))},150))}refillAmmo(e=1){for(let t of this.weapons)t.reserve=Math.min(t.st.reserve*1.5,t.reserve+Math.ceil(t.st.mag*e))}};var $i=(r=0,e=0,t=0)=>new D(r,e,t),jc=class{constructor(e,t,i,n,s){this.engine=e,this.input=t,this.hud=i,this.ui=n,this.settings=s,this.state="menu",this.time=0,this.paused=!1,this.grenades=[],this.interactables=[],this.objectives=[],this.objIdx=0,i.G=this}async loadLevel(e,t,i,n=()=>{}){let s=En.find(l=>l.id===e);this.levelDef=s,this.loadout=t,this.diff=vo[i]||vo.regular,this.diffName=i,this.disposeLevel(),n(.05,"Preparing battlefield");let a=this.scene=new an;this.engine.vmScene=new an,this.world=new Gc(a),this.effects=new qc(a,this.engine.vmScene),this.effects.onShellBounce=l=>{l.distanceTo(this.player.pos)<6&&we.play("shell",{pos:l,vol:.25,rate:1.6,reverb:0})},this.enemies=new zc(this),this.player=new Xc(this),this.grenades=[],this.interactables=[],this.objIdx=0,this.time=0,this.levelTime=0,this.failed=!1,this.completed=!1,this.killCount=0,this.godMode=!1,this.level={night:!!s.night,def:s},n(.15,"Loading soldiers"),await this.enemies.init(),n(.3,"Building "+s.name);let o=await s.build(this,n);if(this.level={...this.level,...o},this.objectives=o.objectives,this.world.buildNav(.8),n(.85,"Issuing equipment"),await this.player.setLoadout(t),this.player.spawn(o.spawn,o.spawnYaw||0),this.engine.setScene(a),this.engine.camera.fov=this.settings.fov,this.engine.camera.far=o.far||1500,this.engine.camera.updateProjectionMatrix(),s.night){let l=this.flashlight=new ks(16773853,0,45,.42,.45,1.6);l.castShadow=this.engine.quality!=="low",l.shadow.mapSize.set(1024,1024),l.shadow.bias=-5e-4,a.add(l),a.add(l.target)}else this.flashlight=null;n(.95,"Compiling shaders"),this.player.updateCamera(.016);try{await this.engine.renderer.compileAsync(a,this.engine.camera)}catch{}this.engine.render(.016);try{we.setEnvironment(s.reverb||"outdoor"),we.stopLoops();for(let[l,c]of s.ambience||[])we.loop(l,c)}catch(l){console.warn("audio setup failed",l)}this.startObjective(0),this.state="playing",n(1,"Ready")}disposeLevel(){this.enemies&&this.enemies.clear(),this.scene&&this.scene.traverse(e=>{e.geometry&&!e.isSkinnedMesh&&e.geometry.dispose?.()}),this.scene=null,this.sky=null,this.sun=null}bullet(e,t,i,n){let s=this.world.raycast(e,t,400),a=s?s.dist:400,o=this.enemies.raycast(e,t,a);if(o){let l=o.enemy;if(l.hostage)return this.effects.blood(o.point,t),this.failMission("You shot the hostage."),{point:o.point};let[c,h]=i.range,d=o.dist,u=d<=c?1:d>=h?0:1-(d-c)/(h-c),f=(i.damage[1]+(i.damage[0]-i.damage[1])*u)*(i.dmgMul||1),m=o.part==="head";f*=m?i.head:o.part==="leg"||o.part==="arm"?.8:1;let b=this.damageEnemy(l,f,m,t,o.point);return{enemy:l,head:m,killed:b,point:o.point}}if(s){this.effects.impact(s.point,s.normal,s.mat);let l=s.mat==="metal"?"metal":s.mat==="wood"?"wood":["dirt","sand","grass","ground"].includes(s.mat)?"dirt":"concrete";s.dist<60&&we.play("hit_"+l,{pos:s.point,vol:.45,reverb:.1});let c=s.collider;return c.target&&!c.down&&(this.hitTarget(c),n)?{point:s.point,target:!0}:(c.explosive&&!c.exploded&&(c.hp-=i.damage[0],c.hp<=0&&this.explodeProp(c,n)),{point:s.point})}return null}damageEnemy(e,t,i,n,s){this.effects.blood(s,n),we.play("hit_flesh",{pos:s,vol:.7,reverb:0});let a=e.takeDamage(t,n);return a&&!this.completed&&!this.failed&&(this.killCount++,this.player.stats.kills++,i&&this.player.stats.headshots++,this.hud.killfeed(i?"HEADSHOT":"KILL",i?150:100),we.play("kill",{vol:.35,reverb:0}),this.player.perks.includes("scavenger")&&this.player.refillAmmo(.5),this.onEnemyKilled?.(e)),a}alertEnemies(e,t,i){this.enemies.alert(e,t,i)}hitTarget(e){e.down=!0,this.targetHits=(this.targetHits||0)+1,this.player.stats.targets=(this.player.stats.targets||0)+1,we.play("hit_metal",{pos:e.mesh.position,vol:.9}),this.hud.hitmarker(!1,!0),e.noRay=!0,e.noCollide=!0;let t=e.mesh;t.userData.fall=0,this.fallingTargets=this.fallingTargets||[],this.fallingTargets.push(t),this.onTargetHit?.(e)}explodeProp(e,t=!0){e.exploded=!0,this.world.removeCollider(e),e.mesh&&(e.mesh.visible=!1),this.explode(e.mesh?e.mesh.position.clone():e.min.clone().add(e.max).multiplyScalar(.5),"frag",t,1.3)}spawnGrenade(e,t,i,n){let s=new dt,a=new Fe(new cs(.045,12,10),new tt({color:e==="flash"?5593680:e==="smoke"?7371376:e==="c4"?7038544:3884336,roughness:.6,metalness:.4}));a.scale.set(1,1.25,1),s.add(a);let o=new Fe(new ci(.018,.018,.03,8),new tt({color:7829367,metalness:1,roughness:.3}));o.position.y=.06,s.add(o),s.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),s.position.copy(t),this.scene.add(s),this.grenades.push({type:e,mesh:s,pos:t.clone(),vel:i.clone(),fuse:e==="flash"?1.6:e==="smoke"?1.8:e==="c4"?2.5:3,byPlayer:n,stuck:!1,bounces:0})}updateGrenades(e){for(let t=this.grenades.length-1;t>=0;t--){let i=this.grenades[t];if(i.fuse-=e,!i.stuck){i.vel.y-=20*e*.75;let n=i.vel.length()*e;if(n>0){let s=i.vel.clone().normalize(),a=this.world.raycast(i.pos,s,n+.05);if(a)if(i.pos.copy(a.point).addScaledVector(a.normal,.05),i.type==="c4")i.stuck=!0,i.vel.set(0,0,0);else{let o=a.normal.clone().multiplyScalar(i.vel.dot(a.normal));i.vel.sub(o.multiplyScalar(1.45)).multiplyScalar(.55),i.bounces++<4&&i.vel.length()>1&&we.play("bounce",{pos:i.pos,vol:.5}),a.normal.y>.5&&i.vel.length()<.8&&(i.vel.set(0,0,0),i.stuck=!0)}else i.pos.addScaledVector(i.vel,e)}i.mesh.position.copy(i.pos),i.mesh.rotation.x+=e*8,i.mesh.rotation.z+=e*5}!i.byPlayer&&i.pos.distanceTo(this.player.pos)<9&&this.hud.grenadeIndicator(i.pos),i.fuse<=0&&(this.scene.remove(i.mesh),this.grenades.splice(t,1),this.explode(i.pos,i.type,i.byPlayer))}}explode(e,t,i,n=1){let s=this.player;if(t==="smoke"){this.effects.smokeGrenade(e),we.play("bounce",{pos:e,vol:.6,rate:.5});return}if(t==="flash"){we.play("flashbang",{pos:e,vol:1.2,reverb:.5}),this.effects.flashLight(e.clone().add($i(0,.5,0)),300,16777215,.15);for(let h=0;h<12;h++)this.effects.smoke.spawn(e,$i((Math.random()-.5)*2,Math.random(),(Math.random()-.5)*2),{life:2.5,size:1,grow:1,color:[.85,.85,.85],alpha:.35,drag:1.5,fade:2});this.enemies.flash(e,16);let l=s.eyePos($i()),c=l.distanceTo(e);if(c<18&&this.world.lineOfSight(l,e.clone().add($i(0,.2,0)))){let h=s.forward($i()).dot(e.clone().sub(l).normalize()),d=(1-c/18)*(h>.3?1:.45);s.flash=Math.max(s.flash,d*1.6),we.play("tinnitus",{vol:d*.5,reverb:0}),this.muffleT=d*4}this.alertEnemies(e,30),this.level.onExplosion&&this.level.onExplosion(e,t,i);return}this.effects.explosion(e,n),we.play("explosion",{pos:e,vol:2*n,reverb:.8,lowpass:Math.max(1500,18e3-e.distanceTo(s.pos)*120)});let a=8*n;for(let l of this.enemies.list){if(!l.alive||l.hostage&&!this.hitHostages)continue;let c=l.pos.distanceTo(e);if(c<a&&this.world.lineOfSight(e.clone().add($i(0,.4,0)),l.pos.clone().add($i(0,1,0)))){let h=160*(1-c/a)+20;if(l.hostage){this.failMission("The hostage was killed.");continue}l.takeDamage(h,l.pos.clone().sub(e).normalize())&&i&&!this.completed&&!this.failed&&(this.killCount++,s.stats.kills++,this.hud.killfeed("GRENADE KILL",100),this.onEnemyKilled?.(l))}}let o=s.pos.distanceTo(e);o<a&&this.world.lineOfSight(e.clone().add($i(0,.4,0)),s.eyePos($i()))&&s.damage(120*(1-o/a)*(i?.8:1),e),s.shake=Math.min(1,s.shake+Math.max(0,1-o/30)),o<12&&(this.muffleT=Math.max(this.muffleT||0,(1-o/12)*2.5));for(let l of[...this.world.dynamic])l.explosive&&!l.exploded&&l.min.clone().add(l.max).multiplyScalar(.5).distanceTo(e)<a*.7&&(l.exploded=!0,setTimeout(()=>{l.exploded=!1,this.explodeProp(l,i)},150+Math.random()*250));this.alertEnemies(e,50),this.level.onExplosion&&this.level.onExplosion(e,t,i)}startObjective(e){this.objIdx=e;let t=this.objectives[e];if(!t){this.completeMission();return}t.t=0,t.progress=0,t.onStart?.(this,t),t.type==="interact"&&this.interactables.push({pos:t.pos,radius:t.radius||2,label:t.label||"Hold [F] to interact",time:t.time||2.5,progress:0,obj:t}),this.hud.setObjective(t.text,e>0),e>0&&we.play("objective",{vol:.5,reverb:0,bus:we.music})}updateObjective(e){let t=this.objectives[this.objIdx];if(!t)return;t.t+=e;let i=!1,n=this.player;switch(t.type){case"reach":i=Math.hypot(n.pos.x-t.pos.x,n.pos.z-t.pos.z)<(t.radius||4)&&(!t.cond||t.cond(this));break;case"kill":{let s=this.enemies.list.filter(a=>a.alive&&!a.hostage&&(!t.filter||t.filter(a))).length;t.left=s,i=s===0,this.hud.setObjectiveCount(s>0?`${s} remaining`:"");break}case"interact":i=t.done;break;case"survive":{let s=Math.max(0,t.time-t.t);this.hud.setObjectiveCount(`${Math.ceil(s)}s`),i=s<=0&&(!t.cond||t.cond(this));break}case"custom":i=t.check(this,e,t);break}i&&(t.onComplete?.(this,t),this.hud.setObjectiveCount(""),this.startObjective(this.objIdx+1))}waypoint(){let e=this.objectives[this.objIdx];if(!e||e.waypoint===!1)return null;if(e.pos)return e.pos;if(e.type==="kill"&&e.left!==void 0&&e.left<=3){let t=this.enemies.list.find(i=>i.alive&&!i.hostage&&(!e.filter||e.filter(i)));return t?t.pos.clone().add($i(0,1.9,0)):null}return e.waypointPos||null}updateInteract(e){let t=this.player,i=null;for(let n=this.interactables.length-1;n>=0;n--){let s=this.interactables[n];t.pos.distanceTo(s.pos)<s.radius+.5&&Math.abs(t.pos.y-s.pos.y)<2?(i=s,this.input.down("KeyF")?(s.progress===0&&we.play("beep",{vol:.3}),s.progress+=e/s.time,s.progress>=1&&(this.interactables.splice(n,1),we.play("beep",{vol:.5,rate:1.5}),s.obj?(s.obj.done=!0,s.obj.onDone?.(this)):s.onDone?.(this),i=null)):s.progress=Math.max(0,s.progress-e*2)):s.progress=0}this.hud.setInteract(i?i.label:null,i?i.progress:0)}onPlayerDeath(){this.failed||this.completed||this.failMission(this.level.deathText||"You were killed in action.")}failMission(e){this.failed||this.completed||(this.failed=!0,this.finalStats=this.summary(),we.play("fail",{vol:.6,reverb:0,bus:we.music}),this.player.alive=!1,setTimeout(()=>{this.state="over",this.input.unlock(),this.ui.missionFailed(e,this.finalStats)},2200))}completeMission(){this.completed||this.failed||(this.completed=!0,this.finalStats=this.summary(),we.play("objective",{vol:.7,reverb:0,bus:we.music}),this.hud.setObjective("MISSION COMPLETE",!0),setTimeout(()=>{this.state="over",this.input.unlock(),this.ui.missionComplete(this.finalStats)},2500))}summary(){let e=this.player.stats;return{time:this.levelTime,kills:e.kills,targets:e.targets||0,shots:e.shots,hits:e.hits,headshots:e.headshots,acc:e.shots?Math.min(100,Math.round(e.hits/e.shots*100)):0,level:this.levelDef,difficulty:this.diff.name}}update(e){if(this.state!=="playing"||this.paused)return;this.time+=e,this.levelTime+=e;let t=this.input;if(this.player.update(e,t),this.enemies.update(e),this.updateGrenades(e),!this.failed&&!this.completed&&(this.updateObjective(e),this.updateInteract(e)),this.level.update?.(this,e),this.fallingTargets)for(let o of this.fallingTargets)o.userData.fall<1&&(o.userData.fall=Math.min(1,o.userData.fall+e*4),o.rotation.x=-o.userData.fall*Math.PI/2*.95);let i=this.engine.camera;if(this.effects.update(e,i),im(this),we.setListener(i),this.muffleT=Math.max(0,(this.muffleT||0)-e),we.setMuffle(Math.min(1,this.muffleT/2)),this.flashlight){let o=this.flashlight;o.intensity=this.player.flashlightOn?60:0,o.position.copy(i.position).add($i(.15,-.15,0).applyQuaternion(i.quaternion)),o.target.position.copy(i.position).add(this.player.forward($i()).multiplyScalar(10)),o.target.updateMatrixWorld()}let n=this.engine.grade.uniforms,s=this.player;n.damage.value=Math.max(s.damageFlash*.8,1-s.health/s.maxHealth)*(s.alive,1),n.flash.value=Math.min(1,s.flash),n.aberr.value=s.damageFlash*1.5+s.shake*.6,n.nvg.value=s.nvg?1:0;let a=this.grade||{};n.vignette.value=(a.vignette??.35)+(s.w?.st.scope&&s.ads>.9,0),n.contrast.value=a.contrast??1.06,n.saturation.value=(a.saturation??1)*(s.alive?1:.3),n.tint.value.set(a.tint??16777215),s.nvg?this.engine.renderer.toneMappingExposure=(this.level.exposure||1)*2.2:this.engine.renderer.toneMappingExposure=this.level.exposure||1,this.hud.update(e)}};var cm=document.getElementById("game"),An=new Ac(cm),Rn=new Rc(cm),Zs=new Cc,ei=new Wc;An.setQuality(ei.settings.quality,ei.settings.renderScale);var Mt=new jc(An,Rn,Zs,ei,ei.settings);window.__game=Mt;function hm(r){let e=ei.settings;we.setVolumes(e.master,e.music),(!r||An.quality!==e.quality||An.renderScale!==e.renderScale)&&(An.setQuality(e.quality,e.renderScale),Mt.scene&&!r&&An.setScene(Mt.scene))}ei.onSettings=r=>hm(r);async function gu(r){we.init(),we.stopMusic();let e=En.find(t=>t.id===r);Zs.show(!1),ei.loading(e),Mt.state="loading";try{await Mt.loadLevel(r,structuredClone(ei.loadout),ei.settings.difficulty,(t,i)=>ei.progressBar(t,i))}catch(t){console.error(t),ei.progressBar(0,"Failed to load: "+t.message);return}Mt.paused=!0,ei.readyToStart(()=>{ei.show(!1),Zs.show(!0),Rn.enabled=!0,Rn.lock(),Mt.paused=!1,Zs.playIntro(e.intro),e.hint&&setTimeout(()=>Zs.showHint(e.hint,9),1200)})}ei.onDeploy=gu;function dm(){Mt.state!=="playing"||Mt.paused||(Mt.paused=!0,Rn.enabled=!1,Rn.unlock(),ei.pause({resume:()=>{ei.show(!1),Rn.enabled=!0,Rn.lock(),Mt.paused=!1},restart:()=>gu(Mt.levelDef.id),quit:()=>{Mt.state="menu",Zs.show(!1),we.stopLoops(),ei.campaign()}}))}Rn.onUnlock=()=>{Mt.state==="playing"&&!Mt.failed&&!Mt.completed&&dm()};addEventListener("keydown",r=>{(r.code==="Escape"||r.code==="KeyP")&&Mt.state==="playing"&&!Mt.paused&&dm()});addEventListener("pointerdown",()=>{we.init(),hm(!0),Mt.state==="menu"&&!we._music&&we.startMusic("menu")},{once:!0});var lm=performance.now();function um(r){if(requestAnimationFrame(um),window.__manual)return;let e=Math.min(.05,(r-lm)/1e3);lm=r,Mt.state==="playing"?(Mt.paused||(Mt.update(e),Rn.endFrame()),An.render(e)):Mt.state==="over"&&Mt.scene&&An.render(e)}requestAnimationFrame(um);Zs.show(!1);ei.main();document.getElementById("boot")?.remove();var Kr=new URLSearchParams(location.hash.slice(1));Kr.get("q")&&(ei.settings.quality=Kr.get("q"),An.setQuality(Kr.get("q"),1));Kr.get("play")&&gu(Kr.get("play")).then(()=>document.querySelector(".go")?.click());Kr.get("test")&&(window.__manual=!0,window.__step=(r=1,e=1/30,t=!0)=>{for(let i=0;i<r;i++)Mt.state==="playing"&&!Mt.paused&&(Mt.update(e),Rn.endFrame());return t&&An.render(e),Mt.state});})();

(()=>{var wf=0,Oh=1,Tf=2;var Vs=1,Ef=2,Fr=3,Zi=0,ci=1,Li=2,hi=0,ps=1,Ti=2,Uh=3,Bh=4,Dl=5;var Qi=100,Af=101,Rf=102,Cf=103,Pf=104,Ws=200,Df=201,If=202,Lf=203,kh=204,zh=205,Ga=206,Nf=207,Va=208,Ff=209,Of=210,Uf=211,Bf=212,kf=213,zf=214,al=0,ol=1,ll=2,_r=3,cl=4,hl=5,dl=6,ul=7,Hh=0,Hf=1,Gf=2,Mn=0,Wa=1,qa=2,Xa=3,qs=4,ja=5,Ya=6,Ka=7,Ah="attached",Vf="detached",Gh=300,Xs=301,Or=302,ms=303,Il=304,Qt=1e3,Oi=1001,Mr=1002,Et=1003,Ll=1004;var js=1005;var ft=1006,Ur=1007;var Ni=1008;var Ei=1009,Vh=1010,Wh=1011,Br=1012,Nl=1013,fn=1014,Ai=1015,xt=1016,Fl=1017,Ol=1018,$n=1020,qh=35902,Xh=35899,jh=1021,Yh=1022,Ri=1023,Vn=1026,pn=1027,Ul=1028,Bl=1029,gs=1030,kl=1031;var zl=1033,Ja=33776,Za=33777,Qa=33778,$a=33779,Hl=35840,Gl=35841,Vl=35842,Wl=35843,ql=36196,Xl=37492,jl=37496,Yl=37488,Kl=37489,eo=37490,Jl=37491,Zl=37808,Ql=37809,$l=37810,ec=37811,tc=37812,ic=37813,nc=37814,sc=37815,rc=37816,ac=37817,oc=37818,lc=37819,cc=37820,hc=37821,dc=36492,uc=36494,fc=36495,pc=36283,mc=36284,to=36285,gc=36286,Wf=2200,qf=2201,Xf=2202,Ds=2300,Is=2301,sl=2302,Rh=2303,Rs=2400,Cs=2401,pa=2402,xc=2500,jf=2501,Kh=0,io=1,kr=2,Yf=3200;var no=0,Kf=1,mn="",at="srgb",ei="srgb-linear",ma="linear",ot="srgb";var rl=7680;var Jf=519,Zf=512,Qf=513,$f=514,Jh=515,ep=516,tp=517,Zh=518,Qh=519,$h=35044,Ys=35048;var ed="300 es",Ki=2e3,Sr=2001;function wm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Tm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function wr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ip(){let r=wr("canvas");return r.style.display="block",r}var Fu={},Tr=null;function ga(...r){let e="THREE."+r.shift();Tr?Tr("log",e,...r):console.log(e,...r)}function np(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ie(...r){r=np(r);let e="THREE."+r.shift();if(Tr)Tr("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function ze(...r){r=np(r);let e="THREE."+r.shift();if(Tr)Tr("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Ps(...r){let e=r.join(" ");e in Fu||(Fu[e]=!0,Ie(...r))}function sp(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var rp={[al]:al,[ll]:dl,[cl]:cl,[_r]:hl,[ol]:ol,[dl]:ll,[ul]:ul,[hl]:_r},cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}},_i=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ou=1234567,ua=Math.PI/180,Ls=180/Math.PI;function Sn(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_i[r&255]+_i[r>>8&255]+_i[r>>16&255]+_i[r>>24&255]+"-"+_i[e&255]+_i[e>>8&255]+"-"+_i[e>>16&15|64]+_i[e>>24&255]+"-"+_i[t&63|128]+_i[t>>8&255]+"-"+_i[t>>16&255]+_i[t>>24&255]+_i[i&255]+_i[i>>8&255]+_i[i>>16&255]+_i[i>>24&255]).toLowerCase()}function Je(r,e,t){return Math.max(e,Math.min(t,r))}function td(r,e){return(r%e+e)%e}function Em(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function Am(r,e,t){return r!==e?(t-r)/(e-r):0}function fa(r,e,t){return(1-t)*r+t*e}function Rm(r,e,t,i){return fa(r,e,1-Math.exp(-t*i))}function Cm(r,e=1){return e-Math.abs(td(r,e*2)-e)}function Pm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Dm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Im(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Lm(r,e){return r+Math.random()*(e-r)}function Nm(r){return r*(.5-Math.random())}function Fm(r){r!==void 0&&(Ou=r);let e=Ou+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Om(r){return r*ua}function Um(r){return r*Ls}function Bm(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function km(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function id(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function zm(r,e,t,i,n){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),f=s((i-e)/2),m=a((i-e)/2);switch(n){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*m,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*m,o*c);break;case"ZYZ":r.set(l*m,l*f,o*h,o*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function bc(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function nd(r,e){if(e.constructor===Float32Array)return r;let t=bc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function sd(r,e){if(e.constructor===Float32Array)return r;let t=bc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}var Wt={DEG2RAD:ua,RAD2DEG:Ls,generateUUID:Sn,clamp:Je,euclideanModulo:td,mapLinear:Em,inverseLerp:Am,lerp:fa,damp:Rm,pingpong:Cm,smoothstep:Pm,smootherstep:Dm,randInt:Im,randFloat:Lm,randFloatSpread:Nm,seededRandom:Fm,degToRad:Om,radToDeg:Um,isPowerOfTwo:Bm,ceilPowerOfTwo:km,floorPowerOfTwo:id,setQuaternionFromProperEuler:zm,normalize:sd,denormalize:nd},cd=class cd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cd.prototype.isVector2=!0;var ue=cd,Lt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=s[a+0],f=s[a+1],m=s[a+2],b=s[a+3];if(d!==b||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*b;g<0&&(u=-u,f=-f,m=-m,b=-b,g=-g);let p=1-o;if(g<.9995){let v=Math.acos(g),_=Math.sin(v);p=Math.sin(p*v)/_,o=Math.sin(o*v)/_,l=l*p+u*o,c=c*p+f*o,h=h*p+m*o,d=d*p+b*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+m*o,d=d*p+b*o;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[a],u=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+h*d+l*f-c*u,e[t+1]=l*m+h*u+c*d-o*f,e[t+2]=c*m+h*f+o*u-l*d,e[t+3]=h*m-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(s/2),u=l(i/2),f=l(n/2),m=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},hd=class hd{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-s*n),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=n+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hd.prototype.isVector3=!0;var D=hd,ih=new D,Uu=new Lt,dd=class dd{constructor(e,t,i,n,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],m=i[8],b=n[0],g=n[3],p=n[6],v=n[1],_=n[4],y=n[7],w=n[2],E=n[5],x=n[8];return s[0]=a*b+o*v+l*w,s[3]=a*g+o*_+l*E,s[6]=a*p+o*y+l*x,s[1]=c*b+h*v+d*w,s[4]=c*g+h*_+d*E,s[7]=c*p+h*y+d*x,s[2]=u*b+f*v+m*w,s[5]=u*g+f*_+m*E,s[8]=u*p+f*y+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,m=t*d+i*u+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=d*b,e[1]=(n*c-h*i)*b,e[2]=(o*i-n*a)*b,e[3]=u*b,e[4]=(h*t-n*l)*b,e[5]=(n*s-o*t)*b,e[6]=f*b,e[7]=(i*l-c*t)*b,e[8]=(a*t-i*s)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nh.makeScale(e,t)),this}rotate(e){return Ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nh.makeRotation(-e)),this}translate(e,t){return Ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dd.prototype.isMatrix3=!0;var He=dd,nh=new He,Bu=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ku=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hm(){let r={enabled:!0,workingColorSpace:ei,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ot&&(n.r=Gn(n.r),n.g=Gn(n.g),n.b=Gn(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(n.r=yr(n.r),n.g=yr(n.g),n.b=yr(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===mn?ma:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[ei]:{primaries:e,whitePoint:i,transfer:ma,toXYZ:Bu,fromXYZ:ku,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:at},outputColorSpaceConfig:{drawingBufferColorSpace:at}},[at]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Bu,fromXYZ:ku,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:at}}}),r}var We=Hm();function Gn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function yr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ir,fl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ir===void 0&&(ir=wr("canvas")),ir.width=e.width,ir.height=e.height;let n=ir.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=ir}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Gn(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gn(t[i]/255)*255):t[i]=Gn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gm=0,Er=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Sn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(sh(n[a].image)):s.push(sh(n[a]))}else s=sh(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function sh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var Vm=0,rh=new D,Ft=class r extends cn{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=Oi,n=Oi,s=ft,a=Ni,o=Ri,l=Ei,c=r.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Sn(),this.name="",this.source=new Er(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(rh).x}get height(){return this.source.getSize(rh).y}get depth(){return this.source.getSize(rh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qt:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case Mr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qt:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case Mr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Gh;Ft.DEFAULT_ANISOTROPY=1;var ud=class ud{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],b=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+b)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(f+1)/2,w=(p+1)/2,E=(h+u)/4,x=(d+b)/4,M=(m+g)/4;return _>y&&_>w?_<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(_),n=E/i,s=x/i):y>w?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=E/n,s=M/n):w<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(w),i=x/s,n=M/s),this.set(i,n,s,t),this}let v=Math.sqrt((g-m)*(g-m)+(d-b)*(d-b)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-b)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ud.prototype.isVector4=!0;var lt=ud,pl=class extends cn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ft,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t),this.textures=[];let n=i.count;for(let s=0;s<n;s++)this.textures[s]=new Ft({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Er(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},At=class extends pl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},xa=class extends Ft{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Et,this.minFilter=Et,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ml=class extends Ft{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Et,this.minFilter=Et,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Pl=class Pl{constructor(e,t,i,n,s,a,o,l,c,h,d,u,f,m,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,h,d,u,f,m,b,g)}set(e,t,i,n,s,a,o,l,c,h,d,u,f,m,b,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pl().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/nr.setFromMatrixColumn(e,0).length(),s=1/nr.setFromMatrixColumn(e,1).length(),a=1/nr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,f=a*d,m=o*h,b=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=u-b*c,t[9]=-o*l,t[2]=b-u*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,m=c*h,b=c*d;t[0]=u+b*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=b+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,m=c*h,b=c*d;t[0]=u-b*o,t[4]=-a*d,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=b-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,m=o*h,b=o*d;t[0]=l*h,t[4]=m*c-f,t[8]=u*c+b,t[1]=l*d,t[5]=b*c+u,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,m=o*l,b=o*c;t[0]=l*h,t[4]=b-u*d,t[8]=m*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+m,t[10]=u-b*d}else if(e.order==="XZY"){let u=a*l,f=a*c,m=o*l,b=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+b,t[5]=a*h,t[9]=f*d-m,t[2]=m*d-f,t[6]=o*h,t[10]=b*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wm,e,qm)}lookAt(e,t,i){let n=this.elements;return Gi.subVectors(e,t),Gi.lengthSq()===0&&(Gi.z=1),Gi.normalize(),ns.crossVectors(i,Gi),ns.lengthSq()===0&&(Math.abs(i.z)===1?Gi.x+=1e-4:Gi.z+=1e-4,Gi.normalize(),ns.crossVectors(i,Gi)),ns.normalize(),Po.crossVectors(Gi,ns),n[0]=ns.x,n[4]=Po.x,n[8]=Gi.x,n[1]=ns.y,n[5]=Po.y,n[9]=Gi.y,n[2]=ns.z,n[6]=Po.z,n[10]=Gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],m=i[2],b=i[6],g=i[10],p=i[14],v=i[3],_=i[7],y=i[11],w=i[15],E=n[0],x=n[4],M=n[8],R=n[12],A=n[1],I=n[5],L=n[9],U=n[13],P=n[2],O=n[6],B=n[10],H=n[14],Z=n[3],z=n[7],X=n[11],ee=n[15];return s[0]=a*E+o*A+l*P+c*Z,s[4]=a*x+o*I+l*O+c*z,s[8]=a*M+o*L+l*B+c*X,s[12]=a*R+o*U+l*H+c*ee,s[1]=h*E+d*A+u*P+f*Z,s[5]=h*x+d*I+u*O+f*z,s[9]=h*M+d*L+u*B+f*X,s[13]=h*R+d*U+u*H+f*ee,s[2]=m*E+b*A+g*P+p*Z,s[6]=m*x+b*I+g*O+p*z,s[10]=m*M+b*L+g*B+p*X,s[14]=m*R+b*U+g*H+p*ee,s[3]=v*E+_*A+y*P+w*Z,s[7]=v*x+_*I+y*O+w*z,s[11]=v*M+_*L+y*B+w*X,s[15]=v*R+_*U+y*H+w*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],m=e[3],b=e[7],g=e[11],p=e[15],v=l*f-c*u,_=o*f-c*d,y=o*u-l*d,w=a*f-c*h,E=a*u-l*h,x=a*d-o*h;return t*(b*v-g*_+p*y)-i*(m*v-g*w+p*E)+n*(m*_-b*w+p*x)-s*(m*y-b*E+g*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(s*h-o*l)+n*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],m=e[12],b=e[13],g=e[14],p=e[15],v=t*o-i*a,_=t*l-n*a,y=t*c-s*a,w=i*l-n*o,E=i*c-s*o,x=n*c-s*l,M=h*b-d*m,R=h*g-u*m,A=h*p-f*m,I=d*g-u*b,L=d*p-f*b,U=u*p-f*g,P=v*U-_*L+y*I+w*A-E*R+x*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/P;return e[0]=(o*U-l*L+c*I)*O,e[1]=(n*L-i*U-s*I)*O,e[2]=(b*x-g*E+p*w)*O,e[3]=(u*E-d*x-f*w)*O,e[4]=(l*A-a*U-c*R)*O,e[5]=(t*U-n*A+s*R)*O,e[6]=(g*y-m*x-p*_)*O,e[7]=(h*x-u*y+f*_)*O,e[8]=(a*L-o*A+c*M)*O,e[9]=(i*A-t*L-s*M)*O,e[10]=(m*E-b*y+p*v)*O,e[11]=(d*y-h*E-f*v)*O,e[12]=(o*R-a*I-l*M)*O,e[13]=(t*I-i*R+n*M)*O,e[14]=(b*_-m*w-g*v)*O,e[15]=(h*w-d*_+u*v)*O,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,m=s*d,b=a*h,g=a*d,p=o*d,v=l*c,_=l*h,y=l*d,w=i.x,E=i.y,x=i.z;return n[0]=(1-(b+p))*w,n[1]=(f+y)*w,n[2]=(m-_)*w,n[3]=0,n[4]=(f-y)*E,n[5]=(1-(u+p))*E,n[6]=(g+v)*E,n[7]=0,n[8]=(m+_)*x,n[9]=(g-v)*x,n[10]=(1-(u+b))*x,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=nr.set(n[0],n[1],n[2]).length(),o=nr.set(n[4],n[5],n[6]).length(),l=nr.set(n[8],n[9],n[10]).length();s<0&&(a=-a),an.copy(this);let c=1/a,h=1/o,d=1/l;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,t.setFromRotationMatrix(an),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,n,s,a,o=Ki,l=!1){let c=this.elements,h=2*s/(t-e),d=2*s/(i-n),u=(t+e)/(t-e),f=(i+n)/(i-n),m,b;if(l)m=s/(a-s),b=a*s/(a-s);else if(o===Ki)m=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===Sr)m=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=Ki,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-n),u=-(t+e)/(t-e),f=-(i+n)/(i-n),m,b;if(l)m=1/(a-s),b=a/(a-s);else if(o===Ki)m=-2/(a-s),b=-(a+s)/(a-s);else if(o===Sr)m=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Pl.prototype.isMatrix4=!0;var Le=Pl,nr=new D,an=new Le,Wm=new D(0,0,0),qm=new D(1,1,1),ns=new D,Po=new D,Gi=new D,zu=new Le,Hu=new Lt,Si=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hu.setFromEuler(this),this.setFromQuaternion(Hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";var ba=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xm=0,Gu=new D,sr=new Lt,Nn=new Le,Do=new D,ea=new D,jm=new D,Ym=new Lt,Vu=new D(1,0,0),Wu=new D(0,1,0),qu=new D(0,0,1),Xu={type:"added"},Km={type:"removed"},rr={type:"childadded",child:null},ah={type:"childremoved",child:null},ct=class r extends cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new D,t=new Si,i=new Lt,n=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Le},normalMatrix:{value:new He}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(Vu,e)}rotateY(e){return this.rotateOnAxis(Wu,e)}rotateZ(e){return this.rotateOnAxis(qu,e)}translateOnAxis(e,t){return Gu.copy(e).applyQuaternion(this.quaternion),this.position.add(Gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vu,e)}translateY(e){return this.translateOnAxis(Wu,e)}translateZ(e){return this.translateOnAxis(qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Do.copy(e):Do.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(ea,Do,this.up):Nn.lookAt(Do,ea,this.up),this.quaternion.setFromRotationMatrix(Nn),n&&(Nn.extractRotation(n.matrixWorld),sr.setFromRotationMatrix(Nn),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xu),rr.child=e,this.dispatchEvent(rr),rr.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Km),ah.child=e,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xu),rr.child=e,this.dispatchEvent(rr),rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,jm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,Ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*n,s[13]+=i-s[1]*t-s[5]*i-s[9]*n,s[14]+=n-s[2]*t-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ct.DEFAULT_UP=new D(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tt=class extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jm={type:"move"},Ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,i),p=this._getHandJoint(c,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new tt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Io={h:0,s:0,l:0};function oh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=We.workingColorSpace){return this.r=e,this.g=t,this.b=i,We.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=We.workingColorSpace){if(e=td(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=oh(a,s,e+1/3),this.g=oh(a,s,e),this.b=oh(a,s,e-1/3)}return We.colorSpaceToWorking(this,n),this}setStyle(e,t=at){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){let i=ap[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return We.workingToColorSpace(Mi.copy(this),e),Math.round(Je(Mi.r*255,0,255))*65536+Math.round(Je(Mi.g*255,0,255))*256+Math.round(Je(Mi.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Mi.copy(this),t);let i=Mi.r,n=Mi.g,s=Mi.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Mi.copy(this),t),e.r=Mi.r,e.g=Mi.g,e.b=Mi.b,e}getStyle(e=at){We.workingToColorSpace(Mi.copy(this),e);let t=Mi.r,i=Mi.g,n=Mi.b;return e!==at?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(Io);let i=fa(ss.h,Io.h,t),n=fa(ss.s,Io.s,t),s=fa(ss.l,Io.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mi=new be;be.NAMES=ap;var va=class r{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var hn=class extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},on=new D,Fn=new D,lh=new D,On=new D,ar=new D,or=new D,ju=new D,ch=new D,hh=new D,dh=new D,uh=new lt,fh=new lt,ph=new lt,zn=class r{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),on.subVectors(e,t),n.cross(on);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){on.subVectors(n,t),Fn.subVectors(i,t),lh.subVectors(e,t);let a=on.dot(on),o=on.dot(Fn),l=on.dot(lh),c=Fn.dot(Fn),h=Fn.dot(lh),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,m=(a*h-o*l)*u;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(e,t,i,n,s,a){return uh.setScalar(0),fh.setScalar(0),ph.setScalar(0),uh.fromBufferAttribute(e,t),fh.fromBufferAttribute(e,i),ph.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(uh,s.x),a.addScaledVector(fh,s.y),a.addScaledVector(ph,s.z),a}static isFrontFacing(e,t,i,n){return on.subVectors(i,t),Fn.subVectors(e,t),on.cross(Fn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),on.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;ar.subVectors(n,i),or.subVectors(s,i),ch.subVectors(e,i);let l=ar.dot(ch),c=or.dot(ch);if(l<=0&&c<=0)return t.copy(i);hh.subVectors(e,n);let h=ar.dot(hh),d=or.dot(hh);if(h>=0&&d<=h)return t.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(ar,a);dh.subVectors(e,s);let f=ar.dot(dh),m=or.dot(dh);if(m>=0&&f<=m)return t.copy(s);let b=f*c-l*m;if(b<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(or,o);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return ju.subVectors(s,n),o=(d-h)/(d-h+(f-m)),t.copy(n).addScaledVector(ju,o);let p=1/(g+b+u);return a=b*p,o=u*p,t.copy(i).addScaledVector(ar,a).addScaledVector(or,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$t=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(s,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lo.copy(i.boundingBox)),Lo.applyMatrix4(e.matrixWorld),this.union(Lo)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),No.subVectors(this.max,ta),lr.subVectors(e.a,ta),cr.subVectors(e.b,ta),hr.subVectors(e.c,ta),rs.subVectors(cr,lr),as.subVectors(hr,cr),ws.subVectors(lr,hr);let t=[0,-rs.z,rs.y,0,-as.z,as.y,0,-ws.z,ws.y,rs.z,0,-rs.x,as.z,0,-as.x,ws.z,0,-ws.x,-rs.y,rs.x,0,-as.y,as.x,0,-ws.y,ws.x,0];return!mh(t,lr,cr,hr,No)||(t=[1,0,0,0,1,0,0,0,1],!mh(t,lr,cr,hr,No))?!1:(Fo.crossVectors(rs,as),t=[Fo.x,Fo.y,Fo.z],mh(t,lr,cr,hr,No))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Un=[new D,new D,new D,new D,new D,new D,new D,new D],ln=new D,Lo=new $t,lr=new D,cr=new D,hr=new D,rs=new D,as=new D,ws=new D,ta=new D,No=new D,Fo=new D,Ts=new D;function mh(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Ts.fromArray(r,s);let o=n.x*Math.abs(Ts.x)+n.y*Math.abs(Ts.y)+n.z*Math.abs(Ts.z),l=e.dot(Ts),c=t.dot(Ts),h=i.dot(Ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Hn=Zm();function Zm(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}function Qm(r){Math.abs(r)>65504&&Ie("DataUtils.toHalfFloat(): Value out of range."),r=Je(r,-65504,65504),Hn.floatView[0]=r;let e=Hn.uint32View[0],t=e>>23&511;return Hn.baseTable[t]+((e&8388607)>>Hn.shiftTable[t])}function $m(r){let e=r>>10;return Hn.uint32View[0]=Hn.mantissaTable[Hn.offsetTable[e]+(r&1023)]+Hn.exponentTable[e],Hn.floatView[0]}var cs=class{static toHalfFloat(e){return Qm(e)}static fromHalfFloat(e){return $m(e)}},Zt=new D,Oo=new ue,e0=0,Nt=class extends cn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$h,this.updateRanges=[],this.gpuType=Ai,this.version=0,this._normalizationScale=e!==void 0?bc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Oo.fromBufferAttribute(this,t),Oo.applyMatrix3(e),this.setXY(t,Oo.x,Oo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):nd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):sd(e,this.array)}};var ya=class extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var _a=class extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var rt=class extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}},t0=new $t,ia=new D,gh=new D,Ui=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):t0.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);let t=ia.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ia,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(gh)),this.expandByPoint(ia.copy(e.center).sub(gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},i0=0,Yi=new Le,xh=new ct,dr=new D,Vi=new $t,na=new $t,li=new D,Ot=class r extends cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wm(e)?_a:ya)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Yi.makeRotationFromQuaternion(e),this.applyMatrix4(Yi),this}rotateX(e){return Yi.makeRotationX(e),this.applyMatrix4(Yi),this}rotateY(e){return Yi.makeRotationY(e),this.applyMatrix4(Yi),this}rotateZ(e){return Yi.makeRotationZ(e),this.applyMatrix4(Yi),this}translate(e,t,i){return Yi.makeTranslation(e,t,i),this.applyMatrix4(Yi),this}scale(e,t,i){return Yi.makeScale(e,t,i),this.applyMatrix4(Yi),this}lookAt(e){return xh.lookAt(e),xh.updateMatrix(),this.applyMatrix4(xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rt(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];Vi.setFromBufferAttribute(s),this.morphTargetsRelative?(li.addVectors(this.boundingBox.min,Vi.min),this.boundingBox.expandByPoint(li),li.addVectors(this.boundingBox.max,Vi.max),this.boundingBox.expandByPoint(li)):(this.boundingBox.expandByPoint(Vi.min),this.boundingBox.expandByPoint(Vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(Vi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];na.setFromBufferAttribute(o),this.morphTargetsRelative?(li.addVectors(Vi.min,na.min),Vi.expandByPoint(li),li.addVectors(Vi.max,na.max),Vi.expandByPoint(li)):(Vi.expandByPoint(na.min),Vi.expandByPoint(na.max))}Vi.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)li.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(li));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)li.fromBufferAttribute(o,c),l&&(dr.fromBufferAttribute(e,c),li.add(dr)),n=Math.max(n,i.distanceToSquared(li))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Nt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let R=0;R<i.count;R++)o[R]=new D,l[R]=new D;let h=new D,d=new D,u=new D,f=new ue,m=new ue,b=new ue,g=new D,p=new D;function v(R,A,I){c[R]=c[A]=c[I]=1,h.fromBufferAttribute(i,R),d.fromBufferAttribute(i,A),u.fromBufferAttribute(i,I),f.fromBufferAttribute(s,R),m.fromBufferAttribute(s,A),b.fromBufferAttribute(s,I),d.sub(h),u.sub(h),m.sub(f),b.sub(f);let L=1/(m.x*b.y-b.x*m.y);isFinite(L)&&(g.copy(d).multiplyScalar(b.y).addScaledVector(u,-m.y).multiplyScalar(L),p.copy(u).multiplyScalar(m.x).addScaledVector(d,-b.x).multiplyScalar(L),o[R].add(g),o[A].add(g),o[I].add(g),l[R].add(p),l[A].add(p),l[I].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,A=_.length;R<A;++R){let I=_[R],L=I.start,U=I.count;for(let P=L,O=L+U;P<O;P+=3)v(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let y=new D,w=new D,E=new D,x=new D;function M(R){E.fromBufferAttribute(n,R),x.copy(E);let A=o[R];y.copy(A),y.sub(E.multiplyScalar(E.dot(A))).normalize(),w.crossVectors(x,A);let L=w.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,L)}for(let R=0,A=i.count;R<A;++R)c[R]&&M(R);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new D,s=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let u=0,f=e.count;u<f;u+=3){let m=e.getX(u+0),b=e.getX(u+1),g=e.getX(u+2);n.fromBufferAttribute(t,m),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)li.fromBufferAttribute(e,t),li.normalize(),e.setXYZ(t,li.x,li.y,li.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new Nt(u,h,d)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=e(l,i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ns=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$h,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Yu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Yu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Yu(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=Sn()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}var Di=new D,hs=class r{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n,this._normalizationScale=e!==void 0?bc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Di.fromBufferAttribute(this,t),Di.applyMatrix4(e),this.setXYZ(t,Di.x,Di.y,Di.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Di.fromBufferAttribute(this,t),Di.applyNormalMatrix(e),this.setXYZ(t,Di.x,Di.y,Di.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Di.fromBufferAttribute(this,t),Di.transformDirection(e),this.setXYZ(t,Di.x,Di.y,Di.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ga("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ga("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):nd(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):sd(e,this.data.array)}},bh=new D,n0=new D,s0=new He,Wi=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=bh.subVectors(i,t).cross(n0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(bh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||s0.getNormalMatrix(e),n=this.coplanarPoint(bh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},r0=0,wi=class extends cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=ps,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kh,this.blendDst=zh,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rl,this.stencilZFail=rl,this.stencilZPass=rl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Wi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ue().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ue().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},vn=class extends wi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ur,sa=new D,fr=new D,pr=new D,mr=new ue,ra=new ue,op=new Le,Uo=new D,aa=new D,Bo=new D,Ku=new ue,vh=new ue,Ju=new ue,Wn=class extends ct{constructor(e=new vn){if(super(),this.isSprite=!0,this.type="Sprite",ur===void 0){ur=new Ot;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ns(t,5);ur.setIndex([0,1,2,0,2,3]),ur.setAttribute("position",new hs(i,3,0,!1)),ur.setAttribute("uv",new hs(i,2,3,!1))}this.geometry=ur,this.material=e,this.center=new ue(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fr.setFromMatrixScale(this.matrixWorld),op.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),pr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fr.multiplyScalar(-pr.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;ko(Uo.set(-.5,-.5,0),pr,a,fr,n,s),ko(aa.set(.5,-.5,0),pr,a,fr,n,s),ko(Bo.set(.5,.5,0),pr,a,fr,n,s),Ku.set(0,0),vh.set(1,0),Ju.set(1,1);let o=e.ray.intersectTriangle(Uo,aa,Bo,!1,sa);if(o===null&&(ko(aa.set(-.5,.5,0),pr,a,fr,n,s),vh.set(0,1),o=e.ray.intersectTriangle(Uo,Bo,aa,!1,sa),o===null))return;let l=e.ray.origin.distanceTo(sa);l<e.near||l>e.far||t.push({distance:l,point:sa.clone(),uv:zn.getInterpolation(sa,Uo,aa,Bo,Ku,vh,Ju,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function ko(r,e,t,i,n,s){mr.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(ra.x=s*mr.x-n*mr.y,ra.y=n*mr.x+s*mr.y):ra.copy(mr),r.copy(e),r.x+=ra.x,r.y+=ra.y,r.applyMatrix4(op)}var Bn=new D,yh=new D,zo=new D,Ho=new D,Fs=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){yh.copy(e).add(t).multiplyScalar(.5),zo.copy(t).sub(e).normalize(),Ho.copy(this.origin).sub(yh);let s=e.distanceTo(t)*.5,a=-this.direction.dot(zo),o=Ho.dot(this.direction),l=-Ho.dot(zo),c=Ho.lengthSq(),h=Math.abs(1-a*a),d,u,f,m;if(h>0)if(d=a*l-o,u=a*o-l,m=s*h,d>=0)if(u>=-m)if(u<=m){let b=1/h;d*=b,u*=b,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(yh).addScaledVector(zo,u),f}intersectSphere(e,t){if(e.radius<0)return null;Bn.subVectors(e.center,this.origin);let i=Bn.dot(this.direction),n=Bn.dot(Bn)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,i,n,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,m=t.x-a.x,b=t.y-a.y,g=t.z-a.z,p=i.x-a.x,v=i.y-a.y,_=i.z-a.z,y=Math.abs(l),w=Math.abs(c),E=Math.abs(h),x,M,R,A,I,L,U,P,O,B,H,Z;if(y>=w&&y>=E?(R=l,L=d,O=m,Z=p,l>=0?(x=c,M=h,A=u,I=f,U=b,P=g,B=v,H=_):(x=h,M=c,A=f,I=u,U=g,P=b,B=_,H=v)):w>=E?(R=c,L=u,O=b,Z=v,c>=0?(x=h,M=l,A=f,I=d,U=g,P=m,B=_,H=p):(x=l,M=h,A=d,I=f,U=m,P=g,B=p,H=_)):(R=h,L=f,O=g,Z=_,h>=0?(x=l,M=c,A=d,I=u,U=m,P=b,B=p,H=v):(x=c,M=l,A=u,I=d,U=b,P=m,B=v,H=p)),R===0)return null;let z=x/R,X=M/R,ee=1/R,pe=A-z*L,Ce=I-X*L,K=U-z*O,me=P-X*O,we=B-z*Z,Pe=H-X*Z,he=we*me-Pe*K,Ue=pe*Pe-Ce*we,mt=K*Ce-me*pe;if(n){if(he<0||Ue<0||mt<0)return null}else if((he<0||Ue<0||mt<0)&&(he>0||Ue>0||mt>0))return null;let Be=he+Ue+mt;if(Be===0)return null;let nt=ee*(he*L+Ue*O+mt*Z);return(Be>0?nt<0:nt>0)?null:this.at(nt/Be,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ti=class extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zu=new Le,Es=new Fs,Go=new Ui,Qu=new D,Vo=new D,Wo=new D,qo=new D,_h=new D,Xo=new D,$u=new D,jo=new D,Te=class extends ct{constructor(e=new Ot,t=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){Xo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(_h.fromBufferAttribute(d,e),a?Xo.addScaledVector(_h,h):Xo.addScaledVector(_h.sub(t),h))}t.add(Xo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Go.copy(i.boundingSphere),Go.applyMatrix4(s),Es.copy(e.ray).recast(e.near),!(Go.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Go,Qu)===null||Es.origin.distanceToSquared(Qu)>(e.far-e.near)**2))&&(Zu.copy(s).invert(),Es.copy(e.ray).applyMatrix4(Zu),!(i.boundingBox!==null&&Es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=u.length;m<b;m++){let g=u[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,w=_;y<w;y+=3){let E=o.getX(y),x=o.getX(y+1),M=o.getX(y+2);n=Yo(this,p,e,i,c,h,d,E,x,M),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{let m=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let v=o.getX(g),_=o.getX(g+1),y=o.getX(g+2);n=Yo(this,a,e,i,c,h,d,v,_,y),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,b=u.length;m<b;m++){let g=u[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,w=_;y<w;y+=3){let E=y,x=y+1,M=y+2;n=Yo(this,p,e,i,c,h,d,E,x,M),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{let m=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let v=g,_=g+1,y=g+2;n=Yo(this,a,e,i,c,h,d,v,_,y),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}}};function a0(r,e,t,i,n,s,a,o){let l;if(e.side===ci?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,e.side===Zi,o),l===null)return null;jo.copy(o),jo.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(jo);return c<t.near||c>t.far?null:{distance:c,point:jo.clone(),object:r}}function Yo(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,Vo),r.getVertexPosition(l,Wo),r.getVertexPosition(c,qo);let h=a0(r,e,t,i,Vo,Wo,qo,$u);if(h){let d=new D;zn.getBarycoord($u,Vo,Wo,qo,d),n&&(h.uv=zn.getInterpolatedAttribute(n,o,l,c,d,new ue)),s&&(h.uv1=zn.getInterpolatedAttribute(s,o,l,c,d,new ue)),a&&(h.normal=zn.getInterpolatedAttribute(a,o,l,c,d,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};zn.getNormal(Vo,Wo,qo,u.normal),h.face=u,h.barycoord=d}return h}var oa=new lt,ef=new lt,tf=new lt,o0=new lt,nf=new Le,Ko=new D,Mh=new Ui,sf=new Le,Sh=new Fs,Ma=class extends Te{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ah,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $t),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ko),this.boundingBox.expandByPoint(Ko)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ui),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ko),this.boundingSphere.expandByPoint(Ko)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mh.copy(this.boundingSphere),Mh.applyMatrix4(n),e.ray.intersectsSphere(Mh)!==!1&&(sf.copy(n).invert(),Sh.copy(e.ray).applyMatrix4(sf),!(this.boundingBox!==null&&Sh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Sh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ah?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;ef.fromBufferAttribute(n.attributes.skinIndex,e),tf.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(oa.copy(t),t.set(0,0,0,0)):(oa.set(t.x,t.y,t.z,1),t.set(0,0,0)),oa.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=tf.getComponent(s);if(a!==0){let o=ef.getComponent(s);nf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(o0.copy(oa).applyMatrix4(nf),a)}}return t.isVector4&&(t.w=oa.w),t.applyMatrix4(this.bindMatrixInverse)}},Rr=class extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}},Bi=class extends Ft{constructor(e=null,t=1,i=1,n,s,a,o,l,c=Et,h=Et,d,u){super(null,a,o,l,c,h,n,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},rf=new Le,l0=new Le,Sa=class r{constructor(e=[],t=[]){this.uuid=Sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Le;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:l0;rf.multiplyMatrices(o,t[s]),rf.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Bi(t,e,e,Ri,Ai);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let s=e.bones[i],a=t[s];a===void 0&&(Ie("Skeleton: No bone found with UUID:",s),a=new Rr),this.bones.push(a),this.boneInverses.push(new Le().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){let a=t[n];e.bones.push(a.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}},qn=class extends Nt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},gr=new Le,af=new Le,Jo=[],of=new $t,c0=new Le,la=new Te,ca=new Ui,Xn=class extends Te{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,c0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gr),of.copy(e.boundingBox).applyMatrix4(gr),this.boundingBox.union(of)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gr),ca.copy(e.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(la.geometry=this.geometry,la.material=this.material,la.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(i),e.ray.intersectsSphere(ca)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,gr),af.multiplyMatrices(i,gr),la.matrixWorld=af,la.raycast(e,Jo);for(let a=0,o=Jo.length;a<o;a++){let l=Jo[a];l.instanceId=s,l.object=this,t.push(l)}Jo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new qn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Bi(new Float32Array(n*this.count),n,this.count,Ul,Ai));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},As=new Ui,h0=new ue(.5,.5),Zo=new D,ds=class{constructor(e=new Wi,t=new Wi,i=new Wi,n=new Wi,s=new Wi,a=new Wi){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ki,i=!1){let n=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],m=s[8],b=s[9],g=s[10],p=s[11],v=s[12],_=s[13],y=s[14],w=s[15];if(n[0].setComponents(c-a,f-h,p-m,w-v).normalize(),n[1].setComponents(c+a,f+h,p+m,w+v).normalize(),n[2].setComponents(c+o,f+d,p+b,w+_).normalize(),n[3].setComponents(c-o,f-d,p-b,w-_).normalize(),i)n[4].setComponents(l,u,g,y).normalize(),n[5].setComponents(c-l,f-u,p-g,w-y).normalize();else if(n[4].setComponents(c-l,f-u,p-g,w-y).normalize(),t===Ki)n[5].setComponents(c+l,f+u,p+g,w+y).normalize();else if(t===Sr)n[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){As.center.set(0,0,0);let t=h0.distanceTo(e.center);return As.radius=.7071067811865476+t,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Zo.x=n.normal.x>0?e.max.x:e.min.x,Zo.y=n.normal.y>0?e.max.y:e.min.y,Zo.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Zo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},lf=new Le,gl=class r{constructor(){this.coordinateSystem=Ki,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let s=t[n];lf.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[n]===void 0&&(i[n]=new ds),i[n].setFromProjectionMatrix(lf,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new ds),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new r().copy(this)}};var Cr=class extends wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xl=new D,bl=new D,cf=new Le,ha=new Fs,Qo=new Ui,wh=new D,hf=new D,Os=class extends ct{constructor(e=new Ot,t=new Cr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)xl.fromBufferAttribute(t,n-1),bl.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=xl.distanceTo(bl);e.setAttribute("lineDistance",new rt(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(n),Qo.radius+=s,e.ray.intersectsSphere(Qo)===!1)return;cf.copy(n).invert(),ha.copy(e.ray).applyMatrix4(cf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=c){let p=h.getX(b),v=h.getX(b+1),_=$o(this,e,ha,l,p,v,b);_&&t.push(_)}if(this.isLineLoop){let b=h.getX(m-1),g=h.getX(f),p=$o(this,e,ha,l,b,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=c){let p=$o(this,e,ha,l,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){let b=$o(this,e,ha,l,m-1,f,m-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function $o(r,e,t,i,n,s,a){let o=r.geometry.attributes.position;if(xl.fromBufferAttribute(o,n),bl.fromBufferAttribute(o,s),t.distanceSqToSegment(xl,bl,wh,hf)>i)return;wh.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(wh);if(!(c<e.near||c>e.far))return{distance:c,point:hf.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var df=new D,uf=new D,wa=class extends Os{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)df.fromBufferAttribute(t,n),uf.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+df.distanceTo(uf);e.setAttribute("lineDistance",new rt(i,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ta=class extends Os{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Pr=class extends wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ff=new Le,Ch=new Fs,el=new Ui,tl=new D,Us=class extends ct{constructor(e=new Ot,t=new Pr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(n),el.radius+=s,e.ray.intersectsSphere(el)===!1)return;ff.copy(n).invert(),Ch.copy(e.ray).applyMatrix4(ff);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=u,b=f;m<b;m++){let g=c.getX(m);tl.fromBufferAttribute(d,g),pf(tl,g,l,n,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,b=f;m<b;m++)tl.fromBufferAttribute(d,m),pf(tl,m,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function pf(r,e,t,i,n,s,a){let o=Ch.distanceSqToPoint(r);if(o<t){let l=new D;Ch.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ea=class extends Ft{constructor(e=[],t=Xs,i,n,s,a,o,l,c,h){super(e,t,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ji=class extends Ft{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var dn=class extends Ft{constructor(e,t,i=fn,n,s,a,o=Et,l=Et,c,h=Vn,d=1){if(h!==Vn&&h!==pn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Er(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Aa=class extends dn{constructor(e,t=fn,i=Xs,n,s,a=Et,o=Et,l,c=Vn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,n,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ra=class extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Rt=class r extends Ot{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,n,a,2),m("x","z","y",1,-1,e,i,-t,n,a,3),m("x","y","z",1,-1,e,t,i,n,s,4),m("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(d,2));function m(b,g,p,v,_,y,w,E,x,M,R){let A=y/x,I=w/M,L=y/2,U=w/2,P=E/2,O=x+1,B=M+1,H=0,Z=0,z=new D;for(let X=0;X<B;X++){let ee=X*I-U;for(let pe=0;pe<O;pe++){let Ce=pe*A-L;z[b]=Ce*v,z[g]=ee*_,z[p]=P,c.push(z.x,z.y,z.z),z[b]=0,z[g]=0,z[p]=E>0?1:-1,h.push(z.x,z.y,z.z),d.push(pe/x),d.push(1-X/M),H+=1}}for(let X=0;X<M;X++)for(let ee=0;ee<x;ee++){let pe=u+ee+O*X,Ce=u+ee+O*(X+1),K=u+(ee+1)+O*(X+1),me=u+(ee+1)+O*X;l.push(pe,Ce,me),l.push(Ce,K,me),Z+=6}o.addGroup(f,Z,R),f+=Z,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ca=class r extends Ot{constructor(e=1,t=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,m=i*2+s,b=n+1,g=new D,p=new D;for(let v=0;v<=m;v++){let _=0,y=0,w=0,E=0;if(v<=i){let R=v/i,A=R*Math.PI/2;y=-h-e*Math.cos(A),w=e*Math.sin(A),E=-e*Math.cos(A),_=R*d}else if(v<=i+s){let R=(v-i)/s;y=-h+R*t,w=e,E=0,_=d+R*u}else{let R=(v-i-s)/i,A=R*Math.PI/2;y=h+e*Math.sin(A),w=e*Math.cos(A),E=e*Math.sin(A),_=d+u+R*d}let x=Math.max(0,Math.min(1,_/f)),M=0;v===0?M=.5/n:v===m&&(M=-.5/n);for(let R=0;R<=n;R++){let A=R/n,I=A*Math.PI*2,L=Math.sin(I),U=Math.cos(I);p.x=-w*U,p.y=y,p.z=w*L,o.push(p.x,p.y,p.z),g.set(-w*U,E,w*L),g.normalize(),l.push(g.x,g.y,g.z),c.push(A+M,x)}if(v>0){let R=(v-1)*b;for(let A=0;A<n;A++){let I=R+A,L=R+A+1,U=v*b+A,P=v*b+A+1;a.push(I,L,U),a.push(L,P,U)}}}this.setIndex(a),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Pa=class r extends Ot{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new D,h=new ue;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(o,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Yt=class r extends Ot{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],d=[],u=[],f=[],m=0,b=[],g=i/2,p=0;v(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(f,2));function v(){let y=new D,w=new D,E=0,x=(t-e)/i;for(let M=0;M<=s;M++){let R=[],A=M/s,I=A*(t-e)+e;for(let L=0;L<=n;L++){let U=L/n,P=U*l+o,O=Math.sin(P),B=Math.cos(P);w.x=I*O,w.y=-A*i+g,w.z=I*B,d.push(w.x,w.y,w.z),y.set(O,x,B).normalize(),u.push(y.x,y.y,y.z),f.push(U,1-A),R.push(m++)}b.push(R)}for(let M=0;M<n;M++)for(let R=0;R<s;R++){let A=b[R][M],I=b[R+1][M],L=b[R+1][M+1],U=b[R][M+1];(e>0||R!==0)&&(h.push(A,I,U),E+=3),(t>0||R!==s-1)&&(h.push(I,L,U),E+=3)}c.addGroup(p,E,0),p+=E}function _(y){let w=m,E=new ue,x=new D,M=0,R=y===!0?e:t,A=y===!0?1:-1;for(let L=1;L<=n;L++)d.push(0,g*A,0),u.push(0,A,0),f.push(.5,.5),m++;let I=m;for(let L=0;L<=n;L++){let P=L/n*l+o,O=Math.cos(P),B=Math.sin(P);x.x=R*B,x.y=g*A,x.z=R*O,d.push(x.x,x.y,x.z),u.push(0,A,0),E.x=O*.5+.5,E.y=B*.5*A+.5,f.push(E.x,E.y),m++}for(let L=0;L<n;L++){let U=w+L,P=I+L;y===!0?h.push(P,P+1,U):h.push(P+1,P,U),M+=3}c.addGroup(p,M,y===!0?1:2),p+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bs=class r extends Yt{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ki=class r extends Ot{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=e/o,u=t/l,f=[],m=[],b=[],g=[];for(let p=0;p<h;p++){let v=p*u-a;for(let _=0;_<c;_++){let y=_*d-s;m.push(y,-v,0),b.push(0,0,1),g.push(_/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let _=v+c*p,y=v+c*(p+1),w=v+1+c*(p+1),E=v+1+c*p;f.push(_,y,E),f.push(y,w,E)}this.setIndex(f),this.setAttribute("position",new rt(m,3)),this.setAttribute("normal",new rt(b,3)),this.setAttribute("uv",new rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var yn=class r extends Ot{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new D,u=new D,f=[],m=[],b=[],g=[];for(let p=0;p<=i;p++){let v=[],_=p/i,y=a+_*o,w=e*Math.cos(y),E=Math.sqrt(e*e-w*w),x=0;p===0&&a===0?x=.5/t:p===i&&l===Math.PI&&(x=-.5/t);for(let M=0;M<=t;M++){let R=M/t,A=n+R*s;d.x=-E*Math.cos(A),d.y=w,d.z=E*Math.sin(A),m.push(d.x,d.y,d.z),u.copy(d).normalize(),b.push(u.x,u.y,u.z),g.push(R+x,1-_),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){let _=h[p][v+1],y=h[p][v],w=h[p+1][v],E=h[p+1][v+1];(p!==0||a>0)&&f.push(_,y,E),(p!==i-1||l<Math.PI)&&f.push(y,w,E)}this.setIndex(f),this.setAttribute("position",new rt(m,3)),this.setAttribute("normal",new rt(b,3)),this.setAttribute("uv",new rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Da=class r extends Ot{constructor(e=1,t=.4,i=12,n=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],d=[],u=new D,f=new D,m=new D;for(let b=0;b<=i;b++){let g=a+b/i*o;for(let p=0;p<=n;p++){let v=p/n*s;f.x=(e+t*Math.cos(g))*Math.cos(v),f.y=(e+t*Math.cos(g))*Math.sin(v),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(p/n),d.push(b/i)}}for(let b=1;b<=i;b++)for(let g=1;g<=n;g++){let p=(n+1)*b+g-1,v=(n+1)*(b-1)+g-1,_=(n+1)*(b-1)+g,y=(n+1)*b+g;l.push(p,v,y),l.push(v,_,y)}this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Ks(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];if(mf(n))n.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(mf(n[0])){let s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();e[t][i]=s}else e[t][i]=n.slice();else e[t][i]=n}}return e}function Ci(r){let e={};for(let t=0;t<r.length;t++){let i=Ks(r[t]);for(let n in i)e[n]=i[n]}return e}function mf(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function d0(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function rd(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}var qt={clone:Ks,merge:Ci},u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,it=class extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=f0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=d0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new be().setHex(n.value);break;case"v2":this.uniforms[i].value=new ue().fromArray(n.value);break;case"v3":this.uniforms[i].value=new D().fromArray(n.value);break;case"v4":this.uniforms[i].value=new lt().fromArray(n.value);break;case"m3":this.uniforms[i].value=new He().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Le().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Dr=class extends it{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qe=class extends wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ii=class extends qe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ps('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ps('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ia=class extends wi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var vl=class extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yl=class extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ls(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function da(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function p0(r){function e(n,s){return r[n]-r[s]}let t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function gf(r,e,t){let i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){let o=t[s]*e;for(let l=0;l!==e;++l)n[a++]=r[o+l]}return n}function m0(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=r[n++];while(s!==void 0)}var _n=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break t}a=t.length;break i}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break t}a=i,i=0;break i}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_l=class extends _n{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rs,endingEnd:Rs}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Cs:s=e,o=2*t-i;break;case pa:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Cs:a=e,l=2*i-t;break;case pa:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-t)/(n-t),b=m*m,g=b*m,p=-u*g+2*u*b-u*m,v=(1+u)*g+(-1.5-2*u)*b+(-.5+u)*m+1,_=(-1-f)*g+(1.5+f)*b+.5*m,y=f*g-f*b;for(let w=0;w!==o;++w)s[w]=p*a[h+w]+v*a[c+w]+_*a[l+w]+y*a[d+w];return s}},La=class extends _n{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},Ml=class extends _n{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Sl=class extends _n{interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(i-t)/(n-t),b=1-m;for(let g=0;g!==o;++g)s[g]=a[c+g]*b+a[l+g]*m;return s}let u=o*2,f=e-1;for(let m=0;m!==o;++m){let b=a[c+m],g=a[l+m],p=f*u+m*2,v=d[p],_=d[p+1],y=e*u+m*2,w=h[y],E=h[y+1],x=x0(i,t,v,w,n);s[m]=lp(x,b,_,E,g)}return s}};function lp(r,e,t,i,n){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*i+r*r*r*n}function g0(r,e,t,i,n){let s=1-r;return 3*s*s*(t-e)+6*s*r*(i-t)+3*r*r*(n-i)}function x0(r,e,t,i,n){let s=(r-e)/(n-e);for(let a=0;a<8;a++){let o=lp(s,e,t,i,n)-r;if(Math.abs(o)<1e-10)break;let l=g0(s,e,t,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var zi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ls(t,this.TimeBufferType),this.values=ls(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ls(e.times,Array),values:ls(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),da(e.settings)&&(i.settings={inTangents:ls(e.settings.inTangents,Array),outTangents:ls(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new La(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Sl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ds:t=this.InterpolantFactoryMethodDiscrete;break;case Is:t=this.InterpolantFactoryMethodLinear;break;case sl:t=this.InterpolantFactoryMethodSmooth;break;case Rh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ie("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ds;case this.InterpolantFactoryMethodLinear:return Is;case this.InterpolantFactoryMethodSmooth:return sl;case this.InterpolantFactoryMethodBezier:return Rh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;da(this.settings)&&(xf(this.settings.inTangents,e),xf(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;da(this.settings)&&(bf(this.settings.inTangents,e),bf(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Tm(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===sl,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let m=0;m!==i;++m){let b=t[d+m];if(b!==t[u+m]||b!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,da(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function xf(r,e){for(let t=0,i=r.length;t!==i;t+=2)r[t]+=e}function bf(r,e){for(let t=0,i=r.length;t!==i;t+=2)r[t]*=e}zi.prototype.ValueTypeName="";zi.prototype.TimeBufferType=Float32Array;zi.prototype.ValueBufferType=Float32Array;zi.prototype.DefaultInterpolation=Is;var jn=class extends zi{constructor(e,t,i){super(e,t,i)}};jn.prototype.ValueTypeName="bool";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=Ds;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends zi{constructor(e,t,i,n){super(e,t,i,n)}};Na.prototype.ValueTypeName="color";var Yn=class extends zi{constructor(e,t,i,n){super(e,t,i,n)}};Yn.prototype.ValueTypeName="number";var wl=class extends _n{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)Lt.slerpFlat(s,0,a,c-o,a,c,l);return s}},Kn=class extends zi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new wl(this.times,this.values,this.getValueSize(),e)}};Kn.prototype.ValueTypeName="quaternion";Kn.prototype.InterpolantFactoryMethodSmooth=void 0;var Jn=class extends zi{constructor(e,t,i){super(e,t,i)}};Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=Ds;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends zi{constructor(e,t,i,n){super(e,t,i,n)}};us.prototype.ValueTypeName="vector";var ks=class{constructor(e="",t=-1,i=[],n=xc){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Sn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(v0(i[a]).scale(n));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=i.length;s!==a;++s)t.push(zi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let h=p0(l);l=gf(l,1,h),c=gf(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Yn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(s);if(h&&h.length>1){let d=h[1],u=n[d];u||(n[d]=u=[]),u.push(c)}}let a=[];for(let o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function b0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yn;case"vector":case"vector2":case"vector3":case"vector4":return us;case"color":return Na;case"quaternion":return Kn;case"bool":case"boolean":return jn;case"string":return Jn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function v0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=b0(r.type);if(r.times===void 0){let i=[],n=[];m0(r.keys,i,n,"value"),r.times=i,r.values=n}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),da(r.settings)&&(t.settings={inTangents:ls(r.settings.inTangents,Float32Array),outTangents:ls(r.settings.outTangents,Float32Array)}),t}var bn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(vf(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!vf(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function vf(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Tl=class{constructor(e,t,i){let n=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cp=new Tl,un=class{constructor(e){this.manager=e!==void 0?e:cp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};un.DEFAULT_MATERIAL_NAME="__DEFAULT";var kn={},Ph=class extends Error{constructor(e,t){super(e),this.response=t}},zs=class extends un{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=bn.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(kn[e]!==void 0){kn[e].push({onLoad:t,onProgress:i,onError:n});return}kn[e]=[],kn[e].push({onLoad:t,onProgress:i,onError:n});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=kn[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,m=f!==0,b=0,g=new ReadableStream({start(p){v();function v(){d.read().then(({done:_,value:y})=>{if(_)p.close();else{b+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:f});for(let E=0,x=h.length;E<x;E++){let M=h[E];M.onProgress&&M.onProgress(w)}p.enqueue(y),v()}},_=>{p.error(_)})}}});return new Response(g)}else throw new Ph(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{bn.add(`file:${e}`,c);let h=kn[e];delete kn[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=kn[e];if(h===void 0)throw this.manager.itemError(e),c;delete kn[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var xr=new WeakMap,El=class extends un{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=bn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=xr.get(a);d===void 0&&(d=[],xr.set(a,d)),d.push({onLoad:t,onError:n})}return a}let o=wr("img");function l(){h(),t&&t(this);let d=xr.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}xr.delete(this),s.manager.itemEnd(e)}function c(d){h(),n&&n(d),bn.remove(`image:${e}`);let u=xr.get(this)||[];for(let f=0;f<u.length;f++){let m=u[f];m.onError&&m.onError(d)}xr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),bn.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Fa=class extends un{constructor(e){super(e)}load(e,t,i,n){let s=this,a=new Bi,o=new zs(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){n!==void 0?n(h):ze(h);return}s._applyTexData(a,c),t&&t(a,c)},i,n),a}createDataTexture(e){let t=new Bi;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Oi,e.wrapT=t.wrapT!==void 0?t.wrapT:Oi,e.magFilter=t.magFilter!==void 0?t.magFilter:ft,e.minFilter=t.minFilter!==void 0?t.minFilter:ft,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Ni),t.mipmapCount===1&&(e.minFilter=ft),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},Oa=class extends un{constructor(e){super(e)}load(e,t,i,n){let s=new Ft,a=new El(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}},Hs=class extends ct{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ir=class extends Hs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Th=new Le,yf=new D,_f=new D,Lr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=Ei,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;yf.setFromMatrixPosition(e.matrixWorld),t.position.copy(yf),_f.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_f),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){Th.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Th,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=n?n.z/s.x:1,o=n?n.w/s.y:1,l=n?n.x/s.x:0,c=n?n.y/s.y:0;e.coordinateSystem===Sr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},il=new D,nl=new Lt,xn=new D,Ua=class extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(il,nl,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(il,nl,xn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(il,nl,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(il,nl,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},os=new D,Mf=new ue,Sf=new ue,Vt=class extends Ua{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,Mf,Sf),t.subVectors(Sf,Mf)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ua*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Dh=class extends Lr{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Ls*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Gs=class extends Hs{constructor(e,t,i=0,n=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Dh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ih=class extends Lr{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0}},ui=class extends Hs{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Ih}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Zn=class extends Ua{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Lh=class extends Lr{constructor(){super(new Zn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fs=class extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new Lh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Qn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Eh=new WeakMap,Ba=class extends un{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=bn.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{Eh.has(a)===!0?(n&&n(Eh.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return bn.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){n&&n(c),Eh.set(l,c),bn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});bn.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var br=-90,vr=1,Nr=class extends ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Vt(br,vr,e,t);n.layers=this.layers,this.add(n);let s=new Vt(br,vr,e,t);s.layers=this.layers,this.add(s);let a=new Vt(br,vr,e,t);a.layers=this.layers,this.add(a);let o=new Vt(br,vr,e,t);o.layers=this.layers,this.add(o);let l=new Vt(br,vr,e,t);l.layers=this.layers,this.add(l);let c=new Vt(br,vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ki)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=b,e.setRenderTarget(i,5,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Al=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},ka=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=y0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function y0(){this._document.hidden===!1&&this.reset()}var Rl=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,s,a;switch(t){case"quaternion":n=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,n=this.valueSize,s=e*n+n,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[s+o]=i[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(i,s,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,a=n;s!==a;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let a=0;a!==s;++a)e[t+a]=e[i+a]}_slerp(e,t,i,n){Lt.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){let a=this._workIndex*s;Lt.multiplyQuaternionsFlat(e,a,e,t,e,i),Lt.slerpFlat(e,t,e,t,e,a,n)}_lerp(e,t,i,n,s){let a=1-n;for(let o=0;o!==s;++o){let l=t+o;e[l]=e[l]*a+e[i+o]*n}}_lerpAdditive(e,t,i,n,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[i+a]*n}}},ad="\\[\\]\\.:\\/",_0=new RegExp("["+ad+"]","g"),od="[^"+ad+"]",M0="[^"+ad.replace("\\.","")+"]",S0=/((?:WC+[\/:])*)/.source.replace("WC",od),w0=/(WCOD+)?/.source.replace("WCOD",M0),T0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",od),E0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",od),A0=new RegExp("^"+S0+w0+T0+E0+"$"),R0=["material","materials","bones","map"],Nh=class{constructor(e,t,i){let n=i||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},St=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_0,"")}static parseTrackName(e){let t=A0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);R0.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=Nh;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cl=class{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;let s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Rs,endingEnd:Rs};for(let c=0;c!==a;++c){let h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=qf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){let n=this._clip.duration,s=e._clip.duration,a=s/n,o=n/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let n=this._mixer,s=n.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case jf:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case xc:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(n,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,n=this.time+e,s=this._loopCount,a=i===Xf;if(e===0)return s===-1?n:a&&(s&1)===1?t-n:n;if(i===Wf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=t||n<0){let o=Math.floor(n/t);n-=t*o,s+=Math.abs(o);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=n;if(a&&(s&1)===1)return t-n}return n}_setEndings(e,t,i){let n=this._interpolantSettings;i?(n.endingStart=Cs,n.endingEnd=Cs):(e?n.endingStart=this.zeroSlopeAtStart?Cs:Rs:n.endingStart=pa,t?n.endingEnd=this.zeroSlopeAtEnd?Cs:Rs:n.endingEnd=pa)}_scheduleFading(e,t,i){let n=this._mixer,s=n.time,a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=i,this}},C0=new Float32Array(1),za=class extends cn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==s;++d){let u=n[d],f=u.name,m=h[f];if(m!==void 0)++m.referenceCount,a[d]=m;else{if(m=a[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}let b=t&&t._propertyBindings[d].binding.parsedPath;m=new Rl(St.create(i,f,b),u.ValueTypeName,u.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[d]=m}o[d].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let n=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){let n=this._bindingsByRootAndName,s=this._bindings,a=n[t];a===void 0&&(a={},n[t]=a),a[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,a=this._bindingsByRootAndName,o=a[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[n]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new La(new Float32Array(2),new Float32Array(2),1,C0),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){let n=t||this._root,s=n.uuid,a=typeof e=="string"?ks.findByName(n,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=xc),l!==void 0){let d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===i)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new Cl(this,a,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){let i=t||this._root,n=i.uuid,s=typeof e=="string"?ks.findByName(i,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,s,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){let a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let a in i){let o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let n=this._bindingsByRootAndName,s=n[t];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};var Ha=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ie("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var fd=class fd{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=n,this}};fd.prototype.isMatrix2=!0;var Fh=fd;function ld(r,e,t,i){let n=P0(i);switch(t){case jh:return r*e;case Ul:return r*e/n.components*n.byteLength;case Bl:return r*e/n.components*n.byteLength;case gs:return r*e*2/n.components*n.byteLength;case kl:return r*e*2/n.components*n.byteLength;case Yh:return r*e*3/n.components*n.byteLength;case Ri:return r*e*4/n.components*n.byteLength;case zl:return r*e*4/n.components*n.byteLength;case Ja:case Za:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Qa:case $a:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gl:case Wl:return Math.max(r,16)*Math.max(e,8)/4;case Hl:case Vl:return Math.max(r,8)*Math.max(e,8)/2;case ql:case Xl:case Yl:case Kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case jl:case eo:case Jl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case $l:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ec:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case tc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ic:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case nc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case sc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case rc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ac:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case lc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case cc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case hc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case dc:case uc:case fc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case pc:case mc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case to:case gc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function P0(r){switch(r){case Ei:case Vh:return{byteLength:1,components:1};case Br:case Wh:case xt:return{byteLength:2,components:1};case Fl:case Ol:return{byteLength:2,components:4};case fn:case Nl:case Ai:return{byteLength:4,components:1};case qh:case Xh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Dp(){let r=null,e=!1,t=null,i=null;function n(s,a){i=r.requestAnimationFrame(n),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function I0(r){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],b=d[f];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++u,d[u]=b)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let b=d[f];r.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var L0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N0=`#ifdef USE_ALPHAHASH
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
#endif`,F0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k0=`#ifdef USE_AOMAP
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
#endif`,z0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H0=`#ifdef USE_BATCHING
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
#endif`,G0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,X0=`#ifdef USE_IRIDESCENCE
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
#endif`,j0=`#ifdef USE_BUMPMAP
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
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ig=`#define PI 3.141592653589793
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
} // validated`,ng=`vec3 transformedNormal = objectNormal;
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
#endif`,sg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",cg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hg=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pg=`#ifdef USE_ENVMAP
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
#endif`,mg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vg=`#ifdef USE_GRADIENTMAP
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
}`,yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,wg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cg=`PhysicalMaterial material;
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
#endif`,Pg=`uniform sampler2D dfgLUT;
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
}`,Dg=`
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
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ng=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gg=`#if defined( USE_POINTS_UV )
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
#endif`,Vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xg=`#if defined( USE_MORPHCOLORS )
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
#endif`,jg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yg=`#ifdef USE_MORPHTARGETS
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
#endif`,Kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tx=`#ifdef USE_NORMALMAP
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
#endif`,ix=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ax=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ox=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xx=`float getShadowMask() {
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
}`,bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vx=`#ifdef USE_SKINNING
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
#endif`,yx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_x=`#ifdef USE_SKINNING
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
#endif`,Mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ex=`#ifdef USE_TRANSMISSION
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
#endif`,Ax=`#ifdef USE_TRANSMISSION
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
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lx=`uniform sampler2D t2D;
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
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`uniform float backgroundBlurriness;
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
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ux=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`#include <common>
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
}`,kx=`#if DEPTH_PACKING == 3200
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
}`,zx=`#define DISTANCE
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
}`,Hx=`#define DISTANCE
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
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`uniform float scale;
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
}`,qx=`uniform vec3 diffuse;
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
}`,Xx=`#include <common>
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
}`,jx=`uniform vec3 diffuse;
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
}`,Yx=`#define LAMBERT
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
}`,Kx=`#define LAMBERT
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
}`,Jx=`#define MATCAP
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
}`,Zx=`#define MATCAP
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
}`,Qx=`#define NORMAL
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
}`,$x=`#define NORMAL
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
}`,eb=`#define PHONG
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
}`,tb=`#define PHONG
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
}`,ib=`#define STANDARD
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
}`,nb=`#define STANDARD
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
}`,sb=`#define TOON
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
}`,rb=`#define TOON
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
}`,ab=`uniform float size;
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
}`,ob=`uniform vec3 diffuse;
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
}`,lb=`#include <common>
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
}`,cb=`uniform vec3 color;
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
}`,hb=`uniform float rotation;
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
}`,db=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:L0,alphahash_pars_fragment:N0,alphamap_fragment:F0,alphamap_pars_fragment:O0,alphatest_fragment:U0,alphatest_pars_fragment:B0,aomap_fragment:k0,aomap_pars_fragment:z0,batching_pars_vertex:H0,batching_vertex:G0,begin_vertex:V0,beginnormal_vertex:W0,bsdfs:q0,iridescence_fragment:X0,bumpmap_pars_fragment:j0,clipping_planes_fragment:Y0,clipping_planes_pars_fragment:K0,clipping_planes_pars_vertex:J0,clipping_planes_vertex:Z0,color_fragment:Q0,color_pars_fragment:$0,color_pars_vertex:eg,color_vertex:tg,common:ig,defaultnormal_vertex:ng,displacementmap_pars_vertex:sg,displacementmap_vertex:rg,emissivemap_fragment:ag,emissivemap_pars_fragment:og,colorspace_fragment:lg,colorspace_pars_fragment:cg,envmap_fragment:hg,envmap_common_pars_fragment:dg,envmap_pars_fragment:ug,envmap_pars_vertex:fg,envmap_physical_pars_fragment:wg,envmap_vertex:pg,fog_vertex:mg,fog_pars_vertex:gg,fog_fragment:xg,fog_pars_fragment:bg,gradientmap_pars_fragment:vg,lightmap_pars_fragment:yg,lights_lambert_fragment:_g,lights_lambert_pars_fragment:Mg,lights_pars_begin:Sg,lights_toon_fragment:Tg,lights_toon_pars_fragment:Eg,lights_phong_fragment:Ag,lights_phong_pars_fragment:Rg,lights_physical_fragment:Cg,lights_physical_pars_fragment:Pg,lights_fragment_begin:Dg,lights_fragment_maps:Ig,lights_fragment_end:Lg,lightprobes_pars_fragment:Ng,logdepthbuf_fragment:Fg,logdepthbuf_pars_fragment:Og,logdepthbuf_pars_vertex:Ug,logdepthbuf_vertex:Bg,map_fragment:kg,map_pars_fragment:zg,map_particle_fragment:Hg,map_particle_pars_fragment:Gg,metalnessmap_fragment:Vg,metalnessmap_pars_fragment:Wg,morphinstance_vertex:qg,morphcolor_vertex:Xg,morphnormal_vertex:jg,morphtarget_pars_vertex:Yg,morphtarget_vertex:Kg,normal_fragment_begin:Jg,normal_fragment_maps:Zg,normal_pars_fragment:Qg,normal_pars_vertex:$g,normal_vertex:ex,normalmap_pars_fragment:tx,clearcoat_normal_fragment_begin:ix,clearcoat_normal_fragment_maps:nx,clearcoat_pars_fragment:sx,iridescence_pars_fragment:rx,opaque_fragment:ax,packing:ox,premultiplied_alpha_fragment:lx,project_vertex:cx,dithering_fragment:hx,dithering_pars_fragment:dx,roughnessmap_fragment:ux,roughnessmap_pars_fragment:fx,shadowmap_pars_fragment:px,shadowmap_pars_vertex:mx,shadowmap_vertex:gx,shadowmask_pars_fragment:xx,skinbase_vertex:bx,skinning_pars_vertex:vx,skinning_vertex:yx,skinnormal_vertex:_x,specularmap_fragment:Mx,specularmap_pars_fragment:Sx,tonemapping_fragment:wx,tonemapping_pars_fragment:Tx,transmission_fragment:Ex,transmission_pars_fragment:Ax,uv_pars_fragment:Rx,uv_pars_vertex:Cx,uv_vertex:Px,worldpos_vertex:Dx,background_vert:Ix,background_frag:Lx,backgroundCube_vert:Nx,backgroundCube_frag:Fx,cube_vert:Ox,cube_frag:Ux,depth_vert:Bx,depth_frag:kx,distance_vert:zx,distance_frag:Hx,equirect_vert:Gx,equirect_frag:Vx,linedashed_vert:Wx,linedashed_frag:qx,meshbasic_vert:Xx,meshbasic_frag:jx,meshlambert_vert:Yx,meshlambert_frag:Kx,meshmatcap_vert:Jx,meshmatcap_frag:Zx,meshnormal_vert:Qx,meshnormal_frag:$x,meshphong_vert:eb,meshphong_frag:tb,meshphysical_vert:ib,meshphysical_frag:nb,meshtoon_vert:sb,meshtoon_frag:rb,points_vert:ab,points_frag:ob,shadow_vert:lb,shadow_frag:cb,sprite_vert:hb,sprite_frag:db},ge={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Tn={basic:{uniforms:Ci([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Ci([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Ci([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Ci([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Ci([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new be(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Ci([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Ci([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Ci([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Ci([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Ci([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Ci([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Ci([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Ci([ge.lights,ge.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Tn.physical={uniforms:Ci([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var vc={r:0,b:0,g:0},ub=new Le,Ip=new He;Ip.set(-1,0,0,0,1,0,0,0,1);function fb(r,e,t,i,n,s){let a=new be(0),o=n===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let _=v.isScene===!0?v.background:null;if(_&&_.isTexture){let y=v.backgroundBlurriness>0;_=e.get(_,y)}return _}function m(v){let _=!1,y=f(v);y===null?g(a,o):y&&y.isColor&&(g(y,1),_=!0);let w=r.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(v,_){let y=f(_);y&&y.isCubeTexture?(c===void 0&&(c=new Te(new Rt(1,1,1),new it({name:"BackgroundCubeMaterial",uniforms:Ks(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ub.makeRotationFromEuler(_.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ip),c.material.toneMapped=We.getTransfer(y.colorSpace)!==ot,(h!==y||d!==y.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Te(new ki(2,2),new it({name:"BackgroundMaterial",uniforms:Ks(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=We.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,_){v.getRGB(vc,rd(r)),t.buffers.color.setClear(vc.r,vc.g,vc.b,_,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),o=_,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:m,addToRenderList:b,dispose:p}}function pb(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null),s=n,a=!1;function o(I,L,U,P,O){let B=!1,H=d(I,P,U,L);s!==H&&(s=H,c(s.object)),B=f(I,P,U,O),B&&m(I,P,U,O),O!==null&&e.update(O,r.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,y(I,L,U,P),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return r.createVertexArray()}function c(I){return r.bindVertexArray(I)}function h(I){return r.deleteVertexArray(I)}function d(I,L,U,P){let O=P.wireframe===!0,B=i[L.id];B===void 0&&(B={},i[L.id]=B);let H=I.isInstancedMesh===!0?I.id:0,Z=B[H];Z===void 0&&(Z={},B[H]=Z);let z=Z[U.id];z===void 0&&(z={},Z[U.id]=z);let X=z[O];return X===void 0&&(X=u(l()),z[O]=X),X}function u(I){let L=[],U=[],P=[];for(let O=0;O<t;O++)L[O]=0,U[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:P,object:I,attributes:{},index:null}}function f(I,L,U,P){let O=s.attributes,B=L.attributes,H=0,Z=U.getAttributes();for(let z in Z)if(Z[z].location>=0){let ee=O[z],pe=B[z];if(pe===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(pe=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(pe=I.instanceColor)),ee===void 0||ee.attribute!==pe||pe&&ee.data!==pe.data)return!0;H++}return s.attributesNum!==H||s.index!==P}function m(I,L,U,P){let O={},B=L.attributes,H=0,Z=U.getAttributes();for(let z in Z)if(Z[z].location>=0){let ee=B[z];ee===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor));let pe={};pe.attribute=ee,ee&&ee.data&&(pe.data=ee.data),O[z]=pe,H++}s.attributes=O,s.attributesNum=H,s.index=P}function b(){let I=s.newAttributes;for(let L=0,U=I.length;L<U;L++)I[L]=0}function g(I){p(I,0)}function p(I,L){let U=s.newAttributes,P=s.enabledAttributes,O=s.attributeDivisors;U[I]=1,P[I]===0&&(r.enableVertexAttribArray(I),P[I]=1),O[I]!==L&&(r.vertexAttribDivisor(I,L),O[I]=L)}function v(){let I=s.newAttributes,L=s.enabledAttributes;for(let U=0,P=L.length;U<P;U++)L[U]!==I[U]&&(r.disableVertexAttribArray(U),L[U]=0)}function _(I,L,U,P,O,B,H){H===!0?r.vertexAttribIPointer(I,L,U,O,B):r.vertexAttribPointer(I,L,U,P,O,B)}function y(I,L,U,P){b();let O=P.attributes,B=U.getAttributes(),H=L.defaultAttributeValues;for(let Z in B){let z=B[Z];if(z.location>=0){let X=O[Z];if(X===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){let ee=X.normalized,pe=X.itemSize,Ce=e.get(X);if(Ce===void 0)continue;let K=Ce.buffer,me=Ce.type,we=Ce.bytesPerElement,Pe=me===r.INT||me===r.UNSIGNED_INT||X.gpuType===Nl;if(X.isInterleavedBufferAttribute){let he=X.data,Ue=he.isInterleavedBuffer===!0?he.stride:he.itemSize,mt=X.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let Be=0;Be<z.locationSize;Be++)p(z.location+Be,he.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Be=0;Be<z.locationSize;Be++)g(z.location+Be);r.bindBuffer(r.ARRAY_BUFFER,K);for(let Be=0;Be<z.locationSize;Be++)_(z.location+Be,pe/z.locationSize,me,ee,Ue*we,(mt+pe/z.locationSize*Be)*we,Pe)}else{if(X.isInstancedBufferAttribute){for(let he=0;he<z.locationSize;he++)p(z.location+he,X.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let he=0;he<z.locationSize;he++)g(z.location+he);r.bindBuffer(r.ARRAY_BUFFER,K);for(let he=0;he<z.locationSize;he++)_(z.location+he,pe/z.locationSize,me,ee,pe*we,pe/z.locationSize*he*we,Pe)}}else if(H!==void 0){let ee=H[Z];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(z.location,ee);break;case 3:r.vertexAttrib3fv(z.location,ee);break;case 4:r.vertexAttrib4fv(z.location,ee);break;default:r.vertexAttrib1fv(z.location,ee)}}}}v()}function w(){R();for(let I in i){let L=i[I];for(let U in L){let P=L[U];for(let O in P){let B=P[O];for(let H in B)h(B[H].object),delete B[H];delete P[O]}}delete i[I]}}function E(I){if(i[I.id]===void 0)return;let L=i[I.id];for(let U in L){let P=L[U];for(let O in P){let B=P[O];for(let H in B)h(B[H].object),delete B[H];delete P[O]}}delete i[I.id]}function x(I){for(let L in i){let U=i[L];for(let P in U){let O=U[P];if(O[I.id]===void 0)continue;let B=O[I.id];for(let H in B)h(B[H].object),delete B[H];delete O[I.id]}}}function M(I){for(let L in i){let U=i[L],P=I.isInstancedMesh===!0?I.id:0,O=U[P];if(O!==void 0){for(let B in O){let H=O[B];for(let Z in H)h(H[Z].object),delete H[Z];delete O[B]}delete U[P],Object.keys(U).length===0&&delete i[L]}}}function R(){A(),a=!0,s!==n&&(s=n,c(s.object))}function A(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:b,enableAttribute:g,disableUnusedAttributes:v}}function mb(r,e,t){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function gb(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(x){return!(x!==Ri&&i.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let M=x===xt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Ei&&x!==Ai&&!M&&i.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,maxSamples:w,samples:E}}function xb(r){let e=this,t=null,i=0,n=!1,s=!1,a=new Wi,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,b=d.clipIntersection,g=d.clipShadows,p=r.get(d);if(!n||m===null||m.length===0||s&&!g)s?h(null):c();else{let v=s?0:i,_=v*4,y=p.clippingState||null;l.value=y,y=h(m,u,_,f);for(let w=0;w!==_;++w)y[w]=t[w];p.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,m){let b=d!==null?d.length:0,g=null;if(b!==0){if(g=l.value,m!==!0||g===null){let p=f+b*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,y=f;_!==b;++_,y+=4)a.copy(d[_]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}var ao=class extends At{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Ea(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Rt(5,5,5),s=new it({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ci,blending:hi});s.uniforms.tEquirect.value=t;let a=new Te(n,s),o=t.minFilter;return t.minFilter===Ni&&(t.minFilter=ft),new Nr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}},hp=256,bb=3,vb=20,Lp=256,Np=16,yb=3,_b=new D,Mb=new be,Hr=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Nr(1,10,null),this._boxMesh=new Te(new Rt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){let{size:a=256,position:o=_b}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,b=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(e.background=l.getClearColor(Mb));let g=new Nr(i,n,h);return g.position.copy(o),g.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=m,e.background=b,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(hp,id(e))}_fromTexture(e,t){e.mapping===Xs||e.mapping===Or?this._setSize(e.image.length===0?hp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=dp(e,!1,!1),i=Math.log2(e)-bb;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=dp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,s=this._cubeCamera;n.material=i,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Xs||e.mapping===Or?(this._cubemapMaterial===null&&(this._cubemapMaterial=fp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=up()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Sb(),this._integrationMaterial=wb());let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Np);for(let a=0;a<=i;a++){let o=r.lodToRoughness(a,i);if(a>i-yb)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Lp*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Tb());let i=this._blurMaterial,n=i.uniforms,s=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=s.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(s,0,i)}};function dp(r,e,t){return new ao(r,{minFilter:Ni,generateMipmaps:e,type:xt,colorSpace:ei,depthBuffer:t})}function oo(r,e,t){return new it({name:r,uniforms:e,vertexShader:Ye.cube_vert,fragmentShader:t,side:ci,blending:hi,depthTest:!1,depthWrite:!1})}function Sb(){return oo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Lp}u

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
	`)}function wb(){return oo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Np}},`

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
	`)}function Tb(){return oo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${vb}
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
	`)}function up(){return oo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function fp(){return oo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Eb(r){let e=new WeakMap,t=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===ms||f===Il)if(e.has(u)){let m=e.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let b=new ao(m.height);return b.fromEquirectangularTexture(r,u),e.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===ms||f===Il,b=f===Xs||f===Or;if(m||b){let g=t.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Hr(r)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let v=u.image;return m&&v&&v.height>0||b&&v&&l(v)?(i===null&&(i=new Hr(r)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===ms?u.mapping=Xs:f===Il&&(u.mapping=Or),u}function l(u){let f=0,m=6;for(let b=0;b<m;b++)u[b]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function Ab(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=r.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Ps("WebGLRenderer: "+i+" extension not supported."),n}}}function Rb(r,e,t,i){let n={},s=new WeakMap,a=new FinalizationRegistry(m=>delete n[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete n[m.id],a.unregister(m);let b=s.get(m);b&&(e.remove(b),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,b){return n[b.id]!==void 0||(b.addEventListener("dispose",o),n[b.id]=new WeakRef(b),a.register(b,b.id,b),t.memory.geometries++),b}function h(m){let b=m.attributes;for(let g in b)e.update(b[g],r.ARRAY_BUFFER)}function d(m){let b=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let v=b!==null?b.array.length:g.array.length/3-1,_=g.count>=65535?_a:ya,y=new _(Math.ceil(v/3)*6,1),w=y.array;if(b!==null){let x=b.array;p=b.version;for(let M=0,R=0;M<v;M+=3){let A=x[M+0],I=x[M+1],L=x[M+2];w[R++]=A,w[R++]=I,w[R++]=I,w[R++]=L,w[R++]=L,w[R++]=A}}else{p=g.version;for(let x=0,M=0;x<v;x+=3){let R=x+0,A=x+1,I=x+2;w[M++]=R,w[M++]=A,w[M++]=A,w[M++]=I,w[M++]=I,w[M++]=R}}y.version=p;let E=s.get(m);E&&e.remove(E),s.set(m,y)}function u(m){let b=s.get(m);if(b){let g=m.index;g!==null&&b.version<g.version&&d(m)}else d(m);return s.get(m)}function f(){for(let m in n){let b=n[m].deref();b!==void 0&&l(b)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Cb(r,e,t){let i;function n(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){r.drawElements(i,u,s,d*a),t.update(u,i,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(i,u,s,d*a,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,f);let b=0;for(let g=0;g<f;g++)b+=u[g];t.update(b,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Pb(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:ze("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Db(r,e,t){let i=new WeakMap,n=new lt;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let R=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],_=0;f===!0&&(_=1),m===!0&&(_=2),b===!0&&(_=3);let y=o.attributes.position.count*_,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*w*4*d),x=new xa(E,y,w,d);x.type=Ai,x.needsUpdate=!0;let M=_*4;for(let A=0;A<d;A++){let I=g[A],L=p[A],U=v[A],P=y*w*4*A;for(let O=0;O<I.count;O++){let B=O*M;f===!0&&(n.fromBufferAttribute(I,O),E[P+B+0]=n.x,E[P+B+1]=n.y,E[P+B+2]=n.z,E[P+B+3]=0),m===!0&&(n.fromBufferAttribute(L,O),E[P+B+4]=n.x,E[P+B+5]=n.y,E[P+B+6]=n.z,E[P+B+7]=0),b===!0&&(n.fromBufferAttribute(U,O),E[P+B+8]=n.x,E[P+B+9]=n.y,E[P+B+10]=n.z,E[P+B+11]=U.itemSize===4?n.w:1)}}u={count:d,texture:x,size:new ue(y,w)},i.set(o,u),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Ib(r,e,t,i,n){let s=new WeakMap;function a(c){let h=n.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Lb={[Wa]:"LINEAR_TONE_MAPPING",[qa]:"REINHARD_TONE_MAPPING",[Xa]:"CINEON_TONE_MAPPING",[qs]:"ACES_FILMIC_TONE_MAPPING",[Ya]:"AGX_TONE_MAPPING",[Ka]:"NEUTRAL_TONE_MAPPING",[ja]:"CUSTOM_TONE_MAPPING"};function Nb(r,e,t,i,n,s){let a=new At(e,t,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ot;h.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new rt([0,2,0,0,2,0],2));let d=new Dr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Te(h,d),f=new Zn(-1,1,1,-1,0,1),m=null,b=null,g=!1,p,v=null,_=[],y=!1;this.setSize=function(w,E){a.setSize(w,E),o!==null&&o.setSize(w,E),l!==null&&l.setSize(w,E);for(let x=0;x<_.length;x++){let M=_[x];M.setSize&&M.setSize(w,E)}},this.setEffects=function(w){_=w,y=_.length>0&&_[0].isRenderPass===!0;let E=a.width,x=a.height;_.length>0&&o===null&&(o=new At(E,x,{type:xt,depthBuffer:!1,stencilBuffer:!1}),l=new At(E,x,{type:xt,depthBuffer:!1,stencilBuffer:!1}));let M=n===!0&&_.some(R=>R.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new dn(E,x),s===!0&&(c.format=pn,c.type=$n)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let R=0;R<_.length;R++){let A=_[R];A.setSize&&A.setSize(E,x),M&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(w,E){if(g||w.toneMapping===Mn&&_.length===0)return!1;if(v=E,E!==null){let x=E.width,M=E.height;(a.width!==x||a.height!==M)&&this.setSize(x,M)}return y===!1&&w.setRenderTarget(a),p=w.toneMapping,w.toneMapping=Mn,!0},this.hasRenderPass=function(){return y},this.end=function(w,E){w.toneMapping=p,g=!0;let x=a,M=o;for(let R=0;R<_.length;R++){let A=_[R];A.enabled!==!1&&(A.render(w,M,x,E),A.needsSwap!==!1&&(x=M,M=M===o?l:o))}if(m!==w.outputColorSpace||b!==w.toneMapping){m=w.outputColorSpace,b=w.toneMapping,d.defines={},We.getTransfer(m)===ot&&(d.defines.SRGB_TRANSFER="");let R=Lb[b];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,w.setRenderTarget(v),w.render(u,f),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Fp=new Ft,Op=new dn(1,1),Up=new Aa(1),Bp=new xa,kp=new ml,zp=new Ea,pp=[],mp=[],gp=new Float32Array(16),xp=new Float32Array(9),bp=new Float32Array(4);function Gr(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=pp[n];if(s===void 0&&(s=new Float32Array(n),pp[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function ii(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function ni(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Mc(r,e){let t=mp[e];t===void 0&&(t=new Int32Array(e),mp[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Fb(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ob(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ii(t,e))return;r.uniform2fv(this.addr,e),ni(t,e)}}function Ub(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ii(t,e))return;r.uniform3fv(this.addr,e),ni(t,e)}}function Bb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ii(t,e))return;r.uniform4fv(this.addr,e),ni(t,e)}}function kb(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ii(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ni(t,e)}else{if(ii(t,i))return;bp.set(i),r.uniformMatrix2fv(this.addr,!1,bp),ni(t,i)}}function zb(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ii(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ni(t,e)}else{if(ii(t,i))return;xp.set(i),r.uniformMatrix3fv(this.addr,!1,xp),ni(t,i)}}function Hb(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ii(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ni(t,e)}else{if(ii(t,i))return;gp.set(i),r.uniformMatrix4fv(this.addr,!1,gp),ni(t,i)}}function Gb(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Vb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ii(t,e))return;r.uniform2iv(this.addr,e),ni(t,e)}}function Wb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ii(t,e))return;r.uniform3iv(this.addr,e),ni(t,e)}}function qb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ii(t,e))return;r.uniform4iv(this.addr,e),ni(t,e)}}function Xb(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function jb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ii(t,e))return;r.uniform2uiv(this.addr,e),ni(t,e)}}function Yb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ii(t,e))return;r.uniform3uiv(this.addr,e),ni(t,e)}}function Kb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ii(t,e))return;r.uniform4uiv(this.addr,e),ni(t,e)}}function Sc(r){return r.version===0&&(r.compareFunction=Qh,r.needsUpdate=!0),r}function Jb(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?s=Sc(Op):s=Fp,t.setTexture2D(e||s,n)}function Zb(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||kp,n)}function Qb(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=Sc(Up):s=zp,t.setTextureCube(e||s,n)}function $b(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Bp,n)}function ev(r){switch(r){case 5126:return Fb;case 35664:return Ob;case 35665:return Ub;case 35666:return Bb;case 35674:return kb;case 35675:return zb;case 35676:return Hb;case 5124:case 35670:return Gb;case 35667:case 35671:return Vb;case 35668:case 35672:return Wb;case 35669:case 35673:return qb;case 5125:return Xb;case 36294:return jb;case 36295:return Yb;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Jb;case 35679:case 36299:case 36307:return Zb;case 35680:case 36300:case 36308:case 36293:return Qb;case 36289:case 36303:case 36311:case 36292:return $b}}function tv(r,e){r.uniform1fv(this.addr,e)}function iv(r,e){let t=Gr(e,this.size,2);r.uniform2fv(this.addr,t)}function nv(r,e){let t=Gr(e,this.size,3);r.uniform3fv(this.addr,t)}function sv(r,e){let t=Gr(e,this.size,4);r.uniform4fv(this.addr,t)}function rv(r,e){let t=Gr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function av(r,e){let t=Gr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ov(r,e){let t=Gr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function lv(r,e){r.uniform1iv(this.addr,e)}function cv(r,e){r.uniform2iv(this.addr,e)}function hv(r,e){r.uniform3iv(this.addr,e)}function dv(r,e){r.uniform4iv(this.addr,e)}function uv(r,e){r.uniform1uiv(this.addr,e)}function fv(r,e){r.uniform2uiv(this.addr,e)}function pv(r,e){r.uniform3uiv(this.addr,e)}function mv(r,e){r.uniform4uiv(this.addr,e)}function gv(r,e,t){let i=this.cache,n=e.length,s=Mc(t,n);ii(i,s)||(r.uniform1iv(this.addr,s),ni(i,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Sc(Op):a=Fp;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,s[o])}function xv(r,e,t){let i=this.cache,n=e.length,s=Mc(t,n);ii(i,s)||(r.uniform1iv(this.addr,s),ni(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||kp,s[a])}function bv(r,e,t){let i=this.cache,n=e.length,s=Mc(t,n);ii(i,s)||(r.uniform1iv(this.addr,s),ni(i,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=Sc(Up):a=zp;for(let o=0;o!==n;++o)t.setTextureCube(e[o]||a,s[o])}function vv(r,e,t){let i=this.cache,n=e.length,s=Mc(t,n);ii(i,s)||(r.uniform1iv(this.addr,s),ni(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Bp,s[a])}function yv(r){switch(r){case 5126:return tv;case 35664:return iv;case 35665:return nv;case 35666:return sv;case 35674:return rv;case 35675:return av;case 35676:return ov;case 5124:case 35670:return lv;case 35667:case 35671:return cv;case 35668:case 35672:return hv;case 35669:case 35673:return dv;case 5125:return uv;case 36294:return fv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return bv;case 36289:case 36303:case 36311:case 36292:return vv}}var gd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ev(t.type)}},xd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yv(t.type)}},bd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},pd=/(\w+)(\])?(\[|\.)?/g;function vp(r,e){r.seq.push(e),r.map[e.id]=e}function _v(r,e,t){let i=r.name,n=i.length;for(pd.lastIndex=0;;){let s=pd.exec(i),a=pd.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){vp(t,c===void 0?new gd(o,r,e):new xd(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new bd(o),vp(t,d)),t=d}}}var zr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);_v(o,l,this)}let n=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function yp(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var Mv=37297,Sv=0;function wv(r,e){let t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var _p=new He;function Tv(r){We._getMatrix(_p,We.workingColorSpace,r);let e=`mat3( ${_p.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(r)){case ma:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Mp(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+wv(r.getShaderSource(e),o)}else return s}function Ev(r,e){let t=Tv(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Av={[Wa]:"Linear",[qa]:"Reinhard",[Xa]:"Cineon",[qs]:"ACESFilmic",[Ya]:"AgX",[Ka]:"Neutral",[ja]:"Custom"};function Rv(r,e){let t=Av[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var yc=new D;function Cv(){We.getLuminanceCoefficients(yc);let r=yc.x.toFixed(4),e=yc.y.toFixed(4),t=yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function Dv(r){let e=[];for(let t in r){let i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Iv(r,e){let t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(e,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ro(r){return r!==""}function Sp(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function wp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function vd(r){return r.replace(Lv,Nv)}function Nv(r,e){let t=Ye[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return vd(t)}var Fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tp(r){return r.replace(Fv,Ov)}function Ov(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Ep(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}var Uv={[Vs]:"SHADOWMAP_TYPE_PCF",[Fr]:"SHADOWMAP_TYPE_VSM"};function Bv(r){return Uv[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var kv={[Or]:"ENVMAP_MODE_REFRACTION"};function zv(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":kv[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Hv={[Hh]:"ENVMAP_BLENDING_MULTIPLY",[Hf]:"ENVMAP_BLENDING_MIX",[Gf]:"ENVMAP_BLENDING_ADD"};function Gv(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Hv[r.combine]||"ENVMAP_BLENDING_NONE"}function Vv(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Bv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=zv(t),d=Gv(t),u=Pv(t),f=Dv(s),m=n.createProgram(),b,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ro).join(`
`),b.length>0&&(b+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ro).join(`
`),g.length>0&&(g+=`
`)):(b=[Ep(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),g=[Ep(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Mn?Rv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Ev("linearToOutputTexel",t.outputColorSpace),Cv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ro).join(`
`)),a=vd(a),a=Sp(a,t),a=wp(a,t),o=vd(o),o=Sp(o,t),o=wp(o,t),a=Tp(a),o=Tp(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,b=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,g=["#define varying in",t.glslVersion===ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=p+b+a,_=p+g+o,y=yp(n,n.VERTEX_SHADER,v),w=yp(n,n.FRAGMENT_SHADER,_);n.attachShader(m,y),n.attachShader(m,w),t.index0AttributeName!==void 0?n.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function E(A){if(r.debug.checkShaderErrors){let I=n.getProgramInfoLog(m)||"",L=n.getShaderInfoLog(y)||"",U=n.getShaderInfoLog(w)||"",P=I.trim(),O=L.trim(),B=U.trim(),H=!0,Z=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,m,y,w);else{let z=Mp(n,y,"vertex"),X=Mp(n,w,"fragment");ze("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+P+`
`+z+`
`+X)}else P!==""?Ie("WebGLProgram: Program Info Log:",P):(O===""||B==="")&&(Z=!1);Z&&(A.diagnostics={runnable:H,programLog:P,vertexShader:{log:O,prefix:b},fragmentShader:{log:B,prefix:g}})}n.deleteShader(y),n.deleteShader(w),x=new zr(n,m),M=Iv(n,m)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=n.getProgramParameter(m,Mv)),R},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sv++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=w,this}var Wv=0,yd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new _d(e),t.set(e,i)),i}},_d=class{constructor(e){this.id=Wv++,this.code=e,this.usedTimes=0}};function qv(r){return r===gs||r===eo||r===to}function Xv(r,e,t,i,n,s){let a=new ba,o=new yd,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,M,R,A,I,L){let U=A.fog,P=I.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||O,B),Z=u[x.type],z=i.precision;x.precision!==null&&(z=i.getMaxPrecision(x.precision),z!==x.precision&&Ie("WebGLProgram.getParameters:",x.precision,"not supported, using",z,"instead."));let X=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ee=X!==void 0?X.length:0,pe=0;P.morphAttributes.position!==void 0&&(pe=1),P.morphAttributes.normal!==void 0&&(pe=2),P.morphAttributes.color!==void 0&&(pe=3);let Ce,K,me,we;if(Z){let xe=Tn[Z];Ce=xe.vertexShader,K=xe.fragmentShader}else{Ce=x.vertexShader,K=x.fragmentShader;let xe=o.getVertexShaderStage(x),gt=o.getFragmentShaderStage(x);o.update(x,xe,gt),me=xe.id,we=gt.id}let Pe=r.getRenderTarget(),he=r.state.buffers.depth.getReversed(),Ue=I.isInstancedMesh===!0,mt=I.isBatchedMesh===!0,Be=!!x.map,nt=!!x.matcap,ht=!!H,Xe=ht&&H.isPMREMTexture===!0,jt=!!x.aoMap,kt=!!x.lightMap,ri=!!x.bumpMap&&x.wireframe===!1,wt=!!x.normalMap,Fi=!!x.displacementMap,Gt=!!x.emissiveMap,mi=!!x.metalnessMap,gi=!!x.roughnessMap,xi=x.anisotropy>0,k=x.clearcoat>0,bi=x.diffuseRoughness>0,_t=x.dispersion>0,Mt=x.retroreflectivity>0,oe=x.iridescence>0,It=x.sheen>0,Ne=x.transmission>0,ke=xi&&!!x.anisotropyMap,C=k&&!!x.clearcoatMap,S=k&&!!x.clearcoatNormalMap,G=k&&!!x.clearcoatRoughnessMap,te=bi&&!!x.diffuseRoughnessMap,$=oe&&!!x.iridescenceMap,ne=oe&&!!x.iridescenceThicknessMap,ae=It&&!!x.sheenColorMap,j=It&&!!x.sheenRoughnessMap,J=!!x.specularMap,se=!!x.specularColorMap,N=!!x.specularIntensityMap,Q=Ne&&!!x.transmissionMap,Y=Ne&&!!x.thicknessMap,ce=!!x.gradientMap,re=!!x.alphaMap,le=x.alphaTest>0,Fe=!!x.alphaHash,je=!!x.extensions,ie=Mn;x.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(ie=r.toneMapping);let Oe=Xe?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Ve={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:Ce,fragmentShader:K,defines:x.defines,customVertexShaderID:me,customFragmentShaderID:we,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:z,batching:mt,batchingColor:mt&&I._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&I.instanceColor!==null,instancingMorph:Ue&&I.morphTexture!==null,outputColorSpace:Pe===null?r.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Be,matcap:nt,envMap:ht,envMapMode:ht&&H.mapping,envMapPMREM:Xe,envMapMaxLod:Xe?Oe.length-1:null,envMapSize:Xe?Oe[0].width:null,aoMap:jt,lightMap:kt,bumpMap:ri,normalMap:wt,displacementMap:Fi,emissiveMap:Gt,normalMapObjectSpace:wt&&x.normalMapType===Kf,normalMapTangentSpace:wt&&x.normalMapType===no,packedNormalMap:wt&&x.normalMapType===no&&qv(x.normalMap.format),metalnessMap:mi,roughnessMap:gi,anisotropy:xi,anisotropyMap:ke,clearcoat:k,clearcoatMap:C,clearcoatNormalMap:S,clearcoatRoughnessMap:G,diffuseRoughness:bi,diffuseRoughnessMap:te,dispersion:_t,retroreflection:Mt,iridescence:oe,iridescenceMap:$,iridescenceThicknessMap:ne,sheen:It,sheenColorMap:ae,sheenRoughnessMap:j,specularMap:J,specularColorMap:se,specularIntensityMap:N,transmission:Ne,transmissionMap:Q,thicknessMap:Y,gradientMap:ce,opaque:x.transparent===!1&&x.blending===ps&&x.alphaToCoverage===!1,alphaMap:re,alphaTest:le,alphaHash:Fe,combine:x.combine,mapUv:Be&&f(x.map.channel),aoMapUv:jt&&f(x.aoMap.channel),lightMapUv:kt&&f(x.lightMap.channel),bumpMapUv:ri&&f(x.bumpMap.channel),normalMapUv:wt&&f(x.normalMap.channel),displacementMapUv:Fi&&f(x.displacementMap.channel),emissiveMapUv:Gt&&f(x.emissiveMap.channel),metalnessMapUv:mi&&f(x.metalnessMap.channel),roughnessMapUv:gi&&f(x.roughnessMap.channel),anisotropyMapUv:ke&&f(x.anisotropyMap.channel),clearcoatMapUv:C&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:$&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:j&&f(x.sheenRoughnessMap.channel),specularMapUv:J&&f(x.specularMap.channel),specularColorMapUv:se&&f(x.specularColorMap.channel),specularIntensityMapUv:N&&f(x.specularIntensityMap.channel),transmissionMapUv:Q&&f(x.transmissionMap.channel),thicknessMapUv:Y&&f(x.thicknessMap.channel),alphaMapUv:re&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(wt||xi),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&(Be||re),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&wt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:he,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:pe,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:L.filter(xe=>xe.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:ie,decodeVideoTexture:Be&&x.map.isVideoTexture===!0&&We.getTransfer(x.map.colorSpace)===ot,decodeVideoTextureEmissive:Gt&&x.emissiveMap.isVideoTexture===!0&&We.getTransfer(x.emissiveMap.colorSpace)===ot,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Li,flipSided:x.side===ci,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:je&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&x.extensions.multiDraw===!0||mt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function b(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)M.push(R),M.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(g(M,x),p(M,x),M.push(r.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function g(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function p(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let M=u[x.type],R;if(M){let A=Tn[M];R=qt.clone(A.uniforms)}else R=x.uniforms;return R}function _(x,M){let R=h.get(M);return R!==void 0?++R.usedTimes:(R=new Vv(r,M,x,n),c.push(R),h.set(M,R)),R}function y(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function E(){o.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:v,acquireProgram:_,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:E}}function jv(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function Yv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Ap(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Rp(){let r=[],e=0,t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,b,g,p){let v=r[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:b,renderOrder:u.renderOrder,z:g,group:p},r[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=m,v.materialVariant=a(u),v.groupOrder=b,v.renderOrder=u.renderOrder,v.z=g,v.group=p),e++,v}function l(u,f,m,b,g,p,v){v.reversedDepth===!0&&(g=-g);let _=o(u,f,m,b,g,p);m.transmission>0?i.push(_):m.transparent===!0?n.push(_):t.push(_)}function c(u,f,m,b,g,p){let v=o(u,f,m,b,g,p);m.transmission>0?i.unshift(v):m.transparent===!0?n.unshift(v):t.unshift(v)}function h(u,f){t.length>1&&t.sort(u||Yv),i.length>1&&i.sort(f||Ap),n.length>1&&n.sort(f||Ap)}function d(){for(let u=e,f=r.length;u<f;u++){let m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:d,sort:h}}function Kv(){let r=new WeakMap;function e(i,n){let s=r.get(i),a;return s===void 0?(a=new Rp,r.set(i,[a])):n>=s.length?(a=new Rp,s.push(a)):a=s[n],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Jv(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new be};break;case"SpotLight":t={position:new D,direction:new D,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function Zv(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var Qv=0;function $v(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ey(r){let e=new Jv,t=Zv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let n=new D,s=new Le,a=new Le;function o(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let f=0,m=0,b=0,g=0,p=0,v=0,_=0,y=0,w=0,E=0,x=0,M=0,R=0,A=0;c.sort($v);for(let L=0,U=c.length;L<U;L++){let P=c[L],O=P.color,B=P.intensity,H=P.distance,Z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===gs?Z=P.shadow.map.texture:Z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*B,d+=O.g*B,u+=O.b*B;else if(P.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(P.sh.coefficients[z],B);A++}else if(P.isSunLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let X=P.shadow,ee=t.get(P);ee.shadowIntensity=X.intensity,ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[m]=ee,i.sunShadowMap[m]=Z;let pe=X.getViewportCount();for(let Ce=0;Ce<pe;Ce++)i.sunShadowMatrix[b+Ce]=X.getMatrix(Ce),i.sunShadowCascade[b+Ce]=X._cascadeData[Ce];b+=pe,m++}i.sun[f]=z,f++}else if(P.isDirectionalLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let X=P.shadow,ee=t.get(P);ee.shadowIntensity=X.intensity,ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,i.directionalShadow[g]=ee,i.directionalShadowMap[g]=Z,i.directionalShadowMatrix[g]=P.shadow.matrix,w++}i.directional[g]=z,g++}else if(P.isSpotLight){let z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(O).multiplyScalar(B),z.distance=H,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,i.spot[v]=z;let X=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,X.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[v]=X.matrix,P.castShadow){let ee=t.get(P);ee.shadowIntensity=X.intensity,ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,i.spotShadow[v]=ee,i.spotShadowMap[v]=Z,x++}v++}else if(P.isRectAreaLight){let z=e.get(P);z.color.copy(O).multiplyScalar(B),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),i.rectArea[_]=z,_++}else if(P.isPointLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){let X=P.shadow,ee=t.get(P);ee.shadowIntensity=X.intensity,ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,ee.shadowCameraNear=X.camera.near,ee.shadowCameraFar=X.camera.far,i.pointShadow[p]=ee,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=P.shadow.matrix,E++}i.point[p]=z,p++}else if(P.isHemisphereLight){let z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(B),z.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[y]=z,y++}}_>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let I=i.hash;(I.sunLength!==f||I.directionalLength!==g||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==_||I.hemiLength!==y||I.numSunShadows!==m||I.numDirectionalShadows!==w||I.numPointShadows!==E||I.numSpotShadows!==x||I.numSpotMaps!==M||I.numLightProbes!==A)&&(i.sun.length=f,i.directional.length=g,i.spot.length=v,i.rectArea.length=_,i.point.length=p,i.hemi.length=y,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+M-R,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,I.sunLength=f,I.directionalLength=g,I.pointLength=p,I.spotLength=v,I.rectAreaLength=_,I.hemiLength=y,I.numSunShadows=m,I.numDirectionalShadows=w,I.numPointShadows=E,I.numSpotShadows=x,I.numSpotMaps=M,I.numLightProbes=A,i.version=Qv++)}function l(c,h){let d=0,u=0,f=0,m=0,b=0,g=0,p=h.matrixWorldInverse;for(let v=0,_=c.length;v<_;v++){let y=c[v];if(y.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let w=i.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(p),u++}else if(y.isSpotLight){let w=i.spot[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let w=i.rectArea[b];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),b++}else if(y.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let w=i.hemi[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function Cp(r){let e=new ey(r),t=[],i=[],n=[];function s(d){h.camera=d,t.length=0,i.length=0,n.length=0}function a(d){d.isLightProbeGrid?n.push(d):t.push(d)}function o(d){i.push(d)}function l(){e.setup(t),n.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ty(r){let e=new WeakMap;function t(n,s=0){let a=e.get(n),o;return a===void 0?(o=new Cp(r),e.set(n,[o])):s>=a.length?(o=new Cp(r),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ny=`uniform sampler2D shadow_pass;
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
}`,sy=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],ry=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Pp=new Le,so=new D,md=new D;function ay(r,e,t){let i=new ds,n=new ue,s=new ue,a=new lt,o=new vl,l=new yl,c={},h=t.maxTextureSize,d={[Zi]:ci,[ci]:Zi,[Li]:Li},u=new it({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:iy,fragmentShader:ny}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ot;m.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Te(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vs;let p=this.type;this.render=function(E,x,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Ef&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vs);let R=r.getRenderTarget(),A=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),L=r.state;L.setBlending(hi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=p!==this.type;U&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(O=>O.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,O=E.length;P<O;P++){let B=E[P],H=B.shadow;if(H===void 0){Ie("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);let Z=H.getFrameExtents();n.multiply(Z),s.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/Z.x),n.x=s.x*Z.x,H.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/Z.y),n.y=s.y*Z.y,H.mapSize.y=s.y));let z=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=z,H.map===null||U===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Fr){if(B.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new At(n.x,n.y,{format:gs,type:xt,minFilter:ft,magFilter:ft,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new dn(n.x,n.y,Ai),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=Vn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Et,H.map.depthTexture.magFilter=Et}else B.isPointLight?(H.map=new ao(n.x),H.map.depthTexture=new Aa(n.x,fn)):(H.map=new At(n.x,n.y),H.map.depthTexture=new dn(n.x,n.y,fn)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=Vn,this.type===Vs?(H.map.depthTexture.compareFunction=z?Zh:Jh,H.map.depthTexture.minFilter=ft,H.map.depthTexture.magFilter=ft):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Et,H.map.depthTexture.magFilter=Et);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==n.x||H.map.height!==n.y)&&H.map.setSize(n.x,n.y);let X=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();B.isPointLight!==!0&&H.updateMatrices(B,M);let ee=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:M.layers;for(let pe=0;pe<X;pe++){let Ce=H.getCamera(pe);if(B.isPointLight){let K=H.camera,me=H.matrix,we=B.distance||K.far;we!==K.far&&(K.far=we,K.updateProjectionMatrix()),so.setFromMatrixPosition(B.matrixWorld),K.position.copy(so),md.copy(K.position),md.add(sy[pe]),K.up.copy(ry[pe]),K.lookAt(md),K.updateMatrixWorld(),me.makeTranslation(-so.x,-so.y,-so.z),Pp.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Pp,K.coordinateSystem,K.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,pe),r.clear();else{pe===0&&(r.setRenderTarget(H.map),r.clear());let K=H.getViewport(pe);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),L.viewport(a)}i=H.getFrustum(pe),y(x,M,Ce,B,ee,this.type)}H.isPointLightShadow!==!0&&this.type===Fr&&v(H,M),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(R,A,I)};function v(E,x){let M=e.update(b);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new At(n.x,n.y,{format:gs,type:xt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(x,null,M,u,b,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(x,null,M,f,b,null)}function _(E,x,M,R){let A=null,I=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)A=I;else if(A=M.isPointLight===!0?l:o,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let L=A.uuid,U=x.uuid,P=c[L];P===void 0&&(P={},c[L]=P);let O=P[U];O===void 0&&(O=A.clone(),P[U]=O,x.addEventListener("dispose",w)),A=O}if(A.visible=x.visible,A.wireframe=x.wireframe,R===Fr?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:d[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=r.properties.get(A);L.light=M}return A}function y(E,x,M,R,A,I){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===Fr)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let P=e.update(E),O=E.material;if(Array.isArray(O)){let B=P.groups;for(let H=0,Z=B.length;H<Z;H++){let z=B[H],X=O[z.materialIndex];if(X&&X.visible){let ee=_(E,X,R,I);E.onBeforeShadow(r,E,x,M,P,ee,z),r.renderBufferDirect(M,null,P,ee,E,z),E.onAfterShadow(r,E,x,M,P,ee,z)}}}else if(O.visible){let B=_(E,O,R,I);E.onBeforeShadow(r,E,x,M,P,B,null),r.renderBufferDirect(M,null,P,B,E,null),E.onAfterShadow(r,E,x,M,P,B,null)}}let U=E.children;for(let P=0,O=U.length;P<O;P++)y(U[P],x,M,R,A,I)}function w(E){E.target.removeEventListener("dispose",w);for(let M in c){let R=c[M],A=E.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function oy(r,e){function t(){let N=!1,Q=new lt,Y=null,ce=new lt(0,0,0,0);return{setMask:function(re){Y!==re&&!N&&(r.colorMask(re,re,re,re),Y=re)},setLocked:function(re){N=re},setClear:function(re,le,Fe,je,ie){ie===!0&&(re*=je,le*=je,Fe*=je),Q.set(re,le,Fe,je),ce.equals(Q)===!1&&(r.clearColor(re,le,Fe,je),ce.copy(Q))},reset:function(){N=!1,Y=null,ce.set(-1,0,0,0)}}}function i(){let N=!1,Q=!1,Y=null,ce=null,re=null;return{setReversed:function(le){if(Q!==le){let Fe=e.get("EXT_clip_control");le?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Q=le;let je=re;re=null,this.setClear(je)}},getReversed:function(){return Q},setTest:function(le){le?he(r.DEPTH_TEST):Ue(r.DEPTH_TEST)},setMask:function(le){Y!==le&&!N&&(r.depthMask(le),Y=le)},setFunc:function(le){if(Q&&(le=rp[le]),ce!==le){switch(le){case al:r.depthFunc(r.NEVER);break;case ol:r.depthFunc(r.ALWAYS);break;case ll:r.depthFunc(r.LESS);break;case _r:r.depthFunc(r.LEQUAL);break;case cl:r.depthFunc(r.EQUAL);break;case hl:r.depthFunc(r.GEQUAL);break;case dl:r.depthFunc(r.GREATER);break;case ul:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ce=le}},setLocked:function(le){N=le},setClear:function(le){re!==le&&(re=le,Q&&(le=1-le),r.clearDepth(le))},reset:function(){N=!1,Y=null,ce=null,re=null,Q=!1}}}function n(){let N=!1,Q=null,Y=null,ce=null,re=null,le=null,Fe=null,je=null,ie=null;return{setTest:function(Oe){N||(Oe?he(r.STENCIL_TEST):Ue(r.STENCIL_TEST))},setMask:function(Oe){Q!==Oe&&!N&&(r.stencilMask(Oe),Q=Oe)},setFunc:function(Oe,Ve,xe){(Y!==Oe||ce!==Ve||re!==xe)&&(r.stencilFunc(Oe,Ve,xe),Y=Oe,ce=Ve,re=xe)},setOp:function(Oe,Ve,xe){(le!==Oe||Fe!==Ve||je!==xe)&&(r.stencilOp(Oe,Ve,xe),le=Oe,Fe=Ve,je=xe)},setLocked:function(Oe){N=Oe},setClear:function(Oe){ie!==Oe&&(r.clearStencil(Oe),ie=Oe)},reset:function(){N=!1,Q=null,Y=null,ce=null,re=null,le=null,Fe=null,je=null,ie=null}}}let s=new t,a=new i,o=new n,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],b=null,g=!1,p=null,v=null,_=null,y=null,w=null,E=null,x=null,M=new be(0,0,0),R=0,A=!1,I=null,L=null,U=null,P=null,O=null,B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Z=0,z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=Z>=1):z.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=Z>=2);let X=null,ee={},pe=r.getParameter(r.SCISSOR_BOX),Ce=r.getParameter(r.VIEWPORT),K=new lt().fromArray(pe),me=new lt().fromArray(Ce);function we(N,Q,Y,ce){let re=new Uint8Array(4),le=r.createTexture();r.bindTexture(N,le),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Fe=0;Fe<Y;Fe++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(Q,0,r.RGBA,1,1,ce,0,r.RGBA,r.UNSIGNED_BYTE,re):r.texImage2D(Q+Fe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,re);return le}let Pe={};Pe[r.TEXTURE_2D]=we(r.TEXTURE_2D,r.TEXTURE_2D,1),Pe[r.TEXTURE_CUBE_MAP]=we(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[r.TEXTURE_2D_ARRAY]=we(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Pe[r.TEXTURE_3D]=we(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(r.DEPTH_TEST),a.setFunc(_r),ri(!1),wt(Oh),he(r.CULL_FACE),jt(hi);function he(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function Ue(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function mt(N,Q){return u[N]!==Q?(r.bindFramebuffer(N,Q),u[N]=Q,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Q),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Q),!0):!1}function Be(N,Q){let Y=m,ce=!1;if(N){Y=f.get(Q),Y===void 0&&(Y=[],f.set(Q,Y));let re=N.textures;if(Y.length!==re.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let le=0,Fe=re.length;le<Fe;le++)Y[le]=r.COLOR_ATTACHMENT0+le;Y.length=re.length,ce=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,ce=!0);ce&&r.drawBuffers(Y)}function nt(N){return b!==N?(r.useProgram(N),b=N,!0):!1}let ht={[Qi]:r.FUNC_ADD,[Af]:r.FUNC_SUBTRACT,[Rf]:r.FUNC_REVERSE_SUBTRACT};ht[Cf]=r.MIN,ht[Pf]=r.MAX;let Xe={[Ws]:r.ZERO,[Df]:r.ONE,[If]:r.SRC_COLOR,[kh]:r.SRC_ALPHA,[Of]:r.SRC_ALPHA_SATURATE,[Va]:r.DST_COLOR,[Ga]:r.DST_ALPHA,[Lf]:r.ONE_MINUS_SRC_COLOR,[zh]:r.ONE_MINUS_SRC_ALPHA,[Ff]:r.ONE_MINUS_DST_COLOR,[Nf]:r.ONE_MINUS_DST_ALPHA,[Uf]:r.CONSTANT_COLOR,[Bf]:r.ONE_MINUS_CONSTANT_COLOR,[kf]:r.CONSTANT_ALPHA,[zf]:r.ONE_MINUS_CONSTANT_ALPHA};function jt(N,Q,Y,ce,re,le,Fe,je,ie,Oe){if(N===hi){g===!0&&(Ue(r.BLEND),g=!1);return}if(g===!1&&(he(r.BLEND),g=!0),N!==Dl){if(N!==p||Oe!==A){if((v!==Qi||w!==Qi)&&(r.blendEquation(r.FUNC_ADD),v=Qi,w=Qi),Oe)switch(N){case ps:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ti:r.blendFunc(r.ONE,r.ONE);break;case Uh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ze("WebGLState: Invalid blending: ",N);break}else switch(N){case ps:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ti:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Uh:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bh:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",N);break}_=null,y=null,E=null,x=null,M.set(0,0,0),R=0,p=N,A=Oe}return}re=re||Q,le=le||Y,Fe=Fe||ce,(Q!==v||re!==w)&&(r.blendEquationSeparate(ht[Q],ht[re]),v=Q,w=re),(Y!==_||ce!==y||le!==E||Fe!==x)&&(r.blendFuncSeparate(Xe[Y],Xe[ce],Xe[le],Xe[Fe]),_=Y,y=ce,E=le,x=Fe),(je.equals(M)===!1||ie!==R)&&(r.blendColor(je.r,je.g,je.b,ie),M.copy(je),R=ie),p=N,A=!1}function kt(N,Q){N.side===Li?Ue(r.CULL_FACE):he(r.CULL_FACE);let Y=N.side===ci;Q&&(Y=!Y),ri(Y),N.blending===ps&&N.transparent===!1?jt(hi):jt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);let ce=N.stencilWrite;o.setTest(ce),ce&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Gt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):Ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function ri(N){I!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),I=N)}function wt(N){N!==wf?(he(r.CULL_FACE),N!==L&&(N===Oh?r.cullFace(r.BACK):N===Tf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ue(r.CULL_FACE),L=N}function Fi(N){N!==U&&(H&&r.lineWidth(N),U=N)}function Gt(N,Q,Y){N?(he(r.POLYGON_OFFSET_FILL),(P!==Q||O!==Y)&&(P=Q,O=Y,a.getReversed()&&(Q=-Q,Y=-Y),r.polygonOffset(Q,Y))):Ue(r.POLYGON_OFFSET_FILL)}function mi(N){N?he(r.SCISSOR_TEST):Ue(r.SCISSOR_TEST)}function gi(N){N===void 0&&(N=r.TEXTURE0+B-1),X!==N&&(r.activeTexture(N),X=N)}function xi(N,Q,Y){Y===void 0&&(X===null?Y=r.TEXTURE0+B-1:Y=X);let ce=ee[Y];ce===void 0&&(ce={type:void 0,texture:void 0},ee[Y]=ce),(ce.type!==N||ce.texture!==Q)&&(X!==Y&&(r.activeTexture(Y),X=Y),r.bindTexture(N,Q||Pe[N]),ce.type=N,ce.texture=Q)}function k(){let N=ee[X];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function bi(){try{r.compressedTexImage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function _t(){try{r.compressedTexImage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function Mt(){try{r.texSubImage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function oe(){try{r.texSubImage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function It(){try{r.compressedTexSubImage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function Ne(){try{r.compressedTexSubImage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function ke(){try{r.texStorage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function C(){try{r.texStorage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function S(){try{r.texImage2D(...arguments)}catch(N){ze("WebGLState:",N)}}function G(){try{r.texImage3D(...arguments)}catch(N){ze("WebGLState:",N)}}function te(N){return d[N]!==void 0?d[N]:r.getParameter(N)}function $(N,Q){d[N]!==Q&&(r.pixelStorei(N,Q),d[N]=Q)}function ne(N){K.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),K.copy(N))}function ae(N){me.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),me.copy(N))}function j(N,Q){let Y=c.get(Q);Y===void 0&&(Y=new WeakMap,c.set(Q,Y));let ce=Y.get(N);ce===void 0&&(ce=r.getUniformBlockIndex(Q,N.name),r.uniformBlockBinding(Q,ce,ce),Y.set(N,ce))}function J(N,Q,Y){let re=c.get(Q).get(N);l[re]!==Y&&(r.bindBufferBase(r.UNIFORM_BUFFER,re,Y),l[re]=Y)}function se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},X=null,ee={},u={},l={},f=new WeakMap,m=[],b=null,g=!1,p=null,v=null,_=null,y=null,w=null,E=null,x=null,M=new be(0,0,0),R=0,A=!1,I=null,L=null,U=null,P=null,O=null,K.set(0,0,r.canvas.width,r.canvas.height),me.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:he,disable:Ue,bindFramebuffer:mt,drawBuffers:Be,useProgram:nt,setBlending:jt,setMaterial:kt,setFlipSided:ri,setCullFace:wt,setLineWidth:Fi,setPolygonOffset:Gt,setScissorTest:mi,activeTexture:gi,bindTexture:xi,unbindTexture:k,compressedTexImage2D:bi,compressedTexImage3D:_t,texImage2D:S,texImage3D:G,pixelStorei:$,getParameter:te,updateUBOMapping:j,uniformBlockBinding:J,texStorage2D:ke,texStorage3D:C,texSubImage2D:Mt,texSubImage3D:oe,compressedTexSubImage2D:It,compressedTexSubImage3D:Ne,scissor:ne,viewport:ae,reset:se}}function ly(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,b=new FinalizationRegistry(C=>m.delete(C)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,S){return g?new OffscreenCanvas(C,S):wr("canvas")}function v(C,S,G){let te=1,$=ke(C);if(($.width>G||$.height>G)&&(te=G/Math.max($.width,$.height)),te<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ne=Math.floor(te*$.width),ae=Math.floor(te*$.height);u===void 0&&(u=p(ne,ae));let j=S?p(ne,ae):u;return j.width=ne,j.height=ae,j.getContext("2d").drawImage(C,0,0,ne,ae),Ie("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ne+"x"+ae+")."),j}else return"data"in C&&Ie("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function _(C){return C.generateMipmaps}function y(C){r.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(C,S,G,te,$,ne=!1){if(C!==null){if(r[C]!==void 0)return r[C];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ae;te&&(ae=e.get("EXT_texture_norm16"),ae||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=S;if(S===r.RED&&(G===r.FLOAT&&(j=r.R32F),G===r.HALF_FLOAT&&(j=r.R16F),G===r.UNSIGNED_BYTE&&(j=r.R8),G===r.UNSIGNED_SHORT&&ae&&(j=ae.R16_EXT),G===r.SHORT&&ae&&(j=ae.R16_SNORM_EXT)),S===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.R8UI),G===r.UNSIGNED_SHORT&&(j=r.R16UI),G===r.UNSIGNED_INT&&(j=r.R32UI),G===r.BYTE&&(j=r.R8I),G===r.SHORT&&(j=r.R16I),G===r.INT&&(j=r.R32I)),S===r.RG&&(G===r.FLOAT&&(j=r.RG32F),G===r.HALF_FLOAT&&(j=r.RG16F),G===r.UNSIGNED_BYTE&&(j=r.RG8),G===r.UNSIGNED_SHORT&&ae&&(j=ae.RG16_EXT),G===r.SHORT&&ae&&(j=ae.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RG8UI),G===r.UNSIGNED_SHORT&&(j=r.RG16UI),G===r.UNSIGNED_INT&&(j=r.RG32UI),G===r.BYTE&&(j=r.RG8I),G===r.SHORT&&(j=r.RG16I),G===r.INT&&(j=r.RG32I)),S===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RGB8UI),G===r.UNSIGNED_SHORT&&(j=r.RGB16UI),G===r.UNSIGNED_INT&&(j=r.RGB32UI),G===r.BYTE&&(j=r.RGB8I),G===r.SHORT&&(j=r.RGB16I),G===r.INT&&(j=r.RGB32I)),S===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),G===r.UNSIGNED_INT&&(j=r.RGBA32UI),G===r.BYTE&&(j=r.RGBA8I),G===r.SHORT&&(j=r.RGBA16I),G===r.INT&&(j=r.RGBA32I)),S===r.RGB&&(G===r.UNSIGNED_SHORT&&ae&&(j=ae.RGB16_EXT),G===r.SHORT&&ae&&(j=ae.RGB16_SNORM_EXT),G===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(j=r.R11F_G11F_B10F)),S===r.RGBA){let J=ne?ma:We.getTransfer($);G===r.FLOAT&&(j=r.RGBA32F),G===r.HALF_FLOAT&&(j=r.RGBA16F),G===r.UNSIGNED_BYTE&&(j=J===ot?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT&&ae&&(j=ae.RGBA16_EXT),G===r.SHORT&&ae&&(j=ae.RGBA16_SNORM_EXT),G===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(C,S){let G;return C?S===null||S===fn||S===$n?G=r.DEPTH24_STENCIL8:S===Ai?G=r.DEPTH32F_STENCIL8:S===Br&&(G=r.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===fn||S===$n?G=r.DEPTH_COMPONENT24:S===Ai?G=r.DEPTH_COMPONENT32F:S===Br&&(G=r.DEPTH_COMPONENT16),G}function M(C,S){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==Et&&C.minFilter!==ft?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function R(C){let S=new WeakRef(C);i.get(C).__ref=S,m.add(S),b.register(C,S,S)}function A(C){let S=i.get(C).__ref;S!==void 0&&(m.delete(S),b.unregister(S))}function I(C){U(C.target)}function L(C){P(C.target)}function U(C){C.removeEventListener("dispose",I),A(C),B(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function P(C){C.removeEventListener("dispose",L),A(C),Z(C)}function O(){for(let C of m){let S=C.deref();S!==void 0&&(S.isRenderTarget===!0?P(S):U(S))}m.clear(),d.clear()}function B(C){let S=i.get(C);if(S.__webglInit===void 0)return;let G=C.source,te=f.get(G);if(te){let $=te[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&H(C),Object.keys(te).length===0&&f.delete(G)}i.remove(C)}function H(C){let S=i.get(C);r.deleteTexture(S.__webglTexture);let G=C.source,te=f.get(G);delete te[S.__cacheKey],a.memory.textures--}function Z(C){let S=i.get(C);S.__depthDisposeCallback&&S.__depthDisposeCallback();let G=C.depthTexture;if(G&&G.renderTarget===C&&U(G),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let ne=0;ne<S.__webglFramebuffer[$].length;ne++)r.deleteFramebuffer(S.__webglFramebuffer[$][ne]);else r.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)r.deleteFramebuffer(S.__webglFramebuffer[$]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let te=C.textures;for(let $=0,ne=te.length;$<ne;$++){let ae=i.get(te[$]);ae.__webglTexture&&(r.deleteTexture(ae.__webglTexture),a.memory.textures--),i.remove(te[$])}i.remove(C)}let z=0;function X(){z=0}function ee(){return z}function pe(C){z=C}function Ce(){let C=z;return C>=n.maxTextures&&Ie("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+n.maxTextures),z+=1,C}function K(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.mipmapsAutoUpdate),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function me(C,S){let G=i.get(C);if(C.isVideoTexture&&It(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){let te=C.image;if(te===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{kt(G,C,S);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+S)}function we(C,S){let G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){kt(G,C,S);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+S)}function Pe(C,S){let G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){kt(G,C,S);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+S)}function he(C,S){let G=i.get(C);if(C.version>0&&G.__version!==C.version){ri(G,C,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+S)}let Ue={[Qt]:r.REPEAT,[Oi]:r.CLAMP_TO_EDGE,[Mr]:r.MIRRORED_REPEAT},mt={[Et]:r.NEAREST,[Ll]:r.NEAREST_MIPMAP_NEAREST,[js]:r.NEAREST_MIPMAP_LINEAR,[ft]:r.LINEAR,[Ur]:r.LINEAR_MIPMAP_NEAREST,[Ni]:r.LINEAR_MIPMAP_LINEAR},Be={[Zf]:r.NEVER,[Qh]:r.ALWAYS,[Qf]:r.LESS,[Jh]:r.LEQUAL,[$f]:r.EQUAL,[Zh]:r.GEQUAL,[ep]:r.GREATER,[tp]:r.NOTEQUAL};function nt(C,S){if(S.type===Ai&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ft||S.magFilter===Ur||S.magFilter===js||S.magFilter===Ni||S.minFilter===ft||S.minFilter===Ur||S.minFilter===js||S.minFilter===Ni)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Ue[S.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Ue[S.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Ue[S.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,mt[S.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,mt[S.minFilter]),S.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Be[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Et||S.minFilter!==js&&S.minFilter!==Ni||S.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ht(C,S){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",I),R(S));let te=S.source,$=f.get(te);$===void 0&&($={},f.set(te,$));let ne=K(S);if(ne!==C.__cacheKey){$[ne]===void 0&&($[ne]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),$[ne].usedTimes++;let ae=$[C.__cacheKey];ae!==void 0&&($[C.__cacheKey].usedTimes--,ae.usedTimes===0&&H(S)),C.__cacheKey=ne,C.__webglTexture=$[ne].texture}return G}function Xe(C,S,G){return Math.floor(Math.floor(C/G)/S)}function jt(C,S,G,te){let ne=C.updateRanges;if(ne.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,G,te,S.data);else{ne.sort((N,Q)=>N.start-Q.start);let ae=0;for(let N=1;N<ne.length;N++){let Q=ne[ae],Y=ne[N],ce=Q.start+Q.count,re=Xe(Y.start,S.width,4),le=Xe(Q.start,S.width,4);Y.start<=ce+1&&re===le&&Xe(Y.start+Y.count-1,S.width,4)===re?Q.count=Math.max(Q.count,Y.start+Y.count-Q.start):(++ae,ne[ae]=Y)}ne.length=ae+1;let j=t.getParameter(r.UNPACK_ROW_LENGTH),J=t.getParameter(r.UNPACK_SKIP_PIXELS),se=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let N=0,Q=ne.length;N<Q;N++){let Y=ne[N],ce=Math.floor(Y.start/4),re=Math.ceil(Y.count/4),le=ce%S.width,Fe=Math.floor(ce/S.width),je=re,ie=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,le),t.pixelStorei(r.UNPACK_SKIP_ROWS,Fe),t.texSubImage2D(r.TEXTURE_2D,0,le,Fe,je,ie,G,te,S.data)}C.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,j),t.pixelStorei(r.UNPACK_SKIP_PIXELS,J),t.pixelStorei(r.UNPACK_SKIP_ROWS,se)}}function kt(C,S,G){let te=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=r.TEXTURE_3D);let $=ht(C,S),ne=S.source;t.bindTexture(te,C.__webglTexture,r.TEXTURE0+G);let ae=i.get(ne);if(ne.version!==ae.__version||$===!0){if(t.activeTexture(r.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ie=We.getPrimaries(We.workingColorSpace),Oe=S.colorSpace===mn?null:We.getPrimaries(S.colorSpace),Ve=S.colorSpace===mn||ie===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let J=v(S.image,!1,n.maxTextureSize);J=Ne(S,J);let se=s.convert(S.format,S.colorSpace),N=s.convert(S.type),Q=E(S.internalFormat,se,N,S.normalized,S.colorSpace,S.isVideoTexture);nt(te,S);let Y,ce=S.mipmaps,re=S.isVideoTexture!==!0,le=ae.__version===void 0||$===!0,Fe=ne.dataReady,je=M(S,J);if(S.isDepthTexture)Q=x(S.format===pn,S.type),le&&(re?t.texStorage2D(r.TEXTURE_2D,1,Q,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,Q,J.width,J.height,0,se,N,null));else if(S.isDataTexture)if(ce.length>0){re&&le&&t.texStorage2D(r.TEXTURE_2D,je,Q,ce[0].width,ce[0].height);for(let ie=0,Oe=ce.length;ie<Oe;ie++)Y=ce[ie],re?Fe&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,Y.width,Y.height,se,N,Y.data):t.texImage2D(r.TEXTURE_2D,ie,Q,Y.width,Y.height,0,se,N,Y.data);S.generateMipmaps=!1}else re?(le&&t.texStorage2D(r.TEXTURE_2D,je,Q,J.width,J.height),Fe&&jt(S,J,se,N)):t.texImage2D(r.TEXTURE_2D,0,Q,J.width,J.height,0,se,N,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){re&&le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,je,Q,ce[0].width,ce[0].height,J.depth);for(let ie=0,Oe=ce.length;ie<Oe;ie++)if(Y=ce[ie],S.format!==Ri)if(se!==null)if(re){if(Fe)if(S.layerUpdates.size>0){let Ve=ld(Y.width,Y.height,S.format,S.type);for(let xe of S.layerUpdates){let gt=Y.data.subarray(xe*Ve/Y.data.BYTES_PER_ELEMENT,(xe+1)*Ve/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,xe,Y.width,Y.height,1,se,gt)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,Y.width,Y.height,J.depth,se,Y.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ie,Q,Y.width,Y.height,J.depth,0,Y.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?Fe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,Y.width,Y.height,J.depth,se,N,Y.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ie,Q,Y.width,Y.height,J.depth,0,se,N,Y.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{re&&le&&t.texStorage2D(r.TEXTURE_2D,je,Q,ce[0].width,ce[0].height);for(let ie=0,Oe=ce.length;ie<Oe;ie++)Y=ce[ie],S.format!==Ri?se!==null?re?Fe&&t.compressedTexSubImage2D(r.TEXTURE_2D,ie,0,0,Y.width,Y.height,se,Y.data):t.compressedTexImage2D(r.TEXTURE_2D,ie,Q,Y.width,Y.height,0,Y.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?Fe&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,Y.width,Y.height,se,N,Y.data):t.texImage2D(r.TEXTURE_2D,ie,Q,Y.width,Y.height,0,se,N,Y.data)}else if(S.isDataArrayTexture)if(re){if(le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,je,Q,J.width,J.height,J.depth),Fe)if(S.layerUpdates.size>0){let ie=ld(J.width,J.height,S.format,S.type);for(let Oe of S.layerUpdates){let Ve=J.data.subarray(Oe*ie/J.data.BYTES_PER_ELEMENT,(Oe+1)*ie/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Oe,J.width,J.height,1,se,N,Ve)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,se,N,J.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Q,J.width,J.height,J.depth,0,se,N,J.data);else if(S.isData3DTexture)re?(le&&t.texStorage3D(r.TEXTURE_3D,je,Q,J.width,J.height,J.depth),Fe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,se,N,J.data)):t.texImage3D(r.TEXTURE_3D,0,Q,J.width,J.height,J.depth,0,se,N,J.data);else if(S.isFramebufferTexture){if(le)if(re)t.texStorage2D(r.TEXTURE_2D,je,Q,J.width,J.height);else{let ie=J.width,Oe=J.height;for(let Ve=0;Ve<je;Ve++)t.texImage2D(r.TEXTURE_2D,Ve,Q,ie,Oe,0,se,N,null),ie>>=1,Oe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){let ie=r.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),J.parentNode!==ie){ie.appendChild(J),d.add(S),ie.onpaint=Oe=>{let Ve=Oe.changedElements;for(let xe of d)Ve.includes(xe.image)&&(xe.needsUpdate=!0)},ie.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,J);else{let Ve=r.RGBA,xe=r.RGBA,gt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ve,xe,gt,J)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ce.length>0){if(re&&le){let ie=ke(ce[0]);t.texStorage2D(r.TEXTURE_2D,je,Q,ie.width,ie.height)}for(let ie=0,Oe=ce.length;ie<Oe;ie++)Y=ce[ie],re?Fe&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,se,N,Y):t.texImage2D(r.TEXTURE_2D,ie,Q,se,N,Y);S.generateMipmaps=!1}else if(re){if(le){let ie=ke(J);t.texStorage2D(r.TEXTURE_2D,je,Q,ie.width,ie.height)}Fe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se,N,J)}else t.texImage2D(r.TEXTURE_2D,0,Q,se,N,J);_(S)&&S.mipmapsAutoUpdate===!0&&y(te),ae.__version=ne.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ri(C,S,G){if(S.image.length!==6)return;let te=ht(C,S),$=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+G);let ne=i.get($);if($.version!==ne.__version||te===!0){t.activeTexture(r.TEXTURE0+G);let ae=We.getPrimaries(We.workingColorSpace),j=S.colorSpace===mn?null:We.getPrimaries(S.colorSpace),J=S.colorSpace===mn||ae===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let se=S.isCompressedTexture||S.image[0].isCompressedTexture,N=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let xe=0;xe<6;xe++)!se&&!N?Q[xe]=v(S.image[xe],!0,n.maxCubemapSize):Q[xe]=N?S.image[xe].image:S.image[xe],Q[xe]=Ne(S,Q[xe]);let Y=Q[0],ce=s.convert(S.format,S.colorSpace),re=s.convert(S.type),le=E(S.internalFormat,ce,re,S.normalized,S.colorSpace),Fe=S.isVideoTexture!==!0,je=ne.__version===void 0||te===!0,ie=$.dataReady,Oe=M(S,Y);nt(r.TEXTURE_CUBE_MAP,S);let Ve;if(S.isDepthTexture){if(le=x(S.format===pn,S.type),je)if(Fe)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,le,Y.width,Y.height);else for(let xe=0;xe<6;xe++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,le,Y.width,Y.height,0,ce,re,null)}else if(se){Fe&&je&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,le,Y.width,Y.height);for(let xe=0;xe<6;xe++){Ve=Q[xe].mipmaps;for(let gt=0;gt<Ve.length;gt++){let ai=Ve[gt];S.format!==Ri?ce!==null?Fe?ie&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,gt,0,0,ai.width,ai.height,ce,ai.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,gt,le,ai.width,ai.height,0,ai.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,gt,0,0,ai.width,ai.height,ce,re,ai.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,gt,le,ai.width,ai.height,0,ce,re,ai.data)}}}else{if(Ve=S.mipmaps,Fe&&je){Ve.length>0&&Oe++;let xe=ke(Q[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,le,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(N){Fe?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Q[xe].width,Q[xe].height,ce,re,Q[xe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,le,Q[xe].width,Q[xe].height,0,ce,re,Q[xe].data);for(let gt=0;gt<Ve.length;gt++){let ts=Ve[gt].image[xe].image;Fe?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,gt+1,0,0,ts.width,ts.height,ce,re,ts.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,gt+1,le,ts.width,ts.height,0,ce,re,ts.data)}}else{Fe?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ce,re,Q[xe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,le,ce,re,Q[xe]);for(let gt=0;gt<Ve.length;gt++){let ai=Ve[gt];Fe?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,gt+1,0,0,ce,re,ai.image[xe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,gt+1,le,ce,re,ai.image[xe])}}}_(S)&&S.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),ne.__version=$.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function wt(C,S,G,te,$,ne){let ae=s.convert(G.format,G.colorSpace),j=s.convert(G.type),J=E(G.internalFormat,ae,j,G.normalized,G.colorSpace),se=i.get(S),N=i.get(G);if(N.__renderTarget=S,!se.__hasExternalTextures){let Q=Math.max(1,S.width>>ne),Y=Math.max(1,S.height>>ne);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,ne,J,Q,Y,S.depth,0,ae,j,null):t.texImage2D($,ne,J,Q,Y,0,ae,j,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),oe(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,$,N.__webglTexture,0,Mt(S)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,$,N.__webglTexture,ne),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Fi(C,S,G){if(r.bindRenderbuffer(r.RENDERBUFFER,C),S.depthBuffer){let te=S.depthTexture,$=te&&te.isDepthTexture?te.type:null,ne=x(S.stencilBuffer,$),ae=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;oe(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Mt(S),ne,S.width,S.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt(S),ne,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ne,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,C)}else{let te=S.textures;for(let $=0;$<te.length;$++){let ne=te[$],ae=s.convert(ne.format,ne.colorSpace),j=s.convert(ne.type),J=E(ne.internalFormat,ae,j,ne.normalized,ne.colorSpace);oe(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Mt(S),J,S.width,S.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt(S),J,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,J,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Gt(C,S,G){let te=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=i.get(S.depthTexture);$.__renderTarget=S;let ne=te?S.depthTexture.image[0]:S.depthTexture.image;(!$.__webglTexture||ne.width!==S.width||ne.height!==S.height)&&(ne.width=S.width,ne.height=S.height,S.depthTexture.needsUpdate=!0),te?he(S.depthTexture,0):me(S.depthTexture,0);let ae=$.__webglTexture,j=Mt(S),J=te?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,se=S.depthTexture.format===pn?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===Vn)oe(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,J,ae,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,se,J,ae,0);else if(S.depthTexture.format===pn)oe(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,J,ae,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,se,J,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function mi(C){let S=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let te=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),te){let $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,te.removeEventListener("dispose",$)};te.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=te}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let te=0;te<6;te++)Gt(S.__webglFramebuffer[te],C,te);else C.texture.mipmaps.length>0?Gt(S.__webglFramebuffer[0],C,0):Gt(S.__webglFramebuffer,C,0);else if(G){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]===void 0)S.__webglDepthbuffer[te]=r.createRenderbuffer(),Fi(S.__webglDepthbuffer[te],C,!1);else{let $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer[te];r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ne)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Fi(S.__webglDepthbuffer,C,!1);else{let $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ne)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function gi(C,S,G){let te=i.get(C);S!==void 0&&wt(te.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&mi(C)}function xi(C){let S=C.texture,G=i.get(C),te=i.get(S);C.addEventListener("dispose",L),R(C);let $=C.textures,ne=C.isWebGLCubeRenderTarget===!0,ae=$.length>1;if(ae||(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=S.version,a.memory.textures++),ne){G.__webglFramebuffer=[];for(let j=0;j<6;j++)if(S.mipmaps.length>0){G.__webglFramebuffer[j]=[];for(let J=0;J<S.mipmaps.length;J++)G.__webglFramebuffer[j][J]=r.createFramebuffer()}else G.__webglFramebuffer[j]=r.createFramebuffer()}else{if(S.mipmaps.length>0){G.__webglFramebuffer=[];for(let j=0;j<S.mipmaps.length;j++)G.__webglFramebuffer[j]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(ae)for(let j=0,J=$.length;j<J;j++){let se=i.get($[j]);se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&oe(C)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let j=0;j<$.length;j++){let J=$[j];G.__webglColorRenderbuffer[j]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[j]);let se=s.convert(J.format,J.colorSpace),N=s.convert(J.type),Q=E(J.internalFormat,se,N,J.normalized,J.colorSpace,C.isXRRenderTarget===!0),Y=Mt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Y,Q,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+j,r.RENDERBUFFER,G.__webglColorRenderbuffer[j])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Fi(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ne){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),nt(r.TEXTURE_CUBE_MAP,S);for(let j=0;j<6;j++)if(S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)wt(G.__webglFramebuffer[j][J],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,J);else wt(G.__webglFramebuffer[j],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);_(S)?y(r.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(ae){for(let j=0,J=$.length;j<J;j++){let se=$[j],N=i.get(se),Q=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Q,N.__webglTexture),nt(Q,se),wt(G.__webglFramebuffer,C,se,r.COLOR_ATTACHMENT0+j,Q,0),_(se)&&y(Q)}t.unbindTexture()}else{let j=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(j,te.__webglTexture),nt(j,S),S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)wt(G.__webglFramebuffer[J],C,S,r.COLOR_ATTACHMENT0,j,J);else wt(G.__webglFramebuffer,C,S,r.COLOR_ATTACHMENT0,j,0);_(S)?y(j):S.mipmaps.length>0&&r.texParameteri(j,r.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&mi(C)}function k(C){let S=C.textures;for(let G=0,te=S.length;G<te;G++){let $=S[G];if(_($)&&$.mipmapsAutoUpdate===!0){let ne=w(C),ae=i.get($).__webglTexture;t.bindTexture(ne,ae),y(ne),t.unbindTexture()}}}let bi=[];function _t(C){if(C.samples>0){if(oe(C)===!1){let S=C.textures,G=C.width,te=C.height,$=r.COLOR_BUFFER_BIT,ne=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=i.get(C),j=S.length>1;if(j)for(let se=0;se<S.length;se++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let se=0;se<S.length;se++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),j){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[se]);let N=i.get(S[se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,N,0)}r.blitFramebuffer(0,0,G,te,0,0,G,te,$,r.NEAREST),l===!0&&(bi.length=0,bi.push(r.COLOR_ATTACHMENT0+se),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&bi.push(ne),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,bi))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),j)for(let se=0;se<S.length;se++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,ae.__webglColorRenderbuffer[se]);let N=i.get(S[se]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,N,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let S=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Mt(C){return Math.min(n.maxSamples,C.samples)}function oe(C){let S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function It(C){let S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Ne(C,S){let G=C.colorSpace,te=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==ei&&G!==mn&&(We.getTransfer(G)===ot?(te!==Ri||$!==Ei)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",G)),S}function ke(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Ce,this.resetTextureUnits=X,this.getTextureUnits=ee,this.setTextureUnits=pe,this.setTexture2D=me,this.setTexture2DArray=we,this.setTexture3D=Pe,this.setTextureCube=he,this.rebindTextures=gi,this.setupRenderTarget=xi,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=mi,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=oe,this.dispose=O}function cy(r,e){function t(i,n=mn){let s,a=We.getTransfer(n);if(i===Ei)return r.UNSIGNED_BYTE;if(i===Fl)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Ol)return r.UNSIGNED_SHORT_5_5_5_1;if(i===qh)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Xh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Vh)return r.BYTE;if(i===Wh)return r.SHORT;if(i===Br)return r.UNSIGNED_SHORT;if(i===Nl)return r.INT;if(i===fn)return r.UNSIGNED_INT;if(i===Ai)return r.FLOAT;if(i===xt)return r.HALF_FLOAT;if(i===jh)return r.ALPHA;if(i===Yh)return r.RGB;if(i===Ri)return r.RGBA;if(i===Vn)return r.DEPTH_COMPONENT;if(i===pn)return r.DEPTH_STENCIL;if(i===Ul)return r.RED;if(i===Bl)return r.RED_INTEGER;if(i===gs)return r.RG;if(i===kl)return r.RG_INTEGER;if(i===zl)return r.RGBA_INTEGER;if(i===Ja||i===Za||i===Qa||i===$a)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ja)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ja)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Za)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$a)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hl||i===Gl||i===Vl||i===Wl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Hl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ql||i===Xl||i===jl||i===Yl||i===Kl||i===eo||i===Jl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ql||i===Xl)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===jl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Yl)return s.COMPRESSED_R11_EAC;if(i===Kl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===eo)return s.COMPRESSED_RG11_EAC;if(i===Jl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zl||i===Ql||i===$l||i===ec||i===tc||i===ic||i===nc||i===sc||i===rc||i===ac||i===oc||i===lc||i===cc||i===hc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ql)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$l)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ec)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ic)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ac)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===oc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dc||i===uc||i===fc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===dc)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pc||i===mc||i===to||i===gc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===pc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===mc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===to)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$n?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}var hy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dy=`
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

}`,Md=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ra(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new it({vertexShader:hy,fragmentShader:dy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Te(new ki(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sd=class extends cn{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,b=typeof XRWebGLBinding<"u",g=new Md,p={},v=t.getContextAttributes(),_=null,y=null,w=[],E=[],x=new ue,M=null,R=null,A=new Vt;A.viewport=new lt;let I=new Vt;I.viewport=new lt;let L=[A,I],U=new Al,P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let me=w[K];return me===void 0&&(me=new Ar,w[K]=me),me.getTargetRaySpace()},this.getControllerGrip=function(K){let me=w[K];return me===void 0&&(me=new Ar,w[K]=me),me.getGripSpace()},this.getHand=function(K){let me=w[K];return me===void 0&&(me=new Ar,w[K]=me),me.getHandSpace()};function B(K){let me=E.indexOf(K.inputSource);if(me===-1)return;let we=w[me];we!==void 0&&(we.update(K.inputSource,K.frame,c||a),we.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",Z);for(let K=0;K<w.length;K++){let me=E[K];me!==null&&(E[K]=null,w[K].disconnect(me))}P=null,O=null,g.reset();for(let K in p)delete p[K];if(e.setRenderTarget(_),f=null,u=null,d=null,n=null,y=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(x.width,x.height,!1),R!==null){let K=R.camera;K.fov=R.fov,K.zoom=R.zoom,K.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(n,t)),d},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(_=e.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",H),n.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(x),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Pe=null,he=null;v.depth&&(he=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=v.stencil?pn:Vn,Pe=v.stencil?$n:fn);let Ue={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Ue),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new At(u.textureWidth,u.textureHeight,{format:Ri,type:Ei,depthTexture:new dn(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let we={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,we),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new At(f.framebufferWidth,f.framebufferHeight,{format:Ri,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Ce.setContext(n),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(K){for(let me=0;me<K.removed.length;me++){let we=K.removed[me],Pe=E.indexOf(we);Pe>=0&&(E[Pe]=null,w[Pe].disconnect(we))}for(let me=0;me<K.added.length;me++){let we=K.added[me],Pe=E.indexOf(we);if(Pe===-1){for(let Ue=0;Ue<w.length;Ue++)if(Ue>=E.length){E.push(we),Pe=Ue;break}else if(E[Ue]===null){E[Ue]=we,Pe=Ue;break}if(Pe===-1)break}let he=w[Pe];he&&he.connect(we)}}function z(K,me){me===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(me.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let me=K.near,we=K.far;g.texture!==null&&(g.depthNear>0&&(me=g.depthNear),g.depthFar>0&&(we=g.depthFar)),U.near=I.near=A.near=me,U.far=I.far=A.far=we,(P!==U.near||O!==U.far)&&(n.updateRenderState({depthNear:U.near,depthFar:U.far}),P=U.near,O=U.far),U.layers.mask=K.layers.mask|6,A.layers.mask=U.layers.mask&-5,I.layers.mask=U.layers.mask&-3;let Pe=K.parent,he=U.cameras;z(U,Pe);for(let Ue=0;Ue<he.length;Ue++)z(he[Ue],Pe);U.projectionMatrix.copy(A.projectionMatrix),U.projectionMatrixInverse.copy(A.projectionMatrixInverse),R===null&&K.isPerspectiveCamera&&(R={camera:K,fov:K.fov,zoom:K.zoom}),X(K,U,Pe)};function X(K,me,we){we===null?K.matrix.copy(me.matrixWorld):(K.matrix.copy(we.matrixWorld),K.matrix.invert(),K.matrix.multiply(me.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(me.projectionMatrix),K.projectionMatrixInverse.copy(me.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ls*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(K){return p[K]};let ee=null;function pe(K,me){if(h=me.getViewerPose(c||a),m=me,h!==null){let we=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Pe=!1;we.length!==U.cameras.length&&(U.cameras.length=0,Pe=!0);for(let Be=0;Be<we.length;Be++){let nt=we[Be],ht=null;if(f!==null)ht=f.getViewport(nt);else{let jt=d.getViewSubImage(u,nt);ht=jt.viewport,Be===0&&(e.setRenderTargetTextures(y,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(y))}let Xe=L[Be];Xe===void 0&&(Xe=new Vt,Xe.layers.enable(Be),Xe.viewport=new lt,L[Be]=Xe),Xe.matrix.fromArray(nt.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(nt.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(ht.x,ht.y,ht.width,ht.height),Be===0&&(U.matrix.copy(Xe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Pe===!0&&U.cameras.push(Xe)}let he=n.enabledFeatures;if(he&&he.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&b){d=i.getBinding();let Be=d.getDepthInformation(we[0]);Be&&Be.isValid&&Be.texture&&g.init(Be,n.renderState)}if(he&&he.includes("camera-access")&&b){e.state.unbindTexture(),d=i.getBinding();for(let Be=0;Be<we.length;Be++){let nt=we[Be].camera;if(nt){let ht=p[nt];ht||(ht=new Ra,p[nt]=ht);let Xe=d.getCameraImage(nt);ht.sourceTexture=Xe}}}}for(let we=0;we<w.length;we++){let Pe=E[we],he=w[we];Pe!==null&&he!==void 0&&he.update(Pe,me,c||a)}ee&&ee(K,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),m=null}let Ce=new Dp;Ce.setAnimationLoop(pe),this.setAnimationLoop=function(K){ee=K},this.dispose=function(){}}},uy=new Le,Hp=new He;Hp.set(-1,0,0,0,1,0,0,0,1);function fy(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,rd(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,v,_,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),b(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,v,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ci&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ci&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),_=v.envMap,y=v.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(uy.makeRotationFromEuler(y)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Hp),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ci&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function py(r,e,t,i){let n={},s={};function a(v,_){let y=_.program;i.uniformBlockBinding(v,y,n[v.id])}function o(v,_){let y=n[v.id];y===void 0&&(m(v),y=l(v),n[v.id]=y,v.addEventListener("dispose",g));let w=_.program;i.updateUBOMapping(v,w);let E=e.render.frame;s[v.id]!==E&&(c(v),s[v.id]=E)}function l(v){let _=r.createBuffer(),y=v.__size,w=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,y,w),r.bindBuffer(r.UNIFORM_BUFFER,null),_}function c(v){let _=n[v.id],y=v.uniforms,w=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let E=0,x=y.length;E<x;E++){let M=y[E];if(Array.isArray(M))for(let R=0,A=M.length;R<A;R++)h(M[R],E,R,w);else h(M,E,0,w)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(v,_,y,w){if(u(v,_,y,w)===!0){let E=v.__offset,x=v.value;if(Array.isArray(x)){let M=0;for(let R=0;R<x.length;R++){let A=x[R],I=b(A,!0);d(A,v.__data,M),M+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,v.__data)}}function d(v,_,y){typeof v=="number"||typeof v=="boolean"?_[y]=v:v.isMatrix3?(_[y]=v.elements[0],_[y+1]=v.elements[1],_[y+2]=v.elements[2],_[y+3]=0,_[y+4]=v.elements[3],_[y+5]=v.elements[4],_[y+6]=v.elements[5],_[y+7]=0,_[y+8]=v.elements[6],_[y+9]=v.elements[7],_[y+10]=v.elements[8],_[y+11]=0):ArrayBuffer.isView(v)?_.set(v.subarray(0,_.length-y),y):v.toArray(_,y)}function u(v,_,y,w){let E=v.value,x=_+"_"+y;if(Array.isArray(E)){w[x]===void 0&&(w[x]=[]);let M=w[x],R=!1;for(let A=0;A<E.length;A++)f(E[A],M,A)===!0&&(R=!0);return R}return f(E,w,x)}function f(v,_,y){if(_[y]===void 0)return typeof v=="number"||typeof v=="boolean"?_[y]=v:ArrayBuffer.isView(v)?_[y]=v.slice():_[y]=v.clone(),!0;{let w=_[y];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return _[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function m(v){let _=v.uniforms,y=0,w=16;for(let x=0,M=_.length;x<M;x++){let R=Array.isArray(_[x])?_[x]:[_[x]];for(let A=0,I=R.length;A<I;A++){let L=R[A],U=Array.isArray(L.value)?L.value:[L.value],P=Array.isArray(_[x])||Array.isArray(L.value),O=y;for(let H=0,Z=U.length;H<Z;H++){let z=U[H],X=b(z,P),ee=y%w,pe=ee%X.boundary,Ce=ee+pe;y+=pe,Ce!==0&&w-Ce<X.storage&&(y+=w-Ce),H===0&&(O=y),y+=X.storage}let B=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new B((y-O)/Float32Array.BYTES_PER_ELEMENT),L.__offset=O}}let E=y%w;return E>0&&(y+=w-E),v.__size=y,v.__cache={},this}function b(v,_){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",v),_===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(v){let _=v.target;_.removeEventListener("dispose",g),r.deleteBuffer(n[_.id]),delete n[_.id],delete s[_.id]}function p(){for(let v in n)r.deleteBuffer(n[v]);n={},s={}}return{bind:a,update:o,dispose:p}}var my=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wn=null;function gy(){return wn===null&&(wn=new Bi(my,16,16,gs,xt),wn.name="DFG_LUT",wn.minFilter=ft,wn.magFilter=ft,wn.wrapS=Oi,wn.wrapT=Oi,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}var _c=class{constructor(e={}){let{canvas:t=ip(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Ei}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let b=f,g=new Set([zl,kl,Bl]),p=new Set([Ei,fn,Br,$n,Fl,Ol]),v=new Uint32Array(4),_=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},w=null,E=null,x=[],M=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,L=null,U=null,P=null,O=null;this._outputColorSpace=at;let B=0,H=0,Z=null,z=-1,X=null,ee=new lt,pe=new lt,Ce=null,K=new be(0),me=0,we=t.width,Pe=t.height,he=1,Ue=null,mt=null,Be=new lt(0,0,we,Pe),nt=new lt(0,0,we,Pe),ht=!1,Xe=new ds,jt=new gl,kt=!1,ri=!1,wt=new Le,Fi=new D,Gt=new lt,mi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gi=!1;function xi(){return Z===null?he:1}let k=i;function bi(T,F){return t.getContext(T,F)}let _t,Mt,oe,It,Ne,ke,C,S,G,te,$,ne,ae,j,J,se,N,Q,Y,ce,re,le,Fe;try{let T={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",xe,!1),k===null){let F="webgl2";if(k=bi(F,T),k===null)throw bi(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}je()}catch(T){throw t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),ze("WebGLRenderer: "+T.message),T}function je(){_t=new Ab(k),_t.init(),re=new cy(k,_t),Mt=new gb(k,_t,e,re),oe=new oy(k,_t),Mt.reversedDepthBuffer&&u&&oe.buffers.depth.setReversed(!0),U=k.createFramebuffer(),P=k.createFramebuffer(),O=k.createFramebuffer(),It=new Pb(k),Ne=new jv,ke=new ly(k,_t,oe,Ne,Mt,re,It),C=new Eb(A),S=new I0(k),le=new pb(k,S),G=new Rb(k,S,It,le),te=new Ib(k,G,S,le,It),Q=new Db(k,Mt,ke),J=new xb(Ne),$=new Xv(A,C,_t,Mt,le,J),ne=new fy(A,Ne),ae=new Kv,j=new ty(_t),N=new fb(A,C,oe,te,m,l),se=new ay(A,te,Mt),Fe=new py(k,It,Mt,oe),Y=new mb(k,_t,It),ce=new Cb(k,_t,It),It.programs=$.programs,A.capabilities=Mt,A.extensions=_t,A.properties=Ne,A.renderLists=ae,A.shadowMap=se,A.state=oe,A.info=It}b!==Ei&&(R=new Nb(b,t.width,t.height,o,n,s));let ie=new Sd(A,k);this.xr=ie,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let T=_t.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=_t.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(T){T!==void 0&&(he=T,this.setSize(we,Pe,!1))},this.getSize=function(T){return T.set(we,Pe)},this.setSize=function(T,F,q=!0){if(ie.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}we=T,Pe=F,t.width=Math.floor(T*he),t.height=Math.floor(F*he),q===!0&&(t.style.width=T+"px",t.style.height=F+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(we*he,Pe*he).floor()},this.setDrawingBufferSize=function(T,F,q){we=T,Pe=F,he=q,t.width=Math.floor(T*q),t.height=Math.floor(F*q),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(b===Ei){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ee)},this.getViewport=function(T){return T.copy(Be)},this.setViewport=function(T,F,q,V){T.isVector4?Be.set(T.x,T.y,T.z,T.w):Be.set(T,F,q,V),oe.viewport(ee.copy(Be).multiplyScalar(xi()).round())},this.getScissor=function(T){return T.copy(nt)},this.setScissor=function(T,F,q,V){T.isVector4?nt.set(T.x,T.y,T.z,T.w):nt.set(T,F,q,V),oe.scissor(pe.copy(nt).multiplyScalar(xi()).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(T){oe.setScissorTest(ht=T)},this.setOpaqueSort=function(T){Ue=T},this.setTransparentSort=function(T){mt=T},this.getClearColor=function(T){return T.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,q=!0){let V=0;if(T){let W=!1;if(Z!==null){let fe=Z.texture.format;W=g.has(fe)}if(W){let fe=Z.texture.type,Ee=p.has(fe),de=N.getClearColor(),ve=N.getClearAlpha(),De=de.r,Ge=de.g,Qe=de.b;Ee?(v[0]=De,v[1]=Ge,v[2]=Qe,v[3]=ve,k.clearBufferuiv(k.COLOR,0,v)):(_[0]=De,_[1]=Ge,_[2]=Qe,_[3]=ve,k.clearBufferiv(k.COLOR,0,_))}else V|=k.COLOR_BUFFER_BIT}F&&(V|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&k.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),N.dispose(),ae.dispose(),j.dispose(),ke.dispose(),Ne.dispose(),C.dispose(),te.dispose(),G.dispose(),le.dispose(),Fe.dispose(),$.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Tu),ie.removeEventListener("sessionend",Eu),_s.stop()};function Oe(T){T.preventDefault(),ga("WebGLRenderer: Context Lost."),I=!0}function Ve(){ga("WebGLRenderer: Context Restored."),I=!1;let T=It.autoReset,F=se.enabled,q=se.autoUpdate,V=se.needsUpdate,W=se.type;je(),It.autoReset=T,se.enabled=F,se.autoUpdate=q,se.needsUpdate=V,se.type=W}function xe(T){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function gt(T){let F=T.target;F.removeEventListener("dispose",gt),ai(F)}function ai(T){ts(T),Ne.remove(T)}function ts(T){let F=Ne.get(T).programs;F!==void 0&&(F.forEach(function(q){$.releaseProgram(q)}),T.isShaderMaterial&&$.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,q,V,W,fe){F===null&&(F=mi);let Ee=W.isMesh&&W.matrixWorld.determinantAffine()<0,de=_m(T,F,q,V,W);oe.setMaterial(V,Ee);let ve=q.index,De=1;if(V.wireframe===!0){if(ve=G.getWireframeAttribute(q),ve===void 0)return;De=2}let Ge=q.drawRange,Qe=q.attributes.position,Ae=Ge.start*De,$e=(Ge.start+Ge.count)*De;fe!==null&&(Ae=Math.max(Ae,fe.start*De),$e=Math.min($e,(fe.start+fe.count)*De)),ve!==null?(Ae=Math.max(Ae,0),$e=Math.min($e,ve.count)):Qe!=null&&(Ae=Math.max(Ae,0),$e=Math.min($e,Qe.count));let Jt=$e-Ae;if(Jt<0||Jt===1/0)return;le.setup(W,V,de,q,ve);let Dt,Tt=Y;if(ve!==null&&(Dt=S.get(ve),Tt=ce,Tt.setIndex(Dt)),W.isMesh)V.wireframe===!0?(oe.setLineWidth(V.wireframeLinewidth*xi()),Tt.setMode(k.LINES)):Tt.setMode(k.TRIANGLES);else if(W.isLine){let vi=V.linewidth;vi===void 0&&(vi=1),oe.setLineWidth(vi*xi()),W.isLineSegments?Tt.setMode(k.LINES):W.isLineLoop?Tt.setMode(k.LINE_LOOP):Tt.setMode(k.LINE_STRIP)}else W.isPoints?Tt.setMode(k.POINTS):W.isSprite&&Tt.setMode(k.TRIANGLES);if(W.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))Tt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let vi=W._multiDrawStarts,Re=W._multiDrawCounts,Pi=W._multiDrawCount,dt=ve?S.get(ve).bytesPerElement:1,Ms=Ne.get(V).currentProgram.getUniforms();for(let yi=0;yi<Pi;yi++)Ms.setValue(k,"_gl_DrawID",yi),Tt.render(vi[yi]/dt,Re[yi])}else if(W.isInstancedMesh)Tt.renderInstances(Ae,Jt,W.count);else if(q.isInstancedBufferGeometry){let vi=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Re=Math.min(q.instanceCount,vi);Tt.renderInstances(Ae,Jt,Re)}else Tt.render(Ae,Jt)};function wu(T,F,q,V){L!==null&&T.isNodeMaterial&&L.setObject(V,T),kt===!0&&J.setState(T,q,!1),T.transparent===!0&&T.side===Li&&T.forceSinglePass===!1?(T.side=ci,T.needsUpdate=!0,$r(T,F,V),T.side=Zi,T.needsUpdate=!0,$r(T,F,V),T.side=Li):$r(T,F,V)}this.compile=function(T,F,q=null){q===null&&(q=T),L!==null&&L.renderStart(T,F,q),E=j.get(q),E.init(F),M.push(E),q.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),T!==q&&T.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),ri=this.localClippingEnabled,kt=J.init(this.clippingPlanes,ri),kt===!0&&J.setGlobalState(this.clippingPlanes,F),L!==null&&se.render(E.state.shadowsArray,q,F);let V=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let fe=W.material;if(fe)if(Array.isArray(fe))for(let Ee=0;Ee<fe.length;Ee++){let de=fe[Ee];wu(de,q,F,W),V.add(de)}else wu(fe,q,F,W),V.add(fe)}),E=M.pop(),L!==null&&L.renderEnd(),V},this.compileAsync=function(T,F,q=null){let V=this.compile(T,F,q);return new Promise(W=>{function fe(){if(V.forEach(function(Ee){let ve=Ne.get(Ee).currentProgram;(ve===void 0||ve.isReady())&&V.delete(Ee)}),V.size===0){W(T);return}setTimeout(fe,10)}_t.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let eh=null;function vm(T){eh&&eh(T)}function Tu(){_s.stop()}function Eu(){_s.start()}let _s=new Dp;_s.setAnimationLoop(vm),typeof self<"u"&&_s.setContext(self),this.setAnimationLoop=function(T){eh=T,ie.setAnimationLoop(T),T===null?_s.stop():_s.start()},ie.addEventListener("sessionstart",Tu),ie.addEventListener("sessionend",Eu),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(T,F);let q=ie.enabled===!0&&ie.isPresenting===!0,V=R!==null&&(Z===null||q)&&R.begin(A,Z);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(F),F=ie.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,F,Z),E=j.get(T,M.length),E.init(F),E.state.textureUnits=ke.getTextureUnits(),M.push(E),wt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?jt.setFromArrayCamera(F):Xe.setFromProjectionMatrix(wt,Ki,F.reversedDepth),ri=this.localClippingEnabled,kt=J.init(this.clippingPlanes,ri),w=ae.get(T,x.length),w.init(),x.push(w),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){let Ee=A.xr.getDepthSensingMesh();Ee!==null&&th(Ee,F,-1/0,A.sortObjects)}th(T,F,0,A.sortObjects),w.finish(),L!==null&&L.updateLights(E.state.lightsArray),A.sortObjects===!0&&w.sort(Ue,mt),gi=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,gi&&N.addToRenderList(w,T),this.info.autoReset===!0&&this.info.reset(),kt===!0&&J.beginShadows();let W=E.state.shadowsArray;if(se.render(W,T,F),kt===!0&&J.endShadows(),(V&&R.hasRenderPass())===!1){let Ee=w.opaque,de=w.transmissive;if(E.setupLights(),F.isArrayCamera){let ve=F.cameras;if(de.length>0)for(let De=0,Ge=ve.length;De<Ge;De++){let Qe=ve[De];Ru(Ee,de,T,Qe)}gi&&N.render(T);for(let De=0,Ge=ve.length;De<Ge;De++){let Qe=ve[De];Au(w,T,Qe,Qe.viewport)}}else de.length>0&&Ru(Ee,de,T,F),gi&&N.render(T),Au(w,T,F)}Z!==null&&H===0&&(ke.updateMultisampleRenderTarget(Z),ke.updateRenderTargetMipmap(Z)),V&&R.end(A),T.isScene===!0&&T.onAfterRender(A,T,F),le.resetDefaultState(),z=-1,X=null,M.pop(),M.length>0?(E=M[M.length-1],ke.setTextureUnits(E.state.textureUnits),kt===!0&&J.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?w=x[x.length-1]:w=null,L!==null&&L.renderEnd()};function th(T,F,q,V){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){let Ee=F.isArrayCamera?jt:Xe;if(!T.frustumCulled||T.intersectsFrustum(Ee)){V&&Gt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(wt);let de=te.update(T),ve=T.material;ve.visible&&w.push(T,de,ve,q,Gt.z,null,F)}}else if(T.isMesh||T.isLine||T.isPoints){let Ee=F.isArrayCamera?jt:Xe;if(!T.frustumCulled||T.intersectsFrustum(Ee)){let de=te.update(T),ve=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Gt.copy(T.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Gt.copy(de.boundingSphere.center)),Gt.applyMatrix4(T.matrixWorld).applyMatrix4(wt)),Array.isArray(ve)){let De=de.groups;for(let Ge=0,Qe=De.length;Ge<Qe;Ge++){let Ae=De[Ge],$e=ve[Ae.materialIndex];$e&&$e.visible&&w.push(T,de,$e,q,Gt.z,Ae,F)}}else ve.visible&&w.push(T,de,ve,q,Gt.z,null,F)}}}let fe=T.children;for(let Ee=0,de=fe.length;Ee<de;Ee++)th(fe[Ee],F,q,V)}function Au(T,F,q,V){let{opaque:W,transmissive:fe,transparent:Ee}=T;E.setupLightsView(q),kt===!0&&J.setGlobalState(A.clippingPlanes,q),V&&oe.viewport(ee.copy(V)),W.length>0&&Ro(W,F,q),fe.length>0&&Ro(fe,F,q),Ee.length>0&&Ro(Ee,F,q),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Ru(T,F,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let Ae=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new At(1,1,{generateMipmaps:!0,type:Ae?xt:Ei,minFilter:Ni,samples:Math.max(4,Mt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}let fe=E.state.transmissionRenderTarget[V.id],Ee=V.viewport||ee;fe.setSize(Ee.z*A.transmissionResolutionScale,Ee.w*A.transmissionResolutionScale);let de=A.getRenderTarget(),ve=A.getActiveCubeFace(),De=A.getActiveMipmapLevel();A.setRenderTarget(fe),A.getClearColor(K),me=A.getClearAlpha(),me<1&&A.setClearColor(16777215,.5),A.clear(),gi&&N.render(q);let Ge=A.toneMapping;A.toneMapping=Mn;let Qe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),kt===!0&&J.setGlobalState(A.clippingPlanes,V),Ro(T,q,V),ke.updateMultisampleRenderTarget(fe),ke.updateRenderTargetMipmap(fe),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let $e=0,Jt=F.length;$e<Jt;$e++){let Dt=F[$e],{object:Tt,geometry:vi,material:Re,group:Pi}=Dt;if(Re.side===Li&&Tt.layers.test(V.layers)){let dt=Re.side;Re.side=ci,Re.needsUpdate=!0,Cu(Tt,q,V,vi,Re,Pi),Re.side=dt,Re.needsUpdate=!0,Ae=!0}}Ae===!0&&(ke.updateMultisampleRenderTarget(fe),ke.updateRenderTargetMipmap(fe))}A.setRenderTarget(de,ve,De),A.setClearColor(K,me),Qe!==void 0&&(V.viewport=Qe),A.toneMapping=Ge}function Ro(T,F,q){let V=F.isScene===!0?F.overrideMaterial:null;for(let W=0,fe=T.length;W<fe;W++){let Ee=T[W],{object:de,geometry:ve,group:De}=Ee,Ge=Ee.material;Ge.allowOverride===!0&&V!==null&&(Ge=V),de.layers.test(q.layers)&&Cu(de,F,q,ve,Ge,De)}}function Cu(T,F,q,V,W,fe){L!==null&&W.isNodeMaterial&&L.setObject(T,W),T.onBeforeRender(A,F,q,V,W,fe),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(A,F,q,V,T,fe),W.transparent===!0&&W.side===Li&&W.forceSinglePass===!1?(W.side=ci,W.needsUpdate=!0,A.renderBufferDirect(q,F,V,W,T,fe),W.side=Zi,W.needsUpdate=!0,A.renderBufferDirect(q,F,V,W,T,fe),W.side=Li):A.renderBufferDirect(q,F,V,W,T,fe),T.onAfterRender(A,F,q,V,W,fe)}function Pu(T){let F=0;for(let q of T)q.texture!==null&&F++;return F}function $r(T,F,q){F.isScene!==!0&&(F=mi);let V=Ne.get(T),W=E.state.lights,fe=E.state.shadowsArray,Ee=W.state.version,de=$.getParameters(T,W.state,fe,F,q,E.state.lightProbeGridArray),ve=$.getProgramCacheKey(de),De=V.programs;V.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let Ge=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;V.envMap=C.get(T.envMap||V.environment,Ge),V.envMapRotation=V.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,De===void 0&&(T.addEventListener("dispose",gt),De=new Map,V.programs=De,V.programVariants=new Map);let Qe=De.get(ve);if(Qe!==void 0){if(V.currentProgram===Qe&&V.lightsStateVersion===Ee)return Iu(T,de),Qe}else de.uniforms=$.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,q,de),T.onBeforeCompile(de,A),Qe=$.acquireProgram(de,ve),De.set(ve,Qe),V.uniforms=de.uniforms;let Ae=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ae.clippingPlanes=J.uniform),Iu(T,de),V.needsLights=Sm(T),V.lightsStateVersion=Ee,V.needsLights&&(Ae.ambientLightColor.value=W.state.ambient,Ae.lightProbe.value=W.state.probe,Ae.sunLights.value=W.state.sun,Ae.sunLightShadows.value=W.state.sunShadow,Ae.directionalLights.value=W.state.directional,Ae.directionalLightShadows.value=W.state.directionalShadow,Ae.spotLights.value=W.state.spot,Ae.spotLightShadows.value=W.state.spotShadow,Ae.rectAreaLights.value=W.state.rectArea,Ae.ltc_1.value=W.state.rectAreaLTC1,Ae.ltc_2.value=W.state.rectAreaLTC2,Ae.pointLights.value=W.state.point,Ae.pointLightShadows.value=W.state.pointShadow,Ae.hemisphereLights.value=W.state.hemi,Ae.sunShadowMatrix.value=W.state.sunShadowMatrix,Ae.sunShadowCascade.value=W.state.sunShadowCascade,Ae.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ae.spotLightMatrix.value=W.state.spotLightMatrix,Ae.spotLightMap.value=W.state.spotLightMap,Ae.pointShadowMatrix.value=W.state.pointShadowMatrix),V.numLightProbeGrids=Pu(E.state.lightProbeGridArray),V.currentProgram=Qe,V.uniformsList=null,Qe}function ym(T,F,q,V,W){let fe=Ne.get(T),Ee=fe.currentProgram.id+","+V+","+W,de=fe.programVariants.get(Ee);return de===void 0?(de=$r(T,F,q),fe.programVariants.set(Ee,de)):(fe.currentProgram=de,fe.uniformsList=null,fe.outputColorSpace=V,fe.toneMapping=W),de}function Du(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=zr.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Iu(T,F){let q=Ne.get(T);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function _m(T,F,q,V,W){F.isScene!==!0&&(F=mi),ke.resetTextureUnits();let fe=F.fog,Ee=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,de=Z===null?A.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:We.workingColorSpace,ve=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,De=C.get(V.envMap||Ee,ve),Ge=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Qe=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ae=!!q.morphAttributes.position,$e=!!q.morphAttributes.normal,Jt=!!q.morphAttributes.color,Dt=Mn;V.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Dt=A.toneMapping);let Tt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,vi=Tt!==void 0?Tt.length:0,Re=Ne.get(V),Pi=E.state.lights;if(kt===!0&&(ri===!0||T!==X)){let zt=T===X&&V.id===z;J.setState(V,T,zt)}let dt=!1,Ms=!1;V.version===Re.__version?Re.needsLights&&Re.lightsStateVersion!==Pi.state.version||W.isBatchedMesh&&Re.batching===!1||!W.isBatchedMesh&&Re.batching===!0||W.isBatchedMesh&&Re.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Re.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Re.instancing===!1||!W.isInstancedMesh&&Re.instancing===!0||W.isSkinnedMesh&&Re.skinning===!1||!W.isSkinnedMesh&&Re.skinning===!0||W.isInstancedMesh&&Re.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Re.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Re.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Re.instancingMorph===!1&&W.morphTexture!==null||Re.envMap!==De||V.fog===!0&&Re.fog!==fe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==J.numPlanes||Re.numIntersection!==J.numIntersection)||Re.vertexAlphas!==Ge||Re.vertexTangents!==Qe||Re.morphTargets!==Ae||Re.morphNormals!==$e||Re.morphColors!==Jt||Re.morphTargetsCount!==vi||Re.numLightProbeGrids!==Pu(E.state.lightProbeGridArray)?dt=!0:(Re.outputColorSpace!==de||Re.toneMapping!==Dt)&&(Ms=!0):(dt=!0,Re.__version=V.version);let yi=Re.currentProgram;(dt===!0||Ms===!0)&&(yi=Ms===!0?ym(V,F,W,de,Dt):$r(V,F,W),L&&V.isNodeMaterial&&L.onUpdateProgram(V,yi,Re));let Co=!1,is=!1,Ss=!1,st=yi.getUniforms(),di=Re.uniforms;if(oe.useProgram(yi.program)&&(Co=!0,is=!0,Ss=!0),V.id!==z&&(z=V.id,is=!0),Co||X!==T){oe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),st.setValue(k,"projectionMatrix",T.projectionMatrix),st.setValue(k,"viewMatrix",T.matrixWorldInverse);let oi=st.map.cameraPosition;oi!==void 0&&oi.setValue(k,Fi.setFromMatrixPosition(T.matrixWorld)),Mt.logarithmicDepthBuffer&&st.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&st.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),X!==T&&(X=T,is=!0,Ss=!0)}if(Re.needsLights&&(Pi.state.sunShadowMap.length>0&&st.setValue(k,"sunShadowMap",Pi.state.sunShadowMap,ke),Pi.state.directionalShadowMap.length>0&&st.setValue(k,"directionalShadowMap",Pi.state.directionalShadowMap,ke),Pi.state.spotShadowMap.length>0&&st.setValue(k,"spotShadowMap",Pi.state.spotShadowMap,ke),Pi.state.pointShadowMap.length>0&&st.setValue(k,"pointShadowMap",Pi.state.pointShadowMap,ke)),W.isSkinnedMesh){st.setOptional(k,W,"bindMatrix"),st.setOptional(k,W,"bindMatrixInverse");let zt=W.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),st.setValue(k,"boneTexture",zt.boneTexture,ke))}W.isBatchedMesh&&(st.setOptional(k,W,"batchingTexture"),st.setValue(k,"batchingTexture",W._matricesTexture,ke),st.setOptional(k,W,"batchingIdTexture"),st.setValue(k,"batchingIdTexture",W._indirectTexture,ke),st.setOptional(k,W,"batchingColorTexture"),W._colorsTexture!==null&&st.setValue(k,"batchingColorTexture",W._colorsTexture,ke));let rn=q.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&Q.update(W,q,yi),(is||Re.receiveShadow!==W.receiveShadow)&&(Re.receiveShadow=W.receiveShadow,st.setValue(k,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(di.envMapIntensity.value=F.environmentIntensity),di.dfgLUT!==void 0&&(di.dfgLUT.value=gy()),is){if(st.setValue(k,"toneMappingExposure",A.toneMappingExposure),Re.needsLights&&Mm(di,Ss),fe&&V.fog===!0&&ne.refreshFogUniforms(di,fe),ne.refreshMaterialUniforms(di,V,he,Pe,E.state.transmissionRenderTarget[T.id]),Re.needsLights&&Re.numLightProbeGrids>0){let zt=y,oi=0;for(let Ln of E.state.lightProbeGridArray)Ln.texture!==null&&(zt.textures[oi]=Ln.texture,zt.min[oi]=Ln.boundingBox.min,zt.max[oi]=Ln.boundingBox.max,zt.resolution[oi]=Ln.resolution,oi++);for(let Ln in zt)zt[Ln].length=oi;di.probesSH.value=zt.textures,di.probesMin.value=zt.min,di.probesMax.value=zt.max,di.probesResolution.value=zt.resolution}zr.upload(k,Du(Re),di,ke)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(zr.upload(k,Du(Re),di,ke),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&st.setValue(k,"center",W.center),st.setValue(k,"modelViewMatrix",W.modelViewMatrix),st.setValue(k,"normalMatrix",W.normalMatrix),st.setValue(k,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let zt=V.uniformsGroups;for(let oi=0,Ln=zt.length;oi<Ln;oi++){let Nu=zt[oi];Fe.update(Nu,yi),Fe.bind(Nu,yi)}}return yi}function Mm(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Sm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(T,F,q){let V=Ne.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Ne.get(T.texture).__webglTexture=F,Ne.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){let q=Ne.get(T);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,q=0){Z=T,B=F,H=q;let V=null,W=!1,fe=!1;if(T){let de=Ne.get(T);if(de.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(k.FRAMEBUFFER,de.__webglFramebuffer),ee.copy(T.viewport),pe.copy(T.scissor),Ce=T.scissorTest,oe.viewport(ee),oe.scissor(pe),oe.setScissorTest(Ce),z=-1;return}else if(de.__webglFramebuffer===void 0)ke.setupRenderTarget(T);else if(de.__hasExternalTextures)ke.rebindTextures(T,Ne.get(T.texture).__webglTexture,Ne.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ge=T.depthTexture;if(de.__boundDepthTexture!==Ge){if(Ge!==null&&Ne.has(Ge)&&(T.width!==Ge.image.width||T.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(T)}}let ve=T.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(fe=!0);let De=Ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[F])?V=De[F][q]:V=De[F],W=!0):T.samples>0&&ke.useMultisampledRTT(T)===!1?V=Ne.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?V=De[q]:V=De,ee.copy(T.viewport),pe.copy(T.scissor),Ce=T.scissorTest}else ee.copy(Be).multiplyScalar(he).floor(),pe.copy(nt).multiplyScalar(he).floor(),Ce=ht;if(q!==0&&(V=U),oe.bindFramebuffer(k.FRAMEBUFFER,V)&&oe.drawBuffers(T,V),oe.viewport(ee),oe.scissor(pe),oe.setScissorTest(Ce),W){let de=Ne.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,de.__webglTexture,q)}else if(fe){let de=F;for(let ve=0;ve<T.textures.length;ve++){let De=Ne.get(T.textures[ve]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+ve,De.__webglTexture,q,de)}}else if(T!==null&&q!==0){let de=Ne.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,de.__webglTexture,q)}z=-1};function Lu(T){let F=Ne.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=Mt.textureFormatReadable(T.format),F.__typeReadable=Mt.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,q,V,W,fe,Ee,de=0){if(!(T&&T.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(ve=ve[Ee],Array.isArray(ve)&&(ve=ve[0])),ve){oe.bindFramebuffer(k.FRAMEBUFFER,ve);try{let De=T.textures[de],Ge=De.format,Qe=De.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+de);let Ae=Lu(De);if(Ae.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-V&&q>=0&&q<=T.height-W&&k.readPixels(F,q,V,W,re.convert(Ge),re.convert(Qe),fe)}finally{let De=Z!==null?Ne.get(Z).__webglFramebuffer:null;oe.bindFramebuffer(k.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(T,F,q,V,W,fe,Ee,de=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(ve=ve[Ee],Array.isArray(ve)&&(ve=ve[0])),ve)if(F>=0&&F<=T.width-V&&q>=0&&q<=T.height-W){oe.bindFramebuffer(k.FRAMEBUFFER,ve);let De=T.textures[de],Ge=De.format,Qe=De.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+de);let Ae=Lu(De);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,$e),k.bufferData(k.PIXEL_PACK_BUFFER,fe.byteLength,k.STREAM_READ),k.readPixels(F,q,V,W,re.convert(Ge),re.convert(Qe),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Jt=Z!==null?Ne.get(Z).__webglFramebuffer:null;oe.bindFramebuffer(k.FRAMEBUFFER,Jt);let Dt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await sp(k,Dt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,$e),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,fe),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer($e),k.deleteSync(Dt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,q=0){let V=Math.pow(2,-q),W=Math.floor(T.image.width*V),fe=Math.floor(T.image.height*V),Ee=F!==null?F.x:0,de=F!==null?F.y:0;ke.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,q,0,0,Ee,de,W,fe),oe.unbindTexture()},this.copyTextureToTexture=function(T,F,q=null,V=null,W=0,fe=0){let Ee,de,ve,De,Ge,Qe,Ae,$e,Jt,Dt=T.isCompressedTexture?T.mipmaps[fe]:T.image;if(q!==null)Ee=q.max.x-q.min.x,de=q.max.y-q.min.y,ve=q.isBox3?q.max.z-q.min.z:1,De=q.min.x,Ge=q.min.y,Qe=q.isBox3?q.min.z:0;else{let st=Math.pow(2,-W);Ee=Math.floor(Dt.width*st),de=Math.floor(Dt.height*st),T.isDataArrayTexture?ve=Dt.depth:T.isData3DTexture?ve=Math.floor(Dt.depth*st):ve=1,De=0,Ge=0,Qe=0}V!==null?(Ae=V.x,$e=V.y,Jt=V.z):(Ae=0,$e=0,Jt=0);let Tt=re.convert(F.format),vi=re.convert(F.type),Re;F.isData3DTexture?(ke.setTexture3D(F,0),Re=k.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ke.setTexture2DArray(F,0),Re=k.TEXTURE_2D_ARRAY):(ke.setTexture2D(F,0),Re=k.TEXTURE_2D),oe.activeTexture(k.TEXTURE0),oe.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),oe.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),oe.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment);let Pi=oe.getParameter(k.UNPACK_ROW_LENGTH),dt=oe.getParameter(k.UNPACK_IMAGE_HEIGHT),Ms=oe.getParameter(k.UNPACK_SKIP_PIXELS),yi=oe.getParameter(k.UNPACK_SKIP_ROWS),Co=oe.getParameter(k.UNPACK_SKIP_IMAGES);oe.pixelStorei(k.UNPACK_ROW_LENGTH,Dt.width),oe.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Dt.height),oe.pixelStorei(k.UNPACK_SKIP_PIXELS,De),oe.pixelStorei(k.UNPACK_SKIP_ROWS,Ge),oe.pixelStorei(k.UNPACK_SKIP_IMAGES,Qe);let is=T.isDataArrayTexture||T.isData3DTexture,Ss=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){let st=Ne.get(T),di=Ne.get(F),rn=Ne.get(st.__renderTarget),zt=Ne.get(di.__renderTarget);oe.bindFramebuffer(k.READ_FRAMEBUFFER,rn.__webglFramebuffer),oe.bindFramebuffer(k.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let oi=0;oi<ve;oi++)is&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ne.get(T).__webglTexture,W,Qe+oi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ne.get(F).__webglTexture,fe,Jt+oi)),k.blitFramebuffer(De,Ge,De+Ee,Ge+de,Ae,$e,Ae+Ee,$e+de,k.DEPTH_BUFFER_BIT,k.NEAREST);oe.bindFramebuffer(k.READ_FRAMEBUFFER,null),oe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||Ne.has(T)){let st=Ne.get(T),di=Ne.get(F);oe.bindFramebuffer(k.READ_FRAMEBUFFER,P),oe.bindFramebuffer(k.DRAW_FRAMEBUFFER,O);for(let rn=0;rn<ve;rn++)is?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,st.__webglTexture,W,Qe+rn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,st.__webglTexture,W),Ss?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,di.__webglTexture,fe,Jt+rn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,di.__webglTexture,fe),W!==0?k.blitFramebuffer(De,Ge,De+Ee,Ge+de,Ae,$e,Ae+Ee,$e+de,k.COLOR_BUFFER_BIT,k.NEAREST):Ss?k.copyTexSubImage3D(Re,fe,Ae,$e,Jt+rn,De,Ge,Ee,de):k.copyTexSubImage2D(Re,fe,Ae,$e,De,Ge,Ee,de);oe.bindFramebuffer(k.READ_FRAMEBUFFER,null),oe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ss?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(Re,fe,Ae,$e,Jt,Ee,de,ve,Tt,vi,Dt.data):F.isCompressedArrayTexture?k.compressedTexSubImage3D(Re,fe,Ae,$e,Jt,Ee,de,ve,Tt,Dt.data):k.texSubImage3D(Re,fe,Ae,$e,Jt,Ee,de,ve,Tt,vi,Dt):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,fe,Ae,$e,Ee,de,Tt,vi,Dt.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,fe,Ae,$e,Dt.width,Dt.height,Tt,Dt.data):k.texSubImage2D(k.TEXTURE_2D,fe,Ae,$e,Ee,de,Tt,vi,Dt);oe.pixelStorei(k.UNPACK_ROW_LENGTH,Pi),oe.pixelStorei(k.UNPACK_IMAGE_HEIGHT,dt),oe.pixelStorei(k.UNPACK_SKIP_PIXELS,Ms),oe.pixelStorei(k.UNPACK_SKIP_ROWS,yi),oe.pixelStorei(k.UNPACK_SKIP_IMAGES,Co),fe===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&k.generateMipmap(Re),oe.unbindTexture()},this.initRenderTarget=function(T){Ne.get(T).__webglFramebuffer===void 0&&ke.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ke.setTextureCube(T,0):T.isData3DTexture?ke.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ke.setTexture2DArray(T,0):ke.setTexture2D(T,0),oe.unbindTexture()},this.resetState=function(){B=0,H=0,Z=null,oe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}};var En={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var fi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},xy=new Zn(-1,1,1,-1,0,1),wd=class extends Ot{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}},by=new wd,$i=class{constructor(e){this._mesh=new Te(by,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,xy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Vr=class extends fi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof it?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qt.clone(e.uniforms),this.material=new it({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new $i(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var lo=class extends fi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},wc=class extends fi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Tc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ue);this._width=i.width,this._height=i.height,t=new At(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vr(En),this.copyPass.material.blending=hi,this.timer=new ka}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}lo!==void 0&&(a instanceof lo?i=!0:a instanceof wc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var co=class extends fi{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new be}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}};var Gp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new be(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Wr=class r extends fi{constructor(e,t=1,i,n){super(),this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new be(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new At(s,a,{type:xt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new At(s,a,{type:xt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new At(s,a,{type:xt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),a=Math.round(a/2)}let o=Gp;this.highPassUniforms=qt.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new it({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ue(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=qt.clone(En.uniforms),this.blendMaterial=new it({uniforms:this.copyUniforms,vertexShader:En.vertexShader,fragmentShader:En.fragmentShader,premultipliedAlpha:!0,blending:Ti,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new be,this._oldClearAlpha=1,this._basic=new ti,this._fsQuad=new $i(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new ue(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let n=[],s=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;n.push((a*o+(a+1)*l)/c),s.push(c)}return new it({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:n},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new it({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Wr.BlurDirectionX=new ue(1,0);Wr.BlurDirectionY=new ue(0,1);var ho={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ec=class extends fi{constructor(){super(),this.isOutputPass=!0,this.uniforms=qt.clone(ho.uniforms),this.material=new Dr({name:ho.name,uniforms:this.uniforms,vertexShader:ho.vertexShader,fragmentShader:ho.fragmentShader}),this._fsQuad=new $i(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},We.getTransfer(this._outputColorSpace)===ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===qa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===qs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ya?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ka?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ja&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var uo={name:"SMAAEdgesShader",defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new ue(1/1024,1/512)}},vertexShader:`

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

		}`},fo={name:"SMAAWeightsShader",defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new ue(1/1024,1/512)}},vertexShader:`

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

		}`},Ac={name:"SMAABlendShader",uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new ue(1/1024,1/512)}},vertexShader:`

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

		}`};var Rc=class extends fi{constructor(){super(),this._edgesRT=new At(1,1,{depthBuffer:!1,type:xt}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new At(1,1,{depthBuffer:!1,type:xt}),this._weightsRT.texture.name="SMAAPass.weights";let e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new Ft,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=ft,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;let i=new Image;i.src=this._getSearchTexture(),i.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new Ft,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=i,this._searchTexture.magFilter=Et,this._searchTexture.minFilter=Et,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=qt.clone(uo.uniforms),this._materialEdges=new it({defines:Object.assign({},uo.defines),uniforms:this._uniformsEdges,vertexShader:uo.vertexShader,fragmentShader:uo.fragmentShader}),this._uniformsWeights=qt.clone(fo.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new it({defines:Object.assign({},fo.defines),uniforms:this._uniformsWeights,vertexShader:fo.vertexShader,fragmentShader:fo.fragmentShader}),this._uniformsBlend=qt.clone(Ac.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new it({uniforms:this._uniformsBlend,vertexShader:Ac.vertexShader,fragmentShader:Ac.fragmentShader}),this._fsQuad=new $i(null)}render(e,t,i){this._uniformsEdges.tDiffuse.value=i.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=i.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}};var po={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ue},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Le},cameraProjectionMatrixInverse:{value:new Le},cameraWorldMatrix:{value:new Le},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

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
		}`},mo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Cc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Vp(r=5){let e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=vy(e),i=t.length,n=new Uint8Array(i*4);for(let a=0;a<i;++a){let o=t[a],l=2*Math.PI*o/i,c=new D(Math.cos(l),Math.sin(l),0).normalize();n[a*4]=(c.x*.5+.5)*255,n[a*4+1]=(c.y*.5+.5)*255,n[a*4+2]=127,n[a*4+3]=255}let s=new Bi(n,e,e);return s.wrapS=Qt,s.wrapT=Qt,s.needsUpdate=!0,s}function vy(r){let e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=e*e,i=Array(t).fill(0),n=Math.floor(e/2),s=e-1;for(let a=1;a<=t;){if(n===-1&&s===e?(s=e-2,n=0):(s===e&&(s=0),n<0&&(n=e-1)),i[n*e+s]!==0){s-=2,n++;continue}else i[n*e+s]=a++;s++,n--}return i}var go={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Td(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ue},cameraProjectionMatrixInverse:{value:new Le},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Td(r,e,t){let i=yy(r,e,t),n="vec3[SAMPLES](";for(let s=0;s<r;s++){let a=i[s];n+=`vec3(${a.x}, ${a.y}, ${a.z})${s<r-1?",":")"}`}return n}function yy(r,e,t){let i=[];for(let n=0;n<r;n++){let s=2*Math.PI*e*n/r,a=Math.pow(n/(r-1),t);i.push(new D(Math.cos(s),Math.sin(s),a))}return i}var Pc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let i,n,s,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,m=e-u,b=t-f,g,p;m>b?(g=1,p=0):(g=0,p=1);let v=m-g+h,_=b-p+h,y=m-1+2*h,w=b-1+2*h,E=l&255,x=c&255,M=this.perm[E+this.perm[x]]%12,R=this.perm[E+g+this.perm[x+p]]%12,A=this.perm[E+1+this.perm[x+1]]%12,I=.5-m*m-b*b;I<0?i=0:(I*=I,i=I*I*this._dot(this.grad3[M],m,b));let L=.5-v*v-_*_;L<0?n=0:(L*=L,n=L*L*this._dot(this.grad3[R],v,_));let U=.5-y*y-w*w;return U<0?s=0:(U*=U,s=U*U*this._dot(this.grad3[A],y,w)),70*(i+n+s)}noise3d(e,t,i){let n,s,a,o,c=(e+t+i)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),u=Math.floor(i+c),f=1/6,m=(h+d+u)*f,b=h-m,g=d-m,p=u-m,v=e-b,_=t-g,y=i-p,w,E,x,M,R,A;v>=_?_>=y?(w=1,E=0,x=0,M=1,R=1,A=0):v>=y?(w=1,E=0,x=0,M=1,R=0,A=1):(w=0,E=0,x=1,M=1,R=0,A=1):_<y?(w=0,E=0,x=1,M=0,R=1,A=1):v<y?(w=0,E=1,x=0,M=0,R=1,A=1):(w=0,E=1,x=0,M=1,R=1,A=0);let I=v-w+f,L=_-E+f,U=y-x+f,P=v-M+2*f,O=_-R+2*f,B=y-A+2*f,H=v-1+3*f,Z=_-1+3*f,z=y-1+3*f,X=h&255,ee=d&255,pe=u&255,Ce=this.perm[X+this.perm[ee+this.perm[pe]]]%12,K=this.perm[X+w+this.perm[ee+E+this.perm[pe+x]]]%12,me=this.perm[X+M+this.perm[ee+R+this.perm[pe+A]]]%12,we=this.perm[X+1+this.perm[ee+1+this.perm[pe+1]]]%12,Pe=.6-v*v-_*_-y*y;Pe<0?n=0:(Pe*=Pe,n=Pe*Pe*this._dot3(this.grad3[Ce],v,_,y));let he=.6-I*I-L*L-U*U;he<0?s=0:(he*=he,s=he*he*this._dot3(this.grad3[K],I,L,U));let Ue=.6-P*P-O*O-B*B;Ue<0?a=0:(Ue*=Ue,a=Ue*Ue*this._dot3(this.grad3[me],P,O,B));let mt=.6-H*H-Z*Z-z*z;return mt<0?o=0:(mt*=mt,o=mt*mt*this._dot3(this.grad3[we],H,Z,z)),32*(n+s+a+o)}noise4d(e,t,i,n){let s=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,f,m,b=(e+t+i+n)*l,g=Math.floor(e+b),p=Math.floor(t+b),v=Math.floor(i+b),_=Math.floor(n+b),y=(g+p+v+_)*c,w=g-y,E=p-y,x=v-y,M=_-y,R=e-w,A=t-E,I=i-x,L=n-M,U=R>A?32:0,P=R>I?16:0,O=A>I?8:0,B=R>L?4:0,H=A>L?2:0,Z=I>L?1:0,z=U+P+O+B+H+Z,X=a[z][0]>=3?1:0,ee=a[z][1]>=3?1:0,pe=a[z][2]>=3?1:0,Ce=a[z][3]>=3?1:0,K=a[z][0]>=2?1:0,me=a[z][1]>=2?1:0,we=a[z][2]>=2?1:0,Pe=a[z][3]>=2?1:0,he=a[z][0]>=1?1:0,Ue=a[z][1]>=1?1:0,mt=a[z][2]>=1?1:0,Be=a[z][3]>=1?1:0,nt=R-X+c,ht=A-ee+c,Xe=I-pe+c,jt=L-Ce+c,kt=R-K+2*c,ri=A-me+2*c,wt=I-we+2*c,Fi=L-Pe+2*c,Gt=R-he+3*c,mi=A-Ue+3*c,gi=I-mt+3*c,xi=L-Be+3*c,k=R-1+4*c,bi=A-1+4*c,_t=I-1+4*c,Mt=L-1+4*c,oe=g&255,It=p&255,Ne=v&255,ke=_&255,C=o[oe+o[It+o[Ne+o[ke]]]]%32,S=o[oe+X+o[It+ee+o[Ne+pe+o[ke+Ce]]]]%32,G=o[oe+K+o[It+me+o[Ne+we+o[ke+Pe]]]]%32,te=o[oe+he+o[It+Ue+o[Ne+mt+o[ke+Be]]]]%32,$=o[oe+1+o[It+1+o[Ne+1+o[ke+1]]]]%32,ne=.6-R*R-A*A-I*I-L*L;ne<0?h=0:(ne*=ne,h=ne*ne*this._dot4(s[C],R,A,I,L));let ae=.6-nt*nt-ht*ht-Xe*Xe-jt*jt;ae<0?d=0:(ae*=ae,d=ae*ae*this._dot4(s[S],nt,ht,Xe,jt));let j=.6-kt*kt-ri*ri-wt*wt-Fi*Fi;j<0?u=0:(j*=j,u=j*j*this._dot4(s[G],kt,ri,wt,Fi));let J=.6-Gt*Gt-mi*mi-gi*gi-xi*xi;J<0?f=0:(J*=J,f=J*J*this._dot4(s[te],Gt,mi,gi,xi));let se=.6-k*k-bi*bi-_t*_t-Mt*Mt;return se<0?m=0:(se*=se,m=se*se*this._dot4(s[$],k,bi,_t,Mt)),27*(h+d+u+f+m)}_dot(e,t,i){return e[0]*t+e[1]*i}_dot3(e,t,i,n){return e[0]*t+e[1]*i+e[2]*n}_dot4(e,t,i,n,s){return e[0]*t+e[1]*i+e[2]*n+e[3]*s}};var qr=class r extends fi{constructor(e,t,i=512,n=512,s,a,o){super(),this.width=i,this.height=n,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Vp(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new At(this.width,this.height,{type:xt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new it({defines:Object.assign({},po.defines),uniforms:qt.clone(po.uniforms),vertexShader:po.vertexShader,fragmentShader:po.fragmentShader,blending:hi,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ia,this.normalMaterial.blending=hi,this.pdMaterial=new it({defines:Object.assign({},go.defines),uniforms:qt.clone(go.uniforms),vertexShader:go.vertexShader,fragmentShader:go.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new it({defines:Object.assign({},mo.defines),uniforms:qt.clone(mo.uniforms),vertexShader:mo.vertexShader,fragmentShader:mo.fragmentShader,blending:hi}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new it({uniforms:qt.clone(En.uniforms),vertexShader:En.vertexShader,fragmentShader:En.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Va,blendDst:Ws,blendEquation:Qi,blendSrcAlpha:Ga,blendDstAlpha:Ws,blendEquationAlpha:Qi}),this.blendMaterial=new it({uniforms:qt.clone(Cc.uniforms),vertexShader:Cc.vertexShader,fragmentShader:Cc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Dl,blendSrc:Va,blendDst:Ws,blendEquation:Qi,blendSrcAlpha:Ga,blendDstAlpha:Ws,blendEquationAlpha:Qi}),this._fsQuad=new $i(null),this._originalClearColor=new be,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let n=new dn;n.format=pn,n.type=$n,this.normalRenderTarget=new At(this.width,this.height,{minFilter:Et,magFilter:Et,type:xt,depthTexture:n})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let i=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Td(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case r.OUTPUT.Off:break;case r.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=hi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=hi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=hi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=hi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=hi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,i,n,s){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,n!=null&&(e.setClearColor(n),e.setClearAlpha(s||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,i,n,s){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,n=t.clearColor||n,s=t.clearAlpha||s,n!=null&&(e.setClearColor(n),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){(i.isPoints||i.isLine||i.isLine2)&&i.visible&&(i.visible=!1,t.push(i))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Pc,i=e*e*4,n=new Uint8Array(i);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;n[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,n[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,n[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,n[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let s=new Bi(n,e,e,Ri,Ei);return s.wrapS=Qt,s.wrapT=Qt,s.needsUpdate=!0,s}};qr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Ed={low:{shadow:1024,pixelRatio:.75,bloom:!1,ao:!1,smaa:!1,shadowsOn:!0,aniso:2},medium:{shadow:2048,pixelRatio:1,bloom:!0,ao:!1,smaa:!0,shadowsOn:!0,aniso:4},high:{shadow:4096,pixelRatio:1,bloom:!0,ao:!0,smaa:!0,shadowsOn:!0,aniso:8},ultra:{shadow:4096,pixelRatio:1.5,bloom:!0,ao:!0,smaa:!0,shadowsOn:!0,aniso:16}},_y={uniforms:{tDiffuse:{value:null},time:{value:0},damage:{value:0},flash:{value:0},vignette:{value:.35},grain:{value:.035},aberr:{value:0},nvg:{value:0},scope:{value:0},contrast:{value:1.06},saturation:{value:1},tint:{value:new be(1,1,1)},aspect:{value:1.7}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
    }`},Dc=class{constructor(e){this.canvas=e;let t=this.renderer=new _c({canvas:e,antialias:!1,powerPreference:"high-performance",stencil:!1});t.outputColorSpace=at,t.toneMapping=qs,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=Vs,t.setClearColor(0),this.camera=new Vt(75,1,.05,1500),this.vmCamera=new Vt(55,1,.01,10),this.vmScene=new hn,this.scene=new hn,this.quality="high",this.renderScale=1,this.composer=null,this.clock=new Ha,window.addEventListener("resize",()=>this.resize())}setScene(e){this.scene=e,this.buildComposer()}buildComposer(){let e=Ed[this.quality],t=this.renderer;this.composer&&this.composer.dispose?.();let i=this.composer=new Tc(t),n=this.mainPass=new co(this.scene,this.camera);if(i.addPass(n),e.ao){let a=this.aoPass=new qr(this.scene,this.camera,1,1);a.output=qr.OUTPUT.Default,a.blendIntensity=.85,a.updateGtaoMaterial({radius:.6,distanceExponent:1.4,thickness:1.5,scale:1,samples:12}),a.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),i.addPass(a)}else this.aoPass=null;let s=this.vmPass=new co(this.vmScene,this.vmCamera);s.clear=!1,s.clearDepth=!0,i.addPass(s),e.bloom?(this.bloom=new Wr(new ue(256,256),.5,.3,8),i.addPass(this.bloom)):this.bloom=null,i.addPass(new Ec),e.smaa&&i.addPass(new Rc),this.grade=new Vr(_y),i.addPass(this.grade),t.shadowMap.enabled=e.shadowsOn,this.resize()}setQuality(e,t=1){this.quality=Ed[e]?e:"high",this.renderScale=t,this.scene&&this.buildComposer()}resize(){let e=window.innerWidth,t=window.innerHeight,i=Ed[this.quality],n=Math.min(window.devicePixelRatio||1,2)*i.pixelRatio*this.renderScale;this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.canvas.style.width=e+"px",this.canvas.style.height=t+"px",this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.vmCamera.aspect=e/t,this.vmCamera.updateProjectionMatrix(),this.composer&&(this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.grade&&(this.grade.uniforms.aspect.value=e/t))}render(e){this.grade&&(this.grade.uniforms.time.value+=e),this.composer.render(e)}};var Ad=[["forward","Move forward",["KeyW",""]],["back","Move back",["KeyS",""]],["left","Strafe left",["KeyA",""]],["right","Strafe right",["KeyD",""]],["fire","Fire",["Mouse0","Enter"]],["aim","Aim (hold)",["Mouse2",""]],["aimToggle","Aim (toggle)",["KeyZ",""]],["sprint","Sprint / hold breath",["ShiftLeft",""]],["jump","Jump",["Space",""]],["crouch","Crouch / slide",["KeyC","ControlLeft"]],["reload","Reload",["KeyR",""]],["melee","Knife (melee)",["KeyF","KeyV"]],["interact","Interact / pick up (hold)",["KeyE",""]],["lethal","Lethal grenade",["KeyG",""]],["tactical","Tactical grenade",["KeyQ",""]],["weapon1","Primary weapon",["Digit1",""]],["weapon2","Secondary weapon",["Digit2",""]],["swap","Swap weapon",["KeyX",""]],["firemode","Fire mode",["KeyB",""]],["flashlight","Flashlight",["KeyT",""]],["nvg","Night vision",["KeyN",""]],["lookLeft","Look left",["ArrowLeft",""]],["lookRight","Look right",["ArrowRight",""]],["lookUp","Look up",["ArrowUp",""]],["lookDown","Look down",["ArrowDown",""]]];function xo(){let r={};for(let[e,,t]of Ad)r[e]=[...t];return r}function Js(r){if(!r)return"\u2014";let e={Mouse0:"Left Click",Mouse1:"Middle Click",Mouse2:"Right Click",Mouse3:"Mouse 4",Mouse4:"Mouse 5",Space:"Space",ShiftLeft:"L-Shift",ShiftRight:"R-Shift",ControlLeft:"L-Ctrl",ControlRight:"R-Ctrl",AltLeft:"L-Alt",AltRight:"R-Alt",Enter:"Enter",Tab:"Tab",CapsLock:"Caps",Backquote:"`",ArrowLeft:"\u2190",ArrowRight:"\u2192",ArrowUp:"\u2191",ArrowDown:"\u2193"};return e[r]?e[r]:r.startsWith("Key")?r.slice(3):r.startsWith("Digit")?r.slice(5):r.startsWith("Numpad")?"Num "+r.slice(6):r}var Ic=class{constructor(e){this.canvas=e,this.keys=new Set,this.pressed=new Set,this.released=new Set,this.mouse={dx:0,dy:0,left:!1,right:!1,leftPressed:!1,rightPressed:!1,wheel:0},this.locked=!1,this.enabled=!1,this.fallback=!1,this.binds=xo(),addEventListener("keydown",t=>{if(this.capture){t.preventDefault(),this.capture(t.code);return}this.enabled&&(t.code!=="Escape"&&t.code!=="F5"&&t.code!=="F11"&&t.code!=="F12"&&t.preventDefault(),this.press(t.code))}),addEventListener("keyup",t=>this.release(t.code)),addEventListener("mousemove",t=>{this.enabled&&(this.locked||this.fallback)&&(this.mouse.dx+=t.movementX||0,this.mouse.dy+=t.movementY||0)}),addEventListener("mousedown",t=>{if(this.capture&&t.target.closest?.(".bind")){t.preventDefault(),this.capture("Mouse"+t.button);return}this.enabled&&(!this.locked&&!this.fallback&&this.lock(),t.button===0&&(this.mouse.left=!0,this.mouse.leftPressed=!0),t.button===2&&(this.mouse.right=!0,this.mouse.rightPressed=!0),this.press("Mouse"+t.button))}),addEventListener("mouseup",t=>{t.button===0&&(this.mouse.left=!1),t.button===2&&(this.mouse.right=!1),this.release("Mouse"+t.button)}),addEventListener("contextmenu",t=>{(this.enabled||this.capture)&&t.preventDefault()}),addEventListener("wheel",t=>{this.enabled&&(this.mouse.wheel+=Math.sign(t.deltaY))},{passive:!0}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,!this.locked&&this.enabled&&!this.fallback&&this.onUnlock&&this.onUnlock()}),document.addEventListener("pointerlockerror",()=>{this.fallback=!0,document.body.classList.add("nocursor")}),addEventListener("blur",()=>{this.keys.clear(),this.mouse.left=this.mouse.right=!1})}press(e){this.keys.has(e)||this.pressed.add(e),this.keys.add(e)}release(e){this.keys.delete(e),this.released.add(e)}setBinds(e){this.binds={...xo(),...e||{}}}act(e){let t=this.binds[e];return!!t&&t.some(i=>i&&this.keys.has(i))}actHit(e){let t=this.binds[e];return!!t&&t.some(i=>i&&this.pressed.has(i))}lock(){try{let e=this.canvas.requestPointerLock({unadjustedMovement:!0});e&&e.catch&&e.catch(()=>{try{let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{this.fallback=!0,document.body.classList.add("nocursor")})}catch{this.fallback=!0}})}catch{this.fallback=!0,document.body.classList.add("nocursor")}}unlock(){document.pointerLockElement&&document.exitPointerLock(),document.body.classList.remove("nocursor")}down(e){return this.keys.has(e)}hit(e){return this.pressed.has(e)}endFrame(){this.pressed.clear(),this.released.clear(),this.mouse.dx=this.mouse.dy=0,this.mouse.leftPressed=this.mouse.rightPressed=!1,this.mouse.wheel=0}};var Ct=r=>document.querySelector(r);var Lc=class{constructor(){this.el=Ct("#hud"),this.el.innerHTML=`
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
      <div id="pickmsg"></div>
      <div id="nade"><div class="ic">\u{1F4A3}</div></div>
      <div id="scope"><div class="mask"></div><div class="lines"></div><div class="breath"></div></div>
      <div id="intro"></div>
      <div id="fps"></div>
      <div id="hint"></div>`,this.x=Ct("#xhair"),this.hm=Ct("#hitm"),this.cmp=Ct("#compass .strip"),this.cmpObj=Ct("#compass .obj"),this.objT=Ct("#objp .t"),this.objC=Ct("#objp .c"),this.wp=Ct("#waypoint"),this.wpM=Ct("#waypoint .m"),this.radar=Ct("#radar").getContext("2d"),this.dd=Ct("#dmgdirs"),this.feed=Ct("#feed"),this.ia=Ct("#interact"),this.toastEl=Ct("#toast"),this.nade=Ct("#nade"),this.scope=Ct("#scope"),this.intro=Ct("#intro"),this.fps=Ct("#fps"),this.hint=Ct("#hint"),this.hitT=0,this.dirs=[],this.nadeT=0,this.frames=0,this.fpsT=0,this.suppT=0;let e="",t={0:"N",45:"NE",90:"E",135:"SE",180:"S",225:"SW",270:"W",315:"NW"};for(let i=-1;i<=1;i++)for(let n=0;n<360;n+=15){let s=t[n];e+=`<span style="left:${(i*360+n)*4}px" class="${s?"lb":""}">${s||"|"}</span>`}this.cmp.innerHTML=e}show(e){this.el.style.display=e?"block":"none"}setObjective(e,t){if(this.objT.textContent=e,this.objC.textContent="",t){let i=Ct("#objp");i.classList.remove("flash"),i.offsetWidth,i.classList.add("flash"),this.toast(e==="MISSION COMPLETE"?e:"NEW OBJECTIVE",2.2)}}setObjectiveCount(e){this.objC.textContent=e}hitmarker(e,t){this.hitT=.25,this.hm.className=t?"kill on":e?"head on":"on"}killfeed(e,t){let i=document.createElement("div");i.className="k",i.innerHTML=`<b>+${t}</b> ${e}`,this.feed.prepend(i),setTimeout(()=>i.remove(),2200)}pickupMsg(e){let t=document.createElement("div");t.textContent=e,document.getElementById("pickmsg").appendChild(t),setTimeout(()=>t.remove(),1600)}toast(e,t=1.5){this.toastEl.textContent=e,this.toastEl.style.opacity=1,clearTimeout(this._tt),this._tt=setTimeout(()=>this.toastEl.style.opacity=0,t*1e3)}showHint(e,t=6){this.hint.innerHTML=e,this.hint.style.opacity=1,clearTimeout(this._ht),this._ht=setTimeout(()=>this.hint.style.opacity=0,t*1e3)}damageDir(e,t){let i=document.createElement("div");i.className="dd",this.dd.appendChild(i),this.dirs.push({el:i,from:e.clone(),t:1.6})}suppress(){this.suppT=.4}grenadeWarning(){}grenadeIndicator(e){this.nadeT=.15,this.nadePos=e}setInteract(e,t){if(!e){this.ia.style.display="none";return}this.ia.style.display="block",this.ia.querySelector(".lbl").innerHTML=e,this.ia.querySelector(".bar div").style.width=t*100+"%"}setScope(e,t){this.scope.style.display=e?"block":"none",this.scope.querySelector(".breath").textContent=e?t?"BREATH HELD":"Hold [SHIFT] to steady":""}playIntro(e){let t=this.intro;t.innerHTML="",t.style.opacity=1;let i=300;e.forEach((n,s)=>{let a=document.createElement("div");a.className=s===0?"big":"",t.appendChild(a),setTimeout(()=>{let o=0,l=setInterval(()=>{a.textContent=n.slice(0,++o)+(o<n.length?"\u2588":""),o>=n.length&&clearInterval(l)},28)},i),i+=n.length*28+350}),setTimeout(()=>t.style.opacity=0,i+2500)}update(e){let t=this.G,i=t.player;if(!i||!i.w)return;let n=t.engine.camera,s=i.w.st,o=4+i.spread()*7,l=i.ads>.4||i.sprint||!i.alive||i.reloading&&!1;this.x.style.opacity=l?0:i.reloading?.4:.9,this.x.style.setProperty("--s",o+"px"),this.hitT>0&&(this.hitT-=e,this.hitT<=0&&(this.hm.className=""));let c=i.w;Ct("#ammo .wn").textContent=s.name+(s.suppressed?" \u25AA SUPP":"");let h=Ct("#ammo .mag");h.textContent=c.ammo,h.className="mag"+(c.ammo<=Math.ceil(s.mag*.25)?" low":""),Ct("#ammo .res").textContent="/ "+c.reserve,Ct("#ammo .mode").textContent=i.reloading?"RELOADING":c.ammo===0?c.reserve?"PRESS [R] TO RELOAD":"NO AMMO":s.modes[c.mode].toUpperCase();let d=i.loadout;Ct("#ammo .l").textContent=`[G] ${d.lethal==="c4"?"SEMTEX":"FRAG"} \xD7${i.grenades.lethal}`,Ct("#ammo .tac").textContent=`[Q] ${d.tactical==="smoke"?"SMOKE":"FLASH"} \xD7${i.grenades.tactical}`,Ct("#hp .bar div").style.width=i.health/i.maxHealth*100+"%";let u=(-i.yaw*180/Math.PI%360+360)%360;this.cmp.style.transform=`translateX(${-(u+360)*4}px)`;let f=t.waypoint();if(f){let b=((Math.atan2(f.x-i.pos.x,-(f.z-i.pos.z))*180/Math.PI-u)%360+540)%360-180;this.cmpObj.style.display=Math.abs(b)<75?"block":"none",this.cmpObj.style.transform=`translateX(${b*4}px)`;let g=f.clone().project(n),p=g.z>1,v=(g.x*.5+.5)*innerWidth,_=(-g.y*.5+.5)*innerHeight;p&&(v=innerWidth-v,_=innerHeight-40),v=Math.max(40,Math.min(innerWidth-40,v)),_=Math.max(60,Math.min(innerHeight-60,_)),this.wp.style.display=i.ads>.5?"none":"block",this.wp.style.transform=`translate(${v}px,${_}px)`,this.wpM.textContent=Math.round(Math.hypot(f.x-i.pos.x,f.z-i.pos.z))+"m"}else this.wp.style.display="none",this.cmpObj.style.display="none";for(let m=this.dirs.length-1;m>=0;m--){let b=this.dirs[m];if(b.t-=e,b.t<=0){b.el.remove(),this.dirs.splice(m,1);continue}let g=Math.atan2(b.from.x-i.pos.x,-(b.from.z-i.pos.z))*180/Math.PI-u;b.el.style.transform=`translate(-50%,-50%) rotate(${g}deg)`,b.el.style.opacity=Math.min(1,b.t)}if(this.nadeT>0){this.nadeT-=e,this.nade.style.display="block";let m=Math.atan2(this.nadePos.x-i.pos.x,-(this.nadePos.z-i.pos.z))-u*Math.PI/180;this.nade.style.transform=`translate(${innerWidth/2+Math.sin(m)*110-22}px,${innerHeight/2-Math.cos(m)*110-22}px)`}else this.nade.style.display="none";this.drawRadar(i,t,u),this.frames++,this.fpsT+=e,this.fpsT>.5&&(this.fps.textContent=t.settings.showFps?Math.round(this.frames/this.fpsT)+" FPS":"",this.frames=0,this.fpsT=0)}drawRadar(e,t,i){let n=this.radar,s=180,a=40;n.clearRect(0,0,s,s),n.save(),n.beginPath(),n.arc(s/2,s/2,s/2-2,0,7),n.clip(),n.fillStyle="rgba(10,16,12,0.55)",n.fillRect(0,0,s,s),n.translate(s/2,s/2),n.rotate(-i*Math.PI/180);let o=s/2/a;n.fillStyle="rgba(160,190,170,0.25)";for(let c of t.world.colliders){if(c.max.y<1.2||c.noRay)continue;let h=(c.min.x-e.pos.x)*o,d=(c.min.z-e.pos.z)*o,u=(c.max.x-c.min.x)*o,f=(c.max.z-c.min.z)*o;h>s||d>s||h+u<-s||d+f<-s||n.fillRect(h,d,u,f)}for(let c of t.enemies.list)!c.alive||!(c.hostage||c.friendly||c.state==="combat"&&c.fireCd>0&&c.seesPlayer)||(n.fillStyle=c.hostage?"#4cf":"#ff3b30",n.beginPath(),n.arc((c.pos.x-e.pos.x)*o,(c.pos.z-e.pos.z)*o,4,0,7),n.fill());let l=t.waypoint();if(l){n.fillStyle="#ffd34d";let c=Math.max(-80,Math.min(80,(l.x-e.pos.x)*o)),h=Math.max(-80,Math.min(80,(l.z-e.pos.z)*o));n.fillRect(c-4,h-4,8,8)}n.restore(),n.fillStyle="#fff",n.beginPath(),n.moveTo(s/2,s/2-8),n.lineTo(s/2-6,s/2+6),n.lineTo(s/2+6,s/2+6),n.fill(),n.strokeStyle="rgba(200,230,210,0.5)",n.lineWidth=2,n.beginPath(),n.arc(s/2,s/2,s/2-2,0,7),n.stroke()}};var bo=new D;function en(r,e,t,i,n,s){let a=2*Math.PI*n/4,o=Math.max(s-2*n,0),l=Math.PI/4;bo.copy(e),bo[i]=0,bo.normalize();let c=.5*a/(a+o),h=1-bo.angleTo(r)/l;return Math.sign(bo[t])===1?h*c:o/(a+o)+c+c*(1-h)}var vo=class r extends Rt{constructor(e=1,t=1,i=1,n=2,s=.1){let a=n*2+1;if(s=Math.min(e/2,t/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:n,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new D,c=new D,h=new D(e,t,i).divideScalar(2).subScalar(s),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,m=d.length/6,b=new D,g=.5/a;for(let p=0,v=0;p<d.length;p+=3,v+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*s,d[p+1]=h.y*Math.sign(l.y)+c.y*s,d[p+2]=h.z*Math.sign(l.z)+c.z*s,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:b.set(1,0,0),f[v+0]=en(b,c,"z","y",s,i),f[v+1]=1-en(b,c,"y","z",s,t);break;case 1:b.set(-1,0,0),f[v+0]=1-en(b,c,"z","y",s,i),f[v+1]=1-en(b,c,"y","z",s,t);break;case 2:b.set(0,1,0),f[v+0]=1-en(b,c,"x","z",s,e),f[v+1]=en(b,c,"z","x",s,i);break;case 3:b.set(0,-1,0),f[v+0]=1-en(b,c,"x","z",s,e),f[v+1]=1-en(b,c,"z","x",s,i);break;case 4:b.set(0,0,1),f[v+0]=1-en(b,c,"x","y",s,e),f[v+1]=1-en(b,c,"y","x",s,t);break;case 5:b.set(0,0,-1),f[v+0]=en(b,c,"x","y",s,e),f[v+1]=1-en(b,c,"y","x",s,t);break}}static fromJSON(e){return new r(e.width,e.height,e.depth,e.segments,e.radius)}};function Rd(r,e){if(e===Kh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===kr||e===io){let t=r.getIndex();if(t===null){let s=[],a=r.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let i=t.count-2,n=[];if(e===kr)for(let s=1;s<=i;s++)n.push(t.getX(0)),n.push(t.getX(s)),n.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(n.push(t.getX(s)),n.push(t.getX(s+1)),n.push(t.getX(s+2))):(n.push(t.getX(s+2)),n.push(t.getX(s+1)),n.push(t.getX(s)));return n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(n),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function Nc(r){let e=new Map,t=new Map,i=r.clone();return Wp(r,i,function(n,s){e.set(s,n),t.set(n,s)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;let s=n,a=e.get(n),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function Wp(r,e,t){t(r,e);for(let i=0;i<r.children.length;i++)Wp(r.children[i],e.children[i],t)}var Fc=class extends un{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Fd(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new Ud(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new jd(t)}),this.register(function(t){return new Yd(t)}),this.register(function(t){return new kd(t)}),this.register(function(t){return new zd(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new Gd(t)}),this.register(function(t){return new Nd(t)}),this.register(function(t){return new Vd(t)}),this.register(function(t){return new Bd(t)}),this.register(function(t){return new qd(t)}),this.register(function(t){return new Wd(t)}),this.register(function(t){return new Id(t)}),this.register(function(t){return new Oc(t,Ke.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Oc(t,Ke.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Kd(t)})}load(e,t,i,n){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Qn.extractUrlBase(e);a=Qn.resolveURL(c,this.path)}else a=Qn.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){n?n(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new zs(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let s,a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Kp){try{a[Ke.KHR_BINARY_GLTF]=new Jd(e)}catch(d){n&&n(d);return}s=JSON.parse(a[Ke.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new nu(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let d=s.extensionsUsed[h],u=s.extensionsRequired||[];switch(d){case Ke.KHR_MATERIALS_UNLIT:a[d]=new Ld;break;case Ke.KHR_DRACO_MESH_COMPRESSION:a[d]=new Zd(s,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:a[d]=new Qd;break;case Ke.KHR_MESH_QUANTIZATION:a[d]=new $d;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){let i=this;return new Promise(function(n,s){i.parse(e,t,n,s)})}};function Sy(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Ht(r,e,t){let i=r.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Id=class{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){let s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,n=t.cache.get(i);if(n)return n;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,h=new be(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],ei);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new fs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ui(h),c.distance=d;break;case"spot":c=new Gs(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),An(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},Ld=class{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return ti}extendParams(e,t,i){let n=[];e.color=new be(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],ei),e.opacity=a[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",s.baseColorTexture,at))}return Promise.all(n)}},Nd=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},Fd=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Ii:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(n.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(s,s)}return Promise.all(n)}},Od=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Ii:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(n)}},Ud=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Ii:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},Bd=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Ii:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(n)}},kd=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Ii:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.sheenColor=new be(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],ei)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,at)),i.sheenRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(n)}},zd=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Ii:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&n.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(n)}},Hd=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Ii:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let s=i.attenuationColor||[1,1,1];return t.attenuationColor=new be().setRGB(s[0],s[1],s[2],ei),Promise.all(n)}},Gd=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Ii:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Vd=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Ii:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let s=i.specularColorFactor||[1,1,1];return t.specularColor=new be().setRGB(s[0],s[1],s[2],ei),i.specularColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,at)),Promise.all(n)}},Wd=class{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Ii:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&n.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(n)}},qd=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Ii:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&n.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(n)}},Xd=class{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let s=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},jd=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=n.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},Yd=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=n.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},Oc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=n.byteOffset||0,c=n.byteLength||0,h=n.count,d=n.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,n.mode,n.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,n.mode,n.filter),f})})}else return null}},Kd=class{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=t.meshes[i.mesh];for(let c of n.primitives)if(c.mode!==tn.TRIANGLES&&c.mode!==tn.TRIANGLE_STRIP&&c.mode!==tn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(let m of d){let b=new Le,g=new D,p=new Lt,v=new D(1,1,1),_=new Xn(m.geometry,m.material,u);for(let w=0;w<u;w++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,w),l.SCALE&&v.fromBufferAttribute(l.SCALE,w),_.setMatrixAt(w,b.compose(g,p,v));let y=null;for(let w in l)if(w==="_COLOR_0"){let E=l[w];_.instanceColor=new qn(E.array,E.itemSize,E.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(y===null){let x=_.geometry;y=new Ot,y.name=x.name;for(let M in x.attributes)y.setAttribute(M,x.attributes[M]);for(let M in x.morphAttributes)y.morphAttributes[M]=x.morphAttributes[M];x.index!==null&&y.setIndex(x.index),y.morphTargetsRelative=x.morphTargetsRelative;for(let M of x.groups)y.addGroup(M.start,M.count,M.materialIndex);x.boundingBox!==null&&(y.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(y.boundingSphere=x.boundingSphere.clone()),y.drawRange.start=x.drawRange.start,y.drawRange.count=x.drawRange.count,y.userData=Object.assign({},x.userData),_.geometry=y}let E=l[w];y.setAttribute(w,new qn(E.array,E.itemSize,E.normalized))}ct.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Kp="glTF",yo=12,qp={JSON:1313821514,BIN:5130562},Jd=class{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,yo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Kp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-yo,s=new DataView(e,yo),a=0;for(;a<n;){let o=s.getUint32(a,!0);a+=4;let l=s.getUint32(a,!0);if(a+=4,l===qp.JSON){let c=new Uint8Array(e,yo+a,o);this.content=i.decode(c)}else if(l===qp.BIN){let c=yo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Zd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,n=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let d=tu[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=tu[h]||h.toLowerCase();if(a[h]!==void 0){let u=i.accessors[e.attributes[h]],f=Xr[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d,u){n.decodeDracoFile(h,function(f){for(let m in f.attributes){let b=f.attributes[m],g=l[m];g!==void 0&&(b.normalized=g)}d(f)},o,c,ei,u)})})}},Qd=class{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},$d=class{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}},Uc=class extends _n{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n*3+n;for(let a=0;a!==n;a++)t[a]=i[s+a];return t}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,d=(i-t)/h,u=d*d,f=u*d,m=e*c,b=m-c,g=-2*f+3*u,p=f-u,v=1-g,_=p-u+d;for(let y=0;y!==o;y++){let w=a[b+y+o],E=a[b+y+l]*h,x=a[m+y+o],M=a[m+y]*h;s[y]=v*w+_*E+g*x+p*M}return s}},wy=new Lt,eu=class extends Uc{interpolate_(e,t,i,n){let s=super.interpolate_(e,t,i,n);return wy.fromArray(s).normalize().toArray(s),s}},tn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Xr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xp={9728:Et,9729:ft,9984:Ll,9985:Ur,9986:js,9987:Ni},jp={33071:Oi,33648:Mr,10497:Qt},Cd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ty={CUBICSPLINE:void 0,LINEAR:Is,STEP:Ds},Pd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ey(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new qe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zi})),r.DefaultMaterial}function Zs(r,e,t){for(let i in t.extensions)r[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function An(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ay(r,e,t){let i=!1,n=!1,s=!1;for(let c=0,h=e.length;c<h;c++){let d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(n=!0),d.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(r);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let d=e[c];if(i){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):r.attributes.position;a.push(u)}if(n){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):r.attributes.normal;o.push(u)}if(s){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):r.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],d=c[1],u=c[2];return i&&(r.morphAttributes.position=h),n&&(r.morphAttributes.normal=d),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function Ry(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)r.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Cy(r){let e,t=r.extensions&&r.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Dd(t.attributes):e=r.indices+":"+Dd(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,n=r.targets.length;i<n;i++)e+=":"+Dd(r.targets[i]);return e}function Dd(r){let e="",t=Object.keys(r).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+r[t[i]]+";";return e}function iu(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Py(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Dy=new Le,nu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Sy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||s&&a<98?(this.textureLoader=new Oa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Ba(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zs(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return Zs(s,o,n),An(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=t.length;n<s;n++){let a=t[n].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let n=0,s=e.length;n<s;n++){let a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let n=i.clone(),s=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())s(h,o.children[c])};return s(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let n=e(t[i]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let n=0;n<t.length;n++){let s=e(t[n]);s&&i.push(s)}return i}getDependency(e,t){let i=e+":"+t,n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(s,a){i.load(Qn.resolveURL(t.uri,n.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let n=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(e){let t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){let a=Cd[n.type],o=Xr[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new Nt(c,a,l))}let s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],l=Cd[n.type],c=Xr[n.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,m=n.normalized===!0,b,g;if(f&&f!==d){let p=Math.floor(u/f),v="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count,_=t.cache.get(v);_||(b=new c(o,p*f,n.count*f/h),_=new Ns(b,f/h),t.cache.add(v,_)),g=new hs(_,l,u%f/h,m)}else o===null?b=new c(n.count*l):b=new c(o,u,n.count*l),g=new Nt(b,l,m);if(n.sparse!==void 0){let p=Cd.SCALAR,v=Xr[n.sparse.indices.componentType],_=n.sparse.indices.byteOffset||0,y=n.sparse.values.byteOffset||0,w=new v(a[1],_,n.sparse.count*p),E=new c(a[2],y,n.sparse.count*l);o!==null&&(g=new Nt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let x=0,M=w.length;x<M;x++){let R=w[x];if(g.setX(R,E[x*l]),l>=2&&g.setY(R,E[x*l+1]),l>=3&&g.setZ(R,E[x*l+2]),l>=4&&g.setW(R,E[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,i=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){let n=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(s.samplers||{})[a.sampler]||{};return h.magFilter=Xp[u.magFilter]||ft,h.minFilter=Xp[u.minFilter]||Ni,h.wrapS=jp[u.wrapS]||Qt,h.wrapT=jp[u.wrapT]||Qt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Et&&h.minFilter!==ft,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,n=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=n.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=i.getDependency("bufferView",a.bufferView).then(function(u){return new Promise(function(f,m){t.parse(u,f,m)})});else{if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(u){return new Promise(function(f,m){let b=f;t.isImageBitmapLoader===!0&&(b=function(g){let p=new Ft(g);p.needsUpdate=!0,f(p)}),t.load(Qn.resolveURL(u,s.path),b,void 0,m)})})}let d=h.then(function(u){return c===!0&&o.revokeObjectURL(l),An(u,a),u.userData.mimeType=a.mimeType||Py(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=d,d}assignTexture(e,t,i,n){let s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[Ke.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(a);a=s.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,n=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Pr,wi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Cr,wi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||s||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return qe}loadMaterial(e){let t=this,i=this.json,n=this.extensions,s=i.materials[e],a,o={},l=s.extensions||{},c=[];if(l[Ke.KHR_MATERIALS_UNLIT]){let d=n[Ke.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,s,t))}else{let d=s.pbrMetallicRoughness||{};if(o.color=new be(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],ei),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,at)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Li);let h=s.alphaMode||Pd.OPAQUE;if(h===Pd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Pd.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==ti&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ue(1,1),s.normalTexture.scale!==void 0)){let d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&a!==ti&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==ti){let d=s.emissiveFactor;o.emissive=new be().setRGB(d[0],d[1],d[2],ei)}return s.emissiveTexture!==void 0&&a!==ti&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,at)),Promise.all(c).then(function(){let d=new a(o);return s.name&&(d.name=s.name),An(d,s),t.associations.set(d,{materials:e}),s.extensions&&Zs(n,d,s),d})}createUniqueName(e){let t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,n=this.primitiveCache;function s(o){return i[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Yp(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Cy(c),d=n[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=Yp(new Ot,c,t),c.mode===tn.TRIANGLE_STRIP?u=u.then(f=>Rd(f,io)):c.mode===tn.TRIANGLE_FAN&&(u=u.then(f=>Rd(f,kr))),n[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,n=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?Ey(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,m=h.length;f<m;f++){let b=h[f],g=a[f],p,v=c[f];if(g.mode===tn.TRIANGLES||g.mode===tn.TRIANGLE_STRIP||g.mode===tn.TRIANGLE_FAN||g.mode===void 0){let _=s.isSkinnedMesh===!0,y=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");_&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=_&&y?new Ma(b,v):new Te(b,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===tn.LINES)p=new wa(b,v);else if(g.mode===tn.LINE_STRIP)p=new Os(b,v);else if(g.mode===tn.LINE_LOOP)p=new Ta(b,v);else if(g.mode===tn.POINTS)p=new Us(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Ry(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),An(p,s),g.extensions&&Zs(n,p,g),t.assignFinalMaterial(p),d.push(p)}for(let f=0,m=d.length;f<m;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&Zs(n,d[0],s),d[0];let u=new tt;s.extensions&&Zs(n,u,s),t.associations.set(u,{meshes:e});for(let f=0,m=d.length;f<m;f++)u.add(d[f]);return u})}loadCamera(e){let t,i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Vt(Wt.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Zn(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),An(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let n=0,s=t.joints.length;n<s;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let s=n.pop(),a=n,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let d=a[c];if(d){o.push(d);let u=new Le;s!==null&&u.fromArray(s.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Sa(o,l)})}loadAnimation(e){let t=this.json,i=this,n=t.animations[e],s=n.name?n.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,u=n.channels.length;d<u;d++){let f=n.channels[d],m=n.samplers[f.sampler],b=f.target,g=b.node,p=n.parameters!==void 0?n.parameters[m.input]:m.input,v=n.parameters!==void 0?n.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(m),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],m=d[2],b=d[3],g=d[4],p=[];for(let _=0,y=u.length;_<y;_++){let w=u[_],E=f[_],x=m[_],M=b[_],R=g[_];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let A=i._createAnimationTracks(w,E,x,M,R);if(A)for(let I=0;I<A.length;I++)p.push(A[I])}let v=new ks(s,void 0,p);return An(v,n),v})}createNodeMesh(e){let t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){let a=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(e){let t=this.json,i=this,n=t.nodes[e],s=i._loadNodeShallow(e),a=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));let l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){let h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,Dy)});for(let f=0,m=d.length;f<m;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){let f=h.userData.pivot,m=d[0];h.pivot=new D().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?n.createUniqueName(s.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new Rr:c.length>1?h=new tt:c.length===1?h=c[0]:h=new ct,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(s.name&&(h.userData.name=s.name,h.name=a),An(h,s),s.extensions&&Zs(i,h,s),s.matrix!==void 0){let d=new Le;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(s.mesh!==void 0&&n.meshCache.refs[s.mesh]>1){let d=n.associations.get(h);n.associations.set(h,{...d})}return n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],n=this,s=new tt;i.name&&(s.name=n.createUniqueName(i.name)),An(s,i),i.extensions&&Zs(t,s,i);let a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++){let u=l[h];u.parent!==null?s.add(Nc(u)):s.add(u)}let c=h=>{let d=new Map;for(let[u,f]of n.associations)(u instanceof wi||u instanceof Ft)&&d.set(u,f);return h.traverse(u=>{let f=n.associations.get(u);f!=null&&d.set(u,f)}),d};return n.associations=c(s),s})}_createAnimationTracks(e,t,i,n,s){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}xs[s.path]===xs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(xs[s.path]){case xs.weights:h=Yn;break;case xs.rotation:h=Kn;break;case xs.translation:case xs.scale:h=us;break;default:i.itemSize===1?h=Yn:h=us;break}let d=n.interpolation!==void 0?Ty[n.interpolation]:Is,u=this._getArrayFromAccessor(i);for(let f=0,m=l.length;f<m;f++){let b=new h(l[f]+"."+xs[s.path],t.array,u,d);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=iu(t.constructor),n=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)n[s]=t[s]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let n=this instanceof Kn?eu:Uc;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Iy(r,e,t){let i=e.attributes,n=new $t;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){let h=iu(Xr[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new D,l=new D;for(let c=0,h=s.length;c<h;c++){let d=s[c];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,m=u.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),u.normalized){let b=iu(Xr[u.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}r.boundingBox=n;let a=new Ui;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=a}function Yp(r,e,t){let i=e.attributes,n=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(let a in i){let o=tu[a]||a.toLowerCase();o in r.attributes||n.push(s(i[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});n.push(a)}return We.workingColorSpace!==ei&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),An(r,e),Iy(r,e,t),Promise.all(n).then(function(){return e.targets!==void 0?Ay(r,e.targets,t):r})}var Bc=class extends Fa{constructor(e){super(e),this.type=xt}parse(e){let a=function(M,R){switch(M){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(R||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(R||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(R||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(R||""))}},d=function(M,R,A){R=R||1024;let L=M.pos,U=-1,P=0,O="",B=String.fromCharCode.apply(null,new Uint16Array(M.subarray(L,L+128)));for(;0>(U=B.indexOf(`
`))&&P<R&&L<M.byteLength;)O+=B,P+=B.length,L+=128,B=String.fromCharCode.apply(null,new Uint16Array(M.subarray(L,L+128)));return-1<U?(A!==!1&&(M.pos+=P+U+1),O+B.slice(0,U)):!1},u=function(M){let R=/^#\?(\S+)/,A=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},O,B;for((M.pos>=M.byteLength||!(O=d(M)))&&a(1,"no header found"),(B=O.match(R))||a(3,"bad initial token"),P.valid|=1,P.programtype=B[1],P.string+=O+`
`;O=d(M),O!==!1;){if(P.string+=O+`
`,O.charAt(0)==="#"){P.comments+=O+`
`;continue}if((B=O.match(A))&&(P.gamma=parseFloat(B[1])),(B=O.match(I))&&(P.exposure=parseFloat(B[1])),(B=O.match(L))&&(P.valid|=2,P.format=B[1]),(B=O.match(U))&&(P.valid|=4,P.height=parseInt(B[1],10),P.width=parseInt(B[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||a(3,"missing format specifier"),P.valid&4||a(3,"missing image size specifier"),P},f=function(M,R,A){let I=R;if(I<8||I>32767||M[0]!==2||M[1]!==2||M[2]&128)return new Uint8Array(M);I!==(M[2]<<8|M[3])&&a(3,"wrong scanline width");let L=new Uint8Array(4*R*A);L.length||a(4,"unable to allocate buffer space");let U=0,P=0,O=4*I,B=new Uint8Array(4),H=new Uint8Array(O),Z=A;for(;Z>0&&P<M.byteLength;){P+4>M.byteLength&&a(1),B[0]=M[P++],B[1]=M[P++],B[2]=M[P++],B[3]=M[P++],(B[0]!=2||B[1]!=2||(B[2]<<8|B[3])!=I)&&a(3,"bad rgbe scanline format");let z=0,X;for(;z<O&&P<M.byteLength;){X=M[P++];let pe=X>128;if(pe&&(X-=128),(X===0||z+X>O)&&a(3,"bad scanline data"),pe){let Ce=M[P++];for(let K=0;K<X;K++)H[z++]=Ce}else H.set(M.subarray(P,P+X),z),z+=X,P+=X}let ee=I;for(let pe=0;pe<ee;pe++){let Ce=0;L[U]=H[pe+Ce],Ce+=I,L[U+1]=H[pe+Ce],Ce+=I,L[U+2]=H[pe+Ce],Ce+=I,L[U+3]=H[pe+Ce],U+=4}Z--}return L},m=function(M,R,A,I){let L=M[R+3],U=Math.pow(2,L-128)/255;A[I+0]=M[R+0]*U,A[I+1]=M[R+1]*U,A[I+2]=M[R+2]*U,A[I+3]=1},b=function(M,R,A,I){let L=M[R+3],U=Math.pow(2,L-128)/255;A[I+0]=cs.toHalfFloat(Math.min(M[R+0]*U,65504)),A[I+1]=cs.toHalfFloat(Math.min(M[R+1]*U,65504)),A[I+2]=cs.toHalfFloat(Math.min(M[R+2]*U,65504)),A[I+3]=cs.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;let p=u(g),v=p.width,_=p.height,y=f(g.subarray(g.pos),v,_),w,E,x;switch(this.type){case Ai:x=y.length/4;let M=new Float32Array(x*4);for(let A=0;A<x;A++)m(y,A*4,M,A*4);w=M,E=Ai;break;case xt:x=y.length/4;let R=new Uint16Array(x*4);for(let A=0;A<x;A++)b(y,A*4,R,A*4);w=R,E=xt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:v,height:_,data:w,header:p.string,gamma:p.gamma,exposure:p.exposure,type:E,colorSpace:ei,minFilter:ft,magFilter:ft,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var su=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var n=WebAssembly.validate(t)?o(e):o(r),s,a=WebAssembly.instantiate(n,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),_=0;_<p.length;++_){var y=p.charCodeAt(_);v[_]=y>96?y-97:y>64?y-39:y+4}for(var w=0,_=0;_<p.length;++_)v[w++]=v[_]<60?i[v[_]]:(v[_]-60)*64+v[++_];return v.buffer.slice(0,w)}function l(p,v,_,y,w,E,x){var M=p.exports.sbrk,R=y+3&-4,A=M(R*w),I=M(E.length),L=new Uint8Array(p.exports.memory.buffer);L.set(E,I);var U=v(A,y,w,I,E.length);if(U==0&&x&&x(A,R,w),_.set(L.subarray(A,A+y*w)),M(A-M(0)),U!=0)throw new Error("Malformed buffer data: "+U)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function f(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(_){var y=_.data;v.pending-=y.count,v.requests[y.id][y.action](y.value),delete v.requests[y.id]},v}function m(p){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(n)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+l.toString()+g.toString(),_=new Blob([v],{type:"text/javascript"}),y=URL.createObjectURL(_),w=d.length;w<p;++w)d[w]=f(y);for(var w=p;w<d.length;++w)d[w].object.postMessage({});d.length=p,URL.revokeObjectURL(y)}function b(p,v,_,y,w){for(var E=d[0],x=1;x<d.length;++x)d[x].pending<E.pending&&(E=d[x]);return new Promise(function(M,R){var A=new Uint8Array(_),I=++u;E.pending+=p,E.requests[I]={resolve:M,reject:R},E.object.postMessage({id:I,count:p,size:v,source:A,mode:y,filter:w},[A.buffer])})}function g(p){var v=p.data;self.ready.then(function(_){if(!v.id)return self.close();try{var y=new Uint8Array(v.count*v.size);l(_,_.exports[v.mode],y,v.count,v.size,v.source,_.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:y},[y.buffer])}catch(w){self.postMessage({id:v.id,count:v.count,action:"reject",value:w})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,v,_,y,w){l(s,s.exports.meshopt_decodeVertexBuffer,p,v,_,y,s.exports[c[w]])},decodeIndexBuffer:function(p,v,_,y){l(s,s.exports.meshopt_decodeIndexBuffer,p,v,_,y)},decodeIndexSequence:function(p,v,_,y){l(s,s.exports.meshopt_decodeIndexSequence,p,v,_,y)},decodeGltfBuffer:function(p,v,_,y,w,E){l(s,s.exports[h[w]],p,v,_,y,s.exports[c[E]])},decodeGltfBufferAsync:function(p,v,_,y,w){return d.length>0?b(p,v,_,h[y],c[w]):a.then(function(){var E=new Uint8Array(p*v);return l(s,s.exports[h[y]],E,p,v,_,s.exports[c[w]]),E})}}})();var Ly=()=>window.__A||{};function Ny(r){let e=atob(r),t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}function lu(r){let e=Ly()[r];if(!e)throw new Error("Missing asset "+r);return Ny(e)}var ru=new Map;async function Rn(r,{srgb:e=!1,repeat:t=1,aniso:i=8}={}){let n=r+(e?":s":":l");if(!ru.has(n)){let o=(async()=>{let l=lu(r),c=r.endsWith(".png")?"image/png":r.endsWith(".webp")?"image/webp":"image/jpeg",h=await createImageBitmap(new Blob([l],{type:c}),{imageOrientation:"flipY"}),d=new Ft(h);return d.flipY=!1,d.wrapS=d.wrapT=Qt,d.colorSpace=e?at:mn,d.anisotropy=i,d.generateMipmaps=!0,d.minFilter=Ni,d.needsUpdate=!0,d})();ru.set(n,o)}let s=await ru.get(n);if(t===1)return s;let a=s.clone();return a.repeat.set(t,t),a.needsUpdate=!0,a}var kc,au=new Map;async function Cn(r){if(!au.has(r)){kc||(kc=new Fc,kc.setMeshoptDecoder(su));let e=(async()=>{await su.ready;let t=lu("model/"+r+".glb");return await new Promise((i,n)=>kc.parse(t.buffer,"",i,n))})();au.set(r,e)}return au.get(r)}function Jp(r){let e=lu("hdri/"+r+".hdr"),i=new Bc().parse(e.buffer),n=new Bi(i.data,i.width,i.height,Ri,i.type);return n.colorSpace=ei,n.mapping=ms,n.minFilter=ft,n.magFilter=ft,n.generateMipmaps=!1,n.flipY=!0,n.needsUpdate=!0,n}var ou=new Map;async function pi(r,{repeat:e=1,color:t,roughMul:i,metal:n,normalScale:s=1,envInt:a}={}){let o=r+"|"+e+"|"+(t??"")+"|"+(i??"")+"|"+(n??"")+"|"+s;if(ou.has(o))return ou.get(o);let[l,c,h]=await Promise.all([Rn(`tex/${r}_diff.jpg`,{srgb:!0}),Rn(`tex/${r}_nor.jpg`),Rn(`tex/${r}_arm.jpg`)]),d=new qe({map:l,normalMap:c,aoMap:h,roughnessMap:h,metalnessMap:h,roughness:i??1,metalness:n??1,normalScale:new ue(s,s)});if(d.aoMapIntensity=1,t&&d.color.set(t),cu(d),a!==void 0&&(d.envMapIntensity=a),e!==1){for(let u of[d.map,d.normalMap,d.aoMap]);d.userData.uvScale=e}return ou.set(o,d),d}function cu(r,e=1){r.onBeforeCompile=t=>{t.uniforms.grimeAmt={value:e},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= 1.0 - g; }`)},r.customProgramCacheKey=()=>"grime"+e}var qi={m4a1:{name:"M4A1",type:"Assault Rifle",slot:"primary",sound:"ar",damage:[32,22],range:[30,70],head:2,rpm:800,mag:30,reserve:180,reload:2.1,reloadEmpty:2.6,auto:!0,modes:["auto","semi"],ads:.22,zoom:1.25,hip:3.2,adsSpread:.15,recoil:[.9,.35],kick:.022,move:.95,model:"m4",sightY:.092,desc:"Versatile 5.56 carbine. Controllable recoil, fast handling."},ak47:{name:"AK-47",type:"Assault Rifle",slot:"primary",sound:"ak",damage:[40,28],range:[28,65],head:2,rpm:600,mag:30,reserve:150,reload:2.4,reloadEmpty:2.9,auto:!0,modes:["auto","semi"],ads:.26,zoom:1.25,hip:3.6,adsSpread:.2,recoil:[1.35,.55],kick:.03,move:.93,model:"ak",sightY:.08,desc:"Hard-hitting 7.62. Heavy recoil, rewards burst fire."},mp5:{name:"MP5",type:"Submachine Gun",slot:"primary",sound:"smg",damage:[28,16],range:[15,40],head:1.8,rpm:850,mag:30,reserve:210,reload:1.8,reloadEmpty:2.3,auto:!0,modes:["auto","semi"],ads:.16,zoom:1.15,hip:2.4,adsSpread:.25,recoil:[.55,.3],kick:.016,move:1.05,model:"mp5",sightY:.085,desc:"Fast and accurate up close. Great on the move."},m870:{name:"M870",type:"Shotgun",slot:"primary",sound:"shotgun",damage:[22,5],range:[7,22],head:1.3,rpm:70,mag:6,reserve:36,reload:.55,reloadEmpty:.55,shellReload:!0,pellets:9,pelletSpread:4,auto:!1,modes:["pump"],ads:.22,zoom:1.1,hip:4,adsSpread:3,recoil:[4,1],kick:.07,move:.97,model:"shotgun",sightY:.07,desc:"Pump-action 12 gauge. Devastating in close quarters."},m249:{name:"M249",type:"Light Machine Gun",slot:"primary",sound:"lmg",damage:[34,25],range:[35,80],head:1.8,rpm:750,mag:100,reserve:200,reload:4.5,reloadEmpty:5,auto:!0,modes:["auto"],ads:.38,zoom:1.25,hip:4.5,adsSpread:.3,recoil:[.95,.6],kick:.025,move:.85,model:"lmg",sightY:.137,desc:"Belt-fed suppression. Huge capacity, slow handling."},bolt762:{name:"Bolt-Action 7.62",type:"Sniper Rifle",slot:"primary",sound:"sniper",damage:[120,95],range:[80,200],head:3,rpm:45,mag:5,reserve:30,reload:3,reloadEmpty:3.4,bolt:!0,auto:!1,modes:["bolt"],ads:.4,zoom:5.5,hip:7,adsSpread:0,recoil:[4.5,.8],kick:.08,move:.88,model:"sniper",scope:!0,sightY:.075,desc:"One shot, one kill. Scoped 7.62 with breath control (hold Shift)."},m9:{name:"P38 Service Pistol",type:"Pistol",slot:"secondary",sound:"pistol",damage:[34,20],range:[15,35],head:2,rpm:400,mag:8,reserve:48,reload:1.5,reloadEmpty:1.9,auto:!1,modes:["semi"],ads:.14,zoom:1.1,hip:2.4,adsSpread:.3,recoil:[1.6,.4],kick:.04,move:1.08,model:"pistol",sightY:.064,desc:"Reliable 9mm sidearm. Quick to draw."},d50:{name:"D50 Magnum",type:"Pistol",slot:"secondary",sound:"magnum",damage:[70,40],range:[18,40],head:2,rpm:180,mag:7,reserve:28,reload:1.9,reloadEmpty:2.3,auto:!1,modes:["semi"],ads:.18,zoom:1.15,hip:3.2,adsSpread:.4,recoil:[4,.9],kick:.08,move:1.04,model:"magnum",sightY:.078,desc:".50 calibre hand cannon. Brutal recoil."}},hu={optic:{iron:{name:"Iron Sights"},reddot:{name:"Red Dot",zoom:1.1},holo:{name:"Holographic",zoom:1.12},acog:{name:"4x ACOG",zoom:2.4,adsMul:1.25}},muzzle:{none:{name:"None"},suppressor:{name:"Suppressor",quiet:!0,rangeMul:.8},compensator:{name:"Compensator",recoilSide:.6}},under:{none:{name:"None"},grip:{name:"Vertical Grip",recoilMul:.78},laser:{name:"Laser Sight",hipMul:.6}},mag:{std:{name:"Standard Mag"},ext:{name:"Extended Mag",magMul:1.5,reloadMul:1.12}}},Zp={frag:{name:"Frag Grenade",count:2},c4:{name:"Semtex",count:2,sticky:!0}},Qp={flash:{name:"Flashbang",count:2},smoke:{name:"Smoke Grenade",count:1}},$p={stopping:{name:"Stopping Power",desc:"+25% bullet damage"},sleight:{name:"Sleight of Hand",desc:"35% faster reloads"},jugg:{name:"Juggernaut",desc:"+40% max health"},lightweight:{name:"Lightweight",desc:"+12% movement speed, faster sprint-out"},steady:{name:"Steady Aim",desc:"35% tighter hip-fire spread"},scavenger:{name:"Scavenger",desc:"Pick up ammo from fallen enemies"}};function em(r){let e=qi[r];return e.scope?{optic:[],muzzle:["none","suppressor"],under:[],mag:["std","ext"]}:e.slot==="secondary"?{optic:["iron","reddot"],muzzle:["none","suppressor"],under:["none","laser"],mag:["std","ext"]}:e.model==="shotgun"?{optic:["iron","reddot","holo"],muzzle:["none"],under:["none","grip","laser"],mag:["std","ext"]}:{optic:["iron","reddot","holo","acog"],muzzle:["none","suppressor","compensator"],under:["none","grip","laser"],mag:["std","ext"]}}function Mo(r,e={},t=[]){let i={...qi[r],id:r},n=hu,s=n.optic[e.optic]||{},a=n.muzzle[e.muzzle]||{},o=n.under[e.under]||{},l=n.mag[e.mag]||{};i.zoom=i.scope?i.zoom:(s.zoom||1)*i.zoom,i.ads*=s.adsMul||1,i.suppressed=!!a.quiet,a.rangeMul&&(i.range=i.range.map(h=>h*a.rangeMul)),i.recoil=[i.recoil[0]*(o.recoilMul||1),i.recoil[1]*(o.recoilMul||1)*(a.recoilSide||1)],i.hip*=(o.hipMul||1)*(t.includes("steady")?.65:1),i.laser=e.under==="laser",i.mag=Math.round(i.mag*(l.magMul||1));let c=(l.reloadMul||1)*(t.includes("sleight")?.65:1);return i.reload*=c,i.reloadEmpty*=c,i.dmgMul=t.includes("stopping")?1.25:1,i.optic=i.scope?"scope":e.optic||"iron",i}var zc=null;async function tm(){if(zc)return zc;let[r,e,t,i]=await Promise.all([Rn("tex/metal_plate_nor.jpg"),Rn("tex/metal_plate_arm.jpg"),Rn("tex/brown_planks_03_diff.jpg",{srgb:!0}),Rn("tex/brown_planks_03_nor.jpg")]),n=r.clone();return n.repeat.set(3,3),n.needsUpdate=!0,zc={metal:new qe({color:2303272,metalness:.85,roughness:.38,normalMap:n,normalScale:new ue(.15,.15)}),metalWorn:new qe({color:3816253,metalness:.9,roughness:.3,normalMap:n,normalScale:new ue(.2,.2)}),polymer:new qe({color:1579291,metalness:.05,roughness:.62,normalMap:n,normalScale:new ue(.35,.35)}),tan:new qe({color:9074262,metalness:.05,roughness:.7,normalMap:n,normalScale:new ue(.3,.3)}),wood:new qe({color:11561530,map:t,normalMap:i,normalScale:new ue(.4,.4),metalness:0,roughness:.45}),brass:new qe({color:13213766,metalness:1,roughness:.25}),glass:new qe({color:1780275,metalness:1,roughness:.04,transparent:!0,opacity:.35}),sleeve:new qe({map:Fy(),metalness:0,roughness:.92,normalMap:n,normalScale:new ue(.8,.8)}),glove:new qe({color:2762532,metalness:0,roughness:.75}),skin:new qe({color:11041370,metalness:0,roughness:.6}),laser:new ti({color:16719904,transparent:!0,opacity:.5,blending:Ti,depthWrite:!1})},zc}function Fy(){let r=document.createElement("canvas");r.width=r.height=256;let e=r.getContext("2d");e.fillStyle="#5b5a44",e.fillRect(0,0,256,256);let t=["#3f4430","#6d6648","#2c2a22","#7a7458"];for(let n=0;n<90;n++){e.fillStyle=t[n%t.length],e.beginPath();let s=Math.random()*256,a=Math.random()*256,o=8+Math.random()*22;for(let l=0;l<9;l++){let c=l/9*Math.PI*2,h=o*(.6+Math.random()*.6);e.lineTo(s+Math.cos(c)*h*1.6,a+Math.sin(c)*h*.7)}e.fill()}for(let n=0;n<4e3;n++)e.fillStyle=`rgba(0,0,0,${Math.random()*.12})`,e.fillRect(Math.random()*256,Math.random()*256,1,2);let i=new Ji(r);return i.colorSpace=at,i.wrapS=i.wrapT=Qt,i.repeat.set(1,2),i}function Oy(r){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.translate(64,64);let i=(s,a)=>{let o=t.createRadialGradient(0,0,0,0,0,s);o.addColorStop(0,`rgba(255,60,40,${a})`),o.addColorStop(1,"rgba(255,0,0,0)"),t.fillStyle=o,t.beginPath(),t.arc(0,0,s,0,7),t.fill()};if(t.strokeStyle="rgba(255,50,30,1)",t.fillStyle="rgba(255,80,60,1)",r==="reddot")i(10,1),t.beginPath(),t.arc(0,0,3,0,7),t.fill();else if(r==="holo"){t.lineWidth=3,t.beginPath(),t.arc(0,0,40,0,7),t.stroke(),i(8,1),t.beginPath(),t.arc(0,0,3,0,7),t.fill();for(let s of[0,1,2,3])t.save(),t.rotate(s*Math.PI/2),t.fillRect(-2,40,4,12),t.restore()}else r==="acog"&&(t.lineWidth=4,t.beginPath(),t.moveTo(-18,14),t.lineTo(0,-4),t.lineTo(18,14),t.stroke(),t.fillRect(-1.5,-4,3,60),i(6,.8));let n=new Ji(e);return n.colorSpace=at,n}function Ze(r,e,t,i,n,s,a,o=.006){let l=new Te(new vo(r,e,t,2,o),i);return l.position.set(n,s,a),l}function et(r,e,t,i,n,s,a){let o=new Te(new Rt(r,e,t),i);return o.position.set(n,s,a),o}function si(r,e,t,i,n,s,a=20,o){let l=new Te(new Yt(o??r,r,e,a),t);return l.rotation.x=Math.PI/2,l.position.set(i,n,s),l}function _e(r,...e){for(let t of e)r.add(t);return e[0]}function _o(r,e,t,i,n,s=6){let a=new tt,o=e/s,l=0,c=0,h=0;for(let d=0;d<s;d++){let u=et(t,o*1.06,i,r,0,l-Math.cos(h)*o/2,c-Math.sin(h)*o/2);u.rotation.x=h,a.add(u),l-=Math.cos(h)*o,c-=Math.sin(h)*o,h+=n/s}return a}function Uy(r,e,t){let i=new tt,n=(l,c,h,d,u)=>{let f=l.distanceTo(c),m=new Te(new Yt(d,h,f,14),u);m.position.copy(l).add(c).multiplyScalar(.5),m.quaternion.setFromUnitVectors(new D(0,1,0),c.clone().sub(l).normalize()),i.add(m)},s=(l,c,h)=>{let d=new Te(new vo(.05,.085,.095,2,.02),c);return d.position.copy(l),d.rotation.z=h,i.add(d),d},a=new D(.16,-.22,.28),o=e.clone().add(new D(.02,-.03,.06));if(n(o,a,.034,.04,r.sleeve),n(a,a.clone().add(new D(.12,-.12,.35)),.05,.055,r.sleeve),n(o,e,.03,.032,r.glove),s(e,r.glove,.1),t){let l=new D(-.16,-.22,t.z+.28),c=t.clone().add(new D(-.02,-.035,.06));n(c,l,.034,.04,r.sleeve),n(l,l.clone().add(new D(-.1,-.15,.35)),.05,.055,r.sleeve),n(c,t,.03,.032,r.glove),s(t,r.glove,-.3)}return i}async function By(r,e){let t=qi[r],i=await tm(),n=new tt,s={group:n,sightY:t.sightY,railY:.075,railZ:-.02},a=new ct,o=new ct;n.add(a,o);let l=new D(0,-.035,-.3),c=new D(0,-.07,.07);switch(t.model){case"m4":{_e(n,Ze(.052,.058,.25,i.metal,0,.035,-.05)),_e(n,Ze(.048,.05,.19,i.metal,0,-.012,-.02)),_e(n,et(.024,.012,.23,i.metal,0,.069,-.045));for(let d=0;d<12;d++)_e(n,et(.026,.004,.008,i.metal,0,.076,-.15+d*.019));_e(n,Ze(.06,.062,.31,i.polymer,0,.032,-.33,.012)),_e(n,et(.024,.01,.3,i.metal,0,.068,-.33)),_e(n,si(.0105,.26,i.metal,0,.03,-.6)),_e(n,si(.016,.07,i.metal,0,.03,-.75)),_e(n,et(.02,.05,.02,i.metal,0,.075,-.47)),_e(n,et(.004,.02,.004,i.metal,0,.098,-.47)),_e(n,si(.017,.18,i.metal,0,.03,.16)),_e(n,Ze(.045,.085,.17,i.polymer,0,.005,.29,.01));let h=_e(n,Ze(.03,.11,.045,i.polymer,0,-.075,.075,.008));h.rotation.x=-.3,_e(n,et(.006,.006,.07,i.metal,0,-.045,.02)),_e(n,et(.012,.012,.03,i.metal,0,.06,.09)),s.mag=_o(i.metal,.17,.024,.062,.32),s.mag.position.set(0,-.035,-.075),n.add(s.mag),e.optic==="iron"&&(_e(n,et(.024,.03,.03,i.metal,0,.088,.06)),_e(n,et(.006,.012,.006,i.metal,0,.105,.06))),s.railY=.076,s.railZ=-.02,a.position.set(0,.03,-.79),o.position.set(.03,.04,-.02),l.set(0,-.025,-.33);break}case"ak":{_e(n,Ze(.05,.065,.3,i.metal,0,.02,-.04)),_e(n,Ze(.046,.025,.28,i.metalWorn,0,.06,-.03,.01)),_e(n,Ze(.055,.055,.22,i.wood,0,.018,-.33,.012)),_e(n,Ze(.035,.03,.2,i.wood,0,.065,-.31,.01)),_e(n,si(.011,.3,i.metal,0,.022,-.58)),_e(n,si(.01,.25,i.metal,0,.065,-.42)),_e(n,et(.018,.045,.018,i.metal,0,.05,-.68)),_e(n,et(.004,.02,.004,i.metal,0,.08,-.68)),_e(n,si(.015,.05,i.metal,0,.022,-.74)),_e(n,et(.02,.02,.06,i.metal,0,.075,-.17)),_e(n,et(.012,.008,.01,i.metal,0,.087,-.17));let h=_e(n,Ze(.042,.075,.26,i.wood,0,-.01,.24,.012));h.rotation.x=.12;let d=_e(n,Ze(.03,.1,.045,i.wood,0,-.06,.07,.008));d.rotation.x=-.35,_e(n,et(.006,.006,.07,i.metal,0,-.03,.02)),s.mag=_o(i.metalWorn,.2,.026,.07,.65,8),s.mag.position.set(0,-.012,-.08),n.add(s.mag),s.railY=.074,s.railZ=-.05,a.position.set(0,.022,-.78),o.position.set(.03,.04,-.02),l.set(0,-.02,-.33);break}case"mp5":{_e(n,Ze(.045,.06,.32,i.metal,0,.03,-.1,.012)),_e(n,Ze(.05,.05,.17,i.polymer,0,.028,-.32,.02)),_e(n,si(.01,.08,i.metal,0,.03,-.44)),_e(n,si(.014,.03,i.metal,0,.03,-.475)),_e(n,si(.006,.08,i.metal,0,.073,-.38)),_e(n,si(.012,.012,i.metal,0,.083,-.4)),_e(n,et(.03,.03,.03,i.metal,0,.075,.03)),_e(n,et(.006,.012,.004,i.metal,0,.096,.035)),_e(n,et(.014,.012,.25,i.metal,.02,-0,.17)),_e(n,et(.014,.012,.25,i.metal,-.02,-0,.17)),_e(n,Ze(.045,.07,.025,i.polymer,0,-.01,.3));let h=_e(n,Ze(.03,.1,.045,i.polymer,0,-.06,.04,.008));h.rotation.x=-.25,s.mag=_o(i.metal,.17,.02,.045,.45),s.mag.position.set(0,0,-.14),n.add(s.mag),s.railY=.074,s.railZ=-.08,a.position.set(0,.03,-.5),o.position.set(.03,.04,-.1),l.set(0,-.012,-.32),c.set(0,-.055,.04);break}case"shotgun":{_e(n,Ze(.048,.06,.22,i.metal,0,.025,-.04)),_e(n,si(.013,.55,i.metal,0,.04,-.42)),_e(n,si(.012,.45,i.metal,0,.006,-.36)),s.pump=_e(n,Ze(.05,.045,.17,i.wood,0,.008,-.32,.014)),_e(n,et(.006,.01,.006,i.brass,0,.06,-.68));let h=_e(n,Ze(.042,.08,.3,i.wood,0,-.02,.24,.015));h.rotation.x=.15;let d=_e(n,Ze(.03,.09,.05,i.wood,0,-.04,.09,.01));d.rotation.x=-.6,_e(n,et(.006,.006,.06,i.metal,0,-.02,.02)),s.mag=new ct,n.add(s.mag),s.railY=.056,s.railZ=-.05,a.position.set(0,.04,-.7),o.position.set(.03,.03,-.03),l.set(0,-.02,-.32),c.set(0,-.06,.09);break}case"lmg":{_e(n,Ze(.07,.08,.34,i.metal,0,.03,-.05)),_e(n,Ze(.075,.03,.25,i.metal,0,.085,-.03,.008)),_e(n,Ze(.07,.06,.2,i.polymer,0,.03,-.3,.01)),_e(n,si(.013,.4,i.metal,0,.03,-.55)),_e(n,si(.02,.07,i.metal,0,.03,-.77)),_e(n,et(.012,.1,.02,i.metal,.012,-.02,-.6)),_e(n,et(.012,.1,.02,i.metal,-.012,-.02,-.6)),_e(n,et(.02,.04,.02,i.metal,0,.11,-.62)),_e(n,et(.005,.015,.005,i.metal,0,.13,-.62)),_e(n,et(.03,.035,.03,i.metal,0,.12,.08)),_e(n,et(.008,.012,.005,i.metal,0,.141,.08)),_e(n,si(.04,.03,i.metal,0,.11,-.1)),_e(n,Ze(.05,.09,.22,i.polymer,0,0,.25));let h=_e(n,Ze(.032,.11,.045,i.polymer,0,-.06,.08,.008));h.rotation.x=-.3,s.mag=new tt,s.mag.add(Ze(.09,.12,.13,i.tan,-.03,-.07,0,.015)),s.mag.position.set(0,0,-.09),n.add(s.mag),s.railY=.1,s.railZ=-.05,a.position.set(0,.03,-.81),o.position.set(.04,.04,-.05),l.set(0,-.03,-.3),c.set(0,-.06,.085);break}case"sniper":{let d=(await Cn("bolt_action_rifle_7_62")).scene.clone(!0);d.rotation.y=Math.PI/2,d.scale.setScalar(1),d.position.set(0,-.01,-.12),d.traverse(u=>{u.isMesh&&(u.castShadow=!1,u.material=u.material.clone(),u.material.envMapIntensity=1.2)}),n.add(d),s.mag=new ct,s.mag.position.set(0,-.06,-.15),n.add(s.mag),s.bolt=new ct,n.add(s.bolt),a.position.set(0,.04,-.73),o.position.set(.03,.05,-.1),l.set(0,-.03,-.32),c.set(0,-.07,.12),s.sightY=.075;break}case"pistol":{let d=(await Cn("service_pistol")).scene,u=["service_pistol_pistol_a","service_pistol_slide_a","service_pistol_hammer_a","service_pistol_trigger_a","service_pistol_magazine_loaded"],f=new tt;f.rotation.y=Math.PI/2,f.position.set(0,-.03,-.05),d.updateMatrixWorld(!0);for(let m of u){let b=d.getObjectByName(m);if(!b)continue;let g=b.clone();g.applyMatrix4(b.parent.matrixWorld),f.add(g),m.includes("slide")&&(s.slide=g),m.includes("magazine")&&(g.position.x+=.08,g.position.y+=0,s.mag=g)}n.add(f),a.position.set(0,.035,-.23),o.position.set(.02,.04,-.06),l=new D(-.025,-.05,-.02),c.set(0,-.06,.02),s.sightY=.053,s.railY=.05,s.railZ=-.08,s.pistol=!0;break}case"magnum":{s.slide=_e(n,Ze(.032,.035,.27,i.metalWorn,0,.045,-.08,.006)),_e(n,Ze(.03,.03,.22,i.metal,0,.015,-.06)),_e(n,et(.006,.012,.006,i.metal,0,.069,-.2)),_e(n,et(.02,.012,.006,i.metal,0,.069,.04));let h=_e(n,Ze(.033,.12,.055,i.polymer,0,-.05,.03,.01));h.rotation.x=-.2,_e(n,et(.005,.005,.05,i.metal,0,-.012,-.02)),s.mag=et(.02,.09,.03,i.metal,0,-.05,.03),n.add(s.mag),s.mag.visible=!1,a.position.set(0,.045,-.23),o.position.set(.02,.05,-.05),l=new D(-.025,-.06,0),c.set(0,-.065,.04),s.sightY=.077,s.railY=.063,s.railZ=-.12,s.pistol=!0;break}}if(!t.scope&&e.optic&&e.optic!=="iron"){let h=new tt;h.position.set(0,s.railY,s.railZ);let d,u=new Te(new ki(1,1),new ti({map:Oy(e.optic),transparent:!0,blending:Ti,depthWrite:!1,toneMapped:!1}));if(e.optic==="reddot"){d=.03,h.add(et(.024,.012,.04,i.metal,0,.006,0));let f=new Te(new Yt(.017,.017,.045,24,1,!0),i.metal);f.rotation.x=Math.PI/2,f.position.set(0,d,0),h.add(f);let m=i.metal.clone();m.side=Li,f.material=m,u.scale.setScalar(.03),u.position.set(0,d,-.02)}else if(e.optic==="holo")d=.034,h.add(Ze(.035,.02,.07,i.polymer,0,.01,.01,.005)),h.add(et(.006,.04,.05,i.polymer,.023,.035,-.01)),h.add(et(.006,.04,.05,i.polymer,-.023,.035,-.01)),h.add(et(.052,.006,.05,i.polymer,0,.056,-.01)),u.scale.setScalar(.05),u.position.set(0,d,-.03);else if(e.optic==="acog"){d=.042,h.add(et(.024,.02,.06,i.metal,0,.01,0));let f=new Te(new Yt(.019,.022,.13,24,1,!0),i.metal.clone());f.material.side=Li,f.rotation.x=Math.PI/2,f.position.set(0,d,0),h.add(f);let m=new Te(new Pa(.019,24),i.glass);m.position.set(0,d,-.06),h.add(m),u.scale.setScalar(.03),u.position.set(0,d,-.055)}h.add(u),n.add(h),s.sightY=s.railY+d,s.reticle=u}if(e.muzzle==="suppressor"){let h=si(.02,.17,i.metal,0,a.position.y,a.position.z-.08,24);n.add(h),a.position.z-=.17}else if(e.muzzle==="compensator"){let h=si(.017,.05,i.metalWorn,0,a.position.y,a.position.z-.02,8);n.add(h),a.position.z-=.04}if(e.under==="grip"&&!s.pistol){let h=Ze(.026,.08,.03,i.polymer,0,-.025,l.z-.04,.008);n.add(h),l.set(0,-.065,l.z-.04)}if(e.under==="laser"){let h=s.pistol?-.15:l.z-.1;n.add(Ze(.025,.025,.05,i.polymer,0,s.pistol?-.005:-.02,h,.005));let d=new Te(new Yt(.0012,.0012,30,6,1,!0),i.laser);d.rotation.x=Math.PI/2,d.position.set(0,s.pistol?-.005:-.02,h-15),n.add(d),s.laser=d}return e.mag==="ext"&&s.mag&&t.model!=="lmg"&&t.model!=="shotgun"&&(s.mag.scale.y=1.35),s.arms=Uy(i,c,l),n.add(s.arms),s.muzzle=a,s.eject=o,s.leftHand=l,s.magHome=s.mag?s.mag.position.clone():null,s.slideHome=s.slide?s.slide.position.clone():null,s.pumpHome=s.pump?s.pump.position.clone():null,n.traverse(h=>{h.isMesh&&(h.castShadow=!1,h.receiveShadow=!1,h.frustumCulled=!1)}),s}async function du(r,e){return By(r,e||{})}async function im(r="ak"){let e=await tm(),t=new tt;if(r==="ak"){t.add(Ze(.05,.07,.32,e.metal,0,.03,-.08),Ze(.055,.055,.22,e.wood,0,.025,-.36),si(.011,.3,e.metal,0,.03,-.6),Ze(.04,.08,.26,e.wood,0,0,.2));let n=_o(e.metalWorn,.18,.024,.06,.6,5);n.position.set(0,0,-.12),t.add(n)}else{t.add(Ze(.05,.07,.32,e.metal,0,.03,-.08),Ze(.058,.06,.26,e.polymer,0,.03,-.36),si(.011,.25,e.metal,0,.03,-.6),Ze(.045,.085,.2,e.polymer,0,0,.2));let n=_o(e.metal,.16,.022,.055,.3,4);n.position.set(0,0,-.1),t.add(n)}t.add(Ze(.03,.1,.04,e.polymer,0,-.05,.02));let i=new ct;return i.position.set(0,.03,-.76),t.add(i),t.userData.muzzle=i,t.traverse(n=>{n.isMesh&&(n.castShadow=!0)}),t}var pt=44100;function Pn(r){let e=r>>>0||1;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function vt(r,e,t,i=.707,n=0){let s=2*Math.PI*t/pt,a=Math.cos(s),o=Math.sin(s),l=o/(2*i),c=Math.pow(10,n/40),h,d,u,f,m,b;switch(e){case"lp":h=(1-a)/2,d=1-a,u=h,f=1+l,m=-2*a,b=1-l;break;case"hp":h=(1+a)/2,d=-(1+a),u=h,f=1+l,m=-2*a,b=1-l;break;case"bp":h=l,d=0,u=-l,f=1+l,m=-2*a,b=1-l;break;case"peak":h=1+l*c,d=-2*a,u=1-l*c,f=1+l/c,m=-2*a,b=1-l/c;break}h/=f,d/=f,u/=f,m/=f,b/=f;let g=0,p=0,v=0,_=0;for(let y=0;y<r.length;y++){let w=r[y],E=h*w+d*g+u*p-m*v-b*_;p=g,g=w,_=v,v=E,r[y]=E}return r}function Ut(r,e){let t=new Float32Array(r);for(let i=0;i<r;i++)t[i]=e()*2-1;return t}function Xt(r,e,t,i=0){for(let n=0;n<r.length;n++){let s=n/pt-i;r[n]*=s<0?0:s<e?s/e:Math.exp(-(s-e)/t)}return r}function bt(r,e,t=1,i=0){let n=Math.floor(i*pt);for(let s=0;s<e.length&&s+n<r.length;s++)r[s+n]+=e[s]*t;return r}function Dn(r,e=.95){let t=0;for(let i of r)t=Math.max(t,Math.abs(i));if(t>0)for(let i=0;i<r.length;i++)r[i]*=e/t;return r}function sm(r,e=2){let t=Math.tanh(e);for(let i=0;i<r.length;i++)r[i]=Math.tanh(r[i]*e)/t;return r}function Qs(r,e,t,i,n,s=0){let a=new Float32Array(r),o=0;for(let l=0;l<r;l++){let c=l/pt,h=t+(e-t)*Math.exp(-c/(i*.5));o+=2*Math.PI*h/pt+(s?(n()-.5)*s:0),a[l]=Math.sin(o)*Math.exp(-c/i)}return a}function ky(r,e){let t=Pn(e),i=Math.floor(pt*(r.len||.7)),n=new Float32Array(i),s=Xt(vt(Ut(i,t),"hp",r.crackHP||2e3,.8),4e-4,r.crackDecay||.006);bt(n,s,r.crack??1);let a=Xt(vt(vt(Ut(i,t),"lp",r.bodyLP||3500),"hp",150),.001,r.bodyDecay||.06);bt(n,a,r.body??1.2);let o=Qs(i,r.boomF0||150,r.boomF1||48,r.boomDecay||.12,t,.02);if(bt(n,o,r.boom??.9),r.mech){let c=Xt(vt(Ut(Math.floor(pt*.05),t),"bp",r.mechF||3200,3),5e-4,.006);bt(n,c,r.mech,r.mechT||.045)}let l=Xt(vt(Ut(i,t),"lp",r.tailLP||600),.01,r.tailDecay||.25);return bt(n,l,r.tail??.35),sm(n,r.drive||2.5),vt(n,"peak",2500,1,r.presence||2),Dn(n,.98)}var zy={ar:{crack:1,body:1.2,boomF0:160,boomF1:50,boomDecay:.1,bodyDecay:.055,mech:.25,drive:3,tail:.4},ak:{crack:.9,body:1.5,bodyLP:2800,boomF0:140,boomF1:42,boomDecay:.14,bodyDecay:.07,mech:.3,mechF:2400,drive:3.4,tail:.5},smg:{crack:.7,body:1,bodyLP:4200,boomF0:180,boomF1:70,boomDecay:.06,bodyDecay:.035,mech:.35,mechF:3800,mechT:.03,drive:2.5,tail:.25,len:.45},shotgun:{crack:1.2,body:2,bodyLP:2200,boomF0:120,boomF1:35,boomDecay:.2,bodyDecay:.11,drive:4,tail:.7,tailDecay:.4,len:1},sniper:{crack:1.6,crackDecay:.009,body:1.8,bodyLP:3e3,boomF0:110,boomF1:32,boomDecay:.22,bodyDecay:.09,drive:4.5,tail:.8,tailDecay:.6,len:1.3},pistol:{crack:.8,body:.9,bodyLP:4500,boomF0:200,boomF1:80,boomDecay:.06,bodyDecay:.04,mech:.3,mechF:4200,mechT:.025,drive:2.2,tail:.2,len:.45},magnum:{crack:1.3,body:1.6,bodyLP:3e3,boomF0:130,boomF1:45,boomDecay:.15,bodyDecay:.08,drive:3.8,tail:.55,len:.9},lmg:{crack:1,body:1.4,bodyLP:3e3,boomF0:140,boomF1:45,boomDecay:.12,bodyDecay:.06,mech:.3,mechF:2600,drive:3.4,tail:.5},suppressed:{crack:.12,crackHP:3e3,body:.6,bodyLP:1400,boomF0:110,boomF1:60,boom:.25,boomDecay:.04,bodyDecay:.03,mech:.9,mechF:3e3,mechT:.01,drive:1.4,tail:.05,len:.3,presence:-3}};function bs(r,e=3e3,t=4,i=.008,n=0,s=1500,a=.02){let o=Pn(r),l=Math.floor(pt*.25),c=new Float32Array(l);return bt(c,Xt(vt(Ut(l,o),"bp",e,t),3e-4,i)),n&&bt(c,Xt(vt(Ut(l,o),"bp",s,t*.7),5e-4,i*1.5),n,a),Dn(c,.8)}function Hy(r,e=.25,t=2200){let i=Pn(r),n=Math.floor(pt*e),s=new Float32Array(n);for(let a=0;a<7;a++)bt(s,Xt(vt(Ut(Math.floor(pt*.05),i),"bp",t*(.7+i()*.8),3),5e-4,.006),.4+i()*.6,i()*e*.8);return Dn(s,.6)}function uu(r,e){let t=Pn(r),i=Math.floor(pt*.18),n=new Float32Array(i),s=e==="metal"?4e3:e==="concrete"?2600:e==="wood"?1500:1200;return bt(n,Xt(vt(Ut(i,t),"lp",s),.003,.025),1),bt(n,Xt(vt(Ut(i,t),"bp",e==="dirt"?600:900,1.2),.002,.04),.8,.012),(e==="dirt"||e==="sand")&&bt(n,Xt(vt(Ut(i,t),"hp",3e3),.01,.05),.25,.02),e==="metal"&&bt(n,Qs(i,900,820,.05,t),.15,.003),Dn(n,.5)}function nm(r,e=1){let t=Pn(r),i=Math.floor(pt*3),n=new Float32Array(i);bt(n,Xt(vt(Ut(i,t),"lp",5e3),5e-4,.03),1),bt(n,Xt(vt(Ut(i,t),"lp",900),.003,.35*e),1.6),bt(n,Qs(i,90,28,.6,t,.05),1.4),bt(n,Xt(vt(Ut(i,t),"lp",250),.05,.9*e),1.2);for(let s=0;s<30;s++)bt(n,Xt(vt(Ut(Math.floor(pt*.04),t),"bp",1500+t()*3e3,2),5e-4,.01),.06+t()*.08,.3+t()*1.6);return sm(n,2.5),Dn(n,.98)}function Gy(r){let e=Pn(r),t=Math.floor(pt*.25),i=new Float32Array(t),n=Ut(t,e);for(let s=0;s<6;s++){let a=n.slice(Math.floor(t*s/6),Math.floor(t*(s+1)/6));vt(a,"bp",4200-s*500,4);for(let o=0;o<a.length;o++)i[Math.floor(t*s/6)+o]=a[o]}for(let s=0;s<t;s++){let a=s/t;i[s]*=Math.sin(Math.PI*a)**2}return bt(i,Xt(vt(Ut(t,e),"hp",3e3),3e-4,.004),.7,.1),Dn(i,.7)}function fu(r,e){let t=Pn(r),i=Math.floor(pt*.3),n=new Float32Array(i);return e==="metal"?(bt(n,Xt(vt(Ut(i,t),"hp",2500),3e-4,.004),.6),bt(n,Qs(i,2600+t()*1500,2400,.12,t),.5),bt(n,Qs(i,4100+t()*900,3900,.07,t),.3)):e==="wood"?(bt(n,Xt(vt(Ut(i,t),"bp",900,2),5e-4,.02),1),bt(n,Qs(i,300,220,.04,t),.4)):e==="flesh"?(bt(n,Xt(vt(Ut(i,t),"lp",700),.001,.03),1),bt(n,Qs(i,120,70,.05,t),.6)):e==="dirt"||e==="sand"||e==="grass"?(bt(n,Xt(vt(Ut(i,t),"lp",1800),.001,.025),1),bt(n,Xt(vt(Ut(i,t),"hp",2500),.004,.04),.3,.01)):(bt(n,Xt(vt(Ut(i,t),"bp",2400,1.2),3e-4,.012),1),bt(n,Xt(vt(Ut(i,t),"hp",5e3),.003,.05),.3,.005)),Dn(n,.6)}function es(r,e,t="sine",i=.3,n=0){let s=Math.floor(pt*e),a=new Float32Array(s);return r.forEach((o,l)=>{for(let c=0;c<s;c++){let h=c/pt-l*n;if(h<0)continue;let d=2*Math.PI*o*h,u=t==="sine"?Math.sin(d):t==="tri"?2/Math.PI*Math.asin(Math.sin(d)):Math.sign(Math.sin(d))*.4;a[c]+=u*Math.exp(-h/i)*Math.min(1,h*200)}}),Dn(a,.5)}function pu(r,e,t,i,n=.1,s=.5){let a=Pn(r),o=Math.floor(pt*e),l=Ut(o,a);vt(l,"lp",t),i&&vt(l,"hp",i);for(let h=0;h<o;h++){let d=h/pt;l[h]*=1-s+s*(.5+.5*Math.sin(2*Math.PI*n*d+Math.sin(d*.37)*2))}let c=Math.floor(pt*.5);for(let h=0;h<c;h++){let d=h/c;l[h]=l[h]*d+l[o-c+h]*(1-d)}return Dn(l.subarray(0,o-c),.5)}function Vy(r,e){let t=Pn(r),i=Math.floor(pt*e),n=new Float32Array(i);for(let a=0;a<5;a++){let o=4200+t()*1200,l=2+t()*3,c=t();for(let h=0;h<i;h++){let d=h/pt,u=(Math.sin(2*Math.PI*l*d+c*6)>.6?1:0)*(.5+.5*Math.sin(2*Math.PI*30*d));n[h]+=Math.sin(2*Math.PI*o*d)*u*.15}}let s=Math.floor(pt*.3);for(let a=0;a<s;a++){let o=a/s;n[a]=n[a]*o+n[i-s+a]*(1-o)}return Dn(n.subarray(0,i-s),.25)}function mu(r,e,t,i=[]){let n=Pn(r),s=Math.floor(pt*e),a=new Float32Array(s),o=new Float32Array(s);for(let l=0;l<s;l++){let c=l/pt,h=Math.exp(-c/t);a[l]=(n()*2-1)*h,o[l]=(n()*2-1)*h}vt(a,"lp",3500),vt(o,"lp",3500);for(let[l,c]of i){let h=Math.floor(l*pt);h<s&&(a[h]+=c,o[Math.min(s-1,h+40)]+=c*.9)}return[a,o]}var gu=class{constructor(){this.ctx=null,this.buffers={},this.ready=!1,this.volume={master:.8,sfx:1,music:.5},this.loops=[]}init(){if(this.ctx){this.ctx.resume?.();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t;try{t=new e({sampleRate:pt})}catch{t=new e}this.ctx=t,pt=t.sampleRate,this.master=t.createGain(),this.master.gain.value=this.volume.master;let i=t.createDynamicsCompressor();i.threshold.value=-10,i.knee.value=8,i.ratio.value=6,i.attack.value=.002,i.release.value=.15,this.master.connect(i).connect(t.destination),this.sfx=t.createGain(),this.sfx.connect(this.master),this.music=t.createGain(),this.music.gain.value=this.volume.music,this.music.connect(this.master),this.ambient=t.createGain(),this.ambient.gain.value=.5,this.ambient.connect(this.master),this.muffle=t.createBiquadFilter(),this.muffle.type="lowpass",this.muffle.frequency.value=2e4,this.sfx.disconnect(),this.sfx.connect(this.muffle).connect(this.master),this.reverb=t.createConvolver(),this.reverbGain=t.createGain(),this.reverbGain.gain.value=.35,this.reverb.connect(this.reverbGain).connect(this.muffle),this.setEnvironment("outdoor"),this.generate(),this.ready=!0}buf(e){let t=this.ctx.createBuffer(1,e.length,pt);return t.copyToChannel(e,0),t}generate(){let e=this.buffers;for(let[t,i]of Object.entries(zy))e["shot_"+t]=[0,1,2].map(n=>this.buf(ky(i,1e3+n*77+t.length*13)));e.magOut=[this.buf(bs(11,1800,3,.01,.6,900,.03))],e.magIn=[this.buf(bs(12,2400,4,.006,1,1300,.05))],e.bolt=[this.buf(bs(13,3200,5,.008,1,2e3,.09))],e.slide=[this.buf(bs(14,4e3,4,.007,.9,2600,.07))],e.shell=[this.buf(bs(15,1500,2,.015,.8,2500,.06))],e.pump=[this.buf(bs(16,1200,2,.02,1,900,.14))],e.dry=[this.buf(bs(17,5e3,6,.004))],e.switch=[this.buf(Hy(18,.3))],e.pin=[this.buf(bs(19,6e3,8,.01,.5,4e3,.08))],e.bounce=[0,1].map(t=>this.buf(fu(20+t,"metal")));for(let t of["dirt","concrete","metal","wood","sand","grass"])e["step_"+t]=[0,1,2,3].map(i=>this.buf(uu(100+i*7+t.length,t)));e.land=[this.buf(uu(222,"dirt"))],e.explosion=[0,1].map(t=>this.buf(nm(300+t))),e.flashbang=[this.buf(nm(310,.3))],e.tinnitus=[this.buf(es([3800],4,"sine",1.6))],e.whiz=[0,1,2].map(t=>this.buf(Gy(400+t)));for(let t of["concrete","metal","wood","flesh","dirt"])e["hit_"+t]=[0,1,2].map(i=>this.buf(fu(500+i*5+t.length,t)));e.hitmarker=[this.buf(es([1900],.08,"tri",.02))],e.headshot=[this.buf(es([2600,3400],.25,"tri",.05,.03))],e.kill=[this.buf(es([1200,1800],.2,"tri",.05,.05))],e.ui=[this.buf(es([900],.06,"tri",.015))],e.uiHover=[this.buf(es([1500],.04,"sine",.01))],e.objective=[this.buf(es([523,659,784,1046],1.2,"tri",.35,.12))],e.fail=[this.buf(es([392,330,262],1.4,"tri",.5,.2))],e.beep=[this.buf(es([1400],.12,"sine",.04))],e.melee=[this.buf(uu(600,"wood"))],e.hurt=[0,1].map(t=>this.buf(fu(700+t,"flesh"))),e.wind=[this.buf(pu(800,12,500,60,.07,.7))],e.waves=[this.buf(pu(801,14,900,120,.12,.85))],e.crickets=[this.buf(Vy(802,8))],e.hum=[this.buf(pu(803,8,200,40,.05,.3))]}setEnvironment(e){if(this.ctx)try{this._setEnv(e)}catch(t){console.warn("reverb disabled",t)}}_setEnv(e){let[t,i]=e==="indoor"?mu(9,1,.25):e==="urban"?mu(9,2.2,.5,[[.08,.5],[.15,.35],[.23,.25]]):mu(9,2.6,.55,[[.12,.3],[.31,.2],[.6,.12]]),n=this.ctx.createBuffer(2,t.length,pt);n.copyToChannel(t,0),n.copyToChannel(i,1),this.reverb.normalize=!0,this.reverb.buffer=n}setListener(e){if(!this.ctx)return;let t=this.ctx.listener,i=e.position,n=this.ctx.currentTime,s=e.getWorldDirection(this._f||(this._f=new e.position.constructor));t.positionX?(t.positionX.setValueAtTime(i.x,n),t.positionY.setValueAtTime(i.y,n),t.positionZ.setValueAtTime(i.z,n),t.forwardX.setValueAtTime(s.x,n),t.forwardY.setValueAtTime(s.y,n),t.forwardZ.setValueAtTime(s.z,n),t.upX.setValueAtTime(0,n),t.upY.setValueAtTime(1,n),t.upZ.setValueAtTime(0,n)):(t.setPosition(i.x,i.y,i.z),t.setOrientation(s.x,s.y,s.z,0,1,0)),this.listenerPos=i}play(e,{pos:t=null,vol:i=1,rate:n=1,reverb:s=.3,lowpass:a=0,bus:o=null,detune:l=.04}={}){if(!this.ready)return null;let c=this.buffers[e];if(!c)return null;let h=this.ctx,d=h.createBufferSource();d.buffer=c[Math.random()*c.length|0],d.playbackRate.value=n*(1+(Math.random()-.5)*l);let u=d,f=h.createGain();if(f.gain.value=i,a){let m=h.createBiquadFilter();m.type="lowpass",m.frequency.value=a,u.connect(m),u=m}if(u.connect(f),u=f,t){let m=h.createPanner();m.panningModel="HRTF",m.distanceModel="inverse",m.refDistance=3,m.rolloffFactor=1.1,m.maxDistance=400,m.positionX?(m.positionX.value=t.x,m.positionY.value=t.y,m.positionZ.value=t.z):m.setPosition(t.x,t.y,t.z),u.connect(m),u=m}if(u.connect(o||this.sfx),s>0){let m=h.createGain();m.gain.value=s,u.connect(m).connect(this.reverb)}return d.start(),d}shot(e,t,i){if(i)return this.play("shot_"+e,{vol:.9,reverb:.45});let n=this.listenerPos?t.distanceTo(this.listenerPos):20,s=Math.max(900,16e3-n*160);return this.play("shot_"+e,{pos:t,vol:1.3,reverb:.6,lowpass:s})}loop(e,t=.4,i){if(!this.ready)return;let n=this.ctx.createBufferSource();n.buffer=this.buffers[e][0],n.loop=!0;let s=this.ctx.createGain();return s.gain.value=t,n.connect(s).connect(i||this.ambient),n.start(),this.loops.push(n),s}stopLoops(){for(let e of this.loops)try{e.stop()}catch{}this.loops=[]}setMuffle(e){this.ctx&&this.muffle.frequency.setTargetAtTime(2e4*Math.pow(1-e*.97,2)+200,this.ctx.currentTime,.05)}setVolumes(e,t){this.volume.master=e,this.volume.music=t,this.master&&(this.master.gain.value=e,this.music.gain.value=t)}startMusic(e="menu"){if(!this.ready)return;this.stopMusic();let t=this.ctx,i=t.currentTime,n=t.createGain();n.gain.value=0,n.gain.linearRampToValueAtTime(.25,i+3),n.connect(this.music);let s=[],a=e==="menu"?55:49;[1,1.5,2,2.997].forEach((l,c)=>{let h=t.createOscillator();h.type=c%2?"sawtooth":"triangle",h.frequency.value=a*l,h.detune.value=(c-1.5)*7;let d=t.createBiquadFilter();d.type="lowpass",d.frequency.value=400+c*120,d.Q.value=2;let u=t.createOscillator();u.frequency.value=.05+c*.03;let f=t.createGain();f.gain.value=250,u.connect(f).connect(d.frequency),u.start();let m=t.createGain();m.gain.value=.12/(c+1),h.connect(d).connect(m).connect(n),h.start(),s.push(h,u)});let o=()=>{if(!this._music)return;let l=t.currentTime;for(let c of[0,.22]){let h=t.createOscillator();h.frequency.setValueAtTime(70,l+c),h.frequency.exponentialRampToValueAtTime(40,l+c+.25);let d=t.createGain();d.gain.setValueAtTime(1e-4,l+c),d.gain.exponentialRampToValueAtTime(.35,l+c+.01),d.gain.exponentialRampToValueAtTime(1e-4,l+c+.3),h.connect(d).connect(n),h.start(l+c),h.stop(l+c+.35)}this._pulseT=setTimeout(o,1700)};this._music={out:n,nodes:s},o()}stopMusic(){if(!this._music)return;let{out:e,nodes:t}=this._music;this._music=null,clearTimeout(this._pulseT);let i=this.ctx.currentTime;e.gain.cancelScheduledValues(i),e.gain.setValueAtTime(e.gain.value,i),e.gain.linearRampToValueAtTime(0,i+1.5),setTimeout(()=>t.forEach(n=>{try{n.stop()}catch{}}),1700)}},ye=new gu;var Me=(r=0,e=0,t=0)=>new D(r,e,t),Gc=Me(),Wy=Me(),qy=Me(),om=Me(),$s=new Lt,jr=new Lt,Yr=new Lt,yw=Me(0,1,0),So={recruit:{name:"Recruit",acc:.22,dmg:7,react:1.1,hp:80,awareness:.7},regular:{name:"Regular",acc:.32,dmg:10,react:.8,hp:100,awareness:1},hardened:{name:"Hardened",acc:.42,dmg:14,react:.6,hp:110,awareness:1.3},veteran:{name:"Veteran",acc:.55,dmg:20,react:.4,hp:120,awareness:1.6}};function Xy(r,e){return r.getObjectByName("mixamorig"+e)||r.getObjectByName("mixamorig:"+e)}function rm(r,e,t){$s.setFromUnitVectors(e.clone().normalize(),t.clone().normalize()),r.getWorldQuaternion(jr),r.parent.getWorldQuaternion(Yr),r.quaternion.copy(Yr.invert().multiply($s.multiply(jr))),r.updateMatrixWorld(!0)}function am(r,e,t,i,n){let s=r.getWorldPosition(Me()),a=e.getWorldPosition(Me()),o=t.getWorldPosition(Me()),l=s.distanceTo(a),c=a.distanceTo(o),h=i.clone().sub(s),d=h.length();d=Math.min(d,l+c-.002),h.normalize();let u=Wt.clamp((l*l+d*d-c*c)/(2*l*d),-1,1),f=Math.sqrt(1-u*u),m=n.clone().sub(s);m.addScaledVector(h,-m.dot(h)).normalize();let b=s.clone().addScaledVector(h,l*u).addScaledVector(m,l*f);rm(r,a.clone().sub(s),b.clone().sub(s));let g=t.getWorldPosition(Me()),p=e.getWorldPosition(Me());rm(e,g.clone().sub(p),i.clone().sub(p))}function xu(r,e,t,i){let n=e,s=qy.subVectors(i,t),a=om.subVectors(r,t),o=1,l=n.dot(s),c=s.dot(s),h=n.dot(a),d=s.dot(a),u=o*c-l*l,f,m;u<1e-8?(f=0,m=l>c?h/l:d/c):(f=(l*d-c*h)/u,m=(o*d-l*h)/u),m=Wt.clamp(m,0,1),f=Math.max(0,n.dot(Gc.copy(t).addScaledVector(s,m).sub(r)));let b=Gc.copy(r).addScaledVector(n,f),g=Wy.copy(t).addScaledVector(s,m);return[b.distanceTo(g),f]}var Hc=null;async function jy(){return Hc||(Hc=await Cn("Soldier")),Hc}var bu=class{constructor(e,t){this.mgr=e,this.G=e.G,this.pos=t.pos.clone(),this.yaw=t.yaw??Math.random()*6.28,this.bodyYaw=this.yaw,this.vel=Me();let i=this.G.diff;this.hp=t.hp??i.hp,this.alive=!0,this.state=t.state||"idle",this.patrol=t.patrol||null,this.patrolIdx=0,this.awareness=0,this.lastSeen=null,this.lastSeenT=-99,this.seesPlayer=!1,this.fireCd=Math.random(),this.burst=0,this.react=0,this.thinkT=Math.random()*.3,this.path=null,this.pathIdx=0,this.repathT=0,this.moveTarget=null,this.strafe=Math.random()<.5?-1:1,this.strafeT=0,this.grenadeCd=10+Math.random()*15,this.stun=0,this.friendly=!!t.friendly,this.hostage=!!t.hostage,this.follow=!1,this.zone=t.zone||null,this.tag=t.tag||null,this.aimPitch=0,this.aimBlend=0,this.deathT=0,this.speedMul=t.speed||1,this.holdPosition=!!t.hold,this.build(t)}build(e){let t=Hc,i=this.model=Nc(t.scene);i.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,n.frustumCulled=!1,n.material=n.material.clone(),e.tint&&!n.name.includes("visor")&&n.material.color.set(e.tint),n.name.includes("visor")&&(n.material.color.set(this.friendly?3359829:1118481),n.material.roughness=.15,n.material.metalness=.8))}),this.G.scene.add(i),this.mixer=new za(i),this.actions={};for(let n of t.animations)this.actions[n.name]=this.mixer.clipAction(n);for(let n of["Idle","Walk","Run"]){let s=this.actions[n];s.enabled=!0,s.setEffectiveWeight(n==="Idle"?1:0),s.play()}this.actions.Idle.time=Math.random()*3,this.weights={Idle:1,Walk:0,Run:0},this.b={};for(let n of["Hips","Spine","Spine1","Spine2","Neck","Head","RightShoulder","RightArm","RightForeArm","RightHand","LeftArm","LeftForeArm","LeftHand","LeftUpLeg","LeftFoot","RightUpLeg","RightFoot"])this.b[n]=Xy(i,n);this.hostage||(this.rifle=this.mgr.rifleTemplate.clone(!0),this.G.scene.add(this.rifle),this.muzzle=this.rifle.getObjectByName("muzzle")||this.rifle.children.find(n=>n.userData.isMuzzle)),this.syncModel(0)}get eye(){return om.set(this.pos.x,this.pos.y+(this.crouched?1.1:1.62),this.pos.z)}headPos(e=Me()){return this.b.Head?this.b.Head.getWorldPosition(e).add(Me(0,.09,0)):e.copy(this.pos).add(Me(0,1.7,0))}setAnim(e,t){let i=this.alive?t>3.5?"Run":t>.3?"Walk":"Idle":"Idle";for(let n of["Idle","Walk","Run"])this.weights[n]+=((n===i?1:0)-this.weights[n])*Math.min(1,e*6),this.actions[n].setEffectiveWeight(this.weights[n]);this.actions.Walk.timeScale=Math.max(.6,t/1.6),this.actions.Run.timeScale=Math.max(.7,t/5.2)}syncModel(e){let t=this.model;t.position.copy(this.pos);let i=this.yaw-this.bodyYaw;if(i=Math.atan2(Math.sin(i),Math.cos(i)),this.bodyYaw+=i*Math.min(1,e*8),t.rotation.set(0,this.bodyYaw+Math.PI,0),!this.alive){this.updateDeath(e);return}if(this.G.player.pos.distanceToSquared(this.pos)>2e3&&!this.hostage){if(this._sacc=(this._sacc||0)+e,this._sacc<.1&&this._lastSync){this.rifle&&this.rifle.position.add(Gc.subVectors(this.pos,this._lastSync)),this._lastSync.copy(this.pos),t.updateMatrixWorld(!0);return}e=this._sacc,this._sacc=0}if((this._lastSync||(this._lastSync=Me())).copy(this.pos),this.mixer.update(e),t.updateMatrixWorld(!0),this.hostage)return;let n=this.aimBlend,s=Me(-Math.sin(this.bodyYaw),0,-Math.cos(this.bodyYaw)),a=Me(Math.cos(this.bodyYaw),0,-Math.sin(this.bodyYaw));if(this.b.Spine2){let b=this.b.Spine1;$s.setFromAxisAngle(a,-this.aimPitch*.5*n+.05),b.getWorldQuaternion(jr),b.parent.getWorldQuaternion(Yr),b.quaternion.copy(Yr.invert().multiply($s.multiply(jr))),b.updateMatrixWorld(!0)}let o=this.b.RightArm.getWorldPosition(Me()),l=s.clone().multiplyScalar(Math.cos(this.aimPitch)).add(Me(0,Math.sin(this.aimPitch),0)).normalize(),c=1-n,h=o.clone().addScaledVector(l,.22+.02*c).addScaledVector(a,-.06-.05*c).add(Me(0,-.1-.18*c,0)),d=l.clone().lerp(s.clone().add(Me(0,-.5,0)).addScaledVector(a,-.4).normalize(),c*.8).normalize();this.rifle.position.copy(h),this.rifle.quaternion.setFromUnitVectors(Me(0,0,-1),d),this.rifle.updateMatrixWorld(!0);let u=h.clone().add(Me(0,-.03,0)),f=h.clone().addScaledVector(d,.36).add(Me(0,-0,0));am(this.b.RightArm,this.b.RightForeArm,this.b.RightHand,u,o.clone().addScaledVector(a,.6).add(Me(0,-.8,0)).addScaledVector(s,-.2));let m=this.b.LeftArm.getWorldPosition(Me());if(am(this.b.LeftArm,this.b.LeftForeArm,this.b.LeftHand,f,m.clone().addScaledVector(a,-.5).add(Me(0,-.9,0))),this.b.Head){$s.setFromAxisAngle(a,-this.aimPitch*.4*n);let b=this.b.Head;b.getWorldQuaternion(jr),b.parent.getWorldQuaternion(Yr),b.quaternion.copy(Yr.invert().multiply($s.multiply(jr))),b.updateMatrixWorld(!0)}}raycast(e,t,i){if(!this.alive)return null;let n=this.pos.clone().add(Me(0,1,0)),[s]=xu(e,t,n.clone().add(Me(0,-1,0)),n.clone().add(Me(0,.9,0)));if(s>.8)return null;let a=null,o=(d,u,f,m)=>{let[b,g]=xu(e,t,d,u);b<f&&g<i&&(!a||g<a.t)&&(a={t:g,part:m})},l=this.headPos(Me());o(l,l.clone().add(Me(0,.02,0)),.14,"head");let c=this.b.Hips.getWorldPosition(Me()),h=this.b.Neck.getWorldPosition(Me());return o(c,h,.2,"body"),o(this.b.LeftUpLeg.getWorldPosition(Me()),this.b.LeftFoot.getWorldPosition(Me()),.11,"leg"),o(this.b.RightUpLeg.getWorldPosition(Me()),this.b.RightFoot.getWorldPosition(Me()),.11,"leg"),o(this.b.RightArm.getWorldPosition(Me()),this.b.RightHand.getWorldPosition(Me()),.08,"arm"),o(this.b.LeftArm.getWorldPosition(Me()),this.b.LeftHand.getWorldPosition(Me()),.08,"arm"),a?{enemy:this,dist:a.t,part:a.part,point:e.clone().addScaledVector(t,a.t)}:null}takeDamage(e,t){return this.alive?(this.hp-=e,this.awareness=1,this.lastSeen=this.G.player.pos.clone(),this.lastSeenT=this.G.time,this.state!=="combat"&&(this.state="combat",this.react=.25),this.flinch=.25,this.hp<=0?(this.die(t),!0):!1):!1}die(e){this.alive=!1,this.state="dead",this.deathT=0;try{this.mgr.onDeath?.(this)}catch(t){console.warn(t)}this.deathDir=e?Math.atan2(e.x,e.z):this.bodyYaw,this.deathFall=Me(e?.x||0,0,e?.z||0).normalize(),this.rifle&&(this.rifleVel=Me(this.deathFall.x*1.5,1.5,this.deathFall.z*1.5),this.rifleSpin=Me(Math.random()*4,Math.random()*4,0))}updateDeath(e){this.deathT+=e;let t=Math.min(1,this.deathT/.6),i=t*t,n=this.model,s=Me(-this.deathFall.z,0,this.deathFall.x);s.lengthSq()<.01&&s.set(1,0,0),n.quaternion.setFromAxisAngle(s.normalize(),i*Math.PI/2*.98),n.quaternion.multiply($s.setFromEuler(new Si(0,this.bodyYaw+Math.PI,0))),n.position.copy(this.pos).add(Me(0,.12*Math.sin(t*Math.PI),0)).addScaledVector(this.deathFall,i*.25),this.b.Spine1&&t<1&&(this.b.Spine1.rotation.x+=e*.6),this.b.LeftUpLeg&&t<1&&(this.b.LeftUpLeg.rotation.x-=e*1.2,this.b.LeftLeg=this.b.LeftLeg),n.updateMatrixWorld(!0),this.rifle&&this.rifleVel&&(this.rifleVel.y-=9.8*e,this.rifle.position.addScaledVector(this.rifleVel,e),this.rifle.rotation.x+=this.rifleSpin.x*e,this.rifle.rotation.z+=this.rifleSpin.y*e,this.rifle.position.y<this.groundY+.05&&(this.rifle.position.y=this.groundY+.05,this.rifleVel=null,this.rifle.rotation.set(0,this.rifle.rotation.y,Math.PI/2)))}update(e){if(!this.alive){this.syncModel(e);return}let t=this.G,i=t.player,n=t.diff;this.stun=Math.max(0,this.stun-e),this.flinch=Math.max(0,(this.flinch||0)-e);let s=0,a=null,o=this.state==="combat"||this.state==="alert"?1:0;if(this.groundY=0,this.hostage){this.updateHostage(e);return}if(this.thinkT-=e,this.thinkT<=0&&(this.thinkT=.15+Math.random()*.1,this.perceive(.2)),this.stun>0)o=0,s=0;else if(this.state==="idle"||this.state==="patrol")if(this.patrol&&this.patrol.length){let u=this.patrol[this.patrolIdx];this.pos.distanceTo(u)<.8&&(this.patrolIdx=(this.patrolIdx+1)%this.patrol.length,this.waitT=2+Math.random()*3),(this.waitT-=e)<=0&&(a=this.steer(u),s=1.4)}else this.idleLookT=(this.idleLookT||0)-e,this.idleLookT<=0&&(this.idleLookT=3+Math.random()*4,this.yawTarget=this.yaw+(Math.random()-.5)*2),this.yawTarget!==void 0&&(this.yaw+=(this.yawTarget-this.yaw)*Math.min(1,e*1.5));else if(this.state==="alert"){let u=this.investigate;u&&this.pos.distanceTo(u)>2&&!this.holdPosition?(a=this.followPath(u,e),s=3):(this.alertT=(this.alertT||6)-e,this.yaw+=Math.sin(t.time*.8+this.pos.x)*e*.8,this.alertT<=0&&(this.state="patrol",this.alertT=6))}else if(this.state==="combat"){let u=i.eyePos(Me()),f=this.pos.distanceTo(i.pos);if(this.seesPlayer){this.faceTo(i.pos,e,10);let m=u.y-.25-(this.pos.y+1.45);if(this.aimPitch=Math.atan2(m,Math.hypot(i.pos.x-this.pos.x,i.pos.z-this.pos.z)),this.strafeT-=e,this.strafeT<=0&&(this.strafeT=1.5+Math.random()*2.5,this.strafe=Math.random()<.3?0:Math.random()<.5?-1:1,this.advance=f>28?1:f<7?-1:Math.random()<.3?1:0),!this.holdPosition&&this.flinch<=0){let b=Me(i.pos.x-this.pos.x,0,i.pos.z-this.pos.z).normalize(),p=Me(-b.z,0,b.x).multiplyScalar(this.strafe).addScaledVector(b,this.advance*.8);if(p.lengthSq()>.01){p.normalize();let v=this.pos.clone().addScaledVector(p,1.2),[_,y]=t.world.navCell(v);t.world.navFree(_,y)&&(a=p,s=1.6)}}this.crouched=this.preferCrouch&&!a,this.react-=e,this.react<=0&&this.shootLogic(e,f),this.hp<n.hp*.45&&!this.coverTarget&&!this.holdPosition&&this.pickCover(i.pos)}else{this.crouched=!1;let m=t.time-this.lastSeenT;this.grenadeCd-=e,this.grenadeCd<=0&&m>2&&m<8&&this.lastSeen&&this.pos.distanceTo(this.lastSeen)<25&&this.pos.distanceTo(this.lastSeen)>8&&(this.grenadeCd=18+Math.random()*15,this.throwGrenade(this.lastSeen)),this.lastSeen&&!this.holdPosition?this.pos.distanceTo(this.lastSeen)>2.5?(a=this.followPath(this.lastSeen,e),s=m>4?3.2:2.2,this.faceTo(this.lastSeen,e,5)):m>12&&(this.state="alert",this.investigate=null,this.alertT=8):this.lastSeen&&this.faceTo(this.lastSeen,e,5)}this.coverTarget&&(this.pos.distanceTo(this.coverTarget)>.8?(a=this.followPath(this.coverTarget,e),s=3.5):(this.coverTarget=null,this.preferCrouch=!0))}this.stun>0&&(a=null,this.yaw+=Math.sin(t.time*7)*e);let l=s*this.speedMul,c=a?a.clone().multiplyScalar(l):Me();this.vel.x+=(c.x-this.vel.x)*Math.min(1,e*8),this.vel.z+=(c.z-this.vel.z)*Math.min(1,e*8),this.pos.x+=this.vel.x*e,this.pos.z+=this.vel.z*e;for(let u of this.mgr.list)if(u!==this&&u.alive){let f=this.pos.x-u.pos.x,m=this.pos.z-u.pos.z,b=f*f+m*m;if(b<.5&&b>1e-4){let g=Math.sqrt(b),p=(.7-g)*.5;this.pos.x+=f/g*p,this.pos.z+=m/g*p}}let h=t.world.collideCylinder(this.pos,.32,1.7,this.vel,.4);this.pos.y=h.groundY,this.groundY=h.groundY,a&&!(this.state==="combat"&&this.seesPlayer)&&this.faceTo(this.pos.clone().add(a),e,6);let d=Math.hypot(this.vel.x,this.vel.z);this.setAnim(e,d),this.aimBlend+=((o?1:0)-this.aimBlend)*Math.min(1,e*5),this.state==="combat"&&this.seesPlayer||(this.aimPitch*=1-Math.min(1,e*3)),d>1&&(this.stepD=(this.stepD||0)+d*e,this.stepD>1.8&&(this.stepD=0,i.pos.distanceTo(this.pos)<18&&ye.play("step_"+(t.world.groundMat==="sand"?"sand":"dirt"),{pos:this.pos,vol:d>3?.9:.5,reverb:.1}))),this.syncModel(e)}perceive(e){let t=this.G,i=t.player,n=t.diff;if(!i.alive){this.seesPlayer=!1;return}let s=i.eyePos(Me()),a=this.eye.clone(),o=s.clone().sub(a),l=o.length();o.divideScalar(l);let c=Me(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),h=o.dot(c),u=t.level?.night?i.flashlightOn?60:32:85;this.state==="combat"&&(u*=1.6);let f=l<u&&(h>.2||l<4||this.state==="combat");if(f){let m=i.pos.clone().add(Me(0,i.crouch?.7:1.2,0));f=(t.world.lineOfSight(a,s)||t.world.lineOfSight(a,m))&&!t.effects.smokeBlocks(a,s)}if(this.seesPlayer=f&&this.awareness>=1,f){let m=n.awareness*(1.6-l/u)*(i.crouch?.6:1)*(i.sprint?1.4:1)*(this.state==="alert"?2.5:1)*(h>.7?1.4:.7);this.awareness=Math.min(1,this.awareness+m*e*1.4),this.awareness>=1&&(this.state!=="combat"&&(this.state="combat",this.react=n.react*(.7+Math.random()*.6),this.mgr.callout(this)),this.seesPlayer=!0,this.lastSeen=i.pos.clone(),this.lastSeenT=t.time)}else this.state!=="combat"&&(this.awareness=Math.max(0,this.awareness-e*.15))}shootLogic(e,t){let i=this.G,n=i.player,s=i.diff;if(this.fireCd-=e,this.fireCd>0||(this.burst<=0&&(this.burst=2+(Math.random()*4|0)),this.burst--,this.fireCd=this.burst>0?.1+Math.random()*.03:.5+Math.random()*.9,t>110))return;let a=s.acc*Math.max(.25,1-t/90)*(n.crouch?.8:1)*(1-n.moveAmount*.35)*(n.sprint?.7:1)*Math.min(1,.45+(i.time-this.lastSeenT+1)*0);this.shotsAtPlayer=(this.shotsAtPlayer||0)+1,this.shotsAtPlayer<3&&(a*=.4),this.stun>0&&(a=0);let o=this.muzzleWorld(),l=n.pos.clone().add(Me(0,n.crouch?.8:1.25,0));if(i.effects.muzzleWorld(o,l.clone().sub(o).normalize(),.8),ye.shot(this.mgr.weaponSound||"ak",o,!1),i.alertEnemies(this.pos,35,this),Math.random()<a)n.damage(s.dmg*(.8+Math.random()*.4),this.pos),Math.random()<.3&&i.effects.tracer(o,l);else{let c=Me((Math.random()-.5)*2.5,(Math.random()-.4)*1.6,(Math.random()-.5)*2.5),h=l.clone().add(c),d=h.clone().sub(o).normalize(),u=i.world.raycast(o,d,200);u&&u.dist<o.distanceTo(h)+15&&(i.effects.impact(u.point,u.normal,u.mat),u.point.distanceTo(n.pos)<12&&ye.play("hit_"+(u.mat==="metal"?"metal":u.mat==="wood"?"wood":u.mat==="dirt"||u.mat==="sand"||u.mat==="grass"?"dirt":"concrete"),{pos:u.point,vol:.6})),Math.random()<.35&&i.effects.tracer(o,u?u.point:h);let[f]=xu(o,d,n.eyePos(Me()),n.eyePos(Me()).add(Me(0,.01,0)));f<2&&(ye.play("whiz",{pos:n.eyePos(Me()).addScaledVector(d,-1),vol:.9,reverb:0}),n.shake=Math.min(1,n.shake+.08),i.hud.suppress())}}muzzleWorld(){return this.rifle?(this.rifle.updateMatrixWorld(!0),Me(0,.03,-.78).applyMatrix4(this.rifle.matrixWorld)):this.pos.clone().add(Me(0,1.4,0))}throwGrenade(e){let t=this.pos.clone().add(Me(0,1.7,0)),i=e.clone().sub(t),n=Math.hypot(i.x,i.z),s=Math.max(.8,n/13),a=Me(i.x/s,(i.y+.5*20*s*s*.5)/s,i.z/s);this.G.spawnGrenade("frag",t,a,!1),this.G.hud.grenadeWarning()}faceTo(e,t,i){let s=Math.atan2(-(e.x-this.pos.x),-(e.z-this.pos.z))-this.yaw;s=Math.atan2(Math.sin(s),Math.cos(s)),this.yaw+=s*Math.min(1,t*i)}steer(e){let t=Me(e.x-this.pos.x,0,e.z-this.pos.z);return t.lengthSq()>.01?t.normalize():null}followPath(e,t){let i=this.G;if(this.repathT-=t,(!this.path||this.repathT<=0||this.pathGoal&&this.pathGoal.distanceTo(e)>2)&&(this.repathT=1.5+Math.random(),this.path=i.world.findPath(this.pos,e),this.pathIdx=0,this.pathGoal=e.clone(),!this.path))return this.steer(e);for(;this.pathIdx<this.path.length&&this.pos.distanceTo(Gc.set(this.path[this.pathIdx].x,this.pos.y,this.path[this.pathIdx].z))<.6;)this.pathIdx++;return this.pathIdx>=this.path.length?this.steer(e):this.steer(this.path[this.pathIdx])}pickCover(e){let t=this.G,i=null,n=1/0;for(let s of t.world.coverPoints){let a=s.distanceTo(this.pos);if(a>14||a<1.5)continue;let o=s.clone().add(Me(0,1,0)),l=e.clone().add(Me(0,1.4,0));if(t.world.lineOfSight(o,l))continue;let c=a+s.distanceTo(e)*.2;c<n&&(n=c,i=s)}i&&(this.coverTarget=i.clone())}updateHostage(e){let t=this.G,i=t.player,n=0,s=null;if(this.follow){let o=this.pos.distanceTo(i.pos);if(o>2.5&&(s=o>4?this.followPath(i.pos,e):this.steer(i.pos),n=o>8?5.2:2.8),this.stuckT=(this.stuckT||0)+e,this.stuckT>3){let l=this._lastP?this._lastP.distanceTo(this.pos):99;if(this._lastP=this.pos.clone(),this.stuckT=0,l<1.5&&o>10){let c=i.pos.clone().addScaledVector(i.forward(Me()).setY(0).normalize(),-3),[h,d]=t.world.navCell(c),u=t.world.nearestFree(h,d);u&&(this.pos.copy(t.world.cellPos(u[0],u[1])),this.path=null)}}}s?(this.vel.x=s.x*n,this.vel.z=s.z*n):(this.vel.x*=.8,this.vel.z*=.8),this.pos.x+=this.vel.x*e,this.pos.z+=this.vel.z*e;let a=t.world.collideCylinder(this.pos,.32,1.7,this.vel,.4);this.pos.y=a.groundY,s?this.faceTo(this.pos.clone().add(s),e,6):this.follow&&this.faceTo(i.pos,e,3),this.setAnim(e,Math.hypot(this.vel.x,this.vel.z)),this.syncModel(e)}dispose(){this.G.scene.remove(this.model),this.rifle&&this.G.scene.remove(this.rifle)}},Vc=class{constructor(e){this.G=e,this.list=[]}async init(e="ak47"){await jy(),this.weaponId=e,this.weaponSound={ak47:"ak",m4a1:"ar",mp5:"smg",m249:"lmg"}[e]||"ak",this.rifleTemplate=await im(e==="ak47"?"ak":"m4")}spawn(e){let t=new bu(this,e);return this.list.push(t),t}get alive(){return this.list.filter(e=>e.alive&&!e.hostage&&!e.friendly)}update(e){for(let t of this.list)t.update(e)}raycast(e,t,i){let n=null;for(let s of this.list){if(s.hostage&&!this.G.hitHostages){let o=s.raycast(e,t,i);o&&(!n||o.dist<n.dist)&&(n=o);continue}let a=s.raycast(e,t,i);a&&(!n||a.dist<n.dist)&&(n=a)}return n}meleeTarget(e,t,i){let n=null,s=i;for(let a of this.list){if(!a.alive||a.hostage)continue;let o=a.pos.distanceTo(e);o<s&&Me(a.pos.x-e.x,0,a.pos.z-e.z).normalize().dot(Me(t.x,0,t.z).normalize())>.5&&(s=o,n=a)}return n}alert(e,t,i){for(let n of this.list)!n.alive||n.hostage||n===i||n.pos.distanceTo(e)<t&&n.state!=="combat"&&(n.state="alert",n.investigate=e.clone(),n.alertT=8,n.awareness=Math.max(n.awareness,.5))}callout(e){for(let t of this.list)t!==e&&t.alive&&!t.hostage&&t.pos.distanceTo(e.pos)<25&&t.state!=="combat"&&(t.state="alert",t.investigate=this.G.player.pos.clone(),t.awareness=Math.max(t.awareness,.7))}flash(e,t){for(let i of this.list){if(!i.alive)continue;let n=i.pos.distanceTo(e);n<t&&this.G.world.lineOfSight(i.eye.clone(),e.clone().add(Me(0,.3,0)))&&(i.stun=4*(1-n/t)+1.5)}}clear(){for(let e of this.list)e.dispose();this.list=[]}};var Wc=class extends Te{constructor(e,t={}){super(e),this.isWater=!0;let i=this,n=t.textureWidth!==void 0?t.textureWidth:512,s=t.textureHeight!==void 0?t.textureHeight:512,a=t.clipBias!==void 0?t.clipBias:0,o=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new D(.70707,.70707,0),d=new be(t.sunColor!==void 0?t.sunColor:16777215),u=new be(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new D(0,0,0),m=t.distortionScale!==void 0?t.distortionScale:20,b=t.side!==void 0?t.side:Zi,g=t.fog!==void 0?t.fog:!1,p=new Wi,v=new D,_=new D,y=new D,w=new Le,E=new D(0,0,-1),x=new lt,M=new D,R=new D,A=new lt,I=new Le,L=new Vt,U=new At(n,s,{type:xt}),P={name:"MirrorShader",uniforms:qt.merge([ge.fog,ge.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Le},sunColor:{value:new be(8355711)},sunDirection:{value:new D(.70707,.70707,0)},eye:{value:new D},waterColor:{value:new be(5592405)}}]),vertexShader:`
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
				}`},O=new it({name:P.name,uniforms:qt.clone(P.uniforms),vertexShader:P.vertexShader,fragmentShader:P.fragmentShader,lights:!0,side:b,fog:g});O.uniforms.mirrorSampler.value=U.texture,O.uniforms.textureMatrix.value=I,O.uniforms.alpha.value=o,O.uniforms.time.value=l,O.uniforms.normalSampler.value=c,O.uniforms.sunColor.value=d,O.uniforms.waterColor.value=u,O.uniforms.sunDirection.value=h,O.uniforms.distortionScale.value=m,O.uniforms.eye.value=f,i.material=O,i.onBeforeRender=function(B,H,Z){if(_.setFromMatrixPosition(i.matrixWorld),y.setFromMatrixPosition(Z.matrixWorld),w.extractRotation(i.matrixWorld),v.set(0,0,1),v.applyMatrix4(w),M.subVectors(_,y),M.dot(v)>0)return;M.reflect(v).negate(),M.add(_),w.extractRotation(Z.matrixWorld),E.set(0,0,-1),E.applyMatrix4(w),E.add(y),R.subVectors(_,E),R.reflect(v).negate(),R.add(_),L.position.copy(M),L.up.set(0,1,0),L.up.applyMatrix4(w),L.up.reflect(v),L.lookAt(R),L.far=Z.far,L.updateMatrixWorld(),L.projectionMatrix.copy(Z.projectionMatrix),I.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),I.multiply(L.projectionMatrix),I.multiply(L.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(v,_),p.applyMatrix4(L.matrixWorldInverse),x.set(p.normal.x,p.normal.y,p.normal.z,p.constant);let z=L.projectionMatrix;A.x=(Math.sign(x.x)+z.elements[8])/z.elements[0],A.y=(Math.sign(x.y)+z.elements[9])/z.elements[5],A.z=-1,A.w=(1+z.elements[10])/z.elements[14],x.multiplyScalar(2/x.dot(A)),z.elements[2]=x.x,z.elements[6]=x.y,z.elements[10]=x.z+1-a,z.elements[14]=x.w,f.setFromMatrixPosition(Z.matrixWorld);let X=B.getRenderTarget(),ee=B.xr.enabled,pe=B.shadowMap.autoUpdate;i.visible=!1,B.xr.enabled=!1,B.shadowMap.autoUpdate=!1,B.setRenderTarget(U),B.state.buffers.depth.setMask(!0),B.autoClear===!1&&B.clear(),B.render(H,L),i.visible=!0,B.xr.enabled=ee,B.shadowMap.autoUpdate=pe,B.setRenderTarget(X);let Ce=Z.viewport;Ce!==void 0&&B.state.viewport(Ce)}}};var Kr=new D;function Yy(r,e,t,i=2){let n=new Rt(r,e,t),s=n.attributes.uv,a=[[t,e],[t,e],[r,t],[r,t],[r,e],[r,e]];for(let o=0;o<6;o++){let[l,c]=a[o];for(let h=0;h<4;h++){let d=o*4+h;s.setXY(d,s.getX(d)*l/i,s.getY(d)*c/i)}}return s.needsUpdate=!0,n}var qc=class{constructor(e){this.scene=e,this.colliders=[],this.dynamic=[],this.bounds={minX:-100,maxX:100,minZ:-100,maxZ:100},this.groundY=0,this.groundMat="dirt",this.nav=null,this.coverPoints=[],this.lights=[]}addCollider(e,t,i="concrete",n={}){let s={min:e.clone(),max:t.clone(),mat:i,...n};return this.colliders.push(s),s}box(e,t,i,n,s,a,o,{mat:l="concrete",texSize:c=2,cast:h=!0,receive:d=!0,collide:u=!0,rotY:f=0}={}){let m=new Te(Yy(n,s,a,c),o);if(m.position.set(e,t+s/2,i),m.rotation.y=f,m.castShadow=h,m.receiveShadow=d,this.scene.add(m),u)if(f){m.updateMatrixWorld();let b=new $t().setFromObject(m);this.addCollider(b.min,b.max,l,{mesh:m})}else this.addCollider(new D(e-n/2,t,i-a/2),new D(e+n/2,t+s,i+a/2),l,{mesh:m});return m}wall(e,t,i,n,s,a,o,l={}){let c=(e+i)/2,h=(t+n)/2,d=Math.abs(i-e)||a,u=Math.abs(n-t)||a;return this.box(c,l.y||0,h,d,s,u,o,l)}wallWithDoor(e,t,i,n,s,a,o,l=.5,c=1.4,h=2.3,d={}){let u=Math.abs(i-e)>Math.abs(n-t),f=Math.abs(u?i-e:n-t),m=u?Math.min(e,i):Math.min(t,n),b=m+f*l-c/2,g=b+c,p=u?t:e,v=(_,y)=>{y-_<.05||(u?this.wall(_,p,y,p,s,a,o,d):this.wall(p,_,p,y,s,a,o,d))};v(m,b),v(g,m+f),s>h&&(u?this.box((b+g)/2,h,p,c,s-h,a,o,d):this.box(p,h,(b+g)/2,a,s-h,c,o,d))}async prop(e,t,i,{y:n=0,rotY:s=0,scale:a=1,collide:o=!0,mat:l="metal",cast:c=!0,explosive:h=!1,onlyVisual:d=!1}={}){let f=(await Cn(e)).scene.clone(!0);f.position.set(t,n,i),f.rotation.y=s,f.scale.setScalar(a),f.traverse(b=>{b.isMesh&&(b.castShadow=c,b.receiveShadow=!0)}),this.scene.add(f),f.updateMatrixWorld(!0);let m=null;if(o&&!d){let b=new $t().setFromObject(f);m=this.addCollider(b.min,b.max,l,{mesh:f,prop:e}),h&&(m.explosive=!0,m.hp=40,this.dynamic.push(m))}return f}removeCollider(e){let t=this.colliders.indexOf(e);t>=0&&this.colliders.splice(t,1)}raycast(e,t,i=500,n=null){let s=i,a=null,o=0,l=0,c=e.x,h=e.y,d=e.z,u=1/(t.x||1e-9),f=1/(t.y||1e-9),m=1/(t.z||1e-9);for(let g=0,p=this.colliders.length;g<p;g++){let v=this.colliders[g];if(v===n||v.noRay)continue;let _=(v.min.x-c)*u,y=(v.max.x-c)*u,w=Math.min(_,y),E=Math.max(_,y),x=0,M=_<y?-1:1;_=(v.min.y-h)*f,y=(v.max.y-h)*f;let R=Math.min(_,y),A=Math.max(_,y);R>w&&(w=R,x=1,M=_<y?-1:1),A<E&&(E=A),_=(v.min.z-d)*m,y=(v.max.z-d)*m,R=Math.min(_,y),A=Math.max(_,y),R>w&&(w=R,x=2,M=_<y?-1:1),A<E&&(E=A),E>=Math.max(w,0)&&w<s&&w>0&&(s=w,a=v,o=x,l=M)}if(t.y<0){let g=(this.groundY-h)/t.y;g>0&&g<s&&(s=g,a={ground:!0,mat:this.groundMat},o=1,l=1)}if(!a)return null;let b=new D;return b.setComponent(o,l),{dist:s,point:e.clone().addScaledVector(t,s),normal:b,collider:a,mat:a.mat}}lineOfSight(e,t){Kr.subVectors(t,e);let i=Kr.length();Kr.divideScalar(i);let n=this.raycast(e,Kr,i);return!n||n.dist>=i-.05}collideCylinder(e,t,i,n,s=.45){let a=this.groundY,o=e.y;for(let h of this.colliders){if(h.noCollide||h.max.y<=o+s||h.min.y>=o+i)continue;let d=Math.max(h.min.x,Math.min(e.x,h.max.x)),u=Math.max(h.min.z,Math.min(e.z,h.max.z)),f=e.x-d,m=e.z-u,b=f*f+m*m;if(!(b>=t*t))if(b>1e-8){let g=Math.sqrt(b),p=t-g;e.x+=f/g*p,e.z+=m/g*p;let v=f/g,_=m/g,y=n.x*v+n.z*_;y<0&&(n.x-=y*v,n.z-=y*_)}else{let g=e.x-h.min.x,p=h.max.x-e.x,v=e.z-h.min.z,_=h.max.z-e.z,y=Math.min(g,p,v,_);y===g?(e.x=h.min.x-t,n.x=Math.min(n.x,0)):y===p?(e.x=h.max.x+t,n.x=Math.max(n.x,0)):y===v?(e.z=h.min.z-t,n.z=Math.min(n.z,0)):(e.z=h.max.z+t,n.z=Math.max(n.z,0))}}let l=1/0;for(let h of this.colliders)h.noCollide||e.x+t*.7<h.min.x||e.x-t*.7>h.max.x||e.z+t*.7<h.min.z||e.z-t*.7>h.max.z||(h.max.y<=o+s+.001&&h.max.y>a?a=h.max.y:h.min.y>=o+.2&&h.min.y<l&&(l=h.min.y));let c=this.bounds;return e.x=Math.max(c.minX+t,Math.min(c.maxX-t,e.x)),e.z=Math.max(c.minZ+t,Math.min(c.maxZ-t,e.z)),{groundY:a,ceiling:l}}buildNav(e=.8){let t=this.bounds,i=Math.ceil((t.maxX-t.minX)/e),n=Math.ceil((t.maxZ-t.minZ)/e),s=new Uint8Array(i*n),a=.35;for(let o of this.colliders){if(o.noCollide||o.max.y<.5||o.min.y>1.7)continue;let l=Math.max(0,Math.floor((o.min.x-a-t.minX)/e)),c=Math.min(i-1,Math.floor((o.max.x+a-t.minX)/e)),h=Math.max(0,Math.floor((o.min.z-a-t.minZ)/e)),d=Math.min(n-1,Math.floor((o.max.z+a-t.minZ)/e));for(let u=h;u<=d;u++)for(let f=l;f<=c;f++)s[u*i+f]=1}this.nav={cell:e,w:i,h:n,grid:s},this.coverPoints=[];for(let o=1;o<n-1;o+=2)for(let l=1;l<i-1;l+=2)s[o*i+l]||(s[o*i+l+1]||s[o*i+l-1]||s[(o+1)*i+l]||s[(o-1)*i+l])&&this.coverPoints.push(new D(t.minX+(l+.5)*e,0,t.minZ+(o+.5)*e))}navCell(e){let t=this.nav,i=this.bounds;return[Math.max(0,Math.min(t.w-1,Math.floor((e.x-i.minX)/t.cell))),Math.max(0,Math.min(t.h-1,Math.floor((e.z-i.minZ)/t.cell)))]}navFree(e,t){let i=this.nav;return e>=0&&t>=0&&e<i.w&&t<i.h&&!i.grid[t*i.w+e]}cellPos(e,t){let i=this.nav,n=this.bounds;return new D(n.minX+(e+.5)*i.cell,0,n.minZ+(t+.5)*i.cell)}nearestFree(e,t){if(this.navFree(e,t))return[e,t];for(let i=1;i<8;i++)for(let n=-i;n<=i;n++)for(let s=-i;s<=i;s++)if(!(Math.abs(s)!==i&&Math.abs(n)!==i)&&this.navFree(e+s,t+n))return[e+s,t+n];return null}findPath(e,t,i=3e4){let n=this.nav;if(!n)return null;let s=this.navCell(e),a=this.navCell(t);if(s=this.nearestFree(s[0],s[1]),a=this.nearestFree(a[0],a[1]),!s||!a)return null;let o=n.w,l=n.w*n.h,c=s[1]*o+s[0],h=a[1]*o+a[0];(!this._g||this._g.length!==l)&&(this._g=new Float32Array(l),this._came=new Int32Array(l),this._stamp=new Uint32Array(l),this._closed=new Uint32Array(l),this._run=0);let d=this._g,u=this._came,f=this._stamp,m=this._closed,b=++this._run,g=L=>{let U=L%o,P=L/o|0,O=Math.abs(U-a[0]),B=Math.abs(P-a[1]);return Math.max(O,B)+.414*Math.min(O,B)},p=[],v=[],_=(L,U)=>{let P=p.length;for(p.push(L),v.push(U);P>0;){let O=P-1>>1;if(p[O]<=p[P])break;[p[O],p[P]]=[p[P],p[O]],[v[O],v[P]]=[v[P],v[O]],P=O}},y=()=>{let L=v[0],U=p.pop(),P=v.pop();if(p.length){p[0]=U,v[0]=P;let O=0;for(;;){let B=2*O+1,H=B+1,Z=O;if(B<p.length&&p[B]<p[Z]&&(Z=B),H<p.length&&p[H]<p[Z]&&(Z=H),Z===O)break;[p[Z],p[O]]=[p[O],p[Z]],[v[Z],v[O]]=[v[O],v[Z]],O=Z}}return L};f[c]=b,d[c]=0,u[c]=-1,_(g(c),c);let w=0,E=c===h;for(;p.length&&w++<i;){let L=y();if(L===h){E=!0;break}if(m[L]===b)continue;m[L]=b;let U=L%o,P=L/o|0,O=d[L];for(let B=-1;B<=1;B++)for(let H=-1;H<=1;H++){if(!H&&!B)continue;let Z=U+H,z=P+B;if(!this.navFree(Z,z)||H&&B&&(!this.navFree(U+H,P)||!this.navFree(U,P+B)))continue;let X=z*o+Z,ee=O+(H&&B?1.414:1);(f[X]!==b||ee<d[X])&&(f[X]=b,d[X]=ee,u[X]=L,_(ee+g(X),X))}}if(!E)return null;let x=[],M=h;for(;M!==c&&M>=0;)x.push(this.cellPos(M%o,M/o|0)),M=u[M];x.reverse();let R=[],A=e.clone(),I=0;for(;I<x.length;){let L=x.length-1;for(;L>I&&!this.clearWalk(A,x[L]);L--);R.push(x[L]),A=x[L],I=L+1}return R}clearWalk(e,t){let i=Math.ceil(e.distanceTo(t)/(this.nav.cell*.5));for(let n=1;n<=i;n++){let s=n/i;Kr.lerpVectors(e,t,s);let[a,o]=this.navCell(Kr);if(!this.navFree(a,o))return!1}return!0}};var Ky=(r=0,e=0,t=0)=>new D(r,e,t);function Xc(r,e){let t=Math.sin(r*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function Jy(r,e){let t=Math.floor(r),i=Math.floor(e),n=r-t,s=e-i,a=n*n*(3-2*n),o=s*s*(3-2*s),l=Xc(t,i),c=Xc(t+1,i),h=Xc(t,i+1),d=Xc(t+1,i+1);return l+(c-l)*a+(h-l)*o+(l-c-h+d)*a*o}function vu(r,e,t=4){let i=0,n=.5,s=1;for(let a=0;a<t;a++)i+=Jy(r*s,e*s)*n,n*=.5,s*=2.03;return i}function Jr(r,e){let{scene:t,engine:i}=r,n=i.renderer;n.toneMappingExposure=e.exposure??1;let s=new Hr(n),a=Jp(e.hdri),o=new hn,l=new be(e.bounceColor??e.groundColor??7035461).multiplyScalar((e.sunIntensity??3)*Math.max(.15,e.sunDir.clone().normalize().y)*(e.bounce??.32)),c=new it({side:ci,depthWrite:!1,uniforms:{map:{value:a},ground:{value:l},skyMul:{value:e.skyEnvMul??1}},vertexShader:"varying vec3 vD; void main(){ vD = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D map; uniform vec3 ground; uniform float skyMul; varying vec3 vD;
      void main(){ vec3 d = normalize(vD); vec2 uv = vec2(atan(d.z, d.x) * 0.15915494 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5);
        vec3 c = texture2D(map, uv).rgb * skyMul; float g = smoothstep(0.03, -0.06, d.y); gl_FragColor = vec4(mix(c, ground, g), 1.0); }`});o.add(new Te(new yn(10,64,32),c));let h=s.fromScene(o,0,.1,100).texture;a.dispose(),c.dispose(),s.dispose(),t.environment=h,t.environmentIntensity=e.envIntensity??1,i.vmScene.environment=h,i.vmScene.environmentIntensity=(e.envIntensity??1)*(e.vmEnv??1.25);let d=e.sunDir.clone().normalize();if(e.night)t.background=Qy(e);else{let v=Zy(e,d);t.add(v),r.sky=v,t.background=null}let u=new fs(e.sunColor??16773596,e.sunIntensity??3);u.position.copy(d).multiplyScalar(100),u.castShadow=!0;let f=i.quality,m={low:1024,medium:2048,high:4096,ultra:4096}[f]||2048;u.shadow.mapSize.set(m,m);let b=e.shadowExtent??55;Object.assign(u.shadow.camera,{left:-b,right:b,top:b,bottom:-b,near:1,far:250}),u.shadow.bias=-3e-4,u.shadow.normalBias=.03,u.shadow.radius=3,u.shadow.blurSamples=12,t.add(u),t.add(u.target),r.sun=u,r.sunDir=d,r.shadowExt=b;let g=new Ir(e.skyColor??12572415,e.groundColor??7035461,e.hemi??.25);t.add(g);let p=new fs(e.sunColor??16773596,(e.sunIntensity??3)*.75);i.vmScene.add(p),i.vmScene.add(p.target),r.vmSun=p,i.vmScene.add(new Ir(e.skyColor??12572415,e.groundColor??7035461,(e.hemi??.25)*1.2)),t.fog=new va(e.fogColor??13227746,e.fogDensity??.0045),r.grade=e.grade||{}}function Zy(r,e){let t=new it({side:ci,depthWrite:!1,fog:!1,uniforms:{zenith:{value:new be(r.skyTop??3104670).multiplyScalar(r.skyBright??1.4)},horizon:{value:new be(r.skyHorizon??13030624).multiplyScalar(r.skyBright??1.4)},ground:{value:new be(r.skyGround??7037528).multiplyScalar(.6)},sunDir:{value:e.clone()},sunCol:{value:new be(r.sunColor??16773596)},cover:{value:r.clouds??.45},cloudCol:{value:new be(r.cloudColor??16777215)},time:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p; }",fragmentShader:`
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
      }`}),i=new Te(new yn(1e3,48,24),t);return i.frustumCulled=!1,i.renderOrder=-10,i}function Qy(r){let e=document.createElement("canvas");e.width=2048,e.height=1024;let t=e.getContext("2d"),i=t.createLinearGradient(0,0,0,1024);i.addColorStop(0,"#02040a"),i.addColorStop(.42,"#0a1426"),i.addColorStop(.5,"#1a2436"),i.addColorStop(.52,"#0b0d12"),i.addColorStop(1,"#050505"),t.fillStyle=i,t.fillRect(0,0,2048,1024);for(let c=0;c<2500;c++){let h=Math.random()*500,d=Math.random();t.fillStyle=`rgba(255,255,255,${d*d*(1-h/520)})`,t.fillRect(Math.random()*2048,h,d>.95?2:1,d>.95?2:1)}let n=1300,s=260,a=t.createRadialGradient(n,s,0,n,s,90);a.addColorStop(0,"rgba(220,230,255,0.35)"),a.addColorStop(1,"rgba(200,210,255,0)"),t.fillStyle=a,t.fillRect(n-90,s-90,180,180),t.fillStyle="#e8ecf5",t.beginPath(),t.arc(n,s,16,0,7),t.fill();let o=t.createLinearGradient(0,470,0,530);o.addColorStop(0,"rgba(255,140,60,0)"),o.addColorStop(.7,"rgba(255,140,60,0.12)"),o.addColorStop(1,"rgba(255,140,60,0)"),t.fillStyle=o,t.fillRect(0,470,2048,60);let l=new Ji(e);return l.mapping=ms,l.colorSpace=at,l}function lm(r){let e=r.sun;if(!e)return;let t=r.player.pos,i=r.shadowExt,n=e.shadow.mapSize.x,s=2*i/n,a=Ky(Math.round(t.x/s)*s,0,Math.round(t.z/s)*s);if(e.target.position.copy(a),e.position.copy(a).addScaledVector(r.sunDir,120),e.target.updateMatrixWorld(),r.vmSun){let o=r.engine.camera,l=r.sunDir.clone().applyQuaternion(o.quaternion.clone().invert());r.vmSun.position.copy(l).multiplyScalar(5),r.vmSun.target.position.set(0,0,0)}r.sky&&(r.sky.position.copy(r.engine.camera.position),r.sky.material.uniforms.time.value=r.time)}async function wo(r,{tex:e,texSize:t=4,size:i=700,flat:n=90,hills:s=25,color:a,seed:o=0,mat:l="dirt",rough:c}){let d=new ki(i,i,160,160);d.rotateX(-Math.PI/2);let u=d.attributes.position,f=d.attributes.uv,m=new Float32Array(u.count*3);for(let p=0;p<u.count;p++){let v=u.getX(p),_=u.getZ(p),y=Math.max(Math.abs(v),Math.abs(_)),w=Wt.smoothstep(y,n,n+70),E=w*(vu(v*.012+o,_*.012)*s+vu(v*.05,_*.05+o)*4)-(1-w)*0;u.setY(p,E+(y<n,0)),f.setXY(p,v/t,_/t);let x=.82+vu(v*.03+5,_*.03)*.36;m[p*3]=m[p*3+1]=m[p*3+2]=x}d.setAttribute("color",new Nt(m,3)),d.computeVertexNormals();let b=(await pi(e)).clone();cu(b,0),b.vertexColors=!0,a&&b.color.set(a),c!==void 0&&(b.roughness=c);let g=new Te(d,b);return g.receiveShadow=!0,r.scene.add(g),r.world.groundMat=l,g}function Xi(r,e,t,i,n,s,a,o,l=[],c={}){let h=Math.abs(i-e)>=Math.abs(n-t),d=h?Math.min(e,i):Math.min(t,n),u=Math.abs(h?i-e:n-t),f=h?t:e,m=(p,v,_,y)=>{if(v-p<.02||y-_<.02)return;let w=(p+v)/2;h?r.box(w,_+(c.y||0),f,v-p,y-_,a,o,c):r.box(f,_+(c.y||0),w,a,y-_,v-p,o,c)},b=l.map(p=>({s:d+u*p.at-p.w/2,e:d+u*p.at+p.w/2,y0:p.y0??0,y1:p.y1??2.3})).sort((p,v)=>p.s-v.s),g=d;for(let p of b)m(g,p.s,0,s),m(p.s,p.e,0,p.y0),m(p.s,p.e,p.y1,s),g=p.e;m(g,d+u,0,s)}function vs(r,e,t,i,n,s,a,{roofMat:o,floorMat:l,thick:c=.3,doors:h={},windows:d={},roof:u=!0,parapet:f=.6,trim:m}={}){let b=e-i/2,g=e+i/2,p=t-n/2,v=t+n/2,_=y=>[...(h[y]||[]).map(w=>({at:w,w:1.3,y0:0,y1:2.3})),...(d[y]||[]).map(w=>({at:w,w:1.2,y0:1,y1:2}))];return Xi(r,b,p,g,p,s,c,a,_("n")),Xi(r,b,v,g,v,s,c,a,_("s")),Xi(r,b,p+c/2,b,v-c/2,s,c,a,_("w")),Xi(r,g,p+c/2,g,v-c/2,s,c,a,_("e")),u&&(r.box(e,s,t,i+.2,.25,n+.2,o||a,{texSize:3}),f&&(r.box(e,s+.25,p-.05,i+.2,f,.2,a,{collide:!1}),r.box(e,s+.25,v+.05,i+.2,f,.2,a,{collide:!1}),r.box(b-.05,s+.25,t,.2,f,n,a,{collide:!1}),r.box(g+.05,s+.25,t,.2,f,n,a,{collide:!1}))),l&&r.box(e,0,t,i-c,.04,n-c,l,{collide:!1,cast:!1}),{x0:b,x1:g,z0:p,z1:v}}async function cm(r){let e=(await pi("container_side")).clone();return e.color.set(r),e}var Se=(r=0,e=0,t=0)=>new D(r,e,t);async function To(){let[r,e,t,i,n,s,a,o,l,c,h,d,u]=await Promise.all([pi("plastered_wall_04"),pi("beige_wall_001"),pi("red_brick_03"),pi("brushed_concrete"),pi("patterned_concrete_wall"),pi("concrete_floor_worn_001"),pi("asphalt_02"),pi("rusty_metal_02"),pi("corrugated_iron"),pi("brown_planks_03"),pi("metal_plate"),pi("rocky_terrain_02"),pi("dry_ground_01")]),f=new qe({color:9403740,roughness:.95,normalMap:r.normalMap,normalScale:new ue(1.5,1.5)}),m=h.clone();m.color.set(14263328),m.metalness=.6;let b=h.clone();return b.color.set(3816768),{plaster:r,beige:e,brick:t,concrete:i,patterned:n,floor:s,asphalt:a,rust:o,corr:l,wood:c,plate:h,rock:d,sandstone:u,sandbag:f,yellow:m,darkMetal:b}}function Bt(r,e,t,i={}){return r.enemies.spawn({pos:Se(e,i.y||0,t),yaw:i.yaw??Math.PI,tint:i.tint??r.level.tint,zone:i.zone,state:i.state,patrol:i.patrol?.map(n=>Se(n[0],0,n[1])),hold:i.hold,hp:i.hp,hostage:i.hostage})}function Kt(r,e,t,i,n,s=!0,a=.9){let o=new tt,l=Math.round(a/.22),c=Math.ceil(n/.6),h=new Ca(.13,.36,4,8);h.rotateZ(Math.PI/2),h.scale(1,.75,1.3);let d=new Xn(h,e.sandbag,l*(c+1)),u=0,f=new Le,m=new Lt,b=new D(1,1,1);for(let g=0;g<l;g++)for(let p=0;p<=c;p++){let v=(p+g%2*.5)*.6-n/2;if(v>n/2)continue;let _=s?Se(t+v,.12+g*.2,i):Se(t,.12+g*.2,i+v);m.setFromEuler(new Si(0,(s?0:Math.PI/2)+(Math.random()-.5)*.15,0)),f.compose(_,m,b),d.setMatrixAt(u++,f)}d.count=u,d.castShadow=d.receiveShadow=!0,r.scene.add(d),s?r.addCollider(Se(t-n/2,0,i-.3),Se(t+n/2,a,i+.3),"dirt"):r.addCollider(Se(t-.3,0,i-n/2),Se(t+.3,a,i+n/2),"dirt")}function er(r,e,t,i,n=0,s=!1){let a=r.world,o=new tt,l=e.rust,c=s?6:4.3,h=s?2.3:1.8,d=new Te(new Rt(h,.75,c),l);d.position.y=.62,o.add(d);let u=new Te(new Rt(h*.9,s?1.1:.6,s?1.8:2.2),l);u.position.set(0,s?1.55:1.25,s?-c/2+1.1:-.2),o.add(u);for(let[b,g]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let p=new Te(new Yt(.36,.36,.25,12),e.darkMetal);p.rotation.z=Math.PI/2,p.position.set(b*(h/2-.05),.3,g*(c/2-.8)),o.add(p)}o.position.set(t,0,i),o.rotation.y=n,o.traverse(b=>{b.isMesh&&(b.castShadow=b.receiveShadow=!0)}),r.scene.add(o),o.updateMatrixWorld(!0);let f=new $t().setFromObject(d);a.addCollider(f.min,f.max,"metal");let m=new $t().setFromObject(u);return a.addCollider(m.min,m.max,"metal"),o}function $y(r,e,t,i,n=0){let s=new tt,a=new Te(new Rt(.34,.02,.24),new qe({color:2237222,metalness:.6,roughness:.4})),o=document.createElement("canvas");o.width=256,o.height=160;let l=o.getContext("2d");l.fillStyle="#031",l.fillRect(0,0,256,160),l.fillStyle="#3f8",l.font="12px monospace";for(let u=0;u<11;u++)l.fillText(["> ACCESS GRANTED","> DECRYPTING...","NODE 7 :: "+Math.random().toString(16).slice(2,10),"COORD 34.51N 69.18E","> TRANSFER 42%","CACHE: SECTOR-4","\u2588\u2588\u2593\u2592\u2591 \u2592\u2593\u2588","EXFIL ROUTE B","PAYLOAD ARMED","USER: vanguard","> _"][u],8,16+u*13);let c=new Ji(o);c.colorSpace=at;let h=new Te(new Rt(.34,.22,.012),[0,0,0,0,new qe({color:1118481,emissive:16777215,emissiveMap:c,emissiveIntensity:2.5,map:c}),0].map(u=>u||a.material));h.position.set(0,.11,-.12),h.rotation.x=-.25,a.position.y=.01,s.add(a,h),s.position.set(e,t,i),s.rotation.y=n,r.scene.add(s);let d=new ui(5635993,1.5,3,2);return d.position.set(e,t+.3,i),r.scene.add(d),s}function Mu(r,e,t,i,n=1.4,s=.8){r.world.box(t,.74,i,n,.05,s,e.wood,{texSize:1.5});for(let[a,o]of[[-1,-1],[1,-1],[-1,1],[1,1]])r.world.box(t+a*(n/2-.06),0,i+o*(s/2-.06),.06,.74,.06,e.wood,{collide:!1});r.world.addCollider(Se(t-n/2,0,i-s/2),Se(t+n/2,.79,i+s/2),"wood")}function yu(r,e,t=[.35,.95,.4]){return i=>{for(r._gs=(r._gs||0)+i*10;r._gs>1;)r._gs--,r.effects.smoke.spawn(e.clone().add(Se((Math.random()-.5)*.4,.2,(Math.random()-.5)*.4)),Se(.6+Math.random()*.5,1.2+Math.random(),(Math.random()-.5)*.4),{life:5+Math.random()*2,size:.8,grow:1.6,color:t,alpha:.5,drag:.4,spin:.4,fade:2})}}function _u(r,e,t,i,n=0,s={}){let a=new tt;a.position.set(t,s.y||0,i),a.rotation.y=n;let o=new qe({color:s.color??8225396,metalness:.7,roughness:.55,normalMap:e.plate.normalMap}),l=new Te(new Rt(.5,.75,.025),o);l.position.y=1;let c=new Te(new Yt(.12,.12,.025,20),o);c.rotation.x=Math.PI/2,c.position.y=1.52;let h=new Te(new Rt(.06,.65,.06),e.darkMetal);h.position.y=.32;let d=new Te(new Da(.13,.015,6,20),new ti({color:16724e3}));d.position.set(0,1,.02),a.add(l,c,h,d),a.traverse(m=>{m.isMesh&&(m.castShadow=!0)}),r.scene.add(a);let u=new tt,f=r.world.addCollider(Se(t-.3,(s.y||0)+.6,i-.3),Se(t+.3,(s.y||0)+1.68,i+.3),"metal",{mesh:a,target:!0,lane:s.lane});return r.world.box(t,s.y||0,i,.6,.08,.4,e.darkMetal,{collide:!1}),f}async function hm(r,e){let t=r.world;t.bounds={minX:-68,maxX:68,minZ:-84,maxZ:68},await wo(r,{tex:"dry_ground_01",texSize:5,flat:85,hills:32,mat:"sand",seed:3});for(let a=0;a<26;a++){let o=a/26*Math.PI*2,l=95+Math.random()*15;await t.prop("boulder_01",Math.cos(o)*l*.75,Math.sin(o)*l*.85,{rotY:Math.random()*6,scale:3+Math.random()*4,collide:!1})}let i=e.plaster;Xi(t,-42,30,42,30,2.8,.5,i,[{at:.5,w:4,y0:0,y1:9},{at:.2,w:2.2,y0:0,y1:9},{at:.8,w:2.2,y0:0,y1:9}],{texSize:3}),t.wall(-42,30,-42,-20,2.8,.5,i,{texSize:3}),t.wall(42,30,42,-20,2.8,.5,i,{texSize:3});let n=(a,o,l,c,h,d)=>vs(t,a,o,l,c,h,d.mat||e.plaster,{roofMat:e.concrete,floorMat:e.floor,...d});n(-25,16,10,8,3.4,{doors:{s:[.3]},windows:{e:[.5],w:[.5],n:[.7]}}),n(-8,12,8,8,3.2,{doors:{s:[.5],e:[.5]},windows:{n:[.5]},mat:e.beige}),n(12,16,12,8,3.6,{doors:{s:[.25]},windows:{n:[.3,.7],w:[.5],s:[.75]}}),n(29,9,8,10,3.2,{doors:{w:[.5]},windows:{s:[.5],n:[.5]},mat:e.beige}),n(-28,-8,10,10,3.4,{doors:{e:[.5]},windows:{n:[.5],s:[.5]}}),n(25,-12,10,8,3.4,{doors:{w:[.5],s:[.6]},windows:{e:[.5]},mat:e.beige}),n(-10,-14,7,7,3,{doors:{s:[.5],e:[.4]},windows:{w:[.5]}}),Xi(t,-16,-24,16,-24,3,.5,e.patterned,[{at:.5,w:3.5,y0:0,y1:9}],{texSize:3}),t.wall(-16,-24,-16,-52,3,.5,e.patterned,{texSize:3}),t.wall(16,-24,16,-52,3,.5,e.patterned,{texSize:3}),Xi(t,-16,-52,16,-52,3,.5,e.patterned,[{at:.75,w:3,y0:0,y1:9}],{texSize:3}),n(0,-40,16,12,4,{doors:{s:[.5],n:[.2]},windows:{s:[.15,.85],e:[.5],w:[.3]},mat:e.beige}),Xi(t,-8,-40,8,-40,4,.25,e.beige,[{at:.65,w:1.3,y0:0,y1:2.3}]);for(let[a,o]of[[-6,0],[4,2],[10,-4]]){t.box(a,0,o,3,.9,1.4,e.wood,{mat:"wood",texSize:1.5});for(let[l,c]of[[-1.4,-.7],[1.4,-.7],[-1.4,.7],[1.4,.7]])t.box(a+l,.9,o+c,.08,1.6,.08,e.wood,{collide:!1});t.box(a,2.5,o,3.4,.05,1.8,e.corr,{collide:!1,texSize:2})}let s=(a,o,l,c={})=>t.prop(a,o,l,c);await Promise.all([s("wooden_crate_01",-3,6,{rotY:.3,mat:"wood"}),s("wooden_crate_01",-3,6.8,{rotY:.1,mat:"wood",y:0}),s("old_military_crate",6,8,{rotY:1.2,mat:"wood"}),s("Barrel_01",7.5,7,{mat:"metal"}),s("barrel_03",8.2,7.6,{mat:"metal"}),s("metal_jerrycan_green",2,-6,{explosive:!0}),s("propane_tank",15,-2,{explosive:!0}),s("propane_tank",-16,4,{explosive:!0}),s("covered_car",-16,38,{rotY:.4}),s("covered_car",20,24,{rotY:-1.2}),s("concrete_road_barrier",-4,44,{rotY:.1}),s("concrete_road_barrier",3,46,{rotY:-.2}),s("concrete_road_barrier",0,-20,{rotY:0}),s("old_tyre",-12,25,{rotY:1,y:.3}),s("cardboard_box_01",-22,4),s("cardboard_box_01",-21.5,4.5,{rotY:.7}),s("wooden_crate_01",18,3,{rotY:.8,mat:"wood"}),s("Barrel_01",-30,2),s("Barrel_01",-30.7,2.6),s("barrel_03",31,-2),s("utility_box_01",34,18,{rotY:Math.PI/2}),s("portable_generator",-6,-28,{rotY:.5}),s("old_military_crate",8,-30,{mat:"wood"}),s("ammo_box",8,-30.3,{y:.3}),s("medical_box",-5,-45)]);for(let a=0;a<8;a++){let o=(Math.random()-.5)*110,l=40+Math.random()*25;Math.abs(o)<30||await s("boulder_01",o,l,{rotY:Math.random()*6,scale:.8+Math.random()*.9,mat:"concrete"})}for(let a=0;a<40;a++)await s("rock_07",(Math.random()-.5)*120,(Math.random()-.5)*150,{rotY:Math.random()*6,scale:1+Math.random()*2,collide:!1,cast:!1});Kt(t,e,-3,36,4),Kt(t,e,4,36,3),er(r,e,-5,55,.35,!0),er(r,e,9,49,-.5),er(r,e,-14,43,1.2),er(r,e,17,40,.2,!0),Kt(t,e,3,58,3.5),Kt(t,e,-10,50,3.5),Kt(t,e,0,46,3),Kt(t,e,22,50,3.5,!1),Kt(t,e,-22,52,3.5,!1),await Promise.all([[-18,58],[13,60],[-28,46],[27,44],[6,40]].map(([a,o],l)=>t.prop("boulder_01",a,o,{rotY:l*1.7,scale:1.6,mat:"concrete"}))),Kt(t,e,-6,-20,3),Kt(t,e,6,-20,3),Kt(t,e,0,-60,6),r._supplies=[Se(-6,0,33.5),Se(-31,0,0),Se(20,0,-26)],Mu(r,e,3,-44.5,1.6,.8),$y(r,3,.79,-44.5,.2);for(let[a,o]of[[0,-44],[0,-36],[12,16],[-28,-8]]){let l=new ui(16767392,4,9,2);l.position.set(a,2.8,o),r.scene.add(l)}}var nn=[{id:"bootcamp",name:"BOOT CAMP",location:"Camp Hornet, Nevada",time:"09:20 Local",reverb:"outdoor",briefing:"Before you deploy, prove you can handle your loadout. Run the qualification course: hip-fire, long-range marksmanship, grenade handling and close-quarters clearing. The clock is running, soldier.",objectivesPreview:["Hip-fire qualification","Long-range marksmanship","Grenade handling","Clear the shoot house","Sprint to the finish"],intro:["BOOT CAMP","Camp Hornet, Nevada",'Sgt. "Ghost" Reyes \u2014 1st Vanguard Battalion',"Day 1, 09:20"],hint:"Move: <b>WASD</b> &nbsp; Look: <b>Mouse/Arrows</b> &nbsp; Fire: <b>Click or E</b> &nbsp; Aim: <b>RMB or Z</b> &nbsp; Sprint: <b>Shift</b> &nbsp; Reload: <b>R</b>",ambience:[["wind",.25]],async build(r,e){Jr(r,{hdri:"kloofendal_48d_partly_cloudy_puresky",sunDir:Se(-.5,.9,.35),sunIntensity:3.2,sunColor:16773340,envIntensity:.9,fogColor:12374246,fogDensity:.0032,exposure:1,skyTop:2775712,skyHorizon:12571364,clouds:.5,hemi:.2,groundColor:5925440,grade:{saturation:1.05}}),r.envExposure=1;let t=await To(),i=r.world;r.level.tint=7173217,i.bounds={minX:-46,maxX:46,minZ:-70,maxZ:46},await wo(r,{tex:"sparse_grass",texSize:4,flat:80,hills:30,mat:"grass",seed:7}),e(.45,"Building range");for(let[h,d,u,f]of[[-46,-70,46,-70],[-46,46,46,46],[-46,-70,-46,46],[46,-70,46,46]])i.wall(h,d,u,f,2.6,.4,t.patterned,{texSize:3});Mu(r,t,-3,38,2,.9),Mu(r,t,3,38,2,.9),await Promise.all([i.prop("ammo_box",-3.4,38,{y:.79}),i.prop("ammo_box",-2.6,38.1,{y:.79,rotY:.4}),i.prop("medical_box",3,38,{y:.79}),i.prop("old_military_crate",8,40,{mat:"wood"}),i.prop("wooden_crate_01",9,37,{mat:"wood"}),i.prop("portable_generator",-9,40)]),Kt(i,t,-12,16,10);for(let h=0;h<4;h++)_u(r,t,-16+h*2.7,2-h%2*3,0,{lane:1});i.box(-12,0,20,.3,.02,.3,t.concrete,{collide:!1}),Kt(i,t,12,16,10);for(let h=0;h<3;h++)_u(r,t,8+h*4,-26-h*6,0,{lane:2});for(let h of[0,-10,-20,-30])i.box(5,0,h,.15,1.2,.15,t.wood,{collide:!1}),i.box(19,0,h,.15,1.2,.15,t.wood,{collide:!1});let n=Se(-28,0,-6);for(let h=0;h<4;h++){let d=h*Math.PI/2;Kt(i,t,n.x+Math.cos(d)*3.2,n.z+Math.sin(d)*3.2,4.5,h%2===1,.6)}Kt(i,t,-28,8,5),e(.6,"Building shoot house");let s={x:0,z:-45};vs(i,s.x,s.z,18,14,3.2,t.concrete,{roof:!1,floorMat:t.floor,doors:{s:[.5],n:[.8]},windows:{e:[.3],w:[.6]}}),Xi(i,-9,-45,3,-45,3.2,.25,t.concrete,[{at:.35,w:1.3,y0:0,y1:2.3}]),Xi(i,3,-52,3,-38,3.2,.25,t.concrete,[{at:.25,w:1.3,y0:0,y1:2.3},{at:.75,w:1.3,y0:0,y1:2.3}]);for(let[h,d,u]of[[-6,-41,0],[-2,-40,0],[6,-41,0],[7,-49,0],[-5,-50,0],[-1,-49.5,0]])_u(r,t,h,d,Math.PI*(Math.random()<.5,0),{lane:3,color:9198154});await Promise.all([i.prop("wooden_crate_01",-7,-48,{mat:"wood"}),i.prop("Barrel_01",5,-43),i.prop("cardboard_box_01",1,-50)]);let a=Se(0,0,-63);i.box(-4,0,-63,.3,3,.3,t.yellow,{collide:!1}),i.box(4,0,-63,.3,3,.3,t.yellow,{collide:!1}),i.box(0,2.9,-63,8.3,.3,.3,t.yellow,{collide:!1});for(let[h,d]of[[-40,40],[40,40],[-40,-64],[40,-64]]){for(let[u,f]of[[-1,-1],[1,-1],[-1,1],[1,1]])i.box(h+u,0,d+f,.2,5,.2,t.wood,{mat:"wood"});i.box(h,5,d,2.6,.15,2.6,t.wood),i.box(h,5.15,d,2.6,1,.1,t.wood,{collide:!1}),i.box(h,6.4,d,3,.1,3,t.corr,{collide:!1})}r._supplies=[Se(6,0,36)];let o={1:0,2:0,3:0};r.onTargetHit=h=>{o[h.lane]=(o[h.lane]||0)+1};let l=!1;return{spawn:Se(0,0,40),spawnYaw:0,exposure:1,onExplosion:(h,d)=>{d==="frag"&&Math.hypot(h.x-n.x,h.z-n.z)<4.5&&(l=!0)},objectives:[{type:"reach",text:"Move to the firing line at Lane 1",pos:Se(-12,0,18),radius:3},{type:"custom",text:"Hip-fire: knock down the 4 targets in Lane 1",waypointPos:Se(-12,1,0),check:(h,d,u)=>(h.hud.setObjectiveCount(`${o[1]}/4`),o[1]>=4),onStart:h=>h.hud.showHint("Hip-fire is fastest up close. Aim with <b>RMB</b> for precision.",6)},{type:"reach",text:"Move to the firing line at Lane 2",pos:Se(12,0,18),radius:3},{type:"custom",text:"Aim down sights (RMB) and drop the 3 long-range targets",waypointPos:Se(12,1,-32),check:()=>(r.hud.setObjectiveCount(`${o[2]}/3`),o[2]>=3),onStart:h=>h.hud.showHint("Hold <b>RMB</b> to aim. Crouch (<b>C</b>) to steady your shots.",6)},{type:"reach",text:"Proceed to the grenade range",pos:Se(-28,0,10),radius:3},{type:"custom",text:"Throw a grenade (G) into the sandbagged pit",waypointPos:Se(-28,.5,-6),check:h=>(h.player.grenades.lethal===0&&!l&&!h.grenades.length&&(h.player.grenades.lethal=1),l),onStart:h=>h.hud.showHint("Press <b>G</b> to throw a frag grenade. Aim high to lob it further.",6)},{type:"reach",text:"Enter the shoot house",pos:Se(0,0,-38),radius:2.5,onStart:h=>{h.player.grenades.lethal=2,h.player.grenades.tactical=2}},{type:"custom",text:"Clear the shoot house: drop all 6 targets",check:()=>(r.hud.setObjectiveCount(`${o[3]}/6`),o[3]>=6),onStart:h=>h.hud.showHint("Check your corners. Switch weapons with <b>1</b>/<b>2</b>. Get close and press <b>F</b> to use your knife.",6)},{type:"reach",text:"Sprint (Shift) through the finish gate",pos:a,radius:3}]}}},{id:"dustdevil",enemyWeapon:"ak47",name:"OPERATION DUST DEVIL",location:"Al-Qadir Province",time:"13:05 Local",reverb:"outdoor",briefing:'Insurgent commander "The Jackal" is coordinating attacks from a walled village in the desert. Infiltrate the village from the south, eliminate all hostile forces, and recover the intelligence laptop from his compound. Exfil by helicopter at the northern LZ.',objectivesPreview:["Infiltrate the village","Eliminate hostile forces","Recover the intel","Reach the LZ for extraction"],intro:["OPERATION DUST DEVIL","Al-Qadir Province",'Sgt. "Ghost" Reyes \u2014 1st Vanguard Battalion',"Day 4, 13:05"],ambience:[["wind",.45]],async build(r,e){Jr(r,{hdri:"qwantani_noon_puresky",sunDir:Se(.6,.78,.5),sunIntensity:4,sunColor:16773852,envIntensity:1,fogColor:14273973,fogDensity:.005,exposure:.85,skyTop:2972828,skyHorizon:14866112,skyGround:11770488,clouds:.22,hemi:.25,groundColor:10125148,grade:{tint:16774114,saturation:1,contrast:1.14}}),r.envExposure=.85,r.level.tint=12101253;let t=await To();e(.4,"Building village"),await hm(r,t),e(.7,"Deploying hostiles");let i="village";Bt(r,-20,36,{zone:i,patrol:[[-30,36],[-8,36]]}),Bt(r,22,36,{zone:i,patrol:[[12,36],[32,38]]}),Bt(r,-3,31.5,{zone:i,yaw:Math.PI}),Bt(r,3,32,{zone:i,yaw:Math.PI}),Bt(r,-25,16,{zone:i,yaw:Math.PI}),Bt(r,12,17,{zone:i,yaw:.5}),Bt(r,-8,12,{zone:i,yaw:2}),Bt(r,0,2,{zone:i,patrol:[[0,6],[-12,0],[0,-8],[14,-2]]}),Bt(r,22,0,{zone:i,yaw:1.5}),Bt(r,-28,-8,{zone:i,yaw:-1.5}),Bt(r,25,-12,{zone:i,yaw:2.5}),Bt(r,-10,-14,{zone:i}),Bt(r,-3,-22,{zone:i,yaw:Math.PI}),Bt(r,3,-21.5,{zone:i,yaw:Math.PI}),Bt(r,-5,-36,{zone:i}),Bt(r,5,-46,{zone:i,yaw:.8}),Bt(r,-10,-48,{zone:i,patrol:[[-12,-48],[12,-48]]});let n=Se(0,0,-74),s=yu(r,n),a=!1;return{spawn:Se(0,0,62),spawnYaw:0,exposure:.85,update:(o,l)=>{o.objIdx>=3&&s(l)},objectives:[{type:"reach",text:"Infiltrate the village",pos:Se(0,0,26),radius:6},{type:"kill",text:"Eliminate all hostile forces in the village",filter:o=>o.zone==="village"},{type:"interact",text:"Recover the intel from The Jackal's compound",pos:Se(3,0,-44.5),radius:1.6,label:"Hold <b>[F]</b> to download the intel",time:4},{type:"reach",text:"Reach the LZ for extraction",pos:n,radius:5,onStart:o=>{o.hud.toast("ENEMY REINFORCEMENTS INBOUND",3);for(let[l,c]of[[-60,-40],[-58,-30],[60,-45],[58,-35],[-30,-78],[30,-78]]){let h=Bt(o,l,c,{state:"combat",zone:"reinf"});h.lastSeen=o.player.pos.clone(),h.lastSeenT=o.time,h.awareness=1}}}]}}},{id:"ironharbor",enemyWeapon:"m4a1",name:"OPERATION IRON HARBOR",location:"Port of Kaliningrad Sector 9",time:"19:42 Local",reverb:"urban",briefing:"Intel from the Jackal's laptop points to a weapons smuggling ring operating out of a dockyard. Two arms caches are hidden among the containers. Plant charges on both, get clear of the blast and fight your way to the extraction boat at the pier.",objectivesPreview:["Plant C4 on cache Alpha","Plant C4 on cache Bravo","Get clear before detonation","Fight to the extraction boat"],intro:["OPERATION IRON HARBOR","Port Sector 9, Baltic Coast",'Sgt. "Ghost" Reyes \u2014 1st Vanguard Battalion',"Day 6, 19:42"],ambience:[["waves",.35],["wind",.2]],async build(r,e){Jr(r,{hdri:"belfast_sunset_puresky",sunDir:Se(-1,.16,-.35),sunIntensity:3.6,sunColor:16756848,envIntensity:.9,fogColor:10520696,fogDensity:.0065,exposure:1,skyTop:3886968,skyHorizon:15769712,skyGround:4208175,clouds:.55,cloudColor:16765104,skyBright:1.2,hemi:.2,skyColor:16762010,groundColor:4208175,shadowExtent:60,grade:{tint:16773344,saturation:1.05,contrast:1.1}}),r.envExposure=1,r.level.tint=7304552;let t=await To(),i=r.world;i.bounds={minX:-72,maxX:72,minZ:-78,maxZ:70};let n=await wo(r,{tex:"asphalt_02",texSize:6,flat:85,hills:18,mat:"concrete",seed:11});{let x=n.geometry.attributes.position;for(let M=0;M<x.count;M++)x.getZ(M)<-56&&x.setY(M,-8);x.needsUpdate=!0,n.geometry.computeVertexNormals()}e(.4,"Flooding the harbour");let s=await Rn("tex/waternormals.jpg");s.wrapS=s.wrapT=Qt;let a=new Wc(new ki(1200,700),{textureWidth:512,textureHeight:512,waterNormals:s,sunDirection:r.sunDir.clone(),sunColor:16756848,waterColor:928307,distortionScale:2.6,fog:!0});a.rotation.x=-Math.PI/2,a.position.set(0,-1.6,-405),r.scene.add(a),r.water=a,i.box(0,-6,-57,400,6,2,t.concrete,{texSize:3,collide:!1}),i.addCollider(Se(-200,-6,-59),Se(36.5,3,-56.5),"concrete",{noRay:!0}),i.addCollider(Se(43.5,-6,-59),Se(200,3,-56.5),"concrete",{noRay:!0}),i.box(40,-.25,-67,7,.25,22,t.wood,{mat:"wood",texSize:2});for(let x=-58;x>-78;x-=4)for(let M of[36.8,43.2])i.box(M,-4,x,.4,3.8,.4,t.wood,{collide:!1});i.addCollider(Se(35.5,-6,-78.5),Se(36.6,3,-56),"wood",{noRay:!0}),i.addCollider(Se(43.4,-6,-78.5),Se(44.5,3,-56),"wood",{noRay:!0});let o=new tt,l=new qe({color:2832947,roughness:.6,metalness:.3}),c=new Te(new Rt(3.4,1.4,9),l);c.position.y=-.9,o.add(c);let h=new Te(new Bs(1.7,3,4),l);h.rotation.set(-Math.PI/2,Math.PI/4,0),h.scale.set(1,1,.45),h.position.set(0,-.9,-5.8),o.add(h);let d=new Te(new Rt(2.4,1.6,2.6),new qe({color:12107189,roughness:.5}));d.position.set(0,.6,1.2),o.add(d),o.position.set(47,0,-70),o.traverse(x=>{x.isMesh&&(x.castShadow=x.receiveShadow=!0)}),r.scene.add(o),r.boat=o,e(.5,"Stacking containers");let u=[9187108,2772602,3894074,10119971,7040624,8009040,3041899],f=await Promise.all(u.map(x=>cm(x))),m=(x,M,R=!1,A=1,I)=>{for(let L=0;L<A;L++){let U=f[I??Math.random()*f.length|0],P=R?2.44:6.06,O=R?6.06:2.44;i.box(x,L*2.6,M,P,2.59,O,U,{mat:"metal",texSize:2.6})}},b=[];for(let x=0;x<5;x++)for(let M=0;M<6;M++){let R=-44+M*13+x%2*3,A=-38+x*14;if(x===2&&M===1)continue;let I=Math.random()<.45?2:1;m(R,A,!1,I),Math.random()<.7&&m(R,A+2.5,!1,Math.random()<.4?2:1),Math.random()<.3&&m(R+7.5,A+1,!0,1)}vs(i,50,30,24,16,7,t.corr,{roofMat:t.rust,floorMat:t.floor,doors:{w:[.5],s:[.3,.7],n:[.5]},windows:{},parapet:0,thick:.3}),i.box(50,0,30,24,.01,.01,t.corr,{collide:!1}),vs(i,52,-22,20,14,6.5,t.corr,{roofMat:t.rust,floorMat:t.floor,doors:{w:[.4],n:[.6]},windows:{},parapet:0}),vs(i,-52,40,14,10,4,t.brick,{roofMat:t.concrete,floorMat:t.floor,doors:{e:[.5]},windows:{s:[.3,.7],n:[.5]}});for(let x of[-22,8]){for(let[M,R]of[[-6,-1],[6,-1],[-6,-10],[6,-10]])i.box(x+M,0,-50+R,1,26,1,t.yellow,{mat:"metal"});i.box(x,26,-55,14,2,1.4,t.yellow,{collide:!1}),i.box(x,26,-45,14,2,1.4,t.yellow,{collide:!1}),i.box(x,28,-50,3,2,60,t.yellow,{collide:!1}),i.box(x,24,-62,2.5,3,3,t.darkMetal,{collide:!1})}for(let[x,M]of[[-60,20],[-30,52],[10,52],[30,-48],[62,5],[-60,-45]]){await i.prop("street_lamp_01",x,M,{rotY:Math.random()*6});let R=new ui(16761466,25,22,2);R.position.set(x,3.6,M),r.scene.add(R)}let g=Se(52,0,33),p=Se(-31,0,-9);await Promise.all([i.prop("old_military_crate",g.x,g.z,{mat:"wood"}),i.prop("old_military_crate",g.x,g.z,{y:.3,rotY:.2,mat:"wood"}),i.prop("ammo_box",g.x+1.2,g.z),i.prop("ammo_box",g.x+1.5,g.z+.4,{rotY:1}),i.prop("old_military_crate",p.x,p.z,{mat:"wood",rotY:1.57}),i.prop("old_military_crate",p.x,p.z,{y:.3,rotY:1.4,mat:"wood"}),i.prop("ammo_box",p.x+1,p.z-1.2),i.prop("propane_tank",20,10,{explosive:!0}),i.prop("propane_tank",-10,-30,{explosive:!0}),i.prop("metal_jerrycan_green",44,22,{explosive:!0}),i.prop("Barrel_01",46,24),i.prop("barrel_03",47,24.6),i.prop("portable_generator",58,-18),i.prop("utility_box_01",-40,55),i.prop("covered_car",-45,58,{rotY:1.6}),i.prop("concrete_road_barrier",-58,50,{rotY:.4}),i.prop("concrete_road_barrier",-50,48,{rotY:-.3}),i.prop("wooden_crate_01",25,45),i.prop("cardboard_box_01",26,44)]),Kt(i,t,38,30,3,!1),Kt(i,t,-24,-14,3),m(-54,50,!1,1,4),m(-62,44,!0,2,1),m(-46,56,!0,1,3),er(r,t,-56,58,.8,!0),er(r,t,-40,50,-.3),Kt(i,t,-50,62,3.5),Kt(i,t,-58,52,3),Kt(i,t,-36,44,3.5,!1),await Promise.all([i.prop("wooden_crate_01",-52,46,{mat:"wood"}),i.prop("wooden_crate_01",-51.3,46.6,{rotY:.5,mat:"wood"}),i.prop("old_military_crate",-44,46,{mat:"wood",rotY:1.2})]),r._supplies=[Se(-58,0,58),Se(30,0,40),Se(-5,0,-25),Se(50,0,-12)],e(.7,"Deploying hostiles");let v="yard",_=(x,M,R={})=>Bt(r,x,M,{zone:v,...R});_(-40,45,{patrol:[[-40,45],[-10,45],[-10,30]]}),_(-15,52,{yaw:2.5}),_(0,30,{yaw:1}),_(-30,28,{patrol:[[-30,28],[-30,0]]}),_(10,15,{yaw:-1}),_(-8,3,{patrol:[[-8,3],[20,3]]}),_(-31,-5,{yaw:.3}),_(-26,-11,{yaw:2}),_(-36,-12,{yaw:-2}),_(46,26,{yaw:1.4}),_(56,36,{yaw:2.2}),_(52,22,{}),_(40,40,{patrol:[[40,40],[40,12]]}),_(50,-22,{yaw:1}),_(30,-30,{patrol:[[30,-30],[0,-40],[-30,-40]]}),_(15,-45,{yaw:3}),_(-45,-30,{yaw:1.2});let y=0,w=!1,E=yu(r,Se(40,.1,-74),[.95,.3,.25]);return{spawn:Se(-62,0,62),spawnYaw:-Math.PI/4,exposure:1,far:1400,update:(x,M)=>{a.material.uniforms.time.value+=M*.6,x.objIdx>=3&&E(M),o.position.y=Math.sin(x.time*.8)*.12,o.rotation.z=Math.sin(x.time*.6)*.03},objectives:[{type:"interact",text:"Plant C4 on weapons cache ALPHA (warehouse)",pos:g,radius:2,label:"Hold <b>[F]</b> to plant C4",time:3,onDone:()=>{y++,r.hud.toast("CHARGE PLANTED",2)}},{type:"interact",text:"Plant C4 on weapons cache BRAVO (container yard)",pos:p,radius:2,label:"Hold <b>[F]</b> to plant C4",time:3,onDone:()=>{y++,r.hud.toast("CHARGE PLANTED",2)}},{type:"custom",text:"Get clear! Detonation in 15 seconds",waypoint:!1,check:(x,M,R)=>{let A=Math.max(0,15-R.t);return x.hud.setObjectiveCount(`${Math.ceil(A)}s`),Math.floor(R.t)!==R._b&&A>0&&(R._b=Math.floor(R.t),ye.play("beep",{vol:.25})),A<=0&&!w&&(w=!0,x.explode(g.clone().add(Se(0,.5,0)),"frag",!0,2.2),setTimeout(()=>x.explode(p.clone().add(Se(0,.5,0)),"frag",!0,2.2),600)),w}},{type:"reach",text:"Fight your way to the extraction boat",pos:Se(40,0,-73),radius:4,onStart:x=>{x.hud.toast("HOSTILE QRF INBOUND",3);let M=[[-65,60],[-60,-40],[65,60],[0,65],[65,-50],[20,-50],[-20,-50]],R=0,A=()=>{if(!(x.completed||x.failed))for(let I=0;I<3;I++){let L=M[R++%M.length],U=Bt(x,L[0]+Math.random()*3,L[1],{state:"combat",zone:"qrf"});U.lastSeen=x.player.pos.clone(),U.lastSeenT=x.time,U.awareness=1}};A(),setTimeout(A,12e3),setTimeout(A,25e3)}}]}}},{id:"midnight",enemyWeapon:"mp5",name:"OPERATION MIDNIGHT",location:"Old Town, Zagoria",time:"02:15 Local",night:!0,reverb:"urban",briefing:"A captured Vanguard intelligence officer, Lt. Hayes, is being held in a safehouse at the north end of Old Town. Move up the street under cover of darkness, clear the safehouse and free the hostage. Do NOT shoot the hostage. Escort Hayes back to the extraction vehicle. Night vision (N) and flashlight (T) are available.",objectivesPreview:["Locate the safehouse","Clear the safehouse","Free Lt. Hayes","Escort Hayes to the vehicle"],intro:["OPERATION MIDNIGHT","Old Town, Zagoria",'Sgt. "Ghost" Reyes \u2014 1st Vanguard Battalion',"Day 9, 02:15"],hint:"Night vision: <b>N</b> &nbsp; Flashlight: <b>T</b> &nbsp; Lights give away your position.",ambience:[["crickets",.25],["wind",.15]],async build(r,e){Jr(r,{hdri:"qwantani_night_puresky",night:!0,sunDir:Se(.3,.7,-.6),sunIntensity:.45,sunColor:10335487,envIntensity:.45,vmEnv:1.6,fogColor:724760,fogDensity:.02,exposure:1.35,hemi:.06,skyColor:3885680,groundColor:1118481,shadowExtent:45,grade:{tint:14213887,saturation:.8,contrast:1.12,vignette:.5}}),r.envExposure=1.35,r.level.tint=5593955;let t=await To(),i=r.world;i.bounds={minX:-40,maxX:40,minZ:-84,maxZ:40},await wo(r,{tex:"asphalt_02",texSize:5,flat:70,hills:15,mat:"concrete",seed:5}),e(.4,"Building Old Town"),i.box(-9,0,-22,6,.15,124,t.floor,{texSize:2,cast:!1}),i.box(9,0,-22,6,.15,124,t.floor,{texSize:2,cast:!1});let n=[[-50,-32,12],[-26,-12,10],[-10,8,12],[12,32,10]],s=0;for(let u of[-1,1])for(let[f,m]of[[-80,-58],[-56,-36],[-24,-6],[-2,18],[22,38]]){let b=u*22,g=(f+m)/2,p=m-f,v=6.5+s++*37%3,_=s%3===0?t.plaster:t.brick;vs(i,b,g,18,p,v,_,{roofMat:t.concrete,floorMat:t.floor,doors:{[u<0?"e":"w"]:[.5]},windows:{[u<0?"e":"w"]:[.2,.8]},parapet:.8});for(let y=0;y<3;y++){let w=f+p*(.2+y*.3),E=Math.random()<.35,x=new Te(new ki(1.1,1.3),new qe({color:1118481,emissive:E?16756838:658706,emissiveIntensity:E?2.2:1,roughness:.2,metalness:.5}));x.position.set(b-u*9.02*1,4.5,w),x.rotation.y=u<0?Math.PI/2:-Math.PI/2,r.scene.add(x)}}i.wall(-40,-84,40,-84,4,.5,t.brick),i.wall(-40,40,40,40,4,.5,t.brick),e(.55,"Fortifying the safehouse"),vs(i,0,-72,16,12,4,t.plaster,{roofMat:t.concrete,floorMat:t.wood,doors:{s:[.5]},windows:{s:[.15,.85],e:[.5],w:[.5]}}),Xi(i,-8,-72,8,-72,4,.25,t.plaster,[{at:.25,w:1.3,y0:0,y1:2.3},{at:.75,w:1.3,y0:0,y1:2.3}]),Xi(i,0,-78,0,-72,4,.25,t.plaster,[]),await Promise.all([i.prop("covered_car",-4,20,{rotY:.05}),i.prop("covered_car",4.5,-12,{rotY:Math.PI+.1}),i.prop("covered_car",-4.2,-40,{rotY:-.1}),i.prop("covered_car",4,-55,{rotY:3}),i.prop("concrete_road_barrier",-2,-60,{rotY:.2}),i.prop("concrete_road_barrier",2.5,-61,{rotY:-.3}),i.prop("metal_jerrycan_green",3,-58,{explosive:!0}),i.prop("propane_tank",-7,-28,{explosive:!0}),i.prop("Barrel_01",8,4),i.prop("barrel_03",-8,-18),i.prop("cardboard_box_01",7,-32),i.prop("wooden_crate_01",-7.5,-50),i.prop("utility_box_01",7.5,10),i.prop("old_tyre",-6,2,{y:.3,rotY:1.2}),i.prop("medical_box",3,-75),i.prop("old_military_crate",-4,-76,{mat:"wood"})]);for(let[u,f,m]of[[3.5,8,.2],[-3.8,-26,2.9]]){let b=new tt,g=t.rust,p=new Te(new Rt(1.8,.7,4.3),g);p.position.y=.6,b.add(p);let v=new Te(new Rt(1.6,.6,2.2),g);v.position.set(0,1.2,-.2),b.add(v),b.position.set(u,0,f),b.rotation.y=m,b.traverse(y=>{y.isMesh&&(y.castShadow=y.receiveShadow=!0)}),r.scene.add(b),b.updateMatrixWorld(!0);let _=new $t().setFromObject(b);i.addCollider(_.min,_.max,"metal")}await Promise.all([i.prop("concrete_road_barrier",-2.5,26,{rotY:.15}),i.prop("concrete_road_barrier",3,22,{rotY:-.2}),i.prop("concrete_road_barrier",-3,4,{rotY:.3}),i.prop("concrete_road_barrier",2.5,-22,{rotY:-.1}),i.prop("wooden_crate_01",4,27,{mat:"wood"})]),Kt(i,t,0,-3,3),Kt(i,t,-1,-44,3.5),er(r,t,-3.5,14,.1),r._supplies=[Se(7.5,0,28),Se(-7.5,0,-34),Se(7.5,0,-62)];for(let[u,f]of[[-6.5,30],[6.5,10],[-6.5,-10],[6.5,-34],[-6.5,-54]]){await i.prop("street_lamp_01",u,f,{rotY:u<0?-Math.PI/2:Math.PI/2});let m=new ui(16757611,30,20,2);m.position.set(u+(u<0?1.3:-1.3),3.7,f),r.scene.add(m)}{let u=new ui(16751964,6,10,2);u.position.set(0,3,-75),r.scene.add(u)}let a=Se(-5.5,0,-64);await i.prop("barrel_03",a.x,a.z);let o=new ui(16742954,12,12,2);o.position.set(a.x,1.6,a.z),r.scene.add(o),e(.7,"Deploying hostiles");let l=(u,f,m={})=>Bt(r,u,f,{zone:"street",...m});l(-4,0,{patrol:[[-4,0],[-4,-20]]}),l(5,-16,{yaw:0}),l(-8,-30,{yaw:.3}),l(8,-40,{patrol:[[8,-40],[8,-20]]}),l(-12,-47,{yaw:-.5}),l(12,-46,{yaw:.5}),l(0,-50,{yaw:0}),l(-2,-62,{yaw:0,zone:"safehouse"}),l(3,-63,{yaw:.2,zone:"safehouse"}),l(-5,-69,{zone:"safehouse",yaw:.4}),l(5,-68,{zone:"safehouse",yaw:-.5}),l(-4,-75,{zone:"safehouse",hold:!0}),l(6,-76,{zone:"safehouse",hold:!0});let c=Bt(r,4,-76.5,{hostage:!0,tint:9076848,yaw:Math.PI});r.hostage=c;let h=Se(0,0,34),d=yu(r,h);return{spawn:Se(0,0,32),spawnYaw:0,exposure:1.35,deathText:"You were killed in action.",update:(u,f)=>{o.intensity=10+Math.sin(u.time*13)*2+Math.sin(u.time*7.3)*2,Math.random()<f*20&&u.effects.add.spawn(a.clone().add(Se((Math.random()-.5)*.4,1,(Math.random()-.5)*.4)),Se(0,1.5,0),{life:.5,size:.4,grow:-.5,color:[1,.5,.15],alpha:.8}),u.objIdx>=3&&d(f)},objectives:[{type:"reach",text:"Move up the street to the safehouse",pos:Se(0,0,-56),radius:5},{type:"kill",text:"Clear the safehouse",filter:u=>u.zone==="safehouse"},{type:"interact",text:"Free Lt. Hayes",pos:Se(4,0,-76.5),radius:1.6,label:"Hold <b>[F]</b> to cut Hayes loose",time:2.5,onDone:u=>{c.follow=!0,u.hud.toast(`HAYES: "About time, Ghost. Let's move."`,3)}},{type:"reach",text:"Escort Lt. Hayes to the extraction vehicle",pos:h,radius:5,cond:u=>c.pos.distanceTo(h)<9,onStart:u=>{u.hud.toast("ENEMY REINFORCEMENTS",3);for(let[f,m]of[[-30,-40],[30,-38],[-30,-8],[30,0],[-30,20]]){let b=Bt(u,f,m,{state:"alert",zone:"reinf"});b.investigate=Se(0,0,-30)}}}]}}},{id:"laststand",noSave:!0,enemyWeapon:"ak47",name:"LAST STAND",location:"Al-Qadir Province",time:"18:50 Local",reverb:"outdoor",briefing:"Your extraction helicopter went down. Hold the village until the QRF arrives. Survive five waves of increasingly aggressive hostiles. Resupply ammunition at the crate in the courtyard.",objectivesPreview:["Survive 5 waves","Resupply at the ammo crate"],intro:["LAST STAND","Al-Qadir Province",'Sgt. "Ghost" Reyes \u2014 1st Vanguard Battalion',"Day 4, 18:50"],hint:"Hold <b>[E]</b> at the glowing supply crate in the courtyard to resupply. Fallen enemies drop weapons and ammo.",ambience:[["wind",.35]],async build(r,e){Jr(r,{hdri:"belfast_sunset_puresky",sunDir:Se(.9,.14,-.4),sunIntensity:3.4,sunColor:16751189,envIntensity:.8,fogColor:10780520,fogDensity:.006,exposure:1.05,skyTop:3425902,skyHorizon:15899232,skyGround:5914672,clouds:.4,cloudColor:16763040,skyBright:1.2,hemi:.2,skyColor:16757898,groundColor:5914672,grade:{tint:16772829,saturation:1.05,contrast:1.1}}),r.envExposure=1.05,r.level.tint=12101253;let t=await To();e(.4,"Building village"),await hm(r,t);let i=Se(-1,0,4),n={n:0,active:!1,spawned:0,total:5},s=[[-60,55],[60,55],[-60,-70],[60,-70],[0,66],[0,-80],[-62,0],[62,0]],a=()=>{n.n++,n.active=!0;let c=3+n.n*2;r.hud.toast(`WAVE ${n.n} / ${n.total}`,3);for(let h=0;h<c;h++)setTimeout(()=>{if(r.completed||r.failed)return;let d=s[Math.random()*s.length|0],u=Bt(r,d[0]+(Math.random()-.5)*6,d[1]+(Math.random()-.5)*6,{state:"combat",zone:"wave"+n.n,hp:r.diff.hp*(1+n.n*.08)});u.lastSeen=r.player.pos.clone(),u.lastSeenT=r.time,u.awareness=1,u.speedMul=1+n.n*.06},h*900);n.pending=c},o=()=>{};r.pickups.add("supply",i);let l=0;return{spawn:Se(0,0,8),spawnYaw:0,exposure:1.05,objectives:[{type:"custom",text:"Survive the assault",waypointPos:null,waypoint:!1,onStart:c=>{o(),setTimeout(a,6e3),l=0},check:(c,h,d)=>{let u=c.enemies.list.filter(f=>f.alive&&f.zone&&f.zone.startsWith("wave")).length;return n.active?(c.hud.setObjectiveCount(`Wave ${n.n}/${n.total} \u2014 ${u+Math.max(0,(n.pending||0)-c.enemies.list.filter(m=>m.zone==="wave"+n.n).length)} hostiles`),c.enemies.list.filter(m=>m.zone==="wave"+n.n).length>=n.pending&&u===0&&(n.active=!1,l=12,n.n<n.total&&c.hud.toast(`WAVE ${n.n} CLEARED \u2014 RESUPPLY`,3))):n.n>0&&n.n<n.total&&(l-=h,c.hud.setObjectiveCount(`Next wave in ${Math.ceil(l)}s`),l<=0&&a()),n.n>=n.total&&!n.active}}]}}}];var e_=r=>document.querySelector(r),ys={get(r,e){try{let t=localStorage.getItem("iv_"+r);return t?JSON.parse(t):e}catch{return e}},set(r,e){try{localStorage.setItem("iv_"+r,JSON.stringify(e))}catch{}}},t_={quality:"high",renderScale:1,sensitivity:1,fov:78,invertY:!1,master:.8,music:.5,showFps:!1,autoReload:!0,aimToggle:!1,difficulty:"regular"},Su={primary:"m4a1",secondary:"m9",lethal:"frag",tactical:"flash",perks:["stopping","sleight"],att:{m4a1:{optic:"reddot",muzzle:"none",under:"grip",mag:"std"},ak47:{optic:"iron",muzzle:"none",under:"none",mag:"std"},mp5:{optic:"holo",muzzle:"suppressor",under:"none",mag:"std"},m870:{optic:"iron",muzzle:"none",under:"none",mag:"std"},m249:{optic:"iron",muzzle:"none",under:"none",mag:"std"},bolt762:{muzzle:"none",mag:"std"},m9:{optic:"iron",muzzle:"none",under:"none",mag:"std"},d50:{optic:"iron",muzzle:"none",under:"none",mag:"std"}}};function dm(r){let e=Math.floor(r/60),t=Math.floor(r%60);return`${e}:${String(t).padStart(2,"0")}`}var jc=class{constructor(){this.root=e_("#menu"),this.settings={...t_,...ys.get("settings",{})};let e=ys.get("loadout",null);this.loadout=e?{...Su,...e,att:{...Su.att,...e.att||{}}}:structuredClone(Su),this.progress=ys.get("progress",{}),this.selectedLevel=nn[0].id,this.root.addEventListener("mouseover",t=>{t.target.closest("button,.card,.opt")&&ye.play("uiHover",{vol:.15,reverb:0})}),this.root.addEventListener("click",t=>{t.target.closest("button,.card,.opt")&&ye.play("ui",{vol:.3,reverb:0})})}readSave(){return ys.get("save",null)}writeSave(e){ys.set("save",e)}clearSave(){try{localStorage.removeItem("iv_save")}catch{}}save(){ys.set("settings",this.settings),ys.set("loadout",this.loadout),ys.set("progress",this.progress)}show(e){this.root.style.display=e?"flex":"none"}screen(e,t=""){this.show(!0),this.root.className=t,this.root.innerHTML=`<div class="bg"></div><div class="screen">${e}</div>`}main(){ye.startMusic("menu");let e=this.readSave();this.screen(`
      <div class="title"><div class="t1">IRON VANGUARD</div><div class="t2">MODERN OPERATIONS</div></div>
      <div class="mainnav">
        ${e?`<button data-a="cont" class="primary">CONTINUE<small>${e.levelName} \u2014 ${e.fresh?"mission start":e.objText}</small></button>`:""}
        <button data-a="campaign" class="${e?"":"primary"}">CAMPAIGN</button>
        <button data-a="loadoutMain">LOADOUT</button>
        <button data-a="settingsMain">SETTINGS</button>
        <button data-a="controlsMain">CONTROLS</button>
      </div>
      <div class="foot">Built with three.js \u2022 CC0 art from Poly Haven \u2022 Fully synthesized audio</div>`,"main"),this.root.querySelectorAll("[data-a]").forEach(t=>t.onclick=()=>t.dataset.a==="cont"?this.onContinue(e):this[t.dataset.a]())}campaign(){let e=nn.find(n=>n.id===this.selectedLevel),t=nn.map((n,s)=>{let a=this.progress[n.id];return`<div class="card ${n.id===e.id?"sel":""}" data-l="${n.id}"><div class="num">${String(s).padStart(2,"0")}</div><div><div class="cn">${n.name}</div><div class="cs">${n.location}</div></div>${a?`<div class="done">\u2714 ${dm(a.best)}</div>`:""}</div>`}).join(""),i=Object.entries(So).map(([n,s])=>`<div class="opt ${this.settings.difficulty===n?"sel":""}" data-d="${n}">${s.name}</div>`).join("");this.screen(`
      <div class="hdr"><button class="back">\u2039 BACK</button><h1>CAMPAIGN</h1></div>
      <div class="cols">
        <div class="list">${t}</div>
        <div class="brief">
          <div class="op">${e.name}</div>
          <div class="loc">${e.location} \u2014 ${e.time}</div>
          <p>${e.briefing}</p>
          <ul class="objs">${e.objectivesPreview.map(n=>`<li>${n}</li>`).join("")}</ul>
          <div class="lbl">DIFFICULTY</div><div class="opts">${i}</div>
          <div class="lo">LOADOUT: <b>${qi[this.loadout.primary].name}</b> + <b>${qi[this.loadout.secondary].name}</b> <button class="small" data-a="loadout">EDIT</button></div>
          <button class="primary deploy">DEPLOY \u203A</button>
        </div>
      </div>`),this.root.querySelector(".back").onclick=()=>this.main(),this.root.querySelectorAll(".card").forEach(n=>n.onclick=()=>{this.selectedLevel=n.dataset.l,this.campaign()}),this.root.querySelectorAll("[data-d]").forEach(n=>n.onclick=()=>{this.settings.difficulty=n.dataset.d,this.save(),this.campaign()}),this.root.querySelector("[data-a=loadout]").onclick=()=>this.loadoutScreen(()=>this.campaign()),this.root.querySelector(".deploy").onclick=()=>this.onDeploy(this.selectedLevel)}loadoutMain(){this.loadoutScreen(()=>this.main())}loadoutScreen(e){let t=this.loadout,i=c=>{let h=Mo(c,t.att[c]||{},t.perks),d=Math.min(1,h.damage[0]*(h.pellets||1)/130),u=Math.min(1,h.rpm/900),f=Math.min(1,h.range[1]/120),m=Math.min(1,(h.move-.8)/.3),b=Math.max(.05,1-h.recoil[0]/4.5);return[["DAMAGE",d],["FIRE RATE",u],["RANGE",f],["MOBILITY",m],["CONTROL",b]].map(([g,p])=>`<div class="stat"><span>${g}</span><div><i style="width:${Math.round(p*100)}%"></i></div></div>`).join("")+`<div class="stat"><span>MAGAZINE</span><b>${h.mag}</b></div>`},n=c=>Object.entries(qi).filter(([,h])=>h.slot===c).map(([h,d])=>`<div class="opt w ${t[c]===h?"sel":""}" data-slot="${c}" data-w="${h}"><b>${d.name}</b><small>${d.type}</small></div>`).join(""),s=c=>{let h=em(c),d=t.att[c]||(t.att[c]={});return Object.entries(h).filter(([,u])=>u.length).map(([u,f])=>`<div class="attrow"><span>${{optic:"OPTIC",muzzle:"MUZZLE",under:"UNDERBARREL",mag:"MAGAZINE"}[u]}</span>${f.map(m=>`<div class="opt a ${(d[u]||f[0])===m?"sel":""}" data-id="${c}" data-cat="${u}" data-att="${m}">${hu[u][m].name}</div>`).join("")}</div>`).join("")},a=(c,h)=>Object.entries(c).map(([d,u])=>`<div class="opt g ${t[h]===d?"sel":""}" data-key="${h}" data-v="${d}">${u.name}</div>`).join(""),o=Object.entries($p).map(([c,h])=>`<div class="opt p ${t.perks.includes(c)?"sel":""}" data-perk="${c}"><b>${h.name}</b><small>${h.desc}</small></div>`).join("");this.screen(`
      <div class="hdr"><button class="back">\u2039 BACK</button><h1>LOADOUT</h1></div>
      <div class="lgrid">
        <section><h2>PRIMARY</h2><div class="wl">${n("primary")}</div><div class="desc">${qi[t.primary].desc}</div><div class="stats">${i(t.primary)}</div><h3>ATTACHMENTS</h3>${s(t.primary)}</section>
        <section><h2>SECONDARY</h2><div class="wl">${n("secondary")}</div><div class="desc">${qi[t.secondary].desc}</div><div class="stats">${i(t.secondary)}</div><h3>ATTACHMENTS</h3>${s(t.secondary)}</section>
        <section><h2>EQUIPMENT</h2><h3>LETHAL</h3><div class="opts">${a(Zp,"lethal")}</div><h3>TACTICAL</h3><div class="opts">${a(Qp,"tactical")}</div><h2 style="margin-top:22px">PERKS <small>(choose 2)</small></h2><div class="perks">${o}</div></section>
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
      </div>`,"settingsS"),this.root.querySelector(".back").onclick=()=>{this.save(),this.onSettings?.(),e()},this.root.querySelectorAll("[data-q]").forEach(a=>a.onclick=()=>{t.quality=a.dataset.q,this.save(),this.onSettings?.(),this.settingsScreen(e)}),this.root.querySelectorAll("[data-t]").forEach(a=>a.onclick=()=>{t[a.dataset.t]=!t[a.dataset.t],this.save(),this.onSettings?.(),this.settingsScreen(e)}),this.root.querySelectorAll("input[type=range]").forEach(a=>a.oninput=()=>{t[a.dataset.k]=parseFloat(a.value),a.nextElementSibling.textContent=a.dataset.k==="renderScale"?Math.round(a.value*100)+"%":["master","music"].includes(a.dataset.k)?Math.round(a.value*100):a.dataset.k==="sensitivity"?(+a.value).toFixed(2):a.value,this.save(),this.onSettings?.(!0)})}settingsMain(){this.settingsScreen(()=>this.main())}controlsMain(){this.controls(()=>this.main())}controls(e){let t=this.settings.binds={...xo(),...this.settings.binds||{}},i=Ad.map(([s,a])=>`<div class="crow"><span>${a}</span>${[0,1].map(o=>`<div class="bind" data-a="${s}" data-i="${o}">${Js(t[s][o])}</div>`).join("")}</div>`).join("");this.screen(`<div class="hdr"><button class="back">\u2039 BACK</button><h1>CONTROLS</h1><button class="small reset">RESET TO DEFAULTS</button></div>
      <p class="note">Click a box, then press a key or mouse button. Press <b>Esc</b> to cancel, <b>Backspace</b> to clear. Mouse wheel always swaps weapons; Esc always pauses.</p>
      <div class="controls">${i}</div>`);let n=()=>{this.save(),this.onSettings?.(),typeof e=="function"?e():this.main()};this.root.querySelector(".back").onclick=n,this.root.querySelector(".reset").onclick=()=>{this.settings.binds=xo(),this.save(),this.onSettings?.(),this.controls(e)},this.root.querySelectorAll(".bind").forEach(s=>s.onclick=a=>{a.stopPropagation(),this.root.querySelectorAll(".bind.wait").forEach(l=>{l.classList.remove("wait"),l.textContent=Js(t[l.dataset.a][+l.dataset.i])}),s.classList.add("wait"),s.textContent="press a key\u2026";let o=this.input;setTimeout(()=>{o.capture=l=>{if(o.capture=null,l!=="Escape"){let c=s.dataset.a,h=+s.dataset.i;if(l==="Backspace")t[c][h]="";else{for(let d of Object.keys(t))t[d]=t[d].map(u=>u===l?"":u);t[c][h]=l}this.save(),this.onSettings?.()}this.controls(e)}},50)})}loading(e){let t=["Crouching makes you harder to spot and steadies your aim.","Enemies show up on your radar when they fire at you.","Headshots deal double damage or more.","Flashbangs stun everyone who looks at them \u2014 including you.","Suppressors keep you off the radar but reduce range.","Explosive tanks and jerrycans can be shot to detonate them.","Hold Shift while scoped with the sniper rifle to steady your breath.","Sprint then press C to slide into cover."];this.screen(`<div class="loading">
      <div class="op">${e.name}</div><div class="loc">${e.location} \u2014 ${e.time}</div>
      <p class="briefing">${e.briefing}</p>
      <div class="pbar"><div></div></div><div class="pstat">Loading\u2026</div>
      <div class="tip">TIP: ${t[Math.random()*t.length|0]}</div></div>`,"loadingS")}progressBar(e,t){let i=this.root.querySelector(".pbar div");i&&(i.style.width=e*100+"%");let n=this.root.querySelector(".pstat");n&&(n.textContent=t)}readyToStart(e){let t=this.root.querySelector(".pstat");t&&(t.innerHTML='<button class="primary go">CLICK TO BEGIN</button>');let i=this.root.querySelector(".go");i.onclick=e,i.focus()}pause(e){this.screen(`<div class="pause"><h1>PAUSED</h1>
      <button class="primary" data-a="resume">RESUME</button>
      ${e.canSave?'<button data-a="save">SAVE GAME</button>':""}
      ${e.hasSave?'<button data-a="load">LOAD LAST SAVE</button>':""}
      <button data-a="restart">RESTART MISSION</button>
      <button data-a="settings">SETTINGS</button>
      <button data-a="controls">CONTROLS</button>
      <button data-a="quit">QUIT TO MENU</button></div>`,"pauseS"),this.root.querySelectorAll("[data-a]").forEach(t=>t.onclick=()=>{let i=t.dataset.a;i==="settings"?this.settingsScreen(()=>this.pause(e)):i==="controls"?this.controls(()=>this.pause(e)):i==="save"?(e.save(),this.pause({...e,hasSave:!0})):e[i]()})}results(e,t,i){if(e){let a=this.progress[t.level.id];(!a||t.time<a.best)&&(this.progress[t.level.id]={best:t.time,diff:t.difficulty}),this.save()}let n=nn.findIndex(a=>a.id===t.level.id),s=nn[n+1];this.screen(`<div class="results ${e?"win":"lose"}">
      <h1>${e?"MISSION COMPLETE":"MISSION FAILED"}</h1>
      <div class="op">${t.level.name}</div>
      ${i?`<p class="reason">${i}</p>`:""}
      <div class="rs">
        <div><b>${dm(t.time)}</b><span>TIME</span></div>
        ${t.targets?`<div><b>${t.targets}</b><span>TARGETS</span></div>`:`<div><b>${t.kills}</b><span>KILLS</span></div>`}
        <div><b>${t.headshots}</b><span>HEADSHOTS</span></div>
        <div><b>${t.acc}%</b><span>ACCURACY</span></div>
        <div><b>${t.hits}/${t.shots}</b><span>HITS / SHOTS</span></div>
        <div><b>${t.difficulty}</b><span>DIFFICULTY</span></div>
      </div>
      <div class="btns">
        ${e&&s?'<button class="primary" data-a="next">NEXT MISSION \u203A</button>':""}
        ${!e&&this.readSave()?.levelId===t.level.id&&!this.readSave()?.fresh?'<button class="primary" data-a="checkpoint">LAST CHECKPOINT</button>':""}
        <button class="${e&&s||!e&&this.readSave()?.levelId===t.level.id&&!this.readSave()?.fresh?"":"primary"}" data-a="retry">${e?"REPLAY":"RESTART MISSION"}</button>
        <button data-a="menu">CAMPAIGN</button>
      </div></div>`,"resultsS"),this.root.querySelectorAll("[data-a]").forEach(a=>a.onclick=()=>{a.dataset.a==="next"?(this.selectedLevel=s.id,this.onDeploy(s.id)):a.dataset.a==="checkpoint"?this.onContinue(this.readSave()):a.dataset.a==="retry"?this.onDeploy(t.level.id):this.campaign()})}missionComplete(e){this.results(!0,e)}missionFailed(e,t){this.results(!1,t,e)}};function Ao(r,e){let t=document.createElement("canvas");t.width=t.height=r;let i=t.getContext("2d");e(i,r);let n=new Ji(t);return n.colorSpace=at,n}var i_=()=>Ao(64,(r,e)=>{let t=r.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,0.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=t,r.fillRect(0,0,e,e)}),n_=()=>Ao(128,(r,e)=>{for(let t=0;t<40;t++){let i=e/2+(Math.random()-.5)*e*.45,n=e/2+(Math.random()-.5)*e*.45,s=e*(.12+Math.random()*.2),a=r.createRadialGradient(i,n,0,i,n,s);a.addColorStop(0,"rgba(255,255,255,0.18)"),a.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=a,r.fillRect(0,0,e,e)}}),s_=()=>Ao(128,(r,e)=>{r.translate(e/2,e/2);let t=r.createRadialGradient(0,0,0,0,0,e/2);t.addColorStop(0,"rgba(255,250,220,1)"),t.addColorStop(.2,"rgba(255,200,90,0.9)"),t.addColorStop(.5,"rgba(255,120,30,0.3)"),t.addColorStop(1,"rgba(255,80,0,0)"),r.fillStyle=t;for(let i=0;i<7;i++)r.rotate(Math.PI*2/7+Math.random()*.3),r.beginPath(),r.moveTo(0,-e*.06),r.lineTo(e*.5*(.6+Math.random()*.4),0),r.lineTo(0,e*.06),r.fill();r.beginPath(),r.arc(0,0,e*.18,0,7),r.fill()}),r_=()=>Ao(64,(r,e)=>{let t=e/2,i=r.createRadialGradient(t,t,0,t,t,t);i.addColorStop(0,"rgba(10,8,6,1)"),i.addColorStop(.18,"rgba(15,12,10,0.95)"),i.addColorStop(.35,"rgba(40,35,30,0.55)"),i.addColorStop(1,"rgba(60,55,50,0)"),r.fillStyle=i,r.fillRect(0,0,e,e),r.strokeStyle="rgba(20,18,15,0.6)",r.lineWidth=1;for(let n=0;n<6;n++){let s=Math.random()*7;r.beginPath(),r.moveTo(t,t),r.lineTo(t+Math.cos(s)*t*(.5+Math.random()*.4),t+Math.sin(s)*t*(.5+Math.random()*.4)),r.stroke()}}),a_=()=>Ao(128,(r,e)=>{let t=e/2,i=r.createRadialGradient(t,t,0,t,t,t);i.addColorStop(0,"rgba(5,5,5,0.95)"),i.addColorStop(.5,"rgba(15,12,10,0.6)"),i.addColorStop(1,"rgba(20,20,20,0)"),r.fillStyle=i,r.fillRect(0,0,e,e)}),o_=`
attribute float aSize; attribute vec4 aColor; attribute float aRot; varying vec4 vColor; varying float vRot;
uniform float uScale;
void main(){ vColor=aColor; vRot=aRot; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=aSize*uScale/-mv.z; gl_Position=projectionMatrix*mv; }`,l_=`
uniform sampler2D map; varying vec4 vColor; varying float vRot;
void main(){ vec2 p=gl_PointCoord-0.5; float c=cos(vRot), s=sin(vRot); p=vec2(c*p.x-s*p.y, s*p.x+c*p.y)+0.5; vec4 t=texture2D(map,p); gl_FragColor=vec4(vColor.rgb*t.rgb, vColor.a*t.a); if(gl_FragColor.a<0.004) discard; }`,Eo=class{constructor(e,t,i,n){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.size=new Float32Array(t),this.rot=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grow=new Float32Array(t),this.drag=new Float32Array(t),this.grav=new Float32Array(t),this.a0=new Float32Array(t),this.spin=new Float32Array(t),this.base=new Float32Array(t*3),this.fade=new Uint8Array(t);let s=this.geo=new Ot;s.setAttribute("position",new Nt(this.pos,3).setUsage(Ys)),s.setAttribute("aColor",new Nt(this.col,4).setUsage(Ys)),s.setAttribute("aSize",new Nt(this.size,1).setUsage(Ys)),s.setAttribute("aRot",new Nt(this.rot,1).setUsage(Ys)),this.mat=new it({uniforms:{map:{value:i},uScale:{value:600}},vertexShader:o_,fragmentShader:l_,transparent:!0,depthWrite:!1,blending:n?Ti:ps}),this.points=new Us(s,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=n?11:10,e.add(this.points)}spawn(e,t,{life:i=1,size:n=.2,color:s=[1,1,1],alpha:a=1,grow:o=0,drag:l=0,grav:c=0,spin:h=0,fade:d=1}={}){let u=this.n<this.max?this.n++:Math.random()*this.max|0;this.pos.set([e.x,e.y,e.z],u*3),this.vel.set([t.x,t.y,t.z],u*3),this.col.set([s[0],s[1],s[2],a],u*4),this.base.set(s,u*3),this.size[u]=n,this.life[u]=i,this.maxLife[u]=i,this.grow[u]=o,this.drag[u]=l,this.grav[u]=c,this.a0[u]=a,this.rot[u]=Math.random()*6.28,this.spin[u]=h*(Math.random()-.5),this.fade[u]=d}update(e){let t=this.n;for(let i=0;i<t;i++){if(this.life[i]-=e,this.life[i]<=0){t--;let a=(o,l)=>{for(let c=0;c<l;c++)o[i*l+c]=o[t*l+c]};a(this.pos,3),a(this.vel,3),a(this.col,4),a(this.base,3);for(let o of[this.size,this.life,this.maxLife,this.grow,this.drag,this.grav,this.a0,this.rot,this.spin,this.fade])o[i]=o[t];i--;continue}let n=Math.max(0,1-this.drag[i]*e);this.vel[i*3]*=n,this.vel[i*3+1]=this.vel[i*3+1]*n-this.grav[i]*e,this.vel[i*3+2]*=n,this.pos[i*3]+=this.vel[i*3]*e,this.pos[i*3+1]+=this.vel[i*3+1]*e,this.pos[i*3+2]+=this.vel[i*3+2]*e,this.pos[i*3+1]<.01&&this.grav[i]>0&&(this.pos[i*3+1]=.01,this.vel[i*3+1]*=-.3,this.vel[i*3]*=.6,this.vel[i*3+2]*=.6),this.size[i]+=this.grow[i]*e,this.rot[i]+=this.spin[i]*e;let s=this.life[i]/this.maxLife[i];this.col[i*4+3]=this.a0[i]*(this.fade[i]===2?Math.min(1,s*3)*Math.min(1,(1-s)*8+.2):s)}this.n=t,this.geo.setDrawRange(0,t);for(let i of["position","aColor","aSize","aRot"])this.geo.attributes[i].needsUpdate=!0}clear(){this.n=0,this.geo.setDrawRange(0,0)}},Yc=class{constructor(e,t){this.scene=e,this.vmScene=t,this.tex={soft:i_(),smoke:n_(),flash:s_(),hole:r_(),scorch:a_()},this.add=new Eo(e,1500,this.tex.soft,!0),this.smoke=new Eo(e,900,this.tex.smoke,!1),this.dust=new Eo(e,1200,this.tex.soft,!1),this.lights=[];for(let n=0;n<4;n++){let s=new ui(16756832,0,12,2);s.userData.t=0,e.add(s),this.lights.push(s)}this.bigLight=new ui(16747066,0,40,2),e.add(this.bigLight),this.decalGeo=new ki(1,1),this.holeMat=new qe({map:this.tex.hole,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,roughness:.9}),this.scorchMat=new qe({map:this.tex.scorch,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,roughness:1}),this.decals=[],this.tracers=[],this.tracerMat=new ti({transparent:!0,opacity:.85,blending:Ti,depthWrite:!1}),this.tracerMat.color.setRGB(4,3.2,2),this.tracerGeo=new Yt(.008,.008,1,4,1,!0),this.tracerGeo.rotateX(Math.PI/2),this.flashMat=new vn({map:this.tex.flash,blending:Ti,depthWrite:!1}),this.flashMat.color.setRGB(5,4,3),this.flashes=[];let i=new Yt(.0045,.0045,.03,8);i.rotateZ(Math.PI/2),this.shellMesh=new Xn(i,new qe({color:13213766,metalness:1,roughness:.3}),60),this.shellMesh.instanceMatrix.setUsage(Ys),this.shellMesh.frustumCulled=!1,this.shellMesh.count=0,e.add(this.shellMesh),this.shells=[],this.smokeClouds=[],this._m=new Le,this._q=new Lt,this._e=new Si,this.shake=0}flashLight(e,t=6,i=16756832,n=.05){let s=this.lights.reduce((a,o)=>a.userData.t<o.userData.t?a:o);s.position.copy(e),s.color.set(i),s.intensity=t,s.userData.t=n,s.userData.i0=t,s.userData.d=n}muzzleWorld(e,t,i=1){let n=new Wn(this.flashMat);n.position.copy(e),n.scale.setScalar(.5*i*(.7+Math.random()*.6)),n.material.rotation=Math.random()*6,n.userData.t=.05,this.scene.add(n),this.flashes.push(n),this.flashLight(e,4*i);for(let s=0;s<3;s++)this.smoke.spawn(e,t.clone().multiplyScalar(1+Math.random()).add(new D(0,.3,0)),{life:.8,size:.25,grow:.6,color:[.75,.75,.75],alpha:.12,drag:2})}tracer(e,t,i=350){let n=new Te(this.tracerGeo,this.tracerMat),s=t.clone().sub(e),a=s.length();s.normalize(),n.position.copy(e),n.lookAt(t),n.scale.set(1,1,Math.min(4,a)),n.userData={dir:s,dist:0,len:a,speed:i},this.scene.add(n),this.tracers.push(n)}impact(e,t,i){let n=t,s=i==="dirt"||i==="sand"||i==="grass"||i==="ground",a=i==="sand"?[.75,.65,.48]:s?[.45,.38,.3]:i==="wood"?[.5,.36,.22]:[.62,.6,.57];for(let o=0;o<(s?10:6);o++){let l=n.clone().multiplyScalar(1.5+Math.random()*3).add(new D((Math.random()-.5)*2,Math.random()*2,(Math.random()-.5)*2));this.dust.spawn(e,l,{life:.5+Math.random()*.6,size:.05+Math.random()*.05,color:a,alpha:.9,grav:9,drag:1})}for(let o=0;o<3;o++)this.smoke.spawn(e.clone().addScaledVector(n,.05),n.clone().multiplyScalar(.6+Math.random()).add(new D(0,.2,0)),{life:1.2+Math.random(),size:.25,grow:.7,color:a,alpha:.35,drag:2.5,spin:1});if(i==="metal"||i==="concrete")for(let o=0;o<(i==="metal"?10:4);o++){let l=n.clone().multiplyScalar(2+Math.random()*4).add(new D((Math.random()-.5)*6,Math.random()*4,(Math.random()-.5)*6));this.add.spawn(e,l,{life:.15+Math.random()*.25,size:.04,color:[1,.7,.3],alpha:1,grav:12})}(!s||Math.random()<.5)&&this.decal(e,n,.07+Math.random()*.03,this.holeMat)}blood(e,t){for(let i=0;i<8;i++){let n=t.clone().multiplyScalar(1+Math.random()*2).add(new D((Math.random()-.5)*1.5,Math.random()*1.2,(Math.random()-.5)*1.5));this.dust.spawn(e,n,{life:.35+Math.random()*.3,size:.06,color:[.35,.02,.02],alpha:.9,grav:9})}this.smoke.spawn(e,t.clone().multiplyScalar(.5),{life:.5,size:.25,grow:.8,color:[.4,.03,.03],alpha:.5,drag:3})}decal(e,t,i,n){let s=new Te(this.decalGeo,n);if(s.position.copy(e).addScaledVector(t,.004),s.lookAt(e.clone().add(t)),s.rotateZ(Math.random()*6.28),s.scale.setScalar(i),s.receiveShadow=!0,this.scene.add(s),this.decals.push(s),this.decals.length>160){let a=this.decals.shift();this.scene.remove(a)}}explosion(e,t=1){this.bigLight.position.copy(e).add(new D(0,1,0)),this.bigLight.intensity=400*t,this._bigT=.35;for(let n=0;n<40*t;n++){let s=new D(Math.random()-.5,Math.random()*.9+.1,Math.random()-.5).normalize().multiplyScalar(2+Math.random()*6);this.add.spawn(e.clone().add(new D(0,.3,0)),s,{life:.25+Math.random()*.35,size:1.2+Math.random()*1.5,grow:3,color:[1,.55+Math.random()*.2,.2],alpha:.9,drag:4})}for(let n=0;n<50;n++){let s=new D(Math.random()-.5,Math.random(),Math.random()-.5).normalize().multiplyScalar(8+Math.random()*18);this.add.spawn(e.clone().add(new D(0,.3,0)),s,{life:.4+Math.random()*.8,size:.06,color:[1,.7,.35],alpha:1,grav:14,drag:.5})}for(let n=0;n<26*t;n++){let s=new D((Math.random()-.5)*2,Math.random()*2.5+.5,(Math.random()-.5)*2).multiplyScalar(1.5);this.smoke.spawn(e.clone().add(new D(Math.random()-.5,.5+Math.random(),Math.random()-.5)),s,{life:3+Math.random()*3,size:1.5+Math.random(),grow:1.5,color:[.18,.17,.16],alpha:.7,drag:1.2,spin:.6,fade:2})}for(let n=0;n<30;n++){let s=new D(Math.random()-.5,Math.random(),Math.random()-.5).normalize().multiplyScalar(4+Math.random()*8);this.dust.spawn(e.clone().add(new D(0,.2,0)),s,{life:1+Math.random(),size:.08+Math.random()*.06,color:[.3,.26,.22],alpha:1,grav:10})}let i=new Te(this.decalGeo,this.scorchMat);i.rotation.x=-Math.PI/2,i.position.set(e.x,.02,e.z),i.scale.setScalar(3.5*t),this.scene.add(i),this.decals.push(i)}smokeGrenade(e){let t={pos:e.clone().add(new D(0,1.2,0)),r:.5,t:22,emit:14};this.smokeClouds.push(t)}ejectShell(e,t){this.shells.length>=60&&this.shells.shift(),this.shells.push({p:e.clone(),v:t.clone(),r:new Si(Math.random()*6,Math.random()*6,0),w:new D(Math.random()*20,Math.random()*20,0),t:4,bounced:0})}update(e,t){this.add.update(e),this.smoke.update(e),this.dust.update(e);let i=window.innerHeight*.9;for(let s of[this.add,this.smoke,this.dust])s.mat.uniforms.uScale.value=i/Math.tan(Wt.degToRad(t.fov/2))*.5;for(let s of this.lights)s.userData.t>0?(s.userData.t-=e,s.intensity=Math.max(0,s.userData.i0*(s.userData.t/s.userData.d))):s.intensity=0;this._bigT>0?(this._bigT-=e,this.bigLight.intensity=Math.max(0,this._bigT/.35)*400):this.bigLight.intensity=0;for(let s=this.flashes.length-1;s>=0;s--){let a=this.flashes[s];a.userData.t-=e,a.userData.t<=0&&(this.scene.remove(a),this.flashes.splice(s,1))}for(let s=this.tracers.length-1;s>=0;s--){let a=this.tracers[s],o=a.userData,l=o.speed*e;a.position.addScaledVector(o.dir,l),o.dist+=l,o.dist>o.len&&(this.scene.remove(a),this.tracers.splice(s,1))}let n=0;for(let s=this.shells.length-1;s>=0;s--){let a=this.shells[s];if(a.t-=e,a.t<=0){this.shells.splice(s,1);continue}a.v.y-=9.8*e,a.p.addScaledVector(a.v,e),a.p.y<.005&&(a.p.y=.005,a.v.y<-.5?(a.v.y*=-.35,a.v.x*=.5,a.v.z*=.5,a.w.multiplyScalar(.5),a.bounced++<1&&this.onShellBounce&&this.onShellBounce(a.p)):(a.v.set(0,0,0),a.w.set(0,0,0))),a.r.x+=a.w.x*e,a.r.y+=a.w.y*e,this._q.setFromEuler(a.r),this._m.compose(a.p,this._q,new D(1,1,1)),this.shellMesh.setMatrixAt(n++,this._m)}this.shellMesh.count=n,this.shellMesh.instanceMatrix.needsUpdate=!0;for(let s=this.smokeClouds.length-1;s>=0;s--){let a=this.smokeClouds[s];if(a.t-=e,a.r=Math.min(5,a.r+e*1.5),a.t>4)for(a.acc=(a.acc||0)+e*a.emit;a.acc>1;){a.acc--;let o=Math.random()*6.28,l=Math.random()*a.r*.7;this.smoke.spawn(new D(a.pos.x+Math.cos(o)*l,.4+Math.random()*2.5,a.pos.z+Math.sin(o)*l),new D((Math.random()-.5)*.4,.15,(Math.random()-.5)*.4),{life:6+Math.random()*3,size:3+Math.random()*1.5,grow:.4,color:[.78,.78,.76],alpha:.55,drag:.5,spin:.2,fade:2})}a.t<=0&&this.smokeClouds.splice(s,1)}}smokeBlocks(e,t){for(let i of this.smokeClouds){if(i.t<2)continue;let n=t.clone().sub(e),s=Math.max(0,Math.min(1,i.pos.clone().sub(e).dot(n)/n.lengthSq()));if(e.clone().addScaledVector(n,s).distanceTo(i.pos)<i.r)return!0}return!1}clear(){for(let e of this.decals)this.scene.remove(e);this.decals=[];for(let e of this.tracers)this.scene.remove(e);this.tracers=[];for(let e of this.flashes)this.scene.remove(e);this.flashes=[],this.shells=[],this.smokeClouds=[],this.add.clear(),this.smoke.clear(),this.dust.clear()}};var yt=(r=0,e=0,t=0)=>new D(r,e,t),Hi=(r,e,t,i)=>r+(e-r)*(1-Math.exp(-t*i)),Zr=yt(),c_=yt(),um=yt(),fm=yt(),Kc=class{constructor(e){this.G=e,this.pos=yt(),this.vel=yt(),this.yaw=0,this.pitch=0,this.eye=1.65,this.height=1.8,this.onGround=!0,this.crouch=!1,this.sprint=!1,this.slide=0,this.maxHealth=100,this.health=100,this.lastHit=0,this.alive=!0,this.recoil={p:0,y:0},this.shake=0,this.bobT=0,this.stepDist=0,this.weapons=[],this.cur=0,this.switchT=0,this.pendingSwitch=-1,this.ads=0,this.reloadT=0,this.reloading=!1,this.fireCd=0,this.cycleT=0,this.boltPending=!1,this.bloom=0,this.sway=yt(),this.swayVel=yt(),this.kick=0,this.kickRot=0,this.grenades={lethal:0,tactical:0},this.throwT=0,this.meleeT=0,this.flash=0,this.damageFlash=0,this.time=0,this.stats={shots:0,hits:0,kills:0,headshots:0,targets:0},this.vm=new tt,e.engine.vmScene.add(this.vm),this.holdBreath=0,this.breath=1,this.nvg=!1,this.flashlightOn=!1}async setLoadout(e){this.loadout=e;let t=e.perks||[];this.perks=t,this.maxHealth=t.includes("jugg")?140:100,this.health=this.maxHealth,this.speedMul=t.includes("lightweight")?1.12:1,this.weapons=[];for(let i of["primary","secondary"]){let n=e[i],s=e.att?.[n]||{},a=Mo(n,s,t),o=await du(n,s);o.group.visible=!1,this.vm.add(o.group),this.weapons.push({id:n,st:a,model:o,ammo:a.mag,reserve:a.reserve,mode:0})}this.grenades.lethal=(e.lethal==="c4",2),this.grenades.tactical=e.tactical==="smoke"?1:2,this.cur=0,this.weapons[0].model.group.visible=!0,this.switchT=.5,this.drawT=.5,this.knife&&this.G.engine.vmScene.remove(this.knife),this.knife=this.buildKnife(),this.G.engine.vmScene.add(this.knife),this.vmFlash||(this.vmFlash=new Wn(new vn({map:this.G.effects.tex.flash,blending:Ti,depthWrite:!1})),this.vmFlash.material.color.setRGB(4,3.4,2.6),this.vmFlash.visible=!1,this.G.engine.vmScene.add(this.vmFlash),this.vmFlashLight=new ui(16755285,0,2,2),this.G.engine.vmScene.add(this.vmFlashLight))}get w(){return this.weapons[this.cur]}spawn(e,t=0){this.pos.copy(e),this.vel.set(0,0,0),this.yaw=t,this.pitch=0,this.alive=!0,this.health=this.maxHealth}damage(e,t){!this.alive||this.G.godMode||(this.health-=e,this.lastHit=this.time,this.damageFlash=Math.min(1,this.damageFlash+e/60),this.shake=Math.min(1,this.shake+e/80),t&&this.G.hud.damageDir(t,this),ye.play("hurt",{vol:.6}),this.health<=0&&(this.health=0,this.alive=!1,this.G.onPlayerDeath()))}eyePos(e=yt()){return e.set(this.pos.x,this.pos.y+this.eye,this.pos.z)}forward(e=yt()){let t=Math.cos(this.pitch+this.recoil.p);return e.set(-Math.sin(this.yaw+this.recoil.y)*t,Math.sin(this.pitch+this.recoil.p),-Math.cos(this.yaw+this.recoil.y)*t)}update(e,t){let i=this.G;this.time+=e,this.fireHeld=t.act("fire"),this.firePressed=t.actHit("fire"),t.actHit("aimToggle")&&(this.adsToggled=!this.adsToggled),t.actHit("aim")&&i.settings.aimToggle&&(this.adsToggled=!this.adsToggled),this.aimHeld=this.adsToggled||t.act("aim")&&!i.settings.aimToggle;let n=i.settings;if(!this.alive){this.updateCamera(e);return}let s=this.w,a=.0022*n.sensitivity*(1-this.ads*(1-1/Math.max(1,s.st.zoom*.7)));this.yaw-=t.mouse.dx*a;let o=2.4*(n.sensitivity||1)*(1-this.ads*.6)*e;t.act("lookLeft")&&(this.yaw+=o),t.act("lookRight")&&(this.yaw-=o),t.act("lookUp")&&(this.pitch+=o*.7),t.act("lookDown")&&(this.pitch-=o*.7),this.pitch-=t.mouse.dy*a*(n.invertY?-1:1),this.pitch=Math.max(-1.5,Math.min(1.5,this.pitch)),this.swayVel.x+=t.mouse.dx*4e-5,this.swayVel.y+=t.mouse.dy*4e-5;let l=(t.act("forward")?1:0)-(t.act("back")?1:0),c=(t.act("right")?1:0)-(t.act("left")?1:0),h=l||c,d=t.act("crouch");t.actHit("crouch")&&this.sprint&&this.onGround&&this.slide<=0&&(this.slide=.75,this.slideDir=yt(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),ye.play("step_dirt",{vol:.8,rate:.6})),this.crouch=d;let u=this._ceiling!==void 0&&this._ceiling-this.pos.y<1.8;u&&(this.crouch=!0),this.sprint=t.act("sprint")&&l>0&&!this.crouch&&this.ads<.3&&!(s.st.scope&&this.aimHeld),this.sprint&&this.fireHeld&&(this.sprint=!1),this.sprint&&this.reloading&&this.perks.includes("lightweight");let f=this.crouch?2.3:this.sprint?7:4.5;f*=s.st.move*this.speedMul*(1-this.ads*.45);let m=Math.sin(this.yaw),b=Math.cos(this.yaw);if(Zr.set(-m*l+b*c,0,-b*l-m*c),Zr.lengthSq()>0&&Zr.normalize().multiplyScalar(f),this.slide>0){this.slide-=e,this.crouch=!0;let w=this.slideDir.clone().multiplyScalar(9*Math.max(0,this.slide/.75)+2);Zr.copy(w),this.slide<=0&&(this.slide=0)}let g=this.onGround?12:2.5;this.vel.x=Hi(this.vel.x,Zr.x,g,e),this.vel.z=Hi(this.vel.z,Zr.z,g,e),t.actHit("jump")&&this.onGround&&!u&&(this.vel.y=6.2,this.onGround=!1,this.slide=0),this.vel.y-=20*e,this.pos.x+=this.vel.x*e,this.pos.z+=this.vel.z*e,this.pos.y+=this.vel.y*e;let p=this.crouch?1.15:1.8,v=i.world.collideCylinder(this.pos,.33,p,this.vel);this._ceiling=v.ceiling,this.pos.y+p>v.ceiling&&this.vel.y>0&&(this.vel.y=0,this.pos.y=v.ceiling-p);let _=!this.onGround;this.pos.y<=v.groundY+.001?(_&&this.vel.y<-6&&(ye.play("land",{vol:.6}),this.landKick=.08),this.pos.y=v.groundY,this.vel.y=0,this.onGround=!0,this.groundMat=v.groundMat):this.onGround&&this.pos.y-v.groundY<.5&&this.vel.y<=0?(this.pos.y=v.groundY,this.vel.y=0):this.onGround=!1,this.eye=Hi(this.eye,this.crouch?this.slide>0?.85:1.05:1.65,10,e);let y=Math.hypot(this.vel.x,this.vel.z);if(this.onGround&&y>.5&&this.slide<=0){this.stepDist+=y*e,this.bobT+=y*e*(this.sprint?1.25:1.6);let w=this.sprint?2.2:this.crouch?1.2:1.7;if(this.stepDist>w){this.stepDist=0;let E=this.surface();ye.play("step_"+E,{vol:this.crouch?.15:this.sprint?.5:.32,reverb:.1})}}this.moveAmount=Math.min(1,y/5),this.updateWeapon(e,t),t.actHit("lethal")&&this.throwGrenade("lethal"),t.actHit("tactical")&&this.throwGrenade("tactical"),t.actHit("melee")&&this.melee(),t.actHit("nvg")&&i.level?.night&&(this.nvg=!this.nvg,ye.play("beep",{vol:.4})),t.actHit("flashlight")&&(this.flashlightOn=!this.flashlightOn,ye.play("dry",{vol:.4})),this.health<this.maxHealth&&this.time-this.lastHit>4&&(this.health=Math.min(this.maxHealth,this.health+40*e)),this.damageFlash=Hi(this.damageFlash,0,2.2,e),this.flash=Math.max(0,this.flash-e*.35),this.updateCamera(e)}surface(){if(this.pos.y>.05){for(let t of this.G.world.colliders)if(Math.abs(t.max.y-this.pos.y)<.05&&this.pos.x>t.min.x&&this.pos.x<t.max.x&&this.pos.z>t.min.z&&this.pos.z<t.max.z)return["metal","wood","concrete"].includes(t.mat)?t.mat:"concrete"}let e=this.G.world.groundMat;return e==="sand"?"sand":e==="grass"?"grass":e==="concrete"||e==="asphalt"?"concrete":"dirt"}updateCamera(e){let t=this.G.engine.camera,i=this.G.settings;this.recoil.p=Hi(this.recoil.p,0,5.5,e),this.recoil.y=Hi(this.recoil.y,0,5.5,e),this.shake=Math.max(0,this.shake-e*1.5);let n=this.onGround?this.moveAmount*(1-this.ads*.85):0,s=Math.sin(this.bobT*2)*.035*n,a=Math.cos(this.bobT)*.025*n;this.landKick=Hi(this.landKick||0,0,8,e),t.position.set(this.pos.x,this.pos.y+this.eye+s-this.landKick,this.pos.z);let o=this.shake*this.shake*.04;t.rotation.order="YXZ",t.rotation.y=this.yaw+this.recoil.y+(Math.random()-.5)*o+a*.15,t.rotation.x=this.pitch+this.recoil.p+(Math.random()-.5)*o,t.rotation.z=(this.slide>0?.06:0)+a*.2;let l=this.w,c=i.fov,h=l?1+(l.st.zoom-1)*this.ads:1,d=(this.sprint?c+6:c)/h;t.fov=Hi(t.fov,d,18,e),t.updateProjectionMatrix();let u=this.G.engine.vmCamera;u.fov=Hi(u.fov,l?.st.scope?55:55-this.ads*12,18,e),u.updateProjectionMatrix()}updateWeapon(e,t){let i=this.w,n=i.st,s=i.model,a=this.G;if(this.fireCd-=e,this.switchT=Math.max(0,this.switchT-e),this.throwT=Math.max(0,this.throwT-e),this.meleeT=Math.max(0,this.meleeT-e),t.actHit("weapon1")&&this.cur!==0||t.actHit("weapon2")&&this.cur!==1||t.mouse.wheel||t.actHit("swap")){let u=t.actHit("weapon1")?0:t.actHit("weapon2")?1:1-this.cur;u!==this.cur&&this.switchT<=.25&&(this.pendingSwitch=u,this.switchT=.5,this.adsToggled=!1,this.reloading=!1,this.boltPending=!1,ye.play("switch",{vol:.5}))}this.pendingSwitch>=0&&this.switchT<=.25&&(i.model.group.visible=!1,this.cur=this.pendingSwitch,this.pendingSwitch=-1,this.w.model.group.visible=!0,this.ads=0);let o=this.switchT>0||this.throwT>0||this.meleeT>0;t.actHit("firemode")&&n.modes.length>1&&(i.mode=(i.mode+1)%n.modes.length,ye.play("dry",{vol:.5}),a.hud.toast(n.modes[i.mode].toUpperCase()));let l=this.aimHeld&&!this.sprint&&!o&&!(this.reloading&&n.scope);if(this.ads=Math.max(0,Math.min(1,this.ads+(l?1:-1)*e/n.ads)),n.scope&&this.ads>.95&&t.act("sprint")&&this.breath>0?(this.holdBreath=1,this.breath=Math.max(0,this.breath-e/4)):(this.holdBreath=0,this.breath=Math.min(1,this.breath+e/5)),t.actHit("reload")&&!this.reloading&&i.ammo<n.mag&&i.reserve>0&&!o&&this.startReload(),this.reloading){this.reloadT-=e;let u=this.reloadTotal,f=1-this.reloadT/u;if(n.shellReload||(!this._rs1&&f>.2&&(this._rs1=!0,ye.play("magOut",{vol:.7})),!this._rs2&&f>.6&&(this._rs2=!0,ye.play("magIn",{vol:.8})),!this._rs3&&this.reloadEmpty&&f>.82&&(this._rs3=!0,ye.play(s.pistol?"slide":"bolt",{vol:.7}))),this.reloadT<=0)if(n.shellReload)i.ammo++,i.reserve--,ye.play("shell",{vol:.7}),i.ammo<n.mag&&i.reserve>0&&!this.fireHeld?(this.reloadT=n.reload,this.reloadTotal=n.reload):(this.reloading=!1,ye.play("pump",{vol:.7}),this.fireCd=.3);else{let m=n.mag-i.ammo,b=Math.min(m,i.reserve);i.ammo+=b,i.reserve-=b,this.reloading=!1}n.shellReload&&this.firePressed&&i.ammo>0&&(this.reloading=!1,this.fireCd=.15)}this.boltPending&&this.fireCd<=.25&&!this._boltSound&&(this._boltSound=!0,ye.play(n.model==="shotgun"?"pump":"bolt",{vol:.8})),(n.modes[i.mode]==="auto"?this.fireHeld:this.firePressed)&&!o&&!this.reloading&&this.fireCd<=0&&(i.ammo>0?this.fire():this.firePressed&&(ye.play("dry",{vol:.6}),i.reserve>0&&this.startReload(),this.fireCd=.25)),i.ammo===0&&i.reserve>0&&!this.reloading&&!o&&this.fireCd<=0&&a.settings.autoReload&&this.startReload(),this.bloom=Hi(this.bloom,0,4.5,e),this.updateViewmodel(e)}startReload(){let e=this.w,t=e.st;this.reloading=!0,this.reloadEmpty=e.ammo===0,this.reloadTotal=this.reloadT=t.shellReload?t.reload:this.reloadEmpty?t.reloadEmpty:t.reload,this._rs1=this._rs2=this._rs3=!1,this.ads=Math.min(this.ads,.3)}spread(){let e=this.w.st,t=e.hip*(1-this.ads)+e.adsSpread*this.ads,i=this.moveAmount*(1-this.ads*.7)*2.5+(this.onGround?0:4),n=this.crouch?.8:1;return(t+i+this.bloom)*n*(e.scope&&this.ads>.95?this.holdBreath?.02:.15:1)}fire(){let e=this.w,t=e.st,i=this.G,n=e.model;e.ammo--,!this.G.completed&&!this.G.failed&&this.stats.shots++,this.fireCd=60/t.rpm,(t.bolt||t.model==="shotgun")&&(this.boltPending=!0,this._boltSound=!1,this.fireCd=60/t.rpm);let s=this.eyePos(c_),a=this.forward(yt()),o=t.pellets||1,l=!1,c=!1,h=!1,d=this.spread()*(t.pellets,1);for(let m=0;m<o;m++){let b=a.clone(),g=Wt.degToRad(t.pellets?t.pelletSpread*(1-this.ads*.3)+d*.3:d)*.5,p=Math.random()*Math.PI*2,v=Math.sqrt(Math.random())*Math.tan(g);um.set(1,0,0).applyEuler(i.engine.camera.rotation),fm.set(0,1,0).applyEuler(i.engine.camera.rotation),b.addScaledVector(um,Math.cos(p)*v).addScaledVector(fm,Math.sin(p)*v).normalize();let _=i.bullet(s,b,t,!0);_?.enemy?(l=!0,_.head&&(c=!0),_.killed&&(h=!0)):_?.target&&(l=!0),m===0&&(this.stats.shots%3===0||t.pellets)&&i.effects.tracer(this.muzzleWorld(),_?_.point:s.clone().addScaledVector(b,120))}if(l&&(!this.G.completed&&!this.G.failed&&this.stats.hits++,i.hud.hitmarker(c,h),ye.play(c?"headshot":"hitmarker",{vol:.5,reverb:0})),ye.shot(t.suppressed?"suppressed":t.sound,null,!0),i.alertEnemies(this.pos,t.suppressed?12:70),!t.suppressed){let m=this.muzzleWorld();i.effects.flashLight(m,3,16756832,.05),this.vmFlash.visible=!0,this.vmFlashT=.04,this.vmFlash.material.rotation=Math.random()*6.28,this.vmFlash.scale.setScalar((t.model==="shotgun"||t.scope?.35:.22)*(.8+Math.random()*.4)),this.vmFlashLight.intensity=1.5}t.shellReload;{let m=i.engine.camera,b=yt(1,0,0).applyQuaternion(m.quaternion),g=yt(0,1,0).applyQuaternion(m.quaternion),p=s.clone().addScaledVector(a,.35).addScaledVector(b,.15).addScaledVector(g,-.12);!t.bolt&&t.model!=="shotgun"&&i.effects.ejectShell(p,b.multiplyScalar(2+Math.random()).addScaledVector(g,1.5+Math.random()).add(this.vel))}let u=this.ads>.5?.7:1,f=this.crouch?.85:1;this.recoil.p+=Wt.degToRad(t.recoil[0])*u*f*(.8+Math.random()*.4),this.recoil.y+=Wt.degToRad(t.recoil[1])*u*f*(Math.random()-.35),this.pitch+=Wt.degToRad(t.recoil[0])*.35*u*f,this.kick=Math.min(this.kick+t.kick,.12),this.kickRot=Math.min(this.kickRot+t.kick*1.8,.25),this.bloom=Math.min(this.bloom+(t.pellets?0:.6+t.recoil[0]*.4),6),n.slide&&(this.slideKick=1)}muzzleWorld(e=yt()){let t=this.G.engine.camera,i=this.w.model;i.muzzle.updateWorldMatrix(!0,!1);let n=yt().setFromMatrixPosition(i.muzzle.matrixWorld);return n.multiplyScalar(1),e.copy(n).applyQuaternion(t.quaternion).add(t.position)}updateViewmodel(e){let t=this.w,i=t.st,n=t.model,s=n.group;this.swayVel.x-=this.sway.x*60*e,this.swayVel.y-=this.sway.y*60*e,this.swayVel.multiplyScalar(Math.exp(-10*e)),this.sway.x+=this.swayVel.x,this.sway.y+=this.swayVel.y,this.sway.x=Math.max(-.06,Math.min(.06,this.sway.x)),this.sway.y=Math.max(-.06,Math.min(.06,this.sway.y)),this.kick=Hi(this.kick,0,14,e),this.kickRot=Hi(this.kickRot,0,12,e);let a=this.ads,o=1-a,l=n.pistol?yt(.16,-.17,-.38):yt(.17,-.19,-.42),c=yt(0,-n.sightY,n.pistol?-.34:-.3),h=l.lerp(c,a*a*(3-2*a)),d=this.onGround?this.moveAmount:0,u=this.bobT;h.x+=Math.cos(u)*.012*d*(o*.9+.1)-this.sway.x*(o+.15),h.y+=Math.abs(Math.sin(u))*.012*d*(o*.9+.1)+this.sway.y*(o+.15)+Math.sin(this.time*1.5)*.002*o,h.z+=this.kick;let f=this.kickRot*(o*.7+.3),m=0,b=0;this._sp=Hi(this._sp||0,this.sprint?1:0,10,e);let g=this._sp;if(h.x+=g*(n.pistol?0:-.05),h.y+=g*-.05,h.z+=g*.03,f+=g*(n.pistol?-.6:-.25),m+=g*(n.pistol?0:.9),b+=g*.25,h.x+=Math.cos(u)*.03*g,h.y+=Math.abs(Math.sin(u))*.02*g,this.reloading&&!i.shellReload){let _=1-this.reloadT/this.reloadTotal,y=Math.sin(Math.min(1,_*1.1)*Math.PI);if(f+=y*.35,b+=y*.6,h.y-=y*.06,h.x-=y*.03,n.mag&&n.magHome){let w=_<.2?0:_<.4?(_-.2)/.2:_<.55?1:_<.68?1-(_-.55)/.13:0;n.mag.position.copy(n.magHome),n.mag.position.y-=w*.35,n.mag.position.z+=w*.05,n.mag.visible=w<.98}}else if(this.reloading&&i.shellReload){let _=1-this.reloadT/this.reloadTotal;b+=.45,f+=.15+Math.sin(_*Math.PI)*.06,h.y-=.03}else n.mag&&n.magHome&&(n.mag.position.copy(n.magHome),n.mag.visible=!0);if(this.boltPending){let _=60/i.rpm,y=1-Math.max(0,this.fireCd)/_,w=y>.25?Math.sin((y-.25)/.75*Math.PI):0;i.bolt&&(b+=w*.35*o,f+=w*.1,h.y-=w*.03*o),n.pump&&(n.pump.position.z=n.pumpHome.z+w*.09),y>=1&&(this.boltPending=!1)}if(n.slide){this.slideKick=Hi(this.slideKick||0,0,25,e),n.slide.position.copy(n.slideHome);let _=n.pistol&&i.model==="pistol"?"x":"z";n.slide.position[_]+=(_==="x"?-1:1)*(this.slideKick*.03+(this.w.ammo===0?.03:0))}let p=this.switchT>0?Math.sin(Math.min(1,this.switchT/.5)*Math.PI):0;if(h.y-=p*.3,f-=p*.6,this.throwT>0){let _=Math.sin(this.throwT/.6*Math.PI);h.y-=_*.25,f-=_*.4}if(this.knife)if(this.meleeT>0){let _=1-this.meleeT/.55,y=Math.sin(Math.min(1,_*1.6)*Math.PI);h.y-=y*.35,f-=y*.5,h.x+=y*.08;let w=this.knife;w.visible=!0;let E=Wt.smoothstep(_,.12,.42),x=_<.12?_/.12:_>.75?Math.max(0,1-(_-.75)/.25):1;w.position.set(Wt.lerp(.32,-.12,E),Wt.lerp(-.26,-.12,E)-(1-x)*.3,Wt.lerp(-.32,-.42,E)),w.rotation.set(-.15+E*.2,Wt.lerp(.6,-.9,E),Wt.lerp(-1.2,.6,E))}else this.knife.visible=!1;s.position.copy(h),s.rotation.set(f,m,b);let v=i.scope&&this.ads>.92;s.visible=!v,n.laser&&(n.laser.visible=this.ads<.5),this.G.hud.setScope(v,this.holdBreath),v&&!this.holdBreath&&(this.recoil.p+=Math.sin(this.time*1.3)*25e-5,this.recoil.y+=Math.cos(this.time*.9)*2e-4),this.vmFlashT>0&&(this.vmFlashT-=e,n.muzzle.updateWorldMatrix(!0,!1),this.vmFlash.position.setFromMatrixPosition(n.muzzle.matrixWorld),this.vmFlashLight.position.copy(this.vmFlash.position),this.vmFlash.visible=!v,this.vmFlashT<=0&&(this.vmFlash.visible=!1,this.vmFlashLight.intensity=0))}throwGrenade(e){if(this.throwT>0||this.switchT>0||this.grenades[e]<=0)return;this.grenades[e]--,this.throwT=.6,this.reloading=!1,ye.play("pin",{vol:.6});let t=e==="lethal"?this.loadout.lethal||"frag":this.loadout.tactical||"flash";setTimeout(()=>{let i=this.forward(yt()),n=this.eyePos(yt()).addScaledVector(i,.5),s=i.multiplyScalar(16).add(yt(0,3.5,0)).add(this.vel);this.G.spawnGrenade(t,n,s,!0)},220)}melee(){if(this.meleeT>0||this.switchT>0||this.throwT>0)return;this.meleeT=.55,this.reloading=!1,this.ads=0,this.adsToggled=!1,ye.play("whiz",{vol:.35,rate:.55,reverb:0});let e=this.forward(yt()),t=this.G.enemies.meleeTarget(this.pos,e,3.6);if(t){let i=yt(t.pos.x-this.pos.x,0,t.pos.z-this.pos.z),n=i.length();n>1.2&&(i.normalize(),this.vel.x=i.x*Math.min(14,(n-.9)/.15),this.vel.z=i.z*Math.min(14,(n-.9)/.15)),this.yaw=Math.atan2(-(t.pos.x-this.pos.x),-(t.pos.z-this.pos.z))}setTimeout(()=>{if(!this.alive)return;let i=this.G.enemies.meleeTarget(this.pos,this.forward(yt()),2.6);if(i){let n=this.forward(yt()),s=this.G.damageEnemy(i,999,!1,n,i.pos.clone().add(yt(0,1.3,0)),"KNIFE KILL");ye.play("hit_flesh",{vol:1.1,rate:.9}),ye.play("melee",{vol:.6,rate:1.3}),this.G.hud.hitmarker(!1,s),this.shake=Math.min(1,this.shake+.25)}else{let n=this.G.world.raycast(this.eyePos(yt()),this.forward(yt()),1.8);n&&(this.G.effects.impact(n.point,n.normal,n.mat),ye.play("hit_"+(n.mat==="metal"?"metal":n.mat==="wood"?"wood":"concrete"),{vol:.6}))}},170)}buildKnife(){let e=new tt,t=new qe({color:12106946,metalness:1,roughness:.22}),i=new qe({color:1776670,metalness:.2,roughness:.7}),n=new qe({color:2762532,roughness:.75}),s=new Te(new Rt(.006,.032,.17),t);s.position.z=-.12;let a=new Te(new Bs(.0226,.05,4),t);a.rotation.x=-Math.PI/2,a.rotation.y=Math.PI/4,a.scale.set(.27,1,1),a.position.z=-.23;let o=new Te(new Rt(.014,.06,.012),i);o.position.z=-.03;let l=new Te(new Yt(.014,.016,.11,10),i);l.rotation.x=Math.PI/2,l.position.z=.03;let c=new Te(new Rt(.06,.08,.1),n);c.position.set(.005,-.005,.035);let h=new Te(new Yt(.04,.035,.35,12),this.weapons[0].model.arms.children[0]?.material||n);return h.rotation.x=Math.PI/2,h.position.set(.02,-.02,.24),e.add(s,a,o,l,c,h),e.traverse(d=>{d.isMesh&&(d.frustumCulled=!1)}),e.scale.setScalar(.8),e.visible=!1,e}async swapWeapon(e,t,i){if(this._swapping)return null;this._swapping=!0;try{let n=this.loadout.att?.[e]||{},s=Mo(e,n,this.perks),a=await du(e,n),o=this.weapons[this.cur];return o.model.group.visible=!1,this.vm.remove(o.model.group),a.group.visible=!0,this.vm.add(a.group),this.weapons[this.cur]={id:e,st:s,model:a,ammo:Math.min(s.mag,t),reserve:i,mode:0},this.reloading=!1,this.boltPending=!1,this.ads=0,this.adsToggled=!1,this.switchT=.5,ye.play("switch",{vol:.6}),this.G.hud.pickupMsg(s.name.toUpperCase()),{id:o.id,ammo:o.ammo,reserve:o.reserve}}finally{this._swapping=!1}}refillAmmo(e=1){for(let t of this.weapons)t.reserve=Math.min(t.st.reserve*1.5,t.reserve+Math.ceil(t.st.mag*e))}};var Jc=(r=0,e=0,t=0)=>new D(r,e,t),h_={ammo:16765773,grenade:16747069,weapon:15266559,supply:8257434},Zc=class{constructor(e){this.G=e,this.list=[],this.hold=0,this.focus=null,this.glowMat={};for(let[t,i]of Object.entries(h_)){let n=new vn({map:e.effects.tex.soft,blending:Ti,depthWrite:!1,transparent:!0,opacity:.55});n.color.set(i).multiplyScalar(1.6),this.glowMat[t]=n}}async init(){this.ammoModel=(await Cn("ammo_box")).scene,this.crateModel=(await Cn("old_military_crate")).scene;let e=new qe({color:3884336,roughness:.6,metalness:.4}),t=new tt;for(let i of[-.06,.06]){let n=new Te(new yn(.045,12,10),e);n.scale.set(1,1.25,1),n.position.set(i,.055,0),n.castShadow=!0,t.add(n)}this.nadeModel=t}add(e,t,i={}){let n=new tt;n.position.copy(t),n.position.y=Math.max(t.y,0);let s;e==="ammo"?(s=this.ammoModel.clone(!0),s.scale.setScalar(1.4)):e==="grenade"?s=this.nadeModel.clone(!0):e==="supply"?(s=this.crateModel.clone(!0),s.scale.setScalar(.8)):e==="weapon"&&(s=this.G.enemies.rifleTemplate.clone(!0),s.rotation.set(0,Math.random()*6.28,Math.PI/2),s.position.y=.06),s.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),n.add(s);let a=new Wn(this.glowMat[e]);a.scale.setScalar(e==="supply"?2.2:1.1),a.position.y=.25,n.add(a),this.G.scene.add(n);let o={type:e,g:n,model:s,glow:a,pos:n.position,data:i,t:Math.random()*6,life:e==="supply"?1/0:90,cooldown:0};this.list.push(o);let l=this.list.filter(c=>c.type!=="supply");return l.length>40&&this.remove(l[0]),o}remove(e){let t=this.list.indexOf(e);t>=0&&this.list.splice(t,1),this.G.scene.remove(e.g),this.focus===e&&(this.focus=null)}dropFrom(e){if(e.hostage||e.friendly)return;let t=e.pos.clone(),i=this.G.enemies.weaponId,n=qi[i];this.add("weapon",t.clone().add(Jc((Math.random()-.5)*.8,0,(Math.random()-.5)*.8)),{id:i,ammo:Math.ceil(n.mag*(.4+Math.random()*.6)),reserve:n.mag*(1+(Math.random()*2|0))});let s=Math.random();s<.45?this.add("ammo",t.clone().add(Jc(.7,0,.3))):s<.65&&this.add("grenade",t.clone().add(Jc(-.6,0,.4)))}canUseAmmo(e){return e.weapons.some(t=>t.reserve<Math.floor(t.st.reserve*1.5))}update(e,t){let i=this.G,n=i.player,s=i.input,a=null,o=1.7;for(let l=this.list.length-1;l>=0;l--){let c=this.list[l];if(c.t+=e,c.life-=e,c.cooldown=Math.max(0,c.cooldown-e),c.life<=0){this.remove(c);continue}if(c.type!=="weapon"&&c.type!=="supply"&&(c.model.rotation.y+=e*1.2,c.model.position.y=.08+Math.sin(c.t*2.5)*.04),c.glow.material.opacity=c.type==="supply"&&c.cooldown>0?.1:.4+Math.sin(c.t*3)*.15,!n.alive)continue;let h=Math.hypot(n.pos.x-c.pos.x,n.pos.z-c.pos.z);if(!(Math.abs(n.pos.y-c.pos.y)>1.6)){if(h<1.3&&c.type==="ammo"&&this.canUseAmmo(n)){for(let d of n.weapons)d.reserve=Math.min(Math.floor(d.st.reserve*1.5),d.reserve+d.st.mag*(d.st.pellets?2:1));ye.play("magIn",{vol:.7}),i.hud.pickupMsg("+ AMMO"),this.remove(c);continue}if(h<1.3&&c.type==="grenade"&&(n.grenades.lethal<4||n.grenades.tactical<3)){n.grenades.lethal=Math.min(4,n.grenades.lethal+1),n.grenades.tactical=Math.min(3,n.grenades.tactical+1),ye.play("pin",{vol:.6}),i.hud.pickupMsg("+ GRENADES"),this.remove(c);continue}if(c.type==="weapon"){let d=n.weapons.find(u=>u.id===c.data.id);if(d&&h<1.3){d.reserve<Math.floor(d.st.reserve*1.5)&&(d.reserve=Math.min(Math.floor(d.st.reserve*1.5),d.reserve+c.data.ammo+c.data.reserve),ye.play("magIn",{vol:.7}),i.hud.pickupMsg(`+ ${qi[c.data.id].name} AMMO`),this.remove(c));continue}}(c.type==="weapon"||c.type==="supply"&&c.cooldown<=0)&&h<o&&(o=h,a=c)}}if(a!==this.focus&&(this.focus=a,this.hold=0),a&&!t){let l=Js(s.binds.interact?.[0]),c=a.type==="weapon"?`Hold <b>[${l}]</b> to swap for <b>${qi[a.data.id].name}</b>`:`Hold <b>[${l}]</b> to resupply ammo &amp; grenades`;s.act("interact")?this.hold+=e:this.hold=0;let h=a.type==="weapon"?.35:1;if(i.hud.setInteract(c,Math.min(1,this.hold/h)),this.hold>=h)if(this.hold=0,a.type==="supply")n.refillAmmo(99),n.grenades.lethal=Math.max(n.grenades.lethal,2),n.grenades.tactical=Math.max(n.grenades.tactical,2),a.cooldown=25,ye.play("magIn",{vol:.8}),ye.play("pin",{vol:.4}),i.hud.pickupMsg("RESUPPLIED");else{let d=a;this.remove(d),n.swapWeapon(d.data.id,d.data.ammo,d.data.reserve).then(u=>{u&&this.add("weapon",n.pos.clone().add(Jc(0,0,0)),{id:u.id,ammo:u.ammo,reserve:u.reserve,playerDrop:!0})})}}return!!a}clear(){for(let e of[...this.list])this.remove(e)}};var sn=(r=0,e=0,t=0)=>new D(r,e,t),Qc=class{constructor(e,t,i,n,s){this.engine=e,this.input=t,this.hud=i,this.ui=n,this.settings=s,this.state="menu",this.time=0,this.paused=!1,this.grenades=[],this.interactables=[],this.objectives=[],this.objIdx=0,i.G=this}async loadLevel(e,t,i,n=()=>{},s=null){let a=nn.find(h=>h.id===e);this.levelDef=a,this.loadout=t,this.diff=So[i]||So.regular,this.diffName=i,this.disposeLevel(),n(.05,"Preparing battlefield");let o=this.scene=new hn;this.engine.vmScene=new hn,this.world=new qc(o),this.effects=new Yc(o,this.engine.vmScene),this.effects.onShellBounce=h=>{h.distanceTo(this.player.pos)<6&&ye.play("shell",{pos:h,vol:.25,rate:1.6,reverb:0})},this.enemies=new Vc(this),this.player=new Kc(this),this.grenades=[],this.interactables=[],this.objIdx=0,this.time=0,this.levelTime=0,this.failed=!1,this.completed=!1,this.killCount=0,this.godMode=!1,this.level={night:!!a.night,def:a},n(.15,"Loading soldiers"),await this.enemies.init(a.enemyWeapon||"ak47"),this.pickups=new Zc(this),await this.pickups.init(),this.enemies.onDeath=h=>this.pickups.dropFrom(h),n(.3,"Building "+a.name),this._supplies=null;let l=await a.build(this,n);for(let h of this._supplies||[])this.pickups.add("supply",h);this.level={...this.level,...l},this.objectives=l.objectives,this.world.buildNav(.8),n(.85,"Issuing equipment");let c=s&&s.weapons?{...t,primary:s.weapons[0].id,secondary:s.weapons[1].id}:t;if(await this.player.setLoadout(c),this.player.loadout=t,this.player.spawn(l.spawn,l.spawnYaw||0),this.saveData=s,this.engine.setScene(o),this.engine.camera.fov=this.settings.fov,this.engine.camera.far=l.far||1500,this.engine.camera.updateProjectionMatrix(),a.night){let h=this.flashlight=new Gs(16773853,0,45,.42,.45,1.6);h.castShadow=this.engine.quality!=="low",h.shadow.mapSize.set(1024,1024),h.shadow.bias=-5e-4,o.add(h),o.add(h.target)}else this.flashlight=null;n(.95,"Compiling shaders"),this.player.updateCamera(.016);try{await this.engine.renderer.compileAsync(o,this.engine.camera)}catch{}this.engine.render(.016);try{ye.setEnvironment(a.reverb||"outdoor"),ye.stopLoops();for(let[h,d]of a.ambience||[])ye.loop(h,d)}catch(h){console.warn("audio setup failed",h)}s&&!s.fresh?this.restore(s):this.startObjective(0),this.state="playing",n(1,"Ready")}disposeLevel(){this.enemies&&this.enemies.clear(),this.scene&&this.scene.traverse(e=>{e.geometry&&!e.isSkinnedMesh&&e.geometry.dispose?.()}),this.scene=null,this.sky=null,this.sun=null}bullet(e,t,i,n){let s=this.world.raycast(e,t,400),a=s?s.dist:400,o=this.enemies.raycast(e,t,a);if(o){let l=o.enemy;if(l.hostage)return this.effects.blood(o.point,t),this.failMission("You shot the hostage."),{point:o.point};let[c,h]=i.range,d=o.dist,u=d<=c?1:d>=h?0:1-(d-c)/(h-c),f=(i.damage[1]+(i.damage[0]-i.damage[1])*u)*(i.dmgMul||1),m=o.part==="head";f*=m?i.head:o.part==="leg"||o.part==="arm"?.8:1;let b=this.damageEnemy(l,f,m,t,o.point);return{enemy:l,head:m,killed:b,point:o.point}}if(s){this.effects.impact(s.point,s.normal,s.mat);let l=s.mat==="metal"?"metal":s.mat==="wood"?"wood":["dirt","sand","grass","ground"].includes(s.mat)?"dirt":"concrete";s.dist<60&&ye.play("hit_"+l,{pos:s.point,vol:.45,reverb:.1});let c=s.collider;return c.target&&!c.down&&(this.hitTarget(c),n)?{point:s.point,target:!0}:(c.explosive&&!c.exploded&&(c.hp-=i.damage[0],c.hp<=0&&this.explodeProp(c,n)),{point:s.point})}return null}damageEnemy(e,t,i,n,s,a){this.effects.blood(s,n),ye.play("hit_flesh",{pos:s,vol:.7,reverb:0});let o=e.takeDamage(t,n);return o&&!this.completed&&!this.failed&&(this.killCount++,this.player.stats.kills++,i&&this.player.stats.headshots++,this.hud.killfeed(a||(i?"HEADSHOT":"KILL"),i||a?150:100),ye.play("kill",{vol:.35,reverb:0}),this.player.perks.includes("scavenger")&&this.player.refillAmmo(.5),this.onEnemyKilled?.(e)),o}alertEnemies(e,t,i){this.enemies.alert(e,t,i)}hitTarget(e){e.down=!0,this.targetHits=(this.targetHits||0)+1,this.player.stats.targets=(this.player.stats.targets||0)+1,ye.play("hit_metal",{pos:e.mesh.position,vol:.9}),this.hud.hitmarker(!1,!0),e.noRay=!0,e.noCollide=!0;let t=e.mesh;t.userData.fall=0,this.fallingTargets=this.fallingTargets||[],this.fallingTargets.push(t),this.onTargetHit?.(e)}explodeProp(e,t=!0){e.exploded=!0,this.world.removeCollider(e),e.mesh&&(e.mesh.visible=!1),this.explode(e.mesh?e.mesh.position.clone():e.min.clone().add(e.max).multiplyScalar(.5),"frag",t,1.3)}spawnGrenade(e,t,i,n){let s=new tt,a=new Te(new yn(.045,12,10),new qe({color:e==="flash"?5593680:e==="smoke"?7371376:e==="c4"?7038544:3884336,roughness:.6,metalness:.4}));a.scale.set(1,1.25,1),s.add(a);let o=new Te(new Yt(.018,.018,.03,8),new qe({color:7829367,metalness:1,roughness:.3}));o.position.y=.06,s.add(o),s.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),s.position.copy(t),this.scene.add(s),this.grenades.push({type:e,mesh:s,pos:t.clone(),vel:i.clone(),fuse:e==="flash"?1.6:e==="smoke"?1.8:e==="c4"?2.5:3,byPlayer:n,stuck:!1,bounces:0})}updateGrenades(e){for(let t=this.grenades.length-1;t>=0;t--){let i=this.grenades[t];if(i.fuse-=e,!i.stuck){i.vel.y-=20*e*.75;let n=i.vel.length()*e;if(n>0){let s=i.vel.clone().normalize(),a=this.world.raycast(i.pos,s,n+.05);if(a)if(i.pos.copy(a.point).addScaledVector(a.normal,.05),i.type==="c4")i.stuck=!0,i.vel.set(0,0,0);else{let o=a.normal.clone().multiplyScalar(i.vel.dot(a.normal));i.vel.sub(o.multiplyScalar(1.45)).multiplyScalar(.55),i.bounces++<4&&i.vel.length()>1&&ye.play("bounce",{pos:i.pos,vol:.5}),a.normal.y>.5&&i.vel.length()<.8&&(i.vel.set(0,0,0),i.stuck=!0)}else i.pos.addScaledVector(i.vel,e)}i.mesh.position.copy(i.pos),i.mesh.rotation.x+=e*8,i.mesh.rotation.z+=e*5}!i.byPlayer&&i.pos.distanceTo(this.player.pos)<9&&this.hud.grenadeIndicator(i.pos),i.fuse<=0&&(this.scene.remove(i.mesh),this.grenades.splice(t,1),this.explode(i.pos,i.type,i.byPlayer))}}explode(e,t,i,n=1){let s=this.player;if(t==="smoke"){this.effects.smokeGrenade(e),ye.play("bounce",{pos:e,vol:.6,rate:.5});return}if(t==="flash"){ye.play("flashbang",{pos:e,vol:1.2,reverb:.5}),this.effects.flashLight(e.clone().add(sn(0,.5,0)),300,16777215,.15);for(let h=0;h<12;h++)this.effects.smoke.spawn(e,sn((Math.random()-.5)*2,Math.random(),(Math.random()-.5)*2),{life:2.5,size:1,grow:1,color:[.85,.85,.85],alpha:.35,drag:1.5,fade:2});this.enemies.flash(e,16);let l=s.eyePos(sn()),c=l.distanceTo(e);if(c<18&&this.world.lineOfSight(l,e.clone().add(sn(0,.2,0)))){let h=s.forward(sn()).dot(e.clone().sub(l).normalize()),d=(1-c/18)*(h>.3?1:.45);s.flash=Math.max(s.flash,d*1.6),ye.play("tinnitus",{vol:d*.5,reverb:0}),this.muffleT=d*4}this.alertEnemies(e,30),this.level.onExplosion&&this.level.onExplosion(e,t,i);return}this.effects.explosion(e,n),ye.play("explosion",{pos:e,vol:2*n,reverb:.8,lowpass:Math.max(1500,18e3-e.distanceTo(s.pos)*120)});let a=8*n;for(let l of this.enemies.list){if(!l.alive||l.hostage&&!this.hitHostages)continue;let c=l.pos.distanceTo(e);if(c<a&&this.world.lineOfSight(e.clone().add(sn(0,.4,0)),l.pos.clone().add(sn(0,1,0)))){let h=160*(1-c/a)+20;if(l.hostage){this.failMission("The hostage was killed.");continue}l.takeDamage(h,l.pos.clone().sub(e).normalize())&&i&&!this.completed&&!this.failed&&(this.killCount++,s.stats.kills++,this.hud.killfeed("GRENADE KILL",100),this.onEnemyKilled?.(l))}}let o=s.pos.distanceTo(e);o<a&&this.world.lineOfSight(e.clone().add(sn(0,.4,0)),s.eyePos(sn()))&&s.damage(120*(1-o/a)*(i?.8:1),e),s.shake=Math.min(1,s.shake+Math.max(0,1-o/30)),o<12&&(this.muffleT=Math.max(this.muffleT||0,(1-o/12)*2.5));for(let l of[...this.world.dynamic])l.explosive&&!l.exploded&&l.min.clone().add(l.max).multiplyScalar(.5).distanceTo(e)<a*.7&&(l.exploded=!0,setTimeout(()=>{l.exploded=!1,this.explodeProp(l,i)},150+Math.random()*250));this.alertEnemies(e,50),this.level.onExplosion&&this.level.onExplosion(e,t,i)}startObjective(e){this.objIdx=e;let t=this.objectives[e];if(!t){this.completeMission();return}t.t=0,t.progress=0,t.onStart?.(this,t),t.type==="interact"&&this.interactables.push({pos:t.pos,radius:t.radius||2,label:t.label||"Hold [F] to interact",time:t.time||2.5,progress:0,obj:t}),this.hud.setObjective(t.text,e>0),e>0&&(ye.play("objective",{vol:.5,reverb:0,bus:ye.music}),this._restoring||this.saveCheckpoint(!1))}updateObjective(e){let t=this.objectives[this.objIdx];if(!t)return;t.t+=e;let i=!1,n=this.player;switch(t.type){case"reach":i=Math.hypot(n.pos.x-t.pos.x,n.pos.z-t.pos.z)<(t.radius||4)&&(!t.cond||t.cond(this));break;case"kill":{let s=this.enemies.list.filter(a=>a.alive&&!a.hostage&&(!t.filter||t.filter(a))).length;t.left=s,i=s===0,this.hud.setObjectiveCount(s>0?`${s} remaining`:"");break}case"interact":i=t.done;break;case"survive":{let s=Math.max(0,t.time-t.t);this.hud.setObjectiveCount(`${Math.ceil(s)}s`),i=s<=0&&(!t.cond||t.cond(this));break}case"custom":i=t.check(this,e,t);break}i&&(t.onComplete?.(this,t),this.hud.setObjectiveCount(""),this.startObjective(this.objIdx+1))}waypoint(){let e=this.objectives[this.objIdx];if(!e||e.waypoint===!1)return null;if(e.pos)return e.pos;if(e.type==="kill"&&e.left!==void 0&&e.left<=3){let t=this.enemies.list.find(i=>i.alive&&!i.hostage&&(!e.filter||e.filter(i)));return t?t.pos.clone().add(sn(0,1.9,0)):null}return e.waypointPos||null}updateInteract(e){let t=this.player,i=null;for(let n=this.interactables.length-1;n>=0;n--){let s=this.interactables[n];t.pos.distanceTo(s.pos)<s.radius+.5&&Math.abs(t.pos.y-s.pos.y)<2?(i=s,this.input.act("interact")?(s.progress===0&&ye.play("beep",{vol:.3}),s.progress+=e/s.time,s.progress>=1&&(this.interactables.splice(n,1),ye.play("beep",{vol:.5,rate:1.5}),s.obj?(s.obj.done=!0,s.obj.onDone?.(this)):s.onDone?.(this),i=null)):s.progress=Math.max(0,s.progress-e*2)):s.progress=0}return this.hud.setInteract(i?i.label.replace("[F]","["+Js(this.input.binds.interact?.[0])+"]"):null,i?i.progress:0),!!i}saveCheckpoint(e){if(this.levelDef.noSave||this.failed||this.completed||!this.player.alive)return!1;let t=this.player,i={v:1,levelId:this.levelDef.id,levelName:this.levelDef.name,difficulty:this.diffName,loadout:this.loadout,objIdx:this.objIdx,objText:this.objectives[this.objIdx]?.text||"",pos:t.pos.toArray(),yaw:t.yaw,health:t.health,weapons:t.weapons.map(n=>({id:n.id,ammo:n.ammo,reserve:n.reserve})),cur:t.cur,grenades:{...t.grenades},stats:{...t.stats},levelTime:this.levelTime,dead:this.enemies.list.map((n,s)=>!n.alive&&!n.hostage?s:-1).filter(n=>n>=0),hostage:this.hostage?{follow:this.hostage.follow,pos:this.hostage.pos.toArray()}:null,savedAt:Date.now(),manual:!!e};return this.ui.writeSave(i),e?this.hud.toast("GAME SAVED",1.8):this.hud.pickupMsg("CHECKPOINT SAVED"),!0}restore(e){this._restoring=!0;let t=this.player;for(let i=0;i<e.objIdx&&i<this.objectives.length;i++){let n=this.objectives[i];if(n.type==="interact"){n.done=!0;try{n.onDone?.(this)}catch{}}n.restore&&n.restore(this)}this.startObjective(e.objIdx);for(let i of e.dead||[]){let n=this.enemies.list[i];!n||!n.alive||(n.alive=!1,n.state="dead",n.model.visible=!1,n.rifle&&(n.rifle.visible=!1))}if(e.hostage&&this.hostage&&(this.hostage.follow=e.hostage.follow,e.pos&&this.hostage.pos.fromArray(e.pos).add(new D(1.5,0,1.5))),e.pos)t.pos.fromArray(e.pos);else{let i=this.objectives[Math.max(0,e.objIdx-1)];i?.pos&&t.pos.set(i.pos.x,0,i.pos.z)}e.hostage?.follow&&this.hostage&&!e.pos&&this.hostage.pos.copy(t.pos).add(new D(1.5,0,1.5)),t.yaw=e.yaw||0,t.health=Math.min(t.maxHealth,e.health||t.maxHealth),e.weapons?.forEach((i,n)=>{t.weapons[n]&&(t.weapons[n].ammo=i.ammo,t.weapons[n].reserve=i.reserve)}),e.cur&&(t.weapons[t.cur].model.group.visible=!1,t.cur=e.cur,t.weapons[t.cur].model.group.visible=!0),e.grenades&&(t.grenades={...e.grenades}),e.stats&&(t.stats={...t.stats,...e.stats}),this.levelTime=e.levelTime||0,this._restoring=!1,this.hud.toast(e.manual?"SAVED GAME LOADED":"CHECKPOINT LOADED",2)}onPlayerDeath(){this.failed||this.completed||this.failMission(this.level.deathText||"You were killed in action.")}failMission(e){this.failed||this.completed||(this.failed=!0,this.finalStats=this.summary(),ye.play("fail",{vol:.6,reverb:0,bus:ye.music}),this.player.alive=!1,setTimeout(()=>{this.state="over",this.input.unlock(),this.ui.missionFailed(e,this.finalStats)},2200))}completeMission(){if(this.completed||this.failed)return;this.completed=!0,this.finalStats=this.summary();let e=nn.findIndex(i=>i.id===this.levelDef.id),t=nn[e+1];t?this.ui.writeSave({v:1,fresh:!0,levelId:t.id,levelName:t.name,difficulty:this.diffName,objIdx:0,objText:"Mission start",savedAt:Date.now()}):this.ui.clearSave(),ye.play("objective",{vol:.7,reverb:0,bus:ye.music}),this.hud.setObjective("MISSION COMPLETE",!0),setTimeout(()=>{this.state="over",this.input.unlock(),this.ui.missionComplete(this.finalStats)},2500)}summary(){let e=this.player.stats;return{time:this.levelTime,kills:e.kills,targets:e.targets||0,shots:e.shots,hits:e.hits,headshots:e.headshots,acc:e.shots?Math.min(100,Math.round(e.hits/e.shots*100)):0,level:this.levelDef,difficulty:this.diff.name}}update(e){if(this.state!=="playing"||this.paused)return;this.time+=e,this.levelTime+=e;let t=this.input;if(this.player.update(e,t),this.enemies.update(e),this.updateGrenades(e),!this.failed&&!this.completed){this.updateObjective(e);let o=this.updateInteract(e);this.pickups.update(e,o)}if(this.level.update?.(this,e),this.fallingTargets)for(let o of this.fallingTargets)o.userData.fall<1&&(o.userData.fall=Math.min(1,o.userData.fall+e*4),o.rotation.x=-o.userData.fall*Math.PI/2*.95);let i=this.engine.camera;if(this.effects.update(e,i),lm(this),ye.setListener(i),this.muffleT=Math.max(0,(this.muffleT||0)-e),ye.setMuffle(Math.min(1,this.muffleT/2)),this.flashlight){let o=this.flashlight;o.intensity=this.player.flashlightOn?60:0,o.position.copy(i.position).add(sn(.15,-.15,0).applyQuaternion(i.quaternion)),o.target.position.copy(i.position).add(this.player.forward(sn()).multiplyScalar(10)),o.target.updateMatrixWorld()}let n=this.engine.grade.uniforms,s=this.player;n.damage.value=Math.max(s.damageFlash*.8,1-s.health/s.maxHealth)*(s.alive,1),n.flash.value=Math.min(1,s.flash),n.aberr.value=s.damageFlash*1.5+s.shake*.6,n.nvg.value=s.nvg?1:0;let a=this.grade||{};n.vignette.value=(a.vignette??.35)+(s.w?.st.scope&&s.ads>.9,0),n.contrast.value=a.contrast??1.06,n.saturation.value=(a.saturation??1)*(s.alive?1:.3),n.tint.value.set(a.tint??16777215),s.nvg?this.engine.renderer.toneMappingExposure=(this.level.exposure||1)*2.2:this.engine.renderer.toneMappingExposure=this.level.exposure||1,this.hud.update(e)}};var mm=document.getElementById("game"),In=new Dc(mm),ji=new Ic(mm),tr=new Lc,Pt=new jc;In.setQuality(Pt.settings.quality,Pt.settings.renderScale);var ut=new Qc(In,ji,tr,Pt,Pt.settings);window.__game=ut;Pt.input=ji;ji.setBinds(Pt.settings.binds);function gm(r){let e=Pt.settings;ji.setBinds(e.binds),ye.setVolumes(e.master,e.music),(!r||In.quality!==e.quality||In.renderScale!==e.renderScale)&&(In.setQuality(e.quality,e.renderScale),ut.scene&&!r&&In.setScene(ut.scene))}Pt.onSettings=r=>gm(r);async function $c(r,e=null){ye.init(),ye.stopMusic();let t=nn.find(i=>i.id===r);tr.show(!1),Pt.loading(t),ut.state="loading";try{await ut.loadLevel(r,structuredClone(e?.loadout||Pt.loadout),e?.difficulty||Pt.settings.difficulty,(i,n)=>Pt.progressBar(i,n),e)}catch(i){console.error(i),Pt.progressBar(0,"Failed to load: "+i.message);return}ut.paused=!0,Pt.readyToStart(()=>{Pt.show(!1),tr.show(!0),ji.enabled=!0,ji.lock(),ut.paused=!1,tr.playIntro(t.intro),t.hint&&setTimeout(()=>tr.showHint(t.hint,9),1200)})}Pt.onDeploy=r=>$c(r);Pt.onContinue=r=>{r&&(Pt.selectedLevel=r.levelId,$c(r.levelId,r))};function xm(){ut.state!=="playing"||ut.paused||(ut.paused=!0,ji.enabled=!1,ji.unlock(),Pt.pause({resume:()=>{Pt.show(!1),ji.enabled=!0,ji.lock(),ut.paused=!1},restart:()=>$c(ut.levelDef.id),canSave:!ut.levelDef.noSave,hasSave:Pt.readSave()?.levelId===ut.levelDef.id&&!Pt.readSave()?.fresh,save:()=>ut.saveCheckpoint(!0),load:()=>Pt.onContinue(Pt.readSave()),quit:()=>{ut.state="menu",tr.show(!1),ye.stopLoops(),Pt.campaign()}}))}ji.onUnlock=()=>{ut.state==="playing"&&!ut.failed&&!ut.completed&&xm()};addEventListener("keydown",r=>{(r.code==="Escape"||r.code==="KeyP")&&ut.state==="playing"&&!ut.paused&&xm()});addEventListener("pointerdown",()=>{ye.init(),gm(!0),ut.state==="menu"&&!ye._music&&ye.startMusic("menu")},{once:!0});var pm=performance.now();function bm(r){if(requestAnimationFrame(bm),window.__manual)return;let e=Math.min(.05,(r-pm)/1e3);pm=r,ut.state==="playing"?(ut.paused||(ut.update(e),ji.endFrame()),In.render(e)):ut.state==="over"&&ut.scene&&In.render(e)}requestAnimationFrame(bm);tr.show(!1);Pt.main();document.getElementById("boot")?.remove();var Qr=new URLSearchParams(location.hash.slice(1));Qr.get("q")&&(Pt.settings.quality=Qr.get("q"),In.setQuality(Qr.get("q"),1));Qr.get("play")&&$c(Qr.get("play")).then(()=>document.querySelector(".go")?.click());Qr.get("test")&&(window.__manual=!0,window.__step=(r=1,e=1/30,t=!0)=>{for(let i=0;i<r;i++)ut.state==="playing"&&!ut.paused&&(ut.update(e),ji.endFrame());return t&&In.render(e),ut.state});})();

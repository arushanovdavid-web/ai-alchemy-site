var co="170";var vl=0,No=1,yl=2;var Oc=1,Ml=2,pn=3,Fn=0,Te=1,qe=2,Dn=0,wi=1,Fo=2,Oo=3,Bo=4,Sl=5,Yn=100,bl=101,wl=102,El=103,Al=104,Tl=200,Cl=201,Rl=202,Il=203,qr=204,Yr=205,Pl=206,Ll=207,Ul=208,Dl=209,Nl=210,Fl=211,Ol=212,Bl=213,zl=214,Zr=0,Jr=1,$r=2,Ci=3,Kr=4,Qr=5,jr=6,ta=7,Bc=0,kl=1,Vl=2,Nn=0,Hl=1,Gl=2,Wl=3,Xl=4,ql=5,Yl=6,Zl=7;var zc=300,Ri=301,Ii=302,ea=303,na=304,rr=306,ia=1e3,$n=1001,sa=1002,Je=1003,Jl=1004;var ls=1005;var tn=1006,xr=1007;var Kn=1008;var yn=1009,kc=1010,Vc=1011,ts=1012,lo=1013,Qn=1014,gn=1015,ns=1016,ho=1017,uo=1018,Pi=1020,Hc=35902,Gc=1021,Wc=1022,Ze=1023,Xc=1024,qc=1025,Ei=1026,Li=1027,Yc=1028,fo=1029,Zc=1030,po=1031;var mo=1033,Ls=33776,Us=33777,Ds=33778,Ns=33779,ra=35840,aa=35841,oa=35842,ca=35843,la=36196,ha=37492,ua=37496,da=37808,fa=37809,pa=37810,ma=37811,ga=37812,_a=37813,xa=37814,va=37815,ya=37816,Ma=37817,Sa=37818,ba=37819,wa=37820,Ea=37821,Fs=36492,Aa=36494,Ta=36495,Jc=36283,Ca=36284,Ra=36285,Ia=36286;var Os=2300,Pa=2301,vr=2302,zo=2400,ko=2401,Vo=2402;var $l=3200,Kl=3201;var Ql=0,jl=1,Un="",Oe="srgb",Oi="srgb-linear",ar="linear",Qt="srgb";var ci=7680;var Ho=519,th=512,eh=513,nh=514,$c=515,ih=516,sh=517,rh=518,ah=519,La=35044;var Go="300 es",_n=2e3,Bs=2001,On=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wo=1234567,Ki=Math.PI/180,es=180/Math.PI;function xn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function go(i,t){return(i%t+t)%t}function oh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ch(i,t,e){return i!==t?(e-i)/(t-i):0}function Qi(i,t,e){return(1-e)*i+e*t}function lh(i,t,e,n){return Qi(i,t,1-Math.exp(-e*n))}function hh(i,t=1){return t-Math.abs(go(i,t*2)-t)}function uh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function dh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function fh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ph(i,t){return i+Math.random()*(t-i)}function mh(i){return i*(.5-Math.random())}function gh(i){i!==void 0&&(Wo=i);let t=Wo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _h(i){return i*Ki}function xh(i){return i*es}function vh(i){return(i&i-1)===0&&i!==0}function yh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sh(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),f=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*d,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*m,o*l);break;case"YXY":i.set(c*m,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*m,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Kt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Kc={DEG2RAD:Ki,RAD2DEG:es,generateUUID:xn,clamp:me,euclideanModulo:go,mapLinear:oh,inverseLerp:ch,lerp:Qi,damp:lh,pingpong:hh,smoothstep:uh,smootherstep:dh,randInt:fh,randFloat:ph,randFloatSpread:mh,seededRandom:gh,degToRad:_h,radToDeg:xh,isPowerOfTwo:vh,ceilPowerOfTwo:yh,floorPowerOfTwo:Mh,setQuaternionFromProperEuler:Sh,normalize:Kt,denormalize:Ye},Bt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],x=s[0],p=s[3],u=s[6],E=s[1],w=s[4],M=s[7],F=s[2],A=s[5],T=s[8];return r[0]=a*x+o*E+c*F,r[3]=a*p+o*w+c*A,r[6]=a*u+o*M+c*T,r[1]=l*x+h*E+d*F,r[4]=l*p+h*w+d*A,r[7]=l*u+h*M+d*T,r[2]=f*x+m*E+g*F,r[5]=f*p+m*w+g*A,r[8]=f*u+m*M+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,f=o*c-h*r,m=l*r-a*c,g=e*d+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*l-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=m*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(yr.makeScale(t,e)),this}rotate(t){return this.premultiply(yr.makeRotation(-t)),this}translate(t,e){return this.premultiply(yr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},yr=new Dt;function Qc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bh(){let i=zs("canvas");return i.style.display="block",i}var Xo={};function Ji(i){i in Xo||(Xo[i]=!0,console.warn(i))}function wh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Eh(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ah(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Vt={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Qt&&(i.r=vn(i.r),i.g=vn(i.g),i.b=vn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Qt&&(i.r=Ai(i.r),i.g=Ai(i.g),i.b=Ai(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Un?ar:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qo=[.64,.33,.3,.6,.15,.06],Yo=[.2126,.7152,.0722],Zo=[.3127,.329],Jo=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$o=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Vt.define({[Oi]:{primaries:qo,whitePoint:Zo,transfer:ar,toXYZ:Jo,fromXYZ:$o,luminanceCoefficients:Yo,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:qo,whitePoint:Zo,transfer:Qt,toXYZ:Jo,fromXYZ:$o,luminanceCoefficients:Yo,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}});var li,Ua=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{li===void 0&&(li=zs("canvas")),li.width=t.width,li.height=t.height;let n=li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vn(e[n]/255)*255):e[n]=vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Th=0,ks=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=xn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Mr(s[a].image)):r.push(Mr(s[a]))}else r=Mr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Mr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ua.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ch=0,Be=class i extends On{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$n,s=$n,r=tn,a=Kn,o=Ze,c=yn,l=i.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=xn(),this.name="",this.source=new ks(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ia:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ia:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=zc;Be.DEFAULT_ANISOTROPY=1;var jt=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],m=c[5],g=c[9],x=c[2],p=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,M=(m+1)/2,F=(u+1)/2,A=(h+f)/4,T=(d+x)/4,U=(g+p)/4;return w>M&&w>F?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=A/n,r=T/n):M>F?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=U/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=T/r,s=U/r),this.set(n,s,r,e),this}let E=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(d-x)/E,this.z=(f-h)/E,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Da=class extends On{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Be(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ks(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mn=class extends Da{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Vs=class extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Na=class extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],f=r[a+0],m=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=x;return}if(d!==x||c!==f||l!==m||h!==g){let p=1-o,u=c*f+l*m+h*g+d*x,E=u>=0?1:-1,w=1-u*u;if(w>Number.EPSILON){let F=Math.sqrt(w),A=Math.atan2(F,u*E);p=Math.sin(p*A)/F,o=Math.sin(o*A)/F}let M=o*E;if(c=c*p+f*M,l=l*p+m*M,h=h*p+g*M,d=d*p+x*M,p===1-o){let F=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=F,l*=F,h*=F,d*=F}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*m-l*f,t[e+1]=c*g+h*f+l*d-o*m,t[e+2]=l*g+h*m+o*f-c*d,t[e+3]=h*g-o*d-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),f=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"YZX":this._x=f*h*d+l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d-f*m*g;break;case"XZY":this._x=f*h*d-l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ko.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ko.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sr.copy(this).projectOnVector(t),this.sub(Sr)}reflect(t){return this.sub(Sr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sr=new N,Ko=new Bn,ze=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ge):Ge.fromBufferAttribute(r,a),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hs.copy(n.boundingBox)),hs.applyMatrix4(t.matrixWorld),this.union(hs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xi),us.subVectors(this.max,Xi),hi.subVectors(t.a,Xi),ui.subVectors(t.b,Xi),di.subVectors(t.c,Xi),Tn.subVectors(ui,hi),Cn.subVectors(di,ui),kn.subVectors(hi,di);let e=[0,-Tn.z,Tn.y,0,-Cn.z,Cn.y,0,-kn.z,kn.y,Tn.z,0,-Tn.x,Cn.z,0,-Cn.x,kn.z,0,-kn.x,-Tn.y,Tn.x,0,-Cn.y,Cn.x,0,-kn.y,kn.x,0];return!br(e,hi,ui,di,us)||(e=[1,0,0,0,1,0,0,0,1],!br(e,hi,ui,di,us))?!1:(ds.crossVectors(Tn,Cn),e=[ds.x,ds.y,ds.z],br(e,hi,ui,di,us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ln=[new N,new N,new N,new N,new N,new N,new N,new N],Ge=new N,hs=new ze,hi=new N,ui=new N,di=new N,Tn=new N,Cn=new N,kn=new N,Xi=new N,us=new N,ds=new N,Vn=new N;function br(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vn.fromArray(i,r);let o=s.x*Math.abs(Vn.x)+s.y*Math.abs(Vn.y)+s.z*Math.abs(Vn.z),c=t.dot(Vn),l=e.dot(Vn),h=n.dot(Vn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Rh=new ze,qi=new N,wr=new N,Sn=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Rh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qi.subVectors(t,this.center);let e=qi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(qi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qi.copy(t.center).add(wr)),this.expandByPoint(qi.copy(t.center).sub(wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},hn=new N,Er=new N,fs=new N,Rn=new N,Ar=new N,ps=new N,Tr=new N,Fa=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hn.copy(this.origin).addScaledVector(this.direction,e),hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Er.copy(t).add(e).multiplyScalar(.5),fs.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(Er);let r=t.distanceTo(e)*.5,a=-this.direction.dot(fs),o=Rn.dot(this.direction),c=-Rn.dot(fs),l=Rn.lengthSq(),h=Math.abs(1-a*a),d,f,m,g;if(h>0)if(d=a*c-o,f=a*o-c,g=r*h,d>=0)if(f>=-g)if(f<=g){let x=1/h;d*=x,f*=x,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Er).addScaledVector(fs,f),m}intersectSphere(t,e){hn.subVectors(t.center,this.origin);let n=hn.dot(this.direction),s=hn.dot(hn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,n,s,r){Ar.subVectors(e,t),ps.subVectors(n,t),Tr.crossVectors(Ar,ps);let a=this.direction.dot(Tr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,t);let c=o*this.direction.dot(ps.crossVectors(Rn,ps));if(c<0)return null;let l=o*this.direction.dot(Ar.cross(Rn));if(l<0||c+l>a)return null;let h=-o*Rn.dot(Tr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class i{constructor(t,e,n,s,r,a,o,c,l,h,d,f,m,g,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,f,m,g,x,p)}set(t,e,n,s,r,a,o,c,l,h,d,f,m,g,x,p){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/fi.setFromMatrixColumn(t,0).length(),r=1/fi.setFromMatrixColumn(t,1).length(),a=1/fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*h,m=a*d,g=o*h,x=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=m+g*l,e[5]=f-x*l,e[9]=-o*c,e[2]=x-f*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*h,m=c*d,g=l*h,x=l*d;e[0]=f+x*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=x+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*h,m=c*d,g=l*h,x=l*d;e[0]=f-x*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*h,m=a*d,g=o*h,x=o*d;e[0]=c*h,e[4]=g*l-m,e[8]=f*l+x,e[1]=c*d,e[5]=x*l+f,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,m=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=x-f*d,e[8]=g*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*d+g,e[10]=f-x*d}else if(t.order==="XZY"){let f=a*c,m=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+x,e[5]=a*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*h,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ih,t,Ph)}lookAt(t,e,n){let s=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),In.crossVectors(n,Ie),In.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),In.crossVectors(n,Ie)),In.normalize(),ms.crossVectors(Ie,In),s[0]=In.x,s[4]=ms.x,s[8]=Ie.x,s[1]=In.y,s[5]=ms.y,s[9]=Ie.y,s[2]=In.z,s[6]=ms.z,s[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],x=n[6],p=n[10],u=n[14],E=n[3],w=n[7],M=n[11],F=n[15],A=s[0],T=s[4],U=s[8],S=s[12],y=s[1],C=s[5],V=s[9],O=s[13],k=s[2],$=s[6],W=s[10],tt=s[14],H=s[3],st=s[7],dt=s[11],Mt=s[15];return r[0]=a*A+o*y+c*k+l*H,r[4]=a*T+o*C+c*$+l*st,r[8]=a*U+o*V+c*W+l*dt,r[12]=a*S+o*O+c*tt+l*Mt,r[1]=h*A+d*y+f*k+m*H,r[5]=h*T+d*C+f*$+m*st,r[9]=h*U+d*V+f*W+m*dt,r[13]=h*S+d*O+f*tt+m*Mt,r[2]=g*A+x*y+p*k+u*H,r[6]=g*T+x*C+p*$+u*st,r[10]=g*U+x*V+p*W+u*dt,r[14]=g*S+x*O+p*tt+u*Mt,r[3]=E*A+w*y+M*k+F*H,r[7]=E*T+w*C+M*$+F*st,r[11]=E*U+w*V+M*W+F*dt,r[15]=E*S+w*O+M*tt+F*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],m=t[14],g=t[3],x=t[7],p=t[11],u=t[15];return g*(+r*c*d-s*l*d-r*o*f+n*l*f+s*o*m-n*c*m)+x*(+e*c*m-e*l*f+r*a*f-s*a*m+s*l*h-r*c*h)+p*(+e*l*d-e*o*m-r*a*d+n*a*m+r*o*h-n*l*h)+u*(-s*o*h-e*c*d+e*o*f+s*a*d-n*a*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],m=t[11],g=t[12],x=t[13],p=t[14],u=t[15],E=d*p*l-x*f*l+x*c*m-o*p*m-d*c*u+o*f*u,w=g*f*l-h*p*l-g*c*m+a*p*m+h*c*u-a*f*u,M=h*x*l-g*d*l+g*o*m-a*x*m-h*o*u+a*d*u,F=g*d*c-h*x*c-g*o*f+a*x*f+h*o*p-a*d*p,A=e*E+n*w+s*M+r*F;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return t[0]=E*T,t[1]=(x*f*r-d*p*r-x*s*m+n*p*m+d*s*u-n*f*u)*T,t[2]=(o*p*r-x*c*r+x*s*l-n*p*l-o*s*u+n*c*u)*T,t[3]=(d*c*r-o*f*r-d*s*l+n*f*l+o*s*m-n*c*m)*T,t[4]=w*T,t[5]=(h*p*r-g*f*r+g*s*m-e*p*m-h*s*u+e*f*u)*T,t[6]=(g*c*r-a*p*r-g*s*l+e*p*l+a*s*u-e*c*u)*T,t[7]=(a*f*r-h*c*r+h*s*l-e*f*l-a*s*m+e*c*m)*T,t[8]=M*T,t[9]=(g*d*r-h*x*r-g*n*m+e*x*m+h*n*u-e*d*u)*T,t[10]=(a*x*r-g*o*r+g*n*l-e*x*l-a*n*u+e*o*u)*T,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*m-e*o*m)*T,t[12]=F*T,t[13]=(h*x*s-g*d*s+g*n*f-e*x*f-h*n*p+e*d*p)*T,t[14]=(g*o*s-a*x*s-g*n*c+e*x*c+a*n*p-e*o*p)*T,t[15]=(a*d*s-h*o*s+h*n*c-e*d*c-a*n*f+e*o*f)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,f=r*l,m=r*h,g=r*d,x=a*h,p=a*d,u=o*d,E=c*l,w=c*h,M=c*d,F=n.x,A=n.y,T=n.z;return s[0]=(1-(x+u))*F,s[1]=(m+M)*F,s[2]=(g-w)*F,s[3]=0,s[4]=(m-M)*A,s[5]=(1-(f+u))*A,s[6]=(p+E)*A,s[7]=0,s[8]=(g+w)*T,s[9]=(p-E)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=fi.set(s[0],s[1],s[2]).length(),a=fi.set(s[4],s[5],s[6]).length(),o=fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],We.copy(this);let l=1/r,h=1/a,d=1/o;return We.elements[0]*=l,We.elements[1]*=l,We.elements[2]*=l,We.elements[4]*=h,We.elements[5]*=h,We.elements[6]*=h,We.elements[8]*=d,We.elements[9]*=d,We.elements[10]*=d,e.setFromRotationMatrix(We),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=_n){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,g;if(o===_n)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Bs)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=_n){let c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(a-r),f=(e+t)*l,m=(n+s)*h,g,x;if(o===_n)g=(a+r)*d,x=-2*d;else if(o===Bs)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},fi=new N,We=new oe,Ih=new N(0,0,0),Ph=new N(1,1,1),In=new N,ms=new N,Ie=new N,Qo=new oe,jo=new Bn,bn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jo.setFromEuler(this),this.setFromQuaternion(jo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var Hs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Lh=0,tc=new N,pi=new Bn,un=new oe,gs=new N,Yi=new N,Uh=new N,Dh=new Bn,ec=new N(1,0,0),nc=new N(0,1,0),ic=new N(0,0,1),sc={type:"added"},Nh={type:"removed"},mi={type:"childadded",child:null},Cr={type:"childremoved",child:null},$e=class i extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new bn,n=new Bn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Dt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.multiply(pi),this}rotateOnWorldAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.premultiply(pi),this}rotateX(t){return this.rotateOnAxis(ec,t)}rotateY(t){return this.rotateOnAxis(nc,t)}rotateZ(t){return this.rotateOnAxis(ic,t)}translateOnAxis(t,e){return tc.copy(t).applyQuaternion(this.quaternion),this.position.add(tc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ec,t)}translateY(t){return this.translateOnAxis(nc,t)}translateZ(t){return this.translateOnAxis(ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gs.copy(t):gs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Yi,gs,this.up):un.lookAt(gs,Yi,this.up),this.quaternion.setFromRotationMatrix(un),s&&(un.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(un),this.quaternion.premultiply(pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sc),mi.child=t,this.dispatchEvent(mi),mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nh),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sc),mi.child=t,this.dispatchEvent(mi),mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,t,Uh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,Dh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};$e.DEFAULT_UP=new N(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xe=new N,dn=new N,Rr=new N,fn=new N,gi=new N,_i=new N,rc=new N,Ir=new N,Pr=new N,Lr=new N,Ur=new jt,Dr=new jt,Nr=new jt,Zn=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xe.subVectors(t,e),s.cross(Xe);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xe.subVectors(s,e),dn.subVectors(n,e),Rr.subVectors(t,e);let a=Xe.dot(Xe),o=Xe.dot(dn),c=Xe.dot(Rr),l=dn.dot(dn),h=dn.dot(Rr),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fn.x),c.addScaledVector(a,fn.y),c.addScaledVector(o,fn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ur.setScalar(0),Dr.setScalar(0),Nr.setScalar(0),Ur.fromBufferAttribute(t,e),Dr.fromBufferAttribute(t,n),Nr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ur,r.x),a.addScaledVector(Dr,r.y),a.addScaledVector(Nr,r.z),a}static isFrontFacing(t,e,n,s){return Xe.subVectors(n,e),dn.subVectors(t,e),Xe.cross(dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Xe.cross(dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;gi.subVectors(s,n),_i.subVectors(r,n),Ir.subVectors(t,n);let c=gi.dot(Ir),l=_i.dot(Ir);if(c<=0&&l<=0)return e.copy(n);Pr.subVectors(t,s);let h=gi.dot(Pr),d=_i.dot(Pr);if(h>=0&&d<=h)return e.copy(s);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(gi,a);Lr.subVectors(t,r);let m=gi.dot(Lr),g=_i.dot(Lr);if(g>=0&&m<=g)return e.copy(r);let x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(_i,o);let p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return rc.subVectors(r,s),o=(d-h)/(d-h+(m-g)),e.copy(s).addScaledVector(rc,o);let u=1/(p+x+f);return a=x*u,o=f*u,e.copy(n).addScaledVector(gi,a).addScaledVector(_i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Fr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Vt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Vt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Vt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Vt.workingColorSpace){if(t=go(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Fr(a,r,t+1/3),this.g=Fr(a,r,t),this.b=Fr(a,r,t-1/3)}return Vt.toWorkingColorSpace(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let n=jc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vn(t.r),this.g=vn(t.g),this.b=vn(t.b),this}copyLinearToSRGB(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return Vt.fromWorkingColorSpace(Me.copy(this),t),Math.round(me(Me.r*255,0,255))*65536+Math.round(me(Me.g*255,0,255))*256+Math.round(me(Me.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Vt.workingColorSpace){Vt.fromWorkingColorSpace(Me.copy(this),e);let n=Me.r,s=Me.g,r=Me.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=Oe){Vt.fromWorkingColorSpace(Me.copy(this),t);let e=Me.r,n=Me.g,s=Me.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(_s);let n=Qi(Pn.h,_s.h,e),s=Qi(Pn.s,_s.s,e),r=Qi(Pn.l,_s.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Me=new Zt;Zt.NAMES=jc;var Fh=0,Ui=class extends On{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=xn(),this.name="",this.blending=wi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qr,this.blendDst=Yr,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qr&&(n.blendSrc=this.blendSrc),this.blendDst!==Yr&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ho&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Di=class extends Ui{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var le=new N,xs=new Bt,Le=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=La,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xs.fromBufferAttribute(this,e),xs.applyMatrix3(t),this.setXY(e,xs.x,xs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ye(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ye(e,this.array)),e}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ye(e,this.array)),e}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ye(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ye(e,this.array)),e}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),s=Kt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==La&&(t.usage=this.usage),t}};var Gs=class extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ws=class extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}},Oh=0,Fe=new oe,Or=new $e,xi=new N,Pe=new ze,Zi=new ze,fe=new N,Ue=class i extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qc(t)?Ws:Gs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,n){return Fe.makeTranslation(t,e,n),this.applyMatrix4(Fe),this}scale(t,e,n){return Fe.makeScale(t,e,n),this.applyMatrix4(Fe),this}lookAt(t){return Or.lookAt(t),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ce(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ze);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Pe.setFromBufferAttribute(r),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,Pe.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,Pe.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(Pe.min),this.boundingBox.expandByPoint(Pe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(Pe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Zi.setFromBufferAttribute(o),this.morphTargetsRelative?(fe.addVectors(Pe.min,Zi.min),Pe.expandByPoint(fe),fe.addVectors(Pe.max,Zi.max),Pe.expandByPoint(fe)):(Pe.expandByPoint(Zi.min),Pe.expandByPoint(Zi.max))}Pe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(fe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)fe.fromBufferAttribute(o,l),c&&(xi.fromBufferAttribute(t,l),fe.add(xi)),s=Math.max(s,n.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<n.count;U++)o[U]=new N,c[U]=new N;let l=new N,h=new N,d=new N,f=new Bt,m=new Bt,g=new Bt,x=new N,p=new N;function u(U,S,y){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,y),f.fromBufferAttribute(r,U),m.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(l),d.sub(l),m.sub(f),g.sub(f);let C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(C),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(C),o[U].add(x),o[S].add(x),o[y].add(x),c[U].add(p),c[S].add(p),c[y].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let U=0,S=E.length;U<S;++U){let y=E[U],C=y.start,V=y.count;for(let O=C,k=C+V;O<k;O+=3)u(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let w=new N,M=new N,F=new N,A=new N;function T(U){F.fromBufferAttribute(s,U),A.copy(F);let S=o[U];w.copy(S),w.sub(F.multiplyScalar(F.dot(S))).normalize(),M.crossVectors(A,S);let C=M.dot(c[U])<0?-1:1;a.setXYZW(U,w.x,w.y,w.z,C)}for(let U=0,S=E.length;U<S;++U){let y=E[U],C=y.start,V=y.count;for(let O=C,k=C+V;O<k;O+=3)T(t.getX(O+0)),T(t.getX(O+1)),T(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,d=new N;if(t)for(let f=0,m=t.count;f<m;f+=3){let g=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h),m=0,g=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*h;for(let u=0;u<h;u++)f[g++]=l[m++]}return new Le(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let f=l[h],m=t(f,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let m=l[d];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ac=new oe,Hn=new Fa,vs=new Sn,oc=new N,ys=new N,Ms=new N,Ss=new N,Br=new N,bs=new N,cc=new N,ws=new N,pe=class extends $e{constructor(t=new Ue,e=new Di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){bs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Br.fromBufferAttribute(d,t),a?bs.addScaledVector(Br,h):bs.addScaledVector(Br.sub(e),h))}e.add(bs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(r),Hn.copy(t.ray).recast(t.near),!(vs.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(vs,oc)===null||Hn.origin.distanceToSquared(oc)>(t.far-t.near)**2))&&(ac.copy(r).invert(),Hn.copy(t.ray).applyMatrix4(ac),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let p=f[g],u=a[p.materialIndex],E=Math.max(p.start,m.start),w=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,F=w;M<F;M+=3){let A=o.getX(M),T=o.getX(M+1),U=o.getX(M+2);s=Es(this,u,t,n,l,h,d,A,T,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){let E=o.getX(p),w=o.getX(p+1),M=o.getX(p+2);s=Es(this,a,t,n,l,h,d,E,w,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let p=f[g],u=a[p.materialIndex],E=Math.max(p.start,m.start),w=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,F=w;M<F;M+=3){let A=M,T=M+1,U=M+2;s=Es(this,u,t,n,l,h,d,A,T,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){let E=p,w=p+1,M=p+2;s=Es(this,a,t,n,l,h,d,E,w,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Bh(i,t,e,n,s,r,a,o){let c;if(t.side===Te?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Fn,o),c===null)return null;ws.copy(o),ws.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ws);return l<e.near||l>e.far?null:{distance:l,point:ws.clone(),object:i}}function Es(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ys),i.getVertexPosition(c,Ms),i.getVertexPosition(l,Ss);let h=Bh(i,t,e,n,ys,Ms,Ss,cc);if(h){let d=new N;Zn.getBarycoord(cc,ys,Ms,Ss,d),s&&(h.uv=Zn.getInterpolatedAttribute(s,o,c,l,d,new Bt)),r&&(h.uv1=Zn.getInterpolatedAttribute(r,o,c,l,d,new Bt)),a&&(h.normal=Zn.getInterpolatedAttribute(a,o,c,l,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new N,materialIndex:0};Zn.getNormal(ys,Ms,Ss,f.normal),h.face=f,h.barycoord=d}return h}var jn=class i extends Ue{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function g(x,p,u,E,w,M,F,A,T,U,S){let y=M/T,C=F/U,V=M/2,O=F/2,k=A/2,$=T+1,W=U+1,tt=0,H=0,st=new N;for(let dt=0;dt<W;dt++){let Mt=dt*C-O;for(let Pt=0;Pt<$;Pt++){let Jt=Pt*y-V;st[x]=Jt*E,st[p]=Mt*w,st[u]=k,l.push(st.x,st.y,st.z),st[x]=0,st[p]=0,st[u]=A>0?1:-1,h.push(st.x,st.y,st.z),d.push(Pt/T),d.push(1-dt/U),tt+=1}}for(let dt=0;dt<U;dt++)for(let Mt=0;Mt<T;Mt++){let Pt=f+Mt+$*dt,Jt=f+Mt+$*(dt+1),q=f+(Mt+1)+$*(dt+1),X=f+(Mt+1)+$*dt;c.push(Pt,Jt,X),c.push(Jt,q,X),H+=6}o.addGroup(m,H,S),m+=H,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ni(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function be(i){let t={};for(let e=0;e<i.length;e++){let n=Ni(i[e]);for(let s in n)t[s]=n[s]}return t}function zh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function tl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Vt.workingColorSpace}var or={clone:Ni,merge:be},kh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ke=class extends Ui{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kh,this.fragmentShader=Vh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ni(t.uniforms),this.uniformsGroups=zh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Xs=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=_n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ln=new N,lc=new Bt,hc=new Bt,we=class extends Xs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ki*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z)}getViewSize(t,e){return this.getViewBounds(t,lc,hc),e.subVectors(hc,lc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ki*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vi=-90,yi=1,Oa=class extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new we(vi,yi,t,e);s.layers=this.layers,this.add(s);let r=new we(vi,yi,t,e);r.layers=this.layers,this.add(r);let a=new we(vi,yi,t,e);a.layers=this.layers,this.add(a);let o=new we(vi,yi,t,e);o.layers=this.layers,this.add(o);let c=new we(vi,yi,t,e);c.layers=this.layers,this.add(c);let l=new we(vi,yi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},qs=class extends Be{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ri,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ba=class extends Mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new qs(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new jn(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:Dn});r.uniforms.tEquirect.value=e;let a=new pe(s,r),o=e.minFilter;return e.minFilter===Kn&&(e.minFilter=tn),new Oa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},zr=new N,Hh=new N,Gh=new Dt,mn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=zr.subVectors(n,e).cross(Hh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(zr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Gh.getNormalMatrix(t),s=this.coplanarPoint(zr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gn=new Sn,As=new N,Ys=class{constructor(t=new mn,e=new mn,n=new mn,s=new mn,r=new mn,a=new mn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],d=s[6],f=s[7],m=s[8],g=s[9],x=s[10],p=s[11],u=s[12],E=s[13],w=s[14],M=s[15];if(n[0].setComponents(c-r,f-l,p-m,M-u).normalize(),n[1].setComponents(c+r,f+l,p+m,M+u).normalize(),n[2].setComponents(c+a,f+h,p+g,M+E).normalize(),n[3].setComponents(c-a,f-h,p-g,M-E).normalize(),n[4].setComponents(c-o,f-d,p-x,M-w).normalize(),e===_n)n[5].setComponents(c+o,f+d,p+x,M+w).normalize();else if(e===Bs)n[5].setComponents(o,d,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(As.x=s.normal.x>0?t.max.x:t.min.x,As.y=s.normal.y>0?t.max.y:t.min.y,As.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(As)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function el(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wh(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){let g=d[f],x=d[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){let x=d[m];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Zs=class i extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,f=e/c,m=[],g=[],x=[],p=[];for(let u=0;u<h;u++){let E=u*f-a;for(let w=0;w<l;w++){let M=w*d-r;g.push(M,-E,0),x.push(0,0,1),p.push(w/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let E=0;E<o;E++){let w=E+l*u,M=E+l*(u+1),F=E+1+l*(u+1),A=E+1+l*u;m.push(w,M,A),m.push(M,F,A)}this.setIndex(m),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Xh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qh=`#ifdef USE_ALPHAHASH
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
#endif`,Yh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kh=`#ifdef USE_AOMAP
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
#endif`,Qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jh=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,su=`#ifdef USE_IRIDESCENCE
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
#endif`,ru=`#ifdef USE_BUMPMAP
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
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pu=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,mu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gu=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_u=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Su=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eu=`#ifdef USE_ENVMAP
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
#endif`,Au=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ru=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lu=`#ifdef USE_GRADIENTMAP
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
}`,Uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fu=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Ou=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ku=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Gu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wu=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ju=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$u=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ku=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ju=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,td=`#if defined( USE_POINTS_UV )
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
#endif`,ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,id=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ad=`#ifdef USE_MORPHTARGETS
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
#endif`,od=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ld=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fd=`#ifdef USE_NORMALMAP
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
#endif`,pd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,md=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_d=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ed=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Td=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Cd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Rd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Id=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pd=`#ifdef USE_SKINNING
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
#endif`,Ld=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ud=`#ifdef USE_SKINNING
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
#endif`,Dd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Od=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bd=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zd=`#ifdef USE_TRANSMISSION
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
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xd=`uniform sampler2D t2D;
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
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`#include <common>
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
}`,Kd=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qd=`#define DISTANCE
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
}`,jd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`uniform float scale;
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
}`,sf=`uniform vec3 diffuse;
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
}`,rf=`#include <common>
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
}`,af=`uniform vec3 diffuse;
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
}`,of=`#define LAMBERT
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
}`,cf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,lf=`#define MATCAP
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
}`,hf=`#define MATCAP
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
}`,uf=`#define NORMAL
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
}`,df=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ff=`#define PHONG
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
}`,pf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,mf=`#define STANDARD
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
}`,gf=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,_f=`#define TOON
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
}`,xf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,vf=`uniform float size;
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
}`,yf=`uniform vec3 diffuse;
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
}`,Mf=`#include <common>
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
}`,Sf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,bf=`uniform float rotation;
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
}`,wf=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:Xh,alphahash_pars_fragment:qh,alphamap_fragment:Yh,alphamap_pars_fragment:Zh,alphatest_fragment:Jh,alphatest_pars_fragment:$h,aomap_fragment:Kh,aomap_pars_fragment:Qh,batching_pars_vertex:jh,batching_vertex:tu,begin_vertex:eu,beginnormal_vertex:nu,bsdfs:iu,iridescence_fragment:su,bumpmap_pars_fragment:ru,clipping_planes_fragment:au,clipping_planes_pars_fragment:ou,clipping_planes_pars_vertex:cu,clipping_planes_vertex:lu,color_fragment:hu,color_pars_fragment:uu,color_pars_vertex:du,color_vertex:fu,common:pu,cube_uv_reflection_fragment:mu,defaultnormal_vertex:gu,displacementmap_pars_vertex:_u,displacementmap_vertex:xu,emissivemap_fragment:vu,emissivemap_pars_fragment:yu,colorspace_fragment:Mu,colorspace_pars_fragment:Su,envmap_fragment:bu,envmap_common_pars_fragment:wu,envmap_pars_fragment:Eu,envmap_pars_vertex:Au,envmap_physical_pars_fragment:Ou,envmap_vertex:Tu,fog_vertex:Cu,fog_pars_vertex:Ru,fog_fragment:Iu,fog_pars_fragment:Pu,gradientmap_pars_fragment:Lu,lightmap_pars_fragment:Uu,lights_lambert_fragment:Du,lights_lambert_pars_fragment:Nu,lights_pars_begin:Fu,lights_toon_fragment:Bu,lights_toon_pars_fragment:zu,lights_phong_fragment:ku,lights_phong_pars_fragment:Vu,lights_physical_fragment:Hu,lights_physical_pars_fragment:Gu,lights_fragment_begin:Wu,lights_fragment_maps:Xu,lights_fragment_end:qu,logdepthbuf_fragment:Yu,logdepthbuf_pars_fragment:Zu,logdepthbuf_pars_vertex:Ju,logdepthbuf_vertex:$u,map_fragment:Ku,map_pars_fragment:Qu,map_particle_fragment:ju,map_particle_pars_fragment:td,metalnessmap_fragment:ed,metalnessmap_pars_fragment:nd,morphinstance_vertex:id,morphcolor_vertex:sd,morphnormal_vertex:rd,morphtarget_pars_vertex:ad,morphtarget_vertex:od,normal_fragment_begin:cd,normal_fragment_maps:ld,normal_pars_fragment:hd,normal_pars_vertex:ud,normal_vertex:dd,normalmap_pars_fragment:fd,clearcoat_normal_fragment_begin:pd,clearcoat_normal_fragment_maps:md,clearcoat_pars_fragment:gd,iridescence_pars_fragment:_d,opaque_fragment:xd,packing:vd,premultiplied_alpha_fragment:yd,project_vertex:Md,dithering_fragment:Sd,dithering_pars_fragment:bd,roughnessmap_fragment:wd,roughnessmap_pars_fragment:Ed,shadowmap_pars_fragment:Ad,shadowmap_pars_vertex:Td,shadowmap_vertex:Cd,shadowmask_pars_fragment:Rd,skinbase_vertex:Id,skinning_pars_vertex:Pd,skinning_vertex:Ld,skinnormal_vertex:Ud,specularmap_fragment:Dd,specularmap_pars_fragment:Nd,tonemapping_fragment:Fd,tonemapping_pars_fragment:Od,transmission_fragment:Bd,transmission_pars_fragment:zd,uv_pars_fragment:kd,uv_pars_vertex:Vd,uv_vertex:Hd,worldpos_vertex:Gd,background_vert:Wd,background_frag:Xd,backgroundCube_vert:qd,backgroundCube_frag:Yd,cube_vert:Zd,cube_frag:Jd,depth_vert:$d,depth_frag:Kd,distanceRGBA_vert:Qd,distanceRGBA_frag:jd,equirect_vert:tf,equirect_frag:ef,linedashed_vert:nf,linedashed_frag:sf,meshbasic_vert:rf,meshbasic_frag:af,meshlambert_vert:of,meshlambert_frag:cf,meshmatcap_vert:lf,meshmatcap_frag:hf,meshnormal_vert:uf,meshnormal_frag:df,meshphong_vert:ff,meshphong_frag:pf,meshphysical_vert:mf,meshphysical_frag:gf,meshtoon_vert:_f,meshtoon_frag:xf,points_vert:vf,points_frag:yf,shadow_vert:Mf,shadow_frag:Sf,sprite_vert:bf,sprite_frag:wf},it={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},Ee={basic:{uniforms:be([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:be([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:be([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:be([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:be([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:be([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:be([it.points,it.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:be([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:be([it.common,it.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:be([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:be([it.sprite,it.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:be([it.common,it.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:be([it.lights,it.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Ee.physical={uniforms:be([Ee.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var Ts={r:0,b:0,g:0},Wn=new bn,Ef=new oe;function Af(i,t,e,n,s,r,a){let o=new Zt(0),c=r===!0?0:1,l,h,d=null,f=0,m=null;function g(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?e:t).get(w)),w}function x(E){let w=!1,M=g(E);M===null?u(o,c):M&&M.isColor&&(u(M,1),w=!0);let F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(E,w){let M=g(w);M&&(M.isCubeTexture||M.mapping===rr)?(h===void 0&&(h=new pe(new jn(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:Ni(Ee.backgroundCube.uniforms),vertexShader:Ee.backgroundCube.vertexShader,fragmentShader:Ee.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Wn.copy(w.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ef.makeRotationFromEuler(Wn)),h.material.toneMapped=Vt.getTransfer(M.colorSpace)!==Qt,(d!==M||f!==M.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,m=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new pe(new Zs(2,2),new ke({name:"BackgroundMaterial",uniforms:Ni(Ee.background.uniforms),vertexShader:Ee.background.vertexShader,fragmentShader:Ee.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Vt.getTransfer(M.colorSpace)!==Qt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,f=M.version,m=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function u(E,w){E.getRGB(Ts,tl(i)),n.buffers.color.setClear(Ts.r,Ts.g,Ts.b,w,a)}return{getClearColor:function(){return o},setClearColor:function(E,w=1){o.set(E),c=w,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,u(o,c)},render:x,addToRenderList:p}}function Tf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(y,C,V,O,k){let $=!1,W=d(O,V,C);r!==W&&(r=W,l(r.object)),$=m(y,O,V,k),$&&g(y,O,V,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(y,C,V,O),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,C,V){let O=V.wireframe===!0,k=n[y.id];k===void 0&&(k={},n[y.id]=k);let $=k[C.id];$===void 0&&($={},k[C.id]=$);let W=$[O];return W===void 0&&(W=f(c()),$[O]=W),W}function f(y){let C=[],V=[],O=[];for(let k=0;k<e;k++)C[k]=0,V[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:V,attributeDivisors:O,object:y,attributes:{},index:null}}function m(y,C,V,O){let k=r.attributes,$=C.attributes,W=0,tt=V.getAttributes();for(let H in tt)if(tt[H].location>=0){let dt=k[H],Mt=$[H];if(Mt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(Mt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(Mt=y.instanceColor)),dt===void 0||dt.attribute!==Mt||Mt&&dt.data!==Mt.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function g(y,C,V,O){let k={},$=C.attributes,W=0,tt=V.getAttributes();for(let H in tt)if(tt[H].location>=0){let dt=$[H];dt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor));let Mt={};Mt.attribute=dt,dt&&dt.data&&(Mt.data=dt.data),k[H]=Mt,W++}r.attributes=k,r.attributesNum=W,r.index=O}function x(){let y=r.newAttributes;for(let C=0,V=y.length;C<V;C++)y[C]=0}function p(y){u(y,0)}function u(y,C){let V=r.newAttributes,O=r.enabledAttributes,k=r.attributeDivisors;V[y]=1,O[y]===0&&(i.enableVertexAttribArray(y),O[y]=1),k[y]!==C&&(i.vertexAttribDivisor(y,C),k[y]=C)}function E(){let y=r.newAttributes,C=r.enabledAttributes;for(let V=0,O=C.length;V<O;V++)C[V]!==y[V]&&(i.disableVertexAttribArray(V),C[V]=0)}function w(y,C,V,O,k,$,W){W===!0?i.vertexAttribIPointer(y,C,V,k,$):i.vertexAttribPointer(y,C,V,O,k,$)}function M(y,C,V,O){x();let k=O.attributes,$=V.getAttributes(),W=C.defaultAttributeValues;for(let tt in $){let H=$[tt];if(H.location>=0){let st=k[tt];if(st===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),st!==void 0){let dt=st.normalized,Mt=st.itemSize,Pt=t.get(st);if(Pt===void 0)continue;let Jt=Pt.buffer,q=Pt.type,X=Pt.bytesPerElement,nt=q===i.INT||q===i.UNSIGNED_INT||st.gpuType===lo;if(st.isInterleavedBufferAttribute){let Q=st.data,rt=Q.stride,St=st.offset;if(Q.isInstancedInterleavedBuffer){for(let Et=0;Et<H.locationSize;Et++)u(H.location+Et,Q.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Et=0;Et<H.locationSize;Et++)p(H.location+Et);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let Et=0;Et<H.locationSize;Et++)w(H.location+Et,Mt/H.locationSize,q,dt,rt*X,(St+Mt/H.locationSize*Et)*X,nt)}else{if(st.isInstancedBufferAttribute){for(let Q=0;Q<H.locationSize;Q++)u(H.location+Q,st.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Q=0;Q<H.locationSize;Q++)p(H.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let Q=0;Q<H.locationSize;Q++)w(H.location+Q,Mt/H.locationSize,q,dt,Mt*X,Mt/H.locationSize*Q*X,nt)}}else if(W!==void 0){let dt=W[tt];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(H.location,dt);break;case 3:i.vertexAttrib3fv(H.location,dt);break;case 4:i.vertexAttrib4fv(H.location,dt);break;default:i.vertexAttrib1fv(H.location,dt)}}}}E()}function F(){U();for(let y in n){let C=n[y];for(let V in C){let O=C[V];for(let k in O)h(O[k].object),delete O[k];delete C[V]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;let C=n[y.id];for(let V in C){let O=C[V];for(let k in O)h(O[k].object),delete O[k];delete C[V]}delete n[y.id]}function T(y){for(let C in n){let V=n[C];if(V[y.id]===void 0)continue;let O=V[y.id];for(let k in O)h(O[k].object),delete O[k];delete V[y.id]}}function U(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:S,dispose:F,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:E}}function Cf(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];e.update(m,n,1)}function c(l,h,d,f){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Rf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Ze&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let U=T===ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==yn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==gn&&!U)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:F,maxSamples:A}}function If(i){let t=this,e=null,n=0,s=!1,r=!1,a=new mn,o=new Dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){let g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let E=r?0:n,w=E*4,M=u.clippingState||null;c.value=M,M=h(g,f,w,m);for(let F=0;F!==w;++F)M[F]=e[F];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,g){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let u=m+x*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<u)&&(p=new Float32Array(u));for(let w=0,M=m;w!==x;++w,M+=4)a.copy(d[w]).applyMatrix4(E,o),a.normal.toArray(p,M),p[M+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Pf(i){let t=new WeakMap;function e(a,o){return o===ea?a.mapping=Ri:o===na&&(a.mapping=Ii),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ea||o===na)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ba(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var za=class extends Xs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Si=4,uc=[.125,.215,.35,.446,.526,.582],Jn=20,kr=new za,dc=new Zt,Vr=null,Hr=0,Gr=0,Wr=!1,qn=(1+Math.sqrt(5))/2,Mi=1/qn,fc=[new N(-qn,Mi,0),new N(qn,Mi,0),new N(-Mi,0,qn),new N(Mi,0,qn),new N(0,qn,-Mi),new N(0,qn,Mi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Js=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Vr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Wr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vr,Hr,Gr),this._renderer.xr.enabled=Wr,t.scissorTest=!1,Cs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ri||t.mapping===Ii?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Wr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:ns,format:Ze,colorSpace:Oi,depthBuffer:!1},s=pc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lf(r)),this._blurMaterial=Uf(r,t,e)}return s}_compileMaterial(t){let e=new pe(this._lodPlanes[0],t);this._renderer.compile(e,kr)}_sceneToCubeUV(t,e,n,s){let o=new we(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(dc),h.toneMapping=Nn,h.autoClear=!1;let m=new Di({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),g=new pe(new jn,m),x=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,x=!0):(m.color.copy(dc),x=!0);for(let u=0;u<6;u++){let E=u%3;E===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):E===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));let w=this._cubeSize;Cs(s,E*w,u>2?w:0,w,w),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ri||t.mapping===Ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new pe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Cs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,kr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=fc[(s-r-1)%fc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new pe(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Jn-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):Jn;p>Jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Jn}`);let u=[],E=0;for(let T=0;T<Jn;++T){let U=T/x,S=Math.exp(-U*U/2);u.push(S),T===0?E+=S:T<p&&(E+=2*S)}for(let T=0;T<u.length;T++)u[T]=u[T]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-n;let M=this._sizeLods[s],F=3*M*(s>w-Si?s-w+Si:0),A=4*(this._cubeSize-M);Cs(e,F,A,3*M,2*M),c.setRenderTarget(e),c.render(d,kr)}};function Lf(i){let t=[],e=[],n=[],s=i,r=i-Si+1+uc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Si?c=uc[a-i+Si-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,x=3,p=2,u=1,E=new Float32Array(x*g*m),w=new Float32Array(p*g*m),M=new Float32Array(u*g*m);for(let A=0;A<m;A++){let T=A%3*2/3-1,U=A>2?0:-1,S=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];E.set(S,x*g*A),w.set(f,p*g*A);let y=[A,A,A,A,A,A];M.set(y,u*g*A)}let F=new Ue;F.setAttribute("position",new Le(E,x)),F.setAttribute("uv",new Le(w,p)),F.setAttribute("faceIndex",new Le(M,u)),t.push(F),s>Si&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pc(i,t,e){let n=new Mn(i,t,e);return n.texture.mapping=rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Uf(i,t,e){let n=new Float32Array(Jn),s=new N(0,1,0);return new ke({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function mc(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function gc(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function _o(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Df(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===ea||c===na,h=c===Ri||c===Ii;if(l||h){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Js(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let m=o.image;return l&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Js(i)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Nf(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ji("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ff(i,t,e,n){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let p=0,u=x.length;p<u;p++)t.remove(x[p])}f.removeEventListener("dispose",a),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(d){let f=d.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let x=m[g];for(let p=0,u=x.length;p<u;p++)t.update(x[p],i.ARRAY_BUFFER)}}function l(d){let f=[],m=d.index,g=d.attributes.position,x=0;if(m!==null){let E=m.array;x=m.version;for(let w=0,M=E.length;w<M;w+=3){let F=E[w+0],A=E[w+1],T=E[w+2];f.push(F,A,A,T,T,F)}}else if(g!==void 0){let E=g.array;x=g.version;for(let w=0,M=E.length/3-1;w<M;w+=3){let F=w+0,A=w+1,T=w+2;f.push(F,A,A,T,T,F)}}else return;let p=new(Qc(f)?Ws:Gs)(f,1);p.version=x;let u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Of(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,m){i.drawElements(n,m,r,f*a),e.update(m,n,1)}function l(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*a,g),e.update(m,n,g))}function h(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];e.update(p,n,1)}function d(f,m,g,x){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)l(f[u]/a,m[u],x[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,x,0,g);let u=0;for(let E=0;E<g;E++)u+=m[E]*x[E];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Bf(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function zf(i,t,e){let n=new WeakMap,s=new jt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let S=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],w=0;m===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let M=o.attributes.position.count*w,F=1;M>t.maxTextureSize&&(F=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let A=new Float32Array(M*F*4*d),T=new Vs(A,M,F,d);T.type=gn,T.needsUpdate=!0;let U=w*4;for(let y=0;y<d;y++){let C=p[y],V=u[y],O=E[y],k=M*F*4*y;for(let $=0;$<C.count;$++){let W=$*U;m===!0&&(s.fromBufferAttribute(C,$),A[k+W+0]=s.x,A[k+W+1]=s.y,A[k+W+2]=s.z,A[k+W+3]=0),g===!0&&(s.fromBufferAttribute(V,$),A[k+W+4]=s.x,A[k+W+5]=s.y,A[k+W+6]=s.z,A[k+W+7]=0),x===!0&&(s.fromBufferAttribute(O,$),A[k+W+8]=s.x,A[k+W+9]=s.y,A[k+W+10]=s.z,A[k+W+11]=O.itemSize===4?s.w:1)}}f={count:d,texture:T,size:new Bt(M,F)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let x=0;x<l.length;x++)m+=l[x];let g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function kf(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var $s=class extends Be{constructor(t,e,n,s,r,a,o,c,l,h=Ei){if(h!==Ei&&h!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ei&&(n=Qn),n===void 0&&h===Li&&(n=Pi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Je,this.minFilter=c!==void 0?c:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},nl=new Be,_c=new $s(1,1),il=new Vs,sl=new Na,rl=new qs,xc=[],vc=[],yc=new Float32Array(16),Mc=new Float32Array(9),Sc=new Float32Array(4);function Bi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=xc[s];if(r===void 0&&(r=new Float32Array(s),xc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function he(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function cr(i,t){let e=vc[t];e===void 0&&(e=new Int32Array(t),vc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Vf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Hf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2fv(this.addr,t),ue(e,t)}}function Gf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;i.uniform3fv(this.addr,t),ue(e,t)}}function Wf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4fv(this.addr,t),ue(e,t)}}function Xf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;Sc.set(n),i.uniformMatrix2fv(this.addr,!1,Sc),ue(e,n)}}function qf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;Mc.set(n),i.uniformMatrix3fv(this.addr,!1,Mc),ue(e,n)}}function Yf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;yc.set(n),i.uniformMatrix4fv(this.addr,!1,yc),ue(e,n)}}function Zf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2iv(this.addr,t),ue(e,t)}}function $f(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3iv(this.addr,t),ue(e,t)}}function Kf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4iv(this.addr,t),ue(e,t)}}function Qf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function jf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2uiv(this.addr,t),ue(e,t)}}function tp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3uiv(this.addr,t),ue(e,t)}}function ep(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4uiv(this.addr,t),ue(e,t)}}function np(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_c.compareFunction=$c,r=_c):r=nl,e.setTexture2D(t||r,s)}function ip(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||sl,s)}function sp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||rl,s)}function rp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||il,s)}function ap(i){switch(i){case 5126:return Vf;case 35664:return Hf;case 35665:return Gf;case 35666:return Wf;case 35674:return Xf;case 35675:return qf;case 35676:return Yf;case 5124:case 35670:return Zf;case 35667:case 35671:return Jf;case 35668:case 35672:return $f;case 35669:case 35673:return Kf;case 5125:return Qf;case 36294:return jf;case 36295:return tp;case 36296:return ep;case 35678:case 36198:case 36298:case 36306:case 35682:return np;case 35679:case 36299:case 36307:return ip;case 35680:case 36300:case 36308:case 36293:return sp;case 36289:case 36303:case 36311:case 36292:return rp}}function op(i,t){i.uniform1fv(this.addr,t)}function cp(i,t){let e=Bi(t,this.size,2);i.uniform2fv(this.addr,e)}function lp(i,t){let e=Bi(t,this.size,3);i.uniform3fv(this.addr,e)}function hp(i,t){let e=Bi(t,this.size,4);i.uniform4fv(this.addr,e)}function up(i,t){let e=Bi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function dp(i,t){let e=Bi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function fp(i,t){let e=Bi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pp(i,t){i.uniform1iv(this.addr,t)}function mp(i,t){i.uniform2iv(this.addr,t)}function gp(i,t){i.uniform3iv(this.addr,t)}function _p(i,t){i.uniform4iv(this.addr,t)}function xp(i,t){i.uniform1uiv(this.addr,t)}function vp(i,t){i.uniform2uiv(this.addr,t)}function yp(i,t){i.uniform3uiv(this.addr,t)}function Mp(i,t){i.uniform4uiv(this.addr,t)}function Sp(i,t,e){let n=this.cache,s=t.length,r=cr(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||nl,r[a])}function bp(i,t,e){let n=this.cache,s=t.length,r=cr(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||sl,r[a])}function wp(i,t,e){let n=this.cache,s=t.length,r=cr(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||rl,r[a])}function Ep(i,t,e){let n=this.cache,s=t.length,r=cr(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||il,r[a])}function Ap(i){switch(i){case 5126:return op;case 35664:return cp;case 35665:return lp;case 35666:return hp;case 35674:return up;case 35675:return dp;case 35676:return fp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return xp;case 36294:return vp;case 36295:return yp;case 36296:return Mp;case 35678:case 36198:case 36298:case 36306:case 35682:return Sp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return Ep}}var ka=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ap(e.type)}},Va=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ap(e.type)}},Ha=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Xr=/(\w+)(\])?(\[|\.)?/g;function bc(i,t){i.seq.push(t),i.map[t.id]=t}function Tp(i,t,e){let n=i.name,s=n.length;for(Xr.lastIndex=0;;){let r=Xr.exec(n),a=Xr.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){bc(e,l===void 0?new ka(o,i,t):new Va(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Ha(o),bc(e,d)),e=d}}}var Ti=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Tp(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function wc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Cp=37297,Rp=0;function Ip(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ec=new Dt;function Pp(i){Vt._getMatrix(Ec,Vt.workingColorSpace,i);let t=`mat3( ${Ec.elements.map(e=>e.toFixed(4))} )`;switch(Vt.getTransfer(i)){case ar:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ac(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ip(i.getShaderSource(t),a)}else return s}function Lp(i,t){let e=Pp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Up(i,t){let e;switch(t){case Hl:e="Linear";break;case Gl:e="Reinhard";break;case Wl:e="Cineon";break;case Xl:e="ACESFilmic";break;case Yl:e="AgX";break;case Zl:e="Neutral";break;case ql:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Rs=new N;function Dp(){Vt.getLuminanceCoefficients(Rs);let i=Rs.x.toFixed(4),t=Rs.y.toFixed(4),e=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Np(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($i).join(`
`)}function Fp(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Op(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function $i(i){return i!==""}function Tc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(i){return i.replace(Bp,kp)}var zp=new Map;function kp(i,t){let e=Ot[t];if(e===void 0){let n=zp.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ga(e)}var Vp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(i){return i.replace(Vp,Hp)}function Hp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ic(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Oc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ml?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(t="SHADOWMAP_TYPE_VSM"),t}function Wp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ri:case Ii:t="ENVMAP_TYPE_CUBE";break;case rr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ii:t="ENVMAP_MODE_REFRACTION";break}return t}function qp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bc:t="ENVMAP_BLENDING_MULTIPLY";break;case kl:t="ENVMAP_BLENDING_MIX";break;case Vl:t="ENVMAP_BLENDING_ADD";break}return t}function Yp(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zp(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Gp(e),l=Wp(e),h=Xp(e),d=qp(e),f=Yp(e),m=Np(e),g=Fp(r),x=s.createProgram(),p,u,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($i).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($i).join(`
`),u.length>0&&(u+=`
`)):(p=[Ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($i).join(`
`),u=[Ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Nn?Up("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Lp("linearToOutputTexel",e.outputColorSpace),Dp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($i).join(`
`)),a=Ga(a),a=Tc(a,e),a=Cc(a,e),o=Ga(o),o=Tc(o,e),o=Cc(o,e),a=Rc(a),o=Rc(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Go?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let w=E+p+a,M=E+u+o,F=wc(s,s.VERTEX_SHADER,w),A=wc(s,s.FRAGMENT_SHADER,M);s.attachShader(x,F),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(C){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(x).trim(),O=s.getShaderInfoLog(F).trim(),k=s.getShaderInfoLog(A).trim(),$=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,F,A);else{let tt=Ac(s,F,"vertex"),H=Ac(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+tt+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(O===""||k==="")&&(W=!1);W&&(C.diagnostics={runnable:$,programLog:V,vertexShader:{log:O,prefix:p},fragmentShader:{log:k,prefix:u}})}s.deleteShader(F),s.deleteShader(A),U=new Ti(s,x),S=Op(s,x)}let U;this.getUniforms=function(){return U===void 0&&T(this),U};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,Cp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rp++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=A,this}var Jp=0,Wa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xa(t),e.set(t,n)),n}},Xa=class{constructor(t){this.id=Jp++,this.code=t,this.usedTimes=0}};function $p(i,t,e,n,s,r,a){let o=new Hs,c=new Wa,l=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,y,C,V,O){let k=V.fog,$=O.geometry,W=S.isMeshStandardMaterial?V.environment:null,tt=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),H=tt&&tt.mapping===rr?tt.image.height:null,st=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let dt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Mt=dt!==void 0?dt.length:0,Pt=0;$.morphAttributes.position!==void 0&&(Pt=1),$.morphAttributes.normal!==void 0&&(Pt=2),$.morphAttributes.color!==void 0&&(Pt=3);let Jt,q,X,nt;if(st){let $t=Ee[st];Jt=$t.vertexShader,q=$t.fragmentShader}else Jt=S.vertexShader,q=S.fragmentShader,c.update(S),X=c.getVertexShaderID(S),nt=c.getFragmentShaderID(S);let Q=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),St=O.isInstancedMesh===!0,Et=O.isBatchedMesh===!0,Ht=!!S.map,At=!!S.matcap,Gt=!!tt,I=!!S.aoMap,Nt=!!S.lightMap,ct=!!S.bumpMap,Rt=!!S.normalMap,gt=!!S.displacementMap,Xt=!!S.emissiveMap,_t=!!S.metalnessMap,b=!!S.roughnessMap,_=S.anisotropy>0,D=S.clearcoat>0,Z=S.dispersion>0,K=S.iridescence>0,Y=S.sheen>0,bt=S.transmission>0,ot=_&&!!S.anisotropyMap,ft=D&&!!S.clearcoatMap,kt=D&&!!S.clearcoatNormalMap,j=D&&!!S.clearcoatRoughnessMap,pt=K&&!!S.iridescenceMap,Tt=K&&!!S.iridescenceThicknessMap,Ct=Y&&!!S.sheenColorMap,mt=Y&&!!S.sheenRoughnessMap,zt=!!S.specularMap,Ft=!!S.specularColorMap,ee=!!S.specularIntensityMap,R=bt&&!!S.transmissionMap,at=bt&&!!S.thicknessMap,G=!!S.gradientMap,J=!!S.alphaMap,ut=S.alphaTest>0,lt=!!S.alphaHash,Lt=!!S.extensions,ae=Nn;S.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ae=i.toneMapping);let ve={shaderID:st,shaderType:S.type,shaderName:S.name,vertexShader:Jt,fragmentShader:q,defines:S.defines,customVertexShaderID:X,customFragmentShaderID:nt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Et,batchingColor:Et&&O._colorsTexture!==null,instancing:St,instancingColor:St&&O.instanceColor!==null,instancingMorph:St&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Oi,alphaToCoverage:!!S.alphaToCoverage,map:Ht,matcap:At,envMap:Gt,envMapMode:Gt&&tt.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:Nt,bumpMap:ct,normalMap:Rt,displacementMap:f&&gt,emissiveMap:Xt,normalMapObjectSpace:Rt&&S.normalMapType===jl,normalMapTangentSpace:Rt&&S.normalMapType===Ql,metalnessMap:_t,roughnessMap:b,anisotropy:_,anisotropyMap:ot,clearcoat:D,clearcoatMap:ft,clearcoatNormalMap:kt,clearcoatRoughnessMap:j,dispersion:Z,iridescence:K,iridescenceMap:pt,iridescenceThicknessMap:Tt,sheen:Y,sheenColorMap:Ct,sheenRoughnessMap:mt,specularMap:zt,specularColorMap:Ft,specularIntensityMap:ee,transmission:bt,transmissionMap:R,thicknessMap:at,gradientMap:G,opaque:S.transparent===!1&&S.blending===wi&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:ut,alphaHash:lt,combine:S.combine,mapUv:Ht&&x(S.map.channel),aoMapUv:I&&x(S.aoMap.channel),lightMapUv:Nt&&x(S.lightMap.channel),bumpMapUv:ct&&x(S.bumpMap.channel),normalMapUv:Rt&&x(S.normalMap.channel),displacementMapUv:gt&&x(S.displacementMap.channel),emissiveMapUv:Xt&&x(S.emissiveMap.channel),metalnessMapUv:_t&&x(S.metalnessMap.channel),roughnessMapUv:b&&x(S.roughnessMap.channel),anisotropyMapUv:ot&&x(S.anisotropyMap.channel),clearcoatMapUv:ft&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:kt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:mt&&x(S.sheenRoughnessMap.channel),specularMapUv:zt&&x(S.specularMap.channel),specularColorMapUv:Ft&&x(S.specularColorMap.channel),specularIntensityMapUv:ee&&x(S.specularIntensityMap.channel),transmissionMapUv:R&&x(S.transmissionMap.channel),thicknessMapUv:at&&x(S.thicknessMap.channel),alphaMapUv:J&&x(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Rt||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(Ht||J),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:rt,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Pt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ht&&S.map.isVideoTexture===!0&&Vt.getTransfer(S.map.colorSpace)===Qt,decodeVideoTextureEmissive:Xt&&S.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(S.emissiveMap.colorSpace)===Qt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===qe,flipSided:S.side===Te,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Lt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&S.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function u(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)y.push(C),y.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(E(y,S),w(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function E(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function w(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function M(S){let y=g[S.type],C;if(y){let V=Ee[y];C=or.clone(V.uniforms)}else C=S.uniforms;return C}function F(S,y){let C;for(let V=0,O=h.length;V<O;V++){let k=h[V];if(k.cacheKey===y){C=k,++C.usedTimes;break}}return C===void 0&&(C=new Zp(i,y,S,r),h.push(C)),C}function A(S){if(--S.usedTimes===0){let y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function T(S){c.remove(S)}function U(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:M,acquireProgram:F,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:U}}function Kp(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Qp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Pc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,m,g,x,p){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:x,group:p},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=p),t++,u}function o(d,f,m,g,x,p){let u=a(d,f,m,g,x,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function c(d,f,m,g,x,p){let u=a(d,f,m,g,x,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function l(d,f){e.length>1&&e.sort(d||Qp),n.length>1&&n.sort(f||Pc),s.length>1&&s.sort(f||Pc)}function h(){for(let d=t,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function jp(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Lc,i.set(n,[a])):s>=r.length?(a=new Lc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function tm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Zt};break;case"SpotLight":e={position:new N,direction:new N,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function em(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var nm=0;function im(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function sm(i){let t=new tm,e=em(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,r=new oe,a=new oe;function o(l){let h=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,x=0,p=0,u=0,E=0,w=0,M=0,F=0,A=0,T=0;l.sort(im);for(let S=0,y=l.length;S<y;S++){let C=l[S],V=C.color,O=C.intensity,k=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=V.r*O,d+=V.g*O,f+=V.b*O;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],O);T++}else if(C.isDirectionalLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let tt=C.shadow,H=e.get(C);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=C.shadow.matrix,E++}n.directional[m]=W,m++}else if(C.isSpotLight){let W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(V).multiplyScalar(O),W.distance=k,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[x]=W;let tt=C.shadow;if(C.map&&(n.spotLightMap[F]=C.map,F++,tt.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[x]=tt.matrix,C.castShadow){let H=e.get(C);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=$,M++}x++}else if(C.isRectAreaLight){let W=t.get(C);W.color.copy(V).multiplyScalar(O),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=W,p++}else if(C.isPointLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){let tt=C.shadow,H=e.get(C);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,H.shadowCameraNear=tt.camera.near,H.shadowCameraFar=tt.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=C.shadow.matrix,w++}n.point[g]=W,g++}else if(C.isHemisphereLight){let W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(O),W.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[u]=W,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let U=n.hash;(U.directionalLength!==m||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==p||U.hemiLength!==u||U.numDirectionalShadows!==E||U.numPointShadows!==w||U.numSpotShadows!==M||U.numSpotMaps!==F||U.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=M+F-A,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,U.directionalLength=m,U.pointLength=g,U.spotLength=x,U.rectAreaLength=p,U.hemiLength=u,U.numDirectionalShadows=E,U.numPointShadows=w,U.numSpotShadows=M,U.numSpotMaps=F,U.numLightProbes=T,n.version=nm++)}function c(l,h){let d=0,f=0,m=0,g=0,x=0,p=h.matrixWorldInverse;for(let u=0,E=l.length;u<E;u++){let w=l[u];if(w.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(w.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),m++}else if(w.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(w.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),f++}else if(w.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:o,setupView:c,state:n}}function Uc(i){let t=new sm(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function rm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Uc(i),t.set(s,[o])):r>=a.length?(o=new Uc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var qa=class extends Ui{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$l,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ya=class extends Ui{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,om=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cm(i,t,e){let n=new Ys,s=new Bt,r=new Bt,a=new jt,o=new qa({depthPacking:Kl}),c=new Ya,l={},h=e.maxTextureSize,d={[Fn]:Te,[Te]:Fn,[qe]:qe},f=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:am,fragmentShader:om}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Ue;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new pe(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let u=this.type;this.render=function(A,T,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let S=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Dn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let O=u!==pn&&this.type===pn,k=u===pn&&this.type!==pn;for(let $=0,W=A.length;$<W;$++){let tt=A[$],H=tt.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let st=H.getFrameExtents();if(s.multiply(st),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||O===!0||k===!0){let Mt=this.type!==pn?{minFilter:Je,magFilter:Je}:{};H.map!==null&&H.map.dispose(),H.map=new Mn(s.x,s.y,Mt),H.map.texture.name=tt.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let dt=H.getViewportCount();for(let Mt=0;Mt<dt;Mt++){let Pt=H.getViewport(Mt);a.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),V.viewport(a),H.updateMatrices(tt,Mt),n=H.getFrustum(),M(T,U,H.camera,tt,this.type)}H.isPointLightShadow!==!0&&this.type===pn&&E(H,U),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(S,y,C)};function E(A,T){let U=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Mn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,U,f,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,U,m,x,null)}function w(A,T,U,S){let y=null,C=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)y=C;else if(y=U.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let V=y.uuid,O=T.uuid,k=l[V];k===void 0&&(k={},l[V]=k);let $=k[O];$===void 0&&($=y.clone(),k[O]=$,T.addEventListener("dispose",F)),y=$}if(y.visible=T.visible,y.wireframe=T.wireframe,S===pn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let V=i.properties.get(y);V.light=U}return y}function M(A,T,U,S,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===pn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);let O=t.update(A),k=A.material;if(Array.isArray(k)){let $=O.groups;for(let W=0,tt=$.length;W<tt;W++){let H=$[W],st=k[H.materialIndex];if(st&&st.visible){let dt=w(A,st,S,y);A.onBeforeShadow(i,A,T,U,O,dt,H),i.renderBufferDirect(U,null,O,dt,A,H),A.onAfterShadow(i,A,T,U,O,dt,H)}}}else if(k.visible){let $=w(A,k,S,y);A.onBeforeShadow(i,A,T,U,O,$,null),i.renderBufferDirect(U,null,O,$,A,null),A.onAfterShadow(i,A,T,U,O,$,null)}}let V=A.children;for(let O=0,k=V.length;O<k;O++)M(V[O],T,U,S,y)}function F(A){A.target.removeEventListener("dispose",F);for(let U in l){let S=l[U],y=A.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var lm={[Zr]:Jr,[$r]:jr,[Kr]:ta,[Ci]:Qr,[Jr]:Zr,[jr]:$r,[ta]:Kr,[Qr]:Ci};function hm(i,t){function e(){let R=!1,at=new jt,G=null,J=new jt(0,0,0,0);return{setMask:function(ut){G!==ut&&!R&&(i.colorMask(ut,ut,ut,ut),G=ut)},setLocked:function(ut){R=ut},setClear:function(ut,lt,Lt,ae,ve){ve===!0&&(ut*=ae,lt*=ae,Lt*=ae),at.set(ut,lt,Lt,ae),J.equals(at)===!1&&(i.clearColor(ut,lt,Lt,ae),J.copy(at))},reset:function(){R=!1,G=null,J.set(-1,0,0,0)}}}function n(){let R=!1,at=!1,G=null,J=null,ut=null;return{setReversed:function(lt){if(at!==lt){let Lt=t.get("EXT_clip_control");at?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);let ae=ut;ut=null,this.setClear(ae)}at=lt},getReversed:function(){return at},setTest:function(lt){lt?Q(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(lt){G!==lt&&!R&&(i.depthMask(lt),G=lt)},setFunc:function(lt){if(at&&(lt=lm[lt]),J!==lt){switch(lt){case Zr:i.depthFunc(i.NEVER);break;case Jr:i.depthFunc(i.ALWAYS);break;case $r:i.depthFunc(i.LESS);break;case Ci:i.depthFunc(i.LEQUAL);break;case Kr:i.depthFunc(i.EQUAL);break;case Qr:i.depthFunc(i.GEQUAL);break;case jr:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=lt}},setLocked:function(lt){R=lt},setClear:function(lt){ut!==lt&&(at&&(lt=1-lt),i.clearDepth(lt),ut=lt)},reset:function(){R=!1,G=null,J=null,ut=null,at=!1}}}function s(){let R=!1,at=null,G=null,J=null,ut=null,lt=null,Lt=null,ae=null,ve=null;return{setTest:function($t){R||($t?Q(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function($t){at!==$t&&!R&&(i.stencilMask($t),at=$t)},setFunc:function($t,Ve,on){(G!==$t||J!==Ve||ut!==on)&&(i.stencilFunc($t,Ve,on),G=$t,J=Ve,ut=on)},setOp:function($t,Ve,on){(lt!==$t||Lt!==Ve||ae!==on)&&(i.stencilOp($t,Ve,on),lt=$t,Lt=Ve,ae=on)},setLocked:function($t){R=$t},setClear:function($t){ve!==$t&&(i.clearStencil($t),ve=$t)},reset:function(){R=!1,at=null,G=null,J=null,ut=null,lt=null,Lt=null,ae=null,ve=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},f=new WeakMap,m=[],g=null,x=!1,p=null,u=null,E=null,w=null,M=null,F=null,A=null,T=new Zt(0,0,0),U=0,S=!1,y=null,C=null,V=null,O=null,k=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,tt=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=tt>=1):H.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=tt>=2);let st=null,dt={},Mt=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),Jt=new jt().fromArray(Mt),q=new jt().fromArray(Pt);function X(R,at,G,J){let ut=new Uint8Array(4),lt=i.createTexture();i.bindTexture(R,lt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<G;Lt++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(at+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return lt}let nt={};nt[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Ci),ct(!1),Rt(No),Q(i.CULL_FACE),I(Dn);function Q(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function rt(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function St(R,at){return d[R]!==at?(i.bindFramebuffer(R,at),d[R]=at,R===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=at),R===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=at),!0):!1}function Et(R,at){let G=m,J=!1;if(R){G=f.get(at),G===void 0&&(G=[],f.set(at,G));let ut=R.textures;if(G.length!==ut.length||G[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Lt=ut.length;lt<Lt;lt++)G[lt]=i.COLOR_ATTACHMENT0+lt;G.length=ut.length,J=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,J=!0);J&&i.drawBuffers(G)}function Ht(R){return g!==R?(i.useProgram(R),g=R,!0):!1}let At={[Yn]:i.FUNC_ADD,[bl]:i.FUNC_SUBTRACT,[wl]:i.FUNC_REVERSE_SUBTRACT};At[El]=i.MIN,At[Al]=i.MAX;let Gt={[Tl]:i.ZERO,[Cl]:i.ONE,[Rl]:i.SRC_COLOR,[qr]:i.SRC_ALPHA,[Nl]:i.SRC_ALPHA_SATURATE,[Ul]:i.DST_COLOR,[Pl]:i.DST_ALPHA,[Il]:i.ONE_MINUS_SRC_COLOR,[Yr]:i.ONE_MINUS_SRC_ALPHA,[Dl]:i.ONE_MINUS_DST_COLOR,[Ll]:i.ONE_MINUS_DST_ALPHA,[Fl]:i.CONSTANT_COLOR,[Ol]:i.ONE_MINUS_CONSTANT_COLOR,[Bl]:i.CONSTANT_ALPHA,[zl]:i.ONE_MINUS_CONSTANT_ALPHA};function I(R,at,G,J,ut,lt,Lt,ae,ve,$t){if(R===Dn){x===!0&&(rt(i.BLEND),x=!1);return}if(x===!1&&(Q(i.BLEND),x=!0),R!==Sl){if(R!==p||$t!==S){if((u!==Yn||M!==Yn)&&(i.blendEquation(i.FUNC_ADD),u=Yn,M=Yn),$t)switch(R){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fo:i.blendFunc(i.ONE,i.ONE);break;case Oo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Oo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}E=null,w=null,F=null,A=null,T.set(0,0,0),U=0,p=R,S=$t}return}ut=ut||at,lt=lt||G,Lt=Lt||J,(at!==u||ut!==M)&&(i.blendEquationSeparate(At[at],At[ut]),u=at,M=ut),(G!==E||J!==w||lt!==F||Lt!==A)&&(i.blendFuncSeparate(Gt[G],Gt[J],Gt[lt],Gt[Lt]),E=G,w=J,F=lt,A=Lt),(ae.equals(T)===!1||ve!==U)&&(i.blendColor(ae.r,ae.g,ae.b,ve),T.copy(ae),U=ve),p=R,S=!1}function Nt(R,at){R.side===qe?rt(i.CULL_FACE):Q(i.CULL_FACE);let G=R.side===Te;at&&(G=!G),ct(G),R.blending===wi&&R.transparent===!1?I(Dn):I(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let J=R.stencilWrite;o.setTest(J),J&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Xt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(R){y!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),y=R)}function Rt(R){R!==vl?(Q(i.CULL_FACE),R!==C&&(R===No?i.cullFace(i.BACK):R===yl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),C=R}function gt(R){R!==V&&(W&&i.lineWidth(R),V=R)}function Xt(R,at,G){R?(Q(i.POLYGON_OFFSET_FILL),(O!==at||k!==G)&&(i.polygonOffset(at,G),O=at,k=G)):rt(i.POLYGON_OFFSET_FILL)}function _t(R){R?Q(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function b(R){R===void 0&&(R=i.TEXTURE0+$-1),st!==R&&(i.activeTexture(R),st=R)}function _(R,at,G){G===void 0&&(st===null?G=i.TEXTURE0+$-1:G=st);let J=dt[G];J===void 0&&(J={type:void 0,texture:void 0},dt[G]=J),(J.type!==R||J.texture!==at)&&(st!==G&&(i.activeTexture(G),st=G),i.bindTexture(R,at||nt[R]),J.type=R,J.texture=at)}function D(){let R=dt[st];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function kt(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ct(R){Jt.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Jt.copy(R))}function mt(R){q.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),q.copy(R))}function zt(R,at){let G=l.get(at);G===void 0&&(G=new WeakMap,l.set(at,G));let J=G.get(R);J===void 0&&(J=i.getUniformBlockIndex(at,R.name),G.set(R,J))}function Ft(R,at){let J=l.get(at).get(R);c.get(at)!==J&&(i.uniformBlockBinding(at,J,R.__bindingPointIndex),c.set(at,J))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,dt={},d={},f=new WeakMap,m=[],g=null,x=!1,p=null,u=null,E=null,w=null,M=null,F=null,A=null,T=new Zt(0,0,0),U=0,S=!1,y=null,C=null,V=null,O=null,k=null,Jt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:rt,bindFramebuffer:St,drawBuffers:Et,useProgram:Ht,setBlending:I,setMaterial:Nt,setFlipSided:ct,setCullFace:Rt,setLineWidth:gt,setPolygonOffset:Xt,setScissorTest:_t,activeTexture:b,bindTexture:_,unbindTexture:D,compressedTexImage2D:Z,compressedTexImage3D:K,texImage2D:pt,texImage3D:Tt,updateUBOMapping:zt,uniformBlockBinding:Ft,texStorage2D:kt,texStorage3D:j,texSubImage2D:Y,texSubImage3D:bt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ft,scissor:Ct,viewport:mt,reset:ee}}function Dc(i,t,e,n){let s=um(n);switch(e){case Gc:return i*t;case Xc:return i*t;case qc:return i*t*2;case Yc:return i*t/s.components*s.byteLength;case fo:return i*t/s.components*s.byteLength;case Zc:return i*t*2/s.components*s.byteLength;case po:return i*t*2/s.components*s.byteLength;case Wc:return i*t*3/s.components*s.byteLength;case Ze:return i*t*4/s.components*s.byteLength;case mo:return i*t*4/s.components*s.byteLength;case Ls:case Us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ds:case Ns:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case aa:case ca:return Math.max(i,16)*Math.max(t,8)/4;case ra:case oa:return Math.max(i,8)*Math.max(t,8)/2;case la:case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ga:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case xa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case va:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ba:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case wa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ea:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fs:case Aa:case Ta:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Jc:case Ca:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ra:case Ia:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function um(i){switch(i){case yn:case kc:return{byteLength:1,components:1};case ts:case Vc:case ns:return{byteLength:2,components:1};case ho:case uo:return{byteLength:2,components:4};case Qn:case lo:case gn:return{byteLength:4,components:1};case Hc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function dm(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Bt,h=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return m?new OffscreenCanvas(b,_):zs("canvas")}function x(b,_,D){let Z=1,K=_t(b);if((K.width>D||K.height>D)&&(Z=D/Math.max(K.width,K.height)),Z<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let Y=Math.floor(Z*K.width),bt=Math.floor(Z*K.height);d===void 0&&(d=g(Y,bt));let ot=_?g(Y,bt):d;return ot.width=Y,ot.height=bt,ot.getContext("2d").drawImage(b,0,0,Y,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Y+"x"+bt+")."),ot}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),b;return b}function p(b){return b.generateMipmaps}function u(b){i.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(b,_,D,Z,K=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=_;if(_===i.RED&&(D===i.FLOAT&&(Y=i.R32F),D===i.HALF_FLOAT&&(Y=i.R16F),D===i.UNSIGNED_BYTE&&(Y=i.R8)),_===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(Y=i.R8UI),D===i.UNSIGNED_SHORT&&(Y=i.R16UI),D===i.UNSIGNED_INT&&(Y=i.R32UI),D===i.BYTE&&(Y=i.R8I),D===i.SHORT&&(Y=i.R16I),D===i.INT&&(Y=i.R32I)),_===i.RG&&(D===i.FLOAT&&(Y=i.RG32F),D===i.HALF_FLOAT&&(Y=i.RG16F),D===i.UNSIGNED_BYTE&&(Y=i.RG8)),_===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(Y=i.RG8UI),D===i.UNSIGNED_SHORT&&(Y=i.RG16UI),D===i.UNSIGNED_INT&&(Y=i.RG32UI),D===i.BYTE&&(Y=i.RG8I),D===i.SHORT&&(Y=i.RG16I),D===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),D===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),D===i.UNSIGNED_INT&&(Y=i.RGB32UI),D===i.BYTE&&(Y=i.RGB8I),D===i.SHORT&&(Y=i.RGB16I),D===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),D===i.UNSIGNED_INT&&(Y=i.RGBA32UI),D===i.BYTE&&(Y=i.RGBA8I),D===i.SHORT&&(Y=i.RGBA16I),D===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&D===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),_===i.RGBA){let bt=K?ar:Vt.getTransfer(Z);D===i.FLOAT&&(Y=i.RGBA32F),D===i.HALF_FLOAT&&(Y=i.RGBA16F),D===i.UNSIGNED_BYTE&&(Y=bt===Qt?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function M(b,_){let D;return b?_===null||_===Qn||_===Pi?D=i.DEPTH24_STENCIL8:_===gn?D=i.DEPTH32F_STENCIL8:_===ts&&(D=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Qn||_===Pi?D=i.DEPTH_COMPONENT24:_===gn?D=i.DEPTH_COMPONENT32F:_===ts&&(D=i.DEPTH_COMPONENT16),D}function F(b,_){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Je&&b.minFilter!==tn?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function A(b){let _=b.target;_.removeEventListener("dispose",A),U(_),_.isVideoTexture&&h.delete(_)}function T(b){let _=b.target;_.removeEventListener("dispose",T),y(_)}function U(b){let _=n.get(b);if(_.__webglInit===void 0)return;let D=b.source,Z=f.get(D);if(Z){let K=Z[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(b),Object.keys(Z).length===0&&f.delete(D)}n.remove(b)}function S(b){let _=n.get(b);i.deleteTexture(_.__webglTexture);let D=b.source,Z=f.get(D);delete Z[_.__cacheKey],a.memory.textures--}function y(b){let _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let K=0;K<_.__webglFramebuffer[Z].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[Z][K]);else i.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[Z]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let D=b.textures;for(let Z=0,K=D.length;Z<K;Z++){let Y=n.get(D[Z]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(D[Z])}n.remove(b)}let C=0;function V(){C=0}function O(){let b=C;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),C+=1,b}function k(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function $(b,_){let D=n.get(b);if(b.isVideoTexture&&gt(b),b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){let Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(D,b,_);return}}e.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+_)}function W(b,_){let D=n.get(b);if(b.version>0&&D.__version!==b.version){q(D,b,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+_)}function tt(b,_){let D=n.get(b);if(b.version>0&&D.__version!==b.version){q(D,b,_);return}e.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+_)}function H(b,_){let D=n.get(b);if(b.version>0&&D.__version!==b.version){X(D,b,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+_)}let st={[ia]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[sa]:i.MIRRORED_REPEAT},dt={[Je]:i.NEAREST,[Jl]:i.NEAREST_MIPMAP_NEAREST,[ls]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[xr]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},Mt={[th]:i.NEVER,[ah]:i.ALWAYS,[eh]:i.LESS,[$c]:i.LEQUAL,[nh]:i.EQUAL,[rh]:i.GEQUAL,[ih]:i.GREATER,[sh]:i.NOTEQUAL};function Pt(b,_){if(_.type===gn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===tn||_.magFilter===xr||_.magFilter===ls||_.magFilter===Kn||_.minFilter===tn||_.minFilter===xr||_.minFilter===ls||_.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,st[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,st[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,st[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,dt[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,dt[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Mt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Je||_.minFilter!==ls&&_.minFilter!==Kn||_.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let D=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Jt(b,_){let D=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",A));let Z=_.source,K=f.get(Z);K===void 0&&(K={},f.set(Z,K));let Y=k(_);if(Y!==b.__cacheKey){K[Y]===void 0&&(K[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),K[Y].usedTimes++;let bt=K[b.__cacheKey];bt!==void 0&&(K[b.__cacheKey].usedTimes--,bt.usedTimes===0&&S(_)),b.__cacheKey=Y,b.__webglTexture=K[Y].texture}return D}function q(b,_,D){let Z=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=i.TEXTURE_3D);let K=Jt(b,_),Y=_.source;e.bindTexture(Z,b.__webglTexture,i.TEXTURE0+D);let bt=n.get(Y);if(Y.version!==bt.__version||K===!0){e.activeTexture(i.TEXTURE0+D);let ot=Vt.getPrimaries(Vt.workingColorSpace),ft=_.colorSpace===Un?null:Vt.getPrimaries(_.colorSpace),kt=_.colorSpace===Un||ot===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let j=x(_.image,!1,s.maxTextureSize);j=Xt(_,j);let pt=r.convert(_.format,_.colorSpace),Tt=r.convert(_.type),Ct=w(_.internalFormat,pt,Tt,_.colorSpace,_.isVideoTexture);Pt(Z,_);let mt,zt=_.mipmaps,Ft=_.isVideoTexture!==!0,ee=bt.__version===void 0||K===!0,R=Y.dataReady,at=F(_,j);if(_.isDepthTexture)Ct=M(_.format===Li,_.type),ee&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,Ct,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,Ct,j.width,j.height,0,pt,Tt,null));else if(_.isDataTexture)if(zt.length>0){Ft&&ee&&e.texStorage2D(i.TEXTURE_2D,at,Ct,zt[0].width,zt[0].height);for(let G=0,J=zt.length;G<J;G++)mt=zt[G],Ft?R&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,Tt,mt.data):e.texImage2D(i.TEXTURE_2D,G,Ct,mt.width,mt.height,0,pt,Tt,mt.data);_.generateMipmaps=!1}else Ft?(ee&&e.texStorage2D(i.TEXTURE_2D,at,Ct,j.width,j.height),R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,pt,Tt,j.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,j.width,j.height,0,pt,Tt,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ft&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Ct,zt[0].width,zt[0].height,j.depth);for(let G=0,J=zt.length;G<J;G++)if(mt=zt[G],_.format!==Ze)if(pt!==null)if(Ft){if(R)if(_.layerUpdates.size>0){let ut=Dc(mt.width,mt.height,_.format,_.type);for(let lt of _.layerUpdates){let Lt=mt.data.subarray(lt*ut/mt.data.BYTES_PER_ELEMENT,(lt+1)*ut/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,lt,mt.width,mt.height,1,pt,Lt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,mt.width,mt.height,j.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Ct,mt.width,mt.height,j.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,mt.width,mt.height,j.depth,pt,Tt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Ct,mt.width,mt.height,j.depth,0,pt,Tt,mt.data)}else{Ft&&ee&&e.texStorage2D(i.TEXTURE_2D,at,Ct,zt[0].width,zt[0].height);for(let G=0,J=zt.length;G<J;G++)mt=zt[G],_.format!==Ze?pt!==null?Ft?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Ct,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?R&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,Tt,mt.data):e.texImage2D(i.TEXTURE_2D,G,Ct,mt.width,mt.height,0,pt,Tt,mt.data)}else if(_.isDataArrayTexture)if(Ft){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Ct,j.width,j.height,j.depth),R)if(_.layerUpdates.size>0){let G=Dc(j.width,j.height,_.format,_.type);for(let J of _.layerUpdates){let ut=j.data.subarray(J*G/j.data.BYTES_PER_ELEMENT,(J+1)*G/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,j.width,j.height,1,pt,Tt,ut)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,pt,Tt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,j.width,j.height,j.depth,0,pt,Tt,j.data);else if(_.isData3DTexture)Ft?(ee&&e.texStorage3D(i.TEXTURE_3D,at,Ct,j.width,j.height,j.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,pt,Tt,j.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,j.width,j.height,j.depth,0,pt,Tt,j.data);else if(_.isFramebufferTexture){if(ee)if(Ft)e.texStorage2D(i.TEXTURE_2D,at,Ct,j.width,j.height);else{let G=j.width,J=j.height;for(let ut=0;ut<at;ut++)e.texImage2D(i.TEXTURE_2D,ut,Ct,G,J,0,pt,Tt,null),G>>=1,J>>=1}}else if(zt.length>0){if(Ft&&ee){let G=_t(zt[0]);e.texStorage2D(i.TEXTURE_2D,at,Ct,G.width,G.height)}for(let G=0,J=zt.length;G<J;G++)mt=zt[G],Ft?R&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,pt,Tt,mt):e.texImage2D(i.TEXTURE_2D,G,Ct,pt,Tt,mt);_.generateMipmaps=!1}else if(Ft){if(ee){let G=_t(j);e.texStorage2D(i.TEXTURE_2D,at,Ct,G.width,G.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Tt,j)}else e.texImage2D(i.TEXTURE_2D,0,Ct,pt,Tt,j);p(_)&&u(Z),bt.__version=Y.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function X(b,_,D){if(_.image.length!==6)return;let Z=Jt(b,_),K=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+D);let Y=n.get(K);if(K.version!==Y.__version||Z===!0){e.activeTexture(i.TEXTURE0+D);let bt=Vt.getPrimaries(Vt.workingColorSpace),ot=_.colorSpace===Un?null:Vt.getPrimaries(_.colorSpace),ft=_.colorSpace===Un||bt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let kt=_.isCompressedTexture||_.image[0].isCompressedTexture,j=_.image[0]&&_.image[0].isDataTexture,pt=[];for(let J=0;J<6;J++)!kt&&!j?pt[J]=x(_.image[J],!0,s.maxCubemapSize):pt[J]=j?_.image[J].image:_.image[J],pt[J]=Xt(_,pt[J]);let Tt=pt[0],Ct=r.convert(_.format,_.colorSpace),mt=r.convert(_.type),zt=w(_.internalFormat,Ct,mt,_.colorSpace),Ft=_.isVideoTexture!==!0,ee=Y.__version===void 0||Z===!0,R=K.dataReady,at=F(_,Tt);Pt(i.TEXTURE_CUBE_MAP,_);let G;if(kt){Ft&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,zt,Tt.width,Tt.height);for(let J=0;J<6;J++){G=pt[J].mipmaps;for(let ut=0;ut<G.length;ut++){let lt=G[ut];_.format!==Ze?Ct!==null?Ft?R&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,0,0,lt.width,lt.height,Ct,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,zt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,0,0,lt.width,lt.height,Ct,mt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,zt,lt.width,lt.height,0,Ct,mt,lt.data)}}}else{if(G=_.mipmaps,Ft&&ee){G.length>0&&at++;let J=_t(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,zt,J.width,J.height)}for(let J=0;J<6;J++)if(j){Ft?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pt[J].width,pt[J].height,Ct,mt,pt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,zt,pt[J].width,pt[J].height,0,Ct,mt,pt[J].data);for(let ut=0;ut<G.length;ut++){let Lt=G[ut].image[J].image;Ft?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,0,0,Lt.width,Lt.height,Ct,mt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,zt,Lt.width,Lt.height,0,Ct,mt,Lt.data)}}else{Ft?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ct,mt,pt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,zt,Ct,mt,pt[J]);for(let ut=0;ut<G.length;ut++){let lt=G[ut];Ft?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,0,0,Ct,mt,lt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,zt,Ct,mt,lt.image[J])}}}p(_)&&u(i.TEXTURE_CUBE_MAP),Y.__version=K.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function nt(b,_,D,Z,K,Y){let bt=r.convert(D.format,D.colorSpace),ot=r.convert(D.type),ft=w(D.internalFormat,bt,ot,D.colorSpace),kt=n.get(_),j=n.get(D);if(j.__renderTarget=_,!kt.__hasExternalTextures){let pt=Math.max(1,_.width>>Y),Tt=Math.max(1,_.height>>Y);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,Y,ft,pt,Tt,_.depth,0,bt,ot,null):e.texImage2D(K,Y,ft,pt,Tt,0,bt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),Rt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,K,j.__webglTexture,0,ct(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,K,j.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Q(b,_,D){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){let Z=_.depthTexture,K=Z&&Z.isDepthTexture?Z.type:null,Y=M(_.stencilBuffer,K),bt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=ct(_);Rt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,Y,_.width,_.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,b)}else{let Z=_.textures;for(let K=0;K<Z.length;K++){let Y=Z[K],bt=r.convert(Y.format,Y.colorSpace),ot=r.convert(Y.type),ft=w(Y.internalFormat,bt,ot,Y.colorSpace),kt=ct(_);D&&Rt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,ft,_.width,_.height):Rt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt,ft,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ft,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(_.depthTexture);Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$(_.depthTexture,0);let K=Z.__webglTexture,Y=ct(_);if(_.depthTexture.format===Ei)Rt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(_.depthTexture.format===Li)Rt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function St(b){let _=n.get(b),D=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let Z=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",K)};Z.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=Z}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");rt(_.__webglFramebuffer,b)}else if(D){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=i.createRenderbuffer(),Q(_.__webglDepthbuffer[Z],b,!1);else{let K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Q(_.__webglDepthbuffer,b,!1);else{let Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(b,_,D){let Z=n.get(b);_!==void 0&&nt(Z.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&St(b)}function Ht(b){let _=b.texture,D=n.get(b),Z=n.get(_);b.addEventListener("dispose",T);let K=b.textures,Y=b.isWebGLCubeRenderTarget===!0,bt=K.length>1;if(bt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=_.version,a.memory.textures++),Y){D.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[ot]=[];for(let ft=0;ft<_.mipmaps.length;ft++)D.__webglFramebuffer[ot][ft]=i.createFramebuffer()}else D.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let ot=0;ot<_.mipmaps.length;ot++)D.__webglFramebuffer[ot]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(bt)for(let ot=0,ft=K.length;ot<ft;ot++){let kt=n.get(K[ot]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&Rt(b)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ot=0;ot<K.length;ot++){let ft=K[ot];D.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[ot]);let kt=r.convert(ft.format,ft.colorSpace),j=r.convert(ft.type),pt=w(ft.internalFormat,kt,j,ft.colorSpace,b.isXRRenderTarget===!0),Tt=ct(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,pt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,D.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),Q(D.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,_);for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)nt(D.__webglFramebuffer[ot][ft],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else nt(D.__webglFramebuffer[ot],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(_)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ot=0,ft=K.length;ot<ft;ot++){let kt=K[ot],j=n.get(kt);e.bindTexture(i.TEXTURE_2D,j.__webglTexture),Pt(i.TEXTURE_2D,kt),nt(D.__webglFramebuffer,b,kt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),p(kt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ot=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Z.__webglTexture),Pt(ot,_),_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)nt(D.__webglFramebuffer[ft],b,_,i.COLOR_ATTACHMENT0,ot,ft);else nt(D.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,ot,0);p(_)&&u(ot),e.unbindTexture()}b.depthBuffer&&St(b)}function At(b){let _=b.textures;for(let D=0,Z=_.length;D<Z;D++){let K=_[D];if(p(K)){let Y=E(b),bt=n.get(K).__webglTexture;e.bindTexture(Y,bt),u(Y),e.unbindTexture()}}}let Gt=[],I=[];function Nt(b){if(b.samples>0){if(Rt(b)===!1){let _=b.textures,D=b.width,Z=b.height,K=i.COLOR_BUFFER_BIT,Y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(b),ot=_.length>1;if(ot)for(let ft=0;ft<_.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let ft=0;ft<_.length;ft++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[ft]);let kt=n.get(_[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,D,Z,0,0,D,Z,K,i.NEAREST),c===!0&&(Gt.length=0,I.length=0,Gt.push(i.COLOR_ATTACHMENT0+ft),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Gt.push(Y),I.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let ft=0;ft<_.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,bt.__webglColorRenderbuffer[ft]);let kt=n.get(_[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ct(b){return Math.min(s.maxSamples,b.samples)}function Rt(b){let _=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function gt(b){let _=a.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function Xt(b,_){let D=b.colorSpace,Z=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||D!==Oi&&D!==Un&&(Vt.getTransfer(D)===Qt?(Z!==Ze||K!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),_}function _t(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=V,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=tt,this.setTextureCube=H,this.rebindTextures=Et,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Rt}function fm(i,t){function e(n,s=Un){let r,a=Vt.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kc)return i.BYTE;if(n===Vc)return i.SHORT;if(n===ts)return i.UNSIGNED_SHORT;if(n===lo)return i.INT;if(n===Qn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===ns)return i.HALF_FLOAT;if(n===Gc)return i.ALPHA;if(n===Wc)return i.RGB;if(n===Ze)return i.RGBA;if(n===Xc)return i.LUMINANCE;if(n===qc)return i.LUMINANCE_ALPHA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===Li)return i.DEPTH_STENCIL;if(n===Yc)return i.RED;if(n===fo)return i.RED_INTEGER;if(n===Zc)return i.RG;if(n===po)return i.RG_INTEGER;if(n===mo)return i.RGBA_INTEGER;if(n===Ls||n===Us||n===Ds||n===Ns)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ls)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ls)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ra||n===aa||n===oa||n===ca)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===la||n===ha||n===ua)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===la||n===ha)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ua)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===xa||n===va||n===ya||n===Ma||n===Sa||n===ba||n===wa||n===Ea)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===da)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ma)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ga)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_a)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===va)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ya)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ma)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ba)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ea)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fs||n===Aa||n===Ta)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fs)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Aa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ta)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jc||n===Ca||n===Ra||n===Ia)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ca)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ia)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Za=class extends we{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},bi=class extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}},pm={type:"move"},ji=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),u=this._getHandJoint(l,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new bi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},mm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gm=`
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

}`,Ja=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Be,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ke({vertexShader:mm,fragmentShader:gm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new Zs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$a=class extends On{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,m=null,g=null,x=new Ja,p=e.getContextAttributes(),u=null,E=null,w=[],M=[],F=new Bt,A=null,T=new we;T.viewport=new jt;let U=new we;U.viewport=new jt;let S=[T,U],y=new Za,C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let X=w[q];return X===void 0&&(X=new ji,w[q]=X),X.getTargetRaySpace()},this.getControllerGrip=function(q){let X=w[q];return X===void 0&&(X=new ji,w[q]=X),X.getGripSpace()},this.getHand=function(q){let X=w[q];return X===void 0&&(X=new ji,w[q]=X),X.getHandSpace()};function O(q){let X=M.indexOf(q.inputSource);if(X===-1)return;let nt=w[X];nt!==void 0&&(nt.update(q.inputSource,q.frame,l||a),nt.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",$);for(let q=0;q<w.length;q++){let X=M[q];X!==null&&(M[q]=null,w[q].disconnect(X))}C=null,V=null,x.reset(),t.setRenderTarget(u),m=null,f=null,d=null,s=null,E=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",k),s.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){let X={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,X),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Mn(m.framebufferWidth,m.framebufferHeight,{format:Ze,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let X=null,nt=null,Q=null;p.depth&&(Q=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=p.stencil?Li:Ei,nt=p.stencil?Pi:Qn);let rt={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(rt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Mn(f.textureWidth,f.textureHeight,{format:Ze,type:yn,depthTexture:new $s(f.textureWidth,f.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(q){for(let X=0;X<q.removed.length;X++){let nt=q.removed[X],Q=M.indexOf(nt);Q>=0&&(M[Q]=null,w[Q].disconnect(nt))}for(let X=0;X<q.added.length;X++){let nt=q.added[X],Q=M.indexOf(nt);if(Q===-1){for(let St=0;St<w.length;St++)if(St>=M.length){M.push(nt),Q=St;break}else if(M[St]===null){M[St]=nt,Q=St;break}if(Q===-1)break}let rt=w[Q];rt&&rt.connect(nt)}}let W=new N,tt=new N;function H(q,X,nt){W.setFromMatrixPosition(X.matrixWorld),tt.setFromMatrixPosition(nt.matrixWorld);let Q=W.distanceTo(tt),rt=X.projectionMatrix.elements,St=nt.projectionMatrix.elements,Et=rt[14]/(rt[10]-1),Ht=rt[14]/(rt[10]+1),At=(rt[9]+1)/rt[5],Gt=(rt[9]-1)/rt[5],I=(rt[8]-1)/rt[0],Nt=(St[8]+1)/St[0],ct=Et*I,Rt=Et*Nt,gt=Q/(-I+Nt),Xt=gt*-I;if(X.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Xt),q.translateZ(gt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),rt[10]===-1)q.projectionMatrix.copy(X.projectionMatrix),q.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let _t=Et+gt,b=Ht+gt,_=ct-Xt,D=Rt+(Q-Xt),Z=At*Ht/b*_t,K=Gt*Ht/b*_t;q.projectionMatrix.makePerspective(_,D,Z,K,_t,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function st(q,X){X===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(X.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let X=q.near,nt=q.far;x.texture!==null&&(x.depthNear>0&&(X=x.depthNear),x.depthFar>0&&(nt=x.depthFar)),y.near=U.near=T.near=X,y.far=U.far=T.far=nt,(C!==y.near||V!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,V=y.far),T.layers.mask=q.layers.mask|2,U.layers.mask=q.layers.mask|4,y.layers.mask=T.layers.mask|U.layers.mask;let Q=q.parent,rt=y.cameras;st(y,Q);for(let St=0;St<rt.length;St++)st(rt[St],Q);rt.length===2?H(y,T,U):y.projectionMatrix.copy(T.projectionMatrix),dt(q,y,Q)};function dt(q,X,nt){nt===null?q.matrix.copy(X.matrixWorld):(q.matrix.copy(nt.matrixWorld),q.matrix.invert(),q.matrix.multiply(X.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(X.projectionMatrix),q.projectionMatrixInverse.copy(X.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=es*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let Mt=null;function Pt(q,X){if(h=X.getViewerPose(l||a),g=X,h!==null){let nt=h.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let Q=!1;nt.length!==y.cameras.length&&(y.cameras.length=0,Q=!0);for(let St=0;St<nt.length;St++){let Et=nt[St],Ht=null;if(m!==null)Ht=m.getViewport(Et);else{let Gt=d.getViewSubImage(f,Et);Ht=Gt.viewport,St===0&&(t.setRenderTargetTextures(E,Gt.colorTexture,f.ignoreDepthValues?void 0:Gt.depthStencilTexture),t.setRenderTarget(E))}let At=S[St];At===void 0&&(At=new we,At.layers.enable(St),At.viewport=new jt,S[St]=At),At.matrix.fromArray(Et.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(Et.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),St===0&&(y.matrix.copy(At.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Q===!0&&y.cameras.push(At)}let rt=s.enabledFeatures;if(rt&&rt.includes("depth-sensing")){let St=d.getDepthInformation(nt[0]);St&&St.isValid&&St.texture&&x.init(t,St,s.renderState)}}for(let nt=0;nt<w.length;nt++){let Q=M[nt],rt=w[nt];Q!==null&&rt!==void 0&&rt.update(Q,X,l||a)}Mt&&Mt(q,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),g=null}let Jt=new el;Jt.setAnimationLoop(Pt),this.setAnimationLoop=function(q){Mt=q},this.dispose=function(){}}},Xn=new bn,_m=new oe;function xm(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,tl(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,E,w,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),x(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,E,w):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Te&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Te&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let E=t.get(u),w=E.envMap,M=E.envMapRotation;w&&(p.envMap.value=w,Xn.copy(M),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),p.envMapRotation.value.setFromMatrix4(_m.makeRotationFromEuler(Xn)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,E,w){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*E,p.scale.value=w*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,E){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Te&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){let E=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vm(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,w){let M=w.program;n.uniformBlockBinding(E,M)}function l(E,w){let M=s[E.id];M===void 0&&(g(E),M=h(E),s[E.id]=M,E.addEventListener("dispose",p));let F=w.program;n.updateUBOMapping(E,F);let A=t.render.frame;r[E.id]!==A&&(f(E),r[E.id]=A)}function h(E){let w=d();E.__bindingPointIndex=w;let M=i.createBuffer(),F=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,F,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,M),M}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let w=s[E.id],M=E.uniforms,F=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let A=0,T=M.length;A<T;A++){let U=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,y=U.length;S<y;S++){let C=U[S];if(m(C,A,S,F)===!0){let V=C.__offset,O=Array.isArray(C.value)?C.value:[C.value],k=0;for(let $=0;$<O.length;$++){let W=O[$],tt=x(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,V+k,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,k),k+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,w,M,F){let A=E.value,T=w+"_"+M;if(F[T]===void 0)return typeof A=="number"||typeof A=="boolean"?F[T]=A:F[T]=A.clone(),!0;{let U=F[T];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return F[T]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(E){let w=E.uniforms,M=0,F=16;for(let T=0,U=w.length;T<U;T++){let S=Array.isArray(w[T])?w[T]:[w[T]];for(let y=0,C=S.length;y<C;y++){let V=S[y],O=Array.isArray(V.value)?V.value:[V.value];for(let k=0,$=O.length;k<$;k++){let W=O[k],tt=x(W),H=M%F,st=H%tt.boundary,dt=H+st;M+=st,dt!==0&&F-dt<tt.storage&&(M+=F-dt),V.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=tt.storage}}}let A=M%F;return A>0&&(M+=F-A),E.__size=M,E.__cache={},this}function x(E){let w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function p(E){let w=E.target;w.removeEventListener("dispose",p);let M=a.indexOf(w.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function u(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:u}}var Ks=class{constructor(t={}){let{canvas:e=bh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let g=new Uint32Array(4),x=new Int32Array(4),p=null,u=null,E=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=Nn,this.toneMappingExposure=1;let M=this,F=!1,A=0,T=0,U=null,S=-1,y=null,C=new jt,V=new jt,O=null,k=new Zt(0),$=0,W=e.width,tt=e.height,H=1,st=null,dt=null,Mt=new jt(0,0,W,tt),Pt=new jt(0,0,W,tt),Jt=!1,q=new Ys,X=!1,nt=!1,Q=new oe,rt=new oe,St=new N,Et=new jt,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},At=!1;function Gt(){return U===null?H:1}let I=n;function Nt(v,P){return e.getContext(v,P)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${co}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",lt,!1),I===null){let P="webgl2";if(I=Nt(P,v),I===null)throw Nt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let ct,Rt,gt,Xt,_t,b,_,D,Z,K,Y,bt,ot,ft,kt,j,pt,Tt,Ct,mt,zt,Ft,ee,R;function at(){ct=new Nf(I),ct.init(),Ft=new fm(I,ct),Rt=new Rf(I,ct,t,Ft),gt=new hm(I,ct),Rt.reverseDepthBuffer&&f&&gt.buffers.depth.setReversed(!0),Xt=new Bf(I),_t=new Kp,b=new dm(I,ct,gt,_t,Rt,Ft,Xt),_=new Pf(M),D=new Df(M),Z=new Wh(I),ee=new Tf(I,Z),K=new Ff(I,Z,Xt,ee),Y=new kf(I,K,Z,Xt),Ct=new zf(I,Rt,b),j=new If(_t),bt=new $p(M,_,D,ct,Rt,ee,j),ot=new xm(M,_t),ft=new jp,kt=new rm(ct),Tt=new Af(M,_,D,gt,Y,m,c),pt=new cm(M,Y,Rt),R=new vm(I,Xt,Rt,gt),mt=new Cf(I,ct,Xt),zt=new Of(I,ct,Xt),Xt.programs=bt.programs,M.capabilities=Rt,M.extensions=ct,M.properties=_t,M.renderLists=ft,M.shadowMap=pt,M.state=gt,M.info=Xt}at();let G=new $a(M,I);this.xr=G,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let v=ct.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ct.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(W,tt,!1))},this.getSize=function(v){return v.set(W,tt)},this.setSize=function(v,P,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=v,tt=P,e.width=Math.floor(v*H),e.height=Math.floor(P*H),B===!0&&(e.style.width=v+"px",e.style.height=P+"px"),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(W*H,tt*H).floor()},this.setDrawingBufferSize=function(v,P,B){W=v,tt=P,H=B,e.width=Math.floor(v*B),e.height=Math.floor(P*B),this.setViewport(0,0,v,P)},this.getCurrentViewport=function(v){return v.copy(C)},this.getViewport=function(v){return v.copy(Mt)},this.setViewport=function(v,P,B,z){v.isVector4?Mt.set(v.x,v.y,v.z,v.w):Mt.set(v,P,B,z),gt.viewport(C.copy(Mt).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(Pt)},this.setScissor=function(v,P,B,z){v.isVector4?Pt.set(v.x,v.y,v.z,v.w):Pt.set(v,P,B,z),gt.scissor(V.copy(Pt).multiplyScalar(H).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(v){gt.setScissorTest(Jt=v)},this.setOpaqueSort=function(v){st=v},this.setTransparentSort=function(v){dt=v},this.getClearColor=function(v){return v.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(v=!0,P=!0,B=!0){let z=0;if(v){let L=!1;if(U!==null){let et=U.texture.format;L=et===mo||et===po||et===fo}if(L){let et=U.texture.type,ht=et===yn||et===Qn||et===ts||et===Pi||et===ho||et===uo,xt=Tt.getClearColor(),vt=Tt.getClearAlpha(),It=xt.r,Ut=xt.g,yt=xt.b;ht?(g[0]=It,g[1]=Ut,g[2]=yt,g[3]=vt,I.clearBufferuiv(I.COLOR,0,g)):(x[0]=It,x[1]=Ut,x[2]=yt,x[3]=vt,I.clearBufferiv(I.COLOR,0,x))}else z|=I.COLOR_BUFFER_BIT}P&&(z|=I.DEPTH_BUFFER_BIT),B&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ft.dispose(),kt.dispose(),_t.dispose(),_.dispose(),D.dispose(),Y.dispose(),ee.dispose(),R.dispose(),bt.dispose(),G.dispose(),G.removeEventListener("sessionstart",To),G.removeEventListener("sessionend",Co),zn.stop()};function J(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;let v=Xt.autoReset,P=pt.enabled,B=pt.autoUpdate,z=pt.needsUpdate,L=pt.type;at(),Xt.autoReset=v,pt.enabled=P,pt.autoUpdate=B,pt.needsUpdate=z,pt.type=L}function lt(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Lt(v){let P=v.target;P.removeEventListener("dispose",Lt),ae(P)}function ae(v){ve(v),_t.remove(v)}function ve(v){let P=_t.get(v).programs;P!==void 0&&(P.forEach(function(B){bt.releaseProgram(B)}),v.isShaderMaterial&&bt.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,B,z,L,et){P===null&&(P=Ht);let ht=L.isMesh&&L.matrixWorld.determinant()<0,xt=gl(v,P,B,z,L);gt.setMaterial(z,ht);let vt=B.index,It=1;if(z.wireframe===!0){if(vt=K.getWireframeAttribute(B),vt===void 0)return;It=2}let Ut=B.drawRange,yt=B.attributes.position,Wt=Ut.start*It,ne=(Ut.start+Ut.count)*It;et!==null&&(Wt=Math.max(Wt,et.start*It),ne=Math.min(ne,(et.start+et.count)*It)),vt!==null?(Wt=Math.max(Wt,0),ne=Math.min(ne,vt.count)):yt!=null&&(Wt=Math.max(Wt,0),ne=Math.min(ne,yt.count));let ie=ne-Wt;if(ie<0||ie===1/0)return;ee.setup(L,z,xt,B,vt);let Ae,qt=mt;if(vt!==null&&(Ae=Z.get(vt),qt=zt,qt.setIndex(Ae)),L.isMesh)z.wireframe===!0?(gt.setLineWidth(z.wireframeLinewidth*Gt()),qt.setMode(I.LINES)):qt.setMode(I.TRIANGLES);else if(L.isLine){let wt=z.linewidth;wt===void 0&&(wt=1),gt.setLineWidth(wt*Gt()),L.isLineSegments?qt.setMode(I.LINES):L.isLineLoop?qt.setMode(I.LINE_LOOP):qt.setMode(I.LINE_STRIP)}else L.isPoints?qt.setMode(I.POINTS):L.isSprite&&qt.setMode(I.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)qt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))qt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let wt=L._multiDrawStarts,cn=L._multiDrawCounts,Yt=L._multiDrawCount,He=vt?Z.get(vt).bytesPerElement:1,oi=_t.get(z).currentProgram.getUniforms();for(let Re=0;Re<Yt;Re++)oi.setValue(I,"_gl_DrawID",Re),qt.render(wt[Re]/He,cn[Re])}else if(L.isInstancedMesh)qt.renderInstances(Wt,ie,L.count);else if(B.isInstancedBufferGeometry){let wt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,cn=Math.min(B.instanceCount,wt);qt.renderInstances(Wt,ie,cn)}else qt.render(Wt,ie)};function $t(v,P,B){v.transparent===!0&&v.side===qe&&v.forceSinglePass===!1?(v.side=Te,v.needsUpdate=!0,cs(v,P,B),v.side=Fn,v.needsUpdate=!0,cs(v,P,B),v.side=qe):cs(v,P,B)}this.compile=function(v,P,B=null){B===null&&(B=v),u=kt.get(B),u.init(P),w.push(u),B.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(u.pushLight(L),L.castShadow&&u.pushShadow(L))}),v!==B&&v.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(u.pushLight(L),L.castShadow&&u.pushShadow(L))}),u.setupLights();let z=new Set;return v.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let et=L.material;if(et)if(Array.isArray(et))for(let ht=0;ht<et.length;ht++){let xt=et[ht];$t(xt,B,L),z.add(xt)}else $t(et,B,L),z.add(et)}),w.pop(),u=null,z},this.compileAsync=function(v,P,B=null){let z=this.compile(v,P,B);return new Promise(L=>{function et(){if(z.forEach(function(ht){_t.get(ht).currentProgram.isReady()&&z.delete(ht)}),z.size===0){L(v);return}setTimeout(et,10)}ct.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Ve=null;function on(v){Ve&&Ve(v)}function To(){zn.stop()}function Co(){zn.start()}let zn=new el;zn.setAnimationLoop(on),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(v){Ve=v,G.setAnimationLoop(v),v===null?zn.stop():zn.start()},G.addEventListener("sessionstart",To),G.addEventListener("sessionend",Co),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(P),P=G.getCamera()),v.isScene===!0&&v.onBeforeRender(M,v,P,U),u=kt.get(v,w.length),u.init(P),w.push(u),rt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),q.setFromProjectionMatrix(rt),nt=this.localClippingEnabled,X=j.init(this.clippingPlanes,nt),p=ft.get(v,E.length),p.init(),E.push(p),G.enabled===!0&&G.isPresenting===!0){let et=M.xr.getDepthSensingMesh();et!==null&&_r(et,P,-1/0,M.sortObjects)}_r(v,P,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(st,dt),At=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,At&&Tt.addToRenderList(p,v),this.info.render.frame++,X===!0&&j.beginShadows();let B=u.state.shadowsArray;pt.render(B,v,P),X===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=p.opaque,L=p.transmissive;if(u.setupLights(),P.isArrayCamera){let et=P.cameras;if(L.length>0)for(let ht=0,xt=et.length;ht<xt;ht++){let vt=et[ht];Io(z,L,v,vt)}At&&Tt.render(v);for(let ht=0,xt=et.length;ht<xt;ht++){let vt=et[ht];Ro(p,v,vt,vt.viewport)}}else L.length>0&&Io(z,L,v,P),At&&Tt.render(v),Ro(p,v,P);U!==null&&(b.updateMultisampleRenderTarget(U),b.updateRenderTargetMipmap(U)),v.isScene===!0&&v.onAfterRender(M,v,P),ee.resetDefaultState(),S=-1,y=null,w.pop(),w.length>0?(u=w[w.length-1],X===!0&&j.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function _r(v,P,B,z){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)u.pushLight(v),v.castShadow&&u.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||q.intersectsSprite(v)){z&&Et.setFromMatrixPosition(v.matrixWorld).applyMatrix4(rt);let ht=Y.update(v),xt=v.material;xt.visible&&p.push(v,ht,xt,B,Et.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||q.intersectsObject(v))){let ht=Y.update(v),xt=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Et.copy(v.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Et.copy(ht.boundingSphere.center)),Et.applyMatrix4(v.matrixWorld).applyMatrix4(rt)),Array.isArray(xt)){let vt=ht.groups;for(let It=0,Ut=vt.length;It<Ut;It++){let yt=vt[It],Wt=xt[yt.materialIndex];Wt&&Wt.visible&&p.push(v,ht,Wt,B,Et.z,yt)}}else xt.visible&&p.push(v,ht,xt,B,Et.z,null)}}let et=v.children;for(let ht=0,xt=et.length;ht<xt;ht++)_r(et[ht],P,B,z)}function Ro(v,P,B,z){let L=v.opaque,et=v.transmissive,ht=v.transparent;u.setupLightsView(B),X===!0&&j.setGlobalState(M.clippingPlanes,B),z&&gt.viewport(C.copy(z)),L.length>0&&os(L,P,B),et.length>0&&os(et,P,B),ht.length>0&&os(ht,P,B),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Io(v,P,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[z.id]===void 0&&(u.state.transmissionRenderTarget[z.id]=new Mn(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?ns:yn,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vt.workingColorSpace}));let et=u.state.transmissionRenderTarget[z.id],ht=z.viewport||C;et.setSize(ht.z,ht.w);let xt=M.getRenderTarget();M.setRenderTarget(et),M.getClearColor(k),$=M.getClearAlpha(),$<1&&M.setClearColor(16777215,.5),M.clear(),At&&Tt.render(B);let vt=M.toneMapping;M.toneMapping=Nn;let It=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),u.setupLightsView(z),X===!0&&j.setGlobalState(M.clippingPlanes,z),os(v,B,z),b.updateMultisampleRenderTarget(et),b.updateRenderTargetMipmap(et),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let yt=0,Wt=P.length;yt<Wt;yt++){let ne=P[yt],ie=ne.object,Ae=ne.geometry,qt=ne.material,wt=ne.group;if(qt.side===qe&&ie.layers.test(z.layers)){let cn=qt.side;qt.side=Te,qt.needsUpdate=!0,Po(ie,B,z,Ae,qt,wt),qt.side=cn,qt.needsUpdate=!0,Ut=!0}}Ut===!0&&(b.updateMultisampleRenderTarget(et),b.updateRenderTargetMipmap(et))}M.setRenderTarget(xt),M.setClearColor(k,$),It!==void 0&&(z.viewport=It),M.toneMapping=vt}function os(v,P,B){let z=P.isScene===!0?P.overrideMaterial:null;for(let L=0,et=v.length;L<et;L++){let ht=v[L],xt=ht.object,vt=ht.geometry,It=z===null?ht.material:z,Ut=ht.group;xt.layers.test(B.layers)&&Po(xt,P,B,vt,It,Ut)}}function Po(v,P,B,z,L,et){v.onBeforeRender(M,P,B,z,L,et),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),L.onBeforeRender(M,P,B,z,v,et),L.transparent===!0&&L.side===qe&&L.forceSinglePass===!1?(L.side=Te,L.needsUpdate=!0,M.renderBufferDirect(B,P,z,L,v,et),L.side=Fn,L.needsUpdate=!0,M.renderBufferDirect(B,P,z,L,v,et),L.side=qe):M.renderBufferDirect(B,P,z,L,v,et),v.onAfterRender(M,P,B,z,L,et)}function cs(v,P,B){P.isScene!==!0&&(P=Ht);let z=_t.get(v),L=u.state.lights,et=u.state.shadowsArray,ht=L.state.version,xt=bt.getParameters(v,L.state,et,P,B),vt=bt.getProgramCacheKey(xt),It=z.programs;z.environment=v.isMeshStandardMaterial?P.environment:null,z.fog=P.fog,z.envMap=(v.isMeshStandardMaterial?D:_).get(v.envMap||z.environment),z.envMapRotation=z.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,It===void 0&&(v.addEventListener("dispose",Lt),It=new Map,z.programs=It);let Ut=It.get(vt);if(Ut!==void 0){if(z.currentProgram===Ut&&z.lightsStateVersion===ht)return Uo(v,xt),Ut}else xt.uniforms=bt.getUniforms(v),v.onBeforeCompile(xt,M),Ut=bt.acquireProgram(xt,vt),It.set(vt,Ut),z.uniforms=xt.uniforms;let yt=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(yt.clippingPlanes=j.uniform),Uo(v,xt),z.needsLights=xl(v),z.lightsStateVersion=ht,z.needsLights&&(yt.ambientLightColor.value=L.state.ambient,yt.lightProbe.value=L.state.probe,yt.directionalLights.value=L.state.directional,yt.directionalLightShadows.value=L.state.directionalShadow,yt.spotLights.value=L.state.spot,yt.spotLightShadows.value=L.state.spotShadow,yt.rectAreaLights.value=L.state.rectArea,yt.ltc_1.value=L.state.rectAreaLTC1,yt.ltc_2.value=L.state.rectAreaLTC2,yt.pointLights.value=L.state.point,yt.pointLightShadows.value=L.state.pointShadow,yt.hemisphereLights.value=L.state.hemi,yt.directionalShadowMap.value=L.state.directionalShadowMap,yt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,yt.spotShadowMap.value=L.state.spotShadowMap,yt.spotLightMatrix.value=L.state.spotLightMatrix,yt.spotLightMap.value=L.state.spotLightMap,yt.pointShadowMap.value=L.state.pointShadowMap,yt.pointShadowMatrix.value=L.state.pointShadowMatrix),z.currentProgram=Ut,z.uniformsList=null,Ut}function Lo(v){if(v.uniformsList===null){let P=v.currentProgram.getUniforms();v.uniformsList=Ti.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function Uo(v,P){let B=_t.get(v);B.outputColorSpace=P.outputColorSpace,B.batching=P.batching,B.batchingColor=P.batchingColor,B.instancing=P.instancing,B.instancingColor=P.instancingColor,B.instancingMorph=P.instancingMorph,B.skinning=P.skinning,B.morphTargets=P.morphTargets,B.morphNormals=P.morphNormals,B.morphColors=P.morphColors,B.morphTargetsCount=P.morphTargetsCount,B.numClippingPlanes=P.numClippingPlanes,B.numIntersection=P.numClipIntersection,B.vertexAlphas=P.vertexAlphas,B.vertexTangents=P.vertexTangents,B.toneMapping=P.toneMapping}function gl(v,P,B,z,L){P.isScene!==!0&&(P=Ht),b.resetTextureUnits();let et=P.fog,ht=z.isMeshStandardMaterial?P.environment:null,xt=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Oi,vt=(z.isMeshStandardMaterial?D:_).get(z.envMap||ht),It=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ut=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),yt=!!B.morphAttributes.position,Wt=!!B.morphAttributes.normal,ne=!!B.morphAttributes.color,ie=Nn;z.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ie=M.toneMapping);let Ae=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,qt=Ae!==void 0?Ae.length:0,wt=_t.get(z),cn=u.state.lights;if(X===!0&&(nt===!0||v!==y)){let Ne=v===y&&z.id===S;j.setState(z,v,Ne)}let Yt=!1;z.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==cn.state.version||wt.outputColorSpace!==xt||L.isBatchedMesh&&wt.batching===!1||!L.isBatchedMesh&&wt.batching===!0||L.isBatchedMesh&&wt.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&wt.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&wt.instancing===!1||!L.isInstancedMesh&&wt.instancing===!0||L.isSkinnedMesh&&wt.skinning===!1||!L.isSkinnedMesh&&wt.skinning===!0||L.isInstancedMesh&&wt.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&wt.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&wt.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&wt.instancingMorph===!1&&L.morphTexture!==null||wt.envMap!==vt||z.fog===!0&&wt.fog!==et||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==j.numPlanes||wt.numIntersection!==j.numIntersection)||wt.vertexAlphas!==It||wt.vertexTangents!==Ut||wt.morphTargets!==yt||wt.morphNormals!==Wt||wt.morphColors!==ne||wt.toneMapping!==ie||wt.morphTargetsCount!==qt)&&(Yt=!0):(Yt=!0,wt.__version=z.version);let He=wt.currentProgram;Yt===!0&&(He=cs(z,P,L));let oi=!1,Re=!1,Gi=!1,se=He.getUniforms(),je=wt.uniforms;if(gt.useProgram(He.program)&&(oi=!0,Re=!0,Gi=!0),z.id!==S&&(S=z.id,Re=!0),oi||y!==v){gt.buffers.depth.getReversed()?(Q.copy(v.projectionMatrix),Eh(Q),Ah(Q),se.setValue(I,"projectionMatrix",Q)):se.setValue(I,"projectionMatrix",v.projectionMatrix),se.setValue(I,"viewMatrix",v.matrixWorldInverse);let En=se.map.cameraPosition;En!==void 0&&En.setValue(I,St.setFromMatrixPosition(v.matrixWorld)),Rt.logarithmicDepthBuffer&&se.setValue(I,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&se.setValue(I,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,Re=!0,Gi=!0)}if(L.isSkinnedMesh){se.setOptional(I,L,"bindMatrix"),se.setOptional(I,L,"bindMatrixInverse");let Ne=L.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),se.setValue(I,"boneTexture",Ne.boneTexture,b))}L.isBatchedMesh&&(se.setOptional(I,L,"batchingTexture"),se.setValue(I,"batchingTexture",L._matricesTexture,b),se.setOptional(I,L,"batchingIdTexture"),se.setValue(I,"batchingIdTexture",L._indirectTexture,b),se.setOptional(I,L,"batchingColorTexture"),L._colorsTexture!==null&&se.setValue(I,"batchingColorTexture",L._colorsTexture,b));let Wi=B.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&Ct.update(L,B,He),(Re||wt.receiveShadow!==L.receiveShadow)&&(wt.receiveShadow=L.receiveShadow,se.setValue(I,"receiveShadow",L.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(je.envMap.value=vt,je.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&P.environment!==null&&(je.envMapIntensity.value=P.environmentIntensity),Re&&(se.setValue(I,"toneMappingExposure",M.toneMappingExposure),wt.needsLights&&_l(je,Gi),et&&z.fog===!0&&ot.refreshFogUniforms(je,et),ot.refreshMaterialUniforms(je,z,H,tt,u.state.transmissionRenderTarget[v.id]),Ti.upload(I,Lo(wt),je,b)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ti.upload(I,Lo(wt),je,b),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&se.setValue(I,"center",L.center),se.setValue(I,"modelViewMatrix",L.modelViewMatrix),se.setValue(I,"normalMatrix",L.normalMatrix),se.setValue(I,"modelMatrix",L.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Ne=z.uniformsGroups;for(let En=0,An=Ne.length;En<An;En++){let Do=Ne[En];R.update(Do,He),R.bind(Do,He)}}return He}function _l(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function xl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,P,B){_t.get(v.texture).__webglTexture=P,_t.get(v.depthTexture).__webglTexture=B;let z=_t.get(v);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,P){let B=_t.get(v);B.__webglFramebuffer=P,B.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,B=0){U=v,A=P,T=B;let z=!0,L=null,et=!1,ht=!1;if(v){let vt=_t.get(v);if(vt.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(I.FRAMEBUFFER,null),z=!1;else if(vt.__webglFramebuffer===void 0)b.setupRenderTarget(v);else if(vt.__hasExternalTextures)b.rebindTextures(v,_t.get(v.texture).__webglTexture,_t.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let yt=v.depthTexture;if(vt.__boundDepthTexture!==yt){if(yt!==null&&_t.has(yt)&&(v.width!==yt.image.width||v.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(v)}}let It=v.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ht=!0);let Ut=_t.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ut[P])?L=Ut[P][B]:L=Ut[P],et=!0):v.samples>0&&b.useMultisampledRTT(v)===!1?L=_t.get(v).__webglMultisampledFramebuffer:Array.isArray(Ut)?L=Ut[B]:L=Ut,C.copy(v.viewport),V.copy(v.scissor),O=v.scissorTest}else C.copy(Mt).multiplyScalar(H).floor(),V.copy(Pt).multiplyScalar(H).floor(),O=Jt;if(gt.bindFramebuffer(I.FRAMEBUFFER,L)&&z&&gt.drawBuffers(v,L),gt.viewport(C),gt.scissor(V),gt.setScissorTest(O),et){let vt=_t.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+P,vt.__webglTexture,B)}else if(ht){let vt=_t.get(v.texture),It=P||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,vt.__webglTexture,B||0,It)}S=-1},this.readRenderTargetPixels=function(v,P,B,z,L,et,ht){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=_t.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ht!==void 0&&(xt=xt[ht]),xt){gt.bindFramebuffer(I.FRAMEBUFFER,xt);try{let vt=v.texture,It=vt.format,Ut=vt.type;if(!Rt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-z&&B>=0&&B<=v.height-L&&I.readPixels(P,B,z,L,Ft.convert(It),Ft.convert(Ut),et)}finally{let vt=U!==null?_t.get(U).__webglFramebuffer:null;gt.bindFramebuffer(I.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(v,P,B,z,L,et,ht){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=_t.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ht!==void 0&&(xt=xt[ht]),xt){let vt=v.texture,It=vt.format,Ut=vt.type;if(!Rt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=v.width-z&&B>=0&&B<=v.height-L){gt.bindFramebuffer(I.FRAMEBUFFER,xt);let yt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,yt),I.bufferData(I.PIXEL_PACK_BUFFER,et.byteLength,I.STREAM_READ),I.readPixels(P,B,z,L,Ft.convert(It),Ft.convert(Ut),0);let Wt=U!==null?_t.get(U).__webglFramebuffer:null;gt.bindFramebuffer(I.FRAMEBUFFER,Wt);let ne=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await wh(I,ne,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,yt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,et),I.deleteBuffer(yt),I.deleteSync(ne),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,P=null,B=0){v.isTexture!==!0&&(Ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,v=arguments[1]);let z=Math.pow(2,-B),L=Math.floor(v.image.width*z),et=Math.floor(v.image.height*z),ht=P!==null?P.x:0,xt=P!==null?P.y:0;b.setTexture2D(v,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,ht,xt,L,et),gt.unbindTexture()},this.copyTextureToTexture=function(v,P,B=null,z=null,L=0){v.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,v=arguments[1],P=arguments[2],L=arguments[3]||0,B=null);let et,ht,xt,vt,It,Ut,yt,Wt,ne,ie=v.isCompressedTexture?v.mipmaps[L]:v.image;B!==null?(et=B.max.x-B.min.x,ht=B.max.y-B.min.y,xt=B.isBox3?B.max.z-B.min.z:1,vt=B.min.x,It=B.min.y,Ut=B.isBox3?B.min.z:0):(et=ie.width,ht=ie.height,xt=ie.depth||1,vt=0,It=0,Ut=0),z!==null?(yt=z.x,Wt=z.y,ne=z.z):(yt=0,Wt=0,ne=0);let Ae=Ft.convert(P.format),qt=Ft.convert(P.type),wt;P.isData3DTexture?(b.setTexture3D(P,0),wt=I.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(b.setTexture2DArray(P,0),wt=I.TEXTURE_2D_ARRAY):(b.setTexture2D(P,0),wt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,P.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,P.unpackAlignment);let cn=I.getParameter(I.UNPACK_ROW_LENGTH),Yt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),He=I.getParameter(I.UNPACK_SKIP_PIXELS),oi=I.getParameter(I.UNPACK_SKIP_ROWS),Re=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ie.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ie.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,vt),I.pixelStorei(I.UNPACK_SKIP_ROWS,It),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ut);let Gi=v.isDataArrayTexture||v.isData3DTexture,se=P.isDataArrayTexture||P.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){let je=_t.get(v),Wi=_t.get(P),Ne=_t.get(je.__renderTarget),En=_t.get(Wi.__renderTarget);gt.bindFramebuffer(I.READ_FRAMEBUFFER,Ne.__webglFramebuffer),gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let An=0;An<xt;An++)Gi&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.get(v).__webglTexture,L,Ut+An),v.isDepthTexture?(se&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.get(P).__webglTexture,L,ne+An),I.blitFramebuffer(vt,It,et,ht,yt,Wt,et,ht,I.DEPTH_BUFFER_BIT,I.NEAREST)):se?I.copyTexSubImage3D(wt,L,yt,Wt,ne+An,vt,It,et,ht):I.copyTexSubImage2D(wt,L,yt,Wt,ne+An,vt,It,et,ht);gt.bindFramebuffer(I.READ_FRAMEBUFFER,null),gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else se?v.isDataTexture||v.isData3DTexture?I.texSubImage3D(wt,L,yt,Wt,ne,et,ht,xt,Ae,qt,ie.data):P.isCompressedArrayTexture?I.compressedTexSubImage3D(wt,L,yt,Wt,ne,et,ht,xt,Ae,ie.data):I.texSubImage3D(wt,L,yt,Wt,ne,et,ht,xt,Ae,qt,ie):v.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,L,yt,Wt,et,ht,Ae,qt,ie.data):v.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,L,yt,Wt,ie.width,ie.height,Ae,ie.data):I.texSubImage2D(I.TEXTURE_2D,L,yt,Wt,et,ht,Ae,qt,ie);I.pixelStorei(I.UNPACK_ROW_LENGTH,cn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Yt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,He),I.pixelStorei(I.UNPACK_SKIP_ROWS,oi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Re),L===0&&P.generateMipmaps&&I.generateMipmap(wt),gt.unbindTexture()},this.copyTextureToTexture3D=function(v,P,B=null,z=null,L=0){return v.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,v=arguments[2],P=arguments[3],L=arguments[4]||0),Ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,P,B,z,L)},this.initRenderTarget=function(v){_t.get(v).__webglFramebuffer===void 0&&b.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?b.setTextureCube(v,0):v.isData3DTexture?b.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?b.setTexture2DArray(v,0):b.setTexture2D(v,0),gt.unbindTexture()},this.resetState=function(){A=0,T=0,U=null,gt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Vt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Vt._getUnpackColorSpace()}};var Qs=class extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ka=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=La,this.updateRanges=[],this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Se=new N,en=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ye(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ye(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ye(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ye(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ye(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),s=Kt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var js=class i extends Ue{constructor(t=[new Bt(0,-.5),new Bt(.5,0),new Bt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=me(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/e,d=new N,f=new Bt,m=new N,g=new N,x=new N,p=0,u=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:p=t[E+1].x-t[E].x,u=t[E+1].y-t[E].y,m.x=u*1,m.y=-p,m.z=u*0,x.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:p=t[E+1].x-t[E].x,u=t[E+1].y-t[E].y,m.x=u*1,m.y=-p,m.z=u*0,g.copy(m),m.x+=x.x,m.y+=x.y,m.z+=x.z,m.normalize(),c.push(m.x,m.y,m.z),x.copy(g)}for(let E=0;E<=e;E++){let w=n+E*h*s,M=Math.sin(w),F=Math.cos(w);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*M,d.y=t[A].y,d.z=t[A].x*F,a.push(d.x,d.y,d.z),f.x=E/e,f.y=A/(t.length-1),o.push(f.x,f.y);let T=c[3*A+0]*M,U=c[3*A+1],S=c[3*A+0]*F;l.push(T,U,S)}}for(let E=0;E<e;E++)for(let w=0;w<t.length-1;w++){let M=w+E*t.length,F=M,A=M+t.length,T=M+t.length+1,U=M+1;r.push(F,A,U),r.push(T,U,A)}this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("uv",new ce(o,2)),this.setAttribute("normal",new ce(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var tr=class i extends Ue{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],m=[],g=0,x=[],p=n/2,u=0;E(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(f,3)),this.setAttribute("uv",new ce(m,2));function E(){let M=new N,F=new N,A=0,T=(e-t)/n;for(let U=0;U<=r;U++){let S=[],y=U/r,C=y*(e-t)+t;for(let V=0;V<=s;V++){let O=V/s,k=O*c+o,$=Math.sin(k),W=Math.cos(k);F.x=C*$,F.y=-y*n+p,F.z=C*W,d.push(F.x,F.y,F.z),M.set($,T,W).normalize(),f.push(M.x,M.y,M.z),m.push(O,1-y),S.push(g++)}x.push(S)}for(let U=0;U<s;U++)for(let S=0;S<r;S++){let y=x[S][U],C=x[S+1][U],V=x[S+1][U+1],O=x[S][U+1];(t>0||S!==0)&&(h.push(y,C,O),A+=3),(e>0||S!==r-1)&&(h.push(C,V,O),A+=3)}l.addGroup(u,A,0),u+=A}function w(M){let F=g,A=new Bt,T=new N,U=0,S=M===!0?t:e,y=M===!0?1:-1;for(let V=1;V<=s;V++)d.push(0,p*y,0),f.push(0,y,0),m.push(.5,.5),g++;let C=g;for(let V=0;V<=s;V++){let k=V/s*c+o,$=Math.cos(k),W=Math.sin(k);T.x=S*W,T.y=p*y,T.z=S*$,d.push(T.x,T.y,T.z),f.push(0,y,0),A.x=$*.5+.5,A.y=W*.5*y+.5,m.push(A.x,A.y),g++}for(let V=0;V<s;V++){let O=F+V,k=C+V;M===!0?h.push(k,k+1,O):h.push(k+1,k,O),U+=3}l.addGroup(u,U,M===!0?1:2),u+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var er=class extends Ue{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new N,r=new N;if(t.index!==null){let a=t.attributes.position,o=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let d=c[l],f=d.start,m=d.count;for(let g=f,x=f+m;g<x;g+=3)for(let p=0;p<3;p++){let u=o.getX(g+p),E=o.getX(g+(p+1)%3);s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,E),Nc(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,d=3*o+(l+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),Nc(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new ce(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Nc(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Is(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ym(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Fi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Qa=class extends Fi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zo,endingEnd:zo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ko:r=t,o=2*e-n;break;case Vo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ko:a=t,c=2*n-e;break;case Vo:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),x=g*g,p=x*g,u=-f*p+2*f*x-f*g,E=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*g+1,w=(-1-m)*p+(1.5+m)*x+.5*g,M=m*p-m*x;for(let F=0;F!==o;++F)r[F]=u*a[h+F]+E*a[l+F]+w*a[c+F]+M*a[d+F];return r}},ja=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*d+a[c+f]*h;return r}},to=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ke=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Is(e,this.TimeBufferType),this.values=Is(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Is(t.times,Array),values:Is(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new to(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Os:e=this.InterpolantFactoryMethodDiscrete;break;case Pa:e=this.InterpolantFactoryMethodLinear;break;case vr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return Pa;case this.InterpolantFactoryMethodSmooth:return vr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&ym(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===vr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*n,f=d-n,m=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[f+g]||x!==e[m+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,f=a*n;for(let m=0;m!==n;++m)e[f+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ke.prototype.TimeBufferType=Float32Array;Ke.prototype.ValueBufferType=Float32Array;Ke.prototype.DefaultInterpolation=Pa;var ti=class extends Ke{constructor(t,e,n){super(t,e,n)}};ti.prototype.ValueTypeName="bool";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=Os;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends Ke{};eo.prototype.ValueTypeName="color";var no=class extends Ke{};no.prototype.ValueTypeName="number";var io=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Bn.slerpFlat(r,0,a,l-o,a,l,c);return r}},nr=class extends Ke{InterpolantFactoryMethodLinear(t){return new io(this.times,this.values,this.getValueSize(),t)}};nr.prototype.ValueTypeName="quaternion";nr.prototype.InterpolantFactoryMethodSmooth=void 0;var ei=class extends Ke{constructor(t,e,n){super(t,e,n)}};ei.prototype.ValueTypeName="string";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=Os;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends Ke{};so.prototype.ValueTypeName="vector";var ro=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){let m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Mm=new ro,ao=class{constructor(t){this.manager=t!==void 0?t:Mm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ao.DEFAULT_MATERIAL_NAME="__DEFAULT";var ir=class extends Ue{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var xo="\\[\\]\\.:\\/",Sm=new RegExp("["+xo+"]","g"),vo="[^"+xo+"]",bm="[^"+xo.replace("\\.","")+"]",wm=/((?:WC+[\/:])*)/.source.replace("WC",vo),Em=/(WCOD+)?/.source.replace("WCOD",bm),Am=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vo),Tm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vo),Cm=new RegExp("^"+wm+Em+Am+Tm+"$"),Rm=["material","materials","bones","map"],oo=class{constructor(t,e,n){let s=n||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sm,"")}static parseTrackName(t){let e=Cm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Rm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};re.Composite=oo;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Om=new Float32Array(1);var ni=class extends Ka{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Fc=new N,Ps=new N,sr=class{constructor(t=new N,e=new N){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Fc.subVectors(t,this.start),Ps.subVectors(this.end,this.start);let n=Ps.dot(Ps),r=Ps.dot(Fc)/n;return e&&(r=me(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=co);var al=new ze,lr=new N,ii=class extends ir{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ce(t,3)),this.setAttribute("uv",new ce(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new ni(e,6,1);return this.setAttribute("instanceStart",new en(n,3,0)),this.setAttribute("instanceEnd",new en(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new ni(e,6,1);return this.setAttribute("instanceColorStart",new en(n,3,0)),this.setAttribute("instanceColorEnd",new en(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new er(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ze);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),al.setFromBufferAttribute(e),this.boundingBox.union(al))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)lr.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(lr)),lr.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(lr));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};it.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Bt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Ee.line={uniforms:or.merge([it.common,it.fog,it.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var si=class extends ke{static get type(){return"LineMaterial"}constructor(t){super({uniforms:or.clone(Ee.line.uniforms),vertexShader:Ee.line.vertexShader,fragmentShader:Ee.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var yo=new jt,ol=new N,cl=new N,ge=new jt,_e=new jt,nn=new jt,Mo=new N,So=new oe,xe=new sr,ll=new N,hr=new ze,ur=new Sn,sn=new jt,rn,ri;function hl(i,t,e){return sn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),sn.multiplyScalar(1/sn.w),sn.x=ri/e.width,sn.y=ri/e.height,sn.applyMatrix4(i.projectionMatrixInverse),sn.multiplyScalar(1/sn.w),Math.abs(Math.max(sn.x,sn.y))}function Im(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,c=a;o<c;o++){xe.start.fromBufferAttribute(s,o),xe.end.fromBufferAttribute(r,o),xe.applyMatrix4(e);let l=new N,h=new N;rn.distanceSqToSegment(xe.start,xe.end,h,l),h.distanceTo(l)<ri*.5&&t.push({point:h,pointOnLine:l,distance:rn.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function Pm(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,c=o.attributes.instanceStart,l=o.attributes.instanceEnd,h=Math.min(o.instanceCount,c.count),d=-t.near;rn.at(1,nn),nn.w=1,nn.applyMatrix4(t.matrixWorldInverse),nn.applyMatrix4(n),nn.multiplyScalar(1/nn.w),nn.x*=r.x/2,nn.y*=r.y/2,nn.z=0,Mo.copy(nn),So.multiplyMatrices(t.matrixWorldInverse,a);for(let f=0,m=h;f<m;f++){if(ge.fromBufferAttribute(c,f),_e.fromBufferAttribute(l,f),ge.w=1,_e.w=1,ge.applyMatrix4(So),_e.applyMatrix4(So),ge.z>d&&_e.z>d)continue;if(ge.z>d){let w=ge.z-_e.z,M=(ge.z-d)/w;ge.lerp(_e,M)}else if(_e.z>d){let w=_e.z-ge.z,M=(_e.z-d)/w;_e.lerp(ge,M)}ge.applyMatrix4(n),_e.applyMatrix4(n),ge.multiplyScalar(1/ge.w),_e.multiplyScalar(1/_e.w),ge.x*=r.x/2,ge.y*=r.y/2,_e.x*=r.x/2,_e.y*=r.y/2,xe.start.copy(ge),xe.start.z=0,xe.end.copy(_e),xe.end.z=0;let x=xe.closestPointToPointParameter(Mo,!0);xe.at(x,ll);let p=Kc.lerp(ge.z,_e.z,x),u=p>=-1&&p<=1,E=Mo.distanceTo(ll)<ri*.5;if(u&&E){xe.start.fromBufferAttribute(c,f),xe.end.fromBufferAttribute(l,f),xe.start.applyMatrix4(a),xe.end.applyMatrix4(a);let w=new N,M=new N;rn.distanceSqToSegment(xe.start,xe.end,M,w),e.push({point:M,pointOnLine:w,distance:rn.origin.distanceTo(M),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}var is=class extends pe{constructor(t=new ii,e=new si({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,c=e.count;a<c;a++,o+=2)ol.fromBufferAttribute(e,a),cl.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+ol.distanceTo(cl);let r=new ni(s,2,1);return t.setAttribute("instanceDistanceStart",new en(r,1,0)),t.setAttribute("instanceDistanceEnd",new en(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;rn=t.ray;let a=this.matrixWorld,o=this.geometry,c=this.material;ri=c.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),ur.copy(o.boundingSphere).applyMatrix4(a);let l;if(n)l=ri*.5;else{let d=Math.max(s.near,ur.distanceToPoint(rn.origin));l=hl(s,d,c.resolution)}if(ur.radius+=l,rn.intersectsSphere(ur)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),hr.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=ri*.5;else{let d=Math.max(s.near,hr.distanceToPoint(rn.origin));h=hl(s,d,c.resolution)}hr.expandByScalar(h),rn.intersectsBox(hr)!==!1&&(n?Im(this,e):Pm(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(yo),this.material.uniforms.resolution.value.set(yo.z,yo.w))}};var as=i=>[parseInt(i.slice(1,3),16)/255,parseInt(i.slice(3,5),16)/255,parseInt(i.slice(5,7),16)/255],Lm=as("#2C3036"),bo=as("#9A9890"),Um=as("#D9805A"),dr=as("#B5703F"),Dm=as("#1F6B5C"),fr=i=>i<0?0:i>1?1:i,pr=i=>i*i*(3-2*i),mr=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e],ul=7,te=()=>(ul=ul*16807%2147483647)/2147483647,zi=[],ss=[],Qe=(i,t,e,n="ink",s="morph")=>zi.push({a:i,b:t,part:e,col:n,mode:s,s:0}),De=(i,t,e,n,s=!1)=>{for(let r=0;r<i.length-(s?0:1);r++)Qe(i[r],i[(r+1)%i.length],t,e,n)},an=(i,t,e=48)=>{let n=[];for(let s=0;s<e;s++){let r=s/e*Math.PI*2;n.push([Math.cos(r)*t,i,Math.sin(r)*t])}return n},de=(i,t,e)=>[Math.cos(t)*i,e,Math.sin(t)*i];function fl(i,t,e,n,s="ink"){i.forEach(([r,a])=>De(an(r,a,e),t,s,"morph",!0));for(let r=0;r<n;r++){let a=r/n*Math.PI*2;De(i.map(([o,c])=>de(c,a,o)),t,s)}}var Hi=[Math.PI/2,Math.PI/2+2*Math.PI/3,Math.PI/2+4*Math.PI/3],ki=71.6,ai=i=>3.5+4.1*Math.pow(1-Math.min(i,ki)/ki,1.55),Nm=i=>1.75-.55*Math.min(i,ki)/ki;function rs(i,t=1){let e=Nm(i),n=ai(i),s=e/(2*Math.tan(Math.PI/3)),r=[];for(let a of Hi){let o=[Math.cos(a),Math.sin(a)],c=[-Math.sin(a),Math.cos(a)];for(let[l,h]of[[s,-1],[n,-1],[n,1]])r.push([(o[0]*l+c[0]*e/2*h)*t,i,(o[1]*l+c[1]*e/2*h)*t])}return r}var Ce=[];for(let i=0;i<=ki+.01;i+=2.4)Ce.push(+i.toFixed(2));var Ao=i=>i<22?1:2;Ce.forEach(i=>De(rs(i),Ao(i),"ink","morph",!0));for(let i=0;i<9;i++)for(let t=0;t<Ce.length-1;t++)Qe(rs(Ce[t])[i],rs(Ce[t+1])[i],Ao(Ce[t]),i%3===0?"faint":"ink");for(let i of Hi)for(let t=0;t<Ce.length-1;t++)Qe(de(ai(Ce[t])+.02,i,Ce[t]),de(ai(Ce[t+1])+.02,i,Ce[t+1]),Ao(Ce[t]),"faint");De(an(0,10,72),1,"ink","morph",!0);De(an(.6,10,72),1,"ink","morph",!0);for(let i=0;i<24;i++){let t=i/24*Math.PI*2;Qe(de(10,t,0),de(10,t,.6),1,"faint")}var Km=Hi[0]-.16,Qm=Hi[0]+.16;for(let i of[-.42,.42]){let t=Ce.map(e=>{let n=Hi[0],s=[Math.cos(n),Math.sin(n)],r=[-Math.sin(n),Math.cos(n)],a=ai(e)+.08;return[s[0]*a+r[0]*i,e,s[1]*a+r[1]*i]});De(t,2,"cu")}var Vi=[];for(let i=0;i<64;i++){let t=i<26,e=t?3.25+te()*1.1:te()*Math.PI*2,n=t?26+te()*34:18+te()*48,s=4+te()*6,r=4+te()*6,a=t?12+te()*te()*34:3+te()*te()*12;if(!t&&Math.cos(e-.8)>.55)continue;let o=Math.cos(e)*n,c=Math.sin(e)*n;Vi.some(l=>Math.abs(l.x-o)<(l.w+s)/2+1.5&&Math.abs(l.z-c)<(l.d+r)/2+1.5)||Vi.push({x:o,z:c,w:s,d:r,h:a})}for(let{x:i,z:t,w:e,d:n,h:s}of Vi){let r=i-e/2,a=i+e/2,o=t-n/2,c=t+n/2,l=[[r,o],[a,o],[a,c],[r,c]];for(let h=0;h<4;h++){let[d,f]=l[h],[m,g]=l[(h+1)%4];ss.push([[d,0,f],[m,0,g]],[[d,s,f],[m,s,g]]),ss.push([[d,0,f],[d,s,f]])}for(let h=3;h<s-.5;h+=s>14?2:3)for(let d=0;d<4;d++){let[f,m]=l[d],[g,x]=l[(d+1)%4];ss.push([[f,h,m],[g,h,x],.45])}}var wo=Vi.slice().sort((i,t)=>Math.hypot(i.x,i.z)-Math.hypot(t.x,t.z)).slice(0,9);wo.forEach(({x:i,z:t,h:e})=>{let n=Math.atan2(t,i),s=Math.hypot(i,t),r=[i,Math.min(e,2.4),t],a=[i,.25,t],o=de(s*.62,n+.12,.25),c=de(10.2,n+.05,.25),l=de(3,n+.05,1.4);[r,a,o,c,l].slice(0,-1).forEach((h,d,f)=>{Qe(h,[a,o,c,l][d],2,"cu","grow"),zi[zi.length-1].k=d})});for(let i=0;i<70;i++){let t=.8+(te()-.5)*1.7,e=22+te()*50,n=1.5+te()*4,s=t+Math.PI/2,r=de(e,t,.02);ss.push([r,[r[0]+Math.cos(s)*n,.02,r[2]+Math.sin(s)*n],.5])}var pl=[[66,3.6],[69.5,4.2],[71.6,4.9],[72.5,6.4],[73.2,7.05],[74.5,7.15],[75.3,6.95],[76.1,7.05],[77.1,6.7],[78.1,5.6],[78.9,3.9],[79.6,2.1],[80.4,1.6]];fl(pl.slice(2),3,72,30);for(let i of Hi)for(let t of[-.13,0,.13]){let e=i+t;De([[63,ai(63)*(t?.8:1)],[67,4.1],[70,4.6],[72.5,6.4]].map(([n,s])=>de(s,e,n)),3)}for(let i=0;i<120;i++){let t=i/120*Math.PI*2;Qe(de(7.12,t,73.3),de(7.12,t,74.4),3,"faint"),Qe(de(7,t,75.4),de(7,t,76),3,"faint")}De(an(74.5,7.2,96),3,"cu","morph",!0);var Eo=i=>1.55-(i-80.4)/14*.3;for(let i=80.4;i<=94.5;i+=1.4)De(an(i,Eo(i),6),4,"ink","morph",!0);for(let i=0;i<6;i++){let t=i/6*Math.PI*2;Qe(de(Eo(80.4),t,80.4),de(Eo(94.4),t,94.4),4)}var ml=[[94.4,1.25],[95,2.2],[95.9,2.55],[96.9,2.45],[97.6,1.7],[98.2,1.05]];fl(ml,4,48,16);De(an(95.9,2.6,64),4,"cu","morph",!0);var wn=120,gr=i=>.95-(i-98.2)/(wn-98.2)*.8;for(let i=98.2;i<=wn;i+=1.45)De(an(i,gr(i),8),5,"ink","morph",!0);for(let i=0;i<4;i++){let t=i/4*Math.PI*2+.4;Qe(de(gr(98.2),t,98.2),de(gr(wn),t,wn),5)}for(let i of[104,110,115])De(an(i,gr(i)+.25,12),5,"ink","morph",!0);Qe([0,98.2,0],[0,wn+1.6,0],5,"cu");for(let i=0;i<8;i++){let t=i/8*Math.PI*2,e=.5,n=i%2?1.2:2.1;Qe([Math.cos(t)*e,wn+1.6+Math.sin(t)*e,0],[Math.cos(t)*n,wn+1.6+Math.sin(t)*n,0],5,"verd")}De(an(wn+1.6,.8,20).map(([i,,t])=>[i,wn+1.6+t,0]),5,"verd","morph",!0);function Fm(i,t,e,n){let s=[],a=2+te()*5,o=te()*6,c=.6+te()*1.8;for(let l=0;l<=40;l++){let h=l/40,d=Math.sin(h*Math.PI);s.push([i[0]+(t[0]-i[0])*h+Math.cos(h*a*6.28+o)*c*d*n,i[1]+(t[1]-i[1])*h-e*d+Math.sin(h*a*9+o)*c*.6*d,i[2]+(t[2]-i[2])*h+Math.sin(h*a*6.28+o)*c*d*n])}return s}var dl=()=>{if(te()<.3)return de(3+te()*10,te()*6.28,te()*5);let i=wo[Math.floor(te()*wo.length)]||Vi[0];return[i.x+(te()-.5)*i.w,Math.min(i.h,1+te()*i.h),i.z+(te()-.5)*i.d]};for(let i=1;i<=5;i++){let t=zi.filter(g=>g.part===i&&g.mode==="morph"),e=t.reduce((g,x)=>g+Math.hypot(x.b[0]-x.a[0],x.b[1]-x.a[1],x.b[2]-x.a[2]),0),n=[],s=0;for(;s<520||n.length<5;){let g=dl(),x=dl();if(Math.hypot(g[0]-x[0],g[2]-x[2])<6)continue;let p=Fm(g,x,1+te()*4,.4+te());for(let u=1;u<p.length;u++)s+=Math.hypot(p[u][0]-p[u-1][0],p[u][1]-p[u-1][1],p[u][2]-p[u-1][2]);n.push(p)}let r=s/e,a=0,o=0,c=0,l=g=>{let x=g;for(;;){let p=n[a],u=p[o],E=p[o+1],w=Math.hypot(E[0]-u[0],E[1]-u[1],E[2]-u[2]);if(c+x<=w){c+=x;let M=c/w;return[u[0]+(E[0]-u[0])*M,Math.max(.05,u[1]+(E[1]-u[1])*M),u[2]+(E[2]-u[2])*M]}if(x-=w-c,c=0,o++,o>=p.length-1)return o=0,a=(a+1)%n.length,null}},h=n[0][0],d=t.map(g=>(g.a[1]+g.b[1])/2),f=Math.min(...d),m=Math.max(...d);t.forEach((g,x)=>{let p=Math.hypot(g.b[0]-g.a[0],g.b[1]-g.a[1],g.b[2]-g.a[2])*r,u=l(p);u||(h=n[a][0],u=l(p)||h),g.a0=h,g.b0=u,h=u,g.s=(d[x]-f)/Math.max(1,m-f)*.7+te()*.3})}function jm(i,t){let e=matchMedia("(prefers-reduced-motion: reduce)").matches,n;try{n=new Ks({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return!1}if(!n.getContext())return!1;n.setClearColor(0,0);let s=n.domElement;s.className="t3-canvas",s.setAttribute("aria-hidden","true");let r=new Qs,a=new we(30,1,1,2e3),o=new Di({colorWrite:!1,polygonOffset:!0,polygonOffsetFactor:2,polygonOffsetUnits:2}),c=o.clone();c.side=qe;for(let{x:X,z:nt,w:Q,d:rt,h:St}of Vi){let Et=new pe(new jn(Q,St,rt),o);Et.position.set(X,St/2,nt),r.add(Et)}let l=[],h=(X,nt)=>{let Q=new js(X.map(([St,Et])=>new Bt(Et*.97,St)),48),rt=new pe(Q,o);rt.userData.part=nt,r.add(rt),l.push(rt)},d=(X,nt,Q)=>{let rt=Ce.filter(At=>At>=X&&At<=nt),St=[];for(let At=0;At<rt.length-1;At++){let Gt=rs(rt[At],.96),I=rs(rt[At+1],.96);for(let Nt=0;Nt<9;Nt++){let ct=(Nt+1)%9;St.push(...Gt[Nt],...Gt[ct],...I[ct],...Gt[Nt],...I[ct],...I[Nt])}for(let Nt=0;Nt<9;Nt++)St.push(0,rt[At],0,...Gt[Nt],...Gt[(Nt+1)%9])}let Et=new Ue;Et.setAttribute("position",new ce(St,3));let Ht=new pe(Et,c);Ht.userData.part=Q,r.add(Ht),l.push(Ht)};d(0,24,1),d(21.6,ki,2),h(pl.slice(2),3),h([[80.4,1.5],[94.4,1.2]],4),h(ml,4);{let X=new pe(new tr(10,10,.6,64),o);X.position.y=.3,X.userData.part=1,r.add(X),l.push(X)}let f=new ii,m=[],g=[];for(let[X,nt,Q=1]of ss){m.push(...X,...nt);let rt=mr([.95,.93,.89],bo,Q);g.push(...rt,...rt)}for(let X of[18,30,46,64]){let nt=an(0,X,96);for(let Q=0;Q<nt.length;Q++){let rt=mr([.95,.93,.89],bo,.35);m.push(...nt[Q],...nt[(Q+1)%nt.length]),g.push(...rt,...rt)}}f.setPositions(m),f.setColors(g);let x=new si({vertexColors:!0,linewidth:1}),p=new is(f,x);p.frustumCulled=!1,r.add(p);let u=zi.length,E=new ii;E.setPositions(new Float32Array(u*6)),E.setColors(new Float32Array(u*6));let w=E.attributes.instanceStart.data,M=E.attributes.instanceColorStart.data,F=new si({vertexColors:!0,linewidth:1.35}),A=new is(E,F);A.frustumCulled=!1,r.add(A);let T=document.createElement("div");T.className="t3-layer",T.setAttribute("aria-hidden","true");let S=["Modernize","Connect","Automate","Understand","Enable AI"].map((X,nt)=>{let Q=document.createElement("span");return Q.className="t3-lbl",Q.innerHTML=`<b>0${nt+1}</b>${X}`,T.append(Q),Q}),y=document.createElement("p");y.className="t3-cap t3-cap-a",y.textContent="Today \xB7 systems held together by workarounds";let C=document.createElement("p");C.className="t3-cap t3-cap-b",C.innerHTML="From legacy to <b>working AI</b>.",T.append(y,C);let V=[[ai(9)+.3,9],[ai(42)+.3,42],[7.2,74.5],[2.6,95.9],[.6,110]];i.append(s,T),i.classList.add("is-3d"),i.setAttribute("role","img"),i.setAttribute("aria-label","Line drawing that changes as you scroll: low buildings tangled together with cables are pulled, one capability at a time, into a single tower. 01 Modernize forms the base, 02 Connect the shaft and copper links from every building, 03 Automate the main deck, 04 Understand the upper deck, 05 Enable AI the mast. From legacy to working AI.");let O=0,k=0,$=()=>{let X=i.getBoundingClientRect();O=Math.max(1,Math.round(X.width)),k=Math.max(1,Math.round(X.height));let nt=Math.min(devicePixelRatio||1,2);n.setPixelRatio(nt),n.setSize(O,k,!1),s.style.width=O+"px",s.style.height=k+"px",a.aspect=O/k,a.updateProjectionMatrix(),x.resolution.set(O,k),F.resolution.set(O,k)},W=[[0,7,86,.2,.5],[1,14,88,.16,.62],[2,38,122,.1,.78],[3,68,112,.06,.92],[4,88,120,.04,1.04],[5,62,1,.04,1.14]],tt=X=>{let nt=Math.min(4,Math.floor(X)),Q=pr(X-nt),rt=W[nt],St=W[nt+1];return rt.map((Et,Ht)=>Et+(St[Ht]-Et)*Q)},H=()=>{let X=Math.tan(a.fov*Math.PI/360);return Math.max(130/2/X,70/2/(X*a.aspect))*1.04},st=[0,0,0,0,0],dt=-1,Mt=0,Pt=new N;function Jt(){Mt=0;let X=e?5:st.reduce((Nt,ct)=>Nt+ct,0),nt=e?[1,1,1,1,1]:st,Q=tt(X),rt=Q[2];X>4&&(rt=120+(H()-120)*pr(X-4)),X<=4&&a.aspect<1&&(rt*=1+(1-a.aspect)*.7);let St=Q[1],Et=Q[3],Ht=Q[4];a.position.set(Math.cos(Ht)*Math.cos(Et)*rt,St+Math.sin(Et)*rt,Math.sin(Ht)*Math.cos(Et)*rt),a.lookAt(0,St,0);let At=w.array,Gt=M.array;for(let Nt=0;Nt<u;Nt++){let ct=zi[Nt],Rt=nt[ct.part-1],gt=Nt*6,Xt=ct.col==="cu"?dr:ct.col==="verd"?Dm:ct.col==="faint"?bo:Lm;if(ct.mode==="grow"){let D=fr(fr((Rt-.1)/.75)*4-ct.k),Z=[ct.a[0]+(ct.b[0]-ct.a[0])*D,ct.a[1]+(ct.b[1]-ct.a[1])*D,ct.a[2]+(ct.b[2]-ct.a[2])*D];At.set(ct.a,gt),At.set(D>0?Z:ct.a,gt+3);let K=D>0?dr:[0,0,0];Gt.set(K,gt),Gt.set(K,gt+3);continue}let _t=pr(fr((Rt-ct.s*.55)/.45)),b=Math.sin(_t*Math.PI)*4;for(let D=0;D<3;D++)At[gt+D]=ct.a0[D]+(ct.a[D]-ct.a0[D])*_t,At[gt+3+D]=ct.b0[D]+(ct.b[D]-ct.b0[D])*_t;At[gt+1]+=b,At[gt+4]+=b;let _=_t<.5?mr(Um,dr,_t*2):mr(dr,Xt,(_t-.5)*2);Gt.set(_,gt),Gt.set(_,gt+3)}w.needsUpdate=!0,M.needsUpdate=!0,l.forEach(Nt=>{let ct=nt[Nt.userData.part-1],Rt=pr(fr((ct-.75)/.25));Nt.visible=Rt>.02,Nt.scale.set(Rt,1,Rt)}),n.render(r,a);let I=new N().subVectors(new N(0,St,0),a.position).cross(a.up).normalize();S.forEach((Nt,ct)=>{let[Rt,gt]=V[ct],Xt=Z=>(Pt.set(I.x*Rt*Z,gt,I.z*Rt*Z).project(a),[(Pt.x*.5+.5)*O,(-Pt.y*.5+.5)*k]),[_t,b]=Xt(1),_=_t+14+Nt.offsetWidth>O-4;_&&([_t,b]=Xt(-1));let D=nt[ct]>=.6&&b>8&&b<k-8;Nt.style.transform=`translate(${(_?_t-12:_t+12).toFixed(1)}px,${b.toFixed(1)}px) translate(${_?"-100%":"0"},-50%)`,Nt.classList.toggle("flip",_),Nt.classList.toggle("on",D)}),y.classList.toggle("on",X<.5),C.classList.toggle("on",X>4.75),dt=X}let q=()=>{Mt||(Mt=requestAnimationFrame(Jt))};return t.addEventListener("chain:progress",X=>{st=X.detail,q()}),t.__ps&&(st=t.__ps),new ResizeObserver(()=>{$(),q()}).observe(i),$(),q(),!0}export{jm as mount};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

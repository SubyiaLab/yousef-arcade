(()=>{var nu="158";var Gm=0,Ef=1,Wm=2;var Gl=1,Xm=2,Xi=3,Li=0,zn=1,si=2;var Pi=0,hs=1,bi=2,Af=3,Rf=4,qm=5,Ps=100,Ym=101,Zm=102,Cf=103,Pf=104,Qm=200,Km=201,Jm=202,jm=203,fh=204,dh=205,$m=206,eg=207,tg=208,ng=209,ig=210,sg=211,rg=212,ag=213,og=214,lg=0,cg=1,hg=2,sl=3,ug=4,fg=5,dg=6,pg=7,mp=0,mg=1,gg=2,us=0,vg=1,xg=2,yg=3,iu=4,Mg=5,Lf="attached",Sg="detached",gp=300,Rr=301,Cr=302,Pr=303,ph=304,Wl=306,Hn=1e3,qn=1001,Da=1002,Ht=1003,rl=1004;var wa=1005;var Rt=1006,su=1007;var Ki=1008;var fs=1009,bg=1010,_g=1011,ru=1012,vp=1013,jn=1014,Yn=1015,nn=1016,xp=1017,yp=1018,Qi=1020,Tg=1021,_n=1023,wg=1024,Eg=1025,ci=1026,ds=1027,au=1028,Mp=1029,Ag=1030,Sp=1031,bp=1033,Cc=33776,Pc=33777,Lc=33778,Ic=33779,If=35840,Df=35841,Uf=35842,Nf=35843,Rg=36196,Ff=37492,Bf=37496,Of=37808,zf=37809,Hf=37810,kf=37811,Vf=37812,Gf=37813,Wf=37814,Xf=37815,qf=37816,Yf=37817,Zf=37818,Qf=37819,Kf=37820,Jf=37821,Dc=36492,jf=36494,$f=36495,Cg=36283,ed=36284,td=36285,nd=36286,Pg=2200,Lg=2201,Ig=2202,Lr=2300,Us=2301,Uc=2302,br=2400,_r=2401,al=2402,ou=2500,Dg=2501,_p=0,Xl=1,Ja=2,Tp=3e3,Ds=3001,Ug=3200,Ng=3201,wp=0,Fg=1,In="",Wt="srgb",xn="srgb-linear",lu="display-p3",ql="display-p3-linear",ol="linear",$t="srgb",ll="rec709",cl="p3";var tr=7680;var id=519,Bg=512,Og=513,zg=514,Hg=515,kg=516,Vg=517,Gg=518,Wg=519,mh=35044;var sd="300 es",gh=1035,Zi=2e3,hl=2001,Ji=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rd=1234567,Ea=Math.PI/180,Ir=180/Math.PI;function hi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[t&63|128]+Bn[t>>8&255]+"-"+Bn[t>>16&255]+Bn[t>>24&255]+Bn[n&255]+Bn[n>>8&255]+Bn[n>>16&255]+Bn[n>>24&255]).toLowerCase()}function gn(s,e,t){return Math.max(e,Math.min(t,s))}function cu(s,e){return(s%e+e)%e}function Xg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function qg(s,e,t){return s!==e?(t-s)/(e-s):0}function Aa(s,e,t){return(1-t)*s+t*e}function Yg(s,e,t,n){return Aa(s,e,1-Math.exp(-t*n))}function Zg(s,e=1){return e-Math.abs(cu(s,e*2)-e)}function Qg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Kg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Jg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function jg(s,e){return s+Math.random()*(e-s)}function $g(s){return s*(.5-Math.random())}function e0(s){s!==void 0&&(rd=s);let e=rd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function t0(s){return s*Ea}function n0(s){return s*Ir}function vh(s){return(s&s-1)===0&&s!==0}function Ep(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ul(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function i0(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),x=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*f,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*f,o*c);break;case"ZXZ":s.set(l*f,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*x,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*x,o*c);break;case"ZYZ":s.set(l*x,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ci(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Gt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ap={DEG2RAD:Ea,RAD2DEG:Ir,generateUUID:hi,clamp:gn,euclideanModulo:cu,mapLinear:Xg,inverseLerp:qg,lerp:Aa,damp:Yg,pingpong:Zg,smoothstep:Qg,smootherstep:Kg,randInt:Jg,randFloat:jg,randFloatSpread:$g,seededRandom:e0,degToRad:t0,radToDeg:n0,isPowerOfTwo:vh,ceilPowerOfTwo:Ep,floorPowerOfTwo:ul,setQuaternionFromProperEuler:i0,normalize:Gt,denormalize:Ci},ce=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bt=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],p=n[5],x=n[8],S=i[0],g=i[3],m=i[6],T=i[1],M=i[4],w=i[7],L=i[2],N=i[5],U=i[8];return r[0]=a*S+o*T+l*L,r[3]=a*g+o*M+l*N,r[6]=a*m+o*w+l*U,r[1]=c*S+h*T+f*L,r[4]=c*g+h*M+f*N,r[7]=c*m+h*w+f*U,r[2]=d*S+p*T+x*L,r[5]=d*g+p*M+x*N,r[8]=d*m+p*w+x*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*r,p=c*r-a*l,x=t*f+n*d+i*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=f*S,e[1]=(i*c-h*n)*S,e[2]=(o*n-i*a)*S,e[3]=d*S,e[4]=(h*t-i*l)*S,e[5]=(i*r-o*t)*S,e[6]=p*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Nc.makeScale(e,t)),this}rotate(e){return this.premultiply(Nc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Nc=new bt;function Rp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ua(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function s0(){let s=Ua("canvas");return s.style.display="block",s}var ad={};function Ra(s){s in ad||(ad[s]=!0,console.warn(s))}var od=new bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ld=new bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),To={[xn]:{transfer:ol,primaries:ll,toReference:s=>s,fromReference:s=>s},[Wt]:{transfer:$t,primaries:ll,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ql]:{transfer:ol,primaries:cl,toReference:s=>s.applyMatrix3(ld),fromReference:s=>s.applyMatrix3(od)},[lu]:{transfer:$t,primaries:cl,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ld),fromReference:s=>s.applyMatrix3(od).convertLinearToSRGB()}},r0=new Set([xn,ql]),zt={enabled:!0,_workingColorSpace:xn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!r0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=To[e].toReference,i=To[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return To[s].primaries},getTransfer:function(s){return s===In?ol:To[s].transfer}};function Er(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var nr,fl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{nr===void 0&&(nr=Ua("canvas")),nr.width=e.width,nr.height=e.height;let n=nr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=nr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ua("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Er(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Er(t[n]/255)*255):t[n]=Er(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},a0=0,dl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=hi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Bc(i[a].image)):r.push(Bc(i[a]))}else r=Bc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Bc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var o0=0,Dn=class s extends Ji{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=qn,i=qn,r=Rt,a=Ki,o=_n,l=fs,c=s.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=hi(),this.name="",this.source=new dl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ds?Wt:In),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hn:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case Da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hn:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case Da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Wt?Ds:Tp}set encoding(e){Ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ds?Wt:In}};Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=gp;Dn.DEFAULT_ANISOTROPY=1;var Zt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],x=l[9],S=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-S)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+S)<.1&&Math.abs(x+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,w=(p+1)/2,L=(m+1)/2,N=(h+d)/4,U=(f+S)/4,z=(x+g)/4;return M>w&&M>L?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=N/n,r=U/n):w>L?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=N/i,r=z/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=U/r,i=z/r),this.set(n,i,r,t),this}let T=Math.sqrt((g-x)*(g-x)+(f-S)*(f-S)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(g-x)/T,this.y=(f-S)/T,this.z=(d-h)/T,this.w=Math.acos((c+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xh=class extends Ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ra("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ds?Wt:In),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Dn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new dl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends xh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},pl=class extends Dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yh=class extends Dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ml=class extends Jt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLMultipleRenderTargets=!0;let r=this.texture;this.texture=[];for(let a=0;a<n;a++)this.texture[a]=r.clone(),this.texture[a].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}},vn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],d=r[a+0],p=r[a+1],x=r[a+2],S=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=x,e[t+3]=S;return}if(f!==S||l!==d||c!==p||h!==x){let g=1-o,m=l*d+c*p+h*x+f*S,T=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let L=Math.sqrt(M),N=Math.atan2(L,m*T);g=Math.sin(g*N)/L,o=Math.sin(o*N)/L}let w=o*T;if(l=l*g+d*w,c=c*g+p*w,h=h*g+x*w,f=f*g+S*w,g===1-o){let L=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=L,c*=L,h*=L,f*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[a],d=r[a+1],p=r[a+2],x=r[a+3];return e[t]=o*x+h*f+l*p-c*d,e[t+1]=l*x+h*d+c*f-o*p,e[t+2]=c*x+h*p+o*d-l*f,e[t+3]=h*x-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(r/2),d=l(n/2),p=l(i/2),x=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*p*x,this._y=c*p*f-d*h*x,this._z=c*h*x+d*p*f,this._w=c*h*f-d*p*x;break;case"YXZ":this._x=d*h*f+c*p*x,this._y=c*p*f-d*h*x,this._z=c*h*x-d*p*f,this._w=c*h*f+d*p*x;break;case"ZXY":this._x=d*h*f-c*p*x,this._y=c*p*f+d*h*x,this._z=c*h*x+d*p*f,this._w=c*h*f-d*p*x;break;case"ZYX":this._x=d*h*f-c*p*x,this._y=c*p*f+d*h*x,this._z=c*h*x-d*p*f,this._w=c*h*f+d*p*x;break;case"YZX":this._x=d*h*f+c*p*x,this._y=c*p*f+d*h*x,this._z=c*h*x-d*p*f,this._w=c*h*f-d*p*x;break;case"XZY":this._x=d*h*f-c*p*x,this._y=c*p*f-d*h*x,this._z=c*h*x+d*p*f,this._w=c*h*f+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=i+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oc.copy(this).projectOnVector(e),this.sub(Oc)}reflect(e){return this.sub(Oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Oc=new D,cd=new vn,ui=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yi):yi.fromBufferAttribute(r,a),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wo.copy(n.boundingBox)),wo.applyMatrix4(e.matrixWorld),this.union(wo)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),Eo.subVectors(this.max,pa),ir.subVectors(e.a,pa),sr.subVectors(e.b,pa),rr.subVectors(e.c,pa),rs.subVectors(sr,ir),as.subVectors(rr,sr),ws.subVectors(ir,rr);let t=[0,-rs.z,rs.y,0,-as.z,as.y,0,-ws.z,ws.y,rs.z,0,-rs.x,as.z,0,-as.x,ws.z,0,-ws.x,-rs.y,rs.x,0,-as.y,as.x,0,-ws.y,ws.x,0];return!zc(t,ir,sr,rr,Eo)||(t=[1,0,0,0,1,0,0,0,1],!zc(t,ir,sr,rr,Eo))?!1:(Ao.crossVectors(rs,as),t=[Ao.x,Ao.y,Ao.z],zc(t,ir,sr,rr,Eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},zi=[new D,new D,new D,new D,new D,new D,new D,new D],yi=new D,wo=new ui,ir=new D,sr=new D,rr=new D,rs=new D,as=new D,ws=new D,pa=new D,Eo=new D,Ao=new D,Es=new D;function zc(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Es.fromArray(s,r);let o=i.x*Math.abs(Es.x)+i.y*Math.abs(Es.y)+i.z*Math.abs(Es.z),l=e.dot(Es),c=t.dot(Es),h=n.dot(Es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var l0=new ui,ma=new D,Hc=new D,Zn=class{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):l0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);let t=ma.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ma,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(Hc)),this.expandByPoint(ma.copy(e.center).sub(Hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Hi=new D,kc=new D,Ro=new D,os=new D,Vc=new D,Co=new D,Gc=new D,Dr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){kc.copy(e).add(t).multiplyScalar(.5),Ro.copy(t).sub(e).normalize(),os.copy(this.origin).sub(kc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ro),o=os.dot(this.direction),l=-os.dot(Ro),c=os.lengthSq(),h=Math.abs(1-a*a),f,d,p,x;if(h>0)if(f=a*l-o,d=a*o-l,x=r*h,f>=0)if(d>=-x)if(d<=x){let S=1/h;f*=S,d*=S,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(kc).addScaledVector(Ro,d),p}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);let n=Hi.dot(this.direction),i=Hi.dot(Hi)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,i,r){Vc.subVectors(t,e),Co.subVectors(n,e),Gc.crossVectors(Vc,Co);let a=this.direction.dot(Gc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;os.subVectors(this.origin,e);let l=o*this.direction.dot(Co.crossVectors(os,Co));if(l<0)return null;let c=o*this.direction.dot(Vc.cross(os));if(c<0||l+c>a)return null;let h=-o*os.dot(Gc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class s{constructor(e,t,n,i,r,a,o,l,c,h,f,d,p,x,S,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,f,d,p,x,S,g)}set(e,t,n,i,r,a,o,l,c,h,f,d,p,x,S,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=d,m[3]=p,m[7]=x,m[11]=S,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/ar.setFromMatrixColumn(e,0).length(),r=1/ar.setFromMatrixColumn(e,1).length(),a=1/ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*f,x=o*h,S=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+x*c,t[5]=d-S*c,t[9]=-o*l,t[2]=S-d*c,t[6]=x+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*f,x=c*h,S=c*f;t[0]=d+S*o,t[4]=x*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-x,t[6]=S+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*f,x=c*h,S=c*f;t[0]=d-S*o,t[4]=-a*f,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*h,t[9]=S-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*f,x=o*h,S=o*f;t[0]=l*h,t[4]=x*c-p,t[8]=d*c+S,t[1]=l*f,t[5]=S*c+d,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,x=o*l,S=o*c;t[0]=l*h,t[4]=S-d*f,t[8]=x*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*f+x,t[10]=d-S*f}else if(e.order==="XZY"){let d=a*l,p=a*c,x=o*l,S=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+S,t[5]=a*h,t[9]=p*f-x,t[2]=x*f-p,t[6]=o*h,t[10]=S*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c0,e,h0)}lookAt(e,t,n){let i=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),ls.crossVectors(n,ni),ls.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),ls.crossVectors(n,ni)),ls.normalize(),Po.crossVectors(ni,ls),i[0]=ls.x,i[4]=Po.x,i[8]=ni.x,i[1]=ls.y,i[5]=Po.y,i[9]=ni.y,i[2]=ls.z,i[6]=Po.z,i[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],p=n[13],x=n[2],S=n[6],g=n[10],m=n[14],T=n[3],M=n[7],w=n[11],L=n[15],N=i[0],U=i[4],z=i[8],_=i[12],R=i[1],Z=i[5],K=i[9],ae=i[13],B=i[2],Q=i[6],G=i[10],j=i[14],me=i[3],re=i[7],he=i[11],W=i[15];return r[0]=a*N+o*R+l*B+c*me,r[4]=a*U+o*Z+l*Q+c*re,r[8]=a*z+o*K+l*G+c*he,r[12]=a*_+o*ae+l*j+c*W,r[1]=h*N+f*R+d*B+p*me,r[5]=h*U+f*Z+d*Q+p*re,r[9]=h*z+f*K+d*G+p*he,r[13]=h*_+f*ae+d*j+p*W,r[2]=x*N+S*R+g*B+m*me,r[6]=x*U+S*Z+g*Q+m*re,r[10]=x*z+S*K+g*G+m*he,r[14]=x*_+S*ae+g*j+m*W,r[3]=T*N+M*R+w*B+L*me,r[7]=T*U+M*Z+w*Q+L*re,r[11]=T*z+M*K+w*G+L*he,r[15]=T*_+M*ae+w*j+L*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],x=e[3],S=e[7],g=e[11],m=e[15];return x*(+r*l*f-i*c*f-r*o*d+n*c*d+i*o*p-n*l*p)+S*(+t*l*p-t*c*d+r*a*d-i*a*p+i*c*h-r*l*h)+g*(+t*c*f-t*o*p-r*a*f+n*a*p+r*o*h-n*c*h)+m*(-i*o*h-t*l*f+t*o*d+i*a*f-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],x=e[12],S=e[13],g=e[14],m=e[15],T=f*g*c-S*d*c+S*l*p-o*g*p-f*l*m+o*d*m,M=x*d*c-h*g*c-x*l*p+a*g*p+h*l*m-a*d*m,w=h*S*c-x*f*c+x*o*p-a*S*p-h*o*m+a*f*m,L=x*f*l-h*S*l-x*o*d+a*S*d+h*o*g-a*f*g,N=t*T+n*M+i*w+r*L;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/N;return e[0]=T*U,e[1]=(S*d*r-f*g*r-S*i*p+n*g*p+f*i*m-n*d*m)*U,e[2]=(o*g*r-S*l*r+S*i*c-n*g*c-o*i*m+n*l*m)*U,e[3]=(f*l*r-o*d*r-f*i*c+n*d*c+o*i*p-n*l*p)*U,e[4]=M*U,e[5]=(h*g*r-x*d*r+x*i*p-t*g*p-h*i*m+t*d*m)*U,e[6]=(x*l*r-a*g*r-x*i*c+t*g*c+a*i*m-t*l*m)*U,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*p+t*l*p)*U,e[8]=w*U,e[9]=(x*f*r-h*S*r-x*n*p+t*S*p+h*n*m-t*f*m)*U,e[10]=(a*S*r-x*o*r+x*n*c-t*S*c-a*n*m+t*o*m)*U,e[11]=(h*o*r-a*f*r-h*n*c+t*f*c+a*n*p-t*o*p)*U,e[12]=L*U,e[13]=(h*S*i-x*f*i+x*n*d-t*S*d-h*n*g+t*f*g)*U,e[14]=(x*o*i-a*S*i-x*n*l+t*S*l+a*n*g-t*o*g)*U,e[15]=(a*f*i-h*o*i+h*n*l-t*f*l-a*n*d+t*o*d)*U,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,d=r*c,p=r*h,x=r*f,S=a*h,g=a*f,m=o*f,T=l*c,M=l*h,w=l*f,L=n.x,N=n.y,U=n.z;return i[0]=(1-(S+m))*L,i[1]=(p+w)*L,i[2]=(x-M)*L,i[3]=0,i[4]=(p-w)*N,i[5]=(1-(d+m))*N,i[6]=(g+T)*N,i[7]=0,i[8]=(x+M)*U,i[9]=(g-T)*U,i[10]=(1-(d+S))*U,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=ar.set(i[0],i[1],i[2]).length(),a=ar.set(i[4],i[5],i[6]).length(),o=ar.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Mi.copy(this);let c=1/r,h=1/a,f=1/o;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=h,Mi.elements[5]*=h,Mi.elements[6]*=h,Mi.elements[8]*=f,Mi.elements[9]*=f,Mi.elements[10]*=f,t.setFromRotationMatrix(Mi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Zi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),p,x;if(o===Zi)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===hl)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Zi){let l=this.elements,c=1/(t-e),h=1/(n-i),f=1/(a-r),d=(t+e)*c,p=(n+i)*h,x,S;if(o===Zi)x=(a+r)*f,S=-2*f;else if(o===hl)x=r*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ar=new D,Mi=new Ge,c0=new D(0,0,0),h0=new D(1,1,1),ls=new D,Po=new D,ni=new D,hd=new Ge,ud=new vn,gl=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(gn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ud.setFromEuler(this),this.setFromQuaternion(ud,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gl.DEFAULT_ORDER="XYZ";var vl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},u0=0,fd=new D,or=new vn,ki=new Ge,Lo=new D,ga=new D,f0=new D,d0=new vn,dd=new D(1,0,0),pd=new D(0,1,0),md=new D(0,0,1),p0={type:"added"},m0={type:"removed"},ln=class s extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new D,t=new gl,n=new vn,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ge},normalMatrix:{value:new bt}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(dd,e)}rotateY(e){return this.rotateOnAxis(pd,e)}rotateZ(e){return this.rotateOnAxis(md,e)}translateOnAxis(e,t){return fd.copy(e).applyQuaternion(this.quaternion),this.position.add(fd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dd,e)}translateY(e){return this.translateOnAxis(pd,e)}translateZ(e){return this.translateOnAxis(md,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lo.copy(e):Lo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(ga,Lo,this.up):ki.lookAt(Lo,ga,this.up),this.quaternion.setFromRotationMatrix(ki),i&&(ki.extractRotation(i.matrixWorld),or.setFromRotationMatrix(ki),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(p0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(m0)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,f0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,d0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};ln.DEFAULT_UP=new D(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Si=new D,Vi=new D,Wc=new D,Gi=new D,lr=new D,cr=new D,gd=new D,Xc=new D,qc=new D,Yc=new D,Io=!1,Is=class s{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Si.subVectors(e,t),i.cross(Si);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Si.subVectors(i,t),Vi.subVectors(n,t),Wc.subVectors(e,t);let a=Si.dot(Si),o=Si.dot(Vi),l=Si.dot(Wc),c=Vi.dot(Vi),h=Vi.dot(Wc),f=a*c-o*o;if(f===0)return r.set(-2,-1,-1);let d=1/f,p=(c*l-o*h)*d,x=(a*h-o*l)*d;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Gi),Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getUV(e,t,n,i,r,a,o,l){return Io===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Io=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Gi),l.setScalar(0),l.addScaledVector(r,Gi.x),l.addScaledVector(a,Gi.y),l.addScaledVector(o,Gi.z),l}static isFrontFacing(e,t,n,i){return Si.subVectors(n,t),Vi.subVectors(e,t),Si.cross(Vi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),Si.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Io===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Io=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;lr.subVectors(i,n),cr.subVectors(r,n),Xc.subVectors(e,n);let l=lr.dot(Xc),c=cr.dot(Xc);if(l<=0&&c<=0)return t.copy(n);qc.subVectors(e,i);let h=lr.dot(qc),f=cr.dot(qc);if(h>=0&&f<=h)return t.copy(i);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(lr,a);Yc.subVectors(e,r);let p=lr.dot(Yc),x=cr.dot(Yc);if(x>=0&&p<=x)return t.copy(r);let S=p*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(cr,o);let g=h*x-p*f;if(g<=0&&f-h>=0&&p-x>=0)return gd.subVectors(r,i),o=(f-h)/(f-h+(p-x)),t.copy(i).addScaledVector(gd,o);let m=1/(g+S+d);return a=S*m,o=d*m,t.copy(n).addScaledVector(lr,a).addScaledVector(cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Do={h:0,s:0,l:0};function Zc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,zt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=zt.workingColorSpace){if(e=cu(e,1),t=gn(t,0,1),n=gn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Zc(a,r,e+1/3),this.g=Zc(a,r,e),this.b=Zc(a,r,e-1/3)}return zt.toWorkingColorSpace(this,i),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){let n=Cp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=Fc(e.r),this.g=Fc(e.g),this.b=Fc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return zt.fromWorkingColorSpace(On.copy(this),e),Math.round(gn(On.r*255,0,255))*65536+Math.round(gn(On.g*255,0,255))*256+Math.round(gn(On.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.fromWorkingColorSpace(On.copy(this),t);let n=On.r,i=On.g,r=On.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=zt.workingColorSpace){return zt.fromWorkingColorSpace(On.copy(this),t),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=Wt){zt.fromWorkingColorSpace(On.copy(this),e);let t=On.r,n=On.g,i=On.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+t,cs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cs),e.getHSL(Do);let n=Aa(cs.h,Do.h,t),i=Aa(cs.s,Do.s,t),r=Aa(cs.l,Do.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},On=new Ue;Ue.NAMES=Cp;var g0=0,$n=class extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=hs,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=dh,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=sl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fh&&(n.blendSrc=this.blendSrc),this.blendDst!==dh&&(n.blendDst=this.blendDst),this.blendEquation!==Ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==id&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},un=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yi=v0();function v0(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function x0(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=gn(s,-65504,65504),Yi.floatView[0]=s;let e=Yi.uint32View[0],t=e>>23&511;return Yi.baseTable[t]+((e&8388607)>>Yi.shiftTable[t])}function y0(s){let e=s>>10;return Yi.uint32View[0]=Yi.mantissaTable[Yi.offsetTable[e]+(s&1023)]+Yi.exponentTable[e],Yi.floatView[0]}var ja={toHalfFloat:x0,fromHalfFloat:y0},mn=new D,Uo=new ce,tn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mh,this.updateRange={offset:0,count:-1},this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Uo.fromBufferAttribute(this,t),Uo.applyMatrix3(e),this.setXY(t,Uo.x,Uo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};var xl=class extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var yl=class extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Et=class extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var M0=0,li=new Ge,Qc=new ln,hr=new D,ii=new ui,va=new ui,Ln=new D,Qt=class s extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rp(e)?yl:xl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new bt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,n){return li.makeTranslation(e,t,n),this.applyMatrix4(li),this}scale(e,t,n){return li.makeScale(e,t,n),this.applyMatrix4(li),this}lookAt(e){return Qc.lookAt(e),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];ii.setFromBufferAttribute(r),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];va.setFromBufferAttribute(o),this.morphTargetsRelative?(Ln.addVectors(ii.min,va.min),ii.expandByPoint(Ln),Ln.addVectors(ii.max,va.max),ii.expandByPoint(Ln)):(ii.expandByPoint(va.min),ii.expandByPoint(va.max))}ii.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ln.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ln));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ln.fromBufferAttribute(o,c),l&&(hr.fromBufferAttribute(e,c),Ln.add(hr)),i=Math.max(i,n.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<o;R++)c[R]=new D,h[R]=new D;let f=new D,d=new D,p=new D,x=new ce,S=new ce,g=new ce,m=new D,T=new D;function M(R,Z,K){f.fromArray(i,R*3),d.fromArray(i,Z*3),p.fromArray(i,K*3),x.fromArray(a,R*2),S.fromArray(a,Z*2),g.fromArray(a,K*2),d.sub(f),p.sub(f),S.sub(x),g.sub(x);let ae=1/(S.x*g.y-g.x*S.y);isFinite(ae)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(p,-S.y).multiplyScalar(ae),T.copy(p).multiplyScalar(S.x).addScaledVector(d,-g.x).multiplyScalar(ae),c[R].add(m),c[Z].add(m),c[K].add(m),h[R].add(T),h[Z].add(T),h[K].add(T))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let R=0,Z=w.length;R<Z;++R){let K=w[R],ae=K.start,B=K.count;for(let Q=ae,G=ae+B;Q<G;Q+=3)M(n[Q+0],n[Q+1],n[Q+2])}let L=new D,N=new D,U=new D,z=new D;function _(R){U.fromArray(r,R*3),z.copy(U);let Z=c[R];L.copy(Z),L.sub(U.multiplyScalar(U.dot(Z))).normalize(),N.crossVectors(z,Z);let ae=N.dot(h[R])<0?-1:1;l[R*4]=L.x,l[R*4+1]=L.y,l[R*4+2]=L.z,l[R*4+3]=ae}for(let R=0,Z=w.length;R<Z;++R){let K=w[R],ae=K.start,B=K.count;for(let Q=ae,G=ae+B;Q<G;Q+=3)_(n[Q+0]),_(n[Q+1]),_(n[Q+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,f=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){let x=e.getX(d+0),S=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ln.fromBufferAttribute(e,t),Ln.normalize(),e.setXYZ(t,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h),p=0,x=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*h;for(let m=0;m<h;m++)d[x++]=c[p++]}return new tn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vd=new Ge,As=new Dr,No=new Zn,xd=new D,ur=new D,fr=new D,dr=new D,Kc=new D,Fo=new D,Bo=new ce,Oo=new ce,zo=new ce,yd=new D,Md=new D,Sd=new D,Ho=new D,ko=new D,Le=class extends ln{constructor(e=new Qt,t=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Kc.fromBufferAttribute(f,e),a?Fo.addScaledVector(Kc,h):Fo.addScaledVector(Kc.sub(t),h))}t.add(Fo)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(r),As.copy(e.ray).recast(e.near),!(No.containsPoint(As.origin)===!1&&(As.intersectSphere(No,xd)===null||As.origin.distanceToSquared(xd)>(e.far-e.near)**2))&&(vd.copy(r).invert(),As.copy(e.ray).applyMatrix4(vd),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=d.length;x<S;x++){let g=d[x],m=a[g.materialIndex],T=Math.max(g.start,p.start),M=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let w=T,L=M;w<L;w+=3){let N=o.getX(w),U=o.getX(w+1),z=o.getX(w+2);i=Vo(this,m,e,n,c,h,f,N,U,z),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let x=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let g=x,m=S;g<m;g+=3){let T=o.getX(g),M=o.getX(g+1),w=o.getX(g+2);i=Vo(this,a,e,n,c,h,f,T,M,w),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=d.length;x<S;x++){let g=d[x],m=a[g.materialIndex],T=Math.max(g.start,p.start),M=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let w=T,L=M;w<L;w+=3){let N=w,U=w+1,z=w+2;i=Vo(this,m,e,n,c,h,f,N,U,z),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let x=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let g=x,m=S;g<m;g+=3){let T=g,M=g+1,w=g+2;i=Vo(this,a,e,n,c,h,f,T,M,w),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function S0(s,e,t,n,i,r,a,o){let l;if(e.side===zn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Li,o),l===null)return null;ko.copy(o),ko.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ko);return c<t.near||c>t.far?null:{distance:c,point:ko.clone(),object:s}}function Vo(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,ur),s.getVertexPosition(l,fr),s.getVertexPosition(c,dr);let h=S0(s,e,t,n,ur,fr,dr,Ho);if(h){i&&(Bo.fromBufferAttribute(i,o),Oo.fromBufferAttribute(i,l),zo.fromBufferAttribute(i,c),h.uv=Is.getInterpolation(Ho,ur,fr,dr,Bo,Oo,zo,new ce)),r&&(Bo.fromBufferAttribute(r,o),Oo.fromBufferAttribute(r,l),zo.fromBufferAttribute(r,c),h.uv1=Is.getInterpolation(Ho,ur,fr,dr,Bo,Oo,zo,new ce),h.uv2=h.uv1),a&&(yd.fromBufferAttribute(a,o),Md.fromBufferAttribute(a,l),Sd.fromBufferAttribute(a,c),h.normal=Is.getInterpolation(Ho,ur,fr,dr,yd,Md,Sd,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new D,materialIndex:0};Is.getNormal(ur,fr,dr,f.normal),h.face=f}return h}var kt=class s extends Qt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],d=0,p=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,i,a,2),x("x","z","y",1,-1,e,n,-t,i,a,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(f,2));function x(S,g,m,T,M,w,L,N,U,z,_){let R=w/U,Z=L/z,K=w/2,ae=L/2,B=N/2,Q=U+1,G=z+1,j=0,me=0,re=new D;for(let he=0;he<G;he++){let W=he*Z-ae;for(let ie=0;ie<Q;ie++){let be=ie*R-K;re[S]=be*T,re[g]=W*M,re[m]=B,c.push(re.x,re.y,re.z),re[S]=0,re[g]=0,re[m]=N>0?1:-1,h.push(re.x,re.y,re.z),f.push(ie/U),f.push(1-he/z),j+=1}}for(let he=0;he<z;he++)for(let W=0;W<U;W++){let ie=d+W+Q*he,be=d+W+Q*(he+1),Ie=d+(W+1)+Q*(he+1),ke=d+(W+1)+Q*he;l.push(ie,be,ke),l.push(be,Ie,ke),me+=6}o.addGroup(p,me,_),p+=me,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ur(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Xn(s){let e={};for(let t=0;t<s.length;t++){let n=Ur(s[t]);for(let i in n)e[i]=n[i]}return e}function b0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Pp(s){return s.getRenderTarget()===null?s.outputColorSpace:zt.workingColorSpace}var Yr={clone:Ur,merge:Xn},_0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ut=class extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_0,this.fragmentShader=T0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ur(e.uniforms),this.uniformsGroups=b0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ml=class extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bn=class extends Ml{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ea*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},pr=-90,mr=1,Mh=class extends ln{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new bn(pr,mr,e,t);i.layers=this.layers,this.add(i);let r=new bn(pr,mr,e,t);r.layers=this.layers,this.add(r);let a=new bn(pr,mr,e,t);a.layers=this.layers,this.add(a);let o=new bn(pr,mr,e,t);o.layers=this.layers,this.add(o);let l=new bn(pr,mr,e,t);l.layers=this.layers,this.add(l);let c=new bn(pr,mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Zi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Sl=class extends Dn{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Rr,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sh=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ra("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ds?Wt:In),this.texture=new Sl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new kt(5,5,5),r=new Ut({name:"CubemapFromEquirect",uniforms:Ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:Pi});r.uniforms.tEquirect.value=t;let a=new Le(i,r),o=t.minFilter;return t.minFilter===Ki&&(t.minFilter=Rt),new Mh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},Jc=new D,w0=new D,E0=new bt,qi=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Jc.subVectors(n,t).cross(w0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Jc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||E0.getNormalMatrix(e),i=this.coplanarPoint(Jc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rs=new Zn,Go=new D,Na=class{constructor(e=new qi,t=new qi,n=new qi,i=new qi,r=new qi,a=new qi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zi){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],f=i[6],d=i[7],p=i[8],x=i[9],S=i[10],g=i[11],m=i[12],T=i[13],M=i[14],w=i[15];if(n[0].setComponents(l-r,d-c,g-p,w-m).normalize(),n[1].setComponents(l+r,d+c,g+p,w+m).normalize(),n[2].setComponents(l+a,d+h,g+x,w+T).normalize(),n[3].setComponents(l-a,d-h,g-x,w-T).normalize(),n[4].setComponents(l-o,d-f,g-S,w-M).normalize(),t===Zi)n[5].setComponents(l+o,d+f,g+S,w+M).normalize();else if(t===hl)n[5].setComponents(o,f,S,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){return Rs.center.set(0,0,0),Rs.radius=.7071067811865476,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Go.x=i.normal.x>0?e.max.x:e.min.x,Go.y=i.normal.y>0?e.max.y:e.min.y,Go.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Lp(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function A0(s,e){let t=e.isWebGL2,n=new WeakMap;function i(c,h){let f=c.array,d=c.usage,p=s.createBuffer();s.bindBuffer(h,p),s.bufferData(h,f,d),c.onUploadCallback();let x;if(f instanceof Float32Array)x=s.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=s.SHORT;else if(f instanceof Uint32Array)x=s.UNSIGNED_INT;else if(f instanceof Int32Array)x=s.INT;else if(f instanceof Int8Array)x=s.BYTE;else if(f instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,f){let d=h.array,p=h.updateRange;s.bindBuffer(f,c),p.count===-1?s.bufferSubData(f,0,d):(t?s.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);f===void 0?n.set(c,i(c,h)):f.version<c.version&&(r(f.buffer,c,h),f.version=c.version)}return{get:a,remove:o,update:l}}var ei=class s extends Qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=e/o,d=t/l,p=[],x=[],S=[],g=[];for(let m=0;m<h;m++){let T=m*d-a;for(let M=0;M<c;M++){let w=M*f-r;x.push(w,-T,0),S.push(0,0,1),g.push(M/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<o;T++){let M=T+c*m,w=T+c*(m+1),L=T+1+c*(m+1),N=T+1+c*m;p.push(M,w,N),p.push(w,L,N)}this.setIndex(p),this.setAttribute("position",new Et(x,3)),this.setAttribute("normal",new Et(S,3)),this.setAttribute("uv",new Et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},R0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C0=`#ifdef USE_ALPHAHASH
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
#endif`,P0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,D0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U0=`#ifdef USE_AOMAP
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
#endif`,F0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O0=`float G_BlinnPhong_Implicit( ) {
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
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Q0=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,K0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,J0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ev=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nv="gl_FragColor = linearToOutputTexel( gl_FragColor );",iv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,sv=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,rv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,av=`#ifdef USE_ENVMAP
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
#endif`,ov=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lv=`#ifdef USE_ENVMAP
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
#endif`,cv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dv=`#ifdef USE_GRADIENTMAP
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
}`,pv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xv=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,yv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Mv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tv=`PhysicalMaterial material;
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,wv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Ev=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Av=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Iv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Dv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fv=`#if defined( USE_POINTS_UV )
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
#endif`,Bv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ov=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Vv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Gv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zv=`#ifdef USE_NORMALMAP
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
#endif`,Qv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$v=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ex=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,lx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
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
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xx=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mx=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ex=`uniform sampler2D t2D;
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Ix=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,Dx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Ux=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fx=`uniform sampler2D tEquirect;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
	#include <morphcolor_vertex>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,kx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Gx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Wx=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qx=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Zx=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Qx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Kx=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Jx=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,jx=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,$x=`uniform float size;
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
}`,ey=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ty=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,ny=`uniform vec3 color;
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
}`,iy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,sy=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,yt={alphahash_fragment:R0,alphahash_pars_fragment:C0,alphamap_fragment:P0,alphamap_pars_fragment:L0,alphatest_fragment:I0,alphatest_pars_fragment:D0,aomap_fragment:U0,aomap_pars_fragment:N0,begin_vertex:F0,beginnormal_vertex:B0,bsdfs:O0,iridescence_fragment:z0,bumpmap_pars_fragment:H0,clipping_planes_fragment:k0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:G0,clipping_planes_vertex:W0,color_fragment:X0,color_pars_fragment:q0,color_pars_vertex:Y0,color_vertex:Z0,common:Q0,cube_uv_reflection_fragment:K0,defaultnormal_vertex:J0,displacementmap_pars_vertex:j0,displacementmap_vertex:$0,emissivemap_fragment:ev,emissivemap_pars_fragment:tv,colorspace_fragment:nv,colorspace_pars_fragment:iv,envmap_fragment:sv,envmap_common_pars_fragment:rv,envmap_pars_fragment:av,envmap_pars_vertex:ov,envmap_physical_pars_fragment:yv,envmap_vertex:lv,fog_vertex:cv,fog_pars_vertex:hv,fog_fragment:uv,fog_pars_fragment:fv,gradientmap_pars_fragment:dv,lightmap_fragment:pv,lightmap_pars_fragment:mv,lights_lambert_fragment:gv,lights_lambert_pars_fragment:vv,lights_pars_begin:xv,lights_toon_fragment:Mv,lights_toon_pars_fragment:Sv,lights_phong_fragment:bv,lights_phong_pars_fragment:_v,lights_physical_fragment:Tv,lights_physical_pars_fragment:wv,lights_fragment_begin:Ev,lights_fragment_maps:Av,lights_fragment_end:Rv,logdepthbuf_fragment:Cv,logdepthbuf_pars_fragment:Pv,logdepthbuf_pars_vertex:Lv,logdepthbuf_vertex:Iv,map_fragment:Dv,map_pars_fragment:Uv,map_particle_fragment:Nv,map_particle_pars_fragment:Fv,metalnessmap_fragment:Bv,metalnessmap_pars_fragment:Ov,morphcolor_vertex:zv,morphnormal_vertex:Hv,morphtarget_pars_vertex:kv,morphtarget_vertex:Vv,normal_fragment_begin:Gv,normal_fragment_maps:Wv,normal_pars_fragment:Xv,normal_pars_vertex:qv,normal_vertex:Yv,normalmap_pars_fragment:Zv,clearcoat_normal_fragment_begin:Qv,clearcoat_normal_fragment_maps:Kv,clearcoat_pars_fragment:Jv,iridescence_pars_fragment:jv,opaque_fragment:$v,packing:ex,premultiplied_alpha_fragment:tx,project_vertex:nx,dithering_fragment:ix,dithering_pars_fragment:sx,roughnessmap_fragment:rx,roughnessmap_pars_fragment:ax,shadowmap_pars_fragment:ox,shadowmap_pars_vertex:lx,shadowmap_vertex:cx,shadowmask_pars_fragment:hx,skinbase_vertex:ux,skinning_pars_vertex:fx,skinning_vertex:dx,skinnormal_vertex:px,specularmap_fragment:mx,specularmap_pars_fragment:gx,tonemapping_fragment:vx,tonemapping_pars_fragment:xx,transmission_fragment:yx,transmission_pars_fragment:Mx,uv_pars_fragment:Sx,uv_pars_vertex:bx,uv_vertex:_x,worldpos_vertex:Tx,background_vert:wx,background_frag:Ex,backgroundCube_vert:Ax,backgroundCube_frag:Rx,cube_vert:Cx,cube_frag:Px,depth_vert:Lx,depth_frag:Ix,distanceRGBA_vert:Dx,distanceRGBA_frag:Ux,equirect_vert:Nx,equirect_frag:Fx,linedashed_vert:Bx,linedashed_frag:Ox,meshbasic_vert:zx,meshbasic_frag:Hx,meshlambert_vert:kx,meshlambert_frag:Vx,meshmatcap_vert:Gx,meshmatcap_frag:Wx,meshnormal_vert:Xx,meshnormal_frag:qx,meshphong_vert:Yx,meshphong_frag:Zx,meshphysical_vert:Qx,meshphysical_frag:Kx,meshtoon_vert:Jx,meshtoon_frag:jx,points_vert:$x,points_frag:ey,shadow_vert:ty,shadow_frag:ny,sprite_vert:iy,sprite_frag:sy},Ce={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},Ri={basic:{uniforms:Xn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Xn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ue(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Xn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Xn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Xn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ue(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Xn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Xn([Ce.points,Ce.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Xn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Xn([Ce.common,Ce.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Xn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Xn([Ce.sprite,Ce.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distanceRGBA:{uniforms:Xn([Ce.common,Ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distanceRGBA_vert,fragmentShader:yt.distanceRGBA_frag},shadow:{uniforms:Xn([Ce.lights,Ce.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};Ri.physical={uniforms:Xn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};var Wo={r:0,b:0,g:0};function ry(s,e,t,n,i,r,a){let o=new Ue(0),l=r===!0?0:1,c,h,f=null,d=0,p=null;function x(g,m){let T=!1,M=m.isScene===!0?m.background:null;M&&M.isTexture&&(M=(m.backgroundBlurriness>0?t:e).get(M)),M===null?S(o,l):M&&M.isColor&&(S(M,1),T=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||T)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Wl)?(h===void 0&&(h=new Le(new kt(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:Ur(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,N,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=zt.getTransfer(M.colorSpace)!==$t,(f!==M||d!==M.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,f=M,d=M.version,p=s.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Le(new ei(2,2),new Ut({name:"BackgroundMaterial",uniforms:Ur(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=zt.getTransfer(M.colorSpace)!==$t,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,p=s.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function S(g,m){g.getRGB(Wo,Pp(s)),n.buffers.color.setClear(Wo.r,Wo.g,Wo.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),l=m,S(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,S(o,l)},render:x}}function ay(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=g(null),c=l,h=!1;function f(B,Q,G,j,me){let re=!1;if(a){let he=S(j,G,Q);c!==he&&(c=he,p(c.object)),re=m(B,j,G,me),re&&T(B,j,G,me)}else{let he=Q.wireframe===!0;(c.geometry!==j.id||c.program!==G.id||c.wireframe!==he)&&(c.geometry=j.id,c.program=G.id,c.wireframe=he,re=!0)}me!==null&&t.update(me,s.ELEMENT_ARRAY_BUFFER),(re||h)&&(h=!1,z(B,Q,G,j),me!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(me).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(B){return n.isWebGL2?s.bindVertexArray(B):r.bindVertexArrayOES(B)}function x(B){return n.isWebGL2?s.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function S(B,Q,G){let j=G.wireframe===!0,me=o[B.id];me===void 0&&(me={},o[B.id]=me);let re=me[Q.id];re===void 0&&(re={},me[Q.id]=re);let he=re[j];return he===void 0&&(he=g(d()),re[j]=he),he}function g(B){let Q=[],G=[],j=[];for(let me=0;me<i;me++)Q[me]=0,G[me]=0,j[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:G,attributeDivisors:j,object:B,attributes:{},index:null}}function m(B,Q,G,j){let me=c.attributes,re=Q.attributes,he=0,W=G.getAttributes();for(let ie in W)if(W[ie].location>=0){let Ie=me[ie],ke=re[ie];if(ke===void 0&&(ie==="instanceMatrix"&&B.instanceMatrix&&(ke=B.instanceMatrix),ie==="instanceColor"&&B.instanceColor&&(ke=B.instanceColor)),Ie===void 0||Ie.attribute!==ke||ke&&Ie.data!==ke.data)return!0;he++}return c.attributesNum!==he||c.index!==j}function T(B,Q,G,j){let me={},re=Q.attributes,he=0,W=G.getAttributes();for(let ie in W)if(W[ie].location>=0){let Ie=re[ie];Ie===void 0&&(ie==="instanceMatrix"&&B.instanceMatrix&&(Ie=B.instanceMatrix),ie==="instanceColor"&&B.instanceColor&&(Ie=B.instanceColor));let ke={};ke.attribute=Ie,Ie&&Ie.data&&(ke.data=Ie.data),me[ie]=ke,he++}c.attributes=me,c.attributesNum=he,c.index=j}function M(){let B=c.newAttributes;for(let Q=0,G=B.length;Q<G;Q++)B[Q]=0}function w(B){L(B,0)}function L(B,Q){let G=c.newAttributes,j=c.enabledAttributes,me=c.attributeDivisors;G[B]=1,j[B]===0&&(s.enableVertexAttribArray(B),j[B]=1),me[B]!==Q&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,Q),me[B]=Q)}function N(){let B=c.newAttributes,Q=c.enabledAttributes;for(let G=0,j=Q.length;G<j;G++)Q[G]!==B[G]&&(s.disableVertexAttribArray(G),Q[G]=0)}function U(B,Q,G,j,me,re,he){he===!0?s.vertexAttribIPointer(B,Q,G,me,re):s.vertexAttribPointer(B,Q,G,j,me,re)}function z(B,Q,G,j){if(n.isWebGL2===!1&&(B.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();let me=j.attributes,re=G.getAttributes(),he=Q.defaultAttributeValues;for(let W in re){let ie=re[W];if(ie.location>=0){let be=me[W];if(be===void 0&&(W==="instanceMatrix"&&B.instanceMatrix&&(be=B.instanceMatrix),W==="instanceColor"&&B.instanceColor&&(be=B.instanceColor)),be!==void 0){let Ie=be.normalized,ke=be.itemSize,We=t.get(be);if(We===void 0)continue;let st=We.buffer,et=We.type,ft=We.bytesPerElement,At=n.isWebGL2===!0&&(et===s.INT||et===s.UNSIGNED_INT||be.gpuType===vp);if(be.isInterleavedBufferAttribute){let nt=be.data,k=nt.stride,Ae=be.offset;if(nt.isInstancedInterleavedBuffer){for(let le=0;le<ie.locationSize;le++)L(ie.location+le,nt.meshPerAttribute);B.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let le=0;le<ie.locationSize;le++)w(ie.location+le);s.bindBuffer(s.ARRAY_BUFFER,st);for(let le=0;le<ie.locationSize;le++)U(ie.location+le,ke/ie.locationSize,et,Ie,k*ft,(Ae+ke/ie.locationSize*le)*ft,At)}else{if(be.isInstancedBufferAttribute){for(let nt=0;nt<ie.locationSize;nt++)L(ie.location+nt,be.meshPerAttribute);B.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let nt=0;nt<ie.locationSize;nt++)w(ie.location+nt);s.bindBuffer(s.ARRAY_BUFFER,st);for(let nt=0;nt<ie.locationSize;nt++)U(ie.location+nt,ke/ie.locationSize,et,Ie,ke*ft,ke/ie.locationSize*nt*ft,At)}}else if(he!==void 0){let Ie=he[W];if(Ie!==void 0)switch(Ie.length){case 2:s.vertexAttrib2fv(ie.location,Ie);break;case 3:s.vertexAttrib3fv(ie.location,Ie);break;case 4:s.vertexAttrib4fv(ie.location,Ie);break;default:s.vertexAttrib1fv(ie.location,Ie)}}}}N()}function _(){K();for(let B in o){let Q=o[B];for(let G in Q){let j=Q[G];for(let me in j)x(j[me].object),delete j[me];delete Q[G]}delete o[B]}}function R(B){if(o[B.id]===void 0)return;let Q=o[B.id];for(let G in Q){let j=Q[G];for(let me in j)x(j[me].object),delete j[me];delete Q[G]}delete o[B.id]}function Z(B){for(let Q in o){let G=o[Q];if(G[B.id]===void 0)continue;let j=G[B.id];for(let me in j)x(j[me].object),delete j[me];delete G[B.id]}}function K(){ae(),h=!0,c!==l&&(c=l,p(c.object))}function ae(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:K,resetDefaultState:ae,dispose:_,releaseStatesOfGeometry:R,releaseStatesOfProgram:Z,initAttributes:M,enableAttribute:w,disableUnusedAttributes:N}}function oy(s,e,t,n){let i=n.isWebGL2,r;function a(c){r=c}function o(c,h){s.drawArrays(r,c,h),t.update(h,r,1)}function l(c,h,f){if(f===0)return;let d,p;if(i)d=s,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,c,h,f),t.update(h,r,f)}this.setMode=a,this.render=o,this.renderInstances=l}function ly(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let U=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,w=a||e.has("OES_texture_float"),L=M&&w,N=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:T,vertexTextures:M,floatFragmentTextures:w,floatVertexTextures:L,maxSamples:N}}function cy(s){let e=this,t=null,n=0,i=!1,r=!1,a=new qi,o=new bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||i;return i=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){let x=f.clippingPlanes,S=f.clipIntersection,g=f.clipShadows,m=s.get(f);if(!i||x===null||x.length===0||r&&!g)r?h(null):c();else{let T=r?0:n,M=T*4,w=m.clippingState||null;l.value=w,w=h(x,d,M,p);for(let L=0;L!==M;++L)w[L]=t[L];m.clippingState=w,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,p,x){let S=f!==null?f.length:0,g=null;if(S!==0){if(g=l.value,x!==!0||g===null){let m=p+S*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,w=p;M!==S;++M,w+=4)a.copy(f[M]).applyMatrix4(T,o),a.normal.toArray(g,w),g[w+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function hy(s){let e=new WeakMap;function t(a,o){return o===Pr?a.mapping=Rr:o===ph&&(a.mapping=Cr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){let o=a.mapping;if(o===Pr||o===ph)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Sh(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ii=class extends Ml{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Tr=4,bd=[.125,.215,.35,.446,.526,.582],Ls=20,jc=new Ii,_d=new Ue,$c=null,eh=0,th=0,Cs=(1+Math.sqrt(5))/2,gr=1/Cs,Td=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Cs,gr),new D(0,Cs,-gr),new D(gr,0,Cs),new D(-gr,0,Cs),new D(Cs,gr,0),new D(-Cs,gr,0)],Nr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){$c=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($c,eh,th),e.scissorTest=!1,Xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rr||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:nn,format:_n,colorSpace:xn,depthBuffer:!1},i=wd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uy(r)),this._blurMaterial=fy(r,e,t)}return i}_compileMaterial(e){let t=new Le(this._lodPlanes[0],e);this._renderer.compile(t,jc)}_sceneToCubeUV(e,t,n,i){let o=new bn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(_d),h.toneMapping=us,h.autoClear=!1;let p=new un({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),x=new Le(new kt,p),S=!1,g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,S=!0):(p.color.copy(_d),S=!0);for(let m=0;m<6;m++){let T=m%3;T===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):T===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let M=this._cubeSize;Xo(i,T*M,m>2?M:0,M,M),h.setRenderTarget(i),S&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Rr||e.mapping===Cr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ed());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Le(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Xo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,jc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Td[(i-1)%Td.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Le(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ls-1),S=r/x,g=isFinite(r)?1+Math.floor(h*S):Ls;g>Ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ls}`);let m=[],T=0;for(let U=0;U<Ls;++U){let z=U/S,_=Math.exp(-z*z/2);m.push(_),U===0?T+=_:U<g&&(T+=2*_)}for(let U=0;U<m.length;U++)m[U]=m[U]/T;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:M}=this;d.dTheta.value=x,d.mipInt.value=M-n;let w=this._sizeLods[i],L=3*w*(i>M-Tr?i-M+Tr:0),N=4*(this._cubeSize-w);Xo(t,L,N,3*w,2*w),l.setRenderTarget(t),l.render(f,jc)}};function uy(s){let e=[],t=[],n=[],i=s,r=s-Tr+1+bd.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Tr?l=bd[a-s+Tr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,x=6,S=3,g=2,m=1,T=new Float32Array(S*x*p),M=new Float32Array(g*x*p),w=new Float32Array(m*x*p);for(let N=0;N<p;N++){let U=N%3*2/3-1,z=N>2?0:-1,_=[U,z,0,U+2/3,z,0,U+2/3,z+1,0,U,z,0,U+2/3,z+1,0,U,z+1,0];T.set(_,S*x*N),M.set(d,g*x*N);let R=[N,N,N,N,N,N];w.set(R,m*x*N)}let L=new Qt;L.setAttribute("position",new tn(T,S)),L.setAttribute("uv",new tn(M,g)),L.setAttribute("faceIndex",new tn(w,m)),e.push(L),i>Tr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wd(s,e,t){let n=new Jt(s,e,t);return n.texture.mapping=Wl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function fy(s,e,t){let n=new Float32Array(Ls),i=new D(0,1,0);return new Ut({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Ed(){return new Ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Ad(){return new Ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function hu(){return`

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
	`}function dy(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Pr||l===ph,h=l===Rr||l===Cr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Nr(s)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{let f=o.image;if(c&&f&&f.height>0||h&&f&&i(f)){t===null&&(t=new Nr(s));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function py(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function my(s,e,t,n){let i={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let x in d.attributes)e.remove(d.attributes[x]);for(let x in d.morphAttributes){let S=d.morphAttributes[x];for(let g=0,m=S.length;g<m;g++)e.remove(S[g])}d.removeEventListener("dispose",a),delete i[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(f){let d=f.attributes;for(let x in d)e.update(d[x],s.ARRAY_BUFFER);let p=f.morphAttributes;for(let x in p){let S=p[x];for(let g=0,m=S.length;g<m;g++)e.update(S[g],s.ARRAY_BUFFER)}}function c(f){let d=[],p=f.index,x=f.attributes.position,S=0;if(p!==null){let T=p.array;S=p.version;for(let M=0,w=T.length;M<w;M+=3){let L=T[M+0],N=T[M+1],U=T[M+2];d.push(L,N,N,U,U,L)}}else if(x!==void 0){let T=x.array;S=x.version;for(let M=0,w=T.length/3-1;M<w;M+=3){let L=M+0,N=M+1,U=M+2;d.push(L,N,N,U,U,L)}}else return;let g=new(Rp(d)?yl:xl)(d,1);g.version=S;let m=r.get(f);m&&e.remove(m),r.set(f,g)}function h(f){let d=r.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function gy(s,e,t,n){let i=n.isWebGL2,r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,p){s.drawElements(r,p,o,d*l),t.update(p,r,1)}function f(d,p,x){if(x===0)return;let S,g;if(i)S=s,g="drawElementsInstanced";else if(S=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[g](r,p,o,d*l,x),t.update(p,r,x)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=f}function vy(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function xy(s,e){return s[0]-e[0]}function yy(s,e){return Math.abs(e[1])-Math.abs(s[1])}function My(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,a=new Zt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,f){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=p!==void 0?p.length:0,S=r.get(h);if(S===void 0||S.count!==x){let B=function(){K.dispose(),r.delete(h),h.removeEventListener("dispose",B)};S!==void 0&&S.texture.dispose();let T=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],U=h.morphAttributes.color||[],z=0;T===!0&&(z=1),M===!0&&(z=2),w===!0&&(z=3);let _=h.attributes.position.count*z,R=1;_>e.maxTextureSize&&(R=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let Z=new Float32Array(_*R*4*x),K=new pl(Z,_,R,x);K.type=Yn,K.needsUpdate=!0;let ae=z*4;for(let Q=0;Q<x;Q++){let G=L[Q],j=N[Q],me=U[Q],re=_*R*4*Q;for(let he=0;he<G.count;he++){let W=he*ae;T===!0&&(a.fromBufferAttribute(G,he),Z[re+W+0]=a.x,Z[re+W+1]=a.y,Z[re+W+2]=a.z,Z[re+W+3]=0),M===!0&&(a.fromBufferAttribute(j,he),Z[re+W+4]=a.x,Z[re+W+5]=a.y,Z[re+W+6]=a.z,Z[re+W+7]=0),w===!0&&(a.fromBufferAttribute(me,he),Z[re+W+8]=a.x,Z[re+W+9]=a.y,Z[re+W+10]=a.z,Z[re+W+11]=me.itemSize===4?a.w:1)}}S={count:x,texture:K,size:new ce(_,R)},r.set(h,S),h.addEventListener("dispose",B)}let g=0;for(let T=0;T<d.length;T++)g+=d[T];let m=h.morphTargetsRelative?1:1-g;f.getUniforms().setValue(s,"morphTargetBaseInfluence",m),f.getUniforms().setValue(s,"morphTargetInfluences",d),f.getUniforms().setValue(s,"morphTargetsTexture",S.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}else{let p=d===void 0?0:d.length,x=n[h.id];if(x===void 0||x.length!==p){x=[];for(let M=0;M<p;M++)x[M]=[M,0];n[h.id]=x}for(let M=0;M<p;M++){let w=x[M];w[0]=M,w[1]=d[M]}x.sort(yy);for(let M=0;M<8;M++)M<p&&x[M][1]?(o[M][0]=x[M][0],o[M][1]=x[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(xy);let S=h.morphAttributes.position,g=h.morphAttributes.normal,m=0;for(let M=0;M<8;M++){let w=o[M],L=w[0],N=w[1];L!==Number.MAX_SAFE_INTEGER&&N?(S&&h.getAttribute("morphTarget"+M)!==S[L]&&h.setAttribute("morphTarget"+M,S[L]),g&&h.getAttribute("morphNormal"+M)!==g[L]&&h.setAttribute("morphNormal"+M,g[L]),i[M]=N,m+=N):(S&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),g&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}let T=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(s,"morphTargetBaseInfluence",T),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Sy(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ip=new Dn,Dp=new pl,Up=new yh,Np=new Sl,Rd=[],Cd=[],Pd=new Float32Array(16),Ld=new Float32Array(9),Id=new Float32Array(4);function Zr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Rd[i];if(r===void 0&&(r=new Float32Array(i),Rd[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Tn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function wn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Yl(s,e){let t=Cd[e];t===void 0&&(t=new Int32Array(e),Cd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function by(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function _y(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;s.uniform2fv(this.addr,e),wn(t,e)}}function Ty(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tn(t,e))return;s.uniform3fv(this.addr,e),wn(t,e)}}function wy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;s.uniform4fv(this.addr,e),wn(t,e)}}function Ey(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,n))return;Id.set(n),s.uniformMatrix2fv(this.addr,!1,Id),wn(t,n)}}function Ay(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,n))return;Ld.set(n),s.uniformMatrix3fv(this.addr,!1,Ld),wn(t,n)}}function Ry(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,n))return;Pd.set(n),s.uniformMatrix4fv(this.addr,!1,Pd),wn(t,n)}}function Cy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Py(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;s.uniform2iv(this.addr,e),wn(t,e)}}function Ly(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;s.uniform3iv(this.addr,e),wn(t,e)}}function Iy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;s.uniform4iv(this.addr,e),wn(t,e)}}function Dy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Uy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;s.uniform2uiv(this.addr,e),wn(t,e)}}function Ny(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;s.uniform3uiv(this.addr,e),wn(t,e)}}function Fy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;s.uniform4uiv(this.addr,e),wn(t,e)}}function By(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ip,i)}function Oy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Up,i)}function zy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Np,i)}function Hy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Dp,i)}function ky(s){switch(s){case 5126:return by;case 35664:return _y;case 35665:return Ty;case 35666:return wy;case 35674:return Ey;case 35675:return Ay;case 35676:return Ry;case 5124:case 35670:return Cy;case 35667:case 35671:return Py;case 35668:case 35672:return Ly;case 35669:case 35673:return Iy;case 5125:return Dy;case 36294:return Uy;case 36295:return Ny;case 36296:return Fy;case 35678:case 36198:case 36298:case 36306:case 35682:return By;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return zy;case 36289:case 36303:case 36311:case 36292:return Hy}}function Vy(s,e){s.uniform1fv(this.addr,e)}function Gy(s,e){let t=Zr(e,this.size,2);s.uniform2fv(this.addr,t)}function Wy(s,e){let t=Zr(e,this.size,3);s.uniform3fv(this.addr,t)}function Xy(s,e){let t=Zr(e,this.size,4);s.uniform4fv(this.addr,t)}function qy(s,e){let t=Zr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Yy(s,e){let t=Zr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Zy(s,e){let t=Zr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Qy(s,e){s.uniform1iv(this.addr,e)}function Ky(s,e){s.uniform2iv(this.addr,e)}function Jy(s,e){s.uniform3iv(this.addr,e)}function jy(s,e){s.uniform4iv(this.addr,e)}function $y(s,e){s.uniform1uiv(this.addr,e)}function eM(s,e){s.uniform2uiv(this.addr,e)}function tM(s,e){s.uniform3uiv(this.addr,e)}function nM(s,e){s.uniform4uiv(this.addr,e)}function iM(s,e,t){let n=this.cache,i=e.length,r=Yl(t,i);Tn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ip,r[a])}function sM(s,e,t){let n=this.cache,i=e.length,r=Yl(t,i);Tn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Up,r[a])}function rM(s,e,t){let n=this.cache,i=e.length,r=Yl(t,i);Tn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Np,r[a])}function aM(s,e,t){let n=this.cache,i=e.length,r=Yl(t,i);Tn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Dp,r[a])}function oM(s){switch(s){case 5126:return Vy;case 35664:return Gy;case 35665:return Wy;case 35666:return Xy;case 35674:return qy;case 35675:return Yy;case 35676:return Zy;case 5124:case 35670:return Qy;case 35667:case 35671:return Ky;case 35668:case 35672:return Jy;case 35669:case 35673:return jy;case 5125:return $y;case 36294:return eM;case 36295:return tM;case 36296:return nM;case 35678:case 36198:case 36298:case 36306:case 35682:return iM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return rM;case 36289:case 36303:case 36311:case 36292:return aM}}var bh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ky(t.type)}},_h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=oM(t.type)}},Th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},nh=/(\w+)(\])?(\[|\.)?/g;function Dd(s,e){s.seq.push(e),s.map[e.id]=e}function lM(s,e,t){let n=s.name,i=n.length;for(nh.lastIndex=0;;){let r=nh.exec(n),a=nh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Dd(t,c===void 0?new bh(o,s,e):new _h(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new Th(o),Dd(t,f)),t=f}}}var Ar=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);lM(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Ud(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var cM=37297,hM=0;function uM(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function fM(s){let e=zt.getPrimaries(zt.workingColorSpace),t=zt.getPrimaries(s),n;switch(e===t?n="":e===cl&&t===ll?n="LinearDisplayP3ToLinearSRGB":e===ll&&t===cl&&(n="LinearSRGBToLinearDisplayP3"),s){case xn:case ql:return[n,"LinearTransferOETF"];case Wt:case lu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Nd(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+uM(s.getShaderSource(e),a)}else return i}function dM(s,e){let t=fM(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function pM(s,e){let t;switch(e){case vg:t="Linear";break;case xg:t="Reinhard";break;case yg:t="OptimizedCineon";break;case iu:t="ACESFilmic";break;case Mg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mM(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ta).join(`
`)}function gM(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vM(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ta(s){return s!==""}function Fd(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xM=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(s){return s.replace(xM,MM)}var yM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function MM(s,e){let t=yt[e];if(t===void 0){let n=yM.get(e);if(n!==void 0)t=yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wh(t)}var SM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Od(s){return s.replace(SM,bM)}function bM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function zd(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _M(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Xm?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function TM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Rr:case Cr:e="ENVMAP_TYPE_CUBE";break;case Wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function EM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case mp:e="ENVMAP_BLENDING_MULTIPLY";break;case mg:e="ENVMAP_BLENDING_MIX";break;case gg:e="ENVMAP_BLENDING_ADD";break}return e}function AM(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function RM(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=_M(t),c=TM(t),h=wM(t),f=EM(t),d=AM(t),p=t.isWebGL2?"":mM(t),x=gM(r),S=i.createProgram(),g,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ta).join(`
`),g.length>0&&(g+=`
`),m=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ta).join(`
`),m.length>0&&(m+=`
`)):(g=[zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),m=[p,zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==us?"#define TONE_MAPPING":"",t.toneMapping!==us?yt.tonemapping_pars_fragment:"",t.toneMapping!==us?pM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,dM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ta).join(`
`)),a=wh(a),a=Fd(a,t),a=Bd(a,t),o=wh(o),o=Fd(o,t),o=Bd(o,t),a=Od(a),o=Od(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===sd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=T+g+a,w=T+m+o,L=Ud(i,i.VERTEX_SHADER,M),N=Ud(i,i.FRAGMENT_SHADER,w);i.attachShader(S,L),i.attachShader(S,N),t.index0AttributeName!==void 0?i.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S);function U(Z){if(s.debug.checkShaderErrors){let K=i.getProgramInfoLog(S).trim(),ae=i.getShaderInfoLog(L).trim(),B=i.getShaderInfoLog(N).trim(),Q=!0,G=!0;if(i.getProgramParameter(S,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,S,L,N);else{let j=Nd(i,L,"vertex"),me=Nd(i,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,i.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+j+`
`+me)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(ae===""||B==="")&&(G=!1);G&&(Z.diagnostics={runnable:Q,programLog:K,vertexShader:{log:ae,prefix:g},fragmentShader:{log:B,prefix:m}})}i.deleteShader(L),i.deleteShader(N),z=new Ar(i,S),_=vM(i,S)}let z;this.getUniforms=function(){return z===void 0&&U(this),z};let _;this.getAttributes=function(){return _===void 0&&U(this),_};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(S,cM)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hM++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=L,this.fragmentShader=N,this}var CM=0,Eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ah(e),t.set(e,n)),n}},Ah=class{constructor(e){this.id=CM++,this.code=e,this.usedTimes=0}};function PM(s,e,t,n,i,r,a){let o=new vl,l=new Eh,c=[],h=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(_){return _===0?"uv":`uv${_}`}function g(_,R,Z,K,ae){let B=K.fog,Q=ae.geometry,G=_.isMeshStandardMaterial?K.environment:null,j=(_.isMeshStandardMaterial?t:e).get(_.envMap||G),me=j&&j.mapping===Wl?j.image.height:null,re=x[_.type];_.precision!==null&&(p=i.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let he=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,W=he!==void 0?he.length:0,ie=0;Q.morphAttributes.position!==void 0&&(ie=1),Q.morphAttributes.normal!==void 0&&(ie=2),Q.morphAttributes.color!==void 0&&(ie=3);let be,Ie,ke,We;if(re){let Kt=Ri[re];be=Kt.vertexShader,Ie=Kt.fragmentShader}else be=_.vertexShader,Ie=_.fragmentShader,l.update(_),ke=l.getVertexShaderID(_),We=l.getFragmentShaderID(_);let st=s.getRenderTarget(),et=ae.isInstancedMesh===!0,ft=!!_.map,At=!!_.matcap,nt=!!j,k=!!_.aoMap,Ae=!!_.lightMap,le=!!_.bumpMap,ge=!!_.normalMap,fe=!!_.displacementMap,Je=!!_.emissiveMap,Pe=!!_.metalnessMap,He=!!_.roughnessMap,je=_.anisotropy>0,Ye=_.clearcoat>0,Nt=_.iridescence>0,I=_.sheen>0,E=_.transmission>0,$=je&&!!_.anisotropyMap,ve=Ye&&!!_.clearcoatMap,pe=Ye&&!!_.clearcoatNormalMap,xe=Ye&&!!_.clearcoatRoughnessMap,Xe=Nt&&!!_.iridescenceMap,Te=Nt&&!!_.iridescenceThicknessMap,De=I&&!!_.sheenColorMap,lt=I&&!!_.sheenRoughnessMap,_t=!!_.specularMap,ye=!!_.specularColorMap,Ft=!!_.specularIntensityMap,ht=E&&!!_.transmissionMap,rt=E&&!!_.thicknessMap,tt=!!_.gradientMap,Fe=!!_.alphaMap,Tt=_.alphaTest>0,V=!!_.alphaHash,Ne=!!_.extensions,Me=!!Q.attributes.uv1,oe=!!Q.attributes.uv2,_e=!!Q.attributes.uv3,at=us;return _.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(at=s.toneMapping),{isWebGL2:h,shaderID:re,shaderType:_.type,shaderName:_.name,vertexShader:be,fragmentShader:Ie,defines:_.defines,customVertexShaderID:ke,customFragmentShaderID:We,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,instancing:et,instancingColor:et&&ae.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:st===null?s.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:xn,map:ft,matcap:At,envMap:nt,envMapMode:nt&&j.mapping,envMapCubeUVHeight:me,aoMap:k,lightMap:Ae,bumpMap:le,normalMap:ge,displacementMap:d&&fe,emissiveMap:Je,normalMapObjectSpace:ge&&_.normalMapType===Fg,normalMapTangentSpace:ge&&_.normalMapType===wp,metalnessMap:Pe,roughnessMap:He,anisotropy:je,anisotropyMap:$,clearcoat:Ye,clearcoatMap:ve,clearcoatNormalMap:pe,clearcoatRoughnessMap:xe,iridescence:Nt,iridescenceMap:Xe,iridescenceThicknessMap:Te,sheen:I,sheenColorMap:De,sheenRoughnessMap:lt,specularMap:_t,specularColorMap:ye,specularIntensityMap:Ft,transmission:E,transmissionMap:ht,thicknessMap:rt,gradientMap:tt,opaque:_.transparent===!1&&_.blending===hs,alphaMap:Fe,alphaTest:Tt,alphaHash:V,combine:_.combine,mapUv:ft&&S(_.map.channel),aoMapUv:k&&S(_.aoMap.channel),lightMapUv:Ae&&S(_.lightMap.channel),bumpMapUv:le&&S(_.bumpMap.channel),normalMapUv:ge&&S(_.normalMap.channel),displacementMapUv:fe&&S(_.displacementMap.channel),emissiveMapUv:Je&&S(_.emissiveMap.channel),metalnessMapUv:Pe&&S(_.metalnessMap.channel),roughnessMapUv:He&&S(_.roughnessMap.channel),anisotropyMapUv:$&&S(_.anisotropyMap.channel),clearcoatMapUv:ve&&S(_.clearcoatMap.channel),clearcoatNormalMapUv:pe&&S(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&S(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&S(_.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&S(_.iridescenceThicknessMap.channel),sheenColorMapUv:De&&S(_.sheenColorMap.channel),sheenRoughnessMapUv:lt&&S(_.sheenRoughnessMap.channel),specularMapUv:_t&&S(_.specularMap.channel),specularColorMapUv:ye&&S(_.specularColorMap.channel),specularIntensityMapUv:Ft&&S(_.specularIntensityMap.channel),transmissionMapUv:ht&&S(_.transmissionMap.channel),thicknessMapUv:rt&&S(_.thicknessMap.channel),alphaMapUv:Fe&&S(_.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ge||je),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,vertexUv1s:Me,vertexUv2s:oe,vertexUv3s:_e,pointsUvs:ae.isPoints===!0&&!!Q.attributes.uv&&(ft||Fe),fog:!!B,useFog:_.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ae.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:ie,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&Z.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ft&&_.map.isVideoTexture===!0&&zt.getTransfer(_.map.colorSpace)===$t,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===si,flipSided:_.side===zn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:Ne&&_.extensions.derivatives===!0,extensionFragDepth:Ne&&_.extensions.fragDepth===!0,extensionDrawBuffers:Ne&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ne&&_.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function m(_){let R=[];if(_.shaderID?R.push(_.shaderID):(R.push(_.customVertexShaderID),R.push(_.customFragmentShaderID)),_.defines!==void 0)for(let Z in _.defines)R.push(Z),R.push(_.defines[Z]);return _.isRawShaderMaterial===!1&&(T(R,_),M(R,_),R.push(s.outputColorSpace)),R.push(_.customProgramCacheKey),R.join()}function T(_,R){_.push(R.precision),_.push(R.outputColorSpace),_.push(R.envMapMode),_.push(R.envMapCubeUVHeight),_.push(R.mapUv),_.push(R.alphaMapUv),_.push(R.lightMapUv),_.push(R.aoMapUv),_.push(R.bumpMapUv),_.push(R.normalMapUv),_.push(R.displacementMapUv),_.push(R.emissiveMapUv),_.push(R.metalnessMapUv),_.push(R.roughnessMapUv),_.push(R.anisotropyMapUv),_.push(R.clearcoatMapUv),_.push(R.clearcoatNormalMapUv),_.push(R.clearcoatRoughnessMapUv),_.push(R.iridescenceMapUv),_.push(R.iridescenceThicknessMapUv),_.push(R.sheenColorMapUv),_.push(R.sheenRoughnessMapUv),_.push(R.specularMapUv),_.push(R.specularColorMapUv),_.push(R.specularIntensityMapUv),_.push(R.transmissionMapUv),_.push(R.thicknessMapUv),_.push(R.combine),_.push(R.fogExp2),_.push(R.sizeAttenuation),_.push(R.morphTargetsCount),_.push(R.morphAttributeCount),_.push(R.numDirLights),_.push(R.numPointLights),_.push(R.numSpotLights),_.push(R.numSpotLightMaps),_.push(R.numHemiLights),_.push(R.numRectAreaLights),_.push(R.numDirLightShadows),_.push(R.numPointLightShadows),_.push(R.numSpotLightShadows),_.push(R.numSpotLightShadowsWithMaps),_.push(R.numLightProbes),_.push(R.shadowMapType),_.push(R.toneMapping),_.push(R.numClippingPlanes),_.push(R.numClipIntersection),_.push(R.depthPacking)}function M(_,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),_.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),_.push(o.mask)}function w(_){let R=x[_.type],Z;if(R){let K=Ri[R];Z=Yr.clone(K.uniforms)}else Z=_.uniforms;return Z}function L(_,R){let Z;for(let K=0,ae=c.length;K<ae;K++){let B=c[K];if(B.cacheKey===R){Z=B,++Z.usedTimes;break}}return Z===void 0&&(Z=new RM(s,R,_,r),c.push(Z)),Z}function N(_){if(--_.usedTimes===0){let R=c.indexOf(_);c[R]=c[c.length-1],c.pop(),_.destroy()}}function U(_){l.remove(_)}function z(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:w,acquireProgram:L,releaseProgram:N,releaseShaderCache:U,programs:c,dispose:z}}function LM(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function IM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Hd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function kd(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f,d,p,x,S,g){let m=s[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:p,groupOrder:x,renderOrder:f.renderOrder,z:S,group:g},s[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=p,m.groupOrder=x,m.renderOrder=f.renderOrder,m.z=S,m.group=g),e++,m}function o(f,d,p,x,S,g){let m=a(f,d,p,x,S,g);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(f,d,p,x,S,g){let m=a(f,d,p,x,S,g);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(f,d){t.length>1&&t.sort(f||IM),n.length>1&&n.sort(d||Hd),i.length>1&&i.sort(d||Hd)}function h(){for(let f=e,d=s.length;f<d;f++){let p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function DM(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new kd,s.set(n,[a])):i>=r.length?(a=new kd,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function UM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ue};break;case"SpotLight":t={position:new D,direction:new D,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function NM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var FM=0;function BM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function OM(s,e){let t=new UM,n=NM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);let r=new D,a=new Ge,o=new Ge;function l(h,f){let d=0,p=0,x=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let S=0,g=0,m=0,T=0,M=0,w=0,L=0,N=0,U=0,z=0,_=0;h.sort(BM);let R=f===!0?Math.PI:1;for(let K=0,ae=h.length;K<ae;K++){let B=h[K],Q=B.color,G=B.intensity,j=B.distance,me=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=Q.r*G*R,p+=Q.g*G*R,x+=Q.b*G*R;else if(B.isLightProbe){for(let re=0;re<9;re++)i.probe[re].addScaledVector(B.sh.coefficients[re],G);_++}else if(B.isDirectionalLight){let re=t.get(B);if(re.color.copy(B.color).multiplyScalar(B.intensity*R),B.castShadow){let he=B.shadow,W=n.get(B);W.shadowBias=he.bias,W.shadowNormalBias=he.normalBias,W.shadowRadius=he.radius,W.shadowMapSize=he.mapSize,i.directionalShadow[S]=W,i.directionalShadowMap[S]=me,i.directionalShadowMatrix[S]=B.shadow.matrix,w++}i.directional[S]=re,S++}else if(B.isSpotLight){let re=t.get(B);re.position.setFromMatrixPosition(B.matrixWorld),re.color.copy(Q).multiplyScalar(G*R),re.distance=j,re.coneCos=Math.cos(B.angle),re.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),re.decay=B.decay,i.spot[m]=re;let he=B.shadow;if(B.map&&(i.spotLightMap[U]=B.map,U++,he.updateMatrices(B),B.castShadow&&z++),i.spotLightMatrix[m]=he.matrix,B.castShadow){let W=n.get(B);W.shadowBias=he.bias,W.shadowNormalBias=he.normalBias,W.shadowRadius=he.radius,W.shadowMapSize=he.mapSize,i.spotShadow[m]=W,i.spotShadowMap[m]=me,N++}m++}else if(B.isRectAreaLight){let re=t.get(B);re.color.copy(Q).multiplyScalar(G),re.halfWidth.set(B.width*.5,0,0),re.halfHeight.set(0,B.height*.5,0),i.rectArea[T]=re,T++}else if(B.isPointLight){let re=t.get(B);if(re.color.copy(B.color).multiplyScalar(B.intensity*R),re.distance=B.distance,re.decay=B.decay,B.castShadow){let he=B.shadow,W=n.get(B);W.shadowBias=he.bias,W.shadowNormalBias=he.normalBias,W.shadowRadius=he.radius,W.shadowMapSize=he.mapSize,W.shadowCameraNear=he.camera.near,W.shadowCameraFar=he.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=me,i.pointShadowMatrix[g]=B.shadow.matrix,L++}i.point[g]=re,g++}else if(B.isHemisphereLight){let re=t.get(B);re.skyColor.copy(B.color).multiplyScalar(G*R),re.groundColor.copy(B.groundColor).multiplyScalar(G*R),i.hemi[M]=re,M++}}T>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=x;let Z=i.hash;(Z.directionalLength!==S||Z.pointLength!==g||Z.spotLength!==m||Z.rectAreaLength!==T||Z.hemiLength!==M||Z.numDirectionalShadows!==w||Z.numPointShadows!==L||Z.numSpotShadows!==N||Z.numSpotMaps!==U||Z.numLightProbes!==_)&&(i.directional.length=S,i.spot.length=m,i.rectArea.length=T,i.point.length=g,i.hemi.length=M,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=N,i.spotShadowMap.length=N,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=N+U-z,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=_,Z.directionalLength=S,Z.pointLength=g,Z.spotLength=m,Z.rectAreaLength=T,Z.hemiLength=M,Z.numDirectionalShadows=w,Z.numPointShadows=L,Z.numSpotShadows=N,Z.numSpotMaps=U,Z.numLightProbes=_,i.version=FM++)}function c(h,f){let d=0,p=0,x=0,S=0,g=0,m=f.matrixWorldInverse;for(let T=0,M=h.length;T<M;T++){let w=h[T];if(w.isDirectionalLight){let L=i.directional[d];L.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(m),d++}else if(w.isSpotLight){let L=i.spot[x];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(m),L.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(m),x++}else if(w.isRectAreaLight){let L=i.rectArea[S];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(m),o.identity(),a.copy(w.matrixWorld),a.premultiply(m),o.extractRotation(a),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),S++}else if(w.isPointLight){let L=i.point[p];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(m),p++}else if(w.isHemisphereLight){let L=i.hemi[g];L.direction.setFromMatrixPosition(w.matrixWorld),L.direction.transformDirection(m),g++}}}return{setup:l,setupView:c,state:i}}function Vd(s,e){let t=new OM(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function zM(s,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new Vd(s,e),t.set(r,[l])):a>=o.length?(l=new Vd(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var Rh=class extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ug,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ch=class extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},HM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kM=`uniform sampler2D shadow_pass;
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
}`;function VM(s,e,t){let n=new Na,i=new ce,r=new ce,a=new Zt,o=new Rh({depthPacking:Ng}),l=new Ch,c={},h=t.maxTextureSize,f={[Li]:zn,[zn]:Li,[si]:si},d=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:HM,fragmentShader:kM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let x=new Qt;x.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Le(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let m=this.type;this.render=function(L,N,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;let z=s.getRenderTarget(),_=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Pi),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let K=m!==Xi&&this.type===Xi,ae=m===Xi&&this.type!==Xi;for(let B=0,Q=L.length;B<Q;B++){let G=L[B],j=G.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);let me=j.getFrameExtents();if(i.multiply(me),r.copy(j.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/me.x),i.x=r.x*me.x,j.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/me.y),i.y=r.y*me.y,j.mapSize.y=r.y)),j.map===null||K===!0||ae===!0){let he=this.type!==Xi?{minFilter:Ht,magFilter:Ht}:{};j.map!==null&&j.map.dispose(),j.map=new Jt(i.x,i.y,he),j.map.texture.name=G.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();let re=j.getViewportCount();for(let he=0;he<re;he++){let W=j.getViewport(he);a.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),Z.viewport(a),j.updateMatrices(G,he),n=j.getFrustum(),w(N,U,j.camera,G,this.type)}j.isPointLightShadow!==!0&&this.type===Xi&&T(j,U),j.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(z,_,R)};function T(L,N){let U=e.update(S);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Jt(i.x,i.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(N,null,U,d,S,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(N,null,U,p,S,null)}function M(L,N,U,z){let _=null,R=U.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(R!==void 0)_=R;else if(_=U.isPointLight===!0?l:o,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){let Z=_.uuid,K=N.uuid,ae=c[Z];ae===void 0&&(ae={},c[Z]=ae);let B=ae[K];B===void 0&&(B=_.clone(),ae[K]=B),_=B}if(_.visible=N.visible,_.wireframe=N.wireframe,z===Xi?_.side=N.shadowSide!==null?N.shadowSide:N.side:_.side=N.shadowSide!==null?N.shadowSide:f[N.side],_.alphaMap=N.alphaMap,_.alphaTest=N.alphaTest,_.map=N.map,_.clipShadows=N.clipShadows,_.clippingPlanes=N.clippingPlanes,_.clipIntersection=N.clipIntersection,_.displacementMap=N.displacementMap,_.displacementScale=N.displacementScale,_.displacementBias=N.displacementBias,_.wireframeLinewidth=N.wireframeLinewidth,_.linewidth=N.linewidth,U.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let Z=s.properties.get(_);Z.light=U}return _}function w(L,N,U,z,_){if(L.visible===!1)return;if(L.layers.test(N.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&_===Xi)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,L.matrixWorld);let K=e.update(L),ae=L.material;if(Array.isArray(ae)){let B=K.groups;for(let Q=0,G=B.length;Q<G;Q++){let j=B[Q],me=ae[j.materialIndex];if(me&&me.visible){let re=M(L,me,z,_);s.renderBufferDirect(U,null,K,re,L,j)}}}else if(ae.visible){let B=M(L,ae,z,_);s.renderBufferDirect(U,null,K,B,L,null)}}let Z=L.children;for(let K=0,ae=Z.length;K<ae;K++)w(Z[K],N,U,z,_)}}function GM(s,e,t){let n=t.isWebGL2;function i(){let V=!1,Ne=new Zt,Me=null,oe=new Zt(0,0,0,0);return{setMask:function(_e){Me!==_e&&!V&&(s.colorMask(_e,_e,_e,_e),Me=_e)},setLocked:function(_e){V=_e},setClear:function(_e,at,Dt,Kt,dn){dn===!0&&(_e*=Kt,at*=Kt,Dt*=Kt),Ne.set(_e,at,Dt,Kt),oe.equals(Ne)===!1&&(s.clearColor(_e,at,Dt,Kt),oe.copy(Ne))},reset:function(){V=!1,Me=null,oe.set(-1,0,0,0)}}}function r(){let V=!1,Ne=null,Me=null,oe=null;return{setTest:function(_e){_e?ft(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(_e){Ne!==_e&&!V&&(s.depthMask(_e),Ne=_e)},setFunc:function(_e){if(Me!==_e){switch(_e){case lg:s.depthFunc(s.NEVER);break;case cg:s.depthFunc(s.ALWAYS);break;case hg:s.depthFunc(s.LESS);break;case sl:s.depthFunc(s.LEQUAL);break;case ug:s.depthFunc(s.EQUAL);break;case fg:s.depthFunc(s.GEQUAL);break;case dg:s.depthFunc(s.GREATER);break;case pg:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Me=_e}},setLocked:function(_e){V=_e},setClear:function(_e){oe!==_e&&(s.clearDepth(_e),oe=_e)},reset:function(){V=!1,Ne=null,Me=null,oe=null}}}function a(){let V=!1,Ne=null,Me=null,oe=null,_e=null,at=null,Dt=null,Kt=null,dn=null;return{setTest:function(Bt){V||(Bt?ft(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(Bt){Ne!==Bt&&!V&&(s.stencilMask(Bt),Ne=Bt)},setFunc:function(Bt,yn,ti){(Me!==Bt||oe!==yn||_e!==ti)&&(s.stencilFunc(Bt,yn,ti),Me=Bt,oe=yn,_e=ti)},setOp:function(Bt,yn,ti){(at!==Bt||Dt!==yn||Kt!==ti)&&(s.stencilOp(Bt,yn,ti),at=Bt,Dt=yn,Kt=ti)},setLocked:function(Bt){V=Bt},setClear:function(Bt){dn!==Bt&&(s.clearStencil(Bt),dn=Bt)},reset:function(){V=!1,Ne=null,Me=null,oe=null,_e=null,at=null,Dt=null,Kt=null,dn=null}}}let o=new i,l=new r,c=new a,h=new WeakMap,f=new WeakMap,d={},p={},x=new WeakMap,S=[],g=null,m=!1,T=null,M=null,w=null,L=null,N=null,U=null,z=null,_=new Ue(0,0,0),R=0,Z=!1,K=null,ae=null,B=null,Q=null,G=null,j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),me=!1,re=0,he=s.getParameter(s.VERSION);he.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(he)[1]),me=re>=1):he.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),me=re>=2);let W=null,ie={},be=s.getParameter(s.SCISSOR_BOX),Ie=s.getParameter(s.VIEWPORT),ke=new Zt().fromArray(be),We=new Zt().fromArray(Ie);function st(V,Ne,Me,oe){let _e=new Uint8Array(4),at=s.createTexture();s.bindTexture(V,at),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Dt=0;Dt<Me;Dt++)n&&(V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY)?s.texImage3D(Ne,0,s.RGBA,1,1,oe,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(Ne+Dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return at}let et={};et[s.TEXTURE_2D]=st(s.TEXTURE_2D,s.TEXTURE_2D,1),et[s.TEXTURE_CUBE_MAP]=st(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(et[s.TEXTURE_2D_ARRAY]=st(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),et[s.TEXTURE_3D]=st(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ft(s.DEPTH_TEST),l.setFunc(sl),Pe(!1),He(Ef),ft(s.CULL_FACE),fe(Pi);function ft(V){d[V]!==!0&&(s.enable(V),d[V]=!0)}function At(V){d[V]!==!1&&(s.disable(V),d[V]=!1)}function nt(V,Ne){return p[V]!==Ne?(s.bindFramebuffer(V,Ne),p[V]=Ne,n&&(V===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=Ne),V===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=Ne)),!0):!1}function k(V,Ne){let Me=S,oe=!1;if(V)if(Me=x.get(Ne),Me===void 0&&(Me=[],x.set(Ne,Me)),V.isWebGLMultipleRenderTargets){let _e=V.texture;if(Me.length!==_e.length||Me[0]!==s.COLOR_ATTACHMENT0){for(let at=0,Dt=_e.length;at<Dt;at++)Me[at]=s.COLOR_ATTACHMENT0+at;Me.length=_e.length,oe=!0}}else Me[0]!==s.COLOR_ATTACHMENT0&&(Me[0]=s.COLOR_ATTACHMENT0,oe=!0);else Me[0]!==s.BACK&&(Me[0]=s.BACK,oe=!0);oe&&(t.isWebGL2?s.drawBuffers(Me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Me))}function Ae(V){return g!==V?(s.useProgram(V),g=V,!0):!1}let le={[Ps]:s.FUNC_ADD,[Ym]:s.FUNC_SUBTRACT,[Zm]:s.FUNC_REVERSE_SUBTRACT};if(n)le[Cf]=s.MIN,le[Pf]=s.MAX;else{let V=e.get("EXT_blend_minmax");V!==null&&(le[Cf]=V.MIN_EXT,le[Pf]=V.MAX_EXT)}let ge={[Qm]:s.ZERO,[Km]:s.ONE,[Jm]:s.SRC_COLOR,[fh]:s.SRC_ALPHA,[ig]:s.SRC_ALPHA_SATURATE,[tg]:s.DST_COLOR,[$m]:s.DST_ALPHA,[jm]:s.ONE_MINUS_SRC_COLOR,[dh]:s.ONE_MINUS_SRC_ALPHA,[ng]:s.ONE_MINUS_DST_COLOR,[eg]:s.ONE_MINUS_DST_ALPHA,[sg]:s.CONSTANT_COLOR,[rg]:s.ONE_MINUS_CONSTANT_COLOR,[ag]:s.CONSTANT_ALPHA,[og]:s.ONE_MINUS_CONSTANT_ALPHA};function fe(V,Ne,Me,oe,_e,at,Dt,Kt,dn,Bt){if(V===Pi){m===!0&&(At(s.BLEND),m=!1);return}if(m===!1&&(ft(s.BLEND),m=!0),V!==qm){if(V!==T||Bt!==Z){if((M!==Ps||N!==Ps)&&(s.blendEquation(s.FUNC_ADD),M=Ps,N=Ps),Bt)switch(V){case hs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bi:s.blendFunc(s.ONE,s.ONE);break;case Af:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rf:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case hs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Af:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rf:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}w=null,L=null,U=null,z=null,_.set(0,0,0),R=0,T=V,Z=Bt}return}_e=_e||Ne,at=at||Me,Dt=Dt||oe,(Ne!==M||_e!==N)&&(s.blendEquationSeparate(le[Ne],le[_e]),M=Ne,N=_e),(Me!==w||oe!==L||at!==U||Dt!==z)&&(s.blendFuncSeparate(ge[Me],ge[oe],ge[at],ge[Dt]),w=Me,L=oe,U=at,z=Dt),(Kt.equals(_)===!1||dn!==R)&&(s.blendColor(Kt.r,Kt.g,Kt.b,dn),_.copy(Kt),R=dn),T=V,Z=!1}function Je(V,Ne){V.side===si?At(s.CULL_FACE):ft(s.CULL_FACE);let Me=V.side===zn;Ne&&(Me=!Me),Pe(Me),V.blending===hs&&V.transparent===!1?fe(Pi):fe(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),o.setMask(V.colorWrite);let oe=V.stencilWrite;c.setTest(oe),oe&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ye(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ft(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(V){K!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),K=V)}function He(V){V!==Gm?(ft(s.CULL_FACE),V!==ae&&(V===Ef?s.cullFace(s.BACK):V===Wm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),ae=V}function je(V){V!==B&&(me&&s.lineWidth(V),B=V)}function Ye(V,Ne,Me){V?(ft(s.POLYGON_OFFSET_FILL),(Q!==Ne||G!==Me)&&(s.polygonOffset(Ne,Me),Q=Ne,G=Me)):At(s.POLYGON_OFFSET_FILL)}function Nt(V){V?ft(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function I(V){V===void 0&&(V=s.TEXTURE0+j-1),W!==V&&(s.activeTexture(V),W=V)}function E(V,Ne,Me){Me===void 0&&(W===null?Me=s.TEXTURE0+j-1:Me=W);let oe=ie[Me];oe===void 0&&(oe={type:void 0,texture:void 0},ie[Me]=oe),(oe.type!==V||oe.texture!==Ne)&&(W!==Me&&(s.activeTexture(Me),W=Me),s.bindTexture(V,Ne||et[V]),oe.type=V,oe.texture=Ne)}function $(){let V=ie[W];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ve(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xe(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ft(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ht(V){ke.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),ke.copy(V))}function rt(V){We.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),We.copy(V))}function tt(V,Ne){let Me=f.get(Ne);Me===void 0&&(Me=new WeakMap,f.set(Ne,Me));let oe=Me.get(V);oe===void 0&&(oe=s.getUniformBlockIndex(Ne,V.name),Me.set(V,oe))}function Fe(V,Ne){let oe=f.get(Ne).get(V);h.get(Ne)!==oe&&(s.uniformBlockBinding(Ne,oe,V.__bindingPointIndex),h.set(Ne,oe))}function Tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},W=null,ie={},p={},x=new WeakMap,S=[],g=null,m=!1,T=null,M=null,w=null,L=null,N=null,U=null,z=null,_=new Ue(0,0,0),R=0,Z=!1,K=null,ae=null,B=null,Q=null,G=null,ke.set(0,0,s.canvas.width,s.canvas.height),We.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ft,disable:At,bindFramebuffer:nt,drawBuffers:k,useProgram:Ae,setBlending:fe,setMaterial:Je,setFlipSided:Pe,setCullFace:He,setLineWidth:je,setPolygonOffset:Ye,setScissorTest:Nt,activeTexture:I,bindTexture:E,unbindTexture:$,compressedTexImage2D:ve,compressedTexImage3D:pe,texImage2D:ye,texImage3D:Ft,updateUBOMapping:tt,uniformBlockBinding:Fe,texStorage2D:lt,texStorage3D:_t,texSubImage2D:xe,texSubImage3D:Xe,compressedTexSubImage2D:Te,compressedTexSubImage3D:De,scissor:ht,viewport:rt,reset:Tt}}function WM(s,e,t,n,i,r,a){let o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,f=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap,S,g=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(I,E){return m?new OffscreenCanvas(I,E):Ua("canvas")}function M(I,E,$,ve){let pe=1;if((I.width>ve||I.height>ve)&&(pe=ve/Math.max(I.width,I.height)),pe<1||E===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){let xe=E?ul:Math.floor,Xe=xe(pe*I.width),Te=xe(pe*I.height);S===void 0&&(S=T(Xe,Te));let De=$?T(Xe,Te):S;return De.width=Xe,De.height=Te,De.getContext("2d").drawImage(I,0,0,Xe,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+Xe+"x"+Te+")."),De}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function w(I){return vh(I.width)&&vh(I.height)}function L(I){return o?!1:I.wrapS!==qn||I.wrapT!==qn||I.minFilter!==Ht&&I.minFilter!==Rt}function N(I,E){return I.generateMipmaps&&E&&I.minFilter!==Ht&&I.minFilter!==Rt}function U(I){s.generateMipmap(I)}function z(I,E,$,ve,pe=!1){if(o===!1)return E;if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let xe=E;if(E===s.RED&&($===s.FLOAT&&(xe=s.R32F),$===s.HALF_FLOAT&&(xe=s.R16F),$===s.UNSIGNED_BYTE&&(xe=s.R8)),E===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(xe=s.R8UI),$===s.UNSIGNED_SHORT&&(xe=s.R16UI),$===s.UNSIGNED_INT&&(xe=s.R32UI),$===s.BYTE&&(xe=s.R8I),$===s.SHORT&&(xe=s.R16I),$===s.INT&&(xe=s.R32I)),E===s.RG&&($===s.FLOAT&&(xe=s.RG32F),$===s.HALF_FLOAT&&(xe=s.RG16F),$===s.UNSIGNED_BYTE&&(xe=s.RG8)),E===s.RGBA){let Xe=pe?ol:zt.getTransfer(ve);$===s.FLOAT&&(xe=s.RGBA32F),$===s.HALF_FLOAT&&(xe=s.RGBA16F),$===s.UNSIGNED_BYTE&&(xe=Xe===$t?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function _(I,E,$){return N(I,$)===!0||I.isFramebufferTexture&&I.minFilter!==Ht&&I.minFilter!==Rt?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function R(I){return I===Ht||I===rl||I===wa?s.NEAREST:s.LINEAR}function Z(I){let E=I.target;E.removeEventListener("dispose",Z),ae(E),E.isVideoTexture&&x.delete(E)}function K(I){let E=I.target;E.removeEventListener("dispose",K),Q(E)}function ae(I){let E=n.get(I);if(E.__webglInit===void 0)return;let $=I.source,ve=g.get($);if(ve){let pe=ve[E.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&B(I),Object.keys(ve).length===0&&g.delete($)}n.remove(I)}function B(I){let E=n.get(I);s.deleteTexture(E.__webglTexture);let $=I.source,ve=g.get($);delete ve[E.__cacheKey],a.memory.textures--}function Q(I){let E=I.texture,$=n.get(I),ve=n.get(E);if(ve.__webglTexture!==void 0&&(s.deleteTexture(ve.__webglTexture),a.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray($.__webglFramebuffer[pe]))for(let xe=0;xe<$.__webglFramebuffer[pe].length;xe++)s.deleteFramebuffer($.__webglFramebuffer[pe][xe]);else s.deleteFramebuffer($.__webglFramebuffer[pe]);$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer[pe])}else{if(Array.isArray($.__webglFramebuffer))for(let pe=0;pe<$.__webglFramebuffer.length;pe++)s.deleteFramebuffer($.__webglFramebuffer[pe]);else s.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&s.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let pe=0;pe<$.__webglColorRenderbuffer.length;pe++)$.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer($.__webglColorRenderbuffer[pe]);$.__webglDepthRenderbuffer&&s.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let pe=0,xe=E.length;pe<xe;pe++){let Xe=n.get(E[pe]);Xe.__webglTexture&&(s.deleteTexture(Xe.__webglTexture),a.memory.textures--),n.remove(E[pe])}n.remove(E),n.remove(I)}let G=0;function j(){G=0}function me(){let I=G;return I>=l&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l),G+=1,I}function re(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function he(I,E){let $=n.get(I);if(I.isVideoTexture&&Ye(I),I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){let ve=I.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft($,I,E);return}}t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+E)}function W(I,E){let $=n.get(I);if(I.version>0&&$.__version!==I.version){ft($,I,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+E)}function ie(I,E){let $=n.get(I);if(I.version>0&&$.__version!==I.version){ft($,I,E);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+E)}function be(I,E){let $=n.get(I);if(I.version>0&&$.__version!==I.version){At($,I,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+E)}let Ie={[Hn]:s.REPEAT,[qn]:s.CLAMP_TO_EDGE,[Da]:s.MIRRORED_REPEAT},ke={[Ht]:s.NEAREST,[rl]:s.NEAREST_MIPMAP_NEAREST,[wa]:s.NEAREST_MIPMAP_LINEAR,[Rt]:s.LINEAR,[su]:s.LINEAR_MIPMAP_NEAREST,[Ki]:s.LINEAR_MIPMAP_LINEAR},We={[Bg]:s.NEVER,[Wg]:s.ALWAYS,[Og]:s.LESS,[Hg]:s.LEQUAL,[zg]:s.EQUAL,[Gg]:s.GEQUAL,[kg]:s.GREATER,[Vg]:s.NOTEQUAL};function st(I,E,$){if($?(s.texParameteri(I,s.TEXTURE_WRAP_S,Ie[E.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Ie[E.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Ie[E.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,ke[E.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,ke[E.minFilter])):(s.texParameteri(I,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(I,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==qn||E.wrapT!==qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(I,s.TEXTURE_MAG_FILTER,R(E.magFilter)),s.texParameteri(I,s.TEXTURE_MIN_FILTER,R(E.minFilter)),E.minFilter!==Ht&&E.minFilter!==Rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,We[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ve=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ht||E.minFilter!==wa&&E.minFilter!==Ki||E.type===Yn&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===nn&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(I,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function et(I,E){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",Z));let ve=E.source,pe=g.get(ve);pe===void 0&&(pe={},g.set(ve,pe));let xe=re(E);if(xe!==I.__cacheKey){pe[xe]===void 0&&(pe[xe]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,$=!0),pe[xe].usedTimes++;let Xe=pe[I.__cacheKey];Xe!==void 0&&(pe[I.__cacheKey].usedTimes--,Xe.usedTimes===0&&B(E)),I.__cacheKey=xe,I.__webglTexture=pe[xe].texture}return $}function ft(I,E,$){let ve=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ve=s.TEXTURE_3D);let pe=et(I,E),xe=E.source;t.bindTexture(ve,I.__webglTexture,s.TEXTURE0+$);let Xe=n.get(xe);if(xe.version!==Xe.__version||pe===!0){t.activeTexture(s.TEXTURE0+$);let Te=zt.getPrimaries(zt.workingColorSpace),De=E.colorSpace===In?null:zt.getPrimaries(E.colorSpace),lt=E.colorSpace===In||Te===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let _t=L(E)&&w(E.image)===!1,ye=M(E.image,_t,!1,h);ye=Nt(E,ye);let Ft=w(ye)||o,ht=r.convert(E.format,E.colorSpace),rt=r.convert(E.type),tt=z(E.internalFormat,ht,rt,E.colorSpace,E.isVideoTexture);st(ve,E,Ft);let Fe,Tt=E.mipmaps,V=o&&E.isVideoTexture!==!0,Ne=Xe.__version===void 0||pe===!0,Me=_(E,ye,Ft);if(E.isDepthTexture)tt=s.DEPTH_COMPONENT,o?E.type===Yn?tt=s.DEPTH_COMPONENT32F:E.type===jn?tt=s.DEPTH_COMPONENT24:E.type===Qi?tt=s.DEPTH24_STENCIL8:tt=s.DEPTH_COMPONENT16:E.type===Yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ci&&tt===s.DEPTH_COMPONENT&&E.type!==ru&&E.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=jn,rt=r.convert(E.type)),E.format===ds&&tt===s.DEPTH_COMPONENT&&(tt=s.DEPTH_STENCIL,E.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Qi,rt=r.convert(E.type))),Ne&&(V?t.texStorage2D(s.TEXTURE_2D,1,tt,ye.width,ye.height):t.texImage2D(s.TEXTURE_2D,0,tt,ye.width,ye.height,0,ht,rt,null));else if(E.isDataTexture)if(Tt.length>0&&Ft){V&&Ne&&t.texStorage2D(s.TEXTURE_2D,Me,tt,Tt[0].width,Tt[0].height);for(let oe=0,_e=Tt.length;oe<_e;oe++)Fe=Tt[oe],V?t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Fe.width,Fe.height,ht,rt,Fe.data):t.texImage2D(s.TEXTURE_2D,oe,tt,Fe.width,Fe.height,0,ht,rt,Fe.data);E.generateMipmaps=!1}else V?(Ne&&t.texStorage2D(s.TEXTURE_2D,Me,tt,ye.width,ye.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ye.width,ye.height,ht,rt,ye.data)):t.texImage2D(s.TEXTURE_2D,0,tt,ye.width,ye.height,0,ht,rt,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&Ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,tt,Tt[0].width,Tt[0].height,ye.depth);for(let oe=0,_e=Tt.length;oe<_e;oe++)Fe=Tt[oe],E.format!==_n?ht!==null?V?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,Fe.width,Fe.height,ye.depth,ht,Fe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,tt,Fe.width,Fe.height,ye.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?t.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,Fe.width,Fe.height,ye.depth,ht,rt,Fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,oe,tt,Fe.width,Fe.height,ye.depth,0,ht,rt,Fe.data)}else{V&&Ne&&t.texStorage2D(s.TEXTURE_2D,Me,tt,Tt[0].width,Tt[0].height);for(let oe=0,_e=Tt.length;oe<_e;oe++)Fe=Tt[oe],E.format!==_n?ht!==null?V?t.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,Fe.width,Fe.height,ht,Fe.data):t.compressedTexImage2D(s.TEXTURE_2D,oe,tt,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Fe.width,Fe.height,ht,rt,Fe.data):t.texImage2D(s.TEXTURE_2D,oe,tt,Fe.width,Fe.height,0,ht,rt,Fe.data)}else if(E.isDataArrayTexture)V?(Ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,tt,ye.width,ye.height,ye.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,ht,rt,ye.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,ye.width,ye.height,ye.depth,0,ht,rt,ye.data);else if(E.isData3DTexture)V?(Ne&&t.texStorage3D(s.TEXTURE_3D,Me,tt,ye.width,ye.height,ye.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,ht,rt,ye.data)):t.texImage3D(s.TEXTURE_3D,0,tt,ye.width,ye.height,ye.depth,0,ht,rt,ye.data);else if(E.isFramebufferTexture){if(Ne)if(V)t.texStorage2D(s.TEXTURE_2D,Me,tt,ye.width,ye.height);else{let oe=ye.width,_e=ye.height;for(let at=0;at<Me;at++)t.texImage2D(s.TEXTURE_2D,at,tt,oe,_e,0,ht,rt,null),oe>>=1,_e>>=1}}else if(Tt.length>0&&Ft){V&&Ne&&t.texStorage2D(s.TEXTURE_2D,Me,tt,Tt[0].width,Tt[0].height);for(let oe=0,_e=Tt.length;oe<_e;oe++)Fe=Tt[oe],V?t.texSubImage2D(s.TEXTURE_2D,oe,0,0,ht,rt,Fe):t.texImage2D(s.TEXTURE_2D,oe,tt,ht,rt,Fe);E.generateMipmaps=!1}else V?(Ne&&t.texStorage2D(s.TEXTURE_2D,Me,tt,ye.width,ye.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ht,rt,ye)):t.texImage2D(s.TEXTURE_2D,0,tt,ht,rt,ye);N(E,Ft)&&U(ve),Xe.__version=xe.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function At(I,E,$){if(E.image.length!==6)return;let ve=et(I,E),pe=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+$);let xe=n.get(pe);if(pe.version!==xe.__version||ve===!0){t.activeTexture(s.TEXTURE0+$);let Xe=zt.getPrimaries(zt.workingColorSpace),Te=E.colorSpace===In?null:zt.getPrimaries(E.colorSpace),De=E.colorSpace===In||Xe===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let lt=E.isCompressedTexture||E.image[0].isCompressedTexture,_t=E.image[0]&&E.image[0].isDataTexture,ye=[];for(let oe=0;oe<6;oe++)!lt&&!_t?ye[oe]=M(E.image[oe],!1,!0,c):ye[oe]=_t?E.image[oe].image:E.image[oe],ye[oe]=Nt(E,ye[oe]);let Ft=ye[0],ht=w(Ft)||o,rt=r.convert(E.format,E.colorSpace),tt=r.convert(E.type),Fe=z(E.internalFormat,rt,tt,E.colorSpace),Tt=o&&E.isVideoTexture!==!0,V=xe.__version===void 0||ve===!0,Ne=_(E,Ft,ht);st(s.TEXTURE_CUBE_MAP,E,ht);let Me;if(lt){Tt&&V&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,Fe,Ft.width,Ft.height);for(let oe=0;oe<6;oe++){Me=ye[oe].mipmaps;for(let _e=0;_e<Me.length;_e++){let at=Me[_e];E.format!==_n?rt!==null?Tt?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e,0,0,at.width,at.height,rt,at.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e,Fe,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e,0,0,at.width,at.height,rt,tt,at.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e,Fe,at.width,at.height,0,rt,tt,at.data)}}}else{Me=E.mipmaps,Tt&&V&&(Me.length>0&&Ne++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,Fe,ye[0].width,ye[0].height));for(let oe=0;oe<6;oe++)if(_t){Tt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ye[oe].width,ye[oe].height,rt,tt,ye[oe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Fe,ye[oe].width,ye[oe].height,0,rt,tt,ye[oe].data);for(let _e=0;_e<Me.length;_e++){let Dt=Me[_e].image[oe].image;Tt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e+1,0,0,Dt.width,Dt.height,rt,tt,Dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e+1,Fe,Dt.width,Dt.height,0,rt,tt,Dt.data)}}else{Tt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,rt,tt,ye[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Fe,rt,tt,ye[oe]);for(let _e=0;_e<Me.length;_e++){let at=Me[_e];Tt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e+1,0,0,rt,tt,at.image[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e+1,Fe,rt,tt,at.image[oe])}}}N(E,ht)&&U(s.TEXTURE_CUBE_MAP),xe.__version=pe.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function nt(I,E,$,ve,pe,xe){let Xe=r.convert($.format,$.colorSpace),Te=r.convert($.type),De=z($.internalFormat,Xe,Te,$.colorSpace);if(!n.get(E).__hasExternalTextures){let _t=Math.max(1,E.width>>xe),ye=Math.max(1,E.height>>xe);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,xe,De,_t,ye,E.depth,0,Xe,Te,null):t.texImage2D(pe,xe,De,_t,ye,0,Xe,Te,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),je(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,pe,n.get($).__webglTexture,0,He(E)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,pe,n.get($).__webglTexture,xe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function k(I,E,$){if(s.bindRenderbuffer(s.RENDERBUFFER,I),E.depthBuffer&&!E.stencilBuffer){let ve=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if($||je(E)){let pe=E.depthTexture;pe&&pe.isDepthTexture&&(pe.type===Yn?ve=s.DEPTH_COMPONENT32F:pe.type===jn&&(ve=s.DEPTH_COMPONENT24));let xe=He(E);je(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,ve,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,ve,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,ve,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,I)}else if(E.depthBuffer&&E.stencilBuffer){let ve=He(E);$&&je(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,s.DEPTH24_STENCIL8,E.width,E.height):je(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,I)}else{let ve=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let pe=0;pe<ve.length;pe++){let xe=ve[pe],Xe=r.convert(xe.format,xe.colorSpace),Te=r.convert(xe.type),De=z(xe.internalFormat,Xe,Te,xe.colorSpace),lt=He(E);$&&je(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,De,E.width,E.height):je(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,De,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,De,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he(E.depthTexture,0);let ve=n.get(E.depthTexture).__webglTexture,pe=He(E);if(E.depthTexture.format===ci)je(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(E.depthTexture.format===ds)je(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function le(I){let E=n.get(I),$=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Ae(E.__webglFramebuffer,I)}else if($){E.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ve]),E.__webglDepthbuffer[ve]=s.createRenderbuffer(),k(E.__webglDepthbuffer[ve],I,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),k(E.__webglDepthbuffer,I,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(I,E,$){let ve=n.get(I);E!==void 0&&nt(ve.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&le(I)}function fe(I){let E=I.texture,$=n.get(I),ve=n.get(E);I.addEventListener("dispose",K),I.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=E.version,a.memory.textures++);let pe=I.isWebGLCubeRenderTarget===!0,xe=I.isWebGLMultipleRenderTargets===!0,Xe=w(I)||o;if(pe){$.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(o&&E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[Te]=[];for(let De=0;De<E.mipmaps.length;De++)$.__webglFramebuffer[Te][De]=s.createFramebuffer()}else $.__webglFramebuffer[Te]=s.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let Te=0;Te<E.mipmaps.length;Te++)$.__webglFramebuffer[Te]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(xe)if(i.drawBuffers){let Te=I.texture;for(let De=0,lt=Te.length;De<lt;De++){let _t=n.get(Te[De]);_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&I.samples>0&&je(I)===!1){let Te=xe?E:[E];$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let De=0;De<Te.length;De++){let lt=Te[De];$.__webglColorRenderbuffer[De]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[De]);let _t=r.convert(lt.format,lt.colorSpace),ye=r.convert(lt.type),Ft=z(lt.internalFormat,_t,ye,lt.colorSpace,I.isXRRenderTarget===!0),ht=He(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,Ft,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,$.__webglColorRenderbuffer[De])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),k($.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){t.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),st(s.TEXTURE_CUBE_MAP,E,Xe);for(let Te=0;Te<6;Te++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let De=0;De<E.mipmaps.length;De++)nt($.__webglFramebuffer[Te][De],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,De);else nt($.__webglFramebuffer[Te],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);N(E,Xe)&&U(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){let Te=I.texture;for(let De=0,lt=Te.length;De<lt;De++){let _t=Te[De],ye=n.get(_t);t.bindTexture(s.TEXTURE_2D,ye.__webglTexture),st(s.TEXTURE_2D,_t,Xe),nt($.__webglFramebuffer,I,_t,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,0),N(_t,Xe)&&U(s.TEXTURE_2D)}t.unbindTexture()}else{let Te=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(o?Te=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Te,ve.__webglTexture),st(Te,E,Xe),o&&E.mipmaps&&E.mipmaps.length>0)for(let De=0;De<E.mipmaps.length;De++)nt($.__webglFramebuffer[De],I,E,s.COLOR_ATTACHMENT0,Te,De);else nt($.__webglFramebuffer,I,E,s.COLOR_ATTACHMENT0,Te,0);N(E,Xe)&&U(Te),t.unbindTexture()}I.depthBuffer&&le(I)}function Je(I){let E=w(I)||o,$=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let ve=0,pe=$.length;ve<pe;ve++){let xe=$[ve];if(N(xe,E)){let Xe=I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Te=n.get(xe).__webglTexture;t.bindTexture(Xe,Te),U(Xe),t.unbindTexture()}}}function Pe(I){if(o&&I.samples>0&&je(I)===!1){let E=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],$=I.width,ve=I.height,pe=s.COLOR_BUFFER_BIT,xe=[],Xe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=n.get(I),De=I.isWebGLMultipleRenderTargets===!0;if(De)for(let lt=0;lt<E.length;lt++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let lt=0;lt<E.length;lt++){xe.push(s.COLOR_ATTACHMENT0+lt),I.depthBuffer&&xe.push(Xe);let _t=Te.__ignoreDepthValues!==void 0?Te.__ignoreDepthValues:!1;if(_t===!1&&(I.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),De&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[lt]),_t===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Xe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Xe])),De){let ye=n.get(E[lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,$,ve,0,0,$,ve,pe,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),De)for(let lt=0;lt<E.length;lt++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,Te.__webglColorRenderbuffer[lt]);let _t=n.get(E[lt]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,_t,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}}function He(I){return Math.min(f,I.samples)}function je(I){let E=n.get(I);return o&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ye(I){let E=a.render.frame;x.get(I)!==E&&(x.set(I,E),I.update())}function Nt(I,E){let $=I.colorSpace,ve=I.format,pe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===gh||$!==xn&&$!==In&&(zt.getTransfer($)===$t?o===!1?e.has("EXT_sRGB")===!0&&ve===_n?(I.format=gh,I.minFilter=Rt,I.generateMipmaps=!1):E=fl.sRGBToLinear(E):(ve!==_n||pe!==fs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}this.allocateTextureUnit=me,this.resetTextureUnits=j,this.setTexture2D=he,this.setTexture2DArray=W,this.setTexture3D=ie,this.setTextureCube=be,this.rebindTextures=ge,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=je}function XM(s,e,t){let n=t.isWebGL2;function i(r,a=In){let o,l=zt.getTransfer(a);if(r===fs)return s.UNSIGNED_BYTE;if(r===xp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===yp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===bg)return s.BYTE;if(r===_g)return s.SHORT;if(r===ru)return s.UNSIGNED_SHORT;if(r===vp)return s.INT;if(r===jn)return s.UNSIGNED_INT;if(r===Yn)return s.FLOAT;if(r===nn)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Tg)return s.ALPHA;if(r===_n)return s.RGBA;if(r===wg)return s.LUMINANCE;if(r===Eg)return s.LUMINANCE_ALPHA;if(r===ci)return s.DEPTH_COMPONENT;if(r===ds)return s.DEPTH_STENCIL;if(r===gh)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===au)return s.RED;if(r===Mp)return s.RED_INTEGER;if(r===Ag)return s.RG;if(r===Sp)return s.RG_INTEGER;if(r===bp)return s.RGBA_INTEGER;if(r===Cc||r===Pc||r===Lc||r===Ic)if(l===$t)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Cc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Lc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ic)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Cc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Lc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ic)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===If||r===Df||r===Uf||r===Nf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===If)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Df)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Uf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ff||r===Bf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ff)return l===$t?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Bf)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Of||r===zf||r===Hf||r===kf||r===Vf||r===Gf||r===Wf||r===Xf||r===qf||r===Yf||r===Zf||r===Qf||r===Kf||r===Jf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Of)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zf)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hf)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===kf)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vf)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gf)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wf)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xf)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qf)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yf)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zf)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qf)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kf)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jf)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dc||r===jf||r===$f)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Dc)return l===$t?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$f)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Cg||r===ed||r===td||r===nd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Dc)return o.COMPRESSED_RED_RGTC1_EXT;if(r===ed)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===td)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qi?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Ph=class extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},en=class extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},qM={type:"move"},Ca=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let S of e.hand.values()){let g=t.getJointPose(S,n),m=this._getHandJoint(c,S);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qM)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new en;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ji=class extends Dn{constructor(e,t,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:ci,h!==ci&&h!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ci&&(n=jn),n===void 0&&h===ds&&(n=Qi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Lh=class extends Ji{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,x=null,S=t.getContextAttributes(),g=null,m=null,T=[],M=[],w=new bn;w.layers.enable(1),w.viewport=new Zt;let L=new bn;L.layers.enable(2),L.viewport=new Zt;let N=[w,L],U=new Ph;U.layers.enable(1),U.layers.enable(2);let z=null,_=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ie=T[W];return ie===void 0&&(ie=new Ca,T[W]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(W){let ie=T[W];return ie===void 0&&(ie=new Ca,T[W]=ie),ie.getGripSpace()},this.getHand=function(W){let ie=T[W];return ie===void 0&&(ie=new Ca,T[W]=ie),ie.getHandSpace()};function R(W){let ie=M.indexOf(W.inputSource);if(ie===-1)return;let be=T[ie];be!==void 0&&(be.update(W.inputSource,W.frame,c||a),be.dispatchEvent({type:W.type,data:W.inputSource}))}function Z(){i.removeEventListener("select",R),i.removeEventListener("selectstart",R),i.removeEventListener("selectend",R),i.removeEventListener("squeeze",R),i.removeEventListener("squeezestart",R),i.removeEventListener("squeezeend",R),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",K);for(let W=0;W<T.length;W++){let ie=M[W];ie!==null&&(M[W]=null,T[W].disconnect(ie))}z=null,_=null,e.setRenderTarget(g),p=null,d=null,f=null,i=null,m=null,he.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",R),i.addEventListener("selectstart",R),i.addEventListener("selectend",R),i.addEventListener("squeeze",R),i.addEventListener("squeezestart",R),i.addEventListener("squeezeend",R),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",K),S.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ie={antialias:i.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:p}),m=new Jt(p.framebufferWidth,p.framebufferHeight,{format:_n,type:fs,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ie=null,be=null,Ie=null;S.depth&&(Ie=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=S.stencil?ds:ci,be=S.stencil?Qi:jn);let ke={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(ke),i.updateRenderState({layers:[d]}),m=new Jt(d.textureWidth,d.textureHeight,{format:_n,type:fs,depthTexture:new ji(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});let We=e.properties.get(m);We.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),he.setContext(i),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function K(W){for(let ie=0;ie<W.removed.length;ie++){let be=W.removed[ie],Ie=M.indexOf(be);Ie>=0&&(M[Ie]=null,T[Ie].disconnect(be))}for(let ie=0;ie<W.added.length;ie++){let be=W.added[ie],Ie=M.indexOf(be);if(Ie===-1){for(let We=0;We<T.length;We++)if(We>=M.length){M.push(be),Ie=We;break}else if(M[We]===null){M[We]=be,Ie=We;break}if(Ie===-1)break}let ke=T[Ie];ke&&ke.connect(be)}}let ae=new D,B=new D;function Q(W,ie,be){ae.setFromMatrixPosition(ie.matrixWorld),B.setFromMatrixPosition(be.matrixWorld);let Ie=ae.distanceTo(B),ke=ie.projectionMatrix.elements,We=be.projectionMatrix.elements,st=ke[14]/(ke[10]-1),et=ke[14]/(ke[10]+1),ft=(ke[9]+1)/ke[5],At=(ke[9]-1)/ke[5],nt=(ke[8]-1)/ke[0],k=(We[8]+1)/We[0],Ae=st*nt,le=st*k,ge=Ie/(-nt+k),fe=ge*-nt;ie.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(fe),W.translateZ(ge),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let Je=st+ge,Pe=et+ge,He=Ae-fe,je=le+(Ie-fe),Ye=ft*et/Pe*Je,Nt=At*et/Pe*Je;W.projectionMatrix.makePerspective(He,je,Ye,Nt,Je,Pe),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function G(W,ie){ie===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ie.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;U.near=L.near=w.near=W.near,U.far=L.far=w.far=W.far,(z!==U.near||_!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,_=U.far);let ie=W.parent,be=U.cameras;G(U,ie);for(let Ie=0;Ie<be.length;Ie++)G(be[Ie],ie);be.length===2?Q(U,w,L):U.projectionMatrix.copy(w.projectionMatrix),j(W,U,ie)};function j(W,ie,be){be===null?W.matrix.copy(ie.matrixWorld):(W.matrix.copy(be.matrixWorld),W.matrix.invert(),W.matrix.multiply(ie.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ir*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)};let me=null;function re(W,ie){if(h=ie.getViewerPose(c||a),x=ie,h!==null){let be=h.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let Ie=!1;be.length!==U.cameras.length&&(U.cameras.length=0,Ie=!0);for(let ke=0;ke<be.length;ke++){let We=be[ke],st=null;if(p!==null)st=p.getViewport(We);else{let ft=f.getViewSubImage(d,We);st=ft.viewport,ke===0&&(e.setRenderTargetTextures(m,ft.colorTexture,d.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(m))}let et=N[ke];et===void 0&&(et=new bn,et.layers.enable(ke),et.viewport=new Zt,N[ke]=et),et.matrix.fromArray(We.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(We.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(st.x,st.y,st.width,st.height),ke===0&&(U.matrix.copy(et.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ie===!0&&U.cameras.push(et)}}for(let be=0;be<T.length;be++){let Ie=M[be],ke=T[be];Ie!==null&&ke!==void 0&&ke.update(Ie,ie,c||a)}me&&me(W,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),x=null}let he=new Lp;he.setAnimationLoop(re),this.setAnimationLoop=function(W){me=W},this.dispose=function(){}}};function YM(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Pp(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,T,M,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&p(g,m,w)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),S(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,T,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===zn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===zn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let T=e.get(m).envMap;if(T&&(g.envMap.value=T,g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let M=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*M,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,T,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*T,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,T){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===zn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function S(g,m){let T=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ZM(s,e,t,n){let i={},r={},a=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,M){let w=M.program;n.uniformBlockBinding(T,w)}function c(T,M){let w=i[T.id];w===void 0&&(x(T),w=h(T),i[T.id]=w,T.addEventListener("dispose",g));let L=M.program;n.updateUBOMapping(T,L);let N=e.render.frame;r[T.id]!==N&&(d(T),r[T.id]=N)}function h(T){let M=f();T.__bindingPointIndex=M;let w=s.createBuffer(),L=T.__size,N=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,L,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,w),w}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let M=i[T.id],w=T.uniforms,L=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let N=0,U=w.length;N<U;N++){let z=w[N];if(p(z,N,L)===!0){let _=z.__offset,R=Array.isArray(z.value)?z.value:[z.value],Z=0;for(let K=0;K<R.length;K++){let ae=R[K],B=S(ae);typeof ae=="number"?(z.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,_+Z,z.__data)):ae.isMatrix3?(z.__data[0]=ae.elements[0],z.__data[1]=ae.elements[1],z.__data[2]=ae.elements[2],z.__data[3]=ae.elements[0],z.__data[4]=ae.elements[3],z.__data[5]=ae.elements[4],z.__data[6]=ae.elements[5],z.__data[7]=ae.elements[0],z.__data[8]=ae.elements[6],z.__data[9]=ae.elements[7],z.__data[10]=ae.elements[8],z.__data[11]=ae.elements[0]):(ae.toArray(z.__data,Z),Z+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,_,z.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(T,M,w){let L=T.value;if(w[M]===void 0){if(typeof L=="number")w[M]=L;else{let N=Array.isArray(L)?L:[L],U=[];for(let z=0;z<N.length;z++)U.push(N[z].clone());w[M]=U}return!0}else if(typeof L=="number"){if(w[M]!==L)return w[M]=L,!0}else{let N=Array.isArray(w[M])?w[M]:[w[M]],U=Array.isArray(L)?L:[L];for(let z=0;z<N.length;z++){let _=N[z];if(_.equals(U[z])===!1)return _.copy(U[z]),!0}}return!1}function x(T){let M=T.uniforms,w=0,L=16,N=0;for(let U=0,z=M.length;U<z;U++){let _=M[U],R={boundary:0,storage:0},Z=Array.isArray(_.value)?_.value:[_.value];for(let K=0,ae=Z.length;K<ae;K++){let B=Z[K],Q=S(B);R.boundary+=Q.boundary,R.storage+=Q.storage}if(_.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),_.__offset=w,U>0){N=w%L;let K=L-N;N!==0&&K-R.boundary<0&&(w+=L-N,_.__offset=w)}w+=R.storage}return N=w%L,N>0&&(w+=L-N),T.__size=w,T.__cache={},this}function S(T){let M={boundary:0,storage:0};return typeof T=="number"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function g(T){let M=T.target;M.removeEventListener("dispose",g);let w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function m(){for(let T in i)s.deleteBuffer(i[T]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}var Fa=class{constructor(e={}){let{canvas:t=s0(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),x=new Int32Array(4),S=null,g=null,m=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this._useLegacyLights=!1,this.toneMapping=us,this.toneMappingExposure=1;let M=this,w=!1,L=0,N=0,U=null,z=-1,_=null,R=new Zt,Z=new Zt,K=null,ae=new Ue(0),B=0,Q=t.width,G=t.height,j=1,me=null,re=null,he=new Zt(0,0,Q,G),W=new Zt(0,0,Q,G),ie=!1,be=new Na,Ie=!1,ke=!1,We=null,st=new Ge,et=new ce,ft=new D,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function nt(){return U===null?j:1}let k=n;function Ae(C,q){for(let te=0;te<C.length;te++){let ee=C[te],ne=t.getContext(ee,q);if(ne!==null)return ne}return null}try{let C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nu}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),k===null){let q=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&q.shift(),k=Ae(q,C),k===null)throw Ae(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let le,ge,fe,Je,Pe,He,je,Ye,Nt,I,E,$,ve,pe,xe,Xe,Te,De,lt,_t,ye,Ft,ht,rt;function tt(){le=new py(k),ge=new ly(k,le,e),le.init(ge),Ft=new XM(k,le,ge),fe=new GM(k,le,ge),Je=new vy(k),Pe=new LM,He=new WM(k,le,fe,Pe,ge,Ft,Je),je=new hy(M),Ye=new dy(M),Nt=new A0(k,ge),ht=new ay(k,le,Nt,ge),I=new my(k,Nt,Je,ht),E=new Sy(k,I,Nt,Je),lt=new My(k,ge,He),Xe=new cy(Pe),$=new PM(M,je,Ye,le,ge,ht,Xe),ve=new YM(M,Pe),pe=new DM,xe=new zM(le,ge),De=new ry(M,je,Ye,fe,E,d,l),Te=new VM(M,E,ge),rt=new ZM(k,Je,ge,fe),_t=new oy(k,le,Je,ge),ye=new gy(k,le,Je,ge),Je.programs=$.programs,M.capabilities=ge,M.extensions=le,M.properties=Pe,M.renderLists=pe,M.shadowMap=Te,M.state=fe,M.info=Je}tt();let Fe=new Lh(M,k);this.xr=Fe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let C=le.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=le.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(C){C!==void 0&&(j=C,this.setSize(Q,G,!1))},this.getSize=function(C){return C.set(Q,G)},this.setSize=function(C,q,te=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=C,G=q,t.width=Math.floor(C*j),t.height=Math.floor(q*j),te===!0&&(t.style.width=C+"px",t.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(Q*j,G*j).floor()},this.setDrawingBufferSize=function(C,q,te){Q=C,G=q,j=te,t.width=Math.floor(C*te),t.height=Math.floor(q*te),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(he)},this.setViewport=function(C,q,te,ee){C.isVector4?he.set(C.x,C.y,C.z,C.w):he.set(C,q,te,ee),fe.viewport(R.copy(he).multiplyScalar(j).floor())},this.getScissor=function(C){return C.copy(W)},this.setScissor=function(C,q,te,ee){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,q,te,ee),fe.scissor(Z.copy(W).multiplyScalar(j).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(C){fe.setScissorTest(ie=C)},this.setOpaqueSort=function(C){me=C},this.setTransparentSort=function(C){re=C},this.getClearColor=function(C){return C.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(C=!0,q=!0,te=!0){let ee=0;if(C){let ne=!1;if(U!==null){let Oe=U.texture.format;ne=Oe===bp||Oe===Sp||Oe===Mp}if(ne){let Oe=U.texture.type,Ze=Oe===fs||Oe===jn||Oe===ru||Oe===Qi||Oe===xp||Oe===yp,it=De.getClearColor(),ot=De.getClearAlpha(),vt=it.r,ut=it.g,mt=it.b;Ze?(p[0]=vt,p[1]=ut,p[2]=mt,p[3]=ot,k.clearBufferuiv(k.COLOR,0,p)):(x[0]=vt,x[1]=ut,x[2]=mt,x[3]=ot,k.clearBufferiv(k.COLOR,0,x))}else ee|=k.COLOR_BUFFER_BIT}q&&(ee|=k.DEPTH_BUFFER_BIT),te&&(ee|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),pe.dispose(),xe.dispose(),Pe.dispose(),je.dispose(),Ye.dispose(),E.dispose(),ht.dispose(),rt.dispose(),$.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",dn),Fe.removeEventListener("sessionend",Bt),We&&(We.dispose(),We=null),yn.stop()};function Tt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let C=Je.autoReset,q=Te.enabled,te=Te.autoUpdate,ee=Te.needsUpdate,ne=Te.type;tt(),Je.autoReset=C,Te.enabled=q,Te.autoUpdate=te,Te.needsUpdate=ee,Te.type=ne}function Ne(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Me(C){let q=C.target;q.removeEventListener("dispose",Me),oe(q)}function oe(C){_e(C),Pe.remove(C)}function _e(C){let q=Pe.get(C).programs;q!==void 0&&(q.forEach(function(te){$.releaseProgram(te)}),C.isShaderMaterial&&$.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,te,ee,ne,Oe){q===null&&(q=At);let Ze=ne.isMesh&&ne.matrixWorld.determinant()<0,it=io(C,q,te,ee,ne);fe.setMaterial(ee,Ze);let ot=te.index,vt=1;if(ee.wireframe===!0){if(ot=I.getWireframeAttribute(te),ot===void 0)return;vt=2}let ut=te.drawRange,mt=te.attributes.position,sn=ut.start*vt,kn=(ut.start+ut.count)*vt;Oe!==null&&(sn=Math.max(sn,Oe.start*vt),kn=Math.min(kn,(Oe.start+Oe.count)*vt)),ot!==null?(sn=Math.max(sn,0),kn=Math.min(kn,ot.count)):mt!=null&&(sn=Math.max(sn,0),kn=Math.min(kn,mt.count));let pn=kn-sn;if(pn<0||pn===1/0)return;ht.setup(ne,ee,it,te,ot);let An,rn=_t;if(ot!==null&&(An=Nt.get(ot),rn=ye,rn.setIndex(An)),ne.isMesh)ee.wireframe===!0?(fe.setLineWidth(ee.wireframeLinewidth*nt()),rn.setMode(k.LINES)):rn.setMode(k.TRIANGLES);else if(ne.isLine){let St=ee.linewidth;St===void 0&&(St=1),fe.setLineWidth(St*nt()),ne.isLineSegments?rn.setMode(k.LINES):ne.isLineLoop?rn.setMode(k.LINE_LOOP):rn.setMode(k.LINE_STRIP)}else ne.isPoints?rn.setMode(k.POINTS):ne.isSprite&&rn.setMode(k.TRIANGLES);if(ne.isInstancedMesh)rn.renderInstances(sn,pn,ne.count);else if(te.isInstancedBufferGeometry){let St=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,na=Math.min(te.instanceCount,St);rn.renderInstances(sn,pn,na)}else rn.render(sn,pn)};function at(C,q,te){C.transparent===!0&&C.side===si&&C.forceSinglePass===!1?(C.side=zn,C.needsUpdate=!0,pt(C,q,te),C.side=Li,C.needsUpdate=!0,pt(C,q,te),C.side=si):pt(C,q,te)}this.compile=function(C,q,te=null){te===null&&(te=C),g=xe.get(te),g.init(),T.push(g),te.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(g.pushLight(ne),ne.castShadow&&g.pushShadow(ne))}),C!==te&&C.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(g.pushLight(ne),ne.castShadow&&g.pushShadow(ne))}),g.setupLights(M._useLegacyLights);let ee=new Set;return C.traverse(function(ne){let Oe=ne.material;if(Oe)if(Array.isArray(Oe))for(let Ze=0;Ze<Oe.length;Ze++){let it=Oe[Ze];at(it,te,ne),ee.add(it)}else at(Oe,te,ne),ee.add(Oe)}),T.pop(),g=null,ee},this.compileAsync=function(C,q,te=null){let ee=this.compile(C,q,te);return new Promise(ne=>{function Oe(){if(ee.forEach(function(Ze){Pe.get(Ze).currentProgram.isReady()&&ee.delete(Ze)}),ee.size===0){ne(C);return}setTimeout(Oe,10)}le.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Dt=null;function Kt(C){Dt&&Dt(C)}function dn(){yn.stop()}function Bt(){yn.start()}let yn=new Lp;yn.setAnimationLoop(Kt),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(C){Dt=C,Fe.setAnimationLoop(C),C===null?yn.stop():yn.start()},Fe.addEventListener("sessionstart",dn),Fe.addEventListener("sessionend",Bt),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(q),q=Fe.getCamera()),C.isScene===!0&&C.onBeforeRender(M,C,q,U),g=xe.get(C,T.length),g.init(),T.push(g),st.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),be.setFromProjectionMatrix(st),ke=this.localClippingEnabled,Ie=Xe.init(this.clippingPlanes,ke),S=pe.get(C,m.length),S.init(),m.push(S),ti(C,q,0,M.sortObjects),S.finish(),M.sortObjects===!0&&S.sort(me,re),this.info.render.frame++,Ie===!0&&Xe.beginShadows();let te=g.state.shadowsArray;if(Te.render(te,C,q),Ie===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),De.render(S,C),g.setupLights(M._useLegacyLights),q.isArrayCamera){let ee=q.cameras;for(let ne=0,Oe=ee.length;ne<Oe;ne++){let Ze=ee[ne];no(S,C,Ze,Ze.viewport)}}else no(S,C,q);U!==null&&(He.updateMultisampleRenderTarget(U),He.updateRenderTargetMipmap(U)),C.isScene===!0&&C.onAfterRender(M,C,q),ht.resetDefaultState(),z=-1,_=null,T.pop(),T.length>0?g=T[T.length-1]:g=null,m.pop(),m.length>0?S=m[m.length-1]:S=null};function ti(C,q,te,ee){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)te=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||be.intersectsSprite(C)){ee&&ft.setFromMatrixPosition(C.matrixWorld).applyMatrix4(st);let Ze=E.update(C),it=C.material;it.visible&&S.push(C,Ze,it,te,ft.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||be.intersectsObject(C))){let Ze=E.update(C),it=C.material;if(ee&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ft.copy(C.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),ft.copy(Ze.boundingSphere.center)),ft.applyMatrix4(C.matrixWorld).applyMatrix4(st)),Array.isArray(it)){let ot=Ze.groups;for(let vt=0,ut=ot.length;vt<ut;vt++){let mt=ot[vt],sn=it[mt.materialIndex];sn&&sn.visible&&S.push(C,Ze,sn,te,ft.z,mt)}}else it.visible&&S.push(C,Ze,it,te,ft.z,null)}}let Oe=C.children;for(let Ze=0,it=Oe.length;Ze<it;Ze++)ti(Oe[Ze],q,te,ee)}function no(C,q,te,ee){let ne=C.opaque,Oe=C.transmissive,Ze=C.transparent;g.setupLightsView(te),Ie===!0&&Xe.setGlobalState(M.clippingPlanes,te),Oe.length>0&&$r(ne,Oe,q,te),ee&&fe.viewport(R.copy(ee)),ne.length>0&&dt(ne,q,te),Oe.length>0&&dt(Oe,q,te),Ze.length>0&&dt(Ze,q,te),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function $r(C,q,te,ee){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;let Oe=ge.isWebGL2;We===null&&(We=new Jt(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")?nn:fs,minFilter:Ki,samples:Oe?4:0})),M.getDrawingBufferSize(et),Oe?We.setSize(et.x,et.y):We.setSize(ul(et.x),ul(et.y));let Ze=M.getRenderTarget();M.setRenderTarget(We),M.getClearColor(ae),B=M.getClearAlpha(),B<1&&M.setClearColor(16777215,.5),M.clear();let it=M.toneMapping;M.toneMapping=us,dt(C,te,ee),He.updateMultisampleRenderTarget(We),He.updateRenderTargetMipmap(We);let ot=!1;for(let vt=0,ut=q.length;vt<ut;vt++){let mt=q[vt],sn=mt.object,kn=mt.geometry,pn=mt.material,An=mt.group;if(pn.side===si&&sn.layers.test(ee.layers)){let rn=pn.side;pn.side=zn,pn.needsUpdate=!0,Pt(sn,te,ee,kn,pn,An),pn.side=rn,pn.needsUpdate=!0,ot=!0}}ot===!0&&(He.updateMultisampleRenderTarget(We),He.updateRenderTargetMipmap(We)),M.setRenderTarget(Ze),M.setClearColor(ae,B),M.toneMapping=it}function dt(C,q,te){let ee=q.isScene===!0?q.overrideMaterial:null;for(let ne=0,Oe=C.length;ne<Oe;ne++){let Ze=C[ne],it=Ze.object,ot=Ze.geometry,vt=ee===null?Ze.material:ee,ut=Ze.group;it.layers.test(te.layers)&&Pt(it,q,te,ot,vt,ut)}}function Pt(C,q,te,ee,ne,Oe){C.onBeforeRender(M,q,te,ee,ne,Oe),C.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ne.onBeforeRender(M,q,te,ee,C,Oe),ne.transparent===!0&&ne.side===si&&ne.forceSinglePass===!1?(ne.side=zn,ne.needsUpdate=!0,M.renderBufferDirect(te,q,ee,ne,C,Oe),ne.side=Li,ne.needsUpdate=!0,M.renderBufferDirect(te,q,ee,ne,C,Oe),ne.side=si):M.renderBufferDirect(te,q,ee,ne,C,Oe),C.onAfterRender(M,q,te,ee,ne,Oe)}function pt(C,q,te){q.isScene!==!0&&(q=At);let ee=Pe.get(C),ne=g.state.lights,Oe=g.state.shadowsArray,Ze=ne.state.version,it=$.getParameters(C,ne.state,Oe,q,te),ot=$.getProgramCacheKey(it),vt=ee.programs;ee.environment=C.isMeshStandardMaterial?q.environment:null,ee.fog=q.fog,ee.envMap=(C.isMeshStandardMaterial?Ye:je).get(C.envMap||ee.environment),vt===void 0&&(C.addEventListener("dispose",Me),vt=new Map,ee.programs=vt);let ut=vt.get(ot);if(ut!==void 0){if(ee.currentProgram===ut&&ee.lightsStateVersion===Ze)return ea(C,it),ut}else it.uniforms=$.getUniforms(C),C.onBuild(te,it,M),C.onBeforeCompile(it,M),ut=$.acquireProgram(it,ot),vt.set(ot,ut),ee.uniforms=it.uniforms;let mt=ee.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(mt.clippingPlanes=Xe.uniform),ea(C,it),ee.needsLights=ic(C),ee.lightsStateVersion=Ze,ee.needsLights&&(mt.ambientLightColor.value=ne.state.ambient,mt.lightProbe.value=ne.state.probe,mt.directionalLights.value=ne.state.directional,mt.directionalLightShadows.value=ne.state.directionalShadow,mt.spotLights.value=ne.state.spot,mt.spotLightShadows.value=ne.state.spotShadow,mt.rectAreaLights.value=ne.state.rectArea,mt.ltc_1.value=ne.state.rectAreaLTC1,mt.ltc_2.value=ne.state.rectAreaLTC2,mt.pointLights.value=ne.state.point,mt.pointLightShadows.value=ne.state.pointShadow,mt.hemisphereLights.value=ne.state.hemi,mt.directionalShadowMap.value=ne.state.directionalShadowMap,mt.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,mt.spotShadowMap.value=ne.state.spotShadowMap,mt.spotLightMatrix.value=ne.state.spotLightMatrix,mt.spotLightMap.value=ne.state.spotLightMap,mt.pointShadowMap.value=ne.state.pointShadowMap,mt.pointShadowMatrix.value=ne.state.pointShadowMatrix),ee.currentProgram=ut,ee.uniformsList=null,ut}function gt(C){if(C.uniformsList===null){let q=C.currentProgram.getUniforms();C.uniformsList=Ar.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function ea(C,q){let te=Pe.get(C);te.outputColorSpace=q.outputColorSpace,te.instancing=q.instancing,te.instancingColor=q.instancingColor,te.skinning=q.skinning,te.morphTargets=q.morphTargets,te.morphNormals=q.morphNormals,te.morphColors=q.morphColors,te.morphTargetsCount=q.morphTargetsCount,te.numClippingPlanes=q.numClippingPlanes,te.numIntersection=q.numClipIntersection,te.vertexAlphas=q.vertexAlphas,te.vertexTangents=q.vertexTangents,te.toneMapping=q.toneMapping}function io(C,q,te,ee,ne){q.isScene!==!0&&(q=At),He.resetTextureUnits();let Oe=q.fog,Ze=ee.isMeshStandardMaterial?q.environment:null,it=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:xn,ot=(ee.isMeshStandardMaterial?Ye:je).get(ee.envMap||Ze),vt=ee.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ut=!!te.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),mt=!!te.morphAttributes.position,sn=!!te.morphAttributes.normal,kn=!!te.morphAttributes.color,pn=us;ee.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(pn=M.toneMapping);let An=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,rn=An!==void 0?An.length:0,St=Pe.get(ee),na=g.state.lights;if(Ie===!0&&(ke===!0||C!==_)){let Vn=C===_&&ee.id===z;Xe.setState(ee,C,Vn)}let an=!1;ee.version===St.__version?(St.needsLights&&St.lightsStateVersion!==na.state.version||St.outputColorSpace!==it||ne.isInstancedMesh&&St.instancing===!1||!ne.isInstancedMesh&&St.instancing===!0||ne.isSkinnedMesh&&St.skinning===!1||!ne.isSkinnedMesh&&St.skinning===!0||ne.isInstancedMesh&&St.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&St.instancingColor===!1&&ne.instanceColor!==null||St.envMap!==ot||ee.fog===!0&&St.fog!==Oe||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==Xe.numPlanes||St.numIntersection!==Xe.numIntersection)||St.vertexAlphas!==vt||St.vertexTangents!==ut||St.morphTargets!==mt||St.morphNormals!==sn||St.morphColors!==kn||St.toneMapping!==pn||ge.isWebGL2===!0&&St.morphTargetsCount!==rn)&&(an=!0):(an=!0,St.__version=ee.version);let Ui=St.currentProgram;an===!0&&(Ui=pt(ee,q,ne));let ia=!1,ts=!1,ks=!1,Rn=Ui.getUniforms(),_i=St.uniforms;if(fe.useProgram(Ui.program)&&(ia=!0,ts=!0,ks=!0),ee.id!==z&&(z=ee.id,ts=!0),ia||_!==C){Rn.setValue(k,"projectionMatrix",C.projectionMatrix),Rn.setValue(k,"viewMatrix",C.matrixWorldInverse);let Vn=Rn.map.cameraPosition;Vn!==void 0&&Vn.setValue(k,ft.setFromMatrixPosition(C.matrixWorld)),ge.logarithmicDepthBuffer&&Rn.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Rn.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),_!==C&&(_=C,ts=!0,ks=!0)}if(ne.isSkinnedMesh){Rn.setOptional(k,ne,"bindMatrix"),Rn.setOptional(k,ne,"bindMatrixInverse");let Vn=ne.skeleton;Vn&&(ge.floatVertexTextures?(Vn.boneTexture===null&&Vn.computeBoneTexture(),Rn.setValue(k,"boneTexture",Vn.boneTexture,He),Rn.setValue(k,"boneTextureSize",Vn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let sa=te.morphAttributes;if((sa.position!==void 0||sa.normal!==void 0||sa.color!==void 0&&ge.isWebGL2===!0)&&lt.update(ne,te,Ui),(ts||St.receiveShadow!==ne.receiveShadow)&&(St.receiveShadow=ne.receiveShadow,Rn.setValue(k,"receiveShadow",ne.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(_i.envMap.value=ot,_i.flipEnvMap.value=ot.isCubeTexture&&ot.isRenderTargetTexture===!1?-1:1),ts&&(Rn.setValue(k,"toneMappingExposure",M.toneMappingExposure),St.needsLights&&ta(_i,ks),Oe&&ee.fog===!0&&ve.refreshFogUniforms(_i,Oe),ve.refreshMaterialUniforms(_i,ee,j,G,We),Ar.upload(k,gt(St),_i,He)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ar.upload(k,gt(St),_i,He),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Rn.setValue(k,"center",ne.center),Rn.setValue(k,"modelViewMatrix",ne.modelViewMatrix),Rn.setValue(k,"normalMatrix",ne.normalMatrix),Rn.setValue(k,"modelMatrix",ne.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){let Vn=ee.uniformsGroups;for(let Ss=0,sc=Vn.length;Ss<sc;Ss++)if(ge.isWebGL2){let ra=Vn[Ss];rt.update(ra,Ui),rt.bind(ra,Ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ui}function ta(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function ic(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(C,q,te){Pe.get(C.texture).__webglTexture=q,Pe.get(C.depthTexture).__webglTexture=te;let ee=Pe.get(C);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=te===void 0,ee.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,q){let te=Pe.get(C);te.__webglFramebuffer=q,te.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,te=0){U=C,L=q,N=te;let ee=!0,ne=null,Oe=!1,Ze=!1;if(C){let ot=Pe.get(C);ot.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(k.FRAMEBUFFER,null),ee=!1):ot.__webglFramebuffer===void 0?He.setupRenderTarget(C):ot.__hasExternalTextures&&He.rebindTextures(C,Pe.get(C.texture).__webglTexture,Pe.get(C.depthTexture).__webglTexture);let vt=C.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(Ze=!0);let ut=Pe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ut[q])?ne=ut[q][te]:ne=ut[q],Oe=!0):ge.isWebGL2&&C.samples>0&&He.useMultisampledRTT(C)===!1?ne=Pe.get(C).__webglMultisampledFramebuffer:Array.isArray(ut)?ne=ut[te]:ne=ut,R.copy(C.viewport),Z.copy(C.scissor),K=C.scissorTest}else R.copy(he).multiplyScalar(j).floor(),Z.copy(W).multiplyScalar(j).floor(),K=ie;if(fe.bindFramebuffer(k.FRAMEBUFFER,ne)&&ge.drawBuffers&&ee&&fe.drawBuffers(C,ne),fe.viewport(R),fe.scissor(Z),fe.setScissorTest(K),Oe){let ot=Pe.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+q,ot.__webglTexture,te)}else if(Ze){let ot=Pe.get(C.texture),vt=q||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,ot.__webglTexture,te||0,vt)}z=-1},this.readRenderTargetPixels=function(C,q,te,ee,ne,Oe,Ze){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=Pe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ze!==void 0&&(it=it[Ze]),it){fe.bindFramebuffer(k.FRAMEBUFFER,it);try{let ot=C.texture,vt=ot.format,ut=ot.type;if(vt!==_n&&Ft.convert(vt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let mt=ut===nn&&(le.has("EXT_color_buffer_half_float")||ge.isWebGL2&&le.has("EXT_color_buffer_float"));if(ut!==fs&&Ft.convert(ut)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ut===Yn&&(ge.isWebGL2||le.has("OES_texture_float")||le.has("WEBGL_color_buffer_float")))&&!mt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-ee&&te>=0&&te<=C.height-ne&&k.readPixels(q,te,ee,ne,Ft.convert(vt),Ft.convert(ut),Oe)}finally{let ot=U!==null?Pe.get(U).__webglFramebuffer:null;fe.bindFramebuffer(k.FRAMEBUFFER,ot)}}},this.copyFramebufferToTexture=function(C,q,te=0){let ee=Math.pow(2,-te),ne=Math.floor(q.image.width*ee),Oe=Math.floor(q.image.height*ee);He.setTexture2D(q,0),k.copyTexSubImage2D(k.TEXTURE_2D,te,0,0,C.x,C.y,ne,Oe),fe.unbindTexture()},this.copyTextureToTexture=function(C,q,te,ee=0){let ne=q.image.width,Oe=q.image.height,Ze=Ft.convert(te.format),it=Ft.convert(te.type);He.setTexture2D(te,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,te.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,te.unpackAlignment),q.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ee,C.x,C.y,ne,Oe,Ze,it,q.image.data):q.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ee,C.x,C.y,q.mipmaps[0].width,q.mipmaps[0].height,Ze,q.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,ee,C.x,C.y,Ze,it,q.image),ee===0&&te.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(C,q,te,ee,ne=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Oe=C.max.x-C.min.x+1,Ze=C.max.y-C.min.y+1,it=C.max.z-C.min.z+1,ot=Ft.convert(ee.format),vt=Ft.convert(ee.type),ut;if(ee.isData3DTexture)He.setTexture3D(ee,0),ut=k.TEXTURE_3D;else if(ee.isDataArrayTexture)He.setTexture2DArray(ee,0),ut=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,ee.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,ee.unpackAlignment);let mt=k.getParameter(k.UNPACK_ROW_LENGTH),sn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),kn=k.getParameter(k.UNPACK_SKIP_PIXELS),pn=k.getParameter(k.UNPACK_SKIP_ROWS),An=k.getParameter(k.UNPACK_SKIP_IMAGES),rn=te.isCompressedTexture?te.mipmaps[0]:te.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,rn.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,rn.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,C.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,C.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,C.min.z),te.isDataTexture||te.isData3DTexture?k.texSubImage3D(ut,ne,q.x,q.y,q.z,Oe,Ze,it,ot,vt,rn.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(ut,ne,q.x,q.y,q.z,Oe,Ze,it,ot,rn.data)):k.texSubImage3D(ut,ne,q.x,q.y,q.z,Oe,Ze,it,ot,vt,rn),k.pixelStorei(k.UNPACK_ROW_LENGTH,mt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,sn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,kn),k.pixelStorei(k.UNPACK_SKIP_ROWS,pn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,An),ne===0&&ee.generateMipmaps&&k.generateMipmap(ut),fe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?He.setTextureCube(C,0):C.isData3DTexture?He.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?He.setTexture2DArray(C,0):He.setTexture2D(C,0),fe.unbindTexture()},this.resetState=function(){L=0,N=0,U=null,fe.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===lu?"display-p3":"srgb",t.unpackColorSpace=zt.workingColorSpace===ql?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Wt?Ds:Tp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ds?Wt:xn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ih=class extends Fa{};Ih.prototype.isWebGL1Renderer=!0;var bl=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ba=class extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Fr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mh,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Wn=new D,Ns=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix4(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyNormalMatrix(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.transformDirection(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),i=Gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Oa=class extends $n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vr,xa=new D,xr=new D,yr=new D,Mr=new ce,ya=new ce,Fp=new Ge,qo=new D,Ma=new D,Yo=new D,Gd=new ce,ih=new ce,Wd=new ce,_l=class extends ln{constructor(e=new Oa){if(super(),this.isSprite=!0,this.type="Sprite",vr===void 0){vr=new Qt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fr(t,5);vr.setIndex([0,1,2,0,2,3]),vr.setAttribute("position",new Ns(n,3,0,!1)),vr.setAttribute("uv",new Ns(n,2,3,!1))}this.geometry=vr,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xr.setFromMatrixScale(this.matrixWorld),Fp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xr.multiplyScalar(-yr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Zo(qo.set(-.5,-.5,0),yr,a,xr,i,r),Zo(Ma.set(.5,-.5,0),yr,a,xr,i,r),Zo(Yo.set(.5,.5,0),yr,a,xr,i,r),Gd.set(0,0),ih.set(1,0),Wd.set(1,1);let o=e.ray.intersectTriangle(qo,Ma,Yo,!1,xa);if(o===null&&(Zo(Ma.set(-.5,.5,0),yr,a,xr,i,r),ih.set(0,1),o=e.ray.intersectTriangle(qo,Yo,Ma,!1,xa),o===null))return;let l=e.ray.origin.distanceTo(xa);l<e.near||l>e.far||t.push({distance:l,point:xa.clone(),uv:Is.getInterpolation(xa,qo,Ma,Yo,Gd,ih,Wd,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Zo(s,e,t,n,i,r){Mr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ya.x=r*Mr.x-i*Mr.y,ya.y=i*Mr.x+r*Mr.y):ya.copy(Mr),s.copy(e),s.x+=ya.x,s.y+=ya.y,s.applyMatrix4(Fp)}var Xd=new D,qd=new Zt,Yd=new Zt,QM=new D,Zd=new Ge,Qo=new D,sh=new Zn,Qd=new Ge,rh=new Dr,Tl=class extends Le{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lf,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ui),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qo),this.boundingBox.expandByPoint(Qo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Zn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qo),this.boundingSphere.expandByPoint(Qo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sh.copy(this.boundingSphere),sh.applyMatrix4(i),e.ray.intersectsSphere(sh)!==!1&&(Qd.copy(i).invert(),rh.copy(e.ray).applyMatrix4(Qd),!(this.boundingBox!==null&&rh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,rh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Zt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;qd.fromBufferAttribute(i.attributes.skinIndex,e),Yd.fromBufferAttribute(i.attributes.skinWeight,e),Xd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Yd.getComponent(r);if(a!==0){let o=qd.getComponent(r);Zd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(QM.copy(Xd).applyMatrix4(Zd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},za=class extends ln{constructor(){super(),this.isBone=!0,this.type="Bone"}},Br=class extends Dn{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Ht,h=Ht,f,d){super(null,a,o,l,c,h,i,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kd=new Ge,KM=new Ge,wl=class s{constructor(e=[],t=[]){this.uuid=hi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:KM;Kd.multiplyMatrices(o,t[r]),Kd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Ep(e),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Br(t,e,e,_n,Yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new za),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Fs=class extends tn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Sr=new Ge,Jd=new Ge,Ko=[],jd=new ui,JM=new Ge,Sa=new Le,ba=new Zn,cn=class extends Le{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fs(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,JM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sr),jd.copy(e.boundingBox).applyMatrix4(Sr),this.boundingBox.union(jd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sr),ba.copy(e.boundingSphere).applyMatrix4(Sr),this.boundingSphere.union(ba)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Sa.geometry=this.geometry,Sa.material=this.material,Sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ba.copy(this.boundingSphere),ba.applyMatrix4(n),e.ray.intersectsSphere(ba)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Sr),Jd.multiplyMatrices(n,Sr),Sa.matrixWorld=Jd,Sa.raycast(e,Ko);for(let a=0,o=Ko.length;a<o;a++){let l=Ko[a];l.instanceId=r,l.object=this,t.push(l)}Ko.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Ha=class extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$d=new D,ep=new D,tp=new Ge,ah=new Dr,Jo=new Zn,Or=class extends ln{constructor(e=new Qt,t=new Ha){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)$d.fromBufferAttribute(t,i-1),ep.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=$d.distanceTo(ep);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(i),Jo.radius+=r,e.ray.intersectsSphere(Jo)===!1)return;tp.copy(i).invert(),ah.copy(e.ray).applyMatrix4(tp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new D,h=new D,f=new D,d=new D,p=this.isLineSegments?2:1,x=n.index,g=n.attributes.position;if(x!==null){let m=Math.max(0,a.start),T=Math.min(x.count,a.start+a.count);for(let M=m,w=T-1;M<w;M+=p){let L=x.getX(M),N=x.getX(M+1);if(c.fromBufferAttribute(g,L),h.fromBufferAttribute(g,N),ah.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);let z=e.ray.origin.distanceTo(d);z<e.near||z>e.far||t.push({distance:z,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,a.start),T=Math.min(g.count,a.start+a.count);for(let M=m,w=T-1;M<w;M+=p){if(c.fromBufferAttribute(g,M),h.fromBufferAttribute(g,M+1),ah.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);let N=e.ray.origin.distanceTo(d);N<e.near||N>e.far||t.push({distance:N,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},np=new D,ip=new D,zr=class extends Or{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)np.fromBufferAttribute(t,i),ip.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+np.distanceTo(ip);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},El=class extends Or{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ka=class extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sp=new Ge,Dh=new Dr,jo=new Zn,$o=new D,Al=class extends ln{constructor(e=new Qt,t=new ka){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(i),jo.radius+=r,e.ray.intersectsSphere(jo)===!1)return;sp.copy(i).invert(),Dh.copy(e.ray).applyMatrix4(sp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let x=d,S=p;x<S;x++){let g=c.getX(x);$o.fromBufferAttribute(f,g),rp($o,g,l,i,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let x=d,S=p;x<S;x++)$o.fromBufferAttribute(f,x),rp($o,x,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function rp(s,e,t,n,i,r,a){let o=Dh.distanceSqToPoint(s);if(o<t){let l=new D;Dh.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Hr=class extends Dn{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},fi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,p=(a-h)/d;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new ce:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new D,i=[],r=[],a=[],o=new D,l=new Ge;for(let p=0;p<=e;p++){let x=p/e;i[p]=this.getTangentAt(x,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(gn(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,x))}a[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(gn(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(i[x],p*x)),a[x].crossVectors(i[x],r[x])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Va=class extends fi{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new ce,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*f+this.aX,c=d*f+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Uh=class extends Va{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function uu(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+f)+(l-o)/f;d*=h,p*=h,i(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var el=new D,oh=new uu,lh=new uu,ch=new uu,Nh=class extends fi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(el.subVectors(i[0],i[1]).add(i[0]),c=el);let f=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(el.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=el),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(f),p),S=Math.pow(f.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);S<1e-4&&(S=1),x<1e-4&&(x=S),g<1e-4&&(g=S),oh.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,x,S,g),lh.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,x,S,g),ch.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,x,S,g)}else this.curveType==="catmullrom"&&(oh.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),lh.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),ch.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(oh.calc(l),lh.calc(l),ch.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ap(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function jM(s,e){let t=1-s;return t*t*e}function $M(s,e){return 2*(1-s)*s*e}function eS(s,e){return s*s*e}function Pa(s,e,t,n){return jM(s,e)+$M(s,t)+eS(s,n)}function tS(s,e){let t=1-s;return t*t*t*e}function nS(s,e){let t=1-s;return 3*t*t*s*e}function iS(s,e){return 3*(1-s)*s*s*e}function sS(s,e){return s*s*s*e}function La(s,e,t,n,i){return tS(s,e)+nS(s,t)+iS(s,n)+sS(s,i)}var Rl=class extends fi{constructor(e=new ce,t=new ce,n=new ce,i=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ce){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(La(e,i.x,r.x,a.x,o.x),La(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fh=class extends fi{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(La(e,i.x,r.x,a.x,o.x),La(e,i.y,r.y,a.y,o.y),La(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Cl=class extends fi{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bh=class extends fi{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pl=class extends fi{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Pa(e,i.x,r.x,a.x),Pa(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oh=class extends fi{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Pa(e,i.x,r.x,a.x),Pa(e,i.y,r.y,a.y),Pa(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ll=class extends fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(ap(o,l.x,c.x,h.x,f.x),ap(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ce().fromArray(i))}return this}},zh=Object.freeze({__proto__:null,ArcCurve:Uh,CatmullRomCurve3:Nh,CubicBezierCurve:Rl,CubicBezierCurve3:Fh,EllipseCurve:Va,LineCurve:Cl,LineCurve3:Bh,QuadraticBezierCurve:Pl,QuadraticBezierCurve3:Oh,SplineCurve:Ll}),Hh=class extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new zh[i.type]().fromJSON(i))}return this}},Ga=class extends Hh{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Cl(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Pl(this.currentPoint.clone(),new ce(e,t),new ce(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new Rl(this.currentPoint.clone(),new ce(e,t),new ce(n,i),new ce(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ll(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){let c=new Va(e,t,n,i,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Wa=class s extends Qt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=gn(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,f=new D,d=new ce,p=new D,x=new D,S=new D,g=0,m=0;for(let T=0;T<=e.length-1;T++)switch(T){case 0:g=e[T+1].x-e[T].x,m=e[T+1].y-e[T].y,p.x=m*1,p.y=-g,p.z=m*0,S.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(S.x,S.y,S.z);break;default:g=e[T+1].x-e[T].x,m=e[T+1].y-e[T].y,p.x=m*1,p.y=-g,p.z=m*0,x.copy(p),p.x+=S.x,p.y+=S.y,p.z+=S.z,p.normalize(),l.push(p.x,p.y,p.z),S.copy(x)}for(let T=0;T<=t;T++){let M=n+T*h*i,w=Math.sin(M),L=Math.cos(M);for(let N=0;N<=e.length-1;N++){f.x=e[N].x*w,f.y=e[N].y,f.z=e[N].x*L,a.push(f.x,f.y,f.z),d.x=T/t,d.y=N/(e.length-1),o.push(d.x,d.y);let U=l[3*N+0]*w,z=l[3*N+1],_=l[3*N+0]*L;c.push(U,z,_)}}for(let T=0;T<t;T++)for(let M=0;M<e.length-1;M++){let w=M+T*e.length,L=w,N=w+e.length,U=w+e.length+1,z=w+1;r.push(L,N,z),r.push(U,z,N)}this.setIndex(r),this.setAttribute("position",new Et(a,3)),this.setAttribute("uv",new Et(o,2)),this.setAttribute("normal",new Et(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},Bs=class s extends Wa{constructor(e=1,t=1,n=4,i=8){let r=new Ga;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}},Il=class s extends Qt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new D,h=new ce;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){let p=n+f/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Et(a,3)),this.setAttribute("normal",new Et(o,3)),this.setAttribute("uv",new Et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},En=class s extends Qt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],f=[],d=[],p=[],x=0,S=[],g=n/2,m=0;T(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Et(f,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(p,2));function T(){let w=new D,L=new D,N=0,U=(t-e)/n;for(let z=0;z<=r;z++){let _=[],R=z/r,Z=R*(t-e)+e;for(let K=0;K<=i;K++){let ae=K/i,B=ae*l+o,Q=Math.sin(B),G=Math.cos(B);L.x=Z*Q,L.y=-R*n+g,L.z=Z*G,f.push(L.x,L.y,L.z),w.set(Q,U,G).normalize(),d.push(w.x,w.y,w.z),p.push(ae,1-R),_.push(x++)}S.push(_)}for(let z=0;z<i;z++)for(let _=0;_<r;_++){let R=S[_][z],Z=S[_+1][z],K=S[_+1][z+1],ae=S[_][z+1];h.push(R,Z,ae),h.push(Z,K,ae),N+=6}c.addGroup(m,N,0),m+=N}function M(w){let L=x,N=new ce,U=new D,z=0,_=w===!0?e:t,R=w===!0?1:-1;for(let K=1;K<=i;K++)f.push(0,g*R,0),d.push(0,R,0),p.push(.5,.5),x++;let Z=x;for(let K=0;K<=i;K++){let B=K/i*l+o,Q=Math.cos(B),G=Math.sin(B);U.x=_*G,U.y=g*R,U.z=_*Q,f.push(U.x,U.y,U.z),d.push(0,R,0),N.x=Q*.5+.5,N.y=G*.5*R+.5,p.push(N.x,N.y),x++}for(let K=0;K<i;K++){let ae=L+K,B=Z+K;w===!0?h.push(B,B+1,ae):h.push(B+1,B,ae),z+=3}c.addGroup(m,z,w===!0?1:2),m+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xa=class s extends En{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},kh=class s extends Qt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Et(r,3)),this.setAttribute("normal",new Et(r.slice(),3)),this.setAttribute("uv",new Et(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(T){let M=new D,w=new D,L=new D;for(let N=0;N<t.length;N+=3)p(t[N+0],M),p(t[N+1],w),p(t[N+2],L),l(M,w,L,T)}function l(T,M,w,L){let N=L+1,U=[];for(let z=0;z<=N;z++){U[z]=[];let _=T.clone().lerp(w,z/N),R=M.clone().lerp(w,z/N),Z=N-z;for(let K=0;K<=Z;K++)K===0&&z===N?U[z][K]=_:U[z][K]=_.clone().lerp(R,K/Z)}for(let z=0;z<N;z++)for(let _=0;_<2*(N-z)-1;_++){let R=Math.floor(_/2);_%2===0?(d(U[z][R+1]),d(U[z+1][R]),d(U[z][R])):(d(U[z][R+1]),d(U[z+1][R+1]),d(U[z+1][R]))}}function c(T){let M=new D;for(let w=0;w<r.length;w+=3)M.x=r[w+0],M.y=r[w+1],M.z=r[w+2],M.normalize().multiplyScalar(T),r[w+0]=M.x,r[w+1]=M.y,r[w+2]=M.z}function h(){let T=new D;for(let M=0;M<r.length;M+=3){T.x=r[M+0],T.y=r[M+1],T.z=r[M+2];let w=g(T)/2/Math.PI+.5,L=m(T)/Math.PI+.5;a.push(w,1-L)}x(),f()}function f(){for(let T=0;T<a.length;T+=6){let M=a[T+0],w=a[T+2],L=a[T+4],N=Math.max(M,w,L),U=Math.min(M,w,L);N>.9&&U<.1&&(M<.2&&(a[T+0]+=1),w<.2&&(a[T+2]+=1),L<.2&&(a[T+4]+=1))}}function d(T){r.push(T.x,T.y,T.z)}function p(T,M){let w=T*3;M.x=e[w+0],M.y=e[w+1],M.z=e[w+2]}function x(){let T=new D,M=new D,w=new D,L=new D,N=new ce,U=new ce,z=new ce;for(let _=0,R=0;_<r.length;_+=9,R+=6){T.set(r[_+0],r[_+1],r[_+2]),M.set(r[_+3],r[_+4],r[_+5]),w.set(r[_+6],r[_+7],r[_+8]),N.set(a[R+0],a[R+1]),U.set(a[R+2],a[R+3]),z.set(a[R+4],a[R+5]),L.copy(T).add(M).add(w).divideScalar(3);let Z=g(L);S(N,R+0,T,Z),S(U,R+2,M,Z),S(z,R+4,w,Z)}}function S(T,M,w,L){L<0&&T.x===1&&(a[M]=T.x-1),w.x===0&&w.z===0&&(a[M]=L/2/Math.PI+.5)}function g(T){return Math.atan2(T.z,-T.x)}function m(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var qa=class extends Ga{constructor(e){super(e),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Ga().fromJSON(i))}return this}},rS={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Bp(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,f,d,p;if(n&&(r=hS(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let x=t;x<i;x+=t)f=s[x],d=s[x+1],f<o&&(o=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Ya(r,a,t,o,l,p,0),a}};function Bp(s,e,t,n,i){let r,a;if(i===SS(s,e,t,n)>0)for(r=e;r<t;r+=n)a=op(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=op(r,s[r],s[r+1],a);return a&&Zl(a,a.next)&&(Qa(a),a=a.next),a}function Os(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Zl(t,t.next)||hn(t.prev,t,t.next)===0)){if(Qa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ya(s,e,t,n,i,r,a){if(!s)return;!a&&r&&mS(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?oS(s,n,i,r):aS(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Qa(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=lS(Os(s),e,t),Ya(s,e,t,n,i,r,2)):a===2&&cS(s,e,t,n,i,r):Ya(Os(s),e,t,n,i,r,1);break}}}function aS(s){let e=s.prev,t=s,n=s.next;if(hn(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=d&&x.y>=f&&x.y<=p&&wr(i,o,r,l,a,c,x.x,x.y)&&hn(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function oS(s,e,t,n){let i=s.prev,r=s,a=s.next;if(hn(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,f=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,x=h<f?h<d?h:d:f<d?f:d,S=o>l?o>c?o:c:l>c?l:c,g=h>f?h>d?h:d:f>d?f:d,m=Vh(p,x,e,t,n),T=Vh(S,g,e,t,n),M=s.prevZ,w=s.nextZ;for(;M&&M.z>=m&&w&&w.z<=T;){if(M.x>=p&&M.x<=S&&M.y>=x&&M.y<=g&&M!==i&&M!==a&&wr(o,h,l,f,c,d,M.x,M.y)&&hn(M.prev,M,M.next)>=0||(M=M.prevZ,w.x>=p&&w.x<=S&&w.y>=x&&w.y<=g&&w!==i&&w!==a&&wr(o,h,l,f,c,d,w.x,w.y)&&hn(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;M&&M.z>=m;){if(M.x>=p&&M.x<=S&&M.y>=x&&M.y<=g&&M!==i&&M!==a&&wr(o,h,l,f,c,d,M.x,M.y)&&hn(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;w&&w.z<=T;){if(w.x>=p&&w.x<=S&&w.y>=x&&w.y<=g&&w!==i&&w!==a&&wr(o,h,l,f,c,d,w.x,w.y)&&hn(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function lS(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Zl(i,r)&&Op(i,n,n.next,r)&&Za(i,r)&&Za(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Qa(n),Qa(n.next),n=s=r),n=n.next}while(n!==s);return Os(n)}function cS(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xS(a,o)){let l=zp(a,o);a=Os(a,a.next),l=Os(l,l.next),Ya(a,e,t,n,i,r,0),Ya(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function hS(s,e,t,n){let i=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Bp(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(vS(c));for(i.sort(uS),r=0;r<i.length;r++)t=fS(i[r],t);return t}function uS(s,e){return s.x-e.x}function fS(s,e){let t=dS(s,e);if(!t)return e;let n=zp(t,s);return Os(n,n.next),Os(t,t.next)}function dS(s,e){let t=e,n=-1/0,i,r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;let o=i,l=i.x,c=i.y,h=1/0,f;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&wr(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(r-t.x),Za(t,s)&&(f<h||f===h&&(t.x>i.x||t.x===i.x&&pS(i,t)))&&(i=t,h=f)),t=t.next;while(t!==o);return i}function pS(s,e){return hn(s.prev,s,e.prev)<0&&hn(e.next,s,s.next)<0}function mS(s,e,t,n){let i=s;do i.z===0&&(i.z=Vh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,gS(i)}function gS(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function Vh(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function vS(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function wr(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function xS(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!yS(s,e)&&(Za(s,e)&&Za(e,s)&&MS(s,e)&&(hn(s.prev,s,e.prev)||hn(s,e.prev,e))||Zl(s,e)&&hn(s.prev,s,s.next)>0&&hn(e.prev,e,e.next)>0)}function hn(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Zl(s,e){return s.x===e.x&&s.y===e.y}function Op(s,e,t,n){let i=nl(hn(s,e,t)),r=nl(hn(s,e,n)),a=nl(hn(t,n,s)),o=nl(hn(t,n,e));return!!(i!==r&&a!==o||i===0&&tl(s,t,e)||r===0&&tl(s,n,e)||a===0&&tl(t,s,n)||o===0&&tl(t,e,n))}function tl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function nl(s){return s>0?1:s<0?-1:0}function yS(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Op(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Za(s,e){return hn(s.prev,s,s.next)<0?hn(s,e,s.next)>=0&&hn(s,s.prev,e)>=0:hn(s,e,s.prev)<0||hn(s,s.next,e)<0}function MS(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function zp(s,e){let t=new Gh(s.i,s.x,s.y),n=new Gh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function op(s,e,t,n){let i=new Gh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Gh(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function SS(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Ia=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];lp(e),cp(n,e);let a=e.length;t.forEach(lp);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,cp(n,t[l]);let o=rS.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function lp(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function cp(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Dl=class s extends Qt{constructor(e=new qa([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Et(i,3)),this.setAttribute("uv",new Et(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:p-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:bS,M,w=!1,L,N,U,z;m&&(M=m.getSpacedPoints(h),w=!0,d=!1,L=m.computeFrenetFrames(h,!1),N=new D,U=new D,z=new D),d||(g=0,p=0,x=0,S=0);let _=o.extractPoints(c),R=_.shape,Z=_.holes;if(!Ia.isClockWise(R)){R=R.reverse();for(let k=0,Ae=Z.length;k<Ae;k++){let le=Z[k];Ia.isClockWise(le)&&(Z[k]=le.reverse())}}let ae=Ia.triangulateShape(R,Z),B=R;for(let k=0,Ae=Z.length;k<Ae;k++){let le=Z[k];R=R.concat(le)}function Q(k,Ae,le){return Ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(Ae,le)}let G=R.length,j=ae.length;function me(k,Ae,le){let ge,fe,Je,Pe=k.x-Ae.x,He=k.y-Ae.y,je=le.x-k.x,Ye=le.y-k.y,Nt=Pe*Pe+He*He,I=Pe*Ye-He*je;if(Math.abs(I)>Number.EPSILON){let E=Math.sqrt(Nt),$=Math.sqrt(je*je+Ye*Ye),ve=Ae.x-He/E,pe=Ae.y+Pe/E,xe=le.x-Ye/$,Xe=le.y+je/$,Te=((xe-ve)*Ye-(Xe-pe)*je)/(Pe*Ye-He*je);ge=ve+Pe*Te-k.x,fe=pe+He*Te-k.y;let De=ge*ge+fe*fe;if(De<=2)return new ce(ge,fe);Je=Math.sqrt(De/2)}else{let E=!1;Pe>Number.EPSILON?je>Number.EPSILON&&(E=!0):Pe<-Number.EPSILON?je<-Number.EPSILON&&(E=!0):Math.sign(He)===Math.sign(Ye)&&(E=!0),E?(ge=-He,fe=Pe,Je=Math.sqrt(Nt)):(ge=Pe,fe=He,Je=Math.sqrt(Nt/2))}return new ce(ge/Je,fe/Je)}let re=[];for(let k=0,Ae=B.length,le=Ae-1,ge=k+1;k<Ae;k++,le++,ge++)le===Ae&&(le=0),ge===Ae&&(ge=0),re[k]=me(B[k],B[le],B[ge]);let he=[],W,ie=re.concat();for(let k=0,Ae=Z.length;k<Ae;k++){let le=Z[k];W=[];for(let ge=0,fe=le.length,Je=fe-1,Pe=ge+1;ge<fe;ge++,Je++,Pe++)Je===fe&&(Je=0),Pe===fe&&(Pe=0),W[ge]=me(le[ge],le[Je],le[Pe]);he.push(W),ie=ie.concat(W)}for(let k=0;k<g;k++){let Ae=k/g,le=p*Math.cos(Ae*Math.PI/2),ge=x*Math.sin(Ae*Math.PI/2)+S;for(let fe=0,Je=B.length;fe<Je;fe++){let Pe=Q(B[fe],re[fe],ge);st(Pe.x,Pe.y,-le)}for(let fe=0,Je=Z.length;fe<Je;fe++){let Pe=Z[fe];W=he[fe];for(let He=0,je=Pe.length;He<je;He++){let Ye=Q(Pe[He],W[He],ge);st(Ye.x,Ye.y,-le)}}}let be=x+S;for(let k=0;k<G;k++){let Ae=d?Q(R[k],ie[k],be):R[k];w?(U.copy(L.normals[0]).multiplyScalar(Ae.x),N.copy(L.binormals[0]).multiplyScalar(Ae.y),z.copy(M[0]).add(U).add(N),st(z.x,z.y,z.z)):st(Ae.x,Ae.y,0)}for(let k=1;k<=h;k++)for(let Ae=0;Ae<G;Ae++){let le=d?Q(R[Ae],ie[Ae],be):R[Ae];w?(U.copy(L.normals[k]).multiplyScalar(le.x),N.copy(L.binormals[k]).multiplyScalar(le.y),z.copy(M[k]).add(U).add(N),st(z.x,z.y,z.z)):st(le.x,le.y,f/h*k)}for(let k=g-1;k>=0;k--){let Ae=k/g,le=p*Math.cos(Ae*Math.PI/2),ge=x*Math.sin(Ae*Math.PI/2)+S;for(let fe=0,Je=B.length;fe<Je;fe++){let Pe=Q(B[fe],re[fe],ge);st(Pe.x,Pe.y,f+le)}for(let fe=0,Je=Z.length;fe<Je;fe++){let Pe=Z[fe];W=he[fe];for(let He=0,je=Pe.length;He<je;He++){let Ye=Q(Pe[He],W[He],ge);w?st(Ye.x,Ye.y+M[h-1].y,M[h-1].x+le):st(Ye.x,Ye.y,f+le)}}}Ie(),ke();function Ie(){let k=i.length/3;if(d){let Ae=0,le=G*Ae;for(let ge=0;ge<j;ge++){let fe=ae[ge];et(fe[2]+le,fe[1]+le,fe[0]+le)}Ae=h+g*2,le=G*Ae;for(let ge=0;ge<j;ge++){let fe=ae[ge];et(fe[0]+le,fe[1]+le,fe[2]+le)}}else{for(let Ae=0;Ae<j;Ae++){let le=ae[Ae];et(le[2],le[1],le[0])}for(let Ae=0;Ae<j;Ae++){let le=ae[Ae];et(le[0]+G*h,le[1]+G*h,le[2]+G*h)}}n.addGroup(k,i.length/3-k,0)}function ke(){let k=i.length/3,Ae=0;We(B,Ae),Ae+=B.length;for(let le=0,ge=Z.length;le<ge;le++){let fe=Z[le];We(fe,Ae),Ae+=fe.length}n.addGroup(k,i.length/3-k,1)}function We(k,Ae){let le=k.length;for(;--le>=0;){let ge=le,fe=le-1;fe<0&&(fe=k.length-1);for(let Je=0,Pe=h+g*2;Je<Pe;Je++){let He=G*Je,je=G*(Je+1),Ye=Ae+ge+He,Nt=Ae+fe+He,I=Ae+fe+je,E=Ae+ge+je;ft(Ye,Nt,I,E)}}}function st(k,Ae,le){l.push(k),l.push(Ae),l.push(le)}function et(k,Ae,le){At(k),At(Ae),At(le);let ge=i.length/3,fe=T.generateTopUV(n,i,ge-3,ge-2,ge-1);nt(fe[0]),nt(fe[1]),nt(fe[2])}function ft(k,Ae,le,ge){At(k),At(Ae),At(ge),At(Ae),At(le),At(ge);let fe=i.length/3,Je=T.generateSideWallUV(n,i,fe-6,fe-3,fe-2,fe-1);nt(Je[0]),nt(Je[1]),nt(Je[3]),nt(Je[1]),nt(Je[2]),nt(Je[3])}function At(k){i.push(l[k*3+0]),i.push(l[k*3+1]),i.push(l[k*3+2])}function nt(k){r.push(k.x),r.push(k.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return _S(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new zh[i.type]().fromJSON(i)),new s(n,e.options)}},bS={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new ce(r,a),new ce(o,l),new ce(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],d=e[i*3],p=e[i*3+1],x=e[i*3+2],S=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ce(a,1-l),new ce(c,1-f),new ce(d,1-x),new ce(S,1-m)]:[new ce(o,1-l),new ce(h,1-f),new ce(p,1-x),new ce(g,1-m)]}};function _S(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ul=class s extends kh{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Qn=class s extends Qt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new D,d=new D,p=[],x=[],S=[],g=[];for(let m=0;m<=n;m++){let T=[],M=m/n,w=0;m===0&&a===0?w=.5/t:m===n&&l===Math.PI&&(w=-.5/t);for(let L=0;L<=t;L++){let N=L/t;f.x=-e*Math.cos(i+N*r)*Math.sin(a+M*o),f.y=e*Math.cos(a+M*o),f.z=e*Math.sin(i+N*r)*Math.sin(a+M*o),x.push(f.x,f.y,f.z),d.copy(f).normalize(),S.push(d.x,d.y,d.z),g.push(N+w,1-M),T.push(c++)}h.push(T)}for(let m=0;m<n;m++)for(let T=0;T<t;T++){let M=h[m][T+1],w=h[m][T],L=h[m+1][T],N=h[m+1][T+1];(m!==0||a>0)&&p.push(M,w,N),(m!==n-1||l<Math.PI)&&p.push(w,L,N)}this.setIndex(p),this.setAttribute("position",new Et(x,3)),this.setAttribute("normal",new Et(S,3)),this.setAttribute("uv",new Et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Mt=class extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wp,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ri=class extends Mt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function il(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function TS(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function wS(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function hp(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Hp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var ps=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wh=class extends ps{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:br,endingEnd:br}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case _r:r=e,o=2*t-n;break;case al:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _r:a=e,l=2*n-t;break;case al:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,x=(n-t)/(i-t),S=x*x,g=S*x,m=-d*g+2*d*S-d*x,T=(1+d)*g+(-1.5-2*d)*S+(-.5+d)*x+1,M=(-1-p)*g+(1.5+p)*S+.5*x,w=p*g-p*S;for(let L=0;L!==o;++L)r[L]=m*a[h+L]+T*a[c+L]+M*a[l+L]+w*a[f+L];return r}},Nl=class extends ps{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*h;return r}},Xh=class extends ps{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},di=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=il(t,this.TimeBufferType),this.values=il(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:il(e.times,Array),values:il(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Lr:t=this.InterpolantFactoryMethodDiscrete;break;case Us:t=this.InterpolantFactoryMethodLinear;break;case Uc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return Us;case this.InterpolantFactoryMethodSmooth:return Uc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&TS(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Uc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let f=o*n,d=f-n,p=f+n;for(let x=0;x!==n;++x){let S=t[f+x];if(S!==t[d+x]||S!==t[p+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=Us;var ms=class extends di{};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Lr;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Fl=class extends di{};Fl.prototype.ValueTypeName="color";var $i=class extends di{};$i.prototype.ValueTypeName="number";var qh=class extends ps{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)vn.slerpFlat(r,0,a,c-o,a,c,l);return r}},pi=class extends di{InterpolantFactoryMethodLinear(e){return new qh(this.times,this.values,this.getValueSize(),e)}};pi.prototype.ValueTypeName="quaternion";pi.prototype.DefaultInterpolation=Us;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends di{};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Lr;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends di{};es.prototype.ValueTypeName="vector";var vs=class{constructor(e,t=-1,n,i=ou){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=hi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(AS(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(di.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=wS(l);l=hp(l,1,h),c=hp(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new $i(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let f=h[1],d=i[f];d||(i[f]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(f,d,p,x,S){if(p.length!==0){let g=[],m=[];Hp(p,g,m,x),g.length!==0&&S.push(new f(d,g,m))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let f=0;f<c.length;f++){let d=c[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},x;for(x=0;x<d.length;x++)if(d[x].morphTargets)for(let S=0;S<d[x].morphTargets.length;S++)p[d[x].morphTargets[S]]=-1;for(let S in p){let g=[],m=[];for(let T=0;T!==d[x].morphTargets.length;++T){let M=d[x];g.push(M.time),m.push(M.morphTarget===S?1:0)}i.push(new $i(".morphTargetInfluence["+S+"]",g,m))}l=p.length*a}else{let p=".bones["+t[f].name+"]";n(es,p+".position",d,"pos",i),n(pi,p+".quaternion",d,"rot",i),n(es,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function ES(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $i;case"vector":case"vector2":case"vector3":case"vector4":return es;case"color":return Fl;case"quaternion":return pi;case"bool":case"boolean":return ms;case"string":return gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function AS(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ES(s.type);if(s.times===void 0){let t=[],n=[];Hp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var kr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Yh=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let p=c[f],x=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null}}},RS=new Yh,Di=class{constructor(e){this.manager=e!==void 0?e:RS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Di.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wi={},Zh=class extends Error{constructor(e,t){super(e),this.response=t}},Vr=class extends Di{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=kr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Wi[e]!==void 0){Wi[e].push({onLoad:t,onProgress:n,onError:i});return}Wi[e]=[],Wi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Wi[e],f=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,x=p!==0,S=0,g=new ReadableStream({start(m){T();function T(){f.read().then(({done:M,value:w})=>{if(M)m.close();else{S+=w.byteLength;let L=new ProgressEvent("progress",{lengthComputable:x,loaded:S,total:p});for(let N=0,U=h.length;N<U;N++){let z=h[N];z.onProgress&&z.onProgress(L)}m.enqueue(w),T()}})}}});return new Response(g)}else throw new Zh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(x=>p.decode(x))}}}).then(c=>{kr.add(e,c);let h=Wi[e];delete Wi[e];for(let f=0,d=h.length;f<d;f++){let p=h[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=Wi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Wi[e];for(let f=0,d=h.length;f<d;f++){let p=h[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Qh=class extends Di{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=kr.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Ua("img");function l(){h(),kr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){h(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Bl=class extends Di{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new Br,o=new Vr(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:qn,a.wrapT=c.wrapT!==void 0?c.wrapT:qn,a.magFilter=c.magFilter!==void 0?c.magFilter:Rt,a.minFilter=c.minFilter!==void 0?c.minFilter:Rt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Ki),c.mipmapCount===1&&(a.minFilter=Rt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}},Gr=class extends Di{constructor(e){super(e)}load(e,t,n,i){let r=new Dn,a=new Qh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Wr=class extends ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ol=class extends Wr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},hh=new Ge,up=new D,fp=new D,Ka=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Na,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;up.setFromMatrixPosition(e.matrixWorld),t.position.copy(up),fp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fp),t.updateMatrixWorld(),hh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Kh=class extends Ka{constructor(){super(new bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Ir*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},zl=class extends Wr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Kh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},dp=new Ge,_a=new D,uh=new D,Jh=class extends Ka{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new Zt(2,1,1,1),new Zt(0,1,1,1),new Zt(3,1,1,1),new Zt(1,1,1,1),new Zt(3,0,1,1),new Zt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_a.setFromMatrixPosition(e.matrixWorld),n.position.copy(_a),uh.copy(n.position),uh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(uh),n.updateMatrixWorld(),i.makeTranslation(-_a.x,-_a.y,-_a.z),dp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dp)}},zs=class extends Wr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Jh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},jh=class extends Ka{constructor(){super(new Ii(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xr=class extends Wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new jh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var qr=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Hl=class extends Di{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=kr.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){kr.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}};var kl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=pp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function pp(){return(typeof performance>"u"?Date:performance).now()}var $h=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){vn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;vn.multiplyQuaternionsFlat(e,a,e,t,e,n),vn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},fu="\\[\\]\\.:\\/",CS=new RegExp("["+fu+"]","g"),du="[^"+fu+"]",PS="[^"+fu.replace("\\.","")+"]",LS=/((?:WC+[\/:])*)/.source.replace("WC",du),IS=/(WCOD+)?/.source.replace("WCOD",PS),DS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",du),US=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",du),NS=new RegExp("^"+LS+IS+DS+US+"$"),FS=["material","materials","bones","map"],eu=class{constructor(e,t,n){let i=n||Yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Yt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(CS,"")}static parseTrackName(e){let t=NS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);FS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yt.Composite=eu;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tu=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:br,endingEnd:br};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Lg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Dg:for(let h=0,f=l.length;h!==f;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case ou:default:for(let h=0,f=l.length;h!==f;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===Ig;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Pg){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=_r,i.endingEnd=_r):(e?i.endingStart=this.zeroSlopeAtStart?_r:br:i.endingStart=al,t?i.endingEnd=this.zeroSlopeAtEnd?_r:br:i.endingEnd=al)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},BS=new Float32Array(1),Vl=class extends Ji{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let f=0;f!==r;++f){let d=i[f],p=d.name,x=h[p];if(x!==void 0)++x.referenceCount,a[f]=x;else{if(x=a[f],x!==void 0){x._cacheIndex===null&&(++x.referenceCount,this._addInactiveBinding(x,l,p));continue}let S=t&&t._propertyBindings[f].binding.parsedPath;x=new $h(Yt.create(n,p,S),d.ValueTypeName,d.getValueSize()),++x.referenceCount,this._addInactiveBinding(x,l,p),a[f]=x}o[f].resultBuffer=x.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let f=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete f[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Nl(new Float32Array(2),new Float32Array(2),1,BS),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?vs.findByName(i,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ou),l!==void 0){let f=l.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new tu(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?vs.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=h,t[h]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nu);function pu(s,e){if(e===_p)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ja||e===Xl){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Ja)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Ql=class extends Di{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Su(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Du(t)})}load(e,t,n,i){let r=this,a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=qr.extractUrlBase(e),this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Vr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Xp){try{a[Ct.KHR_BINARY_GLTF]=new Uu(e)}catch(f){i&&i(f);return}r=JSON.parse(a[Ct.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new ku(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let f=this.pluginCallbacks[h](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let f=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(f){case Ct.KHR_MATERIALS_UNLIT:a[f]=new yu;break;case Ct.KHR_DRACO_MESH_COMPRESSION:a[f]=new Nu(r,this.dracoLoader);break;case Ct.KHR_TEXTURE_TRANSFORM:a[f]=new Fu;break;case Ct.KHR_MESH_QUANTIZATION:a[f]=new Bu;break;default:d.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function zS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},xu=class{constructor(e){this.parser=e,this.name=Ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ue(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],xn);let f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Xr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zs(h),c.distance=f;break;case"spot":c=new zl(h),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ys(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},yu=class{constructor(){this.name=Ct.KHR_MATERIALS_UNLIT}getMaterialType(){return un}extendParams(e,t,n){let i=[];e.color=new Ue(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],xn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Wt))}return Promise.all(i)}},Mu=class{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Su=class{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(o,o)}return Promise.all(r)}},bu=class{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},_u=class{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],xn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Wt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Tu=class{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},wu=class{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(o[0],o[1],o[2],xn),Promise.all(r)}},Eu=class{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Au=class{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(o[0],o[1],o[2],xn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Wt)),Promise.all(r)}},Ru=class{constructor(e){this.parser=e,this.name=Ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Cu=class{constructor(e){this.parser=e,this.name=Ct.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Pu=class{constructor(e){this.parser=e,this.name=Ct.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Lu=class{constructor(e){this.parser=e,this.name=Ct.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Iu=class{constructor(e){this.name=Ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,f=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,f,d,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*f);return a.decodeGltfBuffer(new Uint8Array(p),h,f,d,i.mode,i.filter),p})})}else return null}},Du=class{constructor(e){this.name=Ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==mi.TRIANGLES&&c.mode!==mi.TRIANGLE_STRIP&&c.mode!==mi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),f=h.isGroup?h.children:[h],d=c[0].count,p=[];for(let x of f){let S=new Ge,g=new D,m=new vn,T=new D(1,1,1),M=new cn(x.geometry,x.material,d);for(let w=0;w<d;w++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,w),l.SCALE&&T.fromBufferAttribute(l.SCALE,w),M.setMatrixAt(w,S.compose(g,m,T));for(let w in l)if(w==="_COLOR_0"){let L=l[w];M.instanceColor=new Fs(L.array,L.itemSize,L.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&x.geometry.setAttribute(w,l[w]);ln.prototype.copy.call(M,x),this.parser.assignFinalMaterial(M),p.push(M)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Xp="glTF",$a=12,kp={JSON:1313821514,BIN:5130562},Uu=class{constructor(e){this.name=Ct.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,$a),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Xp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-$a,r=new DataView(e,$a),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===kp.JSON){let c=new Uint8Array(e,$a+a,o);this.content=n.decode(c)}else if(l===kp.BIN){let c=$a+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Nu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let f=zu[h]||h.toLowerCase();o[f]=a[h]}for(let h in e.attributes){let f=zu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],p=Qr[d.componentType];c[f]=p.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(f){i.decodeDracoFile(h,function(d){for(let p in d.attributes){let x=d.attributes[p],S=l[p];S!==void 0&&(x.normalized=S)}f(d)},o,c)})})}},Fu=class{constructor(){this.name=Ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Bu=class{constructor(){this.name=Ct.KHR_MESH_QUANTIZATION}},Kl=class extends ps{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,f=(n-t)/h,d=f*f,p=d*f,x=e*c,S=x-c,g=-2*p+3*d,m=p-d,T=1-g,M=m-d+f;for(let w=0;w!==o;w++){let L=a[S+w+o],N=a[S+w+l]*h,U=a[x+w+o],z=a[x+w]*h;r[w]=T*L+M*N+g*U+m*z}return r}},HS=new vn,Ou=class extends Kl{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return HS.fromArray(r).normalize().toArray(r),r}},mi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Qr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vp={9728:Ht,9729:Rt,9984:rl,9985:su,9986:wa,9987:Ki},Gp={33071:qn,33648:Da,10497:Hn},mu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kS={CUBICSPLINE:void 0,LINEAR:Us,STEP:Lr},gu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function VS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Mt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Li})),s.DefaultMaterial}function Hs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ys(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function GS(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let f=e[c];if(n){let d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):s.attributes.position;a.push(d)}if(i){let d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],f=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=f),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function WS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function XS(s){let e,t=s.extensions&&s.extensions[Ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+vu(t.attributes):e=s.indices+":"+vu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+vu(s.targets[n]);return e}function vu(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Hu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function qS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var YS=new Ge,ku=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new zS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Gr(this.options.manager):this.textureLoader=new Hl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Hs(r,o,i),ys(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ct.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(qr.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=mu[i.type],o=Qr[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new tn(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=mu[i.type],c=Qr[i.componentType],h=c.BYTES_PER_ELEMENT,f=h*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,x=i.normalized===!0,S,g;if(p&&p!==f){let m=Math.floor(d/p),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,M=t.cache.get(T);M||(S=new c(o,m*p,i.count*p/h),M=new Fr(S,p/h),t.cache.add(T,M)),g=new Ns(M,l,d%p/h,x)}else o===null?S=new c(i.count*l):S=new c(o,d,i.count*l),g=new tn(S,l,x);if(i.sparse!==void 0){let m=mu.SCALAR,T=Qr[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,w=i.sparse.values.byteOffset||0,L=new T(a[1],M,i.sparse.count*m),N=new c(a[2],w,i.sparse.count*l);o!==null&&(g=new tn(g.array.slice(),g.itemSize,g.normalized));for(let U=0,z=L.length;U<z;U++){let _=L[U];if(g.setX(_,N[U*l]),l>=2&&g.setY(_,N[U*l+1]),l>=3&&g.setZ(_,N[U*l+2]),l>=4&&g.setW(_,N[U*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Vp[d.magFilter]||Rt,h.minFilter=Vp[d.minFilter]||Ki,h.wrapS=Gp[d.wrapS]||Hn,h.wrapT=Gp[d.wrapT]||Hn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let x=d;t.isImageBitmapLoader===!0&&(x=function(S){let g=new Dn(S);g.needsUpdate=!0,d(g)}),t.load(qr.resolveURL(f,r.path),x,void 0,p)})}).then(function(f){return c===!0&&o.revokeObjectURL(l),f.userData.mimeType=a.mimeType||qS(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ct.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ct.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Ct.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ka,$n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ha,$n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Mt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Ct.KHR_MATERIALS_UNLIT]){let f=i[Ct.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),c.push(f.extendParams(o,r,t))}else{let f=r.pbrMetallicRoughness||{};if(o.color=new Ue(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){let d=f.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],xn),o.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",f.baseColorTexture,Wt)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=si);let h=r.alphaMode||gu.OPAQUE;if(h===gu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===gu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==un&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){let f=r.normalTexture.scale;o.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&a!==un&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==un){let f=r.emissiveFactor;o.emissive=new Ue().setRGB(f[0],f[1],f[2],xn)}return r.emissiveTexture!==void 0&&a!==un&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Wt)),Promise.all(c).then(function(){let f=new a(o);return r.name&&(f.name=r.name),ys(f,r),t.associations.set(f,{materials:e}),r.extensions&&Hs(i,f,r),f})}createUniqueName(e){let t=Yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Wp(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=XS(c),f=i[h];if(f)a.push(f.promise);else{let d;c.extensions&&c.extensions[Ct.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Wp(new Qt,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?VS(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],f=[];for(let p=0,x=h.length;p<x;p++){let S=h[p],g=a[p],m,T=c[p];if(g.mode===mi.TRIANGLES||g.mode===mi.TRIANGLE_STRIP||g.mode===mi.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new Tl(S,T):new Le(S,T),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===mi.TRIANGLE_STRIP?m.geometry=pu(m.geometry,Xl):g.mode===mi.TRIANGLE_FAN&&(m.geometry=pu(m.geometry,Ja));else if(g.mode===mi.LINES)m=new zr(S,T);else if(g.mode===mi.LINE_STRIP)m=new Or(S,T);else if(g.mode===mi.LINE_LOOP)m=new El(S,T);else if(g.mode===mi.POINTS)m=new Al(S,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&WS(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ys(m,r),g.extensions&&Hs(i,m,g),t.assignFinalMaterial(m),f.push(m)}for(let p=0,x=f.length;p<x;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return r.extensions&&Hs(i,f[0],r),f[0];let d=new en;r.extensions&&Hs(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,x=f.length;p<x;p++)d.add(f[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new bn(Ap.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ii(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ys(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let f=a[c];if(f){o.push(f);let d=new Ge;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new wl(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let f=0,d=i.channels.length;f<d;f++){let p=i.channels[f],x=i.samplers[p.sampler],S=p.target,g=S.node,m=i.parameters!==void 0?i.parameters[x.input]:x.input,T=i.parameters!==void 0?i.parameters[x.output]:x.output;S.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",T)),c.push(x),h.push(S))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(f){let d=f[0],p=f[1],x=f[2],S=f[3],g=f[4],m=[];for(let T=0,M=d.length;T<M;T++){let w=d[T],L=p[T],N=x[T],U=S[T],z=g[T];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let _=n._createAnimationTracks(w,L,N,U,z);if(_)for(let R=0;R<_.length;R++)m.push(_[R])}return new vs(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],f=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,YS)});for(let p=0,x=f.length;p<x;p++)h.add(f[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new za:c.length>1?h=new en:c.length===1?h=c[0]:h=new ln,h!==c[0])for(let f=0,d=c.length;f<d;f++)h.add(c[f]);if(r.name&&(h.userData.name=r.name,h.name=a),ys(h,r),r.extensions&&Hs(n,h,r),r.matrix!==void 0){let f=new Ge;f.fromArray(r.matrix),h.applyMatrix4(f)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new en;n.name&&(r.name=i.createUniqueName(n.name)),ys(r,n),n.extensions&&Hs(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,f=l.length;h<f;h++)r.add(l[h]);let c=h=>{let f=new Map;for(let[d,p]of i.associations)(d instanceof $n||d instanceof Dn)&&f.set(d,p);return h.traverse(d=>{let p=i.associations.get(d);p!=null&&f.set(d,p)}),f};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];xs[r.path]===xs.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(xs[r.path]){case xs.weights:c=$i;break;case xs.rotation:c=pi;break;case xs.position:case xs.scale:c=es;break;default:switch(n.itemSize){case 1:c=$i;break;case 2:case 3:default:c=es;break}break}let h=i.interpolation!==void 0?kS[i.interpolation]:Us,f=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let x=new c(l[d]+"."+xs[r.path],t.array,f,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Hu(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof pi?Ou:Kl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ZS(s,e,t){let n=e.attributes,i=new ui;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){let h=Hu(Qr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,l=new D;for(let c=0,h=r.length;c<h;c++){let f=r[c];if(f.POSITION!==void 0){let d=t.json.accessors[f.POSITION],p=d.min,x=d.max;if(p!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(x[2]))),d.normalized){let S=Hu(Qr[d.componentType]);l.multiplyScalar(S)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new Zn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Wp(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=zu[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return zt.workingColorSpace!==xn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${zt.workingColorSpace}" not supported.`),ys(s,e),ZS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?GS(s,e.targets,t):s})}var Jl=class extends Bl{constructor(e){super(e),this.type=nn}parse(e){let a=function(z,_){switch(z){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(_||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(_||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(_||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(_||""))}},h=`
`,f=function(z,_,R){_=_||1024;let K=z.pos,ae=-1,B=0,Q="",G=String.fromCharCode.apply(null,new Uint16Array(z.subarray(K,K+128)));for(;0>(ae=G.indexOf(h))&&B<_&&K<z.byteLength;)Q+=G,B+=G.length,K+=128,G+=String.fromCharCode.apply(null,new Uint16Array(z.subarray(K,K+128)));return-1<ae?(R!==!1&&(z.pos+=B+ae+1),Q+G.slice(0,ae)):!1},d=function(z){let _=/^#\?(\S+)/,R=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,Z=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,K=/^\s*FORMAT=(\S+)\s*$/,ae=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,B={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},Q,G;for((z.pos>=z.byteLength||!(Q=f(z)))&&a(1,"no header found"),(G=Q.match(_))||a(3,"bad initial token"),B.valid|=1,B.programtype=G[1],B.string+=Q+`
`;Q=f(z),Q!==!1;){if(B.string+=Q+`
`,Q.charAt(0)==="#"){B.comments+=Q+`
`;continue}if((G=Q.match(R))&&(B.gamma=parseFloat(G[1])),(G=Q.match(Z))&&(B.exposure=parseFloat(G[1])),(G=Q.match(K))&&(B.valid|=2,B.format=G[1]),(G=Q.match(ae))&&(B.valid|=4,B.height=parseInt(G[1],10),B.width=parseInt(G[2],10)),B.valid&2&&B.valid&4)break}return B.valid&2||a(3,"missing format specifier"),B.valid&4||a(3,"missing image size specifier"),B},p=function(z,_,R){let Z=_;if(Z<8||Z>32767||z[0]!==2||z[1]!==2||z[2]&128)return new Uint8Array(z);Z!==(z[2]<<8|z[3])&&a(3,"wrong scanline width");let K=new Uint8Array(4*_*R);K.length||a(4,"unable to allocate buffer space");let ae=0,B=0,Q=4*Z,G=new Uint8Array(4),j=new Uint8Array(Q),me=R;for(;me>0&&B<z.byteLength;){B+4>z.byteLength&&a(1),G[0]=z[B++],G[1]=z[B++],G[2]=z[B++],G[3]=z[B++],(G[0]!=2||G[1]!=2||(G[2]<<8|G[3])!=Z)&&a(3,"bad rgbe scanline format");let re=0,he;for(;re<Q&&B<z.byteLength;){he=z[B++];let ie=he>128;if(ie&&(he-=128),(he===0||re+he>Q)&&a(3,"bad scanline data"),ie){let be=z[B++];for(let Ie=0;Ie<he;Ie++)j[re++]=be}else j.set(z.subarray(B,B+he),re),re+=he,B+=he}let W=Z;for(let ie=0;ie<W;ie++){let be=0;K[ae]=j[ie+be],be+=Z,K[ae+1]=j[ie+be],be+=Z,K[ae+2]=j[ie+be],be+=Z,K[ae+3]=j[ie+be],ae+=4}me--}return K},x=function(z,_,R,Z){let K=z[_+3],ae=Math.pow(2,K-128)/255;R[Z+0]=z[_+0]*ae,R[Z+1]=z[_+1]*ae,R[Z+2]=z[_+2]*ae,R[Z+3]=1},S=function(z,_,R,Z){let K=z[_+3],ae=Math.pow(2,K-128)/255;R[Z+0]=ja.toHalfFloat(Math.min(z[_+0]*ae,65504)),R[Z+1]=ja.toHalfFloat(Math.min(z[_+1]*ae,65504)),R[Z+2]=ja.toHalfFloat(Math.min(z[_+2]*ae,65504)),R[Z+3]=ja.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;let m=d(g),T=m.width,M=m.height,w=p(g.subarray(g.pos),T,M),L,N,U;switch(this.type){case Yn:U=w.length/4;let z=new Float32Array(U*4);for(let R=0;R<U;R++)x(w,R*4,z,R*4);L=z,N=Yn;break;case nn:U=w.length/4;let _=new Uint16Array(U*4);for(let R=0;R<U;R++)S(w,R*4,_,R*4);L=_,N=nn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:T,height:M,data:L,header:m.string,gamma:m.gamma,exposure:m.exposure,type:N}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(a,o){switch(a.type){case Yn:case nn:a.colorSpace=xn,a.minFilter=Rt,a.magFilter=Rt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,n,i)}};function qp(s){let e=new Map,t=new Map,n=s.clone();return Yp(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Yp(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Yp(s.children[n],e.children[n],t)}var jl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ai=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},KS=new Ii(-1,1,1,-1,0,1),Vu=class extends Qt{constructor(){super(),this.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Et([0,2,0,0,2,0],2))}},JS=new Vu,Kr=class{constructor(e){this._mesh=new Le(JS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,KS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Jr=class extends ai{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Yr.clone(e.uniforms),this.material=new Ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Kr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var eo=class extends ai{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},$l=class extends ai{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ec=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jr(jl),this.copyPass.material.blending=Pi,this.clock=new kl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}eo!==void 0&&(a instanceof eo?n=!0:a instanceof $l&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var tc=class extends ai{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ue}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var Zp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ue(0)},defaultOpacity:{value:0}},vertexShader:`

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

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var jr=class s extends ai{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new Ue(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Jt(r,a,{type:nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let d=new Jt(r,a,{type:nn});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new Jt(r,a,{type:nn});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=Zp;this.highPassUniforms=Yr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ut({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new ce(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=jl;this.copyUniforms=Yr.clone(h.uniforms),this.blendMaterial=new Ut({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:bi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ue,this.oldClearAlpha=1,this.basic=new un,this.fsQuad=new Kr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ut({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Ut({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};jr.BlurDirectionX=new ce(1,0);jr.BlurDirectionY=new ce(0,1);var to=new Qt;to.setAttribute("position",new tn(new Float32Array([-1,-1,3,-1,-1,3]),2));to.setAttribute("uv",new tn(new Float32Array([0,0,2,0,0,2]),2));to.boundingSphere=new Zn;to.computeBoundingSphere=function(){};var jS=new Ii,Ms=class{constructor(e){this._mesh=new Le(to,e),this._mesh.frustumCulled=!1}render(e){e.render(this._mesh,jS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}dispose(){this._mesh.material.dispose(),this._mesh.geometry.dispose()}},$S={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},sceneNormal:{value:null},projMat:{value:new Ge},viewMat:{value:new Ge},projViewMat:{value:new Ge},projectionMatrixInv:{value:new Ge},viewMatrixInv:{value:new Ge},cameraPos:{value:new D},resolution:{value:new ce},time:{value:0},samples:{value:[]},bluenoise:{value:null},distanceFalloff:{value:1},radius:{value:5},near:{value:.1},far:{value:1e3},logDepth:{value:!1},ortho:{value:!1},screenSpaceRadius:{value:!1},frame:{value:0}},depthWrite:!1,depthTest:!1,vertexShader:`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1);
}`,fragmentShader:`
    #define SAMPLES 16
    #define FSAMPLES 16.0
uniform sampler2D sceneDiffuse;
uniform highp sampler2D sceneNormal;
uniform highp sampler2D sceneDepth;
uniform mat4 projectionMatrixInv;
uniform mat4 viewMatrixInv;
uniform mat4 projMat;
uniform mat4 viewMat;
uniform mat4 projViewMat;
uniform vec3 cameraPos;
uniform vec2 resolution;
uniform float time;
uniform vec3[SAMPLES] samples;
uniform float radius;
uniform float distanceFalloff;
uniform float near;
uniform float far;
uniform float frame;
uniform bool logDepth;
uniform bool ortho;
uniform bool screenSpaceRadius;
uniform sampler2D bluenoise;
    varying vec2 vUv;
    highp float linearize_depth(highp float d, highp float zNear,highp float zFar)
    {
        return (zFar * zNear) / (zFar - d * (zFar - zNear));
    }
    highp float linearize_depth_ortho(highp float d, highp float nearZ, highp float farZ) {
      return nearZ + (farZ - nearZ) * d;
    }
    highp float linearize_depth_log(highp float d, highp float nearZ,highp float farZ) {
      float depth = pow(2.0, d * log2(farZ + 1.0)) - 1.0;
      float a = farZ / (farZ - nearZ);
      float b = farZ * nearZ / (nearZ - farZ);
      float linDepth = a + b / depth;
      return ortho ? linearize_depth_ortho(
        linDepth,
        nearZ,
        farZ
      ) :linearize_depth(linDepth, nearZ, farZ);
    }

    vec3 getWorldPosLog(vec3 posS) {
      vec2 uv = posS.xy;
      float z = posS.z;
      float nearZ =near;
      float farZ = far;
      float depth = pow(2.0, z * log2(farZ + 1.0)) - 1.0;
      float a = farZ / (farZ - nearZ);
      float b = farZ * nearZ / (nearZ - farZ);
      float linDepth = a + b / depth;
      vec4 clipVec = vec4(uv, linDepth, 1.0) * 2.0 - 1.0;
      vec4 wpos = projectionMatrixInv * clipVec;
      return wpos.xyz / wpos.w;
    }
    vec3 getWorldPos(float depth, vec2 coord) {
      #ifdef LOGDEPTH
        return getWorldPosLog(vec3(coord, depth));
      #endif
      float z = depth * 2.0 - 1.0;
      vec4 clipSpacePosition = vec4(coord * 2.0 - 1.0, z, 1.0);
      vec4 viewSpacePosition = projectionMatrixInv * clipSpacePosition;
      // Perspective division
     vec4 worldSpacePosition = viewSpacePosition;
     worldSpacePosition.xyz /= worldSpacePosition.w;
      return worldSpacePosition.xyz;
  }

  vec3 computeNormal(vec3 worldPos, vec2 vUv) {
    ivec2 p = ivec2(vUv * resolution);
    float c0 = texelFetch(sceneDepth, p, 0).x;
    float l2 = texelFetch(sceneDepth, p - ivec2(2, 0), 0).x;
    float l1 = texelFetch(sceneDepth, p - ivec2(1, 0), 0).x;
    float r1 = texelFetch(sceneDepth, p + ivec2(1, 0), 0).x;
    float r2 = texelFetch(sceneDepth, p + ivec2(2, 0), 0).x;
    float b2 = texelFetch(sceneDepth, p - ivec2(0, 2), 0).x;
    float b1 = texelFetch(sceneDepth, p - ivec2(0, 1), 0).x;
    float t1 = texelFetch(sceneDepth, p + ivec2(0, 1), 0).x;
    float t2 = texelFetch(sceneDepth, p + ivec2(0, 2), 0).x;

    float dl = abs((2.0 * l1 - l2) - c0);
    float dr = abs((2.0 * r1 - r2) - c0);
    float db = abs((2.0 * b1 - b2) - c0);
    float dt = abs((2.0 * t1 - t2) - c0);

    vec3 ce = getWorldPos(c0, vUv).xyz;

    vec3 dpdx = (dl < dr) ? ce - getWorldPos(l1, (vUv - vec2(1.0 / resolution.x, 0.0))).xyz
                          : -ce + getWorldPos(r1, (vUv + vec2(1.0 / resolution.x, 0.0))).xyz;
    vec3 dpdy = (db < dt) ? ce - getWorldPos(b1, (vUv - vec2(0.0, 1.0 / resolution.y))).xyz
                          : -ce + getWorldPos(t1, (vUv + vec2(0.0, 1.0 / resolution.y))).xyz;

    return normalize(cross(dpdx, dpdy));
}

mat3 makeRotationZ(float theta) {
	float c = cos(theta);
	float s = sin(theta);
	return mat3(c, - s, 0,
			s,  c, 0,
			0,  0, 1);
  }

void main() {
      vec4 diffuse = texture2D(sceneDiffuse, vUv);
      float depth = texture2D(sceneDepth, vUv).x;
      if (depth == 1.0) {
        gl_FragColor = vec4(vec3(1.0), 1.0);
        return;
      }
      vec3 worldPos = getWorldPos(depth, vUv);
      #ifdef HALFRES
        vec3 normal = texture2D(sceneNormal, vUv).rgb;
      #else
        vec3 normal = computeNormal(worldPos, vUv);
      #endif
      vec4 noise = texture2D(bluenoise, gl_FragCoord.xy / 128.0);
      vec2 harmoniousNumbers = vec2(
        1.618033988749895,
        1.324717957244746
      );
      noise.rg += harmoniousNumbers * frame;
      noise.rg = fract(noise.rg);
        vec3 helperVec = vec3(0.0, 1.0, 0.0);
        if (dot(helperVec, normal) > 0.99) {
          helperVec = vec3(1.0, 0.0, 0.0);
        }
        vec3 tangent = normalize(cross(helperVec, normal));
        vec3 bitangent = cross(normal, tangent);
        mat3 tbn = mat3(tangent, bitangent, normal) *  makeRotationZ(noise.r * 2.0 * 3.1415962) ;

      float occluded = 0.0;
      float totalWeight = 0.0;
      float radiusToUse = screenSpaceRadius ? distance(
        worldPos,
        getWorldPos(depth, vUv +
          vec2(radius, 0.0) / resolution)
      ) : radius;
      float distanceFalloffToUse =screenSpaceRadius ?
          radiusToUse * distanceFalloff
      : radiusToUse * distanceFalloff * 0.2;
      float bias = (min(
        0.1,
        distanceFalloffToUse * 0.1
      ) / near) * fwidth(distance(worldPos, cameraPos)) / radiusToUse;
      float phi = 1.61803398875;
      float offsetMove = 0.0;
      float offsetMoveInv = 1.0 / FSAMPLES;
      for(float i = 0.0; i < FSAMPLES; i++) {
        vec3 sampleDirection = tbn * samples[int(i)];

        float moveAmt = fract(noise.g + offsetMove);
        offsetMove += offsetMoveInv;

        vec3 samplePos = worldPos + radiusToUse * moveAmt * sampleDirection;
        vec4 offset = projMat * vec4(samplePos, 1.0);
        offset.xyz /= offset.w;
        offset.xyz = offset.xyz * 0.5 + 0.5;
        
        vec2 diff = gl_FragCoord.xy - floor(offset.xy * resolution);
        // From Rabbid76's hbao
        vec2 clipRangeCheck = step(vec2(0.0),offset.xy) * step(offset.xy, vec2(1.0));
          float sampleDepth = textureLod(sceneDepth, offset.xy, 0.0).x;

          #ifdef LOGDEPTH

          float distSample = linearize_depth_log(sampleDepth, near, far);

          #else

          float distSample = ortho ? linearize_depth_ortho(sampleDepth, near, far) : linearize_depth(sampleDepth, near, far);

          #endif

          float distWorld = ortho ? linearize_depth_ortho(offset.z, near, far) : linearize_depth(offset.z, near, far);
          
          float rangeCheck = distSample == distWorld ? 0.0 : smoothstep(0.0, 1.0, distanceFalloffToUse / (abs(distSample - distWorld)));
          
          float sampleValid = (clipRangeCheck.x * clipRangeCheck.y);
          occluded += rangeCheck * float(sampleDepth != depth) * float(distSample + bias < distWorld) * step(
            1.0,
            dot(diff, diff)
          ) * sampleValid;
          
          totalWeight += sampleValid;
      }
      float occ = clamp(1.0 - occluded / (totalWeight == 0.0 ? 1.0 : totalWeight), 0.0, 1.0);
      gl_FragColor = vec4(occ, 0.5 + 0.5 * normal);
}`},eb={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},tDiffuse:{value:null},transparencyDWFalse:{value:null},transparencyDWTrue:{value:null},transparencyDWTrueDepth:{value:null},transparencyAware:{value:!1},projMat:{value:new Ge},viewMat:{value:new Ge},projectionMatrixInv:{value:new Ge},viewMatrixInv:{value:new Ge},cameraPos:{value:new D},resolution:{value:new ce},color:{value:new D(0,0,0)},blueNoise:{value:null},downsampledDepth:{value:null},time:{value:0},intensity:{value:10},renderMode:{value:0},gammaCorrection:{value:!1},logDepth:{value:!1},ortho:{value:!1},near:{value:.1},far:{value:1e3},screenSpaceRadius:{value:!1},radius:{value:0},distanceFalloff:{value:1},fog:{value:!1},fogExp:{value:!1},fogDensity:{value:0},fogNear:{value:1/0},fogFar:{value:1/0},colorMultiply:{value:!0}},depthWrite:!1,depthTest:!1,vertexShader:`
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = vec4(position, 1);
		}`,fragmentShader:`
		uniform sampler2D sceneDiffuse;
    uniform highp sampler2D sceneDepth;
    uniform highp sampler2D downsampledDepth;
    uniform highp sampler2D transparencyDWFalse;
    uniform highp sampler2D transparencyDWTrue;
    uniform highp sampler2D transparencyDWTrueDepth;
    uniform sampler2D tDiffuse;
    uniform sampler2D blueNoise;
    uniform vec2 resolution;
    uniform vec3 color;
    uniform mat4 projectionMatrixInv;
    uniform mat4 viewMatrixInv;
    uniform float intensity;
    uniform float renderMode;
    uniform float near;
    uniform float far;
    uniform bool gammaCorrection;
    uniform bool logDepth;
    uniform bool ortho;
    uniform bool screenSpaceRadius;
    uniform bool fog;
    uniform bool fogExp;
    uniform bool colorMultiply;
    uniform bool transparencyAware;
    uniform float fogDensity;
    uniform float fogNear;
    uniform float fogFar;
    uniform float radius;
    uniform float distanceFalloff;
    uniform vec3 cameraPos;
    varying vec2 vUv;
    highp float linearize_depth(highp float d, highp float zNear,highp float zFar)
    {
        return (zFar * zNear) / (zFar - d * (zFar - zNear));
    }
    highp float linearize_depth_ortho(highp float d, highp float nearZ, highp float farZ) {
      return nearZ + (farZ - nearZ) * d;
    }
    highp float linearize_depth_log(highp float d, highp float nearZ,highp float farZ) {
      float depth = pow(2.0, d * log2(farZ + 1.0)) - 1.0;
      float a = farZ / (farZ - nearZ);
      float b = farZ * nearZ / (nearZ - farZ);
      float linDepth = a + b / depth;
      return ortho ? linearize_depth_ortho(
        linDepth,
        nearZ,
        farZ
      ) :linearize_depth(linDepth, nearZ, farZ);
    }
    vec3 getWorldPosLog(vec3 posS) {
        vec2 uv = posS.xy;
        float z = posS.z;
        float nearZ =near;
        float farZ = far;
        float depth = pow(2.0, z * log2(farZ + 1.0)) - 1.0;
        float a = farZ / (farZ - nearZ);
        float b = farZ * nearZ / (nearZ - farZ);
        float linDepth = a + b / depth;
        vec4 clipVec = vec4(uv, linDepth, 1.0) * 2.0 - 1.0;
        vec4 wpos = projectionMatrixInv * clipVec;
        return wpos.xyz / wpos.w;
      }
      vec3 getWorldPos(float depth, vec2 coord) {
       // if (logDepth) {
        #ifdef LOGDEPTH
          return getWorldPosLog(vec3(coord, depth));
        #endif
      //  }
        float z = depth * 2.0 - 1.0;
        vec4 clipSpacePosition = vec4(coord * 2.0 - 1.0, z, 1.0);
        vec4 viewSpacePosition = projectionMatrixInv * clipSpacePosition;
        // Perspective division
       vec4 worldSpacePosition = viewSpacePosition;
       worldSpacePosition.xyz /= worldSpacePosition.w;
        return worldSpacePosition.xyz;
    }
  
    vec3 computeNormal(vec3 worldPos, vec2 vUv) {
      ivec2 p = ivec2(vUv * resolution);
      float c0 = texelFetch(sceneDepth, p, 0).x;
      float l2 = texelFetch(sceneDepth, p - ivec2(2, 0), 0).x;
      float l1 = texelFetch(sceneDepth, p - ivec2(1, 0), 0).x;
      float r1 = texelFetch(sceneDepth, p + ivec2(1, 0), 0).x;
      float r2 = texelFetch(sceneDepth, p + ivec2(2, 0), 0).x;
      float b2 = texelFetch(sceneDepth, p - ivec2(0, 2), 0).x;
      float b1 = texelFetch(sceneDepth, p - ivec2(0, 1), 0).x;
      float t1 = texelFetch(sceneDepth, p + ivec2(0, 1), 0).x;
      float t2 = texelFetch(sceneDepth, p + ivec2(0, 2), 0).x;
  
      float dl = abs((2.0 * l1 - l2) - c0);
      float dr = abs((2.0 * r1 - r2) - c0);
      float db = abs((2.0 * b1 - b2) - c0);
      float dt = abs((2.0 * t1 - t2) - c0);
  
      vec3 ce = getWorldPos(c0, vUv).xyz;
  
      vec3 dpdx = (dl < dr) ? ce - getWorldPos(l1, (vUv - vec2(1.0 / resolution.x, 0.0))).xyz
                            : -ce + getWorldPos(r1, (vUv + vec2(1.0 / resolution.x, 0.0))).xyz;
      vec3 dpdy = (db < dt) ? ce - getWorldPos(b1, (vUv - vec2(0.0, 1.0 / resolution.y))).xyz
                            : -ce + getWorldPos(t1, (vUv + vec2(0.0, 1.0 / resolution.y))).xyz;
  
      return normalize(cross(dpdx, dpdy));
  }

    #include <common>
    #include <dithering_pars_fragment>
    void main() {
        //vec4 texel = texture2D(tDiffuse, vUv);//vec3(0.0);
        vec4 sceneTexel = texture2D(sceneDiffuse, vUv);
        float depth = texture2D(
            sceneDepth,
            vUv
        ).x;
        #ifdef HALFRES 
        vec4 texel;
        if (depth == 1.0) {
            texel = vec4(0.0, 0.0, 0.0, 1.0);
        } else {
        vec3 worldPos = getWorldPos(depth, vUv);
        vec3 normal = computeNormal(getWorldPos(depth, vUv), vUv);
       // vec4 texel = texture2D(tDiffuse, vUv);
       // Find closest depth;
       float totalWeight = 0.0;
       float radiusToUse = screenSpaceRadius ? distance(
        worldPos,
        getWorldPos(depth, vUv +
          vec2(radius, 0.0) / resolution)
      ) : radius;
      float distanceFalloffToUse =screenSpaceRadius ?
          radiusToUse * distanceFalloff
      : distanceFalloff;
        for(float x = -1.0; x <= 1.0; x++) {
            for(float y = -1.0; y <= 1.0; y++) {
                vec2 offset = vec2(x, y);
                ivec2 p = ivec2(
                    (vUv * resolution * 0.5) + offset
                );
                vec2 pUv = vec2(p) / (resolution * 0.5);
                float sampleDepth = texelFetch(downsampledDepth,p, 0).x;
                vec4 sampleInfo = texelFetch(tDiffuse, p, 0);
                vec3 normalSample = sampleInfo.gba * 2.0 - 1.0;
                vec3 worldPosSample = getWorldPos(sampleDepth, pUv);
                float tangentPlaneDist = abs(dot(worldPosSample - worldPos, normal));
                float rangeCheck = exp(-1.0 * tangentPlaneDist * (1.0 / distanceFalloffToUse)) * max(dot(normal, normalSample), 0.0);
                float weight = rangeCheck;
                totalWeight += weight;
                texel += sampleInfo * weight;
            }
        }
        if (totalWeight == 0.0) {
            texel = texture2D(tDiffuse, vUv);
        } else {
            texel /= totalWeight;
        }
    }
        #else
        vec4 texel = texture2D(tDiffuse, vUv);
        #endif

        #ifdef LOGDEPTH
        texel.r = clamp(texel.r, 0.0, 1.0);
        if (texel.r == 0.0) {
          texel.r = 1.0;
        }
        #endif
     
        float finalAo = pow(texel.r, intensity);
        float fogFactor;
        float fogDepth = distance(
            cameraPos,
            getWorldPos(depth, vUv)
        );
        if (fog) {
            if (fogExp) {
                fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
            } else {
                fogFactor = smoothstep( fogNear, fogFar, fogDepth );
            }
        }
        if (transparencyAware) {
            float transparencyDWOff = texture2D(transparencyDWFalse, vUv).a;
            float transparencyDWOn = texture2D(transparencyDWTrue, vUv).a;
            float adjustmentFactorOff = transparencyDWOff;
            float adjustmentFactorOn = (1.0 - transparencyDWOn) * (
                texture2D(transparencyDWTrueDepth, vUv).r == texture2D(sceneDepth, vUv).r ? 1.0 : 0.0
            );
            float adjustmentFactor = max(adjustmentFactorOff, adjustmentFactorOn);
            finalAo = mix(finalAo, 1.0, adjustmentFactor);
        }
        finalAo = mix(finalAo, 1.0, fogFactor);
        vec3 aoApplied = color * mix(vec3(1.0), sceneTexel.rgb, float(colorMultiply));
        if (renderMode == 0.0) {
            gl_FragColor = vec4( mix(sceneTexel.rgb, aoApplied, 1.0 - finalAo), sceneTexel.a);
        } else if (renderMode == 1.0) {
            gl_FragColor = vec4( mix(vec3(1.0), aoApplied, 1.0 - finalAo), sceneTexel.a);
        } else if (renderMode == 2.0) {
            gl_FragColor = vec4( sceneTexel.rgb, sceneTexel.a);
        } else if (renderMode == 3.0) {
            if (vUv.x < 0.5) {
                gl_FragColor = vec4( sceneTexel.rgb, sceneTexel.a);
            } else if (abs(vUv.x - 0.5) < 1.0 / resolution.x) {
                gl_FragColor = vec4(1.0);
            } else {
                gl_FragColor = vec4( mix(sceneTexel.rgb, aoApplied, 1.0 - finalAo), sceneTexel.a);
            }
        } else if (renderMode == 4.0) {
            if (vUv.x < 0.5) {
                gl_FragColor = vec4( sceneTexel.rgb, sceneTexel.a);
            } else if (abs(vUv.x - 0.5) < 1.0 / resolution.x) {
                gl_FragColor = vec4(1.0);
            } else {
                gl_FragColor = vec4( mix(vec3(1.0), aoApplied, 1.0 - finalAo), sceneTexel.a);
            }
        }
        #include <dithering_fragment>
        if (gammaCorrection) {
            gl_FragColor = LinearTosRGB(gl_FragColor);
        }
    }
    `},tb={uniforms:{sceneDiffuse:{value:null},sceneDepth:{value:null},tDiffuse:{value:null},projMat:{value:new Ge},viewMat:{value:new Ge},projectionMatrixInv:{value:new Ge},viewMatrixInv:{value:new Ge},cameraPos:{value:new D},resolution:{value:new ce},time:{value:0},r:{value:5},blueNoise:{value:null},radius:{value:12},worldRadius:{value:5},index:{value:0},poissonDisk:{value:[]},distanceFalloff:{value:1},near:{value:.1},far:{value:1e3},logDepth:{value:!1},screenSpaceRadius:{value:!1}},depthWrite:!1,depthTest:!1,vertexShader:`
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = vec4(position, 1.0);
		}`,fragmentShader:`
		uniform sampler2D sceneDiffuse;
    uniform highp sampler2D sceneDepth;
    uniform sampler2D tDiffuse;
    uniform sampler2D blueNoise;
    uniform mat4 projectionMatrixInv;
    uniform mat4 viewMatrixInv;
    uniform vec2 resolution;
    uniform float r;
    uniform float radius;
     uniform float worldRadius;
    uniform float index;
     uniform float near;
     uniform float far;
     uniform float distanceFalloff;
     uniform bool logDepth;
     uniform bool screenSpaceRadius;
    varying vec2 vUv;

    highp float linearize_depth(highp float d, highp float zNear,highp float zFar)
    {
        highp float z_n = 2.0 * d - 1.0;
        return 2.0 * zNear * zFar / (zFar + zNear - z_n * (zFar - zNear));
    }
    highp float linearize_depth_log(highp float d, highp float nearZ,highp float farZ) {
     float depth = pow(2.0, d * log2(farZ + 1.0)) - 1.0;
     float a = farZ / (farZ - nearZ);
     float b = farZ * nearZ / (nearZ - farZ);
     float linDepth = a + b / depth;
     return linearize_depth(linDepth, nearZ, farZ);
   }
   highp float linearize_depth_ortho(highp float d, highp float nearZ, highp float farZ) {
     return nearZ + (farZ - nearZ) * d;
   }
   vec3 getWorldPosLog(vec3 posS) {
     vec2 uv = posS.xy;
     float z = posS.z;
     float nearZ =near;
     float farZ = far;
     float depth = pow(2.0, z * log2(farZ + 1.0)) - 1.0;
     float a = farZ / (farZ - nearZ);
     float b = farZ * nearZ / (nearZ - farZ);
     float linDepth = a + b / depth;
     vec4 clipVec = vec4(uv, linDepth, 1.0) * 2.0 - 1.0;
     vec4 wpos = projectionMatrixInv * clipVec;
     return wpos.xyz / wpos.w;
   }
    vec3 getWorldPos(float depth, vec2 coord) {
     #ifdef LOGDEPTH
          return getWorldPosLog(vec3(coord, depth));
     #endif
        
        float z = depth * 2.0 - 1.0;
        vec4 clipSpacePosition = vec4(coord * 2.0 - 1.0, z, 1.0);
        vec4 viewSpacePosition = projectionMatrixInv * clipSpacePosition;
        // Perspective division
       vec4 worldSpacePosition = viewSpacePosition;
       worldSpacePosition.xyz /= worldSpacePosition.w;
        return worldSpacePosition.xyz;
    }
    #include <common>
    #define NUM_SAMPLES 16
    uniform vec2 poissonDisk[NUM_SAMPLES];
    void main() {
        const float pi = 3.14159;
        vec2 texelSize = vec2(1.0 / resolution.x, 1.0 / resolution.y);
        vec2 uv = vUv;
        vec4 data = texture2D(tDiffuse, vUv);
        float occlusion = data.r;
        float baseOcc = data.r;
        vec3 normal = data.gba * 2.0 - 1.0;
        float count = 1.0;
        float d = texture2D(sceneDepth, vUv).x;
        if (d == 1.0) {
          gl_FragColor = data;
          return;
        }
        vec3 worldPos = getWorldPos(d, vUv);
        float size = radius;
        float angle;
        if (index == 0.0) {
             angle = texture2D(blueNoise, gl_FragCoord.xy / 128.0).x * PI2;
        } else if (index == 1.0) {
             angle = texture2D(blueNoise, gl_FragCoord.xy / 128.0).y * PI2;
        } else if (index == 2.0) {
             angle = texture2D(blueNoise, gl_FragCoord.xy / 128.0).z * PI2;
        } else {
             angle = texture2D(blueNoise, gl_FragCoord.xy / 128.0).w * PI2;
        }

        mat2 rotationMatrix = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
        float radiusToUse = screenSpaceRadius ? distance(
          worldPos,
          getWorldPos(d, vUv +
            vec2(worldRadius, 0.0) / resolution)
        ) : worldRadius;
        float distanceFalloffToUse =screenSpaceRadius ?
        radiusToUse * distanceFalloff
    : radiusToUse * distanceFalloff * 0.2;


        for(int i = 0; i < NUM_SAMPLES; i++) {
            vec2 offset = (rotationMatrix * poissonDisk[i]) * texelSize * size;
            vec4 dataSample = texture2D(tDiffuse, uv + offset);
            float occSample = dataSample.r;
            vec3 normalSample = dataSample.gba * 2.0 - 1.0;
            float dSample = texture2D(sceneDepth, uv + offset).x;
            vec3 worldPosSample = getWorldPos(dSample, uv + offset);
            float tangentPlaneDist = abs(dot(worldPosSample - worldPos, normal));
            float rangeCheck = dSample == 1.0 ? 0.0 :exp(-1.0 * tangentPlaneDist * (1.0 / distanceFalloffToUse)) * max(dot(normal, normalSample), 0.0) * (1.0 - abs(occSample - baseOcc));
            occlusion += occSample * rangeCheck;
            count += rangeCheck;
        }
        if (count > 0.0) {
          occlusion /= count;
        }
        #ifdef LOGDEPTH
          occlusion = clamp(occlusion, 0.0, 1.0);
          if (occlusion == 0.0) {
            occlusion = 1.0;
          }
        #endif
        gl_FragColor = vec4(occlusion, 0.5 + 0.5 * normal);
    }
    `},nb={uniforms:{sceneDepth:{value:null},resolution:{value:new ce},near:{value:.1},far:{value:1e3},viewMatrixInv:{value:new Ge},projectionMatrixInv:{value:new Ge},logDepth:{value:!1}},depthWrite:!1,depthTest:!1,vertexShader:`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position, 1);
    }`,fragmentShader:`
    uniform highp sampler2D sceneDepth;
    uniform vec2 resolution;
    uniform float near;
    uniform float far;
    uniform bool logDepth;
    uniform mat4 viewMatrixInv;
    uniform mat4 projectionMatrixInv;
    varying vec2 vUv;
    layout(location = 1) out vec4 gNormal;
    vec3 getWorldPosLog(vec3 posS) {
        vec2 uv = posS.xy;
        float z = posS.z;
        float nearZ =near;
        float farZ = far;
        float depth = pow(2.0, z * log2(farZ + 1.0)) - 1.0;
        float a = farZ / (farZ - nearZ);
        float b = farZ * nearZ / (nearZ - farZ);
        float linDepth = a + b / depth;
        vec4 clipVec = vec4(uv, linDepth, 1.0) * 2.0 - 1.0;
        vec4 wpos = projectionMatrixInv * clipVec;
        return wpos.xyz / wpos.w;
      }
      vec3 getWorldPos(float depth, vec2 coord) {
        if (logDepth) {
          return getWorldPosLog(vec3(coord, depth));
        }
        float z = depth * 2.0 - 1.0;
        vec4 clipSpacePosition = vec4(coord * 2.0 - 1.0, z, 1.0);
        vec4 viewSpacePosition = projectionMatrixInv * clipSpacePosition;
        // Perspective division
       vec4 worldSpacePosition = viewSpacePosition;
       worldSpacePosition.xyz /= worldSpacePosition.w;
        return worldSpacePosition.xyz;
    }
  
    vec3 computeNormal(vec3 worldPos, vec2 vUv) {
      ivec2 p = ivec2(vUv * resolution);
      float c0 = texelFetch(sceneDepth, p, 0).x;
      float l2 = texelFetch(sceneDepth, p - ivec2(2, 0), 0).x;
      float l1 = texelFetch(sceneDepth, p - ivec2(1, 0), 0).x;
      float r1 = texelFetch(sceneDepth, p + ivec2(1, 0), 0).x;
      float r2 = texelFetch(sceneDepth, p + ivec2(2, 0), 0).x;
      float b2 = texelFetch(sceneDepth, p - ivec2(0, 2), 0).x;
      float b1 = texelFetch(sceneDepth, p - ivec2(0, 1), 0).x;
      float t1 = texelFetch(sceneDepth, p + ivec2(0, 1), 0).x;
      float t2 = texelFetch(sceneDepth, p + ivec2(0, 2), 0).x;
  
      float dl = abs((2.0 * l1 - l2) - c0);
      float dr = abs((2.0 * r1 - r2) - c0);
      float db = abs((2.0 * b1 - b2) - c0);
      float dt = abs((2.0 * t1 - t2) - c0);
  
      vec3 ce = getWorldPos(c0, vUv).xyz;
  
      vec3 dpdx = (dl < dr) ? ce - getWorldPos(l1, (vUv - vec2(1.0 / resolution.x, 0.0))).xyz
                            : -ce + getWorldPos(r1, (vUv + vec2(1.0 / resolution.x, 0.0))).xyz;
      vec3 dpdy = (db < dt) ? ce - getWorldPos(b1, (vUv - vec2(0.0, 1.0 / resolution.y))).xyz
                            : -ce + getWorldPos(t1, (vUv + vec2(0.0, 1.0 / resolution.y))).xyz;
  
      return normalize(cross(dpdx, dpdy));
  }
    void main() {
        vec2 uv = vUv - vec2(0.5) / resolution;
        vec2 pixelSize = vec2(1.0) / resolution;
        vec2[4] uvSamples;
        uvSamples[0] = uv;
        uvSamples[1] = uv + vec2(pixelSize.x, 0.0);
        uvSamples[2] = uv + vec2(0.0, pixelSize.y);
        uvSamples[3] = uv + pixelSize;
        float depth00 = texture2D(sceneDepth, uvSamples[0]).r;
        float depth10 = texture2D(sceneDepth, uvSamples[1]).r;
        float depth01 = texture2D(sceneDepth, uvSamples[2]).r;
        float depth11 = texture2D(sceneDepth, uvSamples[3]).r;
        float minDepth = min(min(depth00, depth10), min(depth01, depth11));
        float maxDepth = max(max(depth00, depth10), max(depth01, depth11));
        float targetDepth = minDepth;
        // Checkerboard pattern to avoid artifacts
        if (mod(gl_FragCoord.x + gl_FragCoord.y, 2.0) > 0.5) { 
            targetDepth = maxDepth;
        }
        int chosenIndex = 0;
        float[4] samples;
        samples[0] = depth00;
        samples[1] = depth10;
        samples[2] = depth01;
        samples[3] = depth11;
        for(int i = 0; i < 4; ++i) {
            if (samples[i] == targetDepth) {
                chosenIndex = i;
                break;
            }
        }
        gl_FragColor = vec4(samples[chosenIndex], 0.0, 0.0, 1.0);
        gNormal = vec4(computeNormal(
            getWorldPos(samples[chosenIndex], uvSamples[chosenIndex]), uvSamples[chosenIndex]
        ), 0.0);
    }`},Qp="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",Bb=Uint8Array.from(atob(Qp),s=>s.charCodeAt(0));var ib=Uint8Array.from(atob(Qp),s=>s.charCodeAt(0));function Kp(s,e,t){if(e.getQueryParameter(s,e.QUERY_RESULT_AVAILABLE)){let r=e.getQueryParameter(s,e.QUERY_RESULT)/1e6;t.lastTime=r}else setTimeout(()=>{Kp(s,e,t)},1)}var nc=class extends ai{constructor(e,t,n=512,i=512){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.configuration=new Proxy({aoSamples:16,aoRadius:5,denoiseSamples:8,denoiseRadius:12,distanceFalloff:1,intensity:5,denoiseIterations:2,renderMode:0,color:new Ue(0,0,0),gammaCorrection:!0,logarithmicDepthBuffer:!1,screenSpaceRadius:!1,halfRes:!1,depthAwareUpsampling:!0,autoRenderBeauty:!0,colorMultiply:!0,transparencyAware:!1,stencil:!1,accumulate:!1},{set:(r,a,o)=>{let l=r[a];return r[a]=o,o.equals?o.equals(l)||this.firstFrame():l!==o&&this.firstFrame(),a==="aoSamples"&&l!==o&&this.configureAOPass(this.configuration.logarithmicDepthBuffer),a==="denoiseSamples"&&l!==o&&this.configureDenoisePass(this.configuration.logarithmicDepthBuffer),a==="halfRes"&&l!==o&&(this.configureAOPass(this.configuration.logarithmicDepthBuffer),this.configureHalfResTargets(),this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer),this.setSize(this.width,this.height)),a==="depthAwareUpsampling"&&l!==o&&this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer),a==="transparencyAware"&&l!==o&&(this.autoDetectTransparency=!1,this.configureTransparencyTarget()),a==="stencil"&&l!==o&&(this.beautyRenderTarget.dispose(),this.beautyRenderTarget=new Jt(this.width,this.height,{minFilter:Rt,magFilter:Ht,type:nn,format:_n,stencilBuffer:o}),this.beautyRenderTarget.depthTexture=new ji(this.width,this.height,o?Qi:jn),this.beautyRenderTarget.depthTexture.format=o?ds:ci),!0}}),this.samples=[],this.samplesDenoise=[],this.autoDetectTransparency=!0,this.frame=0,this.lastViewMatrix=new Ge,this.lastProjectionMatrix=new Ge,this.beautyRenderTarget=new Jt(this.width,this.height,{minFilter:Rt,magFilter:Ht,type:nn,format:_n,stencilBuffer:!1}),this.beautyRenderTarget.depthTexture=new ji(this.width,this.height,jn),this.beautyRenderTarget.depthTexture.format=ci,this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer),this.configureSampleDependentPasses(),this.configureHalfResTargets(),this.detectTransparency(),this.configureTransparencyTarget(),this.writeTargetInternal=new Jt(this.width,this.height,{minFilter:Rt,magFilter:Rt,depthBuffer:!1}),this.readTargetInternal=new Jt(this.width,this.height,{minFilter:Rt,magFilter:Rt,depthBuffer:!1}),this.accumulationRenderTarget=new Jt(this.width,this.height,{minFilter:Rt,magFilter:Rt,depthBuffer:!1,format:_n,type:nn,stencilBuffer:!1,depthBuffer:!1,alpha:!0}),this.bluenoise=new Br(ib,128,128),this.accumulationQuad=new Ms(new Ut({uniforms:{frame:{value:0},tDiffuse:{value:null}},transparent:!0,opacity:1,vertexShader:`
             varying vec2 vUv;
             void main() {
                 vUv = uv;
                 gl_Position = vec4(position, 1);
             }`,fragmentShader:`
             uniform sampler2D tDiffuse;
             uniform float frame;
                varying vec2 vUv;
                void main() {
                    vec4 color = texture2D(tDiffuse, vUv);
                    gl_FragColor = vec4(color.rgb, 1.0 / (frame + 1.0));
                }
                `})),this.bluenoise.colorSpace=In,this.bluenoise.wrapS=Hn,this.bluenoise.wrapT=Hn,this.bluenoise.minFilter=Ht,this.bluenoise.magFilter=Ht,this.bluenoise.needsUpdate=!0,this.lastTime=0,this._r=new ce,this._c=new Ue}configureHalfResTargets(){this.firstFrame(),this.configuration.halfRes?(this.depthDownsampleTarget=new ml(this.width/2,this.height/2,2),this.depthDownsampleTarget.texture[0].format=au,this.depthDownsampleTarget.texture[0].type=Yn,this.depthDownsampleTarget.texture[0].minFilter=Ht,this.depthDownsampleTarget.texture[0].magFilter=Ht,this.depthDownsampleTarget.texture[0].depthBuffer=!1,this.depthDownsampleTarget.texture[1].format=_n,this.depthDownsampleTarget.texture[1].type=nn,this.depthDownsampleTarget.texture[1].minFilter=Ht,this.depthDownsampleTarget.texture[1].magFilter=Ht,this.depthDownsampleTarget.texture[1].depthBuffer=!1,this.depthDownsampleQuad=new Ms(new Ut(nb))):(this.depthDownsampleTarget&&(this.depthDownsampleTarget.dispose(),this.depthDownsampleTarget=null),this.depthDownsampleQuad&&(this.depthDownsampleQuad.dispose(),this.depthDownsampleQuad=null))}detectTransparency(){if(this.autoDetectTransparency){let e=!1;this.scene.traverse(t=>{t.material&&t.material.transparent&&(e=!0)}),this.configuration.transparencyAware=e}}configureTransparencyTarget(){this.configuration.transparencyAware?(this.transparencyRenderTargetDWFalse=new Jt(this.width,this.height,{minFilter:Rt,magFilter:Ht,type:nn,format:_n}),this.transparencyRenderTargetDWTrue=new Jt(this.width,this.height,{minFilter:Rt,magFilter:Ht,type:nn,format:_n}),this.transparencyRenderTargetDWTrue.depthTexture=new ji(this.width,this.height,jn),this.depthCopyPass=new Ms(new Ut({uniforms:{depthTexture:{value:this.beautyRenderTarget.depthTexture}},vertexShader:`
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 1);
            }`,fragmentShader:`
            uniform sampler2D depthTexture;
            varying vec2 vUv;
            void main() {
               gl_FragDepth = texture2D(depthTexture, vUv).r + 0.00001;
               gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
            }
            `}))):(this.transparencyRenderTargetDWFalse&&(this.transparencyRenderTargetDWFalse.dispose(),this.transparencyRenderTargetDWFalse=null),this.transparencyRenderTargetDWTrue&&(this.transparencyRenderTargetDWTrue.dispose(),this.transparencyRenderTargetDWTrue=null),this.depthCopyPass&&(this.depthCopyPass.dispose(),this.depthCopyPass=null))}renderTransparency(e){let t=this.scene.background,n=e.getClearColor(new Ue),i=e.getClearAlpha(),r=new Map,a=e.autoClearDepth;this.scene.traverse(o=>{r.set(o,o.visible)}),this.scene.background=null,e.autoClearDepth=!1,e.setClearColor(new Ue(0,0,0),0),this.depthCopyPass.material.uniforms.depthTexture.value=this.beautyRenderTarget.depthTexture,e.setRenderTarget(this.transparencyRenderTargetDWFalse),this.scene.traverse(o=>{o.material&&(o.visible=r.get(o)&&o.material.transparent&&!o.material.depthWrite&&!o.userData.treatAsOpaque)}),e.clear(!0,!0,!0),this.depthCopyPass.render(e),e.render(this.scene,this.camera),e.setRenderTarget(this.transparencyRenderTargetDWTrue),this.scene.traverse(o=>{o.material&&(o.visible=r.get(o)&&o.material.transparent&&o.material.depthWrite&&!o.userData.treatAsOpaque)}),e.clear(!0,!0,!0),this.depthCopyPass.render(e),e.render(this.scene,this.camera),this.scene.traverse(o=>{o.visible=r.get(o)}),e.setClearColor(n,i),this.scene.background=t,e.autoClearDepth=a}configureSampleDependentPasses(){this.firstFrame(),this.configureAOPass(this.configuration.logarithmicDepthBuffer),this.configureDenoisePass(this.configuration.logarithmicDepthBuffer)}configureAOPass(e=!1){this.firstFrame(),this.samples=this.generateHemisphereSamples(this.configuration.aoSamples);let t={...$S};t.fragmentShader=t.fragmentShader.replace("16",this.configuration.aoSamples).replace("16.0",this.configuration.aoSamples+".0"),e&&(t.fragmentShader=`#define LOGDEPTH
`+t.fragmentShader),this.configuration.halfRes&&(t.fragmentShader=`#define HALFRES
`+t.fragmentShader),this.effectShaderQuad?(this.effectShaderQuad.material.dispose(),this.effectShaderQuad.material=new Ut(t)):this.effectShaderQuad=new Ms(new Ut(t))}configureDenoisePass(e=!1){this.firstFrame(),this.samplesDenoise=this.generateDenoiseSamples(this.configuration.denoiseSamples,11);let t={...tb};t.fragmentShader=t.fragmentShader.replace("16",this.configuration.denoiseSamples),e&&(t.fragmentShader=`#define LOGDEPTH
`+t.fragmentShader),this.poissonBlurQuad?(this.poissonBlurQuad.material.dispose(),this.poissonBlurQuad.material=new Ut(t)):this.poissonBlurQuad=new Ms(new Ut(t))}configureEffectCompositer(e=!1){this.firstFrame();let t={...eb};e&&(t.fragmentShader=`#define LOGDEPTH
`+t.fragmentShader),this.configuration.halfRes&&this.configuration.depthAwareUpsampling&&(t.fragmentShader=`#define HALFRES
`+t.fragmentShader),this.effectCompositerQuad?(this.effectCompositerQuad.material.dispose(),this.effectCompositerQuad.material=new Ut(t)):this.effectCompositerQuad=new Ms(new Ut(t))}generateHemisphereSamples(e){let t=[];for(let n=0;n<e;n++){let i=2.399963*n,r=Math.sqrt(n+.5)/Math.sqrt(e),a=r*Math.cos(i),o=r*Math.sin(i),l=Math.sqrt(1-(a*a+o*o));t.push(new D(a,o,l))}return t}generateDenoiseSamples(e,t){let n=2*Math.PI*t/e,i=1/e,r=i,a=[],o=i,l=0;for(let c=0;c<e;c++)a.push(new ce(Math.cos(l),Math.sin(l)).multiplyScalar(Math.pow(o,.75))),o+=r,l+=n;return a}setSize(e,t){this.firstFrame(),this.width=e,this.height=t;let n=this.configuration.halfRes?.5:1;this.beautyRenderTarget.setSize(e,t),this.writeTargetInternal.setSize(e*n,t*n),this.readTargetInternal.setSize(e*n,t*n),this.accumulationRenderTarget.setSize(e*n,t*n),this.configuration.halfRes&&this.depthDownsampleTarget.setSize(e*n,t*n),this.configuration.transparencyAware&&(this.transparencyRenderTargetDWFalse.setSize(e,t),this.transparencyRenderTargetDWTrue.setSize(e,t))}firstFrame(){this.needsFrame=!0}render(e,t,n,i,r){e.capabilities.logarithmicDepthBuffer!==this.configuration.logarithmicDepthBuffer&&(this.configuration.logarithmicDepthBuffer=e.capabilities.logarithmicDepthBuffer,this.configureAOPass(this.configuration.logarithmicDepthBuffer),this.configureDenoisePass(this.configuration.logarithmicDepthBuffer),this.configureEffectCompositer(this.configuration.logarithmicDepthBuffer)),this.detectTransparency(),this.camera.updateMatrixWorld(),this.lastViewMatrix.equals(this.camera.matrixWorldInverse)&&this.lastProjectionMatrix.equals(this.camera.projectionMatrix)&&this.configuration.accumulate&&!this.needsFrame?this.frame++:(e.setRenderTarget(this.accumulationRenderTarget),e.clear(!0,!0,!0),this.frame=0,this.needsFrame=!1),this.lastViewMatrix.copy(this.camera.matrixWorldInverse),this.lastProjectionMatrix.copy(this.camera.projectionMatrix);let a,o,l;this.debugMode&&(a=e.getContext(),o=a.getExtension("EXT_disjoint_timer_query_webgl2"),o===null&&(console.error("EXT_disjoint_timer_query_webgl2 not available, disabling debug mode."),this.debugMode=!1)),this.configuration.autoRenderBeauty&&(e.setRenderTarget(this.beautyRenderTarget),e.render(this.scene,this.camera),this.configuration.transparencyAware&&this.renderTransparency(e)),this.debugMode&&(l=a.createQuery(),a.beginQuery(o.TIME_ELAPSED_EXT,l));let c=e.xr.enabled;e.xr.enabled=!1,this._r.set(this.width,this.height);let h=this.configuration.aoRadius;if(this.configuration.halfRes&&this.configuration.screenSpaceRadius&&(h*=.5),this.frame<1024/this.configuration.aoSamples){this.configuration.halfRes&&(e.setRenderTarget(this.depthDownsampleTarget),this.depthDownsampleQuad.material.uniforms.sceneDepth.value=this.beautyRenderTarget.depthTexture,this.depthDownsampleQuad.material.uniforms.resolution.value=this._r,this.depthDownsampleQuad.material.uniforms.near.value=this.camera.near,this.depthDownsampleQuad.material.uniforms.far.value=this.camera.far,this.depthDownsampleQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.depthDownsampleQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.depthDownsampleQuad.material.uniforms.logDepth.value=this.configuration.logarithmicDepthBuffer,this.depthDownsampleQuad.render(e)),this.effectShaderQuad.material.uniforms.sceneDiffuse.value=this.beautyRenderTarget.texture,this.effectShaderQuad.material.uniforms.sceneDepth.value=this.configuration.halfRes?this.depthDownsampleTarget.texture[0]:this.beautyRenderTarget.depthTexture,this.effectShaderQuad.material.uniforms.sceneNormal.value=this.configuration.halfRes?this.depthDownsampleTarget.texture[1]:null,this.effectShaderQuad.material.uniforms.projMat.value=this.camera.projectionMatrix,this.effectShaderQuad.material.uniforms.viewMat.value=this.camera.matrixWorldInverse,this.effectShaderQuad.material.uniforms.projViewMat.value=this.camera.projectionMatrix.clone().multiply(this.camera.matrixWorldInverse.clone()),this.effectShaderQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.effectShaderQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.effectShaderQuad.material.uniforms.cameraPos.value=this.camera.getWorldPosition(new D),this.effectShaderQuad.material.uniforms.resolution.value=this.configuration.halfRes?this._r.clone().multiplyScalar(.5).floor():this._r,this.effectShaderQuad.material.uniforms.time.value=performance.now()/1e3,this.effectShaderQuad.material.uniforms.samples.value=this.samples,this.effectShaderQuad.material.uniforms.bluenoise.value=this.bluenoise,this.effectShaderQuad.material.uniforms.radius.value=h,this.effectShaderQuad.material.uniforms.distanceFalloff.value=this.configuration.distanceFalloff,this.effectShaderQuad.material.uniforms.near.value=this.camera.near,this.effectShaderQuad.material.uniforms.far.value=this.camera.far,this.effectShaderQuad.material.uniforms.logDepth.value=e.capabilities.logarithmicDepthBuffer,this.effectShaderQuad.material.uniforms.ortho.value=this.camera.isOrthographicCamera,this.effectShaderQuad.material.uniforms.screenSpaceRadius.value=this.configuration.screenSpaceRadius,this.effectShaderQuad.material.uniforms.frame.value=this.frame,e.setRenderTarget(this.writeTargetInternal),this.effectShaderQuad.render(e);for(let d=0;d<this.configuration.denoiseIterations;d++)[this.writeTargetInternal,this.readTargetInternal]=[this.readTargetInternal,this.writeTargetInternal],this.poissonBlurQuad.material.uniforms.tDiffuse.value=this.readTargetInternal.texture,this.poissonBlurQuad.material.uniforms.sceneDepth.value=this.configuration.halfRes?this.depthDownsampleTarget.texture[0]:this.beautyRenderTarget.depthTexture,this.poissonBlurQuad.material.uniforms.projMat.value=this.camera.projectionMatrix,this.poissonBlurQuad.material.uniforms.viewMat.value=this.camera.matrixWorldInverse,this.poissonBlurQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.poissonBlurQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.poissonBlurQuad.material.uniforms.cameraPos.value=this.camera.getWorldPosition(new D),this.poissonBlurQuad.material.uniforms.resolution.value=this.configuration.halfRes?this._r.clone().multiplyScalar(.5).floor():this._r,this.poissonBlurQuad.material.uniforms.time.value=performance.now()/1e3,this.poissonBlurQuad.material.uniforms.blueNoise.value=this.bluenoise,this.poissonBlurQuad.material.uniforms.radius.value=this.configuration.denoiseRadius*(this.configuration.halfRes?.5:1),this.poissonBlurQuad.material.uniforms.worldRadius.value=h,this.poissonBlurQuad.material.uniforms.distanceFalloff.value=this.configuration.distanceFalloff,this.poissonBlurQuad.material.uniforms.index.value=d,this.poissonBlurQuad.material.uniforms.poissonDisk.value=this.samplesDenoise,this.poissonBlurQuad.material.uniforms.near.value=this.camera.near,this.poissonBlurQuad.material.uniforms.far.value=this.camera.far,this.poissonBlurQuad.material.uniforms.logDepth.value=e.capabilities.logarithmicDepthBuffer,this.poissonBlurQuad.material.uniforms.screenSpaceRadius.value=this.configuration.screenSpaceRadius,e.setRenderTarget(this.writeTargetInternal),this.poissonBlurQuad.render(e);e.setRenderTarget(this.accumulationRenderTarget);let f=e.autoClear;e.autoClear=!1,this.accumulationQuad.material.uniforms.tDiffuse.value=this.writeTargetInternal.texture,this.accumulationQuad.material.uniforms.frame.value=this.frame,this.accumulationQuad.render(e),e.autoClear=f}this.configuration.transparencyAware&&(this.effectCompositerQuad.material.uniforms.transparencyDWFalse.value=this.transparencyRenderTargetDWFalse.texture,this.effectCompositerQuad.material.uniforms.transparencyDWTrue.value=this.transparencyRenderTargetDWTrue.texture,this.effectCompositerQuad.material.uniforms.transparencyDWTrueDepth.value=this.transparencyRenderTargetDWTrue.depthTexture,this.effectCompositerQuad.material.uniforms.transparencyAware.value=!0),this.effectCompositerQuad.material.uniforms.sceneDiffuse.value=this.beautyRenderTarget.texture,this.effectCompositerQuad.material.uniforms.sceneDepth.value=this.beautyRenderTarget.depthTexture,this.effectCompositerQuad.material.uniforms.near.value=this.camera.near,this.effectCompositerQuad.material.uniforms.far.value=this.camera.far,this.effectCompositerQuad.material.uniforms.projectionMatrixInv.value=this.camera.projectionMatrixInverse,this.effectCompositerQuad.material.uniforms.viewMatrixInv.value=this.camera.matrixWorld,this.effectCompositerQuad.material.uniforms.logDepth.value=e.capabilities.logarithmicDepthBuffer,this.effectCompositerQuad.material.uniforms.ortho.value=this.camera.isOrthographicCamera,this.effectCompositerQuad.material.uniforms.downsampledDepth.value=this.configuration.halfRes?this.depthDownsampleTarget.texture[0]:this.beautyRenderTarget.depthTexture,this.effectCompositerQuad.material.uniforms.resolution.value=this._r,this.effectCompositerQuad.material.uniforms.blueNoise.value=this.bluenoise,this.effectCompositerQuad.material.uniforms.intensity.value=this.configuration.intensity,this.effectCompositerQuad.material.uniforms.renderMode.value=this.configuration.renderMode,this.effectCompositerQuad.material.uniforms.screenSpaceRadius.value=this.configuration.screenSpaceRadius,this.effectCompositerQuad.material.uniforms.radius.value=h,this.effectCompositerQuad.material.uniforms.distanceFalloff.value=this.configuration.distanceFalloff,this.effectCompositerQuad.material.uniforms.gammaCorrection.value=this.configuration.gammaCorrection,this.effectCompositerQuad.material.uniforms.tDiffuse.value=this.accumulationRenderTarget.texture,this.effectCompositerQuad.material.uniforms.color.value=this._c.copy(this.configuration.color).convertSRGBToLinear(),this.effectCompositerQuad.material.uniforms.colorMultiply.value=this.configuration.colorMultiply,this.effectCompositerQuad.material.uniforms.cameraPos.value=this.camera.getWorldPosition(new D),this.effectCompositerQuad.material.uniforms.fog.value=!!this.scene.fog,this.scene.fog&&(this.scene.fog.isFog?(this.effectCompositerQuad.material.uniforms.fogExp.value=!1,this.effectCompositerQuad.material.uniforms.fogNear.value=this.scene.fog.near,this.effectCompositerQuad.material.uniforms.fogFar.value=this.scene.fog.far):this.scene.fog.isFogExp2?(this.effectCompositerQuad.material.uniforms.fogExp.value=!0,this.effectCompositerQuad.material.uniforms.fogDensity.value=this.scene.fog.density):console.error(`Unsupported fog type ${this.scene.fog.constructor.name} in SSAOPass.`)),e.setRenderTarget(this.renderToScreen?null:t),this.effectCompositerQuad.render(e),this.debugMode&&(a.endQuery(o.TIME_ELAPSED_EXT),Kp(l,a,this)),e.xr.enabled=c}enableDebugMode(){this.debugMode=!0}disableDebugMode(){this.debugMode=!1}setDisplayMode(e){this.configuration.renderMode=["Combined","AO","No AO","Split","Split AO"].indexOf(e)}setQualityMode(e){e==="Performance"?(this.configuration.aoSamples=8,this.configuration.denoiseSamples=4,this.configuration.denoiseRadius=12):e==="Low"?(this.configuration.aoSamples=16,this.configuration.denoiseSamples=4,this.configuration.denoiseRadius=12):e==="Medium"?(this.configuration.aoSamples=16,this.configuration.denoiseSamples=8,this.configuration.denoiseRadius=12):e==="High"?(this.configuration.aoSamples=64,this.configuration.denoiseSamples=8,this.configuration.denoiseRadius=6):e==="Ultra"&&(this.configuration.aoSamples=64,this.configuration.denoiseSamples=16,this.configuration.denoiseRadius=6)}};(()=>{let s=document.getElementById("needs"),e=(u,y)=>u+Math.random()*(y-u),t=(u,y)=>Math.floor(e(u,y+1)),n=(u,y,v)=>u<y?y:u>v?v:u,i=u=>u[Math.floor(Math.random()*u.length)],r=(u,y,v,b)=>Math.hypot(u-v,y-b);function a(u,y){let v=u-y;for(;v>Math.PI;)v-=2*Math.PI;for(;v<-Math.PI;)v+=2*Math.PI;return v}function o(u,y,v,b,P,F){let O=P-v,Y=F-b,A=O*O+Y*Y||1e-9,se=n(((u-v)*O+(y-b)*Y)/A,0,1);return Math.hypot(u-(v+O*se),y-(b+Y*se))}let l=64,c=16,h=8,f=4,d=3.6,p=6.4,x=8,S=4.4,g=-h,m=x*l+h,T=m-g,M=(g+m)/2,w=[[1,0],[0,1],[-1,0],[0,-1]],L=[],N=[];for(let u=0;u<x;u++)for(let y=0;y<x;y++){let v=u*l+h,b=y*l+h,P=l-c,F={i:u,j:y,x:v,y:b,s:P,park:!1,bld:[],trees:[]},O=v+f+1,Y=b+f+1,A=P-2*(f+1),se=u===1&&y===1?"HOSPITAL":u===5&&y===4?"BANK":u===3&&y===6?"PIZZA":null,de=Math.max(0,1-r(u,y,3.5,3.5)/4);if(se){let J=se==="PIZZA"?7:3;F.bld.push({x:O+J,y:Y+J,w:A-J*2,d:A-J*2,floors:se==="HOSPITAL"?6:se==="BANK"?4:2,style:se==="HOSPITAL"?"hospital":se==="BANK"?"concrete":"brick",label:se})}else if(Math.random()<.14){F.park=!0;for(let J=0;J<12;J++)F.trees.push({x:e(O+3,O+A-3),y:e(Y+3,Y+A-3),s:e(.8,1.3)})}else{let J=t(1,2),ue=t(1,2),we=4,Se=(A-we*(J-1))/J,Be=(A-we*(ue-1))/ue;for(let Ee=0;Ee<J;Ee++)for(let Qe=0;Qe<ue;Qe++){if(J*ue>1&&Math.random()<.1){F.trees.push({x:O+Ee*(Se+we)+Se/2,y:Y+Qe*(Be+we)+Be/2,s:1.2});continue}let qe=e(0,1.5),$e=Math.round(e(3,7)+de*e(4,16)),Lt=$e>12?i(["glass","glass","office"]):i(["concrete","brick","beige","office","brick"]);F.bld.push({x:O+Ee*(Se+we)+qe,y:Y+Qe*(Be+we)+qe,w:Se-qe*2,d:Be-qe*2,floors:$e,style:Lt,label:null})}}for(let J of F.bld)J.h=J.floors*3.5+.8+(J.label?0:1),N.push(J);L.push(F)}function U(u,y,v){let b=Math.floor(u/l),P=Math.floor(y/l);if(b<0||P<0||b>=x||P>=x)return null;for(let F of L[b*x+P].bld){let O=n(u,F.x,F.x+F.w),Y=n(y,F.y,F.y+F.d);if((u-O)**2+(y-Y)**2<v*v)return F}return null}let z=(u,y)=>u<g+1.5||y<g+1.5||u>m-1.5||y>m-1.5;function _(u,y){let v=u-Math.floor(u/l)*l,b=y-Math.floor(y/l)*l;return v>h&&v<l-h&&b>h&&b<l-h&&u>0&&y>0&&u<x*l&&y<x*l?.16:0}let R={x:l+l/2,y:l+h+2},Z=document.getElementById("view"),K;try{K=new Fa({antialias:!0,powerPreference:"high-performance"})}catch{s.textContent="3D graphics are turned off in this browser, so the game cannot run here.";return}let ae=Math.min(1.25,window.devicePixelRatio||1),B=ae;K.setPixelRatio(B),K.setSize(window.innerWidth,window.innerHeight),K.shadowMap.enabled=!0,K.shadowMap.type=Gl,K.toneMapping=iu,K.toneMappingExposure=1.08,Z.appendChild(K.domElement);let Q=K.domElement,G=new Ba,j=new bn(62,window.innerWidth/window.innerHeight,.1,1200);window.addEventListener("resize",()=>{K.setSize(window.innerWidth,window.innerHeight),j.aspect=window.innerWidth/window.innerHeight,j.updateProjectionMatrix(),typeof et=="function"&&et()});let me=Math.min(8,K.capabilities.getMaxAnisotropy()),re=new ce;K.getDrawingBufferSize(re);let he=new Ut({depthTest:!1,depthWrite:!1,uniforms:{tD:{value:null},res:{value:re.clone()},time:{value:0},hurt:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`uniform sampler2D tD;uniform vec2 res;uniform float time;uniform float hurt;varying vec2 vUv;
void main(){
  vec2 dd=vUv-.5;float ca=dot(dd,dd)*.011;vec3 c=vec3(texture2D(tD,vUv+dd*ca).r,texture2D(tD,vUv).g,texture2D(tD,vUv-dd*ca).b);
  float edge=length(dd);
  c=mix(c,c*vec3(1.,.55,.5),hurt*smoothstep(.25,.75,edge));
  gl_FragColor=vec4(c,1.);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  vec3 g=gl_FragColor.rgb;
  float l=dot(g,vec3(.299,.587,.114));
  g=mix(vec3(l),g,.88);
  g+=vec3(-.016,.005,.026)*(1.-l)+vec3(.026,.007,-.022)*l;
  g=(g-.5)*1.08+.5;
  g*=mix(.7,1.,smoothstep(.85,.3,edge));
  g+=(fract(sin(dot(vUv*res+fract(time)*91.,vec2(12.9898,78.233)))*43758.5453)-.5)*.024;
  gl_FragColor=vec4(clamp(g,0.,1.),1.);
}`}),W=new ec(K),ie=new tc(G,j),be=new nc(G,j,re.x,re.y);{let u=new Jt(re.x,re.y,{type:nn,samples:K.capabilities.isWebGL2?4:0,minFilter:Rt,magFilter:Rt});u.depthTexture=new ji(re.x,re.y,jn),u.depthTexture.format=ci,be.beautyRenderTarget=u}Object.assign(be.configuration,{aoRadius:2.2,distanceFalloff:1.2,intensity:3.2,halfRes:!0,gammaCorrection:!1,aoSamples:12,denoiseSamples:8,denoiseRadius:10});let Ie=new jr(new ce(re.x,re.y),.55,.55,1),ke=new Jr(he,"tD");W.addPass(ie),W.addPass(be),W.addPass(Ie),W.addPass(ke);let We=3;function st(){ie.enabled=We<3,be.enabled=We>=3,Ie.enabled=We>=2}st();function et(){K.getDrawingBufferSize(re),W.setPixelRatio(B),W.setSize(window.innerWidth,window.innerHeight),he.uniforms.res.value.copy(re)}et();function ft(){he.uniforms.time.value=Xt,Ae.material.uniforms.time.value=Xt,Tt.offset.set(Xt*.006,Xt*.0035),js.visible&&(js.material.uniforms.time.value=Xt,js.material.uniforms.center.value.copy(j.position)),he.uniforms.hurt.value=Mn==="play"?n((Xt-X.lastHurt<1.2?1-(Xt-X.lastHurt)/1.2:0)+(X.car?0:n((40-X.hp)/40,0,1)*.6),0,1):0,We>=1?W.render():K.render(G,j)}let At=new D(-.62,.42,-.48).normalize(),nt=At.clone();function k(){return new Ut({side:zn,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ue},mid:{value:new Ue},bot:{value:new Ue},sunDir:{value:new D(0,1,0)},time:{value:0},glowCol:{value:new Ue},glowAmt:{value:1},disk:{value:1},cover:{value:0},cloudCol:{value:new Ue},cloudDark:{value:new Ue}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform vec3 top;uniform vec3 mid;uniform vec3 bot;uniform vec3 sunDir;uniform float time;uniform vec3 glowCol;uniform float glowAmt;uniform float disk;uniform float cover;uniform vec3 cloudCol;uniform vec3 cloudDark;varying vec3 vP;
float h2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h2(i),h2(i+vec2(1.,0.)),f.x),mix(h2(i+vec2(0.,1.)),h2(i+vec2(1.,1.)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n2(p);p*=2.03;a*=.5;}return v;}
void main(){float h=vP.y;vec3 c=h>0.?mix(mid,top,pow(clamp(h,0.,1.),.42)):mix(mid,bot,clamp(-h*5.,0.,1.));
float s=max(dot(vP,sunDir),0.);
c+=glowCol*(pow(s,6.)*glowAmt+pow(s,2.)*glowAmt*.18)*smoothstep(-.1,.25,.3-h);
if(h>0.01){vec2 uv=vP.xz/(h+.15)*1.4+vec2(time*.012,time*.004);float d=fbm(uv);float cl=smoothstep(.46-cover,.8-cover*.7,d)*smoothstep(.01,.22,h);
 float lit=.55+.45*fbm(uv*1.9+4.);vec3 cc=mix(cloudDark,cloudCol,lit)+glowCol*pow(s,4.)*glowAmt*.35;cc=mix(cc,cloudDark,smoothstep(.62,.95,d)*.7);c=mix(c,cc,cl*.92);}
c+=vec3(1.,.85,.62)*pow(s,900.)*disk;
gl_FragColor=vec4(c,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`})}let Ae=new Le(new Qn(900,32,16),k());G.add(Ae);let le=new Nr(K),ge=new Ba,fe=new Le(new Qn(50,32,16),k());ge.add(fe);{let u=new Le(new Il(48,24),new un({color:"#3f4043"}));u.rotation.x=-Math.PI/2,u.position.y=-2,ge.add(u)}let Je={},Pe={};G.fog=new bl("#cdcfcf",80,340);let He=new Ol("#c4dcff","#5e5246",.35);G.add(He);let je=new Xr("#ffe2b8",3.9);je.castShadow=!0,je.shadow.mapSize.set(2048,2048),Object.assign(je.shadow.camera,{left:-60,right:60,top:60,bottom:-60,near:1,far:600}),je.shadow.bias=-4e-4,je.shadow.normalBias=.05,G.add(je,je.target);function Ye(u,y,v,b){let P=document.createElement("canvas");P.width=u,P.height=y;let F=P.getContext("2d");v(F,u,y);let O=new Hr(P);return O.colorSpace=Wt,O.anisotropy=me,b&&(O.wrapS=O.wrapT=Hn),O}function Nt(u,y,v,b,P,F){for(let O=0;O<b;O++){u.fillStyle=i(P);let Y=e(1,F);u.fillRect(Math.random()*y,Math.random()*v,Y,Y)}}let I=[];for(let u=0;u<7;u++)I.push([e(0,512),e(0,512),e(18,60),e(10,34),e(0,3)]);function E(u,y){u.fillStyle=y;for(let v of I)for(let b of[-512,0,512])for(let P of[-512,0,512])u.beginPath(),u.ellipse(v[0]+b,v[1]+P,v[2],v[3],v[4],0,6.28),u.fill()}let $=Ye(512,512,(u,y,v)=>{u.fillStyle="#2b2d30",u.fillRect(0,0,y,v),Nt(u,y,v,26e3,["rgba(255,255,255,.05)","rgba(0,0,0,.16)","rgba(110,110,110,.07)"],2.5),u.strokeStyle="rgba(12,12,14,.45)",u.lineWidth=1.3;for(let b=0;b<9;b++){u.beginPath();let P=Math.random()*y,F=Math.random()*v;u.moveTo(P,F);for(let O=0;O<9;O++)P+=e(-25,25),F+=e(-25,25),u.lineTo(P,F);u.stroke()}for(let b=0;b<10;b++)u.fillStyle="rgba(20,20,22,.25)",u.beginPath(),u.ellipse(e(0,y),e(0,v),e(15,60),e(10,40),e(0,3),0,6.28),u.fill();for(let b=0;b<4;b++)u.fillStyle="rgba(60,58,54,.18)",u.fillRect(e(0,y),e(0,v),e(40,120),e(30,80));E(u,"rgba(0,0,0,.22)")},!0);$.repeat.set(T/14,T/14);let ve=Ye(512,512,(u,y,v)=>{u.fillStyle="#d8d8d8",u.fillRect(0,0,y,v),Nt(u,y,v,8e3,["#bdbdbd","#f0f0f0","#a8a8a8"],3),E(u,"#3c3c3c")},!0);ve.colorSpace=In,ve.repeat.copy($.repeat);let pe=Ye(256,256,(u,y,v)=>{u.fillStyle="#b2ada3",u.fillRect(0,0,y,v),Nt(u,y,v,7e3,["rgba(255,255,255,.08)","rgba(0,0,0,.09)"],2),u.fillStyle="rgba(60,55,50,.35)",u.fillRect(0,0,y,2),u.fillRect(0,0,2,v),u.fillRect(0,v/2,y,1.5),u.fillRect(y/2,0,1.5,v);for(let b=0;b<3;b++)u.fillStyle="rgba(40,38,35,.12)",u.beginPath(),u.arc(e(0,y),e(0,v),e(4,12),0,6.28),u.fill()},!0),xe=Ye(256,256,(u,y,v)=>{u.fillStyle="#4c7634",u.fillRect(0,0,y,v),Nt(u,y,v,11e3,["#5b8a3d","#43692d","#6a9748","#3d5f28","#7a9a4f"],3)},!0),Xe=Ye(256,256,(u,y,v)=>{u.fillStyle="#9a948a",u.fillRect(0,0,y,v);for(let b=0;b<v;b+=32)for(let P=b/32%2*16;P<y;P+=32)u.fillStyle=`rgb(${t(140,165)},${t(135,158)},${t(126,148)})`,u.fillRect(P+1,b+1,30,30);Nt(u,y,v,3e3,["rgba(0,0,0,.08)","rgba(255,255,255,.06)"],2)},!0),Te=Ye(256,256,(u,y,v)=>{u.fillStyle="#6c6a66",u.fillRect(0,0,y,v),Nt(u,y,v,9e3,["#7c7a75","#5f5d59","#86837d"],2.5),u.strokeStyle="rgba(0,0,0,.25)",u.lineWidth=3,u.strokeRect(2,2,y-4,v-4)},!0),De=Ye(256,256,(u,y,v)=>{u.fillStyle="#8f8b84",u.fillRect(0,0,y,v),Nt(u,y,v,5e3,["rgba(0,0,0,.1)","rgba(255,255,255,.08)"],2.5)},!0),lt={glass:{wall:"#2a3540",win:["#8fa6b8","#1e2c38"],frame:"#1c242b",ww:.94,wh:.84,slab:1,lit:.5,cool:.6},office:{wall:"#878b90",win:["#8ea6b8","#1f2f3c"],frame:"#5d6267",ww:.97,wh:.5,slab:1,lit:.45,cool:.7},concrete:{wall:"#9b9488",win:["#8399a9","#1d2a36"],frame:"#c4beb2",ww:.55,wh:.6,sill:1,lit:.35,cool:.25},brick:{wall:"#673629",win:["#8ca1b1","#1f2b35"],frame:"#c9bfae",ww:.44,wh:.62,brick:1,sill:1,lit:.4,cool:.15},beige:{wall:"#ad9d7e",win:["#8aa0b0","#222f3a"],frame:"#d6cfbf",ww:.5,wh:.58,sill:1,lit:.38,cool:.2},hospital:{wall:"#cfd2cf",win:["#9ab4c6","#22384a"],frame:"#a9b1b6",ww:.72,wh:.5,lit:.4,cool:.8}},_t={},ye=[];function Ft(u,y){let v=lt[u],b=y?2:1,P=document.createElement("canvas");P.width=P.height=512;let F=P.getContext("2d");F.fillStyle="#000",F.fillRect(0,0,512,512);let O=Ye(512*b,512*b,(A,se,de)=>{if(y){let we=A.createPattern(y,"repeat");A.save(),A.scale(.14,.14),A.fillStyle=we,A.fillRect(0,0,se/.14,de/.14),A.restore(),A.fillStyle="rgba(40,18,10,.35)",A.fillRect(0,0,se,de)}A.scale(b,b);let J=512,ue=512;if(y||(A.fillStyle=v.wall,A.fillRect(0,0,J,ue)),Nt(A,J,ue,y?3e3:9e3,["rgba(255,255,255,.04)","rgba(0,0,0,.09)"],2.5),v.brick&&!y){A.fillStyle="rgba(210,195,175,.13)";for(let we=0;we<ue;we+=8){A.fillRect(0,we,J,1);for(let Se=we/8%2*8;Se<J;Se+=16)A.fillRect(Se,we,1,8)}for(let we=0;we<60;we++){A.fillStyle=`rgba(${t(20,60)},${t(10,30)},${t(5,20)},.25)`;let Se=t(0,31)*16+t(0,1)*8,Be=t(0,63)*8;A.fillRect(Se,Be,15,7)}}for(let we=0;we<4;we++){let Se=A.createLinearGradient(0,we*128+96,0,we*128+128);Se.addColorStop(0,"rgba(0,0,0,.18)"),Se.addColorStop(1,"rgba(0,0,0,0)"),A.fillStyle=Se,A.fillRect(0,we*128+96,J,32)}for(let we=0;we<4;we++)for(let Se=0;Se<4;Se++){let Be=v.ww*128,Ee=v.wh*128,Qe=we*128+(128-Be)/2,qe=Se*128+(128-Ee)/2-6;A.fillStyle=v.frame,A.fillRect(Qe-3,qe-3,Be+6,Ee+6);let $e=A.createLinearGradient(Qe,qe,Qe+Be*.7,qe+Ee);$e.addColorStop(0,v.win[0]),$e.addColorStop(1,v.win[1]),A.fillStyle=$e,A.fillRect(Qe,qe,Be,Ee);let Lt=Math.random();if(Lt<.2?(A.fillStyle="rgba(168,158,140,.32)",A.fillRect(Qe,qe,Be,Ee*e(.2,.7))):Lt<.32&&(A.fillStyle="rgba(15,18,22,.55)",A.fillRect(Qe,qe,Be,Ee)),A.fillStyle="rgba(255,255,255,.1)",A.beginPath(),A.moveTo(Qe,qe+Ee*.15),A.lineTo(Qe+Be*.35,qe),A.lineTo(Qe+Be*.5,qe),A.lineTo(Qe,qe+Ee*.4),A.fill(),Math.random()<v.lit){let Ot=Math.random()<v.cool,xt=e(.35,.8);F.fillStyle=Ot?`rgba(${200*xt|0},${215*xt|0},${240*xt|0},1)`:`rgba(${255*xt|0},${190*xt|0},${120*xt|0},1)`,F.fillRect(Qe,qe,Be,Ee),Math.random()<.4&&(F.fillStyle="rgba(0,0,0,.6)",F.fillRect(Qe,qe,Be,Ee*e(.2,.6))),Be>60&&(F.fillStyle="#000",F.fillRect(Qe+Be/2-1.5,qe,3,Ee))}if(A.fillStyle=v.frame,Be>60&&A.fillRect(Qe+Be/2-1.5,qe,3,Ee),v.sill){A.fillStyle="rgba(0,0,0,.3)",A.fillRect(Qe-4,qe+Ee+3,Be+8,5),A.fillStyle=v.frame,A.fillRect(Qe-5,qe+Ee+2,Be+10,4);let Ot=A.createLinearGradient(0,qe+Ee+6,0,qe+Ee+46);Ot.addColorStop(0,"rgba(0,0,0,.16)"),Ot.addColorStop(1,"rgba(0,0,0,0)"),A.fillStyle=Ot,A.fillRect(Qe+e(0,Be*.6),qe+Ee+6,e(6,20),40)}}if(v.slab){A.fillStyle=v.frame;for(let we=0;we<4;we++)A.fillRect(0,we*128+118,J,10)}for(let we=0;we<10;we++){let Se=e(0,J),Be=e(4,22),Ee=A.createLinearGradient(0,0,0,ue);Ee.addColorStop(0,"rgba(0,0,0,.14)"),Ee.addColorStop(1,"rgba(0,0,0,0)"),A.fillStyle=Ee,A.fillRect(Se,0,Be,ue*e(.3,1))}},!0),Y=new Hr(P);return Y.colorSpace=Wt,Y.wrapS=Y.wrapT=Hn,Y.anisotropy=me,{t:O,et:Y}}for(let u in lt){let{t:y,et:v}=Ft(u,null);_t[u]=new Mt({map:y,emissive:"#ffffff",emissiveMap:v,emissiveIntensity:0,roughness:u==="glass"?.16:.88,metalness:u==="glass"?.45:0,envMapIntensity:u==="glass"?1.1:.4})}let ht=["#7a1f22","#1f4a6b","#2f5a35","#5a3d1f","#3a3a40"].map(u=>{let y=Ye(512,140,(v,b,P)=>{v.fillStyle="#2b2c2f",v.fillRect(0,0,b,P);for(let F=0;F<2;F++){let O=F*256;v.fillStyle="#1d1e21",v.fillRect(O+6,22,244,P-22);let Y=v.createLinearGradient(0,30,0,P);Y.addColorStop(0,"#e9d4a8"),Y.addColorStop(1,"#6a5a44"),v.fillStyle=Y,v.fillRect(O+14,34,150,P-40),v.fillStyle="rgba(30,30,30,.55)";for(let A=0;A<6;A++)v.fillRect(O+18+A*24,P-30-e(5,40),16,e(10,40));v.fillStyle="rgba(255,255,255,.18)",v.beginPath(),v.moveTo(O+14,60),v.lineTo(O+70,34),v.lineTo(O+95,34),v.lineTo(O+14,90),v.fill(),v.fillStyle="#4a3a2a",v.fillRect(O+178,40,58,P-40),v.fillStyle="#b9a37a",v.fillRect(O+188,52,38,40);for(let A=0;A<8;A++)v.fillStyle=A%2?u:"#e8e2d4",v.fillRect(O+8+A*30.5,4,30.5,22);v.fillStyle="rgba(0,0,0,.35)",v.fillRect(O+8,26,244,4)}},!0);return new Mt({map:y,roughness:.6,envMapIntensity:.6,emissive:"#ffffff",emissiveMap:y,emissiveIntensity:.08})}),rt=new Mt({map:Te,roughness:.95,envMapIntensity:.4}),tt=(()=>{let y=document.createElement("canvas");y.width=y.height=256;let v=y.getContext("2d"),b=v.createImageData(256,256),P=[];for(let O=0;O<16;O++){let Y=t(-7,7),A=t(-7,7);!Y&&!A&&(Y=1),P.push([Y,A,e(.4,1)/(1+O*.25),e(0,6.28)])}for(let O=0;O<256;O++)for(let Y=0;Y<256;Y++){let A=0,se=0;for(let Be of P){let Ee=6.2832*(Be[0]*Y+Be[1]*O)/256+Be[3],Qe=Math.cos(Ee)*Be[2];A+=Qe*Be[0],se+=Qe*Be[1]}let de=-A*.09,J=-se*.09,ue=1,we=Math.hypot(de,J,ue),Se=(O*256+Y)*4;b.data[Se]=(de/we*.5+.5)*255,b.data[Se+1]=(J/we*.5+.5)*255,b.data[Se+2]=(ue/we*.5+.5)*255,b.data[Se+3]=255}v.putImageData(b,0,0);let F=new Hr(y);return F.wrapS=F.wrapT=Hn,F.repeat.set(160,160),F.colorSpace=In,F})(),Fe=new Mt({map:xe,roughness:1,envMapIntensity:.25}),Tt=tt,V=new Mt({color:"#0d1a22",roughness:.05,metalness:.8,normalMap:tt,normalScale:new ce(.45,.45)}),Ne=Ye(8,128,(u,y,v)=>{let b=u.createLinearGradient(0,0,0,v);b.addColorStop(0,"rgba(255,255,255,1)"),b.addColorStop(.5,"rgba(255,255,255,.35)"),b.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=b,u.fillRect(0,0,y,v)}),Me=new Ut({transparent:!0,depthWrite:!1,blending:bi,side:si,uniforms:{op:{value:0},col:{value:new Ue("#ffb56e")}},vertexShader:`varying vec3 vN;varying vec3 vV;varying float vY;
    void main(){mat4 m=modelMatrix;
      #ifdef USE_INSTANCING
      m=m*instanceMatrix;
      #endif
      vec4 wp=m*vec4(position,1.);vN=normalize(mat3(m)*normal);vV=normalize(cameraPosition-wp.xyz);vY=uv.y;gl_Position=projectionMatrix*viewMatrix*wp;}`,fragmentShader:`uniform float op;uniform vec3 col;varying vec3 vN;varying vec3 vV;varying float vY;
    void main(){float f=pow(abs(dot(normalize(vN),normalize(vV))),2.2);float g=pow(vY,1.4);gl_FragColor=vec4(col*op*f*g,1.);}`}),oe=Ye(32,256,(u,y,v)=>{for(let b=0;b<v;b++){let P=Math.pow(1-b/v,1.6)*(.65+.35*Math.random()),F=u.createLinearGradient(0,0,y,0);F.addColorStop(0,"rgba(255,255,255,0)"),F.addColorStop(.5,`rgba(255,255,255,${P})`),F.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=F,u.fillRect(0,b,y,1)}}),_e=new un({map:oe,color:"#ffbb7a",transparent:!0,opacity:0,blending:bi,depthWrite:!1}),at=new un({color:"#ff2a1a"}),Dt=new Mt({map:De,color:"#8a857d",roughness:.92,envMapIntensity:.35}),Kt=[],dn=null,Bt=null,yn=new Mt({map:$,roughness:1,roughnessMap:ve,envMapIntensity:.3}),ti=new Mt({color:"#2f3337",emissive:"#ffd59a",emissiveIntensity:.3,roughness:.4}),no=Ye(128,128,(u,y,v)=>{let b=u.createRadialGradient(64,64,0,64,64,64);b.addColorStop(0,"rgba(255,255,255,1)"),b.addColorStop(.35,"rgba(255,255,255,.45)"),b.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=b,u.fillRect(0,0,y,v)}),$r=new un({map:no,color:"#ffb36b",transparent:!0,opacity:0,blending:bi,depthWrite:!1,fog:!0}),dt=new Ge,Pt=new vn,pt=new D,gt=new D,ea=new D(0,1,0);function io(u,y,v,b,P,F,O){let Y=u.attributes.uv;for(let A=0;A<6;A++)for(let se=0;se<4;se++){let de=A*4+se,J=Y.getX(de),ue=Y.getY(de);A===2||A===3?(J*=y/8,ue*=b/8):(J=J*(A<2?b:y)/P+O,ue=ue*v/F),Y.setXY(de,J,ue)}}{let u=new Le(new ei(T,T),yn);u.rotation.x=-Math.PI/2,u.position.set(M,0,M),u.receiveShadow=!0,G.add(u);let y=new Le(new ei(3e3,3e3),V);y.rotation.x=-Math.PI/2,y.position.set(M,-1.6,M),G.add(y);let v=new Mt({map:De,roughness:.9});for(let[H,Re,ze,Ve]of[[M,g-.6,T+2.4,1.2],[M,m+.6,T+2.4,1.2],[g-.6,M,1.2,T],[m+.6,M,1.2,T]]){let Ke=new Le(new kt(ze,2.6,Ve),v);Ke.position.set(H,-.5,Re),Ke.receiveShadow=!0,G.add(Ke)}let b=new Mt({map:pe,roughness:.9,envMapIntensity:.4}),P=Fe,F=new Mt({map:Xe,roughness:.9,envMapIntensity:.4});for(let H of L){let Re=new kt(H.s,.16,H.s),ze=Re.attributes.uv;for(let Nn=0;Nn<ze.count;Nn++)ze.setXY(Nn,ze.getX(Nn)*H.s/3,ze.getY(Nn)*H.s/3);let Ve=new Le(Re,b);Ve.position.set(H.x+H.s/2,.08,H.y+H.s/2),Ve.receiveShadow=!0,G.add(Ve);let Ke=H.s-2*f,It=new ei(Ke,Ke),Sn=It.attributes.uv;for(let Nn=0;Nn<Sn.count;Nn++)Sn.setXY(Nn,Sn.getX(Nn)*Ke/(H.park?6:4),Sn.getY(Nn)*Ke/(H.park?6:4));let oi=new Le(It,H.park?P:F);oi.rotation.x=-Math.PI/2,oi.position.set(H.x+H.s/2,.165,H.y+H.s/2),oi.receiveShadow=!0,G.add(oi)}let O=[],Y=[],A=(H,Re,ze,Ve,Ke)=>{H.push(Re,.025,ze,Re,.025,Ke,Ve,.025,Ke,Re,.025,ze,Ve,.025,Ke,Ve,.025,ze)};for(let H=0;H<=x;H++)for(let Re=0;Re<x;Re++){let ze=Re*l+h+4.2,Ve=(Re+1)*l-h-4.2,Ke=H*l;A(O,ze,Ke-.3,Ve,Ke-.16),A(O,ze,Ke+.16,Ve,Ke+.3),A(O,Ke-.3,ze,Ke-.16,Ve),A(O,Ke+.16,ze,Ke+.3,Ve);for(let It=ze;It<Ve-3;It+=6)A(Y,It,Ke-h+2.2,It+3,Ke-h+2.32),A(Y,It,Ke+h-2.32,It+3,Ke+h-2.2),A(Y,Ke-h+2.2,It,Ke-h+2.32,It+3),A(Y,Ke+h-2.32,It,Ke+h-2.2,It+3)}for(let H=0;H<=x;H++)for(let Re=0;Re<=x;Re++){let ze=H*l,Ve=Re*l;for(let Ke=-h+.7;Ke<h-.6;Ke+=1.1)H>0&&A(Y,ze-h-3.4,Ve+Ke,ze-h-.6,Ve+Ke+.55),H<x&&A(Y,ze+h+.6,Ve+Ke,ze+h+3.4,Ve+Ke+.55),Re>0&&A(Y,ze+Ke,Ve-h-3.4,ze+Ke+.55,Ve-h-.6),Re<x&&A(Y,ze+Ke,Ve+h+.6,ze+Ke+.55,Ve+h+3.4);H>0&&A(Y,ze-h-4.1,Ve+.3,ze-h-3.7,Ve+h-.5),H<x&&A(Y,ze+h+3.7,Ve-h+.5,ze+h+4.1,Ve-.3),Re>0&&A(Y,ze-h+.5,Ve-h-4.1,ze-.3,Ve-h-3.7),Re<x&&A(Y,ze+.3,Ve+h+3.7,ze+h-.5,Ve+h+4.1)}for(let[H,Re]of[[O,"#d0ac38"],[Y,"#dedcd5"]]){let ze=new Qt;ze.setAttribute("position",new Et(H,3)),ze.computeVertexNormals();let Ve=new Le(ze,new Mt({color:Re,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2,envMapIntensity:.4}));Ve.receiveShadow=!0,G.add(Ve)}let se=[],de=[],J=[],ue=[];for(let H of N){let Re=Math.floor(Math.random()*4)/4,ze=H.h-S,Ve=new kt(H.w,ze,H.d);io(Ve,H.w,ze,H.d,16,14,Re);let Ke=_t[H.style],It=new Le(Ve,[Ke,Ke,rt,rt,Ke,Ke]);It.position.set(H.x+H.w/2,S+ze/2,H.y+H.d/2),It.castShadow=!0,It.receiveShadow=!0,G.add(It);let Sn=new kt(H.w,S,H.d),oi=Sn.attributes.uv;for(let Fn=0;Fn<6;Fn++)for(let Ai=0;Ai<4;Ai++){let Jn=Fn*4+Ai;Fn===2||Fn===3||oi.setXY(Jn,oi.getX(Jn)*(Fn<2?H.d:H.w)/16,oi.getY(Jn))}let Nn=H.style==="hospital"?Ke:i(ht);H.style==="hospital"&&io(Sn,H.w,S,H.d,16,14,0);let _o=new Le(Sn,[Nn,Nn,rt,rt,Nn,Nn]);_o.position.set(H.x+H.w/2,S/2,H.y+H.d/2),_o.castShadow=!0,_o.receiveShadow=!0,G.add(_o);let Vm=H.label?0:t(1,3);for(let Fn=0;Fn<Vm;Fn++)se.push([H.x+e(2,H.w-2),H.h,H.y+e(2,H.d-2),e(1.2,3),e(.8,2)]);H.floors>10&&Math.random()<.6&&se.push([H.x+H.w/2,H.h,H.y+H.d/2,e(3,5),e(2.5,4)]),H.label&&ic(H);{let Fn=H.x+H.w/2,Ai=H.y+H.d/2,Jn=H.h;if(de.push([Fn,Jn-.25,Ai,H.w+.45,.5,H.d+.45]),de.push([Fn,Jn+.45,H.y+.15,H.w,.9,.3],[Fn,Jn+.45,H.y+H.d-.15,H.w,.9,.3],[H.x+.15,Jn+.45,Ai,.3,.9,H.d],[H.x+H.w-.15,Jn+.45,Ai,.3,.9,H.d]),de.push([Fn,S-.1,Ai,H.w+.35,.32,H.d+.35]),H.style!=="glass"&&H.style!=="office")for(let er=S+14;er<Jn-3;er+=14)de.push([Fn,er,Ai,H.w+.22,.22,H.d+.22]);if(!H.label&&H.style!=="glass"&&Math.random()<.45&&H.w>9&&H.d>9){let er=H.x+e(2.5,H.w-2.5),wf=H.y+e(2.5,H.d-2.5);J.push([er,Jn,wf]),de.push([er,Jn+.6,wf,2.6,1.2,2.6])}Math.random()<.5&&se.push([H.x+e(2,H.w-3),Jn,H.y+e(2,H.d-3),e(2.4,3.2),e(2.4,2.9)]),H.floors>11&&Math.random()<.7&&ue.push([Fn+e(-2,2),Jn,Ai+e(-2,2),e(5,10)])}}let we=new cn(new kt(1,1,1),Dt,de.length);de.forEach((H,Re)=>{gt.set(H[0],H[1],H[2]),pt.set(H[3],H[4],H[5]),Pt.identity(),dt.compose(gt,Pt,pt),we.setMatrixAt(Re,dt)}),we.castShadow=we.receiveShadow=!0,G.add(we);let Se=new cn(new En(1.35,1.35,2.6,14).translate(0,2.5,0),new Mt({color:"#5b4636",roughness:.95}),J.length),Be=new cn(new Xa(1.45,.9,14).translate(0,4.25,0),new Mt({color:"#3a3633",roughness:.8,metalness:.3}),J.length);J.forEach((H,Re)=>{gt.set(H[0],H[1],H[2]),pt.set(1,1,1),Pt.identity(),dt.compose(gt,Pt,pt),Se.setMatrixAt(Re,dt),Be.setMatrixAt(Re,dt)}),Se.castShadow=Be.castShadow=!0,G.add(Se,Be);let Ee=new cn(new En(.05,.09,1,6).translate(0,.5,0),new Mt({color:"#3a3d40",metalness:.7,roughness:.4}),ue.length),Qe=new cn(new Qn(.16,8,6),at,ue.length);ue.forEach((H,Re)=>{gt.set(H[0],H[1],H[2]),pt.set(1,H[3],1),Pt.identity(),dt.compose(gt,Pt,pt),Ee.setMatrixAt(Re,dt),gt.set(H[0],H[1]+H[3],H[2]),pt.set(1,1,1),dt.compose(gt,Pt,pt),Qe.setMatrixAt(Re,dt)}),G.add(Ee,Qe);let qe=new cn(new kt(1,1,1).translate(0,.5,0),new Mt({color:"#9a9893",roughness:.6,metalness:.3}),se.length);se.forEach((H,Re)=>{gt.set(H[0],H[1],H[2]),pt.set(H[3],H[4],H[3]*e(.6,1)),Pt.identity(),dt.compose(gt,Pt,pt),qe.setMatrixAt(Re,dt)}),qe.castShadow=!0,G.add(qe);let $e=[],Lt=[],Ot=[],xt=[];for(let H of L){for(let Re of H.trees)$e.push([Re.x,.16,Re.y,Re.s]);for(let Re=0;Re<4;Re++)for(let ze=6;ze<H.s-4;ze+=11){let Ke=(ze/11|0)%3,It=Re===0?[H.x+ze,H.y+1.1]:Re===1?[H.x+H.s-1.1,H.y+ze]:Re===2?[H.x+H.s-ze,H.y+H.s-1.1]:[H.x+1.1,H.y+H.s-ze];Ke===0?$e.push([It[0],.16,It[1],e(.7,1)]):Ke===1?Lt.push([It[0],It[1]]):Math.random()<.35&&xt.push([It[0],It[1]])}}for(let H=0;H<=x;H++)for(let Re=0;Re<=x;Re++){let ze=H*l,Ve=Re*l;for(let[Ke,It]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let Sn=ze+Ke*(h+.7),oi=Ve+It*(h+.7);Sn<0||oi<0||Sn>x*l||oi>x*l||Ot.push([Sn,oi,Ke*It>0])}}let wt=new cn(new En(.13,.2,3,6).translate(0,1.5,0),new Mt({color:"#4b3626",roughness:1}),$e.length),Pn=new Ul(1,3),vi=Pn.attributes.position;for(let H=0;H<vi.count;H++){let Re=vi.getX(H),ze=vi.getY(H),Ve=vi.getZ(H),Ke=Math.sin(Re*4.1+ze*2.3)*.5+Math.sin(ze*5.7+Ve*3.3)*.35+Math.sin(Ve*6.2+Re*1.7)*.3+Math.sin(Re*11+Ve*9)*.12,It=Math.sin(Re*17+ze*13)*Math.sin(Ve*15+ze*11)*.5,Sn=1+Ke*.15+It*.07;vi.setXYZ(H,Re*Sn,(ze<0?ze*.75:ze)*Sn,Ve*Sn)}Pn.computeVertexNormals();let da=Ye(256,256,(H,Re,ze)=>{H.fillStyle="#8a8a8a",H.fillRect(0,0,Re,ze);for(let Ve=0;Ve<2600;Ve++)H.fillStyle=i(["#5c5c5c","#b0b0b0","#3e3e3e","#cfcfcf"]),H.beginPath(),H.ellipse(e(0,Re),e(0,ze),e(2,5),e(1,3),e(0,3),0,6.28),H.fill()},!0);da.repeat.set(3,3);let Kn=new cn(Pn,new Mt({color:"#ffffff",map:da,roughness:1,envMapIntensity:.25}),$e.length),Gn=new cn(Pn,Kn.material,$e.length),Oi=new cn(Pn,Kn.material,$e.length),ss=new cn(Pn,Kn.material,$e.length),xi=new Ue;$e.forEach((H,Re)=>{gt.set(H[0],H[1],H[2]),pt.set(H[3],H[3],H[3]),Pt.setFromAxisAngle(ea,e(0,6.28)),dt.compose(gt,Pt,pt),wt.setMatrixAt(Re,dt),xi.setHSL(e(.2,.27),e(.22,.38),e(.17,.25)),gt.set(H[0],H[1]+3.5*H[3],H[2]),pt.set(H[3]*e(1.9,2.4),H[3]*e(1.6,2),H[3]*e(1.9,2.4)),dt.compose(gt,Pt,pt),Kn.setMatrixAt(Re,dt),Kn.setColorAt(Re,xi),gt.set(H[0]+e(-.8,.8),H[1]+4.7*H[3],H[2]+e(-.8,.8)),pt.set(H[3]*1.5,H[3]*1.4,H[3]*1.5),dt.compose(gt,Pt,pt),Gn.setMatrixAt(Re,dt),Gn.setColorAt(Re,xi.offsetHSL(0,0,.05));for(let[ze,Ve,Ke]of[[Oi,3.2,1.25],[ss,4.1,1.1]]){let It=e(0,6.28),Sn=e(.9,1.5)*H[3];gt.set(H[0]+Math.cos(It)*Sn,H[1]+Ve*H[3],H[2]+Math.sin(It)*Sn),pt.set(H[3]*Ke,H[3]*Ke*.85,H[3]*Ke),dt.compose(gt,Pt,pt),ze.setMatrixAt(Re,dt),ze.setColorAt(Re,xi.offsetHSL(e(-.01,.01),0,e(-.04,.03)))}});for(let H of[Kn,Gn,Oi,ss])H.castShadow=H.receiveShadow=!0;wt.castShadow=!0,G.add(wt,Kn,Gn,Oi,ss);let km=new Mt({color:"#2f3337",roughness:.5,metalness:.6}),So=new cn(new En(.07,.1,6.5,6).translate(0,3.25,0),km,Lt.length+Ot.length),Tf=new cn(new kt(.7,.16,.34),ti,Lt.length);Lt.forEach((H,Re)=>{gt.set(H[0],.16,H[1]),pt.set(1,1,1),Pt.identity(),dt.compose(gt,Pt,pt),So.setMatrixAt(Re,dt),gt.set(H[0],6.6,H[1]),dt.compose(gt,Pt,pt),Tf.setMatrixAt(Re,dt)});let wc=new cn(new kt(.36,1.05,.36),new Mt({color:"#1d1f22",roughness:.5}),Ot.length),Ec=new cn(new Qn(.11,8,6),new un({color:"#ffffff"}),Ot.length*3);Ot.forEach((H,Re)=>{gt.set(H[0],.16,H[1]),pt.set(.65,.62,.65),Pt.identity(),dt.compose(gt,Pt,pt),So.setMatrixAt(Lt.length+Re,dt),gt.set(H[0],4.45,H[1]),pt.set(1,1,1),dt.compose(gt,Pt,pt),wc.setMatrixAt(Re,dt);let ze=H[2]?0:2;for(let Ve=0;Ve<3;Ve++)gt.set(H[0],4.8-Ve*.32,H[1]),pt.set(1.02,1.02,1.02),pt.multiplyScalar(1),dt.compose(gt,Pt,new D(1.75,1,1.75)),Ec.setMatrixAt(Re*3+Ve,dt),Ec.setColorAt(Re*3+Ve,xi.set(Ve===ze?Ve===0?"#ff3b30":Ve===1?"#ffb020":"#3dff7a":"#202224"))}),So.castShadow=wc.castShadow=!0,G.add(So,Tf,wc,Ec);let Ac=new cn(new ei(13,13).rotateX(-Math.PI/2),$r,Lt.length);Lt.forEach((H,Re)=>{gt.set(H[0],.18,H[1]),pt.set(1,1,1),Pt.identity(),dt.compose(gt,Pt,pt),Ac.setMatrixAt(Re,dt)}),Ac.renderOrder=2,G.add(Ac);let bo=new cn(new En(.2,3.3,6.3,20,1,!0).translate(0,-3.15,0),Me,Lt.length);Lt.forEach((H,Re)=>{gt.set(H[0],6.5,H[1]),pt.set(1,1,1),Pt.identity(),dt.compose(gt,Pt,pt),bo.setMatrixAt(Re,dt)}),bo.renderOrder=3,G.add(bo),Bt=bo,Kt=Lt,dn=new cn(new ei(1.5,17).rotateX(-Math.PI/2).translate(0,0,8.5),_e,Lt.length),dn.renderOrder=2,dn.frustumCulled=!1,G.add(dn);let Rc=new cn(new En(.16,.2,.75,8).translate(0,.37,0),new Mt({color:"#b8231d",roughness:.5,metalness:.3}),xt.length);xt.forEach((H,Re)=>{gt.set(H[0],.16,H[1]),pt.set(1,1,1),Pt.identity(),dt.compose(gt,Pt,pt),Rc.setMatrixAt(Re,dt)}),Rc.castShadow=!0,G.add(Rc)}{let u=(A,se,de,J)=>Ye(256,256,(ue,we,Se)=>{ue.fillStyle=A,ue.fillRect(0,0,we,Se);for(let Be=6;Be<Se;Be+=28)for(let Ee=5;Ee<we;Ee+=32)ue.fillStyle=Math.random()<J?i(se):de,ue.fillRect(Ee,Be,20,14)},!0),y=u("#101218",["#d9a15c","#c8b48a","#9fb4d0","#e0c08a"],"#191c22",.3),v=u("#b6bcc2",["#a4abb3"],"#aab1b8",.5),b=[],P=[],F=[],O=0;for(let A=0;A<170;A++){let se=e(0,6.283),de=e(430,720),J=e(16,46),ue=e(16,46),we=e(25,150)*(1+.6*Math.random()*Math.random()),Se=new kt(J,we,ue),Be=Se.attributes.uv;for(let $e=0;$e<Be.count;$e++){let Lt=Math.floor($e/4);Be.setXY($e,Be.getX($e)*(Lt<2?ue:J)/32+A*.37,Be.getY($e)*we/32)}Se.translate(M+Math.cos(se)*de,we/2-1.6,M+Math.sin(se)*de);let Ee=Se.attributes.position,Qe=Se.attributes.uv,qe=Se.index;for(let $e=0;$e<Ee.count;$e++)b.push(Ee.getX($e),Ee.getY($e),Ee.getZ($e)),P.push(Qe.getX($e),Qe.getY($e));for(let $e=0;$e<qe.count;$e++)F.push(qe.getX($e)+O);O+=Ee.count}let Y=new Qt;Y.setAttribute("position",new Et(b,3)),Y.setAttribute("uv",new Et(P,2)),Y.setIndex(F);var ta=new un({map:y,fog:!1});ta.userData={eve:y,day:v},G.add(new Le(Y,ta)),window.__skyline=ta}function ic(u){let y=u.label,v=y==="HOSPITAL"?"#b8262f":y==="BANK"?"#173f2a":"#5a1f17",b=Ye(512,128,(de,J,ue)=>{de.fillStyle=v,de.fillRect(0,0,J,ue),de.fillStyle="#f2efe8",de.font='600 72px "Barlow Condensed", "Arial Narrow", sans-serif',de.textAlign="center",de.textBaseline="middle",de.fillText(y==="PIZZA"?"PIZZERIA":y,J/2,ue/2+4)}),P=new Mt({map:b,emissive:"#ffffff",emissiveMap:b,emissiveIntensity:.35,roughness:.5});ye.push(P);let F=Math.min(u.w*.8,14),O=new ei(F,F/4),Y=y==="PIZZA"?S+1.6:u.h-2.2,A=new Le(O,P);A.position.set(u.x+u.w/2,Y,u.y-.06),A.rotation.y=Math.PI,G.add(A);let se=new Le(O,P);if(se.position.set(u.x+u.w/2,Y,u.y+u.d+.06),G.add(se),y==="HOSPITAL"){let de=Ye(256,256,ue=>{ue.fillStyle="#d9dcdb",ue.fillRect(0,0,256,256),ue.fillStyle="#e2343f",ue.fillRect(96,30,64,196),ue.fillRect(30,96,196,64)}),J=new Le(new ei(14,14),new Mt({map:de,roughness:.8}));J.rotation.x=-Math.PI/2,J.position.set(u.x+u.w/2,u.h+.03,u.y+u.d/2),G.add(J)}}let C={},q=(u,y=.8,v=0)=>{let b=u+y+v;return C[b]||(C[b]=new Mt({color:u,roughness:y,metalness:v}))},te=new Wa([[.001,-.27],[.135,-.26],[.15,-.18],[.14,-.06],[.15,.06],[.175,.16],[.18,.22],[.15,.27],[.07,.3],[.001,.305]].map(u=>new ce(u[0],u[1])),18).scale(.68,1,1.22),ee={thigh:new En(.088,.066,.47,10).translate(0,-.235,0),shin:new En(.064,.046,.45,10).translate(0,-.225,0),uarm:new En(.058,.046,.31,8).translate(0,-.155,0),farm:new En(.046,.037,.28,8).translate(0,-.14,0),pelvis:new Qn(.165,14,10).scale(.72,.62,1.05),head:new Qn(.106,20,16).scale(.92,1.12,.86),nose:new Xa(.018,.05,6).rotateZ(-Math.PI/2),ear:new Qn(.024,6,6).scale(.5,1,.7),hairS:new Qn(.114,18,10,0,Math.PI*2,0,Math.PI*.56).scale(.96,1.1,.9),hairL:new kt(.06,.2,.2),hand:new Qn(.044,8,6).scale(.8,1.2,.6)},ne={leg:new Bs(.088,.66,4,8).translate(0,-.42,0),arm:new Bs(.056,.5,4,8).translate(0,-.31,0),torso:new Bs(.2,.36,4,12),head:new Qn(.115,16,12),hair:new Qn(.124,16,10,0,Math.PI*2,0,Math.PI*.52),shoe:new kt(.26,.09,.11),neck:new En(.05,.055,.12,8),hand:new Qn(.05,8,6),hip:new Bs(.15,.12,3,8).rotateX(Math.PI/2),rifle:new kt(.07,.62,.07),mag:new kt(.05,.14,.05),tube:new En(.08,.08,1.1,10)},Oe=q("#1b1b1d",.7);function Ze(u,y,v,b,P){let F=new en,O=new en;F.add(O);let Y=q(v,.55),A=q(u,.85),se=q(y,.9),de=new en,J=new en;de.position.set(0,.95,-.1),J.position.set(0,.95,.1);let ue=new en,we=new en;for(let[Kn,Gn]of[[de,ue],[J,we]]){let Oi=new Le(ee.thigh,se);Oi.castShadow=!0,Gn.position.y=-.47;let ss=new Le(ee.shin,se);ss.castShadow=!0;let xi=new Le(ne.shoe,Oe);xi.position.set(.05,-.44,0),Gn.add(ss,xi),Kn.add(Oi,Gn)}let Se=new Le(ee.pelvis,se);Se.position.y=1;let Be=new Le(te,A);Be.position.y=1.25,Be.castShadow=!0;let Ee=new Le(ne.neck,Y);Ee.position.y=1.57;let Qe=new en;Qe.position.y=1.69;let qe=new Le(ee.head,Y);qe.castShadow=!0;let $e=new Le(ee.nose,Y);$e.position.set(.1,-.01,0);let Lt=new Le(ee.ear,Y);Lt.position.set(-.005,0,.093);let Ot=Lt.clone();Ot.position.z=-.093,Qe.add(qe,$e,Lt,Ot);let xt=P?.5:Math.random();if(xt>.12){let Kn=new Le(ee.hairS,q(b,.95));if(Kn.position.set(-.012,.012,0),Qe.add(Kn),xt>.78){let Gn=new Le(ee.hairL,q(b,.95));Gn.position.set(-.085,-.08,0),Qe.add(Gn)}}let wt=new en,Pn=new en;wt.position.set(0,1.47,-.235),Pn.position.set(0,1.47,.235);let vi=new en,da=new en;for(let[Kn,Gn]of[[wt,vi],[Pn,da]]){let Oi=new Le(ee.uarm,A);Oi.castShadow=!0,Gn.position.y=-.31;let ss=new Le(ee.farm,A),xi=new Le(ee.hand,Y);xi.position.y=-.31,Gn.add(ss,xi),Kn.add(Oi,Gn)}return O.add(de,J,Se,Be,Ee,Qe,wt,Pn),G.add(F),{g:F,body:O,legL:de,legR:J,kneeL:ue,kneeR:we,armL:wt,armR:Pn,elbL:vi,elbR:da}}function it(u,y,v){let b=new qa;return u.forEach((P,F)=>F?b.lineTo(P[0],P[1]):b.moveTo(P[0],P[1])),b.closePath(),new Dl(b,{depth:y,bevelEnabled:!0,bevelThickness:v,bevelSize:v,bevelSegments:3,curveSegments:4}).translate(0,0,-y/2)}let ot={sedan:{body:[[-2.25,.32],[2.2,.32],[2.32,.5],[2.3,.66],[2.1,.8],[1,.92],[-1.5,.96],[-2.2,.92],[-2.32,.74],[-2.3,.45]],bd:1.72,cab:[[.98,.9],[.3,1.38],[-1,1.41],[-1.62,.94]],cd:1.56,wr:.36,wx:1.42,wz:.86,front:2.33,rear:-2.34,headY:.66,tailY:.8,bumpY:.42},suv:{body:[[-2.3,.44],[2.25,.44],[2.36,.62],[2.32,.9],[2,1.02],[-2.25,1.06],[-2.36,.92],[-2.36,.56]],bd:1.84,cab:[[1.25,1],[.55,1.66],[-2,1.7],[-2.24,1.04]],cd:1.72,wr:.42,wx:1.45,wz:.9,front:2.4,rear:-2.42,headY:.84,tailY:1,bumpY:.52},hatch:{body:[[-1.95,.32],[1.95,.32],[2.06,.5],[2.02,.68],[1.8,.82],[.8,.9],[-1.85,.94],[-1.98,.76],[-2,.45]],bd:1.66,cab:[[.78,.88],[.15,1.36],[-1.55,1.38],[-1.86,.92]],cd:1.5,wr:.34,wx:1.28,wz:.82,front:2.1,rear:-2.05,headY:.64,tailY:.82,bumpY:.42}};for(let u in ot){let y=ot[u];y.bodyG=it(y.body,y.bd,.09),y.cabG=it(y.cab,y.cd,.05);let v=y.cab[1],b=y.cab[2],P=Math.max(v[1],b[1]);y.roofG=new kt(v[0]-b[0]+.1,.06,y.cd+.06),y.roofPos=[(v[0]+b[0])/2,P+.03],y.pillarG=new kt(.13,P-y.cab[0][1],y.cd+.05),y.pillarPos=[(v[0]+b[0])/2-.15,(P+y.cab[0][1])/2],y.tireG=new En(y.wr,y.wr,.26,26).rotateX(Math.PI/2),y.rimG=new En(y.wr*.64,y.wr*.64,.275,22).rotateX(Math.PI/2)}let vt=Ye(128,128,(u,y,v)=>{u.fillStyle="#2a2c2f",u.fillRect(0,0,y,v),u.fillStyle="#b9bcc0",u.beginPath(),u.arc(64,64,62,0,6.28),u.fill(),u.fillStyle="#1c1d20",u.beginPath(),u.arc(64,64,54,0,6.28),u.fill(),u.strokeStyle="#c4c7cb",u.lineWidth=11,u.lineCap="round";for(let b=0;b<5;b++){let P=b*1.2566;u.beginPath(),u.moveTo(64+Math.cos(P)*12,64+Math.sin(P)*12),u.lineTo(64+Math.cos(P)*55,64+Math.sin(P)*55),u.stroke()}u.fillStyle="#d0d3d6",u.beginPath(),u.arc(64,64,15,0,6.28),u.fill(),u.fillStyle="#333",u.beginPath(),u.arc(64,64,6,0,6.28),u.fill()}),ut=new kt(1,.12,1),mt=new Mt({color:"#d8dade",metalness:1,roughness:.18}),sn=new Mt({map:vt,metalness:.85,roughness:.32}),kn=new Mt({roughness:.5,metalness:.6,map:Ye(128,32,(u,y,v)=>{u.fillStyle="#0c0d0f",u.fillRect(0,0,y,v),u.fillStyle="#3a3d42";for(let b=3;b<v;b+=6)u.fillRect(2,b,y-4,2);u.fillStyle="#8a8d92",u.fillRect(0,0,y,2),u.fillRect(0,v-2,y,2)})}),pn=new ei(1.05,.2).rotateY(Math.PI/2),An={roof:new kt(1.3,.06,1.5),light:new kt(.06,.13,.34),bumper:new kt(.18,.22,1.84),bar:new kt(.32,.13,.62),mirror:new kt(.14,.12,.16),plate:new kt(.02,.14,.42)},rn=new Mt({color:"#0f151b",roughness:.03,metalness:.95,envMapIntensity:1.3}),St=q("#151517",.92),na=q("#c2c5c9",.25,.95),an=q("#1e1f22",.6),Ui=q("#e8e6dc",.5),ia=new Mt({color:"#fffbe8",emissive:"#fff6d6",emissiveIntensity:.8}),ts=new Mt({color:"#7a0d12",emissive:"#ff2020",emissiveIntensity:.6}),ks=new Mt({color:"#5a0a10",emissive:"#ff1030",emissiveIntensity:0}),Rn=new Mt({color:"#0a1a5a",emissive:"#2050ff",emissiveIntensity:0}),_i=new Mt({color:"#1a1918",roughness:1}),sa=new ei(5.6,2.9),Vn=new ei(12.5,6),Ss=new un({transparent:!0,opacity:0,blending:bi,depthWrite:!1,color:"#ffe2b8",map:Ye(256,64,(u,y,v)=>{u.save(),u.translate(0,v/2),u.scale(1,.32);let b=u.createRadialGradient(0,0,0,0,0,y);b.addColorStop(0,"rgba(255,255,255,1)"),b.addColorStop(.25,"rgba(255,255,255,.55)"),b.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=b,u.fillRect(0,-v*2,y,v*4),u.restore()})}),sc=new un({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,map:Ye(128,64,(u,y,v)=>{let b=u.createRadialGradient(y/2,v/2,4,y/2,v/2,y/2);b.addColorStop(0,"rgba(0,0,0,.75)"),b.addColorStop(.55,"rgba(0,0,0,.45)"),b.addColorStop(1,"rgba(0,0,0,0)"),u.save(),u.scale(1,.5),u.translate(0,v/2),u.fillStyle=b,u.fillRect(0,-v/2,y,v*2),u.restore()})}),ra={},Jp=u=>ra[u]||(ra[u]=new ri({color:u,roughness:.38,metalness:.45,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.2}));function jp(u,y,v){let b=ot[v||"sedan"],P=new en;P.rotation.order="YXZ";let F=Jp(u),O=[],Y=new Le(b.bodyG,F),A=new Le(b.cabG,rn),se=new Le(b.roofG,F);se.position.set(b.roofPos[0],b.roofPos[1],0);let de=new Le(b.pillarG,F);de.position.set(b.pillarPos[0],b.pillarPos[1],0),Y.castShadow=A.castShadow=!0,P.add(Y,A,se,de),O.push(Y,se,de);let J=b.cab[0][0]-.2;for(let Ot of[b.bd/2+.1,-b.bd/2-.1]){let xt=new Le(An.mirror,F);xt.position.set(J,b.cab[0][1]+.06,Ot),P.add(xt),O.push(xt)}if(y){let Ot=new Le(new kt(2.1,.46,b.bd+.2),q("#111318",.35,.4));Ot.position.set(-.15,.62,0),P.add(Ot);let xt=b.roofPos[1]+.1,wt=new Le(An.bar,ks);wt.position.set(b.roofPos[0],xt,-.32);let Pn=new Le(An.bar,Rn);Pn.position.set(b.roofPos[0],xt,.32),P.add(wt,Pn),O.push(Ot)}let ue=[];for(let[Ot,xt]of[[b.wx,b.wz],[b.wx,-b.wz],[-b.wx,b.wz],[-b.wx,-b.wz]]){let wt=new en;wt.position.set(Ot,b.wr,xt),wt.add(new Le(b.tireG,St)),wt.add(new Le(b.rimG,[na,sn,sn])),P.add(wt),ue.push(wt)}for(let Ot of[.62,-.62]){let xt=new Le(An.light,ia);xt.position.set(b.front-.02,b.headY,Ot);let wt=new Le(An.light,ts);wt.position.set(b.rear+.02,b.tailY,Ot),P.add(xt,wt)}let we=new Le(pn,kn);we.position.set(b.front+.04,b.headY-.14,0),P.add(we);let Se=new Le(An.bumper,an);Se.position.set(b.front,b.bumpY,0);let Be=new Le(An.bumper,an);Be.position.set(b.rear,b.bumpY,0),P.add(Se,Be);let Ee=new Le(An.plate,Ui);Ee.position.set(b.rear-.1,b.bumpY+.04,0),P.add(Ee);let Qe=new Le(ut,an);Qe.scale.set(b.wx*2-b.wr*2.2,1,b.bd+.06),Qe.position.set(0,b.wr*.62+.06,0),P.add(Qe);let qe=new Le(ut,mt);qe.scale.set((b.cab[0][0]-b.cab[3][0])*.96,.25,b.bd+.17),qe.position.set((b.cab[0][0]+b.cab[3][0])/2,b.cab[3][1]-.02,0),P.add(qe);let $e=new Le(sa,sc);$e.rotation.x=-Math.PI/2,$e.position.y=.03,$e.renderOrder=-1,P.add($e);let Lt=new Le(Vn,Ss);return Lt.rotation.x=-Math.PI/2,Lt.position.set(b.front+6.1,.06,0),Lt.renderOrder=2,P.add(Lt),G.add(P),{g:P,parts:O,cab:A,wheels:ue,beam:Lt}}let Gu=Ye(64,64,u=>{let y=u.createRadialGradient(32,32,0,32,32,32);y.addColorStop(0,"rgba(255,255,255,1)"),y.addColorStop(.35,"rgba(255,255,255,.55)"),y.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=y,u.fillRect(0,0,64,64)}),so=[];for(let u=0;u<380;u++){let y=new Oa({map:Gu,transparent:!0,depthWrite:!1}),v=new _l(y);v.visible=!1,G.add(v),so.push({s:v,life:0})}let rc=0;function Ni(u){let y=so[rc];rc=(rc+1)%so.length,Object.assign(y,{x:u.x,y:u.y,z:u.z,vx:u.vx||0,vy:u.vy||0,vz:u.vz||0,life:u.life,max:u.life,size:u.size,grow:u.grow||0,drag:u.drag??1.5,grav:u.grav||0,alpha:u.alpha??1}),y.s.material.color.set(u.color),y.s.material.blending=u.add?bi:hs;let v=u.smoke&&ac?ac:Gu;y.s.material.map!==v&&(y.s.material.map=v,y.s.material.needsUpdate=!0),y.s.material.rotation=u.smoke?e(0,6.28):0,y.s.visible=!0}let ac=null,aa=[],$p=new kt(1,.03,.03);for(let u=0;u<60;u++){let y=new Le($p,new un({color:"#ffe7a3",transparent:!0,blending:bi,depthWrite:!1}));y.visible=!1,G.add(y),aa.push(y)}let em=new En(.06,.06,.7,8).rotateZ(Math.PI/2),ro=new zs("#ffc97a",0,12,2);G.add(ro);let ao=new zs("#ff9a4a",0,70,1.6);G.add(ao);let ct=null,Ti=!1,Vs=null,Gs=null;function oo(){if(!ct){try{ct=new(window.AudioContext||window.webkitAudioContext)}catch{ct=null}if(ct){let u=ct.createOscillator(),y=ct.createGain();u.type="sawtooth",u.frequency.value=700;let v=ct.createBiquadFilter();v.type="lowpass",v.frequency.value=1800,y.gain.value=0,u.connect(v).connect(y).connect(ct.destination),u.start(),Vs={o:u,g:y};let b=ct.createOscillator(),P=ct.createGain(),F=ct.createBiquadFilter();b.type="sawtooth",b.frequency.value=40,F.type="lowpass",F.frequency.value=400,P.gain.value=0,b.connect(F).connect(P).connect(ct.destination),b.start(),Gs={o:b,g:P,f:F}}}ct&&ct.state==="suspended"&&ct.resume()}function wi(u,y,v,b){if(!ct||Ti)return;let P=ct.currentTime,F=Math.max(1,ct.sampleRate*u|0),O=ct.createBuffer(1,F,ct.sampleRate),Y=O.getChannelData(0);for(let ue=0;ue<F;ue++)Y[ue]=(Math.random()*2-1)*Math.pow(1-ue/F,3);let A=ct.createBufferSource(),se=ct.createBiquadFilter(),de=ct.createGain();A.buffer=O,se.type="lowpass",se.frequency.value=v,de.gain.value=y;let J=A.connect(se);if(b){let ue=ct.createBiquadFilter();ue.type="highpass",ue.frequency.value=b,J=J.connect(ue)}J.connect(de).connect(ct.destination),A.start(P)}function tm(u,y,v,b,P){if(!ct||Ti)return;let F=ct.currentTime,O=ct.createOscillator(),Y=ct.createGain();O.type=b,O.frequency.setValueAtTime(u,F),O.frequency.exponentialRampToValueAtTime(Math.max(20,y),F+v),Y.gain.setValueAtTime(P,F),Y.gain.exponentialRampToValueAtTime(1e-4,F+v),O.connect(Y).connect(ct.destination),O.start(F),O.stop(F+v+.02)}let Wu=u=>wi(.14,u?.12:.3,u?1800:5e3,u?0:300),nm=u=>wi(1.2,n(.9-u/200,.1,.9),500),Xu=()=>wi(.12,.25,300),im=["#2b2d31","#3d4450","#5a4a3a","#6b6e70","#1f2a38","#4a3030","#7a7466","#2f3a2f","#8a8580","#3a3340","#a39e94","#24282e","#5c3b2a","#c2bdb2"],sm=["#23262d","#2d3442","#3b3a36","#4a4f57","#1c1d20","#5a5040","#2a3550"],rm=["#f0c8a4","#d6a079","#a36d4b","#6f4430","#f5d6b6","#c08a62"],am=["#2a1b12","#4a2f1d","#0f0f0f","#7a4f28","#c8a25a","#777"],om=["#121316","#1e2023","#4b5058","#8d9299","#c8cbcf","#e3e3e0","#2a3446","#4a1418","#2f3a2e","#5a5246","#1b2a3a","#6c6f73","#0e0f11","#3a3d42"],jt=[],on=[],bs=[],X={x:R.x,y:R.y,ang:-Math.PI/2,aim:-Math.PI/2,face:-Math.PI/2,hp:100,car:null,walk:0,weapon:1,fireT:0,lastHurt:-9,moving:0,aimT:-9};X.m=Ze("#1d1f24","#2a3550","#d9a77f","#1a120c",!0);{let u=new en,y=new Le(ne.rifle,q("#1a1b1d",.5,.5));y.position.y=-.42;let v=new Le(ne.mag,q("#1a1b1d",.5,.5));v.position.set(.07,-.34,0),u.add(y,v);let b=new Le(ne.tube,q("#46512f",.8));b.position.y=-.2,b.visible=!1,u.add(b),X.m.elbR.add(u),X.gun={r:y,mg:v,tube:b}}let oc=0,_s=0,lc=-99,Xt=0,gi=0,Un=0,Mn="menu",cc=0,hc=0,Ws=1;function uc(u,y,v){return u===0?v+d:u===2?v-d:u===1?y-d:y+d}function fc(u,y,v,b={}){let P=!!b.cop,F=P?"#e9eaec":Math.random()<.05?"#c99a24":i(om),O=Object.assign({x:u,y,dir:v,ang:v*Math.PI/2,speed:0,cruise:e(9,13),ai:!0,cop:P,wasCop:!1,hp:100,dead:!1,deadT:0,plan:!1,blockT:0,revT:0,stuckT:0,fireT:2,h:0,vh:0,tiltX:0,tiltZ:0,wheel:0,roll:0,pit:0,st:0,acc:0,hadDriver:!P},b),Y=Math.random();return O.m=jp(F,P,P?"sedan":Y<.25?"suv":Y<.5?"hatch":"sedan"),O}function qu(u){for(let y=0;y<40;y++){let v=Math.random()<.5,b=t(0,x),P=t(0,x-1),F=P*l+l/2,O,Y,A;if(v?(O=Math.random()<.5?0:2,Y=F,A=uc(O,0,b*l)):(O=Math.random()<.5?1:3,A=F,Y=uc(O,b*l,0)),u&&r(Y,A,X.x,X.y)<90||jt.some(de=>r(de.x,de.y,Y,A)<10))continue;let se=fc(Y,A,O);return se.speed=se.cruise,jt.push(se),se}}function Yu(){for(let u=0;u<40;u++){let y=Math.random()<.5,v=t(0,x),b=t(0,x-1),P=Math.random()<.5?1:-1,F=e(b*l+h+8,(b+1)*l-h-8),O=y?F:v*l+P*p,Y=y?v*l+P*p:F;if(z(O,Y)||O<2||Y<2||O>x*l-2||Y>x*l-2||jt.some(se=>r(se.x,se.y,O,Y)<7))continue;let A=y?P>0?0:2:P>0?3:1;jt.push(fc(O,Y,A,{ai:!1,hadDriver:!1}));return}}function Zu(u){G.remove(u.m.g)}function lm(){let u=i(L),y=e(1,u.s-1),v=t(0,3),b=e(1.8,f-.5);return v===0?{x:u.x+y,y:u.y+b}:v===1?{x:u.x+u.s-b,y:u.y+y}:v===2?{x:u.x+y,y:u.y+u.s-b}:{x:u.x+b,y:u.y+y}}function dc(u,y){let v={hdKind:Math.random()<.66?"w":"m",hd:null,x:u,y,ang:i([0,1,2,3])*Math.PI/2,face:0,spd:e(1.1,1.6),state:"walk",t:e(2,6),vx:0,vy:0,fall:0,walk:Math.random()*10};v.m=Ze(i(im),i(sm),i(rm),i(am));let b=e(.92,1.06);return v.m.g.scale.set(b,b,b),v}function Qu(u){for(let y=0;y<30;y++){let v=lm();if(!(u&&r(v.x,v.y,X.x,X.y)<70)&&!U(v.x,v.y,.5)){on.push(dc(v.x,v.y));return}}}function cm(u){on[u].hd&&Tc(on[u]),G.remove(on[u].m.g),on.splice(u,1)}for(let u=0;u<30;u++)qu(!1);for(let u=0;u<26;u++)Yu();for(let u=0;u<60;u++)Qu(!1);function Ku(u){oc+=u;let y=document.getElementById("bonus");y.textContent="+$"+u,y.classList.add("show"),hc=1.2}function Ju(u,y,v,b,P){for(let F=0;F<b;F++)Ni({x:u,y,z:v,vx:e(-2,2),vy:e(.5,2.5),vz:e(-2,2),life:e(.4,.9),size:e(.3,.7),grow:1.2,color:P||"#a39d92",alpha:.6})}function Xs(u,y,v,b){for(let P=0;P<b;P++)Ni({x:u,y,z:v,vx:e(-6,6),vy:e(1,6),vz:e(-6,6),life:e(.15,.35),size:e(.06,.14),color:"#ffcf6a",add:!0,drag:2,grav:9})}function oa(u,y,v,b){let P=r(u,y,X.x,X.y);gi=Math.min(1.2,gi+n(1.4-P/60,0,1.2)),nm(P),ao.position.set(u,3,y),ao.intensity=900;for(let F=0;F<40;F++){let O=e(0,6.28),Y=e(2,v*1.6);Ni({x:u,y:e(.5,2.5),z:y,vx:Math.cos(O)*Y,vy:e(2,9),vz:Math.sin(O)*Y,life:e(.35,.8),size:e(1,2.4),grow:2,color:i(["#fff1b8","#ffc24a","#ff8a2a","#ff5a1f"]),add:!0,drag:3})}for(let F=0;F<26;F++){let O=e(0,6.28),Y=e(1,v*.6);Ni({x:u,y:e(1,4),z:y,vx:Math.cos(O)*Y,vy:e(1.5,4),vz:Math.sin(O)*Y,life:e(1.8,3.2),size:e(2.2,3.6),grow:1.9,color:i(["#3a3836","#4e4a46","#2a2928"]),alpha:.8,drag:1.2,smoke:1})}Xs(u,1,y,24);for(let F of on){let O=r(F.x,F.y,u,y);O<v?lo(F,(F.x-u)/(O||1)*14,(F.y-y)/(O||1)*14,b):O<55&&ju(F)}for(let F of jt){if(F.dead){r(F.x,F.y,u,y)<v&&(F.vh=Math.max(F.vh,5));continue}let O=r(F.x,F.y,u,y);O<v+2&&qs(F,35+95*(1-O/(v+2)),b)}!X.car&&Un<=0&&P<v*.7&&co(25)}function lo(u,y,v,b){if(u.state==="down"||u.state==="getup"){u.vx+=y*.5,u.vy+=v*.5,u.state="down",u.t=Math.max(u.t,4);return}u.state="down",u.t=e(8,12),u.vx=y,u.vy=v,u.face=Math.atan2(-v,-y),Xu(),Ju(u.x,.3,u.y,4),b&&(Ku(10),ho(1))}function ju(u){(u.state==="walk"||u.state==="panic")&&(u.state="panic",u.t=e(4,7))}function qs(u,y,v){u.dead||(u.hp-=y,Xs(u.x,1,u.y,4),v&&u.cop&&ho(.6),u.hp<=0&&hm(u,v))}function hm(u,y){u.dead=!0,u.deadT=25,u.m.beam.visible=!1,u.speed*=.3,u.ai=!1,u.vh=e(6,9),u.tiltX=e(-.5,.5),u.tiltZ=e(-.4,.4),u.spinV=e(-2,2);for(let v of u.m.parts)v.material=_i;if(u.m.cab.material=_i,y){let v=u.cop?100:50;Ku(v),ho(u.cop?3:1.5)}if(u.hadDriver&&!u.cop){let v=dc(u.x+Math.cos(u.ang+1.57)*2.5,u.y+Math.sin(u.ang+1.57)*2.5);on.push(v),lo(v,e(-8,8),e(-8,8),!1),u.hadDriver=!1}X.car===u&&(X.car=null,X.x=u.x+Math.cos(u.ang+1.57)*2.6,X.y=u.y+Math.sin(u.ang+1.57)*2.6,co(40)),oa(u.x,u.y,7.5,y)}function co(u){if(!(Un>0)){if(X.car){qs(X.car,u,!1);return}X.hp-=u,X.lastHurt=Xt,gi=Math.min(1.2,gi+.2),X.hp<=0&&(X.hp=0,Un=4,Pm("WASTED"),wi(1.6,.45,220))}}function ho(u){_s=Math.min(24,_s+u),lc=Xt}let uo=()=>_s<=.01?0:Math.min(5,1+Math.floor(_s/4));function um(){X.x=R.x,X.y=R.y,X.hp=100,X.car=null,_s=0,Lm(),fn=-Math.PI/2;for(let u of jt)u.cop&&!u.dead&&(u.dead=!0,u.deadT=0)}function fo(u,y,v,b,P){let F=u.cop?34:u===X.car?40:28,O=u.speed;y>0?u.speed+=(u.speed<0?20:9.5*(1-.5*n(u.speed/F,0,1)))*y*b:y<0?u.speed-=(u.speed>1?24:6)*b:u.speed*=Math.max(0,1-.5*b),P&&(u.speed*=Math.max(0,1-2.4*b)),u.speed=n(u.speed,-9,F),u.st+=(v-u.st)*Math.min(1,b*7);let Y=1-.45*n(Math.abs(u.speed)/40,0,1);u.ang+=u.st*(P?2.6:1.8)*Y*b*n(u.speed/6,-1,1),u.acc=(u.speed-O)/Math.max(b,1e-4);let A=u.x+Math.cos(u.ang)*u.speed*b,se=u.y+Math.sin(u.ang)*u.speed*b;U(A,se,1.7)||z(A,se)?(Math.abs(u.speed)>10&&(Xs(u.x+Math.cos(u.ang)*2.3,.8,u.y+Math.sin(u.ang)*2.3,10),wi(.25,.35,900),u===X.car&&qs(u,Math.abs(u.speed)*.7,!1),gi=Math.min(1.2,gi+(u===X.car?.4:0))),u.speed*=-.25):(u.x=A,u.y=se)}function fm(u){let y=u.dir,v,b;y===0?(v=(Math.floor((u.x+7)/l)+1)*l,b=Math.round(u.y/l)*l):y===2?(v=(Math.ceil((u.x-7)/l)-1)*l,b=Math.round(u.y/l)*l):y===1?(b=(Math.floor((u.y+7)/l)+1)*l,v=Math.round(u.x/l)*l):(b=(Math.ceil((u.y-7)/l)-1)*l,v=Math.round(u.x/l)*l);let P=v/l,F=b/l,O=A=>A===0?P<x:A===2?P>0:A===1?F<x:F>0,Y=[];O(y)&&Y.push(y,y),O((y+1)%4)&&Y.push((y+1)%4),O((y+3)%4)&&Y.push((y+3)%4),Y.length||Y.push((y+2)%4),u.nd=i(Y),u.turnAt=u.nd===y?y%2===0?v:b:u.nd===(y+2)%4?y%2===0?u.x:u.y:uc(u.nd,v,b),u.plan=!0}function dm(u,y){u.plan||fm(u);let v=Math.cos(u.ang),b=Math.sin(u.ang),P=(ue,we,Se,Be)=>{let Ee=ue-u.x,Qe=we-u.y,qe=Ee*v+Qe*b;return qe>0&&qe<Be&&Math.abs(-Ee*b+Qe*v)<Se},F=!1;for(let ue of jt)if(ue!==u&&P(ue.x,ue.y,2.2,11)){F=!0;break}if(!F){for(let ue of on)if(ue.state!=="down"&&P(ue.x,ue.y,1.5,8)){F=!0;break}}!F&&!X.car&&P(X.x,X.y,1.5,8)&&(F=!0),F?(u.blockT+=y,u.blockT>2.5&&u.blockT-y<=2.5&&r(u.x,u.y,X.x,X.y)<40&&tm(392,388,.4,"square",.03),u.blockT>3.4&&(F=!1),u.blockT>4.6&&(u.blockT=0)):u.blockT=0;let O=F?0:u.cruise,Y=u.speed;u.speed+=(O-u.speed)*Math.min(1,y*(F?5:1.5)),u.acc=(u.speed-Y)/Math.max(y,1e-4);let A=w[u.dir];u.x+=A[0]*u.speed*y,u.y+=A[1]*u.speed*y;let se=u.dir%2===0?u.x:u.y,de=u.dir===0||u.dir===1?1:-1;(se-u.turnAt)*de>=0&&(u.dir%2===0?u.x=u.turnAt:u.y=u.turnAt,u.dir=u.nd,u.plan=!1);let J=a(u.dir*Math.PI/2,u.ang);u.ang+=J*Math.min(1,y*7),u.st=n(J*2,-1,1)}function pm(u,y){let v=X.car||X,b=v.x-u.x,P=v.y-u.y,F=Math.hypot(b,P),O=uo(),Y=O===0||Un>0?Math.atan2(-P,-b):Math.atan2(P,b),A=a(Y,u.ang);if(u.revT>0)u.revT-=y,fo(u,-1,A>0?-1:1,y);else{let se=F<14&&!X.car&&O>0;fo(u,se?-1:1,n(A*2,-1,1),y),Math.abs(u.speed)<2&&!se?(u.stuckT+=y,u.stuckT>.8&&(u.revT=e(.7,1.1),u.stuckT=0)):u.stuckT=0}if(u.fireT-=y,O>=2&&Un<=0&&F<50&&u.fireT<=0){let se=Math.atan2(P,b)+e(-.06,.06);bs.push({x:u.x+Math.cos(se)*2.6,y:u.y+Math.sin(se)*2.6,h:1.3,vx:Math.cos(se)*110,vy:Math.sin(se)*110,life:.6,type:"cop"}),u.fireT=Math.max(.5,1.7-O*.22),Wu(!0)}}function mm(){for(let u=0;u<30;u++){let y=e(0,6.28),v=e(90,130),b=X.x+Math.cos(y)*v,P=X.y+Math.sin(y)*v;if(Math.random()<.5?b=Math.round(b/l)*l:P=Math.round(P/l)*l,b=n(b,g+4,m-4),P=n(P,g+4,m-4),!U(b,P,2.5)){jt.push(fc(b,P,0,{ai:!1,cop:!0,hp:130,ang:Math.atan2(X.y-P,X.x-b),fireT:e(1,2.5)}));return}}}let Ys={},ns={down:!1,x:window.innerWidth/2,y:window.innerHeight/2},Fi=!1,po=!1,mo=!1,Zs=null,pc=0,mc=0,Cn={x:0,y:0,id:null,cx:0,cy:0},fn=-Math.PI/2,Ei=.14,go=-9,Bi=!1,Ts=!1;window.addEventListener("keydown",u=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(u.code)&&u.preventDefault(),!Ys[u.code]&&(Ys[u.code]=!0,Mn==="play"&&((u.code==="KeyE"||u.code==="KeyF")&&of(),u.code==="Digit1"&&vo(1),u.code==="Digit2"&&vo(2),u.code==="KeyQ"&&vo(X.weapon===1?2:1),u.code==="KeyM"&&(Ti=!Ti),u.code==="KeyN"&&$s(xf[ha]),(u.code==="KeyP"||u.code==="Escape"&&!Bi)&&ef()))}),window.addEventListener("keyup",u=>{Ys[u.code]=!1}),window.addEventListener("blur",()=>{for(let u in Ys)Ys[u]=!1;ns.down=!1}),window.addEventListener("mousemove",u=>{ns.x=u.clientX,ns.y=u.clientY,!(Mn!=="play"||!Bi)&&(fn+=(u.movementX||0)*.0022*Ws,Ei=n(Ei+(u.movementY||0)*.0018*Ws,-.25,.9),go=Xt)}),Q.tabIndex=0,Q.style.outline="none",Q.addEventListener("mousedown",u=>{Mn!=="play"||Fi||(oo(),Bi||$u(),ns.down=!0)}),window.addEventListener("mouseup",()=>{ns.down=!1}),Q.addEventListener("contextmenu",u=>u.preventDefault());function $u(){if(!Ts)try{let u=Q.requestPointerLock();u&&u.catch&&u.catch(()=>{Ts=!0,Mc=Xt})}catch{Ts=!0}}document.addEventListener("pointerlockchange",()=>{Bi=document.pointerLockElement===Q}),document.addEventListener("pointerlockerror",()=>{Bi=!1,Ts=!0,Mc=Xt,df.textContent="Move the mouse to the screen edge to turn"});function ef(){Mn="menu",po=!1,Cn.id=null,Cn.x=Cn.y=0,Zs=null,document.getElementById("menu").hidden=!1,ns.down=!1,document.pointerLockElement&&document.exitPointerLock(),Gs&&(Gs.g.gain.value=0),Vs&&(Vs.g.gain.value=0)}let tf=document.getElementById("sens");tf.addEventListener("input",()=>{Ws=+tf.value}),document.getElementById("play").addEventListener("click",()=>{oo(),document.getElementById("menu").hidden=!0,Mn="play",document.getElementById("play").textContent="KEEP PLAYING";try{Q.focus({preventScroll:!0})}catch{}Fi||$u()});let Qs=document.getElementById("touch"),Ks=document.getElementById("stick"),nf=document.getElementById("knob");function sf(){Fi||(Fi=!0,document.body.classList.add("touchmode"),document.getElementById("needs").textContent="Left thumb moves. Right thumb drags to look. Hold FIRE to shoot.")}try{matchMedia("(pointer: coarse)").matches&&sf()}catch{}window.addEventListener("touchstart",sf,{passive:!0}),Qs.addEventListener("pointerdown",u=>{if(!u.target.closest(".tbtn")){oo(),u.preventDefault();try{Qs.setPointerCapture(u.pointerId)}catch{}u.clientX<window.innerWidth*.45&&Cn.id===null?(Cn.id=u.pointerId,Cn.cx=u.clientX,Cn.cy=u.clientY,Ks.style.left=u.clientX-65+"px",Ks.style.top=u.clientY-65+"px",Ks.classList.add("on")):Zs===null&&(Zs=u.pointerId,pc=u.clientX,mc=u.clientY)}}),Qs.addEventListener("pointermove",u=>{if(u.pointerId===Cn.id){let y=(u.clientX-Cn.cx)/55,v=(u.clientY-Cn.cy)/55,b=Math.hypot(y,v);b>1&&(y/=b,v/=b),Cn.x=y,Cn.y=v,nf.style.transform=`translate(${y*45}px,${v*45}px)`}else u.pointerId===Zs&&(fn+=(u.clientX-pc)*.0065*Ws,Ei=n(Ei+(u.clientY-mc)*.005*Ws,-.25,.9),pc=u.clientX,mc=u.clientY,go=Xt)});function rf(u){u.pointerId===Cn.id&&(Cn.id=null,Cn.x=Cn.y=0,nf.style.transform="",Ks.classList.remove("on"),Ks.style.left="",Ks.style.top=""),u.pointerId===Zs&&(Zs=null)}Qs.addEventListener("pointerup",rf),Qs.addEventListener("pointercancel",rf);function la(u,y,v){let b=document.getElementById(u);if(b.addEventListener("pointerdown",P=>{P.preventDefault(),P.stopPropagation(),oo(),y(b)}),v)for(let P of["pointerup","pointercancel","pointerleave"])b.addEventListener(P,()=>v(b))}la("tFire",u=>{po=!0,u.classList.add("on")},u=>{po=!1,u.classList.remove("on")}),la("tCar",()=>{Mn==="play"&&of()}),la("tGun",()=>vo(X.weapon===1?2:1)),la("tRun",u=>{mo=!mo,u.classList.toggle("on",mo)}),la("tPause",()=>ef());function vo(u){X.weapon=u,document.getElementById("weapon").textContent=u===1?"RIFLE":"ROCKET LAUNCHER",X.gun.r.visible=X.gun.mg.visible=u===1,X.gun.tube.visible=u===2,qt.player&&qt.player.gun&&(qt.player.gunR.visible=qt.player.gunMg.visible=u===1,qt.player.gunTube.visible=u===2),wi(.05,.2,3500,1500)}function af(u){let y=null,v=u;for(let b of jt){if(b.dead)continue;let P=r(b.x,b.y,X.x,X.y);P<v&&(v=P,y=b)}return y}function of(){if(Un>0)return;if(X.car){let y=X.car;for(let v of[y.ang-Math.PI/2,y.ang+Math.PI/2,y.ang+Math.PI,y.ang]){let b=y.x+Math.cos(v)*2.6,P=y.y+Math.sin(v)*2.6;if(!U(b,P,.5)&&!z(b,P)){X.x=b,X.y=P,X.car=null,y.ai=!1,y.st=0,wi(.08,.2,800);return}}return}let u=af(4.8);if(u){if(u.ai||u.cop){let y=u.ang+Math.PI/2,v=dc(u.x+Math.cos(y)*2.4,u.y+Math.sin(y)*2.4);v.state="panic",v.t=6,on.push(v),ho(u.cop?3:1)}u.cop&&(u.cop=!1,u.wasCop=!0),u.ai=!1,u.hadDriver=!1,u.plan=!1,X.car=u,fn=u.ang,wi(.08,.2,800)}}function gm(u){let y=Ys,v=y.KeyA,b=y.KeyD,P=y.KeyW||y.ArrowUp,F=y.KeyS||y.ArrowDown,O=n((P?1:0)-(F?1:0)-Cn.y,-1,1),Y=n((b?1:0)-(v?1:0)+Cn.x,-1,1);if(!Bi&&!Fi){let Se=(ns.x/window.innerWidth-.5)*2;Math.abs(Se)>.6&&(fn+=Math.sign(Se)*(Math.abs(Se)-.6)/.4*2*Ws*u,go=Xt)}if(X.car){let Se=X.car;fo(Se,O>.15?O:O<-.15?-1:0,n(Y+(y.ArrowRight?1:0)-(y.ArrowLeft?1:0),-1,1),u,y.Space),X.x=Se.x,X.y=Se.y,Xt-go>.8&&(fn+=a(Se.speed<-2?Se.ang+Math.PI:Se.ang,fn)*Math.min(1,u*3.2))}else{y.ArrowLeft&&(fn-=u*2.2),y.ArrowRight&&(fn+=u*2.2);let Se=[Math.cos(fn),Math.sin(fn)],Be=[-Math.sin(fn),Math.cos(fn)],Ee=Se[0]*O+Be[0]*Y,Qe=Se[1]*O+Be[1]*Y,qe=Math.hypot(Ee,Qe);qe>1&&(Ee/=qe,Qe/=qe);let $e=(y.ShiftLeft||y.ShiftRight||mo?7.5:4.2)*Math.min(1,qe),Lt=X.x+Ee*$e*u,Ot=X.y+Qe*$e*u;!U(Lt,X.y,.45)&&!z(Lt,X.y)&&(X.x=Lt),!U(X.x,Ot,.45)&&!z(X.x,Ot)&&(X.y=Ot),X.moving=qe>.05?$e:0,qe>.05&&(X.walk+=u*$e*1.6,X.ang=Math.atan2(Qe,Ee))}let A=[Math.cos(fn),Math.sin(fn)],se=[-Math.sin(fn),Math.cos(fn)],de=X.car?0:.7,J=X.x+se[0]*de+A[0]*25,ue=X.y+se[1]*de+A[1]*25;if(X.aim=Math.atan2(ue-X.y,J-X.x),X.fireT-=u,(ns.down&&(Bi||Ts)||po)&&X.fireT<=0){X.aimT=Xt;let Se=X.aim+(X.weapon===1?e(-.012,.012):0),Be=X.car?2.6:.9,Ee=X.x+Math.cos(Se)*Be,Qe=X.y+Math.sin(Se)*Be,qe=X.car?1.5:1.42;if(X.weapon===1)bs.push({x:Ee,y:Qe,h:qe,vx:Math.cos(Se)*170,vy:Math.sin(Se)*170,life:.7,type:"rifle"}),X.fireT=.1,Wu(!1);else{let $e={x:Ee,y:Qe,h:qe,vx:Math.cos(Se)*48,vy:Math.sin(Se)*48,life:2.5,type:"rocket"};$e.mesh=new Le(em,q("#46512f",.7)),G.add($e.mesh),bs.push($e),X.fireT=.9,wi(.35,.3,1200)}ro.position.set(Ee,qe,Qe),ro.intensity=60,Ni({x:Ee,y:qe,z:Qe,life:.05,size:.5,color:"#ffd27a",add:!0});for(let $e of on)r($e.x,$e.y,X.x,X.y)<35&&Math.random()<.6&&ju($e)}let we=Xt-X.aimT<1.2||!X.moving?X.aim:X.ang;X.face+=a(we,X.face)*Math.min(1,u*12),Xt-X.lastHurt>5&&X.hp<100&&(X.hp=Math.min(100,X.hp+5*u))}function gc(u,y){let v=Math.cos(u.ang),b=Math.sin(u.ang),P=y.x-u.x,F=y.y-u.y,O=P*v+F*b,Y=-P*b+F*v,A=4.5-Math.abs(O),se=2-Math.abs(Y);return A<=0||se<=0?null:A<se?{nx:v*Math.sign(O),ny:b*Math.sign(O),ov:A}:{nx:-b*Math.sign(Y),ny:v*Math.sign(Y),ov:se}}function vm(u){for(let y=jt.length-1;y>=0;y--){let v=jt[y];if(v.dead){v.deadT-=u,v.speed*=Math.max(0,1-2*u),v.x+=Math.cos(v.ang)*v.speed*u,v.y+=Math.sin(v.ang)*v.speed*u,(v.h>0||v.vh>0)&&(v.vh-=20*u,v.h+=v.vh*u,v.ang+=(v.spinV||0)*u,v.h<=0&&(v.h=0,v.vh<-4?(v.vh=-v.vh*.3,Xu()):v.vh=0)),Math.random()<u*12&&Ni({x:v.x+e(-1,1),y:1.2+e(0,.5),z:v.y+e(-.6,.6),vx:e(-.4,.4),vy:e(2,3.5),vz:e(-.4,.4),life:e(2,3.4),size:e(1.2,2),grow:1.6,color:i(["#2f2d2b","#45413d"]),alpha:.6,drag:.3,smoke:1}),v.deadT>10&&Math.random()<u*18&&Ni({x:v.x+e(-1.2,1.2),y:1.1+e(0,.4),z:v.y+e(-.6,.6),vx:0,vy:e(1.5,3),vz:0,life:e(.3,.6),size:e(.5,.9),grow:.5,color:i(["#ff9a3a","#ffc34d","#ff6a1f"]),add:!0,drag:.5}),v.deadT<=0&&(Zu(v),jt.splice(y,1),v.cop||(Math.random()<.5?qu(!0):Yu()));continue}v!==X.car&&(v.cop?(pm(v,u),(uo()===0||Un>0)&&r(v.x,v.y,X.x,X.y)>150&&(Zu(v),jt.splice(y,1))):v.ai?dm(v,u):Math.abs(v.speed)>.05&&fo(v,0,0,u))}for(let y=0;y<jt.length;y++)for(let v=y+1;v<jt.length;v++){let b=jt[y],P=jt[v],F=P.x-b.x,O=P.y-b.y;if(F*F+O*O>=30)continue;let Y=b.ai?0:1,A=P.ai?0:1;if(Y+A===0)continue;let se=gc(b,P)||(()=>{let ue=gc(P,b);return ue?{nx:-ue.nx,ny:-ue.ny,ov:ue.ov}:null})();if(!se)continue;let de=Y+A;b.x-=se.nx*se.ov*Y/de,b.y-=se.ny*se.ov*Y/de,P.x+=se.nx*se.ov*A/de,P.y+=se.ny*se.ov*A/de;let J=Math.abs(b.speed)+Math.abs(P.speed);if(J>12){let ue=b===X.car||P===X.car;Xs((b.x+P.x)/2,.8,(b.y+P.y)/2,10),wi(.25,n(J/60,.1,.5),900),ue&&(gi=Math.min(1.2,gi+.3)),qs(b,J*(b===X.car?.35:.8),ue&&b!==X.car),qs(P,J*(P===X.car?.35:.8),ue&&P!==X.car),!b.ai&&!b.dead&&b!==X.car&&P.speed!==0&&(b.speed=P.speed*.4),!P.ai&&!P.dead&&P!==X.car&&b.speed!==0&&(P.speed=b.speed*.4)}Y&&(b.speed*=.5),A&&(P.speed*=.5)}for(let y of jt)if(!(y.dead||Math.abs(y.speed)<4)){for(let v of on)v.state!=="down"&&r(y.x,y.y,v.x,v.y)<2.1&&lo(v,Math.cos(y.ang)*y.speed*.9+e(-2,2),Math.sin(y.ang)*y.speed*.9+e(-2,2),y===X.car);if(Mn==="play"&&!X.car&&Un<=0&&r(y.x,y.y,X.x,X.y)<2.1){co(Math.abs(y.speed)*1.3);let v=Math.atan2(X.y-y.y,X.x-y.x),b=X.x+Math.cos(v)*1.2,P=X.y+Math.sin(v)*1.2;U(b,P,.45)||(X.x=b,X.y=P)}}if(!X.car)for(let y of jt){if(y.dead&&y.h>0)continue;let v=gc(y,{x:X.x,y:X.y});if(v&&v.ov>0){let b=X.x+v.nx*Math.min(v.ov,.3),P=X.y+v.ny*Math.min(v.ov,.3);U(b,P,.45)||(X.x=b,X.y=P)}}for(let y=on.length-1;y>=0;y--){let v=on[y];if(v.state==="down"||v.state==="getup"){let O=v.x+v.vx*u,Y=v.y+v.vy*u;U(O,Y,.4)||z(O,Y)?(v.vx*=-.3,v.vy*=-.3):(v.x=O,v.y=Y),v.vx*=Math.max(0,1-3.5*u),v.vy*=Math.max(0,1-3.5*u),v.state==="down"?(v.fall=Math.min(1,v.fall+u*3.2),v.t-=u,v.t<=0&&(v.state="getup")):(v.fall-=u*1.6,v.fall<=0&&(v.fall=0,v.state="panic",v.t=e(5,8),v.ang=v.face+Math.PI));continue}let b=v.spd;if(v.state==="panic"){let O=Math.atan2(v.y-X.y,v.x-X.x);v.ang+=a(O,v.ang)*Math.min(1,u*3),b=4.8,v.t-=u,v.t<=0&&(v.state="walk",v.t=e(2,6),v.ang=Math.round(v.ang/(Math.PI/2))*Math.PI/2)}else v.t-=u,v.t<=0&&(v.t=e(3,8),Math.random()<.5&&(v.ang+=i([-1,1])*Math.PI/2));let P=v.x+Math.cos(v.ang)*b*u,F=v.y+Math.sin(v.ang)*b*u;U(P,F,.4)||z(P,F)?v.ang+=i([Math.PI/2,-Math.PI/2,Math.PI]):(v.x=P,v.y=F),v.walk+=u*b*1.9}for(;on.length>75;){let y=-1,v=0;for(let b=0;b<on.length;b++){let P=r(on[b].x,on[b].y,X.x,X.y);P>v&&on[b].state==="walk"&&(v=P,y=b)}if(y<0)break;cm(y)}on.length<50&&Math.random()<u&&Qu(!0);for(let y=bs.length-1;y>=0;y--){let v=bs[y],b=v.x,P=v.y;v.x+=v.vx*u,v.y+=v.vy*u,v.life-=u;let F=!1;v.type==="rocket"&&Math.random()<.9&&Ni({x:b,y:v.h,z:P,vx:e(-.3,.3),vy:e(.2,.6),vz:e(-.3,.3),life:e(.8,1.4),size:.6,grow:1.5,color:"#bdb7ae",alpha:.55,drag:1,smoke:1});for(let O=1;O<=4&&!F;O++){let Y=b+(v.x-b)*O/4,A=P+(v.y-P)*O/4;(U(Y,A,.05)||z(Y,A))&&(F=!0,v.x=Y,v.y=A,v.type==="rocket"?oa(Y,A,8,!0):(Xs(Y,v.h,A,5),Ju(Y,v.h,A,2,"#8f8a82")))}if(!F&&v.type==="cop"){if(Un<=0&&Mn==="play"){let O=X.car||X,Y=X.car?2:.55;o(O.x,O.y,b,P,v.x,v.y)<Y&&(F=!0,co(7),Xs(v.x,1.2,v.y,4))}}else if(!F){for(let O of on)if(O.state!=="down"&&o(O.x,O.y,b,P,v.x,v.y)<.55){F=!0,v.type==="rocket"?oa(O.x,O.y,8,!0):lo(O,v.vx*.03,v.vy*.03,!0);break}if(!F){for(let O of jt)if(!(O.dead||O===X.car)&&o(O.x,O.y,b,P,v.x,v.y)<2.1){F=!0,v.type==="rocket"?oa(v.x,v.y,8,!0):qs(O,12,!0);break}}}!F&&v.life<=0&&v.type==="rocket"&&(oa(v.x,v.y,8,!0),F=!0),F||v.life<=0?(v.mesh&&G.remove(v.mesh),bs.splice(y,1)):(v.px=b,v.py=P)}}function xm(u){Xt-lc>10&&(_s=Math.max(0,_s-u*.5));let y=Un>0?0:uo(),v=0;for(let b of jt)b.cop&&!b.dead&&v++;cc-=u,v<y&&cc<=0&&(mm(),cc=e(2,4))}let lf=new D;function cf(u,y,v,b,P,F,O){u.g.position.set(y,b,v),u.g.rotation.set(0,-P,0);let Y=Math.sin(F)*O,A=Math.cos(F);u.legL.rotation.z=Y,u.legR.rotation.z=-Y,u.kneeL.rotation.z=-Math.max(0,A)*O*1.4,u.kneeR.rotation.z=-Math.max(0,-A)*O*1.4,u.armL.rotation.set(0,0,-Y*.75),u.armR.rotation.set(0,0,Y*.75),u.elbL.rotation.z=.18+O*.9,u.elbR.rotation.z=.18+O*.9,u.body.position.y=Math.abs(Math.sin(F))*.035*O,u.body.rotation.x=0}function ym(u){let y=j.position.x,v=j.position.z,b=185*185,P=85*85;for(let A of jt){let se=A.m.g,de=(A.x-y)**2+(A.y-v)**2<b;if(se.visible=de,!!de){if(se.position.set(A.x,A.h+_(A.x,A.y)*.6,A.y),A.dead)se.rotation.set(A.tiltX*(A.h>0?1.6:1),-A.ang,A.tiltZ*(A.h>0?1.6:1));else{let J=n(-A.st*A.speed*.006,-.07,.07),ue=n(-A.acc*.004,-.04,.04);A.roll+=(J-A.roll)*Math.min(1,u*6),A.pit+=(ue-A.pit)*Math.min(1,u*6),se.rotation.set(A.roll,-A.ang,A.pit)}A.wheel-=A.speed*u/.38;for(let J=0;J<4;J++){let ue=A.m.wheels[J];ue.rotation.z=A.wheel,ue.rotation.y=J<2?-A.st*.45:0}}}for(let A of on){let se=A.m.g,de=(A.x-y)**2+(A.y-v)**2<P;if(se.visible=de,A.hd)if(A.state==="down"||A.state==="getup"||!de)Tc(A);else{se.visible=!1,Om(A,u);continue}if(!de)continue;let J=_(A.x,A.y);A.fall>0?(se.position.set(A.x,J+A.fall*.2,A.y),se.rotation.set(0,-A.face,A.fall*Math.PI/2*.97),A.m.armL.rotation.set(-A.fall*.7,0,A.fall*2.3),A.m.armR.rotation.set(A.fall*.5,0,A.fall*1.9),A.m.elbL.rotation.z=A.fall*.6,A.m.elbR.rotation.z=A.fall*.2,A.m.legL.rotation.z=A.fall*.3,A.m.legR.rotation.z=-A.fall*.05,A.m.kneeL.rotation.z=-A.fall*.7,A.m.kneeR.rotation.z=-A.fall*.15,A.m.body.position.y=0):cf(A.m,A.x,A.y,J,A.ang,A.walk,A.state==="panic"?.85:.45)}let F=X.m;F.g.visible=!X.car&&Un<=0,qt.player&&(qt.player.obj.visible=F.g.visible,F.g.visible&&(F.g.visible=!1,Hm(u))),zm(),F.g.visible&&(cf(F,X.x,X.y,_(X.x,X.y),X.face,X.walk,X.moving?X.moving>5?.8:.5:0),F.armR.rotation.set(0,0,Math.PI/2),F.elbR.rotation.z=0,F.armL.rotation.set(-.62,0,1.2),F.elbL.rotation.z=.55);let O=0;for(let A of bs){if(A.type==="rocket"){A.mesh.position.set(A.x,A.h,A.y),A.mesh.rotation.y=-Math.atan2(A.vy,A.vx),Ni({x:A.x-A.vx*.012,y:A.h,z:A.y-A.vy*.012,life:.06,size:.35,color:"#ffb347",add:!0});continue}if(O>=aa.length)continue;let se=aa[O++],de=Math.min(7,r(A.x,A.y,A.px??A.x,A.py??A.y)*1.5)||1,J=Math.atan2(A.vy,A.vx);se.visible=!0,se.position.set(A.x-Math.cos(J)*de/2,A.h,A.y-Math.sin(J)*de/2),se.rotation.set(0,-J,0),se.scale.set(de,1,1),se.material.color.set(A.type==="cop"?"#ff9a8a":"#ffe7a3")}for(;O<aa.length;O++)aa[O].visible=!1;for(let A of so){if(A.life<=0){A.s.visible=!1;continue}if(A.life-=u,A.life<=0){A.s.visible=!1;continue}let se=Math.max(0,1-A.drag*u);A.vx*=se,A.vz*=se,A.vy=A.vy*se-A.grav*u,A.x+=A.vx*u,A.y+=A.vy*u,A.z+=A.vz*u,A.y<.05&&A.grav&&(A.y=.05,A.vy*=-.3),A.size+=A.grow*u;let de=A.life/A.max;A.s.position.set(A.x,A.y,A.z),A.s.scale.set(A.size,A.size,1),A.s.material.opacity=A.alpha*Math.min(1,de*1.8)}if(_e.visible&&dn){let A=j.position.x,se=j.position.z;for(let de=0;de<Kt.length;de++){let J=Kt[de],ue=A-J[0],we=se-J[1],Se=ue*ue+we*we;Se>160*160?pt.set(0,0,0):pt.set(1,1,n(Math.sqrt(Se)/22,.35,1)),gt.set(J[0],.19,J[1]),Pt.setFromAxisAngle(ea,Math.atan2(ue,we)),dt.compose(gt,Pt,pt),dn.setMatrixAt(de,dt)}dn.instanceMatrix.needsUpdate=!0}if(Me.visible&&Bt){let A=j.position.x,se=j.position.y,de=j.position.z;Pt.identity();for(let J=0;J<Kt.length;J++){let ue=Kt[J],Se=Math.hypot(A-ue[0],de-ue[1])<4.5&&se<7?0:1;gt.set(ue[0],6.5,ue[1]),pt.set(Se,Se,Se),dt.compose(gt,Pt,pt),Bt.setMatrixAt(J,dt)}Bt.instanceMatrix.needsUpdate=!0}ro.intensity*=Math.max(0,1-30*u),ao.intensity*=Math.max(0,1-4*u);let Y=Math.floor(Xt*5)%2;ks.emissiveIntensity=Y?5:.2,Rn.emissiveIntensity=Y?.2:5}let Js=4.5,vc=0,is=fn;function Mm(u){if(Mn!=="play"){vc+=u*.05;let b=170;j.position.set(M+Math.cos(vc)*b,62,M+Math.sin(vc)*b),j.lookAt(M,8,M)}else{is+=a(fn,is)*Math.min(1,u*(X.car?10:25));let b=!!X.car,P=[Math.cos(is),Math.sin(is)],F=[-Math.sin(is),Math.cos(is)],O={x:X.x,y:b?1.8:1.6,z:X.y},Y=b?8.8:4.5,A=b?0:.7,se=Y;for(let Ee=.5;Ee<=Y;Ee+=.35){let Qe=O.x+F[0]*A-P[0]*Ee*Math.cos(Ei),qe=O.z+F[1]*A-P[1]*Ee*Math.cos(Ei);if(U(Qe,qe,.35)){se=Math.max(.6,Ee-.4);break}}Js+=(se-Js)*Math.min(1,u*(se<Js?20:4));let de=O.x+F[0]*A-P[0]*Js*Math.cos(Ei),J=O.z+F[1]*A-P[1]*Js*Math.cos(Ei),ue=O.y+.3+Js*Math.sin(Ei)+(b?.7:0),we=(Math.random()-.5)*gi*.4,Se=(Math.random()-.5)*gi*.4;j.position.set(de+we,Math.max(.4,ue)+Se,J),lf.set(O.x+F[0]*A+P[0]*25,O.y+.1-Math.tan(Ei)*10,O.z+F[1]*A+P[1]*25),j.lookAt(lf);let Be=b?62+n(Math.abs(X.car.speed)-15,0,20)*.5:62;j.fov+=(Be-j.fov)*Math.min(1,u*3),j.updateProjectionMatrix()}gi*=Math.max(0,1-5*u),Ae.position.copy(j.position);let y=Mn==="play"?X.x:M,v=Mn==="play"?X.y:M;je.target.position.set(Math.round(y),0,Math.round(v)),je.position.copy(je.target.position).addScaledVector(nt,220)}let Sm=document.getElementById("mini"),Vt=Sm.getContext("2d"),xo=document.createElement("canvas");xo.width=xo.height=1200;{let u=xo.getContext("2d"),y=1200/T;u.fillStyle="#55585e",u.fillRect(0,0,1200,1200);for(let v of L)u.fillStyle=v.park?"#4f7f3c":"#8d8a83",u.fillRect((v.x-g)*y,(v.y-g)*y,v.s*y,v.s*y);for(let v of N)u.fillStyle=v.label==="HOSPITAL"?"#e2343f":v.label==="BANK"?"#2f8a4f":v.label==="PIZZA"?"#e0a040":"#c9c4b8",u.fillRect((v.x-g)*y,(v.y-g)*y,v.w*y,v.d*y)}function bm(){let y=1.2857142857142858;Vt.save(),Vt.fillStyle="#264f63",Vt.fillRect(0,0,360,360),Vt.translate(180,180),Vt.rotate(-is-Math.PI/2),Vt.scale(y,y),Vt.translate(-(X.x-g),-(X.y-g)),Vt.drawImage(xo,0,0,1200,1200,0,0,T,T);for(let v of jt)v.dead||!v.cop||(Vt.fillStyle=Math.floor(Xt*5)%2?"#ff2d4a":"#3b6bff",Vt.beginPath(),Vt.arc(v.x-g,v.y-g,5,0,6.28),Vt.fill());Vt.restore(),Vt.save(),Vt.translate(180,180),Vt.rotate((X.car?X.car.ang:X.face)-is),Vt.fillStyle="#fff",Vt.strokeStyle="#000",Vt.lineWidth=3,Vt.beginPath(),Vt.moveTo(16,0),Vt.lineTo(-12,11),Vt.lineTo(-6,0),Vt.lineTo(-12,-11),Vt.closePath(),Vt.stroke(),Vt.fill(),Vt.restore()}let _m=document.getElementById("score"),Tm=document.getElementById("hp"),wm=document.getElementById("hpbar"),hf=document.getElementById("stars"),Em=document.getElementById("hint"),xc=document.getElementById("msg"),uf=document.getElementById("speed"),Am=document.getElementById("bonus"),ff=document.getElementById("prompt"),df=document.getElementById("lockhint"),Rm=document.getElementById("cross"),Cm=[...hf.children],pf="";function Pm(u){xc.textContent=u,xc.hidden=!1}function Lm(){xc.hidden=!0}function Im(u){hc-=u,hc<=0&&Am.classList.remove("show");let y=Mn==="play",v=y&&!X.car&&Un<=0?af(4.8):null;ff.hidden=!v,v&&(ff.textContent=Fi?v.cop?"TAP CAR TO STEAL THE COP CAR":"TAP CAR TO DRIVE":v.cop?"PRESS E TO STEAL THE COP CAR":"PRESS E TO DRIVE"),df.hidden=!y||Fi||Bi||Ts&&Xt-Mc>6,Rm.hidden=!y||!(Bi||Ts||Fi),Qs.hidden=!(y&&Fi);let b=Un>0?0:uo(),P=X.car,F=P?Math.max(0,P.hp/(P.wasCop?130:100)*100):X.hp,O=P?Math.round(Math.abs(P.speed)*3.6):0,Y=oc+"|"+b+"|"+Math.round(F)+"|"+!!P+"|"+O+"|"+Ti;Y!==pf&&(pf=Y,_m.textContent="$"+oc.toLocaleString(),Cm.forEach((A,se)=>A.classList.toggle("on",se<b)),hf.classList.toggle("flash",b>0&&Xt-lc<10),Tm.style.width=n(F,0,100)+"%",wm.classList.toggle("car",!!P),uf.hidden=!P,P&&(uf.innerHTML=O+" <small>KM/H</small>"),Em.textContent=(P?"E get out \xB7 SPACE handbrake":"E steal a car \xB7 SHIFT sprint")+" \xB7 P pause"+(Ti?" \xB7 sound off":""))}function Dm(){if(!ct||!Vs)return;ca?ca.gain.setTargetAtTime(js.visible&&!Ti&&Mn==="play"?.06:0,ct.currentTime,.4):js.visible&&Mn==="play"&&gf(!0);let u=1e9;for(let P of jt)P.cop&&!P.dead&&(u=Math.min(u,r(P.x,P.y,X.x,X.y)));let y=Mn==="play"&&!Ti&&u<200?n(.05*(1-u/200),0,.05):0;Vs.g.gain.setTargetAtTime(y,ct.currentTime,.1),Vs.o.frequency.setTargetAtTime(760+380*(.5+.5*Math.sin(Xt*2.2)),ct.currentTime,.05);let v=X.car,b=Mn==="play"&&v&&!Ti?.03:0;Gs.g.gain.setTargetAtTime(b,ct.currentTime,.1),v&&(Gs.o.frequency.setTargetAtTime(38+Math.abs(v.speed)*2.6,ct.currentTime,.05),Gs.f.frequency.setTargetAtTime(300+Math.abs(v.speed)*25,ct.currentTime,.05))}let yo=0,yc=0,mf=!0,Mc=0;function Um(u){if(yo+=u,yc++,yo<2.5)return;let y=yc/yo;yo=0,yc=0,y<38?B>.8?(B=Math.max(.8,B-.15),K.setPixelRatio(B),et()):We>=3&&y<34?(We=2,st()):We===2&&y<30?(We=1,st()):mf&&y<27&&(mf=!1,K.shadowMap.enabled=!1,je.castShadow=!1,G.traverse(v=>{let b=v.material;b&&(Array.isArray(b)?b:[b]).forEach(P=>P.needsUpdate=!0)})):y>57&&B<ae&&(B=Math.min(ae,B+.1),K.setPixelRatio(B),et())}let js=(()=>{let y=new Float32Array(19200),v=new Float32Array(3200*2);for(let O=0;O<3200;O++){let Y=e(0,80),A=e(0,32),se=e(0,80);y.set([Y,A,se,Y,A,se],O*6),v[O*2+1]=1}let b=new Qt;b.setAttribute("position",new tn(y,3)),b.setAttribute("tail",new tn(v,1));let P=new Ut({transparent:!0,depthWrite:!1,uniforms:{center:{value:new D},time:{value:0}},vertexShader:`attribute float tail;uniform vec3 center;uniform float time;varying float vA;
      void main(){vec3 p=position;float fall=mod(p.y-time*24.,32.);
        vec3 w=vec3(center.x+mod(p.x-center.x+time*2.,80.)-40.,center.y-8.+fall,center.z+mod(p.z-center.z,80.)-40.);
        w+=vec3(-.08,1.0,0.)*tail;vA=1.-tail*.85;gl_Position=projectionMatrix*viewMatrix*vec4(w,1.);}`,fragmentShader:"varying float vA;void main(){gl_FragColor=vec4(.72,.76,.84,.32*vA);}"}),F=new zr(b,P);return F.frustumCulled=!1,F.visible=!1,F.renderOrder=5,G.add(F),F})(),ca=null;function gf(u){if(ct){if(!ca){let y=ct.sampleRate*2,v=ct.createBuffer(1,y,ct.sampleRate),b=v.getChannelData(0);for(let Y=0;Y<y;Y++)b[Y]=Math.random()*2-1;let P=ct.createBufferSource();P.buffer=v,P.loop=!0;let F=ct.createBiquadFilter();F.type="bandpass",F.frequency.value=2600,F.Q.value=.5;let O=ct.createGain();O.gain.value=0,P.connect(F).connect(O).connect(ct.destination),P.start(),ca=O}ca.gain.setTargetAtTime(u&&!Ti&&Mn==="play"?.06:0,ct.currentTime,.4)}}let Nm={evening:{top:"#0a1428",mid:"#4f4f64",bot:"#1f2126",glow:"#ff7436",glowAmt:1.7,disk:3,cloud:"#a9775e",cloudDark:"#22242f",sun:[-.72,.05,-.69],light:[-.7,.3,-.65],sunCol:"#ff9560",sunI:1.25,hs:"#5d6c96",hg:"#2a2521",hI:.6,fog:"#30323d",fn:45,ff:270,exp:1.2,gEnv:1.15,fac:1.1,shop:1.2,sign:1.8,lamp:2.6,pool:.42,shopH:.7,head:5,tail:3,beam:.42,rough:.85,cone:.2,streak:.3},rain:{top:"#0a0f18",mid:"#2b2f39",bot:"#1c1e23",glow:"#c0603a",glowAmt:.35,disk:0,cloud:"#3d3f48",cloudDark:"#14161c",cover:.3,sun:[-.72,.05,-.69],light:[-.6,.45,-.6],sunCol:"#8b9bc0",sunI:.45,hs:"#4c5a7a",hg:"#24221f",hI:.75,fog:"#262930",fn:25,ff:200,exp:1.3,gEnv:1.7,rough:.5,fac:1,shop:1.3,sign:1.9,lamp:2.8,pool:.5,head:5.5,tail:3.5,beam:.5,cone:.32,streak:.65,rain:1},day:{top:"#2a5fa6",mid:"#d4d4ce",bot:"#c9c9c4",glow:"#ffc890",glowAmt:.5,disk:7,cloud:"#f1ede5",cloudDark:"#868a92",sun:[-.62,.42,-.48],light:[-.62,.42,-.48],sunCol:"#ffe2b8",sunI:3.9,hs:"#c4dcff",hg:"#5e5246",hI:.35,fog:"#c9cbcb",fn:80,ff:340,exp:1.05,gEnv:.35,fac:0,shop:.08,sign:.35,lamp:.3,pool:0,head:.8,tail:.6,beam:0,rough:1,cone:0,streak:0,day:1}},ha="evening";function vf(u,y){u.top.value.set(y.top),u.mid.value.set(y.mid),u.bot.value.set(y.bot),u.glowCol.value.set(y.glow),u.glowAmt.value=y.glowAmt,u.disk.value=y.disk,u.cloudCol.value.set(y.cloud),u.cloudDark.value.set(y.cloudDark),u.cover.value=y.cover||0,u.sunDir.value.set(...y.sun).normalize()}function $s(u){ha=u;let y=Nm[u];At.set(...y.sun).normalize(),nt.set(...y.light).normalize(),vf(Ae.material.uniforms,y),Je[u]||(vf(fe.material.uniforms,y),Je[u]=le.fromScene(ge,.03).texture),G.environment=Pe[u]||Je[u],je.color.set(y.sunCol),je.intensity=y.sunI,He.color.set(y.hs),He.groundColor.set(y.hg),He.intensity=y.hI,G.fog.color.set(y.fog),G.fog.near=y.fn,G.fog.far=y.ff,K.toneMappingExposure=y.exp,yn.envMapIntensity=Pe[u]?y.gEnv*.38:y.gEnv;for(let b in _t)_t[b].emissiveIntensity=y.fac;for(let b of ht)b.emissiveIntensity=Pe[u]&&y.shopH!==void 0?y.shopH:y.shop;for(let b of ye)b.emissiveIntensity=y.sign;ti.emissiveIntensity=y.lamp,$r.opacity=y.pool,$r.visible=y.pool>0,ia.emissiveIntensity=y.head,ts.emissiveIntensity=y.tail,Ss.opacity=y.beam,Ss.visible=y.beam>0,yn.roughness=y.rough,Me.uniforms.op.value=y.cone,Me.visible=y.cone>0,_e.opacity=y.streak,_e.visible=y.streak>0,js.visible=!!y.rain,gf(!!y.rain);let v=window.__skyline;v&&(v.map=y.day?v.userData.day:v.userData.eve,v.color.set(y.day?"#d7dce0":"#ffffff"),v.needsUpdate=!0),document.getElementById("timeBtn").textContent="TIME: "+{evening:"EVENING",rain:"RAINY NIGHT",day:"DAYTIME"}[u]}let xf={evening:"rain",rain:"day",day:"evening"};document.getElementById("timeBtn").addEventListener("click",()=>$s(xf[ha])),$s("evening");let qt={ready:!1,pool:[],player:null,clips:null,lastAssign:0},yf=new vn,Mf=new vn,Sf=new D,Sc=new D,Mo=new D(0,1,0),Fm=["#2b3a55","#1c1c1f","#4a4f57","#3d4a32","#5a2a2e","#6b5a45","#24324a","#7a7468","#3a2f4a"];function Bm(u,y,v){return u.traverse(b=>{if(b.isMesh){b.castShadow=!0,b.receiveShadow=!0,b.frustumCulled=!1;let P=b.material=b.material.clone();if(P.envMapIntensity=.5,P.metalness=0,P.metalnessMap=null,P.roughness=Math.max(P.roughness,.75),y&&P.color.copy(y),v){let F=new Ue(i(Fm));P.onBeforeCompile=O=>{O.uniforms.uCloth={value:F},O.fragmentShader=`uniform vec3 uCloth;
`+O.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
        {vec3 c=diffuseColor.rgb;float mx=max(c.r,max(c.g,c.b)),mn=min(c.r,min(c.g,c.b));float sat=(mx-mn)/(mx+1e-4);
         float w=smoothstep(.55,.75,sat)*smoothstep(.45,.6,c.g/(c.r+1e-4));float lum=dot(c,vec3(.3,.59,.11));
         diffuseColor.rgb=mix(c,uCloth*(.35+lum*1.6),w);}`)},P.customProgramCacheKey=()=>"cloth"}P.needsUpdate=!0}}),u}function bc(u,y,v){let b=A=>{let se={};return A.traverse(de=>{se[de.name]=de.quaternion.clone()}),se},P=b(y),F=b(v),O=new vn,Y=new vn;return u.map(A=>{let se=[];for(let de of A.tracks){let[J,ue]=de.name.split(".");if(ue==="position")continue;let we=F[J]?J:J.replace(/^mixamorig/,"");if(ue!=="quaternion"||!P[J]||!F[we])continue;let Se=F[we].clone().multiply(P[J].clone().invert()),Be=de.values.slice();for(let Ee=0;Ee<Be.length;Ee+=4)O.fromArray(Be,Ee),Y.copy(Se).multiply(O),Y.toArray(Be,Ee);se.push(new pi(we+".quaternion",de.times,Be))}return new vs(A.name,A.duration,se)})}function _c(u,y,v,b){let P=Bm(qp(u),y,b);P.visible=!1,G.add(P);let F=new Vl(P),O={};for(let Y of v||qt.clips)O[Y.name]=F.clipAction(Y);return{obj:P,mixer:F,acts:O,cur:null,civ:null,yawOff:u===qt.solScene?-Math.PI/2:Math.PI/2}}function ua(u,y,v){let b=u.acts[y];b&&(b.timeScale=v,u.cur!==b&&(b.reset().setEffectiveWeight(1).play(),u.cur&&u.cur.crossFadeTo(b,.25,!1),u.cur=b))}function Tc(u){let y=u.hd;y&&(y.civ=null,y.obj.visible=!1,u.hd=null)}function Om(u,y){let v=u.hd;v.obj.visible=!0,v.obj.position.set(u.x,_(u.x,u.y),u.y),v.obj.rotation.y=-u.ang+v.yawOff,u.state==="panic"?ua(v,"Run",1.25):ua(v,"Walk",u.spd/1.35),v.mixer.update(y)}function zm(){if(!qt.ready||Xt-qt.lastAssign<.3)return;qt.lastAssign=Xt;let u=j.position.x,y=j.position.z,v=[];for(let P of on){if(P.state!=="walk"&&P.state!=="panic")continue;let F=(P.x-u)**2+(P.y-y)**2;F<48*48&&v.push([F,P])}v.sort((P,F)=>P[0]-F[0]);let b=new Set(v.slice(0,qt.pool.length).map(P=>P[1]));for(let P of qt.pool)P.civ&&!b.has(P.civ)&&Tc(P.civ);for(let P of b){if(P.hd)continue;let F=qt.pool.find(O=>!O.civ&&O.kind===P.hdKind)||qt.pool.find(O=>!O.civ);if(!F)break;F.civ=P,P.hd=F,F.cur=null;for(let O in F.acts)F.acts[O].stop()}}function Hm(u){let y=qt.player,v=y.obj;v.visible=!0,v.position.set(X.x,_(X.x,X.y),X.y),v.rotation.y=-X.face+y.yawOff,X.moving?X.moving>5?ua(y,"Run",X.moving/6.2):ua(y,"Walk",X.moving/1.6):ua(y,"Idle",1),y.mixer.update(u),v.updateMatrixWorld(!0);let b=Sf.set(Math.cos(X.aim),0,Math.sin(X.aim)),P=(O,Y)=>{O&&(O.parent.getWorldQuaternion(Mf),yf.setFromUnitVectors(Mo,Y),O.quaternion.copy(Mf.invert().multiply(yf)),O.updateMatrixWorld(!0))},F=y.bones;P(F.rArm,Sc.copy(b).applyAxisAngle(Mo,-.25).normalize()),F.rFore&&(F.rFore.quaternion.identity(),F.rFore.updateMatrixWorld(!0)),P(F.lArm,Sc.copy(b).applyAxisAngle(Mo,.35).add(Sf.set(0,-.1,0)).normalize()),b.set(Math.cos(X.aim),0,Math.sin(X.aim)),F.lFore&&P(F.lFore,Sc.copy(b).applyAxisAngle(Mo,-.75).normalize())}function fa(u,y){let v=null;return u.traverse(b=>{!v&&b.isBone&&b.name.endsWith(y)&&(v=b)}),v}(function(){let y=document.getElementById("hdstat"),v={},b=0,P=0,F=()=>{y&&(y.textContent=P<b?`Loading HD graphics\u2026 ${Math.round(P/b*100)}%`:"HD graphics loaded")},O=J=>(b++,F(),J.then(ue=>(P++,F(),ue)).catch(ue=>(P++,F(),console.warn("HD asset failed",ue),null))),Y=new Ql,A=new Jl,se=new Gr,de=(J,ue)=>new Promise((we,Se)=>J.load(ue,we,void 0,Se));O(de(A,"assets/venice_sunset.wasm")).then(J=>{J&&(J.mapping=Pr,Pe.evening=le.fromEquirectangular(J).texture,J.dispose(),$s(ha))}),O(de(A,"assets/overpass.wasm")).then(J=>{J&&(J.mapping=Pr,Pe.day=le.fromEquirectangular(J).texture,J.dispose(),$s(ha))}),O(de(se,"assets/brick.jpg")).then(J=>{if(!J)return;let ue=Ft("brick",J.image),we=_t.brick;we.map.dispose(),we.emissiveMap.dispose(),we.map=ue.t,we.emissiveMap=ue.et,we.needsUpdate=!0}),O(de(se,"assets/grass.jpg")).then(J=>{J&&(J.colorSpace=Wt,J.wrapS=J.wrapT=Hn,J.anisotropy=me,Fe.map=J,Fe.color.set("#c9d2b8"),Fe.needsUpdate=!0)}),O(de(se,"assets/waternormals.jpg")).then(J=>{J&&(J.wrapS=J.wrapT=Hn,J.repeat.set(90,90),V.normalMap=J,V.normalScale.set(.6,.6),V.needsUpdate=!0,Tt=J)}),O(de(se,"assets/smoke1.png")).then(J=>{J&&(J.colorSpace=Wt,ac=J)}),Promise.all([O(de(Y,"assets/soldier.wasm")),O(de(Y,"assets/woman.wasm")),O(de(Y,"assets/hero.wasm")),O(de(Y,"assets/man.wasm"))]).then(([J,ue,we,Se])=>{if(!J)return;qt.solScene=J.scene,qt.clips=J.animations.filter(xt=>["Idle","Walk","Run"].includes(xt.name));for(let xt of qt.clips)xt.tracks=xt.tracks.filter(wt=>!/Hips\.position$/.test(wt.name)||!0);let Be=we?bc(qt.clips,J.scene,we.scene):null,Ee=we?_c(we.scene,null,Be):_c(J.scene,null),Qe=X.gun.r.parent,qe=fa(Ee.obj,"RightHand");if(qe){Ee.obj.updateMatrixWorld(!0);let xt=qe.getWorldScale(new D).x||1,wt=Qe.clone();wt.scale.setScalar(1/xt),wt.rotation.set(0,0,0),wt.position.set(0,0,0),wt.children.forEach(Pn=>{Pn.position.y+=.36}),qe.add(wt),Ee.gun=wt,Ee.gunR=wt.children[0],Ee.gunMg=wt.children[1],Ee.gunTube=wt.children[2]}Ee.bones={rArm:fa(Ee.obj,"RightArm"),rFore:fa(Ee.obj,"RightForeArm"),lArm:fa(Ee.obj,"LeftArm"),lFore:fa(Ee.obj,"LeftForeArm")},qt.player=Ee;let $e=["#ffffff","#e8e2da","#d6dde6","#f0e6dc","#dcdcdc","#efe6e6","#e2e8dc"].map(xt=>new Ue(xt)),Lt=ue?bc(qt.clips,J.scene,ue.scene):null,Ot=Se?bc(qt.clips,J.scene,Se.scene):null;for(let xt=0;xt<12;xt++){let wt=ue&&(xt%3!==2||!Se),Pn=wt?ue.scene:Se?Se.scene:J.scene,vi=_c(Pn,i($e),wt?Lt:Se?Ot:null,wt);vi.kind=wt?"w":"m",qt.pool.push(vi)}for(let xt of on)xt.hdKind=Math.random()<.66?"w":"m";qt.ready=!0})})(),window.__G={player:X,HD:qt,civs:on,cars:jt,get quality(){return We},set quality(u){We=u,st()},setTime:u=>$s(u),get camYaw(){return fn},set camYaw(u){fn=u}};let bf=performance.now();function _f(u){let y=(u-bf)/1e3;bf=u;let v=Math.min(.25,Math.max(0,y)),b=v;for(;v>1e-4;){let F=Math.min(.034,v);v-=F,Xt+=F,Mn==="play"&&(Un>0?(Un-=F,Un<=0&&um()):gm(F),xm(F)),vm(F)}let P=Math.max(b,1e-4);Mm(P),ym(P),ft(),bm(),Im(P),Dm(),y<1&&Um(y),requestAnimationFrame(_f)}requestAnimationFrame(_f)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

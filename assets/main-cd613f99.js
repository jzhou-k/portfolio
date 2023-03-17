(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var gl={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},no={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},ef=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Ps={CSS:{},springs:{}};function Gi(n,e,t){return Math.min(Math.max(n,e),t)}function Wr(n,e){return n.indexOf(e)>-1}function oa(n,e){return n.apply(null,e)}var Ve={arr:function(n){return Array.isArray(n)},obj:function(n){return Wr(Object.prototype.toString.call(n),"Object")},pth:function(n){return Ve.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||Ve.svg(n)},str:function(n){return typeof n=="string"},fnc:function(n){return typeof n=="function"},und:function(n){return typeof n>"u"},nil:function(n){return Ve.und(n)||n===null},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return Ve.hex(n)||Ve.rgb(n)||Ve.hsl(n)},key:function(n){return!gl.hasOwnProperty(n)&&!no.hasOwnProperty(n)&&n!=="targets"&&n!=="keyframes"}};function vl(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function _l(n,e){var t=vl(n),i=Gi(Ve.und(t[0])?1:t[0],.1,100),r=Gi(Ve.und(t[1])?100:t[1],.1,100),a=Gi(Ve.und(t[2])?10:t[2],.1,100),c=Gi(Ve.und(t[3])?0:t[3],.1,100),l=Math.sqrt(r/i),f=a/(2*Math.sqrt(r*i)),d=f<1?l*Math.sqrt(1-f*f):0,p=1,_=f<1?(f*l+-c)/d:-c+l;function g(S){var v=e?e*S/1e3:S;return f<1?v=Math.exp(-v*f*l)*(p*Math.cos(d*v)+_*Math.sin(d*v)):v=(p+_*v)*Math.exp(-v*l),S===0||S===1?S:1-v}function M(){var S=Ps.springs[n];if(S)return S;for(var v=1/6,x=0,T=0;;)if(x+=v,g(x)===1){if(T++,T>=16)break}else T=0;var P=x*v*1e3;return Ps.springs[n]=P,P}return e?g:M}function tf(n){return n===void 0&&(n=10),function(e){return Math.ceil(Gi(e,1e-6,1)*n)*(1/n)}}var nf=function(){var n=11,e=1/(n-1);function t(p,_){return 1-3*_+3*p}function i(p,_){return 3*_-6*p}function r(p){return 3*p}function a(p,_,g){return((t(_,g)*p+i(_,g))*p+r(_))*p}function c(p,_,g){return 3*t(_,g)*p*p+2*i(_,g)*p+r(_)}function l(p,_,g,M,S){var v,x,T=0;do x=_+(g-_)/2,v=a(x,M,S)-p,v>0?g=x:_=x;while(Math.abs(v)>1e-7&&++T<10);return x}function f(p,_,g,M){for(var S=0;S<4;++S){var v=c(_,g,M);if(v===0)return _;var x=a(_,g,M)-p;_-=x/v}return _}function d(p,_,g,M){if(!(0<=p&&p<=1&&0<=g&&g<=1))return;var S=new Float32Array(n);if(p!==_||g!==M)for(var v=0;v<n;++v)S[v]=a(v*e,p,g);function x(T){for(var P=0,A=1,L=n-1;A!==L&&S[A]<=T;++A)P+=e;--A;var F=(T-S[A])/(S[A+1]-S[A]),u=P+F*e,q=c(u,p,g);return q>=.001?f(T,u,p,g):q===0?u:l(T,P,P+e,p,g)}return function(T){return p===_&&g===M||T===0||T===1?T:a(x(T),_,M)}}return d}(),xl=function(){var n={linear:function(){return function(i){return i}}},e={Sine:function(){return function(i){return 1-Math.cos(i*Math.PI/2)}},Circ:function(){return function(i){return 1-Math.sqrt(1-i*i)}},Back:function(){return function(i){return i*i*(3*i-2)}},Bounce:function(){return function(i){for(var r,a=4;i<((r=Math.pow(2,--a))-1)/11;);return 1/Math.pow(4,3-a)-7.5625*Math.pow((r*3-2)/22-i,2)}},Elastic:function(i,r){i===void 0&&(i=1),r===void 0&&(r=.5);var a=Gi(i,1,10),c=Gi(r,.1,2);return function(l){return l===0||l===1?l:-a*Math.pow(2,10*(l-1))*Math.sin((l-1-c/(Math.PI*2)*Math.asin(1/a))*(Math.PI*2)/c)}}},t=["Quad","Cubic","Quart","Quint","Expo"];return t.forEach(function(i,r){e[i]=function(){return function(a){return Math.pow(a,r+2)}}}),Object.keys(e).forEach(function(i){var r=e[i];n["easeIn"+i]=r,n["easeOut"+i]=function(a,c){return function(l){return 1-r(a,c)(1-l)}},n["easeInOut"+i]=function(a,c){return function(l){return l<.5?r(a,c)(l*2)/2:1-r(a,c)(l*-2+2)/2}},n["easeOutIn"+i]=function(a,c){return function(l){return l<.5?(1-r(a,c)(1-l*2))/2:(r(a,c)(l*2-1)+1)/2}}}),n}();function ro(n,e){if(Ve.fnc(n))return n;var t=n.split("(")[0],i=xl[t],r=vl(n);switch(t){case"spring":return _l(n,e);case"cubicBezier":return oa(nf,r);case"steps":return oa(tf,r);default:return oa(i,r)}}function yl(n){try{var e=document.querySelectorAll(n);return e}catch{return}}function Os(n,e){for(var t=n.length,i=arguments.length>=2?arguments[1]:void 0,r=[],a=0;a<t;a++)if(a in n){var c=n[a];e.call(i,c,a,n)&&r.push(c)}return r}function Bs(n){return n.reduce(function(e,t){return e.concat(Ve.arr(t)?Bs(t):t)},[])}function Wo(n){return Ve.arr(n)?n:(Ve.str(n)&&(n=yl(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function so(n,e){return n.some(function(t){return t===e})}function ao(n){var e={};for(var t in n)e[t]=n[t];return e}function Wa(n,e){var t=ao(n);for(var i in n)t[i]=e.hasOwnProperty(i)?e[i]:n[i];return t}function zs(n,e){var t=ao(n);for(var i in e)t[i]=Ve.und(n[i])?e[i]:n[i];return t}function rf(n){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);return e?"rgba("+e[1]+",1)":n}function sf(n){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=n.replace(e,function(l,f,d,p){return f+f+d+d+p+p}),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),r=parseInt(i[1],16),a=parseInt(i[2],16),c=parseInt(i[3],16);return"rgba("+r+","+a+","+c+",1)"}function af(n){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),t=parseInt(e[1],10)/360,i=parseInt(e[2],10)/100,r=parseInt(e[3],10)/100,a=e[4]||1;function c(g,M,S){return S<0&&(S+=1),S>1&&(S-=1),S<1/6?g+(M-g)*6*S:S<1/2?M:S<2/3?g+(M-g)*(2/3-S)*6:g}var l,f,d;if(i==0)l=f=d=r;else{var p=r<.5?r*(1+i):r+i-r*i,_=2*r-p;l=c(_,p,t+1/3),f=c(_,p,t),d=c(_,p,t-1/3)}return"rgba("+l*255+","+f*255+","+d*255+","+a+")"}function of(n){if(Ve.rgb(n))return rf(n);if(Ve.hex(n))return sf(n);if(Ve.hsl(n))return af(n)}function nn(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function cf(n){if(Wr(n,"translate")||n==="perspective")return"px";if(Wr(n,"rotate")||Wr(n,"skew"))return"deg"}function qa(n,e){return Ve.fnc(n)?n(e.target,e.id,e.total):n}function Hi(n,e){return n.getAttribute(e)}function oo(n,e,t){var i=nn(e);if(so([t,"deg","rad","turn"],i))return e;var r=Ps.CSS[e+t];if(!Ve.und(r))return r;var a=100,c=document.createElement(n.tagName),l=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;l.appendChild(c),c.style.position="absolute",c.style.width=a+t;var f=a/c.offsetWidth;l.removeChild(c);var d=f*parseFloat(e);return Ps.CSS[e+t]=d,d}function bl(n,e,t){if(e in n.style){var i=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=n.style[e]||getComputedStyle(n).getPropertyValue(i)||"0";return t?oo(n,r,t):r}}function co(n,e){if(Ve.dom(n)&&!Ve.inp(n)&&(!Ve.nil(Hi(n,e))||Ve.svg(n)&&n[e]))return"attribute";if(Ve.dom(n)&&so(ef,e))return"transform";if(Ve.dom(n)&&e!=="transform"&&bl(n,e))return"css";if(n[e]!=null)return"object"}function Ml(n){if(Ve.dom(n)){for(var e=n.style.transform||"",t=/(\w+)\(([^)]*)\)/g,i=new Map,r;r=t.exec(e);)i.set(r[1],r[2]);return i}}function lf(n,e,t,i){var r=Wr(e,"scale")?1:0+cf(e),a=Ml(n).get(e)||r;return t&&(t.transforms.list.set(e,a),t.transforms.last=e),i?oo(n,a,i):a}function lo(n,e,t,i){switch(co(n,e)){case"transform":return lf(n,e,i,t);case"css":return bl(n,e,t);case"attribute":return Hi(n,e);default:return n[e]||0}}function uo(n,e){var t=/^(\*=|\+=|-=)/.exec(n);if(!t)return n;var i=nn(n)||0,r=parseFloat(e),a=parseFloat(n.replace(t[0],""));switch(t[0][0]){case"+":return r+a+i;case"-":return r-a+i;case"*":return r*a+i}}function Sl(n,e){if(Ve.col(n))return of(n);if(/\s/g.test(n))return n;var t=nn(n),i=t?n.substr(0,n.length-t.length):n;return e?i+e:i}function fo(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function uf(n){return Math.PI*2*Hi(n,"r")}function ff(n){return Hi(n,"width")*2+Hi(n,"height")*2}function hf(n){return fo({x:Hi(n,"x1"),y:Hi(n,"y1")},{x:Hi(n,"x2"),y:Hi(n,"y2")})}function El(n){for(var e=n.points,t=0,i,r=0;r<e.numberOfItems;r++){var a=e.getItem(r);r>0&&(t+=fo(i,a)),i=a}return t}function df(n){var e=n.points;return El(n)+fo(e.getItem(e.numberOfItems-1),e.getItem(0))}function Tl(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return uf(n);case"rect":return ff(n);case"line":return hf(n);case"polyline":return El(n);case"polygon":return df(n)}}function pf(n){var e=Tl(n);return n.setAttribute("stroke-dasharray",e),e}function mf(n){for(var e=n.parentNode;Ve.svg(e)&&Ve.svg(e.parentNode);)e=e.parentNode;return e}function wl(n,e){var t=e||{},i=t.el||mf(n),r=i.getBoundingClientRect(),a=Hi(i,"viewBox"),c=r.width,l=r.height,f=t.viewBox||(a?a.split(" "):[0,0,c,l]);return{el:i,viewBox:f,x:f[0]/1,y:f[1]/1,w:c,h:l,vW:f[2],vH:f[3]}}function gf(n,e){var t=Ve.str(n)?yl(n)[0]:n,i=e||100;return function(r){return{property:r,el:t,svg:wl(t),totalLength:Tl(t)*(i/100)}}}function vf(n,e,t){function i(p){p===void 0&&(p=0);var _=e+p>=1?e+p:0;return n.el.getPointAtLength(_)}var r=wl(n.el,n.svg),a=i(),c=i(-1),l=i(1),f=t?1:r.w/r.vW,d=t?1:r.h/r.vH;switch(n.property){case"x":return(a.x-r.x)*f;case"y":return(a.y-r.y)*d;case"angle":return Math.atan2(l.y-c.y,l.x-c.x)*180/Math.PI}}function qo(n,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,i=Sl(Ve.pth(n)?n.totalLength:n,e)+"";return{original:i,numbers:i.match(t)?i.match(t).map(Number):[0],strings:Ve.str(n)||e?i.split(t):[]}}function ho(n){var e=n?Bs(Ve.arr(n)?n.map(Wo):Wo(n)):[];return Os(e,function(t,i,r){return r.indexOf(t)===i})}function Al(n){var e=ho(n);return e.map(function(t,i){return{target:t,id:i,total:e.length,transforms:{list:Ml(t)}}})}function _f(n,e){var t=ao(e);if(/^spring/.test(t.easing)&&(t.duration=_l(t.easing)),Ve.arr(n)){var i=n.length,r=i===2&&!Ve.obj(n[0]);r?n={value:n}:Ve.fnc(e.duration)||(t.duration=e.duration/i)}var a=Ve.arr(n)?n:[n];return a.map(function(c,l){var f=Ve.obj(c)&&!Ve.pth(c)?c:{value:c};return Ve.und(f.delay)&&(f.delay=l?0:e.delay),Ve.und(f.endDelay)&&(f.endDelay=l===a.length-1?e.endDelay:0),f}).map(function(c){return zs(c,t)})}function xf(n){for(var e=Os(Bs(n.map(function(a){return Object.keys(a)})),function(a){return Ve.key(a)}).reduce(function(a,c){return a.indexOf(c)<0&&a.push(c),a},[]),t={},i=function(a){var c=e[a];t[c]=n.map(function(l){var f={};for(var d in l)Ve.key(d)?d==c&&(f.value=l[d]):f[d]=l[d];return f})},r=0;r<e.length;r++)i(r);return t}function yf(n,e){var t=[],i=e.keyframes;i&&(e=zs(xf(i),e));for(var r in e)Ve.key(r)&&t.push({name:r,tweens:_f(e[r],n)});return t}function bf(n,e){var t={};for(var i in n){var r=qa(n[i],e);Ve.arr(r)&&(r=r.map(function(a){return qa(a,e)}),r.length===1&&(r=r[0])),t[i]=r}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function Mf(n,e){var t;return n.tweens.map(function(i){var r=bf(i,e),a=r.value,c=Ve.arr(a)?a[1]:a,l=nn(c),f=lo(e.target,n.name,l,e),d=t?t.to.original:f,p=Ve.arr(a)?a[0]:d,_=nn(p)||nn(f),g=l||_;return Ve.und(c)&&(c=d),r.from=qo(p,g),r.to=qo(uo(c,p),g),r.start=t?t.end:0,r.end=r.start+r.delay+r.duration+r.endDelay,r.easing=ro(r.easing,r.duration),r.isPath=Ve.pth(a),r.isPathTargetInsideSVG=r.isPath&&Ve.svg(e.target),r.isColor=Ve.col(r.from.original),r.isColor&&(r.round=1),t=r,r})}var Cl={css:function(n,e,t){return n.style[e]=t},attribute:function(n,e,t){return n.setAttribute(e,t)},object:function(n,e,t){return n[e]=t},transform:function(n,e,t,i,r){if(i.list.set(e,t),e===i.last||r){var a="";i.list.forEach(function(c,l){a+=l+"("+c+") "}),n.style.transform=a}}};function Rl(n,e){var t=Al(n);t.forEach(function(i){for(var r in e){var a=qa(e[r],i),c=i.target,l=nn(a),f=lo(c,r,l,i),d=l||nn(f),p=uo(Sl(a,d),f),_=co(c,r);Cl[_](c,r,p,i.transforms,!0)}})}function Sf(n,e){var t=co(n.target,e.name);if(t){var i=Mf(e,n),r=i[i.length-1];return{type:t,property:e.name,animatable:n,tweens:i,duration:r.end,delay:i[0].delay,endDelay:r.endDelay}}}function Ef(n,e){return Os(Bs(n.map(function(t){return e.map(function(i){return Sf(t,i)})})),function(t){return!Ve.und(t)})}function Ll(n,e){var t=n.length,i=function(a){return a.timelineOffset?a.timelineOffset:0},r={};return r.duration=t?Math.max.apply(Math,n.map(function(a){return i(a)+a.duration})):e.duration,r.delay=t?Math.min.apply(Math,n.map(function(a){return i(a)+a.delay})):e.delay,r.endDelay=t?r.duration-Math.max.apply(Math,n.map(function(a){return i(a)+a.duration-a.endDelay})):e.endDelay,r}var Xo=0;function Tf(n){var e=Wa(gl,n),t=Wa(no,n),i=yf(t,n),r=Al(n.targets),a=Ef(r,i),c=Ll(a,t),l=Xo;return Xo++,zs(e,{id:l,children:[],animatables:r,animations:a,duration:c.duration,delay:c.delay,endDelay:c.endDelay})}var Ii=[],Dl=function(){var n;function e(){!n&&(!jo()||!_t.suspendWhenDocumentHidden)&&Ii.length>0&&(n=requestAnimationFrame(t))}function t(r){for(var a=Ii.length,c=0;c<a;){var l=Ii[c];l.paused?(Ii.splice(c,1),a--):(l.tick(r),c++)}n=c>0?requestAnimationFrame(t):void 0}function i(){_t.suspendWhenDocumentHidden&&(jo()?n=cancelAnimationFrame(n):(Ii.forEach(function(r){return r._onDocumentVisibility()}),Dl()))}return typeof document<"u"&&document.addEventListener("visibilitychange",i),e}();function jo(){return!!document&&document.hidden}function _t(n){n===void 0&&(n={});var e=0,t=0,i=0,r,a=0,c=null;function l(P){var A=window.Promise&&new Promise(function(L){return c=L});return P.finished=A,A}var f=Tf(n);l(f);function d(){var P=f.direction;P!=="alternate"&&(f.direction=P!=="normal"?"normal":"reverse"),f.reversed=!f.reversed,r.forEach(function(A){return A.reversed=f.reversed})}function p(P){return f.reversed?f.duration-P:P}function _(){e=0,t=p(f.currentTime)*(1/_t.speed)}function g(P,A){A&&A.seek(P-A.timelineOffset)}function M(P){if(f.reversePlayback)for(var L=a;L--;)g(P,r[L]);else for(var A=0;A<a;A++)g(P,r[A])}function S(P){for(var A=0,L=f.animations,F=L.length;A<F;){var u=L[A],q=u.animatable,R=u.tweens,O=R.length-1,W=R[O];O&&(W=Os(R,function(Ue){return P<Ue.end})[0]||W);for(var he=Gi(P-W.start-W.delay,0,W.duration)/W.duration,ue=isNaN(he)?1:W.easing(he),J=W.to.strings,j=W.round,oe=[],ve=W.to.numbers.length,xe=void 0,ce=0;ce<ve;ce++){var ye=void 0,ge=W.to.numbers[ce],Ie=W.from.numbers[ce]||0;W.isPath?ye=vf(W.value,ue*ge,W.isPathTargetInsideSVG):ye=Ie+ue*(ge-Ie),j&&(W.isColor&&ce>2||(ye=Math.round(ye*j)/j)),oe.push(ye)}var Q=J.length;if(!Q)xe=oe[0];else{xe=J[0];for(var me=0;me<Q;me++){J[me];var Se=J[me+1],z=oe[me];isNaN(z)||(Se?xe+=z+Se:xe+=z+" ")}}Cl[u.type](q.target,u.property,xe,q.transforms),u.currentValue=xe,A++}}function v(P){f[P]&&!f.passThrough&&f[P](f)}function x(){f.remaining&&f.remaining!==!0&&f.remaining--}function T(P){var A=f.duration,L=f.delay,F=A-f.endDelay,u=p(P);f.progress=Gi(u/A*100,0,100),f.reversePlayback=u<f.currentTime,r&&M(u),!f.began&&f.currentTime>0&&(f.began=!0,v("begin")),!f.loopBegan&&f.currentTime>0&&(f.loopBegan=!0,v("loopBegin")),u<=L&&f.currentTime!==0&&S(0),(u>=F&&f.currentTime!==A||!A)&&S(A),u>L&&u<F?(f.changeBegan||(f.changeBegan=!0,f.changeCompleted=!1,v("changeBegin")),v("change"),S(u)):f.changeBegan&&(f.changeCompleted=!0,f.changeBegan=!1,v("changeComplete")),f.currentTime=Gi(u,0,A),f.began&&v("update"),P>=A&&(t=0,x(),f.remaining?(e=i,v("loopComplete"),f.loopBegan=!1,f.direction==="alternate"&&d()):(f.paused=!0,f.completed||(f.completed=!0,v("loopComplete"),v("complete"),!f.passThrough&&"Promise"in window&&(c(),l(f)))))}return f.reset=function(){var P=f.direction;f.passThrough=!1,f.currentTime=0,f.progress=0,f.paused=!0,f.began=!1,f.loopBegan=!1,f.changeBegan=!1,f.completed=!1,f.changeCompleted=!1,f.reversePlayback=!1,f.reversed=P==="reverse",f.remaining=f.loop,r=f.children,a=r.length;for(var A=a;A--;)f.children[A].reset();(f.reversed&&f.loop!==!0||P==="alternate"&&f.loop===1)&&f.remaining++,S(f.reversed?f.duration:0)},f._onDocumentVisibility=_,f.set=function(P,A){return Rl(P,A),f},f.tick=function(P){i=P,e||(e=i),T((i+(t-e))*_t.speed)},f.seek=function(P){T(p(P))},f.pause=function(){f.paused=!0,_()},f.play=function(){f.paused&&(f.completed&&f.reset(),f.paused=!1,Ii.push(f),_(),Dl())},f.reverse=function(){d(),f.completed=!f.reversed,_()},f.restart=function(){f.reset(),f.play()},f.remove=function(P){var A=ho(P);Pl(A,f)},f.reset(),f.autoplay&&f.play(),f}function $o(n,e){for(var t=e.length;t--;)so(n,e[t].animatable.target)&&e.splice(t,1)}function Pl(n,e){var t=e.animations,i=e.children;$o(n,t);for(var r=i.length;r--;){var a=i[r],c=a.animations;$o(n,c),!c.length&&!a.children.length&&i.splice(r,1)}!t.length&&!i.length&&e.pause()}function wf(n){for(var e=ho(n),t=Ii.length;t--;){var i=Ii[t];Pl(e,i)}}function Af(n,e){e===void 0&&(e={});var t=e.direction||"normal",i=e.easing?ro(e.easing):null,r=e.grid,a=e.axis,c=e.from||0,l=c==="first",f=c==="center",d=c==="last",p=Ve.arr(n),_=parseFloat(p?n[0]:n),g=p?parseFloat(n[1]):0,M=nn(p?n[1]:n)||0,S=e.start||0+(p?_:0),v=[],x=0;return function(T,P,A){if(l&&(c=0),f&&(c=(A-1)/2),d&&(c=A-1),!v.length){for(var L=0;L<A;L++){if(!r)v.push(Math.abs(c-L));else{var F=f?(r[0]-1)/2:c%r[0],u=f?(r[1]-1)/2:Math.floor(c/r[0]),q=L%r[0],R=Math.floor(L/r[0]),O=F-q,W=u-R,he=Math.sqrt(O*O+W*W);a==="x"&&(he=-O),a==="y"&&(he=-W),v.push(he)}x=Math.max.apply(Math,v)}i&&(v=v.map(function(J){return i(J/x)*x})),t==="reverse"&&(v=v.map(function(J){return a?J<0?J*-1:-J:Math.abs(x-J)}))}var ue=p?(g-_)/x:_;return S+ue*(Math.round(v[P]*100)/100)+M}}function Cf(n){n===void 0&&(n={});var e=_t(n);return e.duration=0,e.add=function(t,i){var r=Ii.indexOf(e),a=e.children;r>-1&&Ii.splice(r,1);function c(g){g.passThrough=!0}for(var l=0;l<a.length;l++)c(a[l]);var f=zs(t,Wa(no,n));f.targets=f.targets||n.targets;var d=e.duration;f.autoplay=!1,f.direction=e.direction,f.timelineOffset=Ve.und(i)?d:uo(i,d),c(e),e.seek(f.timelineOffset);var p=_t(f);c(p),a.push(p);var _=Ll(a,n);return e.delay=_.delay,e.endDelay=_.endDelay,e.duration=_.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}_t.version="3.2.1";_t.speed=1;_t.suspendWhenDocumentHidden=!0;_t.running=Ii;_t.remove=wf;_t.get=lo;_t.set=Rl;_t.convertPx=oo;_t.path=gf;_t.setDashoffset=pf;_t.stagger=Af;_t.timeline=Cf;_t.easing=ro;_t.penner=xl;_t.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n};function Yo(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function po(n,e,t){return e&&Yo(n.prototype,e),t&&Yo(n,t),n}function In(){return(In=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n}).apply(this,arguments)}function ks(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}function Il(n){return(Il=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(n)}function mo(n,e){return(mo=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(n,e)}function Nl(n,e,t){return(Nl=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}()?Reflect.construct:function(i,r,a){var c=[null];c.push.apply(c,r);var l=new(Function.bind.apply(i,c));return a&&mo(l,a.prototype),l}).apply(null,arguments)}function Fl(n){var e=typeof Map=="function"?new Map:void 0;return(Fl=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return Nl(t,arguments,Il(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),mo(i,t)})(n)}function or(n,e){try{var t=n()}catch(i){return e(i)}return t&&t.then?t.then(void 0,e):t}typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var dn,Rf="2.9.7",Lf=function(){};(function(n){n[n.off=0]="off",n[n.error=1]="error",n[n.warning=2]="warning",n[n.info=3]="info",n[n.debug=4]="debug"})(dn||(dn={}));var Zo=dn.off,Nn=function(){function n(t){this.t=t}n.getLevel=function(){return Zo},n.setLevel=function(t){return Zo=dn[t]};var e=n.prototype;return e.error=function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];this.i(console.error,dn.error,i)},e.warn=function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];this.i(console.warn,dn.warning,i)},e.info=function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];this.i(console.info,dn.info,i)},e.debug=function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];this.i(console.log,dn.debug,i)},e.i=function(t,i,r){i<=n.getLevel()&&t.apply(console,["["+this.t+"] "].concat(r))},n}(),Rn=_o,Df=Ol,Pf=go,If=Bl,Nf=zl,Ul="/",Ff=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function go(n,e){for(var t,i=[],r=0,a=0,c="",l=e&&e.delimiter||Ul,f=e&&e.whitelist||void 0,d=!1;(t=Ff.exec(n))!==null;){var p=t[0],_=t[1],g=t.index;if(c+=n.slice(a,g),a=g+p.length,_)c+=_[1],d=!0;else{var M="",S=t[2],v=t[3],x=t[4],T=t[5];if(!d&&c.length){var P=c.length-1,A=c[P];(!f||f.indexOf(A)>-1)&&(M=A,c=c.slice(0,P))}c&&(i.push(c),c="",d=!1);var L=v||x,F=M||l;i.push({name:S||r++,prefix:M,delimiter:F,optional:T==="?"||T==="*",repeat:T==="+"||T==="*",pattern:L?Uf(L):"[^"+Qi(F===l?F:F+l)+"]+?"})}}return(c||a<n.length)&&i.push(c+n.substr(a)),i}function Ol(n,e){return function(t,i){var r=n.exec(t);if(!r)return!1;for(var a=r[0],c=r.index,l={},f=i&&i.decode||decodeURIComponent,d=1;d<r.length;d++)if(r[d]!==void 0){var p=e[d-1];l[p.name]=p.repeat?r[d].split(p.delimiter).map(function(_){return f(_,p)}):f(r[d],p)}return{path:a,index:c,params:l}}}function Bl(n,e){for(var t=new Array(n.length),i=0;i<n.length;i++)typeof n[i]=="object"&&(t[i]=new RegExp("^(?:"+n[i].pattern+")$",vo(e)));return function(r,a){for(var c="",l=a&&a.encode||encodeURIComponent,f=!a||a.validate!==!1,d=0;d<n.length;d++){var p=n[d];if(typeof p!="string"){var _,g=r?r[p.name]:void 0;if(Array.isArray(g)){if(!p.repeat)throw new TypeError('Expected "'+p.name+'" to not repeat, but got array');if(g.length===0){if(p.optional)continue;throw new TypeError('Expected "'+p.name+'" to not be empty')}for(var M=0;M<g.length;M++){if(_=l(g[M],p),f&&!t[d].test(_))throw new TypeError('Expected all "'+p.name+'" to match "'+p.pattern+'"');c+=(M===0?p.prefix:p.delimiter)+_}}else if(typeof g!="string"&&typeof g!="number"&&typeof g!="boolean"){if(!p.optional)throw new TypeError('Expected "'+p.name+'" to be '+(p.repeat?"an array":"a string"))}else{if(_=l(String(g),p),f&&!t[d].test(_))throw new TypeError('Expected "'+p.name+'" to match "'+p.pattern+'", but got "'+_+'"');c+=p.prefix+_}}else c+=p}return c}}function Qi(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Uf(n){return n.replace(/([=!:$/()])/g,"\\$1")}function vo(n){return n&&n.sensitive?"":"i"}function zl(n,e,t){for(var i=(t=t||{}).strict,r=t.start!==!1,a=t.end!==!1,c=t.delimiter||Ul,l=[].concat(t.endsWith||[]).map(Qi).concat("$").join("|"),f=r?"^":"",d=0;d<n.length;d++){var p=n[d];if(typeof p=="string")f+=Qi(p);else{var _=p.repeat?"(?:"+p.pattern+")(?:"+Qi(p.delimiter)+"(?:"+p.pattern+"))*":p.pattern;e&&e.push(p),f+=p.optional?p.prefix?"(?:"+Qi(p.prefix)+"("+_+"))?":"("+_+")?":Qi(p.prefix)+"("+_+")"}}if(a)i||(f+="(?:"+Qi(c)+")?"),f+=l==="$"?"$":"(?="+l+")";else{var g=n[n.length-1],M=typeof g=="string"?g[g.length-1]===c:g===void 0;i||(f+="(?:"+Qi(c)+"(?="+l+"))?"),M||(f+="(?="+Qi(c)+"|"+l+")")}return new RegExp(f,vo(t))}function _o(n,e,t){return n instanceof RegExp?function(i,r){if(!r)return i;var a=i.source.match(/\((?!\?)/g);if(a)for(var c=0;c<a.length;c++)r.push({name:c,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return i}(n,e):Array.isArray(n)?function(i,r,a){for(var c=[],l=0;l<i.length;l++)c.push(_o(i[l],r,a).source);return new RegExp("(?:"+c.join("|")+")",vo(a))}(n,e,t):function(i,r,a){return zl(go(i,a),r,a)}(n,e,t)}Rn.match=function(n,e){var t=[];return Ol(_o(n,t,e),t)},Rn.regexpToFunction=Df,Rn.parse=Pf,Rn.compile=function(n,e){return Bl(go(n,e),e)},Rn.tokensToFunction=If,Rn.tokensToRegExp=Nf;var Vi={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},Fn=new(function(){function n(){this.o=Vi,this.u=new DOMParser}var e=n.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u.parseFromString(t,"text/html")},e.toElement=function(t){var i=document.createElement("div");return i.innerHTML=t,i},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&t.parentNode.removeChild(t)},e.addContainer=function(t,i){var r=this.getContainer();r?this.s(t,r):i.appendChild(t)},e.getNamespace=function(t){t===void 0&&(t=document);var i=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return i?i.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var i=t.getAttribute("href")||t.getAttribute("xlink:href");if(i)return this.resolveUrl(i.baseVal||i)}return null},e.resolveUrl=function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];var a=i.length;if(a===0)throw new Error("resolveUrl requires at least one argument; got none.");var c=document.createElement("base");if(c.href=arguments[0],a===1)return c.href;var l=document.getElementsByTagName("head")[0];l.insertBefore(c,l.firstChild);for(var f,d=document.createElement("a"),p=1;p<a;p++)d.href=arguments[p],c.href=f=d.href;return l.removeChild(c),f},e.s=function(t,i){i.parentNode.insertBefore(t,i.nextSibling)},n}()),kl=new(function(){function n(){this.h=[],this.v=-1}var e=n.prototype;return e.init=function(t,i){this.l="barba";var r={ns:i,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(r),this.v=0;var a={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(a,"",t)},e.change=function(t,i,r){if(r&&r.state){var a=r.state,c=a.index;i=this.m(this.v-c),this.replace(a.states),this.v=c}else this.add(t,i);return i},e.add=function(t,i){var r=this.size,a=this.p(i),c={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(c),this.v=r;var l={from:this.l,index:r,states:[].concat(this.h)};switch(a){case"push":window.history&&window.history.pushState(l,"",t);break;case"replace":window.history&&window.history.replaceState(l,"",t)}},e.update=function(t,i){var r=i||this.v,a=In({},this.get(r),{},t);this.set(r,a)},e.remove=function(t){t?this.h.splice(t,1):this.h.pop(),this.v--},e.clear=function(){this.h=[],this.v=-1},e.replace=function(t){this.h=t},e.get=function(t){return this.h[t]},e.set=function(t,i){return this.h[t]=i},e.p=function(t){var i="push",r=t,a=Vi.prefix+"-"+Vi.history;return r.hasAttribute&&r.hasAttribute(a)&&(i=r.getAttribute(a)),i},e.m=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},po(n,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),n}()),Is=function(n,e){try{var t=function(){if(!e.next.html)return Promise.resolve(n).then(function(i){var r=e.next;if(i){var a=Fn.toElement(i);r.namespace=Fn.getNamespace(a),r.container=Fn.getContainer(a),r.html=i,kl.update({ns:r.namespace});var c=Fn.toDocument(i);document.title=c.title}})}();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(i){return Promise.reject(i)}},Gl=Rn,Of={__proto__:null,update:Is,nextTick:function(){return new Promise(function(n){window.requestAnimationFrame(n)})},pathToRegexp:Gl},Hl=function(){return window.location.origin},Xr=function(n){return n===void 0&&(n=window.location.href),Ns(n).port},Ns=function(n){var e,t=n.match(/:\d+/);if(t===null)/^http/.test(n)&&(e=80),/^https/.test(n)&&(e=443);else{var i=t[0].substring(1);e=parseInt(i,10)}var r,a=n.replace(Hl(),""),c={},l=a.indexOf("#");l>=0&&(r=a.slice(l+1),a=a.slice(0,l));var f=a.indexOf("?");return f>=0&&(c=Vl(a.slice(f+1)),a=a.slice(0,f)),{hash:r,path:a,port:e,query:c}},Vl=function(n){return n.split("&").reduce(function(e,t){var i=t.split("=");return e[i[0]]=i[1],e},{})},Xa=function(n){return n===void 0&&(n=window.location.href),n.replace(/(\/#.*|\/|#.*)$/,"")},Bf={__proto__:null,getHref:function(){return window.location.href},getOrigin:Hl,getPort:Xr,getPath:function(n){return n===void 0&&(n=window.location.href),Ns(n).path},parse:Ns,parseQuery:Vl,clean:Xa};function zf(n,e,t){return e===void 0&&(e=2e3),new Promise(function(i,r){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){if(a.status===200)i(a.responseText);else if(a.status){var c={status:a.status,statusText:a.statusText};t(n,c),r(c)}}},a.ontimeout=function(){var c=new Error("Timeout error ["+e+"]");t(n,c),r(c)},a.onerror=function(){var c=new Error("Fetch error");t(n,c),r(c)},a.open("GET",n),a.timeout=e,a.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),a.setRequestHeader("x-barba","yes"),a.send()})}var kf=function(n){return!!n&&(typeof n=="object"||typeof n=="function")&&typeof n.then=="function"};function lr(n,e){return e===void 0&&(e={}),function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];var a=!1,c=new Promise(function(l,f){e.async=function(){return a=!0,function(p,_){p?f(p):l(_)}};var d=n.apply(e,i);a||(kf(d)?d.then(l,f):l(d))});return c}}var hn=new(function(n){function e(){var i;return(i=n.call(this)||this).logger=new Nn("@barba/core"),i.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],i.registered=new Map,i.init(),i}ks(e,n);var t=e.prototype;return t.init=function(){var i=this;this.registered.clear(),this.all.forEach(function(r){i[r]||(i[r]=function(a,c){i.registered.has(r)||i.registered.set(r,new Set),i.registered.get(r).add({ctx:c||{},fn:a})})})},t.do=function(i){for(var r=this,a=arguments.length,c=new Array(a>1?a-1:0),l=1;l<a;l++)c[l-1]=arguments[l];if(this.registered.has(i)){var f=Promise.resolve();return this.registered.get(i).forEach(function(d){f=f.then(function(){return lr(d.fn,d.ctx).apply(void 0,c)})}),f.catch(function(d){r.logger.debug("Hook error ["+i+"]"),r.logger.error(d)})}return Promise.resolve()},t.clear=function(){var i=this;this.all.forEach(function(r){delete i[r]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var i=[];this.registered.forEach(function(r,a){return i.push(a)}),this.logger.info("Registered hooks: "+i.join(","))},e}(Lf)),Wl=function(){function n(e){if(this.P=[],typeof e=="boolean")this.g=e;else{var t=Array.isArray(e)?e:[e];this.P=t.map(function(i){return Gl(i)})}}return n.prototype.checkHref=function(e){if(typeof this.g=="boolean")return this.g;var t=Ns(e).path;return this.P.some(function(i){return i.exec(t)!==null})},n}(),Gf=function(n){function e(i){var r;return(r=n.call(this,i)||this).k=new Map,r}ks(e,n);var t=e.prototype;return t.set=function(i,r,a){return this.k.set(i,{action:a,request:r}),{action:a,request:r}},t.get=function(i){return this.k.get(i)},t.getRequest=function(i){return this.k.get(i).request},t.getAction=function(i){return this.k.get(i).action},t.has=function(i){return!this.checkHref(i)&&this.k.has(i)},t.delete=function(i){return this.k.delete(i)},t.update=function(i,r){var a=In({},this.k.get(i),{},r);return this.k.set(i,a),a},e}(Wl),Hf=function(){return!window.history.pushState},Vf=function(n){return!n.el||!n.href},Wf=function(n){var e=n.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},qf=function(n){var e=n.el;return e.hasAttribute("target")&&e.target==="_blank"},Xf=function(n){var e=n.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},jf=function(n){var e=n.el;return e.port!==void 0&&Xr()!==Xr(e.href)},$f=function(n){var e=n.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},Yf=function(n){return n.el.hasAttribute(Vi.prefix+"-"+Vi.prevent)},Zf=function(n){return!!n.el.closest("["+Vi.prefix+"-"+Vi.prevent+'="all"]')},Kf=function(n){var e=n.href;return Xa(e)===Xa()&&Xr(e)===Xr()},Jf=function(n){function e(i){var r;return(r=n.call(this,i)||this).suite=[],r.tests=new Map,r.init(),r}ks(e,n);var t=e.prototype;return t.init=function(){this.add("pushState",Hf),this.add("exists",Vf),this.add("newTab",Wf),this.add("blank",qf),this.add("corsDomain",Xf),this.add("corsPort",jf),this.add("download",$f),this.add("preventSelf",Yf),this.add("preventAll",Zf),this.add("sameUrl",Kf,!1)},t.add=function(i,r,a){a===void 0&&(a=!0),this.tests.set(i,r),a&&this.suite.push(i)},t.run=function(i,r,a,c){return this.tests.get(i)({el:r,event:a,href:c})},t.checkLink=function(i,r,a){var c=this;return this.suite.some(function(l){return c.run(l,i,r,a)})},e}(Wl),ca=function(n){function e(t,i){var r;i===void 0&&(i="Barba error");for(var a=arguments.length,c=new Array(a>2?a-2:0),l=2;l<a;l++)c[l-2]=arguments[l];return(r=n.call.apply(n,[this].concat(c))||this).error=t,r.label=i,Error.captureStackTrace&&Error.captureStackTrace(function(f){if(f===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f}(r),e),r.name="BarbaError",r}return ks(e,n),e}(Fl(Error)),Qf=function(){function n(t){t===void 0&&(t=[]),this.logger=new Nn("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=n.prototype;return e.add=function(t,i){switch(t){case"rule":this.A.splice(i.position||0,0,i.value);break;case"transition":default:this.all.push(i)}this.update()},e.resolve=function(t,i){var r=this;i===void 0&&(i={});var a=i.once?this.once:this.page;a=a.filter(i.self?function(g){return g.name&&g.name==="self"}:function(g){return!g.name||g.name!=="self"});var c=new Map,l=a.find(function(g){var M=!0,S={};return!(!i.self||g.name!=="self")||(r.A.reverse().forEach(function(v){M&&(M=r.R(g,v,t,S),g.from&&g.to&&(M=r.R(g,v,t,S,"from")&&r.R(g,v,t,S,"to")),g.from&&!g.to&&(M=r.R(g,v,t,S,"from")),!g.from&&g.to&&(M=r.R(g,v,t,S,"to")))}),c.set(g,S),M)}),f=c.get(l),d=[];if(d.push(i.once?"once":"page"),i.self&&d.push("self"),f){var p,_=[l];Object.keys(f).length>0&&_.push(f),(p=this.logger).info.apply(p,["Transition found ["+d.join(",")+"]"].concat(_))}else this.logger.info("No transition found ["+d.join(",")+"]");return l},e.update=function(){var t=this;this.all=this.all.map(function(i){return t.T(i)}).sort(function(i,r){return i.priority-r.priority}).reverse().map(function(i){return delete i.priority,i}),this.page=this.all.filter(function(i){return i.leave!==void 0||i.enter!==void 0}),this.once=this.all.filter(function(i){return i.once!==void 0})},e.R=function(t,i,r,a,c){var l=!0,f=!1,d=t,p=i.name,_=p,g=p,M=p,S=c?d[c]:d,v=c==="to"?r.next:r.current;if(c?S&&S[p]:S[p]){switch(i.type){case"strings":default:var x=Array.isArray(S[_])?S[_]:[S[_]];v[_]&&x.indexOf(v[_])!==-1&&(f=!0),x.indexOf(v[_])===-1&&(l=!1);break;case"object":var T=Array.isArray(S[g])?S[g]:[S[g]];v[g]?(v[g].name&&T.indexOf(v[g].name)!==-1&&(f=!0),T.indexOf(v[g].name)===-1&&(l=!1)):l=!1;break;case"function":S[M](r)?f=!0:l=!1}f&&(c?(a[c]=a[c]||{},a[c][p]=d[c][p]):a[p]=d[p])}return l},e.O=function(t,i,r){var a=0;return(t[i]||t.from&&t.from[i]||t.to&&t.to[i])&&(a+=Math.pow(10,r),t.from&&t.from[i]&&(a+=1),t.to&&t.to[i]&&(a+=2)),a},e.T=function(t){var i=this;t.priority=0;var r=0;return this.A.forEach(function(a,c){r+=i.O(t,a.name,c+1)}),t.priority=r,t},n}(),eh=function(){function n(t){t===void 0&&(t=[]),this.logger=new Nn("@barba/core"),this.S=!1,this.store=new Qf(t)}var e=n.prototype;return e.get=function(t,i){return this.store.resolve(t,i)},e.doOnce=function(t){var i=t.data,r=t.transition;try{var a=function(){c.S=!1},c=this,l=r||{};c.S=!0;var f=or(function(){return Promise.resolve(c.j("beforeOnce",i,l)).then(function(){return Promise.resolve(c.once(i,l)).then(function(){return Promise.resolve(c.j("afterOnce",i,l)).then(function(){})})})},function(d){c.S=!1,c.logger.debug("Transition error [before/after/once]"),c.logger.error(d)});return Promise.resolve(f&&f.then?f.then(a):a())}catch(d){return Promise.reject(d)}},e.doPage=function(t){var i=t.data,r=t.transition,a=t.page,c=t.wrapper;try{var l=function(M){if(f)return M;d.S=!1},f=!1,d=this,p=r||{},_=p.sync===!0||!1;d.S=!0;var g=or(function(){function M(){return Promise.resolve(d.j("before",i,p)).then(function(){var v=!1;function x(P){return v?P:Promise.resolve(d.remove(i)).then(function(){return Promise.resolve(d.j("after",i,p)).then(function(){})})}var T=function(){if(_)return or(function(){return Promise.resolve(d.add(i,c)).then(function(){return Promise.resolve(d.j("beforeLeave",i,p)).then(function(){return Promise.resolve(d.j("beforeEnter",i,p)).then(function(){return Promise.resolve(Promise.all([d.leave(i,p),d.enter(i,p)])).then(function(){return Promise.resolve(d.j("afterLeave",i,p)).then(function(){return Promise.resolve(d.j("afterEnter",i,p)).then(function(){})})})})})})},function(F){if(d.M(F))throw new ca(F,"Transition error [sync]")});var P=function(F){return v?F:or(function(){var u=function(){if(A!==!1)return Promise.resolve(d.add(i,c)).then(function(){return Promise.resolve(d.j("beforeEnter",i,p)).then(function(){return Promise.resolve(d.enter(i,p,A)).then(function(){return Promise.resolve(d.j("afterEnter",i,p)).then(function(){})})})})}();if(u&&u.then)return u.then(function(){})},function(u){if(d.M(u))throw new ca(u,"Transition error [before/after/enter]")})},A=!1,L=or(function(){return Promise.resolve(d.j("beforeLeave",i,p)).then(function(){return Promise.resolve(Promise.all([d.leave(i,p),Is(a,i)]).then(function(F){return F[0]})).then(function(F){return A=F,Promise.resolve(d.j("afterLeave",i,p)).then(function(){})})})},function(F){if(d.M(F))throw new ca(F,"Transition error [before/after/leave]")});return L&&L.then?L.then(P):P(L)}();return T&&T.then?T.then(x):x(T)})}var S=function(){if(_)return Promise.resolve(Is(a,i)).then(function(){})}();return S&&S.then?S.then(M):M()},function(M){throw d.S=!1,M.name&&M.name==="BarbaError"?(d.logger.debug(M.label),d.logger.error(M.error),M):(d.logger.debug("Transition error [page]"),d.logger.error(M),M)});return Promise.resolve(g&&g.then?g.then(l):l(g))}catch(M){return Promise.reject(M)}},e.once=function(t,i){try{return Promise.resolve(hn.do("once",t,i)).then(function(){return i.once?lr(i.once,i)(t):Promise.resolve()})}catch(r){return Promise.reject(r)}},e.leave=function(t,i){try{return Promise.resolve(hn.do("leave",t,i)).then(function(){return i.leave?lr(i.leave,i)(t):Promise.resolve()})}catch(r){return Promise.reject(r)}},e.enter=function(t,i,r){try{return Promise.resolve(hn.do("enter",t,i)).then(function(){return i.enter?lr(i.enter,i)(t,r):Promise.resolve()})}catch(a){return Promise.reject(a)}},e.add=function(t,i){try{return Fn.addContainer(t.next.container,i),hn.do("nextAdded",t),Promise.resolve()}catch(r){return Promise.reject(r)}},e.remove=function(t){try{return Fn.removeContainer(t.current.container),hn.do("currentRemoved",t),Promise.resolve()}catch(i){return Promise.reject(i)}},e.M=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.j=function(t,i,r){try{return Promise.resolve(hn.do(t,i,r)).then(function(){return r[t]?lr(r[t],r)(i):Promise.resolve()})}catch(a){return Promise.reject(a)}},po(n,[{key:"isRunning",get:function(){return this.S},set:function(t){this.S=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),n}(),th=function(){function n(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(i){t.byNamespace.set(i.namespace,i)}),this.names.forEach(function(i){hn[i](t.L(i))}))}return n.prototype.L=function(e){var t=this;return function(i){var r=e.match(/enter/i)?i.next:i.current,a=t.byNamespace.get(r.namespace);return a&&a[e]?lr(a[e],a)(i):Promise.resolve()}},n}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(n){var e=this;do{if(e.matches(n))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var ih={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},ql=new(function(){function n(){this.version=Rf,this.schemaPage=ih,this.Logger=Nn,this.logger=new Nn("@barba/core"),this.plugins=[],this.hooks=hn,this.dom=Fn,this.helpers=Of,this.history=kl,this.request=zf,this.url=Bf}var e=n.prototype;return e.use=function(t,i){var r=this.plugins;r.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,i),r.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var i=t===void 0?{}:t,r=i.transitions,a=r===void 0?[]:r,c=i.views,l=c===void 0?[]:c,f=i.schema,d=f===void 0?Vi:f,p=i.requestError,_=i.timeout,g=_===void 0?2e3:_,M=i.cacheIgnore,S=M!==void 0&&M,v=i.prefetchIgnore,x=v!==void 0&&v,T=i.preventRunning,P=T!==void 0&&T,A=i.prevent,L=A===void 0?null:A,F=i.debug,u=i.logLevel;if(Nn.setLevel((F!==void 0&&F)===!0?"debug":u===void 0?"off":u),this.logger.info(this.version),Object.keys(d).forEach(function(O){Vi[O]&&(Vi[O]=d[O])}),this.$=p,this.timeout=g,this.cacheIgnore=S,this.prefetchIgnore=x,this.preventRunning=P,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var q=this.data.current;if(!q.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new Gf(S),this.prevent=new Jf(x),this.transitions=new eh(a),this.views=new th(l),L!==null){if(typeof L!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",L)}this.history.init(q.url.href,q.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach(function(O){return O.init()});var R=this.data;R.trigger="barba",R.next=R.current,R.current=In({},this.schemaPage),this.hooks.do("ready",R),this.once(R),this.q()},e.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,i,r){var a;if(i===void 0&&(i="barba"),this.transitions.isRunning)this.force(t);else if(!(a=i==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return i=this.history.change(t,i,r),r&&(r.stopPropagation(),r.preventDefault()),this.page(t,i,a)},e.once=function(t){try{var i=this;return Promise.resolve(i.hooks.do("beforeEnter",t)).then(function(){function r(){return Promise.resolve(i.hooks.do("afterEnter",t)).then(function(){})}var a=function(){if(i.transitions.hasOnce){var c=i.transitions.get(t,{once:!0});return Promise.resolve(i.transitions.doOnce({transition:c,data:t})).then(function(){})}}();return a&&a.then?a.then(r):r()})}catch(r){return Promise.reject(r)}},e.page=function(t,i,r){try{var a=function(){var d=c.data;return Promise.resolve(c.hooks.do("page",d)).then(function(){var p=or(function(){var _=c.transitions.get(d,{once:!1,self:r});return Promise.resolve(c.transitions.doPage({data:d,page:l,transition:_,wrapper:c._})).then(function(){c.q()})},function(){Nn.getLevel()===0&&c.force(d.current.url.href)});if(p&&p.then)return p.then(function(){})})},c=this;c.data.next.url=In({href:t},c.url.parse(t)),c.data.trigger=i;var l=c.cache.has(t)?c.cache.update(t,{action:"click"}).request:c.cache.set(t,c.request(t,c.timeout,c.onRequestError.bind(c,i)),"click").request,f=function(){if(c.transitions.shouldWait)return Promise.resolve(Is(l,c.data)).then(function(){})}();return Promise.resolve(f&&f.then?f.then(a):a())}catch(d){return Promise.reject(d)}},e.onRequestError=function(t){this.transitions.isRunning=!1;for(var i=arguments.length,r=new Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];var c=r[0],l=r[1],f=this.cache.getAction(c);return this.cache.delete(c),!(this.$&&this.$(t,f,c,l)===!1||(f==="click"&&this.force(c),1))},e.prefetch=function(t){var i=this;this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba")).catch(function(r){i.logger.error(r)}),"prefetch")},e.F=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},e.H=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},e.B=function(t){var i=this,r=this.I(t);if(r){var a=this.dom.getHref(r);this.prevent.checkHref(a)||this.cache.has(a)||this.cache.set(a,this.request(a,this.timeout,this.onRequestError.bind(this,r)).catch(function(c){i.logger.error(c)}),"enter")}},e.U=function(t){var i=this.I(t);if(i)return this.transitions.isRunning&&this.preventRunning?(t.preventDefault(),void t.stopPropagation()):void this.go(this.dom.getHref(i),i,t)},e.D=function(t){this.go(this.url.getHref(),"popstate",t)},e.I=function(t){for(var i=t.target;i&&!this.dom.getHref(i);)i=i.parentNode;if(i&&!this.prevent.checkLink(i,t,this.dom.getHref(i)))return i},e.q=function(){var t=this.url.getHref(),i={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:In({href:t},this.url.parse(t))};this.C={current:i,next:In({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},po(n,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),n}()),nh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ja={},rh={get exports(){return ja},set exports(n){ja=n}};/*!
 * jQuery JavaScript Library v3.6.4
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-03-08T15:28Z
 */(function(n){(function(e,t){n.exports=e.document?t(e,!0):function(i){if(!i.document)throw new Error("jQuery requires a window with a document");return t(i)}})(typeof window<"u"?window:nh,function(e,t){var i=[],r=Object.getPrototypeOf,a=i.slice,c=i.flat?function(s){return i.flat.call(s)}:function(s){return i.concat.apply([],s)},l=i.push,f=i.indexOf,d={},p=d.toString,_=d.hasOwnProperty,g=_.toString,M=g.call(Object),S={},v=function(o){return typeof o=="function"&&typeof o.nodeType!="number"&&typeof o.item!="function"},x=function(o){return o!=null&&o===o.window},T=e.document,P={type:!0,src:!0,nonce:!0,noModule:!0};function A(s,o,h){h=h||T;var m,y,b=h.createElement("script");if(b.text=s,o)for(m in P)y=o[m]||o.getAttribute&&o.getAttribute(m),y&&b.setAttribute(m,y);h.head.appendChild(b).parentNode.removeChild(b)}function L(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?d[p.call(s)]||"object":typeof s}var F="3.6.4",u=function(s,o){return new u.fn.init(s,o)};u.fn=u.prototype={jquery:F,constructor:u,length:0,toArray:function(){return a.call(this)},get:function(s){return s==null?a.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var o=u.merge(this.constructor(),s);return o.prevObject=this,o},each:function(s){return u.each(this,s)},map:function(s){return this.pushStack(u.map(this,function(o,h){return s.call(o,h,o)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(u.grep(this,function(s,o){return(o+1)%2}))},odd:function(){return this.pushStack(u.grep(this,function(s,o){return o%2}))},eq:function(s){var o=this.length,h=+s+(s<0?o:0);return this.pushStack(h>=0&&h<o?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:i.sort,splice:i.splice},u.extend=u.fn.extend=function(){var s,o,h,m,y,b,E=arguments[0]||{},B=1,N=arguments.length,V=!1;for(typeof E=="boolean"&&(V=E,E=arguments[B]||{},B++),typeof E!="object"&&!v(E)&&(E={}),B===N&&(E=this,B--);B<N;B++)if((s=arguments[B])!=null)for(o in s)m=s[o],!(o==="__proto__"||E===m)&&(V&&m&&(u.isPlainObject(m)||(y=Array.isArray(m)))?(h=E[o],y&&!Array.isArray(h)?b=[]:!y&&!u.isPlainObject(h)?b={}:b=h,y=!1,E[o]=u.extend(V,b,m)):m!==void 0&&(E[o]=m));return E},u.extend({expando:"jQuery"+(F+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var o,h;return!s||p.call(s)!=="[object Object]"?!1:(o=r(s),o?(h=_.call(o,"constructor")&&o.constructor,typeof h=="function"&&g.call(h)===M):!0)},isEmptyObject:function(s){var o;for(o in s)return!1;return!0},globalEval:function(s,o,h){A(s,{nonce:o&&o.nonce},h)},each:function(s,o){var h,m=0;if(q(s))for(h=s.length;m<h&&o.call(s[m],m,s[m])!==!1;m++);else for(m in s)if(o.call(s[m],m,s[m])===!1)break;return s},makeArray:function(s,o){var h=o||[];return s!=null&&(q(Object(s))?u.merge(h,typeof s=="string"?[s]:s):l.call(h,s)),h},inArray:function(s,o,h){return o==null?-1:f.call(o,s,h)},merge:function(s,o){for(var h=+o.length,m=0,y=s.length;m<h;m++)s[y++]=o[m];return s.length=y,s},grep:function(s,o,h){for(var m,y=[],b=0,E=s.length,B=!h;b<E;b++)m=!o(s[b],b),m!==B&&y.push(s[b]);return y},map:function(s,o,h){var m,y,b=0,E=[];if(q(s))for(m=s.length;b<m;b++)y=o(s[b],b,h),y!=null&&E.push(y);else for(b in s)y=o(s[b],b,h),y!=null&&E.push(y);return c(E)},guid:1,support:S}),typeof Symbol=="function"&&(u.fn[Symbol.iterator]=i[Symbol.iterator]),u.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,o){d["[object "+o+"]"]=o.toLowerCase()});function q(s){var o=!!s&&"length"in s&&s.length,h=L(s);return v(s)||x(s)?!1:h==="array"||o===0||typeof o=="number"&&o>0&&o-1 in s}var R=function(s){var o,h,m,y,b,E,B,N,V,ee,de,Y,ie,ze,tt,Be,Ht,Bt,ui,yt="sizzle"+1*new Date,et=s.document,oi=0,pt=0,Pt=ss(),Rr=ss(),is=ss(),fi=ss(),yn=function(w,U){return w===U&&(de=!0),0},bn={}.hasOwnProperty,ci=[],an=ci.pop,Ei=ci.push,on=ci.push,Fo=ci.slice,Mn=function(w,U){for(var k=0,se=w.length;k<se;k++)if(w[k]===U)return k;return-1},Qs="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",vt="[\\x20\\t\\r\\n\\f]",Sn="(?:\\\\[\\da-fA-F]{1,6}"+vt+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Uo="\\["+vt+"*("+Sn+")(?:"+vt+"*([*^$|!~]?=)"+vt+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Sn+"))|)"+vt+"*\\]",ea=":("+Sn+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Uo+")*)|.*)\\)|)",ku=new RegExp(vt+"+","g"),ns=new RegExp("^"+vt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+vt+"+$","g"),Gu=new RegExp("^"+vt+"*,"+vt+"*"),Oo=new RegExp("^"+vt+"*([>+~]|"+vt+")"+vt+"*"),Hu=new RegExp(vt+"|>"),Vu=new RegExp(ea),Wu=new RegExp("^"+Sn+"$"),rs={ID:new RegExp("^#("+Sn+")"),CLASS:new RegExp("^\\.("+Sn+")"),TAG:new RegExp("^("+Sn+"|[*])"),ATTR:new RegExp("^"+Uo),PSEUDO:new RegExp("^"+ea),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+vt+"*(even|odd|(([+-]|)(\\d*)n|)"+vt+"*(?:([+-]|)"+vt+"*(\\d+)|))"+vt+"*\\)|)","i"),bool:new RegExp("^(?:"+Qs+")$","i"),needsContext:new RegExp("^"+vt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+vt+"*((?:-\\d)?\\d*)"+vt+"*\\)|)(?=[^-]|$)","i")},qu=/HTML$/i,Xu=/^(?:input|select|textarea|button)$/i,ju=/^h\d$/i,Lr=/^[^{]+\{\s*\[native \w/,$u=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ta=/[+~]/,Xi=new RegExp("\\\\[\\da-fA-F]{1,6}"+vt+"?|\\\\([^\\r\\n\\f])","g"),ji=function(w,U){var k="0x"+w.slice(1)-65536;return U||(k<0?String.fromCharCode(k+65536):String.fromCharCode(k>>10|55296,k&1023|56320))},Bo=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,zo=function(w,U){return U?w==="\0"?"�":w.slice(0,-1)+"\\"+w.charCodeAt(w.length-1).toString(16)+" ":"\\"+w},ko=function(){Y()},Yu=os(function(w){return w.disabled===!0&&w.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{on.apply(ci=Fo.call(et.childNodes),et.childNodes),ci[et.childNodes.length].nodeType}catch{on={apply:ci.length?function(U,k){Ei.apply(U,Fo.call(k))}:function(U,k){for(var se=U.length,H=0;U[se++]=k[H++];);U.length=se-1}}}function Mt(w,U,k,se){var H,le,pe,Ee,we,je,We,Ye=U&&U.ownerDocument,ft=U?U.nodeType:9;if(k=k||[],typeof w!="string"||!w||ft!==1&&ft!==9&&ft!==11)return k;if(!se&&(Y(U),U=U||ie,tt)){if(ft!==11&&(we=$u.exec(w)))if(H=we[1]){if(ft===9)if(pe=U.getElementById(H)){if(pe.id===H)return k.push(pe),k}else return k;else if(Ye&&(pe=Ye.getElementById(H))&&ui(U,pe)&&pe.id===H)return k.push(pe),k}else{if(we[2])return on.apply(k,U.getElementsByTagName(w)),k;if((H=we[3])&&h.getElementsByClassName&&U.getElementsByClassName)return on.apply(k,U.getElementsByClassName(H)),k}if(h.qsa&&!fi[w+" "]&&(!Be||!Be.test(w))&&(ft!==1||U.nodeName.toLowerCase()!=="object")){if(We=w,Ye=U,ft===1&&(Hu.test(w)||Oo.test(w))){for(Ye=ta.test(w)&&na(U.parentNode)||U,(Ye!==U||!h.scope)&&((Ee=U.getAttribute("id"))?Ee=Ee.replace(Bo,zo):U.setAttribute("id",Ee=yt)),je=E(w),le=je.length;le--;)je[le]=(Ee?"#"+Ee:":scope")+" "+as(je[le]);We=je.join(",")}try{return on.apply(k,Ye.querySelectorAll(We)),k}catch{fi(w,!0)}finally{Ee===yt&&U.removeAttribute("id")}}}return N(w.replace(ns,"$1"),U,k,se)}function ss(){var w=[];function U(k,se){return w.push(k+" ")>m.cacheLength&&delete U[w.shift()],U[k+" "]=se}return U}function Ri(w){return w[yt]=!0,w}function Ti(w){var U=ie.createElement("fieldset");try{return!!w(U)}catch{return!1}finally{U.parentNode&&U.parentNode.removeChild(U),U=null}}function ia(w,U){for(var k=w.split("|"),se=k.length;se--;)m.attrHandle[k[se]]=U}function Go(w,U){var k=U&&w,se=k&&w.nodeType===1&&U.nodeType===1&&w.sourceIndex-U.sourceIndex;if(se)return se;if(k){for(;k=k.nextSibling;)if(k===U)return-1}return w?1:-1}function Zu(w){return function(U){var k=U.nodeName.toLowerCase();return k==="input"&&U.type===w}}function Ku(w){return function(U){var k=U.nodeName.toLowerCase();return(k==="input"||k==="button")&&U.type===w}}function Ho(w){return function(U){return"form"in U?U.parentNode&&U.disabled===!1?"label"in U?"label"in U.parentNode?U.parentNode.disabled===w:U.disabled===w:U.isDisabled===w||U.isDisabled!==!w&&Yu(U)===w:U.disabled===w:"label"in U?U.disabled===w:!1}}function En(w){return Ri(function(U){return U=+U,Ri(function(k,se){for(var H,le=w([],k.length,U),pe=le.length;pe--;)k[H=le[pe]]&&(k[H]=!(se[H]=k[H]))})})}function na(w){return w&&typeof w.getElementsByTagName<"u"&&w}h=Mt.support={},b=Mt.isXML=function(w){var U=w&&w.namespaceURI,k=w&&(w.ownerDocument||w).documentElement;return!qu.test(U||k&&k.nodeName||"HTML")},Y=Mt.setDocument=function(w){var U,k,se=w?w.ownerDocument||w:et;return se==ie||se.nodeType!==9||!se.documentElement||(ie=se,ze=ie.documentElement,tt=!b(ie),et!=ie&&(k=ie.defaultView)&&k.top!==k&&(k.addEventListener?k.addEventListener("unload",ko,!1):k.attachEvent&&k.attachEvent("onunload",ko)),h.scope=Ti(function(H){return ze.appendChild(H).appendChild(ie.createElement("div")),typeof H.querySelectorAll<"u"&&!H.querySelectorAll(":scope fieldset div").length}),h.cssHas=Ti(function(){try{return ie.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),h.attributes=Ti(function(H){return H.className="i",!H.getAttribute("className")}),h.getElementsByTagName=Ti(function(H){return H.appendChild(ie.createComment("")),!H.getElementsByTagName("*").length}),h.getElementsByClassName=Lr.test(ie.getElementsByClassName),h.getById=Ti(function(H){return ze.appendChild(H).id=yt,!ie.getElementsByName||!ie.getElementsByName(yt).length}),h.getById?(m.filter.ID=function(H){var le=H.replace(Xi,ji);return function(pe){return pe.getAttribute("id")===le}},m.find.ID=function(H,le){if(typeof le.getElementById<"u"&&tt){var pe=le.getElementById(H);return pe?[pe]:[]}}):(m.filter.ID=function(H){var le=H.replace(Xi,ji);return function(pe){var Ee=typeof pe.getAttributeNode<"u"&&pe.getAttributeNode("id");return Ee&&Ee.value===le}},m.find.ID=function(H,le){if(typeof le.getElementById<"u"&&tt){var pe,Ee,we,je=le.getElementById(H);if(je){if(pe=je.getAttributeNode("id"),pe&&pe.value===H)return[je];for(we=le.getElementsByName(H),Ee=0;je=we[Ee++];)if(pe=je.getAttributeNode("id"),pe&&pe.value===H)return[je]}return[]}}),m.find.TAG=h.getElementsByTagName?function(H,le){if(typeof le.getElementsByTagName<"u")return le.getElementsByTagName(H);if(h.qsa)return le.querySelectorAll(H)}:function(H,le){var pe,Ee=[],we=0,je=le.getElementsByTagName(H);if(H==="*"){for(;pe=je[we++];)pe.nodeType===1&&Ee.push(pe);return Ee}return je},m.find.CLASS=h.getElementsByClassName&&function(H,le){if(typeof le.getElementsByClassName<"u"&&tt)return le.getElementsByClassName(H)},Ht=[],Be=[],(h.qsa=Lr.test(ie.querySelectorAll))&&(Ti(function(H){var le;ze.appendChild(H).innerHTML="<a id='"+yt+"'></a><select id='"+yt+"-\r\\' msallowcapture=''><option selected=''></option></select>",H.querySelectorAll("[msallowcapture^='']").length&&Be.push("[*^$]="+vt+`*(?:''|"")`),H.querySelectorAll("[selected]").length||Be.push("\\["+vt+"*(?:value|"+Qs+")"),H.querySelectorAll("[id~="+yt+"-]").length||Be.push("~="),le=ie.createElement("input"),le.setAttribute("name",""),H.appendChild(le),H.querySelectorAll("[name='']").length||Be.push("\\["+vt+"*name"+vt+"*="+vt+`*(?:''|"")`),H.querySelectorAll(":checked").length||Be.push(":checked"),H.querySelectorAll("a#"+yt+"+*").length||Be.push(".#.+[+~]"),H.querySelectorAll("\\\f"),Be.push("[\\r\\n\\f]")}),Ti(function(H){H.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var le=ie.createElement("input");le.setAttribute("type","hidden"),H.appendChild(le).setAttribute("name","D"),H.querySelectorAll("[name=d]").length&&Be.push("name"+vt+"*[*^$|!~]?="),H.querySelectorAll(":enabled").length!==2&&Be.push(":enabled",":disabled"),ze.appendChild(H).disabled=!0,H.querySelectorAll(":disabled").length!==2&&Be.push(":enabled",":disabled"),H.querySelectorAll("*,:x"),Be.push(",.*:")})),(h.matchesSelector=Lr.test(Bt=ze.matches||ze.webkitMatchesSelector||ze.mozMatchesSelector||ze.oMatchesSelector||ze.msMatchesSelector))&&Ti(function(H){h.disconnectedMatch=Bt.call(H,"*"),Bt.call(H,"[s!='']:x"),Ht.push("!=",ea)}),h.cssHas||Be.push(":has"),Be=Be.length&&new RegExp(Be.join("|")),Ht=Ht.length&&new RegExp(Ht.join("|")),U=Lr.test(ze.compareDocumentPosition),ui=U||Lr.test(ze.contains)?function(H,le){var pe=H.nodeType===9&&H.documentElement||H,Ee=le&&le.parentNode;return H===Ee||!!(Ee&&Ee.nodeType===1&&(pe.contains?pe.contains(Ee):H.compareDocumentPosition&&H.compareDocumentPosition(Ee)&16))}:function(H,le){if(le){for(;le=le.parentNode;)if(le===H)return!0}return!1},yn=U?function(H,le){if(H===le)return de=!0,0;var pe=!H.compareDocumentPosition-!le.compareDocumentPosition;return pe||(pe=(H.ownerDocument||H)==(le.ownerDocument||le)?H.compareDocumentPosition(le):1,pe&1||!h.sortDetached&&le.compareDocumentPosition(H)===pe?H==ie||H.ownerDocument==et&&ui(et,H)?-1:le==ie||le.ownerDocument==et&&ui(et,le)?1:ee?Mn(ee,H)-Mn(ee,le):0:pe&4?-1:1)}:function(H,le){if(H===le)return de=!0,0;var pe,Ee=0,we=H.parentNode,je=le.parentNode,We=[H],Ye=[le];if(!we||!je)return H==ie?-1:le==ie?1:we?-1:je?1:ee?Mn(ee,H)-Mn(ee,le):0;if(we===je)return Go(H,le);for(pe=H;pe=pe.parentNode;)We.unshift(pe);for(pe=le;pe=pe.parentNode;)Ye.unshift(pe);for(;We[Ee]===Ye[Ee];)Ee++;return Ee?Go(We[Ee],Ye[Ee]):We[Ee]==et?-1:Ye[Ee]==et?1:0}),ie},Mt.matches=function(w,U){return Mt(w,null,null,U)},Mt.matchesSelector=function(w,U){if(Y(w),h.matchesSelector&&tt&&!fi[U+" "]&&(!Ht||!Ht.test(U))&&(!Be||!Be.test(U)))try{var k=Bt.call(w,U);if(k||h.disconnectedMatch||w.document&&w.document.nodeType!==11)return k}catch{fi(U,!0)}return Mt(U,ie,null,[w]).length>0},Mt.contains=function(w,U){return(w.ownerDocument||w)!=ie&&Y(w),ui(w,U)},Mt.attr=function(w,U){(w.ownerDocument||w)!=ie&&Y(w);var k=m.attrHandle[U.toLowerCase()],se=k&&bn.call(m.attrHandle,U.toLowerCase())?k(w,U,!tt):void 0;return se!==void 0?se:h.attributes||!tt?w.getAttribute(U):(se=w.getAttributeNode(U))&&se.specified?se.value:null},Mt.escape=function(w){return(w+"").replace(Bo,zo)},Mt.error=function(w){throw new Error("Syntax error, unrecognized expression: "+w)},Mt.uniqueSort=function(w){var U,k=[],se=0,H=0;if(de=!h.detectDuplicates,ee=!h.sortStable&&w.slice(0),w.sort(yn),de){for(;U=w[H++];)U===w[H]&&(se=k.push(H));for(;se--;)w.splice(k[se],1)}return ee=null,w},y=Mt.getText=function(w){var U,k="",se=0,H=w.nodeType;if(H){if(H===1||H===9||H===11){if(typeof w.textContent=="string")return w.textContent;for(w=w.firstChild;w;w=w.nextSibling)k+=y(w)}else if(H===3||H===4)return w.nodeValue}else for(;U=w[se++];)k+=y(U);return k},m=Mt.selectors={cacheLength:50,createPseudo:Ri,match:rs,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(w){return w[1]=w[1].replace(Xi,ji),w[3]=(w[3]||w[4]||w[5]||"").replace(Xi,ji),w[2]==="~="&&(w[3]=" "+w[3]+" "),w.slice(0,4)},CHILD:function(w){return w[1]=w[1].toLowerCase(),w[1].slice(0,3)==="nth"?(w[3]||Mt.error(w[0]),w[4]=+(w[4]?w[5]+(w[6]||1):2*(w[3]==="even"||w[3]==="odd")),w[5]=+(w[7]+w[8]||w[3]==="odd")):w[3]&&Mt.error(w[0]),w},PSEUDO:function(w){var U,k=!w[6]&&w[2];return rs.CHILD.test(w[0])?null:(w[3]?w[2]=w[4]||w[5]||"":k&&Vu.test(k)&&(U=E(k,!0))&&(U=k.indexOf(")",k.length-U)-k.length)&&(w[0]=w[0].slice(0,U),w[2]=k.slice(0,U)),w.slice(0,3))}},filter:{TAG:function(w){var U=w.replace(Xi,ji).toLowerCase();return w==="*"?function(){return!0}:function(k){return k.nodeName&&k.nodeName.toLowerCase()===U}},CLASS:function(w){var U=Pt[w+" "];return U||(U=new RegExp("(^|"+vt+")"+w+"("+vt+"|$)"))&&Pt(w,function(k){return U.test(typeof k.className=="string"&&k.className||typeof k.getAttribute<"u"&&k.getAttribute("class")||"")})},ATTR:function(w,U,k){return function(se){var H=Mt.attr(se,w);return H==null?U==="!=":U?(H+="",U==="="?H===k:U==="!="?H!==k:U==="^="?k&&H.indexOf(k)===0:U==="*="?k&&H.indexOf(k)>-1:U==="$="?k&&H.slice(-k.length)===k:U==="~="?(" "+H.replace(ku," ")+" ").indexOf(k)>-1:U==="|="?H===k||H.slice(0,k.length+1)===k+"-":!1):!0}},CHILD:function(w,U,k,se,H){var le=w.slice(0,3)!=="nth",pe=w.slice(-4)!=="last",Ee=U==="of-type";return se===1&&H===0?function(we){return!!we.parentNode}:function(we,je,We){var Ye,ft,St,$e,Vt,Yt,hi=le!==pe?"nextSibling":"previousSibling",Ct=we.parentNode,Dr=Ee&&we.nodeName.toLowerCase(),Pr=!We&&!Ee,di=!1;if(Ct){if(le){for(;hi;){for($e=we;$e=$e[hi];)if(Ee?$e.nodeName.toLowerCase()===Dr:$e.nodeType===1)return!1;Yt=hi=w==="only"&&!Yt&&"nextSibling"}return!0}if(Yt=[pe?Ct.firstChild:Ct.lastChild],pe&&Pr){for($e=Ct,St=$e[yt]||($e[yt]={}),ft=St[$e.uniqueID]||(St[$e.uniqueID]={}),Ye=ft[w]||[],Vt=Ye[0]===oi&&Ye[1],di=Vt&&Ye[2],$e=Vt&&Ct.childNodes[Vt];$e=++Vt&&$e&&$e[hi]||(di=Vt=0)||Yt.pop();)if($e.nodeType===1&&++di&&$e===we){ft[w]=[oi,Vt,di];break}}else if(Pr&&($e=we,St=$e[yt]||($e[yt]={}),ft=St[$e.uniqueID]||(St[$e.uniqueID]={}),Ye=ft[w]||[],Vt=Ye[0]===oi&&Ye[1],di=Vt),di===!1)for(;($e=++Vt&&$e&&$e[hi]||(di=Vt=0)||Yt.pop())&&!((Ee?$e.nodeName.toLowerCase()===Dr:$e.nodeType===1)&&++di&&(Pr&&(St=$e[yt]||($e[yt]={}),ft=St[$e.uniqueID]||(St[$e.uniqueID]={}),ft[w]=[oi,di]),$e===we)););return di-=H,di===se||di%se===0&&di/se>=0}}},PSEUDO:function(w,U){var k,se=m.pseudos[w]||m.setFilters[w.toLowerCase()]||Mt.error("unsupported pseudo: "+w);return se[yt]?se(U):se.length>1?(k=[w,w,"",U],m.setFilters.hasOwnProperty(w.toLowerCase())?Ri(function(H,le){for(var pe,Ee=se(H,U),we=Ee.length;we--;)pe=Mn(H,Ee[we]),H[pe]=!(le[pe]=Ee[we])}):function(H){return se(H,0,k)}):se}},pseudos:{not:Ri(function(w){var U=[],k=[],se=B(w.replace(ns,"$1"));return se[yt]?Ri(function(H,le,pe,Ee){for(var we,je=se(H,null,Ee,[]),We=H.length;We--;)(we=je[We])&&(H[We]=!(le[We]=we))}):function(H,le,pe){return U[0]=H,se(U,null,pe,k),U[0]=null,!k.pop()}}),has:Ri(function(w){return function(U){return Mt(w,U).length>0}}),contains:Ri(function(w){return w=w.replace(Xi,ji),function(U){return(U.textContent||y(U)).indexOf(w)>-1}}),lang:Ri(function(w){return Wu.test(w||"")||Mt.error("unsupported lang: "+w),w=w.replace(Xi,ji).toLowerCase(),function(U){var k;do if(k=tt?U.lang:U.getAttribute("xml:lang")||U.getAttribute("lang"))return k=k.toLowerCase(),k===w||k.indexOf(w+"-")===0;while((U=U.parentNode)&&U.nodeType===1);return!1}}),target:function(w){var U=s.location&&s.location.hash;return U&&U.slice(1)===w.id},root:function(w){return w===ze},focus:function(w){return w===ie.activeElement&&(!ie.hasFocus||ie.hasFocus())&&!!(w.type||w.href||~w.tabIndex)},enabled:Ho(!1),disabled:Ho(!0),checked:function(w){var U=w.nodeName.toLowerCase();return U==="input"&&!!w.checked||U==="option"&&!!w.selected},selected:function(w){return w.parentNode&&w.parentNode.selectedIndex,w.selected===!0},empty:function(w){for(w=w.firstChild;w;w=w.nextSibling)if(w.nodeType<6)return!1;return!0},parent:function(w){return!m.pseudos.empty(w)},header:function(w){return ju.test(w.nodeName)},input:function(w){return Xu.test(w.nodeName)},button:function(w){var U=w.nodeName.toLowerCase();return U==="input"&&w.type==="button"||U==="button"},text:function(w){var U;return w.nodeName.toLowerCase()==="input"&&w.type==="text"&&((U=w.getAttribute("type"))==null||U.toLowerCase()==="text")},first:En(function(){return[0]}),last:En(function(w,U){return[U-1]}),eq:En(function(w,U,k){return[k<0?k+U:k]}),even:En(function(w,U){for(var k=0;k<U;k+=2)w.push(k);return w}),odd:En(function(w,U){for(var k=1;k<U;k+=2)w.push(k);return w}),lt:En(function(w,U,k){for(var se=k<0?k+U:k>U?U:k;--se>=0;)w.push(se);return w}),gt:En(function(w,U,k){for(var se=k<0?k+U:k;++se<U;)w.push(se);return w})}},m.pseudos.nth=m.pseudos.eq;for(o in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})m.pseudos[o]=Zu(o);for(o in{submit:!0,reset:!0})m.pseudos[o]=Ku(o);function Vo(){}Vo.prototype=m.filters=m.pseudos,m.setFilters=new Vo,E=Mt.tokenize=function(w,U){var k,se,H,le,pe,Ee,we,je=Rr[w+" "];if(je)return U?0:je.slice(0);for(pe=w,Ee=[],we=m.preFilter;pe;){(!k||(se=Gu.exec(pe)))&&(se&&(pe=pe.slice(se[0].length)||pe),Ee.push(H=[])),k=!1,(se=Oo.exec(pe))&&(k=se.shift(),H.push({value:k,type:se[0].replace(ns," ")}),pe=pe.slice(k.length));for(le in m.filter)(se=rs[le].exec(pe))&&(!we[le]||(se=we[le](se)))&&(k=se.shift(),H.push({value:k,type:le,matches:se}),pe=pe.slice(k.length));if(!k)break}return U?pe.length:pe?Mt.error(w):Rr(w,Ee).slice(0)};function as(w){for(var U=0,k=w.length,se="";U<k;U++)se+=w[U].value;return se}function os(w,U,k){var se=U.dir,H=U.next,le=H||se,pe=k&&le==="parentNode",Ee=pt++;return U.first?function(we,je,We){for(;we=we[se];)if(we.nodeType===1||pe)return w(we,je,We);return!1}:function(we,je,We){var Ye,ft,St,$e=[oi,Ee];if(We){for(;we=we[se];)if((we.nodeType===1||pe)&&w(we,je,We))return!0}else for(;we=we[se];)if(we.nodeType===1||pe)if(St=we[yt]||(we[yt]={}),ft=St[we.uniqueID]||(St[we.uniqueID]={}),H&&H===we.nodeName.toLowerCase())we=we[se]||we;else{if((Ye=ft[le])&&Ye[0]===oi&&Ye[1]===Ee)return $e[2]=Ye[2];if(ft[le]=$e,$e[2]=w(we,je,We))return!0}return!1}}function ra(w){return w.length>1?function(U,k,se){for(var H=w.length;H--;)if(!w[H](U,k,se))return!1;return!0}:w[0]}function Ju(w,U,k){for(var se=0,H=U.length;se<H;se++)Mt(w,U[se],k);return k}function cs(w,U,k,se,H){for(var le,pe=[],Ee=0,we=w.length,je=U!=null;Ee<we;Ee++)(le=w[Ee])&&(!k||k(le,se,H))&&(pe.push(le),je&&U.push(Ee));return pe}function sa(w,U,k,se,H,le){return se&&!se[yt]&&(se=sa(se)),H&&!H[yt]&&(H=sa(H,le)),Ri(function(pe,Ee,we,je){var We,Ye,ft,St=[],$e=[],Vt=Ee.length,Yt=pe||Ju(U||"*",we.nodeType?[we]:we,[]),hi=w&&(pe||!U)?cs(Yt,St,w,we,je):Yt,Ct=k?H||(pe?w:Vt||se)?[]:Ee:hi;if(k&&k(hi,Ct,we,je),se)for(We=cs(Ct,$e),se(We,[],we,je),Ye=We.length;Ye--;)(ft=We[Ye])&&(Ct[$e[Ye]]=!(hi[$e[Ye]]=ft));if(pe){if(H||w){if(H){for(We=[],Ye=Ct.length;Ye--;)(ft=Ct[Ye])&&We.push(hi[Ye]=ft);H(null,Ct=[],We,je)}for(Ye=Ct.length;Ye--;)(ft=Ct[Ye])&&(We=H?Mn(pe,ft):St[Ye])>-1&&(pe[We]=!(Ee[We]=ft))}}else Ct=cs(Ct===Ee?Ct.splice(Vt,Ct.length):Ct),H?H(null,Ee,Ct,je):on.apply(Ee,Ct)})}function aa(w){for(var U,k,se,H=w.length,le=m.relative[w[0].type],pe=le||m.relative[" "],Ee=le?1:0,we=os(function(Ye){return Ye===U},pe,!0),je=os(function(Ye){return Mn(U,Ye)>-1},pe,!0),We=[function(Ye,ft,St){var $e=!le&&(St||ft!==V)||((U=ft).nodeType?we(Ye,ft,St):je(Ye,ft,St));return U=null,$e}];Ee<H;Ee++)if(k=m.relative[w[Ee].type])We=[os(ra(We),k)];else{if(k=m.filter[w[Ee].type].apply(null,w[Ee].matches),k[yt]){for(se=++Ee;se<H&&!m.relative[w[se].type];se++);return sa(Ee>1&&ra(We),Ee>1&&as(w.slice(0,Ee-1).concat({value:w[Ee-2].type===" "?"*":""})).replace(ns,"$1"),k,Ee<se&&aa(w.slice(Ee,se)),se<H&&aa(w=w.slice(se)),se<H&&as(w))}We.push(k)}return ra(We)}function Qu(w,U){var k=U.length>0,se=w.length>0,H=function(le,pe,Ee,we,je){var We,Ye,ft,St=0,$e="0",Vt=le&&[],Yt=[],hi=V,Ct=le||se&&m.find.TAG("*",je),Dr=oi+=hi==null?1:Math.random()||.1,Pr=Ct.length;for(je&&(V=pe==ie||pe||je);$e!==Pr&&(We=Ct[$e])!=null;$e++){if(se&&We){for(Ye=0,!pe&&We.ownerDocument!=ie&&(Y(We),Ee=!tt);ft=w[Ye++];)if(ft(We,pe||ie,Ee)){we.push(We);break}je&&(oi=Dr)}k&&((We=!ft&&We)&&St--,le&&Vt.push(We))}if(St+=$e,k&&$e!==St){for(Ye=0;ft=U[Ye++];)ft(Vt,Yt,pe,Ee);if(le){if(St>0)for(;$e--;)Vt[$e]||Yt[$e]||(Yt[$e]=an.call(we));Yt=cs(Yt)}on.apply(we,Yt),je&&!le&&Yt.length>0&&St+U.length>1&&Mt.uniqueSort(we)}return je&&(oi=Dr,V=hi),Vt};return k?Ri(H):H}return B=Mt.compile=function(w,U){var k,se=[],H=[],le=is[w+" "];if(!le){for(U||(U=E(w)),k=U.length;k--;)le=aa(U[k]),le[yt]?se.push(le):H.push(le);le=is(w,Qu(H,se)),le.selector=w}return le},N=Mt.select=function(w,U,k,se){var H,le,pe,Ee,we,je=typeof w=="function"&&w,We=!se&&E(w=je.selector||w);if(k=k||[],We.length===1){if(le=We[0]=We[0].slice(0),le.length>2&&(pe=le[0]).type==="ID"&&U.nodeType===9&&tt&&m.relative[le[1].type]){if(U=(m.find.ID(pe.matches[0].replace(Xi,ji),U)||[])[0],U)je&&(U=U.parentNode);else return k;w=w.slice(le.shift().value.length)}for(H=rs.needsContext.test(w)?0:le.length;H--&&(pe=le[H],!m.relative[Ee=pe.type]);)if((we=m.find[Ee])&&(se=we(pe.matches[0].replace(Xi,ji),ta.test(le[0].type)&&na(U.parentNode)||U))){if(le.splice(H,1),w=se.length&&as(le),!w)return on.apply(k,se),k;break}}return(je||B(w,We))(se,U,!tt,k,!U||ta.test(w)&&na(U.parentNode)||U),k},h.sortStable=yt.split("").sort(yn).join("")===yt,h.detectDuplicates=!!de,Y(),h.sortDetached=Ti(function(w){return w.compareDocumentPosition(ie.createElement("fieldset"))&1}),Ti(function(w){return w.innerHTML="<a href='#'></a>",w.firstChild.getAttribute("href")==="#"})||ia("type|href|height|width",function(w,U,k){if(!k)return w.getAttribute(U,U.toLowerCase()==="type"?1:2)}),(!h.attributes||!Ti(function(w){return w.innerHTML="<input/>",w.firstChild.setAttribute("value",""),w.firstChild.getAttribute("value")===""}))&&ia("value",function(w,U,k){if(!k&&w.nodeName.toLowerCase()==="input")return w.defaultValue}),Ti(function(w){return w.getAttribute("disabled")==null})||ia(Qs,function(w,U,k){var se;if(!k)return w[U]===!0?U.toLowerCase():(se=w.getAttributeNode(U))&&se.specified?se.value:null}),Mt}(e);u.find=R,u.expr=R.selectors,u.expr[":"]=u.expr.pseudos,u.uniqueSort=u.unique=R.uniqueSort,u.text=R.getText,u.isXMLDoc=R.isXML,u.contains=R.contains,u.escapeSelector=R.escape;var O=function(s,o,h){for(var m=[],y=h!==void 0;(s=s[o])&&s.nodeType!==9;)if(s.nodeType===1){if(y&&u(s).is(h))break;m.push(s)}return m},W=function(s,o){for(var h=[];s;s=s.nextSibling)s.nodeType===1&&s!==o&&h.push(s);return h},he=u.expr.match.needsContext;function ue(s,o){return s.nodeName&&s.nodeName.toLowerCase()===o.toLowerCase()}var J=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(s,o,h){return v(o)?u.grep(s,function(m,y){return!!o.call(m,y,m)!==h}):o.nodeType?u.grep(s,function(m){return m===o!==h}):typeof o!="string"?u.grep(s,function(m){return f.call(o,m)>-1!==h}):u.filter(o,s,h)}u.filter=function(s,o,h){var m=o[0];return h&&(s=":not("+s+")"),o.length===1&&m.nodeType===1?u.find.matchesSelector(m,s)?[m]:[]:u.find.matches(s,u.grep(o,function(y){return y.nodeType===1}))},u.fn.extend({find:function(s){var o,h,m=this.length,y=this;if(typeof s!="string")return this.pushStack(u(s).filter(function(){for(o=0;o<m;o++)if(u.contains(y[o],this))return!0}));for(h=this.pushStack([]),o=0;o<m;o++)u.find(s,y[o],h);return m>1?u.uniqueSort(h):h},filter:function(s){return this.pushStack(j(this,s||[],!1))},not:function(s){return this.pushStack(j(this,s||[],!0))},is:function(s){return!!j(this,typeof s=="string"&&he.test(s)?u(s):s||[],!1).length}});var oe,ve=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,xe=u.fn.init=function(s,o,h){var m,y;if(!s)return this;if(h=h||oe,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?m=[null,s,null]:m=ve.exec(s),m&&(m[1]||!o))if(m[1]){if(o=o instanceof u?o[0]:o,u.merge(this,u.parseHTML(m[1],o&&o.nodeType?o.ownerDocument||o:T,!0)),J.test(m[1])&&u.isPlainObject(o))for(m in o)v(this[m])?this[m](o[m]):this.attr(m,o[m]);return this}else return y=T.getElementById(m[2]),y&&(this[0]=y,this.length=1),this;else return!o||o.jquery?(o||h).find(s):this.constructor(o).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(v(s))return h.ready!==void 0?h.ready(s):s(u)}return u.makeArray(s,this)};xe.prototype=u.fn,oe=u(T);var ce=/^(?:parents|prev(?:Until|All))/,ye={children:!0,contents:!0,next:!0,prev:!0};u.fn.extend({has:function(s){var o=u(s,this),h=o.length;return this.filter(function(){for(var m=0;m<h;m++)if(u.contains(this,o[m]))return!0})},closest:function(s,o){var h,m=0,y=this.length,b=[],E=typeof s!="string"&&u(s);if(!he.test(s)){for(;m<y;m++)for(h=this[m];h&&h!==o;h=h.parentNode)if(h.nodeType<11&&(E?E.index(h)>-1:h.nodeType===1&&u.find.matchesSelector(h,s))){b.push(h);break}}return this.pushStack(b.length>1?u.uniqueSort(b):b)},index:function(s){return s?typeof s=="string"?f.call(u(s),this[0]):f.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,o){return this.pushStack(u.uniqueSort(u.merge(this.get(),u(s,o))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function ge(s,o){for(;(s=s[o])&&s.nodeType!==1;);return s}u.each({parent:function(s){var o=s.parentNode;return o&&o.nodeType!==11?o:null},parents:function(s){return O(s,"parentNode")},parentsUntil:function(s,o,h){return O(s,"parentNode",h)},next:function(s){return ge(s,"nextSibling")},prev:function(s){return ge(s,"previousSibling")},nextAll:function(s){return O(s,"nextSibling")},prevAll:function(s){return O(s,"previousSibling")},nextUntil:function(s,o,h){return O(s,"nextSibling",h)},prevUntil:function(s,o,h){return O(s,"previousSibling",h)},siblings:function(s){return W((s.parentNode||{}).firstChild,s)},children:function(s){return W(s.firstChild)},contents:function(s){return s.contentDocument!=null&&r(s.contentDocument)?s.contentDocument:(ue(s,"template")&&(s=s.content||s),u.merge([],s.childNodes))}},function(s,o){u.fn[s]=function(h,m){var y=u.map(this,o,h);return s.slice(-5)!=="Until"&&(m=h),m&&typeof m=="string"&&(y=u.filter(m,y)),this.length>1&&(ye[s]||u.uniqueSort(y),ce.test(s)&&y.reverse()),this.pushStack(y)}});var Ie=/[^\x20\t\r\n\f]+/g;function Q(s){var o={};return u.each(s.match(Ie)||[],function(h,m){o[m]=!0}),o}u.Callbacks=function(s){s=typeof s=="string"?Q(s):u.extend({},s);var o,h,m,y,b=[],E=[],B=-1,N=function(){for(y=y||s.once,m=o=!0;E.length;B=-1)for(h=E.shift();++B<b.length;)b[B].apply(h[0],h[1])===!1&&s.stopOnFalse&&(B=b.length,h=!1);s.memory||(h=!1),o=!1,y&&(h?b=[]:b="")},V={add:function(){return b&&(h&&!o&&(B=b.length-1,E.push(h)),function ee(de){u.each(de,function(Y,ie){v(ie)?(!s.unique||!V.has(ie))&&b.push(ie):ie&&ie.length&&L(ie)!=="string"&&ee(ie)})}(arguments),h&&!o&&N()),this},remove:function(){return u.each(arguments,function(ee,de){for(var Y;(Y=u.inArray(de,b,Y))>-1;)b.splice(Y,1),Y<=B&&B--}),this},has:function(ee){return ee?u.inArray(ee,b)>-1:b.length>0},empty:function(){return b&&(b=[]),this},disable:function(){return y=E=[],b=h="",this},disabled:function(){return!b},lock:function(){return y=E=[],!h&&!o&&(b=h=""),this},locked:function(){return!!y},fireWith:function(ee,de){return y||(de=de||[],de=[ee,de.slice?de.slice():de],E.push(de),o||N()),this},fire:function(){return V.fireWith(this,arguments),this},fired:function(){return!!m}};return V};function me(s){return s}function Se(s){throw s}function z(s,o,h,m){var y;try{s&&v(y=s.promise)?y.call(s).done(o).fail(h):s&&v(y=s.then)?y.call(s,o,h):o.apply(void 0,[s].slice(m))}catch(b){h.apply(void 0,[b])}}u.extend({Deferred:function(s){var o=[["notify","progress",u.Callbacks("memory"),u.Callbacks("memory"),2],["resolve","done",u.Callbacks("once memory"),u.Callbacks("once memory"),0,"resolved"],["reject","fail",u.Callbacks("once memory"),u.Callbacks("once memory"),1,"rejected"]],h="pending",m={state:function(){return h},always:function(){return y.done(arguments).fail(arguments),this},catch:function(b){return m.then(null,b)},pipe:function(){var b=arguments;return u.Deferred(function(E){u.each(o,function(B,N){var V=v(b[N[4]])&&b[N[4]];y[N[1]](function(){var ee=V&&V.apply(this,arguments);ee&&v(ee.promise)?ee.promise().progress(E.notify).done(E.resolve).fail(E.reject):E[N[0]+"With"](this,V?[ee]:arguments)})}),b=null}).promise()},then:function(b,E,B){var N=0;function V(ee,de,Y,ie){return function(){var ze=this,tt=arguments,Be=function(){var Bt,ui;if(!(ee<N)){if(Bt=Y.apply(ze,tt),Bt===de.promise())throw new TypeError("Thenable self-resolution");ui=Bt&&(typeof Bt=="object"||typeof Bt=="function")&&Bt.then,v(ui)?ie?ui.call(Bt,V(N,de,me,ie),V(N,de,Se,ie)):(N++,ui.call(Bt,V(N,de,me,ie),V(N,de,Se,ie),V(N,de,me,de.notifyWith))):(Y!==me&&(ze=void 0,tt=[Bt]),(ie||de.resolveWith)(ze,tt))}},Ht=ie?Be:function(){try{Be()}catch(Bt){u.Deferred.exceptionHook&&u.Deferred.exceptionHook(Bt,Ht.stackTrace),ee+1>=N&&(Y!==Se&&(ze=void 0,tt=[Bt]),de.rejectWith(ze,tt))}};ee?Ht():(u.Deferred.getStackHook&&(Ht.stackTrace=u.Deferred.getStackHook()),e.setTimeout(Ht))}}return u.Deferred(function(ee){o[0][3].add(V(0,ee,v(B)?B:me,ee.notifyWith)),o[1][3].add(V(0,ee,v(b)?b:me)),o[2][3].add(V(0,ee,v(E)?E:Se))}).promise()},promise:function(b){return b!=null?u.extend(b,m):m}},y={};return u.each(o,function(b,E){var B=E[2],N=E[5];m[E[1]]=B.add,N&&B.add(function(){h=N},o[3-b][2].disable,o[3-b][3].disable,o[0][2].lock,o[0][3].lock),B.add(E[3].fire),y[E[0]]=function(){return y[E[0]+"With"](this===y?void 0:this,arguments),this},y[E[0]+"With"]=B.fireWith}),m.promise(y),s&&s.call(y,y),y},when:function(s){var o=arguments.length,h=o,m=Array(h),y=a.call(arguments),b=u.Deferred(),E=function(B){return function(N){m[B]=this,y[B]=arguments.length>1?a.call(arguments):N,--o||b.resolveWith(m,y)}};if(o<=1&&(z(s,b.done(E(h)).resolve,b.reject,!o),b.state()==="pending"||v(y[h]&&y[h].then)))return b.then();for(;h--;)z(y[h],E(h),b.reject);return b.promise()}});var Ue=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;u.Deferred.exceptionHook=function(s,o){e.console&&e.console.warn&&s&&Ue.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,o)},u.readyException=function(s){e.setTimeout(function(){throw s})};var Fe=u.Deferred();u.fn.ready=function(s){return Fe.then(s).catch(function(o){u.readyException(o)}),this},u.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--u.readyWait:u.isReady)||(u.isReady=!0,!(s!==!0&&--u.readyWait>0)&&Fe.resolveWith(T,[u]))}}),u.ready.then=Fe.then;function Oe(){T.removeEventListener("DOMContentLoaded",Oe),e.removeEventListener("load",Oe),u.ready()}T.readyState==="complete"||T.readyState!=="loading"&&!T.documentElement.doScroll?e.setTimeout(u.ready):(T.addEventListener("DOMContentLoaded",Oe),e.addEventListener("load",Oe));var Re=function(s,o,h,m,y,b,E){var B=0,N=s.length,V=h==null;if(L(h)==="object"){y=!0;for(B in h)Re(s,o,B,h[B],!0,b,E)}else if(m!==void 0&&(y=!0,v(m)||(E=!0),V&&(E?(o.call(s,m),o=null):(V=o,o=function(ee,de,Y){return V.call(u(ee),Y)})),o))for(;B<N;B++)o(s[B],h,E?m:m.call(s[B],B,o(s[B],h)));return y?s:V?o.call(s):N?o(s[0],h):b},Ze=/^-ms-/,st=/-([a-z])/g;function ct(s,o){return o.toUpperCase()}function it(s){return s.replace(Ze,"ms-").replace(st,ct)}var Ft=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function jt(){this.expando=u.expando+jt.uid++}jt.uid=1,jt.prototype={cache:function(s){var o=s[this.expando];return o||(o={},Ft(s)&&(s.nodeType?s[this.expando]=o:Object.defineProperty(s,this.expando,{value:o,configurable:!0}))),o},set:function(s,o,h){var m,y=this.cache(s);if(typeof o=="string")y[it(o)]=h;else for(m in o)y[it(m)]=o[m];return y},get:function(s,o){return o===void 0?this.cache(s):s[this.expando]&&s[this.expando][it(o)]},access:function(s,o,h){return o===void 0||o&&typeof o=="string"&&h===void 0?this.get(s,o):(this.set(s,o,h),h!==void 0?h:o)},remove:function(s,o){var h,m=s[this.expando];if(m!==void 0){if(o!==void 0)for(Array.isArray(o)?o=o.map(it):(o=it(o),o=o in m?[o]:o.match(Ie)||[]),h=o.length;h--;)delete m[o[h]];(o===void 0||u.isEmptyObject(m))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var o=s[this.expando];return o!==void 0&&!u.isEmptyObject(o)}};var Pe=new jt,mt=new jt,At=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Tt=/[A-Z]/g;function bi(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:At.test(s)?JSON.parse(s):s}function ri(s,o,h){var m;if(h===void 0&&s.nodeType===1)if(m="data-"+o.replace(Tt,"-$&").toLowerCase(),h=s.getAttribute(m),typeof h=="string"){try{h=bi(h)}catch{}mt.set(s,o,h)}else h=void 0;return h}u.extend({hasData:function(s){return mt.hasData(s)||Pe.hasData(s)},data:function(s,o,h){return mt.access(s,o,h)},removeData:function(s,o){mt.remove(s,o)},_data:function(s,o,h){return Pe.access(s,o,h)},_removeData:function(s,o){Pe.remove(s,o)}}),u.fn.extend({data:function(s,o){var h,m,y,b=this[0],E=b&&b.attributes;if(s===void 0){if(this.length&&(y=mt.get(b),b.nodeType===1&&!Pe.get(b,"hasDataAttrs"))){for(h=E.length;h--;)E[h]&&(m=E[h].name,m.indexOf("data-")===0&&(m=it(m.slice(5)),ri(b,m,y[m])));Pe.set(b,"hasDataAttrs",!0)}return y}return typeof s=="object"?this.each(function(){mt.set(this,s)}):Re(this,function(B){var N;if(b&&B===void 0)return N=mt.get(b,s),N!==void 0||(N=ri(b,s),N!==void 0)?N:void 0;this.each(function(){mt.set(this,s,B)})},null,o,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){mt.remove(this,s)})}}),u.extend({queue:function(s,o,h){var m;if(s)return o=(o||"fx")+"queue",m=Pe.get(s,o),h&&(!m||Array.isArray(h)?m=Pe.access(s,o,u.makeArray(h)):m.push(h)),m||[]},dequeue:function(s,o){o=o||"fx";var h=u.queue(s,o),m=h.length,y=h.shift(),b=u._queueHooks(s,o),E=function(){u.dequeue(s,o)};y==="inprogress"&&(y=h.shift(),m--),y&&(o==="fx"&&h.unshift("inprogress"),delete b.stop,y.call(s,E,b)),!m&&b&&b.empty.fire()},_queueHooks:function(s,o){var h=o+"queueHooks";return Pe.get(s,h)||Pe.access(s,h,{empty:u.Callbacks("once memory").add(function(){Pe.remove(s,[o+"queue",h])})})}}),u.fn.extend({queue:function(s,o){var h=2;return typeof s!="string"&&(o=s,s="fx",h--),arguments.length<h?u.queue(this[0],s):o===void 0?this:this.each(function(){var m=u.queue(this,s,o);u._queueHooks(this,s),s==="fx"&&m[0]!=="inprogress"&&u.dequeue(this,s)})},dequeue:function(s){return this.each(function(){u.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,o){var h,m=1,y=u.Deferred(),b=this,E=this.length,B=function(){--m||y.resolveWith(b,[b])};for(typeof s!="string"&&(o=s,s=void 0),s=s||"fx";E--;)h=Pe.get(b[E],s+"queueHooks"),h&&h.empty&&(m++,h.empty.add(B));return B(),y.promise(o)}});var I=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,C=new RegExp("^(?:([+-])=|)("+I+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],be=T.documentElement,Me=function(s){return u.contains(s.ownerDocument,s)},Ce={composed:!0};be.getRootNode&&(Me=function(s){return u.contains(s.ownerDocument,s)||s.getRootNode(Ce)===s.ownerDocument});var ke=function(s,o){return s=o||s,s.style.display==="none"||s.style.display===""&&Me(s)&&u.css(s,"display")==="none"};function Le(s,o,h,m){var y,b,E=20,B=m?function(){return m.cur()}:function(){return u.css(s,o,"")},N=B(),V=h&&h[3]||(u.cssNumber[o]?"":"px"),ee=s.nodeType&&(u.cssNumber[o]||V!=="px"&&+N)&&C.exec(u.css(s,o));if(ee&&ee[3]!==V){for(N=N/2,V=V||ee[3],ee=+N||1;E--;)u.style(s,o,ee+V),(1-b)*(1-(b=B()/N||.5))<=0&&(E=0),ee=ee/b;ee=ee*2,u.style(s,o,ee+V),h=h||[]}return h&&(ee=+ee||+N||0,y=h[1]?ee+(h[1]+1)*h[2]:+h[2],m&&(m.unit=V,m.start=ee,m.end=y)),y}var fe={};function Ke(s){var o,h=s.ownerDocument,m=s.nodeName,y=fe[m];return y||(o=h.body.appendChild(h.createElement(m)),y=u.css(o,"display"),o.parentNode.removeChild(o),y==="none"&&(y="block"),fe[m]=y,y)}function Ne(s,o){for(var h,m,y=[],b=0,E=s.length;b<E;b++)m=s[b],m.style&&(h=m.style.display,o?(h==="none"&&(y[b]=Pe.get(m,"display")||null,y[b]||(m.style.display="")),m.style.display===""&&ke(m)&&(y[b]=Ke(m))):h!=="none"&&(y[b]="none",Pe.set(m,"display",h)));for(b=0;b<E;b++)y[b]!=null&&(s[b].style.display=y[b]);return s}u.fn.extend({show:function(){return Ne(this,!0)},hide:function(){return Ne(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){ke(this)?u(this).show():u(this).hide()})}});var qe=/^(?:checkbox|radio)$/i,Xe=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ge=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=T.createDocumentFragment(),o=s.appendChild(T.createElement("div")),h=T.createElement("input");h.setAttribute("type","radio"),h.setAttribute("checked","checked"),h.setAttribute("name","t"),o.appendChild(h),S.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,o.innerHTML="<textarea>x</textarea>",S.noCloneChecked=!!o.cloneNode(!0).lastChild.defaultValue,o.innerHTML="<option></option>",S.option=!!o.lastChild})();var Qe={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Qe.tbody=Qe.tfoot=Qe.colgroup=Qe.caption=Qe.thead,Qe.th=Qe.td,S.option||(Qe.optgroup=Qe.option=[1,"<select multiple='multiple'>","</select>"]);function lt(s,o){var h;return typeof s.getElementsByTagName<"u"?h=s.getElementsByTagName(o||"*"):typeof s.querySelectorAll<"u"?h=s.querySelectorAll(o||"*"):h=[],o===void 0||o&&ue(s,o)?u.merge([s],h):h}function It(s,o){for(var h=0,m=s.length;h<m;h++)Pe.set(s[h],"globalEval",!o||Pe.get(o[h],"globalEval"))}var G=/<|&#?\w+;/;function re(s,o,h,m,y){for(var b,E,B,N,V,ee,de=o.createDocumentFragment(),Y=[],ie=0,ze=s.length;ie<ze;ie++)if(b=s[ie],b||b===0)if(L(b)==="object")u.merge(Y,b.nodeType?[b]:b);else if(!G.test(b))Y.push(o.createTextNode(b));else{for(E=E||de.appendChild(o.createElement("div")),B=(Xe.exec(b)||["",""])[1].toLowerCase(),N=Qe[B]||Qe._default,E.innerHTML=N[1]+u.htmlPrefilter(b)+N[2],ee=N[0];ee--;)E=E.lastChild;u.merge(Y,E.childNodes),E=de.firstChild,E.textContent=""}for(de.textContent="",ie=0;b=Y[ie++];){if(m&&u.inArray(b,m)>-1){y&&y.push(b);continue}if(V=Me(b),E=lt(de.appendChild(b),"script"),V&&It(E),h)for(ee=0;b=E[ee++];)Ge.test(b.type||"")&&h.push(b)}return de}var _e=/^([^.]*)(?:\.(.+)|)/;function Ae(){return!0}function De(){return!1}function bt(s,o){return s===Ut()==(o==="focus")}function Ut(){try{return T.activeElement}catch{}}function Gt(s,o,h,m,y,b){var E,B;if(typeof o=="object"){typeof h!="string"&&(m=m||h,h=void 0);for(B in o)Gt(s,B,h,m,o[B],b);return s}if(m==null&&y==null?(y=h,m=h=void 0):y==null&&(typeof h=="string"?(y=m,m=void 0):(y=m,m=h,h=void 0)),y===!1)y=De;else if(!y)return s;return b===1&&(E=y,y=function(N){return u().off(N),E.apply(this,arguments)},y.guid=E.guid||(E.guid=u.guid++)),s.each(function(){u.event.add(this,o,y,m,h)})}u.event={global:{},add:function(s,o,h,m,y){var b,E,B,N,V,ee,de,Y,ie,ze,tt,Be=Pe.get(s);if(Ft(s))for(h.handler&&(b=h,h=b.handler,y=b.selector),y&&u.find.matchesSelector(be,y),h.guid||(h.guid=u.guid++),(N=Be.events)||(N=Be.events=Object.create(null)),(E=Be.handle)||(E=Be.handle=function(Ht){return typeof u<"u"&&u.event.triggered!==Ht.type?u.event.dispatch.apply(s,arguments):void 0}),o=(o||"").match(Ie)||[""],V=o.length;V--;)B=_e.exec(o[V])||[],ie=tt=B[1],ze=(B[2]||"").split(".").sort(),ie&&(de=u.event.special[ie]||{},ie=(y?de.delegateType:de.bindType)||ie,de=u.event.special[ie]||{},ee=u.extend({type:ie,origType:tt,data:m,handler:h,guid:h.guid,selector:y,needsContext:y&&u.expr.match.needsContext.test(y),namespace:ze.join(".")},b),(Y=N[ie])||(Y=N[ie]=[],Y.delegateCount=0,(!de.setup||de.setup.call(s,m,ze,E)===!1)&&s.addEventListener&&s.addEventListener(ie,E)),de.add&&(de.add.call(s,ee),ee.handler.guid||(ee.handler.guid=h.guid)),y?Y.splice(Y.delegateCount++,0,ee):Y.push(ee),u.event.global[ie]=!0)},remove:function(s,o,h,m,y){var b,E,B,N,V,ee,de,Y,ie,ze,tt,Be=Pe.hasData(s)&&Pe.get(s);if(!(!Be||!(N=Be.events))){for(o=(o||"").match(Ie)||[""],V=o.length;V--;){if(B=_e.exec(o[V])||[],ie=tt=B[1],ze=(B[2]||"").split(".").sort(),!ie){for(ie in N)u.event.remove(s,ie+o[V],h,m,!0);continue}for(de=u.event.special[ie]||{},ie=(m?de.delegateType:de.bindType)||ie,Y=N[ie]||[],B=B[2]&&new RegExp("(^|\\.)"+ze.join("\\.(?:.*\\.|)")+"(\\.|$)"),E=b=Y.length;b--;)ee=Y[b],(y||tt===ee.origType)&&(!h||h.guid===ee.guid)&&(!B||B.test(ee.namespace))&&(!m||m===ee.selector||m==="**"&&ee.selector)&&(Y.splice(b,1),ee.selector&&Y.delegateCount--,de.remove&&de.remove.call(s,ee));E&&!Y.length&&((!de.teardown||de.teardown.call(s,ze,Be.handle)===!1)&&u.removeEvent(s,ie,Be.handle),delete N[ie])}u.isEmptyObject(N)&&Pe.remove(s,"handle events")}},dispatch:function(s){var o,h,m,y,b,E,B=new Array(arguments.length),N=u.event.fix(s),V=(Pe.get(this,"events")||Object.create(null))[N.type]||[],ee=u.event.special[N.type]||{};for(B[0]=N,o=1;o<arguments.length;o++)B[o]=arguments[o];if(N.delegateTarget=this,!(ee.preDispatch&&ee.preDispatch.call(this,N)===!1)){for(E=u.event.handlers.call(this,N,V),o=0;(y=E[o++])&&!N.isPropagationStopped();)for(N.currentTarget=y.elem,h=0;(b=y.handlers[h++])&&!N.isImmediatePropagationStopped();)(!N.rnamespace||b.namespace===!1||N.rnamespace.test(b.namespace))&&(N.handleObj=b,N.data=b.data,m=((u.event.special[b.origType]||{}).handle||b.handler).apply(y.elem,B),m!==void 0&&(N.result=m)===!1&&(N.preventDefault(),N.stopPropagation()));return ee.postDispatch&&ee.postDispatch.call(this,N),N.result}},handlers:function(s,o){var h,m,y,b,E,B=[],N=o.delegateCount,V=s.target;if(N&&V.nodeType&&!(s.type==="click"&&s.button>=1)){for(;V!==this;V=V.parentNode||this)if(V.nodeType===1&&!(s.type==="click"&&V.disabled===!0)){for(b=[],E={},h=0;h<N;h++)m=o[h],y=m.selector+" ",E[y]===void 0&&(E[y]=m.needsContext?u(y,this).index(V)>-1:u.find(y,this,null,[V]).length),E[y]&&b.push(m);b.length&&B.push({elem:V,handlers:b})}}return V=this,N<o.length&&B.push({elem:V,handlers:o.slice(N)}),B},addProp:function(s,o){Object.defineProperty(u.Event.prototype,s,{enumerable:!0,configurable:!0,get:v(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(h){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(s){return s[u.expando]?s:new u.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var o=this||s;return qe.test(o.type)&&o.click&&ue(o,"input")&&Jt(o,"click",Ae),!1},trigger:function(s){var o=this||s;return qe.test(o.type)&&o.click&&ue(o,"input")&&Jt(o,"click"),!0},_default:function(s){var o=s.target;return qe.test(o.type)&&o.click&&ue(o,"input")&&Pe.get(o,"click")||ue(o,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function Jt(s,o,h){if(!h){Pe.get(s,o)===void 0&&u.event.add(s,o,Ae);return}Pe.set(s,o,!1),u.event.add(s,o,{namespace:!1,handler:function(m){var y,b,E=Pe.get(this,o);if(m.isTrigger&1&&this[o]){if(E.length)(u.event.special[o]||{}).delegateType&&m.stopPropagation();else if(E=a.call(arguments),Pe.set(this,o,E),y=h(this,o),this[o](),b=Pe.get(this,o),E!==b||y?Pe.set(this,o,!1):b={},E!==b)return m.stopImmediatePropagation(),m.preventDefault(),b&&b.value}else E.length&&(Pe.set(this,o,{value:u.event.trigger(u.extend(E[0],u.Event.prototype),E.slice(1),this)}),m.stopImmediatePropagation())}})}u.removeEvent=function(s,o,h){s.removeEventListener&&s.removeEventListener(o,h)},u.Event=function(s,o){if(!(this instanceof u.Event))return new u.Event(s,o);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?Ae:De,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,o&&u.extend(this,o),this.timeStamp=s&&s.timeStamp||Date.now(),this[u.expando]=!0},u.Event.prototype={constructor:u.Event,isDefaultPrevented:De,isPropagationStopped:De,isImmediatePropagationStopped:De,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=Ae,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=Ae,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=Ae,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},u.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},u.event.addProp),u.each({focus:"focusin",blur:"focusout"},function(s,o){u.event.special[s]={setup:function(){return Jt(this,s,bt),!1},trigger:function(){return Jt(this,s),!0},_default:function(h){return Pe.get(h.target,s)},delegateType:o}}),u.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,o){u.event.special[s]={delegateType:o,bindType:o,handle:function(h){var m,y=this,b=h.relatedTarget,E=h.handleObj;return(!b||b!==y&&!u.contains(y,b))&&(h.type=E.origType,m=E.handler.apply(this,arguments),h.type=o),m}}}),u.fn.extend({on:function(s,o,h,m){return Gt(this,s,o,h,m)},one:function(s,o,h,m){return Gt(this,s,o,h,m,1)},off:function(s,o,h){var m,y;if(s&&s.preventDefault&&s.handleObj)return m=s.handleObj,u(s.delegateTarget).off(m.namespace?m.origType+"."+m.namespace:m.origType,m.selector,m.handler),this;if(typeof s=="object"){for(y in s)this.off(y,o,s[y]);return this}return(o===!1||typeof o=="function")&&(h=o,o=void 0),h===!1&&(h=De),this.each(function(){u.event.remove(this,s,h,o)})}});var Lt=/<script|<style|<link/i,si=/checked\s*(?:[^=]|=\s*.checked.)/i,Mi=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function es(s,o){return ue(s,"table")&&ue(o.nodeType!==11?o:o.firstChild,"tr")&&u(s).children("tbody")[0]||s}function Ws(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function qs(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function D(s,o){var h,m,y,b,E,B,N;if(o.nodeType===1){if(Pe.hasData(s)&&(b=Pe.get(s),N=b.events,N)){Pe.remove(o,"handle events");for(y in N)for(h=0,m=N[y].length;h<m;h++)u.event.add(o,y,N[y][h])}mt.hasData(s)&&(E=mt.access(s),B=u.extend({},E),mt.set(o,B))}}function K(s,o){var h=o.nodeName.toLowerCase();h==="input"&&qe.test(s.type)?o.checked=s.checked:(h==="input"||h==="textarea")&&(o.defaultValue=s.defaultValue)}function te(s,o,h,m){o=c(o);var y,b,E,B,N,V,ee=0,de=s.length,Y=de-1,ie=o[0],ze=v(ie);if(ze||de>1&&typeof ie=="string"&&!S.checkClone&&si.test(ie))return s.each(function(tt){var Be=s.eq(tt);ze&&(o[0]=ie.call(this,tt,Be.html())),te(Be,o,h,m)});if(de&&(y=re(o,s[0].ownerDocument,!1,s,m),b=y.firstChild,y.childNodes.length===1&&(y=b),b||m)){for(E=u.map(lt(y,"script"),Ws),B=E.length;ee<de;ee++)N=y,ee!==Y&&(N=u.clone(N,!0,!0),B&&u.merge(E,lt(N,"script"))),h.call(s[ee],N,ee);if(B)for(V=E[E.length-1].ownerDocument,u.map(E,qs),ee=0;ee<B;ee++)N=E[ee],Ge.test(N.type||"")&&!Pe.access(N,"globalEval")&&u.contains(V,N)&&(N.src&&(N.type||"").toLowerCase()!=="module"?u._evalUrl&&!N.noModule&&u._evalUrl(N.src,{nonce:N.nonce||N.getAttribute("nonce")},V):A(N.textContent.replace(Mi,""),N,V))}return s}function X(s,o,h){for(var m,y=o?u.filter(o,s):s,b=0;(m=y[b])!=null;b++)!h&&m.nodeType===1&&u.cleanData(lt(m)),m.parentNode&&(h&&Me(m)&&It(lt(m,"script")),m.parentNode.removeChild(m));return s}u.extend({htmlPrefilter:function(s){return s},clone:function(s,o,h){var m,y,b,E,B=s.cloneNode(!0),N=Me(s);if(!S.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!u.isXMLDoc(s))for(E=lt(B),b=lt(s),m=0,y=b.length;m<y;m++)K(b[m],E[m]);if(o)if(h)for(b=b||lt(s),E=E||lt(B),m=0,y=b.length;m<y;m++)D(b[m],E[m]);else D(s,B);return E=lt(B,"script"),E.length>0&&It(E,!N&&lt(s,"script")),B},cleanData:function(s){for(var o,h,m,y=u.event.special,b=0;(h=s[b])!==void 0;b++)if(Ft(h)){if(o=h[Pe.expando]){if(o.events)for(m in o.events)y[m]?u.event.remove(h,m):u.removeEvent(h,m,o.handle);h[Pe.expando]=void 0}h[mt.expando]&&(h[mt.expando]=void 0)}}}),u.fn.extend({detach:function(s){return X(this,s,!0)},remove:function(s){return X(this,s)},text:function(s){return Re(this,function(o){return o===void 0?u.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=o)})},null,s,arguments.length)},append:function(){return te(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=es(this,s);o.appendChild(s)}})},prepend:function(){return te(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=es(this,s);o.insertBefore(s,o.firstChild)}})},before:function(){return te(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return te(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,o=0;(s=this[o])!=null;o++)s.nodeType===1&&(u.cleanData(lt(s,!1)),s.textContent="");return this},clone:function(s,o){return s=s??!1,o=o??s,this.map(function(){return u.clone(this,s,o)})},html:function(s){return Re(this,function(o){var h=this[0]||{},m=0,y=this.length;if(o===void 0&&h.nodeType===1)return h.innerHTML;if(typeof o=="string"&&!Lt.test(o)&&!Qe[(Xe.exec(o)||["",""])[1].toLowerCase()]){o=u.htmlPrefilter(o);try{for(;m<y;m++)h=this[m]||{},h.nodeType===1&&(u.cleanData(lt(h,!1)),h.innerHTML=o);h=0}catch{}}h&&this.empty().append(o)},null,s,arguments.length)},replaceWith:function(){var s=[];return te(this,arguments,function(o){var h=this.parentNode;u.inArray(this,s)<0&&(u.cleanData(lt(this)),h&&h.replaceChild(o,this))},s)}}),u.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,o){u.fn[s]=function(h){for(var m,y=[],b=u(h),E=b.length-1,B=0;B<=E;B++)m=B===E?this:this.clone(!0),u(b[B])[o](m),l.apply(y,m.get());return this.pushStack(y)}});var ae=new RegExp("^("+I+")(?!px)[a-z%]+$","i"),He=/^--/,Je=function(s){var o=s.ownerDocument.defaultView;return(!o||!o.opener)&&(o=e),o.getComputedStyle(s)},nt=function(s,o,h){var m,y,b={};for(y in o)b[y]=s.style[y],s.style[y]=o[y];m=h.call(s);for(y in o)s.style[y]=b[y];return m},at=new RegExp(ne.join("|"),"i"),dt="[\\x20\\t\\r\\n\\f]",ht=new RegExp("^"+dt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+dt+"+$","g");(function(){function s(){if(V){N.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",V.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(N).appendChild(V);var ee=e.getComputedStyle(V);h=ee.top!=="1%",B=o(ee.marginLeft)===12,V.style.right="60%",b=o(ee.right)===36,m=o(ee.width)===36,V.style.position="absolute",y=o(V.offsetWidth/3)===12,be.removeChild(N),V=null}}function o(ee){return Math.round(parseFloat(ee))}var h,m,y,b,E,B,N=T.createElement("div"),V=T.createElement("div");V.style&&(V.style.backgroundClip="content-box",V.cloneNode(!0).style.backgroundClip="",S.clearCloneStyle=V.style.backgroundClip==="content-box",u.extend(S,{boxSizingReliable:function(){return s(),m},pixelBoxStyles:function(){return s(),b},pixelPosition:function(){return s(),h},reliableMarginLeft:function(){return s(),B},scrollboxSize:function(){return s(),y},reliableTrDimensions:function(){var ee,de,Y,ie;return E==null&&(ee=T.createElement("table"),de=T.createElement("tr"),Y=T.createElement("div"),ee.style.cssText="position:absolute;left:-11111px;border-collapse:separate",de.style.cssText="border:1px solid",de.style.height="1px",Y.style.height="9px",Y.style.display="block",be.appendChild(ee).appendChild(de).appendChild(Y),ie=e.getComputedStyle(de),E=parseInt(ie.height,10)+parseInt(ie.borderTopWidth,10)+parseInt(ie.borderBottomWidth,10)===de.offsetHeight,be.removeChild(ee)),E}}))})();function rt(s,o,h){var m,y,b,E,B=He.test(o),N=s.style;return h=h||Je(s),h&&(E=h.getPropertyValue(o)||h[o],B&&E&&(E=E.replace(ht,"$1")||void 0),E===""&&!Me(s)&&(E=u.style(s,o)),!S.pixelBoxStyles()&&ae.test(E)&&at.test(o)&&(m=N.width,y=N.minWidth,b=N.maxWidth,N.minWidth=N.maxWidth=N.width=E,E=h.width,N.width=m,N.minWidth=y,N.maxWidth=b)),E!==void 0?E+"":E}function Dt(s,o){return{get:function(){if(s()){delete this.get;return}return(this.get=o).apply(this,arguments)}}}var $t=["Webkit","Moz","ms"],Si=T.createElement("div").style,Ui={};function Nt(s){for(var o=s[0].toUpperCase()+s.slice(1),h=$t.length;h--;)if(s=$t[h]+o,s in Si)return s}function ut(s){var o=u.cssProps[s]||Ui[s];return o||(s in Si?s:Ui[s]=Nt(s)||s)}var br=/^(none|table(?!-c[ea]).+)/,Ot={position:"absolute",visibility:"hidden",display:"block"},Oi={letterSpacing:"0",fontWeight:"400"};function Mr(s,o,h){var m=C.exec(o);return m?Math.max(0,m[2]-(h||0))+(m[3]||"px"):o}function qi(s,o,h,m,y,b){var E=o==="width"?1:0,B=0,N=0;if(h===(m?"border":"content"))return 0;for(;E<4;E+=2)h==="margin"&&(N+=u.css(s,h+ne[E],!0,y)),m?(h==="content"&&(N-=u.css(s,"padding"+ne[E],!0,y)),h!=="margin"&&(N-=u.css(s,"border"+ne[E]+"Width",!0,y))):(N+=u.css(s,"padding"+ne[E],!0,y),h!=="padding"?N+=u.css(s,"border"+ne[E]+"Width",!0,y):B+=u.css(s,"border"+ne[E]+"Width",!0,y));return!m&&b>=0&&(N+=Math.max(0,Math.ceil(s["offset"+o[0].toUpperCase()+o.slice(1)]-b-N-B-.5))||0),N}function qn(s,o,h){var m=Je(s),y=!S.boxSizingReliable()||h,b=y&&u.css(s,"boxSizing",!1,m)==="border-box",E=b,B=rt(s,o,m),N="offset"+o[0].toUpperCase()+o.slice(1);if(ae.test(B)){if(!h)return B;B="auto"}return(!S.boxSizingReliable()&&b||!S.reliableTrDimensions()&&ue(s,"tr")||B==="auto"||!parseFloat(B)&&u.css(s,"display",!1,m)==="inline")&&s.getClientRects().length&&(b=u.css(s,"boxSizing",!1,m)==="border-box",E=N in s,E&&(B=s[N])),B=parseFloat(B)||0,B+qi(s,o,h||(b?"border":"content"),E,m,B)+"px"}u.extend({cssHooks:{opacity:{get:function(s,o){if(o){var h=rt(s,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(s,o,h,m){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var y,b,E,B=it(o),N=He.test(o),V=s.style;if(N||(o=ut(B)),E=u.cssHooks[o]||u.cssHooks[B],h!==void 0){if(b=typeof h,b==="string"&&(y=C.exec(h))&&y[1]&&(h=Le(s,o,y),b="number"),h==null||h!==h)return;b==="number"&&!N&&(h+=y&&y[3]||(u.cssNumber[B]?"":"px")),!S.clearCloneStyle&&h===""&&o.indexOf("background")===0&&(V[o]="inherit"),(!E||!("set"in E)||(h=E.set(s,h,m))!==void 0)&&(N?V.setProperty(o,h):V[o]=h)}else return E&&"get"in E&&(y=E.get(s,!1,m))!==void 0?y:V[o]}},css:function(s,o,h,m){var y,b,E,B=it(o),N=He.test(o);return N||(o=ut(B)),E=u.cssHooks[o]||u.cssHooks[B],E&&"get"in E&&(y=E.get(s,!0,h)),y===void 0&&(y=rt(s,o,m)),y==="normal"&&o in Oi&&(y=Oi[o]),h===""||h?(b=parseFloat(y),h===!0||isFinite(b)?b||0:y):y}}),u.each(["height","width"],function(s,o){u.cssHooks[o]={get:function(h,m,y){if(m)return br.test(u.css(h,"display"))&&(!h.getClientRects().length||!h.getBoundingClientRect().width)?nt(h,Ot,function(){return qn(h,o,y)}):qn(h,o,y)},set:function(h,m,y){var b,E=Je(h),B=!S.scrollboxSize()&&E.position==="absolute",N=B||y,V=N&&u.css(h,"boxSizing",!1,E)==="border-box",ee=y?qi(h,o,y,V,E):0;return V&&B&&(ee-=Math.ceil(h["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(E[o])-qi(h,o,"border",!1,E)-.5)),ee&&(b=C.exec(m))&&(b[3]||"px")!=="px"&&(h.style[o]=m,m=u.css(h,o)),Mr(h,m,ee)}}}),u.cssHooks.marginLeft=Dt(S.reliableMarginLeft,function(s,o){if(o)return(parseFloat(rt(s,"marginLeft"))||s.getBoundingClientRect().left-nt(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),u.each({margin:"",padding:"",border:"Width"},function(s,o){u.cssHooks[s+o]={expand:function(h){for(var m=0,y={},b=typeof h=="string"?h.split(" "):[h];m<4;m++)y[s+ne[m]+o]=b[m]||b[m-2]||b[0];return y}},s!=="margin"&&(u.cssHooks[s+o].set=Mr)}),u.fn.extend({css:function(s,o){return Re(this,function(h,m,y){var b,E,B={},N=0;if(Array.isArray(m)){for(b=Je(h),E=m.length;N<E;N++)B[m[N]]=u.css(h,m[N],!1,b);return B}return y!==void 0?u.style(h,m,y):u.css(h,m)},s,o,arguments.length>1)}});function gt(s,o,h,m,y){return new gt.prototype.init(s,o,h,m,y)}u.Tween=gt,gt.prototype={constructor:gt,init:function(s,o,h,m,y,b){this.elem=s,this.prop=h,this.easing=y||u.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=m,this.unit=b||(u.cssNumber[h]?"":"px")},cur:function(){var s=gt.propHooks[this.prop];return s&&s.get?s.get(this):gt.propHooks._default.get(this)},run:function(s){var o,h=gt.propHooks[this.prop];return this.options.duration?this.pos=o=u.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=o=s,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):gt.propHooks._default.set(this),this}},gt.prototype.init.prototype=gt.prototype,gt.propHooks={_default:{get:function(s){var o;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(o=u.css(s.elem,s.prop,""),!o||o==="auto"?0:o)},set:function(s){u.fx.step[s.prop]?u.fx.step[s.prop](s):s.elem.nodeType===1&&(u.cssHooks[s.prop]||s.elem.style[ut(s.prop)]!=null)?u.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},gt.propHooks.scrollTop=gt.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},u.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},u.fx=gt.prototype.init,u.fx.step={};var ai,sn,Qt=/^(?:toggle|show|hide)$/,Sr=/queueHooks$/;function Er(){sn&&(T.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Er):e.setTimeout(Er,u.fx.interval),u.fx.tick())}function Tr(){return e.setTimeout(function(){ai=void 0}),ai=Date.now()}function ts(s,o){var h,m=0,y={height:s};for(o=o?1:0;m<4;m+=2-o)h=ne[m],y["margin"+h]=y["padding"+h]=s;return o&&(y.opacity=y.width=s),y}function Eo(s,o,h){for(var m,y=(Ci.tweeners[o]||[]).concat(Ci.tweeners["*"]),b=0,E=y.length;b<E;b++)if(m=y[b].call(h,o,s))return m}function xu(s,o,h){var m,y,b,E,B,N,V,ee,de="width"in o||"height"in o,Y=this,ie={},ze=s.style,tt=s.nodeType&&ke(s),Be=Pe.get(s,"fxshow");h.queue||(E=u._queueHooks(s,"fx"),E.unqueued==null&&(E.unqueued=0,B=E.empty.fire,E.empty.fire=function(){E.unqueued||B()}),E.unqueued++,Y.always(function(){Y.always(function(){E.unqueued--,u.queue(s,"fx").length||E.empty.fire()})}));for(m in o)if(y=o[m],Qt.test(y)){if(delete o[m],b=b||y==="toggle",y===(tt?"hide":"show"))if(y==="show"&&Be&&Be[m]!==void 0)tt=!0;else continue;ie[m]=Be&&Be[m]||u.style(s,m)}if(N=!u.isEmptyObject(o),!(!N&&u.isEmptyObject(ie))){de&&s.nodeType===1&&(h.overflow=[ze.overflow,ze.overflowX,ze.overflowY],V=Be&&Be.display,V==null&&(V=Pe.get(s,"display")),ee=u.css(s,"display"),ee==="none"&&(V?ee=V:(Ne([s],!0),V=s.style.display||V,ee=u.css(s,"display"),Ne([s]))),(ee==="inline"||ee==="inline-block"&&V!=null)&&u.css(s,"float")==="none"&&(N||(Y.done(function(){ze.display=V}),V==null&&(ee=ze.display,V=ee==="none"?"":ee)),ze.display="inline-block")),h.overflow&&(ze.overflow="hidden",Y.always(function(){ze.overflow=h.overflow[0],ze.overflowX=h.overflow[1],ze.overflowY=h.overflow[2]})),N=!1;for(m in ie)N||(Be?"hidden"in Be&&(tt=Be.hidden):Be=Pe.access(s,"fxshow",{display:V}),b&&(Be.hidden=!tt),tt&&Ne([s],!0),Y.done(function(){tt||Ne([s]),Pe.remove(s,"fxshow");for(m in ie)u.style(s,m,ie[m])})),N=Eo(tt?Be[m]:0,m,Y),m in Be||(Be[m]=N.start,tt&&(N.end=N.start,N.start=0))}}function yu(s,o){var h,m,y,b,E;for(h in s)if(m=it(h),y=o[m],b=s[h],Array.isArray(b)&&(y=b[1],b=s[h]=b[0]),h!==m&&(s[m]=b,delete s[h]),E=u.cssHooks[m],E&&"expand"in E){b=E.expand(b),delete s[m];for(h in b)h in s||(s[h]=b[h],o[h]=y)}else o[m]=y}function Ci(s,o,h){var m,y,b=0,E=Ci.prefilters.length,B=u.Deferred().always(function(){delete N.elem}),N=function(){if(y)return!1;for(var de=ai||Tr(),Y=Math.max(0,V.startTime+V.duration-de),ie=Y/V.duration||0,ze=1-ie,tt=0,Be=V.tweens.length;tt<Be;tt++)V.tweens[tt].run(ze);return B.notifyWith(s,[V,ze,Y]),ze<1&&Be?Y:(Be||B.notifyWith(s,[V,1,0]),B.resolveWith(s,[V]),!1)},V=B.promise({elem:s,props:u.extend({},o),opts:u.extend(!0,{specialEasing:{},easing:u.easing._default},h),originalProperties:o,originalOptions:h,startTime:ai||Tr(),duration:h.duration,tweens:[],createTween:function(de,Y){var ie=u.Tween(s,V.opts,de,Y,V.opts.specialEasing[de]||V.opts.easing);return V.tweens.push(ie),ie},stop:function(de){var Y=0,ie=de?V.tweens.length:0;if(y)return this;for(y=!0;Y<ie;Y++)V.tweens[Y].run(1);return de?(B.notifyWith(s,[V,1,0]),B.resolveWith(s,[V,de])):B.rejectWith(s,[V,de]),this}}),ee=V.props;for(yu(ee,V.opts.specialEasing);b<E;b++)if(m=Ci.prefilters[b].call(V,s,ee,V.opts),m)return v(m.stop)&&(u._queueHooks(V.elem,V.opts.queue).stop=m.stop.bind(m)),m;return u.map(ee,Eo,V),v(V.opts.start)&&V.opts.start.call(s,V),V.progress(V.opts.progress).done(V.opts.done,V.opts.complete).fail(V.opts.fail).always(V.opts.always),u.fx.timer(u.extend(N,{elem:s,anim:V,queue:V.opts.queue})),V}u.Animation=u.extend(Ci,{tweeners:{"*":[function(s,o){var h=this.createTween(s,o);return Le(h.elem,s,C.exec(o),h),h}]},tweener:function(s,o){v(s)?(o=s,s=["*"]):s=s.match(Ie);for(var h,m=0,y=s.length;m<y;m++)h=s[m],Ci.tweeners[h]=Ci.tweeners[h]||[],Ci.tweeners[h].unshift(o)},prefilters:[xu],prefilter:function(s,o){o?Ci.prefilters.unshift(s):Ci.prefilters.push(s)}}),u.speed=function(s,o,h){var m=s&&typeof s=="object"?u.extend({},s):{complete:h||!h&&o||v(s)&&s,duration:s,easing:h&&o||o&&!v(o)&&o};return u.fx.off?m.duration=0:typeof m.duration!="number"&&(m.duration in u.fx.speeds?m.duration=u.fx.speeds[m.duration]:m.duration=u.fx.speeds._default),(m.queue==null||m.queue===!0)&&(m.queue="fx"),m.old=m.complete,m.complete=function(){v(m.old)&&m.old.call(this),m.queue&&u.dequeue(this,m.queue)},m},u.fn.extend({fadeTo:function(s,o,h,m){return this.filter(ke).css("opacity",0).show().end().animate({opacity:o},s,h,m)},animate:function(s,o,h,m){var y=u.isEmptyObject(s),b=u.speed(o,h,m),E=function(){var B=Ci(this,u.extend({},s),b);(y||Pe.get(this,"finish"))&&B.stop(!0)};return E.finish=E,y||b.queue===!1?this.each(E):this.queue(b.queue,E)},stop:function(s,o,h){var m=function(y){var b=y.stop;delete y.stop,b(h)};return typeof s!="string"&&(h=o,o=s,s=void 0),o&&this.queue(s||"fx",[]),this.each(function(){var y=!0,b=s!=null&&s+"queueHooks",E=u.timers,B=Pe.get(this);if(b)B[b]&&B[b].stop&&m(B[b]);else for(b in B)B[b]&&B[b].stop&&Sr.test(b)&&m(B[b]);for(b=E.length;b--;)E[b].elem===this&&(s==null||E[b].queue===s)&&(E[b].anim.stop(h),y=!1,E.splice(b,1));(y||!h)&&u.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var o,h=Pe.get(this),m=h[s+"queue"],y=h[s+"queueHooks"],b=u.timers,E=m?m.length:0;for(h.finish=!0,u.queue(this,s,[]),y&&y.stop&&y.stop.call(this,!0),o=b.length;o--;)b[o].elem===this&&b[o].queue===s&&(b[o].anim.stop(!0),b.splice(o,1));for(o=0;o<E;o++)m[o]&&m[o].finish&&m[o].finish.call(this);delete h.finish})}}),u.each(["toggle","show","hide"],function(s,o){var h=u.fn[o];u.fn[o]=function(m,y,b){return m==null||typeof m=="boolean"?h.apply(this,arguments):this.animate(ts(o,!0),m,y,b)}}),u.each({slideDown:ts("show"),slideUp:ts("hide"),slideToggle:ts("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,o){u.fn[s]=function(h,m,y){return this.animate(o,h,m,y)}}),u.timers=[],u.fx.tick=function(){var s,o=0,h=u.timers;for(ai=Date.now();o<h.length;o++)s=h[o],!s()&&h[o]===s&&h.splice(o--,1);h.length||u.fx.stop(),ai=void 0},u.fx.timer=function(s){u.timers.push(s),u.fx.start()},u.fx.interval=13,u.fx.start=function(){sn||(sn=!0,Er())},u.fx.stop=function(){sn=null},u.fx.speeds={slow:600,fast:200,_default:400},u.fn.delay=function(s,o){return s=u.fx&&u.fx.speeds[s]||s,o=o||"fx",this.queue(o,function(h,m){var y=e.setTimeout(h,s);m.stop=function(){e.clearTimeout(y)}})},function(){var s=T.createElement("input"),o=T.createElement("select"),h=o.appendChild(T.createElement("option"));s.type="checkbox",S.checkOn=s.value!=="",S.optSelected=h.selected,s=T.createElement("input"),s.value="t",s.type="radio",S.radioValue=s.value==="t"}();var To,wr=u.expr.attrHandle;u.fn.extend({attr:function(s,o){return Re(this,u.attr,s,o,arguments.length>1)},removeAttr:function(s){return this.each(function(){u.removeAttr(this,s)})}}),u.extend({attr:function(s,o,h){var m,y,b=s.nodeType;if(!(b===3||b===8||b===2)){if(typeof s.getAttribute>"u")return u.prop(s,o,h);if((b!==1||!u.isXMLDoc(s))&&(y=u.attrHooks[o.toLowerCase()]||(u.expr.match.bool.test(o)?To:void 0)),h!==void 0){if(h===null){u.removeAttr(s,o);return}return y&&"set"in y&&(m=y.set(s,h,o))!==void 0?m:(s.setAttribute(o,h+""),h)}return y&&"get"in y&&(m=y.get(s,o))!==null?m:(m=u.find.attr(s,o),m??void 0)}},attrHooks:{type:{set:function(s,o){if(!S.radioValue&&o==="radio"&&ue(s,"input")){var h=s.value;return s.setAttribute("type",o),h&&(s.value=h),o}}}},removeAttr:function(s,o){var h,m=0,y=o&&o.match(Ie);if(y&&s.nodeType===1)for(;h=y[m++];)s.removeAttribute(h)}}),To={set:function(s,o,h){return o===!1?u.removeAttr(s,h):s.setAttribute(h,h),h}},u.each(u.expr.match.bool.source.match(/\w+/g),function(s,o){var h=wr[o]||u.find.attr;wr[o]=function(m,y,b){var E,B,N=y.toLowerCase();return b||(B=wr[N],wr[N]=E,E=h(m,y,b)!=null?N:null,wr[N]=B),E}});var bu=/^(?:input|select|textarea|button)$/i,Mu=/^(?:a|area)$/i;u.fn.extend({prop:function(s,o){return Re(this,u.prop,s,o,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[u.propFix[s]||s]})}}),u.extend({prop:function(s,o,h){var m,y,b=s.nodeType;if(!(b===3||b===8||b===2))return(b!==1||!u.isXMLDoc(s))&&(o=u.propFix[o]||o,y=u.propHooks[o]),h!==void 0?y&&"set"in y&&(m=y.set(s,h,o))!==void 0?m:s[o]=h:y&&"get"in y&&(m=y.get(s,o))!==null?m:s[o]},propHooks:{tabIndex:{get:function(s){var o=u.find.attr(s,"tabindex");return o?parseInt(o,10):bu.test(s.nodeName)||Mu.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),S.optSelected||(u.propHooks.selected={get:function(s){var o=s.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(s){var o=s.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),u.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){u.propFix[this.toLowerCase()]=this});function _n(s){var o=s.match(Ie)||[];return o.join(" ")}function xn(s){return s.getAttribute&&s.getAttribute("class")||""}function Xs(s){return Array.isArray(s)?s:typeof s=="string"?s.match(Ie)||[]:[]}u.fn.extend({addClass:function(s){var o,h,m,y,b,E;return v(s)?this.each(function(B){u(this).addClass(s.call(this,B,xn(this)))}):(o=Xs(s),o.length?this.each(function(){if(m=xn(this),h=this.nodeType===1&&" "+_n(m)+" ",h){for(b=0;b<o.length;b++)y=o[b],h.indexOf(" "+y+" ")<0&&(h+=y+" ");E=_n(h),m!==E&&this.setAttribute("class",E)}}):this)},removeClass:function(s){var o,h,m,y,b,E;return v(s)?this.each(function(B){u(this).removeClass(s.call(this,B,xn(this)))}):arguments.length?(o=Xs(s),o.length?this.each(function(){if(m=xn(this),h=this.nodeType===1&&" "+_n(m)+" ",h){for(b=0;b<o.length;b++)for(y=o[b];h.indexOf(" "+y+" ")>-1;)h=h.replace(" "+y+" "," ");E=_n(h),m!==E&&this.setAttribute("class",E)}}):this):this.attr("class","")},toggleClass:function(s,o){var h,m,y,b,E=typeof s,B=E==="string"||Array.isArray(s);return v(s)?this.each(function(N){u(this).toggleClass(s.call(this,N,xn(this),o),o)}):typeof o=="boolean"&&B?o?this.addClass(s):this.removeClass(s):(h=Xs(s),this.each(function(){if(B)for(b=u(this),y=0;y<h.length;y++)m=h[y],b.hasClass(m)?b.removeClass(m):b.addClass(m);else(s===void 0||E==="boolean")&&(m=xn(this),m&&Pe.set(this,"__className__",m),this.setAttribute&&this.setAttribute("class",m||s===!1?"":Pe.get(this,"__className__")||""))}))},hasClass:function(s){var o,h,m=0;for(o=" "+s+" ";h=this[m++];)if(h.nodeType===1&&(" "+_n(xn(h))+" ").indexOf(o)>-1)return!0;return!1}});var Su=/\r/g;u.fn.extend({val:function(s){var o,h,m,y=this[0];return arguments.length?(m=v(s),this.each(function(b){var E;this.nodeType===1&&(m?E=s.call(this,b,u(this).val()):E=s,E==null?E="":typeof E=="number"?E+="":Array.isArray(E)&&(E=u.map(E,function(B){return B==null?"":B+""})),o=u.valHooks[this.type]||u.valHooks[this.nodeName.toLowerCase()],(!o||!("set"in o)||o.set(this,E,"value")===void 0)&&(this.value=E))})):y?(o=u.valHooks[y.type]||u.valHooks[y.nodeName.toLowerCase()],o&&"get"in o&&(h=o.get(y,"value"))!==void 0?h:(h=y.value,typeof h=="string"?h.replace(Su,""):h??"")):void 0}}),u.extend({valHooks:{option:{get:function(s){var o=u.find.attr(s,"value");return o??_n(u.text(s))}},select:{get:function(s){var o,h,m,y=s.options,b=s.selectedIndex,E=s.type==="select-one",B=E?null:[],N=E?b+1:y.length;for(b<0?m=N:m=E?b:0;m<N;m++)if(h=y[m],(h.selected||m===b)&&!h.disabled&&(!h.parentNode.disabled||!ue(h.parentNode,"optgroup"))){if(o=u(h).val(),E)return o;B.push(o)}return B},set:function(s,o){for(var h,m,y=s.options,b=u.makeArray(o),E=y.length;E--;)m=y[E],(m.selected=u.inArray(u.valHooks.option.get(m),b)>-1)&&(h=!0);return h||(s.selectedIndex=-1),b}}}}),u.each(["radio","checkbox"],function(){u.valHooks[this]={set:function(s,o){if(Array.isArray(o))return s.checked=u.inArray(u(s).val(),o)>-1}},S.checkOn||(u.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})}),S.focusin="onfocusin"in e;var wo=/^(?:focusinfocus|focusoutblur)$/,Ao=function(s){s.stopPropagation()};u.extend(u.event,{trigger:function(s,o,h,m){var y,b,E,B,N,V,ee,de,Y=[h||T],ie=_.call(s,"type")?s.type:s,ze=_.call(s,"namespace")?s.namespace.split("."):[];if(b=de=E=h=h||T,!(h.nodeType===3||h.nodeType===8)&&!wo.test(ie+u.event.triggered)&&(ie.indexOf(".")>-1&&(ze=ie.split("."),ie=ze.shift(),ze.sort()),N=ie.indexOf(":")<0&&"on"+ie,s=s[u.expando]?s:new u.Event(ie,typeof s=="object"&&s),s.isTrigger=m?2:3,s.namespace=ze.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+ze.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=h),o=o==null?[s]:u.makeArray(o,[s]),ee=u.event.special[ie]||{},!(!m&&ee.trigger&&ee.trigger.apply(h,o)===!1))){if(!m&&!ee.noBubble&&!x(h)){for(B=ee.delegateType||ie,wo.test(B+ie)||(b=b.parentNode);b;b=b.parentNode)Y.push(b),E=b;E===(h.ownerDocument||T)&&Y.push(E.defaultView||E.parentWindow||e)}for(y=0;(b=Y[y++])&&!s.isPropagationStopped();)de=b,s.type=y>1?B:ee.bindType||ie,V=(Pe.get(b,"events")||Object.create(null))[s.type]&&Pe.get(b,"handle"),V&&V.apply(b,o),V=N&&b[N],V&&V.apply&&Ft(b)&&(s.result=V.apply(b,o),s.result===!1&&s.preventDefault());return s.type=ie,!m&&!s.isDefaultPrevented()&&(!ee._default||ee._default.apply(Y.pop(),o)===!1)&&Ft(h)&&N&&v(h[ie])&&!x(h)&&(E=h[N],E&&(h[N]=null),u.event.triggered=ie,s.isPropagationStopped()&&de.addEventListener(ie,Ao),h[ie](),s.isPropagationStopped()&&de.removeEventListener(ie,Ao),u.event.triggered=void 0,E&&(h[N]=E)),s.result}},simulate:function(s,o,h){var m=u.extend(new u.Event,h,{type:s,isSimulated:!0});u.event.trigger(m,null,o)}}),u.fn.extend({trigger:function(s,o){return this.each(function(){u.event.trigger(s,o,this)})},triggerHandler:function(s,o){var h=this[0];if(h)return u.event.trigger(s,o,h,!0)}}),S.focusin||u.each({focus:"focusin",blur:"focusout"},function(s,o){var h=function(m){u.event.simulate(o,m.target,u.event.fix(m))};u.event.special[o]={setup:function(){var m=this.ownerDocument||this.document||this,y=Pe.access(m,o);y||m.addEventListener(s,h,!0),Pe.access(m,o,(y||0)+1)},teardown:function(){var m=this.ownerDocument||this.document||this,y=Pe.access(m,o)-1;y?Pe.access(m,o,y):(m.removeEventListener(s,h,!0),Pe.remove(m,o))}}});var Ar=e.location,Co={guid:Date.now()},js=/\?/;u.parseXML=function(s){var o,h;if(!s||typeof s!="string")return null;try{o=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return h=o&&o.getElementsByTagName("parsererror")[0],(!o||h)&&u.error("Invalid XML: "+(h?u.map(h.childNodes,function(m){return m.textContent}).join(`
`):s)),o};var Eu=/\[\]$/,Ro=/\r?\n/g,Tu=/^(?:submit|button|image|reset|file)$/i,wu=/^(?:input|select|textarea|keygen)/i;function $s(s,o,h,m){var y;if(Array.isArray(o))u.each(o,function(b,E){h||Eu.test(s)?m(s,E):$s(s+"["+(typeof E=="object"&&E!=null?b:"")+"]",E,h,m)});else if(!h&&L(o)==="object")for(y in o)$s(s+"["+y+"]",o[y],h,m);else m(s,o)}u.param=function(s,o){var h,m=[],y=function(b,E){var B=v(E)?E():E;m[m.length]=encodeURIComponent(b)+"="+encodeURIComponent(B??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!u.isPlainObject(s))u.each(s,function(){y(this.name,this.value)});else for(h in s)$s(h,s[h],o,y);return m.join("&")},u.fn.extend({serialize:function(){return u.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=u.prop(this,"elements");return s?u.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!u(this).is(":disabled")&&wu.test(this.nodeName)&&!Tu.test(s)&&(this.checked||!qe.test(s))}).map(function(s,o){var h=u(this).val();return h==null?null:Array.isArray(h)?u.map(h,function(m){return{name:o.name,value:m.replace(Ro,`\r
`)}}):{name:o.name,value:h.replace(Ro,`\r
`)}}).get()}});var Au=/%20/g,Cu=/#.*$/,Ru=/([?&])_=[^&]*/,Lu=/^(.*?):[ \t]*([^\r\n]*)$/mg,Du=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Pu=/^(?:GET|HEAD)$/,Iu=/^\/\//,Lo={},Ys={},Do="*/".concat("*"),Zs=T.createElement("a");Zs.href=Ar.href;function Po(s){return function(o,h){typeof o!="string"&&(h=o,o="*");var m,y=0,b=o.toLowerCase().match(Ie)||[];if(v(h))for(;m=b[y++];)m[0]==="+"?(m=m.slice(1)||"*",(s[m]=s[m]||[]).unshift(h)):(s[m]=s[m]||[]).push(h)}}function Io(s,o,h,m){var y={},b=s===Ys;function E(B){var N;return y[B]=!0,u.each(s[B]||[],function(V,ee){var de=ee(o,h,m);if(typeof de=="string"&&!b&&!y[de])return o.dataTypes.unshift(de),E(de),!1;if(b)return!(N=de)}),N}return E(o.dataTypes[0])||!y["*"]&&E("*")}function Ks(s,o){var h,m,y=u.ajaxSettings.flatOptions||{};for(h in o)o[h]!==void 0&&((y[h]?s:m||(m={}))[h]=o[h]);return m&&u.extend(!0,s,m),s}function Nu(s,o,h){for(var m,y,b,E,B=s.contents,N=s.dataTypes;N[0]==="*";)N.shift(),m===void 0&&(m=s.mimeType||o.getResponseHeader("Content-Type"));if(m){for(y in B)if(B[y]&&B[y].test(m)){N.unshift(y);break}}if(N[0]in h)b=N[0];else{for(y in h){if(!N[0]||s.converters[y+" "+N[0]]){b=y;break}E||(E=y)}b=b||E}if(b)return b!==N[0]&&N.unshift(b),h[b]}function Fu(s,o,h,m){var y,b,E,B,N,V={},ee=s.dataTypes.slice();if(ee[1])for(E in s.converters)V[E.toLowerCase()]=s.converters[E];for(b=ee.shift();b;)if(s.responseFields[b]&&(h[s.responseFields[b]]=o),!N&&m&&s.dataFilter&&(o=s.dataFilter(o,s.dataType)),N=b,b=ee.shift(),b){if(b==="*")b=N;else if(N!=="*"&&N!==b){if(E=V[N+" "+b]||V["* "+b],!E){for(y in V)if(B=y.split(" "),B[1]===b&&(E=V[N+" "+B[0]]||V["* "+B[0]],E)){E===!0?E=V[y]:V[y]!==!0&&(b=B[0],ee.unshift(B[1]));break}}if(E!==!0)if(E&&s.throws)o=E(o);else try{o=E(o)}catch(de){return{state:"parsererror",error:E?de:"No conversion from "+N+" to "+b}}}}return{state:"success",data:o}}u.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ar.href,type:"GET",isLocal:Du.test(Ar.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Do,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":u.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,o){return o?Ks(Ks(s,u.ajaxSettings),o):Ks(u.ajaxSettings,s)},ajaxPrefilter:Po(Lo),ajaxTransport:Po(Ys),ajax:function(s,o){typeof s=="object"&&(o=s,s=void 0),o=o||{};var h,m,y,b,E,B,N,V,ee,de,Y=u.ajaxSetup({},o),ie=Y.context||Y,ze=Y.context&&(ie.nodeType||ie.jquery)?u(ie):u.event,tt=u.Deferred(),Be=u.Callbacks("once memory"),Ht=Y.statusCode||{},Bt={},ui={},yt="canceled",et={readyState:0,getResponseHeader:function(pt){var Pt;if(N){if(!b)for(b={};Pt=Lu.exec(y);)b[Pt[1].toLowerCase()+" "]=(b[Pt[1].toLowerCase()+" "]||[]).concat(Pt[2]);Pt=b[pt.toLowerCase()+" "]}return Pt==null?null:Pt.join(", ")},getAllResponseHeaders:function(){return N?y:null},setRequestHeader:function(pt,Pt){return N==null&&(pt=ui[pt.toLowerCase()]=ui[pt.toLowerCase()]||pt,Bt[pt]=Pt),this},overrideMimeType:function(pt){return N==null&&(Y.mimeType=pt),this},statusCode:function(pt){var Pt;if(pt)if(N)et.always(pt[et.status]);else for(Pt in pt)Ht[Pt]=[Ht[Pt],pt[Pt]];return this},abort:function(pt){var Pt=pt||yt;return h&&h.abort(Pt),oi(0,Pt),this}};if(tt.promise(et),Y.url=((s||Y.url||Ar.href)+"").replace(Iu,Ar.protocol+"//"),Y.type=o.method||o.type||Y.method||Y.type,Y.dataTypes=(Y.dataType||"*").toLowerCase().match(Ie)||[""],Y.crossDomain==null){B=T.createElement("a");try{B.href=Y.url,B.href=B.href,Y.crossDomain=Zs.protocol+"//"+Zs.host!=B.protocol+"//"+B.host}catch{Y.crossDomain=!0}}if(Y.data&&Y.processData&&typeof Y.data!="string"&&(Y.data=u.param(Y.data,Y.traditional)),Io(Lo,Y,o,et),N)return et;V=u.event&&Y.global,V&&u.active++===0&&u.event.trigger("ajaxStart"),Y.type=Y.type.toUpperCase(),Y.hasContent=!Pu.test(Y.type),m=Y.url.replace(Cu,""),Y.hasContent?Y.data&&Y.processData&&(Y.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(Y.data=Y.data.replace(Au,"+")):(de=Y.url.slice(m.length),Y.data&&(Y.processData||typeof Y.data=="string")&&(m+=(js.test(m)?"&":"?")+Y.data,delete Y.data),Y.cache===!1&&(m=m.replace(Ru,"$1"),de=(js.test(m)?"&":"?")+"_="+Co.guid+++de),Y.url=m+de),Y.ifModified&&(u.lastModified[m]&&et.setRequestHeader("If-Modified-Since",u.lastModified[m]),u.etag[m]&&et.setRequestHeader("If-None-Match",u.etag[m])),(Y.data&&Y.hasContent&&Y.contentType!==!1||o.contentType)&&et.setRequestHeader("Content-Type",Y.contentType),et.setRequestHeader("Accept",Y.dataTypes[0]&&Y.accepts[Y.dataTypes[0]]?Y.accepts[Y.dataTypes[0]]+(Y.dataTypes[0]!=="*"?", "+Do+"; q=0.01":""):Y.accepts["*"]);for(ee in Y.headers)et.setRequestHeader(ee,Y.headers[ee]);if(Y.beforeSend&&(Y.beforeSend.call(ie,et,Y)===!1||N))return et.abort();if(yt="abort",Be.add(Y.complete),et.done(Y.success),et.fail(Y.error),h=Io(Ys,Y,o,et),!h)oi(-1,"No Transport");else{if(et.readyState=1,V&&ze.trigger("ajaxSend",[et,Y]),N)return et;Y.async&&Y.timeout>0&&(E=e.setTimeout(function(){et.abort("timeout")},Y.timeout));try{N=!1,h.send(Bt,oi)}catch(pt){if(N)throw pt;oi(-1,pt)}}function oi(pt,Pt,Rr,is){var fi,yn,bn,ci,an,Ei=Pt;N||(N=!0,E&&e.clearTimeout(E),h=void 0,y=is||"",et.readyState=pt>0?4:0,fi=pt>=200&&pt<300||pt===304,Rr&&(ci=Nu(Y,et,Rr)),!fi&&u.inArray("script",Y.dataTypes)>-1&&u.inArray("json",Y.dataTypes)<0&&(Y.converters["text script"]=function(){}),ci=Fu(Y,ci,et,fi),fi?(Y.ifModified&&(an=et.getResponseHeader("Last-Modified"),an&&(u.lastModified[m]=an),an=et.getResponseHeader("etag"),an&&(u.etag[m]=an)),pt===204||Y.type==="HEAD"?Ei="nocontent":pt===304?Ei="notmodified":(Ei=ci.state,yn=ci.data,bn=ci.error,fi=!bn)):(bn=Ei,(pt||!Ei)&&(Ei="error",pt<0&&(pt=0))),et.status=pt,et.statusText=(Pt||Ei)+"",fi?tt.resolveWith(ie,[yn,Ei,et]):tt.rejectWith(ie,[et,Ei,bn]),et.statusCode(Ht),Ht=void 0,V&&ze.trigger(fi?"ajaxSuccess":"ajaxError",[et,Y,fi?yn:bn]),Be.fireWith(ie,[et,Ei]),V&&(ze.trigger("ajaxComplete",[et,Y]),--u.active||u.event.trigger("ajaxStop")))}return et},getJSON:function(s,o,h){return u.get(s,o,h,"json")},getScript:function(s,o){return u.get(s,void 0,o,"script")}}),u.each(["get","post"],function(s,o){u[o]=function(h,m,y,b){return v(m)&&(b=b||y,y=m,m=void 0),u.ajax(u.extend({url:h,type:o,dataType:b,data:m,success:y},u.isPlainObject(h)&&h))}}),u.ajaxPrefilter(function(s){var o;for(o in s.headers)o.toLowerCase()==="content-type"&&(s.contentType=s.headers[o]||"")}),u._evalUrl=function(s,o,h){return u.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(m){u.globalEval(m,o,h)}})},u.fn.extend({wrapAll:function(s){var o;return this[0]&&(v(s)&&(s=s.call(this[0])),o=u(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(s){return v(s)?this.each(function(o){u(this).wrapInner(s.call(this,o))}):this.each(function(){var o=u(this),h=o.contents();h.length?h.wrapAll(s):o.append(s)})},wrap:function(s){var o=v(s);return this.each(function(h){u(this).wrapAll(o?s.call(this,h):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){u(this).replaceWith(this.childNodes)}),this}}),u.expr.pseudos.hidden=function(s){return!u.expr.pseudos.visible(s)},u.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},u.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Uu={0:200,1223:204},Cr=u.ajaxSettings.xhr();S.cors=!!Cr&&"withCredentials"in Cr,S.ajax=Cr=!!Cr,u.ajaxTransport(function(s){var o,h;if(S.cors||Cr&&!s.crossDomain)return{send:function(m,y){var b,E=s.xhr();if(E.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(b in s.xhrFields)E[b]=s.xhrFields[b];s.mimeType&&E.overrideMimeType&&E.overrideMimeType(s.mimeType),!s.crossDomain&&!m["X-Requested-With"]&&(m["X-Requested-With"]="XMLHttpRequest");for(b in m)E.setRequestHeader(b,m[b]);o=function(B){return function(){o&&(o=h=E.onload=E.onerror=E.onabort=E.ontimeout=E.onreadystatechange=null,B==="abort"?E.abort():B==="error"?typeof E.status!="number"?y(0,"error"):y(E.status,E.statusText):y(Uu[E.status]||E.status,E.statusText,(E.responseType||"text")!=="text"||typeof E.responseText!="string"?{binary:E.response}:{text:E.responseText},E.getAllResponseHeaders()))}},E.onload=o(),h=E.onerror=E.ontimeout=o("error"),E.onabort!==void 0?E.onabort=h:E.onreadystatechange=function(){E.readyState===4&&e.setTimeout(function(){o&&h()})},o=o("abort");try{E.send(s.hasContent&&s.data||null)}catch(B){if(o)throw B}},abort:function(){o&&o()}}}),u.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),u.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return u.globalEval(s),s}}}),u.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),u.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var o,h;return{send:function(m,y){o=u("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",h=function(b){o.remove(),h=null,b&&y(b.type==="error"?404:200,b.type)}),T.head.appendChild(o[0])},abort:function(){h&&h()}}}});var No=[],Js=/(=)\?(?=&|$)|\?\?/;u.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=No.pop()||u.expando+"_"+Co.guid++;return this[s]=!0,s}}),u.ajaxPrefilter("json jsonp",function(s,o,h){var m,y,b,E=s.jsonp!==!1&&(Js.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Js.test(s.data)&&"data");if(E||s.dataTypes[0]==="jsonp")return m=s.jsonpCallback=v(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,E?s[E]=s[E].replace(Js,"$1"+m):s.jsonp!==!1&&(s.url+=(js.test(s.url)?"&":"?")+s.jsonp+"="+m),s.converters["script json"]=function(){return b||u.error(m+" was not called"),b[0]},s.dataTypes[0]="json",y=e[m],e[m]=function(){b=arguments},h.always(function(){y===void 0?u(e).removeProp(m):e[m]=y,s[m]&&(s.jsonpCallback=o.jsonpCallback,No.push(m)),b&&v(y)&&y(b[0]),b=y=void 0}),"script"}),S.createHTMLDocument=function(){var s=T.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2}(),u.parseHTML=function(s,o,h){if(typeof s!="string")return[];typeof o=="boolean"&&(h=o,o=!1);var m,y,b;return o||(S.createHTMLDocument?(o=T.implementation.createHTMLDocument(""),m=o.createElement("base"),m.href=T.location.href,o.head.appendChild(m)):o=T),y=J.exec(s),b=!h&&[],y?[o.createElement(y[1])]:(y=re([s],o,b),b&&b.length&&u(b).remove(),u.merge([],y.childNodes))},u.fn.load=function(s,o,h){var m,y,b,E=this,B=s.indexOf(" ");return B>-1&&(m=_n(s.slice(B)),s=s.slice(0,B)),v(o)?(h=o,o=void 0):o&&typeof o=="object"&&(y="POST"),E.length>0&&u.ajax({url:s,type:y||"GET",dataType:"html",data:o}).done(function(N){b=arguments,E.html(m?u("<div>").append(u.parseHTML(N)).find(m):N)}).always(h&&function(N,V){E.each(function(){h.apply(this,b||[N.responseText,V,N])})}),this},u.expr.pseudos.animated=function(s){return u.grep(u.timers,function(o){return s===o.elem}).length},u.offset={setOffset:function(s,o,h){var m,y,b,E,B,N,V,ee=u.css(s,"position"),de=u(s),Y={};ee==="static"&&(s.style.position="relative"),B=de.offset(),b=u.css(s,"top"),N=u.css(s,"left"),V=(ee==="absolute"||ee==="fixed")&&(b+N).indexOf("auto")>-1,V?(m=de.position(),E=m.top,y=m.left):(E=parseFloat(b)||0,y=parseFloat(N)||0),v(o)&&(o=o.call(s,h,u.extend({},B))),o.top!=null&&(Y.top=o.top-B.top+E),o.left!=null&&(Y.left=o.left-B.left+y),"using"in o?o.using.call(s,Y):de.css(Y)}},u.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(y){u.offset.setOffset(this,s,y)});var o,h,m=this[0];if(m)return m.getClientRects().length?(o=m.getBoundingClientRect(),h=m.ownerDocument.defaultView,{top:o.top+h.pageYOffset,left:o.left+h.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,o,h,m=this[0],y={top:0,left:0};if(u.css(m,"position")==="fixed")o=m.getBoundingClientRect();else{for(o=this.offset(),h=m.ownerDocument,s=m.offsetParent||h.documentElement;s&&(s===h.body||s===h.documentElement)&&u.css(s,"position")==="static";)s=s.parentNode;s&&s!==m&&s.nodeType===1&&(y=u(s).offset(),y.top+=u.css(s,"borderTopWidth",!0),y.left+=u.css(s,"borderLeftWidth",!0))}return{top:o.top-y.top-u.css(m,"marginTop",!0),left:o.left-y.left-u.css(m,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&u.css(s,"position")==="static";)s=s.offsetParent;return s||be})}}),u.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,o){var h=o==="pageYOffset";u.fn[s]=function(m){return Re(this,function(y,b,E){var B;if(x(y)?B=y:y.nodeType===9&&(B=y.defaultView),E===void 0)return B?B[o]:y[b];B?B.scrollTo(h?B.pageXOffset:E,h?E:B.pageYOffset):y[b]=E},s,m,arguments.length)}}),u.each(["top","left"],function(s,o){u.cssHooks[o]=Dt(S.pixelPosition,function(h,m){if(m)return m=rt(h,o),ae.test(m)?u(h).position()[o]+"px":m})}),u.each({Height:"height",Width:"width"},function(s,o){u.each({padding:"inner"+s,content:o,"":"outer"+s},function(h,m){u.fn[m]=function(y,b){var E=arguments.length&&(h||typeof y!="boolean"),B=h||(y===!0||b===!0?"margin":"border");return Re(this,function(N,V,ee){var de;return x(N)?m.indexOf("outer")===0?N["inner"+s]:N.document.documentElement["client"+s]:N.nodeType===9?(de=N.documentElement,Math.max(N.body["scroll"+s],de["scroll"+s],N.body["offset"+s],de["offset"+s],de["client"+s])):ee===void 0?u.css(N,V,B):u.style(N,V,ee,B)},o,E?y:void 0,E)}})}),u.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,o){u.fn[o]=function(h){return this.on(o,h)}}),u.fn.extend({bind:function(s,o,h){return this.on(s,null,o,h)},unbind:function(s,o){return this.off(s,null,o)},delegate:function(s,o,h,m){return this.on(o,s,h,m)},undelegate:function(s,o,h){return arguments.length===1?this.off(s,"**"):this.off(o,s||"**",h)},hover:function(s,o){return this.mouseenter(s).mouseleave(o||s)}}),u.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,o){u.fn[o]=function(h,m){return arguments.length>0?this.on(o,null,h,m):this.trigger(o)}});var Ou=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;u.proxy=function(s,o){var h,m,y;if(typeof o=="string"&&(h=s[o],o=s,s=h),!!v(s))return m=a.call(arguments,2),y=function(){return s.apply(o||this,m.concat(a.call(arguments)))},y.guid=s.guid=s.guid||u.guid++,y},u.holdReady=function(s){s?u.readyWait++:u.ready(!0)},u.isArray=Array.isArray,u.parseJSON=JSON.parse,u.nodeName=ue,u.isFunction=v,u.isWindow=x,u.camelCase=it,u.type=L,u.now=Date.now,u.isNumeric=function(s){var o=u.type(s);return(o==="number"||o==="string")&&!isNaN(s-parseFloat(s))},u.trim=function(s){return s==null?"":(s+"").replace(Ou,"$1")};var Bu=e.jQuery,zu=e.$;return u.noConflict=function(s){return e.$===u&&(e.$=zu),s&&e.jQuery===u&&(e.jQuery=Bu),u},typeof t>"u"&&(e.jQuery=e.$=u),u})})(rh);const sh=ja,ah="150",oh=0,Ko=1,ch=2,Xl=1,lh=2,Hr=3,vn=0,xi=1,pn=2,gn=0,fr=1,Jo=2,Qo=3,ec=4,uh=5,cr=100,fh=101,hh=102,tc=103,ic=104,dh=200,ph=201,mh=202,gh=203,jl=204,$l=205,vh=206,_h=207,xh=208,yh=209,bh=210,Mh=0,Sh=1,Eh=2,$a=3,Th=4,wh=5,Ah=6,Ch=7,xo=0,Rh=1,Lh=2,rn=0,Dh=1,Ph=2,Ih=3,Nh=4,Fh=5,Yl=300,pr=301,mr=302,Ya=303,Za=304,Gs=306,Ka=1e3,Ni=1001,Ja=1002,ii=1003,nc=1004,la=1005,Ai=1006,Uh=1007,jr=1008,kn=1009,Oh=1010,Bh=1011,Zl=1012,zh=1013,Un=1014,On=1015,$r=1016,kh=1017,Gh=1018,hr=1020,Hh=1021,Fi=1023,Vh=1024,Wh=1025,Bn=1026,gr=1027,qh=1028,Xh=1029,jh=1030,$h=1031,Yh=1033,ua=33776,fa=33777,ha=33778,da=33779,rc=35840,sc=35841,ac=35842,oc=35843,Zh=36196,cc=37492,lc=37496,uc=37808,fc=37809,hc=37810,dc=37811,pc=37812,mc=37813,gc=37814,vc=37815,_c=37816,xc=37817,yc=37818,bc=37819,Mc=37820,Sc=37821,pa=36492,Kh=36283,Ec=36284,Tc=36285,wc=36286,Gn=3e3,wt=3001,Jh=3200,Qh=3201,Kl=0,ed=1,zi="srgb",Yr="srgb-linear",Jl="display-p3",ma=7680,td=519,Ac=35044,Cc="300 es",Qa=1035;class _r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,c=r.length;a<c;a++)r[a].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ga=Math.PI/180,Rc=180/Math.PI;function Zr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function vi(n,e,t){return Math.max(e,Math.min(t,n))}function id(n,e){return(n%e+e)%e}function va(n,e,t){return(1-t)*n+t*e}function Lc(n){return(n&n-1)===0&&n!==0}function nd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ls(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pi(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class xt{constructor(e=0,t=0){xt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*r+e.x,this.y=a*r+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ni{constructor(){ni.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,a,c,l,f,d){const p=this.elements;return p[0]=e,p[1]=r,p[2]=l,p[3]=t,p[4]=a,p[5]=f,p[6]=i,p[7]=c,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,c=i[0],l=i[3],f=i[6],d=i[1],p=i[4],_=i[7],g=i[2],M=i[5],S=i[8],v=r[0],x=r[3],T=r[6],P=r[1],A=r[4],L=r[7],F=r[2],u=r[5],q=r[8];return a[0]=c*v+l*P+f*F,a[3]=c*x+l*A+f*u,a[6]=c*T+l*L+f*q,a[1]=d*v+p*P+_*F,a[4]=d*x+p*A+_*u,a[7]=d*T+p*L+_*q,a[2]=g*v+M*P+S*F,a[5]=g*x+M*A+S*u,a[8]=g*T+M*L+S*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],c=e[4],l=e[5],f=e[6],d=e[7],p=e[8];return t*c*p-t*l*d-i*a*p+i*l*f+r*a*d-r*c*f}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],c=e[4],l=e[5],f=e[6],d=e[7],p=e[8],_=p*c-l*d,g=l*f-p*a,M=d*a-c*f,S=t*_+i*g+r*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/S;return e[0]=_*v,e[1]=(r*d-p*i)*v,e[2]=(l*i-r*c)*v,e[3]=g*v,e[4]=(p*t-r*f)*v,e[5]=(r*a-l*t)*v,e[6]=M*v,e[7]=(i*f-d*t)*v,e[8]=(c*t-i*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,c,l){const f=Math.cos(a),d=Math.sin(a);return this.set(i*f,i*d,-i*(f*c+d*l)+c+e,-r*d,r*f,-r*(-d*c+f*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(_a.makeScale(e,t)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new ni;function Ql(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}class Kr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,c,l){let f=i[r+0],d=i[r+1],p=i[r+2],_=i[r+3];const g=a[c+0],M=a[c+1],S=a[c+2],v=a[c+3];if(l===0){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(l===1){e[t+0]=g,e[t+1]=M,e[t+2]=S,e[t+3]=v;return}if(_!==v||f!==g||d!==M||p!==S){let x=1-l;const T=f*g+d*M+p*S+_*v,P=T>=0?1:-1,A=1-T*T;if(A>Number.EPSILON){const F=Math.sqrt(A),u=Math.atan2(F,T*P);x=Math.sin(x*u)/F,l=Math.sin(l*u)/F}const L=l*P;if(f=f*x+g*L,d=d*x+M*L,p=p*x+S*L,_=_*x+v*L,x===1-l){const F=1/Math.sqrt(f*f+d*d+p*p+_*_);f*=F,d*=F,p*=F,_*=F}}e[t]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,r,a,c){const l=i[r],f=i[r+1],d=i[r+2],p=i[r+3],_=a[c],g=a[c+1],M=a[c+2],S=a[c+3];return e[t]=l*S+p*_+f*M-d*g,e[t+1]=f*S+p*g+d*_-l*M,e[t+2]=d*S+p*M+l*g-f*_,e[t+3]=p*S-l*_-f*g-d*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,a=e._z,c=e._order,l=Math.cos,f=Math.sin,d=l(i/2),p=l(r/2),_=l(a/2),g=f(i/2),M=f(r/2),S=f(a/2);switch(c){case"XYZ":this._x=g*p*_+d*M*S,this._y=d*M*_-g*p*S,this._z=d*p*S+g*M*_,this._w=d*p*_-g*M*S;break;case"YXZ":this._x=g*p*_+d*M*S,this._y=d*M*_-g*p*S,this._z=d*p*S-g*M*_,this._w=d*p*_+g*M*S;break;case"ZXY":this._x=g*p*_-d*M*S,this._y=d*M*_+g*p*S,this._z=d*p*S+g*M*_,this._w=d*p*_-g*M*S;break;case"ZYX":this._x=g*p*_-d*M*S,this._y=d*M*_+g*p*S,this._z=d*p*S-g*M*_,this._w=d*p*_+g*M*S;break;case"YZX":this._x=g*p*_+d*M*S,this._y=d*M*_+g*p*S,this._z=d*p*S-g*M*_,this._w=d*p*_-g*M*S;break;case"XZY":this._x=g*p*_-d*M*S,this._y=d*M*_-g*p*S,this._z=d*p*S+g*M*_,this._w=d*p*_+g*M*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],c=t[1],l=t[5],f=t[9],d=t[2],p=t[6],_=t[10],g=i+l+_;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(p-f)*M,this._y=(a-d)*M,this._z=(c-r)*M}else if(i>l&&i>_){const M=2*Math.sqrt(1+i-l-_);this._w=(p-f)/M,this._x=.25*M,this._y=(r+c)/M,this._z=(a+d)/M}else if(l>_){const M=2*Math.sqrt(1+l-i-_);this._w=(a-d)/M,this._x=(r+c)/M,this._y=.25*M,this._z=(f+p)/M}else{const M=2*Math.sqrt(1+_-i-l);this._w=(c-r)/M,this._x=(a+d)/M,this._y=(f+p)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vi(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,c=e._w,l=t._x,f=t._y,d=t._z,p=t._w;return this._x=i*p+c*l+r*d-a*f,this._y=r*p+c*f+a*l-i*d,this._z=a*p+c*d+i*f-r*l,this._w=c*p-i*l-r*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,c=this._w;let l=c*e._w+i*e._x+r*e._y+a*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=c,this._x=i,this._y=r,this._z=a,this;const f=1-l*l;if(f<=Number.EPSILON){const M=1-t;return this._w=M*c+t*this._w,this._x=M*i+t*this._x,this._y=M*r+t*this._y,this._z=M*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(f),p=Math.atan2(d,l),_=Math.sin((1-t)*p)/d,g=Math.sin(t*p)/d;return this._w=c*_+this._w*g,this._x=i*_+this._x*g,this._y=r*_+this._y*g,this._z=a*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,c=e.y,l=e.z,f=e.w,d=f*t+c*r-l*i,p=f*i+l*t-a*r,_=f*r+a*i-c*t,g=-a*t-c*i-l*r;return this.x=d*f+g*-a+p*-l-_*-c,this.y=p*f+g*-c+_*-a-d*-l,this.z=_*f+g*-l+d*-c-p*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,c=t.x,l=t.y,f=t.z;return this.x=r*f-a*l,this.y=a*c-i*f,this.z=i*l-r*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xa.copy(this).projectOnVector(e),this.sub(xa)}reflect(e){return this.sub(xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vi(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xa=new Z,Dc=new Kr;function dr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ya(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const rd=new ni().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),sd=new ni().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),mn=new Z;function ad(n){return n.convertSRGBToLinear(),mn.set(n.r,n.g,n.b).applyMatrix3(sd),n.setRGB(mn.x,mn.y,mn.z)}function od(n){return mn.set(n.r,n.g,n.b).applyMatrix3(rd),n.setRGB(mn.x,mn.y,mn.z).convertLinearToSRGB()}const cd={[Yr]:n=>n,[zi]:n=>n.convertSRGBToLinear(),[Jl]:ad},ld={[Yr]:n=>n,[zi]:n=>n.convertLinearToSRGB(),[Jl]:od},ei={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Yr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=cd[e],r=ld[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Xn;class eu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xn===void 0&&(Xn=Fs("canvas")),Xn.width=e.width,Xn.height=e.height;const i=Xn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Xn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let c=0;c<a.length;c++)a[c]=dr(a[c]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(dr(t[i]/255)*255):t[i]=dr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class tu{constructor(e=null){this.isSource=!0,this.uuid=Zr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let c=0,l=r.length;c<l;c++)r[c].isDataTexture?a.push(ba(r[c].image)):a.push(ba(r[c]))}else a=ba(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function ba(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?eu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ud=0;class yi extends _r{constructor(e=yi.DEFAULT_IMAGE,t=yi.DEFAULT_MAPPING,i=Ni,r=Ni,a=Ai,c=jr,l=Fi,f=kn,d=yi.DEFAULT_ANISOTROPY,p=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Zr(),this.name="",this.source=new tu(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=f,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ni,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ka:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case Ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ka:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case Ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}yi.DEFAULT_IMAGE=null;yi.DEFAULT_MAPPING=Yl;yi.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*r+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*r+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*r+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*r+c[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const f=e.elements,d=f[0],p=f[4],_=f[8],g=f[1],M=f[5],S=f[9],v=f[2],x=f[6],T=f[10];if(Math.abs(p-g)<.01&&Math.abs(_-v)<.01&&Math.abs(S-x)<.01){if(Math.abs(p+g)<.1&&Math.abs(_+v)<.1&&Math.abs(S+x)<.1&&Math.abs(d+M+T-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(d+1)/2,L=(M+1)/2,F=(T+1)/2,u=(p+g)/4,q=(_+v)/4,R=(S+x)/4;return A>L&&A>F?A<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(A),r=u/i,a=q/i):L>F?L<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(L),i=u/r,a=R/r):F<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(F),i=q/a,r=R/a),this.set(i,r,a,t),this}let P=Math.sqrt((x-S)*(x-S)+(_-v)*(_-v)+(g-p)*(g-p));return Math.abs(P)<.001&&(P=1),this.x=(x-S)/P,this.y=(_-v)/P,this.z=(g-p)/P,this.w=Math.acos((d+M+T-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hn extends _r{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new yi(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ai,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new tu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class iu extends yi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ii,this.minFilter=ii,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fd extends yi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ii,this.minFilter=ii,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jr{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,a=-1/0,c=-1/0,l=-1/0;for(let f=0,d=e.length;f<d;f+=3){const p=e[f],_=e[f+1],g=e[f+2];p<t&&(t=p),_<i&&(i=_),g<r&&(r=g),p>a&&(a=p),_>c&&(c=_),g>l&&(l=g)}return this.min.set(t,i,r),this.max.set(a,c,l),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,a=-1/0,c=-1/0,l=-1/0;for(let f=0,d=e.count;f<d;f++){const p=e.getX(f),_=e.getY(f),g=e.getZ(f);p<t&&(t=p),_<i&&(i=_),g<r&&(r=g),p>a&&(a=p),_>c&&(c=_),g>l&&(l=g)}return this.min.set(t,i,r),this.max.set(a,c,l),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const a=i.attributes.position;for(let c=0,l=a.count;c<l;c++)Tn.fromBufferAttribute(a,c).applyMatrix4(e.matrixWorld),this.expandByPoint(Tn)}else i.boundingBox===null&&i.computeBoundingBox(),Ma.copy(i.boundingBox),Ma.applyMatrix4(e.matrixWorld),this.union(Ma);const r=e.children;for(let a=0,c=r.length;a<c;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),us.subVectors(this.max,Ir),jn.subVectors(e.a,Ir),$n.subVectors(e.b,Ir),Yn.subVectors(e.c,Ir),cn.subVectors($n,jn),ln.subVectors(Yn,$n),wn.subVectors(jn,Yn);let t=[0,-cn.z,cn.y,0,-ln.z,ln.y,0,-wn.z,wn.y,cn.z,0,-cn.x,ln.z,0,-ln.x,wn.z,0,-wn.x,-cn.y,cn.x,0,-ln.y,ln.x,0,-wn.y,wn.x,0];return!Sa(t,jn,$n,Yn,us)||(t=[1,0,0,0,1,0,0,0,1],!Sa(t,jn,$n,Yn,us))?!1:(fs.crossVectors(cn,ln),t=[fs.x,fs.y,fs.z],Sa(t,jn,$n,Yn,us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Tn=new Z,Ma=new Jr,jn=new Z,$n=new Z,Yn=new Z,cn=new Z,ln=new Z,wn=new Z,Ir=new Z,us=new Z,fs=new Z,An=new Z;function Sa(n,e,t,i,r){for(let a=0,c=n.length-3;a<=c;a+=3){An.fromArray(n,a);const l=r.x*Math.abs(An.x)+r.y*Math.abs(An.y)+r.z*Math.abs(An.z),f=e.dot(An),d=t.dot(An),p=i.dot(An);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>l)return!1}return!0}const hd=new Jr,Nr=new Z,Ea=new Z;class yo{constructor(e=new Z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hd.setFromPoints(e).getCenter(i);let r=0;for(let a=0,c=e.length;a<c;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nr.subVectors(e,this.center);const t=Nr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Nr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nr.copy(e.center).add(Ea)),this.expandByPoint(Nr.copy(e.center).sub(Ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yi=new Z,Ta=new Z,hs=new Z,un=new Z,wa=new Z,ds=new Z,Aa=new Z;class dd{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ta.copy(e).add(t).multiplyScalar(.5),hs.copy(t).sub(e).normalize(),un.copy(this.origin).sub(Ta);const a=e.distanceTo(t)*.5,c=-this.direction.dot(hs),l=un.dot(this.direction),f=-un.dot(hs),d=un.lengthSq(),p=Math.abs(1-c*c);let _,g,M,S;if(p>0)if(_=c*f-l,g=c*l-f,S=a*p,_>=0)if(g>=-S)if(g<=S){const v=1/p;_*=v,g*=v,M=_*(_+c*g+2*l)+g*(c*_+g+2*f)+d}else g=a,_=Math.max(0,-(c*g+l)),M=-_*_+g*(g+2*f)+d;else g=-a,_=Math.max(0,-(c*g+l)),M=-_*_+g*(g+2*f)+d;else g<=-S?(_=Math.max(0,-(-c*a+l)),g=_>0?-a:Math.min(Math.max(-a,-f),a),M=-_*_+g*(g+2*f)+d):g<=S?(_=0,g=Math.min(Math.max(-a,-f),a),M=g*(g+2*f)+d):(_=Math.max(0,-(c*a+l)),g=_>0?a:Math.min(Math.max(-a,-f),a),M=-_*_+g*(g+2*f)+d);else g=c>0?-a:a,_=Math.max(0,-(c*g+l)),M=-_*_+g*(g+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(Ta).addScaledVector(hs,g),M}intersectSphere(e,t){Yi.subVectors(e.center,this.origin);const i=Yi.dot(this.direction),r=Yi.dot(Yi)-i*i,a=e.radius*e.radius;if(r>a)return null;const c=Math.sqrt(a-r),l=i-c,f=i+c;return f<0?null:l<0?this.at(f,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,c,l,f;const d=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,g=this.origin;return d>=0?(i=(e.min.x-g.x)*d,r=(e.max.x-g.x)*d):(i=(e.max.x-g.x)*d,r=(e.min.x-g.x)*d),p>=0?(a=(e.min.y-g.y)*p,c=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,c=(e.min.y-g.y)*p),i>c||a>r||((a>i||isNaN(i))&&(i=a),(c<r||isNaN(r))&&(r=c),_>=0?(l=(e.min.z-g.z)*_,f=(e.max.z-g.z)*_):(l=(e.max.z-g.z)*_,f=(e.min.z-g.z)*_),i>f||l>r)||((l>i||i!==i)&&(i=l),(f<r||r!==r)&&(r=f),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,i,r,a){wa.subVectors(t,e),ds.subVectors(i,e),Aa.crossVectors(wa,ds);let c=this.direction.dot(Aa),l;if(c>0){if(r)return null;l=1}else if(c<0)l=-1,c=-c;else return null;un.subVectors(this.origin,e);const f=l*this.direction.dot(ds.crossVectors(un,ds));if(f<0)return null;const d=l*this.direction.dot(wa.cross(un));if(d<0||f+d>c)return null;const p=-l*un.dot(Aa);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,a,c,l,f,d,p,_,g,M,S,v,x){const T=this.elements;return T[0]=e,T[4]=t,T[8]=i,T[12]=r,T[1]=a,T[5]=c,T[9]=l,T[13]=f,T[2]=d,T[6]=p,T[10]=_,T[14]=g,T[3]=M,T[7]=S,T[11]=v,T[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Zn.setFromMatrixColumn(e,0).length(),a=1/Zn.setFromMatrixColumn(e,1).length(),c=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,c=Math.cos(i),l=Math.sin(i),f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const g=c*p,M=c*_,S=l*p,v=l*_;t[0]=f*p,t[4]=-f*_,t[8]=d,t[1]=M+S*d,t[5]=g-v*d,t[9]=-l*f,t[2]=v-g*d,t[6]=S+M*d,t[10]=c*f}else if(e.order==="YXZ"){const g=f*p,M=f*_,S=d*p,v=d*_;t[0]=g+v*l,t[4]=S*l-M,t[8]=c*d,t[1]=c*_,t[5]=c*p,t[9]=-l,t[2]=M*l-S,t[6]=v+g*l,t[10]=c*f}else if(e.order==="ZXY"){const g=f*p,M=f*_,S=d*p,v=d*_;t[0]=g-v*l,t[4]=-c*_,t[8]=S+M*l,t[1]=M+S*l,t[5]=c*p,t[9]=v-g*l,t[2]=-c*d,t[6]=l,t[10]=c*f}else if(e.order==="ZYX"){const g=c*p,M=c*_,S=l*p,v=l*_;t[0]=f*p,t[4]=S*d-M,t[8]=g*d+v,t[1]=f*_,t[5]=v*d+g,t[9]=M*d-S,t[2]=-d,t[6]=l*f,t[10]=c*f}else if(e.order==="YZX"){const g=c*f,M=c*d,S=l*f,v=l*d;t[0]=f*p,t[4]=v-g*_,t[8]=S*_+M,t[1]=_,t[5]=c*p,t[9]=-l*p,t[2]=-d*p,t[6]=M*_+S,t[10]=g-v*_}else if(e.order==="XZY"){const g=c*f,M=c*d,S=l*f,v=l*d;t[0]=f*p,t[4]=-_,t[8]=d*p,t[1]=g*_+v,t[5]=c*p,t[9]=M*_-S,t[2]=S*_-M,t[6]=l*p,t[10]=v*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pd,e,md)}lookAt(e,t,i){const r=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),fn.crossVectors(i,mi),fn.lengthSq()===0&&(Math.abs(i.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),fn.crossVectors(i,mi)),fn.normalize(),ps.crossVectors(mi,fn),r[0]=fn.x,r[4]=ps.x,r[8]=mi.x,r[1]=fn.y,r[5]=ps.y,r[9]=mi.y,r[2]=fn.z,r[6]=ps.z,r[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,c=i[0],l=i[4],f=i[8],d=i[12],p=i[1],_=i[5],g=i[9],M=i[13],S=i[2],v=i[6],x=i[10],T=i[14],P=i[3],A=i[7],L=i[11],F=i[15],u=r[0],q=r[4],R=r[8],O=r[12],W=r[1],he=r[5],ue=r[9],J=r[13],j=r[2],oe=r[6],ve=r[10],xe=r[14],ce=r[3],ye=r[7],ge=r[11],Ie=r[15];return a[0]=c*u+l*W+f*j+d*ce,a[4]=c*q+l*he+f*oe+d*ye,a[8]=c*R+l*ue+f*ve+d*ge,a[12]=c*O+l*J+f*xe+d*Ie,a[1]=p*u+_*W+g*j+M*ce,a[5]=p*q+_*he+g*oe+M*ye,a[9]=p*R+_*ue+g*ve+M*ge,a[13]=p*O+_*J+g*xe+M*Ie,a[2]=S*u+v*W+x*j+T*ce,a[6]=S*q+v*he+x*oe+T*ye,a[10]=S*R+v*ue+x*ve+T*ge,a[14]=S*O+v*J+x*xe+T*Ie,a[3]=P*u+A*W+L*j+F*ce,a[7]=P*q+A*he+L*oe+F*ye,a[11]=P*R+A*ue+L*ve+F*ge,a[15]=P*O+A*J+L*xe+F*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],c=e[1],l=e[5],f=e[9],d=e[13],p=e[2],_=e[6],g=e[10],M=e[14],S=e[3],v=e[7],x=e[11],T=e[15];return S*(+a*f*_-r*d*_-a*l*g+i*d*g+r*l*M-i*f*M)+v*(+t*f*M-t*d*g+a*c*g-r*c*M+r*d*p-a*f*p)+x*(+t*d*_-t*l*M-a*c*_+i*c*M+a*l*p-i*d*p)+T*(-r*l*p-t*f*_+t*l*g+r*c*_-i*c*g+i*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],c=e[4],l=e[5],f=e[6],d=e[7],p=e[8],_=e[9],g=e[10],M=e[11],S=e[12],v=e[13],x=e[14],T=e[15],P=_*x*d-v*g*d+v*f*M-l*x*M-_*f*T+l*g*T,A=S*g*d-p*x*d-S*f*M+c*x*M+p*f*T-c*g*T,L=p*v*d-S*_*d+S*l*M-c*v*M-p*l*T+c*_*T,F=S*_*f-p*v*f-S*l*g+c*v*g+p*l*x-c*_*x,u=t*P+i*A+r*L+a*F;if(u===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/u;return e[0]=P*q,e[1]=(v*g*a-_*x*a-v*r*M+i*x*M+_*r*T-i*g*T)*q,e[2]=(l*x*a-v*f*a+v*r*d-i*x*d-l*r*T+i*f*T)*q,e[3]=(_*f*a-l*g*a-_*r*d+i*g*d+l*r*M-i*f*M)*q,e[4]=A*q,e[5]=(p*x*a-S*g*a+S*r*M-t*x*M-p*r*T+t*g*T)*q,e[6]=(S*f*a-c*x*a-S*r*d+t*x*d+c*r*T-t*f*T)*q,e[7]=(c*g*a-p*f*a+p*r*d-t*g*d-c*r*M+t*f*M)*q,e[8]=L*q,e[9]=(S*_*a-p*v*a-S*i*M+t*v*M+p*i*T-t*_*T)*q,e[10]=(c*v*a-S*l*a+S*i*d-t*v*d-c*i*T+t*l*T)*q,e[11]=(p*l*a-c*_*a-p*i*d+t*_*d+c*i*M-t*l*M)*q,e[12]=F*q,e[13]=(p*v*r-S*_*r+S*i*g-t*v*g-p*i*x+t*_*x)*q,e[14]=(S*l*r-c*v*r-S*i*f+t*v*f+c*i*x-t*l*x)*q,e[15]=(c*_*r-p*l*r+p*i*f-t*_*f-c*i*g+t*l*g)*q,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,c=e.x,l=e.y,f=e.z,d=a*c,p=a*l;return this.set(d*c+i,d*l-r*f,d*f+r*l,0,d*l+r*f,p*l+i,p*f-r*c,0,d*f-r*l,p*f+r*c,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,c){return this.set(1,i,a,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,c=t._y,l=t._z,f=t._w,d=a+a,p=c+c,_=l+l,g=a*d,M=a*p,S=a*_,v=c*p,x=c*_,T=l*_,P=f*d,A=f*p,L=f*_,F=i.x,u=i.y,q=i.z;return r[0]=(1-(v+T))*F,r[1]=(M+L)*F,r[2]=(S-A)*F,r[3]=0,r[4]=(M-L)*u,r[5]=(1-(g+T))*u,r[6]=(x+P)*u,r[7]=0,r[8]=(S+A)*q,r[9]=(x-P)*q,r[10]=(1-(g+v))*q,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=Zn.set(r[0],r[1],r[2]).length();const c=Zn.set(r[4],r[5],r[6]).length(),l=Zn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Li.copy(this);const d=1/a,p=1/c,_=1/l;return Li.elements[0]*=d,Li.elements[1]*=d,Li.elements[2]*=d,Li.elements[4]*=p,Li.elements[5]*=p,Li.elements[6]*=p,Li.elements[8]*=_,Li.elements[9]*=_,Li.elements[10]*=_,t.setFromRotationMatrix(Li),i.x=a,i.y=c,i.z=l,this}makePerspective(e,t,i,r,a,c){const l=this.elements,f=2*a/(t-e),d=2*a/(i-r),p=(t+e)/(t-e),_=(i+r)/(i-r),g=-(c+a)/(c-a),M=-2*c*a/(c-a);return l[0]=f,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=_,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,c){const l=this.elements,f=1/(t-e),d=1/(i-r),p=1/(c-a),_=(t+e)*f,g=(i+r)*d,M=(c+a)*p;return l[0]=2*f,l[4]=0,l[8]=0,l[12]=-_,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=-2*p,l[14]=-M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Zn=new Z,Li=new kt,pd=new Z(0,0,0),md=new Z(1,1,1),fn=new Z,ps=new Z,mi=new Z,Pc=new kt,Ic=new Kr;class Hs{constructor(e=0,t=0,i=0,r=Hs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],c=r[4],l=r[8],f=r[1],d=r[5],p=r[9],_=r[2],g=r[6],M=r[10];switch(t){case"XYZ":this._y=Math.asin(vi(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,M),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-vi(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,M),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(vi(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-vi(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(vi(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(l,M));break;case"XZY":this._z=Math.asin(-vi(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-p,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ic.setFromEuler(this),this.setFromQuaternion(Ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hs.DEFAULT_ORDER="XYZ";class nu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gd=0;const Nc=new Z,Kn=new Kr,Zi=new kt,ms=new Z,Fr=new Z,vd=new Z,_d=new Kr,Fc=new Z(1,0,0),Uc=new Z(0,1,0),Oc=new Z(0,0,1),xd={type:"added"},Bc={type:"removed"};class li extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=li.DEFAULT_UP.clone();const e=new Z,t=new Hs,i=new Kr,r=new Z(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new kt},normalMatrix:{value:new ni}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=li.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new nu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.premultiply(Kn),this}rotateX(e){return this.rotateOnAxis(Fc,e)}rotateY(e){return this.rotateOnAxis(Uc,e)}rotateZ(e){return this.rotateOnAxis(Oc,e)}translateOnAxis(e,t){return Nc.copy(e).applyQuaternion(this.quaternion),this.position.add(Nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fc,e)}translateY(e){return this.translateOnAxis(Uc,e)}translateZ(e){return this.translateOnAxis(Oc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ms.copy(e):ms.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Fr,ms,this.up):Zi.lookAt(ms,Fr,this.up),this.quaternion.setFromRotationMatrix(Zi),r&&(Zi.extractRotation(r.matrixWorld),Kn.setFromRotationMatrix(Zi),this.quaternion.premultiply(Kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Bc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectsByProperty(e,t);c.length>0&&(i=i.concat(c))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,vd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,_d,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,c=r.length;a<c;a++){const l=r[a];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(l,f){return l[f.uuid]===void 0&&(l[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const f=l.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const _=f[d];a(e.shapes,_)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let f=0,d=this.material.length;f<d;f++)l.push(a(e.materials,this.material[f]));r.material=l}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const f=this.animations[l];r.animations.push(a(e.animations,f))}}if(t){const l=c(e.geometries),f=c(e.materials),d=c(e.textures),p=c(e.images),_=c(e.shapes),g=c(e.skeletons),M=c(e.animations),S=c(e.nodes);l.length>0&&(i.geometries=l),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),g.length>0&&(i.skeletons=g),M.length>0&&(i.animations=M),S.length>0&&(i.nodes=S)}return i.object=r,i;function c(l){const f=[];for(const d in l){const p=l[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}li.DEFAULT_UP=new Z(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new Z,Ki=new Z,Ca=new Z,Ji=new Z,Jn=new Z,Qn=new Z,zc=new Z,Ra=new Z,La=new Z,Da=new Z;class en{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Di.subVectors(e,t),r.cross(Di);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Di.subVectors(r,t),Ki.subVectors(i,t),Ca.subVectors(e,t);const c=Di.dot(Di),l=Di.dot(Ki),f=Di.dot(Ca),d=Ki.dot(Ki),p=Ki.dot(Ca),_=c*d-l*l;if(_===0)return a.set(-2,-1,-1);const g=1/_,M=(d*f-l*p)*g,S=(c*p-l*f)*g;return a.set(1-M-S,S,M)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ji),Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getUV(e,t,i,r,a,c,l,f){return this.getBarycoord(e,t,i,r,Ji),f.set(0,0),f.addScaledVector(a,Ji.x),f.addScaledVector(c,Ji.y),f.addScaledVector(l,Ji.z),f}static isFrontFacing(e,t,i,r){return Di.subVectors(i,t),Ki.subVectors(e,t),Di.cross(Ki).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),Di.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return en.getUV(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let c,l;Jn.subVectors(r,i),Qn.subVectors(a,i),Ra.subVectors(e,i);const f=Jn.dot(Ra),d=Qn.dot(Ra);if(f<=0&&d<=0)return t.copy(i);La.subVectors(e,r);const p=Jn.dot(La),_=Qn.dot(La);if(p>=0&&_<=p)return t.copy(r);const g=f*_-p*d;if(g<=0&&f>=0&&p<=0)return c=f/(f-p),t.copy(i).addScaledVector(Jn,c);Da.subVectors(e,a);const M=Jn.dot(Da),S=Qn.dot(Da);if(S>=0&&M<=S)return t.copy(a);const v=M*d-f*S;if(v<=0&&d>=0&&S<=0)return l=d/(d-S),t.copy(i).addScaledVector(Qn,l);const x=p*S-M*_;if(x<=0&&_-p>=0&&M-S>=0)return zc.subVectors(a,r),l=(_-p)/(_-p+(M-S)),t.copy(r).addScaledVector(zc,l);const T=1/(x+v+g);return c=v*T,l=g*T,t.copy(i).addScaledVector(Jn,c).addScaledVector(Qn,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let yd=0;class Qr extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Zr(),this.name="",this.type="Material",this.blending=fr,this.side=vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=jl,this.blendDst=$l,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=$a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ma,this.stencilZFail=ma,this.stencilZPass=ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(i.blending=this.blending),this.side!==vn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const c=[];for(const l in a){const f=a[l];delete f.metadata,c.push(f)}return c}if(t){const a=r(e.textures),c=r(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},gs={h:0,s:0,l:0};function Pa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ei.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ei.workingColorSpace){return this.r=e,this.g=t,this.b=i,ei.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ei.workingColorSpace){if(e=id(e,1),t=vi(t,0,1),i=vi(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Pa(c,a,e+1/3),this.g=Pa(c,a,e),this.b=Pa(c,a,e-1/3)}return ei.toWorkingColorSpace(this,r),this}setStyle(e,t=zi){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=r[1],l=r[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,ei.toWorkingColorSpace(this,t),i(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,ei.toWorkingColorSpace(this,t),i(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l)){const f=parseFloat(a[1])/360,d=parseFloat(a[2])/100,p=parseFloat(a[3])/100;return i(a[4]),this.setHSL(f,d,p,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],c=a.length;if(c===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,ei.toWorkingColorSpace(this,t),this;if(c===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,ei.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zi){const i=ru[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zi){return ei.fromWorkingColorSpace(Kt.copy(this),e),vi(Kt.r*255,0,255)<<16^vi(Kt.g*255,0,255)<<8^vi(Kt.b*255,0,255)<<0}getHexString(e=zi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ei.workingColorSpace){ei.fromWorkingColorSpace(Kt.copy(this),t);const i=Kt.r,r=Kt.g,a=Kt.b,c=Math.max(i,r,a),l=Math.min(i,r,a);let f,d;const p=(l+c)/2;if(l===c)f=0,d=0;else{const _=c-l;switch(d=p<=.5?_/(c+l):_/(2-c-l),c){case i:f=(r-a)/_+(r<a?6:0);break;case r:f=(a-i)/_+2;break;case a:f=(i-r)/_+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,t=ei.workingColorSpace){return ei.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=zi){ei.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,i=Kt.g,r=Kt.b;return e!==zi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(Pi),Pi.h+=e,Pi.s+=t,Pi.l+=i,this.setHSL(Pi.h,Pi.s,Pi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(gs);const i=va(Pi.h,gs.h,t),r=va(Pi.s,gs.s,t),a=va(Pi.l,gs.l,t);return this.setHSL(i,r,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Et;Et.NAMES=ru;class su extends Qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new Z,vs=new xt;class Wi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ac,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vs.fromBufferAttribute(this,t),vs.applyMatrix3(e),this.setXY(t,vs.x,vs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),i=pi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),i=pi(i,this.array),r=pi(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),i=pi(i,this.array),r=pi(r,this.array),a=pi(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ac&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class au extends Wi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ou extends Wi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class zn extends Wi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let bd=0;const wi=new kt,Ia=new li,er=new Z,gi=new Jr,Ur=new Jr,Xt=new Z;class Wn extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Zr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ql(e)?ou:au)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ni().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,t,i){return wi.makeTranslation(e,t,i),this.applyMatrix4(wi),this}scale(e,t,i){return wi.makeScale(e,t,i),this.applyMatrix4(wi),this}lookAt(e){return Ia.lookAt(e),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new zn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];gi.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const l=t[a];Ur.setFromBufferAttribute(l),this.morphTargetsRelative?(Xt.addVectors(gi.min,Ur.min),gi.expandByPoint(Xt),Xt.addVectors(gi.max,Ur.max),gi.expandByPoint(Xt)):(gi.expandByPoint(Ur.min),gi.expandByPoint(Ur.max))}gi.getCenter(i);let r=0;for(let a=0,c=e.count;a<c;a++)Xt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Xt));if(t)for(let a=0,c=t.length;a<c;a++){const l=t[a],f=this.morphTargetsRelative;for(let d=0,p=l.count;d<p;d++)Xt.fromBufferAttribute(l,d),f&&(er.fromBufferAttribute(e,d),Xt.add(er)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,c=t.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*l),4));const f=this.getAttribute("tangent").array,d=[],p=[];for(let W=0;W<l;W++)d[W]=new Z,p[W]=new Z;const _=new Z,g=new Z,M=new Z,S=new xt,v=new xt,x=new xt,T=new Z,P=new Z;function A(W,he,ue){_.fromArray(r,W*3),g.fromArray(r,he*3),M.fromArray(r,ue*3),S.fromArray(c,W*2),v.fromArray(c,he*2),x.fromArray(c,ue*2),g.sub(_),M.sub(_),v.sub(S),x.sub(S);const J=1/(v.x*x.y-x.x*v.y);isFinite(J)&&(T.copy(g).multiplyScalar(x.y).addScaledVector(M,-v.y).multiplyScalar(J),P.copy(M).multiplyScalar(v.x).addScaledVector(g,-x.x).multiplyScalar(J),d[W].add(T),d[he].add(T),d[ue].add(T),p[W].add(P),p[he].add(P),p[ue].add(P))}let L=this.groups;L.length===0&&(L=[{start:0,count:i.length}]);for(let W=0,he=L.length;W<he;++W){const ue=L[W],J=ue.start,j=ue.count;for(let oe=J,ve=J+j;oe<ve;oe+=3)A(i[oe+0],i[oe+1],i[oe+2])}const F=new Z,u=new Z,q=new Z,R=new Z;function O(W){q.fromArray(a,W*3),R.copy(q);const he=d[W];F.copy(he),F.sub(q.multiplyScalar(q.dot(he))).normalize(),u.crossVectors(R,he);const J=u.dot(p[W])<0?-1:1;f[W*4]=F.x,f[W*4+1]=F.y,f[W*4+2]=F.z,f[W*4+3]=J}for(let W=0,he=L.length;W<he;++W){const ue=L[W],J=ue.start,j=ue.count;for(let oe=J,ve=J+j;oe<ve;oe+=3)O(i[oe+0]),O(i[oe+1]),O(i[oe+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,M=i.count;g<M;g++)i.setXYZ(g,0,0,0);const r=new Z,a=new Z,c=new Z,l=new Z,f=new Z,d=new Z,p=new Z,_=new Z;if(e)for(let g=0,M=e.count;g<M;g+=3){const S=e.getX(g+0),v=e.getX(g+1),x=e.getX(g+2);r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,v),c.fromBufferAttribute(t,x),p.subVectors(c,a),_.subVectors(r,a),p.cross(_),l.fromBufferAttribute(i,S),f.fromBufferAttribute(i,v),d.fromBufferAttribute(i,x),l.add(p),f.add(p),d.add(p),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(v,f.x,f.y,f.z),i.setXYZ(x,d.x,d.y,d.z)}else for(let g=0,M=t.count;g<M;g+=3)r.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),p.subVectors(c,a),_.subVectors(r,a),p.cross(_),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(l,f){const d=l.array,p=l.itemSize,_=l.normalized,g=new d.constructor(f.length*p);let M=0,S=0;for(let v=0,x=f.length;v<x;v++){l.isInterleavedBufferAttribute?M=f[v]*l.data.stride+l.offset:M=f[v]*p;for(let T=0;T<p;T++)g[S++]=d[M++]}return new Wi(g,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wn,i=this.index.array,r=this.attributes;for(const l in r){const f=r[l],d=e(f,i);t.setAttribute(l,d)}const a=this.morphAttributes;for(const l in a){const f=[],d=a[l];for(let p=0,_=d.length;p<_;p++){const g=d[p],M=e(g,i);f.push(M)}t.morphAttributes[l]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,f=c.length;l<f;l++){const d=c[l];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const r={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let _=0,g=d.length;_<g;_++){const M=d[_];p.push(M.toJSON(e.data))}p.length>0&&(r[f]=p,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const d in r){const p=r[d];this.setAttribute(d,p.clone(t))}const a=e.morphAttributes;for(const d in a){const p=[],_=a[d];for(let g=0,M=_.length;g<M;g++)p.push(_[g].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,p=c.length;d<p;d++){const _=c[d];this.addGroup(_.start,_.count,_.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kc=new kt,Bi=new dd,_s=new yo,Gc=new Z,Or=new Z,Br=new Z,zr=new Z,Na=new Z,xs=new Z,ys=new xt,bs=new xt,Ms=new xt,Fa=new Z,Ss=new Z;class tn extends li{constructor(e=new Wn,t=new su){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=r.length;a<c;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(a&&l){xs.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const p=l[f],_=a[f];p!==0&&(Na.fromBufferAttribute(_,e),c?xs.addScaledVector(Na,p):xs.addScaledVector(Na.sub(t),p))}t.add(xs)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),_s.copy(i.boundingSphere),_s.applyMatrix4(a),Bi.copy(e.ray).recast(e.near),_s.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(_s,Gc)===null||Bi.origin.distanceToSquared(Gc)>(e.far-e.near)**2))||(kc.copy(a).invert(),Bi.copy(e.ray).applyMatrix4(kc),i.boundingBox!==null&&Bi.intersectsBox(i.boundingBox)===!1))return;let c;const l=i.index,f=i.attributes.position,d=i.attributes.uv,p=i.attributes.uv2,_=i.groups,g=i.drawRange;if(l!==null)if(Array.isArray(r))for(let M=0,S=_.length;M<S;M++){const v=_[M],x=r[v.materialIndex],T=Math.max(v.start,g.start),P=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let A=T,L=P;A<L;A+=3){const F=l.getX(A),u=l.getX(A+1),q=l.getX(A+2);c=Es(this,x,e,Bi,d,p,F,u,q),c&&(c.faceIndex=Math.floor(A/3),c.face.materialIndex=v.materialIndex,t.push(c))}}else{const M=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let v=M,x=S;v<x;v+=3){const T=l.getX(v),P=l.getX(v+1),A=l.getX(v+2);c=Es(this,r,e,Bi,d,p,T,P,A),c&&(c.faceIndex=Math.floor(v/3),t.push(c))}}else if(f!==void 0)if(Array.isArray(r))for(let M=0,S=_.length;M<S;M++){const v=_[M],x=r[v.materialIndex],T=Math.max(v.start,g.start),P=Math.min(f.count,Math.min(v.start+v.count,g.start+g.count));for(let A=T,L=P;A<L;A+=3){const F=A,u=A+1,q=A+2;c=Es(this,x,e,Bi,d,p,F,u,q),c&&(c.faceIndex=Math.floor(A/3),c.face.materialIndex=v.materialIndex,t.push(c))}}else{const M=Math.max(0,g.start),S=Math.min(f.count,g.start+g.count);for(let v=M,x=S;v<x;v+=3){const T=v,P=v+1,A=v+2;c=Es(this,r,e,Bi,d,p,T,P,A),c&&(c.faceIndex=Math.floor(v/3),t.push(c))}}}}function Md(n,e,t,i,r,a,c,l){let f;if(e.side===xi?f=i.intersectTriangle(c,a,r,!0,l):f=i.intersectTriangle(r,a,c,e.side===vn,l),f===null)return null;Ss.copy(l),Ss.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(Ss);return d<t.near||d>t.far?null:{distance:d,point:Ss.clone(),object:n}}function Es(n,e,t,i,r,a,c,l,f){n.getVertexPosition(c,Or),n.getVertexPosition(l,Br),n.getVertexPosition(f,zr);const d=Md(n,e,t,i,Or,Br,zr,Fa);if(d){r&&(ys.fromBufferAttribute(r,c),bs.fromBufferAttribute(r,l),Ms.fromBufferAttribute(r,f),d.uv=en.getUV(Fa,Or,Br,zr,ys,bs,Ms,new xt)),a&&(ys.fromBufferAttribute(a,c),bs.fromBufferAttribute(a,l),Ms.fromBufferAttribute(a,f),d.uv2=en.getUV(Fa,Or,Br,zr,ys,bs,Ms,new xt));const p={a:c,b:l,c:f,normal:new Z,materialIndex:0};en.getNormal(Or,Br,zr,p.normal),d.face=p}return d}class xr extends Wn{constructor(e=1,t=1,i=1,r=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:c};const l=this;r=Math.floor(r),a=Math.floor(a),c=Math.floor(c);const f=[],d=[],p=[],_=[];let g=0,M=0;S("z","y","x",-1,-1,i,t,e,c,a,0),S("z","y","x",1,-1,i,t,-e,c,a,1),S("x","z","y",1,1,e,i,t,r,c,2),S("x","z","y",1,-1,e,i,-t,r,c,3),S("x","y","z",1,-1,e,t,i,r,a,4),S("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(f),this.setAttribute("position",new zn(d,3)),this.setAttribute("normal",new zn(p,3)),this.setAttribute("uv",new zn(_,2));function S(v,x,T,P,A,L,F,u,q,R,O){const W=L/q,he=F/R,ue=L/2,J=F/2,j=u/2,oe=q+1,ve=R+1;let xe=0,ce=0;const ye=new Z;for(let ge=0;ge<ve;ge++){const Ie=ge*he-J;for(let Q=0;Q<oe;Q++){const me=Q*W-ue;ye[v]=me*P,ye[x]=Ie*A,ye[T]=j,d.push(ye.x,ye.y,ye.z),ye[v]=0,ye[x]=0,ye[T]=u>0?1:-1,p.push(ye.x,ye.y,ye.z),_.push(Q/q),_.push(1-ge/R),xe+=1}}for(let ge=0;ge<R;ge++)for(let Ie=0;Ie<q;Ie++){const Q=g+Ie+oe*ge,me=g+Ie+oe*(ge+1),Se=g+(Ie+1)+oe*(ge+1),z=g+(Ie+1)+oe*ge;f.push(Q,me,z),f.push(me,Se,z),ce+=6}l.addGroup(M,ce,O),M+=ce,g+=xe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ti(n){const e={};for(let t=0;t<n.length;t++){const i=vr(n[t]);for(const r in i)e[r]=i[r]}return e}function Sd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cu(n){return n.getRenderTarget()===null&&n.outputEncoding===wt?zi:Yr}const Ed={clone:vr,merge:ti},Td=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,wd=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Vn extends Qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Td,this.fragmentShader=wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=Sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class lu extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _i extends lu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rc*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ga*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,d=c.fullHeight;a+=c.offsetX*r/f,t-=c.offsetY*i/d,r*=c.width/f,i*=c.height/d}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,ir=1;class Ad extends li{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new _i(tr,ir,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const a=new _i(tr,ir,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(-1,0,0),this.add(a);const c=new _i(tr,ir,e,t);c.layers=this.layers,c.up.set(0,0,-1),c.lookAt(0,1,0),this.add(c);const l=new _i(tr,ir,e,t);l.layers=this.layers,l.up.set(0,0,1),l.lookAt(0,-1,0),this.add(l);const f=new _i(tr,ir,e,t);f.layers=this.layers,f.up.set(0,1,0),f.lookAt(0,0,1),this.add(f);const d=new _i(tr,ir,e,t);d.layers=this.layers,d.up.set(0,1,0),d.lookAt(0,0,-1),this.add(d)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,a,c,l,f,d]=this.children,p=e.getRenderTarget(),_=e.toneMapping,g=e.xr.enabled;e.toneMapping=rn,e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,a),e.setRenderTarget(i,2),e.render(t,c),e.setRenderTarget(i,3),e.render(t,l),e.setRenderTarget(i,4),e.render(t,f),i.texture.generateMipmaps=M,e.setRenderTarget(i,5),e.render(t,d),e.setRenderTarget(p),e.toneMapping=_,e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class uu extends yi{constructor(e,t,i,r,a,c,l,f,d,p){e=e!==void 0?e:[],t=t!==void 0?t:pr,super(e,t,i,r,a,c,l,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cd extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new uu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ai}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new xr(5,5,5),a=new Vn({name:"CubemapFromEquirect",uniforms:vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xi,blending:gn});a.uniforms.tEquirect.value=t;const c=new tn(r,a),l=t.minFilter;return t.minFilter===jr&&(t.minFilter=Ai),new Ad(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,r);e.setRenderTarget(a)}}const Ua=new Z,Rd=new Z,Ld=new ni;class Ln{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ua.subVectors(i,t).cross(Rd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ua),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ld.getNormalMatrix(e),r=this.coplanarPoint(Ua).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const nr=new yo,Ts=new Z;class bo{constructor(e=new Ln,t=new Ln,i=new Ln,r=new Ln,a=new Ln,c=new Ln){this.planes=[e,t,i,r,a,c]}set(e,t,i,r,a,c){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(r),l[4].copy(a),l[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],a=i[1],c=i[2],l=i[3],f=i[4],d=i[5],p=i[6],_=i[7],g=i[8],M=i[9],S=i[10],v=i[11],x=i[12],T=i[13],P=i[14],A=i[15];return t[0].setComponents(l-r,_-f,v-g,A-x).normalize(),t[1].setComponents(l+r,_+f,v+g,A+x).normalize(),t[2].setComponents(l+a,_+d,v+M,A+T).normalize(),t[3].setComponents(l-a,_-d,v-M,A-T).normalize(),t[4].setComponents(l-c,_-p,v-S,A-P).normalize(),t[5].setComponents(l+c,_+p,v+S,A+P).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSprite(e){return nr.center.set(0,0,0),nr.radius=.7071067811865476,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ts.x=r.normal.x>0?e.max.x:e.min.x,Ts.y=r.normal.y>0?e.max.y:e.min.y,Ts.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fu(){let n=null,e=!1,t=null,i=null;function r(a,c){t(a,c),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Dd(n,e){const t=e.isWebGL2,i=new WeakMap;function r(d,p){const _=d.array,g=d.usage,M=n.createBuffer();n.bindBuffer(p,M),n.bufferData(p,_,g),d.onUploadCallback();let S;if(_ instanceof Float32Array)S=n.FLOAT;else if(_ instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)S=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=n.UNSIGNED_SHORT;else if(_ instanceof Int16Array)S=n.SHORT;else if(_ instanceof Uint32Array)S=n.UNSIGNED_INT;else if(_ instanceof Int32Array)S=n.INT;else if(_ instanceof Int8Array)S=n.BYTE;else if(_ instanceof Uint8Array)S=n.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)S=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:M,type:S,bytesPerElement:_.BYTES_PER_ELEMENT,version:d.version}}function a(d,p,_){const g=p.array,M=p.updateRange;n.bindBuffer(_,d),M.count===-1?n.bufferSubData(_,0,g):(t?n.bufferSubData(_,M.offset*g.BYTES_PER_ELEMENT,g,M.offset,M.count):n.bufferSubData(_,M.offset*g.BYTES_PER_ELEMENT,g.subarray(M.offset,M.offset+M.count)),M.count=-1),p.onUploadCallback()}function c(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=i.get(d);p&&(n.deleteBuffer(p.buffer),i.delete(d))}function f(d,p){if(d.isGLBufferAttribute){const g=i.get(d);(!g||g.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const _=i.get(d);_===void 0?i.set(d,r(d,p)):_.version<d.version&&(a(_.buffer,d,p),_.version=d.version)}return{get:c,remove:l,update:f}}class Mo extends Wn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,c=t/2,l=Math.floor(i),f=Math.floor(r),d=l+1,p=f+1,_=e/l,g=t/f,M=[],S=[],v=[],x=[];for(let T=0;T<p;T++){const P=T*g-c;for(let A=0;A<d;A++){const L=A*_-a;S.push(L,-P,0),v.push(0,0,1),x.push(A/l),x.push(1-T/f)}}for(let T=0;T<f;T++)for(let P=0;P<l;P++){const A=P+d*T,L=P+d*(T+1),F=P+1+d*(T+1),u=P+1+d*T;M.push(A,L,u),M.push(L,F,u)}this.setIndex(M),this.setAttribute("position",new zn(S,3)),this.setAttribute("normal",new zn(v,3)),this.setAttribute("uv",new zn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.widthSegments,e.heightSegments)}}const Pd=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vUv ).g;

#endif
`,Id=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,Nd=`
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`,Fd=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,Ud=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`,Od=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,Bd=`
vec3 transformed = vec3( position );
`,zd=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,kd=`

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );

    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {

	float alpha = pow2( roughness ); // UE4's roughness

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

#ifdef USE_IRIDESCENCE

	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {

		float alpha = pow2( roughness ); // UE4's roughness

		vec3 halfDir = normalize( lightDir + viewDir );

		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );

		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

		return F * ( V * D );

	}

#endif

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light


float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
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

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
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
`,Gd=`

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
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

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			 return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`,Hd=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );

		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,Vd=`
#if NUM_CLIPPING_PLANES > 0

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

#endif
`,Wd=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,qd=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,Xd=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,jd=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,$d=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,Yd=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`,Zd=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif
`,Kd=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
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

struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

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

	// assumes rgb is in linear color space with sRGB primaries and D65 white point

	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );

	return dot( weights, rgb );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}
`,Jd=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

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

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071

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

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

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

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

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

#endif
`,Qd=`
vec3 transformedNormal = objectNormal;

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

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

#endif
`,ep=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,tp=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );

#endif
`,ip=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,np=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,rp=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,sp=`

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`,ap=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
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

#endif
`,op=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,cp=`
#ifdef USE_ENVMAP

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

#endif
`,lp=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,up=`
#ifdef USE_ENVMAP

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

#endif
`,fp=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,hp=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,dp=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,pp=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,mp=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`,gp=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`,vp=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,_p=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`,xp=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`,yp=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
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

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
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

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {

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

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometry.position;

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

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometry.position;

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

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

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
`,bp=`
#if defined( USE_ENVMAP )

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

#endif
`,Mp=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,Sp=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`,Ep=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,Tp=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`,wp=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	material.ior = ior;

	#ifdef SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULARINTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;

		#endif

		#ifdef USE_SPECULARCOLORMAP

			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;

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

		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_IRIDESCENCE

	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;

	#ifdef USE_IRIDESCENCEMAP

		material.iridescence *= texture2D( iridescenceMap, vUv ).r;

	#endif

	#ifdef USE_IRIDESCENCE_THICKNESSMAP

		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;

	#else

		material.iridescenceThickness = iridescenceThicknessMaximum;

	#endif

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEENCOLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

	#ifdef USE_SHEENROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;

	#endif

#endif
`,Ap=`
struct PhysicalMaterial {

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

};

// temporary
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );

// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from 
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
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

// Fdez-Agüera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
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

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
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

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );

	#endif

	#ifdef USE_IRIDESCENCE

		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );

	#else

		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );

	#endif

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );

	#else

		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

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

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,Cp=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometry.viewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
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

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

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

		getSpotLightInfo( spotLight, geometry, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
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

		RE_Direct( directLight, geometry, material, reflectedLight );

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

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,Rp=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometry.normal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`,Lp=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`,Dp=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,Pp=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,Ip=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`,Np=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

	#else

		if ( isPerspectiveMatrix( projectionMatrix ) ) {

			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;

			gl_Position.z *= gl_Position.w;

		}

	#endif

#endif
`,Fp=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)

		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`,Up=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,Op=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`,Bp=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	uniform mat3 uvTransform;

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,zp=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,kp=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,Gp=`
#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`,Hp=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
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

#endif
`,Vp=`
#ifdef USE_MORPHTARGETS

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

#endif
`,Wp=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
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

#endif
`,qp=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	#ifdef USE_TANGENT

		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );

		#ifdef DOUBLE_SIDED

			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;

		#endif

		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )

			mat3 vTBN = mat3( tangent, bitangent, normal );

		#endif

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 geometryNormal = normal;

`,Xp=`

#ifdef OBJECTSPACE_NORMALMAP

	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( TANGENTSPACE_NORMALMAP )

	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	#ifdef USE_TANGENT

		normal = normalize( vTBN * mapN );

	#else

		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );

	#endif

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`,jp=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,$p=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Yp=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,Zp=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef OBJECTSPACE_NORMALMAP

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

	}

#endif
`,Kp=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`,Jp=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	#ifdef USE_TANGENT

		clearcoatNormal = normalize( vTBN * clearcoatMapN );

	#else

		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );

	#endif

#endif
`,Qp=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif
`,em=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,tm=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

// https://github.com/mrdoob/three.js/pull/22425
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,im=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
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

// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
`,nm=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,rm=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,sm=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,am=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,om=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,cm=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,lm=`
#if NUM_SPOT_LIGHT_COORDS > 0

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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

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

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

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

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// dp = normalized distance from light to fragment position
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
		dp += shadowBias;

		// bd3D = base direction 3D
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

		#else // no percentage-closer filtering

			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

		#endif

	}

#endif
`,um=`

#if NUM_SPOT_LIGHT_COORDS > 0

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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,fm=`

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

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

#endif


`,hm=`
float getShadowMask() {

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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,dm=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,pm=`
#ifdef USE_SKINNING

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

#endif
`,mm=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,gm=`
#ifdef USE_SKINNING

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

#endif
`,vm=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,_m=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,xm=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,ym=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return toneMappingExposure * color;

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`,bm=`
#ifdef USE_TRANSMISSION

	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		material.transmission *= texture2D( transmissionMap, vUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		material.thickness *= texture2D( thicknessMap, vUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );

#endif
`,Mm=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

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

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

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

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
	float h0( float a ) {

		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );

	}

	float h1( float a ) {

		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );

	}

	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {

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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;

		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );

	}

	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {

		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );

	}

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independant scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
			return radiance;

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance * radiance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;

		// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;

		// Sample framebuffer to get pixel the refracted ray hits.
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );

		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );

	}
#endif
`,Sm=`
#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )

	varying vec2 vUv;

#endif
`,Em=`
#ifdef USE_UV

	#ifdef UVS_VERTEX_ONLY

		vec2 vUv;

	#else

		varying vec2 vUv;

	#endif

	uniform mat3 uvTransform;

#endif
`,Tm=`
#ifdef USE_UV

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

#endif
`,wm=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	varying vec2 vUv2;

#endif
`,Am=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	attribute vec2 uv2;
	varying vec2 vUv2;

	uniform mat3 uv2Transform;

#endif
`,Cm=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;

#endif
`,Rm=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`,Lm=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,Dm=`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)

		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,Pm=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Im=`

#ifdef ENVMAP_TYPE_CUBE

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
	#include <encodings_fragment>

}
`,Nm=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Fm=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,Um=`
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
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

}
`,Om=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
`,Bm=`
#define DISTANCE

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

}
`,zm=`
#define DISTANCE

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
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,km=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,Gm=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,Hm=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,Vm=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,Wm=`
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
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

}
`,qm=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Xm=`
#define LAMBERT

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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

}
`,jm=`
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,$m=`
#define MATCAP

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

}
`,Ym=`
#define MATCAP

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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Zm=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

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

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,Km=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

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

}
`,Jm=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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

}
`,Qm=`
#define PHONG

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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,eg=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}
`,tg=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif

	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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

	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;

	#endif

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,ig=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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

}
`,ng=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,rg=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

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

}
`,sg=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
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

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,ag=`
#include <common>
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

}
`,og=`
uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,cg=`
uniform float rotation;
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

}
`,lg=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,ot={alphamap_fragment:Pd,alphamap_pars_fragment:Id,alphatest_fragment:Nd,alphatest_pars_fragment:Fd,aomap_fragment:Ud,aomap_pars_fragment:Od,begin_vertex:Bd,beginnormal_vertex:zd,bsdfs:kd,iridescence_fragment:Gd,bumpmap_pars_fragment:Hd,clipping_planes_fragment:Vd,clipping_planes_pars_fragment:Wd,clipping_planes_pars_vertex:qd,clipping_planes_vertex:Xd,color_fragment:jd,color_pars_fragment:$d,color_pars_vertex:Yd,color_vertex:Zd,common:Kd,cube_uv_reflection_fragment:Jd,defaultnormal_vertex:Qd,displacementmap_pars_vertex:ep,displacementmap_vertex:tp,emissivemap_fragment:ip,emissivemap_pars_fragment:np,encodings_fragment:rp,encodings_pars_fragment:sp,envmap_fragment:ap,envmap_common_pars_fragment:op,envmap_pars_fragment:cp,envmap_pars_vertex:lp,envmap_physical_pars_fragment:bp,envmap_vertex:up,fog_vertex:fp,fog_pars_vertex:hp,fog_fragment:dp,fog_pars_fragment:pp,gradientmap_pars_fragment:mp,lightmap_fragment:gp,lightmap_pars_fragment:vp,lights_lambert_fragment:_p,lights_lambert_pars_fragment:xp,lights_pars_begin:yp,lights_toon_fragment:Mp,lights_toon_pars_fragment:Sp,lights_phong_fragment:Ep,lights_phong_pars_fragment:Tp,lights_physical_fragment:wp,lights_physical_pars_fragment:Ap,lights_fragment_begin:Cp,lights_fragment_maps:Rp,lights_fragment_end:Lp,logdepthbuf_fragment:Dp,logdepthbuf_pars_fragment:Pp,logdepthbuf_pars_vertex:Ip,logdepthbuf_vertex:Np,map_fragment:Fp,map_pars_fragment:Up,map_particle_fragment:Op,map_particle_pars_fragment:Bp,metalnessmap_fragment:zp,metalnessmap_pars_fragment:kp,morphcolor_vertex:Gp,morphnormal_vertex:Hp,morphtarget_pars_vertex:Vp,morphtarget_vertex:Wp,normal_fragment_begin:qp,normal_fragment_maps:Xp,normal_pars_fragment:jp,normal_pars_vertex:$p,normal_vertex:Yp,normalmap_pars_fragment:Zp,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:Jp,clearcoat_pars_fragment:Qp,iridescence_pars_fragment:em,output_fragment:tm,packing:im,premultiplied_alpha_fragment:nm,project_vertex:rm,dithering_fragment:sm,dithering_pars_fragment:am,roughnessmap_fragment:om,roughnessmap_pars_fragment:cm,shadowmap_pars_fragment:lm,shadowmap_pars_vertex:um,shadowmap_vertex:fm,shadowmask_pars_fragment:hm,skinbase_vertex:dm,skinning_pars_vertex:pm,skinning_vertex:mm,skinnormal_vertex:gm,specularmap_fragment:vm,specularmap_pars_fragment:_m,tonemapping_fragment:xm,tonemapping_pars_fragment:ym,transmission_fragment:bm,transmission_pars_fragment:Mm,uv_pars_fragment:Sm,uv_pars_vertex:Em,uv_vertex:Tm,uv2_pars_fragment:wm,uv2_pars_vertex:Am,uv2_vertex:Cm,worldpos_vertex:Rm,background_vert:Lm,background_frag:Dm,backgroundCube_vert:Pm,backgroundCube_frag:Im,cube_vert:Nm,cube_frag:Fm,depth_vert:Um,depth_frag:Om,distanceRGBA_vert:Bm,distanceRGBA_frag:zm,equirect_vert:km,equirect_frag:Gm,linedashed_vert:Hm,linedashed_frag:Vm,meshbasic_vert:Wm,meshbasic_frag:qm,meshlambert_vert:Xm,meshlambert_frag:jm,meshmatcap_vert:$m,meshmatcap_frag:Ym,meshnormal_vert:Zm,meshnormal_frag:Km,meshphong_vert:Jm,meshphong_frag:Qm,meshphysical_vert:eg,meshphysical_frag:tg,meshtoon_vert:ig,meshtoon_frag:ng,points_vert:rg,points_frag:sg,shadow_vert:ag,shadow_frag:og,sprite_vert:cg,sprite_frag:lg},Te={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ni},uv2Transform:{value:new ni},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ni}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ni}}},ki={basic:{uniforms:ti([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:ti([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Et(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:ti([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:ti([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:ti([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Et(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:ti([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:ti([Te.points,Te.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:ti([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:ti([Te.common,Te.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:ti([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:ti([Te.sprite,Te.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new ni},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:ti([Te.common,Te.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:ti([Te.lights,Te.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};ki.physical={uniforms:ti([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new xt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const ws={r:0,b:0,g:0};function ug(n,e,t,i,r,a,c){const l=new Et(0);let f=a===!0?0:1,d,p,_=null,g=0,M=null;function S(x,T){let P=!1,A=T.isScene===!0?T.background:null;A&&A.isTexture&&(A=(T.backgroundBlurriness>0?t:e).get(A));const L=n.xr,F=L.getSession&&L.getSession();F&&F.environmentBlendMode==="additive"&&(A=null),A===null?v(l,f):A&&A.isColor&&(v(A,1),P=!0),(n.autoClear||P)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),A&&(A.isCubeTexture||A.mapping===Gs)?(p===void 0&&(p=new tn(new xr(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:vr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(u,q,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=A,p.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,p.material.toneMapped=A.encoding!==wt,(_!==A||g!==A.version||M!==n.toneMapping)&&(p.material.needsUpdate=!0,_=A,g=A.version,M=n.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null)):A&&A.isTexture&&(d===void 0&&(d=new tn(new Mo(2,2),new Vn({name:"BackgroundMaterial",uniforms:vr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=A,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.toneMapped=A.encoding!==wt,A.matrixAutoUpdate===!0&&A.updateMatrix(),d.material.uniforms.uvTransform.value.copy(A.matrix),(_!==A||g!==A.version||M!==n.toneMapping)&&(d.material.needsUpdate=!0,_=A,g=A.version,M=n.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null))}function v(x,T){x.getRGB(ws,cu(n)),i.buffers.color.setClear(ws.r,ws.g,ws.b,T,c)}return{getClearColor:function(){return l},setClearColor:function(x,T=1){l.set(x),f=T,v(l,f)},getClearAlpha:function(){return f},setClearAlpha:function(x){f=x,v(l,f)},render:S}}function fg(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),c=i.isWebGL2||a!==null,l={},f=x(null);let d=f,p=!1;function _(j,oe,ve,xe,ce){let ye=!1;if(c){const ge=v(xe,ve,oe);d!==ge&&(d=ge,M(d.object)),ye=T(j,xe,ve,ce),ye&&P(j,xe,ve,ce)}else{const ge=oe.wireframe===!0;(d.geometry!==xe.id||d.program!==ve.id||d.wireframe!==ge)&&(d.geometry=xe.id,d.program=ve.id,d.wireframe=ge,ye=!0)}ce!==null&&t.update(ce,n.ELEMENT_ARRAY_BUFFER),(ye||p)&&(p=!1,R(j,oe,ve,xe),ce!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ce).buffer))}function g(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function M(j){return i.isWebGL2?n.bindVertexArray(j):a.bindVertexArrayOES(j)}function S(j){return i.isWebGL2?n.deleteVertexArray(j):a.deleteVertexArrayOES(j)}function v(j,oe,ve){const xe=ve.wireframe===!0;let ce=l[j.id];ce===void 0&&(ce={},l[j.id]=ce);let ye=ce[oe.id];ye===void 0&&(ye={},ce[oe.id]=ye);let ge=ye[xe];return ge===void 0&&(ge=x(g()),ye[xe]=ge),ge}function x(j){const oe=[],ve=[],xe=[];for(let ce=0;ce<r;ce++)oe[ce]=0,ve[ce]=0,xe[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:oe,enabledAttributes:ve,attributeDivisors:xe,object:j,attributes:{},index:null}}function T(j,oe,ve,xe){const ce=d.attributes,ye=oe.attributes;let ge=0;const Ie=ve.getAttributes();for(const Q in Ie)if(Ie[Q].location>=0){const Se=ce[Q];let z=ye[Q];if(z===void 0&&(Q==="instanceMatrix"&&j.instanceMatrix&&(z=j.instanceMatrix),Q==="instanceColor"&&j.instanceColor&&(z=j.instanceColor)),Se===void 0||Se.attribute!==z||z&&Se.data!==z.data)return!0;ge++}return d.attributesNum!==ge||d.index!==xe}function P(j,oe,ve,xe){const ce={},ye=oe.attributes;let ge=0;const Ie=ve.getAttributes();for(const Q in Ie)if(Ie[Q].location>=0){let Se=ye[Q];Se===void 0&&(Q==="instanceMatrix"&&j.instanceMatrix&&(Se=j.instanceMatrix),Q==="instanceColor"&&j.instanceColor&&(Se=j.instanceColor));const z={};z.attribute=Se,Se&&Se.data&&(z.data=Se.data),ce[Q]=z,ge++}d.attributes=ce,d.attributesNum=ge,d.index=xe}function A(){const j=d.newAttributes;for(let oe=0,ve=j.length;oe<ve;oe++)j[oe]=0}function L(j){F(j,0)}function F(j,oe){const ve=d.newAttributes,xe=d.enabledAttributes,ce=d.attributeDivisors;ve[j]=1,xe[j]===0&&(n.enableVertexAttribArray(j),xe[j]=1),ce[j]!==oe&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,oe),ce[j]=oe)}function u(){const j=d.newAttributes,oe=d.enabledAttributes;for(let ve=0,xe=oe.length;ve<xe;ve++)oe[ve]!==j[ve]&&(n.disableVertexAttribArray(ve),oe[ve]=0)}function q(j,oe,ve,xe,ce,ye){i.isWebGL2===!0&&(ve===n.INT||ve===n.UNSIGNED_INT)?n.vertexAttribIPointer(j,oe,ve,ce,ye):n.vertexAttribPointer(j,oe,ve,xe,ce,ye)}function R(j,oe,ve,xe){if(i.isWebGL2===!1&&(j.isInstancedMesh||xe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const ce=xe.attributes,ye=ve.getAttributes(),ge=oe.defaultAttributeValues;for(const Ie in ye){const Q=ye[Ie];if(Q.location>=0){let me=ce[Ie];if(me===void 0&&(Ie==="instanceMatrix"&&j.instanceMatrix&&(me=j.instanceMatrix),Ie==="instanceColor"&&j.instanceColor&&(me=j.instanceColor)),me!==void 0){const Se=me.normalized,z=me.itemSize,Ue=t.get(me);if(Ue===void 0)continue;const Fe=Ue.buffer,Oe=Ue.type,Re=Ue.bytesPerElement;if(me.isInterleavedBufferAttribute){const Ze=me.data,st=Ze.stride,ct=me.offset;if(Ze.isInstancedInterleavedBuffer){for(let it=0;it<Q.locationSize;it++)F(Q.location+it,Ze.meshPerAttribute);j.isInstancedMesh!==!0&&xe._maxInstanceCount===void 0&&(xe._maxInstanceCount=Ze.meshPerAttribute*Ze.count)}else for(let it=0;it<Q.locationSize;it++)L(Q.location+it);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let it=0;it<Q.locationSize;it++)q(Q.location+it,z/Q.locationSize,Oe,Se,st*Re,(ct+z/Q.locationSize*it)*Re)}else{if(me.isInstancedBufferAttribute){for(let Ze=0;Ze<Q.locationSize;Ze++)F(Q.location+Ze,me.meshPerAttribute);j.isInstancedMesh!==!0&&xe._maxInstanceCount===void 0&&(xe._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ze=0;Ze<Q.locationSize;Ze++)L(Q.location+Ze);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let Ze=0;Ze<Q.locationSize;Ze++)q(Q.location+Ze,z/Q.locationSize,Oe,Se,z*Re,z/Q.locationSize*Ze*Re)}}else if(ge!==void 0){const Se=ge[Ie];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(Q.location,Se);break;case 3:n.vertexAttrib3fv(Q.location,Se);break;case 4:n.vertexAttrib4fv(Q.location,Se);break;default:n.vertexAttrib1fv(Q.location,Se)}}}}u()}function O(){ue();for(const j in l){const oe=l[j];for(const ve in oe){const xe=oe[ve];for(const ce in xe)S(xe[ce].object),delete xe[ce];delete oe[ve]}delete l[j]}}function W(j){if(l[j.id]===void 0)return;const oe=l[j.id];for(const ve in oe){const xe=oe[ve];for(const ce in xe)S(xe[ce].object),delete xe[ce];delete oe[ve]}delete l[j.id]}function he(j){for(const oe in l){const ve=l[oe];if(ve[j.id]===void 0)continue;const xe=ve[j.id];for(const ce in xe)S(xe[ce].object),delete xe[ce];delete ve[j.id]}}function ue(){J(),p=!0,d!==f&&(d=f,M(d.object))}function J(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:_,reset:ue,resetDefaultState:J,dispose:O,releaseStatesOfGeometry:W,releaseStatesOfProgram:he,initAttributes:A,enableAttribute:L,disableUnusedAttributes:u}}function hg(n,e,t,i){const r=i.isWebGL2;let a;function c(d){a=d}function l(d,p){n.drawArrays(a,d,p),t.update(p,a,1)}function f(d,p,_){if(_===0)return;let g,M;if(r)g=n,M="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[M](a,d,p,_),t.update(p,a,_)}this.setMode=c,this.render=l,this.renderInstances=f}function dg(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(q){if(q==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";q="mediump"}return q==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let l=t.precision!==void 0?t.precision:"highp";const f=a(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const d=c||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,_=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),P=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,L=c||e.has("OES_texture_float"),F=A&&L,u=c?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:d,getMaxAnisotropy:r,getMaxPrecision:a,precision:l,logarithmicDepthBuffer:p,maxTextures:_,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:x,maxVaryings:T,maxFragmentUniforms:P,vertexTextures:A,floatFragmentTextures:L,floatVertexTextures:F,maxSamples:u}}function pg(n){const e=this;let t=null,i=0,r=!1,a=!1;const c=new Ln,l=new ni,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const M=_.length!==0||g||i!==0||r;return r=g,i=_.length,M},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,g){t=p(_,g,0)},this.setState=function(_,g,M){const S=_.clippingPlanes,v=_.clipIntersection,x=_.clipShadows,T=n.get(_);if(!r||S===null||S.length===0||a&&!x)a?p(null):d();else{const P=a?0:i,A=P*4;let L=T.clippingState||null;f.value=L,L=p(S,g,A,M);for(let F=0;F!==A;++F)L[F]=t[F];T.clippingState=L,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=P}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(_,g,M,S){const v=_!==null?_.length:0;let x=null;if(v!==0){if(x=f.value,S!==!0||x===null){const T=M+v*4,P=g.matrixWorldInverse;l.getNormalMatrix(P),(x===null||x.length<T)&&(x=new Float32Array(T));for(let A=0,L=M;A!==v;++A,L+=4)c.copy(_[A]).applyMatrix4(P,l),c.normal.toArray(x,L),x[L+3]=c.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function mg(n){let e=new WeakMap;function t(c,l){return l===Ya?c.mapping=pr:l===Za&&(c.mapping=mr),c}function i(c){if(c&&c.isTexture&&c.isRenderTargetTexture===!1){const l=c.mapping;if(l===Ya||l===Za)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const d=new Cd(f.height/2);return d.fromEquirectangularTexture(n,c),e.set(c,d),c.addEventListener("dispose",r),t(d.texture,c.mapping)}else return null}}return c}function r(c){const l=c.target;l.removeEventListener("dispose",r);const f=e.get(l);f!==void 0&&(e.delete(l),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class gg extends lu{constructor(e=-1,t=1,i=1,r=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,c=i+e,l=r+t,f=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,l-=p*this.view.offsetY,f=l-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,l,f,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ur=4,Hc=[.125,.215,.35,.446,.526,.582],Pn=20,Oa=new gg,Vc=new Et;let Ba=null;const Dn=(1+Math.sqrt(5))/2,rr=1/Dn,Wc=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,Dn,rr),new Z(0,Dn,-rr),new Z(rr,0,Dn),new Z(-rr,0,Dn),new Z(Dn,rr,0),new Z(-Dn,rr,0)];class qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ba=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ba),e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ba=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:$r,format:Fi,encoding:Gn,depthBuffer:!1},r=Xc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xc(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vg(a)),this._blurMaterial=_g(a,e,t)}return r}_compileMaterial(e){const t=new tn(this._lodPlanes[0],e);this._renderer.compile(t,Oa)}_sceneToCubeUV(e,t,i,r){const l=new _i(90,1,t,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,g=p.toneMapping;p.getClearColor(Vc),p.toneMapping=rn,p.autoClear=!1;const M=new su({name:"PMREM.Background",side:xi,depthWrite:!1,depthTest:!1}),S=new tn(new xr,M);let v=!1;const x=e.background;x?x.isColor&&(M.color.copy(x),e.background=null,v=!0):(M.color.copy(Vc),v=!0);for(let T=0;T<6;T++){const P=T%3;P===0?(l.up.set(0,f[T],0),l.lookAt(d[T],0,0)):P===1?(l.up.set(0,0,f[T]),l.lookAt(0,d[T],0)):(l.up.set(0,f[T],0),l.lookAt(0,0,d[T]));const A=this._cubeSize;As(r,P*A,T>2?A:0,A,A),p.setRenderTarget(r),v&&p.render(S,l),p.render(e,l)}S.geometry.dispose(),S.material.dispose(),p.toneMapping=g,p.autoClear=_,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===pr||e.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$c()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jc());const a=r?this._cubemapMaterial:this._equirectMaterial,c=new tn(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=e;const f=this._cubeSize;As(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,Oa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=Wc[(r-1)%Wc.length];this._blur(e,r-1,r,a,c)}t.autoClear=i}_blur(e,t,i,r,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,r,"latitudinal",a),this._halfBlur(c,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,c,l){const f=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new tn(this._lodPlanes[r],d),g=d.uniforms,M=this._sizeLods[i]-1,S=isFinite(a)?Math.PI/(2*M):2*Math.PI/(2*Pn-1),v=a/S,x=isFinite(a)?1+Math.floor(p*v):Pn;x>Pn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Pn}`);const T=[];let P=0;for(let q=0;q<Pn;++q){const R=q/v,O=Math.exp(-R*R/2);T.push(O),q===0?P+=O:q<x&&(P+=2*O)}for(let q=0;q<T.length;q++)T[q]=T[q]/P;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=T,g.latitudinal.value=c==="latitudinal",l&&(g.poleAxis.value=l);const{_lodMax:A}=this;g.dTheta.value=S,g.mipInt.value=A-i;const L=this._sizeLods[r],F=3*L*(r>A-ur?r-A+ur:0),u=4*(this._cubeSize-L);As(t,F,u,3*L,2*L),f.setRenderTarget(t),f.render(_,Oa)}}function vg(n){const e=[],t=[],i=[];let r=n;const a=n-ur+1+Hc.length;for(let c=0;c<a;c++){const l=Math.pow(2,r);t.push(l);let f=1/l;c>n-ur?f=Hc[c-n+ur-1]:c===0&&(f=0),i.push(f);const d=1/(l-2),p=-d,_=1+d,g=[p,p,_,p,_,_,p,p,_,_,p,_],M=6,S=6,v=3,x=2,T=1,P=new Float32Array(v*S*M),A=new Float32Array(x*S*M),L=new Float32Array(T*S*M);for(let u=0;u<M;u++){const q=u%3*2/3-1,R=u>2?0:-1,O=[q,R,0,q+2/3,R,0,q+2/3,R+1,0,q,R,0,q+2/3,R+1,0,q,R+1,0];P.set(O,v*S*u),A.set(g,x*S*u);const W=[u,u,u,u,u,u];L.set(W,T*S*u)}const F=new Wn;F.setAttribute("position",new Wi(P,v)),F.setAttribute("uv",new Wi(A,x)),F.setAttribute("faceIndex",new Wi(L,T)),e.push(F),r>ur&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xc(n,e,t){const i=new Hn(n,e,t);return i.texture.mapping=Gs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function As(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function _g(n,e,t){const i=new Float32Array(Pn),r=new Z(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:So(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function jc(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:So(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function $c(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function So(){return`

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
	`}function xg(n){let e=new WeakMap,t=null;function i(l){if(l&&l.isTexture){const f=l.mapping,d=f===Ya||f===Za,p=f===pr||f===mr;if(d||p)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let _=e.get(l);return t===null&&(t=new qc(n)),_=d?t.fromEquirectangular(l,_):t.fromCubemap(l,_),e.set(l,_),_.texture}else{if(e.has(l))return e.get(l).texture;{const _=l.image;if(d&&_&&_.height>0||p&&_&&r(_)){t===null&&(t=new qc(n));const g=d?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,g),l.addEventListener("dispose",a),g.texture}else return null}}}return l}function r(l){let f=0;const d=6;for(let p=0;p<d;p++)l[p]!==void 0&&f++;return f===d}function a(l){const f=l.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function yg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bg(n,e,t,i){const r={},a=new WeakMap;function c(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const S in g.attributes)e.remove(g.attributes[S]);g.removeEventListener("dispose",c),delete r[g.id];const M=a.get(g);M&&(e.remove(M),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(_,g){return r[g.id]===!0||(g.addEventListener("dispose",c),r[g.id]=!0,t.memory.geometries++),g}function f(_){const g=_.attributes;for(const S in g)e.update(g[S],n.ARRAY_BUFFER);const M=_.morphAttributes;for(const S in M){const v=M[S];for(let x=0,T=v.length;x<T;x++)e.update(v[x],n.ARRAY_BUFFER)}}function d(_){const g=[],M=_.index,S=_.attributes.position;let v=0;if(M!==null){const P=M.array;v=M.version;for(let A=0,L=P.length;A<L;A+=3){const F=P[A+0],u=P[A+1],q=P[A+2];g.push(F,u,u,q,q,F)}}else{const P=S.array;v=S.version;for(let A=0,L=P.length/3-1;A<L;A+=3){const F=A+0,u=A+1,q=A+2;g.push(F,u,u,q,q,F)}}const x=new(Ql(g)?ou:au)(g,1);x.version=v;const T=a.get(_);T&&e.remove(T),a.set(_,x)}function p(_){const g=a.get(_);if(g){const M=_.index;M!==null&&g.version<M.version&&d(_)}else d(_);return a.get(_)}return{get:l,update:f,getWireframeAttribute:p}}function Mg(n,e,t,i){const r=i.isWebGL2;let a;function c(g){a=g}let l,f;function d(g){l=g.type,f=g.bytesPerElement}function p(g,M){n.drawElements(a,M,l,g*f),t.update(M,a,1)}function _(g,M,S){if(S===0)return;let v,x;if(r)v=n,x="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](a,M,l,g*f,S),t.update(M,a,S)}this.setMode=c,this.setIndex=d,this.render=p,this.renderInstances=_}function Sg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,l){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=l*(a/3);break;case n.LINES:t.lines+=l*(a/2);break;case n.LINE_STRIP:t.lines+=l*(a-1);break;case n.LINE_LOOP:t.lines+=l*a;break;case n.POINTS:t.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Eg(n,e){return n[0]-e[0]}function Tg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function wg(n,e,t){const i={},r=new Float32Array(8),a=new WeakMap,c=new Rt,l=[];for(let d=0;d<8;d++)l[d]=[d,0];function f(d,p,_){const g=d.morphTargetInfluences;if(e.isWebGL2===!0){const S=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=S!==void 0?S.length:0;let x=a.get(p);if(x===void 0||x.count!==v){let oe=function(){J.dispose(),a.delete(p),p.removeEventListener("dispose",oe)};var M=oe;x!==void 0&&x.texture.dispose();const A=p.morphAttributes.position!==void 0,L=p.morphAttributes.normal!==void 0,F=p.morphAttributes.color!==void 0,u=p.morphAttributes.position||[],q=p.morphAttributes.normal||[],R=p.morphAttributes.color||[];let O=0;A===!0&&(O=1),L===!0&&(O=2),F===!0&&(O=3);let W=p.attributes.position.count*O,he=1;W>e.maxTextureSize&&(he=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const ue=new Float32Array(W*he*4*v),J=new iu(ue,W,he,v);J.type=On,J.needsUpdate=!0;const j=O*4;for(let ve=0;ve<v;ve++){const xe=u[ve],ce=q[ve],ye=R[ve],ge=W*he*4*ve;for(let Ie=0;Ie<xe.count;Ie++){const Q=Ie*j;A===!0&&(c.fromBufferAttribute(xe,Ie),ue[ge+Q+0]=c.x,ue[ge+Q+1]=c.y,ue[ge+Q+2]=c.z,ue[ge+Q+3]=0),L===!0&&(c.fromBufferAttribute(ce,Ie),ue[ge+Q+4]=c.x,ue[ge+Q+5]=c.y,ue[ge+Q+6]=c.z,ue[ge+Q+7]=0),F===!0&&(c.fromBufferAttribute(ye,Ie),ue[ge+Q+8]=c.x,ue[ge+Q+9]=c.y,ue[ge+Q+10]=c.z,ue[ge+Q+11]=ye.itemSize===4?c.w:1)}}x={count:v,texture:J,size:new xt(W,he)},a.set(p,x),p.addEventListener("dispose",oe)}let T=0;for(let A=0;A<g.length;A++)T+=g[A];const P=p.morphTargetsRelative?1:1-T;_.getUniforms().setValue(n,"morphTargetBaseInfluence",P),_.getUniforms().setValue(n,"morphTargetInfluences",g),_.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),_.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{const S=g===void 0?0:g.length;let v=i[p.id];if(v===void 0||v.length!==S){v=[];for(let L=0;L<S;L++)v[L]=[L,0];i[p.id]=v}for(let L=0;L<S;L++){const F=v[L];F[0]=L,F[1]=g[L]}v.sort(Tg);for(let L=0;L<8;L++)L<S&&v[L][1]?(l[L][0]=v[L][0],l[L][1]=v[L][1]):(l[L][0]=Number.MAX_SAFE_INTEGER,l[L][1]=0);l.sort(Eg);const x=p.morphAttributes.position,T=p.morphAttributes.normal;let P=0;for(let L=0;L<8;L++){const F=l[L],u=F[0],q=F[1];u!==Number.MAX_SAFE_INTEGER&&q?(x&&p.getAttribute("morphTarget"+L)!==x[u]&&p.setAttribute("morphTarget"+L,x[u]),T&&p.getAttribute("morphNormal"+L)!==T[u]&&p.setAttribute("morphNormal"+L,T[u]),r[L]=q,P+=q):(x&&p.hasAttribute("morphTarget"+L)===!0&&p.deleteAttribute("morphTarget"+L),T&&p.hasAttribute("morphNormal"+L)===!0&&p.deleteAttribute("morphNormal"+L),r[L]=0)}const A=p.morphTargetsRelative?1:1-P;_.getUniforms().setValue(n,"morphTargetBaseInfluence",A),_.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:f}}function Ag(n,e,t,i){let r=new WeakMap;function a(f){const d=i.render.frame,p=f.geometry,_=e.get(f,p);return r.get(_)!==d&&(e.update(_),r.set(_,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",l)===!1&&f.addEventListener("dispose",l),t.update(f.instanceMatrix,n.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,n.ARRAY_BUFFER)),_}function c(){r=new WeakMap}function l(f){const d=f.target;d.removeEventListener("dispose",l),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:c}}const hu=new yi,du=new iu,pu=new fd,mu=new uu,Yc=[],Zc=[],Kc=new Float32Array(16),Jc=new Float32Array(9),Qc=new Float32Array(4);function yr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Yc[r];if(a===void 0&&(a=new Float32Array(r),Yc[r]=a),e!==0){i.toArray(a,0);for(let c=1,l=0;c!==e;++c)l+=t,n[c].toArray(a,l)}return a}function Wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Vs(n,e){let t=Zc[e];t===void 0&&(t=new Int32Array(e),Zc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Cg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function Lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function Dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function Pg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Wt(t,i))return;Qc.set(i),n.uniformMatrix2fv(this.addr,!1,Qc),qt(t,i)}}function Ig(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Wt(t,i))return;Jc.set(i),n.uniformMatrix3fv(this.addr,!1,Jc),qt(t,i)}}function Ng(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Wt(t,i))return;Kc.set(i),n.uniformMatrix4fv(this.addr,!1,Kc),qt(t,i)}}function Fg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function Og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function Bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function zg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function Gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function Hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function Vg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||hu,r)}function Wg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||pu,r)}function qg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||mu,r)}function Xg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||du,r)}function jg(n){switch(n){case 5126:return Cg;case 35664:return Rg;case 35665:return Lg;case 35666:return Dg;case 35674:return Pg;case 35675:return Ig;case 35676:return Ng;case 5124:case 35670:return Fg;case 35667:case 35671:return Ug;case 35668:case 35672:return Og;case 35669:case 35673:return Bg;case 5125:return zg;case 36294:return kg;case 36295:return Gg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Xg}}function $g(n,e){n.uniform1fv(this.addr,e)}function Yg(n,e){const t=yr(e,this.size,2);n.uniform2fv(this.addr,t)}function Zg(n,e){const t=yr(e,this.size,3);n.uniform3fv(this.addr,t)}function Kg(n,e){const t=yr(e,this.size,4);n.uniform4fv(this.addr,t)}function Jg(n,e){const t=yr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Qg(n,e){const t=yr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ev(n,e){const t=yr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function tv(n,e){n.uniform1iv(this.addr,e)}function iv(n,e){n.uniform2iv(this.addr,e)}function nv(n,e){n.uniform3iv(this.addr,e)}function rv(n,e){n.uniform4iv(this.addr,e)}function sv(n,e){n.uniform1uiv(this.addr,e)}function av(n,e){n.uniform2uiv(this.addr,e)}function ov(n,e){n.uniform3uiv(this.addr,e)}function cv(n,e){n.uniform4uiv(this.addr,e)}function lv(n,e,t){const i=this.cache,r=e.length,a=Vs(t,r);Wt(i,a)||(n.uniform1iv(this.addr,a),qt(i,a));for(let c=0;c!==r;++c)t.setTexture2D(e[c]||hu,a[c])}function uv(n,e,t){const i=this.cache,r=e.length,a=Vs(t,r);Wt(i,a)||(n.uniform1iv(this.addr,a),qt(i,a));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||pu,a[c])}function fv(n,e,t){const i=this.cache,r=e.length,a=Vs(t,r);Wt(i,a)||(n.uniform1iv(this.addr,a),qt(i,a));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||mu,a[c])}function hv(n,e,t){const i=this.cache,r=e.length,a=Vs(t,r);Wt(i,a)||(n.uniform1iv(this.addr,a),qt(i,a));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||du,a[c])}function dv(n){switch(n){case 5126:return $g;case 35664:return Yg;case 35665:return Zg;case 35666:return Kg;case 35674:return Jg;case 35675:return Qg;case 35676:return ev;case 5124:case 35670:return tv;case 35667:case 35671:return iv;case 35668:case 35672:return nv;case 35669:case 35673:return rv;case 5125:return sv;case 36294:return av;case 36295:return ov;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return hv}}class pv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=jg(t.type)}}class mv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=dv(t.type)}}class gv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,c=r.length;a!==c;++a){const l=r[a];l.setValue(e,t[l.id],i)}}}const za=/(\w+)(\])?(\[|\.)?/g;function el(n,e){n.seq.push(e),n.map[e.id]=e}function vv(n,e,t){const i=n.name,r=i.length;for(za.lastIndex=0;;){const a=za.exec(i),c=za.lastIndex;let l=a[1];const f=a[2]==="]",d=a[3];if(f&&(l=l|0),d===void 0||d==="["&&c+2===r){el(t,d===void 0?new pv(l,n,e):new mv(l,n,e));break}else{let _=t.map[l];_===void 0&&(_=new gv(l),el(t,_)),t=_}}}class Ds{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),c=e.getUniformLocation(t,a.name);vv(a,c,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,c=t.length;a!==c;++a){const l=t[a],f=i[l.id];f.needsUpdate!==!1&&l.setValue(e,f.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const c=e[r];c.id in t&&i.push(c)}return i}}function tl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let _v=0;function xv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=r;c<a;c++){const l=c+1;i.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return i.join(`
`)}function yv(n){switch(n){case Gn:return["Linear","( value )"];case wt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function il(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+xv(n.getShaderSource(e),c)}else return r}function bv(n,e){const t=yv(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Mv(n,e){let t;switch(e){case Dh:t="Linear";break;case Ph:t="Reinhard";break;case Ih:t="OptimizedCineon";break;case Nh:t="ACESFilmic";break;case Fh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Sv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vr).join(`
`)}function Ev(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Tv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),c=a.name;let l=1;a.type===n.FLOAT_MAT2&&(l=2),a.type===n.FLOAT_MAT3&&(l=3),a.type===n.FLOAT_MAT4&&(l=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:l}}return t}function Vr(n){return n!==""}function nl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function eo(n){return n.replace(wv,Av)}function Av(n,e){const t=ot[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return eo(t)}const Cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sl(n){return n.replace(Cv,Rv)}function Rv(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function al(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Lv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===lh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hr&&(e="SHADOWMAP_TYPE_VSM"),e}function Dv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case pr:case mr:e="ENVMAP_TYPE_CUBE";break;case Gs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case mr:e="ENVMAP_MODE_REFRACTION";break}return e}function Iv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xo:e="ENVMAP_BLENDING_MULTIPLY";break;case Rh:e="ENVMAP_BLENDING_MIX";break;case Lh:e="ENVMAP_BLENDING_ADD";break}return e}function Nv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Fv(n,e,t,i){const r=n.getContext(),a=t.defines;let c=t.vertexShader,l=t.fragmentShader;const f=Lv(t),d=Dv(t),p=Pv(t),_=Iv(t),g=Nv(t),M=t.isWebGL2?"":Sv(t),S=Ev(a),v=r.createProgram();let x,T,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[S].filter(Vr).join(`
`),x.length>0&&(x+=`
`),T=[M,S].filter(Vr).join(`
`),T.length>0&&(T+=`
`)):(x=[al(t),"#define SHADER_NAME "+t.shaderName,S,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),T=[M,al(t),"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rn?"#define TONE_MAPPING":"",t.toneMapping!==rn?ot.tonemapping_pars_fragment:"",t.toneMapping!==rn?Mv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.encodings_pars_fragment,bv("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),c=eo(c),c=nl(c,t),c=rl(c,t),l=eo(l),l=nl(l,t),l=rl(l,t),c=sl(c),l=sl(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,T=["#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const A=P+x+c,L=P+T+l,F=tl(r,r.VERTEX_SHADER,A),u=tl(r,r.FRAGMENT_SHADER,L);if(r.attachShader(v,F),r.attachShader(v,u),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),n.debug.checkShaderErrors){const O=r.getProgramInfoLog(v).trim(),W=r.getShaderInfoLog(F).trim(),he=r.getShaderInfoLog(u).trim();let ue=!0,J=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1){ue=!1;const j=il(r,F,"vertex"),oe=il(r,u,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+O+`
`+j+`
`+oe)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(W===""||he==="")&&(J=!1);J&&(this.diagnostics={runnable:ue,programLog:O,vertexShader:{log:W,prefix:x},fragmentShader:{log:he,prefix:T}})}r.deleteShader(F),r.deleteShader(u);let q;this.getUniforms=function(){return q===void 0&&(q=new Ds(r,v)),q};let R;return this.getAttributes=function(){return R===void 0&&(R=Tv(r,v)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=_v++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=F,this.fragmentShader=u,this}let Uv=0;class Ov{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Bv(e),t.set(e,i)),i}}class Bv{constructor(e){this.id=Uv++,this.code=e,this.usedTimes=0}}function zv(n,e,t,i,r,a,c){const l=new nu,f=new Ov,d=[],p=r.isWebGL2,_=r.logarithmicDepthBuffer,g=r.vertexTextures;let M=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(R,O,W,he,ue){const J=he.fog,j=ue.geometry,oe=R.isMeshStandardMaterial?he.environment:null,ve=(R.isMeshStandardMaterial?t:e).get(R.envMap||oe),xe=ve&&ve.mapping===Gs?ve.image.height:null,ce=S[R.type];R.precision!==null&&(M=r.getMaxPrecision(R.precision),M!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const ye=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ge=ye!==void 0?ye.length:0;let Ie=0;j.morphAttributes.position!==void 0&&(Ie=1),j.morphAttributes.normal!==void 0&&(Ie=2),j.morphAttributes.color!==void 0&&(Ie=3);let Q,me,Se,z;if(ce){const st=ki[ce];Q=st.vertexShader,me=st.fragmentShader}else Q=R.vertexShader,me=R.fragmentShader,f.update(R),Se=f.getVertexShaderID(R),z=f.getFragmentShaderID(R);const Ue=n.getRenderTarget(),Fe=R.alphaTest>0,Oe=R.clearcoat>0,Re=R.iridescence>0;return{isWebGL2:p,shaderID:ce,shaderName:R.type,vertexShader:Q,fragmentShader:me,defines:R.defines,customVertexShaderID:Se,customFragmentShaderID:z,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,instancing:ue.isInstancedMesh===!0,instancingColor:ue.isInstancedMesh===!0&&ue.instanceColor!==null,supportsVertexTextures:g,outputEncoding:Ue===null?n.outputEncoding:Ue.isXRRenderTarget===!0?Ue.texture.encoding:Gn,map:!!R.map,matcap:!!R.matcap,envMap:!!ve,envMapMode:ve&&ve.mapping,envMapCubeUVHeight:xe,lightMap:!!R.lightMap,aoMap:!!R.aoMap,emissiveMap:!!R.emissiveMap,bumpMap:!!R.bumpMap,normalMap:!!R.normalMap,objectSpaceNormalMap:R.normalMapType===ed,tangentSpaceNormalMap:R.normalMapType===Kl,decodeVideoTexture:!!R.map&&R.map.isVideoTexture===!0&&R.map.encoding===wt,clearcoat:Oe,clearcoatMap:Oe&&!!R.clearcoatMap,clearcoatRoughnessMap:Oe&&!!R.clearcoatRoughnessMap,clearcoatNormalMap:Oe&&!!R.clearcoatNormalMap,iridescence:Re,iridescenceMap:Re&&!!R.iridescenceMap,iridescenceThicknessMap:Re&&!!R.iridescenceThicknessMap,displacementMap:!!R.displacementMap,roughnessMap:!!R.roughnessMap,metalnessMap:!!R.metalnessMap,specularMap:!!R.specularMap,specularIntensityMap:!!R.specularIntensityMap,specularColorMap:!!R.specularColorMap,opaque:R.transparent===!1&&R.blending===fr,alphaMap:!!R.alphaMap,alphaTest:Fe,gradientMap:!!R.gradientMap,sheen:R.sheen>0,sheenColorMap:!!R.sheenColorMap,sheenRoughnessMap:!!R.sheenRoughnessMap,transmission:R.transmission>0,transmissionMap:!!R.transmissionMap,thicknessMap:!!R.thicknessMap,combine:R.combine,vertexTangents:!!R.normalMap&&!!j.attributes.tangent,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUvs:!!R.map||!!R.bumpMap||!!R.normalMap||!!R.specularMap||!!R.alphaMap||!!R.emissiveMap||!!R.roughnessMap||!!R.metalnessMap||!!R.clearcoatMap||!!R.clearcoatRoughnessMap||!!R.clearcoatNormalMap||!!R.iridescenceMap||!!R.iridescenceThicknessMap||!!R.displacementMap||!!R.transmissionMap||!!R.thicknessMap||!!R.specularIntensityMap||!!R.specularColorMap||!!R.sheenColorMap||!!R.sheenRoughnessMap,uvsVertexOnly:!(R.map||R.bumpMap||R.normalMap||R.specularMap||R.alphaMap||R.emissiveMap||R.roughnessMap||R.metalnessMap||R.clearcoatNormalMap||R.iridescenceMap||R.iridescenceThicknessMap||R.transmission>0||R.transmissionMap||R.thicknessMap||R.specularIntensityMap||R.specularColorMap||R.sheen>0||R.sheenColorMap||R.sheenRoughnessMap)&&!!R.displacementMap,fog:!!J,useFog:R.fog===!0,fogExp2:J&&J.isFogExp2,flatShading:!!R.flatShading,sizeAttenuation:R.sizeAttenuation,logarithmicDepthBuffer:_,skinning:ue.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ie,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:R.toneMapped?n.toneMapping:rn,useLegacyLights:n.useLegacyLights,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===pn,flipSided:R.side===xi,useDepthPacking:!!R.depthPacking,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:R.extensions&&R.extensions.derivatives,extensionFragDepth:R.extensions&&R.extensions.fragDepth,extensionDrawBuffers:R.extensions&&R.extensions.drawBuffers,extensionShaderTextureLOD:R.extensions&&R.extensions.shaderTextureLOD,rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),customProgramCacheKey:R.customProgramCacheKey()}}function x(R){const O=[];if(R.shaderID?O.push(R.shaderID):(O.push(R.customVertexShaderID),O.push(R.customFragmentShaderID)),R.defines!==void 0)for(const W in R.defines)O.push(W),O.push(R.defines[W]);return R.isRawShaderMaterial===!1&&(T(O,R),P(O,R),O.push(n.outputEncoding)),O.push(R.customProgramCacheKey),O.join()}function T(R,O){R.push(O.precision),R.push(O.outputEncoding),R.push(O.envMapMode),R.push(O.envMapCubeUVHeight),R.push(O.combine),R.push(O.vertexUvs),R.push(O.fogExp2),R.push(O.sizeAttenuation),R.push(O.morphTargetsCount),R.push(O.morphAttributeCount),R.push(O.numDirLights),R.push(O.numPointLights),R.push(O.numSpotLights),R.push(O.numSpotLightMaps),R.push(O.numHemiLights),R.push(O.numRectAreaLights),R.push(O.numDirLightShadows),R.push(O.numPointLightShadows),R.push(O.numSpotLightShadows),R.push(O.numSpotLightShadowsWithMaps),R.push(O.shadowMapType),R.push(O.toneMapping),R.push(O.numClippingPlanes),R.push(O.numClipIntersection),R.push(O.depthPacking)}function P(R,O){l.disableAll(),O.isWebGL2&&l.enable(0),O.supportsVertexTextures&&l.enable(1),O.instancing&&l.enable(2),O.instancingColor&&l.enable(3),O.map&&l.enable(4),O.matcap&&l.enable(5),O.envMap&&l.enable(6),O.lightMap&&l.enable(7),O.aoMap&&l.enable(8),O.emissiveMap&&l.enable(9),O.bumpMap&&l.enable(10),O.normalMap&&l.enable(11),O.objectSpaceNormalMap&&l.enable(12),O.tangentSpaceNormalMap&&l.enable(13),O.clearcoat&&l.enable(14),O.clearcoatMap&&l.enable(15),O.clearcoatRoughnessMap&&l.enable(16),O.clearcoatNormalMap&&l.enable(17),O.iridescence&&l.enable(18),O.iridescenceMap&&l.enable(19),O.iridescenceThicknessMap&&l.enable(20),O.displacementMap&&l.enable(21),O.specularMap&&l.enable(22),O.roughnessMap&&l.enable(23),O.metalnessMap&&l.enable(24),O.gradientMap&&l.enable(25),O.alphaMap&&l.enable(26),O.alphaTest&&l.enable(27),O.vertexColors&&l.enable(28),O.vertexAlphas&&l.enable(29),O.vertexUvs&&l.enable(30),O.vertexTangents&&l.enable(31),O.uvsVertexOnly&&l.enable(32),R.push(l.mask),l.disableAll(),O.fog&&l.enable(0),O.useFog&&l.enable(1),O.flatShading&&l.enable(2),O.logarithmicDepthBuffer&&l.enable(3),O.skinning&&l.enable(4),O.morphTargets&&l.enable(5),O.morphNormals&&l.enable(6),O.morphColors&&l.enable(7),O.premultipliedAlpha&&l.enable(8),O.shadowMapEnabled&&l.enable(9),O.useLegacyLights&&l.enable(10),O.doubleSided&&l.enable(11),O.flipSided&&l.enable(12),O.useDepthPacking&&l.enable(13),O.dithering&&l.enable(14),O.specularIntensityMap&&l.enable(15),O.specularColorMap&&l.enable(16),O.transmission&&l.enable(17),O.transmissionMap&&l.enable(18),O.thicknessMap&&l.enable(19),O.sheen&&l.enable(20),O.sheenColorMap&&l.enable(21),O.sheenRoughnessMap&&l.enable(22),O.decodeVideoTexture&&l.enable(23),O.opaque&&l.enable(24),R.push(l.mask)}function A(R){const O=S[R.type];let W;if(O){const he=ki[O];W=Ed.clone(he.uniforms)}else W=R.uniforms;return W}function L(R,O){let W;for(let he=0,ue=d.length;he<ue;he++){const J=d[he];if(J.cacheKey===O){W=J,++W.usedTimes;break}}return W===void 0&&(W=new Fv(n,O,R,a),d.push(W)),W}function F(R){if(--R.usedTimes===0){const O=d.indexOf(R);d[O]=d[d.length-1],d.pop(),R.destroy()}}function u(R){f.remove(R)}function q(){f.dispose()}return{getParameters:v,getProgramCacheKey:x,getUniforms:A,acquireProgram:L,releaseProgram:F,releaseShaderCache:u,programs:d,dispose:q}}function kv(){let n=new WeakMap;function e(a){let c=n.get(a);return c===void 0&&(c={},n.set(a,c)),c}function t(a){n.delete(a)}function i(a,c,l){n.get(a)[c]=l}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Gv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ol(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cl(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function c(_,g,M,S,v,x){let T=n[e];return T===void 0?(T={id:_.id,object:_,geometry:g,material:M,groupOrder:S,renderOrder:_.renderOrder,z:v,group:x},n[e]=T):(T.id=_.id,T.object=_,T.geometry=g,T.material=M,T.groupOrder=S,T.renderOrder=_.renderOrder,T.z=v,T.group=x),e++,T}function l(_,g,M,S,v,x){const T=c(_,g,M,S,v,x);M.transmission>0?i.push(T):M.transparent===!0?r.push(T):t.push(T)}function f(_,g,M,S,v,x){const T=c(_,g,M,S,v,x);M.transmission>0?i.unshift(T):M.transparent===!0?r.unshift(T):t.unshift(T)}function d(_,g){t.length>1&&t.sort(_||Gv),i.length>1&&i.sort(g||ol),r.length>1&&r.sort(g||ol)}function p(){for(let _=e,g=n.length;_<g;_++){const M=n[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:l,unshift:f,finish:p,sort:d}}function Hv(){let n=new WeakMap;function e(i,r){const a=n.get(i);let c;return a===void 0?(c=new cl,n.set(i,[c])):r>=a.length?(c=new cl,a.push(c)):c=a[r],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function Vv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new Et};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[e.id]=t,t}}}function Wv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let qv=0;function Xv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jv(n,e){const t=new Vv,i=Wv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let p=0;p<9;p++)r.probe.push(new Z);const a=new Z,c=new kt,l=new kt;function f(p,_){let g=0,M=0,S=0;for(let he=0;he<9;he++)r.probe[he].set(0,0,0);let v=0,x=0,T=0,P=0,A=0,L=0,F=0,u=0,q=0,R=0;p.sort(Xv);const O=_===!0?Math.PI:1;for(let he=0,ue=p.length;he<ue;he++){const J=p[he],j=J.color,oe=J.intensity,ve=J.distance,xe=J.shadow&&J.shadow.map?J.shadow.map.texture:null;if(J.isAmbientLight)g+=j.r*oe*O,M+=j.g*oe*O,S+=j.b*oe*O;else if(J.isLightProbe)for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(J.sh.coefficients[ce],oe);else if(J.isDirectionalLight){const ce=t.get(J);if(ce.color.copy(J.color).multiplyScalar(J.intensity*O),J.castShadow){const ye=J.shadow,ge=i.get(J);ge.shadowBias=ye.bias,ge.shadowNormalBias=ye.normalBias,ge.shadowRadius=ye.radius,ge.shadowMapSize=ye.mapSize,r.directionalShadow[v]=ge,r.directionalShadowMap[v]=xe,r.directionalShadowMatrix[v]=J.shadow.matrix,L++}r.directional[v]=ce,v++}else if(J.isSpotLight){const ce=t.get(J);ce.position.setFromMatrixPosition(J.matrixWorld),ce.color.copy(j).multiplyScalar(oe*O),ce.distance=ve,ce.coneCos=Math.cos(J.angle),ce.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),ce.decay=J.decay,r.spot[T]=ce;const ye=J.shadow;if(J.map&&(r.spotLightMap[q]=J.map,q++,ye.updateMatrices(J),J.castShadow&&R++),r.spotLightMatrix[T]=ye.matrix,J.castShadow){const ge=i.get(J);ge.shadowBias=ye.bias,ge.shadowNormalBias=ye.normalBias,ge.shadowRadius=ye.radius,ge.shadowMapSize=ye.mapSize,r.spotShadow[T]=ge,r.spotShadowMap[T]=xe,u++}T++}else if(J.isRectAreaLight){const ce=t.get(J);ce.color.copy(j).multiplyScalar(oe),ce.halfWidth.set(J.width*.5,0,0),ce.halfHeight.set(0,J.height*.5,0),r.rectArea[P]=ce,P++}else if(J.isPointLight){const ce=t.get(J);if(ce.color.copy(J.color).multiplyScalar(J.intensity*O),ce.distance=J.distance,ce.decay=J.decay,J.castShadow){const ye=J.shadow,ge=i.get(J);ge.shadowBias=ye.bias,ge.shadowNormalBias=ye.normalBias,ge.shadowRadius=ye.radius,ge.shadowMapSize=ye.mapSize,ge.shadowCameraNear=ye.camera.near,ge.shadowCameraFar=ye.camera.far,r.pointShadow[x]=ge,r.pointShadowMap[x]=xe,r.pointShadowMatrix[x]=J.shadow.matrix,F++}r.point[x]=ce,x++}else if(J.isHemisphereLight){const ce=t.get(J);ce.skyColor.copy(J.color).multiplyScalar(oe*O),ce.groundColor.copy(J.groundColor).multiplyScalar(oe*O),r.hemi[A]=ce,A++}}P>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=g,r.ambient[1]=M,r.ambient[2]=S;const W=r.hash;(W.directionalLength!==v||W.pointLength!==x||W.spotLength!==T||W.rectAreaLength!==P||W.hemiLength!==A||W.numDirectionalShadows!==L||W.numPointShadows!==F||W.numSpotShadows!==u||W.numSpotMaps!==q)&&(r.directional.length=v,r.spot.length=T,r.rectArea.length=P,r.point.length=x,r.hemi.length=A,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=F,r.pointShadowMap.length=F,r.spotShadow.length=u,r.spotShadowMap.length=u,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=F,r.spotLightMatrix.length=u+q-R,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=R,W.directionalLength=v,W.pointLength=x,W.spotLength=T,W.rectAreaLength=P,W.hemiLength=A,W.numDirectionalShadows=L,W.numPointShadows=F,W.numSpotShadows=u,W.numSpotMaps=q,r.version=qv++)}function d(p,_){let g=0,M=0,S=0,v=0,x=0;const T=_.matrixWorldInverse;for(let P=0,A=p.length;P<A;P++){const L=p[P];if(L.isDirectionalLight){const F=r.directional[g];F.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(T),g++}else if(L.isSpotLight){const F=r.spot[S];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(T),F.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(T),S++}else if(L.isRectAreaLight){const F=r.rectArea[v];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(T),l.identity(),c.copy(L.matrixWorld),c.premultiply(T),l.extractRotation(c),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),F.halfWidth.applyMatrix4(l),F.halfHeight.applyMatrix4(l),v++}else if(L.isPointLight){const F=r.point[M];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(T),M++}else if(L.isHemisphereLight){const F=r.hemi[x];F.direction.setFromMatrixPosition(L.matrixWorld),F.direction.transformDirection(T),x++}}}return{setup:f,setupView:d,state:r}}function ll(n,e){const t=new jv(n,e),i=[],r=[];function a(){i.length=0,r.length=0}function c(_){i.push(_)}function l(_){r.push(_)}function f(_){t.setup(i,_)}function d(_){t.setupView(i,_)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:f,setupLightsView:d,pushLight:c,pushShadow:l}}function $v(n,e){let t=new WeakMap;function i(a,c=0){const l=t.get(a);let f;return l===void 0?(f=new ll(n,e),t.set(a,[f])):c>=l.length?(f=new ll(n,e),l.push(f)):f=l[c],f}function r(){t=new WeakMap}return{get:i,dispose:r}}class Yv extends Qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zv extends Qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Jv=`
uniform sampler2D shadow_pass;
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

}
`;function Qv(n,e,t){let i=new bo;const r=new xt,a=new xt,c=new Rt,l=new Yv({depthPacking:Qh}),f=new Zv,d={},p=t.maxTextureSize,_={[vn]:xi,[xi]:vn,[pn]:pn},g=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:Kv,fragmentShader:Jv}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const S=new Wn;S.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new tn(S,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl,this.render=function(L,F,u){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;const q=n.getRenderTarget(),R=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),W=n.state;W.setBlending(gn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);for(let he=0,ue=L.length;he<ue;he++){const J=L[he],j=J.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const oe=j.getFrameExtents();if(r.multiply(oe),a.copy(j.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/oe.x),r.x=a.x*oe.x,j.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/oe.y),r.y=a.y*oe.y,j.mapSize.y=a.y)),j.map===null){const xe=this.type!==Hr?{minFilter:ii,magFilter:ii}:{};j.map=new Hn(r.x,r.y,xe),j.map.texture.name=J.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const ve=j.getViewportCount();for(let xe=0;xe<ve;xe++){const ce=j.getViewport(xe);c.set(a.x*ce.x,a.y*ce.y,a.x*ce.z,a.y*ce.w),W.viewport(c),j.updateMatrices(J,xe),i=j.getFrustum(),A(F,u,j.camera,J,this.type)}j.isPointLightShadow!==!0&&this.type===Hr&&T(j,u),j.needsUpdate=!1}x.needsUpdate=!1,n.setRenderTarget(q,R,O)};function T(L,F){const u=e.update(v);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Hn(r.x,r.y)),g.uniforms.shadow_pass.value=L.map.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(F,null,u,g,v,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(F,null,u,M,v,null)}function P(L,F,u,q,R,O){let W=null;const he=u.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(he!==void 0)W=he;else if(W=u.isPointLight===!0?f:l,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ue=W.uuid,J=F.uuid;let j=d[ue];j===void 0&&(j={},d[ue]=j);let oe=j[J];oe===void 0&&(oe=W.clone(),j[J]=oe),W=oe}return W.visible=F.visible,W.wireframe=F.wireframe,O===Hr?W.side=F.shadowSide!==null?F.shadowSide:F.side:W.side=F.shadowSide!==null?F.shadowSide:_[F.side],W.alphaMap=F.alphaMap,W.alphaTest=F.alphaTest,W.map=F.map,W.clipShadows=F.clipShadows,W.clippingPlanes=F.clippingPlanes,W.clipIntersection=F.clipIntersection,W.displacementMap=F.displacementMap,W.displacementScale=F.displacementScale,W.displacementBias=F.displacementBias,W.wireframeLinewidth=F.wireframeLinewidth,W.linewidth=F.linewidth,u.isPointLight===!0&&W.isMeshDistanceMaterial===!0&&(W.referencePosition.setFromMatrixPosition(u.matrixWorld),W.nearDistance=q,W.farDistance=R),W}function A(L,F,u,q,R){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&R===Hr)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(u.matrixWorldInverse,L.matrixWorld);const he=e.update(L),ue=L.material;if(Array.isArray(ue)){const J=he.groups;for(let j=0,oe=J.length;j<oe;j++){const ve=J[j],xe=ue[ve.materialIndex];if(xe&&xe.visible){const ce=P(L,xe,q,u.near,u.far,R);n.renderBufferDirect(u,null,he,ce,L,ve)}}}else if(ue.visible){const J=P(L,ue,q,u.near,u.far,R);n.renderBufferDirect(u,null,he,J,L,null)}}const W=L.children;for(let he=0,ue=W.length;he<ue;he++)A(W[he],F,u,q,R)}}function e_(n,e,t){const i=t.isWebGL2;function r(){let G=!1;const re=new Rt;let _e=null;const Ae=new Rt(0,0,0,0);return{setMask:function(De){_e!==De&&!G&&(n.colorMask(De,De,De,De),_e=De)},setLocked:function(De){G=De},setClear:function(De,bt,Ut,Gt,Jt){Jt===!0&&(De*=Gt,bt*=Gt,Ut*=Gt),re.set(De,bt,Ut,Gt),Ae.equals(re)===!1&&(n.clearColor(De,bt,Ut,Gt),Ae.copy(re))},reset:function(){G=!1,_e=null,Ae.set(-1,0,0,0)}}}function a(){let G=!1,re=null,_e=null,Ae=null;return{setTest:function(De){De?Fe(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(De){re!==De&&!G&&(n.depthMask(De),re=De)},setFunc:function(De){if(_e!==De){switch(De){case Mh:n.depthFunc(n.NEVER);break;case Sh:n.depthFunc(n.ALWAYS);break;case Eh:n.depthFunc(n.LESS);break;case $a:n.depthFunc(n.LEQUAL);break;case Th:n.depthFunc(n.EQUAL);break;case wh:n.depthFunc(n.GEQUAL);break;case Ah:n.depthFunc(n.GREATER);break;case Ch:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=De}},setLocked:function(De){G=De},setClear:function(De){Ae!==De&&(n.clearDepth(De),Ae=De)},reset:function(){G=!1,re=null,_e=null,Ae=null}}}function c(){let G=!1,re=null,_e=null,Ae=null,De=null,bt=null,Ut=null,Gt=null,Jt=null;return{setTest:function(Lt){G||(Lt?Fe(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(Lt){re!==Lt&&!G&&(n.stencilMask(Lt),re=Lt)},setFunc:function(Lt,si,Mi){(_e!==Lt||Ae!==si||De!==Mi)&&(n.stencilFunc(Lt,si,Mi),_e=Lt,Ae=si,De=Mi)},setOp:function(Lt,si,Mi){(bt!==Lt||Ut!==si||Gt!==Mi)&&(n.stencilOp(Lt,si,Mi),bt=Lt,Ut=si,Gt=Mi)},setLocked:function(Lt){G=Lt},setClear:function(Lt){Jt!==Lt&&(n.clearStencil(Lt),Jt=Lt)},reset:function(){G=!1,re=null,_e=null,Ae=null,De=null,bt=null,Ut=null,Gt=null,Jt=null}}}const l=new r,f=new a,d=new c,p=new WeakMap,_=new WeakMap;let g={},M={},S=new WeakMap,v=[],x=null,T=!1,P=null,A=null,L=null,F=null,u=null,q=null,R=null,O=!1,W=null,he=null,ue=null,J=null,j=null;const oe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ve=!1,xe=0;const ce=n.getParameter(n.VERSION);ce.indexOf("WebGL")!==-1?(xe=parseFloat(/^WebGL (\d)/.exec(ce)[1]),ve=xe>=1):ce.indexOf("OpenGL ES")!==-1&&(xe=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),ve=xe>=2);let ye=null,ge={};const Ie=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),me=new Rt().fromArray(Ie),Se=new Rt().fromArray(Q);function z(G,re,_e){const Ae=new Uint8Array(4),De=n.createTexture();n.bindTexture(G,De),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let bt=0;bt<_e;bt++)n.texImage2D(re+bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return De}const Ue={};Ue[n.TEXTURE_2D]=z(n.TEXTURE_2D,n.TEXTURE_2D,1),Ue[n.TEXTURE_CUBE_MAP]=z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),l.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Fe(n.DEPTH_TEST),f.setFunc($a),Pe(!1),mt(Ko),Fe(n.CULL_FACE),Ft(gn);function Fe(G){g[G]!==!0&&(n.enable(G),g[G]=!0)}function Oe(G){g[G]!==!1&&(n.disable(G),g[G]=!1)}function Re(G,re){return M[G]!==re?(n.bindFramebuffer(G,re),M[G]=re,i&&(G===n.DRAW_FRAMEBUFFER&&(M[n.FRAMEBUFFER]=re),G===n.FRAMEBUFFER&&(M[n.DRAW_FRAMEBUFFER]=re)),!0):!1}function Ze(G,re){let _e=v,Ae=!1;if(G)if(_e=S.get(re),_e===void 0&&(_e=[],S.set(re,_e)),G.isWebGLMultipleRenderTargets){const De=G.texture;if(_e.length!==De.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let bt=0,Ut=De.length;bt<Ut;bt++)_e[bt]=n.COLOR_ATTACHMENT0+bt;_e.length=De.length,Ae=!0}}else _e[0]!==n.COLOR_ATTACHMENT0&&(_e[0]=n.COLOR_ATTACHMENT0,Ae=!0);else _e[0]!==n.BACK&&(_e[0]=n.BACK,Ae=!0);Ae&&(t.isWebGL2?n.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function st(G){return x!==G?(n.useProgram(G),x=G,!0):!1}const ct={[cr]:n.FUNC_ADD,[fh]:n.FUNC_SUBTRACT,[hh]:n.FUNC_REVERSE_SUBTRACT};if(i)ct[tc]=n.MIN,ct[ic]=n.MAX;else{const G=e.get("EXT_blend_minmax");G!==null&&(ct[tc]=G.MIN_EXT,ct[ic]=G.MAX_EXT)}const it={[dh]:n.ZERO,[ph]:n.ONE,[mh]:n.SRC_COLOR,[jl]:n.SRC_ALPHA,[bh]:n.SRC_ALPHA_SATURATE,[xh]:n.DST_COLOR,[vh]:n.DST_ALPHA,[gh]:n.ONE_MINUS_SRC_COLOR,[$l]:n.ONE_MINUS_SRC_ALPHA,[yh]:n.ONE_MINUS_DST_COLOR,[_h]:n.ONE_MINUS_DST_ALPHA};function Ft(G,re,_e,Ae,De,bt,Ut,Gt){if(G===gn){T===!0&&(Oe(n.BLEND),T=!1);return}if(T===!1&&(Fe(n.BLEND),T=!0),G!==uh){if(G!==P||Gt!==O){if((A!==cr||u!==cr)&&(n.blendEquation(n.FUNC_ADD),A=cr,u=cr),Gt)switch(G){case fr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jo:n.blendFunc(n.ONE,n.ONE);break;case Qo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ec:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Qo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ec:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}L=null,F=null,q=null,R=null,P=G,O=Gt}return}De=De||re,bt=bt||_e,Ut=Ut||Ae,(re!==A||De!==u)&&(n.blendEquationSeparate(ct[re],ct[De]),A=re,u=De),(_e!==L||Ae!==F||bt!==q||Ut!==R)&&(n.blendFuncSeparate(it[_e],it[Ae],it[bt],it[Ut]),L=_e,F=Ae,q=bt,R=Ut),P=G,O=!1}function jt(G,re){G.side===pn?Oe(n.CULL_FACE):Fe(n.CULL_FACE);let _e=G.side===xi;re&&(_e=!_e),Pe(_e),G.blending===fr&&G.transparent===!1?Ft(gn):Ft(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.premultipliedAlpha),f.setFunc(G.depthFunc),f.setTest(G.depthTest),f.setMask(G.depthWrite),l.setMask(G.colorWrite);const Ae=G.stencilWrite;d.setTest(Ae),Ae&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Tt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Fe(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(G){W!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),W=G)}function mt(G){G!==oh?(Fe(n.CULL_FACE),G!==he&&(G===Ko?n.cullFace(n.BACK):G===ch?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),he=G}function At(G){G!==ue&&(ve&&n.lineWidth(G),ue=G)}function Tt(G,re,_e){G?(Fe(n.POLYGON_OFFSET_FILL),(J!==re||j!==_e)&&(n.polygonOffset(re,_e),J=re,j=_e)):Oe(n.POLYGON_OFFSET_FILL)}function bi(G){G?Fe(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function ri(G){G===void 0&&(G=n.TEXTURE0+oe-1),ye!==G&&(n.activeTexture(G),ye=G)}function I(G,re,_e){_e===void 0&&(ye===null?_e=n.TEXTURE0+oe-1:_e=ye);let Ae=ge[_e];Ae===void 0&&(Ae={type:void 0,texture:void 0},ge[_e]=Ae),(Ae.type!==G||Ae.texture!==re)&&(ye!==_e&&(n.activeTexture(_e),ye=_e),n.bindTexture(G,re||Ue[G]),Ae.type=G,Ae.texture=re)}function C(){const G=ge[ye];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ce(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ke(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xe(G){me.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),me.copy(G))}function Ge(G){Se.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Se.copy(G))}function Qe(G,re){let _e=_.get(re);_e===void 0&&(_e=new WeakMap,_.set(re,_e));let Ae=_e.get(G);Ae===void 0&&(Ae=n.getUniformBlockIndex(re,G.name),_e.set(G,Ae))}function lt(G,re){const Ae=_.get(re).get(G);p.get(re)!==Ae&&(n.uniformBlockBinding(re,Ae,G.__bindingPointIndex),p.set(re,Ae))}function It(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),g={},ye=null,ge={},M={},S=new WeakMap,v=[],x=null,T=!1,P=null,A=null,L=null,F=null,u=null,q=null,R=null,O=!1,W=null,he=null,ue=null,J=null,j=null,me.set(0,0,n.canvas.width,n.canvas.height),Se.set(0,0,n.canvas.width,n.canvas.height),l.reset(),f.reset(),d.reset()}return{buffers:{color:l,depth:f,stencil:d},enable:Fe,disable:Oe,bindFramebuffer:Re,drawBuffers:Ze,useProgram:st,setBlending:Ft,setMaterial:jt,setFlipSided:Pe,setCullFace:mt,setLineWidth:At,setPolygonOffset:Tt,setScissorTest:bi,activeTexture:ri,bindTexture:I,unbindTexture:C,compressedTexImage2D:ne,compressedTexImage3D:be,texImage2D:Ne,texImage3D:qe,updateUBOMapping:Qe,uniformBlockBinding:lt,texStorage2D:fe,texStorage3D:Ke,texSubImage2D:Me,texSubImage3D:Ce,compressedTexSubImage2D:ke,compressedTexSubImage3D:Le,scissor:Xe,viewport:Ge,reset:It}}function t_(n,e,t,i,r,a,c){const l=r.isWebGL2,f=r.maxTextures,d=r.maxCubemapSize,p=r.maxTextureSize,_=r.maxSamples,g=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,M=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),S=new WeakMap;let v;const x=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(I,C){return T?new OffscreenCanvas(I,C):Fs("canvas")}function A(I,C,ne,be){let Me=1;if((I.width>be||I.height>be)&&(Me=be/Math.max(I.width,I.height)),Me<1||C===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const Ce=C?nd:Math.floor,ke=Ce(Me*I.width),Le=Ce(Me*I.height);v===void 0&&(v=P(ke,Le));const fe=ne?P(ke,Le):v;return fe.width=ke,fe.height=Le,fe.getContext("2d").drawImage(I,0,0,ke,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+ke+"x"+Le+")."),fe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function L(I){return Lc(I.width)&&Lc(I.height)}function F(I){return l?!1:I.wrapS!==Ni||I.wrapT!==Ni||I.minFilter!==ii&&I.minFilter!==Ai}function u(I,C){return I.generateMipmaps&&C&&I.minFilter!==ii&&I.minFilter!==Ai}function q(I){n.generateMipmap(I)}function R(I,C,ne,be,Me=!1){if(l===!1)return C;if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ce=C;return C===n.RED&&(ne===n.FLOAT&&(Ce=n.R32F),ne===n.HALF_FLOAT&&(Ce=n.R16F),ne===n.UNSIGNED_BYTE&&(Ce=n.R8)),C===n.RG&&(ne===n.FLOAT&&(Ce=n.RG32F),ne===n.HALF_FLOAT&&(Ce=n.RG16F),ne===n.UNSIGNED_BYTE&&(Ce=n.RG8)),C===n.RGBA&&(ne===n.FLOAT&&(Ce=n.RGBA32F),ne===n.HALF_FLOAT&&(Ce=n.RGBA16F),ne===n.UNSIGNED_BYTE&&(Ce=be===wt&&Me===!1?n.SRGB8_ALPHA8:n.RGBA8),ne===n.UNSIGNED_SHORT_4_4_4_4&&(Ce=n.RGBA4),ne===n.UNSIGNED_SHORT_5_5_5_1&&(Ce=n.RGB5_A1)),(Ce===n.R16F||Ce===n.R32F||Ce===n.RG16F||Ce===n.RG32F||Ce===n.RGBA16F||Ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Ce}function O(I,C,ne){return u(I,ne)===!0||I.isFramebufferTexture&&I.minFilter!==ii&&I.minFilter!==Ai?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function W(I){return I===ii||I===nc||I===la?n.NEAREST:n.LINEAR}function he(I){const C=I.target;C.removeEventListener("dispose",he),J(C),C.isVideoTexture&&S.delete(C)}function ue(I){const C=I.target;C.removeEventListener("dispose",ue),oe(C)}function J(I){const C=i.get(I);if(C.__webglInit===void 0)return;const ne=I.source,be=x.get(ne);if(be){const Me=be[C.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&j(I),Object.keys(be).length===0&&x.delete(ne)}i.remove(I)}function j(I){const C=i.get(I);n.deleteTexture(C.__webglTexture);const ne=I.source,be=x.get(ne);delete be[C.__cacheKey],c.memory.textures--}function oe(I){const C=I.texture,ne=i.get(I),be=i.get(C);if(be.__webglTexture!==void 0&&(n.deleteTexture(be.__webglTexture),c.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++)n.deleteFramebuffer(ne.__webglFramebuffer[Me]),ne.__webglDepthbuffer&&n.deleteRenderbuffer(ne.__webglDepthbuffer[Me]);else{if(n.deleteFramebuffer(ne.__webglFramebuffer),ne.__webglDepthbuffer&&n.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&n.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let Me=0;Me<ne.__webglColorRenderbuffer.length;Me++)ne.__webglColorRenderbuffer[Me]&&n.deleteRenderbuffer(ne.__webglColorRenderbuffer[Me]);ne.__webglDepthRenderbuffer&&n.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let Me=0,Ce=C.length;Me<Ce;Me++){const ke=i.get(C[Me]);ke.__webglTexture&&(n.deleteTexture(ke.__webglTexture),c.memory.textures--),i.remove(C[Me])}i.remove(C),i.remove(I)}let ve=0;function xe(){ve=0}function ce(){const I=ve;return I>=f&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+f),ve+=1,I}function ye(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.encoding),C.join()}function ge(I,C){const ne=i.get(I);if(I.isVideoTexture&&bi(I),I.isRenderTargetTexture===!1&&I.version>0&&ne.__version!==I.version){const be=I.image;if(be===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(ne,I,C);return}}t.bindTexture(n.TEXTURE_2D,ne.__webglTexture,n.TEXTURE0+C)}function Ie(I,C){const ne=i.get(I);if(I.version>0&&ne.__version!==I.version){Oe(ne,I,C);return}t.bindTexture(n.TEXTURE_2D_ARRAY,ne.__webglTexture,n.TEXTURE0+C)}function Q(I,C){const ne=i.get(I);if(I.version>0&&ne.__version!==I.version){Oe(ne,I,C);return}t.bindTexture(n.TEXTURE_3D,ne.__webglTexture,n.TEXTURE0+C)}function me(I,C){const ne=i.get(I);if(I.version>0&&ne.__version!==I.version){Re(ne,I,C);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture,n.TEXTURE0+C)}const Se={[Ka]:n.REPEAT,[Ni]:n.CLAMP_TO_EDGE,[Ja]:n.MIRRORED_REPEAT},z={[ii]:n.NEAREST,[nc]:n.NEAREST_MIPMAP_NEAREST,[la]:n.NEAREST_MIPMAP_LINEAR,[Ai]:n.LINEAR,[Uh]:n.LINEAR_MIPMAP_NEAREST,[jr]:n.LINEAR_MIPMAP_LINEAR};function Ue(I,C,ne){if(ne?(n.texParameteri(I,n.TEXTURE_WRAP_S,Se[C.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Se[C.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Se[C.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,z[C.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,z[C.minFilter])):(n.texParameteri(I,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(I,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(C.wrapS!==Ni||C.wrapT!==Ni)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(I,n.TEXTURE_MAG_FILTER,W(C.magFilter)),n.texParameteri(I,n.TEXTURE_MIN_FILTER,W(C.minFilter)),C.minFilter!==ii&&C.minFilter!==Ai&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const be=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===ii||C.minFilter!==la&&C.minFilter!==jr||C.type===On&&e.has("OES_texture_float_linear")===!1||l===!1&&C.type===$r&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||i.get(C).__currentAnisotropy)&&(n.texParameterf(I,be.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy)}}function Fe(I,C){let ne=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",he));const be=C.source;let Me=x.get(be);Me===void 0&&(Me={},x.set(be,Me));const Ce=ye(C);if(Ce!==I.__cacheKey){Me[Ce]===void 0&&(Me[Ce]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,ne=!0),Me[Ce].usedTimes++;const ke=Me[I.__cacheKey];ke!==void 0&&(Me[I.__cacheKey].usedTimes--,ke.usedTimes===0&&j(C)),I.__cacheKey=Ce,I.__webglTexture=Me[Ce].texture}return ne}function Oe(I,C,ne){let be=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(be=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(be=n.TEXTURE_3D);const Me=Fe(I,C),Ce=C.source;t.bindTexture(be,I.__webglTexture,n.TEXTURE0+ne);const ke=i.get(Ce);if(Ce.version!==ke.__version||Me===!0){t.activeTexture(n.TEXTURE0+ne),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Le=F(C)&&L(C.image)===!1;let fe=A(C.image,Le,!1,p);fe=ri(C,fe);const Ke=L(fe)||l,Ne=a.convert(C.format,C.encoding);let qe=a.convert(C.type),Xe=R(C.internalFormat,Ne,qe,C.encoding,C.isVideoTexture);Ue(be,C,Ke);let Ge;const Qe=C.mipmaps,lt=l&&C.isVideoTexture!==!0,It=ke.__version===void 0||Me===!0,G=O(C,fe,Ke);if(C.isDepthTexture)Xe=n.DEPTH_COMPONENT,l?C.type===On?Xe=n.DEPTH_COMPONENT32F:C.type===Un?Xe=n.DEPTH_COMPONENT24:C.type===hr?Xe=n.DEPTH24_STENCIL8:Xe=n.DEPTH_COMPONENT16:C.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Bn&&Xe===n.DEPTH_COMPONENT&&C.type!==Zl&&C.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Un,qe=a.convert(C.type)),C.format===gr&&Xe===n.DEPTH_COMPONENT&&(Xe=n.DEPTH_STENCIL,C.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=hr,qe=a.convert(C.type))),It&&(lt?t.texStorage2D(n.TEXTURE_2D,1,Xe,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Xe,fe.width,fe.height,0,Ne,qe,null));else if(C.isDataTexture)if(Qe.length>0&&Ke){lt&&It&&t.texStorage2D(n.TEXTURE_2D,G,Xe,Qe[0].width,Qe[0].height);for(let re=0,_e=Qe.length;re<_e;re++)Ge=Qe[re],lt?t.texSubImage2D(n.TEXTURE_2D,re,0,0,Ge.width,Ge.height,Ne,qe,Ge.data):t.texImage2D(n.TEXTURE_2D,re,Xe,Ge.width,Ge.height,0,Ne,qe,Ge.data);C.generateMipmaps=!1}else lt?(It&&t.texStorage2D(n.TEXTURE_2D,G,Xe,fe.width,fe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,Ne,qe,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Xe,fe.width,fe.height,0,Ne,qe,fe.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){lt&&It&&t.texStorage3D(n.TEXTURE_2D_ARRAY,G,Xe,Qe[0].width,Qe[0].height,fe.depth);for(let re=0,_e=Qe.length;re<_e;re++)Ge=Qe[re],C.format!==Fi?Ne!==null?lt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Ge.width,Ge.height,fe.depth,Ne,Ge.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Xe,Ge.width,Ge.height,fe.depth,0,Ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Ge.width,Ge.height,fe.depth,Ne,qe,Ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Xe,Ge.width,Ge.height,fe.depth,0,Ne,qe,Ge.data)}else{lt&&It&&t.texStorage2D(n.TEXTURE_2D,G,Xe,Qe[0].width,Qe[0].height);for(let re=0,_e=Qe.length;re<_e;re++)Ge=Qe[re],C.format!==Fi?Ne!==null?lt?t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,Ge.width,Ge.height,Ne,Ge.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Xe,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?t.texSubImage2D(n.TEXTURE_2D,re,0,0,Ge.width,Ge.height,Ne,qe,Ge.data):t.texImage2D(n.TEXTURE_2D,re,Xe,Ge.width,Ge.height,0,Ne,qe,Ge.data)}else if(C.isDataArrayTexture)lt?(It&&t.texStorage3D(n.TEXTURE_2D_ARRAY,G,Xe,fe.width,fe.height,fe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ne,qe,fe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Xe,fe.width,fe.height,fe.depth,0,Ne,qe,fe.data);else if(C.isData3DTexture)lt?(It&&t.texStorage3D(n.TEXTURE_3D,G,Xe,fe.width,fe.height,fe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ne,qe,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Xe,fe.width,fe.height,fe.depth,0,Ne,qe,fe.data);else if(C.isFramebufferTexture){if(It)if(lt)t.texStorage2D(n.TEXTURE_2D,G,Xe,fe.width,fe.height);else{let re=fe.width,_e=fe.height;for(let Ae=0;Ae<G;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Xe,re,_e,0,Ne,qe,null),re>>=1,_e>>=1}}else if(Qe.length>0&&Ke){lt&&It&&t.texStorage2D(n.TEXTURE_2D,G,Xe,Qe[0].width,Qe[0].height);for(let re=0,_e=Qe.length;re<_e;re++)Ge=Qe[re],lt?t.texSubImage2D(n.TEXTURE_2D,re,0,0,Ne,qe,Ge):t.texImage2D(n.TEXTURE_2D,re,Xe,Ne,qe,Ge);C.generateMipmaps=!1}else lt?(It&&t.texStorage2D(n.TEXTURE_2D,G,Xe,fe.width,fe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ne,qe,fe)):t.texImage2D(n.TEXTURE_2D,0,Xe,Ne,qe,fe);u(C,Ke)&&q(be),ke.__version=Ce.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function Re(I,C,ne){if(C.image.length!==6)return;const be=Fe(I,C),Me=C.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+ne);const Ce=i.get(Me);if(Me.version!==Ce.__version||be===!0){t.activeTexture(n.TEXTURE0+ne),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ke=C.isCompressedTexture||C.image[0].isCompressedTexture,Le=C.image[0]&&C.image[0].isDataTexture,fe=[];for(let re=0;re<6;re++)!ke&&!Le?fe[re]=A(C.image[re],!1,!0,d):fe[re]=Le?C.image[re].image:C.image[re],fe[re]=ri(C,fe[re]);const Ke=fe[0],Ne=L(Ke)||l,qe=a.convert(C.format,C.encoding),Xe=a.convert(C.type),Ge=R(C.internalFormat,qe,Xe,C.encoding),Qe=l&&C.isVideoTexture!==!0,lt=Ce.__version===void 0||be===!0;let It=O(C,Ke,Ne);Ue(n.TEXTURE_CUBE_MAP,C,Ne);let G;if(ke){Qe&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,It,Ge,Ke.width,Ke.height);for(let re=0;re<6;re++){G=fe[re].mipmaps;for(let _e=0;_e<G.length;_e++){const Ae=G[_e];C.format!==Fi?qe!==null?Qe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e,0,0,Ae.width,Ae.height,qe,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e,Ge,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e,0,0,Ae.width,Ae.height,qe,Xe,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e,Ge,Ae.width,Ae.height,0,qe,Xe,Ae.data)}}}else{G=C.mipmaps,Qe&&lt&&(G.length>0&&It++,t.texStorage2D(n.TEXTURE_CUBE_MAP,It,Ge,fe[0].width,fe[0].height));for(let re=0;re<6;re++)if(Le){Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,fe[re].width,fe[re].height,qe,Xe,fe[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ge,fe[re].width,fe[re].height,0,qe,Xe,fe[re].data);for(let _e=0;_e<G.length;_e++){const De=G[_e].image[re].image;Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e+1,0,0,De.width,De.height,qe,Xe,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e+1,Ge,De.width,De.height,0,qe,Xe,De.data)}}else{Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,qe,Xe,fe[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ge,qe,Xe,fe[re]);for(let _e=0;_e<G.length;_e++){const Ae=G[_e];Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e+1,0,0,qe,Xe,Ae.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e+1,Ge,qe,Xe,Ae.image[re])}}}u(C,Ne)&&q(n.TEXTURE_CUBE_MAP),Ce.__version=Me.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function Ze(I,C,ne,be,Me){const Ce=a.convert(ne.format,ne.encoding),ke=a.convert(ne.type),Le=R(ne.internalFormat,Ce,ke,ne.encoding);i.get(C).__hasExternalTextures||(Me===n.TEXTURE_3D||Me===n.TEXTURE_2D_ARRAY?t.texImage3D(Me,0,Le,C.width,C.height,C.depth,0,Ce,ke,null):t.texImage2D(Me,0,Le,C.width,C.height,0,Ce,ke,null)),t.bindFramebuffer(n.FRAMEBUFFER,I),Tt(C)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,Me,i.get(ne).__webglTexture,0,At(C)):(Me===n.TEXTURE_2D||Me>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,be,Me,i.get(ne).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function st(I,C,ne){if(n.bindRenderbuffer(n.RENDERBUFFER,I),C.depthBuffer&&!C.stencilBuffer){let be=n.DEPTH_COMPONENT16;if(ne||Tt(C)){const Me=C.depthTexture;Me&&Me.isDepthTexture&&(Me.type===On?be=n.DEPTH_COMPONENT32F:Me.type===Un&&(be=n.DEPTH_COMPONENT24));const Ce=At(C);Tt(C)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,be,C.width,C.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,be,C.width,C.height)}else n.renderbufferStorage(n.RENDERBUFFER,be,C.width,C.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,I)}else if(C.depthBuffer&&C.stencilBuffer){const be=At(C);ne&&Tt(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,n.DEPTH24_STENCIL8,C.width,C.height):Tt(C)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,n.DEPTH24_STENCIL8,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,I)}else{const be=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Me=0;Me<be.length;Me++){const Ce=be[Me],ke=a.convert(Ce.format,Ce.encoding),Le=a.convert(Ce.type),fe=R(Ce.internalFormat,ke,Le,Ce.encoding),Ke=At(C);ne&&Tt(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,fe,C.width,C.height):Tt(C)?g.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke,fe,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,fe,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ct(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ge(C.depthTexture,0);const be=i.get(C.depthTexture).__webglTexture,Me=At(C);if(C.depthTexture.format===Bn)Tt(C)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,be,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,be,0);else if(C.depthTexture.format===gr)Tt(C)?g.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,be,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,be,0);else throw new Error("Unknown depthTexture format")}function it(I){const C=i.get(I),ne=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");ct(C.__webglFramebuffer,I)}else if(ne){C.__webglDepthbuffer=[];for(let be=0;be<6;be++)t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[be]),C.__webglDepthbuffer[be]=n.createRenderbuffer(),st(C.__webglDepthbuffer[be],I,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=n.createRenderbuffer(),st(C.__webglDepthbuffer,I,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(I,C,ne){const be=i.get(I);C!==void 0&&Ze(be.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),ne!==void 0&&it(I)}function jt(I){const C=I.texture,ne=i.get(I),be=i.get(C);I.addEventListener("dispose",ue),I.isWebGLMultipleRenderTargets!==!0&&(be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture()),be.__version=C.version,c.memory.textures++);const Me=I.isWebGLCubeRenderTarget===!0,Ce=I.isWebGLMultipleRenderTargets===!0,ke=L(I)||l;if(Me){ne.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)ne.__webglFramebuffer[Le]=n.createFramebuffer()}else{if(ne.__webglFramebuffer=n.createFramebuffer(),Ce)if(r.drawBuffers){const Le=I.texture;for(let fe=0,Ke=Le.length;fe<Ke;fe++){const Ne=i.get(Le[fe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&I.samples>0&&Tt(I)===!1){const Le=Ce?C:[C];ne.__webglMultisampledFramebuffer=n.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let fe=0;fe<Le.length;fe++){const Ke=Le[fe];ne.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ne.__webglColorRenderbuffer[fe]);const Ne=a.convert(Ke.format,Ke.encoding),qe=a.convert(Ke.type),Xe=R(Ke.internalFormat,Ne,qe,Ke.encoding,I.isXRRenderTarget===!0),Ge=At(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Xe,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,ne.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(ne.__webglDepthRenderbuffer=n.createRenderbuffer(),st(ne.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Me){t.bindTexture(n.TEXTURE_CUBE_MAP,be.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,C,ke);for(let Le=0;Le<6;Le++)Ze(ne.__webglFramebuffer[Le],I,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Le);u(C,ke)&&q(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){const Le=I.texture;for(let fe=0,Ke=Le.length;fe<Ke;fe++){const Ne=Le[fe],qe=i.get(Ne);t.bindTexture(n.TEXTURE_2D,qe.__webglTexture),Ue(n.TEXTURE_2D,Ne,ke),Ze(ne.__webglFramebuffer,I,Ne,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D),u(Ne,ke)&&q(n.TEXTURE_2D)}t.unbindTexture()}else{let Le=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(l?Le=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Le,be.__webglTexture),Ue(Le,C,ke),Ze(ne.__webglFramebuffer,I,C,n.COLOR_ATTACHMENT0,Le),u(C,ke)&&q(Le),t.unbindTexture()}I.depthBuffer&&it(I)}function Pe(I){const C=L(I)||l,ne=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let be=0,Me=ne.length;be<Me;be++){const Ce=ne[be];if(u(Ce,C)){const ke=I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Le=i.get(Ce).__webglTexture;t.bindTexture(ke,Le),q(ke),t.unbindTexture()}}}function mt(I){if(l&&I.samples>0&&Tt(I)===!1){const C=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],ne=I.width,be=I.height;let Me=n.COLOR_BUFFER_BIT;const Ce=[],ke=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=i.get(I),fe=I.isWebGLMultipleRenderTargets===!0;if(fe)for(let Ke=0;Ke<C.length;Ke++)t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ke=0;Ke<C.length;Ke++){Ce.push(n.COLOR_ATTACHMENT0+Ke),I.depthBuffer&&Ce.push(ke);const Ne=Le.__ignoreDepthValues!==void 0?Le.__ignoreDepthValues:!1;if(Ne===!1&&(I.depthBuffer&&(Me|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&(Me|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Ke]),Ne===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ke]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ke])),fe){const qe=i.get(C[Ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qe,0)}n.blitFramebuffer(0,0,ne,be,0,0,ne,be,Me,n.NEAREST),M&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ce)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Ke=0;Ke<C.length;Ke++){t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Ke]);const Ne=i.get(C[Ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}}function At(I){return Math.min(_,I.samples)}function Tt(I){const C=i.get(I);return l&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function bi(I){const C=c.render.frame;S.get(I)!==C&&(S.set(I,C),I.update())}function ri(I,C){const ne=I.encoding,be=I.format,Me=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===Qa||ne!==Gn&&(ne===wt?l===!1?e.has("EXT_sRGB")===!0&&be===Fi?(I.format=Qa,I.minFilter=Ai,I.generateMipmaps=!1):C=eu.sRGBToLinear(C):(be!==Fi||Me!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ne)),C}this.allocateTextureUnit=ce,this.resetTextureUnits=xe,this.setTexture2D=ge,this.setTexture2DArray=Ie,this.setTexture3D=Q,this.setTextureCube=me,this.rebindTextures=Ft,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Ze,this.useMultisampledRTT=Tt}function i_(n,e,t){const i=t.isWebGL2;function r(a,c=null){let l;if(a===kn)return n.UNSIGNED_BYTE;if(a===kh)return n.UNSIGNED_SHORT_4_4_4_4;if(a===Gh)return n.UNSIGNED_SHORT_5_5_5_1;if(a===Oh)return n.BYTE;if(a===Bh)return n.SHORT;if(a===Zl)return n.UNSIGNED_SHORT;if(a===zh)return n.INT;if(a===Un)return n.UNSIGNED_INT;if(a===On)return n.FLOAT;if(a===$r)return i?n.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(a===Hh)return n.ALPHA;if(a===Fi)return n.RGBA;if(a===Vh)return n.LUMINANCE;if(a===Wh)return n.LUMINANCE_ALPHA;if(a===Bn)return n.DEPTH_COMPONENT;if(a===gr)return n.DEPTH_STENCIL;if(a===Qa)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(a===qh)return n.RED;if(a===Xh)return n.RED_INTEGER;if(a===jh)return n.RG;if(a===$h)return n.RG_INTEGER;if(a===Yh)return n.RGBA_INTEGER;if(a===ua||a===fa||a===ha||a===da)if(c===wt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===ua)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===fa)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ha)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===da)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===ua)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===fa)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ha)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===da)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===rc||a===sc||a===ac||a===oc)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===rc)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===sc)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ac)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===oc)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Zh)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===cc||a===lc)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===cc)return c===wt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===lc)return c===wt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===uc||a===fc||a===hc||a===dc||a===pc||a===mc||a===gc||a===vc||a===_c||a===xc||a===yc||a===bc||a===Mc||a===Sc)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===uc)return c===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===fc)return c===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===hc)return c===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===dc)return c===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===pc)return c===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===mc)return c===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===gc)return c===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===vc)return c===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===_c)return c===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===xc)return c===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===yc)return c===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===bc)return c===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Mc)return c===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Sc)return c===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===pa)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===pa)return c===wt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===Kh||a===Ec||a===Tc||a===wc)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===pa)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Ec)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Tc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===wc)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===hr?i?n.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:r}}class n_ extends _i{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Cs extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r_={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,c=null;const l=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,i),T=this._getHandJoint(d,v);x!==null&&(T.matrix.fromArray(x.transform.matrix),T.matrix.decompose(T.position,T.rotation,T.scale),T.jointRadius=x.radius),T.visible=x!==null}const p=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],g=p.position.distanceTo(_.position),M=.02,S=.005;d.inputState.pinching&&g>M+S?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=M-S&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(r_)))}return l!==null&&(l.visible=r!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Cs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class s_ extends yi{constructor(e,t,i,r,a,c,l,f,d,p){if(p=p!==void 0?p:Bn,p!==Bn&&p!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Bn&&(i=Un),i===void 0&&p===gr&&(i=hr),super(null,r,a,c,l,f,p,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:ii,this.minFilter=f!==void 0?f:ii,this.flipY=!1,this.generateMipmaps=!1}}class a_ extends _r{constructor(e,t){super();const i=this;let r=null,a=1,c=null,l="local-floor",f=1,d=null,p=null,_=null,g=null,M=null,S=null;const v=t.getContextAttributes();let x=null,T=null;const P=[],A=[],L=new Set,F=new Map,u=new _i;u.layers.enable(1),u.viewport=new Rt;const q=new _i;q.layers.enable(2),q.viewport=new Rt;const R=[u,q],O=new n_;O.layers.enable(1),O.layers.enable(2);let W=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let me=P[Q];return me===void 0&&(me=new ka,P[Q]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Q){let me=P[Q];return me===void 0&&(me=new ka,P[Q]=me),me.getGripSpace()},this.getHand=function(Q){let me=P[Q];return me===void 0&&(me=new ka,P[Q]=me),me.getHandSpace()};function ue(Q){const me=A.indexOf(Q.inputSource);if(me===-1)return;const Se=P[me];Se!==void 0&&Se.dispatchEvent({type:Q.type,data:Q.inputSource})}function J(){r.removeEventListener("select",ue),r.removeEventListener("selectstart",ue),r.removeEventListener("selectend",ue),r.removeEventListener("squeeze",ue),r.removeEventListener("squeezestart",ue),r.removeEventListener("squeezeend",ue),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",j);for(let Q=0;Q<P.length;Q++){const me=A[Q];me!==null&&(A[Q]=null,P[Q].disconnect(me))}W=null,he=null,e.setRenderTarget(x),M=null,g=null,_=null,r=null,T=null,Ie.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){l=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return _},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",ue),r.addEventListener("selectstart",ue),r.addEventListener("selectend",ue),r.addEventListener("squeeze",ue),r.addEventListener("squeezestart",ue),r.addEventListener("squeezeend",ue),r.addEventListener("end",J),r.addEventListener("inputsourceschange",j),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const me={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};M=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:M}),T=new Hn(M.framebufferWidth,M.framebufferHeight,{format:Fi,type:kn,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let me=null,Se=null,z=null;v.depth&&(z=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=v.stencil?gr:Bn,Se=v.stencil?hr:Un);const Ue={colorFormat:t.RGBA8,depthFormat:z,scaleFactor:a};_=new XRWebGLBinding(r,t),g=_.createProjectionLayer(Ue),r.updateRenderState({layers:[g]}),T=new Hn(g.textureWidth,g.textureHeight,{format:Fi,type:kn,depthTexture:new s_(g.textureWidth,g.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const Fe=e.properties.get(T);Fe.__ignoreDepthValues=g.ignoreDepthValues}T.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await r.requestReferenceSpace(l),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function j(Q){for(let me=0;me<Q.removed.length;me++){const Se=Q.removed[me],z=A.indexOf(Se);z>=0&&(A[z]=null,P[z].disconnect(Se))}for(let me=0;me<Q.added.length;me++){const Se=Q.added[me];let z=A.indexOf(Se);if(z===-1){for(let Fe=0;Fe<P.length;Fe++)if(Fe>=A.length){A.push(Se),z=Fe;break}else if(A[Fe]===null){A[Fe]=Se,z=Fe;break}if(z===-1)break}const Ue=P[z];Ue&&Ue.connect(Se)}}const oe=new Z,ve=new Z;function xe(Q,me,Se){oe.setFromMatrixPosition(me.matrixWorld),ve.setFromMatrixPosition(Se.matrixWorld);const z=oe.distanceTo(ve),Ue=me.projectionMatrix.elements,Fe=Se.projectionMatrix.elements,Oe=Ue[14]/(Ue[10]-1),Re=Ue[14]/(Ue[10]+1),Ze=(Ue[9]+1)/Ue[5],st=(Ue[9]-1)/Ue[5],ct=(Ue[8]-1)/Ue[0],it=(Fe[8]+1)/Fe[0],Ft=Oe*ct,jt=Oe*it,Pe=z/(-ct+it),mt=Pe*-ct;me.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(mt),Q.translateZ(Pe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const At=Oe+Pe,Tt=Re+Pe,bi=Ft-mt,ri=jt+(z-mt),I=Ze*Re/Tt*At,C=st*Re/Tt*At;Q.projectionMatrix.makePerspective(bi,ri,I,C,At,Tt)}function ce(Q,me){me===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(me.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;O.near=q.near=u.near=Q.near,O.far=q.far=u.far=Q.far,(W!==O.near||he!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),W=O.near,he=O.far);const me=Q.parent,Se=O.cameras;ce(O,me);for(let Ue=0;Ue<Se.length;Ue++)ce(Se[Ue],me);O.matrixWorld.decompose(O.position,O.quaternion,O.scale),Q.matrix.copy(O.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale);const z=Q.children;for(let Ue=0,Fe=z.length;Ue<Fe;Ue++)z[Ue].updateMatrixWorld(!0);Se.length===2?xe(O,u,q):O.projectionMatrix.copy(u.projectionMatrix)},this.getCamera=function(){return O},this.getFoveation=function(){if(!(g===null&&M===null))return f},this.setFoveation=function(Q){f=Q,g!==null&&(g.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.getPlanes=function(){return L};let ye=null;function ge(Q,me){if(p=me.getViewerPose(d||c),S=me,p!==null){const Se=p.views;M!==null&&(e.setRenderTargetFramebuffer(T,M.framebuffer),e.setRenderTarget(T));let z=!1;Se.length!==O.cameras.length&&(O.cameras.length=0,z=!0);for(let Ue=0;Ue<Se.length;Ue++){const Fe=Se[Ue];let Oe=null;if(M!==null)Oe=M.getViewport(Fe);else{const Ze=_.getViewSubImage(g,Fe);Oe=Ze.viewport,Ue===0&&(e.setRenderTargetTextures(T,Ze.colorTexture,g.ignoreDepthValues?void 0:Ze.depthStencilTexture),e.setRenderTarget(T))}let Re=R[Ue];Re===void 0&&(Re=new _i,Re.layers.enable(Ue),Re.viewport=new Rt,R[Ue]=Re),Re.matrix.fromArray(Fe.transform.matrix),Re.projectionMatrix.fromArray(Fe.projectionMatrix),Re.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Ue===0&&O.matrix.copy(Re.matrix),z===!0&&O.cameras.push(Re)}}for(let Se=0;Se<P.length;Se++){const z=A[Se],Ue=P[Se];z!==null&&Ue!==void 0&&Ue.update(z,me,d||c)}if(ye&&ye(Q,me),me.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:me.detectedPlanes});let Se=null;for(const z of L)me.detectedPlanes.has(z)||(Se===null&&(Se=[]),Se.push(z));if(Se!==null)for(const z of Se)L.delete(z),F.delete(z),i.dispatchEvent({type:"planeremoved",data:z});for(const z of me.detectedPlanes)if(!L.has(z))L.add(z),F.set(z,me.lastChangedTime),i.dispatchEvent({type:"planeadded",data:z});else{const Ue=F.get(z);z.lastChangedTime>Ue&&(F.set(z,z.lastChangedTime),i.dispatchEvent({type:"planechanged",data:z}))}}S=null}const Ie=new fu;Ie.setAnimationLoop(ge),this.setAnimationLoop=function(Q){ye=Q},this.dispose=function(){}}}function o_(n,e){function t(v,x){x.color.getRGB(v.fogColor.value,cu(n)),x.isFog?(v.fogNear.value=x.near,v.fogFar.value=x.far):x.isFogExp2&&(v.fogDensity.value=x.density)}function i(v,x,T,P,A){x.isMeshBasicMaterial||x.isMeshLambertMaterial?r(v,x):x.isMeshToonMaterial?(r(v,x),p(v,x)):x.isMeshPhongMaterial?(r(v,x),d(v,x)):x.isMeshStandardMaterial?(r(v,x),_(v,x),x.isMeshPhysicalMaterial&&g(v,x,A)):x.isMeshMatcapMaterial?(r(v,x),M(v,x)):x.isMeshDepthMaterial?r(v,x):x.isMeshDistanceMaterial?(r(v,x),S(v,x)):x.isMeshNormalMaterial?r(v,x):x.isLineBasicMaterial?(a(v,x),x.isLineDashedMaterial&&c(v,x)):x.isPointsMaterial?l(v,x,T,P):x.isSpriteMaterial?f(v,x):x.isShadowMaterial?(v.color.value.copy(x.color),v.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(v,x){v.opacity.value=x.opacity,x.color&&v.diffuse.value.copy(x.color),x.emissive&&v.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(v.map.value=x.map),x.alphaMap&&(v.alphaMap.value=x.alphaMap),x.bumpMap&&(v.bumpMap.value=x.bumpMap,v.bumpScale.value=x.bumpScale,x.side===xi&&(v.bumpScale.value*=-1)),x.displacementMap&&(v.displacementMap.value=x.displacementMap,v.displacementScale.value=x.displacementScale,v.displacementBias.value=x.displacementBias),x.emissiveMap&&(v.emissiveMap.value=x.emissiveMap),x.normalMap&&(v.normalMap.value=x.normalMap,v.normalScale.value.copy(x.normalScale),x.side===xi&&v.normalScale.value.negate()),x.specularMap&&(v.specularMap.value=x.specularMap),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);const T=e.get(x).envMap;if(T&&(v.envMap.value=T,v.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=x.reflectivity,v.ior.value=x.ior,v.refractionRatio.value=x.refractionRatio),x.lightMap){v.lightMap.value=x.lightMap;const L=n.useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=x.lightMapIntensity*L}x.aoMap&&(v.aoMap.value=x.aoMap,v.aoMapIntensity.value=x.aoMapIntensity);let P;x.map?P=x.map:x.specularMap?P=x.specularMap:x.displacementMap?P=x.displacementMap:x.normalMap?P=x.normalMap:x.bumpMap?P=x.bumpMap:x.roughnessMap?P=x.roughnessMap:x.metalnessMap?P=x.metalnessMap:x.alphaMap?P=x.alphaMap:x.emissiveMap?P=x.emissiveMap:x.clearcoatMap?P=x.clearcoatMap:x.clearcoatNormalMap?P=x.clearcoatNormalMap:x.clearcoatRoughnessMap?P=x.clearcoatRoughnessMap:x.iridescenceMap?P=x.iridescenceMap:x.iridescenceThicknessMap?P=x.iridescenceThicknessMap:x.specularIntensityMap?P=x.specularIntensityMap:x.specularColorMap?P=x.specularColorMap:x.transmissionMap?P=x.transmissionMap:x.thicknessMap?P=x.thicknessMap:x.sheenColorMap?P=x.sheenColorMap:x.sheenRoughnessMap&&(P=x.sheenRoughnessMap),P!==void 0&&(P.isWebGLRenderTarget&&(P=P.texture),P.matrixAutoUpdate===!0&&P.updateMatrix(),v.uvTransform.value.copy(P.matrix));let A;x.aoMap?A=x.aoMap:x.lightMap&&(A=x.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),v.uv2Transform.value.copy(A.matrix))}function a(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity}function c(v,x){v.dashSize.value=x.dashSize,v.totalSize.value=x.dashSize+x.gapSize,v.scale.value=x.scale}function l(v,x,T,P){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.size.value=x.size*T,v.scale.value=P*.5,x.map&&(v.map.value=x.map),x.alphaMap&&(v.alphaMap.value=x.alphaMap),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);let A;x.map?A=x.map:x.alphaMap&&(A=x.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),v.uvTransform.value.copy(A.matrix))}function f(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.rotation.value=x.rotation,x.map&&(v.map.value=x.map),x.alphaMap&&(v.alphaMap.value=x.alphaMap),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);let T;x.map?T=x.map:x.alphaMap&&(T=x.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),v.uvTransform.value.copy(T.matrix))}function d(v,x){v.specular.value.copy(x.specular),v.shininess.value=Math.max(x.shininess,1e-4)}function p(v,x){x.gradientMap&&(v.gradientMap.value=x.gradientMap)}function _(v,x){v.roughness.value=x.roughness,v.metalness.value=x.metalness,x.roughnessMap&&(v.roughnessMap.value=x.roughnessMap),x.metalnessMap&&(v.metalnessMap.value=x.metalnessMap),e.get(x).envMap&&(v.envMapIntensity.value=x.envMapIntensity)}function g(v,x,T){v.ior.value=x.ior,x.sheen>0&&(v.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),v.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(v.sheenColorMap.value=x.sheenColorMap),x.sheenRoughnessMap&&(v.sheenRoughnessMap.value=x.sheenRoughnessMap)),x.clearcoat>0&&(v.clearcoat.value=x.clearcoat,v.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(v.clearcoatMap.value=x.clearcoatMap),x.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap),x.clearcoatNormalMap&&(v.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),v.clearcoatNormalMap.value=x.clearcoatNormalMap,x.side===xi&&v.clearcoatNormalScale.value.negate())),x.iridescence>0&&(v.iridescence.value=x.iridescence,v.iridescenceIOR.value=x.iridescenceIOR,v.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(v.iridescenceMap.value=x.iridescenceMap),x.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=x.iridescenceThicknessMap)),x.transmission>0&&(v.transmission.value=x.transmission,v.transmissionSamplerMap.value=T.texture,v.transmissionSamplerSize.value.set(T.width,T.height),x.transmissionMap&&(v.transmissionMap.value=x.transmissionMap),v.thickness.value=x.thickness,x.thicknessMap&&(v.thicknessMap.value=x.thicknessMap),v.attenuationDistance.value=x.attenuationDistance,v.attenuationColor.value.copy(x.attenuationColor)),v.specularIntensity.value=x.specularIntensity,v.specularColor.value.copy(x.specularColor),x.specularIntensityMap&&(v.specularIntensityMap.value=x.specularIntensityMap),x.specularColorMap&&(v.specularColorMap.value=x.specularColorMap)}function M(v,x){x.matcap&&(v.matcap.value=x.matcap)}function S(v,x){v.referencePosition.value.copy(x.referencePosition),v.nearDistance.value=x.nearDistance,v.farDistance.value=x.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function c_(n,e,t,i){let r={},a={},c=[];const l=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(P,A){const L=A.program;i.uniformBlockBinding(P,L)}function d(P,A){let L=r[P.id];L===void 0&&(S(P),L=p(P),r[P.id]=L,P.addEventListener("dispose",x));const F=A.program;i.updateUBOMapping(P,F);const u=e.render.frame;a[P.id]!==u&&(g(P),a[P.id]=u)}function p(P){const A=_();P.__bindingPointIndex=A;const L=n.createBuffer(),F=P.__size,u=P.usage;return n.bindBuffer(n.UNIFORM_BUFFER,L),n.bufferData(n.UNIFORM_BUFFER,F,u),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,L),L}function _(){for(let P=0;P<l;P++)if(c.indexOf(P)===-1)return c.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(P){const A=r[P.id],L=P.uniforms,F=P.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let u=0,q=L.length;u<q;u++){const R=L[u];if(M(R,u,F)===!0){const O=R.__offset,W=Array.isArray(R.value)?R.value:[R.value];let he=0;for(let ue=0;ue<W.length;ue++){const J=W[ue],j=v(J);typeof J=="number"?(R.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,O+he,R.__data)):J.isMatrix3?(R.__data[0]=J.elements[0],R.__data[1]=J.elements[1],R.__data[2]=J.elements[2],R.__data[3]=J.elements[0],R.__data[4]=J.elements[3],R.__data[5]=J.elements[4],R.__data[6]=J.elements[5],R.__data[7]=J.elements[0],R.__data[8]=J.elements[6],R.__data[9]=J.elements[7],R.__data[10]=J.elements[8],R.__data[11]=J.elements[0]):(J.toArray(R.__data,he),he+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,R.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function M(P,A,L){const F=P.value;if(L[A]===void 0){if(typeof F=="number")L[A]=F;else{const u=Array.isArray(F)?F:[F],q=[];for(let R=0;R<u.length;R++)q.push(u[R].clone());L[A]=q}return!0}else if(typeof F=="number"){if(L[A]!==F)return L[A]=F,!0}else{const u=Array.isArray(L[A])?L[A]:[L[A]],q=Array.isArray(F)?F:[F];for(let R=0;R<u.length;R++){const O=u[R];if(O.equals(q[R])===!1)return O.copy(q[R]),!0}}return!1}function S(P){const A=P.uniforms;let L=0;const F=16;let u=0;for(let q=0,R=A.length;q<R;q++){const O=A[q],W={boundary:0,storage:0},he=Array.isArray(O.value)?O.value:[O.value];for(let ue=0,J=he.length;ue<J;ue++){const j=he[ue],oe=v(j);W.boundary+=oe.boundary,W.storage+=oe.storage}if(O.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=L,q>0){u=L%F;const ue=F-u;u!==0&&ue-W.boundary<0&&(L+=F-u,O.__offset=L)}L+=W.storage}return u=L%F,u>0&&(L+=F-u),P.__size=L,P.__cache={},this}function v(P){const A={boundary:0,storage:0};return typeof P=="number"?(A.boundary=4,A.storage=4):P.isVector2?(A.boundary=8,A.storage=8):P.isVector3||P.isColor?(A.boundary=16,A.storage=12):P.isVector4?(A.boundary=16,A.storage=16):P.isMatrix3?(A.boundary=48,A.storage=48):P.isMatrix4?(A.boundary=64,A.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),A}function x(P){const A=P.target;A.removeEventListener("dispose",x);const L=c.indexOf(A.__bindingPointIndex);c.splice(L,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete a[A.id]}function T(){for(const P in r)n.deleteBuffer(r[P]);c=[],r={},a={}}return{bind:f,update:d,dispose:T}}function l_(){const n=Fs("canvas");return n.style.display="block",n}function gu(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:l_(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,a=n.antialias!==void 0?n.antialias:!1,c=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,l=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,f=n.powerPreference!==void 0?n.powerPreference:"default",d=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let p;t!==null?p=t.getContextAttributes().alpha:p=n.alpha!==void 0?n.alpha:!1;let _=null,g=null;const M=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Gn,this.useLegacyLights=!0,this.toneMapping=rn,this.toneMappingExposure=1;const v=this;let x=!1,T=0,P=0,A=null,L=-1,F=null;const u=new Rt,q=new Rt;let R=null,O=e.width,W=e.height,he=1,ue=null,J=null;const j=new Rt(0,0,O,W),oe=new Rt(0,0,O,W);let ve=!1;const xe=new bo;let ce=!1,ye=!1,ge=null;const Ie=new kt,Q=new Z,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return A===null?he:1}let z=t;function Ue(D,K){for(let te=0;te<D.length;te++){const X=D[te],ae=e.getContext(X,K);if(ae!==null)return ae}return null}try{const D={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ah}`),e.addEventListener("webglcontextlost",qe,!1),e.addEventListener("webglcontextrestored",Xe,!1),e.addEventListener("webglcontextcreationerror",Ge,!1),z===null){const K=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&K.shift(),z=Ue(K,D),z===null)throw Ue(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Fe,Oe,Re,Ze,st,ct,it,Ft,jt,Pe,mt,At,Tt,bi,ri,I,C,ne,be,Me,Ce,ke,Le,fe;function Ke(){Fe=new yg(z),Oe=new dg(z,Fe,n),Fe.init(Oe),ke=new i_(z,Fe,Oe),Re=new e_(z,Fe,Oe),Ze=new Sg(z),st=new kv,ct=new t_(z,Fe,Re,st,Oe,ke,Ze),it=new mg(v),Ft=new xg(v),jt=new Dd(z,Oe),Le=new fg(z,Fe,jt,Oe),Pe=new bg(z,jt,Ze,Le),mt=new Ag(z,Pe,jt,Ze),be=new wg(z,Oe,ct),I=new pg(st),At=new zv(v,it,Ft,Fe,Oe,Le,I),Tt=new o_(v,st),bi=new Hv,ri=new $v(Fe,Oe),ne=new ug(v,it,Ft,Re,mt,p,c),C=new Qv(v,mt,Oe),fe=new c_(z,Ze,Oe,Re),Me=new hg(z,Fe,Ze,Oe),Ce=new Mg(z,Fe,Ze,Oe),Ze.programs=At.programs,v.capabilities=Oe,v.extensions=Fe,v.properties=st,v.renderLists=bi,v.shadowMap=C,v.state=Re,v.info=Ze}Ke();const Ne=new a_(v,z);this.xr=Ne,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const D=Fe.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Fe.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(D){D!==void 0&&(he=D,this.setSize(O,W,!1))},this.getSize=function(D){return D.set(O,W)},this.setSize=function(D,K,te=!0){if(Ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=D,W=K,e.width=Math.floor(D*he),e.height=Math.floor(K*he),te===!0&&(e.style.width=D+"px",e.style.height=K+"px"),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(O*he,W*he).floor()},this.setDrawingBufferSize=function(D,K,te){O=D,W=K,he=te,e.width=Math.floor(D*te),e.height=Math.floor(K*te),this.setViewport(0,0,D,K)},this.getCurrentViewport=function(D){return D.copy(u)},this.getViewport=function(D){return D.copy(j)},this.setViewport=function(D,K,te,X){D.isVector4?j.set(D.x,D.y,D.z,D.w):j.set(D,K,te,X),Re.viewport(u.copy(j).multiplyScalar(he).floor())},this.getScissor=function(D){return D.copy(oe)},this.setScissor=function(D,K,te,X){D.isVector4?oe.set(D.x,D.y,D.z,D.w):oe.set(D,K,te,X),Re.scissor(q.copy(oe).multiplyScalar(he).floor())},this.getScissorTest=function(){return ve},this.setScissorTest=function(D){Re.setScissorTest(ve=D)},this.setOpaqueSort=function(D){ue=D},this.setTransparentSort=function(D){J=D},this.getClearColor=function(D){return D.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(D=!0,K=!0,te=!0){let X=0;D&&(X|=z.COLOR_BUFFER_BIT),K&&(X|=z.DEPTH_BUFFER_BIT),te&&(X|=z.STENCIL_BUFFER_BIT),z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",qe,!1),e.removeEventListener("webglcontextrestored",Xe,!1),e.removeEventListener("webglcontextcreationerror",Ge,!1),bi.dispose(),ri.dispose(),st.dispose(),it.dispose(),Ft.dispose(),mt.dispose(),Le.dispose(),fe.dispose(),At.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",_e),Ne.removeEventListener("sessionend",Ae),ge&&(ge.dispose(),ge=null),De.stop()};function qe(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Xe(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const D=Ze.autoReset,K=C.enabled,te=C.autoUpdate,X=C.needsUpdate,ae=C.type;Ke(),Ze.autoReset=D,C.enabled=K,C.autoUpdate=te,C.needsUpdate=X,C.type=ae}function Ge(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Qe(D){const K=D.target;K.removeEventListener("dispose",Qe),lt(K)}function lt(D){It(D),st.remove(D)}function It(D){const K=st.get(D).programs;K!==void 0&&(K.forEach(function(te){At.releaseProgram(te)}),D.isShaderMaterial&&At.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,te,X,ae,He){K===null&&(K=me);const Je=ae.isMesh&&ae.matrixWorld.determinant()<0,nt=es(D,K,te,X,ae);Re.setMaterial(X,Je);let at=te.index,dt=1;X.wireframe===!0&&(at=Pe.getWireframeAttribute(te),dt=2);const ht=te.drawRange,rt=te.attributes.position;let Dt=ht.start*dt,$t=(ht.start+ht.count)*dt;He!==null&&(Dt=Math.max(Dt,He.start*dt),$t=Math.min($t,(He.start+He.count)*dt)),at!==null?(Dt=Math.max(Dt,0),$t=Math.min($t,at.count)):rt!=null&&(Dt=Math.max(Dt,0),$t=Math.min($t,rt.count));const Si=$t-Dt;if(Si<0||Si===1/0)return;Le.setup(ae,X,nt,te,at);let Ui,Nt=Me;if(at!==null&&(Ui=jt.get(at),Nt=Ce,Nt.setIndex(Ui)),ae.isMesh)X.wireframe===!0?(Re.setLineWidth(X.wireframeLinewidth*Se()),Nt.setMode(z.LINES)):Nt.setMode(z.TRIANGLES);else if(ae.isLine){let ut=X.linewidth;ut===void 0&&(ut=1),Re.setLineWidth(ut*Se()),ae.isLineSegments?Nt.setMode(z.LINES):ae.isLineLoop?Nt.setMode(z.LINE_LOOP):Nt.setMode(z.LINE_STRIP)}else ae.isPoints?Nt.setMode(z.POINTS):ae.isSprite&&Nt.setMode(z.TRIANGLES);if(ae.isInstancedMesh)Nt.renderInstances(Dt,Si,ae.count);else if(te.isInstancedBufferGeometry){const ut=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,br=Math.min(te.instanceCount,ut);Nt.renderInstances(Dt,Si,br)}else Nt.render(Dt,Si)},this.compile=function(D,K){function te(X,ae,He){X.transparent===!0&&X.side===pn&&X.forceSinglePass===!1?(X.side=xi,X.needsUpdate=!0,si(X,ae,He),X.side=vn,X.needsUpdate=!0,si(X,ae,He),X.side=pn):si(X,ae,He)}g=ri.get(D),g.init(),S.push(g),D.traverseVisible(function(X){X.isLight&&X.layers.test(K.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights(v.useLegacyLights),D.traverse(function(X){const ae=X.material;if(ae)if(Array.isArray(ae))for(let He=0;He<ae.length;He++){const Je=ae[He];te(Je,D,X)}else te(ae,D,X)}),S.pop(),g=null};let G=null;function re(D){G&&G(D)}function _e(){De.stop()}function Ae(){De.start()}const De=new fu;De.setAnimationLoop(re),typeof self<"u"&&De.setContext(self),this.setAnimationLoop=function(D){G=D,Ne.setAnimationLoop(D),D===null?De.stop():De.start()},Ne.addEventListener("sessionstart",_e),Ne.addEventListener("sessionend",Ae),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(K),K=Ne.getCamera()),D.isScene===!0&&D.onBeforeRender(v,D,K,A),g=ri.get(D,S.length),g.init(),S.push(g),Ie.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),xe.setFromProjectionMatrix(Ie),ye=this.localClippingEnabled,ce=I.init(this.clippingPlanes,ye),_=bi.get(D,M.length),_.init(),M.push(_),bt(D,K,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(ue,J),ce===!0&&I.beginShadows();const te=g.state.shadowsArray;if(C.render(te,D,K),ce===!0&&I.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(_,D),g.setupLights(v.useLegacyLights),K.isArrayCamera){const X=K.cameras;for(let ae=0,He=X.length;ae<He;ae++){const Je=X[ae];Ut(_,D,Je,Je.viewport)}}else Ut(_,D,K);A!==null&&(ct.updateMultisampleRenderTarget(A),ct.updateRenderTargetMipmap(A)),D.isScene===!0&&D.onAfterRender(v,D,K),Le.resetDefaultState(),L=-1,F=null,S.pop(),S.length>0?g=S[S.length-1]:g=null,M.pop(),M.length>0?_=M[M.length-1]:_=null};function bt(D,K,te,X){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)te=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)g.pushLight(D),D.castShadow&&g.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||xe.intersectsSprite(D)){X&&Q.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ie);const Je=mt.update(D),nt=D.material;nt.visible&&_.push(D,Je,nt,te,Q.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(D.isSkinnedMesh&&D.skeleton.frame!==Ze.render.frame&&(D.skeleton.update(),D.skeleton.frame=Ze.render.frame),!D.frustumCulled||xe.intersectsObject(D))){X&&Q.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ie);const Je=mt.update(D),nt=D.material;if(Array.isArray(nt)){const at=Je.groups;for(let dt=0,ht=at.length;dt<ht;dt++){const rt=at[dt],Dt=nt[rt.materialIndex];Dt&&Dt.visible&&_.push(D,Je,Dt,te,Q.z,rt)}}else nt.visible&&_.push(D,Je,nt,te,Q.z,null)}}const He=D.children;for(let Je=0,nt=He.length;Je<nt;Je++)bt(He[Je],K,te,X)}function Ut(D,K,te,X){const ae=D.opaque,He=D.transmissive,Je=D.transparent;g.setupLightsView(te),ce===!0&&I.setGlobalState(v.clippingPlanes,te),He.length>0&&Gt(ae,K,te),X&&Re.viewport(u.copy(X)),ae.length>0&&Jt(ae,K,te),He.length>0&&Jt(He,K,te),Je.length>0&&Jt(Je,K,te),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Gt(D,K,te){const X=Oe.isWebGL2;ge===null&&(ge=new Hn(1024,1024,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")?$r:kn,minFilter:jr,samples:X&&a===!0?4:0}));const ae=v.getRenderTarget();v.setRenderTarget(ge),v.clear();const He=v.toneMapping;v.toneMapping=rn,Jt(D,K,te),v.toneMapping=He,ct.updateMultisampleRenderTarget(ge),ct.updateRenderTargetMipmap(ge),v.setRenderTarget(ae)}function Jt(D,K,te){const X=K.isScene===!0?K.overrideMaterial:null;for(let ae=0,He=D.length;ae<He;ae++){const Je=D[ae],nt=Je.object,at=Je.geometry,dt=X===null?Je.material:X,ht=Je.group;nt.layers.test(te.layers)&&Lt(nt,K,te,at,dt,ht)}}function Lt(D,K,te,X,ae,He){D.onBeforeRender(v,K,te,X,ae,He),D.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ae.onBeforeRender(v,K,te,X,D,He),ae.transparent===!0&&ae.side===pn&&ae.forceSinglePass===!1?(ae.side=xi,ae.needsUpdate=!0,v.renderBufferDirect(te,K,X,ae,D,He),ae.side=vn,ae.needsUpdate=!0,v.renderBufferDirect(te,K,X,ae,D,He),ae.side=pn):v.renderBufferDirect(te,K,X,ae,D,He),D.onAfterRender(v,K,te,X,ae,He)}function si(D,K,te){K.isScene!==!0&&(K=me);const X=st.get(D),ae=g.state.lights,He=g.state.shadowsArray,Je=ae.state.version,nt=At.getParameters(D,ae.state,He,K,te),at=At.getProgramCacheKey(nt);let dt=X.programs;X.environment=D.isMeshStandardMaterial?K.environment:null,X.fog=K.fog,X.envMap=(D.isMeshStandardMaterial?Ft:it).get(D.envMap||X.environment),dt===void 0&&(D.addEventListener("dispose",Qe),dt=new Map,X.programs=dt);let ht=dt.get(at);if(ht!==void 0){if(X.currentProgram===ht&&X.lightsStateVersion===Je)return Mi(D,nt),ht}else nt.uniforms=At.getUniforms(D),D.onBuild(te,nt,v),D.onBeforeCompile(nt,v),ht=At.acquireProgram(nt,at),dt.set(at,ht),X.uniforms=nt.uniforms;const rt=X.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(rt.clippingPlanes=I.uniform),Mi(D,nt),X.needsLights=qs(D),X.lightsStateVersion=Je,X.needsLights&&(rt.ambientLightColor.value=ae.state.ambient,rt.lightProbe.value=ae.state.probe,rt.directionalLights.value=ae.state.directional,rt.directionalLightShadows.value=ae.state.directionalShadow,rt.spotLights.value=ae.state.spot,rt.spotLightShadows.value=ae.state.spotShadow,rt.rectAreaLights.value=ae.state.rectArea,rt.ltc_1.value=ae.state.rectAreaLTC1,rt.ltc_2.value=ae.state.rectAreaLTC2,rt.pointLights.value=ae.state.point,rt.pointLightShadows.value=ae.state.pointShadow,rt.hemisphereLights.value=ae.state.hemi,rt.directionalShadowMap.value=ae.state.directionalShadowMap,rt.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,rt.spotShadowMap.value=ae.state.spotShadowMap,rt.spotLightMatrix.value=ae.state.spotLightMatrix,rt.spotLightMap.value=ae.state.spotLightMap,rt.pointShadowMap.value=ae.state.pointShadowMap,rt.pointShadowMatrix.value=ae.state.pointShadowMatrix);const Dt=ht.getUniforms(),$t=Ds.seqWithValue(Dt.seq,rt);return X.currentProgram=ht,X.uniformsList=$t,ht}function Mi(D,K){const te=st.get(D);te.outputEncoding=K.outputEncoding,te.instancing=K.instancing,te.skinning=K.skinning,te.morphTargets=K.morphTargets,te.morphNormals=K.morphNormals,te.morphColors=K.morphColors,te.morphTargetsCount=K.morphTargetsCount,te.numClippingPlanes=K.numClippingPlanes,te.numIntersection=K.numClipIntersection,te.vertexAlphas=K.vertexAlphas,te.vertexTangents=K.vertexTangents,te.toneMapping=K.toneMapping}function es(D,K,te,X,ae){K.isScene!==!0&&(K=me),ct.resetTextureUnits();const He=K.fog,Je=X.isMeshStandardMaterial?K.environment:null,nt=A===null?v.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:Gn,at=(X.isMeshStandardMaterial?Ft:it).get(X.envMap||Je),dt=X.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ht=!!X.normalMap&&!!te.attributes.tangent,rt=!!te.morphAttributes.position,Dt=!!te.morphAttributes.normal,$t=!!te.morphAttributes.color,Si=X.toneMapped?v.toneMapping:rn,Ui=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Nt=Ui!==void 0?Ui.length:0,ut=st.get(X),br=g.state.lights;if(ce===!0&&(ye===!0||D!==F)){const Qt=D===F&&X.id===L;I.setState(X,D,Qt)}let Ot=!1;X.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==br.state.version||ut.outputEncoding!==nt||ae.isInstancedMesh&&ut.instancing===!1||!ae.isInstancedMesh&&ut.instancing===!0||ae.isSkinnedMesh&&ut.skinning===!1||!ae.isSkinnedMesh&&ut.skinning===!0||ut.envMap!==at||X.fog===!0&&ut.fog!==He||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==I.numPlanes||ut.numIntersection!==I.numIntersection)||ut.vertexAlphas!==dt||ut.vertexTangents!==ht||ut.morphTargets!==rt||ut.morphNormals!==Dt||ut.morphColors!==$t||ut.toneMapping!==Si||Oe.isWebGL2===!0&&ut.morphTargetsCount!==Nt)&&(Ot=!0):(Ot=!0,ut.__version=X.version);let Oi=ut.currentProgram;Ot===!0&&(Oi=si(X,K,ae));let Mr=!1,qi=!1,qn=!1;const gt=Oi.getUniforms(),ai=ut.uniforms;if(Re.useProgram(Oi.program)&&(Mr=!0,qi=!0,qn=!0),X.id!==L&&(L=X.id,qi=!0),Mr||F!==D){if(gt.setValue(z,"projectionMatrix",D.projectionMatrix),Oe.logarithmicDepthBuffer&&gt.setValue(z,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),F!==D&&(F=D,qi=!0,qn=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const Qt=gt.map.cameraPosition;Qt!==void 0&&Qt.setValue(z,Q.setFromMatrixPosition(D.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&gt.setValue(z,"isOrthographic",D.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||ae.isSkinnedMesh)&&gt.setValue(z,"viewMatrix",D.matrixWorldInverse)}if(ae.isSkinnedMesh){gt.setOptional(z,ae,"bindMatrix"),gt.setOptional(z,ae,"bindMatrixInverse");const Qt=ae.skeleton;Qt&&(Oe.floatVertexTextures?(Qt.boneTexture===null&&Qt.computeBoneTexture(),gt.setValue(z,"boneTexture",Qt.boneTexture,ct),gt.setValue(z,"boneTextureSize",Qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const sn=te.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0&&Oe.isWebGL2===!0)&&be.update(ae,te,Oi),(qi||ut.receiveShadow!==ae.receiveShadow)&&(ut.receiveShadow=ae.receiveShadow,gt.setValue(z,"receiveShadow",ae.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ai.envMap.value=at,ai.flipEnvMap.value=at.isCubeTexture&&at.isRenderTargetTexture===!1?-1:1),qi&&(gt.setValue(z,"toneMappingExposure",v.toneMappingExposure),ut.needsLights&&Ws(ai,qn),He&&X.fog===!0&&Tt.refreshFogUniforms(ai,He),Tt.refreshMaterialUniforms(ai,X,he,W,ge),Ds.upload(z,ut.uniformsList,ai,ct)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ds.upload(z,ut.uniformsList,ai,ct),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&gt.setValue(z,"center",ae.center),gt.setValue(z,"modelViewMatrix",ae.modelViewMatrix),gt.setValue(z,"normalMatrix",ae.normalMatrix),gt.setValue(z,"modelMatrix",ae.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Qt=X.uniformsGroups;for(let Sr=0,Er=Qt.length;Sr<Er;Sr++)if(Oe.isWebGL2){const Tr=Qt[Sr];fe.update(Tr,Oi),fe.bind(Tr,Oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Oi}function Ws(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function qs(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(D,K,te){st.get(D.texture).__webglTexture=K,st.get(D.depthTexture).__webglTexture=te;const X=st.get(D);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=te===void 0,X.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,K){const te=st.get(D);te.__webglFramebuffer=K,te.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(D,K=0,te=0){A=D,T=K,P=te;let X=!0,ae=null,He=!1,Je=!1;if(D){const at=st.get(D);at.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(z.FRAMEBUFFER,null),X=!1):at.__webglFramebuffer===void 0?ct.setupRenderTarget(D):at.__hasExternalTextures&&ct.rebindTextures(D,st.get(D.texture).__webglTexture,st.get(D.depthTexture).__webglTexture);const dt=D.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(Je=!0);const ht=st.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(ae=ht[K],He=!0):Oe.isWebGL2&&D.samples>0&&ct.useMultisampledRTT(D)===!1?ae=st.get(D).__webglMultisampledFramebuffer:ae=ht,u.copy(D.viewport),q.copy(D.scissor),R=D.scissorTest}else u.copy(j).multiplyScalar(he).floor(),q.copy(oe).multiplyScalar(he).floor(),R=ve;if(Re.bindFramebuffer(z.FRAMEBUFFER,ae)&&Oe.drawBuffers&&X&&Re.drawBuffers(D,ae),Re.viewport(u),Re.scissor(q),Re.setScissorTest(R),He){const at=st.get(D.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+K,at.__webglTexture,te)}else if(Je){const at=st.get(D.texture),dt=K||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,at.__webglTexture,te||0,dt)}L=-1},this.readRenderTargetPixels=function(D,K,te,X,ae,He,Je){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=st.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Je!==void 0&&(nt=nt[Je]),nt){Re.bindFramebuffer(z.FRAMEBUFFER,nt);try{const at=D.texture,dt=at.format,ht=at.type;if(dt!==Fi&&ke.convert(dt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const rt=ht===$r&&(Fe.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&Fe.has("EXT_color_buffer_float"));if(ht!==kn&&ke.convert(ht)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ht===On&&(Oe.isWebGL2||Fe.has("OES_texture_float")||Fe.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-X&&te>=0&&te<=D.height-ae&&z.readPixels(K,te,X,ae,ke.convert(dt),ke.convert(ht),He)}finally{const at=A!==null?st.get(A).__webglFramebuffer:null;Re.bindFramebuffer(z.FRAMEBUFFER,at)}}},this.copyFramebufferToTexture=function(D,K,te=0){const X=Math.pow(2,-te),ae=Math.floor(K.image.width*X),He=Math.floor(K.image.height*X);ct.setTexture2D(K,0),z.copyTexSubImage2D(z.TEXTURE_2D,te,0,0,D.x,D.y,ae,He),Re.unbindTexture()},this.copyTextureToTexture=function(D,K,te,X=0){const ae=K.image.width,He=K.image.height,Je=ke.convert(te.format),nt=ke.convert(te.type);ct.setTexture2D(te,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,te.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,te.unpackAlignment),K.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,X,D.x,D.y,ae,He,Je,nt,K.image.data):K.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,X,D.x,D.y,K.mipmaps[0].width,K.mipmaps[0].height,Je,K.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,X,D.x,D.y,Je,nt,K.image),X===0&&te.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(D,K,te,X,ae=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const He=D.max.x-D.min.x+1,Je=D.max.y-D.min.y+1,nt=D.max.z-D.min.z+1,at=ke.convert(X.format),dt=ke.convert(X.type);let ht;if(X.isData3DTexture)ct.setTexture3D(X,0),ht=z.TEXTURE_3D;else if(X.isDataArrayTexture)ct.setTexture2DArray(X,0),ht=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const rt=z.getParameter(z.UNPACK_ROW_LENGTH),Dt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),$t=z.getParameter(z.UNPACK_SKIP_PIXELS),Si=z.getParameter(z.UNPACK_SKIP_ROWS),Ui=z.getParameter(z.UNPACK_SKIP_IMAGES),Nt=te.isCompressedTexture?te.mipmaps[0]:te.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Nt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Nt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,D.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,D.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,D.min.z),te.isDataTexture||te.isData3DTexture?z.texSubImage3D(ht,ae,K.x,K.y,K.z,He,Je,nt,at,dt,Nt.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(ht,ae,K.x,K.y,K.z,He,Je,nt,at,Nt.data)):z.texSubImage3D(ht,ae,K.x,K.y,K.z,He,Je,nt,at,dt,Nt),z.pixelStorei(z.UNPACK_ROW_LENGTH,rt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Dt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$t),z.pixelStorei(z.UNPACK_SKIP_ROWS,Si),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ui),ae===0&&X.generateMipmaps&&z.generateMipmap(ht),Re.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?ct.setTextureCube(D,0):D.isData3DTexture?ct.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ct.setTexture2DArray(D,0):ct.setTexture2D(D,0),Re.unbindTexture()},this.resetState=function(){T=0,P=0,A=null,Re.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(gu.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(n){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!n}}});class u_ extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class f_ extends Qr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kl,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class h_ extends li{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ga=new kt,ul=new Z,fl=new Z;class d_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bo,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ul.setFromMatrixPosition(e.matrixWorld),t.position.copy(ul),fl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fl),t.updateMatrixWorld(),Ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const hl=new kt,kr=new Z,Ha=new Z;class p_ extends d_{constructor(){super(new _i(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),kr.setFromMatrixPosition(e.matrixWorld),i.position.copy(kr),Ha.copy(i.position),Ha.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ha),i.updateMatrixWorld(),r.makeTranslation(-kr.x,-kr.y,-kr.z),hl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl)}}class dl extends h_{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new p_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}window.$=sh;var vu=document.getElementById("menu"),_u=document.getElementById("menu-items"),m_=document.getElementById("menu-toggle");const g_=document.querySelectorAll(".content-list li");$("#animateBg");var to=0,pl="",qr=!0;$("#projects .content").css("opacity","100%");$("#projects .content").css("filter","blur(0px)");$(".expand-menu").css("transform","translate(0,1000px)");m_.addEventListener("change",()=>{to=0,v_()});function v_(){if(vu.classList.toggle("openHam"),_u.classList.toggle("expand-menu-open"),$(".mainPlayground").toggleClass("behind"),qr){$(".mainPlayground").attr("style","opacity: 0;"),$(".expand-menu").css({transform:""});for(const n of g_)to+=100,pl=to.toString()+"ms",n.setAttribute("style","animation-name: menuAnimate;animation-delay:"+pl);$(".content-list").children().css("animation-name","menuAnimate"),$(".contact").children().css("animation-delay","0.5s"),$(".contact").children().css("animation-name","menuAnimate"),qr=!1}else qr=!0,$(".mainPlayground").attr("style","opacity: 1;"),$(".contact").children().css("animation-delay","0s"),$(".contact").children().css("animation-name","menuAnimateReverse"),$(".content-list").children().css("animation-delay","0s"),$(".content-list").children().css("animation-name","menuAnimateReverse")}function __(){qr||(qr=!0,vu.classList.toggle("openHam"),_u.classList.toggle("expand-menu-open"),$(".contact").children().css("animation-delay","0s"),$(".contact").children().css("animation-name","menuAnimateReverse"),$(".content-list").children().css("animation-delay","0s"),$(".content-list").children().css("animation-name","menuAnimateReverse"))}$("li a").hover(function(){$(this).attr("data-before",$(this).text())},function(){$(this).attr("data-before","")});$(document).on("mouseenter","#projects .content",function(){console.log("FUCKING WORK BITCH"),console.log($(this));var n="hehe";n=$(this).attr("id"),console.log(n),$("."+n).addClass("bg-open").removeClass(n),$(".content").css("filter","blur(2.5px)"),$(this).css("filter","blur(0)"),$(".content").css("opacity","70%"),$(this).css("opacity","100%");var e=$(this).position().top,t=0;t=$(this).outerHeight(!0),$(".bg-open").css("top",e),$(".bg-open").css("height",t),$(".bg-open").css("background-color","#e6e2de")});$(document).on("mouseleave","#projects .content",function(){var n="hehe";n=$(this).attr("id"),$(".bg-open").addClass(n).removeClass("bg-open"),$(".content").css("opacity","100%"),$(".content").css("filter","blur(0px)")});$(document).on("click","#sendBtn",function(){var n=$("#name").val(),e=$("#weirdEmail").val(),t=$("#message").val(),i="Name:"+n+"<br/>Email:"+e+"<br/>Message:"+t;alert(e),Email.send({Host:"smtp.elasticemail.com",Username:"wokeupbrooao@gmail.com",Password:"C8BC2632F40CFE3EC6FCD2D0B4F74DAC5A03sdada",To:"wokeupbrooao@gmail.com",From:e,Subject:"Form submitted from website",Body:i}).then(r=>alert(r))});var Va="#playgroundContent";$(document).on("click",".mainPlayground ul li",function(){$(Va).css("opacity","0");var n=$(this).text().toLowerCase().substring(2);switch(console.log(n),n){case"playground":x_(),Va="#playgroundContent";break;case"inverse kinematics":y_(),Va="#inverseKinematics";break}});function x_(){$("#playgroundContent").css("opacity","1")}function y_(){$("#inverseKinematics").css("opacity","1")}$("#email").click(function(){var n=$(this).text();b_(n),console.log(n)});function b_(n){navigator.clipboard.writeText(n)}function M_(n,e){const t=document.getElementById("text");t.innerHTML=n,n=="PLAYGROUND"&&(t.style.fontSize="12vw");const i=t.innerHTML.split("");t.innerHTML=i.map(a=>`<span>${a}</span>`).join(""),console.log("function is called");var r=_t.timeline({easing:"easeOutExpo",duration:750});r.set(".page-transition ",{translateY:function(){return 0}}),r.add({targets:".page-transition",keyframes:[{height:function(){return 0},duration:0},{height:function(){return $(window).height()}}],duration:1e3,easing:"cubicBezier(0.645, 0.045, 0.355, 1.000)"}),r.add({targets:"#text span",opacity:[0,1],translateY:function(){return $(".page-transition .text-container").height()},duration:500,easing:"cubicBezier(0.645, 0.045, 0.355, 1.000)",delay:_t.stagger(60)},"-=100"),r.add({targets:"#text span",opacity:[1,0],translateY:function(){return $(".page-transition .text-container").height()*2},duration:400,easing:"cubicBezier(0.575, 0.095, 0.855, 0.060)",delay:_t.stagger(80,{direction:"reverse"})}),r.finished.then(e)}function Gr(n){$(".content").css("pointer-events","none");var e=_t.timeline({easing:"easeOutExpo",duration:750});e.set(".page-transition ",{translateY:function(){return 0},height:function(){return $(window).height()}}),e.set("#hero",{translateY:function(){return-$("#hero").height()}}),e.set("#projects .content",{translateY:function(){return-$("#projects .content").height()/2}}),e.add({targets:".page-transition",translateY:function(){return $(window).height()},height:0,duration:1e3,easing:"cubicBezier(0.645, 0.045, 0.355, 1.000)"}),e.add({targets:".animate",opacity:[0,1],duration:1e3}),(n=="home"||n==null)&&e.add({targets:"#hero",translateY:function(){return-($("#hero").height()/2)},duration:2e3},"-=1000"),n=="projects"&&e.add({targets:".content",opacity:[0,1],translateY:function(){return 0},duration:900,delay:_t.stagger(100)},"-=1100"),e.finished.then(function(){$(".content").css("pointer-events","auto")})}function S_(n,e){const t=document.getElementById("text");t.innerHTML=n;const i=t.innerHTML.split("");t.innerHTML=i.map(a=>`<span>${a}</span>`).join("");var r=_t.timeline({easing:"easeOutExpo",duration:750});r.set(".page-transition ",{translateY:function(){return 0}}),r.add({targets:".page-transition",keyframes:[{height:function(){return 0},duration:0},{height:function(){return $(window).height()}}],duration:1500,easing:"cubicBezier(0.645, 0.045, 0.355, 1.000)"}),r.add({targets:"#text span",opacity:[0,1],translateY:function(){return $(".page-transition .text-container").height()},duration:500,easing:"cubicBezier(0.645, 0.045, 0.355, 1.000)",delay:_t.stagger(60)},"-=100"),r.add({targets:"#text span",opacity:[1,0],translateY:function(){return $(".page-transition .text-container").height()*2},duration:400,easing:"cubicBezier(0.575, 0.095, 0.855, 0.060)",delay:_t.stagger(80,{direction:"reverse"})}),r.add({targets:".page-transition",translateY:function(){return $(window).height()},height:0,duration:1e3,easing:"cubicBezier(0.645, 0.045, 0.355, 1.000)"}),r.add({targets:"#loadOverlay",opacity:[1,0],duration:1e3},"-=600"),r.finished.then(e)}var Rs,sr,Cn,Ls,ml,ar,Us=.15,E_=Math.round(window.innerWidth*Us),T_=Math.round(window.innerHeight*Us),w_="courier new, monospace",io=!0;ql.hooks.beforeEnter(n=>{console.log(n.next.namespace),__(),io=!0});$(function(){ql.init({sync:!0,transitions:[{async afterLeave(n){const e=this.async();var t="gay";t=n.next.container.querySelector(".page-transition .text-container .text").innerHTML,t=="PROJECTS"&&(n.next.container.querySelector("#projects").style.pointerEvents="none",console.log(n.next.container)),M_(t,()=>{console.log("done"),n.next.container.querySelector("#loadOverlay").style.zIndex="-999",e()})},async enter(n){var e=n.next.namespace.toString();console.log("THis page"+e),$(".content").css("opacity","100%"),$(".content").css("filter","blur(0px)"),n.next.container.querySelector("#projects")!=null&&(n.next.container.querySelector("#projects").style.pointerEvents="none"),Gr(e)},async once(n){const e=this.async();var t="gay";t=n.next.container.querySelector(".page-transition .text-container .text").innerHTML,n.next.namespace=="home"&&S_(t,()=>{console.log("done"),n.next.container.querySelector("#loadOverlay").style.zIndex="-999",e()})}}],views:[{namespace:"home",async beforeEnter(n){$(".logo").attr("href","index.html"),$(".content-list #art a").attr("href","illustrations/art.html"),$(".content-list #projects a").attr("href","projects/projects.html"),$(".content-list #about a").attr("href","about.html"),$(".content-list #playground a").attr("href","playground.html"),console.log("before enter home"),io=!1,e(),r();function e(){console.log("Run animation"),sr=new u_,Rs=new _i(75,window.innerWidth/window.innerHeight,.1,1e3),Cn=new gu({canvas:n.next.container.querySelector("#bg")}),Cn.setSize(window.innerWidth,window.innerHeight),Cn.setClearColor(15131358),ml=n.next.container.querySelector("#ascii"),ar=ml.getContext("2d",{willReadFrequently:!0}),ar.canvas.width=window.innerWidth,ar.canvas.height=window.innerHeight,Rs.position.setZ(5);var a=new dl(15131358,.8);a.position.set(500,500,500),sr.add(a);var a=new dl(15131358,.5);a.position.set(-500,-500,-200),sr.add(a);const c=new xr(4,4,4),l=new f_({color:15790320});Ls=new tn(c,l),sr.add(Ls),Cn.render(sr,Rs);var f=window.innerWidth*Us,d=window.innerHeight*Us;f=Math.round(f),d=Math.round(d),t(f,d),i(Cn.domElement,f,d,asciiTable)}function t(a,c){var l=n.next.container.querySelector("#asciiTable"),f=l.style;f.position="fixed",f.top="0",f.left="0",f.zIndex="-5",f.display="inline",f.width=a+"px",f.height=c+"px",f.margin="0px",f.padding="0px",f.letterSpacing="2px",f.fontFamily=w_,f.fontSize="10px",f.lineHeight="10px",f.textAlign="left",f.textDecoration="none",f.color="#333333"}function i(a,c,l,f){var d=".,:;-)fL8#08@".split(""),p="",_=a;ar.clearRect(0,0,c,l),ar.drawImage(_,0,0,c,l);for(var g=ar.getImageData(0,0,c,l).data,M=0;M<l;M++){for(var S=0;S<c;S++){var v=(M*c+S)*4,x=g[v],T=g[v+1],P=g[v+2];g[v+3];var A=(.3*x+.59*T+.11*P)/255,L=Math.floor((1-A)*(d.length-1)),F=d[L];F===void 0&&(F="&nbsp;"),p+=F}p+="<br/>"}f.innerHTML="<tr><td>"+p+"</td></tr>"}function r(){io||(requestAnimationFrame(r),Ls.rotation.x+=.003,Ls.rotation.y+=.003,Cn.render(sr,Rs),i(Cn.domElement,E_,T_,asciiTable))}}},{namespace:"contact",async beforeEnter(n){$(".logo").attr("href","index.html"),$(".content-list #project a").attr("href","projects/project.html"),$(".content-list #art a").attr("href","illustrations/art.html"),$(".content-list #about a").attr("href","about.html"),$(".content-list #playground a").attr("href","playground.html"),console.log("wtf"),n.next.container.querySelector("#loadOverlay").style.zIndex="-999",Gr("contact")}},{namespace:"projects",async beforeEnter(n){$(".logo").attr("href","../index.html"),$(".content-list #projects a").attr("href","projects.html"),$(".content-list #art a").attr("href","../illustrations/art.html"),$(".content-list #about a").attr("href","../about.html"),$(".content-list #playground a").attr("href","../playground.html"),console.log("fuck me projects"),n.next.container.querySelector("#loadOverlay").style.zIndex="-999",Gr("projects")}},{namespace:"art",async beforeEnter(n){$(".logo").attr("href","../index.html"),$(".content-list #art a").attr("href","art.html"),$(".content-list #projects a").attr("href","../projects/projects.html"),$(".content-list #about a").attr("href","../about.html"),$(".content-list #playground a").attr("href","../playground.html"),console.log("fuck me "),n.next.container.querySelector("#loadOverlay").style.zIndex="-999",Gr("art")}},{namespace:"playground",async beforeEnter(n){$(".logo").attr("href","index.html"),$(".content-list #art a").attr("href","illustrations/art.html"),$(".content-list #projects a").attr("href","projects/projects.html"),$(".content-list #about a").attr("href","about.html"),$(".content-list #playground a").attr("href","playground.html"),console.log("fuck me "),n.next.container.querySelector("#loadOverlay").style.zIndex="-999",Gr("art")}}]})});

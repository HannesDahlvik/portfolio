(function(){const P=document.createElement("link").relList;if(P&&P.supports&&P.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function b(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=b(t);fetch(t.href,n)}})();var ie=document.getElementsByTagName("head")[0],X=document.createElement("link");X.rel="stylesheet";X.type="text/css";X.href="https://unpkg.com/phosphor-icons@1.4.2/src/css/icons.css";ie.appendChild(X);var ae=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ue(O){return O&&O.__esModule&&Object.prototype.hasOwnProperty.call(O,"default")?O.default:O}var ne={},ce={get exports(){return ne},set exports(O){ne=O}};(function(O,P){(function(b,a){O.exports=a()})(ae,function(){return function(b){function a(n){if(t[n])return t[n].exports;var c=t[n]={exports:{},id:n,loaded:!1};return b[n].call(c.exports,c,c.exports,a),c.loaded=!0,c.exports}var t={};return a.m=b,a.c=t,a.p="dist/",a(0)}([function(b,a,t){function n(r){return r&&r.__esModule?r:{default:r}}var c=Object.assign||function(r){for(var x=1;x<arguments.length;x++){var T=arguments[x];for(var $ in T)Object.prototype.hasOwnProperty.call(T,$)&&(r[$]=T[$])}return r},v=t(1),w=(n(v),t(6)),i=n(w),p=t(7),u=n(p),d=t(8),s=n(d),m=t(9),j=n(m),S=t(10),B=n(S),J=t(11),Q=n(J),R=t(14),K=n(R),_=[],G=!1,y={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},L=function(){var r=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(r&&(G=!0),G)return _=(0,Q.default)(_,y),(0,B.default)(_,y.once),_},H=function(){_=(0,K.default)(),L()},o=function(){_.forEach(function(r,x){r.node.removeAttribute("data-aos"),r.node.removeAttribute("data-aos-easing"),r.node.removeAttribute("data-aos-duration"),r.node.removeAttribute("data-aos-delay")})},e=function(r){return r===!0||r==="mobile"&&j.default.mobile()||r==="phone"&&j.default.phone()||r==="tablet"&&j.default.tablet()||typeof r=="function"&&r()===!0},f=function(r){y=c(y,r),_=(0,K.default)();var x=document.all&&!window.atob;return e(y.disable)||x?o():(y.disableMutationObserver||s.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),y.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",y.easing),document.querySelector("body").setAttribute("data-aos-duration",y.duration),document.querySelector("body").setAttribute("data-aos-delay",y.delay),y.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?L(!0):y.startEvent==="load"?window.addEventListener(y.startEvent,function(){L(!0)}):document.addEventListener(y.startEvent,function(){L(!0)}),window.addEventListener("resize",(0,u.default)(L,y.debounceDelay,!0)),window.addEventListener("orientationchange",(0,u.default)(L,y.debounceDelay,!0)),window.addEventListener("scroll",(0,i.default)(function(){(0,B.default)(_,y.once)},y.throttleDelay)),y.disableMutationObserver||s.default.ready("[data-aos]",H),_)};b.exports={init:f,refresh:L,refreshHard:H}},function(b,a){},,,,,function(b,a){(function(t){function n(e,f,r){function x(l){var M=z,Y=q;return z=q=void 0,C=l,k=e.apply(Y,M)}function T(l){return C=l,h=setTimeout(I,f),F?x(l):k}function $(l){var M=l-E,Y=l-C,oe=f-M;return D?H(oe,A-Y):oe}function W(l){var M=l-E,Y=l-C;return E===void 0||M>=f||M<0||D&&Y>=A}function I(){var l=o();return W(l)?V(l):void(h=setTimeout(I,$(l)))}function V(l){return h=void 0,g&&z?x(l):(z=q=void 0,k)}function Z(){h!==void 0&&clearTimeout(h),C=0,z=E=q=h=void 0}function U(){return h===void 0?k:V(o())}function N(){var l=o(),M=W(l);if(z=arguments,q=this,E=l,M){if(h===void 0)return T(E);if(D)return h=setTimeout(I,f),x(E)}return h===void 0&&(h=setTimeout(I,f)),k}var z,q,A,k,h,E,C=0,F=!1,D=!1,g=!0;if(typeof e!="function")throw new TypeError(d);return f=p(f)||0,v(r)&&(F=!!r.leading,D="maxWait"in r,A=D?L(p(r.maxWait)||0,f):A,g="trailing"in r?!!r.trailing:g),N.cancel=Z,N.flush=U,N}function c(e,f,r){var x=!0,T=!0;if(typeof e!="function")throw new TypeError(d);return v(r)&&(x="leading"in r?!!r.leading:x,T="trailing"in r?!!r.trailing:T),n(e,f,{leading:x,maxWait:f,trailing:T})}function v(e){var f=typeof e>"u"?"undefined":u(e);return!!e&&(f=="object"||f=="function")}function w(e){return!!e&&(typeof e>"u"?"undefined":u(e))=="object"}function i(e){return(typeof e>"u"?"undefined":u(e))=="symbol"||w(e)&&y.call(e)==m}function p(e){if(typeof e=="number")return e;if(i(e))return s;if(v(e)){var f=typeof e.valueOf=="function"?e.valueOf():e;e=v(f)?f+"":f}if(typeof e!="string")return e===0?e:+e;e=e.replace(j,"");var r=B.test(e);return r||J.test(e)?Q(e.slice(2),r?2:8):S.test(e)?s:+e}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d="Expected a function",s=NaN,m="[object Symbol]",j=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,B=/^0b[01]+$/i,J=/^0o[0-7]+$/i,Q=parseInt,R=(typeof t>"u"?"undefined":u(t))=="object"&&t&&t.Object===Object&&t,K=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,_=R||K||Function("return this")(),G=Object.prototype,y=G.toString,L=Math.max,H=Math.min,o=function(){return _.Date.now()};b.exports=c}).call(a,function(){return this}())},function(b,a){(function(t){function n(o,e,f){function r(g){var l=N,M=z;return N=z=void 0,E=g,A=o.apply(M,l)}function x(g){return E=g,k=setTimeout(W,e),C?r(g):A}function T(g){var l=g-h,M=g-E,Y=e-l;return F?L(Y,q-M):Y}function $(g){var l=g-h,M=g-E;return h===void 0||l>=e||l<0||F&&M>=q}function W(){var g=H();return $(g)?I(g):void(k=setTimeout(W,T(g)))}function I(g){return k=void 0,D&&N?r(g):(N=z=void 0,A)}function V(){k!==void 0&&clearTimeout(k),E=0,N=h=z=k=void 0}function Z(){return k===void 0?A:I(H())}function U(){var g=H(),l=$(g);if(N=arguments,z=this,h=g,l){if(k===void 0)return x(h);if(F)return k=setTimeout(W,e),r(h)}return k===void 0&&(k=setTimeout(W,e)),A}var N,z,q,A,k,h,E=0,C=!1,F=!1,D=!0;if(typeof o!="function")throw new TypeError(u);return e=i(e)||0,c(f)&&(C=!!f.leading,F="maxWait"in f,q=F?y(i(f.maxWait)||0,e):q,D="trailing"in f?!!f.trailing:D),U.cancel=V,U.flush=Z,U}function c(o){var e=typeof o>"u"?"undefined":p(o);return!!o&&(e=="object"||e=="function")}function v(o){return!!o&&(typeof o>"u"?"undefined":p(o))=="object"}function w(o){return(typeof o>"u"?"undefined":p(o))=="symbol"||v(o)&&G.call(o)==s}function i(o){if(typeof o=="number")return o;if(w(o))return d;if(c(o)){var e=typeof o.valueOf=="function"?o.valueOf():o;o=c(e)?e+"":e}if(typeof o!="string")return o===0?o:+o;o=o.replace(m,"");var f=S.test(o);return f||B.test(o)?J(o.slice(2),f?2:8):j.test(o)?d:+o}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},u="Expected a function",d=NaN,s="[object Symbol]",m=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,B=/^0o[0-7]+$/i,J=parseInt,Q=(typeof t>"u"?"undefined":p(t))=="object"&&t&&t.Object===Object&&t,R=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,K=Q||R||Function("return this")(),_=Object.prototype,G=_.toString,y=Math.max,L=Math.min,H=function(){return K.Date.now()};b.exports=n}).call(a,function(){return this}())},function(b,a){function t(p){var u=void 0,d=void 0;for(u=0;u<p.length;u+=1)if(d=p[u],d.dataset&&d.dataset.aos||d.children&&t(d.children))return!0;return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function c(){return!!n()}function v(p,u){var d=window.document,s=n(),m=new s(w);i=u,m.observe(d.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function w(p){p&&p.forEach(function(u){var d=Array.prototype.slice.call(u.addedNodes),s=Array.prototype.slice.call(u.removedNodes),m=d.concat(s);if(t(m))return i()})}Object.defineProperty(a,"__esModule",{value:!0});var i=function(){};a.default={isSupported:c,ready:v}},function(b,a){function t(d,s){if(!(d instanceof s))throw new TypeError("Cannot call a class as a function")}function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(a,"__esModule",{value:!0});var c=function(){function d(s,m){for(var j=0;j<m.length;j++){var S=m[j];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(s,S.key,S)}}return function(s,m,j){return m&&d(s.prototype,m),j&&d(s,j),s}}(),v=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,w=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function d(){t(this,d)}return c(d,[{key:"phone",value:function(){var s=n();return!(!v.test(s)&&!w.test(s.substr(0,4)))}},{key:"mobile",value:function(){var s=n();return!(!i.test(s)&&!p.test(s.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),d}();a.default=new u},function(b,a){Object.defineProperty(a,"__esModule",{value:!0});var t=function(c,v,w){var i=c.node.getAttribute("data-aos-once");v>c.position?c.node.classList.add("aos-animate"):typeof i<"u"&&(i==="false"||!w&&i!=="true")&&c.node.classList.remove("aos-animate")},n=function(c,v){var w=window.pageYOffset,i=window.innerHeight;c.forEach(function(p,u){t(p,i+w,v)})};a.default=n},function(b,a,t){function n(i){return i&&i.__esModule?i:{default:i}}Object.defineProperty(a,"__esModule",{value:!0});var c=t(12),v=n(c),w=function(i,p){return i.forEach(function(u,d){u.node.classList.add("aos-init"),u.position=(0,v.default)(u.node,p.offset)}),i};a.default=w},function(b,a,t){function n(i){return i&&i.__esModule?i:{default:i}}Object.defineProperty(a,"__esModule",{value:!0});var c=t(13),v=n(c),w=function(i,p){var u=0,d=0,s=window.innerHeight,m={offset:i.getAttribute("data-aos-offset"),anchor:i.getAttribute("data-aos-anchor"),anchorPlacement:i.getAttribute("data-aos-anchor-placement")};switch(m.offset&&!isNaN(m.offset)&&(d=parseInt(m.offset)),m.anchor&&document.querySelectorAll(m.anchor)&&(i=document.querySelectorAll(m.anchor)[0]),u=(0,v.default)(i).top,m.anchorPlacement){case"top-bottom":break;case"center-bottom":u+=i.offsetHeight/2;break;case"bottom-bottom":u+=i.offsetHeight;break;case"top-center":u+=s/2;break;case"bottom-center":u+=s/2+i.offsetHeight;break;case"center-center":u+=s/2+i.offsetHeight/2;break;case"top-top":u+=s;break;case"bottom-top":u+=i.offsetHeight+s;break;case"center-top":u+=i.offsetHeight/2+s}return m.anchorPlacement||m.offset||isNaN(p)||(d=p),u+d};a.default=w},function(b,a){Object.defineProperty(a,"__esModule",{value:!0});var t=function(n){for(var c=0,v=0;n&&!isNaN(n.offsetLeft)&&!isNaN(n.offsetTop);)c+=n.offsetLeft-(n.tagName!="BODY"?n.scrollLeft:0),v+=n.offsetTop-(n.tagName!="BODY"?n.scrollTop:0),n=n.offsetParent;return{top:v,left:c}};a.default=t},function(b,a){Object.defineProperty(a,"__esModule",{value:!0});var t=function(n){return n=n||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(n,function(c){return{node:c}})};a.default=t}])})})(ce);const se=ue(ne),ee=document.querySelector("#scroll-button"),te=document.querySelector(".view.view__about"),re=document.querySelector("#age");document.addEventListener("DOMContentLoaded",()=>{se.init({duration:1e3});const O=de("2002/05/29");re&&(re.textContent=O)});ee==null||ee.addEventListener("click",()=>{scrollTo({behavior:"smooth",top:te==null?void 0:te.offsetTop})});function de(O){const P=new Date,b=new Date(O);let a=P.getFullYear()-b.getFullYear();const t=P.getMonth()-b.getMonth();return(t<0||t===0&&P.getDate()<b.getDate())&&a--,String(a)}
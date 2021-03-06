/*!
 * vue-carousel v0.13.1
 * (c) 2018 todd.beauchamp@ssense.com
 * https://github.com/ssense/vue-carousel#readme
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueCarousel=e():t.VueCarousel=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=45)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(7),i=n(35),o=n(11),a=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(1)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(0),i=n(10),o=n(23),a=n(25),s=n(37),u=function(t,e,n){var c,l,f,d,h=t&u.F,p=t&u.G,g=t&u.S,v=t&u.P,m=t&u.B,y=p?r:g?r[e]||(r[e]={}):(r[e]||{}).prototype,b=p?i:i[e]||(i[e]={}),x=b.prototype||(b.prototype={});for(c in p&&(n=e),n)f=((l=!h&&y&&void 0!==y[c])?y:n)[c],d=m&&l?s(f,r):v&&"function"==typeof f?s(Function.call,f):f,y&&a(y,c,f,t&u.U),b[c]!=f&&o(b,c,d),v&&x[c]!=f&&(x[c]=f)};r.core=i,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e,n){var r=n(40),i=n(27);t.exports=function(t){return r(i(t))}},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(39),i=n(28);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=o[0],s={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}n.r(e),n.d(e,"default",function(){return p});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,l=function(){},f=null,d="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,n,i){c=n,f=i||{};var a=r(t,e);return g(a),function(e){for(var n=[],i=0;i<a.length;i++){var s=a[i];(u=o[s.id]).refs--,n.push(u)}for(e?g(a=r(t,e)):a=[],i=0;i<n.length;i++){var u;if(0===(u=n[i]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete o[u.id]}}}}function g(t){for(var e=0;e<t.length;e++){var n=t[e],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(m(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(m(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function m(t){var e,n,r=document.querySelector("style["+d+'~="'+t.id+'"]');if(r){if(c)return l;r.parentNode.removeChild(r)}if(h){var i=u++;r=s||(s=v()),e=b.bind(null,r,i,!1),n=b.bind(null,r,i,!0)}else r=v(),e=function(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),f.ssrId&&t.setAttribute(d,e.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function b(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e,n){var r=n(67);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),(0,n(15).default)("1c9d4ce3",r,!1,{})},function(t,e,n){var r=n(69);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),(0,n(15).default)("6a175419",r,!1,{})},function(t,e,n){var r=n(73);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),(0,n(15).default)("07c48036",r,!1,{})},function(t,e,n){var r=n(75);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),(0,n(15).default)("6eff00d0",r,!1,{})},function(t,e){t.exports=!1},function(t,e,n){var r=n(22)("wks"),i=n(6),o=n(0).Symbol,a="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=a&&o[t]||(a?o:i)("Symbol."+t))}).store=r},function(t,e,n){var r=n(10),i=n(0),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(20)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(2),i=n(24);t.exports=n(4)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(0),i=n(23),o=n(5),a=n(6)("src"),s=Function.toString,u=(""+s).split("toString");n(10).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var c="function"==typeof n;c&&(o(n,"name")||i(n,"name",e)),t[e]!==n&&(c&&(o(n,a)||i(n,a,t[e]?""+t[e]:u.join(String(e)))),t===r?t[e]=n:s?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[a]||s.call(this)})},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(39),i=n(28).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e,n){var r=n(13),i=n(24),o=n(9),a=n(11),s=n(5),u=n(35),c=Object.getOwnPropertyDescriptor;e.f=n(4)?c:function(t,e){if(t=o(t),e=a(e,!0),u)try{return c(t,e)}catch(t){}if(s(t,e))return i(!r.f.call(t,e),t[e])}},function(t,e,n){"use strict";var r=n(0),i=n(5),o=n(26),a=n(62),s=n(11),u=n(1),c=n(30).f,l=n(31).f,f=n(2).f,d=n(64).trim,h=r.Number,p=h,g=h.prototype,v="Number"==o(n(43)(g)),m="trim"in String.prototype,y=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,r,i,o=(e=m?e.trim():d(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var a,u=e.slice(2),c=0,l=u.length;c<l;c++)if((a=u.charCodeAt(c))<48||a>i)return NaN;return parseInt(u,r)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(v?u(function(){g.valueOf.call(n)}):"Number"!=o(n))?a(new p(y(e)),n,h):y(e)};for(var b,x=n(4)?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;x.length>P;P++)i(p,b=x[P])&&!i(h,b)&&f(h,b,l(p,b));h.prototype=g,g.constructor=h,n(25)(r,"Number",h)}},function(t,e,n){var r=n(0),i=n(10),o=n(20),a=n(34),s=n(2).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},function(t,e,n){e.f=n(21)},function(t,e,n){t.exports=!n(4)&&!n(1)(function(){return 7!=Object.defineProperty(n(36)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(3),i=n(0).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){var r=n(38);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(5),i=n(9),o=n(51)(!1),a=n(42)("IE_PROTO");t.exports=function(t,e){var n,s=i(t),u=0,c=[];for(n in s)n!=a&&r(s,n)&&c.push(n);for(;e.length>u;)r(s,n=e[u++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){var r=n(26);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(22)("keys"),i=n(6);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(7),i=n(55),o=n(28),a=n(42)("IE_PROTO"),s=function(){},u=function(){var t,e=n(36)("iframe"),r=o.length;for(e.style.display="none",n(56).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[o[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[a]=t):n=u(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(27);t.exports=function(t){return Object(r(t))}},function(t,e,n){t.exports=n(76)},function(t,e,n){n(33)("asyncIterator")},function(t,e,n){"use strict";var r=n(0),i=n(5),o=n(4),a=n(8),s=n(25),u=n(48).KEY,c=n(1),l=n(22),f=n(49),d=n(6),h=n(21),p=n(34),g=n(33),v=n(50),m=n(54),y=n(7),b=n(3),x=n(9),P=n(11),C=n(24),S=n(43),w=n(57),O=n(31),_=n(2),T=n(12),E=O.f,N=_.f,M=w.f,j=r.Symbol,k=r.JSON,A=k&&k.stringify,V=h("_hidden"),$=h("toPrimitive"),I={}.propertyIsEnumerable,L=l("symbol-registry"),W=l("symbols"),F=l("op-symbols"),R=Object.prototype,D="function"==typeof j,B=r.QObject,z=!B||!B.prototype||!B.prototype.findChild,U=o&&c(function(){return 7!=S(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=E(R,e);r&&delete R[e],N(t,e,n),r&&t!==R&&N(R,e,r)}:N,X=function(t){var e=W[t]=S(j.prototype);return e._k=t,e},Y=D&&"symbol"==typeof j.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof j},G=function(t,e,n){return t===R&&G(F,e,n),y(t),e=P(e,!0),y(n),i(W,e)?(n.enumerable?(i(t,V)&&t[V][e]&&(t[V][e]=!1),n=S(n,{enumerable:C(0,!1)})):(i(t,V)||N(t,V,C(1,{})),t[V][e]=!0),U(t,e,n)):N(t,e,n)},H=function(t,e){y(t);for(var n,r=v(e=x(e)),i=0,o=r.length;o>i;)G(t,n=r[i++],e[n]);return t},q=function(t){var e=I.call(this,t=P(t,!0));return!(this===R&&i(W,t)&&!i(F,t))&&(!(e||!i(this,t)||!i(W,t)||i(this,V)&&this[V][t])||e)},J=function(t,e){if(t=x(t),e=P(e,!0),t!==R||!i(W,e)||i(F,e)){var n=E(t,e);return!n||!i(W,e)||i(t,V)&&t[V][e]||(n.enumerable=!0),n}},K=function(t){for(var e,n=M(x(t)),r=[],o=0;n.length>o;)i(W,e=n[o++])||e==V||e==u||r.push(e);return r},Q=function(t){for(var e,n=t===R,r=M(n?F:x(t)),o=[],a=0;r.length>a;)!i(W,e=r[a++])||n&&!i(R,e)||o.push(W[e]);return o};D||(s((j=function(){if(this instanceof j)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===R&&e.call(F,n),i(this,V)&&i(this[V],t)&&(this[V][t]=!1),U(this,t,C(1,n))};return o&&z&&U(R,t,{configurable:!0,set:e}),X(t)}).prototype,"toString",function(){return this._k}),O.f=J,_.f=G,n(30).f=w.f=K,n(13).f=q,n(29).f=Q,o&&!n(20)&&s(R,"propertyIsEnumerable",q,!0),p.f=function(t){return X(h(t))}),a(a.G+a.W+a.F*!D,{Symbol:j});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)h(Z[tt++]);for(var et=T(h.store),nt=0;et.length>nt;)g(et[nt++]);a(a.S+a.F*!D,"Symbol",{for:function(t){return i(L,t+="")?L[t]:L[t]=j(t)},keyFor:function(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var e in L)if(L[e]===t)return e},useSetter:function(){z=!0},useSimple:function(){z=!1}}),a(a.S+a.F*!D,"Object",{create:function(t,e){return void 0===e?S(t):H(S(t),e)},defineProperty:G,defineProperties:H,getOwnPropertyDescriptor:J,getOwnPropertyNames:K,getOwnPropertySymbols:Q}),k&&a(a.S+a.F*(!D||c(function(){var t=j();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=e=r[1],(b(e)||void 0!==t)&&!Y(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Y(e))return e}),r[1]=e,A.apply(k,r)}}),j.prototype[$]||n(23)(j.prototype,$,j.prototype.valueOf),f(j,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},function(t,e,n){var r=n(6)("meta"),i=n(3),o=n(5),a=n(2).f,s=0,u=Object.isExtensible||function(){return!0},c=!n(1)(function(){return u(Object.preventExtensions({}))}),l=function(t){a(t,r,{value:{i:"O"+ ++s,w:{}}})},f=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!u(t))return"F";if(!e)return"E";l(t)}return t[r].i},getWeak:function(t,e){if(!o(t,r)){if(!u(t))return!0;if(!e)return!1;l(t)}return t[r].w},onFreeze:function(t){return c&&f.NEED&&u(t)&&!o(t,r)&&l(t),t}}},function(t,e,n){var r=n(2).f,i=n(5),o=n(21)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(12),i=n(29),o=n(13);t.exports=function(t){var e=r(t),n=i.f;if(n)for(var a,s=n(t),u=o.f,c=0;s.length>c;)u.call(t,a=s[c++])&&e.push(a);return e}},function(t,e,n){var r=n(9),i=n(52),o=n(53);t.exports=function(t){return function(e,n,a){var s,u=r(e),c=i(u.length),l=o(a,c);if(t&&n!=n){for(;c>l;)if((s=u[l++])!=s)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(41),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(41),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(26);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(2),i=n(7),o=n(12);t.exports=n(4)?Object.defineProperties:function(t,e){i(t);for(var n,a=o(e),s=a.length,u=0;s>u;)r.f(t,n=a[u++],e[n]);return t}},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(9),i=n(30).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return a.slice()}}(t):i(r(t))}},function(t,e,n){var r=n(8);r(r.S,"Math",{sign:n(59)})},function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,e,n){"use strict";var r=n(8),i=n(38),o=n(44),a=n(1),s=[].sort,u=[1,2,3];r(r.P+r.F*(a(function(){u.sort(void 0)})||!a(function(){u.sort(null)})||!n(61)(s)),"Array",{sort:function(t){return void 0===t?s.call(o(this)):s.call(o(this),i(t))}})},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},function(t,e,n){var r=n(3),i=n(63).set;t.exports=function(t,e,n){var o,a=e.constructor;return a!==n&&"function"==typeof a&&(o=a.prototype)!==n.prototype&&r(o)&&i&&i(t,o),t}},function(t,e,n){var r=n(3),i=n(7),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(37)(Function.call,n(31).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},function(t,e,n){var r=n(8),i=n(27),o=n(1),a=n(65),s="["+a+"]",u=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),l=function(t,e,n){var i={},s=o(function(){return!!a[t]()||"​"!="​"[t]()}),u=i[t]=s?e(f):a[t];n&&(i[n]=u),r(r.P+r.F*s,"String",i)},f=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){"use strict";var r=n(16);n.n(r).a},function(t,e,n){(t.exports=n(14)(!1)).push([t.i,'\n.VueCarousel-navigation-button[data-v-453ad8cd] {\n  position: absolute;\n  top: 50%;\n  box-sizing: border-box;\n  color: #000;\n  text-decoration: none;\n  appearance: none;\n  border: none;\n  background-color: transparent;\n  padding: 0;\n  cursor: pointer;\n  outline: none;\n}\n.VueCarousel-navigation-next[data-v-453ad8cd] {\n  right: 0;\n  transform: translateY(-50%) translateX(100%);\n  font-family: "system";\n}\n.VueCarousel-navigation-prev[data-v-453ad8cd] {\n  left: 0;\n  transform: translateY(-50%) translateX(-100%);\n  font-family: "system";\n}\n.VueCarousel-navigation--disabled[data-v-453ad8cd] {\n  opacity: 0.5;\n  cursor: default;\n}\n\n/* Define the "system" font family */\n@font-face {\n  font-family: system;\n  font-style: normal;\n  font-weight: 300;\n  src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"),\n    local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Symbol"),\n    local("Roboto-Light"), local("DroidSans"), local("Tahoma");\n}\n',""])},function(t,e,n){"use strict";var r=n(17);n.n(r).a},function(t,e,n){(t.exports=n(14)(!1)).push([t.i,"\n.VueCarousel-pagination[data-v-438fd353] {\n  width: 100%;\n  text-align: center;\n}\n.VueCarousel-dot-container[data-v-438fd353] {\n  display: inline-block;\n  margin: 0 auto;\n  padding: 0;\n}\n.VueCarousel-dot[data-v-438fd353] {\n  display: inline-block;\n  cursor: pointer;\n}\n.VueCarousel-dot-button[data-v-438fd353] {\n  appearance: none;\n  border: none;\n  background-color: transparent;\n  padding: 0;\n  border-radius: 100%;\n  outline: none;\n  cursor: pointer;\n}\n.VueCarousel-dot-button[data-v-438fd353]:focus {\n  outline: 1px solid lightblue;\n}\n",""])},function(t,e,n){var r=n(8);r(r.S+r.F,"Object",{assign:n(71)})},function(t,e,n){"use strict";var r=n(12),i=n(29),o=n(13),a=n(44),s=n(40),u=Object.assign;t.exports=!u||n(1)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function(t,e){for(var n=a(t),u=arguments.length,c=1,l=i.f,f=o.f;u>c;)for(var d,h=s(arguments[c++]),p=l?r(h).concat(l(h)):r(h),g=p.length,v=0;g>v;)f.call(h,d=p[v++])&&(n[d]=h[d]);return n}:u},function(t,e,n){"use strict";var r=n(18);n.n(r).a},function(t,e,n){(t.exports=n(14)(!1)).push([t.i,"\n.VueCarousel-slide {\n  flex-basis: inherit;\n  flex-grow: 0;\n  flex-shrink: 0;\n  user-select: none;\n  backface-visibility: hidden;\n  -webkit-touch-callout: none;\n  outline: none;\n}\n",""])},function(t,e,n){"use strict";var r=n(19);n.n(r).a},function(t,e,n){(t.exports=n(14)(!1)).push([t.i,"\n.VueCarousel {\n  position: relative;\n}\n.VueCarousel-wrapper {\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.VueCarousel-inner {\n  display: flex;\n  flex-direction: row;\n  backface-visibility: hidden;\n}\n.VueCarousel-inner--center {\n  justify-content: center;\n}\n",""])},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"VueCarousel"},[n("div",{ref:"VueCarousel-wrapper",staticClass:"VueCarousel-wrapper"},[n("div",{ref:"VueCarousel-inner",class:["VueCarousel-inner",{"VueCarousel-inner--center":t.isCenterModeEnabled}],style:{transform:"translate("+t.currentOffset+"px, 0)",transition:t.dragging?"none":t.transitionStyle,"ms-flex-preferred-size":t.slideWidth+"px","webkit-flex-basis":t.slideWidth+"px","flex-basis":t.slideWidth+"px",visibility:t.slideWidth?"visible":"hidden","padding-left":t.padding+"px","padding-right":t.padding+"px"},attrs:{role:"listbox"}},[t._t("default")],2)]),t._v(" "),t.paginationEnabled?n("pagination",{on:{paginationclick:function(e){t.goToPage(e,"pagination")}}}):t._e(),t._v(" "),t.navigationEnabled&&t.isNavigationRequired?n("navigation",{attrs:{clickTargetSize:t.navigationClickTargetSize,nextLabel:t.navigationNextLabel,prevLabel:t.navigationPrevLabel},on:{navigationclick:t.handleNavigation}}):t._e()],1)};r._withStripped=!0,n(46),n(47),n(58),n(60),n(32);var i={props:{autoplay:{type:Boolean,default:!1},autoplayTimeout:{type:Number,default:2e3},autoplayHoverPause:{type:Boolean,default:!0}},data:function(){return{autoplayInterval:null}},destroyed:function(){this.$isServer||(this.$el.removeEventListener("mouseenter",this.pauseAutoplay),this.$el.removeEventListener("mouseleave",this.startAutoplay))},methods:{pauseAutoplay:function(){this.autoplayInterval&&(this.autoplayInterval=clearInterval(this.autoplayInterval))},startAutoplay:function(){this.autoplay&&(this.autoplayInterval=setInterval(this.advancePage,this.autoplayTimeout))},restartAutoplay:function(){this.pauseAutoplay(),this.startAutoplay()}},mounted:function(){!this.$isServer&&this.autoplayHoverPause&&(this.$el.addEventListener("mouseenter",this.pauseAutoplay),this.$el.addEventListener("mouseleave",this.startAutoplay)),this.startAutoplay()}},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"VueCarousel-navigation"},[n("button",{staticClass:"VueCarousel-navigation-button VueCarousel-navigation-prev",class:{"VueCarousel-navigation--disabled":!t.canAdvanceBackward},style:"padding: "+t.clickTargetSize+"px; margin-right: -"+t.clickTargetSize+"px;",attrs:{type:"button","aria-label":"Previous page",role:"button"},domProps:{innerHTML:t._s(t.prevLabel)},on:{click:function(e){e.preventDefault(),t.triggerPageAdvance("backward")}}}),t._v(" "),n("button",{staticClass:"VueCarousel-navigation-button VueCarousel-navigation-next",class:{"VueCarousel-navigation--disabled":!t.canAdvanceForward},style:"padding: "+t.clickTargetSize+"px; margin-left: -"+t.clickTargetSize+"px;",attrs:{type:"button","aria-label":"Next page",role:"button"},domProps:{innerHTML:t._s(t.nextLabel)},on:{click:function(e){e.preventDefault(),t.triggerPageAdvance()}}})])};o._withStripped=!0;var a={name:"navigation",inject:["carousel"],props:{clickTargetSize:{type:Number,default:8},nextLabel:{type:String,default:"&#9654"},prevLabel:{type:String,default:"&#9664"}},computed:{canAdvanceForward:function(){return this.carousel.canAdvanceForward||!1},canAdvanceBackward:function(){return this.carousel.canAdvanceBackward||!1}},methods:{triggerPageAdvance:function(t){this.$emit("navigationclick",t)}}};function s(t,e,n,r,i,o,a,s){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:c}}n(66);var u=s(a,o,[],!1,null,"453ad8cd",null);u.options.__file="src/Navigation.vue";var c=u.exports,l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.carousel.pageCount>1,expression:"carousel.pageCount > 1"}],staticClass:"VueCarousel-pagination"},[n("ul",{staticClass:"VueCarousel-dot-container",attrs:{role:"tablist"}},t._l(t.paginationCount,function(e,r){return n("li",{key:e+"_"+r,staticClass:"VueCarousel-dot",class:{"VueCarousel-dot--active":t.isCurrentDot(r)},style:"\n        margin-top: "+2*t.carousel.paginationPadding+"px;\n        padding: "+t.carousel.paginationPadding+"px;\n      ",attrs:{"aria-hidden":"false",role:"presentation","aria-selected":t.isCurrentDot(r)?"true":"false"},on:{click:function(e){t.goToPage(r)}}},[n("button",{staticClass:"VueCarousel-dot-button",style:"\n          width: "+t.carousel.paginationSize+"px;\n          height: "+t.carousel.paginationSize+"px;\n          background: "+(t.isCurrentDot(r)?t.carousel.paginationActiveColor:t.carousel.paginationColor)+";\n        ",attrs:{type:"button",role:"button","aria-label":"`Item ${index}`",title:"Item "+r,tabindex:0}})])}))])};l._withStripped=!0;var f=(n(68),s({name:"pagination",inject:["carousel"],computed:{paginationCount:function(){return this.carousel.scrollPerPage?this.carousel.pageCount:this.carousel.slideCount-2}},methods:{goToPage:function(t){this.$emit("paginationclick",t)},isCurrentDot:function(t){return t===this.carousel.currentPage}}},l,[],!1,null,"438fd353",null));f.options.__file="src/Pagination.vue";var d=f.exports,h=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"VueCarousel-slide",class:{"VueCarousel-slide-active":this.isActive,"VueCarousel-slide-center":this.isCenter},attrs:{tabindex:"-1"}},[this._t("default")],2)};h._withStripped=!0,n(70);var p={name:"slide",data:function(){return{width:null}},inject:["carousel"],mounted:function(){this.$isServer||this.$el.addEventListener("dragstart",function(t){return t.preventDefault()}),this.$el.addEventListener(this.carousel.isTouch?"touchend":"mouseup",this.onTouchEnd)},computed:{activeSlides:function(){for(var t=this.carousel,e=t.currentPage,n=t.perPage,r=t.$children,i=(t.slideCount,[]),o=r.filter(function(t){return t.$el&&t.$el.className.indexOf("VueCarousel-slide")>=0}).map(function(t){return t._uid}),a=0;a<n;){var s=o[e*n+a];i.push(s),a++}return i},isActive:function(){return this.activeSlides.indexOf(this._uid)>=0},isCenter:function(){var t=this.carousel.perPage;return!(t%2==0||!this.isActive)&&this.activeSlides.indexOf(this._uid)===Math.floor(t/2)}},methods:{onTouchEnd:function(t){var e=this.carousel.isTouch&&t.changedTouches&&t.changedTouches.length>0?t.changedTouches[0].clientX:t.clientX,n=this.carousel.dragStartX-e;(0===this.carousel.minSwipeDistance||Math.abs(n)<this.carousel.minSwipeDistance)&&this.$emit("slideClick",Object.assign({},t.currentTarget.dataset))}}},g=(n(72),s(p,h,[],!1,null,null,null));g.options.__file="src/Slide.vue";var v=g.exports;function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var y={onwebkittransitionend:"webkitTransitionEnd",onmoztransitionend:"transitionend",onotransitionend:"oTransitionEnd otransitionend",ontransitionend:"transitionend"},b=function(){for(var t in y)if(t in window)return y[t]},x={name:"carousel",beforeUpdate:function(){this.computeCarouselWidth()},components:{Navigation:c,Pagination:d,Slide:v},data:function(){return{browserWidth:null,carouselWidth:0,currentPage:0,dragging:!1,dragMomentum:0,dragOffset:0,dragStartY:0,dragStartX:0,isTouch:"undefined"!=typeof window&&"ontouchstart"in window,offset:0,refreshRate:16,slideCount:0,transitionstart:"transitionstart",transitionend:"transitionend"}},mixins:[i],provide:function(){return{carousel:this}},props:{value:{type:Number},easing:{type:String,default:"ease"},minSwipeDistance:{type:Number,default:8},navigationClickTargetSize:{type:Number,default:8},mouseDrag:{type:Boolean,default:!0},navigationEnabled:{type:Boolean,default:!1},navigationNextLabel:{type:String,default:"&#9654"},navigationPrevLabel:{type:String,default:"&#9664"},paginationActiveColor:{type:String,default:"#000000"},paginationColor:{type:String,default:"#efefef"},paginationEnabled:{type:Boolean,default:!0},paginationPadding:{type:Number,default:10},paginationSize:{type:Number,default:10},perPage:{type:Number,default:2},perPageCustom:{type:Array},resistanceCoef:{type:Number,default:20},scrollPerPage:{type:Boolean,default:!0},speed:{type:Number,default:500},loop:{type:Boolean,default:!1},navigateTo:{type:[Number,Array],default:0},spacePadding:{type:Number,default:0},spacePaddingMaxOffsetFactor:{type:Number,default:0},centerMode:{type:Boolean,default:!1}},watch:{value:function(t){t!==this.currentPage&&(this.goToPage(t),this.render())},navigateTo:{immediate:!0,handler:function(t){var e=this;"object"===m(t)?(0==t[1]&&(this.dragging=!0,setTimeout(function(){e.dragging=!1},this.refreshRate)),this.$nextTick(function(){e.goToPage(t[0])})):this.$nextTick(function(){e.goToPage(t)})}},currentPage:function(t){this.$emit("pageChange",t),this.$emit("input",t)}},computed:{breakpointSlidesPerPage:function(){if(!this.perPageCustom)return this.perPage;var t=this.perPageCustom,e=this.browserWidth,n=t.sort(function(t,e){return t[0]>e[0]?-1:1}).filter(function(t){return e>=t[0]});return n[0]&&n[0][1]||this.perPage},canAdvanceForward:function(){return this.loop||this.offset<this.maxOffset},canAdvanceBackward:function(){return this.loop||this.currentPage>0},currentPerPage:function(){return!this.perPageCustom||this.$isServer?this.perPage:this.breakpointSlidesPerPage},currentOffset:function(){return this.isCenterModeEnabled?0:-1*(this.offset+this.dragOffset)},isHidden:function(){return this.carouselWidth<=0},maxOffset:function(){return this.slideWidth*(this.slideCount-this.currentPerPage)-this.spacePadding*this.spacePaddingMaxOffsetFactor},pageCount:function(){return this.scrollPerPage?Math.ceil(this.slideCount/this.currentPerPage):this.slideCount-2},slideWidth:function(){return(this.carouselWidth-2*this.spacePadding)/this.currentPerPage},isNavigationRequired:function(){return!(this.slideCount<=this.currentPerPage)},isCenterModeEnabled:function(){return!(!this.centerMode||this.isNavigationRequired)},transitionStyle:function(){return"".concat(this.speed/1e3,"s ").concat(this.easing," transform")},padding:function(){var t=this.spacePadding;return t>0&&t}},methods:{getNextPage:function(){return this.currentPage<this.pageCount-1?this.currentPage+1:this.loop?0:this.currentPage},getPreviousPage:function(){return this.currentPage>0?this.currentPage-1:this.loop?this.pageCount-1:this.currentPage},advancePage:function(t){t&&"backward"===t&&this.canAdvanceBackward?this.goToPage(this.getPreviousPage(),"navigation"):(!t||t&&"backward"!==t)&&this.canAdvanceForward&&this.goToPage(this.getNextPage(),"navigation")},attachMutationObserver:function(){var t=this,e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(e){var n={attributes:!0,data:!0};if(this.mutationObserver=new e(function(){t.$nextTick(function(){t.computeCarouselWidth()})}),this.$parent.$el)for(var r=this.$el.getElementsByClassName("VueCarousel-inner"),i=0;i<r.length;i++)this.mutationObserver.observe(r[i],n)}},handleNavigation:function(t){this.advancePage(t)},detachMutationObserver:function(){this.mutationObserver&&this.mutationObserver.disconnect()},getBrowserWidth:function(){return this.browserWidth=window.innerWidth,this.browserWidth},getCarouselWidth:function(){for(var t=this.$el.getElementsByClassName("VueCarousel-inner"),e=0;e<t.length;e++)t[e].clientWidth>0&&(this.carouselWidth=t[e].clientWidth||0);return this.carouselWidth},getSlideCount:function(){this.slideCount=this.$slots&&this.$slots.default&&this.$slots.default.filter(function(t){return t.tag&&t.tag.indexOf("slide")>-1}).length||0},goToPage:function(t){t>=0&&t<=this.pageCount&&(this.offset=this.scrollPerPage?Math.min(this.slideWidth*this.currentPerPage*t,this.maxOffset):Math.min(this.slideWidth*t,this.maxOffset),this.autoplay&&!this.autoplayHoverPause&&this.restartAutoplay(),this.currentPage=t)},onStart:function(t){document.addEventListener(this.isTouch?"touchend":"mouseup",this.onEnd,!0),document.addEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag,!0),this.startTime=t.timeStamp,this.dragging=!0,this.dragStartX=this.isTouch?t.touches[0].clientX:t.clientX,this.dragStartY=this.isTouch?t.touches[0].clientY:t.clientY},onEnd:function(t){this.autoplay&&!this.autoplayHoverPause&&this.restartAutoplay();var e=this.isTouch?t.changedTouches[0].clientX:t.clientX,n=this.dragStartX-e;if(this.dragMomentum=n/(t.timeStamp-this.startTime),0!==this.minSwipeDistance&&Math.abs(n)>=this.minSwipeDistance){var r=this.scrollPerPage?this.slideWidth*this.currentPerPage:this.slideWidth;this.dragOffset=this.dragOffset+Math.sign(n)*(r/2)}this.offset+=this.dragOffset,this.dragOffset=0,this.dragging=!1,this.render(),document.removeEventListener(this.isTouch?"touchend":"mouseup",this.onEnd,!0),document.removeEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag,!0)},onDrag:function(t){var e=this.isTouch?t.touches[0].clientX:t.clientX,n=this.isTouch?t.touches[0].clientY:t.clientY,r=this.dragStartX-e,i=this.dragStartY-n;if(!(this.isTouch&&Math.abs(r)<Math.abs(i))){t.stopImmediatePropagation(),this.dragOffset=r;var o=this.offset+this.dragOffset;o<0?this.dragOffset=-Math.sqrt(-this.resistanceCoef*this.dragOffset):o>this.maxOffset&&(this.dragOffset=Math.sqrt(this.resistanceCoef*this.dragOffset))}},onResize:function(){var t=this;this.computeCarouselWidth(),this.dragging=!0,this.render(),setTimeout(function(){t.dragging=!1},this.refreshRate)},render:function(){this.offset+=Math.max(1-this.currentPerPage,Math.min(Math.round(this.dragMomentum),this.currentPerPage-1))*this.slideWidth;var t=this.scrollPerPage?this.slideWidth*this.currentPerPage:this.slideWidth;this.offset=t*Math.round(this.offset/t),this.offset=Math.max(0,Math.min(this.offset,this.maxOffset)),this.currentPage=this.scrollPerPage?Math.round(this.offset/this.slideWidth/this.currentPerPage):Math.round(this.offset/this.slideWidth)},computeCarouselWidth:function(){this.getSlideCount(),this.getBrowserWidth(),this.getCarouselWidth(),this.setCurrentPageInBounds()},setCurrentPageInBounds:function(){if(!this.canAdvanceForward&&this.scrollPerPage){var t=this.pageCount-1;this.currentPage=t>=0?t:0,this.offset=Math.max(0,Math.min(this.offset,this.maxOffset))}},handleTransitionStart:function(){this.$emit("transitionStart")},handleTransitionEnd:function(){this.$emit("transitionEnd")}},mounted:function(){window.addEventListener("resize",function(t,e,n){var r;return function(){var i=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||t.apply(void 0)},e),i&&t.apply(void 0)}}(this.onResize,this.refreshRate)),(this.isTouch||this.mouseDrag)&&this.$refs["VueCarousel-wrapper"].addEventListener(this.isTouch?"touchstart":"mousedown",this.onStart),this.attachMutationObserver(),this.computeCarouselWidth(),this.transitionstart=b(),this.$refs["VueCarousel-inner"].addEventListener(this.transitionstart,this.handleTransitionStart),this.transitionend=b(),this.$refs["VueCarousel-inner"].addEventListener(this.transitionend,this.handleTransitionEnd),this.$emit("mounted")},beforeDestroy:function(){this.detachMutationObserver(),window.removeEventListener("resize",this.getBrowserWidth),this.$refs["VueCarousel-inner"].removeEventListener(this.transitionstart,this.handleTransitionStart),this.$refs["VueCarousel-inner"].removeEventListener(this.transitionend,this.handleTransitionEnd),this.$refs["VueCarousel-wrapper"].removeEventListener(this.isTouch?"touchstart":"mousedown",this.onStart)}},P=(n(74),s(x,r,[],!1,null,null,null));P.options.__file="src/Carousel.vue";var C=P.exports;n.d(e,"Carousel",function(){return C}),n.d(e,"Slide",function(){return v}),e.default={install:function(t){t.component("carousel",C),t.component("slide",v)}}}])});;// http://bl.ocks.org/hunzy/11110940
// https://bl.ocks.org/josiahdavis/7a02e811360ff00c4eef
// Auto-generated ticks
// - http://www.tothenew.com/blog/adjust-time-scale-representation-on-x-axis/
// Zoom
// - http://bl.ocks.org/oluckyman/6199145
// - https://bl.ocks.org/mbostock/1071269
// http://bl.ocks.org/eric-bunch/0bdef4942ac085a93fa6bd31452cd55c

var Chart = Vue.component('chart', {
	props: ['dataLoaded', 'slideCarouselToDate'],
	data: function() {
		return {
			chartData: [],
			chartAdded: false
		}
	},
	methods: {
		update: function(data) {
			// Format data for chart
			this.chartData = [];
			this.formatChartData(data);
			
			var that = this,
					svg = Object,
					margin = {
						top: 20,
						right: 0,
						bottom: 0,
						left: 25
					};
						
			var parseTime = d3.time.format('%b-%d-%Y');
			
			var getWidth = function() {
				var inset = margin.left + margin.right;
				var minScrWid = 1024 - inset;
				width = parseInt(d3.select('#progressChart').style('width'));
				return Math.max(width - inset, minScrWid);
			};
						
			var width = getWidth();
			var height = parseInt(d3.select('#progressChart').style('height')) - 50;
									
			// Define scales
			var xScale = d3.time.scale()
				.range([0, width])
				.domain(d3.extent(this.chartData[0].datapoints, function(d) { return d.date; }));
			var yScale = d3.scale.linear()
				.range([height, 0])
				.domain([0, 10]);
			// Define axes
			var xAxis = d3.svg.axis()
				.scale(xScale)
				.orient('bottom')
				.innerTickSize(-height - margin.top)
				.outerTickSize(0)
				.tickPadding(10)
				.tickFormat(d3.time.format('%b %d'));
			var yAxis = d3.svg.axis()
				.scale(yScale)
				.orient('left');
			// Define line properties
			var line = d3.svg.line()
				.interpolate('cardinal')
				.x(function(d) { return xScale(d['date']); })
				.y(function(d) { return yScale(d['attribute']); });		
						
			// If chart elements have been added...
			if (this.chartAdded) {
				// Update x-axis
				svg = d3.select('#progressChart');	
				svg.select('.o-axis--x').call(xAxis);
				// Update lines
				svg.selectAll('.o-line')
					.data(this.chartData)
					.attr('d', function(d) {return line(d.datapoints); })
			} else {
				// Define svg canvas
				svg = d3.select('#progressChart')
					.attr('width', width + margin.left + margin.right)
					.attr('height', height)
					.append('g')
					.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
				// Add x-axis
				svg.append('g')
					.attr('class', 'o-axis--x')
					.attr('transform', 'translate(0,' + height  + ')')
					.call(xAxis);
				// Add y-axis
				svg.append('g')
          .attr('class', 'o-axis--y')
          .call(yAxis);
				// Remove first tick from y-axis
				svg.selectAll('.tick')
					.each(function(d) {
						if ( d === 0 ) {
							this.remove();
						}
					});
				// Add line attributes
				var lines = svg.selectAll('.o-line')
					.data(this.chartData)
					.enter()
					.append('path')
					.attr('class', function(d) { return 'o-line o-line--' + d.attribute; })
					.attr('d', function(d) { return line(d.datapoints); });
					
				// Add events
				var focus = svg.append('g')
					.attr('class', 'o-focusGroup')
					.style('display', 'none');
				
				for (var i = 0; i < this.chartData.length; i++) {
					focus.append('g')
						.attr('class', 'o-focus o-focus--' + this.chartData[i].attribute)
						.append('circle')
						.attr('r', 7);
					svg.select('.o-focus--' + this.chartData[i].attribute)
						.append('text')
						.attr('width', 14)
						.attr('dy', '.35em');
				}
				
				svg.append('rect')
					.attr('class', 'o-overlay')
					.attr('width', '100%')
					.attr('height', height + margin.top)
					.attr('transform', 'translate(0,' + -margin.top  + ')')
					.on('mouseover', function() { focus.style('display', 'block'); })
					.on('mouseout', function() { focus.style('display', 'none'); })
					.on('mousemove',  function() {
						var arr = that.chartData[0].datapoints,
								pos = 0,
								attributeList = [],
								date = parseTime(xScale.invert(d3.mouse(this)[0]));
						// Match date up with position of dataset
						for (var i = 0; i < arr.length; i++) {
							if (parseTime(arr[i].date) === date) {
								pos = i;
							}
						}
						// Pull dataset for each attribute out of chartData and assign to transform, focus
						var item, itemX, itemY;
						for (i = 0; i < that.chartData.length; i++) {
							item = that.chartData[i].datapoints[pos];
							itemX = xScale(item.date);
							itemY = yScale(item.attribute);
							var selectedFocus = svg.selectAll('.o-focus--' + that.chartData[i].attribute);
							// Check to see if circle will overlap and offset if so
							for (var j = 0; j < attributeList.length; j++) {
								if (item.attribute === attributeList[j]) {
									itemX = itemX + 14;
								}
							}
							selectedFocus.attr('transform', 'translate(' + itemX + ',' + itemY + ')');
							selectedFocus.select('text').text(item.attribute);
							// Add y-position to positions array
							attributeList.push(item.attribute);
						}
					})
					.on('click', function() {
						var formatDate = d3.time.format('%Y-%m-%d')
						that.slideCarouselToDate(formatDate(xScale.invert(d3.mouse(this)[0])));
					});
									
				var resize = function() {
					var width = getWidth();									
					// Update the range of the scale with new width/height
					xScale.range([0, width]);
					// Update the axis and text with the new scale
					svg.select('.o-axis--x')
						.attr('transform', 'translate(0,' + height + ')')
						.call(xAxis);
					// Force D3 to recalculate and update the line
					svg.selectAll('.o-line')
						.attr('d', function(d) { return line(d.datapoints); });
					// Update the tick marks
					xAxis.ticks(that.ignoreAutoGeneratedTicks);
					// xAxis.ticks(Math.max(width/75, 2));
					// yAxis.ticks(Math.max(height/50, 2));
				};
				
				d3.select(window).on('resize', resize);
				resize();
				setTimeout(function() {
					resize();
				}, 100);
				// Set chart added flag
				this.chartAdded = true;
			}
		},
		ignoreAutoGeneratedTicks: function(t0, t1, step) {
			var startTime = new Date(t0),
					endTime = new Date(t1),
					times = [];
			endTime.setUTCDate(endTime.getUTCDate() + 1);
			while (startTime < endTime) {
				startTime.setUTCDate(startTime.getUTCDate() + 4);
				times.push(new Date(startTime));
			}
			return times;
		},
		formatChartData: function(data) {
			var i, e;
			for (i = 0; i < data.length; i++) {
				// Need to add 1 to date to get correct date from db record
				data[i].date = new Date(data[i].date);
				data[i].date = new Date(data[i].date.setDate(data[i].date.getDate() + 1));
				// Set up object
				if (i === 0) {
					for (e in data[i]) {
						if (e !== 'date' && e !== 'notes' && e !== '_id') {
							this.chartData.push({
								attribute: e,
								datapoints: []
							});	
						}	
					}
				}
				for (e in data[i]) {
					if (e !== 'date' && e !== 'notes' && e !== '_id') {
						this.getAttributeArrByName(e).push({date: data[i].date, attribute: data[i][e]});
					}
				}
			}
		},
		getAttributeData: function(attribute, data) {
			var arr = [];
			for (var i = 0; i < data.length; i++) {
				arr.push({date: data[i].date, value: parseInt(data[i][attribute])});
			}
			return arr;
		},
		getAttributeArrByName: function(name) {
			for (var i = 0; i < this.chartData.length; i++) {
				if (this.chartData[i].attribute === name) {
					return this.chartData[i].datapoints;
				}
			}
			return null;
		}
	},
	mounted: function() {}
});;var Record = Vue.component('record', {
	props: ['item', 'update', 'pause', 'restart', 'addNew', 'index', 'isLoggedIn'],
	data: function() {
		return {
			canEdit: false,
			requesting: false,
			defaults: {
				date: Date,
				mobility: '5',
				activity: '5',
				appetite: '5',
				pain: '5',
				stress: '5',
				notes: ''
			}
		}
	},
	methods: {
		onInputInteractStart: function() {
			this.pause();
		},
		onInputInteractEnd: function() {
			this.restart();
		},
    editHandler: function(event) {
	    event.preventDefault();
	    this.canEdit = !this.canEdit;
	    if (this.canEdit && this.addNew) {
		    this.reset();
	    }
    },
    updateHandler: function(event) {
			event.preventDefault();
			var that = this;
					that.requesting = true;
			var request = new XMLHttpRequest();
					request.open('POST', '/addRecord', true);
					request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
			
			request.onload = function() {
				if (request.status >= 200 && request.status < 400) {
					that.requesting = false;
					// console.log(JSON.parse(request.responseText));
					that.canEdit = !that.canEdit;
					if (that.addNew) {
						that.reset();
					}
					setTimeout(function() {
						that.update();
					}, 250);
        } else {
        	console.log(request.responseText);
        	console.warn('vue-record.js, addRecord : error');
        }
			}
			request.send(JSON.stringify({
				date: this.item.date,
				mobility: this.item.mobility,
				activity: this.item.activity,
				appetite: this.item.appetite,
				pain: this.item.pain,
				stress: this.item.stress,
				notes: this.item.notes
			}));
		},
    getDisplayMonth: function(date) {
			var a = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
			return a[parseInt(date.split('-')[1]) - 1];
		},
		getDisplayDate: function(date) {
			return parseInt(date.split('-')[2]);
		},
		getDisplayYear: function(date) {
			return date.split('-')[0];
		},
		reset: function() {
			this.item.date = this.defaults.date;
			this.item.mobility = this.defaults.mobility;
			this.item.activity = this.defaults.activity;
			this.item.appetite = this.defaults.appetite;
			this.item.pain = this.defaults.pain;
			this.item.stress = this.defaults.stress;
			this.item.notes = this.defaults.notes;
		},
		addLeadingZero: function(n) {
			if (n.toString().length === 1) {
				return '0' + n.toString();
			}
			return n;
		},
		getTodaysFormattedDate: function() {
			var d = new Date();
			return d.getUTCFullYear() + '-' +
			this.addLeadingZero(d.getMonth() + 1) + '-' +
			this.addLeadingZero(d.getDate())
		}
	},
	mounted: function() {
		this.defaults.date = this.getTodaysFormattedDate();
	}
});;var SettingsMenu = Vue.component('settingsmenu', {
	props: ['setShowSettings', 'setLoggedInSettings', 'setMenuToggle', 'isLoggedIn'],
	data: function() {
		return {
			isLocalStorage: false,
			lsName: 'appLogin',
			animateShowSettings: false,
			showSettings: false,
			hideSettingsTimer: null,
			requesting: false,
			formFields: {
				username: {
					value: '',
					showError: false
				},
				password: {
					value: '',
					showError: false
				}	
			}
		}
	},
	methods: {
		loginHandler: function(event) {
			event.preventDefault();
			var isValid = true;
			for (var e in this.formFields) {
				if (this.formFields[e].value === '') {
					this.formFields[e].showError = true;
					isValid = false;
				} else {
					this.formFields[e].showError = false;
				}
			}
			if (isValid) {
				this.loginRequest();
			}
		},
		logoutHandler: function(event) {
			event.preventDefault();
		},
		loginRequest: function() {
			var that = this;
					that.requesting = true;
			var request = new XMLHttpRequest();
					request.open('POST', '/login', true);
					request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
					
			request.onload = function() {
				if (request.status >= 200 && request.status < 400) {
					that.requesting = false;
					var data = JSON.parse(request.responseText);
					console.log(data[0]);
					console.log(data[0].success);
					if (data[0].success === 'success') {
						that.setLoggedInSettings(true);
						// Persist session in local storage
						that.persistUserSession();
						// Close settings
						that.closeHandler();
					} else {
						that.formFields.username.showError = true;
						that.formFields.password.showError = true;
					}
        } else {
        	console.log(request.responseText);
        	console.warn('vue-settingsmenu.js, login : error');
        }
			}
			request.send(JSON.stringify({
				username: that.formFields.username.value,
				password: that.formFields.password.value
			}));
		},
		persistUserSession: function() {
			
		},
		closeHandler: function() {
			this.hide();
			var that = this;
			this.hideSettingsTimer = setTimeout(function() {
				that.setShowSettings(false);
				clearTimeout(that.hideSettingsTimer);
			}, 250);
		},
		hide: function() {
			this.animateShowSettings = false;
			this.setMenuToggle(false);
		},
		localStorageCheck: function() {
			var ls = 'ls';
			try {
				window.localStorage.setItem(ls, ls);
				window.localStorage.removeItem(ls);
				return true;
			} catch(e) {
				return false;
			}
		},
		setItemInObj: function(data) {
			var val = JSON.stringify(data);
			if (ls.isLocalStorage) {
				window.localStorage.setItem(this.lsName, val);
			}
		},
		getItemFromObj: function() {
			var data;
			if (ls.isLocalStorage) {
				data = window.localStorage.getItem(this.lsName);
			}
			return JSON.parse(data);
		},
		deleteItem: function() {
			if (ls.isLocalStorage) {
				window.localStorage.removeItem(this.lsName);
			}
		}
	},
	mounted: function() {
		clearTimeout(this.hideSettingsTimer);
		this.showSettings = true;
		this.animateShowSettings = true;
		this.isLocalStorage = this.localStorageCheck();
	}
});;// TODO: Create loader
// TODO: What is the new item. Add flex-shrink: 1 and then immediately flip back to 0
// TODO: Add transition: all to new item
// TODO: Store login, name in LS
// TODO: Vertically anchor clicks in chart to scroll position in mobile
// TODO: Remove login when logged in
// TODO: Really should add-in custom date-picker
// TODO: Key for explaining the attributes that are being tracked
// TODO: Add name to users collection
// BUG: Chart hovers not updating when new record is added

// https://github.com/charliekassel/vuejs-datepicker?ref=madewithvuejs.com#demo
// https://ssense.github.io/vue-carousel/examples/
// https://ssense.github.io/vue-carousel/guide/
// https://github.com/SSENSE/vue-carousel

var app = new Vue({
	el: '#app',
	components: {
  	'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide,
    'record': Record,
    'chart': Chart,
    'settingsmenu': SettingsMenu
  },
	data: {
		isLoggedIn: false,
		toggleMenuButton: false,
		prevCalPageCt: Number,
		requesting: false,
		carouselTransform: String,
		datapoints: [],
		dataLoaded: false,
		showSettings: false,
		focusDate: String,
		currentPage: 0,
		newRecord: {
			date: Date,
			mobility: '5',
			activity: '5',
			appetite: '5',
			pain: '5',
			stress: '5',
			notes: ''
		}
	},	
	methods: {
		getData: function() {
			var that = this;
					that.requesting = true;
			var request = new XMLHttpRequest();
					request.open('GET', '/getRecords', true);
			
			request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
					that.requesting = false;
					that.datapoints = JSON.parse(request.responseText).sort(that.sortByDate).reverse();
					// init chart
					app.$refs.progressChart.update(JSON.parse(request.responseText).sort(that.sortByDate).reverse());
					// Animate in content
					that.dataLoaded = true;
					// Update pageCt
					that.prevCalPageCt = app.$refs.carousel.currentPerPage;
        } else {
        	console.log(request.responseText);
        	console.warn('index.js, getRecords : error');
        }
			}
			request.send();
		},
		displaySettings: function() {
			if (this.showSettings) {
				var that = this;
				app.$refs.settingsmenu.hide();
				setTimeout(function() {
					that.setShowSettings(false);
				}, 250);
			} else {
				this.setMenuToggle(true);
				this.setShowSettings(true);
			}
		},
		update: function() {
			this.getData();
		},
		pause: function() {
			var carousel = app.$refs.carousel;
			// Set temp transform
			this.carouselTransform = carousel.$refs["VueCarousel-inner"].style.transform;
			carousel.$refs["VueCarousel-inner"].classList.add('u-disableAllTransforms');
			// Need to swap translateX to left
			// Lazy regex, shouldn't eval to null
			carousel.$refs["VueCarousel-inner"].style.left = /\((.*?)\,/.exec(this.carouselTransform)[1];
		},
		restart: function() {
			var carousel = app.$refs.carousel;
			carousel.$refs["VueCarousel-inner"].classList.remove('u-disableAllTransforms');
			// Reset to correct transform translation, and then kill transistion until next renders
			carousel.$refs["VueCarousel-inner"].style.transition = 'transform 0s ease 0s'
			carousel.$refs["VueCarousel-inner"].style.transform = this.carouselTransform;
			// Reset left
			carousel.$refs["VueCarousel-inner"].style.left = 'auto';
		},
		slideCarouselToDate: function(date) {
			for (var i = 0; i < this.datapoints.length; i++) {
				if (date === this.datapoints[i].date) {
					var page =  Math.floor(i / app.$refs.carousel.currentPerPage);
					app.$refs.carousel.goToPage(page);
				}
			}
			var delay = 0;
			if (this.currentPage !== page) {
				delay = 600;
			}
			// Set focus to calendar card
			this.setCarouselFocusDate(date, delay);
			// Update currentPage
			this.currentPage = page;
		},
		setCarouselFocusDate: function(date, delay) {
			var that = this;
			// Delay fallback
			if (!delay) {
				delay = 0;
			}
			// Set focus
			setTimeout(function() {
				that.focusDate = date;
			}, delay);
		},
		sortByDate: function(a, b) {
			if (a.date < b.date)
				return -1;
			if (a.date > b.date)
				return 1;
			return 0;
		},
		addLeadingZero: function(n) {
			if (n.toString().length === 1) {
				return '0' + n.toString();
			}
			return n;
		},
		getTodaysFormattedDate: function() {
			var d = new Date();
			return d.getUTCFullYear() + '-' +
			this.addLeadingZero(d.getMonth() + 1) + '-' +
			this.addLeadingZero(d.getDate())
		},
		setShowSettings: function(val) {
			this.showSettings = val;
		},
		setLoggedInSettings: function(val) {
			this.isLoggedIn = val;
		},
		setMenuToggle: function(val) {
			this.toggleMenuButton = val;
		}
	},
	mounted: function() {
		var that = this;
		this.newRecord.date = this.getTodaysFormattedDate();
		this.getData();
		window.addEventListener('resize', function() {
			console.log(app.$refs.carousel.currentPerPage);
			if (that.prevCalPageCt === 0 && app.$refs.carousel.currentPerPage > 0) {
				app.$refs.carousel.goToPage(0)
			}
			that.prevCalPageCt = app.$refs.carousel.currentPerPage;
		});
	}
});
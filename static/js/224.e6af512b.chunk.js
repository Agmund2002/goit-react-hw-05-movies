/*! For license information please see 224.e6af512b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[224],{2457:function(t,e,r){r.d(e,{t:function(){return c}});var n,o=r(168),i=r(5867).ZP.h1(n||(n=(0,o.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"]))),a=r(184),c=function(t){var e=t.title,r=t.children;return(0,a.jsxs)("main",{children:[(0,a.jsx)(i,{children:e}),r]})}},5224:function(t,e,r){r.r(e),r.d(e,{default:function(){return w}});var n=r(3623),o=r(1087),i=r(7689),a=r(184),c=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("section",{children:(0,a.jsxs)(n.W,{children:[(0,a.jsx)("h2",{children:"Additional information"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,a.jsx)("li",{children:(0,a.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]})]})}),(0,a.jsx)(i.j3,{})]})},s=r(2457),u=r(1413),l=r(5861),h=r(9439),f=r(6924),p=r(2791),d=r(7505),v=r(5114);function y(){y=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",p="executing",d="completed",v={};function g(){}function m(){}function w(){}var x={};u(x,a,(function(){return this}));var j=Object.getPrototypeOf,b=j&&j(j(N([])));b&&b!==r&&n.call(b,a)&&(x=b);var L=w.prototype=g.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var s=h(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=f;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=O(c,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var u=h(e,r,n);if("normal"===u.type){if(o=n.done?d:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=d,n.method="throw",n.arg=u.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function G(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return m.prototype=w,o(L,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=u(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},_(E.prototype),u(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new E(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(L),u(L,s,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),F(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;F(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}var g=function(){var t=(0,p.useState)({}),e=(0,h.Z)(t,2),r=e[0],o=e[1],c=(0,p.useState)(!1),s=(0,h.Z)(c,2),g=s[0],m=s[1],w=(0,p.useState)(!1),x=(0,h.Z)(w,2),j=x[0],b=x[1],L=(0,i.UO)().movieId;(0,p.useEffect)((function(){var t=function(){var t=(0,l.Z)(y().mark((function t(){var e,r,n;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,b(!0),t.next=4,(0,f.CG)(L);case 4:e=t.sent,r=new Date(e.release_date),n=e.genres.map((function(t){return t.name})).join(", "),o((0,u.Z)((0,u.Z)({},e),{},{release_date:r.getFullYear(),vote_average:e.vote_average.toFixed(1),genres:n})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),m(!0);case 13:return t.prev=13,b(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(){return t.apply(this,arguments)}}();t()}),[L]);var _=r.poster_path,E=r.title,k=r.release_date,O=r.vote_average,G=r.overview,F=r.genres;return(0,a.jsxs)(a.Fragment,{children:[j&&(0,a.jsx)(v.g,{}),g&&(0,a.jsx)(d.B,{}),!j&&!g&&(0,a.jsx)("section",{children:(0,a.jsxs)(n.W,{children:[_?(0,a.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/original").concat(_),alt:E,loading:"lazy"}):(0,a.jsx)("img",{src:"https://designessentiamagazine.com/wp-content/themes/fox/images/placeholder.jpg",alt:"placeholder",loading:"lazy"}),(0,a.jsxs)("h2",{children:[E," (",k,")"]}),(0,a.jsx)("span",{children:O}),(0,a.jsx)("p",{children:G}),(0,a.jsx)("span",{children:F})]})})]})},m=r(9126),w=function(){var t,e,r=(0,i.TH)(),n=(0,p.useRef)(null!==(t=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/");return(0,a.jsxs)(s.t,{title:"Movie details",children:[(0,a.jsxs)(o.rU,{to:n.current,children:[(0,a.jsx)(m.i1r,{}),"Go back"]}),(0,a.jsx)(g,{}),(0,a.jsx)(c,{})]})}}}]);
//# sourceMappingURL=224.e6af512b.chunk.js.map
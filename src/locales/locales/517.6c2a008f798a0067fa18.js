/*! For license information please see 517.6c2a008f798a0067fa18.js.LICENSE.txt */
(self.webpackChunkreact_advanced=self.webpackChunkreact_advanced||[]).push([[517],{2517:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>S});var n=r(5861),o=r(4687),a=r.n(o),i=r(7294),c=r(4478),u=r(3942),s=r(3007),l=r(1233),f=r(5401),d=r(5255),h=r(8312),p=r(1715),v=function(t){var e;return(null==t||null===(e=t.loginForm)||void 0===e?void 0:e.username)||""},y=function(t){var e;return(null==t||null===(e=t.loginForm)||void 0===e?void 0:e.password)||""},m=function(t){var e;return(null==t||null===(e=t.loginForm)||void 0===e?void 0:e.isLoading)||!1},g=function(t){var e;return null==t||null===(e=t.loginForm)||void 0===e?void 0:e.error},x=r(4268),w=r(7081),b=r(1283),j=(0,x.hg)("login/loginByUsername",function(){var t=(0,n.Z)(a().mark((function t(e,r){var n,o,i,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.extra,o=r.dispatch,i=r.rejectWithValue,t.prev=1,t.next=4,n.api.post("/login",e);case 4:if((c=t.sent).data){t.next=7;break}throw new Error;case 7:return localStorage.setItem(b.z,JSON.stringify(c.data)),o(w.hI.setAuthData(c.data)),t.abrupt("return",c.data);case 12:return t.prev=12,t.t0=t.catch(1),t.abrupt("return",i("error"));case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,r){return t.apply(this,arguments)}}()),O=(0,x.oM)({name:"login",initialState:{isLoading:!1,username:"",password:""},reducers:{setUsername:function(t,e){t.username=e.payload},setPassword:function(t,e){t.password=e.payload}},extraReducers:function(t){t.addCase(j.pending,(function(t){t.error=void 0,t.isLoading=!0})).addCase(j.fulfilled,(function(t,e){t.isLoading=!1})).addCase(j.rejected,(function(t,e){t.isLoading=!1,t.error=e.payload}))}}),L=O.actions,E=O.reducer;const _="PQPa1eB5";var N=r(5893),P={loginForm:E};const S=(0,i.memo)((function(t){var e=t.className,r=t.onSuccess,o=(0,f.T)(),x=(0,c.$)().t,w=(0,u.v9)(v),b=(0,u.v9)(y),O=(0,u.v9)(m),E=(0,u.v9)(g),S=(0,i.useCallback)((function(t){o(L.setUsername(t))}),[o]),k=(0,i.useCallback)((function(t){o(L.setPassword(t))}),[o]),F=(0,i.useCallback)((0,n.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(j({username:w,password:b}));case 2:"fulfilled"===t.sent.meta.requestStatus&&r();case 4:case"end":return t.stop()}}),t)}))),[o,r,b,w]);return(0,N.jsx)(l.W,{reducers:P,removeAfterUnmount:!0,children:(0,N.jsxs)("div",{className:(0,s.A)("xYNEfcE9",{},[e]),children:[(0,N.jsx)(p.xv,{title:x("authorization form")}),E&&(0,N.jsx)(p.xv,{text:x("incorrect login or password"),theme:p.lg.ERROR}),(0,N.jsx)(h.I,{className:_,placeholder:x("user name"),autoFocus:!0,onChange:S,value:w}),(0,N.jsx)(h.I,{className:_,placeholder:x("password"),onChange:k,value:b}),(0,N.jsx)(d.zx,{theme:d.bn.OUTLINE,className:"Ok_5amJo",onClick:F,disabled:O,children:x("sing in")})]})})}))},1233:(t,e,r)=>{"use strict";r.d(e,{W:()=>c});var n=r(9439),o=r(7294),a=r(3942),i=r(5893),c=function(t){var e=t.children,r=t.reducers,c=t.removeAfterUnmount,u=void 0===c||c,s=(0,a.oR)(),l=(0,a.I0)();return(0,o.useEffect)((function(){var t=s.reducerManager.getMountedReducers();return Object.entries(r).forEach((function(e){var r=(0,n.Z)(e,2),o=r[0],a=r[1];t[o]||(s.reducerManager.add(o,a),l({type:"@INIT ".concat(o," reducer")}))})),function(){u&&Object.entries(r).forEach((function(t){var e=(0,n.Z)(t,2),r=e[0];e[1],s.reducerManager.remove(r),l({type:"@DESTROY ".concat(r," reducer")})}))}}),[]),(0,i.jsx)(i.Fragment,{children:e})}},8312:(t,e,r)=>{"use strict";r.d(e,{I:()=>d});var n=r(4942),o=r(9439),a=r(4925),i=r(7294),c=r(3007);var u=r(5893),s=["className","value","onChange","type","placeholder","autoFocus","readonly"];function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d=(0,i.memo)((function(t){var e=t.className,r=t.value,l=t.onChange,d=t.type,h=void 0===d?"text":d,p=t.placeholder,v=t.autoFocus,y=t.readonly,m=(0,a.Z)(t,s),g=(0,i.useState)(!1),x=(0,o.Z)(g,2),w=x[0],b=x[1],j=(0,i.useState)(0),O=(0,o.Z)(j,2),L=O[0],E=O[1],_=(0,i.useRef)(null),N=w&&!y;return(0,i.useEffect)((function(){var t;v&&(b(!0),null==_||null===(t=_.current)||void 0===t||t.focus())}),[v]),(0,n.Z)({},"fTN1PnWu",y),(0,u.jsxs)("div",{className:(0,c.A)("LuFDUWoP",{},[e]),children:[p&&(0,u.jsx)("div",{className:"emAQQ85i",children:"".concat(p,">")}),(0,u.jsxs)("div",{className:"y1GiFC_L",children:[(0,u.jsx)("input",f({ref:_,type:h,value:r,onChange:function(t){null==l||l(t.target.value)},className:"LVdIPwcx",onFocus:function(){b(!0)},onBlur:function(){b(!1)},onSelect:function(t){var e;E((null==t||null===(e=t.target)||void 0===e?void 0:e.selectionStart)||0)},readOnly:y},m)),N&&(0,u.jsx)("span",{className:"lqMFGBuL",style:{left:"".concat(9*L,"px")}})]})]})}))},7061:(t,e,r)=>{var n=r(8698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),c=new P(n||[]);return i(a,"_invoke",{value:L(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var p={};function v(){}function y(){}function m(){}var g={};f(g,u,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(S([])));w&&w!==r&&a.call(w,u)&&(g=w);var b=m.prototype=v.prototype=Object.create(g);function j(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,c,u){var s=h(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return y.prototype=m,i(b,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=f(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,f(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},j(O.prototype),f(O.prototype,s,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new O(d(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(b),f(b,l,"Generator"),f(b,u,(function(){return this})),f(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),u=a.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8698:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},4687:(t,e,r)=>{var n=r(7061)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},5861:(t,e,r)=>{"use strict";function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}r.d(e,{Z:()=>o})}}]);
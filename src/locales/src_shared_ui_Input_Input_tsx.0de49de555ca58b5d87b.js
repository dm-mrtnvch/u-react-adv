/*! For license information please see src_shared_ui_Input_Input_tsx.0de49de555ca58b5d87b.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_advanced=self.webpackChunkreact_advanced||[]).push([["src_shared_ui_Input_Input_tsx"],{"./src/shared/ui/Input/Input.tsx":(e,n,r)=>{r.r(n),r.d(n,{Input:()=>A});var t=r("./node_modules/react/jsx-runtime.js"),s=r("./node_modules/react/index.js"),u=r("./src/shared/lib/classNames/classNames.ts"),o=r("./src/shared/ui/Input/Input.module.scss"),a=r("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"),l=r("./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");r.$Refresh$.runtime=r("./node_modules/react-refresh/runtime.js");var d,i,c=r.$Refresh$.signature(),p=function(){return p=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var s in n=arguments[r])Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);return e},p.apply(this,arguments)},A=c((0,s.memo)(d=c((function(e){c();var n=e.className,r=e.value,a=e.onChange,l=e.type,d=void 0===l?"text":l,i=e.placeholder,A=e.autoFocus,m=e.readonly,f=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]])}return r}(e,["className","value","onChange","type","placeholder","autoFocus","readonly"]),h=(0,s.useState)(!1),_=h[0],I=h[1],y=(0,s.useState)(0),j=y[0],E=y[1],v=(0,s.useRef)(null),C=_&&!m;return(0,s.useEffect)((function(){var e;A&&(I(!0),null===(e=null==v?void 0:v.current)||void 0===e||e.focus())}),[A]),{}[o.default.readonly]=m,(0,t.jsxs)("div",p({className:(0,u.classNames)(o.default.InputWrapper,{},[n])},{children:[i&&(0,t.jsx)("div",p({className:o.default.placeholder},{children:"".concat(i,">")})),(0,t.jsxs)("div",p({className:o.default.caretWrapper},{children:[(0,t.jsx)("input",p({ref:v,type:d,value:r,onChange:function(e){null==a||a(e.target.value)},className:o.default.input,onFocus:function(){I(!0)},onBlur:function(){I(!1)},onSelect:function(e){var n;E((null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.selectionStart)||0)},readOnly:m},f)),C&&(0,t.jsx)("span",{className:o.default.caret,style:{left:"".concat(9*j,"px")}})]}))]}))}),"L3X2lDrCur8meWH2ld5A3Ro37jw=")),"L3X2lDrCur8meWH2ld5A3Ro37jw=");i=A,r.$Refresh$.register(d,"Input$memo"),r.$Refresh$.register(i,"Input");const m=r.$Refresh$.moduleId,f=a.getModuleExports(m);function h(n){{let r,t;return void 0!==l&&(r=l),"undefined"!=typeof __react_refresh_test__&&(t=__react_refresh_test__),a.executeRuntime(n,m,e.hot,r,t)}}"undefined"!=typeof Promise&&f instanceof Promise?f.then(h):h(f)},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss":(e,n,r)=>{r.r(n),r.d(n,{default:()=>a});var t=r("./node_modules/css-loader/dist/runtime/sourceMaps.js"),s=r.n(t),u=r("./node_modules/css-loader/dist/runtime/api.js"),o=r.n(u)()(s());o.push([e.id,".src-shared-ui-Input-Input-module__InputWrapper--LuFDU {\n  display: flex;\n}\n\n.src-shared-ui-Input-Input-module__placeholder--emAQQ {\n  margin-right: 5px;\n}\n\n.src-shared-ui-Input-Input-module__input--LVdIP {\n  background: transparent;\n  border: none;\n  outline: none;\n  width: 100px;\n  color: transparent;\n  text-shadow: 0 0 0 var(--primary-color);\n}\n.src-shared-ui-Input-Input-module__input--LVdIP:focus {\n  outline: none;\n}\n\n.src-shared-ui-Input-Input-module__caretWrapper--y1GiF {\n  position: relative;\n  flex-grow: 1;\n}\n\n.src-shared-ui-Input-Input-module__caret--lqMFG {\n  position: absolute;\n  height: 3px;\n  width: 9px;\n  background: var(--primary-color);\n  bottom: 0;\n  left: 0;\n  animation: src-shared-ui-Input-Input-module__blink--M7n8f 0.7s forwards infinite;\n}\n\n.src-shared-ui-Input-Input-module__readonly--fTN1P {\n  opacity: 0.7;\n}\n\n@keyframes src-shared-ui-Input-Input-module__blink--M7n8f {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.01;\n  }\n  100% {\n    opacity: 1;\n  }\n}","",{version:3,sources:["webpack://./src/shared/ui/Input/Input.module.scss"],names:[],mappings:"AAAA;EACE,aAAA;AACF;;AAEA;EACE,iBAAA;AACF;;AAEA;EACE,uBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;EACA,uCAAA;AACF;AACE;EACE,aAAA;AACJ;;AAGA;EACE,kBAAA;EACA,YAAA;AAAF;;AAGA;EACE,kBAAA;EACA,WAAA;EACA,UAAA;EACA,gCAAA;EACA,SAAA;EACA,OAAA;EACA,gFAAA;AAAF;;AAGA;EACE,YAAA;AAAF;;AAGA;EACE;IACE,UAAA;EAAF;EAGA;IACE,aAAA;EADF;EAIA;IACE,UAAA;EAFF;AACF",sourcesContent:[".InputWrapper {\r\n  display: flex;\r\n}\r\n\r\n.placeholder {\r\n  margin-right: 5px;\r\n}\r\n\r\n.input {\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  width: 100px;\r\n  color: transparent;\r\n  text-shadow: 0 0 0 var(--primary-color);\r\n\r\n  &:focus {\r\n    outline: none;\r\n  }\r\n}\r\n\r\n.caretWrapper {\r\n  position: relative;\r\n  flex-grow: 1;\r\n}\r\n\r\n.caret {\r\n  position: absolute;\r\n  height: 3px;\r\n  width: 9px;\r\n  background: var(--primary-color);\r\n  bottom: 0;\r\n  left: 0;\r\n  animation: blink 0.7s forwards infinite;\r\n}\r\n\r\n.readonly {\r\n  opacity: 0.7;\r\n}\r\n\r\n@keyframes blink {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  50% {\r\n    opacity: 0.01;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n"],sourceRoot:""}]),o.locals={InputWrapper:"src-shared-ui-Input-Input-module__InputWrapper--LuFDU",placeholder:"src-shared-ui-Input-Input-module__placeholder--emAQQ",input:"src-shared-ui-Input-Input-module__input--LVdIP",caretWrapper:"src-shared-ui-Input-Input-module__caretWrapper--y1GiF",caret:"src-shared-ui-Input-Input-module__caret--lqMFG",blink:"src-shared-ui-Input-Input-module__blink--M7n8f",readonly:"src-shared-ui-Input-Input-module__readonly--fTN1P"};const a=o},"./src/shared/ui/Input/Input.module.scss":(e,n,r)=>{r.r(n),r.d(n,{default:()=>j});var t=r("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=r.n(t),u=r("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),o=r.n(u),a=r("./node_modules/style-loader/dist/runtime/insertBySelector.js"),l=r.n(a),d=r("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),i=r.n(d),c=r("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=r.n(c),A=r("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),m=r.n(A),f=r("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss"),h={};h.styleTagTransform=m(),h.setAttributes=i(),h.insert=l().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p();var _=s()(f.default,h);if(!f.default.locals||e.hot.invalidate){var I=!f.default.locals,y=I?f:f.default.locals;e.hot.accept("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss",(n=>{f=r("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss"),function(e,n,r){if(!e&&n||e&&!n)return!1;var t;for(t in e)if((!r||"default"!==t)&&e[t]!==n[t])return!1;for(t in n)if(!(r&&"default"===t||e[t]))return!1;return!0}(y,I?f:f.default.locals,I)?(y=I?f:f.default.locals,_(f.default)):e.hot.invalidate()}))}e.hot.dispose((function(){_()}));const j=f.default&&f.default.locals?f.default.locals:void 0}}]);
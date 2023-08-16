/*! For license information please see src_shared_ui_Input_Input_tsx.d19423d31b12a372a98a.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_advanced=self.webpackChunkreact_advanced||[]).push([["src_shared_ui_Input_Input_tsx"],{"./src/shared/ui/Input/Input.tsx":(e,n,r)=>{r.r(n),r.d(n,{Input:()=>I});var t=r("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),s=r("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),u=r("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=r("./node_modules/react/index.js"),a=r("./src/shared/lib/classNames/classNames.ts"),l=r("./src/shared/ui/Input/Input.module.scss"),d=r("./node_modules/react/jsx-runtime.js"),i=r("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"),c=r("./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");r.$Refresh$.runtime=r("./node_modules/react-refresh/runtime.js");var p=r.$Refresh$.signature(),A=["className","value","onChange","type","placeholder","autoFocus","readonly"];function m(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function f(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?m(Object(r),!0).forEach((function(n){(0,t.default)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var h,_,I=p((0,o.memo)(h=p((function(e){p();var n=e.className,r=e.value,i=e.onChange,c=e.type,m=void 0===c?"text":c,h=e.placeholder,_=e.autoFocus,I=e.readonly,y=(0,u.default)(e,A),j=(0,o.useState)(!1),b=(0,s.default)(j,2),E=b[0],v=b[1],C=(0,o.useState)(0),g=(0,s.default)(C,2),x=g[0],k=g[1],w=(0,o.useRef)(null),F=E&&!I;return(0,o.useEffect)((function(){var e;_&&(v(!0),null==w||null===(e=w.current)||void 0===e||e.focus())}),[_]),(0,t.default)({},l.default.readonly,I),(0,d.jsxs)("div",{className:(0,a.classNames)(l.default.InputWrapper,{},[n]),children:[h&&(0,d.jsx)("div",{className:l.default.placeholder,children:"".concat(h,">")}),(0,d.jsxs)("div",{className:l.default.caretWrapper,children:[(0,d.jsx)("input",f({ref:w,type:m,value:r,onChange:function(e){null==i||i(e.target.value)},className:l.default.input,onFocus:function(){v(!0)},onBlur:function(){v(!1)},onSelect:function(e){var n;k((null==e||null===(n=e.target)||void 0===n?void 0:n.selectionStart)||0)},readOnly:I},y)),F&&(0,d.jsx)("span",{className:l.default.caret,style:{left:"".concat(9*x,"px")}})]})]})}),"q0J5AdyKT7Yj5u15Hx0jH58lNxc=")),"q0J5AdyKT7Yj5u15Hx0jH58lNxc=");_=I,r.$Refresh$.register(h,"Input$memo"),r.$Refresh$.register(_,"Input");const y=r.$Refresh$.moduleId,j=i.getModuleExports(y);function b(n){{let r,t;return void 0!==c&&(r=c),"undefined"!=typeof __react_refresh_test__&&(t=__react_refresh_test__),i.executeRuntime(n,y,e.hot,r,t)}}"undefined"!=typeof Promise&&j instanceof Promise?j.then(b):b(j)},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss":(e,n,r)=>{r.r(n),r.d(n,{default:()=>a});var t=r("./node_modules/css-loader/dist/runtime/sourceMaps.js"),s=r.n(t),u=r("./node_modules/css-loader/dist/runtime/api.js"),o=r.n(u)()(s());o.push([e.id,".src-shared-ui-Input-Input-module__InputWrapper--LuFDU {\n  display: flex;\n}\n\n.src-shared-ui-Input-Input-module__placeholder--emAQQ {\n  margin-right: 5px;\n}\n\n.src-shared-ui-Input-Input-module__input--LVdIP {\n  background: transparent;\n  border: none;\n  outline: none;\n  width: 100px;\n  color: transparent;\n  text-shadow: 0 0 0 var(--primary-color);\n}\n.src-shared-ui-Input-Input-module__input--LVdIP:focus {\n  outline: none;\n}\n\n.src-shared-ui-Input-Input-module__caretWrapper--y1GiF {\n  position: relative;\n  flex-grow: 1;\n}\n\n.src-shared-ui-Input-Input-module__caret--lqMFG {\n  position: absolute;\n  height: 3px;\n  width: 9px;\n  background: var(--primary-color);\n  bottom: 0;\n  left: 0;\n  animation: src-shared-ui-Input-Input-module__blink--M7n8f 0.7s forwards infinite;\n}\n\n.src-shared-ui-Input-Input-module__readonly--fTN1P {\n  opacity: 0.7;\n}\n\n@keyframes src-shared-ui-Input-Input-module__blink--M7n8f {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.01;\n  }\n  100% {\n    opacity: 1;\n  }\n}","",{version:3,sources:["webpack://./src/shared/ui/Input/Input.module.scss"],names:[],mappings:"AAAA;EACE,aAAA;AACF;;AAEA;EACE,iBAAA;AACF;;AAEA;EACE,uBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;EACA,uCAAA;AACF;AACE;EACE,aAAA;AACJ;;AAGA;EACE,kBAAA;EACA,YAAA;AAAF;;AAGA;EACE,kBAAA;EACA,WAAA;EACA,UAAA;EACA,gCAAA;EACA,SAAA;EACA,OAAA;EACA,gFAAA;AAAF;;AAGA;EACE,YAAA;AAAF;;AAGA;EACE;IACE,UAAA;EAAF;EAGA;IACE,aAAA;EADF;EAIA;IACE,UAAA;EAFF;AACF",sourcesContent:[".InputWrapper {\r\n  display: flex;\r\n}\r\n\r\n.placeholder {\r\n  margin-right: 5px;\r\n}\r\n\r\n.input {\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  width: 100px;\r\n  color: transparent;\r\n  text-shadow: 0 0 0 var(--primary-color);\r\n\r\n  &:focus {\r\n    outline: none;\r\n  }\r\n}\r\n\r\n.caretWrapper {\r\n  position: relative;\r\n  flex-grow: 1;\r\n}\r\n\r\n.caret {\r\n  position: absolute;\r\n  height: 3px;\r\n  width: 9px;\r\n  background: var(--primary-color);\r\n  bottom: 0;\r\n  left: 0;\r\n  animation: blink 0.7s forwards infinite;\r\n}\r\n\r\n.readonly {\r\n  opacity: 0.7;\r\n}\r\n\r\n@keyframes blink {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  50% {\r\n    opacity: 0.01;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n"],sourceRoot:""}]),o.locals={InputWrapper:"src-shared-ui-Input-Input-module__InputWrapper--LuFDU",placeholder:"src-shared-ui-Input-Input-module__placeholder--emAQQ",input:"src-shared-ui-Input-Input-module__input--LVdIP",caretWrapper:"src-shared-ui-Input-Input-module__caretWrapper--y1GiF",caret:"src-shared-ui-Input-Input-module__caret--lqMFG",blink:"src-shared-ui-Input-Input-module__blink--M7n8f",readonly:"src-shared-ui-Input-Input-module__readonly--fTN1P"};const a=o},"./src/shared/ui/Input/Input.module.scss":(e,n,r)=>{r.r(n),r.d(n,{default:()=>j});var t=r("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=r.n(t),u=r("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),o=r.n(u),a=r("./node_modules/style-loader/dist/runtime/insertBySelector.js"),l=r.n(a),d=r("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),i=r.n(d),c=r("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=r.n(c),A=r("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),m=r.n(A),f=r("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss"),h={};h.styleTagTransform=m(),h.setAttributes=i(),h.insert=l().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p();var _=s()(f.default,h);if(!f.default.locals||e.hot.invalidate){var I=!f.default.locals,y=I?f:f.default.locals;e.hot.accept("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss",(n=>{f=r("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss"),function(e,n,r){if(!e&&n||e&&!n)return!1;var t;for(t in e)if((!r||"default"!==t)&&e[t]!==n[t])return!1;for(t in n)if(!(r&&"default"===t||e[t]))return!1;return!0}(y,I?f:f.default.locals,I)?(y=I?f:f.default.locals,_(f.default)):e.hot.invalidate()}))}e.hot.dispose((function(){_()}));const j=f.default&&f.default.locals?f.default.locals:void 0}}]);
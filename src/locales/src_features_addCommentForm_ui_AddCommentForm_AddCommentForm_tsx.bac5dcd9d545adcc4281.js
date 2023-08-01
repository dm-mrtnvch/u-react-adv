/*! For license information please see src_features_addCommentForm_ui_AddCommentForm_AddCommentForm_tsx.bac5dcd9d545adcc4281.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_advanced=self.webpackChunkreact_advanced||[]).push([["src_features_addCommentForm_ui_AddCommentForm_AddCommentForm_tsx"],{"./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.tsx":(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var o=s("./node_modules/react/jsx-runtime.js"),r=s("./node_modules/react/index.js"),d=s("./node_modules/react-i18next/dist/es/useTranslation.js"),m=s("./node_modules/react-redux/es/index.js"),n=s("./src/shared/lib/classNames/classNames.ts"),u=s("./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx"),a=s("./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts"),l=s("./src/shared/ui/Button/Button.tsx"),i=s("./src/shared/ui/Input/Input.tsx"),c=s("./src/shared/ui/Stack/index.ts"),f=s("./src/features/addCommentForm/model/selectors/addCommentFormSelectors.ts"),_=s("./src/features/addCommentForm/model/slice/addCommentFormSlice.ts"),C=s("./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss"),p=s("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"),A=s("./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");s.$Refresh$.runtime=s("./node_modules/react-refresh/runtime.js");var h=s.$Refresh$.signature(),F=function(){return F=Object.assign||function(e){for(var t,s=1,o=arguments.length;s<o;s++)for(var r in t=arguments[s])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},F.apply(this,arguments)},j={addCommentForm:_.addCommentFormReducer},x=function(e){h();var t=e.className,s=e.onSendComment,p=(0,d.useTranslation)().t,A=(0,a.useAppDispatch)(),x=(0,m.useSelector)(f.getAddCommentFormText),v=((0,m.useSelector)(f.getAddCommentFormError),(0,r.useCallback)((function(e){A(_.addCommentFormActions.setText(e))}),[A])),y=(0,r.useCallback)((function(){s(x||""),v("")}),[v,s,x]);return(0,o.jsx)(u.DynamicModuleLoader,F({reducers:j},{children:(0,o.jsxs)(c.HStack,F({justify:"between",max:!0,className:(0,n.classNames)(C.default.AddCommentForm,{},[t])},{children:[(0,o.jsx)(i.Input,{className:C.default.input,placeholder:p("type-comment"),value:x,onChange:v}),(0,o.jsx)(l.Button,F({theme:l.ButtonTheme.OUTLINE,onClick:y},{children:p("send")}))]}))}))};h(x,"zqURfNQPpkfVhjTfnViYss0Qwys=",!1,(function(){return[d.useTranslation,a.useAppDispatch,m.useSelector,m.useSelector]})),y=x;const v=x;var y;s.$Refresh$.register(y,"AddCommentForm");const g=s.$Refresh$.moduleId,b=p.getModuleExports(g);function S(t){{let s,o;return void 0!==A&&(s=A),"undefined"!=typeof __react_refresh_test__&&(o=__react_refresh_test__),p.executeRuntime(t,g,e.hot,s,o)}}"undefined"!=typeof Promise&&b instanceof Promise?b.then(S):S(b)},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss":(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var o=s("./node_modules/css-loader/dist/runtime/sourceMaps.js"),r=s.n(o),d=s("./node_modules/css-loader/dist/runtime/api.js"),m=s.n(d)()(r());m.push([e.id,".src-features-addCommentForm-ui-AddCommentForm-AddCommentForm-module__AddCommentForm--Zrfoe {\n  border: 1px solid var(--primary-color);\n  padding: 20px;\n}\n\n.src-features-addCommentForm-ui-AddCommentForm-AddCommentForm-module__input--gxRAk {\n  flex-grow: 1;\n}","",{version:3,sources:["webpack://./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss"],names:[],mappings:"AAAA;EACE,sCAAA;EACA,aAAA;AACF;;AAEA;EACE,YAAA;AACF",sourcesContent:[".AddCommentForm {\r\n  border: 1px solid var(--primary-color);\r\n  padding: 20px;\r\n}\r\n\r\n.input {\r\n  flex-grow: 1;\r\n}\r\n"],sourceRoot:""}]),m.locals={AddCommentForm:"src-features-addCommentForm-ui-AddCommentForm-AddCommentForm-module__AddCommentForm--Zrfoe",input:"src-features-addCommentForm-ui-AddCommentForm-AddCommentForm-module__input--gxRAk"};const n=m},"./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss":(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});var o=s("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=s.n(o),d=s("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),m=s.n(d),n=s("./node_modules/style-loader/dist/runtime/insertBySelector.js"),u=s.n(n),a=s("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),l=s.n(a),i=s("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),c=s.n(i),f=s("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_=s.n(f),C=s("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss"),p={};p.styleTagTransform=_(),p.setAttributes=l(),p.insert=u().bind(null,"head"),p.domAPI=m(),p.insertStyleElement=c();var A=r()(C.default,p);if(!C.default.locals||e.hot.invalidate){var h=!C.default.locals,F=h?C:C.default.locals;e.hot.accept("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss",(t=>{C=s("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/addCommentForm/ui/AddCommentForm/AddCommentForm.module.scss"),function(e,t,s){if(!e&&t||e&&!t)return!1;var o;for(o in e)if((!s||"default"!==o)&&e[o]!==t[o])return!1;for(o in t)if(!(s&&"default"===o||e[o]))return!1;return!0}(F,h?C:C.default.locals,h)?(F=h?C:C.default.locals,A(C.default)):e.hot.invalidate()}))}e.hot.dispose((function(){A()}));const j=C.default&&C.default.locals?C.default.locals:void 0},"./src/features/addCommentForm/model/selectors/addCommentFormSelectors.ts":(e,t,s)=>{s.r(t),s.d(t,{getAddCommentFormError:()=>m,getAddCommentFormText:()=>d});var o=s("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"),r=s("./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");s.$Refresh$.runtime=s("./node_modules/react-refresh/runtime.js");var d=function(e){var t,s;return null!==(s=null===(t=e.addCommentForm)||void 0===t?void 0:t.text)&&void 0!==s?s:""},m=function(e){var t;return null===(t=e.addCommentForm)||void 0===t?void 0:t.error};const n=s.$Refresh$.moduleId,u=o.getModuleExports(n);function a(t){{let s,d;return void 0!==r&&(s=r),"undefined"!=typeof __react_refresh_test__&&(d=__react_refresh_test__),o.executeRuntime(t,n,e.hot,s,d)}}"undefined"!=typeof Promise&&u instanceof Promise?u.then(a):a(u)},"./src/features/addCommentForm/model/slice/addCommentFormSlice.ts":(e,t,s)=>{s.r(t),s.d(t,{addCommentFormActions:()=>n,addCommentFormReducer:()=>u,addCommentFormSlice:()=>m});var o=s("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),r=s("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"),d=s("./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");s.$Refresh$.runtime=s("./node_modules/react-refresh/runtime.js");var m=(0,o.createSlice)({name:"addCommentForm",initialState:{text:"",error:""},reducers:{setText:function(e,t){e.text=t.payload}}}),n=m.actions,u=m.reducer;const a=s.$Refresh$.moduleId,l=r.getModuleExports(a);function i(t){{let s,o;return void 0!==d&&(s=d),"undefined"!=typeof __react_refresh_test__&&(o=__react_refresh_test__),r.executeRuntime(t,a,e.hot,s,o)}}"undefined"!=typeof Promise&&l instanceof Promise?l.then(i):i(l)}}]);
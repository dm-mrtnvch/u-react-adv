"use strict";(self.webpackChunkreact_advanced=self.webpackChunkreact_advanced||[]).push([[686],{5686:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Qe});var r,a=n(5893),o=n(3942),i=n(4611),l=n(4478),u=n(1150),s=n(5461),c=n(2276),d=n(7294),f=n(9373),p=n(4809);!function(e){e.USA="USA",e.EUROPE="Europe"}(r||(r={}));var v=n(4192),h=n(5910),b=n(6723),y=n(3855);function g(e,t){let[n,r]=(0,d.useState)(e),a=(0,y.E)(e);return(0,b.e)((()=>r(a.current)),[a,r,...t]),n}var m,x=n(3784),R=n(2351),O=n(2984),C=n(9362),E=n(1363),j=n(1497),S=n(4103),T=n(4575),P=n(6567),N=n(4157),w=n(7955),I=((m=I||{})[m.None=1]="None",m[m.Focusable=2]="Focusable",m[m.Hidden=4]="Hidden",m);let A=(0,R.yV)((function(e,t){let{features:n=1,...r}=e,a={ref:t,"aria-hidden":2==(2&n)||void 0,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4==(4&n)&&2!=(2&n)&&{display:"none"}}};return(0,R.sY)({ourProps:a,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})}));function k(e={},t=null,n=[]){for(let[r,a]of Object.entries(e))L(n,D(t,r),a);return n}function D(e,t){return e?e+"["+t+"]":t}function L(e,t,n){if(Array.isArray(n))for(let[r,a]of n.entries())L(e,D(t,r.toString()),a);else n instanceof Date?e.push([t,n.toISOString()]):"boolean"==typeof n?e.push([t,n?"1":"0"]):"string"==typeof n?e.push([t,n]):"number"==typeof n?e.push([t,`${n}`]):null==n?e.push([t,""]):k(n,t,e)}var U,_,M=n(5466),F=n(3781),z=((_=z||{})[_.Open=0]="Open",_[_.Closed=1]="Closed",_),V=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(V||{}),Q=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Q||{}),G=((U=G||{})[U.OpenListbox=0]="OpenListbox",U[U.CloseListbox=1]="CloseListbox",U[U.SetDisabled=2]="SetDisabled",U[U.SetOrientation=3]="SetOrientation",U[U.GoToOption=4]="GoToOption",U[U.Search=5]="Search",U[U.ClearSearch=6]="ClearSearch",U[U.RegisterOption=7]="RegisterOption",U[U.UnregisterOption=8]="UnregisterOption",U);function Y(e,t=(e=>e)){let n=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,r=(0,T.z2)(t(e.options.slice()),(e=>e.dataRef.current.domRef.current)),a=n?r.indexOf(n):null;return-1===a&&(a=null),{options:r,activeOptionIndex:a}}let H={1:e=>e.disabled||1===e.listboxState?e:{...e,activeOptionIndex:null,listboxState:1},0(e){if(e.disabled||0===e.listboxState)return e;let t=e.activeOptionIndex,{value:n,mode:r,compare:a}=e.propsRef.current,o=e.options.findIndex((e=>{let t=e.dataRef.current.value;return(0,O.E)(r,{1:()=>n.some((e=>a(e,t))),0:()=>a(n,t)})}));return-1!==o&&(t=o),{...e,listboxState:0,activeOptionIndex:t}},2:(e,t)=>e.disabled===t.disabled?e:{...e,disabled:t.disabled},3:(e,t)=>e.orientation===t.orientation?e:{...e,orientation:t.orientation},4(e,t){var n;if(e.disabled||1===e.listboxState)return e;let r=Y(e),a=(0,j.d)(t,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:a,activationTrigger:null!=(n=t.trigger)?n:1}},5:(e,t)=>{if(e.disabled||1===e.listboxState)return e;let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),a=(null!==e.activeOptionIndex?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find((e=>{var t;return!e.dataRef.current.disabled&&(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))})),o=a?e.options.indexOf(a):-1;return-1===o||o===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:o,activationTrigger:1}},6:e=>e.disabled||1===e.listboxState||""===e.searchQuery?e:{...e,searchQuery:""},7:(e,t)=>{let n={id:t.id,dataRef:t.dataRef},r=Y(e,(e=>[...e,n]));if(null===e.activeOptionIndex){let{value:a,mode:o,compare:i}=e.propsRef.current,l=t.dataRef.current.value;(0,O.E)(o,{1:()=>a.some((e=>i(e,l))),0:()=>i(a,l)})&&(r.activeOptionIndex=r.options.indexOf(n))}return{...e,...r}},8:(e,t)=>{let n=Y(e,(e=>{let n=e.findIndex((e=>e.id===t.id));return-1!==n&&e.splice(n,1),e}));return{...e,...n,activationTrigger:1}}},$=(0,d.createContext)(null);function B(e){let t=(0,d.useContext)($);if(null===t){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,B),t}return t}function W(e,t){return(0,O.E)(t.type,H,e,t)}$.displayName="ListboxContext";let K=d.Fragment,q=(0,R.yV)((function(e,t){let{value:n,name:r,onChange:a,disabled:o=!1,horizontal:i=!1,multiple:l=!1,...u}=e;const s=i?"horizontal":"vertical";let c=(0,x.T)(t),f=(0,d.useReducer)(W,{listboxState:1,propsRef:{current:{value:n,onChange:a,mode:l?1:0,compare:(0,F.z)(((e,t)=>e===t))}},labelRef:(0,d.createRef)(),buttonRef:(0,d.createRef)(),optionsRef:(0,d.createRef)(),disabled:o,orientation:s,options:[],searchQuery:"",activeOptionIndex:null,activationTrigger:1}),[{listboxState:p,propsRef:v,optionsRef:h,buttonRef:y},g]=f;v.current.value=n,v.current.mode=l?1:0,(0,b.e)((()=>{v.current.onChange=e=>(0,O.E)(v.current.mode,{0:()=>a(e),1(){let t=v.current.value.slice(),n=t.indexOf(e);return-1===n?t.push(e):t.splice(n,1),a(t)}})}),[a,v]),(0,b.e)((()=>g({type:2,disabled:o})),[o]),(0,b.e)((()=>g({type:3,orientation:s})),[s]),(0,w.O)([y,h],((e,t)=>{var n;g({type:1}),(0,T.sP)(t,T.tJ.Loose)||(e.preventDefault(),null==(n=y.current)||n.focus())}),0===p);let m=(0,d.useMemo)((()=>({open:0===p,disabled:o})),[p,o]),C={ref:c};return d.createElement($.Provider,{value:f},d.createElement(P.up,{value:(0,O.E)(p,{0:P.ZM.Open,1:P.ZM.Closed})},null!=r&&null!=n&&k({[r]:n}).map((([e,t])=>d.createElement(A,{features:I.Hidden,...(0,R.oA)({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:e,value:t})}))),(0,R.sY)({ourProps:C,theirProps:u,slot:m,defaultTag:K,name:"Listbox"})))})),J=(0,R.yV)((function(e,t){var n;let[r,a]=B("Listbox.Button"),o=(0,x.T)(r.buttonRef,t),i=`headlessui-listbox-button-${(0,h.M)()}`,l=(0,v.G)(),u=(0,F.z)((e=>{switch(e.key){case E.R.Space:case E.R.Enter:case E.R.ArrowDown:e.preventDefault(),a({type:0}),l.nextFrame((()=>{r.propsRef.current.value||a({type:4,focus:j.T.First})}));break;case E.R.ArrowUp:e.preventDefault(),a({type:0}),l.nextFrame((()=>{r.propsRef.current.value||a({type:4,focus:j.T.Last})}))}})),s=(0,F.z)((e=>{e.key===E.R.Space&&e.preventDefault()})),c=(0,F.z)((e=>{if((0,S.P)(e.currentTarget))return e.preventDefault();0===r.listboxState?(a({type:1}),l.nextFrame((()=>{var e;return null==(e=r.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(e.preventDefault(),a({type:0}))})),f=g((()=>{if(r.labelRef.current)return[r.labelRef.current.id,i].join(" ")}),[r.labelRef.current,i]),p=(0,d.useMemo)((()=>({open:0===r.listboxState,disabled:r.disabled})),[r]),b=e,y={ref:o,id:i,type:(0,N.f)(e,r.buttonRef),"aria-haspopup":!0,"aria-controls":null==(n=r.optionsRef.current)?void 0:n.id,"aria-expanded":r.disabled?void 0:0===r.listboxState,"aria-labelledby":f,disabled:r.disabled,onKeyDown:u,onKeyUp:s,onClick:c};return(0,R.sY)({ourProps:y,theirProps:b,slot:p,defaultTag:"button",name:"Listbox.Button"})})),Z=(0,R.yV)((function(e,t){let[n]=B("Listbox.Label"),r=`headlessui-listbox-label-${(0,h.M)()}`,a=(0,x.T)(n.labelRef,t),o=(0,F.z)((()=>{var e;return null==(e=n.buttonRef.current)?void 0:e.focus({preventScroll:!0})})),i=(0,d.useMemo)((()=>({open:0===n.listboxState,disabled:n.disabled})),[n]);return(0,R.sY)({ourProps:{ref:a,id:r,onClick:o},theirProps:e,slot:i,defaultTag:"label",name:"Listbox.Label"})})),X=R.AN.RenderStrategy|R.AN.Static,ee=(0,R.yV)((function(e,t){var n;let[r,a]=B("Listbox.Options"),o=(0,x.T)(r.optionsRef,t),i=`headlessui-listbox-options-${(0,h.M)()}`,l=(0,v.G)(),u=(0,v.G)(),s=(0,P.oJ)(),c=null!==s?s===P.ZM.Open:0===r.listboxState;(0,d.useEffect)((()=>{var e;let t=r.optionsRef.current;!t||0===r.listboxState&&t!==(null==(e=(0,M.r)(t))?void 0:e.activeElement)&&t.focus({preventScroll:!0})}),[r.listboxState,r.optionsRef]);let f=(0,F.z)((e=>{switch(u.dispose(),e.key){case E.R.Space:if(""!==r.searchQuery)return e.preventDefault(),e.stopPropagation(),a({type:5,value:e.key});case E.R.Enter:if(e.preventDefault(),e.stopPropagation(),null!==r.activeOptionIndex){let{dataRef:e}=r.options[r.activeOptionIndex];r.propsRef.current.onChange(e.current.value)}0===r.propsRef.current.mode&&(a({type:1}),(0,C.k)().nextFrame((()=>{var e;return null==(e=r.buttonRef.current)?void 0:e.focus({preventScroll:!0})})));break;case(0,O.E)(r.orientation,{vertical:E.R.ArrowDown,horizontal:E.R.ArrowRight}):return e.preventDefault(),e.stopPropagation(),a({type:4,focus:j.T.Next});case(0,O.E)(r.orientation,{vertical:E.R.ArrowUp,horizontal:E.R.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),a({type:4,focus:j.T.Previous});case E.R.Home:case E.R.PageUp:return e.preventDefault(),e.stopPropagation(),a({type:4,focus:j.T.First});case E.R.End:case E.R.PageDown:return e.preventDefault(),e.stopPropagation(),a({type:4,focus:j.T.Last});case E.R.Escape:return e.preventDefault(),e.stopPropagation(),a({type:1}),l.nextFrame((()=>{var e;return null==(e=r.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));case E.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(a({type:5,value:e.key}),u.setTimeout((()=>a({type:6})),350))}})),p=g((()=>{var e,t,n;return null!=(n=null==(e=r.labelRef.current)?void 0:e.id)?n:null==(t=r.buttonRef.current)?void 0:t.id}),[r.labelRef.current,r.buttonRef.current]),b=(0,d.useMemo)((()=>({open:0===r.listboxState})),[r]),y=e,m={"aria-activedescendant":null===r.activeOptionIndex||null==(n=r.options[r.activeOptionIndex])?void 0:n.id,"aria-multiselectable":1===r.propsRef.current.mode||void 0,"aria-labelledby":p,"aria-orientation":r.orientation,id:i,onKeyDown:f,role:"listbox",tabIndex:0,ref:o};return(0,R.sY)({ourProps:m,theirProps:y,slot:b,defaultTag:"ul",features:X,visible:c,name:"Listbox.Options"})})),te=(0,R.yV)((function(e,t){let{disabled:n=!1,value:r,...a}=e,[o,i]=B("Listbox.Option"),l=`headlessui-listbox-option-${(0,h.M)()}`,u=null!==o.activeOptionIndex&&o.options[o.activeOptionIndex].id===l,{value:s,compare:c}=o.propsRef.current,f=(0,O.E)(o.propsRef.current.mode,{1:()=>s.some((e=>c(e,r))),0:()=>c(s,r)}),p=(0,d.useRef)(null),v=(0,x.T)(t,p);(0,b.e)((()=>{if(0!==o.listboxState||!u||0===o.activationTrigger)return;let e=(0,C.k)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=p.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[p,u,o.listboxState,o.activationTrigger,o.activeOptionIndex]);let y=(0,d.useRef)({disabled:n,value:r,domRef:p});(0,b.e)((()=>{y.current.disabled=n}),[y,n]),(0,b.e)((()=>{y.current.value=r}),[y,r]),(0,b.e)((()=>{var e,t;y.current.textValue=null==(t=null==(e=p.current)?void 0:e.textContent)?void 0:t.toLowerCase()}),[y,p]);let g=(0,F.z)((()=>o.propsRef.current.onChange(r)));(0,b.e)((()=>(i({type:7,id:l,dataRef:y}),()=>i({type:8,id:l}))),[y,l]);let m=(0,F.z)((e=>{if(n)return e.preventDefault();g(),0===o.propsRef.current.mode&&(i({type:1}),(0,C.k)().nextFrame((()=>{var e;return null==(e=o.buttonRef.current)?void 0:e.focus({preventScroll:!0})})))})),E=(0,F.z)((()=>{if(n)return i({type:4,focus:j.T.Nothing});i({type:4,focus:j.T.Specific,id:l})})),S=(0,F.z)((()=>{n||u||i({type:4,focus:j.T.Specific,id:l,trigger:0})})),T=(0,F.z)((()=>{n||!u||i({type:4,focus:j.T.Nothing})})),P=(0,d.useMemo)((()=>({active:u,selected:f,disabled:n})),[u,f,n]);return(0,R.sY)({ourProps:{id:l,ref:v,role:"option",tabIndex:!0===n?void 0:-1,"aria-disabled":!0===n||void 0,"aria-selected":!0===f||void 0,disabled:void 0,onClick:m,onFocus:E,onPointerMove:S,onMouseMove:S,onPointerLeave:T,onMouseLeave:T},theirProps:a,slot:P,defaultTag:"li",name:"Listbox.Option"})})),ne=Object.assign(q,{Button:J,Label:Z,Options:ee,Option:te});var re=n(9161),ae=function(){return ae=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},ae.apply(this,arguments)},oe={"bottom left":"oFXYv034","bottom right":"Jl5DRf3z","top left":"aacUeHXS","top right":"c68gv_LQ"};function ie(e){var t=e.className,n=e.items,r=e.defaultValue,o=e.value,l=e.onChange,u=e.readonly,s=e.direction,c=void 0===s?"bottom left":s,p=e.label,v=[oe[c]];return(0,a.jsxs)(f.U,ae({gap:"8"},{children:[p&&(0,a.jsx)("span",{children:"".concat(p,">")}),(0,a.jsxs)(ne,ae({as:"div",disabled:u,className:(0,i.A)("LsvjvEi8",{},[t]),value:o,onChange:l},{children:[(0,a.jsx)(ne.Button,ae({disabled:u,className:"qrO2mTX9"},{children:(0,a.jsx)(re.zx,ae({disabled:u},{children:null!=o?o:r}))})),(0,a.jsx)(ne.Options,ae({className:(0,i.A)("V57wMCSt",{},v)},{children:null==n?void 0:n.map((function(e){return(0,a.jsx)(ne.Option,ae({value:e.value,as:d.Fragment,disabled:e.disabled},{children:function(t){var n,r=t.active,o=t.selected;return(0,a.jsxs)("li",ae({className:(0,i.A)("mBjSAlwm",(n={},n.lE7gaHdr=r,n.yYTJVDnW=e.disabled,n))},{children:[o&&"!!!",e.content]}))}}),e.value)}))}))]}))]}))}var le,ue=[{value:r.USA,content:r.USA},{value:r.EUROPE,content:r.EUROPE}],se=(0,d.memo)((function(e){var t=e.value,n=e.onChange,r=e.readonly,o=e.className,i=(0,l.$)().t,u=(0,d.useCallback)((function(e){null==n||n(e)}),[n]);return(0,a.jsx)(ie,{readonly:r,className:o,items:ue,value:t,onChange:u,defaultValue:i("select-country"),label:i("select-country"),direction:"top right"})}));!function(e){e.USD="usd",e.EUR="eur",e.POUND="pound"}(le||(le={}));var ce=[{value:le.USD,content:le.USD},{value:le.EUR,content:le.EUR},{value:le.POUND,content:le.POUND}],de=(0,d.memo)((function(e){var t=e.value,n=e.onChange,r=e.readonly,o=e.className,i=(0,l.$)().t,u=(0,d.useCallback)((function(e){null==n||n(e)}),[n]);return(0,a.jsx)(ie,{readonly:r,className:o,items:ce,value:t,onChange:u,defaultValue:i("select-currency"),label:i("select-currency"),direction:"top right"})})),fe=n(71),pe=n(6925),ve=n(4002);const he={ProfileCard:"wW9jgKKD",loading:"t07ZxFGs",error:"i5YK3SSb",editing:"DjTe7269"};var be,ye=function(){return ye=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},ye.apply(this,arguments)},ge=function(e){var t,n,r=e.className,o=e.data,u=e.isLoading,s=e.error,c=e.readonly,d=e.onChangeFirstname,v=e.onChangeLastname,h=e.onChangeCity,b=e.onChangeAge,y=e.onChangeUsername,g=e.onChangeAvatar,m=e.onChangeCurrency,x=e.onChangeCountry,R=(0,l.$)().t;if(u)return(0,a.jsx)(f.U,ye({justify:"center",className:(0,i.A)(he.ProfileCard,(t={},t[he.loading]=!0,t),[r])},{children:(0,a.jsx)(ve.a,{})}));if(s)return(0,a.jsx)(f.U,ye({justify:"center",className:(0,i.A)(he.ProfileCard,{},[r,he.error])},{children:(0,a.jsx)(p.xv,{theme:p.lg.ERROR,title:R("error-while-profile-loading"),text:R("please-reload-the-page"),align:p.PH.CENTER})}));var O=((n={})[he.editing]=!c,n);return(0,a.jsxs)(f.g,ye({gap:"8",max:!0,className:(0,i.A)(he.ProfileCard,O,[r])},{children:[(null==o?void 0:o.avatar)&&(0,a.jsx)(f.U,ye({justify:"center",max:!0,className:he.avatarWrapper},{children:(0,a.jsx)(fe.q,{src:null==o?void 0:o.avatar})})),(0,a.jsx)(pe.I,{value:null==o?void 0:o.first,placeholder:R("name"),className:he.input,onChange:d,readonly:c,"data-testid":"ProfileCard.firstname"}),(0,a.jsx)(pe.I,{value:null==o?void 0:o.lastname,placeholder:R("lastname"),className:he.input,onChange:v,readonly:c,"data-testid":"ProfileCard.lastname"}),(0,a.jsx)(pe.I,{type:"number",value:null==o?void 0:o.age,placeholder:R("age"),className:he.input,onChange:b,readonly:c}),(0,a.jsx)(pe.I,{value:null==o?void 0:o.city,placeholder:R("city"),className:he.input,onChange:h,readonly:c}),(0,a.jsx)(pe.I,{value:null==o?void 0:o.username,placeholder:R("username"),className:he.input,onChange:y,readonly:c}),(0,a.jsx)(pe.I,{value:null==o?void 0:o.avatar,placeholder:R("avatar"),className:he.input,onChange:g,readonly:c}),(0,a.jsx)(de,{className:he.input,value:null==o?void 0:o.currency,onChange:m,readonly:c}),(0,a.jsx)(se,{className:he.input,value:null==o?void 0:o.country,onChange:x,readonly:c})]}))},me=function(e){var t;return null===(t=e.profile)||void 0===t?void 0:t.readonly},xe=n(3574),Re=n(4268),Oe=function(e){var t;return null===(t=e.profile)||void 0===t?void 0:t.form};!function(e){e.INCORRECT_USER_DATA="INCORRECT_USER_DATA",e.INCORRECT_AGE="INCORRECT_AGE",e.INCORRECT_COUNTRY="INCORRECT_COUNTRY",e.NO_DATA="NO_DATA",e.SERVER_ERROR="SERVER_ERROR"}(be||(be={}));var Ce=(0,Re.hg)("profile/updateProfileData",(function(e,t){return r=function(){var e,n,r,a,o,i,l;return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(l){return function(u){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}}(this,(function(u){switch(u.label){case 0:if(e=t.extra,n=t.rejectWithValue,r=t.getState,a=Oe(r()),(o=function(e){if(!e)return[be.NO_DATA];var t=e.first,n=e.lastname,r=e.age,a=e.country,o=[];return t&&n||o.push(be.INCORRECT_USER_DATA),r&&Number.isInteger(r)||o.push(be.INCORRECT_AGE),a||o.push(be.INCORRECT_COUNTRY),o}(a)).length)return[2,n(o)];u.label=1;case 1:return u.trys.push([1,3,,4]),[4,e.api.put("/profile/".concat(null==a?void 0:a.id),a)];case 2:if(!(i=u.sent()).data)throw new Error;return[2,i.data];case 3:return l=u.sent(),console.log("e",l),[2,n([be.SERVER_ERROR])];case 4:return[2]}}))},new((n=void 0)||(n=Promise))((function(e,t){function a(e){try{i(r.next(e))}catch(e){t(e)}}function o(e){try{i(r.throw(e))}catch(e){t(e)}}function i(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(a,o)}i((r=r.apply(void 0,[])).next())}));var n,r})),Ee=(0,Re.hg)("profile/fetchProfileData",(function(e,t){return r=function(){var n,r,a,o;return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(l){return function(u){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}}(this,(function(i){switch(i.label){case 0:n=t.extra,r=t.rejectWithValue,i.label=1;case 1:return i.trys.push([1,3,,4]),[4,n.api.get("/profile/".concat(e))];case 2:if(!(a=i.sent()).data)throw new Error;return[2,a.data];case 3:return o=i.sent(),console.log("e",o),[2,r("error")];case 4:return[2]}}))},new((n=void 0)||(n=Promise))((function(e,t){function a(e){try{i(r.next(e))}catch(e){t(e)}}function o(e){try{i(r.throw(e))}catch(e){t(e)}}function i(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(a,o)}i((r=r.apply(void 0,[])).next())}));var n,r})),je=function(){return je=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},je.apply(this,arguments)},Se=(0,Re.oM)({name:"profile",initialState:{readonly:!0,isLoading:!1,error:void 0,data:void 0},reducers:{setReadonly:function(e,t){e.readonly=t.payload},cancelEdit:function(e){e.readonly=!0,e.validateErrors=void 0,e.form=e.data},updateProfile:function(e,t){e.form=je(je({},e.form),t.payload)}},extraReducers:function(e){e.addCase(Ee.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(Ee.fulfilled,(function(e,t){e.isLoading=!1,e.data=t.payload,e.form=t.payload})).addCase(Ee.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload})).addCase(Ce.pending,(function(e){e.validateErrors=void 0,e.isLoading=!0})).addCase(Ce.fulfilled,(function(e,t){e.isLoading=!1,e.data=t.payload,e.form=t.payload,e.readonly=!0,e.validateErrors=void 0})).addCase(Ce.rejected,(function(e,t){e.isLoading=!1,e.validateErrors=t.payload}))}}),Te=Se.actions,Pe=Se.reducer,Ne=function(e){var t;return null===(t=e.profile)||void 0===t?void 0:t.data},we=function(){return we=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},we.apply(this,arguments)},Ie=(0,d.memo)((function(e){var t=e.className,n=(0,s.T)(),r=(0,l.$)().t,u=(0,o.v9)(xe.m5),c=(0,o.v9)(Ne),v=(null==u?void 0:u.id)===(null==c?void 0:c.id),h=(0,o.v9)(me),b=(0,d.useCallback)((function(){n(Te.setReadonly(!1))}),[n]),y=(0,d.useCallback)((function(){n(Te.cancelEdit())}),[n]),g=(0,d.useCallback)((function(){n(Ce())}),[n]);return(0,a.jsxs)(f.U,we({max:!0,justify:"between",className:(0,i.A)("",{},[t])},{children:[(0,a.jsx)(p.xv,{title:r("Profile")}),v&&(0,a.jsx)("div",{children:h?(0,a.jsx)(re.zx,we({theme:re.bn.OUTLINE,onClick:b,"data-testid":"EditableProfileCardHeader.EditButton"},{children:r("Edit")})):(0,a.jsxs)(f.U,we({gap:"8"},{children:[(0,a.jsx)(re.zx,we({theme:re.bn.OUTLINE_RED,onClick:y,"data-testid":"EditableProfileCardHeader.CancelButton"},{children:r("Cancel")})),(0,a.jsx)(re.zx,we({theme:re.bn.OUTLINE,onClick:g,"data-testid":"EditableProfileCardHeader.SaveButton"},{children:r("Save")}))]}))})]}))})),Ae=function(e){var t;return null===(t=e.profile)||void 0===t?void 0:t.error},ke=function(e){var t;return null===(t=e.profile)||void 0===t?void 0:t.validateErrors},De=function(e){var t;return null===(t=e.profile)||void 0===t?void 0:t.isLoading},Le=function(){return Le=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Le.apply(this,arguments)},Ue={profile:Pe},_e=(0,d.memo)((function(e){var t,n=e.className,r=e.id,v=(0,l.$)("profile").t,h=(0,s.T)(),b=(0,o.v9)(Oe),y=(0,o.v9)(De),g=(0,o.v9)(Ae),m=(0,o.v9)(me),x=(0,o.v9)(ke),R=((t={})[be.SERVER_ERROR]=v("server-error"),t[be.NO_DATA]=v("no-data"),t[be.INCORRECT_USER_DATA]=v("incorrect-user-data"),t[be.INCORRECT_COUNTRY]=v("incorrect-country"),t[be.INCORRECT_AGE]=v("incorrect-age"),t);(0,c.Q)((function(){r&&h(Ee(r))}));var O=(0,d.useCallback)((function(e){h(Te.updateProfile({first:e||""}))}),[h]),C=(0,d.useCallback)((function(e){h(Te.updateProfile({lastname:e||""}))}),[h]),E=(0,d.useCallback)((function(e){h(Te.updateProfile({city:e||""}))}),[h]),j=(0,d.useCallback)((function(e){h(Te.updateProfile({age:Number(e||0)}))}),[h]),S=(0,d.useCallback)((function(e){h(Te.updateProfile({username:e||""}))}),[h]),T=(0,d.useCallback)((function(e){h(Te.updateProfile({avatar:e||""}))}),[h]),P=(0,d.useCallback)((function(e){h(Te.updateProfile({currency:e}))}),[h]),N=(0,d.useCallback)((function(e){h(Te.updateProfile({country:e}))}),[h]);return(0,a.jsx)(u.W,Le({reducers:Ue},{children:(0,a.jsxs)(f.g,Le({max:!0,gap:"8",className:(0,i.A)("",{},[n])},{children:[(0,a.jsx)(Ie,{}),(null==x?void 0:x.length)&&x.map((function(e){return(0,a.jsx)(p.xv,{text:e,theme:p.lg.ERROR,"data-testid":"EditableProfileCard.Error"},R[e])})),(0,a.jsx)(ge,{data:b,isLoading:y,error:g,readonly:m,onChangeFirstname:O,onChangeLastname:C,onChangeCity:E,onChangeAge:j,onChangeUsername:S,onChangeAvatar:T,onChangeCurrency:P,onChangeCountry:N})]}))}))})),Me=n(9250),Fe=n(4882),ze=n(314),Ve=function(){return Ve=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Ve.apply(this,arguments)};const Qe=function(e){var t=e.className,n=(0,l.$)("profile").t,r=(0,Me.UO)().id;return r?(0,a.jsx)(ze.T,Ve({className:(0,i.A)("",{},[t])},{children:(0,a.jsx)(Fe.g,Ve({gap:"16",max:!0},{children:(0,a.jsx)(_e,{id:r})}))})):(0,a.jsx)(p.xv,{text:n("no profile")})}},1150:(e,t,n)=>{n.d(t,{W:()=>i});var r=n(5893),a=n(7294),o=n(3942),i=function(e){var t=e.children,n=e.reducers,i=e.removeAfterUnmount,l=void 0===i||i,u=(0,o.oR)(),s=(0,o.I0)();return(0,a.useEffect)((function(){var e=u.reducerManager.getMountedReducers();return Object.entries(n).forEach((function(t){var n=t[0],r=t[1];e[n]||(u.reducerManager.add(n,r),s({type:"@INIT ".concat(n," reducer")}))})),function(){l&&Object.entries(n).forEach((function(e){var t=e[0];e[1],u.reducerManager.remove(t),s({type:"@DESTROY ".concat(t," reducer")})}))}}),[]),(0,r.jsx)(r.Fragment,{children:t})}},6925:(e,t,n)=>{n.d(t,{I:()=>l});var r=n(5893),a=n(7294),o=n(4611),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},l=(0,a.memo)((function(e){var t=e.className,n=e.value,l=e.onChange,u=e.type,s=void 0===u?"text":u,c=e.placeholder,d=e.autoFocus,f=e.readonly,p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","value","onChange","type","placeholder","autoFocus","readonly"]),v=(0,a.useState)(!1),h=v[0],b=v[1],y=(0,a.useState)(0),g=y[0],m=y[1],x=(0,a.useRef)(null),R=h&&!f;return(0,a.useEffect)((function(){var e;d&&(b(!0),null===(e=null==x?void 0:x.current)||void 0===e||e.focus())}),[d]),(0,r.jsxs)("div",i({className:(0,o.A)("LuFDUWoP",{},[t])},{children:[c&&(0,r.jsx)("div",i({className:"emAQQ85i"},{children:"".concat(c,">")})),(0,r.jsxs)("div",i({className:"y1GiFC_L"},{children:[(0,r.jsx)("input",i({ref:x,type:s,value:n,onChange:function(e){null==l||l(e.target.value)},className:"LVdIPwcx",onFocus:function(){b(!0)},onBlur:function(){b(!1)},onSelect:function(e){var t;m((null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.selectionStart)||0)},readOnly:f},p)),R&&(0,r.jsx)("span",{className:"lqMFGBuL",style:{left:"".concat(9*g,"px")}})]}))]}))}))},314:(e,t,n)=>{n.d(t,{D:()=>f,T:()=>p});var r=n(5893),a=n(4611),o=n(7294),i=n(5461),l=n(6294),u=n(9250),s=n(2276),c=n(3942),d=function(){return d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},d.apply(this,arguments)},f="PAGE_ID",p=(0,o.memo)((function(e){var t=e.className,n=e.children,p=e.onScrollEnd,v=(0,o.useRef)(),h=(0,o.useRef)(),b=(0,i.T)(),y=(0,u.TH)().pathname,g=(0,c.v9)((function(e){return(0,l.Qi)(e,y)}));!function(e){var t=e.callback,n=e.wrapperRef,r=e.triggerRef,a=(0,o.useRef)(null);(0,o.useEffect)((function(){var e=n.current,o=r.current;if(t){var i={root:e,rootMargin:"1px",threshold:1};a.current=new IntersectionObserver((function(e){e[0].isIntersecting&&t()}),i),a.current.observe(o)}return function(){a.current&&o&&a.current.unobserve(o)}}),[t,r,n])}({triggerRef:h,wrapperRef:v,callback:p}),(0,s.Q)((function(){v.current.scrollTop=g}));var m,x,R=(m=function(e){b(l.Aw.setScrollPosition({position:e.currentTarget.scrollTop,path:y}))},x=(0,o.useRef)(!1),(0,o.useCallback)((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];x.current||(m.apply(void 0,e),x.current=!0,setTimeout((function(){x.current=!1}),500))}),[m,500]));return(0,r.jsxs)("main",d({ref:v,className:(0,a.A)("a83jDcrK",{},[t]),onScroll:R,id:f},{children:[n,p?(0,r.jsx)("div",{className:"VaPQ__zP",ref:h}):null]}))}))},5461:(e,t,n)=>{n.d(t,{T:()=>a});var r=n(3942),a=function(){return(0,r.I0)()}},2276:(e,t,n)=>{n.d(t,{Q:()=>a});var r=n(7294);function a(e){(0,r.useEffect)((function(){e()}),[])}},9373:(e,t,n)=>{n.d(t,{U:()=>i,g:()=>l.g});var r=n(5893),a=n(5059),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)},i=function(e){return(0,r.jsx)(a.k,o({direction:"row"},e))},l=n(4882)}}]);
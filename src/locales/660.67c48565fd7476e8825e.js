"use strict";(self.webpackChunkreact_advanced=self.webpackChunkreact_advanced||[]).push([[660],{1017:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var r=n(5893),a=n(2918),o=n(7294),i=n(3942),l=n(4611),c=n(1150),s=n(5461),u=n(2276),f=n(314),d=n(9655),v=n(4478),p=function(){return p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},p.apply(this,arguments)},h=function(e){var t=e.className,n=e.label,a=e.options,i=e.value,c=e.onChange,s=e.readonly,u=(0,o.useMemo)((function(){return null==a?void 0:a.map((function(e){return(0,r.jsx)("option",p({className:"JkXz98qY",value:e.value},{children:e.content}),e.value)}))}),[a]);return(0,r.jsxs)("div",p({className:(0,l.A)("cidfdn6H",{},[t])},{children:[n&&(0,r.jsx)("span",p({className:"G1uuf7Bp"},{children:"".concat(n," >")})),(0,r.jsx)("select",p({disabled:s,className:"VOKOuKGo",value:i,onChange:function(e){null==c||c(e.target.value)}},{children:u}))]}))},y=n(6017),g=function(){return g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},g.apply(this,arguments)},b=(0,o.memo)((function(e){var t=e.sort,n=e.order,a=e.className,i=e.onChangeSort,c=e.onChangeOrder,s=(0,v.$)().t,u=(0,o.useMemo)((function(){return[{value:"asc",content:s("ascending")},{value:"desc",content:s("descending")}]}),[s]),f=(0,o.useMemo)((function(){return[{value:y.$B.TITLE,content:s("title")},{value:y.$B.VIEWS,content:s("views count")},{value:y.$B.CREATED,content:s("created at")}]}),[s]);return(0,r.jsxs)("div",g({className:(0,l.A)("gSPXPxAR",{},[a])},{children:[(0,r.jsx)(h,{options:f,label:s("sort by"),value:t,onChange:i}),(0,r.jsx)(h,{options:u,label:s("by"),value:n,onChange:c,className:"Fez_9DSn"})]}))})),m=n(5022),w=n(6925),x=n(4268),j=function(e){var t;return(null===(t=e.articlesPage)||void 0===t?void 0:t.isLoading)||!1},P=function(e){var t;return(null===(t=e.articlesPage)||void 0===t?void 0:t.view)||a.GA.SMALL},S=function(e){var t;return(null===(t=e.articlesPage)||void 0===t?void 0:t.page)||1},O=function(e){var t,n;return null!==(n=null===(t=e.articlesPage)||void 0===t?void 0:t.sort)&&void 0!==n?n:a.$B.CREATED},C=function(e){var t,n;return null!==(n=null===(t=e.articlesPage)||void 0===t?void 0:t.order)&&void 0!==n?n:"asc"},k=function(e){var t,n;return null!==(n=null===(t=e.articlesPage)||void 0===t?void 0:t.search)&&void 0!==n?n:""},A=function(e){var t,n;return null!==(n=null===(t=e.articlesPage)||void 0===t?void 0:t.type)&&void 0!==n?n:a.Iq.ALL},L=(0,x.hg)("articlesPage/fetchArticlesList",(function(e,t){return r=function(){var e,n,r,o,i,l,c,s,u,f;return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}(this,(function(d){switch(d.label){case 0:e=t.extra,n=t.rejectWithValue,r=t.getState,o=function(e){var t;return(null===(t=e.articlesPage)||void 0===t?void 0:t.limit)||9}(r()),i=O(r()),l=C(r()),c=k(r()),s=S(r()),u=A(r()),d.label=1;case 1:return d.trys.push([1,3,,4]),v={sort:i,order:l,search:c,type:u},window.history.pushState(null,"",function(e){var t=new URLSearchParams(window.location.search);return Object.entries(e).forEach((function(e){var n=e[0],r=e[1];void 0!==r&&t.set(n,r)})),"?".concat(t.toString())}(v)),[4,e.api.get("/articles",{params:{_expand:"user",_limit:o,_page:s,_sort:i,_order:l,q:c,type:u===a.Iq.ALL?void 0:u}})];case 2:if(!(f=d.sent()).data)throw new Error;return[2,f.data];case 3:return d.sent(),[2,n("error")];case 4:return[2]}var v}))},new((n=void 0)||(n=Promise))((function(e,t){function a(e){try{i(r.next(e))}catch(e){t(e)}}function o(e){try{i(r.throw(e))}catch(e){t(e)}}function i(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(a,o)}i((r=r.apply(void 0,[])).next())}));var n,r})),N=n(7665),T=(0,x.HF)({selectId:function(e){return e.id}}),E=T.getSelectors((function(e){return e.articlesPage||T.getInitialState()})),I=(0,x.oM)({name:"articlesPageSlice",initialState:T.getInitialState({isLoading:!1,error:void 0,ids:[],entities:{},view:a.GA.SMALL,page:1,limit:9,order:"asc",search:"",sort:a.$B.CREATED,hasMore:!0,_inited:!1,type:a.Iq.ALL}),reducers:{setView:function(e,t){e.view=t.payload,localStorage.setItem(N.f,t.payload)},setPage:function(e,t){e.page=t.payload},setLimit:function(e,t){e.limit=t.payload},setOrder:function(e,t){e.order=t.payload},setSearch:function(e,t){e.search=t.payload},setSort:function(e,t){e.sort=t.payload},setType:function(e,t){e.type=t.payload},initState:function(e){var t=localStorage.getItem(N.f);e.view=t,e.limit=t===a.GA.BIG?4:9,e._inited=!0}},extraReducers:function(e){e.addCase(L.pending,(function(e,t){e.error=void 0,e.isLoading=!0,t.meta.arg.replace&&T.removeAll(e)})).addCase(L.fulfilled,(function(e,t){e.isLoading=!1,e.hasMore=t.payload.length>=e.limit,t.meta.arg.replace?T.setAll(e,t.payload):T.addMany(e,t.payload)})).addCase(L.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload}))}}),G=I.reducer,_=I.actions;const M={sortWrapper:"pyOjonnp",search:"QkNSez8q",tabs:"JHbc4jKB"};var B=function(){return B=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},B.apply(this,arguments)},q=(0,o.memo)((function(e){var t,n,c=e.className,u=(0,s.T)(),f=(0,v.$)().t,d=(0,i.v9)(P),p=(0,i.v9)(O),h=(0,i.v9)(C),y=(0,i.v9)(k),g=(0,i.v9)(A),x=(0,o.useCallback)((function(){u(L({replace:!0}))}),[u]),j=(t=x,n=(0,o.useRef)(!1),(0,o.useCallback)((function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];n.current&&clearTimeout(n.current),n.current=setTimeout((function(){t.apply(void 0,e)}),500)}),[t,500])),S=(0,o.useCallback)((function(e){u(_.setView(e)),u(_.setPage(1)),x()}),[u,x]),N=(0,o.useCallback)((function(e){u(_.setSort(e)),u(_.setPage(1)),x()}),[u,x]),T=(0,o.useCallback)((function(e){u(_.setOrder(e)),u(_.setPage(1)),x()}),[u,x]),E=(0,o.useCallback)((function(e){u(_.setSearch(e)),u(_.setPage(1)),j()}),[j,u]),I=(0,o.useCallback)((function(e){u(_.setType(e)),u(_.setPage(1)),x()}),[x,u]);return(0,r.jsxs)("div",B({className:(0,l.A)(M.ArticlesPageFilters,{},[c])},{children:[(0,r.jsxs)("div",B({className:M.sortWrapper},{children:[(0,r.jsx)(b,{sort:p,order:h,onChangeSort:N,onChangeOrder:T}),(0,r.jsx)(a.Vv,{view:d,onViewClick:S})]})),(0,r.jsx)(m.Z,B({className:M.search},{children:(0,r.jsx)(w.I,{value:y,onChange:E,placeholder:f("search")})})),(0,r.jsx)(a.XL,{value:g,onChangeType:I,className:M.tabs})]}))})),F=(0,x.hg)("articlesPage/initArticlesPage",(function(e,t){return r=function(){var n,r,a,o,i,l,c;return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}(this,(function(s){return n=t.getState,r=t.dispatch,a=function(e){var t;return null===(t=e.articlesPage)||void 0===t?void 0:t._inited}(n()),a||(o=e.get("order"),i=e.get("sort"),l=e.get("search"),c=e.get("type"),o&&r(_.setOrder(o)),i&&r(_.setSort(i)),l&&r(_.setSearch(l)),c&&r(_.setType(c)),r(_.initState()),r(L({}))),[2]}))},new((n=void 0)||(n=Promise))((function(e,t){function a(e){try{i(r.next(e))}catch(e){t(e)}}function o(e){try{i(r.throw(e))}catch(e){t(e)}}function i(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(a,o)}i((r=r.apply(void 0,[])).next())}));var n,r})),R=(0,x.hg)("articlesPage/fetchNextArticlesPage",(function(e,t){return r=function(){var e,n,r,a,o;return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}(this,(function(i){return e=t.getState,n=t.dispatch,r=S(e()),a=function(e){var t;return null===(t=e.articlesPage)||void 0===t?void 0:t.hasMore}(e()),o=j(e()),a&&!o&&(n(_.setPage(r+1)),n(L({}))),[2]}))},new((n=void 0)||(n=Promise))((function(e,t){function a(e){try{i(r.next(e))}catch(e){t(e)}}function o(e){try{i(r.throw(e))}catch(e){t(e)}}function i(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(a,o)}i((r=r.apply(void 0,[])).next())}));var n,r})),V=function(){return V=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},V.apply(this,arguments)},$={articlesPage:G};const D=(0,o.memo)((function(e){var t=e.className,n=(0,s.T)(),v=(0,i.v9)(E.selectAll),p=(0,i.v9)(j),h=(0,i.v9)(P),y=(0,d.lr)()[0],g=(0,o.useCallback)((function(){n(R())}),[n]);return(0,u.Q)((function(){n(F(y))})),(0,r.jsx)(c.W,V({reducers:$,removeAfterUnmount:!1},{children:(0,r.jsxs)(f.T,V({onScrollEnd:g,className:(0,l.A)("i0h17Gqm",{},[t])},{children:[(0,r.jsx)(q,{}),(0,r.jsx)(a.wD,{className:"UsH35LqR",isLoading:p,view:h,articles:v})]}))}))}))},6925:(e,t,n)=>{n.d(t,{I:()=>l});var r=n(5893),a=n(7294),o=n(4611),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},l=(0,a.memo)((function(e){var t=e.className,n=e.value,l=e.onChange,c=e.type,s=void 0===c?"text":c,u=e.placeholder,f=e.autoFocus,d=e.readonly,v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","value","onChange","type","placeholder","autoFocus","readonly"]),p=(0,a.useState)(!1),h=p[0],y=p[1],g=(0,a.useState)(0),b=g[0],m=g[1],w=(0,a.useRef)(null),x=h&&!d;return(0,a.useEffect)((function(){var e;f&&(y(!0),null===(e=null==w?void 0:w.current)||void 0===e||e.focus())}),[f]),(0,r.jsxs)("div",i({className:(0,o.A)("LuFDUWoP",{},[t])},{children:[u&&(0,r.jsx)("div",i({className:"emAQQ85i"},{children:"".concat(u,">")})),(0,r.jsxs)("div",i({className:"y1GiFC_L"},{children:[(0,r.jsx)("input",i({ref:w,type:s,value:n,onChange:function(e){null==l||l(e.target.value)},className:"LVdIPwcx",onFocus:function(){y(!0)},onBlur:function(){y(!1)},onSelect:function(e){var t;m((null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.selectionStart)||0)},readOnly:d},v)),x&&(0,r.jsx)("span",{className:"lqMFGBuL",style:{left:"".concat(9*b,"px")}})]}))]}))}))}}]);
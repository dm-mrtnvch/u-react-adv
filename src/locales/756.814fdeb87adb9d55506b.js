"use strict";(self.webpackChunkreact_advanced=self.webpackChunkreact_advanced||[]).push([[756],{9275:(e,t,a)=>{a.r(t),a.d(t,{default:()=>H});var r=a(9439),n=a(7294),o=a(3007),s=a(1233),c=a(5401),i=a(9970),l=a(8979),u=a(9655),d=a(2241),v=a(4478),f=a(1715),p=a(3942),g=function(e){var t;return(null===(t=e.articlesPage)||void 0===t?void 0:t.isLoading)||!1},h=function(e){var t;return null===(t=e.articlesPage)||void 0===t?void 0:t.error},m=function(e){var t;return(null===(t=e.articlesPage)||void 0===t?void 0:t.view)||d.GA.SMALL},y=function(e){var t;return(null===(t=e.articlesPage)||void 0===t?void 0:t.page)||1},j=function(e){var t,a;return null!==(t=null===(a=e.articlesPage)||void 0===a?void 0:a.sort)&&void 0!==t?t:d.$B.CREATED},P=function(e){var t,a;return null!==(t=null===(a=e.articlesPage)||void 0===a?void 0:a.order)&&void 0!==t?t:"asc"},x=function(e){var t,a;return null!==(t=null===(a=e.articlesPage)||void 0===a?void 0:a.search)&&void 0!==t?t:""},b=function(e){var t,a;return null!==(t=null===(a=e.articlesPage)||void 0===a?void 0:a.type)&&void 0!==t?t:d.Iq.ALL},S=a(4268),w=a(1283),C=a(5861),N=a(4687),A=a.n(N),O=(0,S.hg)("articlesPage/fetchArticlesList",function(){var e=(0,C.Z)(A().mark((function e(t,a){var n,o,s,c,i,l,u,v,f,p;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.extra,o=a.rejectWithValue,g=(s=a.getState)(),c=(null===(h=g.articlesPage)||void 0===h?void 0:h.limit)||9,i=j(s()),l=P(s()),u=x(s()),v=y(s()),f=b(s()),e.prev=7,t={sort:i,order:l,search:u,type:f},window.history.pushState(null,"",function(e){var t=new URLSearchParams(window.location.search);return Object.entries(e).forEach((function(e){var a=(0,r.Z)(e,2),n=a[0],o=a[1];void 0!==o&&t.set(n,o)})),"?".concat(t.toString())}(t)),e.next=11,n.api.get("/articles",{params:{_expand:"user",_limit:c,_page:v,_sort:i,_order:l,q:u,type:f===d.Iq.ALL?void 0:f}});case 11:if((p=e.sent).data){e.next=14;break}throw new Error;case 14:return e.abrupt("return",p.data);case 17:return e.prev=17,e.t0=e.catch(7),e.abrupt("return",o("error"));case 20:case"end":return e.stop()}var t,g,h}),e,null,[[7,17]])})));return function(t,a){return e.apply(this,arguments)}}()),L=(0,S.HF)({selectId:function(e){return e.id}}),k=L.getSelectors((function(e){return e.articlesPage||L.getInitialState()})),T=(0,S.oM)({name:"articlesPageSlice",initialState:L.getInitialState({isLoading:!1,error:void 0,ids:[],entities:{},view:d.GA.SMALL,page:1,limit:9,order:"asc",search:"",sort:d.$B.CREATED,hasMore:!0,_inited:!1,type:d.Iq.ALL}),reducers:{setView:function(e,t){e.view=t.payload,localStorage.setItem(w.f,t.payload)},setPage:function(e,t){e.page=t.payload},setLimit:function(e,t){e.limit=t.payload},setOrder:function(e,t){e.order=t.payload},setSearch:function(e,t){e.search=t.payload},setSort:function(e,t){e.sort=t.payload},setType:function(e,t){e.type=t.payload},initState:function(e){var t=localStorage.getItem(w.f);e.view=t,e.limit=t===d.GA.BIG?4:9,e._inited=!0}},extraReducers:function(e){e.addCase(O.pending,(function(e,t){e.error=void 0,e.isLoading=!0,t.meta.arg.replace&&L.removeAll(e)})).addCase(O.fulfilled,(function(e,t){e.isLoading=!1,e.hasMore=t.payload.length>=e.limit,t.meta.arg.replace?L.setAll(e,t.payload):L.addMany(e,t.payload)})).addCase(O.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload}))}}),E=T.reducer,I=T.actions,_=a(5893),M=(0,n.memo)((function(e){var t=e.className,a=(0,v.$)().t,r=((0,c.T)(),(0,p.v9)(k.selectAll)),n=(0,p.v9)(g),o=(0,p.v9)(h),s=(0,p.v9)(m);return o?(0,_.jsx)(f.xv,{text:a("error while articles render")}):(0,_.jsx)(d.wD,{className:t,isLoading:n,view:s,articles:r})})),Z=function(e){var t=e.className,a=e.label,r=e.options,s=e.value,c=e.onChange,i=e.readonly,l=(0,n.useMemo)((function(){return null==r?void 0:r.map((function(e){return(0,_.jsx)("option",{className:"JkXz98qY",value:e.value,children:e.content},e.value)}))}),[r]);return(0,_.jsxs)("div",{className:(0,o.A)("cidfdn6H",{},[t]),children:[a&&(0,_.jsx)("span",{className:"G1uuf7Bp",children:"".concat(a," >")}),(0,_.jsx)("select",{disabled:i,className:"VOKOuKGo",value:s,onChange:function(e){null==c||c(e.target.value)},children:l})]})},B=a(7113),D=(0,n.memo)((function(e){var t=e.sort,a=e.order,r=e.className,s=e.onChangeSort,c=e.onChangeOrder,i=(0,v.$)().t,l=(0,n.useMemo)((function(){return[{value:"asc",content:i("ascending")},{value:"desc",content:i("descending")}]}),[i]),u=(0,n.useMemo)((function(){return[{value:B.$B.TITLE,content:i("title")},{value:B.$B.VIEWS,content:i("views count")},{value:B.$B.CREATED,content:i("created at")}]}),[i]);return(0,_.jsxs)("div",{className:(0,o.A)("gSPXPxAR",{},[r]),children:[(0,_.jsx)(Z,{options:u,label:i("sort by"),value:t,onChange:s}),(0,_.jsx)(Z,{options:l,label:i("by"),value:a,onChange:c,className:"Fez_9DSn"})]})})),q=a(6425),F=a(8312);const G={sortWrapper:"pyOjonnp",search:"QkNSez8q",tabs:"JHbc4jKB"};var R=(0,n.memo)((function(e){var t,a,r=e.className,s=(0,c.T)(),i=(0,v.$)().t,l=(0,p.v9)(m),u=(0,p.v9)(j),f=(0,p.v9)(P),g=(0,p.v9)(x),h=(0,p.v9)(b),y=(0,n.useCallback)((function(){s(O({replace:!0}))}),[s]),S=(t=y,a=(0,n.useRef)(!1),(0,n.useCallback)((function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];a.current&&clearTimeout(a.current),a.current=setTimeout((function(){t.apply(void 0,r)}),500)}),[t,500])),w=(0,n.useCallback)((function(e){s(I.setView(e)),s(I.setPage(1)),y()}),[s,y]),C=(0,n.useCallback)((function(e){s(I.setSort(e)),s(I.setPage(1)),y()}),[s,y]),N=(0,n.useCallback)((function(e){s(I.setOrder(e)),s(I.setPage(1)),y()}),[s,y]),A=(0,n.useCallback)((function(e){s(I.setSearch(e)),s(I.setPage(1)),S()}),[S,s]),L=(0,n.useCallback)((function(e){s(I.setType(e)),s(I.setPage(1)),y()}),[y,s]);return(0,_.jsxs)("div",{className:(0,o.A)(G.ArticlesPageFilters,{},[r]),children:[(0,_.jsxs)("div",{className:G.sortWrapper,children:[(0,_.jsx)(D,{sort:u,order:f,onChangeSort:C,onChangeOrder:N}),(0,_.jsx)(d.Vv,{view:l,onViewClick:w})]}),(0,_.jsx)(q.Z,{className:G.search,children:(0,_.jsx)(F.I,{value:g,onChange:A,placeholder:i("search")})}),(0,_.jsx)(d.XL,{value:h,onChangeType:L,className:G.tabs})]})})),V=(0,S.hg)("articlesPage/initArticlesPage",function(){var e=(0,C.Z)(A().mark((function e(t,a){var r,n,o,s,c,i;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=a.getState,n=a.dispatch,(null===(l=r().articlesPage)||void 0===l?void 0:l._inited)||(o=t.get("order"),s=t.get("sort"),c=t.get("search"),i=t.get("type"),o&&n(I.setOrder(o)),s&&n(I.setSort(s)),c&&n(I.setSearch(c)),i&&n(I.setType(i)),n(I.initState()),n(O({})));case 3:case"end":return e.stop()}var l}),e)})));return function(t,a){return e.apply(this,arguments)}}()),$=(0,S.hg)("articlesPage/fetchNextArticlesPage",function(){var e=(0,C.Z)(A().mark((function e(t,a){var r,n,o,s,c;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=a.getState,n=a.dispatch,o=y(r()),t=r(),s=null===(i=t.articlesPage)||void 0===i?void 0:i.hasMore,c=g(r()),s&&!c&&(n(I.setPage(o+1)),n(O({})));case 5:case"end":return e.stop()}var t,i}),e)})));return function(t,a){return e.apply(this,arguments)}}()),W={articlesPage:E};const H=(0,n.memo)((function(e){var t=e.className,a=(0,c.T)(),d=(0,u.lr)(),v=(0,r.Z)(d,1)[0],f=(0,n.useCallback)((function(){a($())}),[a]);return(0,i.Q)((function(){a(V(v))})),(0,_.jsx)(s.W,{reducers:W,removeAfterUnmount:!1,children:(0,_.jsxs)(l.T,{onScrollEnd:f,className:(0,o.A)("i0h17Gqm",{},[t]),children:[(0,_.jsx)(R,{}),(0,_.jsx)(M,{className:"UsH35LqR"})]})})}))},8312:(e,t,a)=>{a.d(t,{I:()=>v});var r=a(4942),n=a(9439),o=a(4925),s=a(7294),c=a(3007),i=a(5893),l=["className","value","onChange","type","placeholder","autoFocus","readonly"];function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v=(0,s.memo)((function(e){var t=e.className,a=e.value,u=e.onChange,v=e.type,f=void 0===v?"text":v,p=e.placeholder,g=e.autoFocus,h=e.readonly,m=(0,o.Z)(e,l),y=(0,s.useState)(!1),j=(0,n.Z)(y,2),P=j[0],x=j[1],b=(0,s.useState)(0),S=(0,n.Z)(b,2),w=S[0],C=S[1],N=(0,s.useRef)(null),A=P&&!h;return(0,s.useEffect)((function(){var e;g&&(x(!0),null==N||null===(e=N.current)||void 0===e||e.focus())}),[g]),(0,r.Z)({},"fTN1PnWu",h),(0,i.jsxs)("div",{className:(0,c.A)("LuFDUWoP",{},[t]),children:[p&&(0,i.jsx)("div",{className:"emAQQ85i",children:"".concat(p,">")}),(0,i.jsxs)("div",{className:"y1GiFC_L",children:[(0,i.jsx)("input",d({ref:N,type:f,value:a,onChange:function(e){null==u||u(e.target.value)},className:"LVdIPwcx",onFocus:function(){x(!0)},onBlur:function(){x(!1)},onSelect:function(e){var t;C((null==e||null===(t=e.target)||void 0===t?void 0:t.selectionStart)||0)},readOnly:h},m)),A&&(0,i.jsx)("span",{className:"lqMFGBuL",style:{left:"".concat(9*w,"px")}})]})]})}))}}]);
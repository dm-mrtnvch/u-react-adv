"use strict";(self.webpackChunkreact_advanced=self.webpackChunkreact_advanced||[]).push([[417],{417:(e,t,r)=>{r.d(t,{D0:()=>ne,wD:()=>T,$B:()=>u.$B,Iq:()=>u.Iq,XL:()=>h,GA:()=>u.GA,Vv:()=>ue,wq:()=>a.wq});var a=r(3918),n=r(3007),s=r(4478),i=r(7294),c=r(6425);const l={Tabs:"bXYDRoXv",search:"OqGBXY4I",tabs:"W5MNGLpm"};var o=r(5893),d=(0,i.memo)((function(e){var t=e.tabs,r=e.onTabClick,a=e.value,d=e.className,u=((0,s.$)().t,(0,i.useCallback)((function(e){return function(){r(e)}}),[r]));return(0,o.jsx)("div",{className:(0,n.A)(l.Tabs,{},[d]),children:t.map((function(e){return(0,o.jsx)(c.Z,{theme:e.value===a?c.r.NORMAL:c.r.OUTLINED,className:l.tab,onClick:u(e),children:e.content},e.value)}))})})),u=r(7113),h=(0,i.memo)((function(e){var t=e.className,r=e.value,a=e.onChangeType,c=(0,s.$)().t,l=(0,i.useMemo)((function(){return[{value:u.Iq.ALL,content:c("all")},{value:u.Iq.IT,content:c("it")},{value:u.Iq.SCIENCE,content:c("science")},{value:u.Iq.ECONOMICS,content:c("economics")}]}),[c]),h=(0,i.useCallback)((function(e){a(e.value)}),[a]);return(0,o.jsx)(d,{tabs:l,value:r,onTabClick:h,className:(0,n.A)("",{},[t])})})),v=r(376),m=r(1715),x=r(8979),g=r(3312);const j={BIG:"JApwHNdC",views:"Loz2hfru",header:"dwZR2QFa",username:"qqjY3IRX",date:"gzcu7DmY",title:"gvCBzE5L",img:"trLYSQ7F",footer:"sXa5L34T",textBlock:"JGwHSPVM",SMALL:"Qb8dn0co",imageWrapper:"dOeIdIHt",infoWrapper:"sm3cbRbR",types:"ZhtaCnW5"};var f=(0,i.memo)((function(e){var t=e.className,r=e.view;return r===u.GA.BIG?(0,o.jsx)("div",{className:(0,n.A)(j.ArticleListItem,{},[t,j[r]]),children:(0,o.jsxs)(c.Z,{className:j.card,children:[(0,o.jsxs)("div",{className:j.header,children:[(0,o.jsx)(g.O,{border:"50%",height:30,width:30}),(0,o.jsx)(g.O,{width:150,height:16,className:j.username}),(0,o.jsx)(g.O,{width:150,height:16,className:j.date})]}),(0,o.jsx)(g.O,{width:250,height:24,className:j.title}),(0,o.jsx)(g.O,{height:200,className:j.img}),(0,o.jsx)("div",{className:j.footer,children:(0,o.jsx)(g.O,{height:36,width:200})})]})}):(0,o.jsx)("div",{className:(0,n.A)(j.ArticleListItem,{},[t,j[r]]),children:(0,o.jsxs)(c.Z,{className:j.card,children:[(0,o.jsx)("div",{className:j.imageWrapper,children:(0,o.jsx)(g.O,{width:200,height:200,className:j.img})}),(0,o.jsx)("div",{className:j.infoWrapper,children:(0,o.jsx)(g.O,{width:130,height:16})}),(0,o.jsx)(g.O,{width:150,height:16,className:j.title})]})})}));var p,w=(0,i.memo)((function(e){var t=e.className,r=e.Svg;return(0,o.jsx)(r,{className:(0,n.A)("U8qULVLw",{},[t])})}));function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},N.apply(this,arguments)}const b=function(e){return i.createElement("svg",N({width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},e),p||(p=i.createElement("path",{d:"M18.402 9.496c-1.851-3.9-4.65-5.863-8.402-5.863-3.754 0-6.55 1.963-8.402 5.865a1.178 1.178 0 0 0 0 1.006c1.851 3.9 4.65 5.863 8.402 5.863 3.754 0 6.55-1.963 8.402-5.865.15-.317.15-.684 0-1.006ZM10 14.961c-3.15 0-5.457-1.598-7.084-4.961C4.543 6.637 6.85 5.04 10 5.04c3.15 0 5.457 1.597 7.084 4.96-1.625 3.363-3.932 4.96-7.084 4.96Zm-.078-8.399a3.438 3.438 0 1 0 0 6.876 3.438 3.438 0 0 0 0-6.876Zm0 5.625A2.186 2.186 0 0 1 7.734 10c0-1.209.979-2.188 2.188-2.188s2.187.979 2.187 2.188a2.186 2.186 0 0 1-2.187 2.188Z"})))};var O=r(2949),A=r(5255),L=r(5693),E=r(6897);const y={title:"BHmndKmm",paragraph:"tLIzh4YH"};var k=(0,i.memo)((function(e){var t=e.className,r=e.block;return(0,s.$)().t,(0,o.jsxs)("div",{className:(0,n.A)(y.ArticleTextBlockComponent,{},[t]),children:[r.title&&(0,o.jsx)(m.xv,{title:r.title,className:y.title}),r.paragraphs.map((function(e,t){return(0,o.jsx)(m.xv,{text:e,className:y.paragraph},e)}))]})})),M=(0,i.memo)((function(e){var t=e.className,r=e.article,a=e.view,i=e.target,l=(0,s.$)().t,d=(0,o.jsx)(m.xv,{text:r.type.join(", "),className:j.types}),h=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.xv,{text:String(r.views),className:j.views}),(0,o.jsx)(w,{Svg:b})]});if(a===u.GA.BIG){var v=r.blocks.find((function(e){return e.type===u.Lk.TEXT}));return(0,o.jsx)("div",{className:(0,n.A)(j.ArticleListItem,{},[t,j[a]]),children:(0,o.jsxs)(c.Z,{className:j.card,children:[(0,o.jsxs)("div",{className:j.header,children:[(0,o.jsx)(O.q,{size:30,src:r.user.avatar}),(0,o.jsx)(m.xv,{text:r.user.username,className:j.username}),(0,o.jsx)(m.xv,{text:r.createdAt,className:j.date})]}),(0,o.jsx)(m.xv,{title:r.title,className:j.title}),d,(0,o.jsx)("img",{src:r.img,className:j.img,alt:r.title}),v&&(0,o.jsx)(k,{block:v,className:j.textBlock}),(0,o.jsxs)("div",{className:j.footer,children:[(0,o.jsx)(E.F,{target:i,to:L.h3.article_details+r.id,children:(0,o.jsx)(A.zx,{theme:A.bn.OUTLINE,children:l("Читать далее...")})}),h]})]})})}return(0,o.jsx)(E.F,{target:i,to:L.h3.article_details+r.id,className:(0,n.A)(j.ArticleListItem,{},[t,j[a]]),children:(0,o.jsxs)(c.Z,{className:j.card,children:[(0,o.jsxs)("div",{className:j.imageWrapper,children:[(0,o.jsx)("img",{alt:r.title,src:r.img,className:j.img}),(0,o.jsx)(m.xv,{text:r.createdAt,className:j.date})]}),(0,o.jsxs)("div",{className:j.infoWrapper,children:[d,h]}),(0,o.jsx)(m.xv,{text:r.title,className:j.title})]})})}));const I={BIG:"Mc9MfBno",card:"I6tD17AJ",SMALL:"rJddBpYU",row:"udlxIuZU"};var C,Z,S=function(e){return new Array(e===u.GA.SMALL?9:3).fill(0).map((function(t,r){return(0,o.jsx)(f,{className:I.card,view:e},r)}))},T=(0,i.memo)((function(e){var t=e.className,r=e.articles,a=e.view,i=void 0===a?u.GA.SMALL:a,c=e.isLoading,l=e.target,d=e.virtualized,h=void 0===d||d,g=(0,s.$)().t,j=i===u.GA.BIG,f=j?1:3,p=j?r.length:Math.ceil(r.length/f),w=function(e){for(var t=e.index,a=e.key,n=e.style,s=[],c=t*f,d=Math.min(c+f,r.length),u=c;u<d;u+=1)s.push((0,o.jsx)(M,{article:r[t],view:i,className:I.card,target:l},"str".concat(1)));return(0,o.jsx)("div",{style:n,className:I.row,children:s},a)};return c||r.length?(0,o.jsx)(v._K,{scrollElement:document.getElementById(x.D),children:function(e){var a=e.height,s=e.width,d=e.registerChild,u=e.onChildScroll,m=e.isScrolling,x=e.scrollTop;return(0,o.jsxs)("div",{ref:d,className:(0,n.A)(I.ArticleList,{},[t,I[i]]),children:[h?(0,o.jsx)(v.aV,{height:null!=a?a:700,rowCount:p,rowHeight:j?700:330,rowRenderer:w,width:s?s-80:700,autoHeight:!0,onScroll:u,isScrolling:m,scrollTop:x}):r.map((function(e){return(0,o.jsx)(M,{article:e,view:i,target:l,className:I.card},e.id)})),c&&S(i)]})}}):(0,o.jsx)("div",{className:(0,n.A)(I.ArticleList,{},[t,I[i]]),children:(0,o.jsx)(m.xv,{size:m.yH.L,title:g("no articles found")})})})),D=r(1233),P=r(3942),G=r(5401),B=r(5550);function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},V.apply(this,arguments)}const R=function(e){return i.createElement("svg",V({width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},e),C||(C=i.createElement("path",{d:"M17.917 3.333H16.11v1.111h1.667v12.223H2.222V4.444H3.89v-1.11H2.083a.989.989 0 0 0-.972 1.005v12.433a.988.988 0 0 0 .972 1.006h15.834a.99.99 0 0 0 .972-1.006V4.34a.988.988 0 0 0-.972-1.006Z"})),Z||(Z=i.createElement("path",{d:"M4.444 7.778h1.111v1.11h-1.11v-1.11ZM7.778 7.778h1.11v1.11h-1.11v-1.11ZM11.111 7.778h1.111v1.11h-1.11v-1.11ZM14.444 7.778h1.111v1.11h-1.11v-1.11ZM4.444 10.556h1.111v1.11h-1.11v-1.11ZM7.778 10.556h1.11v1.11h-1.11v-1.11ZM11.111 10.556h1.111v1.11h-1.11v-1.11ZM14.444 10.556h1.111v1.11h-1.11v-1.11ZM4.444 13.333h1.111v1.111h-1.11v-1.11ZM7.778 13.333h1.11v1.111h-1.11v-1.11ZM11.111 13.333h1.111v1.111h-1.11v-1.11ZM14.444 13.333h1.111v1.111h-1.11v-1.11ZM5.556 5.556A.556.556 0 0 0 6.11 5V1.667a.556.556 0 1 0-1.111 0V5a.556.556 0 0 0 .556.556ZM14.444 5.556A.556.556 0 0 0 15 5V1.667a.555.555 0 1 0-1.111 0V5a.555.555 0 0 0 .556.556ZM7.222 3.333h5.556v1.111H7.222v-1.11Z"})))},H={img:"Pr2NTJfR"};var q,W=(0,i.memo)((function(e){var t=e.className,r=e.block;return(0,s.$)().t,(0,o.jsxs)("div",{className:(0,n.A)(H.ArticleImageBlockComponent,{},[t]),children:[(0,o.jsx)("img",{src:r.src,alt:r.title,className:H.img}),r.title&&(0,o.jsx)(m.xv,{text:r.title,align:m.PH.CENTER})]})}));function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},z.apply(this,arguments)}const U=function(e){return i.createElement("svg",z({width:22,height:22,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),q||(q=i.createElement("path",{d:"M16.2 5V1H1v15.2h4L16.2 5Zm-10.4.8V21H21V5.8H5.8Z",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))};var $=(0,i.memo)((function(e){var t=e.className,r=e.text,a=(0,i.useCallback)((function(){navigator.clipboard.writeText(r)}),[r]);return(0,o.jsxs)("pre",{className:(0,n.A)("EGVBrTRk",{},[t]),children:[(0,o.jsx)(A.zx,{onClick:a,className:"x9B5cNnv",theme:A.bn.CLEAR,children:(0,o.jsx)(U,{className:"ADwPP7Jp"})}),(0,o.jsx)("code",{children:r})]})}));var X=(0,i.memo)((function(e){var t=e.className,r=e.block;return(0,s.$)().t,(0,o.jsx)("div",{className:(0,n.A)("OpzK0VPf",{},[t]),children:(0,o.jsx)($,{text:r.code})})})),Y=r(5861),F=r(4687),J=r.n(F),_=r(4268),K=(0,_.hg)("articleDetails/fetchArticleById",function(){var e=(0,Y.Z)(J().mark((function e(t,r){var a,n,s;return J().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.extra,n=r.rejectWithValue,e.prev=1,t){e.next=4;break}throw new Error("no article id");case 4:return e.next=6,a.api.get("/articles/".concat(t),{params:{_expand:"user"}});case 6:if((s=e.sent).data){e.next=9;break}throw new Error;case 9:return e.abrupt("return",s.data);case 12:return e.prev=12,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",n("error"));case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,r){return e.apply(this,arguments)}}()),Q=(0,_.oM)({name:"articleDetails",initialState:{isLoading:!1,error:void 0,data:void 0},reducers:{},extraReducers:function(e){e.addCase(K.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(K.fulfilled,(function(e,t){e.isLoading=!1,e.data=t.payload})).addCase(K.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload}))}}),ee=(Q.actions,Q.reducer);const te={ArticleDetails:"MxWQIGLi",avatar:"WDmBKEor"};var re,ae={articleDetails:ee},ne=(0,i.memo)((function(e){var t,r=e.className,c=e.id,l=(0,s.$)().t,d=(0,G.T)(),h=(0,P.v9)(a.Ok),v=(0,P.v9)(a.wq),x=(0,P.v9)(a.zc),j=(0,i.useCallback)((function(e){switch(e.type){case u.Lk.CODE:return(0,o.jsx)(X,{block:e,className:te.block},e.id);case u.Lk.IMAGE:return(0,o.jsx)(W,{block:e,className:te.block},e.id);case u.Lk.TEXT:return(0,o.jsx)(k,{className:te.block,block:e},e.id);default:return null}}),[]);return(0,i.useEffect)((function(){d(K(c))}),[d,c]),t=h?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g.O,{className:te.avatar,width:200,height:200,border:"50%"}),(0,o.jsx)(g.O,{className:te.title,width:300,height:32}),(0,o.jsx)(g.O,{className:te.skeleton,width:600,height:24}),(0,o.jsx)(g.O,{className:te.skeleton,width:"100%",height:200}),(0,o.jsx)(g.O,{className:te.skeleton,width:"100%",height:200})]}):x?(0,o.jsx)(m.xv,{align:m.PH.CENTER,title:l("Произошла ошибка при загрузке статьи.")}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(B.U,{justify:"center",max:!0,children:(0,o.jsx)(O.q,{size:200,src:null==v?void 0:v.img,className:te.avatar})}),(0,o.jsxs)(B.g,{gap:"4",max:!0,children:[(0,o.jsx)(m.xv,{className:te.title,title:null==v?void 0:v.title,text:null==v?void 0:v.subtitle,size:m.yH.L}),(0,o.jsxs)(B.U,{gap:"8",children:[(0,o.jsx)(w,{className:te.icon,Svg:b}),(0,o.jsx)(m.xv,{text:String(null==v?void 0:v.views)})]}),(0,o.jsxs)(B.U,{gap:"8",children:[(0,o.jsx)(w,{className:te.icon,Svg:R}),(0,o.jsx)(m.xv,{text:null==v?void 0:v.createdAt})]})]}),null==v?void 0:v.blocks.map(j)]}),(0,o.jsx)(D.W,{reducers:ae,removeAfterUnmount:!0,children:(0,o.jsx)(B.g,{max:!0,gap:"16",className:(0,n.A)(te.ArticleDetails,{},[r]),children:t})})})),se=r(4942);function ie(){return ie=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},ie.apply(this,arguments)}var ce;function le(){return le=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},le.apply(this,arguments)}const oe={notSelected:"a0vVlVuW"};var de=[{view:u.GA.SMALL,icon:function(e){return i.createElement("svg",le({width:24,height:24,xmlns:"http://www.w3.org/2000/svg"},e),ce||(ce=i.createElement("path",{d:"M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm7 9v5h5v-5h-5Zm-7 0v5h5v-5H6Zm7-7v5h5V6h-5ZM6 6v5h5V6H6Z"})))}},{view:u.GA.BIG,icon:function(e){return i.createElement("svg",ie({width:24,height:24,xmlns:"http://www.w3.org/2000/svg"},e),re||(re=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.75 18a.75.75 0 0 1 .75-.75h15a.75.75 0 1 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0-6a.75.75 0 0 1 .75-.75h15a.75.75 0 1 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0-6a.75.75 0 0 1 .75-.75h15a.75.75 0 1 1 0 1.5h-15A.75.75 0 0 1 3.75 6Z"})))}}],ue=(0,i.memo)((function(e){var t=e.className,r=e.view,a=e.onViewClick;return(0,o.jsx)("div",{className:(0,n.A)(oe.ArticleViewSelector,{},[t]),children:de.map((function(e){return(0,o.jsx)(A.zx,{theme:A.bn.CLEAR,onClick:(t=e.view,function(){null==a||a(t)}),children:(0,o.jsx)(w,{Svg:e.icon,className:(0,n.A)("",(0,se.Z)({},oe.notSelected,e.view!==r))})},e.view);var t}))})}))},7113:(e,t,r)=>{r.d(t,{$B:()=>a,GA:()=>s,Iq:()=>i,Lk:()=>n});var a=function(e){return e.VIEWS="views",e.TITLE="title",e.CREATED="createdAt",e}({}),n=function(e){return e.CODE="CODE",e.IMAGE="IMAGE",e.TEXT="TEXT",e}({}),s=function(e){return e.BIG="BIG",e.SMALL="SMALL",e}({}),i=function(e){return e.ALL="ALL",e.IT="IT",e.SCIENCE="SCIENCE",e.ECONOMICS="ECONOMICS",e}({})},3918:(e,t,r)=>{r.d(t,{Ok:()=>n,wq:()=>a,zc:()=>s});var a=function(e){var t;return null===(t=e.articleDetails)||void 0===t?void 0:t.data},n=function(e){var t;return(null===(t=e.articleDetails)||void 0===t?void 0:t.isLoading)||!1},s=function(e){var t;return null===(t=e.articleDetails)||void 0===t?void 0:t.error}},5550:(e,t,r)=>{r.d(t,{U:()=>c,g:()=>l.g});var a=r(4942),n=r(3562),s=r(5893);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var c=function(e){return(0,s.jsx)(n.k,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({direction:"row"},e))},l=r(4092)},1233:(e,t,r)=>{r.d(t,{W:()=>c});var a=r(9439),n=r(7294),s=r(3942),i=r(5893),c=function(e){var t=e.children,r=e.reducers,c=e.removeAfterUnmount,l=void 0===c||c,o=(0,s.oR)(),d=(0,s.I0)();return(0,n.useEffect)((function(){var e=o.reducerManager.getMountedReducers();return Object.entries(r).forEach((function(t){var r=(0,a.Z)(t,2),n=r[0],s=r[1];e[n]||(o.reducerManager.add(n,s),d({type:"@INIT ".concat(n," reducer")}))})),function(){l&&Object.entries(r).forEach((function(e){var t=(0,a.Z)(e,2),r=t[0];t[1],o.reducerManager.remove(r),d({type:"@DESTROY ".concat(r," reducer")})}))}}),[]),(0,i.jsx)(i.Fragment,{children:t})}},6425:(e,t,r)=>{r.d(t,{Z:()=>v,r:()=>h});var a=r(4942),n=r(4925),s=r(7294),i=r(3007);const c={Card:"GNYonvC5",normal:"OD3Y9oJg",outlined:"WSzl_0nk"};var l=r(5893),o=["children","className","theme"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(e){return e.NORMAL="normal",e.OUTLINED="outlined",e}({}),v=(0,s.memo)((function(e){var t=e.children,r=e.className,a=e.theme,s=void 0===a?h.NORMAL:a,d=(0,n.Z)(e,o);return(0,l.jsx)("div",u(u({className:(0,i.A)(c.Card,{},[r,c[s]])},d),{},{children:t}))}))},3312:(e,t,r)=>{r.d(t,{O:()=>i});var a=r(7294),n=r(3007);var s=r(5893),i=(0,a.memo)((function(e){var t=e.className,r=e.height,a={width:e.width,height:r,borderRadius:e.border};return(0,s.jsx)("div",{className:(0,n.A)("ucKJo7o9",{},[t]),style:a})}))}}]);
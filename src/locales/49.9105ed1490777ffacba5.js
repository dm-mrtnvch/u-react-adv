"use strict";(self.webpackChunkreact_advanced=self.webpackChunkreact_advanced||[]).push([[49],{3597:(e,t,n)=>{n.r(t),n.d(t,{default:()=>J});var r=n(5893),a=n(2918),i=n(7294),o=n(2327),c=n(4611),s=n(4809),l=n(8046),u=n(71),d=n(1138),f=n(3048);const m="xIHByGcu",h="dsH_3Oqu",v="Ks7Kyp_K",p="dw82WMzO";var y=function(){return y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},y.apply(this,arguments)},b=(0,i.memo)((function(e){var t=e.comment,n=e.isLoading,a=e.className;return(0,o.$)().t,n?(0,r.jsxs)("div",y({className:(0,c.A)(m,{},[a,"V0iZ1Un3"])},{children:[(0,r.jsxs)("div",y({className:h},{children:[(0,r.jsx)(d.O,{width:30,height:30,border:"50%"}),(0,r.jsx)(d.O,{height:16,width:100,className:p})]})),(0,r.jsx)(d.O,{className:v,width:"100%",height:50})]})):t?(0,r.jsxs)("div",y({className:(0,c.A)(m,{},[a])},{children:[(0,r.jsxs)(f.F,y({to:"".concat(l.h3.profile).concat(t.user.id),className:h},{children:[t.user.avatar?(0,r.jsx)(u.q,{size:30,src:t.user.avatar}):null,(0,r.jsx)(s.xv,{className:p,title:t.user.username})]})),(0,r.jsx)(s.xv,{className:v,text:t.text})]})):null}));const x={comment:"zo5NFi5H"};var g=function(){return g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},g.apply(this,arguments)},w=(0,i.memo)((function(e){var t=e.className,n=e.comments,a=e.isLoading,i=(0,o.$)().t;return a?(0,r.jsxs)("div",g({className:(0,c.A)(x.CommentList,{},[t])},{children:[(0,r.jsx)(b,{isLoading:!0}),(0,r.jsx)(b,{isLoading:!0}),(0,r.jsx)(b,{isLoading:!0})]})):(0,r.jsx)("div",g({className:(0,c.A)(x.CommentList,{},[t])},{children:(null==n?void 0:n.length)?n.map((function(e){return(0,r.jsx)(b,{isLoading:a,className:x.comment,comment:e},e.id)})):(0,r.jsx)(s.xv,{text:i("no-comments")})}))})),j=(0,i.lazy)((function(){return n.e(430).then(n.bind(n,2430))})),k=n(7779),N=n(7168),L=(0,N.hg)("articleDetails/fetchCommentsByArticleId",(function(e,t){return r=function(){var n,r,a;return function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}}(this,(function(i){switch(i.label){case 0:if(n=t.extra,r=t.rejectWithValue,!e)return[2,r("error")];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,n.api.get("/comments",{params:{articleId:e,_expand:"user"}})];case 2:if(!(a=i.sent()).data)throw new Error;return[2,a.data];case 3:return i.sent(),[2,r("error")];case 4:return[2]}}))},new((n=void 0)||(n=Promise))((function(e,t){function a(e){try{o(r.next(e))}catch(e){t(e)}}function i(e){try{o(r.throw(e))}catch(e){t(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(a,i)}o((r=r.apply(void 0,[])).next())}));var n,r})),C=(0,N.HF)({selectId:function(e){return e.id}}),S=C.getSelectors((function(e){var t;return(null===(t=e.articleDetailsPage)||void 0===t?void 0:t.comments)||C.getInitialState()})),P=(0,N.oM)({name:"articleDetailsCommentsSlice",initialState:C.getInitialState({isLoading:!1,ids:["1","2"],entities:{1:{id:"1",text:"comment 1",user:{id:"1",username:"1"}},2:{id:"2",text:"comment 2",user:{id:"2",username:"2"}}},error:void 0}),reducers:{},extraReducers:function(e){e.addCase(L.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(L.fulfilled,(function(e,t){e.isLoading=!1,C.setAll(e,t.payload)})).addCase(L.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload}))}}).reducer,O=(0,N.hg)("articleDetailsPage/fetchArticleRecommendations",(function(e,t){return r=function(){var e,n,r;return function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}}(this,(function(a){switch(a.label){case 0:e=t.extra,n=t.rejectWithValue,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,e.api.get("/articles",{params:{_limit:4}})];case 2:if(!(r=a.sent()).data)throw new Error;return[2,r.data];case 3:return a.sent(),[2,n("error")];case 4:return[2]}}))},new((n=void 0)||(n=Promise))((function(e,t){function a(e){try{o(r.next(e))}catch(e){t(e)}}function i(e){try{o(r.throw(e))}catch(e){t(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(a,i)}o((r=r.apply(void 0,[])).next())}));var n,r})),A=(0,N.HF)({selectId:function(e){return e.id}}),D=A.getSelectors((function(e){var t;return(null===(t=e.articleDetailsPage)||void 0===t?void 0:t.recommendations)||A.getInitialState()})),I=(0,N.oM)({name:"articleDetailsCommentsSlice",initialState:A.getInitialState({isLoading:!1,ids:[],entities:{}}),reducers:{},extraReducers:function(e){e.addCase(O.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(O.fulfilled,(function(e,t){e.isLoading=!1,A.setAll(e,t.payload)})).addCase(O.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload}))}}).reducer,T=(0,k.UY)({recommendations:I,comments:P}),z=n(3101),E=n(3574),H=(0,n(573).P1)(a.wq,E.m5,(function(e,t){return!(!e||!t)&&e.user.id===t.id})),_=n(6372),q=n(9250),F=n(9161),G=function(){return G=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},G.apply(this,arguments)},W=(0,i.memo)((function(e){var t=e.className,n=(0,o.$)().t,a=(0,q.s0)(),s=((0,_.v9)(E.m5),(0,_.v9)(z.wq)),u=(0,_.v9)(H),d=(0,i.useCallback)((function(){a(l.h3.articles)}),[a]),f=(0,i.useCallback)((function(){a("".concat(l.h3.articles,"/").concat(null==s?void 0:s.id,"/edit"))}),[null==s?void 0:s.id,a]);return(0,r.jsxs)("div",G({className:(0,c.A)("PF3DYqSS",{},[t])},{children:[(0,r.jsx)(F.zx,G({onClick:d},{children:n("back-to-articles")})),u&&(0,r.jsx)(F.zx,G({className:"XdnP3e6a",onClick:f},{children:n("edit")}))]}))})),U=n(1150),V=n(5461),$=n(2276),K=n(314),M=function(e){var t,n;return null===(n=null===(t=e.articleDetailsPage)||void 0===t?void 0:t.comments)||void 0===n?void 0:n.isLoading},R=function(e){var t,n;return null===(n=null===(t=e.articleDetailsPage)||void 0===t?void 0:t.recommendations)||void 0===n?void 0:n.isLoading},B=function(e){var t,n;return null===(n=null===(t=e.articleDetailsPage)||void 0===t?void 0:t.comments)||void 0===n?void 0:n.error},Q=(0,N.hg)("articleDetails/addCommentForArticle",(function(e,t){return r=function(){var n,r,a,i,o,c,s;return function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}}(this,(function(l){switch(l.label){case 0:if(n=t.extra,r=t.dispatch,a=t.rejectWithValue,i=t.getState,o=(0,E.m5)(i()),c=(0,z.wq)(i()),!o||!e||!c)return[2,a("no data")];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,n.api.post("/comments",{text:e,articleId:c.id,userId:o.id})];case 2:if(!(s=l.sent()).data)throw new Error;return r(L(c.id)),[2,s.data];case 3:return l.sent(),[2,a("error")];case 4:return[2]}}))},new((n=void 0)||(n=Promise))((function(e,t){function a(e){try{o(r.next(e))}catch(e){t(e)}}function i(e){try{o(r.throw(e))}catch(e){t(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(a,i)}o((r=r.apply(void 0,[])).next())}));var n,r}));const Y={commentTitle:"foyEsCeG",recommendations:"NwQlSikL"};var X=function(){return X=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},X.apply(this,arguments)},Z={articleDetailsPage:T};const J=(0,i.memo)((function(e){var t=e.className,n=(0,V.T)(),l=(0,o.$)("article-details").t,u=(0,q.UO)().id,d=(0,_.v9)(S.selectAll),f=(0,_.v9)(D.selectAll),m=(0,_.v9)(R),h=((0,_.v9)(B),(0,_.v9)(M)),v=(0,i.useCallback)((function(e){n(Q(e))}),[n]);return(0,$.Q)((function(){n(L(u)),n(O())})),u?(0,r.jsx)(U.W,X({reducers:Z,removeAfterUnmount:!0},{children:(0,r.jsxs)(K.T,X({className:(0,c.A)(Y.ArticleDetailsPage,{},[t])},{children:[(0,r.jsx)(W,{}),(0,r.jsx)(a.D0,{id:u}),(0,r.jsx)(s.xv,{size:s.yH.L,className:Y.commentTitle,title:l("recommend")}),(0,r.jsx)(a.wD,{articles:f,isLoading:m,className:Y.recommendations,target:"_blank"}),(0,r.jsx)(s.xv,{size:s.yH.L,className:Y.commentTitle,title:l("comments")}),(0,r.jsx)(j,{onSendComment:v}),(0,r.jsx)(w,{isLoading:h,comments:d})]}))})):(0,r.jsx)(K.T,X({className:(0,c.A)(Y.ArticleDetailsPage,{},[t])},{children:l("article-page-not-found")}))}))}}]);
"use strict";(self.webpackChunkreact_advanced=self.webpackChunkreact_advanced||[]).push([[133],{7674:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var r=n(5893),a=n(2918),i=n(7294),o=n(4478),s=n(4611),c=n(1905),l=n(4809),u=n(8046),d=n(71),f=n(1138),m=n(3048);const h={CommentCard:"xIHByGcu",header:"dsH_3Oqu",username:"dw82WMzO",loading:"V0iZ1Un3"};var p=function(){return p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},p.apply(this,arguments)},v=(0,i.memo)((function(e){var t=e.comment,n=e.isLoading,a=e.className;return(0,o.$)().t,n?(0,r.jsxs)("div",p({className:(0,s.A)(h.CommentCard,{},[a,h.loading])},{children:[(0,r.jsxs)("div",p({className:h.header},{children:[(0,r.jsx)(f.O,{width:30,height:30,border:"50%"}),(0,r.jsx)(f.O,{height:16,width:100,className:h.username})]})),(0,r.jsx)(f.O,{className:h.text,width:"100%",height:50})]})):t?(0,r.jsxs)(c.g,p({max:!0,gap:"8",className:(0,s.A)(h.CommentCard,{},[a])},{children:[(0,r.jsxs)(m.F,p({to:"".concat(u.h3.profile).concat(t.user.id),className:h.header},{children:[t.user.avatar?(0,r.jsx)(d.q,{size:30,src:t.user.avatar}):null,(0,r.jsx)(l.xv,{className:h.username,title:t.user.username})]})),(0,r.jsx)(l.xv,{className:h.text,text:t.text})]})):null})),g=function(){return g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},g.apply(this,arguments)},x=(0,i.memo)((function(e){var t=e.className,n=e.comments,a=e.isLoading,i=(0,o.$)().t;return a?(0,r.jsxs)(c.g,g({gap:"16",className:(0,s.A)("",{},[t])},{children:[(0,r.jsx)(v,{isLoading:!0}),(0,r.jsx)(v,{isLoading:!0}),(0,r.jsx)(v,{isLoading:!0})]})):(0,r.jsx)(c.g,g({gap:"16",className:(0,s.A)("",{},[t])},{children:(null==n?void 0:n.length)?n.map((function(e){return(0,r.jsx)(v,{isLoading:a,comment:e},e.id)})):(0,r.jsx)(l.xv,{text:i("no-comments")})}))})),y=(0,i.lazy)((function(){return n.e(430).then(n.bind(n,2430))})),b=n(9704),w=n(9250),j=n(1150),C=n(5461),k=n(2276),L=n(314),N=n(3101),S=n(3574),O=n(9161),A=(0,n(573).P1)(a.wq,S.m5,(function(e,t){return!(!e||!t)&&e.user.id===t.id})),P=function(){return P=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},P.apply(this,arguments)},D=(0,i.memo)((function(e){var t=e.className,n=(0,o.$)().t,a=(0,w.s0)(),l=((0,b.v9)(S.m5),(0,b.v9)(N.wq)),d=(0,b.v9)(A),f=(0,i.useCallback)((function(){a(u.h3.articles)}),[a]),m=(0,i.useCallback)((function(){a("".concat(u.h3.articles,"/").concat(null==l?void 0:l.id,"/edit"))}),[null==l?void 0:l.id,a]);return(0,r.jsxs)(c.U,P({max:!0,justify:"between",className:(0,s.A)("",{},[t])},{children:[(0,r.jsx)(O.zx,P({onClick:f},{children:n("back-to-articles")})),d&&(0,r.jsx)(O.zx,P({onClick:m},{children:n("edit")}))]}))})),I=n(7779),T=n(7168),z=(0,T.hg)("articleDetails/fetchCommentsByArticleId",(function(e,t){return r=function(){var n,r,a;return function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(i){switch(i.label){case 0:if(n=t.extra,r=t.rejectWithValue,!e)return[2,r("error")];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,n.api.get("/comments",{params:{articleId:e,_expand:"user"}})];case 2:if(!(a=i.sent()).data)throw new Error;return[2,a.data];case 3:return i.sent(),[2,r("error")];case 4:return[2]}}))},new((n=void 0)||(n=Promise))((function(e,t){function a(e){try{o(r.next(e))}catch(e){t(e)}}function i(e){try{o(r.throw(e))}catch(e){t(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(a,i)}o((r=r.apply(void 0,[])).next())}));var n,r})),E=(0,T.HF)({selectId:function(e){return e.id}}),H=E.getSelectors((function(e){var t;return(null===(t=e.articleDetailsPage)||void 0===t?void 0:t.comments)||E.getInitialState()})),_=(0,T.oM)({name:"articleDetailsCommentsSlice",initialState:E.getInitialState({isLoading:!1,ids:["1","2"],entities:{1:{id:"1",text:"comment 1",user:{id:"1",username:"1"}},2:{id:"2",text:"comment 2",user:{id:"2",username:"2"}}},error:void 0}),reducers:{},extraReducers:function(e){e.addCase(z.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(z.fulfilled,(function(e,t){e.isLoading=!1,E.setAll(e,t.payload)})).addCase(z.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload}))}}).reducer,q=(0,T.hg)("articleDetailsPage/fetchArticleRecommendations",(function(e,t){return r=function(){var e,n,r;return function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(a){switch(a.label){case 0:e=t.extra,n=t.rejectWithValue,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,e.api.get("/articles",{params:{_limit:4}})];case 2:if(!(r=a.sent()).data)throw new Error;return[2,r.data];case 3:return a.sent(),[2,n("error")];case 4:return[2]}}))},new((n=void 0)||(n=Promise))((function(e,t){function a(e){try{o(r.next(e))}catch(e){t(e)}}function i(e){try{o(r.throw(e))}catch(e){t(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(a,i)}o((r=r.apply(void 0,[])).next())}));var n,r})),G=(0,T.HF)({selectId:function(e){return e.id}}),U=G.getSelectors((function(e){var t;return(null===(t=e.articleDetailsPage)||void 0===t?void 0:t.recommendations)||G.getInitialState()})),W=(0,T.oM)({name:"articleDetailsCommentsSlice",initialState:G.getInitialState({isLoading:!1,ids:[],entities:{}}),reducers:{},extraReducers:function(e){e.addCase(q.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(q.fulfilled,(function(e,t){e.isLoading=!1,G.setAll(e,t.payload)})).addCase(q.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload}))}}).reducer,F=(0,I.UY)({recommendations:W,comments:_}),V=function(e){var t,n;return null===(n=null===(t=e.articleDetailsPage)||void 0===t?void 0:t.comments)||void 0===n?void 0:n.isLoading},$=function(e){var t,n;return null===(n=null===(t=e.articleDetailsPage)||void 0===t?void 0:t.recommendations)||void 0===n?void 0:n.isLoading},M=function(e){var t,n;return null===(n=null===(t=e.articleDetailsPage)||void 0===t?void 0:t.comments)||void 0===n?void 0:n.error},R=(0,T.hg)("articleDetails/addCommentForArticle",(function(e,t){return r=function(){var n,r,a,i,o,s,c;return function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(l){switch(l.label){case 0:if(n=t.extra,r=t.dispatch,a=t.rejectWithValue,i=t.getState,o=(0,S.m5)(i()),s=(0,N.wq)(i()),!o||!e||!s)return[2,a("no data")];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,n.api.post("/comments",{text:e,articleId:s.id,userId:o.id})];case 2:if(!(c=l.sent()).data)throw new Error;return r(z(s.id)),[2,c.data];case 3:return l.sent(),[2,a("error")];case 4:return[2]}}))},new((n=void 0)||(n=Promise))((function(e,t){function a(e){try{o(r.next(e))}catch(e){t(e)}}function i(e){try{o(r.throw(e))}catch(e){t(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(a,i)}o((r=r.apply(void 0,[])).next())}));var n,r}));const B={commentTitle:"foyEsCeG",recommendations:"NwQlSikL"};var Q=function(){return Q=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Q.apply(this,arguments)},Y={articleDetailsPage:F};const Z=(0,i.memo)((function(e){var t=e.className,n=(0,C.T)(),u=(0,o.$)("article-details").t,d=(0,w.UO)().id,f=(0,b.v9)(H.selectAll),m=(0,b.v9)(U.selectAll),h=(0,b.v9)($),p=((0,b.v9)(M),(0,b.v9)(V)),v=(0,i.useCallback)((function(e){n(R(e))}),[n]);return(0,k.Q)((function(){n(z(d)),n(q())})),d?(0,r.jsx)(j.W,Q({reducers:Y,removeAfterUnmount:!0},{children:(0,r.jsx)(L.T,Q({className:(0,s.A)(B.ArticleDetailsPage,{},[t])},{children:(0,r.jsxs)(c.g,Q({gap:"16",max:!0},{children:[(0,r.jsx)(D,{}),(0,r.jsx)(a.D0,{id:d}),(0,r.jsx)(l.xv,{size:l.yH.L,className:B.commentTitle,title:u("recommend")}),(0,r.jsx)(a.wD,{articles:m,isLoading:h,className:B.recommendations,target:"_blank"}),(0,r.jsx)(l.xv,{size:l.yH.L,className:B.commentTitle,title:u("comments")}),(0,r.jsx)(y,{onSendComment:v}),(0,r.jsx)(x,{isLoading:p,comments:f})]}))}))})):(0,r.jsx)(L.T,Q({className:(0,s.A)(B.ArticleDetailsPage,{},[t])},{children:u("article-page-not-found")}))}))}}]);
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[716],{256:function(e,r,t){t.d(r,{P2:function(){return f},_Q:function(){return o},pT:function(){return p},s7:function(){return s},sO:function(){return i}});var n=t(861),a=t(757),c=t.n(a),u=t(912),s=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/week?api_key=e80646b33583990ee01efac2e0ae1d96");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=e80646b33583990ee01efac2e0ae1d96"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(r,"&api_key=e80646b33583990ee01efac2e0ae1d96"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=e80646b33583990ee01efac2e0ae1d96"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=e80646b33583990ee01efac2e0ae1d96"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},716:function(e,r,t){t.r(r),t.d(r,{default:function(){return x}});var n=t(861),a=t(439),c=t(757),u=t.n(c),s=t(791),i=t(87),o=t(256),p=t(28),f={Searchbar:"searchBar_Searchbar__BcZ2f",SearchForm:"searchBar_SearchForm__fBCEB",SearchFormInput:"searchBar_SearchFormInput__ssuBp"},h=t(184),m=function(e){var r=e.onSubmit,t=(0,s.useState)(""),n=(0,a.Z)(t,2),c=n[0],u=n[1];return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:f.Searchbar,children:(0,h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!c.trim())return alert("Please input your query");r(c),u("")},className:f.SearchForm,children:[(0,h.jsx)("button",{type:"submit",className:f.SearchFormButton,children:(0,h.jsx)(p.a4h,{color:"black",size:"20px"})}),(0,h.jsx)("input",{className:f.SearchFormInput,name:"search",value:c,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(e){var r=e.target.value;u(r)}})]})})})},l=t(689),v="searchMovieList_link__tKdVP",d="searchMovieList_list__3vbGb",b=function(e){var r=e.items,t=(0,l.TH)(),n=r.map((function(e){var r=e.id,n=e.title;return(0,h.jsx)("li",{children:(0,h.jsx)(i.rU,{className:v,to:"/movies/".concat(r),state:{from:t},children:n})},r)}));return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("ul",{className:d,children:n})})},x=function(){var e=(0,s.useState)([]),r=(0,a.Z)(e,2),t=r[0],c=r[1],p=(0,i.lr)(),f=(0,a.Z)(p,2),l=f[0],v=f[1],d=l.get("search"),x=(0,s.useCallback)((function(e){v({search:e})}),[v]);return(0,s.useEffect)((function(){if(d){var e=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o._Q)(d);case 3:r=e.sent,t=r.results,c(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[d]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m,{onSubmit:x}),(0,h.jsx)(b,{items:t})]})}}}]);
//# sourceMappingURL=716.32615f7b.chunk.js.map
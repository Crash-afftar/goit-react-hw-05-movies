"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[3],{454:function(e,t,n){n.d(t,{Z:function(){return o}});n(791);var r,i=n(243),a=n(168),s=n(444).ZP.div(r||(r=(0,a.Z)(["\nposition: fixed;\n    top: 50%;\n    left: 50%;\nz - index: 10\n;"]))),c=n(184),o=function(e){return e.loading&&(0,c.jsx)(s,{children:(0,c.jsx)(i.Z1,{type:"ThreeDots",color:"#3f51b5",height:80,width:80})})}},3:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var r,i,a,s,c,o,u=n(861),p=n(439),d=n(757),f=n.n(d),l=n(689),h=n(87),v=n(791),x=n(390),m=n(454),g=n(168),Z=n(444),w=Z.ZP.section(r||(r=(0,g.Z)(["\n   padding: 10px;\n"]))),j=(0,Z.ZP)(h.rU)(i||(i=(0,g.Z)(["\n    margin-bottom: 30px;\n"]))),y=Z.ZP.div(a||(a=(0,g.Z)(["\n    display: flex;\n  outline: gray;\n"]))),k=(Z.ZP.li(s||(s=(0,g.Z)(["\n   list-style-type: none;\n"]))),Z.ZP.ul(c||(c=(0,g.Z)(["\n   display: flex;\n  flex-direction: column;\n"])))),_=Z.ZP.img(o||(o=(0,g.Z)(["\n  height: 100%;\n  width: 200px;\n"]))),b=n(184),P=function(){var e,t,n,r=(0,l.UO)().movieId,i=(0,v.useState)([]),a=(0,p.Z)(i,2),s=a[0],c=a[1],o=(0,v.useState)(!1),d=(0,p.Z)(o,2),g=d[0],Z=d[1],P=(0,l.TH)();return(0,v.useEffect)((function(){!function(){var e=(0,u.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Z(!0),e.next=4,(0,x.Pg)(r);case 4:t=e.sent,c(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,setTimeout((function(){Z(!1)}),100),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}()()}),[r]),(0,b.jsxs)(w,{children:[(0,b.jsx)(j,{to:(null===(e=P.state)||void 0===e?void 0:e.from)||"/",children:"GO BACK"}),g&&(0,b.jsx)(m.Z,{}),s&&(0,b.jsxs)(y,{children:[(0,b.jsx)(_,{src:"https://image.tmdb.org/t/p/w500/".concat(s.poster_path),alt:s.title}),(0,b.jsxs)("div",{style:{width:"45%"},children:[(0,b.jsx)("h2",{children:s.title}),(0,b.jsx)("p",{children:s.overview}),(0,b.jsxs)("p",{children:["Release Date: ",s.release_date]}),(0,b.jsxs)("p",{children:["Rating: ",s.vote_average]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{children:"Additional information"}),(0,b.jsxs)(k,{children:[(0,b.jsx)("li",{children:(0,b.jsx)(h.rU,{to:"/movies/".concat(r,"/cast"),state:{from:(null===(t=P.state)||void 0===t?void 0:t.from)||"/movies"},children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(h.rU,{to:"/movies/".concat(r,"/reviews"),state:{from:(null===(n=P.state)||void 0===n?void 0:n.from)||"/movies"},children:"Reviews"})})]})]})]})]}),(0,b.jsx)(v.Suspense,{fallback:(0,b.jsx)("div",{children:"Loading"}),children:(0,b.jsx)(l.j3,{})})]})}},390:function(e,t,n){n.d(t,{E3:function(){return p},E9:function(){return u},Jh:function(){return l},Pg:function(){return d},_r:function(){return f}});var r=n(861),i=n(757),a=n.n(i),s=n(924),c="25510e2ecba168b3969766d5c3ce39fa",o="https://api.themoviedb.org/3/movie/",u=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/trending/movie/week",{params:{api_key:c,page:t,per_page:6}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:c,query:t,page:n}});case 2:return r=e.sent,i=r.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o+String(t)),{params:{api_key:c}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o+String(t),"/reviews"),{params:{api_key:c}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o+String(t),"/credits"),{params:{api_key:c}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=3.3829c290.chunk.js.map
(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n(7),i=n.n(r),s=n(2),u=n(9);n(16);function o(t){var e=t.setCategories,n=Object(c.useState)(""),r=Object(s.a)(n,2),i=r[0],o=r[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(u.a)(t))})),o(""))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(t){o(t.target.value)}})})})}var j=n(10),d=n(6),f=n.n(d),l=n(8),b=function(){var t=Object(l.a)(f.a.mark((function t(e){var n,a,c,r,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=GDOmQn1SZURK242JuZ1Z50FqCerWHYDw"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,i=r.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();n(18);function p(t){var e=t.title,n=t.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(a.jsx)("img",{src:n,alt:e}),Object(a.jsx)("p",{children:e})]})}n(19);function O(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){b(t).then((function(t){r({data:t,loading:!1})}))}),[t]),a}(e),r=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"animate__animated animate__fadeIn",children:e}),i&&Object(a.jsx)("p",{children:"Loading..."}),Object(a.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(a.jsx)(p,Object(j.a)({},t),t.id)}))})]})}function m(){var t=Object(c.useState)(["Dragon Ball"]),e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(o,{setCategories:r}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(t,e){return Object(a.jsx)(O,{category:t},e)}))})]})}n(20);i.a.render(Object(a.jsx)(m,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.80b4e704.chunk.js.map
(this.webpackJsonprandomqoute=this.webpackJsonprandomqoute||[]).push([[0],{17:function(n,e,t){},23:function(n,e,t){"use strict";t.r(e);var i=t(0),a=t(9),c=t.n(a),r=(t(17),t(2)),d=t(3),s=t(4),o=t(1);var f,j,l,x,h=function(){var n=Object(i.useState)(null),e=Object(s.a)(n,2),t=e[0],a=e[1],c=Object(i.useState)(!1),r=Object(s.a)(c,2),d=r[0],f=r[1],j=Object(i.useState)([]),l=Object(s.a)(j,2),x=l[0],h=l[1];return Object(i.useEffect)((function(){fetch("https://quotes.rest/qod").then((function(n){return n.json()})).then((function(n){console.log(n),f(!0),h(n.contents.quotes)}),(function(n){f(!0),a(n)}))}),[]),t?Object(o.jsx)("div",{children:"Error"}):d?Object(o.jsx)(o.Fragment,{children:x.map((function(n,e){return Object(o.jsx)("div",{children:n.quote},e)}))}):Object(o.jsx)("div",{children:"Loading..."})},p=d.a.div(f||(f=Object(r.a)(["\n    font-family: 'Lato', sans-serif;\n    font-weight: 100;\n    font-size: 1.3em;\n    line-height: 1.5;\n    letter-spacing: 1.5;\n    padding: 30px 0px;\n    text-align: center;\n\n    @media screen and (max-width: 690px) {\n        padding: 10%;\n        font-size: 95%;\n        letter-spacing: 2.0;\n        line-height: 2.0;\n       \n    "])));function u(){return Object(o.jsx)(p,{children:Object(o.jsx)(h,{})})}var b,g=d.a.div(j||(j=Object(r.a)(["\n    display: flex;\n    height: 60vh;\n    max-width: 60em;\n    background: linear-gradient(to left, #ff00d9, #08fffb);\n    padding: 3px;\n    margin: 10%;\n    display: grid;\n        @media screen and (max-width: 840px) {\n            height: 30%;\n        }\n"]))),O=d.a.div(l||(l=Object(r.a)(["\n    background: #000000;\n    color: #ffffff;\n    padding: 3em;\n    margin: 0.5%;\n"]))),m=d.a.div(x||(x=Object(r.a)(["\n    font-family: 'Playfair Display', serif;\n    font-weight: 800;\n    font-size: 80px;\n    letter-spacing: 2.0;\n    padding: 20px 0px;\n    text-align: center;\n\n    @media screen and (max-width: 600px) {\n        font-size: 40px ;\n        text-align: center;\n    }\n"])));function v(){return Object(o.jsx)(g,{children:Object(o.jsxs)(O,{children:[Object(o.jsx)(m,{children:" The API says..."}),Object(o.jsx)(u,{})]})})}var w=d.a.div(b||(b=Object(r.a)(["\n    background-color: black;\n    display: contents;\n\n    @media screen and (max-width: 2000px) {\n        align-content: center;\n    }    \n    @media screen and (max-width: 600px) {\n        padding: 20px 5%;\n    }      \n"])));var y=function(){return Object(o.jsx)(w,{children:Object(o.jsx)(v,{})})};c.a.render(Object(o.jsx)(y,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.8ac3a16b.chunk.js.map
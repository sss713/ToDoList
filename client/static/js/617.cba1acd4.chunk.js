"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[617],{617:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(413),s=t(165),a=t(861),l=t(439),i=t(791),o=t(887),c={form__container:"style_form__container__OCsuR",form:"style_form__ioMY1",input:"style_input__oX-rc",button:"style_button__R9efL",name:"style_name__FcmoL",page:"style_page__+El5h"},u=t(233),_=t(286),d={label:"style_label__nyZoh",name:"style_name__uG2v0"},m={message:"style_message__pq0ch"},h=t(184),p=function(e){var n=e.message,t=void 0===n?"\u041e\u0448\u0438\u0431\u043a\u0430!":n,r=e.style,s=e.onClick;return(0,h.jsx)("div",{onClick:s,children:(0,h.jsx)(_.Z,{type:"text_small",style:[r,m.message].join(" "),children:t})})},v=function(e){var n=e.children,t=e.style,r=e.name,s=e.errorHidden,a=e.errorMessage;return(0,h.jsxs)("label",{className:[t,d.label].join(" "),children:[(0,h.jsx)(_.Z,{type:"text_small",style:d.name,children:r}),n,s&&(0,h.jsx)(p,{message:a})]})},y=t(935),g=function(){var e,n,t,d=(0,o.cI)({mode:"onBlur"}),m=d.register,p=d.formState,g=p.errors,f=p.isValid,x=d.handleSubmit,j=d.reset,k=x((function(e){console.log(JSON.stringify(e)),j()})),Z=(0,i.useState)(""),b=(0,l.Z)(Z,2),N=b[0],w=b[1],C=(0,i.useState)(""),S=(0,l.Z)(C,2),L=S[0],O=S[1],M=(0,i.useState)(""),E=(0,l.Z)(M,2),H=E[0],T=E[1],q=(0,i.useState)(!0),F=(0,l.Z)(q,2),I=F[0],z=F[1],B=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(n,t){var r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost/api/registration",{method:"POST",body:JSON.stringify({login:n,password:t}),headers:{"Content-Type":"application/json"}});case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t){return e.apply(this,arguments)}}(),J=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(n,t){var r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost/api/authorization",{method:"POST",body:JSON.stringify({login:n,password:t}),headers:{"Content-Type":"application/json"}});case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{className:c.form__container,children:[(0,h.jsx)(_.Z,{type:"h2",style:c.name,children:"To&Do"}),(0,h.jsxs)("form",{onSubmit:k,className:c.form,children:[I&&(0,h.jsx)(v,{name:"\u041d\u0438\u043a\u043d\u0435\u0439\u043c",errorHidden:Boolean(null===g||void 0===g?void 0:g.nickName),errorMessage:null===g||void 0===g||null===(e=g.nickName)||void 0===e?void 0:e.message,children:(0,h.jsx)("input",(0,r.Z)((0,r.Z)({placeholder:"\u041d\u0438\u043a\u043d\u0435\u0439\u043c",type:"text",value:N,className:[c.input,(null===g||void 0===g?void 0:g.nickName)&&c.input_error].join(" ")},m("nickName",{required:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e",minLength:{value:3,message:"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0430"},maxLength:{value:20,message:"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 20 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}})),{},{onChange:function(e){return w(e.target.value)}}))}),(0,h.jsx)(v,{name:"Email",errorHidden:Boolean(null===g||void 0===g?void 0:g.email),errorMessage:null===g||void 0===g||null===(n=g.email)||void 0===n?void 0:n.message,children:(0,h.jsx)("input",(0,r.Z)((0,r.Z)({placeholder:"Email",type:"email",value:L,className:[c.input,(null===g||void 0===g?void 0:g.email)&&c.input_error].join(" ")},m("email",{required:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e",pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"\u0412\u0432\u0435\u0434\u0435\u043d \u043d\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 email"},minLength:{value:3,message:"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0430"},maxLength:{value:20,message:"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 20 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}})),{},{onChange:function(e){return O(e.target.value)}}))}),(0,h.jsx)(v,{name:"\u041f\u0430\u0440\u043e\u043b\u044c",errorHidden:Boolean(null===g||void 0===g?void 0:g.password),errorMessage:null===g||void 0===g||null===(t=g.password)||void 0===t?void 0:t.message,children:(0,h.jsx)("input",(0,r.Z)((0,r.Z)({placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",value:H,className:[c.input,(null===g||void 0===g?void 0:g.password)&&c.input_error].join(" ")},m("password",{required:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e",minLength:{value:8,message:"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 8 \u0441\u0438\u043c\u0432\u043e\u043b\u0430"},maxLength:{value:16,message:"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 16 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}})),{},{onChange:function(e){return T(e.target.value)}}))}),(0,h.jsx)(y.Z,{type:"submit",style:c.button,color:f?"_dark":"_light",disabled:!f,onClick:function(){f?I?B(L,H):J(L,H):console.log("NO VALID")},children:(0,h.jsx)(u.Z,{iswork:f,src:"/todo",children:I?"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f":"\u0412\u043e\u0439\u0442\u0438"})})]}),(0,h.jsx)(_.Z,{type:"text_small",style:c.page,onClick:function(){return z(!I)},children:I?"\u0412\u0445\u043e\u0434":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})},f={};var x=function(){return(0,h.jsx)("div",{className:f.registration,children:(0,h.jsx)(g,{})})}},935:function(e,n,t){t.d(n,{Z:function(){return a}});var r={button:"style_button__DsgFV",_large:"style__large__ZajZr",_medium:"style__medium__OfRFK",_small:"style__small__7bLmp",_light:"style__light__j2-E4",_dark:"style__dark__RSVt0",_accent:"style__accent__kd-ep"},s=t(184),a=function(e){var n=e.children,t=e.style,a=e.size,l=void 0===a?"_medium":a,i=e.color,o=void 0===i?"_dark":i,c=e.type,u=e.disabled,_=void 0!==u&&u,d=e.onClick,m=e.onHover;return(0,s.jsx)("button",{type:c,disabled:_,className:[t,r.button,function(e){switch(e){case"_large":return r._large;case"_medium":return r._medium;case"_small":return r._small}}(l),function(e){switch(e){case"_light":return r._light;case"_dark":return r._dark;case"_accent":return r._accent}}(o)].join(" "),onClick:d,onMouseEnter:m,children:n})}},233:function(e,n,t){t.d(n,{Z:function(){return l}});var r={link:"style_link__QTcsm"},s=t(87),a=t(184),l=function(e){var n=e.children,t=e.style,l=e.src,i=e.iswork,o=void 0===i||i;return(0,a.jsx)(a.Fragment,{children:o?(0,a.jsx)(s.rU,{className:[t,r.link].join(" "),to:l,children:n}):n})}},286:function(e,n,t){t.d(n,{Z:function(){return d}});var r="style_h1__qWyE6",s="style_h2__HFL3w",a="style_h3__Z0ICY",l="style_h4__J-Y7r",i="style_h5__uIksC",o="style_text__tl--d",c="style_text_small__dIkeN",u="style__accent__CN02M",_=t(184),d=function(e){var n=e.children,t=e.style,d=e.type,m=void 0===d?"text":d,h=e.accent,p=void 0!==h&&h,v=e.onClick;return(0,_.jsx)("div",{onClick:v,className:[t,function(e){switch(e){case"h1":return r;case"h2":return s;case"h3":return a;case"h4":return l;case"h5":return i;case"text":return o;case"text_small":return c}}(m),p&&u].join(" "),children:n})}}}]);
//# sourceMappingURL=617.cba1acd4.chunk.js.map
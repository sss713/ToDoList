"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[352],{2352:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var s=n(9439),r="style_task__container__XGppv",i=n(2791),o={task:"style_task__zGYaL",name:"style_name__vEoti",_completed:"style__completed__Jj+aa",_overdue:"style__overdue__CK+QK",description:"style_description__PPwHS"},l={toggle:"style_toggle__8RA2V",button:"style_button__yTE3I",_regular:"style__regular__wNWtZ",_completed:"style__completed__RQIMN",_overdue:"style__overdue__6UX4G"},a=n(7286),c=n(184),u=function(e){var t=e.style,n=e.onClick,s=e.type,r=void 0===s?"_regular":s;return(0,c.jsx)("div",{className:[t,function(e){switch(e){case"completed":return l._completed;case"overdue":return l._overdue;default:return l._regular}}(r),l.toggle].join(" "),children:(0,c.jsx)("button",{className:l.button,onClick:n,children:"completed"===r?(0,c.jsx)(a.Z,{children:"\u2713"}):(0,c.jsx)(c.Fragment,{})})})},d=n(1413),_=n(887),v={form__container:"style_form__container__90r5w",form:"style_form__mw1ZM",input:"style_input__D4nhz",description:"style_description__DzAYs",button:"style_button__F63hq",name:"style_name__xQFBC"},m=n(1009),p={button:"style_button__vZhxj"},f=function(e){var t=e.children,n=e.style,s=e.disabled,r=void 0!==s&&s,i=e.onClick,o=e.type,l=void 0===o?"button":o;return(0,c.jsx)("button",{type:l,disabled:r,className:[p.button,n].join(" "),onClick:i,children:(0,c.jsx)(a.Z,{type:"h2",children:t})})},h="style_close__29wx0",y="style_text__wGax2",x=function(e){var t=e.onClick;return(0,c.jsx)("div",{className:h,onClick:t,children:(0,c.jsx)(a.Z,{style:y,type:"text_small",children:"\u2715"})})},g=n(4165),j=n(5861),k=n(1098),Z=n(1243),b=function(e){return function(){var t=(0,j.Z)((0,g.Z)().mark((function t(n){var s;return(0,g.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Z.Z.post("http://localhost:5000/api/posts/all",{userId:e});case 3:s=t.sent,n((0,k.Ak)()),console.log(s.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},C=function(e,t,n,s,r,i,o){return function(){var l=(0,j.Z)((0,g.Z)().mark((function l(a){var c;return(0,g.Z)().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,Z.Z.post("http://localhost:5000/api/posts",{name:e,description:t,status:n,deadline:s,completed:r,taskId:i,userId:o});case 3:c=l.sent,a((0,k.xJ)(c.data.posts)),console.log(c.data),l.next=11;break;case 8:l.prev=8,l.t0=l.catch(0),console.log(l.t0);case 11:case"end":return l.stop()}}),l,null,[[0,8]])})));return function(e){return l.apply(this,arguments)}}()},w=n(9434),N=function(e){var t,n,r,o,l=e.isEditing,a=void 0===l||l,u=e.setHidden,p=e.name,h=void 0===p?"":p,y=e.description,b=void 0===y?"":y,N=e.deadline,I=void 0===N?new Date:N,S=e.status,D=void 0===S?1:S,H=e.completed,E=void 0!==H&&H,K=e.taskId,B=(0,w.v9)((function(e){return e.user.id})),F=(0,w.I0)(),L=(0,_.cI)({mode:"onBlur"}),A=L.register,G=L.formState,M=G.errors,z=G.isValid,Q=L.handleSubmit,X=L.reset,q=Q((function(e){console.log(JSON.stringify(e)),F(a?C(V,Y,re,ee,E,K,B):function(e,t,n,s,r,i){return function(){var o=(0,j.Z)((0,g.Z)().mark((function o(l){var a;return(0,g.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,Z.Z.post("http://localhost:5000/api/posts",{name:e,description:t,status:n,deadline:s,completed:r,userId:i});case 3:a=o.sent,l((0,k.X3)(a.data.posts)),console.log(a.data.message),o.next=11;break;case 8:o.prev=8,o.t0=o.catch(0),console.log(o.t0);case 11:case"end":return o.stop()}}),o,null,[[0,8]])})));return function(e){return o.apply(this,arguments)}}()}(V,Y,re,ee,E,B)),X()})),J=(0,i.useState)(h),U=(0,s.Z)(J,2),V=U[0],P=U[1],R=(0,i.useState)(b),T=(0,s.Z)(R,2),Y=T[0],O=T[1],W=(0,i.useState)(I),$=(0,s.Z)(W,2),ee=$[0],te=$[1],ne=(0,i.useState)(D),se=(0,s.Z)(ne,2),re=se[0],ie=se[1];return(0,c.jsxs)("div",{className:v.form__container,children:[(0,c.jsx)(x,{onClick:u}),(0,c.jsxs)("form",{onSubmit:function(){return q},className:v.form,children:[(0,c.jsx)(m.Z,{errorHidden:Boolean(null===M||void 0===M?void 0:M.taskName),errorMessage:null===M||void 0===M||null===(t=M.taskName)||void 0===t?void 0:t.message,style:v.taskName,children:(0,c.jsx)("input",(0,d.Z)((0,d.Z)({placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text",value:V,className:[v.input,(null===M||void 0===M?void 0:M.taskName)&&v.input_error].join(" ")},A("taskName",{required:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e",minLength:{value:3,message:"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0430"},maxLength:{value:65,message:"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 65 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}})),{},{onChange:function(e){return P(e.target.value)}}))}),(0,c.jsx)(m.Z,{errorHidden:Boolean(null===M||void 0===M?void 0:M.deadline),errorMessage:null===M||void 0===M||null===(n=M.deadline)||void 0===n?void 0:n.message,style:v.dedline,children:(0,c.jsx)("input",(0,d.Z)((0,d.Z)({placeholder:"\u0414\u0435\u0434\u043b\u0430\u0439\u043d",type:"datetime-local",value:ee.toISOString().substring(0,16),className:[v.input,(null===M||void 0===M?void 0:M.deadline)&&v.input_error].join(" ")},A("deadline",{required:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"})),{},{onChange:function(e){var t=new Date(e.target.value);te(t)},onKeyDown:function(e){e.preventDefault()}}))}),(0,c.jsx)(m.Z,{errorHidden:Boolean(null===M||void 0===M?void 0:M.status),errorMessage:null===M||void 0===M||null===(r=M.status)||void 0===r?void 0:r.message,style:v.status,children:(0,c.jsx)("input",(0,d.Z)((0,d.Z)({placeholder:"\u0412\u0430\u0436\u043d\u043e\u0441\u0442\u044c",type:"number",value:re,className:[v.input,(null===M||void 0===M?void 0:M.status)&&v.input_error].join(" ")},A("status",{max:{value:10,message:"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 10"},min:{value:1,message:"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 1"}})),{},{onChange:function(e){return ie(parseInt(e.target.value))},onKeyDown:function(e){e.preventDefault()}}))}),(0,c.jsx)(m.Z,{errorHidden:Boolean(null===M||void 0===M?void 0:M.description),errorMessage:null===M||void 0===M||null===(o=M.description)||void 0===o?void 0:o.message,style:v.description,children:(0,c.jsx)("textarea",(0,d.Z)((0,d.Z)({placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",value:Y,className:[v.input,(null===M||void 0===M?void 0:M.description)&&v.input_error].join(" ")},A("description",{required:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e",minLength:{value:3,message:"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0430"},maxLength:{value:300,message:"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 300 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}})),{},{onChange:function(e){return O(e.target.value)}}))}),(0,c.jsx)(f,{type:"submit",style:v.button,disabled:!z,onClick:u,children:a?"\u270e":"+"})]})]})},I=function(e){var t=e.name,n=e.description,r=e.deadline,l=e.status,d=e.completed,_=e.taskId,v=(0,i.useState)(!1),m=(0,s.Z)(v,2),p=m[0],f=m[1],h=(0,i.useState)(d),y=(0,s.Z)(h,2),x=y[0],g=y[1],j=(0,w.v9)((function(e){return e.user.id})),k=(0,w.I0)();return(0,i.useEffect)((function(){k(C(t,n,l,r,x,_,j))}),[x]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:[o.task,x?o._completed:""].join(" "),children:[(0,c.jsx)(u,{type:x?"completed":"",onClick:function(){g(!x)}}),(0,c.jsx)(a.Z,{onClick:function(){return f(!p)},style:o.name,children:t}),(0,c.jsx)(a.Z,{type:"text_small",style:o.dedline,children:null===r||void 0===r?void 0:r.toLocaleDateString()})]}),p&&(0,c.jsx)(N,{setHidden:function(){return f(!p)},taskId:_,name:t,description:n,deadline:r,status:l,completed:x})]})},S=function(e){var t=e.tasks;return(0,c.jsx)("div",{className:r,children:null===t||void 0===t?void 0:t.map((function(e){return(0,c.jsx)(I,{taskId:e.id,name:e.name,deadline:e.dedline,completed:e.completed,description:e.description,status:e.status},e.id)}))})},D="style_taskRow__yEmM-",H="style_addButton__QqYhZ",E="style_text__VrE8e",K="style_logout__KaLhG",B=n(2233),F=n(2201),L=function(e){var t=e.text,n=void 0===t?"\u0412\u044b\u0439\u0442\u0438":t,s=(0,w.I0)();return(0,c.jsx)("div",{className:K,children:(0,c.jsx)(a.Z,{style:E,type:"text_small",onClick:function(){return s(F.kS)},children:(0,c.jsx)(B.Z,{src:"/",children:n})})})},A={button:"style_button__yf2ef",img:"style_img__+APwG"},G=function(e){var t=e.style,n=e.disabled,s=void 0!==n&&n,r=e.onClick,i=e.type,o=void 0===i?"button":i;return(0,c.jsx)("button",{type:o,disabled:s,className:[A.button,t].join(" "),onClick:r,children:(0,c.jsx)("img",{src:"https://1.downloader.disk.yandex.ru/preview/f2ee01dadd45870146bae58a652cced8aefd42c21e0770f70cfbfb7b6c08dbb3/inf/355rSZcoPK5e-1dJ_LCgAhWcXA4FpioFm8owXz7Uj66eNlCrjz3tBKC1gtj47GgHhQJ-DfHHjI71Z90lHgv4og%3D%3D?uid=747859828&filename=telegram%20%281%29.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=747859828&tknv=v2&size=1855x940",alt:"tg",className:A.img})})};var M=function(){var e=(0,w.v9)((function(e){return e.user.id})),t=(0,w.I0)();console.log((0,w.v9)((function(e){return e.user}))),console.log(t(b(e))||[]);var n=(0,i.useState)(Array.of(t(b(e)))||[]),r=(0,s.Z)(n,2),o=r[0],l=r[1];(0,i.useEffect)((function(){l(o)}),[o]);var a=(0,i.useState)(!1),u=(0,s.Z)(a,2),d=u[0],_=u[1],v=(0,w.v9)((function(e){return e.user.isAuth}));return(0,c.jsxs)("div",{className:D,children:[v?(0,c.jsx)(L,{}):(0,c.jsx)(L,{text:"\u041e\u0431\u0440\u0430\u0442\u043d\u043e"}),(0,c.jsx)(S,{tasks:o}),(0,c.jsx)(G,{onClick:function(){return window.location.href="https://t.me/ToDo_teambot"}}),d?(0,c.jsx)(N,{setHidden:function(){return _(!d)},isEditing:!1,taskId:-1}):(0,c.jsx)(f,{style:H,onClick:function(){return _(!d)},children:"+"})]})}},1009:function(e,t,n){n.d(t,{Z:function(){return a}});var s={label:"style_label__KVnoB",name:"style_name__3KlZ2"},r={message:"style_message__e67l0"},i=n(7286),o=n(184),l=function(e){var t=e.message,n=void 0===t?"\u041e\u0448\u0438\u0431\u043a\u0430!":t,s=e.style,l=e.onClick;return(0,o.jsx)("div",{onClick:l,children:(0,o.jsx)(i.Z,{type:"text_small",style:[s,r.message].join(" "),children:n})})},a=function(e){var t=e.children,n=e.style,r=e.name,a=e.errorHidden,c=e.errorMessage;return(0,o.jsxs)("label",{className:[n,s.label].join(" "),children:[(0,o.jsx)(i.Z,{type:"text_small",style:s.name,children:r}),t,a&&(0,o.jsx)(l,{message:c})]})}},2233:function(e,t,n){n.d(t,{Z:function(){return o}});var s={link:"style_link__U2TUo"},r=n(1087),i=n(184),o=function(e){var t=e.children,n=e.style,o=e.src,l=e.iswork,a=void 0===l||l;return(0,i.jsx)(i.Fragment,{children:a?(0,i.jsx)(r.rU,{className:[n,s.link].join(" "),to:o,children:t}):t})}},7286:function(e,t,n){n.d(t,{Z:function(){return _}});var s="style_h1__e4KO3",r="style_h2__2G8Fc",i="style_h3__LxRvn",o="style_h4__I6h0r",l="style_h5__iXucQ",a="style_text__YE1Eb",c="style_text_small__b7g5V",u="style__accent__T-oEl",d=n(184),_=function(e){var t=e.children,n=e.style,_=e.type,v=void 0===_?"text":_,m=e.accent,p=void 0!==m&&m,f=e.onClick;return(0,d.jsx)("div",{onClick:f,className:[n,function(e){switch(e){case"h1":return s;case"h2":return r;case"h3":return i;case"h4":return o;case"h5":return l;case"text":return a;case"text_small":return c}}(v),p&&u].join(" "),children:t})}}}]);
//# sourceMappingURL=352.f6177e1f.chunk.js.map
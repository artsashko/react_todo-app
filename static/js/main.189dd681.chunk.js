(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(6),l=a.n(o),r=(a(14),a(15),a(16),a(2)),u=a(8),i=a(1),s=a(7),m=a.n(s),d=function(e){var t=e.todo,a=e.deleteTodo,o=e.editTodosTitle,l=e.statusToogler,r=Object(n.useState)(""),u=Object(i.a)(r,2),s=u[0],d=u[1],f=Object(n.useState)(!1),p=Object(i.a)(f,2),b=p[0],E=p[1],g=function(){s&&(o(t.id,s),E(!1))};return c.a.createElement("li",{className:m()({completed:t.completed,editing:b})},c.a.createElement("div",{className:"view"},c.a.createElement("input",{type:"checkbox",className:"toggle",onChange:function(){return l(t.id)},checked:t.completed}),c.a.createElement("label",{onDoubleClick:function(){return E(!0)}},t.title),c.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return a(t.id)}})),b&&c.a.createElement("input",{autoFocus:!0,type:"text",className:"edit",defaultValue:t.title,onKeyDown:function(e){"Enter"===e.key&&g(),"Escape"===e.key&&E(!1)},onChange:function(e){return d(e.target.value)},onBlur:function(){g(),E(!1)}}))},f={all:"All",active:"Active",completed:"Completed"},p=function(e){var t=e.todos,a=e.setTodos,n=e.filter,o=function(e){var n=t.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t}));a(n)},l=function(e,n){var c=t.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{title:n}):t}));a(c)},u=function(e){a(t.filter((function(t){return t.id!==e})))};return t?c.a.createElement("ul",{className:"todo-list"},t.filter((function(e){switch(n){case f.active:return!e.completed;case f.completed:return e.completed;default:return e}})).map((function(e){return c.a.createElement(d,{key:e.id,todo:e,deleteTodo:u,statusToogler:o,editTodosTitle:l})}))):null},b=function(e){var t=e.currentFilter,a=e.getFilter;return c.a.createElement("ul",{className:"filters"},Object.values(f).map((function(e){return c.a.createElement("li",{key:e},c.a.createElement("a",{href:t===f.all?"#/":"#/".concat(t.toLowerCase()),className:t===e?"selected":"",onClick:function(){return a(e)}},e))})))};var E=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(null),s=Object(i.a)(l,2),m=s[0],d=s[1],E=Object(n.useState)(!1),g=Object(i.a)(E,2),O=g[0],j=g[1],h=Object(n.useState)(f.all),v=Object(i.a)(h,2),N=v[0],k=v[1];return Object(n.useEffect)((function(){JSON.parse(localStorage.getItem("todos"))&&d(JSON.parse(localStorage.getItem("todos")))}),[]),Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(m))}),[m]),c.a.createElement("section",{className:"todoapp"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a&&(d([].concat(Object(u.a)(m),[{id:+new Date,title:a.trim(),completed:!1}])),o(""))}},c.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",onChange:function(e){return o(e.target.value)},value:a}))),c.a.createElement("section",{className:"main"},m&&c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:m.every((function(e){return e.completed})),onChange:function(){j(!O),d(m.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed})})))}}),c.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete")),c.a.createElement(p,{todos:m,setTodos:d,filter:N})),m&&c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"todo-count"},m.filter((function(e){return!e.completed})).length," items left"),c.a.createElement(b,{currentFilter:N,getFilter:k}),m.find((function(e){return e.completed}))&&c.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){d(m.filter((function(e){return!e.completed})))}},"Clear completed")))};l.a.render(c.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.189dd681.chunk.js.map
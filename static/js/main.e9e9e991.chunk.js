(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(7),l=a.n(o),r=(a(15),a(16),a(17),a(2)),u=a(9),i=a(1),s=a(5),m=a.n(s),d=a(8),f=a.n(d),p=function(e){var t=e.todo,a=e.deleteTodo,o=e.editTodo,l=Object(n.useState)(""),r=Object(i.a)(l,2),u=r[0],s=r[1],m=Object(n.useState)(!1),d=Object(i.a)(m,2),p=d[0],b=d[1],E=function(){u&&(o(t.id,u),b(!1))};return c.a.createElement("li",{className:f()({completed:t.completed,editing:p})},c.a.createElement("div",{className:"view"},c.a.createElement("input",{type:"checkbox",className:"toggle",onChange:function(){return o(t.id,!t.completed)},checked:t.completed}),c.a.createElement("label",{onDoubleClick:function(){return b(!0)}},t.title),c.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return a(t.id)}})),p&&c.a.createElement("input",{autoFocus:!0,type:"text",className:"edit",defaultValue:t.title,onKeyDown:function(e){"Enter"===e.key&&E(),"Escape"===e.key&&b(!1)},onChange:function(e){return s(e.target.value)},onBlur:function(){E(),b(!1)}}))},b=function(e){var t=e.setTodos,a=e.todos,n=function(e,n){var c=a.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{title:"string"===typeof n?n:t.title,completed:"boolean"===typeof n?n:t.completed}):t}));t(c)},o=function(e){t(a.filter((function(t){return t.id!==e})))};return a?c.a.createElement("ul",{className:"todo-list"},a.map((function(e){return c.a.createElement(p,{key:e.id,todo:e,deleteTodo:o,editTodo:n})}))):null};b.defaultProps={todos:m.a.arrayOf(m.a.object.isRequired)};var E={all:"All",active:"Active",completed:"Completed"},g=function(e){var t=e.currentFilter,a=e.getFilter;return c.a.createElement("ul",{className:"filters"},Object.values(E).map((function(e){return c.a.createElement("li",{key:e},c.a.createElement("a",{href:t===E.all?"#/":"#/".concat(t.toLowerCase()),className:t===e?"selected":"",onClick:function(){return a(e)}},e))})))};var O=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(null),s=Object(i.a)(l,2),m=s[0],d=s[1],f=Object(n.useState)(!1),p=Object(i.a)(f,2),O=p[0],j=p[1],v=Object(n.useState)(E.all),h=Object(i.a)(v,2),N=h[0],y=h[1];Object(n.useEffect)((function(){JSON.parse(localStorage.getItem("todos"))&&d(JSON.parse(localStorage.getItem("todos")))}),[]),Object(n.useEffect)((function(){m&&0===m.length&&d(null),localStorage.setItem("todos",JSON.stringify(m))}),[m]);var k=Object(n.useMemo)((function(){return t=N,(e=m)?e.filter((function(e){switch(t){case E.active:return!e.completed;case E.completed:return e.completed;default:return e}})):e;var e,t}),[m,N]);return c.a.createElement("section",{className:"todoapp"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:+new Date,title:a.trim(),completed:!1};a&&m?(d([].concat(Object(u.a)(m),[t])),o("")):a&&(d([t]),o(""))}},c.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",onChange:function(e){return o(e.target.value)},value:a}))),c.a.createElement("section",{className:"main"},m&&c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:m.every((function(e){return e.completed})),onChange:function(){j(!O),d(m.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed})})))}}),c.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete")),c.a.createElement(b,{setTodos:d,todos:k})),m&&c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"todo-count"},m.filter((function(e){return!e.completed})).length," items left"),c.a.createElement(g,{currentFilter:N,getFilter:y}),m.find((function(e){return e.completed}))&&c.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){d(m.filter((function(e){return!e.completed})))}},"Clear completed")))};l.a.render(c.a.createElement(O,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.e9e9e991.chunk.js.map
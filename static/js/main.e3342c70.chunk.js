(this["webpackJsonpwspt-scheduler"]=this["webpackJsonpwspt-scheduler"]||[]).push([[0],[,,function(e,t,n){e.exports={newTaskForm:"Task_newTaskForm__B1b14",taskInput:"Task_taskInput__3h3QP",task:"Task_task__3Ls7K",row:"Task_row__27t0X",savedTasks:"Task_savedTasks__3Vi8w",removeButton:"Task_removeButton__3RJoK",addButton:"Task_addButton__1Opd5",order:"Task_order__3yGfu"}},,,,function(e,t,n){e.exports={newEpic:"Epic_newEpic__2RGL2",epicInput:"Epic_epicInput__2l0Sx",epics:"Epic_epics__3HC7a",epic:"Epic_epic__1hETM"}},,,,function(e,t,n){e.exports={header:"Header_header__2fIN1",nav:"Header_nav__2n7rG"}},,function(e,t,n){e.exports={footer:"Footer_footer__320pW"}},function(e,t,n){e.exports={scheduler:"Scheduler_scheduler__3ViVI"}},,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),c=n.n(i),s=n(11),r=n.n(s),o=(n(19),n(12)),u=n.n(o),l=function(){return Object(a.jsx)("div",{className:u.a.footer,children:Object(a.jsx)("p",{children:"gabriella"})})},d=n(10),j=n.n(d),b=function(){return Object(a.jsx)("div",{className:j.a.header,children:Object(a.jsx)("nav",{className:"".concat(j.a.nav," container"),children:Object(a.jsx)("h1",{children:"My Scheduler"})})})},h=n(3),m=n(4),f=n(6),p=n.n(f),v=function(e){var t=e.epics,n=e.setEpics,i=e.nextId,s=c.a.useState(""),r=Object(m.a)(s,2),o=r[0],u=r[1],l=c.a.useState(i),d=Object(m.a)(l,2),j=d[0],b=d[1];function f(e){var a=e.target,i=Object(h.a)(t);i.find((function(e){return e.id===a.id})).name=a.value,n(i)}return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:p.a.newEpic,children:[Object(a.jsx)("input",{type:"text",placeholder:"Epic",value:o,onChange:function(e){var t=e.target;return u(t.value)}}),Object(a.jsx)("button",{onClick:function(){if(o&&!(o.length<=0)){if(t.find((function(e){return e.name===o})))alert("Epic already exists");else{var e={id:j,name:o};b(j+1),n((function(t){return[].concat(Object(h.a)(t),[e])}))}u("")}},children:"Add Epic"})]}),Object(a.jsx)("ul",{className:p.a.epics,children:t.map((function(e){return Object(a.jsxs)("li",{className:p.a.epic,children:[Object(a.jsx)("input",{id:e.id,className:p.a.epicInput,value:e.name,onClick:function(e){return e.target.classList.add("editable")},onChange:f,onBlur:function(e){return e.target.classList.remove("editable")}}),Object(a.jsx)("button",{className:p.a.removeButton,onClick:function(){return t=e.id,void n((function(e){return e.filter((function(e){return e.id!==t}))}));var t},children:"x"})]},e.id)}))})]})},O=n(13),x=n.n(O),g=n(5),_=n(2),k=n.n(_),w=function(e){var t=e.tasks,n=e.setTasks,i=e.nextId,s=c.a.useState({name:"",weight:"",estimation:""}),r=Object(m.a)(s,2),o=r[0],u=r[1],l=c.a.useState(i),d=Object(m.a)(l,2),j=d[0],b=d[1];function f(e){e.length>1&&e.sort((function(e,t){return e.estimation/e.weight<t.estimation/t.weight?-1:1})),n(e)}return c.a.useEffect((function(){window.localStorage.setItem("tasks",JSON.stringify(t))}),[t]),Object(a.jsxs)("section",{className:k.a.task,children:[Object(a.jsxs)("div",{className:k.a.row,children:[Object(a.jsx)("div",{children:"Task"}),Object(a.jsxs)("div",{children:["Estimation",Object(a.jsx)("br",{}),Object(a.jsx)("small",{children:"(min)"})]}),Object(a.jsxs)("div",{children:["Priority",Object(a.jsx)("br",{}),Object(a.jsx)("small",{children:"(\u21931 to \u21915)"})]}),Object(a.jsx)("div",{className:k.a.order,children:"E / P"}),Object(a.jsx)("div",{})]}),Object(a.jsxs)("div",{className:"".concat(k.a.row," ").concat(k.a.newTaskForm),children:[Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",placeholder:"Wash the dishes",value:o.name,onChange:function(e){var t=e.target;return u(Object(g.a)(Object(g.a)({},o),{},{name:t.value}))}})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"number",placeholder:"0",value:o.estimation,onChange:function(e){var t=e.target;return Number(t.value)>0&&u(Object(g.a)(Object(g.a)({},o),{},{estimation:Number(t.value)}))}})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"number",placeholder:"0",value:o.weight,onChange:function(e){var t=e.target;return Number(t.value)>0&&Number(t.value)<6&&u(Object(g.a)(Object(g.a)({},o),{},{weight:Number(t.value)}))}})}),Object(a.jsx)("div",{className:k.a.order,children:o.estimation&&o.weight?parseFloat(o.estimation/o.weight).toFixed(1):"-"}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:k.a.addButton,onClick:function(){if(o&&o.name&&!(o.name.length<=0)&&!(o.estimation&&o.estimation<1)&&(!o.weight||!(o.weight<1||o.weight>5))){if(t.find((function(e){return e.name===o.name})))alert("Task already exists");else{var e=Object(g.a)(Object(g.a)({},o),{},{id:j});b(j+1),e.weight=e.weight||1,e.estimation=e.estimation||1,f([].concat(Object(h.a)(t),[e]))}u({name:"",weight:"",estimation:""})}},children:"+"})})]}),t.map((function(e){return Object(a.jsxs)("div",{className:"".concat(k.a.row," ").concat(k.a.savedTasks),children:[Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",className:k.a.taskInput,value:e.name,onClick:function(e){return e.target.classList.add("editable")},onChange:function(a){var i=a.target;return function(e,a){var i=Object(h.a)(t);i.find((function(t){return t.id===e})).name=a,n(i)}(e.id,i.value)},onBlur:function(e){return e.target.classList.remove("editable")}})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"number",min:"1",className:k.a.taskInput,value:e.estimation,onClick:function(e){return e.target.classList.add("editable")},onChange:function(n){var a=n.target;return function(e,n){var a=Object(h.a)(t);a.find((function(t){return t.id===e})).estimation=n,f(a)}(e.id,a.value)},onBlur:function(e){return e.target.classList.remove("editable")}})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"number",min:"1",max:"5",className:k.a.taskInput,value:e.weight,onClick:function(e){return e.target.classList.add("editable")},onChange:function(n){var a=n.target;return function(e,n){var a=Object(h.a)(t);a.find((function(t){return t.id===e})).weight=n,f(a)}(e.id,a.value)},onBlur:function(e){return e.target.classList.remove("editable")}})}),Object(a.jsx)("div",{className:k.a.order,children:parseFloat(e.estimation/e.weight).toFixed(1)}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:k.a.removeButton,onClick:function(){return t=e.id,void n((function(e){return e.filter((function(e){return e.id!==t}))}));var t},children:"x"})})]},e.id)}))]})},N=function(){var e=c.a.useState(null),t=Object(m.a)(e,2),n=t[0],i=t[1],s=c.a.useState(null),r=Object(m.a)(s,2),o=r[0],u=r[1];return c.a.useEffect((function(){var e=window.localStorage.getItem("tasks"),t=JSON.parse(e);null===t?u([]):t.length>1?u(t.sort((function(e,t){return e.estimation/e.weight<t.estimation/t.weight?-1:1}))):u(t)}),[]),c.a.useEffect((function(){window.localStorage.setItem("epics",JSON.stringify(n))}),[n]),Object(a.jsxs)("div",{className:"".concat(x.a.scheduler," container mainContainer"),children:[null!==n&&Object(a.jsx)(v,{epics:n,setEpics:i,nextId:0===n.length?0:Math.max.apply(Math,Object(h.a)(n.map((function(e){return e.id}))))+1}),null!==o&&Object(a.jsx)(w,{tasks:o,setTasks:u,nextId:0===o.length?0:Math.max.apply(Math,Object(h.a)(o.map((function(e){return e.id}))))+1})]})};var E=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(b,{}),Object(a.jsx)("main",{className:"AppBody animeLeft",children:Object(a.jsx)(N,{})}),Object(a.jsx)(l,{})]})};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.e3342c70.chunk.js.map
(this["webpackJsonpwspt-scheduler"]=this["webpackJsonpwspt-scheduler"]||[]).push([[0],[,,,function(e,t,n){e.exports={taskInput:"Task_taskInput__3h3QP",task:"Task_task__3Ls7K",row:"Task_row__27t0X",savedTasks:"Task_savedTasks__3Vi8w",removeButton:"Task_removeButton__3RJoK",addButton:"Task_addButton__1Opd5"}},,,function(e,t,n){e.exports={newEpic:"Epic_newEpic__2RGL2",epicInput:"Epic_epicInput__2l0Sx",epics:"Epic_epics__3HC7a",epic:"Epic_epic__1hETM"}},,,,function(e,t,n){e.exports={header:"Header_header__2fIN1",nav:"Header_nav__2n7rG"}},,function(e,t,n){e.exports={footer:"Footer_footer__320pW"}},function(e,t,n){e.exports={scheduler:"Scheduler_scheduler__3ViVI"}},,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),c=n.n(i),s=n(11),r=n.n(s),u=(n(19),n(12)),o=n.n(u),l=function(){return Object(a.jsx)("div",{className:o.a.footer,children:Object(a.jsx)("p",{children:"gabriella"})})},d=n(10),j=n.n(d),b=function(){return Object(a.jsx)("div",{className:j.a.header,children:Object(a.jsx)("nav",{className:"".concat(j.a.nav," container"),children:"Weighted Shortest Processing Time Scheduler"})})},f=n(2),h=n(4),p=n(6),m=n.n(p),v=function(e){var t=e.epics,n=e.setEpics,i=e.nextId,s=c.a.useState(""),r=Object(h.a)(s,2),u=r[0],o=r[1],l=c.a.useState(i),d=Object(h.a)(l,2),j=d[0],b=d[1];function p(e){var a=e.target,i=Object(f.a)(t);i.find((function(e){return e.id===a.id})).name=a.value,n(i)}return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:m.a.newEpic,children:[Object(a.jsx)("input",{type:"text",placeholder:"Epic",value:u,onChange:function(e){var t=e.target;return o(t.value)}}),Object(a.jsx)("button",{onClick:function(){if(u&&!(u.length<=0)){if(t.find((function(e){return e.name===u})))alert("Epic already exists");else{var e={id:j,name:u};b(j+1),n((function(t){return[].concat(Object(f.a)(t),[e])}))}o("")}},children:"Add Epic"})]}),Object(a.jsx)("ul",{className:m.a.epics,children:t.map((function(e){return Object(a.jsxs)("li",{className:m.a.epic,children:[Object(a.jsx)("input",{id:e.id,className:m.a.epicInput,value:e.name,onClick:function(e){return e.target.classList.add("editable")},onChange:p,onBlur:function(e){return e.target.classList.remove("editable")}}),Object(a.jsx)("button",{className:m.a.removeButton,onClick:function(){return t=e.id,void n((function(e){return e.filter((function(e){return e.id!==t}))}));var t},children:"x"})]},e.id)}))})]})},O=n(13),x=n.n(O),g=n(5),_=n(3),k=n.n(_),w=function(e){var t=e.tasks,n=e.setTasks,i=e.nextId,s=c.a.useState({name:"",weight:"",estimation:""}),r=Object(h.a)(s,2),u=r[0],o=r[1],l=c.a.useState(i),d=Object(h.a)(l,2),j=d[0],b=d[1];function p(e){e.length>1&&e.sort((function(e,t){return e.estimation/e.weight<t.estimation/t.weight?-1:1})),n(e)}return c.a.useEffect((function(){window.localStorage.setItem("tasks",JSON.stringify(t))}),[t]),Object(a.jsxs)("section",{className:k.a.task,children:[Object(a.jsxs)("div",{className:k.a.row,children:[Object(a.jsx)("div",{children:"Task"}),Object(a.jsx)("div",{children:"Weight (1-5)"}),Object(a.jsx)("div",{children:"Estimation (min)"}),Object(a.jsx)("div",{})]}),Object(a.jsxs)("div",{className:k.a.row,children:[Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",placeholder:"Task",value:u.name,onChange:function(e){var t=e.target;return o(Object(g.a)(Object(g.a)({},u),{},{name:t.value}))}})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"number",placeholder:"0",value:u.weight,onChange:function(e){var t=e.target;return o(Object(g.a)(Object(g.a)({},u),{},{weight:Number(t.value)}))}})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"number",placeholder:"0",value:u.estimation,onChange:function(e){var t=e.target;return o(Object(g.a)(Object(g.a)({},u),{},{estimation:Number(t.value)}))}})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:k.a.addButton,onClick:function(){if(u&&u.name&&!(u.name.length<=0)){if(t.find((function(e){return e.name===u.name})))alert("Task already exists");else{var e=Object(g.a)(Object(g.a)({},u),{},{id:j});b(j+1),p([].concat(Object(f.a)(t),[e]))}o({name:"",weight:"",estimation:""})}},children:"+"})})]}),t.map((function(e){return Object(a.jsxs)("div",{className:"".concat(k.a.row," ").concat(k.a.savedTasks),children:[Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",className:k.a.taskInput,value:e.name,onClick:function(e){return e.target.classList.add("editable")},onChange:function(a){var i=a.target;return function(e,a){var i=Object(f.a)(t);i.find((function(t){return t.id===e})).name=a,n(i)}(e.id,i.value)},onBlur:function(e){return e.target.classList.remove("editable")}})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"number",min:"1",max:"5",className:k.a.taskInput,value:e.weight,onClick:function(e){return e.target.classList.add("editable")},onChange:function(n){var a=n.target;return function(e,n){var a=Object(f.a)(t);a.find((function(t){return t.id===e})).weight=n,p(a)}(e.id,a.value)},onBlur:function(e){return e.target.classList.remove("editable")}})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"number",min:"1",className:k.a.taskInput,value:e.estimation,onClick:function(e){return e.target.classList.add("editable")},onChange:function(n){var a=n.target;return function(e,n){var a=Object(f.a)(t);a.find((function(t){return t.id===e})).estimation=n,p(a)}(e.id,a.value)},onBlur:function(e){return e.target.classList.remove("editable")}})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:k.a.removeButton,onClick:function(){return t=e.id,void n((function(e){return e.filter((function(e){return e.id!==t}))}));var t},children:"x"})})]},e.id)}))]})},N=function(){var e=c.a.useState(null),t=Object(h.a)(e,2),n=t[0],i=t[1],s=c.a.useState(null),r=Object(h.a)(s,2),u=r[0],o=r[1];return c.a.useEffect((function(){var e=window.localStorage.getItem("epics"),t=JSON.parse(e);i(t||[]);var n=window.localStorage.getItem("tasks"),a=JSON.parse(n);null===a?o([]):a.length>1?o(a.sort((function(e,t){return e.estimation/e.weight<t.estimation/t.weight?-1:1}))):o(a)}),[]),c.a.useEffect((function(){window.localStorage.setItem("epics",JSON.stringify(n))}),[n]),Object(a.jsxs)("div",{className:"".concat(x.a.scheduler," container mainContainer"),children:[null!==n&&Object(a.jsx)(v,{epics:n,setEpics:i,nextId:0===n.length?0:Math.max.apply(Math,Object(f.a)(n.map((function(e){return e.id}))))+1}),null!==u&&Object(a.jsx)(w,{tasks:u,setTasks:o,nextId:0===u.length?0:Math.max.apply(Math,Object(f.a)(u.map((function(e){return e.id}))))+1})]})};var I=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(b,{}),Object(a.jsx)("main",{className:"AppBody animeLeft",children:Object(a.jsx)(N,{})}),Object(a.jsx)(l,{})]})};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(I,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.a95d49bf.chunk.js.map
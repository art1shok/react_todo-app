(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(3),c=n.n(l),r=(n(15),n(16),n(1)),s=n(7),i=n(4),u=n(5),d=n(8),m=n(6),f=n(9),p=function(e){var t=e.submitForm,n=e.change,a=e.value;return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"TODO APP"),o.a.createElement("form",{onSubmit:t},o.a.createElement("input",{onChange:n,value:a,className:"new-todo",placeholder:"What needs to be done?"})))},h=function(e){var t=e.checkAll,n=e.filteredTodos,a=e.check,l=e.destroy;return o.a.createElement("section",{className:"main",style:{display:"block"}},o.a.createElement("input",{onChange:t,id:"toggle-all",className:"toggle-all",type:"checkbox"}),o.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),o.a.createElement("ul",{className:"todo-list"},n.map(function(e){return o.a.createElement("li",{className:e.completed?"completed":"",key:e.id},o.a.createElement("div",{className:"view"},o.a.createElement("input",{id:e.id,className:"toggle",type:"checkbox",checked:e.completed,onChange:function(t){return a(t,e.id)}}),o.a.createElement("label",{htmlFor:e.id},e.text),o.a.createElement("button",{className:"destroy",onClick:function(){return l(e.id)}})))})))},E=function(e){var t=e.allTodos,n=e.filter,a=e.setFilter,l=e.clearCompletedTodos;return o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"todo-count"},t.filter(function(e){return!e.completed}).length," ","items left"),o.a.createElement("ul",{className:"filters"},["all","active","completed"].map(function(e){return o.a.createElement("li",null,o.a.createElement("a",{href:"#/".concat(e),onClick:function(){return a(e)},className:n===e?"selected":""},e.split("").map(function(e,t){return 0===t?e.toUpperCase():e}).join("")))})),t.some(function(e){return e.completed})&&o.a.createElement("button",{type:"button",className:"clear-completed",onClick:l},"Clear completed"))},b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[],title:"",currentFilter:"all",allCompleted:!1},n.addTodo=function(e){n.setState(function(t){var n={text:e,completed:!1,id:+new Date};return{todos:[].concat(Object(s.a)(t.todos),[n])}})},n.change=function(e){n.setState({title:e.target.value})},n.submitForm=function(e){e.preventDefault(),n.state.title&&""!==n.state.title.trim()&&(n.addTodo(n.state.title),n.setState({title:""}))},n.destroy=function(e){n.setState(function(t){return{todos:t.todos.filter(function(t){return t.id!==e})}})},n.check=function(e,t){e.persist(),n.setState(function(n){return{todos:n.todos.map(function(n){return n.id!==t?n:Object(r.a)({},n,{completed:e.target.checked})})}})},n.checkAll=function(){n.setState(function(e){var t=e.todos,n=e.allCompleted;return{allCompleted:!n,todos:t.map(function(e){return Object(r.a)({},e,{completed:!n})})}})},n.setFilter=function(e){n.setState(function(t){return{currentFilter:e}})},n.filteredTodos=function(){switch(n.state.currentFilter){case"Completed":return n.state.todos.filter(function(e){return e.completed});case"Active":return n.state.todos.filter(function(e){return!e.completed});case"All":default:return n.state.todos}},n.clearCompletedTodos=function(){n.setState(function(e){return{todos:e.todos.filter(function(e){return!e.completed})}})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.todos,n=e.title,a=e.currentFilter;return o.a.createElement("section",{className:"todoapp"},o.a.createElement(p,{submitForm:this.submitForm,change:this.change,value:n}),o.a.createElement(h,{checkAll:this.checkAll,filteredTodos:this.filteredTodos(),check:this.check,destroy:this.destroy}),t.length>0&&o.a.createElement(E,{allTodos:t,filter:a,setFilter:this.setFilter,clearCompletedTodos:this.clearCompletedTodos}))}}]),t}(o.a.Component);c.a.render(o.a.createElement(b,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.d5bef495.chunk.js.map
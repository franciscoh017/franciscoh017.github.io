(function(t){function e(e){for(var a,c,l=e[0],r=e[1],o=e[2],u=0,p=[];u<l.length;u++)c=l[u],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&p.push(s[c][0]),s[c]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,o||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,l=1;l<i.length;l++){var r=i[l];0!==s[r]&&(a=!1)}a&&(n.splice(e--,1),t=c(c.s=i[0]))}return t}var a={},s={app:0},n=[];function c(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=t,c.c=a,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(i,a,function(e){return t[e]}.bind(null,a));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/stickies/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var d=r;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var a=i("85ec"),s=i.n(a);s.a},"078a":function(t,e,i){},"0ae8":function(t,e,i){"use strict";var a=i("078a"),s=i.n(a);s.a},"0ddf":function(t,e,i){"use strict";var a=i("c504"),s=i.n(a);s.a},"3bc9":function(t,e,i){"use strict";var a=i("6fa3"),s=i.n(a);s.a},"56d7":function(t,e,i){"use strict";i.r(e);var a=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Layout")],1)},n=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Navbar"),i("div",{staticClass:"has-background-bluegrey",attrs:{id:"content"}},[i("Stickies")],1)],1)},l=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"navbar is-dark is-blue"},[i("div",{staticClass:"navbar-brand"},[i("a",{staticClass:"navbar-item is-size-4 has-text-white",attrs:{href:"/"}},[t._v(" Stickies ")]),i("div",{staticClass:"navbar-item"},[i("a",{staticClass:"button is-white is-outlined",attrs:{href:"https://github.com/franciscoh017",target:"_blank"}},[i("span",{staticClass:"icon"},[i("i",{staticClass:"fab fa-github"})]),i("span",[t._v("Github")])])])]),i("div",{staticClass:"navbar-menu",attrs:{id:"navbarExampleTransparentExample"}},[i("div",{staticClass:"navbar-start"}),i("div",{staticClass:"navbar-end"})])])}],d={name:"Navbar"},u=d,p=(i("0ddf"),i("2877")),m=Object(p["a"])(u,r,o,!1,null,"690a32e7",null),f=m.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"section"},[i("div",{staticClass:"field"},[i("a",{staticClass:"button is-dark is-inverted is-outlined",attrs:{id:"add",href:"#"},on:{click:function(e){t.isFormModal=!0}}},[t._m(0),i("span",[t._v("Add")])])]),i("h1",{staticClass:"heading has-text-white has-text-weight-bold"},[t._v("Pinned")]),t.pinnedStickies.length>0?i("div",{attrs:{id:"pinned"}},t._l(t.pinnedStickies,(function(e,a){return i("ul",{key:a,staticClass:"columns is-multiline"},[i("li",{staticClass:"column is-5"},[i("Sticky",{staticClass:"sticky",attrs:{id:e.id,index:a,title:e.title,body:e.body,completed:e.completed,pinned:e.pinned},on:{"update:completed":function(i){return t.$set(e,"completed",i)},"update:pinned":function(i){return t.$set(e,"pinned",i)}}})],1)])})),0):i("div",[t._m(1)]),i("br"),i("h1",{staticClass:"heading has-text-white has-text-weight-bold"},[t._v("Other")]),t.otherStickies.length>0?i("div",{attrs:{id:"other"}},t._l(t.otherStickies,(function(e,a){return i("ul",{key:a,staticClass:"columns is-multiline"},[i("li",{staticClass:"column is-5"},[i("Sticky",{staticClass:"sticky",attrs:{id:e.id,index:a,title:e.title,body:e.body,completed:e.completed,pinned:e.pinned},on:{"update:completed":function(i){return t.$set(e,"completed",i)},"update:pinned":function(i){return t.$set(e,"pinned",i)}}})],1)])})),0):i("div",[t._m(2)]),i("b-modal",{attrs:{active:t.isFormModal},on:{"update:active":function(e){t.isFormModal=e}}},[i("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.processSticky()}}},[i("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[i("header",{staticClass:"modal-card-head"},[i("p",{staticClass:"modal-card-title"},[t._v(" Create New ")])]),i("section",{staticClass:"modal-card-body has-background-bluegrey"},[i("div",{staticClass:"field"},[i("label",{staticClass:"label has-text-white"},[t._v("Title")]),i("div",{staticClass:"control"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentSticky.title,expression:"currentSticky.title"}],staticClass:"input",attrs:{type:"text",placeholder:"Task Title"},domProps:{value:t.currentSticky.title},on:{input:function(e){e.target.composing||t.$set(t.currentSticky,"title",e.target.value)}}})])]),i("div",{staticClass:"field"},[i("label",{staticClass:"label has-text-white"},[t._v("Desription")]),i("div",{staticClass:"control"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.currentSticky.body,expression:"currentSticky.body"}],staticClass:"textarea",attrs:{type:"text",placeholder:"Task Description"},domProps:{value:t.currentSticky.body},on:{input:function(e){e.target.composing||t.$set(t.currentSticky,"body",e.target.value)}}})])]),i("b-checkbox",{model:{value:t.currentSticky.pinned,callback:function(e){t.$set(t.currentSticky,"pinned",e)},expression:"currentSticky.pinned"}},[i("p",{staticClass:"has-text-white"},[t._v("Pinned")])])],1),i("footer",{staticClass:"modal-card-foot"},[i("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[t._v("Save")])])])])])],1)},h=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon"},[i("i",{staticClass:"fas fa-plus"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"section has-text-centered"},[i("span",{staticClass:"has-text-grey-light"},[t._v(" Pin an "),i("b",[t._v("important")]),t._v(" Sticky here.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"section has-text-centered"},[i("span",{staticClass:"has-text-grey-light"},[i("b",[t._v("Create")]),t._v(" a Sticky to get started.")])])}],b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("b-modal",{attrs:{active:t.editModalActive},on:{"update:active":function(e){t.editModalActive=e}}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.SaveAndClose()}}},[a("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v(" Update ")])]),a("section",{staticClass:"modal-card-body has-background-bluegrey"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label has-text-white"},[t._v("Title")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.title,expression:"data.title"}],staticClass:"input",attrs:{type:"text",placeholder:"Task Title"},domProps:{value:t.data.title},on:{input:function(e){e.target.composing||t.$set(t.data,"title",e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label has-text-white"},[t._v("Desription")]),a("div",{staticClass:"control"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.body,expression:"data.body"}],staticClass:"textarea",attrs:{type:"text",placeholder:"Task Description"},domProps:{value:t.data.body},on:{input:function(e){e.target.composing||t.$set(t.data,"body",e.target.value)}}})])]),a("b-checkbox",{model:{value:t.data.completed,callback:function(e){t.$set(t.data,"completed",e)},expression:"data.completed"}},[a("p",{staticClass:"has-text-white"},[t._v("Completed")])]),a("b-checkbox",{model:{value:t.data.pinned,callback:function(e){t.$set(t.data,"pinned",e)},expression:"data.pinned"}},[a("p",{staticClass:"has-text-white"},[t._v("Pinned")])])],1),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[t._v("Save")])])])])]),a("div",{staticClass:"card has-background-noir",class:t.completed?"complete-box":null},[a("div",{staticClass:"card-content"},[a("nav",{staticClass:"level is-mobile"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("span",{attrs:{id:"complete"},on:{click:function(e){return t.toggleComplete(t.id)}}},[t.completed?a("p",{staticClass:"subtitle is-5"},[a("img",{attrs:{src:i("f23e")}})]):a("p",{staticClass:"subtitle is-5"},[a("img",{attrs:{src:i("8860")}})])]),a("span",{attrs:{id:"pin"},on:{click:function(e){return t.togglePinned(t.id)}}},[t.pinned?a("p",{staticClass:"subtitle is-5"},[t._m(0)]):a("p",{staticClass:"subtitle is-5"},[t._m(1)])]),a("p",{staticClass:"level-item"},[a("a",{staticClass:"has-text-white has-size-5 has-text-weight-bold",on:{click:function(e){t.editModalActive=!0}}},[t._m(2)])])])]),a("div",{staticClass:"level-right"},[a("p",{staticClass:"level-item"},[a("a",{staticClass:"has-text-white has-size-5 has-text-weight-bold",on:{click:function(e){return t.deleteSticky(t.id)}}},[t._m(3)])])])]),a("p",{staticClass:"subtitle is-5 has-text-white has-text-weight-bold",class:t.completed?"complete":null},[t._v(" "+t._s(t.title)+" ")]),a("div",{staticClass:"content"},[a("p",{staticClass:"has-text-grey-light",class:t.completed?"complete":null},[t._v(" "+t._s(t.body)+" ")])])])])],1)},C=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon pinned"},[i("i",{staticClass:"fas fa-thumbtack"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon"},[i("i",{staticClass:"fas fa-thumbtack"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon"},[i("i",{staticClass:"fas fa-pencil-alt"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon"},[i("i",{staticClass:"fas fa-trash"})])}],y=i("2f62"),k={name:"Sticky",props:{id:{type:Number,required:!0},title:{type:String,required:!0},body:{type:String,required:!0},completed:{type:Boolean,default:!1},pinned:{type:Boolean,default:!1}},data(){return{editModalActive:!1,data:{id:this.id,title:this.title,body:this.body,completed:this.completed,pinned:this.pinned}}},methods:{...Object(y["b"])(["togglePinned","toggleComplete","deleteSticky","updateSticky"]),SaveAndClose(){this.updateSticky(this.data),this.editModalActive=!1}}},_=k,g=(i("777a"),Object(p["a"])(_,b,C,!1,null,null,null)),S=g.exports,x={name:"Stickies",components:{Sticky:S},data(){return{stickies:[],isFormModal:!1,currentSticky:{id:null,title:null,body:null,pinned:!1,completed:!1}}},computed:{...Object(y["c"])(["pinnedStickies","otherStickies"])},methods:{...Object(y["b"])(["getStickies","createSticky"]),showUpdateModal(t){this.currentSticky={id:t.id,title:t.title,body:t.body,pinned:t.pinned,completed:t.completed},this.isFormModal=!0},processSticky(){const t=Math.floor(Math.random()*Date.now());this.currentSticky.id=t,this.createSticky(this.currentSticky),this.isFormModal=!1,this.clearForm()},clearForm(){this.currentSticky={id:null,title:null,body:null,pinned:!1,completed:!1}}}},E=x,w=(i("3bc9"),Object(p["a"])(E,v,h,!1,null,"44f02de4",null)),T=w.exports,$={name:"Layout",components:{Navbar:f,Stickies:T}},P=$,O=(i("0ae8"),Object(p["a"])(P,c,l,!1,null,null,null)),M=O.exports,j={name:"App",components:{Layout:M}},I=j,A=(i("034f"),Object(p["a"])(I,s,n,!1,null,null,null)),D=A.exports,N=i("8c4f"),F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"})},K=[],L={name:"Home",components:{}},U=L,Y=Object(p["a"])(U,F,K,!1,null,null,null),q=Y.exports;a["a"].use(N["a"]);const z=[{path:"/",name:"Home",component:q}],B=new N["a"]({mode:"history",base:"/stickies/",routes:z});var G=B,V=i("bfa9");a["a"].use(y["a"]);const H=!1,J=new V["a"]({storage:window.localStorage});var R=new y["a"].Store({state:{stickies:[{id:1,title:"I <3 Vue.js",body:"Made with Vue.js, Vuex, Buefy",pinned:!0,completed:!0}]},mutations:{SET_PINNED(t,e){t.stickies.forEach(t=>{t.id==e&&(t.pinned=!t.pinned)})},SET_COMPLETE(t,e){t.stickies.forEach(t=>{t.id==e&&(t.completed=!t.completed)})},DELETE_STICKIE(t,e){function i(t){return t.id!=e}t.stickies=t.stickies.filter(i)},GET_STICKIES(t){return t.stickies},CREATE_STICKY(t,e){t.stickies.push(e)},UPDATE_STICKY(t,e){t.stickies.forEach(t=>{t.id==e.id&&(t.title=e.title,t.body=e.body,t.pinned=e.pinned,t.completed=e.completed)})}},actions:{togglePinned({commit:t},e){t("SET_PINNED",e)},toggleComplete({commit:t},e){t("SET_COMPLETE",e)},deleteSticky({commit:t},e){t("DELETE_STICKIE",e)},getStickiy({commit:t,state:e}){t("GET_STICKIES",e)},createSticky({commit:t},e){t("CREATE_STICKY",e)},updateSticky({commit:t},e){t("UPDATE_STICKY",e)}},getters:{pinnedStickies(t){return t.stickies.filter(t=>t.pinned)},otherStickies(t){return t.stickies.filter(t=>!t.pinned)}},modules:{},plugins:[J.plugin],strict:H}),Q=i("289d");i("5abe");a["a"].use(Q["a"]),a["a"].config.productionTip=!1,new a["a"]({router:G,store:R,render:function(t){return t(D)}}).$mount("#app")},"6fa3":function(t,e,i){},"777a":function(t,e,i){"use strict";var a=i("cdae"),s=i.n(a);s.a},"85ec":function(t,e,i){},8860:function(t,e,i){t.exports=i.p+"img/Check.41044bd8.svg"},c504:function(t,e,i){},cdae:function(t,e,i){},f23e:function(t,e,i){t.exports=i.p+"img/Check 2.d47cbee3.svg"}});
//# sourceMappingURL=app.c29d5e6f.js.map
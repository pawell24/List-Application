(this["webpackJsonpshop-list"]=this["webpackJsonpshop-list"]||[]).push([[0],{27:function(n,t,e){n.exports=e.p+"static/media/plus.e43ce6c8.svg"},40:function(n,t,e){n.exports=e(52)},52:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(17),i=e.n(o),c=e(20),l=e(16),u=e(5),s={list:[],listItems:[],searchitem:""},d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0,e=t.type,r=t.payload;switch(e){case"ADD_LIST":return Object(u.a)(Object(u.a)({},n),{},{list:[].concat(Object(l.a)(n.list),[r])});case"ADD_LIST_ITEM":return console.log(r),Object(u.a)(Object(u.a)({},n),{},{listItems:[].concat(Object(l.a)(n.listItems),[r])});case"REMOVE_LIST":return console.log(r),Object(u.a)(Object(u.a)({},n),{},{list:Object(l.a)(n.list.filter((function(n){return n.id!=r.id})))});case"REMOVE_LIST_ITEM":return console.log(r),Object(u.a)(Object(u.a)({},n),{},{listItems:Object(l.a)(n.listItems.filter((function(n){return n.id!=r.id})))});case"SET_SEARCH_ITEM":return console.log(r),Object(u.a)(Object(u.a)({},n),{},{searchitem:r});default:return n}},p=Object(c.b)(d,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),f=e(3),m=e(1),b=e(11);function x(){var n=Object(f.a)(["\n      left: 50%;\n      top: 10%;\n      transform: translateX(-50%);\n      font-size: 30px;\n    "]);return x=function(){return n},n}function g(){var n=Object(f.a)(["\n  font-size: 40px;\n  color: #1e58ff;\n  position: absolute;\n  left: 5%;\n  top: 3%;\n  font-weight: 600;\n  text-decoration: none;\n  @media (max-width: 600px) {\n    font-size: 26px;\n  }\n  ",";\n"]);return g=function(){return n},n}var h=m.d.h1(g(),(function(n){return n.title&&Object(m.c)(x())})),O=function(n){var t=n.children,e=n.title;return n.link?a.a.createElement(h,{as:b.b,to:"/",title:e},t):a.a.createElement(h,{title:e},t)},v=e(27),E=e.n(v);function j(){var n=Object(f.a)(["\n  width: 70px;\n  height: 70px;\n  background-color: #1e58ff;\n  border-radius: 50%;\n  background-image: url(",');\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  position: absolute;\n  bottom: 5%;\n  right: 5%;\n  cursor: pointer;\n  z-index: 99;\n  font-family: "Montserrat";\n']);return j=function(){return n},n}var w=m.d.div(j(),E.a),y=function(n){var t=n.toggle;return a.a.createElement(w,{onClick:t})},I={mainColor:"blue"};function _(){var n=Object(f.a)(["\n*{\n    margin:0;\n    padding:0;\n    box-sizing:border-box;\n    font-family: Montserrat, sans-serif;\n    \n\n}\nhtml, body,div#root {\n  overflow: hidden;\n}\nbody {\n  -webkit-overflow-x-scrolling: touch;\n}\n\n"]);return _=function(){return n},n}var M=Object(m.b)(_()),k=function(n){var t=n.children;return a.a.createElement("div",{style:{"overflow-x":"hidden"}},a.a.createElement(m.a,{theme:I},t),a.a.createElement(M,null))},S=e(14),z=e(39),L=e(22),T=e(23),D=e(25),C=e(24),R=function(n){return function(t){Object(D.a)(r,t);var e=Object(C.a)(r);function r(){var n;Object(L.a)(this,r);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))).state={isModalOpen:!1},n.toggleModal=function(){n.setState((function(n){return{isModalOpen:!n.isModalOpen}}))},n}return Object(T.a)(r,[{key:"render",value:function(){var t=this.state.isModalOpen;return a.a.createElement(n,Object.assign({isModalOpen:t,toggle:this.toggleModal},this.props))}}]),r}(r.Component)},A=e(10),X=e(4);function V(){var n=Object(f.a)(["\n  font-size: 18px;\n  margin-top: 20px;\n  width: 190px;\n  padding: 8px 18px;\n  background-color: white;\n  border: solid 2px #1e58ff;\n  color: black;\n  :hover {\n    background-color: #1e58ff;\n    color: white;\n    cursor: pointer;\n  }\n"]);return V=function(){return n},n}function N(){var n=Object(f.a)(["\n  padding: 10px 5px;\n  font-size: 20px;\n  border: none;\n  border-bottom: 3px solid grey;\n  outline: none;\n  transition: 0.5s;\n  height: 150px;\n  resize: none;\n  :focus {\n    border-bottom: 3px solid #1e58ff;\n  }\n"]);return N=function(){return n},n}function F(){var n=Object(f.a)(["\n  padding: 10px 5px;\n  font-size: 20px;\n  border: none;\n  border-bottom: 3px solid grey;\n  outline: none;\n  transition: 0.5s;\n  margin-bottom: 20px;\n  :focus {\n    border-bottom: 3px solid #1e58ff;\n  }\n"]);return F=function(){return n},n}function H(){var n=Object(f.a)(['\n  font-family: "Arial";\n  height: 700px;\n  position: absolute;\n  top: 20%;\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 20px;\n']);return H=function(){return n},n}function J(){var n=Object(f.a)(["\n      opacity: 1;\n      transform: translateX(-100%);\n    "]);return J=function(){return n},n}function U(){var n=Object(f.a)(["\n  width: 25%;\n  height: 100%;\n  position: absolute;\n  right: -25%;\n  overflow-x: hidden;\n  margin: 0;\n  border-left: 5px solid #1e58ff;\n  background-color: white;\n  transition: 0.4s;\n  opacity: 0;\n  @media (max-width: 600px) {\n    width: 100%;\n    right: -100%;\n  }\n  ",";\n"]);return U=function(){return n},n}var B=m.d.div(U(),(function(n){return n.isModalOpen&&Object(m.c)(J())})),P=m.d.form(H()),q=m.d.input(F()),G=m.d.textarea(N()),K=m.d.button(V()),Q=Object(A.b)(null,(function(n){return{addItem:function(t){return n((e=t,{type:"ADD_LIST",payload:Object(u.a)({},e)}));var e},addListItem:function(t,e){return n(function(n,t){return{type:"ADD_LIST_ITEM",payload:Object(u.a)(Object(u.a)({},n),{},{pageid:t})}}(t,e))}}}))(Object(X.f)((function(n){var t=n.isModalOpen,e=n.toggle,o=n.details,i=n.addListItem,c=n.addItem,l=n.match,s=Object(r.useReducer)((function(n,t){return Object(u.a)(Object(u.a)({},n),t)}),{title:"",content:""}),d=Object(z.a)(s,2),p=d[0],f=d[1],m=l.params.id,b=p;return a.a.createElement(B,{isModalOpen:t},a.a.createElement(P,{autoComplete:"off",onSubmit:function(n){p.title?(n.preventDefault(),p.id=Math.random().toString(36).substr(2,9),e(),o?i(b,m):c(p),n.target.reset()):n.preventDefault()}},a.a.createElement("label",{htmlFor:"input__name"},o?"Dodaj nowe zadanie":" Podaj nazw\u0119 nowej listy"),a.a.createElement(q,{type:"text",id:"input__name",placeholder:"Tytu\u0142",name:"title",onChange:function(n){return f(Object(S.a)({},n.target.name,n.target.value))}}),o&&a.a.createElement(G,{type:"text",id:"input__content",name:"content",placeholder:"Tre\u015b\u0107",onChange:function(n){return f(Object(S.a)({},n.target.name,n.target.value))}}),a.a.createElement(K,{type:"submit"},o?"Dodaj zadanie":"Stw\xf3rz list\u0119")))})));function W(){var n=Object(f.a)(["\n  font-size: 20px;\n  text-align: center;\n  margin-top: 20px;\n"]);return W=function(){return n},n}function Y(){var n=Object(f.a)(["\n  color: black;\n  position: absolute;\n  left: 10px;\n  bottom: 10px;\n"]);return Y=function(){return n},n}function Z(){var n=Object(f.a)(["\n      right: 140px;\n      width: 100px;\n      height: 29px;\n      font-size: 16px;\n      @media (max-width: 700px) {\n        padding: 3px 5px;\n        border: 1px solid #1e58ff;\n        width: 80px;\n        font-size: 14px;\n      }\n    "]);return Z=function(){return n},n}function $(){var n=Object(f.a)(["\n  position: absolute;\n  right: 15px;\n  bottom: 15px;\n  padding: 3px 6px;\n  border: 2px solid #1e58ff;\n  background-color: white;\n  cursor: pointer;\n  text-decoration: none;\n  color: black;\n  @media (max-width: 700px) {\n    padding: 3px 5px;\n    border: 1px solid #1e58ff;\n    font-size: 14px;\n  }\n  ","\n  :hover {\n    background-color: #1e58ff;\n    color: white;\n  }\n"]);return $=function(){return n},n}function nn(){var n=Object(f.a)(["\n  text-align: center;\n  color: black;\n  font-size: 20px;\n  margin-top: 10px;\n"]);return nn=function(){return n},n}function tn(){var n=Object(f.a)(["\n  width: 80%;\n  height: ",";\n  transform: translateX(-50%);\n  list-style: none;\n  margin-top: 20px;\n  position: relative;\n  left: 40%;\n  border: 3px solid #1e58ff;\n"]);return tn=function(){return n},n}var en=m.d.li(tn(),(function(n){return n.details?"180px":"100px"})),rn=m.d.h1(nn()),an=m.d.button($(),(function(n){return n.remove&&Object(m.c)(Z())})),on=m.d.p(Y()),cn=m.d.p(W()),ln=Object(A.b)(null,(function(n){return{removeList:function(t){return n(function(n){return{type:"REMOVE_LIST",payload:{id:n}}}(t))},removeListItem:function(t){return n(function(n){return{type:"REMOVE_LIST_ITEM",payload:{id:n}}}(t))}}}))((function(n){var t=n.title,e=n.id,r=n.content,o=n.details,i=n.removeList,c=n.removeListItem,l=new Date,u=e;return a.a.createElement(en,{details:o,"data-id":e},a.a.createElement(rn,null,t),o&&a.a.createElement(cn,null,r),!o&&a.a.createElement(an,{as:b.b,to:"/list/details/".concat(e)},"See details"),!o&&a.a.createElement(an,{remove:!0,onClick:function(n){return i(u)}},"Remove"),o&&a.a.createElement(an,{remove:!0,onClick:function(n){return c(u)}},"Remove"),a.a.createElement(on,null," created: ",l.toLocaleDateString()," "))}));function un(){var n=Object(f.a)(["\n  width: 70%;\n  position: absolute;\n  left: 50%;\n  top: 20%;\n  transform: translateX(-50%);\n  z-index: -1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  @media (max-width: 600px) {\n    width: 100%;\n  }\n"]);return un=function(){return n},n}var sn=m.d.ul(un()),dn=Object(A.b)((function(n){return{list:n.list,listItems:n.listItems,searchitem:n.searchitem}}))(Object(X.f)((function(n){var t=n.list,e=n.listItems,r=n.details,o=n.match,i=n.searchitem;if(console.log(t),r){console.log(o.params.id);var c=e.filter((function(n){return n.pageid==o.params.id}));return a.a.createElement(a.a.Fragment,null,a.a.createElement(sn,null,c.map((function(n){return a.a.createElement(ln,Object.assign({details:!0},n))}))))}return a.a.createElement(a.a.Fragment,null,a.a.createElement(sn,null,t.filter((function(n){return n.title.toLowerCase().includes(i.toLowerCase())})).map((function(n){return console.log(n),a.a.createElement(ln,n)}))))}))),pn=R((function(n){var t=n.isModalOpen,e=n.toggle;return a.a.createElement(k,null,a.a.createElement(O,{link:!0},"List app"),a.a.createElement(O,{title:!0},"Items"),a.a.createElement(y,{toggle:e}),a.a.createElement(Q,{isModalOpen:t,toggle:e,details:!0}),a.a.createElement(dn,{details:!0}))}));function fn(){var n=Object(f.a)(["\n  width: 170px;\n  height: 40px;\n  background-color: white;\n  border: 3px solid #1e58ff;\n  border-radius: 20px;\n  padding: 10px;\n  position: absolute;\n  right: 5%;\n  top: 5%;\n  outline: none;\n  z-index: -1;\n  @media (max-width: 600px) {\n    width: 120px;\n    height: 35px;\n    padding: 3px 5px;\n    font-size: 12px;\n    top: 4%;\n  }\n  ::placeholder {\n    @media (max-width: 600px) {\n      font-size: 12px;\n    }\n    font-size: 16px;\n  }\n"]);return fn=function(){return n},n}var mn=m.d.input(fn()),bn=Object(A.b)(null,(function(n){return{setSearchItem:function(t){return n(function(n){return{type:"SET_SEARCH_ITEM",payload:n}}(t))}}}))((function(n){var t=n.setSearchItem;return a.a.createElement(mn,{placeholder:"search list",onChange:function(n){t(n.target.value)}})})),xn=R(function(n){Object(D.a)(e,n);var t=Object(C.a)(e);function e(){return Object(L.a)(this,e),t.apply(this,arguments)}return Object(T.a)(e,[{key:"render",value:function(){var n=this.props,t=n.isModalOpen,e=n.toggle;return a.a.createElement(k,null,a.a.createElement(O,{link:!0},"List app"),a.a.createElement(O,{title:!0},"Active List"),a.a.createElement(y,{toggle:e}),a.a.createElement(Q,{isModalOpen:t,toggle:e}),a.a.createElement(dn,null),a.a.createElement(bn,null))}}]),e}(r.Component));var gn=function(){return a.a.createElement(A.a,{store:p},a.a.createElement(b.a,null,a.a.createElement(k,null,a.a.createElement(X.c,null,a.a.createElement(X.a,{exact:!0,path:"/",component:xn}),a.a.createElement(X.a,{exact:!0,path:"/list/details/:id",component:pn})))))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(gn,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.ef16850b.chunk.js.map
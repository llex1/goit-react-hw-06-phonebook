(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{14:function(t,e,a){t.exports={form:"ContactAdd_form__NRizT",label:"ContactAdd_label__3aJLR",input:"ContactAdd_input__1Fx51",btn:"ContactAdd_btn__1U505"}},37:function(t,e,a){},38:function(t,e,a){},39:function(t,e,a){},41:function(t,e,a){},42:function(t,e,a){},43:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a(0),r=a(12),o=a.n(r),s=a(10),i=a(13),l=a(4),u=a(11),b=Object(i.c)({contacts:[],filter:[]},{ADD:function(t,e){var a=e.payload;return Object(u.a)(Object(u.a)({},t),{},{contacts:[].concat(Object(l.a)(t.contacts),Object(l.a)(a.contacts))})},DEL:function(t,e){var a=e.payload;return Object(u.a)(Object(u.a)({},t),{},{contacts:Object(l.a)(a.contacts),filter:Object(l.a)(a.filter)})},FILTER:function(t,e){var a=e.payload;return Object(u.a)(Object(u.a)({},t),{},{filter:Object(l.a)(a.filter)})},ALERT:function(t,e){var a=e.payload;return Object(u.a)(Object(u.a)({},t),{},{isAlert:a.isAlert,alertMessage:a.alertMessage})}}),p=Object(i.a)({reducer:b}),j=a(5),d=a(6),f=a(8),h=a(7),m={localStorage:Object(i.b)("ADD",(function(t){return{payload:{contacts:t}}}))},O=a(45),v=(a(37),function(t){Object(f.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(j.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={},t}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"alert",children:Object(n.jsx)("p",{className:"alert-text",children:this.props.text})})}}]),a}(c.Component)),y=(a(38),function(t){Object(f.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(j.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={},t}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:"header",children:Object(n.jsx)("p",{children:"Phonebook"})})}}]),a}(c.Component)),x={add:function(t,e){var a=e.id,n=e.name,c=e.number;return n&&!t.contacts.map((function(t){return t.name.toLowerCase()})).includes(n.toLowerCase())?{type:"ADD",payload:{contacts:[{id:a,name:n,number:c}]}}:{type:"ADD",payload:{contacts:[]}}},alert:Object(i.b)("ALERT",(function(t){return{payload:{isAlert:t.isAlert,alertMessage:t.alertMessage}}}))},g=a(46),C=a(14),A=a.n(C),N=function(t){Object(f.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(j.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={valueName:"",valueNumder:""},t.delayToCloseAlert=null,t.handleChange=function(e){switch(e.target.name){case"name":t.setState((function(t){return{valueName:e.target.value}}));break;case"number":t.setState((function(t){return{valueNumder:e.target.value}}));break;default:console.log("error form-name")}},t.handleSubmit=function(e){e.preventDefault();var a={id:Object(g.a)(),name:t.state.valueName,number:t.state.valueNumder};t.props.action_ADD(t.props.state,a),a.name&&t.props.state.contacts.map((function(t){return t.name.toLowerCase()})).includes(a.name.toLowerCase())&&(t.props.action_ALERT({isAlert:!0,alertMessage:"Sorry, but You already have this contact in your base."}),clearTimeout(t.delayToCloseAlert),t.delayToCloseAlert=setTimeout((function(){t.props.action_ALERT({isAlert:!1,alertMessage:""})}),3e3)),t.setState((function(t){return{valueName:"",valueNumder:""}}))},t}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("form",{className:A.a.form,onSubmit:this.handleSubmit,children:[Object(n.jsx)("label",{className:A.a.label,htmlFor:"name",children:"Contact Name"}),Object(n.jsx)("input",{required:!0,className:A.a.input,type:"text",name:"name",id:"name",placeholder:"name",autoComplete:"off",value:this.state.valueName,onChange:this.handleChange}),Object(n.jsx)("label",{className:A.a.label,htmlFor:"number",children:"Contact Number"}),Object(n.jsx)("input",{className:A.a.input,type:"tel",name:"number",id:"number",placeholder:"063-333-4444",autoComplete:"off",pattern:"[0-9\\W]*",value:this.state.valueNumder,onChange:this.handleChange}),Object(n.jsx)("button",{className:A.a.btn,type:"submit",children:"new contact"})]})}}]),a}(c.Component),L=Object(s.b)((function(t){return{state:t}}),(function(t){return{action_ADD:function(e,a){t(x.add(e,a))},action_ALERT:function(e){t(x.alert(e))}}}))(N),w=function(t,e){var a=e.id,n={type:"DEL",payload:{contacts:[],filter:[]}};if(t.filter.length){var c=0;t.filter.forEach((function(t,e){t.id===a&&(c=e)}));var r=Object(l.a)(t.filter);r.splice(c,1),n.payload.filter=Object(l.a)(r)}var o=0;t.contacts.forEach((function(t,e){t.id===a&&(o=e)}));var s=Object(l.a)(t.contacts);return s.splice(o,1),n.payload.contacts=Object(l.a)(s),n},_=a(47),E=(a(39),function(t){Object(f.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(j.a)(this,a);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={},t.deleteContact=function(e){var a=e.target.dataset.id;t.props.action_DEL(t.props.state,{id:a})},t.contactList=function(){return(t.props.state.filter.length?t.props.state.filter:t.props.state.contacts).map((function(e,a){return Object(n.jsx)(O.a,{timeout:250,classNames:"contact-show-list-item",children:Object(n.jsxs)("li",{className:"contact-show-list-item",children:[Object(n.jsxs)("p",{className:"contact-show-list-text",children:[Object(n.jsx)("span",{children:e.name}),Object(n.jsx)("span",{children:e.number})]}),Object(n.jsx)("button",{"data-id":e.id,onClick:t.deleteContact,children:"delete"})]},e.id)},a)}))},t}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(){this.contactList()}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"contact-show",children:[this.props.children,Object(n.jsx)(_.a,{component:"ul",className:".contact-show-list",children:this.contactList()})]})}}]),a}(c.Component)),D=Object(s.b)((function(t){return{state:t}}),(function(t){return{action_DEL:function(e,a){t(w(e,a))}}}))(E),k=a(22),T=a.n(k),S=a(24),R=function(t,e){var a=e.name,n=[];return a?t.contacts.forEach((function(t){t.name.toLowerCase().includes(a.toLowerCase())&&n.push(t)})):n=[],{type:"FILTER",payload:{filter:n}}},F=(a(41),function(t){Object(f.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(j.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={value:""},t.handleChange=function(){var e=Object(S.a)(T.a.mark((function e(a){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setState((function(t){return{value:a.target.value}}));case 2:t.props.action_FILTER(t.props.state,{name:t.state.value});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"filter",children:[Object(n.jsx)("label",{htmlFor:"filter",children:"Filter"}),Object(n.jsx)("input",{id:"filter",type:"text",name:"filter",value:this.state.value,onChange:this.handleChange})]})}}]),a}(c.Component)),I=Object(s.b)((function(t){return{state:t}}),(function(t){return{action_FILTER:function(e,a){t(R(e,a))}}}))(F),M=(a(42),function(t){Object(f.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(j.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).delayToCloseAlert=null,t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){if(localStorage.getItem("contacts")){var t=Object(l.a)(JSON.parse(localStorage.getItem("contacts")));this.props.action_LOCAL_STORAGE(t)}}},{key:"componentDidUpdate",value:function(){localStorage.setItem("contacts",JSON.stringify(this.props.state.contacts))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"phonebook",children:[Object(n.jsx)(O.a,{in:this.props.state.isAlert,classNames:"alert",timeout:250,unmountOnExit:!0,children:Object(n.jsx)(v,{text:this.props.state.alertMessage})}),Object(n.jsx)(O.a,{in:!0,appear:!0,classNames:"header",timeout:500,unmountOnExit:!0,children:Object(n.jsx)(y,{})}),Object(n.jsx)(L,{}),Object(n.jsx)(D,{children:Object(n.jsx)(O.a,{in:this.props.state.contacts.length>1,classNames:"filter",timeout:250,unmountOnExit:!0,children:Object(n.jsx)(I,{})})})]})}}]),a}(c.Component)),J=Object(s.b)((function(t){return{state:t}}),(function(t){return{action_LOCAL_STORAGE:function(e){t(m.localStorage(e))}}}))(M);o.a.render(Object(n.jsx)(s.a,{store:p,children:Object(n.jsx)(J,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.07f918c4.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,n){t.exports=n(17)},17:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(3),s=n.n(o),c=n(8),u=n(4),l=n(5),m=n(10),r=n(6),b=n(1),h=n(9),p=n(7),f=n.n(p),v=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(m.a)(this,Object(r.a)(e).call(this,t))).state={item:"",items:[]},n.onChange=n.onChange.bind(Object(b.a)(n)),n.onSubmit=n.onSubmit.bind(Object(b.a)(n)),n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"onChange",value:function(t){this.setState({item:t.target.value})}},{key:"onSubmit",value:function(t){var e=this;t.preventDefault(),this.state.item&&this.setState({items:[].concat(Object(c.a)(this.state.items),[this.state.item]),item:""},function(){console.log("Callback"),console.log(e.state.items)})}},{key:"onDelete",value:function(t,e){var n=this.state.items;n.splice(t,1),this.setState({items:n})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",null,i.a.createElement("h1",null,"Todo List"),i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement("input",{type:"text",onChange:this.onChange,value:this.state.item}),i.a.createElement("button",{className:f.a.button},"Submit")),i.a.createElement("ul",null,this.state.items.map(function(e,n){return i.a.createElement("li",{key:n,onClick:t.onDelete.bind(t,n)},e)})))}}]),e}(i.a.Component);s.a.render(i.a.createElement(v,{name:"Hakim"}),document.getElementById("root"))},7:function(t,e,n){t.exports={button:"App_button__1mXHR"}}},[[11,1,2]]]);
//# sourceMappingURL=main.9c2215bd.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(60),i=a.n(l),c=a(4),s=a(6),o=a(5),u=a(7),m=a(11),d={background:"purple",minHeight:"100%"};var h=function(){return r.a.createElement("div",{class:"p-3",style:d},r.a.createElement(m.b,{to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link"},"Overview"),r.a.createElement(m.b,{to:"/liquidassets",className:"/liquidassets"===window.location.pathname?"nav-link active":"nav-link"},"Liquid Assets"),r.a.createElement(m.b,{to:"/frozenassets",className:"/frozenassets"===window.location.pathname?"nav-link active":"nav-link"},"Frozen Assets"),r.a.createElement(m.b,{to:"/liabilities",className:"/liabilities"===window.location.pathname?"nav-link active":"nav-link"},"Liabilities"))},b=a(15),p=a(8),v=(n.Component,function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={allUserEntries:[]},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.data.entry_date),r.a.createElement("td",null,this.props.data.amount),r.a.createElement("td",null,this.props.data.source_uuid),r.a.createElement("td",null,this.props.data.comments))}}]),t}(n.Component)),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={allUserEntries:[]},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(){this.grabAllUserEntries()}},{key:"componentWillMount",value:function(){this.grabAllUserEntries()}},{key:"grabAllUserEntries",value:function(){var e=this,t=localStorage.getItem("activeUserUUID"),a=localStorage.getItem("activeSourceUUID"),n="/api/sourcedetail/".concat(t,"/").concat(a);fetch(n).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({allUserEntries:t})})}},{key:"render",value:function(){var e=this.state.allUserEntries.map(function(e){return r.a.createElement(v,{data:e})});return r.a.createElement("div",{className:"animated bounceInUp"},r.a.createElement("h3",null,"Source Detail"),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Source UUID"),r.a.createElement("th",null,"Comments")),e))}}]),t}(n.Component),f=a(63),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).handleClick=function(){localStorage.setItem("activeUserUUID",a.state.loggedInUser),localStorage.setItem("activeSourceUUID",a.state.sourceUUID)},a.state={loggedInUser:"HU5Caw6T9zcdgpxK82ly8CVrAkk1",sourceUUID:a.props.data.uuid},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6 col-sm-12"},r.a.createElement(m.b,{to:"/sourcedetail"},r.a.createElement("div",{className:"card",onClick:this.handleClick},r.a.createElement("div",{className:"card-header"},this.props.data.source_name),r.a.createElement("div",{className:"card-body"},r.a.createElement(f.a,{data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"Amount",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40,10,15,20,70,75]}]},height:500,width:500})))))}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={allUserEntries:[]},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(){this.grabAllUserEntries()}},{key:"componentWillMount",value:function(){this.grabAllUserEntries()}},{key:"grabAllUserEntries",value:function(){var e=this;fetch("/api/liquidassets/HU5Caw6T9zcdgpxK82ly8CVrAkk1").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({allUserEntries:t})})}},{key:"render",value:function(){var e=this.state.allUserEntries.map(function(e,t){return r.a.createElement(g,{key:t,data:e})});return r.a.createElement("div",{className:"animated bounceInUp"},r.a.createElement("h3",null,"Liquid Assets"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},e)))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={allUserEntries:[]},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(){this.grabAllUserEntries()}},{key:"componentWillMount",value:function(){this.grabAllUserEntries()}},{key:"grabAllUserEntries",value:function(){var e=this;fetch("/api/frozenassets/HU5Caw6T9zcdgpxK82ly8CVrAkk1").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({allUserEntries:t})})}},{key:"render",value:function(){var e=this.state.allUserEntries.map(function(e){return r.a.createElement(g,{data:e})});return r.a.createElement("div",{className:"animated bounceInUp"},r.a.createElement("h3",null,"Frozen Assets"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},e)))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={allUserEntries:[]},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(){this.grabAllUserEntries()}},{key:"componentWillMount",value:function(){this.grabAllUserEntries()}},{key:"grabAllUserEntries",value:function(){var e=this;fetch("/api/liabilities/HU5Caw6T9zcdgpxK82ly8CVrAkk1").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({allUserEntries:t})})}},{key:"render",value:function(){var e=this.state.allUserEntries.map(function(e){return r.a.createElement(g,{data:e})});return r.a.createElement("div",{className:"animated bounceInUp"},r.a.createElement("h3",null,"Liabilities"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},e)))}}]),t}(n.Component);var O=function(){return r.a.createElement("div",{className:"p-3"},r.a.createElement(b.a,{exact:!0,path:"/"}),r.a.createElement(b.a,{exact:!0,path:"/liquidassets",component:U}),r.a.createElement(b.a,{exact:!0,path:"/frozenassets",component:k}),r.a.createElement(b.a,{exact:!0,path:"/liabilities",component:y}),r.a.createElement(b.a,{exact:!0,path:"/sourcedetail",component:E}))},j={padding:"0px"};var w=function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"container-fluid full-height",style:j},r.a.createElement("div",{className:"row full-height"},r.a.createElement("div",{className:"col-3"},r.a.createElement(h,null)),r.a.createElement("div",{className:"col-9"},r.a.createElement(O,null)))))},A=a(65),C=a(41),N=(a(169),{apiKey:"AIzaSyCI_SxzntQv8nO8JNxpYUOOakZCwIAmBXk",authDomain:"networthy-36c14.firebaseapp.com",databaseURL:"https://networthy-36c14.firebaseio.com",projectId:"networthy-36c14",storageBucket:"",messagingSenderId:"1063101103669",appId:"1:1063101103669:web:df1a9e71bbbe2eec223b7c"}),I=C.initializeApp(N).auth(),S={googleProvider:new C.auth.GoogleAuthProvider},D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).render=function(){var e=a.props,t=e.user,n=e.signOut,l=e.signInWithGoogle;return t&&(console.log(t.uid),localStorage.setItem("activeUserUUID",t.uid)),r.a.createElement("div",{class:"full-height"},t?r.a.createElement("div",{class:"full-height"},r.a.createElement("nav",{class:"navbar navbar-light bg-secondary text-light"},r.a.createElement("span",{class:"navbar-brand mb-0 h1 text-light"},"Networthy"),r.a.createElement("button",{className:"btn btn-primary",onClick:n},"Sign out")),r.a.createElement(w,null)):r.a.createElement("div",{class:"full-height"},r.a.createElement("nav",{class:"navbar navbar-light bg-secondary text-light"},r.a.createElement("span",{class:"navbar-brand mb-0 h1 text-light"},"Navbar"),r.a.createElement("button",{className:"btn btn-primary",onClick:l},"Sign in with Google"))))},a}return Object(u.a)(t,e),t}(n.Component),x=Object(A.a)({providers:S,firebaseAppAuth:I})(D);i.a.render(r.a.createElement(x,null),document.getElementById("root"))},66:function(e,t,a){e.exports=a(171)}},[[66,1,2]]]);
//# sourceMappingURL=main.50b0b67a.chunk.js.map
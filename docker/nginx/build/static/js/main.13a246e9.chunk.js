(this.webpackJsonpwebb=this.webpackJsonpwebb||[]).push([[0],{34:function(e,t,n){e.exports=n(50)},43:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function c(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=n(20),i=(n(43),n(5)),u=n(4),m=n(7),h=n(6),d=n(8),p=n(21),g=n(33),f=n(2),b=n(17),v=n(29),E=n(30),O="USERS_LOGIN_REQUEST",j="USERS_LOGIN_SUCCESS",w="USERS_LOGIN_FAILURE",y="USERS_LOGOUT",k="USERS_GETALL_REQUEST",S="USERS_GETALL_SUCCESS",C="USERS_GETALL_FAILURE",N=JSON.parse(localStorage.getItem("user")),U=N?{loggedIn:!0,user:N}:{};var R=Object(b.c)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{loggingIn:!0,user:t.user};case j:return{loggedIn:!0,user:t.user};case w:case y:return{};default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return{loading:!0};case S:return{users:t.users};case C:return{error:t.error};default:return e}}}),L=Object(E.createLogger)(),I=Object(b.d)(R,Object(b.a)(v.a,L)),A=n(9),P=Object(A.a)(),T=n(31),_=n.n(T),x=n(12),D="http://localhost:8080";var J={login:function(e,t){var n={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({username:e,password:t})};return fetch("".concat(D,"/users/login"),n).then((function(e){if(401===e.status)throw Error("Request was rejected with status401");return e.json()})).then((function(e){return localStorage.setItem("user",JSON.stringify(e)),e}))},register:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"internal",a={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({username:e,password:t,role:n})};return fetch("".concat(D,"/users/register"),a).then((function(e){if(!e.ok)throw Error("Request was rejected with status"+e.status)}))},logout:function(){localStorage.removeItem("user")},getAll:function(){var e={method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json","x-auth-token":JSON.parse(localStorage.getItem("user")).token}};return fetch("".concat(D,"/users/"),e).then((function(e){if(!e.ok)throw Error("Request was rejected with status"+e.status);return e.json()}))},deleteUser:function(e){var t=JSON.parse(localStorage.getItem("user")).token;console.log("delet=>> "+e);var n={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","x-auth-token":t}};return fetch("".concat(D,"/users/delete/")+e,n).then((function(e){if(!e.ok)throw Error("Request was rejected with status"+e.status)}))}},G={login:function(e,t){return function(n){n({type:O,user:{username:e}}),J.login(e,t).then((function(e){n(function(e){return{type:j,user:e}}(e))})).catch((function(e){console.log("err login actions"),n(function(e){return{type:w,error:e}}(e))}))}},logout:function(){return J.logout(),{type:y}},getAll:function(){return function(e){e({type:k}),J.getAll().then((function(t){return e(function(e){return{type:S,users:e}}(t))}),(function(t){return e(function(e){return{type:C,error:e}}(t))}))}},register:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"internal";return function(a){J.register(e,t,n).then((function(e){})).catch((function(e){console.log("error at register action"+e)}))}},deleteUser:function(e){return function(t){J.deleteUser(e).then((function(e){})).catch((function(e){console.log("error at delete user action"+e)}))}}};var W=n(16),q=n.n(W),H=function(e){function t(e){var n;return Object(i.a)(this,t),n=Object(m.a)(this,Object(h.a)(t).call(this,e)),q()(Object(x.a)(n)),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"onLogout",value:function(e){e.preventDefault(),this.props.dispatch(G.logout())}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home"),r.a.createElement("button",{type:"submit",className:"btn-dark btn-lg btn-block",onClick:this.onLogout}," Log out"))}}]),t}(a.Component);var V=Object(o.b)((function(e){return{dispatch:e.dispatch}}))(H),F=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={username:"",password:"",toRegister:!1},q()(Object(x.a)(n)),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"onUserNameChange",value:function(e){this.setState({username:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"onLogin",value:function(e){e.preventDefault();var t=this.state,n=t.username,a=t.password;this.props.dispatch(G.login(n,a))}},{key:"render",value:function(){var e=this;if(this.props.loggedIn)return r.a.createElement(f.a,{push:!0,to:"/"});if(this.state.toRegister)return r.a.createElement(f.a,{push:!0,to:"/register"});var t=this.state,n=t.username,a=t.password;return r.a.createElement("div",null,r.a.createElement("div",{id:"login"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center"},"Login to your account"),r.a.createElement("div",{className:"login-form-container"},r.a.createElement("hr",null),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter username",value:n,onChange:this.onUserNameChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:a,onChange:this.onPasswordChange})),r.a.createElement("button",{type:"submit",className:"btn-dark btn-lg btn-block",onClick:this.onLogin},"Login"),r.a.createElement("button",{type:"submit",className:"btn-dark btn-lg btn-block",onClick:function(){return e.setState({toRegister:!0})}},"Register"))))))}}]),t}(a.Component);var B=Object(o.b)((function(e){return{loggedIn:e.authentication.loggedIn}}))(F),Q=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={username:"",password:"",toLogin:!1},q()(Object(x.a)(n)),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"onUsernameChange",value:function(e){this.setState({username:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"onRegister",value:function(e){e.preventDefault();var t=this.state,n=t.username,a=t.password;this.props.dispatch(G.register(n,a)),this.setState({toLogin:!0})}},{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return this.state.toLogin?r.a.createElement(f.a,{push:!0,to:"/login"}):r.a.createElement("div",{id:"login"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center"},"Register"),r.a.createElement("div",{className:"login-form-container"},r.a.createElement("hr",null),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter username",value:t,onChange:this.onUsernameChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:n,onChange:this.onPasswordChange})),r.a.createElement("button",{type:"submit",className:"btn-dark btn-lg btn-block",onClick:this.onRegister},"Register")))))}}]),t}(a.Component);var z=Object(o.b)((function(e){return{loggedIn:e.authentication.loggedIn}}))(Q),M=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value;n.props.onSelectChange(t)},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.arrayOfData.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.username)}));return r.a.createElement("select",{className:"browser-default custom-select",onChange:this.handleChange},r.a.createElement("option",null,"Select Item"),e)}}]),t}(a.Component),$=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleSelectChange=function(e){n.setState({selectedValue:e,userId:e})},n.onDelete=function(e){n.state.userId&&n.props.dispatch(G.deleteUser(n.state.selectedValue))},n.state={selectedValue:"Nothing selected",userId:null,username:"",password:""},q()(Object(x.a)(n)),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(G.getAll())}}]),Object(u.a)(t,[{key:"onUsernameChange",value:function(e){this.setState({username:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"onRegister",value:function(e){e.preventDefault();var t=this.state,n=t.username,a=t.password;this.props.dispatch(G.register(n,a,"external"))}},{key:"onLogout",value:function(e){e.preventDefault(),this.props.dispatch(G.logout())}},{key:"render",value:function(){var e=this.props.users?this.props.users.users:[],t=this.state,n=t.username,a=t.password;return r.a.createElement("div",null,r.a.createElement("h1",null,"UserPanelContainer"),r.a.createElement("p",{style:{fontSize:"15"}},r.a.createElement(M,{arrayOfData:e,onSelectChange:this.handleSelectChange})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,"Selected value: ",this.state.selectedValue)),r.a.createElement("button",{type:"submit",className:"btn-dark btn-lg btn-block",onClick:this.onDelete}," Delete Selected User"),r.a.createElement("div",{id:"login"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center"},"Register External "),r.a.createElement("div",{className:"login-form-container"},r.a.createElement("hr",null),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter username",value:n,onChange:this.onUsernameChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:a,onChange:this.onPasswordChange})),r.a.createElement("button",{type:"submit",className:"btn-dark btn-lg btn-block",onClick:this.onRegister},"Register"))))),r.a.createElement("button",{type:"submit",className:"btn-dark btn-lg btn-block",onClick:this.onLogout}," Log out"))}}]),t}(a.Component);var K=Object(o.b)((function(e){return{users:e.users.users}}))($),X=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Not Found"))}}]),t}(a.Component),Y=function(e){var t=e.component,n=(e.user,Object(p.a)(e,["component","user"]));return r.a.createElement(f.b,Object.assign({},n,{render:function(e){return r.a.createElement("div",null,r.a.createElement(t,e))}}))},Z=function(e){var t=e.component,n=Object(p.a)(e,["component"]);return r.a.createElement(f.b,Object.assign({},n,{render:function(e){return localStorage.getItem("user")?r.a.createElement(t,e):r.a.createElement(f.a,{to:"/login"})}}))},ee=function(e){var t=e.component,n=Object(p.a)(e,["component"]);return r.a.createElement(f.b,Object.assign({},n,{render:function(e){return n=JSON.parse(localStorage.getItem("user")).token,"internal"===_()(n).role?r.a.createElement(t,e):r.a.createElement(f.a,{to:"/"});var n}}))},te=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,{history:P},r.a.createElement("div",null,r.a.createElement(f.d,null,r.a.createElement(Z,{path:"/",exact:!0,component:V}),r.a.createElement(Y,{path:"/login",exact:!0,component:B}),r.a.createElement(Y,{path:"/register",exact:!0,component:z}),r.a.createElement(ee,{path:"/internal",exact:!0,component:K}),r.a.createElement(Y,{component:X}))))}}]),t}(a.Component);n(48),n(49);Object(l.render)(r.a.createElement(o.a,{store:I},r.a.createElement(te,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");s?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):c(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):c(t,e)}))}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.13a246e9.chunk.js.map
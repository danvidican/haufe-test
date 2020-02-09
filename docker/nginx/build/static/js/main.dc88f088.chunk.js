(this.webpackJsonpwebb=this.webpackJsonpwebb||[]).push([[0],{34:function(e,t,n){e.exports=n(50)},43:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var i=n(20),l=(n(43),n(7)),u=n(5),m=n(9),h=n(8),g=n(10),p=n(21),d=n(33),f=n(2),b=n(17),v=n(29),E=n(30),O="USERS_LOGIN_REQUEST",j="USERS_LOGIN_SUCCESS",w="USERS_LOGIN_FAILURE",y="USERS_LOGOUT",S="USERS_GETALL_REQUEST",k="USERS_GETALL_SUCCESS",C="USERS_GETALL_FAILURE",N=JSON.parse(localStorage.getItem("user")),L=N?{loggedIn:!0,user:N}:{};var R=Object(b.c)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{loggingIn:!0,user:t.user};case j:return{loggedIn:!0,user:t.user};case w:case y:return{};default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{loading:!0};case k:return{items:t.users};case C:return{error:t.error};default:return e}}}),U=Object(E.createLogger)(),I=Object(b.d)(R,Object(b.a)(v.a,U)),A=n(4),T=Object(A.a)(),P=n(31),_=n.n(P),x=n(12),G="http://localhost:8080";var J={login:function(e,t){var n={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({username:e,password:t})};return fetch("".concat(G,"/users/login"),n).then((function(e){if(401===e.status)throw Error("Request was rejected with status401");return e.json()})).then((function(e){return localStorage.setItem("user",JSON.stringify(e)),e}))},register:function(e,t){var n={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({username:e,password:t})};return fetch("".concat(G,"/users/register"),n).then((function(e){if(!e.ok)throw Error("Request was rejected with status"+e.status)}))},logout:function(){localStorage.removeItem("user")},getAll:function(){var e={method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json","x-auth-token":JSON.parse(localStorage.getItem("user")).token}};return fetch("".concat(G,"/users/"),e).then((function(e){if(!e.ok)throw Error("Request was rejected with status"+e.status);return e.json()}))}},W={login:function(e,t){return function(n){n({type:O,user:{username:e}}),J.login(e,t).then((function(e){n(function(e){return{type:j,user:e}}(e))})).catch((function(e){console.log("err login actions"),n(function(e){return{type:w,error:e}}(e))}))}},logout:function(){return J.logout(),{type:y}},getAll:function(){return function(e){e({type:S}),J.getAll().then((function(t){return e(function(e){return{type:k,users:e}}(t))}),(function(t){return e(function(e){return{type:C,error:e}}(t))}))}},register:function(e,t){return function(n){J.register(e,t).then((function(e){})).catch((function(e){console.log("error at register action"+e)}))}}};var D=n(16),q=n.n(D),F=function(e){function t(e){var n;return Object(l.a)(this,t),n=Object(m.a)(this,Object(h.a)(t).call(this,e)),q()(Object(x.a)(n)),n}return Object(g.a)(t,e),Object(u.a)(t,[{key:"onLogout",value:function(e){e.preventDefault(),this.props.dispatch(W.logout())}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home"),r.a.createElement("button",{type:"submit",className:"btn-dark btn-lg btn-block",onClick:this.onLogout}," Log out"))}}]),t}(a.Component);var H=Object(o.b)((function(e){return{dispatch:e.dispatch}}))(F),B=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={username:"",password:"",toRegister:!1},q()(Object(x.a)(n)),n}return Object(g.a)(t,e),Object(u.a)(t,[{key:"onUserNameChange",value:function(e){this.setState({username:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"onLogin",value:function(e){e.preventDefault();var t=this.state,n=t.username,a=t.password;this.props.dispatch(W.login(n,a))}},{key:"render",value:function(){var e=this;if(this.props.loggedIn)return r.a.createElement(f.a,{push:!0,to:"/"});if(this.state.toRegister)return r.a.createElement(f.a,{push:!0,to:"/register"});var t=this.state,n=t.username,a=t.password;return r.a.createElement("div",null,r.a.createElement("div",{id:"login"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center"},"Login to your account"),r.a.createElement("div",{className:"login-form-container"},r.a.createElement("hr",null),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter username",value:n,onChange:this.onUserNameChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:a,onChange:this.onPasswordChange})),r.a.createElement("button",{type:"submit",className:"btn-dark btn-lg btn-block",onClick:this.onLogin},"Login"),r.a.createElement("button",{type:"submit",className:"btn-dark btn-lg btn-block",onClick:function(){return e.setState({toRegister:!0})}},"Register"))))))}}]),t}(a.Component);var Q=Object(o.b)((function(e){return{loggedIn:e.authentication.loggedIn}}))(B),M=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={username:"",password:"",toLogin:!1},q()(Object(x.a)(n)),n}return Object(g.a)(t,e),Object(u.a)(t,[{key:"onUsernameChange",value:function(e){this.setState({username:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"onRegister",value:function(e){e.preventDefault();var t=this.state,n=t.username,a=t.password;this.props.dispatch(W.register(n,a)),this.setState({toLogin:!0})}},{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return this.state.toLogin?r.a.createElement(f.a,{push:!0,to:"/login"}):r.a.createElement("div",{id:"login"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center"},"Register"),r.a.createElement("div",{className:"login-form-container"},r.a.createElement("hr",null),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter email",value:t,onChange:this.onUsernameChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:n,onChange:this.onPasswordChange})),r.a.createElement("button",{type:"submit",className:"btn-dark btn-lg btn-block",onClick:this.onRegister},"Register")))))}}]),t}(a.Component);var $=Object(o.b)((function(e){return{loggedIn:e.authentication.loggedIn}}))(M),z=function(e){function t(e){var n;return Object(l.a)(this,t),n=Object(m.a)(this,Object(h.a)(t).call(this,e)),q()(Object(x.a)(n)),n}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(W.getAll())}}]),Object(u.a)(t,[{key:"render",value:function(){return console.log("users =>> "+this.props.users),r.a.createElement("div",null,r.a.createElement("h1",null,"UserPanelContainer"))}}]),t}(a.Component);var K=Object(o.b)((function(e){var t=e.users;return{user:e.authentication.user,users:t}}))(z),V=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Not Found"))}}]),t}(a.Component),X=function(e){var t=e.component,n=(e.user,Object(p.a)(e,["component","user"]));return r.a.createElement(f.b,Object.assign({},n,{render:function(e){return r.a.createElement("div",null,r.a.createElement(t,e))}}))},Y=function(e){var t=e.component,n=Object(p.a)(e,["component"]);return r.a.createElement(f.b,Object.assign({},n,{render:function(e){return localStorage.getItem("user")?r.a.createElement(t,e):r.a.createElement(f.a,{to:"/login"})}}))},Z=function(e){var t=e.component,n=Object(p.a)(e,["component"]);return r.a.createElement(f.b,Object.assign({},n,{render:function(e){return n=JSON.parse(localStorage.getItem("user")).token,"internal"===_()(n).role?r.a.createElement(t,e):r.a.createElement(f.a,{to:"/"});var n}}))},ee=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{history:T},r.a.createElement("div",null,r.a.createElement(f.d,null,r.a.createElement(Y,{path:"/",exact:!0,component:H}),r.a.createElement(X,{path:"/login",exact:!0,component:Q}),r.a.createElement(X,{path:"/register",exact:!0,component:$}),r.a.createElement(Z,{path:"/internal",exact:!0,component:K}),r.a.createElement(X,{component:V}))))}}]),t}(a.Component);n(48),n(49);Object(i.render)(r.a.createElement(o.a,{store:I},r.a.createElement(ee,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");c?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):s(t,e)}))}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.dc88f088.chunk.js.map
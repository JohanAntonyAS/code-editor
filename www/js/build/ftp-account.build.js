(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{532:function(t,e,n){},548:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),s=n(62),i=n.n(s),o=n(3),c=n(70),p='{{#accounts}}\n<div class="list-item" action="ftp-account" path="{{path}}" username="{{username}}" password="{{password}}"\n  hostname="{{hostname}}" port="{{port}}" id="{{id}}">\n  <span class="icon person"></span>\n  <div class="container">\n    <div class="text">\n      <span>{{username}}@{{hostname}}</span>\n    </div>\n  </div>\n  <span class="icon edit" action="edit"></span>\n  <span class="icon clearclose" action="remove"></span>\n</div>\n{{/accounts}}\n<div class="list-item" action="add-account">\n  <span class="icon add"></span>\n  <div class="container">\n    <div class="text">\n      <span>Add FTP account</span>\n    </div>\n  </div>\n</div>',d=(n(532),n(198)),u=n(5),l=n(457),m=n(187);e.default=function(){var t=JSON.parse(localStorage.ftpaccounts||"[]"),e=r()("span",{className:"icon search",attr:{action:"search"}}),n=Object(c.a)("FTP Accounts"),a=o.a.credentials,s=r.a.parse(i.a.render('<div class="main list" id="ftp-accounts">{{{list}}}</div>',{list:i.a.render(p,{accounts:h()})}));function v(e,n,r,c,d,l){(function(t,e,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:21;return u.a.multiPrompt("FTP login",[{id:"username",placeholder:"username (optional)",type:"text",value:t},{id:"password",placeholder:"password (optional)",type:"password",value:e},{id:"hostname",placeholder:"hostname",type:"text",required:!0,value:n},{id:"port",placeholder:"port (optional)",type:"number",value:r}])})(e,n,r,c,d,l).then((function(e){var n=e.username,r=e.password,c=e.hostname,d=e.port,u=e.path;l&&f(l),Array.isArray(t)&&t.push({username:a.encrypt(n),password:a.encrypt(r),hostname:a.encrypt(c),port:a.encrypt(d),path:u&&a.encrypt(u),id:l||o.a.uuid()}),localStorage.setItem("ftpaccounts",JSON.stringify(t)),s.innerHTML=i.a.render(p,{accounts:h()})}))}function h(){var e=[];return Array.isArray(t)&&t.map((function(t){var n=t.username,r=t.password,s=t.hostname,i=t.port,o=t.path,c=t.id;return e.push({username:a.decrypt(n),password:a.decrypt(r),hostname:a.decrypt(s),path:o&&a.decrypt(o),port:a.decrypt(i),id:c}),t})),e}function f(e){Array.isArray(t)&&(t=t.filter((function(t){return t.id!==e}))),s.innerHTML=i.a.render(p,{accounts:h()}),localStorage.setItem("ftpaccounts",JSON.stringify(t))}s.addEventListener("click",(function(t){var e=t.target;if(!(e instanceof HTMLElement))return;var n=e.getAttribute("action");if(!n)return;if("add-account"===n)v();else if("remove"===n){var a=e.parentElement;if(!a)return;var r=a.id;if(!r)return;f(r)}else if("ftp-account"===n||"edit"===n){"edit"===n&&(e=e.parentElement);var s=e.getAttribute("username"),i=e.getAttribute("password"),o=e.getAttribute("hostname"),c=e.getAttribute("port"),p=e.getAttribute("path"),d=e.id;if("edit"===n)v(s,i,o,p,c,d);else{var u=Object(l.a)(s,i,o,c,p);Object(m.a)(u.origin,{saveState:!1,reloadOnResume:!1}),actionStack.pop()}}})),n.querySelector("header").append(e),e.onclick=function(){Object(d.a)(n.querySelector(".list"))},n.append(s),app.appendChild(n),actionStack.push({id:"repos",action:n.hide}),n.onhide=function(){actionStack.remove("repos")}}}}]);
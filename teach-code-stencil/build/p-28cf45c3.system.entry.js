var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{c(r.next(t))}catch(e){o(e)}}function s(t){try{c(r["throw"](t))}catch(e){o(e)}}function c(t){t.done?n(t.value):i(t.value).then(a,s)}c((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return c([t,e])}}function c(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;i=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(s){a=[6,s];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-8ce83298.system.js","./p-755863c2.system.js","./p-2d5d376b.system.js","./p-f1645a56.system.js"],(function(t){"use strict";var e,n,r,i,o,a,s,c,u,l,f,h,p,v,d,y,g,m,b,w,O,T;return{setters:[function(t){e=t.r;n=t.h;r=t.g;i=t.c},function(t){o=t.A},function(t){a=t.m;s=t.a;c=t.s;u=t.b;l=t.c;f=t.d;h=t.h;p=t.e;v=t.f;d=t.g;y=t.l},function(t){g=t.s;m=t.a;b=t.b;w=t.g;O=t.i;T=t.c}],execute:function(){var x=function(){function t(){this.init()}t.getInstance=function(){if(!t.instance){t.instance=new t}return t.instance};t.prototype.init=function(){if(!window){return}var t=window;var e=t.enviroment;this.m=new Map(Object.entries(e.config))};t.prototype.get=function(t,e){var n=this.m.get(t);return n!==undefined?n:e};return t}();var P="header{background:#5851ff;color:white;height:56px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26);box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26)}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}";var k=t("app_root",function(){function t(t){e(this,t)}t.prototype.componentWillLoad=function(){this.url=x.getInstance().get("ROOT_URL")};t.prototype.render=function(){return n("div",null,n("header",null,n("h1",null,"Stencil App Starter"),n("h2",null,this.url)),n("main",null,n("stencil-router",null,n("stencil-route-switch",{scrollTopOffset:0},n("stencil-route",{url:"/",component:"app-home",exact:true}),n("stencil-route",{url:"/profile/:name",component:"app-profile"})))))};return t}());k.style=P;var _="stencil-route.inactive{display:none}";var L=t("stencil_route",function(){function t(t){e(this,t);this.group=null;this.match=null;this.componentProps={};this.exact=false;this.scrollOnNextRender=false;this.previousMatch=null}t.prototype.computeMatch=function(t){var e=this.group!=null||this.el.parentElement!=null&&this.el.parentElement.tagName.toLowerCase()==="stencil-route-switch";if(!t||e){return}this.previousMatch=this.match;return this.match=a(t.pathname,{path:this.url,exact:this.exact,strict:true})};t.prototype.loadCompleted=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){t={};if(this.history&&this.history.location.hash){t={scrollToId:this.history.location.hash.substr(1)}}else if(this.scrollTopOffset){t={scrollTopOffset:this.scrollTopOffset}}if(typeof this.componentUpdated==="function"){this.componentUpdated(t)}else if(this.match&&!s(this.match,this.previousMatch)&&this.routeViewsUpdated){this.routeViewsUpdated(t)}return[2]}))}))};t.prototype.componentDidUpdate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.loadCompleted()];case 1:t.sent();return[2]}}))}))};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.loadCompleted()];case 1:t.sent();return[2]}}))}))};t.prototype.render=function(){if(!this.match||!this.history){return null}var t=Object.assign({},this.componentProps,{history:this.history,match:this.match});if(this.routeRender){return this.routeRender(Object.assign({},t,{component:this.component}))}if(this.component){var e=this.component;return n(e,Object.assign({},t))}};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:true,configurable:true});return t}());o.injectProps(L,["location","history","historyType","routeViewsUpdated"]);L.style=_;var S=function(){return((Math.random()*1e17).toString().match(/.{4}/g)||[]).join("-")};var U=function(t,e,n){return a(t,{path:e,exact:n,strict:true})};var j=function(t){return t.tagName==="STENCIL-ROUTE"};var E=t("stencil_route_switch",function(){function t(t){e(this,t);this.group=S();this.subscribers=[];this.queue=i(this,"queue")}t.prototype.componentWillLoad=function(){if(this.location!=null){this.regenerateSubscribers(this.location)}};t.prototype.regenerateSubscribers=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n;var r=this;return __generator(this,(function(i){if(t==null){return[2]}e=-1;this.subscribers=Array.prototype.slice.call(this.el.children).filter(j).map((function(n,r){var i=U(t.pathname,n.url,n.exact);if(i&&e===-1){e=r}return{el:n,match:i}}));if(e===-1){return[2]}if(this.activeIndex===e){this.subscribers[e].el.match=this.subscribers[e].match;return[2]}this.activeIndex=e;n=this.subscribers[this.activeIndex];if(this.scrollTopOffset){n.el.scrollTopOffset=this.scrollTopOffset}n.el.group=this.group;n.el.match=n.match;n.el.componentUpdated=function(t){r.queue.write((function(){r.subscribers.forEach((function(t,e){t.el.componentUpdated=undefined;if(e===r.activeIndex){return t.el.style.display=""}if(r.scrollTopOffset){t.el.scrollTopOffset=r.scrollTopOffset}t.el.group=r.group;t.el.match=null;t.el.style.display="none"}))}));if(r.routeViewsUpdated){r.routeViewsUpdated(Object.assign({scrollTopOffset:r.scrollTopOffset},t))}};return[2]}))}))};t.prototype.render=function(){return n("slot",null)};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["regenerateSubscribers"]}},enumerable:true,configurable:true});return t}());o.injectProps(E,["location","routeViewsUpdated"]);var I=function(t){var e=[];for(var n=1;n<arguments.length;n++){e[n-1]=arguments[n]}if(!t){console.warn.apply(console,e)}};var R=function(){var t;var e=[];var n=function(e){I(t==null,"A history supports only one prompt at a time");t=e;return function(){if(t===e){t=null}}};var r=function(e,n,r,i){if(t!=null){var o=typeof t==="function"?t(e,n):t;if(typeof o==="string"){if(typeof r==="function"){r(o,i)}else{I(false,"A history needs a getUserConfirmation function in order to use a prompt message");i(true)}}else{i(o!==false)}}else{i(true)}};var i=function(t){var n=true;var r=function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}if(n){t.apply(void 0,e)}};e.push(r);return function(){n=false;e=e.filter((function(t){return t!==r}))}};var o=function(){var t=[];for(var n=0;n<arguments.length;n++){t[n]=arguments[n]}e.forEach((function(e){return e.apply(void 0,t)}))};return{setPrompt:n,confirmTransitionTo:r,appendListener:i,notifyListeners:o}};var A=function(t,e){if(e===void 0){e="scrollPositions"}var n=new Map;var r=function(e,r){n.set(e,r);if(g(t,"sessionStorage")){var i=[];n.forEach((function(t,e){i.push([e,t])}));t.sessionStorage.setItem("scrollPositions",JSON.stringify(i))}};var i=function(t){return n.get(t)};var o=function(t){return n.has(t)};var a=function(e){r(e,[t.scrollX,t.scrollY])};if(g(t,"sessionStorage")){var s=t.sessionStorage.getItem(e);n=s?new Map(JSON.parse(s)):n}if("scrollRestoration"in t.history){history.scrollRestoration="manual"}return{set:r,get:i,has:o,capture:a}};var C="popstate";var H="hashchange";var M=function(t,e){if(e===void 0){e={}}var n=false;var r=t.history;var i=t.location;var o=t.navigator;var a=m(t);var s=!b(o);var d=A(t);var y=e.forceRefresh!=null?e.forceRefresh:false;var g=e.getUserConfirmation!=null?e.getUserConfirmation:w;var T=e.keyLength!=null?e.keyLength:6;var x=e.basename?c(u(e.basename)):"";var P=function(){try{return t.history.state||{}}catch(e){return{}}};var k=function(t){t=t||{};var e=t.key,n=t.state;var r=i.pathname,o=i.search,a=i.hash;var s=r+o+a;I(!x||h(s,x),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+s+'" to begin with "'+x+'".');if(x){s=p(s,x)}return l(s,n,e||f(T))};var _=R();var L=function(t){d.capture(K.location.key);Object.assign(K,t);K.location.scrollPosition=d.get(K.location.key);K.length=r.length;_.notifyListeners(K.location,K.action)};var S=function(t){if(!O(o,t)){j(k(t.state))}};var U=function(){j(k(P()))};var j=function(t){if(n){n=false;L()}else{var e="POP";_.confirmTransitionTo(t,e,g,(function(n){if(n){L({action:e,location:t})}else{E(t)}}))}};var E=function(t){var e=K.location;var r=V.indexOf(e.key);var i=V.indexOf(t.key);if(r===-1){r=0}if(i===-1){i=0}var o=r-i;if(o){n=true;W(o)}};var M=k(P());var V=[M.key];var q=0;var N=false;var B=function(t){return x+v(t)};var Y=function(t,e){I(!(typeof t==="object"&&t.state!==undefined&&e!==undefined),"You should avoid providing a 2nd state argument to push when the 1st "+"argument is a location-like object that already has state; it is ignored");var n="PUSH";var o=l(t,e,f(T),K.location);_.confirmTransitionTo(o,n,g,(function(t){if(!t){return}var e=B(o);var s=o.key,c=o.state;if(a){r.pushState({key:s,state:c},"",e);if(y){i.href=e}else{var u=V.indexOf(K.location.key);var l=V.slice(0,u===-1?0:u+1);l.push(o.key);V=l;L({action:n,location:o})}}else{I(c===undefined,"Browser history cannot push state in browsers that do not support HTML5 history");i.href=e}}))};var D=function(t,e){I(!(typeof t==="object"&&t.state!==undefined&&e!==undefined),"You should avoid providing a 2nd state argument to replace when the 1st "+"argument is a location-like object that already has state; it is ignored");var n="REPLACE";var o=l(t,e,f(T),K.location);_.confirmTransitionTo(o,n,g,(function(t){if(!t){return}var e=B(o);var s=o.key,c=o.state;if(a){r.replaceState({key:s,state:c},"",e);if(y){i.replace(e)}else{var u=V.indexOf(K.location.key);if(u!==-1){V[u]=o.key}L({action:n,location:o})}}else{I(c===undefined,"Browser history cannot replace state in browsers that do not support HTML5 history");i.replace(e)}}))};var W=function(t){r.go(t)};var F=function(){return W(-1)};var J=function(){return W(1)};var z=function(e){q+=e;if(q===1){t.addEventListener(C,S);if(s){t.addEventListener(H,U)}}else if(q===0){t.removeEventListener(C,S);if(s){t.removeEventListener(H,U)}}};var G=function(t){if(t===void 0){t=""}var e=_.setPrompt(t);if(!N){z(1);N=true}return function(){if(N){N=false;z(-1)}return e()}};var X=function(t){var e=_.appendListener(t);z(1);return function(){z(-1);e()}};var K={length:r.length,action:"POP",location:M,createHref:B,push:Y,replace:D,go:W,goBack:F,goForward:J,block:G,listen:X,win:t};return K};var V="hashchange";var q={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+d(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:d,decodePath:u},slash:{encodePath:u,decodePath:u}};var N=function(t,e){if(e===void 0){e={}}var n=false;var r=null;var i=0;var o=false;var a=t.location;var s=t.history;var d=T(t.navigator);var g=e.keyLength!=null?e.keyLength:6;var m=e.getUserConfirmation,b=m===void 0?w:m,O=e.hashType,x=O===void 0?"slash":O;var P=e.basename?c(u(e.basename)):"";var k=q[x],_=k.encodePath,L=k.decodePath;var S=function(){var t=a.href;var e=t.indexOf("#");return e===-1?"":t.substring(e+1)};var U=function(t){return a.hash=t};var j=function(t){var e=a.href.indexOf("#");a.replace(a.href.slice(0,e>=0?e:0)+"#"+t)};var E=function(){var t=L(S());I(!P||h(t,P),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+t+'" to begin with "'+P+'".');if(P){t=p(t,P)}return l(t,undefined,f(g))};var A=R();var C=function(t){Object.assign(tt,t);tt.length=s.length;A.notifyListeners(tt.location,tt.action)};var H=function(){var t=S();var e=_(t);if(t!==e){j(e)}else{var i=E();var o=tt.location;if(!n&&y(o,i)){return}if(r===v(i)){return}r=null;M(i)}};var M=function(t){if(n){n=false;C()}else{var e="POP";A.confirmTransitionTo(t,e,b,(function(n){if(n){C({action:e,location:t})}else{N(t)}}))}};var N=function(t){var e=tt.location;var r=W.lastIndexOf(v(e));var i=W.lastIndexOf(v(t));if(r===-1){r=0}if(i===-1){i=0}var o=r-i;if(o){n=true;G(o)}};var B=S();var Y=_(B);if(B!==Y){j(Y)}var D=E();var W=[v(D)];var F=function(t){return"#"+_(P+v(t))};var J=function(t,e){I(e===undefined,"Hash history cannot push state; it is ignored");var n="PUSH";var i=l(t,undefined,f(g),tt.location);A.confirmTransitionTo(i,n,b,(function(t){if(!t){return}var e=v(i);var o=_(P+e);var a=S()!==o;if(a){r=e;U(o);var s=W.lastIndexOf(v(tt.location));var c=W.slice(0,s===-1?0:s+1);c.push(e);W=c;C({action:n,location:i})}else{I(false,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack");C()}}))};var z=function(t,e){I(e===undefined,"Hash history cannot replace state; it is ignored");var n="REPLACE";var i=l(t,undefined,f(g),tt.location);A.confirmTransitionTo(i,n,b,(function(t){if(!t){return}var e=v(i);var o=_(P+e);var a=S()!==o;if(a){r=e;j(o)}var s=W.indexOf(v(tt.location));if(s!==-1){W[s]=e}C({action:n,location:i})}))};var G=function(t){I(d,"Hash history go(n) causes a full page reload in this browser");s.go(t)};var X=function(){return G(-1)};var K=function(){return G(1)};var Q=function(t,e){i+=e;if(i===1){t.addEventListener(V,H)}else if(i===0){t.removeEventListener(V,H)}};var Z=function(e){if(e===void 0){e=""}var n=A.setPrompt(e);if(!o){Q(t,1);o=true}return function(){if(o){o=false;Q(t,-1)}return n()}};var $=function(e){var n=A.appendListener(e);Q(t,1);return function(){Q(t,-1);n()}};var tt={length:s.length,action:"POP",location:D,createHref:F,push:J,replace:z,go:G,goBack:X,goForward:K,block:Z,listen:$,win:t};return tt};var B=function(t,e){var n=t.pathname.indexOf(e)==0?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:n})};var Y={browser:M,hash:N};var D=t("stencil_router",function(){function t(t){var n=this;e(this,t);this.root="/";this.historyType="browser";this.titleSuffix="";this.routeViewsUpdated=function(t){if(t===void 0){t={}}if(n.history&&t.scrollToId&&n.historyType==="browser"){var e=n.history.win.document.getElementById(t.scrollToId);if(e){return e.scrollIntoView()}}n.scrollTo(t.scrollTopOffset||n.scrollTopOffset)};this.isServer=i(this,"isServer");this.queue=i(this,"queue")}t.prototype.componentWillLoad=function(){var t=this;this.history=Y[this.historyType](this.el.ownerDocument.defaultView);this.history.listen((function(e){e=B(e,t.root);t.location=e}));this.location=B(this.history.location,this.root)};t.prototype.scrollTo=function(t){var e=this.history;if(t==null||this.isServer||!e){return}if(e.action==="POP"&&Array.isArray(e.location.scrollPosition)){return this.queue.write((function(){if(e&&e.location&&Array.isArray(e.location.scrollPosition)){e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])}}))}return this.queue.write((function(){e.win.scrollTo(0,t)}))};t.prototype.render=function(){if(!this.location||!this.history){return}var t={historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated};return n(o.Provider,{state:t},n("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});return t}())}}}));
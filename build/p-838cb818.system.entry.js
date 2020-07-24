var __awaiter=this&&this.__awaiter||function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function a(t){try{c(r.next(t))}catch(e){i(e)}}function u(t){try{c(r["throw"](t))}catch(e){i(e)}}function c(t){t.done?n(t.value):o(t.value).then(a,u)}c((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return c([t,e])}}function c(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;o=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(a[0]===6&&n.label<i[1]){n.label=i[1];i=a;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(a);break}if(i[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(u){a=[6,u];o=0}finally{r=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-5bec77af.system.js"],(function(t){"use strict";var e,n,r;return{setters:[function(t){e=t.r;n=t.h;r=t.d}],execute:function(){var o=function(){function t(){}t.prototype.get=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,fetch(t).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.warn("Error at FetchJson:",t);return null}))]}))}))};return t}();var i=function(){function t(){}t.prototype.get=function(t){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(n){e=new window.DOMParser;return[2,fetch(t).then((function(t){return t.text()})).then((function(t){return e.parseFromString(t,"text/xml")})).then((function(t){return t}))]}))}))};return t}();var a=".app-profile{padding:10px}";var u=t("app_profile",function(){function t(t){e(this,t)}t.prototype.normalize=function(t){if(t){return t.substr(0,1).toUpperCase()+t.substr(1).toLowerCase()}return""};t.prototype.componentWillLoad=function(){this.fetchExample();this.fetchXmlExample()};t.prototype.fetchExample=function(){var t=this;setTimeout((function(){return __awaiter(t,void 0,void 0,(function(){var t,e;return __generator(this,(function(n){switch(n.label){case 0:t=new o;return[4,t.get("https://derldalfor100.github.io/teach-code-stencil/assets/json/example.json")];case 1:e=n.sent();console.log("example:",e);return[2]}}))}))}),0)};t.prototype.fetchXmlExample=function(){var t=this;setTimeout((function(){return __awaiter(t,void 0,void 0,(function(){var t,e;return __generator(this,(function(n){switch(n.label){case 0:t=new i;return[4,t.get("https://derldalfor100.github.io/teach-code-stencil/assets/xml/example.xml")];case 1:e=n.sent();console.log("xml example:",e);return[2]}}))}))}),0)};t.prototype.render=function(){if(this.match&&this.match.params.name){return n("div",{class:"app-profile"},n("p",null,"Hello! My name is ",this.normalize(this.match.params.name),". My name was passed in through a route param!"),n("h1",null,"Stencil App Starter"),n("img",{src:r("../assets/images/view.jpg"),alt:""}))}};return t}());u.style=a}}}));
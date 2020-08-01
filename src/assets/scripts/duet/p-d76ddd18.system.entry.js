var __awaiter=this&&this.__awaiter||function(t,e,i,n){function o(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,a){function r(t){try{s(n.next(t))}catch(e){a(e)}}function d(t){try{s(n["throw"](t))}catch(e){a(e)}}function s(t){t.done?i(t.value):o(t.value).then(r,d)}s((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,r;return r={next:d(0),throw:d(1),return:d(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function d(t){return function(e){return s([t,e])}}function s(r){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,o&&(a=r[0]&2?o["return"]:r[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,r[1])).done)return a;if(o=0,a)r=[r[0]&2,a.value];switch(r[0]){case 0:case 1:a=r;break;case 4:i.label++;return{value:r[1],done:false};case 5:i.label++;o=r[1];r=[0];continue;case 7:r=i.ops.pop();i.trys.pop();continue;default:if(!(a=i.trys,a=a.length>0&&a[a.length-1])&&(r[0]===6||r[0]===2)){i=0;continue}if(r[0]===3&&(!a||r[1]>a[0]&&r[1]<a[3])){i.label=r[1];break}if(r[0]===6&&i.label<a[1]){i.label=a[1];a=r;break}if(a&&i.label<a[2]){i.label=a[2];i.ops.push(r);break}if(a[2])i.ops.pop();i.trys.pop();continue}r=e.call(t,i)}catch(d){r=[6,d];o=0}finally{n=a=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};System.register(["./p-d487db79.system.js","./p-f6806d0e.system.js","./p-c3937a48.system.js"],(function(t){"use strict";var e,i,n,o,a,r;return{setters:[function(t){e=t.r;i=t.h;n=t.g;o=t.H},function(t){a=t.i},function(t){r=t.w}],execute:function(){var d="*,*::after,*::before{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0}:host{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0;display:block;width:100%}.duet-list-component{margin-bottom:16px !important;width:100%}.duet-list-component.duet-p-0{padding:0 !important}.duet-list-component.duet-m-0{margin:0 !important}";var s=t("duet_list",function(){function t(t){e(this,t);this.theme="";this.margin="auto";this.padding="auto";this.mobile="left";this.breakpoint="small";this.variation="default";this.labelWidth="30"}t.prototype.themeChanged=function(){this.updateListItems()};t.prototype.paddingChanged=function(){this.updateListItems()};t.prototype.mobileChanged=function(){this.updateListItems()};t.prototype.breakpointChanged=function(){this.updateListItems()};t.prototype.variationChanged=function(){this.updateListItems()};t.prototype.labelWidthChanged=function(){this.updateListItems()};t.prototype.componentWillLoad=function(){a(this)};t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t;var e=this;return __generator(this,(function(i){t=this.element;this.mutationO=r(t,"duet-list-item",(function(){e.updateListItems()}));this.updateListItems();return[2]}))}))};t.prototype.disconnectedCallback=function(){if(this.mutationO){this.mutationO.disconnect();this.mutationO=undefined}};t.prototype.toggleClass=function(t,e,i){if(i){t.classList.add(e)}else{t.classList.remove(e)}};t.prototype.updateListItems=function(){return __awaiter(this,void 0,void 0,(function(){var t;var e=this;return __generator(this,(function(i){t=Array.from(this.element.querySelectorAll("duet-list-item"));t.forEach((function(t){t.classList.add("duet-list-width-"+e.labelWidth);t.classList.add("duet-list-variation-"+e.variation);e.toggleClass(t,"duet-p-0",e.padding==="none");e.toggleClass(t,"duet-list-mobile-center",e.mobile==="center");e.toggleClass(t,"duet-list-breakpoint-large",e.breakpoint==="large");e.toggleClass(t,"duet-list-striped",e.variation==="striped");e.toggleClass(t,"duet-theme-turva",e.theme==="turva")}));return[2]}))}))};t.prototype.render=function(){return i("dl",{class:{"duet-list-component":true,"duet-m-0":this.margin==="none"}},i("slot",null))};Object.defineProperty(t.prototype,"element",{get:function(){return n(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{theme:["themeChanged"],padding:["paddingChanged"],mobile:["mobileChanged"],breakpoint:["breakpointChanged"],variation:["variationChanged"],labelWidth:["labelWidthChanged"]}},enumerable:false,configurable:true});return t}());s.style=d;var l='*,*::after,*::before{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0}:host{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0;font-size:1rem;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-weight:400;line-height:1.25;color:#00294d;font-variant-numeric:tabular-nums;font-style:normal;width:100%;display:flex;flex-flow:row;overflow:visible}@media (max-width: 35.9375em){:host{flex-wrap:wrap}}:host dt,:host dd{text-align:left;word-break:break-all;word-break:break-word;margin-inline-start:0;hyphens:auto}@media (max-width: 35.9375em){:host dt,:host dd{padding-bottom:4px !important;flex-basis:100% !important;width:100%;flex:inherit}}:host dt{padding:16px !important;font-weight:600}@media (max-width: 35.9375em){:host dt{padding-bottom:4px !important}}.duet-theme-turva :host dt{font-weight:700}:host dd{padding:16px !important;margin-left:auto;text-align:left}@media (max-width: 35.9375em){:host dd{padding-top:0 !important}}:host(:not(.duet-list-striped)) dt{padding:8px !important;padding-left:0 !important}@media (max-width: 35.9375em){:host(:not(.duet-list-striped)) dt{padding-bottom:4px !important}}:host(:not(.duet-list-striped)) dd{padding:8px !important;padding-left:0 !important}@media (max-width: 35.9375em){:host(:not(.duet-list-striped)) dd{padding-top:0 !important}}:host(.duet-theme-turva){color:#171c3a;font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"}:host(.duet-list-striped:nth-child(odd)) dt,:host(.duet-list-striped:nth-child(odd)) dd{background:#f5f8fa}:host(.duet-list-striped.duet-theme-turva:nth-child(odd)) dt,:host(.duet-list-striped.duet-theme-turva:nth-child(odd)) dd{background:#f7f7f7}:host(.duet-list-width-30) dt{flex-basis:33%}:host(.duet-list-width-30) dd{flex-basis:67%}:host(.duet-list-width-50) dt{flex-basis:47%}:host(.duet-list-width-50) dd{flex-basis:53%}:host(.duet-list-width-70) dt{flex-basis:65%}:host(.duet-list-width-70) dd{flex-basis:35%}:host(.duet-p-0) dt,:host(.duet-p-0) dd{padding-top:0 !important;padding-bottom:4px !important}@media (max-width: 35.9375em){:host(.duet-list-center) dt,:host(.duet-list-center) dd{text-align:center}}@media (max-width: 61.9375em){:host(.duet-list-breakpoint-large){flex-wrap:wrap}:host(.duet-list-breakpoint-large) dt,:host(.duet-list-breakpoint-large) dd{padding-bottom:4px !important;flex-basis:100% !important;width:100%;flex:inherit}:host(.duet-list-breakpoint-large) dd{padding-top:0 !important}}@media (max-width: 61.9375em){:host(.duet-list-breakpoint-large.duet-list-mobile-center) dt,:host(.duet-list-breakpoint-large.duet-list-mobile-center) dd{text-align:center}}@media (max-width: 61.9375em){:host(:not(.duet-list-breakpoint-large.duet-list-striped)) dt{padding-bottom:4px !important}}@media (max-width: 61.9375em){:host(:not(.duet-list-breakpoint-large.duet-list-striped)) dd{padding-top:0 !important}}';var p=t("duet_list_item",function(){function t(t){e(this,t)}t.prototype.render=function(){return i(o,null,i("dt",null,i("slot",{name:"label"})),i("dd",null,i("slot",{name:"value"})))};return t}());p.style=l}}}));
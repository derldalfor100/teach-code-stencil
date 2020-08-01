var __awaiter=this&&this.__awaiter||function(e,t,n,o){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function r(e){try{d(o.next(e))}catch(t){a(t)}}function s(e){try{d(o["throw"](e))}catch(t){a(t)}}function d(e){e.done?n(e.value):i(e.value).then(r,s)}d((o=o.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},o,i,a,r;return r={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function s(e){return function(t){return d([e,t])}}function d(r){if(o)throw new TypeError("Generator is already executing.");while(n)try{if(o=1,i&&(a=r[0]&2?i["return"]:r[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,r[1])).done)return a;if(i=0,a)r=[r[0]&2,a.value];switch(r[0]){case 0:case 1:a=r;break;case 4:n.label++;return{value:r[1],done:false};case 5:n.label++;i=r[1];r=[0];continue;case 7:r=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(r[0]===6||r[0]===2)){n=0;continue}if(r[0]===3&&(!a||r[1]>a[0]&&r[1]<a[3])){n.label=r[1];break}if(r[0]===6&&n.label<a[1]){n.label=a[1];a=r;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(r);break}if(a[2])n.ops.pop();n.trys.pop();continue}r=t.call(e,n)}catch(s){r=[6,s];i=0}finally{o=a=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};System.register(["./p-d487db79.system.js","./p-f6806d0e.system.js","./p-10d10194.system.js","./p-8bc8c1af.system.js","./p-24b90b41.system.js"],(function(e){"use strict";var t,n,o,i,a,r,s,d,l,u;return{setters:[function(e){t=e.r;n=e.c;o=e.h;i=e.g},function(e){a=e.i},function(e){r=e.j},function(e){s=e.h;d=e.f},function(e){l=e.d;u=e.e}],execute:function(){var c='*,*::after,*::before{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0}:host{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0}.duet-modal-overlay{transition:300ms ease;transition-delay:200ms;position:fixed;max-height:100vh;z-index:900;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);top:0;left:0;bottom:0;right:0;overflow-y:auto;opacity:0;visibility:hidden;background:rgba(0, 41, 77, 0.85)}.duet-modal-overlay.duet-theme-turva{background:rgba(23, 28, 58, 0.85)}.duet-modal-overlay.duet-modal-active{transition:300ms ease;transition-delay:0;opacity:1;visibility:visible}.duet-modal-overlay.duet-disable-transitions{transition:none}.duet-modal-inner{width:100%;min-height:100%;padding:20px 16px;display:flex;align-items:center}@media (min-width: 36em){.duet-modal-inner{padding:48px 16px}}.duet-modal{margin:auto;transition:300ms ease;transition-delay:0;will-change:transform, opacity;transform:scale(0.96);font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-weight:400;line-height:1.5;color:#00294d;-moz-font-feature-settings:"ss01";-webkit-font-feature-settings:"ss01";font-feature-settings:"ss01";font-variant-numeric:tabular-nums;background:white;border-radius:4px;position:relative;width:100%;overflow:hidden;max-width:686px;opacity:0}.duet-modal-active .duet-modal{transition:300ms ease;transition-delay:200ms;transform:scale(0.9999);opacity:1}.duet-disable-transitions .duet-modal{transition:none}.duet-modal.small{max-width:545px}.duet-modal:focus{outline:0}.duet-modal-body{padding:36px 28px 36px;width:100%}@media (max-width: 22.5em){.duet-modal-body{padding:36px 20px 36px}}@media (min-width: 36em){.duet-modal-body{padding:36px}}@media (min-width: 48em){.duet-modal-body{padding:36px 48px 36px}}@media (min-width: 76.25em){.duet-modal-body{padding:36px 48px 48px}.small .duet-modal-body{padding:36px 48px 36px}}.duet-modal-header{text-align:center}.duet-modal-close{position:absolute;top:12px;right:12px}.duet-modal-heading{padding-right:60px;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-weight:600;font-size:1.25rem;line-height:1.25;letter-spacing:-0.01rem;color:#00294d;-moz-font-feature-settings:"ss01";-webkit-font-feature-settings:"ss01";text-decoration:none;font-feature-settings:"ss01";font-variant-numeric:tabular-nums;font-style:normal;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}.duet-modal-heading.duet-p-0{padding:0 !important}.duet-modal-heading.duet-m-0{margin:0 !important}';var p=e("duet_modal",function(){function e(e){var o=this;t(this,e);this.duetOpen=n(this,"duetOpen",7);this.duetClose=n(this,"duetClose",7);this.duetBeforeClose=n(this,"duetBeforeClose",7);this.modalId=r("DuetModal");this.open=false;this.size="medium";this.theme="";this.heading="";this.icon="";this.color="";this.active=false;this.handleKeyDown=function(e){if(o.open){if(e.shiftKey&&s(e)){e.preventDefault()}}};this.handleLastElement=function(e){if(o.open){if(!e.shiftKey&&s(e)){var t=o.element.querySelectorAll('duet-button, duet-checkbox, duet-choice, duet-input, duet-link, duet-radio, duet-range-slider, duet-select, duet-tab, duet-textarea, duet-toggle, a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');o.lastFocusableEl=t[t.length-1];if(document.activeElement===o.lastFocusableEl){e.preventDefault();o.buttonEl.setFocus()}}}}}e.prototype.openChanged=function(){var e=this;if(this.open){if(this.modalEl&&this.modalEl.scrollTop){this.modalEl.scrollTop=0}this.focusedElBeforeOpen=document.activeElement;l(this.modalEl);setTimeout((function(){e.buttonEl.setFocus()}),400);setTimeout((function(){e.modalEl.classList.add("duet-disable-transitions")}),600);this.duetOpen.emit()}else{this.modalEl.classList.remove("duet-disable-transitions");u(this.modalEl);this.duetClose.emit();setTimeout((function(){if(e.focusedElBeforeOpen){if(e.focusedElBeforeOpen.setFocus){e.focusedElBeforeOpen.setFocus()}else{e.focusedElBeforeOpen.focus()}}}),400)}};e.prototype.activeChanged=function(){this.open=this.active};e.prototype.componentWillLoad=function(){a(this)};e.prototype.componentDidLoad=function(){if(this.active){this.open=true;this.modalEl.classList.add("duet-disable-transitions")}};e.prototype.disconnectedCallback=function(){u(this.modalEl)};e.prototype.handleKeyUp=function(e){if(this.open){if(d(e)){this.closeModal(e)}}};e.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.open=true;return[2]}))}))};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.open=false;return[2]}))}))};e.prototype.closeModal=function(e){var t=this;this.duetBeforeClose.emit({originalEvent:e,component:"duet-modal"});if(!e.defaultPrevented){setTimeout((function(){t.hide()}),1)}};e.prototype.render=function(){var e;var t=this;var n="primary";var i="secondary";if(this.theme==="turva"){n="primary-turva";i="secondary-turva"}return o("div",{ref:function(e){return t.modalEl=e},"aria-labelledby":this.heading?this.modalId:false,onKeyDown:function(e){return t.handleLastElement(e)},"aria-modal":"true",role:"dialog",tabindex:"-1",class:{"duet-modal-overlay":true,"duet-theme-turva":this.theme==="turva","duet-modal-active":this.open}},o("div",{class:"duet-modal-inner"},o("div",{class:(e={"duet-modal":true},e[this.size]=true,e)},o("duet-spacer",null),o("div",{class:"duet-modal-close"},o("duet-button",{ref:function(e){return t.buttonEl=e},variation:"plain","accessible-label":"Sulje ikkuna",color:i,"icon-size":"large",icon:"navigation-close","icon-only":true,margin:"none",theme:this.theme,onKeyDown:function(e){return t.handleKeyDown(e)},onClick:function(e){return t.closeModal(e)},fixed:true})),o("div",{class:"duet-modal-body"},o("div",{class:"duet-modal-header"},this.icon&&o("duet-icon",{name:this.icon,size:"xx-large",color:this.color||n}),this.heading&&o("duet-heading",{level:"h3",theme:this.theme,id:this.modalId},this.heading)),o("slot",null)))))};Object.defineProperty(e.prototype,"element",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{open:["openChanged"],active:["activeChanged"]}},enumerable:false,configurable:true});return e}());p.style=c}}}));
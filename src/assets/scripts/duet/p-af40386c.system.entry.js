var __awaiter=this&&this.__awaiter||function(e,t,s,o){function l(e){return e instanceof s?e:new s((function(t){t(e)}))}return new(s||(s=Promise))((function(s,r){function c(e){try{a(o.next(e))}catch(t){r(t)}}function i(e){try{a(o["throw"](e))}catch(t){r(t)}}function a(e){e.done?s(e.value):l(e.value).then(c,i)}a((o=o.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var s={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},o,l,r,c;return c={next:i(0),throw:i(1),return:i(2)},typeof Symbol==="function"&&(c[Symbol.iterator]=function(){return this}),c;function i(e){return function(t){return a([e,t])}}function a(c){if(o)throw new TypeError("Generator is already executing.");while(s)try{if(o=1,l&&(r=c[0]&2?l["return"]:c[0]?l["throw"]||((r=l["return"])&&r.call(l),0):l.next)&&!(r=r.call(l,c[1])).done)return r;if(l=0,r)c=[c[0]&2,r.value];switch(c[0]){case 0:case 1:r=c;break;case 4:s.label++;return{value:c[1],done:false};case 5:s.label++;l=c[1];c=[0];continue;case 7:c=s.ops.pop();s.trys.pop();continue;default:if(!(r=s.trys,r=r.length>0&&r[r.length-1])&&(c[0]===6||c[0]===2)){s=0;continue}if(c[0]===3&&(!r||c[1]>r[0]&&c[1]<r[3])){s.label=c[1];break}if(c[0]===6&&s.label<r[1]){s.label=r[1];r=c;break}if(r&&s.label<r[2]){s.label=r[2];s.ops.push(c);break}if(r[2])s.ops.pop();s.trys.pop();continue}c=t.call(e,s)}catch(i){c=[6,i];l=0}finally{o=r=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:true}}};System.register(["./p-d487db79.system.js","./p-f6806d0e.system.js","./p-79067df5.system.js","./p-10d10194.system.js"],(function(e){"use strict";var t,s,o,l,r,c,i,a;return{setters:[function(e){t=e.r;s=e.c;o=e.h;l=e.H;r=e.g},function(e){c=e.i},function(e){i=e.p},function(e){a=e.j}],execute:function(){var n='@charset "UTF-8";*.sc-duet-select,*.sc-duet-select::after,*.sc-duet-select::before{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0}.sc-duet-select-h{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0;margin-right:16px !important;margin-bottom:12px !important;display:inline-flex;vertical-align:bottom;max-width:100%;width:100%}.sc-duet-select-h:last-child,.sc-duet-select-h:last-of-type{margin-right:0 !important}@media (min-width: 36em){.sc-duet-select-h{width:calc(50% - 16px - 3px)}.duet-expand.sc-duet-select-h{width:100% !important}}.duet-m-0.sc-duet-select-h{margin:0 !important}duet-tooltip.sc-duet-select{position:absolute;top:12px;right:0}@media (min-width: 48em){duet-tooltip.sc-duet-select{position:relative;top:4px;right:auto}}.duet-select-container.sc-duet-select{position:relative;width:100%}.duet-select-wrapper.sc-duet-select{padding:16px !important;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:1rem;font-weight:400;line-height:1.25;position:relative;width:100%}.duet-theme-turva.sc-duet-select .duet-select-wrapper.sc-duet-select{font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"}.duet-select-wrapper.sc-duet-select::after{content:"  "}.duet-select-wrapper.sc-duet-select select.sc-duet-select{top:0;left:0;margin:0;right:0;bottom:0;padding:0;position:absolute;font-size:1rem;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";z-index:200;border:0;height:100%;width:100%;cursor:pointer;outline:none;opacity:0}.duet-theme-turva.sc-duet-select .duet-select-wrapper.sc-duet-select select.sc-duet-select{font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"}.duet-select-wrapper.sc-duet-select select.sc-duet-select:hover+.duet-select.sc-duet-select{border-color:#909599;box-shadow:0 0 0 1px #909599}.duet-theme-turva.sc-duet-select .duet-select-wrapper.sc-duet-select select.sc-duet-select:hover+.duet-select.sc-duet-select{border-color:#757575;box-shadow:0 0 0 1px #757575}.has-error.sc-duet-select .duet-select-wrapper.sc-duet-select select.sc-duet-select:hover+.duet-select.sc-duet-select{box-shadow:0 0 0 1px #de2362}.duet-theme-turva.has-error.sc-duet-select .duet-select-wrapper.sc-duet-select select.sc-duet-select:hover+.duet-select.sc-duet-select{box-shadow:0 0 0 1px #e02a0d}.duet-select-wrapper.sc-duet-select select.sc-duet-select:focus+.duet-select.sc-duet-select{transition:none;border-color:#0077b3;box-shadow:0 0 0 1px #0077b3;outline:0}.duet-theme-turva.sc-duet-select .duet-select-wrapper.sc-duet-select select.sc-duet-select:focus+.duet-select.sc-duet-select{border-color:#171c3a;box-shadow:0 0 0 1px #171c3a}.duet-theme-turva.sc-duet-select .duet-select-wrapper.sc-duet-select select.sc-duet-select:focus+.duet-select.sc-duet-select .duet-select-icon.sc-duet-select{color:#171c3a}.duet-select-wrapper.sc-duet-select select.sc-duet-select:focus+.duet-select.sc-duet-select .duet-select-icon.sc-duet-select{color:#0077b3}.has-error.sc-duet-select .duet-select-wrapper.sc-duet-select select.sc-duet-select:focus+.duet-select.sc-duet-select{box-shadow:0 0 0 1px #de2362}.duet-theme-turva.has-error.sc-duet-select .duet-select-wrapper.sc-duet-select select.sc-duet-select:focus+.duet-select.sc-duet-select{box-shadow:0 0 0 1px #e02a0d}.duet-select-wrapper.sc-duet-select select[disabled].sc-duet-select{cursor:default !important}.duet-select-wrapper.sc-duet-select select[disabled].sc-duet-select+.duet-select.sc-duet-select{cursor:default !important;border-color:#f5f8fa !important;background:#f5f8fa !important;color:#00294d !important;-webkit-text-fill-color:#00294d !important;box-shadow:none !important;opacity:1 !important}.duet-theme-turva.sc-duet-select .duet-select-wrapper.sc-duet-select select[disabled].sc-duet-select+.duet-select.sc-duet-select{border-color:#f7f7f7 !important;background:#f7f7f7 !important;color:#171c3a !important;-webkit-text-fill-color:#171c3a !important}.duet-select.sc-duet-select{padding:15px !important;padding-right:48px !important;position:absolute;text-align:left;left:0;top:0;bottom:0;right:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-variant-numeric:tabular-nums;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";border:1px solid #909599;border-radius:4px;font-size:1rem;background:white;color:#00294d;font-weight:400;line-height:1.25;transition:150ms ease;z-index:100;min-width:8rem;width:100%;display:block}.has-error.sc-duet-select .duet-select.sc-duet-select{border-color:#de2362 !important}.has-error.sc-duet-select .duet-select.sc-duet-select .duet-select-icon.sc-duet-select{color:#de2362 !important}.duet-theme-turva.has-error.sc-duet-select .duet-select.sc-duet-select{border-color:#e02a0d !important}.duet-theme-turva.has-error.sc-duet-select .duet-select.sc-duet-select .duet-select-icon.sc-duet-select{color:#e02a0d !important}.duet-theme-turva.sc-duet-select .duet-select.sc-duet-select{color:#171c3a;font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";border-color:#757575}.duet-select-help.sc-duet-select{font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";border-radius:4px;font-size:0.875rem;color:#657787;font-weight:400;line-height:1.25;display:block}.duet-select-help.sc-duet-select span.sc-duet-select{display:block;margin-top:8px}.duet-theme-turva.sc-duet-select .duet-select-help.sc-duet-select{color:#757575}.has-error.sc-duet-select .duet-select-help.sc-duet-select{color:#de2362}.duet-theme-turva.has-error.sc-duet-select .duet-select-help.sc-duet-select{color:#e02a0d}.duet-select.sc-duet-select svg.sc-duet-select{pointer-events:none;z-index:200;width:20px;height:20px;color:#00294d;position:absolute;top:50%;transform:translateY(-50%);right:16px}.duet-theme-turva.sc-duet-select .duet-select.sc-duet-select svg.sc-duet-select{color:#171c3a}.duet-label-hidden.sc-duet-select duet-label.sc-duet-select{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}';function u(e){return"options"in e}function d(e,t){for(var s=0;s<e.length;s++){var o=e[s];if(u(o)){o=d(o.options,t)}if(o&&o.value===t){return o}}}var p=e("duet_select",function(){function e(e){var o=this;t(this,e);this.duetChange=s(this,"duetChange",3);this.duetFocus=s(this,"duetFocus",7);this.duetBlur=s(this,"duetBlur",7);this.selectId=a("DuetSelect");this.errorId=a("DuetError");this.labelId=a("DuetLabel");this.processedItems=null;this.margin="auto";this.error="";this.expand=false;this.theme="";this.labelHidden=false;this.placeholder="";this.disabled=false;this.label="label";this.tooltip="";this.onClick=function(e){e.stopPropagation()};this.onChange=function(){o.value=o.nativeSelect.value;o.duetChange.emit({value:o.value,component:"duet-select"})};this.onBlur=function(e){o.duetBlur.emit({originalEvent:e,value:o.value,component:"duet-select"})};this.onFocus=function(e){o.duetFocus.emit({originalEvent:e,value:o.value,component:"duet-select"})}}e.prototype.valueChanged=function(){if(this.nativeSelect){this.nativeSelect.value=this.value}};e.prototype.itemsChanged=function(){this.refresh()};e.prototype.componentWillLoad=function(){c(this);this.refresh()};e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){e=this.element.querySelector("select");if(e){e.focus()}return[2]}))}))};e.prototype.refresh=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.processedItems=i(this.items);return[2]}))}))};e.prototype.getSelectedItemLabel=function(){var e;if(this.processedItems){e=d(this.processedItems,this.value)}return e?e.label:this.placeholder||""};e.prototype.renderOption=function(e){return o("option",{value:e.value,selected:this.value===e.value,disabled:e.disabled},e.label)};e.prototype.renderOptionGroup=function(e){var t=this;return o("optgroup",{label:e.label,disabled:e.disabled},e.options.map((function(e){return t.renderOption(e)})))};e.prototype.render=function(){var e=this;var t=this.identifier||this.selectId;return o(l,{onClick:this.onClick,class:{"duet-m-0":this.margin==="none","duet-expand":this.expand}},o("div",{class:{"duet-select-container":true,"duet-label-hidden":this.labelHidden,"duet-theme-turva":this.theme==="turva","has-error":!!this.error}},o("duet-label",{theme:this.theme==="turva"?"turva":"default",class:{"duet-has-tooltip":!!this.tooltip},id:this.labelId,for:t},this.label),this.tooltip&&o("duet-tooltip",null,this.tooltip),o("div",{class:"duet-select-wrapper"},o("select",{ref:function(t){return e.nativeSelect=t},disabled:this.disabled,name:this.name,id:t,role:this.role,"aria-labelledby":this.labelId+" "+this.errorId,"aria-controls":this.accessibleControls,"aria-active-descendant":this.accessibleActiveDescendant,"aria-owns":this.accessibleOwns,onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.onChange},this.placeholder&&o("option",{disabled:true,selected:true,value:""},this.placeholder),!this.processedItems?o("option",null,"Virhe valintoja ladattaessa. Päivitä sivu ja kokeile uusiksi."):this.processedItems.map((function(t){return u(t)?e.renderOptionGroup(t):e.renderOption(t)}))),o("div",{class:"duet-select","aria-hidden":"true"},o("span",null,this.getSelectedItemLabel()),o("svg",{role:"img",class:"duet-select-icon",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"m12 18.999c-.4 0-.776-.156-1.059-.438l-10.721-10.72c-.142-.142-.22-.33-.22-.531 0-.2.078-.389.22-.53.142-.142.33-.22.53-.22s.389.078.53.22l10.72 10.719 10.72-10.719c.142-.142.33-.22.53-.22s.389.078.53.22c.142.142.22.33.22.53s-.078.389-.22.53l-10.72 10.72c-.282.283-.659.439-1.06.439z"})))),o("span",{class:"duet-select-help",id:this.errorId,"aria-live":"assertive","aria-relevant":"additions removals"},this.error&&o("span",null,this.error))))};Object.defineProperty(e.prototype,"element",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChanged"],items:["itemsChanged"]}},enumerable:false,configurable:true});return e}());p.style=n}}}));
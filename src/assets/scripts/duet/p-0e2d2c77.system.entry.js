var __awaiter=this&&this.__awaiter||function(e,t,a,i){function o(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,d){function n(e){try{u(i.next(e))}catch(t){d(t)}}function r(e){try{u(i["throw"](e))}catch(t){d(t)}}function u(e){e.done?a(e.value):o(e.value).then(n,r)}u((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var a={label:0,sent:function(){if(d[0]&1)throw d[1];return d[1]},trys:[],ops:[]},i,o,d,n;return n={next:r(0),throw:r(1),return:r(2)},typeof Symbol==="function"&&(n[Symbol.iterator]=function(){return this}),n;function r(e){return function(t){return u([e,t])}}function u(n){if(i)throw new TypeError("Generator is already executing.");while(a)try{if(i=1,o&&(d=n[0]&2?o["return"]:n[0]?o["throw"]||((d=o["return"])&&d.call(o),0):o.next)&&!(d=d.call(o,n[1])).done)return d;if(o=0,d)n=[n[0]&2,d.value];switch(n[0]){case 0:case 1:d=n;break;case 4:a.label++;return{value:n[1],done:false};case 5:a.label++;o=n[1];n=[0];continue;case 7:n=a.ops.pop();a.trys.pop();continue;default:if(!(d=a.trys,d=d.length>0&&d[d.length-1])&&(n[0]===6||n[0]===2)){a=0;continue}if(n[0]===3&&(!d||n[1]>d[0]&&n[1]<d[3])){a.label=n[1];break}if(n[0]===6&&a.label<d[1]){a.label=d[1];d=n;break}if(d&&a.label<d[2]){a.label=d[2];a.ops.push(n);break}if(d[2])a.ops.pop();a.trys.pop();continue}n=t.call(e,a)}catch(r){n=[6,r];o=0}finally{i=d=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:true}}};System.register(["./p-d487db79.system.js","./p-f6806d0e.system.js","./p-10d10194.system.js"],(function(e){"use strict";var t,a,i,o,d,n,r;return{setters:[function(e){t=e.h;a=e.r;i=e.c;o=e.H;d=e.g},function(e){n=e.i},function(e){r=e.j}],execute:function(){var u={title:"form-date",tags:"form date calendar date picker",svg:'<svg role="img" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.25 24c-1.241 0-2.25-1.009-2.25-2.25v-16.5c0-1.241 1.009-2.25 2.25-2.25h3.75v-2.25c0-.414.336-.75.75-.75s.75.336.75.75v2.25h9v-2.25c0-.414.336-.75.75-.75s.75.336.75.75v2.25h3.75c1.241 0 2.25 1.009 2.25 2.25v16.5c0 1.241-1.009 2.25-2.25 2.25zm-.75-2.25c0 .414.336.75.75.75h19.5c.414 0 .75-.336.75-.75v-11.25h-21zm21-12.75v-3.75c0-.414-.336-.75-.75-.75h-3.75v1.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.5h-9v1.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.5h-3.75c-.414 0-.75.336-.75.75v3.75z"/><circle cx="5.625" cy="13.875" r="1.125"/><circle cx="5.625" cy="19.125" r="1.125"/><circle cx="12" cy="13.875" r="1.125"/><circle cx="12" cy="19.125" r="1.125"/><circle cx="18.375" cy="13.875" r="1.125"/><path d="m18.375 20.25c-.62 0-1.125-.505-1.125-1.125s.505-1.125 1.125-1.125c.014 0 .03.001.046.003.01.001.019.002.027.003.583.029 1.052.521 1.052 1.12 0 .619-.505 1.124-1.125 1.124z"/></svg>'};var s=function(e){var a=e.onClick,i=e.placeholder,o=e.buttonLabel,d=e.name,n=e.inputLabel,r=e.value,s=e.identifier,c=e.theme,l=e.disabled,p=e.error,h=e.role,b=e.tooltip,f=e.labelHidden,g=e.buttonRef,m=e.inputRef,v=e.onInput,k=e.onBlur,y=e.onFocus;return t("div",{class:{"duet-theme-turva":c==="turva","duet-date-input":true}},t("duet-input",{label:n,name:d,value:r,placeholder:i,id:s,disabled:l,theme:c,error:p,role:h,tooltip:b,icon:"form-date",margin:"none",labelHidden:f,accessibleAutocomplete:"none",onDuetInput:v,onDuetFocus:y,onDuetBlur:k,autoComplete:"off",expand:true,ref:m},t("button",{class:{"duet-date-button":true,"duet-no-label":f},"aria-label":o,onClick:a,disabled:l,ref:g,type:"button"},t("duet-icon",{icon:u.svg,margin:"none",size:"small",color:"currentColor"}))))};var c=/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/;var l=/^(\d{4})-(\d{2})-(\d{2})$/;var p="dd.mm.yyyy";var h="YYYY-MM-DD";function b(e,t,a){var i=parseInt(a,10);var o=parseInt(t,10);var d=parseInt(e,10);var n=Number.isInteger(d)&&Number.isInteger(o)&&Number.isInteger(i)&&o>0&&o<=12&&i>0&&i<=31&&d>0;if(n){return new Date(d,o-1,i)}}function f(e){if(!e){return}var t=e.match(c);if(t){return b(t[3],t[2],t[1])}}function g(e){if(!e){return}var t=e.match(l);if(t){return b(t[1],t[2],t[3])}}function m(e,t){if(!e){return""}var a=e.getDate().toString(10);var i=(e.getMonth()+1).toString(10);var o=e.getFullYear().toString(10);if(e.getDate()<10){a="0"+a}if(e.getMonth()<9){i="0"+i}return t.replace(/MM/i,i).replace(/YYYY/i,o).replace(/DD/i,a)}function v(e){return m(e,p)}function k(e){return m(e,h)}function y(e,t){if(e==null||t==null){return false}return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function x(e,t){var a=new Date(e);a.setDate(a.getDate()+t);return a}function w(e,t){if(t===void 0){t=1}var a=new Date(e);var i=a.getDay();var o=(i<t?7:0)+i-t;a.setDate(a.getDate()-o);return a}function D(e,t){if(t===void 0){t=1}var a=new Date(e);var i=a.getDay();var o=(i<t?-7:0)+6-(i-t);a.setDate(a.getDate()+o);return a}function S(e){return new Date(e.getFullYear(),e.getMonth(),1)}function M(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}function F(e,t){var a=new Date(e);a.setMonth(t);return a}function I(e,t){var a=new Date(e);a.setFullYear(t);return a}function L(e,t,a){return T(e,t,a)===e}function T(e,t,a){var i=e.getTime();if(t&&t instanceof Date&&i<t.getTime()){return t}if(a&&a instanceof Date&&i>a.getTime()){return a}return e}function C(e,t){var a=[];var i=e;while(!y(i,t)){a.push(i);i=x(i,1)}a.push(i);return a}function Y(e,t){if(t===void 0){t=1}var a=w(S(e),t);var i=D(M(e),t);return C(a,i)}var E={fi:{locale:"fi-FI",buttonLabel:"Valitse päivämäärä",prevMonthLabel:"Edellinen kuukausi",nextMonthLabel:"Seuraava kuukausi",monthSelectLabel:"Kuukausi",yearSelectLabel:"Vuosi",closeLabel:"Sulje ikkuna",keyboardInstruction:"Voit navigoida päivämääriä nuolinäppäimillä",dayLabels:["Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai","Sunnuntai"],monthLabels:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"],monthLabelsShort:["Tammi","Helmi","Maalis","Huhti","Touko","Kesä","Heinä","Elo","Syys","Loka","Marras","Joulu"]},en:{locale:"en-GB",buttonLabel:"Choose date",prevMonthLabel:"Previous month",nextMonthLabel:"Next month",monthSelectLabel:"Month",yearSelectLabel:"Year",closeLabel:"Close window",keyboardInstruction:"You can use arrow keys to navigate dates",dayLabels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthLabels:["January","February","March","April","May","June","July","August","September","October","November","December"],monthLabelsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},sv:{locale:"sv-SE",buttonLabel:"Välj datum",prevMonthLabel:"Föregående månad",nextMonthLabel:"Nästa månad",monthSelectLabel:"Månad",yearSelectLabel:"År",closeLabel:"Stäng fönstret",keyboardInstruction:"Använd piltangenterna för att navigera i kalender",dayLabels:["Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag","Söndag"],monthLabels:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],monthLabelsShort:["Jan","Feb","Mars","April","Maj","Juni","Juli","Aug","Sep","Okt","Nov","Dec"]}};var A=function(e){var a=e.selectedDay,i=e.focusedDay,o=e.today,d=e.day,n=e.language,r=e.onDaySelect,u=e.onKeyboardNavigation,s=e.focusedDayRef,c=e.inRange;var l=y(d,o);var p=y(d,i);var h=y(d,a);var b=d.getMonth()!==i.getMonth();var f=!c;var g=E[n].locale;function m(e){r(e,d)}return t("button",{class:{"duet-date-table-button":true,outside:f,disabled:b,today:l},tabIndex:p?0:-1,onClick:m,onKeyDown:u,"aria-selected":h?"true":undefined,"aria-label":d.toLocaleDateString(g),type:"button",ref:function(e){if(p&&e&&s){s(e)}}},d.getDate())};function N(e,t){var a=[];for(var i=0;i<e.length;i+=t){a.push(e.slice(i,i+t))}return a}var z=function(e){var a=e.selectedDate,i=e.focusedDate,o=e.labelledById,d=e.theme,n=e.language,r=e.min,u=e.max,s=e.onDateSelect,c=e.onKeyboardNavigation,l=e.focusedDayRef,p=e.onMouseDown,h=e.onFocusIn;var b=E[n].dayLabels;var f=new Date;var g=Y(i);return t("table",{class:{"duet-date-table":true,"duet-theme-turva":d==="turva"},role:"grid","aria-labelledby":o,onFocusin:h,onMouseDown:p},t("thead",null,t("tr",null,b.map((function(e){return t("th",{scope:"col"},t("span",{"aria-hidden":"true"},e.substr(0,2)),t("duet-visually-hidden",null,e))})))),t("tbody",null,N(g,7).map((function(e){return t("tr",{class:"duet-date-table-row"},e.map((function(e){return t("td",{class:"duet-date-table-cell"},t(A,{day:e,today:f,language:n,selectedDay:a,focusedDay:i,inRange:L(e,r,u),onDaySelect:s,onKeyboardNavigation:c,focusedDayRef:l}))})))}))))};var j='*.sc-duet-date-picker,*.sc-duet-date-picker::after,*.sc-duet-date-picker::before{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0}.sc-duet-date-picker-h{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0;margin-right:16px !important;margin-bottom:12px !important;display:inline-flex;text-align:left;vertical-align:bottom;position:relative;min-width:calc(33.333% - 8px);max-width:100%;width:100%}.sc-duet-date-picker-h:last-child,.sc-duet-date-picker-h:last-of-type{margin-right:0 !important}@media (min-width: 36em){.sc-duet-date-picker-h{width:calc(50% - 16px - 3px)}}.duet-expand.sc-duet-date-picker-h{width:100% !important}.duet-m-0.sc-duet-date-picker-h{margin:0 !important}.duet-date.sc-duet-date-picker{position:relative;width:100%}.duet-date-button.sc-duet-date-picker{-webkit-user-select:none;user-select:none;position:absolute;height:calc(100% - 2px);width:48px;cursor:pointer;background:white;border-top-right-radius:4px;border-bottom-right-radius:4px;right:1px;top:1px;z-index:200;border-left:1px solid #cfd2d4;color:#00294d;display:flex;align-items:center;justify-content:center}.duet-theme-turva.sc-duet-date-picker .duet-date-button.sc-duet-date-picker{border-color:#d1d1d1;color:#171c3a}.duet-date-button.sc-duet-date-picker::before{content:"";position:absolute;top:0;left:-6px;width:6px;height:100%;background:linear-gradient(to left, rgba(207, 210, 212, 0.2) 0%, rgba(207, 210, 212, 0.2) 1px, rgba(207, 210, 212, 0.1) 1px, rgba(207, 210, 212, 0) 100%)}.duet-date-button[disabled].sc-duet-date-picker{background:#f5f8fa;cursor:default;border:0}.duet-theme-turva.sc-duet-date-picker .duet-date-button[disabled].sc-duet-date-picker{background:#f7f7f7}.duet-date-button[disabled].sc-duet-date-picker::before{display:none}.duet-date-button.sc-duet-date-picker duet-icon.sc-duet-date-picker{transform:translateY(-1px)}.duet-date-button.sc-duet-date-picker:active duet-icon.sc-duet-date-picker{transform:translateY(0)}.duet-date-button.sc-duet-date-picker:focus{outline:0;box-shadow:0 0 0 2px #0077b3;border-color:transparent;color:#0077b3}.duet-theme-turva.sc-duet-date-picker .duet-date-button.sc-duet-date-picker:focus{box-shadow:0 0 0 2px #171c3a;color:#171c3a}.duet-date-dialog.sc-duet-date-picker{transition:transform 300ms ease, opacity 300ms ease, visibility 300ms ease;opacity:0;visibility:hidden;will-change:transform, opacity, visibility;transform:scale(0.96) translateZ(0) translateY(-20px);transform-origin:top right;position:absolute;z-index:900;width:100%;left:0;top:100%;display:flex}@media (max-width: 35.9375em){.duet-date-dialog.sc-duet-date-picker{will-change:opacity, visibility;transition:opacity 400ms ease, visibility 400ms ease;transform-origin:bottom center;transform:translateZ(0);position:fixed;bottom:0;top:0;right:0;background:rgba(0, 41, 77, 0.75)}.duet-date-dialog.duet-theme-turva.sc-duet-date-picker{background:rgba(23, 28, 58, 0.75)}}.duet-date-dialog.active.sc-duet-date-picker{opacity:1;visibility:visible;transform:scale(1) translateZ(0) translateY(0)}.duet-date-dialog.error.sc-duet-date-picker{margin-top:4px;top:calc(100% - 28px)}.duet-date-dialog-wrapper.sc-duet-date-picker{margin-top:8px;width:100%;margin-left:auto;max-width:310px;min-width:290px;transform:none;position:relative;z-index:600;border-radius:4px;border:1px solid #e1e3e6;box-shadow:0 4px 10px 0 rgba(0, 41, 77, 0.15);padding:16px 16px 20px;background:white}.duet-theme-turva.sc-duet-date-picker .duet-date-dialog-wrapper.sc-duet-date-picker{border-color:#e6e6e6}@media (max-width: 35.9375em){.duet-date-dialog-wrapper.sc-duet-date-picker{border:0;transition:transform 400ms ease, opacity 400ms ease, visibility 400ms ease;opacity:0;visibility:hidden;min-height:25em;will-change:transform, opacity, visibility;transform:translateZ(0) translateY(100%);position:absolute;border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px;bottom:0;left:0;margin:0;z-index:900;padding:0 8% 20px;max-width:none}.active.sc-duet-date-picker .duet-date-dialog-wrapper.sc-duet-date-picker{opacity:1;visibility:visible;transform:translateZ(0) translateY(0)}}.duet-date-table.sc-duet-date-picker{width:100%;font-size:1rem;font-weight:400;line-height:1.25;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";color:#00294d;border-collapse:collapse;border-spacing:0;text-align:center}.duet-date-table.duet-theme-turva.sc-duet-date-picker{color:#171c3a;font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"}.duet-date-table.sc-duet-date-picker th.sc-duet-date-picker{padding-bottom:8px;text-decoration:none;letter-spacing:1px;font-size:0.75rem;line-height:1.25;font-weight:600;text-transform:uppercase}.duet-date-table.sc-duet-date-picker .duet-date-table-cell.sc-duet-date-picker{text-align:center}.duet-date-table-button.sc-duet-date-picker{font-size:0.875rem;font-weight:400;line-height:1.25;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-variant-numeric:tabular-nums;border-radius:50%;color:#00294d;height:36.9230769231px;width:36.9230769231px;cursor:pointer;text-align:center;display:inline-block;position:relative;z-index:100}.duet-theme-turva.sc-duet-date-picker .duet-date-table-button.sc-duet-date-picker{font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";color:#171c3a}.duet-date-table-button.sc-duet-date-picker:hover{background:#e6f2f8}.duet-theme-turva.sc-duet-date-picker .duet-date-table-button.sc-duet-date-picker:hover{background:#f9e6ea}.duet-date-table-button.today.sc-duet-date-picker{z-index:200;background:#f3f9fc;box-shadow:0 0 0 1px #0077b3;color:#004d80}.duet-theme-turva.sc-duet-date-picker .duet-date-table-button.today.sc-duet-date-picker{background:#fcf3f4;box-shadow:0 0 0 1px #c60c30;color:#940925}.duet-date-table-button[aria-selected=true].sc-duet-date-picker,.duet-date-table-button.sc-duet-date-picker:focus{box-shadow:none;outline:0;background:#0077b3;color:white}.duet-theme-turva.sc-duet-date-picker .duet-date-table-button[aria-selected=true].sc-duet-date-picker,.duet-theme-turva.sc-duet-date-picker .duet-date-table-button.sc-duet-date-picker:focus{background:#c60c30;color:white}.duet-date-table-button.sc-duet-date-picker:active{z-index:200;box-shadow:0 0 5px #0077b3;background:#0077b3;color:white}.duet-theme-turva.sc-duet-date-picker .duet-date-table-button.sc-duet-date-picker:active{box-shadow:0 0 5px #c60c30;background:#c60c30;color:white}.duet-date-table-button.sc-duet-date-picker:focus{z-index:200;box-shadow:0 0 5px #0077b3}.duet-theme-turva.sc-duet-date-picker .duet-date-table-button.sc-duet-date-picker:focus{box-shadow:0 0 5px #c60c30}.duet-date-table-button.disabled.sc-duet-date-picker{color:#909599;background:transparent;box-shadow:none;cursor:default}.duet-theme-turva.sc-duet-date-picker .duet-date-table-button.disabled.sc-duet-date-picker{color:#757575;background:transparent;box-shadow:none}.duet-date-table-button.outside.sc-duet-date-picker{pointer-events:none;cursor:default;box-shadow:none;opacity:0.75;background:#f5f8fa;box-shadow:none;color:#909599}.duet-theme-turva.sc-duet-date-picker .duet-date-table-button.outside.sc-duet-date-picker{background:#f7f7f7;color:#757575;box-shadow:none}.duet-date-dialog-header.sc-duet-date-picker{margin-bottom:16px !important;display:flex;width:100%;align-items:center;justify-content:space-between}.duet-date-dialog-buttons.sc-duet-date-picker{white-space:nowrap}.duet-date-dialog-buttons.sc-duet-date-picker button.sc-duet-date-picker{color:#00294d;transition:background-color 300ms ease;background:#f5f8fa;border-radius:50%;width:32px;height:32px;margin-left:8px;cursor:pointer;align-items:center;justify-content:center;display:inline-flex}.duet-theme-turva.sc-duet-date-picker .duet-date-dialog-buttons.sc-duet-date-picker button.sc-duet-date-picker{color:#171c3a;background:#f7f7f7}.duet-date-dialog-buttons.sc-duet-date-picker button.sc-duet-date-picker duet-icon.sc-duet-date-picker{display:block}@media (max-width: 35.9375em){.duet-date-dialog-buttons.sc-duet-date-picker button.sc-duet-date-picker{width:40px;height:40px}}.duet-date-dialog-buttons.sc-duet-date-picker button.sc-duet-date-picker:not(:disabled):hover{background:#e9ecee}.duet-theme-turva.sc-duet-date-picker .duet-date-dialog-buttons.sc-duet-date-picker button.sc-duet-date-picker:not(:disabled):hover{background:#ebebeb}.duet-date-dialog-buttons.sc-duet-date-picker button.sc-duet-date-picker:focus{outline:0;box-shadow:0 0 0 2px #0077b3}.duet-theme-turva.sc-duet-date-picker .duet-date-dialog-buttons.sc-duet-date-picker button.sc-duet-date-picker:focus{box-shadow:0 0 0 2px #171c3a}.duet-date-dialog-buttons.sc-duet-date-picker button.sc-duet-date-picker:active:focus{box-shadow:none;background:#dddfe1}.duet-theme-turva.sc-duet-date-picker .duet-date-dialog-buttons.sc-duet-date-picker button.sc-duet-date-picker:active:focus{background:#dedede}.duet-date-dialog-buttons.sc-duet-date-picker button.sc-duet-date-picker:disabled{cursor:default;opacity:0.75;background:#f5f8fa;color:#909599}.duet-theme-turva.sc-duet-date-picker .duet-date-dialog-buttons.sc-duet-date-picker button.sc-duet-date-picker:disabled{background:#f7f7f7;color:#757575}.duet-date-dialog-select.sc-duet-date-picker{margin-top:4px;position:relative;display:inline-flex}.duet-date-dialog-select.sc-duet-date-picker .duet-date-dialog-select-label.sc-duet-date-picker{border-radius:4px;padding:0 8px;position:relative;pointer-events:none;align-items:center;display:flex;z-index:1;width:100%;font-size:1.25rem;font-weight:600;line-height:1.25;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";color:#00294d}.duet-theme-turva.sc-duet-date-picker .duet-date-dialog-select.sc-duet-date-picker .duet-date-dialog-select-label.sc-duet-date-picker{font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";color:#171c3a}.duet-date-dialog-select.sc-duet-date-picker span.sc-duet-date-picker{margin-right:4px}.duet-date-dialog-select.sc-duet-date-picker select.sc-duet-date-picker{font-size:1rem;cursor:pointer;opacity:0;width:100%;height:100%;z-index:2;position:absolute;top:0;left:0}.duet-date-dialog-select.sc-duet-date-picker select.sc-duet-date-picker:focus+.duet-date-dialog-select-label.sc-duet-date-picker{box-shadow:0 0 0 2px #0077b3}.duet-theme-turva.sc-duet-date-picker .duet-date-dialog-select.sc-duet-date-picker select.sc-duet-date-picker:focus+.duet-date-dialog-select-label.sc-duet-date-picker{box-shadow:0 0 0 2px #171c3a}.duet-date-dialog-mobile-header.sc-duet-date-picker{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:120%;margin-left:-10%;margin-bottom:20px;padding:12px 20px;border-bottom:1px solid #cfd2d4;display:flex;position:relative;justify-content:space-between;align-items:center}@media (min-width: 36em){.duet-date-dialog-mobile-header.sc-duet-date-picker{position:absolute;overflow:visible;top:-8px;right:-8px;width:auto;margin:0;border:0;padding:0}}.duet-theme-turva.sc-duet-date-picker .duet-date-dialog-mobile-header.sc-duet-date-picker{border-color:#d1d1d1}.duet-date-dialog-mobile-header.sc-duet-date-picker duet-label.sc-duet-date-picker{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:inline-block;max-width:84%}@media (min-width: 36em){.duet-date-dialog-mobile-header.sc-duet-date-picker duet-label.sc-duet-date-picker{display:none}}.duet-date-picker-close.sc-duet-date-picker{-webkit-appearance:none;appearance:none;padding:0;background:#f5f8fa;width:24px;height:24px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center}@media (min-width: 36em){.duet-date-picker-close.sc-duet-date-picker{opacity:0}}.duet-theme-turva.sc-duet-date-picker .duet-date-picker-close.sc-duet-date-picker{background:#f7f7f7}.duet-date-picker-close.sc-duet-date-picker:focus{outline:none;box-shadow:0 0 0 2px #0077b3}@media (min-width: 36em){.duet-date-picker-close.sc-duet-date-picker:focus{opacity:1}}.duet-theme-turva.sc-duet-date-picker .duet-date-picker-close.sc-duet-date-picker:focus{box-shadow:0 0 0 2px #171c3a}';function _(e,t){var a=[];for(var i=0;i<=t-e;i++){a.push(e+i)}return a}var P={TAB:9,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};var B=/[^0-9\.]+/g;var H=400;var U=e("duet_date_picker",function(){function e(e){var t=this;a(this,e);this.duetChange=i(this,"duetChange",7);this.duetBlur=i(this,"duetBlur",7);this.duetFocus=i(this,"duetFocus",7);this.monthSelectId=r("DuetDatePicker");this.yearSelectId=r("DuetDatePicker");this.dialogLabelId=r("DuetDatePicker");this.initialTouchX=null;this.initialTouchY=null;this.activeFocus=false;this.open=false;this.focusedDay=new Date;this.theme="";this.expand=false;this.name="";this.identifier="";this.label="";this.margin="auto";this.placeholder="dd.mm.yyyy";this.disabled=false;this.language="fi";this.error="";this.labelHidden=false;this.tooltip="";this.value="";this.min="";this.max="";this.enableActiveFocus=function(){t.activeFocus=true};this.disableActiveFocus=function(){t.activeFocus=false};this.toggleOpen=function(e){e.preventDefault();t.open?t.hide(false):t.show()};this.handleEscKey=function(e){if(e.keyCode===P.ESC){t.hide()}};this.handleBlur=function(e){e.stopPropagation();t.duetBlur.emit({component:"duet-date-picker"})};this.handleFocus=function(e){e.stopPropagation();t.duetFocus.emit({component:"duet-date-picker"})};this.handleTouchStart=function(e){var a=e.changedTouches[0];t.initialTouchX=a.pageX;t.initialTouchY=a.pageY};this.handleTouchMove=function(e){e.preventDefault()};this.handleTouchEnd=function(e){var a=e.changedTouches[0];var i=a.pageX-t.initialTouchX;var o=a.pageY-t.initialTouchY;var d=70;var n=Math.abs(i)>=d&&Math.abs(o)<=d;var r=Math.abs(o)>=d&&Math.abs(i)<=d&&o>0;if(n){t.addMonths(i<0?1:-1)}else if(r){t.hide();e.preventDefault()}t.initialTouchY=null;t.initialTouchX=null};this.handleNextMonthClick=function(e){e.preventDefault();t.addMonths(1)};this.handlePreviousMonthClick=function(e){e.preventDefault();t.addMonths(-1)};this.handleFirstFocusableKeydown=function(e){if(e.keyCode===P.TAB&&e.shiftKey){t.focusedDayNode.focus();e.preventDefault()}};this.handleKeyboardNavigation=function(e){if(e.keyCode===P.TAB&&!e.shiftKey){e.preventDefault();t.firstFocusableElement.focus();return}var a=true;switch(e.keyCode){case P.RIGHT:t.addDays(1);break;case P.LEFT:t.addDays(-1);break;case P.DOWN:t.addDays(7);break;case P.UP:t.addDays(-7);break;case P.PAGE_UP:if(e.shiftKey){t.addYears(-1)}else{t.addMonths(-1)}break;case P.PAGE_DOWN:if(e.shiftKey){t.addYears(1)}else{t.addMonths(1)}break;case P.HOME:t.startOfWeek();break;case P.END:t.endOfWeek();break;default:a=false}if(a){e.preventDefault();t.enableActiveFocus()}};this.handleDaySelect=function(e,a){if(!L(a,g(t.min),g(t.max))){return}if(a.getMonth()===t.focusedDay.getMonth()){t.setValue(a);t.hide()}else{t.setFocusedDay(a)}};this.handleMonthSelect=function(e){t.setMonth(parseInt(e.target.value,10))};this.handleYearSelect=function(e){t.setYear(parseInt(e.target.value,10))};this.handleInputChange=function(e){var a=e.target;a.value=a.value.replace(B,"");var i=f(a.value);if(i||a.value===""){t.setValue(i)}};this.processFocusedDayNode=function(e){t.focusedDayNode=e;if(t.activeFocus&&t.open){setTimeout((function(){return e.focus()}),0)}}}e.prototype.componentWillLoad=function(){n(this)};e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,this.datePickerInput.setFocus()]}))}))};e.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(t){this.open=true;this.setFocusedDay(g(this.value)||new Date);clearTimeout(this.focusTimeoutId);this.focusTimeoutId=setTimeout((function(){return e.monthSelectNode.focus()}),H);return[2]}))}))};e.prototype.hide=function(e){if(e===void 0){e=true}return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(a){this.open=false;clearTimeout(this.focusTimeoutId);if(e){setTimeout((function(){return t.datePickerButton.focus()}),H)}return[2]}))}))};e.prototype.addDays=function(e){this.setFocusedDay(x(this.focusedDay,e))};e.prototype.addMonths=function(e){this.setMonth(this.focusedDay.getMonth()+e)};e.prototype.addYears=function(e){this.setYear(this.focusedDay.getFullYear()+e)};e.prototype.startOfWeek=function(){this.setFocusedDay(w(this.focusedDay))};e.prototype.endOfWeek=function(){this.setFocusedDay(D(this.focusedDay))};e.prototype.setMonth=function(e){var t=F(S(this.focusedDay),e);var a=M(t);var i=F(this.focusedDay,e);this.setFocusedDay(T(i,t,a))};e.prototype.setYear=function(e){var t=I(S(this.focusedDay),e);var a=M(t);var i=I(this.focusedDay,e);this.setFocusedDay(T(i,t,a))};e.prototype.setFocusedDay=function(e){this.focusedDay=T(e,g(this.min),g(this.max))};e.prototype.setValue=function(e){this.value=k(e);this.duetChange.emit({component:"duet-date-picker",value:this.value,valueAsDate:e})};e.prototype.handleDocumentClick=function(e){if(!this.open){return}var t=e.target;if(this.dialogWrapperNode.contains(t)||this.datePickerButton.contains(t)){return}this.hide(false)};e.prototype.render=function(){var e=this;var a=g(this.value);var i=v(a);var d=(a||this.focusedDay).getFullYear();var n=this.focusedDay.getMonth();var r=this.focusedDay.getFullYear();var u=E[this.language];var c=g(this.min);var l=g(this.max);var p=c!=null&&c.getMonth()===n;var h=l!=null&&l.getMonth()===n;return t(o,{class:{"duet-expand":this.expand,"duet-m-0":this.margin==="none"}},t("div",{class:"duet-date"},t(s,{value:i,onInput:this.handleInputChange,onBlur:this.handleBlur,onFocus:this.handleFocus,onClick:this.toggleOpen,name:this.name,disabled:this.disabled,error:this.error,role:this.role,theme:this.theme,tooltip:this.tooltip,labelHidden:this.labelHidden,placeholder:this.placeholder,inputLabel:this.label,buttonLabel:u.buttonLabel,identifier:this.identifier,buttonRef:function(t){return e.datePickerButton=t},inputRef:function(t){return e.datePickerInput=t}})),t("div",{class:{"duet-theme-turva":this.theme==="turva","duet-date-dialog":true,error:!!this.error,active:this.open},role:"dialog","aria-modal":"true","aria-labelledby":this.dialogLabelId,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},t("div",{class:"duet-date-dialog-wrapper",onKeyDown:this.handleEscKey,ref:function(t){return e.dialogWrapperNode=t}},t("div",{class:"duet-date-dialog-mobile-header",onFocusin:this.disableActiveFocus},t("duet-label",{margin:"none"},this.label),t("button",{class:"duet-date-picker-close",ref:function(t){return e.firstFocusableElement=t},onKeyDown:this.handleFirstFocusableKeydown,onClick:function(){return e.hide()},"aria-label":u.closeLabel,type:"button"},t("duet-icon",{name:"navigation-close-small",margin:"none",color:"currentColor",size:"xx-small"}))),t("div",{class:"duet-date-dialog-header",onFocusin:this.disableActiveFocus},t("div",{class:"duet-date-dialog-dropdowns"},t("duet-visually-hidden",null,t("h2",{id:this.dialogLabelId,"aria-live":"polite"},u.monthLabels[n]," ",this.focusedDay.getFullYear())),t("duet-visually-hidden",null,t("label",{htmlFor:this.monthSelectId},u.monthSelectLabel)),t("div",{class:"duet-date-dialog-select"},t("select",{id:this.monthSelectId,class:"duet-date-month-select",ref:function(t){return e.monthSelectNode=t},onChange:this.handleMonthSelect},u.monthLabels.map((function(e,a){return t("option",{value:a,selected:a===n},e)}))),t("div",{class:"duet-date-dialog-select-label","aria-hidden":"true"},t("span",null,u.monthLabelsShort[n]),t("duet-icon",{name:"action-arrow-down-small",color:"currentColor",margin:"none",size:"xxx-small"}))),t("duet-visually-hidden",null,t("label",{htmlFor:this.yearSelectId},u.yearSelectLabel)),t("div",{class:"duet-date-dialog-select"},t("select",{id:this.yearSelectId,class:"duet-date-year-select",onChange:this.handleYearSelect},_(d-10,d+10).map((function(e){return t("option",{selected:e===r},e)}))),t("div",{class:"duet-date-dialog-select-label","aria-hidden":"true"},t("span",null,this.focusedDay.getFullYear()),t("duet-icon",{name:"action-arrow-down-small",color:"currentColor",margin:"none",size:"xxx-small"})))),t("div",{class:"duet-date-dialog-buttons"},t("button",{class:"duet-date-dialog-prev","aria-label":u.prevMonthLabel,onClick:this.handlePreviousMonthClick,disabled:p,type:"button"},t("duet-icon",{name:"action-arrow-left-small",color:"currentColor",margin:"none",size:"xx-small"})),t("button",{class:"duet-date-dialog-next","aria-label":u.nextMonthLabel,onClick:this.handleNextMonthClick,disabled:h,type:"button"},t("duet-icon",{name:"action-arrow-right-small",color:"currentColor",margin:"none",size:"xx-small"})))),t(z,{selectedDate:a,focusedDate:this.focusedDay,onDateSelect:this.handleDaySelect,onKeyboardNavigation:this.handleKeyboardNavigation,labelledById:this.dialogLabelId,language:this.language,theme:this.theme,focusedDayRef:this.processFocusedDayNode,min:c,max:l}),t("duet-visually-hidden",{"aria-live":"polite"},u.keyboardInstruction))))};Object.defineProperty(e.prototype,"element",{get:function(){return d(this)},enumerable:false,configurable:true});return e}());U.style=j}}}));
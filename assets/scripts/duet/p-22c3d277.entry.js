import{r as t,c as e,h as i,g as a}from"./p-f5c88521.js";import{i as o}from"./p-82a9722f.js";import{j as s}from"./p-b8b300bf.js";import{h as d,f as n}from"./p-a4f57ab0.js";import{d as r,e as l}from"./p-c2e2e558.js";const h=class{constructor(i){t(this,i),this.duetOpen=e(this,"duetOpen",7),this.duetClose=e(this,"duetClose",7),this.duetBeforeClose=e(this,"duetBeforeClose",7),this.modalId=s("DuetModal"),this.open=!1,this.size="medium",this.theme="",this.heading="",this.icon="",this.color="",this.active=!1,this.handleKeyDown=t=>{this.open&&t.shiftKey&&d(t)&&t.preventDefault()},this.handleLastElement=t=>{if(this.open&&!t.shiftKey&&d(t)){const e=this.element.querySelectorAll('duet-button, duet-checkbox, duet-choice, duet-input, duet-link, duet-radio, duet-range-slider, duet-select, duet-tab, duet-textarea, duet-toggle, a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');this.lastFocusableEl=e[e.length-1],document.activeElement===this.lastFocusableEl&&(t.preventDefault(),this.buttonEl.setFocus())}}}openChanged(){this.open?(this.modalEl&&this.modalEl.scrollTop&&(this.modalEl.scrollTop=0),this.focusedElBeforeOpen=document.activeElement,r(this.modalEl),setTimeout(()=>{this.buttonEl.setFocus()},400),setTimeout(()=>{this.modalEl.classList.add("duet-disable-transitions")},600),this.duetOpen.emit()):(this.modalEl.classList.remove("duet-disable-transitions"),l(this.modalEl),this.duetClose.emit(),setTimeout(()=>{this.focusedElBeforeOpen&&(this.focusedElBeforeOpen.setFocus?this.focusedElBeforeOpen.setFocus():this.focusedElBeforeOpen.focus())},400))}activeChanged(){this.open=this.active}componentWillLoad(){o(this)}componentDidLoad(){this.active&&(this.open=!0,this.modalEl.classList.add("duet-disable-transitions"))}disconnectedCallback(){l(this.modalEl)}handleKeyUp(t){this.open&&n(t)&&this.closeModal(t)}async show(){this.open=!0}async hide(){this.open=!1}closeModal(t){this.duetBeforeClose.emit({originalEvent:t,component:"duet-modal"}),t.defaultPrevented||setTimeout(()=>{this.hide()},1)}render(){let t="primary",e="secondary";return"turva"===this.theme&&(t="primary-turva",e="secondary-turva"),i("div",{ref:t=>this.modalEl=t,"aria-labelledby":!!this.heading&&this.modalId,onKeyDown:t=>this.handleLastElement(t),"aria-modal":"true",role:"dialog",tabindex:"-1",class:{"duet-modal-overlay":!0,"duet-theme-turva":"turva"===this.theme,"duet-modal-active":this.open}},i("div",{class:"duet-modal-inner"},i("div",{class:{"duet-modal":!0,[this.size]:!0}},i("duet-spacer",null),i("div",{class:"duet-modal-close"},i("duet-button",{ref:t=>this.buttonEl=t,variation:"plain","accessible-label":"Sulje ikkuna",color:e,"icon-size":"large",icon:"navigation-close","icon-only":!0,margin:"none",theme:this.theme,onKeyDown:t=>this.handleKeyDown(t),onClick:t=>this.closeModal(t),fixed:!0})),i("div",{class:"duet-modal-body"},i("div",{class:"duet-modal-header"},this.icon&&i("duet-icon",{name:this.icon,size:"xx-large",color:this.color||t}),this.heading&&i("duet-heading",{level:"h3",theme:this.theme,id:this.modalId},this.heading)),i("slot",null)))))}get element(){return a(this)}static get watchers(){return{open:["openChanged"],active:["activeChanged"]}}};h.style='*,*::after,*::before{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0}:host{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0}.duet-modal-overlay{transition:300ms ease;transition-delay:200ms;position:fixed;max-height:100vh;z-index:900;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);top:0;left:0;bottom:0;right:0;overflow-y:auto;opacity:0;visibility:hidden;background:rgba(0, 41, 77, 0.85)}.duet-modal-overlay.duet-theme-turva{background:rgba(23, 28, 58, 0.85)}.duet-modal-overlay.duet-modal-active{transition:300ms ease;transition-delay:0;opacity:1;visibility:visible}.duet-modal-overlay.duet-disable-transitions{transition:none}.duet-modal-inner{width:100%;min-height:100%;padding:20px 16px;display:flex;align-items:center}@media (min-width: 36em){.duet-modal-inner{padding:48px 16px}}.duet-modal{margin:auto;transition:300ms ease;transition-delay:0;will-change:transform, opacity;transform:scale(0.96);font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-weight:400;line-height:1.5;color:#00294d;-moz-font-feature-settings:"ss01";-webkit-font-feature-settings:"ss01";font-feature-settings:"ss01";font-variant-numeric:tabular-nums;background:white;border-radius:4px;position:relative;width:100%;overflow:hidden;max-width:686px;opacity:0}.duet-modal-active .duet-modal{transition:300ms ease;transition-delay:200ms;transform:scale(0.9999);opacity:1}.duet-disable-transitions .duet-modal{transition:none}.duet-modal.small{max-width:545px}.duet-modal:focus{outline:0}.duet-modal-body{padding:36px 28px 36px;width:100%}@media (max-width: 22.5em){.duet-modal-body{padding:36px 20px 36px}}@media (min-width: 36em){.duet-modal-body{padding:36px}}@media (min-width: 48em){.duet-modal-body{padding:36px 48px 36px}}@media (min-width: 76.25em){.duet-modal-body{padding:36px 48px 48px}.small .duet-modal-body{padding:36px 48px 36px}}.duet-modal-header{text-align:center}.duet-modal-close{position:absolute;top:12px;right:12px}.duet-modal-heading{padding-right:60px;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-weight:600;font-size:1.25rem;line-height:1.25;letter-spacing:-0.01rem;color:#00294d;-moz-font-feature-settings:"ss01";-webkit-font-feature-settings:"ss01";text-decoration:none;font-feature-settings:"ss01";font-variant-numeric:tabular-nums;font-style:normal;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}.duet-modal-heading.duet-p-0{padding:0 !important}.duet-modal-heading.duet-m-0{margin:0 !important}';export{h as duet_modal}
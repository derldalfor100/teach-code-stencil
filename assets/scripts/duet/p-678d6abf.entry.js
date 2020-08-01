import{r as e,c as t,h as s,H as c,g as l}from"./p-f5c88521.js";import{i as o}from"./p-82a9722f.js";import{p as i}from"./p-ca791aae.js";import{j as a}from"./p-b8b300bf.js";function r(e){return"options"in e}const d=class{constructor(s){e(this,s),this.duetChange=t(this,"duetChange",3),this.duetFocus=t(this,"duetFocus",7),this.duetBlur=t(this,"duetBlur",7),this.selectId=a("DuetSelect"),this.errorId=a("DuetError"),this.labelId=a("DuetLabel"),this.processedItems=null,this.margin="auto",this.error="",this.expand=!1,this.theme="",this.labelHidden=!1,this.placeholder="",this.disabled=!1,this.label="label",this.tooltip="",this.onClick=e=>{e.stopPropagation()},this.onChange=()=>{this.value=this.nativeSelect.value,this.duetChange.emit({value:this.value,component:"duet-select"})},this.onBlur=e=>{this.duetBlur.emit({originalEvent:e,value:this.value,component:"duet-select"})},this.onFocus=e=>{this.duetFocus.emit({originalEvent:e,value:this.value,component:"duet-select"})}}valueChanged(){this.nativeSelect&&(this.nativeSelect.value=this.value)}itemsChanged(){this.refresh()}componentWillLoad(){o(this),this.refresh()}async setFocus(){const e=this.element.querySelector("select");e&&e.focus()}async refresh(){this.processedItems=i(this.items)}getSelectedItemLabel(){let e;return this.processedItems&&(e=function e(t,s){for(var c=0;c<t.length;c++){let l=t[c];if(r(l)&&(l=e(l.options,s)),l&&l.value===s)return l}}(this.processedItems,this.value)),e?e.label:this.placeholder||""}renderOption(e){return s("option",{value:e.value,selected:this.value===e.value,disabled:e.disabled},e.label)}renderOptionGroup(e){return s("optgroup",{label:e.label,disabled:e.disabled},e.options.map(e=>this.renderOption(e)))}render(){const e=this.identifier||this.selectId;return s(c,{onClick:this.onClick,class:{"duet-m-0":"none"===this.margin,"duet-expand":this.expand}},s("div",{class:{"duet-select-container":!0,"duet-label-hidden":this.labelHidden,"duet-theme-turva":"turva"===this.theme,"has-error":!!this.error}},s("duet-label",{theme:"turva"===this.theme?"turva":"default",class:{"duet-has-tooltip":!!this.tooltip},id:this.labelId,for:e},this.label),this.tooltip&&s("duet-tooltip",null,this.tooltip),s("div",{class:"duet-select-wrapper"},s("select",{ref:e=>this.nativeSelect=e,disabled:this.disabled,name:this.name,id:e,role:this.role,"aria-labelledby":`${this.labelId} ${this.errorId}`,"aria-controls":this.accessibleControls,"aria-active-descendant":this.accessibleActiveDescendant,"aria-owns":this.accessibleOwns,onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.onChange},this.placeholder&&s("option",{disabled:!0,selected:!0,value:""},this.placeholder),this.processedItems?this.processedItems.map(e=>r(e)?this.renderOptionGroup(e):this.renderOption(e)):s("option",null,"Virhe valintoja ladattaessa. Päivitä sivu ja kokeile uusiksi.")),s("div",{class:"duet-select","aria-hidden":"true"},s("span",null,this.getSelectedItemLabel()),s("svg",{role:"img",class:"duet-select-icon",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"m12 18.999c-.4 0-.776-.156-1.059-.438l-10.721-10.72c-.142-.142-.22-.33-.22-.531 0-.2.078-.389.22-.53.142-.142.33-.22.53-.22s.389.078.53.22l10.72 10.719 10.72-10.719c.142-.142.33-.22.53-.22s.389.078.53.22c.142.142.22.33.22.53s-.078.389-.22.53l-10.72 10.72c-.282.283-.659.439-1.06.439z"})))),s("span",{class:"duet-select-help",id:this.errorId,"aria-live":"assertive","aria-relevant":"additions removals"},this.error&&s("span",null,this.error))))}get element(){return l(this)}static get watchers(){return{value:["valueChanged"],items:["itemsChanged"]}}};d.style='@charset "UTF-8";*.sc-duet-select,*.sc-duet-select::after,*.sc-duet-select::before{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0}.sc-duet-select-h{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0;margin-right:16px !important;margin-bottom:12px !important;display:inline-flex;vertical-align:bottom;max-width:100%;width:100%}.sc-duet-select-h:last-child,.sc-duet-select-h:last-of-type{margin-right:0 !important}@media (min-width: 36em){.sc-duet-select-h{width:calc(50% - 16px - 3px)}.duet-expand.sc-duet-select-h{width:100% !important}}.duet-m-0.sc-duet-select-h{margin:0 !important}duet-tooltip.sc-duet-select{position:absolute;top:12px;right:0}@media (min-width: 48em){duet-tooltip.sc-duet-select{position:relative;top:4px;right:auto}}.duet-select-container.sc-duet-select{position:relative;width:100%}.duet-select-wrapper.sc-duet-select{padding:16px !important;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:1rem;font-weight:400;line-height:1.25;position:relative;width:100%}.duet-theme-turva.sc-duet-select .duet-select-wrapper.sc-duet-select{font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"}.duet-select-wrapper.sc-duet-select::after{content:"  "}.duet-select-wrapper.sc-duet-select select.sc-duet-select{top:0;left:0;margin:0;right:0;bottom:0;padding:0;position:absolute;font-size:1rem;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";z-index:200;border:0;height:100%;width:100%;cursor:pointer;outline:none;opacity:0}.duet-theme-turva.sc-duet-select .duet-select-wrapper.sc-duet-select select.sc-duet-select{font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"}.duet-select-wrapper.sc-duet-select select.sc-duet-select:hover+.duet-select.sc-duet-select{border-color:#909599;box-shadow:0 0 0 1px #909599}.duet-theme-turva.sc-duet-select .duet-select-wrapper.sc-duet-select select.sc-duet-select:hover+.duet-select.sc-duet-select{border-color:#757575;box-shadow:0 0 0 1px #757575}.has-error.sc-duet-select .duet-select-wrapper.sc-duet-select select.sc-duet-select:hover+.duet-select.sc-duet-select{box-shadow:0 0 0 1px #de2362}.duet-theme-turva.has-error.sc-duet-select .duet-select-wrapper.sc-duet-select select.sc-duet-select:hover+.duet-select.sc-duet-select{box-shadow:0 0 0 1px #e02a0d}.duet-select-wrapper.sc-duet-select select.sc-duet-select:focus+.duet-select.sc-duet-select{transition:none;border-color:#0077b3;box-shadow:0 0 0 1px #0077b3;outline:0}.duet-theme-turva.sc-duet-select .duet-select-wrapper.sc-duet-select select.sc-duet-select:focus+.duet-select.sc-duet-select{border-color:#171c3a;box-shadow:0 0 0 1px #171c3a}.duet-theme-turva.sc-duet-select .duet-select-wrapper.sc-duet-select select.sc-duet-select:focus+.duet-select.sc-duet-select .duet-select-icon.sc-duet-select{color:#171c3a}.duet-select-wrapper.sc-duet-select select.sc-duet-select:focus+.duet-select.sc-duet-select .duet-select-icon.sc-duet-select{color:#0077b3}.has-error.sc-duet-select .duet-select-wrapper.sc-duet-select select.sc-duet-select:focus+.duet-select.sc-duet-select{box-shadow:0 0 0 1px #de2362}.duet-theme-turva.has-error.sc-duet-select .duet-select-wrapper.sc-duet-select select.sc-duet-select:focus+.duet-select.sc-duet-select{box-shadow:0 0 0 1px #e02a0d}.duet-select-wrapper.sc-duet-select select[disabled].sc-duet-select{cursor:default !important}.duet-select-wrapper.sc-duet-select select[disabled].sc-duet-select+.duet-select.sc-duet-select{cursor:default !important;border-color:#f5f8fa !important;background:#f5f8fa !important;color:#00294d !important;-webkit-text-fill-color:#00294d !important;box-shadow:none !important;opacity:1 !important}.duet-theme-turva.sc-duet-select .duet-select-wrapper.sc-duet-select select[disabled].sc-duet-select+.duet-select.sc-duet-select{border-color:#f7f7f7 !important;background:#f7f7f7 !important;color:#171c3a !important;-webkit-text-fill-color:#171c3a !important}.duet-select.sc-duet-select{padding:15px !important;padding-right:48px !important;position:absolute;text-align:left;left:0;top:0;bottom:0;right:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-variant-numeric:tabular-nums;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";border:1px solid #909599;border-radius:4px;font-size:1rem;background:white;color:#00294d;font-weight:400;line-height:1.25;transition:150ms ease;z-index:100;min-width:8rem;width:100%;display:block}.has-error.sc-duet-select .duet-select.sc-duet-select{border-color:#de2362 !important}.has-error.sc-duet-select .duet-select.sc-duet-select .duet-select-icon.sc-duet-select{color:#de2362 !important}.duet-theme-turva.has-error.sc-duet-select .duet-select.sc-duet-select{border-color:#e02a0d !important}.duet-theme-turva.has-error.sc-duet-select .duet-select.sc-duet-select .duet-select-icon.sc-duet-select{color:#e02a0d !important}.duet-theme-turva.sc-duet-select .duet-select.sc-duet-select{color:#171c3a;font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";border-color:#757575}.duet-select-help.sc-duet-select{font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";border-radius:4px;font-size:0.875rem;color:#657787;font-weight:400;line-height:1.25;display:block}.duet-select-help.sc-duet-select span.sc-duet-select{display:block;margin-top:8px}.duet-theme-turva.sc-duet-select .duet-select-help.sc-duet-select{color:#757575}.has-error.sc-duet-select .duet-select-help.sc-duet-select{color:#de2362}.duet-theme-turva.has-error.sc-duet-select .duet-select-help.sc-duet-select{color:#e02a0d}.duet-select.sc-duet-select svg.sc-duet-select{pointer-events:none;z-index:200;width:20px;height:20px;color:#00294d;position:absolute;top:50%;transform:translateY(-50%);right:16px}.duet-theme-turva.sc-duet-select .duet-select.sc-duet-select svg.sc-duet-select{color:#171c3a}.duet-label-hidden.sc-duet-select duet-label.sc-duet-select{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}';export{d as duet_select}
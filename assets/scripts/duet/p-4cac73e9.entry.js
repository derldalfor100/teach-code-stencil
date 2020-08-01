import{r as t,c as o,h as e,H as n,g as r}from"./p-f5c88521.js";import{i}from"./p-82a9722f.js";import{b as a}from"./p-b8b300bf.js";import{t as d}from"./p-54875410.js";const u=class{constructor(e){t(this,e),this.duetFocus=o(this,"duetFocus",7),this.duetBlur=o(this,"duetBlur",7),this.accessibleExpanded=!1,this.accessiblePressed=!1,this.loading=!1,this.variation="default",this.theme="",this.margin="auto",this.padding="auto",this.wrapping="auto",this.expand=!1,this.fixed=!1,this.disabled=!1,this.submit=!1,this.external=!1,this.icon="",this.color="",this.iconRight=!1,this.iconSize="medium",this.size="medium",this.iconOnly=!1,this.handleClick=t=>{if(this.disabled)return void t.preventDefault();const o=this.element.closest("form");if(this.submit&&o){t.preventDefault();const e=document.createElement("button");e.type="submit",e.style.display="none",o.appendChild(e),e.click(),e.remove()}},this.onFocus=()=>{this.duetFocus.emit()},this.onBlur=()=>{this.duetBlur.emit()}}componentWillLoad(){i(this)}async setFocus(){this.nativeButton&&this.nativeButton.focus()}render(){const t=this.submit?"submit":"button",o=this.url?"a":"button",r={color:d[a(this.color)]};return"loading"===this.variation&&console.error("[DUET COMPONENTS]: 'loading' variation of Button has been deprecated and is replaced with a new 'loading' prop that can be used with any existing variation."),e(n,{onClick:this.handleClick,class:{"duet-m-0":"none"===this.margin,"duet-small":"small"===this.size,"duet-fixed":this.fixed,"duet-expand":this.expand}},e("div",{class:{"duet-button-container":!0,"duet-button-is-loading":this.loading,"duet-theme-turva":"turva"===this.theme,[this.variation]:!0}},e(o,{onFocus:this.onFocus,onBlur:this.onBlur,ref:t=>this.nativeButton=t,type:"button"===o?t:null,href:this.url,class:{"duet-m-0":"none"===this.margin,"duet-p-0":"none"===this.padding,"duet-no-wrap":"none"===this.wrapping,"duet-button":!0,"duet-button-is-small":"small"===this.size,"duet-button-icon-only":this.iconOnly,[this.variation]:!0,disabled:this.disabled,icon:!!this.icon,"icon-right":this.iconRight,[this.iconSize]:!0},target:this.external?"_blank":"_self","aria-controls":this.accessibleControls,"aria-label":this.accessibleLabel,"aria-expanded":this.accessibleExpanded,"aria-pressed":this.accessiblePressed,disabled:this.disabled,id:this.identifier},e("span",{class:"duet-button-contents",style:r},this.icon&&e("div",{"aria-hidden":"true",class:{"duet-button-icon":!0,left:!this.iconRight,right:this.iconRight,[this.iconSize]:!0}},e("duet-icon",{size:"auto",margin:"none",name:this.icon,color:"currentColor"})),e("slot",null))),"loading"===this.variation&&e("duet-spinner",null),this.loading&&e("duet-spinner",{color:"currentColor"})))}get element(){return r(this)}};u.style='*,*::after,*::before{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0}:host{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0;margin-right:8px !important;margin-bottom:12px !important;display:inline-flex;position:relative;z-index:1;-webkit-tap-highlight-color:transparent;vertical-align:bottom;max-width:100%;width:auto}:host:last-child,:host:last-of-type{margin-right:0 !important}@media (max-width: 35.9375em){:host{width:100%}}:host(.duet-small){margin-right:2px !important;margin-bottom:8px !important}:host(.duet-small):last-child,:host(.duet-small):last-of-type{margin-right:0 !important}@media (max-width: 35.9375em){:host(.duet-small){width:auto}}:host(.duet-expand){width:100% !important}:host(.duet-m-0){margin:0 !important}:host(.duet-fixed){width:auto !important}:host(:last-child){margin-right:0 !important}.duet-button{padding:14px 27px 15px !important;-webkit-user-select:none;user-select:none;-webkit-hyphens:auto;hyphens:auto;border-width:2px;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:1rem;background:transparent;color:#0077b3 !important;border-radius:20rem;font-weight:600;line-height:1.1;transition:background-color 300ms ease, color 300ms ease, border 300ms ease, box-shadow 300ms ease;min-width:8rem;z-index:100;width:100%;border-style:solid;position:relative;display:block;text-align:center;text-decoration:none;cursor:pointer}.duet-button.duet-p-0{padding:0 !important}.duet-button.duet-m-0{margin:0 !important}.duet-button.duet-button-is-small{padding:9px 19px 10px !important;font-size:0.875rem;min-width:5.3333333333rem}.duet-theme-turva .duet-button{font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";color:#c60c30 !important}.duet-button-container{position:relative;width:100%}.duet-button-contents{pointer-events:none;position:relative;margin:0 auto;display:inline-block}.duet-button.duet-no-wrap{white-space:nowrap}.duet-button.icon{padding-left:52px !important}.duet-button.icon-right{padding-left:28px !important;padding-right:52px !important}.duet-button svg{fill:currentColor;width:100%;min-width:100%}.duet-button-icon{width:16px;height:16px;position:absolute;transform:translateY(-50%);display:flex;align-items:center;justify-content:center;margin:0 !important;top:50%;left:-28px}.duet-button-icon duet-icon{width:16px;height:16px}.duet-button-icon.right{right:-28px;left:auto}.duet-button-icon.large{width:20px;height:20px;left:-32px}.duet-button-icon.large duet-icon{width:20px;height:20px}.duet-button-icon.large.right{right:-32px;left:auto}.duet-button-icon.small{width:7px;height:7px;left:-16px}.duet-button-icon.small duet-icon{width:7px;height:7px}.duet-button-icon.small.right{right:-16px;left:auto}.duet-button:active{transition:none;opacity:0.75}.duet-button:focus{outline:0 !important;box-shadow:0 0 0 4px rgba(0, 119, 179, 0.3)}.duet-button.default{border-color:#e1e3e6}.duet-theme-turva .duet-button.default{border-color:#e6e6e6;color:#c60c30 !important}.duet-button.default:hover{border-color:#0077b3}.duet-theme-turva .duet-button.default:hover{border-color:#c60c30}.duet-button.primary{color:white !important;border-color:#0077b3;background:#0077b3}.duet-theme-turva .duet-button.primary{color:white !important;background:#c60c30;border-color:#c60c30}.duet-button.primary:hover{box-shadow:0 4px 20px rgba(34, 34, 34, 0.1);background:#005f8f;border-color:#005f8f}.duet-theme-turva .duet-button.primary:hover{background:#940925;border-color:#940925}.duet-button.secondary{border-color:#00294d;color:#00294d !important;background:transparent}.duet-theme-turva .duet-button.secondary{border-color:#171c3a;color:#171c3a !important}.duet-button.secondary:hover{border-color:#0077b3;color:#0077b3 !important}.duet-theme-turva .duet-button.secondary:hover{border-color:#c60c30;color:#c60c30 !important}.duet-button.loading{background:#0077b3;color:white !important;border-color:#0077b3;text-indent:-9999px;pointer-events:none;overflow:hidden}.duet-theme-turva .duet-button.loading{background:#c60c30;border-color:#c60c30}.duet-button.loading.duet-button-icon{display:none}.duet-button.negative{color:#00294d !important;background:white;border-color:white}.duet-theme-turva .duet-button.negative{color:#171c3a !important}.duet-button.negative:hover{border-color:white;background:transparent;color:white !important}.duet-button.destructive{color:white !important;background:#de2362;border-color:#de2362}.duet-theme-turva .duet-button.destructive{color:white !important;background:#e02a0d;border-color:#e02a0d}.duet-button.destructive:hover{background:#b21c4e;border-color:#b21c4e}.duet-theme-turva .duet-button.destructive:hover{background:#b3220a;border-color:#b3220a}.duet-button.plain{border-color:transparent;background:transparent;padding-left:0 !important;padding-right:0 !important;border-radius:4px;border:0;text-align:left;min-width:48px}.duet-theme-turva .duet-button.plain{border-color:transparent;background:transparent}.duet-button.plain.icon{padding-left:20px !important}.duet-button.plain.icon.icon-right{padding-left:0 !important;padding-right:20px !important}.duet-button.plain.icon.medium{padding-left:24px !important}.duet-button.plain.icon.medium.icon-right{padding-left:0 !important;padding-right:24px !important}.duet-button.plain.icon.large{padding-left:30px !important}.duet-button.plain.icon.large.icon-right{padding-left:0 !important;padding-right:30px !important}.duet-button.plain .duet-button-icon.left{left:-16.6666666667px !important}.duet-button.plain .duet-button-icon.left.medium{left:-24px !important}.duet-button.plain .duet-button-icon.left.large{left:-30px !important}.duet-button.plain .duet-button-icon.right{right:-16.6666666667px !important}.duet-button.plain .duet-button-icon.right.medium{right:-24px !important}.duet-button.plain .duet-button-icon.right.large{right:-30px !important}.duet-button.plain[disabled]{border-color:transparent !important;background:transparent !important;color:#657787 !important}.duet-theme-turva .duet-button.plain[disabled]{background:transparent !important;color:transparent !important;border-color:#e6e6e6 !important}.duet-theme-turva .duet-button.plain{color:#c60c30 !important}.duet-button.plain:hover{color:#004d80 !important}.duet-theme-turva .duet-button.plain:hover{color:#940925 !important}.duet-button.duet-button-icon-only{padding:0 !important;min-width:48px;min-height:48px}.duet-button.duet-button-icon-only .duet-button-contents{position:static}.duet-button.duet-button-icon-only .duet-button-icon.left.large,.duet-button.duet-button-icon-only .duet-button-icon.left.medium,.duet-button.duet-button-icon-only .duet-button-icon.left.small{position:absolute;padding:0;margin:0;top:50% !important;left:50% !important;transform:translateX(-50%) translateY(-50%)}.duet-button[disabled],.duet-button[disabled]:hover{border-color:#e1e3e6 !important;background:#e1e3e6 !important;color:#657787 !important;box-shadow:none !important}.duet-theme-turva .duet-button[disabled],.duet-theme-turva .duet-button[disabled]:hover{background:#e6e6e6 !important;color:#757575 !important;border-color:#e6e6e6 !important}.duet-button-is-loading.primary{color:white}.duet-button-is-loading.default{color:#0077b3}.duet-button-is-loading.default.duet-theme-turva{color:#c60c30}.duet-button-is-loading .duet-button{text-indent:-9999px;pointer-events:none;overflow:hidden}.duet-button-is-loading .duet-button.duet-button-icon{display:none}';const s=class{constructor(o){t(this,o),this.color="gray-lightest",this.size="small",this.theme=""}componentWillLoad(){i(this)}render(){const t="currentColor"===this.color?"currentColor":d[a(this.color)];return e(n,{class:{"duet-custom-color":"currentColor"!==this.color&&"turva"!==this.theme&&"default"!==this.theme,"duet-theme-turva":"turva"===this.theme&&"currentColor"!==this.color,"duet-theme-default":"default"===this.theme&&"currentColor"!==this.color}},e("div",{class:{"duet-spinner":!0,[this.size]:!0},style:{color:t},"aria-label":this.accessibleLabel}))}};s.style=':host{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0;position:absolute;z-index:800;top:50%;left:50%;max-width:100%}:host(.duet-theme-default) .duet-spinner{color:#0077b3 !important}:host(.duet-theme-turva) .duet-spinner{color:#c60c30 !important}:host(.duet-custom-color){color:inherit}*,*::after,*::before{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0}.duet-spinner{-webkit-user-select:none;user-select:none;position:absolute;top:50%;left:50%;width:24px;height:24px;transform-origin:0% 0%;z-index:800;border-radius:50%;animation:duetRotate 0.6s linear infinite;border:2px solid transparent;border-left:2px solid currentColor;transform:translateZ(0) translateX(-50%) translateY(-50%);color:#0077b3}.duet-spinner::after{content:"";position:absolute;box-sizing:content-box;transform-origin:0% 0%;opacity:0.3;top:50%;left:50%;width:100%;height:100%;overflow:hidden;transform:translateZ(0) translateX(-50%) translateY(-50%);z-index:200;border-radius:50%;border:2px solid currentColor}.duet-spinner.medium{width:36px;height:36px;border-width:4px}.duet-spinner.medium::after{border-width:4px}.duet-spinner.large{width:72px;height:72px;border-width:8px}.duet-spinner.large::after{border-width:8px}@keyframes duetRotate{0%{transform:translateZ(0) rotate(0deg) translateX(-50%) translateY(-50%)}100%{transform:translateZ(0) rotate(360deg) translateX(-50%) translateY(-50%)}}';export{u as duet_button,s as duet_spinner}
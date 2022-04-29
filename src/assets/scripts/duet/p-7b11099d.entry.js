import{r as e,c as t,h as i,H as a}from"./p-f5c88521.js";import{i as r}from"./p-82a9722f.js";const o=class{constructor(i){e(this,i),this.duetDismiss=t(this,"duetDismiss",7),this.theme="",this.isDismissed=!1,this.accessibleLabel="Sulje viesti",this.icon="",this.margin="auto",this.padding="auto",this.variation="default",this.dismissible=!1,this.handleCloseClick=e=>{this.isDismissed=!0,this.duetDismiss.emit({component:"duet-alert",originalEvent:e})}}componentWillLoad(){r(this)}render(){const e="turva"===this.theme?"secondary-turva":"secondary";return i(a,{role:"alert",class:{"duet-alert-is-dismissed":this.isDismissed}},i("div",{class:{"duet-alert":!0,"duet-alert-has-icon":!!this.icon,"duet-alert-is-dismissible":this.dismissible,"duet-p-0":"none"===this.padding,"duet-m-0":"none"===this.margin,[this.variation]:!0,"duet-theme-turva":"turva"===this.theme}},i("div",{class:"duet-alert-container"},this.icon&&i("div",{class:"duet-alert-icon"},i("duet-icon",{size:"auto",name:this.icon,color:"currentColor"})),i("span",null,i("slot",null))),this.dismissible&&i("div",{class:"duet-alert-dismiss"},i("duet-button",{variation:"plain","accessible-label":this.accessibleLabel,color:e,"icon-size":"medium",icon:"navigation-close","icon-only":!0,margin:"none",theme:this.theme,onClick:this.handleCloseClick,fixed:!0}))))}};o.style='*,*::after,*::before{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0}:host{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0;transition:opacity 300ms ease, visibility 300ms ease, transform 300ms ease, max-height 300ms ease;max-height:999px;display:block;width:100%}:host(.duet-alert-is-dismissed){opacity:0;visibility:hidden;transform:scale(0.98);max-height:0}:host(.duet-alert-is-dismissed) .duet-alert{margin:0 !important}.duet-alert{margin-bottom:16px !important;transition:margin 100ms 300ms ease;padding:16px;text-align:center;background:#f2f8fb;border:1px solid #0077b3;border-radius:4px;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:1rem;color:#00294d;font-weight:400;line-height:1.25;width:100%;position:relative}.duet-alert.duet-p-0{padding:0 !important}.duet-alert.duet-m-0{margin:0 !important}.duet-alert.duet-theme-turva{color:#171c3a;background:#f3f4f5;border-color:#171c3a;font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"}.duet-alert.warning{background:#fffbf4;border-color:#f7b228}.duet-alert.warning.duet-theme-turva{background:#fffaf3;border-color:#faa40f}.duet-alert.danger{background:#fdf4f7;border-color:#de2362}.duet-alert.danger.duet-theme-turva{background:#fdf4f3;border-color:#e02a0d}.duet-alert.success{background:#f2f9f7;border-color:#00875a}.duet-alert.success.duet-theme-turva{background:#f3f9f6;border-color:#08874e}.duet-alert-dismiss{position:absolute;right:2px;top:2px}.duet-alert-container{display:inline-flex;align-items:center;justify-content:center;margin:0 auto !important;text-align:center}.duet-alert-has-icon .duet-alert-container{margin-top:2px !important}.duet-alert-icon{display:inline-block;align-self:center;width:20px;height:20px;min-width:20px;margin:0 16px 0 0 !important}.duet-alert-icon duet-icon{width:20px;height:20px}.duet-alert-is-dismissible{padding:16px 48px 16px 16px;text-align:left}.duet-alert-is-dismissible .duet-alert-container{text-align:left}';export{o as duet_alert}
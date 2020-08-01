import{r as e,c as t,h as o,g as i}from"./p-f5c88521.js";import{i as r}from"./p-82a9722f.js";import{a as n}from"./p-3bc771b6.js";import{p as a}from"./p-ca791aae.js";const d={fi:{copyrightLabel:"© LähiTapiola",newWindowLabel:"Avautuu uuteen ikkunaan"},sv:{copyrightLabel:"© LokalTapiola",newWindowLabel:"Öppnas i nytt fönster"},en:{copyrightLabel:"© LocalTapiola",newWindowLabel:"Opens in a new window"}},s=class{constructor(o){e(this,o),this.duetChange=t(this,"duetChange",3),this.duetAnalytics=t(this,"duetAnalytics",7),this.processedItems=null,this.processedMenu=null,this.theme="",this.variation="default",this.margin="auto",this.logoHref="/",this.language="fi",this.handleClick=(e,t)=>{t.analyticsId&&this.duetAnalytics.emit({component:"duet-footer",analyticsId:t.analyticsId}),this.emitChange(e,t)}}itemsChanged(){this.refresh()}menuChanged(){this.refresh()}componentWillLoad(){r(this),this.refresh()}async refresh(){this.processedItems=a(this.items),this.processedMenu=a(this.menu)}emitChange(e,t){this.duetChange.emit({originalEvent:e,data:t,component:"duet-footer"})}render(){const e=d[this.language],t="turva"===this.theme?"© Turva":e.copyrightLabel;return o("footer",{class:{"duet-footer":!0,"duet-m-0":"none"===this.margin,"duet-theme-turva":"turva"===this.theme,"duet-footer-simple":"simple"===this.variation}},o("div",{class:"duet-footer-wrapper"},o("div",{class:"duet-footer-top"},"simple"!==this.variation&&o("duet-logo",{href:this.logoHref,onClick:e=>this.handleClick(e,{href:this.logoHref,label:"logo"}),size:"large",inverse:!0,language:this.language,theme:this.theme}),this.processedItems&&"simple"!==this.variation&&this.processedItems.map(t=>o("a",{class:"duet-footer-link",href:t.href,id:t.id,target:t.external?"_blank":"_self",onClick:e=>this.handleClick(e,t)},o("div",{class:"duet-footer-icon"},o("duet-icon",{size:"medium",margin:"none",name:t.icon,color:"currentColor"})),o("span",null,t.label),t.external&&o("duet-visually-hidden",null,", ",e.newWindowLabel),o("div",{class:"duet-footer-arrow"},!t.external&&o("duet-icon",{icon:'<svg role="img" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m5.499 24c-.2 0-.389-.078-.53-.22-.292-.292-.292-.768 0-1.061l10.72-10.719-10.72-10.72c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l10.72 10.72c.584.584.585 1.535.001 2.119l-10.721 10.721c-.141.142-.33.22-.53.22z"/></svg>',margin:"none",size:"auto",color:"currentColor"}),t.external&&o("duet-icon",{icon:'<svg role="img" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.25 2.00000467c.4142136 0 .75.33578644.75.75 0 .41421357-.3357864.75-.75.75h-6.5c-1.24218365.0011027-2.24889731 1.00781635-2.25 2.25l-.00011558 12.98669873c.00007695.0044245.00011558.0088584.00011558.0133012v1.5c.00110269 1.2421837 1.00781635 2.2488973 2.25 2.25h14.5c1.2421836-.0011027 2.2488973-1.0078163 2.25-2.25v-6.5c0-.4142135.3357864-.75.75-.75s.75.3357865.75.75v6.5c-.0022046 2.070154-1.6798461 3.7477954-3.75 3.75l-12.98480737-.0001507c-.00505212.0001003-.01011648.0001508-.01519263.0001508h-1.5c-2.07015393-.0022047-3.74779536-1.6798461-3.75-3.75v-14.50000003c.00220464-2.07015393 1.67984607-3.74779536 3.75-3.75zm12.9845742-2c.0994941.00024525.1979807.01994256.2899138.0579875l.0254559.0113137c.0535666.02415286.1038636.05471307.1499096.09086938l.065758.05833013c.041716.04196348.0782814.08861158.1090024.13894429l.0515108.09935072c.03971.09246082.05993.19211613.0594072.29274221l-.0007174 6.36325392c.0007174.20011122-.0777817.38890873-.2192031.53033009-.1414213.14142135-.3302188.21991021-.53033.2192031-.2001113.00070711-.3889088-.07778177-.5303301-.21920312-.1414214-.14142136-.2199102-.33021885-.2192031-.53033007v-4.55376767l-7.2054181 7.2054181c-.2928932.29289325-.767767.29289315-1.0606602-.00000002-.2928932-.29289321-.2928932-.76776694 0-1.06066015l7.204711-7.20471099h-4.5537677c-.1992408.00148736-.3907529-.07700338-.5316413-.21789183-.1408885-.14088845-.2193792-.33240055-.2178919-.53164136-.0007071-.20011122.0777818-.38890873.2192031-.53033009.1414214-.14142135.3302189-.21991021.5303301-.21920784z" /></svg>',size:"xx-small",margin:"none",color:"currentColor"}))))),o("p",{class:"duet-footer-menu"},o("span",{class:"duet-footer-copyright"},`${t} ${(new Date).getFullYear()}`,o("span",{class:"duet-footer-divider",role:"presentation","aria-hidden":"true"},"/")),this.processedMenu&&this.processedMenu.map(t=>o("a",{href:t.href,id:t.id,target:t.external?"_blank":"_self",onClick:e=>this.handleClick(e,t)},t.label,t.external&&[o("duet-visually-hidden",null,", ",e.newWindowLabel),o("div",{class:"duet-footer-external"},o("duet-icon",{icon:n.svg,size:"xx-small",margin:"none",color:"currentColor"}))],o("span",{class:"duet-footer-divider",role:"presentation","aria-hidden":"true"},"/"))))))}get element(){return i(this)}static get watchers(){return{items:["itemsChanged"],menu:["menuChanged"]}}};s.style='*,*::after,*::before{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0}:host{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0;display:block;flex-shrink:0;width:100%}.duet-footer{margin-top:48px;background:#00294d;padding-top:20px;padding-bottom:16px;width:100%;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:1rem;font-weight:400;line-height:1.5;color:white;text-align:left;display:block}.duet-footer.duet-p-0{padding:0 !important}.duet-footer.duet-m-0{margin:0 !important}@media (min-width: 36em){.duet-footer{padding-top:36px}}@media (min-width: 62em){.duet-footer{padding-top:48px;padding-bottom:36px}}.duet-footer.duet-theme-turva{font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";background:#c60c30}.duet-footer a{color:white;text-decoration:none}.duet-footer-wrapper{margin:0 auto;position:relative}@media (min-width: 62em){.duet-footer-wrapper{padding:0 72px 0 48px}}@media (min-width: 76.25em){.duet-footer-wrapper{max-width:1110px;padding:0 20px 0 0}}.duet-footer-top{width:100%}@media (min-width: 62em){.duet-footer-top{justify-content:space-between;align-items:center;flex-direction:row;display:flex}}duet-logo{margin-left:16px !important}@media (min-width: 36em){duet-logo{margin-left:28px !important}}@media (min-width: 62em){duet-logo{margin-left:0 !important}}.duet-footer-link{padding:16px !important;transition:background-color 300ms ease;border-bottom:1px solid rgba(255, 255, 255, 0.2);font-weight:600;align-items:center;flex-direction:row;display:flex;width:100%}@media (min-width: 36em){.duet-footer-link{padding-left:28px !important;padding-right:20px !important}}@media (min-width: 62em){.duet-footer-link{padding-left:0 !important;padding-right:0 !important;min-width:0;width:auto;border:0}}.duet-footer-link:first-of-type{margin-top:20px;border-top:1px solid rgba(255, 255, 255, 0.2)}@media (min-width: 62em){.duet-footer-link:first-of-type{margin:0;border:0}}.duet-footer-link span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:inline-block}.duet-footer-link:hover{background:rgba(0, 0, 0, 0.1)}@media (min-width: 62em){.duet-footer-link:hover{background:transparent}}.duet-footer-icon{transition:300ms ease;margin-right:16px;padding:12px;background:#0077b3;border-radius:50%;display:flex;align-items:center;justify-content:center}.duet-theme-turva .duet-footer-icon{background:transparent;box-shadow:0 0 0 1px white}a:hover .duet-footer-icon{background:#006ba1}.duet-theme-turva a:hover .duet-footer-icon{background:transparent}.duet-footer-arrow{transition:transform 300ms ease;width:20px;height:20px;min-width:20px;max-width:20px;max-height:20px;color:white;margin-left:auto;display:flex;align-items:center;justify-content:center}@media (min-width: 62em){.duet-footer-arrow{width:10px;min-width:10px;margin-left:8px;margin-top:3px}}@media (min-width: 62em){.duet-footer-arrow{margin-right:0}}a:hover .duet-footer-arrow{transform:translateX(4px)}.duet-footer-arrow duet-icon{width:20px;height:20px}@media (min-width: 62em){.duet-footer-arrow duet-icon{width:10px;height:10px}}.duet-footer-menu{padding:20px !important;font-size:0.875rem}@media (min-width: 36em){.duet-footer-menu{padding:28px !important}}@media (min-width: 62em){.duet-footer-menu{padding-left:8px !important}}.duet-footer-menu a{text-decoration:none}.duet-footer-menu a:hover,.duet-footer-menu a:focus{text-decoration:underline}.duet-footer-menu a:hover .duet-footer-divider,.duet-footer-menu a:focus .duet-footer-divider{text-decoration:none}.duet-footer-menu .duet-footer-divider{display:inline-block;margin:0 8px}.duet-footer-menu a:last-of-type .duet-footer-divider{display:none}.duet-footer-copyright{color:white}.duet-footer-simple{margin:0;margin-top:16px;border-top:1px solid #e1e3e6;padding:0;background:transparent !important;color:#00294d}.duet-footer-simple .duet-footer-wrapper{margin:0;padding:0 20px;max-width:100%}@media (min-width: 62em){.duet-footer-simple .duet-footer-wrapper{padding:0 36px}}@media (min-width: 106.25em){.duet-footer-simple .duet-footer-wrapper{padding:0 48px}}.duet-footer-simple .duet-footer-copyright,.duet-footer-simple .duet-footer-menu a{color:#00294d}.duet-footer-simple .duet-footer-menu{padding:20px 0 !important}.duet-footer-simple.duet-theme-turva{color:#171c3a;border-color:#e6e6e6}.duet-footer-simple.duet-theme-turva .duet-footer-copyright,.duet-footer-simple.duet-theme-turva .duet-footer-menu a{color:#171c3a}.duet-footer-external{display:inline-block;margin-left:4px;color:#0077b3}.duet-theme-turva .duet-footer-external{color:white}.duet-footer-simple.duet-theme-turva .duet-footer-external{color:#c60c30}';export{s as duet_footer}
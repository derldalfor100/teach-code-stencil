import{r as e,c as t,h as r,H as a,g as i}from"./p-f5c88521.js";import{i as s}from"./p-82a9722f.js";import{j as n,c as d}from"./p-b8b300bf.js";import{t as o}from"./p-54875410.js";import{i as u}from"./p-c314eac2.js";const l={turva:{active:o.colorPrimaryTurva,inactive:o.colorGrayTurva},default:{active:o.colorPrimary,inactive:o.colorGray}},g=class{constructor(r){e(this,r),this.duetChange=t(this,"duetChange",3),this.duetInput=t(this,"duetInput",7),this.rangeId=n("DuetRange"),this.theme="",this.margin="auto",this.expand=!1,this.min=0,this.label="label",this.labelHidden=!1,this.unit="",this.max=100,this.step=1,this.locale="fi-FI",this.value=0,this.debounce=0,this.onInput=e=>{const t=e.target;t&&(this.value=parseFloat(t.value)||0),this.duetInput.emit({originalEvent:e,value:this.value,component:"duet-range-slider"})}}valueChanged(){const e=this.nativeInput;e&&(e.value=this.value),this.duetChange.emit({value:this.value,component:"duet-range-slider"})}debounceChanged(){this.duetChange=d(this.duetChange,this.debounce)}componentWillLoad(){s(this)}componentDidLoad(){this.debounceChanged()}async setFocus(){this.nativeInput.focus()}calculatePercentage(){return Math.ceil((this.value-this.min)/(this.max-this.min)*100)}render(){const e=this.identifier||this.rangeId,t="turva"===this.theme?"turva":"default",{inactive:i,active:s}=l[t],n=this.calculatePercentage(),d={background:`-webkit-linear-gradient(left,${s} 0%,${s} ${n}%,${i} ${n}%)`};return r(a,{class:{"duet-m-0":"none"===this.margin,"duet-expand":this.expand}},r("div",{class:{"duet-range-container":!0,"duet-label-hidden":this.labelHidden,"duet-theme-turva":"turva"===this.theme,"duet-ie":u()}},r("duet-label",{theme:t,margin:"small",for:e},this.label),r("output",{htmlFor:e,class:"duet-output"},this.value.toLocaleString(this.locale),this.unit),r("input",{onInput:this.onInput,ref:e=>this.nativeInput=e,type:"range",min:this.min,max:this.max,step:this.step,value:this.value,style:d,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.value,id:e,name:"range",class:"duet-range"})))}get element(){return i(this)}static get watchers(){return{value:["valueChanged"],debounce:["debounceChanged"]}}};g.style='*.sc-duet-range-slider,*.sc-duet-range-slider::after,*.sc-duet-range-slider::before{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0}.sc-duet-range-slider-h{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;background:transparent;border:0;padding:0;margin:0;margin-right:16px !important;margin-bottom:20px !important;display:inline-flex;vertical-align:bottom;text-align:left;max-width:100%;width:100%}.sc-duet-range-slider-h:last-child,.sc-duet-range-slider-h:last-of-type{margin-right:0 !important}@media (min-width: 36em){.sc-duet-range-slider-h{width:calc(50% - 16px - 3px)}.duet-expand.sc-duet-range-slider-h{width:100% !important}}.duet-m-0.sc-duet-range-slider-h{margin:0 !important}.duet-range-container.sc-duet-range-slider{position:relative;width:100%}.duet-output.sc-duet-range-slider{position:absolute;font-variant-numeric:tabular-nums;font-family:"localtapiola-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";background:white;color:#00294d;font-weight:400;line-height:1.25;font-size:0.875rem;z-index:200;top:12px;right:0}.duet-theme-turva.sc-duet-range-slider .duet-output.sc-duet-range-slider{color:#171c3a;font-family:"turva-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"}.duet-range.sc-duet-range-slider{background:#cfd2d4;position:relative;z-index:100;border-radius:4px;height:4px;width:100%}.duet-ie.sc-duet-range-slider .duet-range.sc-duet-range-slider{height:26px;background:transparent !important;width:auto;display:block}.duet-range.sc-duet-range-slider::-moz-range-track{-moz-appearance:none;border:0;height:1px;background:transparent}.duet-range.sc-duet-range-slider::-ms-track{background:transparent;color:transparent;border:0}.duet-range.sc-duet-range-slider:focus,.duet-range.sc-duet-range-slider:active{outline:none}.user-is-tabbing.sc-duet-range-slider-h .duet-range.sc-duet-range-slider:focus{outline:1px dotted #0077b3;outline:5px auto -webkit-focus-ring-color}.duet-range.sc-duet-range-slider::-webkit-slider-runnable-track{background:transparent}.duet-range.sc-duet-range-slider::-webkit-slider-thumb{transition:box-shadow 300ms ease;background:white;-webkit-appearance:none;border-radius:50%;border:1px solid #909599;position:relative;cursor:-webkit-grab;height:24px;width:24px}.duet-theme-turva.sc-duet-range-slider .duet-range.sc-duet-range-slider::-webkit-slider-thumb{border-color:#757575}.duet-range.sc-duet-range-slider:active::-webkit-slider-thumb{cursor:-webkit-grabbing}.duet-range.sc-duet-range-slider::-moz-range-track{background:transparent !important}.duet-range.sc-duet-range-slider::-moz-range-thumb{background:white;border:1px solid #909599;appearance:none;border-radius:50%;position:relative;cursor:-moz-grab;height:24px;width:24px}.duet-theme-turva.sc-duet-range-slider .duet-range.sc-duet-range-slider::-moz-range-thumb{border-color:#757575}.duet-range.sc-duet-range-slider:active::-moz-range-thumb{cursor:-moz-grabbing}.duet-range.sc-duet-range-slider::-ms-thumb{background:white;border:1px solid #909599;overflow:visible;border-radius:50%;position:relative;height:24px;width:24px}.duet-theme-turva.sc-duet-range-slider .duet-range.sc-duet-range-slider::-ms-thumb{border-color:#757575}.duet-range.sc-duet-range-slider::-ms-fill-lower{background:#0077b3;height:4px}.duet-theme-turva.sc-duet-range-slider .duet-range.sc-duet-range-slider::-ms-fill-lower{background:#c60c30}.duet-range.sc-duet-range-slider::-ms-fill-upper{background:#cfd2d4;height:4px}.duet-theme-turva.sc-duet-range-slider .duet-range.sc-duet-range-slider::-ms-fill-upper{background:#d1d1d1}.duet-label-hidden.sc-duet-range-slider duet-label.sc-duet-range-slider,.duet-label-hidden.sc-duet-range-slider output.sc-duet-range-slider{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}';export{g as duet_range_slider}
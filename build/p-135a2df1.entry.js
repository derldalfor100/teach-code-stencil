import{r as s,h as r,d as a}from"./p-178fb748.js";const p=class{constructor(r){s(this,r)}normalize(s){return s?s.substr(0,1).toUpperCase()+s.substr(1).toLowerCase():""}render(){if(this.match&&this.match.params.name)return r("div",{class:"app-profile"},r("p",null,"Hello! My name is ",this.normalize(this.match.params.name),". My name was passed in through a route param!"),r("h1",null,"Stencil App Starter"),r("img",{src:a("../assets/images/view.jpg"),alt:""}))}};p.style=".app-profile{padding:10px}";export{p as app_profile}
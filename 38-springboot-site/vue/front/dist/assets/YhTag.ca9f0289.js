import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,q as i,x as l,B as c,G as p,M as u}from"./vendor.94a1cd75.js";const g={name:"YhTag",props:{label:{type:[String],default:""},color:{type:[String],default:""},borderRadius:{type:[String],default:""},width:{type:[String],default:""},height:{type:[String],default:""},border:{type:[Boolean],default:!1}},setup(){return{}},data(){return{}},created(){},mounted(){},components:{},computed:{tagStyle(){let e="";const t=this.color,r=this.borderRadius,d=this.border,a=this.width,o=this.height;return t&&(e+=`color:rgb(${t}); `,e+=`background-color: rgba(${t}, 0.1);`),a&&(e+=`width:${a}; `,e+="padding-left: 0; ",e+="padding-right: 0; "),o&&(e+=`height:${o}; `,e+="padding-top: 0; ",e+="padding-bottom: 0; "),d&&(e+=`border-color:rgb(${t}); `),r&&(e+=`border-radius:${r}; `),e}},methods:{}};function _(e,t,r,d,a,o){return n(),i("div",{class:p(["yh-tag",[r.border?"border":""]]),style:u(o.tagStyle)},[l("span",null,c(r.label),1)],6)}var b=s(g,[["render",_],["__scopeId","data-v-0cf6ab0c"]]);export{b as _};

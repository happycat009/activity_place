var g=Object.defineProperty,y=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var f=(e,a,t)=>a in e?g(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,h=(e,a)=>{for(var t in a||(a={}))S.call(a,t)&&f(e,t,a[t]);if(m)for(var t of m(a))q.call(a,t)&&f(e,t,a[t]);return e},v=(e,a)=>y(e,j(a));/* empty css             *//* empty css                 *//* empty css                  *//* empty css               *//* empty css                    *//* empty css                 *//* empty css                     */import{r as x}from"./index.4c3bf3be.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import{W as V,o as B,q as P,x as w,B as z,G as D,M as E,b as k,d as W,a4 as Y}from"./vendor.94a1cd75.js";const A=e=>{const a={methodname:"E407",orgid:e};return new Promise((t,n)=>{x("/frontRestService/frontCommonDataRestService/getData",a,"POST",!1).then(r=>{t(r)}).catch(r=>{n(r)})})};const L={class:"yh-select-wrapper"},N={props:{modelValue:{type:String,required:!0},label:{type:String,required:!0},labelWidth:{type:String,default:""},required:{type:Boolean,default:()=>!1}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,n=async(l="110386")=>new Promise((s,o)=>{A(l).then(c=>{s(c)}).catch(c=>{o(c)})}),r=V(()=>{let l="";const{labelWidth:s}=t;return s&&(l+=`width:${s}; `),l}),_={lazy:!0,lazyLoad(l,s){const{value:o}=l.data;n(o).then(c=>{const{orgList:d}=c.data;if(d&&d.length>0){const p=[];let i={value:"",label:"",leaf:!1};d.map(u=>{i=v(h({},i),{value:u.orgid,label:u.orgname,leaf:u.isleaf!="1"}),p.push(i)}),s(p)}else s([])})}},b=l=>{const s=l.join("/");a("update:modelValue",s)};return(l,s)=>{const o=Y;return B(),P("div",L,[w("div",{class:D(["label",[e.required?"required":""]]),style:E(k(r))},z(e.label),7),W(o,{props:_,"model-value":e.modelValue,placeholder:"\u8BF7\u9009\u62E9\u5730\u5740",class:"custom-cascader",onChange:b},null,8,["model-value"])])}}};var Q=C(N,[["__scopeId","data-v-76f44938"]]);export{Q as Y};
import{r as At}from"./index.4c3bf3be.js";import{k as A,I as Dt,aH as Q,i as tt,aI as W,J as Gt,aJ as Rt,e as I,aK as Pt,au as et,aa as at,v as V,q as rt,aL as Bt,a8 as N,_ as D,r as nt,Z as P,Y as M,aM as it,$ as ot,at as $,G as lt,a6 as st,h as ct,aN as Ot,X as zt,aO as Et,aP as ut,c as Wt,aQ as Vt,aR as Nt,am as Ft,ao as gt,aS as Ht,aT as B,aU as Mt,d as G,a1 as vt,x as $t,ac as Kt,y as Zt,aV as Ut,az as jt,Q as qt,af as Jt,a5 as K}from"./installCanvasRenderer.72945f82.js";const Ae=a=>{const e={methodname:"B401",orgid:a};return new Promise((t,r)=>{At("/frontRestService/frontCommonDataRestService/getData",e).then(i=>{t(i)}).catch(i=>{r(i)})})};var De=function(){function a(){}return a.prototype.getNeedCrossZero=function(){var e=this.option;return!e.scale},a.prototype.getCoordSysModel=function(){},a}(),O=Dt();function Xt(a){return a.type==="category"?Qt(a):ee(a)}function Yt(a,e){return a.type==="category"?te(a,e):{ticks:A(a.scale.getTicks(),function(t){return t.value})}}function Qt(a){var e=a.getLabelModel(),t=pt(a,e);return!e.get("show")||a.scale.isBlank()?{labels:[],labelCategoryInterval:t.labelCategoryInterval}:t}function pt(a,e){var t=ht(a,"labels"),r=Q(e),i=ft(t,r);if(i)return i;var n,o;return tt(r)?n=mt(a,r):(o=r==="auto"?ae(a):r,n=yt(a,o)),dt(t,r,{labels:n,labelCategoryInterval:o})}function te(a,e){var t=ht(a,"ticks"),r=Q(e),i=ft(t,r);if(i)return i;var n,o;if((!e.get("show")||a.scale.isBlank())&&(n=[]),tt(r))n=mt(a,r,!0);else if(r==="auto"){var c=pt(a,a.getLabelModel());o=c.labelCategoryInterval,n=A(c.labels,function(l){return l.tickValue})}else o=r,n=yt(a,o,!0);return dt(t,r,{ticks:n,tickCategoryInterval:o})}function ee(a){var e=a.scale.getTicks(),t=W(a);return{labels:A(e,function(r,i){return{level:r.level,formattedLabel:t(r,i),rawLabel:a.scale.getLabel(r),tickValue:r.value}})}}function ht(a,e){return O(a)[e]||(O(a)[e]=[])}function ft(a,e){for(var t=0;t<a.length;t++)if(a[t].key===e)return a[t].value}function dt(a,e,t){return a.push({key:e,value:t}),t}function ae(a){var e=O(a).autoInterval;return e!=null?e:O(a).autoInterval=a.calculateCategoryInterval()}function re(a){var e=ne(a),t=W(a),r=(e.axisRotate-e.labelRotate)/180*Math.PI,i=a.scale,n=i.getExtent(),o=i.count();if(n[1]-n[0]<1)return 0;var c=1;o>40&&(c=Math.max(1,Math.floor(o/40)));for(var l=n[0],s=a.dataToCoord(l+1)-a.dataToCoord(l),u=Math.abs(s*Math.cos(r)),f=Math.abs(s*Math.sin(r)),h=0,p=0;l<=n[1];l+=c){var g=0,v=0,x=Gt(t({value:l}),e.font,"center","top");g=x.width*1.3,v=x.height*1.3,h=Math.max(h,g,7),p=Math.max(p,v,7)}var d=h/u,y=p/f;isNaN(d)&&(d=1/0),isNaN(y)&&(y=1/0);var m=Math.max(0,Math.floor(Math.min(d,y))),b=O(a.model),S=a.getExtent(),L=b.lastAutoInterval,C=b.lastTickCount;return L!=null&&C!=null&&Math.abs(L-m)<=1&&Math.abs(C-o)<=1&&L>m&&b.axisExtent0===S[0]&&b.axisExtent1===S[1]?m=L:(b.lastTickCount=o,b.lastAutoInterval=m,b.axisExtent0=S[0],b.axisExtent1=S[1]),m}function ne(a){var e=a.getLabelModel();return{axisRotate:a.getRotate?a.getRotate():a.isHorizontal&&!a.isHorizontal()?90:0,labelRotate:e.get("rotate")||0,font:e.getFont()}}function yt(a,e,t){var r=W(a),i=a.scale,n=i.getExtent(),o=a.getLabelModel(),c=[],l=Math.max((e||0)+1,1),s=n[0],u=i.count();s!==0&&l>1&&u/l>2&&(s=Math.round(Math.ceil(s/l)*l));var f=Rt(a),h=o.get("showMinLabel")||f,p=o.get("showMaxLabel")||f;h&&s!==n[0]&&v(n[0]);for(var g=s;g<=n[1];g+=l)v(g);p&&g-l!==n[1]&&v(n[1]);function v(x){var d={value:x};c.push(t?x:{formattedLabel:r(d),rawLabel:i.getLabel(d),tickValue:x})}return c}function mt(a,e,t){var r=a.scale,i=W(a),n=[];return I(r.getTicks(),function(o){var c=r.getLabel(o),l=o.value;e(o.value,c)&&n.push(t?l:{formattedLabel:i(o),rawLabel:c,tickValue:l})}),n}var xt=[0,1],ie=function(){function a(e,t,r){this.onBand=!1,this.inverse=!1,this.dim=e,this.scale=t,this._extent=r||[0,0]}return a.prototype.contain=function(e){var t=this._extent,r=Math.min(t[0],t[1]),i=Math.max(t[0],t[1]);return e>=r&&e<=i},a.prototype.containData=function(e){return this.scale.contain(e)},a.prototype.getExtent=function(){return this._extent.slice()},a.prototype.getPixelPrecision=function(e){return Pt(e||this.scale.getExtent(),this._extent)},a.prototype.setExtent=function(e,t){var r=this._extent;r[0]=e,r[1]=t},a.prototype.dataToCoord=function(e,t){var r=this._extent,i=this.scale;return e=i.normalize(e),this.onBand&&i.type==="ordinal"&&(r=r.slice(),bt(r,i.count())),et(e,xt,r,t)},a.prototype.coordToData=function(e,t){var r=this._extent,i=this.scale;this.onBand&&i.type==="ordinal"&&(r=r.slice(),bt(r,i.count()));var n=et(e,r,xt,t);return this.scale.scale(n)},a.prototype.pointToData=function(e,t){},a.prototype.getTicksCoords=function(e){e=e||{};var t=e.tickModel||this.getTickModel(),r=Yt(this,t),i=r.ticks,n=A(i,function(c){return{coord:this.dataToCoord(this.scale.type==="ordinal"?this.scale.getRawOrdinalNumber(c):c),tickValue:c}},this),o=t.get("alignWithLabel");return oe(this,n,o,e.clamp),n},a.prototype.getMinorTicksCoords=function(){if(this.scale.type==="ordinal")return[];var e=this.model.getModel("minorTick"),t=e.get("splitNumber");t>0&&t<100||(t=5);var r=this.scale.getMinorTicks(t),i=A(r,function(n){return A(n,function(o){return{coord:this.dataToCoord(o),tickValue:o}},this)},this);return i},a.prototype.getViewLabels=function(){return Xt(this).labels},a.prototype.getLabelModel=function(){return this.model.getModel("axisLabel")},a.prototype.getTickModel=function(){return this.model.getModel("axisTick")},a.prototype.getBandWidth=function(){var e=this._extent,t=this.scale.getExtent(),r=t[1]-t[0]+(this.onBand?1:0);r===0&&(r=1);var i=Math.abs(e[1]-e[0]);return Math.abs(i)/r},a.prototype.calculateCategoryInterval=function(){return re(this)},a}();function bt(a,e){var t=a[1]-a[0],r=e,i=t/r/2;a[0]+=i,a[1]-=i}function oe(a,e,t,r){var i=e.length;if(!a.onBand||t||!i)return;var n=a.getExtent(),o,c;if(i===1)e[0].coord=n[0],o=e[1]={coord:n[0]};else{var l=e[i-1].tickValue-e[0].tickValue,s=(e[i-1].coord-e[0].coord)/l;I(e,function(p){p.coord-=s/2});var u=a.scale.getExtent();c=1+u[1]-e[i-1].tickValue,o={coord:e[i-1].coord+s*c},e.push(o)}var f=n[0]>n[1];h(e[0].coord,n[0])&&(r?e[0].coord=n[0]:e.shift()),r&&h(n[0],e[0].coord)&&e.unshift({coord:n[0]}),h(n[1],o.coord)&&(r?o.coord=n[1]:e.pop()),r&&h(o.coord,n[1])&&e.push({coord:n[1]});function h(p,g){return p=at(p),g=at(g),f?p>g:p<g}}var Ge=ie,St={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#6E7079",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#E0E6F1"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.2)","rgba(210,219,238,0.2)"]}}},le=V({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},St),Z=V({boundaryGap:[0,0],axisLine:{show:"auto"},axisTick:{show:"auto"},splitNumber:5,minorTick:{show:!1,splitNumber:5,length:3,lineStyle:{}},minorSplitLine:{show:!1,lineStyle:{color:"#F4F7FD",width:1}}},St),se=V({scale:!0,splitNumber:6,axisLabel:{showMinLabel:!1,showMaxLabel:!1,rich:{primary:{fontWeight:"bold"}}},splitLine:{show:!1}},Z),ce=rt({scale:!0,logBase:10},Z),Re={category:le,value:Z,time:se,log:ce};function ue(a,e){var t=Bt(e.get("padding")),r=e.getItemStyle(["color","opacity"]);return r.fill=e.get("backgroundColor"),a=new N({shape:{x:a.x-t[3],y:a.y-t[0],width:a.width+t[1]+t[3],height:a.height+t[0]+t[2],r:e.get("borderRadius")},style:r,silent:!0,z2:-1}),a}var ge=function(a){D(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.type=e.type,t.layoutMode={type:"box",ignoreSize:!0},t}return e.type="title",e.defaultOption={zlevel:0,z:6,show:!0,text:"",target:"blank",subtext:"",subtarget:"blank",left:0,top:0,backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,textStyle:{fontSize:18,fontWeight:"bold",color:"#464646"},subtextStyle:{fontSize:12,color:"#6E7079"}},e}(lt),ve=function(a){D(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.type=e.type,t}return e.prototype.render=function(t,r,i){if(this.group.removeAll(),!!t.get("show")){var n=this.group,o=t.getModel("textStyle"),c=t.getModel("subtextStyle"),l=t.get("textAlign"),s=nt(t.get("textBaseline"),t.get("textVerticalAlign")),u=new P({style:M(o,{text:t.get("text"),fill:o.getTextColor()},{disableBox:!0}),z2:10}),f=u.getBoundingRect(),h=t.get("subtext"),p=new P({style:M(c,{text:h,fill:c.getTextColor(),y:f.height+t.get("itemGap"),verticalAlign:"top"},{disableBox:!0}),z2:10}),g=t.get("link"),v=t.get("sublink"),x=t.get("triggerEvent",!0);u.silent=!g&&!x,p.silent=!v&&!x,g&&u.on("click",function(){it(g,"_"+t.get("target"))}),v&&p.on("click",function(){it(v,"_"+t.get("subtarget"))}),ot(u).eventData=ot(p).eventData=x?{componentType:"title",componentIndex:t.componentIndex}:null,n.add(u),h&&n.add(p);var d=n.getBoundingRect(),y=t.getBoxLayoutParams();y.width=d.width,y.height=d.height;var m=$(y,{width:i.getWidth(),height:i.getHeight()},t.get("padding"));l||(l=t.get("left")||t.get("right"),l==="middle"&&(l="center"),l==="right"?m.x+=m.width:l==="center"&&(m.x+=m.width/2)),s||(s=t.get("top")||t.get("bottom"),s==="center"&&(s="middle"),s==="bottom"?m.y+=m.height:s==="middle"&&(m.y+=m.height/2),s=s||"top"),n.x=m.x,n.y=m.y,n.markRedraw();var b={align:l,verticalAlign:s};u.setStyle(b),p.setStyle(b),d=n.getBoundingRect();var S=m.margin,L=t.getItemStyle(["color","opacity"]);L.fill=t.get("backgroundColor");var C=new N({shape:{x:d.x-S[3],y:d.y-S[0],width:d.width+S[1]+S[3],height:d.height+S[0]+S[2],r:t.get("borderRadius")},style:L,subPixelOptimize:!0,silent:!0});n.add(C)}},e.type="title",e}(st);function Pe(a){a.registerComponentModel(ge),a.registerComponentView(ve)}var pe=function(a,e){if(e==="all")return{type:"all",title:a.getLocaleModel().get(["legend","selector","all"])};if(e==="inverse")return{type:"inverse",title:a.getLocaleModel().get(["legend","selector","inverse"])}},he=function(a){D(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.type=e.type,t.layoutMode={type:"box",ignoreSize:!0},t}return e.prototype.init=function(t,r,i){this.mergeDefaultAndTheme(t,i),t.selected=t.selected||{},this._updateSelector(t)},e.prototype.mergeOption=function(t,r){a.prototype.mergeOption.call(this,t,r),this._updateSelector(t)},e.prototype._updateSelector=function(t){var r=t.selector,i=this.ecModel;r===!0&&(r=t.selector=["all","inverse"]),ct(r)&&I(r,function(n,o){ut(n)&&(n={type:n}),r[o]=V(n,pe(i,n.type))})},e.prototype.optionUpdated=function(){this._updateData(this.ecModel);var t=this._data;if(t[0]&&this.get("selectedMode")==="single"){for(var r=!1,i=0;i<t.length;i++){var n=t[i].get("name");if(this.isSelected(n)){this.select(n),r=!0;break}}!r&&this.select(t[0].get("name"))}},e.prototype._updateData=function(t){var r=[],i=[];t.eachRawSeries(function(c){var l=c.name;i.push(l);var s;if(c.legendVisualProvider){var u=c.legendVisualProvider,f=u.getAllNames();t.isSeriesFiltered(c)||(i=i.concat(f)),f.length?r=r.concat(f):s=!0}else s=!0;s&&Ot(c)&&r.push(c.name)}),this._availableNames=i;var n=this.get("data")||r,o=A(n,function(c){return(typeof c=="string"||typeof c=="number")&&(c={name:c}),new zt(c,this,this.ecModel)},this);this._data=o},e.prototype.getData=function(){return this._data},e.prototype.select=function(t){var r=this.option.selected,i=this.get("selectedMode");if(i==="single"){var n=this._data;I(n,function(o){r[o.get("name")]=!1})}r[t]=!0},e.prototype.unSelect=function(t){this.get("selectedMode")!=="single"&&(this.option.selected[t]=!1)},e.prototype.toggleSelected=function(t){var r=this.option.selected;r.hasOwnProperty(t)||(r[t]=!0),this[r[t]?"unSelect":"select"](t)},e.prototype.allSelect=function(){var t=this._data,r=this.option.selected;I(t,function(i){r[i.get("name",!0)]=!0})},e.prototype.inverseSelect=function(){var t=this._data,r=this.option.selected;I(t,function(i){var n=i.get("name",!0);r.hasOwnProperty(n)||(r[n]=!0),r[n]=!r[n]})},e.prototype.isSelected=function(t){var r=this.option.selected;return!(r.hasOwnProperty(t)&&!r[t])&&Et(this._availableNames,t)>=0},e.prototype.getOrient=function(){return this.get("orient")==="vertical"?{index:1,name:"vertical"}:{index:0,name:"horizontal"}},e.type="legend.plain",e.dependencies=["series"],e.defaultOption={zlevel:0,z:4,show:!0,orient:"horizontal",left:"center",top:0,align:"auto",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderRadius:0,borderWidth:0,padding:5,itemGap:10,itemWidth:25,itemHeight:14,symbolRotate:"inherit",symbolKeepAspect:!0,inactiveColor:"#ccc",inactiveBorderColor:"#ccc",inactiveBorderWidth:"auto",itemStyle:{color:"inherit",opacity:"inherit",borderColor:"inherit",borderWidth:"auto",borderCap:"inherit",borderJoin:"inherit",borderDashOffset:"inherit",borderMiterLimit:"inherit"},lineStyle:{width:"auto",color:"inherit",inactiveColor:"#ccc",inactiveWidth:2,opacity:"inherit",type:"inherit",cap:"inherit",join:"inherit",dashOffset:"inherit",miterLimit:"inherit"},textStyle:{color:"#333"},selectedMode:!0,selector:!1,selectorLabel:{show:!0,borderRadius:10,padding:[3,5,3,5],fontSize:12,fontFamily:"sans-serif",color:"#666",borderWidth:1,borderColor:"#666"},emphasis:{selectorLabel:{show:!0,color:"#eee",backgroundColor:"#666"}},selectorPosition:"auto",selectorItemGap:7,selectorButtonGap:10,tooltip:{show:!1}},e}(lt),U=he,R=G,j=I,F=vt,fe=function(a){D(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.type=e.type,t.newlineDisabled=!1,t}return e.prototype.init=function(){this.group.add(this._contentGroup=new F),this.group.add(this._selectorGroup=new F),this._isFirstRender=!0},e.prototype.getContentGroup=function(){return this._contentGroup},e.prototype.getSelectorGroup=function(){return this._selectorGroup},e.prototype.render=function(t,r,i){var n=this._isFirstRender;if(this._isFirstRender=!1,this.resetInner(),!!t.get("show",!0)){var o=t.get("align"),c=t.get("orient");(!o||o==="auto")&&(o=t.get("left")==="right"&&c==="vertical"?"right":"left");var l=t.get("selector",!0),s=t.get("selectorPosition",!0);l&&(!s||s==="auto")&&(s=c==="horizontal"?"end":"start"),this.renderInner(o,t,r,i,l,c,s);var u=t.getBoxLayoutParams(),f={width:i.getWidth(),height:i.getHeight()},h=t.get("padding"),p=$(u,f,h),g=this.layoutInner(t,o,p,n,l,s),v=$(rt({width:g.width,height:g.height},u),f,h);this.group.x=v.x-g.x,this.group.y=v.y-g.y,this.group.markRedraw(),this.group.add(this._backgroundEl=ue(g,t))}},e.prototype.resetInner=function(){this.getContentGroup().removeAll(),this._backgroundEl&&this.group.remove(this._backgroundEl),this.getSelectorGroup().removeAll()},e.prototype.renderInner=function(t,r,i,n,o,c,l){var s=this.getContentGroup(),u=Wt(),f=r.get("selectedMode"),h=[];i.eachRawSeries(function(p){!p.get("legendHoverLink")&&h.push(p.id)}),j(r.getData(),function(p,g){var v=p.get("name");if(!this.newlineDisabled&&(v===""||v===`
`)){var x=new F;x.newline=!0,s.add(x);return}var d=i.getSeriesByName(v)[0];if(!u.get(v))if(d){var y=d.getData(),m=y.getVisual("legendLineStyle")||{},b=y.getVisual("legendIcon"),S=y.getVisual("style"),L=this._createItem(d,v,g,p,r,t,m,S,b,f);L.on("click",R(Lt,v,null,n,h)).on("mouseover",R(q,d.name,null,n,h)).on("mouseout",R(J,d.name,null,n,h)),u.set(v,!0)}else i.eachRawSeries(function(C){if(!u.get(v)&&C.legendVisualProvider){var w=C.legendVisualProvider;if(!w.containName(v))return;var k=w.indexOfName(v),_=w.getItemVisual(k,"style"),H=w.getItemVisual(k,"legendIcon"),T=Vt(_.fill);T&&T[3]===0&&(T[3]=.2,_.fill=Nt(T,"rgba"));var E=this._createItem(C,v,g,p,r,t,{},_,H,f);E.on("click",R(Lt,null,v,n,h)).on("mouseover",R(q,null,v,n,h)).on("mouseout",R(J,null,v,n,h)),u.set(v,!0)}},this)},this),o&&this._createSelector(o,r,n,c,l)},e.prototype._createSelector=function(t,r,i,n,o){var c=this.getSelectorGroup();j(t,function(s){var u=s.type,f=new P({style:{x:0,y:0,align:"center",verticalAlign:"middle"},onclick:function(){i.dispatchAction({type:u==="all"?"legendAllSelect":"legendInverseSelect"})}});c.add(f);var h=r.getModel("selectorLabel"),p=r.getModel(["emphasis","selectorLabel"]);Ft(f,{normal:h,emphasis:p},{defaultText:s.title}),gt(f)})},e.prototype._createItem=function(t,r,i,n,o,c,l,s,u,f){var h=t.visualDrawType,p=o.get("itemWidth"),g=o.get("itemHeight"),v=o.isSelected(r),x=n.get("symbolRotate"),d=n.get("symbolKeepAspect"),y=n.get("icon");u=y||u||"roundRect";var m=de(u,n,l,s,h,v),b=new F,S=n.getModel("textStyle");if(typeof t.getLegendIcon=="function"&&(!y||y==="inherit"))b.add(t.getLegendIcon({itemWidth:p,itemHeight:g,icon:u,iconRotate:x,itemStyle:m.itemStyle,lineStyle:m.lineStyle,symbolKeepAspect:d}));else{var L=y==="inherit"&&t.getData().getVisual("symbol")?x==="inherit"?t.getData().getVisual("symbolRotate"):x:0;b.add(ye({itemWidth:p,itemHeight:g,icon:u,iconRotate:L,itemStyle:m.itemStyle,lineStyle:m.lineStyle,symbolKeepAspect:d}))}var C=c==="left"?p+5:-5,w=c,k=o.get("formatter"),_=r;typeof k=="string"&&k?_=k.replace("{name}",r!=null?r:""):typeof k=="function"&&(_=k(r));var H=n.get("inactiveColor");b.add(new P({style:M(S,{text:_,x:C,y:g/2,fill:v?S.getTextColor():H,align:w,verticalAlign:"middle"})}));var T=new N({shape:b.getBoundingRect(),invisible:!0}),E=n.getModel("tooltip");return E.get("show")&&Ht({el:T,componentModel:o,itemName:r,itemTooltipOption:E.option}),b.add(T),b.eachChild(function(_t){_t.silent=!0}),T.silent=!f,this.getContentGroup().add(b),gt(b),b.__legendDataIndex=i,b},e.prototype.layoutInner=function(t,r,i,n,o,c){var l=this.getContentGroup(),s=this.getSelectorGroup();B(t.get("orient"),l,t.get("itemGap"),i.width,i.height);var u=l.getBoundingRect(),f=[-u.x,-u.y];if(s.markRedraw(),l.markRedraw(),o){B("horizontal",s,t.get("selectorItemGap",!0));var h=s.getBoundingRect(),p=[-h.x,-h.y],g=t.get("selectorButtonGap",!0),v=t.getOrient().index,x=v===0?"width":"height",d=v===0?"height":"width",y=v===0?"y":"x";c==="end"?p[v]+=u[x]+g:f[v]+=h[x]+g,p[1-v]+=u[d]/2-h[d]/2,s.x=p[0],s.y=p[1],l.x=f[0],l.y=f[1];var m={x:0,y:0};return m[x]=u[x]+g+h[x],m[d]=Math.max(u[d],h[d]),m[y]=Math.min(0,h[y]+p[1-v]),m}else return l.x=f[0],l.y=f[1],this.group.getBoundingRect()},e.prototype.remove=function(){this.getContentGroup().removeAll(),this._isFirstRender=!0},e.type="legend.plain",e}(st);function de(a,e,t,r,i,n){function o(g,v){g.lineWidth==="auto"&&(g.lineWidth=v.lineWidth>0?2:0),j(g,function(x,d){g[d]==="inherit"&&(g[d]=v[d])})}var c=e.getModel("itemStyle"),l=c.getItemStyle(),s=a.lastIndexOf("empty",0)===0?"fill":"stroke";l.decal=r.decal,l.fill==="inherit"&&(l.fill=r[i]),l.stroke==="inherit"&&(l.stroke=r[s]),l.opacity==="inherit"&&(l.opacity=(i==="fill"?r:t).opacity),o(l,r);var u=e.getModel("lineStyle"),f=u.getLineStyle();if(o(f,t),l.fill==="auto"&&(l.fill=r.fill),l.stroke==="auto"&&(l.stroke=r.fill),f.stroke==="auto"&&(f.stroke=r.fill),!n){var h=e.get("inactiveBorderWidth"),p=l[s];l.lineWidth=h==="auto"?r.lineWidth>0&&p?2:0:l.lineWidth,l.fill=e.get("inactiveColor"),l.stroke=e.get("inactiveBorderColor"),f.stroke=u.get("inactiveColor"),f.lineWidth=u.get("inactiveWidth")}return{itemStyle:l,lineStyle:f}}function ye(a){var e=a.icon||"roundRect",t=Mt(e,0,0,a.itemWidth,a.itemHeight,a.itemStyle.fill,a.symbolKeepAspect);return t.setStyle(a.itemStyle),t.rotation=(a.iconRotate||0)*Math.PI/180,t.setOrigin([a.itemWidth/2,a.itemHeight/2]),e.indexOf("empty")>-1&&(t.style.stroke=t.style.fill,t.style.fill="#fff",t.style.lineWidth=2),t}function Lt(a,e,t,r){J(a,e,t,r),t.dispatchAction({type:"legendToggleSelect",name:a!=null?a:e}),q(a,e,t,r)}function Ct(a){for(var e=a.getZr().storage.getDisplayList(),t,r=0,i=e.length;r<i&&!(t=e[r].states.emphasis);)r++;return t&&t.hoverLayer}function q(a,e,t,r){Ct(t)||t.dispatchAction({type:"highlight",seriesName:a,name:e,excludeSeriesId:r})}function J(a,e,t,r){Ct(t)||t.dispatchAction({type:"downplay",seriesName:a,name:e,excludeSeriesId:r})}var wt=fe;function me(a){var e=a.findComponents({mainType:"legend"});e&&e.length&&a.filterSeries(function(t){for(var r=0;r<e.length;r++)if(!e[r].isSelected(t.name))return!1;return!0})}function z(a,e,t){var r={},i=a==="toggleSelected",n;return t.eachComponent("legend",function(o){i&&n!=null?o[n?"select":"unSelect"](e.name):a==="allSelect"||a==="inverseSelect"?o[a]():(o[a](e.name),n=o.isSelected(e.name));var c=o.getData();I(c,function(l){var s=l.get("name");if(!(s===`
`||s==="")){var u=o.isSelected(s);r.hasOwnProperty(s)?r[s]=r[s]&&u:r[s]=u}})}),a==="allSelect"||a==="inverseSelect"?{selected:r}:{name:e.name,selected:r}}function xe(a){a.registerAction("legendToggleSelect","legendselectchanged",G(z,"toggleSelected")),a.registerAction("legendAllSelect","legendselectall",G(z,"allSelect")),a.registerAction("legendInverseSelect","legendinverseselect",G(z,"inverseSelect")),a.registerAction("legendSelect","legendselected",G(z,"select")),a.registerAction("legendUnSelect","legendunselected",G(z,"unSelect"))}function It(a){a.registerComponentModel(U),a.registerComponentView(wt),a.registerProcessor(a.PRIORITY.PROCESSOR.SERIES_FILTER,me),a.registerSubTypeDefaulter("legend",function(){return"plain"}),xe(a)}var be=function(a){D(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.type=e.type,t}return e.prototype.setScrollDataIndex=function(t){this.option.scrollDataIndex=t},e.prototype.init=function(t,r,i){var n=$t(t);a.prototype.init.call(this,t,r,i),kt(this,t,n)},e.prototype.mergeOption=function(t,r){a.prototype.mergeOption.call(this,t,r),kt(this,this.option,t)},e.type="legend.scroll",e.defaultOption=Kt(U.defaultOption,{scrollDataIndex:0,pageButtonItemGap:5,pageButtonGap:null,pageButtonPosition:"end",pageFormatter:"{current}/{total}",pageIcons:{horizontal:["M0,0L12,-10L12,10z","M0,0L-12,-10L-12,10z"],vertical:["M0,0L20,0L10,-20z","M0,0L20,0L10,20z"]},pageIconColor:"#2f4554",pageIconInactiveColor:"#aaa",pageIconSize:15,pageTextStyle:{color:"#333"},animationDurationUpdate:800}),e}(U);function kt(a,e,t){var r=a.getOrient(),i=[1,1];i[r.index]=0,Zt(e,t,{type:"box",ignoreSize:!!i})}var Se=be,Tt=vt,X=["width","height"],Y=["x","y"],Le=function(a){D(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.type=e.type,t.newlineDisabled=!0,t._currentIndex=0,t}return e.prototype.init=function(){a.prototype.init.call(this),this.group.add(this._containerGroup=new Tt),this._containerGroup.add(this.getContentGroup()),this.group.add(this._controllerGroup=new Tt)},e.prototype.resetInner=function(){a.prototype.resetInner.call(this),this._controllerGroup.removeAll(),this._containerGroup.removeClipPath(),this._containerGroup.__rectSize=null},e.prototype.renderInner=function(t,r,i,n,o,c,l){var s=this;a.prototype.renderInner.call(this,t,r,i,n,o,c,l);var u=this._controllerGroup,f=r.get("pageIconSize",!0),h=ct(f)?f:[f,f];g("pagePrev",0);var p=r.getModel("pageTextStyle");u.add(new P({name:"pageText",style:{text:"xx/xx",fill:p.getTextColor(),font:p.getFont(),verticalAlign:"middle",align:"center"},silent:!0})),g("pageNext",1);function g(v,x){var d=v+"DataIndex",y=Ut(r.get("pageIcons",!0)[r.getOrient().name][x],{onclick:jt(s._pageGo,s,d,r,n)},{x:-h[0]/2,y:-h[1]/2,width:h[0],height:h[1]});y.name=v,u.add(y)}},e.prototype.layoutInner=function(t,r,i,n,o,c){var l=this.getSelectorGroup(),s=t.getOrient().index,u=X[s],f=Y[s],h=X[1-s],p=Y[1-s];o&&B("horizontal",l,t.get("selectorItemGap",!0));var g=t.get("selectorButtonGap",!0),v=l.getBoundingRect(),x=[-v.x,-v.y],d=qt(i);o&&(d[u]=i[u]-v[u]-g);var y=this._layoutContentAndController(t,n,d,s,u,h,p,f);if(o){if(c==="end")x[s]+=y[u]+g;else{var m=v[u]+g;x[s]-=m,y[f]-=m}y[u]+=v[u]+g,x[1-s]+=y[p]+y[h]/2-v[h]/2,y[h]=Math.max(y[h],v[h]),y[p]=Math.min(y[p],v[p]+x[1-s]),l.x=x[0],l.y=x[1],l.markRedraw()}return y},e.prototype._layoutContentAndController=function(t,r,i,n,o,c,l,s){var u=this.getContentGroup(),f=this._containerGroup,h=this._controllerGroup;B(t.get("orient"),u,t.get("itemGap"),n?i.width:null,n?null:i.height),B("horizontal",h,t.get("pageButtonItemGap",!0));var p=u.getBoundingRect(),g=h.getBoundingRect(),v=this._showController=p[o]>i[o],x=[-p.x,-p.y];r||(x[n]=u[s]);var d=[0,0],y=[-g.x,-g.y],m=nt(t.get("pageButtonGap",!0),t.get("itemGap",!0));if(v){var b=t.get("pageButtonPosition",!0);b==="end"?y[n]+=i[o]-g[o]:d[n]+=g[o]+m}y[1-n]+=p[c]/2-g[c]/2,u.setPosition(x),f.setPosition(d),h.setPosition(y);var S={x:0,y:0};if(S[o]=v?i[o]:p[o],S[c]=Math.max(p[c],g[c]),S[l]=Math.min(0,g[l]+y[1-n]),f.__rectSize=i[o],v){var L={x:0,y:0};L[o]=Math.max(i[o]-g[o]-m,0),L[c]=S[c],f.setClipPath(new N({shape:L})),f.__rectSize=L[o]}else h.eachChild(function(w){w.attr({invisible:!0,silent:!0})});var C=this._getPageInfo(t);return C.pageIndex!=null&&Jt(u,{x:C.contentPosition[0],y:C.contentPosition[1]},v?t:null),this._updatePageInfoView(t,C),S},e.prototype._pageGo=function(t,r,i){var n=this._getPageInfo(r)[t];n!=null&&i.dispatchAction({type:"legendScroll",scrollDataIndex:n,legendId:r.id})},e.prototype._updatePageInfoView=function(t,r){var i=this._controllerGroup;I(["pagePrev","pageNext"],function(u){var f=u+"DataIndex",h=r[f]!=null,p=i.childOfName(u);p&&(p.setStyle("fill",h?t.get("pageIconColor",!0):t.get("pageIconInactiveColor",!0)),p.cursor=h?"pointer":"default")});var n=i.childOfName("pageText"),o=t.get("pageFormatter"),c=r.pageIndex,l=c!=null?c+1:0,s=r.pageCount;n&&o&&n.setStyle("text",ut(o)?o.replace("{current}",l==null?"":l+"").replace("{total}",s==null?"":s+""):o({current:l,total:s}))},e.prototype._getPageInfo=function(t){var r=t.get("scrollDataIndex",!0),i=this.getContentGroup(),n=this._containerGroup.__rectSize,o=t.getOrient().index,c=X[o],l=Y[o],s=this._findTargetItemIndex(r),u=i.children(),f=u[s],h=u.length,p=h?1:0,g={contentPosition:[i.x,i.y],pageCount:p,pageIndex:p-1,pagePrevDataIndex:null,pageNextDataIndex:null};if(!f)return g;var v=b(f);g.contentPosition[o]=-v.s;for(var x=s+1,d=v,y=v,m=null;x<=h;++x)m=b(u[x]),(!m&&y.e>d.s+n||m&&!S(m,d.s))&&(y.i>d.i?d=y:d=m,d&&(g.pageNextDataIndex==null&&(g.pageNextDataIndex=d.i),++g.pageCount)),y=m;for(var x=s-1,d=v,y=v,m=null;x>=-1;--x)m=b(u[x]),(!m||!S(y,m.s))&&d.i<y.i&&(y=d,g.pagePrevDataIndex==null&&(g.pagePrevDataIndex=d.i),++g.pageCount,++g.pageIndex),d=m;return g;function b(L){if(L){var C=L.getBoundingRect(),w=C[l]+L[l];return{s:w,e:w+C[c],i:L.__legendDataIndex}}}function S(L,C){return L.e>=C&&L.s<=C+n}},e.prototype._findTargetItemIndex=function(t){if(!this._showController)return 0;var r,i=this.getContentGroup(),n;return i.eachChild(function(o,c){var l=o.__legendDataIndex;n==null&&l!=null&&(n=c),l===t&&(r=c)}),r!=null?r:n},e.type="legend.scroll",e}(wt),Ce=Le;function we(a){a.registerAction("legendScroll","legendscroll",function(e,t){var r=e.scrollDataIndex;r!=null&&t.eachComponent({mainType:"legend",subType:"scroll",query:e},function(i){i.setScrollDataIndex(r)})})}function Ie(a){K(It),a.registerComponentModel(Se),a.registerComponentView(Ce),we(a)}function Be(a){K(It),K(Ie)}function Oe(a){return{seriesType:a,reset:function(e,t){var r=t.findComponents({mainType:"legend"});if(!(!r||!r.length)){var i=e.getData();i.filterSelf(function(n){for(var o=i.getName(n),c=0;c<r.length;c++)if(!r[c].isSelected(o))return!1;return!0})}}}}var ke=function(){function a(e,t){this._getDataWithEncodedVisual=e,this._getRawData=t}return a.prototype.getAllNames=function(){var e=this._getRawData();return e.mapArray(e.getName)},a.prototype.containName=function(e){var t=this._getRawData();return t.indexOfName(e)>=0},a.prototype.indexOfName=function(e){var t=this._getDataWithEncodedVisual();return t.indexOfName(e)},a.prototype.getItemVisual=function(e,t){var r=this._getDataWithEncodedVisual();return r.getItemVisual(e,t)},a}(),ze=ke;export{De as A,ze as L,Re as a,Ge as b,Be as c,Oe as d,Pe as i,Ae as r};
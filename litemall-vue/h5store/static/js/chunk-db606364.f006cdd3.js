(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-db606364"],{"09fe":function(t,r,e){},"44bf":function(t,r,e){"use strict";var i=e("2638"),n=e.n(i),o=e("d282"),a=e("a142"),c=e("ea8e"),s=e("ad06"),l=Object(o["a"])("image"),d=l[0],u=l[1];r["a"]=d({props:{src:String,fit:String,alt:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},errorIcon:{type:String,default:"warning-o"},loadingIcon:{type:String,default:"photo-o"}},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var t={};return Object(a["b"])(this.width)&&(t.width=Object(c["a"])(this.width)),Object(a["b"])(this.height)&&(t.height=Object(c["a"])(this.height)),Object(a["b"])(this.radius)&&(t.overflow="hidden",t.borderRadius=Object(c["a"])(this.radius)),t}},created:function(){var t=this.$Lazyload;t&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){var r=t.el;r===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){var r=t.el;r!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},genPlaceholder:function(){var t=this.$createElement;return this.loading&&this.showLoading?t("div",{class:u("loading")},[this.slots("loading")||t(s["a"],{attrs:{name:this.loadingIcon},class:u("loading-icon")})]):this.error&&this.showError?t("div",{class:u("error")},[this.slots("error")||t(s["a"],{attrs:{name:this.errorIcon},class:u("error-icon")})]):void 0},genImage:function(){var t=this.$createElement,r={class:u("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",n()([{ref:"image",directives:[{name:"lazy",value:this.src}]},r])):t("img",n()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},r]))}},render:function(){var t=arguments[0];return t("div",{class:u({round:this.round}),style:this.style,on:{click:this.onClick}},[this.genImage(),this.genPlaceholder()])}})},"66fd":function(t,r,e){"use strict";var i=e("2638"),n=e.n(i),o=e("d282"),a=e("a142"),c=e("ba31"),s=e("a3e2"),l=e("44bf"),d=Object(o["a"])("card"),u=d[0],h=d[1];function f(t,r,e,i){var o,d=r.thumb,u=e.num||Object(a["b"])(r.num),f=e.price||Object(a["b"])(r.price),g=e["origin-price"]||Object(a["b"])(r.originPrice),b=u||f||g||e.bottom;function m(t){Object(c["a"])(i,"click-thumb",t)}function p(){if(e.tag||r.tag)return t("div",{class:h("tag")},[e.tag?e.tag():t(s["a"],{attrs:{mark:!0,type:"danger"}},[r.tag])])}function v(){if(e.thumb||d)return t("a",{attrs:{href:r.thumbLink},class:h("thumb"),on:{click:m}},[e.thumb?e.thumb():t(l["a"],{attrs:{src:d,width:"100%",height:"100%",fit:"cover","lazy-load":r.lazyLoad}}),p()])}function y(){return e.title?e.title():r.title?t("div",{class:[h("title"),"van-multi-ellipsis--l2"]},[r.title]):void 0}function L(){return e.desc?e.desc():r.desc?t("div",{class:[h("desc"),"van-ellipsis"]},[r.desc]):void 0}function S(){var e=r.price.toString().split(".");return t("div",[t("span",{class:h("price-currency")},[r.currency]),t("span",{class:h("price-integer")},[e[0]]),".",t("span",{class:h("price-decimal")},[e[1]])])}function j(){if(f)return t("div",{class:h("price")},[e.price?e.price():S()])}function k(){if(g){var i=e["origin-price"];return t("div",{class:h("origin-price")},[i?i():r.currency+" "+r.originPrice])}}function w(){if(u)return t("div",{class:h("num")},[e.num?e.num():"x"+r.num])}function z(){if(e.footer)return t("div",{class:h("footer")},[e.footer()])}return t("div",n()([{class:h()},Object(c["b"])(i,!0)]),[t("div",{class:h("header")},[v(),t("div",{class:h("content",{centered:r.centered})},[t("div",[y(),L(),null==e.tags?void 0:e.tags()]),b&&t("div",{class:"van-card__bottom"},[null==(o=e["price-top"])?void 0:o.call(e),j(),k(),w(),null==e.bottom?void 0:e.bottom()])])]),z()])}f.props={tag:String,desc:String,thumb:String,title:String,centered:Boolean,lazyLoad:Boolean,thumbLink:String,num:[Number,String],price:[Number,String],originPrice:[Number,String],currency:{type:String,default:"¥"}},r["a"]=u(f)},"87b5":function(t,r,e){},"8ea5":function(t,r,e){"use strict";e.r(r);var i=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("van-card",{attrs:{num:"2",currency:"买入价：¥",price:"2.00",title:"商品标题",thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"},scopedSlots:t._u([{key:"bottom",fn:function(){return[e("van-button",{attrs:{size:"mini",to:"/user/price"}},[t._v(" 一键转卖")])]},proxy:!0}])})},n=[],o=e("ade3"),a=(e("7f7f"),e("9cb7"),e("66fd")),c={data:function(){return{}},created:function(){},methods:{},components:Object(o["a"])({},a["a"].name,a["a"])},s=c,l=(e("d201"),e("2877")),d=Object(l["a"])(s,i,n,!1,null,"d2590ce6",null);r["default"]=d.exports},"9b7e":function(t,r,e){},"9cb7":function(t,r,e){"use strict";e("68ef"),e("9d70"),e("3743"),e("09fe"),e("9b7e"),e("ea82")},a3e2:function(t,r,e){"use strict";var i=e("2638"),n=e.n(i),o=e("d282"),a=e("ba31"),c=e("b1d2"),s=e("ad06"),l=Object(o["a"])("tag"),d=l[0],u=l[1];function h(t,r,e,i){var o,l,d=r.type,h=r.mark,f=r.plain,g=r.color,b=r.round,m=r.size,p=f?"color":"backgroundColor",v=(o={},o[p]=g,o);r.textColor&&(v.color=r.textColor);var y={mark:h,plain:f,round:b};m&&(y[m]=m);var L=r.closeable&&t(s["a"],{attrs:{name:"cross"},class:u("close"),on:{click:function(t){t.stopPropagation(),Object(a["a"])(i,"close")}}});return t("transition",{attrs:{name:r.closeable?"van-fade":null}},[t("span",n()([{key:"content",style:v,class:[u([y,d]),(l={},l[c["d"]]=f,l)]},Object(a["b"])(i,!0)]),[null==e.default?void 0:e.default(),L])])}h.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},r["a"]=d(h)},d201:function(t,r,e){"use strict";var i=e("87b5"),n=e.n(i);n.a},ea82:function(t,r,e){}}]);
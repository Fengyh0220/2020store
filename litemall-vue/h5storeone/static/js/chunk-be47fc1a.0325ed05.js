(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be47fc1a"],{"09fe":function(t,n,r){},"44bf":function(t,n,r){"use strict";var e=r("2638"),i=r.n(e),o=r("d282"),a=r("a142"),c=r("ea8e"),u=r("ad06"),s=Object(o["a"])("image"),d=s[0],l=s[1];n["a"]=d({props:{src:String,fit:String,alt:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},errorIcon:{type:String,default:"warning-o"},loadingIcon:{type:String,default:"photo-o"}},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var t={};return Object(a["b"])(this.width)&&(t.width=Object(c["a"])(this.width)),Object(a["b"])(this.height)&&(t.height=Object(c["a"])(this.height)),Object(a["b"])(this.radius)&&(t.overflow="hidden",t.borderRadius=Object(c["a"])(this.radius)),t}},created:function(){var t=this.$Lazyload;t&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){var n=t.el;n===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){var n=t.el;n!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},genPlaceholder:function(){var t=this.$createElement;return this.loading&&this.showLoading?t("div",{class:l("loading")},[this.slots("loading")||t(u["a"],{attrs:{name:this.loadingIcon},class:l("loading-icon")})]):this.error&&this.showError?t("div",{class:l("error")},[this.slots("error")||t(u["a"],{attrs:{name:this.errorIcon},class:l("error-icon")})]):void 0},genImage:function(){var t=this.$createElement,n={class:l("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",i()([{ref:"image",directives:[{name:"lazy",value:this.src}]},n])):t("img",i()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},n]))}},render:function(){var t=arguments[0];return t("div",{class:l({round:this.round}),style:this.style,on:{click:this.onClick}},[this.genImage(),this.genPlaceholder()])}})},"4d48":function(t,n,r){"use strict";r("68ef"),r("bf60")},"4ec3":function(t,n,r){"use strict";r.d(n,"C",(function(){return o})),r.d(n,"w",(function(){return c})),r.d(n,"v",(function(){return s})),r.d(n,"h",(function(){return l})),r.d(n,"i",(function(){return h})),r.d(n,"g",(function(){return m})),r.d(n,"j",(function(){return g})),r.d(n,"k",(function(){return j})),r.d(n,"m",(function(){return x})),r.d(n,"l",(function(){return y})),r.d(n,"f",(function(){return k})),r.d(n,"F",(function(){return $})),r.d(n,"D",(function(){return E})),r.d(n,"E",(function(){return N})),r.d(n,"o",(function(){return I})),r.d(n,"n",(function(){return _})),r.d(n,"t",(function(){return G})),r.d(n,"s",(function(){return D})),r.d(n,"u",(function(){return F})),r.d(n,"r",(function(){return K})),r.d(n,"p",(function(){return U})),r.d(n,"q",(function(){return q})),r.d(n,"y",(function(){return Q})),r.d(n,"x",(function(){return X})),r.d(n,"U",(function(){return Z})),r.d(n,"T",(function(){return nt})),r.d(n,"V",(function(){return et})),r.d(n,"d",(function(){return ot})),r.d(n,"c",(function(){return ct})),r.d(n,"e",(function(){return st})),r.d(n,"b",(function(){return lt})),r.d(n,"S",(function(){return ht})),r.d(n,"Q",(function(){return mt})),r.d(n,"O",(function(){return gt})),r.d(n,"P",(function(){return jt})),r.d(n,"N",(function(){return xt})),r.d(n,"K",(function(){return yt})),r.d(n,"R",(function(){return kt})),r.d(n,"M",(function(){return $t})),r.d(n,"L",(function(){return Et})),r.d(n,"B",(function(){return Nt})),r.d(n,"G",(function(){return It})),r.d(n,"z",(function(){return _t})),r.d(n,"A",(function(){return Gt})),r.d(n,"W",(function(){return Dt})),r.d(n,"H",(function(){return Ft})),r.d(n,"J",(function(){return Ht})),r.d(n,"I",(function(){return Kt})),r.d(n,"a",(function(){return Mt}));var e=r("b775"),i="wx/home/index";function o(){return Object(e["a"])({url:i,method:"get"})}var a="wx/catalog/index";function c(){return Object(e["a"])({url:a,method:"get"})}var u="wx/catalog/current";function s(t){return Object(e["a"])({url:u,method:"get",params:t})}var d="wx/auth/login";function l(t){return Object(e["a"])({url:d,method:"post",data:t})}var f="wx/auth/logout";function h(){return Object(e["a"])({url:f,method:"post"})}var p="wx/auth/info";function m(){return Object(e["a"])({url:p,method:"get"})}var b="wx/auth/profile";function g(t){return Object(e["a"])({url:b,method:"post",data:t})}var v="wx/auth/register";function j(t){return Object(e["a"])({url:v,method:"post",data:t})}var O="wx/auth/reset";function x(t){return Object(e["a"])({url:O,method:"post",data:t})}var w="wx/auth/regCaptcha";function y(t){return Object(e["a"])({url:w,method:"post",data:t})}var S="wx/auth/captcha";function k(t){return Object(e["a"])({url:S,method:"post",data:t})}var L="wx/goods/list";function $(t){return Object(e["a"])({url:L,method:"get",params:t})}var z="wx/goods/category";function E(t){return Object(e["a"])({url:z,method:"get",params:t})}var C="wx/goods/detail";function N(t){return Object(e["a"])({url:C,method:"get",params:t})}var B="wx/brand/list";function I(t){return Object(e["a"])({url:B,method:"get",params:t})}var R="wx/brand/detail";function _(t){return Object(e["a"])({url:R,method:"get",params:t})}var P="wx/cart/index";function G(t){return Object(e["a"])({url:P,method:"get",params:t})}var T="wx/cart/fastadd";function D(t){return Object(e["a"])({url:T,method:"post",data:t})}var J="wx/cart/update";function F(t){return Object(e["a"])({url:J,method:"post",data:t})}var H="wx/cart/delete";function K(t){return Object(e["a"])({url:H,method:"post",data:t})}var M="wx/cart/checked";function U(t){return Object(e["a"])({url:M,method:"post",data:t})}var V="wx/cart/checkout";function q(t){return Object(e["a"])({url:V,method:"get",params:t})}var A="wx/collect/list";function Q(t){return Object(e["a"])({url:A,method:"get",params:t})}var W="wx/collect/addordelete";function X(t){return Object(e["a"])({url:W,method:"post",data:t})}var Y="wx/topic/list";function Z(t){return Object(e["a"])({url:Y,method:"get",params:t})}var tt="wx/topic/detail";function nt(t){return Object(e["a"])({url:tt,method:"get",params:t})}var rt="wx/topic/related";function et(t){return Object(e["a"])({url:rt,method:"get",params:t})}var it="wx/address/list";function ot(t){return Object(e["a"])({url:it,method:"get",params:t})}var at="wx/address/detail";function ct(t){return Object(e["a"])({url:at,method:"get",params:t})}var ut="wx/address/save";function st(t){return Object(e["a"])({url:ut,method:"post",data:t})}var dt="wx/address/delete";function lt(t){return Object(e["a"])({url:dt,method:"post",data:t})}var ft="wx/order/submit";function ht(t){return Object(e["a"])({url:ft,method:"post",data:t})}var pt="wx/order/prepay";function mt(t){return Object(e["a"])({url:pt,method:"post",data:t})}var bt="wx/order/h5pay";function gt(t){return Object(e["a"])({url:bt,method:"post",data:t})}var vt="wx/order/list";function jt(t){return Object(e["a"])({url:vt,method:"get",params:t})}var Ot="wx/order/detail";function xt(t){return Object(e["a"])({url:Ot,method:"get",params:t})}var wt="wx/order/cancel";function yt(t){return Object(e["a"])({url:wt,method:"post",data:t})}var St="wx/order/refund";function kt(t){return Object(e["a"])({url:St,method:"post",data:t})}var Lt="wx/order/delete";function $t(t){return Object(e["a"])({url:Lt,method:"post",data:t})}var zt="wx/order/confirm";function Et(t){return Object(e["a"])({url:zt,method:"post",data:t})}var Ct="wx/feedback/submit";function Nt(t){return Object(e["a"])({url:Ct,method:"post",data:t})}var Bt="wx/groupon/list";function It(t){return Object(e["a"])({url:Bt,method:"get",params:t})}var Rt="wx/coupon/mylist";function _t(t){return Object(e["a"])({url:Rt,method:"get",params:t})}var Pt="wx/coupon/selectlist";function Gt(t){return Object(e["a"])({url:Pt,method:"get",params:t})}var Tt="wx/user/index";function Dt(){return Object(e["a"])({url:Tt,method:"get"})}var Jt="wx/issue/list";function Ft(){return Object(e["a"])({url:Jt,method:"get"})}function Ht(){return Object(e["a"])({url:"/wx/groupon/listTimeLimit",method:"post"})}function Kt(){return Object(e["a"])({url:"/wx/groupon/listPreSale",method:"post"})}var Mt=""},"666c":function(t,n,r){"use strict";r.r(n);var e,i=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"goods_topic"},[r("div",{staticClass:"topic-detail",domProps:{innerHTML:t._s(t.topic.content)}}),r("van-row",{attrs:{gutter:""}},t._l(t.topicGoods,(function(n,e){return r("van-col",{key:e,attrs:{span:"12"}},[r("router-link",{attrs:{to:{path:"/items/detail/"+n.id}}},[r("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:n.picUrl}})]),r("div",{staticStyle:{"margin-left":"20px"}},[t._v(t._s(n.name))]),r("div",{staticStyle:{"margin-left":"20px",color:"#ab956d"}},[t._v("￥ "+t._s(n.retailPrice))])],1)})),1)],1)},o=[],a=r("bd86"),c=(r("81e6"),r("9ffb")),u=(r("4d48"),r("d1e1")),s=(r("7f7f"),r("9cb7"),r("66fd")),d=(r("c5f6"),r("4ec3")),l={props:{topicId:[String,Number]},data:function(){return{topic:{},topicGoods:[],topicRelated:[]}},created:function(){this.init()},methods:{init:function(){var t=this;Object(d["T"])({id:this.topicId}).then((function(n){t.topic=n.data.data.topic,t.topicGoods=n.data.data.goods})),Object(d["V"])({id:this.topicId}).then((function(n){t.topicRelated=n.data.data}))},itemClick:function(t){this.$router.push("/items/detail/".concat(t))}},components:(e={},Object(a["a"])(e,s["a"].name,s["a"]),Object(a["a"])(e,u["a"].name,u["a"]),Object(a["a"])(e,c["a"].name,c["a"]),e)},f=l,h=(r("91a0"),r("2877")),p=Object(h["a"])(f,i,o,!1,null,"37c1fd8e",null);n["default"]=p.exports},"66fd":function(t,n,r){"use strict";var e=r("2638"),i=r.n(e),o=r("d282"),a=r("a142"),c=r("ba31"),u=r("a3e2"),s=r("44bf"),d=Object(o["a"])("card"),l=d[0],f=d[1];function h(t,n,r,e){var o,d=n.thumb,l=r.num||Object(a["b"])(n.num),h=r.price||Object(a["b"])(n.price),p=r["origin-price"]||Object(a["b"])(n.originPrice),m=l||h||p||r.bottom;function b(t){Object(c["a"])(e,"click-thumb",t)}function g(){if(r.tag||n.tag)return t("div",{class:f("tag")},[r.tag?r.tag():t(u["a"],{attrs:{mark:!0,type:"danger"}},[n.tag])])}function v(){if(r.thumb||d)return t("a",{attrs:{href:n.thumbLink},class:f("thumb"),on:{click:b}},[r.thumb?r.thumb():t(s["a"],{attrs:{src:d,width:"100%",height:"100%",fit:"cover","lazy-load":n.lazyLoad}}),g()])}function j(){return r.title?r.title():n.title?t("div",{class:[f("title"),"van-multi-ellipsis--l2"]},[n.title]):void 0}function O(){return r.desc?r.desc():n.desc?t("div",{class:[f("desc"),"van-ellipsis"]},[n.desc]):void 0}function x(){var r=n.price.toString().split(".");return t("div",[t("span",{class:f("price-currency")},[n.currency]),t("span",{class:f("price-integer")},[r[0]]),".",t("span",{class:f("price-decimal")},[r[1]])])}function w(){if(h)return t("div",{class:f("price")},[r.price?r.price():x()])}function y(){if(p){var e=r["origin-price"];return t("div",{class:f("origin-price")},[e?e():n.currency+" "+n.originPrice])}}function S(){if(l)return t("div",{class:f("num")},[r.num?r.num():"x"+n.num])}function k(){if(r.footer)return t("div",{class:f("footer")},[r.footer()])}return t("div",i()([{class:f()},Object(c["b"])(e,!0)]),[t("div",{class:f("header")},[v(),t("div",{class:f("content",{centered:n.centered})},[t("div",[j(),O(),null==r.tags?void 0:r.tags()]),m&&t("div",{class:"van-card__bottom"},[null==(o=r["price-top"])?void 0:o.call(r),w(),y(),S(),null==r.bottom?void 0:r.bottom()])])]),k()])}h.props={tag:String,desc:String,thumb:String,title:String,centered:Boolean,lazyLoad:Boolean,thumbLink:String,num:[Number,String],price:[Number,String],originPrice:[Number,String],currency:{type:String,default:"¥"}},n["a"]=l(h)},"7b0a":function(t,n,r){},"81e6":function(t,n,r){"use strict";r("68ef"),r("7b0a")},8647:function(t,n,r){},"91a0":function(t,n,r){"use strict";var e=r("8647"),i=r.n(e);i.a},9884:function(t,n,r){"use strict";r.d(n,"a",(function(){return o})),r.d(n,"b",(function(){return a}));var e=r("2b0e"),i=r("db85");function o(t,n){var r,o;void 0===n&&(n={});var a=n.indexKey||"index";return e["a"].extend({inject:(r={},r[t]={default:null},r),computed:(o={parent:function(){return this.disableBindRelation?null:this[t]}},o[a]=function(){return this.bindRelation(),this.parent?this.parent.children.indexOf(this):null},o),mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(n){return n!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]);Object(i["a"])(t,this.parent),this.parent.children=t}}}})}function a(t){return{provide:function(){var n;return n={},n[t]=this,n},data:function(){return{children:[]}}}}},"9b7e":function(t,n,r){},"9cb7":function(t,n,r){"use strict";r("68ef"),r("9d70"),r("3743"),r("09fe"),r("9b7e"),r("ea82")},"9ffb":function(t,n,r){"use strict";var e=r("d282"),i=r("9884"),o=Object(e["a"])("col"),a=o[0],c=o[1];n["a"]=a({mixins:[Object(i["a"])("vanRow")],props:{span:[Number,String],offset:[Number,String],tag:{type:String,default:"div"}},computed:{style:function(){var t=this.index,n=this.parent||{},r=n.spaces;if(r&&r[t]){var e=r[t],i=e.left,o=e.right;return{paddingLeft:i?i+"px":null,paddingRight:o?o+"px":null}}}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,n=arguments[0],r=this.span,e=this.offset;return n(this.tag,{style:this.style,class:c((t={},t[r]=r,t["offset-"+e]=e,t)),on:{click:this.onClick}},[this.slots()])}})},a3e2:function(t,n,r){"use strict";var e=r("2638"),i=r.n(e),o=r("d282"),a=r("ba31"),c=r("b1d2"),u=r("ad06"),s=Object(o["a"])("tag"),d=s[0],l=s[1];function f(t,n,r,e){var o,s,d=n.type,f=n.mark,h=n.plain,p=n.color,m=n.round,b=n.size,g=h?"color":"backgroundColor",v=(o={},o[g]=p,o);n.textColor&&(v.color=n.textColor);var j={mark:f,plain:h,round:m};b&&(j[b]=b);var O=n.closeable&&t(u["a"],{attrs:{name:"cross"},class:l("close"),on:{click:function(t){t.stopPropagation(),Object(a["a"])(e,"close")}}});return t("transition",{attrs:{name:n.closeable?"van-fade":null}},[t("span",i()([{key:"content",style:v,class:[l([j,d]),(s={},s[c["d"]]=h,s)]},Object(a["b"])(e,!0)]),[null==r.default?void 0:r.default(),O])])}f.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},n["a"]=d(f)},bf60:function(t,n,r){},d1e1:function(t,n,r){"use strict";var e=r("d282"),i=r("9884"),o=Object(e["a"])("row"),a=o[0],c=o[1];n["a"]=a({mixins:[Object(i["b"])("vanRow")],props:{type:String,align:String,justify:String,tag:{type:String,default:"div"},gutter:{type:[Number,String],default:0}},computed:{spaces:function(){var t=Number(this.gutter);if(t){var n=[],r=[[]],e=0;return this.children.forEach((function(t,n){e+=Number(t.span),e>24?(r.push([n]),e-=24):r[r.length-1].push(n)})),r.forEach((function(r){var e=t*(r.length-1)/r.length;r.forEach((function(r,i){if(0===i)n.push({right:e});else{var o=t-n[r-1].right,a=e-o;n.push({left:o,right:a})}}))})),n}}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,n=arguments[0],r=this.align,e=this.justify,i="flex"===this.type;return n(this.tag,{class:c((t={flex:i},t["align-"+r]=i&&r,t["justify-"+e]=i&&e,t)),on:{click:this.onClick}},[this.slots()])}})},db85:function(t,n,r){"use strict";function e(t){var n=[];function r(t){t.forEach((function(t){n.push(t),t.componentInstance&&r(t.componentInstance.$children.map((function(t){return t.$vnode}))),t.children&&r(t.children)}))}return r(t),n}function i(t,n){var r=n.$vnode.componentOptions;if(r&&r.children){var i=e(r.children);t.sort((function(t,n){return i.indexOf(t.$vnode)-i.indexOf(n.$vnode)}))}}r.d(n,"a",(function(){return i}))},ea82:function(t,n,r){}}]);
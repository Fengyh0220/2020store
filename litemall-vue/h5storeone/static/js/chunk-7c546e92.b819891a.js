(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c546e92"],{"02de":function(t,n,e){"use strict";function r(t){var n=window.getComputedStyle(t),e="none"===n.display,r=null===t.offsetParent&&"fixed"!==n.position;return e||r}e.d(n,"a",(function(){return r}))},"28fb":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"goods_topic_list"},[e("van-list",{attrs:{finished:t.finished,"immediate-check":!1,"finished-text":"没有更多了"},on:{load:t.getTopicList},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},t._l(t.list,(function(n,r){return e("div",{key:r,staticClass:"topic-info",on:{click:function(e){return t.itemClick(n.id)}}},[e("div",{staticClass:"name"},[e("img",{staticClass:"img",attrs:{src:n.picUrl,"background-size":"cover"}}),e("div",{staticClass:"info-box"},[e("div",{staticClass:"txt"},[t._v(t._s(n.title))]),e("div",{staticClass:"line"}),e("div",{staticClass:"price"},[t._v("阅读次数："+t._s(n.readCount))])])]),e("div",{staticClass:"desc"},[t._v("\n        "+t._s(n.subtitle)+"\n      ")])])})),0)],1)},i=[],a=e("bd86"),o=(e("7f7f"),e("2994"),e("2bdd")),u=e("75fc"),c=e("4ec3"),d={data:function(){return{list:[],page:0,limit:10,loading:!1,finished:!1}},created:function(){this.init()},methods:{init:function(){this.page=0,this.list=[],this.getTopicList()},getTopicList:function(){var t=this;this.page++,Object(c["U"])({page:this.page,limit:this.limit}).then((function(n){var e;(e=t.list).push.apply(e,Object(u["a"])(n.data.data.list)),t.loading=!1,t.finished=n.data.data.page>=n.data.data.pages}))},itemClick:function(t){this.$router.push("/items/topic/".concat(t))}},components:Object(a["a"])({},o["a"].name,o["a"])},s=d,l=(e("fcc7"),e("2877")),f=Object(l["a"])(s,r,i,!1,null,"06eabbf7",null);n["default"]=f.exports},2994:function(t,n,e){"use strict";e("68ef"),e("e3b3"),e("c0c2")},"2bdd":function(t,n,e){"use strict";var r=e("d282"),i=e("02de"),a=e("a8c1"),o=e("5fbe"),u=e("543e"),c=Object(r["a"])("list"),d=c[0],s=c[1],l=c[2];n["a"]=d({mixins:[Object(o["a"])((function(t){this.scroller||(this.scroller=Object(a["d"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var n,e=t.$el,r=t.scroller,a=t.offset,o=t.direction;n=r.getBoundingClientRect?r.getBoundingClientRect():{top:0,bottom:r.innerHeight};var u=n.bottom-n.top;if(!u||Object(i["a"])(e))return!1;var c=!1,d=t.$refs.placeholder.getBoundingClientRect();c="up"===o?n.top-d.top<=a:d.bottom-n.bottom<=a,c&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{class:s("loading"),key:"loading"},[this.slots("loading")||t(u["a"],{attrs:{size:"16"}},[this.loadingText||l("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var n=this.slots("finished")||this.finishedText;if(n)return t("div",{class:s("finished-text")},[n])}},genErrorText:function(){var t=this.$createElement;if(this.error){var n=this.slots("error")||this.errorText;if(n)return t("div",{on:{click:this.clickErrorText},class:s("error-text")},[n])}}},render:function(){var t=arguments[0],n=t("div",{ref:"placeholder",class:s("placeholder")});return t("div",{class:s(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():n,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():n])}})},"4ec3":function(t,n,e){"use strict";e.d(n,"E",(function(){return a})),e.d(n,"y",(function(){return u})),e.d(n,"x",(function(){return d})),e.d(n,"h",(function(){return l})),e.d(n,"i",(function(){return h})),e.d(n,"g",(function(){return p})),e.d(n,"j",(function(){return v})),e.d(n,"k",(function(){return x})),e.d(n,"m",(function(){return j})),e.d(n,"l",(function(){return k})),e.d(n,"f",(function(){return T})),e.d(n,"H",(function(){return L})),e.d(n,"F",(function(){return _})),e.d(n,"G",(function(){return B})),e.d(n,"o",(function(){return R})),e.d(n,"n",(function(){return F})),e.d(n,"v",(function(){return U})),e.d(n,"p",(function(){return N})),e.d(n,"t",(function(){return q})),e.d(n,"w",(function(){return D})),e.d(n,"s",(function(){return I})),e.d(n,"q",(function(){return M})),e.d(n,"u",(function(){return V})),e.d(n,"r",(function(){return X})),e.d(n,"A",(function(){return Z})),e.d(n,"z",(function(){return nt})),e.d(n,"U",(function(){return rt})),e.d(n,"T",(function(){return at})),e.d(n,"V",(function(){return ut})),e.d(n,"d",(function(){return dt})),e.d(n,"c",(function(){return lt})),e.d(n,"e",(function(){return ht})),e.d(n,"b",(function(){return pt})),e.d(n,"S",(function(){return vt})),e.d(n,"Q",(function(){return xt})),e.d(n,"O",(function(){return jt})),e.d(n,"P",(function(){return kt})),e.d(n,"N",(function(){return Tt})),e.d(n,"K",(function(){return Lt})),e.d(n,"R",(function(){return _t})),e.d(n,"M",(function(){return Bt})),e.d(n,"L",(function(){return Rt})),e.d(n,"D",(function(){return Ft})),e.d(n,"I",(function(){return Ut})),e.d(n,"B",(function(){return Nt})),e.d(n,"C",(function(){return qt})),e.d(n,"W",(function(){return Dt})),e.d(n,"J",(function(){return It})),e.d(n,"a",(function(){return Kt}));var r=e("b775"),i="wx/home/index";function a(){return Object(r["a"])({url:i,method:"get"})}var o="wx/catalog/index";function u(){return Object(r["a"])({url:o,method:"get"})}var c="wx/catalog/current";function d(t){return Object(r["a"])({url:c,method:"get",params:t})}var s="wx/auth/login";function l(t){return Object(r["a"])({url:s,method:"post",data:t})}var f="wx/auth/logout";function h(){return Object(r["a"])({url:f,method:"post"})}var m="wx/auth/info";function p(){return Object(r["a"])({url:m,method:"get"})}var g="wx/auth/profile";function v(t){return Object(r["a"])({url:g,method:"post",data:t})}var b="wx/auth/register";function x(t){return Object(r["a"])({url:b,method:"post",data:t})}var w="wx/auth/reset";function j(t){return Object(r["a"])({url:w,method:"post",data:t})}var O="wx/auth/regCaptcha";function k(t){return Object(r["a"])({url:O,method:"post",data:t})}var C="wx/auth/captcha";function T(t){return Object(r["a"])({url:C,method:"post",data:t})}var y="wx/goods/list";function L(t){return Object(r["a"])({url:y,method:"get",params:t})}var $="wx/goods/category";function _(t){return Object(r["a"])({url:$,method:"get",params:t})}var E="wx/goods/detail";function B(t){return Object(r["a"])({url:E,method:"get",params:t})}var S="wx/brand/list";function R(t){return Object(r["a"])({url:S,method:"get",params:t})}var z="wx/brand/detail";function F(t){return Object(r["a"])({url:z,method:"get",params:t})}var J="wx/cart/index";function U(t){return Object(r["a"])({url:J,method:"get",params:t})}var H="wx/cart/add";function N(t){return Object(r["a"])({url:H,method:"post",data:t})}var P="wx/cart/fastadd";function q(t){return Object(r["a"])({url:P,method:"post",data:t})}var A="wx/cart/update";function D(t){return Object(r["a"])({url:A,method:"post",data:t})}var G="wx/cart/delete";function I(t){return Object(r["a"])({url:G,method:"post",data:t})}var K="wx/cart/checked";function M(t){return Object(r["a"])({url:K,method:"post",data:t})}var Q="wx/cart/goodscount";function V(){return Object(r["a"])({url:Q,method:"get"})}var W="wx/cart/checkout";function X(t){return Object(r["a"])({url:W,method:"get",params:t})}var Y="wx/collect/list";function Z(t){return Object(r["a"])({url:Y,method:"get",params:t})}var tt="wx/collect/addordelete";function nt(t){return Object(r["a"])({url:tt,method:"post",data:t})}var et="wx/topic/list";function rt(t){return Object(r["a"])({url:et,method:"get",params:t})}var it="wx/topic/detail";function at(t){return Object(r["a"])({url:it,method:"get",params:t})}var ot="wx/topic/related";function ut(t){return Object(r["a"])({url:ot,method:"get",params:t})}var ct="wx/address/list";function dt(t){return Object(r["a"])({url:ct,method:"get",params:t})}var st="wx/address/detail";function lt(t){return Object(r["a"])({url:st,method:"get",params:t})}var ft="wx/address/save";function ht(t){return Object(r["a"])({url:ft,method:"post",data:t})}var mt="wx/address/delete";function pt(t){return Object(r["a"])({url:mt,method:"post",data:t})}var gt="wx/order/submit";function vt(t){return Object(r["a"])({url:gt,method:"post",data:t})}var bt="wx/order/prepay";function xt(t){return Object(r["a"])({url:bt,method:"post",data:t})}var wt="wx/order/h5pay";function jt(t){return Object(r["a"])({url:wt,method:"post",data:t})}var Ot="wx/order/list";function kt(t){return Object(r["a"])({url:Ot,method:"get",params:t})}var Ct="wx/order/detail";function Tt(t){return Object(r["a"])({url:Ct,method:"get",params:t})}var yt="wx/order/cancel";function Lt(t){return Object(r["a"])({url:yt,method:"post",data:t})}var $t="wx/order/refund";function _t(t){return Object(r["a"])({url:$t,method:"post",data:t})}var Et="wx/order/delete";function Bt(t){return Object(r["a"])({url:Et,method:"post",data:t})}var St="wx/order/confirm";function Rt(t){return Object(r["a"])({url:St,method:"post",data:t})}var zt="wx/feedback/submit";function Ft(t){return Object(r["a"])({url:zt,method:"post",data:t})}var Jt="wx/groupon/list";function Ut(t){return Object(r["a"])({url:Jt,method:"get",params:t})}var Ht="wx/coupon/mylist";function Nt(t){return Object(r["a"])({url:Ht,method:"get",params:t})}var Pt="wx/coupon/selectlist";function qt(t){return Object(r["a"])({url:Pt,method:"get",params:t})}var At="wx/user/index";function Dt(){return Object(r["a"])({url:At,method:"get"})}var Gt="wx/issue/list";function It(){return Object(r["a"])({url:Gt,method:"get"})}var Kt=""},c0c2:function(t,n,e){},e1cb:function(t,n,e){},fcc7:function(t,n,e){"use strict";var r=e("e1cb"),i=e.n(r);i.a}}]);
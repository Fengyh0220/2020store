(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5961a3a8"],{"02de":function(t,r,n){"use strict";function e(t){var r=window.getComputedStyle(t),n="none"===r.display,e=null===t.offsetParent&&"fixed"!==r.position;return n||e}n.d(r,"a",(function(){return e}))},"09fe":function(t,r,n){},"10aa":function(t,r,n){},"1a8c":function(t,r){function n(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)}t.exports=n},"206d":function(t,r,n){"use strict";n.r(r);var e,i=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"goods_hot"},[t._m(0),n("van-list",{attrs:{finished:t.finished,"immediate-check":!1,"finished-text":"没有更多了"},on:{load:t.getHotList},model:{value:t.loading,callback:function(r){t.loading=r},expression:"loading"}},t._l(t.list,(function(r,e){return n("van-card",{key:e,attrs:{desc:r.brief,title:r.name,thumb:r.picUrl,price:r.retailPrice,"origin-price":r.counterPrice},on:{click:function(n){return t.itemClick(r.id)}}})})),1)],1)},o=[function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"banner"},[n("div",{staticClass:"title"},[t._v("大家都在买")])])}],a=n("bd86"),c=(n("9cb7"),n("66fd")),u=(n("7f7f"),n("2994"),n("2bdd")),s=n("75fc"),d=n("4ec3"),l=n("e76c"),f={mixins:[l["a"]],data:function(){return{list:[],page:0,limit:10,loading:!1,finished:!1}},created:function(){this.init()},methods:{init:function(){this.page=0,this.list=[],this.getHotList()},getHotList:function(){var t=this;this.page++,Object(d["F"])({isHot:!0,page:this.page,limit:this.limit}).then((function(r){var n;(n=t.list).push.apply(n,Object(s["a"])(r.data.data.list)),t.loading=!1,t.finished=r.data.data.page>=r.data.data.pages}))},itemClick:function(t){this.$router.push("/items/detail/".concat(t))}},components:(e={},Object(a["a"])(e,u["a"].name,u["a"]),Object(a["a"])(e,c["a"].name,c["a"]),e)},h=f,m=(n("6fb1"),n("2877")),g=Object(m["a"])(h,i,o,!1,null,"d707f89c",null);r["default"]=g.exports},2994:function(t,r,n){"use strict";n("68ef"),n("e3b3"),n("c0c2")},"2bdd":function(t,r,n){"use strict";var e=n("d282"),i=n("02de"),o=n("a8c1"),a=n("5fbe"),c=n("543e"),u=Object(e["a"])("list"),s=u[0],d=u[1],l=u[2];r["a"]=s({mixins:[Object(a["a"])((function(t){this.scroller||(this.scroller=Object(o["d"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var r,n=t.$el,e=t.scroller,o=t.offset,a=t.direction;r=e.getBoundingClientRect?e.getBoundingClientRect():{top:0,bottom:e.innerHeight};var c=r.bottom-r.top;if(!c||Object(i["a"])(n))return!1;var u=!1,s=t.$refs.placeholder.getBoundingClientRect();u="up"===a?r.top-s.top<=o:s.bottom-r.bottom<=o,u&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{class:d("loading"),key:"loading"},[this.slots("loading")||t(c["a"],{attrs:{size:"16"}},[this.loadingText||l("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var r=this.slots("finished")||this.finishedText;if(r)return t("div",{class:d("finished-text")},[r])}},genErrorText:function(){var t=this.$createElement;if(this.error){var r=this.slots("error")||this.errorText;if(r)return t("div",{on:{click:this.clickErrorText},class:d("error-text")},[r])}}},render:function(){var t=arguments[0],r=t("div",{ref:"placeholder",class:d("placeholder")});return t("div",{class:d(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():r,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():r])}})},"408c":function(t,r,n){var e=n("2b3e"),i=function(){return e.Date.now()};t.exports=i},"44bf":function(t,r,n){"use strict";var e=n("2638"),i=n.n(e),o=n("d282"),a=n("a142"),c=n("ea8e"),u=n("ad06"),s=Object(o["a"])("image"),d=s[0],l=s[1];r["a"]=d({props:{src:String,fit:String,alt:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},errorIcon:{type:String,default:"warning-o"},loadingIcon:{type:String,default:"photo-o"}},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var t={};return Object(a["b"])(this.width)&&(t.width=Object(c["a"])(this.width)),Object(a["b"])(this.height)&&(t.height=Object(c["a"])(this.height)),Object(a["b"])(this.radius)&&(t.overflow="hidden",t.borderRadius=Object(c["a"])(this.radius)),t}},created:function(){var t=this.$Lazyload;t&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){var r=t.el;r===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){var r=t.el;r!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},genPlaceholder:function(){var t=this.$createElement;return this.loading&&this.showLoading?t("div",{class:l("loading")},[this.slots("loading")||t(u["a"],{attrs:{name:this.loadingIcon},class:l("loading-icon")})]):this.error&&this.showError?t("div",{class:l("error")},[this.slots("error")||t(u["a"],{attrs:{name:this.errorIcon},class:l("error-icon")})]):void 0},genImage:function(){var t=this.$createElement,r={class:l("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",i()([{ref:"image",directives:[{name:"lazy",value:this.src}]},r])):t("img",i()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},r]))}},render:function(){var t=arguments[0];return t("div",{class:l({round:this.round}),style:this.style,on:{click:this.onClick}},[this.genImage(),this.genPlaceholder()])}})},"4ec3":function(t,r,n){"use strict";n.d(r,"C",(function(){return o})),n.d(r,"w",(function(){return c})),n.d(r,"v",(function(){return s})),n.d(r,"h",(function(){return l})),n.d(r,"i",(function(){return h})),n.d(r,"g",(function(){return g})),n.d(r,"j",(function(){return b})),n.d(r,"k",(function(){return x})),n.d(r,"m",(function(){return O})),n.d(r,"l",(function(){return y})),n.d(r,"f",(function(){return L})),n.d(r,"F",(function(){return S})),n.d(r,"D",(function(){return E})),n.d(r,"E",(function(){return z})),n.d(r,"o",(function(){return P})),n.d(r,"n",(function(){return _})),n.d(r,"t",(function(){return H})),n.d(r,"s",(function(){return R})),n.d(r,"u",(function(){return J})),n.d(r,"r",(function(){return W})),n.d(r,"p",(function(){return q})),n.d(r,"q",(function(){return G})),n.d(r,"y",(function(){return Q})),n.d(r,"x",(function(){return X})),n.d(r,"U",(function(){return Z})),n.d(r,"T",(function(){return rt})),n.d(r,"V",(function(){return et})),n.d(r,"d",(function(){return ot})),n.d(r,"c",(function(){return ct})),n.d(r,"e",(function(){return st})),n.d(r,"b",(function(){return lt})),n.d(r,"S",(function(){return ht})),n.d(r,"Q",(function(){return gt})),n.d(r,"O",(function(){return bt})),n.d(r,"P",(function(){return xt})),n.d(r,"N",(function(){return Ot})),n.d(r,"K",(function(){return yt})),n.d(r,"R",(function(){return Lt})),n.d(r,"M",(function(){return St})),n.d(r,"L",(function(){return Et})),n.d(r,"B",(function(){return zt})),n.d(r,"G",(function(){return Pt})),n.d(r,"z",(function(){return _t})),n.d(r,"A",(function(){return Ht})),n.d(r,"W",(function(){return Rt})),n.d(r,"H",(function(){return Jt})),n.d(r,"J",(function(){return Mt})),n.d(r,"I",(function(){return Wt})),n.d(r,"a",(function(){return Ut}));var e=n("b775"),i="wx/home/index";function o(){return Object(e["a"])({url:i,method:"get"})}var a="wx/catalog/index";function c(){return Object(e["a"])({url:a,method:"get"})}var u="wx/catalog/current";function s(t){return Object(e["a"])({url:u,method:"get",params:t})}var d="wx/auth/login";function l(t){return Object(e["a"])({url:d,method:"post",data:t})}var f="wx/auth/logout";function h(){return Object(e["a"])({url:f,method:"post"})}var m="wx/auth/info";function g(){return Object(e["a"])({url:m,method:"get"})}var p="wx/auth/profile";function b(t){return Object(e["a"])({url:p,method:"post",data:t})}var v="wx/auth/register";function x(t){return Object(e["a"])({url:v,method:"post",data:t})}var j="wx/auth/reset";function O(t){return Object(e["a"])({url:j,method:"post",data:t})}var w="wx/auth/regCaptcha";function y(t){return Object(e["a"])({url:w,method:"post",data:t})}var k="wx/auth/captcha";function L(t){return Object(e["a"])({url:k,method:"post",data:t})}var $="wx/goods/list";function S(t){return Object(e["a"])({url:$,method:"get",params:t})}var T="wx/goods/category";function E(t){return Object(e["a"])({url:T,method:"get",params:t})}var C="wx/goods/detail";function z(t){return Object(e["a"])({url:C,method:"get",params:t})}var B="wx/brand/list";function P(t){return Object(e["a"])({url:B,method:"get",params:t})}var N="wx/brand/detail";function _(t){return Object(e["a"])({url:N,method:"get",params:t})}var I="wx/cart/index";function H(t){return Object(e["a"])({url:I,method:"get",params:t})}var F="wx/cart/fastadd";function R(t){return Object(e["a"])({url:F,method:"post",data:t})}var D="wx/cart/update";function J(t){return Object(e["a"])({url:D,method:"post",data:t})}var M="wx/cart/delete";function W(t){return Object(e["a"])({url:M,method:"post",data:t})}var U="wx/cart/checked";function q(t){return Object(e["a"])({url:U,method:"post",data:t})}var A="wx/cart/checkout";function G(t){return Object(e["a"])({url:A,method:"get",params:t})}var K="wx/collect/list";function Q(t){return Object(e["a"])({url:K,method:"get",params:t})}var V="wx/collect/addordelete";function X(t){return Object(e["a"])({url:V,method:"post",data:t})}var Y="wx/topic/list";function Z(t){return Object(e["a"])({url:Y,method:"get",params:t})}var tt="wx/topic/detail";function rt(t){return Object(e["a"])({url:tt,method:"get",params:t})}var nt="wx/topic/related";function et(t){return Object(e["a"])({url:nt,method:"get",params:t})}var it="wx/address/list";function ot(t){return Object(e["a"])({url:it,method:"get",params:t})}var at="wx/address/detail";function ct(t){return Object(e["a"])({url:at,method:"get",params:t})}var ut="wx/address/save";function st(t){return Object(e["a"])({url:ut,method:"post",data:t})}var dt="wx/address/delete";function lt(t){return Object(e["a"])({url:dt,method:"post",data:t})}var ft="wx/order/submit";function ht(t){return Object(e["a"])({url:ft,method:"post",data:t})}var mt="wx/order/prepay";function gt(t){return Object(e["a"])({url:mt,method:"post",data:t})}var pt="wx/order/h5pay";function bt(t){return Object(e["a"])({url:pt,method:"post",data:t})}var vt="wx/order/list";function xt(t){return Object(e["a"])({url:vt,method:"get",params:t})}var jt="wx/order/detail";function Ot(t){return Object(e["a"])({url:jt,method:"get",params:t})}var wt="wx/order/cancel";function yt(t){return Object(e["a"])({url:wt,method:"post",data:t})}var kt="wx/order/refund";function Lt(t){return Object(e["a"])({url:kt,method:"post",data:t})}var $t="wx/order/delete";function St(t){return Object(e["a"])({url:$t,method:"post",data:t})}var Tt="wx/order/confirm";function Et(t){return Object(e["a"])({url:Tt,method:"post",data:t})}var Ct="wx/feedback/submit";function zt(t){return Object(e["a"])({url:Ct,method:"post",data:t})}var Bt="wx/groupon/list";function Pt(t){return Object(e["a"])({url:Bt,method:"get",params:t})}var Nt="wx/coupon/mylist";function _t(t){return Object(e["a"])({url:Nt,method:"get",params:t})}var It="wx/coupon/selectlist";function Ht(t){return Object(e["a"])({url:It,method:"get",params:t})}var Ft="wx/user/index";function Rt(){return Object(e["a"])({url:Ft,method:"get"})}var Dt="wx/issue/list";function Jt(){return Object(e["a"])({url:Dt,method:"get"})}function Mt(){return Object(e["a"])({url:"/wx/groupon/listTimeLimit",method:"post"})}function Wt(){return Object(e["a"])({url:"/wx/groupon/listPreSale",method:"post"})}var Ut=""},"66fd":function(t,r,n){"use strict";var e=n("2638"),i=n.n(e),o=n("d282"),a=n("a142"),c=n("ba31"),u=n("a3e2"),s=n("44bf"),d=Object(o["a"])("card"),l=d[0],f=d[1];function h(t,r,n,e){var o,d=r.thumb,l=n.num||Object(a["b"])(r.num),h=n.price||Object(a["b"])(r.price),m=n["origin-price"]||Object(a["b"])(r.originPrice),g=l||h||m||n.bottom;function p(t){Object(c["a"])(e,"click-thumb",t)}function b(){if(n.tag||r.tag)return t("div",{class:f("tag")},[n.tag?n.tag():t(u["a"],{attrs:{mark:!0,type:"danger"}},[r.tag])])}function v(){if(n.thumb||d)return t("a",{attrs:{href:r.thumbLink},class:f("thumb"),on:{click:p}},[n.thumb?n.thumb():t(s["a"],{attrs:{src:d,width:"100%",height:"100%",fit:"cover","lazy-load":r.lazyLoad}}),b()])}function x(){return n.title?n.title():r.title?t("div",{class:[f("title"),"van-multi-ellipsis--l2"]},[r.title]):void 0}function j(){return n.desc?n.desc():r.desc?t("div",{class:[f("desc"),"van-ellipsis"]},[r.desc]):void 0}function O(){var n=r.price.toString().split(".");return t("div",[t("span",{class:f("price-currency")},[r.currency]),t("span",{class:f("price-integer")},[n[0]]),".",t("span",{class:f("price-decimal")},[n[1]])])}function w(){if(h)return t("div",{class:f("price")},[n.price?n.price():O()])}function y(){if(m){var e=n["origin-price"];return t("div",{class:f("origin-price")},[e?e():r.currency+" "+r.originPrice])}}function k(){if(l)return t("div",{class:f("num")},[n.num?n.num():"x"+r.num])}function L(){if(n.footer)return t("div",{class:f("footer")},[n.footer()])}return t("div",i()([{class:f()},Object(c["b"])(e,!0)]),[t("div",{class:f("header")},[v(),t("div",{class:f("content",{centered:r.centered})},[t("div",[x(),j(),null==n.tags?void 0:n.tags()]),g&&t("div",{class:"van-card__bottom"},[null==(o=n["price-top"])?void 0:o.call(n),w(),y(),k(),null==n.bottom?void 0:n.bottom()])])]),L()])}h.props={tag:String,desc:String,thumb:String,title:String,centered:Boolean,lazyLoad:Boolean,thumbLink:String,num:[Number,String],price:[Number,String],originPrice:[Number,String],currency:{type:String,default:"¥"}},r["a"]=l(h)},"6fb1":function(t,r,n){"use strict";var e=n("10aa"),i=n.n(e);i.a},"9b7e":function(t,r,n){},"9cb7":function(t,r,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("09fe"),n("9b7e"),n("ea82")},a3e2:function(t,r,n){"use strict";var e=n("2638"),i=n.n(e),o=n("d282"),a=n("ba31"),c=n("b1d2"),u=n("ad06"),s=Object(o["a"])("tag"),d=s[0],l=s[1];function f(t,r,n,e){var o,s,d=r.type,f=r.mark,h=r.plain,m=r.color,g=r.round,p=r.size,b=h?"color":"backgroundColor",v=(o={},o[b]=m,o);r.textColor&&(v.color=r.textColor);var x={mark:f,plain:h,round:g};p&&(x[p]=p);var j=r.closeable&&t(u["a"],{attrs:{name:"cross"},class:l("close"),on:{click:function(t){t.stopPropagation(),Object(a["a"])(e,"close")}}});return t("transition",{attrs:{name:r.closeable?"van-fade":null}},[t("span",i()([{key:"content",style:v,class:[l([x,d]),(s={},s[c["d"]]=h,s)]},Object(a["b"])(e,!0)]),[null==n.default?void 0:n.default(),j])])}f.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},r["a"]=d(f)},b047:function(t,r,n){var e=n("1a8c"),i=n("408c"),o=n("b4b0"),a="Expected a function",c=Math.max,u=Math.min;function s(t,r,n){var s,d,l,f,h,m,g=0,p=!1,b=!1,v=!0;if("function"!=typeof t)throw new TypeError(a);function x(r){var n=s,e=d;return s=d=void 0,g=r,f=t.apply(e,n),f}function j(t){return g=t,h=setTimeout(y,r),p?x(t):f}function O(t){var n=t-m,e=t-g,i=r-n;return b?u(i,l-e):i}function w(t){var n=t-m,e=t-g;return void 0===m||n>=r||n<0||b&&e>=l}function y(){var t=i();if(w(t))return k(t);h=setTimeout(y,O(t))}function k(t){return h=void 0,v&&s?x(t):(s=d=void 0,f)}function L(){void 0!==h&&clearTimeout(h),g=0,s=m=d=h=void 0}function $(){return void 0===h?f:k(i())}function S(){var t=i(),n=w(t);if(s=arguments,d=this,m=t,n){if(void 0===h)return j(m);if(b)return clearTimeout(h),h=setTimeout(y,r),x(m)}return void 0===h&&(h=setTimeout(y,r)),f}return r=o(r)||0,e(n)&&(p=!!n.leading,b="maxWait"in n,l=b?c(o(n.maxWait)||0,r):l,v="trailing"in n?!!n.trailing:v),S.cancel=L,S.flush=$,S}t.exports=s},b4b0:function(t,r,n){var e=n("1a8c"),i=n("ffd6"),o=NaN,a=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,d=parseInt;function l(t){if("number"==typeof t)return t;if(i(t))return o;if(e(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=e(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=u.test(t);return n||s.test(t)?d(t.slice(2),n?2:8):c.test(t)?o:+t}t.exports=l},c0c2:function(t,r,n){},e76c:function(t,r,n){"use strict";var e=n("b047"),i=n.n(e);r["a"]={data:function(){return{scrollTop:0}},mounted:function(){var t=this;t.$el.addEventListener("scroll",i()((function(){t.scrollTop=t.$el.scrollTop}),50))},activated:function(){this.$el.scrollTop=this.scrollTop}}},ea82:function(t,r,n){},ffd6:function(t,r,n){var e=n("3729"),i=n("1310"),o="[object Symbol]";function a(t){return"symbol"==typeof t||i(t)&&e(t)==o}t.exports=a}}]);
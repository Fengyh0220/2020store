(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a8fa0bba"],{"02de":function(t,e,n){"use strict";function r(t){var e=window.getComputedStyle(t),n="none"===e.display,r=null===t.offsetParent&&"fixed"!==e.position;return n||r}n.d(e,"a",(function(){return r}))},"09fe":function(t,e,n){},"0b33":function(t,e,n){"use strict";var r=n("c31d"),i=n("d282"),o=n("a142"),a=n("9884"),s=n("48f4"),c=Object(i["a"])("tab"),u=c[0],l=c[1];e["a"]=u({mixins:[Object(a["a"])("vanTabs")],props:Object(r["a"])(Object(r["a"])({},s["c"]),{},{dot:Boolean,name:[Number,String],info:[Number,String],badge:[Number,String],title:String,titleStyle:null,disabled:Boolean}),data:function(){return{inited:!1}},computed:{computedName:function(){return Object(o["b"])(this.name)?this.name:this.index},isActive:function(){var t=this.computedName===this.parent.currentName;return t&&(this.inited=!0),t}},watch:{title:function(){this.parent.setLine()},inited:function(t){var e=this;this.parent.lazyRender&&t&&this.$nextTick((function(){e.parent.$emit("rendered",e.computedName,e.title)}))}},render:function(t){var e=this.slots,n=this.parent,r=this.isActive,i=this.inited||n.scrollspy||!n.lazyRender,o=n.scrollspy||r,a=i?e():t();return n.animated?t("div",{attrs:{role:"tabpanel","aria-hidden":!r},class:l("pane-wrapper",{inactive:!r})},[t("div",{class:l("pane")},[a])]):t("div",{directives:[{name:"show",value:o}],attrs:{role:"tabpanel"},class:l("pane")},[a])}})},"44bf":function(t,e,n){"use strict";var r=n("2638"),i=n.n(r),o=n("d282"),a=n("a142"),s=n("ea8e"),c=n("ad06"),u=Object(o["a"])("image"),l=u[0],d=u[1];e["a"]=l({props:{src:String,fit:String,alt:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},errorIcon:{type:String,default:"warning-o"},loadingIcon:{type:String,default:"photo-o"}},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var t={};return Object(a["b"])(this.width)&&(t.width=Object(s["a"])(this.width)),Object(a["b"])(this.height)&&(t.height=Object(s["a"])(this.height)),Object(a["b"])(this.radius)&&(t.overflow="hidden",t.borderRadius=Object(s["a"])(this.radius)),t}},created:function(){var t=this.$Lazyload;t&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){var e=t.el;e===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){var e=t.el;e!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},genPlaceholder:function(){var t=this.$createElement;return this.loading&&this.showLoading?t("div",{class:d("loading")},[this.slots("loading")||t(c["a"],{attrs:{name:this.loadingIcon},class:d("loading-icon")})]):this.error&&this.showError?t("div",{class:d("error")},[this.slots("error")||t(c["a"],{attrs:{name:this.errorIcon},class:d("error-icon")})]):void 0},genImage:function(){var t=this.$createElement,e={class:d("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",i()([{ref:"image",directives:[{name:"lazy",value:this.src}]},e])):t("img",i()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},e]))}},render:function(){var t=arguments[0];return t("div",{class:d({round:this.round}),style:this.style,on:{click:this.onClick}},[this.genImage(),this.genPlaceholder()])}})},4598:function(t,e,n){"use strict";(function(t){n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d}));var r=n("a142"),i=Date.now();function o(t){var e=Date.now(),n=Math.max(0,16-(e-i)),r=setTimeout(t,n);return i=e+n,r}var a=r["f"]?t:window,s=a.requestAnimationFrame||o,c=a.cancelAnimationFrame||a.clearTimeout;function u(t){return s.call(a,t)}function l(t){u((function(){u(t)}))}function d(t){c.call(a,t)}}).call(this,n("c8ba"))},"4ec3":function(t,e,n){"use strict";n.d(e,"B",(function(){return o})),n.d(e,"v",(function(){return s})),n.d(e,"u",(function(){return u})),n.d(e,"h",(function(){return d})),n.d(e,"i",(function(){return f})),n.d(e,"g",(function(){return p})),n.d(e,"j",(function(){return v})),n.d(e,"k",(function(){return x})),n.d(e,"l",(function(){return j})),n.d(e,"f",(function(){return y})),n.d(e,"E",(function(){return k})),n.d(e,"C",(function(){return I})),n.d(e,"D",(function(){return L})),n.d(e,"n",(function(){return T})),n.d(e,"m",(function(){return z})),n.d(e,"s",(function(){return A})),n.d(e,"r",(function(){return F})),n.d(e,"t",(function(){return D})),n.d(e,"q",(function(){return M})),n.d(e,"o",(function(){return V})),n.d(e,"p",(function(){return J})),n.d(e,"x",(function(){return K})),n.d(e,"w",(function(){return G})),n.d(e,"T",(function(){return U})),n.d(e,"S",(function(){return Z})),n.d(e,"U",(function(){return et})),n.d(e,"d",(function(){return rt})),n.d(e,"c",(function(){return ot})),n.d(e,"e",(function(){return st})),n.d(e,"b",(function(){return ut})),n.d(e,"R",(function(){return dt})),n.d(e,"P",(function(){return ft})),n.d(e,"N",(function(){return pt})),n.d(e,"O",(function(){return vt})),n.d(e,"M",(function(){return xt})),n.d(e,"J",(function(){return jt})),n.d(e,"Q",(function(){return yt})),n.d(e,"L",(function(){return kt})),n.d(e,"K",(function(){return It})),n.d(e,"A",(function(){return Lt})),n.d(e,"F",(function(){return Tt})),n.d(e,"y",(function(){return zt})),n.d(e,"z",(function(){return At})),n.d(e,"V",(function(){return Ft})),n.d(e,"G",(function(){return Dt})),n.d(e,"I",(function(){return Ht})),n.d(e,"H",(function(){return Mt})),n.d(e,"a",(function(){return Wt}));var r=n("b775"),i="wx/home/index";function o(){return Object(r["a"])({url:i,method:"get"})}var a="wx/catalog/index";function s(){return Object(r["a"])({url:a,method:"get"})}var c="wx/catalog/current";function u(t){return Object(r["a"])({url:c,method:"get",params:t})}var l="wx/auth/login";function d(t){return Object(r["a"])({url:l,method:"post",data:t})}var h="wx/auth/logout";function f(){return Object(r["a"])({url:h,method:"post"})}var b="wx/auth/info";function p(){return Object(r["a"])({url:b,method:"get"})}var m="wx/auth/profile";function v(t){return Object(r["a"])({url:m,method:"post",data:t})}var g="wx/auth/register";function x(t){return Object(r["a"])({url:g,method:"post",data:t})}var O="wx/auth/reset";function j(t){return Object(r["a"])({url:O,method:"post",data:t})}var w="wx/auth/captcha";function y(t){return Object(r["a"])({url:w,method:"post",data:t})}var S="wx/goods/list";function k(t){return Object(r["a"])({url:S,method:"get",params:t})}var $="wx/goods/category";function I(t){return Object(r["a"])({url:$,method:"get",params:t})}var C="wx/goods/detail";function L(t){return Object(r["a"])({url:C,method:"get",params:t})}var N="wx/brand/list";function T(t){return Object(r["a"])({url:N,method:"get",params:t})}var B="wx/brand/detail";function z(t){return Object(r["a"])({url:B,method:"get",params:t})}var E="wx/cart/index";function A(t){return Object(r["a"])({url:E,method:"get",params:t})}var R="wx/cart/fastadd";function F(t){return Object(r["a"])({url:R,method:"post",data:t})}var P="wx/cart/update";function D(t){return Object(r["a"])({url:P,method:"post",data:t})}var H="wx/cart/delete";function M(t){return Object(r["a"])({url:H,method:"post",data:t})}var W="wx/cart/checked";function V(t){return Object(r["a"])({url:W,method:"post",data:t})}var X="wx/cart/checkout";function J(t){return Object(r["a"])({url:X,method:"get",params:t})}var q="wx/collect/list";function K(t){return Object(r["a"])({url:q,method:"get",params:t})}var _="wx/collect/addordelete";function G(t){return Object(r["a"])({url:_,method:"post",data:t})}var Q="wx/topic/list";function U(t){return Object(r["a"])({url:Q,method:"get",params:t})}var Y="wx/topic/detail";function Z(t){return Object(r["a"])({url:Y,method:"get",params:t})}var tt="wx/topic/related";function et(t){return Object(r["a"])({url:tt,method:"get",params:t})}var nt="wx/address/list";function rt(t){return Object(r["a"])({url:nt,method:"get",params:t})}var it="wx/address/detail";function ot(t){return Object(r["a"])({url:it,method:"get",params:t})}var at="wx/address/save";function st(t){return Object(r["a"])({url:at,method:"post",data:t})}var ct="wx/address/delete";function ut(t){return Object(r["a"])({url:ct,method:"post",data:t})}var lt="wx/order/submit";function dt(t){return Object(r["a"])({url:lt,method:"post",data:t})}var ht="wx/order/prepay";function ft(t){return Object(r["a"])({url:ht,method:"post",data:t})}var bt="wx/order/h5pay";function pt(t){return Object(r["a"])({url:bt,method:"post",data:t})}var mt="wx/order/list";function vt(t){return Object(r["a"])({url:mt,method:"get",params:t})}var gt="wx/order/detail";function xt(t){return Object(r["a"])({url:gt,method:"get",params:t})}var Ot="wx/order/cancel";function jt(t){return Object(r["a"])({url:Ot,method:"post",data:t})}var wt="wx/order/refund";function yt(t){return Object(r["a"])({url:wt,method:"post",data:t})}var St="wx/order/delete";function kt(t){return Object(r["a"])({url:St,method:"post",data:t})}var $t="wx/order/confirm";function It(t){return Object(r["a"])({url:$t,method:"post",data:t})}var Ct="wx/feedback/submit";function Lt(t){return Object(r["a"])({url:Ct,method:"post",data:t})}var Nt="wx/groupon/list";function Tt(t){return Object(r["a"])({url:Nt,method:"get",params:t})}var Bt="wx/coupon/mylist";function zt(t){return Object(r["a"])({url:Bt,method:"get",params:t})}var Et="wx/coupon/selectlist";function At(t){return Object(r["a"])({url:Et,method:"get",params:t})}var Rt="wx/user/index";function Ft(){return Object(r["a"])({url:Rt,method:"get"})}var Pt="wx/issue/list";function Dt(){return Object(r["a"])({url:Pt,method:"get"})}function Ht(){return Object(r["a"])({url:"/wx/groupon/listTimeLimit",method:"post"})}function Mt(){return Object(r["a"])({url:"/wx/groupon/listPreSale",method:"post"})}var Wt=""},"5e46":function(t,e,n){"use strict";var r,i=n("d282"),o=n("a142"),a=n("ea8e"),s=n("4598"),c=n("a8c1");function u(t,e,n){Object(s["a"])(r);var i=0,o=t.scrollLeft,a=0===n?1:Math.round(1e3*n/16);function c(){t.scrollLeft+=(e-o)/a,++i<a&&(r=Object(s["c"])(c))}c()}function l(t,e,n,r){var i=Object(c["c"])(t),o=i<e,a=0===n?1:Math.round(1e3*n/16),u=(e-i)/a;function l(){i+=u,(o&&i>e||!o&&i<e)&&(i=e),Object(c["h"])(t,i),o&&i<e||!o&&i>e?Object(s["c"])(l):r&&Object(s["c"])(r)}l()}var d=n("48f4"),h=n("02de"),f=n("1325"),b=n("b1d2"),p=n("9884"),m=n("5fbe"),v=n("6f2f"),g=Object(i["a"])("tab"),x=g[0],O=g[1],j=x({props:{dot:Boolean,type:String,info:[Number,String],color:String,title:String,isActive:Boolean,ellipsis:Boolean,disabled:Boolean,scrollable:Boolean,activeColor:String,inactiveColor:String,swipeThreshold:[Number,String]},computed:{style:function(){var t={},e=this.color,n=this.isActive,r="card"===this.type;e&&r&&(t.borderColor=e,this.disabled||(n?t.backgroundColor=e:t.color=e));var i=n?this.activeColor:this.inactiveColor;return i&&(t.color=i),this.scrollable&&this.ellipsis&&(t.flexBasis=88/this.swipeThreshold+"%"),t}},methods:{onClick:function(){this.$emit("click")},genText:function(){var t=this.$createElement,e=t("span",{class:O("text",{ellipsis:this.ellipsis})},[this.slots()||this.title]);return this.dot||Object(o["b"])(this.info)&&""!==this.info?t("span",{class:O("text-wrapper")},[e,t(v["a"],{attrs:{dot:this.dot,info:this.info}})]):e}},render:function(){var t=arguments[0];return t("div",{attrs:{role:"tab","aria-selected":this.isActive},class:[O({active:this.isActive,disabled:this.disabled,complete:!this.ellipsis})],style:this.style,on:{click:this.onClick}},[this.genText()])}}),w=Object(i["a"])("sticky"),y=w[0],S=w[1],k=y({mixins:[Object(m["a"])((function(t,e){if(this.scroller||(this.scroller=Object(c["d"])(this.$el)),this.observer){var n=e?"observe":"unobserve";this.observer[n](this.$el)}t(this.scroller,"scroll",this.onScroll,!0),this.onScroll()}))],props:{zIndex:[Number,String],container:null,offsetTop:{type:[Number,String],default:0}},data:function(){return{fixed:!1,height:0,transform:0}},computed:{style:function(){if(this.fixed){var t={};return Object(o["b"])(this.zIndex)&&(t.zIndex=this.zIndex),this.offsetTop&&this.fixed&&(t.top=this.offsetTop+"px"),this.transform&&(t.transform="translate3d(0, "+this.transform+"px, 0)"),t}}},created:function(){var t=this;!o["f"]&&window.IntersectionObserver&&(this.observer=new IntersectionObserver((function(e){e[0].intersectionRatio>0&&t.onScroll()}),{root:document.body}))},methods:{onScroll:function(){var t=this;if(!Object(h["a"])(this.$el)){this.height=this.$el.offsetHeight;var e=this.container,n=+this.offsetTop,r=Object(c["c"])(window),i=Object(c["a"])(this.$el),o=function(){t.$emit("scroll",{scrollTop:r,isFixed:t.fixed})};if(e){var a=i+e.offsetHeight;if(r+n+this.height>a){var s=this.height+r-a;return s<this.height?(this.fixed=!0,this.transform=-(s+n)):this.fixed=!1,void o()}}r+n>i?(this.fixed=!0,this.transform=0):this.fixed=!1,o()}}},render:function(){var t=arguments[0],e=this.fixed,n={height:e?this.height+"px":null};return t("div",{style:n},[t("div",{class:S({fixed:e}),style:this.style},[this.slots()])])}}),$=n("c31d"),I=n("3875"),C=Object(i["a"])("tabs"),L=C[0],N=C[1],T=50,B=L({mixins:[I["a"]],props:{count:Number,duration:[Number,String],animated:Boolean,swipeable:Boolean,currentIndex:Number},computed:{style:function(){if(this.animated)return{transform:"translate3d("+-1*this.currentIndex*100+"%, 0, 0)",transitionDuration:this.duration+"s"}},listeners:function(){if(this.swipeable)return{touchstart:this.touchStart,touchmove:this.touchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}}},methods:{onTouchEnd:function(){var t=this.direction,e=this.deltaX,n=this.currentIndex;"horizontal"===t&&this.offsetX>=T&&(e>0&&0!==n?this.$emit("change",n-1):e<0&&n!==this.count-1&&this.$emit("change",n+1))},genChildren:function(){var t=this.$createElement;return this.animated?t("div",{class:N("track"),style:this.style},[this.slots()]):this.slots()}},render:function(){var t=arguments[0];return t("div",{class:N("content",{animated:this.animated}),on:Object($["a"])({},this.listeners)},[this.genChildren()])}}),z=Object(i["a"])("tabs"),E=z[0],A=z[1];e["a"]=E({mixins:[Object(p["b"])("vanTabs"),Object(m["a"])((function(t){this.scroller||(this.scroller=Object(c["d"])(this.$el)),t(window,"resize",this.resize,!0),this.scrollspy&&t(this.scroller,"scroll",this.onScroll,!0)}))],model:{prop:"active"},props:{color:String,sticky:Boolean,animated:Boolean,swipeable:Boolean,scrollspy:Boolean,background:String,lineWidth:[Number,String],lineHeight:[Number,String],titleActiveColor:String,titleInactiveColor:String,type:{type:String,default:"line"},active:{type:[Number,String],default:0},border:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},duration:{type:[Number,String],default:.3},offsetTop:{type:[Number,String],default:0},lazyRender:{type:Boolean,default:!0},swipeThreshold:{type:[Number,String],default:4}},data:function(){return{position:"",currentIndex:null,lineStyle:{backgroundColor:this.color}}},computed:{scrollable:function(){return this.children.length>this.swipeThreshold||!this.ellipsis},navStyle:function(){return{borderColor:this.color,background:this.background}},currentName:function(){var t=this.children[this.currentIndex];if(t)return t.computedName},scrollOffset:function(){return this.sticky?+this.offsetTop+this.tabHeight:0}},watch:{color:"setLine",active:function(t){t!==this.currentName&&this.setCurrentIndexByName(t)},children:function(){var t=this;this.setCurrentIndexByName(this.currentName||this.active),this.setLine(),this.$nextTick((function(){t.scrollIntoView(!0)}))},currentIndex:function(){this.scrollIntoView(),this.setLine(),this.stickyFixed&&!this.scrollspy&&Object(c["g"])(Math.ceil(Object(c["a"])(this.$el)-this.offsetTop))},scrollspy:function(t){t?Object(f["b"])(this.scroller,"scroll",this.onScroll,!0):Object(f["a"])(this.scroller,"scroll",this.onScroll)}},mounted:function(){this.onShow()},activated:function(){this.onShow(),this.setLine()},methods:{resize:function(){this.setLine()},onShow:function(){var t=this;this.$nextTick((function(){t.inited=!0,t.tabHeight=Object(c["e"])(t.$refs.wrap),t.scrollIntoView(!0)}))},setLine:function(){var t=this,e=this.inited;this.$nextTick((function(){var n=t.$refs.titles;if(n&&n[t.currentIndex]&&"line"===t.type&&!Object(h["a"])(t.$el)){var r=n[t.currentIndex].$el,i=t.lineWidth,s=t.lineHeight,c=Object(o["b"])(i)?i:r.offsetWidth/2,u=r.offsetLeft+r.offsetWidth/2,l={width:Object(a["a"])(c),backgroundColor:t.color,transform:"translateX("+u+"px) translateX(-50%)"};if(e&&(l.transitionDuration=t.duration+"s"),Object(o["b"])(s)){var d=Object(a["a"])(s);l.height=d,l.borderRadius=d}t.lineStyle=l}}))},setCurrentIndexByName:function(t){var e=this.children.filter((function(e){return e.computedName===t})),n=(this.children[0]||{}).index||0;this.setCurrentIndex(e.length?e[0].index:n)},setCurrentIndex:function(t){if(t=this.findAvailableTab(t),Object(o["b"])(t)&&t!==this.currentIndex){var e=null!==this.currentIndex;this.currentIndex=t,this.$emit("input",this.currentName),e&&this.$emit("change",this.currentName,this.children[t].title)}},findAvailableTab:function(t){var e=t<this.currentIndex?-1:1;while(t>=0&&t<this.children.length){if(!this.children[t].disabled)return t;t+=e}},onClick:function(t){var e=this.children[t],n=e.title,r=e.disabled,i=e.computedName;r?this.$emit("disabled",i,n):(this.setCurrentIndex(t),this.scrollToCurrentContent(),this.$emit("click",i,n))},scrollIntoView:function(t){var e=this.$refs.titles;if(this.scrollable&&e&&e[this.currentIndex]){var n=this.$refs.nav,r=e[this.currentIndex].$el,i=r.offsetLeft-(n.offsetWidth-r.offsetWidth)/2;u(n,i,t?0:+this.duration)}},onSticktScroll:function(t){this.stickyFixed=t.isFixed,this.$emit("scroll",t)},scrollToCurrentContent:function(){var t=this;if(this.scrollspy){var e=this.children[this.currentIndex],n=null==e?void 0:e.$el;if(n){var r=Object(c["a"])(n,this.scroller)-this.scrollOffset;this.lockScroll=!0,l(this.scroller,r,+this.duration,(function(){t.lockScroll=!1}))}}},onScroll:function(){if(this.scrollspy&&!this.lockScroll){var t=this.getCurrentIndexOnScroll();this.setCurrentIndex(t)}},getCurrentIndexOnScroll:function(){for(var t=this.children,e=0;e<t.length;e++){var n=Object(c["f"])(t[e].$el);if(n>this.scrollOffset)return 0===e?0:e-1}return t.length-1}},render:function(){var t,e=this,n=arguments[0],r=this.type,i=this.ellipsis,a=this.animated,s=this.scrollable,c=this.children.map((function(t,a){return n(j,{ref:"titles",refInFor:!0,attrs:{type:r,dot:t.dot,info:Object(o["b"])(t.badge)?t.badge:t.info,title:t.title,color:e.color,isActive:a===e.currentIndex,ellipsis:i,disabled:t.disabled,scrollable:s,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,swipeThreshold:e.swipeThreshold},style:t.titleStyle,scopedSlots:{default:function(){return t.slots("title")}},on:{click:function(){e.onClick(a),Object(d["b"])(t.$router,t)}}})})),u=n("div",{ref:"wrap",class:[A("wrap",{scrollable:s}),(t={},t[b["f"]]="line"===r&&this.border,t)]},[n("div",{ref:"nav",attrs:{role:"tablist"},class:A("nav",[r]),style:this.navStyle},[this.slots("nav-left"),c,"line"===r&&n("div",{class:A("line"),style:this.lineStyle}),this.slots("nav-right")])]);return n("div",{class:A([r])},[this.sticky?n(k,{attrs:{container:this.$el,offsetTop:this.offsetTop},on:{scroll:this.onSticktScroll}},[u]):u,n(B,{attrs:{count:this.children.length,animated:a,duration:this.duration,swipeable:this.swipeable,currentIndex:this.currentIndex},on:{change:this.setCurrentIndex}},[this.slots()])])}})},"66fd":function(t,e,n){"use strict";var r=n("2638"),i=n.n(r),o=n("d282"),a=n("a142"),s=n("ba31"),c=n("a3e2"),u=n("44bf"),l=Object(o["a"])("card"),d=l[0],h=l[1];function f(t,e,n,r){var o,l=e.thumb,d=n.num||Object(a["b"])(e.num),f=n.price||Object(a["b"])(e.price),b=n["origin-price"]||Object(a["b"])(e.originPrice),p=d||f||b||n.bottom;function m(t){Object(s["a"])(r,"click-thumb",t)}function v(){if(n.tag||e.tag)return t("div",{class:h("tag")},[n.tag?n.tag():t(c["a"],{attrs:{mark:!0,type:"danger"}},[e.tag])])}function g(){if(n.thumb||l)return t("a",{attrs:{href:e.thumbLink},class:h("thumb"),on:{click:m}},[n.thumb?n.thumb():t(u["a"],{attrs:{src:l,width:"100%",height:"100%",fit:"cover","lazy-load":e.lazyLoad}}),v()])}function x(){return n.title?n.title():e.title?t("div",{class:[h("title"),"van-multi-ellipsis--l2"]},[e.title]):void 0}function O(){return n.desc?n.desc():e.desc?t("div",{class:[h("desc"),"van-ellipsis"]},[e.desc]):void 0}function j(){var n=e.price.toString().split(".");return t("div",[t("span",{class:h("price-currency")},[e.currency]),t("span",{class:h("price-integer")},[n[0]]),".",t("span",{class:h("price-decimal")},[n[1]])])}function w(){if(f)return t("div",{class:h("price")},[n.price?n.price():j()])}function y(){if(b){var r=n["origin-price"];return t("div",{class:h("origin-price")},[r?r():e.currency+" "+e.originPrice])}}function S(){if(d)return t("div",{class:h("num")},[n.num?n.num():"x"+e.num])}function k(){if(n.footer)return t("div",{class:h("footer")},[n.footer()])}return t("div",i()([{class:h()},Object(s["b"])(r,!0)]),[t("div",{class:h("header")},[g(),t("div",{class:h("content",{centered:e.centered})},[t("div",[x(),O(),null==n.tags?void 0:n.tags()]),p&&t("div",{class:"van-card__bottom"},[null==(o=n["price-top"])?void 0:o.call(n),w(),y(),S(),null==n.bottom?void 0:n.bottom()])])]),k()])}f.props={tag:String,desc:String,thumb:String,title:String,centered:Boolean,lazyLoad:Boolean,thumbLink:String,num:[Number,String],price:[Number,String],originPrice:[Number,String],currency:{type:String,default:"¥"}},e["a"]=d(f)},9884:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a}));var r=n("2b0e"),i=n("db85");function o(t,e){var n,o;void 0===e&&(e={});var a=e.indexKey||"index";return r["a"].extend({inject:(n={},n[t]={default:null},n),computed:(o={parent:function(){return this.disableBindRelation?null:this[t]}},o[a]=function(){return this.bindRelation(),this.parent?this.parent.children.indexOf(this):null},o),mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(e){return e!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]);Object(i["a"])(t,this.parent),this.parent.children=t}}}})}function a(t){return{provide:function(){var e;return e={},e[t]=this,e},data:function(){return{children:[]}}}}},"9b7e":function(t,e,n){},"9cb7":function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("09fe"),n("9b7e"),n("ea82")},a3e2:function(t,e,n){"use strict";var r=n("2638"),i=n.n(r),o=n("d282"),a=n("ba31"),s=n("b1d2"),c=n("ad06"),u=Object(o["a"])("tag"),l=u[0],d=u[1];function h(t,e,n,r){var o,u,l=e.type,h=e.mark,f=e.plain,b=e.color,p=e.round,m=e.size,v=f?"color":"backgroundColor",g=(o={},o[v]=b,o);e.textColor&&(g.color=e.textColor);var x={mark:h,plain:f,round:p};m&&(x[m]=m);var O=e.closeable&&t(c["a"],{attrs:{name:"cross"},class:d("close"),on:{click:function(t){t.stopPropagation(),Object(a["a"])(r,"close")}}});return t("transition",{attrs:{name:e.closeable?"van-fade":null}},[t("span",i()([{key:"content",style:g,class:[d([x,l]),(u={},u[s["d"]]=f,u)]},Object(a["b"])(r,!0)]),[null==n.default?void 0:n.default(),O])])}h.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},e["a"]=l(h)},ae9e:function(t,e,n){},b807:function(t,e,n){},db85:function(t,e,n){"use strict";function r(t){var e=[];function n(t){t.forEach((function(t){e.push(t),t.componentInstance&&n(t.componentInstance.$children.map((function(t){return t.$vnode}))),t.children&&n(t.children)}))}return n(t),e}function i(t,e){var n=e.$vnode.componentOptions;if(n&&n.children){var i=r(n.children);t.sort((function(t,e){return i.indexOf(t.$vnode)-i.indexOf(e.$vnode)}))}}n.d(e,"a",(function(){return i}))},ea82:function(t,e,n){},f319:function(t,e,n){}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f8d92dc"],{"02de":function(t,i,e){"use strict";function n(t){var i=window.getComputedStyle(t),e="none"===i.display,n=null===t.offsetParent&&"fixed"!==i.position;return e||n}e.d(i,"a",(function(){return n}))},"09fe":function(t,i,e){},"1a8c":function(t,i){function e(t){var i=typeof t;return null!=t&&("object"==i||"function"==i)}t.exports=e},2994:function(t,i,e){"use strict";e("68ef"),e("e3b3"),e("c0c2")},"2bdd":function(t,i,e){"use strict";var n=e("d282"),r=e("02de"),o=e("a8c1"),a=e("5fbe"),s=e("543e"),c=Object(n["a"])("list"),l=c[0],d=c[1],u=c[2];i["a"]=l({mixins:[Object(a["a"])((function(t){this.scroller||(this.scroller=Object(o["d"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var i,e=t.$el,n=t.scroller,o=t.offset,a=t.direction;i=n.getBoundingClientRect?n.getBoundingClientRect():{top:0,bottom:n.innerHeight};var s=i.bottom-i.top;if(!s||Object(r["a"])(e))return!1;var c=!1,l=t.$refs.placeholder.getBoundingClientRect();c="up"===a?i.top-l.top<=o:l.bottom-i.bottom<=o,c&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{class:d("loading"),key:"loading"},[this.slots("loading")||t(s["a"],{attrs:{size:"16"}},[this.loadingText||u("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var i=this.slots("finished")||this.finishedText;if(i)return t("div",{class:d("finished-text")},[i])}},genErrorText:function(){var t=this.$createElement;if(this.error){var i=this.slots("error")||this.errorText;if(i)return t("div",{on:{click:this.clickErrorText},class:d("error-text")},[i])}}},render:function(){var t=arguments[0],i=t("div",{ref:"placeholder",class:d("placeholder")});return t("div",{class:d(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():i,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():i])}})},"3ab6":function(t,i,e){},"408c":function(t,i,e){var n=e("2b3e"),r=function(){return n.Date.now()};t.exports=r},"44bf":function(t,i,e){"use strict";var n=e("2638"),r=e.n(n),o=e("d282"),a=e("a142"),s=e("ea8e"),c=e("ad06"),l=Object(o["a"])("image"),d=l[0],u=l[1];i["a"]=d({props:{src:String,fit:String,alt:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},errorIcon:{type:String,default:"warning-o"},loadingIcon:{type:String,default:"photo-o"}},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var t={};return Object(a["b"])(this.width)&&(t.width=Object(s["a"])(this.width)),Object(a["b"])(this.height)&&(t.height=Object(s["a"])(this.height)),Object(a["b"])(this.radius)&&(t.overflow="hidden",t.borderRadius=Object(s["a"])(this.radius)),t}},created:function(){var t=this.$Lazyload;t&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){var i=t.el;i===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){var i=t.el;i!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},genPlaceholder:function(){var t=this.$createElement;return this.loading&&this.showLoading?t("div",{class:u("loading")},[this.slots("loading")||t(c["a"],{attrs:{name:this.loadingIcon},class:u("loading-icon")})]):this.error&&this.showError?t("div",{class:u("error")},[this.slots("error")||t(c["a"],{attrs:{name:this.errorIcon},class:u("error-icon")})]):void 0},genImage:function(){var t=this.$createElement,i={class:u("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",r()([{ref:"image",directives:[{name:"lazy",value:this.src}]},i])):t("img",r()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},i]))}},render:function(){var t=arguments[0];return t("div",{class:u({round:this.round}),style:this.style,on:{click:this.onClick}},[this.genImage(),this.genPlaceholder()])}})},"4e03":function(t,i,e){"use strict";var n=e("3ab6"),r=e.n(n);r.a},"5f1a":function(t,i,e){"use strict";e("68ef"),e("9d70"),e("3743"),e("9b7e")},"5fd5":function(t,i,e){"use strict";e.r(i);var n,r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"goods_groupon"},[t._m(0),e("van-list",{attrs:{finished:t.finished,"immediate-check":!1,"finished-text":"没有更多了"},on:{load:t.getGrouponList},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},t._l(t.list,(function(i,n){return e("van-card",{key:n,attrs:{desc:i.brief,title:i.name,thumb:i.picUrl,price:i.retailPrice,"origin-price":i.counterPrice},on:{click:function(e){return t.itemClick(i.id)}}},[e("div",{attrs:{slot:"tags"},slot:"tags"},[e("van-tag",{attrs:{plain:"",type:"primary"}},[t._v("\n          "+t._s(i.grouponMember)+"人成团\n        ")]),e("van-tag",{staticStyle:{"margin-left":"5px"},attrs:{plain:"",type:"danger"}},[t._v("\n          "+t._s(i.grouponDiscount)+"元再减\n        ")])],1)])})),1)],1)},o=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"banner"},[e("div",{staticClass:"title"},[t._v("限时抢购列表")]),e("div",{staticClass:"activity"},[t._v("\n      距离活动结束还剩"),e("span",[t._v("00")]),t._v(":"),e("span",[t._v("00")]),t._v(":"),e("span",[t._v("00")])])])}],a=e("ade3"),s=(e("9cb7"),e("66fd")),c=(e("5f1a"),e("a3e2")),l=(e("7f7f"),e("2994"),e("2bdd")),d=e("2909"),u=e("4ec3"),f=e("e76c"),h={mixins:[f["a"]],data:function(){return{list:[],page:0,limit:10,loading:!1,finished:!1}},created:function(){this.init()},methods:{init:function(){this.page=0,this.list=[],this.getGrouponList()},getGrouponList:function(){var t=this;this.page++,Object(u["I"])({page:this.page,limit:this.limit}).then((function(i){var e;(e=t.list).push.apply(e,Object(d["a"])(i.data.data.list)),t.loading=!1,t.finished=i.data.data.page>=i.data.data.pages}))},itemClick:function(t){this.$router.push("/items/detail/".concat(t))}},components:(n={},Object(a["a"])(n,l["a"].name,l["a"]),Object(a["a"])(n,c["a"].name,c["a"]),Object(a["a"])(n,s["a"].name,s["a"]),n)},g=h,p=(e("4e03"),e("2877")),v=Object(p["a"])(g,r,o,!1,null,"7004c78b",null);i["default"]=v.exports},"66fd":function(t,i,e){"use strict";var n=e("2638"),r=e.n(n),o=e("d282"),a=e("a142"),s=e("ba31"),c=e("a3e2"),l=e("44bf"),d=Object(o["a"])("card"),u=d[0],f=d[1];function h(t,i,e,n){var o,d=i.thumb,u=e.num||Object(a["b"])(i.num),h=e.price||Object(a["b"])(i.price),g=e["origin-price"]||Object(a["b"])(i.originPrice),p=u||h||g||e.bottom;function v(t){Object(s["a"])(n,"click-thumb",t)}function m(){if(e.tag||i.tag)return t("div",{class:f("tag")},[e.tag?e.tag():t(c["a"],{attrs:{mark:!0,type:"danger"}},[i.tag])])}function b(){if(e.thumb||d)return t("a",{attrs:{href:i.thumbLink},class:f("thumb"),on:{click:v}},[e.thumb?e.thumb():t(l["a"],{attrs:{src:d,width:"100%",height:"100%",fit:"cover","lazy-load":i.lazyLoad}}),m()])}function y(){return e.title?e.title():i.title?t("div",{class:[f("title"),"van-multi-ellipsis--l2"]},[i.title]):void 0}function k(){return e.desc?e.desc():i.desc?t("div",{class:[f("desc"),"van-ellipsis"]},[i.desc]):void 0}function L(){var e=i.price.toString().split(".");return t("div",[t("span",{class:f("price-currency")},[i.currency]),t("span",{class:f("price-integer")},[e[0]]),".",t("span",{class:f("price-decimal")},[e[1]])])}function x(){if(h)return t("div",{class:f("price")},[e.price?e.price():L()])}function $(){if(g){var n=e["origin-price"];return t("div",{class:f("origin-price")},[n?n():i.currency+" "+i.originPrice])}}function S(){if(u)return t("div",{class:f("num")},[e.num?e.num():"x"+i.num])}function j(){if(e.footer)return t("div",{class:f("footer")},[e.footer()])}return t("div",r()([{class:f()},Object(s["b"])(n,!0)]),[t("div",{class:f("header")},[b(),t("div",{class:f("content",{centered:i.centered})},[t("div",[y(),k(),null==e.tags?void 0:e.tags()]),p&&t("div",{class:"van-card__bottom"},[null==(o=e["price-top"])?void 0:o.call(e),x(),$(),S(),null==e.bottom?void 0:e.bottom()])])]),j()])}h.props={tag:String,desc:String,thumb:String,title:String,centered:Boolean,lazyLoad:Boolean,thumbLink:String,num:[Number,String],price:[Number,String],originPrice:[Number,String],currency:{type:String,default:"¥"}},i["a"]=u(h)},"9b7e":function(t,i,e){},"9cb7":function(t,i,e){"use strict";e("68ef"),e("9d70"),e("3743"),e("09fe"),e("9b7e"),e("ea82")},a3e2:function(t,i,e){"use strict";var n=e("2638"),r=e.n(n),o=e("d282"),a=e("ba31"),s=e("b1d2"),c=e("ad06"),l=Object(o["a"])("tag"),d=l[0],u=l[1];function f(t,i,e,n){var o,l,d=i.type,f=i.mark,h=i.plain,g=i.color,p=i.round,v=i.size,m=h?"color":"backgroundColor",b=(o={},o[m]=g,o);i.textColor&&(b.color=i.textColor);var y={mark:f,plain:h,round:p};v&&(y[v]=v);var k=i.closeable&&t(c["a"],{attrs:{name:"cross"},class:u("close"),on:{click:function(t){t.stopPropagation(),Object(a["a"])(n,"close")}}});return t("transition",{attrs:{name:i.closeable?"van-fade":null}},[t("span",r()([{key:"content",style:b,class:[u([y,d]),(l={},l[s["d"]]=h,l)]},Object(a["b"])(n,!0)]),[null==e.default?void 0:e.default(),k])])}f.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},i["a"]=d(f)},b047:function(t,i,e){var n=e("1a8c"),r=e("408c"),o=e("b4b0"),a="Expected a function",s=Math.max,c=Math.min;function l(t,i,e){var l,d,u,f,h,g,p=0,v=!1,m=!1,b=!0;if("function"!=typeof t)throw new TypeError(a);function y(i){var e=l,n=d;return l=d=void 0,p=i,f=t.apply(n,e),f}function k(t){return p=t,h=setTimeout($,i),v?y(t):f}function L(t){var e=t-g,n=t-p,r=i-e;return m?c(r,u-n):r}function x(t){var e=t-g,n=t-p;return void 0===g||e>=i||e<0||m&&n>=u}function $(){var t=r();if(x(t))return S(t);h=setTimeout($,L(t))}function S(t){return h=void 0,b&&l?y(t):(l=d=void 0,f)}function j(){void 0!==h&&clearTimeout(h),p=0,l=g=d=h=void 0}function O(){return void 0===h?f:S(r())}function w(){var t=r(),e=x(t);if(l=arguments,d=this,g=t,e){if(void 0===h)return k(g);if(m)return clearTimeout(h),h=setTimeout($,i),y(g)}return void 0===h&&(h=setTimeout($,i)),f}return i=o(i)||0,n(e)&&(v=!!e.leading,m="maxWait"in e,u=m?s(o(e.maxWait)||0,i):u,b="trailing"in e?!!e.trailing:b),w.cancel=j,w.flush=O,w}t.exports=l},b4b0:function(t,i,e){var n=e("1a8c"),r=e("ffd6"),o=NaN,a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt;function u(t){if("number"==typeof t)return t;if(r(t))return o;if(n(t)){var i="function"==typeof t.valueOf?t.valueOf():t;t=n(i)?i+"":i}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var e=c.test(t);return e||l.test(t)?d(t.slice(2),e?2:8):s.test(t)?o:+t}t.exports=u},c0c2:function(t,i,e){},e76c:function(t,i,e){"use strict";var n=e("b047"),r=e.n(n);i["a"]={data:function(){return{scrollTop:0}},mounted:function(){var t=this;t.$el.addEventListener("scroll",r()((function(){t.scrollTop=t.$el.scrollTop}),50))},activated:function(){this.$el.scrollTop=this.scrollTop}}},ea82:function(t,i,e){},ffd6:function(t,i,e){var n=e("3729"),r=e("1310"),o="[object Symbol]";function a(t){return"symbol"==typeof t||r(t)&&n(t)==o}t.exports=a}}]);
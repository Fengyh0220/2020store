(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55bb4338"],{"02de":function(t,i,e){"use strict";function n(t){var i=window.getComputedStyle(t),e="none"===i.display,n=null===t.offsetParent&&"fixed"!==i.position;return e||n}e.d(i,"a",(function(){return n}))},"1a8c":function(t,i){function e(t){var i=typeof t;return null!=t&&("object"==i||"function"==i)}t.exports=e},2994:function(t,i,e){"use strict";e("68ef"),e("e3b3"),e("c0c2")},"2bdd":function(t,i,e){"use strict";var n=e("d282"),r=e("02de"),o=e("a8c1"),a=e("5fbe"),s=e("543e"),c=Object(n["a"])("list"),u=c[0],l=c[1],d=c[2];i["a"]=u({mixins:[Object(a["a"])((function(t){this.scroller||(this.scroller=Object(o["d"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var i,e=t.$el,n=t.scroller,o=t.offset,a=t.direction;i=n.getBoundingClientRect?n.getBoundingClientRect():{top:0,bottom:n.innerHeight};var s=i.bottom-i.top;if(!s||Object(r["a"])(e))return!1;var c=!1,u=t.$refs.placeholder.getBoundingClientRect();c="up"===a?i.top-u.top<=o:u.bottom-i.bottom<=o,c&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{class:l("loading"),key:"loading"},[this.slots("loading")||t(s["a"],{attrs:{size:"16"}},[this.loadingText||d("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var i=this.slots("finished")||this.finishedText;if(i)return t("div",{class:l("finished-text")},[i])}},genErrorText:function(){var t=this.$createElement;if(this.error){var i=this.slots("error")||this.errorText;if(i)return t("div",{on:{click:this.clickErrorText},class:l("error-text")},[i])}}},render:function(){var t=arguments[0],i=t("div",{ref:"placeholder",class:l("placeholder")});return t("div",{class:l(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():i,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():i])}})},"408c":function(t,i,e){var n=e("2b3e"),r=function(){return n.Date.now()};t.exports=r},"5fd5":function(t,i,e){"use strict";e.r(i);var n,r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"goods_groupon"},[e("div",{staticClass:"banner"},[e("div",{staticClass:"title"},[t._v("限时抢购列表")]),e("div",{staticClass:"activity"},[t._v("\n      距离活动结束还剩"),e("span",[t._v(t._s(t.listTimeLimittime.d))]),t._v(":"),e("span",[t._v(t._s(t.listTimeLimittime.h))]),t._v(":"),e("span",[t._v(t._s(t.listTimeLimittime.m))]),t._v(":"),e("span",[t._v(t._s(t.listTimeLimittime.s))])])]),e("van-list",{attrs:{finished:t.finished,"immediate-check":!1,"finished-text":"没有更多了"},on:{load:t.getGrouponList},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},t._l(t.list,(function(i,n){return e("van-card",{key:n,attrs:{desc:i.brief,title:i.name,thumb:i.picUrl,price:i.retailPrice,"origin-price":i.counterPrice},on:{click:function(e){return t.itemClick(i.id)}}})})),1)],1)},o=[],a=e("bd86"),s=(e("9cb7"),e("66fd")),c=(e("5f1a"),e("a3e2")),u=(e("7f7f"),e("2994"),e("2bdd")),l=e("75fc"),d=e("4ec3"),f=e("e76c"),h=e("3c96"),p={mixins:[f["a"]],data:function(){return{list:[],page:0,limit:10,loading:!1,finished:!1,listTimeLimittime:{d:"00",h:"00",m:"00",s:"00"}}},created:function(){this.getData()},methods:{getData:function(){var t=this;Object(d["I"])().then((function(i){if(0===i.data.errno){t.list=i.data.data.grouponRuleVoList;var e=i.data.data.grouponRuleVoList[0].expireTime;Object(h["a"])({data:t,type:3,name:"listTimeLimittime",now:i.data.currentTime,time:e})}}))},init:function(){this.page=0,this.list=[],this.getGrouponList()},getGrouponList:function(){var t=this;this.page++,Object(d["F"])({page:this.page,limit:this.limit}).then((function(i){var e;(e=t.list).push.apply(e,Object(l["a"])(i.data.data.list)),t.loading=!1,t.finished=i.data.data.page>=i.data.data.pages}))},itemClick:function(t){this.$router.push("/items/detail/".concat(t,"/1"))}},components:(n={},Object(a["a"])(n,u["a"].name,u["a"]),Object(a["a"])(n,c["a"].name,c["a"]),Object(a["a"])(n,s["a"].name,s["a"]),n)},m=p,v=(e("8311"),e("2877")),g=Object(v["a"])(m,r,o,!1,null,"6fb09b92",null);i["default"]=g.exports},8311:function(t,i,e){"use strict";var n=e("8dae"),r=e.n(n);r.a},"8dae":function(t,i,e){},b047:function(t,i,e){var n=e("1a8c"),r=e("408c"),o=e("b4b0"),a="Expected a function",s=Math.max,c=Math.min;function u(t,i,e){var u,l,d,f,h,p,m=0,v=!1,g=!1,b=!0;if("function"!=typeof t)throw new TypeError(a);function T(i){var e=u,n=l;return u=l=void 0,m=i,f=t.apply(n,e),f}function x(t){return m=t,h=setTimeout(L,i),v?T(t):f}function k(t){var e=t-p,n=t-m,r=i-e;return g?c(r,d-n):r}function y(t){var e=t-p,n=t-m;return void 0===p||e>=i||e<0||g&&n>=d}function L(){var t=r();if(y(t))return $(t);h=setTimeout(L,k(t))}function $(t){return h=void 0,b&&u?T(t):(u=l=void 0,f)}function _(){void 0!==h&&clearTimeout(h),m=0,u=p=l=h=void 0}function w(){return void 0===h?f:$(r())}function j(){var t=r(),e=y(t);if(u=arguments,l=this,p=t,e){if(void 0===h)return x(p);if(g)return clearTimeout(h),h=setTimeout(L,i),T(p)}return void 0===h&&(h=setTimeout(L,i)),f}return i=o(i)||0,n(e)&&(v=!!e.leading,g="maxWait"in e,d=g?s(o(e.maxWait)||0,i):d,b="trailing"in e?!!e.trailing:b),j.cancel=_,j.flush=w,j}t.exports=u},b4b0:function(t,i,e){var n=e("1a8c"),r=e("ffd6"),o=NaN,a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;function d(t){if("number"==typeof t)return t;if(r(t))return o;if(n(t)){var i="function"==typeof t.valueOf?t.valueOf():t;t=n(i)?i+"":i}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var e=c.test(t);return e||u.test(t)?l(t.slice(2),e?2:8):s.test(t)?o:+t}t.exports=d},c0c2:function(t,i,e){},e76c:function(t,i,e){"use strict";var n=e("b047"),r=e.n(n);i["a"]={data:function(){return{scrollTop:0}},mounted:function(){var t=this;t.$el.addEventListener("scroll",r()((function(){t.scrollTop=t.$el.scrollTop}),50))},activated:function(){this.$el.scrollTop=this.scrollTop}}},ffd6:function(t,i,e){var n=e("3729"),r=e("1310"),o="[object Symbol]";function a(t){return"symbol"==typeof t||r(t)&&n(t)==o}t.exports=a}}]);
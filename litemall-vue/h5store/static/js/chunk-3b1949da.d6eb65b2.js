(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b1949da"],{"09fe":function(t,e,r){},"0fee":function(t,e,r){},3647:function(t,e,r){"use strict";r("68ef"),r("9d70"),r("3743"),r("1a04"),r("5c56"),r("0fee")},"44bf":function(t,e,r){"use strict";var n=r("2638"),a=r.n(n),i=r("d282"),o=r("a142"),c=r("ea8e"),s=r("ad06"),u=Object(i["a"])("image"),d=u[0],l=u[1];e["a"]=d({props:{src:String,fit:String,alt:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},errorIcon:{type:String,default:"warning-o"},loadingIcon:{type:String,default:"photo-o"}},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var t={};return Object(o["b"])(this.width)&&(t.width=Object(c["a"])(this.width)),Object(o["b"])(this.height)&&(t.height=Object(c["a"])(this.height)),Object(o["b"])(this.radius)&&(t.overflow="hidden",t.borderRadius=Object(c["a"])(this.radius)),t}},created:function(){var t=this.$Lazyload;t&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){var e=t.el;e===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){var e=t.el;e!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},genPlaceholder:function(){var t=this.$createElement;return this.loading&&this.showLoading?t("div",{class:l("loading")},[this.slots("loading")||t(s["a"],{attrs:{name:this.loadingIcon},class:l("loading-icon")})]):this.error&&this.showError?t("div",{class:l("error")},[this.slots("error")||t(s["a"],{attrs:{name:this.errorIcon},class:l("error-icon")})]):void 0},genImage:function(){var t=this.$createElement,e={class:l("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",a()([{ref:"image",directives:[{name:"lazy",value:this.src}]},e])):t("img",a()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},e]))}},render:function(){var t=arguments[0];return t("div",{class:l({round:this.round}),style:this.style,on:{click:this.onClick}},[this.genImage(),this.genPlaceholder()])}})},"66fd":function(t,e,r){"use strict";var n=r("2638"),a=r.n(n),i=r("d282"),o=r("a142"),c=r("ba31"),s=r("a3e2"),u=r("44bf"),d=Object(i["a"])("card"),l=d[0],f=d[1];function h(t,e,r,n){var i,d=e.thumb,l=r.num||Object(o["b"])(e.num),h=r.price||Object(o["b"])(e.price),b=r["origin-price"]||Object(o["b"])(e.originPrice),g=l||h||b||r.bottom;function m(t){Object(c["a"])(n,"click-thumb",t)}function p(){if(r.tag||e.tag)return t("div",{class:f("tag")},[r.tag?r.tag():t(s["a"],{attrs:{mark:!0,type:"danger"}},[e.tag])])}function v(){if(r.thumb||d)return t("a",{attrs:{href:e.thumbLink},class:f("thumb"),on:{click:m}},[r.thumb?r.thumb():t(u["a"],{attrs:{src:d,width:"100%",height:"100%",fit:"cover","lazy-load":e.lazyLoad}}),p()])}function y(){return r.title?r.title():e.title?t("div",{class:[f("title"),"van-multi-ellipsis--l2"]},[e.title]):void 0}function O(){return r.desc?r.desc():e.desc?t("div",{class:[f("desc"),"van-ellipsis"]},[e.desc]):void 0}function j(){var r=e.price.toString().split(".");return t("div",[t("span",{class:f("price-currency")},[e.currency]),t("span",{class:f("price-integer")},[r[0]]),".",t("span",{class:f("price-decimal")},[r[1]])])}function S(){if(h)return t("div",{class:f("price")},[r.price?r.price():j()])}function L(){if(b){var n=r["origin-price"];return t("div",{class:f("origin-price")},[n?n():e.currency+" "+e.originPrice])}}function w(){if(l)return t("div",{class:f("num")},[r.num?r.num():"x"+e.num])}function k(){if(r.footer)return t("div",{class:f("footer")},[r.footer()])}return t("div",a()([{class:f()},Object(c["b"])(n,!0)]),[t("div",{class:f("header")},[v(),t("div",{class:f("content",{centered:e.centered})},[t("div",[y(),O(),null==r.tags?void 0:r.tags()]),g&&t("div",{class:"van-card__bottom"},[null==(i=r["price-top"])?void 0:i.call(r),S(),L(),w(),null==r.bottom?void 0:r.bottom()])])]),k()])}h.props={tag:String,desc:String,thumb:String,title:String,centered:Boolean,lazyLoad:Boolean,thumbLink:String,num:[Number,String],price:[Number,String],originPrice:[Number,String],currency:{type:String,default:"¥"}},e["a"]=l(h)},"7ce6":function(t,e,r){"use strict";var n=r("850b"),a=r.n(n);a.a},"850b":function(t,e,r){},"8ea5":function(t,e,r){"use strict";r.r(e);var n,a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("van-panel",t._l(t.goodslist,(function(e,n){return r("van-card",{key:n,attrs:{num:e.number,price:0!=e.state?e.second_hand_price+".00":e.price+".00",title:e.goodsName,thumb:e.picUrl,"thumb-link":t.goDetail(e.id)},scopedSlots:t._u([{key:"bottom",fn:function(){return[201==e.orderState?r("van-button",{attrs:{size:"mini"},on:{click:function(r){return t.toOrderDetail(e.id)}}},[t._v("退款")]):t._e(),0==e.state?r("van-button",{attrs:{size:"mini",to:t.tobuy(e.id)},on:{click:function(r){return t.btn(e)}}},[t._v(" 一键转卖")]):t._e(),1==e.state?r("van-button",{staticClass:"gray",attrs:{size:"mini"}},[t._v(" 转卖中")]):t._e(),2==e.state?r("van-button",{staticClass:"gray",attrs:{size:"mini"}},[t._v(" 已卖出")]):t._e()]},proxy:!0}],null,!0)})})),1)},i=[],o=r("bd86"),c=(r("3647"),r("ea47")),s=(r("7f7f"),r("9cb7"),r("66fd")),u=r("dc70"),d={data:function(){return{goodslist:[]}},created:function(){this.getuserData()},methods:{toOrderDetail:function(t){this.$router.push({path:"/order/order-detail",query:{orderId:t}})},goDetail:function(t){return"#/items/detail/".concat(t,"/0")},tobuy:function(t){return"/user/price/".concat(t)},btn:function(t){localStorage.setItem("productImg",t.picUrl)},getuserData:function(){var t=this;Object(u["d"])().then((function(e){0===e.data.errno&&(t.userData=e.data.data.userInfo,t.getData())}))},getData:function(){var t=this;Object(u["f"])().then((function(e){0===e.data.errno?t.goodslist=e.data.data:t.$toast({message:e.errmsg||"获取失败，请稍后再试",duration:1500})}))}},components:(n={},Object(o["a"])(n,s["a"].name,s["a"]),Object(o["a"])(n,c["a"].name,c["a"]),n)},l=d,f=(r("7ce6"),r("2877")),h=Object(f["a"])(l,a,i,!1,null,"0d78fc5c",null);e["default"]=h.exports},"9b7e":function(t,e,r){},"9cb7":function(t,e,r){"use strict";r("68ef"),r("9d70"),r("3743"),r("09fe"),r("9b7e"),r("ea82")},a3e2:function(t,e,r){"use strict";var n=r("2638"),a=r.n(n),i=r("d282"),o=r("ba31"),c=r("b1d2"),s=r("ad06"),u=Object(i["a"])("tag"),d=u[0],l=u[1];function f(t,e,r,n){var i,u,d=e.type,f=e.mark,h=e.plain,b=e.color,g=e.round,m=e.size,p=h?"color":"backgroundColor",v=(i={},i[p]=b,i);e.textColor&&(v.color=e.textColor);var y={mark:f,plain:h,round:g};m&&(y[m]=m);var O=e.closeable&&t(s["a"],{attrs:{name:"cross"},class:l("close"),on:{click:function(t){t.stopPropagation(),Object(o["a"])(n,"close")}}});return t("transition",{attrs:{name:e.closeable?"van-fade":null}},[t("span",a()([{key:"content",style:v,class:[l([y,d]),(u={},u[c["d"]]=h,u)]},Object(o["b"])(n,!0)]),[null==r.default?void 0:r.default(),O])])}f.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},e["a"]=d(f)},dc70:function(t,e,r){"use strict";r.d(e,"d",(function(){return a})),r.d(e,"e",(function(){return i})),r.d(e,"a",(function(){return o})),r.d(e,"f",(function(){return c})),r.d(e,"c",(function(){return s})),r.d(e,"g",(function(){return u})),r.d(e,"b",(function(){return d}));var n=r("b775");function a(){return Object(n["a"])({url:"wx/auth/getUserInfo",method:"post"})}function i(t){return Object(n["a"])({url:"wx/user/selectBankList",method:"post",data:t})}function o(t){return Object(n["a"])({url:"wx/user/addTurnRecord",method:"post",data:t})}function c(){return Object(n["a"])({url:"wx/second/selectByUserIdListVo",method:"post"})}function s(t){return Object(n["a"])({url:"wx/order/balancePay",method:"post",data:t})}function u(t){return Object(n["a"])({url:"wx/user/updateBankInfo",method:"post",data:t})}function d(t){return Object(n["a"])({url:"wx/user/addWithdrawalRecord",method:"post",data:t})}},ea47:function(t,e,r){"use strict";var n=r("2638"),a=r.n(n),i=r("d282"),o=r("ba31"),c=r("b1d2"),s=r("7744"),u=r("34e9"),d=Object(i["a"])("panel"),l=d[0],f=d[1];function h(t,e,r,n){var i=function(){return[r.header?r.header():t(s["a"],{attrs:{icon:e.icon,label:e.desc,title:e.title,value:e.status,valueClass:f("header-value")},class:f("header")}),t("div",{class:f("content")},[r.default&&r.default()]),r.footer&&t("div",{class:[f("footer"),c["e"]]},[r.footer()])]};return t(u["a"],a()([{class:f(),scopedSlots:{default:i}},Object(o["b"])(n,!0)]))}h.props={icon:String,desc:String,title:String,status:String},e["a"]=l(h)},ea82:function(t,e,r){}}]);
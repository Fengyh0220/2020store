(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f18b0e68"],{"0f25":function(t,n,e){},"1d10":function(t,n,e){},"3a13":function(t,n,e){"use strict";var i=e("1d10"),a=e.n(i);a.a},4703:function(t,n,e){"use strict";var i=e("ae74"),a=e.n(i);a.a},"4d48":function(t,n,e){"use strict";e("68ef"),e("bf60")},7165:function(t,n,e){"use strict";var i=e("f851"),a=e.n(i);a.a},7767:function(t,n,e){"use strict";e.r(n);var i,a,r,s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tabbar-user"},[e("user-header",{attrs:{isLogin:t.isLogin}}),e("order-group"),e("user-module")],1)},c=[],o=e("ade3"),u=(e("7f7f"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"user_header",style:{backgroundImage:"url("+t.background_image+")"}},[e("van-icon",{staticClass:"user_set",attrs:{name:"set"},on:{click:t.toSetting}}),e("div",{staticClass:"user_avatar"},[e("img",{attrs:{src:t.avatar,alt:"头像",width:"55",height:"55"}}),e("div",[t._v(t._s(t.nickName))])]),e("div",{staticClass:"right"},[e("p",[t._v("我的余额：￥0.00")]),e("router-link",{staticClass:"btn",attrs:{to:"/user/bank"}},[t._v("充值")])],1)],1)}),l=[],f=e("9c85"),d=e.n(f),h=e("ac93"),p=e.n(h),v=e("3c96"),g={name:"user-header",props:{isLogin:{type:Boolean,default:!1}},data:function(){return{nickName:"昵称",avatar:d.a,background_image:p.a}},activated:function(){this.getUserInfo()},methods:{getUserInfo:function(){var t=Object(v["a"])("nickName","avatar");this.avatar=t.avatar||d.a,this.nickName=t.nickName||"昵称"},toSetting:function(){this.$router.push({name:"user-information"})}}},m=g,b=(e("d111"),e("2877")),_=Object(b["a"])(m,u,l,!1,null,"756e929f",null),k=_.exports,O=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("van-cell-group",[e("van-cell",{attrs:{title:"全部订单",to:"/user/order/list",isLink:""}}),e("van-cell",{attrs:{title:"抢购订单",to:"/user/order/list",isLink:""}})],1)],1)},j=[],x=(e("81e6"),e("9ffb")),C=(e("4d48"),e("d1e1")),$=e("4ec3"),y={name:"order-group",data:function(){return{order:[]}},created:function(){this.init()},methods:{init:function(){var t=this;Object($["X"])().then((function(n){t.order=n.data.data.order}))}},components:(i={},Object(o["a"])(i,C["a"].name,C["a"]),Object(o["a"])(i,x["a"].name,x["a"]),i)},L=y,S=(e("3a13"),Object(b["a"])(L,O,j,!1,null,"12071221",null)),w=S.exports,N=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("van-cell-group",[e("van-cell",{attrs:{title:"我的优惠券",isLink:""}},[e("router-link",{staticClass:"text-desc",attrs:{to:"/user/coupon/list/0"}},[t._v("全部优惠券")])],1)],1),e("van-row",{staticClass:"coupon_status"},[e("van-col",{attrs:{span:"8"}},[e("div",{staticClass:"coupon_status_icon",on:{click:function(n){return t.$router.push({path:"/user/coupon/list/0"})}}},[e("van-icon",{attrs:{name:"coupon"}})],1),e("div",[t._v("待使用")])]),e("van-col",{attrs:{span:"8"}},[e("div",{staticClass:"coupon_status_icon",on:{click:function(n){return t.$router.push({path:"/user/coupon/list/1"})}}},[e("van-icon",{attrs:{name:"coupon-used"}})],1),e("div",[t._v("已使用")])]),e("van-col",{attrs:{span:"8"}},[e("div",{staticClass:"coupon_status_icon",on:{click:function(n){return t.$router.push({path:"/user/coupon/list/2"})}}},[e("van-icon",{attrs:{name:"coupon-due"}})],1),e("div",[t._v("过期关闭")])])],1)],1)},E=[],R={name:"coupon-group",components:(a={},Object(o["a"])(a,C["a"].name,C["a"]),Object(o["a"])(a,x["a"].name,x["a"]),a)},I=R,B=(e("f3d4"),Object(b["a"])(I,N,E,!1,null,"2f0af1a8",null)),J=B.exports,U=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"user_module"},[e("van-cell-group",[e("van-cell",{attrs:{icon:"service",title:"我的商品",to:"/user/used",isLink:""}}),e("van-cell",{attrs:{icon:"gold-coin-o",title:"我的二手",to:"/user/product",isLink:""}}),e("van-cell",{attrs:{icon:"shoucang",title:"我的收藏",to:"/user/collect",isLink:""}}),e("van-cell",{attrs:{icon:"dingwei",title:"收货地址",to:"/user/address",isLink:""}})],1)],1)},z=[],A={name:"user-module"},D=A,K=(e("4703"),Object(b["a"])(D,U,z,!1,null,"f476ce0a",null)),X=K.exports,q={data:function(){return{isLogin:!1}},activated:function(){this.getLoginStatus()},methods:{getLoginStatus:function(){this.isLogin=!!localStorage.getItem("Authorization")}},components:(r={},Object(o["a"])(r,k.name,k),Object(o["a"])(r,w.name,w),Object(o["a"])(r,J.name,J),Object(o["a"])(r,X.name,X),r)},F=q,G=(e("7165"),Object(b["a"])(F,s,c,!1,null,"be2cb362",null));n["default"]=G.exports},"7b0a":function(t,n,e){},"81e6":function(t,n,e){"use strict";e("68ef"),e("7b0a")},9884:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return s}));var i=e("2b0e"),a=e("db85");function r(t,n){var e,r;void 0===n&&(n={});var s=n.indexKey||"index";return i["a"].extend({inject:(e={},e[t]={default:null},e),computed:(r={parent:function(){return this.disableBindRelation?null:this[t]}},r[s]=function(){return this.bindRelation(),this.parent?this.parent.children.indexOf(this):null},r),mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(n){return n!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]);Object(a["a"])(t,this.parent),this.parent.children=t}}}})}function s(t){return{provide:function(){var n;return n={},n[t]=this,n},data:function(){return{children:[]}}}}},"9c85":function(t,n,e){t.exports=e.p+"static/img/avatar_default.89845f4e.png"},"9ffb":function(t,n,e){"use strict";var i=e("d282"),a=e("9884"),r=Object(i["a"])("col"),s=r[0],c=r[1];n["a"]=s({mixins:[Object(a["a"])("vanRow")],props:{span:[Number,String],offset:[Number,String],tag:{type:String,default:"div"}},computed:{style:function(){var t=this.index,n=this.parent||{},e=n.spaces;if(e&&e[t]){var i=e[t],a=i.left,r=i.right;return{paddingLeft:a?a+"px":null,paddingRight:r?r+"px":null}}}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,n=arguments[0],e=this.span,i=this.offset;return n(this.tag,{style:this.style,class:c((t={},t[e]=e,t["offset-"+i]=i,t)),on:{click:this.onClick}},[this.slots()])}})},ac93:function(t,n,e){t.exports=e.p+"static/img/user_head_bg.38dfa566.png"},ae74:function(t,n,e){},bf60:function(t,n,e){},d111:function(t,n,e){"use strict";var i=e("f143"),a=e.n(i);a.a},d1e1:function(t,n,e){"use strict";var i=e("d282"),a=e("9884"),r=Object(i["a"])("row"),s=r[0],c=r[1];n["a"]=s({mixins:[Object(a["b"])("vanRow")],props:{type:String,align:String,justify:String,tag:{type:String,default:"div"},gutter:{type:[Number,String],default:0}},computed:{spaces:function(){var t=Number(this.gutter);if(t){var n=[],e=[[]],i=0;return this.children.forEach((function(t,n){i+=Number(t.span),i>24?(e.push([n]),i-=24):e[e.length-1].push(n)})),e.forEach((function(e){var i=t*(e.length-1)/e.length;e.forEach((function(e,a){if(0===a)n.push({right:i});else{var r=t-n[e-1].right,s=i-r;n.push({left:r,right:s})}}))})),n}}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,n=arguments[0],e=this.align,i=this.justify,a="flex"===this.type;return n(this.tag,{class:c((t={flex:a},t["align-"+e]=a&&e,t["justify-"+i]=a&&i,t)),on:{click:this.onClick}},[this.slots()])}})},db85:function(t,n,e){"use strict";function i(t){var n=[];function e(t){t.forEach((function(t){n.push(t),t.componentInstance&&e(t.componentInstance.$children.map((function(t){return t.$vnode}))),t.children&&e(t.children)}))}return e(t),n}function a(t,n){var e=n.$vnode.componentOptions;if(e&&e.children){var a=i(e.children);t.sort((function(t,n){return a.indexOf(t.$vnode)-a.indexOf(n.$vnode)}))}}e.d(n,"a",(function(){return a}))},f143:function(t,n,e){},f3d4:function(t,n,e){"use strict";var i=e("0f25"),a=e.n(i);a.a},f851:function(t,n,e){}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-499da058"],{1146:function(t,e,i){},"17f5":function(t,e,i){"use strict";var n=i("5bff"),s=i.n(n);s.a},"24eb":function(t,e,i){"use strict";i.r(e);var n,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"order"},[i("van-cell-group",[t.checkedAddress?i("van-cell",{attrs:{isLink:"",title:"收货地址"},on:{click:function(e){return t.goAddressList()}}},[i("div",{attrs:{slot:"label"},slot:"label"},[i("div",[i("span",[t._v(t._s(t.checkedAddress.name)+" ")]),i("span",[t._v(t._s(t.checkedAddress.tel)+" ")])]),i("div",[t._v("\n        "+t._s(t.checkedAddress.addressDetail)+"\n      ")])])]):t._e()],1),t._l(t.checkedGoodsList,(function(e){return i("van-card",{key:e.id,attrs:{title:e.goodsName,num:e.number,price:e.price+".00",thumb:e.picUrl}},[i("div",{attrs:{slot:"desc"},slot:"desc"},[i("div",{staticClass:"van-card__desc"},t._l(e.specifications,(function(e,n){return i("van-tag",{key:n,staticStyle:{"margin-right":"6px"},attrs:{plain:""}},[t._v("\n            "+t._s(e)+"\n          ")])})),1)])])})),i("van-cell-group",[i("van-cell",{attrs:{title:"商品金额"}},[i("span",{staticClass:"red"},[t._v(t._s(t._f("yuan")(100*t.goodsTotalPrice)))])]),i("van-field",{attrs:{placeholder:"请输入备注",label:"订单备注"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}},[i("template",{slot:"icon"},[t._v(t._s(t.message.length)+"/50")])],2)],1),i("van-submit-bar",{attrs:{price:100*t.actualPrice,label:"总计：",buttonText:"支付",disabled:t.isDisabled},on:{submit:t.onSubmit}})],2)},a=[],r=i("bd86"),o=(i("8a58"),i("e41f")),c=(i("e324"),i("453b")),u=(i("b76c"),i("ac3c")),l=(i("5f1a"),i("a3e2")),d=(i("be7f"),i("565f")),h=(i("9cb7"),i("66fd")),f=(i("be39"),i("efa0")),p=(i("7f7f"),i("e7e5"),i("d399")),b=(i("c5f6"),i("4ec3")),g=i("dc70"),v=i("3c96"),m=(i("5a0c"),{props:{activityid:[String,Number]},data:function(){return{checkedGoodsList:[],checkedAddress:{},goodsTotalPrice:0,grouponPrice:0,orderTotalPrice:0,actualPrice:0,message:"",grouponRulesId:0,isDisabled:!1,showList:!1,chosenCoupon:-1,coupons:[],disabledCoupons:[],payStatus:!1}},created:function(){this.grouponRulesId=1==this.activityid?localStorage.getItem("grouponRulesId"):0,this.init()},methods:{onSubmit:function(){var t=this;if(this.payStatus){this.payStatus=!1;var e=Object(v["b"])("AddressId","CartId","CouponId","UserCouponId"),i=e.AddressId,n=e.CartId,s=e.CouponId,a=e.UserCouponId;if(0!=i){this.isDisabled=!0;var r={addressId:i,cartId:n,couponId:s,userCouponId:a,grouponLinkId:0,grouponRulesId:this.grouponRulesId,message:this.message,sp_type:this.activityid};Object(b["R"])(r).then((function(e){if(0==e.data.errno){Object(v["d"])({AddressId:0,CartId:0,CouponId:0});var i=e.data.data;t.payorder(i)}})).catch((function(e){t.isDisabled=!1,t.$toast("下单失败")}))}else p["a"].fail("请设置收货地址")}},payorder:function(t){var e=this,i={orderId:t.orderId,esGoodsId:0==this.activityid?t.esGoodsId:""};Object(g["c"])(i).then((function(t){0==t.data.errno&&(e.$toast("余额支付成功"),e.$router.push("/user/used"))})).catch((function(t){e.$toast(t.data.errmsg||"余额支付失败，请重新支付")}))},goAddressList:function(){this.$router.push({path:"/user/address"})},getCouponValue:function(){return 0!==this.couponPrice?"-¥"+this.couponPrice+".00元":0!==this.availableCouponLength?this.availableCouponLength+"张可用":"没有可用优惠券"},getCoupons:function(){var t=this,e=Object(v["b"])("AddressId","CartId","CouponId"),i=(e.AddressId,e.CartId);e.CouponId;Object(b["z"])({cartId:i,grouponRulesId:0}).then((function(e){var i=e.data.data.list;t.coupons=[],t.disabledCoupons=[];for(var n=0;n<i.length;n++){var s=i[n],a={id:s.id,cid:s.cid,name:s.name,condition:"满"+s.min+"元可用",value:100*s.discount,description:s.desc,startAt:new Date(s.startTime).getTime()/1e3,endAt:new Date(s.endTime).getTime()/1e3,valueDesc:s.discount,unitDesc:"元"};s.available?t.coupons.push(a):t.disabledCoupons.push(a)}t.showList=!0}))},init:function(){var t=this,e=Object(v["b"])("AddressId","CartId","CouponId","UserCouponId"),i=e.AddressId,n=e.CartId,s=e.CouponId,a=e.UserCouponId;Object(b["p"])({cartId:n,addressId:i,couponId:s,userCouponId:a,grouponRulesId:this.grouponRulesId}).then((function(e){var i=e.data.data;t.checkedGoodsList=i.checkedGoodsList,t.checkedAddress=i.checkedAddress,t.availableCouponLength=i.availableCouponLength,t.actualPrice=i.actualPrice,t.couponPrice=i.couponPrice,t.grouponPrice=i.grouponPrice,t.freightPrice=i.freightPrice,t.goodsTotalPrice=i.goodsTotalPrice,t.orderTotalPrice=i.orderTotalPrice,t.payStatus=!0,Object(v["d"])({AddressId:i.addressId,CartId:i.cartId,CouponId:i.couponId,UserCouponId:i.userCouponId})}))},onChange:function(t){if(this.showList=!1,this.chosenCoupon=t,-1===t)Object(v["d"])({CouponId:-1,UserCouponId:-1});else{var e=this.coupons[t].cid,i=this.coupons[t].id;Object(v["d"])({CouponId:e,UserCouponId:i})}this.init()},onExchange:function(){this.$toast("兑换暂不支持")}},components:(n={},Object(r["a"])(n,p["a"].name,p["a"]),Object(r["a"])(n,f["a"].name,f["a"]),Object(r["a"])(n,h["a"].name,h["a"]),Object(r["a"])(n,d["a"].name,d["a"]),Object(r["a"])(n,l["a"].name,l["a"]),Object(r["a"])(n,u["a"].name,u["a"]),Object(r["a"])(n,c["a"].name,c["a"]),Object(r["a"])(n,o["a"].name,o["a"]),n)}),I=m,y=(i("17f5"),i("2877")),C=Object(y["a"])(I,s,a,!1,null,"571f73fe",null);e["default"]=C.exports},"32d7":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a}));var n=i("a142");function s(){return!n["f"]&&/android/.test(navigator.userAgent.toLowerCase())}function a(){return!n["f"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}},"3b42":function(t,e,i){},"482d":function(t,e,i){"use strict";function n(t,e,i){return Math.min(Math.max(t,e),i)}function s(t,e,i){var n=t.indexOf(e);return-1===n?t:"-"===e&&0!==n?t.slice(0,n):t.slice(0,n+1)+t.slice(n).replace(i,"")}function a(t,e){t=e?s(t,".",/\./g):t.split(".")[0],t=s(t,"-",/-/g);var i=e?/[^-0-9.]/g:/[^-0-9]/g;return t.replace(i,"")}i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return a}))},"565f":function(t,e,i){"use strict";var n=i("2638"),s=i.n(n),a=i("c31d"),r=i("1325"),o=i("482d"),c=i("a8fa"),u=i("d282"),l=i("a142"),d=i("ea8e"),h=i("ad06"),f=i("7744"),p=i("dfaf"),b=Object(u["a"])("field"),g=b[0],v=b[1];e["a"]=g({inheritAttrs:!1,provide:function(){return{vanField:this}},inject:{vanForm:{default:null}},props:Object(a["a"])(Object(a["a"])({},p["a"]),{},{name:String,rules:Array,disabled:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,formatter:Function,maxlength:[Number,String],labelWidth:[Number,String],labelClass:null,labelAlign:String,inputAlign:String,placeholder:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,type:{type:String,default:"text"},error:{type:Boolean,default:null},colon:{type:Boolean,default:null}}),data:function(){return{focused:!1,validateMessage:""}},watch:{value:function(){this.resetValidation(),this.validateWithTrigger("onChange"),this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize),this.vanForm&&this.vanForm.addField(this)},beforeDestroy:function(){this.vanForm&&this.vanForm.removeField(this)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(l["b"])(this.value)&&!this.readonly},showError:function(){return null!==this.error?this.error:!!(this.vanForm&&this.vanForm.showError&&this.validateMessage)||void 0},listeners:function(){return Object(a["a"])(Object(a["a"])({},this.$listeners),{},{blur:this.onBlur,focus:this.onFocus,input:this.onInput,click:this.onClickInput,keypress:this.onKeypress})},labelStyle:function(){var t=this.getProp("labelWidth");if(t)return{width:Object(d["a"])(t)}},formValue:function(){return this.children&&(this.$scopedSlots.input||this.$slots.input)?this.children.value:this.value}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},runValidator:function(t,e){return new Promise((function(i){var n=e.validator(t,e);if(Object(l["e"])(n))return n.then(i);i(n)}))},isEmptyValue:function(t){return Array.isArray(t)?!t.length:!t},runSyncRule:function(t,e){return(!e.required||!this.isEmptyValue(t))&&!(e.pattern&&!e.pattern.test(t))},getRuleMessage:function(t,e){var i=e.message;return Object(l["c"])(i)?i(t,e):i},runRules:function(t){var e=this;return t.reduce((function(t,i){return t.then((function(){if(!e.validateMessage){var t=e.formValue;if(i.formatter&&(t=i.formatter(t,i)),e.runSyncRule(t,i))return i.validator?e.runValidator(t,i).then((function(n){!1===n&&(e.validateMessage=e.getRuleMessage(t,i))})):void 0;e.validateMessage=e.getRuleMessage(t,i)}}))}),Promise.resolve())},validate:function(t){var e=this;return void 0===t&&(t=this.rules),new Promise((function(i){t||i(),e.runRules(t).then((function(){e.validateMessage?i({name:e.name,message:e.validateMessage}):i()}))}))},validateWithTrigger:function(t){if(this.vanForm&&this.rules){var e=this.vanForm.validateTrigger===t,i=this.rules.filter((function(i){return i.trigger?i.trigger===t:e}));this.validate(i)}},resetValidation:function(){this.validateMessage&&(this.validateMessage="")},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t,i=e.value,n=this.maxlength;if(Object(l["b"])(n)&&i.length>n&&(i=i.slice(0,n),t.value=i),"number"===this.type||"digit"===this.type){var s=i,a="number"===this.type;i=Object(o["a"])(i,a),i!==s&&(t.value=i)}if(this.formatter){var r=i;i=this.formatter(i),i!==r&&(t.value=i)}return i}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),this.validateWithTrigger("onBlur"),Object(c["a"])()},onClick:function(t){this.$emit("click",t)},onClickInput:function(t){this.$emit("click-input",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(r["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){var e=13;if(t.keyCode===e){var i=this.getProp("submitOnEnter");i||"textarea"===this.type||Object(r["c"])(t),"search"===this.type&&this.blur()}this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(l["d"])(this.autosize)){var i=this.autosize,n=i.maxHeight,s=i.minHeight;n&&(e=Math.min(e,n)),s&&(e=Math.max(e,s))}e&&(t.style.height=e+"px")}},genInput:function(){var t=this.$createElement,e=this.type,i=this.slots("input"),n=this.getProp("inputAlign");if(i)return t("div",{class:v("control",[n,"custom"]),on:{click:this.onClickInput}},[i]);var r={ref:"input",class:v("control",n),domProps:{value:this.value},attrs:Object(a["a"])(Object(a["a"])({},this.$attrs),{},{name:this.name,disabled:this.disabled,readonly:this.readonly,placeholder:this.placeholder}),on:this.listeners,directives:[{name:"model",value:this.value}]};if("textarea"===e)return t("textarea",s()([{},r]));var o,c=e;return"number"===e&&(c="text",o="decimal"),"digit"===e&&(c="tel",o="numeric"),t("input",s()([{attrs:{type:c,inputmode:o}},r]))},genLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:v("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(h["a"],{attrs:{name:this.leftIcon,classPrefix:this.iconPrefix}})])},genRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:v("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(h["a"],{attrs:{name:this.rightIcon,classPrefix:this.iconPrefix}})])},genWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.maxlength){var e=this.value.length,i=e>=this.maxlength;return t("div",{class:v("word-limit")},[t("span",{class:v("word-num",{full:i})},[e]),"/",this.maxlength])}},genMessage:function(){var t=this.$createElement;if(!this.vanForm||!1!==this.vanForm.showErrorMessage){var e=this.errorMessage||this.validateMessage;if(e){var i=this.getProp("errorMessageAlign");return t("div",{class:v("error-message",i)},[e])}}},getProp:function(t){return Object(l["b"])(this[t])?this[t]:this.vanForm&&Object(l["b"])(this.vanForm[t])?this.vanForm[t]:void 0},genLabel:function(){var t=this.$createElement,e=this.getProp("colon")?":":"";return this.slots("label")?[this.slots("label"),e]:this.label?t("span",[this.label+e]):void 0}},render:function(){var t,e=arguments[0],i=this.slots,n=this.getProp("labelAlign"),s={icon:this.genLeftIcon},a=this.genLabel();a&&(s.title=function(){return a});var r=this.slots("extra");return r&&(s.extra=function(){return r}),e(f["a"],{attrs:{icon:this.leftIcon,size:this.size,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,valueClass:v("value"),titleClass:[v("label",n),this.labelClass],arrowDirection:this.arrowDirection},scopedSlots:s,class:v((t={error:this.showError},t["label-"+n]=n,t["min-height"]="textarea"===this.type&&!this.autosize,t)),on:{click:this.onClick}},[e("div",{class:v("body")},[this.genInput(),this.showClear&&e(h["a"],{attrs:{name:"clear"},class:v("clear"),on:{touchstart:this.onClear}}),this.genRightIcon(),i("button")&&e("div",{class:v("button")},[i("button")])]),this.genWordLimit(),this.genMessage()])}})},"5bff":function(t,e,i){},"8a58":function(t,e,i){"use strict";i("68ef"),i("a71a"),i("9d70"),i("3743"),i("4d75")},a8fa:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i("32d7"),s=i("a8c1"),a=Object(n["b"])();function r(){a&&Object(s["g"])(Object(s["b"])())}},be39:function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("e3b3"),i("bc1b"),i("3b42")},be7f:function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("1a04"),i("1146")},dc70:function(t,e,i){"use strict";i.d(e,"d",(function(){return s})),i.d(e,"e",(function(){return a})),i.d(e,"a",(function(){return r})),i.d(e,"f",(function(){return o})),i.d(e,"c",(function(){return c})),i.d(e,"i",(function(){return u})),i.d(e,"b",(function(){return l})),i.d(e,"g",(function(){return d})),i.d(e,"h",(function(){return h}));var n=i("b775");function s(){return Object(n["a"])({url:"wx/auth/getUserInfo",method:"post"})}function a(t){return Object(n["a"])({url:"wx/user/selectBankList",method:"post",data:t})}function r(t){return Object(n["a"])({url:"wx/user/addTurnRecord",method:"post",data:t})}function o(){return Object(n["a"])({url:"wx/second/selectByUserIdListVo",method:"post"})}function c(t){return Object(n["a"])({url:"wx/order/balancePay",method:"post",data:t})}function u(t){return Object(n["a"])({url:"wx/user/updateBankInfo",method:"post",data:t})}function l(t){return Object(n["a"])({url:"wx/user/addWithdrawalRecord",method:"post",data:t})}function d(){return Object(n["a"])({url:"wx/user/selectByUserIdTurnRecord",method:"post"})}function h(){return Object(n["a"])({url:"wx/user/selectByUserIdWithdrawalRecord",method:"post"})}},e41f:function(t,e,i){"use strict";var n=i("d282"),s=i("a142"),a=i("6605"),r=i("ad06"),o=Object(n["a"])("popup"),c=o[0],u=o[1];e["a"]=c({mixins:[Object(a["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,e=function(e){return function(i){return t.$emit(e,i)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},render:function(){var t,e=arguments[0];if(this.shouldRender){var i=this.round,n=this.position,a=this.duration,o="center"===n,c=this.transition||(o?"van-fade":"van-popup-slide-"+n),l={};if(Object(s["b"])(a)){var d=o?"animationDuration":"transitionDuration";l[d]=a+"s"}return e("transition",{attrs:{name:c},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:l,class:u((t={round:i},t[n]=n,t["safe-area-inset-bottom"]=this.safeAreaInsetBottom,t)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(r["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:u("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}})},efa0:function(t,e,i){"use strict";var n=i("2638"),s=i.n(n),a=i("d282"),r=i("ba31"),o=i("ad06"),c=i("b650"),u=Object(a["a"])("submit-bar"),l=u[0],d=u[1],h=u[2];function f(t,e,i,n){var a=e.tip,u=e.price,l=e.tipIcon;function f(){if("number"===typeof u){var i=(u/100).toFixed(e.decimalLength).split("."),n=e.decimalLength?"."+i[1]:"";return t("div",{style:{textAlign:e.textAlign?e.textAlign:""},class:d("text")},[t("span",[e.label||h("label")]),t("span",{class:d("price")},[e.currency,t("span",{class:d("price","integer")},[i[0]]),n]),e.suffixLabel&&t("span",{class:d("suffix-label")},[e.suffixLabel])])}}function p(){if(i.tip||a)return t("div",{class:d("tip")},[l&&t(o["a"],{class:d("tip-icon"),attrs:{name:l}}),a&&t("span",{class:d("tip-text")},[a]),i.tip&&i.tip()])}return t("div",s()([{class:d({unfit:!e.safeAreaInsetBottom})},Object(r["b"])(n)]),[i.top&&i.top(),p(),t("div",{class:d("bar")},[i.default&&i.default(),f(),t(c["a"],{attrs:{round:!0,type:e.buttonType,loading:e.loading,disabled:e.disabled,text:e.loading?"":e.buttonText},class:d("button",e.buttonType),on:{click:function(){Object(r["a"])(n,"submit")}}})])])}f.props={tip:String,label:String,price:Number,tipIcon:String,loading:Boolean,disabled:Boolean,textAlign:String,buttonText:String,suffixLabel:String,safeAreaInsetBottom:{type:Boolean,default:!0},decimalLength:{type:[Number,String],default:2},currency:{type:String,default:"¥"},buttonType:{type:String,default:"danger"}},e["a"]=l(f)}}]);
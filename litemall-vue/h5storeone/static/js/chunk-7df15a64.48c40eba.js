(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7df15a64"],{1146:function(t,e,n){},1219:function(t,e,n){"use strict";var r=n("ae01"),i=n.n(r);i.a},"21ed":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"set_nickname"},[n("van-cell-group",[n("van-field",{attrs:{label:"昵称"},model:{value:t.nickName,callback:function(e){t.nickName=e},expression:"nickName"}})],1),n("div",{staticClass:"bottom_btn"},[n("van-button",{attrs:{size:"large",type:"danger"},on:{click:t.saveNick}},[t._v("保存")])],1)],1)},i=[],a=n("bd86"),o=(n("7f7f"),n("be7f"),n("565f")),u=n("4ec3"),s={data:function(){return{nickName:""}},created:function(){this.getNick()},methods:{getNick:function(){this.nickName=localStorage.getItem("nickName")||""},saveNick:function(){var t=this;Object(u["j"])({nickname:this.nickName}).then((function(e){localStorage.setItem("nickName",t.nickName),t.$dialog.alert({message:"保存成功"}).then((function(){t.$router.go(-1)}))}))}},components:Object(a["a"])({},o["a"].name,o["a"])},c=s,l=(n("1219"),n("2877")),d=Object(l["a"])(c,r,i,!1,null,"42c90bd9",null);e["default"]=d.exports},"32d7":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var r=n("a142");function i(){return!r["f"]&&/android/.test(navigator.userAgent.toLowerCase())}function a(){return!r["f"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}},"482d":function(t,e,n){"use strict";function r(t,e,n){return Math.min(Math.max(t,e),n)}function i(t,e,n){var r=t.indexOf(e);return-1===r?t:"-"===e&&0!==r?t.slice(0,r):t.slice(0,r+1)+t.slice(r).replace(n,"")}function a(t,e){t=e?i(t,".",/\./g):t.split(".")[0],t=i(t,"-",/-/g);var n=e?/[^-0-9.]/g:/[^-0-9]/g;return t.replace(n,"")}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}))},"4ec3":function(t,e,n){"use strict";n.d(e,"B",(function(){return a})),n.d(e,"v",(function(){return u})),n.d(e,"u",(function(){return c})),n.d(e,"h",(function(){return d})),n.d(e,"i",(function(){return f})),n.d(e,"g",(function(){return g})),n.d(e,"j",(function(){return b})),n.d(e,"k",(function(){return j})),n.d(e,"V",(function(){return x})),n.d(e,"l",(function(){return w})),n.d(e,"f",(function(){return y})),n.d(e,"E",(function(){return I})),n.d(e,"C",(function(){return S})),n.d(e,"D",(function(){return F})),n.d(e,"n",(function(){return L})),n.d(e,"m",(function(){return E})),n.d(e,"s",(function(){return z})),n.d(e,"r",(function(){return B})),n.d(e,"t",(function(){return V})),n.d(e,"q",(function(){return _})),n.d(e,"o",(function(){return D})),n.d(e,"p",(function(){return J})),n.d(e,"x",(function(){return G})),n.d(e,"w",(function(){return U})),n.d(e,"T",(function(){return Y})),n.d(e,"S",(function(){return tt})),n.d(e,"U",(function(){return nt})),n.d(e,"d",(function(){return it})),n.d(e,"c",(function(){return ot})),n.d(e,"e",(function(){return st})),n.d(e,"b",(function(){return lt})),n.d(e,"R",(function(){return ht})),n.d(e,"P",(function(){return mt})),n.d(e,"N",(function(){return vt})),n.d(e,"O",(function(){return pt})),n.d(e,"M",(function(){return xt})),n.d(e,"J",(function(){return wt})),n.d(e,"Q",(function(){return yt})),n.d(e,"L",(function(){return It})),n.d(e,"K",(function(){return St})),n.d(e,"A",(function(){return Ft})),n.d(e,"F",(function(){return Lt})),n.d(e,"y",(function(){return Et})),n.d(e,"z",(function(){return zt})),n.d(e,"W",(function(){return Bt})),n.d(e,"G",(function(){return Vt})),n.d(e,"I",(function(){return Tt})),n.d(e,"H",(function(){return _t})),n.d(e,"a",(function(){return qt}));var r=n("b775"),i="wx/home/index";function a(){return Object(r["a"])({url:i,method:"get"})}var o="wx/catalog/index";function u(){return Object(r["a"])({url:o,method:"get"})}var s="wx/catalog/current";function c(t){return Object(r["a"])({url:s,method:"get",params:t})}var l="wx/auth/login";function d(t){return Object(r["a"])({url:l,method:"post",data:t})}var h="wx/auth/logout";function f(){return Object(r["a"])({url:h,method:"post"})}var m="wx/auth/info";function g(){return Object(r["a"])({url:m,method:"get"})}var v="wx/auth/profile";function b(t){return Object(r["a"])({url:v,method:"post",data:t})}var p="wx/auth/register";function j(t){return Object(r["a"])({url:p,method:"post",data:t})}function x(t){return Object(r["a"])({url:"wx/user/uploadImg",method:"post",data:t})}var O="wx/auth/reset";function w(t){return Object(r["a"])({url:O,method:"post",data:t})}var k="wx/auth/captcha";function y(t){return Object(r["a"])({url:k,method:"post",data:t})}var $="wx/goods/list";function I(t){return Object(r["a"])({url:$,method:"get",params:t})}var M="wx/goods/category";function S(t){return Object(r["a"])({url:M,method:"get",params:t})}var C="wx/goods/detail";function F(t){return Object(r["a"])({url:C,method:"get",params:t})}var P="wx/brand/list";function L(t){return Object(r["a"])({url:P,method:"get",params:t})}var N="wx/brand/detail";function E(t){return Object(r["a"])({url:N,method:"get",params:t})}var A="wx/cart/index";function z(t){return Object(r["a"])({url:A,method:"get",params:t})}var R="wx/cart/fastadd";function B(t){return Object(r["a"])({url:R,method:"post",data:t})}var W="wx/cart/update";function V(t){return Object(r["a"])({url:W,method:"post",data:t})}var T="wx/cart/delete";function _(t){return Object(r["a"])({url:T,method:"post",data:t})}var q="wx/cart/checked";function D(t){return Object(r["a"])({url:q,method:"post",data:t})}var H="wx/cart/checkout";function J(t){return Object(r["a"])({url:H,method:"get",params:t})}var K="wx/collect/list";function G(t){return Object(r["a"])({url:K,method:"get",params:t})}var Q="wx/collect/addordelete";function U(t){return Object(r["a"])({url:Q,method:"post",data:t})}var X="wx/topic/list";function Y(t){return Object(r["a"])({url:X,method:"get",params:t})}var Z="wx/topic/detail";function tt(t){return Object(r["a"])({url:Z,method:"get",params:t})}var et="wx/topic/related";function nt(t){return Object(r["a"])({url:et,method:"get",params:t})}var rt="wx/address/list";function it(t){return Object(r["a"])({url:rt,method:"get",params:t})}var at="wx/address/detail";function ot(t){return Object(r["a"])({url:at,method:"get",params:t})}var ut="wx/address/save";function st(t){return Object(r["a"])({url:ut,method:"post",data:t})}var ct="wx/address/delete";function lt(t){return Object(r["a"])({url:ct,method:"post",data:t})}var dt="wx/order/submit";function ht(t){return Object(r["a"])({url:dt,method:"post",data:t})}var ft="wx/order/prepay";function mt(t){return Object(r["a"])({url:ft,method:"post",data:t})}var gt="wx/order/h5pay";function vt(t){return Object(r["a"])({url:gt,method:"post",data:t})}var bt="wx/order/list";function pt(t){return Object(r["a"])({url:bt,method:"get",params:t})}var jt="wx/order/detail";function xt(t){return Object(r["a"])({url:jt,method:"get",params:t})}var Ot="wx/order/cancel";function wt(t){return Object(r["a"])({url:Ot,method:"post",data:t})}var kt="wx/order/refund";function yt(t){return Object(r["a"])({url:kt,method:"post",data:t})}var $t="wx/order/delete";function It(t){return Object(r["a"])({url:$t,method:"post",data:t})}var Mt="wx/order/confirm";function St(t){return Object(r["a"])({url:Mt,method:"post",data:t})}var Ct="wx/feedback/submit";function Ft(t){return Object(r["a"])({url:Ct,method:"post",data:t})}var Pt="wx/groupon/list";function Lt(t){return Object(r["a"])({url:Pt,method:"get",params:t})}var Nt="wx/coupon/mylist";function Et(t){return Object(r["a"])({url:Nt,method:"get",params:t})}var At="wx/coupon/selectlist";function zt(t){return Object(r["a"])({url:At,method:"get",params:t})}var Rt="wx/user/index";function Bt(){return Object(r["a"])({url:Rt,method:"get"})}var Wt="wx/issue/list";function Vt(){return Object(r["a"])({url:Wt,method:"get"})}function Tt(){return Object(r["a"])({url:"/wx/groupon/listTimeLimit",method:"post"})}function _t(){return Object(r["a"])({url:"/wx/groupon/listPreSale",method:"post"})}var qt=""},"565f":function(t,e,n){"use strict";var r=n("2638"),i=n.n(r),a=n("c31d"),o=n("1325"),u=n("482d"),s=n("a8fa"),c=n("d282"),l=n("a142"),d=n("ea8e"),h=n("ad06"),f=n("7744"),m=n("dfaf"),g=Object(c["a"])("field"),v=g[0],b=g[1];e["a"]=v({inheritAttrs:!1,provide:function(){return{vanField:this}},inject:{vanForm:{default:null}},props:Object(a["a"])(Object(a["a"])({},m["a"]),{},{name:String,rules:Array,disabled:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,formatter:Function,maxlength:[Number,String],labelWidth:[Number,String],labelClass:null,labelAlign:String,inputAlign:String,placeholder:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,type:{type:String,default:"text"},error:{type:Boolean,default:null},colon:{type:Boolean,default:null}}),data:function(){return{focused:!1,validateMessage:""}},watch:{value:function(){this.resetValidation(),this.validateWithTrigger("onChange"),this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize),this.vanForm&&this.vanForm.addField(this)},beforeDestroy:function(){this.vanForm&&this.vanForm.removeField(this)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(l["b"])(this.value)&&!this.readonly},showError:function(){return null!==this.error?this.error:!!(this.vanForm&&this.vanForm.showError&&this.validateMessage)||void 0},listeners:function(){return Object(a["a"])(Object(a["a"])({},this.$listeners),{},{blur:this.onBlur,focus:this.onFocus,input:this.onInput,click:this.onClickInput,keypress:this.onKeypress})},labelStyle:function(){var t=this.getProp("labelWidth");if(t)return{width:Object(d["a"])(t)}},formValue:function(){return this.children&&(this.$scopedSlots.input||this.$slots.input)?this.children.value:this.value}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},runValidator:function(t,e){return new Promise((function(n){var r=e.validator(t,e);if(Object(l["e"])(r))return r.then(n);n(r)}))},isEmptyValue:function(t){return Array.isArray(t)?!t.length:!t},runSyncRule:function(t,e){return(!e.required||!this.isEmptyValue(t))&&!(e.pattern&&!e.pattern.test(t))},getRuleMessage:function(t,e){var n=e.message;return Object(l["c"])(n)?n(t,e):n},runRules:function(t){var e=this;return t.reduce((function(t,n){return t.then((function(){if(!e.validateMessage){var t=e.formValue;if(n.formatter&&(t=n.formatter(t,n)),e.runSyncRule(t,n))return n.validator?e.runValidator(t,n).then((function(r){!1===r&&(e.validateMessage=e.getRuleMessage(t,n))})):void 0;e.validateMessage=e.getRuleMessage(t,n)}}))}),Promise.resolve())},validate:function(t){var e=this;return void 0===t&&(t=this.rules),new Promise((function(n){t||n(),e.runRules(t).then((function(){e.validateMessage?n({name:e.name,message:e.validateMessage}):n()}))}))},validateWithTrigger:function(t){if(this.vanForm&&this.rules){var e=this.vanForm.validateTrigger===t,n=this.rules.filter((function(n){return n.trigger?n.trigger===t:e}));this.validate(n)}},resetValidation:function(){this.validateMessage&&(this.validateMessage="")},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t,n=e.value,r=this.maxlength;if(Object(l["b"])(r)&&n.length>r&&(n=n.slice(0,r),t.value=n),"number"===this.type||"digit"===this.type){var i=n,a="number"===this.type;n=Object(u["a"])(n,a),n!==i&&(t.value=n)}if(this.formatter){var o=n;n=this.formatter(n),n!==o&&(t.value=n)}return n}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),this.validateWithTrigger("onBlur"),Object(s["a"])()},onClick:function(t){this.$emit("click",t)},onClickInput:function(t){this.$emit("click-input",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(o["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){var e=13;if(t.keyCode===e){var n=this.getProp("submitOnEnter");n||"textarea"===this.type||Object(o["c"])(t),"search"===this.type&&this.blur()}this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(l["d"])(this.autosize)){var n=this.autosize,r=n.maxHeight,i=n.minHeight;r&&(e=Math.min(e,r)),i&&(e=Math.max(e,i))}e&&(t.style.height=e+"px")}},genInput:function(){var t=this.$createElement,e=this.type,n=this.slots("input"),r=this.getProp("inputAlign");if(n)return t("div",{class:b("control",[r,"custom"]),on:{click:this.onClickInput}},[n]);var o={ref:"input",class:b("control",r),domProps:{value:this.value},attrs:Object(a["a"])(Object(a["a"])({},this.$attrs),{},{name:this.name,disabled:this.disabled,readonly:this.readonly,placeholder:this.placeholder}),on:this.listeners,directives:[{name:"model",value:this.value}]};if("textarea"===e)return t("textarea",i()([{},o]));var u,s=e;return"number"===e&&(s="text",u="decimal"),"digit"===e&&(s="tel",u="numeric"),t("input",i()([{attrs:{type:s,inputmode:u}},o]))},genLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:b("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(h["a"],{attrs:{name:this.leftIcon,classPrefix:this.iconPrefix}})])},genRightIcon:function(){var t=this.$createElement,e=this.slots,n=e("right-icon")||this.rightIcon;if(n)return t("div",{class:b("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(h["a"],{attrs:{name:this.rightIcon,classPrefix:this.iconPrefix}})])},genWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.maxlength){var e=this.value.length,n=e>=this.maxlength;return t("div",{class:b("word-limit")},[t("span",{class:b("word-num",{full:n})},[e]),"/",this.maxlength])}},genMessage:function(){var t=this.$createElement;if(!this.vanForm||!1!==this.vanForm.showErrorMessage){var e=this.errorMessage||this.validateMessage;if(e){var n=this.getProp("errorMessageAlign");return t("div",{class:b("error-message",n)},[e])}}},getProp:function(t){return Object(l["b"])(this[t])?this[t]:this.vanForm&&Object(l["b"])(this.vanForm[t])?this.vanForm[t]:void 0},genLabel:function(){var t=this.$createElement,e=this.getProp("colon")?":":"";return this.slots("label")?[this.slots("label"),e]:this.label?t("span",[this.label+e]):void 0}},render:function(){var t,e=arguments[0],n=this.slots,r=this.getProp("labelAlign"),i={icon:this.genLeftIcon},a=this.genLabel();a&&(i.title=function(){return a});var o=this.slots("extra");return o&&(i.extra=function(){return o}),e(f["a"],{attrs:{icon:this.leftIcon,size:this.size,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,valueClass:b("value"),titleClass:[b("label",r),this.labelClass],arrowDirection:this.arrowDirection},scopedSlots:i,class:b((t={error:this.showError},t["label-"+r]=r,t["min-height"]="textarea"===this.type&&!this.autosize,t)),on:{click:this.onClick}},[e("div",{class:b("body")},[this.genInput(),this.showClear&&e(h["a"],{attrs:{name:"clear"},class:b("clear"),on:{touchstart:this.onClear}}),this.genRightIcon(),n("button")&&e("div",{class:b("button")},[n("button")])]),this.genWordLimit(),this.genMessage()])}})},a8fa:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("32d7"),i=n("a8c1"),a=Object(r["b"])();function o(){a&&Object(i["g"])(Object(i["b"])())}},ae01:function(t,e,n){},be7f:function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("1a04"),n("1146")}}]);
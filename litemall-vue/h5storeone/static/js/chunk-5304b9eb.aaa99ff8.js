(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5304b9eb"],{1146:function(t,i,e){},"2bb1":function(t,i,e){"use strict";var n=e("c31d"),s=e("d282"),r=e("9884"),a=Object(s["a"])("swipe-item"),o=a[0],c=a[1];i["a"]=o({mixins:[Object(r["a"])("vanSwipe")],data:function(){return{offset:0,mounted:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.mounted=!0}))},computed:{style:function(){var t={},i=this.parent,e=i.size,n=i.vertical;return t[n?"height":"width"]=e+"px",this.offset&&(t.transform="translate"+(n?"Y":"X")+"("+this.offset+"px)"),t},shouldRender:function(){var t=this.index,i=this.parent,e=this.mounted;if(!i.lazyRender)return!0;if(!e)return!1;var n=i.activeIndicator,s=i.count-1,r=0===n?s:n-1,a=n===s?0:n+1;return t===n||t===r||t===a}},render:function(){var t=arguments[0];return t("div",{class:c(),style:this.style,on:Object(n["a"])({},this.$listeners)},[this.shouldRender&&this.slots()])}})},"32d7":function(t,i,e){"use strict";e.d(i,"a",(function(){return s})),e.d(i,"b",(function(){return r}));var n=e("a142");function s(){return!n["f"]&&/android/.test(navigator.userAgent.toLowerCase())}function r(){return!n["f"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}},"482d":function(t,i,e){"use strict";function n(t,i,e){return Math.min(Math.max(t,i),e)}function s(t,i,e){var n=t.indexOf(i);return-1===n?t:"-"===i&&0!==n?t.slice(0,n):t.slice(0,n+1)+t.slice(n).replace(e,"")}function r(t,i){t=i?s(t,".",/\./g):t.split(".")[0],t=s(t,"-",/-/g);var e=i?/[^-0-9.]/g:/[^-0-9]/g;return t.replace(e,"")}e.d(i,"b",(function(){return n})),e.d(i,"a",(function(){return r}))},"4b0a":function(t,i,e){"use strict";e("68ef"),e("786d")},5596:function(t,i,e){"use strict";var n=e("d282"),s=e("02de"),r=e("1325"),a=e("4598"),o=e("482d"),c=e("3875"),h=e("9884"),u=e("5fbe"),l=Object(n["a"])("swipe"),f=l[0],d=l[1];i["a"]=f({mixins:[c["a"],Object(h["b"])("vanSwipe"),Object(u["a"])((function(t,i){t(window,"resize",this.resize,!0),t(window,"visibilitychange",this.onVisibilityChange),i?this.initialize():this.clear()}))],props:{width:[Number,String],height:[Number,String],autoplay:[Number,String],vertical:Boolean,lazyRender:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:[Number,String],default:0},showIndicators:{type:Boolean,default:!0},stopPropagation:{type:Boolean,default:!0}},data:function(){return{rect:null,offset:0,active:0,deltaX:0,deltaY:0,swiping:!1,computedWidth:0,computedHeight:0}},watch:{children:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t>0?this.autoPlay():this.clear()}},computed:{count:function(){return this.children.length},maxCount:function(){return Math.ceil(Math.abs(this.minOffset)/this.size)},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,i=this.vertical?"height":"width",e=this.vertical?"width":"height";return t={},t[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){return(this.vertical?this.rect.height:this.rect.width)-this.size*this.count}},mounted:function(){this.bindTouchEvent(this.$refs.track)},methods:{initialize:function(t){if(void 0===t&&(t=+this.initialSwipe),this.$el&&!Object(s["a"])(this.$el)){clearTimeout(this.timer);var i=this.$el.getBoundingClientRect();this.rect=i,this.swiping=!0,this.active=t,this.computedWidth=Math.round(+this.width||i.width),this.computedHeight=Math.round(+this.height||i.height),this.offset=this.getTargetOffset(t),this.children.forEach((function(t){t.offset=0})),this.autoPlay()}},resize:function(){this.initialize(this.activeIndicator)},onVisibilityChange:function(){document.hidden?this.clear():this.autoPlay()},onTouchStart:function(t){this.touchable&&(this.clear(),this.touchStartTime=Date.now(),this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(r["c"])(t,this.stopPropagation),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){var t=this.size,i=this.delta,e=Date.now()-this.touchStartTime,n=i/e,s=Math.abs(n)>.25||Math.abs(i)>t/2;if(s&&this.isCorrectDirection){var r=this.vertical?this.offsetY:this.offsetX,a=0;a=this.loop?r>0?i>0?-1:1:0:-Math[i>0?"ceil":"floor"](i/t),this.move({pace:a,emitChange:!0})}else i&&this.move({pace:0});this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var i=this.active,e=this.count,n=this.maxCount;return t?this.loop?Object(o["b"])(i+t,-1,e):Object(o["b"])(i+t,0,n):i},getTargetOffset:function(t,i){void 0===i&&(i=0);var e=t*this.size;this.loop||(e=Math.min(e,-this.minOffset));var n=Math.round(i-e);return this.loop||(n=Object(o["b"])(n,this.minOffset,0)),n},move:function(t){var i=t.pace,e=void 0===i?0:i,n=t.offset,s=void 0===n?0:n,r=t.emitChange,a=this.loop,o=this.count,c=this.active,h=this.children,u=this.trackSize,l=this.minOffset;if(!(o<=1)){var f=this.getTargetActive(e),d=this.getTargetOffset(f,s);if(a){if(h[0]&&d!==l){var v=d<l;h[0].offset=v?u:0}if(h[o-1]&&0!==d){var g=d>0;h[o-1].offset=g?-u:0}}this.active=f,this.offset=d,r&&f!==c&&this.$emit("change",this.activeIndicator)}},prev:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),Object(a["b"])((function(){t.swiping=!1,t.move({pace:-1,emitChange:!0})}))},next:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),Object(a["b"])((function(){t.swiping=!1,t.move({pace:1,emitChange:!0})}))},swipeTo:function(t,i){var e=this;void 0===i&&(i={}),this.correctPosition(),this.resetTouchStatus(),Object(a["b"])((function(){var n;n=e.loop&&t===e.count?0===e.active?0:t:t%e.count,i.immediate?Object(a["b"])((function(){e.swiping=!1})):e.swiping=!1,e.move({pace:n-e.active,emitChange:!0})}))},correctPosition:function(){this.swiping=!0,this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i>0&&this.count>1&&(this.clear(),this.timer=setTimeout((function(){t.next(),t.autoPlay()}),i))},genIndicator:function(){var t=this,i=this.$createElement,e=this.count,n=this.activeIndicator,s=this.slots("indicator");return s||(this.showIndicators&&e>1?i("div",{class:d("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(e)).map((function(e,s){return i("i",{class:d("indicator",{active:s===n}),style:s===n?t.indicatorStyle:null})}))]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:d()},[t("div",{ref:"track",style:this.trackStyle,class:d("track",{vertical:this.vertical})},[this.slots()]),this.genIndicator()])}})},"565f":function(t,i,e){"use strict";var n=e("2638"),s=e.n(n),r=e("c31d"),a=e("1325"),o=e("482d"),c=e("a8fa"),h=e("d282"),u=e("a142"),l=e("ea8e"),f=e("ad06"),d=e("7744"),v=e("dfaf"),g=Object(h["a"])("field"),m=g[0],p=g[1];i["a"]=m({inheritAttrs:!1,provide:function(){return{vanField:this}},inject:{vanForm:{default:null}},props:Object(r["a"])(Object(r["a"])({},v["a"]),{},{name:String,rules:Array,disabled:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,formatter:Function,maxlength:[Number,String],labelWidth:[Number,String],labelClass:null,labelAlign:String,inputAlign:String,placeholder:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,type:{type:String,default:"text"},error:{type:Boolean,default:null},colon:{type:Boolean,default:null}}),data:function(){return{focused:!1,validateMessage:""}},watch:{value:function(){this.resetValidation(),this.validateWithTrigger("onChange"),this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize),this.vanForm&&this.vanForm.addField(this)},beforeDestroy:function(){this.vanForm&&this.vanForm.removeField(this)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(u["b"])(this.value)&&!this.readonly},showError:function(){return null!==this.error?this.error:!!(this.vanForm&&this.vanForm.showError&&this.validateMessage)||void 0},listeners:function(){return Object(r["a"])(Object(r["a"])({},this.$listeners),{},{blur:this.onBlur,focus:this.onFocus,input:this.onInput,click:this.onClickInput,keypress:this.onKeypress})},labelStyle:function(){var t=this.getProp("labelWidth");if(t)return{width:Object(l["a"])(t)}},formValue:function(){return this.children&&(this.$scopedSlots.input||this.$slots.input)?this.children.value:this.value}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},runValidator:function(t,i){return new Promise((function(e){var n=i.validator(t,i);if(Object(u["e"])(n))return n.then(e);e(n)}))},isEmptyValue:function(t){return Array.isArray(t)?!t.length:!t},runSyncRule:function(t,i){return(!i.required||!this.isEmptyValue(t))&&!(i.pattern&&!i.pattern.test(t))},getRuleMessage:function(t,i){var e=i.message;return Object(u["c"])(e)?e(t,i):e},runRules:function(t){var i=this;return t.reduce((function(t,e){return t.then((function(){if(!i.validateMessage){var t=i.formValue;if(e.formatter&&(t=e.formatter(t,e)),i.runSyncRule(t,e))return e.validator?i.runValidator(t,e).then((function(n){!1===n&&(i.validateMessage=i.getRuleMessage(t,e))})):void 0;i.validateMessage=i.getRuleMessage(t,e)}}))}),Promise.resolve())},validate:function(t){var i=this;return void 0===t&&(t=this.rules),new Promise((function(e){t||e(),i.runRules(t).then((function(){i.validateMessage?e({name:i.name,message:i.validateMessage}):e()}))}))},validateWithTrigger:function(t){if(this.vanForm&&this.rules){var i=this.vanForm.validateTrigger===t,e=this.rules.filter((function(e){return e.trigger?e.trigger===t:i}));this.validate(e)}},resetValidation:function(){this.validateMessage&&(this.validateMessage="")},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var i=t,e=i.value,n=this.maxlength;if(Object(u["b"])(n)&&e.length>n&&(e=e.slice(0,n),t.value=e),"number"===this.type||"digit"===this.type){var s=e,r="number"===this.type;e=Object(o["a"])(e,r),e!==s&&(t.value=e)}if(this.formatter){var a=e;e=this.formatter(e),e!==a&&(t.value=e)}return e}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),this.validateWithTrigger("onBlur"),Object(c["a"])()},onClick:function(t){this.$emit("click",t)},onClickInput:function(t){this.$emit("click-input",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(a["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){var i=13;if(t.keyCode===i){var e=this.getProp("submitOnEnter");e||"textarea"===this.type||Object(a["c"])(t),"search"===this.type&&this.blur()}this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var i=t.scrollHeight;if(Object(u["d"])(this.autosize)){var e=this.autosize,n=e.maxHeight,s=e.minHeight;n&&(i=Math.min(i,n)),s&&(i=Math.max(i,s))}i&&(t.style.height=i+"px")}},genInput:function(){var t=this.$createElement,i=this.type,e=this.slots("input"),n=this.getProp("inputAlign");if(e)return t("div",{class:p("control",[n,"custom"]),on:{click:this.onClickInput}},[e]);var a={ref:"input",class:p("control",n),domProps:{value:this.value},attrs:Object(r["a"])(Object(r["a"])({},this.$attrs),{},{name:this.name,disabled:this.disabled,readonly:this.readonly,placeholder:this.placeholder}),on:this.listeners,directives:[{name:"model",value:this.value}]};if("textarea"===i)return t("textarea",s()([{},a]));var o,c=i;return"number"===i&&(c="text",o="decimal"),"digit"===i&&(c="tel",o="numeric"),t("input",s()([{attrs:{type:c,inputmode:o}},a]))},genLeftIcon:function(){var t=this.$createElement,i=this.slots("left-icon")||this.leftIcon;if(i)return t("div",{class:p("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(f["a"],{attrs:{name:this.leftIcon,classPrefix:this.iconPrefix}})])},genRightIcon:function(){var t=this.$createElement,i=this.slots,e=i("right-icon")||this.rightIcon;if(e)return t("div",{class:p("right-icon"),on:{click:this.onClickRightIcon}},[i("right-icon")||t(f["a"],{attrs:{name:this.rightIcon,classPrefix:this.iconPrefix}})])},genWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.maxlength){var i=this.value.length,e=i>=this.maxlength;return t("div",{class:p("word-limit")},[t("span",{class:p("word-num",{full:e})},[i]),"/",this.maxlength])}},genMessage:function(){var t=this.$createElement;if(!this.vanForm||!1!==this.vanForm.showErrorMessage){var i=this.errorMessage||this.validateMessage;if(i){var e=this.getProp("errorMessageAlign");return t("div",{class:p("error-message",e)},[i])}}},getProp:function(t){return Object(u["b"])(this[t])?this[t]:this.vanForm&&Object(u["b"])(this.vanForm[t])?this.vanForm[t]:void 0},genLabel:function(){var t=this.$createElement,i=this.getProp("colon")?":":"";return this.slots("label")?[this.slots("label"),i]:this.label?t("span",[this.label+i]):void 0}},render:function(){var t,i=arguments[0],e=this.slots,n=this.getProp("labelAlign"),s={icon:this.genLeftIcon},r=this.genLabel();r&&(s.title=function(){return r});var a=this.slots("extra");return a&&(s.extra=function(){return a}),i(d["a"],{attrs:{icon:this.leftIcon,size:this.size,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,valueClass:p("value"),titleClass:[p("label",n),this.labelClass],arrowDirection:this.arrowDirection},scopedSlots:s,class:p((t={error:this.showError},t["label-"+n]=n,t["min-height"]="textarea"===this.type&&!this.autosize,t)),on:{click:this.onClick}},[i("div",{class:p("body")},[this.genInput(),this.showClear&&i(f["a"],{attrs:{name:"clear"},class:p("clear"),on:{touchstart:this.onClear}}),this.genRightIcon(),e("button")&&i("div",{class:p("button")},[e("button")])]),this.genWordLimit(),this.genMessage()])}})},7844:function(t,i,e){"use strict";e("68ef"),e("8270")},"786d":function(t,i,e){},8270:function(t,i,e){},a8fa:function(t,i,e){"use strict";e.d(i,"a",(function(){return a}));var n=e("32d7"),s=e("a8c1"),r=Object(n["b"])();function a(){r&&Object(s["g"])(Object(s["b"])())}}}]);
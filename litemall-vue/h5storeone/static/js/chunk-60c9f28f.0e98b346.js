(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60c9f28f"],{"02de":function(e,t,i){"use strict";function n(e){var t=window.getComputedStyle(e),i="none"===t.display,n=null===e.offsetParent&&"fixed"!==t.position;return i||n}i.d(t,"a",(function(){return n}))},"28a2":function(e,t,i){"use strict";var n=i("c31d"),s=i("2b0e"),a=i("d282"),o=i("482d"),r=i("1325"),c=i("6605"),l=i("3875"),h=i("ad06"),u=i("44bf"),f=i("5596"),d=i("543e"),m=i("2bb1"),v=Object(a["a"])("image-preview"),p=v[0],g=v[1],w=250;function b(e){return Math.sqrt(Math.pow(e[0].clientX-e[1].clientX,2)+Math.pow(e[0].clientY-e[1].clientY,2))}var y,S=p({mixins:[Object(c["a"])({skipToggleEvent:!0}),l["a"]],props:{className:null,asyncClose:Boolean,showIndicators:Boolean,images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},swipeDuration:{type:[Number,String],default:500},overlay:{type:Boolean,default:!0},showIndex:{type:Boolean,default:!0},startPosition:{type:[Number,String],default:0},minZoom:{type:[Number,String],default:1/3},maxZoom:{type:[Number,String],default:3},overlayClass:{type:String,default:g("overlay")},closeable:Boolean,closeIcon:{type:String,default:"clear"},closeIconPosition:{type:String,default:"top-right"}},data:function(){return{scale:1,moveX:0,moveY:0,active:0,moving:!1,zooming:!1,doubleClickTimer:null}},computed:{imageStyle:function(){var e=this.scale,t={transitionDuration:this.zooming||this.moving?"0s":".3s"};return 1!==e&&(t.transform="scale3d("+e+", "+e+", 1) translate("+this.moveX/e+"px, "+this.moveY/e+"px)"),t}},watch:{startPosition:"setActive",value:function(e){var t=this;e?(this.setActive(+this.startPosition),this.$nextTick((function(){t.$refs.swipe.swipeTo(+t.startPosition,{immediate:!0})}))):this.$emit("close",{index:this.active,url:this.images[this.active]})},shouldRender:{handler:function(e){var t=this;e&&this.$nextTick((function(){var e=t.$refs.swipe.$el;Object(r["b"])(e,"touchstart",t.onWrapperTouchStart),Object(r["b"])(e,"touchmove",r["c"]),Object(r["b"])(e,"touchend",t.onWrapperTouchEnd),Object(r["b"])(e,"touchcancel",t.onWrapperTouchEnd)}))},immediate:!0}},methods:{emitClose:function(){this.asyncClose||this.$emit("input",!1)},onWrapperTouchStart:function(){this.touchStartTime=new Date},onWrapperTouchEnd:function(e){var t=this;Object(r["c"])(e);var i=new Date-this.touchStartTime,n=this.$refs.swipe||{},s=n.offsetX,a=void 0===s?0:s,o=n.offsetY,c=void 0===o?0:o;i<w&&a<10&&c<10&&(this.doubleClickTimer?(clearTimeout(this.doubleClickTimer),this.doubleClickTimer=null,this.toggleScale()):this.doubleClickTimer=setTimeout((function(){t.emitClose(),t.doubleClickTimer=null}),w))},startMove:function(e){var t=e.currentTarget,i=t.getBoundingClientRect(),n=window.innerWidth,s=window.innerHeight;this.touchStart(e),this.moving=!0,this.startMoveX=this.moveX,this.startMoveY=this.moveY,this.maxMoveX=Math.max(0,(i.width-n)/2),this.maxMoveY=Math.max(0,(i.height-s)/2)},startZoom:function(e){this.moving=!1,this.zooming=!0,this.startScale=this.scale,this.startDistance=b(e.touches)},onImageTouchStart:function(e){var t=e.touches,i=this.$refs.swipe||{},n=i.offsetX,s=void 0===n?0:n;1===t.length&&1!==this.scale?this.startMove(e):2!==t.length||s||this.startZoom(e)},onImageTouchMove:function(e){var t=e.touches;if((this.moving||this.zooming)&&Object(r["c"])(e,!0),this.moving){this.touchMove(e);var i=this.deltaX+this.startMoveX,n=this.deltaY+this.startMoveY;this.moveX=Object(o["b"])(i,-this.maxMoveX,this.maxMoveX),this.moveY=Object(o["b"])(n,-this.maxMoveY,this.maxMoveY)}if(this.zooming&&2===t.length){var s=b(t),a=this.startScale*s/this.startDistance;this.setScale(a)}},onImageTouchEnd:function(e){if(this.moving||this.zooming){var t=!0;this.moving&&this.startMoveX===this.moveX&&this.startMoveY===this.moveY&&(t=!1),e.touches.length||(this.moving=!1,this.zooming=!1,this.startMoveX=0,this.startMoveY=0,this.startScale=1,this.scale<1&&this.resetScale()),t&&Object(r["c"])(e,!0)}},setActive:function(e){this.resetScale(),e!==this.active&&(this.active=e,this.$emit("change",e))},setScale:function(e){var t=Object(o["b"])(e,+this.minZoom,+this.maxZoom);this.scale=t,this.$emit("scale",{index:this.active,scale:t})},resetScale:function(){this.setScale(1),this.moveX=0,this.moveY=0},toggleScale:function(){var e=this.scale>1?1:2;this.setScale(e),this.moveX=0,this.moveY=0},genIndex:function(){var e=this.$createElement;if(this.showIndex)return e("div",{class:g("index")},[this.slots("index")||this.active+1+" / "+this.images.length])},genCover:function(){var e=this.$createElement,t=this.slots("cover");if(t)return e("div",{class:g("cover")},[t])},genImages:function(){var e=this,t=this.$createElement,i={loading:function(){return t(d["a"],{attrs:{type:"spinner"}})}};return t(f["a"],{ref:"swipe",attrs:{lazyRender:!0,loop:this.loop,indicatorColor:"white",duration:this.swipeDuration,initialSwipe:this.startPosition,showIndicators:this.showIndicators},class:g("swipe"),on:{change:this.setActive}},[this.images.map((function(n,s){return t(m["a"],[t(u["a"],{attrs:{src:n,fit:"contain"},class:g("image"),scopedSlots:i,style:s===e.active?e.imageStyle:null,nativeOn:{touchstart:e.onImageTouchStart,touchmove:e.onImageTouchMove,touchend:e.onImageTouchEnd,touchcancel:e.onImageTouchEnd}})])}))])},genClose:function(){var e=this.$createElement;if(this.closeable)return e(h["a"],{attrs:{role:"button",name:this.closeIcon},class:g("close-icon",this.closeIconPosition),on:{click:this.emitClose}})},onClosed:function(){this.$emit("closed")}},render:function(){var e=arguments[0];if(this.shouldRender)return e("transition",{attrs:{name:"van-fade"},on:{afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],class:[g(),this.className]},[this.genClose(),this.genImages(),this.genIndex(),this.genCover()])])}}),x=i("a142"),I={loop:!0,images:[],value:!0,minZoom:1/3,maxZoom:3,className:"",onClose:null,onChange:null,showIndex:!0,closeable:!1,closeIcon:"clear",asyncClose:!1,startPosition:0,swipeDuration:500,showIndicators:!1,closeOnPopstate:!1,closeIconPosition:"top-right"},$=function(){y=new(s["a"].extend(S))({el:document.createElement("div")}),document.body.appendChild(y.$el),y.$on("change",(function(e){y.onChange&&y.onChange(e)})),y.$on("scale",(function(e){y.onScale&&y.onScale(e)}))},C=function(e,t){if(void 0===t&&(t=0),!x["f"]){y||$();var i=Array.isArray(e)?{images:e,startPosition:t}:e;return Object(n["a"])(y,I,i),y.$once("input",(function(e){y.value=e})),y.$once("closed",(function(){y.images=[]})),i.onClose&&(y.$off("close"),y.$once("close",i.onClose)),y}};C.Component=S,C.install=function(){s["a"].use(S)};t["a"]=C},4598:function(e,t,i){"use strict";(function(e){i.d(t,"c",(function(){return l})),i.d(t,"b",(function(){return h})),i.d(t,"a",(function(){return u}));var n=i("a142"),s=Date.now();function a(e){var t=Date.now(),i=Math.max(0,16-(t-s)),n=setTimeout(e,i);return s=t+i,n}var o=n["f"]?e:window,r=o.requestAnimationFrame||a,c=o.cancelAnimationFrame||o.clearTimeout;function l(e){return r.call(o,e)}function h(e){l((function(){l(e)}))}function u(e){c.call(o,e)}}).call(this,i("c8ba"))},"504b":function(e,t,i){},"8a58":function(e,t,i){"use strict";i("68ef"),i("a71a"),i("9d70"),i("3743"),i("4d75")},"8f80":function(e,t,i){"use strict";var n=i("c31d"),s=i("d282"),a=i("ea8e"),o=i("a142");function r(e){return Array.isArray(e)?e:[e]}function c(e,t){return new Promise((function(i){if("file"!==t){var n=new FileReader;n.onload=function(e){i(e.target.result)},"dataUrl"===t?n.readAsDataURL(e):"text"===t&&n.readAsText(e)}else i()}))}function l(e,t){return r(e).some((function(e){return e.size>t}))}var h=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;function u(e){return h.test(e)}function f(e){return!!e.isImage||(e.file&&e.file.type?0===e.file.type.indexOf("image"):e.url?u(e.url):!!e.content&&0===e.content.indexOf("data:image"))}var d=i("78eb"),m=i("ad06"),v=i("44bf"),p=i("543e"),g=i("28a2"),w=Object(s["a"])("uploader"),b=w[0],y=w[1];t["a"]=b({inheritAttrs:!1,mixins:[d["a"]],model:{prop:"fileList"},props:{disabled:Boolean,lazyLoad:Boolean,uploadText:String,afterRead:Function,beforeRead:Function,beforeDelete:Function,previewSize:[Number,String],name:{type:[Number,String],default:""},accept:{type:String,default:"image/*"},fileList:{type:Array,default:function(){return[]}},maxSize:{type:[Number,String],default:Number.MAX_VALUE},maxCount:{type:[Number,String],default:Number.MAX_VALUE},deletable:{type:Boolean,default:!0},showUpload:{type:Boolean,default:!0},previewImage:{type:Boolean,default:!0},previewFullImage:{type:Boolean,default:!0},imageFit:{type:String,default:"cover"},resultType:{type:String,default:"dataUrl"},uploadIcon:{type:String,default:"photograph"}},computed:{previewSizeWithUnit:function(){return Object(a["a"])(this.previewSize)},value:function(){return this.fileList}},methods:{getDetail:function(e){return void 0===e&&(e=this.fileList.length),{name:this.name,index:e}},onChange:function(e){var t=this,i=e.target.files;if(!this.disabled&&i.length){if(i=1===i.length?i[0]:[].slice.call(i),this.beforeRead){var n=this.beforeRead(i,this.getDetail());if(!n)return void this.resetInput();if(Object(o["e"])(n))return void n.then((function(e){e?t.readFile(e):t.readFile(i)})).catch(this.resetInput)}this.readFile(i)}},readFile:function(e){var t=this,i=l(e,this.maxSize);if(Array.isArray(e)){var n=this.maxCount-this.fileList.length;e.length>n&&(e=e.slice(0,n)),Promise.all(e.map((function(e){return c(e,t.resultType)}))).then((function(n){var s=e.map((function(e,t){var i={file:e,status:"",message:""};return n[t]&&(i.content=n[t]),i}));t.onAfterRead(s,i)}))}else c(e,this.resultType).then((function(n){var s={file:e,status:"",message:""};n&&(s.content=n),t.onAfterRead(s,i)}))},onAfterRead:function(e,t){var i=this;this.resetInput();var n=e;if(t){var s=e;Array.isArray(e)?(s=[],n=[],e.forEach((function(e){e.file&&(e.file.size>i.maxSize?s.push(e):n.push(e))}))):n=null,this.$emit("oversize",s,this.getDetail())}var a=Array.isArray(n)?Boolean(n.length):Boolean(n);a&&(this.$emit("input",[].concat(this.fileList,r(n))),this.afterRead&&this.afterRead(n,this.getDetail()))},onDelete:function(e,t){var i=this;if(this.beforeDelete){var n=this.beforeDelete(e,this.getDetail(t));if(!n)return;if(Object(o["e"])(n))return void n.then((function(){i.deleteFile(e,t)})).catch(o["g"])}this.deleteFile(e,t)},deleteFile:function(e,t){var i=this.fileList.slice(0);i.splice(t,1),this.$emit("input",i),this.$emit("delete",e,this.getDetail(t))},resetInput:function(){this.$refs.input&&(this.$refs.input.value="")},onPreviewImage:function(e){var t=this;if(this.previewFullImage){var i=this.fileList.filter((function(e){return f(e)})),n=i.map((function(e){return e.content||e.url}));this.imagePreview=Object(g["a"])({images:n,closeOnPopstate:!0,startPosition:i.indexOf(e),onClose:function(){t.$emit("close-preview")}})}},closeImagePreview:function(){this.imagePreview&&this.imagePreview.close()},chooseFile:function(){this.disabled||this.$refs.input&&this.$refs.input.click()},genPreviewMask:function(e){var t=this.$createElement,i=e.status,n=e.message;if("uploading"===i||"failed"===i){var s="failed"===i?t(m["a"],{attrs:{name:"warning-o"},class:y("mask-icon")}):t(p["a"],{class:y("loading")}),a=Object(o["b"])(n)&&""!==n;return t("div",{class:y("mask")},[s,a&&t("div",{class:y("mask-message")},[n])])}},genPreviewItem:function(e,t){var i=this,n=this.$createElement,s="uploading"!==e.status&&this.deletable,a=s&&n(m["a"],{attrs:{name:"clear"},class:y("preview-delete"),on:{click:function(n){n.stopPropagation(),i.onDelete(e,t)}}}),o=f(e)?n(v["a"],{attrs:{fit:this.imageFit,src:e.content||e.url,width:this.previewSize,height:this.previewSize,lazyLoad:this.lazyLoad},class:y("preview-image"),on:{click:function(){i.onPreviewImage(e)}}}):n("div",{class:y("file"),style:{width:this.previewSizeWithUnit,height:this.previewSizeWithUnit}},[n(m["a"],{class:y("file-icon"),attrs:{name:"description"}}),n("div",{class:[y("file-name"),"van-ellipsis"]},[e.file?e.file.name:e.url])]);return n("div",{class:y("preview"),on:{click:function(){i.$emit("click-preview",e,i.getDetail(t))}}},[o,this.genPreviewMask(e),a])},genPreviewList:function(){if(this.previewImage)return this.fileList.map(this.genPreviewItem)},genUpload:function(){var e=this.$createElement;if(!(this.fileList.length>=this.maxCount)&&this.showUpload){var t,i=this.slots(),s=e("input",{attrs:Object(n["a"])(Object(n["a"])({},this.$attrs),{},{type:"file",accept:this.accept,disabled:this.disabled}),ref:"input",class:y("input"),on:{change:this.onChange}});if(i)return e("div",{class:y("input-wrapper")},[i,s]);if(this.previewSize){var a=this.previewSizeWithUnit;t={width:a,height:a}}return e("div",{class:y("upload"),style:t},[e(m["a"],{attrs:{name:this.uploadIcon},class:y("upload-icon")}),this.uploadText&&e("span",{class:y("upload-text")},[this.uploadText]),s])}}},render:function(){var e=arguments[0];return e("div",{class:y()},[e("div",{class:y("wrapper",{disabled:this.disabled})},[this.genPreviewList(),this.genUpload()])])}})},bcd3:function(e,t,i){}}]);
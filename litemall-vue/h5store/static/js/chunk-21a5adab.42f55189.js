(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21a5adab"],{"02de":function(t,e,i){"use strict";function n(t){var e=window.getComputedStyle(t),i="none"===e.display,n=null===t.offsetParent&&"fixed"!==e.position;return i||n}i.d(e,"a",(function(){return n}))},"09fe":function(t,e,i){},"0b33":function(t,e,i){"use strict";var n=i("c31d"),r=i("d282"),o=i("a142"),s=i("9884"),a=i("48f4"),c=Object(r["a"])("tab"),l=c[0],h=c[1];e["a"]=l({mixins:[Object(s["a"])("vanTabs")],props:Object(n["a"])(Object(n["a"])({},a["c"]),{},{dot:Boolean,name:[Number,String],info:[Number,String],badge:[Number,String],title:String,titleStyle:null,disabled:Boolean}),data:function(){return{inited:!1}},computed:{computedName:function(){return Object(o["b"])(this.name)?this.name:this.index},isActive:function(){var t=this.computedName===this.parent.currentName;return t&&(this.inited=!0),t}},watch:{title:function(){this.parent.setLine()},inited:function(t){var e=this;this.parent.lazyRender&&t&&this.$nextTick((function(){e.parent.$emit("rendered",e.computedName,e.title)}))}},render:function(t){var e=this.slots,i=this.parent,n=this.isActive,r=this.inited||i.scrollspy||!i.lazyRender,o=i.scrollspy||n,s=r?e():t();return i.animated?t("div",{attrs:{role:"tabpanel","aria-hidden":!n},class:h("pane-wrapper",{inactive:!n})},[t("div",{class:h("pane")},[s])]):t("div",{directives:[{name:"show",value:o}],attrs:{role:"tabpanel"},class:h("pane")},[s])}})},"44bf":function(t,e,i){"use strict";var n=i("2638"),r=i.n(n),o=i("d282"),s=i("a142"),a=i("ea8e"),c=i("ad06"),l=Object(o["a"])("image"),h=l[0],d=l[1];e["a"]=h({props:{src:String,fit:String,alt:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},errorIcon:{type:String,default:"warning-o"},loadingIcon:{type:String,default:"photo-o"}},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var t={};return Object(s["b"])(this.width)&&(t.width=Object(a["a"])(this.width)),Object(s["b"])(this.height)&&(t.height=Object(a["a"])(this.height)),Object(s["b"])(this.radius)&&(t.overflow="hidden",t.borderRadius=Object(a["a"])(this.radius)),t}},created:function(){var t=this.$Lazyload;t&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){var e=t.el;e===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){var e=t.el;e!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},genPlaceholder:function(){var t=this.$createElement;return this.loading&&this.showLoading?t("div",{class:d("loading")},[this.slots("loading")||t(c["a"],{attrs:{name:this.loadingIcon},class:d("loading-icon")})]):this.error&&this.showError?t("div",{class:d("error")},[this.slots("error")||t(c["a"],{attrs:{name:this.errorIcon},class:d("error-icon")})]):void 0},genImage:function(){var t=this.$createElement,e={class:d("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",r()([{ref:"image",directives:[{name:"lazy",value:this.src}]},e])):t("img",r()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},e]))}},render:function(){var t=arguments[0];return t("div",{class:d({round:this.round}),style:this.style,on:{click:this.onClick}},[this.genImage(),this.genPlaceholder()])}})},4598:function(t,e,i){"use strict";(function(t){i.d(e,"c",(function(){return l})),i.d(e,"b",(function(){return h})),i.d(e,"a",(function(){return d}));var n=i("a142"),r=Date.now();function o(t){var e=Date.now(),i=Math.max(0,16-(e-r)),n=setTimeout(t,i);return r=e+i,n}var s=n["f"]?t:window,a=s.requestAnimationFrame||o,c=s.cancelAnimationFrame||s.clearTimeout;function l(t){return a.call(s,t)}function h(t){l((function(){l(t)}))}function d(t){c.call(s,t)}}).call(this,i("c8ba"))},"5e46":function(t,e,i){"use strict";var n,r=i("d282"),o=i("a142"),s=i("ea8e"),a=i("4598"),c=i("a8c1");function l(t,e,i){Object(a["a"])(n);var r=0,o=t.scrollLeft,s=0===i?1:Math.round(1e3*i/16);function c(){t.scrollLeft+=(e-o)/s,++r<s&&(n=Object(a["c"])(c))}c()}function h(t,e,i,n){var r=Object(c["c"])(t),o=r<e,s=0===i?1:Math.round(1e3*i/16),l=(e-r)/s;function h(){r+=l,(o&&r>e||!o&&r<e)&&(r=e),Object(c["h"])(t,r),o&&r<e||!o&&r>e?Object(a["c"])(h):n&&Object(a["c"])(n)}h()}var d=i("48f4"),u=i("02de"),f=i("1325"),b=i("b1d2"),p=i("9884"),v=i("5fbe"),m=i("6f2f"),g=Object(r["a"])("tab"),y=g[0],x=g[1],S=y({props:{dot:Boolean,type:String,info:[Number,String],color:String,title:String,isActive:Boolean,ellipsis:Boolean,disabled:Boolean,scrollable:Boolean,activeColor:String,inactiveColor:String,swipeThreshold:[Number,String]},computed:{style:function(){var t={},e=this.color,i=this.isActive,n="card"===this.type;e&&n&&(t.borderColor=e,this.disabled||(i?t.backgroundColor=e:t.color=e));var r=i?this.activeColor:this.inactiveColor;return r&&(t.color=r),this.scrollable&&this.ellipsis&&(t.flexBasis=88/this.swipeThreshold+"%"),t}},methods:{onClick:function(){this.$emit("click")},genText:function(){var t=this.$createElement,e=t("span",{class:x("text",{ellipsis:this.ellipsis})},[this.slots()||this.title]);return this.dot||Object(o["b"])(this.info)&&""!==this.info?t("span",{class:x("text-wrapper")},[e,t(m["a"],{attrs:{dot:this.dot,info:this.info}})]):e}},render:function(){var t=arguments[0];return t("div",{attrs:{role:"tab","aria-selected":this.isActive},class:[x({active:this.isActive,disabled:this.disabled,complete:!this.ellipsis})],style:this.style,on:{click:this.onClick}},[this.genText()])}}),O=Object(r["a"])("sticky"),j=O[0],w=O[1],$=j({mixins:[Object(v["a"])((function(t,e){if(this.scroller||(this.scroller=Object(c["d"])(this.$el)),this.observer){var i=e?"observe":"unobserve";this.observer[i](this.$el)}t(this.scroller,"scroll",this.onScroll,!0),this.onScroll()}))],props:{zIndex:[Number,String],container:null,offsetTop:{type:[Number,String],default:0}},data:function(){return{fixed:!1,height:0,transform:0}},computed:{style:function(){if(this.fixed){var t={};return Object(o["b"])(this.zIndex)&&(t.zIndex=this.zIndex),this.offsetTop&&this.fixed&&(t.top=this.offsetTop+"px"),this.transform&&(t.transform="translate3d(0, "+this.transform+"px, 0)"),t}}},created:function(){var t=this;!o["f"]&&window.IntersectionObserver&&(this.observer=new IntersectionObserver((function(e){e[0].intersectionRatio>0&&t.onScroll()}),{root:document.body}))},methods:{onScroll:function(){var t=this;if(!Object(u["a"])(this.$el)){this.height=this.$el.offsetHeight;var e=this.container,i=+this.offsetTop,n=Object(c["c"])(window),r=Object(c["a"])(this.$el),o=function(){t.$emit("scroll",{scrollTop:n,isFixed:t.fixed})};if(e){var s=r+e.offsetHeight;if(n+i+this.height>s){var a=this.height+n-s;return a<this.height?(this.fixed=!0,this.transform=-(a+i)):this.fixed=!1,void o()}}n+i>r?(this.fixed=!0,this.transform=0):this.fixed=!1,o()}}},render:function(){var t=arguments[0],e=this.fixed,i={height:e?this.height+"px":null};return t("div",{style:i},[t("div",{class:w({fixed:e}),style:this.style},[this.slots()])])}}),I=i("c31d"),k=i("3875"),C=Object(r["a"])("tabs"),N=C[0],L=C[1],T=50,B=N({mixins:[k["a"]],props:{count:Number,duration:[Number,String],animated:Boolean,swipeable:Boolean,currentIndex:Number},computed:{style:function(){if(this.animated)return{transform:"translate3d("+-1*this.currentIndex*100+"%, 0, 0)",transitionDuration:this.duration+"s"}},listeners:function(){if(this.swipeable)return{touchstart:this.touchStart,touchmove:this.touchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}}},methods:{onTouchEnd:function(){var t=this.direction,e=this.deltaX,i=this.currentIndex;"horizontal"===t&&this.offsetX>=T&&(e>0&&0!==i?this.$emit("change",i-1):e<0&&i!==this.count-1&&this.$emit("change",i+1))},genChildren:function(){var t=this.$createElement;return this.animated?t("div",{class:L("track"),style:this.style},[this.slots()]):this.slots()}},render:function(){var t=arguments[0];return t("div",{class:L("content",{animated:this.animated}),on:Object(I["a"])({},this.listeners)},[this.genChildren()])}}),z=Object(r["a"])("tabs"),E=z[0],A=z[1];e["a"]=E({mixins:[Object(p["b"])("vanTabs"),Object(v["a"])((function(t){this.scroller||(this.scroller=Object(c["d"])(this.$el)),t(window,"resize",this.resize,!0),this.scrollspy&&t(this.scroller,"scroll",this.onScroll,!0)}))],model:{prop:"active"},props:{color:String,sticky:Boolean,animated:Boolean,swipeable:Boolean,scrollspy:Boolean,background:String,lineWidth:[Number,String],lineHeight:[Number,String],titleActiveColor:String,titleInactiveColor:String,type:{type:String,default:"line"},active:{type:[Number,String],default:0},border:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},duration:{type:[Number,String],default:.3},offsetTop:{type:[Number,String],default:0},lazyRender:{type:Boolean,default:!0},swipeThreshold:{type:[Number,String],default:4}},data:function(){return{position:"",currentIndex:null,lineStyle:{backgroundColor:this.color}}},computed:{scrollable:function(){return this.children.length>this.swipeThreshold||!this.ellipsis},navStyle:function(){return{borderColor:this.color,background:this.background}},currentName:function(){var t=this.children[this.currentIndex];if(t)return t.computedName},scrollOffset:function(){return this.sticky?+this.offsetTop+this.tabHeight:0}},watch:{color:"setLine",active:function(t){t!==this.currentName&&this.setCurrentIndexByName(t)},children:function(){var t=this;this.setCurrentIndexByName(this.currentName||this.active),this.setLine(),this.$nextTick((function(){t.scrollIntoView(!0)}))},currentIndex:function(){this.scrollIntoView(),this.setLine(),this.stickyFixed&&!this.scrollspy&&Object(c["g"])(Math.ceil(Object(c["a"])(this.$el)-this.offsetTop))},scrollspy:function(t){t?Object(f["b"])(this.scroller,"scroll",this.onScroll,!0):Object(f["a"])(this.scroller,"scroll",this.onScroll)}},mounted:function(){this.onShow()},activated:function(){this.onShow(),this.setLine()},methods:{resize:function(){this.setLine()},onShow:function(){var t=this;this.$nextTick((function(){t.inited=!0,t.tabHeight=Object(c["e"])(t.$refs.wrap),t.scrollIntoView(!0)}))},setLine:function(){var t=this,e=this.inited;this.$nextTick((function(){var i=t.$refs.titles;if(i&&i[t.currentIndex]&&"line"===t.type&&!Object(u["a"])(t.$el)){var n=i[t.currentIndex].$el,r=t.lineWidth,a=t.lineHeight,c=Object(o["b"])(r)?r:n.offsetWidth/2,l=n.offsetLeft+n.offsetWidth/2,h={width:Object(s["a"])(c),backgroundColor:t.color,transform:"translateX("+l+"px) translateX(-50%)"};if(e&&(h.transitionDuration=t.duration+"s"),Object(o["b"])(a)){var d=Object(s["a"])(a);h.height=d,h.borderRadius=d}t.lineStyle=h}}))},setCurrentIndexByName:function(t){var e=this.children.filter((function(e){return e.computedName===t})),i=(this.children[0]||{}).index||0;this.setCurrentIndex(e.length?e[0].index:i)},setCurrentIndex:function(t){if(t=this.findAvailableTab(t),Object(o["b"])(t)&&t!==this.currentIndex){var e=null!==this.currentIndex;this.currentIndex=t,this.$emit("input",this.currentName),e&&this.$emit("change",this.currentName,this.children[t].title)}},findAvailableTab:function(t){var e=t<this.currentIndex?-1:1;while(t>=0&&t<this.children.length){if(!this.children[t].disabled)return t;t+=e}},onClick:function(t){var e=this.children[t],i=e.title,n=e.disabled,r=e.computedName;n?this.$emit("disabled",r,i):(this.setCurrentIndex(t),this.scrollToCurrentContent(),this.$emit("click",r,i))},scrollIntoView:function(t){var e=this.$refs.titles;if(this.scrollable&&e&&e[this.currentIndex]){var i=this.$refs.nav,n=e[this.currentIndex].$el,r=n.offsetLeft-(i.offsetWidth-n.offsetWidth)/2;l(i,r,t?0:+this.duration)}},onSticktScroll:function(t){this.stickyFixed=t.isFixed,this.$emit("scroll",t)},scrollToCurrentContent:function(){var t=this;if(this.scrollspy){var e=this.children[this.currentIndex],i=null==e?void 0:e.$el;if(i){var n=Object(c["a"])(i,this.scroller)-this.scrollOffset;this.lockScroll=!0,h(this.scroller,n,+this.duration,(function(){t.lockScroll=!1}))}}},onScroll:function(){if(this.scrollspy&&!this.lockScroll){var t=this.getCurrentIndexOnScroll();this.setCurrentIndex(t)}},getCurrentIndexOnScroll:function(){for(var t=this.children,e=0;e<t.length;e++){var i=Object(c["f"])(t[e].$el);if(i>this.scrollOffset)return 0===e?0:e-1}return t.length-1}},render:function(){var t,e=this,i=arguments[0],n=this.type,r=this.ellipsis,s=this.animated,a=this.scrollable,c=this.children.map((function(t,s){return i(S,{ref:"titles",refInFor:!0,attrs:{type:n,dot:t.dot,info:Object(o["b"])(t.badge)?t.badge:t.info,title:t.title,color:e.color,isActive:s===e.currentIndex,ellipsis:r,disabled:t.disabled,scrollable:a,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,swipeThreshold:e.swipeThreshold},style:t.titleStyle,scopedSlots:{default:function(){return t.slots("title")}},on:{click:function(){e.onClick(s),Object(d["b"])(t.$router,t)}}})})),l=i("div",{ref:"wrap",class:[A("wrap",{scrollable:a}),(t={},t[b["f"]]="line"===n&&this.border,t)]},[i("div",{ref:"nav",attrs:{role:"tablist"},class:A("nav",[n]),style:this.navStyle},[this.slots("nav-left"),c,"line"===n&&i("div",{class:A("line"),style:this.lineStyle}),this.slots("nav-right")])]);return i("div",{class:A([n])},[this.sticky?i($,{attrs:{container:this.$el,offsetTop:this.offsetTop},on:{scroll:this.onSticktScroll}},[l]):l,i(B,{attrs:{count:this.children.length,animated:s,duration:this.duration,swipeable:this.swipeable,currentIndex:this.currentIndex},on:{change:this.setCurrentIndex}},[this.slots()])])}})},"66fd":function(t,e,i){"use strict";var n=i("2638"),r=i.n(n),o=i("d282"),s=i("a142"),a=i("ba31"),c=i("a3e2"),l=i("44bf"),h=Object(o["a"])("card"),d=h[0],u=h[1];function f(t,e,i,n){var o,h=e.thumb,d=i.num||Object(s["b"])(e.num),f=i.price||Object(s["b"])(e.price),b=i["origin-price"]||Object(s["b"])(e.originPrice),p=d||f||b||i.bottom;function v(t){Object(a["a"])(n,"click-thumb",t)}function m(){if(i.tag||e.tag)return t("div",{class:u("tag")},[i.tag?i.tag():t(c["a"],{attrs:{mark:!0,type:"danger"}},[e.tag])])}function g(){if(i.thumb||h)return t("a",{attrs:{href:e.thumbLink},class:u("thumb"),on:{click:v}},[i.thumb?i.thumb():t(l["a"],{attrs:{src:h,width:"100%",height:"100%",fit:"cover","lazy-load":e.lazyLoad}}),m()])}function y(){return i.title?i.title():e.title?t("div",{class:[u("title"),"van-multi-ellipsis--l2"]},[e.title]):void 0}function x(){return i.desc?i.desc():e.desc?t("div",{class:[u("desc"),"van-ellipsis"]},[e.desc]):void 0}function S(){var i=e.price.toString().split(".");return t("div",[t("span",{class:u("price-currency")},[e.currency]),t("span",{class:u("price-integer")},[i[0]]),".",t("span",{class:u("price-decimal")},[i[1]])])}function O(){if(f)return t("div",{class:u("price")},[i.price?i.price():S()])}function j(){if(b){var n=i["origin-price"];return t("div",{class:u("origin-price")},[n?n():e.currency+" "+e.originPrice])}}function w(){if(d)return t("div",{class:u("num")},[i.num?i.num():"x"+e.num])}function $(){if(i.footer)return t("div",{class:u("footer")},[i.footer()])}return t("div",r()([{class:u()},Object(a["b"])(n,!0)]),[t("div",{class:u("header")},[g(),t("div",{class:u("content",{centered:e.centered})},[t("div",[y(),x(),null==i.tags?void 0:i.tags()]),p&&t("div",{class:"van-card__bottom"},[null==(o=i["price-top"])?void 0:o.call(i),O(),j(),w(),null==i.bottom?void 0:i.bottom()])])]),$()])}f.props={tag:String,desc:String,thumb:String,title:String,centered:Boolean,lazyLoad:Boolean,thumbLink:String,num:[Number,String],price:[Number,String],originPrice:[Number,String],currency:{type:String,default:"¥"}},e["a"]=d(f)},9884:function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return s}));var n=i("2b0e"),r=i("db85");function o(t,e){var i,o;void 0===e&&(e={});var s=e.indexKey||"index";return n["a"].extend({inject:(i={},i[t]={default:null},i),computed:(o={parent:function(){return this.disableBindRelation?null:this[t]}},o[s]=function(){return this.bindRelation(),this.parent?this.parent.children.indexOf(this):null},o),mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(e){return e!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]);Object(r["a"])(t,this.parent),this.parent.children=t}}}})}function s(t){return{provide:function(){var e;return e={},e[t]=this,e},data:function(){return{children:[]}}}}},"9b7e":function(t,e,i){},"9cb7":function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("09fe"),i("9b7e"),i("ea82")},a3e2:function(t,e,i){"use strict";var n=i("2638"),r=i.n(n),o=i("d282"),s=i("ba31"),a=i("b1d2"),c=i("ad06"),l=Object(o["a"])("tag"),h=l[0],d=l[1];function u(t,e,i,n){var o,l,h=e.type,u=e.mark,f=e.plain,b=e.color,p=e.round,v=e.size,m=f?"color":"backgroundColor",g=(o={},o[m]=b,o);e.textColor&&(g.color=e.textColor);var y={mark:u,plain:f,round:p};v&&(y[v]=v);var x=e.closeable&&t(c["a"],{attrs:{name:"cross"},class:d("close"),on:{click:function(t){t.stopPropagation(),Object(s["a"])(n,"close")}}});return t("transition",{attrs:{name:e.closeable?"van-fade":null}},[t("span",r()([{key:"content",style:g,class:[d([y,h]),(l={},l[a["d"]]=f,l)]},Object(s["b"])(n,!0)]),[null==i.default?void 0:i.default(),x])])}u.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},e["a"]=h(u)},ae9e:function(t,e,i){},b807:function(t,e,i){},db85:function(t,e,i){"use strict";function n(t){var e=[];function i(t){t.forEach((function(t){e.push(t),t.componentInstance&&i(t.componentInstance.$children.map((function(t){return t.$vnode}))),t.children&&i(t.children)}))}return i(t),e}function r(t,e){var i=e.$vnode.componentOptions;if(i&&i.children){var r=n(i.children);t.sort((function(t,e){return r.indexOf(t.$vnode)-r.indexOf(e.$vnode)}))}}i.d(e,"a",(function(){return r}))},ea82:function(t,e,i){},f319:function(t,e,i){}}]);
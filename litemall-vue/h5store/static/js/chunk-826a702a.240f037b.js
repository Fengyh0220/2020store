(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-826a702a"],{"158c":function(t,e,n){"use strict";n.r(e);var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-cell-group",[n("van-cell",{attrs:{title:"联系客服",isLink:""},on:{click:function(e){t.showKefu=!0}}}),n("van-cell",{attrs:{title:"意见反馈",to:"/user/feedback",isLink:""}}),n("van-cell",{attrs:{title:"常见问题",to:"/user/help",isLink:""}})],1),n("van-popup",{model:{value:t.showKefu,callback:function(e){t.showKefu=e},expression:"showKefu"}},[n("van-cell-group",[n("van-cell",{attrs:{title:"项目名称",value:"litemall"}}),n("van-cell",{attrs:{title:"项目地址",value:"Github",url:"https://github.com/linlinjava/litemall"}}),n("van-cell",{attrs:{title:"项目地址",value:"Gitee",url:"https://gitee.com/linlinjava/litemall"}}),n("van-cell",{attrs:{title:"联系电话",value:"021-xxxx-xxxx"}}),n("van-cell",{attrs:{title:"联系QQ",value:"738696120"}}),n("van-cell",{attrs:{title:"当前版本",value:"V1.0"}}),n("van-cell",{attrs:{title:"开源协议",value:"MIT"}})],1)],1)],1)},l=[],o=n("bd86"),s=(n("0653"),n("34e9")),c=(n("c194"),n("7744")),r=(n("7f7f"),n("8a58"),n("e41f")),u={data:function(){return{showKefu:!1}},components:(a={},Object(o["a"])(a,r["a"].name,r["a"]),Object(o["a"])(a,c["a"].name,c["a"]),Object(o["a"])(a,s["a"].name,s["a"]),a)},f=u,v=(n("6c92"),n("2877")),d=Object(v["a"])(f,i,l,!1,null,"7f16f9ca",null);e["default"]=d.exports},"6c92":function(t,e,n){"use strict";var a=n("dfc8"),i=n.n(a);i.a},"8a58":function(t,e,n){"use strict";n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75")},dfc8:function(t,e,n){},e41f:function(t,e,n){"use strict";var a=n("d282"),i=n("a142"),l=n("6605"),o=n("ad06"),s=Object(a["a"])("popup"),c=s[0],r=s[1];e["a"]=c({mixins:[Object(l["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,e=function(e){return function(n){return t.$emit(e,n)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},render:function(){var t,e=arguments[0];if(this.shouldRender){var n=this.round,a=this.position,l=this.duration,s="center"===a,c=this.transition||(s?"van-fade":"van-popup-slide-"+a),u={};if(Object(i["b"])(l)){var f=s?"animationDuration":"transitionDuration";u[f]=l+"s"}return e("transition",{attrs:{name:c},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:u,class:r((t={round:n},t[a]=a,t["safe-area-inset-bottom"]=this.safeAreaInsetBottom,t)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(o["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:r("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}})}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f1d4c6e"],{"111d":function(t,e,n){},2248:function(t,e,n){"use strict";var r=n("111d"),o=n.n(r);o.a},"4ade":function(t,e,n){"use strict";n.r(e);var r,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-form",[n("div",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.productImg,expression:"productImg"}],staticClass:"product-img"}),n("b",{staticClass:"icon"},[t._v("确认宝贝价格发布")])]),n("van-cell-group",[n("van-field",{attrs:{label:"价格",placeholder:"请输入转卖价格"},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{round:"",block:"",type:"info"},on:{click:t.submit}},[t._v("\n      确认发布\n    ")])],1)],1)},c=[],a=n("bd86"),u=(n("be7f"),n("565f")),d=(n("7f7f"),n("38d5"),n("772a")),i=(n("c5f6"),n("dad1")),s={props:{itemId:[String,Number]},data:function(){return{price:"",productImg:""}},created:function(){this.productImg=localStorage.getItem("productImg")},methods:{submit:function(){var t=this;console.log(this.itemId);var e={id:this.itemId,state:"1",second_hand_price:this.price};Object(i["g"])(e).then((function(e){0===e.data.errno?(t.$toast({message:"转卖商品上架成功",duration:1500}),t.$router.go(-1)):t.$toast({message:e.errmsg||"失败，请稍后再试",duration:1500})}))}},components:(r={},Object(a["a"])(r,d["a"].name,d["a"]),Object(a["a"])(r,u["a"].name,u["a"]),r)},l=s,f=(n("2248"),n("2877")),p=Object(f["a"])(l,o,c,!1,null,"2f8bd9cc",null);e["default"]=p.exports},dad1:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return a})),n.d(e,"f",(function(){return u})),n.d(e,"e",(function(){return d})),n.d(e,"g",(function(){return i})),n.d(e,"c",(function(){return s}));var r=n("b775");function o(t){return Object(r["a"])({url:"wx/user/addNotice",method:"post",data:t})}function c(t){return Object(r["a"])({url:"wx/second/selectByStateList",method:"post",data:t})}function a(){return Object(r["a"])({url:"wx/second/querySecondBanner",method:"post"})}function u(){return Object(r["a"])({url:"wx/user/selectNoticeList",method:"post"})}function d(t){return Object(r["a"])({url:"wx/second/selectByUserIdList",method:"post",data:t})}function i(t){return Object(r["a"])({url:"wx/second/updateOrderGoodsState",method:"post",data:t})}function s(t){return Object(r["a"])({url:"wx/second/selectByIdOrderGoods",method:"post",data:t})}}}]);
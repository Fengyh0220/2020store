<template>
  <div class="item_detail"> 
      <!-- <a href="https://uapi.pop800.com/web800/c.do?l=cn&type=0&n=832081&w=0&c=00dde6f8f9880c86" target="_blank"></a> -->
    <div class="top-div">
      <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img src="http://122.51.199.160:8080/wx/storage/fetch/n7ntay81fg7c3bkiq8bj.jpg"
                    style="height: 250px">
            </van-swipe-item>
            <van-swipe-item>
                <img src="http://122.51.199.160:8080/wx/storage/fetch/bm29rsjaehjke99mnayf.jpgg"
                    style="height:250px">
            </van-swipe-item>
    </van-swipe>
   <van-notice-bar left-icon="chat" :scrollable="false">
  <van-swipe
    vertical
    class="notice-swipe"
    :autoplay="3000"
    :show-indicators="false"
  >
    <van-swipe-item> 
        <img src="http://testavatar.xingqiuxiuchang.cn/e208b75e-5228-4095-89a9-647e80aa708a.jpg" />
    canny:内容 1</van-swipe-item>
    <van-swipe-item>
        <img src="http://testavatar.xingqiuxiuchang.cn/e208b75e-5228-4095-89a9-647e80aa708a.jpg" />
        aa:内容 2</van-swipe-item>
    <van-swipe-item>
        <img src="http://testavatar.xingqiuxiuchang.cn/e208b75e-5228-4095-89a9-647e80aa708a.jpg" />
        bb:内容 3</van-swipe-item>
  </van-swipe>
</van-notice-bar>
<ul class="pro-nav">
        <li v-for="(item,i) in typeList[0].sortList" :key="i" :class="{'active':typeList[0].index == i,'sort':item.sort != undefined,'bottom':item.sort == 1&&typeList[0].index == i}" @click="toggleIndex(i)">{{item.info}}</li>
      </ul>
    </div>
      <van-pull-refresh  v-model="refreshing" @refresh="onRefresh">
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
        <ul class="commodity-box-list">
<li  class="commodity-box" v-for="item in list" :key="item">
                <div  class="main-pic">
                  <img src="http://testavatar.xingqiuxiuchang.cn/e208b75e-5228-4095-89a9-647e80aa708a.jpg" />
                 </div>
                  <div  class="info-box">
                      <p  class="name">手机壳1</p>
                      <div  class="other-box">
                          <p  class="sale-price">
                              ¥2
                              <s >￥3</s>
                            </p>
                          <div class="sale-nums">
                              <img src="http://testavatar.xingqiuxiuchang.cn/e208b75e-5228-4095-89a9-647e80aa708a.jpg">
                              <span>canny</span>
                              </div>
                     </div>
                </div>
</li>
</ul>
        <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
        </van-list>
    </van-pull-refresh>
     
      <!-- <div class="product">
          <ul>
               <li  class="commodity-box">
                <div  class="main-pic">
                  <img src="http://testavatar.xingqiuxiuchang.cn/e208b75e-5228-4095-89a9-647e80aa708a.jpg" />
                 </div>
                  <div  class="info-box">
                      <p  class="name">手机壳1</p>
                      <div  class="other-box">
                          <p  class="sale-price">
                              ¥2
                              <s >￥3</s>
                            </p>
                          <div class="sale-nums">销量:0</div>
                     </div>
                </div>
            </li>
             <li  class="commodity-box">
                <div  class="main-pic">
                  <img src="http://testavatar.xingqiuxiuchang.cn/e208b75e-5228-4095-89a9-647e80aa708a.jpg" />
                 </div>
                  <div  class="info-box">
                      <p  class="name">手机壳1</p>
                      <div  class="other-box">
                          <p  class="sale-price">
                              ¥2
                              <s >￥3</s>
                            </p>
                          <div class="sale-nums">销量:0</div>
                     </div>
                </div>
            </li>
             <li  class="commodity-box">
                <div  class="main-pic">
                  <img src="http://testavatar.xingqiuxiuchang.cn/e208b75e-5228-4095-89a9-647e80aa708a.jpg" />
                 </div>
                  <div  class="info-box">
                      <p  class="name">手机壳1</p>
                      <div  class="other-box">
                          <p  class="sale-price">
                              ¥2
                              <s >￥3</s>
                            </p>
                          <div class="sale-nums">销量:0</div>
                     </div>
                </div>
            </li>
             <li  class="commodity-box">
                <div  class="main-pic">
                  <img src="http://testavatar.xingqiuxiuchang.cn/e208b75e-5228-4095-89a9-647e80aa708a.jpg" />
                 </div>
                  <div  class="info-box">
                      <p  class="name">手机壳1</p>
                      <div  class="other-box">
                          <p  class="sale-price">
                              ¥2
                              <s >￥3</s>
                            </p>
                          <div class="sale-nums">销量:0</div>
                     </div>
                </div>
            </li>
             <li  class="commodity-box">
                <div  class="main-pic">
                  <img src="http://testavatar.xingqiuxiuchang.cn/e208b75e-5228-4095-89a9-647e80aa708a.jpg" />
                 </div>
                  <div  class="info-box">
                      <p  class="name">手机壳1</p>
                      <div  class="other-box">
                          <p  class="sale-price">
                              ¥2
                              <s >￥3</s>
                            </p>
                          <div class="sale-nums">销量:0</div>
                     </div>
                </div>
            </li>
           
          </ul>
      </div> -->
 </div>
</template>

<script>
// import { getHome, goodsCategory, couponReceive } from '@/api/api';
import scrollFixed from '@/mixin/scroll-fixed';
// import _ from 'lodash';

import {
  List,
  Swipe,
  SwipeItem,
  DropdownMenu,
  DropdownItem,
   NoticeBar ,
   Toast
//   Tabbar,
//   TabbarItem,
//   Search,
//   Panel,
//   CouponCell,
//   CouponList,
//   Toast,
//   Card,
//   Grid,
//   GridItem,
//   Row,
//   Col,
//   Tag
} from 'vant';

export default {
  mixins: [scrollFixed],

  data() {
    return {
      shopInfos: [],
      isLoading: false,
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      typeList: [{
        index: 0,
        sortList: [{
          name: 'SYNTHETICAL',
          info: '综合'
        },{
          name: 'PRICE',
          sort: 0,
          info: '价格'
        }]
      }],
    };
  },

  created() {
    this.initViews();
  },

  methods: {
      
   toggleIndex(val) {
      let item = this.typeList[0];
      let cb = ()=>{
        // this.proLoadMore.pageNum = 1;
        // if(this.proLoadMore.loading)return;
        // this.proLoadMore.loading = true;
        // this.$utils.promiseLoading([this['getProList']]);
      };
      if (val != item['index']) {
        item['index'] = val;
        cb();
      } else if (val == item['index'] && item['sortList'][item.index].sort != undefined) {
        item['sortList'][item.index].sort = item['sortList'][item.index].sort == 1 ? 0 : 1;
        cb();
      }
    },
     onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },

  components: {
    // [Row.name]: Row,
    // [Col.name]: Col,
    // [Card.name]: Card,
    [Toast.name]: Toast,
    // [CouponCell.name]: CouponCell,
    // [CouponList.name]: CouponList,
    // [Search.name]: Search,
    // [Panel.name]: Panel,
    [List.name]: List,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [DropdownMenu.name]: DropdownMenu, 
    [DropdownItem.name]: DropdownItem,
    [NoticeBar.name]:  NoticeBar,
    // [Grid.name]: Grid,
    // [GridItem.name]: GridItem
  }
};
</script>


<style lang="scss" scoped>
.van-swipe-item{
    color: #252525
}
.van-notice-bar .van-swipe-item img{
    width: 20px;
    height: 20px;
    border-radius: 20px;
    float: left;
    margin: 10px 5px 10px 0; 
}
// .van-notice-bar{
//  border-top: 1px solid #f2f2f2;
//  border-bottom: px solid #f2f2f2;
// }
.notice-swipe {
    height: 40px;
    line-height: 40px;
  }
.top-div{
    width: 100%;
    height: 345px;
    background: #fff;
    position: fixed;
    z-index: 9;
}

.van-list{
    padding-top: 355px;
}
.pro-nav {
    background-color: #fff;
    position: absolute;
    top: 290px;
    width: 100%;
    left: 0;
    height: 55px;
}
.pro-nav li {
        width: 50%;
        float: left;
        font-size:20px;
        color: #252525;
        text-align: center;
        line-height:55px;
    }
.pro-nav li.active {
color: red;
}
.pro-nav li.sort {
position: relative;
}
.pro-nav li.sort.active::after {
    border-top: 8px solid rgb(63,63,63);
}
.pro-nav li.sort.active::before {
border-bottom: 8px solid red;
}
.pro-nav li.sort::after,
.pro-nav li.sort::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(26px,-50%);
    margin-top: -6px;
    border-top: 4px solid transparent;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 8px solid rgb(63,63,63);
}
.pro-nav li.sort::after {
    margin-top: 8px;
    border-bottom: 5px solid transparent;
    border-top: 8px solid rgb(63,63,63);
}
 .pro-nav li.sort.bottom::after {
    border-top:8px solid red;
}
.pro-nav li.sort.bottom::before {
    border-bottom: 8px solid rgb(63,63,63);
}
//商品列表
.product{
    width: 100%;
    margin-top: 55px;
}
.commodity-box-list{
    width: 100%;
    padding: 10px 7px 0;
    display: flex;
    flex-wrap: wrap
}
.commodity-box{
    width: 190px;
    float: left;
    // margin-bottom: 20px;
    background: #fff;
    overflow: hidden;
    margin: 0 5px 10px;
    border-radius: 10px
}
.commodity-box:nth-child(2n+1) {
    clear: both;
}
.main-pic {
    height: 190px;
    width: 190px;
    position: relative;
}
img{
    width: 100%;
    height: 100%;
}
.info-box{
    height: auto;
    position: relative;
    padding: 0 10px;
}
.name{
    font-size: 20px;
    padding-top: 5px;
    color: #252525;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-break: break-all;
    margin: 0
}
.other-box{
    padding: 0;
    position: initial;
        width: 100%;
    bottom: 0;
    left: 0;
}
.sale-price{
    font-size: 18px;
    color: #E61E3C;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    margin: 0
}
.sale-price s{
    font-size: 14px;
    color: #686868;
    display: inline;
}
.sale-nums{
    font-size: 18px;
    height: 30px;
    line-height: 30px;
    color: #666;
    margin-bottom: 10px;
}
.sale-nums img{
    width: 20px;
    height: 20px;
    border-radius: 20px;
    float: left;
    margin: 5px 5px 5px 0;
}
</style>

<template>
  <div class="tab_home">
    <van-swipe :autoplay="3000"
               indicator-color="white">
      <van-swipe-item v-for="(banner, index) in shopInfos.banner"
                      :key="index">
        <img v-lazy="banner.url"
             style="height:230px">
      </van-swipe-item>
    </van-swipe>

    <div class="goods-channel">
      <router-link class="item" to="/items">
        <van-icon name="class-full"/>
        <span>全部分类</span>
      </router-link>
      <router-link class="item" to="/shop">
        <van-icon name="bag"/>
        <span>二手市场</span>
      </router-link>
      <a class="item" href="https://uapi.pop800.com/web800/c.do?l=cn&type=0&n=832081&w=0&c=00dde6f8f9880c86" target="_blank">
        <van-icon name="kefu"/>
        <span>联系我们</span>
      </a>
      <router-link class="item" to="/items/new">
        <van-icon name="service-o"/>
        <span>商品预售</span>
      </router-link>
      <router-link class="item" to="/items/groupon">
        <van-icon name="clock"/>
        <span>限时抢购</span>
      </router-link>
      <router-link class="item" to="/user">
        <van-icon name="wode"/>
        <span>个人中心</span>
      </router-link>
    </div>
    <!-- 限时抢购 团购 -->
    <van-panel v-if="shopInfos.grouponTimeLimitList && shopInfos.grouponTimeLimitList.length > 0">
      <van-card v-for="(grouponGood ,index) in shopInfos.grouponTimeLimitList"
                :key="index"
                :title="grouponGood.name"
                :desc="grouponGood.brief"
                :origin-price="grouponGood.retailPrice"
                :price="grouponGood.grouponPrice +'.00'"
                :thumb="grouponGood.picUrl"
                @native-click="goDetail(grouponGood.id)">
      </van-card>
      <div slot='header'>
        <van-cell-group>
          <van-cell title="限时抢购"
                    isLink>
            <router-link to="/items/groupon"
                         class="text-desc">距离活动结束<span>{{listTimeLimittime.h}}:{{listTimeLimittime.m}}:{{listTimeLimittime.s}}</span></router-link>
          </van-cell>
        </van-cell-group>
      </div>
    </van-panel>

    <van-panel class="van-panel1" v-if="shopInfos.grouponPreSaleList && shopInfos.grouponPreSaleList.length > 0">
       <van-row> 
           <van-col span="11"  v-for="(newGood ,index) in shopInfos.grouponPreSaleList"
                 :key="index">
              <router-link :to="{path: `/items/detail/${newGood.id}/2`}">
                <img v-lazy="newGood.picUrl" style="height:180px"/>
                 <div  class="info-box">
                      <p  class="name">{{newGood.name}}</p>
                      <div  class="other-box">
                          <p  class="sale-price">
                              ￥ {{newGood.retailPrice}}
                              <s >￥{{newGood.counterPrice}}</s>
                            </p>
                     </div>
                </div>
              </router-link>
           </van-col>
        </van-row>
      <div slot='header'>
        <van-cell-group>
          <van-cell title="商品预售"
                    isLink>
            <router-link to="/items/new"
                         class="text-desc">距离活动开始<span>{{listPreSaletime.h}}:{{listPreSaletime.m}}:{{listPreSaletime.s}}</span></router-link>
          </van-cell>
        </van-cell-group>
      </div>
    </van-panel>

    <van-panel>
      <van-card v-for="(groupGood ,index) in shopInfos.hotGoodsList"
                :key="index"
                :title="groupGood.name"
                :desc="groupGood.brief"
                :origin-price="groupGood.counterPrice"
                :price="groupGood.retailPrice +''"
                :thumb="groupGood.picUrl"
                @native-click="goDetailurl(groupGood.id)">
      </van-card>
      <div slot='header'>
        <van-cell-group>
          <van-cell title="人气推荐"
                    isLink>
            <router-link to="/items/hot"
                         class="text-desc">更多人气推荐</router-link>
          </van-cell>
        </van-cell-group>
      </div>
    </van-panel>
  </div>
</template>

<script>
import { getHome, goodsCategory, couponReceive ,timeStampPre,listTimeLimit,listPreSale} from '@/api/api';
import scrollFixed from '@/mixin/scroll-fixed';
import { countdown } from '@/utils/local-storage';
import _ from 'lodash';
import {
  List,
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem,
  Search,
  Panel,
  CouponCell,
  CouponList,
  Toast,
  Card,
  Grid,
  GridItem,
  Row,
  Col,
  Tag
} from 'vant';
export default {
  mixins: [scrollFixed],
  data() {
    return {
      shopInfos: [],
      isLoading: false,
      listTimeLimittime:{
        h:'00',
        m:'00',
        s:'00',
      },
      listPreSaletime:{
        h:'00',
        m:'00',
        s:'00',
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    goDetail(id) {
      return `#/items/detail/${id}/1`;
    },
    goDetailurl(id) {
      return `#/items/detail/${id}/3`;
    },
    getData(){
      //限时
      listTimeLimit().then(res => {
      if( res.data.data.grouponRuleVoList.length > 0) {
            let expireTime = res.data.data.grouponRuleVoList[0].expireTime;
          if(res.data.errno === 0){
            countdown({
                  data: this,
                  type: 2,
                  name: 'listTimeLimittime',
                  now:res.data.currentTime,
                  time: expireTime,
          });
          }
      }
      })
      //预售
      listPreSale().then(res => {
      if(res.data.data.grouponRuleVoList.length > 0) {
        let startTime = res.data.data.grouponRuleVoList[0].startTime;
      if(res.data.errno === 0){
         countdown({
              data: this,
              type: 1,
              name: 'listPreSaletime',
              now:res.data.currentTime,
              time: startTime,
       });
      }
      }
      })
      this.initViews();
    },
    // goBrand(id) {
    //   return `#/items/brand/${id}`;
    // },
    // goTopic(id) {
    //   return `#/items/topic/${id}`;
    // },    
    // getCoupon(id) {
    //   couponReceive({ couponId: id }).then(res => {
    //     Toast.success('领取成功');
    //   });
    // },
    changeTabbar(o) {
      goodsCategory({ id: o.id }).then(res => {
        let categoryId = res.data.data.currentCategory.id;
        this.$router.replace({
          name: 'category',
          query: { itemClass: categoryId }
        });
      });
    },
    initViews() {
      getHome().then(res => {
        this.shopInfos = res.data.data;
      });
    }
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Card.name]: Card,
    [Toast.name]: Toast,
    [CouponCell.name]: CouponCell,
    [CouponList.name]: CouponList,
    [Search.name]: Search,
    [Panel.name]: Panel,
    [List.name]: List,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Tag.name]: Tag,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  }
};
</script>


<style lang="scss" scoped>

.info-box{
    width: 100%;
    height: auto;
    position: relative;
    padding: 0 10px;
    margin: 0 auto
}
.name{
    font-size: 14px;
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
    font-size: 14px;
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
    font-size: 12px;
    color: #686868;
    display: inline;
}
.sale-nums{
    font-size: 14px;
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
.interval_bot {
  margin-bottom: 10px;
}
.van-panel {
  margin-top: 20px;
}
.goods-channel {
  background: #fff;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 0px;
  padding-top: 10px;
}
.goods-channel .item {
  width: 30%;
  height: 50px;
  margin-left: 10px;
  text-align: center
}
.goods-channel img {
  display: block;
  width: 30px;
  height: 30px;
  margin: 0 auto;
}
.goods-channel span {
  display: block;
  font-size: 14px;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #333;
}
.van-coupon-cell--selected {
  color: #323233;
}
.van-coupon-list {
  height: 100%;
  position: relative;
  background-color: #f8f8f8;
}
.van-coupon-list__field {
  padding: 7px 15px;
}
.van-coupon-list__exchange {
  height: 32px;
  line-height: 30px;
}
.van-coupon-list__list {
  overflow-y: auto;
  padding: 15px 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
}
.van-coupon-list__close {
  left: 0;
  bottom: 0;
  position: absolute;
  font-weight: 500;
}
.van-coupon-list__empty {
  padding-top: 100px;
  text-align: center;
}
.van-coupon-list__empty p {
  color: #969799;
  margin: 15px 0;
  font-size: 14px;
  line-height: 20px;
}
.van-coupon-list__empty img {
  width: 80px;
  height: 84px;
}
.van-coupon-item {
  overflow: hidden;
  border-radius: 4px;
  margin: 0 15px 15px;
  background-color: #fff;
  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}
.van-coupon-item:active {
  background-color: #e8e8e8;
}
.van-coupon-item__content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100px;
  padding: 24px 0 0 15px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid red;
}
.van-coupon-item h2,
.van-coupon-item p {
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.van-coupon-item h2 {
  height: 34px;
  font-weight: 500;
  line-height: 34px;
}
.van-coupon-item p {
  font-size: 12px;
  line-height: 16px;
  color: #969799;
}
.van-coupon-item__head {
  min-width: 90px;
}
.van-coupon-item__head h2 {
  color: #f44;
  font-size: 24px;
}
.van-coupon-item__head h2 span {
  font-size: 50%;
}
.van-coupon-item__body {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  border-radius: 0 4px 4px 0;
}
.van-coupon-item__body h2 {
  font-size: 16px;
}
.van-coupon-item__corner {
  top: 16px;
  right: 15px;
  position: absolute;
}
.van-coupon-item__corner .van-icon {
  border-color: #f44;
  background-color: #f44;
}
.van-coupon-item__reason {
  padding: 7px 15px;
  border-top: 1px dashed #ebedf0;
  background-color: #fafafa;
}
.van-coupon-item--disabled:active {
  background-color: #fff;
}
.van-coupon-item--disabled .van-coupon-item__content {
  height: 90px;
}
.van-coupon-item--disabled h2,
.van-coupon-item--disabled p,
.van-coupon-item--disabled span {
  color: #969799;
}
.van-panel1{
  background: #f2f2f2;
  .van-col{
    background: #fff;
    border-radius: 5px;
    margin: 10px 7px 0;
    padding-bottom: 10px;
    .name{
    font-size: 14px;
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
  img{
    width: 100%;
    height: 100%;
  }
}
.van-row{
  padding: 0 8px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
}
}
.tab_home{
  padding-bottom: 60px
}
</style>

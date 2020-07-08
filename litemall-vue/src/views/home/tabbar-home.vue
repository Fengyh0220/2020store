<template>
  <div class="tab_home">
    <van-swipe :autoplay="3000"
               indicator-color="white">
      <van-swipe-item v-for="(banner, index) in shopInfos.banner"
                      :key="index">
        <img :src="banner.url"
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
    <van-panel>
      <van-card :thumb-link="goDetail(grouponGood.id)"
                v-for="(grouponGood ,index) in shopInfos.grouponList"
                :key="index"
                :title="grouponGood.name"
                :desc="grouponGood.brief"
                :origin-price="grouponGood.retailPrice"
                :price="grouponGood.grouponPrice +'.00'"
                :thumb="grouponGood.picUrl"
                @native-click="goDetail(grouponGood.id)">
        <div slot="tags"
             class="card__tags">
          <van-tag plain
                   type="primary">
            {{grouponGood.grouponMember}}人成团
          </van-tag>
          <van-tag plain
                   type="danger">
            {{grouponGood.grouponDiscount}}元再减
          </van-tag>
        </div>
      </van-card>
      <div slot='header'>
        <van-cell-group>
          <van-cell title="团购专区"
                    isLink>
            <router-link to="/items/groupon"
                         class="text-desc">距离活动结束还剩<span>00:00:00</span></router-link>
          </van-cell>
        </van-cell-group>
      </div>
    </van-panel>

    <!-- <van-panel>
      <van-grid clickable
                :column-num="2">
        <van-grid-item v-for="(brand ,index) in shopInfos.brandList"
                       :key="index"
                       :text="brand.name"
                       :url="goBrand(brand.id)">
          <img :src="brand.picUrl"
               style="width: 80%;" />
          <div style="font-size:16px;"> {{ brand.name }}</div>
        </van-grid-item>
      </van-grid>
      <div slot='header'>
        <van-cell-group>
          <van-cell title="品牌商直供"
                    isLink>
            <router-link to="/items/brand-list"
                         class="text-desc">更多品牌商</router-link>
          </van-cell>
        </van-cell-group>
      </div>
    </van-panel> -->

    <van-panel>
      <van-row gutter>
        <van-col span="12"
                 v-for="(newGood ,index) in shopInfos.newGoodsList"
                 :key="index">
          <router-link :to="{ path: `/items/detail/${newGood.id}`}/2">
            <img :src="newGood.picUrl"
                 style="width:180px;height:180px;">
          </router-link>
          <span style="padding-left: 20px;position: relative;bottom: 10px; color: rgb(123, 116, 116);white-space: nowrap;">{{newGood.name}}</span>
          <span style="padding-left: 80px;position: relative;bottom: 10px; color:#ab956d">￥ {{newGood.retailPrice}}</span>
        </van-col>
      </van-row>
      <div slot='header'>
        <van-cell-group>
          <van-cell title="商品预售"
                    isLink>
            <router-link to="/items/new"
                         class="text-desc">距离活动结束还剩<span>00:00:00</span></router-link>
          </van-cell>
        </van-cell-group>
      </div>
    </van-panel>

    <!-- <van-panel>
      <van-card :thumb-link="goDetail(groupGood.id)"
                v-for="(groupGood ,index) in shopInfos.hotGoodsList"
                :key="index"
                :title="groupGood.name"
                :desc="groupGood.brief"
                :origin-price="groupGood.counterPrice"
                :price="groupGood.retailPrice +'.00'"
                :thumb="groupGood.picUrl"
                @native-click="goDetail(groupGood.id)">
        <div slot="footer">添加日期 {{item.addTime}}</div> -->
      <!-- </van-card>
      <div slot='header'>
        <van-cell-group>
          <van-cell title="人气推荐"
                    isLink>
            <router-link to="/items/hot"
                         class="text-desc">更多人气推荐</router-link>
          </van-cell>
        </van-cell-group>
      </div>
    </van-panel> -->

<!-- <van-panel>
      <van-grid clickable
                :column-num="2">
        <van-grid-item v-for="(topic ,index) in shopInfos.topicList"
                       :key="index"
                       :url="goTopic(topic.id)">
          <img :src="topic.picUrl"
               style="width: 90%; max-height: 150px;" />
          <div style="font-size:14px;color:#ab956d;"> {{ topic.title }}</div>
          <div style="font-size:10px;color:#ab956d;"> {{ topic.subtitle }}</div>
        </van-grid-item>
      </van-grid>
      <div slot='header'>
        <van-cell-group>
          <van-cell title="专题精选"
                    isLink>
            <router-link to="/items/topic-list"
                         class="text-desc">更多专题精选</router-link>
          </van-cell>
        </van-cell-group>
      </div>
    </van-panel> -->

  </div>
</template>

<script>
import { getHome, goodsCategory, couponReceive } from '@/api/api';
import scrollFixed from '@/mixin/scroll-fixed';
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
      isLoading: false
    };
  },
  created() {
    this.initViews();
  },
  methods: {
    goDetail(id) {
      return `#/items/detail/${id}/1`;
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
</style>

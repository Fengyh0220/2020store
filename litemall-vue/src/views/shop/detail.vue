<template>
  <div class="page-container">
      <div class="commodity-container">
      <!-- <common-pro-list v-if="data.mode == 'grid'" :data='dataProp.dataList' ref='waterfall'></common-pro-list> -->
      <ul class="commodity-list">
        <li v-for="(item,i) in data" :key="i" @click="toDetail(item)" class="commodity-box grid">
          <div class="main-pic">
            <img v-lazy="item.mainImgUrl">
            <p class="sell-out" v-if="item.inventoryQuantity === 0"></p>
            <div class="tabs">
              <template v-if="item.activityTypeNameList && item.activityTypeNameList.length > 0">
                <span v-for="(market,m) in item.activityTypeNameList" :key="m">{{market}}</span>
              </template>
              <span v-if="item.starValue > 0">最高可用秀豆{{item.starValue}}</span>
            </div>
          </div>
          <div class="info-box">
            <p class="name">{{item.goodsName}}</p>
            <div class="other-box">
              <p class="sale-price" v-if="item.smallShopPriceMin">
                ¥{{item.smallShopPriceMin | moneyFormat}}<template v-if="item.smallShopPriceMax > item.smallShopPriceMin">-{{item.smallShopPriceMax | moneyFormat}}</template>
              <!-- <s v-if='item.retailPriceMin'>¥{{item.retailPriceMin | moneyFormat}}<template v-if="item.retailPriceMax > item.retailPriceMin">-{{item.retailPriceMax | moneyFormat}}</template></s> -->
              </p>
              <p class="sale-price" v-else>¥{{item.salePrice | moneyFormat}}<s v-if="item.marketPrice > item.salePrice">￥{{item.marketPrice | moneyFormat}}</s></p>
              <div class="showmate" v-if="item.showRiceNumDesc">{{item.showRiceNumDesc}}</div>
              <div class="sale-nums">{{item.saleAmountStr}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
      <ul class="pro-nav" slot="other">
        <li v-for="(item,i) in typeList[0].sortList" :key="i" :class="{'active':typeList[0].index == i,'sort':item.sort != undefined,'bottom':item.sort == 1&&typeList[0].index == i}" @click="toggleIndex(i)">{{item.info}}</li>
      </ul>
  </div>
</template>
<script>
import search from '@/mixins/search.js';
export default {
  components: {},
  data() {
    return {
      routeType: 'shop',
      typeList: [{
        index: 0,
        sortList: [{
          name: 'SYNTHETICAL',
          info: '综合'
        }, {
          name: 'SALES',
          info: '销量'
        }, {
          name: 'PRICE',
          sort: 0,
          info: '价格'
        }]
      }],
      proLoadMore: {
        total: 0,
        pageNum: 1,
        loading: false,
        endline: false,
        tips: "无相关商品",
        methods: this.loadMorePro
      },
      proList: [],
      index: 0,
      isCategoryReco:0,
      pageNum: 1,
      initStatus: true
    };
  },
  mixins:[search],
  computed: {
    hasNav(){
      return this.$route.query.type != 1;
    }
  },
  activated(){
    if(!this.initStatus && this.$route.meta.isNeedRefresh){
      this.init();
    }
  },
  created() {
    this.init();
  },
  mounted() {
    this.$nextTick(()=>{
      this.initStatus = false;
    });
  },
  methods: {
    init(){
      this.searchVal = this.$route.query.searchVal || '';
      this.isCategoryReco = this.$route.query.isHomeReco ? 1 : 0;
      this.search();
    },
    cancel() {
      this.value = !this.value;
      this.$emit('input', this.value);
    },
    toggleIndex(val) {
      let item = this.typeList[0];
      let cb = ()=>{
        this.proLoadMore.pageNum = 1;
        if(this.proLoadMore.loading)return;
        this.proLoadMore.loading = true;
        this.$utils.promiseLoading([this['getProList']]);
      };
      if (val != item['index']) {
        item['index'] = val;
        cb();
      } else if (val == item['index'] && item['sortList'][item.index].sort != undefined) {
        item['sortList'][item.index].sort = item['sortList'][item.index].sort == 1 ? 0 : 1;
        cb();
      }
    },
    getProList() {
      let item = this.typeList[0];
      let obj = this.typeList[0]['sortList'][item.index];
      return this.$http.goodsSearch({
        brandIdList: this.$route.query.brandId ? [this.$route.query.brandId] : null,
        // categoryIdList,
        direct: obj.sort,
        name: this.searchVal,
        sortName: obj.name,
        pageNum: this.proLoadMore.pageNum,
        isCategoryReco: this.isCategoryReco,
        shopId: this.$route.params.shopId
      }).then((res) => {
        if(this.proLoadMore.pageNum == 1){
          this.proList = [];
          if(this.$refs['proScrollView']){
            this.$refs['proScrollView'].refresh();
            this.$refs['proScrollView'].iscroll.scrollTo(0,0);
          }
        }
        if (res.errCode === 0) {
          this.proList = [...this.proList, ...res.result.dataList];
          this.proLoadMore.total = this.proList.length;
          res.result.dataList.length > 0 && this.proLoadMore.pageNum++;
          this.proLoadMore.endline = res.result.dataList.length == 0;
        }
        // this.$nextTick(()=>{
        //   this.$refs['proList'] && this.$refs['proList'].init();
        // });
        this.proLoadMore.loading = false;
      });
    },
    loadMorePro() {
      if (this.proLoadMore.loading) return;
      this.proLoadMore.loading = true;
      return this.$utils.promiseLoading([this.getProList]);
    },
    search() {
      this.proLoadMore.pageNum = 1;
      this.pushSearchVal(this.searchVal);
      let ajaxList = [this.getProList];
      this.$utils.promiseLoading(ajaxList);
    }
  }
};
</script>
<style lang='scss' scoped>
.commodity-container{
    .commodity-list{
        padding: 0.2rem 0.2rem 0;
        overflow: hidden;
        &.has-swiper{
            padding: 0 0 0 0.2rem;
        }
        .commodity-box{
            background: #fff;
            overflow: hidden;
            .main-pic{
                position: relative;
                img{
                    width:100%;
                    height: 100%;
                }
                .sell-out{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.5) url('~@/assets/common/sell-out.png') no-repeat top 0.1rem right 0.1rem / 1.3rem;
                    position: absolute;
                    top: 0;
                    right: 0;
                    z-index: 1;
                    border-radius: 0.04rem;
                }
                .tabs{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    span{
                        font-size: 0.2rem;
                        line-height: 0.26rem;
                        padding-right: 0.15rem;
                        padding-left: 0.1rem;
                        display: block;
                        float: left;
                        clear: both;
                        margin-top: 0.1rem;
                        color:#fff;
                        border-radius: 0 0.13rem 0.13rem 0;
                        &:nth-last-child(3n+3){
                            background: #FF388B;
                        }
                        &:nth-last-child(3n+2){
                            background: #C71EE6;
                        }
                        &:nth-last-child(3n+1){
                            background: #E61E3C;
                        }
                    }
                }
            }
            .info-box{
                position: relative;
                .name{
                    @include ellipsis(2);
                }
                .other-box{
                    position: absolute;
                    width:100%;
                    bottom:0;
                    left:0;
                    .discount{
                        font-size: 0.26rem;
                        color:#E61E3C;
                    }
                    .sale-price{
                        font-size: 0.32rem;
                        color:#E61E3C;
                        word-break: break-all;
                        @include ellipsis(1);
                        &.has-btn{
                            padding-right: 1.4rem;
                        }
                        span{
                            display: inline-block;
                            font-size: .16rem;
                            color: #FB5858;
                            height:.24rem;
                            line-height: .24rem;
                            background:rgba(251,88,88,0.3);
                            border-radius:.04rem;
                            padding: 0 .05rem;
                            margin-left: .1rem;
                            overflow:hidden
                        }
                    }
                    s{
                        font-size: 0.2rem;
                        color:#686868;
                        display: block;
                    }
                    .btn{
                        width: 1.2rem;
                        height: 0.4rem;
                        border-radius: 0.2rem;
                        font-size: 0.24rem;
                        color:#fff;
                        position: absolute;
                        right:0.2rem;
                        bottom: 0.2rem;
                        background: #E61E3C;
                        &.gray{
                            background: #999;
                        }
                    }
                    .showmate{
                        font-size: 0.24rem;
                        color: #E61E3C;
                        @include ellipsis(1);
                    }
                    .sale-nums{
                        font-size: 0.24rem;
                        color: #666;
                        &.f-r{
                            float: right;
                            margin-right: 0.25rem;
                        }
                    }
                }
            }
            &.left,&.right{
                width: 100%;
                height: 2.4rem;
                border-radius: 0.1rem;
                margin-bottom: 0.2rem;
                .main-pic{
                    width: 2.4rem;
                    height: 100%;
                    float: left;
                }
                .info-box{
                    margin-left: 2.6rem;
                    padding-right: 0.2rem;
                    position: relative;
                    height: 100%;
                    .name {
                        font-size: 0.26rem;
                        padding-top: 0.2rem;
                        color: #252525;
                    }
                    .other-box{
                        padding-bottom: 0.14rem;
                        .tabs{
                            // word-break: break-all;
                            margin: 0.07rem 0 ;
                            font-size: 0.2rem;
                            color:#E61E3C;
                            float: left;
                            max-width: 2.5rem;
                            @include ellipsis(1);
                            span{
                                display: inline-block;
                                vertical-align: top;
                                line-height: 0.26rem;
                                padding: 0 0.1rem;
                                margin-right: 0.1rem;
                                @include border(1px,solid,#E61E3C,0.13rem)
                            }
                        }
                        .sale-price{
                            font-size: 0.32rem;
                            color:#E61E3C;
                            s{
                                font-size: 0.24rem;
                                color:#999999;
                            }
                        }
                        .price{
                            font-size: 0.24rem;
                            color:#999999;
                            margin-top: 0.1rem;
                        }
                    }
                }
            }
            &.right{
                .main-pic{
                    float: right;
                }
                .info-box{
                    position: relative;
                    margin-right: 2.4rem;
                    margin-left: 0.2rem;
                }
            }
            &.grid,&.slider{
                width: 3.44rem;
                float: left;
                margin-bottom: 0.2rem;
                &:nth-child(2n+2){
                    float:right;
                }
                .main-pic{
                    height: 3.44rem;
                    width: 3.44rem;
                }
                .info-box{
                    position: relative;
                    height: 2.31rem;
                    padding: 0 0.2rem;
                    .name{
                        font-size: 0.28rem;
                        padding-top: 0.1rem;
                        color:#252525;
                    }
                    .other-box{
                        padding: 0 0.2rem 0.2rem;
                        s{
                            display: inline;
                        }
                        .sale-price{
                            font-size: 0.32rem;
                            color:#E61E3C;
                        }
                        .showmate{
                            margin: 0.08rem 0;
                        }
                    }
                }
            }
            &.line3{
                width:2.3rem;
                margin-right: 0.1rem;
                float: left;
                margin-bottom: 0.2rem;
                &:nth-child(3n+2){
                    margin-right:0;
                }
                &:nth-child(3n+3){
                    margin-right:0;
                    float:right;
                }
                .main-pic{
                    width: 2.3rem;
                    height: 2.3rem;
                }
                .info-box{
                    height: 1.88rem;
                    padding: 0 0.2rem;
                    overflow: hidden;
                    &.has-btn{
                        height: 2.4rem;
                    }
                    .name{
                        font-size: 0.24rem;
                        margin-top: 0.1rem;
                    }
                    .other-box{
                        padding:0 0.2rem 0.05rem;
                        s{
                            display: inline;
                        }
                        .btn{
                            width: 100%;
                            position: initial;
                            height: 0.4rem;
                            display: block;
                            margin: 0.1rem 0;
                            border-radius: 0.1rem;
                            font-size: 0.24rem;
                            color:#fff;
                            background: #E61E3C;
                        }
                    }
                }
            }
            &.slider{
                width:3.2rem;
                &:nth-child(2n+2){
                    float: none;
                }
                .main-pic{
                    width: 3.2rem;
                    height: 3.2rem;
                }
            }
        }
    }
}
.page-swiper {
    position: absolute;
    // top: 2.56rem;
    top: 1.76rem;
    width: 100%;
    left: 0;
    bottom: 0;
}
.search-box {
    height: 0.88rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    position: relative;
    padding: 0 0.3rem 0 0.75rem;
    .icon-back {
        width: 0.4rem;
        position: absolute;
        left: 0.3rem;
        top: 50%;
        transform: translateY(-50%);
    }
    .input {
        width: 100%;
        height: 0.6rem;
        border-radius: 0.3rem;
        background-color: #fafafa;
        float: left;
        margin-top: 0.14rem;
        position: relative;
        padding-left: 0.6rem;
        padding-right: 0.3rem;
        img {
            width: 0.3rem;
            height: 0.3rem;
            position: absolute;
            left: 0.2rem;
            top: 0.15rem;
        }
        input {
            display: block;
            width: 100%;
            height: 100%;
            font-size: 0.24rem;
            color: #252525;
        }
    }
}
.type-nav {
    position: absolute;
    top: 0.88rem;
    width: 100%;
    left: 0;
    height: 0.88rem;
    background-color: #fff;
    font-size: 0.28rem;
    color: #252525;
    line-height: 0.88rem;
    text-align: center;
    li {
        width: 50%;
        float: left;
        &.active {
            color: $mainColor;
        }
    }
}
.pro-nav {
    background-color: #fff;
    position: absolute;
    // top: 1.76rem;
    top:0;
    width: 100%;
    left: 0;
    height: 0.8rem;
    li {
        width: 33.33%;
        float: left;
        font-size: 0.28rem;
        color: #252525;
        text-align: center;
        line-height: 0.8rem;
         &.active {
            color: $mainColor;
         }
        &.sort {
            position: relative;
            &.active {
              &::after {
                    border-top: 0.08rem solid rgb(63,63,63);
                }
              &::before {
                border-bottom: 0.08rem solid $mainColor;
             }
           }
            &::after,
            &::before {
                content: '';
                display: block;
                width: 0;
                height: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(0.3rem,-50%);
                margin-top: -0.1rem;
                border-top: 0.06rem solid transparent;
                border-left: 0.06rem solid transparent;
                border-right: 0.06rem solid transparent;
                border-bottom: 0.08rem solid rgb(63,63,63);
            }
            &::after {
                margin-top: 0.1rem;
                border-bottom: 0.06rem solid transparent;
                border-top: 0.08rem solid rgb(63,63,63);
            }
            &.bottom {
                &::after {
                    border-top: 0.08rem solid $mainColor;
                }
                &::before {
                    border-bottom: 0.08rem solid rgb(63,63,63);
                }
            }
        }
    }
}
.shop-list {
    li {
        width: 6.9rem;
        height: 3.6rem;
        border-radius: 0.1rem;
        background-color: #fff;
        margin: 0.2rem auto;
        padding: 0.1rem 0.23rem;
        .head-box {
            height: 0.8rem;
            line-height: 0.8rem;
            position: relative;
            .head-img {
                width: 0.8rem;
                height: 0.8rem;

                border-radius: 50%;
                display: block;
                object-fit: cover;
                float: left;
            }
            p {
                font-size: 0.32rem;
                color: #252525;
                margin-left: 1.1rem;
                margin-right: 1.2rem;
                @include ellipsis(1);
            }
            button {
                position: absolute !important;
                top: 50%;
                right: 0;
                width: 1rem;
                height: 0.44rem;
                line-height: normal;
                transform: translateY(-50%);
                color: #fb5858;
                font-size: 0.28rem;
                @include border(1px ,solid,#fb5858,0.22rem);
            }
        }
        .img-list {
            margin-top: 0.3rem;
            img {
                width: 2.08rem;
                height: 2.08rem;
                float: left;
                display: block;

                margin-right: 0.1rem;
                &:nth-child(3n+3) {
                    margin-right: 0;
                }
            }
        }
    }
}
</style>

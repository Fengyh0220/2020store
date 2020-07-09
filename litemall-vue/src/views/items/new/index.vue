<template>
  <div class="goods_new">
    <div class="banner">
      <div class="title">商品预售</div>
    <div class="activity">
        距离活动结束还剩<span>00</span>:<span>00</span>:<span>00</span>
    </div>
    </div>
    <van-list v-model="loading"
              :finished="finished"
              :immediate-check="false"
              finished-text="没有更多了"
              @load="getNewtList">
      <van-card v-for="(item, i) in list"
                :key="i"
                :desc="item.brief"
                :title="item.name"
                :thumb="item.picUrl"
                :price="item.retailPrice"
                :origin-price="item.counterPrice"
                @click="itemClick(item.id)">
      </van-card>
    </van-list>

  </div>
</template>

<script>
import { goodsList } from '@/api/api';
import { Card, List } from 'vant';
import scrollFixed from '@/mixin/scroll-fixed';

export default {
  mixins: [scrollFixed],

  data() {
    return {
      list: [],
      page: 0,
      limit: 10,
      loading: false,
      finished: false
    };
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      this.page = 0;
      this.list = [];
      this.getNewtList();
    },
    getNewtList() {
      this.page++;
      goodsList({
        isNew: true,
        page: this.page,
        limit: this.limit
      }).then(res => {
        this.list.push(...res.data.data.list);
        this.loading = false;
        this.finished = res.data.data.page >= res.data.data.pages;
      });
    },
    itemClick(id) {
      this.$router.push(`/items/detail/${id}`);
    }
  },

  components: {

    [List.name]: List,
    [Card.name]: Card
  }
};
</script>

<style lang="scss" scoped>
.activity{
  text-align: center;
  font-size: 18px;
  height: 20px;
  line-height: 20px;
  font-weight: bold;
  span{
    width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 20px;
    font-size: 16px;
    display: inline-block;
    background: #ffffff;
  }
}
.goods_new {
  padding: 20px;
  .banner {
    height: 250px;
    background-image: url('http://yanxuan.nosdn.127.net/8976116db321744084774643a933c5ce.png');
    background-size: cover;
    margin-bottom: 20px;
    .title {
      text-align: center;
      line-height: 160px;
      color: #ffffff;
      font-size: 40px;
    }
  }
}
</style>
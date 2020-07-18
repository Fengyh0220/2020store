<template>

<van-panel>
  <van-card
  v-for="(item ,index) in goodslist"
  :key="index"
  :num="item.number"
  :price="(item.state != 0 ? (item.second_hand_price +'.00') : (item.price +'.00'))"
  :title="item.goodsName"
  :thumb="item.picUrl"
  :thumb-link="goDetail(item)"
>
  <template #bottom>
    <van-button  size="mini" @click="toOrderDetail(item.id)" v-if="item.orderState == 201 && item.state == 0">退款</van-button>
    <van-button v-if="item.state == 0" size="mini" :to="tobuy(item.id)" @click="btn(item)"> 一键转卖</van-button>
    <van-button v-if="item.state == 1" class="gray" size="mini"> 转卖中</van-button>
    <van-button v-if="item.state == 2" class="gray" size="mini"> 已卖出</van-button>  
  </template>
</van-card>
</van-panel>
</template>

<script>
import { getUserInfo ,selectByUserIdListVo} from '@/api/bank';
import {
  Card,
  Panel,
} from 'vant';
export default {
  data() {
    return {
      goodslist:[]
    };
  },
  created() {
    this.getuserData()
  },
  methods: {
    toOrderDetail(id) {
      this.$router.push({
        path: '/order/order-detail',
        query: { orderId: id }
      });
    },
   goDetail(item) {
      return `#/items/detail/${item.goodsId}/${item.sp_type}`;
    },
    tobuy(id) {
      return `/user/price/${id}`;
    },
    btn(item){
      localStorage.setItem('productImg', item.picUrl);
    },
    getuserData(){
      getUserInfo().then(res => {
      if(res.data.errno === 0){
        this.userData=res.data.data.userInfo;
        this.getData();
      }
      })
    },
    getData(){
      // let params = {
      //   userId:this.userData.id
      // }
      selectByUserIdListVo().then(res => {
      if(res.data.errno === 0){
         this.goodslist = res.data.data;
        }else{
          this.$toast({
            message: res.errmsg || '获取失败，请稍后再试',
            duration: 1500
          });
        }
     })
    }
   
  },
  components: {
    [Card.name]: Card,
    [Panel.name]:Panel,
  }
};
</script>


<style lang="scss" scoped>
.gray{
  background: #999999 !important;
  color: #fff;
}
.van-card__bottom{
    width: 100%;
    position: absolute;
    top:25px;
}
.van-button{
  width: 80px;
  height: 30px;
  text-align: center;
  background: red;
  color: #fff;
  border-radius: 15px;
  font-size: 16px;
  // position: absolute;
  // right: 0;
  top: 25px;
  float: right;
}
</style>

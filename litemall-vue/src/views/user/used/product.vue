<template>
<van-panel>
  <van-card v-for="(groupGood ,index) in goodslist"
  :key="index"
  :num="groupGood.number"
  :price="groupGood.secondHandPrice + '.00'"
  :title="groupGood.goodsName"
  :thumb="groupGood.picUrl"
  :thumb-link="goDetail(groupGood.id)"
  :origin-price="groupGood.price + '.00'"
>
  <template #bottom>
    <van-button size="mini" @click="submint(groupGood)">下架</van-button>
  </template>
</van-card>
 </van-panel>
</template>

<script>
import { selectByUserIdList , updateOrderGoodsState } from '@/api/used';
import { getUserInfo} from '@/api/bank';

import {
  Card,
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
    goDetail(id) {
      return `#/items/detail/${id}/0`;
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
      let params = {
        userId:this.userData.id,
        state:'1'
      }
      selectByUserIdList(params).then(res => {
      if(res.data.errno === 0){
         this.goodslist = res.data.data;
        }else{
          this.$toast({
            message: res.errmsg || '获取失败，请稍后再试',
            duration: 1500
          });
        }
     })
    },
    submint(item){
      let params = {
        id:item.id,
        state:'0',
        secondHandPrice:item.price,
      }
      updateOrderGoodsState(params).then(res => {
      if(res.data.errno === 0){
         this.$toast({
            message: '商品下架成功',
            duration: 1500
          });
          this.getData()
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
  }
};
</script>


<style lang="scss" scoped>
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
  position: absolute;
  right: 0;
  top:25px;
}
</style>

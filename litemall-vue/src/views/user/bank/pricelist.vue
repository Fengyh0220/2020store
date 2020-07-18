<template>
 <van-tabs v-model="active">
  <van-tab title="充值记录">
    <ul class="item">
      <li v-for="(item ,index) in addlist"
                 :key="index">
        <i>{{index+1}}</i>
        <span>
          <b>充值金额:</b>
           {{item.turn_price}}
        </span>
        <span>
          <b>时间:</b>
         {{item.create_time}}
        </span>
        <span>
          <b>审核状态:</b>
          {{item.turn_state == 0 ? '审核中' : item.turn_state == 1 ?'审核成功': '审核失败'}}
        </span>
      </li>
    </ul>
  </van-tab>
  <van-tab title="提现记录">
    <ul class="item"> 
      <li v-for="(item,index) in pricelist"
                 :key="index">
        <i>{{index+1}}</i>
        <span>
          <b>提现金额:</b>
           {{item.price}}
        </span>
        <span>
          <b>时间:</b>
          {{item.createtime}}
        </span>
        <span>
          <b>审核状态:</b>
          {{item.state == 0 ? '审核中' : item.state == 1 ?'审核成功': '审核失败'}}
        </span>
      </li>
    </ul>
  </van-tab>
</van-tabs>

</template>

<script>
import { selectByUserIdTurnRecord ,selectByUserIdWithdrawalRecord} from '@/api/bank';
import {
  Tab,
  Tabs
} from 'vant';
export default {
  data() {
    return {
        active:0,
        addlist:[],
        pricelist:[]
    };
  },
  created() {
    this.getData();
  },
  methods: {
   getData(){
     //充值
     selectByUserIdTurnRecord().then(res => {
         this.addlist = res.data.data;
         console.log(this.addlist)
     })
     .catch(() => {});
     //提现
     selectByUserIdWithdrawalRecord().then(res => {
       if(res.data.errno === 0){
          this.pricelist =res.data.data;
         console.log(this.pricelist)          
       }
     })
     .catch(() => {});
   }
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  }
};
</script>


<style lang="scss" scoped>
  .item{
    width: 100%;
    margin-top: 10px;
    background: #fff;
    padding: 0 10px;
    li{
      width: 100%;
      line-height: 40px;
      margin-bottom: 10px;
      padding-left: 20px;
      position: relative;
      border-bottom: 1px solid #999;
      &:last-child{
        border-bottom: none;
      }
      i{
        width: 15px;
        height: 15px;
        line-height: 15px;
        border-radius: 15px;
        text-align: center;
        background: red;
        display: inline-block;
        color: #fff;
        text-align: center;
        margin-right: 5px;
        position: absolute;
        left: 0;
        top: 12px;
      }
      span{
        margin-right: 20px;
        display: inline-block;
      }
    }
  }
</style>

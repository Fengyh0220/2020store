<template>
<van-form>
<van-swipe class="my-swipe" indicator-color="white" @change="onChange">
  <van-swipe-item v-for="(item, i) in cardlist" :key="i">
    <p>{{item.bank_name}}</p>
    <p>{{item.id_number}}</p>
    <p>{{item.bank_deposit}}</p>
  </van-swipe-item>
</van-swipe>
<van-cell-group>
  <van-field v-model="name" label="持卡人姓名" placeholder="请输入持卡人姓名" />
</van-cell-group>
<van-cell-group>
  <van-field v-model="price" label="转账金额" placeholder="请输入转账金额" />
</van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="info" @click="submit">
      确认提交
    </van-button>
  </div>
</van-form>
</template>

<script>
import { selectBankList , addTurnRecord } from '@/api/bank';
import {
  Form,
  Field,
  Swipe, 
  SwipeItem
} from 'vant';
export default {
  data() {
    return {
        price:'',
        name:'',
        cardlist:[],
        active:0
    };
  },
  created() {
    this.getdData();
  },
  methods: {
    onChange(index) {
      this.active = index;
    },
   getdData(){
     selectBankList({state:'1'}).then(res => {
        this.cardlist = res.data.data.bankList;
     })
   },
   submit(){
     let item =this.cardlist[this.active]
     let params = {
       turn_name:this.name,
       turn_price:this.price,
       turn_account:item.id_number,
       turn_account_id:item.id,
       turn_state:'0'
     }
     addTurnRecord(params).then(res => {
      if(res.data.errno === 0){
          this.$toast({
            message: '提交成功',
            duration: 1500
          });
        }else{
          this.$toast({
            message: res.errmsg || '提交失败，请稍后再试',
            duration: 1500
          });
        }
     })
   }
  },
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
};
</script>


<style lang="scss" scoped>
.my-swipe{
    margin-top: 20px;
}
.my-swipe .van-swipe-item {
    width: 45% !important;
    color: #fff;
    font-size: 20px;
    height: 200px;
    text-align: center;
    background-color: #39a9ed;
    margin:0 auto;
    border-radius: 15px;
    padding: 20px 20px;
  }
.bankcard{
    width: 85%;
    margin: 40px auto 0;
    line-height: 30px;
    font-size: 16px;
    span{
        font-weight: bold;
        float: left;
    }
    p{
        margin-left: 60px;
    }
}
.van-cell{
  border-bottom:1px solid #ebebeb;
  padding: 0;
  font-size: 16px;
  text-align: left;
}

.van-field__control{
  text-align: right;
  display: inline-block
}

.van-cell-group{
  width: 320px;
  margin: 20px auto;
}
.van-cell{
  padding: 0;
  height: 30px;
  line-height: 30px;
}
.van-cell__value{
  text-align: right;
}
.van-field{
  background: #f2f2f2;
}
</style>

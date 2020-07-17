<template>
<van-form>
<van-cell-group>
  <van-field v-model="full_name" label="持卡人姓名" placeholder="请输入持卡人姓名" />
</van-cell-group>
<van-cell-group>
  <van-field v-model="bank_name" label="银行名称" placeholder="请输入银行名称" />
</van-cell-group>
<van-cell-group>
  <van-field v-model="bank_card" label="银行卡号" placeholder="请输入银行卡号" />
</van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="info" @click="submit">
      确认添加
    </van-button>
  </div>
</van-form>
</template>

<script>
import { updateBankInfo } from '@/api/bank';
import {
  Form,
  Field
} from 'vant';
export default {
  data() {
    return {
        full_name:'',
        bank_name:'',
        bank_card:''
    };
  },
  created() {
  },
  methods: {
   submit(){
     let params = {
       full_name:this.full_name,
       bank_name:this.bank_name,
       bank_card:this.bank_card,
     }
     updateBankInfo(params).then(res => {
      if(res.data.errno === 0){
          this.$toast({
            message: '添加成功',
            duration: 1500
          });
          this.$router.go(-1);
        }else{
          this.$toast({
            message: res.errmsg || '添加失败，请稍后再试',
            duration: 1500
          });
        }
     })
   }
  },
  components: {
    [Form.name]: Form,
    [Field.name]: Field
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

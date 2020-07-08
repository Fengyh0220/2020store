<template>
<van-form>
<!-- <div class="bankcard">
    <span>银行卡号</span>
    <p>3002***********33633</p>
</div> -->
<van-swipe class="my-swipe" indicator-color="white">
  <van-swipe-item>3002***********33633</van-swipe-item>
  <van-swipe-item>3002***********33633</van-swipe-item>
</van-swipe>
<van-cell-group>
  <van-field v-model="name" label="持卡人姓名" placeholder="请输入持卡人姓名" />
</van-cell-group>
<van-cell-group>
  <van-field v-model="price" label="转账金额" placeholder="请输入转账金额" />
</van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      确认提交
    </van-button>
  </div>
</van-form>
</template>

<script>
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
        name:''
    };
  },
  created() {
  },
  methods: {
   
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
    width: 40% !important;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    margin:0 auto;
    border-radius: 15px;
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

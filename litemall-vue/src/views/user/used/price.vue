<template>
<van-form>
<div>
   <img v-lazy="productImg" class="product-img"/>
   <b class="icon">确认宝贝价格发布</b>
</div>
<van-cell-group>
  <van-field v-model="price" label="价格" placeholder="请输入转卖价格" />
</van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="info" @click="submit">
      确认发布
    </van-button>
  </div>
</van-form>
</template>

<script>
import { updateOrderGoodsState } from '@/api/used';
import {
  Form,
  Field,
} from 'vant';
export default {
  props: {
    itemId: [String, Number]
  },

  data() {
    return {
        price:'',
        productImg:''
    };
  },
  created() {
    this.productImg = localStorage.getItem('productImg')
  },
  methods: {
   submit(){
     console.log(this.itemId);
     let params = {
        id:this.itemId,
        state:'1',
        second_hand_price:this.price,
      }
      updateOrderGoodsState(params).then(res => {
      if(res.data.errno === 0){
         this.$toast({
            message: '转卖商品上架成功',
            duration: 1500
          });
          this.$router.go(-1);
        }else{
          this.$toast({
            message: res.errmsg || '失败，请稍后再试',
            duration: 1500
          });
        }
     })
    }
  },
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
  }
};
</script>


<style lang="scss" scoped>
.van-cell{
  border-bottom:1px solid #333333;
  padding: 0;
  font-size: 18px;
  text-align: center;
}
.van-field__label{
  font-size: 18px;
  text-align: center;
  font-weight: bold !important; 
}
.product-img{
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin: 50px auto 0;
  display: block;
}
.icon{
  width: 100%;
  text-align: center;
  font-size: 18px;
  display: block;
  margin-top: 20px;
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

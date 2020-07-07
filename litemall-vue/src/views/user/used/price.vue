<template>
<van-form @submit="onSubmit">
<van-panel>
   <img src="http://testavatar.xingqiuxiuchang.cn/e208b75e-5228-4095-89a9-647e80aa708a.jpg" class="product-img"/>
   <b class="icon">确认宝贝价格发布</b>
</van-panel>
<van-cell-group>
  <van-field v-model="price" label="价格" placeholder="" />
</van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      确认发布
    </van-button>
  </div>
</van-form>
</template>

<script>
import {
  Form,
  Field,
} from 'vant';
export default {
  data() {
    return {
        price:0
    };
  },
  created() {
  },
  methods: {
   
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
}
.van-cell-group{
  width: 320px;
  margin: 20px auto;
}
.van-field{
  background: #f2f2f2;
}
</style>

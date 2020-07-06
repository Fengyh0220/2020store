<template>
  <van-card
  num="2"
  price="2.00"
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
>
  <template #bottom>
    <van-button size="mini">下架</van-button>
  </template>
</van-card>
</template>

<script>
import {
  Card,
} from 'vant';
export default {
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
   
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

<template>
<van-form @submit="onSubmit">
<!-- 
  <van-field
    v-model="price"
    name="价格"
    placeholder="函数校验"
    :rules="[{ validator, message: '请输入正确内容' }]"
  /> -->
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
  }
};
</script>


<style lang="scss" scoped>


</style>

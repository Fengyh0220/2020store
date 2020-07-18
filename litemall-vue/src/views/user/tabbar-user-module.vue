<template>
  <div class="user_module">
    <van-cell-group>
      <van-cell icon="service" title="我的商品" to="/user/used" isLink/>
      <van-cell icon="gold-coin-o" title="我的二手" to="/user/product" isLink/>
      <!-- <van-cell icon="shoucang" title="我的收藏" to="/user/collect" isLink/> -->
      <van-cell icon="dingwei" title="收货地址" to="/user/address" isLink/>
      <van-cell icon="balance-o" title="财务记录" to="/user/bank/pricelist" isLink/>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'user-module'
};
</script>


<style scoped lang="scss">
.user_module {
  background-color: #fff;
}
</style>

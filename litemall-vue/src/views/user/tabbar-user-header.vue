<template>
  <div class="user_header" :style="{backgroundImage: `url(${background_image})`}">
    <van-icon name="set" class="user_set" @click="toSetting"/>
    <div class="user_avatar">
      <img v-lazy="userData.avatar" alt="头像" width="55" height="55">
      <div>{{userData.username}}</div>
    </div>
    <div class="right">
      <p>我的余额：￥{{userData.balance}}</p>
       <router-link class="btn"  to="/user/bank">充值</router-link>
       <router-link class="btn"  to="/user/bank/money">提现</router-link>
    </div>
  </div>
</template>

<script>
import avatar_default from '@/assets/images/avatar_default.png';
import bg_default from '@/assets/images/user_head_bg.png';
import { getLocalStorage } from '@/utils/local-storage';
import { getUserInfo} from '@/api/bank';

export default {
  name: 'user-header',

  props: {
    isLogin: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      nickName: '昵称',
      avatar: avatar_default,
      background_image: bg_default,
      userData:{}
    };
  },

  activated() {
    // this.getUserInfo();
    this.getuserData();
  },

  methods: {
    getuserData(){
      getUserInfo().then(res => {
      if(res.data.errno === 0){
        this.userData=res.data.data.userInfo;
        if(this.userData.bank_card == ''){
          localStorage.setItem('bank_card_status','');
        }else{
          localStorage.setItem('bank_card_status',this.userData.bank_card);
        }
      }
      })
    },
    // getUserInfo() {
    //   const infoData = getLocalStorage(
    //     'nickName',
    //     'avatar'
    //   );
    //   this.avatar = infoData.avatar || avatar_default;
    //   this.nickName = infoData.nickName || '昵称';
    // },
    toSetting() {
      this.$router.push({ name: 'user-information' });
    }
  }
};
</script>

<style lang="scss" scoped>
.user_header {
  background-repeat: no-repeat;
  background-size: cover;
  height: 130px;
  text-align: center;
  color: #fff;
  padding-top: 30px;
}

.user_set {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
}
.user_avatar {
  margin-bottom: 10px;
  width: 50%;
  float: left;
  img {
    border: 0;
    border-radius: 50%;
  }
}
.right{
  float: left;
  .btn{
    width: 40%;
    height: 20px;
    line-height: 20px;
    background: #fff;
    display: inline-block;
    border-radius: 20px;
    color: red;
    text-align: center;
    margin-right: 5px;
  }
}
</style>

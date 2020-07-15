<template>
  <div class="item_detail"> 
      <!-- <a href="https://uapi.pop800.com/web800/c.do?l=cn&type=0&n=832081&w=0&c=00dde6f8f9880c86" target="_blank"></a> -->
    <div class="top-div">
      <van-swipe :autoplay="3000" indicator-color="white" v-for="(banner, index) in bannerlist"
                      :key="index">
            <van-swipe-item>
                <img v-lazy="banner.url" style="height:250px">
            </van-swipe-item>
    </van-swipe>
   <van-notice-bar  :scrollable="false" >
     <!-- left-icon="chat" -->
  <van-swipe
    vertical
    class="notice-swipe"
    :autoplay="3000"
    :show-indicators="false"
  >
    <van-swipe-item v-for="(item, i) in NoticeList"
                      :key="i">
        <img v-lazy="item.user_head_img" v-if="item.user_head_img"/>
    {{item.nick_name}}:{{item.content}}</van-swipe-item>
  </van-swipe>
</van-notice-bar>
<!-- <ul class="pro-nav">
        <li v-for="(item,i) in typeList[0].sortList" :key="i" :class="{'active':typeList[0].index == i,'sort':item.sort != undefined,'bottom':item.sort == 1&&typeList[0].index == i}" @click="toggleIndex(i)">{{item.info}}</li>
      </ul> -->
    </div>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
        <van-row> 
           <van-col span="11"  v-for="(itemgoods,i) in goodslist" :key="i" >
              <router-link :to="{ path: `/items/detail/${itemgoods.id}/0`}">
                <img v-lazy="itemgoods.picUrl" style="height:180px"/>
              <div  class="info-box">
                      <p  class="name">{{itemgoods.goodsName}}</p>
                      <div  class="other-box">
                          <p  class="sale-price">
                              ¥{{itemgoods.secondHandPrice}}
                              <s >￥{{itemgoods.price}}</s>
                            </p>
                          <div class="sale-nums">
                              <img v-lazy="itemgoods.userHeadImg">
                              <span>{{itemgoods.userId}}</span>
                              </div>
                     </div>
                </div>
              </router-link>
           </van-col>
        </van-row>
        </van-list>
    </van-pull-refresh>
    <!-- 弹窗 -->
<van-overlay :show="show" @click="show = false">
  <div class="wrapper" @click.stop>
    <van-form>
<van-cell-group>
  <van-field v-model="message" label="发布公告" placeholder="请输入您要发布的公告消息" maxlength="15"/>
</van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="info" @click.native="onsubmit">
      发布
    </van-button>
  </div>
</van-form>
  </div>
</van-overlay>
<div class="addmessage" @click="show = true">
  发布<br/>公告
</div>
 </div>
</template>

<script>
import { getUserInfo } from '@/api/bank';
import { selectByStateList, querySecondBanner, selectNoticeList,addNoticeUrl } from '@/api/used';
import scrollFixed from '@/mixin/scroll-fixed';
import avatar_default from '@/assets/images/avatar_default.png';

import {
  List,
  Swipe,
  SwipeItem,
  DropdownMenu,
  DropdownItem,
  PullRefresh,
   NoticeBar ,
   Toast,
   Overlay,
   Form,
  Field,
  Row,
  Col,
} from 'vant';

export default {
  mixins: [scrollFixed],

  data() {
    return {
      shopInfos: [],
      isLoading: false,
      list: [],
      bannerlist:[],
      NoticeList:[],
      goodslist:[],
      loading: false,
      finished: false,
      refreshing: false,
      show: false,
      message:'',
      nickName: '',
      avatar: avatar_default,
      adddata: {
        user_id:'',
        content:'',
      },
      userData:{}
      // typeList: [{
      //   index: 0,
      //   sortList: [{
      //     name: 'SYNTHETICAL',
      //     info: '综合'
      //   },{
      //     name: 'PRICE',
      //     sort: 0,
      //     info: '价格'
      //   }]
      // }],
    };
  },

  created() {
    this.goodsData();
    this.selectNoticedata();
    this.getuserData();
  },

  methods: {
    getuserData(){
      getUserInfo().then(res => {
      if(res.data.errno === 0){
        this.userData=res.data.data.userInfo;
      }
      })
    },
    goodsData(){
      selectByStateList({state:'1'}).then(res => {
        this.goodslist = res.data.data;
      })
      querySecondBanner().then(data => {
         this.bannerlist = data.data.data;
      })
    },
    selectNoticedata(){
       selectNoticeList().then(res => {
         this.NoticeList = res.data.data;
      })
    },
    onsubmit(){
      let params = {
        user_id:this.userData.id,
        content:this.message,
      };
      addNoticeUrl(params).then(res => {
        if(res.data.errno == 0){
          this.NoticeList = res.data.data;
          this.show = false;
        }
      }).catch (() => {});
    },

   toggleIndex(val) {
      let item = this.typeList[0];
      let cb = ()=>{
        // this.proLoadMore.pageNum = 1;
        // if(this.proLoadMore.loading)return;
        // this.proLoadMore.loading = true;
        // this.$utils.promiseLoading([this['getProList']]);
      };
      if (val != item['index']) {
        item['index'] = val;
        cb();
      } else if (val == item['index'] && item['sortList'][item.index].sort != undefined) {
        item['sortList'][item.index].sort = item['sortList'][item.index].sort == 1 ? 0 : 1;
        cb();
      }
    },
     onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },

  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Overlay.name]: Overlay,
    [Toast.name]: Toast,
    [PullRefresh.name]: PullRefresh,
    [List.name]: List,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [DropdownMenu.name]: DropdownMenu, 
    [DropdownItem.name]: DropdownItem,
    [NoticeBar.name]:  NoticeBar,
    [Form.name]: Form,
    [Field.name]: Field,
  }
};
</script>


<style lang="scss" scoped>
.van-swipe-item{
    color: #252525
}
.van-notice-bar .van-swipe-item img{
    width: 20px;
    height: 20px;
    border-radius: 20px;
    float: left;
    margin: 10px 5px 10px 0; 
}
// .van-notice-bar{
//  border-top: 1px solid #f2f2f2;
//  border-bottom: px solid #f2f2f2;
// }
.notice-swipe {
    height: 40px;
    line-height: 40px;
  }
.top-div{
    width: 100%;
    background: #fff;
    // position: fixed;
    // z-index: 9;
}

// .van-list{
//     // padding-top: 260px;
// }
.pro-nav {
    background-color: #fff;
    position: absolute;
    // top: 220px;
    top: 0;
    width: 100%;
    left: 0;
    height: 30px;
}
.pro-nav li {
        width: 50%;
        float: left;
        font-size:14px;
        color: #252525;
        text-align: center;
        line-height:30px;
    }
.pro-nav li.active {
color: red;
}
.pro-nav li.sort {
position: relative;
}
.pro-nav li.sort.active::after {
    border-top: 5px solid rgb(63,63,63);
}
.pro-nav li.sort.active::before {
border-bottom: 5px solid red;
}
.pro-nav li.sort::after,
.pro-nav li.sort::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(26px,-50%);
    margin-top: -7px;
    border-top: 5px solid transparent;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-bottom: 5px solid rgb(63,63,63);
}
.pro-nav li.sort::after {
    margin-top: 5px;
    border-bottom: 4px solid transparent;
    border-top: 5px solid rgb(63,63,63);
}
 .pro-nav li.sort.bottom::after {
    border-top:5px solid red;
}
.pro-nav li.sort.bottom::before {
    border-bottom: 5px solid rgb(63,63,63);
}
//商品列表
.product{
    width: 100%;
    margin-top: 55px;
}
.commodity-box{
    width: 190px;
    float: left;
    // margin-bottom: 20px;
    background: #fff;
    overflow: hidden;
    margin: 0 5px 10px;
    border-radius: 10px
}
.commodity-box:nth-child(2n+1) {
    clear: both;
}
.main-pic {
    height: 190px;
    width: 190px;
    position: relative;
}
img{
    width: 100%;
    height: 100%;
}

.van-col{
  background: #fff;
  border-radius: 5px;
  margin: 10px 7px 0;
  img{
    width: 100%;
    height: 100%;
  }
}
.van-row{
  padding: 0 8px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
}
.info-box{
  width: 100%;
  height: auto;
  position: relative;
  padding: 0 5px;
  margin: 0 auto
}
.name{
    font-size: 14px;
    padding-top: 5px;
    color: #252525;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-break: break-all;
    margin: 0
}
.other-box{
    padding: 0;
    position: initial;
        width: 100%;
    bottom: 0;
    left: 0;
}
.sale-price{
    font-size: 14px;
    color: #E61E3C;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    margin: 0
}
.sale-price s{
    font-size: 14px;
    color: #686868;
    display: inline;
}
.sale-nums{
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    color: #666;
    margin-bottom: 10px;
}
.sale-nums img{
    width: 20px;
    height: 20px;
    border-radius: 20px;
    float: left;
    margin: 5px 5px 5px 0;
}
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    // height: 100%;
    margin-top: 50%;
  }
// .van-overlay{
//   z-index:9!important;
// }
.van-form{
  width: 90%;
  height: 200px;
  background: #fff;
  border-radius: 10px;
  padding: 40px 10px;
}
  .van-cell{
  // border-bottom:1px solid #333333;
  width: 100%;
  height: 55px;
  line-height: 55px;
  padding: 0 10px;
  background: #ebebeb;
  border-radius: 30px;
  font-size: 16px;
  text-align: center;

}
.van-field__label{
  font-size: 18px;
  text-align: center;
  font-weight: bold !important; 
}

.van-field__control{
  text-align: right;
  display: inline-block
}

// .van-cell-group{
//   width: 320px;
//   margin: 20px auto;
// }
.van-field{
  background: #f2f2f2;
}
.addmessage{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: red;
  color: #fff;
  padding: 15px;
  line-height: 15px;
  text-align: center;
  position: fixed;
  right: 5px;
  bottom: 60px;
}
.van-button{
  width: 120px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  font-size: 16px;
}
</style>

const tab_user = () => import('@/views/user/tabbar-user');
const UserCollect = () => import('@/views/user/module-collect');
const UserAddress = () => import('@/views/user/module-address');
const UserAddressEdit = () => import('@/views/user/module-address-edit');
const UserServer = () => import('@/views/user/module-server');
const UserHelp = () => import('@/views/user/module-help');
const UserFeedback = () => import('@/views/user/module-feedback');

const UserInformation = () => import('@/views/user/user-information-set');
const UserInfo_SetMobile = () => import('@/views/user/user-information-set/set-mobile');
const UserInfo_SetNickname = () => import('@/views/user/user-information-set/set-nickname');
const UserInfo_SetPassword = () => import('@/views/user/user-information-set/set-password');

const UserOrderList = () => import('@/views/user/order-list');
const UserCouponList = () => import('@/views/user/coupon-list');
const UserRefundList = () => import('@/views/user/refund-list');

const Userused = () => import('@/views/user/used/index');
const Userprice = () => import('@/views/user/used/price');
const Userproduct = () => import('@/views/user/used/product');

const Userbank = () => import('@/views/user/bank/index');
const Userbankmoney = () => import('@/views/user/bank/money');
const Userbankadd = () => import('@/views/user/bank/add');
const Userbankpricelist = () => import('@/views/user/bank/pricelist');

const Tabbar = () => import('@/components/Tabbar/');

export default [
  {
    path: '/user',
    name: 'user',
    meta: {
      keepAlive: true,
      login: true,
      showHeader:false
    },
    components: { default: tab_user, tabbar: Tabbar }
  },
  {
    path: '/user/collect',
    name: 'collect',
    meta: {
      login: true
    },
    component: UserCollect
  },
  {
    path: '/user/address',
    name: 'address',
    meta: {
      login: true
    },
    component: UserAddress
  },
  {
    path: '/user/address/edit',
    name: 'address-edit',
    props: true,
    meta: {
      login: true,
      showHeader:false
    },
    component: UserAddressEdit
  },
  {
    path: '/user/bank',
    name: 'user-bank',
    component: Userbank
  },
  {
    path: '/user/bank/money',
    name: 'user-bank',
    component: Userbankmoney
  },
  {
    path: '/user/bank/add',
    name: 'user-bank',
    component: Userbankadd
  },
  {
    path: '/user/bank/pricelist',
    name: 'user-bank-pricelist',
    meta: {
      login: true
    },
    component: Userbankpricelist
  },
  {
    path: '/user/used',
    props: true,
    meta: {
      login: true,
    },
    name: 'user-used',
    component: Userused
  },
  {
    path: '/user/price/:itemId',
    name: 'user-price',
    props: true,
    component: Userprice
  },
  {
    path: '/user/product',
    name: 'user-product',
    component: Userproduct
  },
  {
    path: '/user/server',
    name: 'user-server',
    component: UserServer
  },
  {
    path: '/user/help',
    name: 'user-help',
    component: UserHelp
  },
  {
    path: '/user/feedback',
    name: 'user-feedback',
    component: UserFeedback
  },  
  {
    path: '/user/information',
    name: 'user-information',
    meta: {
      login: true
    },
    component: UserInformation
  },
  {
    path: '/user/information/setMobile',
    name: 'user-info-setMobile',
    component: UserInfo_SetMobile
  },
  {
    path: '/user/information/setNickname',
    name: 'user-info-setNickname',
    component: UserInfo_SetNickname
  },
  {
    path: '/user/information/setPassword',
    name: 'user-info-setPassword',
    component: UserInfo_SetPassword
  },
  {
    path: '/user/order/list',
    name: 'user-order-list',
    meta: {
      title:"我的订单",
    },
    props: true,
    component: UserOrderList
  },
  {
    path: '/user/coupon/list/:active',
    name: 'user-coupon-list',
    props: true,
    component: UserCouponList
  },
  {
    path: '/user/refund/list',
    name: 'user-refund-list',
    component: UserRefundList
  }
];

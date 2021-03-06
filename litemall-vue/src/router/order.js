const Tabbar = () => import('@/components/Tabbar/');

export default [
  {
    path: '/order',
    name: 'cart',
    meta: {
      login: true,
      showHeader:false,
    },
    components: { 
      default: () => import('@/views/order/tabbar-cart'), 
      tabbar: Tabbar 
    }
  },
  {
    path: '/order/checkout/:activityid',
    name: 'orderCheckout',
    component: () => import('@/views/order/checkout'),
    props: true
  },
  {
    path: '/order/order-detail',
    name: 'orderDetail',
    component: () => import('@/views/order/order-detail')
  },
  {
    path: '/order/payment',
    name: 'payment',
    component: () => import('@/views/order/payment')
  },
  {
    path: '/order/payment/:status',
    name: 'paymentStatus',
    component: () => import('@/views/order/payment-status'),
    props: true
  }
];

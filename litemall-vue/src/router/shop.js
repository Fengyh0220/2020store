const shop = () => import('@/views/shop/index');
const Tabbar = () => import('@/components/Tabbar/');

export default [
  {
    path: '/shop',
    name: 'shop',
    meta: {
      // keepAlive: true,
      login: true,
      showHeader:false,
    //   title:"二手市场"
    },
    components: { default: shop, tabbar: Tabbar }
  }
];

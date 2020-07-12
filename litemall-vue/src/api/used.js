import request from '@/utils/request'

//发布公告
export function addNoticeUrl(data) {
  return request({
    url: 'wx/user/addNotice',
    method: 'post',
    data
  })
}
//商品列表
export function selectByStateList(data) {
  return request({
    url: 'wx/second/selectByStateList',
    method: 'post',
    data
  })
}
 //广告图
export function querySecondBanner() {
  return request({
    url: 'wx/second/querySecondBanner',
    method: 'post'
  })
}
 //公告列表
export function selectNoticeList() {
  return request({
    url: 'wx/user/selectNoticeList',
    method: 'post'
  })
}
// 二手商品列表
export function selectByUserIdList(data) {
    return request({
      url: 'wx/second/selectByUserIdList',
      method: 'post',
      data
    })
  }
  //二手商品下架
  export function updateOrderGoodsState(data) {
    return request({
      url: 'wx/second/updateOrderGoodsState',
      method: 'post',
      data
    })
  }
//二手商品详情
export function selectByIdOrderGoods(data) {
    return request({
      url: 'wx/second/selectByIdOrderGoods',
      method: 'post',
      data
    })
  }
export const REFUND_LIST = '';

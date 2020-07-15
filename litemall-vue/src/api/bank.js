import request from '@/utils/request'

//用户信息
export function getUserInfo() {
  return request({
    url: 'wx/auth/getUserInfo',
    method: 'post'
  })
}
//银行卡信息
export function selectBankList(data) {
  return request({
    url: 'wx/user/selectBankList',
    method: 'post',
    data
  })
}
//提交转账
export function addTurnRecord(data) {
    return request({
      url: 'wx/user/addTurnRecord',
      method: 'post',
      data
    })
}
// 我的商品列表
export function selectByUserIdListVo() {
  return request({
    url: 'wx/second/selectByUserIdListVo',
    method: 'post'
  })
}
// 二手商品
export function selectByUserIdList(data) {
  return request({
    url: 'wx/second/selectByUserIdList',
    method: 'post',
    data
  })
}
// 余额支付
export function balancePay(data) {
  return request({
    url: 'wx/order/balancePay',
    method: 'post',
    data
  })
}
export const REFUND_LIST = '';

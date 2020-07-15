import request from '@/utils/request'
// 抢购失败
export function orderGrabbingCancel(data) {
  return request({
    url: '/order/orderGrabbingCancel',
    method: 'post',
    data
  })
}
// 抢购成功
export function orderGrabbingSuccess(data) {
  return request({
    url: '/order/orderGrabbingSuccess',
    method: 'post',
    data
  })
}

export function listRecord() {
  return request({
    url: '/groupon/listRecord',
    method: 'get'
  })
}

export function listGroupon() {
  return request({
    url: '/turn/selectTurnRecordList',
    method: 'get'
  })
}
// 后台财务管理转账更新状态
export function updateTurnRecord(data) {
  return request({
    url: '/turn/updateTurnRecord',
    method: 'post',
    data
  })
}
export function listBank() {
  return request({
    url: '/bank/selectBankList',
    method: 'get'
  })
}
export function deleteGroupon(data) {
  return request({
    url: '/bank/deleteBank',
    method: 'post',
    data
  })
}

export function publishGroupon(data) {
  return request({
    url: '/bank/addBank',
    method: 'post',
    data
  })
}

export function editGroupon(data) {
  return request({
    url: '/bank/updateBank',
    method: 'post',
    data
  })
}


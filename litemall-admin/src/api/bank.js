import request from '@/utils/request'

export function listRecord(query) {
  return request({
    url: '/groupon/listRecord',
    method: 'get',
    params: query
  })
}

export function listGroupon(query) {
  return request({
    url: '/turn/selectTurnRecordList',
    method: 'get',
    params: query
  })
}
// 后台财务管理转账更新状态
export function updateTurnRecord(query) {
  return request({
    url: '/turn/updateTurnRecord',
    method: 'post',
    params: query
  })
}
export function listBank(query) {
  return request({
    url: '/bank/selectBankList',
    method: 'get',
    params: query
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

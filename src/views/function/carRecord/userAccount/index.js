import request from '@/plugin/axios'

export function getAllUserAccountInfo () {
  return request({
    url: '/UserAccount/getAllUserAccountInfo',
    method: 'post'
  })
}

export function UserAccountInvest (params) {
  return request({
    url: '/UserAccount/userAccountInvest',
    method: 'get',
    params: params
  })
}

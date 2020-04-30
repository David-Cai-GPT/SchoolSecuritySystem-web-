import request from '@/plugin/axios'

export function getAllEntranceGuardInfo () {
  return request({
    url: '/EntranceGuard/allEntranceGuardInfo',
    method: 'post'
  })
}

export function getAllEntranceGuardUserInfo (params) {
  return request({
    url: '/EntranceGuard/singleEntranceGuardInfo',
    method: 'get',
    params: params
  })
}

export function addEntranceGuardUser (params) {
  return request({
    url: '/EntranceGuard/addEntranceGuardPeople',
    method: 'post',
    data: params
  })
}

export function deleteEntranceGuardUser (params) {
  return request({
    url: '/EntranceGuard/deleteEntranceGuardPeople',
    method: 'get',
    params: params
  })
}

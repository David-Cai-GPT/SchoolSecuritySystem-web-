import request from '@/plugin/axios'

export function addNewEntranceGuardInfo (params) {
  return request({
    url: '/EntranceGuard/addNewEntranceGuardInfo',
    method: 'post',
    data: params
  })
}

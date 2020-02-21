import request from '@/plugin/axios'

export function getAllUserInformation () {
  return request({
    url: '/User/getAllInformation',
    method: 'post'
  })
}

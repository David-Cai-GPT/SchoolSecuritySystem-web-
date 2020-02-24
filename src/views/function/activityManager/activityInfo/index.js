import request from '@/plugin/axios'

export function getAllActivityInfo () {
  return request({
    url: '/Activity/allActivityInfo',
    method: 'post'
  })
}

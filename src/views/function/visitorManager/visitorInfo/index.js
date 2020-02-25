import request from '@/plugin/axios'

export function getAllVisitorInfo () {
  return request({
    url: '/Visitor/allVisitorInfo',
    method: 'post'
  })
}

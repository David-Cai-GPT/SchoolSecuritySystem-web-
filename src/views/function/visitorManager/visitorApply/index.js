import request from '@/plugin/axios'

export function VisitorApply (data) {
  return request({
    url: '/Visitor/visitorApply',
    method: 'post',
    data: data
  })
}

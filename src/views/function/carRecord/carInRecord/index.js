import request from '@/plugin/axios'

export function CarRecord (data) {
  return request({
    url: '/Car/carRecord',
    method: 'post',
    data: data
  })
}

import request from '@/plugin/axios'

export function addNewStudent (params) {
  return request({
    url: '/Student/addNewStudent',
    method: 'post',
    data: params
  })
}

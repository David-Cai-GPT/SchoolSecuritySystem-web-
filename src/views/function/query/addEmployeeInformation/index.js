import request from '@/plugin/axios'

export function addNewEmployee (params) {
  return request({
    url: '/Employee/addNewEmployee',
    method: 'post',
    data: params
  })
}

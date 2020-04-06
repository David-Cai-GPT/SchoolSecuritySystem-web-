import request from '@/plugin/axios'

export function getAllEmployeeInformation () {
  return request({
    url: '/Employee/getAllEmployeeInfo',
    method: 'post'
  })
}

export function editEmployeeInformation (params) {
  return request({
    url: '/Employee/editEmployeeInfo',
    method: 'post',
    data: params
  })
}

import request from '@/plugin/axios'

export function getAllEmployeeInformation () {
  return request({
    url: '/Employee/getAllEmployeeInfo',
    method: 'post'
  })
}

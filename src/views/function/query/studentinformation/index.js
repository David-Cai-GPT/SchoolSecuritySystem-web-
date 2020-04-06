import request from '@/plugin/axios'

export function getAllStudentInformation () {
  return request({
    url: '/Student/getAllStudentInfo',
    method: 'post'
  })
}

export function editStudentInformation (params) {
  return request({
    url: '/Student/editStudentInfo',
    method: 'post',
    data: params
  })
}

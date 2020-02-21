import request from '@/plugin/axios'

export function getAllStudentInformation () {
  return request({
    url: '/Student/getAllStudentInfo',
    method: 'post'
  })
}

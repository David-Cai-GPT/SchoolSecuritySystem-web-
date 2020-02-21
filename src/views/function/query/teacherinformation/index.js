import request from '@/plugin/axios'

export function getAllTeacherInformation () {
  return request({
    url: '/Teacher/getAllTeacherInfo',
    method: 'post'
  })
}

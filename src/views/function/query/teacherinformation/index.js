import request from '@/plugin/axios'

export function getAllTeacherInformation () {
  return request({
    url: '/Teacher/getAllTeacherInfo',
    method: 'post'
  })
}

export function editTeacherInformation (params) {
  return request({
    url: '/Teacher/editTeacherInfo',
    method: 'post',
    data: params
  })
}

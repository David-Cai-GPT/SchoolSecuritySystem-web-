import request from '@/plugin/axios'

export function addNewTeacher (params) {
  return request({
    url: '/Teacher/addNewTeacher',
    method: 'post',
    data: params
  })
}

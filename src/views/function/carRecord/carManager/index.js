import request from '@/plugin/axios'

export function getAllCaryInfo () {
  return request({
    url: '/Car/allCarInfo',
    method: 'post'
  })
}

export function carOut (data) {
  return request({
    url: '/Car/carOutRecord',
    method: 'post',
    data: data
  })
}

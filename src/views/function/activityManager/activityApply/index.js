import request from '@/plugin/axios'

export function ActivityApply (data) {
  return request({
    url: '/Activity/activityApply',
    method: 'post',
    data: data
  })
}

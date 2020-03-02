import request from '@/plugin/axios'

export function GetEquipmentInfo (data) {
  return request({
    url: '/Equipment/getAllEquipmentInfo',
    method: 'post',
    data: data
  })
}

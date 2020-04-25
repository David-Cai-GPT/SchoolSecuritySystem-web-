import request from '@/plugin/axios'

export function AddNewInvestUser (params) {
  return request({
    url: '/UserAccount/addNewAccountUser',
    method: 'post',
    data: params
  })
}

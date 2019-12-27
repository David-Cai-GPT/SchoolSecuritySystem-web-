import page from './page'
import request from '@/plugin/axios'

export function register (data) {
  return request({
    url: 'http://10.12.65.120:8080/User/register',
    method: 'post',
    data: data
  })
}
export default page

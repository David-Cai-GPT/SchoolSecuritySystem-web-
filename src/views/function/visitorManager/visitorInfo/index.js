import request from '@/plugin/axios'

export function getAllVisitorInfo () {
  return request({
    url: '/Visitor/allVisitorInfo',
    method: 'post'
  })
}

export function VisitorSignInTime (data) {
  return request({
    url: '/Visitor/visitorSignIn',
    method: 'post',
    data: data
  })
}

export function VisitorSignOutTime (data) {
  return request({
    url: '/Visitor/visitorSignOut',
    method: 'post',
    data: data
  })
}

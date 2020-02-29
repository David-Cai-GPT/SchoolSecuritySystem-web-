import page from './page'
import request from '@/plugin/axios'

export function getStudentNum () {
  return request({
    url: '/Student/getAllStudentNum',
    method: 'post'
  })
}

export function getUserNum () {
  return request({
    url: '/User/getAllUserNum',
    method: 'post'
  })
}

export function getTeacherNum () {
  return request({
    url: '/Teacher/getAllTeacherNum',
    method: 'post'
  })
}

export function getEmployeeNum () {
  return request({
    url: '/Employee/getAllEmployeeNum',
    method: 'post'
  })
}

export function getAllActivityInfo () {
  return request({
    url: '/Activity/allActivityInfo',
    method: 'post'
  })
}

export default page

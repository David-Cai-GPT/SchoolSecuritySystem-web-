import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/function/query',
  name: 'query',
  meta,
  redirect: { name: 'demo-components-index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'userinformation', name: `${pre}userinformation`, component: _import('function/query/userinformation/index.vue'), meta: { ...meta, title: '查询用户资料' } },
    { path: 'studentinformation', name: `${pre}studentinformation`, component: _import('function/query/studentinformation/index.vue'), meta: { ...meta, title: '查询学生资料' } },
    { path: 'teacherinformation', name: `${pre}teacherinformation`, component: _import('function/query/teacherinformation/index.vue'), meta: { ...meta, title: '查询教师资料' } },
    { path: 'employeeinformation', name: `${pre}employeeinformation`, component: _import('function/query/employeeinformation/index.vue'), meta: { ...meta, title: '查询职工资料' } }
  ])('function-query-')
}

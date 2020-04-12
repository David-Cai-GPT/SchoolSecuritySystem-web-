import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/function/carRecord',
  name: 'query',
  meta,
  redirect: { name: 'demo-components-index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'carInRecord', name: `${pre}carInRecord`, component: _import('function/carRecord/carInRecord/index.vue'), meta: { ...meta, title: '车辆入园记录' } },
    { path: 'carManager', name: `${pre}carManager`, component: _import('function/carRecord/carManager/index.vue'), meta: { ...meta, title: '车辆记录查询' } },
    { path: 'userAccount', name: `${pre}userAccount`, component: _import('function/carRecord/userAccount/index.vue'), meta: { ...meta, title: '用户信息查询' } },
    { path: 'userInvest', name: `${pre}userInvest`, component: _import('function/carRecord/userInvest/index.vue'), meta: { ...meta, title: '用户充值' } }
  ])('function-query-')
}

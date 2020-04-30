import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/function/entranceGuard',
  name: 'entranceGuard',
  meta,
  redirect: { name: 'demo-components-index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'addEntranceGuard', name: `${pre}addEntranceGuard`, component: _import('function/entranceGuard/addEntranceGuard/index.vue'), meta: { ...meta, title: '添加门禁设备' } },
    { path: 'allEntranceGuardInfo', name: `${pre}allEntranceGuardInfo`, component: _import('function/entranceGuard/allEntranceGuardInfo/index.vue'), meta: { ...meta, title: '门禁设备信息' } }
  ])('function-entranceGuard-')
}

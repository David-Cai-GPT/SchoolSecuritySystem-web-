import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/function/visitorManager',
  name: 'visitorManager',
  meta,
  redirect: { name: 'demo-components-index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'visitorApply', name: `${pre}visitorApply`, component: _import('function/visitorManager/visitorApply/index.vue'), meta: { ...meta, title: '访客预约' } },
    { path: 'visitorInfo', name: `${pre}visitorInfo`, component: _import('function/visitorManager/visitorInfo/index.vue'), meta: { ...meta, title: '访客信息列表' } }
  ])('function-visitorManager-')
}

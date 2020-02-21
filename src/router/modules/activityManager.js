import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/function/activityManager',
  name: 'activityManager',
  meta,
  redirect: { name: 'demo-components-index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'activityApply', name: `${pre}userinformation`, component: _import('function/activityManager/activityApply/index.vue'), meta: { ...meta, title: '活动申报' } }
  ])('function-activityManager-')
}

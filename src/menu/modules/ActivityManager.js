export default {
  path: '/function/activityManager',
  title: '活动',
  icon: 'star',
  children: (pre => [
    {
      title: '活动管理',
      children: [
        { path: `${pre}activityApply`, title: '活动申报' },
        { path: `${pre}activityInfo`, title: '活动列表' }
      ]
    }
  ])('/function/activityManager/')
}

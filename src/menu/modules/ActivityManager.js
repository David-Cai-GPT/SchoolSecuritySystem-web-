export default {
  path: '/function/activityManager',
  title: '活动管理',
  icon: 'star',
  children: (pre => [
    {
      title: '活动管理',
      children: [
        { path: `${pre}activityApply`, title: '活动申报' }
      ]
    }
  ])('/function/activityManager/')
}

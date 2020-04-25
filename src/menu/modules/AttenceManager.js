export default {
  path: '/function/attenceManager',
  title: '考勤',
  icon: 'table',
  children: (pre => [
    {
      title: '考勤管理',
      children: [
        { path: `${pre}notAttenceInfo`, title: '未打卡记录' }
      ]
    }
  ])('/function/attenceManager/')
}

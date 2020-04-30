export default {
  path: '/function/entranceGuard',
  title: '门禁',
  icon: 'user',
  children: (pre => [
    {
      title: '门禁管理',
      children: [
        { path: `${pre}addEntranceGuard`, title: '增加新的门禁信息' },
        { path: `${pre}allEntranceGuardInfo`, title: '门禁设备信息' }
      ]
    }
  ])('/function/entranceGuard/')
}

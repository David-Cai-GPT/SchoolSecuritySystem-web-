export default {
  path: '/function/carRecord',
  title: '车辆出入',
  icon: 'car',
  children: (pre => [
    {
      title: '出入管理',
      children: [
        { path: `${pre}carInRecord`, title: '车辆进园' },
        { path: `${pre}carManager`, title: '入园车辆信息' }
      ]
    }
  ])('/function/carRecord/')
}

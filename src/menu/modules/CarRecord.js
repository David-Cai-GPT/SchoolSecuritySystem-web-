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
    },
    {
      title: '充值卡用户管理',
      children: [
        { path: `${pre}userAccount`, title: '用户信息查询' },
        { path: `${pre}userInvest`, title: '创建新的充值用户' }
      ]
    }
  ])('/function/carRecord/')
}

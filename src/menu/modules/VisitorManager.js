export default {
  path: '/function/visitorManager',
  title: '访客',
  icon: 'address-book',
  children: (pre => [
    {
      title: '访客管理',
      children: [
        { path: `${pre}visitorApply`, title: '访客访问预约' },
        { path: `${pre}visitorInfo`, title: '访客列表查询列表' }
      ]
    }
  ])('/function/visitorManager/')
}

export default {
  path: '/function/query',
  title: '查询',
  icon: 'search',
  children: (pre => [
    {
      title: '查询',
      children: [
        { path: `${pre}userinformation`, title: '查询用户信息' },
        { path: `${pre}studentinformation`, title: '查询管理学生信息' },
        { path: `${pre}teacherinformation`, title: '查询管理教师信息' },
        { path: `${pre}employeeinformation`, title: '查询管理职员信息' }
      ]
    }
  ])('/function/query/')
}

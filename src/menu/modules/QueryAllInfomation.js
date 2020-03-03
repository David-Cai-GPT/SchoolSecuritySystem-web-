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
    },
    {
      title: '新增',
      children: [
        { path: `${pre}addStudentinformation`, title: '新增学生信息' },
        { path: `${pre}addTeacherinformation`, title: '新增教师信息' },
        { path: `${pre}addEmployeeinformation`, title: '新增职员信息' }
      ]
    }
  ])('/function/query/')
}

export default {
  path: '/function/equipmentManager',
  title: '设备维护',
  icon: 'cog',
  children: (pre => [
    {
      title: '设备列表',
      children: [
        { path: `${pre}equipmentInfo`, title: '设备信息' }
      ]
    }
  ])('/function/equipmentManager/')
}

// 插件
import demoPlugins from './modules/demo-plugins'
// 组件
import demoComponents from './modules/demo-components'
// 组件
import demoCharts from './modules/demo-charts'
// 组件库
import demoElement from './modules/demo-element'
// 试验台
import demoPlayground from './modules/demo-playground'
// 示例
import demoBusiness from './modules/demo-business'
// CRUD
import demoD2Crud from './modules/demo-d2-crud'
// 第三方网页
import Frame from './modules/demo-frame'
// 正式开发查询功能
import Query from './modules/QueryAllInfomation'
// 正式开发活动活动管理功能
import activityManager from './modules/ActivityManager'
// 正式开发访客管理功能
import visitorManager from './modules/VisitorManager'
// 正式开发车辆管理功能
import carRecord from './modules/CarRecord'
// 正是开发设备管理功能
import equipmentManager from './modules/EquipmentManager'
// 菜单 侧边栏
export const menuAside = [
  demoComponents,
  demoPlugins,
  demoCharts,
  demoElement,
  demoPlayground,
  demoBusiness,
  demoD2Crud,
  Frame,
  Query,
  activityManager,
  visitorManager,
  carRecord,
  equipmentManager
]

// 菜单 顶栏
export const menuHeader = [
  {
    path: '/index',
    title: '首页',
    icon: 'home'
  },
  {
    title: '功能',
    icon: 'puzzle-piece',
    children: [
      Query, // 查询
      activityManager, // 活动管理
      visitorManager, // 访客管理
      carRecord, // 车辆管理
      equipmentManager, // 设备管理
      demoD2Crud,
      demoComponents,
      demoElement,
      demoCharts,
      demoPlugins,
      Frame,
      {
        title: '新窗口打开链接',
        icon: 'link',
        children: [
          { path: 'https://github.com/David-banana', title: 'Github', icon: 'github' },
          { path: 'https://blog.csdn.net/weixin_44439085', title: 'CSDN', icon: 'globe' },
          { path: 'https://my.oschina.net/u/3871516', title: '开源中国', icon: 'globe' },
          { path: 'https://www.zhihu.com/people/fairy-ever/activities', title: '知乎', icon: 'globe' },
          { path: 'http://www.caidawei.cn', title: '个人网站', icon: 'globe' }
        ]
      }
    ]
  },
  demoPlayground,
  demoBusiness
]

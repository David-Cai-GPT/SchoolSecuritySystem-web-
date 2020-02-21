<template>
  <d2-container>
    <template slot="header">查询管理教师信息</template>
     <el-table
      :data="Teacherinfomation"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        width="180">
      </el-table-column>
      <el-table-column
        prop="academy"
        label="学院"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mobliephone"
        label="移动手机"
        width="200">
      </el-table-column>
      <el-table-column
        prop="teachercardid"
        label="学生卡卡号"
        width="180">
      </el-table-column>
       <el-table-column
        prop="address"
        label="地址"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="300">
      </el-table-column>
      <el-table-column
        prop="role"
        label="角色"
        width="180">
      </el-table-column>
      <el-table-column
        prop="work"
        label="工作">
      </el-table-column>
    </el-table>
  </d2-container>
</template>

<script>
import { getAllTeacherInformation } from './index'
export default {
  data () {
    return {
      Teacherinfomation: ''
    }
  },
  mounted: function () {
    this.createPage() // 创建页面需要调用的方法
  },
  methods: {
    createPage () {
      getAllTeacherInformation({}).then((response) => {
        this.Teacherinfomation = response
      })
    }
  }
}
</script>

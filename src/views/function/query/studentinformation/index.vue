<template>
  <d2-container>
    <template slot="header">查询管理学生信息</template>
     <el-table
      :data="Studentinfomation"
      border
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
        prop="classroom"
        label="班级"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mobliephone"
        label="移动手机"
        width="200">
      </el-table-column>
      <el-table-column
        prop="domitory"
        label="寝室"
        width="180">
      </el-table-column>
      <el-table-column
        prop="studentcardid"
        label="学生卡卡号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="300">
      </el-table-column>
      <el-table-column
        prop="role"
        label="角色">
      </el-table-column>
    </el-table>
  </d2-container>
</template>

<script>
import { getAllStudentInformation } from './index'
export default {
  data () {
    return {
      Studentinfomation: ''
    }
  },
  mounted: function () {
    this.createPage() // 创建页面需要调用的方法
  },
  methods: {
    createPage () {
      getAllStudentInformation({}).then((response) => {
        this.Studentinfomation = response
      })
    }
  }
}
</script>

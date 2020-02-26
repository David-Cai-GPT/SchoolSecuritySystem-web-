<template>
  <d2-container>
    <template slot="header">查询管理职员信息</template>
     <el-table
      :data="EmployeeInformation"
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
        prop="work"
        label="职位"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mobliephone"
        label="移动手机"
        width="180">
      </el-table-column>
      <el-table-column
        prop="employeecardid"
        label="职员卡卡号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="180">
      </el-table-column>
      <el-table-column
        prop="role"
        label="角色">
      </el-table-column>
    </el-table>
  </d2-container>
</template>

<script>
import { getAllEmployeeInformation } from './index'
export default {
  data () {
    return {
      EmployeeInformation: ''
    }
  },
  mounted: function () {
    this.createPage() // 创建页面需要调用的方法
  },
  methods: {
    createPage () {
      getAllEmployeeInformation({}).then((response) => {
        this.EmployeeInformation = response
      })
    }
  }
}
</script>

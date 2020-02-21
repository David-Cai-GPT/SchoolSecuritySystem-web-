<template>
  <d2-container>
    <template slot="header">查询用户信息</template>
     <el-table
      :data="Userinfomation"
      style="width: 100%">
      <el-table-column
        prop="username"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="role"
        label="角色"
        width="180">
      </el-table-column>
      <el-table-column
        prop="authority"
        label="权限">
      </el-table-column>
    </el-table>
  </d2-container>
</template>

<script>
import { getAllUserInformation } from './index'
export default {
  data () {
    return {
      Userinfomation: ''
    }
  },
  mounted: function () {
    this.createPage() // 创建页面需要调用的方法
  },
  methods: {
    createPage () {
      getAllUserInformation({}).then((response) => {
        this.Userinfomation = response
      })
    }
  }
}
</script>

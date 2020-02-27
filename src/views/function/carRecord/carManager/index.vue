<template>
  <d2-container>
    <template slot="header">查询进园车辆信息</template>
     <el-table
      :data="Carinfomation"
      border
      style="width: 100%">
      <el-table-column
        prop="carnumber"
        label="车牌号">
      </el-table-column>
      <el-table-column
        prop="carintime"
        label="车辆进入时间">
      </el-table-column>
      <el-table-column
        prop="carouttime"
        label="车辆离开时间">
      </el-table-column>
      <el-table-column
        prop="status"
        label="车辆状态">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
         <el-button type="info" size="small" @click="visitorSignOut(scope.row)">签退</el-button>
        </template>
      </el-table-column>
    </el-table>
  </d2-container>
</template>

<script>
import { getAllCaryInfo } from './index'
export default {
  data () {
    return {
      Carinfomation: []
    }
  },
  mounted: function () {
    this.createPage() // 创建页面需要调用的方法
  },
  methods: {
    createPage () {
      getAllCaryInfo({}).then((response) => {
        this.Carinfomation = response
      })
    }
  }
}
</script>

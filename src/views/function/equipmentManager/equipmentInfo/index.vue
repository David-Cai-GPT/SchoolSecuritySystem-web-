<template>
  <d2-container>
    <template slot="header">查询园区设备信息</template>
     <el-table
      :data="Equipmentinfomation"
      border
      style="width: 100%">
      <el-table-column
        prop="equipmentnumber"
        label="设备编号">
      </el-table-column>
      <el-table-column
        prop="equipmenttype"
        label="设备类型">
      </el-table-column>
      <el-table-column
        prop="equipmentstatus"
        label="设备状态">
      </el-table-column>
      <el-table-column
        prop="equipmentgroup"
        label="设备分组">
      </el-table-column>
    </el-table>
  </d2-container>
</template>

<script>
import { GetEquipmentInfo } from './index'
export default {
  data () {
    return {
      Equipmentinfomation: []
    }
  },
  mounted: function () {
    this.createPage() // 创建页面需要调用的方法
  },
  methods: {
    createPage () {
      GetEquipmentInfo({}).then((response) => {
        this.Equipmentinfomation = response
      })
    }
  }
}
</script>

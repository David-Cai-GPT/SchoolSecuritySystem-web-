<template>
  <d2-container>
    <template slot="header">查询预约访客信息</template>
     <el-table
      :data="Visitorinfomation"
      style="width: 100%">
      <el-table-column
        prop="visitorname"
        label="访客名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="visitortel"
        label="访客联系方式"
        width="180">
      </el-table-column>
      <el-table-column
        prop="visitorstarttime"
        label="访问时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="applicantname"
        label="申请人姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="applicantemail"
        label="申请人邮箱"
        width="200">
      </el-table-column>
      <el-table-column
        prop="applicanttel"
        label="申请人联系方式"
        width="180">
      </el-table-column>
      <el-table-column
        prop="type"
        label="访问类型"
        width="300">
      </el-table-column>
    </el-table>
  </d2-container>
</template>

<script>
import { getAllVisitorInfo } from './index'
export default {
  data () {
    return {
      Visitorinfomation: ''
    }
  },
  mounted: function () {
    this.createPage() // 创建页面需要调用的方法
  },
  methods: {
    createPage () {
      getAllVisitorInfo({}).then((response) => {
        this.Visitorinfomation = response
      })
    }
  }
}
</script>

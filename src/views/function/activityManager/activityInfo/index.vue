<template>
  <d2-container>
    <template slot="header">查询活动信息</template>
     <el-table
      :data="Activityinfomation"
      style="width: 100%">
      <el-table-column
        prop="activityname"
        label="活动名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="activitystarttime"
        label="活动开始时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="activityendtime"
        label="活动结束时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="applicantname"
        label="申请人姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="college"
        label="主办学院"
        width="200">
      </el-table-column>
      <el-table-column
        prop="applicanttel"
        label="申请人联系方式"
        width="180">
      </el-table-column>
      <el-table-column
        prop="place"
        label="活动地点"
        width="180">
      </el-table-column>
      <el-table-column
        prop="type"
        label="活动类型"
        width="300">
      </el-table-column>
    </el-table>
  </d2-container>
</template>

<script>
import { getAllActivityInfo } from './index'
export default {
  data () {
    return {
      Activityinfomation: ''
    }
  },
  mounted: function () {
    this.createPage() // 创建页面需要调用的方法
  },
  methods: {
    createPage () {
      getAllActivityInfo({}).then((response) => {
        this.Activityinfomation = response
      })
    }
  }
}
</script>

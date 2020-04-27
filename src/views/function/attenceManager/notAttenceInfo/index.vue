<template>
  <d2-container>
    <template slot="header">查询今日未打卡信息</template>
    <el-tabs v-model="searchRole" @tab-click="handleClick">
    <el-tab-pane label="学生" name="1">学生</el-tab-pane>
    <el-tab-pane label="教师" name="2">教师</el-tab-pane>
    <el-tab-pane label="职工" name="3">职工</el-tab-pane>
    <el-button style="margin-top:10px;margin-bottom:10px" type="info" @click="dialogVisible = true">统计图表</el-button>
  </el-tabs>
     <el-table
      :data="tableInfo"
      border
      style="width: 80%">
      <el-table-column
        prop="name"
        label="姓名"
        width="200">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        width="120">
        <template slot-scope="scope">
          <span v-if="scope.row.gender == 1">男</span>
          <span v-else>女</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="mobliephone"
        label="移动手机"
        width="230">
      </el-table-column>
      <el-table-column
      v-if="searchRole == 1"
        prop="studentcardid"
        label="学生卡卡号"
        width="220">
      </el-table-column>
      <el-table-column
      v-else-if="searchRole == 2"
        prop="teachercardid"
        label="教师卡卡号"
        width="220">
      </el-table-column>
      <el-table-column
        v-else
        prop="employeecardid"
        label="职工卡卡号"
        width="220">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="300">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
           <el-button type="primary" @click="attence(scope)">补签</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
  title="统计图表"
  :visible.sync="dialogVisible"
  width="40%">
  <div>
      <ve-histogram :data="chartData"></ve-histogram>
    </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
      </d2-container>
</template>

<script>
import { getNotAttenceInfo, personAttence, attenceAna } from './index'
export default {
  data () {
    return {
      dialogVisible: false,
      tableInfo: '',
      searchRole: '1',
      chartData: {
        columns: [],
        rows: {}
      }
    }
  },
  mounted: function () {
    this.createPage() // 创建页面需要调用的方法
  },
  methods: {
    createPage () {
      getNotAttenceInfo({
        role: this.searchRole
      }).then((response) => {
        this.tableInfo = response
      })
      attenceAna({
        role: this.searchRole
      }).then((response) => {
        this.chartData.columns = response.columns
        this.chartData.rows = response.rows
      })
    },
    handleClick () {
      getNotAttenceInfo({
        role: this.searchRole
      }).then((response) => {
        this.tableInfo = response
      })
      attenceAna({
        role: this.searchRole
      }).then((response) => {
        this.chartData.columns = response.columns
        this.chartData.rows = response.rows
      })
    },
    attence (scope) {
      if (scope.row.role === 1) {
        personAttence({
          name: scope.row.name,
          cardId: scope.row.studentcardid,
          role: scope.row.role
        })
      } else if (scope.row.role === 2) {
        personAttence({
          name: scope.row.name,
          cardId: scope.row.teachercardid,
          role: scope.row.role
        })
      } else {
        personAttence({
          name: scope.row.name,
          cardId: scope.row.employeecardid,
          role: scope.row.role
        })
      }
      this.handleClick()
    }
  }
}
</script>

<style scoped>
</style>

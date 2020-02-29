<template>
  <d2-container class="page">
     <template slot="header">校园综合安防系统</template>
      <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="never" class="d2-card">
          <span class="card-User-Num">用户</span>
          <div class="group">
            <d2-count-up :end="userNum"/>
          </div>
        </el-card>
      </el-col>
       <el-col :span="6">
        <el-card shadow="never" class="d2-card d2-mb">
            <span class="card-Stu-Num">学生</span>
          <div class="group">
            <d2-count-up :end='studentNum'/>
          </div>
        </el-card>
      </el-col>
       <el-col :span="6">
        <el-card shadow="never" class="d2-card d2-mb">
            <span class="card-Tea-Num">教师</span>
          <div class="group">
            <d2-count-up :end='teacherNum'/>
          </div>
        </el-card>
      </el-col>
        <el-col :span="6">
        <el-card shadow="never" class="d2-card d2-mb">
            <span class="card-Emp-Num">职工</span>
          <div class="group">
            <d2-count-up :end='employeeNum'/>
          </div>
        </el-card>
      </el-col>
    </el-row>
     <div>
         <el-table
      :data="Activityinfomation"
      border
      height = "400"
      style="width: 70%;display:inline-block"
      >
      <el-table-column
        prop="activityname"
        label="活动名称">
      </el-table-column>
      <el-table-column
        prop="applicantname"
        label="申请人姓名">
      </el-table-column>
      <el-table-column
        prop="college"
        label="主办学院">
      </el-table-column>
      <el-table-column
        prop="place"
        label="活动地点">
      </el-table-column>
      <el-table-column
        prop="type"
        label="活动类型">
      </el-table-column>
    </el-table>
      <ve-pie style="width: 30%;display:inline-block" :data="{
        columns: ['role', 'number'],
        rows: [
          { 'role': '学生', 'number': studentNum },
          { 'role': '教师', 'number': teacherNum },
          { 'role': '职员', 'number': employeeNum }
        ]
      }"></ve-pie>
    </div>
  </d2-container>
</template>

<script>
import { getStudentNum, getUserNum, getTeacherNum, getEmployeeNum, getAllActivityInfo } from './index'
export default {
  data () {
    return {
      className: '',
      studentNum: 0,
      teacherNum: 0,
      employeeNum: 0,
      userNum: 0,
      Activityinfomation: []
    }
  },
  mounted: function () {
    this.createPage() // 创建页面需要调用的方法
  },
  methods: {
    createPage () {
      getStudentNum({}).then((response) => {
        this.studentNum = response
      })
      getUserNum({}).then((response) => {
        this.userNum = response
      })
      getTeacherNum({}).then((response) => {
        this.teacherNum = response
      })
      getEmployeeNum({}).then((response) => {
        this.employeeNum = response
      })
      getAllActivityInfo({}).then((response) => {
        this.Activityinfomation = response
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  .group {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 60px;
      &.end {
        padding: 0px 20px;
        border-radius: 4px;
        background-color: $color-success;
        color: #FFF;
      }
    }
  }
}
.card-User-Num{
  font-size: 20px;
  font-weight:bold;
  color:black
}
.card-Stu-Num{
  font-size: 20px;
  font-weight:bold;
  color:black
}
.card-Tea-Num{
  font-size: 20px;
  font-weight:bold;
  color:black
}
.card-Emp-Num{
  font-size: 20px;
  font-weight:bold;
  color:black
}

</style>

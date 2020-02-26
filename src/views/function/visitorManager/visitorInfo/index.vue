<template>
  <d2-container>
    <template slot="header">查询预约访客信息</template>
     <el-table
     border
      :data="Visitorinfomation"
      style="width: 100%">
      <el-table-column
        prop="visitorname"
        label="访客名称">
      </el-table-column>
      <el-table-column
        prop="visitortel"
        label="访客联系方式">
      </el-table-column>
      <el-table-column
        prop="visitorstarttime"
        label="访问时间">
      </el-table-column>
      <el-table-column
        prop="applicantname"
        label="申请人姓名">
      </el-table-column>
      <el-table-column
        prop="applicantemail"
        label="申请人邮箱">
      </el-table-column>
      <el-table-column
        prop="applicanttel"
        label="申请人联系方式">
      </el-table-column>
      <el-table-column
        prop="type"
        label="访问类型">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
         <el-button type="success" :disabled = boolean1 size="small" @click="visitorSignIn(scope.row)">签到</el-button>
         <el-button type="info" :disabled = boolean2 size="small" @click="visitorSignOut(scope.row)">签退</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
  title="提示"
  :visible.sync="dialogVisible1"
  width="30%">
  <span>签到成功</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
  </span>
</el-dialog>
<el-dialog
  title="提示"
  :visible.sync="dialogVisible2"
  width="30%">
  <span>签退成功</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible2 = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
  </span>
</el-dialog>
  </d2-container>
</template>

<script>
import { getAllVisitorInfo, VisitorSignInTime, VisitorSignOutTime } from './index'
export default {
  data () {
    return {
      Visitorinfomation: [],
      boolean1: false,
      boolean2: true,
      dialogVisible1: false,
      dialogVisible2: false,
      SignInName: '',
      SignOutnName: ''
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
    },
    visitorSignIn (row) {
      this.boolean2 = false
      this.boolean1 = true
      this.dialogVisible1 = true
      this.SignInName = row.visitorname
      VisitorSignInTime({
        visitorName: this.SignInName
      })
    },
    visitorSignOut (row) {
      this.dialogVisible2 = true
      this.boolean2 = true
      this.SignOutName = row.visitorname
      VisitorSignOutTime({
        visitorName: row.visitorname
      })
    }
  }
}
</script>

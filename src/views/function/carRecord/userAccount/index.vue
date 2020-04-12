<template>
  <d2-container>
    <template slot="header">查询充值用户信息</template>
     <el-table
     border
      :data="userAccountinfomation"
      style="width: 100%">
      <el-table-column
        prop="userCardid"
        label="访客卡号">
      </el-table-column>
      <el-table-column
        prop="carNumber"
        label="车牌号">
      </el-table-column>
      <el-table-column
        prop="surplus"
        label="余额">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <template v-if="scope.row.visitorendtime == null">
         <el-button type="success" :disabled = boolean1 size="small" @click="userAccountInvest(scope.row)">充值</el-button>
         </template>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%">
  <span>用户充值</span>
  <el-input v-model="money" placeholder="输入充值金额"></el-input>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="invest()">确 定</el-button>
  </span>
</el-dialog>
  </d2-container>
</template>

<script>
import { getAllUserAccountInfo, UserAccountInvest } from './index'
export default {
  data () {
    return {
      userAccountinfomation: [],
      dialogVisible: false, // 充值页面可使判断
      userCardid: '',
      money: 0
    }
  },
  mounted: function () {
    this.createPage() // 创建页面需要调用的方法
  },
  methods: {
    createPage () {
      getAllUserAccountInfo({}).then((response) => {
        this.userAccountinfomation = response
        console.log(this.userAccountinfomation)
      })
    },
    userAccountInvest (row) {
      this.userCardid = row.userCardid
      this.dialogVisible = true
    },
    invest () {
      console.log(this.userCardid)
      UserAccountInvest({
        userCardId: this.userCardid,
        money: this.money
      }).then(() => {
        this.dialogVisible = false
      })
    }
  }
}
</script>

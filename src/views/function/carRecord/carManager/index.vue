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
          <template v-if="scope.row.status == '不在园区内'">
            <el-button type="info" size="small" @click="carOutTime(scope.row)" :disabled = true>签退</el-button>
          </template>
         <el-button v-else type="info" size="small" @click="carOutTime(scope.row)" :disabled = boolean>签退</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%">
  <span>签退成功</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  </d2-container>
</template>

<script>
import { getAllCaryInfo, carOut } from './index'
export default {
  data () {
    return {
      Carinfomation: [],
      dialogVisible: false,
      boolean: false
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
    },
    carOutTime (row) {
      this.boolean = true
      this.dialogVisible = true
      carOut({
        carNumber: row.carnumber
      })
    }
  }
}
</script>

<template>
  <d2-container>
    <template slot="header">门禁设备信息信息</template>
     <el-table
     border
      :data="EntranceGuardinfomation"
      style="width: 100%">
        <el-table-column
        prop="entranceGuardNumber"
        label="门禁设备编号">
      </el-table-column>
      <el-table-column
        prop="entranceGuardAddress"
        label="门禁设备位置">
      </el-table-column>
      <el-table-column
        prop="entranceGuardResponse"
        label="门禁设备负责人">
      </el-table-column>
      <el-table-column
        prop="entranceGuardStatus"
        label="门禁设备状态">
      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作">
        <template slot-scope="scope">
             <el-button type="success" size="small" @click="detail(scope.row)">查看权限详情</el-button>
             <el-button type="primary" size="small" @click="addPeople(scope.row)">添加权限</el-button>
        </template>
      </el-table-column>
      </el-table>
      <el-dialog
      title="查看权限详情"
      :visible.sync="dialogVisible"
      width="60%">
      <el-table
     border
      :data="EntranceGuardUserInfomation"
      style="width: 100%">
        <el-table-column
        prop="entranceGuardNumber"
        label="门禁设备编号">
      </el-table-column>
      <el-table-column
        prop="userCardid"
        label="用户卡号">
      </el-table-column>
      <el-table-column
        prop="userName"
        label="用户姓名">
      </el-table-column>
      <el-table-column
        prop="userRole"
        label="用户角色">
      </el-table-column>
      <el-table-column
        prop="userMobile"
        label="用户联系方式">
      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作">
        <template slot-scope="scope">
             <el-button type="warning" size="small" @click="deleteUser(scope.row)">删除</el-button>
        </template>
      </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
</el-dialog>
<el-dialog
      title="添加权限"
      :visible.sync="dialogVisible1"
      width="30%">
      <el-form :model="addPeopleInfo" ref="addPeopleInfo" label-width="120px" class="demo-dynamic">
  <el-form-item
    prop="entranceGuardNumber"
    label="门禁设备编号"
    :rules="[
      { required: true, message: '请输入门禁设备编号', trigger: 'blur' }
    ]"
  >
    <el-input v-model="addPeopleInfo.entranceGuardNumber"></el-input>
  </el-form-item>
  <el-form-item
    prop="userCardId"
    label="用户卡号"
    :rules="[
      { required: true, message: '请输入用户卡号', trigger: 'blur' }
    ]"
  >
    <el-input v-model="addPeopleInfo.userCardId"></el-input>
  </el-form-item>
  <el-form-item
    prop="userName"
    label="用户姓名"
    :rules="[
      { required: true, message: '请输入学生姓名', trigger: 'blur' }
    ]"
  >
    <el-input v-model="addPeopleInfo.userName"></el-input>
  </el-form-item>
  <el-form-item
    prop="userMobile"
    label="用户联系方式"
    :rules="[
      { required: true, message: '请输入用户联系方式', trigger: 'blur' }
    ]"
  >
    <el-input v-model="addPeopleInfo.userMobile"></el-input>
  </el-form-item>
  <el-form-item
    prop="userRole"
    label="用户联系方式"
    :rules="[
      { required: true, message: '请选择用户角色', trigger: 'blur' }
    ]"
  >
   <el-select v-model="addPeopleInfo.userRole" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('addPeopleInfo')">提交</el-button>
    <el-button @click="resetForm('addPeopleInfo')">重置</el-button>
  </el-form-item>
</el-form>
</el-dialog>
    </d2-container>
</template>

<script>
import { getAllEntranceGuardInfo, addEntranceGuardUser, getAllEntranceGuardUserInfo, deleteEntranceGuardUser } from './index'
export default {
  data () {
    return {
      EntranceGuardinfomation: [],
      dialogVisible: false,
      EntranceGuardUserInfomation: [],
      dialogVisible1: false,
      addPeopleInfo: {
        entranceGuardNumber: '',
        userCardId: '',
        userName: '',
        userMobile: '',
        userRole: ''
      },
      options: [{
        value: '学生',
        label: '学生'
      }, {
        value: '教师',
        label: '教师'
      }, {
        value: '职工',
        label: '职工'
      }]
    }
  },
  mounted: function () {
    this.createPage() // 创建页面需要调用的方法
  },
  methods: {
    createPage () {
      getAllEntranceGuardInfo({}).then((response) => {
        this.EntranceGuardinfomation = response
      })
    },
    detail (scope) {
      getAllEntranceGuardUserInfo({
        entranceGuardNumber: scope.entranceGuardNumber
      }).then((response) => {
        this.EntranceGuardUserInfomation = response
        this.dialogVisible = true
      })
    },
    addPeople (scope) {
      this.dialogVisible1 = true
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          addEntranceGuardUser({
            entranceGuardNumber: this.addPeopleInfo.entranceGuardNumber,
            userCardId: this.addPeopleInfo.userCardId,
            userName: this.addPeopleInfo.userName,
            userRole: this.addPeopleInfo.userRole,
            userMobile: this.addPeopleInfo.userMobile
          })
          this.resetForm('addPeopleInfo')
          this.dialogVisible1 = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    deleteUser (scope) {
      deleteEntranceGuardUser({
        userCardId: scope.userCardid,
        entranceGuardNumber: scope.entranceGuardNumber
      }).then((response) => {
        this.dialogVisible = false
        this.detail(scope)
      })
    }
  }
}
</script>

<style scoped>

</style>

<template>
    <d2-container>
         <el-form :model="addEntranceGuardInfo" ref="addEntranceGuardInfo" label-width="120px" style="width:30%" class="demo-dynamic">
  <el-form-item
    prop="entranceGuardNumber"
    label="门禁设备编号"
    :rules="[
      { required: true, message: '请输入门禁设备编号', trigger: 'blur' }
    ]"
  >
    <el-input v-model="addEntranceGuardInfo.entranceGuardNumber"></el-input>
  </el-form-item>
  <el-form-item
    prop="entranceGuardAddress"
    label="门禁设备区域"
    :rules="[
      { required: true, message: '请输入门禁设备区域', trigger: 'blur' }
    ]"
  >
    <el-input v-model="addEntranceGuardInfo.entranceGuardAddress"></el-input>
  </el-form-item>
  <el-form-item
    prop="entranceGuardResponse"
    label="门禁负责人"
    :rules="[
      { required: true, message: '请输入门禁负责人', trigger: 'blur' }
    ]"
  >
    <el-input v-model="addEntranceGuardInfo.entranceGuardResponse"></el-input>
  </el-form-item>
  <el-form-item
    prop="entranceGuardStatus"
    label="门禁设备状态"
    :rules="[
      { required: true, message: '请输入门禁设备状态', trigger: 'blur' }
    ]"
  >
    <el-input v-model="addEntranceGuardInfo.entranceGuardStatus"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('addEntranceGuardInfo')">提交</el-button>
    <el-button @click="resetForm('addEntranceGuardInfo')">重置</el-button>
  </el-form-item>
</el-form>
    </d2-container>
</template>

<script>
import { addNewEntranceGuardInfo } from './index'
export default {
  data () {
    return {
      addEntranceGuardInfo: {
        entranceGuardNumber: '',
        entranceGuardAddress: '',
        entranceGuardResponse: '',
        entranceGuardStatus: ''
      }
    }
  },
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          addNewEntranceGuardInfo({
            entranceGuardNumber: this.addEntranceGuardInfo.entranceGuardNumber,
            entranceGuardAddress: this.addEntranceGuardInfo.entranceGuardAddress,
            entranceGuardResponse: this.addEntranceGuardInfo.entranceGuardResponse,
            entranceGuardStatus: this.addEntranceGuardInfo.entranceGuardStatus
          })
          this.resetForm('addEntranceGuardInfo')
          this.dialogVisible1 = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

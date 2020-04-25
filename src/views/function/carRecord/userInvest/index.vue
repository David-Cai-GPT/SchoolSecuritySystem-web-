<template>
    <d2-container>
      <el-row>
        <el-col>
            <h2 class="d2-mt-0">新建充值用户</h2>
        </el-col>
      </el-row>
      <el-form ref="form" :rules="rules" :model="form" label-width="150px">
          <el-form-item label="充值用户ID卡号" prop="userCardId">
              <el-input v-model="form.userCardId" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="充值用户车牌号" prop="carNumber">
              <el-input v-model="form.carNumber" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="充值金额" prop="surplus">
              <el-input v-model="form.surplus" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
          </el-form-item>
      </el-form>
    </d2-container>
</template>

<script>
import { AddNewInvestUser } from './index'
export default {
  data () {
    return {
      form: {
        userCardId: '',
        carNumber: '',
        surplus: ''
      },
      rules: {
        userCardId: [
          { required: true, message: '请输入充值用户ID卡号', trigger: 'blur' },
          { min: 10, max: 10, message: '长度为11个字符', trigger: 'blur' }
        ],
        carNumber: [
          { required: true, message: '请输入充值用户车牌号', trigger: 'blur' },
          { min: 6, max: 20, message: '长度6到20个字符', trigger: 'blur' }
        ],
        surplus: [
          { required: true, message: '请输入充值金额', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          AddNewInvestUser({
            user_CardId: this.form.userCardId,
            car_number: this.form.carNumber,
            surplus: this.form.surplus
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

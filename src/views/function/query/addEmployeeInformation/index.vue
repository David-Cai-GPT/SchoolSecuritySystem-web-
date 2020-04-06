<template>
<d2-container>
    <el-row>
      <el-col :span="12">
        <h2 class="d2-mt-0">新增管理教师信息</h2>
      </el-col>
    </el-row>
      <el-form  ref="form" :rules="rules" :model="form" label-width="180px">
  <el-form-item label="职员名称" prop="name">
    <el-input v-model="form.name" style="width: 200px"></el-input>
  </el-form-item>
   <el-form-item label="职工性别" prop="gender">
    <el-radio-group v-model="form.gender">
    <el-radio label="1">男</el-radio>
    <el-radio label="0">女</el-radio>
  </el-radio-group>
  </el-form-item>
   <el-form-item label="职工联系方式" prop="mobilePhone">
    <el-input v-model="form.mobilePhone" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="职工职工卡卡号" prop="employeeCardId">
    <el-input v-model="form.employeeCardId" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="职工地址" prop="address">
    <el-input v-model="form.address" style="width: 200px"></el-input>
  </el-form-item>
   <el-form-item label="职工紧急联系人" prop="emergencyContact">
    <el-input v-model="form.emergencyContact" style="width: 200px"></el-input>
  </el-form-item>
   <el-form-item label="职工紧急联系人联系方式" prop="emergencyContactMobilePhone">
    <el-input v-model="form.emergencyContactMobilePhone" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="职工邮箱" prop="Email">
    <el-input v-model="form.Email" style="width: 200px"></el-input>
  </el-form-item>
    <el-form-item label="职工职位" prop="work">
    <el-input v-model="form.work" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item><footer></footer>
    <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
  </el-form-item>
</el-form>
</d2-container>
</template>
<script>
import { addNewEmployee } from './index'

export default {
  data () {
    return {
      form: {
        name: '',
        gender: '',
        mobilePhone: '',
        teacherCardId: '',
        address: '',
        emergencyContact: '',
        emergencyContactMobilePhone: '',
        Email: '',
        role: 1,
        work: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        gender: [
          {
            required: true,
            message: '请选择性别',
            trigger: 'blur'
          }
        ],
        mobilePhone: [
          {
            required: true,
            message: '请输入联系方式',
            trigger: 'blur'
          },
          {
            min: 8,
            max: 11,
            message: '输入电话格式不正确',
            trigger: 'blur'
          }
        ],
        employeeCardId: [
          {
            required: true,
            message: '请输入职工卡卡号',
            trigger: 'blur'
          },
          {
            min: 10,
            max: 10,
            message: '输入职工卡卡号格式不正确',
            trigger: 'blur'
          }
        ],
        address: [
          {
            required: true,
            message: '请输入住房地址',
            trigger: 'blur'
          }
        ],
        emergencyContact: [
          {
            required: true,
            message: '请输入紧急联系人姓名',
            trigger: 'blur'
          }
        ],
        emergencyContactMobilePhone: [
          {
            required: true,
            message: '请输入紧急人联系方式',
            trigger: 'blur'
          },
          {
            min: 8,
            max: 11,
            message: '输入电话格式不正确',
            trigger: 'blur'
          }
        ],
        Email: [
          {
            required: true,
            message: '请输入邮箱',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change']
          }
        ],
        work: [
          {
            required: true,
            message: '请输入职工职位',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          addNewEmployee({
            name: this.form.name,
            gender: this.form.gender,
            address: this.form.address,
            mobilephone: this.form.mobilePhone,
            employeeCardId: this.form.employeeCardId,
            emergencyContact: this.form.emergencyContact,
            emergencyContactMobilePhone: this.form.emergencyContactMobilePhone,
            email: this.form.Email,
            role: this.form.role,
            work: this.form.work
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

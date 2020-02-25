<template>
  <d2-container>
    <el-row>
      <el-col :span="12">
        <h2 class="d2-mt-0">访客预约</h2>
      </el-col>
    </el-row>
    <el-form ref="form" :rules="rules" :model="form" label-width="150px">
  <el-form-item label="访客名称" prop="visitorName">
    <el-input v-model="form.visitorName" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="访客联系方式" prop="visitorTel">
    <el-input v-model="form.visitorTel" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="访客访问时间" prop="startTime">
    <el-col :span="4">
      <el-date-picker type="date" placeholder="选择访问日期" v-model="form.startDate" style="width: 200px;"></el-date-picker>
    </el-col>
    <el-col :span="4">
      <el-time-picker placeholder="选择访问时间" v-model="form.startTime" style="width: 200px;"></el-time-picker>
    </el-col>
  </el-form-item>
   <el-form-item label="校内申请人姓名" prop="applicantName">
    <el-input v-model="form.applicantName" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="校内申请人联系方式" prop="applicanttel">
    <el-input v-model="form.applicanttel" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="校内申请人邮箱" prop="applicantName">
    <el-input v-model="form.applicantEmail" style="width: 200px"></el-input>
  </el-form-item>
   <el-form-item label="访问类别" prop="type">
    <el-input v-model="form.type" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item><footer></footer>
    <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
  </d2-container>
</template>

<script>
import { VisitorApply } from './index'
export default {
  data () {
    return {
      form: {
        visitorName: '',
        visitorTel: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        applicantName: '',
        applicanttel: '',
        applicantEmail: '',
        type: ''
      },
      rules: {
        visitorName: [
          { required: true, message: '请输入访客名称', trigger: 'blur' },
          { min: 2, max: 6, message: '长度在2到6个字符', trigger: 'blur' }
        ],
        visitorTel: [
          { required: true, message: '请输入访客联系方式', trigger: 'blur' },
          { min: 6, max: 20, message: '长度6到20个字符', trigger: 'blur' }
        ],
        startTime: [
          { required: true, message: '请选择活动开始时间', trigger: 'blue' }
        ],
        endTime: [
          { required: true, message: '请选择活动结束时间', trigger: 'blue' }
        ],
        applicantName: [
          { required: true, message: '请输入申请人姓名', trigger: 'blur' },
          { min: 2, max: 6, message: '请输入2到6个字符', trigger: 'blur' }
        ],
        applicanttel: [
          { required: true, message: '请输入申请人联系方式', trigger: 'blur' },
          { min: 5, max: 15, message: '长度在15个字符以内', trigger: 'blur' }
        ],
        applicantEmail: [
          { required: true, message: '请输入申请人邮箱', trigger: 'blue' }
        ],
        type: [
          { required: true, message: '请输入访问类别', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在20个字符以内', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          VisitorApply({
            visitorName: this.form.visitorName,
            visitorTel: this.form.visitorTel,
            startDate: this.form.startDate,
            startTime: this.form.startTime,
            applicantName: this.form.applicantName,
            applicanttel: this.form.applicanttel,
            applicantEmail: this.form.applicantEmail,
            type: this.form.type
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

<template>
  <d2-container>
    <el-row>
      <el-col :span="12">
        <h2 class="d2-mt-0">活动申报</h2>
      </el-col>
    </el-row>
    <el-form ref="form" :rules="rules" :model="form" label-width="120px">
  <el-form-item label="活动名称" prop="activityName">
    <el-input v-model="form.activityName" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="活动区域" prop="place">
    <el-input v-model="form.place" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="活动开始时间" prop="startTime">
    <el-col :span="4">
      <el-date-picker type="date" placeholder="选择开始日期" v-model="form.startDate" style="width: 200px;"></el-date-picker>
    </el-col>
    <el-col :span="4">
      <el-time-picker placeholder="选择开始时间" v-model="form.startTime" style="width: 200px;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="活动结束时间" prop="endTime">
    <el-col :span="4">
      <el-date-picker type="date" placeholder="选择结束日期" v-model="form.endDate" style="width: 200px;"></el-date-picker>
    </el-col>
    <el-col :span="4">
      <el-time-picker placeholder="选择结束时间" v-model="form.endTime" style="width: 200px;"></el-time-picker>
    </el-col>
  </el-form-item>
   <el-form-item label="申请人姓名" prop="applicantName">
    <el-input v-model="form.applicantName" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="申请人联系方式" prop="applicanttel">
    <el-input v-model="form.applicanttel" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="活动级别" prop="rank">
    <el-radio-group v-model="form.rank">
      <el-radio label="0" name="rank" value='0'>省级</el-radio>
      <el-radio label="1" name="rank" value='1'>市级</el-radio>
      <el-radio label="2" name="rank" value='2'>校级</el-radio>
      <el-radio label="3" name="rank" value='3'>院级</el-radio>
      <el-radio label="4" name="rank" value='4'>其他</el-radio>
    </el-radio-group>
  </el-form-item>
   <el-form-item label="承办学院" prop="college">
    <el-select v-model="form.college" placeholder="请选择学院">
      <el-option label="信息与电子工程学院" value="信息与电子工程学院"></el-option>
      <el-option label="马克思主义学院" value="马克思主义学院"></el-option>
      <el-option label="环境科学与工程学院" value="环境科学与工程学院"></el-option>
      <el-option label="工商管理学院" value="工商管理学院"></el-option>
      <el-option label="旅游与城乡规划学院" value="旅游与城乡规划学院"></el-option>
      <el-option label="财务与会计学院" value="财务与会计学院"></el-option>
      <el-option label="统计与数学学院" value="统计与数学学院"></el-option>
      <el-option label="经济学院" value="经济学院"></el-option>
      <el-option label="食品与生物工程学院" value="食品与生物工程学院"></el-option>
      <el-option label="艺术设计学院" value="艺术设计学院"></el-option>
      <el-option label="计算机与信息工程学院" value="计算机与信息工程学院"></el-option>
      <el-option label="法学院" value="法学院"></el-option>
      <el-option label="人文与传播学院" value="人文与传播学院"></el-option>
      <el-option label="公共管理学院" value="公共管理学院"></el-option>
      <el-option label="外国语学院" value="外国语学院"></el-option>
      <el-option label="东方语言文化学院" value="东方语言文化学院"></el-option>
      <el-option label="金融学院" value="金融学院"></el-option>
    </el-select>
    </el-form-item>
   <el-form-item label="活动类别" prop="type">
    <el-input v-model="form.type" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="活动描述" prop="activityDescription">
    <el-input type="textarea" v-model="form.activityDescription" style="width: 300px"></el-input>
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
import { ActivityApply } from '.'
export default {
  data () {
    return {
      form: {
        avtivityName: '',
        place: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        applicantName: '',
        applicanttel: '',
        type: '',
        rank: '',
        activityDescription: '',
        college: ''
      },
      rules: {
        activityName: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在20个字符以内', trigger: 'blur' }
        ],
        place: [
          { required: true, message: '请输入活动区域', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在20个字符以内', trigger: 'blur' }
        ],
        startTime: [
          { required: true, message: '请选择活动开始时间', trigger: 'blue' }
        ],
        endTime: [
          { required: true, message: '请选择活动结束时间', trigger: 'blue' }
        ],
        applicantName: [
          { required: true, message: '请输入申请人姓名', trigger: 'blur' },
          { min: 2, max: 5, message: '请输入2到5个字符', trigger: 'blur' }
        ],
        applicanttel: [
          { required: true, message: '请输入申请人联系方式', trigger: 'blur' },
          { min: 5, max: 15, message: '长度在15个字符以内', trigger: 'blur' }
        ],
        rank: [
          { required: true, message: '请选择活动级别', trigger: 'blue' }
        ],
        college: [
          { message: '请选择活动级别', trigger: 'blue' }
        ],
        type: [
          { required: true, message: '请输入活动类别', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在20个字符以内', trigger: 'blur' }
        ],
        activityDescription: [
          { required: true, message: '请输入活动描述', trigger: 'blur' },
          { min: 1, max: 200, message: '长度在200个字符以内', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          ActivityApply({
            activityName: this.form.activityName,
            place: this.form.place,
            startDate: this.form.startDate,
            startTime: this.form.startTime,
            endDate: this.form.endDate,
            endTime: this.form.endTime,
            rank: this.form.rank,
            activityDescription: this.form.activityDescription,
            applicantName: this.form.applicantName,
            applicanttel: this.form.applicanttel,
            college: this.form.college,
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

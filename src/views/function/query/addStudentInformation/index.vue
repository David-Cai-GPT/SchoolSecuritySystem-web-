<template>
<d2-container>
    <el-row>
      <el-col :span="12">
        <h2 class="d2-mt-0">新增管理学生信息</h2>
      </el-col>
    </el-row>
      <el-form  ref="form" :rules="rules" :model="form" label-width="180px">
  <el-form-item label="学生名称" prop="name">
    <el-input v-model="form.name" style="width: 200px"></el-input>
  </el-form-item>
   <el-form-item label="学生性别" prop="gender">
    <el-radio-group v-model="form.gender">
    <el-radio label="1">男</el-radio>
    <el-radio label="0">女</el-radio>
  </el-radio-group>
  </el-form-item>
  <el-form-item label="学生学院与班级" prop="academy">
      <el-select v-model="form.academy" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.value"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
   <el-form-item label="学生班级" prop="classroom">
   <el-input v-model="form.classroom" style="width: 200px;"></el-input>
  </el-form-item>
   <el-form-item label="学生联系方式" prop="mobilePhone">
    <el-input v-model="form.mobilePhone" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="学生学生卡卡号" prop="studentCardId">
    <el-input v-model="form.studentCardId" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="学生寝室号" prop="domitory">
    <el-input v-model="form.domitory" style="width: 200px"></el-input>
  </el-form-item>
   <el-form-item label="学生紧急联系人" prop="emergencyContact">
    <el-input v-model="form.emergencyContact" style="width: 200px"></el-input>
  </el-form-item>
   <el-form-item label="学生紧急联系人联系方式" prop="emergencyContactMobilePhone">
    <el-input v-model="form.emergencyContactMobilePhone" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="学生邮箱" prop="Email">
    <el-input v-model="form.Email" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item><footer></footer>
    <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
  </el-form-item>
</el-form>
</d2-container>
</template>
<script>
import { addNewStudent } from './index'

export default {
  data () {
    return {
      form: {
        name: '',
        gender: '',
        academy: '',
        classroom: '',
        mobilePhone: '',
        studentCardId: '',
        domitory: '',
        emergencyContact: '',
        emergencyContactMobilePhone: '',
        Email: '',
        role: 1
      },
      options: [{
        value: '信息与电子工程学院'
      }, {
        value: '马克思主义学院'
      }, {
        value: '管理工程与电子商务学院'
      }, {
        value: '环境科学与工程学院'
      }, {
        value: '工商管理学院'
      }, {
        value: '旅游与城乡规划学院'
      }, {
        value: '财务与会计学院'
      }, {
        value: '统计与数学学院'
      }, {
        value: '经济学院'
      }, {
        value: '食品与生物工程学院'
      }, {
        value: '艺术设计学院'
      }, {
        value: '计算机与信息工程学院'
      }, {
        value: '法学院'
      }, {
        value: '人文与传播学院'
      }, {
        value: '公共管理学院'
      }, {
        value: '外国语学院'
      }, {
        value: '东方语言文化学院'
      }, {
        value: '金融学院'
      }
      ],
      rules: {
        name: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        academy: [
          {
            required: true,
            message: '请选择学院与输入班级',
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
        classroom: [
          {
            required: true,
            message: '请输入班级',
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
        studentCardId: [
          {
            required: true,
            message: '请输入学生卡卡号',
            trigger: 'blur'
          },
          {
            min: 10,
            max: 10,
            message: '输入学生卡卡号格式不正确',
            trigger: 'blur'
          }
        ],
        domitory: [
          {
            required: true,
            message: '请输入寝室位置',
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
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          addNewStudent({
            name: this.form.name,
            gender: this.form.gender,
            academy: this.form.academy,
            classroom: this.form.classroom,
            mobilephone: this.form.mobilePhone,
            studentCardId: this.form.studentCardId,
            domitory: this.form.domitory,
            emergencyContact: this.form.emergencyContact,
            emergencyContactMobilePhone: this.form.emergencyContactMobilePhone,
            email: this.form.Email,
            role: this.form.role
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

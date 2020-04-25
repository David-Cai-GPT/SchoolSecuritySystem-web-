<template>
  <d2-container>
    <template slot="header">查询管理教师信息</template>
     <el-table
      :data="Teacherinfomation"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        width="80">
         <template slot-scope="scope">
          <span v-if="scope.row.gender == 1">男</span>
          <span v-else>女</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="academy"
        label="学院"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mobliephone"
        label="移动手机"
        width="200">
      </el-table-column>
      <el-table-column
        prop="teachercardid"
        label="教师卡卡号"
        width="180">
      </el-table-column>
       <el-table-column
        prop="address"
        label="地址"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="250">
      </el-table-column>
      <el-table-column
        prop="work"
        label="工作">
      </el-table-column>
            <el-table-column
        label="操作">
        <template slot-scope="scope">
           <el-button type="primary" @click="editTeacherInfo(scope)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
      <el-dialog
  title="修改教师信息"
  :visible.sync="dialogVisible"
  width="30%">
      <el-form  ref="form" :rules="rules" :model="form" label-width="180px">
  <el-form-item label="教师名称" prop="name">
    <el-input v-model="form.name" style="width: 200px"></el-input>
  </el-form-item>
   <el-form-item label="教师性别" prop="gender">
    <el-radio-group v-model="form.gender">
    <el-radio :label="1">男</el-radio>
    <el-radio :label="0">女</el-radio>
  </el-radio-group>
  </el-form-item>
  <el-form-item label="教师学院与班级" prop="academy">
      <el-select v-model="form.academy" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.value"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
   <el-form-item label="教师联系方式" prop="mobilePhone">
    <el-input v-model="form.mobilePhone" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="教师地址" prop="address">
    <el-input v-model="form.address" style="width: 200px"></el-input>
  </el-form-item>
   <el-form-item label="教师紧急联系人" prop="emergencyContact">
    <el-input v-model="form.emergencyContact" style="width: 200px"></el-input>
  </el-form-item>
   <el-form-item label="教师紧急联系人联系方式" prop="emergencyContactMobilePhone">
    <el-input v-model="form.emergencyContactMobilePhone" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="教师邮箱" prop="Email">
    <el-input v-model="form.Email" style="width: 200px"></el-input>
  </el-form-item>
    <el-form-item label="教师职位" prop="work">
    <el-input v-model="form.work" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item><footer></footer>
    <el-button type="primary" @click="submitForm('form')">立即修改</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
  </el-form-item>
</el-form>
      </el-dialog>
  </d2-container>
</template>

<script>
import { getAllTeacherInformation, editTeacherInformation } from './index'
export default {
  data () {
    return {
      Teacherinfomation: '',
      dialogVisible: false,
      form: {
        name: '',
        gender: 0,
        academy: '',
        mobilePhone: '',
        teacherCardId: '',
        address: '',
        emergencyContact: '',
        emergencyContactMobilePhone: '',
        Email: '',
        role: 1,
        work: ''
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
        teacherCardId: [
          {
            required: true,
            message: '请输入教师卡卡号',
            trigger: 'blur'
          },
          {
            min: 10,
            max: 10,
            message: '输入教师卡卡号格式不正确',
            trigger: 'blur'
          }
        ],
        address: [
          {
            required: true,
            message: '请输入住房位置',
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
            message: '请输入教师职位',
            trigger: 'blur'
          }
        ]
      }

    }
  },
  mounted: function () {
    this.createPage() // 创建页面需要调用的方法
  },
  methods: {
    createPage () {
      getAllTeacherInformation({}).then((response) => {
        this.Teacherinfomation = response
      })
    },
    editTeacherInfo (scope) {
      this.dialogVisible = true
      this.form.name = scope.row.name
      this.form.gender = scope.row.gender
      this.form.mobilePhone = scope.row.mobliephone
      this.form.teacherCardId = scope.row.teachercardid
      this.form.emergencyContact = scope.row.emergencycontact
      this.form.emergencyContactMobilePhone = scope.row.emergencycontactmobilephone
      this.form.Email = scope.row.email
      this.form.work = scope.row.work
      this.form.academy = scope.row.academy
      this.form.address = scope.row.address
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          editTeacherInformation({
            name: this.form.name,
            gender: this.form.gender,
            academy: this.form.academy,
            address: this.form.address,
            mobilephone: this.form.mobilePhone,
            teacherCardId: this.form.teacherCardId,
            emergencyContact: this.form.emergencyContact,
            emergencyContactMobilePhone: this.form.emergencyContactMobilePhone,
            email: this.form.Email,
            role: this.form.role,
            work: this.form.work
          }).then(({ data }) => {
            this.createPage()
            this.dialogVisible = false
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

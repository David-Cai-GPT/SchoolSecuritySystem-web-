<template>
  <d2-container>
    <template slot="header">查询管理职员信息</template>
     <el-table
      :data="EmployeeInformation"
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
        width="180">
         <template slot-scope="scope">
          <span v-if="scope.row.gender == 1">男</span>
          <span v-else>女</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="work"
        label="职位"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mobliephone"
        label="移动手机"
        width="180">
      </el-table-column>
      <el-table-column
        prop="employeecardid"
        label="职员卡卡号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="200">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
           <el-button type="primary" @click="editEmployeeInfo(scope)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
     <el-dialog
  title="修改职员信息"
  :visible.sync="dialogVisible"
  width="30%">
     <el-form  ref="form" :rules="rules" :model="form" label-width="180px">
  <el-form-item label="职员名称" prop="name">
    <el-input v-model="form.name" style="width: 200px"></el-input>
  </el-form-item>
   <el-form-item label="职工性别" prop="gender">
    <el-radio-group v-model="form.gender">
    <el-radio :label="1">男</el-radio>
    <el-radio :label="0">女</el-radio>
  </el-radio-group>
  </el-form-item>
   <el-form-item label="职工联系方式" prop="mobilePhone">
    <el-input v-model="form.mobilePhone" style="width: 200px"></el-input>
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
    <el-button type="primary" @click="submitForm('form')">立即修改</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
  </el-form-item>
</el-form>
  </el-dialog>
  </d2-container>
</template>

<script>
import { getAllEmployeeInformation, editEmployeeInformation } from './index'
export default {
  data () {
    return {
      EmployeeInformation: '',
      dialogVisible: false,
      form: {
        name: '',
        gender: 0,
        mobilePhone: '',
        employeeCardId: '',
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
  mounted: function () {
    this.createPage() // 创建页面需要调用的方法
  },
  methods: {
    createPage () {
      getAllEmployeeInformation({}).then((response) => {
        this.EmployeeInformation = response
      })
    },
    editEmployeeInfo (scope) {
      console.log(scope.row)
      this.dialogVisible = true
      this.form.name = scope.row.name
      this.form.gender = scope.row.gender
      this.form.mobilePhone = scope.row.mobliephone
      this.form.employeeCardId = scope.row.employeecardid
      this.form.emergencyContact = scope.row.emergencycontact
      this.form.emergencyContactMobilePhone = scope.row.emergencycontactmobilephone
      this.form.Email = scope.row.email
      this.form.domitory = scope.row.domitory
      this.form.work = scope.row.work
      this.form.address = scope.row.address
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          editEmployeeInformation({
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

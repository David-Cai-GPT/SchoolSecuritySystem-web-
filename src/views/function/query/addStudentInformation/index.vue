<template>
<d2-container>
    <el-row>
      <el-col :span="12">
        <h2 class="d2-mt-0">新增管理学生信息</h2>
      </el-col>
    </el-row>
      <el-form ref="form" :rules="rules" :model="form" label-width="150px">
  <el-form-item label="学生名称" prop="name">
    <el-input v-model="form.name" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="学生学院" prop="academy">
    <el-input v-model="form.academy" style="width: 200px"></el-input>
  </el-form-item>
   <el-form-item label="学生联系方式" prop="mobilephone">
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
export default {
  data () {
    return {
      form: {
        name: '',
        gender: '',
        acedemy: '',
        classroom: '',
        mobilePhone: '',
        studentCardId: '',
        domitory: '',
        emergencyContact: '',
        emergencyContactMobilePhone: '',
        Email: ''
      }
    }
  }
}
</script>

 <template>
 <d2-container>
<div style="margin: 20px;"></div>
<el-form  label-width="80px" :rules="rules" :model="car" ref="car">
  <el-form-item label="车牌号"  style="width: 300px" prop="number">
    <el-input v-model="car.number"></el-input>
  </el-form-item>
  <el-form-item><footer></footer>
    <el-button type="primary" @click="submitForm('car')">立即申请</el-button>
  </el-form-item>
</el-form>
 </d2-container>
</template>

<script>
import { CarRecord } from '.'
export default {
  data () {
    return {
      car: {
        number: ''
      },
      rules: {
        number: [
          { required: true, message: '请输入车牌号', trigger: 'blur' },
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
          CarRecord({
            carNumber: this.car.number
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

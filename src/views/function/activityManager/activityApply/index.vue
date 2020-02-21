<template>
  <d2-container>
    <el-row>
      <el-col :span="12">
        <h2 class="d2-mt-0">活动申报</h2>
      </el-col>
    </el-row>
    <el-form ref="form" :model="form" label-width="120px">
  <el-form-item label="活动名称">
    <el-input v-model="form.activityName" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-input v-model="form.place" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="活动开始时间">
    <el-col :span="4">
      <el-date-picker type="date" placeholder="选择开始日期" v-model="form.startDate" style="width: 200px;"></el-date-picker>
    </el-col>
    <el-col :span="4">
      <el-time-picker placeholder="选择开始时间" v-model="form.startTime" style="width: 200px;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="活动结束时间">
    <el-col :span="4">
      <el-date-picker type="date" placeholder="选择结束日期" v-model="form.endDate" style="width: 200px;"></el-date-picker>
    </el-col>
    <el-col :span="4">
      <el-time-picker placeholder="选择结束时间" v-model="form.endTime" style="width: 200px;"></el-time-picker>
    </el-col>
  </el-form-item>
   <el-form-item label="申请人姓名">
    <el-input v-model="form.applicantName" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="申请人联系方式">
    <el-input v-model="form.applicanttel" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="活动级别">
    <el-checkbox-group v-model="form.rank">
      <el-checkbox label="省级" name="rank" value='0'></el-checkbox>
      <el-checkbox label="市级" name="rank" value='1'></el-checkbox>
      <el-checkbox label="校级" name="rank" value='2'></el-checkbox>
      <el-checkbox label="院级" name="rank" value='3'></el-checkbox>
      <el-checkbox label="其他" name="rank" value='4'></el-checkbox>
    </el-checkbox-group>
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
   <el-form-item label="活动类别">
    <el-input v-model="form.type" style="width: 200px"></el-input>
  </el-form-item>
  <el-form-item label="活动描述">
    <el-input type="textarea" v-model="form.activityDescription" style="width: 300px"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
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
        avtivityName: '',
        place: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        applicantName: '',
        type: '',
        rank: '',
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

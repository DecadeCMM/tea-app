<template>
  <div class="our">
    <el-row class="formContent">
      <el-col :span="12" :offset="6">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item prop="name" >
            <el-input v-model="ruleForm.name" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item prop="tel">
            <el-input v-model="ruleForm.name" placeholder="联系电话"></el-input>
          </el-form-item>
          <el-form-item  prop="region">
            <el-input v-model="ruleForm.name" placeholder="意向区域"></el-input>
          </el-form-item>
          <el-form-item  prop="resource">
            <el-select v-model="ruleForm.region" placeholder="请选择有无房源" style="width:100%" >
              <el-option label="有" value="shanghai"></el-option>
              <el-option label="无" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item  prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc" placeholder="备注"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        ruleForm: {
          name: '',
          tel:'',
          region: '',
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          tel: [
            { required: true, message: '请输入联系电话', trigger: 'blur' },
          ],
          region: [
            { required: true, message: '请选择区域', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择房源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写备注', trigger: 'blur' }
          ]
        }
      }
    }
  }
</script>
<style scoped>
  .our{
    width:100%;
    background-color:#f5f5f5;
  }
  .our .el-form{
    margin:50px auto;
    background-color:#fff;
    text-align: center;
    padding:30px;
  }
</style>


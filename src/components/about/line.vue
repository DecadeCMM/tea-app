<template>
  <div class="line">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item prop="region" class="select">
        <el-select v-model="ruleForm.region" size="medium" placeholder="反馈主题">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="email" :rules="[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
        ]">
        <el-input v-model="dynamicValidateForm.email" placeholder="请输入邮箱地址"></el-input>
      </el-form-item>
      <el-form-item  prop="desc">
        <el-input type="textarea" rows="10" placeholder="反馈内容" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    name:'line',
    data() {
      return {
        ruleForm: {
          region: '',
          email:'',
          desc: ''
        },
        rules: {
          region: [
            { required: true,message:'请选择反馈主题',trigger:'change' }
          ],
          desc: [
            { required: true, message: '请填写反馈内容', trigger: 'blur' }
          ],
        },
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        }
      }
    },
    methods: {
       submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }

  }
</script>
<style>
.line{
  width:50%;
  margin:30px auto;
  /* background-color */
}
el-form .select{
  width:100%;
}
</style>


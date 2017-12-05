<template>
  <div class="login">
    <header>
      <el-row class="header">
        <el-col :xs="{span:18}" :sm="{span:16,offset:3}" :md="{span:16,offset:3}" :lg="{span:16,offset:3}" :xl="{span:16,offset:3}">
          <img src="/static/img/logo.png" alt="">
          <span class="remmber">会员注册</span>
        </el-col>
        <el-col :xs="6" :sm="2" :md="2" :lg="2" :xl="2">
          <router-link to="/">返回首页</router-link>
        </el-col>
      </el-row>
    </header>
    <div class="formList">
      <el-row>
        <el-col :span="8" :offset="8">
          <el-form :model="ruleForm2" label-position="left" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="会 员  名"  prop="user_name">
              <el-input v-model="ruleForm2.user_name" placeholder="请输入会员名"></el-input>
            </el-form-item>
            <el-form-item label="密   码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" placeholder="请输入密码" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" placeholder="请确认密码" auto-complete="off"></el-input>
            </el-form-item>
            <p>基本资料</p>
              <el-form-item label="手机号" prop="mobile">
                <el-input  v-model="ruleForm2.mobile" placeholder="请输入手机号" ></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                  <el-input v-model="ruleForm2.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="昵称" prop="nick_name" >
                  <el-input v-model="ruleForm2.nick_name" placeholder="请输入昵称"></el-input>
                </el-form-item>
                 <el-form-item class="subButton">
                  <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                </el-form-item>
                <router-link to="/signin" >已有账号?</router-link>
            </el-form>
      </el-col>
      </el-row>
    </div>
    <footer>
      <el-row>
        <el-col :span="20" :offset="2">
          <p>茶叶公司 版权所有 2008-2014 湘ICP备888888</p>
          <p>本页面内容为网站演示数据,前台页面内容都可以在后台修改</p>
        </el-col>
      </el-row>
    </footer>
  </div>
</template>
<script>
import {getSave,save} from './../services/member'
  export default{
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          user_name: '',
          email:'',
          mobile:'',
          nick_name:'',
        },
        rules2: {
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符或数字', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true, message: '请确认密码', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符或数字', trigger: 'blur' },
            { validator: validatePass2, trigger: 'blur' }
          ],
          user_name: [
            { required: true, message: '请输入会员名', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符或数字', trigger: 'blur' },
            // { validator: checkName, trigger: 'blur' }
          ],
          email:[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
          ],
          mobile:[
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { pattern:/^1[3|4|5|8][0-9]\d{8}$/,message:'手机号格式不对',trigger:'blur'},
          ]
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm2.user_name)
            getSave(this.ruleForm2.user_name)
            .then(res=>{
              console.log(res.data)
              if(res.data.status == 'y'){
                console.log(this.ruleForm2.user_name)
                save(this.ruleForm2)
                .then(res=>{
                  if(res.data.status == 'y'){
                    this.$router.push({
                      path:'/signin'
                    })
                  }
                  else{
                    alert(res.data.msg)
                  }
                })
              }else{
                alert(res.data.mes)
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
.login{
  background-color:#f5f5f5;
}
.header{
  line-height:100px;
  background-color: #fff;
}
.header img{
  vertical-align: middle;
}
.remmber{
  font-size:24px;
  margin-left:20px;
  border-left:2px solid lightgray;
  padding-left:20px;
}
.header a{
  color:#62A8EA;
}
@media screen and (max-width:768px) {
  .remmber{
    display: none;
  }
}
.el-form{
  background-color:#fff;
  margin-top:50px;
  margin-bottom:50px;
  padding:30px;
}
.subButton .el-form-item__content{
  margin-left:0 !important;
}
.el-button{
  width:100%;
}
.formList a{
  float:right;
}
.formList p{
  line-height: 50px;
  text-align: center;
  border-top:1px solid lightgray;
  font-size:28px;
}
footer{
  background-color:#fff;
  text-align: center;
  padding-top:30px;
}
footer p{
  line-height:30px;
}
</style>


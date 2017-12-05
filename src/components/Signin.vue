<template>
  <div class="sign">
    <header>
      <el-row class="header">
        <el-col :xs="{span:18}" :sm="{span:16,offset:3}" :md="{span:16,offset:3}" :lg="{span:16,offset:3}" :xl="{span:16,offset:3}">
          <img src="/static/img/logo.png" alt="">
          <span class="remmber">会员登录</span>
        </el-col>
        <el-col :xs="6" :sm="2" :md="2" :lg="2" :xl="2">
          <router-link to="/">返回首页</router-link>
        </el-col>
      </el-row>
    </header>
    <div class="content">
      <div class="formList">
      <el-row>
        <el-col :span="8" :offset="8">
          <el-form  :model="ruleForm" ref="ruleForm" :rules="rules" class="demo-ruleForm">
            <el-form-item  prop="user_name">
              <el-input v-model="ruleForm.user_name" placeholder="用户名/邮箱/手机"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
              <el-input type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="密码"></el-input>
            </el-form-item>
            <router-link to="/" class="forget" >忘记密码?</router-link>
            <el-form-item class="subButton">
              <el-button class="firstButton" type="primary" @click="submitForm('ruleForm2')">登录</el-button>
              <el-button class="secondButton" type="primary"> <router-link to="/login" >没有账号?现在去注册</router-link> </el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      </div>
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
<script scoped>
  import {sign} from './../services/member'
  export default{
    data() {
      return{
        ruleForm:{
          user_name:'',
          pass:'',
        },
        rules:{
          user_name:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          pass:[
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
        submitForm(formName) {
              sign(this.ruleForm)
                .then(res=>{
                  if(res.data.status == 'y'){
                    this.$cookie.set('userName',this.ruleForm.user_name,1)
                    console.log(this.$cookie.get('userName'))
                    this.$router.push({
                      path:'/'
                    })
                  }
                  else{
                    alert(res.data.msg)
                  }
              })
    }
  }
}
</script>
<style>
.sign{
  background-color:#f5f5f5;
}
.sign .header{
  line-height:100px;
  background-color: #fff;
}
 .sign .header img{
  vertical-align: middle;
}
.sign .remmber{
  font-size:24px;
  margin-left:20px;
  border-left:2px solid lightgray;
  padding-left:20px;
}
.sign .header a{
  color:#62A8EA;
}
@media screen and (max-width:768px) {
  .remmber{
    display: none;
  }
}
.sign .el-form{
  background-color:#fff;
  margin-top:50px;
  margin-bottom:50px;
  padding:30px;
}
.sign .subButton .firstButton{
  margin-left:0 !important;
  margin-bottom:10px;
  margin-top:10px;
}
.sign .subButton .secondButton{
  margin-left:0 !important;
  margin-bottom:10px;

}
.sign .subButton .secondButton a{
  color:#fff;
  text-decoration: none;
}
 .sign .el-button{
  width:100%;
}
.sign .forget{
  float:right;
}
.sign .formList p{
  line-height: 50px;
  text-align: center;
  border-top:1px solid lightgray;
  font-size:28px;
}
.sign footer{
  background-color:#fff;
  text-align: center;
  padding-top:30px;
}
.sign footer p{
  line-height:30px;
}

</style>


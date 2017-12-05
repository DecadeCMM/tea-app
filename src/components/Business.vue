<template>
  <div class="business">
    <my-header></my-header>
    <div class="businessContainer">
      <el-row class="aboutBanner">
        <el-col class="banner" :span="24">
          <img src="/static/img/business.jpg" alt="">
        </el-col>
      </el-row>
      <el-row class="businessLink">
        <el-col :span="24">
          <router-link class="link" to="/business">加盟流程&#X3000</router-link>
          <router-link class="link" to="/business/policy">加盟政策&#X3000</router-link>
          <router-link class="link" to="/business/advantage">加盟优势&#X3000</router-link>
          <router-link class="link" to="/business/our">加入我们&#X3000</router-link>
        </el-col>
      </el-row>
      <el-row class="businessLink">
        <el-col :span="24" >
        <router-view></router-view>
       </el-col>
      </el-row>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
  export default{

  }
</script>
<style scoped>
.business .aboutBanner{
  margin-top:60px;
}
.aboutBanner .banner{
  width:100%;
}
.aboutBanner .banner img{
  width:100%;
  height:100%;
}
.business .businessLink{
  text-align: center;
  line-height: 50px;
  border-bottom:1px solid lightgray;
}
.aboutBanner a{
  color:#333;
  text-decoration: none;
}
/* .aboutUs a:hover{
  color:steelblue;
} */
.businessLink .link{
  color:gray;
  text-decoration: none;
}
.businessLink .router-link-exact-active{
  color:#62A8EA;

}
</style>


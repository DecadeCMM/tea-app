<template>
  <div class="about">
    <my-header></my-header>
    <div class="aboutUs">
      <el-row class="aboutBanner">
        <el-col class="banner" :span="24">
          <img src="/static/img/aboutBanner.jpg" alt="">
        </el-col>
      </el-row>
      <el-row class="aboutLink">
        <el-col :span="24">
          <router-link class="link" to="/about">公司简介&#X3000</router-link>
          <router-link class="link" to="/about/line">在线反馈&#X3000</router-link>
          <router-link class="link" to="/about/contact">联系我们</router-link>
        </el-col>
      </el-row>
      <el-row  class="content">
        <el-col :span="24">
          <router-view></router-view>
       </el-col>
      </el-row>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
  export default {
    name:'about',
    data() {
      return {

      }
    }
  }
</script>
<style scoped>
.aboutUs .aboutBanner{
  margin-top:60px;
}
.aboutUs .banner{
  width:100%;
}
.aboutUs .banner img{
  width:100%;
  height:100%;
}
.aboutUs .aboutLink{
  text-align: center;
  line-height: 50px;
  border-bottom:1px solid lightgray;
}
.aboutUs .content{
  margin:50px auto;
}
.aboutUs a{
  color:#333;
  text-decoration: none;
}
/* .aboutUs a:hover{
  color:steelblue;
} */
.aboutLink .link{
  color:gray;
  text-decoration: none;
}
.aboutLink .router-link-exact-active{
  color:#62A8EA;

}

</style>


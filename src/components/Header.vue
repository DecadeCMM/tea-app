<template>
   <header>
      <nav class="commom">
        <img class="logo" src="./../../static/img/logo.png" alt="">
        <div class="login" ref="div">
          <el-button type="success"><router-link to="/login">注册</router-link></el-button>
          <el-button type="primary" plain><router-link to="/signin" style="color:black">登录</router-link></el-button>
        </div>
        <div class="login exit" ref="div2">
          <el-button type="success" @click="back()">退出</el-button>
        </div>
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal" >
          <el-menu-item index="1">
            <router-link to="/">
            网站首页
            </router-link>
            </el-menu-item>
          <el-submenu index="2">
            <template slot="title"><router-link to="/about">关于我们</router-link></template>
            <el-menu-item index="2-1"><router-link to="/about">公司简介</router-link></el-menu-item>
            <el-menu-item index="2-2"><router-link to="/about/line">在线反馈</router-link></el-menu-item>
            <el-menu-item index="2-3"><router-link to="/about/contact">联系我们</router-link></el-menu-item>
          </el-submenu>
          <el-menu-item index="3"><router-link to="/business">招商联盟</router-link></el-menu-item>
          <el-menu-item index="4"><router-link to="/news">新闻资讯</router-link></el-menu-item>
          <el-submenu index="5">
            <template slot="title"><router-link to="/product">产品展示</router-link></template>
            <el-menu-item index="2-index+1" @click="changeIndex(index,item._id)" :class="{'router-link-active':indexNav==index}" v-for="(item,index) in list" :key="item.id">
              <a>{{item.name}}</a>
            </el-menu-item>
            <!-- <el-menu-item index="2-2"><router-link to="/product/lv">绿茶系列</router-link></el-menu-item>
            <el-menu-item index="2-3"><router-link to="/product/hei">黑茶系列</router-link></el-menu-item>
            <el-menu-item index="2-3"><router-link to="/product/flower">花果茶茶系列</router-link></el-menu-item> -->
          </el-submenu>
        </el-menu>
      </nav>
    </header>
</template>
<script>
import {getGoodsType} from '../services/goods_type'
export default{
  data(){
    return{
      list:[],
      indexNav:0,
    }
  },
  created(){
    getGoodsType().then(res=>{
      console.log(res.data.data)
      this.list=res.data.data;
      // console.log(this.list)
    });
  },
  mounted(){
    if(this.$cookie.get('userName') != null){
      this.$refs.div.style.display = 'none'
    }
    else{
      this.$refs.div2.style.display = 'none'
    }
  },
   methods: {
     back(){
       this.$cookie.delete('userName')
       window.location.reload()
     },
    changeIndex(value,id) {
      console.log( 'id' , id )
      this.indexNav = value;
      switch(value) {
        case 0:
        this.$router.push({path:'/product'})
        break;
        case 1:
        this.$router.push({path:'/product/qing',query:{id}})
        break;
        case 2:
        this.$router.push({path:'/product/lv',query:{id}})
        break;
        case 3:
        this.$router.push({path:'/product/hei',query:{id}})
        break;
        case 4:
        this.$router.push({path:'/product/flower',query:{id}})
        break;
      }

    },
  //   toDetail(id){
  //     this.$router.push({
  //       path:'Detail',
  //       query:{ id }
  //     })
  //   }
  // }
}
}
</script>
<style scoped>
header {
  height: 100%;
}
nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  z-index: 9999;
  background-color: #fff;
}
nav .login {
  display: inline-block;
  float:right;
  margin-right:15%;
  margin-top:1%;
}
.login a{
  color:#fff;
  text-decoration: none;
}
.el-menu-demo a{
  color:gray;
  text-decoration: none;
}
.el-menu {
  float: right;
  right: 2%;
}
.el-menu-demo {
  background-color: white;
  display: inline-block;
}
.el-submenu .el-menu-item{
  width:50px;
}

@media screen and(max-width:1150px) {
  .common .login {
    margin-right:2%;
    }
  }

</style>


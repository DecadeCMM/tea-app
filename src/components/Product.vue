<template>
  <div id="product">
    <my-header></my-header>
    <div class="productContainer">
      <el-row class="banner">
        <el-col :span="24">
          <img src="/static/img/product.jpg" alt="">
        </el-col>
      </el-row>
      <el-row class="listLink">
        <el-col :span="12" :offset="6">
         <a @click="changeIndex(index,list._id)"  :class="{'router-link-active':indexNav==index}" class="link" v-for="(list,index) in types" :key="list._id">{{list.name}}</a>
        </el-col>
      </el-row>
      <el-row class="search">
        <el-col :span="10" :offset="7">
          <el-input placeholder="search" suffix-icon="el-icon-search"></el-input>
        </el-col >
      </el-row>
      <el-row class="productImg">
        <el-col :span="16" :offset="4">
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>
    <my-footer></my-footer>
  </div>
  </template>
  <script>
  import {getGoodsType} from '../services/goods_type'
  export default {
    data(){
      return{
        types:[],
        indexNav:0,
      }
    },
    created(){
    getGoodsType().then(res=>{
      this.types=res.data.data;
    });
    },
    methods: {
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
    }
  }
  }
  </script>
  <style>
  .productContainer .banner{
    margin-top:60px;
  }
  #product .banner img{
    width:100%;
    height:100%;
  }
  .listLink{
    text-align: center;
    line-height:50px;

  }
  .listLink .el-col a{
    padding:0 10px;
    color:gray;
    text-decoration: none;
  }
  .listLink .el-col a:hover{
    color:#62A8EA;
  }
  .router-link-active{
    color:#62A8EA;
  }
  .search{
    line-height: 60px;
  }
  .productImg{
    background-color: #f5f5f5;
  }
  .productImg .el-col{
    margin-top:20px;
    margin-bottom:20px;
    text-align: center;
  }
  </style>



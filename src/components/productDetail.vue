<template>
  <div class="productDetail">
    <my-header></my-header>
    <div class="detail">
      <el-row class="drowLink">
        <el-col :span="16" :offset="4">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }"><i class="iconfont icon-shouye1"></i>网站首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/product' }">产品展示</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
      <el-row class="description">
        <el-col :span="8" :offset="4">
          <img :src="url+list.img" alt="">
        </el-col>
        <el-col :span="8" class="right">
          <div>
            <div class="message">
              <p class="title">{{list.name}}</p>
              <p class="des">{{list.description}}</p>
            </div>
            <div class="basicM">
              <div>
                <span class="weight">净含量 : {{list.net_weight | weight}}</span>
                <span class="rank">质量等级 : {{list.rank}}</span>
                <p class="price">建议零售价 : {{list.price | price}}</p>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row class="content">
        <el-col :span="16" :offset="4">
          <p class="conDetail">详细信息</p>
          <div v-html="list.content"></div>
        </el-col>
      </el-row>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import {getProduct} from './../services/goodsProduct'
import {server} from './../utils/config'
  export default{
    data(){
      return{
        list:[],
        url:server
      }
    },
    created(){
      console.log(this.$route.query.pDid)
      getProduct(this.$route.query.pDid)
        .then(res=>{
          console.log(res.data.data)
          this.list = res.data.data
          let txtReg = new RegExp(`src="/uploads`,'g');
          this.list.content = this.list.content.replace(txtReg,`src="${this.$serverUrl}/uploads`)
        })
    },
    filters:{
      weight(val){
        return val + 'g'
      },
      price(val){
        return '¥'+val
      }
    }
  }
</script>
<style>
  .detail{
    margin-top:60px;
    background-color:#f5f5f5;
  }
  .drowLink{
   padding-top:10px;
    padding-bottom:10px;
  }
  .iconfont{
    margin-right:10px;
    color:blue;
    font-size:20px;
  }
  .el-breadcrumb{
    font-size:16px;
  }
  .description{
    background-color: #fff;
    margin-bottom:20px;
  }
  .description img{
    width:70%;
  }
  .description .right{
    margin-left:20px;
  }
  .description .message{
    border-bottom:1px solid #eee;
    padding-bottom:20px;
    margin-bottom:20px;
  }
  .message .title{
    font-size:30px;
    line-height: 80px;
  }
  .message .des{
    font-size:15px;
    line-height: 23px;
    color:gray;
  }
  .description .basicM {
    font-size:14px;
    color:gray;
    margin-left:20px;
  }
  .description .basicM .rank{
    margin-left:35%;
  }
  .description .basicM .price{
    line-height: 50px;
  }
  .detail .content .conDetail{
    font-size:20px;
    line-height: 50px;
    border-bottom:1px solid lightgray;
    padding-left:20px;
    margin-bottom:20px;
  }
  .detail .content .el-col{
    background-color:#fff;
    padding:20px;
    margin-bottom:20px;
  }

</style>


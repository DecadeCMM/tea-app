<template>
  <div class="all">
    <el-row>
      <el-col :span="6" v-for="item in images" :key="item.title" >
         <transition name="el-zoom-in-top">
           <router-link :to="{name:'pD',query:{pDid:item._id}}" >
            <el-card class="transition-box" :body-style="{ padding: '0px' }">
              <img :src="url+item.img" class="image">
              <div style="padding: 14px;">
                <span>{{item.name}}</span>
              </div>
            </el-card>
          </router-link>
         </transition>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {getGoodsAll} from './../../services/goods'
import {server} from '../../utils/config'
  export default{
    name:"all",
    data(){
      return {
        images:[],
        url:server
      }
    },
    created(){
      getGoodsAll().then(res=>{
          console.log(res.data.data)
          this.images = res.data.data
        })
    }
  }
</script>
<style scoped>
.all .el-card{
  margin:10px;
}
.all .el-card img{
  width:70%;
}
.all .el-card span{
  margin-bottom:0px;
}
</style>

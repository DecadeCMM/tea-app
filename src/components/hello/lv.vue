<template>
  <div class="lv">
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
import {getGoods} from './../../services/goods';
import {server} from '../../utils/config'
  export default{
    name:"lv",
    data(){
      return {
        images:[],
        url:server
      }
    },
    created(){
      getGoods(this.$route.query.id)
      .then(res=>{
        this.images = res.data.data
      })
    }
  }
</script>
<style scoped>
.el-card{
  margin:10px;
}
.el-card img{
  width:70%;
}
.el-card span{
  margin-bottom:0px;
}
</style>

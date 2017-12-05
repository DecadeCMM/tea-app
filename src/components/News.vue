<template>
  <div id="news">
    <my-header></my-header>
    <div class="newsContainer">
      <el-row>
        <el-col :span="24" class="img">
          <img src="/static/img/news.jpg" alt="">
        </el-col>
      </el-row>
    <el-row :gutter="40" class="container">
      <el-col class="left" :xs="{span:20,offset:2}" :sm="{span:20,offset:2}" :md="13" :lg="13" :xl="13" :offset="3">
        <div class="leftContent" v-for="item in articles" :key="item.title">
          <div class="article">
             <img :src="url+item.img" alt="">
             <div class="text">
               <p class="title"><a @click="toDetail(item._id)">{{item.title}}</a></p>
               <p class="description">{{item.description}}</p>
                <span>{{moment(item.created_at).format('YYYY-MM-DD HH:MM:SS')}}</span>
                <span>{{item.author}}</span>
                <span>{{item.visit}}</span>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <!-- <div class="block">
              <el-pagination
                layout="prev, pager, next"
                :total="50">
              </el-pagination>
            </div> -->
      </el-col>
      <el-col class="right" :xs="{span:20,offset:2}" :sm="{span:20,offset:2}" :md="5" :lg="5" :xl="5">
        <el-input placeholder="search" suffix-icon="el-icon-search"></el-input>
        <div>
          <p class="recommed">为你推荐</p>
          <ul>
            <li v-for="item in articles" :key="item.title"><a @click="toDetail(item._id)">{{item.title}}</a></li>
          </ul>
        </div>
        <div class="newsRightLink">
          <p><a href="#">所有新闻</a></p>
          <p><a href="#">公司动态</a></p>
          <p><a href="#">业界资讯</a></p>
        </div>
      </el-col>
    </el-row>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import {getArticleList} from './../services/article_list'
import {server} from './../utils/config'
  export default{
    data() {
      return {
        articles:[],
        url:server
      }
    },
    created(){
      getArticleList()
      .then(res=>{
        this.articles= res.data.data
      })
    },
    methods:{
      toDetail(id){
      this.$router.push({
        path:'Detail',
        query:{ id }
      })
    }
    }
  }
</script>
<style scoped>
  #news{
    width:100%;
    background-color:#f5f5f5;
  }
  #news .newsContainer .img{
    margin-top:60px;
  }
   #news .newsContainer img{
    width:100%;
    height:100%;
  }
  .left{
    margin-top:50px;
    margin-bottom:50px;
  }
  .right{
    margin-top:50px;
    /* width:100%; */
    margin-left:30px;
  }
  .left ,.right{
    background-color:#fff;
  }
  .leftContent{
    padding:40px 20px 20px 20px;
    border-bottom:1px solid lightgray;
  }
  .article img{
    width:20%;
    float: left;
    margin-right:20px;

  }
  .title a{
    cursor: pointer;
    line-height: 40px;
  }
  .title a:hover{
    color:#62A8EA;
  }
  .leftContent .text{
    line-height:30px;
    text-align: left;
    margin-left:20px;
}
.article .title{
  line-height: 30px;
  font-size:24px;
}
/* 使多余的文字让省略号显示 */
.description{
  width: 75%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.text span{
  margin-right:10px;
}
.left .block{
  text-align: center;
  padding-top:50px;
  padding-bottom:50px;
  margin-bottom:40px;
}
.clear{
  clear: both;
}
.el-input{
  margin-top:20px;
  margin-bottom:20px;
}
.el-input-inner{
  border-radius: 10px;
}
.recommed{
  padding-top:20px;
  border-top:1px solid lightgray;
  margin-bottom:20px;
  font-size: 20px;
}
ul{
  border:1px solid lightgray;
  margin-bottom:20px;
}
ul li{
  padding:10px 20px;
  border-bottom:1px solid lightgray;
}
ul li:nth-last-child(){
  border-bottom:none;
}
ul li a,.newsRightLink p a{
  color:#555;
}
ul li a:hover,.newsRightLink p a:hover{
  color:#62A8EA;
}
.newsRightLink{
margin:20px 10px;
line-height: 30px;
padding-top:20px;
border-top:1px solid lightgray;
}
</style>


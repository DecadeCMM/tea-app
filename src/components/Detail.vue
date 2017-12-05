<template>
  <div class="detail">
    <my-header></my-header>
      <div class="detail-content">
        <el-row  class="container">
          <el-col class="left" :xs="{span:20,offset:2}" :sm="{span:20,offset:2}" :md="15" :lg="15" :xl="15" :offset="2">
            <div class="leftContent">
              <div class="article">
                <div class="headerTitle">
                  <p class="title">{{article.title}}</p>
                  <span>{{moment(article.created_at).format('YYYY-MM-DD HH:MM:SS')}}</span>
                  <span>{{article.author}}</span>
                  <span>{{article.visit}}</span>
                </div>
                <div class="htmlContent" v-html="article.content">
                </div>
                <div>
                  <a></a>
                  <a href=""></a>
                </div>
                <div class="clear"></div>
              </div>
            </div>
          </el-col>
          <el-col class="right" :xs="{span:20,offset:2}" :sm="{span:20,offset:2}" :md="5" :lg="5" :xl="5">
            <el-input placeholder="search" suffix-icon="el-icon-search"></el-input>
            <div>
              <p class="recommed">为你推荐</p>
              <ul>
                <li v-for="item in title" :key="item.title"><a @click="toDetail(item._id)">{{item.title}}</a></li>
              </ul>
            </div>
            <div class="newsRightLink">
              <p><router-link to="/news">所有新闻</router-link></p>
              <p><a href="#" router-link-active>公司动态</a></p>
              <p><router-link to="/news">业界资讯</router-link></p>
            </div>
          </el-col>
        </el-row>
      </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import {getDetail,getArticleList} from '../services/article_list'
import moment from 'moment'
import server from '../utils/config'
export default({
  data(){
    return{
      article:[],
      title:[],
      url:server,
    }
  },
  methods:{
    toDetail(id){
      this.$router.push({
        path:'Detail',
        query:{ id }
      })
    }
  },
  created(){
    getDetail(this.$route.query.id)
    .then(res=>{
      console.log(res.data.data.content)
      this.article = res.data.data
      let txtReg = new RegExp(`src="/uploads`,'g');
      this.article.content = this.article.content.replace(txtReg,`src="${this.$serverUrl}/uploads`)
    })
    getArticleList()
      .then(res=>{
        this.title= res.data.data
      })
  },
})
</script>
<style>
  .detail{
    width:100%;
    background-color:#f5f5f5;
  }
  .detail-content{
    width:90%;
    margin:0 auto;
    margin-bottom:50px;

  }
  .detail .container{
    margin-top:60px;
    background-color: #f5f5f5;
  }
  .leftContent .title{
    font-size:30px;
    line-height: 60px;
  }
  .leftContent img{
    width:100%;
  }
  .leftContent span{
    margin-right:20px;
    color:gray;
  }
  .leftContent .headerTitle{
    margin-bottom:20px;
    padding-bottom:20px;
    border-bottom:1px solid lightgray;
  }
  .htmlContent{
    line-height: 30px;
    padding-bottom:50px;
    border-bottom:1px solid lightgray;
  }
  .left{
    margin-top:50px;
    padding:30px;
  }
  .right{
    margin-top:50px;
    margin-left:30px;
    padding:0 20px 20px;
  }
  .left ,.right{
    background-color:#fff;
  }
.clear{
  clear: both;
}
.right .el-input{
  margin-top:20px;
  margin-bottom:20px;
}
.right .el-input-inner{
  border-radius: 10px;
}
.right .recommed{
  padding-top:20px;
  border-top:1px solid lightgray;
  margin-bottom:20px;
  font-size: 20px;
}
.right ul{
  border:1px solid lightgray;
  margin-bottom:20px;
}
 .right ul li{
  padding:10px 20px;
  /* line-height: 50px; */
  border-bottom:1px solid lightgray;
}
.right ul li:nth-last-child(){
  border-bottom:none;
}
.right ul li a,.newsRightLink p a{
  color:#555;
}
.right ul li a:hover,.newsRightLink p a:hover{
  color:#62A8EA;
}
.right .newsRightLink{
margin:20px 10px;
line-height: 30px;
padding-top:20px;
border-top:1px solid lightgray;
}
</style>


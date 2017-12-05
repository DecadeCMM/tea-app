<template>
  <div class="hello">
    <my-header></my-header>
    <div class="block">
        <el-carousel :height="cHeight">
          <el-carousel-item v-for="item in images" :key="item">
            <img :src="item" sizes="(max-width: 767px) 767px" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    <div class="clear"></div>
    <div class="joinUS">
      <el-row>
        <el-col class="el-title" :span="24">
          <div class="grid-content bg-purple-dark">招商加盟</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="el-smallTitle" :span="24">
          <div class="grid-content bg-purple-dark">Join us</div>
        </el-col>
      </el-row>
      <el-row class="joinin">
        <el-col :span="5" :offset="2">
          <router-link to="/business">
            <div class="grid-content bg-purple">
              <img src="/static/img/jiameng.png"  alt="">
              <p class="join-title">加盟流程</p>
              <p class="join-content">加盟商在工程人员指导下按统一终端视觉标准装修店面</p>
            </div>
          </router-link>
        </el-col>
        <el-col :span="5">
          <router-link to="/business/policy">
            <div class="grid-content bg-purple-light">
              <img src="/static/img/policy.png" alt="">
              <p class="join-title">加盟政策</p>
              <p class="join-content">"以加盟商为本"与"多支持,少控制"两大加盟管理原则</p>
            </div>
          </router-link>
        </el-col>
        <el-col :span="5">
          <router-link to="/business/advantage">
          <div class="grid-content bg-purple">
            <img src="/static/img/advantage.png" alt="">
            <p class="join-title">加盟优势</p>
            <p class="join-content">沃尔玛,三井,史泰博,华润万家等多家世界五百强企业的合作伙伴</p>
          </div>
          </router-link>
        </el-col>
        <el-col :span="5">
          <router-link to="/business/our">
          <div class="grid-content bg-purple-light">
            <img src="/static/img/joinus.png" alt="">
            <p class="join-title">加入我们</p>
            <p class="join-content">此刻我们期待您的假如</p>
          </div>
          </router-link>
        </el-col>
      </el-row>

    </div>
    <div class="product">
      <el-row class="product-header">
        <el-col class="el-title" :span="24">
          <div class="grid-content bg-purple-dark">
            产品展示
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="el-smallTitle" :span="24">
          <div class="grid-content bg-purple-dark">
            Product
          </div>
        </el-col>
      </el-row>
      <el-row>
        <div class="buttonGroup">
          <!-- <a @click="changeIndex(0)" :class="{'router-link-active':indexNav==0}" class="link">全部</a>
          <a @click="changeIndex(1)" :class="{'router-link-active':indexNav==1}"  class="link">青茶系列</a>
          <a @click="changeIndex(2)" :class="{'router-link-active':indexNav==2}"  class="link">绿茶系列</a>
          <a @click="changeIndex(3)" :class="{'router-link-active':indexNav==3}"  class="link">黑茶系列</a>
          <a @click="changeIndex(4)" :class="{'router-link-active':indexNav==4}"  class="link">花果茶系列</a> -->
          <a @click="changeIndex(index,list._id)"  :class="{'router-link-active':indexNav==index}" class="link" v-for="(list,index) in types" :key="list._id">{{list.name}}</a>
        </div>
        <el-col :span="18" :offset="3">
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>
    <div class="news">
       <el-row>
        <el-col class="el-title" :span="24"><div class="grid-content bg-purple-dark">新闻资讯</div></el-col>
      </el-row>
      <el-row>
        <el-col class="el-smallTitle" :span="24"><div class="grid-content bg-purple-dark">News</div></el-col>
      </el-row>
      <el-row class="newsContent">
        <el-col class="el-smallTitle" :span="12" v-for="item in articles" :key="item.id">
          <div class="container" >
            <img :src="url+item.img">
            <div class="content">
              <p><a @click="toDetail(item._id)" class="newsTitle">{{item.title}}</a></p>
              <p class="article">{{item.description}}</p>
              <div class="message">
                <span>{{moment(item.created_at).format('YYYY-MM-DD')}}</span>
                <span>{{item.author}}</span>
                <span>{{item.visit}}</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
     <div class="aboutUs">
       <div class="aboutContent">
        <el-row class="product-header">
          <el-col class="el-title" :span="24">
            <div class="grid-content bg-purple-dark">
              关于我们
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col class="el-smallTitle" :span="24">
            <div class="grid-content bg-purple-dark">
              About
            </div>
          </el-col>
        </el-row>
        <el-row class="content">
          <el-col :span="24">
            <el-card :body-style="{ padding: '0px' }">
              <img src="/static/img/aboutUs.jpg" class="image">
              <div class="aboutArticle" style="padding: 14px;">
                <p>XX茶叶有限公司始创于上世纪50年代。经半个多世纪的发展，
                  公司已发展成为集茶叶种植生产、加工、销售及研发于一体的现代化茶业企业。
                  为促进四川地区茶叶产业发展，在公司创建之初便承袭了具有百年历史的“蜀涛”品牌，
                  并为此设立了四川省蜀涛茶业有限公司对其进行全程的品牌、质量管理。</p>
                <p>
                    目前XX茶业已拥有一座投资5000多万元、占地约130亩的现代化茶叶加工工厂。
                    全套引进日本全自动茶叶生产流水线，年生产能力1500吨，技术水平、生产能力居西南地区一流。
                    在四川峨眉山、青城山、雅安名山及成都蒲江拥有生态环境良好、茶叶品种优良的茶叶基地近5万亩，
                    实行统一规划、统一种植、统一管理、统一采摘的发展模式进行品质管理，并通过了无公害农产品基地的权威认证。
                    是四川省农业产业化重点龙头企业，“中国茶业行业百强”企业。</p>
                <p>“XX茶业”以对消费者负责，做好茶品质的态度，经过数十年的耕耘，
                  被省工商局授予“XX省著名商标”称号，其产品被评为XX省“名牌产品”，
                  并获得“全国三绿工程茶叶放心服务品牌”的称号。目前，XX公司已形成绿茶、花茶、青茶、
                  黑茶四大产品系列，近百种产品。特别值得一提的是。
                </p>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <my-footer></my-footer>
    <div class="topButton">
      <el-button type="primary">
        <i class="el-icon-arrow-up"></i>
      </el-button>
    </div>
  </div>
</template>

<script>
import {server} from '../utils/config'
import {getGoodsType} from '../services/goods_type'
import {getArticleList} from '../services/article_list'
import moment from 'moment'
export default {
  name: "HelloWorld",
  data() {
    return {
      images: ['/static/img/banner1.jpg', '/static/img/banner2.jpg'],
      cHeight:'600px',
      sWidth:0,
      articles:[],
      indexNav: 0,
      types:[],
      url : server
    }
  },
  created(){
    getGoodsType().then(res=>{
      this.types=res.data.data;
    });
    getArticleList().then(res=>{
      this.articles= res.data.data;
    })

  },
  mounted(){
    console.log(this)
    this.sWidth = this.$el.querySelector('.el-carousel__container').clientWidth;
    this.route = this.$route;
    window.onresize=()=>{
      this.sWidth = this.$el.querySelector('.el-carousel__container').clientWidth;
    }
  },
  watch: {//监听
    sWidth() {
      console.log('屏幕宽度',document.body.clientWidth)
      this.cHeight = this.sWidth*(700/1920)+'px';
    }
  },
  methods: {
    changeIndex(value,id) {
      console.log( 'id' , id )
      this.indexNav = value;
      switch(value) {
        case 0:
        this.$router.push({path:'/'})
        break;
        case 1:
        this.$router.push({path:'/qing',query:{id}})
        break;
        case 2:
        this.$router.push({path:'/lv',query:{id}})
        break;
        case 3:
        this.$router.push({path:'/hei',query:{id}})
        break;
        case 4:
        this.$router.push({path:'/flower',query:{id}})
        break;
      }

    },
    toDetail(id){
      this.$router.push({
        path:'Detail',
        query:{ id }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '/static/css/helloworld.css'
</style>

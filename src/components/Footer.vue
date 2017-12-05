<template>
  <footer class="footer">
      <el-row class="footerLink">
        <el-col :span="4">
          <ul>
            <li class="first"><router-link to="/about">关于我们</router-link></li>
            <li><router-link to="/about">公司简介</router-link></li>
            <li><router-link to="/about/line">在线反馈</router-link></li>
            <li><router-link to="/about/contact">练习我们</router-link></li>
          </ul>
        </el-col>
        <el-col :span="4">
          <ul>
            <li class="first"><router-link to="/business">招商加盟</router-link></li>
            <li><router-link to="/business">加盟流程</router-link></li>
            <li><router-link to="/business/policy">加盟政策</router-link></li>
            <li><router-link to="/business/advantage">加盟优势</router-link></li>
            <li><router-link to="/business/our">加入我们</router-link></li>
          </ul>
        </el-col>
        <el-col :span="4">
          <ul>
            <li class="first"><router-link to="/news">新闻资讯</router-link></li>
            <li><router-link to="/news">公司动态</router-link></li>
            <li><router-link to="/news">业界资讯</router-link></li>
          </ul>
        </el-col>
        <el-col :span="4">
          <ul>
            <li class="first"><router-link to="/product">产品展示</router-link></li>
            <li><router-link to="/product/qing">青茶系列</router-link></li>
            <li><router-link to="/product/lv">绿茶系列</router-link></li>
            <li><router-link to="/product/hei">黑茶系列</router-link></li>
            <li><router-link to="/product/flower">花果茶系列</router-link></li>
          </ul>
        </el-col>
        <el-col :span="8">
          <p class="tel">400-000-0000</p>
          <p clas="time">周一至周五:8:30am-6:00pm</p>
          <div class="bdsharebuttonbox">
            <router-link to="/" class="bds_more" data-cmd="more"></router-link>
            <router-link to="/" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></router-link>
            <router-link to="/" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></router-link>
            <router-link to="/" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></router-link>
            <router-link to="/" class="bds_renren" data-cmd="renren" title="分享到人人网"></router-link>
            <router-link to="/" class="bds_weixin" data-cmd="weixin" title="分享到微信"></router-link>
          </div>
        </el-col>
      </el-row>
      <el-row class="friendLink">
        <el-col :span="24">
          <p>友情链接: / &#X3000<a href="http://www.zgchawang.com/">中国茶网</a>&#X3000 /&#X3000 <a href="http://www.t0001.com/">第一茶叶网</a></p>
        </el-col>
      </el-row>
      <el-row class="copyright">
        <el-col :span="24">
          <p>茶叶公司 版权所有 2008-2014 湘ICP备888888</p>
          <p>本页面内容为网站演示数据,前台页面内容都可以在后台修改</p>
          <p>Powered by <span>MetInfo 5.3.19 </span>©2008-2017 <span>www.MetInfo.cn</span></p>
        </el-col>
      </el-row>
  </footer>
</template>
<script>

</script>
<style scoped>
footer{
  text-align: center;
  background-color: #fff;
}
footer .footerLink{
  width:70%;
  padding-top:20px;
  padding-bottom:30px;
  margin:0 auto;

}
footer .footerLink ul li a:hover{
  color:rgb(36, 188, 230);
}
footer .footerLink ul .first a{
  font-size:1.2rem;
  line-height:3rem;
  color:black;
}
footer .footerLink ul a{
  text-decoration: none;
  color:gray;
  font-size:0.8rem;
}
footer .tel{
  font-size:1.5rem;
  margin-top:20px;
}
footer .bdsharebuttonbox{
  margin-left:25%;
}
footer .friendLink {
  width:100%;
}
footer .friendLink p{
  /* width:100%; */
  line-height: 5rem;
  border-top:1px solid lightgray;
  border-bottom:1px solid lightgray;
  color:#666;
}
footer .friendLink a{
  font-size:0.9rem;
  color:#666;
}
footer .copyright{
  margin:30px auto;
}
footer .copyright p{
  line-height: 25px;
  font-size:0.9rem;
  color:#666;
}
footer .copyright p span{
  color:skyblue
}
</style>



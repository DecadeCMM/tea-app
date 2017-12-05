<template>
  <div class="advantage">
    <el-row>
      <el-col :span="8">
        <div>
          <img src="/static/img/advantane1.png" alt="">
        </div>
        <div class="two">
          <p class="title">品牌优势</p>
          <p class="text">百年中华老字号；2008年奥运会独家运营媒体村中国茶艺室；
            2010年世博会特许生产商及零售商；
            2014年APEC制定礼品；
            四川省知名品牌奖、四川省十大商业品牌奖</p>
        </div>
      </el-col>
      <el-col class="middle" :span="8">
        <div>
          <img src="/static/img/advantage2.png" alt="">
        </div>
        <div class="two">
          <p class="title">产品优势</p>
          <p class="text">“大花茶”概念，全品类产品；茉莉花茶窖制技巧列为国家非物质文化遗产；
            产品不断创新—兰花花茶、茶月饼、茶爽等；
            业内率先通过QS认证、ISO等认证体系。</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <img src="/static/img/advantage3.png" alt="">
        </div>
        <div class="two">
          <p class="title">服务优势</p>
          <p class="text">免费提供开业前员工入职培训；
            按照统一的形象标准设计；为加盟商提供门店装修方案、家具配置方案；提供店铺执行手册等标准的业务体系规范；公司负责整体品牌宣传策划推广；组织参加全国性大型展会；
            退工品牌宣传推广相关资料；
            督导定期巡查并指导门店经营；货品统一配送。</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default{
    data() {
      return{

      }
    }
  }
</script>
<style scoped>
  .advantage{
    width:80%;
    margin:50px auto;
    margin-bottom:100px;
  }
  .advantage .el-col{
    border:1px solid lightgray;
  }
  .advantage .middle{
    border-left:none;
    border-right:none;
  }
  .advantage .two{
    border-top:1px solid lightgray;
    height:400px;
  }
  .advantage .el-col .title{
    text-align: left;
    font-size:22px;
    padding-left:10px;
  }
  .advantage .el-col .text{
    line-height:30px;
    text-align: left;
    margin:10px;
  }
</style>



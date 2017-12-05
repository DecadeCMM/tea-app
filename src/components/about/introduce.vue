<template>
  <div class="introduce">
    <el-row>
      <el-col class="container">
        <img src="/static/img/aboutUs.jpg" alt="">
        <div class="text">
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
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name:'introduce',
    data(){
      return{

      }
    }
  }
</script>
<style>
.introduce{
  margin-bottom:50px;
  margin:0 auto;
}
.introduce img{
  margin-bottom:20px;
}
.introduce .container{
  text-align: center;
  margin:10px auto;
}
.introduce .text{
  width:70%;
  margin:10px auto;
  border-top:1px solid lightgray;
  padding-top:30px;
}
.introduce .text p {
  text-align: left;
  text-indent: 2rem;
  line-height: 36px;
  font-size:18px;
}
</style>


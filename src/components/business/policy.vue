<template>
  <div class="policy">
    <el-row>
      <el-col :span="8" :offset="4">
        <p>意向招商</p>
        <div class="first">
          <img src="/static/img/policy1.png" alt="">
          <span>标准化与规范化经营理念</span>
        </div>
        <div class="first">
          <img src="/static/img/policy3.png" alt="">
          <span>具有经济管理能力</span>
        </div>
        <div>
          <img src="/static/img/policy5.png" alt="">
          <span>具有经济管理能力</span>
        </div>
      </el-col>
      <el-col :span="8">
        <p>意向地址</p>
        <div class="first">
          <img src="/static/img/policy2.png" alt="">
          <span>有充足客流</span>
        </div>
        <div class="first">
          <img src="/static/img/policy4.png" alt="">
          <span>有独立店面</span>
        </div>
        <div>
          <img src="/static/img/policy6.png" alt="">
          <span>有独立店面</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default{
    data() {
      return {

    }
  }
  }
</script>
<style scoped>
  .policy{
    /* margin:50px auto; */
  }
  .policy .el-row{
    margin:50px auto;
    margin-bottom:100px;
  }
  .policy .el-col{
    border:1px solid lightgray;
    text-align: left;
  }
  .policy .el-col:nth-of-type(2){
    border-left:none;
  }
  .policy .el-col p{
    line-height: 80px;
    border-bottom:1px solid lightgray;
    font-size: 28px;
    font-weight:bold;
    padding-left:10px;
    color:#555;
  }
  .policy .el-col .first{
    border-bottom:1px solid lightgray;
  }
  .policy .el-col div{
    line-height:50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left:10px;
  }
  .policy .el-col span{
    padding-left:10px;
  }
</style>


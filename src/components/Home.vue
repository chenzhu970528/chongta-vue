<template>
  <div class="home">
      <div class="top">
        <div>treat your pet like royalty</div>
      </div>
      <div class="bottom">
        <p>功能模块</p>
        <div class="bottom_list">
          <el-row>
            <el-col :span="6">
              <img src="../assets/homeless.png" alt="">
              <span>流浪之家</span>
              <span>给在流浪的小动物找一个温暖的家</span>
            </el-col>
            <el-col :span="6">
              <img src="../assets/ado.png" alt="">
              <span>领养</span>
              <span>就算我不在你身边，也依然爱你</span>
            </el-col>
            <el-col :span="6">
              <img src="../assets/match.png" alt="">
              <span>婚介</span>
              <span>让我们爱的它们也不孤单</span>
            </el-col>
            <el-col :span="6">
              <img src="../assets/forum.png" alt="">
              <span>宠宠交流</span>
              <span>爱宠人士的交流场</span>
            </el-col>
          </el-row>
        </div>
        <el-row class="row2" style="margin-top: 60px;background-color: #dfdfdf">
          <el-col :span="12"><div class="imgPic1"></div></el-col>
          <el-col :span="12">
            <h4>关于我们</h4>
            <p>我们为养宠用户提供了从迎接一只新宠物开始，直至它成为您生活里的重要成员所需的所有服务。在宠物社区内，您可以找到与您拥有相同品种宠物或与您同城的宠物家长，看到不同宠物主人分享的精彩养宠生活。</p>
          </el-col>
        </el-row>
        <el-row class="row2" style="background-color: #dfdfdf">
          <el-col :span="12">
            <h4>关于我们</h4>
            <p>西方人说：动物是另一种形态的人。它们是人类的朋友，依赖着人，忠诚于人。</p>
          </el-col>
          <el-col :span="12" ><div class="imgPic2"></div></el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
  .home{
    width: 100%;
    background:rgb(240,240,240);
    /*box-shadow:-2px 2px 10px 2px #bcbcbc;*/
    /*position: absolute;*/
  }
  .top{
    height: 640px;
    background: 0 -70px url("../assets/bg2.jpg") no-repeat;
  }
  .top div{
    text-align: center;
    /*background-color: yellow;*/
    font-weight: bold;
    font-size: 50px;
    position: relative;
    top: 400px;
    color: #648eff;
  }
  .bottom{
    min-height: 500px;
    text-align: center;
  }
  .bottom p{
    margin-top: 130px;
    font-size: 30px;
    color: grey;
  }
  .bottom_list{
    margin-top: 50px;
    width: 80%;
    margin-left: 10%;
    min-height: 300px;
    /*background-color: yellow;*/
  }
  .bottom_list span{
    display: block;
    font-size: 18px;
    font-weight: 500;
    color: grey;
  }
  .bottom_list span:last-child{
    margin-top: 10px;
    display: block;
    font-size: 14px;
    color: grey;
  }
  .imgPic1{
    height: 597px;
    width: 100%;
    background: 30px -130px url("../assets/bg1.jpg") no-repeat ;
  }
  .imgPic1 img{
    width: 100%;
  }
  .imgPic2{
    height: 597px;
    width: 100%;
    background: url("../assets/gou.jpg") no-repeat;
  }
  .row2 p{
    padding:30px;
    font-size: 19px;
  }
  h4{
    font-size: 20px;
    margin-top: 30px;
  }
</style>

<template>

  <div class="home">
    <div class="top">
      <!--<div class="block">-->
        <!--&lt;!&ndash;<span class="demonstration">Click 指示器触发</span>&ndash;&gt;-->
        <!--<el-carousel trigger="click" height="640px">-->
          <!--<el-carousel-item v-for="(mao,index) in imgList" :key="index">-->
            <!--<img :src="mao.url">-->
          <!--</el-carousel-item>-->
        <!--</el-carousel>-->
      <!--</div>-->
        <span>treat your </span><span>pet like royalty</span>
    </div>
    <div class="q1"></div>
    <div class="bottom">
      <!--<p>功能模块</p>-->
      <div class="bottom_list">
        <el-row>
          <el-col :span="6">
            <router-link  to="/adoption">
              <img src="../assets/ado.png" alt="">
            </router-link>
            <span>领养</span>
            <span>就算我不在你身边，也依然爱你</span>
          </el-col>
          <el-col :span="6">
            <router-link to="/homeless">
              <img src="../assets/homeless.png" alt="">
            </router-link>
            <span>流浪精灵/寻宠之家</span>
            <span>给在流浪的小动物找一个温暖的家</span>
          </el-col>
          <el-col :span="6">
            <router-link to="/matchmaking">
              <img src="../assets/match.png" alt="">
            </router-link>
            <span>宠物婚介</span>
            <span>让我们爱的它们也不孤单</span>
          </el-col>
          <el-col :span="6">
            <router-link to="/forum">
              <img src="../assets/forum.png" alt="">
            </router-link>
            <span>宠宠交流</span>
            <span>爱宠人士的交流场</span>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="q2"></div>

    <div class="num">
      <el-row>
        <el-col :span="8" :push="4" style="text-align: center">
        <h3>发表量</h3>
        <show-num></show-num>
      </el-col>
        <el-col :span="8" :push="4" style="text-align: center">
          <h3>用户量</h3>
          <show-num1></show-num1>
        </el-col>
      </el-row>
    </div>
    <div class="middle">
        <el-row>
          <el-col :span="12" style="height: 500px;">
            <div class="left1"></div>
            <div class="left2"></div>
            <div class="left3"></div>
          </el-col>
          <el-col :span="6" style="height: 500px;">
            <h3>关于我们</h3>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们为养宠用户提供了从迎接一只新宠物开始，直至它成为您生活里的重要成员所需的所有服务。在宠物社区内，您可以找到与您拥有相同品种宠物或与您同城的宠物家长，看到不同宠物主人分享的精彩养宠生活。</p>
          </el-col>
          <el-col :span="6" style="height: 500px;">
            <div class="right1"></div>
          </el-col>
        </el-row>
      </div>

  </div>
</template>

<script>
  import showNum from './showNum.vue'
  import showNum1 from './showNum1.vue'
    export default {
        name: "Home",
      components:{
          'show-num':showNum,
        'show-num1':showNum1
      },
      // data(){
      //   return{
      //     imgList:[
      //       {url:require("../assets/HomePage/bg1.jpg")} ,
      //       {url:require("../assets/HomePage/bg2.jpg")} ,
      //       {url:require("../assets/HomePage/bg3.jpg")} ,
      //       {url:require("../assets/HomePage/bg5.jpg")} ,
      //     ]
      //   }
      // }
    }
</script>

<style scoped>

  .q1{
    height: 400px;
    background-image: url(../assets/forum/7.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: auto;
    background-position: center;
    background-blend-mode: darken
  }
  .q2{
    height: 400px;
    background-image: url(../assets/forum/1.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: auto;
    background-position: center;
    background-blend-mode: darken
  }
  .home{
    width: 100%;
    background: rgb(242, 244,241);
    position: relative;
    /*box-shadow:-2px 2px 10px 2px #bcbcbc;*/
    /*position: absolute;*/
    /*margin-top: 70px;*/
  }
  .top{
    height: 640px;
    background: url("../assets/HomePage/bg2.jpg") center;
    background-size: 100% auto;
  }
  .top img{
    width: 100%;
  }
  .top span{
    text-align: center;
    /*background-color: yellow;*/
    font-weight: bold;
    font-size: 50px;
    color: #648eff;
  }
  .top span:first-child{
    position: relative;
    top:270px;
    left: 1%;
  }
  .top span:last-child{
    position: absolute;
    top:270px;
    right: 1%;
  }

  .bottom{
    margin-top:150px;
    min-height: 400px;
    text-align: center;
    /*background-color: palevioletred;*/
    /*background-color: chocolate;*/

  }
  .bottom p{
    margin-top: 110px;
    font-size: 30px;
    color: grey;
  }
  .bottom_list{
    margin-top: 50px;
    width: 80%;
    margin-left: 10%;
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
  .imgPic1 img{
    width: 100%;
  }
  .row2 p{
    padding:30px;
    font-size: 19px;
  }
  h4{
    font-size: 20px;
    margin-top: 30px;
  }
  .middle{
    height: 500px;
    width: 100%;
  }
  .left1{
    background: -100px 0 url("../assets/HomePage/left3.jpg");
    width: 250px;height: 350px;position: relative;top:75px;
  }
  .left2{
    background:url("../assets/HomePage/left4.jpg");
    width: 370px;height: 240px;position: relative;left:300px;bottom: 100px
  }
  .left3{
    background:-70px -100px url("../assets/HomePage/right3.jpg");
    width: 200px;height: 180px;position: relative;bottom: 590px;left: 300px
  }
  .middle p{
    padding: 50px;
    color: #37426f;
  }
  .middle h3{
    color: #232b47;
    margin-top: 100px;
  }
  .right1{
    width: 300px;
    height: 150px;
    background: 0 -100px url("../assets/HomePage/right.jpg");
  }
  .num{
    /*padding-top: 50px;*/
    /*background-color: yellow;*/
    height: 400px;
  }
  .num h3{
    margin-top: 80px;
    color: grey;
    font-size: 30px;
    line-height: 50px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

</style>

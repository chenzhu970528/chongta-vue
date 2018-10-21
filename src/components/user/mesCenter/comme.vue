<template>
  <div class="right" >
    <div class="route">您的当前位置：<span>账号管理</span><span>/</span><span>评论我的</span></div>
    <div class="main" id="scroll" >
    <div class="comment" v-for="">
      <el-row>
        <el-col :span="7">
          <!--别人的用户头像-->
          <img src="../../../assets/user/default33.png" alt="">
        </el-col>
        <el-col :span="7">
          <span>评论人昵称</span>
          <span class="time">评论时间时间</span>
        </el-col>
      </el-row>
      <el-row style="margin-top: 10px" class="row2">
        <el-col :span="9" class="release">我的头像</el-col>
        <el-col :span="12">
          <h5>我的用户名</h5>
          <span>评论的帖子标题</span>
        </el-col>
      </el-row>
    </div>
      <!--加数据时删掉下面两个-->
      <div class="comment" v-for="">
        <el-row>
          <el-col :span="7">
            <!--别人的用户头像-->
            <img src="../../../assets/user/default33.png" alt="">
          </el-col>
          <el-col :span="7">
            <span>评论人昵称</span>
            <span class="time">评论时间时间</span>
          </el-col>
        </el-row>
        <p>评论的内容</p>
        <el-row style="margin-top: 10px" class="row2">
          <el-col :span="9" class="release">我的头像</el-col>
          <el-col :span="12">
            <h5>我的用户名</h5>
            <span>评论的帖子标题</span>
          </el-col>
        </el-row>
      </div>
      <div class="comment" v-for="">
        <el-row>
          <el-col :span="7">
            <!--别人的用户头像-->
            <img src="../../../assets/user/default33.png" alt="">
          </el-col>
          <el-col :span="7">
            <span>评论人昵称</span>
            <span class="time">评论时间时间</span>
          </el-col>
        </el-row>
        <p>评论的内容</p>
        <el-row style="margin-top: 10px" class="row2">
          <el-col :span="9" class="release">我的头像</el-col>
          <el-col :span="12">
            <h5>我的用户名</h5>
            <span>评论的帖子标题</span>
          </el-col>
        </el-row>
      </div>
  </div>

  </div>
</template>

<script>
    export default {
        name: "comme"
    }
</script>

<style scoped>
  #scroll{
    padding: 35px;
    width: 80%;
    margin-left: 10%;
    max-height: 600px;
    /*background-color: rgba(237, 210, 234, 0.5);*/
    margin-top: 30px;
    overflow: auto;
  }
  #scroll::-webkit-scrollbar{
    width:4px;
    height:4px;
  }
  #scroll::-webkit-scrollbar-track{
    background:rgba(255, 255, 255, 0.3);
    border-radius:2px;
  }
  #scroll::-webkit-scrollbar-thumb{
    background: #bababa;
    border-radius:2px;
  }
  #scroll::-webkit-scrollbar-thumb:hover{
    background: #747474;
  }
  #scroll::-webkit-scrollbar-corner {
    background: #f6f6f6;
  }
  *{
    padding: 0;
    margin: 0;
  }
  .right{
    position: relative;
    left: 40px;
    min-height: 780px;
    background-color: rgba(255,255,255,0.5);
  }
  .route{
    position: relative;
    left: 5%;
    width: 90%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    /*background-color: palevioletred;*/
    color: #e7e7e7;
  }
  .route span{
    margin-right: 10px;
    font-size: 14px;
  }
  .route span:last-child{
    color: #b9ffff;
  }
  .comment{
    position: relative;
    margin-bottom: 35px;
    /*background-color: yellow;*/
  }
  .comment span{
    position: absolute;
    top: 0;
    left: 65px;
    color: #6d6d6d;
    font-size: 15px;
    margin-top: 7px;
    font-weight: bolder;
  }
  .comment span.time{
    margin-top: 34px;
    font-size: 13px;
    font-weight: normal;
  }
  .release{
    width: 80px;
    height: 80px;
    background-color: blue;
  }
  .row2{
    width: 96%;
    margin-left: 2%;
    background-color: rgba(255,255,255,0.4);
  }
  .comment .row2 span{
    top:30px;
    left: 100px;
  }
  h5{
    margin-left: 20px;
    font-size: 15px;
    font-weight: bold;
  }
  p{
    padding-left: 2%;
  }
</style>

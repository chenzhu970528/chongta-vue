<template>
    <div class="right" >
      <div class="route">您的当前位置：<span>账号管理</span><span>/</span><span>个人资料</span></div>
      <div class="inright">
        <h3>基本信息</h3>
        <el-row class="first">
          <el-col :span="7" :push="2"><span>昵称</span></el-col>
          <el-col :span="12" :push="2"><span class="det">{{personal.userName}}</span></el-col>
        </el-row>
        <el-row>
          <el-col :span="7" :push="2"><span>所在地</span></el-col>
          <el-col :span="12" :push="2"><span class="det">{{personal.address}}</span></el-col>
        </el-row>
        <el-row>
          <el-col :span="7" :push="2"><span>性别</span></el-col>
          <el-col :span="12" :push="2"><span class="det">{{userSex}}</span></el-col>
        </el-row>
        <h3 class="sech3">联系方式</h3>
        <el-row class="first">
          <el-col :span="7" :push="2"><span >邮箱</span></el-col>
          <el-col :span="12" :push="2"><span class="det">{{personal.userEmail}}</span></el-col>
        </el-row>
        <el-row>
          <el-col :span="7" :push="2"><span>手机</span></el-col>
          <el-col :span="12" :push="2"><span class="det">{{personal.userPhone}}</span></el-col>
        </el-row>
        <el-row>
          <el-col :span="7" :push="2"><span>微信</span></el-col>
          <el-col :span="12" :push="2"><span class="det">{{personal.wechat}}</span></el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
  import  axios from 'axios'
    export default {
        name: "personal",
      data() {
        return {
          userId:this.$store.state.userId,
          activeName: 'first',
          personal:[],
        };
      },
      methods: {
        handleClick(tab, event) {
          // console.log(tab, event);
        }
      },
      computed:{
          userSex:{
            get(){
              let _this=this
              if(_this.personal.sex==0){
                return '男'
              }else {
                return '女'
              }
            }
          }
      },
      mounted(){
        axios.get(this.$store.state.url+`/user/showUser/${this.userId}`).then((result) => {
          // console.log(result.data.data[0]);
          this.personal = result.data.data[0];
        })
      }
    };
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .right{
    position: relative;
    left: 40px;
    height: 780px;
    background-color: rgba(255,255,255,0.7);
    /*box-shadow: -2px 2px 10px 2px #eeeeee;*/
  }


  .route{
    position: relative;
    left: 5%;
    width: 90%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    /*background-color: palevioletred;*/
    color: rgba(45, 54, 68, 0.9);
  }
  .route span{
    margin-right: 10px;
    font-size: 14px;
  }
  .route span:last-child{
    color: #8aa7cf;
  }
  h3{
    text-align: left;
    margin-left: 1%;
    font-weight: bold;
    color: #3e3e3e;
  }
  .sech3{
    margin-top: 30px;
  }
  .inright{
    width: 80%;
    position: absolute;
    top: 10%;
    left: 10%;
    color: #686868;
  }
  span{
    display: inline-block;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    /*margin-left: 30px;*/
  }
  span.det{
    font-size: 13px;
    margin-left: 0;
    /*background-color: grey;*/
  }
  .first{
    margin-top: 30px;
  }
</style>

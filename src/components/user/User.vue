<template>
  <div class="tol">
    <div class="top1"></div>
    <div class="container">
      <!--<div><h4>用户id：{{userId}}</h4></div>-->
      <el-row>
        <el-col :span="8">
          <div class="top">
            <change-head></change-head>
            <span class="name">{{personal.userName}}</span><br/>
            <span class="name">{{personal.signature}}</span>
          </div>
          <left-list></left-list>
        </el-col>
        <el-col :span="15"><router-view></router-view></el-col>
      </el-row>
    </div>
    <div class="foot">
      <foot></foot>
    </div>
  </div>

</template>

<script>
  import change from './accManagement/changehead.vue'
  import left from './leftList.vue'
  import  axios from 'axios'
  import  foot from '../../components/foot'
    export default {
      name: "User",
      data(){
        return {
          userId:this.$store.state.userId,
          personal:[],
        }
      },
      components:{
        'change-head':change,
        'left-list':left,
        'foot':foot
      },
      created(){
        axios.get(this.$store.state.url+`/user/showUser/${this.userId}`).then((result) => {
          // console.log(result.data.data[0]);
          this.personal = result.data.data[0];
        })
      }
    }
</script>

<style scoped>

  *{
    padding: 0;
    font-family: \5FAE\8F6F\96C5\9ED1;
  }
  .container{
    /*background:rgba(255,255,255,0.9);*/
    margin-top:150px ;
    /*box-shadow:-2px 2px 10px 2px #bcbcbc;*/
    min-height: 500px;

  }
  .top1{
    width: 100%;
    height: 110px;
    background-color: white;
    /*position: fixed;*/
    top: 0;
    z-index: 3;
    /*box-shadow: -2px 2px 10px 2px #f8f8f8;*/
    margin-bottom:-50px;
  }
  .top{
    /*width: 100%;*/
    height: 250px;
    /*background:rgba(255,255,255,0.5);*/
    /*position: relative;*/
    vertical-align: middle;
    text-align: center;
    background: url("../../assets/user/user_bg2.jpg") ;
    position: relative;
  }
  .intop el-col{
    font-weight: bold;
  }
  .name{
    display: inline-block;
    /*width: 150px;*/
    height: 30px;
    line-height: 30px;
    /*background-color: orangered;*/
    margin-top: 15px;
    /*background-color: yellow;*/
  }
</style>

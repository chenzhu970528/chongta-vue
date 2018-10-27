<!--婚介中心-->
<template>
  <div class="tol">
    <div class="top"></div>
    <div class="cont container">
      <!--<div class="route">您的当前位置：<span>宠物婚介</span></div>-->
      <el-row>
        <el-col :span="14">
          <app-select></app-select>
        </el-col>
        <el-col class="issue" :span="8" :push="3">
          <img src="../../assets/adoption/a051a6562121e26.png" alt="">
        </el-col>
      </el-row>
      <router-link to="/matchmaking/mpublish"><button style="font-size: 22px" class="publish">我要发布</button></router-link>
      <!--排序-->
      <div class="listStyle">
      <span>
        <!--<span><router-link  to="/matchmaking" class="her" active-class="active" role="presentation" exact>默认</router-link></span>-->
        <span><router-link  active-class="active" role="presentation" to="/matchmaking/TimeDesc" class="her style1">查看最新<span class="glyphicon glyphicon-arrow-up" ></span></router-link></span>
        <span><router-link  to="/matchmaking/Timeasc" class="her style2">按时间<span class="glyphicon glyphicon-arrow-down"></span></router-link></span>
        <span><router-link  to="/matchmaking/HotDesc" class="her style3">查看最热<span class="glyphicon glyphicon-fire" ></span></router-link></span>
      </span>
      </div>
      <router-view></router-view>
      <match-hot></match-hot>
    </div>
  </div>
</template>
<script>
  import  matchhot from './match-hot.vue'
  import Header from '../Header.vue'
  import  matchlist from './matchlist.vue'
  import select from '../adoption/AdoptionSizer'
  export default {
    name: "matchmain",
    components:{
      'app-header':Header,
      'match-list':matchlist,
      'app-select':select,
      'match-hot':matchhot
    },
    data(){
      return{
        show:false
      }
    }
  }
</script>

<style scoped>
  .tol{
    background-color: white;
  }
  .top{
    width: 100%;
    height: 420px;
    background:url("../../assets/match/match2.png") no-repeat center;
    /*background-size: 100% auto;*/
    /*min-height: 900px;*/
    position: relative;
  }
  .cont{
    width: 1240px;
    /*background:rgba(255,255,255,0.9);*/
    /*margin-top:150px ;*/
    /*box-shadow:-2px 2px 10px 2px #bcbcbc;*/
    position: relative;
  }
  .publish{
    border: none;
    background-color: transparent;
    color: #7d94ff;
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    right: 170px;
    top: 200px;
  }
  .route{
    position: relative;
    left: 1%;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    color: #747474;
  }
  .route span{
    margin-right: 10px;
    font-size: 13px;
  }
  .route span:last-child{
    color: #4e76ff;
  }
  .issue img{
    width: 300px;
    position: relative;
    left: 20px;
  }
  .listStyle span span{
    margin-right: 7px;
  }
  .listStyle span span:first-child{
    margin-left: 5px;
  }
  .her{
    text-decoration: none;
    color: grey;
  }
  .style1:focus{
    color: #c382ed
  }
  .style2:focus{
    color: cornflowerblue
  }
  .style3:focus{
    color: #ed5652
  }
</style>

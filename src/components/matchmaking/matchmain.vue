<!--婚介中心-->
<template>
  <div class="cont container">
    <el-row>
      <el-col :span="14">
        <app-select></app-select>
      </el-col>
      <el-col class="issue" :span="8" :push="3">
        <img src="../../assets/adoption/a051a6562121e26.png" alt="">
      </el-col>
    </el-row>
    <router-link to="/matchmaking/mpublish"><button>我要发布</button></router-link>
    <match-list></match-list>
    <match-hot></match-hot>
  </div>

</template>
<script>
  import  matchhot from './match-hot.vue'
  import Header from '../Header.vue'
  import  matchlist from './matchlist.vue'
  // import changepage from './changepage.vue'
  import select from '../adoption/AdoptionSizer'
  export default {
    name: "matchmain",
    components:{
      'app-header':Header,
      'match-list':matchlist,
      // 'change-page':changepage,
      'app-select':select,
      'match-hot':matchhot
    },

  }
</script>

<style scoped>
  .cont{
    width: 1179px;
    background:rgba(255,255,255,0.9);
    margin-top:100px ;
    box-shadow:-2px 2px 10px 2px #bcbcbc;
    position: relative;
  }
  button{
    border: none;
    background-color: transparent;
    color: #7d94ff;
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    right: 170px;
    top: 200px;
  }
  .issue img{
    /*margin-left: 55px;*/
    width: 300px;
    position: relative;
    top: 50px;
    left: 20px;
  }
</style>

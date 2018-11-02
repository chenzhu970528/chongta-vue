<template>
  <div class="right" >
    <div class="route">您的当前位置：<span>账号管理</span><span>/</span><span>我的申请</span></div>
    <el-tabs v-model="activeName" @tab-click="handleClick" style="width: 90%;margin-left: 5%">
      <el-tab-pane label="婚介申请" name="first">
        <myaply-Match></myaply-Match>
      </el-tab-pane>
      <el-tab-pane label="领养申请" name="second">
        <myaply-Ado></myaply-Ado>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import myaplyAdo from './myaplyAdo.vue'
  import myaplyMatch from './myaplyMatch.vue'
    export default {
        name: "myaply",
      components:{
        'myaply-Match':myaplyMatch,
        'myaply-Ado':myaplyAdo
      },
      data(){
          return{
            a:true,
            b:false,
            activeName: 'first'
          }
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    }
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
    text-align: center;
    width: 100px;
    font-size: 16px;
    border-radius: 5px;
    color: white;
    margin-top: 20px;
    margin-left: 5%;
    padding: 5px;
    float: left;
  }
  .changeB{
    background-color: cornflowerblue;
  }
  .changeT{
    background-color: transparent;
  }
  hr{
    width: 90%;
    position: absolute;
    left: 5%;
    top:100px;
  }
</style>

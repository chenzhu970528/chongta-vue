<template>
  <div class="right" >
    <div class="route">您的当前位置：<span>账号管理</span><span>/</span><span>申请我的</span></div>
    <!--<el-tabs v-model="activeName" @tab-click="handleClick" style="width: 90%;margin-left: 5%">-->
      <!--<el-tab-pane label="婚介申请" name="first">-->
        <!--<aplyme-Match></aplyme-Match>-->
      <!--</el-tab-pane>-->
      <!--<el-tab-pane label="领养申请" name="second">-->
        <!--<aplyme-Ado></aplyme-Ado>-->
      <!--</el-tab-pane>-->
    <!--</el-tabs>-->
    <aplyme-Match></aplyme-Match>
  </div>
</template>

<script>
  import aplymeAdo from './aplymeAdo.vue'
  import aplymeMatch from './aplymeMatch'
    export default {
      name: "aplyme",
      data(){
        return{
          activeName: 'first'
        }
      },
      components:{
        'aplyme-Match':aplymeMatch,
        'aplyme-Ado':aplymeAdo
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

</style>

<!--我的相亲角-->
<template>
  <div class="right" >
    <div class="route">您的当前位置：<span>我的发布</span><span>/</span><span>相亲角</span></div>
      <match-list></match-list>
    <div class="page">
    </div>
  </div>
</template>

<script>
  import  matchList from './matchList.vue'
    export default {
        name: "mymatch",
      components:{
        'match-list':matchList,
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
    background-color: rgba(255,255,255,0.6);
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
  .page{
    width: 80%;
    position: absolute;
    bottom: 20px;
    left: 20%;
  }
</style>

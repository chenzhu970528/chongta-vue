<template>
  <div class="right" >
    <div class="route">您的当前位置：<span>论坛</span><span>/</span><span>养宠日记</span></div>
      <adoDiarylist></adoDiarylist>
    <div class="page">
      <!--<change-page></change-page>-->
    </div>
  </div>
</template>

<script>
  import  adoDiarylist from './adoDiarylist.vue'
  // import changePage from '../../matchmaking/changepage.vue'
  export default {
        name: "diary",
    components:{
      'adoDiarylist':adoDiarylist,
      // 'change-page':changePage,
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
    background-color: rgba(255, 255, 255,0.7);
    box-shadow: -2px 2px 10px 2px #f7f7f7;

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
  .page{
    width: 80%;
    position: absolute;
    bottom: 20px;
    left: 20%;
  }
</style>

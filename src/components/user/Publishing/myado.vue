<!--领养-->
<template>
    <div class="right">
      <div class="route">您的当前位置：<span>我的发布</span><span>/</span><span>领养</span></div>
      <div id="scroll">
        <ado-List></ado-List>
      </div>
      <div class="page">
        <!--<change-page></change-page>-->
      </div>
    </div>
</template>

<script>
  // import changePage from '../../matchmaking/changepage.vue'
  import aodList from './adoList'
    export default {
        name: "myado",
      components:{
          'ado-List':aodList,
        // 'change-page':changePage
      }
    }
</script>

<style scoped>
  #scroll{
    /*padding: 35px;*/
    /*width: 80%;*/
    /*margin-left: 10%;*/
    max-height: 600px;
    /*background-color: rgba(237, 210, 234, 0.5);*/
    /*margin-top: 30px;*/
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

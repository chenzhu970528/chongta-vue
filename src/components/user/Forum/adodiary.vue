<template>
  <div class="right" >
    <div class="route">您的当前位置：<span>论坛</span><span>/</span><span>领养日记</span></div>
    <adoDiarylist></adoDiarylist>
    <div class="page">
      <change-page></change-page>
    </div>
  </div>
</template>

<script>
  import  axios from 'axios'
  import {mapGetters} from 'vuex';
  import  adoDiarylist from './adoDiarylist.vue'
  import changePage from '../../matchmaking/changepage.vue'
  export default {
        name: "diary",
    components:{
      'adoDiarylist':adoDiarylist,
      'change-page':changePage,
    },
    computed: mapGetters([
      'UserId',
      'UserName',
    ]),
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
    height: 200px;
    line-height: 200px;
    position: relative;
    bottom: 20px;
    left:18%;
    margin-top:50px;
    margin-bottom:-50px;
  }
</style>

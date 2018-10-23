<template>
  <div class="right" >
    <div class="route">您的当前位置：<span>论坛</span><span>/</span><span>我的收藏</span></div>
    <forum-list></forum-list>
    <div class="page">
      <change-page></change-page>
    </div>
  </div>
</template>

<script>
  import forumList from './likeList'
  import changePage from '../../matchmaking/changepage.vue'
  import  axios from 'axios'
    export default {
      name: "like",
      components:{
        'change-page':changePage,
        'forum-list':forumList
      },

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
  .route span:first-child{
    color: #b9ffff;
  }
  .page{
    width: 80%;
    position: absolute;
    bottom: 20px;
    left: 20%;
  }
</style>

<template>
  <div class="right" >
    <div class="route">您的当前位置：<span>论坛</span><span>/</span><span>我的收藏</span></div>
    <forum-list></forum-list>

  </div>
</template>

<script>
  import forumList from './likeList'
  import  axios from 'axios'
    export default {
      name: "like",
      components:{
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
    background-color: rgba(255,255,255,0.9);
    box-shadow: -2px 2px 10px 2px #eeeeee;

  }
  .route{
    position: relative;
    left: 5%;
    width: 90%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: white;
    /*color: rgba(45, 54, 68, 0.9);*/
  }
  .route span{
    margin-right: 10px;
    font-size: 14px;
  }
  .route span:last-child{
    color: #c9eaff;
  }
  .page{
    width: 80%;
    position: absolute;
    bottom: 20px;
    left: 20%;
  }
</style>

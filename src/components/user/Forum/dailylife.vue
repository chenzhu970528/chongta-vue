<template>
  <div class="right" >
    <div class="route">您的当前位置：<span>论坛</span><span>/</span><span>日常交流</span></div>
    <life-list></life-list>
    <div class="page">
      <change-page></change-page>
    </div>
  </div>
</template>

<script>
  import  axios from 'axios'
  import {mapGetters} from 'vuex';
  import  lifelist from './lifeList.vue'
  import changePage from '../../matchmaking/changepage.vue'
    export default {
      name: "dailylife",
      components: {
        'life-list': lifelist,
        'change-page': changePage,
      },
      data() {
        return {
          value: []
        }
      },

      computed: mapGetters([
        'UserId',
        'UserName',
      ]),
      mounted() {
        id = this.UserId.replace(/\"/g, "")
        axios.get(`http://localhost:3000/forumSee/user/share?userId=${id}`).then((result) => {
          this.value = result.data.data;

        })
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
    position:relative;
    bottom: 20px;
    left: 18%;
    margin-top:50px;
    margin-bottom:-50px;

  }
</style>

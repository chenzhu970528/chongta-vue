<template>
  <div>
    <div class="d1">
      <div class="top"><span class="left">最多收藏</span></div>
      <img style="height:50px;margin-top:-115px;margin-left: 85px;" src="../../assets/forum/22.gif" alt="">
      <div class="bot" v-for="(list,index) in list1">
        <span @click="see(list[0].faId)">
        <router-link tag="p" active-class="active"  role="presentation" :to="`/forum/`+list[0].faId">
          <h4 ><span>{{index+1}}&nbsp </span><a>{{list[0].faTitle}}</a></h4>
        </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import store from './store.js'

  export default {
    name: "Ranking",
    data() {
      return {
        list1: [],
      }
    },
    methods: {
      see(index) {
        let storage=window.localStorage;
        storage.faId=index
        // this.$router.go(0)

      }
    },
    mounted() {
      axios.get(this.$store.state.url+"/forumSee/likes").then((result) => {
        this.list1 = result.data.data;
      })

    }
  }
</script>

<style scoped>
  .d1 {
    box-shadow: -2px 2px 10px 2px #f3f3f3;
    background: rgba(255, 255, 255, 0.9);
    width: 360px;
    background: white;
    position: relative;
    padding: 20px;
    display: inline-block;
    margin-top: 150px;
    margin-bottom: 20px;
  }

  .top {
    width: 317px;
    height: 35px;
    border-bottom: 1px solid #a8a8a8;
    color: #a8a8a8;
    margin-bottom: 20px;
  }

h4  {
  height: 30px;
  line-height: 30px;
  }

  .left {
    display: inline-block;
    height: 35px;
    border-bottom: 3px solid rgba(41, 70, 102, 0.64);
    font-size: 20px;
  }

  h4 > span {
    text-align: right;
    display: inline-block;
    width: 15px;
    margin-right: 15px;
  }

  a {
    text-decoration: none;
    color: #323232;
  }

 h4:hover a{
    color: #81c6da;
  }
</style>

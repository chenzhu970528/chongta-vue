<template>
  <div>
    <div class="d1">
      <div class="top"><span class="left">收藏榜单</span></div>
      <div class="bot" v-for="(list,index) in list1">
        <router-link tag="p" active-class="active"  role="presentation" :to="`/forum/`+list.faId">
          <h4 @click="see(list.faId)"><span>{{index+1}}&nbsp </span><a>{{list.faTitle}}</a></h4>
        </router-link>

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
        mydata: [],
        list1: [],
      }
    },
    methods: {
      see(index) {
        store.commit('addID', {
          amount: index
        })
      }
    },
    mounted() {
      axios.get("http://localhost:3000/forumSee/time").then((result) => {
        this.mydata = result.data.data;
        for (let i = 0; i < 10; i++) {
          this.list1.push(this.mydata[i])
        }
      })

    }
  }
</script>

<style scoped>
  .d1 {
    width: 360px;
    background: white;
    position: relative;
    padding: 20px;
    display: inline-block;
    margin-top: 1px;
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
    border-bottom: 3px solid rgba(129, 198, 218, 0.64);
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

<template>
    <div>
      <ul class="title">
        <li class="firstli"><img src="" alt=""></li>
        <li>主人</li>
        <li>昵称</li>
        <li>追求者</li>
      </ul>
      <hr>

      <ul v-for="showList in showLists">
        <router-link :to="'/matchmaking/matchDel/'+showList.relId">
        <li class="firstli"><img class="petImg" :src="urlImg(showList.petPic.split(',')[0])" alt=""></li>
        <li>{{showList.userName}}</li>
        <li>{{showList.PetName}}</li>
        <li>{{showList.num}}</li>
        </router-link>
      </ul>

    </div>
</template>

<script>
  import axios from 'axios'
  export default {
        name: "hotlist",
      data(){
          return{
            hotdata:[],
            showLists:[],
            url:this.$store.state.url
          }
      },
    methods:{
      urlImg(str){
        // console.log(this.url+str)
        return this.url+str
      }
    },
      created(){
        axios.get(this.$store.state.url+"/matchmaking/countAply").then((result) => {
          console.log(result.data)
          this.hotdata = result.data.data;
          for (let i = 0; i < this.hotdata.length; i++) {
            this.showLists.push(this.hotdata[i])
          }
        })
      }
    }
</script>

<style scoped>
  div ul{
    list-style: none;
    padding-top: 5px;
    height: 20px;
    text-align: center;
    line-height: 20px;
  }
  hr{
    border: 1px solid palevioletred;
  }
  ul li{
    float: left;
    width: 26%;
    color: #7197ff;
    /*padding-right: 5px;*/
  }
  ul li:last-child{
    width: 19%;
  }
  .title li{
    font-weight: bold;
  }
  .firstli{
    margin-left: -20px;
  }
  .petImg{
    width: 50px;
    height: 50px;
  }
</style>

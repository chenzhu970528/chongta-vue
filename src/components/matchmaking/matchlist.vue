<!--婚介列表-->
<template>
  <div>
    <div class="mainList">
        <el-row>
          <el-col :span="6" style="margin-left: 4%;margin-top: 20px" v-for="(showList,index) in showLists" :key="showLists.length" :offset="index>0?3:0">
            <div class="oneList">
              <router-link :to="'/matchmaking/matchDel/'+showList.relId"><img src="../../assets/match/mao1.jpg" alt="..." class="img-rounded"></router-link>
              <div>
                <span>昵称: <span class="inner">{{showList.PetName}}</span></span>
                <span>性别: <span class="inner">{{showList.sex}}</span></span>
                <span>年龄: <span class="inner">{{showList.age}}个月</span></span>
              </div>
            </div>
          </el-col>
        </el-row>
    </div>
    <el-row>
      <el-col :span="10" :push="7">
        <change-page></change-page>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  import axios from 'axios'
  import  matchhot from './match-hot.vue'
  import changepage from './changepage.vue'
  export default {
    name: "matchlist",
    components:{
      'match-hot':matchhot,
      'change-page':changepage,
    },
    data() {
      return {
        matchdata: [],
        showLists: [],
      };
    },
    created(){
      axios.get("http://localhost:3000/matchmaking").then((result) => {
        // console.log(result.data)
        this.matchdata = result.data.data[0];
        for (let i = 0; i < this.matchdata.length; i++) {
          this.showLists.push(this.matchdata[i])
        }
      })
    }
  }
</script>

<style scoped>
  .msg div:last-child{
    margin-top: 5px;
    /*background-color: #ffde96;*/
  }
 .msg div span{
   font-size: 14px;
   color: #4e7dff;
   margin-right: 15px;
 }
  .msg div h4{
    font-size: 15px;
    color: #c18ddb;
  }
  .mainList{
    /*background-color: yellow;*/
    min-height: 100px;
    width: 70%;
    margin-left:3%;
  }
  .oneList{
    text-align: center;
    background-color: white;
  }

  .oneList div span{
    /*margin-left: 10px;*/
    text-align: left;
    margin-left: 20px;
    padding-right: 10px;
    display: block;
    margin-top: 7px;
    /*margin-bottom: 20px;*/
  }
  img{
    width: 100%;
  }
  .oneList:hover{
    position: relative;
    left: -10px;
    top:-10px;
    box-shadow:2px 2px 5px 2px #a8a8a8;
  }
  .oneList div span.inner{
    display: inline;
    margin-left: 10px;
  }
</style>

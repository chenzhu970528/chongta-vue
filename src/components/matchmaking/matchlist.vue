<!--婚介列表-->
<template>
  <div>
    <div class="row"  v-for="showList in showLists">
      <div class="col-xs-8 list">
        <router-link :to="'/matchmaking/matchDel/'+showList.relId">
          <img src="../../assets/match/mao1.jpg" alt="..." class="img-rounded col-xs-3">
        </router-link>
        <div class="col-xs-8 msg">
          <div>
            <h4>基本信息</h4>
            <span class="firstspan">姓名：{{showList.PetName}}</span><span>{{showList.sex}}</span><span>年龄：{{showList.age}}个月</span><span>家住：{{showList.address}}</span>
          </div>
          <div>
            <h4>主人寄语</h4>
            <span class="firstspan">{{showList.sandword}}</span>
          </div>
        </div>
      </div>
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
  .row{
    margin-top: 30px;
  }
  .list{
    border: 1px solid #b0b6ff;
    border-radius:10px;
    position: relative;
    margin-left: 5%;
    background-color: #e6e8f9;
  }
  .msg{
    position: absolute;
    right: 0px;
    margin-top: 7px;
  }
  .firstspan{
    margin-left: 20px;
  }
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
</style>

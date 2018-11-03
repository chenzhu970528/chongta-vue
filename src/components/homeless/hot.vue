<template>
  <div class="list-group col-xs-4" >
    <img src="../../assets/homeless/211-bEkqqn_fw658.png" alt="" class="topPic">
    <div class="button">
      <router-link to="/homeless/publish"><span>发布流浪</span></router-link>
      <router-link to="/homeless/wantadopt"><span>发布寻宠</span></router-link>
    </div>
    <div class="right">
      <div class="title2" >
         <h3 class="line">最新寻宠</h3>
        <!--<div class="inner_ado" id="scroll">-->
        <el-row v-for="(diary,index) in diarys" :key="index" class="ROW">
          <router-link  tag="li" :to="'/homeless/lostdetails/'+diary.lpId" style="list-style: none;cursor: pointer" exact>
          <el-col :span="5">
            <img alt="" :src="urlImg(diary.lppic.split(',')[0])">
          </el-col>
          <el-col :span="17" :push="2">
            <span>时间：{{diary.lpTime}}</span>
            <span>丢失地点：{{diary.address}}</span>
            <span >报酬：{{diary.reward}} </span>
            <span v-if="diary.state==0" class="founded">进程：寻找中</span>
            <span v-if="diary.state==1" class="founded1">进程：已找到</span>
          </el-col>
          </router-link>
        </el-row>

      </div>
    </div>
    <div class="ct">
      <img src="../../assets/homeless/ct.png" alt="">
    </div>
  </div>
    <!--</div>-->
</template>

<script>
  import axios from 'axios'
  export default {
    name: "all",
    methods:{
      urlImg(str){
        return this.url+str
      }
    },
    data() {
      return {
        mydata: [],
        diarys: [],
        url:this.$store.state.url
      };
    },

    created() {
      //     let _this = this;
      //     this.$ajax.get(`http://localhost:3000/homeless/${this.id}`
      //     ).then(function (result) {
      //       // console.log(result.data.data.userHeadPic);
      //       _this.mydata = result.data.data.mydata;
      //       _this.diarys = result.data.data.diarys;
      //       _this.homeTime = result.data.data.homeTime.substring(0, 10);
      //     }, function (err) {
      //       console.log(err);
      //   })
      // }
      axios.get(this.$store.state.url+"/homeless/getLatest").then((result) => {
        // console.log(result.data)
        this.mydata = result.data.data;
        // this.homeTime = result.data.data.homeTime
        // console.log(result.data)
        for (let i = 0; i < this.mydata.length; i++) {
          this.diarys.push(this.mydata[i])
          if (this.mydata[i].reward == '') this.mydata[i].reward = '无'
        }
      })
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
    margin-top: 30px;
    overflow: auto;
    margin-right: -7%;
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
  /*div{*/
    /*background-color: palevioletred;*/
  .button{
    margin-bottom: 30px;
    position: relative;
    padding-left: 40%;
    /*background-color: yellow;*/
  }
  .title2 span{
    display: block;
  }
  .topPic{
   width: 80%;
    margin-left: 70px;
    margin-top: -10px;
  }
  .button span{
    display: inline-block;
    border: 1px solid cornflowerblue;
    font-size: 22px;
    width: 100px;
    background-color: cornflowerblue;
    color:white;
    text-align: center;
    margin-left: 10px;
    border-radius: 5px;
  }
  .right{
    float: right;
    width: 350px;
    padding: 0 20px 25px 20px;
    border: 1px solid #E6E6E6;
    box-shadow: 0 0 4px #ECECEC;
    background-color: #FFFFFF;
    min-height: 500px;
  }
  .line{
    border-bottom: 1px solid #E8E8E8;

  }
  .ROW{
    margin-bottom: 10px;
  }
  .title2{
    margin-top: 36px;
    /*border-bottom: 1px solid #E8E8E8;*/

  }
  .title2 img{
    height: 70px;
    width: 70px;
  }
  .ct img{

    margin-left: 60px;
  }
  .founded{
    float: right;
    color: #fda65f;
  }
  .founded1{
    float: right;
    color: #6494ec;
  }
</style>

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
        <el-row v-for="(diary,index) in diarys" :key="index"class="ROW">

         <!--<div>-->
           <!--<router-link   tag="li" :to="'/homeless/lostpetsdetails/'+diary.lpId" style="cursor: pointer;list-style: none" exact>-->
          <el-col :span="7">
            <img alt="" :src="urlImg(diary.lppic.split(',')[0])">
          </el-col>
           <!--</router-link>-->
           <!--</div>-->

          <el-col :span="16" :push="1">
            <span>时间：{{diary.lpTime}}</span>
            <span>丢失地点：{{diary.address}}</span>
            <span >报酬：{{diary.reward}}</span>
          </el-col>
        </el-row>
         <!--<ul class="lie" v-for="diary in diarys">-->
           <!--<li>-->
             <!--<a href="">-->
               <!--<span>{{diary.getmes}}</span>-->
             <!--</a>-->
           <!--</li>-->
         <!--</ul>-->
      </div>
    </div>
  </div>
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
          this.diarys.push(this.mydata[i]);
          if(this.diarys[i].reward=='') this.diarys[i].reward='无'
        }
      })
    }
  }
</script>

<style scoped>
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
</style>

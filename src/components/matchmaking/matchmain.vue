<!--婚介中心-->
<template>
  <div class="tol">
    <div class="top"></div>
    <div class="cont container">
      <!--<div class="route">您的当前位置：<span>宠物婚介</span></div>-->
      <el-row>
        <el-col :span="14">
          <app-select></app-select>
        </el-col>
        <el-col class="issue" :span="8" :push="3">
          <div class="main">
            <!--<span class="stand"></span>-->
            <div class="cat">
              <div class="body"></div>
              <div class="head">
                <div class="ear"></div>
                <div class="ear"></div>
              </div>
              <div class="face">
                <div class="nose"></div>
                <div class="whisker-container">
                  <div class="whisker"></div>
                  <div class="whisker"></div>
                </div>
                <div class="whisker-container">
                  <div class="whisker"></div>
                  <div class="whisker"></div>
                </div>
              </div>
              <div class="tail-container">
                <div class="tail">
                  <div class="tail">
                    <div class="tail">
                      <div class="tail">
                        <div class="tail">
                          <div class="tail">
                            <div class="tail"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="qrCord" @click="ajaxuser">
              <!--<div class="erweima"><img src="../../assets/homeless/E997FFB8C02AEA4FDB1644CF03466ED5.png" alt=""></div>-->
              <router-link  to="/matchmaking/mpublish"  class="btn"><span>我要发布</span></router-link>
              <!--<img src="../../assets/adoption/0974a659d83ad4c85bf93dd1c987cae2.png" alt="">-->

            </div>
          </div>
        </el-col>
      </el-row>

      <!--<router-link to="/matchmaking/mpublish"><button style="font-size: 22px" class="publish">我要发布</button></router-link>-->
      <!--排序-->
      <div class="listStyle">
      <span>
        <!--<span><router-link  to="/matchmaking" class="her" active-class="active" role="presentation" exact>默认</router-link></span>-->
        <span><router-link  active-class="active" role="presentation" to="/matchmaking/TimeDesc" class="her style1">查看最新<span class="glyphicon glyphicon-arrow-up" ></span></router-link></span>
        <span><router-link  to="/matchmaking/Timeasc" class="her style2">按时间<span class="glyphicon glyphicon-arrow-down"></span></router-link></span>
        <span><router-link  to="/matchmaking/HotDesc" class="her style3">查看最热<span class="glyphicon glyphicon-fire" ></span></router-link></span>
      </span>
      </div>
      <router-view></router-view>
      <match-hot></match-hot>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import  matchhot from './match-hot.vue'
  import Header from '../Header.vue'
  import  matchlist from './matchlist.vue'
  import select from '../adoption/AdoptionSizer'
  export default {
    name: "matchmain",
    components:{
      'app-header':Header,
      'match-list':matchlist,
      'app-select':select,
      'match-hot':matchhot
    },
    data(){
      return{
        show:false,
        relId:this.$store.state.userId
      }
    },
    methods:{
      // 判断是否完善个人信息
      ajaxuser(){
        console.log('++++++++++++')
        axios.get(this.$store.state.url + `/user/showUser/${this.relId}`).then((result) => {
          console.log(result.data.data[0].address.length)
          if(result.data.data[0].address.length==0){
            alert('请完善个人信息后提交');
            location.href=this.$store.state.myurl+'/user/update'
          }
        })
          .catch((err) => {
            console.log(err)
          })
      },
    }
  }
</script>

<style scoped>
  .tol{
    background-color: white;
  }
  .top{
    width: 100%;
    height: 420px;
    background: 0 50% url("../../assets/adoption/homeless8.jpg") no-repeat;
    background-size: 100% auto;
    /*background-size: 100% auto;*/
    /*min-height: 900px;*/
    position: relative;
  }
  .cont{
    width: 1240px;
    /*background:rgba(255,255,255,0.9);*/
    /*margin-top:150px ;*/
    /*box-shadow:-2px 2px 10px 2px #bcbcbc;*/
    position: relative;
  }
  .publish{
    border: none;
    background-color: transparent;
    color: #7d94ff;
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    right: 170px;
    top: 200px;
  }
  .route{
    position: relative;
    left: 1%;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    color: #747474;
  }
  .route span{
    margin-right: 10px;
    font-size: 13px;
  }
  .route span:last-child{
    color: #4e76ff;
  }
  .issue img{
    width: 300px;
    position: relative;
    left: 20px;
  }
  .listStyle span span{
    margin-right: 7px;
  }
  .listStyle span span:first-child{
    margin-left: 5px;
  }
  .her{
    text-decoration: none;
    color: grey;
  }
  .style1:focus{
    color: #c382ed
  }
  .style2:focus{
    color: cornflowerblue
  }
  .style3:focus{
    color: #ed5652
  }
  .qrCord span{
    position: absolute;
    font-size: 30px;
    left: 96px;
    top:194px;
    z-index:1;
    width: 200px;
    background-color: cornflowerblue;
    color: whitesmoke;
    border-radius: 5px;
  }

  .qrCord img{
    width: 400px;
    position: relative;
    top:-150px;
  }
  .qrCord hr{
    position: absolute;
    top:141px;
    left: 135px;
    width: 100px;
    border: 2px solid #909ee1;
  }
  @keyframes tail {
    6.6666666667% {
      transform: rotate(0);
    }
    10% {
      transform: rotate(10deg);
    }
    16.6666666667% {
      transform: rotate(-5deg);
    }
    20% {
      transform: rotate(30deg);
    }
    26.6666666667% {
      transform: rotate(-2deg);
    }
    46.6666666667% {
      transform: rotate(10deg);
    }
    53.3333333333% {
      transform: rotate(-5deg);
    }
    56.6666666667% {
      transform: rotate(10deg);
    }
  }
  @keyframes body {
    6.6666666667% {
      transform: scaleY(1);
    }
    10% {
      transform: scaleY(1.15);
    }
    16.6666666667% {
      transform: scaleY(1);
    }
    20% {
      transform: scaleY(1.25);
    }
    26.6666666667% {
      transform: scaleY(1);
    }
    46.6666666667% {
      transform: scaleY(1.15);
    }
    53.3333333333% {
      transform: scaleY(1);
    }
    56.6666666667% {
      transform: scaleY(1.15);
    }
  }
  @keyframes left-whisker {
    6.6666666667% {
      transform: rotate(0);
    }
    10% {
      transform: rotate(0deg);
    }
    16.6666666667% {
      transform: rotate(-5deg);
    }
    20% {
      transform: rotate(0deg);
    }
    26.6666666667% {
      transform: rotate(0deg);
    }
    46.6666666667% {
      transform: rotate(10deg);
    }
    53.3333333333% {
      transform: rotate(-5deg);
    }
    56.6666666667% {
      transform: rotate(10deg);
    }
  }
  @keyframes right-whisker {
    6.6666666667% {
      transform: rotate(180deg);
    }
    10% {
      transform: rotate(190deg);
    }
    16.6666666667% {
      transform: rotate(180deg);
    }
    20% {
      transform: rotate(175deg);
    }
    26.6666666667% {
      transform: rotate(190deg);
    }
    46.6666666667% {
      transform: rotate(180deg);
    }
    53.3333333333% {
      transform: rotate(185deg);
    }
    56.6666666667% {
      transform: rotate(175deg);
    }
  }
  @keyframes left-ear {
    0% {
      transform: rotate(-20deg);
    }
    6.6666666667% {
      transform: rotate(-6deg);
    }
    13.3333333333% {
      transform: rotate(-15deg);
    }
    26.6666666667% {
      transform: rotate(-15deg);
    }
    33.3333333333% {
      transform: rotate(-30deg);
    }
    40% {
      transform: rotate(-30deg);
    }
    46.6666666667% {
      transform: rotate(0deg);
    }
    53.3333333333% {
      transform: rotate(0deg);
    }
    60% {
      transform: rotate(-15deg);
    }
    80% {
      transform: rotate(-15deg);
    }
    93.3333333333% {
      transform: rotate(-6deg);
    }
    100% {
      transform: rotateZ(-6deg);
    }
  }
  @keyframes right-ear {
    0% {
      transform: rotateZ(-16deg);
    }
    6.6666666667% {
      transform: rotateZ(-16deg);
    }
    13.3333333333% {
      transform: rotateZ(-19deg);
    }
    26.6666666667% {
      transform: rotateZ(-19deg);
    }
    33.3333333333% {
      transform: rotateZ(-30deg);
    }
    36.6666666667% {
      transform: rotateZ(-19deg);
    }
    37.3333333333% {
      transform: rotateZ(-30deg);
    }
    38% {
      transform: rotateZ(-19deg);
    }
    40% {
      transform: rotateZ(-19deg);
    }
    40.6666666667% {
      transform: rotateZ(-30deg);
    }
    41.3333333333% {
      transform: rotateZ(-19deg);
    }
    46.6666666667% {
      transform: rotateZ(-9deg);
    }
    53.3333333333% {
      transform: rotateZ(-9deg);
    }
    60% {
      transform: rotateZ(-19deg);
    }
    60.6666666667% {
      transform: rotateZ(-30deg);
    }
    61.3333333333% {
      transform: rotateZ(-19deg);
    }
    62.6666666667% {
      transform: rotateZ(-19deg);
    }
    63.3333333333% {
      transform: rotateZ(-30deg);
    }
    64% {
      transform: rotateZ(-19deg);
    }
    80% {
      transform: rotateZ(-19deg);
    }
    93.3333333333% {
      transform: rotateZ(-16deg);
    }
    100% {
      transform: rotateZ(-16deg);
    }
  }
  .main {
    height: 400px;
    width: 400px;
    position: absolute;
    top: 20px;
    /*left: 66%;*/
  }
  .main .stand {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    height: 20px;
    width: 200px;
    border-radius: 20px;
    background-color: #80b5d0;
    z-index: 2;
  }
  .main .stand::after {
    content: "";
    position: absolute;
    bottom: -10px;
    /*left: 50%;*/
    transform: translate(-50%);
    height: 10px;
    width: 50px;
    border-radius: 20px;
    background-color: #597d9d;
  }
  .main .cat {
    width: 110px;
    height: 50px;
    position: absolute;
    top: calc(50% - 50px);
    right: 130px;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
  }
  .main .cat .body {
    width: 110px;
    height: 50px;
    background-color: #999;
    position: absolute;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    animation: body 12s none infinite;
  }
  .main .cat .head {
    content: "";
    width: 70px;
    height: 35px;
    background-color: #999;
    position: absolute;
    top: calc(50% - 10px);
    left: -40px;
    border-top-left-radius: 80px;
    border-top-right-radius: 80px;
  }

  .tail-container {
    position: absolute;
    right: 0;
    bottom: -13px;
    z-index: 3;
  }

  .tail {
    position: absolute;
    height: 30px;
    width: 14px;
    bottom: -10px;
    right: 0;
    border-bottom-right-radius: 5px;
    background: #999;
    z-index: 0;
  }
  .tail > .tail {
    animation: tail 12s none infinite;
    height: 100%;
    width: 14px;
    transform-origin: left;
    border-bottom-left-radius: 20px 20px;
    border-bottom-right-radius: 20px 20px;
    border-top-right-radius: 40px;
  }

  .ear {
    position: absolute;
    left: 4px;
    top: -4px;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 20px solid #999;
    transform: rotate(-30deg);
    animation: left-ear 12s both infinite;
  }
  .ear + .ear {
    animation: right-ear 12s both infinite;
    top: -12px;
    left: 30px;
  }

  .nose {
    position: absolute;
    bottom: 10px;
    left: -10px;
    background-color: #fd6e72;
    height: 5px;
    width: 5px;
    border-radius: 50%;
  }

  .whisker-container {
    position: absolute;
    bottom: 5px;
    left: -36px;
    width: 20px;
    height: 10px;
    transform-origin: right;
    animation: left-whisker 12s both infinite;
  }
  .whisker-container:nth-child(2) {
    left: -20px;
    bottom: 12px;
    transform-origin: right;
    transform: rotate(180deg);
    animation: right-whisker 12s both infinite;
  }

  .whisker {
    position: absolute;
    top: 0;
    width: 100%;
    border: 1px solid #fdf9de;
    transform-origin: 100% 0;
    transform: rotate(10deg);
  }
  .whisker:last-child {
    top: 0;
    transform: rotate(-20deg);
  }
</style>

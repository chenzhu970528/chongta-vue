<template>
    <div class="tol">
      <div class="top">
        <!--<div class="topText"></div>-->
      </div>
      <!--<sildes-show></sildes-show>-->
      <div class="cont container">
        <!--<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">-->
          <!--&lt;!&ndash; Indicators &ndash;&gt;-->
          <!--<ol class="carousel-indicators">-->
            <!--<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>-->
            <!--<li data-target="#carousel-example-generic" data-slide-to="1"></li>-->
            <!--<li data-target="#carousel-example-generic" data-slide-to="2"></li>-->
          <!--</ol>-->

          <!--&lt;!&ndash; Wrapper for slides &ndash;&gt;-->
          <!--<div class="carousel-inner" role="listbox">-->
            <!--<div class="item active">-->
              <!--<ul>-->
                <!--<li>-->
                  <!--<router-link tag="a" active-class="active" role="presentation" :to="">-->
                    <!--<img  @click="see()"  class=img :src=values[0].img>-->
                    <!--<p @click="see()" class="p"><span class="left0"></span><a @click="see()"  class="a title"></a></p>-->
                  <!--</router-link>-->
                <!--</li>-->
              <!--</ul>-->
            <!--</div>-->
            <!--<div class="item">-->
              <!--<img src="" alt="...">-->
              <!--<div class="carousel-caption">-->
                <!--...-->
              <!--</div>-->
            <!--</div>-->
            <!--...-->
          <!--</div>-->

          <!--&lt;!&ndash; Controls &ndash;&gt;-->
          <!--<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">-->
            <!--<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>-->
            <!--<span class="sr-only">Previous</span>-->
          <!--</a>-->
          <!--<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">-->
            <!--<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>-->
            <!--<span class="sr-only">Next</span>-->
          <!--</a>-->
        <!--</div>-->

        <!--小喵-->
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
          <div class="qrCord">
            <!--<div class="erweima"><img src="../../assets/homeless/E997FFB8C02AEA4FDB1644CF03466ED5.png" alt=""></div>-->
            <router-link  to="/adoption/issue" class="btn"><span>求抱走</span></router-link>
            <!--<img src="../../assets/adoption/0974a659d83ad4c85bf93dd1c987cae2.png" alt="">-->

          </div>
        </div>

        <!--主体-->
        <!--<div class="route">您的当前位置：<span>领养中心</span></div>-->
        <div class="title">
          <img src="../../assets/adoption/take.png" width="50" alt="">
          <span class="text-primary">萌宠分类</span>
        </div>
        <div class="row">
          <div class="col-sm-12" >
            <ado-sizer></ado-sizer>
            <div class="title">
              <img src="../../assets/adoption/iconHome.png" width="50" alt="">
              <span class="text-primary">领养信息</span>
            </div>
              <ado-list></ado-list>
          </div>
          <div class="col-sm-4">
            <!--求抱走-->
            <!--<div class="issue">-->
              <!--<img src="../../assets/adoption/a051a6562121e26.png" alt="">-->
            <!--</div>-->
            <!--二维码-->

          </div>
        </div>
      </div>
    </div>
</template>

<script>
  // 头部轮播图
  import Slideshow from '../adoption/AdoptionSlideshow.vue'
  //宠物筛选器
  import Sizer from '../adoption/AdoptionSizer'
  // 宠物列表
  import List from '../adoption/AdoptionList'
  //获取所有信息
  import {mapGetters} from 'vuex';
  import axios from 'axios'
    export default {
        name: "Adoption",
      components:{
        'sildes-show':Slideshow,
        'ado-sizer': Sizer,
        'ado-list':List
      },
      computed: mapGetters([
        'UserId',
        'UserName',
        'isLogin'
      ])
    }
</script>

<style scoped>
  .tol{
    /*margin-top: 70px;*/
    background-color: white;
  }
  /*a{*/
    /*text-decoration: none;*/
  /*}*/
  .route span{
    margin-right: 10px;
    font-size: 13px;
  }
  .route span:last-child{
    color: #4e76ff;
  }
  .cont{
    width: 1240px;
    position: relative;
    /*background:rgba(255,255,255,0.9);*/
    /*margin-top:150px;*/
    margin-bottom: 50px;
    /*box-shadow:-2px 2px 10px 2px #bcbcbc;*/
    min-height: 700px;
  }
  .top{
    width: 100%;
    height: 420px;
    background:url("../../assets/match/match2.png") no-repeat center;
    /*min-height: 900px;*/
    position: relative;
  }
  .topText{
    width: 200px;
    height: 300px;
    border: 3px solid #8ea6f5;
    border-bottom: none;
    position: absolute;
    right: 12%;
    bottom: 0;
  }
  .issue img{
    margin-left: 55px;
    width: 300px;
    position: relative;
  }
  .qrCord span{
    position: absolute;
    font-size: 30px;
    left: 96px;
    top:199px;
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
  .title{
    margin-top: 20px;
    height: 50px;
    position: relative;
  }
  .title span{
    font-size: 28px;
    font-weight: 700;
    position: absolute;
    left: 65px;
    top: 12px;
  }
  .erweima{
    /*border:2px solid darkslategray;*/
    width: 200px;height: 200px;
    margin-top: 153px;
    margin-left: -13px;
    /*box-shadow: darkgrey 10px 10px 30px 5px*/
  }
  .erweima img{
    width: 200px;
    height: 200px;
    margin-top: 153px;
    margin-left: 1px;

  }

  /*小猫*/
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
    left: 66%;
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
    left: 50%;
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

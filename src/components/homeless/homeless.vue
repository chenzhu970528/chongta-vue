<template>
  <div class="tol" >
    <div class="top">
      <div class="top1" :style="{height:height1}"></div>
      <div class="col-xs-8 col-xs-offset-2 text" style="">
        <!--<div style="float: left;position: relative;z-index: 20; width: 30px;height: 30px;">-->
          <!--<img src="../../assets/homeless/8639acb25039bc5a92e3ea84dc3677ce0d0fa58aa3c6c-EbtJL9_fw658.gif" alt="">-->
        <!--</div>-->
        <h1 style="">“</h1>
        <p style="font-size: 18px">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;救助和领养，不仅仅是一时的不忍和爱心，真的是一件需要我们花时<br>
          间，花精力、花金钱的事情。同时，它们的命运也在您的一念之间。如 <br>
          果您现在还没有能力做救助人，那么从宣传“领养代替购买、文明养宠，不 <br>
          遗弃、不伤害”开始，让周围的人正确的对待身边的动物。
        </p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <fenlei></fenlei>
      </div>
    </div>
    <div class="foot">
      <foot-black></foot-black>
    </div>
  </div>
</template>

<script>

  import fenlei from './fenlei'
  import cat from './cat'
  import  footBlack from '../../components/footBlack.vue'
  export default {
    data(){
      return{
        height1:window.screen.height*0.56+'px'
      }
    },
    methods: {
      toHome() {
        this.$router.push({path: '/'})
      },
    },
    components: {
      'fenlei': fenlei,
      // 'hot':hot,
      'cat': cat,
      'foot-black':footBlack
    }
  }


</script>

<style scoped>
  .tol{
    background-color: white;
    width: 100%;
    min-width:1280px;
  }
  .container{
    width: 1240px;
    margin-top: 30px;
    /*width: 100%;*/
    /*background: rgba(255, 84, 89, 0.9);*/
    /*background-color: white;*/
    /*margin-top:150px ;*/
    /*box-shadow:-2px 2px 10px 2px #bcbcbc;*/
    position: relative;
  }
  .top{
    width: 100%;
    height: 700px;
  }
  .top1{
    width: 100%;
    /*height: 66%;*/
    background:0 33% url("../../assets/homeless/homeless7.jpg") no-repeat;
    background-size:  100% auto;
    /*min-height: 900px;*/
    position: relative;
  }

  img{
    height: 300px;
    width: 300px;
  }
  .text{
    height:300px;
    color: #656565;
  }
  .text h1{
    font-size: 100px;text-align: center;padding-top: 30px
  }
  .text p{
    text-align: center;
    /*height: 112px;*/
    color: #656565;
    margin-top: -40px;
    /*background-color: purple;*/
  }
  .row{
    margin-bottom: 30px;
  }
  ul{
    width: 500px;
    /*background-color: aqua;*/
    position: relative;
    left: 100px;
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
</style>

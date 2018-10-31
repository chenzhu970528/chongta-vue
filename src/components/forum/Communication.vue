<template>
  <div class="tol">
    <div class="top"></div>
    <div id="content">

      <div class="publish">
        <com_b></com_b>
      </div>

      <div>
        <mostCom>评论多的</mostCom>
      </div>
      <com_d></com_d>
      <div>
        <div class="left">
          <block></block>
        </div>
        <!--<div class="right">-->
          <!--<ranking></ranking>-->
        <!--</div>-->
        <hot></hot>
      </div>
    </div>
  </div>
</template>

<script>
  import Block from './Block.vue'
  import Com_b from './Com_b.vue'
  import Com_d from './Com_d.vue'
  import Ranking from './Ranking'
  import MostCom from './MostCom.vue'
  import hot from './hot.vue'
  export default {
    name: "Communication",
    components: {
      'block': Block,
      'com_b': Com_b,
      'ranking':Ranking,
      'com_d': Com_d,
      'mostCom': MostCom,
      'hot': hot,

    },
    data :function (){
      return{

      }
    },
  }
</script>

<style scoped>
  .tol{
    /*margin-top: 70px;*/
    background-color: #f6f6f6;
  }
  .top{
    width: 100%;
    height: 420px;
    background:0 70% url("../../assets/forum/12.jpg") no-repeat;
    background-size: 100% ;
    /*min-height: 900px;*/
    position: relative;
  }


  .publish{
    /*position: relative;*/
    margin-bottom:40px;
    margin-left: 20%;
  }
  body {
    margin: 0;
    padding: 0
  }

  #content {
    /*box-shadow: -2px 2px 10px 2px #bcbcbc;*/
    /*background: rgba(255, 255, 255, 0.9);*/
    width: 1240px;
    margin: auto;
    position: relative;
    padding-bottom: 200px;
    margin-top:30px;
  }

  .body {
    padding: 0 10px;
    margin: 10px 0;
  }

  .row {
    margin-left: 0;
    margin-right: 0;
  }

  .left {
    display: inline-block;
    width: 830px;
    margin-left:250px;
  }

  .right {
    display: inline-block;
    right: 60px;
    position: absolute;
    width: 360px;
    margin-top: 10px;
    margin-right: -35px;
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

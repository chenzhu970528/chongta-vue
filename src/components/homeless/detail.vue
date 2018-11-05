<template>
  <div class="all">
    <div class="top"></div>
    <div class="cont container">

      <!--<div class="container1"></div>-->
      <!--<div class="container2">-->
        <!--<detailsimg></detailsimg>-->
      <!--</div>-->
      <div class="route">您的当前位置：<span><a href="/homeless">流浪精灵/寻宠之家</a></span><span>/</span><span>详情</span></div>
      <div class="title">
        <img src="../../assets/adoption/take.png" width="50" alt="">
        <span class="text-primary">流浪详情</span>
      </div>
      <div class="adoTitle">
        <h3 class="text-primary">{{mydata.getmes}}</h3>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-xs-5" style="margin-top: 7px">
            <detailsimg></detailsimg>
          </div>
          <div class="col-xs-7">
            <detailsmes></detailsmes>
          </div>
        </div>
        <div class="descript">
          <div class="container text-muted">
            {{mydata.detail}}
            联系我时，请说明来自：宠它
            <p class="text-danger" style="margin-top: 10px"><span class="glyphicon glyphicon-alert" aria-hidden="true"> </span> 安全提示：请不要相信任何需要金钱交易的无偿领养！例如宠物免费，骗取运费等常见骗术！</p>
          </div>
        </div>

        <!--&lt;!&ndash;<div class="recommend">&ndash;&gt;-->
        <!--&lt;!&ndash;<h4 class="text-primary">你可能对以下内容感兴趣</h4>&ndash;&gt;-->
        <!--&lt;!&ndash;<ado-recommend></ado-recommend>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
      </div>
    </div>
    <div class="foot">
      <foot></foot>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  // import Recommend from '../homeless/Recommend'
  import detailsimg from '../homeless/detailsimg.vue'
  import detailsmes from '../homeless/detailsmes.vue'
  import  foot from '../../components/foot'

  export default {
    name: "detail",
    components:{
      'detailsimg':detailsimg,
      'detailsmes':detailsmes,
      // 'ado-recommend':Recommend
      'foot':foot
    },
    data(){
      return{
        homeId:this.$route.params.homeId,
        // 详细信息
        mydata:[],
      }
    },
    created(){
      axios.get(this.$store.state.url+`/homeless/details/${this.homeId}`).then((result) => {
        // console.log(result.data)
        this.mydata = result.data.data
      })
    }
  }
</script>

<style scoped>
  .all{
    /*background-color: #f7f7f7;*/
    padding-top: 150px;
    padding-bottom: 30px;
  }
  a{
    color: #747474;
  }
  a:hover{
    text-decoration: none;
    color: #4e76ff;
  }
  .cont{
    background: rgba(247, 247, 247, 0.9);
    /*margin-top:150px ;*/
    box-shadow:-2px 2px 10px 2px #bcbcbc;
    min-height: 500px;
    width: 1240px;
    position: relative;
  }
  .top{
    width: 100%;
    height: 110px;
    background-color: #fff;
    margin-top: -150px;
    z-index: 3;
    box-shadow: -2px 2px 10px 2px #f8f8f8;
    margin-bottom:50px;
  }
  /*.container1{*/
    /*width: 90%;*/
    /*height: 400px;*/
    /*background-color: cornflowerblue;*/
    /*position: absolute;*/
    /*right: 0;*/
    /*bottom: 0;*/
  /*}*/
  /*.container2{*/
    /*width: 60%;*/
    /*height: 300px;*/
    /*background-color: yellow;*/
    /*position: absolute;*/
    /*left: 0;*/
    /*top:0*/
  /*}*/
  .adoTitle{
    width: 1136px;
    margin: 0  auto;
    border-bottom: 2px dashed #5bacfd;
    margin-bottom: 20px;
  }
  .adoTitle h3{
    margin-left: 20px;
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
  .descript{
    margin-top: 20px;
  }
  .descript .container{
    padding: 20px 20px 10px;
    width: 1136px;
    margin: 0px auto;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 18px;
  }
  .recommend {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 40px;
  }
  .recommend h4{
    width: 200px;
    margin: 0 auto;
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

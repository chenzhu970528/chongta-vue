<template>
  <div class="tol">
    <div class="top"></div>
    <div class="cont container">
      <ol class="breadcrumb">
        您当前位置为：
        <li><a href="/adoption">领养中心</a></li>
        <!--<li><a href="#">详情</a></li>-->
        <li class="active">{{adoType}}详情</li>
      </ol>
      <div class="title">
        <img src="../../assets/adoption/take.png" width="50" alt="">
        <span class="text-primary">{{adoType}}详情</span>
      </div>
      <div class="adoTitle">
        <div class="row">
          <h3 class="text-primary col-xs-5">{{mydata.adoTitle}}</h3>
          <div class="col-xs-2 col-xs-offset-5 type"><span class="glyphicon glyphicon-stats"></span> 类型：{{adoType}}</div>
        </div>

      </div>

      <div class="container">
        <div class="row">
          <div class="col-xs-5" style="margin-top: 25px">
            <img-album></img-album>
          </div>
          <div class="col-xs-7">
            <ado-info></ado-info>
          </div>
        </div>
        <div class="descript">
          <div class="container text-muted">
            {{mydata.detail}}
            联系我时，请说明来自：宠它

            <p class="text-danger" style="margin-top: 10px"><span class="glyphicon glyphicon-alert" aria-hidden="true"> </span> 安全提示：请不要相信任何需要金钱交易的无偿领养！例如宠物免费，骗取运费等常见骗术！</p>
          </div>
        </div>

        <div class="recommend">
          <h4 class="text-primary">你可能对以下内容感兴趣</h4>
          <ado-recommend></ado-recommend>
        </div>
      </div>
    </div>
    <div class="foot">
      <foot></foot>
    </div>
  </div>

</template>

<script>
  import store from './store.js'
  import axios from 'axios'
  import Recommend from '../adoption/DetailsRecommend'
  import Album from '../adoption/DetailsImg.vue'
  import Info from '../adoption/DetailsInfo.vue'
  import  foot from '../../components/foot'

  export default {
        name: "AdoptDetails",
      components:{
          'img-album':Album,
          'ado-info':Info,
        'ado-recommend':Recommend,
        'foot':foot
      },
      data(){
          return{
            adoId:this.$route.params.adoId,
            // 详细信息
            mydata:[],
          }
      },
      watch:{
        'cont':'myajax'
      },

      computed:{
        cont(){
          return store.state.cont
        },
        adoType:{
          get(){
            let _this=this
            if(_this.mydata.adoType==0){
              return '领养'
            }else {
              return '寄养'
            }
          }
        },
      },
      methods:{
        myajax(){
          let _this =this
          this.adoId=_this.$route.params.adoId,
          this.mydata=[]
          axios.get(this.$store.state.url+`/adoptions/details/${this.adoId}`).then((result) => {
            // console.log(result.data)
            this.mydata = result.data.data.jsondata;
          })
        }
      },
      created(){
        this.myajax()
      }
    }
</script>

<style scoped>
  .breadcrumb{
    background-color: transparent;
  }
  .cont{
    background:rgba(255,255,255,0.9);
    margin-top:150px ;
    box-shadow:-2px 2px 10px 2px #bcbcbc;
    min-height: 500px;
    width: 1240px;
  }
  .top{
    width: 100%;
    height: 110px;
    background-color: #fff;
    /*position: fixed;*/
    margin-bottom:-100px;
    top: 0;
    z-index: 3;
    /*box-shadow: -2px 2px 10px 2px #f8f8f8;*/
  }
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
  .type{
    color: #fff;
    background: cornflowerblue;
    width: 150px;
    height: 50px;
    font-size: 18px;
    line-height:50px;
    border-radius: 7px;
  }
</style>

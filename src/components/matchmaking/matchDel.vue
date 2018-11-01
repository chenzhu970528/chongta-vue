<!--婚介详情-->
<template>
  <div class="tol">
    <div class="top"></div>
    <div class="dang" v-if="Mdeldata.agree==='1'">
      <img src="../../assets/match/dANG1.png" alt="">
      <span>已经被其他小可爱领走了哦, <a href="/matchmaking">返回上一页</a></span>
    </div>
    <div class="cont container">
      <div class="route">您的当前位置：<span><a href="/matchmaking">宠物婚介</a></span><span>/</span><span>详情</span></div>
      <div class="row firstrow">
        <div class="col-xs-10 col-xs-offset-1 cent">
          <sowing-map></sowing-map>
          <match-message></match-message>
        </div>
      </div>
      <!--<m-aply></m-aply>-->
      <div class="row">
        <div class="col-xs-9 col-xs-offset-1 cent msg">
          <h3><span><img src="../../assets/match/sand.png" alt=""></span>主人寄语</h3>
          <div>{{Mdeldata.sandword}}</div>
          <h3><span><img src="../../assets/match/request.png" alt=""></span>要求</h3>
          <div>{{Mdeldata.request}}</div>
          <h3><span><img src="../../assets/match/detail.png" alt=""></span>详细信息</h3>
          <div>{{Mdeldata.detail}}</div>
        </div>
      </div>
    </div>
    <!--<div style="position: absolute;display: inline-block;right: 20%;top: 68%;"></div>-->

  </div>

</template>

<script>
  import axios from 'axios'
  import maply from './maply.vue'
  import sowingmap from './sowingmap.vue'
  import  matchmsg from './matchmeg.vue'
    export default {
      name: "matchDel",
      components: {
        'sowing-map': sowingmap,
        'match-message': matchmsg,
        'm-aply': maply,
      },
      data() {
        return {
          pickerOptions1: {
            disabledDate(time) {
              return time.getTime() > Date.now();
            },
            shortcuts: [{
              text: '今天',
              onClick(picker) {
                picker.$emit('pick', new Date());
              }
            }, {
              text: '昨天',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', date);
              }
            }, {
              text: '一周前',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', date);
              }
            }]
          },
          value1: '',
          value2: '',
          input10: '',
          relId:this.$route.params.relId,
          Mdeldata:[],
        };
      },
      created(){
        axios.get(this.$store.state.url+`/matchmaking/matchdetail/${this.relId}`).then((result) => {
          // console.log(result.data.data[0])
          this.Mdeldata = result.data.data[0];
        })
      }
    };
</script>

<style scoped>
  .cont{
    width: 1240px;
    background:rgba(255,255,255,0.9);
    margin-top:150px ;
    box-shadow:-2px 2px 10px 2px #bcbcbc;
  }
  .top{
    width: 100%;
    height: 70px;
    background-color: whitesmoke;
    position: fixed;
    top: 0;
    z-index: 3;
  }
  a{
    color: #747474;
  }
  a:hover{
    text-decoration: none;
    color: #4e76ff;
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
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #af7adb;
  }
  .msg{
    margin-top: 10px;
    border: 2px dotted #bd7dfb;
    border-radius: 10px;
    margin-bottom: 30px;
  }
  h2{
    color: #6b6b6b;
    margin-left: 25px;
  }
  .firstrow{
    margin-top: 30px;
  }
  .msg div{
    font-size: 15px;
    color: grey;
    margin-left: 30px;
  }
  .msg div:last-child{
    font-size: 15px;
    color: grey;
    margin-left: 30px;
    padding-bottom: 10px;
  }
  h3 span{
    padding-right: 10px;
  }
  .dang{
    background-color: rgba(116,116,116,0.5);width: 100%;height: 730px;position: absolute;top: 70px;z-index: 1000000;text-align: center
  }
  .dang span{
    color: whitesmoke;font-weight: bold;font-size: 30px;position: absolute;left: 30%;top: 40%
  }
  .dang img{
    width: 300px;
  }
  .dang span a{
    color: whitesmoke;
  }
  .dang span a:hover{
    color: #c7d1ed;
  }
</style>

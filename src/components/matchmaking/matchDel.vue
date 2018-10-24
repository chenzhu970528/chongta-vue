<!--婚介详情-->
<template>
  <div>
    <div class="cont container">
      <div class="route">您的当前位置：<span><a href="/matchmaking">宠物婚介</a></span><span>/</span><span>详情</span></div>
      <h2>{{Mdeldata.title}}</h2>
        <div class="row firstrow">
          <div class="col-xs-10 col-xs-offset-1 cent">
            <sowing-map></sowing-map>
            <match-message></match-message>
            <div class="aply">
              <m-aply></m-aply>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-8 col-xs-offset-1 cent msg">
            <h3><span><img src="../../assets/match/sand.png" alt=""></span>主人寄语</h3>
            <div>{{Mdeldata.sandword}}</div>
            <h3><span><img src="../../assets/match/request.png" alt=""></span>要求</h3>
            <div>{{Mdeldata.request}}</div>
          </div>
        </div>
    </div>
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
          console.log(result.data.data[0])
          this.Mdeldata = result.data.data[0];
        })
      }
    };
</script>

<style scoped>
  .cont{
    width: 1240px;
    background:rgba(255,255,255,0.9);
    margin-top:100px ;
    box-shadow:-2px 2px 10px 2px #bcbcbc;
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
    /*background-color: palevioletred;*/
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
    /*background-color: yellow;*/
    border: 2px dotted #bd7dfb;
    border-radius: 10px;
    margin-bottom: 30px;
  }
  h2{
    color: #6b6b6b;
    margin-left: 18px;
  }
  .firstrow{
    margin-top: 30px;
  }
  .msg div{
    /*height: 50px;*/
    /*line-height: 50px;*/
    font-size: 15px;
    color: grey;
    /*padding-left: 30px;*/
  }
  h3 span{
    padding-right: 10px;
  }
</style>

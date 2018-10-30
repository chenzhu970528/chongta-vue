<template>
  <div style="margin-left: 35px" >
    <el-row>
      <el-col :span="5" v-for="(diary, index) in mydiarys" :key="index" :offset="index > 0 ? 4 : 0">
        <router-link class="list-group-item-info" tag="div" :to="'/adoption/details/'+diary.adoId"><a>
          <el-card  :body-style="{ padding: '0px' }">
            <div class="view">
              <img style="height: 180px" :src="urlImg(diary.adoPic.split(',')[0])" class="image">
              <div class="hover">
                <h3>{{ diary.petType }}</h3>
                <p>{{ diary.adoAddress }}</p>
              </div>
            </div>
            <div style="padding: 14px">
              <span v-if="diary.adostate==1" class="label">&nbsp;</span>
              <span>{{diary.adoTitle}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ diary.adoTime }}</time>
              </div>
            </div>
          </el-card>
        </a></router-link>
      </el-col>
    </el-row>

    <button style="margin: 20px auto" type="button" @click="getMore" class="btn btn-default btn-lg btn-block">加载更多
    </button>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "AdoptionList",
    data() {
      return {
        mydata: [],//获取所有数据
        diarys: [],
        dalength:0,
        moren:8,
        nomas:false,
        url:this.$store.state.url,
      };
    },
    computed:{
      mydiarys(){
        return this.diarys;
      }
    },
    methods: {
      ajaxall(){
        axios.get(this.$store.state.url+"/adoptions").then((result) => {
          // console.log(result.data.data)
          this.mydata = result.data.data;
          this.dalength=result.data.data.length-8
          this.handleInfo()
        })
          .catch((err) => {
            console.log(err)
          })
      },
      urlImg(str){
        // console.log(this.url+str)
        return this.url+str
      },
      getMore() {
      if(this.nomas) alert('没有更多啦');
        if (this.dalength < 4) {
          this.nomas = true;
          this.diarys = [];
            for (let i = 0; i < this.mydata.length; i++) {
              this.diarys.push(this.mydata[i])
            }
        }else {
          this.dalength -= 4;
          this.moren += 4;
          this.diarys = [];
          this.handleInfo()
        }
      },
      handleInfo(){
        for (let i = 0; i < this.moren; i++) {
          this.diarys.push(this.mydata[i])
        }
      },
    },
    mounted() {
      this.ajaxall()
    }
  }
</script>

<style scoped>
  .label{
    position: absolute;
    background: url("../../assets/adoption/ling.png")no-repeat;
    background-size: 100%;
    width: 120px;
    height: 120px;
    z-index: 10;
    left: 12px;
    top: 15px;
    transform:rotate(-34deg);
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .el-col {
    margin-left: 25px;
    margin-top: 25px;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .list-group-item-info:hover{
    position: relative;
    left: -10px;
    top:-10px;
    box-shadow:2px 2px 5px 2px #a8a8a8;
  }
  a{
    text-decoration:none;
  }

  .view{ width:200px; height:200px; overflow:hidden; position:relative; margin:10px; float:left;}
  .hover{
    width:200px; background:rgba(0, 0 ,0 ,0.5); position:absolute; top:40px; left:0; text-align:center; color:#fff;

    transform:rotate(55deg);
    -moz-transform:rotate(55deg);
    -webkit-transform:rotate(55deg);

    transition:all 0.5s;
    -moz-transition:all 0.5s;
    -webkit-transition:all 0.5s;

    overflow:hidden; height:0; z-index:4000;/*transform:translateX(200px);*/}/*写好样式，进行隐藏，用overflow:hidden; height:0;*/
  .hover h3{color:#fff; border-bottom:2px solid rgba(255, 255 ,255, 0.5); padding-bottom:10px;}
  .view:hover .hover{
    height:120px;

    transform:rotate(0deg);
    -moz-transform:rotate(0deg);
    -webkit-transform:rotate(0deg);
  }
  /*before   after为选择器，一般给选择器加动画背景，设置动画样式*/
  .view:before{
    content:""; position:absolute; top:-240px; right:0;width:360px; height:360px; background: rgba(217, 237, 247, 0.5);

    transform:rotate(55deg) translateX(60px);
    -moz-transform:rotate(55deg) translateX(60px);
    -webkit-transform:rotate(55deg) translateX(60px);

    transform-origin:100% 0%;
    -moz-transform-origin:100% 0%;
    -webkit-transform-origin:100% 0%;

    transition:all 0.5s ease 0.3s;
    -moz-transition:all 0.5s ease 0.3s;
    -webkit-transition:all 0.5s ease 0.3s;

  }/*写好样式，进行隐藏，用top:-240px;*/
  .view:hover:before{ top:0;}
  .view:after{
    content:""; position:absolute;bottom:-240px; left:0;width:360px; height:360px; background: rgba(217, 237, 247, 0.5);

    transform:rotate(55deg) translateX(-60px);
    -moz-transform:rotate(55deg) translateX(-60px);
    -webkit-transform:rotate(55deg) translateX(-60px);

    transform-origin:0% 100%;
    -moz-transform-origin:0% 100%;
    -webkit-transform-origin:0% 100%;

    transition:all 0.5s ease 0.3s;
    -moz-transition:all 0.5s ease 0.3s;
    -webkit-transition:all 0.5s ease 0.3s;
  }
  .view:hover:after{ bottom:0px;}


</style>

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
    <div v-if="nomore"class="nofind">
      <img src="../../assets/adoption/nofind.png" alt="">
      <p>抱歉，暂时没有找到相关的宠物</p>
      <p><a @click="other">你可以看一看其他宠物 ></a></p>
    </div>
    <button v-if="(diarys.length)>8&&(mydiarys.length<diarys.length)" @click="next" style="margin: 20px auto" type="button"  class="btn btn-default btn-lg btn-block">加载更多
    </button>
  </div>
</template>

<script>
  import axios from 'axios'
  import store from './store.js'
  export default {
    name: "AdoptionList",
    data() {
      return {
        nomore:false,
        mydata: [],//获取所有数据
        diarys: [],
        url:this.$store.state.url,
        Sizer:[],
        q:0,
        w:8,
        page:1,
        cou:0,
        mydiarys:[]
      };
    },
    computed:{
      adosex(){
       return store.state.petSex
      },
      adoage(){
        return store.state.petAge
      },
      adotype(){
        return store.state.petType
      }
    },
    watch:{
      'adosex':'sizer',
      'adotype':'sizer'
    },

    methods: {
      sizer(){
        this.nomore=false
        this.diarys=[]
        this.mydiarys=[]
        if(this.adotype==-1){
          if(this.adosex==-1){
            // 类型不限，性别不限
            for (let i = 0; i < this.mydata.length; i++) {
              this.diarys.push(this.mydata[i])
            }
          }
          else{
            // 类型不限，性别有限
            for (let i = 0; i < this.mydata.length; i++) {
              if(this.mydata[i].sex==this.adosex){
                this.diarys.push(this.mydata[i])
              }
            }
          }
        }
        else{
          if(this.adosex==-1){
            // 类型有限，性别不限
            for (let i = 0; i < this.mydata.length; i++) {
              if(this.mydata[i].petType==this.adotype){
                this.diarys.push(this.mydata[i])
              }
            }
          }
          else{
            // 类型有限，性别有限
            for (let i = 0; i < this.mydata.length; i++) {
              if(this.mydata[i].petType==this.adotype&&this.mydata[i].sex==this.adosex){
                this.diarys.push(this.mydata[i])
              }
            }
          }
        }
        //当前显示
        if (this.diarys.length > 8) {
          for (let i = 0; i < 8; i++) {
            this.mydiarys.push(this.diarys[i])
          }
        } else {
          for (let i = 0; i < this.diarys.length; i++) {
            this.mydiarys.push(this.diarys[i])
          }}
          if(this.mydiarys.length==0){
            this.nomore=true
          }
      },

      next() {
        this.q = this.q + 8
        if (this.page < this.cou - 1) {
          this.w = this.w + 8
          this.page++  //记录当前页
          for (let i = this.q; i < this.w; i++) {
            console.log(this.w)
            this.mydiarys.push(this.diarys[i])
          }
          // console.log(this.value)
          // console.log(this.value1)
        }
        //最后一页的，要取出最后一页多少个帖子
        else if (this.page === this.cou - 1) {

          this.w = this.diarys.length
          for (let i = this.q; i < this.w; i++) {
            this.mydiarys.push(this.diarys[i])
          }

        }
      },
      //收起显示第一页
      one() {
        this.mydiarys = []
        for (let i = 0; i < 8; i++) {
          this.mydiarys.push(this.diarys[i])
        }

      },

      ajaxall(){
        this.nomore=false
        axios.get(this.$store.state.url+"/adoptions").then((result) => {
          // console.log(result.data.data)
          this.mydata = result.data.data;
          // this.more=result.data.data.length
          for (let i = 0; i < this.mydata.length; i++) {
            this.diarys.push(this.mydata[i])
          }
          this.cou=Math.ceil(this.diarys.length/8)

          //当前显示
          if (this.diarys.length > 8) {
            for (let i = 0; i < 8; i++) {
              this.mydiarys.push(this.diarys[i])
            }
          } else {
            for (let i = 0; i < this.diarys.length; i++) {
              this.mydiarys.push(this.diarys[i])
            }}
          if(this.mydiarys.length==0){
            this.nomore=true
          }
        })
          .catch((err) => {
            console.log(err)
          })
      },
      urlImg(str){
        // console.log(this.url+str)
        return this.url+str
      },
      other(){
        this.ajaxall()
      }
    },
    mounted() {
      this.ajaxall()
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    cursor: pointer;
  }
  .nofind{
    padding-top: 80px;
    width: 500px;
    height: 300px;
    text-align: center;
    margin: 0 auto;
  }
  .nofind img{
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }
  .nofind p{
    font-size: 16px;
    color: #666;
  }
  .label{
    position: absolute;
    background: url("../../assets/adoption/ling.png")no-repeat;
    background-size: 100%;
    width: 120px;
    height: 120px;
    z-index: 10;
    top: 14px;
    transform:rotate(-37deg);
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

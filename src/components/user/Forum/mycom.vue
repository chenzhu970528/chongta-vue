<!--我的评论-->
<template>
  <div class="right">
    <div class="route">您的当前位置：<span>账号管理</span><span>/</span><span>我的评论</span></div>
    <div class="main" id="scroll" v-for="">
      <div class="comment" v-for="(val,index) in value">
        <el-row>
          <el-col :span="7" class="img">
            <!--我的用户头像-->
            <img :src='url+pic.headPic' alt="" class="head">
          </el-col>
          <el-col :span="7">
            <span>{{UserName.replace('"',' ').replace('"',' ')}}</span>
            <span class="time">{{val.time}}</span>
          </el-col>
        </el-row>
        <p>{{val.faText}}{{val.frText}}</p>


          <div class="span" @click="go(val.faId)">
            <router-link  :to="`/forum/`+val.faId"> <p>{{val.userName}}:{{val.faTitle}} </p>
            <br>
            <p class="text" style="font-weight: 500;">{{val.faText1}}</p></router-link>
          </div>


          <!--</el-col>-->
        <!--</el-row>-->
      </div>
    </div>

    <div v-if="isshow" class="noList">
      <img src="../../../assets/user/default8.png" alt="">
      <p>还没有任何评论哦</p>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import {mapGetters} from 'vuex';

  export default {
    name: "mycom",
    data() {
      return {
        visiblelife: false,
        isshow: false,
        value: [],
        url: this.$store.state.url,
        pic:[],
        Artpic:[],
      }
    },

    computed: mapGetters([
      'UserId',
      'UserName',
    ]),
    methods: {
      go(index) {
      window.localStorage.faId=index;
console.log(index+'30才对')
      },
      showPic() {
        this.isshow = true
      },


    },
    mounted() {
      let id = this.UserId.replace(/\"/g, "")
      axios.get(this.$store.state.url + `/forumSee/user/com?userId=${id}`).then((result) => {
        this.value = result.data.data;
        if(this.value.length<1){
          this.showPic()

        }
        for(let i=0;i<this.value.length;i++){
          let faId= this.value[i].faId
          axios.get(this.$store.state.url + `/forumSee/user/Artpic?faId=${faId}`).then((result) => {
           this.Artpic.push(result.data.data[0]);
          })
        }

      })
 axios.get(this.$store.state.url + `/forumSee/user/pic?userId=${id}`).then((result) => {
        this.pic = result.data.data[0];

      })



    }

  }
</script>

<style scoped>
  .img{
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background: url("../../../assets/HomePage/right3.jpg");
    margin-bottom:5px;
    margin-top:5px;
    vertical-align: unset;
    background-size: 100% 100%;

  }

  .head{
    width: 52px;
    height: 52px;
    border-radius: 52px;
    position:relative;
    left:-1px;
    top:-1px;
  }
  .span p{
    font-weight: bold;
  }
  #scroll {
    padding: 0 35px;
    width: 80%;
    margin-left: 10%;
    max-height: 700px;
    /*background-color: rgba(237, 210, 234, 0.5);*/
    margin-top: 30px;
    overflow: auto;
  }

  #scroll::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  #scroll::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 2px;
  }

  #scroll::-webkit-scrollbar-thumb {
    background: #bababa;
    border-radius: 2px;
  }

  #scroll::-webkit-scrollbar-thumb:hover {
    background: #747474;
  }

  #scroll::-webkit-scrollbar-corner {
    background: #f6f6f6;
  }

  * {
    padding: 0;
    margin: 0;
  }

  .right {
    position: relative;
    left: 40px;
    min-height: 800px;
    background-color: rgba(255, 255, 255, 0.7);
    /*box-shadow: -2px 2px 10px 2px #eeeeee;*/

    word-wrap: break-word;
  }

  .route{
    position: relative;
    left: 5%;
    width: 90%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    /*background-color: palevioletred;*/
    color: rgba(45, 54, 68, 0.9);
  }
  .route span{
    margin-right: 10px;
    font-size: 14px;
  }
  .route span:last-child{
    color: #8aa7cf;
  }

  .comment {
    position: relative;
    margin-bottom: 35px;
    /*background-color: yellow;*/
  }

  .comment span {
    position: absolute;
    top: 0;
    left: 65px;
    color: #6d6d6d;
    font-size: 15px;
    margin-top: 7px;
    font-weight: bolder;
  }

  .comment span.time {
    margin-top: 34px;
    font-size: 13px;
    font-weight: normal;
  }





  .row2 {
    width: 96%;
    /*margin-left: 2%;*/
  }

  .comment .row2 span {
    top: 30px;
    left: 100px;
  }

  h5 {
    margin-left: 20px;
    font-size: 15px;
    font-weight: bold;

    word-wrap: break-word;
  }

  p {
    padding-left: 2%;
    margin-bottom: -15px;

    word-wrap: break-word;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  a {
    text-decoration: none;
    color: #575757;
  }
  .span{
    margin-top:20px;
    margin-left:10px;
    padding:10px;
    padding-left:0;
    background: #e4eaf0;
    width:490px;
    height: 90px;
    cursor:pointer;

    word-wrap: break-word;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .noList {
    text-align: center;
    color: #575757;
    /*position: relative;*/
    /*top:-500px;*/
  }

</style>



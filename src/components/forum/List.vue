<template>
  <div>
    <div class="con">

      <div class="com_d">
        <com_d></com_d>
      </div>

      <div v-if="activitys.length==0" class="no">
        <img src="../../assets/forum/ku.jpg" alt="">
        <h4>抱歉，暂时没有找到相关内容的帖子</h4>
      </div>

      <ul>
        <li :key="index" v-model="val.faId" v-for="(val,index) in activitys">
          <div class="head">
            <router-link tag="h1" :to="`/forum/`+val.faId">
              <h1 class="title"><a>{{val.faTitle}}</a></h1>
            </router-link>
            <p class="name">
              <span>{{val.userName}}</span>
              <span>{{val.time.slice(0,16).replace('T',' ')}}</span>

            </p>
          </div>
          <div class="photo">
            <router-link tag="a"  :to="`/forum/`+val.faId">
              <img v-if="(imgs1[index].substring(imgs1[index].indexOf('.')+1,imgs1[index].length))!=mp4"
                :src='url+imgs1[index]' title="这是一张图片" alt="图片">
              <video v-if="(imgs1[index].substring(imgs1[index].indexOf('.')+1,imgs1[index].length))==mp4"
                     :src='url+imgs1[index]'
                    title="这是一个视频">
              </video>
            </router-link>
            <a></a>
          </div>

          <div class="value">
            <p class="val">{{val.faText}}</p>
            <router-link tag="a"  :to="`/forum/`+val.faId">
              <button  type="button" class="btn btn-default">阅读全文</button>
            </router-link>
            <hr>
            <p class="c">#{{Names[name]}}</p>
          </div>

        </li>

        <div class="block">
          <span class="demonstration"></span>
          <el-pagination ref="elpage"
                         @current-change="change()"
                         :current-page.sync="pageIndex"
                         layout="prev, pager, next"
                         :total="pageCount"
                         :page-size="pagesize">
          </el-pagination>

        </div>

      </ul>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import store from './store.js'
  import Com_d from './Com_d.vue'

  export default {
    name: "List",
    components: {
      'com_d': Com_d,
    },
    data() {
      return {
        imgs: [],
        imgs1: [],
mp4:'mp4',
        Names: ['最新', '精品推荐', '养宠日记', '交流分享', '搜索结果'],
        faId: '',
        name: 0,
        // a: 1,//翻页第几页
        pageIndex: 1,
        pagesize: 4,  //每页条数
        pageCount: 0,//总数量
        url:this.$store.state.url,
        myActData: [],//全部的帖子
        activitys: [],//单页的帖子

      }
    },
    computed: {
      myActData1() {
        return this.activitys;
      }
    },

    methods: {
      loadData() {
        window.scrollTo(0,0);
        this.activitys = [];
        // console.log('this.pageInedx:' + this.pageIndex)
        // console.log('this.pageCount:' + this.pageCount)
        let start = (this.pageIndex - 1) * this.pagesize;
        let end = start + this.pagesize;

        if (end >= this.pageCount) {
          end = this.pageCount
        }
        this.imgs1=[]
        for (var i = start; i < end; i++) {
          this.activitys.push(this.myActData[i])
          this.imgs1.push(this.imgs[i])
        }
      },
      change() {
        return this.loadData();
      },

      add() {
        store.commit('addName', {
          amount: '交流分享',
          am: 'a'
        })

      },

      Keyword() {
        let storage = window.sessionStorage;
        // console.log('0000'+storage.text)
        axios.get(this.$store.state.url+`/forumSee/query/?Keyword=${storage.text}`).then((result) => {
          this.myActData = result.data.data[0];
          this.imgs=[]
          for(let i=0;i<this.myActData.length;i++){
            let img = this.myActData[i].faImg.split(',')
            this.imgs.push(img[0].replace('，',''))
          }

          this.pageCount = this.myActData.length;
          this.loadData()

        })
      },
    },
    watch: {
      '$route': 'Keyword'
    },
    created() {
      let _this = this
      let storage = window.sessionStorage;
      let plate = storage.plate
      this.name = plate
      //只有四个模块 最大3
      if (plate != 4) {
        if (plate == 0) {
          axios.get(this.$store.state.url+"/forumSee/time").then((result) => {
            _this.myActData = result.data.data;
            _this.pageCount = _this.myActData.length;
            for(let i=0;i<this.myActData.length;i++){
              let img = this.myActData[i].faImg.split(',')
              this.imgs.push(img[0].replace('，',''))
            }
            _this.loadData()

          })

        }
        else if (plate == 1) {
          axios.get(this.$store.state.url+"/forumSee/essence").then((result) => {
            _this.myActData = result.data.data;
            _this.pageCount = _this.myActData.length;
            for(let i=0;i<this.myActData.length;i++){
              let img = this.myActData[i].faImg.split(',')
              this.imgs.push(img[0].replace('，',''))
            }
            _this.loadData()

          })
        }
        else if (plate == 2) {
          axios.get(this.$store.state.url+"/forumSee/diary").then((result) => {
            _this.myActData = result.data.data;
            _this.pageCount = _this.myActData.length;
            for(let i=0;i<this.myActData.length;i++){
              let img = this.myActData[i].faImg.split(',')
              this.imgs.push(img[0].replace('，',''))
            }
            _this.loadData()

          })
        }
        else {
          axios.get(this.$store.state.url+"/forumSee/gossip").then((result) => {
            _this.myActData = result.data.data;
            _this.pageCount = _this.myActData.length;
            for(let i=0;i<this.myActData.length;i++){
              let img = this.myActData[i].faImg.split(',')
              this.imgs.push(img[0].replace('，',''))
            }
            _this.loadData()

          })
        }
      }
//搜索结果
      else {
        this.Keyword()

      }
      // console.log(this.myActData.length)
    }
  }
</script>

<style scoped>
  .no{
    text-align:center;
  }
  .no img{
    height:300px;
  }
  /*.cc {*/
    /*width: 180px;*/
    /*height: 60px;*/
    /*line-height: 60px;*/
    /*text-align: center;*/
    /*background: rgba(60, 60, 60, 0.6);*/
    /*border-radius: 3px;*/
    /*position: fixed;*/
    /*top: 50%;*/
    /*left: 30%;*/
    /*color: #fefefe;*/
    /*font-size: 18px;*/
  /*}*/

 .com_d{
   position: relative;
   margin-left:-30px;
   z-index:1;
 }
  button {
    border-radius: 3px;
  }


  .con {
    margin: 25px;
    width: 850px;
    /*height: 1650px;*/
    padding: 0px 20px 55px 20px;
    /*border: 1px solid #989898;*/

    word-wrap:break-word;
  }

  ul {
    position: relative;
    left: -60px;


  }

  li {
    box-shadow: -2px 2px 10px 2px #efefef;
    background: rgba(255, 255, 255, 0.9);
    width:800px;
    list-style: none;
    padding: 35px;
    padding-bottom: 0;
    padding-top: 20px;
    /*background: #ffffff;*/
    margin-bottom: 35px;
    overflow: hidden;
    background: #ffffff;
    /*box-shadow: -2px 2px 10px 2px #bcbcbc;*/
    background: rgba(255, 255, 255, 0.9);
  }

  .val {
    font-size: 20px;

    word-wrap:break-word;

    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    /*white-space:nowrap;*/

  }

  .head {
    text-align: center;
  }

  .name {
    color: #989898;
    font-size: 13px;
  }

  .photo {
    margin-top: 30px;
    text-align: center;
  }

  img {
    max-width: 730px;
    max-height: 500px;
  }
  video {
    max-width: 730px;
    max-height: 500px;
  }

  .value {
    margin: 30px 0;
    word-wrap:break-word;
  }

  .block {
    margin-top: 70px;
    width: 800px;
    height: 150px;
    line-height: 150px;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #323232;
  }

  .c {
    font-size: 18px;
    color: #939393;
  }
</style>

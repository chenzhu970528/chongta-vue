<template>
  <div class="conn">
    <!--图片 内容，小版块-->
    <div class="con" :key='index' v-for="(val,index) in valueHead">
      <div class="top">
        <div>
          <span class="left">{{Names[index]}}</span>
          <router-link :to="`/forum/`+url[index]">
            <span class="right" @click="but(index)"><a>>>更多</a></span>
          </router-link>
        </div>
      </div>
      <div>
        <span v-if="false">{{val}}</span>
        <ul class="body">
          <li class="li1">
            <span>
              <router-link tag="a" :to="`forum/`+val['faId']">
                 <img v-if="(faImg[index].substring(faImg[index].indexOf('.')+1,faImg[index].length))!=mp4"
                  :src='s+faImg[index]' title="这是一个图片" alt="">
                 <div v-if="(faImg[index].substring(faImg[index].indexOf('.')+1,faImg[index].length))==mp4"
                 class="video" title="这是一个视频">
                   <video :src='s+faImg[index]'></video>
                 </div>
                 <p class="title">{{val['faTitle']}}</p>
               </router-link>
            </span>
            <p class="val">{{val['faText']}}</p>
          </li>
        </ul>
        <ul class="foot">
          <!--{{value[index]}}-->
          <li v-for="val1 in value[index]">
            <!--{{val1}}-->
            <router-link tag="a" :to="`forum/`+val1['faId']">
              <a class="a" href="">{{val1['faTitle']}}</a>
              <span class="span">{{val1['time'].slice(5,10)}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import store from './store.js'

  export default {
    name: "Block",
    data() {
      return {
        value: [[],[],[],[]],
        valueHead:[[],[],[],[]],
        faImg: ['', '', '', ''],
        Names: ['最新', '精品推荐', '养宠日记', '交流分享'],
        url: ['new', 'recommend', 'diary', 'share'],
        s: this.$store.state.url,
        mp4: 'mp4',
      }
    },
    computed: {
      a() {
        return store.state.a
      },
    },
    methods: {
      but(index) {
        let storage = window.sessionStorage;
        storage.plate = index
      },
      ajax() {
        let _this = this
        axios.get(_this.$store.state.url + "/forumSee/time").then((result) => {
          let img = result.data.data[0].faImg.split(',')
          _this.faImg[0] = img[0]
          let arr=[]
          for (let i = 1; i < 5; i++) {
           arr.push(result.data.data[i])
          }
          this.value[0]=arr
          this.valueHead[0]=result.data.data[0]
          this.$forceUpdate()
        })
        axios.get(_this.$store.state.url + "/forumSee/essence").then((result) => {
          let img =  result.data.data[0].faImg.split(',')
          _this.faImg[1] = img[0]
          let arr=[]
          for (let i = 1; i < 5; i++) {
           arr.push(result.data.data[i])
          }
          this.value[1]=arr
          this.valueHead[1]=result.data.data[0]
          this.$forceUpdate()
        })

        axios.get(_this.$store.state.url + "/forumSee/diary").then((result) => {
          let img =result.data.data[0].faImg.split(',')
          _this.faImg[2] = img[0]
          let arr=[]
          for (let i = 1; i < 5; i++) {
          arr.push(result.data.data[i])
          }   this.value[2]=arr
          this.valueHead[2]=result.data.data[0]
          this.$forceUpdate()
        })

        axios.get(_this.$store.state.url + "/forumSee/gossip").then((result) => {
          let img = result.data.data[0].faImg.split(',')
          _this.faImg[3] = img[0]
          let arr=[]
          for (let i = 1; i < 5; i++) {
          arr.push(result.data.data[i])
          }
          this.value[3]=arr

          this.valueHead[3]=result.data.data[0]
          this.$forceUpdate()
        })

      },
      time() {
        let _this = this
        return setTimeout(function () {
          _this.value = [
            [],[],[],[]
          ]
          _this.ajax()

        }, 500)
      }
    },
    watch: {
      "a": "time"
    },
    mounted() {
      this.ajax()
    }
  }
</script>

<style scoped>
  .conn {
    width: 1240px;
    margin-left: -230px;
  }

  a {
    text-decoration: none;
    color: #323232;
  }

  span > a {
    color: #768dae;
  }

  video {
    height: 200px;
    vertical-align: bottom;

  }

  .video {
    width: 260px;
    height: 200px;
    overflow: hidden;
    background: #5a5a5a;
    text-align: center;
  }

  .con {
    background: white;
    position: relative;
    /*width: 390px;*/
    width: 290px;
    height: 530px;
    padding: 15px;
    display: inline-block;
    margin: 0 5px;
  }

  .top {
    /*width: 350px;*/
    width: 265px;
    height: 35px;
    border-bottom: 1px solid #d9d9d9;
    color: #69819f;
  }

  .left {
    height: 35px;
    position: absolute;
    border-bottom: 3px solid rgba(41, 70, 102, 0.64);
    left: 10px;
    font-size: 20px;
  }

  .right {
    width: 50px;
    position: absolute;
    left: 230px;
    top: 15px;
    line-height: 20px;
  }

  .body {
    /*width: 350px;*/
    width: 265px;
    height: 270px;
    margin-top: 25px;
    margin-bottom: 25px;
    left: 15px;
    position: absolute;
    border-bottom: 1px solid #dbdbdb;
  }

  .li1 {
    position: absolute;
    left: -0px;

  }

  img {
    /*width: 350px;*/
    width: 260px;
    height: 200px;
  }

  li {
    list-style: none;
  }

  .c3 > li {
    position: absolute;
  }

  .title {
    color: white;
    background: #000000;
    opacity: 0.6;
    position: relative;
    bottom: 30px;
    height: 30px;
    line-height: 30px;
    /*width: 350px;*/
    width: 260px;
    text-align: center;
  }

  .val {
    /*width: 355px;*/
    width: 260px;
    height: 45px;
    position: relative;
    top: -25px;
    font-size: 16px;
  }

  .foot {
    position: absolute;
    left: 0px;
    top: 365px;
  }

  .foot > li {
    display: inline-block;
    /*width: 350px;*/
    width: 290px;
    height: 30px;
    margin: 4px 0;
  }

  .foot > li > a {
    color: #424242;
    text-decoration: none;
    display: inline-block;
    position: relative;
    left: -20px;
    /*width: 250px;*/
    width: 210px;
    height: 20px;
    font-size: 16px;

  }

  .a {
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  span {
    padding-left: -50px;
    position: relative;

  }

  .span {
    position: absolute;
    top: -0px;
    right: -45px;
  }

  a:hover {
    color: #294666;
  }

  .val {
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

</style>


<template>
  <div class="conn">
    <span v-show="false">{{value}}</span>
    <!--图片 内容，小版块-->
    <div class="con" :key='index' v-for="(val,index) in value">

      <div class="top">
        <div><span class="left">{{Names[index]}}</span>
          <router-link :to="`/forum/`+url[index]">
            <span class="right" @click="but(index)"><a>>>更多</a></span>
          </router-link>
          <audio src=""></audio>
        </div>
      </div>
      <div>
        <span v-show="false">{{val}}</span>

        <ul class="body">
          <li class="li1">
<span>
   <router-link tag="a"  :to="`forum/`+val[0].faId">
     <img v-if="(faImg[index].substring(faImg[index].indexOf('.')+1,faImg[index].length))!=mp4"
          :src='s+faImg[index]' title="这是一个图片" alt="">

       <div v-if="(faImg[index].substring(faImg[index].indexOf('.')+1,faImg[index].length))==mp4"
            class="video" title="这是一个视频">
         <video :src='s+faImg[index]'></video>

     </div>

     <p class="title">{{val[0].faTitle}}</p>
   </router-link>

</span>

            <p class="val">{{val[0].faText}}</p>
          </li>
        </ul>
        <ul class="foot">
          <li>
            <router-link tag="a"  :to="`forum/`+val[1].faId">
              <a class="a" href="">{{val[1].faTitle}}</a>
              <span class="span">{{val[1].time.slice(5,10)}}</span>
            </router-link>
          </li>
          <li>
            <router-link tag="a" active-class="active" role="presentation" :to="`forum/`+val[2].faId">
              <a class="a" href="" >{{val[2].faTitle}}</a>
              <span class="span">{{val[2].time.slice(5,10)}}</span>
            </router-link>
          </li>
          <li>
            <router-link tag="a" active-class="active" role="presentation" :to="`forum/`+val[3].faId">
              <a class="a" href="" >{{val[3].faTitle}}</a>
              <span class="span">{{val[3].time.slice(5,10)}}</span>
            </router-link>
          </li>
          <li>
            <router-link tag="a" active-class="active" role="presentation" :to="`forum/`+val[4].faId">
              <a class="a" href="" >{{val[4].faTitle}}</a>
              <span class="span">{{val[4].time.slice(5,10)}}</span>
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
        value: [
          {values0: []},
          {values1: []},
          {values2: []},
          {values3: []}],
        faImg: ['0', '1', '2', '3'],
        Names: ['最新', '精品推荐', '养宠日记', '交流分享'],
        url: ['new', 'recommend', 'diary', 'share'],
        s: this.$store.state.url,
        // faId: 0,
        mp4: 'mp4'
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
        // console.log(storage.plate)
      },


      time() {
        // setTimeout(alert('= ='),5000)
        let _this = this
        return setTimeout(function () {
          _this.value = [
            {values0: []},
            {values1: []},
            {values2: []},
            {values3: []}],
            axios.get(_this.$store.state.url + "/forumSee/time").then((result) => {

              _this.mydata = result.data.data;
              let img = _this.mydata[0].faImg.split(',')
              _this.faImg[0] = img[0]
              for (let i = 0; i < 6; i++) {
                _this.value[0].values0.push(_this.mydata[i])
              }
              _this.value[0] = _this.value[0].values0

              // console.log( _this.mydata)
            })
          axios.get(_this.$store.state.url + "/forumSee/essence").then((result) => {

            _this.mydata1 = result.data.data;

            let img = _this.mydata1[0].faImg.split(',')
            _this.faImg[1] = img[0]
            for (let i = 0; i < 6; i++) {
              _this.value[1].values1.push(_this.mydata1[i])
            }
            _this.value[1] = _this.value[1].values1
          })

          axios.get(_this.$store.state.url + "/forumSee/diary").then((result) => {

            _this.mydata2 = result.data.data;
            let img = _this.mydata2[0].faImg.split(',')
            _this.faImg[2] = img[0]
            for (let i = 0; i < 6; i++) {
              _this.value[2].values2.push(_this.mydata2[i])
            }
            _this.value[2] = _this.value[2].values2
          })

          axios.get(_this.$store.state.url + "/forumSee/gossip").then((result) => {
            _this.mydata3 = result.data.data;
            let img = _this.mydata3[0].faImg.split(',')
            _this.faImg[3] = img[0]
            for (let i = 0; i < 6; i++) {
              _this.value[3].values3.push(_this.mydata3[i])
            }
            _this.value[3] = _this.value[3].values3
          })

        }, 500)
      }
    },
    watch: {
      "a": "time"
    },
    created() {
      this.time()

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
  video{
    height: 200px;
    vertical-align: bottom;

  }
  .video{
    width: 260px;
    height:200px;
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


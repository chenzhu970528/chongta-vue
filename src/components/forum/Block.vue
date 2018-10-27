<template>
  <div>
    <!--图片 内容，小版块-->
      <div class="con" v-for="(val,index) in value">
       <p v-show="false">{{val.faImg}}</p>
      <!--{{val}}-->
          <div class="top">
            <div><span class="left">{{Names[index]}}</span>
              <router-link   tag="span" active-class="active" role="presentation" :to="`/forum/`+url[index]">
                <span class="right" @click="but(index)"><a>>>更多</a></span>
              </router-link>
              <audio src=""></audio>
            </div>
          </div>
          <div>
            <ul class="body">
              <li class="li1">
                <router-link tag="a" active-class="active" role="presentation" :to="`forum/`+val.faId">
                  <a href="" @click="see(val.faId)">
                    <img :src='s+val.faImg' alt="">
                    <p class="title">{{val.faTitle}}</p>
                  </a>
                </router-link>
                <p class="val">{{val.faText}}</p>
              </li>
            </ul>

            <ul class="foot">
              <li v-for="val1 in value1[index]">
                <router-link tag="a" active-class="active" role="presentation" :to="`forum/`+val1.faId">
                  <a href="" @click="see(val1.faId)">{{val1.faTitle}}</a>
                  <span class="span">{{val1.time.slice(5,10)}}</span>
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
        value: [],
        value1: [],
        val1:[],
        val2:[],
        val3:[],
        val4:[],
        s:this.$store.state.url,
        Names: ['最新', '精品推荐', '宠物日记', '交流分享'],
        url: ['new', 'recommend', 'diary', 'share'],
        imgs: [{img: require("../../assets/images/a.jpg")}]
      }
    },
    methods: {
      but(index) {
        let storage=window.localStorage;
        storage.plate=index
console.log(storage.plate)
      },
      see(index) {
        let storage=window.localStorage;
        storage.faId=index
      },
    },
      created() {
        axios.get(this.$store.state.url+"/forumSee/time").then((result) => {
          this.mydata = result.data.data;
          this.value[0]=(this.mydata[0])
          for (let i = 1; i < 6; i++) {
            this.val1.push(this.mydata[i])
          }
          this.value1.push([])
          this.value1[0]= this.val1
        })
        axios.get(this.$store.state.url+"/forumSee/essence").then((result) => {
          this.mydata = result.data.data;
          this.value[1]=(this.mydata[0])
          for (let i = 1; i < 6; i++) {
            this.val2.push(this.mydata[i])
          }
          this.value1.push([])
          this.value1[1]= this.val2
        })

        axios.get(this.$store.state.url+"/forumSee/diary").then((result) => {
          this.mydata = result.data.data;
          this.value[2]=(this.mydata[0])
          for (let i = 1; i < 6; i++) {
            this.val3.push(this.mydata[i])
          }
          this.value1.push([])
          this.value1[2]= this.val3
        })

        axios.get(this.$store.state.url+"/forumSee/gossip").then((result) => {
          this.mydata = result.data.data;
          this.value[3]=(this.mydata[0])
          for (let i = 1; i < 6; i++) {
            this.val4.push(this.mydata[i])
          }
          this.value1.push([])
          this.value1[3]= this.val4
        })

      }

  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #323232;
  }

  span > a {
    color: #a7a7a7;
  }

  .con {
    background: white;
    position: relative;
    width: 390px;
    height: 570px;
    padding: 20px;
    display: inline-block;
    margin: 11px -8px 0px 25px;
  }
  .top {
    width: 350px;
    height: 35px;
    border-bottom: 1px solid #a8a8a8;
    color: #a8a8a8;
  }

  .left {
    height: 35px;
    position: absolute;
    border-bottom: 3px solid rgba(69, 174, 203, 0.64);
    left: 20px;
    font-size: 20px;
  }

  .right {
    position: absolute;
    right: 120px;
    line-height: 20px;
  }

  .body {
    width: 350px;
    height: 270px;
    margin-top: 25px;
    margin-bottom: 25px;
    left: 20px;
    position: absolute;
    border-bottom: 1px dotted #a8a8a8;
  }

  .li1 {
    position: absolute;
    left: 0px;

  }

  img {
    width: 350px;
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
    width: 350px;
    text-align: center;
  }

  .val {
    width: 355px;
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
    width: 350px;
    height: 30px;
    margin: 0px 0;
  }

  .foot > li > a {
    color: #424242;
    text-decoration: none;
    display: inline-block;
    position: relative;
    left: -20px;
    width: 250px;
    height: 30px;
    font-size: 16px;
  }

  span {
    padding-left: -10px;
    position: relative;

  }

  .span {
    position: absolute;
    right: -100px;
  }

  .right {
    width: 50px;
    position: absolute;
    left: 305px;
    top: 5px;
  }

  a:hover {
    color: #80c5da;
  }

  .val{
    word-wrap:break-word;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

</style>

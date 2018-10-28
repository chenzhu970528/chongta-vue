<template>
  <div class="conn">
    <span v-show="false">{{value}}</span>
    <!--图片 内容，小版块-->
    <div class="con"  :key='index' v-for="(val,index) in value">
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
              <a href="" @click="see(val[0].faId)">
                <img :src='s+val[0].faImg' alt="">
                <p class="title">{{val[0].faTitle}}</p>
              </a>
            </router-link>
            <p class="val">{{val[0].faText}}</p>
          </li>
        </ul>
        <ul class="foot">
          <li>
            <router-link tag="a" active-class="active" role="presentation" :to="`forum/`+val[1].faId">
              <a class="a" href="" @click="see(val[1].faId)">{{val[1].faTitle}}</a>
              <span class="span">{{val[1].time.slice(5,10)}}</span>
            </router-link>
          </li>
          <li>
            <router-link tag="a" active-class="active" role="presentation" :to="`forum/`+val[2].faId">
              <a class="a" href="" @click="see(val[2].faId)">{{val[2].faTitle}}</a>
              <span class="span">{{val[2].time.slice(5,10)}}</span>
            </router-link>
          </li>
          <li>
            <router-link tag="a" active-class="active" role="presentation" :to="`forum/`+val[3].faId">
              <a class="a" href="" @click="see(val[3].faId)">{{val[3].faTitle}}</a>
              <span class="span">{{val[3].time.slice(5,10)}}</span>
            </router-link>
          </li>
          <li>
            <router-link tag="a" active-class="active" role="presentation" :to="`forum/`+val[4].faId">
              <a class="a"  href="" @click="see(val[4].faId)">{{val[4].faTitle}}</a>
              <span class="span">{{val[4].time.slice(5,10)}}</span>
            </router-link>
          </li>
          <li>
            <router-link tag="a" active-class="active" role="presentation" :to="`forum/`+val[5].faId">
              <a class="a" href="" @click="see(val[5].faId)">{{val[5].faTitle}}</a>
              <span class="span">{{val[5].time.slice(5,10)}}</span>
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
        Names: ['最新', '精品推荐', '领养日记', '交流分享'],
        url: ['new', 'recommend', 'diary', 'share'],
        s:this.$store.state.url,

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
    mounted() {
      axios.get(this.$store.state.url+"/forumSee/time").then((result) => {
        this.mydata = result.data.data;
        for (let i = 0; i < 6; i++) {
          this.value[0].values0.push(this.mydata[i])
        }
        this.value[0] = this.value[0].values0
      })
      axios.get(this.$store.state.url+"/forumSee/essence").then((result) => {
        this.mydata1 = result.data.data;
        for (let i = 0; i < 6; i++) {
          this.value[1].values1.push(this.mydata1[i])
        }
        this.value[1] = this.value[1].values1
      })

      axios.get(this.$store.state.url+"/forumSee/diary").then((result) => {
        this.mydata2 = result.data.data;
        for (let i = 0; i < 6; i++) {
          this.value[2].values2.push(this.mydata2[i])
        }
        this.value[2] = this.value[2].values2
      })

      axios.get(this.$store.state.url+"/forumSee/gossip").then((result) => {
        this.mydata3 = result.data.data;
        for (let i = 0; i < 6; i++) {
          this.value[3].values3.push(this.mydata3[i])
        }
        this.value[3] = this.value[3].values3
      })

    }

  }
</script>

<style scoped>
  .conn{
    width: 1240px;
    margin-left:-230px;
  }
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
    /*width: 390px;*/
    width: 290px;
    height: 570px;
    padding: 15px;
    display: inline-block;
    margin:0 5px;
  }
  .top {
    /*width: 350px;*/
    width: 265px;
    height: 35px;
    border-bottom: 1px solid #a8a8a8;
    color: #a8a8a8;
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
    left: 220px;
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
    border-bottom: 1px dotted #a8a8a8;
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
    width:260px;
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
.a{
  word-wrap:break-word;
  overflow : hidden;
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
    top:-0px;
    right: -45px;
  }

  a:hover {
    color: #294666;
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


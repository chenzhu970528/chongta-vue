<template>
  <div>
    <br>
    <br>
    <p class="top">热门文章</p>
    <el-carousel id="bgimg" :interval="4000"
                 arrow="never" indicator-position="outside">
      <el-carousel-item v-for="item in 3" :key="item">
        <ul class="ul">
          <li class="li" v-for="(val,index) in value[item-1]" @click="see(val[0].faId)">

            <router-link class="pic" tag="a" active-class="active" role="presentation" :to="`/forum/`+val[0].faId">
              <img
                v-if="(img[item-1][index].substring(img[item-1][index].indexOf('.')+1,img[item-1][index].length))!=mp4"
                class="img pic-image"  :src='url+img[item-1][index]'>
              <div class="video">
                <video
                  v-if="(img[item-1][index].substring(img[item-1][index].indexOf('.')+1,img[item-1][index].length))==mp4"
                  class="   pic-image" :src='url+img[item-1][index]'></video>
              </div>

              <span class="pic-caption bottom-to-top">
                <p class="text">{{val[0].faText}}</p>
              </span>
              <p class="p">
                <a class="a title">{{val[0].faTitle}}</a>
              </p>
            </router-link>

          </li>
        </ul>
      </el-carousel-item>
    </el-carousel>
  </div>

</template>


<script>
  import axios from 'axios'
  import store from './store.js'
  import $ from 'jquery'

  export default {
    name: "MostCom",
    data() {
      return {
        url: this.$store.state.url,
        mydata: [],
        value: [[], [], []],
        img: [[], [], []],
        mp4: 'mp4',
      }
    },
    methods: {
      see(index) {
        // console.log(index)
        window.localStorage.faId = index;
      },
      ajax() {
        axios.get(this.$store.state.url + "/forumSee/com").then((result) => {
          this.mydata = result.data.data;
          for (let i = 0; i < 3; i++) {
            this.value[0].push(this.mydata[i])
            let img = this.mydata[i][0].faImg.split(',')
            this.img[0].push(img[0].replace('，', ''))
          }

          for (let i = 3; i < 6; i++) {
            this.value[1].push(this.mydata[i])
            let img = this.mydata[i][0].faImg.split(',')
            this.img[1].push(img[0].replace('，', ''))
          }
          for (let i = 6; i < 9; i++) {
            this.value[2].push(this.mydata[i])
            let img = this.mydata[i][0].faImg.split(',')
            this.img[2].push(img[0].replace('，', ''))
          }
        })
        console.log(this.value)
      },

    },
    watch: {
      'route': 'ajax'
    },
    mounted() {
      this.ajax()
    }
  }
</script>

<style scoped>
  @import "http://font-style: em;googleapis.com/css?family=Open+Sans)";

  @keyframes anima {
    from {
      margin-top: -50px;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=($opacity * 100))";
      filter: alpha(opacity=0);
      -moz-opacity: 0;
      -khtml-opacity: 0;
      opacity: 0;
    }
    to {
      margin: auto;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=($opacity * 100))";
      filter: alpha(opacity=100);
      -moz-opacity: 1;
      -khtml-opacity: 1;
      opacity: 1;
    }
  }

  @-webkit-keyframes anima {
    from {
      margin-left: -20px;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=($opacity * 100))";
      filter: alpha(opacity=0);
      -moz-opacity: 0;
      -khtml-opacity: 0;
      opacity: 0;
    }
    to {
      margin-left: 10px;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=($opacity * 100))";
      filter: alpha(opacity=100);
      -moz-opacity: 1;
      -khtml-opacity: 1;
      opacity: 1;
    }
  }

  @media screen and (max-width: 560px) {
    .wrapper {
      padding: 20px;
    }
  }

  .pic {
    border-radius: 10px;
    width: 380px;
    max-height: 260px;
    position: relative;
    overflow: hidden;
    margin: 25px;
    display: inline-block;
    -webkit-animation: anima 2s;
    -moz-animation: anima 2s;
    -o-animation: anima 2s;
    -ms-animation: anima 2s;
    animation: anima 2s;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .pic-caption {
    cursor: default;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(44, 62, 80, 0.5);
    padding: 10px;
    text-align: center;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=($opacity * 100))";
    filter: alpha(opacity=0);
    -moz-opacity: 0;
    -khtml-opacity: 0;
    opacity: 0;
  }

  .pic-image {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  .pic:hover .pic-image {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  .pic-title {
    font-size: 1.8em;
    cursor: pointer;
    color: white;
  }

  a, a:hover, .pic .pic-image, .pic-caption, .pic:hover .pic-caption, .pic:hover img {
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }


  .pic:hover .bottom-to-top, .pic:hover .top-to-bottom, .pic:hover .left-to-right, .pic:hover .right-to-left, .pic:hover .rotate-in, .pic:hover .rotate-out, .pic:hover .open-up, .pic:hover .open-down, .pic:hover .open-left, .pic:hover .open-right, .pic:hover .come-left, .pic:hover .come-right {
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=($opacity * 100))";
    filter: alpha(opacity=100);
    -moz-opacity: 1;
    -khtml-opacity: 1;
    opacity: 1;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -moz-touch-callout: none;
    -o-touch-callout: none;
    -ms-touch-callout: none;
    touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    -moz-tap-highlight-color: transparent;
    -o-tap-highlight-color: transparent;
    -ms-tap-highlight-color: transparent;
    tap-highlight-color: transparent;
  }

  .bottom-to-top {
    top: 50%;
    left: 0;
  }

  .pic:hover .bottom-to-top {
    top: 0;
    left: 0;
  }

  @media screen and (max-width: 560px) {
    .pic {
      max-width: 400px;
      max-height: 300px;
      display: block;
      -webkit-animation: none;
      -moz-animation: none;
      -o-animation: none;
      -ms-animation: none;
      animation: none;
      margin: 10px auto;
    }
  }

  .top {
    text-align: center;
    font-size: 22px;
    color: #294666;
    margin-bottom: 40px;

    margin-top: -10px;
  }

  #bgimg {
    width: 1190px;
    /*padding-right:40px;*/
    margin: auto;
  }

  .ul {
    width: 1300px;
    margin-left: -65px;
  }
li{
  width: 380px;
  border-radius:50px;
}
  span:hover{
  cursor:pointer;
}
  .li {
    display: inline-block;
    color: white;
    position: relative;
    list-style: none;
    margin-bottom: 40px;
    margin-right: 25px;

  }

  .img {
    width: 380px;
    height: 285px;
    border-radius: 5px;
    vertical-align: bottom;
  }

  video {
    max-height: 285px;
    border-radius: 5px;
    vertical-align: bottom;

  }

  .video {
    border-radius: 5px;
    overflow: hidden;
    background: #5a5a5a;
    text-align: center;
  }

  .p {
    background: #000000;
    opacity: 0.4;
    position: absolute;
    bottom: -10px;
    height: 40px;
    width: 100%;
    text-align: center;
  }



  .a {
    text-align: center;
    height: 40px;
    line-height: 40px;
    width: 100%;
    text-decoration: none;
  }

  .title {
    font-size: 17px;
    color: white;
  }

  .text {
    color: white;
    font-size: 18px;
    margin-top: 30px;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
</style>

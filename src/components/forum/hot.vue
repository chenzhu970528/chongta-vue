<template>
  <div>
<p class="top">最多收藏</p>
    <div class="con">
      <div class="pic" v-for="(list,index) in list1">
        <img v-if="(img[index].substring(img[index].indexOf('.')+1,img[index].length))!=mp4"
             :src='s+img[index]' class="pic-image">
        <div class="video" v-if="(img[index].substring(img[index].indexOf('.')+1,img[index].length))==mp4">
          <video :src='s+img[index]' class="pic-image"></video>
        </div>
        <span class="pic-caption bottom-to-top">
             <router-link tag="p"  :to="`/forum/`+list[0].faId">

               <h1 class="pic-title">  {{list[0].faTitle}}  </h1>
      </router-link>
             <p class="text">{{list[0].faText}}</p>

		    </span>
      </div>

    </div>


  </div>
</template>

<script>
  import axios from 'axios';
  import store from './store.js'

  export default {
    name: "hot",
    data() {
      return {
        list1: [],
        s:this.$store.state.url,
        img:[],
        mp4:'mp4'
      }
    },

    created() {
      axios.get(this.$store.state.url + "/forumSee/likes").then((result) => {
        this.mydata = result.data.data;
        for (let i=0 ;i<6;i++) {
          this.list1.push(this.mydata[i])
          let img = this.mydata[i][0].faImg.split(',')
          this.img.push(img[0].replace('，',''))
        }
      })

    }
  }
</script>

<style scoped>
  @import "http://font-style: em;googleapis.com/css?family=Open+Sans)";
.top{
  text-align: center;
  font-size:22px;
  color: #294666;
  margin:40px 0;
}
  video{
    max-height: 240px;
    vertical-align: bottom;
    width:360px;
  }
  .video{
    max-height: 280px;
    width:360px;
    background: #5a5a5a;
    text-align: center;
  }
  .text{
    font-size:16px;
    margin-top:30px;
    color: white;
    word-wrap:break-word;

    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

  }
  .con{
    text-align: center;
    width: 1250px;
  }


  img {
    max-width: 100%;
  }

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
    max-width: 360px;
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
    color:white;
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
</style>

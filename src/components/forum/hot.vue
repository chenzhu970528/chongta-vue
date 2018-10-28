<template>
  <div>
<p class="top">最多收藏</p>
    <div class="con">
      <div class="pic" v-for="(list,index) in list1">
        <img :src='s+list[0].faImg' class="pic-image" alt="Pic"/>
        <span class="pic-caption bottom-to-top">
               <h1 class="pic-title" @click="see(list[0].faId)">
                 <router-link tag="p" active-class="active" role="presentation" :to="`/forum/`+list[0].faId">
		     {{list[0].faTitle}}
                </router-link></h1>
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
      }
    },
    methods: {
      see(index) {
        let storage = window.localStorage;
        storage.faId = index
      }
    },
    mounted() {
      axios.get(this.$store.state.url + "/forumSee/likes").then((result) => {
        // this.list1 = result.data.data;
        for (let i=0 ;i<6;i++) {
          this.list1.push(result.data.data[i])
        }
      })

    }
  }
</script>

<style scoped>
  @import "http://font-style: em;googleapis.com/css?family=Open+Sans)";
.top{
  text-align: center;
  font-size:20px;
  color: #294666;
  margin:50px 0;
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
    width: 1240px;
  }
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    background: rgba(83, 117, 149, 0.92);
    color: #fff;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif, 'trebuhet ms', HelveticaNeue, arial;
    height: 100%;
    line-height: 20px;
  }

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
  }

  p {
    line-height: 2.0em;
  }

  h1 {
    font-size: 3.0em;
    line-height: 40px;
  }

  a {
    text-decoration: none;
    color: rgba(113, 144, 171, 0.92);
  }

  a:hover {
    color: #fff;
  }

  img {
    max-width: 100%;
  }

  header {
    padding: 30px 20px;
    background: rgba(105, 129, 159, 0.92);
    color: #ffffff;
    margin-bottom: 20px;
  }

  footer {
    margin-top: 30px;
    background: rgba(41, 70, 102, 0.92);
    color: rgba(124, 142, 160, 0.92);
    padding: 20px 0;
    text-align: left;
    font-size: 0.9em;
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
    max-width: 350px;
    max-height: 250px;
    position: relative;
    overflow: hidden;
    margin: 20px;
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

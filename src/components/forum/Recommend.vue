<template>
  <div>

    <br>
    <br>
<p class="top">热门文章</p>
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <ul class="ul">
            <li class="li" v-for="val in value">

              <router-link tag="a" active-class="active" role="presentation" :to="`/forum/`+val[0].faId">
                <img class=img  @click="see(val[0].faId)" :src='url+val[0].faImg'>
                <p class="p"><span class="left0"></span><a @click="see(val[0].faId)" class="a title">{{val[0].faTitle}}</a></p>
              </router-link>

            </li>
          </ul>
        </div>
        <div class="item">
          <ul class="ul">
            <li class="li" v-for="val in value1">

                <router-link tag="a" active-class="active" role="presentation" :to="`/forum/`+val[0].faId">
                <img class=img  @click="see(val[0].faId)" :src='url+val[0].faImg'>
                <p class="p" @click="see(val[0].faId)"><span class="left0"></span><a class="a title">{{val[0].faTitle}}</a></p>
              </router-link>

            </li>
          </ul>
        </div>
        <div class="item">
          <ul class="ul">
            <li class="li" v-for="val in value2">
              <router-link tag="a" active-class="active" role="presentation" :to="`/forum/`+val[0].faId">
                <img class=img @click="see(val[0].faId)"  :src='url+val[0].faImg'>
                <p class="p" @click="see(val[0].faId)" ><span class="left0"></span><a class="a title">{{val[0].faTitle}}</a></p>
              </router-link>
            </li>
          </ul>
        </div>
        &nbsp
      </div>
      <!-- Controls -->
      <a class="carousel-control" data-slide="prev">
      </a>
      <a class="carousel-control" data-slide="next">
      </a>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import store from './store.js'

  export default {
    name: "Recommend",
    data() {
      return {
        url: this.$store.state.url,
        mydata: [],
        value: [],
        value1: [],
        value2: [],
      }
    },
    methods: {
      see(index) {
        console.log(index)
        window.localStorage.faId = index;
      }

    },
    mounted() {
      axios.get(this.$store.state.url + "/forumSee/com").then((result) => {

        this.mydata = result.data.data;

        for (let i = 0; i < 3; i++) {
          this.value.push(this.mydata[i])
        }
        for (let i = 3; i < 6; i++) {
          this.value1.push(this.mydata[i])
        }
        for (let i = 6; i < 9; i++) {
          this.value2.push(this.mydata[i])
        }
      })
    }
  }
</script>

<style scoped>

  .top{
    text-align: center;
    font-size:22px;
    color: #294666;
    margin-bottom:40px;

    margin-top:-10px;
  }
  #carousel-example-generic {
    width: 1190px;
    /*padding-right:40px;*/
    margin: auto;
  }

  .carousel-control {
    width: 20px;
    margin: auto;
  }

  .ul {
    width: 1300px;
    margin-left: -40px;
    margin-right: -30px;
  }

  .li {
    display: inline-block;
    color: white;
    position: relative;
    list-style: none;
    width: 380px;
    margin-bottom: 40px;
    margin-right: 25px;

  }

  .img {
    width: 380px;
    height: 285px;
    border-radius: 5px;
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
.li:hover .p{
  opacity: 0.5;
}
  .left0 {
    position: absolute;
    left: 0px;
    color: #f1a234;
    font-weight: bold;
    line-height: 40px;
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
</style>
<!--<style scoped>-->
  <!--#carousel-example-generic {-->
    <!--width: 890px;-->
    <!--/*padding-right:40px;*/-->
    <!--margin: auto;-->
  <!--}-->

  <!--.carousel-control {-->
    <!--width: 20px;-->
    <!--margin: auto;-->
  <!--}-->

  <!--.ul {-->
    <!--width: 1300px;-->
    <!--margin-left: -40px;-->
    <!--margin-right: -30px;-->
  <!--}-->

  <!--.li {-->
    <!--display: inline-block;-->
    <!--color: white;-->
    <!--position: relative;-->
    <!--list-style: none;-->
    <!--width: 280px;-->
    <!--margin-bottom: 40px;-->
    <!--margin-right: 25px;-->

  <!--}-->

  <!--.img {-->
    <!--width: 280px;-->
    <!--height: 240px;-->
    <!--border-radius: 5px;-->
  <!--}-->

  <!--.p {-->
    <!--background: #000000;-->
    <!--opacity: 0.4;-->
    <!--position: absolute;-->
    <!--bottom: -10px;-->
    <!--height: 40px;-->
    <!--width: 100%;-->
    <!--text-align: center;-->

  <!--}-->

  <!--.left0 {-->
    <!--position: absolute;-->
    <!--left: 0px;-->
    <!--color: #f1a234;-->
    <!--font-weight: bold;-->
    <!--line-height: 40px;-->
  <!--}-->

  <!--.a {-->
    <!--text-align: center;-->
    <!--height: 40px;-->
    <!--line-height: 40px;-->
    <!--width: 100%;-->
    <!--text-decoration: none;-->
  <!--}-->

  <!--.title {-->
    <!--font-size: 17px;-->
    <!--color: white;-->
  <!--}-->
<!--</style>-->


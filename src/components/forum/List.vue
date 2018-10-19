<template>
  <div>
    <div class="con">
      <!--{{sum}}-->
      <ul>
        <li :key="index" v-model="val.faId" v-for="(val,index) in value[0]">
          <div class="head" >
            <router-link tag="h1" active-class="active"  role="presentation" to="/forum/details">
              <h1 class="title"><a>{{val.faTitle}}</a></h1>
            </router-link>
            <p class="name">
              <span>{{val.userName}}</span>
              <span>{{val.time.slice(0,16).replace('T',' ')}}</span>

            </p>
          </div>
          <div class="photo">
            <router-link tag="a" active-class="active"  role="presentation" to="/forum/details">
              <img :src='imgs[0].img' alt="图片">
            </router-link>
            <a></a>
          </div>

          <div class="value">
            <p class="val">{{val.faText}}</p>
            <router-link tag="a" active-class="active"  role="presentation" to="/forum/details">
              <button type="button" class="btn btn-default">阅读全文</button>
            </router-link>
            <hr>
            <p class="c">#{{Names[0]}}</p>
          </div>

        </li>
        <div class="page">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
  import  axios from 'axios'
  export default {
    name: "List",
    data() {
      return {
        imgs: [{img: require("../../assets/images/a.jpg")}],
        value: [
          {values0: []},
          {values1: []},
          {values2: []},
          {values3: []}],
        Names: ['最新', '精品推荐', '宠物日记', '交流分享'],
        faId:'',
        count:[]
      }
    },
    mounted() {
      axios.get("http://localhost:3000/forumSee/time").then((result) => {
        this.mydata = result.data.data;
        for (let i = 0; i <this.mydata.length; i++) {
          this.value[0].values0.push(this.mydata[i])
        }
        this.value[0] = this.value[0].values0
      })

      axios.get("http://localhost:3000/forumSee/essence").then((result) => {
        this.mydata1 = result.data.data;
        for (let i = 0; i < this.mydata1.length; i++) {
          this.value[1].values1.push(this.mydata1[i])
        }
        this.value[1] = this.value[1].values1
      })

      axios.get("http://localhost:3000/forumSee/diary").then((result) => {
        this.mydata2 = result.data.data;
        for (let i = 0; i < this.mydata2.length; i++) {
          this.value[2].values2.push(this.mydata2[i])
        }
        this.value[2] = this.value[2].values2
      })

      axios.get("http://localhost:3000/forumSee/gossip").then((result) => {
        this.mydata3 = result.data.data;
        for (let i = 0; i < this.mydata3.length; i++) {
          this.value[3].values3.push(this.mydata3[i])
        }
        this.value[3] = this.value[3].values3
      })

    }
  }
</script>

<style scoped>
  button{
    border-radius:3px;
  }
  .con {
    margin: 25px;
    width: 800px;
    height: 1650px;
    padding: 0px 20px 20px 20px;
    /*border: 1px solid #989898;*/
  }

  ul {
    position: relative;
    left: -40px;
  }

  li {
    width: 768px;
    list-style: none;
    padding: 35px;
    background: #ffffff;
    margin-bottom: 35px;
    overflow: hidden;
  }

  .val {
    font-size: 20px;
  }

  .head {
    text-align: center;
  }

  .name {
    color: #989898;
    font-size: 13px;
  }

  .photo {
    margin-top:30px;
    text-align: center;
  }

  img {
    max-width: 698px;
  }
  .value{
    margin: 30px 0;
  }
  .page{
    margin-top:70px;
    width: 800px;
    height: 150px;
    line-height: 150px;
    text-align:center;
  }
  a{
    text-decoration: none;
    color: #323232;
  }

.c{
  font-size:18px;
  color: #939393;
}
</style>

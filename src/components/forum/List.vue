<template>
  <div>

    <div class="con">
      <div style="width:768px;height: 35px; background:white;margin-top:-60px;margin-bottom:25px;">
        <span class="left">ps:领养日记要领养宠物后在我的领养那里发表哦~</span>
        <a class="btn btn-default right" href="#publish" role="button" @click="add()">发表</a>


        </div>
      <ul>
        <li :key="index" v-model="val.faId" v-for="(val,index) in value[count]">
          <div class="head" >
            <router-link tag="h1" active-class="active"  role="presentation" :to="`/forum/`+val.faId">
              <h1 @click="see(val.faId)" class="title"><a>{{val.faTitle}}</a></h1>
            </router-link>
            <p class="name">
              <span>{{val.userName}}</span>
              <span>{{val.time.slice(0,16).replace('T',' ')}}</span>

            </p>
          </div>
          <div class="photo">
            <router-link tag="a" active-class="active"  role="presentation" :to="`/forum/`+val.faId">
              <img  @click="see(val.faId)" :src='imgs[0].img' alt="图片">
            </router-link>
            <a></a>
          </div>

          <div class="value">
            <p class="val">{{val.faText}}</p>
            <router-link  tag="a" active-class="active"  role="presentation" :to="`/forum/`+val.faId">
              <button @click="see(val.faId)" type="button" class="btn btn-default">阅读全文</button>
            </router-link>
            <hr>
            <p class="c">#{{Names[count]}}</p>
          </div>

        </li>

        <div class="page">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>

        <a name="publish"></a>
        <com_b></com_b>
      </ul>
    </div>
  </div>
</template>

<script>
  import  axios from 'axios'
  import store from './store.js'
  import Com_b from './Com_b.vue'
  export default {
    name: "List",
    components: {
      'com_b': Com_b,
    },
    data() {
      return {
        imgs: [{img: require("../../assets/images/a.jpg")}],
        value: [
          {values0: []},
          {values1: []},
          {values2: []},
          {values3: []},
          {values4: []}],
        Names: ['最新', '精品推荐', '宠物日记', '交流分享','搜索结果'],
        faId: '',
        count: 0,

      }
    },
    methods:{
      see(index) {
        store.commit('addID',{
          amount:index
        })

      },
      add() {
        store.commit('addName',{
          amount:'交流分享',
          am:'a'
        })

      },
    },


    mounted() {
        this.count = store.state.id
      if( this.count !=4) {
        axios.get("http://localhost:3000/forumSee/time").then((result) => {
          this.mydata = result.data.data;
          for (let i = 0; i < this.mydata.length; i++) {
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
          console.log(this.value[3] )
        })
      }else{
      axios.get(`http://localhost:3000/forumSee/query?Keyword=${store.state.key}`).then((result) => {
    this.value[4].values4= result.data.data[0];
        this.value[4]= this.value[4].values4
    console.log(this.value[4] )
      })

  }}
  }
</script>

<style scoped>
  button{
    border-radius:3px;
  }
  .left{
    color: #848484;
  }
  .right{
    float:right;
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

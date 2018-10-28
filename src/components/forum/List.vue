<template>
  <div>
    <div class="con">
      <div class="com_d">
        <com_d></com_d>
      </div>


      <ul>
        <li :key="index" v-model="val.faId" v-for="(val,index) in activitys">
          <div class="head">
            <router-link tag="h1" active-class="active" role="presentation" :to="`/forum/`+val.faId">
              <h1 @click="see(val.faId)" class="title"><a>{{val.faTitle}}</a></h1>
            </router-link>
            <p class="name">
              <span>{{val.userName}}</span>
              <span>{{val.time.slice(0,16).replace('T',' ')}}</span>

            </p>
          </div>
          <div class="photo">
            <router-link tag="a" active-class="active" role="presentation" :to="`/forum/`+val.faId">
              <img @click="see(val.faId)" :src='url+val.faImg' alt="图片">
            </router-link>
            <a></a>
          </div>

          <div class="value">
            <p class="val">{{val.faText}}</p>
            <router-link tag="a" active-class="active" role="presentation" :to="`/forum/`+val.faId">
              <button @click="see(val.faId)" type="button" class="btn btn-default">阅读全文</button>
            </router-link>
            <hr>
            <p class="c">#{{Names[name]}}</p>
          </div>

        </li>

        <div class="block">
          <span class="demonstration"></span>
          <el-pagination ref="elpage"
                         @current-change="change()"
                         :current-page.sync="pageIndex"
                         layout="prev, pager, next"
                         :total="pageCount"
                         :page-size="pagesize">
          </el-pagination>

        </div>
        <a name="a" style="margin-bottom:100px;"></a>

      </ul>
    </div>
    <!--<p v-if="vv" class="cc">没有了哦</p>-->

  </div>
</template>

<script>
  import axios from 'axios'
  import store from './store.js'
  import Com_d from './Com_d.vue'

  export default {
    name: "List",
    components: {
      'com_d': Com_d,
    },
    data() {
      return {
        imgs: [{img: require("../../assets/images/a.jpg")}],

        Names: ['最新', '精品推荐', '养宠日记', '交流分享', '搜索结果'],
        faId: '',
        name: 0,
        // a: 1,//翻页第几页
        vv: false,
        pageIndex: 1,
        pagesize: 6,  //每页条数
        pageCount: 0,//总数量
        url:this.$store.state.url,
        myActData: [],//全部的帖子
        activitys: [],//单页的帖子

      }
    },
    computed: {
      myActData1() {
        return this.activitys;
      }
    },

    methods: {
      loadData() {
        this.activitys = [];
        // console.log('this.pageInedx:' + this.pageIndex)
        // console.log('this.pageCount:' + this.pageCount)
        let start = (this.pageIndex - 1) * this.pagesize;
        let end = start + this.pagesize;
        //pageindex:0 , start:0 ; end:4
        //pageindex:1 , start: 4; end:8
        //pageindex:2 , start:8 ; end:12
        //pageindex:3 , start:6 ; end:8
        // console.log('-----------------')
        // console.log('start:' + start)
        // console.log('end:' + end)
        // console.log(this.myActData[1]);
        if (end >= this.pageCount) {
          end = this.pageCount
        }
        for (var i = start; i < end; i++) {
          this.activitys.push(this.myActData[i])
        }
      },
      change() {
        return this.loadData();
      },
      see(index) {
        let storage = window.localStorage;
        storage.faId = index
        // this.$router.go(0)
      },
      add() {
        store.commit('addName', {
          amount: '交流分享',
          am: 'a'
        })

      },
      // next() {
      //   this.q = this.q + 6
      //
      //   if (this.a < this.cou-1) {
      //     this.w = this.w + 6
      //     this.value1 = []
      //     this.a++  //记录当前页
      //     for (let i = this.q; i < this.w; i++) {
      //       this.value1.push(this.value[i])
      //     }
      //     // console.log(this.value)
      //     // console.log(this.value1)
      //   }
      //   //最后一页的，要取出最后一页多少个帖子
      //   else if (this.a == this.cou-1) {
      //     this.value1 = []
      //     this.a++  //记录当前页
      //     this.w=this.value.length
      //     for (let i = this.q; i <this.w ; i++) {
      //       this.value1.push(this.value[i])
      //     }
      //     // console.log(this.value)
      //     // console.log(this.value1)
      //
      //   }
      //   else {
      //     this.cc()
      //   }
      //
      // },

      // front() {
      //
      //   //当前页是最后一页的情况下
      //   if(this.a==this.cou-1){
      //     //用全部数量减去最后一页的数量，获取倒数第二个的最大长度
      //    this.w=this.w-(this.w-(6*this.cou-1))
      //     this.q=this.w-6
      //     for (let i = this.q; i <this.w; i++) {
      //       this.value1.push(this.value[i])
      //     }
      //     this.a--
      //   }
      //   else if(this.a==1){
      //     this.cc()
      //   }
      //   else{
      //     this.q=this.q-6
      //     this.w=this.w-6
      //     for (let i = this.q; i <this.w; i++) {
      //       this.value1.push(this.value[i])
      //     }
      //     this.a--
      //   }
      //
      // },
      cc() {
        let _this = this
        _this.vv = true
        setTimeout(function () {
          _this.vv = false
        }, 3000)
      },
      Keyword() {
        let storage = window.localStorage;
        // console.log('0000'+storage.text)
        axios.get(this.$store.state.url+`/forumSee/query/?Keyword=${storage.text}`).then((result) => {
          this.myActData = result.data.data[0];
          this.pageCount = this.myActData.length;
          this.loadData()

        })
      },
    },
    watch: {
      '$route': 'Keyword'
    },
    mounted() {
      let _this = this
      let storage = window.localStorage;
      let plate = storage.plate
      this.name = plate
      //只有四个模块 最大3
      if (plate != 4) {
        if (plate == 0) {
          axios.get(this.$store.state.url+"/forumSee/time").then((result) => {
            _this.myActData = result.data.data;
            _this.pageCount = _this.myActData.length;
            console.log(_this.pageCount)
            _this.loadData()
            //   for (let i = 0; i < 6; i++) {
            //     this.value1.push(this.value[i])
            //   }
            //   this.cou = Math.ceil(this.value.length / 6)
          })

        }
        else if (plate == 1) {
          axios.get(this.$store.state.url+"/forumSee/essence").then((result) => {
            _this.myActData = result.data.data;
            _this.pageCount = _this.myActData.length;
            console.log(_this.pageCount)
            _this.loadData()
            // for (let i = 0; i < 6; i++) {
            //   this.value1.push(this.value[i])
            // }
            // this.cou = Math.ceil(this.value.length / 6)
          })
        }
        else if (plate == 2) {
          axios.get(this.$store.state.url+"/forumSee/diary").then((result) => {
            _this.myActData = result.data.data;
            _this.pageCount = _this.myActData.length;
            console.log(_this.pageCount)
            _this.loadData()
            // for (let i = 0; i < 6; i++) {
            //   this.value1.push(this.value[i])
            // }
            // this.cou = Math.ceil(this.value.length / 6)
          })
        }
        else {
          axios.get(this.$store.state.url+"/forumSee/gossip").then((result) => {
            _this.myActData = result.data.data;
            _this.pageCount = _this.myActData.length;
            // console.log(_this.pageCount)
            _this.loadData()
            // for (let i = 0; i < 6; i++) {
            //   this.value1.push(this.value[i])
            // }
            // this.cou = Math.ceil(this.value.length / 6)
          })
        }
      }
//搜索结果
      else {
        this.Keyword()

      }
    }
  }
</script>

<style scoped>
  /*.cc {*/
    /*width: 180px;*/
    /*height: 60px;*/
    /*line-height: 60px;*/
    /*text-align: center;*/
    /*background: rgba(60, 60, 60, 0.6);*/
    /*border-radius: 3px;*/
    /*position: fixed;*/
    /*top: 50%;*/
    /*left: 30%;*/
    /*color: #fefefe;*/
    /*font-size: 18px;*/
  /*}*/

 .com_d{
   margin-left:-30px;
 }
  button {
    border-radius: 3px;
  }

  .left {
    color: #848484;
  }

  .right {
    float: right;
  }

  .con {
    margin: 25px;
    width: 800px;
    /*height: 1650px;*/
    padding: 0px 20px 20px 20px;
    /*border: 1px solid #989898;*/

    word-wrap:break-word;
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

    word-wrap:break-word;

    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    /*white-space:nowrap;*/

  }

  .head {
    text-align: center;
  }

  .name {
    color: #989898;
    font-size: 13px;
  }

  .photo {
    margin-top: 30px;
    text-align: center;
  }

  img {
    max-width: 658px;
  }

  .value {
    margin: 30px 0;


    word-wrap:break-word;
  }

  .block {
    margin-top: 70px;
    width: 800px;
    height: 150px;
    line-height: 150px;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #323232;
  }

  .c {
    font-size: 18px;
    color: #939393;
  }
</style>

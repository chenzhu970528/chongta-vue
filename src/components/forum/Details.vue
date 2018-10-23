<template>
  <div id="content">
    <div class="left">
      <!--详细内容     -->
      <div class="val">

        <div><h2>{{value.art[0].faTitle}}</h2></div>
        <div class="headpic">

          <img class='headimg' :src='values[0].headPic' alt="">
          <span class="name">{{value.art[0].userName}}</span>

          <span>{{value.art[0].time.slice(0,16).replace('T',' ')}}</span>
          <span class="r">
            <span class="s glyphicon" :class='aa' @click="a">{{value.like[0].like_sum}}</span>
            <span>&nbsp{{value.sum[0][0].sum_count-1}}回复</span>
          </span>
          <!--<span class="glyphicon glyphicon-edit"></span>-->
        </div>
        <!--帖子的内容-->
        <div class="img">
          <p>{{value.art[0].faText}}</p>
          <div v-for="img in imgs" class="center">
            <img :src='img' alt="">
          </div>

        </div>
      </div>
      <el-input v-model="input" style="width:755px;margin-top:50px;"></el-input>
      <button type="button" @click="addCom" class="rbtn btn btn-primary btn-sm active">发表</button>
      <!--评论区域-->
      <div class="com">
        <ul>
          <li class="hhh" v-for="(com,index) in value.comment">
            <div class="border1">
              <div class="head1">
                <img :src='imgs[0]' alt="" class="img1">
                <div class="headRight">
                  <p class="name1">{{com.userName}}</p>
                  <p>{{com.time.slice(5,16).replace('T',' ')}}</p>
                </div>
              </div>
              <div class="val1">
                <div class="but">
                  <div class="">
                    <p>{{com.faText}}</p>
                  </div>
                  <div class="com11" :key="index">
                    <!--<a @click="aaaa(index)" class="rr">回复</a>-->
                    <a @click="aaaa" class="rr">回复</a>
                    <!--<div v-if="aaa(index)">-->
                    <div v-if="aaa">
                      <!--<a class="rr">回复</a>-->
                    <div class="h">
                      <el-input v-model="rep" style="width:705px;"></el-input>
                      <button @click="addReply(index)" type="button" class="rbtn btn btn-primary btn-sm active">发表
                      </button>
                    </div>

                  </div>
                </div>
                <!--回复-->

                <div class="com1 " v-for="(reply,keys) in  value.comment[index].replys">
                  <div class="head">
                    <img :src='imgs[1]' alt="" class="img1">
                    <div class="headRight">
                      <p><span class="name1">{{reply.frName}}</span> 回复<span class="name1">{{reply.fcName}}</span></p>
                      <p>{{reply.time.slice(5,16).replace('T',' ')}}</p>
                    </div>
                  </div>
                  <div class="val1 but">
                    <p class="p">{{reply.frText}}</p>
                    <div class="com11" :key="keys">
                      <!--<a @click="bb(keys)" class="rr">回复</a>-->
                      <a @click="bb()" class="rr">回复</a>
                      <!--<p v-if="bbb[keys]">saaaaaaaaaaaaaaaaaaa</p>-->
                      <!--<div v-if="bbb[keys]">-->
                      <div v-if="bbb">
                      <div>
                        <el-input v-model="rep" style="width:655px;"></el-input>
                        <button @click="addReply(index)" type="button" class="rbtn btn btn-primary btn-sm active">发表
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            </div>
            </div>

      </li>
        </ul>
        <br>
        <button type="button" @click="cc" class="btn btn-primary btn-lg btn-block">加载更多</button>

      </div>

    </div>
    <div class="right">
      <ranking></ranking>
    </div>
    <p v-if="vv" class="cc">发表成功~</p>
  </div>
</template>

<script>
  import Ranking from './Ranking'
  import axios from 'axios'
  import Com_b from './Com_b'
  import store from './store.js'
  import {mapGetters} from 'vuex';

  export default {
    name: "Details",
    components: {
      'ranking': Ranking,
      'com_b': Com_b,
    },
    computed: mapGetters([
      'UserId',
      'UserName',
    ]),
    data() {
      return {
        values: [{
          headPic: require("../../assets/images/a.jpg"),
        }],
        value: [],
        imgs: [require("../../assets/mao1.jpg"), require("../../assets/images/a.jpg")],
        aa: 'glyphicon-heart-empty',
        as: true,
        input: '',
        rep: '',
        count: 0,
        aaa: [],
        bbb: [],
        vv:false,
      }
    },
    methods: {
      a() {
        this.as = !this.as;
        if (this.as) {
          this.aa = 'glyphicon-heart-empty';
          this.value.like[0].like_sum--
        } else {
          this.aa = 'glyphicon-heart';
          this.value.like[0].like_sum++
        }
      },
      addCom() {
        if (this.input != '') {
          let dd = {
            faId: this.value.art[0].faId,
            faText: this.input,
            userId: this.UserId.replace(/\"/g, ""),
            userName: this.UserName.replace(/\"/g, "")
          }
          this.input = '';
          let _this=this
          $.ajax({
            url: "http://localhost:3000/forumAdd/comment",
            type: "post",
            data: dd,
            success: function (result) {

              console.log(result.data)
              _this.cc()
            }

          })
        }
      },
      addReply(index) {

        if (this.rep != '') {
          let rr = {
            fcId: this.value.comment[index].fcId,
            fcName: this.value.comment[index].userName,
            frman: this.UserId.replace(/\"/g, ""),
            frName: this.UserName.replace(/\"/g, ""),
            frText: this.rep,
          }
          this.rep = '';
          let _this=this
          $.ajax({
            url: "http://localhost:3000/forumAdd/reply",
            type: "post",
            data: rr,
            success: function (result) {
              console.log(result.data)
              _this.cc()
            }
          })
        }
      },
      aaaa() {
        this.aaa =!this.aaa
      },
      bb() {
        this.bbb =!this.bbb
      },
      // aaaa(index) {
      //
      //   this.aaa[index] =!this.aaa[index]
      //   console.log( this.aaa[index])
      // },
      // bb(keys) {
      //   console.log('sads ')
      //   this.bbb[keys] =!this.bbb[keys]
      //   console.log(this.bbb[keys])
      //   console.log(this.bbb)
      // },
      cc(){
        let _this=this
        _this.vv=true
        setTimeout(function () {
          _this.vv=false
        },3000)
      }
    },
    mounted() {
      console.log(store.state.faId)
      let get = this;
      get.count = store.state.faId
      axios.get(`http://localhost:3000/forumSee/all/?faId=${get.count}`).then((result) => {
        get.value = result.data.data;

        if (get.value.comment) {
          for (let i = 0; i < get.value.comment.length; i++) {
            get.value.comment[i].replys = []
            // get.aaa.push(false)

            if (get.value.reply) {

              for (let j = 0; j < get.value.reply.length; j++) {

                if (get.value.comment[i].fcId == get.value.reply[j].fcId) {
                  // get.bbb.push(false)
                  get.value.comment[i].replys.push(get.value.reply[j])
                }
              }
            }
          }
        }
      })


    }
  }
</script>

<style scoped>
  .cc{
    position: fixed;
    top:50%;
   left:30%;
    color:#ccc;
  }
  /*.hhh{*/
    /*height: auto;*/
  /*}*/
  /*.h{*/
    /*height: 100px;*/
    /*margin-bottom:180px;*/
  /*}*/
  #content {
    box-shadow: -2px 2px 10px 2px #bcbcbc;
    background: rgba(255, 255, 255, 0.9);
    width: 1240px;
    margin: auto;
    margin-top:100px;
    position: relative;
    padding-bottom: 300px;
  }

  h2 {
    height: 50px;
    line-height: 50px;
  }

  .left {
    display: inline-block;
    width: 800px;
    background: white;
    /*border:1px solid #989898;*/
    margin: 25px 0 0 25px;
    padding: 22px;
  }

  .headpic {
    width: 740px;
    height: 90px;
    line-height: 70px;
  }

  .name {
    font-size: 18px;
  }

  .r {
    font-size: 18px;
    float: right;
    line-height: 60px;
  }

  .s:hover {
    cursor: pointer;
  }

  .headimg {
    width: 60px;
    height: 60px;
    border-radius: 60px;
  }

  .img {
    width: 754px;
    display: block;
    font-size: 18px;

  }

  .center {
    width: 754px;
    text-align: center;
  }

  .center > img {
    margin: auto;
    max-width: 754px;
  }

  .val {
    border-bottom: 1px dotted #ddd;
    padding-bottom: 60px;
  }

  .com {
    padding: 60px 0;
  }

  .right {
    position: absolute;
    top: 24px;
    right: 25px;
    width: 360px;
  }

  .rbtn {
    float: right;
    margin-top: 3px;
    margin-right: 3px;
  }

  li {
    margin-left: -40px;
    padding-bottom: 30px;
    list-style: none;
  }

  .head1 {
    width: 754px;
    height: 50px;
    line-height: 50px;
    margin-bottom: 20px;
  }

  .headRight {
    display: inline-block;
  }

  .headRight > p {
    height: 15px;
  }

  .name1 {
    font-size: 15px;
    color: #285f8f;
  }

  .img1 {
    width: 44px;
    height: 44px;
    border-radius: 22px;
    vertical-align: unset;
  }

  .val1 {
    margin-left: 50px;
    font-size: 15px;
  }

  .com1 {
    margin-bottom: 10px;
    margin-top: 50px;
  }

  .com11 {
    height: 30px;
    margin-top: -10px;
    margin-bottom: 5px;
  }

  .rr {
    text-decoration: none;
    float: right;
    margin-right: 15px;
    color: #888;
    font-size: 14px;
    cursor: pointer;
  }

  .border1 {
    border-bottom: 1px dotted #ccc;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
</style>

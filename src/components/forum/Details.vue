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
    <!--删除文章-->
    <span class="glyphicon glyphicon-trash" data-toggle="modal" data-target="#delcomm"></span>

    <div id="delcomm" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
    <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
    <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <h5 class="modal-title">删除提示</h5>
    </div>
    <div class="modal-body" style="font-size:16px;">
    确定删除这篇文章吗
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
    <button type="button" class="btn btn-primary" data-dismiss="modal"
            @click="delart(value.art[0].faId)">确定</button>
    </div>
    </div>
    </div>
    </div>


    <span class="s glyphicon" :class='aa' @click="a()">{{value.like[0].like_sum}}</span>
    <span>&nbsp{{value.sum[0][0].sum_count-1}}回复</span>
    </span>
        </div>
        <!--帖子的内容-->
        <div class="img">
          <p>{{value.art[0].faText}}</p>
          <div v-for="img in imgs" class="center">
            <img :src='img' alt="">
          </div>

        </div>
      </div>
      <div id="dd0" class="test_box cominp0"
           contenteditable="true"
           v-html="myHtmlcode"
           @input="onDivInput($event)">
        <br/>
      </div>
      <!--添加评论-->
      <button type="button" @click="addCom()" class="rbtn1 btn btn-primary btn-sm active">发表</button>

      <!--评论区域-->
      <div class="com">
        <ul>
          <li class="hhh" v-for="(com,index) in value1">
            <div class="border1">
              <div class="head1">
                <img :src='imgs[0]' alt="" class="img1">
                <div class="headRight">
                  <p class="name1">{{com.userName}}</p>
                  <p>{{com.time.slice(0,16).replace('T',' ')}}</p>
                </div>
              </div>
              <div class="val1">
                <div class="but">
                  <div class="">
                    <p>{{com.faText}}</p>
                  </div>
                  <div class="com11" :key="index">
                    <span @click.prevent="aaaa(index)" class="rr">回复</span>
                    <!--删除评论-->
                    <span class="glyphicon glyphicon-trash" data-toggle="modal" data-target="#delcom"></span>

                    <div id="delcom" class="modal fade" tabindex="-1" role="dialog"
                         aria-labelledby="gridSystemModalLabel">
                      <div class="modal-dialog modal-sm" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                              aria-hidden="true">&times;</span></button>
                            <h5 class="modal-title" id="gridSystemModalLabel9">删除提示</h5>
                          </div>
                          <div class="modal-body" style="font-size:16px;">
                            确定删除这条评论吗{{com.fcId}}
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal"
                                    @click="delcom(com.fcId)">确定
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div v-if="aaa[index]" class="h">
                      <div>
                        <!--添加表层回复-->
                        <div class="dd1 test_box cominp1" contenteditable="true"
                             v-html="myHtmlcode1"
                             @input="onDivInput1($event)">

                        </div>
                        <button @click="addReply(index,1)" type="button" class="rbtn btn btn-primary btn-sm active">发表
                        </button>
                      </div>
                    </div>
                  </div>
                  <!--回复-->

                  <div class="com1 " v-for="(reply,keys) in  value1[index].replys">
                    <div class="head">
                      <img :src='imgs[1]' alt="" class="img1">
                      <div class="headRight">
                        <p><span class="name1">{{reply.frName}}</span> 回复<span class="name1">{{reply.fcName}}</span></p>
                        <p>{{reply.time.slice(0,16).replace('T',' ')}}</p>
                      </div>
                    </div>
                    <div class="val1 but">
                      <p class="p">{{reply.frText}}</p>
                      <!--删除回复-->
                      <span class="glyphicon glyphicon-trash" data-toggle="modal" data-target="#delrep"></span>

                      <div id="delrep" class="modal fade" tabindex="-1" role="dialog"
                           aria-labelledby="gridSystemModalLabel">
                        <div class="modal-dialog modal-sm" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                              <h5 class="modal-title" id="gridSystemModalLabel">删除提示</h5>
                            </div>
                            <div class="modal-body" style="font-size:16px;">
                              确定删除这条回复吗{{reply.frId}}
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                              <button type="button" class="btn btn-primary" data-dismiss="modal"
                                      @click="delcom(reply.frId)">确定
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div class="com11" :key="keys">

                        <a @click="bb(index,keys)" class="rr">回复</a>
                        <div v-if="bbb[index][keys]" class="h">
                          <div class="dd2 test_box cominp2" contenteditable="true"
                               v-html="myHtmlcode1"
                               @input="onDivInput1($event)">
                          </div>
                          <button @click="addReply(index,2)" type="button" class="rbtn btn btn-primary btn-sm active">发表
                          </button>


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

        <span v-if="value.comment">
        <button v-if="(value.comment.length)>6&&(value1.length<value.comment.length)" type="button"
        @click="next" class="blue btn btn-primary btn-lg btn-block">加载更多
        </button>
        <button v-if="value1.length===value.comment.length&&value1.length>6" type="button" @click="one"
        class="blue btn btn-primary btn-lg btn-block">收起
        </button>
        </span>

      </div>

    </div>
    <div class="right">
      <ranking></ranking>
    </div>
    <p v-if="hide" class="cc">{{tips}}</p>


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
        value: [],//文章和全部评论回复
        value1: [],//存放显示的评论
        imgs: [require("../../assets/mao1.jpg"), require("../../assets/images/a.jpg")],
        aa: 'glyphicon-heart-empty',//空心
        as: true,// 心的状态
        comm: '',
        rep: '',
        count: 0,//文章的id
        userId: 0,
        userName: '',
        aaa: [],//评论框开启关闭
        bbb: [],//回复框开启关闭
        hide: false,//提示状态
        tips: '先去登录吧',
        myHtmlCode: '',
        myHtmlCode1: '',
        x: 0,//设置唯一评论框
        y: [0, 0],
        z: 2,//判断评论点击同一个
        k: 2,//判断回复点击同一个
        q: 0,//加载更多需要的范围值
        w: 6,
        page: 1,//当前页数
        cou: 0//总页数
      }
    },

    methods: {
      //加载更多
      next() {
        this.q = this.q + 6
        if (this.page < this.cou - 1) {
          this.w = this.w + 6
          this.page++  //记录当前页
          for (let i = this.q; i < this.w; i++) {
            this.value1.push(this.value.comment[i])
          }
          // console.log(this.value)
          // console.log(this.value1)
        }
        //最后一页的，要取出最后一页多少个帖子
        else if (this.page === this.cou - 1) {

          this.w = this.value.comment.length
          for (let i = this.q; i < this.w; i++) {
            this.value1.push(this.value.comment[i])
          }

        }
      },
      //收起显示第一页
      one() {
        this.value1 = []
        for (let i = 0; i < 6; i++) {
          this.value1.push(this.value.comment[i])
        }

      },

      onDivInput: function (e) {
        this.myHtmlCode = e.target.innerText;


      },
      onDivInput1: function (e) {
        this.myHtmlCode1 = e.target.innerText;


      },
      //点赞
      a() {
        if (!this.UserId) {
          this.tips = '先去登录吧'
          this.show()
        }

        else {
          let e = {
            faId: this.value.art[0].faId,
            userId: this.UserId.replace(/\"/g, ""),
          }
          this.as = !this.as;
          if (this.as) {

            this.aa = 'glyphicon-heart-empty';
            this.value.like[0].like_sum--
            $.ajax({
              url: "http://localhost:3000/forumDel/like",
              type: "post",
              data: e,
              success: function (result) {
                // console.log(result.data)
              }

            })
          } else {
            this.aa = 'glyphicon-heart';
            this.value.like[0].like_sum++
            $.ajax({
              url: "http://localhost:3000/forumAdd/like",
              type: "post",
              data: e,
              success: function (result) {
                // console.log(result.data)
              }

            })
          }
        }
      },
      //添加评论
      addCom() {
        if (!this.UserId) {
          this.tips = '先去登录吧'
          this.show()
        }
        else {
          if (this.myHtmlCode.length >= 2) {
            let dd = {
              faId: this.value.art[0].faId,
              faText: this.myHtmlCode,
              userId: this.UserId.replace(/\"/g, ""),
              userName: this.UserName.replace(/\"/g, ""),
            }
            document.getElementById('dd0').innerText = ''
            let _this = this
            console.log(dd)
            $.ajax({
              url: "http://localhost:3000/forumAdd/comment",
              type: "post",
              data: dd,
              success: function (result) {
                console.log(result.data)
                _this.tips = '评论成功'
                _this.show()
                //重新渲染数据用
                let get = _this;
                get.count = store.state.faId
                axios.get(`http://localhost:3000/forumSee/all/?faId=${get.count}`).then((result) => {
                  get.value = result.data.data;

                  if (get.value.comment) {
                    get.cou = Math.ceil(get.value.comment.length / 6)
                    for (let i = 0; i < get.value.comment.length; i++) {
                      get.value.comment[i].replys = []
                      //添加弹框状态
                      get.aaa.push(false)
                      get.bbb.push([])
                      if (get.value.reply) {

                        for (let j = 0; j < get.value.reply.length; j++) {

                          if (get.value.comment[i].fcId === get.value.reply[j].fcId) {
                            get.bbb[i].push(false)
                            get.value.comment[i].replys.push(get.value.reply[j])
                          }
                        }
                      }
                    }
                  }
                  // 当前评论数
                  get.value1=[]//先清空
                  if (get.value.comment.length > 6) {
                    for (let i = 0; i < 6; i++) {
                      get.value1.push(get.value.comment[i])
                    }
                  } else {
                    for (let i = 0; i < get.value.comment.length; i++) {
                      get.value1.push(get.value.comment[i])
                    }
                  }
                })
              }

            })
          } else {
            this.c()
          }
        }
        this.$forceUpdate()
      },
      //添加回复
      addReply(index, key) {
        if (!this.UserId) {

          this.tips = '先去登录吧'
          this.show()
        } else {
          if (this.myHtmlCode1.length >= 2) {
            if (key === 1) {
              let a = document.getElementsByClassName('dd1')
              for (let i = 0; i < a.length; i++) {
                a[i].innerText = ' '
              }
            }
            else if (key === 2) {
              let b = document.getElementsByClassName('dd2')
              for (let i = 0; i < b.length; i++) {
                b[i].innerText = ' '
              }
            }
            let rr = {
              fcId: this.value.comment[index].fcId,
              fcName: this.value.comment[index].userName,
              frman: this.UserId.replace(/\"/g, ""),
              frName: this.UserName.replace(/\"/g, ""),
              frText: this.myHtmlCode1,
            }
            this.myHtmlCode1 = ' ';
            let _this = this
            $.ajax({
              url: "http://localhost:3000/forumAdd/reply",
              type: "post",
              data: rr,
              success: function (result) {
                console.log(result.data)
                _this.tips = '回复成功'
                _this.show()

                //重新渲染数据用
                let get = _this;
                get.count = store.state.faId
                axios.get(`http://localhost:3000/forumSee/all/?faId=${get.count}`).then((result) => {
                  get.value = result.data.data;

                  if (get.value.comment) {
                    get.cou = Math.ceil(get.value.comment.length / 6)
                    for (let i = 0; i < get.value.comment.length; i++) {
                      get.value.comment[i].replys = []
                      get.aaa.push(false)
                      get.bbb.push([])
                      if (get.value.reply) {

                        for (let j = 0; j < get.value.reply.length; j++) {

                          if (get.value.comment[i].fcId === get.value.reply[j].fcId) {
                            get.bbb[i].push(false)
                            get.value.comment[i].replys.push(get.value.reply[j])
                          }
                        }
                      }
                    }
                  }
                  //当前评论数
                  get.value1=[]//先清空

                  if (get.value.comment.length > 6) {
                    for (let i = 0; i < 6; i++) {
                      get.value1.push(get.value.comment[i])
                    }
                  } else {
                    for (let i = 0; i < get.value.comment.length; i++) {
                      get.value1.push(get.value.comment[i])
                    }
                  }
                })

              }
            })
          }
          else {
            this.c()
          }
        }
        this.$forceUpdate()
      },
//评论点击弹框
      aaaa(index) {
        //点击当前，其他框框关闭

        this.bbb[this.y[0]][this.y[1]] = false
        if (this.aaa[this.x] == this.aaa[index]) {
          this.k++
        } else {
          this.k = 0
        }
        //k是偶数
        if (this.k % 2 == 0) {
          this.aaa[this.x] = false
        }
        this.aaa[index] = !this.aaa[index]
        this.x = index
        this.$forceUpdate()
      },
      bb(keys, index) {
        //点击当前，其他框框关闭
        this.aaa[this.x] = false
        //添加z点击同一个z+1
        if (this.bbb[this.y[0]][this.y[1]] == this.bbb[keys][index]) {
          this.z++
        } else {
          this.z = 0
        }
        //z是偶数
        if (this.z % 2 == 0) {
          this.bbb[this.y[0]][this.y[1]] = false
        }


        this.bbb[keys][index] = !this.bbb[keys][index]

        this.y = [keys, index]
        this.$forceUpdate()
      },
      //删除帖子
      delart(faId) {
        let _this = this
        $.ajax({
          url: "http://localhost:3000/forumDel/art",
          type: "post",
          data: faId,
          success: function (result) {

            console.log(result.data)
            console.log(faId)
            _this.tips = '删除成功'
            _this.show()

          }
        })

      },
      //删除评论
      delcom(fcId) {
        let _this = this
        $.ajax({
          url: "http://localhost:3000/forumDel/comment",
          type: "post",
          data: fcId,
          success: function (result) {
            console.log(result.data)
            console.log(fcId)
            _this.tips = '删除成功'
            _this.show()
            //重新渲染数据用
            let get = _this;
            get.count = store.state.faId
            axios.get(`http://localhost:3000/forumSee/all/?faId=${get.count}`).then((result) => {
              get.value = result.data.data;

              if (get.value.comment) {
                for (let i = 0; i < get.value.comment.length; i++) {
                  get.value.comment[i].replys = []
                  get.aaa.push(false)
                  get.bbb.push([])
                  if (get.value.reply) {

                    for (let j = 0; j < get.value.reply.length; j++) {

                      if (get.value.comment[i].fcId == get.value.reply[j].fcId) {
                        get.bbb[i].push(false)
                        get.value.comment[i].replys.push(get.value.reply[j])
                      }
                    }
                  }
                }
              }

            })


          }
        })

      },
      //删除回复
      delrep(frId) {
        let _this = this
        $.ajax({
          url: "http://localhost:3000/forumDel/reply",
          type: "post",
          data: frId,
          success: function (result) {
            console.log(result.data)
            console.log(frId)
            _this.tips = '删除成功'
            _this.show()

            //重新渲染数据用
            let get = _this;
            get.count = store.state.faId
            axios.get(`http://localhost:3000/forumSee/all/?faId=${get.count}`).then((result) => {
              get.value = result.data.data;

              if (get.value.comment) {
                for (let i = 0; i < get.value.comment.length; i++) {
                  get.value.comment[i].replys = []
                  get.aaa.push(false)
                  get.bbb.push([])

                  if (get.value.reply) {

                    for (let j = 0; j < get.value.reply.length; j++) {

                      if (get.value.comment[i].fcId == get.value.reply[j].fcId) {
                        get.bbb[i].push(false)
                        get.value.comment[i].replys.push(get.value.reply[j])
                      }
                    }
                  }
                }
              }

            })


          }
        })

      },

      //发表成功提示框
      show() {
        let _this = this
        _this.hide = true
        setTimeout(function () {
          _this.hide = false
          // _this.comf = 0
        }, 3000)
      },
    },
    mounted() {
      // console.log(store.state.faId)
      let get = this;
      get.count = store.state.faId

      axios.get(`http://localhost:3000/forumSee/all/?faId=${get.count}`).then((result) => {

        get.value = result.data.data;
        console.log(this.value)
        // 用户是否登录 是否判定点赞
        if (this.UserId) {
          let faId = this.value.art[0].faId
          let userId = this.UserId.replace(/\"/g, "")
          axios.get(`http://localhost:3000/forumSee/selike?faId=${faId}&&userId=${userId}`).then((result) => {
            if (result.data.data === 1) {
              this.aa = 'glyphicon-heart';
              this.as = !this.as
            }
          })
        }
        //评论
        if (get.value.comment) {
          get.cou = Math.ceil(this.value.comment.length / 6)
          for (let i = 0; i < get.value.comment.length; i++) {
            //定义评论数组
            get.value.comment[i].replys = []
            this.aaa.push(false)
            this.bbb.push([])

            //添加回复到对应的评论里
            if (get.value.reply) {

              for (let j = 0; j < get.value.reply.length; j++) {

                if (get.value.comment[i].fcId === get.value.reply[j].fcId) {
                  get.bbb[i].push(false)
                  get.value.comment[i].replys.push(get.value.reply[j])
                }
              }
            }

          }
          //当前评论数
          if (this.value.comment.length > 6) {
            for (let i = 0; i < 6; i++) {
              this.value1.push(this.value.comment[i])
            }
          } else {
            for (let i = 0; i < this.value.comment.length; i++) {
              this.value1.push(this.value.comment[i])
            }
          }

        }


      })


    },
  }
</script>

<style scoped>
  .blue {
    background: #4c8abe;
    border: none;
  }

  input {
    height: 60px;
  }

  .test_box {
    width: 600px;
    min-height: 10px;
    /*设置最小高度*/
    max-height: 1000px;
    /*设置最大高度超过300px时出现滚动条*/
    _height: 10px;
    display: inline-block;
    padding: 5px 15px;
    outline: 0;
    border: 1px solid #dbdee5;
    border-radius: 3px;
    font-size: 14px;
    line-height: 24px;
    word-wrap: break-word;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .cc {
    width: 180px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: rgba(60, 60, 60, 0.6);
    border-radius: 3px;
    position: fixed;
    top: 50%;
    left: 30%;
    color: #fefefe;
    font-size: 18px;
  }

  #content {
    box-shadow: -2px 2px 10px 2px #bcbcbc;
    background: rgba(255, 255, 255, 0.9);
    width: 1240px;
    margin: auto;
    margin-top: 100px;
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
    /*border-bottom: 1px dotted #ddd;*/
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

  .rbtn1, .rbtn {
    float: right;
    margin-top: 3px;
    margin-right: 3px;
  }

  .rbtn1 {
    margin-top: 10px;
    width: 50px;
    height: 33px;
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
    margin-bottom: 0px;
    margin-top: 20px;
    /*border-bottom: 1px dotted #ccc;*/
  }

  .com11 {
    margin-top: -10px;
    margin-bottom: 5px;
  }

  .rr {
    text-decoration: none;
    margin-right: 15px;
    color: #888;
    font-size: 14px;
    cursor: pointer;
  }

  .border1 {
    border: 1px solid #ccc;
    padding-bottom: 20px;
    margin-bottom: 20px;
    margin-top: -35px;
  }

  .cominp0 {
    width: 700px;
    min-height: 35px;
    margin-top: 10px;
  }

  .cominp1 {
    min-height: 35px;
    width: 650px;
  }

  .cominp2 {
    min-height: 35px;
    width: 600px;
  }

  .rbtn {
    /*width: 60px;*/
    /*height: 38px;*/
    font-size: 14px;
    margin-top: -0px;
  }
</style>

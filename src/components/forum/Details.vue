<template>
  <div id="con">
    <div id="content">
      <!--<div id="top">-->
      <!--<img style="position: fixed;" src="../../assets/forum/6.jpg" alt="">-->
      <!--</div>-->
      <div class="left">
        <!--详细内容     -->   <div>&nbsp &nbsp<h2>{{value.art[0].faTitle}}</h2></div>
        <div class="val">

          <div class="headpic">
            <!--<img class='headimg' :src='url+value.pic[0].headPic' alt="">-->
            <img class='headimg' :src='url+value.pic[0].headPic' alt="">
            <span class="name">{{value.art[0].userName}}</span>

            <span>{{value.art[0].time.slice(0,16).replace('T',' ')}}</span>

            <span class="r">
            <!--管理员推荐,判断管理员帐号-->
            <span v-if="admin">

              <span @click="addRec(value.art[0].faId)" class="glyphicon glyphicon-arrow-up"
                    v-if="rec===0"
                    style="color: #ccc" title="推荐">
             </span>
            <span class="glyphicon glyphicon-arrow-up"
                  v-if="rec===1"
                  @click="delRec(value.art[0].faId)" title="取消推荐">

            </span>
            </span>

&nbsp
              <!--删除文章-->
               <span v-if="admin ||value.art[0].userId==userId ">

            <el-popover
              placement="top"
              width="160">
              <!--v-model="visible2[index]"-->
              <p>确定删除吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text">取消</el-button>
                <el-button type="primary" size="mini" @click="delart(value.art[0].faId)">确定</el-button>
              </div>
              <el-button slot="reference" icon="el-icon-delete" circle></el-button>

            </el-popover>

               </span>

&nbsp
              <!--增加收藏-->
    <span v-if="addlike" class="s glyphicon glyphicon-heart-empty" @click="addLike()" title="收藏">{{value.like[0].like_sum}}</span>
              <!--取消收藏-->
    <span v-if="dellike" class="s glyphicon glyphicon-heart" @click="delLike()"
          title="取消收藏">{{value.like[0].like_sum}}</span>

    <span>&nbsp{{value.sum[0][0].sum_count-1}}回复</span>
    </span>
          </div>




          <!--帖子的内容-->

          <div class="img">

            <p>{{value.art[0].faText}}</p>
            <div class="center" v-for="Img in img">
              <img :src='url+Img' alt=""><br><br>
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
        <div v-if="value1.length>0" class="com">
          <ul>
            <li class="hhh" v-for="(com,index) in value1">
              <div class="border1">
                <div class="head1">
                  <img :src='url+value.comhead[index][0].headPic' alt="" class="img1">
                  <div class="headRight">
                    <p class="name1">{{com.userName}}</p>
                    <p class="time">{{com.time.slice(0,16).replace('T',' ')}}</p>
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
                      <span v-if="admin ||com.userId==userId ">
                       <el-popover
                         placement="top"
                         width="160">

                      <p>确定删除吗？</p>
                      <div style="text-align: right; margin: 0">
                        <el-button size="mini" type="text">取消</el-button>
                        <el-button type="primary" size="mini" @click="delcom(com.fcId)">确定</el-button>
                      </div>
                      <el-button slot="reference" icon="el-icon-delete" circle></el-button>
                    </el-popover>
                    </span>


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
                        <img :src='url+reply.headPic' alt="" class="img1">
                        <div class="headRight">
                          <p><span class="name1">{{reply.frName}}</span> 回复<span class="name1">{{reply.fcName}}</span>
                          </p>
                          <p class="time">{{reply.time.slice(0,16).replace('T',' ')}}</p>
                        </div>
                      </div>
                      <div class="val1 but">
                        <p class="p">{{reply.frText}}</p>


                        <div class="com11" :key="keys">

                          <a @click="bb(index,keys)" class="rr">回复</a>
                          <!--删除回复-->
                          <span v-if="admin ||reply.frman==userId ">
                         <el-popover
                           placement="top"
                           width="160">
                        <!--v-model="visible2[index]"-->
                        <p>确定删除吗？</p>
                        <div style="text-align: right; margin: 0">
                          <el-button size="mini" type="text">取消</el-button>
                          <el-button type="primary" size="mini" @click="delrep(reply.frId)">确定</el-button>
                        </div>
                        <el-button slot="reference" icon="el-icon-delete" circle></el-button>

                      </el-popover>
                        </span>
                          <div v-if="bbb[index][keys]" class="h">
                            <div class="dd2 test_box cominp2" contenteditable="true"
                                 v-html="myHtmlcode1"
                                 @input="onDivInput1($event)">
                            </div>
                            <button @click="addReply(index,2)" type="button" class="rbtn btn btn-primary btn-sm active">
                              发表
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
        comhead: [],
        img: [],
        value: [],//文章和全部评论回复
        value1: [],//存放显示的评论
        imgs: [require("../../assets/mao1.jpg"), require("../../assets/images/a.jpg")],
        url: this.$store.state.url,
        addlike: true,// 增加心的状态
        dellike: false,// 删除心的状态
        comm: '',
        rep: '',
        count: 0,//文章的id
        userId: 0,//登录用户id
        userName: '',//登录用户名字
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
        cou: 0,//总页数,
        rec: 0,//推荐显示，
        admin: false,
      }
    },

    methods: {
      //重新渲染数据
      ajax() {
        //重新渲染数据用
        let get = this;
        let faId = window.localStorage.faId;
        get.value.comment = []
        get.comhead = []
        axios.get(this.$store.state.url + `/forumSee/all/?faId=${faId}`).then((result) => {
          // get.comhead = result.data.data.comhead
          get.value = result.data.data;
          get.q = 0//加载更多需要的范围值
          get.w = 6
          get.page = 1
          get.aaa = []
          get.bbb = []
          if (this.UserId) {
            //查看用户是否点赞
            let faId = this.value.art[0].faId
            get.userId = this.UserId.replace(/\"/g, "")
            axios.get(this.$store.state.url + `/forumSee/selike?faId=${faId}&&userId=${get.userId}`).then((result) => {
              if (result.data.data == 1) {
                this.addlike = false
                this.dellike = true
              }
            });
            //判断是不是管理员
            if (get.userId == 33) {
              get.admin = true
            }
            //查看是否是精品推荐
            axios.get(this.$store.state.url + `/forumSee/seeEss?faId=${faId}`).then((result) => {
              if (result.data.data == 1) {
                this.rec = 1;
              }
            })
          }

          if (get.value.comment) {
            get.cou = Math.ceil(get.value.comment.length / 6)
            for (let i = 0; i < get.value.comment.length; i++) {
              //添加个放评论的数组
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
          get.value1 = []//先清空
          if (get.value.comment) {
            if (get.value.comment.length > 6) {
              for (let i = 0; i < 6; i++) {
                get.value1.push(get.value.comment[i])
              }
            }
            else {
              for (let i = 0; i < get.value.comment.length; i++) {
                get.value1.push(get.value.comment[i])
              }

            }
          }

        })

      },
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
      addLike() {
        if (!this.UserId) {
          this.tips = '先去登录吧'
          this.show()
        }
        else {
          let e = {
            faId: this.value.art[0].faId,
            userId: this.UserId.replace(/\"/g, ""),
          }
          this.dellike = true;
          this.addlike = false;
          this.value.like[0].like_sum++
          $.ajax({
            url: this.$store.state.url + "/forumAdd/like",
            type: "post",
            data: e,
            success: function (result) {
              // console.log(result.data)
            }

          })
        }
      },

      delLike() {
        let e = {
          faId: this.value.art[0].faId,
          userId: this.UserId.replace(/\"/g, ""),
        }
        this.dellike = false;
        this.addlike = true;
        this.value.like[0].like_sum--
        $.ajax({
          url: this.$store.state.url + "/forumDel/like",
          type: "post",
          data: e,
          success: function (result) {
            // console.log(result.data)
          }

        })
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
              url: this.$store.state.url + "/forumAdd/comment",
              type: "post",
              data: dd,
              success: function (result) {
                console.log(result.data)
                _this.tips = '评论成功'
                _this.show()
                //重新渲染数据用
                _this.ajax()
              }

            })
          } else {
            this.tips = '最少两个字哦'
            this.show()
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
              url: this.$store.state.url + "/forumAdd/reply",
              type: "post",
              data: rr,
              success: function (result) {
                console.log(result.data)
                _this.tips = '回复成功'
                _this.show()
                //重新渲染数据用
                _this.ajax()

              }
            })
          }
          else {
            this.tips = '最少两个字哦'
            this.show()
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
        axios.get(this.$store.state.url + `/forumDel/art/?faId=${faId}`).then((result) => {
          _this.tips = '删除成功'
          _this.show()
          history.go(-1)

        })
      },
      //删除评论
      delcom(fcId) {
        // console.log('000000000000')
        // console.log(fcId)
        let _this = this
        axios.get(this.$store.state.url + `/forumDel/comment?fcId=${fcId}`).then((result) => {
          _this.tips = '评论删除成功'
          _this.show()
          //重新渲染数据用
          _this.ajax()
        })


        // $.ajax({
        //   url: this.$store.state.url + "/forumDel/comment?fcId=" + fcId,
        //   type: "get",
        //   success: function (result) {
        //
        //     _this.tips = '评论删除成功'
        //     _this.show()
        //     //重新渲染数据用
        //     _this.ajax()
        //     console.log(_this.value1)
        //   }
        // })
      },
      //删除回复
      delrep(frId) {
        console.log(frId)
        let _this = this
        axios.get(this.$store.state.url + `/forumDel/reply?frId=${frId}`).then((result) => {
          _this.tips = '回复删除成功'
          _this.show()
          //重新渲染数据用
          _this.ajax()
        })
      },
      //管理员添加推荐
      addRec(faId) {
        let _this = this
        let id={faId:faId}
        $.ajax({
          url: this.$store.state.url + "/forumAdd/Recommend",
          type: "post",
          data: id,
          success: function (result) {
            _this.rec = 1
            _this.tips = '已推荐'
            _this.show()
console.log(faId)
          }
        })
      },
      //管理员取消推荐
      delRec(faId) {
        let _this = this
        axios.get(this.$store.state.url + `/forumDel/ess?faId=${faId}`).then((result) => {
          _this.rec = 0
          _this.tips = '已取消推荐'
          _this.show()
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

      require() {
        this.rec=0
        let faId = window.localStorage.faId;
        let get = this
        get.value = []
        get.value1 = [],
        get.comhead = [],
          axios.get(get.$store.state.url + `/forumSee/all?faId=${faId}`).then((result) => {

            get.value = result.data.data;
            let img =  get.value.art[0].faImg.split(',')
            if(img.length>1){
              img.pop()
            }

           this.img=img

            this.addlike = true
            this.dellike = false
            if (this.UserId) {
              //查看用户是否点赞
              let faId = this.value.art[0].faId
              get.userId = this.UserId.replace(/\"/g, "")
              axios.get(this.$store.state.url + `/forumSee/selike?faId=${faId}&&userId=${get.userId}`).then((result) => {
                if (result.data.data == 1) {
                  this.addlike = false
                  this.dellike = true
                }
              });
              //判断是不是管理员
              if (get.userId == 33) {
                get.admin = true
              }
              //查看是否是精品推荐
              // console.log('看看id咋回事'+faId)
              axios.get(this.$store.state.url + `/forumSee/seeEss?faId=${faId}`).then((result) => {
                // console.log(result.data.data )
                if (result.data.data == 1) {
                  // console.log('是0不中')

                  this.rec = 1;
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
    },
    //监听路由
    watch: {
      '$route': 'require'
    },

    mounted() {
      this.require()
    }
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
    z-index:100;
  }

  #con {
    /*background: url("../../assets/forum/7.jpg");*/
    background: #f5f5f5;
    width: 100%;
    height: 100%;
    margin-top: -110px
  }

  #top {
    width: 1366px;
    height: 1000px;
    margin-top: -110px;
    margin-left: -60px;
  }

  #content {
    /*box-shadow: -2px 2px 10px 2px #bcbcbc;*/
    /*background: #f5f5f5;*/
    width: 1240px;
    /*width:100%;*/
    /*height: 100%;*/
    margin: auto;
    margin-top: 100px;
    position: relative;
    padding-bottom: 300px;
    padding-top: 80px;
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

    word-wrap: break-word;
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

    word-wrap: break-word;
  }

  .center > img {
    margin: auto;
    max-width: 754px;

    word-wrap: break-word;
  }

  .val {
    border-bottom: 1px dotted #ddd;
    padding-bottom: 60px;
    margin-bottom: 20px;
  }

  .com {
    padding: 60px 0;
  }

  .right {
    position: absolute;
    top: 104px;
    /*top: 444px;*/
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
    height: 35px;
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

    word-wrap: break-word;
  }

  .name1 {
    font-size: 15px;
    /*color: #285f8f;*/
    color: #0a498f;
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

    word-wrap: break-word;
  }

  .com1 {
    margin-bottom: 0px;
    margin-top: 20px;

    word-wrap: break-word;
    /*border-bottom: 1px dotted #ccc;*/
  }

  .com11 {
    margin-top: -10px;
    margin-bottom: 5px;

    word-wrap: break-word;
  }

  .rr {
    text-decoration: none;
    margin-right: 15px;
    color: #888;
    font-size: 14px;
    cursor: pointer;
  }

  .border1 {
    border-bottom: 1px solid #ccc;
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

    word-wrap: break-word;
  }

  .cominp2 {
    min-height: 35px;
    width: 600px;

    word-wrap: break-word;
  }

  .rbtn {
    /*width: 60px;*/
    height: 35px;
    font-size: 14px;
    margin-top: -0px;
  }

  .glyphicon-arrow-up {
    cursor: pointer;
  }
  .time{
    font-size:14px;
  }
</style>

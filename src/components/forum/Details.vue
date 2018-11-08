<template>
  <div id="con">
    <div class="top"></div>
    <div id="content">

      <div class="left">
        <div class="a">
          <!--详细内容     -->
          <div>&nbsp &nbsp<h2>{{value.art[0].faTitle}}&nbsp
            <span v-if="rec===1" title="推荐标识" class="glyphicon glyphicon-star"></span></h2></div>
          <div class="val">

            <div class="headpic">
              <!--<img class='headimg' :src='url+value.pic[0].headPic' alt="">-->
              <span class='headimg'><img class='headimg' :src='url+value.pic[0].headPic' alt=""></span>
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


    </span>
            </div>

            <!--帖子的内容-->

            <div class="img">

              <p>{{value.art[0].faText}}</p>
              <div class="center" v-for="Img in img">
                <img :src='url+Img' alt=""><br><br>
                <video v-if="(Img.substring(Img.indexOf('.')+1, Img.length))==mp4"
                       :src='url+Img'
                       controls="controls"></video>


              </div>

            </div>
          </div>

          <!--添加评论-->
          <div id="dd0" class="test_box cominp0" @click="com0"
               contenteditable="true"
               v-html="myHtmlcode"
               @input="onDivInput($event)">
            <br/>
          </div>


          <button type="button" @click="addCom()" class="rbtn1 btn btn-primary btn-sm active">发表</button>
          <div class="input glyphicon glyphicon-picture">
            <span class="btn btn-default fileinput-button">
                  <input type="file" name="avatar"
                         @change="changeImage($event)"
                         accept="image/gif,image/jpeg,image/jpg,image/png"
                         ref="avatarInput"><br/>
            </span>
            <span id="p"></span>


          </div>
          <!--</div>-->
        </div>
        <h4>评论&nbsp({{value.sum[0][0].sum_count-1}})</h4>
        <!--评论区域-->
        <div v-if="value1.length>0" class="com">
          <ul>
            <li class="hhh" v-for="(com,index) in value1">
              <div class="border1">
                <div class="head1">
                  <span class="img1"><img :src='url+value.comhead[index][0].headPic' alt="" class="img1"></span>
                  <div class="headRight">
                    <p class="name1">{{com.userName}}</p>
                    <p class="time">{{com.time.slice(0,16).replace('T',' ')}}</p>
                  </div>
                </div>
                <div class="val1">
                  <div class="but">
                    <p class="comP">{{com.faText}}</p>
                    <img :src='url+com.comImg' alt="" class="comimg">

                    <div class="com11" :key="index">
                      <span @click.prevent="aaaa(index)" class="rr">回复</span>
                      <!--删除评论-->
                      <span v-if="admin ||com.userId==userId ">
                       <el-popover
                         placement="top"
                         width="160"
                       >

                      <p>确定删除吗？</p>
                      <div style="text-align: right; margin: 0">
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
                        <span class="img1"> <img :src='url+reply.headPic' alt="" class="img1"></span>
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
          <!--<br>-->
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
    <div class="foot">
      <foot-black></foot-black>
    </div>

  </div>
</template>

<script>
  import Ranking from './Ranking'
  import axios from 'axios'
  import Com_b from './Com_b'
  import {mapGetters} from 'vuex';
  import footBlack from '../../components/footBlack.vue'

  export default {
    name: "Details",
    components: {
      'ranking': Ranking,
      'com_b': Com_b,
      'foot-black': footBlack
    },
    computed: mapGetters([
      'UserId',
      'UserName',
    ]),
    data() {
      return {
        visible2: false,
        mp4: 'mp4',
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

        upath: [0],
      }
    },

    methods: {

      //选中文件后，将文件保存到实例的变量中
      changeImage(e) {
        // console.log(e.target.files)
        this.upath = e.target.files;
        document.getElementById('p').innerText = this.upath[0].name
      },
      //重新渲染数据
      ajax() {
        let get = this;
        return setTimeout(function () {
          //重新渲染数据用

          // console.log( get.w+'chang')
          //
          // console.log( get.value.comment.length+'value')
          // console.log( get.cou+'页数')
          // console.log( get.page+'当前页数')
          // console.log( get.value1.length+'value1')
          let faId = window.localStorage.faId;
          get.value.comment = []
          get.comhead = []
          axios.get(get.$store.state.url + `/forumSee/all/?faId=${faId}`).then((result) => {
            get.value = result.data.data;

            get.aaa = []
            get.bbb = []


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

            if (get.value.comment) {
              console.log(get.value.comment.length+'看看现在几个')
              //点开完评论，添加删除完还是点开完
              if(get.value.comment.length <6&& get.w!==6){
                console.log('(get.w===get.value1.length||get.value.comment.length <6)')
                get.value1 = []//先清空
                get.value1 = get.value.comment
              }
              //加载更多状态 添加删除完还是加载更多状态 的w
              // else if (get.w >= 6) {
              else{
                console.log('get.w >= 6')

                // if(get.w<=get.value.comment.length){
                  get.value1 = []//先清空
                  for (let i = 0; i < get.w; i++) {
                    get.value1.push(get.value.comment[i])
                  }
                // }

              }

            }

          })
        }, 300)

      },
      //加载更多
      next() {
        // console.log(this.cou);
        // console.log(this.page);
        this.q = this.q + 6
        if (this.page < this.cou - 1) {
          this.w = this.w + 6
          this.page++  //记录当前页
          for (let i = this.q; i < this.w; i++) {
            this.value1.push(this.value.comment[i])
          }

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
        this.page = 1 //记录当前页
        this.q = 0
        this.w = 6
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

      //添加图片
      addImg() {
        let _this = this;
        let dd = {
          faId: this.value.art[0].faId,
          faText: this.myHtmlCode,
          userId: this.UserId.replace(/\"/g, ""),
          userName: this.UserName.replace(/\"/g, ""),
        }
        document.getElementById('dd0').innerText = ''
        var zipFormData = new FormData();
        //依次添加多个文件

        zipFormData.append('filename', this.upath[0]);
        this.upath = [0]
        //添加其他的表单元素
        zipFormData.append('faId', dd.faId)
        zipFormData.append('faText', dd.faText)
        zipFormData.append('userId', dd.userId)
        zipFormData.append('userName', dd.userName)
        let config = {headers: {'Content-Type': 'multipart/form-data'}};
        this.$axios.post(this.$store.state.url + '/forumAdd/comment', zipFormData, config)
          .then(function (response) {
            _this.$forceUpdate()

          }).catch((err) => {
          alert(err)
        });
      },

      //添加评论
      addCom() {
        if(this.w===this.value.comment.length){
          // console.log(this.w+'++')
          this.w++
        }
        if (!this.UserId) {
          this.tips = '先去登录吧'
          this.show()
        }
        else {
          if (this.myHtmlCode.length >= 2 && this.myHtmlCode.length <= 250) {

            this.addImg()
            document.getElementById('dd0').innerText = ''

            this.$forceUpdate()
            document.getElementById('p').innerText = ''
            this.ajax()
            this.tips = '评论成功'
            this.show()
          }
          else if (document.getElementById('dd0').innerText.length > 250) {
            this.tips = '最多输入250字'
            this.show()
          }
          else {
            this.tips = '最少两个字哦'
            this.show()
          }
        }

      },
      //添加回复
      addReply(index, key) {

        if (!this.UserId) {
          this.tips = '先去登录吧'
          this.show()
        } else {
          if (this.myHtmlCode1.length >= 2 && this.myHtmlCode1.length <= 250) {
            this.bbb[this.y[0]][this.y[1]] = false
            this.aaa[this.x] = false
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
                this.$forceUpdate()

              }
            })
          }
          else if (this.myHtmlCode1.length > 250) {
            this.tips = '最多输入250字'
            this.show()
          }
          else {
            this.tips = '最少两个字哦'
            this.show()
          }
        }
        this.$forceUpdate()
      },
      //评论回复表层点击弹框
      aaaa(index) {
        document.getElementById('dd0').innerText = ''
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

      //回复
      bb(keys, index) {
        document.getElementById('dd0').innerText = ''

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
//点击评论框其他框框关闭
      com0() {

        this.aaa[this.x] = false
        this.bbb[this.y[0]][this.y[1]] = false
        this.$forceUpdate()

      },
      //删除帖子
      delart(faId) {
        let _this = this
        axios.get(this.$store.state.url + `/forumDel/art/?faId=${faId}`).then((result) => {
          _this.tips = '删除成功'
          _this.show()
          history.back(-1)
        })
      },
      //删除评论
      delcom(fcId) {
//收起
// console.log(this.w+'www')
// console.log(this.value.comment.length+'000')
        if(this.w===this.value.comment.length){
          // console.log(this.w+'==')
          this.w--
        }

        let _this = this
        axios.get(this.$store.state.url + `/forumDel/comment?fcId=${fcId}`).then((result) => {
          _this.tips = '评论删除成功'
          _this.show()
          //重新渲染数据用
          _this.ajax()
        })


      },
      //删除回复
      delrep(frId) {
        // console.log(frId)
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
        let id = {faId: faId}
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
        }, 2000)
      },

      require() {
        this.rec = 0
        let faId = window.localStorage.faId;
        let get = this
        axios.get(get.$store.state.url + `/forumSee/all?faId=${faId}`).then((result) => {

          get.value = result.data.data;
          console.log(get.value.art[0])
          if(!get.value.art[0]){
            this.$router.push({path:'/forum'});
          }else{
            let img = get.value.art[0].faImg.split(',')
            if (img.length > 1) {
              img.pop()
            }
            this.img = img
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
            get.value1 = []
            get.comhead = []
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
          }

        })
        document.getElementById('dd0').innerText = ''
      },
    },
    //监听路由
    watch: {
      '$route': 'require'
    },

    created() {
      this.require()

    }
  }
</script>

<style scoped>
  #p {

    margin-left: -60px;
    margin-top: -20px;
    font-size: 14px;
  }

  video {
    max-width: 700px;
    max-height: 450px;
  }

  .input {
    margin-top: -5px;
    margin-left: 2px;
    font-size: 25px;
    color: #8e8e8e;
  }

  .fileinput-button {
    position: relative;
    display: inline-block;
    overflow: hidden;
    left: -30px;
    margin-bottom: 10px;
    margin-top: -4px;
    width: 30px;
    padding-right: 25px;
    opacity: 0;
  }

  .glyphicon-picture {
    /*font-size:30px;*/
  }

  .fileinput-button input {
    position: absolute;
    right: 0px;
    top: 0px;
    opacity: 0;
    -ms-filter: 'alpha(opacity=0)';
    font-size: 200px;
  }

  .glyphicon-star {
    color: #f6d576;
  }

  .glyphicon-heart {
    color: #f60000;
  }

  .comP {
    margin-bottom: -10px;
  }

  .comimg {
    max-width: 500px;
    margin-bottom: 15px;
    margin-top: 15px;
  }

  h4 {
    padding-bottom: 7px;
    border-bottom: 1px solid #bebebe;
  }

  span {
    display: inline-block;
  }

  .blue {
    background: #285f8f;
    border: none;
    width: 723px;
  }

  input {
    height: 30px;
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
    z-index: 100;
  }

  #con {

    background: #f5f5f5;
    width: 100%;
    height: 100%;
    margin-top: -240px;

    min-width: 1280px;
  }

  .top {
    background: white;
    height: 90px;
    margin-top: 160px;
    margin-bottom: -300px;
    box-shadow: -2px 2px 10px 2px #f0f0f0;
  }

  #content {
    /*box-shadow: -2px 2px 10px 2px #bcbcbc;*/
    width: 1240px;
    /*width:100%;*/
    /*height: 100%;*/
    margin: auto;
    margin-top: 100px;
    position: relative;
    /*padding-bottom: 300px;*/
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
    margin: 64px 0 50px 25px;
    padding-left: 38px;
    padding-right: 40px;
    padding-bottom: 50px;
    word-wrap: break-word;
    box-shadow: -2px 2px 10px 2px #f3f3f3;
    background: rgba(255, 255, 255, 0.95);
  }

  .headpic {
    width: 720px;
    height: 90px;
    line-height: 70px;
  }

  .name {
    font-size: 16px;
    font-weight: 700;
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
    background: url("../../assets/forum/6.jpg");
  }

  .img {
    width: 720px;
    display: block;
    font-size: 18px;

  }

  .center {
    width: 720px;
    text-align: center;

    word-wrap: break-word;
  }

  .center > img {
    margin: auto;
    max-width: 725px;
    max-height: 600px;
    word-wrap: break-word;
  }

  .val {
    border-bottom: 1px dotted #ddd;
    /*padding-bottom: 60px;*/
    margin-bottom: 20px;
    padding-bottom: 20px;

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
    font-size: 16px;
    /*color: #285f8f;*/
    color: #494949;
    font-weight: 700;
  }

  .img1 {
    width: 46px;
    height: 46px;
    border-radius: 23px;
    background: url("../../assets/forum/6.jpg");
    vertical-align: unset;
    position: relative;
    top: -1px;
    margin-right: 10px;
  }

  .but {
    margin-left: 10px;
  }

  .val1 {
    margin-left: 50px;
    font-size: 15px;
    word-wrap: break-word;
  }

  .com1 .but {
    margin-left: 60px;
  }

  .com1 {
    margin-bottom: 0px;
    margin-top: 20px;

    word-wrap: break-word;
    border-left: 4px solid #ebebeb;
    padding-left: 10px;
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
    /*border-left: 3px solid #e0e0e0;*/
    padding-bottom: 20px;
    margin-bottom: 20px;
    margin-top: -35px;
  }

  .cominp0 {
    width: 665px;
    min-height: 35px;
    margin-top: 10px;
  }

  .cominp1 {
    min-height: 35px;
    width: 605px;

    word-wrap: break-word;
  }

  .cominp2 {
    min-height: 35px;
    width: 530px;

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

  .time {
    font-size: 14px;
    margin-top: 15px;
  }

  .foot {
    margin-top: 30px;
  }
</style>

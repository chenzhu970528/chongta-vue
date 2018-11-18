<template>
  <div> <!--发帖-->
    <div class="con">
      <div class="leftnav">
        <span class="one" @click="share()">交流社区</span>
        <span @click="diary()">养宠日记</span>
      </div>
      <p class="p">发表{{aa}}</p>
      <br>
      <br>
      <form>
        <div class="form-group">
          <input class="form-control" v-model="title" placeholder="请输入标题，最多15字">
        </div>
        <div class="form-group">
          <br>
          <textarea class="form-control" v-model="text" placeholder="分享你的趣事吧/图片视频最多上传六个"></textarea>
        </div>
        <div class="form-group">

          <div class="col-sm-6">

            <div class="input">
              <span class="glyphicon glyphicon-picture"></span>
              <span class="glyphicon  glyphicon-film"></span>
              <span class="btn btn-default fileinput-button">
            <input class="left" type="file" name="avatar"
                   @change="changeImage($event)"
                   accept="image/gif,image/jpeg,image/jpg,image/png,.mp4"
                   ref="avatarInput"
                   multiple>
                上传
              </span>
              <span id="p"></span><span v-if="up" class="up">正在上传..</span>

            </div>
            <span class="size">全部文件不能大于50M/{{size}}M</span>
            <!--<div id="progress" v-if="upath.length>0" :style="">-->
            <!--<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"-->
            <!--:style="{width:loading}">-->
            <!--</div>-->
            <!--</div>-->
          </div>
          <div class="col-sm-5">
            <img class="img" src="../../assets/forum/23.gif" alt="">
          </div>

        </div>
        <input class="btn btn-default" type="button" @click="addForum" value="发表">
      </form>
    </div>
    <p v-if="vv" class="cc">{{tips}}</p>

  </div>
</template>
<script>
  import store from './store.js'
  import {mapGetters} from 'vuex';

  export default {
    name: "Com_b",
    computed: mapGetters([
      'UserId',
      'UserName',
    ]),
    data() {
      return {
        loading: 0,
        upath: '',  //保存选中的文件
        aa: '交流分享',
        title: '',
        text: '',
        type: 'b',
        tips: '发表成功',
        vv: false,
        size: 0,
        // color:'background:red'
        up: false
      }
    },
    methods: {
      share() {
        this.aa = '交流分享'
        this.type = 'b'
      },
      diary() {
        this.aa = '养宠日记'
        this.type = 'a'
      },
      //选中文件后，将文件保存到实例的变量中
      changeImage(e) {
        this.upath = e.target.files;
        let size = 0
        for (let i = 0; i < this.upath.length; i++) {
          size = size + this.upath[i].size
        }
        document.getElementById('p').innerText = this.upath.length + '个文件'
        this.$nextTick(() => {
          this.color = 'background:red'
          console.log('正在上传')

        })

        let s = size / (1024 * 1024)
        this.size = s.toFixed(2)

      },
      addImg() {
        let _this = this;
        let size = 0
        let aa = {
          faTitle: this.title,
          faText: this.text,
          userId: this.UserId.replace(/\"/g, ""),
          userName: this.UserName.replace(/\"/g, ""),
          faType: this.type,
        }
        let complete
        this.title = '';
        this.text = '';
        // console.log(this.upath);
        var zipFormData = new FormData();
        //依次添加多个文件
        if (this.upath.length < 7) {
          for (var i = 0; i < this.upath.length; i++) {
            zipFormData.append('filename', this.upath[i]);
          }
          //添加其他的表单元素
          zipFormData.append('faTitle', aa.faTitle)
          zipFormData.append('faText', aa.faText)
          zipFormData.append('userId', aa.userId)
          zipFormData.append('userName', aa.userName)
          zipFormData.append('faType', aa.faType)
          // let config = {headers: {'Content-Type': 'multipart/form-data'}};
          let config = {
            onUploadProgress: progressEvent => {
              complete = (progressEvent.loaded / progressEvent.total * 100 | 0)
              // console.log(complete)//进度值
              _this.loading = complete
              if (complete == 100) {
                _this.$nextTick(() => {
                  this.color = 'background:green'

                })
              }
            },
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
          this.$axios.post(this.$store.state.url + '/forumAdd/art', zipFormData, config)
            .then(function (response) {

              if (complete == 100) {
                _this.tips = '发表成功'
                _this.c()
                _this.loading = 0
                _this.upath = ''
                store.commit('add')
              }
            }).catch((err) => {
            alert(err)
          })

        }
        else {
          _this.tips = '最多上传六个文件'
          this.c()

        }
      }
      ,
      addForum() {
        this.up = true

        let _this = this;
        if (!_this.UserId) {
          _this.tips = '先去登录吧'
          _this.c()
        }
        else if (_this.text == '') {
          _this.tips = '内容不能为空哦'
          _this.c()
        }
        else if (_this.title == '') {
          _this.tips = '标题不能为空哦'
          _this.c()
        }
        else if (_this.text != '' && _this.title != '') {
          if (_this.title.length > 15) {
            _this.tips = '标题字数过多'
            _this.c()
          }
          else if (_this.text.length > 3000) {
            _this.tips = '内容过多'
            _this.c()
          }
          else if (this.upath.length < 1) {
            _this.tips = '最少上传一个文件'
            _this.c()
          }
          else if (this.size > 50) {
            _this.tips = '文件大小超出限制'
            _this.c()
          }
          else {
            _this.addImg()
            document.getElementById('p').innerText = ''

          }
        }
      },
      //提示
      c() {
        let _this = this
        _this.vv = true
        _this.up = false
        setTimeout(function () {
          _this.vv = false
        }, 1000)
      },

    }
  }
</script>

<style scoped>
  /*#progress {*/
  /*display: inline-block;*/
  /*height: 14px;*/
  /*width: 14px;*/
  /*border-radius: 7px;*/
  /*margin-bottom: 3px;*/
  /*}*/

  #p {
    margin-left: 0px;

  }

  #p, .up {
    font-size: 14px;
    color: #8e8e8e;
  }

  .fileinput-button {
    position: relative;
    display: inline-block;
    overflow: hidden;
    left: -365px;
    margin-bottom: 10px;
    margin-top: -4px;
    width: 60px;
    padding-right: 25px;
    opacity: 0;
  }

  .glyphicon-picture {
    margin-top: -10px;
    font-size: 25px;
    color: #8e8e8e;
    margin-left: -10px;
  }

  .glyphicon-film {
    font-size: 25px;
    margin-top: -10px;
    color: #8e8e8e;
  }

  .fileinput-button input {
    position: absolute;
    right: 0px;
    top: 0px;
    opacity: 0;
    -ms-filter: 'alpha(opacity=0)';
    font-size: 200px;
  }

  .img {
    height: 60px;
    float: right;
    margin-top: -10px;
  }

  .size {
    color: #7f7f7f;
    margin-left: -15px;
  }

  .leftnav {
    position: absolute;
    width: 150px;
    height: 400px;
    top: -6px;
    left: 25px;
    background-color: rgba(156, 173, 255, 0.2);
    text-align: center;

  }

  .leftnav span {
    display: block;
    color: #69819f;
    font-weight: bold;
    font-size: 16px;
    /*padding-top: 70px;*/
    /*border: 2px solid whitesmoke;*/
    cursor: pointer;
  }

  .one {
    margin-bottom: 90px;
  }

  .leftnav span:first-child {
    margin-top: 90%;
  }

  .p {
    margin-bottom: -30px;
    color: #68809e;
    /*font-weight: bolder;*/
    font-size: 15px;
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
    left: 50%;
    color: #fefefe;
    font-size: 18px;
    z-index: 100;
  }

  .left {
    margin-left: -15px;

  }

  .btn {
    float: right;
  }

  .con {
    width: 1000px;
    background: rgba(255, 255, 255, 0.99);
    padding: 50px;
    padding-top: 20px;
    border-radius: 10px;
    margin-left: -60px;
    margin-top: 45px;
  }

  textarea {
    resize: none;
    height: 200px;
  }
</style>

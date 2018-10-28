<template>
  <div> <!--发帖-->
    <div class="con">
      <!--#{{name}}-->
      <br>
      <br>
      <form>
        <div class="form-group">
          <input class="form-control" v-model="title" placeholder="请输入标题，最多15字">
        </div>
        <div class="form-group">
          <br>
          <textarea class="form-control" v-model="text" placeholder="分享你的趣事吧"></textarea>
        </div>
        <div class="form-group">
          <!--<label  class="col-sm-3 control-label">上传图片：</label>-->
          <div class="col-sm-6">
            <input class="left" type="file" name="avatar"
                   @change="changeImage($event)"
                   accept="image/gif,image/jpeg,image/jpg,image/png"
                   ref="avatarInput"
                   multiple><br/>
          </div>
        </div>
        <input class="btn btn-default" type="submit" @click="addForum" value="发表">
      </form>

    </div>
    <p v-if="vv" class="cc">发表成功</p>
    <p v-if="v" class="cc">标题字数超出</p>
    <p v-if="v2" class="cc">先去登录吧</p>
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
        upath:'',  //保存选中的文件
        name: store.state.name,
        title: '',
        text: '',
        type: 'a',
        vv: false,
        v: false,
        v2: false
      }
    },
    methods: {
      //选中文件后，将文件保存到实例的变量中
      changeImage(e) {
        console.log(e.target.files)
        this.upath = e.target.files;
      },
      addImg(){
        let _this = this;
        let aa = {
          faTitle: this.title,
          faText: this.text,
          userId: this.UserId.replace(/\"/g, ""),
          userName: this.UserName.replace(/\"/g, ""),
          faType: this.type,
        }
        this.title = '';
        this.text = '';
        console.log(this.upath);
        var zipFormData = new FormData();
        //依次添加多个文件
        for(var i = 0 ; i< this.upath.length ; i++){
          zipFormData.append('filename', this.upath[i]);
        }
        //添加其他的表单元素
        zipFormData.append('faTitle',aa.faTitle)
        zipFormData.append('faText',aa.faText)
        zipFormData.append('userId',aa.userId)
        zipFormData.append('userName',aa.userName)
        zipFormData.append('faType',aa.faType)
        let config = { headers: { 'Content-Type': 'multipart/form-data' } };
        this.$axios.post(this.$store.state.url+'/forumAdd/art', zipFormData,config)
          .then(function (response) {
            // console.log(response);
            // console.log(response.data);
            // console.log(response.bodyText);
            _this.cc()
          }).catch((err) => {
          alert(err)
        });

      },
      addForum() {
        let _this = this;

        if (!_this.UserId) {
          _this.c2()
        }

        else if (_this.text != '' && _this.title != '') {
          if (_this.title.length > 15) {
            _this.c()
          }
          else {
              _this.addImg()
          }
        }
      },

      //发表提示
      cc() {
        let _this = this
        _this.vv = true
        setTimeout(function () {
          _this.vv = false
        }, 3000)
      },
      //字数限制
      c() {
        let _this = this
        _this.v = true
        setTimeout(function () {
          _this.v = false
        }, 3000)
      },
      //登录提示
      c2() {
        let _this = this
        _this.v2 = true
        setTimeout(function () {
          _this.v2 = false
        }, 3000)
      },
    }
  }
</script>

<style scoped>
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

  .left{
  margin-left:-15px;

  }
.btn{
  float:right;
}
  .con {
    width: 900px;
    background:rgba(255, 255, 255, 0.6);
    padding: 50px;
    padding-top: 20px;
    border-radius: 10px;
  }

  textarea {
    resize: none;
    height: 200px;
  }
</style>

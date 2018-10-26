<template>
  <div> <!--发帖-->

    <div class="con">
      #{{name}}
      <br>
      <br>
      <form>
        <div class="form-group">
          <input class="form-control" v-model="title" placeholder="请输入标题，最多15字">
        </div>
        <div class="form-group">
          <br>
          <textarea class="form-control" v-model="text"></textarea>
        </div>
        <div class="form-group">
          <label>上传图片</label>
          <input type="file">
        </div>
        <input class="btn btn-default" type="submit" @click="addForum" value="发表">
      </form>

    </div>
    <p v-if="vv" class="cc">发表成功</p>
    <p v-if="v" class="cc">字数超出限制</p>
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
        name: store.state.name,
        title: '',
        text: '',
        type: store.state.nametype,
        vv: false,
        v: false,
        v2: false
      }
    },
    methods: {
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

            let aa = {
              faTitle: this.title,
              faText: this.text,
              userId: this.UserId.replace(/\"/g, ""),
              userName: this.UserName.replace(/\"/g, ""),
              faType: this.type,
            }
            this.title = '';
            this.text = '';

            $.ajax({
              url: this.$store.state.url+"/forumAdd/art",
              type: "post",
              data: aa,
              success: function (result) {
                console.log(result.data)
                _this.cc()
              }
            })
          }
        }
        else {

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

  .con {
    width: 768px;
    background: white;
    padding: 50px;
    padding-top: 20px;
  }

  textarea {
    resize: none;
    height: 200px;
  }
</style>

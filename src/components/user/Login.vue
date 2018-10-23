<template>
    <div>
        <el-button class="fbut" type="text" @click="dialogVisible = true">登录</el-button>
        <el-dialog title="请登录" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <div class="demo-input-suffix">
                手机号：
                <el-input
                        placeholder="请输入手机号！"
                        prefix-icon="el-icon-search"
                        v-model="userForm.userPhone">
                </el-input>
            </div>
            <div class="demo-input-suffix" style="margin-top: 20px">
                密码：
                <el-input
                        type="password"
                        placeholder="请输入密码！"
                        prefix-icon="el-icon-search"
                        v-model="userForm.userPwd">
                </el-input>
            </div>
          <!--<div class="drag" ref="dragDiv">-->
            <!--<div class="drag_bg"></div>-->
            <!--<div class="drag_text">{{confirmWords}}</div>-->
            <!--<div ref="moveDiv" @mousedown="mousedownFn($event)" :class="{'handler_ok_bg':confirmSuccess}" class="handler handler_bg" style="position: absolute;top: 0px;left: 0px;"></div>-->
          <!--</div>-->
          <div>
            <el-footer style="margin-top: 20px">
            <el-button type="primary" @click="login">登录</el-button>
            </el-footer>
          </div>

        </el-dialog>

    </div>
</template>
<script>
  export default {
    name: "Login",
    data() {
      return {
        userForm: {
          userPhone: '',
          userPwd: '',
        },
        dialogVisible: false
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认退出登录？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      login() {
        let _this = this
        $.ajax({
          url: "http://localhost:3000/user/login",
          type: "post",
          data: _this.userForm,
          success: function (result) {

            if (result.data == 1) {
              alert("手机号不能为空");
            } else if (result.data == 2) {
              alert("用户名或密码错误");
            } else if (result.data == 3) {
              alert("服务器错误");
            } else {
              alert("登录成功");
              console.log(result.data)
              if (localStorage) {
                localStorage.setItem("userId", JSON.stringify(result.data.userId));
                localStorage.setItem("userName", JSON.stringify(result.data.userName));
              }
              location.href = "http://localhost:8080";
            }
          }
        })
      }
    },
  }
</script>

<style scoped>




</style>

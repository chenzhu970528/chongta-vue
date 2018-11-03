<template>
    <div>
      <el-button type="text" class="fbut" @click="centerDialogVisible = true">登录</el-button>
      <el-dialog
        class="login"
        :modal-append-to-body='false'
        title="请登录"
        :visible.sync="centerDialogVisible"
        width="580px"
        height="650px"
        center>
        <div style="position: relative">
          <div class="bglogin">
            <h3 >请登录</h3>
            <div class="demo-input-suffix">
              手机号：
              <el-input
                placeholder="请输入手机号！"
                prefix-icon="el-icon-mobile-phone"
                v-model="userForm.userPhone">
              </el-input>
            </div>
            <div class="demo-input-suffix" style="margin-top: 20px">
              密码：
              <el-input
                type="password"
                placeholder="请输入密码！"
                prefix-icon="el-icon-edit"
                v-model="userForm.userPwd">
              </el-input>
            </div>
            <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="login">登录</el-button>
  </span>
          </div>
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
          hide:false,
          tips:'发表成功'
        },
        centerDialogVisible: false
      }
    },
    methods: {
      login() {
        let _this = this
        $.ajax({
          url: this.$store.state.url+"/user/login",
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

              if (localStorage) {
                localStorage.setItem("userId", JSON.stringify(result.data.userId));
                localStorage.setItem("userName", JSON.stringify(result.data.userName));
                localStorage.setItem("headPic", JSON.stringify(result.data.headPic));
                localStorage.setItem("userPhone", JSON.stringify(result.data.userPhone));
              }
              location.reload();
            }
          }
        })
      }
    },
  }
</script>

<style scoped>
  .demo-input-suffix{
    width: 400px;
    margin: 0 auto;
  }
  .dialog-footer{
    display: inline-block;
    margin-left: 100px;
    margin-top: 30px;
  }
  .bglogin{
    border-radius: 15px;
    color: cornflowerblue;
    padding-top: 250px;
    width: 580px;
    height: 600px;
    background: url("../../assets/user/bgLogin.png") no-repeat;
    background-color: #fff;
    background-size: 100% 100%;
    position: absolute;
    top: -90px;
    left: -25px;
  }
  .el-button--primary {
    color: #fff;
    background-color: #064990;
    border-color:  #064990;
  }
  .bglogin h3{
    width: 200px;
    margin-left: 255px
  }
  .fbut{
    height: 70px;
    font-size: 18px;
    margin-left: 10px;
    color: #337ab7;
  }
  .fbut :hover{
    color: #23527c;
  }
  .fbut{
    height: 70px;
    font-size: 18px;
    margin-left: 10px;
    color: #337ab7;
  }
  .fbut :hover{
    color: #23527c;
  }
  .v-modal{
   z-index: 0;
  }

</style>

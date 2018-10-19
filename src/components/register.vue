<template>
  <div class="container">
    <el-alert
      title=""
      type="info" style="font-size: 20px;float: left">
      欢迎来到宠它网，已有账号，去
      <user-login></user-login>
    </el-alert>
    <div class="bg">
    <form class="form-horizontal" style="margin-top: 200px;margin-left: 10px">
      <div class="form-group first">
        <label for="inputkind" class="col-sm-3 control-label col-sm-offset-2">用户名</label>
        <div class="col-sm-4">
          <input type="text" class="form-control" id="inputkind" placeholder="请输入用户名">
        </div>
      </div>
      <div class="form-group">
        <label for="inputkind" class="col-sm-3 control-label col-sm-offset-2">密码</label>
        <div class="col-sm-4">
          <input type="text" class="form-control"  placeholder="请输入密码">
        </div>
      </div>
      <div class="form-group">
        <label for="inputkind" class="col-sm-3 control-label col-sm-offset-2">确认密码</label>
        <div class="col-sm-4">
          <input type="text" class="form-control"  placeholder="再次输入密码">
        </div>
      </div>
      <div class="form-group">
        <label for="inputkind" class="col-sm-3 control-label col-sm-offset-2">手机号</label>
        <div class="col-sm-4">
          <input type="text" class="form-control"  placeholder="填写正确手机号">
        </div>
      </div>
      <div class="form-group">
        <label for="inputkind" class="col-sm-3 control-label col-sm-offset-2">短信验证码</label>
        <div class="col-sm-4">
          <input type="text" class="form-control" placeholder="短信请输入验证码">
        </div>
      </div>
      <div class="form-group">
        <label for="inputkind" class="col-sm-3 control-label col-sm-offset-2">电子邮箱</label>
        <div class="col-sm-4">
          <input type="text" class="form-control"  placeholder="请输入有效邮箱">
        </div>
      </div>
      <div class="form-group">
        <label for="inputkind" class="col-sm-3 control-label col-sm-offset-2"></label>
        <div class="col-sm-4">
          <input type="checkbox"> 我已阅读并同意 <a href="">《宠它网注册协议》</a>
        </div>
      </div>
      <div class="form-group">
        <label for="inputkind" class="col-sm-3 control-label col-sm-offset-2"></label>
        <div class="col-sm-4">
          <el-button type="primary" style="font-size: 20px"><router-link tag="li" active-class="active" role="presentation" to="/finish" exact><a>立即注册 完成绑定</a></router-link></el-button>
        </div>
      </div>
    </form>
    </div>
  </div>
</template>

<script>
  import Login from '../components/user/Login.vue'
    export default {
      name: "register",
      components: {
        'user-login': Login,
      }
    }
</script>

<style scoped>
.container{
  background: url('../assets/homeless/bg1.jpg');
  width: 100%;
  position: absolute;
  left: 0px;
  top: 70px;
}
.bg{
  height: 500px;
  width: 800px;
  border-radius: 10px;
  background-color: rgba(255,255,255,0.2);
  margin-left: 350px;
}
form{
  margin-top: 60px;
}
h3{
  margin-left: 10px;
}
.form-group{
  padding-top: 15px;
}
</style>

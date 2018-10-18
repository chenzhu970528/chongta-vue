<template>
  <div class="container">
    <div class="bg">
      <form class="form-horizontal" style="margin-top: 200px;margin-left: 10px">
        <div class="form-group first">
          <label for="inputkind" class="col-sm-3 control-label col-sm-offset-2"></label>
          <div class="col-sm-4">
            <input type="text" class="form-control" id="inputkind" placeholder="用户名/手机/邮箱">
          </div>
        </div>
        <div class="form-group">
          <label for="inputkind" class="col-sm-3 control-label col-sm-offset-2"></label>
          <div class="col-sm-4">
            <input type="text" class="form-control" id="" placeholder="密码">
          </div>
        </div>

        <div class="form-group">
          <label for="inputkind" class="col-sm-3 control-label col-sm-offset-2"></label>
          <div class="col-sm-4">
            <el-button type="primary" style="font-size: 20px">登录</el-button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import login from './login'
  export default {
    name: "register",
    components: {
      'login': login
    }
  }
</script>

<style scoped>
  .container{
    background: url('../assets/homeless/login-body.jpg');
    height: 100%;width: 100%;
    position: absolute;
    left: 0px;
    top: 72px;
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
  /*.first{*/
  /*!*margin-top: 10px;*!*/
  /*}*/
</style>

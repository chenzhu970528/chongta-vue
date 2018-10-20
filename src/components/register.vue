<template>
  <div class="container">
    <el-alert
      title=""
      type="info" style="font-size: 20px;float: left">
      欢迎来到宠它网，已有账号，去
      <div style="display: inline-block">
        <user-login></user-login>
      </div>
    </el-alert>
    <div class="bg">
    <form class="form-horizontal" style="margin-top: 200px;margin-left: 10px">
      <div class="form-group first">
        <label  class="col-sm-2 control-label col-sm-offset-2">用户名</label>
        <div class="col-sm-4">
          <input @change="checkname" type="text" class="form-control" v-model="userName"  id="inputuser" placeholder="请输入用户名（1-9位中英文数字）">
        </div>
        <div class="col-sm-2 text-danger" v-if="nameflag">{{msgname}}</div>
      </div>
      <div class="form-group">
        <label  class="col-sm-2 control-label col-sm-offset-2">密码</label>
        <div class="col-sm-4">
          <input @change="checkPwd" type="password" v-model="userPwd1" class="form-control"  placeholder="请输入密码(6-10位字母和数字)">
        </div>
        <div class="col-sm-2 text-danger" v-if="pwdflag1">{{msgPassword1}}</div>
      </div>
      <div class="form-group">
        <label  class="col-sm-2 control-label col-sm-offset-2">确认密码</label>
        <div class="col-sm-4">
          <input @change="checkPwds" type="password" v-model="userPwd2" class="form-control"  placeholder="再次输入密码">
        </div>
        <div class="col-sm-2 text-danger" v-if="pwdflag">{{msgPassword}}</div>
      </div>

      <div class="form-group">
        <label  class="col-sm-2 control-label col-sm-offset-2">手机号</label>
        <div class="col-sm-4">
          <input @change="checkphone" type="text" v-model="userPhone" class="form-control"  placeholder="填写正确手机号">
        </div>
        <div class="col-sm-2 text-danger" v-if="phoneflag">{{msgphone}}</div>
      </div>
      <!--<div class="form-group">-->
        <!--<label class="col-sm-2 control-label col-sm-offset-2">短信验证码</label>-->
        <!--<div class="col-sm-4">-->
          <!--<input type="text" class="form-control" placeholder="短信请输入验证码">-->
        <!--</div>-->
      <!--</div>-->
      <div class="form-group">
        <label  class="col-sm-2 control-label col-sm-offset-2">微信号:</label>
        <div class="col-sm-4">
          <input type="text" v-model="wechat" class="form-control"  placeholder="请输入有效微信号">
        </div>
      </div>
      <div class="form-group">
        <label  class="col-sm-2 control-label col-sm-offset-2">电子邮箱</label>
        <div class="col-sm-4">
          <input type="text" @change="checkemail" v-model="userEmail" class="form-control"  placeholder="请输入有效邮箱">
        </div>
        <div class="col-sm-2 text-danger" v-if="mailflag">{{msgmail}}</div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label col-sm-offset-2"></label>
        <div class="col-sm-4">
          <input type="checkbox"> 我已阅读并同意 <a href="">《宠它网注册协议》</a>
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label col-sm-offset-2"></label>
        <div class="col-sm-4">
          <el-button @click="register" type="primary" style="font-size: 20px"><a>立即注册 完成绑定</a></el-button>
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
      },
      data(){
        return{
          userName:'',
          userPhone:'',
          userPwd1:'',
          userPwd2:'',
          wechat:'',
          userEmail:'',

          namecheck:false,
          pwdcheck:false,
          phonecheck:false,
          mailcheck:false,
          msgname:'',
          nameflag:false,
          msgPassword1:'',
          pwdflag1:false,
          msgPassword:'',
          pwdflag:false,
          msgmail:'',
          mailflag:false,
          msgphone:'',
          phoneflag:false,
        }
      },
      methods:{
        checkPwd:function () {
          var regPwd=/^[a-zA-Z0-9]{6,10}$/;
          if(this.userPwd1==''){
            this.msgPassword1="请输入密码";
          }else if(!regPwd.test(this.userPwd1)){
            this.pwdflag1 =true
            this.msgPassword1="密码格式不正确";
          }else this.pwdflag1=false
        },
        checkPwds:function () {
          if(this. userPwd1!==this. userPwd2){
            this.pwdflag=true;
            this.msgPassword='与第一次不符，请重新输入！';
          }else {
            this.pwdflag=false;
            this.pwdcheck=true;
          }
        },
        checkemail:function(){
          var regEmail=/^[1-9a-zA-Z_]\w*@[a-zA-Z0-9]+(\.[a-zA-Z]{2,})+$/;
          if(this.userEmail==''){
            this.msgmail="请输入邮箱";
          }else if(!regEmail.test(this.userEmail)){
            this.mailflag =true
            this.msgmail="邮箱格式不正确";
          }else{
            this.mailflag=false;
            this.mailcheck=true;
          }
        },
        checkname:function(){
          var regName=/^[\u4e00-\u9fa5_a-zA-Z0-9_]{1,9}$/;
          if(this.userName==''){
            this.msgname="请输入用户名";
          }else if(!regName.test(this.userName)){
            this.nameflag =true
            this.msgname="用户名格式不正确";
          }else{
            this.nameflag=false;
            this.namecheck=true;
          }
        },
        checkphone:function(){
          var regPhone=/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
          if(this.userPhone==''){
            this.msgphone="请输入手机号";
          }else if(!regPhone.test(this.userPhone)){
            this.phoneflag =true
            this.msgphone="手机号格式不正确";
          }else {
            this.phoneflag=false
            this.phonecheck=true;
          }
        },
        register:function(){
          if(this.namecheck&&this.pwdcheck&&this.phonecheck&&this.mailcheck){
            // console.log('登录成功')
            let _this = this
            $.ajax({
              url: "http://localhost:3000/user/add",
              type: "post",
              data: {
                userName: _this.userName,
                userPwd:_this.userPwd2,
                userPhone:_this.userPhone,
                userEmail:_this.userEmail,
                wechat: _this.wechat,
              },
              success: function (result) {
                console.log(result.data)
                alert("注册成功")
                location.href = "http://localhost:8080";
              }
            })
          }else{
            alert('请完善个人信息')
          }
        }
      }
    }
</script>

<style scoped>
.container{
  background: url('../assets/homeless/bg1.jpg');
  width: 100%;
  background-size: 100% 100%;
  position: absolute;
  left: 0px;
  top: 70px;
}
.bg{
  height: 500px;
  width: 800px;
  border-radius: 10px;
  background-color: rgba(255,255,255,0.2);
  margin: 100px auto;
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
.text-danger{
  background: #fff;
  border-radius: 5px;
  border: 1px solid #a12c14;
}
</style>

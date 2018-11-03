<template>
  <div class="right" >
    <div class="route">您的当前位置：<span>账号管理</span><span>/</span><span>编辑个人资料</span></div>
    <div class="inright">
      <form action="" id="update"></form>
      <h3>基本信息</h3>
      <el-row class="first">
        <el-col :span="7" :push="2"><span >用户名</span></el-col>
        <el-col :span="6" :push="2" v-if="resetUserName"><span class="det">{{personal.userName}}</span></el-col>
        <el-col :span="6" :push="2" v-if="!resetUserName"class="iptext">
          <input type="text"  @change="checkname" placeholder="请输入新的用户名（2-10位中英文数字）" form="update" v-model="newName" >
        </el-col>
        <el-col :span="4" :push="4">
          <span  class="errmsg" v-if="nameflag">{{msgname}}</span>
          <el-button v-if="resetUserName" @click="resetUserName = false;namecheck = false" style="margin-top: 10px" text="primary">修改用户名</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7" :push="2"><span>微信</span></el-col>
        <el-col :span="12" :push="2" class="iptext"><input type="text" v-model="wechat" placeholder=" 请输入内容" form="update"></el-col>
      </el-row>
      <div class="linkage">
        <el-row>
          <el-col :span="7" :push="2"><span>联系地址</span></el-col>
          <el-col :span="6" :push="2">
            <el-select
              id="sheng"
              v-model="sheng"
              @change="choseProvince"
              placeholder="省级地区">
              <el-option
                v-for="item in province"
                :key="item.id"
                :label="item.value"
                :value="item.id">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="6" :push="2">
            <el-select
              id="shi"
              v-model="shi"
              @change="choseCity"
              placeholder="市级地区">
              <el-option
                v-for="item in shi1"
                :key="item.id"
                :label="item.value"
                :value="item.id">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" :push="9">
            <el-select
              id="qu"
              v-model="qu"
              @change="choseBlock"
              placeholder="区级地区">
              <el-option
                v-for="item in qu1"
                :key="item.id"
                :label="item.value"
                :value="item.id">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </div>
      <el-row>
        <el-col :span="12" :push="9" class="iptext"><input v-model="street" style="width: 100%" type="text" placeholder=" 请输入详细地址" form="update"></el-col>
      </el-row>
      <el-row>
        <el-col :span="7" :push="2"><span>性别</span></el-col>
        <el-col :span="12" :push="2" class="iptext">
        <el-radio v-model="usersex" label="0">男</el-radio>
        <el-radio v-model="usersex" label="1">女</el-radio>
        </el-col>
      </el-row>
      <h3 class="sech3">联系方式</h3>
      <el-row class="first">
        <el-col :span="7" :push="2"><span >邮箱</span></el-col>
        <el-col :span="6" :push="2" v-if="resetEmail"><span class="det">{{personal.userEmail}}</span></el-col>
        <el-col :span="6" :push="2" v-if="!resetEmail"class="iptext">
          <input type="text"  @change="checkemail" placeholder="请输入新邮箱" form="update" v-model="email" >
        </el-col>
        <el-col :span="4" :push="4">
          <span class="errormsg" v-if="flag">{{msgmail}}</span>
          <el-button v-if="resetEmail" @click="resetEmail = false;emailcheck = false" style="margin-top: 10px" text="primary">修改邮箱</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7" :push="2"><span>手机</span></el-col>
        <el-col :span="12" :push="2"><span class="det">{{personal.userPhone}}</span></el-col>
      </el-row>
      <el-row>
        <el-col :span="10" :push="8"><input @click="update" type="button" value="保存"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import  axios from 'axios'
    export default {
        name: "update",
      data() {
        return {

          // 省市级联选择器
          mapJson:'../static/json/map.json',
          province:'',
          sheng: '',
          shi: '',
          shi1: [],
          qu: '',
          qu1: [],
          city:'',
          block:'',
          street:'',

          msgmail:'',
          flag:false,
          msgname:'',
          nameflag:false,
          activeName: 'first',
          personal:[],
          resetUserName:true,
          resetEmail:true,
          emailcheck:true,
          namecheck:true,
          userId:this.$store.state.userId,
          newName:'',
          usersex:'0',
          address:'',
          email:'',
          wechat:''
        };
      },
      created(){
          this.getCityData()
        axios.get(this.$store.state.url+`/user/showUser/${this.userId}`).then((result) => {
          console.log(result.data.data[0]);
          this.personal = result.data.data[0];
        })
      },
      methods: {
        updateAjax(){
          let _this = this
          $.ajax({
            url: this.$store.state.url+"/user/mod",
            type: "post",
            data: {
              userId:_this.$store.state.userId,
              userName: _this.newName,
              wechat:_this.wechat,
              address:_this.address,
              userEmail:_this.email,
              sex:_this.usersex
            },
            success: function (result) {
              alert('修改成功')
            }
          })
        },
        update(){
          this.huoqu()
          if(this.emailcheck&&this.namecheck){
            if(this.newName==''){
              this.newName=this.personal.userName
            }
            if(this.email==''){
              this.email=this.personal.userEmail
            }
            this.updateAjax()
          }else {
            alert('请输入正确的格式')
          }
        },
          huoqu(){
            var sheng=$("#sheng").val();
            var shi=$("#shi").val();
            var qu=$("#qu").val();
            this.address=(sheng+shi+qu+this.street)
          },
        // 加载china地点数据，三级
        getCityData:function(){
          var that = this
          axios.get(this.mapJson).then(function(response){
            if (response.status==200) {
              var data = response.data
              that.province = []
              that.city = []
              that.block = []
              // 省市区数据分类
              for (var item in data) {
                if (item.match(/0000$/)) {//省
                  that.province.push({id: item, value: data[item], children: []})
                } else if (item.match(/00$/)) {//市
                  that.city.push({id: item, value: data[item], children: []})
                } else {//区
                  that.block.push({id: item, value: data[item]})
                }
              }
              // 分类市级
              for (var index in that.province) {
                for (var index1 in that.city) {
                  if (that.province[index].id.slice(0, 2) === that.city[index1].id.slice(0, 2)) {
                    that.province[index].children.push(that.city[index1])
                  }
                }
              }
              // 分类区级
              for(var item1 in that.city) {
                for(var item2 in that.block) {
                  if (that.block[item2].id.slice(0, 4) === that.city[item1].id.slice(0, 4)) {
                    that.city[item1].children.push(that.block[item2])
                  }
                }
              }
            }
            else{
              console.log(response.status)
            }
          }).catch(function(error){console.log(typeof+ error)})
        },
        // 选省
        choseProvince:function(e) {
          for (var index2 in this.province) {
            if (e === this.province[index2].id) {
              this.shi1 = this.province[index2].children
              this.shi = this.province[index2].children[0].value
              this.qu1 =this.province[index2].children[0].children
              this.qu = this.province[index2].children[0].children[0].value
              this.E = this.qu1[0].id
            }
          }
        },
        // 选市
        choseCity:function(e) {
          for (var index3 in this.city) {
            if (e === this.city[index3].id) {
              this.qu1 = this.city[index3].children
              this.qu = this.city[index3].children[0].value
              this.E = this.qu1[0].id
              // console.log(this.E)
            }
          }
        },
        // 选区
        choseBlock:function(e) {
          this.E=e;
          // console.log(this.E)
        },

        checkemail:function(){
          var regEmail=/^[1-9a-zA-Z_]\w*@[a-zA-Z0-9]+(\.[a-zA-Z]{2,})+$/;
          if(this.email==''){
            this.msgmail="请输入邮箱";
          }else if(!regEmail.test(this.email)){
            this.flag =true
            this.msgmail="邮箱格式不正确";
            this.emailcheck=false;
          }else{
            this.flag=false
            this.emailcheck=true;
          }
        },
        checkname:function(){
          console.log('检查')
          var regName=/^[\u4e00-\u9fa5_a-zA-Z0-9_]{2,10}$/;
          if(this.newName==''){
            this.msgname="请输入用户名";
          }else if(!regName.test(this.newName)){
            this.nameflag =true
            this.msgname="用户名格式不正确";
            this.namecheck=false;
          }else{
            this.nameflag=false;
            this.namecheck=true;
          }
        },
      },
    };
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .right{
    position: relative;
    left: 40px;
    background-color: rgba(255,255,255,0.9);
    box-shadow: -2px 2px 10px 2px #eeeeee;
    min-height: 780px;
  }
  .route{
    position: relative;
    left: 5%;
    width: 90%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    /*background-color: palevioletred;*/
    color: rgba(45, 54, 68, 0.9);
  }
  .route span{
    margin-right: 10px;
    font-size: 14px;
  }
  .route span:last-child{
    color: #8aa7cf;
  }
  h3{
    text-align: left;
    margin-left: 1%;
    font-weight: bold;
    color: #3e3e3e;
  }
  .sech3{
    margin-top: 30px;
  }
  .inright{
    width: 80%;
    position: absolute;
    top: 10%;
    left: 10%;
    color: #686868;
  }
  span{
    display: inline-block;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    /*margin-left: 30px;*/
  }
  span.det{
    font-size: 13px;
    margin-left: 0;
  }
  .first{
    margin-top: 30px;
  }
  .iptext{
    /*height: 50px;*/
    line-height: 50px;
    margin-left: 10px;
  }
  [type="text"],[type="email"]{
    height: 30px;
    border: 1px solid #cecece;
    border-radius: 5px;
    background-color: rgba(255,255,255,0.8);
    color: grey;
    margin-left: -12px;
  }
  [type="radio"]{
    margin-right: 10px;
  }
  [name="fem"]{
    margin-left: 5px;
  }
  [type="button"]{
    margin-top: 30px;
    height: 30px;
    width: 100%;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #5f85ff;
  }
  .errmsg{
    display: inline-block;
    width: 120px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    border: 1px solid #ffb8ad;
    color: red;
    border-radius: 7px;
    text-align: center;
    background-color: #ffd9e0;
  }
  .errormsg{
    /*display: none;*/
    /*background-color: blue;*/
    margin-top: 12px;
    display: inline-block;
    width: 120px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    border: 1px solid #ffb8ad;
    color: red;
    border-radius: 7px;
    text-align: center;
    background-color: #ffd9e0;
  }
</style>

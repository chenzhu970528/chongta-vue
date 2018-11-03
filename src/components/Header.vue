<template>
  <div class="header">
      <!-- Collect the nav links, forms, and other content for toggling -->
      <ul class="nav navbar-nav left" >
        <img class="logo" src="../assets/logo.png" alt="">
        <!--exact可以避免根路由使用始终激活的样式-->
        <router-link tag="li" active-class="active" role="presentation" to="/" exact><a>首页</a></router-link>
        <router-link tag="li" active-class="active" role="presentation" to="/adoption"><a>领养中心</a></router-link>
        <router-link tag="li" active-class="active" role="presentation" to="/homeless"><a>寻宠之家</a></router-link>
        <router-link tag="li" active-class="active" role="presentation" to="/matchmaking/TimeDesc"><a>宠物婚恋</a></router-link>
        <router-link tag="li" active-class="active" role="presentation" to="/forum"><a>宠宠交流</a></router-link>
      </ul>

      <ul class="nav navbar-nav right" >
        <li v-if="!isLogin"><router-link tag="li" active-class="active" role="presentation" to="/register" style="margin-top: 15px"><a>注册</a></router-link></li>
        <li v-if="!isLogin">
          <user-login></user-login>
        </li>
        <!--登录成功-->
        <li v-if="isLogin">
          <div class="headimg">
            <img :src="HeadPic" alt="">
          </div>
        </li>
        <li class="dropdown" v-if="isLogin">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
             aria-expanded="false">{{UserName.replace(/\"/g, "")}}<i class="caret"></i></a>
          <ul class="dropdown-menu">
            <router-link tag="li" active-class="active" role="presentation" to="/user"><a>个人中心</a></router-link>
            <li role="separator" class="divider"></li>
            <li><a href="#" @click="cleanUser">退出登录</a></li>
          </ul>
        </li>
        <li><span><i class="el-icon-location"></i>{{address}}</span></li>
        <div id="allmap"></div>
      </ul>
  </div>

</template>

<script>
  import Login from '../components/user/Login.vue'
  import {mapGetters} from 'vuex';
  export default {
    name: "Header",
    data(){
      return{
        address:''
      }
    },
    components:{
      'user-login':Login,
    },
    computed: mapGetters([
      'UserId',
      'UserName',
      'isLogin',
      'HeadPic'
    ])
    ,methods:{
      cleanUser(){
        localStorage.clear();
        location.href=this.$store.state.myurl
      },
      myaddress(){
        let _this = this
        // 百度地图API功能
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(116.331398,39.897445);
        map.centerAndZoom(point,12);

        function myFun(result){
          var cityName = result.name;
          map.setCenter(cityName);
          _this.address=cityName;
        }
        var myCity = new BMap.LocalCity();
        myCity.get(myFun);
      }
    },
    mounted(){
      this.myaddress()
      // $(window).scroll(function () {
      //   if ($(".bgsty").offset().top > 360) {$(".navbar-fixed-top").addClass("top-nav");
      //   }else {$(".navbar-fixed-top").removeClass("top-nav");}
      // })
    }

  }
</script>

<style scoped>
  @media (min-width: 1px){
    .navbar-nav>li {
      float: left;
    }
  }
  .header{
    width: 100%;
    z-index: 50;
    padding-top: 10px;
    height: 80px;
    position: relative;
    margin-bottom:-100px;
  }
  .nav>li>a:focus {
    text-decoration: none;
    background-color: #eee;
    border-radius: 10px;
  }
  .nav>li>a:hover{
    text-decoration: none;
    background-color: #eee;
    border-radius: 10px;
  }
  .right{
    float: right;
    min-width: 250px;
  }
  .left{
    width: 750px;
  }
  a{
    text-decoration: none;
    color: #0a498f;
  }
  .logo {
    margin-top:-5px;
    width: 160px;
    height: 75px;
    float: left;
  }
  .nav li{
    margin-left: 10px;
  }
  .nav li a {
     height: 70px;
     line-height: 40px;
    font-size:21px;
   }
  .nav li span {
    display: inline-block;
    height: 70px;
    line-height: 70px;
    font-size: 18px;
    color: #294666;
    margin-right: 10px;
    margin-left: 20px;
  }

  .nav .dropdown li a {
    height: 30px;
    line-height: 30px;
  }

  .headimg img{
    margin-left: -1px;
    margin-top: -1px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
  .headimg {
    margin-top: 10px;
    width: 50px;
    height: 50px;
    border: 1px solid #23527c;
    border-radius: 50px;
    background: url("../assets/HomePage/right3.jpg")  no-repeat ;
    background-size: 100% 100%;
  }

</style>

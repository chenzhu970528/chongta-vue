<template>
  <nav class="bgsty navbar ">
    <div class=" container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header ">
        <!--<img class="logodog" width="60" src="../assets/logoDog.png" alt="">-->
        <img class="logo" src="../assets/logo.png" alt="">
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <ul class="nav navbar-nav">
        <!--exact可以避免根路由使用始终激活的样式-->
        <router-link tag="li" active-class="active" role="presentation" to="/" exact><a>首页</a></router-link>
        <router-link tag="li" active-class="active" role="presentation" to="/adoption"><a>领养中心</a></router-link>
        <router-link tag="li" active-class="active" role="presentation" to="/homeless"><a>寻宠之家</a></router-link>
        <router-link tag="li" active-class="active" role="presentation" to="/matchmaking/TimeDesc"><a>宠物婚恋</a></router-link>
        <router-link tag="li" active-class="active" role="presentation" to="/forum"><a>宠宠交流</a></router-link>
      </ul>

      <ul class="nav navbar-nav navbar-right">
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
    </div><!-- /.container-fluid -->
  </nav>

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
  /*@media (max-width: 960px){*/
    /*.bgsty{*/
      /*max-width: 960px;*/
      /*!*background-color: rgba(255, 255, 255,0.9);*!*/
      /*!*border: 1px solid cornflowerblue;*!*/
    /*}*/
  /*}*/
  .top-nav{

  }
  .navbar{
    background-color: rgba(93, 164, 245, 0.0);
    height: 80px;
margin-top:5px;
    position: relative;
    z-index:100;
    margin-bottom:-100px;
  }
  a{
    text-decoration: none;
    color: #0a498f;
    /*font-weight: bold;*/
  }
  .logo {
    margin-top:-5px;
    width: 160px;
    height: 75px;
  }

  .navbar li a {
     height: 70px;
     line-height: 40px;
    font-size:21px;
   }
  .navbar li span {
    display: inline-block;
    height: 70px;
    line-height: 70px;
    font-size: 18px;
    color: #294666;
    margin-right: 10px;
    margin-left: 20px;
  }

  .navbar .dropdown li a {
    height: 30px;
    line-height: 30px;
  }

  .navbar-header li a {
    height: 30px;
    line-height: 30px;
  }
  .bgsty{
    min-width: 1000px;
    z-index: 50;
    /*background-color: rgba(255, 255, 255,0.9);*/
    /*border: 1px solid cornflowerblue;*/
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

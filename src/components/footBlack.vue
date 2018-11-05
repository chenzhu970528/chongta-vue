<template>
  <div class="" id="foot">
    <ul>
      <li>关于我们</li>
      <li>|</li>
      <li>加入我们</li>
      <li>|</li>
      <li>商务合作</li>
      <li>|</li>
      <li>免责声明</li>
    </ul>
    <p>&copy; CopyRight 2018 宠它</p>
    <div id="goTop">
      <div class="goTop" v-show="goTopShow" @click="goTop"><i class="goTopIcon"></i></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "footBlack",
      data(){
        return{
          scrollTop: '',
          goTopShow:false,
        }
      },
      methods:{
        handleScroll () {
          this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if(this.scrollTop>500){
            this.goTopShow=true
          }
        },
        goTop(){
          let timer=null,_that=this;
          cancelAnimationFrame(timer)
          timer=requestAnimationFrame(function fn(){
            if(_that.scrollTop>0){
              _that.scrollTop-=50;
              document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop;
              timer=requestAnimationFrame(fn)
            }else {
              cancelAnimationFrame(timer);
              _that.goTopShow=false;
            }
          })
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);
      },
      destroyed(){
        window.removeEventListener('scroll', this.handleScroll)
      }

    }
</script>

<style scoped>
  #foot{
    height: 180px;
    width: 100%;
    text-align: center;
    /*margin-top: 80px;*/
    background: #4f4f4f;
    /*margin-bottom: -20px;*/
  }
  ul{
    position: relative;
    left: 50%;
    top: 0;
    margin-left: -260px;
    /*bottom: 30px;*/
    list-style: none;
    padding-top: 80px;
    color: white;
    width: 500px;
  }
  ul li{
    display: inline-block;
    margin-left:5px
  }
  p{
    position: relative;
    left: 50%;
    top: 0;
    margin-left: -150px;
    /*bottom: 30px;*/
    color: white;
    width: 300px;
  }
  .goTop{
    position: fixed;
    right: 60px;
    bottom: 220px;
    width: 80px;
    height: 80px;
  }
  .goTop:hover{

  }
  .goTopIcon{
    display: block;
    width: 80px;
    height: 80px;
    background-image: url("../assets/gotop.png");
    background-repeat: no-repeat;
    background-position: center center;
  }


</style>

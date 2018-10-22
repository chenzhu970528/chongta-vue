<template>
  <div class="list-group col-xs-4" >
  <div class="block">
    <span class="demonstration" style="font-size: 20px">丢失（有报酬）</span>
    <!--<router-link  tag="li" active-class="active" role="presentation" :to="'/homeless/details/'+diary.homeId" style="list-style: none" exact>-->
    <el-carousel   height="250px" >
      <el-carousel-item v-for="(pet,index) in imgList" :key="index">
        <a href=""><img :src="pet.url" ></a>
      </el-carousel-item>
    </el-carousel>
    <!--</router-link>-->
    </div>
  </div>
</template>

<script>
    export default {
        name: "reward",
      data(){
          return{
            imgList:[
              {url:require("../../assets/homeless/1.jpg")} ,
              {url:require("../../assets/homeless/homeless.jpg")} ,
              {url:require("../../assets/homeless/4 (1).jpg")} ,
              {url:require("../../assets/homeless/4 (2).jpg")} ,
            ]
          }
      }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 20px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

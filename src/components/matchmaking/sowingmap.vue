<template>
    <div class="block col-xs-4">
      <!--<span class="demonstration">Click 指示器触发</span>-->
      <el-carousel trigger="click" height="200px" style="text-align: center">
        <el-carousel-item v-for="(mao,index) in imgList" :key="index">
          <img :src="mao.url">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "sowingmap",
      data(){
          return{
            imgList:[
              {url:require("../../assets/match/miaomiao1.jpg")} ,
              {url:require("../../assets/match/miaomiao2.jpg")} ,
              {url:require("../../assets/match/miaomiao3.jpg")} ,
              {url:require("../../assets/match/miaomiao4.jpg")} ,
            ]
          }
      }
    }
</script>

<style scoped>
  .block{
    /*width: 310px;*/
    background-color: #dbd4db;
    padding: 0;
    margin-top: 20px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  /*.el-carousel__item:nth-child(2n) {*/
    /*background-color: #99a9bf;*/
  /*}*/

  /*.el-carousel__item:nth-child(2n+1) {*/
    /*background-color: #d3dce6;*/
  /*}*/
</style>

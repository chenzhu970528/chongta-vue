<template>
    <div class="block" style="position: relative">
      <el-carousel height="300px" >
        <el-carousel-item style="text-align: center" v-for="(img,index) in imgList" :key="index">
          <img style="height: 300px" :src="img">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "DetailsImg",
      data(){
          return{
            adoId:this.$route.params.adoId,
            imgList:[
              // {url:require("../../assets/adoption/dog1.jpg")} ,
              // {url:require("../../assets/adoption/dog2.jpg")} ,
              // {url:require("../../assets/adoption/dog3.jpg")} ,
              // {url:require("../../assets/adoption/dog4.jpg")} ,
            ],
            myImg:[],
            url:this.$store.state.url
          }
      },
      created() {
          this.ajax()
      },
      methods:{
          ajax(){
            let _this=this
            axios.get(this.$store.state.url+`/adoptions/details/${this.adoId}`).then((result) => {
              _this.myImg = result.data.data.jsondata.adoPic.split(",");
              for(let i=0;i<_this.myImg.length-1;i++){
                _this.imgList.push(_this.url+_this.myImg[i])
              }
              // console.log(_this.myImg[0])
            })
          },
      }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 220px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

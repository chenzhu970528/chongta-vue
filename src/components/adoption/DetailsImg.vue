<template>
    <div class="block" style="position: relative">
      <el-carousel height="300px" >
        <el-carousel-item style="text-align: center" v-for="(img,index) in imgList" :key="index">
          <img style="height: 300px" :src="img">
          <video :src='img' controls="controls" style="width: 470px;height: 300px;"></video>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
  import store from './store.js'
  import axios from 'axios'
    export default {
        name: "DetailsImg",
      data(){
          return{
            mp4:'mp4',
            adoId:this.$route.params.adoId,
            imgList:[

            ],
            myImg:[],
            url:this.$store.state.url
          }
      },
      watch:{
        'cont':'ajax'
      },
      computed:{
        cont(){
          return store.state.cont
        },
      },
      created() {
          this.ajax()
      },
      methods:{
          ajax(){
            let _this=this
            this.adoId=_this.$route.params.adoId,
              this.imgList=[],
              this.myImg=[],
              this.url=_this.$store.state.url
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

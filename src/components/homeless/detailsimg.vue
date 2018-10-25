<template>
  <div class="block">
    <el-carousel height="400px">
      <el-carousel-item v-for="(img,index) in imgList" :key="index">
        <img :src="img">
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
        homeId:this.$route.params.homeId,
        imgList:[

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
        axios.get(this.$store.state.url+`/homeless/details/${this.homeId}`).then((result) => {
          // console.log(result.data)
          _this.myImg = result.data.data.homePic.split(",")
          for(let i=0;i<_this.myImg.length-1;i++){
            _this.imgList.push(_this.url+_this.myImg[i])
          }
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
homeless

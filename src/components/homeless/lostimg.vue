<template>
  <div class="block">
    <el-carousel height="300px" class="pic">
      <el-carousel-item v-for="(img,index) in imgList" :key="index">
        <img :src="img">
        <video :src='img' controls="controls" style="width: 500px;"> </video>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        mp4:'mp4',
        lpId:this.$route.params.lpId,
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
        axios.get(this.$store.state.url+`/homeless/lostpetsdetails/${this.lpId}`).then((result) => {
          // console.log(result.data)
          _this.myImg = result.data.data.lppic.split(",")
          for(let i=0;i<_this.myImg.length-1;i++){
            _this.imgList.push(_this.url+_this.myImg[i])
          }
        })

      },
    }
  }
</script>

<style scoped>
  .pic{
    background-color: rgba(192, 192, 192, 0.2);
  }
  .block{
    text-align: center;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 220px;
    margin: 0;
  }
  img{
    height: 300px;
  }
</style>


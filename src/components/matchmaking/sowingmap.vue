<template>
    <div class="block col-xs-5">
      <!--<span class="demonstration">Click 指示器触发</span>-->
      <el-carousel height="300px" >
        <el-carousel-item style="text-align: center" v-for="(img,index) in imgList" :key="index">
          <img style="height: 300px" :src="img">
          <video :src='img' controls="controls" style="height: 260px;"> </video>
        </el-carousel-item>
      </el-carousel>
      <!--<el-carousel trigger="click" height="260px" style="text-align: center">-->
        <!--<el-carousel-item v-for="(mao,index) in imgList" :key="index">-->
          <!--<img style="height: 300px" :src="mao">-->
          <!--<video :src='img' controls="controls" style="width: 190px;"> </video>-->
        <!--</el-carousel-item>-->
      <!--</el-carousel>-->
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "sowingmap",
      data(){
          return{
            mp4:'mp4',
            relId:this.$route.params.relId,
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
          let _this=this;
          axios.get(this.$store.state.url+`/matchmaking/matchdetail/${this.relId}`).then((result) => {
            _this.myImg = result.data.data[0].petPic.split(",");
            for(let i=0;i<_this.myImg.length-1;i++){
              _this.imgList.push(_this.url+_this.myImg[i])
            }
          })
        },
      }
    }
</script>

<style scoped>
  .block{
    /*width: 310px;*/
    background-color: #e2e2e2;
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
  img{
    height: 260px;
  }
</style>

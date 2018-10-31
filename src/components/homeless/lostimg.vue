<template>
  <div class="block">
    <el-carousel height="
    300px"
                 class="pic">
      <el-carousel-item v-for="(img,index) in imgList" :key="index">
        <img :src="img">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return{
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
  /*.el-carousel__item:nth-child(2n) {*/
  /*background-color: #99a9bf;*/
  /*}*/

  /*.el-carousel__item:nth-child(2n+1) {*/
  /*background-color: #d3dce6;*/
  /*}*/
</style>


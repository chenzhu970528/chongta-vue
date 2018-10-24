<template>
    <div class="block col-xs-4">
      <!--<span class="demonstration">Click 指示器触发</span>-->
      <el-carousel trigger="click" height="200px" style="text-align: center">
        <el-carousel-item v-for="(mao,index) in imgList" :key="index">
          <img :src="mao">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "sowingmap",
      data(){
          return{
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

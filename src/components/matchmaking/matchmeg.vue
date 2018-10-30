<template>
    <div class="col-xs-7 col-md-6 col-md-offset-0 col-lg-6 ">
      <h2>{{Mdeldata.title}}</h2>
      <span>{{Mdeldata.relTime}}</span>
      <div class="col-xs-6">
        <h3><span><img src="../../assets/match/love.png" alt=""></span>小宠信息</h3>
        <div class="Pet">
          <span>爱称：{{Mdeldata.PetName}}</span>
          <span>性别：{{Mdeldata.sex}}</span>
          <span>生日：{{Mdeldata.birth}}</span>
          <span>年龄：{{Mdeldata.age}}个月</span>
          <span>品种：{{Mdeldata.type}}</span>
        </div>
      </div>
      <div class="col-xs-6">
        <h3><span><img src="../../assets/match/user.png" alt=""></span>主人信息</h3>
        <div class="use">
          <span>昵称：{{Mdeldata.userName}}</span>
          <span>所在地：{{Mdeldata.address}}</span>
          <span>电话：{{Mdeldata.userPhone}}</span>
          <div class="aply">
            <m-aply :matId="Mdeldata.matId"></m-aply>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import maply from './maply.vue'
  export default {
        name: "matchmeg",
    components:{
      'm-aply': maply,
    },
    data(){
          return{
            relId:this.$route.params.relId,
            Mdeldata:[],
          }
    },
    created(){
      axios.get(this.$store.state.url+`/matchmaking/matchdetail/${this.relId}`).then((result) => {
        // console.log(result.data.data[0])
        this.Mdeldata = result.data.data[0];
        if(this.Mdeldata.medReport !=null){
          this.Mdeldata.medReport='已提交体检报告'
        }else this.Mdeldata.medReport='未提交体检报告'
      })
    }
}
</script>

<style scoped>
  .col-xs-7{
    margin-left: 30px;
    /*background-color: cornflowerblue;*/
  }
  .col-xs-7>span{
    display: block;
  }
  .col-xs-6 {
    position: relative;
  }
  .aply{
    position: relative;
    bottom: -10px;
    right:-75px;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #af7adb;
  }
  h3 span{
    padding-right: 10px;
  }
  .Pet span{
     display:block;
     height: 30px;
     line-height: 30px;
     font-size: 14px;
     color: grey;
    padding-left: 30px;
   }
  .use span{
    display: block;
    padding-right: 20px;
    /*height: 30px;*/
    line-height: 30px;
    font-size: 14px;
    color: grey;
    padding-left: 30px;
  }
</style>

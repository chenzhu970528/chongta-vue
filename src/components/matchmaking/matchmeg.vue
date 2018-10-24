<template>
    <div class="col-xs-6 col-md-6 col-md-offset-0 col-lg-6 ">
      <h3><span><img src="../../assets/match/love.png" alt=""></span>小宠信息</h3>
      <div class="Pet">
        <span>姓名：{{Mdeldata.PetName}}</span>
        <span>性别：{{Mdeldata.sex}}</span>
        <span>体检报告：{{Mdeldata.medReport}}</span>
        <span>生日：{{Mdeldata.birth}}</span>
        <span>配种史：{{Mdeldata.maHistory}}</span>
        <span>详情：{{Mdeldata.detail}}</span>
      </div>
      <h3><span><img src="../../assets/match/user.png" alt=""></span>主人信息</h3>
      <div class="use">
        <span>昵称：{{Mdeldata.userName}}</span><span>所在地：{{Mdeldata.address}}</span><span>电话：{{Mdeldata.userPhone}}</span>
      </div>

    </div>
    
</template>

<script>
  import axios from 'axios'
  export default {
        name: "matchmeg",
    data(){
          return{
            relId:this.$route.params.relId,
            Mdeldata:[],
          }
    },
    created(){
      axios.get(`http://localhost:3000/matchmaking/matchdetail/${this.relId}`).then((result) => {
        console.log(result.data.data[0])
        this.Mdeldata = result.data.data[0];
        if(this.Mdeldata.medReport !=null){
          this.Mdeldata.medReport='已提交体检报告'
        }else this.Mdeldata.medReport='未提交体检报告'
      })
    }
}
</script>

<style scoped>
  .col-xs-6{
    margin-left: 30px;
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
    padding-right: 20px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: grey;
  }
  .use span:first-child{
    padding-left: 30px;
  }
</style>

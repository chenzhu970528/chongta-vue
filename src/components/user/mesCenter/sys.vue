<!--系统消息-->
<template>
  <div class="right" >
    <div class="route">您的当前位置：<span>消息中心</span><span>/</span><span>系统消息</span></div>
    <div class="main" id="scroll-2" >
      <div class="sysMsg" v-for="showdata in showdatas">
        <img src="../../../assets/user/default33.png" alt="">
        <span>{{showdata.time}}</span>
        <span>{{showdata.content}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
      name: "sys",
      data(){
        return{
          sysdata:[],
          showdatas:[]
        }
      },
      created(){
        axios.get("http://localhost:3000/homeless/getsysmes").then((result) => {
          // console.log(result.data)
          this.sysdata = result.data.data;
          for (let i = 0; i < this.sysdata.length; i++) {
            this.showdatas.push(this.sysdata[i])
          }
        })
      }
    }
</script>

<style scoped>
  #scroll-2{
    padding: 35px;
    width: 80%;
    margin-left: 10%;
    max-height: 600px;
    /*background-color: rgba(237, 210, 234, 0.5);*/
    margin-top: 30px;
    overflow: auto;
  }
  #scroll-2::-webkit-scrollbar{
    width:4px;
    height:4px;
  }
  #scroll-2::-webkit-scrollbar-track{
    background:rgba(255, 255, 255, 0.3);
    border-radius:2px;
  }
  #scroll-2::-webkit-scrollbar-thumb{
    background: #bababa;
    border-radius:2px;
  }
  #scroll-2::-webkit-scrollbar-thumb:hover{
    background: #747474;
  }
  #scroll-2::-webkit-scrollbar-corner {
    background: #f6f6f6;
  }
  *{
    padding: 0;
    margin: 0;
  }
  .right{
    position: relative;
    left: 40px;
    min-height: 780px;
    background-color: rgba(255,255,255,0.5);
  }
  .route{
    position: relative;
    left: 5%;
    width: 90%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    /*background-color: palevioletred;*/
    color: #e7e7e7;
  }
  .route span{
    margin-right: 10px;
    font-size: 14px;
  }
  .route span:last-child{
    color: #b9ffff;
  }
  .sysMsg{
    position: relative;
    margin-bottom: 35px;
  }
  .sysMsg span{
    position: absolute;
    top: 0;
    left: 65px;
    color: #6d6d6d;
  }
  .sysMsg span:last-child{
    position: absolute;
    top: 20px;
    left: 65px;
    color: #6d6d6d;
    padding: 8px;
    background-color: rgba(255,255,255,0.5);
    border-radius: 5px;
  }
</style>

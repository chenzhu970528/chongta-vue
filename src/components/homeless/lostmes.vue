<template>
  <div >
    <div class="stamp" v-if="jsondata1.state==1"></div>
    <ul class="list-group">
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-piggy-bank" aria-hidden="true"> 宠物类型：</span>{{jsondata1.type}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-glass" aria-hidden="true"> 宠物性别：</span> {{lostsex}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-time" aria-hidden="true"> 发布时间：</span> {{jsondata1.lpTime}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-map-marker" aria-hidden="true"> 地址：</span> {{jsondata1.address}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-tag" aria-hidden="true"> 详细描述：</span> {{jsondata1.detail}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-user" aria-hidden="true"> 发布者：</span>
        <a href="../user/accManagement/personal.vue" style="text-decoration: none">{{jsondata1.userName}}</a>
        &nbsp;&nbsp;&nbsp; <span>联系方式： {{jsondata1.userPhone}}</span>
      </li>

      <!--<img src="../../assets/homeless/764087968048435921.png" alt=""  class="zhang" style="position: relative;z-index: 10" v-if="jsondata1.state==1">-->
      <!--<img src="../../assets/homeless/1.jpg" alt="" style="position: relative;z-index: 10;float: right" v-if="jsondata1.state==1">-->
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        lpId:this.$route.params.lpId,
        // 详细信息
        jsondata1:[],
        diarys:[]
      }
    },
    computed:{
      lostsex:{
        get(){
          let _this=this
          if(_this.jsondata1.sex==0){
            return '公'
          }else {
            return '母'
          }
        }
      }
    },
    created(){
      axios.get(this.$store.state.url+`/homeless/lostpetsdetails/${this.lpId}`).then((result) => {
        console.log(result);
        this.jsondata1 = result.data.data;
      })
    }
  }

</script>

<style scoped>
  .stamp{
    width: 450px;
    height: 400px;
    position: absolute;
    left: 120px;
    top: -65px;
    background: url("../../assets/homeless/764087968048435921.png") no-repeat;
    background-size: 100%;
    z-index: 10;
  }
  .list-group-item{
    margin: 5px 5px;
    border-radius:10px ;
  }
  button{
    margin-left: 50px;
  }
</style>

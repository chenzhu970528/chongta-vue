<template>
  <div >
    <ul class="list-group">
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-piggy-bank" aria-hidden="true"> 宠物类型：</span> 1111
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-glass" aria-hidden="true"> 宠物性别：</span> {{jsondata1.sex}}
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
        <!--<router-link tag="a" :to="">-->
        <a href="../user/accManagement/personal.vue" style="text-decoration: none">{{jsondata1.userName}}</a>
        &nbsp;&nbsp;&nbsp; <span>联系方式： {{jsondata1.userPhone}}</span>
      </li>
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
    created(){
      axios.get(this.$store.state.url+`/homeless/lostpetsdetails/${this.lpId}`).then((result) => {
        console.log(result);
        this.jsondata1 = result.data.data;
      })
    }
  }

</script>

<style scoped>
  .list-group-item{
    margin: 5px 5px;
    border-radius:10px ;
  }
  button{
    margin-left: 50px;
  }
</style>

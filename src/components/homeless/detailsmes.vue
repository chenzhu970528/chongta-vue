<template>
  <div >
    <ul class="list-group">
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-piggy-bank" aria-hidden="true"> 宠物类型：</span> {{jsondata1.type}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-glass" aria-hidden="true"> 宠物性别：</span> {{petSex}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-time" aria-hidden="true"> 发布时间：</span> {{jsondata1.homeTime}}
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
        <!--</router-link>-->



        <!--游客可见的个人信息-->

      </li>
      <!--<li class="list-group-item list-group-item-info">-->
        <!--<span class="glyphicon glyphicon-heart-empty"  aria-hidden="true"> 有意领养者：</span>-->


        <!--<span style="margin-left: 10px" v-for="diary in diarys">-->
          <!--<router-link tag="a" :to="'/userDetails/'+diary.userId">{{diary.realName}}</router-link>-->
        <!--</span>-->

      <!--</li>-->
    </ul>
    <!--<button type="button" class="btn btn-lg btn-primary">我想领养</button>-->
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "detailsmes",
    data(){
      return{
        homeId:this.$route.params.homeId,
        // 详细信息
        jsondata1:[],
        diarys:[]
      }
    },
    computed:{
      petSex:{
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
      axios.get(this.$store.state.url+`/homeless/homelessdetails/${this.homeId}`).then((result) => {
        // console.log(result.data.data);
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

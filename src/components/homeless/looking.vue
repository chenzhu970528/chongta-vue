<template>
  <div>
  <!--<router-link  tag="li" active-class="active" role="presentation" :to="'/homeless/details/'+diary.homeId" style="list-style: none;cursor: pointer" exact>-->

    <ul class="list-group" >
    <li class="list-group-item list-group-item-info" v-for="(activity,index) in activitys" :key="index" style="margin-bottom: 10px" >
      <!--<router-link  tag="li" active-class="active" role="presentation" :to="'/homeless/lostdetails/'+activity.lpId" style="float: left;list-style: none;cursor: pointer" exact>-->
      <div class="img" style="float: left">
        <img :src="urlImg(activity.lppic.split(',')[0])" alt="" style="width: 150px;height: 140px;margin-right: 15px;margin-top: -5px">

      </div>
      <!--</router-link>-->
      <div><span>标题：{{activity.lpmes}}</span></div>
      <div><span>丢失地点：{{activity.address}}</span></div>
      <div><span>奖赏：{{activity.reward}}</span></div>
      <div><span>联系人昵称：{{activity.userName}}</span></div>
      <div><span>号码：{{activity.userPhone}}</span></div>

    </li>
  </ul>
    <!--分页-->
    <el-row>
      <div class="block">
        <span class="demonstration"></span>
        <el-pagination ref="elpage"
                       @current-change="change()"
                       :current-page.sync="pageIndex"
                       layout="prev, pager, next"
                       :total="pageCount"
                       :page-size = "pagesize"
        >
        </el-pagination>
      </div>
      <!--<el-col :span="10" :push="7">-->
      <!--<change-page></change-page>-->
      <!--</el-col>-->
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        mydata: [],
        pageIndex: 1,
        pagesize: 6,  //每页条数
        pageCount:0,
        myActData:[],  //放数据库取得数据
        activitys:[]  , //方循环的数据
        url:this.$store.state.url
      };
    },
    computed:{
      myActData1(){
        return this.activitys;
      }
    },
    methods:{
      loadData() {
        this.activitys = [];
        let start = (this.pageIndex-1) * this.pagesize;
        let end = start + this.pagesize;
        // console.log(this.myActData[1]);
        if(end>=this.pageCount){
          end=this.pageCount
        }
        for (var i = start; i < end; i++) {
          this.activitys.push(this.myActData[i])
        }
      },
      change(){
        return this.loadData();

    },
    urlImg(str){
      // console.log(this.url+str)
      return this.url+str
    },
  },
    mounted() {
      axios.get(this.$store.state.url+"/homeless/lostpets").then((result) => {
        this.myActData = result.data.data;
        for (let i = 0; i < this.myActData.length; i++) {
          if(this.myActData[i].reward=='') this.myActData[i].reward='无'
        }
        this.pageCount=this.myActData.length;
        this.loadData();
      })
    }
  }
</script>

<style scoped>
  .list-group-item-info:hover{
  position: relative;
  left: -10px;
  top:-10px;
  box-shadow:2px 2px 5px 2px #a8a8a8;
}
  .list-group{
    position: relative;
  }
  .block{
    margin-top: 20px;
  }
  /*.img{*/
    /*width: 100px;*/
    /*height: 100px;*/
    /*background-color: yellow;*/
    /*position: absolute;*/
  /*}*/
</style>

<template>
  <div>
    <div class="song">
      <div class="listbox clearfix" v-for="(activity,index) in activitys" :key="index"  style="margin-bottom: 10px"  >
        <!--<router-link  tag="li" active-class="active" role="presentation" :to="'/homeless/lostdetails/'+activity.lpId" style="float: left;list-style: none;cursor: pointer" exact>-->

        <div class="listimg img" style="float: left;cursor: pointer" >
          <viewer >
            <img :src="urlImg(activity.lppic.split(',')[1])" alt="" style="width: 160px;height: 152px;">
            <img :src="urlImg(activity.lppic.split(',')[0])" alt="" style="display: none">
            <img :src="urlImg(activity.lppic.split(',')[2])" alt="" style="display: none">
          </viewer>
          </div>

          <div class="spans">
            <span class="firstspan"><span>标题：</span>{{activity.lpmes}}</span>
            <span class="firstspan"><span>丢失地点：</span>{{activity.address}}</span>
            <span class="firstspan"><span>奖赏：</span>{{activity.reward}}</span>
            <span class="firstspan"><span>联系人昵称：</span>{{activity.userName}}</span>
            <span class="firstspan"><span>号码：</span>{{activity.userPhone}}</span>
          </div>
        <!--</router-link>-->
      </div >
    </div>
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
  .firstspan{
    display: block;
    font-size: 15px;
    width:700px;
    margin-bottom: 5px;
  }

  .spans{
    position: relative;
    left: 30px;
    top: 10px;
    width: 100px;
  }
  .block{
    margin-top: 20px;
  }
  .listInfo span{
    font-size: 20px;
  }
  .listbox {
    border: 1px solid #becee1;
    border-radius: 10px;
    overflow: hidden;
  }
  .listbox:hover{
    border: 1px solid #6d9eff;
  }
  .listbox img{
    position: relative;
    z-index: 20;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    transition: all 0.8s;

  }
  .listbox img:hover{
    transform: scale(1,1.2);
  }
  .clearfix {
    display: block;
  }
  a{color: #000;
    text-decoration: none;
    cursor: pointer;
    outline: 0;
  }
  .listInfo h4 {
    width: 480px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 20px;
  }

  .listInfo .des dl {
    color: #999;
    width: 440px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .address span {
    color: #666;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .img img{
    width: 150px;
    height: 150px;
  }
</style>

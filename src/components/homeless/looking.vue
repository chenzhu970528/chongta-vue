<template>
  <div>
  <!--<router-link  tag="li" active-class="active" role="presentation" :to="'/homeless/details/'+diary.homeId" style="list-style: none;cursor: pointer" exact>-->

    <ul class="list-group" >
    <li class="list-group-item list-group-item-info" v-for="activity in myActData1" style="margin-bottom: 10px" >
      <div class="img">tupian</div>
      <div><span>标题：{{activity.lpmes}}</span></div>
      <div><span>地点：{{activity.address}}</span></div>
      <div><span>奖赏：{{activity.reward}}</span></div>
      <div><span>联系人昵称：{{activity.reward}}</span></div>
      <div><span>号码：{{activity.reward}}</span></div>
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
        diarys: [],
        pageIndex: 1,
        pagesize: 6,  //每页条数
        pageCount:0,
        myActData:[],  //放数据库取得数据
        activitys:[]   //方循环的数据
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
        // console.log('this.pageInedx:' + this.pageIndex)
        // console.log('this.pageCount:' + this.pageCount)
        let start = (this.pageIndex-1) * this.pagesize;
        let end = start + this.pagesize;
        //pageindex:0 , start:0 ; end:4
        //pageindex:1 , start: 4; end:8
        //pageindex:2 , start:8 ; end:12
        //pageindex:3 , start:6 ; end:8
        // console.log('-----------------')
        // console.log('start:' + start)
        // console.log('end:' + end)
        console.log(this.myActData[1]);
        if(end>=this.pageCount){
          end=this.pageCount
        }
        for (var i = start; i < end; i++) {
          this.activitys.push(this.myActData[i])
        }
      },
      change(){
        return this.loadData();
      }
    },
    created() {
      let _this=this;
      axios.get(this.$store.state.url+"/homeless/lostpets").then((result) => {
        // this.mydata = result.data.data;
        _this.myActData = result.data.data;
        _this.pageCount=_this.myActData.length;
        console.log(_this.pageCount)
        _this.loadData()
        // for (let i = 0; i < this.mydata.length; i++) {
        //   this.diarys.push(this.mydata[i])
        // }
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

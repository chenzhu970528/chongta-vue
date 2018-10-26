<template>
  <div>
    <div class="mainList">
      <el-row>
        <el-col :span="6" style="margin-left: 4%;margin-top: 20px" v-for="(activity,index) in myActData1"  :key="myActData1.length" :offset="index>0?3:0">
          <div class="oneList">
            <router-link :to="'/matchmaking/matchDel/'+activity.matId"><img :src="'http://localhost:3000/uploadfile/adoUpload/123212018102309054'+index+'.jpg'" alt="..." style="height: 180px" class="img-rounded"></router-link>
            <div>
              <span>昵称: <span class="inner">{{activity.PetName}}</span></span>
              <span>性别: <span class="inner">{{activity.sex}}</span></span>
              <span>年龄: <span class="inner">{{activity.age}}个月</span></span>
            </div>
          </div>
        </el-col>
      </el-row>
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
      <!--<el-col :span="10" :push="7">-->
      <!--<change-page></change-page>-->
      <!--</el-col>-->
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "TimeAsc",
    data() {
      return {
        // matchdata: [],
        // showLists: [],
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
    mounted(){
      let _this=this;
      axios.get(this.$store.state.url+"/matchmaking/sortTimeASC").then((result) => {
        console.log(result.data.data[0]);
        _this.myActData = result.data.data[0];
        _this.pageCount=_this.myActData.length;
        console.log(_this.pageCount)
        _this.loadData()
        // for (let i = 0; i < this.matchdata.length; i++) {
        //   this.activitys.push(this.myActData[i])
        // }
      })
    }
    }
</script>

<style scoped>
  .msg div:last-child{
    margin-top: 5px;
  }
  .msg div span{
    font-size: 14px;
    color: #4e7dff;
    margin-right: 15px;
  }
  .msg div h4{
    font-size: 15px;
    color: #c18ddb;
  }
  .mainList{
    min-height: 100px;
    width: 70%;
    margin-left:3%;
  }
  .oneList{
    text-align: center;
    background-color: white;
  }

  .oneList div span{
    /*margin-left: 10px;*/
    text-align: left;
    margin-left: 20px;
    padding-right: 10px;
    display: block;
    margin-top: 7px;
    /*margin-bottom: 20px;*/
  }
  img{
    width: 100%;
  }
  .oneList:hover{
    position: relative;
    left: -10px;
    top:-10px;
    box-shadow:2px 2px 5px 2px #a8a8a8;
  }
  .oneList div span.inner{
    display: inline;
    margin-left: 10px;
  }
  .block{
    width: 60%;
    margin-left: 3%;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
</style>

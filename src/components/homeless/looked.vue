<template>
  <div>
    <div class="song">
      <div class="listbox clearfix" v-for="(activity,index) in myActData1" :key="index"  style="margin-bottom: 10px"  >
        <!--<router-link  tag="li" active-class="active" role="presentation" :to="'/homeless/details/'+activity.homeId" style="float: left;list-style: none;cursor: pointer" exact>-->
          <div class="listimg img" style="float: left">
            <!--<router-link  tag="li" active-class="active" role="presentation" :to="'/homeless/details/'+diary.homeId" style="float: left;list-style: none;cursor: pointer" exact>-->
            <img :src="urlImg(activity.lppic.split(',')[0])" alt="" style="width: 150px;height: 140px;">
            <!--<router-link  tag="li" active-class="active" role="presentation" :to="'/homeless/founded/'+activity.state" style="float: left;list-style: none;cursor: pointer" exact>-->
              <!--<img :src="'http://localhost:3000/uploadfile/adoUpload/123212018102309054'+index+'.jpg'" alt="" style="width: 150px;height: 140px;">-->
            <!--</router-link>-->
          </div>


          <div class="listInfo"   >
            <h4>{{activity.lpmes}}</h4>
            <div class="address">
              <div><span>丢失地址：</span><span>{{activity.address}}</span> <br>
                <span>丢失人：</span><span>{{activity.userName}}</span> <br>
                <span>丢失类型：</span><span>{{activity.type}}</span>
                <img src="../../assets/homeless/764087968048435921.png" alt="" class="zhang"  id="f" >
              </div>
            </div>
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
    name: "all",
    data() {
      return {
        mydata: [],
        pageIndex: 1,
        pagesize: 5,  //每页条数
        pageCount:0,
        myActData:[],  //放数据库取得数据
        activitys:[],   //方循环的数据
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
      let _this=this;
      axios.get(this.$store.state.url+"/homeless/founded").then((result) => {
        // console.log(result.data)
        _this.myActData = result.data.data;
        _this.pageCount=_this.myActData.length;
        // console.log(_this.pageCount)
        _this.loadData()
      })
    }
  }
</script>

<style scoped>
  .zhang{
    width: 200px;
    height: 200px;
    position: absolute;
    right: 30px;
    bottom: 24px;

  }
  .listInfo {
    width: 380px;
    height: auto;
    float: left;
    margin-left: 20px;
    display: block;
    margin-top: 10px;
  }
  .listInfo span{
    font-size: 20px;
  }
  .listbox {
    border: 1px solid #becee1;
    border-radius: 10px;
  }
  .listbox:hover{
    border: 1px solid #6d9eff;
  }
  .listbox img{
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  }
  .clearfix {
    display: block;
  }
  a{color: #000;
    text-decoration: none;
    cursor: pointer;
    outline: 0;
  }
  .listCell {
    width: 150px;
    float: right;
    display: block;
    height: 40px;
    line-height: 40px;
    background-color: #9bc9f1;
    color: #fff;
    font-weight: 700;
    margin: 50px 30px 0 0;
    font-size: 16px;
    text-align: center;
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
    font: 17px/2 "微软雅黑",Arial;
    color: #666;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }




</style>

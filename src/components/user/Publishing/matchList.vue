<template>
  <div>
    <div class="fabu" v-if="!isshow">
      <router-link  tag="button" class="btn btn-primary"  to="/homeless/publish" style="list-style: none;text-decoration: none" exact>
        发布
      </router-link>
    </div>
  <div class="inner_ado">
    <div class="tol" v-for="(showList,index) in showLists">
      <el-row class="card">
        <el-col :span="7" class="petPic">
          <div class="pic"></div>
        </el-col>
        <el-col :span="15">
          <p class="title">标题：<span>{{showList.title}}</span></p>
          <p>发布时间：<span>{{showList.relTime}}</span></p>
          <p>地点：<span>{{showList.address}}</span></p>
          <el-row>
            <el-col :span="5">详细信息：</el-col>
            <el-col :span="18" >
              <span class="detail">{{showList.detail}}</span>
            </el-col>
          </el-row>
        </el-col>
        <div>
          <el-popover
            placement="top"
            width="160"
            v-model="visiblematch[index]">
            <p>确定删除吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visiblematch[index]">取消</el-button>
              <el-button type="primary" size="mini" @click="delMatch(showList.matId)" >确定</el-button>
            </div>
            <el-button slot="reference" icon="el-icon-delete" circle></el-button>
            <!--<el-button slot="reference">删除</el-button>-->
          </el-popover>
        </div>
      </el-row>
    </div>
    <div v-if="isshow" class="noList">
      <img src="../../../assets/user/default8.png" alt="">
      <p>还没有任何发布哦，快去<router-link   to="/matchmaking/mpublish" style="list-style: none;text-decoration: none" exact>发布吧!</router-link></p>
    </div>
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
      name: "matchList",
      data(){
        return{
          visiblematch: [],
          relId:this.$store.state.userId,
          mydata:[],
          // matchlist:[],
          showLists:[],
          isshow:false,
          pageIndex: 1,
          pagesize: 3,  //每页条数
          pageCount:0,
          myActData:[],  //放数据库取得数据
        };
      },
      computed:{
        myActData1(){
          return this.showLists;
        }
      },
      watch:{
        '$route':'mounted'
      },
      // created(){
      //   this.ajax()
      // },
      methods:{
        loadData() {
          this.showLists = [];
          let start = (this.pageIndex-1) * this.pagesize;
          let end = start + this.pagesize;
          console.log(this.myActData[1]);
          if(end>=this.pageCount){
            end=this.pageCount
          }
          for (var i = start; i < end; i++) {
            this.showLists.push(this.myActData[i])
          }
        },
        change(){
          return this.loadData();
        },
        ajax(){
          axios.get(this.$store.state.url+`/matchmaking/matchdetails/${this.relId}`).then((result) => {
            this.mydata = result.data.data;
            for (let i = 0; i < this.mydata.length; i++) {
              this.showLists.push(this.mydata[i])
              this.visiblematch.push(false);
            }
            if(result.data.data.length==0){
              this.showPic()
              // _this.isshow=true
            }
          })
        },
        delMatch(matId){
          let _this=this
          $.ajax({
            url: _this.$store.state.url+"/matchmaking/delMatchAll/"+matId,
            type: "get",
            success: function (result) {
              try{
                _this.mydata=[]
                  _this.visiblematch=[]
                  _this.showLists=[]
                  _this.myActData=[]
                  _this.showLists=[]
                _this.ajax()
                _this.ajaxall()
                _this.loadData()
              }catch(e){
              }
            }
          })
        },
          showPic:function () {
              this.isshow=true
          },
        ajaxall(){
          let _this=this;
          axios.get(this.$store.state.url+`/matchmaking/matchdetails/${this.relId}`).then((result) => {
            console.log(result.data.data);
            _this.myActData = result.data.data;
            _this.pageCount=_this.myActData.length;
            console.log(_this.pageCount)
            _this.loadData()
          })
        }
      },
      mounted(){
        this.ajax()
        this.ajaxall()
      }
    }
</script>

<style scoped>
  .block{
    width: 60%;
    margin-left: 20%;
    text-align: center;
    margin-top: 90px;
    margin-bottom: 30px;
  }
  .fabu{
    /*background-color: red;*/
    height: 25px;
    width: 45px;
    position: relative;
    /*left: 542px;*/
    right: -90%;
    /*margin-bottom: 20px;*/
  }
  .inner_ado{
    width: 80%;
    margin-left: 9%;
    margin-top: 2%;
    position: relative;
    /*background-color: yellow;*/
    min-height: 500px;
    font-size: 13px;
    color: #737373;
  }
  .card{
    width: 100%;
    min-height: 150px;
    /*background-color: red;*/
  }
  .tol{
    border-radius: 20px;
    background-color: rgba(255,255,255,0.5);
    margin-bottom: 25px;
  }
  .pic{
    width: 110px;
    height: 110px;
    border-radius: 110px;
    background: -10px -10px url("../../../assets/match/mao1.jpg");
    margin-top: 20px;
    margin-left: 10px;
  }


  p{
    padding-top: 7px;
  }
  .detail{
    display: inline-block;
    /*height: 70px;*/
    overflow: hidden;
    /*background-color: plum;*/
    text-overflow: ellipsis;
  }
  .noList{
    text-align: center;
    color: #575757;
    /*position: relative;*/
    /*top:-500px;*/
  }
  .showList{
    text-align: center;
    color: #575757;
    position: relative;
    top:-500px;
  }
</style>

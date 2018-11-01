<template>
  <div>
    <div class="fabu" v-if="!isshow">
      <router-link  tag="button" class="btn btn-primary"  to="/adoption/issue" style="list-style: none;text-decoration: none" exact>
        发布
      </router-link>
    </div>
  <div class="inner_ado">
    <div class="tol" v-for="(lostlist,index) in lostlists">
      <el-row class="card">
        <el-col :span="7" class="petPic">
          <div class="pic"><img :src="urlImg(lostlist.lppic)"></div>
        </el-col>
        <el-col :span="15">
          <p class="title">标题：<span>{{lostlist.lpmes}}</span></p>
          <p>发布时间：<span>{{lostlist.pbTime}}</span></p>
          <p>丢失时间：<span>{{lostlist.lpTime}}</span></p>
          <p>失主奖励：<span>{{lostlist.reward}}</span></p>
          <el-row>
            <el-col :span="5">详细信息：</el-col>
            <el-col :span="18" >
              <span class="detail">{{lostlist.detail}}</span>
            </el-col>
          </el-row>
        </el-col>
        <img src="../../../assets/homeless/764087968048435921.png" alt="" class="zhang"  id="f" v-if="lostlist.state==1">
        <div >
        <button type="button"  @click="founded(lostlist.lpId)" class="btn btn-primary founded" style="font-size: 15px;float: right"  v-if="lostlist.state==0">已经找到</button>
        </div>
        <div class="title del">
          <el-popover
            placement="top"
            width="160"
            v-model="visiblelost[index]">
            <p>确定删除吗？</p>
            <div style="text-align: right; margin: 0">
              <!--<el-button size="mini" type="text" @click="visiblelost=false">取消</el-button>-->
              <el-button type="primary" size="mini" @click="dellostpets(lostlist.lpId)">确定</el-button>
            </div>
            <el-button slot="reference" icon="el-icon-delete" circle></el-button>

            <!--<el-button slot="reference">删除</el-button>-->
          </el-popover>
        </div>
      </el-row>
    </div>
    <div v-if="isshow" class="noList">
      <img src="../../../assets/user/default8.png" alt="">
      <p>还没有任何发布哦，快去<router-link   to="/homeless/wantadopt" style="list-style: none;text-decoration: none" exact>发布吧!</router-link></p>
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
  import  animate from 'animate.css'
    export default {
        name: "lostList",
      data(){
        return{
          visiblelost:[],
          isshow:false,
          userId:this.$store.state.userId,
          mydata:[],
          lostlists:[],
          pageIndex: 1,
          pagesize: 3,  //每页条数
          pageCount:0,
          myActData:[],  //放数据库取得数据
          url:this.$store.state.url,
          show:true
        };
      },
      computed:{
          myActData1(){
            return this.lostlists;
          }
      },
      watch:{
          '$route':'mounted'
      },
      // created() {
      //     this.ajax()
      //     },
      methods:{
          // slideOutUp:function(){
          //   $ ('#f1').addClass('animated rotateln')
          // },
        urlImg(str){
          let strs=str.split(',')[0]
          // console.log(this.url+str)
          return this.url+strs
        },
        founded(lpId){
              // this.show=false;
          let _this=this
            $.ajax({
              url: this.$store.state.url+"/homeless/loststate",
              type: "post",
              data: {
                lpId: lpId,
              },
              success: function (result) {
                alert("寻找成功！！！");
                _this.mydata=[],
                  _this.lostlists=[],
                _this.ajax()
                // this.slideOutUp()

              }
            })
            // this.swing()
        },
        loadData() {
          this.lostlists = [];
          let start = (this.pageIndex-1) * this.pagesize;
          let end = start + this.pagesize;
          console.log(this.myActData[1]);
          if(end>=this.pageCount){
            end=this.pageCount
          }
          for (var i = start; i < end; i++) {
            this.lostlists.push(this.myActData[i])
          }
        },
        change(){
          return this.loadData();
        },
          ajax() {
            axios.get(this.$store.state.url + `/homeless/getlostdetails/${this.userId}`).then((result) => {
              this.mydata = result.data.data;
              for (let i = 0; i < this.mydata.length; i++) {
                this.lostlists.push(this.mydata[i]);
                this.visiblelost.push(false);
                // console.log(this.lostlists.state)
                // if(this.lostlists.state==1){
                //   this.show=false
                // }
              }

              if (result.data.data.length == 0) {
                this.showPic()
              }
            })
          },
      dellostpets(lpId){
          let _this=this
        $.ajax({
          url:_this.$store.state.url+"/homeless/dellostpets/"+lpId,
          type:'get',
          success: function (result) {
            // _this.show=false
            try{
              _this.mydata=[]
                _this.visiblelost=[]
                _this.lostlists=[]
                _this.myActData=[]
                _this.lostlists=[]
                _this.ajax()
                _this.ajaxall()
                _this.loadData()
            }catch(e){
            }
          }
        })
        // this.visible2 = false
      },
        showPic:function () {
          this.isshow=true
      },
      ajaxall(){
        let _this=this;
        axios.get(this.$store.state.url+`/homeless/getlostdetails/${this.userId}`).then((result) => {
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
  .found{
    position: relative;
    left: 20px;
  }
  .zhang{
    width: 200px;
    height: 200px;
    position: absolute;
    right: 30px;
    bottom: -50px;
  }
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
    min-height: 180px;
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
  .pic img{
    width: 110px;
    height: 110px;
    border-radius: 110px;
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

<template>
  <div>
    <div class="fabu" v-if="!isshow">
      <router-link  tag="button" class="btn btn-primary"  to="/matchmaking/mpublish" style="list-style: none;text-decoration: none" exact>
        发布
      </router-link>
    </div>
  <div class="inner_ado" id="scroll">
    <div class="tol" v-for="(showList,index) in showLists">
      <el-row class="card">
        <img src="../../../assets/user/yuande.png" alt="" style="width: 150px;position: absolute;right: 10px;top: 20px;" v-if="showList.agree=='1'">
        <router-link  tag="li" active-class="active" role="presentation" :to="'/matchmaking/matchDel/'+showList.matId" style="list-style: none;cursor: pointer" exact>
        <el-col :span="7" class="petPic">
          <div class="pic"><img :src="urlImg(showList.petPic)"></div>
        </el-col>
        </router-link>
        <el-col :span="15">
          <p class="title">标题：<span>{{showList.title}}</span></p>
          <p>发布时间：<span>{{showList.relTime}}</span></p>
          <p>地点：<span>{{showList.address}}</span></p>
          <!--<p >tongyi：<span>{{showList.agree}}</span></p>-->
          <el-row class="details">
            <el-col :span="5">详细信息：</el-col>
            <el-col :span="18" >
              <span class="detail">{{showList.detail}}</span>
            </el-col>
          </el-row>
          <p v-if="showList.agree=='0'">申请人：<span> <match-User :matId="showList.matId"></match-User></span></p>
        </el-col>
        <div>
          <el-popover
            placement="top"
            width="160"
            v-model="visiblematch[index]">
            <p>确定删除吗？</p>
            <div style="text-align: right; margin: 0">
              <!--<el-button size="mini" type="text" @click="visiblematch=false">取消</el-button>-->
              <el-button type="primary" size="mini" @click="delMatch(showList.matId)" >确定</el-button>
            </div>
            <el-button slot="reference" icon="el-icon-delete" circle></el-button>
          </el-popover>
        </div>
      </el-row>
    </div>
    <div v-if="isshow" class="noList">
      <img src="../../../assets/user/default8.png" alt="">
      <p>还没有任何发布哦，快去<router-link   to="/matchmaking/mpublish" style="list-style: none;text-decoration: none" exact>发布吧!</router-link></p>
    </div>
  </div>
</div>
</template>

<script>
  import axios from 'axios'
  import matchUser from './matchUser.vue'
    export default {
      name: "matchList",
      components:{
        'match-User':matchUser
      },
      data(){
        return{
          visiblematch: [],
          show:false,
          relId:this.$store.state.userId,
          mydata:[],
          // matchlist:[],
          showLists:[],
          isshow:false,
          // pageIndex: 1,
          // pagesize: 4,  //每页条数
          // pageCount:0,
          // myActData:[],  //放数据库取得数据
          url:this.$store.state.url
        };
      },
      // computed:{
      //   myActData1(){
      //     return this.showLists;
      //   }
      // },
      // watch:{
      //   '$route':'mounted'
      // },
      created(){
        this.ajax()
      },
      methods:{
        urlImg(str){
          let strs=str.split(',')[1]
          // console.log(this.url+str)
          return this.url+strs
        },
        // loadData() {
        //   this.showLists = [];
        //   let start = (this.pageIndex-1) * this.pagesize;
        //   let end = start + this.pagesize;
        //   console.log(this.myActData[1]);
        //   if(end>=this.pageCount){
        //     end=this.pageCount
        //   }
        //   for (var i = start; i < end; i++) {
        //     this.showLists.push(this.myActData[i])
        //   }
        // },
        // change(){
        //   return this.loadData();
        // },
        ajax(){
          axios.get(this.$store.state.url+`/matchmaking/matchdetails/${this.relId}`).then((result) => {
            this.mydata = result.data.data;
            for (let i = 0; i < this.mydata.length; i++) {
              this.showLists.push(this.mydata[i])
              this.visiblematch.push(false);
              // if(this.showLists[i].agree==='1') this.show=true
            }
            if(result.data.data.length==0){
              this.showPic()
              // _this.isshow=true
            }
          })
        },
        // agree(){
        //   axios.get(this.$store.state.url+`/matchmaking/agreeName/${this}`).then((result) => {
        //     this.mydata = result.data.data;
        //     for (let i = 0; i < this.mydata.length; i++) {
        //       this.showLists.push(this.mydata[i])
        //       this.visiblematch.push(false);
        //     }
        //     if(result.data.data.length==0){
        //       this.showPic()
        //       // _this.isshow=true
        //     }
        //   })
        // },
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
                  // _this.myActData=[]
                  // _this.showLists=[]
                _this.ajax()
                _this.ajaxall()
                // _this.loadData()
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
            // console.log(result.data.data);
            _this.myActData = result.data.data;
            _this.pageCount=_this.myActData.length;
            // console.log(_this.pageCount)
            // _this.loadData()
          })
        }
      },
      // mounted(){
      //   this.ajax();
      //   this.ajaxall();
      // }
    }
</script>

<style scoped>
  #scroll{
    /*padding: 35px;*/
    /*width: 80%;*/
    /*margin-left: 10%;*/
    max-height: 600px;
    /*background-color: rgba(237, 210, 234, 0.5);*/
    margin-top: 30px;
    overflow: auto;
  }
  #scroll::-webkit-scrollbar{
    width:4px;
    height:4px;
  }
  #scroll::-webkit-scrollbar-track{
    background:rgba(255, 255, 255, 0.3);
    border-radius:2px;
  }
  #scroll::-webkit-scrollbar-thumb{
    background: #bababa;
    border-radius:2px;
  }
  #scroll::-webkit-scrollbar-thumb:hover{
    background: #747474;
  }
  #scroll::-webkit-scrollbar-corner {
    background: #f6f6f6;
  }
  .fabu{
    height: 25px;
    width: 45px;
    position: relative;
    right: -90%;
  }
  .inner_ado{
    margin-top: 2%;
    position: relative;
    min-height: 500px;
    font-size: 13px;
    color: #737373;
  }
  .card{
    width: 100%;
    position: relative;
    min-height: 150px;
  }
  .tol{
    width: 80%;
    margin-left: 10%;
    border-radius: 20px;
    background-color: rgba(255, 255, 255,0.5);
    margin-bottom: 25px;
    /*box-shadow: -2px 2px 10px 0px #eeeeee;*/
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
  .details{
    margin-top: 20px;
  }
</style>

<template>
  <div>
    <div class="fabu">
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
          matchlist:[],
          showLists:[],
          isshow:false,
        }
      },
      created(){
        this.ajax()
      },
      methods:{
        ajax(){
          axios.get(this.$store.state.url+`/matchmaking/matchdetail/${this.relId}`).then((result) => {
            this.matchlist = result.data.data;
            // console.log(result.data.data.length);
            // console.log(result.data.data)
            for (let i = 0; i < this.matchlist.length; i++) {
              this.showLists.push(this.matchlist[i])
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
            // data: homeId,
            success: function (result) {
              console.log("success:" + matId);
              console.log(result.data)
              // alert("删除成功！！！")
              _this.matchlist=[],
                _this.visiblematch=[],
                _this.showLists=[],
                _this.ajax()
              // this.$router.go(0)
            }
          })
          // this.visible2 = false
        },
          showPic:function () {
            // if(this.matchlist.length=0){
              this.isshow=true
            // }
          }
      }
    }
</script>

<style scoped>
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

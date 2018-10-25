<template>
  <div>
    <div class="fabu">
      <router-link  tag="button" class="btn btn-primary"  to="/adoption/issue" style="list-style: none;text-decoration: none" exact>
        发布
      </router-link>
    </div>
  <div class="inner_ado">
    <div class="tol" v-for="(lostlist,index) in lostlists">
      <el-row class="card">
        <el-col :span="7" class="petPic">
          <div class="pic"></div>
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
        <div class="title del">
          <el-popover
            placement="top"
            width="160"
            v-model="visiblelost[index]">
            <p>确定删除吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visiblelost[index] = false">取消</el-button>
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
</div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "lostList",
      data(){
        return{
          visiblelost:[],
          isshow:false,
          userId:this.$store.state.userId,
          mydata:[],
          lostlists:[],
        };
      },
      created() {
          this.ajax()
          },
      methods:{
          ajax() {
            axios.get(this.$store.state.url + `/homeless/getlostdetails/${this.userId}`).then((result) => {
              this.mydata = result.data.data;
              for (let i = 0; i < this.mydata.length; i++) {
                this.lostlists.push(this.mydata[i]);
                this.visiblelost.push(false)
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
            console.log("success:" + lpId);
            console.log(result.data)
            // alert("删除成功！！！")
            _this.mydata=[],
              _this.visiblelost=[],
              _this.lostlists=[],
              _this.ajax()
            // this.$router.go(0)
          }
        })
        // this.visible2 = false
      },
        showPic:function () {
          this.isshow=true
        }
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

<template>
  <div>
    <div class="tol" v-for="(aplyme,index) in aplymes">
      <el-row class="card">
        <el-col :span="6" class="petPic">
          <div class="pic"></div>
          <!--<el-popover-->
            <!--placement="bottom"-->
            <!--title="标题"-->
            <!--width="300"-->
            <!--trigger="hover">-->
            <!--<dl>-->
              <!--<dd>-->
                <!--<span class="glyphicon glyphicon-user" aria-hidden="true"> 手机号：</span>{{showaplyMatch.userPhone}}-->
              <!--</dd>-->
              <!--<dd>-->
                <!--<span class="glyphicon glyphicon-retweet" aria-hidden="true"> 申请时间：</span>{{showaplyMatch.maplyTime}}-->
              <!--</dd>-->
              <!--<dd>-->
                <!--<span class="glyphicon glyphicon-phone" aria-hidden="true"> 邮箱：</span>{{showaplyMatch.userEmail}}-->
              <!--</dd>-->
            <!--</dl>-->
            <!--<el-button type="text" slot="reference">{{showaplyMatch.userName}}</el-button>-->
          <!--</el-popover>-->
        </el-col>
        <el-col :span="15" :push="2">
          <p class="title"><span>宠物信息</span></p>
          <p>性别：<span>{{aplyme.sex}}</span></p>
          <p>年龄：<span>{{aplyme.sex}}</span></p>
          <p>有无配种史：<span>fzdgdzgzd</span></p>
          <el-row>
            <el-col :span="5">详细信息：</el-col>
            <el-col :span="18" >
              <span class="detail">gzsgsz</span>
            </el-col>
          </el-row>
        </el-col>
        <div class="del">
          <el-popover
            placement="top"
            width="160"
            v-model="visiblematch">
            <p>确定删除吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visiblematch = false">取消</el-button>
              <el-button type="primary" size="mini" @click="visiblematch = false">确定</el-button>
            </div>
            <el-button slot="reference" icon="el-icon-delete" circle></el-button>
            <!--<el-button slot="reference">删除</el-button>-->
          </el-popover>
        </div>
      </el-row>
    </div>
    <div v-if="isshow" class="noList">
      <img src="../../../assets/user/default8.png" alt="">
      <p>还没有任何申请哦，快去申请吧</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "aplymeAdo",
      data(){
        return{
          visiblematch: false,
          isshow:false,
          userId:this.$route.params.userId,
        }
      },
      created(){
        // axios.get(`http://localhost:3000/matchmaking/${this.userId}/showaply`).then((result) => {
        //   this.aplyMatch = result.data.data[0];
        //   console.log(result.data.data[0]);
        //   for (let i = 0; i < this.aplyMatch.length; i++) {
        //     this.showaplyMatchs.push(this.aplyMatch[i]);
        //     // this.visiblematch.push(false)
        //   }
          // if(result.data.data[0].length==0){
          //   this.showPic()
          //   // _this.isshow=true
          // }
        // })
      },
      methods:{
        showPic:function () {
          this.isshow=true
        }
      }
    }
</script>

<style scoped>
  .card{
    height: 200px;
  }
  .tol{
    width: 90%;
    margin-left: 5%;
    border-radius: 20px;
    background-color: rgba(255,255,255,0.5);
    margin-bottom: 25px;
    position: relative;
    margin-top: 20px;
  }
  .pic{
    width: 110px;
    height: 110px;
    border-radius: 110px;
    background: -10px -10px url("../../../assets/match/mao1.jpg");
    margin-top: 20px;
    margin-left: 10px;
  }
  .petPic{
    width: 120px;
    height: 200px;
    text-align: center;
    /*background-color: yellow;*/
  }
  p{
    padding-top: 7px;
  }
  .detail{
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .noList{
    text-align: center;
    color: #575757;
    /*position: relative;*/
    /*top:-500px;*/
  }
  .del{
    height: 100%;
    position: absolute;
    top:40%;
    right: 15px;
  }
  .title span{
    margin-left: 15px;
    font-weight: bold;
  }
</style>

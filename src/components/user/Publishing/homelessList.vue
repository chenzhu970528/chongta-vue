<template>
  <div class="inner_ado">
    <div class="tol" v-for="diary in diarys" >
      <el-row class="card">
        <el-col :span="7" class="petPic">
          <div class="pic"></div>
        </el-col>
        <el-col :span="15">
          <p class="title">标题：<span>{{diary.getmes}}</span></p>
          <p>发布类型：流浪</p>
          <p>发布时间：<span>{{diary.homeTime}}</span></p>
          <p>申请人数：<span>4</span></p>
          <el-row>
            <el-col :span="5">详细信息：</el-col>
            <el-col :span="18" >
              <span class="detail">{{diary.detail}}</span>
            </el-col>
          </el-row>
        </el-col>
        <div class="title del">
          <el-popover
            placement="top"
            width="160"
            v-model="visible1">
            <p>确定删除吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible1 = false">取消</el-button>
              <el-button type="primary" size="mini" @click="visible1 = false">确定</el-button>
            </div>
            <el-button slot="reference" icon="el-icon-delete" circle></el-button>
            <!--<el-button slot="reference">删除</el-button>-->
          </el-popover>
        </div>
      </el-row>
    </div>
    <!--<div class="tol" v-for="diary2 in diary2s" >-->
      <!--<el-row class="card">-->
        <!--<el-col :span="7" class="petPic">-->
          <!--<div class="pic"></div>-->
        <!--</el-col>-->
        <!--<el-col :span="15">-->
          <!--<p class="title">标题：<span>{{diary2.lpmes}}</span></p>-->
          <!--<p>发布类型：丢失</p>-->
          <!--<p>发布时间：<span>{{diary2.lpTime}}</span></p>-->
          <!--<p>申请人数：<span>4</span></p>-->
          <!--<el-row>-->
            <!--<el-col :span="5">详细信息：</el-col>-->
            <!--<el-col :span="18" >-->
              <!--<span class="detail">{{diary2.detail}}</span>-->
            <!--</el-col>-->
          <!--</el-row>-->
        <!--</el-col>-->
        <!--<div class="title del">-->
          <!--<el-popover-->
            <!--placement="top"-->
            <!--width="160"-->
            <!--v-model="visible1">-->
            <!--<p>确定删除吗？</p>-->
            <!--<div style="text-align: right; margin: 0">-->
              <!--<el-button size="mini" type="text" @click="visible1 = false">取消</el-button>-->
              <!--<el-button type="primary" size="mini" @click="visible1 = false">确定</el-button>-->
            <!--</div>-->
            <!--<el-button slot="reference" icon="el-icon-delete" circle></el-button>-->
            <!--&lt;!&ndash;<el-button slot="reference">删除</el-button>&ndash;&gt;-->
          <!--</el-popover>-->
        <!--</div>-->
      <!--</el-row>-->
    <!--</div>-->
    <div v-if="isshow" class="noList">
      <img src="../../../assets/user/default8.png" alt="">
      <p>还没有任何发布哦，快去发布吧</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "homelessList",
      data(){
        return{
          visible1: false,
          isshow:false,
          mydata: [],
          mydata2:[],
          diarys: [],
          diary2s:[],
        };
      },
      created() {
        axios.get("http://localhost:3000/homeless").then((result) => {
          // console.log(result.data)
          this.mydata = result.data.data;
          // this.homeTime = result.data.data.homeTime
          // console.log(result.data)
          for (let i = 0; i < this.mydata.length; i++) {
            this.diarys.push(this.mydata[i])
          }
        })
        // axios.get("http://localhost:3000/lostpets").then((result) => {
        //   // console.log(result.data)
        //   this.mydata2 = result.data.data;
        //   // this.homeTime = result.data.data.homeTime
        //   // console.log(result.data)
        //   for (let i = 0; i < this.mydata2.length; i++) {
        //     this.diary2s.push(this.mydata2[i])
        //   }
        // })
      }
    }
</script>

<style scoped>
  .inner_ado{
    width: 80%;
    margin-left: 9%;
    margin-top: 5%;
    position: relative;
    /*background-color: yellow;*/
    min-height: 500px;
    font-size: 13px;
    color: #737373;
  }
  .card{
    width: 100%;
    height: 200px;
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
  .petPic{
    height: 200px;
    /*background-color: red;*/
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

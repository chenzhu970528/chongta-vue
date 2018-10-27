<template>
  <div>
    <div class="fabu" v-if="!isshow">
      <router-link  tag="button" class="btn btn-primary"  to="/adoption/issue" style="list-style: none;text-decoration: none" exact>
        发布
      </router-link>
    </div>
  <div class="inner_ado">
    <div class="tol" v-for="(activity,index) in activitys">
      <el-row class="card">
        <el-col :span="7" class="petPic">
          <div class="pic"></div>
        </el-col>
        <el-col :span="15">
          <p class="title">标题：<span>{{activity.adoTitle}}</span></p>
          <p>发布时间：<span>{{activity.adoTime}}</span></p>
          <p>发布类型：<span>{{activity.adoType1}}</span></p>
          <p>宠物年龄：<span>{{activity.age}}</span></p>
          <p>有意领养者：<span><ado-user :adoid="activity.adoId"></ado-user></span></p>
          <!--<p>申请人数：<span>4</span></p>-->
        </el-col>
          <div class="title del">
            <el-popover
              placement="top"
              width="160"
              v-model="visible2[index]">
              <p>确定删除吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="visible2[index] = false">取消</el-button>
                <el-button type="primary" size="mini" @click="delAdoptions(activity.adoId)">确定</el-button>
              </div>
              <el-button slot="reference" icon="el-icon-delete" circle></el-button>
              <!--<el-button slot="reference">删除</el-button>-->
            </el-popover>
          </div>
      </el-row>
    </div>
    <div v-if="isshow" class="noList">
      <img src="../../../assets/user/default8.png" alt="">
      <p>还没有任何发布哦，快去发布吧</p>
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
    </el-row>
</div>
</template>

<script>
  import adoUser from '../../user/Publishing/adoListUser'
  import axios from 'axios'
    export default {
      name: "adoList",
      components: {
        'ado-user': adoUser,
      },
      data() {
        return {
          visible2: [],
          isshow: false,
          // adolists:[],
          mydata: [],
          userId: this.$store.state.userId,
          centerDialogVisible: false,
          pageIndex: 1,
          pagesize: 3,  //每页条数
          pageCount: 0,
          myActData: [],  //放数据库取得数据
          activitys: []   //方循环的数据
        };
      },
      computed: {
        myActData1() {
          return this.activitys;
        }
      },
      created() {
        this.ajax()
      },
      methods: {
        loadData() {
          this.activitys = [];
          let start = (this.pageIndex - 1) * this.pagesize;
          let end = start + this.pagesize;
          console.log(this.myActData[1]);
          if (end >= this.pageCount) {
            end = this.pageCount
          }
          for (var i = start; i < end; i++) {
            this.activitys.push(this.myActData[i])
          }
        },
        change() {
          return this.loadData();
        },
        ajax() {
          axios.get(this.$store.state.url + `/adoptions/adodetails/${this.userId}`).then((result) => {
            this.mydata = result.data.data;
            for (let i = 0; i < this.mydata.length; i++) {
              this.activitys.push(this.mydata[i]);
              this.visible2.push(false)
            }
            if (result.data.data.length == 0) {
              this.showPic()
            }
          })
        },
        delAdoptions(adoId) {
          let _this = this
          $.ajax({
            url: _this.$store.state.url + "/adoptions/adoDel/" + adoId,
            type: "get",
            success: function (result) {
              try {
                _this.mydata = []
                _this.visible2 = []
                _this.activitys = []
                _this.myActData = []
                _this.ajax()
                _this.ajaxall()
                _this.loadData()
              } catch (e) {
              }
            }
          })
        },
        showPic: function () {
          this.isshow = true
      },
      ajaxall() {
        let _this = this;
        axios.get(this.$store.state.url + `/adoptions/adodetails/${this.userId}`).then((result) => {
          console.log(result.data.data);
          _this.myActData = result.data.data;
          _this.pageCount = _this.myActData.length;
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

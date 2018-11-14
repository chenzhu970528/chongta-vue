<template>
  <div class="inner_ado">
    <div class="tol" v-for="(val,index) in lostlists">
      <el-row class="card">
        <el-col :span="7" class="petPic">
          <div v-if="(img1[index].substring(img1[index].indexOf('.')+1,img1[index].length))!=mp4"
               class="pic"><img :src='url+img1[index]'></div>
          <div v-if="(img1[index].substring(img1[index].indexOf('.')+1,img1[index].length))==mp4"
               class="pic video">
            <video :src='url+img1[index]'></video>
          </div>
        </el-col>
        <el-col :span="15">
             <span   @click="see(val.faId)">
              <router-link tag="a" active-class="active" role="presentation" :to="`/forum/`+val.faId">
          <p class="title">标题：<span>{{val.faTitle}}</span></p>
          </router-link>
          </span>
          <p >发帖人：<span>{{val.userName}}</span></p>

          <p>发布时间：<span>{{val.time.slice(5,16).replace('T',' ')}}</span></p>
          <p class="text">{{val.faText}}</p>

        </el-col>
        <div class="title del">
          <el-popover
            placement="top"
            width="160"
            v-model="visible1[index]">
            <p>确定删除吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button type="primary" size="mini" @click="delLike(val.faId)">确定</el-button>
            </div>
            <el-button slot="reference" icon="el-icon-delete" circle></el-button>
            <!--<el-button slot="reference">删除</el-button>-->
          </el-popover>
        </div>
      </el-row>
    </div>

    <div v-if="isshow" class="noList">
      <img src="../../../assets/user/default8.png" alt="">
      <p>还没有任何收藏哦</p>
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
    <p v-if="hide" class="cc">取消成功</p>
  </div>
</template>


<script>
  import  axios from 'axios'
  import {mapGetters} from 'vuex';

  export default {
    name: "likeList",
    components: {
    },
    data() {
      return {
        visiblelife: false,
        isshow:false,

        visible1:[],
        hide:false,
img:[],
img1:[],
        lostlists:[],
        pageIndex: 1,
        pagesize: 3,  //每页条数
        pageCount:0,
        value: [],//放数据库取得数据
        url:this.$store.state.url,
mp4:'mp4'
      }
    },

    computed: {
      ...mapGetters([
      'UserId',
      'UserName',
    ]),
      myActData1(){
        return this.lostlists;
      }
    },

    methods:{
      loadData() {
        this.lostlists = [];
        let start = (this.pageIndex-1) * this.pagesize;
        let end = start + this.pagesize;
        if(end>=this.pageCount){
          end=this.pageCount
        }
        for (let i = start; i < end; i++) {
          this.lostlists.push(this.value[i])
          this.img1.push(this.img[i])
        }
      },
      change(){
        return this.loadData();
      },
      ajax(){
        let id = this.UserId.replace(/\"/g, "")
        axios.get(this.$store.state.url+`/forumSee/user/like?userId=${id}`).then((result) => {
          this.value=[]
          this.img=[]
          this.img1=[]
          this.value = result.data.data;
          for (let i = 0; i < this.value.length; i++) {
            let img = this.value[i].faImg.split(',')
            this.img.push(img[0].replace('，', ''))
          }
          if( this.value.length<1){
            this.lostlists = [];
            this.showPic()
          }
            this.pageCount=this.value.length;
            this.loadData()
        })
      },
      see(index) {
        let storage = window.localStorage;
        storage.faId = index

      },

      showPic() {
        this.isshow = true
      },
      delLike(faId){
        let _this=this
        let like= {
          faId:faId,
          userId:this.UserId.replace(/\"/g, "")
        }
        $.ajax({
          url: this.$store.state.url+"/forumDel/like/",
          type: "post",
          data: like,
          success: function (result) {
            console.log(result.data)
              _this.visible1=[],
              // _this.publishdets=[],
              _this.ajax()
              _this.show()
          }
        })
        // this.visible2 = false
      },
      show() {
        let _this = this
        _this.hide = true
        setTimeout(function () {
          _this.hide = false
        }, 3000)
      },
    }
    ,
    mounted() {
     this.ajax()
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
  .cc {
    width: 180px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: rgba(60, 60, 60, 0.6);
    border-radius: 3px;
    position: fixed;
    top: 50%;
    left: 60%;
    color: #fefefe;
    font-size: 18px;
    z-index:100;
  }

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
padding-top:10px;

    word-wrap:break-word;
  }
  .tol{
    border-radius: 20px;
    background-color: rgba(255, 255, 255,0.9);
    margin-bottom: 25px;
    /*box-shadow: -2px 2px 10px 0px #eeeeee;*/

  }
  .pic {
    width: 110px;
    height: 110px;
    border-radius: 10px;
    margin-top: 10px;
    margin-left:20px;
  }
  video{
    max-width: 110px;
    max-height: 110px;

  }
  .video{
    width: 110px;
    height: 110px;
    border-radius: 10px;
    overflow:hidden;
    /*border: 1px solid #768dae;*/
    text-align: center;
    background: #5a5a5a;
  }
  .pic img{
    width: 110px;
    height: 110px;
    border-radius: 10px;
  }

  .petPic {
    height: 200px;
    /*background-color: red;*/
  }


  p{
    padding-top: 7px;

    word-wrap:break-word;


  }
  .text{
    word-wrap:break-word;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
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
  a{
    text-decoration: none;
    color: #575757;
  }
</style>

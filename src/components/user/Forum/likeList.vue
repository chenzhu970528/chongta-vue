<template>
  <div class="inner_ado">
    <div class="tol" v-for="(val,index) in value">
      <el-row class="card">
        <el-col :span="7" class="petPic">
          <div class="pic"></div>
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
              <el-button size="mini" type="text" @click="visible1[index] = false">取消</el-button>
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
  </div>
</template>


<script>
  import  axios from 'axios'
  import {mapGetters} from 'vuex';
  import  lifelist from './lifeList.vue'
  import changePage from '../../matchmaking/changepage.vue'
  export default {
    name: "likeList",
    components: {
      'life-list': lifelist,
      'change-page': changePage,
    },
    data() {
      return {
        visiblelife: false,
        isshow:false,
        value: [],
        visible1:[],
        hide:false
      }
    },

    computed: mapGetters([
      'UserId',
      'UserName',
    ]),
    methods:{
      ajax(){
        let id = this.UserId.replace(/\"/g, "")
        axios.get(this.$store.state.url+`/forumSee/user/like?userId=${id}`).then((result) => {
          this.value=[]
          this.value = result.data.data;

        })
      },
      see(index) {
        let storage = window.localStorage;
        storage.faId = index

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
          }
        })
        // this.visible2 = false
      },

    }
    ,
    mounted() {
     this.ajax()
    }
  }
</script>

<style scoped>
  .cc {
    width: 180px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: rgba(60, 60, 60, 0.6);
    border-radius: 3px;
    position: fixed;
    top: 50%;
    left: 70%;
    color: #fefefe;
    font-size: 18px;
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


    word-wrap:break-word;
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

<template>
  <div class="inner_ado">
    <div class="tol" v-for="val in value">
      <el-row class="card">
        <el-col :span="7" class="petPic">
          <div class="pic"></div>
        </el-col>
        <el-col :span="15">
          <p class="title">标题：<span>{{val.faTitle}}</span></p>
          <p >发帖人：<span>{{val.userName}}</span></p>

          <p>发布时间：<span>{{val.time.slice(5,16).replace('T',' ')}}</span></p>
          <p>{{val.faText}}</p>

        </el-col>
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
      }
    },

    computed: mapGetters([
      'UserId',
      'UserName',
    ]),
    mounted() {
      let id = this.UserId.replace(/\"/g, "")
      axios.get(this.$store.state.url+`/forumSee/user/like?userId=${id}`).then((result) => {
        this.value = result.data.data;

      })
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

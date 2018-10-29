<template>
  <div style="margin-left: 35px" >
    <el-row>
      <el-col :span="5" v-for="(diary, index) in diarys" :key="diarys.length" :offset="index > 0 ? 4 : 0">
        <router-link class="list-group-item-info" tag="div" :to="'/adoption/details/'+diary.adoId"><a>
          <el-card :body-style="{ padding: '0px' }">
            <img style="height: 180px" :src="urlImg(diary.adoPic.split(',')[0])" class="image">
            <div style="padding: 14px;">
              <span>{{diary.adoTitle}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ diary.adoAddress }}</time>
              </div>
            </div>
          </el-card>
        </a></router-link>
      </el-col>
    </el-row>

    <button style="margin: 20px auto" type="button" @click="getMore" class="btn btn-default btn-lg btn-block">加载更多
    </button>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "AdoptionList",
    data() {
      return {
        mydata: [],
        diarys: [],
        dalength:0,
        moren:8,
        nomas:false,
        url:this.$store.state.url
      };
    },
    methods: {
      urlImg(str){
        // console.log(this.url+str)
        return this.url+str
      },
      getMore() {
      if(this.nomas) alert('没有更多啦');
        if (this.dalength < 4) {
          this.nomas = true;
          this.diarys = [];
            for (let i = 0; i < this.mydata.length; i++) {
              this.diarys.push(this.mydata[i])
            }
        }else {
          this.dalength -= 4;
          this.moren += 4;
          this.diarys = [];
          this.handleInfo()
        }
      },
      handleInfo(){
        for (let i = 0; i < this.moren; i++) {
          this.diarys.push(this.mydata[i])
        }
      },
    },
    mounted() {
      axios.get(this.$store.state.url+"/adoptions").then((result) => {
        // console.log(result.data)
        this.mydata = result.data.data;
        this.dalength=result.data.data.length-8
        this.handleInfo()
      })
        .catch((err) => {
          console.log(err)
        })
    }
  }
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .el-col {
    margin-left: 25px;
    margin-top: 25px;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .list-group-item-info:hover{
    position: relative;
    left: -10px;
    top:-10px;
    box-shadow:2px 2px 5px 2px #a8a8a8;
  }
  a{
    text-decoration:none;
  }
</style>

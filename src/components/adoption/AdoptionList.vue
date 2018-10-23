<template>
  <div>
    <el-row>
      <el-col :span="7" v-for="(diary, index) in diarys"  :offset="index > 0 ? 3 : 0">
        <router-link tag="div" :to="'/adoption/details/'+diary.adoId"><a>
          <el-card :body-style="{ padding: '0px' }">
            <img :src="douhao(diary.adoPic)" class="image">
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
        moren:6,
        nomas:false
      };
    },
    methods: {
      douhao(str){
        if(str!= null)
        return str.toString().split(",")[0]
      },
      getMore() {
      if(this.nomas) alert('没有更多啦');
        if (this.dalength < 3) {
          this.nomas = true;
          this.diarys = [];
            for (let i = 0; i < this.mydata.length; i++) {
              this.diarys.push(this.mydata[i])
            }
        }else {
          this.dalength -= 3;
          this.moren += 3;
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
      axios.get("http://localhost:3000/adoptions").then((result) => {
        // console.log(result.data)
        this.mydata = result.data.data;
        this.dalength=result.data.data.length-6
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
</style>

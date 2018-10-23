<template>
    <div>
      <el-row>
        <el-col :span="7" v-for="(diary, index) in diarys"  :key="diarys.length" :offset="index > 0 ? 3 : 0">
          <router-link tag="div" :to="'/adoption/details/'+diary.adoId"><a>
            <el-card :body-style="{ padding: '0px' }">
              <img style="height: 250px" :src="douhao(diary.adoPic)" class="image">
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
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "DetailsRecommend",
      data() {
        return {
          mydata: [],
          diarys: [],
        };
      },
      methods:{
        douhao(str){
          if(str!= null)
            return str.toString().split(",")[0]
        }
      },
      created(){
        axios.get("http://localhost:3000/adoptions").then((result) => {
          // console.log(result.data)
          this.mydata = result.data.data;
          var re = Math.round(Math.random()*6)
          for (let i = re; i < re+3; i++) {
            this.diarys.push(this.mydata[i])
          }
        })
      }

    }
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }
  .el-col{
    margin-left:25px;
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

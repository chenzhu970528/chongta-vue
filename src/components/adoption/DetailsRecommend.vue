<template>
    <div>
      <el-row>
        <el-col :span="7" v-for="(diary, index) in diarys"  :key="index" :offset="index > 0 ? 3 : 0">
          <span @click="conts">
          <router-link tag="div" :to="'/adoption/details/'+diary.adoId"><a>
            <el-card :body-style="{ padding: '0px' }">
              <img style="height: 250px" :src="urlImg(diary.adoPic.split(',')[1])" class="image">
              <div style="padding: 14px;">
                <span>{{diary.adoTitle}}</span>
                <div class="bottom clearfix">
                  <time class="time">{{ diary.adoAddress }}</time>
                </div>
              </div>
            </el-card>
          </a></router-link>
          </span>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import store from './store.js'
  import axios from 'axios'
    export default {
        name: "DetailsRecommend",
      data() {
        return {
          mydata: [],
          diarys: [],
          url:this.$store.state.url,
        };
      },
      watch:{
        'cont':'ajax'
      },
      computed:{
        cont(){
          return store.state.cont
        },
      },
      methods: {
        conts(){
          store.commit('getcont')
        },
        urlImg(str) {
          // console.log(this.url+str)
          return this.url + str
        },
        ajax(){

          this.mydata= [],
            this.diarys=[],
          axios.get(this.$store.state.url+"/adoptions").then((result) => {
            // console.log(result.data)
            this.mydata = result.data.data;
            var re = Math.round(Math.random()*((this.mydata.length)/2))
            for (let i = re; i < re+3; i++) {
              this.diarys.push(this.mydata[i])
            }
          })
        }
      },
      mounted(){
       this.ajax()
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
  a{
    text-decoration: none;
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

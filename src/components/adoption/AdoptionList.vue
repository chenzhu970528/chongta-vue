<template>
    <div>
      <el-row>
        <el-col :span="7" v-for="(diary, index) in diarys"  :key="diarys.length" :offset="index > 0 ? 3 : 0">
          <router-link tag="div" :to="'/adoption/details/'+diary.adoId"><a>
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/homeless/u=1177403016,309772193&fm=26&gp=0.jpg" class="image">
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

      <button style="margin: 20px auto" type="button" @click="getMore" class="btn btn-default btn-lg btn-block">加载更多</button>
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
          moren:6,
          dalength:""
        };
      },
      methods:{
          getMore(){
            console.log("delength"+this.dalength)
            if(this.dalength<3){
              this.diarys=[];
              axios.get("http://localhost:3000/adoptions").then((result) => {
                for (let i = 0; i < result.data.data.length ; i++) {
                  this.diarys.push(result.data.data[i])
                }
                console.log('没数据了')
              })
            }else {
              this.dalength-=3;
              this.moren+=3;
              this.diarys=[];
              axios.get("http://localhost:3000/adoptions").then((result) => {
                for (let i = 0; i < this.moren; i++) {
                  this.diarys.push(result.data.data[i])
                }
              })
              // console.log(this.moren)
            }
          }
      },
      mounted(){
          let _this = this
        axios.get("http://localhost:3000/adoptions").then((result) => {
          // console.log(result.data)
          this.mydata = result.data.data;
          this.dalength=result.data.data.length-6
          // console.log(result.data)
          for (let i = 0; i < this.moren; i++) {
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

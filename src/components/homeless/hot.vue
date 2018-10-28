<template>
  <div class="list-group col-xs-4" >
    <div class="button">
      <router-link to="/homeless/publish"><span>发布流浪</span></router-link>
      <router-link to="/homeless/wantadopt"><span>发布寻宠</span></router-link>
    </div>
    <div class="right">
      <div  class="title" >
     <h3 class="line">最新内容</h3>
     <ul class="lie" v-for="diary in diarys">
       <li class="lie1">
         <a href="">
           <span>{{diary.getmes}}</span>
         </a>
       </li>
     </ul>
   </div>
      <div  class="title2" >
            <h3 class="line">推荐</h3>
            <ul class="lie" v-for="diary in diarys">
              <li class="lie1">
                <a href="">
                  <span>{{diary.getmes}}</span>
                </a>
              </li>
            </ul>
          </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "all",
    components:{

    },
    data() {
      return {
        mydata: [],
        diarys: [],
      };
    },

    created() {
      //     let _this = this;
      //     this.$ajax.get(`http://localhost:3000/homeless/${this.id}`
      //     ).then(function (result) {
      //       // console.log(result.data.data.userHeadPic);
      //       _this.mydata = result.data.data.mydata;
      //       _this.diarys = result.data.data.diarys;
      //       _this.homeTime = result.data.data.homeTime.substring(0, 10);
      //     }, function (err) {
      //       console.log(err);
      //   })
      // }
      axios.get(this.$store.state.url+"/homeless").then((result) => {
        // console.log(result.data)
        this.mydata = result.data.data;
        // this.homeTime = result.data.data.homeTime
        // console.log(result.data)
        for (let i = 0; i < this.mydata.length; i++) {
          this.diarys.push(this.mydata[i])
        }
      })
    }
  }
</script>

<style scoped>
  /*div{*/
    /*background-color: palevioletred;*/
  .button{
    margin-bottom: 30px;
    position: relative;
    padding-left: 40%;
    /*background-color: yellow;*/
  }
.img img{
  width: 300px;
  height: 300px;
}
.button span{
  display: inline-block;
  border: 1px solid cornflowerblue;
  font-size: 17px;
  width: 100px;
  background-color: cornflowerblue;
  color:white;
  text-align: center;
  margin-left: 10px;
  border-radius: 5px;
}
  .right{
    float: right;
    width: 350px;
    padding: 0 20px 25px 20px;
    border: 1px solid #E6E6E6;
    box-shadow: 0 0 4px #ECECEC;
    background-color: #FFFFFF;
    min-height: 500px;
  }
  .title{
    /*height: 50px;*/
    /*line-height: 50px;*/
    /*border-bottom: 1px solid #E8E8E8;*/
    /*position: relative;*/
  }
  .line{
    border-bottom: 1px solid #E8E8E8;

  }
  .title2{
    margin-top: 36px;
    /*border-bottom: 1px solid #E8E8E8;*/

  }
  .lie{
    padding: 15px 0 5px 0;
    margin-bottom: -8px;

  }
  .lie1{
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    list-style: none;
  }
.lie1 a{
  display: inline-block;
  width: 260px;
  line-height: 20px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333333;
  font-size: 15px;
}

</style>

<template>
  <div class="list-group col-xs-4" >
    <div class="button">
      <router-link to="/homeless/publish"><span>发布流浪</span></router-link>
      <router-link to="/homeless/wantadopt"><span>发布寻宠</span></router-link>
    </div>
    <div class="list-group-item active">
      热门信息
    </div>
    <div v-for="diary in diarys">
      <router-link  tag="li" active-class="active" role="presentation" :to="'/homeless/details/'+diary.homeId" style="list-style: none" exact>
        <a href="#" class="list-group-item ">
          <span>{{diary.getmes}}</span>
        </a>
      </router-link>
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

</style>

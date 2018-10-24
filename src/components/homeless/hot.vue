<template>
  <div class="list-group col-xs-4" >
    <h3>热门信息</h3>
    <a href="#" class="list-group-item active">
     丢丢丢丢丢丢丢丢丢丢
    </a>
    <div v-for="diary in diarys">
      <router-link  tag="li" active-class="active" role="presentation" :to="'/homeless/details/'+diary.homeId" style="list-style: none" exact>
        <a href="#" class="list-group-item "><span>{{diary.getmes}}</span> </a>
      </router-link>
    </div>
    <div style="width: 1200px;margin-top: 30px"><reward></reward></div>
  </div>

</template>

<script>
  import axios from 'axios'
  import reward from './reward'
  export default {
    name: "all",
    components:{
      'reward':reward
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


</style>

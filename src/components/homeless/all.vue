<template>
<div>

  <div style="margin-top: 30px" class="col-xs-12" v-for="(diary, index) in diarys"  :key="diarys.length" :offset="index > 0 ? 3 : 0">
    <div class="left" style="width: 250px;height: 300px;float: left">
      <router-link  tag="li" active-class="active" role="presentation" to="/homeless/detail" style="float: left;list-style: none" exact><img src="../../assets/homeless/u=1177403016,309772193&fm=26&gp=0.jpg" alt=""></router-link>
    </div>
    <div class="right" style="height: 200px">
      <div class="top" style="margin-left: 200px">
        <div class="title"><span>{{diary.getmes}}</span> &nbsp;<span>{{diary.homeTime}}</span></div>

        <div class="address"><span>地址：{{diary.address}}</span></div>
        <div style="margin-left: 80px;width: 450px;height: 150px;border: 2px solid cadetblue;"><div>{{diary.detail}}</div></div>
        <br>
        <div style="margin-left: 80px;width: 450px"><comment></comment></div>
        <div style="margin-left: 480px"><button>评论</button></div>
      </div>
    </div>

  </div>
  <button style="margin: 20px auto" type="button" class="btn btn-default btn-lg btn-block">加载更多</button>
  <!--<div style="margin-top: 30px" class="col-xs-12">-->
    <!--<div class="left" style="width: 250px;height: 300px;float: left">-->
      <!--<router-link  tag="li" active-class="active" role="presentation" to="/homeless/detail" style="float: left;list-style: none" exact><img src="../../assets/homeless/u=1177403016,309772193&fm=26&gp=0.jpg" alt=""></router-link>-->
    <!--</div>-->
    <!--<div class="right" style="height: 200px">-->
      <!--<div class="top" style="margin-left: 200px">-->
        <!--<div style="margin-left: 80px;width: 150px;height: 30px;border: 1px solid gainsboro;text-align: center;">标题  &nbsp;时间    &nbsp;地点</div>-->
        <!--<div style="margin-left: 80px;width: 450px;height: 150px;border: 2px solid cadetblue;">文字介绍</div>-->
        <!--<br>-->
        <!--<div style="margin-left: 80px;width: 450px"><comment></comment></div>-->
        <!--<div style="margin-left: 480px"><button>评论</button></div>-->
      <!--</div>-->

    <!--</div>-->
  <!--</div>-->
    <!--<div style="margin-top: 30px" class="col-xs-12">-->
      <!--<div class="left" style="width: 250px;height: 300px;float: left">-->
        <!--<router-link  tag="li" active-class="active" role="presentation" to="/homeless/detail" style="float: left;list-style: none" exact><img src="../../assets/homeless/u=1177403016,309772193&fm=26&gp=0.jpg" alt=""></router-link>-->
      <!--</div>-->
      <!--<div class="right" style="height: 200px">-->
        <!--<div class="top" style="margin-left: 200px">-->
          <!--<div style="margin-left: 80px;width: 150px;height: 30px;border: 1px solid gainsboro;text-align: center;">标题  &nbsp;时间    &nbsp;地点</div>-->
          <!--<div style="margin-left: 80px;width: 450px;height: 150px;border: 2px solid cadetblue;">文字介绍</div>-->
          <!--<br>-->
          <!--<div style="margin-left: 80px;width: 450px"><comment></comment></div>-->
          <!--<div style="margin-left: 480px"><button>评论</button></div>-->
        <!--</div>-->

      <!--</div>-->
  <!--</div>-->
</div>

    <!--<li><div style="margin-top: 30px" class="col-xs-12">-->
      <!--<div class="left" style="width: 250px;height: 300px;float: left">-->
        <!--<router-link  tag="li" active-class="active" role="presentation" to="/homeless/detail" style="float: left;list-style: none" exact><img src="../../assets/homeless/u=1177403016,309772193&fm=26&gp=0.jpg" alt=""></router-link>-->
      <!--</div>-->
      <!--<div class="right" style="height: 200px">-->
        <!--<div class="top" style="margin-left: 200px">-->
          <!--<div style="margin-left: 80px;width: 150px;height: 30px;border: 1px solid gainsboro;text-align: center;">标题  &nbsp;时间    &nbsp;地点</div>-->
          <!--<div style="margin-left: 80px;width: 450px;height: 150px;border: 2px solid cadetblue;">文字介绍</div>-->
          <!--<br>-->
          <!--<div style="margin-left: 80px;width: 450px"><comment></comment></div>-->
          <!--<div style="margin-left: 480px"><button>评论</button></div>-->
        <!--</div>-->

      <!--</div>-->
    <!--</div></li>-->

  <!--</ul>-->
  <!--</div>-->

</template>

<script>
  import axios from 'axios'
  export default {
    name: "AdoptionList",
    data() {
      return {
        mydata: [],
        diarys: [],
      };
    },
    created(){
      axios.get("http://localhost:3000/homeless").then((result) => {
        // console.log(result.data)
        this.mydata = result.data.data;
        // console.log(result.data)
        for (let i = 0; i < this.mydata.length; i++) {
          this.diarys.push(this.mydata[i])
        }
      })
    }
  }
</script>

<style scoped>
.left img{
  height: 300px;
  width: 250px;
  cursor: pointer;
}
.title{
  margin-left: 80px;
  width: 450px;height: 30px;
  border: 1px solid gray;
  margin-bottom: 5px;
}
.address{
  margin-left: 80px;
  width: 450px;height: 30px;
  border: 1px solid gray;
  margin-bottom: 5px;
}

  /*.comment{*/
    /*width: 50px;*/
    /*height: 50px;*/
    /*border: 2px solid red;*/
    /*margin-left: 150px;*/
  /*}*/
</style>

<template>
<div>
  <div>
  <div class="listbox clearfix" v-for="diary in diarys"style="margin-bottom: 10px"  >
      <div class="listimg img" style="float: left">
        <router-link  tag="li" active-class="active" role="presentation" :to="'/homeless/details/'+diary.homeId" style="float: left;list-style: none;cursor: pointer" exact>
        <img src="../../assets/homeless/1.jpg" alt="" style="width: 150px;height: 140px;">
        </router-link>
      </div>
      <div class="listInfo"   >
        <router-link  tag="li" active-class="active" role="presentation" :to="'/homeless/details/'+diary.homeId" style="float: left;list-style: none;cursor: pointer" exact>
        <h4>{{diary.getmes}}</h4>
        </router-link>
        <div class="address">
          <div><span>地址：</span><span>{{diary.address}}</span> <br>
            <span>简述：</span><span>{{diary.detail}}</span></div>

        </div>

      </div>
      <div class="listCell">
        <router-link  tag="li" active-class="active" role="presentation" :to="'/homeless/details/'+diary.homeId" style="list-style: none;cursor: pointer" exact>
          <span class="glyphicon glyphicon-earphone"> 联系{{diary.userName}}</span>
        </router-link>

      </div>
    </div>

  </div>
  <button style="margin: 20px auto" type="button" class="btn btn-default btn-lg btn-block">加载更多</button>
</div>
<!--</div>-->

</template>

<script>
  import axios from 'axios'
  export default {
    name: "all",
    data() {
      return {
        mydata: [],
        diarys: [],
        homeTime:[]
      };
    },
    created() {
      axios.get("http://localhost:3000/homeless").then((result) => {
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
  .listInfo {
    width: 380px;
    height: auto;
    float: left;
    margin-left: 20px;
    display: block;
    margin-top: 10px;
  }
  .listInfo span{
    font-size: 20px;
  }
  .listbox {
    border-bottom: 1px solid #e1e1e1;
  }
  .clearfix {
    display: block;
  }
  a{color: #000;
    text-decoration: none;
    cursor: pointer;
    outline: 0;
  }
  .listCell {
    width: 150px;
    float: right;
    display: block;
    height: 40px;
    line-height: 40px;
    background-color: #9bc9f1;
    color: #fff;
    font-weight: 700;
    margin: 50px 30px 0 0;
    font-size: 16px;
    text-align: center;
  }
  .listInfo h4 {
    width: 480px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 20px;
  }

  .listInfo .des dl {
    color: #999;
    width: 440px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .address span {
    font: 17px/2 "微软雅黑",Arial;
    color: #666;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .clearfix:hover{
    position: relative;
    left: -10px;
    top:-10px;
    box-shadow:2px 2px 5px 2px #a8a8a8;
  }


/*.left img{*/
  /*height: 300px;*/
  /*width: 250px;*/
  /*cursor: pointer;*/
/*}*/
/*.title{*/
  /*margin-left: 80px;*/
  /*width: 450px;height: 30px;*/
  /*border: 1px solid gray;*/
  /*margin-bottom: 5px;*/
/*}*/
/*.address{*/
  /*margin-left: 80px;*/
  /*width: 450px;height: 30px;*/
  /*border: 1px solid gray;*/
  /*margin-bottom: 5px;*/
/*}*/

  /*.comment{*/
    /*width: 50px;*/
    /*height: 50px;*/
    /*border: 2px solid red;*/
    /*margin-left: 150px;*/
  /*}*/
</style>

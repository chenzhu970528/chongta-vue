<template>
  <div >
  <!--<router-link  tag="li" active-class="active" role="presentation" :to="'/homeless/details/'+diary.homeId" style="list-style: none;cursor: pointer" exact>-->
  <ul class="list-group" >
    <li class="list-group-item list-group-item-info" v-for="diary in diarys" style="margin-bottom: 10px" >
      <div><span>标题：{{diary.lpmes}}</span></div>
      <div><span>地点：{{diary.address}}</span></div>
      <div><span>奖赏：{{diary.reward}}</span></div>
    </li>
  </ul>
  <!--</router-link>-->
  </div>
  <!--<div>-->
  <!--<el-collapse  accordion v-for="diary in diarys" >-->
    <!--<el-collapse-item title="努力寻找中：" >-->
      <!--<div>标题：<span>{{diary.lpmes}}</span></div>-->
      <!--<div>地点：<span>{{diary.detail}}</span></div>-->
      <!--<div>奖赏：<span>{{diary.reward}}</span>-->
        <!--<div style="position: absolute;right: 2px"><span>{{diary.lpTime}}</span></div></div>-->
    <!--</el-collapse-item>-->
  <!--</el-collapse>-->
    <!--</div>-->
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        mydata: [],
        diarys: [],
      };
    },
    created() {
      axios.get(this.$store.state.url+"/homeless/lostpets").then((result) => {
        this.mydata = result.data.data;
        for (let i = 0; i < this.mydata.length; i++) {
          this.diarys.push(this.mydata[i])
        }
      })
    }
  }
</script>

<style scoped>
  .list-group-item-info:hover{
  position: relative;
  left: -10px;
  top:-10px;
  box-shadow:2px 2px 5px 2px #a8a8a8;
}
</style>

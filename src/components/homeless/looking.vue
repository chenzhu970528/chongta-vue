<template>
  <div>
  <el-collapse  accordion v-for="diary in diarys" >
    <el-collapse-item title="努力寻找中："  >
      <div>标题：<span>{{diary.lpmes}}</span></div>
      <div>地点：<span>{{diary.detail}}</span></div>
      <div>奖赏：<span>{{diary.reward}}</span>
        <div style="position: absolute;right: 2px"><span>{{diary.lpTime}}</span></div></div>
    </el-collapse-item>
  </el-collapse>
    </div>
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
      axios.get("http://localhost:3000/homeless/lostpets").then((result) => {
        this.mydata = result.data.data;
        for (let i = 0; i < this.mydata.length; i++) {
          this.diarys.push(this.mydata[i])
        }
      })
    }
  }
</script>

<style scoped>

</style>

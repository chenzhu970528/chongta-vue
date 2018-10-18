<!--婚介详情-->
<template>
  <div>
    <div class="cont container">
      <current-way></current-way>
      <h2>{{Mdeldata.title}}</h2>
      <div class="row firstrow">
        <div class="col-xs-10 col-xs-offset-1 cent">
          <sowing-map></sowing-map>
          <match-message></match-message>
          <div class="aply">
            <m-aply></m-aply>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-10 col-xs-offset-1 cent msg">
        寄语
        </div>
      </div>
      <br>
      <br>
      <br>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import maply from './maply.vue'
  import currentway from './currentway'
  import sowingmap from './sowingmap.vue'
  import  matchmsg from './matchmeg.vue'
    export default {
      name: "matchDel",
      components: {
        'current-way': currentway,
        'sowing-map': sowingmap,
        'match-message': matchmsg,
        'm-aply': maply,
      },
      data() {
        return {
          pickerOptions1: {
            disabledDate(time) {
              return time.getTime() > Date.now();
            },
            shortcuts: [{
              text: '今天',
              onClick(picker) {
                picker.$emit('pick', new Date());
              }
            }, {
              text: '昨天',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', date);
              }
            }, {
              text: '一周前',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', date);
              }
            }]
          },
          value1: '',
          value2: '',
          input10: '',
          relId:this.$route.params.relId,
          Mdeldata:[],
        };
      },
      created(){
        axios.get(`http://localhost:3000/matchmaking/matchdetail/${this.relId}`).then((result) => {
          console.log(result.data.data[0])
          this.Mdeldata = result.data.data[0];
        })
      }
    };
</script>

<style scoped>
  .cont{
    width: 1240px;
    background:rgba(255,255,255,0.9);
    margin-top:100px ;
    box-shadow:-2px 2px 10px 2px #bcbcbc;
  }
  .cent{
    /*background-color: orange;*/
  }
  .msg{
    margin-top: 10px;
  }
  h2{
    color: #6b6b6b;
    margin-left: 18px;
  }
  .firstrow{
    margin-top: 30px;
  }

</style>

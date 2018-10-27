<template>
  <!--搜索-->
  <div class="row">

    <div class="col-sm-4">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="请输入搜索内容" v-model="aa">
        <span class="input-group-btn">
          <span v-if="aa.length==0" >
        <button  class="btn btn-default" type="button">
        <span class="glyphicon glyphicon-search"></span>
        </button>
        </span>
<!--</span>-->
        <span v-if="aa.length>0">
          <router-link  tag="a" active-class="active" role="presentation" :to="`/forum/result/`+aa">
        <button @click="ss" class="btn btn-default" type="button">
        <span class="glyphicon glyphicon-search"></span>
        </button>
        </router-link>
      </span>
      </span>

      </div>
    </div>

  </div>
</template>

<script>
  import store from './store.js'

  export default {
    name: "Com_d",
    data() {
      return {
        input10: '',
        aa: '',
      }
    },
    methods: {
      ss() {
        let storage=window.localStorage;
        let val=this.aa
        storage.plate=4
        storage.text=val
        // this.$router.go(0)  //点击刷新当前页面
        }

      },
  }
</script>

<style scoped>
  .row {
    width: 400px;
    height: 45px;
    margin-bottom: 10px;
    position: relative;
    left: 840px;
  }

  .form-control {
    width: 323px;
    margin-right:-3px;
  }

  .ul > li {
    height: 30px;
    line-height: 30px;
    margin: 0;
  }
  .cc {
    width: 180px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: rgba(60, 60, 60, 0.6);
    border-radius: 3px;
    position: fixed;
    top: 50%;
    left: 48%;
    color: #fefefe;
    font-size: 18px;
  }

</style>

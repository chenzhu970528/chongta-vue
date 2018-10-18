<template>
  <div class="hot col-xs-3">
    <p> <span>|</span> 最受欢迎小可爱</p>
    <!--<hr>-->
    <hot-list></hot-list>
  </div>
</template>

<script>
  import hotlist from './hotlist.vue'
  export default {
    name: "match-hot",
    components:{
      'hot-list':hotlist
    }
  }
</script>

<style scoped>
  .hot{
    height: 500px;
    position: relative;
    right: -30px;
    top: -200px;
    border: 2px dashed palevioletred;
  }
  hr{
    border: 1px solid palevioletred;
  }
  .hot p{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    position: relative;
    top: 8px;
    color: #c56787;
  }
  span span{
    font-size: 40px;
  }
</style>

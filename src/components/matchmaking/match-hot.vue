<template>
  <div class="hot">
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
    width: 320px;
    height: 500px;
    position: absolute;
    right: 10px;
    top: 430px;
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

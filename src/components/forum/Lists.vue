<template>
  <div class="body">
    <div class="top"></div>
    <div id="content">
      <div>
        <div class="left">
          <list></list>
        </div>
        <div class="right">
          <ranking></ranking>
        </div>
      </div>
    </div>
    <div class="foot">
      <foot-black></foot-black>
    </div>
  </div>

</template>

<script>
  import List from './List'
  import Ranking from './Ranking'
  import Com_paging from './Com_paging'
  import Com_d from './Com_d.vue'
  import  footBlack from '../../components/footBlack.vue'
  export default {
    name: "Lists",
    components: {
      'list': List,
      'ranking': Ranking,
      'com_paging': Com_paging,
      'com_d': Com_d,
      'foot-black':footBlack
    }
  }
</script>

<style scoped>
  body {
    margin: 0;
    padding: 0
  }
.body{
  position: relative;
  width:100%;
  min-width:1240px;
  min-height: 1000px;
  background-color: #f6f6f6;
  margin:-200px 0;
}
  #content {

    width: 1240px;
    margin: auto;
    margin-top:100px;
    position: relative;
    padding-top:180px;
    padding-bottom: 0px;

  }
  .top {
    background: white;
    height:100px;
    margin-top:110px;
    margin-bottom:-250px;
    /*box-shadow: -2px 2px 10px 2px #f8f8f8;*/
  }
  .left {
    display: inline-block;
    width: 830px;
   position: relative;
    top:-20px;
  }

  .right {
    position: absolute;
    top: 24px;
    right: 25px;
    width: 360px;
    margin-top:65px;
    z-index: 0;
  }
  .foot{
    position: absolute;
    bottom:0px;
    width:100%;
  }

</style>

<template>
  <div>
    <div id="content">
      <p>&nbsp</p>
      <div>
        <recommend>精品推荐</recommend>
      </div>
      <com_d></com_d>
      <div>
        <div class="left">
          <block></block>
        </div>
        <div class="right">
          <ranking></ranking>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Block from './Block.vue'
  import Com_b from './Com_b.vue'
  import Com_d from './Com_d.vue'
  import Ranking from './Ranking'
  import Recommend from './Recommend.vue'
  export default {
    name: "Communication",
    components: {
      'block': Block,
      'com_b': Com_b,
      'ranking':Ranking,
      'com_d': Com_d,
      'recommend': Recommend,

    },
    data :function (){
      return{

      }
    },
  }
</script>

<style scoped>
  body {
    margin: 0;
    padding: 0
  }

  #content {
    box-shadow: -2px 2px 10px 2px #bcbcbc;
    background: rgba(255, 255, 255, 0.9);
    width: 1240px;
    margin: auto;
    position: relative;
    padding-bottom: 200px;
    margin-top:150px;
  }

  .body {
    padding: 0 10px;
    margin: 10px 0;
  }

  .row {
    margin-left: 0;
    margin-right: 0;
  }

  .left {
    display: inline-block;
    width: 830px;
  }

  .right {
    display: inline-block;
    right: 60px;
    position: absolute;
    width: 360px;
    margin-top: 10px;
    margin-right: -35px;
  }


</style>

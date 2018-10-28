<template>
  <div id="content">
    <div class="top">
    </div>
    <div>
        <div class="left">
          <list></list>
        </div>

        <div class="right">
        <ranking></ranking>

      </div>

    </div>
  </div>
</template>

<script>
  import List from './List'
  import Ranking from './Ranking'
  import Com_paging from './Com_paging'
  export default {
    name: "Lists",
    components: {
      'list': List,
      'ranking': Ranking,
      'com_paging': Com_paging,
    }
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
    margin-top:100px;
    position: relative;
    padding-top:30px;
    padding-bottom: 200px;
  }
.top{
  margin-left:15px;
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
  }


</style>

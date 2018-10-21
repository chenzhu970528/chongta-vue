<template>
    <div class="showList">
      <img src="../../assets/user/default8.png" alt="">
      <p>还没有任何发布哦，快去发布吧</p>
    </div>
</template>

<script>
    export default {
        name: "noList"
    }
</script>

<style scoped>
  .noList{
    display: none;
    text-align: center;
    color: #575757;
    position: relative;
    top:-500px;
  }
  .showList{
    text-align: center;
    color: #575757;
    position: relative;
    top:-500px;
  }
</style>

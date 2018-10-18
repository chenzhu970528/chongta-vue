<template>
  <div class="container">
    <el-table
      v-loading="loading"
      :data="tableData"
      style="width: 100%">
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "register",
    components: {

    }
  }
</script>

<style scoped>
  .container{
    background: url('../assets/homeless/bg1.jpg');
    width: 100%;
    position: absolute;
    left: 0px;
    top: 70px;
  }
  body {
    margin: 0;
  }
</style>

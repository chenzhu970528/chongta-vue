<template>
    <div class="" id="foot">
      <ul>
        <li>关于我们</li>
        <li>加入我们</li>
        <li>商务合作</li>
        <li>免责声明</li>
      </ul>
      <p>&copy; CopyRight 2018 宠它</p>
    </div>
</template>

<script>
    export default {
        name: "foot"
    }
</script>

<style scoped>
  #foot{
    height: 150px;
    width: 100%;
    text-align: center;
    /*margin-top: 80px;*/
    /*background: #4f4f4f;*/
  }
  ul{
    position: relative;
    bottom: 30px;
    list-style: none;
    padding-top: 100px;
    color: white;
    width: 500px;
    margin: 10px auto;
  }
  ul li{
    display: inline-block;
  }
  p{
    position: relative;
    bottom: 30px;
    color: white;
    width: 300px;
    margin: 10px auto;
  }
</style>

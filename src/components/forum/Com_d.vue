<template>
  <!--搜索-->
  <div class="row">
    <div class="dropdown col-sm-3">
      <button class="btn btn-default dropdown-toggle width" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        交流分享
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu width ul" aria-labelledby="dropdownMenu1">
        <li class="width">交流分享</li>
        <li class="width">宠物日记</li>
      </ul>
    </div>
    <div class="col-sm-6">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="输入关键字搜索内容">
        <span class="input-group-btn">
        <button class="btn btn-default" type="button">
          <span class="glyphicon glyphicon-search"></span></button>
      </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Com_d",
    data() {
      return {
        input10: ''
      }
    }
  }
</script>

<style scoped>
  .row {
    width: 400px;
    height: 45px;
    margin-bottom:10px;
    position: relative;
    left: 740px;
  }
  .form-control{
    width: 320px;

  }
  #dropdownMenu1,.dropdown-menu,.width{
    width:85px;
    min-width:90px;
    text-align: center;
    font-size:14px;
  }
  .dropdown-menu,.width{
    width:80px;
     min-width:70px;
   }
.ul{
  position: relative;
  left:0px;
  height:70px;
}
  .ul>li{
    height: 30px;
    line-height: 30px;
    margin:0;
  }
</style>

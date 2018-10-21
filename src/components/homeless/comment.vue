<template>
    <div>
      <div>
        <textarea class="transition"></textarea>
      </div>
      <input id="postBt" type="button" style="border:none; background-color:#3EADC5; color:white;border-radius:5px; width:80px; height:30px;" value="发表留言"/>
      <input id="clearBt" type="button" style="border:none; background-color:#3EADC5; color:white;border-radius:5px; width:80px; height:30px;" value="清空"/>
    </div>
</template>

<script>
    export default {
        name: "comment"
    }
</script>

<style scoped>
  .transition{-webkit-transition:all 0.5s linear; -moz-transition:all 0.5s linear;
              -o-transition:all 0.5s linear; -ms-transition:all 0.5s linear;
              transition:all 0.5s linear;
  }

</style>

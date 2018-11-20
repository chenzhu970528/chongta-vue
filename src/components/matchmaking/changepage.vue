<!--换页-->
<template>
  <div>
    <el-pagination
      class="el-pager"
      background-color="transparent"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="10"
      layout="prev, pager, next, jumper"
      :total="300">
    </el-pagination>
  </div>

</template>

<script>
    export default {
        name: "changepage",
      methods: {
        handleSizeChange(val) {
          // console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          // console.log(`当前页: ${val}`);
        }
      },
      data() {
        return {
          currentPage3: 1,
        };
      }
    }
</script>

<style scoped>
  div{
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .el-pager li{
    padding: 0 40px;
    background-color: transparent;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    box-sizing: border-box;
  }

</style>

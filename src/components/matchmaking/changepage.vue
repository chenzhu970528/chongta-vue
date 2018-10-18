<!--换页-->
<template>
    <el-pagination
      background-color="transparent"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="10"
      layout="prev, pager, next, jumper"
      :total="300">
    </el-pagination>
</template>

<script>
    export default {
        name: "changepage",
      methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
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

</style>

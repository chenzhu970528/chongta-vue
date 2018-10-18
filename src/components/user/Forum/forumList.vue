<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      </el-col>
      <el-col :span="10">
        标题
      </el-col>
      <el-col :span="5">发布时间</el-col>
      <el-col :span="5">操作</el-col>
    </el-row>

      <el-row v-for="city in cities" :label="city" >
        <el-checkbox-group v-model="checkedCities">
        <el-col :span="4">
          <el-checkbox :label="city"> </el-checkbox>
        </el-col>
        </el-checkbox-group>
        <el-col :span="10">
          ffgdfgaddddddddd
        </el-col>
        <el-col :span="5">2018/7/5</el-col>
        <el-col :span="5">shanchu</el-col>
      </el-row>

  </div>

</template>

<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
    export default {
        name: "forumList",
      data() {
        return {
          checkAll: false,
          checkedCities: ['上海', '北京'],
          cities: cityOptions,
          isIndeterminate: true
        };
      },
      methods: {
        handleCheckAllChange(val) {
          this.checkedCities = val ? cityOptions : [];
          this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
          let checkedCount = value.length;
          this.checkAll = checkedCount === this.cities.length;
          this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        }
      }
    }
</script>

<style scoped>

</style>

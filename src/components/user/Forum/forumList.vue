<template>
  <div>
    <el-row class="row1">
      <el-col :span="4">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      </el-col>
      <el-col :span="10">
        标题
      </el-col>
      <el-col :span="5">发布时间</el-col>
      <el-col :span="5">操作</el-col>
    </el-row>
    <el-row v-for="city in cities" :label="city" class="list">
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
          checkedCities: [],
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
  .row1{
    font-size: 16px;
    font-weight: bolder;
    margin-top: 50px;
    text-align: center;
    background-color: grey;
  }
  .list{
    font-weight: normal;
    font-size: 14px;
  }
</style>

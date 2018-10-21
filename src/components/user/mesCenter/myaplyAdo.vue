<template>
  <div>
    <el-row style="text-align: center">
      <el-col :span="6">
        <el-col :span="12">分布人</el-col></el-col>
      <el-col :span="7">标题</el-col>
      <el-col :span="7">发布时间</el-col>
      <el-col :span="4">操作</el-col>
    </el-row>
    <el-row style="text-align:center;margin-top: 20px;line-height: 40px;" v-for="(myAply,index) in showmyAply" :key="showmyAply.length">
      <el-col :span="6">
        <el-col :span="12">头像</el-col>
        <el-col :span="12">{{myAply.username}}</el-col>
      </el-col>
      <el-col :span="7">{{myAply.title}}</el-col>
      <el-col :span="7">{{myAply.relTime}}</el-col>
      <el-col :span="4">
        <el-popover
          placement="top"
          v-model="visiblematch[index]">
          <p>确定删除吗？</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visiblematch[index] = false">取消</el-button>
            <el-button type="primary" size="mini" @click="visiblematch[index] = false">确定</el-button>
          </div>
          <el-button slot="reference" icon="el-icon-delete" circle></el-button>
          <!--<el-button slot="reference">删除</el-button>-->
        </el-popover>
      </el-col>
    </el-row>
    <div v-if="isshow" class="noList">
      <img src="../../../assets/user/default8.png" alt="">
      <p>还没有任何发布哦，快去发布吧</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "myaplyAdo",
      data(){
          return{
            visiblematch:[],
            isshow:false,

          }
      },
      methods:{
        showPic:function () {
          // if(this.matchlist.length=0){
          this.isshow=true
          // }
        }
      }
    }
</script>

<style scoped>
  div{
    color: #575757
  }
</style>

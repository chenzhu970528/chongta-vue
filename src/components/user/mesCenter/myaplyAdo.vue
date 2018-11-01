<template>
  <div>
    <el-row style="text-align: left;font-size: 16px;font-weight: bold" v-if="!isshow">
      <el-col :span="8">标题</el-col>
      <el-col :span="7">申请时间</el-col>
      <el-col :span="5">状态</el-col>
      <el-col :span="4">操作</el-col>
    </el-row>
    <div id="scroll">
      <el-row style="text-align:left;margin-top: 20px;line-height: 40px;" v-for="(myAply,index) in showmyAply" :key="index">
        <el-col :span="8"><router-link :to="'/adoption/details/'+myAply.adoId" class="linnk">{{myAply.adoTitle}}</router-link></el-col>
        <el-col :span="7">{{myAply.addTime}}</el-col>
        <el-col :span="5" style="color: #ede2bb">{{myAply.agree}}</el-col>
        <el-col :span="4">
          <el-popover
            placement="top"
            v-model="visiblematch[index]">
            <p>确定删除吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visiblematch[index] === false">取消</el-button>
              <el-button type="primary" size="mini" @click="deleate(myAply.addId)">确定</el-button>
            </div>
            <el-button slot="reference" icon="el-icon-delete" circle></el-button>
          </el-popover>
        </el-col>
      </el-row>
    </div>
    <div v-if="isshow" class="noList">
      <img src="../../../assets/user/default8.png" alt="">
      <p>还没有任何发布哦，快去发布吧</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "myaplyAdo",
      data(){
          return{
            visiblematch:false,
            isshow:false,
            userId: this.$store.state.userId,
            showmyAply:[],
            mydata:[],
          }
      },
      created() {
        this.ajax()
      },
      methods:{
        showPic:function () {
          // if(this.matchlist.length=0){
          this.isshow=true
          // }
        },
        ajax() {
          axios.get(this.$store.state.url + `/adoptions/getaply/${this.userId}`).then((result) => {
            this.mydata = result.data.data;
            // console.log(this.mydata);
            for (let i = 0; i < this.mydata.length; i++) {
              this.showmyAply.push(this.mydata[i]);
              // this.visiblematch.push(false);
              if(this.showmyAply[i].agree==='1'){
                this.showmyAply[i].agree='已被领养成功'
              }else this.showmyAply[i].agree='待领养'
            }
            if (result.data.data.length == 0) {
              this.showPic()
            }
          })
        },
        deleate(addId) {
          let _this = this
          $.ajax({
            url: _this.$store.state.url + "/adoptions/adoDelApply/"+addId,
            type: "get",
            success: function (result) {
              try {
                _this.mydata = []
                _this.visiblematch = []
                _this.activitys = []
                _this.showmyAply=[]
                _this.ajax()
              } catch (e) {
              }
            }
          })
        },
      },
    }
</script>

<style scoped>
  #scroll {
    max-height: 750px;
    margin-top: 30px;
    overflow: auto;
  }

  #scroll::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  #scroll::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 2px;
  }

  #scroll::-webkit-scrollbar-thumb {
    background: #bababa;
    border-radius: 2px;
  }

  #scroll::-webkit-scrollbar-thumb:hover {
    background: #747474;
  }

  #scroll::-webkit-scrollbar-corner {
    background: #f6f6f6;
  }
  div{
    color: #575757
  }
  .linnk{
    color: #575757;
  }
  .linnk:hover{
    text-decoration: none;
    color: #cdd7ed;
  }
  .noList{
    text-align: center;
    color: #575757;
    /*position: relative;*/
    /*top:-500px;*/
  }
</style>

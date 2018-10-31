<template>
    <div>
      <el-row style="text-align: left;font-size: 16px;font-weight: bold" v-if="!isshow">
        <el-col :span="8">标题</el-col>
        <el-col :span="7">申请时间</el-col>
        <el-col :span="5">状态</el-col>
        <el-col :span="4">操作</el-col>
      </el-row>
      <div id="scroll">
        <el-row style="text-align:left;margin-top: 20px;line-height: 40px;" v-for="(myAply,index) in showmyAply">
          <el-col :span="8"><router-link class="linnk" :to="'/matchmaking/matchDel/'+myAply.matId">{{myAply.title}}</router-link></el-col>
          <el-col :span="7">{{myAply.maplyTime}}</el-col>
          <el-col :span="5">状态</el-col>
          <el-col :span="4">
            <el-popover
              placement="top"
              v-model="visiblematch[index]">
              <p>确定删除吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="visiblematch[index] = false">取消</el-button>
                <el-button type="primary" size="mini" @click="deleate(myAply.aplyId,myAply.matId)">确定</el-button>
              </div>
              <el-button slot="reference" icon="el-icon-delete" circle></el-button>
              <!--<el-button slot="reference">删除</el-button>-->
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
      name: "myaplyMatch",
      data(){
        return{
          visiblematch:[],
          isshow:false,
          showmyAply:[],
          myAplydata:[],
          userId: this.$store.state.userId,
        }
      },
      created() {
        this.ajax()
      },
      // created(){
      //   axios.get(this.$store.state.url+`/matchmaking/${this.userId}/sendaply`).then((result) => {
      //     this.myAplydata = result.data.data[0];
      //     // console.log(result.data.data[0]);
      //     for (let i = 0; i < this.myAplydata.length; i++) {
      //       this.showmyAply.push(this.myAplydata[i]);
      //       this.visiblematch.push(false)
      //     }
      //     if(result.data.data[0].length==0){
      //       this.showPic()
      //       // _this.isshow=true
      //     }
      //   })
      // },
      methods:{
        ajax(){
          axios.get(this.$store.state.url+`/matchmaking/${this.userId}/sendaply`).then((result) => {
            this.myAplydata = result.data.data[0];
            // console.log(result.data.data[0]);
            for (let i = 0; i < this.myAplydata.length; i++) {
              this.showmyAply.push(this.myAplydata[i]);
              this.visiblematch.push(false)
            }
            if(result.data.data[0].length==0){
              this.showPic()
              // _this.isshow=true
            }
          })
        },
        showPic:function () {
          // if(this.matchlist.length=0){
          this.isshow=true
          // }
        },
        deleate(aplyId,matId) {
          let _this = this
          $.ajax({
            url: _this.$store.state.url + "/matchmaking/delaply/"+aplyId+"/"+matId,
            type: "get",
            success: function (result) {
              try {
                _this.mydata = [];
                _this.visiblematch = [];
                _this.myAplydata = [];
                _this.showmyAply=[];
                console.log('删除成功')
                _this.ajax()
              } catch (e) {
              }
            }
          })
        },
      }
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

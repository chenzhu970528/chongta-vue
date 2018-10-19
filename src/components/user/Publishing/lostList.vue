<template>
  <div class="inner_ado">
    <div class="tol">
      <el-row class="card">
        <el-col :span="7" class="petPic">
          <div class="pic"></div>
        </el-col>
        <el-col :span="15">
          <p class="title">标题：<span>一只可爱的小喵</span></p>
          <p>发布时间：<span>2018/09/24</span></p>
          <p>申请人数：<span>4</span></p>
          <el-row>
            <el-col :span="5">详细信息：</el-col>
            <el-col :span="18" >
              <span class="detail">水电费健康和飞机晒覅U盾和数据库表查询即可部件汉化in的哈你好啊</span>
            </el-col>
          </el-row>
        </el-col>
        <div class="title del">
          <el-popover
            placement="top"
            width="160"
            v-model="visiblelost">
            <p>确定删除吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visiblelost = false">取消</el-button>
              <el-button type="primary" size="mini" @click="visiblelost = false">确定</el-button>
            </div>
            <el-button slot="reference" icon="el-icon-delete" circle></el-button>
            <!--<el-button slot="reference">删除</el-button>-->
          </el-popover>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "lostList",
      data(){
        return{
          visiblelost: false,
        }
      }
    }
</script>

<style scoped>
  .inner_ado{
    width: 80%;
    margin-left: 9%;
    margin-top: 5%;
    position: relative;
    /*background-color: yellow;*/
    min-height: 500px;
    font-size: 13px;
    color: #737373;
  }
  .card{
    width: 100%;
    height: 200px;
  }
  .tol{
    border-radius: 20px;
    background-color: rgba(255,255,255,0.5);
  }
  .pic{
    width: 110px;
    height: 110px;
    border-radius: 110px;
    background: -10px -10px url("../../../assets/match/mao1.jpg");
    margin-top: 20px;
    margin-left: 10px;
  }
  .petPic{
    height: 200px;
    /*background-color: red;*/
  }

  p{
    padding-top: 7px;
  }
  .detail{
    display: inline-block;
    /*height: 70px;*/
    overflow: hidden;
    /*background-color: plum;*/
    text-overflow: ellipsis;
  }
</style>

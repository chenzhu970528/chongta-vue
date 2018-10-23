<template>
  <div >
    <ul class="list-group">
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-piggy-bank" aria-hidden="true"> 宠物类型：</span> {{jsondata1.petType}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-glass" aria-hidden="true"> 宠物性别：</span> {{jsondata1.sex?'公':'母'}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-time" aria-hidden="true" value-format="yyyy-MM-dd HH:mm:ss"> 发布时间：</span> {{jsondata1.adoTime}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-map-marker" aria-hidden="true"> 地址：</span> {{jsondata1.adoAddress}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-user" aria-hidden="true"> 联系人：</span> {{jsondata1.realName}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-earphone" aria-hidden="true"> 联系电话：</span> {{jsondata1.userPhone}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-heart-empty"  aria-hidden="true"> 有意领养者：</span>
        <span style=" margin-left: 10px" v-for="diary in diarys">
          <el-popover
            placement="right"
            width="400"
            trigger="click">
            <h4>基本信息</h4>
            <dl>
              <dd>
              <span class="glyphicon glyphicon-user" aria-hidden="true"> 联系人：</span>{{diary.realName}}
              </dd>
              <dd>
              <span class="glyphicon glyphicon-retweet" aria-hidden="true"> 性别：</span>{{diary.sex?'男':'女'}}
              </dd>
              <dd>
              <span class="glyphicon glyphicon-phone" aria-hidden="true"> 手机号：</span>{{diary.userPhone}}
              </dd>
              <dd>
              <span class="glyphicon glyphicon-envelope" aria-hidden="true"> 邮箱：</span>{{diary.userEmail}}
              </dd>
            </dl>
            <el-button type="text" style="margin-left: 0px" slot="reference">{{diary.userName}}</el-button>
            </el-popover>
        </span>
      </li>
    </ul>
    <el-button type="primary" @click="islogin">我想领养<i class="el-icon-success el-icon--right"></i></el-button>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <span>点击确认我们将把你的联系方式交给发布者，确认请点击</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="wantAdo">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "DetailsInfo",
      data(){
          return{
            centerDialogVisible: false,
            userId:this.$store.state.userId,
            adoId:this.$route.params.adoId,
            // 详细信息
            jsondata1:[],
            // 所有有意领养者
            jsondata2:[],
            // 遍历出的有意领养者
            diarys:[]
          }
      },
      methods:{
        // 登录验证
        islogin(){
          if(!this.$store.state.isLogin) {
            alert("请登录后提交")
            return false
          }else {
           this.centerDialogVisible = true
          }
        },
        wantAdo(){
          this.centerDialogVisible = false
          let _this = this
          $.ajax({
            url: "http://localhost:3000/adoptions/adoAddApply",
            type: "post",
            data: {
              userId: _this.userId,
              adoId:_this.adoId,
            },
            success: function (result) {
              // console.log(result)
              alert('提交成功')
            }
          })
        }
      },
      created(){
        axios.get(`http://localhost:3000/adoptions/details/${this.adoId}`).then((result) => {
          // console.log(result.data)
          this.jsondata1 = result.data.data.jsondata;
          this.jsondata2 = result.data.data.jsondata2;
          // console.log(result.data.data.jsondata)
          // console.log(result.data.data.jsondata2)
          for (let i = 0; i < this.jsondata2.length; i++) {
            this.diarys.push(this.jsondata2[i])
          }
        })
      }
    }
</script>

<style scoped>
  .list-group-item{
    margin: 5px 5px;
    border-radius:10px ;
  }
  button{
    margin-left: 50px;
  }
</style>

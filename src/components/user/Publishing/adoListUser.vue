<template>
  <div>
    <span style=" margin-left: 10px" v-for="diary in diarys">
      <el-button  type="text" @click="centerDialogVisible = true">{{diary.userName}}</el-button>
      <el-dialog
      title="领养者详情"
      :visible.sync="centerDialogVisible"
      width="40%"
      center>
      <dl>
      <dd>
      <span class="glyphicon glyphicon-user" aria-hidden="true"> 联系人：</span>{{diary.userName}}
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
       <dd>
      <span class="glyphicon glyphicon-envelope" aria-hidden="true"> 联系地址：</span>{{diary.address}}
      </dd>
       <dd>
      <span class="glyphicon glyphicon-time" aria-hidden="true"> 发布时间：</span>{{diary.addTime}}
      </dd>
      </dl>
      <span slot="footer" class="dialog-footer">
      <el-button @click="centerDialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="agreeAdo(diary.addId)">同意领养</el-button>
      </span>
      </el-dialog>
    </span>
  </div>

</template>

<script>
  import axios from 'axios'
    export default {
        name: "adoListUser",
        data(){
          return{
            jsondata2:[],
            // 遍历出的有意领养者
            diarys:[],
            centerDialogVisible:false
          }
        },
      props: {
        adoid: Number,
      },
      mounted(){
        this.ajaxuser()
      },
      methods:{
        ajaxuser(){
          axios.get(this.$store.state.url+`/adoptions/details/`+this.adoid).then((result) => {
            console.log(result.data)
            this.jsondata2 = result.data.data.jsondata2;
            // console.log(result.data.data.jsondata)
            // console.log(result.data.data.jsondata2)
            for (let i = 0; i < this.jsondata2.length; i++) {
              this.diarys.push(this.jsondata2[i])
            }

          })
        },
        agreeAdo(addId){
          let _this = this
          $.ajax({
            url: this.$store.state.url+"/adoptions/adoAgree",
            type: "post",
            data: {
              addId: addId,
            },
            success: function (result) {
              // console.log(result)
              location.reload()
            }
          })
        }
      },

    }
</script>

<style scoped>

</style>

<template>
  <div>
    <span style=" margin-left: 10px" v-for="(diary,index) in mydiarys">
      <el-button  type="text"  @click="aa(index)">{{diary.userName}}</el-button>
      <el-dialog
      title="领养者详情"
      :visible.sync="centerDialogVisible"
      width="40%"
      center>
      <dl>
      <dd>

      <span class="glyphicon glyphicon-user" aria-hidden="true"> 联系人：</span>{{val.userName}}
      </dd>
      <dd>
      <span class="glyphicon glyphicon-retweet" aria-hidden="true"> 性别：</span>{{val.sex}}
      </dd>
      <dd>
      <span class="glyphicon glyphicon-phone" aria-hidden="true"> 手机号：</span>{{val.userPhone}}
      </dd>
      <dd>
      <span class="glyphicon glyphicon-envelope" aria-hidden="true"> 邮箱：</span>{{val.userEmail}}
      </dd>
       <dd>
      <span class="glyphicon glyphicon-envelope" aria-hidden="true"> 联系地址：</span>{{val.address}}
      </dd>
       <dd>
      <span class="glyphicon glyphicon-time" aria-hidden="true"> 发布时间：</span>{{val.addTime}}
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
            adoId:'',
            // 遍历出的有意领养者
            diarys:[],
            centerDialogVisible:false,
            val:[]
          }
        },
      props: {
        adoid: Number,
      },
      mounted(){
        this.ajaxuser()
      },
      computed:{
        mydiarys(){
          return this.diarys
        },
      },
      methods:{
          aa(a){
            this.centerDialogVisible = true
            this.val= this.diarys[a]
            if(this.val.sex==0){
              this.val.sex='男'
            }else {
              this.val.sex='女'
            }
          },
        ajaxuser(){
          axios.get(this.$store.state.url+`/adoptions/details/`+this.adoid).then((result) => {
            // console.log(result.data)
            this.jsondata2 = result.data.data.jsondata2;
            this.adoId = result.data.data.jsondata.adoId;
            // console.log(result.data.data.jsondata.adoId)
            console.log(result.data.data.jsondata2)
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
              adoId:_this.adoId
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

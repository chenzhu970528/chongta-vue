<template>
  <div>
    <span v-for="diary in diarys">
      <el-button  type="text" @click="centerDialogVisible = true">{{diary.userName}}</el-button>
      <el-dialog
        title="领养者详情"
        :visible.sync="centerDialogVisible"
        width="40%"
        center>
      <dl>
      <dd>
        <span aria-hidden="true"> 申请人电话：</span><span>{{diary.userPhone}}</span>
      </dd>
      <dd>
        <span aria-hidden="true"> 邮箱：</span><span>{{diary.userEmail}}</span>
      </dd>
      <dd>
        <span aria-hidden="true"> 宠物名：</span><span>{{diary.PetName}}</span>
      </dd>
      <dd>
        <span aria-hidden="true"> 宠物类型：</span><span>{{diary.type}}</span>
      </dd>
      <dd>
        <span aria-hidden="true"> 宠物性别：</span><span>{{diary.sex}}</span>
      </dd>
      <dd>
        <span aria-hidden="true"> 宠物年龄：</span><span>{{diary.age}}</span>
      </dd>
      <dd>
        <span aria-hidden="true"> 申请时间：</span><span>{{diary.maplyTime}}</span>
      </dd>
      <dd>
        <span aria-hidden="true"> 宠物照片：</span>
        <img :src="urlImg(diary.petPic)" class="pic">
      </dd>
      </dl>
      <span slot="footer" class="dialog-footer">
      <el-button @click="centerDialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="agreeAdo()">同意领养</el-button>
      </span>
      </el-dialog>
    </span>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
      name: "matchUser",
      data() {
        return {
          centerDialogVisible: false,
          jsondata:[],
          diarys:[],
          url:this.$store.state.url
        }
      },
      props: {
        matId: Number,
      },
      mounted() {
        this.ajaxuser()
      },
      methods: {
        urlImg(str){
          let strs=str.split(',')[0]
          // console.log(this.url+str)
          return this.url+strs
        },
        ajaxuser() {
          axios.get(this.$store.state.url + `/matchmaking/`+this.matId+`/showaply`).then((result) => {
            // console.log(result.data.data);
            this.jsondata = result.data.data;
            // console.log(result.data.data.jsondata)
            // console.log(result.data.data.jsondata2)
            for (let i = 0; i < this.jsondata.length; i++) {
              this.diarys.push(this.jsondata[i])
            }
            console.log(this.diarys)
          })
        },
      },
    }
</script>

<style scoped>
  .pic{
    display: block;
    margin-left: 30%;
    position: relative;
    top: -15px;
  }
  img{
    width: 80px;
    height: 80px;
  }
  dd{
    margin-bottom: 7px;
  }
  dd span:first-child{
    margin-left: 50px;
    display: inline-block;
    width: 20%;
    text-align: right;
  }
  dd span:last-child{
    display: inline-block;
    width: 50%;
    text-align: left;
  }
</style>

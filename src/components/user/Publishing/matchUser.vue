<template>
  <div>
    <span v-if="show">暂无申请人</span>
    <div v-for="(diary,index) in diarys">
      <el-button  type="text" @click="centerDialogVisible = true" class="spanText">{{diary.userName}}</el-button>{{index}}
      <el-dialog
        title="领养者详情"
        :visible.sync="centerDialogVisible"
        width="40%"
        center>
      <dl v-for="(diary1,index1) in diarys1">
      <dd>
        {{index}}
        <span aria-hidden="true"> 申请人：</span><span>{{diarys1[index].userName}}</span>
      </dd>
      <dd>
      <dd>
        <span aria-hidden="true"> 申请人电话：</span><span>{{diary1.userPhone}}</span>
      </dd>
      <dd>
        <span aria-hidden="true"> 邮箱：</span><span>{{diary1.userEmail}}</span>
      </dd>
      <dd>
        <span aria-hidden="true"> 宠物名：</span><span>{{diary1.PetName}}</span>
      </dd>
      <dd>
        <span aria-hidden="true"> 宠物类型：</span><span>{{diary1.type}}</span>
      </dd>
      <dd>
        <span aria-hidden="true"> 宠物性别：</span><span>{{diary1.sex}}</span>
      </dd>
      <dd>
        <span aria-hidden="true"> 宠物年龄：</span><span>{{diary1.age}}</span>
      </dd>
      <dd>
        <span aria-hidden="true"> 申请时间：</span><span>{{diary1.maplyTime}}</span>
      </dd>
      <dd>
        <span aria-hidden="true"> 宠物照片：</span>
        <img :src="urlImg(diary1.petPic)" class="pic">
      </dd>
      </dl>
      <span slot="footer" class="dialog-footer">
      <el-button @click="centerDialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="agree(diary.matId,diary.aplyId)">同意领养</el-button>
      </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
      name: "matchUser",
    components:{

    },
      data() {
        return {
          centerDialogVisible: false,
          jsondata:[],
          diarys:[],
          diarys1:[],
          url:this.$store.state.url,
          show:false
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
          let strs=str.split(',')[0];
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
              this.diarys1.push(this.jsondata[i]);
              this.diarys.push(this.jsondata[i]);

            }
            if(this.diarys.length==0){
              this.show=true
            }
            // console.log(this.diarys.length)
          })
        },
        agree(matId,aplyId){
          let _this = this
          $.ajax({
            url: this.$store.state.url+"/matchmaking/agree",
            type: "post",
            data: {
              matId: matId,
              aplyId:aplyId
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
  div{
    display: inline-block;
  }
  .spanText{
    margin-right: 7px;
    color: gray;
  }
  .spanText:hover{
    color: #5190ed;
  }
</style>

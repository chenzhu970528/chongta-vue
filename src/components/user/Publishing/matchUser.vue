<template>
  <div>
    <span v-if="show">暂无申请人</span>
    <div v-for="(diary,index) in diarys">
      <el-button  type="text" @click="aa(index)" class="spanText">{{diary.userName}}</el-button>
      <el-dialog
        title="领养者详情"
        :visible.sync="centerDialogVisible"
        width="40%"
        center>
      <dl>
      <dd>
        <span aria-hidden="true"> 申请人：</span><span>{{val.userName}}</span>
      </dd>
      <dd>
      <dd>
        <span aria-hidden="true"> 申请人电话：</span><span>{{val.userPhone}}</span>
      </dd>
      <dd>
        <span aria-hidden="true"> 邮箱：</span><span>{{val.userEmail}}</span>
      </dd>
      <dd>
        <span aria-hidden="true"> 宠物名：</span><span>{{val.PetName}}</span>
      </dd>
      <dd>
        <span aria-hidden="true"> 宠物类型：</span><span>{{val.type}}</span>
      </dd>
      <dd>
        <span aria-hidden="true"> 宠物性别：</span><span>{{val.sex}}</span>
      </dd>
      <dd>
        <span aria-hidden="true"> 宠物年龄：</span><span>{{val.age}}</span>
      </dd>
      <dd>
        <span aria-hidden="true"> 申请时间：</span><span>{{val.maplyTime}}</span>
      </dd>
      <dd>
        <span aria-hidden="true"> 宠物照片：</span>
        <img :src="urlImg(val.petPic)" class="pic">
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
          url:this.$store.state.url,
          show:false,
          val:[],
          pic:[]
        }
      },
      props: {
        matId: Number,
      },
      mounted() {
        this.ajaxuser()
      },
    computed:{

    },
      methods: {
        urlImg(str){
          // let strs=str.split(',')[0];
          // console.log(str)
          return this.url+str
        },
        aa(a){
          this.centerDialogVisible = true;
          this.val= this.diarys[a];
          this.val.petPic=this.diarys[a].petPic.split(',')[1]
          // console.log(this.val.petPic)
        },

        ajaxuser() {
          axios.get(this.$store.state.url + `/matchmaking/`+this.matId+`/showaply`).then((result) => {
            // console.log(result.data.data);
            this.jsondata = result.data.data;
            // console.log(result.data.data.jsondata)
            // console.log(result.data.data.jsondata2)
            for (let i = 0; i < this.jsondata.length; i++) {
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
            url: this.$store.state.url+"/matchmaking/agree/"+matId+"/"+aplyId,
            type: "get",
            // data: {
            //   matId: matId,
            //   aplyId:aplyId
            // },
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

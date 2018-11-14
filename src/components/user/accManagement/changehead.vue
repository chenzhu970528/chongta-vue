<template>
    <div class="changehead">
      <form class="form-horizontal" id="updateHead" method="post" enctype="multipart/form-data"></form>
      <!--<input type="text" name="id" v-model="userid" style="display: none" form="updateHead">-->
      <div id="myPic">
        <img  :src="headpic" alt="" id="loginHead" class="img-responsive" form="updateHead">
        <div id="myFile">
          <input type="file"
                 name="avatar"
                 @change="changeImage($event)"
                 accept="image/gif,image/jpeg,image/jpg,image/png"
                 form="updateHead"
                 ref="avatarInput"
                 class="btn"/>
        </div>
      </div>
      <div style="padding-top: 5px">
        <span style="color: #5E5E5E" v-if="!isSaveHead">点击头像修改</span>
      </div>
      <button v-if="isSaveHead" type="button" form="updateHead" @click="up" class="btn saveHead btn-primary">保存头像</button>
      </div>
</template>

<script>
  import  axios from 'axios'
  export default {
    name: "changehead",
    data(){
      return{
        isSaveHead: false,
        upath:'',
        // 初始图片
        headpic: "",
        url:this.$store.state.url,
        userId:this.$store.state.userId,
        personal:[],
      }
    },
    mounted(){
      this.ajaximg()
    },
    methods: {
      ajaximg(){
        axios.get(`http://localhost:3000/user/showUser/${this.userId}`).then((result) => {
          // console.log(result.data.data[0]);
          this.personal = result.data.data[0];
          this.headpic= this.url+this.personal.headPic
        })
      },
      //选中文件后，将文件保存到实例的变量中
      changeImage(e) {
        this.upath = e.target.files;
        var inputFile = document.querySelector("[type='file']");
        var reader = new FileReader();
        reader.onload = function(event) {
          document.querySelector("#loginHead").src = `${event.target.result}`;
          document.querySelector("#myPic").style.backgroundColor = "transparent";
        };
        reader.readAsDataURL(inputFile.files[0]);
        this.isSaveHead = true;
      },
      //上传头像
      up:function () {
        let _this=this
        console.log(this.upath);
        var zipFormData = new FormData();
        //依次添加多个文件
        for(var i = 0 ; i< this.upath.length ; i++){
          zipFormData.append('filename', this.upath[i]);
        }
        //添加其他的表单元素
        zipFormData.append('userId',this.userId)
        let config = { headers: { 'Content-Type': 'multipart/form-data' } };
        this.$axios.post(this.$store.state.url+'/user/upheadpic', zipFormData,config)
          .then(function (response) {
            console.log(response);
            console.log(response.data);
            console.log(response.bodyText);
            alert("上传成功！！！")
            _this.isSaveHead = false;
            // personal:[]
            // this.imgajax()
            // this.headpic= this.url+this.personal.headPic
          }).catch((err) => {
          console.log(err)
          alert(err)
        });

      },
    }
  }
</script>

<style scoped>
  .changehead{
    position: relative;
    top:10px;
  }


  #myPic {
    width: 150px;
    height: 150px;
    border: 1px solid #ccc;
    border-radius: 150px;
    margin: 0 auto;
    background: url("../../../assets/HomePage/right3.jpg")  no-repeat ;
    background-size: 100% 100%;
  }

  #myFile {
    width: 150px;
    height: 150px;
    border: 1px solid transparent;
    border-radius: 150px;
    background-color: #ccc;
    opacity: 0.5;
    box-sizing: border-box;
    position: absolute;
    top: 1px;
    left: 120px;
    display: none;
  }

  #myPic img{
    width: 150px;
    height: 150px;
    border-radius: 150px;
  }

  #myPic:hover #myFile {
    display: block;
  }

  [type = "file"] {
    width: 100%;
    height: 100%;
    opacity: 0;
  }

</style>

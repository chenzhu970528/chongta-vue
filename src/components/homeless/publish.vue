<template>
  <div class="container">
    <h3>我要发布</h3>
    <form class="form-horizontal">
      <div class="form-group">
        <label for="inputTitletitle" class="col-sm-3 control-label" >自拟标题:</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" id="inputTitletitle"
                 v-model="hp.getmes"
                 placeholder="简述">
        </div>
        </div>
      <div class="form-group">
          <label class="col-sm-3 control-label">拾到宠物类别：</label>
          <div class="col-sm-6">
            <el-radio  v-model="hp.type" label="1">猫</el-radio>
            <el-radio  v-model="hp.type" label="2">狗</el-radio>
            <el-radio  v-model="hp.type" label="3">其他</el-radio>
          </div>
        </div>
      <div class="form-group">
        <label  class="col-sm-3 control-label">拾到时间：</label>
        <div class="col-sm-6">
          <el-date-picker
            v-model="hp.homeTime"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="拾到日期">
          </el-date-picker>
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-3 control-label">性别：</label>
        <div class="col-sm-6">
          <el-radio v-model="hp.sex" label="0">公</el-radio>
          <el-radio v-model="hp.sex" label="1">母</el-radio>
        </div>
      </div>
      <div class="form-group">
        <label for="inputTitle" class="col-sm-3 control-label" >拾到地址:<br>（文字描述)</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" id="inputTitle"
                 v-model="hp.address"
                 placeholder="xx市区xx地区附近 关键标志物">
        </div>
      </div>
      <div class="form-group">
        <label  class="col-sm-3 control-label">上传图片：</label>
        <div class="col-sm-6">
          <input type="file" name="avatar"
                 @change="changeImage($event)"
                 accept="image/gif,image/jpeg,image/jpg,image/png"
                 ref="avatarInput"
                 multiple><br/>
        </div>
      </div>
      <div class="form-group">
        <label for="inputman" class="col-sm-3 control-label">联系人:</label>
        <div class="col-sm-6">
          <input type="text" class="form-control"  v-model="hp.people" id="inputman" placeholder="可以是昵称" >
        </div>
      </div>
      <div class="form-group">
        <label for="inputphone" class="col-sm-3 control-label">联系人电话:</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" id="inputphone" v-model="hp.phone"  placeholder="必须是11位手机号">
        </div>
      </div>
      <div class="form-group">
        <label for="inputdetails" class="col-sm-3 control-label">详情描述：</label>
        <div class="col-sm-6">
          <textarea id="inputdetails" class="form-control" rows="5" v-model="hp.detail"></textarea>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <div class="checkbox">
            <label>
              <input type="checkbox"> 我同意全部事项
            </label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10" >
          <button type="submit" @click="islogin" class="btn btn-default" style="font-size: 25px">发布</button>
        </div>
      </div>
    </form>
  </div>

</template>

<script>
  export default {
    name: "publish",
    data() {
      return {
        hp:{
        phone:'',
        detail:'',
        address:'',
        sex:'',
        homeTime:'2018-11-11',
        type:'',
        people:'',
        getmes:'',
        userId:this.$store.state.userId,
      },
        upath:''
      }
    },

    methods: {
      addhomeless() {
        console.log(this.upath);
        var zipFormData = new FormData();
        //依次添加多个文件
        for(var i = 0 ; i< this.upath.length ; i++){
          zipFormData.append('filename', this.upath[i]);
        }
        //添加其他的表单元素
        zipFormData.append('phone',this.hp.phone)
        zipFormData.append('detail',this.hp.detail)
        zipFormData.append('address',this.hp.address)
        zipFormData.append('sex',this.hp.sex)
        zipFormData.append('homeTime',this.hp.homeTime)
        zipFormData.append('type',this.hp.type)
        zipFormData.append('people',this.hp.people)
        zipFormData.append('getmes',this.hp.getmes)
        zipFormData.append('userId',this.hp.userId)
        let config = { headers: { 'Content-Type': 'multipart/form-data' } };
        this.$axios.post(this.$store.state.url+'/homeless/Add', zipFormData,config)
          .then(function (response) {
            console.log(response);
            console.log(response.data);
            console.log(response.bodyText);
            alert("发布成功！！！")
            history.go(-1);
            location.reload()
          }).catch((err) => {
          console.log(err)
          alert(err)
        });
      },
      //选中文件后，将文件保存到实例的变量中
      changeImage(e) {
        this.upath = e.target.files;
      },
      // 登录验证
      islogin(){
        if(!this.$store.state.isLogin) {
          alert("请登录后发布")
          return false
        }else {
          this.addhomeless()
        }
      },
      // addhomeless(){
      //   let _this = this
      //   $.ajax({
      //     url: "http://localhost:3000/homeless/Add",
      //     type: "post",
      //     data: _this.hp,
      //     success: function (result) {
      //       console.log(result.data)
      //       alert("发布成功！！！")
      //       location.href = "http://localhost:8080/homeless";
      //     }
      //   })
      // }
    }
  };
</script>

<style scoped>
  .container{
    background:rgba(255,255,255,0.9);
    margin-top:100px ;
    box-shadow:-2px 2px 10px 2px #bcbcbc;
    position: relative;
  }
  form{
    margin-top: 50px;
  }
  h3{
    margin-left: 10px;
  }

  .watch{
    height: 20px;
    line-height: 20px;
    background-color: #F2DEDE;
    color: #C78382;
    margin-bottom: 5px;
  }
</style>



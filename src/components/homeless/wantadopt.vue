<template>
  <div class="container">
    <h3>我要寻找</h3>
    <form class="form-horizontal">
      <div class="form-group">
        <label for="inputkindreward" class="col-sm-3 control-label">寻宠报酬：</label>
        <div class="col-sm-3">
          <input type="text" class="form-control"  v-model="addlose.reward" id="inputkindreward" placeholder="全凭个人自愿">
        </div>
      </div>
      <div class="form-group">
        <label for="title" class="col-sm-3 control-label">丢失信息：</label>
        <div class="col-sm-3">
          <input type="text" class="form-control"  v-model="addlose.lpmes" id="title" placeholder="简述">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-3 control-label">宠物类别：</label>
        <div class="col-sm-6">
          <el-radio v-model="addlose.type" label="1">猫</el-radio>
          <el-radio v-model="addlose.type" label="2">狗</el-radio>
          <el-radio v-model="addlose.type" label="3">其他</el-radio>
        </div>
      </div>
      <div class="form-group">
        <label  class="col-sm-3 control-label">生日：</label>
        <div class="col-sm-6">
          <el-date-picker
            v-model="addlose.lpTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期">
          </el-date-picker>
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-3 control-label">性别：</label>
        <div class="col-sm-6">
          <el-radio v-model="addlose.sex" label="1">公</el-radio>
          <el-radio v-model="addlose.sex" label="2">母</el-radio>
        </div>
      </div>
      <div class="form-group">
        <label for="inputTitle" class="col-sm-3 control-label">丢失地址:<br>（文字描述)</label>
        <div class="col-sm-6">
          <input type="text" class="form-control"  v-model="addlose.address" id="inputTitle" placeholder="xx市区xx地区附近 关键标志物">
        </div>
      </div>
      <div class="form-group">
        <label  class="col-sm-3 control-label">宠物图片：</label>
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
          <input type="text" class="form-control" v-model="addlose.lostpeople" id="inputman" placeholder="可以是昵称">
        </div>
      </div>
      <div class="form-group">
        <label for="inputphone" class="col-sm-3 control-label">联系人电话:</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" v-model="addlose.lostphone" id="inputphone" placeholder="必须是11位手机号">
        </div>
      </div>
      <div class="form-group">
        <label for="inputdetails1" class="col-sm-3 control-label">详情描述：</label>
        <div class="col-sm-6">
          <textarea id="inputdetails1"  v-model="addlose.detail" class="form-control" rows="5"></textarea>
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
          <button type="submit" @click="islogin" class="btn btn-default" style="font-size: 25px">提交</button>
        </div>
      </div>
    </form>
  </div>

</template>

<script>
  export default {
    name: "wantadopt",
    data() {
      return {
        addlose:{
          sex:'0',
          type:'0',
          lostpeople:'',
          lostphone:'',
          lpTime:'2018-11-11',
          lpmes:'',
          detail:'',
          address:'',
          reward:'',
          userId:this.$store.state.userId,
        },
        upath:''
      }
    },

    methods: {
      addlost() {
        console.log(this.upath);
        var zipFormData = new FormData();
        //依次添加多个文件
        for(var i = 0 ; i< this.upath.length ; i++){
          zipFormData.append('filename', this.upath[i]);
        }
        //添加其他的表单元素
        zipFormData.append('type',this.addlose.type)
        zipFormData.append('sex',this.addlose.sex)
        zipFormData.append('lostpeople',this.addlose.lostpeople)
        zipFormData.append('lostphone',this.addlose.lostphone)
        zipFormData.append('lpTime',this.addlose.lpTime)
        zipFormData.append('lpmes',this.addlose.lpmes)
        zipFormData.append('detail',this.addlose.detail)
        zipFormData.append('address',this.addlose.address)
        zipFormData.append('reward',this.addlose.reward)
        zipFormData.append('userId',this.addlose.userId)
        let config = { headers: { 'Content-Type': 'multipart/form-data' } };
        this.$axios.post('http://localhost:3000/homeless/addlost', zipFormData,config)
          .then(function (response) {
            console.log(response);
            console.log(response.data);
            console.log(response.bodyText);
            alert("发布成功！！！")
            location.href = "http://localhost:8080/homeless";
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
          this.addlost()
        }
      },
      // addlost(){
      //   let _this = this
      //   $.ajax({
      //     url: "http://localhost:3000/homeless/addlost",
      //     type: "post",
      //     data: _this.addlose,
      //     success: function (result) {
      //       console.log(result.data)
      //       alert("发布成功！！！")
      //       location.href = "http://localhost:8080/homeless";
      //     }
      //   })
      // },
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

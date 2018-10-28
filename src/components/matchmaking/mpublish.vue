<template>
  <div class="tol">
    <div class="top"></div>
    <div class="cont container">
      <div class="route">您的当前位置：<span><a href="/matchmaking">宠物婚介</a></span><span>/</span><span>发布</span></div>
      <h3>发布婚介</h3>
      <form class="form-horizontal">
        <div class="form-group">
          <label  class="col-sm-3 control-label">宠物品种：</label>
          <div class="col-sm-3">
            <input type="text" class="form-control"  v-model="value1.type" placeholder="请输入宠物种类">
          </div>
        </div>
        <div class="form-group">
          <label for="inputName" class="col-sm-3 control-label">宠物昵称：</label>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="inputName" v-model="value1.PetName" placeholder="嘟嘟">
          </div>
        </div>
        <div class="form-group">
          <label for="inputName" class="col-sm-3 control-label">宠物年龄：</label>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="inputage" v-model="value1.age" placeholder="宠物年龄">
          </div>
        </div>
        <div class="form-group">
          <label  class="col-sm-3 control-label">生日：</label>
          <div class="col-sm-6">
            <el-date-picker
              v-model="value1.birth"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-3 control-label">性别：</label>
          <div class="col-sm-6">
            <el-radio v-model="value1.sex" label="1">公</el-radio>
            <el-radio v-model="value1.sex" label="2">母</el-radio>
          </div>
        </div>
        <div class="form-group">
          <label for="inputName" class="col-sm-3 control-label">上传图片：</label>
          <div class="col-sm-6">
            <input type="file" name="avatar"
                   @change="changeImage($event)"
                   accept="image/gif,image/jpeg,image/jpg,image/png"
                   ref="avatarInput"
                   multiple><br/>
          </div>
        </div>
        <div class="form-group">
          <label for="inputTitle" class="col-sm-3 control-label">标题：</label>
          <div class="col-sm-6">
            <input type="text" class="form-control"  v-model="value1.title" id="inputTitle" placeholder="请输入标题">
          </div>
        </div>
        <div class="form-group">
          <label for="inputtextarea" class="col-sm-3 control-label">寄语：</label>
          <div class="col-sm-6">
            <!--<input type="" class="form-control" id="inputPassword3" placeholder="请输入寄语">-->
            <textarea id="inputtextarea" class="form-control"  v-model="value1.sandword" rows="5"></textarea>
          </div>
        </div>
        <div class="form-group">
          <label for="inputask" class="col-sm-3 control-label">要求：</label>
          <div class="col-sm-6">
            <textarea id="inputask" class="form-control" rows="5" v-model="value1.request"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="watch col-sm-6 col-sm-offset-3">注明宠物种类，例如‘哈士奇’</div>
        </div>
        <div class="form-group">
          <label for="inputdetaildetail" class="col-sm-3 control-label">详情描述：</label>
          <div class="col-sm-6">
            <textarea id="inputdetaildetail" class="form-control" v-model="value1.detail" rows="5"></textarea>
          </div>
        </div>
        <!--<div class="form-group">-->
        <!--<label  class="col-sm-3 control-label">您所在地区：</label>-->
        <!--<div class="col-sm-6">-->
        <!--<el-cascader-->
        <!--:options="options2"-->
        <!--@active-item-change="handleItemChange"-->
        <!--:props="props"-->
        <!--&gt;</el-cascader>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="form-group">-->
        <!--<label  class="col-sm-3 control-label">体检报告：</label>-->
        <!--<div class="col-sm-6">-->
        <!--<el-upload-->
        <!--class="upload-demo"-->
        <!--action="https://jsonplaceholder.typicode.com/posts/"-->
        <!--:on-preview="handlePreview"-->
        <!--:on-remove="handleRemove"-->
        <!--:file-list="fileListRep"-->
        <!--list-type="picture">-->
        <!--&lt;!&ndash;<el-button size="small" type="primary">点击上传</el-button>&ndash;&gt;-->
        <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
        <!--</el-upload>-->
        <!--</div>-->
        <!--</div>-->
        <div class="form-group">
          <div class="col-sm-offset-5 col-sm-7">
            <button type="submit" @click="islogin" class="btn btn-default">提交</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import  currentway from './currentway.vue'
    export default {
        name: "mpublish",
      components:{
          'current-way':currentway
      },
      data() {
        return {
            value1:{
              type:'',
              PetName:'',
              birth:'2018-11-11',
              sex:'0',
              title:'',
              sandword:'',
              request:'',
              detail:'',
              age:'',
              relId:this.$store.state.userId,
          },
          upath:'',  //保存选中的文件
        };
      },

      methods: {
        // 登录验证
        islogin(){
          if(!this.$store.state.isLogin) {
            alert("请登录后发布")
            return false
          }else {
            this.addmatch()
          }
        },
              //发布
        addmatch() {
          console.log(this.upath);
          var zipFormData = new FormData();
          //依次添加多个文件
          for(var i = 0 ; i< this.upath.length ; i++){
            zipFormData.append('filename', this.upath[i]);
          }
          //添加其他的表单元素
          zipFormData.append('type',this.value1.type)
          zipFormData.append('PetName',this.value1.PetName)
          zipFormData.append('birth',this.value1.birth)
          zipFormData.append('sex',this.value1.sex)
          zipFormData.append('title',this.value1.title)
          zipFormData.append('sandword',this.value1.sandword)
          zipFormData.append('request',this.value1.request)
          zipFormData.append('detail',this.value1.detail)
          zipFormData.append('age',this.value1.age)
          zipFormData.append('relId',this.value1.relId)
          let config = { headers: { 'Content-Type': 'multipart/form-data' } };
          this.$axios.post(this.$store.state.url+'/matchmaking/addMatch', zipFormData,config)
            .then(function (response) {
              console.log(response);
              console.log(response.data);
              console.log(response.bodyText);
              alert("发布成功！！！")
              location.href=_this.$store.state.myurl+'/matchmaking'
            }).catch((err) => {
            console.log(err)
            alert(err)
          });
        },
        //选中文件后，将文件保存到实例的变量中
        changeImage(e) {
          this.upath = e.target.files;
        },
        // addmatch(){
        //   let _this = this
        //   $.ajax({
        //     url: "http://localhost:3000/matchmaking/addMatch",
        //     type: "post",
        //     data: _this.value1,
        //     success: function (result) {
        //       console.log(result.data)
        //       alert("发布成功！！！")
        //       location.href = "http://localhost:8080/matchmaking";
        //     }
        //   })
        // },

      }
    };
</script>

<style scoped>
  .cont{
    background:rgba(255,255,255,0.9);
    margin-top:150px ;
    box-shadow:-2px 2px 10px 2px #bcbcbc;
    position: relative;
  }
  .top{
    width: 100%;
    height: 70px;
    background-color: #fff;
    position: fixed;
    top: 0;
    z-index: 3;
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
  a{
    color: #747474;
  }
  a:hover{
    text-decoration: none;
    color: #4e76ff;
  }
  .route{
    position: relative;
    left: 1%;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    /*background-color: palevioletred;*/
    color: #747474;
  }
  .route span{
    margin-right: 10px;
    font-size: 13px;
  }
  .route span:last-child{
    color: #4e76ff;
  }
</style>

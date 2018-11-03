<template>
  <div>
    <el-button type="primary" @click="islogin" class="btn">申请</el-button>
    <el-dialog
      title="婚配申请表"
      :visible.sync="centerDialogVisible"
      width="50%"
      center>
      <div class="modal-header"></div>
      <div class="modal-body">
        <form action="">
          <div>
            爱&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称：
            <p>
              <el-input
                placeholder="请输入内容"
                v-model="aplymatch.PetName"
                clearable>
              </el-input>
            </p>
          </div>
          <div class="block">
            <div>
              品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;种：
              <p>
                <el-input
                  placeholder="例如：哈士奇"
                  v-model="aplymatch.type"
                  clearable>
                </el-input>
              </p>
            </div>
            <div class="block">
            <span class="demonstration">生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日：</span>
            <p>
              <el-date-picker
                v-model="aplymatch.birth"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
              </el-date-picker>
            </p>
          </div>
              <div>
                年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：
                <p>
                  <el-input placeholder="以月为单位" v-model="aplymatch.age" clearable></el-input>
                </p>
              </div>
            <label class="control-label">上传图片：</label>
              <input type="file" name="avatar"
                     @change="changeImage($event)"
                     accept="image/gif,image/jpeg,image/jpg,image/png,.img"
                     ref="avatarInput"
                     multiple><span style="line-height: 30px"><b>上传视频请在图片后</b></span>
            <br/>
              <div>
                详&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;情：
                <p>
                  <el-input
                    placeholder="请输入内容"
                    v-model="aplymatch.detail"
                    clearable>
                  </el-input>
                </p>
              </div>
          <div>性&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：
            <el-radio   v-model="aplymatch.sex"label="1">公</el-radio>
            <el-radio   v-model="aplymatch.sex"label="2">母</el-radio>
          </div>

          <!--<div>交&nbsp;&nbsp;配&nbsp;&nbsp;史：-->
            <!--<el-radio  v-model="aplymatch.maHistory" label="1">有</el-radio>-->
            <!--<el-radio  v-model="aplymatch.maHistory" label="2">无</el-radio>-->
          <!--</div>-->
          </div></form>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="aplypb">提交</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "maply",
    data() {
      return {
        centerDialogVisible: false,
        aplymatch:{
          type:'',
          sex:'0',
          age:'',
          detail:'',
          // address:'',
          birth:'2018-11-11',
          PetName:'',
          aplyId:this.$store.state.userId,

          // matId:this.$router.params.matId,
        },
        upath:'',
        check1:false,
        //保存选中的文件
        // options2: [{
        //   label: '江苏',
        //   cities: []
        // }, {
        //   label: '浙江',
        //   cities: []
        // }],
        // props: {
        //   value: 'label',
        //   children: 'cities'
        // },
        value1: '',
        value2: '',
        inputkind: '',
        inputName:'',
        inputAge:'',
        fileList:[],
        radio: '1',
        radiosex:'1'
      };
    },
    props:{
      matId:Number,
    },
    methods: {
      // 登录验证
      islogin() {
        if (!this.$store.state.isLogin) {
          alert("请登录后发布")
          return false
        } else {
          this.centerDialogVisible = true
        }
      },
      aply() {
        let _this = this;
        var zipFormData = new FormData();
        for (var i = 0; i < this.upath.length; i++) {
          zipFormData.append('filename', this.upath[i]);
        }
        //添加其他的表单元素
        zipFormData.append('PetName', this.aplymatch.PetName)
        zipFormData.append('type', this.aplymatch.type)
        zipFormData.append('birth', this.aplymatch.birth)
        zipFormData.append('age', this.aplymatch.age)
        zipFormData.append('detail', this.aplymatch.detail)
        zipFormData.append('sex', this.aplymatch.sex)
        zipFormData.append('aplyId', this.aplymatch.aplyId)
        zipFormData.append('matId', this.matId)
        let config = {headers: {'Content-Type': 'multipart/form-data'}};
        this.$axios.post(this.$store.state.url + '/matchmaking/addaply', zipFormData, config)
          .then(function (response) {

            alert("发布成功！！！")
            // location.href = _this.$store.state.myurl + '/homeless'
          }).catch((err) => {
          console.log(err)
          alert(err)
        });
      },
      //选中文件后，将文件保存到实例的变量中
      changeImage(e) {
        this.upath = e.target.files;
        if (this.upath.length < 2 || this.upath.length > 6) {
          alert("请上传2-6张图片")
          this.check1 = false
        } else {
          this.check1 = true
        }
      },
      // 表单验证
      aplypb(){
        if(this.check1) {
          this.aply()
        }else {
          alert('不符合上传要求，请重新输入并同意相关协议')
        }
      },
      //     $.ajax({
      //       url: this.$store.state.url+"/matchmaking/addaply",
      //       type: "post",
      //       data: {
      //         type:this.aplymatch.type,
      //         sex:this.aplymatch.sex,
      //         detail:this.aplymatch.detail,
      //         age:this.aplymatch.age,
      //         // address:this.aplymatch.address,
      //         birth:this.aplymatch.birth,
      //         PetName:this.aplymatch.PetName,
      //         aplyId:this.$store.state.userId,
      //         matId:this.matId
      //       },
      //       success: function (result) {
      //         // console.log(result.data)
      //         alert("发布成功！！！")
      //         history.go(-1)
      //         location.reload()
      //       }
      //     })
      //   },
      //   changeImage(e) {
      //     this.upath = e.target.files;
      //   },
      //
      // }
    }
  }


</script>

<style scoped>
  form{
    width: 400px;
    margin-left: 100px;
  }
  [type="radio"]:last-child{
    margin-left: 10px;
  }
  [type="submit"]{
    position: relative;
    top: 20px;
    margin-bottom: 10px;
    left: 100px;
    border: none;
    background-color: #8ba5ff;
    color: white;
  }
  form div p{
    display: inline-block;
    width: 300px;
  }
  .btn{
    width: 80px;
    height: 40px;
    text-align: center;
  }
</style>

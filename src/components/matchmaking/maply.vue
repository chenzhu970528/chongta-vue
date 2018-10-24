<template>
  <div>
    <!--<el-button type="text" @click="open3">点击打开 Message Box</el-button>-->
    <el-button type="primary" @click="islogin">申请</el-button>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="50%"
      center>
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" >婚配申请表</h4>
      </div>
      <div class="modal-body">
        <form action="">
          <!--<div>宠物类型：-->
          <!--<p>-->
          <!--<el-input-->
          <!--placeholder="猫"-->
          <!--v-model="inputkind"-->
          <!--clearable>-->
          <!--</el-input>-->
          <!--</p>-->
          <!--</div>-->
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
            <span class="demonstration">生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日：</span>
            <p>
              <el-date-picker
                v-model="aplymatch.birth"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </p>
          </div>
          <div>
            年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：
            <p>
              <el-input
                placeholder="数字"
                v-model="aplymatch.age"
                clearable>
              </el-input>
            </p>
          </div>
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
          <div>
            地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：
            <p>
              <el-input
                placeholder="请输入内容"
                v-model="aplymatch.address"
                clearable>
              </el-input>
            </p>
          </div>
          <div>性&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：
            <el-radio   v-model="aplymatch.sex"label="1">公</el-radio>
            <el-radio   v-model="aplymatch.sex"label="2">母</el-radio>
          </div>
          <div>交&nbsp;&nbsp;配&nbsp;&nbsp;史：
            <el-radio  v-model="aplymatch.maHistory" label="1">有</el-radio>
            <el-radio  v-model="aplymatch.maHistory" label="2">无</el-radio>
          </div>
        </form>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="aply">提交</el-button>
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
          sex:'0',
          maHistory:'0',
          age:'',
          detail:'',
          address:'',
          birth:'2018-11-11',
          PetName:'',
          aplyId:this.$store.state.userId,
          // matId:this.$router.params.matId,

        },
        options2: [{
          label: '江苏',
          cities: []
        }, {
          label: '浙江',
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        },
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
    methods: {
      // 登录验证
      islogin(){
        if(!this.$store.state.isLogin) {
          alert("请登录后发布")
          return false
        }else {
          this.centerDialogVisible = true
        }
      },
      aply(){
        let _this = this
        $.ajax({
          url: this.$store.state.url+"/matchmaking/addaply",
          type: "post",
          data: _this.aplymatch,
          success: function (result) {
            console.log(result.data)
            alert("发布成功！！！")
            history.go(-1)
            location.reload()
          }
        })
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handleItemChange(val) {
        console.log('active item:', val);
        setTimeout(_ => {
          if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = [{
              label: '南京'
            }];
          } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = [{
              label: '杭州'
            }];
          }
        }, 300);
      }
    }
    // }
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
</style>

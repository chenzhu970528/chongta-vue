<template>
  <div>
    <!--<el-button type="text" @click="open3">点击打开 Message Box</el-button>-->
    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
      申请
    </button>
    <div class="modal fade" id="myModal" tabindex="1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">婚配申请表</h4>
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
              <div>
                体检报告：
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <!--<el-button size="small" type="primary">点击上传</el-button>-->
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </div>

              <div>性&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：
                <el-radio   v-model="aplymatch.sex"label="1">公</el-radio>
                <el-radio   v-model="aplymatch.sex"label="2">母</el-radio>
              </div>
              <div>交&nbsp;&nbsp;配&nbsp;&nbsp;史：
                <el-radio  v-model="aplymatch.maHistory" label="1">有</el-radio>
                <el-radio  v-model="aplymatch.maHistory" label="2">无</el-radio>
              </div>
              <input type="submit" value="提交" @click="aply">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "maply",
    data() {
      return {
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
      aply(){
        let _this = this
        $.ajax({
          url: "http://localhost:3000/matchmaking/addaply",
          type: "post",
          data: _this.aplymatch,
          success: function (result) {
            console.log(result.data)
            alert("发布成功！！！")
            location.href = "http://localhost:8080/matchmaking";
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
    width: 120px;
  }
</style>

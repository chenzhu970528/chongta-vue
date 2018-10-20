<template>
  <div class="container">
    <ol class="breadcrumb">
      您当前位置为：
      <li><a href="/adoption">领养中心</a></li>
      <!--<li><a href="#">详情</a></li>-->
      <li class="active">领养申请</li>
    </ol>
    <h3>领养发布</h3>
    <form class="form-horizontal">
      <div class="form-group">
        <label class="col-sm-3 control-label">发布类型：</label>
        <div class="col-sm-6">
          <el-radio v-model="adoForm.adoType" label="0">领养</el-radio>
          <el-radio v-model="adoForm.adoType" label="1">寄养</el-radio>
        </div>
      </div>
      <div class="form-group" v-if="adoForm.adoType == 1">
        <label for="inputdetail" class="col-sm-3 control-label">寄养日期到：</label>
        <div class="col-sm-6">
          <el-date-picker
            v-model="adoForm.limitTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期">
          </el-date-picker>
        </div>
      </div>
      <div class="form-group">
      <label class="col-sm-3 control-label">宠物类别：</label>
        <div class="col-sm-6">
          <input type="text" required="required" v-model="adoForm.petType" class="form-control" id="petType" placeholder="宠物类别(猫，狗，其他)">
        </div>
    </div>
      <div class="form-group">
        <label for="inputdetail" class="col-sm-3 control-label">生日：</label>
        <div class="col-sm-6">
          <el-date-picker
            v-model="adoForm.birth"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-3 control-label">性别：</label>
        <div class="col-sm-6">
          <el-radio v-model="adoForm.sex" label="0">公</el-radio>
          <el-radio v-model="adoForm.sex" label="1">母</el-radio>
        </div>
      </div>
      <div class="form-group">
        <label for="inputTitle" class="col-sm-3 control-label">宠物年龄：</label>
        <div class="col-sm-6">
          <input type="text" required="required" v-model="adoForm.age" class="form-control" id="inputAge" placeholder="几个月">
        </div>
      </div>
      <div class="form-group">
        <label for="inputTitle" class="col-sm-3 control-label">领养标题：</label>
        <div class="col-sm-6">
          <input type="text" required="required" v-model="adoForm.adoTitle" class="form-control" id="inputTitle" placeholder="请输入标题">
        </div>
      </div>
      <div class="row">
        <div class="watch col-sm-6 col-sm-offset-3">注明宠物种类，例如‘哈士奇’</div>
      </div>
      <div class="form-group">
        <label for="inputdetail" class="col-sm-3 control-label">详情描述：</label>
        <div class="col-sm-6">
          <textarea id="inputdetail" required="required" v-model="adoForm.detail" class="form-control" rows="5"></textarea>
        </div>
      </div>
      <div class="form-group">
        <label  class="col-sm-3 control-label">您的地址：</label>
        <div class="col-sm-6">
          <input type="text" required="required" v-model="adoForm.adoAddress" class="form-control" id="inputAdress" placeholder="请输入联系地址">
        </div>
      </div>
      <div class="form-group">
        <label for="inputdetail" class="col-sm-3 control-label">上传图片：</label>
        <div class="col-sm-6">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList2"
            list-type="picture">
            <!--<el-button size="small" type="primary">点击上传</el-button>-->
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <div class="checkbox">
            <label>
              <input type="checkbox"> 已阅读并同意宠它领养协议
            </label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" @click="verify" class="btn btn-default">发布</button>
        </div>
      </div>
    </form>
  </div>

</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: "AdoptIssue",
    components:{
    },
    computed: mapGetters([
      'UserId',
      'UserName',
      'isLogin'
    ]),
    data() {
      return {
        adoForm:{
          sex: '0',
          adoType: '0',
          petType: '',
          limitTime:'2018-11-11',
          age:'',
          birth:'2018-11-11',
          adoTitle:'',
          detail:'',
          adoAddress:'',
          // userId:this.$store.state.userId,
          userId:this.$route.params.userId,
        },
        // pickerOptions1: {
        //   disabledDate(time) {
        //     return time.getTime() > Date.now();
        //   },
        //   shortcuts: [{
        //     text: '今天',
        //     onClick(picker) {
        //       picker.$emit('pick', new Date());
        //     }
        //   }, {
        //     text: '昨天',
        //     onClick(picker) {
        //       const date = new Date();
        //       date.setTime(date.getTime() - 3600 * 1000 * 24);
        //       picker.$emit('pick', date);
        //     }
        //   }, {
        //     text: '一周前',
        //     onClick(picker) {
        //       const date = new Date();
        //       date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
        //       picker.$emit('pick', date);
        //     }
        //   }]
        // },
        props: {
          value: 'label',
          children: 'cities'
        },
        fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      // 验证
      verify(){
        let _this = this
        if(_this.adoForm.petType==""){
          alert("请填写宠物类别")
        }else if(_this.adoForm.age==""){
          alert("请填写宠物年龄(几个月)")
        }else if(_this.adoForm.adoTitle==""){
          alert("请填写领养标题")
        }else if(_this.adoForm.detail==""){
          alert("请填写详情描述")
        }else if(_this.adoForm.adoAddress==""){
          alert("请填写联系地址")
        }else {
          this.adoInfoForm()
        }
      },
      // 发布
      adoInfoForm(){
        let _this = this
        $.ajax({
          url: "http://localhost:3000/adoptions/adoAdd",
          type: "post",
          data: _this.adoForm,
          success: function (result) {
            console.log(result.data)
            alert("注册成功")
            location.href = "http://localhost:8080/adoption";
          }
        })
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
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


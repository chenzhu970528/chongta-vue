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
        <label for="inputdetail" class="col-sm-3 control-label">拾到时间：</label>
        <div class="col-sm-6">
          <el-date-picker
            v-model="hp.homeTime"
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
        <label  class="col-sm-3 control-label">您所在地区：</label>
        <div class="col-sm-6">
          <el-cascader
            :options="options2"
            @active-item-change="handleItemChange"
            :props="props"
          ></el-cascader>
        </div>
      </div>
      <div class="form-group">
        <label for="inputdetail" class="col-sm-3 control-label">宠物图片：</label>
        <div class="col-sm-6">
          <el-upload
            id="inputdetail"
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
          <button type="submit" @click="addhomeless" class="btn btn-default" style="font-size: 25px">发布</button>

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
        fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },

    methods: {
      addhomeless(){
        let _this = this
        $.ajax({
          url: "http://localhost:3000/homeless/Add",
          type: "post",
          data: _this.hp,
          success: function (result) {
            console.log(result.data)
            alert("注册成功")
            location.href = "http://localhost:8080/homeless";
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



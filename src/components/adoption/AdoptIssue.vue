<template>
  <div class="tol">
    <div class="top"></div>
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
            <input type="text" @change="verify1" required="required" v-model="adoForm.petType" class="form-control" id="petType"
                   placeholder="请输入宠物种类">
          </div>
        </div>
        <!--<div class="form-group">-->
        <!--<label for="inputdetail" class="col-sm-3 control-label">生日：</label>-->
        <!--<div class="col-sm-6">-->
        <!--<el-date-picker-->
        <!--v-model="adoForm.birth"-->
        <!--value-format="yyyy-MM-dd"-->
        <!--type="date"-->
        <!--placeholder="选择日期">-->
        <!--</el-date-picker>-->
        <!--</div>-->
        <!--</div>-->
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
            <input type="text" required="required"  @change="verify2" v-model="adoForm.age" class="form-control" id="inputAge"
                   placeholder="几个月">
          </div>
        </div>
        <div class="form-group">
          <label for="inputTitle"   class="col-sm-3 control-label">领养标题：</label>
          <div class="col-sm-6">
            <input type="text" required="required" @change="verify3" v-model="adoForm.adoTitle" class="form-control" id="inputTitle"
                   placeholder="请输入标题">
          </div>
        </div>
        <div class="row">
          <div class="watch col-sm-6 col-sm-offset-3">注明宠物种类，例如‘哈士奇’</div>
        </div>
        <div class="form-group">
          <label for="inputdetail"  class="col-sm-3 control-label">详情描述：</label>
          <div class="col-sm-6">
          <textarea id="inputdetail" @change="verify4" required="required" v-model="adoForm.detail" class="form-control"
                    rows="5"></textarea>
          </div>
        </div>
        <div class="form-group">
          <div class="linkage">
            <div class="row">
              <label class="col-sm-3  control-label">您的地址：</label>
              <div class="el-col-sm-offset-1 el-col-sm-6" >
                <el-select
                  id="sheng"
                  v-model="sheng"
                  @change="choseProvince"
                  placeholder="省级地区">
                  <el-option
                    v-for="item in province"
                    :key="item.id"
                    :label="item.value"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>
              <div  class=" " >
                <el-select
                  id="shi"
                  v-model="shi"
                  @change="choseCity"
                  placeholder="市级地区">
                  <el-option
                    v-for="item in shi1"
                    :key="item.id"
                    :label="item.value"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="row">
              <div  class="el-col-sm-push-7 ">
                <el-select
                  id="qu"
                  v-model="qu"
                  @change="choseBlock"
                  placeholder="区级地区">
                  <el-option
                    v-for="item in qu1"
                    :key="item.id"
                    :label="item.value"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <label style="margin-top:10px " class="col-sm-3  control-label">详细地址：</label>
          <div style="margin-top:10px " class=" col-sm-6">
            <input type="text" @change="verify5" required="required" v-model="street" class="form-control" id="inputAdress"
                   placeholder="请输入详细地址">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label>
                <input  v-model="checked" type="checkbox"> 已阅读并同意宠它领养协议
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="inputdetail" class="col-sm-3 control-label">上传图片：</label>
          <div class="col-sm-6">
            <input type="file" name="avatar"
                   @change="changeImage($event)"
                   accept="image/gif,image/jpeg,image/jpg,image/png,.mp4"
                   ref="avatarInput"
                   multiple><span style="line-height: 30px"><b>上传视频请在图片后</b></span>
            <b class="size">全部文件不能大于50M/{{size}}M</b>
            <br/>
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="button" @click="verify" class="btn btn-default">发布</button>
          </div>
        </div>
      </form>
    </div>
    <div class="foot">
      <foot></foot>
    </div>
  </div>
</template>

<script>
  import  axios from 'axios'
  import  foot from '../../components/foot'
  export default {
    name: "AdoptIssue",
    components:{
      'foot':foot
    },
    data() {
      return {
        // 省市级联选择器
        mapJson:'../static/json/map.json',
        province:'',
        sheng: '',
        shi: '',
        shi1: [],
        qu: '',
        qu1: [],
        city:'',
        block:'',
        street:'',

        size:0,

        check1: false,
        check2: false,
        check3: false,
        check4: false,
        check5: false,
        check6: false,
        check7: false,
        check8: false,

        adoForm: {
          sex: '0',
          adoType: '0',
          petType: '',
          limitTime: '2018-11-11',
          age: '',
          birth: '2018-11-11',
          adoTitle: '',
          detail: '',
          adoAddress: '',
          userId: this.$store.state.userId,
        },
        checked: false,
        upath: '',  //保存选中的文件
      };
    },
    mounted(){
      this.getCityData()
    },
    methods: {
      huoqu(){
        var sheng=$("#sheng").val();
        var shi=$("#shi").val();
        var qu=$("#qu").val();
        this.adoForm.adoAddress=(sheng+shi+qu+this.street)
      },
      // 加载china地点数据，三级
      getCityData:function(){
        var that = this
        axios.get(this.mapJson).then(function(response){
          if (response.status==200) {
            var data = response.data
            that.province = []
            that.city = []
            that.block = []
            // 省市区数据分类
            for (var item in data) {
              if (item.match(/0000$/)) {//省
                that.province.push({id: item, value: data[item], children: []})
              } else if (item.match(/00$/)) {//市
                that.city.push({id: item, value: data[item], children: []})
              } else {//区
                that.block.push({id: item, value: data[item]})
              }
            }
            // 分类市级
            for (var index in that.province) {
              for (var index1 in that.city) {
                if (that.province[index].id.slice(0, 2) === that.city[index1].id.slice(0, 2)) {
                  that.province[index].children.push(that.city[index1])
                }
              }
            }
            // 分类区级
            for(var item1 in that.city) {
              for(var item2 in that.block) {
                if (that.block[item2].id.slice(0, 4) === that.city[item1].id.slice(0, 4)) {
                  that.city[item1].children.push(that.block[item2])
                }
              }
            }
          }
          else{
            console.log(response.status)
          }
        }).catch(function(error){console.log(typeof+ error)})
      },
      // 选省
      choseProvince:function(e) {
        for (var index2 in this.province) {
          if (e === this.province[index2].id) {
            this.shi1 = this.province[index2].children
            this.shi = this.province[index2].children[0].value
            this.qu1 =this.province[index2].children[0].children
            this.qu = this.province[index2].children[0].children[0].value
            this.E = this.qu1[0].id
          }
        }
      },
      // 选市
      choseCity:function(e) {
        for (var index3 in this.city) {
          if (e === this.city[index3].id) {
            this.qu1 = this.city[index3].children
            this.qu = this.city[index3].children[0].value
            this.E = this.qu1[0].id
            // console.log(this.E)
          }
        }
      },
      // 选区
      choseBlock:function(e) {
        this.E=e;
        // console.log(this.E)
      },
      // 验证
      verify1() {
        if (this.adoForm.petType == "") {
          alert("请填写宠物类别")
          this.check1 = false
        } else {
          this.check1 = true
        }
      },
      verify2() {
        if (this.adoForm.age == "") {
          alert("请填写宠物年龄(几个月)")
          this.check2 = false
        } else {
          this.check2 = true
        }
      },
      verify3() {
        if (this.adoForm.adoTitle == "") {
          alert("请填写领养标题")
          this.check3 = false
        } else {
          this.check3 = true
        }
      },
      verify4() {
        if (this.adoForm.detail == "") {
          alert("请填写详情描述")
          this.check4 = false
        } else {
          this.check4 = true
        }
      },
      verify5() {
        if (this.street == "") {
          alert("请填写联系地址")
          this.check5 = false
        } else {
          this.check5 = true
        }
      },
      verify8(){
        if(this.size >50){
          alert("文件大小超出限制")
          this.check8 = false
        }else {
          this.check8 = true
        }
      },
      verify6() {
        if (!this.checked) {
          alert("请确认并同意《宠它网》领养协议")
          this.check7 = false
        } else {
          this.check7 = true
        }
        if (this.upath.length < 2||this.upath.length>6) {
          alert("请上传2-6张图片")
          this.check6 = false
        } else {
          this.check6 = true
          this.verify8()
        }
      },
      verify() {
          if(this.check1&&this.check2&&this.check3&&this.check4&&this.check5&&this.check6&&this.check7&&this.check8){
            this.huoqu()
            this.edit()
          }else {
            alert('不符合上传要求，请重新输入')
          }
      },
      edit() {
        // console.log(this.upath);
        let _this=this
        var zipFormData = new FormData();
        //依次添加多个文件
        for (var i = 0; i < this.upath.length; i++) {
          zipFormData.append('filename', this.upath[i]);
        }
        //添加其他的表单元素
        zipFormData.append('userId', this.adoForm.userId)
        zipFormData.append('sex', this.adoForm.sex)
        zipFormData.append('adoType', this.adoForm.adoType)
        zipFormData.append('petType', this.adoForm.petType)
        zipFormData.append('limitTime', this.adoForm.limitTime)
        zipFormData.append('age', this.adoForm.age)
        zipFormData.append('birth', this.adoForm.birth)
        zipFormData.append('adoTitle', this.adoForm.adoTitle)
        zipFormData.append('detail', this.adoForm.detail)
        zipFormData.append('adoAddress', this.adoForm.adoAddress)
        let config = {headers: {'Content-Type': 'multipart/form-data'}};
        this.$axios.post(this.$store.state.url + '/adoptions/adoAdd', zipFormData, config)
          .then(function (response) {
            // console.log(response);
            // console.log(response.data);
            // console.log(response.bodyText);
            alert("发布成功！！！")
            location.href=_this.$store.state.myurl+'/adoption'
          }).catch((err) => {
          console.log(err)
          alert(err)
        });
      },
      //选中文件后，将文件保存到实例的变量中
      changeImage(e) {
        this.upath = e.target.files;
        let size=0
        for (let i = 0; i < this.upath.length; i++) {
          size = size + this.upath[i].size
        }
        let s = size / (1024 * 1024)
        this.size = s.toFixed(2)
        this.verify6()
      },
      // 发布

    }
  };
</script>

<style scoped>
  .container {
    background: rgba(255, 255, 255, 0.9);
    margin-top: 150px;
    box-shadow: -2px 2px 10px 2px #bcbcbc;
    position: relative;
  }
  .tol{
    width: 100%;
    min-width: 1280px;
  }
  .top{
    width: 100%;
    height: 110px;
    background-color: #fff;;
    /*position: fixed;*/
    top: 0;
    z-index: 3;
    /*box-shadow: -2px 2px 10px 2px #f8f8f8;*/
    margin-top:5px;
    margin-bottom:-90px;
    min-width: 1280px;
  }
  form {
    margin-top: 50px;
  }

  h3 {
    margin-left: 10px;
  }

  .watch {
    height: 20px;
    line-height: 20px;
    background-color: #F2DEDE;
    color: #C78382;
    margin-bottom: 5px;
  }
</style>


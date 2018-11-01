<template>
  <div class="tol">
    <div class="top"></div>
    <div class="container">
      <h3>我要发布</h3>
      <form class="form-horizontal">
        <div class="form-group">
          <label for="inputTitletitle" class="col-sm-3 control-label" >自拟标题:</label>
          <div class="col-sm-6">
            <input type="text" required="required" class="form-control" id="inputTitletitle"
                   v-model="hp.getmes"
                   placeholder="简述">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-3 control-label">拾到宠物类别：</label>
          <div class="col-sm-6">
            <input type="text" required="required" v-model="hp.type" class="form-control" id="petType" placeholder="宠物类别">
          </div>
        </div>
        <div class="form-group">
          <!--<label  class="col-sm-3  control-label">拾到时间：</label>-->
          <!--<div class="col-sm-6">-->
            <!--<el-date-picker-->
              <!--value-format="yyyy-MM-dd"-->
              <!--v-model="hp.homeTime"-->

              <!--type="date"-->
              <!--placeholder="拾到日期">-->
            <!--</el-date-picker>-->
          <!--</div>-->
          <div class="block">
            <label class="col-sm-3 control-label">拾到时间：</label>
            <div class="col-sm-6">
            <el-date-picker
              value-format="yyyy-MM-dd hh-mm-ss"
              v-model="hp.homeTime"
              type="datetime"
              placeholder="拾到日期"
              align="right"
              :picker-options="pickerOptions1">
            </el-date-picker>
              </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-3 control-label">性别：</label>
          <div class="col-sm-6">
            <el-radio v-model="hp.sex" label="0">公</el-radio>
            <el-radio v-model="hp.sex" label="1">母</el-radio>
          </div>
        </div>
        <!--<div class="form-group">-->
          <!--<label for="inputTitle" class="col-sm-3 control-label" >拾到地址:<br>（文字描述)</label>-->
          <!--<div class="col-sm-6">-->
            <!--<input type="text" required="required"  class="form-control" id="inputTitle"-->
                   <!--v-model="hp.address"-->
                   <!--placeholder="xx市区xx地区附近 关键标志物">-->
          <!--</div>-->
        <!--</div>-->
        <div class="form-group">
          <el-row>
            <el-col :span="3" :push="4"><span>联系地址</span></el-col>
            <el-col :span="6" :push="4">
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
            </el-col>
            <el-col :span="6" :push="3">
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
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6" :push="7">
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
            </el-col>
          </el-row>
          <el-row style="margin-top: 10px">
            <el-col :span="10" :push="7" class="iptext"><input v-model="street" style="width: 100%" type="text" placeholder=" 请输入详细地址" ></el-col>
          </el-row>
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
          <label for="inputman"  class="col-sm-3 control-label">联系人:</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" required="required"  v-model="hp.people" id="inputman" placeholder="可以是昵称" >
          </div>
        </div>
        <div class="form-group">
          <label for="inputphone" class="col-sm-3 control-label">联系人电话:</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" required="required" id="inputphone" v-model="hp.phone"  placeholder="必须是11位手机号">
          </div>
        </div>
        <div class="form-group">
          <label for="inputdetails" class="col-sm-3 control-label">详情描述：</label>
          <div class="col-sm-6">
            <textarea id="inputdetails" required="required" class="form-control" rows="5" v-model="hp.detail"></textarea>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label>
                <input v-model="check2" type="checkbox"> 我同意全部事项
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10" >
            <button type="button" @click="islogin" class="btn btn-default" style="font-size: 25px">发布</button>
          </div>
        </div>
      </form>
    </div>
  </div>


</template>

<script>
  import  axios from 'axios'
  export default {
    name: "publish",
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

        hp:{
        phone:'',
        detail:'',
        address:'',
        sex:'',
        homeTime:'2018-11-11 00-00-00',
        type:'',
        people:'',
        getmes:'',
        userId:this.$store.state.userId,
      },
        upath:'',
        check1:false,
        check2:false,

        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },

      }
    },
      mounted(){
        this.getCityData()
      },
    methods: {
      huoqu(){
        var sheng=$("#sheng").val();
        var shi=$("#shi").val();
        var qu=$("#qu").val();
        this.hp.address=(sheng+shi+qu+this.street)
      },
      addhomeless() {
        this.huoqu()
        let _this=this
        // console.log(this.upath);
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
            // console.log(response);
            // console.log(response.data);
            // console.log(response.bodyText);
            alert("发布成功！！！")
            location.href= _this.$store.state.myurl+'/homeless'
          }).catch((err) => {
          console.log(err)
          alert(err)
        });
      },
      //选中文件后，将文件保存到实例的变量中
      changeImage(e) {
        this.upath = e.target.files;
        if(this.upath.length<2||this.upath.length>6){
          alert("请上传2-6张图片")
          this.check1=false
        }else {
          this.check1=true
        }
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


      // 表单验证
      islogin(){
        if(this.check1&&this.check2) {
          this.addhomeless()
        }else {
          alert('不符合上传要求，请重新输入并同意相关协议')
        }
      },
    }
  };
</script>

<style scoped>
  .container{
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
</style>



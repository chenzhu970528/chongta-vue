<template>
  <div >
    <ul class="list-group" style="position: relative">
      <div class="stamp" v-if="checkAdo"></div>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-piggy-bank" aria-hidden="true"> 宠物类型：</span> {{jsondata1.petType}}
      </li>
      <li class="list-group-item list-group-item-info" v-if="adoLimit">
        <span class="glyphicon glyphicon-hourglass" aria-hidden="true" value-format="yyyy-MM-dd HH:mm:ss"> 寄养时间到：</span> {{jsondata1.limitTime}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-glass" aria-hidden="true"> 宠物性别：</span> {{userPet}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-time" aria-hidden="true" value-format="yyyy-MM-dd HH:mm:ss"> 发布时间：</span> {{jsondata1.adoTime}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-map-marker" aria-hidden="true"> 地址：</span> <button type="button" @click="handleCreate" class="btn btn-link" data-toggle="modal" data-target="#myModal">
        {{jsondata1.adoAddress}}
      </button>


        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">{{jsondata1.adoAddress}}</h4>
              </div>
              <div class="modal-body">
                <div id="cellMap"></div>
              </div>
            </div>
          </div>
        </div>

      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-user" aria-hidden="true"> 联系人：</span> {{jsondata1.userName}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-earphone" aria-hidden="true"> 联系电话：</span> {{jsondata1.userPhone}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-heart-empty"  aria-hidden="true"> 有意领养者：</span>
        <span style=" margin-left: 10px" v-for="diary in diarys">
          <el-popover
            placement="right"
            width="400"
            trigger="click">
            <h4>基本信息</h4>
            <dl>
              <dd>
              <span class="glyphicon glyphicon-user" aria-hidden="true"> 联系人：</span>{{diary.userName}}
              </dd>
              <dd>
              <span class="glyphicon glyphicon-retweet" aria-hidden="true"> 性别：</span>{{userSex}}
              </dd>
              <dd>
              <span class="glyphicon glyphicon-phone" aria-hidden="true"> 手机号：</span>{{diary.userPhone}}
              </dd>
              <dd>
              <span class="glyphicon glyphicon-envelope" aria-hidden="true"> 邮箱：</span>{{diary.userEmail}}
              </dd>
               <dd>
              <span class="glyphicon glyphicon-comment" aria-hidden="true"> 微信：</span>{{diary.wechat}}
              </dd>
               <dd>
              <span class="glyphicon glyphicon-map-marker" aria-hidden="true"> 地址：</span>{{diary.address}}
              </dd>
            </dl>
            <el-button type="text" style="margin-left: 0px" slot="reference">{{diary.userName}}</el-button>
            </el-popover>
        </span>
      </li>
    </ul>
    <el-button style="margin-left: 50px;" type="primary" @click="islogin" v-if="!checkAdo" >我想领养<i class="el-icon-success el-icon--right"></i></el-button>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <span>点击确认我们将把你的联系方式交给发布者，确认请点击</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="wantAdo">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  import store from './store.js'
  import axios from 'axios'
    export default {
        name: "DetailsInfo",
      data(){
          return{
            adoLimit:false,
            checkAdo:false,
            centerDialogVisible: false,
            userId:this.$store.state.userId,
            adoId:this.$route.params.adoId,
            // 详细信息
            jsondata1:[],
            // 所有有意领养者
            jsondata2:[],
            // 遍历出的有意领养者
            diarys:[]
          }
      },
      watch:{
        'cont':'ajax'
      },
      computed:{
        cont(){
          return store.state.cont
        },
        userSex:{
          get(){
            let _this=this
            if(_this.diarys.sex==0){
              return '男'
            }else {
              return '女'
            }
          }
        },
        userPet:{
          get(){
            let _this=this
            if(_this.jsondata1.sex==0){
              return '公'
            }else {
              return '母'
            }
          }
        }
      },
      methods:{
        handleCreate(){
          let _this=this
          //console.log(document.getElementById("cellMap"));
          setTimeout(() => {
            _this.cellMap()
          }, 0);
          //setInterval(this.cellInfMap(),2000);
        },
        // 地图
        cellMap(){
          // 百度地图API功能
          var map = new BMap.Map("cellMap");
          var point = new BMap.Point(116.331398,39.897445);
          map.enableScrollWheelZoom()
          map.centerAndZoom(point,12);
          // 创建地址解析器实例
          var myGeo = new BMap.Geocoder();
          // 将地址解析结果显示在地图上,并调整地图视野
          myGeo.getPoint(this.jsondata1.adoAddress, function(point){
            if (point) {
              map.centerAndZoom(point, 16);
              var marker = new BMap.Marker(point);// 创建标注
              map.addOverlay(marker);
              map.panBy(500,300)
              marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
            }else{
              alert("该地址没有解析到结果!");
            }
          }, "北京市");
        },
          // 判断是否完善个人信息
        ajaxuser(){
          axios.get(this.$store.state.url + `/user/showUser/${this.userId}`).then((result) => {
            console.log(result.data.data[0].address.length)
           if(result.data.data[0].address.length==0){
             alert('请完善个人信息后提交');
             location.href=this.$store.state.myurl+'/user/update'
           }else {
             this.centerDialogVisible = true
           }
          })
            .catch((err) => {
              console.log(err)
            })
        },
        // 登录验证
        islogin(){
          if(!this.$store.state.isLogin) {
            alert("请登录后提交")
            return false
          }else {
           this.ajaxuser()
          }
        },
        wantAdo(){
          this.centerDialogVisible = false
          let _this = this
          $.ajax({
            url: this.$store.state.url+"/adoptions/adoAddApply",
            type: "post",
            data: {
              userId: _this.userId,
              adoId:_this.adoId,
            },
            success: function (result) {
              // console.log(result)
              alert('申请成功')
              location.href=_this.$store.state.myurl+'/user'
            }
          })
        },
        ajax(){
          let _this = this
          this.adoLimit=false,
            this.checkAdo=false,
            this.centerDialogVisible= false,
            this.userId=_this.$store.state.userId,
            this.adoId=_this.$route.params.adoId,
          // 详细信息
          this.jsondata1=[],
            // 所有有意领养者
            this.jsondata2=[],
            // 遍历出的有意领养者
            this.diarys=[]
          axios.get(this.$store.state.url+`/adoptions/details/${this.adoId}`).then((result) => {
            // console.log(result.data)
            this.jsondata1 = result.data.data.jsondata;
            this.jsondata2 = result.data.data.jsondata2;
            this.adostate = result.data.data.jsondata.adostate
            if(result.data.data.jsondata.adoType==1){
              this.adoLimit=true
            }
            if(result.data.data.jsondata.adostate==1){
              this.checkAdo=true
            }
            // console.log(result.data.data.jsondata)
            // console.log(result.data.data.jsondata2)
            for (let i = 0; i < this.jsondata2.length; i++) {
              this.diarys.push(this.jsondata2[i])
            }
          })
        },
      },
      mounted(){
        this.ajax()
      },
    }
</script>

<style scoped>
  .modal-dialog{
    width: 1024px;
  }
  #cellMap {width: 1000px;height: 600px;overflow: hidden;margin:0;font-family:"微软雅黑";}
  .stamp{
    width: 500px;
    height: 500px;
    position: absolute;
    left: 80px;
    top: -65px;
    background: url("../../assets/adoption/yingzhang.png") no-repeat;
    background-size: 100%;
    z-index: 10;
  }
  .list-group-item{
    margin: 5px 5px;
    border-radius:10px ;
  }

</style>

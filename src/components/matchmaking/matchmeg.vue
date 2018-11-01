<template>
    <div class="col-xs-7 col-md-6 col-md-offset-0 col-lg-6 ">
      <h2>{{Mdeldata.title}}</h2>
      <span>{{Mdeldata.relTime}}</span>
      <div class="col-xs-6">
        <h3><span><img src="../../assets/match/love.png" alt=""></span>小宠信息</h3>
        <div class="Pet">
          <span>爱称：{{Mdeldata.PetName}}</span>
          <span>性别：{{Mdeldata.sex}}</span>
          <span>生日：{{Mdeldata.birth}}</span>
          <span>年龄：{{Mdeldata.age}}个月</span>
          <span>品种：{{Mdeldata.type}}</span>
        </div>
      </div>
      <div class="col-xs-6">
        <h3><span><img src="../../assets/match/user.png" alt=""></span>主人信息</h3>
        <div class="use">
          <span>昵称：{{Mdeldata.userName}}</span>
          <span>所在地：
            <button type="button" @click="handleCreate" class="btn btn-link" data-toggle="modal" data-target="#myModal">
       {{Mdeldata.address}}
            </button>
            <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">{{Mdeldata.address}}</h4>
              </div>
              <div class="modal-body">
                <div id="cellMap"></div>
              </div>
            </div>
          </div>
        </div>
            </span>
          <span>电话：{{Mdeldata.userPhone}}</span>
          <div class="aply">
            <m-aply :matId="Mdeldata.matId"></m-aply>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import maply from './maply.vue'
  export default {
        name: "matchmeg",
    components:{
      'm-aply': maply,
    },
    data(){
          return{
            relId:this.$route.params.relId,
            Mdeldata:[],
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
        myGeo.getPoint(this.Mdeldata.address, function(point){
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
    },
    created(){
      axios.get(this.$store.state.url+`/matchmaking/matchdetail/${this.relId}`).then((result) => {
        // console.log(result.data.data[0])
        this.Mdeldata = result.data.data[0];
        if(this.Mdeldata.medReport !=null){
          this.Mdeldata.medReport='已提交体检报告'
        }else this.Mdeldata.medReport='未提交体检报告'
      })
    }
}
</script>

<style scoped>
  .modal-dialog{
    width: 1024px;
  }
  #cellMap {width: 1000px;height: 600px;overflow: hidden;margin:0;font-family:"微软雅黑";}
  .col-xs-7{
    margin-left: 30px;
    /*background-color: cornflowerblue;*/
  }
  .col-xs-7>span{
    display: block;
  }
  .col-xs-6 {
    position: relative;
  }
  .aply{
    position: relative;
    bottom: -10px;
    right:-75px;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #af7adb;
  }
  h3 span{
    padding-right: 10px;
  }
  .Pet span{
     display:block;
     height: 30px;
     line-height: 30px;
     font-size: 14px;
     color: grey;
    padding-left: 30px;
   }
  .use span{
    display: block;
    padding-right: 20px;
    /*height: 30px;*/
    line-height: 30px;
    font-size: 14px;
    color: grey;
    padding-left: 30px;
  }
</style>

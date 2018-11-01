<template>
  <div >
    <ul class="list-group">
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-piggy-bank" aria-hidden="true"> 宠物类型：</span> {{jsondata1.type}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-glass" aria-hidden="true"> 宠物性别：</span> {{petSex}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-time" aria-hidden="true"> 发布时间：</span> {{jsondata1.homeTime}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-map-marker" aria-hidden="true"> 地址：</span> <button type="button"
         @click="handleCreate" class="btn btn-link"  style="text-decoration: none"
         data-toggle="modal" data-target="#myModal">
        {{jsondata1.address}}
      </button>
        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">{{jsondata1.address}}</h4>
              </div>
              <div class="modal-body">
                <div id="cellMap"></div>
              </div>
            </div>
          </div>
        </div>

      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-user" aria-hidden="true"> 发布者：</span>
        <!--<router-link tag="a" :to="">-->
          <span>{{jsondata1.userName}}</span>
        &nbsp;&nbsp;&nbsp; <span>联系方式： {{jsondata1.userPhone}}</span>
        <!--游客可见的个人信息-->
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "detailsmes",
    data(){
      return{
        homeId:this.$route.params.homeId,
        // 详细信息
        jsondata1:[],
        diarys:[]
      }
    },
    computed:{
      petSex:{
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
        myGeo.getPoint(this.jsondata1.address, function(point){
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
      axios.get(this.$store.state.url+`/homeless/homelessdetails/${this.homeId}`).then((result) => {
        // console.log(result.data.data);
        this.jsondata1 = result.data.data;
      })
    }
  }

</script>

<style scoped>
  .modal-dialog{
    width: 1024px;
  }
  #cellMap {width: 1000px;height: 600px;overflow: hidden;margin:0;font-family:"微软雅黑";}
  .list-group-item{
    margin: 5px 5px;
    border-radius:10px ;
  }

</style>

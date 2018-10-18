<template>
  <div >
    <ul class="list-group">
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-piggy-bank" aria-hidden="true"> 宠物类型：</span> {{jsondata1.petType}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-glass" aria-hidden="true"> 宠物性别：</span> {{jsondata1.sex?'母':'公'}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-time" aria-hidden="true"> 发布时间：</span> {{jsondata1.adoTime}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-map-marker" aria-hidden="true"> 地址：</span> {{jsondata1.adoAddress}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-user" aria-hidden="true"> 联系人：</span> {{jsondata1.realName}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-earphone" aria-hidden="true"> 联系电话：</span> {{jsondata1.userPhone}}
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-heart-empty"  aria-hidden="true"> 有意领养者：</span>
        <span style="margin-left: 10px" v-for="diary in diarys">
          <router-link tag="a" :to="'/userDetails/'+diary.userId">{{diary.realName}}</router-link>
        </span>

      </li>
    </ul>
    <button type="button" class="btn btn-lg btn-primary">我想领养</button>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "DetailsInfo",
      data(){
          return{
            adoId:this.$route.params.adoId,
            // 详细信息
            jsondata1:[],
            // 所有有意领养者
            jsondata2:[],
            // 便利出的有意领养者
            diarys:[]
          }
      },
      created(){
        axios.get(`http://localhost:3000/adoptions/details/${this.adoId}`).then((result) => {
          // console.log(result.data)
          this.jsondata1 = result.data.data.jsondata;
          this.jsondata2 = result.data.data.jsondata2;
          // console.log(result.data.data.jsondata)
          // console.log(result.data.data.jsondata2)
          for (let i = 0; i < this.jsondata2.length; i++) {
            this.diarys.push(this.jsondata2[i])
          }
        })
      }
    }

</script>

<style scoped>
  .list-group-item{
    margin: 5px 5px;
    border-radius:10px ;
  }
  button{
    margin-left: 50px;
  }
</style>

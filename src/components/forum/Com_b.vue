<template>
   <div> <!--发帖-->

     <div class="con">
      #{{name}}
       <br>
       <br>
       <form >
         <div class="form-group">
           <label >请输入标题</label>
           <input  class="form-control" v-model="title">
         </div>
         <div class="form-group">
           <label>请输入内容</label>
           <textarea class="form-control" v-model="text"></textarea>
         </div>
         <div class="form-group">
           <label>上传图片</label>
           <input type="file" >
         </div>
         <input class="btn btn-default" type="submit"  @click="addForum" value="发表">
       </form>

     </div>
     <p v-if="vv" class="cc">发表成功~</p>
  </div>
</template>
<script>
  import  axios from 'axios'
  import store from './store.js'
  import {mapGetters} from 'vuex';
  export default {
    name:  "Com_b",
    computed: mapGetters([
      'UserId',
      'UserName',
    ]),
    data () {
      return {
        name:store.state.name,
        title:'',
        text:'',
        type:store.state.nametype,
        vv:false
      }
    },
    methods: {
      addForum() {
        if (this.text != ''&&this.title!='') {
          if(this.title.length>20){
            alert('最多输入20个字哦')
          }else{


          let aa = {
            faTitle: this.title,
            faText: this.text,
            userId: this.UserId.replace(/\"/g, ""),
            userName: this.UserName.replace(/\"/g, ""),
            faType: this.type,
          }
          this.title='';
          this.text = '';
          let _this=this;
          $.ajax({
            url: "http://localhost:3000/forumAdd/art",
            type: "post",
            data: aa,
            success: function (result) {
              console.log(result.data)
              _this.cc()
            }
          })
        }
        }
      },
      cc(){
        let _this=this
        _this.vv=true
        setTimeout(function () {
          _this.vv=false
        },3000)
      }
    },
  }
</script>

<style scoped>
  .cc{
    position: fixed;
    top:50%;
    left:30%;
    color:#ccc;
  }
.con{
  width: 768px;
  background: white;
  padding:50px;
  padding-top:20px;
}
textarea{
    resize:none;
    height: 200px;
  }
</style>

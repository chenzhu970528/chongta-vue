<template>
  <div id="content">
    <div class="left">
      <!--详细内容     -->
       <div class="val">
        <div><h2>{{value.art[0].faTitle}}</h2></div>
        <div class="headpic">

          <img class='headimg' :src='values[0].headPic' alt="">
          <span class="name">{{value.art[0].userName}}</span>

          <span>{{value.art[0].time.slice(0,16).replace('T',' ')}}</span>
          <span class="r">
            <span class="s glyphicon" :class='aa' @click="a">{{value.like[0].like_sum}}</span>
            <span>&nbsp{{value.sum[0][0].sum_count}}回复</span>
          </span>
          <span class="glyphicon glyphicon-edit"></span>
        </div>
         <!--帖子的内容-->
        <div class="img">
          <p>{{value.art[0].faText}}</p>
          <div v-for="img in imgs" class="center">
            <img  :src='img' alt="" >
          </div>

        </div>
      </div>
      <el-input v-model="input" style="width:755px;margin-top:50px;" placeholder="把你想说的话发出来吧"></el-input>

      <button type="button" class="rbtn btn btn-primary btn-sm active">发表</button>
      <!--评论区域-->
      <div class="com">
        <ul>
          <li v-for="(com,index) in value.comment">
            <div class="border1">
              <div class="head1">
                <img :src='imgs[0]' alt="" class="img1">
                <div class="headRight">
                  <p class="name1">{{com.userName}}</p>
                  <p>{{com.time.slice(0,16).replace('T',' ')}}</p>
                </div>
              </div>
              <div class="val1">
                <div class="but">
                  <div class="">
                    <p>{{com.faText}}</p>
                  </div>
                  <div class="com11">
                    <button type="button" class="btn1 btn btn-primary btn-sm active">回复</button>
                  </div>
                </div>
                <!--回复-->

                <div class="com1 " v-for="reply in  value.comment[index].replys">
                  <div class="head">
                    <img :src='imgs[1]' alt=""  class="img1">
                    <div class="headRight">
                      <p><span class="name1">{{reply.frName}}</span> 回复<span class="name1">{{reply.fcName}}</span> </p>
                      <p>{{reply.time.slice(0,15).replace('T',' ')}}</p>
                    </div>
                  </div>
                  <div class="val1 but">
                    <p class="p">{{reply.frText}}</p>
                    <div class="com11">
                      <button type="button" class="btn1 btn btn-primary btn-sm active">回复</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <br>
        <button type="button" class="btn btn-primary btn-lg btn-block">加载更多</button>

      </div>

    </div>
    <div class="right">
      <ranking></ranking>
    </div>
  </div>
</template>

<script>
  import Ranking from './Ranking'
  import  axios from 'axios'
  import Com_b from './Com_b'

  export default {
    name: "Details",
    components: {
      'comment': Comment,
      'ranking': Ranking,
      'com_b': Com_b,
    },

    data() {
      return {
        values: [{
          headPic: require("../../assets/images/a.jpg"),
        }],
        value:[],
        imgs: [require("../../assets/mao1.jpg"), require("../../assets/images/a.jpg")],
        aa:'glyphicon-heart-empty',
        as:true,
        replys:[
          {
            name1: '双方都',
            name2: '奋斗奋斗',
            time:'2018/10/17 10:08',
            head: require('../../assets/images/a.jpg'),
            val:'家境优喵受，究竟会发生怎样的化学反应？'
          },{
            name1: '滴滴滴',
            name2: '功能',
            time:'2018/10/17 10:08',
            head: require('../../assets/mao1.jpg'),
            val:'世的霸道总攻喵，遇到家发生怎样的化学反应？'
          },{
            name1: '的非官方',
            name2: '发的发的',
            time:'2018/10/17 10:08',
            head: require('../../assets/images/a.jpg'),
            val:'说的任性样的化学反应？'
          },
        ],
        input:'',
      }
    },
    methods:{
      a(){
        this.as=!this.as;
        if(this.as){
          this.aa='glyphicon-heart-empty';
          this.value.like[0].like_sum--
        }else{
          this.aa='glyphicon-heart';
          this.value.like[0].like_sum++
        }
      }

    },
    mounted(){
      let get=this;
      axios.get(`http://localhost:3000/forumSee/all?faId=5`).then((result) => {

        get.value = result.data.data;

        for (let i = 0; i < get.value.comment.length; i++) {
          get.value.comment[i].replys=[]
          for (let j = 0; j< get.value.reply.length; j++) {

            if (get.value.comment[i].fcId == get.value.reply[j].fcId) {

              get.value.comment[i].replys.push(get.value.reply[j])
            }
          }


        }
        console.log(get.value.comment)
      })
    }
  }
</script>

<style scoped>
  #content {
    box-shadow: -2px 2px 10px 2px #bcbcbc;
    background: rgba(255, 255, 255, 0.9);
    width: 1240px;
    margin: auto;
    position: relative;
    padding-bottom:300px;
  }
h2{
  height: 50px;
  line-height: 50px;
}
  .left {
    display: inline-block;
    width: 800px;
background: white;
    /*border:1px solid #989898;*/
    margin:25px 0 0 25px;
    padding:22px;
  }
  .headpic{
    width: 740px;
    height: 90px;
    line-height: 70px;
  }
  .name{
    font-size:18px;
  }
.r{
  font-size:18px;
  float:right;
  line-height: 60px;
}
.s:hover{
  cursor:pointer;
}
  .headimg {
    width: 60px;
    height: 60px;
    border-radius: 60px;
  }
.img{
  width: 754px;
  display:block;
  font-size:18px;

}
  .center{
    width: 754px;
    text-align: center;
  }
.center>img{
  margin:auto;
  max-width:754px;
}

.val{
  border-bottom: 1px dotted #ddd;
  padding-bottom: 60px;
}
.com{
  padding:60px 0 ;
}
  .right {
    position: absolute;
    top: 24px;
    right: 25px;
    width: 360px;
  }

.rbtn{
  float:right;
}
   li {
     margin-left: -40px;
     list-style: none;
   }
  .head1{
    width: 754px;
    height: 50px;
    line-height: 50px;
    margin-bottom:20px;
  }
  .headRight{
    display: inline-block;
  }
  .headRight>p{
    height: 15px;
  }
  .name1{
    font-size:15px;
    color: #285f8f;
  }
  .img1 {
    width: 44px;
    height: 44px;
    border-radius: 22px;
    vertical-align: unset;
  }

  .val1 {
    margin-left: 50px;
    font-size:15px;
  }
  .com1{
    margin-bottom:0px ;
    margin-top:5px ;
  }
  .com11{
    height: 30px;
    margin-top:-10px ;
    margin-bottom:5px ;
  }
  .btn1{
    display: none;
  }
  .but:hover button{
    display: block;
  }
  .border1{
    border-bottom:1px dotted #ccc;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
</style>

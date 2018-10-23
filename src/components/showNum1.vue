<template>
  <div>
    <div class="number-grow-warp">
      <span ref="numberGrow1" :data-time="time" class="number-grow" :data-value="value">0</span>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "showNum1",
      data(){
        return{
          Mdeldata:[],
          nums:'',
          num1:''
        }
      },
      props: {
        time: {
          type: Number,
          default: 2
        },
        value: {
          type: Number,
          default:100,
        }
      },
      created(){

      },
      mounted () {
        this.numberGrow(this.$refs.numberGrow1)
        axios.get(`http://localhost:3000/user/num`).then((result) => {
          // let _this=this;
          this.nums = result.data.data;
          this.num1=parseInt(this.nums)
          // console.log(typeof this.num1);
          // this.props.value.default=this.num1;
          console.log(this.nums)
          this.getNum()
        })
      },
      methods: {
        getNum(){
          let _this=this;
          _this.value=_this.num1
          console.log(_this.value)
        },
        numberGrow (ele) {
          let _this = this
          let step = (_this.value * 10) / (2 * 1000)
          let current = 0
          let start = 0
          let t = setInterval(function () {
            start += step
            if (start > _this.value) {
              clearInterval(t)
              start = _this.value
              t = null
            }
            if (current === start) {
              return
            }
            current = start
            ele.innerHTML = current.toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, '$1,')
          }, 50)
        }
      },

    }
</script>

<style scoped>
  .number-grow-warp{
    transform: translateZ(0);
  }
  .number-grow {
    font-family: Arial-BoldMT;
    font-size: 64px;
    color: #4278ff;
    letter-spacing: 2.67px;
    /*margin:110px 0 20px;*/
    display: block;
    line-height:80px;
  }
</style>

<template>
  <div class="fenlei">
    <div class="col-xs-8">
      <div style="font-size: 18px">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="流浪讯息" name="first">
            <all></all>
          </el-tab-pane>
          <el-tab-pane label="寻宠启示" name="second" ><div ><looking></looking></div></el-tab-pane>
          <el-tab-pane label="已找到" name="third"><looked></looked></el-tab-pane>
        </el-tabs>
      </div>
      <div class="test">
        <span>公告：
          <required></required><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <!--<el-badge :value="12" class="item">-->
            <!--<router-link tag="li" active-class="active" role="presentation" :to="'/user/'+UserId+'/personal'" style="list-style: none">-->
              <!--<el-button size="small" class="fenlei" style="margin-top: -15px;margin-left: 75px">全部消息</el-button>-->
            <!--</router-link>-->
      <!--</el-badge>-->
        </span>
      </div>
    </div>
    <hot></hot>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import required from './required'
  import all from './all'
  import looking from './looking'
  import looked from './looked'
  import hot from './hot'
  import personal from '../user/accManagement/personal'
    export default {
      name: "fenlei",
      components: {
        'required': required,
        'all':all,
        'looking': looking,
        'looked':looked,
        'hot':hot,
        'personal':personal
        // 'reward':reward
      },
      computed: mapGetters([
        'UserId',
        'UserName',
        'isLogin'
      ]),
      data() {
        return {
          activeName2: 'first'
        };
      },
      methods: {
        handleClick(tab, event) {
          // console.log(tab, event);
        }
      }
        }
</script>

<style scoped>
  .test{
    position: absolute;
    top: -10px;
    right: 50px;
  }
/*.fenlei{*/
  /*margin-top: 50px;*/
/*}*/
</style>

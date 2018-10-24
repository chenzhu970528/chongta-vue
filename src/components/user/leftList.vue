<template>
  <div class="left">
    <el-menu
      default-active="2"
      text-color="#686868"
      background-color="rgba(255,255,255,0.5)"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <span>账号管理</span>
        </template>
        <!--更新-->
        <el-menu-item-group>
          <el-menu-item index="1-1"><router-link tag="li" active-class="active"  role="presentation" to="/user"exact>个人资料</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link tag="li" active-class="active"  role="presentation" to="/user/update">编辑个人资料</router-link></el-menu-item>
          <el-menu-item index="1-3"><router-link tag="li" active-class="active"  role="presentation" to="/user/changepwd">修改密码</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <span slot="title">发布/申请</span>
        <el-menu-item-group>
          <el-menu-item index="2-1"><router-link tag="li" active-class="active"  role="presentation" to="/user/myado">领养</router-link></el-menu-item>
          <el-menu-item index="2-2"><router-link tag="li" active-class="active"  role="presentation" to="/user/mylost">寻宠启示</router-link></el-menu-item>
          <el-menu-item index="2-3"><router-link tag="li" active-class="active"  role="presentation" to="/user/myhomls">流浪小宠</router-link></el-menu-item>
          <el-menu-item index="2-4"><router-link tag="li" active-class="active"  role="presentation" to="/user/mymatch">相亲角</router-link></el-menu-item>
          <el-menu-item index="2-5"><router-link tag="li" active-class="active"  role="presentation" to="/user/aplyme">申请我的</router-link></el-menu-item>
          <el-menu-item index="2-6"><router-link tag="li" active-class="active"  role="presentation" to="/user/myaply">我的申请</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <span slot="title">论坛</span>
        <el-menu-item-group>
          <el-menu-item index="3-2"><router-link tag="li" active-class="active"  role="presentation" to="/user/diary">领养日记</router-link></el-menu-item>
          <el-menu-item index="3-3"><router-link tag="li" active-class="active"  role="presentation" to="/user/dailylife">交流日常</router-link></el-menu-item>
          <el-menu-item index="3-4"><router-link tag="li" active-class="active"  role="presentation" to="/userke">我的收藏</router-link></el-menu-item>
          <el-menu-item index="3-5"><router-link tag="li" active-class="active"  role="presentation" to="/user/mycom">我的评论</router-link></el-menu-item>
          <el-menu-item index="3-6"><router-link tag="li" active-class="active"  role="presentation" to="/user/comme">评论我的</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  import Login from '../../components/user/Login.vue'
  import {mapGetters} from 'vuex';
  export default {
    name: "leftList",
    components:{
      'user-login':Login,
    },
    computed: mapGetters([
      'UserId',
      'isLogin'
    ]),
    data() {
      return {
        tabPosition: 'left',
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
  };
</script>

<style scoped>
  .left{
    position: relative;
    top: 40px;
    /*left: 40px;*/
    /*background-color: rgba(255,255,255,0.5);*/
  }

</style>

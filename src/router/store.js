// 调用第三方Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
function isLogin() {
  var login = {};
  login.userId = localStorage.getItem("userId");
  login.userName =localStorage.getItem("userName");
  if (login.userId) {
    login.isLogin = true;
  } else {
    login.isLogin = false;
    localStorage.clear();
  }
  return login;
}

export default new Vuex.Store({
  state:{
    userId: isLogin().userId,
    isLogin: isLogin().isLogin,
    userName:isLogin().userName,
  },
  getters:{
    isLogin(state) {
      return state.isLogin;
    },
    UserId(state) {
      return state.userId;
    },
    UserName(state){
      return state.userName
    }
  }
})


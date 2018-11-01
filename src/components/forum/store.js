import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let arr=window.localStorage;

const store = new Vuex.Store({
  state: {
    name:'交流分享',
    nametype:'b'
  },
  mutations: {

  },
  addName (state,name) {
      state.name=name.amount
      state.nametype=name.am
    }


})

export default store

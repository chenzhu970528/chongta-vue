import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
window.localStorage.a = 0
const store = new Vuex.Store({
  state: {
    a:1
  },
  mutations: {
    add(state) {
      state.a++

    }
  },



})

export default store

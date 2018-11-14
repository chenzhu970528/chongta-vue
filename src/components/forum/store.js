import Vue from 'vue'
import Vuex from 'vuex'


const store = new Vuex.Store({
  state: {
   a:0,
  },
  mutations: {
    add (state) {
      state.a++
    }
  },


})

export default store

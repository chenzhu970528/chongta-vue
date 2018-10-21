import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    id: 0,
    faId:18,
    key:'标题',
    name:'交流分享',
    nametype:'a'
  },
  mutations: {
    increment (state,payload) {
      state.id=payload.amount
    }  ,
    addID (state,add) {
      state.faId=add.amount
    },
    addKey (state,key) {
      state.key=key.amount
    }
  },
  addName (state,name) {
      state.name=name.amount
      state.nametype=name.am
    }


})

export default store
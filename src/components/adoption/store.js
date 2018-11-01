import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    petType:'-1',
    petSex:'-1',
    cont:0,
  },
  mutations: {
    getcont(state){
      state.cont++
    },
    addpetType(state,type) {
      state.petType=type
    },

    addpetSex(state,sex) {
      state.petSex=sex
    }
  },

})

export default store



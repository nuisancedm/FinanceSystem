import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rowData:{},
  },
  mutations: {
    setRowData(state,payload){
      state.rowData=payload
    }
  },
  actions: {
  },
  modules: {
  }
})

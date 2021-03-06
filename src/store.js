import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: false
  },
  mutations: {
    SET_MENU: (state, value) => {
      state.menu = value
    }
  },
  actions: {

  }
})

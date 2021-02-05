import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    top: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    SET_TOP(state, top) {
      state.top = top
    }
  },
  actions: {
    recordTop({ commit }, top) {
      commit('SET_TOP', top)
    }
  }
})

export default store
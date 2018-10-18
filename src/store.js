import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coe: ''
  },

  mutations: {
    SET_COE: (state, coe) => (state.coe = coe)
  },

  actions: {
    COE: ({ commit, dispatch }, payload) => {
      dispatch('FEEDBACKS_ADD', payload)
      commit('SET_COE', payload)
    }
  }
})

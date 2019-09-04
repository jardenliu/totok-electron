import Vue from 'vue'
import Vuex from 'vuex'
import OS from 'os'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPlatform: OS.platform()
  },
  mutations: {},
  actions: {}
})

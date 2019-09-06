import Vue from 'vue'
import Vuex from 'vuex'
import {
  State as _State,
  Getter as _Getter,
  Mutation as _Mutation,
  Action as _Action
} from 'vuex-class'
import OS from 'os'

import { decorator, keymirror } from './utils'

Vue.use(Vuex)

let state = {
  currentPlatform: OS.platform()
}

let getters = {}

let mutations = {}

let actions = {}

export let types = {
  state: keymirror(state),
  getters: keymirror(getters),
  actions: keymirror(actions),
  mutations: keymirror(mutations)
}
export const State = decorator(_State, types.state)
export const Getter = decorator(_Getter, types.getters)
export const Mutation = decorator(_Mutation, types.mutations)
export const Action = decorator(_Action, types.actions)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'   // 打logger
import vuxModule from './modules/vux'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    vux: vuxModule
  },
  strict: debug // 是否开启严格模式
  // plugins: debug ? [createLogger()] : []
})

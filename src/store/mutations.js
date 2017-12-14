/**
 * Mutations
 * 更改Vuex的store中的状态的唯一方法是提交mutation
 */
import * as types from './mutation-types'

const mutations = {
  [types.LOGIN] (state, login) {
    state.login = login
  }
}

export default mutations

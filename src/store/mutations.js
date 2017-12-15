/**
 * Mutations
 * 更改Vuex的store中的状态的唯一方法是提交mutation
 */
import * as types from './mutation-types'

const mutations = {
  [types.NEW_LIST] (state, list) {
    state.newList = list
  },
  // 头部标题
  [types.HEADER_TITLE] (state, payload) {
    console.log(payload)
    state.headerTitle = payload.title
  },
  [types.LOGIN] (state, login) {
    state.login = login
  }
}

export default mutations

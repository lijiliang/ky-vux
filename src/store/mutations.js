/**
 * Mutations
 * 更改Vuex的store中的状态的唯一方法是提交mutation
 */
import * as types from './mutation-types'

const mutations = {
  // 头部标题
  [types.HEADER_TITLE] (state, payload) {
    state.headerTitle = payload.title
  },

  // 最新消息列表
  [types.NEW_LIST] (state, list) {
    state.newList = list
  },

  // 用户信息
  [types.USER_INFO] (state, payload) {
    state.userInfo = payload
  }
}

export default mutations

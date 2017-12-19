/**
 * Actions
 * Action 类似于 mutation
 * 一次提交多个mutation，可以直接用Actions一次去处理
 */

import axios from 'axios'
import * as types from './mutation-types'
import { showLoading, hideLoading, failLoading } from 'common/utils'
import { getNewsList } from 'api/news'

// 获取最新消息列表
// export const getNewList = function ({commit}) {
//   const _this = this._vm
//   showLoading(_this)
//   getPublic(urls.ActicleNews).then((res) => {
//     hideLoading(_this)
//     commit(types.NEW_LIST, res.data.data)
//   }).catch((error) => {
//     failLoading(_this, error)
//   })
// }

// 获取最新消息列表
export async function getNewList ({commit}) {
  const _vm = this._vm   // vue对象
  showLoading(_vm)
  try {
    const { data } = await getNewsList()
    hideLoading(_vm)
    commit(types.NEW_LIST, data.data)
  } catch (error) {
    failLoading(_vm, error)
  }
}

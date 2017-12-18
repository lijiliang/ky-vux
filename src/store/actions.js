/**
 * Actions
 * Action 类似于 mutation
 * 一次提交多个mutation，可以直接用Actions一次去处理
 */

import axios from 'axios'
import * as types from './mutation-types'
import { urls } from 'common'
import { getPublic } from 'common/fetch'

// 获取最新消息列表
export const getNewList = function ({commit}) {
  getPublic(urls.ActicleNews).then((res) => {
    commit(types.NEW_LIST, res.data.data)
  }).catch((error) => {
    console.log(error)
  })
}

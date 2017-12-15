/**
 * Actions
 * Action 类似于 mutation
 * 一次提交多个mutation，可以直接用Actions一次去处理
 */

import axios from 'axios'
import * as types from './mutation-types'
import { Urls } from 'common'

export const getNewList = function ({commit}) {
  axios.get(Urls.ActicleNews).then((res) => {
    console.log(res)
    commit(types.NEW_LIST, res.data.data)
  }).catch((error) => {
    console.log(error)
  })
}

export const setHeaderTitle = function ({commit}) {
  axios.get(Urls.ActicleNews).then((res) => {
    console.log(res)
    commit(types.NEW_LIST, res.data.data)
  }).catch((error) => {
    console.log(error)
  })
}

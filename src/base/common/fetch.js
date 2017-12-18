/**
 * @fileOverview 获取数据方法
 */

import axios from 'axios'
import cache from 'common/cache'

/*
 * [get get请求]
 * @param  {[string]} url   [请求地址]
 * @param  {[object]} param [传入的参数]
 * @return {[object]}       [返回Promise]
 */
export const get = (url, param) => {
  return (
    axios.get(`${url}`, {
      headers: {Authorization: 'Bearer ' + cache.sessionGet(cache.sessionKeys.ky_cache_access_token) || ''},
      params: param
    })
  )
}

/*
 * [公开get get请求，不需要带token]
 * @param  {[string]} url   [请求地址]
 * @param  {[object]} param [传入的参数]
 * @return {[object]}       [返回Promise]
 */
export const getPublic = (url, param) => {
  return (
    axios.get(`${url}`, {
      params: param
    })
  )
}

/*
 * [公开post post请求，不需要带token]
 * @param  {[string]} url   [请求地址]
 * @param  {[object]} param [传入的参数]
 * @return {[object]}       [返回Promise]
 */
export const postPublic = (url, param, config) => {
  return (
    axios.post(`${url}`, param, config)
  )
}

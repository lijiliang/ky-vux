/**
 * 最新消息 api
 */
import { urls } from 'common'
import { getPublic } from 'common/fetch'

// 获取最新消息列表
export function getNewsList () {
  return getPublic(urls.ActicleNews)
}

// 获取最新消息文章页
export function getActicleInfo (id) {
  return getPublic(urls.ActicleInfo + '/' + id)
}

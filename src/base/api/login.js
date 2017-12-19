/**
 * 登录 api
 */
import { urls, cache } from 'common'
import { get, postPublic } from 'common/fetch'
import Base64 from 'js-base64'
import queryString from 'querystring'

// 获取token
export function postToken (_this, username, password) {
  const kyaniSecurity = Base64.Base64.encode('kyani-shop:security')
  const data = {
    grant_type: 'password',
    username: username,
    password: password,
    scope: 'read write'
  }
  return postPublic(urls.Login, data, {
    headers: {
      Authorization: 'Basic ' + kyaniSecurity,
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformRequest: [function (data) {
      return queryString.stringify(data)
    }]
  })
}

// 获取用户信息
export function getUserCurrent () {
  return get(urls.UserCurrent)
}

/**
 * @fileOverview 工具类
 */

/**
 * [showLoading 显示加载状态]
 */
export function showLoading (that) {
  that.$vux.loading.show({
    text: 'loading'
  })
}

/**
 * [hideLoading 关闭加载状态]
 */
export function hideLoading (that) {
  that.$vux.loading.hide()
}

/*
 * [failLoading 请求服务器错误]
 */
export function failLoading (that, err) {
  console.log(err)
  const response = err.response || {}
  that.$vux.loading.hide()
  if (response.status === 0) {
    that.$vux.toast.text('服务器连接失败!', 'middle')
    return
  }
  if (response.data.message === 'Bad credentials') {
    that.$vux.toast.text('用户名或密码错误！!', 'middle')
    return
  }
  if (response.status === 401 && response.data.error === 'invalid_token') {
    that.$vux.toast.text('请先登录!', 'middle')
    // clearUserSession();
    // setTimeout(() => {
    //     checkMember();
    // }, 1000);
  } else {
    that.$vux.toast.text('服务器请求错误!', 'middle')
    // that.$vux.toast.text(response.data.message, 'middle')
  }
}

import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import { sync } from 'vuex-router-sync'
import router from './base/router'
import store from './store'
import { cache } from 'common'
import { ToastPlugin, AlertPlugin, LoadingPlugin } from 'vux'

// plugins
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)

sync(store, router, {moduleName: 'route'})

// 注册vuex模块
/*
store.registerModule('vux', {
  state: {
    isLoading: false,
    direction: 'forward'
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection (state, payload) {
      state.direction = payload.direction
    }
  }
})
*/

// 解决点击穿透问题
FastClick.attach(document.body)

Vue.config.productionTip = false

// 简单的浏览器历史管理
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach(function (to, from, next) {
  // 循环数据每一项，返回一个条件，只要一个为true,整个返回true
  let bl = to.matched.some(function (item) {
    return item.meta.login
  })
  const isLogined = cache.sessionGet(cache.sessionKeys.ky_cache_isLogined) || false
  if (to.matched.some((item) => item.meta.login)) {
    if (isLogined) {   // 已登录
      gohistory(to, from, next)
    } else {
      router.push({
        path: '/login',
        query: {
          redirect: to.path.slice(1)  // 记录要登录后跳转的目标链接
        }
      })
    }
  } else {
    gohistory(to, from, next)
    // next()
  }
})
router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})

// 控制跳转
function gohistory (to, from, next) {
  // 判断当前切换的是前进forward还是后退reverse
  store.commit('updateLoadingStatus', {isLoading: true})
  const toIndex = history.getItem(to.path)  // 目标页
  const fromIndex = history.getItem(from.path) // 出发页

  if (toIndex) {
    // 再将访问目标页
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', {direction: 'forward'})
    } else {
      store.commit('updateDirection', {direction: 'reverse'})
    }
  } else {
    // 第一次访问目标页toIndex
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', {direction: 'forward'})
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
}

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

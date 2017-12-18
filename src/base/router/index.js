import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import New from '@/components/new/new'
import NewId from '@/components/new/newid'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  /**
   * 滚动行为  点击浏览器前进后退或者切换导航触发
   * @param {*} to 要进入的目标路由对象  要去向哪里
   * @param {*} from  离开的路由对象  从哪里来
   * @param {*} savePosition 记录滚动条的坐标 点击前进后退时记录
   */
  scrollBehavior (to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '/new/:id',
      name: 'NewId',
      component: NewId
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

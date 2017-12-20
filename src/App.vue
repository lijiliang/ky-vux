<template>
  <div id="app">

    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
    <drawer
      width="230px;"
      :show.sync="drawerVisibility"
      show-mode="push"
      :drawer-style="{'background-color':'#002e5e', width: '230px'}"
      >
      <!-- drawer start -->
      <div slot="drawer" >
        <k-menu />
      </div>
      <!-- drawer end -->

      <view-box ref="viewBox" body-padding-top="46px" :body-padding-bottom="bodyPaddingBobbom">
        <x-header slot="header" 
          style="width:100%;position:absolute;left:0;top:0;z-index:100;"
          :title="title ? title : headerTitle" 
          class="header"
          :left-options="leftOptions"
          :transition="headerTransition"
        >
          <span v-if="route.path === '/' || route.path === '/component/drawer'" slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
              <x-icon type="navicon" size="35" style="fill:#332500;position:relative;top:-8px;left:-3px;"></x-icon>
            </span>
          <div v-if="route.path === '/'" class="k-logo"><i class="icon icon-Kyani"></i></div>
          <div slot="right" v-if="route.path !== '/login'">
            <router-link to="/login" v-if="!isLogin">注册 / 登录</router-link>
            <router-link to="/user" v-if="isLogin">我的帐户</router-link>
          </div>
        </x-header>
        <transition
          :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
            <router-view class="router-view"></router-view>
        </transition>
        <!-- @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')" -->

        <tabbar slot="bottom" class="m-tabbar" v-show="!isTabbar">
          <tabbar-item :link="{path:'/'}" :selected="route.path === '/'">
            <i slot="icon" class="icon icon-Kyani"></i>
            <span slot="label">首页</span>
          </tabbar-item>
          <tabbar-item :link="{path:'/new'}" :selected="route.path === '/new'">
            <i slot="icon" class="icon icon-news"></i>
            <span slot="label">最新消息</span>
          </tabbar-item>
          <tabbar-item>
            <i slot="icon" class="icon icon-productlist"></i>
            <span slot="label">产品商城</span>
          </tabbar-item>
          <tabbar-item>
            <i slot="icon" class="icon icon-shoppingCart"></i>
            <span slot="label">购物车</span>
          </tabbar-item>
          <tabbar-item :link="{path:'/user'}" :selected="route.path === '/user'">
            <i slot="icon" class="icon icon-login"></i>
            <span slot="label">我的</span>
          </tabbar-item>
        </tabbar>
        
      </view-box>
    </drawer>
  </div>
</template>

<script>
import {ViewBox, XHeader, Drawer, Tabbar, TabbarItem, Loading, TransferDom} from 'vux'
import KMenu from '@/components/common/KMenu'
import { mapState, mapGetters } from 'vuex'
import { cache } from 'common'

export default {
  name: 'app',
  directives: {
    TransferDom
  },
  data () {
    return {
      drawerVisibility: false
    }
  },
  components: {
    ViewBox,
    XHeader,
    Drawer,
    Tabbar,
    TabbarItem,
    Loading,
    KMenu
  },
  created () {
  },
  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path,
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction,
      headerTitle: state => state.headerTitle
    }),
    ...mapGetters({
      userInfo: 'userInfo'
    }),
    leftOptions () {
      return {
        showBack: this.route.path !== '/'
      }
    },
    title () {
      if (this.route.path === '/') return 'Home'
      if (this.route.path === '/new') return '最新消息'
      if (this.route.path === '/login') return '登录'
      if (this.route.path === '/user') return '用户中心'
    },
    headerTransition () {
      return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
    },
    isTabbar () {
      return /login|aaa/.test(this.route.path)
    },
    isLogin () {
      const isLogined = cache.sessionGet(cache.sessionKeys.ky_cache_isLogined) || this.userInfo.isLogined
      return isLogined
    },
    bodyPaddingBobbom () {
      return /login/.test(this.route.path) ? '0px' : '55px'
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './base/resources/less/iconfont.less';
@import '~varLess';
html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
.vux-header .vux-header-left,
.vux-header .vux-header-left a,
.vux-header .vux-header-left button,
.vux-header .vux-header-right,
.vux-header .vux-header-right .left-arrow,
.vux-header .vux-header-right a,
.vux-header .vux-header-right button,
.vux-header .vux-header-title,
.vux-header h1 {
    color: #332500!important;
}
.vux-header h1,
.weui-tab .vux-header .vux-header-title {
    font-size: 16px;
}
#app{
  height: 100%;
  .header{
    width:100%;
    position:absolute;
    left:0;
    top:0;
    z-index:100;
    background: #fff;
    border: 1px solid #f1f1f1;
  }
  .vux-header .vux-header-left .left-arrow:before{
    border-color: #332500;
  }
  .k-logo{
    .icon{
      font-size: 32px;
      color: #002e5e;
    }
  }
}
.m-tabbar{
  background: #fff!important;
  i.icon{
    line-height: 1;
    font-size: 24px;
  }
}

.router-view {
  width: 100%;
  top: 46px;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  top: 46px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>

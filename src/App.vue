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
        <Menu />
      </div>
      <!-- drawer end -->

      <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
        <x-header slot="header" 
          style="width:100%;position:absolute;left:0;top:0;z-index:100;"
          :title="title" 
          class="header"
          :left-options="leftOptions"
          :transition="headerTransition"
        >
          <span v-if="route.path === '/' || route.path === '/component/drawer'" slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
              <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
            </span>
          <div v-if="route.path === '/'" class="k-logo"><i class="icon icon-Kyani"></i></div>
        </x-header>
        
        <transition
          @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
          :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
            <router-view class="router-view"></router-view>
        </transition>

        <tabbar slot="bottom" class="m-tabbar">
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
          <tabbar-item>
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
import Menu from '@/components/Menu'
import { mapState } from 'vuex'
console.log(Menu)
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
    Menu
  },

  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path,
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    }),
    leftOptions () {
      return {
        showBack: this.route.path !== '/'
      }
    },
    title () {
      if (this.route.path === '/') return 'Home'
      if (this.route.path === '/new') return '最新消息'
    },
    headerTransition () {
      return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './base/resources/less/iconfont.less';
html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
#app{
  height: 100%;
  .header{
    width:100%;
    position:absolute;
    left:0;
    top:0;
    z-index:100;
  }
  .k-logo{
    .icon{
      font-size: 32px;
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

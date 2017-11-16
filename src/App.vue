<template>
  <div id="app">
    <view-box ref="viewBox">
      <x-header slot="header" title="kyani" class="header" :left-options="{showBack: true, backText: ''}">
        <!-- <div slot="left">left</div> -->
        <div>kyani</div>
      </x-header>
      <router-view></router-view>
      <tabbar slot="bottom" class="m-tabbar">
        <tabbar-item selected>
          <i slot="icon" class="icon icon-Kyani"></i>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item>
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
  </div>
</template>

<script>
import {ViewBox, XHeader, Tabbar, TabbarItem} from 'vux'
export default {
  name: 'app',
  components: {
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem
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
}
.m-tabbar{
  background: #fff!important;
  i.icon{
    line-height: 1;
    font-size: 24px;
  }
}
</style>

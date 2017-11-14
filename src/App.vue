<template>
  <div id="app">
    <view-box ref="viewBox">
      <x-header slot="header" title="kyani" class="header" :left-options="{showBack: true, backText: ''}">
        <!-- <div slot="left">left</div> -->
        <div>kyani</div>
      </x-header>
      <router-view></router-view>
      <tabbar slot="bottom">
        <tabbar-item>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item>
          <span slot="label">首页</span>
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
</style>

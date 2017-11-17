<template>
  <div id="app">

    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>

    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
      <x-header slot="header" title="kyani" class="header" :left-options="{showBack: true, backText: ''}">
        <!-- <div slot="left">left</div> -->
        <div>kyani</div>
      </x-header>
      <router-view></router-view>
      <tabbar slot="bottom" class="m-tabbar">
        <tabbar-item :link="{path:'/'}">
          <i slot="icon" class="icon icon-Kyani"></i>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/new'}">
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
import {ViewBox, XHeader, Tabbar, TabbarItem, Loading, TransferDom} from 'vux'
import { mapState } from 'vuex'
export default {
  name: 'app',
  directives: {
    TransferDom
  },
  data () {
    return {
      height: window.innerHeight - 46 - 53
    }
  },
  components: {
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Loading
  },

  computed: {
    ...mapState({
      route: state => state.route,
      // path: state => state.router.path,
      isLoading: state => state.vux.isLoading
    })
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

<template>
  <div class="m-news">
      <router-link class="news-item" v-for="item in list" key="item.id" :to="`new/${item.id}`">
          <div class="thumb">
              <img :src="item.img"/>
          </div>
          <div class="info">
              <h2>{{item.title}}</h2>
              <p>上载日期：{{item.date}}</p>
          </div>
          <div class="more">
              <span>了解更多</span>
          </div>
      </router-link>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'New',
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('getNewList')
  },
  computed: {
    ...mapState({
      list: state => state.newList
    })
  }
}
</script>

<style lang="less">
@import '~varLess';
.m-news{
  .news-item{
      display: block;
      margin: 20px;
      background: #fff;
      border-radius: 6px;
      box-shadow: 1px 1px 15px #b8b8b8, -1px -1px 15px #b8b8b8;
      .thumb{
          img{
              display: block;
              width: 100%;
              // height: 310px;
          }
      }
      .info{
          padding: 10px;
          h2{
              padding: 8px 0;
              font-size: 17px;
              line-height: 1.4;
              font-weight: normal;
              color: @brand-primary;
          }
          p{
              font-size: 15px;
              color: #787878;
          }
      }
      .more{
          line-height: 38px;
          background: #f5f5f5;
          text-align: center;
          font-size: 15px;
          color: #a0a0a0;
      }
  }
}

</style>
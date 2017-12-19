<template>
  <div class="m-news-content">
      {{content}}
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import { getActicleInfo } from 'api/news'
import { showLoading, hideLoading, failLoading } from 'common/utils'
export default {
  name: 'NewId',
  data () {
    return {
      title: '',
      content: ''
    }
  },
  created () {
    this._getActicleInfo()
  },
  methods: {
    // 获取最新消息文章内容
    async _getActicleInfo () {
      const _id = this.$route.params.id
      showLoading(this)
      try {
        const { data } = await getActicleInfo(_id)
        hideLoading(this)
        this.title = data.data.title
        this.content = data.data.content
        this.$store.commit('HEADER_TITLE', {title: data.data.title})
      } catch (err) {
        failLoading(this, err)
      }
    }
  },
  computed: {
  }
}
</script>

<style lang="less">
@import '~varLess';
</style>
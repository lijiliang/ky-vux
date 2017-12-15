<template>
  <div class="m-news-content">
      {{content}}
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import axios from 'axios'
import { Urls } from 'common'
export default {
  name: 'NewId',
  data () {
    return {
      title: '',
      content: ''
    }
  },
  created () {
    const _id = this.$route.params.id
    axios.get(Urls.ActicleInfo + '/' + _id)
        .then((res) => {
          this.title = res.data.data.title
          this.content = res.data.data.content
          this.$store.commit('HEADER_TITLE', {title: res.data.data.title})
        }).catch((error) => {
          console.log(error)
        })
  },
  computed: {
  }
}
</script>

<style lang="less">
@import '~varLess';
</style>
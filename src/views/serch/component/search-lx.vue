<template>
  <div class="search-lx">
      <van-cell icon="search"
       :title="str"
        v-for="(str, index) in suggestion"
         :key="index"
         @click="$emit('search', str)">
        <div slot="title" v-html="highlight(str)"></div>
      </van-cell>
  </div>
</template>

<script>
import { getSearch } from '@/api/search'
import { debounce } from 'lodash'

export default {
  name: 'searchLx',
  components: {},
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      suggestion: []
    }
  },
  computed: {},
  watch: {
    searchText: {
      handler: debounce(async function () {
        const { data } = await getSearch(this.searchText)
        this.suggestion = data.data.options
      }, 400),
      immediate: true
    }
  },
  created () {},
  mounted () {},
  methods: {
    highlight (str) {
      return str.replace(new RegExp(this.searchText, 'gi'), `<span style="color: red">${this.searchText}<span/>`)
    }
  }
}
</script>

<style scoped lang="less"></style>

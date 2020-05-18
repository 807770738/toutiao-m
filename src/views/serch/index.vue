<template>
  <div class="search-container">
      <form action="/">
      <van-search
       v-model="searchText"
       placeholder="请输入搜索关键词"
       show-action
       @search="onSearch(searchText)"
       @cancel="$router.back()"
       @focus="isresShow = false"/>
       </form>
       <!-- 搜索结果 -->
       <searchRes v-if="isresShow" :search-text="searchText"/>
        <!-- 联想建议 -->
       <searchLx v-else-if="searchText" :search-text="searchText" @search="onSearch"></searchLx>
       <!-- 搜索历史 -->
       <searchHistory v-else :searchHistory="searchHistory" @search="onSearch" @update="searchHistory = $event"/>
  </div>
</template>

<script>
import searchLx from './component/search-lx'
import searchHistory from './component/search-history'
import searchRes from './component/search-res'
import { setItem, getItem } from '@/utils/store'
import { getSearchhistory } from '@/api/search'
import { mapState } from 'vuex'
export default {
  name: 'searchIndex',
  components: {
    searchLx,
    searchHistory,
    searchRes
  },
  props: {},
  data () {
    return {
      searchText: '',
      isresShow: false,
      searchHistory: []
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  async created () {
    this.loadsearchHistory()
  },
  mounted () {},
  methods: {
    onSearch (searchText) {
      this.searchText = searchText
      const index = this.searchHistory.indexOf(searchText)
      if (index !== -1) {
        this.searchHistory.splice(index, 1)
      }
      this.searchHistory.unshift(searchText)
      setItem('searchHistory', this.searchHistory)
      this.isresShow = true
    },
    async loadsearchHistory () {
      let searchHistory = getItem('searchHistory') || []
      if (this.user) {
        const { data } = await getSearchhistory()
        searchHistory = [...new Set([
          ...searchHistory,
          ...data.data.keywords
        ])]
      }
      this.searchHistory = searchHistory
    }
  }
}
</script>

<style scoped lang="less"></style>

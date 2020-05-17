<template>
  <div class="article-list">
    <van-pull-refresh v-model="ispullLoading" @refresh="onRefresh" :success-text="succesText">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
        <!-- <van-cell v-for="(article, index) in articleList" :key="index" :title="article.title" /> -->
        <article-item v-for="(article, index) in articleList" :key="index" :article="article" />
      </van-list>
      </van-pull-refresh>
  </div>
</template>

<script>
import { GetArticle } from '@/api/article/'
import ArticleItem from '@/components/article-item/'
export default {
  name: 'ArticleList',
  components: {
    ArticleItem
  },
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      articleList: [],
      loading: false,
      finished: false,
      timestamp: null,
      ispullLoading: false,
      succesText: ''
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLoad () {
      const { data } = await GetArticle({
        channel_id: this.channel.id,
        timestamp: this.timestamp || Date.now(),
        with_top: 1
      })
      const results = data.data.results
      this.articleList.push(...results)
      this.loading = false
      if (results.length) {
        this.timestamp = data.data.pre_timestamp
      } else {
        this.finished = true
      }
    },
    async onRefresh () {
      const { data } = await GetArticle({
        channel_id: this.channel.id,
        timestamp: Date.now(),
        with_top: 1
      })
      const results = data.data.results
      this.articleList.unshift(...results)
      this.ispullLoading = false
      this.succesText = '更新成功'
    }
  }
}
</script>

<style scoped lang="less">
.article-list{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;
  top: 90px;
  overflow-y: auto;
}
</style>

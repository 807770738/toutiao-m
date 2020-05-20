<template>
  <div class="comment-lis">
    <van-cell>全部评论</van-cell>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
  <!-- <van-cell v-for="(comment, index) in list" :key="index" :title="comment.content" /> -->
  <commentItem v-for="(comment, index) in list"
   :key="index"
    :comment="comment"
     @replay-click="$emit('replay-click',$event)">

  </commentItem>
</van-list>
  </div>
</template>

<script>
import { Getcomment } from '@/api/comment'
import commentItem from './comment-item'
export default {
  name: 'commentList',
  components: {
    commentItem
  },
  props: {
    source: {
      type: [Number, String, Object],
      required: true
    },
    type: {
      type: String,
      default: 'a'
    },
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      // list: [],
      loading: false,
      finished: false,
      offset: null,
      limit: 10
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLoad () {
      const { data } = await Getcomment({
        type: this.type,
        source: this.source.toString(),
        offset: this.offset,
        limit: this.limit
      })
      this.$emit('updateTotal', data.data.total_count)
      const { results } = data.data
      this.list.push(...results)
      this.loading = false
      if (results.length) {
        this.offset = data.data.last_id
      } else {
        this.finished = true
      }
    }
  }
}
</script>

<style scoped lang="less"></style>

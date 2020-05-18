<template>
  <div class="search-history">
      <van-cell title="搜索历史">
          <div v-if="isdeleteSshow">
              <span @click="$emit('update', [])">清空</span>&nbsp;&nbsp;
              <span @click="isdeleteSshow = false">完成</span>
          </div>
          <van-icon v-else name="delete" @click="isdeleteSshow = true"/>
      </van-cell>
       <van-cell icon="search"
        :title="history"
        v-for="(history, index) in searchHistory"
        :key="index"
        @click="ondelete(history, index)"
        >
        <van-icon name="close" v-show="isdeleteSshow"/>
      </van-cell>
  </div>
</template>

<script>
import { setItem } from '@/utils/store'
export default {
  name: 'searchHistory',
  components: {},
  props: {
    searchHistory: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isdeleteSshow: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    ondelete (history, index) {
      if (this.isdeleteSshow) {
        this.searchHistory.splice(index, 1)
        setItem('searchHistory', this.searchHistory)
        return
      }
      this.$emit('search', history)
    }
  }
}
</script>

<style scoped lang="less"></style>

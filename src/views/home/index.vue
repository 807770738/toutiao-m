<template>
  <div class="shouye-container">
   <van-nav-bar>
      <van-button class="search-btn" type="info" slot="title" icon="search" round size="small">搜索</van-button>
   </van-nav-bar>
   <!-- 文章频道 -->
   <van-tabs v-model="active" class="tabs">
    <van-tab class="tabs-item" :title="channel.name"  v-for="channel in channels" :key="channel.id">
      <article-list :channel="channel"></article-list>
    </van-tab>
    <div slot="nav-right" @click="isShow=true" class="nav-r"><van-icon name="wap-nav" /></div>
  </van-tabs>
  <!-- 弹出层 -->
  <van-popup v-model="isShow" position="bottom" :style="{ height: '100%' }" closeable get-container="body">
  <tanceng :channels="channels" @close="isShow = false" @update-active="onupdateActive" :active="active"/>
  </van-popup>
  </div>
</template>

<script>
import { GetUserlb } from '@/api/user'
import ArticleList from '@/components/article-list'
import tanceng from './component/tanceng'
export default {
  name: 'shouyeIndex',
  components: {
    ArticleList,
    tanceng
  },
  props: {},
  data () {
    return {
      active: 0,
      channels: [],
      isShow: true
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadlb()
  },
  mounted () {},
  methods: {
    async loadlb () {
      const { data } = await GetUserlb()
      this.channels = data.data.channels
    },
    onupdateActive (index) {
      this.active = index
    }
  }
}
</script>

<style scoped lang="less">
.van-nav-bar .van-icon {
  color:#fff;
}
.search-btn{
  width: 277px;
  height: 32px;
  background-color: #55a8fb;
}
/deep/.van-nav-bar__title {
  max-width: none;
}
.tabs{
/deep/ .van-tab{
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  }
}
.nav-r{
  position: fixed;
  right: 0;
  line-height: 50px;
  margin-right: 5px;
  background-color: #fff;
  opacity: .8;
}
</style>

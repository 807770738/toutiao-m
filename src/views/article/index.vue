<template>
  <div class="article-container">
      <van-nav-bar
        class="nav"
        title="文章详情"
        @click-left="$router.back()"
        left-arrow
    />
    <h1 class="title">牛逼程序员的日常</h1>
    <van-cell center class="author">
      <div slot="title" class="name">旗木卡卡西</div>
      <van-image
      class="img"
      slot="icon"
      round
     fit="cover"
      src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div slot="label" class="time">1小时前</div>
      <van-button class="btn" type="info" round size="small">+ 关注</van-button>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'articleIndex',
  components: {},
  props: {
    articleId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.title{
    font-size: 20px;
    padding: 14px;
    background-color: #fff;
    margin: 0;
}
.name{
    font-size: 12px;
}
.img{
    width: 35px;
    height: 35px;
    margin-right: 8px;
}
.btn{
    width: 85px;
    height: 30px;
}
</style>

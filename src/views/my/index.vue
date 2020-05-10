<template>
  <div class="my-Container">
    <!-- 头部 -->
    <van-cell-group>
      <van-cell title="单元格" value="内容" center>
        <div slot="icon">
          <van-image width="50" height="50" round fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div slot="title">昵称</div>
        <van-button size="small" round >编辑资料</van-button>
      </van-cell>
      <!-- 导航栏 -->
      <van-grid>
        <van-grid-item text="文字">
          <span slot="icon">111</span>
        </van-grid-item>
        <van-grid-item text="文字">
          <span slot="icon">111</span>
        </van-grid-item>
        <van-grid-item text="文字">
          <span slot="icon">111</span>
        </van-grid-item>
        <van-grid-item text="文字">
          <span slot="icon">111</span>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <!-- 内容区 -->
    <van-grid :column-num="2">
      <van-grid-item icon="star-o" text="收藏" />
      <van-grid-item icon="clock-o" text="历史" />
    </van-grid>
    <!-- 消息通知模块 -->
    <van-cell title="消息通知" is-link url="/" />
    <van-cell title="小智同学" is-link to="/" />

    <!-- 退出登录 -->
    <van-button type="primary" block>退出登录</van-button>
  </div>
</template>

<script>
export default {
  name: 'myIndex',
  components: {},
  props: {},
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

<style scoped lang="less"></style>

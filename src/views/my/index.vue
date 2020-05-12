<template>
  <div class="my-Container">
    <!-- 头部 -->
    <van-cell-group  class="header">
      <van-cell title="单元格" value="内容" center :border="false">
        <div slot="icon">
          <van-image width="50" height="50" round fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div slot="title" class="title">黑马头条号</div>
        <van-button size="mini" round class="btn">编辑资料</van-button>
      </van-cell>
      <!-- 导航栏 -->
         <van-grid :border="false" class="nav">
        <van-grid-item>
         <div>111</div>
         <div class="text">头条</div>
        </van-grid-item>
        <van-grid-item >
         <div>111</div>
         <div class="text">关注</div>
        </van-grid-item>
        <van-grid-item>
         <div>111</div>
         <div class="text">粉丝</div>
        </van-grid-item>
        <van-grid-item>
         <div>111</div>
         <div class="text">获赞</div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <!-- 内容区 -->
    <div>
    <van-grid :column-num="2" class="tubiao">
      <van-grid-item icon="star-o" text="收藏" />
      <van-grid-item icon="clock-o" text="历史" />
    </van-grid>
    </div>
    <!-- 消息通知模块 -->
    <div class="info">
    <van-cell title="消息通知" is-link url="/" />
    <van-cell title="小智同学" is-link to="/" />
    </div>

    <!-- 退出登录 -->
    <van-button class="tuichu" block>退出登录</van-button>
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

<style scoped lang="less">
.header{
  background:url(./banner.png) no-repeat;
  background-size: cover;
}
.title{
  font-size: 14px;
  margin-left:15px;
  color: #fff;
}
.nav {
  font-size: 18px;
  color: #fff;
  .text{
    font-size: 12px;
  }
}
.van-cell--borderless{
  background: unset;
}
/deep/ .van-grid-item__content{
  background: unset;
}
.info{
  margin: 8px 0;
}
.btn{
  background-color: #ffffff;
  color: #666666;
  padding: 0 10px;
}
.tuichu{
  color: #d86262;
}
.tubiao{
  color:#d86262;
  background-color: #fff;
}
</style>

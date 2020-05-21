<template>
  <div class="my-Container">
    <!-- 头部 -->
    <van-cell-group v-if="user" class="header">
      <van-cell title="单元格" value="内容" center :border="false">
        <div slot="icon">
          <van-image width="50" height="50" round fit="cover" :src="currentUser.photo" />
        </div>
        <div slot="title" class="title">{{currentUser.name}}</div>
        <van-button size="mini" round class="btn" to="/userIfor">编辑资料</van-button>
      </van-cell>
      <!-- 导航栏 -->
         <van-grid :border="false" class="nav">
        <van-grid-item>
         <div>{{currentUser.art_count}}</div>
         <div class="text">头条</div>
        </van-grid-item>
        <van-grid-item >
         <div>{{currentUser.follow_count}}</div>
         <div class="text">关注</div>
        </van-grid-item>
        <van-grid-item>
         <div>{{currentUser.fans_count}}</div>
         <div class="text">粉丝</div>
        </van-grid-item>
        <van-grid-item>
         <div>{{currentUser.like_count}}</div>
         <div class="text">获赞</div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <div v-else class="no-login">
      <div class="img" @click="$router.push('/login')">
        <img src="./头像.png" alt="">
      </div>
      登录 / 注册
    </div>
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
    <van-button class="tuichu" block v-if="user" @click="onlogin">退出登录</van-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { GetUser } from '@/api/user'
export default {
  name: 'myIndex',
  components: {},
  props: {},
  data () {
    return {
      currentUser: {}
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  created () {
    this.loadcrentUser()
  },
  mounted () {},
  methods: {
    async loadcrentUser () {
      const { data } = await GetUser()
      this.currentUser = data.data
    },
    onlogin () {
      this.$dialog.confirm({
        title: '标题',
        message: '弹窗内容'
      })
        .then(() => {
          // on confirm
          this.$store.commit('setUser', null)
        })
        .catch(() => {
          // on cancel
        })
    }
  }
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
.no-login{
  height: 180px;
  background: url(./banner.png) no-repeat;
  background-size: cover;
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  .img{
    padding-bottom: 5px;
  }
  img{
    width: 66px;
    height: 66px;
  }
}
</style>

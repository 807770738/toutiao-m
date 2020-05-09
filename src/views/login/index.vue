<template>
  <div class="login-Container">
    <van-nav-bar
  title="注册 / 登录"
  left-arrow
  @click-left="$router.back()"
/>
<!-- 输入框 -->
<van-cell-group>
  <van-field
    v-model="user.mobile"
    icon-prefix="toutiao"
    left-icon="shouji"
    placeholder="请输入手机号"
  />
  <van-field
    v-model="user.code"
    clearable
    icon-prefix="toutiao"
    left-icon="yanzhengma"
    placeholder="请输入验证码"
  >
  <template #button>
    <div class="fasong">
      <van-button type="primary" round size="mini">发送验证码</van-button>
    </div>
  </template>
  </van-field>
  <div class="login-btn">
    <van-button type="info" block @click="onlogin">登录</van-button>
  </div>
</van-cell-group>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onlogin () {
      const res = await login(this.user)
      console.log(res)
    }
  }
}
</script>

<style scoped lang="less"></style>

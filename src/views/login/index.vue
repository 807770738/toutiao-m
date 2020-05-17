<template>
  <div class="login-Container">
    <van-nav-bar
  title="注册 / 登录"
  left-arrow
  @click-left="$router.back()"
/>
<!-- 输入框 -->
<van-form :show-error="false" :show-error-message="false" validate-first ref="login-form" @submit="onlogin" @failed="onFaild">
  <van-field
    v-model="user.mobile"
    icon-prefix="toutiao"
    left-icon="shouji"
    placeholder="请输入手机号"
    :rules="formRules.mobile"
    name="mobile"
  />
  <van-field
    v-model="user.code"
    clearable
    icon-prefix="toutiao"
    left-icon="yanzhengma"
    placeholder="请输入验证码"
    :rules="formRules.code"
    name="code"
  >
  <template #button>
    <div class="fasong">
      <van-count-down v-if="isShow" :time="1000 * 60" format="ss s" @finish="isShow = false"/>
      <van-button v-else type="primary" round size="mini" @click.prevent="onSend" :loading="isSendLoading">发送验证码</van-button>
    </div>
  </template>
    </van-field>
  <div class="login-btn">
    <van-button type="info" block>登录</van-button>
  </div>
</van-form>
  </div>
</template>

<script>
import { login, Send } from '@/api/user'
import { Toast } from 'vant'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      formRules: {
        mobile: [
          { required: true, message: '请填写用户名' },
          { pattern: /^1[3456789]\d{9}$/, message: '手机号格式错误' }
        ],
        code: [
          { required: true, message: '请填写验证码' },
          { pattern: /^\d{6}$/, message: '验证码输入错误' }
        ]
      },
      isShow: false,
      isSendLoading: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onlogin () {
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      try {
        const res = await login(this.user)
        // console.log(res)
        this.$toast.success('登录成功')
        this.$store.commit('setUser', res.data.data)
        this.$router.back()
      } catch (err) {
        console.log(err)
        this.$toast.fail('登录失败')
      }
    },
    onFaild (error) {
      if (error.errors[0]) {
        this.$toast(error.errors[0].message)
      }
    },
    async onSend () {
      try {
        await this.$refs['login-form'].validate('mobile')
        this.isSendLoading = true
        const res = await Send(this.user.mobile)
        console.log(res)
        this.isShow = true
      } catch (err) {
        let message = ''
        if (err && err.response && err.response.status === 429) {
          message = '请稍后再试'
        } else if (err.name === 'mobile') {
          message = err.message
        } else {
          message = '发送失败'
        }
        this.$toast({
          message
        })
      }
      this.isSendLoading = false
    }
  }
}
</script>

<style scoped lang="less"></style>

<template>
  <div class="userName">
      <van-nav-bar
      class="nav"
      title="修改昵称"
      left-text="取消"
      right-text="完成"
      @click-left="$emit('close')"
      @click-right="onConfirm"
  />
  <!-- 输入框 -->
  <div class="inpt">
      <van-field
        v-model="message"
        rows="2"
        autosize
        type="textarea"
        maxlength="7"
        placeholder="请输入昵称"
        show-word-limit
        />
  </div>
  </div>
</template>

<script>
import { updateuserinfo } from '@/api/user'
export default {
  name: 'userName',
  components: {
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      message: this.value
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onConfirm () {
      this.$toast.loading({
        message: '保存中',
        forbidClick: true
      })
      try {
        await updateuserinfo({
          name: this.message
        })
        this.$emit('input', this.message)
        this.$emit('close')
        this.$toast.success('保存成功')
      } catch (err) {
        if (err && err.response && err.response.status === 409) {
          this.$toast.fail('昵称已存在')
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
/deep/.nav span{
    color: #fff !important;
}
.inpt{
    padding: 10px;
}
</style>

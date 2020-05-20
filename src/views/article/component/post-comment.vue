<template>
  <div class="post-comment">
      <van-field
        v-model="message"
        rows="2"
        autosize
        type="textarea"
        maxlength="50"
        placeholder="请输入留言"
        show-word-limit
/>
<van-button size="mini" @click="onpost">发布</van-button>
  </div>
</template>

<script>
import { addpost } from '@/api/comment'
export default {
  name: 'postComment',
  components: {},
  props: {
    target: {
      type: [Number, String, Object],
      required: true
    },
    articleId: {
      type: [Number, String, Object],
      default: null
    }
  },
  data () {
    return {
      message: ''
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onpost () {
      const { data } = await addpost({
        target: this.target.toString(),
        content: this.message,
        art_id: this.articleId ? this.articleId.toString() : null
      })
      this.$emit('post-success', data.data.new_obj)
      this.$toast.success('发布成功')
      this.message = ''
    }
  }
}
</script>

<style scoped lang="less">
.post-comment{
    display: flex;
    align-items: center;
}
</style>

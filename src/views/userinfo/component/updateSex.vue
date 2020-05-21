<template>
  <div class="updateSex">
    <van-picker
      title="标题"
      show-toolbar
      :columns="columns"
      :default-index="defaultIndex"
      @confirm="onConfirm"
      @cancel="$emit('close')"
      @change="onChange"
    />
  </div>
</template>

<script>
import { updateuserinfo } from '@/api/user'
export default {
  name: 'updateSex',
  components: {},
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      columns: ['男', '女'],
      defaultIndex: this.value
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onChange (picker, value, index) {
      this.defaultIndex = index
    },
    async onConfirm () {
      this.$toast.loading({
        message: '保存中',
        forbidClick: true
      })
      try {
        await updateuserinfo({
          gender: this.defaultIndex
        })
        this.$emit('input', this.defaultIndex)
        this.$emit('close')
        this.$toast.success('保存成功')
      } catch (err) {
      }
    }
  }
}
</script>

<style scoped lang="less"></style>

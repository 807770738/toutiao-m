<template>
  <div class="updatePhoto">
    <img :src="image" alt="">
     <van-nav-bar
     class="nav"
      left-text="取消"
      right-text="确认"
      @click-left="$emit('close')"
      @click-right="onConfirm"
  />
  </div>
</template>

<script>
export default {
  name: 'updatePhoto',
  components: {},
  props: {
    image: {
      type: String,
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
  methods: {
    onConfirm () {
    }
  }
}
</script>

<style scoped lang="less">
.nav{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff !important;
}
</style>

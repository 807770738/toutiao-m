<template>
  <div class="layout-Container">
      <router-view/>
      <van-tabbar route >
        <van-tabbar-item icon=shouye icon-prefix="toutiao" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon=wenda icon-prefix="toutiao" to="/qa">问答</van-tabbar-item>
        <van-tabbar-item icon=shipin icon-prefix="toutiao" to="/video">视频</van-tabbar-item>
        <van-tabbar-item icon=wode icon-prefix="toutiao" to="/my">我的</van-tabbar-item>
</van-tabbar>
  </div>

</template>

<script>
export default {
  name: 'layoutIndex',
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

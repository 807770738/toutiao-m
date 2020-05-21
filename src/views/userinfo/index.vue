<template>
  <div class="userIfor">
    <van-nav-bar
      title="个人信息"
      left-arrow
      @click-left="$router.back()"
  />
  <input type="file" name="" ref="file" hidden accept="image/png/jpg" @change="onfiledchange">
   <van-cell title="头像" is-link @click="$refs.file.click()">
     <van-image
      width="30"
      height="30"
      round
      fit="cover"
      :src="user.photo"/>
   </van-cell>
   <van-cell title="昵称" is-link :value="user.name" @click="isnameShow = true"/>
   <van-cell title="性别" is-link :value="user.gender === 1 ? '女' : '男'" @click="issexShow = true"/>
   <van-cell title="生日" is-link :value="user.birthday" @click="isbirtayShow = true"/>
    <!-- 修改昵称弹出层 -->
  <van-popup
     v-model="isnameShow"
     position="bottom"
     :style="{ height: '100%' }"
     >
     <userName v-model="user.name" @close="isnameShow = false"/>
  </van-popup>
  <!-- 修改性别弹层 -->
   <van-popup
     v-model="issexShow"
     position="bottom"
     >
     <updateSex v-model="user.gender" @close="issexShow = false"></updateSex>
   </van-popup>
    <!-- 修改生日弹层 -->
   <van-popup
     v-model="isbirtayShow"
     position="bottom"
     >
     <updateBirtay v-model="user.birthday" @close="isbirtayShow = false"></updateBirtay>
   </van-popup>
     <!-- 修改图片弹层 -->
   <van-popup
     v-model="isphotoShow"
     position="bottom"
     style="height:100%"
     >
     <updatePhoto :image="previewImg" @close="isphotoShow = false"></updatePhoto>
   </van-popup>
  </div>
</template>

<script>
import { getuserinfo } from '@/api/user'
import userName from './component/userName'
import updateSex from './component/updateSex'
import updateBirtay from './component/updateBirtay'
import updatePhoto from './component/updatePhoto'
export default {
  name: 'userIfor',
  components: {
    userName,
    updateSex,
    updateBirtay,
    updatePhoto
  },
  props: {},
  data () {
    return {
      user: {},
      isnameShow: false,
      issexShow: false,
      isbirtayShow: false,
      isphotoShow: false,
      previewImg: null
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loaduserinfo()
  },
  mounted () {},
  methods: {
    async loaduserinfo () {
      const { data } = await getuserinfo()
      this.user = data.data
    },
    onfiledchange () {
      this.isphotoShow = true
      const img = window.URL.createObjectURL(this.$refs.file.files[0])
      this.previewImg = img
      this.$refs.file.value = ''
    }
  }
}
</script>

<style scoped lang="less">
  .van-popup {
    background-color: #f5f7f9;
  }
</style>

<template>
  <div class="tanceng">
      <van-cell>
          <!-- 我的频道 -->
          <div slot="title" class="text-my">我的频道</div>
          <van-button type="danger"
           round plain size="mini"
           center :border="false"
            @click="isshow = ! isshow">
             {{isshow ? '完成' : '编辑'}}
           </van-button>
      </van-cell>
      <van-grid :gutter="10">
        <van-grid-item
        :class="{ active : index === active}"
         v-for="(channel, index) in channels"
         :key="index"
          :text="channel.name"
           :icon="(isshow && index !== 0) ? 'clear' : ''"
           @click="ondelete(index)"
           />
      </van-grid>
      <!-- 频道列表 -->
          <van-cell>
          <div slot="title" class="text-my">频道推荐</div>
      </van-cell>
      <van-grid :gutter="10">
        <van-grid-item
         v-for="(channel, index) in recomend"
        :key="index"
        :text="channel.name"
         @click="onadd(channel)"
         />
      </van-grid>
  </div>
</template>

<script>
import { GetAll } from '@/api/channel'
import { mapState } from 'vuex'
import { setItem } from '@/utils/store'
export default {
  name: 'tancengIndex',
  components: {},
  props: {
    channels: {
      type: Array,
      require: true
    },
    active: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      allChannels: [],
      isshow: false
    }
  },
  computed: {
    ...mapState(['user']),
    recomend () {
      return this.allChannels.filter(channel => {
        return !this.channels.find(userchannel => {
          return userchannel.id === channel.id
        })
      })
    }
  },
  watch: {},
  created () {
    this.loadAll()
  },
  mounted () {},
  methods: {
    async loadAll () {
      const { data } = await GetAll()
      this.allChannels = data.data.channels
    },
    onadd (channel) {
      this.channels.push(channel)
      if (this.user) {

      } else {
        setItem('user-channels', this.channels)
      }
    },
    ondelete (index) {
      if (this.isshow && index !== 0) {
        this.deletechannel(index)
      } else {
        this.switchannel(index)
      }
    },
    deletechannel (index) {
      this.channels.splice(index, 1)
    },
    switchannel (index) {
      this.$emit('close')
      this.$emit('update-active', index)
    }
  }
}
</script>

<style scoped lang="less">
.tanceng{
    padding-top: 55px;
}
.text-my{
    font-size: 16px;
}
.van-grid-item{
    width: 80px;
    height: 43px;
    /deep/.van-grid-item__content{
        background-color: #f4f5f6;
        .van-grid-item__text{
            color: #222;
            font-size: 14px;
            margin-top: 0;
        }
    }
}
/deep/.van-grid-item__icon{
    position: absolute;
    right: -6px;
    top: -7px;
    font-size: 20px;
    color: #ccc;
}
.active{
    /deep/.van-grid-item__text{
      color: red !important;
    }
}
</style>

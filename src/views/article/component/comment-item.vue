<template>
  <van-cell class="comment-item" title="123">
      <van-image
      class="touxiang"
      slot="icon"
      width="36"
      height="36"
      round
      fit="cover"
      :src="comment.aut_photo"
      ></van-image>
      <div slot="title" class="head">
           <div class="dianzan">
            <div class="name">{{ comment.aut_name }}</div>
          <div>
          <van-icon
           class="dianzan-icon"
            :name="comment.is_liking ? 'good-job' : 'good-job-o'"
             color="red"
             @click="oncommentlike"
             ></van-icon>
          <span class="dianzannum">{{comment.like_count}}</span>
          </div>
      </div>
          <div class="conent">{{ comment.content }}</div>
          <div>
              <span class="time">{{ comment.pubdate | dateTime }}</span>
              <van-button
               round size="mini"
                class="huifu"
                @click="$emit('replay-click', comment)"
                >{{comment.reply_count}} 回复</van-button>
          </div>
      </div>
  </van-cell>
</template>

<script>
import { like, nolike } from '@/api/comment'
export default {
  name: 'commentItem',
  components: {},
  props: {
    comment: {
      type: Object,
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
    async oncommentlike () {
      if (this.comment.is_liking) {
        await nolike(this.comment.com_id.toString())
        this.comment.like_count--
      } else {
        await like(this.comment.com_id.toString())
        this.comment.like_count++
      }
      this.comment.is_liking = !this.comment.is_liking
    }
  }
}
</script>

<style scoped lang="less">
.comment-item{
    .touxiang{
        padding-right: 13px;
    }
   .name{
       color: blue;
   }
   .conent{
       font-size: 16px;
   }
   .time{
       font-size: 10px;
   }
   .dianzan{
       display: flex;
       justify-content: space-between;
   }
}
</style>

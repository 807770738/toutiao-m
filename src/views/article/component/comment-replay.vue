<template>
  <div class="comment-replay">
      <van-nav-bar :title="`${comment.reply_count}条回复`">
          <van-icon slot="left" name="cross" color="#fff" @click="$emit('close')"/>
      </van-nav-bar>
      <commentItem
      :comment="comment"
      ></commentItem>
      <van-cell title="所有回复" />
      <commentList
      :source="comment.com_id"
      type="c"
      :list="commentList"
      />
       <!-- 底部区域 -->
    <div class="article-bottom">
      <van-button
        class="comment-btn"
        type="default"
        round
        size="small"
        @click="ispostshow = true"
      >写评论</van-button>
    </div>
     <!-- 评论回复 -->
     <van-popup v-model="ispostshow" position="bottom">
         <postComment :target="comment.com_id" :article-id="articleId" @post-success="onpostsuccess"/>
    </van-popup>
  </div>
</template>

<script>
import commentItem from './comment-item'
import commentList from './comment-list'
import postComment from './post-comment'
export default {
  name: 'commentReplay',
  components: {
    commentItem,
    commentList,
    postComment
  },
  props: {
    comment: {
      type: Object,
      required: true
    },
    articleId: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      ispostshow: false,
      commentList: []
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onpostsuccess (comment) {
      this.commentList.unshift(comment)
      this.comment.reply_count++
      this.ispostshow = false
    }
  }
}
</script>

<style scoped lang="less">
.article-bottom {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    height: 44px;
    border-top: 1px solid #d8d8d8;
    background-color: #fff;
    .comment-btn {
      width: 200px;
      height: 30px;
      border: 1px solid #eeeeee;
      font-size: 15px;
      line-height: 23px;
      color: #a7a7a7;
    }
    .van-icon {
      font-size: 20px;
      .van-info {
        font-size: 10px;
        background-color: #e22829;
      }
    }
  }
  .article-warp{
    position: fixed;
    left: 0;
    right: 0;
    top: 46px;
    bottom: 44px;
    overflow: auto;
  }</style>

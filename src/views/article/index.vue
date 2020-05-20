<template>
  <div class="article-container">
      <van-nav-bar
        class="nav"
        title="文章详情"
        @click-left="$router.back()"
        left-arrow
    />
   <div class="article-warp">
      <h1 class="title">{{article.title}}</h1>
    <van-cell center class="author">
      <div slot="title" class="name">{{article.aut_name}}</div>
      <van-image
      class="img"
      slot="icon"
      round
     fit="cover"
      :src="article.aut_photo" />
      <div slot="label" class="time">{{article.pubdate | relativeTime}}</div>
      <van-button
      class="btn"
     :type="article.is_followed ? 'default' : 'info'"
      round
     size="small"
     @click="onfollow">
     {{article.is_followed ? '已关注' : '+ 关注'}}
     </van-button>
    </van-cell>
    <div class="content markdown-body" v-html="article.content" ref="article-content">
    </div>
    <!-- 文章评论列表 -->
    <commentList
     :source="articleId"
      :list="commentList"
       @updateTotal="totalCommentCount = $event"
       @replay-click="onreplay"
       />
   </div>
     <!-- 底部区域 -->
    <div class="article-bottom">
      <van-button
        class="comment-btn"
        type="default"
        round
        size="small"
        @click="isshow = true"
      >写评论</van-button>
      <van-icon
        name="comment-o"
        :info="totalCommentCount"
        color="#777"
      />
      <van-icon
        :color="article.is_collected ? 'orange' : '#777'"
        :name="article.is_collected ? 'star' : 'star-o'"
        @click="onclick"
      />
      <van-icon
        color="#777"
        name="good-job-o"
      />
      <van-icon name="share" color="#777777"></van-icon>
    </div>
    <!-- /底部区域 -->
    <!-- 发布评论 -->
    <van-popup v-model="isshow" position="bottom">
      <post-comment :target="articleId" @post-success="onpostSuccess"/>
    </van-popup>
    <!-- 评论回复 -->
     <van-popup v-model="isreplay" position="bottom">
     <commentReplay :comment="commentReplay" @close="isreplay = false" v-if="isreplay" :article-id="articleId"></commentReplay>
    </van-popup>
  </div>
</template>

<script>
import './markdown.css'
import { GetArticleId, addcollect, deletecollect } from '@/api/article'
import { ImagePreview } from 'vant'
import { addFollow, deleteFollow } from '@/api/user'
import commentList from './component/comment-list'
import postComment from './component/post-comment'
import commentReplay from './component/comment-replay'

export default {
  name: 'articleIndex',
  components: {
    commentList,
    postComment,
    commentReplay
  },
  props: {
    articleId: {
      type: [String, Number, Object],
      required: true
    }
  },
  data () {
    return {
      article: {},
      isshow: false,
      commentList: [],
      totalCommentCount: 0,
      isreplay: false,
      commentReplay: {}
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadarticle()
  },
  mounted () {},
  methods: {
    async loadarticle () {
      const { data } = await GetArticleId(this.articleId)
      this.article = data.data
      this.$nextTick(() => {
        this.perviewImage()
      })
    },
    perviewImage () {
      const articleContent = this.$refs['article-content']
      const img = articleContent.querySelectorAll('img')
      const imgPaths = []
      img.forEach(img => {
        imgPaths.push(img.src)
        img.onclick = function () {
          ImagePreview({
            images: imgPaths,
            startPosition: 0
          })
        }
      })
    },
    async onfollow () {
      if (this.article.is_followed) {
        await deleteFollow(this.article.aut_id)
      } else {
        await addFollow(this.article.aut_id)
      }
      this.article.is_followed = !this.article.is_followed
    },
    async onclick () {
      if (this.article.is_collected) {
        await deletecollect(this.articleId)
      } else {
        await addcollect(this.articleId)
      }
      this.article.is_collected = !this.article.is_collected
    },
    onpostSuccess (comment) {
      this.commentList.unshift(comment)
      this.totalCommentCount++
      this.isshow = false
    },
    onreplay (comment) {
      this.commentReplay = comment
      this.isreplay = true
    }
  }
}
</script>

<style scoped lang="less">
.title{
    font-size: 20px;
    padding: 14px;
    background-color: #fff;
    margin: 0;
}
.name{
    font-size: 12px;
}
.img{
    width: 35px;
    height: 35px;
    margin-right: 8px;
}
.btn{
    width: 85px;
    height: 30px;
}
.content{
  padding: 14px;
  background-color: #fff;
}
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
      width: 141px;
      height: 23px;
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
  }
</style>

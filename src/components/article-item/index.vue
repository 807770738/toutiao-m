<template>
  <div class="article-Item">
       <van-cell class="article" :to="{
          name: 'article',
          params: {
            articleId: article.art_id
            }}">
           <div slot="title" class="title">{{article.title}}</div>
           <div slot="label">
                   <div class="cover-warp" v-if="article.cover.type === 3">
                       <div class="cover-warp-item" v-for="(img, index) in article.cover.images" :key="index">
                        <van-image fit="cover" :src="img" class="cover-img"/>
                       </div>
                   </div>
           <div class="lable-warp">
               <span>{{article.aut_name}}</span>
               <span>{{article.comm_count}}评论</span>
               <span>{{article.pubdate | relativeTime}}</span>
           </div>
           </div>
             <van-image
            v-if="article.cover.type === 1"
            class="right-cover"
            fit="cover"
            :src="article.cover.images[0]"
          />
       </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  components: {},
  props: {
    article: {
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
  methods: {}
}
</script>

<style scoped lang="less">
.article-item {
  .title {
    font-size: 16px;
    color: #3a3a3a;
    width: 116px;
  }
.van-cell__value {
    flex: unset;
    width: 116px;
    height: 73px;
    margin-left: 12px;
    /deep/ .right-cover {
       width: 116px;
      height: 73px;
    }
  }

}
.cover-warp{
  display: flex;
  padding: 5px 0;
  .cover-warp-item{
    flex: 1;
    height: 73px;
    &:not(:last-child) {
      padding-right: 5px;
    }
    .cover-img{
      width: 100%;
    height: 73px;
    }
  }
}
.lable-warp span{
  margin-right: 12px;
}
</style>

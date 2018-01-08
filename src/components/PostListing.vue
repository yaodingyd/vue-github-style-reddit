<template lang="html">
  <Comment :author="post.author" :domain="post.subreddit">
    <router-link :to="post.permalink">{{ parsedTitle }}</router-link>
  </Comment>
</template>

<script>
import parseHtml from '@/util/HtmlParse'
import Comment from './Github/Comment'

export default {
  props: ['post'],
  components: {
    Comment
  },
  computed: {
    parsedTitle () {
      return parseHtml(this.post.title)
    }
  }
}
</script>

<style lang="css" scoped>
</style>

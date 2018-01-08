<template lang="html">
  <div class="comment">
    <GithubComment :author="comment.author">
      <div v-html="parsedCommentBody"></div>
    </GithubComment>

    <span v-if="comment.replies" @click="hideChildren">
      Hide
    </span>

    <div v-if="comment.replies && showChildren">
      <div v-for="c in comment.replies.data.children">
        <comment :comment="c.data"></comment>
      </div>
    </div>
  </div>
</template>

<script>
import parseHtml from '../util/HtmlParse'
import GithubComment from './Github/Comment'

export default {
  name: 'Comment',
  props: ['comment'],
  components: {
    GithubComment
  },
  data () {
    return {
      showChildren: true
    }
  },
  computed: {
    parsedCommentBody () {
      if (this.comment.body_html) {
        return parseHtml(this.comment.body_html)
      }
      return ''
    }
  },
  methods: {
    hideChildren () {
      this.showChildren = !this.showChildren
    }
  }
}
</script>

<style lang="css">
</style>

<template lang="html">
  <div class="post-content">
    <Comment mute="true">
      <div>
        <div v-if="post.secure_media">
          <embed-content :provider="post.secure_media.oembed.provider_name" :post="post"></embed-content>
        </div>

        <div v-else-if="post.domain === 'imgur.com'">
          <img :src="post.preview.images[0].source.url" :alt="post.title">
        </div>

        <div v-else-if="post.domain === 'instagram.com'">
          <instagram :embed="post.media_embed.content"></instagram>
        </div>

        <div v-else-if="imageExtensionCheck.test(post.url)">
          <img :src="post.url" :alt="post.title">
        </div>

        <div v-else-if="post.domain === 'i.reddituploads.com'">
          <img :src="post.preview.images[0].source.url" :alt="post.title">
        </div>

        <div v-else>
          <p v-html="parsedBody"></p>
        </div>
      </div>
    </Comment>

    <comments :comments="comments"></comments>
  </div>
</template>

<script>
import Comments from './Comments'
import EmbedContent from './media/EmbedContent'
import Instagram from './media/Instagram'
import parseHtml from '../util/HtmlParse'
import Comment from './Github/Comment'

export default {
  props: ['comments', 'post'],
  components: { Comments, EmbedContent, Instagram, Comment },
  data () {
    return {
      imageExtensionCheck: new RegExp('.(jpg|jpeg|png|gif)$', 'i')
    }
  },
  created () {
    // document.title = parseHtml(this.post.title)
  },
  computed: {
    parsedBody () {
      if (this.post.selftext_html) {
        return parseHtml(this.post.selftext_html)
      }
      return ''
    }
  }
}
</script>

<style lang="css">
</style>

<template lang="html">
  <p v-html="parsedHtmlEmbed">
  </p>
</template>

<script>
import parseHtml from '@/util/HtmlParse'

export default {
  name: 'Instagram',
  props: ['embed'],
  computed: {
    parsedHtmlEmbed () {
      return parseHtml(this.embed)
    }
  }
}
</script>

<style lang="css">
</style>

<template>
  <div v-if="Object.keys(postData).length !== 0">
    <post-content :post="postData" :comments="commentsData"></post-content>
  </div>
  <div v-else>
    <p>Loading</p>
  </div>
</template>

<script>
import PostContent from '@/components/PostContent'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  components: { PostContent },
  computed: mapState([
    'postData', 'commentsData'
  ]),
  methods: mapActions([
    'loadPost'
  ]),
  created () {
    this.loadPost()
    this.$store.watch(this.$store.getters.post, () => {
      this.loadPost()
    })
  }
}
</script>

<style>
</style>

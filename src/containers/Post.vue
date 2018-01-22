<template>
  <div>
    <IssueHeader />
    <div class="container">
      <div class="discussion-timeline">
        <div v-if="!loading">
          <post-content :post="postData" :comments="commentsData"></post-content>
        </div>
        <div v-else>
          <div class="loader"></div>
        </div>
      </div>
      <Sidebar />
    </div>
  </div>
</template>

<script>
import PostContent from '@/components/PostContent'
import IssueHeader from '@/components/Github/IssueHeader'
import Sidebar from '@/components/Github/Sidebar'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'post',
  components: { PostContent, IssueHeader, Sidebar },
  computed: mapState([
    'postData', 'commentsData', 'loading'
  ]),
  methods: {
    ...mapActions([
      'loadPost'
    ]),
    ...mapMutations({
      updatePost: 'update_post'
    })
  },
  created () {
    const postId = this.$route.params.id
    this.updatePost({post: postId})
    this.loadPost()
    this.$store.watch(this.$store.getters.post, () => {
      this.loadPost()
    })
  }
}
</script>

<style>
.loader {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  animation: loader12 1s linear alternate infinite;
  top: 50%;
  margin: -50px auto 0 auto; }

@keyframes loader12 {
  0% {
    box-shadow: -60px 40px 0 2px #c0d3eb, -30px 40px 0 0 rgba(0, 82, 236, 0.2), 0 40px 0 0 rgba(0, 82, 236, 0.2), 30px 40px 0 0 rgba(0, 82, 236, 0.2), 60px 40px 0 0 rgba(0, 82, 236, 0.2); }
  25% {
    box-shadow: -60px 40px 0 0 rgba(0, 82, 236, 0.2), -30px 40px 0 2px #c0d3eb, 0 40px 0 0 rgba(0, 82, 236, 0.2), 30px 40px 0 0 rgba(0, 82, 236, 0.2), 60px 40px 0 0 rgba(0, 82, 236, 0.2); }
  50% {
    box-shadow: -60px 40px 0 0 rgba(0, 82, 236, 0.2), -30px 40px 0 0 rgba(0, 82, 236, 0.2), 0 40px 0 2px #c0d3eb, 30px 40px 0 0 rgba(0, 82, 236, 0.2), 60px 40px 0 0 rgba(0, 82, 236, 0.2); }
  75% {
    box-shadow: -60px 40px 0 0 rgba(0, 82, 236, 0.2), -30px 40px 0 0 rgba(0, 82, 236, 0.2), 0 40px 0 0 rgba(0, 82, 236, 0.2), 30px 40px 0 2px #c0d3eb, 60px 40px 0 0 rgba(0, 82, 236, 0.2); }
  100% {
    box-shadow: -60px 40px 0 0 rgba(0, 82, 236, 0.2), -30px 40px 0 0 rgba(0, 82, 236, 0.2), 0 40px 0 0 rgba(0, 82, 236, 0.2), 30px 40px 0 0 rgba(0, 82, 236, 0.2), 60px 40px 0 2px #c0d3eb; } }

</style>


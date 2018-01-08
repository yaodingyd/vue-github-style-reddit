<template>
  <div id="app">
    <Github>
      <router-view></router-view>
    </Github>
  </div>
</template>

<script>
import Github from '@/components/Github'
import { mapMutations } from 'vuex'

export default {
  name: 'app',
  components: {
    Github
  },
  methods: mapMutations({
    getPost: 'get_post',
    updateSubreddit: 'update_subreddit',
    updateFilter: 'update_filter'
  }),
  watch: {
    '$route' (to) {
      if (to && to.redirectedFrom) {
        const paths = to.redirectedFrom.split('/')
        this.updateSubreddit({subreddit: paths[2]})
        if (paths[3] && paths[3] !== 'comments') {
          this.updateFilter({filter: paths[3]})
        }
        if (paths[4]) {
          this.getPost({post: paths[4]})
        }
      }
    }
  }
}
</script>

<style>
</style>

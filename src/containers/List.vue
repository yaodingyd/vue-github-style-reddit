<template>
  <div class="container">
    <section>
      <subreddit :name="subreddit" :data="listData" :filter="filter" :updateFilter="updateFilter" :updatePost="updatePost" :next="loadNext" :updateSubreddit="updateSubreddit"></subreddit>
    </section>
  </div>
</template>

<script>
import Subreddit from '@/components/Subreddit'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'app',
  components: {
    Subreddit
  },
  computed: mapState([
    'filter', 'subreddit', 'listData', 'after', 'page'
  ]),
  methods: {
    ...mapActions([
      'loadList',
      'loadNext'
    ]),
    ...mapMutations({
      updateFilter: 'update_filter',
      updateSubreddit: 'update_subreddit',
      updatePost: 'update_post'
    })
  },
  created () {
    this.loadList()
    this.$store.watch(this.$store.getters.subreddit, () => {
      this.loadList()
    })
    this.$store.watch(this.$store.getters.filter, () => {
      this.loadList()
    })
  },
  watch: {
    '$route.params.subreddit' (subreddit) {
      if (!subreddit) {
        subreddit = 'all'
      }
      this.updateSubreddit({subreddit: subreddit})
    }
  }
}
</script>

<style>
</style>

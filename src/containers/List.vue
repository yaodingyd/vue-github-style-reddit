<template>
  <section>
    <subreddit :name="subreddit" :data="listData" :filter="filter"></subreddit>
  </section>
</template>

<script>
import Subreddit from '@/components/Subreddit'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    Subreddit
  },
  computed: mapState([
    'filter', 'subreddit', 'listData', 'after', 'page'
  ]),
  methods: mapActions([
    'loadList',
    'loadNext'
  ]),
  created () {
    this.loadList()
    this.$store.watch(this.$store.getters.subreddit, () => {
      this.loadList()
    })
  }
}
</script>

<style>
</style>

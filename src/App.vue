<template>
  <div id="app">
    <Github>
      <router-view></router-view>
    </Github>
  </div>
</template>

<script>
import Github from '@/components/Github'

export default {
  name: 'app',
  components: {
    Github
  }
}
</script>

<style>
</style>

<template>
  <div>
    <div class="flex-container">
      <PageHeader />
      <TopNav />
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import PageHeader from './PageHeader'
import TopNav from './TopNav'
import IssueHeader from './IssueHeader'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default {
  name: 'github',
  components: {
    PageHeader,
    TopNav,
    IssueHeader,
    Sidebar,
    Footer
  }
}
</script>

<style>
.flex-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>



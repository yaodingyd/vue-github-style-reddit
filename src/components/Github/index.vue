<template>
  <div>
    <PageHeader />
    <TopNav />
    <slot />
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


<template>
  <div>
    <Navigation :active="active" @navigate="scrollToPanel"/>
    <main class="container layout">
      <Photo/>
      <Content/>
    </main>
    <footer class="site-footer" aria-hidden="true"></footer>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Photo from '@/components/Photo.vue'
import Content from '@/components/Content.vue'

export default {
  name: 'HomeView',
  components: { Navigation, Photo, Content },
  data () { return { active: 'about' } },
  mounted() {
    const hash = location.hash.replace('#','')
    if (hash) {
      this.active = hash
      this.$nextTick(() => this.scrollToPanel(hash, true))
    }
  },
  methods: {
    scrollToPanel(id, skipHashUpdate) {
      const target = document.getElementById(id)
      if (!target) return
      const header = document.querySelector('.site-header')
      const headerHeight = header ? header.getBoundingClientRect().height : 0
      const extraGap = 8 // 约等于0.5rem，避免标题贴边
      const y = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - extraGap
      window.scrollTo({ top: y, behavior: 'smooth' })
      this.active = id
      // 不更新hash，避免路由误判为 /about 等路径
    }
  }
}
</script>
<style>
.layout { display: grid; grid-template-columns: calc(30% - 1%) calc(70% - 1%); gap: 2%; padding-top: 2.25rem; padding-bottom: 4rem; }
.site-footer { height: 5rem; }
@media (max-width: 48rem) { .layout { grid-template-columns: 1fr; gap: 2rem; } }
</style>

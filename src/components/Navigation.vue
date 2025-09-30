<template>
  <header class="site-header">
    <div class="container header-inner">
      <img class="site-logo" :src="logoUrl" alt="logo" />
      <nav class="site-nav" aria-label="Primary">
        <ul>
          <li><a href="#" class="nav-link" :aria-selected="active === 'about'" @click.prevent="onClick('about')">About Me</a></li>
          <li><a href="#" class="nav-link" :aria-selected="active === 'news'" @click.prevent="onClick('news')">News</a></li>
          <li><a href="#" class="nav-link" :aria-selected="active === 'publications'" @click.prevent="onClick('publications')">Publications</a></li>
          <li><a href="#" class="nav-link" :aria-selected="active === 'projects'" @click.prevent="onClick('projects')">Projects</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navigation',
  props: { active: { type: String, default: 'about' } },
  emits: ['navigate'],
  data () { return { logoUrl: '' } },
  mounted() { this.logoUrl = new URL('@/assets/logo.png', import.meta.url).href },
  methods: {
    onClick(id) { this.$emit('navigate', id) }
  }
}
</script>

<style>
.site-header {
  border-bottom: 0.0625rem solid var(--rule);
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 10;
}
.header-inner { display: flex; align-items: center; justify-content: space-between; padding-top: 1.125rem; padding-bottom: 0.625rem; }
.site-logo { height: 2.875rem; width: auto; display: block; }
.site-nav ul { margin: 0; padding: 0; list-style: none; display: flex; gap: 1.75rem; }
.site-nav a { font-family: "Merriweather", Georgia, serif; font-weight: 400; color: hsl(0 0% 27%); font-size: 1.125rem; }
.site-nav a[aria-selected="true"] { color: #000; }

@media (max-width: 48rem) {
  .header-inner { flex-direction: column; gap: 1rem; }
  .site-nav ul { flex-wrap: wrap; justify-content: center; gap: 1rem; }
}
</style>



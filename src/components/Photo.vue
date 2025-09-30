<template>
  <section class="left-col">
    <figure class="hero-photo"><img :src="photoUrl" alt="Portrait under a tree" /></figure>
    <div class="profile-card">
      <p class="name">Xinyue Chen</p>
      <p class="affiliation">Peking University</p>
      <p class="email">cxyapril@stu.pku.edu.cn</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Photo',
  data () {
    return { photoUrl: '' }
  },
  mounted() {
    this.photoUrl = new URL('../../images/photo.jpeg', import.meta.url).href
  }
}
</script>

<style>
.left-col { position: sticky; top: calc(var(--header-offset) + 0.5rem); align-self: start; }
.hero-photo { margin: 0.625rem 0 0 0; }
.hero-photo img { display: block; width: 100%; height: auto; border: 0.0625rem solid var(--rule); box-sizing: border-box; }
.profile-card { text-align: left; margin-top: 1.375rem; }
.profile-card p { margin: 0; }
.profile-card .name { font-family: "Merriweather", Georgia, serif; margin: 0 0 0.25rem 0; font-size: 1.25rem; line-height: 1.2; }
.profile-card .affiliation, .profile-card .email { margin: 0.15rem 0; color: var(--muted); line-height: 1.4; }
</style>



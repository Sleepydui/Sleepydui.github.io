<template>
  <section class="right-col">
    <div class="panel" id="about">
      <h2 class="section-title">About Me</h2>
      <p>
        Hello! I am Xinyue Chen, a fourth-year PhD candidate in the School of Intelligence Science and Technology at Peking University, advised by Prof. Xiaoru Yuan in the <a href="http://vis.pku.edu.cn/">PKUVIS Group</a>.
      </p>
      <p>
        My research interests include <strong>Data Visualization, Human-Computer Interaction, and Computational Social Science</strong>. Specifically, I am fascinated by visualization as both a mode of knowledge production and a medium of expression. On the one hand, I leverage human-AI interfaces and visual analytics techniques to support domain experts in gaining insights, while also exploring new forms of human-computer interaction and interdisciplinary visualization literacy. On the other hand, I am curious about how visualization and AI agents can reshape our understanding of the real world and the processes of information dissemination. Recently, my primary focus has been on large-scale image data visualization and interdisciplinary human-AI interaction.
      </p>
      <p>
        Beyond academia, I am also an independent developer, data journalist, and data handicraftsman. I create data-driven, generative, and interactive art.
      </p>
      <p>
        Wandering through The Garden of Forking Paths, I write lines of data poetry.
      </p>
    </div>

    <div class="panel" id="news">
      <h2 class="section-title">News</h2>
      <ul class="news-list">
        <li><span class="leaf" aria-hidden="true">🎉</span> [04/2025] Our paper "VisTaxa: Developing a Taxonomy of Historical Visualizations"  is accepted by IEEE PacificVis TVCG track and received 🏆 Best Paper Honorable Mention.</li>
        <li><span class="leaf" aria-hidden="true">🎨</span> [03/2025] Our program City Pulse is longlisted in the Information is Beautiful Awards 2024.</li>
        <li><span class="leaf" aria-hidden="true">🎉</span> [08/2024] Our paper "City Pulse: Revealing City Identity Through Abstraction of Metro Lines" is accepted by IEEE VIS 2024 Arts Program as a pictorial.</li>
        <li><span class="leaf" aria-hidden="true">🎉</span> [07/2024] Our paper "Visual Analysis of Complex Temporal Networks Supported by Analytic Provenance" is accepted by IEEE VAST Challenge 2024 MC3 and received 🏆 Honorable mention solution.</li>
        <li><span class="leaf" aria-hidden="true">🎨</span> [06/2024] Our program City Pulse is to be exhibited in China VISAP'24. </li>
        <li><span class="leaf" aria-hidden="true">🎨</span> [04/2024] Our program City Pulse is shortlisted in Visual Data Storytelling contest, PacificVis 2024.</li>
        <li><span class="leaf" aria-hidden="true">🎨</span> [08/2023] Our program Timber Architecture won the Third Prize in the Digital Humanities track of the ChinaVis 2023 Visualization Contest.</li>
        <li><span class="leaf" aria-hidden="true">🎨</span> [08/2022] Our program Visualization of Wang Xizhi's Calligraphy Series received an Honorable Mention in the ChinaVis 2022 Visualization Contest.</li>
      </ul>
    </div>

    <div class="panel" id="publications">
      <h2 class="section-title" style="margin-top:0">Publications</h2>
      <section class="pubs">
        <article class="pub-item">
          <a class="pub-thumb" href="#" aria-label="thumbnail"><img :src="pub1Thumb" alt="thumbnail" /></a>
          <div class="pub-body">
            <div class="pub-badges"><span class="badge badge-yellow">Vis Taxonomy</span></div>
            <h3 class="pub-title">VisTaxa: Developing a Taxonomy of Historical Visualizations</h3>
            <p class="pub-meta">Yu Zhang, <u>Xinyue Chen</u>, Weili Zheng, Yuhan Guo, Guozheng Li, Siming Chen, Xiaoru Yuan</p>
            <p class="pub-venue">IEEE PacificVis 2025 (TVCG Track)</p>
            <p class="pub-abstract">To address the gap where existing taxonomies overlook historical visualizations, we propose an empirical development method and use it to code 400 images to create a historical visualization taxonomy.</p>
            <p class="pub-links"><a href="https://arxiv.org/pdf/2505.01724">[Paper]</a><a href="https://oldvis.github.io/image-taxonomy-labeler/">[Website]</a></p>
          </div>
        </article>

        <article class="pub-item">
          <a class="pub-thumb" href="#" aria-label="thumbnail"><img :src="pub2Thumb" alt="thumbnail" /></a>
          <div class="pub-body">
            <div class="pub-badges"><span class="badge badge-blue">Vis Pictorial</span></div>
            <h3 class="pub-title">City Pulse: Revealing City Identity Through Abstraction of Metro Lines</h3>
            <p class="pub-meta"><u>Xinyue Chen</u>, Yixuan Zhang, Yutong Yang, Jing Chen, Rebecca Ruige Xu, Weiping Chen, Xiaoru Yuan.</p>
            <p class="pub-venue">IEEE VIS 2024 Arts Program; PacificVis 2024 Visual Data Storytelling Contest</p>
            <p class="pub-abstract">We reveal the region characteristics and tell the story about the development of metro by abstracting the city as a square, the metro route as a line, and using the width of the lines to represent the coverage of the routes.</p>
            <p class="pub-links"><a href="https://ieeexplore.ieee.org/document/10749932/authors#authors">[Paper]</a><a href="https://globalmetro.github.io/city_pulse/#/">[Website]</a><a href="https://www.youtube.com/watch?v=T2HsdA2j8aE">[Video]</a></p>
          </div>
        </article>

        <article class="pub-item">
          <a class="pub-thumb" href="#" aria-label="thumbnail"><img :src="pub3Thumb" alt="thumbnail" /></a>
          <div class="pub-body">
            <div class="pub-badges"><span class="badge badge-green">Vis Application</span></div>
            <h3 class="pub-title">Visual Analysis of Complex Temporal Networks Supported by Analytic Provenance</h3>
            <p class="pub-meta">Yuhan Guo, Yuchu Luo, <u>Xinyue Chen</u>, Hanning Shao, Xiaoru Yuan, Kai Xu</p>
            <p class="pub-venue">IEEE VAST Challenge 2024</p>
            <p class="pub-abstract">We present an interactive visual analysis tool to explore large dynamic graphs. Our system provides users with multiple perspectives to analyze the network. The graph view presents the node-link structure and offers various layout options.</p>
            <p class="pub-links"><a href="https://ieeexplore.ieee.org/document/10750101/">[Paper]</a><a href="https://vis4sense.github.io/vast-2024-mc3/#/">[Website]</a></p>
          </div>
        </article>
      </section>
    </div>

    <div class="panel" id="projects">
      <h2 class="section-title" style="margin-top:0">Projects</h2>
      <section class="pubs projects">
        <article class="pub-item">
          <a class="pub-thumb" href="#" aria-label="thumbnail"><img :src="proj1Thumb" alt="thumbnail" /></a>
          <div class="pub-body">
            <div class="pub-badges"><span class="badge badge-purple">Project</span></div>
            <h3 class="pub-title">Using the Old to Make the New: Visualization of Song Poetry's Use/Borrowing of Tang Poetry</h3>
            <p class="pub-meta">2024</p>
            <p class="pub-abstract">The appropriation of Song poetry by Tang poets is a common practice. In this visualization, we connect the poets, poems, and verses of the two dynasties through various views.</p>
          </div>
        </article>

        <article class="pub-item">
          <a class="pub-thumb" href="#" aria-label="thumbnail"><img :src="proj2Thumb" alt="thumbnail" /></a>
          <div class="pub-body">
            <div class="pub-badges"><span class="badge badge-purple">Project</span></div>
            <h3 class="pub-title">Chinese Historical Visualizations Atlas</h3>
            <p class="pub-meta">2023</p>
            <p class="pub-abstract">We manually collected a selection of historical Chinese visualizations and arranged them by category on a timeline.</p>
          </div>
        </article>

        <article class="pub-item">
          <a class="pub-thumb" href="#" aria-label="thumbnail"><img :src="proj3Thumb" alt="thumbnail" /></a>
          <div class="pub-body">
            <div class="pub-badges"><span class="badge badge-purple">Project</span></div>
            <h3 class="pub-title">Assembling Wood into Shelter: Visualizing the Distribution of China's Timber-Framed Architecture</h3>
            <p class="pub-meta">2023</p>
            <p class="pub-abstract">In this project, we compiled the construction era and architectural style of all existing timber-framed structures across China, and visualized their geographical distribution on a map.</p>
          </div>
        </article>

        <article class="pub-item">
          <a class="pub-thumb" href="#" aria-label="thumbnail"><img :src="proj4Thumb" alt="thumbnail" /></a>
          <div class="pub-body">
            <div class="pub-badges"><span class="badge badge-purple">Project</span></div>
            <h3 class="pub-title">Flowing Form and Spirit: A Visualization of Wang Xizhi s Running Script (Xingshu) Calligraphy</h3>
            <p class="pub-meta">2022</p>
            <p class="pub-abstract">We extract calligraphy strokes from images in ancient texts and transform them into landscape paintings that people can recognize and appreciate. This novel digital humanities work creatively showcases the historical, artistic, and intellectual value of these ancient texts.</p>
          </div>
        </article>

        <article class="pub-item">
          <a class="pub-thumb" href="#" aria-label="thumbnail"><img :src="proj5Thumb" alt="thumbnail" /></a>
          <div class="pub-body">
            <div class="pub-badges"><span class="badge badge-purple">Project</span></div>
            <h3 class="pub-title">Mapping the Russia-Ukraine Conflict Through News Coverage</h3>
            <p class="pub-meta">2022</p>
            <p class="pub-abstract">We extracted entities related to the Russia-Ukraine conflict from news reports and used a multi-view visualization to recreate the conflict's progression as covered by the media.</p>
          </div>
        </article>

      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return { 
      pub1Thumb: '',
      pub2Thumb: '',
      pub3Thumb: '',
      proj1Thumb: '',
      proj2Thumb: ''
    }
  },
  mounted() {
    this.pub1Thumb = new URL('../../images/vistaxt.png', import.meta.url).href
    this.pub2Thumb = new URL('../../images/metro.png', import.meta.url).href
    this.pub3Thumb = new URL('../../images/mc3.webp', import.meta.url).href
    this.proj1Thumb = new URL('../../images/yiguweixin.png', import.meta.url).href
    this.proj2Thumb = new URL('../../images/ancientchina.png', import.meta.url).href
    this.proj3Thumb = new URL('../../images/timber.jpg', import.meta.url).href
    this.proj4Thumb = new URL('../../images/calligraphy.png', import.meta.url).href
    this.proj5Thumb = new URL('../../images/ukraine.png', import.meta.url).href
  }
}
</script>

<style>
.right-col { align-self: start; max-width: none; overflow: auto; }
.panel { scroll-margin-top: var(--header-offset); }
.panel + .panel { margin-top: 1.25rem; }
.section-title { font-family: "Merriweather", Georgia, serif; font-weight: 700; font-size: 1.375rem; margin: 0 0 0.625rem; }
.interest-tags { margin-top: 0.625rem; color: var(--muted); }
.interest-tags .label { color: var(--text); font-weight: 600; }
.news-list { list-style: none; padding: 0; margin: 0.625rem 0 0 0; }
.news-list li { padding-left: 0; margin: 0.15rem 0; }
.news-list .leaf { margin-right: 0.375rem; }
.site-footer { height: 5rem; }
.pubs { margin-top: 0.5rem; }
.pub-item { display: grid; grid-template-columns: 16.5rem 1fr; gap: 0.5rem; padding: 0.25rem 0; }
.pub-item + .pub-item { margin-top: 0.75rem; }
.pub-thumb { overflow: hidden; }
.pub-thumb img { display: block; width: 100%; height: 10rem; object-fit: cover; object-position: center center; border: 0.0625rem solid var(--rule); }
.pub-body { display: grid; align-content: start; }
.pub-badges { margin: 0 0 0.0625rem; }
.badge { display: inline-block; font-size: 0.6875rem; padding: 0.0625rem 0.375rem; border-radius: 0.375rem; font-weight: 600; margin-right: 0.375rem; }
.badge-yellow { background: #ffeab6; }
.badge-blue { background: #d7ecff; }
.badge-green { background: #dff6d8; }
.badge-purple { background: #efe0ff; }
.pub-title { font-family: "Merriweather", Georgia, serif; font-size: 0.875rem; margin: 0 0 0.0625rem; }
.pub-meta { margin: 0 0 0.0625rem; color: var(--text); font-size: 0.875rem; line-height: 1.35; }
.pub-abstract { font-style: italic; color: var(--muted); margin: 0 0 0.0625rem; font-size: 0.875rem; line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.pub-venue { margin: 0 0 0.0625rem; color: var(--text); font-size: 0.875rem; line-height: 1.35; }
.pub-links { margin: 0; line-height: 1; }
.pub-links a { margin-right: 0rem; font-size: 0.875rem; line-height: 1; }

@media (max-width: 48rem) {
  .pub-item { grid-template-columns: 1fr; }
}
</style>



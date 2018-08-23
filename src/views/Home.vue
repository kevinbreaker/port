<template>
  <div class="scroll-content" :class="overlay ? 'overlay' : ''">
    <div class="slider" :class="overlay ? 'overlay' : ''">  
      <hello-world :class="overlay ? 'overlay-color' : ''" id="home" />
      <about :class="overlay ? 'overlay-color' : ''" id="about" />
      <experience :class="overlay ? 'overlay-color' : ''" id="exp" />
      <!-- <section>
        <h1>Section Four</h1>
        <slot></slot>
</section>
<section>
        <h1>Section Five</h1>
</section> -->
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import About from '@/components/mobile/about/About'
import Experience from '@/components/mobile/experience/Experience'

import scrollSnapPolyfill from 'css-scroll-snap-polyfill'

export default {
  props: {
    overlay: Boolean
  },
  name: 'home',
  components: {
    HelloWorld,
    About,
    Experience
  },
  methods: {
  },
  mounted () {
    scrollSnapPolyfill()
  }
}
</script>
<style lang="stylus" >
.overlay {
  overflow: hidden !important;
  filter: grayscale(0.5) contrast(3);
  transition: all 1s;
}

.overlay-color {
  background: rgba(0, 0, 0, 0.8) !important;
  transition: all 2s;
}

.slider {
  font-family: sans-serif;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vw);
  scroll-snap-type: x mandatory;
  display: flex;
  overflow-x: scroll;
}

section {
  border-right: 1px solid white;
  // padding: 1rem
  min-width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  text-align: center;
  position: relative;
}

p {
  color: red;
}

.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-width: 300px;
  min-height: 300px;
  background: black;
  overflow: hidden;
}

.scroll-content {
  font-family: sans-serif;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vw);
  scroll-snap-type: x mandatory;
  display: flex;
  overflow-x: scroll;
}
</style>
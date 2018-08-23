<template>
  <div id="app" @touchend="touchend" @touchstart="touchstart">
    <navbar class="navbar" />
    <router-view :overlay="menu" :class="menu ? 'down' : ''" class="content"></router-view>
  </div>
</template>
<script>
import navbar from '@/components/mobile/header/Navbar'
export default {
  components: {
    navbar
  },
  data: () => ({
    pageWidth: 0,
    treshold: 0,
    touchendX: 0,
    touchstartX: 0,
    touchstartY: 0,
    touchendY: 0
  }),
  computed: {
    menu () {
      return this.$store.state.menu
    }
  },
  mounted () {
    this.pageWidth = window.innerWidth
  },
  methods: {
    touchstart (val) {
      this.touchstartX = val.changedTouches[0].screenX
      this.touchstartY = val.changedTouches[0].screenY
    },
    touchend (val) {
      this.touchendX = val.changedTouches[0].screenX
      this.touchendY = val.changedTouches[0].screenY
      this.handleGesture(val)
    },
    handleGesture (e) {
      let x = this.touchendX - this.touchstartX
      let y = this.touchendY - this.touchstartY
      let xy = Math.abs(x / y)
      let yx = Math.abs(y / x)
      const limit = Math.tan(45 * 1.5 / 180 * Math.PI)
      if (Math.abs(x) > this.treshold || Math.abs(y) > this.treshold) {
        if (yx <= limit) {
          if (x < 0) {
            console.log('left')
          } else {
            console.log('right')
          }
        }
        if (xy <= limit) {
          if (y < 0) {
            console.log('top')
            this.$store.commit('SET_MENU', false)
          } else {
            this.$store.commit('SET_MENU', true)
            console.log('bottom')
          }
        }
      } else {
        console.log('tap')
      }
    }
  }
}
</script>
<style lang="stylus">
*
  margin: 0
  padding : 0

.down
  margin-top: 60vh !important
  // height: 40vh
  position relative
  transition: all 1s

body
  overflow-y: hidden
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  overflow-y: hidden

.content
  // box-shadow: 0 -20px 20px 0  rgba(255,255,255, 0.2)
  clip-path: polygon(100% 0, 100% 100%, 100% 100%, 0% 100%, 0% 3%, 21% -4%, 100% -44%)
  margin-top: 60px
  z-index: 3
  transition: all 1s
  overflow-x: hidden

</style>

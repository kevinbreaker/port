<template functional>
  <div class="menuIcon" :class="props.active ? 'close' : ''">
    <div class="strip"></div>
  </div>
</template>
<script>
export default {
  props: {
    height: {
      type: [Number, String],
      default: 24
    },
    width: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: 'black'
    },
    active: Boolean
  }
}
</script>
<style lang="stylus" scoped>

.menuIcon
  width: 30px
  height: 20px
  margin-bottom: 20px
  padding: 5px
  cursor: pointer
  position: relative
  -webkit-transition: background 0.2s
  -o-transition: background 0.2s
  transition: background 0.2s

.menuIcon:hover
  background: #4c4c4c

.strip
  width: 80%
  top: 10px
  height: 3px
  background: white
  margin: auto
  // top: calc(50px / 2)
  position: relative
  transition: top 0.3s linear background 0.3s

.strip:before
  position: absolute
  height: 3px
  left:0
  content: ''
  top: calc(-35px / 4)
  background-color: white
  width: 100%
  -webkit-transition: top 0.3s linear, transform 0.3s
  -o-transition: top 0.3s linear transform 0.3s
  transition: top 0.3s linear transform 0.3s

.strip:after
  position: absolute
  height: 3px
  left:0
  content: ''
  top: calc(35px / 4)
  background-color: white
  width: 100%
  -webkit-transition: top 0.3s linear, transform 0.3s
  -o-transition: top 0.3s linear transform 0.3s
  transition: top 0.3s linear transform 0.3s

.close .strip
  background: transparent

.close .strip::before,
.close .strip::after
  transform-origin: 50% 50%
  background : red
  top:0px
  width: 100%

.close .strip::before
  transform: rotate3d(0,0,1,45deg)

.close .strip::after
  transform: rotate3d(0,0,1,-45deg)

</style>

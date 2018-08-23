<template>
  <header :class="menu ? 'ativado': ''">
    <div class="header-navbar">
      <span @click="menuToggle">
      <menu-icon :active="menu" width="32" height="32" color="white" />
      </span>
      <!-- <p>&lt; KM /></p> -->
      <img id="logo" src="../../../assets/icons/logo.svg" alt="">
      <p style="color: #424242">,</p>
    </div>
    <nav v-if="menu">
      <ul>
        <li v-for="(menuLink, idx) in menuNavigation"
            :key="idx" @click="goRouter(menuLink.router, menuLink.isMain)">
          {{menuLink.name}}
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import MenuIcon from '@/components/icons/Menu'
export default {
  data: () => ({
    menuNavigation: [
      { name: 'HOME', isMain: true, router: '' },
      { name: 'ABOUT', isMain: true, router: '' },
      { name: 'CONTACT', isMain: true, router: '' },
      { name: 'SERIES', isMain: false, router: 'series' },
    ]
  }),
  name: 'Header',
  computed: {
    menu () {
      return this.$store.state.menu
    }
  },
  methods: {
    goRouter (router, main) {
      main
        ? console.log(' Ainda não pronto')
        : this.$router.push(router)
    },
    menuToggle () {
      this.$store.commit('SET_MENU', !this.menu)
    },
    menuClose () {
      this.$store.commit('SET_MENU', false)
    }
  },
  components: {
    MenuIcon
  }
}
</script>
<style lang="stylus" scoped>
  #logo
    width: 120px
    position relative
    top: -7px
    right: 10px
  a
    text-decoration: none
    color: white
  
  li
    margin: 15px
    list-style: none
    text-transform: uppercase
  
  .ativado
    transition: height 1s
    align-items: center
    justify-content flex-start
    padding-top: 10px
    flex-direction: column
    // clip-path: polygon(100% 0, 100% 90%, 9% 90%, 0% 100%, 0% 0%)
  
  .header-navbar
    display flex
    justify-content: space-between
    align-items: center
    width: 100vw
  
  header
    transition: height 1s
    width: 100vw
    background: #424242
    height: 95vh
    top: 0
    color: white
    padding-top: 10px
    margin-bottom: 5px
    position fixed
    // clip-path: polygon(100% 0, 100% 70%, 9% 70%, 0% 100%, 0% 0%)

</style>

<script>

import { store } from './data/store.js'
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    Header,
    Hero,
    Main,
    Footer
  },

  data() {
    return {
      store
    }
  },
  methods: {
    // getImagePath() {
    //   return new URL(.import.meta.url).href
    // }
  },
}
</script>

<template>
  <Header />
  <Hero />
  <Main />
  <Footer />
  
</template>

<style lang="scss">
@use '../src/scss/main.scss'

</style>

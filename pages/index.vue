<template>
  <v-layout class="white">
    <v-container fluid>
      <div class="center-wrapper">
        <h2 class="text-xs-center text-md-center">此时此刻的Bug，二十来岁的我</h2>
        <p class="text-xs-right subheading"> ———— 《可遇而不可求之事》</p>
      </div>
    </v-container>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'index',

  components: {
    Logo
  },

  data () {
    return {
      menus: []
    }
  },

  created () {
    this.menus = [{
      label: 'Blog',
      path: '/blog'
    }, {
      label: 'Github',
      path: 'http://github.com/wi-cuckoo'
    }, {
      label: 'Resume',
      path: '/resume'
    }]
  }
}
</script>

<style scoped>
  .center-wrapper {
    position: absolute;
    top: 25%;
    width: 90%;
  }
</style>

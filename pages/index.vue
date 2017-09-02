<template>
  <v-layout class="white">
    <v-container fluid class="page-container pa-0">
      <v-card class="center-wrapper">
      </v-card>
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
    width: 100%;
  }

  .page-container {
    /*background-image: url(/img/index.jpg);*/
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
</style>

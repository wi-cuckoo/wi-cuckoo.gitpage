<template>
    <v-container fluid class="page-container pa-0">
      <v-toolbar class="white elevation-0 pl-4 pr-4" light>
        <v-toolbar-title class="dark--text ml-4">Wi</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat href="/blog">Blog</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card class="center-wrapper">
        
      </v-card>
    </v-container>
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

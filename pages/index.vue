<template>
    <div id="links-wrapper">
      <v-layout row wrap>
        <v-flex xs6><logo/></v-flex>
        <v-flex xs6>
          <v-card v-for="m in menus" :key="m.label" class="mb-3">
            <v-card-title>
              <a :href="m.path" class="title grey--text text--darken-1">{{ m.label }}</a>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'blank',
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
  #links-wrapper {
    position: absolute;
    top: 40%;
    left: 35%;
    width: 600px;
  }
</style>

<template>
    <div id="links-wrapper">
       <v-card img="/img/index_bg.jpg" height="432px">
        <v-layout row wrap class="card-content">
          <v-flex xs6><img src="/img/index_logo.png" style="height: 400px;"></v-flex>
          <v-flex xs6 class="pt-5">
            <v-card v-for="m in menus" :key="m.label" class="mb-4">
              <v-card-title>
                <a :href="m.path" class="title grey--text text--darken-1">{{ m.label }}</a>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
       </v-card>
    </div>
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
  #links-wrapper {
    position: absolute;
    top: 25%;
    width: 100%;
  }

  .card-content {
    padding: 20px 30% 30px;
  }
</style>

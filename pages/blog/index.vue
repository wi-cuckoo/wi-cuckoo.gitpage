<template>
  <v-layout class="mt-5 white">
    <section class="container">
      <div class="display-2 text--darken-1 text-xs-center ma-5">Blog</div>
      <v-divider dark></v-divider>
      <v-list three-line>
        <template v-for="blog in blogs">
          <v-list-tile avatar v-bind:key="blog.title" :href="'/blog' + blog.permalink">
            <v-list-tile-content>
              <v-list-tile-title class="headline mb-2 larger-title">{{ blog.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ blog._date }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
        </template>
      </v-list>
      <div class="text-xs-center mt-3" v-if="page_num">
        <v-pagination :length="page_num" :total-visible="4" v-model="page" circle></v-pagination>
      </div>
    </section>
  </v-layout>
</template>

<script>
  const PAGE_SIZE = 5
  export default {
    async asyncData ({ app }) {
      return {
        total: await app.$content('/blog').query({ exclude: 'body,meta.date' }).getAll()
      }
    },

    data () {
      return {
        page: 1
      }
    },

    computed: {
      page_num () {
        return Math.ceil(this.total.length / PAGE_SIZE)
      },

      blogs () {
        let start = 0 + PAGE_SIZE * (this.page - 1)
        let end = start + PAGE_SIZE
        return this.total.slice(start, end)
      }
    }
  }
</script>

<style type="text/css" scoped>
  .container{
    margin: 0 auto;
    max-width: 730px;
    padding: 0 1.5rem;
  }

  .larger-title {
    height: auto;
  }
</style>
<template>
  <v-layout white>
    <section class="container">
      <div class="display-2 text--darken-1 text-xs-center ma-5">Blog</div>
      <v-divider dark></v-divider>
      <v-list three-line>
        <template v-for="blog in blogs">
          <v-list-tile avatar v-bind:key="blog.title" :href="'/blog' + blog.permalink">
            <v-list-tile-content>
              <v-list-tile-title class="headline">{{ blog.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ blog._date }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
        </template>
      </v-list>
      <div class="text-xs-center">
        <!-- <v-pagination v-bind:length="total.length" v-model="page" circle></v-pagination> -->
      </div>
    </section>
  </v-layout>
</template>

<script>
  const PAGE_SIZE = 5
  export default {
    async asyncData ({ app }) {
      return {
        total: await app.$content('/blog').query({ exclude: 'body,meta' }).getAll(),
        blogs: await app.$content('/blog')
          .query({ exclude: 'body,meta' })
          .getOnly(0, PAGE_SIZE - 1)
      }
    },

    data () {
      return {
        page: 1
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
</style>
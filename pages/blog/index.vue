<template>
  <v-layout white>
    <section class="container">
      <div class="display-4 text--darken-1 text-md-center ma-5">Blog</div>
      <v-divider dark></v-divider>
      <v-list three-line>
        <template v-for="blog in blogs">
          <v-list-tile avatar v-bind:key="blog.title" :href="'/blog' + blog.permalink" target="_blank">
            <v-list-tile-content>
              <v-list-tile-title>{{ blog.title }}</v-list-tile-title>
              <v-list-tile-sub-title v-html="blog.meta.filePath"></v-list-tile-sub-title>
              <v-list-tile-sub-title>{{ blog.date }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
        </template>
      </v-list>
    </section>
  </v-layout>
</template>

<script>
  export default {
    async asyncData ({ app }) {
      return {
        blogs: await app.$content('/blog').getAll()
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
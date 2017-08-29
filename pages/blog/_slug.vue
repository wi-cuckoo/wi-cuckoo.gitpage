<template>
  <section class="content-container">
    <h1 class="post-title"> {{ post.title || 'Nobody'}} </h1>
    <nuxtent-body :body="post.body" />
  </section>
</template>

<script>
  export default {
    asyncData: async ({ app, params, payload }) => ({
      post: await app.$content('/blog').get(params.slug) || payload
    }),

    created () {
      // md = require('~content/Hello.md')
    }
  }
</script>

<style scoped>
  .content-container
  {
    width: 38rem;
    margin: 0 auto
  }
  .post-title
  {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 500;
    color: #35495e;
  }
</style>
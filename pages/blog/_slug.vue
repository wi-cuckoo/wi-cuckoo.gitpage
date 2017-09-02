<template>
  <v-layout white class="pl-3 pr-3 mt-5">
    <section class="content-container">
      <h1 class="post-title light-blue--text"> {{ post.title}} </h1>
      <p class="display-6">{{ post._date }}</p>
      <nuxtent-body :body="post.body" />
    </section>
  </v-layout>
</template>

<script>
  export default {
    asyncData: async ({ app, params, payload }) => ({
      post: await app.$content('/blog').get(params.slug) || payload
    })
  }
</script>

<style scoped>
  .content-container
  {
    width: 38rem;
    margin: 40px auto
  }
  .post-title
  {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 500;
    color: #35495e;
  }
</style>
<template>
  <section class="container">
    <h1> Blogs </h1>
     <ul>
       <li v-for="project in projects">
        <nuxt-link :to="'/blog' + project.permalink">{{  project.title }}</nuxt-link>
      </li>
    </ul>
    <nuxt-child />
  </section>
</template>

<script>
export default {
  async asyncData ({ app }) {
    return {
      projects: await app.$content('/blog').getAll()
    }
  }
}
</script>
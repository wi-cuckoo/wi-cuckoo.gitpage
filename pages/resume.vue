<template>
  <v-layout>
	  <section class="container"></section>
  </v-layout>
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
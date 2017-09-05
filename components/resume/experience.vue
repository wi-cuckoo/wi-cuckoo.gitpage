<template>
  <v-container class="justify-width">
    <div class="title grey--text pl-3 mb-3">Professional Experience</div>
    <div v-for="e in experience" class="exp-section pl-3">
      <div class="headline light-blue--text accent-4">{{ e.position }}
        <span class="subheading grey--text dark-4"> ———— {{ e.company }}</span>
      </div>
      <div class="projects-content">
        <dl class="pl-4">
          <template v-for="p in e.projects">
            <dt><blockquote>{{ p.name }}</blockquote></dt>
            <dd>
              <p>{{ p.intro }}</p>
              <p>{{ p.response }}</p>
            </dd>
          </template>
        </dl>
      </div>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'resume-experience',

    props: {
      experience: Array
    }
  }
</script>

<style scoped>
</style>
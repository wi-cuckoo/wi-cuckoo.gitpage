<template>
  <v-container class="justify-width">
    <div class="title grey--text pl-3 mb-3">Professional Experience</div>
    <div v-for="e in experience" class="exp-section pl-3">
      <div class="headline light-blue--text accent-4">{{ e.position }}</div>
      <div class="subheading grey--text dark-4 pl-2">{{ e.company }}</div>
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
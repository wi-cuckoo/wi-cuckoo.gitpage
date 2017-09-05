<template>
  <v-container class="justify-width">
    <div class="title grey--text pl-3 mb-3">Skills & Proficiency</div>
    <div v-for="s in skills" class="exp-section pl-3">
      <v-layout row wrap>
        <v-flex xs2 md1>
          <p class="skill-label">{{ s.label }}</p>
        </v-flex>
        <v-flex xs10 md8>
          <v-progress-linear v-model="s.value"></v-progress-linear>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'resume-experience',

    props: {
      skills: Array
    }
  }
</script>

<style scoped>
  .skill-label {
    margin: 0.4rem 0;
  }
</style>
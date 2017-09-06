<template>
  <v-container class="justify-width">
    <div class="title grey--text pl-3 mb-3">Education</div>
    <div v-for="e in models" class="exp-section pl-3">
      <div class="headline light-blue--text accent-4">{{ e.university }}
        <span class="subheading grey--text dark-4"> — {{ e.time }}</span>
      </div>
      <div class="">
        <strong class="mr-4">{{ e.degree }}</strong>
        <span>{{ e.major }}</span>
      </div>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'resume-experience',

    props: {
      models: Array
    }
  }
</script>
<template>
  <v-container class="justify-width">
    <div class="headline grey--text pl-3">Professional Experience</div>
    <div v-for="e in experience">
      
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
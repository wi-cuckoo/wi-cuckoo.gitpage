<template>
  <section id="cv-container">
    <!-- profile -->
    <v-profile
    :name="name"
    :phone="phone"
    :email="email"
    portrait="/img/profile.jpg"
    ></v-profile>
    <v-container class="grid-list-xl"><hr/></v-container>
    <!-- experience -->
    <v-experience :experience="experience"></v-experience>
  </section>
</template>

<script>
  import VProfile from '~/components/resume/profile'
  import VExperience from '~/components/resume/experience'
  export default {
    async asyncData ({ app }) {
      let resume = await require('~/static/resume.json')
      return resume
    },

    components: {
      VProfile,
      VExperience
    }
  }
</script>

<style scoped>
  #cv-container
  {
    padding: 4em 0 0 0;
  }

  hr
  {
    display: block;
    width: 90%;
    margin: 40px auto 34px;
    border: 0 none;
    border-top: 3px solid #dededc;
  }

  .justify-width {
    padding: 0 5%
  }
</style>
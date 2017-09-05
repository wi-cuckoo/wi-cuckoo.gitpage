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
    <v-container class="grid-list-xl"><hr/></v-container>
    <!-- education -->
    <v-education :models="education"></v-education>
    <v-container class="grid-list-xl"><hr/></v-container>
    <!-- skills -->
    <v-skill :skills="skills"></v-skill>
  </section>
</template>

<script>
  import VSkill from '~/components/resume/skill'
  import VProfile from '~/components/resume/profile'
  import VExperience from '~/components/resume/experience'
  import VEducation from '~/components/resume/education'
  
  export default {
    async asyncData ({ app }) {
      let resume = await require('~/static/resume.json')
      return resume
    },

    components: {
      VSkill,
      VProfile,
      VEducation,
      VExperience
    }
  }
</script>

<style scoped>
  #cv-container
  {
    padding: 4em 0 4em 0;
    margin: 0 auto;
    max-width: 900px;
  }

  hr
  {
    display: block;
    width: 90%;
    margin: 30px auto 24px;
    border: 0 none;
    border-top: 3px solid #dededc;
  }

  .justify-width {
    padding: 0 5%
  }
</style>
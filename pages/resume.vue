<template>
  <section id="cv-container">
    <!-- profile -->
    <v-container class="grid-list-xl mt-5">
      <v-layout row wrap>
        <v-flex xs12 md4 class="text-xs-center">
          <v-avatar size="130px">
            <img src="/img/profile.jpg" alt="Profile">
          </v-avatar>
        </v-flex>
        <v-flex xs12 md8 justify-center class="text-xs-center text-md-left">
          <v-layout row wrap>
            <v-flex xs12 class="py-1"><h1 class="mb-0 display-3 text--darken-1">Liu Wei</h1></v-flex>
            <v-flex xs12 class="py-1">
              <div class="mb-0">
                <p class="title grey--text text--darken-1">Tel: (+86) 137 5432 9131</p>
                <p class="title grey--text text--darken-1">Email： yp_liuwei@live.com</p>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- experience -->
    <hr/>
    <v-container class="justify-width">
      <div class="headline grey--text pl-3">Professional Experience</div>
      <v-list>
        <v-list-tile>
          <div class="title">贝贝网 （2016/7-至今）</div>
        </v-list-tile>
      </v-list>
    </v-container>
  </section>
</template>

<script>
  export default {
    async asyncData ({ app }) {
      return {}
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
    width: 65%;
    margin: 40px auto 34px;
    border: 0 none;
    border-top: 3px solid #dededc;
  }

  .justify-width {
    padding: 0 5%
  }
</style>
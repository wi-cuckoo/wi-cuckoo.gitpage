<template>
  <v-container class="grid-list-xl mt-5">
    <v-layout row wrap>
      <v-flex xs12 md4 class="text-xs-center">
        <v-avatar size="130px">
          <img :src="portrait" alt="Profile">
        </v-avatar>
      </v-flex>
      <v-flex xs12 md8 justify-center class="text-xs-center text-md-left">
        <v-layout row wrap>
          <v-flex xs12 class="py-1"><h1 class="mb-0 display-3 text--darken-1">{{ name }}</h1></v-flex>
          <v-flex xs12 class="py-1">
            <div class="mb-0">
              <p class="title grey--text text--darken-1">Tel: {{ phone }}</p>
              <p class="title grey--text text--darken-1">Email： {{ email }}</p>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'resume-profile',

    props: {
      name: String,

      phone: String,

      email: String,

      portrait: String
    }
  }
</script>
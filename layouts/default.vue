<template>
  <div>
    <v-app>
      <v-toolbar class="transparent elevation-0" light>
        <!-- <v-toolbar-logo src="/img/favicon.png"></v-toolbar-logo> -->
        <v-btn flat nuxt>Wi</v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat>Link One</v-btn>
          <v-btn flat>Link One</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <nuxt/>
    </v-app>
  </div>
</template>

<style>
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>

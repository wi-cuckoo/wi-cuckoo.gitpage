<template>
  <div>
    <v-app light>
      <v-toolbar class="white elevation-0 pl-1 pr-1" light>
        <v-btn icon href="/">
          <v-icon medium>home</v-icon>
        </v-btn>
        <v-toolbar-title class="dark--text ml-4">Wi</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat href="/blog">Blog</v-btn>
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

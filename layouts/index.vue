<template>
  <div>
    <v-app light class="white">    
      <v-toolbar class="white elevation-0 pl-2 pr-2" light>
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
	html {
		overflow-y: auto;
	}
</style>
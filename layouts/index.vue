<template>
  <div>
    <v-app light class="white">    
      <v-toolbar class="white elevation-0 pl-2 pr-2" light>
        <v-avatar class="blue" size="32px">
           <img src="/img/favicon.png" alt="Wi">
        </v-avatar>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat href="/blog">Blog</v-btn>
          <v-btn flat href="/resume">Resume</v-btn>
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
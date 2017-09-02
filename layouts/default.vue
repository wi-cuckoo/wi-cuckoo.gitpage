<template>
  <div>
    <v-app light toolbar>
      <v-toolbar class="white elevation-0 pl-1 pr-1" fixed light>
        <v-avatar class="blue" size="32px">
           <img src="/img/favicon.png" alt="Wi">
        </v-avatar>
        <v-spacer></v-spacer>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      </v-toolbar>
      <nuxt/>
    </v-app>
  </div>
</template>

<script type="babel">
  export default {
    data () {
      return {
        drawer: false
      }
    }
  }
</script>

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

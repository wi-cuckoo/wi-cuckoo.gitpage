<template>
  <div>
    <v-app light toolbar>
      <v-navigation-drawer temporary v-model="drawer" right>
        <v-list class="pa-1">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="/img/profile.jpg" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Louis Wei</v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          <v-list-tile v-for="item in items" :key="item.title" :href="item.href">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar fixed class="white elevation-0" dark>
        <v-avatar class="blue" size="32px">
           <img src="/img/favicon.png" alt="Wi">
        </v-avatar>
        <v-spacer></v-spacer>
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="grey--text"></v-toolbar-side-icon>
      </v-toolbar>
      <nuxt/>
    </v-app>
  </div>
</template>

<script type="babel">
  export default {
    data () {
      return {
        drawer: false,
        items: [
          { title: 'Home', icon: 'home', href: '/' },
          { title: 'Blog', icon: 'note', href: '/blog' },          
          { title: 'C V', icon: 'portrait', href: '/resume' }
        ],
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

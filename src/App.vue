<template>
  <v-app id="app">
    <drawer></drawer>
    <toolbar></toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
    <foooter></foooter>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import Drawer from './components/layout/Drawer'
import Toolbar from './components/layout/Toolbar'
import Footer from './components/layout/Footer'

@Component({
  components: {
    Drawer,
    Toolbar,
    // Not a typo, 'footer' is an already existing HTML element
    foooter: Footer
  }
})
export default class App extends Vue {}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

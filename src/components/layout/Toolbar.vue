<template lang="html">
  <v-toolbar fixed>
    <v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>ADLM</v-toolbar-title>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Toolbar extends Vue {
  drawer = true
}
</script>

<style lang="css">
</style>

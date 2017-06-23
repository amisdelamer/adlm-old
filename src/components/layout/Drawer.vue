<template lang="html">
  <v-navigation-drawer
    persistent
    enable-resize-watcher
    :mini-variant.sync="mini"
    v-model="drawer">
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Drawer extends Vue {
  drawer = true

  mini = false
}
</script>

<style lang="css">
</style>

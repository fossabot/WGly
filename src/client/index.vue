<template lang="pug">
  v-app(dark)
    v-btn Hello World
</template>
<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  
  @Component
  export default class Index extends Vue {
    // data
    appName: string = 'Hello World'
    // lifecycle hooks
    mounted () {
      console.log(this.appName)
    }
  }
</script>

<style lang="stylus">
*
  margin 0
  padding 0
</style>

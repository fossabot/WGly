<template lang="pug">
  v-app(dark)
    v-content
      Authenticate
</template>
<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Authenticate from './layouts/Authenticate.vue'
  
  @Component({
    components: {
      Authenticate
    }
  })
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
</style>

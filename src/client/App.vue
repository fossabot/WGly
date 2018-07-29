<template lang="pug">
  v-app(dark)
    v-content
      Authenticate
</template>
<script lang="ts">
  import Authenticate from './layouts/Authenticate.vue'

export default {
	components: { Authenticate },
	name: 'app'
}
</script>

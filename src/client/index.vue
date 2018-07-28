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
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video
  margin 0
  padding 0
	border 0
	font-size 100%
	font inherit
	vertical-align baseline

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section
	display block

body
	line-height 1

ol, ul
	list-style none

blockquote, q
	quotes none

blockquotebefore, blockquoteafter,
qbefore, qafter
	content ''
	content none

table
	border-collapse collapse
	border-spacing 0
</style>

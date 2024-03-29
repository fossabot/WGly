import Vue from "vue";
import "material-design-icons-iconfont/dist/material-design-icons.css" // Ensure you are using css-loader
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.css"
Vue.use(Vuetify)
import App from './App.vue'
import store from './store/'
//import './api/feathers-client'

new Vue({
  el: '#app',
  render: h => h(App),
  store
})

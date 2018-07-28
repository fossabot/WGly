import Vue from 'vue'
import Vuex from 'vuex'
import feathersVuex from 'feathers-vuex'
import feathersClient from '../api/feathers-client'

//Modules
import {config} from './modules/config'

//Init
Vue.use(Vuex)
const { service, auth } = feathersVuex(feathersClient, { idField: '_id' })

//Store
export default new Vuex.Store({
    plugins: [
        service('users'),
    
        auth({
          userService: 'users'
        })
    ],
    modules: {
        config
    },
    strict: process.env.NODE_ENV !== 'production'
})
<template lang="pug">
    div
        v-container(fluid fill-height)
            v-layout(align-center justify-center)
                v-flex(xs12 sm8 md4)
                    Owl(
                        :hideEyes="hideEyes"
                        :degreeEyes="degreeEyes"
                        class="owl-component")
                    v-card(class="elevation-12")
                        v-toolbar
                            v-toolbar-title(text-xs-center) Authenticate Form
                        v-card-text
                            Login(
                                v-if="navigate === 0"
                                v-on:password-enter="hideEyes = $event"
                                v-on:username-changed="calculateEye($event)"
                                v-on:password-changed="calculateEye($event)")
                            Signup(
                                v-if="navigate === 1"
                                v-on:password-enter="hideEyes = $event"
                                v-on:username-changed="calculateEye($event)"
                                v-on:password-changed="calculateEye($event)"
                                v-on:password_r-changed="calculateEye($event)")
        v-bottom-nav(
            :active.sync="navigate"
            :color="color"
            :value="true"
            absolute
            )
                                            
            v-btn
                span Login
                v-icon lock_open
                                           
            v-btn
                span Register
                v-icon account_box
                            
</template>
<script lang="ts">
    import Owl from '../components/Misc/Owl.vue'
    import Login from '../components/Authenticate/Login.vue'
    import Signup from '../components/Authenticate/Signup.vue'
    export default {
        name: 'Authenticate',
        components: {Owl, Login, Signup},
        data() {
            return { 
                navigate: 0,
                hideEyes: false,
                degreeEyes: 0
            }
        },
        methods: {
            calculateEye: function(event: string) {
                let degree = 275
                if ( event.length < 10 )
                    degree -= event.length * 7
                else 
                    degree = 200
                this.degreeEyes = degree
            }
        },
        computed: {
            color: function() {
                switch (this.navigate) {
                    case 0: return 'teal'
                    case 1: return 'orange'
                }
            }
        }
    }
</script>
<style lang="stylus" scoped>
.owl-component
    position absolute
    left 50%
    margin-top -45
    transform translate(-50%, -50%)
    z-index 10
</style>



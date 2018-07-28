<template lang="pug">
    div
        v-container(fluid fill-height)
            v-layout(align-center justify-center)
                v-flex(xs12 sm8 md4)
                    div.owl(v-bind:class="{ password: hideEyes }")
                        div.eyes
                            div.eye
                            div.eye
                        div.hand(v-bind:class="{ password: hideEyes }")
                        div.hand.hand-r(v-bind:class="{ password: hideEyes }")
                        div.arms(v-bind:class="{ password: hideEyes }")
                            div.arm(v-bind:class="{ password: hideEyes }")
                            div.arm.arm-r(v-bind:class="{ password: hideEyes }")
                    v-card(class="elevation-12")
                        v-toolbar
                            v-toolbar-title(text-xs-center) Login form
                        v-card-text
                            v-form
                                v-text-field(prepend-icon="person" 
                                             name="Username" 
                                             label="Username" 
                                             type="text"
                                             v-on:input="calculateEye($event)")
                                v-text-field(prepend-icon="lock" 
                                             name="Password" 
                                             label="Password" 
                                             type="password"
                                             @focus="showEyes(false)"
                                             @blur="showEyes(true)"
                                             v-on:input="calculateEye($event)")

                                v-btn Login

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
    import Vue from 'vue'
    import Component from 'vue-class-component'
    
    @Component({
        name : 'Authenticate'
    })
    export default class Authenticate extends Vue {
        // data
        navigate: number = 0
        hideEyes: boolean = false
        // lifecycle hooks
        get color() {
            switch (this.navigate) {
                case 0: return 'teal'
                case 1: return 'orange'
            }
        }
        calculateEye(event: string) {
            let degree = 275
            if ( event.length < 10 )
                degree -= event.length * 7
            else 
                degree = 200
            this.moveEyes(degree)
        }
        showEyes(isHiding) {
            this.hideEyes = !isHiding
        }
        moveEyes(degree: number) {
            const eyes = document.getElementsByClassName('eye')
            Array.from(eyes).forEach(eye => {
                eye.setAttribute("style",`transform: rotate(${degree}deg)`)  
            })
        }
    }
</script>
<style lang="stylus" scoped>
.owl
    width 211px
    height 108px
    position absolute
    left 50%
    margin-top -45
    transform translate(-50%, -50%)
    z-index 10
    background-image url('assets/owl-login.png')

    .eyes
        position relative
        display inline-block
        top 50
        left 60
        width 100%

    .eye
        position relative
        display inline-block
        border-radius 50%
        height 40px
        width 40px
        margin-right 15

    .eye:after
        position absolute
        background-image url('assets/owl-login-eye.png')
        bottom 20px
        right 20px
        width 14px
        height 14px
        border-radius 50%
        content " "

    .hand
        width 34px
        height 34px
        border-radius 40px
        background-color #472d20
        transform scaleY(0.6)
        position absolute
        left 14px
        bottom -8px
        transition 0.3s ease-out
    
        &.password
            transform translateX(42px) translateY(-15px) scale(0.7);
        
        &.hand-r
            left 170px
        
            &.password
                transform translateX(-42px) translateY(-15px) scale(0.7);
    
    .arms
        position absolute
        top 58px
        height 41px
        width 100%
        overflow hidden
    
        .arm
            width 40px
            height 65px
            position absolute
            left 20px
            top 40px
            transition 0.3s ease-out
            background-image url('https://dash.readme.io/img/owl-login-arm.png')
        
            &.password
                transform translateX(40px) translateY(-40px)


            &.arm-r
                left 158px
                transform scaleX(-1)
            
                &.password 
                    transform translateX(-40px) translateY(-40px) scaleX(-1)
</style>



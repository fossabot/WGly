<template lang="pug">
    div
        div.owl
            div.hand
            div.hand.hand-r
            div.arms
                div.arm
                div.arm.arm-r
        v-container(fluid fill-height)
            v-layout(align-center justify-center)
                v-flex(xs12 sm8 md4)
                    v-card(class="elevation-12")
                        v-toolbar
                            v-toolbar-title(text-xs-center) Login form
                        v-card-text
                            v-form
                                v-text-field(prepend-icon="person" name="login" label="Login" type="text")
                        v-card-actions
                            v-bottom-nav(
                                :active.sync="navigate"
                                :color="color"
                                :value="true"
                                absolute)
                                
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
        // lifecycle hooks
        get color() {
            switch (this.navigate) {
                case 0: return 'teal'
                case 1: return 'orange'
            }
        } 
    }
</script>
<style lang="stylus" scoped>
.v-text-field__slot
    height auto !important
.owl
    margin-left auto
    margin-right auto
    width 211px
    height 108px
    position absolute
    z-index 10
    background-image url('https://dash.readme.io/img/owl-login.png')

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



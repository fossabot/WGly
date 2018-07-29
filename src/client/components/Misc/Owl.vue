<template lang="pug">
div.owl(v-bind:class="{ password: hideEyes }")
    div.eyes
        div.eye
        div.eye
    div.hand(v-bind:class="{ password: hideEyes }")
    div.hand.hand-r(v-bind:class="{ password: hideEyes }")
    div.arms(v-bind:class="{ password: hideEyes }")
        div.arm(v-bind:class="{ password: hideEyes }")
        div.arm.arm-r(v-bind:class="{ password: hideEyes }")
</template>
<script lang="ts">
    export default {
        props: {
            hideEyes: Boolean,
            degreeEyes: Number
        },
        name: 'Owl',
        watch: {
            degreeEyes: function(event) {
                this.moveEyes(event)
            }
        },
        methods: {
            showEyes(isHiding) {
                this.hideEyes = !isHiding
            },
            moveEyes(degree: number) {
                const eyes = document.getElementsByClassName('eye')
                Array.from(eyes).forEach(eye => {
                    eye.setAttribute("style",`transform: rotate(${degree}deg)`)  
                })
            }
        }
    }
</script>
<style lang="stylus" scoped>
.owl
    width 211px
    height 108px
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
            background-image url('assets/owl-login-arm.png')
        
            &.password
                transform translateX(40px) translateY(-40px)


            &.arm-r
                left 158px
                transform scaleX(-1)
            
                &.password 
                    transform translateX(-40px) translateY(-40px) scaleX(-1)
</style>


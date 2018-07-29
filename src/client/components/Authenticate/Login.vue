<template lang="pug">
v-form
    v-text-field(
        prepend-icon="person" 
        name="Username" 
        label="Username" 
        type="text"
        v-on:input="$emit('username-changed', $event)")
    
    v-text-field(
        prepend-icon="lock" 
        name="Password" 
        label="Password" 
        type="password"
        @focus="$emit('password-enter', true)"
        @blur="$emit('password-enter', false)"
        v-on:input="$emit('password-changed', $event)")

    v-btn Login
</template>

<script lang="ts">
export default {}
</script>

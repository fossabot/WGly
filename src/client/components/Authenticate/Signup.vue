<template lang="pug">
v-form
    v-text-field(
        prepend-icon="person" 
        name="Email"
        v-model="email" 
        label="Email" 
        type="text"
        v-on:input="$emit('username-changed', $event)")
    
    v-text-field(
        prepend-icon="lock" 
        name="Password"
        v-model="password" 
        label="Password" 
        type="password"
        @focus="$emit('password-enter', true)"
        @blur="$emit('password-enter', false)"
        v-on:input="$emit('password-changed', $event)")

    v-text-field(
        prepend-icon="lock" 
        name="Password_repeat" 
        label="Password repeat" 
        type="password"
        @focus="$emit('password-enter', true)"
        @blur="$emit('password-enter', false)"
        v-on:input="$emit('password_r-changed', $event)")

    v-btn(@click="onSubmit(email, password)") Signup
</template>

<script lang="ts">
import { mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      email: undefined,
      password: undefined,
      error: undefined
    }
  },
  methods: {
    dismissError () {
      this.error = undefined
      this.clearCreateError()
    },
    onSubmit (email, password) {
      this.dismissError()
      // Automatically log the user in after successful signup.
      this.createUser({ email, password })
        .then(response => this.authenticate({strategy: 'local', email, password}))
        // Just use the returned error instead of mapping it from the store.
        .catch(error => {
          // Convert the error to a plain object and add a message.
          let type = error.errorType
          error = Object.assign({}, error)
          error.message = (type === 'uniqueViolated')
            ? 'That email address is unavailable.'
            : 'An error prevented signup.'
          this.error = error
        })
    },
    ...mapActions('users', {
      createUser: 'create'
    }),
    ...mapMutations('users', {
      clearCreateError: 'clearCreateError'
    }),
    ...mapActions('auth', [
      'authenticate'
    ])
  }
}
</script>

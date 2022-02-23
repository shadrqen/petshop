<template>
  <auth-dialog
    ref="baseAuthDialog"
    :submission-ongoing="loginOngoing"
    action-name="Log in"
    form-ref="loginForm"
    data-test-id="login-button"
    :submit-content="() => {}"
    :dialog="loginDialog"
    :close-dialog="() => {}"
    :error="loginError"
    checkbox-label="Remember me"
    checkbox-data-test-id="remember-me-checkbox"
  >
    <template #text-fields>
      <v-text-field
        id="loginEmail"
        v-model="loginForm.email"
        data-test-id="login-email-field"
        label="Email address *"
        outlined
        type="email"
      />
      <v-text-field
        id="loginPassword"
        v-model="loginForm.password"
        data-test-id="login-password-field"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        label="Password *"
        outlined
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
        @keyup.enter="() => {}"
      />
    </template>
    <template #action-buttons>
      <a
        :class="actionBtnClass + ' ml-2'"
        @click="() => {}"
      >
        Forgot password?
      </a>
      <v-spacer />
      <a
        :class="actionBtnClass + ' mr-2'"
        @click="() => {}"
      >
        Don't have an account? Sign Up
      </a>
    </template>
  </auth-dialog>
</template>

<script>
import { mapState } from 'vuex'
import AuthDialog from '@/components/AuthDialog'

export default {
  name: 'BaseLogin',
  components: {
    AuthDialog
  },
  data () {
    return {
      loginOngoing: false,
      showPassword: false,
      loginError: {
        status: false,
        error: []
      },
      loginForm: {
        email: '',
        password: ''
      },
      actionBtnClass: 'text-decoration-none mb-3 body-2'
    }
  },
  computed: {
    ...mapState('auth', ['loginDialog'])
  }
}
</script>

<style lang="scss" scoped>
</style>

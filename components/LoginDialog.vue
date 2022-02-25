<template>
  <auth-dialog
    ref="baseAuthDialog"
    :submission-ongoing="loginOngoing"
    action-name="Log in"
    action-btn-id="some-stuff"
    form-ref="loginForm"
    data-test-id="login-button"
    :dialog="loginDialog"
    :error="loginError"
    checkbox-label="Remember me"
    checkbox-data-test-id="remember-me-checkbox"
    @submitContent="login"
    @closeDialog="openCloseDialogs('login')"
  >
    <template #text-fields>
      <base-text-field
        v-model="loginForm.email"
        text-label="Email address *"
        text-id="email-address"
        text-data-test-id="login-email-field"
        type="email"
        :outlined="true"
        :text-rule="formValidation.emailRule"
        @keyup.enter="login"
      />
      <base-text-field
        v-model="loginForm.password"
        text-label="Password *"
        text-id="password"
        text-data-test-id="login-password-field"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :outlined="true"
        :type="showPassword ? 'text' : 'password'"
        :text-rule="formValidation.passwordRule"
        @click:append="showPassword = !showPassword"
        @keyup.enter="login"
      />
    </template>
    <template #action-buttons>
      <base-hyperlink
        link-body="Forgot password?"
        :link-class="actionBtnClass + ' ml-2'"
        @linkAction="openResetPasswordPage"
      />
      <v-spacer />
      <base-hyperlink
        link-body="Don't have an account? Sign Up"
        :link-class="actionBtnClass + ' mr-2'"
        @linkAction="openCloseDialogs('registration', 'open')"
      />
    </template>
  </auth-dialog>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import AuthDialog from '@/components/AuthDialog'
import AuthenticationApi from '~/services/AuthenticationApi'
import AuthenticationMixin from '@/mixins/AuthenticationMixin'
import BaseHyperlink from '@/components/Base/BaseHyperlink'
import BaseTextField from '@/components/Base/BaseTextField'
import DialogsMixin from '@/mixins/DialogsMixin'

export default {
  name: 'BaseLogin',
  components: {
    AuthDialog,
    BaseHyperlink,
    BaseTextField
  },
  mixins: [AuthenticationMixin, DialogsMixin],
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
  },
  methods: {
    ...mapMutations('auth', ['SET_USER_LOGGED_IN', 'SET_ACCESS_TOKEN']),
    openResetPasswordPage () {
      this.openCloseDialogs('login')
      this.$router.push('/password-recovery')
    },
    async login () {
      if (this.$refs.baseAuthDialog.$refs.loginForm.validate()) {
        this.loginOngoing = true
        await AuthenticationApi.loginUser(this.loginForm)
          .then(response => {
            this.processLoginResponse(response)
          })
          .catch(error => {
            this.displayLoginError(error)
          })
        this.loginOngoing = false
      }
    },
    /**
     * Processes the login response in case of success. This includes actuall logging in
     * of the user
     * @param {{data, success}} response - The response object from the login api
     * @return {void}
     */
    processLoginResponse (response) {
      switch (response.success) {
        case 1:
          this.SET_USER_LOGGED_IN(true)
          this.SET_ACCESS_TOKEN(response.data.token)
          this.openCloseDialogs('login')
          break
        default:
          break
      }
    },
    displayLoginError (error) {
      if (error.response.status === 422) {
        this.loginError.error.push('Username/password mismatch')
      } else {
        this.loginError.error.push('Failed to log in')
      }
      this.loginError.status = true
      setTimeout(() => {
        this.resetLoginError()
      }, 3000)
    },
    resetLoginError () {
      this.loginError.error = []
      this.loginError.status = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

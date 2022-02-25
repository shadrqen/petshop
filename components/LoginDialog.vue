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
        text-type="email"
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
        :text-type="showPassword ? 'text' : 'password'"
        :text-rule="formValidation.passwordRule"
        @clickAppendIcon="showPassword = !showPassword"
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
  methods: {
    openResetPasswordPage () {
      this.openCloseDialogs('login')
      this.$router.push('/recover-password')
    },
    async login () {
      if (this.$refs.baseAuthDialog.$refs.loginForm.validate()) {
        this.loginOngoing = true
        await AuthenticationApi.loginUser(this.loginForm)
          .then(response => {
            this.processApiResponse(response, 'login')
          })
          .catch(error => {
            this.processApiError(error.response, 'login')
          })
        this.loginOngoing = false
      }
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

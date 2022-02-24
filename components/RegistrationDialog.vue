<template>
  <auth-dialog
    ref="baseAuthDialog"
    :submission-ongoing="registrationOngoing"
    action-name="Sign Up"
    form-ref="registrationForm"
    data-test-id="registration-button"
    :submit-content="register"
    :dialog="registrationDialog"
    :error="registrationError"
    checkbox-data-test-id="promotional-marketing-checkbox"
    checkbox-label="I want to receive inspiration, marketing promotions and updates via email"
    @closeDialog="openCloseDialogs('registration')"
  >
    <template #text-fields>
      <v-row no-gutters>
        <v-col cols="6">
          <base-text-field
            v-model="registrationForm.last_name"
            text-label="First Name *"
            text-id="first-name"
            text-class="mr-1"
            text-data-test-id="first-name-field"
            :outlined="true"
          />
        </v-col>
        <v-col
          cols="
            6"
        >
          <base-text-field
            v-model="registrationForm.last_name"
            text-label="Last Name *"
            text-id="last-name"
            text-class="ml-1"
            text-data-test-id="last-name-field"
            :outlined="true"
          />
        </v-col>
      </v-row>
      <base-text-field
        v-model="registrationForm.email"
        text-label="Email address *"
        text-id="registration-email"
        text-data-test-id="registration-email-field"
        :outlined="true"
        type="email"
      />
      <base-text-field
        v-model="registrationForm.password"
        text-label="Password *"
        text-id="registration-password"
        text-data-test-id="registration-password-field"
        :outlined="true"
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      />
      <base-text-field
        v-model="registrationForm.password_confirmation"
        text-label="Confirm Password *"
        text-id="registration-password"
        text-data-test-id="registration-confirm-password-field"
        :outlined="true"
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      />
    </template>
    <template #action-buttons>
      <a :class="actionBtnClass">
        Already have an account? Log in
      </a>
    </template>
  </auth-dialog>
</template>

<script>
import { mapState } from 'vuex'
import AuthDialog from '@/components/AuthDialog'
import BaseTextField from '@/components/Base/BaseTextField'
import AuthenticationMixin from '@/mixins/AuthenticationMixin'

export default {
  name: 'RegistrationDialog',
  components: {
    AuthDialog,
    BaseTextField
  },
  mixins: [AuthenticationMixin],
  data () {
    return {
      registrationOngoing: false,
      showPassword: false,
      registrationForm: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      actionBtnClass: 'text-decoration-none mb-3 body-2 justify-center',
      registrationError: {
        status: false,
        error: []
      }
    }
  },
  computed: {
    ...mapState('auth', ['registrationDialog'])
  },
  methods: {
    register () {}
  }
}
</script>

<style lang="scss" scoped>
</style>

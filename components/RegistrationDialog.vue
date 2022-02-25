<template>
  <auth-dialog
    ref="baseAuthDialog"
    :submission-ongoing="registrationOngoing"
    action-name="Sign Up"
    form-ref="registrationForm"
    data-test-id="registration-button"
    :dialog="registrationDialog"
    :error="registrationError"
    checkbox-data-test-id="promotional-marketing-checkbox"
    checkbox-label="I want to receive inspiration, marketing promotions and updates via email"
    @submitContent="register"
    @closeDialog="openCloseDialogs('registration')"
  >
    <template #text-fields>
      <v-row no-gutters>
        <v-col cols="6">
          <base-text-field
            v-model="registrationForm.first_name"
            text-label="First Name *"
            text-id="first-name"
            text-class="mr-1"
            text-data-test-id="first-name-field"
            :text-rule="formValidation.firstNameRule"
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
            :text-rule="formValidation.lastNameRule"
            :outlined="true"
          />
        </v-col>
      </v-row>
      <base-text-field
        v-model="registrationForm.email"
        text-label="Email address *"
        text-id="registration-email"
        text-data-test-id="registration-email-field"
        type="email"
        :text-rule="formValidation.emailRule"
        :outlined="true"
      />
      <base-text-field
        v-model="registrationForm.password"
        text-label="Password *"
        text-id="registration-password"
        text-data-test-id="registration-password-field"
        :outlined="true"
        :text-rule="formValidation.passwordRule"
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
        :text-rule="passwordSimilarityRule"
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      />
    </template>
    <template #action-buttons>
      <base-hyperlink
        link-body="Already have an account? Log in"
        :link-class="actionBtnClass"
        @linkAction="openCloseDialogs('login', 'open')"
      />
    </template>
  </auth-dialog>
</template>

<script>
import { mapState } from 'vuex'
import AuthenticationMixin from '@/mixins/AuthenticationMixin'
import AuthDialog from '@/components/AuthDialog'
import BaseHyperlink from '@/components/Base/BaseHyperlink'
import BaseTextField from '@/components/Base/BaseTextField'
import DialogsMixin from '@/mixins/DialogsMixin'

export default {
  name: 'RegistrationDialog',
  components: {
    AuthDialog,
    BaseHyperlink,
    BaseTextField
  },
  mixins: [AuthenticationMixin, DialogsMixin],
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
      passwordSimilarityRule: [
        value => !!value || 'Password confirmation is required',
        value => value === this.registrationForm.password || 'Passwords must match'
      ],
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
    register () {
      if (this.$refs.baseAuthDialog.$refs.registrationForm.validate()) {
        console.log('Form is valid')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

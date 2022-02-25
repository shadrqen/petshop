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
        text-type="email"
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
        :text-type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @clickAppendIcon="showPassword = !showPassword"
      />
      <base-text-field
        v-model="registrationForm.password_confirmation"
        text-label="Confirm Password *"
        text-id="registration-password"
        text-data-test-id="registration-confirm-password-field"
        :outlined="true"
        :text-rule="passwordSimilarityRule"
        :text-type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @clickAppendIcon="showPassword = !showPassword"
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
import AuthenticationMixin from '@/mixins/AuthenticationMixin'
import AuthDialog from '@/components/AuthDialog'
import AuthenticationApi from '~/services/AuthenticationApi'
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
        address: 'Nairobi, Kenya', // Field is necessary on the api, but not on UI, so I set a default
        phone_number: '+12345678910', // Field is necessary on the api, but not on UI, so I set a default
        password: '',
        password_confirmation: ''
      },
      passwordSimilarityRule: [
        value => !!value || 'Password confirmation is required',
        value => value === this.registrationForm.password || 'Passwords must match'
      ],
      actionBtnClass: 'text-decoration-none mb-3 ml-2 body-2 justify-center',
      registrationError: {
        status: false,
        error: []
      }
    }
  },
  methods: {
    async register () {
      if (this.$refs.baseAuthDialog.$refs.registrationForm.validate()) {
        this.registrationOngoing = true
        await AuthenticationApi.registerUser(this.registrationForm)
          .then(response => {
            this.processApiResponse(response, 'registration')
          })
          .catch(error => {
            this.processApiError(error.response, 'registration')
          })
        this.registrationOngoing = false
      }
    },
    /**
     * Pushes registration errors to the errors array
     * @param {{status,data}} error - The error object
     * @return {void}
     */
    pushRegistrationErrors (error) {
      if (error.data.error === 'Failed Validation') {
        const RESPONSE_ERRORS = error.data.errors
        for (const key in RESPONSE_ERRORS) {
          RESPONSE_ERRORS[key].forEach(err => {
            this.registrationError.error.push(err)
          })
        }
      } else {
        this.registrationError.error.push('Failed to register! Try again')
      }
    },
    resetRegistrationError () {
      this.registrationError.error = []
      this.registrationError.status = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

import FormValidation from '@/utils/FormValidation'
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      formValidation: FormValidation
    }
  },
  methods: {
    ...mapMutations('auth', ['SET_USER_LOGGED_IN', 'SET_ACCESS_TOKEN']),
    /**
     * Processes the login response in case of success. This includes actuall logging in
     * of the user
     * @param {{data, success}} response - The response object from the login api
     * @param {string} responseType - The type of action - be it login or registration
     * @return {void}
     */
    processApiResponse (response, responseType) {
      if (response.success === 1) {
        this.SET_USER_LOGGED_IN(true)
        this.SET_ACCESS_TOKEN(response.data.token)
        this.openCloseDialogs(responseType)
      }
    },
    /**
     * Displays api errors - for login and registration
     * @param {{data,status}} error - Error object
     * @param {string} responseType - Type of response (login or registration)
     * @return {void}
     */
    processApiError (error, responseType) {
      if (error.status === 422) {
        this.push422Errors(error, responseType)
      } else {
        this.pushDefaultApiErrors(responseType)
      }
    },
    /**
     * Pushes the errors with code 422 onto the errors array
     * @param {{data,success}} error - Error object
     * @param {string} responseType - Type of response (login or registration)
     * @return {void}
     */
    push422Errors (error, responseType) {
      if (responseType === 'registration') {
        this.pushRegistrationErrors(error)
      }
      if (responseType === 'login') {
        this.loginError.error.push('Username/password mismatch')
      }
      this.showApiErrors(responseType)
    },
    /**
     * Pushes default errors onto the errors array
     * @param {string} responseType - Type of response (login or registration)
     * @return {void}
     */
    pushDefaultApiErrors (responseType) {
      if (responseType === 'login') {
        this.loginError.error.push('Failed to log in')
      }
      if (responseType === 'registration') {
        this.registrationError.error.push('Failed to register! Try again')
      }
    },
    /**
     * Activates the display of the errors by turning the status on
     * @param {string} responseType - Type of response (login or registration)
     * @return {void}
     */
    showApiErrors (responseType) {
      if (responseType === 'login') {
        this.loginError.status = true
      }
      if (responseType === 'registration') {
        this.registrationError.status = true
      }
      this.resetApiErrors(responseType)
    },
    /**
     * Resets the api errors
     * @param {string} responseType - Type of response (login or registration)
     * @return {void}
     */
    resetApiErrors (responseType) {
      setTimeout(() => {
        if (responseType === 'login') {
          this.resetLoginError()
        }
        if (responseType === 'registration') {
          this.resetRegistrationError()
        }
      }, 3000)
    }
  }
}

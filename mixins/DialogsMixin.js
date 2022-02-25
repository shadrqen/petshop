import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('auth', ['loginDialog', 'registrationDialog'])
  },
  methods: {
    ...mapMutations('auth', ['SET_LOGIN_DIALOG', 'SET_LOGOUT_DIALOG', 'SET_REGISTRATION_DIALOG']),
    /**
     * Opens or closes dialogs
     * @param {string} type - The type of dialog (login or registration)
     * @param {string} action - The action to take on a dialog (open or otherwise close)
     * @return {void}
     */
    openCloseDialogs (type, action = 'close') {
      const MUTATION_VALUE = action === 'open'
      switch (type) {
        case 'login':
          if (this.registrationDialog && !this.loginDialog) {
            this.SET_REGISTRATION_DIALOG(!MUTATION_VALUE)
          }
          this.SET_LOGIN_DIALOG(MUTATION_VALUE)
          break
        case 'logout':
          this.SET_LOGOUT_DIALOG(MUTATION_VALUE)
          break
        case 'registration':
          if (this.loginDialog && !this.registrationDialog) {
            this.SET_LOGIN_DIALOG(!MUTATION_VALUE)
          }
          this.SET_REGISTRATION_DIALOG(MUTATION_VALUE)
          break
      }
    }
  }
}

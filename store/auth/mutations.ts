import { MutationTree } from 'vuex'
import { AuthState } from '~/types/vuex'

const getDefaultAuthState = () => {
  return {
    userLoggedIn: false,
    loginDialog: false,
    logoutDialog: false,
    registrationDialog: false,
    accessToken: ''
  }
}

export const mutations: MutationTree<AuthState> = {
  SET_USER_LOGGED_IN: (state: AuthState, payload: boolean) => {
    state.userLoggedIn = payload
  },
  SET_LOGIN_DIALOG: (state: AuthState, payload: boolean) => {
    state.loginDialog = payload
  },
  SET_LOGOUT_DIALOG: (state: AuthState, payload: boolean) => {
    state.logoutDialog = payload
  },
  SET_REGISTRATION_DIALOG: (state: AuthState, payload: boolean) => {
    state.registrationDialog = payload
  },
  SET_ACCESS_TOKEN: (state: AuthState, payload: string) => {
    state.accessToken = payload
  },
  RESET_AUTH_STATE: (state: AuthState) => {
    Object.assign(state, getDefaultAuthState())
  }
}

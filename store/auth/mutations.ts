import { MutationTree } from 'vuex'
import { AuthState } from '~/types/vuex'

export const mutations: MutationTree<AuthState> = {
  SET_USER_LOGGED_IN: (state: AuthState, payload: boolean) => {
    state.userLoggedIn = payload
  },
  SET_LOGIN_DIALOG: (state: AuthState, payload: boolean) => {
    state.loginDialog = payload
  },
  SET_REGISTRATION_DIALOG: (state: AuthState, payload: boolean) => {
    state.registrationDialog = payload
  },
  SET_ACCESS_TOKEN: (state: AuthState, payload: string) => {
    state.accessToken = payload
  }
}

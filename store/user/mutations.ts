import { MutationTree } from 'vuex'
import { AuthState } from '~/types/vuex'

export enum AuthMutations {
  /* eslint-disable no-unused-vars */
  SET_USER_LOGGED_IN = 'SET_USER_LOGGED_IN',
  SET_USER_IS_LOGGED_IN = 'SET_USER_IS_LOGGED_IN',
  SET_REGISTRATION_DIALOG = 'SET_REGISTRATION_DIALOG',
  SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN'
  /* eslint-enable no-unused-vars */
}

export const mutations: MutationTree<AuthState> = {
  [AuthMutations.SET_USER_LOGGED_IN]: (state: AuthState, payload: boolean) => {
    state.userLoggedIn = payload
  },
  [AuthMutations.SET_USER_IS_LOGGED_IN]: (state: AuthState, payload: boolean) => {
    state.loginDialog = payload
  },
  [AuthMutations.SET_REGISTRATION_DIALOG]: (state: AuthState, payload: boolean) => {
    state.registrationDialog = payload
  },
  [AuthMutations.SET_ACCESS_TOKEN]: (state: AuthState, payload: string) => {
    state.accessToken = payload
  }
}

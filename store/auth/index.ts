import { AuthState, RootState } from '~/types/vuex'
import { Module } from 'vuex'
import { getters } from '~/store/auth/getters'
import { mutations } from '~/store/auth/mutations'
import { actions } from '~/store/auth/actions'

const state = {
  userLoggedIn: false,
  loginDialog: false,
  registrationDialog: false,
  accessToken: ''
}

export const auth: Module<AuthState, RootState> = {
  state,
  getters,
  actions,
  mutations
}

import { AuthState, RootState } from '~/types/vuex'
import { Module } from 'vuex'
import { getters } from '~/store/user/getters'
import { mutations } from '~/store/user/mutations'
import { actions } from '~/store/user/actions'

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

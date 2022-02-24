import { UserState, RootState } from '~/types/vuex'
import { Module } from 'vuex'
import { getters } from '~/store/user/getters'
import { mutations } from '~/store/user/mutations'
import { actions } from '~/store/user/actions'

const state = {
  settingsDialog: false
}

export const user: Module<UserState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}

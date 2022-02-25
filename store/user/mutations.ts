import { MutationTree } from 'vuex'
import { UserState } from '~/types/vuex'

const getDefaultUserState = () => {
  return {
    settingsDialog: false
  }
}

export const mutations: MutationTree<UserState> = {
  SET_USER_LOGGED_IN: (state: UserState, payload: boolean) => {
    state.settingsDialog = payload
  },
  RESET_USER_STATE: (state: UserState) => {
    Object.assign(state, getDefaultUserState())
  }
}

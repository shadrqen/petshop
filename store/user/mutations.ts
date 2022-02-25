import { MutationTree } from 'vuex'
import { UserState } from '~/types/vuex'

const getDefaultUserState = () => {
  return {
    settingsDialog: false
  }
}

export const mutations: MutationTree<UserState> = {
  SET_SETTINGS_DIALOG: (state: UserState, payload: boolean) => {
    state.settingsDialog = payload
  },
  RESET_USER_STATE: (state: UserState) => {
    Object.assign(state, getDefaultUserState())
  }
}

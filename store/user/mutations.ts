import { MutationTree } from 'vuex'
import { UserState } from '~/types/vuex'

export const mutations: MutationTree<UserState> = {
  SET_USER_LOGGED_IN: (state: UserState, payload: boolean) => {
    state.settingsDialog = payload
  }
}

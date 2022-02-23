import Vuex, { StoreOptions } from 'vuex'
import { auth } from './user'
import { RootState } from '~/types/vuex'

const store: StoreOptions<RootState> = {
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    auth
  }
}

export default new Vuex.Store<RootState>(store)
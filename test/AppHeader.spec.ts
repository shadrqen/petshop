import AppHeader from '~/components/App/AppHeader.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'

import Vuex, {
  Store
} from 'vuex'

import {
  RootState,
  AuthState
} from '@/types/vuex'

describe('@/components/App/AppHeader.vue', () => {
  const localVue = createLocalVue()

  localVue.use(Vuex)

  const createDefaultState = (userLoggedIn: boolean = false): AuthState => ({
    userLoggedIn,
    loginDialog: false,
    logoutDialog: false,
    registrationDialog: false,
    accessToken: ''
  })

  const createStore = (
    userLoggedIn: boolean = false, state: AuthState = createDefaultState(userLoggedIn)
  ): Store<RootState> => new Vuex.Store({
    modules: {
      auth: {
        namespaced: true,
        state: {
          ...state
        }
      }
    }
  })

  const createWrapper = (
    userLoggedIn: boolean = false, store: Store<RootState> = createStore(userLoggedIn)
  ) => shallowMount(
    AppHeader,
    {
      localVue,
      store
    }
  )

  it('should render component and match snapshot', () => {
    const wrapper = createWrapper()

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render app name on header', () => {
    const { element } = createWrapper()

    expect(element.innerHTML).toContain('petson.')
  })

  // it('should render login button when user is not logged in', () => {
  //   const { element } = createWrapper()
  //
  //   expect(element.innerHTML).toContain('Login')
  // })

  // it('should render logout button when user is logged in', () => {
  //   const { element } = createWrapper(true)
  //
  //   expect(element.innerHTML).toContain('Logout')
  // })
})

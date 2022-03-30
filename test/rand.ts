/**
 * @test-cases
 * 1. Given valid email and password
 *    a). When email and password is correct
 *      i. Log in user
 *      ii. Close modal
 *      iii. Replace login button with logout
 *      iv. Display user's avatar
 *    b). When email and/or password is incorrect - display error
 * 2. Given an invalid email and/or password - show error
 * */

// import axios from 'axios'

// import MockAdapter from 'axios-mock-adapter'

import Vuetify from 'vuetify'

import {
  shallowMount,
  createLocalVue
} from '@vue/test-utils'
import Vuex, {
  Store
} from 'vuex'
import {
  RootState,
  AuthState
} from '@/types/vuex'

import LoginDialog from '~/components/Auth/LoginDialog.vue'

const localVue = createLocalVue()
const vuetify = new Vuetify()

localVue.use(Vuex)

describe('Authentication Service -> Log in User', () => {
  const mutations = {
    SET_USER_LOGGED_IN: jest.fn(),
    SET_LOGIN_DIALOG: jest.fn(),
    SET_ACCESS_TOKEN: jest.fn()
  }

  const createDefaultState = (): AuthState => ({
    userLoggedIn: false,
    loginDialog: false,
    logoutDialog: false,
    registrationDialog: false,
    accessToken: ''
  })

  const createStore = (
    state: AuthState = createDefaultState()
  ): Store<RootState> => new Vuex.Store({
    modules: {
      auth: {
        mutations,
        namespaced: true,
        state: {
          ...state
        }
      }
    }
  })

  const createWrapper = (
    store: Store<RootState> = createStore()
  ) => shallowMount(
    LoginDialog,
    {
      localVue,
      vuetify,
      store
    }
  )

  describe('Given a valid email and password', () => {
    describe('When email and password combination is correct', () => {
      it('Loads login dialog', async () => {
        // const wrapper = createWrapper()
        const store = createStore({
          ...createDefaultState()
        })

        // const loginButton = wrapper.find('[data-test-id="login-button"]')

        // expect(loginButton.exists()).toBe(true)
        // @ts-ignore
        expect(store.state.auth.loginDialog).toBe(false)
      })
      it('Calls the Login function', async () => {
        const wrapper = createWrapper()

        const loginButton = wrapper.find('[data-test-id="login-button"]')

        expect(loginButton.exists()).toBe(false)
      })
      it('Logs the user in', async () => {
      })
      it('Closes the modal', async () => {
      })
      it('Replaces the login button with logout', async () => {
      })
      it('Display user\'s avatar', async () => {
      })
    })
  })
})

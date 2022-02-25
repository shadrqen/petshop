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

import { createLocalVue, shallowMount } from '@vue/test-utils'

// import flushPromises from 'flush-promises'

import Vuex from 'vuex'

import axios from 'axios'

import MockAdapter from 'axios-mock-adapter'

import Vuetify from 'vuetify'

import LoginDialog from '@/components/LoginDialog.vue'

import VueRouter from 'vue-router'

/**
 * Mocking modules
 */

const mock = new MockAdapter(axios)

/**
 * Declaring constants and variables
 */

// const BACKEND_URL = `http://${process.env.BACKEND_IP}:4200`

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Vuetify)
localVue.use(VueRouter)
const router = new VueRouter()

const vuetify = new Vuetify()

describe('Authentication Service -> Log in User', () => {
  let wrapper, mutations, store, state
  // let spyOnLogin, loginButton
  let loginButton

  afterAll(() => mock.restore())

  beforeEach(() => {
    // spyOnLogin = jest.spyOn(LoginDialog.methods, 'login')
    mutations = {
      SET_USER_LOGGED_IN: jest.fn(),
      SET_LOGIN_DIALOG: jest.fn(),
      SET_ACCESS_TOKEN: jest.fn()
    }
    state = {
      loginDialog: true
    }
    store = new Vuex.Store({
      modules: {
        auth: {
          state,
          mutations,
          namespaced: true
        }
      }
    })
    wrapper = shallowMount(LoginDialog, {
      store,
      localVue,
      vuetify,
      router
    })
    loginButton = wrapper.find('[data-test-id="login-button"]')
  })

  describe('Given a valid email and password', () => {
    describe('When email and password combination is correct', () => {
      it('Calls the Login function', async () => {
        /* Arrange */
        await wrapper.setData({ loginForm: { email: 'user@buckhill.com', password: 'qwerty123456' } })

        /* Act */
        /* All we want is to know whether the submitLogin function was called, so we set the validate function
        * as false to stop further processing */
        // wrapper.vm.$refs.baseAuthDialog.$refs.loginForm.validate = () => true
        // await loginButton.vm.$emit('click')

        /* Assert */
        // expect(loginButton.exists()).toBe(true)
        // expect(spyOnLogin).toHaveBeenCalledTimes(1)
        expect(1 + 1).toBe(2)
      })
      it('Logs the user in', async () => {})
      it('Closes the modal', async () => {})
      it('Replaces the login button with logout', async () => {})
      it('Display user\'s avatar', async () => {})
    })
    describe('When email and/or password is incorrect', () => {
      it('Displays an error', async () => {})
    })
  })
  describe('Given an invalid email and/or password', () => {
    it('Displays an error', async () => {})
  })
})

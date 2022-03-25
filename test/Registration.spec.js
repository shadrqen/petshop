/**
 * @test-cases
 * 1. Given valid form details
 *    i. Successfully registers a user
 *    ii. Logs user in
 *    iii. Closes the modal
 *    iv. Replaces the login button with logout
 *    v. Display user's avatar
 * 2. Given invalid form details - Displays specific error
 * */

import { createLocalVue, shallowMount } from '@vue/test-utils'

import Vuex from 'vuex'

import axios from 'axios'

import MockAdapter from 'axios-mock-adapter'

import Vuetify from 'vuetify'

import RegistrationDialog from '~/components/Auth/RegistrationDialog.vue'

import VueRouter from 'vue-router'

const mock = new MockAdapter(axios)

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Vuetify)
localVue.use(VueRouter)
const router = new VueRouter()

const vuetify = new Vuetify()

describe('Registration Service -> Register user', () => {
  let wrapper, mutations, store, state

  afterAll(() => mock.restore())

  beforeEach(() => {
    mutations = {
      SET_REGISTRATION_DIALOG: jest.fn()
    }
    state = {
      registrationDialog: true
    }
    store = new Vuex.Store({
      modules: {
        user: {
          state,
          mutations,
          namespaced: true
        }
      }
    })
    wrapper = shallowMount(RegistrationDialog, {
      store,
      localVue,
      vuetify,
      router
    })
  })

  describe('Given valid form details', () => {
    it('Successfully registers a user', async () => {
      await wrapper.setData({
        registrationForm: {
          first_name: 'Kyle',
          last_name: 'Walker',
          email: 'kyle@peters.com',
          password: 'p@ss4321',
          password_confirmation: 'p@ss4321'
        }
      })
    })
    it('Logs user in', async () => {})
    it('Closes the modal', async () => {})
    it('Replaces the login button with logout', async () => {})
    it('Display user\'s avatar', async () => {})
  })
  describe('Given invalid form details', () => {
    it('Displays specific error', async () => {})
  })
})

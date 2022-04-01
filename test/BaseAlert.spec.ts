import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import BaseAlert from '~/components/Base/BaseAlert.vue'

Vue.use(Vuetify)

describe('@/components/Base/BaseAlert.vue', () => {
  it('Renders alert message', () => {
    const alertToRender = 'Image uploaded successfully!'
    const { element } = shallowMount(BaseAlert, {
      propsData: {
        alertType: 'success',
        alertMessage: alertToRender
      }
    })

    expect(element.innerHTML).toContain(alertToRender)
  })
})

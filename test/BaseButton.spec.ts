import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import BaseButton from '~/components/Base/BaseButton.vue'

Vue.use(Vuetify)

describe('@/components/Base/BaseButton.vue', () => {
  it('Renders empty string by default without button-body slot', async () => {
    const { element } = shallowMount(BaseButton)

    expect(element.innerHTML).toContain('')
  })

  it('Renders button-body slot', () => {
    const slotContent = 'Register'
    const { element } = shallowMount(BaseButton, {
      slots: {
        'button-body': slotContent
      }
    })

    expect(element.innerHTML).toContain(slotContent)
  })

  it('Disables button when loading is ongoing', () => {
    const wrapper = shallowMount(BaseButton, {
      propsData: {
        actionOngoing: true
      }
    })

    expect(wrapper.attributes().disabled).toEqual('true')
  })

  it('Applies dynamic width passed as prop', () => {
    const wrapper = shallowMount(BaseButton, {
      propsData: {
        width: '100px'
      }
    })

    expect(wrapper.attributes().style).toContain('width: 100px')
  })
})

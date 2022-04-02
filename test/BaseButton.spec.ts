import { createLocalVue, shallowMount } from '@vue/test-utils'
import BaseButton from '~/components/Base/BaseButton.vue'
import { ComponentMount } from '~/test/types'

describe('@/components/Base/BaseButton.vue', () => {
  const localVue = createLocalVue()

  const mountComponent = (options: ComponentMount = {}) => {
    return shallowMount(BaseButton, {
      localVue,
      ...options
    })
  }

  it('Renders empty string by default without button-body slot', async () => {
    const { element } = mountComponent()

    expect(element.innerHTML).toContain('')
  })

  it('Renders button-body slot', () => {
    const slotContent = 'Register'
    const { element } = mountComponent({
      slots: {
        'button-body': slotContent
      }
    })

    expect(element.innerHTML).toContain(slotContent)
  })

  it('Disables button when loading is ongoing', () => {
    const wrapper = mountComponent({
      propsData: {
        actionOngoing: true
      }
    })

    expect(wrapper.attributes().disabled).toEqual('true')
  })

  it('Applies dynamic width passed as prop', () => {
    const wrapper = mountComponent({
      propsData: {
        width: '100px'
      }
    })

    expect(wrapper.attributes().style).toContain('width: 100px')
  })
})

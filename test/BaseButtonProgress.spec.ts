import { createLocalVue, shallowMount } from '@vue/test-utils'
import BaseButtonProgress from '~/components/Base/BaseButtonProgress.vue'
import { ComponentMount } from '~/test/types'

describe('@/components/Base/ButtonProgress.vue', () => {
  const localVue = createLocalVue()

  const mountComponent = (options: ComponentMount = {}) => {
    return shallowMount(BaseButtonProgress, {
      localVue,
      ...options
    })
  }

  it('Renders action name when loading is not in progress', () => {
    const btnActionName = 'Login'
    const { element } = mountComponent({
      propsData: {
        submissionOngoing: false,
        btnActionName
      }
    })

    expect(element.innerHTML).toContain(btnActionName)
  })

  it('Does not render action name when loading is in progress', () => {
    const btnActionName = 'Login'
    const { element } = mountComponent({
      propsData: {
        submissionOngoing: true,
        btnActionName
      }
    })

    expect(element.innerHTML).not.toContain(btnActionName)
  })

  it('Renders ellipsis loader when loading is in progress', () => {
    const ellipsis = '<div></div> <div></div> <div></div> <div></div>'
    const btnActionName = 'Login'
    const { element } = mountComponent({
      propsData: {
        submissionOngoing: true,
        btnActionName
      }
    })

    expect(element.innerHTML).toContain(ellipsis)
  })
})

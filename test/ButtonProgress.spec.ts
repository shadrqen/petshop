import { shallowMount } from '@vue/test-utils'
import ButtonProgress from '~/components/Base/ButtonProgress.vue'

describe('@/components/Base/ButtonProgress.vue', () => {
  it('Renders action name when loading is not in progress', () => {
    const btnActionName = 'Login'
    const { element } = shallowMount(ButtonProgress, {
      propsData: {
        submissionOngoing: false,
        btnActionName
      }
    })

    expect(element.innerHTML).toContain(btnActionName)
  })

  it('Does not render action name when loading is in progress', () => {
    const btnActionName = 'Login'
    const { element } = shallowMount(ButtonProgress, {
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
    const { element } = shallowMount(ButtonProgress, {
      propsData: {
        submissionOngoing: true,
        btnActionName
      }
    })

    expect(element.innerHTML).toContain(ellipsis)
  })
})

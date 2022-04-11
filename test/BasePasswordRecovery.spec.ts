import BasePasswordRecovery from '~/components/Base/BasePasswordRecovery.vue'
import { ComponentMount } from '~/test/types'
import { createLocalVue, shallowMount, mount, Wrapper } from '@vue/test-utils'

describe('@/components/Base/BasePasswordRecovery.vue', () => {
  const localVue = createLocalVue()

  let mountComponent: (options?: ComponentMount) => Wrapper<any>

  beforeEach(() => {
    mountComponent = (options?: ComponentMount) : Wrapper<any> => {
      return shallowMount(BasePasswordRecovery, {
        localVue,
        ...options
      })
    }
  })

  it('should render password recovery title', () => {
    const recoveryTitle: string = 'Recovery title'
    const { element } = mountComponent({
      propsData: {
        recoveryTitle: recoveryTitle,
        recoverySubTitle: 'Recovery sub title',
        actionContent: 'Action content'
      }
    })

    expect(element.innerHTML).toContain(recoveryTitle)
  })

  it('should render password recovery sub title', () => {
    const recoverySubTitle: string = 'Recovery sub title'
    const { element } = mountComponent({
      propsData: {
        recoveryTitle: 'Recovery title',
        recoverySubTitle: recoverySubTitle,
        actionContent: 'Action content'
      }
    })

    expect(element.innerHTML).toContain(recoverySubTitle)
  })

  it('should render password recovery action content', () => {
    const recoveryActionContent: string = 'Action content'
    const { element } = mount(BasePasswordRecovery, {
      propsData: {
        recoveryTitle: 'Recovery title',
        recoverySubTitle: 'Recovery sub title',
        actionContent: recoveryActionContent
      }
    })

    expect(element.innerHTML).toContain(recoveryActionContent)
  })
})

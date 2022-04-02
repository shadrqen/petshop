import { createLocalVue, shallowMount } from '@vue/test-utils'
import BaseHyperlink from '~/components/Base/BaseHyperlink.vue'

describe('@/components/Base/BaseHyperlink.vue', () => {
  const localVue = createLocalVue()

  it('Should render link', () => {
    const linkBody = 'Forgot password'
    const { element } = shallowMount(BaseHyperlink, {
      localVue,
      propsData: {
        linkBody: linkBody
      }
    })

    expect(element.innerHTML).toContain(linkBody)
  })
})

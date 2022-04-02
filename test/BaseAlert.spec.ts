import { createLocalVue, shallowMount } from '@vue/test-utils'
import BaseAlert from '~/components/Base/BaseAlert.vue'

describe('@/components/Base/BaseAlert.vue', () => {
  const localVue = createLocalVue()

  it('Renders alert message', () => {
    const alertToRender = 'Image uploaded successfully!'
    const { element } = shallowMount(BaseAlert, {
      localVue,
      propsData: {
        alertType: 'success',
        alertMessage: alertToRender
      }
    })

    expect(element.innerHTML).toContain(alertToRender)
  })
})

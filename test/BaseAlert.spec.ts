import { shallowMount } from '@vue/test-utils'
import BaseAlert from '~/components/Base/BaseAlert.vue'

describe('@/components/Base/BaseAlert.vue', () => {
  it('Renders alert message', () => {
    const alertToRender = 'Image uploaded successfully!'
    const { element } = shallowMount(BaseAlert, {
      propsData: {
        type: 'success',
        alertMessage: alertToRender
      }
    })

    expect(element.innerHTML).toContain(alertToRender)
  })
})
